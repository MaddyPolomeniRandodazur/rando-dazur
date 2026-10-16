import type { Locale } from "./config";

export const hikingLocal = {
  fr: {
    heading: "Où randonner avec votre guide ?",
    intro: "Dans les Alpes-Maritimes et l’Estérel voisin, nous choisissons le parcours selon votre groupe, la saison et les conditions d’accès aux massifs.",
    places: [
      { title: "Cannes, Mandelieu & Estérel", text: "Sentiers méditerranéens, roches rouges et vues sur la mer. Une sortie nature au départ du bassin cannois.", path: "/destinations/esterel" },
      { title: "Cap d’Antibes", text: "Une découverte à pied du littoral, entre pinède, rochers et Méditerranée, adaptée aux conditions du jour.", path: "/destinations/antibes" },
      { title: "Îles de Lérins", text: "Des balades insulaires au large de Cannes. La traversée et les horaires se préparent avec votre groupe.", path: "/destinations/iles-de-lerins" },
    ],
    faqTitle: "Préparer votre randonnée privée",
    faqs: [
      { question: "Comment réserver un guide de randonnée dans les Alpes-Maritimes ?", answer: "Indiquez votre date, votre nombre de participants et votre niveau de marche. Maddy prépare avec vous un itinéraire et un devis pour votre groupe déjà constitué : amis, famille, association ou entreprise." },
      { question: "Peut-on prévoir une randonnée facile ou avec des enfants ?", answer: "Oui, selon l’âge des enfants et les capacités du groupe. Nous convenons ensemble de la distance, du dénivelé et des pauses avant de choisir le parcours." },
      { question: "Quelle différence entre une randonnée, une rando apéro et une balade mimosa ?", answer: "La randonnée privilégie les paysages et les découvertes nature. La rando apéro ajoute une pause gourmande. Les balades mimosa suivent la floraison hivernale : les dates et le lieu sont à confirmer selon la saison." },
      { question: "Que prévoir et que se passe-t-il si la météo change ?", answer: "Prévoyez des chaussures adaptées, de l’eau et une tenue pour la météo. Les informations pratiques sont confirmées avant la sortie. Le parcours peut être adapté, reporté ou annulé si les conditions ne permettent pas de partir en sécurité." },
    ],
    guide: "Rencontrer Maddy et découvrir ses qualifications",
    apero: "La randonnée apéro",
    mimosa: "Les balades mimosa",
    contact: "Préparer la sortie de votre groupe",
  },
  en: {
    heading: "Where can we hike with a local guide?",
    intro: "Across the Alpes-Maritimes and neighbouring Estérel, we choose a route around your group, the season and access conditions.",
    places: [
      { title: "Cannes, Mandelieu & Estérel", text: "Mediterranean trails, red rocks and sea views. A nature outing within reach of the Cannes area.", path: "/destinations/esterel" },
      { title: "Cap d’Antibes", text: "Explore the coast on foot, between pine trees, rocks and the Mediterranean, with a route suited to the conditions.", path: "/destinations/antibes" },
      { title: "Lérins Islands", text: "Island walks off Cannes. Ferry crossings and timings are planned with your group.", path: "/destinations/iles-de-lerins" },
    ],
    faqTitle: "Planning your private guided hike",
    faqs: [
      { question: "How do I book a hiking guide in the Alpes-Maritimes?", answer: "Share your date, group size and walking experience. Maddy helps plan an itinerary and quotation for your existing group of friends, family, association members or colleagues." },
      { question: "Can we choose an easy hike or bring children?", answer: "Yes, depending on the children’s ages and everyone’s abilities. We agree on distance, elevation and breaks before choosing a route." },
      { question: "How do hiking, apéro hikes and mimosa walks differ?", answer: "A guided hike focuses on landscapes and nature. An apéro hike includes a tasting break. Mimosa walks follow the winter flowering season, with dates and locations confirmed according to conditions." },
      { question: "What should we bring, and what if the weather changes?", answer: "Bring suitable shoes, water and clothing for the weather. We confirm practical details before departure. Routes may be adapted, postponed or cancelled if conditions prevent a safe outing." },
    ],
    guide: "Meet Maddy and discover her qualifications",
    apero: "Sunset apéro hikes",
    mimosa: "Mimosa walks",
    contact: "Plan your group’s hike",
  },
} satisfies Record<Locale, object>;
