"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import type { MessagesForLocale } from "../i18n/messages";
import { localePath, type Locale } from "../i18n/config";
import { brevoNewsletterFormUrl } from "../lib/newsletter";
import styles from "./Newsletter.module.css";

export default function Newsletter({ copy, locale }: {
  copy: MessagesForLocale["newsletter"];
  locale: Locale;
}) {
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const submitted = useRef(false);

  useEffect(() => {
    function resetAfterReturn(event: PageTransitionEvent) {
      if (!event.persisted) return;
      submitted.current = false;
      setSubmitting(false);
      setStatus("");
    }
    window.addEventListener("pageshow", resetAfterReturn);
    return () => window.removeEventListener("pageshow", resetAfterReturn);
  }, []);

  function handleInvalid(event: FormEvent<HTMLFormElement>) {
    const input = event.target as HTMLInputElement;
    const message = input.name === "OPT_IN" ? copy.consentRequired : copy.invalidEmail;
    input.setCustomValidity(message);
    const email = event.currentTarget.elements.namedItem("EMAIL") as HTMLInputElement;
    setStatus(email.validity.valid ? message : copy.invalidEmail);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    const form = event.currentTarget;
    const honeypot = form.elements.namedItem("email_address_check") as HTMLInputElement;
    if (honeypot.value || submitted.current) {
      event.preventDefault();
      if (honeypot.value) setStatus(copy.sendError);
      return;
    }
    submitted.current = true;
    setSubmitting(true);
    setStatus(copy.pending);
    // Deliberately allow native POST/navigation. No fetch, contact API or list ID:
    // only Brevo can confirm receipt and run the existing double opt-in flow.
  }

  return (
    <section className="newsletter-section scroll-reveal" id="newsletter">
      <div className="page-width newsletter-inner">
        <div className="newsletter-copy">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2>{copy.title}</h2>
          <p className="newsletter-description">{copy.description}</p>
          <p className="newsletter-privacy">{copy.privacy}</p>
        </div>
        <form action={brevoNewsletterFormUrl} method="post" className={`newsletter-form ${styles.form}`}
          onSubmit={handleSubmit} onInvalidCapture={handleInvalid}
          onInput={(event) => {
            const input = event.target as HTMLInputElement;
            input.setCustomValidity("");
            setStatus("");
          }}>
          <label className="visually-hidden" htmlFor="newsletter-email">{copy.emailLabel}</label>
          <input autoComplete="email" id="newsletter-email" name="EMAIL"
            placeholder={copy.emailPlaceholder} required type="email" aria-describedby="newsletter-status" />
          <label className={styles.consent} htmlFor="newsletter-consent">
            <input id="newsletter-consent" type="checkbox" name="OPT_IN" value="1" required aria-describedby="newsletter-status" />
            <span>{copy.consent} <a href={localePath(locale, "/privacy-policy")}>{copy.privacyLink}</a>. {copy.withdraw}</span>
          </label>
          <button className="button newsletter-submit" type="submit" disabled={submitting}>
            {copy.submit} <span aria-hidden="true">↗</span>
          </button>
          <div hidden aria-hidden="true">
            <input type="text" name="email_address_check" defaultValue="" tabIndex={-1} autoComplete="off" />
          </div>
          <input type="hidden" name="locale" value="fr" />
          <input type="hidden" name="html_type" value="simple" />
          <p className={styles.notice}>{copy.providerNote}</p>
          <p id="newsletter-status" aria-live="polite" className="newsletter-status" role="status">{status}</p>
        </form>
      </div>
    </section>
  );
}
