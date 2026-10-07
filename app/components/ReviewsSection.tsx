import Link from "next/link";
import { localePath, type Locale } from "../i18n/config";
import { getMessages } from "../i18n/messages";
import { googleReviewsSnapshot } from "../lib/google-reviews";
import { getWhatsAppUrl } from "../lib/whatsapp";
import ReviewCarousel from "./ReviewCarousel";

function checkedOnDate(date: string, locale: Locale) {
  return new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T12:00:00Z`));
}

export default function ReviewsSection({ locale }: { locale: Locale }) {
  const messages = getMessages(locale);
  const copy = messages.reviews;
  const snapshotDate = checkedOnDate(googleReviewsSnapshot.checkedOn, locale);

  return (
    <section className="reviews-section" id="reviews">
      <div className="page-width">
        <div className="reviews-editorial-heading">
          <div>
            <p className="eyebrow">{copy.eyebrow}</p>
            <h2>
              {copy.titleFirst} <em>{copy.titleSecond}</em>
            </h2>
          </div>
          <p className="reviews-introduction">{copy.introduction}</p>
        </div>

        <div className="reviews-overview scroll-reveal">
          <div className="reviews-rating">
            <span aria-label={copy.fiveStars} className="reviews-rating-stars">
              ★★★★★
            </span>
            <strong>{googleReviewsSnapshot.rating.toFixed(1)}</strong>
            <span>{copy.ratingLabel}</span>
          </div>
          <p className="reviews-overview-quote">{copy.trustStatement}</p>
          <a
            className="reviews-google-link"
            href={googleReviewsSnapshot.sourceUrl}
            rel="noreferrer"
            target="_blank"
          >
            <span className="reviews-google-count">
              {googleReviewsSnapshot.reviewCount}
            </span>
            <span>{copy.publicReviews}</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div aria-label={copy.statisticsLabel} className="reviews-statistics">
          <article className="reviews-stat">
            <span aria-hidden="true">★★★★★</span>
            <strong>{googleReviewsSnapshot.rating.toFixed(1)}</strong>
            <p>{copy.averageRating}</p>
          </article>
          <article className="reviews-stat">
            <span aria-hidden="true">↗</span>
            <strong>{googleReviewsSnapshot.reviewCount}</strong>
            <p>{copy.reviewCountLabel}</p>
          </article>
          <article className="reviews-stat">
            <span aria-hidden="true">✦</span>
            <strong>{googleReviewsSnapshot.fiveStarCount}</strong>
            <p>{copy.fiveStarCountLabel}</p>
          </article>
          <p className="reviews-snapshot-note">
            {copy.snapshotNote} {snapshotDate}
          </p>
        </div>

        <ReviewCarousel copy={copy} />

        <div className="reviews-world scroll-reveal">
          <div aria-hidden="true" className="reviews-world-globe">
            <svg viewBox="0 0 160 160" role="presentation">
              <circle cx="80" cy="80" r="61" />
              <ellipse cx="80" cy="80" rx="29" ry="61" />
              <ellipse cx="80" cy="80" rx="51" ry="61" />
              <path d="M22 64h116M22 96h116M80 19v122" />
              <path d="M37 42c24 14 62 14 86 0M37 118c24-14 62-14 86 0" />
            </svg>
          </div>
          <div>
            <p className="eyebrow">{copy.worldEyebrow}</p>
            <h3>{copy.worldTitle}</h3>
            <p>{copy.worldIntroduction}</p>
          </div>
          <p className="reviews-guest-count-note">{copy.countryAvailability}</p>
        </div>

        <div className="reviews-cta scroll-reveal">
          <div>
            <p className="eyebrow">{copy.ctaEyebrow}</p>
            <h3>{copy.ctaTitle}</h3>
          </div>
          <div className="reviews-cta-actions">
            <Link
              className="button button-primary"
              href={`${localePath(locale, "")}#booking`}
            >
              {copy.bookExperience} <span aria-hidden="true">↗</span>
            </Link>
            <a
              className="button button-outline"
              href={getWhatsAppUrl(messages.contact.whatsappMessage)}
              rel="noreferrer"
              target="_blank"
            >
              {copy.contactMaddy} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
