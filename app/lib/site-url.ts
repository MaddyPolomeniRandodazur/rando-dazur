// Canonicals must never depend on a preview hostname or the build environment.
export function getSiteUrl() {
  return new URL("https://www.randodazur.com");
}
