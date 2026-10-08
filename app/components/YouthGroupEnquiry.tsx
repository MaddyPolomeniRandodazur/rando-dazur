"use client";

import type { FormEvent, InvalidEvent } from "react";
import type { Locale } from "../i18n/config";
import { youthGroupsContent } from "../i18n/youth-groups";
import { getWhatsAppUrl } from "../lib/whatsapp";
import { contactChannels } from "../lib/contact-channels";
import styles from "./YouthGroupEnquiry.module.css";

export default function YouthGroupEnquiry({ locale }: { locale: Locale }) {
  const copy = youthGroupsContent[locale];
  function validateField(event: InvalidEvent<HTMLFormElement>) {
    const input = event.target;
    if (input instanceof HTMLInputElement || input instanceof HTMLSelectElement || input instanceof HTMLTextAreaElement) {
      input.setCustomValidity(locale === "fr" ? "Veuillez compléter ce champ avec une valeur valide." : "Please complete this field with a valid value.");
    }
  }
  function prepareEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [copy.title, ...(["type", "age", "count", "date", "goals"] as const).map(key => `${copy[key]}: ${String(data.get(key) ?? "").trim()}`)].join("\n");
    // Native contact handoff: no data stored, logged or sent to an analytics service.
    window.location.assign(getWhatsAppUrl(message));
  }
  return <section id="group-enquiry" className="experience-detail-section">
    <div className="page-width">
      <div className="section-heading"><h2>{copy.requestTitle}</h2><p className="section-intro">{copy.requestNote}</p></div>
      <form action={`mailto:${contactChannels.primaryEmail}`} method="post" encType="text/plain" className={styles.form} onSubmit={prepareEnquiry} onInvalidCapture={validateField} onInput={event => { const input = event.target; if (input instanceof HTMLInputElement || input instanceof HTMLSelectElement || input instanceof HTMLTextAreaElement) input.setCustomValidity(""); }}>
        <label>{copy.type}<select name="type" required defaultValue=""><option value="" disabled>{copy.type}</option>{copy.types.map(type => <option key={type}>{type}</option>)}</select></label>
        <label>{copy.age}<input name="age" required maxLength={80} /></label>
        <label>{copy.count}<input name="count" type="number" required min="1" step="1" /></label>
        <label>{copy.date}<input name="date" type="date" required /></label>
        <label className={styles.wide}>{copy.goals}<textarea name="goals" rows={3} maxLength={1000} /></label>
        <button className="button button-dark" type="submit">{copy.submit} <span aria-hidden="true">↗</span></button>
      </form>
      <div className="hero-actions"><a className="text-link" href={`mailto:${contactChannels.primaryEmail}`}>{copy.email} ↗</a><a className="text-link" href={`tel:${contactChannels.phoneInternational}`}>{copy.phone} ↗</a></div>
    </div>
  </section>;
}
