import { notFound } from "next/navigation";
import DestinationPage from "../../../components/DestinationPage";
import { destinationSlugs, getDestinationContent, isDestinationSlug } from "../../../i18n/destination-content";
import { isLocale, locales } from "../../../i18n/config";
import { getLocalizedPageMetadata } from "../../../lib/metadata";

type PageParameters = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return locales
    .filter((locale) => locale !== "en")
    .flatMap((locale) =>
      destinationSlugs.map((slug) => ({ locale, slug })),
    );
}

export async function generateMetadata({ params }: PageParameters) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !isDestinationSlug(slug)) return {};
  const content = getDestinationContent(locale, slug);

  return getLocalizedPageMetadata({
    locale,
    path: `/destinations/${slug}`,
    title: `${content.seoTitle} | Rando d’Azur`,
    description: content.metaDescription,
    image: `/images/destinations/${slug}/${content.photos[0]}`,
  });
}

export default async function Page({ params }: PageParameters) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !isDestinationSlug(slug)) notFound();
  return <DestinationPage locale={locale} slug={slug} />;
}
