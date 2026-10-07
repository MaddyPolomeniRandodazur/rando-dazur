import { localePath, type ExperienceSlug, type Locale } from "../i18n/config";
import { getMessages } from "../i18n/messages";
import Image from "next/image";
import BookingSection from "./BookingSection";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { getSiteUrl } from "../lib/site-url";
import { getExperiencePhotoCollection } from "../lib/experience-photos";
import {
  getBreadcrumbStructuredData,
  getBusinessStructuredData,
} from "../lib/structured-data";

export default async function ExperiencePage({
  locale,
  slug,
}: {
  locale: Locale;
  slug: ExperienceSlug;
}) {
  const copy = getMessages(locale);
  const experience = copy.experiencePage.pages[slug];
  const photos = await getExperiencePhotoCollection(slug);
  const baseUrl = getSiteUrl();
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      getBusinessStructuredData(locale),
      {
        "@type": "Service",
        "@id": new URL(
          `${localePath(locale, `/experiences/${slug}`)}#service`,
          baseUrl,
        ).toString(),
        name: experience.title,
        description: experience.description,
        url: new URL(
          localePath(locale, `/experiences/${slug}`),
          baseUrl,
        ).toString(),
        ...(photos.hero
          ? { image: new URL(photos.hero.src, baseUrl).toString() }
          : {}),
        provider: {
          "@id": new URL("/#organization", baseUrl).toString(),
        },
        areaServed: {
          "@type": "Place",
          name: copy.seo.areaName,
        },
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: new URL(
            localePath(locale, `/experiences/${slug}`),
            baseUrl,
          ).toString(),
        },
      },
      getBreadcrumbStructuredData(locale, [
        { name: copy.navigation.home, path: "" },
        { name: copy.navigation.experiences, path: "#experiences" },
        { name: experience.title, path: `/experiences/${slug}` },
      ]),
    ],
  };

  return (
    <>
      <Navbar
        contactCopy={copy.contact}
        copy={copy.navigation}
        locale={locale}
      />
      <main>
        <section className={`experience-detail-hero detail-${slug}`}>
          {photos.hero && (
            <Image
              alt={experience.imageAlt}
              className="experience-detail-photo"
              fill
              preload
              sizes="100vw"
              src={photos.hero.src}
            />
          )}
          <div className="hero-shade" aria-hidden="true" />
          <div className="page-width experience-detail-content">
            <p className="eyebrow eyebrow-light">
              {copy.experiencePage.eyebrow}
            </p>
            <h1>{experience.title}</h1>
            <p className="experience-detail-subtitle">{experience.subtitle}</p>
            <p className="hero-description">{experience.description}</p>
            <a className="button button-light" href="#booking">
              {copy.experiencePage.enquire}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
          <a
            className="experience-back-link"
            href={`${localePath(locale)}#experiences`}
          >
            ← {copy.experiencePage.back}
          </a>
        </section>
        {photos.gallery.length > 0 && (
          <section
            aria-labelledby="experience-gallery-title"
            className="experience-photo-gallery"
          >
            <div className="page-width">
            <div className="section-heading">
              <div>
                <p className="eyebrow">{copy.photoGallery.eyebrow}</p>
                <h2 id="experience-gallery-title">
                  {copy.photoGallery.title}
                </h2>
              </div>
              <p className="section-intro">
                {copy.photoGallery.description}
              </p>
            </div>
            <div className="experience-photo-gallery-grid">
              {photos.gallery.map((photo, index) => (
                <figure className="experience-photo-gallery-photo" key={photo.src}>
                  <Image
                    alt={copy.photoGallery.photoAlt}
                    fill
                    sizes="(max-width: 780px) 100vw, 33vw"
                    src={photo.src}
                  />
                  <figcaption>{String(index + 1).padStart(2, "0")}</figcaption>
                </figure>
              ))}
            </div>
            </div>
          </section>
        )}
        {"tours" in experience && experience.tours && (
          <section
            aria-labelledby="cycling-tours-title"
            className="experience-detail-section cycling-tours-section"
          >
            <div className="page-width">
              <div className="section-heading">
                <div>
                  <p className="eyebrow">{copy.experiencePage.chaptersEyebrow}</p>
                  <h2 id="cycling-tours-title">
                    {copy.experiencePage.toursTitleFirst}{" "}
                    <em>{copy.experiencePage.toursTitleSecond}</em>
                  </h2>
                </div>
              </div>
              <div className="cycling-tour-grid">
                {experience.tours.map((tour, index) => {
                  const tourPhoto =
                    photos.gallery[index] ?? photos.hero;
                  return (
                    <article className="cycling-tour-card" key={tour.title}>
                      <div className="cycling-tour-image">
                        {tourPhoto && (
                          <Image
                            alt=""
                            fill
                            sizes="(max-width: 780px) 100vw, 33vw"
                            src={tourPhoto.src}
                          />
                        )}
                      </div>
                      <div className="cycling-tour-copy">
                        <span>0{index + 1}</span>
                        <h3>{tour.title}</h3>
                        <p>{tour.description}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        )}
        <section className="experience-detail-section">
          <div className="page-width">
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  {copy.experiencePage.chaptersEyebrow}
                </p>
                <h2>
                  {copy.experiencePage.chaptersTitleFirst}{" "}
                  <em>{copy.experiencePage.chaptersTitleSecond}</em>
                </h2>
              </div>
              <p className="section-intro">{copy.experiencePage.note}</p>
            </div>
            <div className="experience-detail-points">
              {experience.points.map((point, index) => (
                <article className="experience-detail-point" key={point}>
                  <span>0{index + 1}</span>
                  <p>{point}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <BookingSection locale={locale} />
      </main>
      <Footer locale={locale} />
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        type="application/ld+json"
      />
    </>
  );
}
