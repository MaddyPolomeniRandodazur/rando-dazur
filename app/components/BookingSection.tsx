import type { ExperienceSlug, Locale } from "../i18n/config";
import { getMessages } from "../i18n/messages";

import PrivateRates from "./PrivateRates";
import { bookingLabels, getRegiondoBookingUrl } from "../lib/regiondo";
import { getWhatsAppUrl } from "../lib/whatsapp";

export default function BookingSection({ locale, customQuote = false, experience }: { locale: Locale; customQuote?: boolean; experience?: ExperienceSlug }) {
  const copy = getMessages(locale).booking;
  const contact = getMessages(locale).contact;

  return (
    <section className="booking-section" id="booking">
      <div className="page-width booking-inner">
        <div className="booking-copy">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2>{copy.title}</h2>
          <PrivateRates locale={locale} customQuote={customQuote} />
          <p>{copy.introduction}</p>
        </div>
        <div
          aria-label={copy.onlineLabel}
          className="regiondo-placeholder"
          data-regiondo-booking-links
        >
          <span className="regiondo-placeholder-mark" aria-hidden="true">
            RD
          </span>
          <strong>{copy.onlineTitle}</strong>
          <p>{copy.onlineNote}</p>
          <div className="hero-actions">
            <a className="button button-light" href={getRegiondoBookingUrl(experience)} target="_blank" rel="noopener noreferrer" data-conversion="booking_request">
              {bookingLabels[locale].book} <span aria-hidden="true">↗</span>
            </a>
            <a className="button button-quiet" href={getWhatsAppUrl(contact.whatsappMessage)} target="_blank" rel="noopener noreferrer">
              {contact.maddyButton} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
