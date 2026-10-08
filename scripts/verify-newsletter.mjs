// Intercepted native submissions only: no contact is created and no email is sent.
import { createRequire } from 'node:module';
import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';
const { chromium } = createRequire(import.meta.url)('playwright');
const base = process.argv[2] || 'http://localhost:3042';
const endpoint = readFileSync('app/lib/newsletter.ts', 'utf8').match(/export const brevoNewsletterFormUrl = "([^"]+)"/)[1];
const browser = await chromium.launch({ headless: true, executablePath: process.env.CHROMIUM_PATH || '/home/agent/.cache/ms-playwright/chromium-1243/chrome-linux64/chrome' });
let posts = 0;
try {
  for (const js of [true, false]) {
    const context = await browser.newContext({ javaScriptEnabled: js, reducedMotion: 'reduce' });
    await context.route('https://dc4031f7.sibforms.com/**', async route => {
      const request = route.request();
      assert.equal(request.url(), endpoint);
      assert.equal(request.method(), 'POST');
      const values = new URLSearchParams(request.postData());
      assert.deepEqual([...values.keys()].sort(), ['EMAIL', 'OPT_IN', 'email_address_check', 'html_type', 'locale'].sort());
      assert.equal(values.get('EMAIL'), 'newsletter-test@example.com');
      assert.equal(values.get('OPT_IN'), '1');
      assert.equal(values.get('email_address_check'), '');
      assert.equal(values.get('locale'), 'fr');
      assert.equal(values.get('html_type'), 'simple');
      posts++;
      await route.fulfill({ status: 200, contentType: 'text/html', body: '<p>Intercepted test only — no Brevo submission.</p>' });
    });
    const page = await context.newPage();
    page.setDefaultTimeout(15000);
    const requests = [];
    page.on('request', r => { if (/sibforms|brevo/.test(r.url())) requests.push(r.url()); });
    for (const prefix of ['', '/fr']) {
      for (const width of [320, 375, 390, 768, 1440]) {
        await page.setViewportSize({ width, height: 1000 });
        await page.goto(base + prefix);
        const form = page.locator('.newsletter-form');
        assert.equal(await form.count(), 1);
        assert.equal(await form.getAttribute('action'), endpoint);
        assert.equal(await form.getAttribute('method'), 'post');
        assert.equal(await page.locator('#newsletter-consent').isChecked(), false);
        assert.equal(await page.locator('#newsletter-consent').getAttribute('required'), '');
        assert.equal(await form.locator('a').getAttribute('href'), prefix + '/privacy-policy');
        assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1));
        assert.deepEqual(requests, []);
        if (js && !prefix) await page.locator('#newsletter').screenshot({ path: `/workspace/scratch/newsletter-${width}.png` });
      }
      await page.goto(base + prefix);
      await page.locator('#newsletter-email').fill('not-an-email');
      await page.locator('.newsletter-submit').evaluate(button => button.scrollIntoView({ block: 'center', behavior: 'instant' }));
      await page.locator('.newsletter-submit').click();
      assert.ok(await page.locator('#newsletter-email').evaluate(i => !i.validity.valid));
      if (js) assert.match(await page.locator('#newsletter-status').innerText(), prefix ? /valide/ : /valid email/);
      await page.locator('#newsletter-email').fill('newsletter-test@example.com');
      await page.locator('.newsletter-submit').evaluate(button => button.scrollIntoView({ block: 'center', behavior: 'instant' }));
      await page.locator('.newsletter-submit').click();
      assert.ok(await page.locator('#newsletter-consent').evaluate(i => !i.validity.valid));
      if (js) assert.match(await page.locator('#newsletter-status').innerText(), prefix ? /accepter/ : /agree/);
      assert.deepEqual(requests, []);
      await page.locator('#newsletter-consent').check();
      if (js) {
        await page.locator("input[name=email_address_check]").evaluate(input => { input.value = "bot-test"; });
        await page.locator(".newsletter-submit").evaluate(button => button.scrollIntoView({ block: "center", behavior: "instant" }));
        await page.locator(".newsletter-submit").click();
        assert.match(await page.locator("#newsletter-status").innerText(), prefix ? /envoyée/ : /could not send/);
        assert.deepEqual(requests, []);
        await page.locator("input[name=email_address_check]").evaluate(input => { input.value = ""; });
      }
      console.log("Submitting intercepted form", { javaScript: js, prefix, valid: await page.locator(".newsletter-form").evaluate(f => f.checkValidity()) });
      const navigation = page.waitForURL(endpoint, { waitUntil: "domcontentloaded" });
      await page.locator('.newsletter-submit').evaluate(button => button.scrollIntoView({ block: 'center', behavior: 'instant' }));
      await page.locator('.newsletter-submit').click();
      await navigation;
      assert.match(await page.locator('body').innerText(), /Intercepted test only/);
      requests.length = 0;
    }
    await context.close();
  }
  assert.equal(posts, 4);
  console.log(JSON.stringify({ responsiveChecks: 20, mockedNativePosts: posts, JavaScriptAndNoJavaScript: 'passed', validation: 'passed', consentPrechecked: false, BrevoRequestsBeforeSubmit: 0, realEmailsSent: 0 }));
} finally { await browser.close(); }
