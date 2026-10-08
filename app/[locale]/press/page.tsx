import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PressPage from "../../components/PressPage";
import { isLocale, locales } from "../../i18n/config";
import { getMessages } from "../../i18n/messages";
import { getLocalizedPageMetadata } from "../../lib/metadata";

export function generateStaticParams() {
  return locales.filter((locale) => locale !== "en").map((locale) => ({
    locale,
  }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/press">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const copy = getMessages(locale).press;

  const title =
    locale === "fr"
      ? "Presse & médias | Rando d’Azur"
      : "Press & media | Rando d’Azur";

  return getLocalizedPageMetadata({
    locale,
    path: "/press",
    title,
    description: copy.pageIntroduction,
  });
}

export default async function Page({
  params,
}: PageProps<"/[locale]/press">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <PressPage locale={locale} />;
}
