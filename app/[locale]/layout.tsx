import type { Metadata } from "next";
import TemporaryUpdateNotice from "../components/TemporaryUpdateNotice";
import { notFound } from "next/navigation";
import "../globals.css";
import { isLocale, locales } from "../i18n/config";
import { getHomeMetadata } from "../lib/metadata";

export function generateStaticParams() {
  return locales.filter((locale) => locale !== "en").map((locale) => ({
    locale,
  }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return getHomeMetadata(locale);
}

export default async function LocalizedRootLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html data-scroll-behavior="smooth" lang={locale}>
      <body><TemporaryUpdateNotice>{children}</TemporaryUpdateNotice></body>
    </html>
  );
}
