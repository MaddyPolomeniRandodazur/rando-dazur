import Link from "next/link";
import type { Locale } from "../i18n/config";
import { localePath } from "../i18n/config";
import { getMessages } from "../i18n/messages";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ScrollReveal from "../scroll-reveal";

const journalCopy: Record<
  Locale,
  { eyebrow: string; title: string; description: string; returnLink: string }
> = {
  en: {
    eyebrow: "THE RIVIERA, SEEN LOCALLY",
    title: "The Riviera Journal",
    description:
      "A home for seasonal notes, local knowledge and stories from the French Riviera. The first journal pieces are in preparation.",
    returnLink: "Explore the Riviera",
  },
  fr: {
    eyebrow: "LA RIVIERA VUE D’ICI",
    title: "Le Journal de la Riviera",
    description:
      "Un espace dédié aux saisons, aux savoirs locaux et aux histoires de la Côte d’Azur. Les premiers récits sont en préparation.",
    returnLink: "Explorer la Riviera",
  },
  it: {
    eyebrow: "LA RIVIERA, VISTA DA QUI",
    title: "Il Journal della Riviera",
    description:
      "Uno spazio dedicato alle stagioni, alle conoscenze locali e alle storie della Costa Azzurra. I primi racconti sono in preparazione.",
    returnLink: "Esplora la Riviera",
  },
};

export default function JournalPage({ locale }: { locale: Locale }) {
  const messages = getMessages(locale);
  const copy = journalCopy[locale];

  return (
    <>
      <Navbar
        contactCopy={messages.contact}
        copy={messages.navigation}
        locale={locale}
      />
      <ScrollReveal />
      <main className="journal-page">
        <section className="journal-introduction page-width">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1>{copy.title}</h1>
          <p>{copy.description}</p>
          <Link className="text-link" href={`${localePath(locale)}#riviera-map`}>
            {copy.returnLink}
            <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
