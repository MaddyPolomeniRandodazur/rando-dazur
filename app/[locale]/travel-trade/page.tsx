import { notFound } from "next/navigation";
import TravelTradePage from "../../components/TravelTradePage";
import { getTravelTradeContent } from "../../i18n/travel-trade";
import { getLocalizedPageMetadata } from "../../lib/metadata";
export function generateStaticParams() { return [{ locale: "fr" }]; }
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "fr") return {};
  const copy = getTravelTradeContent(locale);
  return getLocalizedPageMetadata({ locale, path: "/travel-trade", title: copy.seoTitle, description: copy.description });
}
export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "fr") notFound();
  return <TravelTradePage locale={locale} />;
}
