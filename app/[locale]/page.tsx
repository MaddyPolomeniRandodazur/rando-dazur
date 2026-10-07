import { notFound } from "next/navigation";
import HomePage from "../components/HomePage";
import { isLocale } from "../i18n/config";

export default async function LocalizedHomePage({
  params,
}: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "en") notFound();
  return <HomePage locale={locale} />;
}
