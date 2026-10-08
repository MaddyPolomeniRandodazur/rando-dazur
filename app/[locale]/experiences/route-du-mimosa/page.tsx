import MimosaPage from "../../../components/MimosaPage";
import { getMimosaMetadata } from "../../../lib/mimosa-metadata";
import { notFound } from "next/navigation";
export const revalidate = 3600;
export function generateStaticParams() { return [{ locale: "fr" }]; }
export async function generateMetadata({ params }: { params: Promise<{locale:string}> }) { const {locale} = await params; return locale === "fr" ? getMimosaMetadata(locale) : {}; }
export default async function Page({ params }: { params: Promise<{locale:string}> }) { const {locale} = await params; if(locale !== "fr") notFound(); return <MimosaPage locale={locale} />; }
