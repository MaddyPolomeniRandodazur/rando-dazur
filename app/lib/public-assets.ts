export function publicAssetUrl(relativePath: string) {
  return `/${relativePath
    .split(/[\\/]/)
    .map((segment) => encodeURIComponent(segment))
    .join("/")}`;
}
