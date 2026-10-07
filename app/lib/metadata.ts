import type { Metadata } from "next";
import { imageDimensions } from "./image-dimensions";
import { homeSeo, frenchExperienceSeo } from "./seo-content";
import { destinationImages } from "./destination-images";
import { experienceImages } from "./experience-images";
import { canonicalExperiencePath, locales, localePath, type Locale } from "../i18n/config";
import { getMessages } from "../i18n/messages";
import { getSiteUrl } from "./site-url";
import { isExperienceSlug } from "../i18n/config";

const localeOpenGraph: Record<Locale, string> = {
  en: "en_GB",
  fr: "fr_FR",
  it: "it_IT",
};

export function getLocalizedPageMetadata({
  locale,
  path,
  title,
  description,
  image,
  noIndex = false,
}: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  image?: string;
  noIndex?: boolean;
}): Metadata {
  const baseUrl = getSiteUrl();
  const localizedPath = localePath(locale, path);
  const absoluteUrl = new URL(localizedPath, baseUrl).toString();
  const languages = Object.fromEntries(
    (path === "/travel-trade" ? locales.filter(language => language !== "it") : path === "/experiences/evg-experiences" && locale === "it" ? [locale] : locales).map((language) => [
      language,
      new URL(
        localePath(language, canonicalExperiencePath(language, path)),
        baseUrl,
      ).toString(),
    ]),
  );
  const verification = {
    ...(process.env.GOOGLE_SITE_VERIFICATION
      ? { google: process.env.GOOGLE_SITE_VERIFICATION }
      : {}),
    ...(process.env.BING_SITE_VERIFICATION
      ? {
          other: {
            "msvalidate.01": process.env.BING_SITE_VERIFICATION,
          },
        }
      : {}),
  };
  const slug = path.split("/").pop()!;
  const pagePhoto = path.startsWith("/destinations/")
    ? destinationImages[slug]?.[0]
    : path.startsWith("/experiences/") ? experienceImages[slug]?.[0] : undefined;
  const socialImage = image ?? pagePhoto?.src ?? "/images/hero/french-riviera-panoramic-picnic.jpg";
  const socialImageAlt = pagePhoto?.alt ?? "A Provençal picnic overlooking the French Riviera";

  return {
    metadataBase: baseUrl,
    title,
    description,
    alternates: {
      canonical: localizedPath,
      languages: {
        ...languages,
        "x-default": new URL(
          localePath(path === "/experiences/evg-experiences" && locale === "it" ? "it" : "en", canonicalExperiencePath(path === "/experiences/evg-experiences" && locale === "it" ? "it" : "en", path)),
          baseUrl,
        ).toString(),
      },
    },
    robots: noIndex
      ? { index: false, follow: true }
      : { index: true, follow: true },
    ...(Object.keys(verification).length > 0 ? { verification } : {}),
    openGraph: {
      type: "website",
      siteName: "Rando d’Azur",
      title,
      description,
      url: absoluteUrl,
      locale: localeOpenGraph[locale],
      images: [{ url: socialImage, alt: socialImageAlt, ...imageDimensions[socialImage] }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}

export async function getHomeMetadata(locale: Locale): Promise<Metadata> {
  return getLocalizedPageMetadata({ locale, path: "/", ...homeSeo[locale] });
}

const englishExperienceMetadata: Record<
  string,
  { title: string; description: string }
> = {
  "food-tours": {
    title: "Cannes Food Tours & Private Culinary Experiences | Rando d’Azur",
    description:
      "Join a private Cannes food tour through local markets, regional specialities and independent producers, guided by people who know the French Riviera.",
  },
  "hiking-experiences": {
    title: "Private Hiking Guides in Cannes & the French Riviera | Rando d’Azur",
    description:
      "Explore coastal paths, the Estérel red rocks and the Riviera hinterland on a private guided hike tailored to your pace and interests.",
  },
  "sunset-apero-hikes": {
    title: "Sunset Apéro Hikes on the French Riviera | Rando d’Azur",
    description:
      "Walk quiet trails with a local guide, then share a Provençal apéro as the sun sets over the French Riviera.",
  },
  "cycling-experiences": {
    title: "Cannes Bike Tours & Estérel Mountain Biking | Rando d’Azur",
    description:
      "Discover Cannes by bike, ride Estérel mountain trails or plan a private cycling tour with a local French Riviera guide.",
  },
  "family-experiences": {
    title: "Family Activities on the French Riviera | Rando d’Azur",
    description:
      "Find thoughtful outdoor family activities on the French Riviera, with private adventures adapted to your children’s ages and your pace.",
  },
  "corporate-incentive-travel": {
    title: "Cannes Corporate Experiences & Incentive Travel | Rando d’Azur",
    description:
      "A local experience partner for agencies and DMCs: private outdoor activities, team building and incentive experiences in Cannes and on the French Riviera.",
  },
  "wild-provence": {
    title: "Wild Provence & Local Nature Walks in the Var | Rando d’Azur",
    description:
      "Explore Provence’s wild plants and landscapes with a local guide on a seasonal private nature experience around Grasse and the Pays de Fayence.",
  },
  "edible-plants": {
    title: "Edible Plant Experiences in Provence | Rando d’Azur",
    description:
      "Learn to recognise Provence’s seasonal edible plants on a locally guided walk that shares traditional knowledge and responsible foraging practices.",
  },
  "outdoor-escape-games": {
    title: "Outdoor Escape Games & Team Building in Cannes | Rando d’Azur",
    description:
      "Bring your group together for an outdoor escape game on the French Riviera, with local stories, shared challenges and thoughtful planning.",
  },
  "evjf-experiences": {
    title: "Bachelorette & Bachelor Experiences on the French Riviera | Rando d’Azur",
    description:
      "Celebrate a bachelorette or bachelor party with a private French Riviera experience, locally guided and shaped around your group.",
  },
  "evg-experiences": {
    title: "Bachelor Group Experiences on the French Riviera | Rando d’Azur",
    description:
      "Plan an active bachelor group experience on the French Riviera, with a private local guide and a programme made for your friends.",
  },
  "cruise-guests": {
    title: "Private Cruise Excursions & Shore Experiences in Cannes | Rando d’Azur",
    description:
      "Explore beyond the port on a private Cannes cruise excursion, timed around your call and coordinated by a local French Riviera team.",
  },
};

export async function getExperienceMetadata(
  locale: Locale,
  slug: string,
): Promise<Metadata> {
  const copy = getMessages(locale);
  if (!isExperienceSlug(slug)) return {};
  const experience = copy.experiencePage.pages[slug];
  const path = `/experiences/${slug}`;
  const englishMetadata = englishExperienceMetadata[slug];
  const title =
    locale === "en"
      ? englishMetadata.title
      : locale === "fr" ? `${frenchExperienceSeo[slug].title} | Rando d’Azur` : `${experience.title} | Rando d’Azur`;

  return getLocalizedPageMetadata({
    locale,
    path,
    title,
    description:
      locale === "en"
        ? englishMetadata.description
        : locale === "fr" ? frenchExperienceSeo[slug].description : experience.description,
  });
}
