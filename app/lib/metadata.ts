import type { Metadata } from "next";
import { locales, localePath, type Locale } from "../i18n/config";
import { getMessages } from "../i18n/messages";
import { getSiteUrl } from "./site-url";
import { publicAssetUrl } from "./public-assets";
import {
  getAllExperiencePhotoCollections,
  getBestLandscapeExperiencePhoto,
  getExperiencePhotoCollection,
} from "./experience-photos";
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
    locales.map((language) => [
      language,
      new URL(
        localePath(language, path),
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
  const socialImage =
    image ?? publicAssetUrl("images/Rando d_Azur/Brand/Logo/version bleu.png");

  return {
    metadataBase: baseUrl,
    title,
    description,
    alternates: {
      canonical: localizedPath,
      languages: {
        ...languages,
        "x-default": new URL(localePath("en", path), baseUrl).toString(),
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
      images: [{ url: socialImage, alt: title }],
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
  const copy = getMessages(locale);
  const heroPhoto = await getBestLandscapeExperiencePhoto(
    await getAllExperiencePhotoCollections(),
  );
  const title =
    locale === "en"
      ? "Authentic French Riviera Experiences & Private Guides | Rando d’Azur"
      : `${copy.hero.titleFirst} ${copy.hero.titleSecond} | Rando d’Azur`;

  return getLocalizedPageMetadata({
    locale,
    path: "/",
    title,
    description: copy.hero.description,
    image: heroPhoto.src,
  });
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
    title: "Private Hiking Experiences on the French Riviera | Rando d’Azur",
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
    title: "French Riviera DMC, Incentives & Corporate Events | Rando d’Azur",
    description:
      "A local French Riviera DMC for tailor-made incentive programmes, corporate events, multilingual guides and carefully coordinated experiences.",
  },
  "wild-provence": {
    title: "Wild Provence & Edible Plant Experiences | Rando d’Azur",
    description:
      "Discover Provence’s edible and wild plants with a knowledgeable local guide on a seasonal, nature-led experience on the French Riviera.",
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
    title: "Bachelorette Experiences on the French Riviera | Rando d’Azur",
    description:
      "Celebrate a bachelorette weekend with a private French Riviera experience, locally guided and shaped around your group.",
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
  const experiencePhoto = await getExperiencePhotoCollection(slug);
  const path = `/experiences/${slug}`;
  const englishMetadata = englishExperienceMetadata[slug];
  const title =
    locale === "en"
      ? englishMetadata.title
      : `${experience.title} | Rando d’Azur`;

  return getLocalizedPageMetadata({
    locale,
    path,
    title,
    description:
      locale === "en"
        ? englishMetadata.description
        : experience.description,
    image: experiencePhoto.hero?.src,
  });
}
