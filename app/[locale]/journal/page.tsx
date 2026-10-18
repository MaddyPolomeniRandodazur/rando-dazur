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
      "Mimosa, fleurs, balades d’hiver, Carnaval de Nice et Fête du Citron : les guides locaux de Rando d’Azur pour préparer votre séjour sur la Côte d’Azur.",
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
  });
}

export default async function Page({ params }: PageParameters) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "en") notFound();
  return <JournalPage locale={locale} />;
}
