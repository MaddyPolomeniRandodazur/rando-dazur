import type { Locale } from "./config";

const en = {
  title: "Your French Riviera experience partner",
  seoTitle: "French Riviera Travel Trade & DMC Partner | Rando d’Azur",
  description: "Private French Riviera experiences for travel agencies, DMCs, tour operators, hotels and incentive planners, with a local team in Cannes and beyond.",
  eyebrow: "TRAVEL TRADE · LOCAL EXPERTISE",
  introduction: "Rando d’Azur is a local French Riviera specialist creating private, authentic experiences around Cannes, Antibes, the Estérel, Grasse, the Lérins Islands and the Pays de Fayence. Founded by Maddy Polomeni, our team helps travel professionals connect their guests with the people, flavours and landscapes of the Côte d’Azur.",
  sections: [
    { title: "A local partner for your guests", text: "We work with travel agencies, DMCs, tour operators, concierge services and hotels to shape private experiences around each group’s interests. Share your destination, dates, group size and preferred pace with Maddy; the itinerary and practical details are discussed before booking." },
    { title: "Outdoor experiences, local encounters", text: "Choose locally guided hiking, food tours, cycling, sunset apéro hikes, outdoor escape games or family experiences. Locations depend on the activity: the Lérins Islands offer hiking, sunset apéro hikes and outdoor escape games; food tours and cycling take place on the mainland." },
    { title: "Corporate groups and incentive travel", text: "Outdoor challenges, shared discoveries and local food bring corporate groups together. Rando d’Azur is an experience partner for incentive travel planners and DMCs looking for activities in Cannes and across the Riviera, with a programme adapted to the people taking part." },
    { title: "Private shore experiences from Cannes", text: "For cruise guests, a private experience can focus on Cannes or nearby landscapes, according to the time available during the port call. Discuss arrival, departure and meeting arrangements with Maddy before confirming an excursion." },
  ],
  faqTitle: "Planning with Rando d’Azur",
  faqs: [
    { question: "Does Rando d’Azur work with agencies and DMCs?", answer: "Yes. Rando d’Azur works as a local experience partner for travel professionals, creating private activities on the French Riviera. Contact Maddy to discuss your guests and itinerary." },
    { question: "Are experiences private and tailored to the group?", answer: "Private experiences are shaped around the group’s interests, pace and available time. The activity, destination and practical arrangements are agreed before booking." },
    { question: "What information should I send for a proposal?", answer: "Share your dates, group size, ages or activity preferences, destination and available time. For cruise calls, include the port schedule so the experience can be planned around the visit." },
  ],
  experiences: "Explore the experiences", destinations: "Where we operate", contact: "Discuss your guests with Maddy", linkLabel: "Travel agencies & DMC partners",
};
const fr: typeof en = {
  title: "Votre partenaire local sur la Côte d’Azur",
  seoTitle: "Agences & DMC Côte d’Azur | Partenaire local Rando d’Azur",
  description: "Des expériences privées sur la Côte d’Azur pour agences de voyages, DMC, hôtels et organisateurs d’incentive, avec une équipe locale autour de Cannes.",
  eyebrow: "PROFESSIONNELS DU VOYAGE · EXPERTISE LOCALE",
  introduction: "Rando d’Azur est un spécialiste local de la Côte d’Azur qui crée des expériences privées et authentiques autour de Cannes, Antibes, l’Estérel, Grasse, des îles de Lérins et du Pays de Fayence. Fondée par Maddy Polomeni, notre équipe aide les professionnels du voyage à faire découvrir à leurs clients les habitants, les saveurs et les paysages de la Riviera.",
  sections: [
    { title: "Un partenaire local pour vos voyageurs", text: "Nous travaillons avec les agences de voyages, DMC, tour-opérateurs, conciergeries et hôtels pour imaginer des expériences privées adaptées à chaque groupe. Transmettez à Maddy la destination, les dates, le nombre de participants et le rythme souhaité : l’itinéraire et les détails pratiques sont discutés avant la réservation." },
    { title: "Nature, découvertes et rencontres locales", text: "Randonnées guidées, parcours gourmands, vélo, randonnées apéro au coucher du soleil, escape games outdoor ou expériences en famille : le lieu dépend de l’activité. Les îles de Lérins accueillent des randonnées, randonnées apéro et escape games outdoor ; les parcours gourmands et le vélo se déroulent sur le continent." },
    { title: "Groupes corporate et voyages incentive", text: "Défis en plein air, découvertes partagées et produits locaux réunissent les équipes. Rando d’Azur accompagne les organisateurs d’incentive et les DMC pour leurs activités à Cannes et sur la Côte d’Azur, avec un programme adapté aux participants." },
    { title: "Des excursions privées depuis Cannes pour les croisiéristes", text: "Une expérience privée peut se concentrer sur Cannes ou les paysages proches, selon le temps disponible pendant l’escale. Les horaires d’arrivée et de départ ainsi que le rendez-vous sont à discuter avec Maddy avant de confirmer la sortie." },
  ],
  faqTitle: "Préparer votre projet avec Rando d’Azur",
  faqs: [
    { question: "Rando d’Azur travaille-t-elle avec les agences et les DMC ?", answer: "Oui. Rando d’Azur intervient comme partenaire local d’expériences pour les professionnels du voyage sur la Côte d’Azur. Contactez Maddy pour discuter de vos voyageurs et de leur itinéraire." },
    { question: "Les expériences sont-elles privées et sur mesure ?", answer: "Les expériences privées sont imaginées selon les envies, le rythme et le temps disponible du groupe. L’activité, la destination et les modalités pratiques sont convenues avant la réservation." },
    { question: "Quelles informations envoyer pour une proposition ?", answer: "Précisez les dates, le nombre de participants, les âges ou les préférences d’activités, la destination et le temps disponible. Pour une escale de croisière, ajoutez les horaires au port." },
  ],
  experiences: "Découvrir les expériences", destinations: "Nos destinations", contact: "Parler de vos voyageurs avec Maddy", linkLabel: "Agences de voyages & partenaires DMC",
};
export function getTravelTradeContent(locale: Locale) { return locale === "fr" ? fr : en; }
