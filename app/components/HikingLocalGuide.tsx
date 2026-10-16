import Link from "next/link";
import { localePath, type Locale } from "../i18n/config";
import { hikingLocal } from "../i18n/hiking-local";
import styles from "./HikingLocalGuide.module.css";

export default function HikingLocalGuide({ locale }: { locale: Locale }) {
  const copy = hikingLocal[locale];
  return <section className={styles.section} aria-labelledby="local-hiking-title">
    <div className="page-width">
      <h2 id="local-hiking-title">{copy.heading}</h2>
      <p className={styles.intro}>{copy.intro}</p>
      <div className={styles.places}>
        {copy.places.map(place => <article key={place.path}>
          <h3><Link href={localePath(locale, place.path)}>{place.title} ↗</Link></h3>
          <p>{place.text}</p>
        </article>)}
      </div>
      <h2 className={styles.faqTitle}>{copy.faqTitle}</h2>
      <div className={styles.faqs}>
        {copy.faqs.map(faq => <details key={faq.question}>
          <summary>{faq.question}</summary>
          <p>{faq.answer}</p>
        </details>)}
      </div>
      <nav className={styles.links} aria-label={locale === "fr" ? "Votre randonnée en pratique" : "Plan your hike"}>
        <Link className="text-link" href={localePath(locale, "/meet-maddy")}>{copy.guide} ↗</Link>
        <Link className="text-link" href={localePath(locale, "/experiences/sunset-apero-hikes")}>{copy.apero} ↗</Link>
        <Link className="text-link" href={localePath(locale, "/experiences/route-du-mimosa")}>{copy.mimosa} ↗</Link>
      </nav>
      <a className="button button-dark" href="#booking">{copy.contact} ↗</a>
    </div>
  </section>;
}
