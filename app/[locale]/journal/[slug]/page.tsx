import { notFound } from "next/navigation";
import JournalArticlePage from "../../../components/JournalArticlePage";
import { getJournalArticle, journalArticles } from "../../../lib/journal-content";
import { getLocalizedPageMetadata } from "../../../lib/metadata";
type Props = { params: Promise<{ locale: string; slug: string }> };
export function generateStaticParams() { return journalArticles.map(article => ({ locale: "fr", slug: article.slug })); }
export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const article = getJournalArticle(slug);
  if (locale !== "fr" || !article) return {};
  return getLocalizedPageMetadata({ locale, path: `/journal/${article.slug}`, title: `${article.copy.fr.title} | Rando d’Azur`, description: article.copy.fr.description, image: article.image });
}
export default async function Page({ params }: Props) {
  const { locale, slug } = await params;
  const article = getJournalArticle(slug);
  if (locale !== "fr" || !article) notFound();
  return <JournalArticlePage locale={locale} article={article} />;
}
