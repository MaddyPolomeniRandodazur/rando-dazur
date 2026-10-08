import Image from "next/image";
import Link from "next/link";
import type { Locale } from "../i18n/config";
import { localePath } from "../i18n/config";
import { getMessages } from "../i18n/messages";
import {
  formatPressDate,
  pressStories,
} from "../lib/press-content";

export default function PressSection({
  locale,
  fullPage = false,
}: {
  locale: Locale;
  fullPage?: boolean;
}) {
  const copy = getMessages(locale).press;
  const stories = fullPage ? pressStories : pressStories.slice(0, 3);

  return (
    <section
      className={`press-section${fullPage ? " press-section-page" : ""}`}
      id="press"
    >
      <div className="page-width press-inner">
        <div>
          <p className="eyebrow">{copy.eyebrow}</p>
          {fullPage ? (
            <h1>
              {copy.titleFirst} <em>{copy.titleSecond}</em>
            </h1>
          ) : (
            <h2>
              {copy.titleFirst} <em>{copy.titleSecond}</em>
            </h2>
          )}
        </div>
        <div className="press-note">
          <p>{fullPage ? copy.pageIntroduction : copy.introduction}</p>
          {!fullPage && (
            <Link className="text-link" href={localePath(locale, "/press")}>
              {copy.viewAll} <span aria-hidden="true">↗</span>
            </Link>
          )}
        </div>
      </div>
      <div className="page-width press-story-grid">
        {stories.map((story, index) => (
          <article className="press-story-card scroll-reveal" key={story.id}>
            <div className="press-story-topline">
              <div className="press-publication-logo">
                {story.logo ? <Image
                  alt={story.publication}
                  fill
                  sizes="(max-width: 720px) 130px, 170px"
                  src={story.logo}
                /> : <strong className="press-publication-name">{story.publication}</strong>}
              </div>
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>
            <p className="eyebrow press-story-publication">
              {story.publication}
            </p>
            <p className="press-coverage-kind">{story.kind === "interview" ? (locale === "fr" ? "Entretien avec Maddy" : "Interview with Maddy") : story.kind === "mention" ? (locale === "fr" ? "Mention / recommandation" : "Mention / recommendation") : (locale === "fr" ? "Reportage avec Maddy" : "Report with Maddy")}{story.reproduction && (locale === "fr" ? " · Reproduction attribuée" : " · Attributed reproduction")}</p>
            {story.date && <time dateTime={story.date}>{formatPressDate(story.date, locale, story.datePrecision)}</time>}
            {story.author && <p className="press-author">{story.author}</p>}
            <h3>{story.titles?.[locale] ?? story.title}</h3>
            <p className="press-story-excerpt">{story.excerpts[locale]}</p>
            <a
              className="press-story-link"
              href={story.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              {story.reproduction ? (locale === "fr" ? "Lire la reproduction attribuée" : "Read the attributed reproduction") : copy.readArticle}
              <span aria-hidden="true">↗</span>
            </a>
            {story.originalHref && <a className="press-story-link" href={story.originalHref} target="_blank" rel="noopener noreferrer">{locale === "fr" ? "Référence BBC originale" : "Original BBC reference"} ↗</a>}
          </article>
        ))}
      </div>

    </section>
  );
}
