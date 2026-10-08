import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
const audit = JSON.parse(fs.readFileSync('docs/media-cleanup-audit.json', 'utf8'));
function files(root) { return fs.readdirSync(root, { withFileTypes: true }).flatMap(entry => entry.isDirectory() ? files(path.join(root, entry.name)) : [path.join(root, entry.name)]); }
const actual = files('public');
assert.equal(actual.length, audit.files.length);
assert.deepEqual(actual.sort(), audit.files.map(file => file.path).sort());
assert.equal(actual.filter(file => /\.(mp4|mov|m4v|webm|avi|mkv|mpg|mpeg|wmv|ogv|3gp|mts|m2ts)$/i.test(file)).length, 0);
for (const file of audit.files) {
 const data = fs.readFileSync(file.path);
 assert.equal(data.length, file.after_bytes, file.path);
 assert.equal(crypto.createHash('sha256').update(data).digest('hex'), file.sha256_after, file.path);
}
if (process.argv[2]) {
 for (const file of audit.files.filter(file => !file.path.endsWith('/.gitkeep'))) {
  const url = process.argv[2] + '/' + file.path.slice('public/'.length).split('/').map(encodeURIComponent).join('/');
  const response = await fetch(url, { method: 'HEAD' });
  assert.equal(response.status, 200, url);
  assert.equal(Number(response.headers.get('content-length')), file.after_bytes, url);
 }
}
console.log(JSON.stringify({ filesPreserved: actual.length, mediaUrls: actual.length - 2, optimized: audit.optimized.length, deleted: 0, savedBytes: audit.saved_bytes, failures: [] }));
