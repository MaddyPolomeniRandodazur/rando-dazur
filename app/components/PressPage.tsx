import { pressMedia } from "../i18n/press-media";
import type { Locale } from "../i18n/config";
import { getMessages } from "../i18n/messages";
import { pressStories } from "../lib/press-content";
import { getBusinessStructuredData, getWebsiteStructuredData, getWebPageStructuredData, getPersonStructuredData, getFaqStructuredData } from "../lib/structured-data";
import { contactChannels } from "../lib/contact-channels";
import Footer from "./Footer";
import Navbar from "./Navbar";
import PressSection from "./PressSection";
import ScrollReveal from "../scroll-reveal";

export default function PressPage({ locale }: { locale: Locale }) {
  const messages = getMessages(locale);
  const faqs = locale === "fr" ? [
    { question: "Qui contacter pour un reportage ou une interview sur la Côte d’Azur ?", answer: `Contactez Maddy Polomeni, fondatrice de Rando d’Azur, à ${contactChannels.primaryEmail} ou au ${contactChannels.phoneDisplay}. Elle peut échanger en français ou en anglais sur Cannes, l’Estérel, les plantes méditerranéennes, les randonnées apéro et le mimosa autour de Mandelieu et Tanneron.` },
    { question: "Comment préparer une demande presse ?", answer: "Précisez votre média, l’angle du sujet, vos dates, la langue de l’interview et les images ou informations recherchées. Maddy confirme les possibilités, les disponibilités et les modalités avant toute visite ou rencontre." },
  ] : [
    { question: "Who can journalists contact for a French Riviera story or interview?", answer: `Contact Maddy Polomeni, founder of Rando d’Azur, at ${contactChannels.primaryEmail} or ${contactChannels.phoneDisplay}. She welcomes enquiries in English or French about Cannes, the Estérel, Mediterranean plants, apéro hikes and mimosa walks around Mandelieu and Tanneron.` },
    { question: "What should a press enquiry include?", answer: "Share your publication, story angle, dates, interview language and the images or information you need. Maddy confirms the possibilities, availability and arrangements before a visit or meeting." },
  ];

  const graph = { "@context": "https://schema.org", "@graph": [getBusinessStructuredData(locale), { ...getPersonStructuredData(locale), subjectOf: pressStories.map(story => ({ "@type": "CreativeWork", name: story.originalTitle ?? story.title, url: story.originalHref ?? story.href })) }, getWebsiteStructuredData(), getFaqStructuredData(locale, "/press", faqs), { ...getWebPageStructuredData(locale, "/press", pressMedia[locale].title, pressMedia[locale].description), "@type": "CollectionPage", mainEntity: { "@type": "ItemList", itemListElement: pressStories.map((story, i) => ({ "@type": "ListItem", position: i + 1, name: story.titles?.[locale] ?? story.title, url: story.href })) } }] };
  return (
    <>
      <Navbar
        lightBackground
        contactCopy={messages.contact}
        copy={messages.navigation}
        locale={locale}
      />
      <ScrollReveal />
      <main className="press-page">
        <PressSection locale={locale} fullPage />
        <section className="experience-detail-section" id="faq"><div className="page-width destination-faq-inner">
          <h2>{locale === "fr" ? "Préparer un reportage avec Maddy" : "Planning a story with Maddy"}</h2>
          <div className="destination-faq-list">{faqs.map(faq => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div>
        </div></section>
      </main>
      <Footer locale={locale} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }} />
    </>
  );
}
