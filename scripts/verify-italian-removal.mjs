import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const base = process.argv[2] || 'http://localhost:3040';
const routes = JSON.parse(readFileSync('.next/routes-manifest.json', 'utf8'));
const prerender = JSON.parse(readFileSync('.next/prerender-manifest.json', 'utf8'));
const redirects = routes.redirects.filter(rule => rule.source === '/it' || rule.source.startsWith('/it/'));
assert.equal(redirects.length, 26);
assert.ok(Object.keys(prerender.routes).every(path => path !== '/it' && !path.startsWith('/it/')));
for (const rule of redirects) {
  const response = await fetch(base + rule.source + '?migration=check', { redirect: 'manual' });
  assert.equal(response.status, 301, rule.source);
  assert.equal(new URL(response.headers.get('location'), base).pathname, rule.destination, rule.source);
  assert.equal(new URL(response.headers.get('location'), base).search, '?migration=check');
  assert.equal((await fetch(base + rule.destination)).status, 200, rule.destination);
}
assert.equal((await fetch(base + '/it/not-a-real-page', { redirect: 'manual' })).status, 404);
const sitemap = await (await fetch(base + '/sitemap.xml')).text();
assert.ok(!sitemap.includes('/it/') && !sitemap.includes('hreflang="it"'));
assert.equal([...sitemap.matchAll(/<loc>/g)].length, 52);
for (const path of [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => new URL(match[1]).pathname)) {
  const html = await (await fetch(base + path)).text();
  assert.ok(!/hreflang="it"|lang="it"|it_IT|Italiano/.test(html), path);
  assert.ok(!/href="\/it(?:\/|"|#)/.test(html), path);
}
console.log(JSON.stringify({ redirects: redirects.length, status: 301, sitemapUrls: 52, italianPrerenders: 0, italianLinksAndMetadata: 0, unknownItalianPath: 404 }));
