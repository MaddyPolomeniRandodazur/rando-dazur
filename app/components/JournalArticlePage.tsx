import Image from "next/image";
import Link from "next/link";
import type { Locale } from "../i18n/config";
import { localePath } from "../i18n/config";
import { getMessages } from "../i18n/messages";
import { journalArticles, journalDate, type JournalArticle } from "../lib/journal-content";
import { getSiteUrl } from "../lib/site-url";
import { getBreadcrumbStructuredData, getFaqStructuredData, getPersonStructuredData, getWebPageStructuredData } from "../lib/structured-data";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "./Journal.module.css";

export default function JournalArticlePage({ locale, article }: { locale: Locale; article: JournalArticle }) {
  const copy = article.copy[locale];
  const messages = getMessages(locale);
  const path = `/journal/${article.slug}`;
  const url = new URL(localePath(locale, path), getSiteUrl()).toString();
  const graph = { "@context": "https://schema.org", "@graph": [
    getPersonStructuredData(locale), getWebPageStructuredData(locale, path, copy.title, copy.description),
    getBreadcrumbStructuredData(locale, [{ name: messages.navigation.home, path: "" }, { name: "Journal", path: "/journal" }, { name: copy.title, path }]),
    getFaqStructuredData(locale, path, copy.faqs),
    { "@type": "Article", "@id": `${url}#article`, mainEntityOfPage: url, headline: copy.title, description: copy.description,
      image: new URL(article.image, getSiteUrl()).toString(), datePublished: journalDate, dateModified: journalDate,
      inLanguage: locale, author: { "@id": new URL("/#maddy-polomeni", getSiteUrl()).toString() },
      publisher: { "@type": "Organization", name: "Rando d’Azur", url: getSiteUrl().toString() }, citation: article.sources.map(source => source.url) },
  ] };
  return <><Navbar lightBackground locale={locale} copy={messages.navigation} contactCopy={messages.contact} />
    <main className={styles.page}>
      <header className={`page-width ${styles.header}`}>
        <Link className="text-link" href={localePath(locale, "/journal")}>← {locale === "fr" ? "Le Journal de la Côte d’Azur" : "The Riviera Journal"}</Link>
        <p className="eyebrow">{locale === "fr" ? "LES REPÈRES RANDO D’AZUR" : "RANDO D’AZUR FIELD NOTES"}</p>
        <h1>{copy.title}</h1><p className={styles.intro}>{copy.intro}</p>
        <p className={styles.byline}>{locale === "fr" ? "Par" : "By"} <Link href={localePath(locale, "/meet-maddy")}>Maddy Polomeni</Link> · {locale === "fr" ? "Mis à jour le 18 octobre 2026" : "Updated 18 October 2026"}</p>
      </header>
      <div className={`page-width ${styles.layout}`}>
        <article className={styles.body}>
          <figure className={styles.cover}><Image src={article.image} alt={article.alt[locale]} fill sizes="(max-width: 800px) 100vw, 65vw" preload /><figcaption>{locale === "fr" ? "Photographie d’archive Rando d’Azur — paysage ou sortie sur la Côte d’Azur." : "Rando d’Azur archive photograph — French Riviera landscape or outing."}</figcaption></figure>
          {copy.sections.map((section, i) => <section key={section.title} id={`section-${i}`}><h2>{section.title}</h2>{section.paragraphs.map(text => <p key={text}>{text}</p>)}</section>)}
          <section aria-labelledby="article-faq"><h2 id="article-faq">{locale === "fr" ? "Questions fréquentes" : "Frequently asked questions"}</h2>{copy.faqs.map(faq => <details className={styles.faq} key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</section>
          <section className={styles.sources}><h2>{locale === "fr" ? "Pour préparer votre visite" : "Plan your visit"}</h2><p>{locale === "fr" ? "Sources consultées le 18 octobre 2026. Vérifiez les dernières informations de programme et d’accès auprès des sites officiels." : "Sources checked on 18 October 2026. Check official sites for the latest programme and access information."}</p><ul>{article.sources.map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.name} ↗</a></li>)}</ul></section>
        </article>
        <aside className={styles.aside}><p className="eyebrow">{locale === "fr" ? "VIVRE LA RIVIERA" : "EXPERIENCE THE RIVIERA"}</p><h2>{locale === "fr" ? "Une découverte avec Maddy" : "Explore with Maddy"}</h2><p>{locale === "fr" ? "Mimosa, plantes et paysages : choisissez une expérience adaptée à votre groupe." : "Mimosa blossom, plants and landscapes: find an experience for your group."}</p>
          <Link className="button button-dark" href={`${localePath(locale, "/experiences/route-du-mimosa")}#individuals`}>{locale === "fr" ? "Mimosa : individuel ou privé" : "Mimosa: shared or private"} ↗</Link>
          <Link className="text-link" href={localePath(locale, "/experiences/edible-plants")}>{locale === "fr" ? "Découvrir les plantes" : "Discover local plants"} ↗</Link>
          <Link className="text-link" href={localePath(locale, "/travel-trade")}>{locale === "fr" ? "Agences & DMC" : "Travel agencies & DMCs"} ↗</Link>
        </aside>
      </div>
      <section className={`page-width ${styles.related}`}><h2>{locale === "fr" ? "À lire aussi" : "Read next"}</h2><div className={styles.grid}>{journalArticles.filter(item => item.slug !== article.slug).map(item => <Link className={styles.relatedLink} href={localePath(locale, `/journal/${item.slug}`)} key={item.slug}>{item.copy[locale].title}<span aria-hidden="true">↗</span></Link>)}</div></section>
    </main><Footer locale={locale} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }} /></>;
}
