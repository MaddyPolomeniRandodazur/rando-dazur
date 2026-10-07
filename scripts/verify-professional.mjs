// Verify rendered qualifications, actual prices, schemas and responsive bounds.
import { createRequire } from 'node:module';
import fs from 'node:fs';
const { chromium } = createRequire(import.meta.url)('playwright');
const base = process.argv[2] || 'http://localhost:3029';
const browser = await chromium.launch({ headless: true, executablePath: process.env.CHROMIUM_PATH || '/home/agent/.cache/ms-playwright/chromium-1243/chrome-linux64/chrome' });
const context = await browser.newContext({ reducedMotion: 'reduce' });
const page = await context.newPage();
const failures = [], report = [];
const check = (ok, message) => { if (!ok) failures.push(message); };
for (const path of ['/', '/fr', '/it', '/meet-maddy', '/fr/meet-maddy', '/it/meet-maddy', '/experiences/hiking-experiences', '/fr/experiences/cycling-experiences', '/experiences/food-tours', '/experiences/corporate-incentive-travel', '/travel-trade', '/fr/travel-trade']) {
 for (const width of [360, 430, 820, 1440]) {
  await page.setViewportSize({ width, height: 1000 });
  const response = await page.goto(base + path, { waitUntil: "domcontentloaded" }); await page.waitForTimeout(450);
  check(response.status() === 200, `${path}: HTTP`);
  const rates = page.locator('#private-rates');
  check(await rates.count() === 1, `${path}: one tariff block`);
  check((await rates.innerText()).includes('250') && (await rates.innerText()).includes('350'), `${path}: current prices`);
  check(await rates.locator('strong').allTextContents().then(x => JSON.stringify(x) === '["€250","€350"]'), `${path}: exact rates`);
  check(/per guide|par guide|per guida/.test(await rates.innerText()), `${path}: unit per guide`);
  check(!/per person|par personne|per persona/.test(await rates.innerText()), `${path}: wrong unit`);
  check((await rates.locator('a').getAttribute('href')) === 'mailto:bonjour@maddypolomeni.com', `${path}: request link`);
  check(await rates.evaluate(e => getComputedStyle(e.querySelector("strong")).color === getComputedStyle(e).color), `${path}: readable price colour follows section foreground`);
  const qualifications = page.locator('section[aria-labelledby="professional-qualifications-title"]');
  if (await qualifications.count()) {
   await qualifications.locator('summary').click();
   check(await qualifications.locator('li').count() === 6, `${path}: six qualifications`);
   const text = await qualifications.innerText();
   check(text.includes('00619ED0293') && text.includes('Markel Insurance SE') && text.includes('33204.000/S17566926'), `${path}: registration/insurance`);
   check(await qualifications.locator('a').getAttribute('href') === 'https://recherche-educateur.sports.gouv.fr/accueil', `${path}: official directory`);
  }
  const bounds = await page.evaluate(() => {
   const box = e => { const r = e.getBoundingClientRect(); return { top:r.top, bottom:r.bottom, right:r.right }; };
   const h = document.querySelector('.experience-detail-content');
   const children = h ? [...h.children].filter(e => e.getBoundingClientRect().height > 0).map(box) : [];
   return { overflow: document.documentElement.scrollWidth > innerWidth + 1, overlap: children.some((e,i) => i && e.top < children[i-1].bottom - 1) };
  });
  check(!bounds.overflow && !bounds.overlap, `${path}@${width}: overflow/hero overlap ${JSON.stringify(bounds)}`);
  if (width === 360 || width === 1440) {
   if (path === '/meet-maddy') { await qualifications.scrollIntoViewIfNeeded(); await page.screenshot({ path:`/workspace/scratch/maddy-${width}.png` }); }
   if (path === '/experiences/hiking-experiences') { await page.screenshot({ path:`/workspace/scratch/guide-hero-${width}.png` }); await rates.scrollIntoViewIfNeeded(); await page.screenshot({ path:`/workspace/scratch/rates-${width}.png` }); }
  }
  const scripts = await page.locator('script[type="application/ld+json"]').allTextContents();
  const nodes = scripts.flatMap(s => JSON.parse(s)['@graph'] || [JSON.parse(s)]);
  const person = nodes.find(n => n['@type'] === 'Person');
  if (person) check(person.hasCredential.length === 6 && person.identifier.value === '00619ED0293' && person.url.endsWith('/meet-maddy'), `${path}: Person credentials`);
  const service = nodes.find(n => n['@type'] === 'Service');
  if (service) {
   if (path.includes('corporate')) check(!service.offers, `${path}: custom quotation without fixed offers`);
   else check(JSON.stringify(service.offers.map(o => o.price)) === '[250,350]' && service.offers.every(o => o.priceCurrency === 'EUR' && o.priceSpecification.referenceQuantity.value === 1), `${path}: actual guide offers`);
  }
  report.push({ path, width, ...bounds });
 }
}
fs.writeFileSync('/workspace/scratch/professional-audit.json', JSON.stringify({ report, failures }, null, 2));
console.log(JSON.stringify({ checks:report.length, failures }, null, 2));
await browser.close();
if (failures.length) process.exitCode = 1;
