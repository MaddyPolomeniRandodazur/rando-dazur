import Link from "next/link";
import { localePath, type Locale } from "../i18n/config";
import { pressMedia } from "../i18n/press-media";
import { contactChannels } from "../lib/contact-channels";
import styles from "./TravelTrade.module.css";

export default function PressContact({ locale }: { locale: Locale }) {
  const copy = pressMedia[locale];
  return <div className={`page-width ${styles.pressContact}`}>
    <h2 className={styles.heading}>{copy.heading}</h2>
    <p className={styles.introduction}>{copy.introduction}</p>
    <div className={styles.services}>
      {copy.topics.map(topic => <article className={styles.service} key={topic.path}>
        <h3><Link href={localePath(locale, topic.path)}>{topic.title} ↗</Link></h3>
        <p>{topic.text}</p>
      </article>)}
    </div>
    <p className={styles.brief}>{copy.practical}</p>
    <a className="button button-dark" data-conversion="contact_email" href={`mailto:${contactChannels.primaryEmail}?subject=${encodeURIComponent(copy.subject)}`}>{copy.contact} ↗</a>
    <nav className={styles.professionalLinks} aria-label={copy.heading}>
      <Link className="text-link" href={localePath(locale, "/meet-maddy")}>{copy.profile} ↗</Link>
      <Link className="text-link" href={localePath(locale, "/travel-trade")}>{copy.trade} ↗</Link>
    </nav>
    <h2 className={styles.heading}>{copy.archive}</h2>
  </div>;
}
