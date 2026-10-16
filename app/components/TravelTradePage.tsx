import MimosaLink from "./MimosaLink";
import Image from "next/image";
import styles from "./TravelTrade.module.css";
import { experienceImages } from "../lib/experience-images";
import { destinationImages } from "../lib/destination-images";
import { ediblePlantsPhoto } from "../lib/editorial-photos";
import { localizedImageAlt } from "../i18n/image-alt";
import Link from "next/link";
import { localePath, type Locale } from "../i18n/config";
import { destinationSlugs, getDestinationContent } from "../i18n/destination-content";
import { getMessages } from "../i18n/messages";
import { getTravelTradeContent } from "../i18n/travel-trade";
import { contactChannels } from "../lib/contact-channels";
import { getBusinessStructuredData, getBreadcrumbStructuredData, getWebPageStructuredData, getWebsiteStructuredData, getPersonStructuredData } from "../lib/structured-data";
import Navbar from "./Navbar";
import PrivateRates from "./PrivateRates";
import Footer from "./Footer";
import { getSiteUrl } from "../lib/site-url";

export default function TravelTradePage({ locale }: { locale: Locale }) {
  const messages = getMessages(locale);
  const copy = getTravelTradeContent(locale);
  const graph = { "@context": "https://schema.org", "@graph": [getBusinessStructuredData(locale), getPersonStructuredData(locale), getWebsiteStructuredData(), { "@type": "Service", "@id": new URL(`${localePath(locale, "/travel-trade")}#service`, getSiteUrl()).toString(), name: copy.title, description: copy.description, serviceType: locale === "fr" ? "Expériences privées pour agences réceptives et DMC" : "Private experiences for travel agencies and DMCs", provider: { "@id": new URL("/#organization", getSiteUrl()).toString() }, areaServed: ["Cannes", "Antibes", "Estérel", "Grasse", "Îles de Lérins", "Pays de Fayence"].map(name => ({ "@type": "Place", name })), url: new URL(localePath(locale, "/travel-trade"), getSiteUrl()).toString() }, getWebPageStructuredData(locale, "/travel-trade", copy.title, copy.description), getBreadcrumbStructuredData(locale, [{ name: messages.navigation.home, path: "" }, { name: copy.linkLabel, path: "/travel-trade" }])] };
  return <>
    <Navbar locale={locale} copy={messages.navigation} contactCopy={messages.contact} />
    <main>
      <section className={`experience-detail-hero ${styles.hero}`}>
        <Image alt={locale === "fr" ? "Trois personnes échangent autour d’un café et d’un ordinateur sur une terrasse face à Cannes et à la Méditerranée" : "Three people collaborating over coffee and a laptop on a terrace overlooking Cannes and the Mediterranean"} src="/images/travel-trade/cannes-terrace-collaboration.jpg" className="experience-detail-photo" fill preload sizes="100vw" />
        <div className="hero-shade" aria-hidden="true" />
        <div className="page-width experience-detail-content">
          <p className="eyebrow eyebrow-light">{copy.eyebrow}</p><h1>{copy.title}</h1>
          <p className="hero-description">{copy.introduction}</p>
          <a className="button button-light" data-conversion="booking_request" href={`mailto:${contactChannels.primaryEmail}?subject=${encodeURIComponent(locale === "fr" ? "Demande agence / DMC — expériences privées Côte d’Azur" : "Agency / DMC enquiry — private French Riviera experiences")}`}>{copy.contact} <span aria-hidden="true">↗</span></a>
        </div>
      </section>
      <section className={styles.section}><div className="page-width">
        <MimosaLink locale={locale} />
        <nav className={styles.professionalLinks} aria-label={locale === "fr" ? "Vos interlocuteurs" : "Your local contacts"}><Link className="text-link" href={localePath(locale, "/meet-maddy")}>{locale === "fr" ? "Maddy et les qualifications de votre guide" : "Meet Maddy & view guide qualifications"} ↗</Link><Link className="text-link" href={localePath(locale, "/press")}>{locale === "fr" ? "Journalistes : contact presse et reportages" : "Journalists: press enquiries & published features"} ↗</Link></nav>
        <PrivateRates locale={locale} customQuote />
        <h2 className={styles.heading}>{copy.sections[0].title}</h2><p className={styles.introduction}>{copy.sections[0].text}</p>
        <div className={styles.services}>{copy.sections.slice(1).map((section, index) => <article className={styles.service} key={section.title}><span className="eyebrow">0{index + 1}</span><h3>{section.title}</h3><p>{section.text}</p></article>)}</div>
      </div></section>
      <section className={styles.section}><div className="page-width">
        <h2 className={styles.heading}>{copy.experiences}</h2>
        <div className={styles.experiences}>
          {messages.navigation.experienceLinks.filter(([slug]) => slug !== "evg-experiences").map(([slug, title]) => {
            const photo = slug === "edible-plants" ? ediblePlantsPhoto : experienceImages[slug]?.[0];
            return <Link className={styles.card} key={slug} href={localePath(locale, `/experiences/${slug}`)}>
              {photo && <div className={styles.cardPhoto}><Image src={photo.src} alt="" fill sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw" style={{objectPosition: experienceImages[slug]?.[0]?.objectPosition}} /></div>}
              <span className={styles.cardTitle}>{title}<span aria-hidden="true">↗</span></span>
            </Link>;
          })}
        </div>
      </div></section>
      <section className={styles.section}><div className="page-width">
        <h2 className={styles.heading}>{copy.destinations}</h2>
        <div className={styles.destinations}>
          {destinationSlugs.map(slug => { const photo = destinationImages[slug][0]; return <Link className={styles.card} key={slug} href={localePath(locale, `/destinations/${slug}`)}>
            <div className={styles.cardPhoto}><Image src={photo.src} alt={localizedImageAlt(locale, photo.alt)} fill sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw" style={{objectPosition:photo.objectPosition}} /></div>
            <span className={styles.cardTitle}>{getDestinationContent(locale, slug).title}<span aria-hidden="true">↗</span></span>
          </Link>; })}
        </div>
      </div></section>
      <section className="experience-detail-section"><div className="page-width destination-faq-inner"><h2>{copy.faqTitle}</h2><div className="destination-faq-list">
        {copy.faqs.map(faq => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}
      </div></div></section>
    </main><Footer locale={locale} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\u003c") }} />
  </>;
}
