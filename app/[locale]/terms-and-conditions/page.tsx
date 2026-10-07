import LegalPage, { getLegalPageMetadata } from "../../components/LegalPage";
import { isLocale } from "../../i18n/config";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/terms-and-conditions">) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return getLegalPageMetadata(locale, "terms-and-conditions");
}

export default async function Page({
  params,
}: PageProps<"/[locale]/terms-and-conditions">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <LegalPage locale={locale} slug="terms-and-conditions" />;
}
