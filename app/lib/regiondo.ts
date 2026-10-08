import type { ExperienceSlug, Locale } from "../i18n/config";

export const regiondoShopUrl = "https://randodazur.regiondo.fr/categories";

// Only add a product URL after confirming that it matches the current offer.
// null deliberately keeps online booking active through the general shop.
export const regiondoProductUrls: Record<ExperienceSlug, string | null> = {
  "food-tours": null,
  "hiking-experiences": null,
  "sunset-apero-hikes": null,
  "cycling-experiences": null,
  "wild-provence": null,
  "edible-plants": null,
  "outdoor-escape-games": null,
  "family-experiences": null,
  "evjf-experiences": null,
  "evg-experiences": null,
  "corporate-incentive-travel": null,
  "cruise-guests": null,
};

export const cyclingRegiondoProductUrls: Record<string, string | null> = {
  "Cannes City Discovery": null,
  "Estérel Mountain Bike Adventure": null,
  "Mimosa Season Cycling Tour": null,
};

export function getRegiondoBookingUrl(experience?: ExperienceSlug, tour?: string) {
  return (experience === "cycling-experiences" && tour ? cyclingRegiondoProductUrls[tour] : null)
    ?? (experience ? regiondoProductUrls[experience] : null)
    ?? regiondoShopUrl;
}

export const bookingLabels: Record<Locale, { book: string; experience: string }> = {
  en: { book: "Book online", experience: "Book this experience" },
  fr: { book: "Réserver en ligne", experience: "Réserver cette expérience" },
  it: { book: "Prenota online", experience: "Prenota questa esperienza" },
};
