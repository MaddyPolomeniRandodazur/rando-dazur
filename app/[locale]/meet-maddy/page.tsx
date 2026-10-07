import MeetMaddyPage from "../../components/MeetMaddyPage";
import { professionalContent } from "../../i18n/professional-content";
import { getLocalizedPageMetadata } from "../../lib/metadata";
import { notFound } from "next/navigation";
import { isLocale } from "../../i18n/config";
export function generateStaticParams() { return [{ locale: "fr" }, { locale: "it" }]; }
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (!isLocale(locale) || locale === "en") return {}; const copy = professionalContent[locale]; return getLocalizedPageMetadata({ locale, path: "/meet-maddy", title: copy.seoTitle, description: copy.description, image: "/images/about/maddy-polomeni-mimosa-portrait.jpg" }); }
export default async function Page({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (!isLocale(locale) || locale === "en") notFound(); return <MeetMaddyPage locale={locale} />; }
