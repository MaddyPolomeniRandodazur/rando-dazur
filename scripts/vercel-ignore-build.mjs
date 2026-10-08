import { execFileSync } from 'node:child_process';

// Vercel: exit 0 skips the build; exit 1 builds it. Always build on uncertainty.
// Compare with the last SUCCESSFUL deployment, not HEAD^: pushes may contain
// several commits, including application changes before a documentation commit.
const previous = process.env.VERCEL_GIT_PREVIOUS_SHA;
const build = (reason) => {
  console.log(`Build required: ${reason}`);
  process.exit(1);
};
if (!previous || !/^[a-f0-9]{40,64}$/i.test(previous)) {
  build('no valid previous successful deployment');
}
try {
  execFileSync('git', ['cat-file', '-e', `${previous}^{commit}`], { stdio: 'pipe' });
  // Include both paths of renames: moving application code into docs is a
  // runtime deletion and must still build.
  const files = execFileSync('git', ['diff', '--no-renames', '--name-only', '-z', previous, 'HEAD'], {
    encoding: 'utf8',
  }).split('\0').filter(Boolean);
  if (!files.length) build('unchanged commit; allow intentional redeployment');
  const documentationOnly = files.every((file) =>
    file.startsWith('docs/') || /^[^/]+\.md$/i.test(file) ||
    /^scripts\/verify-[^/]+\.mjs$/.test(file),
  );
  if (!documentationOnly) build('application, assets or configuration changed');
  console.log('Skipping deployment: only documentation or verification scripts changed.');
  process.exit(0);
} catch {
  build('previous commit or Git comparison unavailable');
}
