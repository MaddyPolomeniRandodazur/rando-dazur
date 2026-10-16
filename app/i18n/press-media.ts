import type { Locale } from "./config";

export const pressMedia = {
  en: {
    title: "French Riviera press & media",
    seoTitle: "French Riviera Press Contact | Maddy Polomeni, Rando d’Azur",
    description: "Contact Maddy Polomeni for French Riviera travel stories, interviews and local insight: mimosa, Estérel hiking, Cannes food tours and private experiences.",
    heading: "Planning a French Riviera story?",
    introduction: "Journalists, editors and travel writers: contact Maddy Polomeni, founder of Rando d’Azur, for local insight, interviews and ideas around Cannes, the Estérel and the Côte d’Azur. Enquiries are welcome in English or French.",
    topics: [
      { title: "Mimosa & winter on the Riviera", text: "Seasonal walks around Cannes, Mandelieu and Tanneron, with a local guide’s perspective on the landscape and flowering season.", path: "/experiences/route-du-mimosa" },
      { title: "Local flavours & food tours", text: "Cannes markets, regional specialities and the people behind our private culinary experiences.", path: "/experiences/food-tours" },
      { title: "Nature & the Estérel", text: "Mediterranean trails, coastal landscapes and guided hikes that reveal another side of the French Riviera.", path: "/experiences/hiking-experiences" },
    ],
    contact: "Contact Maddy for your story", subject: "Press enquiry — French Riviera story",
    practical: "Include your publication, story angle, deadline, planned dates and any interview or image needs. Availability, access, image permissions and any hosting arrangements are agreed individually.",
    profile: "Meet Maddy & view her qualifications", trade: "Planning a client itinerary? Visit our agency & DMC page",
    archive: "Reports, interviews & published features",
  },
  fr: {
    title: "Presse & reportages sur la Côte d’Azur",
    seoTitle: "Contact presse Côte d’Azur | Maddy Polomeni, Rando d’Azur",
    description: "Journalistes : contactez Maddy Polomeni pour un reportage Côte d’Azur, mimosa à Tanneron, randonnée Estérel ou découverte gourmande à Cannes. Interviews FR/EN.",
    heading: "Vous préparez un sujet sur la Côte d’Azur ?",
    introduction: "Journalistes, rédactions et auteurs de voyage : Maddy Polomeni, fondatrice de Rando d’Azur, partage son regard local pour vos interviews et projets de reportage à Cannes, dans l’Estérel et sur la Côte d’Azur. Échanges possibles en français et en anglais.",
    topics: [
      { title: "Mimosa & hiver sur la Riviera", text: "Balades de saison autour de Cannes, Mandelieu et Tanneron, lecture du paysage et découverte de la floraison avec une guide locale.", path: "/experiences/route-du-mimosa" },
      { title: "Saveurs locales & balades gourmandes", text: "Marchés de Cannes, spécialités régionales et rencontres autour de nos expériences culinaires privées.", path: "/experiences/food-tours" },
      { title: "Nature & Estérel", text: "Sentiers méditerranéens, paysages du littoral et randonnées guidées pour raconter une autre Côte d’Azur.", path: "/experiences/hiking-experiences" },
    ],
    contact: "Contacter Maddy pour votre reportage", subject: "Demande presse — reportage Côte d’Azur",
    practical: "Précisez le média, l’angle du sujet, votre échéance, les dates envisagées et vos besoins d’interview ou d’images. Disponibilités, accès, droits des images et éventuelles conditions d’accueil sont convenus au cas par cas.",
    profile: "Rencontrer Maddy et découvrir ses qualifications", trade: "Un programme pour vos clients ? Accès agences réceptives & DMC",
    archive: "Reportages, interviews & parutions",
  },
} satisfies Record<Locale, object>;
