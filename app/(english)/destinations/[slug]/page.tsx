import { notFound } from "next/navigation";
import DestinationPage from "../../../components/DestinationPage";
import { getDestinationContent, destinationSlugs, isDestinationSlug } from "../../../i18n/destination-content";
import { getLocalizedPageMetadata } from "../../../lib/metadata";

type PageParameters = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return destinationSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageParameters) {
  const { slug } = await params;
  if (!isDestinationSlug(slug)) return {};
  const content = getDestinationContent("en", slug);

  return getLocalizedPageMetadata({
    locale: "en",
    path: `/destinations/${slug}`,
    title: `${content.seoTitle} | Rando d’Azur`,
    description: content.metaDescription,
    image: `/images/destinations/${slug}/${content.photos[0]}`,
  });
}

export default async function Page({ params }: PageParameters) {
  const { slug } = await params;
  if (!isDestinationSlug(slug)) notFound();
  return <DestinationPage locale="en" slug={slug} />;
}
