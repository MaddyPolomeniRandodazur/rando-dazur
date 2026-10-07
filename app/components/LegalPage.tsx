import type { Metadata } from "next";
import type { LegalPageSlug, Locale } from "../i18n/config";
import { getLegalDocument } from "../i18n/legal-content";
import { getMessages } from "../i18n/messages";
import { getLocalizedPageMetadata } from "../lib/metadata";
import { contactChannels } from "../lib/contact-channels";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ScrollReveal from "../scroll-reveal";

export function getLegalPageMetadata(
  locale: Locale,
  slug: LegalPageSlug,
): Metadata {
  const document = getLegalDocument(locale, slug);

  return getLocalizedPageMetadata({
    locale,
    path: `/${slug}`,
    title: `${document.title} | Rando d’Azur`,
    description: document.introduction,
  });
}

export default function LegalPage({
  locale,
  slug,
}: {
  locale: Locale;
  slug: LegalPageSlug;
}) {
  const messages = getMessages(locale);
  const document = getLegalDocument(locale, slug);

  return (
    <>
      <Navbar
        contactCopy={messages.contact}
        copy={messages.navigation}
        locale={locale}
      />
      <ScrollReveal />
      <main className="legal-page">
        <header className="legal-heading page-width">
          <p className="eyebrow">{messages.footer.brandLine}</p>
          <h1>{document.title}</h1>
          <p>{document.introduction}</p>
        </header>
        <div className="legal-content page-width">
          {document.sections.map((section) => (
            <section className="legal-section" key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>
                  {paragraph
                    .split(/(bonjour@maddypolomeni\.com|\+33 6 67 90 69 32)/g)
                    .map((part, index) =>
                      part === contactChannels.primaryEmail ? (
                        <a href={`mailto:${contactChannels.primaryEmail}`} key={index}>
                          {part}
                        </a>
                      ) : part === contactChannels.phoneDisplay ? (
                        <a href={`tel:${contactChannels.phoneInternational}`} key={index}>
                          {part}
                        </a>
                      ) : (
                        part
                      ),
                    )}
                </p>
              ))}
            </section>
          ))}
        </div>
      </main>
      <Footer locale={locale} />
    </>
  );
}
