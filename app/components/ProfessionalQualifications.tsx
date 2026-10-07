import type { Locale } from "../i18n/config";
import { professionalContent } from "../i18n/professional-content";
import { maddyQualifications, professionalDetails } from "../lib/professional-qualifications";
import styles from "./ProfessionalQualifications.module.css";

export default function ProfessionalQualifications({ locale }: { locale: Locale }) {
  const copy = professionalContent[locale];
  return <section className={styles.qualifications} aria-labelledby="professional-qualifications-title">
    <p className="eyebrow">{copy.eyebrow}</p>
    <h3 id="professional-qualifications-title">{copy.title}</h3>
    <p>{copy.introduction}</p><p>{copy.team}</p>
    <details><summary>{copy.qualifications}</summary><ul>{maddyQualifications.map(name => <li key={name}>{name}</li>)}</ul></details>
    <p><strong>{copy.card}</strong><br />n° {professionalDetails.card}</p>
    <a className="text-link" href={professionalDetails.directoryUrl} target="_blank" rel="noopener noreferrer">{copy.check} ↗</a>
    <p><strong>{copy.insurance}</strong><br />{professionalDetails.insurer}<br />{copy.contract} : {professionalDetails.insuranceContract}</p>
  </section>;
}
