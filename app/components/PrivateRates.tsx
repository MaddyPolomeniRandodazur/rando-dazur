import type { Locale } from "../i18n/config";
import { contactChannels } from "../lib/contact-channels";
import { privateRates, rateContent } from "../lib/private-rates";
import styles from "./PrivateRates.module.css";
export default function PrivateRates({ locale, customQuote = false }: { locale: Locale; customQuote?: boolean }) {
 const copy = rateContent[locale];
 return <div id="private-rates" className={styles.rates}>
   <h3 className={styles.heading}>{customQuote ? copy.custom : copy.title}</h3>
   {customQuote && <p className={styles.note}>{copy.reference}</p>}
   <div className={styles.grid}>{privateRates.map(rate => <div className={styles.card} key={rate.key}><span>{copy[rate.key]}</span><strong className={styles.price}>€{rate.price}</strong><span>{copy.unit}</span></div>)}</div>
   <p className={styles.note}>{copy.travel}<br />{copy.options}</p>
   <a data-conversion="booking_request" className={styles.link} href={`mailto:${contactChannels.primaryEmail}`}>{copy.request} ↗</a>
 </div>;
}
export function RateSummary({ locale, customQuote = false, href = "#private-rates" }: { locale: Locale; customQuote?: boolean; href?: string }) {
 const copy = rateContent[locale];
 return <a className={styles.summary} href={href}>{customQuote ? `${copy.custom} · ${copy.reference}` : copy.summary} ↗</a>;
}
