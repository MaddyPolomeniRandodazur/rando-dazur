import { notFound } from "next/navigation";
import YouthGroupsPage from "../../components/YouthGroupsPage";
import { youthGroupsContent } from "../../i18n/youth-groups";
import { getLocalizedPageMetadata } from "../../lib/metadata";
export function generateStaticParams() { return [{ locale: "fr" }]; }
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "fr") return {};
  const copy = youthGroupsContent[locale];
  return getLocalizedPageMetadata({ locale, path: "/kids-schools-youth-groups", title: copy.seoTitle, description: copy.description });
}
export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "fr") notFound();
  return <YouthGroupsPage locale={locale} />;
}
