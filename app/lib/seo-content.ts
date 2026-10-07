import type { Locale } from "../i18n/config";

export const homeSeo: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "Rando d’Azur | Private Experiences & Local French Riviera Guides",
    description: "Discover the French Riviera with local guides: private hiking, food tours, cycling and outdoor experiences in Cannes, Antibes, Estérel and beyond.",
  },
  fr: {
    title: "Rando d’Azur | Guide local & expériences privées sur la Côte d’Azur",
    description: "Découvrez la Côte d’Azur avec un guide local : randonnées, food tours, vélo et expériences privées sur mesure à Cannes, Antibes, dans l’Estérel et au-delà.",
  },
  it: {
    title: "Rando d’Azur | Guide locali ed esperienze private in Costa Azzurra",
    description: "Scopri la Costa Azzurra con guide locali: escursioni, tour gastronomici, bici ed esperienze private a Cannes, Antibes, nell’Estérel e oltre.",
  },
};

export const frenchExperienceSeo: Record<string, { title: string; description: string }> = {
  "food-tours": { title: "Food tour Cannes | Visite gourmande privée", description: "Découvrez Cannes avec un guide local : marché Forville, spécialités provençales et rencontres avec les artisans lors d’un food tour privé sur mesure." },
  "hiking-experiences": { title: "Guide randonnée Cannes & Côte d’Azur | Randonnées privées", description: "Randonnez avec un guide local autour de Cannes, dans l’Estérel, au Cap d’Antibes ou aux îles de Lérins. Un itinéraire privé adapté à votre rythme." },
  "sunset-apero-hikes": { title: "Randonnée apéro sur la Côte d’Azur | Coucher de soleil", description: "Partagez une randonnée privée avec un guide local et un apéro provençal au coucher du soleil sur la Côte d’Azur. Un moment convivial dans la nature." },
  "cycling-experiences": { title: "Vélo à Cannes & sur la Côte d’Azur | Balades privées", description: "Explorez Cannes, le littoral de la Côte d’Azur ou les pistes de l’Estérel à vélo avec un guide local. Des sorties privées adaptées à votre groupe." },
  "wild-provence": { title: "Provence sauvage | Randonnées et nature dans le Var", description: "Explorez les plantes sauvages et les paysages de Provence avec un guide local autour de Grasse et du Pays de Fayence. Une expérience privée de nature." },
  "edible-plants": { title: "Plantes comestibles en Provence | Balades avec un guide local", description: "Découvrez les plantes sauvages et comestibles de Provence au fil d’une balade guidée, selon la saison, dans le respect des milieux naturels." },
  "outdoor-escape-games": { title: "Escape game outdoor Cannes & Côte d’Azur | Groupes", description: "Réunissez famille, amis ou collègues pour un escape game en plein air sur la Côte d’Azur. Énigmes et défis partagés avec une équipe locale." },
  "family-experiences": { title: "Activités en famille à Cannes & sur la Côte d’Azur", description: "Imaginez une sortie privée en famille autour de Cannes et sur la Côte d’Azur : nature, découvertes et aventures adaptées à l’âge des enfants." },
  "evjf-experiences": { title: "EVJF & EVG Cannes | Expériences privées sur la Côte d’Azur", description: "Célébrez un EVJF ou un EVG avec une expérience privée sur la Côte d’Azur : randonnée, apéro et découvertes locales imaginés pour votre groupe." },
  "evg-experiences": { title: "EVJF & EVG Cannes | Expériences privées sur la Côte d’Azur", description: "Des expériences privées sur la Côte d’Azur pour célébrer entre amis, avec un guide local et un programme adapté à votre groupe." },
  "corporate-incentive-travel": { title: "Team building Cannes | Corporate & incentive Côte d’Azur", description: "Un partenaire local pour vos groupes, team buildings et voyages incentive sur la Côte d’Azur. Expériences privées conçues avec agences et DMC." },
  "cruise-guests": { title: "Excursions privées à Cannes pour les croisiéristes", description: "Profitez de votre escale à Cannes avec une excursion privée : découvertes locales, nature et gastronomie, selon le temps disponible au port." },
};
