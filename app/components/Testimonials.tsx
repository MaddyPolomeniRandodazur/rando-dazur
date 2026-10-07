import type { Locale } from "../i18n/config";
import { getMessages } from "../i18n/messages";

export default function Testimonials({ locale }: { locale: Locale }) {
  const copy = getMessages(locale).trusted;
  // TODO: Add approved partner logos when the Drive partner-logo folder is populated.

  return (
    <section className="testimonials-section" id="trusted-by">
      <div className="page-width testimonials-inner">
        <div className="testimonials-heading">
          <p className="eyebrow eyebrow-light">{copy.eyebrow}</p>
          <h2>{copy.titleFirst} <em>{copy.titleSecond}</em></h2>
          <p>{copy.introduction}</p>
        </div>
        <div className="trusted-panel">
          <p className="trusted-intro">{copy.introShort}</p>
          <div className="trusted-grid">
            {copy.categories.map((label, index) => (
              <div className="trusted-item" key={label}>
                <span>0{index + 1}</span>
                <p>{label}</p>
              </div>
            ))}
          </div>
          <a className="text-link text-link-light" href="#agences-mice">
            {copy.link} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
