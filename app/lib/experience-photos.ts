import "server-only";

import { experienceSlugs, type ExperienceSlug } from "../i18n/config";
import { mediaPlaceholderUrl } from "./public-assets";

export type ExperiencePhoto = {
  src: string;
  fileName: string;
  width: number;
  height: number;
  fileSize: number;
};

export type ExperiencePhotoCollection = {
  hero: ExperiencePhoto | null;
  gallery: ExperiencePhoto[];
};

export const experiencePhotoFolders = {
  "food-tours": "food-tours",
  "hiking-experiences": "hiking-experiences",
  "sunset-apero-hikes": "rando-apero",
  "cycling-experiences": "cycling-experiences",
  "wild-provence": "wild-provence",
  "edible-plants": "edible-plants",
  "outdoor-escape-games": "outdoor-escape-games",
  "family-experiences": "family-experiences",
  "evjf-experiences": "evjf-experiences",
  "evg-experiences": "evg-experiences",
  "corporate-incentive-travel": "corporate-incentive-travel",
  "cruise-guests": "cruise-guests",
} satisfies Record<ExperienceSlug, string>;

const experiencePhotoCounts = {
  "food-tours": 56,
  "hiking-experiences": 8,
  "sunset-apero-hikes": 37,
  "cycling-experiences": 8,
  "wild-provence": 8,
  "edible-plants": 8,
  "outdoor-escape-games": 3,
  "family-experiences": 37,
  "evjf-experiences": 3,
  "evg-experiences": 3,
  "corporate-incentive-travel": 27,
  "cruise-guests": 0,
} satisfies Record<ExperienceSlug, number>;

function comparePhotos(left: ExperiencePhoto, right: ExperiencePhoto) {
  const targetRatio = 16 / 9;
  const ratioDifference =
    Math.abs(left.width / left.height - targetRatio) -
    Math.abs(right.width / right.height - targetRatio);
  if (ratioDifference !== 0) return ratioDifference;

  const pixelDifference =
    right.width * right.height - left.width * left.height;
  if (pixelDifference !== 0) return pixelDifference;

  return right.fileSize - left.fileSize;
}

export async function getExperiencePhotoCollection(
  slug: ExperienceSlug,
): Promise<ExperiencePhotoCollection> {
  const photoCount = experiencePhotoCounts[slug];
  const photos = Array.from({ length: photoCount }, (_, index) => ({
    src: mediaPlaceholderUrl,
    fileName: `${experiencePhotoFolders[slug]}-photo-${index + 1}`,
    width: 1600,
    height: 900,
    fileSize: 0,
  }));
  const hero = photos[0] ?? null;
  const gallery = photos.slice(1);

  return { hero, gallery };
}

export async function getAllExperiencePhotoCollections(): Promise<
  Record<ExperienceSlug, ExperiencePhotoCollection>
> {
  const [
    foodTours,
    hiking,
    randoApero,
    cycling,
    wildProvence,
    ediblePlants,
    escapeGames,
    family,
    evjf,
    evg,
    corporate,
    cruise,
  ] = await Promise.all(
    experienceSlugs.map((slug) => getExperiencePhotoCollection(slug)),
  );

  return {
    "food-tours": foodTours,
    "hiking-experiences": hiking,
    "sunset-apero-hikes": randoApero,
    "cycling-experiences": cycling,
    "family-experiences": family,
    "corporate-incentive-travel": corporate,
    "wild-provence": wildProvence,
    "edible-plants": ediblePlants,
    "outdoor-escape-games": escapeGames,
    "evjf-experiences": evjf,
    "evg-experiences": evg,
    "cruise-guests": cruise,
  };
}

export async function getBestLandscapeExperiencePhoto(
  collections: Record<ExperienceSlug, ExperiencePhotoCollection>,
): Promise<ExperiencePhoto> {
  const landscapes = Object.values(collections)
    .map(({ hero }) => hero)
    .filter((photo): photo is ExperiencePhoto => Boolean(photo && photo.width > photo.height))
    .sort(comparePhotos);
  const bestPhoto =
    landscapes[0] ??
    collections["sunset-apero-hikes"].hero ??
    Object.values(collections).find(
      (collection) => collection.hero !== null,
    )?.hero;

  if (!bestPhoto) {
    throw new Error("No experience photos are available for the homepage hero.");
  }

  return bestPhoto;
}
