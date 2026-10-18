import Image from "next/image";
import Link from "next/link";
import { localePath, type Locale } from "../i18n/config";
import { getMessages } from "../i18n/messages";
import { journalArticles } from "../lib/journal-content";
import { getSiteUrl } from "../lib/site-url";
import { getBreadcrumbStructuredData, getWebPageStructuredData } from "../lib/structured-data";
import Footer from "./Footer";
import Navbar from "./Navbar";
import styles from "./Journal.module.css";

export default function JournalPage({ locale }: { locale: Locale }) {
  const messages = getMessages(locale);
  const title = locale === "fr" ? "Le Journal de la Côte d’Azur" : "The Riviera Journal";
  const description = locale === "fr" ? "Mimosa, fleurs et balades d’hiver : les repères locaux de Maddy pour préparer votre séjour sur la Côte d’Azur." : "Mimosa blossom, gardens and winter walks: Maddy’s local notes for planning your French Riviera stay.";
  const graph = { "@context": "https://schema.org", "@graph": [
    { ...getWebPageStructuredData(locale, "/journal", title, description), "@type": "CollectionPage", mainEntity: { "@type": "ItemList", itemListElement: journalArticles.map((article, index) => ({ "@type": "ListItem", position: index + 1, name: article.copy[locale].title, url: new URL(localePath(locale, `/journal/${article.slug}`), getSiteUrl()).toString() })) } },
    getBreadcrumbStructuredData(locale, [{ name: messages.navigation.home, path: "" }, { name: title, path: "/journal" }]),
  ] };
  return <><Navbar lightBackground contactCopy={messages.contact} copy={messages.navigation} locale={locale} /><main className={styles.page}>
    <header className={`page-width ${styles.header}`}><p className="eyebrow">{locale === "fr" ? "LA RIVIERA VUE D’ICI" : "THE RIVIERA, SEEN LOCALLY"}</p><h1>{title}</h1><p className={styles.intro}>{description}</p></header>
    <section className={`page-width ${styles.indexGrid}`} aria-label={locale === "fr" ? "Guides et conseils" : "Guides and advice"}>{journalArticles.map(article => <article className={styles.card} key={article.slug}><div className={styles.cardImage}><Image src={article.image} alt={article.alt[locale]} fill sizes="(max-width:800px) 100vw, 50vw" /></div><div className={styles.cardText}><h2><Link href={localePath(locale, `/journal/${article.slug}`)}>{article.copy[locale].title}</Link></h2><p>{article.copy[locale].description}</p><Link className="text-link" href={localePath(locale, `/journal/${article.slug}`)}>{locale === "fr" ? "Lire le guide" : "Read the guide"} ↗</Link></div></article>)}</section>
  </main><Footer locale={locale} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }} /></>;
}
