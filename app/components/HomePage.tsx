import Link from "next/link";
import MaddyProfile from "./MaddyProfile";
import MimosaLink from "./MimosaLink";
import { localePath, type Locale } from "../i18n/config";
import { getMessages } from "../i18n/messages";
import BookingSection from "./BookingSection";
import FeaturedIn from "./FeaturedIn";
import Footer from "./Footer";
import Hero from "./Hero";
import Manifesto from "./Manifesto";
import Navbar from "./Navbar";
import Newsletter from "./Newsletter";
import PartnerTrustSection from "./PartnerTrustSection";
import PressSection from "./PressSection";
import ReviewsSection from "./ReviewsSection";
import RivieraMap from "./RivieraMap";
import ScrollReveal from "../scroll-reveal";
import { getSiteUrl } from "../lib/site-url";
import {
  getAllExperiencePhotoCollections,
  getBestLandscapeExperiencePhoto,
} from "../lib/experience-photos";
import type { ExperiencePhoto } from "../lib/experience-photos";
import { getBusinessStructuredData, getPersonStructuredData, getWebsiteStructuredData } from "../lib/structured-data";

export default async function HomePage({ locale }: { locale: Locale }) {
  const copy = getMessages(locale);
  const baseUrl = getSiteUrl();
  const experiencePhotos = await getAllExperiencePhotoCollections();
  const heroPhoto = await getBestLandscapeExperiencePhoto(experiencePhotos);
  const destinationPhotos: Record<string, ExperiencePhoto[]> = Object.fromEntries(
    copy.map.destinations.map((destination) => [
      destination.id,
      [
        ...new Map(
          destination.photosFrom
            .flatMap((slug) => {
              const collection = experiencePhotos[slug];
              return collection.hero
                ? [collection.hero, ...collection.gallery]
                : collection.gallery;
            })
            .map((photo) => [photo.fileName, photo]),
        ).values(),
      ].slice(0, 3),
    ]),
  );
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      getBusinessStructuredData(locale),
      getPersonStructuredData(locale),
      getWebsiteStructuredData(),
      {
        "@type": "WebPage",
        "@id": new URL(`${localePath(locale)}#webpage`, baseUrl).toString(),
        url: new URL(localePath(locale), baseUrl).toString(),
        name: `${copy.hero.titleFirst} ${copy.hero.titleSecond} — Rando d’Azur`,
        description: copy.hero.description,
        inLanguage: locale,
        isPartOf: {
          "@id": new URL("/#website", baseUrl).toString(),
        },
        about: {
          "@id": new URL("/#organization", baseUrl).toString(),
        },
      },
    ],
  };

  return (
    <>
      <Navbar
        contactCopy={copy.contact}
        copy={copy.navigation}
        locale={locale}
      />
      <ScrollReveal />
      <main>
        <Hero
          locale={locale}
          photo={{ ...heroPhoto, src: "/images/hero/french-riviera-panoramic-picnic.jpg" }}
        />
        <Manifesto locale={locale} photos={experiencePhotos} />
        <section className="page-width"><MimosaLink locale={locale} /></section>
        <section className="section" id="about"><div className="page-width"><MaddyProfile locale={locale} compact /></div></section>
        <section className="page-width home-shortcuts" aria-label={locale === "fr" ? "Pour aller plus loin" : "Explore more"}>
          <Link className="text-link" href={localePath(locale, "/kids-schools-youth-groups")}>{locale === "fr" ? "Enfants, écoles & groupes jeunesse" : "Kids, Schools & Youth Groups"} ↗</Link>
          <Link className="text-link" href={localePath(locale, "/travel-trade")}>{locale === "fr" ? "Agences & partenaires professionnels" : "Travel Trade & DMC"} ↗</Link>
        </section>
        <PartnerTrustSection locale={locale} />
        <FeaturedIn locale={locale} />
        <PressSection locale={locale} />
        <ReviewsSection locale={locale} />
        <RivieraMap
          copy={copy.map}
          destinationPhotos={destinationPhotos}
          locale={locale}
        />
        <BookingSection locale={locale} />
        <Newsletter copy={copy.newsletter} locale={locale} />
      </main>
      <Footer locale={locale} />
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        type="application/ld+json"
      />
    </>
  );
}
