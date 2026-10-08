import { createRequire } from 'node:module';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const { chromium } = createRequire(import.meta.url)('playwright');
const base = process.argv[2] || 'http://localhost:3044';
const browser = await chromium.launch({ headless: true, executablePath: process.env.CHROMIUM_PATH || '/home/agent/.cache/ms-playwright/chromium-1243/chrome-linux64/chrome' });
const context = await browser.newContext({ reducedMotion: 'reduce' });
const page = await context.newPage();
const checks = [];
try {
 for (const prefix of ['', '/fr']) for (const width of [320, 375, 390, 768, 1440]) {
  await page.setViewportSize({ width, height: 1000 });
  for (const path of ['', '/press', '/meet-maddy', '/kids-schools-youth-groups', '/experiences/family-experiences', '/experiences/cycling-experiences']) {
   const url = base + prefix + (path || (prefix ? '' : '/'));
   assert.equal((await page.goto(url)).status(), 200, url);
   const layout = await page.evaluate(() => {
    const hero = document.querySelector('.experience-detail-content');
    const rects = hero ? [...hero.children].map(e => e.getBoundingClientRect()).filter(r => r.height > 0) : [];
    return { overflow: document.documentElement.scrollWidth > innerWidth + 1, overlap: rects.some((r, i) => i > 0 && r.top < rects[i - 1].bottom - 1), cut: hero ? hero.getBoundingClientRect().bottom > document.querySelector('.experience-detail-hero').getBoundingClientRect().bottom + 1 : false };
   });
   assert.deepEqual(layout, { overflow: false, overlap: false, cut: false }, `${url}@${width}`);
   assert.equal(await page.locator('main h1').count(), 1);
   if (prefix) {
    assert.ok(!(await page.locator('body').innerText()).includes('French Riviera'), url);
    assert.ok(!(await page.title()).includes('French Riviera'));
    for (const name of ['description', 'og:description', 'og:image:alt', 'twitter:image:alt']) {
     const el = page.locator(`meta[name="${name}"],meta[property="${name}"]`);
     for (const content of await el.evaluateAll(es => es.map(e => e.content))) assert.ok(!content.includes('French Riviera'), `${url} ${name}`);
    }
   }
   if (path === '/press') {
    assert.equal(await page.locator('.press-story-card').count(), 13);
    assert.equal(await page.locator('.press-archive-card').count(), 0);
    assert.equal(await page.locator('.press-story-card a[href*="bbc.com/travel/article/20220418"]').count(), 1);
    assert.equal(await page.locator('.press-story-card a[href*="thetenerifepropertyguide.com"]').count(), 1);
    assert.equal(await page.locator('a[href*="nytimes.com"]').count(), 0);
    assert.equal(await page.locator('.site-header-light').count(), 1);
    if (width === 1440) assert.equal(await page.locator('.desktop-nav > a').first().evaluate(e => getComputedStyle(e).color), 'rgb(37, 43, 39)');
   }
   if (!path) {
    assert.equal(await page.locator('.partner-logo-card').count(), 12);
    assert.equal(await page.locator('.press-story-card').count(), 3);
    assert.equal(await page.locator('.featured-in-logo').count(), 3);
    const newsletter = page.locator('.newsletter-form');
    assert.equal((await newsletter.getAttribute('method')).toUpperCase(), 'POST');
    assert.equal(await newsletter.locator('input[name="OPT_IN"]').isChecked(), false);
   }
   if (path === '/meet-maddy') {
    const profile = await page.locator('.founder-section').innerText();
    assert.match(profile, /20 (years|ans)/i);
    const graph = JSON.parse(await page.locator('script[type="application/ld+json"]').textContent())['@graph'];
    assert.deepEqual(graph.find(n => n['@type'] === 'Person').knowsLanguage, ['fr', 'en', 'it']);
    assert.deepEqual(graph.find(n => n['@type'] === 'WebSite').inLanguage, ['en', 'fr']);
   }
   if (path === '/kids-schools-youth-groups') {
    const form = page.locator('#group-enquiry form');
    assert.equal(await form.locator('input,select,textarea').count(), 5);
    assert.equal(await form.locator('[required]').count(), 4);
    assert.ok((await form.getAttribute('action')).startsWith('mailto:'));
    assert.equal(await page.locator('#private-rates').count(), 0, 'Youth offers remain quotation-only');
   }
   if ([390,1440].includes(width) && ['/press', '/kids-schools-youth-groups'].includes(path)) await page.screenshot({ path: `/workspace/scratch/editorial-audit/${prefix ? 'fr' : 'en'}-${path.slice(1)}-${width}.png` });
   checks.push({ locale: prefix ? 'fr' : 'en', path: path || '/', width, ...layout });
  }
 }
 // Audit all French editorial pages and the new Groups menu in both languages.
 const sitemap = await (await fetch(base + '/sitemap.xml')).text();
 const frenchPaths = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => new URL(m[1]).pathname).filter(p => p.startsWith('/fr'));
 for (const path of frenchPaths) {
  await page.goto(base + path);
  assert.ok(!(await page.locator('body').innerText()).includes('French Riviera'), path);
 }
 for (const prefix of ['', '/fr']) for (const width of [390, 768, 1440]) {
  await page.setViewportSize({ width, height: 1000 });
  await page.goto(base + prefix + '/press');
  const mobile = await page.locator('.mobile-nav > summary').isVisible();
  if (mobile) await page.locator('.mobile-nav > summary').click();
  const scope = page.locator(mobile ? '.mobile-nav' : '.desktop-nav');
  const groups = scope.locator('.nav-dropdown').filter({ has: page.locator(`nav[aria-label="${prefix ? 'Groupes' : 'Groups'}"]`) });
  await groups.locator('summary').click();
  const link = groups.locator(`a[href="${prefix}/kids-schools-youth-groups"]`);
  assert.equal(await link.isVisible(), true);
  await link.click();
  await page.waitForURL(base + prefix + '/kids-schools-youth-groups');
  const languages = page.locator(mobile ? '.mobile-nav .language-selector' : '.header-actions > .language-selector');
  if (mobile) await page.locator('.mobile-nav > summary').click();
  await languages.locator('summary').click();
  assert.equal(await languages.locator('.language-options > a, .language-options > span').count(), 2);
  assert.equal(await languages.locator('a[href*="/it"]').count(), 0);
 }
 // Verify the actual contact handoff without sending a real message to anyone.
 const handoffs = [];
 await context.route('https://wa.me/**', async route => { handoffs.push(route.request().url()); await route.fulfill({ status: 200, contentType: 'text/html', body: '<p>Intercepted test handoff</p>' }); });
 for (const prefix of ['', '/fr']) {
  await page.goto(base + prefix + '/kids-schools-youth-groups');
  const form = page.locator('#group-enquiry form');
  await form.locator('button').click();
  assert.equal(handoffs.length, prefix ? 1 : 0, 'Invalid enquiry must not navigate');
  assert.match(await form.locator('select').evaluate(e => e.validationMessage), prefix ? /Veuillez/ : /Please/);
  await form.locator('select').selectOption({ index: 1 });
  await form.locator('[name="age"]').fill('8–11');
  await form.locator('[name="count"]').fill('16');
  await form.locator('[name="date"]').fill('2026-11-12');
  await form.locator('[name="goals"]').fill('TEST ONLY: biodiversity');
  await form.locator('button').click();
  await page.waitForURL('https://wa.me/**');
  const target = new URL(handoffs.at(-1));
  assert.equal(target.pathname, '/33667906932');
  const message = target.searchParams.get('text');
  for (const value of ['8–11','16','2026-11-12','TEST ONLY: biodiversity']) assert.ok(message.includes(value));
 }
 const report = { responsiveViews: checks.length, contactHandoffsIntercepted: handoffs.length, failures: [] };
 fs.writeFileSync('/workspace/scratch/editorial-audit/test-results.json', JSON.stringify({ ...report, checks }, null, 2));
 console.log(JSON.stringify(report));
} finally { await browser.close(); }
