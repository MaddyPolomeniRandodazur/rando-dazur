"use client";

import { useState, type FormEvent } from "react";
import type { MessagesForLocale } from "../i18n/messages";

export default function Newsletter({
  copy,
}: {
  copy: MessagesForLocale["newsletter"];
}) {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(
      copy.pending,
    );
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
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <label className="visually-hidden" htmlFor="newsletter-email">
            {copy.emailLabel}
          </label>
          <input
            autoComplete="email"
            id="newsletter-email"
            name="email"
            placeholder={copy.emailPlaceholder}
            required
            type="email"
          />
          <button className="button newsletter-submit" type="submit">
            {copy.submit} <span aria-hidden="true">↗</span>
          </button>
          <p aria-live="polite" className="newsletter-status" role="status">
            {status}
          </p>
        </form>
      </div>
    </section>
  );
}
