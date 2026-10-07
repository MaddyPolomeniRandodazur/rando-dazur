import "server-only";

import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { experienceSlugs, type ExperienceSlug } from "../i18n/config";
import { publicAssetUrl } from "./public-assets";

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

const experienceAssetRoot = path.join(
  process.cwd(),
  "public",
  "images",
  "experiences",
);
const supportedPhoto = /\.(jpe?g|png|webp)$/i;

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
  const experienceFolder = experiencePhotoFolders[slug];
  const photoDirectory = path.join(experienceAssetRoot, experienceFolder);
  const fileNames = (await readdir(photoDirectory))
    .filter((fileName) => supportedPhoto.test(fileName))
    .sort((left, right) =>
      left.localeCompare(right, undefined, { numeric: true }),
    );

  const photos = await Promise.all(
    fileNames.map(async (fileName) => {
      const filePath = path.join(photoDirectory, fileName);
      const [metadata, fileStats] = await Promise.all([
        sharp(filePath).metadata(),
        stat(filePath),
      ]);

      if (!metadata.width || !metadata.height) {
        throw new Error(
          `Experience photo has no dimensions: ${photoDirectory}\\${fileName}`,
        );
      }

      const isRotated = metadata.orientation && metadata.orientation >= 5;
      const width = isRotated ? metadata.height : metadata.width;
      const height = isRotated ? metadata.width : metadata.height;

      return {
        src: publicAssetUrl(
          path.join("images", "experiences", experienceFolder, fileName),
        ),
        fileName,
        width,
        height,
        fileSize: fileStats.size,
      };
    }),
  );

  const landscapePhotos = photos
    .filter((photo) => photo.width > photo.height)
    .sort(comparePhotos);
  // TODO: Add landscape photos to Bike; that folder currently only contains portrait images.
  const hero = landscapePhotos[0] ?? photos.sort(comparePhotos)[0] ?? null;
  const gallery = photos.filter((photo) => photo.src !== hero?.src);

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
