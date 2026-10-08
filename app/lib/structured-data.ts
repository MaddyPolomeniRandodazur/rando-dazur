import { professionalContent } from "../i18n/professional-content";
import { maddyQualifications, professionalDetails } from "./professional-qualifications";
import { businessDetails } from "./business-details";
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
    "@type": ["Organization", "LocalBusiness"],
    "@id": businessUrl,
    name: "Rando d’Azur",
    alternateName: "Rando d'Azur",
    url: baseUrl.toString(),
    description: copy.hero.description,
    logo: new URL(publicAssetUrl("images/about/brand/version bleu.png"), baseUrl).toString(),
    founder: { "@id": new URL("/#maddy-polomeni", baseUrl).toString() },
    image: new URL(
      publicAssetUrl("images/about/brand/version bleu.png"),
      baseUrl,
    ).toString(),
    email: [...new Set([contactChannels.primaryEmail, contactChannels.secondaryEmail])],
    legalName: businessDetails.owner,
    vatID: businessDetails.vatID,
    identifier: { "@type": "PropertyValue", propertyID: "SIRET", value: businessDetails.siret.replace(/ /g, "") },
    telephone: contactChannels.phoneInternational,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${businessDetails.streetAddress}, ${businessDetails.addressLine2}`,
      postalCode: businessDetails.postalCode,
      addressLocality: businessDetails.city,
      addressCountry: "FR",
    },
    hasMap: googleBusinessProfile,
    sameAs: [contactChannels.instagramUrl, contactChannels.facebookUrl],
    areaServed: [
      "Cannes",
      "Estérel",
      "Grasse",
      "Pays de Fayence",
      "Antibes",
      "Îles de Lérins",
      "French Riviera / Côte d’Azur",
      "Alpes-Maritimes",
      "Var",
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

export function getPersonStructuredData(locale: Locale) {
  const baseUrl = getSiteUrl();
  return {
    "@type": "Person",
    "@id": new URL("/#maddy-polomeni", baseUrl).toString(),
    name: "Maddy Polomeni",
    jobTitle: professionalContent[locale].role,
    hasCredential: maddyQualifications.map(name => ({ "@type": "EducationalOccupationalCredential", name })),
    identifier: { "@type": "PropertyValue", propertyID: "Carte professionnelle d’éducateur sportif", value: professionalDetails.card },
    description: professionalContent[locale].description,
    url: new URL(localePath(locale, "/meet-maddy"), baseUrl).toString(),
    sameAs: [locale === "en" ? "https://maddypolomeni.com/en/who-i-am" : "https://maddypolomeni.com/qui-suis-je"],
    image: new URL("/images/about/maddy-polomeni-mimosa-portrait.jpg", baseUrl).toString(),
    worksFor: { "@id": new URL("/#organization", baseUrl).toString() },
  };
}

export function getWebPageStructuredData(locale: Locale, path: string, name: string, description: string) {
  const baseUrl = getSiteUrl();
  const url = new URL(localePath(locale, path), baseUrl).toString();
  return {
    "@type": "WebPage", "@id": `${url}#webpage`, url, name, description,
    inLanguage: locale,
    isPartOf: { "@id": new URL("/#website", baseUrl).toString() },
    publisher: { "@id": new URL("/#organization", baseUrl).toString() },
  };
}

export function getWebsiteStructuredData() {
  const baseUrl = getSiteUrl();
  return { "@type": "WebSite", "@id": new URL("/#website", baseUrl).toString(), name: "Rando d’Azur", url: baseUrl.toString(), inLanguage: ["en", "fr", "it"], publisher: { "@id": new URL("/#organization", baseUrl).toString() } };
}
