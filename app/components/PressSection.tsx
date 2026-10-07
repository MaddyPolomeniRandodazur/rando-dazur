import Image from "next/image";
import Link from "next/link";
import type { Locale } from "../i18n/config";
import { localePath } from "../i18n/config";
import { getMessages } from "../i18n/messages";
import {
  formatPressDate,
  pressArchivePlaceholders,
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
                <Image
                  alt={story.publication}
                  fill
                  sizes="(max-width: 720px) 130px, 170px"
                  src={story.logo}
                />
              </div>
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>
            <p className="eyebrow press-story-publication">
              {story.publication}
            </p>
            <time dateTime={story.date}>
              {formatPressDate(story.date, locale, story.datePrecision)}
            </time>
            <h3>{story.title}</h3>
            <p className="press-story-excerpt">{story.excerpts[locale]}</p>
            <a
              className="press-story-link"
              href={story.href}
              rel="noreferrer"
              target="_blank"
            >
              {copy.readArticle}
              <span aria-hidden="true">↗</span>
            </a>
          </article>
        ))}
      </div>
      {fullPage && (
        <div className="page-width press-archive-section">
          <div className="press-archive-heading">
            <p className="eyebrow">{copy.archiveEyebrow}</p>
            <p>{copy.archiveIntroduction}</p>
          </div>
          <div className="press-archive-grid">
            {pressArchivePlaceholders.map((item) => (
              <article
                className="press-archive-card"
                key={item.publication}
              >
                <span className="press-archive-mark">{item.publication}</span>
                <p>{copy.archivePlaceholder}</p>
                <time className="press-archive-issue" dateTime={item.date}>
                  {formatPressDate(
                    item.date,
                    locale,
                    "precision" in item ? item.precision : undefined,
                  )}
                </time>
              </article>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
