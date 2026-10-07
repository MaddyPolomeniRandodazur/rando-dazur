import LegalPage, { getLegalPageMetadata } from "../../components/LegalPage";
import { isLocale } from "../../i18n/config";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/privacy-policy">) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return getLegalPageMetadata(locale, "privacy-policy");
}

export default async function Page({
  params,
}: PageProps<"/[locale]/privacy-policy">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <LegalPage locale={locale} slug="privacy-policy" />;
}
