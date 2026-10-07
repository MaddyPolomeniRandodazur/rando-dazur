"use client";

import { useRef } from "react";
import type { MessagesForLocale } from "../i18n/messages";
import { featuredGoogleReviews } from "../lib/google-reviews";

export default function ReviewCarousel({
  copy,
}: {
  copy: MessagesForLocale["reviews"];
}) {
  const carouselRef = useRef<HTMLDivElement>(null);

  function moveCarousel(direction: -1 | 1) {
    const carousel = carouselRef.current;
    const card = carousel?.querySelector<HTMLElement>(".guest-review-card");
    if (!carousel || !card) return;

    const gap = Number.parseFloat(getComputedStyle(carousel).columnGap) || 0;
    carousel.scrollBy({
      left: direction * (card.offsetWidth + gap),
      behavior: "smooth",
    });
  }

  return (
    <div className="guest-reviews-carousel-wrap scroll-reveal">
      <div className="guest-reviews-controls">
        <p>{copy.googleTranslationNote}</p>
        <div>
          <button
            aria-label={copy.previousReviews}
            className="guest-reviews-arrow"
            onClick={() => moveCarousel(-1)}
            type="button"
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            aria-label={copy.nextReviews}
            className="guest-reviews-arrow"
            onClick={() => moveCarousel(1)}
            type="button"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
      <div
        aria-label={copy.carouselLabel}
        className="guest-reviews-carousel"
        ref={carouselRef}
        role="region"
        tabIndex={0}
      >
        {featuredGoogleReviews.map((review) => (
          <article className="guest-review-card" key={review.id}>
            <div aria-label={copy.fiveStars} className="guest-review-stars">
              ★★★★★
            </div>
            <blockquote>{review.excerpt}</blockquote>
            <div className="guest-review-attribution">
              <strong>{review.reviewer}</strong>
              {review.experience && (
                <span>{copy.experiences[review.experience]}</span>
              )}
            </div>
            <span aria-hidden="true" className="guest-review-source">
              Google
            </span>
          </article>
        ))}
      </div>
    </div>
  );
}
