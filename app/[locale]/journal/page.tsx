import { notFound } from "next/navigation";
import JournalPage from "../../components/JournalPage";
import { isLocale, locales } from "../../i18n/config";
import { getLocalizedPageMetadata } from "../../lib/metadata";

type PageParameters = {
  params: Promise<{ locale: string }>;
};

const localizedJournal: Record<
  Exclude<(typeof locales)[number], "en">,
  { title: string; description: string }
> = {
  fr: {
    title: "Le Journal de la Riviera | Rando d’Azur",
    description:
      "Saisons, savoirs locaux et histoires de la Côte d’Azur. Les premiers récits du Journal Rando d’Azur sont en préparation.",
  },
  it: {
    title: "Il Journal della Riviera | Rando d’Azur",
    description:
      "Stagioni, conoscenze locali e storie della Costa Azzurra. I primi racconti del Journal Rando d’Azur sono in preparazione.",
  },
};

export function generateStaticParams() {
  return locales.filter((locale) => locale !== "en").map((locale) => ({
    locale,
  }));
}

export async function generateMetadata({ params }: PageParameters) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "en") return {};
  const copy = localizedJournal[locale];

  return getLocalizedPageMetadata({
    locale,
    path: "/journal",
    ...copy,
    noIndex: true,
  });
}

export default async function Page({ params }: PageParameters) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "en") notFound();
  return <JournalPage locale={locale} />;
}
