import Link from "next/link";
import { localePath } from "../i18n/config";
import Image from "next/image";
import type { Locale } from "../i18n/config";
import { getMessages } from "../i18n/messages";
import { featuredPress } from "../lib/press-content";

export default function FeaturedIn({ locale }: { locale: Locale }) {
  const copy = getMessages(locale).press;

  return (
    <section
      aria-labelledby="featured-in-title"
      className="featured-in-section scroll-reveal"
      id="featured-in"
    >
      <div className="page-width">
        <div className="featured-in-heading">
          <p className="eyebrow">{copy.featuredEyebrow}</p>
          <h2 id="featured-in-title">{copy.featuredTitle}</h2>
        </div>
        <div className="featured-in-logos">
          {featuredPress.map((publication) => (
            <a
              aria-label={`${copy.openCoverage} ${publication.publication}`}
              className="featured-in-logo"
              href={publication.href}
              key={publication.publication}
              rel="noopener noreferrer"
              target="_blank"
            >
              {publication.logo ? <Image
                alt={publication.publication}
                fill
                sizes="(max-width: 600px) 38vw, 170px"
                src={publication.logo}
              /> : <span className="press-featured-name">{publication.publication}<small>{locale === "fr" ? "Reproduction attribuée" : "Attributed reproduction"}</small></span>}
            </a>
          ))}
        </div>
        <p className="featured-in-cta"><Link className="text-link" href={localePath(locale, "/press")}>{copy.viewAll} ↗</Link></p>
      </div>
    </section>
  );
}
