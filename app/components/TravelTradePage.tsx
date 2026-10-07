import Image from "next/image";
import Link from "next/link";
import { localePath, type Locale } from "../i18n/config";
import { destinationSlugs, getDestinationContent } from "../i18n/destination-content";
import { getMessages } from "../i18n/messages";
import { getTravelTradeContent } from "../i18n/travel-trade";
import { contactChannels } from "../lib/contact-channels";
import { getBusinessStructuredData, getBreadcrumbStructuredData, getWebPageStructuredData, getWebsiteStructuredData } from "../lib/structured-data";
import Navbar from "./Navbar";
import PrivateRates from "./PrivateRates";
import Footer from "./Footer";

export default function TravelTradePage({ locale }: { locale: Locale }) {
  const messages = getMessages(locale);
  const copy = getTravelTradeContent(locale);
  const graph = { "@context": "https://schema.org", "@graph": [getBusinessStructuredData(locale), getWebsiteStructuredData(), getWebPageStructuredData(locale, "/travel-trade", copy.title, copy.description), getBreadcrumbStructuredData(locale, [{ name: messages.navigation.home, path: "" }, { name: copy.linkLabel, path: "/travel-trade" }])] };
  return <>
    <Navbar locale={locale} copy={messages.navigation} contactCopy={messages.contact} />
    <main>
      <section className="experience-detail-hero">
        <Image alt="A group planning an outdoor experience above the French Riviera" src="/images/experiences/corporate-incentive-riviera-group.jpg" className="experience-detail-photo" fill preload sizes="100vw" />
        <div className="hero-shade" aria-hidden="true" />
        <div className="page-width experience-detail-content">
          <p className="eyebrow eyebrow-light">{copy.eyebrow}</p><h1>{copy.title}</h1>
          <p className="hero-description">{copy.introduction}</p>
          <a className="button button-light" href={`mailto:${contactChannels.primaryEmail}`}>{copy.contact} <span aria-hidden="true">↗</span></a>
        </div>
      </section>
      <section className="experience-detail-section"><div className="page-width destination-faq-list">
        <PrivateRates locale={locale} customQuote />
        {copy.sections.map(section => <article className="section-heading" key={section.title}><div><h2>{section.title}</h2></div><p className="section-intro">{section.text}</p></article>)}
      </div></section>
      <section className="experience-detail-section"><div className="page-width">
        <div className="section-heading"><div><h2>{copy.experiences}</h2></div></div><div className="destination-experience-list">
          {messages.navigation.experienceLinks.filter(([slug]) => slug !== "evg-experiences").map(([slug, title]) => <Link key={slug} href={localePath(locale, `/experiences/${slug}`)}>{title}<span aria-hidden="true">↗</span></Link>)}
        </div><div className="section-heading"><div><h2>{copy.destinations}</h2></div></div><div className="destination-experience-list">
          {destinationSlugs.map(slug => <Link key={slug} href={localePath(locale, `/destinations/${slug}`)}>{getDestinationContent(locale, slug).title}<span aria-hidden="true">↗</span></Link>)}
        </div>
      </div></section>
      <section className="experience-detail-section"><div className="page-width destination-faq-inner"><h2>{copy.faqTitle}</h2><div className="destination-faq-list">
        {copy.faqs.map(faq => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}
      </div></div></section>
    </main><Footer locale={locale} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\u003c") }} />
  </>;
}
