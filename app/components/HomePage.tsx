import { localePath, type Locale } from "../i18n/config";
import { getMessages } from "../i18n/messages";
import BookingSection from "./BookingSection";
import ClientsSection from "./ClientsSection";
import ExperienceSection from "./ExperienceSection";
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
import Testimonials from "./Testimonials";
import WhySection from "./WhySection";
import ScrollReveal from "../scroll-reveal";
import { getSiteUrl } from "../lib/site-url";
import {
  getAllExperiencePhotoCollections,
  getBestLandscapeExperiencePhoto,
} from "../lib/experience-photos";
import type { ExperiencePhoto } from "../lib/experience-photos";
import { getBusinessStructuredData } from "../lib/structured-data";

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
            .map((photo) => [photo.src, photo]),
        ).values(),
      ].slice(0, 3),
    ]),
  );
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      getBusinessStructuredData(locale),
      {
        "@type": "WebSite",
        "@id": new URL("/#website", baseUrl).toString(),
        name: "Rando d’Azur",
        url: new URL(localePath(locale), baseUrl).toString(),
        inLanguage: locale,
        publisher: {
          "@id": new URL("/#organization", baseUrl).toString(),
        },
      },
      {
        "@type": "WebPage",
        "@id": new URL(`${localePath(locale)}#webpage`, baseUrl).toString(),
        url: new URL(localePath(locale), baseUrl).toString(),
        name: "Taste the French Riviera — Rando d’Azur",
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
        <Hero locale={locale} photo={heroPhoto} />
        <Manifesto locale={locale} photos={experiencePhotos} />
        <ExperienceSection
          locale={locale}
          photos={experiencePhotos}
        />
        <WhySection locale={locale} />
        <Testimonials locale={locale} />
        <PartnerTrustSection locale={locale} />
        <FeaturedIn locale={locale} />
        <PressSection locale={locale} />
        <ReviewsSection locale={locale} />
        <ClientsSection
          locale={locale}
          corporatePhoto={experiencePhotos["corporate-incentive-travel"].hero}
        />
        <RivieraMap
          copy={copy.map}
          destinationPhotos={destinationPhotos}
          locale={locale}
        />
        <BookingSection locale={locale} />
        <Newsletter copy={copy.newsletter} />
      </main>
      <Footer locale={locale} />
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        type="application/ld+json"
      />
    </>
  );
}
