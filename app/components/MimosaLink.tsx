import Link from "next/link";
import { localePath, type Locale } from "../i18n/config";
import { mimosaCampaign, mimosaCopy } from "../lib/mimosa-campaign";
import styles from "./MimosaCampaign.module.css";
export default function MimosaLink({ locale }: { locale: Locale }) {
  const copy = mimosaCopy[locale];
  return <div className={styles.related}><p className="eyebrow">{locale === "fr" ? "Au fil des saisons" : "Through the seasons"}</p><Link href={localePath(locale, mimosaCampaign.path)}>{locale === "fr" ? "La Route du Mimosa, à pied ou à vélo" : "The Mimosa Route, on foot or by bike"} <span aria-hidden="true">↗</span></Link><p>{copy.bloom}</p></div>;
}
