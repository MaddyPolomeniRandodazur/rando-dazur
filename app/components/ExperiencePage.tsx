import { localizedImageAlt } from "../i18n/image-alt";
import { localePath, type ExperienceSlug, type Locale } from "../i18n/config";
import { getMessages } from "../i18n/messages";
import Image from "next/image";
import type { CSSProperties } from "react";
import cyclingPhotoStyles from "./CyclingTourPhoto.module.css";
import BookingSection from "./BookingSection";
import { RateSummary } from "./PrivateRates";
import rateStyles from "./PrivateRates.module.css";
import { rateContent, isCustomQuoteExperience, getGuideOffers } from "../lib/private-rates";
import YouthGroupsSection from "./YouthGroupsSection";
import CyclingLessons from "./CyclingLessons";
import ExperienceConnections from "./ExperienceConnections";
import { cyclingTourImages, experienceImages } from "../lib/experience-images";
import { getWhatsAppUrl } from "../lib/whatsapp";
import { bookingLabels, getRegiondoBookingUrl } from "../lib/regiondo";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { getSiteUrl } from "../lib/site-url";
import { getExperiencePhotoCollection } from "../lib/experience-photos";
import {
  getBreadcrumbStructuredData,
  getBusinessStructuredData,
  getWebPageStructuredData,
  getWebsiteStructuredData,
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
  const customQuote = isCustomQuoteExperience(slug);
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      getBusinessStructuredData(locale),
      getWebsiteStructuredData(),
      getWebPageStructuredData(locale, `/experiences/${slug}`, experience.title, experience.description),
      {
        "@type": "Service",
        "@id": new URL(
          `${localePath(locale, `/experiences/${slug}`)}#service`,
          baseUrl,
        ).toString(),
        name: experience.title,
        serviceType: experience.title,
        ...(!customQuote ? { offers: getGuideOffers(locale, new URL(localePath(locale, `/experiences/${slug}`), baseUrl).toString()) } : {}),
        ...(experienceImages[slug]?.[0] ? { image: new URL(experienceImages[slug][0].src, baseUrl).toString() } : {}),
        description: experience.description,
        url: new URL(
          localePath(locale, `/experiences/${slug}`),
          baseUrl,
        ).toString(),
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
              alt={localizedImageAlt(locale, experienceImages[slug]?.[0]?.alt ?? experience.imageAlt)}
              className="experience-detail-photo"
              fill
              style={{ objectPosition: experienceImages[slug]?.[0]?.objectPosition }}
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
            <div className="hero-actions">
            <a className="button button-light" href={getRegiondoBookingUrl(slug)} target="_blank" rel="noopener noreferrer" data-conversion="booking_request">
              {bookingLabels[locale].experience} <span aria-hidden="true">↗</span>
            </a>
            <a className="button button-light" href="#booking">
              {copy.experiencePage.enquire}
              <span aria-hidden="true">↗</span>
            </a>
            </div>
            <RateSummary locale={locale} customQuote={customQuote} />
            <p className={rateStyles.note}>{rateContent[locale].benefit}</p>
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
                <figure className="experience-photo-gallery-photo" key={photo.fileName}>
                  <Image
                    alt={localizedImageAlt(locale, experienceImages[slug]?.[index + 1]?.alt ?? copy.photoGallery.photoAlt)}
                    fill
                    sizes={slug === "cycling-experiences" ? "(max-width: 780px) 100vw, 66vw" : "(max-width: 780px) 100vw, 33vw"}
                    style={{ objectPosition: experienceImages[slug]?.[index + 1]?.objectPosition }}
                    src={photo.src}
                  />
                  <figcaption>{String(index + 1).padStart(2, "0")}</figcaption>
                </figure>
              ))}
            </div>
            </div>
          </section>
        )}
        {slug === "cycling-experiences" && <CyclingLessons locale={locale} />}
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
                  const tourPhoto = cyclingTourImages[index];
                  return (
                    <article className="cycling-tour-card" key={tour.title}>
                      <div className="cycling-tour-image">
                        {tourPhoto && (
                          <Image
                            alt={localizedImageAlt(locale, tourPhoto.alt)}
                            className={cyclingPhotoStyles.photo}
                            fill
                            sizes="(max-width: 780px) 100vw, 33vw"
                            src={tourPhoto.src}
                            style={{
                              "--tour-position": tourPhoto.objectPosition,
                              "--tour-mobile-position": tourPhoto.mobileObjectPosition ?? tourPhoto.objectPosition,
                            } as CSSProperties}
                          />
                        )}
                      </div>
                      <div className="cycling-tour-copy">
                        <span>0{index + 1}</span>
                        <h3>{tour.title}</h3>
                        <p>{tour.description}</p>
                        {"seasonality" in tour && <p>{tour.seasonality}</p>}
                        <p>
                          <a className="text-link" href={getRegiondoBookingUrl(slug, tour.title)} target="_blank" rel="noopener noreferrer" data-conversion="booking_request">
                            {bookingLabels[locale].experience} <span aria-hidden="true">↗</span>
                          </a>
                        </p>
                        <a
                          className="text-link"
                          href={getWhatsAppUrl(`${copy.contact.whatsappMessage}\n\n${tour.title}`)}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          {copy.experiencePage.enquire} <span aria-hidden="true">↗</span>
                        </a>
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
        {slug === "family-experiences" && <YouthGroupsSection locale={locale} />}
        <ExperienceConnections locale={locale} slug={slug} />
        <BookingSection locale={locale} customQuote={customQuote} experience={slug} />
      </main>
      <Footer locale={locale} />
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        type="application/ld+json"
      />
    </>
  );
}
