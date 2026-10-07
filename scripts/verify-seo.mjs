// Run against a production Next server: node scripts/verify-seo.mjs http://localhost:3024
import { createRequire } from 'node:module';
const { chromium } = createRequire(import.meta.url)('playwright');
import fs from 'node:fs';
const base = process.argv[2] || 'http://localhost:3024';
const origin = 'https://www.randodazur.com';
(async () => {
  const browser = await chromium.launch({ headless: true, executablePath: process.env.CHROMIUM_PATH || '/home/agent/.cache/ms-playwright/chromium-1243/chrome-linux64/chrome' });
  const context = await browser.newContext({ reducedMotion: 'reduce' });
  const sitemapResponse = await context.request.get(`${base}/sitemap.xml`);
  const sitemap = await sitemapResponse.text();
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
  if (!urls.length || new Set(urls).size !== urls.length) throw Error('Empty or duplicate sitemap');
  const robots = await (await context.request.get(`${base}/robots.txt`)).text();
  if (!robots.includes(`Sitemap: ${origin}/sitemap.xml`) || robots.includes('Disallow: /_next') || /Disallow: \/\s*$/.test(robots)) throw Error('Robots blocks public resources');
  const failures = [], report = [], internal = new Set(), images = new Set();
  const titleSet = new Set(), descriptionSet = new Set();
  for (const url of urls) {
    const path = new URL(url).pathname;
    const page = await context.newPage();
    const response = await page.goto(`${base}${path}`);
    const data = await page.evaluate(() => ({
      title: document.title,
      description: document.querySelector('meta[name="description"]')?.content,
      canonical: document.querySelector('link[rel="canonical"]')?.href,
      robots: document.querySelector('meta[name="robots"]')?.content,
      headings: [...document.querySelectorAll('h1')].map(x => x.textContent),
      alternates: [...document.querySelectorAll('link[hreflang]')].map(x => ({ lang: x.hreflang, href: x.href })),
      og: document.querySelector('meta[property="og:url"]')?.content,
      ogImage: document.querySelector('meta[property="og:image"]')?.content,
      twitter: document.querySelector('meta[name="twitter:card"]')?.content,
      scripts: [...document.querySelectorAll('script[type="application/ld+json"]')].map(x => x.textContent),
      links: [...document.querySelectorAll('a[href]')].map(x => x.getAttribute('href')),
      images: [...document.querySelectorAll('img')].map(x => ({ src: x.getAttribute('src'), alt: x.getAttribute('alt') })),
      banner: !!document.querySelector('aside[aria-label="Website update information"]'),
    }));
    const check = (ok, message) => { if (!ok) failures.push(`${path}: ${message}`); };
    check(response.status() === 200, `HTTP ${response.status()}`);
    check(data.canonical === url, `canonical ${data.canonical}`);
    check(!/noindex/.test(data.robots || ''), 'unexpected noindex');
    check(data.headings.length === 1, `${data.headings.length} H1s`);
    check(data.title && data.description, 'missing title/description');
    check(!titleSet.has(data.title), 'duplicate title'); titleSet.add(data.title);
    check(!descriptionSet.has(data.description), 'duplicate description'); descriptionSet.add(data.description);
    check(new URL(data.og).href === new URL(url).href && data.ogImage && data.twitter === 'summary_large_image', 'social metadata');
    check(data.banner, 'missing banner');
    check(data.links.every(h => !h.includes('REPLACE-')), 'unpublished social link');
    check(path === '/it/experiences/evg-experiences' ? data.alternates.every(a => ['it', 'x-default'].includes(a.lang)) : data.alternates.some(a => a.lang === 'en') && data.alternates.some(a => a.lang === 'fr'), 'missing or mismatched language alternatives');
    for (const script of data.scripts) {
      try { const json = JSON.parse(script); check(json['@context'] === 'https://schema.org', 'schema context');
        for (const node of json['@graph'] || [json]) {
          check(!!node['@type'], 'missing schema type');
          if (node.telephone) check(node.telephone === '+33667906932', 'schema phone');
          check(!node.aggregateRating && !node.review && !node.openingHours && !node.priceRange, 'unverified business facts');
          if (node.itemListElement) for (const item of node.itemListElement) check(item.item.startsWith(origin), 'breadcrumb origin');
        }
      } catch (error) { failures.push(`${path}: invalid JSON-LD ${error.message}`); }
    }
    if (path.includes('/experiences/') || path.includes('/destinations/') || path.endsWith('/travel-trade') || path.endsWith('/meet-maddy') || ['/', '/fr', '/it'].includes(path)) check(data.scripts.length > 0, 'missing structured data');
    if (path.endsWith('/destinations/iles-de-lerins')) {
      const activityLinks = await page.locator('.destination-experience-list a').evaluateAll(a => a.map(x => x.getAttribute('href')));
      check(activityLinks.length === 3 && activityLinks.every(h => !/food-tours|cycling|cruise-guests/.test(h)), 'incorrect Lerins activities');
    }
    for (const link of data.links) if (link.startsWith('/')) internal.add(link);
    for (const image of data.images) { check(image.alt !== null, 'image missing alt'); if (image.src) images.add(image.src); }
    report.push({ path, title: data.title, description: data.description, canonical: data.canonical, h1: data.headings[0], jsonLd: data.scripts.length });
    await page.close();
  }
  const linkedPaths = new Set([...internal].map(h => new URL(h, base).pathname));
  for (const url of urls) if (!linkedPaths.has(new URL(url).pathname)) failures.push(`Orphan canonical URL ${url}`);
  for (const href of internal) {
    const url = new URL(href, base);
    const response = await context.request.get(url.href);
    if (response.status() !== 200) failures.push(`Internal link ${href}: HTTP ${response.status()}`);
    if (url.hash) {
      const html = await response.text();
      const id = decodeURIComponent(url.hash.slice(1));
      if (!html.includes(`id="${id}"`)) failures.push(`Missing anchor ${href}`);
    }
  }
  // Original files and optimizer output are both checked.
  for (const src of images) {
    const response = await context.request.get(new URL(src, base).href);
    if (response.status() !== 200) failures.push(`Image ${src}: HTTP ${response.status()}`);
  }
  for (const path of ['/experiences/evg-experiences', '/fr/experiences/evg-experiences']) {
    const response = await context.request.get(`${base}${path}`, { maxRedirects: 0 });
    if (response.status() !== 308 || !response.headers().location?.includes('evjf-experiences')) failures.push(`Incorrect redirect ${path}`);
  }
  for (const path of ['/journal', '/fr/journal', '/it/journal']) {
    const response = await context.request.get(`${base}${path}`);
    const html = await response.text();
    if (response.status() !== 200 || !html.includes('noindex') || urls.includes(origin + path)) failures.push(`Journal indexing policy ${path}`);
  }
  // Language annotations must point to real canonical, indexable sitemap entries.
  for (const match of sitemap.matchAll(/hreflang="[^"]+" href="([^"]+)"/g)) {
    if (!urls.includes(match[1])) failures.push(`Non-canonical sitemap alternative ${match[1]}`);
  }
  const missing = await context.request.get(`${base}/destinations/not-a-destination`);
  if (missing.status() !== 404) failures.push('Invalid destination should return 404');
  fs.mkdirSync('/workspace/scratch', { recursive: true });
  fs.writeFileSync('/workspace/scratch/seo-route-audit.json', JSON.stringify({ report, failures, links: internal.size, images: images.size }, null, 2));
  console.log(JSON.stringify({ routes: report.length, links: internal.size, images: images.size, failures }, null, 2));
  await browser.close();
  if (failures.length) process.exitCode = 1;
})().catch(e => { console.error(e); process.exitCode = 1; });
