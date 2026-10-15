import { notFound } from "next/navigation";
import FieldPartnersPage from "../../components/FieldPartnersPage";
import { isLocale } from "../../i18n/config";
import { fieldPartnersContent } from "../../i18n/field-partners";
import { getLocalizedPageMetadata } from "../../lib/metadata";
export function generateStaticParams() { return [{ locale: "fr" }]; }
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (!isLocale(locale) || locale === "en") return {}; const copy = fieldPartnersContent[locale]; return getLocalizedPageMetadata({ locale, path: "/partners-on-the-trail", title: `${copy.title} | Rando d’Azur`, description: copy.description }); }
export default async function Page({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (!isLocale(locale) || locale === "en") notFound(); return <FieldPartnersPage locale={locale} />; }
