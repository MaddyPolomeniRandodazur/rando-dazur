import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PressPage from "../../components/PressPage";
import { isLocale, locales } from "../../i18n/config";
import { pressMedia } from "../../i18n/press-media";
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
  const copy = pressMedia[locale];

  return getLocalizedPageMetadata({
    locale,
    path: "/press",
    title: copy.seoTitle,
    description: copy.description,
  });
}

export default async function Page({
  params,
}: PageProps<"/[locale]/press">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <PressPage locale={locale} />;
}
