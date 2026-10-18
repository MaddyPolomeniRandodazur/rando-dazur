import { notFound } from "next/navigation";
import JournalArticlePage from "../../../components/JournalArticlePage";
import { getJournalArticle, journalArticles } from "../../../lib/journal-content";
import { getLocalizedPageMetadata } from "../../../lib/metadata";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return journalArticles.map(article => ({ slug: article.slug })); }
export async function generateMetadata({ params }: Props) {
  const article = getJournalArticle((await params).slug);
  if (!article) return {};
  return getLocalizedPageMetadata({ locale: "en", path: `/journal/${article.slug}`, title: `${article.copy.en.title} | Rando d’Azur`, description: article.copy.en.description, image: article.image });
}
export default async function Page({ params }: Props) {
  const article = getJournalArticle((await params).slug);
  if (!article) notFound();
  return <JournalArticlePage locale="en" article={article} />;
}
