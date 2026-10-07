import Image from "next/image";
import type { ExperienceSlug, Locale } from "../i18n/config";
import { getMessages } from "../i18n/messages";
import type { ExperiencePhotoCollection } from "../lib/experience-photos";

const moments = [
  {
    image: "manifesto-food",
    href: "#food-tours",
    slug: "food-tours",
  },
  {
    image: "manifesto-walk",
    href: "#hiking",
    slug: "hiking-experiences",
  },
  {
    image: "manifesto-cycle",
    href: "#velo",
    slug: "cycling-experiences",
  },
  {
    image: "manifesto-meet",
    href: "#corporate-experiences",
    slug: "corporate-incentive-travel",
  },
  {
    image: "manifesto-live",
    href: "#familles",
    slug: "family-experiences",
  },
] satisfies { image: string; href: string; slug: ExperienceSlug }[];

export default function Manifesto({
  locale,
  photos,
}: {
  locale: Locale;
  photos: Record<ExperienceSlug, ExperiencePhotoCollection>;
}) {
  const copy = getMessages(locale).manifesto;

  return (
    <section className="manifesto-section">
      <div className="page-width">
        <div className="manifesto-heading">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2>{copy.titleFirst} <em>{copy.titleSecond}</em></h2>
          <p>{copy.introduction}</p>
        </div>
        <div className="manifesto-grid">
          {moments.map((moment, index) => {
            const photoSrc = moment.image === "manifesto-food"
              ? "/images/manifesto/eat-it-retouched.jpg"
              : moment.image === "manifesto-cycle"
                ? "/images/manifesto/cycle-tour-french-riviera.jpg"
                : moment.image === "manifesto-walk"
                  ? "/images/manifesto/walk-it-forest-hike.jpg"
                  : moment.image === "manifesto-meet"
                    ? "/images/manifesto/meet-it-socca-cannes-market.jpg"
                    : photos[moment.slug].hero?.src;

            return (
              <a
                className={`manifesto-card ${moment.image}`}
                href={moment.href}
                key={moment.image}
              >
                {photoSrc && (
                  <Image
                    className="manifesto-card-image"
                    src={photoSrc}
                    style={moment.image === "manifesto-cycle" ? { objectPosition: "60% 60%" } : moment.image === "manifesto-walk" ? { objectPosition: "60% 50%" } : moment.image === "manifesto-meet" ? { objectPosition: "45% 65%" } : undefined}
                    alt=""
                    fill
                    sizes="(max-width: 720px) 100vw, (max-width: 1050px) 50vw, 34vw"
                  />
                )}
                <span className="manifesto-index">0{index + 1}</span>
                <span className="manifesto-card-copy">
                  <strong>{copy.words[index]}</strong>
                  <span>{copy.stories[index]}</span>
                </span>
                <span className="manifesto-arrow" aria-hidden="true">↗</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
