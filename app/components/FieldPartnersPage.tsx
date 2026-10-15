import Image from "next/image";
import Link from "next/link";
import { localePath, type Locale } from "../i18n/config";
import { fieldPartnersContent } from "../i18n/field-partners";
import { getMessages } from "../i18n/messages";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "./FieldPartnersPage.module.css";

export default function FieldPartnersPage({ locale }: { locale: Locale }) {
  const copy = fieldPartnersContent[locale];
  const messages = getMessages(locale);
  return <>
    <Navbar locale={locale} copy={messages.navigation} contactCopy={messages.contact} />
    <main>
      <section className={`experience-detail-hero ${styles.hero}`}>
        <Image className="experience-detail-photo" src="/images/hero/french-riviera-panoramic-picnic.jpg" alt={locale === "fr" ? "Un pique-nique face à la Côte d’Azur" : "A picnic overlooking the French Riviera"} fill preload sizes="100vw" />
        <div className="hero-shade" aria-hidden="true" />
        <div className={`page-width experience-detail-content ${styles.heroCopy}`}>
          <p className="eyebrow eyebrow-light">{copy.eyebrow}</p>
          <h1>{copy.title}</h1>
          <p className="hero-description">{copy.intro}</p>
        </div>
      </section>
      <section className={styles.content} aria-label={copy.title}>
        <div className="page-width">
          <p className={styles.disclosure}>{copy.disclosure}</p>
          <div className={styles.grid}>
            {copy.items.map((item, index) => <article className={styles.card} key={item.id} id={item.id}>
              <div className={`${styles.brand} ${styles[item.id]}`}>
                <span className={styles.number}>0{index + 1}</span>
                {item.logo ? <Image src={item.logo} alt={item.brand} width={300} height={150} sizes="(max-width: 600px) 65vw, 240px" /> : <span className={styles.wordmark}>{item.brand}</span>}
              </div>
              <div className={styles.cardCopy}>
                <p className="eyebrow">{item.category}</p>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
                <p className={styles.detail}>{item.detail}</p>
                <a className="text-link" href={item.href} target="_blank" rel="noopener noreferrer">{copy.visit} <span aria-hidden="true">↗</span></a>
              </div>
            </article>)}
          </div>
          <div className={styles.endnote}>
            <p>{copy.note}</p>
            <Link className="button button-dark" href={`${localePath(locale)}#booking`}>{copy.contact} <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
    </main>
    <Footer locale={locale} />
  </>;
}
