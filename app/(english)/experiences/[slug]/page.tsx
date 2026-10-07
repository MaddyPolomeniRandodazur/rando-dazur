import { notFound } from "next/navigation";
import ExperiencePage from "../../../components/ExperiencePage";
import { experienceSlugs, isExperienceSlug } from "../../../i18n/config";
import { getExperienceMetadata } from "../../../lib/metadata";

export function generateStaticParams() {
  return experienceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/experiences/[slug]">) {
  const { slug } = await params;
  if (!isExperienceSlug(slug)) return {};
  return getExperienceMetadata("en", slug);
}

export default async function EnglishExperiencePage({
  params,
}: PageProps<"/experiences/[slug]">) {
  const { slug } = await params;
  if (!isExperienceSlug(slug)) notFound();
  return <ExperiencePage locale="en" slug={slug} />;
}
