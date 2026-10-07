import type { Locale } from "../i18n/config";
import { getMessages } from "../i18n/messages";

import PrivateRates from "./PrivateRates";

export default function BookingSection({ locale, customQuote = false }: { locale: Locale; customQuote?: boolean }) {
  const copy = getMessages(locale).booking;

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
          aria-label={copy.widgetLabel}
          className="regiondo-placeholder"
          data-regiondo-widget-slot
        >
          <span className="regiondo-placeholder-mark" aria-hidden="true">
            RD
          </span>
          <strong>{copy.comingSoon}</strong>
          <p>{copy.widgetNote}</p>
        </div>
      </div>
    </section>
  );
}
