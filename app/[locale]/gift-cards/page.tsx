import { notFound } from "next/navigation";
import GiftCardsPage, { giftCardImage, giftCardSeo } from "../../components/GiftCardsPage";
import { isLocale, locales } from "../../i18n/config";
import { getLocalizedPageMetadata } from "../../lib/metadata";
export function generateStaticParams() { return locales.filter(locale=>locale!=="en").map(locale=>({locale})); }
export async function generateMetadata({params}:PageProps<"/[locale]/gift-cards">) { const {locale}=await params; if(!isLocale(locale)) return {}; return getLocalizedPageMetadata({locale,path:"/gift-cards",...giftCardSeo[locale],image:giftCardImage}); }
export default async function Page({params}:PageProps<"/[locale]/gift-cards">) {const {locale}=await params; if(!isLocale(locale)) notFound(); return <GiftCardsPage locale={locale} />;}
