export function publicAssetUrl(relativePath: string) {
  return `/${relativePath
    .split(/[\\/]/)
    .map((segment) => encodeURIComponent(segment))
    .join("/")}`;
}

export const mediaPlaceholderUrl = publicAssetUrl("media-placeholder.svg");
