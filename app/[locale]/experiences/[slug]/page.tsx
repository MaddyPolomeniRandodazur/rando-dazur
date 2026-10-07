import { notFound } from "next/navigation";
import ExperiencePage from "../../../components/ExperiencePage";
import {
  experienceSlugs,
  isExperienceSlug,
  isLocale,
  locales,
} from "../../../i18n/config";
import { getExperienceMetadata } from "../../../lib/metadata";

export function generateStaticParams() {
  return locales
    .filter((locale) => locale !== "en")
    .flatMap((locale) =>
      experienceSlugs.map((slug) => ({ locale, slug })),
    );
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/experiences/[slug]">) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !isExperienceSlug(slug)) return {};
  return getExperienceMetadata(locale, slug);
}

export default async function LocalizedExperiencePage({
  params,
}: PageProps<"/[locale]/experiences/[slug]">) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !isExperienceSlug(slug)) notFound();
  return <ExperiencePage locale={locale} slug={slug} />;
}
