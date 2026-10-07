import LegalPage, { getLegalPageMetadata } from "../../components/LegalPage";
import { isLocale } from "../../i18n/config";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/legal-notice">) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return getLegalPageMetadata(locale, "legal-notice");
}

export default async function Page({
  params,
}: PageProps<"/[locale]/legal-notice">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <LegalPage locale={locale} slug="legal-notice" />;
}
