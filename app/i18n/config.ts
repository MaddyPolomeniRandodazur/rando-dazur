export const locales = ["en", "fr", "it"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localePath(locale: Locale, path = "") {
  const cleanPath = path.replace(/^\/+/, "");
  const prefix = locale === defaultLocale ? "" : `/${locale}`;
  return `${prefix}/${cleanPath}`.replace(/\/$/, "") || "/";
}

export const experienceSlugs = [
  "food-tours",
  "hiking-experiences",
  "sunset-apero-hikes",
  "cycling-experiences",
  "wild-provence",
  "edible-plants",
  "outdoor-escape-games",
  "family-experiences",
  "evjf-experiences",
  "evg-experiences",
  "corporate-incentive-travel",
  "cruise-guests",
] as const;

export type ExperienceSlug = (typeof experienceSlugs)[number];

export const legalPageSlugs = [
  "legal-notice",
  "terms-and-conditions",
  "privacy-policy",
  "cookie-policy",
] as const;

export type LegalPageSlug = (typeof legalPageSlugs)[number];

export function isExperienceSlug(value: string): value is ExperienceSlug {
  return experienceSlugs.includes(value as ExperienceSlug);
}

export function canonicalExperiencePath(locale: Locale, path: string) {
  return locale !== "it" && path === "/experiences/evg-experiences"
    ? "/experiences/evjf-experiences"
    : path;
}
