import type { Locale } from "../i18n/config";
import { getLocalizedPageMetadata } from "./metadata";
import { mimosaCampaign, mimosaCopy, mimosaPhotos } from "./mimosa-campaign";
export function getMimosaMetadata(locale: Locale) {
  const copy = mimosaCopy[locale]; const photo = mimosaPhotos[0];
  const metadata = getLocalizedPageMetadata({ locale, path: mimosaCampaign.path, title: copy.seoTitle, description: copy.description, image: photo.src });
  return { ...metadata, openGraph: { ...metadata.openGraph, images: [{ url: photo.src, width: photo.width, height: photo.height, alt: photo.alt[locale] }] } };
}
