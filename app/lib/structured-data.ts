import type { Locale } from "../i18n/config";
import { localePath } from "../i18n/config";
import { getMessages } from "../i18n/messages";
import { contactChannels } from "./contact-channels";
import { publicAssetUrl } from "./public-assets";
import { getSiteUrl } from "./site-url";

const googleBusinessProfile =
  "https://maps.app.goo.gl/D8w9fnAZPs47zPXbA";

export function getBusinessStructuredData(locale: Locale) {
  const copy = getMessages(locale);
  const baseUrl = getSiteUrl();
  const businessUrl = new URL("/#organization", baseUrl).toString();

  return {
    "@type": "TravelAgency",
    "@id": businessUrl,
    name: "Rando d’Azur",
    alternateName: "Rando d'Azur",
    url: new URL(localePath(locale), baseUrl).toString(),
    description: copy.hero.description,
    image: new URL(
      publicAssetUrl("images/Rando d_Azur/Brand/Logo/version bleu.png"),
      baseUrl,
    ).toString(),
    email: [contactChannels.primaryEmail, contactChannels.secondaryEmail],
    telephone: contactChannels.phoneInternational,
    address: {
      "@type": "PostalAddress",
      streetAddress: "225 Rue F. Leger",
      addressLocality: "Biot",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.5540491,
      longitude: 6.9471584,
    },
    hasMap: googleBusinessProfile,
    areaServed: [
      "Cannes",
      "Estérel",
      "Grasse",
      "Pays de Fayence",
      "Antibes",
      "Îles de Lérins",
    ].map((name) => ({
      "@type": "Place",
      name,
    })),
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer enquiries",
        email: contactChannels.primaryEmail,
        telephone: contactChannels.phoneInternational,
        availableLanguage: ["English", "French", "Italian"],
      },
      {
        "@type": "ContactPoint",
        contactType: "travel trade and partnerships",
        email: contactChannels.secondaryEmail,
        availableLanguage: ["English", "French", "Italian"],
      },
    ],
  };
}

export function getBreadcrumbStructuredData(
  locale: Locale,
  items: readonly { name: string; path: string }[],
) {
  const baseUrl = getSiteUrl();

  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(localePath(locale, item.path), baseUrl).toString(),
    })),
  };
}
