import Image from "next/image";
import Link from "next/link";
import { localePath, type Locale } from "../i18n/config";
import { getMessages } from "../i18n/messages";
import { professionalContent } from "../i18n/professional-content";
import ProfessionalQualifications from "./ProfessionalQualifications";

export default function MaddyProfile({ locale, showProfileLink = true }: { locale: Locale; showProfileLink?: boolean }) {
  const copy = getMessages(locale).about;
  return (
        <section className="founder-section" aria-labelledby="founder-title">
          <div className="founder-copy">
            <p className="eyebrow">{copy.founderEyebrow}</p>
            <h2 id="founder-title">{copy.founderTitle}</h2>
            <p className="founder-role">{copy.founderRole}</p>
            {copy.founderParagraphs.map((paragraph) => (
              <p className="founder-paragraph" key={paragraph}>
                {paragraph}
              </p>
            ))}
            <ProfessionalQualifications locale={locale} />
            {showProfileLink && <Link className="text-link" href={localePath(locale, "/meet-maddy")}>{professionalContent[locale].profileLink} ↗</Link>}
          </div>
          <div className="founder-images">
            <figure className="founder-photo founder-portrait">
              <Image
                alt={copy.portraitAlt}
                fill
                sizes="(max-width: 780px) 100vw, 42vw"
                src="/images/about/maddy-polomeni-mimosa-portrait.jpg"
                style={{ objectPosition: "45% 50%" }}
              />
              <figcaption>{copy.portraitAlt}</figcaption>
            </figure>
            <figure className="founder-photo founder-team">
              <Image
                alt="The Rando d’Azur local team"
                fill
                sizes="(max-width: 780px) 100vw, 42vw"
                src="/images/about/rando-dazur-local-team.jpg"
                style={{ objectFit: "contain", objectPosition: "center" }}
              />
              <figcaption>{copy.teamAlt}</figcaption>
            </figure>
          </div>
        </section>
  );
}
