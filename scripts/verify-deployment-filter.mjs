import { execFileSync, spawnSync } from 'node:child_process';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';

const script = fileURLToPath(new URL('./vercel-ignore-build.mjs', import.meta.url));
const cwd = mkdtempSync(join(tmpdir(), 'rando-deployment-filter-'));
const git = (...args) => execFileSync('git', args, { cwd, encoding: 'utf8' }).trim();
const commit = (file, content) => {
  mkdirSync(dirname(join(cwd, file)), { recursive: true });
  writeFileSync(join(cwd, file), content);
  git('add', '.');
  git('commit', '-qm', file);
  return git('rev-parse', 'HEAD');
};
const check = (name, previous, expected) => {
  const result = spawnSync(process.execPath, [script], {
    cwd, encoding: 'utf8',
    env: { ...process.env, VERCEL_GIT_PREVIOUS_SHA: previous },
  });
  assert.equal(result.status, expected, `${name}: ${result.stdout} ${result.stderr}`);
  console.log(`PASS: ${name}`);
};
try {
  git('init', '-q');
  git('config', 'user.name', 'Deployment filter verification');
  git('config', 'user.email', 'test@example.invalid');
  const initial = commit('app/page.tsx', 'initial');
  const docs = commit('README.md', 'documentation');
  check('documentation-only push is skipped', initial, 0);
  commit('app/page.tsx', 'runtime change');
  commit('README.md', 'last commit is documentation');
  check('batched runtime then documentation must build', docs, 1);
  const beforeAssets = git('rev-parse', 'HEAD');
  commit('public/image.jpg', 'changed asset');
  check('image changes must build', beforeAssets, 1);
  const beforeRename = git('rev-parse', 'HEAD');
  mkdirSync(join(cwd, 'docs'), { recursive: true });
  git('mv', 'app/page.tsx', 'docs/removed-page.md');
  git('commit', '-qm', 'Move runtime file into documentation');
  check('runtime renamed into documentation must build', beforeRename, 1);
  check('missing previous commit must build', '0'.repeat(40), 1);
  check('first deployment must build', '', 1);
  check('intentional same-commit redeployment must build', git('rev-parse', 'HEAD'), 1);
} finally {
  rmSync(cwd, { recursive: true, force: true });
}
