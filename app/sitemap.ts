import type { MetadataRoute } from "next";
import {
  canonicalExperiencePath,
  experienceSlugs,
  legalPageSlugs,
  localePath,
  locales,
} from "./i18n/config";
import { destinationSlugs } from "./i18n/destination-content";
import { getSiteUrl } from "./lib/site-url";

function localizedSitemapEntry(
  locale: (typeof locales)[number],
  path: string,
  priority: number,
): MetadataRoute.Sitemap[number] {
  const baseUrl = getSiteUrl();
  const languages = Object.fromEntries(
    locales.map((language) => [
      language,
      new URL(
        localePath(language, canonicalExperiencePath(language, path)),
        baseUrl,
      ).toString(),
    ]),
  );

  return {
    url: new URL(localePath(locale, path), baseUrl).toString(),
    alternates: {
      languages: {
        ...languages,
        "x-default": new URL(
          localePath("en", canonicalExperiencePath("en", path)),
          baseUrl,
        ).toString(),
      },
    },
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) => [
    localizedSitemapEntry(locale, "", 1),
    localizedSitemapEntry(locale, "/press", 0.5),
    ...experienceSlugs
      .filter((slug) => locale === "it" || slug !== "evg-experiences")
      .map((slug) =>
        localizedSitemapEntry(locale, `/experiences/${slug}`, 0.8),
      ),
    ...destinationSlugs.map((slug) =>
      localizedSitemapEntry(locale, `/destinations/${slug}`, 0.8),
    ),
    ...legalPageSlugs.map((slug) =>
      localizedSitemapEntry(locale, `/${slug}`, 0.2),
    ),
  ]);
}
