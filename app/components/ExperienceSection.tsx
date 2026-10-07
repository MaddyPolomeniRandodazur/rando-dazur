import Image from "next/image";
import Link from "next/link";
import {
  localePath,
  type ExperienceSlug,
  type Locale,
} from "../i18n/config";
import { getMessages } from "../i18n/messages";
import type { ExperiencePhotoCollection } from "../lib/experience-photos";

const detailPages: Partial<Record<string, ExperienceSlug>> = {
  "food-tours": "food-tours",
  hiking: "hiking-experiences",
  "sunset-apero-hikes": "sunset-apero-hikes",
  velo: "cycling-experiences",
  familles: "family-experiences",
  "wild-provence": "wild-provence",
  "edible-plants": "edible-plants",
  "outdoor-escape-games": "outdoor-escape-games",
  "evjf-experiences": "evjf-experiences",
  "evg-experiences": "evg-experiences",
  "corporate-experiences": "corporate-incentive-travel",
  "cruise-guests": "cruise-guests",
};

const homeCardPhotos: Partial<Record<string, { src: string; objectPosition: string }>> = {
  "food-tours": {
    src: "/images/experiences/food-tour-cannes-seaview.jpg",
    objectPosition: "50% 50%",
  },
  hiking: {
    src: "/images/experiences/food-tour-tasting-cannes.jpg",
    objectPosition: "40% 50%",
  },
};

export default function ExperienceSection({
  locale,
  photos,
}: {
  locale: Locale;
  photos: Record<ExperienceSlug, ExperiencePhotoCollection>;
}) {
  const copy = getMessages(locale).experiences;

  return (
    <section className="section experiences-section" id="experiences">
      <div className="page-width">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{copy.eyebrow}</p>
            <h2>{copy.headingFirst} <em>{copy.headingSecond}</em></h2>
          </div>
          <p className="section-intro">{copy.introduction}</p>
        </div>

        <div className="experience-grid">
          {copy.items.map((experience, index) => {
            const pageSlug = detailPages[experience.id];
            const cardPhoto = homeCardPhotos[experience.id];
            const photoSrc = cardPhoto?.src ?? (pageSlug ? photos[pageSlug].hero?.src : undefined);

            return (
              <article
                className={`experience-card ${experience.image}`}
                id={experience.id}
                key={experience.id}
              >
                <Link
                  className="experience-image"
                  href={
                    pageSlug
                      ? localePath(locale, `/experiences/${pageSlug}`)
                      : `${localePath(locale)}#booking`
                  }
                  aria-label={`${experience.title} — ${copy.explore}`}
                >
                  {photoSrc && (
                    <Image
                      alt=""
                      className="experience-cover-image"
                      fill
                      sizes="(max-width: 780px) 100vw, 33vw"
                      src={photoSrc}
                      style={cardPhoto ? { objectPosition: cardPhoto.objectPosition } : undefined}
                    />
                  )}
                  <span className="card-number">0{index + 1}</span>
                  <span className="experience-image-title">
                    {experience.title}
                  </span>
                  <span className="experience-image-arrow" aria-hidden="true">
                    ↗
                  </span>
                </Link>
                <div className="experience-copy">
                  <p className="card-detail">{experience.detail}</p>
                  <h3>{experience.title}</h3>
                  <p>{experience.description}</p>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
