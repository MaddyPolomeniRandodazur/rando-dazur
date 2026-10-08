import Image from "next/image";
import Link from "next/link";
import type { Locale } from "../i18n/config";
import { localePath } from "../i18n/config";
import { getDestinationContent, type DestinationSlug } from "../i18n/destination-content";
import { getMessages } from "../i18n/messages";
import { getWhatsAppUrl } from "../lib/whatsapp";
import {
  getBreadcrumbStructuredData,
  getBusinessStructuredData,
  getWebPageStructuredData,
  getWebsiteStructuredData,
} from "../lib/structured-data";
import { getSiteUrl } from "../lib/site-url";
import { destinationImages } from "../lib/destination-images";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { getTravelTradeContent } from "../i18n/travel-trade";
import ScrollReveal from "../scroll-reveal";

const destinationLabels: Record<
  Locale,
  {
    home: string;
    destinations: string;
    localPerspective: string;
    highlights: string;
    experiences: string;
    faq: string;
    contact: string;
    map: string;
    questions: readonly [string, string];
    answer: readonly [string, string];
  }
> = {
  en: {
    home: "Home",
    destinations: "Destinations",
    localPerspective: "A local perspective",
    highlights: "A place to explore",
    experiences: "Experiences in this destination",
    faq: "A few local notes",
    contact: "Plan a private experience",
    map: "Explore all destinations",
    questions: ["01", "02"],
    answer: ["A considered itinerary", "Local knowledge, shared"],
  },
  fr: {
    home: "Accueil",
    destinations: "Destinations",
    localPerspective: "Un regard local",
    highlights: "Un lieu à découvrir",
    experiences: "Expériences dans cette destination",
    faq: "Quelques repères locaux",
    contact: "Imaginer une expérience privée",
    map: "Explorer toutes les destinations",
    questions: ["01", "02"],
    answer: ["Un itinéraire imaginé pour vous", "Le territoire vu d’ici"],
  },
};

export default function DestinationPage({
  locale,
  slug,
}: {
  locale: Locale;
  slug: DestinationSlug;
}) {
  const messages = getMessages(locale);
  const copy = getDestinationContent(locale, slug);
  const images = destinationImages[slug];
  const labels = destinationLabels[locale];
  const baseUrl = getSiteUrl();
  const pagePath = `/destinations/${slug}`;
  const pageUrl = new URL(localePath(locale, pagePath), baseUrl).toString();
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      getBusinessStructuredData(locale),
      getWebsiteStructuredData(),
      getWebPageStructuredData(locale, pagePath, copy.title, copy.introduction),
      {
        "@type": "Place",
        "@id": `${pageUrl}#destination`,
        name: copy.title,
        description: copy.metaDescription,
        url: pageUrl,
        image: images.map(image => new URL(image.src, baseUrl).toString()),
        containedInPlace: {
          "@type": "Place",
          name: "French Riviera",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: copy.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      getBreadcrumbStructuredData(locale, [
        { name: labels.home, path: "" },
        { name: labels.destinations, path: "#riviera-map" },
        { name: copy.title, path: pagePath },
      ]),
    ],
  };

  return (
    <>
      <Navbar
        contactCopy={messages.contact}
        copy={messages.navigation}
        locale={locale}
      />
      <ScrollReveal />
      <main>
        <nav
          aria-label={messages.footer.navigationLabel}
          className="page-width destination-breadcrumb"
        >
          <Link href={localePath(locale)}>{labels.home}</Link>
          <span aria-hidden="true">/</span>
          <Link href={`${localePath(locale)}#riviera-map`}>
            {labels.destinations}
          </Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{copy.title}</span>
        </nav>
        <section className={`experience-detail-hero detail-destination detail-${slug}`}>
          <Image
            alt={images[0].alt}
            className="experience-detail-photo"
            fill
            style={{ objectPosition: images[0].objectPosition }}
            preload
            sizes="100vw"
            src={images[0].src}
          />
          <div aria-hidden="true" className="hero-shade" />
          <div className="page-width experience-detail-content">
            <p className="eyebrow eyebrow-light">{messages.seo.areaName}</p>
            <h1>{copy.title}</h1>
            <p className="hero-description">{copy.introduction}</p>
            <a className="button button-light" href="#destination-experiences">
              {labels.experiences}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section
          aria-labelledby="destination-highlights-title"
          className="experience-detail-section destination-content-section"
        >
          <div className="page-width">
            <div className="section-heading">
              <div>
                <p className="eyebrow">{labels.localPerspective}</p>
                <h2 id="destination-highlights-title">
                  {labels.highlights}
                </h2>
              </div>
              <p className="section-intro">{copy.introduction}</p>
            </div>
            <div className="experience-detail-points">
              {copy.highlights.map((highlight, index) => (
                <article className="experience-detail-point" key={highlight}>
                  <span>0{index + 1}</span>
                  <p>{highlight}</p>
                </article>
              ))}
            </div>
            <div className="destination-photo-grid">
              {images.slice(1).map((photo) => (
                <figure className="destination-photo" key={photo.src}>
                  <Image
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 780px) 100vw, 50vw"
                    src={photo.src}
                    style={{ objectPosition: photo.objectPosition }}
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section
          aria-labelledby="destination-experiences-title"
          className="experience-detail-section destination-experiences-section"
          id="destination-experiences"
        >
          <div className="page-width">
            <div className="section-heading">
              <div>
                <p className="eyebrow">{labels.localPerspective}</p>
                <h2 id="destination-experiences-title">{labels.experiences}</h2>
              </div>
            </div>
            <div className="destination-experience-list">
              {copy.experiences.map((slug) => {
                const experience = messages.experiencePage.pages[slug];

                return (
                  <Link
                    href={localePath(locale, `/experiences/${slug}`)}
                    key={slug}
                  >
                    <span>{experience.title}</span>
                    <span aria-hidden="true">↗</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section
          aria-labelledby="destination-faq-title"
          className="experience-detail-section destination-faq-section"
        >
          <div className="page-width destination-faq-inner">
            <div>
              <p className="eyebrow">{labels.localPerspective}</p>
              <h2 id="destination-faq-title">{labels.faq}</h2>
              <p className="section-intro">{labels.answer[0]}</p>
            </div>
            <div className="destination-faq-list">
              {copy.faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
          <div className="page-width destination-footer-actions">
            <a
              className="button button-dark"
              href={getWhatsAppUrl(messages.contact.whatsappMessage)}
              rel="noopener noreferrer"
              target="_blank"
            >
              {labels.contact}
              <span aria-hidden="true">↗</span>
            </a>
            <Link className="text-link" href={localePath(locale, "/travel-trade")}>{getTravelTradeContent(locale).linkLabel} ↗</Link>
            <Link className="text-link" href={`${localePath(locale)}#riviera-map`}>
              {labels.map}
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        type="application/ld+json"
      />
    </>
  );
}
