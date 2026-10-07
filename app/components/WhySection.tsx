import type { Locale } from "../i18n/config";
import Image from "next/image";
import { getMessages } from "../i18n/messages";

export default function WhySection({ locale }: { locale: Locale }) {
  const copy = getMessages(locale).about;
  const icons = ["local", "authentic", "tailored", "care"] as const;

  return (
    <section className="section why-section" id="about">
      <div className="page-width">
        <div className="section-heading why-heading" id="why-rando-dazur">
          <div>
            <p className="eyebrow">{copy.eyebrow}</p>
            <h2>{copy.title}</h2>
          </div>
          <p className="section-intro">{copy.introduction}</p>
        </div>
        <div className="why-grid">
          {copy.reasons.map((reason, index) => (
            <article className="why-card" key={reason.title}>
              <span>0{index + 1}</span>
              <span className="why-icon" aria-hidden="true">
                <svg viewBox="0 0 40 40" fill="none">
                  {icons[index] === "local" && (
                    <>
                      <path d="M20 34s-10-8-10-17a10 10 0 1 1 20 0c0 9-10 17-10 17Z" />
                      <circle cx="20" cy="17" r="3" />
                    </>
                  )}
                  {icons[index] === "authentic" && (
                    <>
                      <circle cx="20" cy="20" r="6" />
                      <path d="M20 5v5m0 20v5M5 20h5m20 0h5M9.4 9.4 13 13m14 14 3.6 3.6m0-21.2L27 13m-14 14-3.6 3.6" />
                    </>
                  )}
                  {icons[index] === "tailored" && (
                    <>
                      <path d="M8 12h24M8 20h24M8 28h24" />
                      <circle cx="15" cy="12" r="2.5" />
                      <circle cx="25" cy="20" r="2.5" />
                      <circle cx="18" cy="28" r="2.5" />
                    </>
                  )}
                  {icons[index] === "care" && (
                    <path d="m20 6 3.7 9.4L33 19l-9.3 3.6L20 32l-3.7-9.4L7 19l9.3-3.6L20 6Z" />
                  )}
                </svg>
              </span>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </article>
          ))}
        </div>
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
      </div>
    </section>
  );
}
