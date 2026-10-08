import Image from "next/image";
import Link from "next/link";
import { localePath, type Locale } from "../i18n/config";
import { getMessages } from "../i18n/messages";
import { youthGroupsContent } from "../i18n/youth-groups";
import { getWhatsAppUrl } from "../lib/whatsapp";
import { getBusinessStructuredData, getWebsiteStructuredData, getWebPageStructuredData, getBreadcrumbStructuredData } from "../lib/structured-data";
import Navbar from "./Navbar";
import Footer from "./Footer";
import YouthGroupEnquiry from "./YouthGroupEnquiry";

export default function YouthGroupsPage({ locale }: { locale: Locale }) {
  const copy = youthGroupsContent[locale], messages = getMessages(locale);
  const path = "/kids-schools-youth-groups";
  const graph = { "@context": "https://schema.org", "@graph": [getBusinessStructuredData(locale), getWebsiteStructuredData(), getWebPageStructuredData(locale, path, copy.title, copy.description), getBreadcrumbStructuredData(locale, [{ name: messages.navigation.home, path: "" }, { name: copy.title, path }])] };
  return <><Navbar locale={locale} copy={messages.navigation} contactCopy={messages.contact} /><main>
    <section className="experience-detail-hero">
      <Image className="experience-detail-photo" src="/images/experiences/family-experiences-coastal-hike.jpg" alt={copy.photoAlt} fill preload sizes="100vw" style={{ objectPosition: "40% 65%" }} />
      <div className="hero-shade" aria-hidden="true" />
      <div className="page-width experience-detail-content"><p className="eyebrow eyebrow-light">{copy.eyebrow}</p><h1>{copy.title}</h1><p className="hero-description">{copy.introduction}</p><a className="button button-light" href="#group-enquiry">{copy.schoolCta} <span aria-hidden="true">↗</span></a></div>
    </section>
    <section className="experience-detail-section"><div className="page-width">
      <div className="experience-detail-points">{copy.cards.map((card, i) => <article className="experience-detail-point" key={card.title}><span>0{i + 1}</span><h2>{card.title}</h2><p>{card.text}</p></article>)}</div>
      <p className="section-intro">{copy.quote}</p><p className="section-intro">{copy.safety}</p>
      <a className="text-link" href={getWhatsAppUrl(`${copy.birthdayCta}\n${copy.type}: ${copy.types[2]}\n${copy.age}:\n${copy.count}:\n${copy.date}:\n${copy.goals}:`)} target="_blank" rel="noopener noreferrer">{copy.birthdayCta} ↗</a>
    </div></section>
    <YouthGroupEnquiry locale={locale} />
    <section className="experience-detail-section"><div className="page-width"><h2>{copy.related}</h2><div className="destination-experience-list">{["family-experiences", "hiking-experiences", "outdoor-escape-games", "wild-provence"].map(slug => <Link key={slug} href={localePath(locale, `/experiences/${slug}`)}>{messages.navigation.experienceLinks.find(([id]) => id === slug)?.[1]} ↗</Link>)}</div></div></section>
  </main><Footer locale={locale} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }} /></>;
}
