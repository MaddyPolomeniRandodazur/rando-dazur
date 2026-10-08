// Requires Playwright and Chromium. Run after build against a production Next server.
import { createRequire } from 'node:module';
const { chromium } = createRequire(import.meta.url)('playwright');
const base = process.argv[2] || 'http://localhost:3028';
(async () => {
  const browser = await chromium.launch({ headless: true, executablePath: process.env.CHROMIUM_PATH || '/home/agent/.cache/ms-playwright/chromium-1243/chrome-linux64/chrome' });
  let checks = 0;
  for (const width of [360, 430, 820, 1440]) {
    const context = await browser.newContext({ viewport: { width, height: 1000 }, reducedMotion: 'reduce' });
    for (const prefix of ['', '/fr']) {
      for (const slug of ['legal-notice', 'terms-and-conditions', 'privacy-policy', 'cookie-policy']) {
        const page = await context.newPage();
        const response = await page.goto(`${base}${prefix}/${slug}`);
        await page.locator('.legal-content').scrollIntoViewIfNeeded();
        const content = await page.locator('.legal-content').innerText();
        if (response.status() !== 200 || /info@randodazur|225 rue|Biot|TODO|33204\.000|00619ED0293/i.test(content)) throw Error(`Outdated legal text ${prefix}/${slug}`);
        if (!content.includes('bonjour@maddypolomeni.com')) throw Error('Missing official email');
        if (slug !== 'cookie-policy') for (const value of ['22 avenue des Broussailles', 'Les Chênes A', '06400 Cannes', '818 711 764 00048', 'FR50818711764', '9329Z']) if (!content.includes(value)) throw Error(`Missing ${value}`);
        if (slug === 'terms-and-conditions') {
          if (!/25\s?%/.test(content) || !/100\s?%/.test(content) || !content.includes('48') || !content.includes('7') || !/No-show/.test(content)) throw Error('Missing cancellation bands');
          if (/acompte|deposit|non-refundable|non remboursables/i.test(content)) throw Error('Unapproved payment/cancellation condition');
        }
        const info = await page.evaluate(() => ({ width: innerWidth, scrollWidth: document.documentElement.scrollWidth, h1: document.querySelector('h1').getBoundingClientRect().right, emails: [...document.querySelectorAll('.legal-content a[href^="mailto:"]')].map(a => a.getAttribute('href')), telephone: [...document.querySelectorAll('.legal-content a[href^="tel:"]')].map(a => a.getAttribute('href')) }));
        if (info.scrollWidth > info.width || info.h1 > info.width + 1) throw Error(`Responsive overflow ${width} ${prefix}/${slug}`);
        if (!info.emails.includes('mailto:bonjour@maddypolomeni.com')) throw Error('Non-clickable legal email');
        if (slug !== 'cookie-policy' && !info.telephone.includes('tel:+33667906932')) throw Error('Non-clickable phone');
        for (const legalSlug of ['legal-notice', 'terms-and-conditions', 'privacy-policy', 'cookie-policy']) if (!await page.locator(`footer a[href="${prefix}/${legalSlug}"]`).count()) throw Error('Missing legal footer link');
        if (width === 360 && prefix === '/fr') await page.screenshot({ path: `/workspace/scratch/legal-${slug}-360.png` });
        await page.close(); checks++;
      }
    }
    const page = await context.newPage();
    await page.goto(base);
    const business = await page.locator('script[type="application/ld+json"]').evaluateAll(scripts => scripts.flatMap(script => JSON.parse(script.textContent)['@graph'] || []).find(node => node['@id']?.endsWith('#organization')));
    if (business.address.addressLocality !== 'Cannes' || business.address.postalCode !== '06400' || business.vatID !== 'FR50818711764' || business.identifier.value !== '81871176400048' || business.email.join() !== 'bonjour@maddypolomeni.com') throw Error('Inconsistent structured business identity');
    if ((await context.cookies()).length || await page.evaluate(() => Object.keys(localStorage).length || Object.keys(sessionStorage).length || document.querySelectorAll('iframe').length)) throw Error('Unexpected tracker/storage');
    await context.close(); console.log(`${width}px: 8 legal routes, footer contacts and business schema verified`);
  }
  await browser.close(); console.log(`${checks} responsive legal-page checks passed`);
})().catch(error => { console.error(error); process.exitCode = 1; });
