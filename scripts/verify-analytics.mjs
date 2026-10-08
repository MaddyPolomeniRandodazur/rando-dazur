// Real Vercel browser SDK, locally intercepted intake: never sends test data to Vercel.
import { createRequire } from 'node:module';
import fs from 'node:fs';
import { execFileSync } from 'node:child_process';
const { chromium } = createRequire(import.meta.url)('playwright');
const base = process.argv[2] || 'http://localhost:3032';
const script = process.env.ANALYTICS_SCRIPT_FIXTURE ? fs.readFileSync(process.env.ANALYTICS_SCRIPT_FIXTURE, 'utf8') : execFileSync('curl', ['--fail', '--silent', '--show-error', 'https://va.vercel-scripts.com/v1/script.js'], { encoding: 'utf8' });
const browser = await chromium.launch({headless:true,executablePath:'/home/agent/.cache/ms-playwright/chromium-1243/chrome-linux64/chrome'});
const key = 'rando-analytics-consent-v1';
const assert = (v,m) => { if (!v) throw Error(m); };
try {
 for (const width of [360,430,820,1440]) {
  const context = await browser.newContext({viewport:{width,height:1000},userAgent:'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36',reducedMotion:'reduce'});
  await context.addInitScript(() => {
   Object.defineProperty(navigator,'webdriver',{get:()=>false});
   document.addEventListener('click',e => { if (e.target instanceof Element && e.target.closest('a[href]')) e.preventDefault(); },true);
  });
  const bodies = []; let scriptRequests=0;
  await context.route('**/_vercel/insights/**',async route => {
   if (route.request().url().endsWith('/script.js')) {scriptRequests++;await route.fulfill({body:script,contentType:'application/javascript'});}
   else {if (route.request().method()==='POST') bodies.push(JSON.parse(route.request().postData()));await route.fulfill({status:200,body:'{}'});}
  });
  const page=await context.newPage();await page.goto(base+'/?email=private@example.org#private-token',{waitUntil:'domcontentloaded'});await page.waitForTimeout(500);
  assert(scriptRequests===0 && bodies.length===0,'Analytics before consent');
  assert((await context.cookies()).length===0 && await page.evaluate(()=>Object.keys(localStorage).length===0),'Storage before choice');
  await page.getByRole('button',{name:'Audience measurement settings',exact:true}).click();
  await page.getByRole('button',{name:'Close',exact:true}).click();
  assert(scriptRequests===0,'Closing panel grants consent');
  await page.getByRole('button',{name:'Audience measurement settings',exact:true}).click();
  await page.getByRole('button',{name:'Refuse / withdraw',exact:true}).click();
  assert(scriptRequests===0,'Refusing loads script');
  await page.getByRole('button',{name:'Audience measurement settings',exact:true}).click();
  await page.getByRole('button',{name:'Allow analytics',exact:true}).click();await page.waitForTimeout(500);
  assert(scriptRequests===1,'Exactly one SDK after consent');
  assert(bodies.some(b=>!b.en && b.o==='https://www.randodazur.com/'),'Sanitized pageview');
  const links=[['.footer-contact-links a[href*="wa.me"]','whatsapp_click'],['.footer-contact-links a[href^="tel:"]','phone_click'],['.footer-contact-links a[href^="mailto:"]','email_click'],['[data-conversion="booking_request"]','booking_request_click']];
  for (const [selector,name] of links) {await page.locator(selector).first().click();await page.waitForTimeout(150);assert(bodies.filter(b=>b.en===name).length===1,`One ${name}`);}
  assert(bodies.every(b=>!b.ed && !b.userId && !b.groupId && !b.props && !b.__cdp && !JSON.stringify(b).includes('private')),'No identifying payload/URL data');
  const before=bodies.length;
  await page.evaluate(()=>Object.defineProperty(document,'referrer',{configurable:true,value:'https://example.org/profile/private@example.org'}));
  await page.locator(links[1][0]).click();await page.waitForTimeout(150);assert(bodies.length===before,'Sensitive referrer filtered');
  await page.evaluate(()=>Object.defineProperty(document,'referrer',{configurable:true,value:''}));
  await page.evaluate(k=>localStorage.removeItem(k),key);
  await page.locator(links[1][0]).click();await page.waitForTimeout(150);assert(bodies.length===before,'Clearing consent storage stops events');
  await page.getByRole('button',{name:'Audience measurement settings',exact:true}).click();
  await page.getByRole('button',{name:'Allow analytics',exact:true}).click();
  await page.getByRole('button',{name:'Audience measurement settings',exact:true}).click();
  assert(await page.locator('dialog').evaluate(e=>e.getBoundingClientRect().right <= innerWidth && e.getBoundingClientRect().left >= 0),'Responsive panel');
  await page.screenshot({path:`/workspace/scratch/analytics-consent-${width}.png`});
  await page.getByRole('button',{name:'Refuse / withdraw',exact:true}).click();await page.waitForTimeout(700);
  await page.locator(links[1][0]).click();await page.waitForTimeout(200);
  assert(bodies.length===before && scriptRequests===1,'Withdrawal stops all events and script reload');
  const record=await page.evaluate(k=>JSON.parse(localStorage.getItem(k)),key);assert(record.allowed===false && record.expires>Date.now() && Object.keys(record).length===2,'Minimal preference record');
  assert((await context.cookies()).length===0,'No analytics cookies');
  console.log(`${width}px: default off, refusal, consent, 4 anonymous conversions, redaction, withdrawal, layout verified`);
  await context.close();
 }
 const context=await browser.newContext();await context.addInitScript(k=>localStorage.setItem(k,JSON.stringify({allowed:true,expires:1})),key);
 const page=await context.newPage();await page.goto(base+'/fr',{waitUntil:'domcontentloaded'});await page.waitForTimeout(350);
 assert(await page.locator('script[src*="insights"]').count()===0,'Expired consent inactive');await context.close();
} finally {await browser.close();}
