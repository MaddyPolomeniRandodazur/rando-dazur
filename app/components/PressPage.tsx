import type { Locale } from "../i18n/config";
import { getMessages } from "../i18n/messages";
import { pressStories } from "../lib/press-content";
import { getBusinessStructuredData, getWebsiteStructuredData, getWebPageStructuredData } from "../lib/structured-data";
import Footer from "./Footer";
import Navbar from "./Navbar";
import PressSection from "./PressSection";
import ScrollReveal from "../scroll-reveal";

export default function PressPage({ locale }: { locale: Locale }) {
  const messages = getMessages(locale);

  const graph = { "@context": "https://schema.org", "@graph": [getBusinessStructuredData(locale), getWebsiteStructuredData(), { ...getWebPageStructuredData(locale, "/press", messages.press.featuredTitle, messages.press.pageIntroduction), "@type": "CollectionPage", mainEntity: { "@type": "ItemList", itemListElement: pressStories.map((story, i) => ({ "@type": "ListItem", position: i + 1, name: story.titles?.[locale] ?? story.title, url: story.href })) } }] };
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
      </main>
      <Footer locale={locale} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }} />
    </>
  );
}
