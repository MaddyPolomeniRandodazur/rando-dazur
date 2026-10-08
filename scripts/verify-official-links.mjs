import { createRequire } from 'node:module';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const { chromium } = createRequire(import.meta.url)('playwright');
const base = process.argv[2] || 'http://localhost:3039';
const shop = 'https://randodazur.regiondo.fr/categories';
const accounts = ['https://www.instagram.com/randodazur', 'https://www.facebook.com/randodazur/'];
const browser = await chromium.launch({headless:true, executablePath:process.env.CHROMIUM_PATH || '/home/agent/.cache/ms-playwright/chromium-1243/chrome-linux64/chrome'});
const context = await browser.newContext({reducedMotion:'reduce'});
const page = await context.newPage();
const external = [];
page.on('request', request => { const host = new URL(request.url()).hostname; if (/(regiondo|instagram|facebook|connect\.facebook)/.test(host)) external.push(request.url()); });
try {
 const xml = await (await context.request.get(base+'/sitemap.xml')).text();
 const paths = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(x=>new URL(x[1]).pathname);
 for (const path of paths) {
  assert.equal((await page.goto(base+path)).status(),200,path);
  const data = await page.evaluate(()=>({
   socials:[...document.querySelectorAll('footer .footer-social-links a')].map(a=>({url:a.href,label:a.getAttribute('aria-label'),target:a.target,rel:a.rel})),
   booking:[...document.querySelectorAll('a[data-conversion="booking_request"][href^="https://randodazur.regiondo.fr/"]')].map(a=>({url:a.href,target:a.target,rel:a.rel})),
   hasWidget:!!document.querySelector('iframe,script[src*="regiondo"],script[src*="connect.facebook"]'),
   whatsapp:!!document.querySelector('a[href^="https://wa.me/"]'),
   email:!!document.querySelector('a[href="mailto:bonjour@maddypolomeni.com"]'),
  }));
  assert.equal(data.socials.length,2,path+' duplicate/missing footer socials');
  assert.deepEqual(data.socials.map(a=>a.url).sort(),accounts.toSorted(),path);
  for (const a of data.socials) { assert.match(a.label,path.startsWith("/fr") ? /^Suivre Rando d’Azur sur (Instagram|Facebook)$/ : /^Follow Rando d’Azur on (Instagram|Facebook)$/); assert.equal(a.target,'_blank');assert.match(a.rel,/noopener/);assert.match(a.rel,/noreferrer/); }
  assert.ok(data.booking.length>=3,path+' missing booking access');
  for(const a of data.booking){assert.equal(a.url,shop,path);assert.equal(a.target,'_blank');assert.match(a.rel,/noopener/);assert.match(a.rel,/noreferrer/);}
  assert.ok(!data.hasWidget && data.whatsapp && data.email,path);
  if(path.includes('/experiences/')) assert.equal(await page.locator('.experience-detail-hero a[data-conversion="booking_request"][href^="https://randodazur.regiondo.fr/"]').count(),1,path);
 }
 for(const width of [360,430,820,1440]){
  await page.setViewportSize({width,height:1000});
  for(const path of ['/','/experiences/cycling-experiences','/experiences/corporate-incentive-travel']){
   await page.goto(base+path);
   assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),path+' horizontal overflow '+width);
   if(width===360 && path==='/'){
    await page.locator('.mobile-nav > summary').click();
    assert.equal(await page.locator('.booking-button-mobile').getAttribute('href'),shop);
    await context.route('https://randodazur.regiondo.fr/**',route=>route.abort());
    const popupPromise=page.waitForEvent('popup');
    await page.locator('.booking-button-mobile').click();
    const popup=await popupPromise;assert.equal(await page.locator('.mobile-nav').getAttribute('open'),null);await popup.close();
    await context.unroute('https://randodazur.regiondo.fr/**');
   }
   if([360,1440].includes(width)){
    fs.mkdirSync('/workspace/scratch',{recursive:true});
    if(path==='/experiences/cycling-experiences')await page.locator('.experience-detail-hero').screenshot({path:`/workspace/scratch/regiondo-hero-${width}.png`});
    if(path==='/'){await page.locator('#contact').screenshot({path:`/workspace/scratch/official-footer-${width}.png`});await page.locator('#booking').screenshot({path:`/workspace/scratch/regiondo-booking-${width}.png`});}
   }
  }
 }
 assert.deepEqual(external,[],'External social/booking requests before following a link');
 console.log(JSON.stringify({routes:paths.length,widths:[360,430,820,1440],externalRequestsBeforeClick:external.length,mobileMenu:'passed',bookingFallback:'passed',socials:'passed'}));
} finally {await browser.close();}
