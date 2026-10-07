export interface PartnerLogo {
  name: string;
  href: string;
  logo?: string;
  caption?: "technical" | "equipment" | "supportedBy";
}

export const supportingOrganizations: PartnerLogo[] = [
  {
    name: "Columbia Sportswear",
    href: "https://www.columbia.com/",
    logo: "/images/partners/columbia-sportswear.svg",
    caption: "technical",
  },
  {
    name: "Decathlon Cannes",
    href: "https://www.decathlon.fr/",
    logo: "/images/partners/decathlon.svg",
    caption: "equipment",
  },
  {
    name: "Palais des Festivals et des Congrès de Cannes",
    href: "https://www.palaisdesfestivals.com/",
    logo: "/images/partners/palais-des-festivals.svg",
    caption: "supportedBy",
  },
];

export const trustedPartners: PartnerLogo[] = [
  {
    name: "Family Twist",
    href: "https://family-twist.com/",
    logo: "/images/partners/family-twist.svg",
  },
  {
    name: "Artoo Travel",
    href: "https://artootravel.com/",
    logo: "/images/partners/artoo-travel.png",
  },
  {
    name: "Trip My France",
    href: "https://tripmyfrance.com/",
    logo: "/images/partners/trip-my-france.png",
  },
  {
    name: "Vivi DMC",
    href: "https://www.vivi-dmc.com/",
    logo: "/images/partners/vivi-dmc.png",
  },
  {
    name: "My Events Organisation (Mougins)",
    href: "https://www.myeventsorganisation.com/",
    logo: "/images/partners/my-events-organisation.png",
  },
  {
    name: "Crux Agency",
    href: "https://agence-crux.com/",
  },
  {
    name: "Estérel Côte d’Azur",
    href: "https://www.esterel-cotedazur.com/",
    logo: "/images/partners/esterel-cote-d-azur.png",
  },
  {
    name: "Office de Tourisme Intercommunal du Pays de Fayence",
    href: "https://www.paysdefayence.com/",
    logo: "/images/partners/pays-de-fayence.png",
  },
  {
    name: "Andy Swann Voyage",
    href: "https://andyswannvoyage.com/",
    logo: "/images/partners/andy-swann-voyage.png",
  },
];
