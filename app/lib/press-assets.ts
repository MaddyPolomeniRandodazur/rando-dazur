import "server-only";

import { readdir } from "node:fs/promises";
import path from "node:path";
import { publicAssetUrl } from "./public-assets";

export type PressAsset = {
  kind: "article" | "video";
  title: string;
  href: string;
  thumbnail?: string;
  date?: string;
};

export type PressTelevisionPhoto = {
  src: string;
  fileName: string;
};

const articlesDirectory = path.join(
  process.cwd(),
  "public",
  "images",
  "press",
  "Articles",
);
const televisionDirectory = path.join(
  process.cwd(),
  "public",
  "images",
  "press",
  "TV",
);

function normalizedName(fileName: string) {
  return fileName
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\.[^.]+$/, "")
    .replace(/pdf/gi, "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
}

function titleFromFile(fileName: string) {
  return fileName
    .replace(/\.[^.]+$/, "")
    .replace(/\s*-\s*PDF$/i, "")
    .replace(/_/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export async function getPressAssets(): Promise<PressAsset[]> {
  const fileNames = await readdir(articlesDirectory);
  const thumbnails = fileNames.filter((fileName) =>
    /\.(jpe?g|png|webp)$/i.test(fileName),
  );
  const documents = fileNames
    .filter((fileName) => /\.pdf$/i.test(fileName))
    .sort((left, right) => left.localeCompare(right));
  // TODO: Add brochures when the Drive brochure folders contain approved files.

  const articles = documents.map((fileName): PressAsset => {
    const key = normalizedName(fileName);
    const thumbnail = thumbnails
      .filter((imageName) => normalizedName(imageName).startsWith(key))
      .sort((left, right) => left.localeCompare(right))[0];

    return {
      kind: "article",
      title: titleFromFile(fileName),
      href: publicAssetUrl(
        path.join("images", "press", "Articles", fileName),
      ),
      ...(thumbnail
        ? {
            thumbnail: publicAssetUrl(
              path.join(
                "images",
                "press",
                "Articles",
                thumbnail,
              ),
            ),
          }
        : {}),
    };
  });

  const televisionFiles = (await readdir(televisionDirectory))
    .filter((fileName) => /\.mp4$/i.test(fileName))
    .sort((left, right) => left.localeCompare(right));
  const television = televisionFiles.map((fileName): PressAsset => {
    const date = fileName.match(/\d{4}-\d{2}-\d{2}/)?.[0];
    return {
      kind: "video",
      title: fileName,
      href: publicAssetUrl(
        path.join("images", "press", "TV", fileName),
      ),
      ...(date ? { date } : {}),
    };
  });

  return [...articles, ...television];
}

export async function getPressTelevisionPhotos(): Promise<
  PressTelevisionPhoto[]
> {
  const fileNames = (await readdir(televisionDirectory))
    .filter((fileName) => /\.(jpe?g|png|webp)$/i.test(fileName))
    .sort((left, right) => left.localeCompare(right));

  return fileNames.map((fileName) => ({
    fileName,
    src: publicAssetUrl(
      path.join("images", "press", "TV", fileName),
    ),
  }));
}
