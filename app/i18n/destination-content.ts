import type { ExperienceSlug, Locale } from "./config";

export const destinationSlugs = [
  "cannes",
  "esterel",
  "grasse",
  "pays-de-fayence",
  "antibes",
  "iles-de-lerins",
] as const;

export type DestinationSlug = (typeof destinationSlugs)[number];

export type DestinationContent = {
  title: string;
  seoTitle: string;
  metaDescription: string;
  introduction: string;
  highlights: readonly string[];
  imageAlt: string;
  photos: readonly string[];
  experiences: readonly ExperienceSlug[];
  faqs: readonly { question: string; answer: string }[];
};

const english: Record<DestinationSlug, DestinationContent> = {
  cannes: {
    title: "Cannes, beyond the Croisette",
    seoTitle: "Private Guide in Cannes | Food, Walking & Bike Tours",
    metaDescription:
      "Discover Cannes with a private local guide. Explore Le Suquet, Forville Market and the coast through thoughtful food, walking and cycling experiences.",
    introduction:
      "Cannes is more than the red carpet. Our local team brings together the old streets of Le Suquet, the colours of Forville Market and the Mediterranean shoreline in private experiences shaped around your day.",
    highlights: [
      "Walk the lanes and viewpoints of Le Suquet with a local guide.",
      "Taste regional specialities and meet the makers behind the market.",
      "Explore the waterfront or set out by bike at your own pace.",
    ],
    imageAlt: "The waterfront and colourful streets of Cannes, France",
    photos: ["photo-slot-1", "photo-slot-2", "photo-slot-3"],
    experiences: [
      "food-tours",
      "hiking-experiences",
      "cycling-experiences",
      "cruise-guests",
    ],
    faqs: [
      {
        question: "What can I do in Cannes beyond the film festival?",
        answer:
          "Explore Le Suquet, visit Forville Market, follow the waterfront or plan a private food, walking or cycling experience with a local guide.",
      },
      {
        question: "Can I arrange a private guide in Cannes?",
        answer:
          "Yes. Rando d’Azur creates private, locally guided experiences in Cannes for individual travellers, families, travel designers and groups.",
      },
    ],
  },
  esterel: {
    title: "The Estérel, in its own time",
    seoTitle: "Estérel Hiking & Mountain Biking | Private Local Guides",
    metaDescription:
      "Walk the red-rock trails or ride the forest tracks of the Estérel with a private French Riviera guide. Discover the massif at your own pace.",
    introduction:
      "The Estérel’s red volcanic rock, pine-scented trails and glimpses of the sea give this corner of the Riviera its unmistakable character. Discover it on foot or by bike with a local guide who knows its changing landscapes.",
    highlights: [
      "Choose a private hike on trails suited to your group and the season.",
      "Ride the Estérel mountain-bike routes with experienced local support.",
      "Make time for viewpoints, quiet woodland and a sunset apéro.",
    ],
    imageAlt: "Red volcanic rocks and Mediterranean trails in the Estérel",
    photos: ["photo-slot-1", "photo-slot-2", "photo-slot-3"],
    experiences: [
      "hiking-experiences",
      "sunset-apero-hikes",
      "cycling-experiences",
      "outdoor-escape-games",
      "family-experiences",
    ],
    faqs: [
      {
        question: "Can I book a private hike in the Estérel?",
        answer:
          "Yes. Private Estérel hikes can be adapted to your group, preferred pace and the conditions on the day.",
      },
      {
        question: "Are there mountain-bike experiences in the Estérel?",
        answer:
          "Rando d’Azur offers a guided Estérel mountain-bike adventure, as well as private cycling itineraries for different groups.",
      },
    ],
  },
  grasse: {
    title: "Grasse, a country of perfume and flowers",
    seoTitle: "Grasse Private Tours | Perfume, Flowers & Local Guides",
    metaDescription:
      "Explore Grasse and its fragrant countryside with a private French Riviera guide. Discover flower-growing heritage, historic lanes and local makers.",
    introduction:
      "Above the coast, Grasse opens onto a world of perfumed gardens, old lanes and flower-growing traditions. A private experience here can connect the historic town with the landscapes and people that shape its identity.",
    highlights: [
      "Wander the old town and discover its layered local history.",
      "Explore the flowers, plants and traditions behind the perfume country.",
      "Meet local producers and connect the landscape with its flavours.",
    ],
    imageAlt: "Flower-filled historic lanes in Grasse, the perfume capital of Provence",
    photos: ["photo-slot-1", "photo-slot-2", "photo-slot-3"],
    experiences: ["food-tours", "hiking-experiences", "wild-provence"],
    faqs: [
      {
        question: "What is Grasse known for?",
        answer:
          "Grasse is known for its perfume heritage, flower-growing traditions and historic hilltop setting above the French Riviera.",
      },
      {
        question: "Can I explore Grasse with a private guide?",
        answer:
          "Rando d’Azur can shape a private experience around the town, its countryside, local producers and seasonal interests.",
      },
    ],
  },
  "pays-de-fayence": {
    title: "Pays de Fayence, the quieter Riviera",
    seoTitle: "Pays de Fayence | Hidden Villages, Rivers & Local Guides",
    metaDescription:
      "Discover Pays de Fayence with a local guide: hilltop villages, Siagne River swimming spots, waterfalls and peaceful trails in the Var.",
    introduction:
      "In the hills northwest of Cannes, Pays de Fayence moves to a gentler rhythm. Follow the Siagne through green valleys, pause beside clear-water swimming spots and discover villages that still feel deeply connected to the land.",
    highlights: [
      "Discover the landscapes, river paths and waterfalls of the Siagne valley.",
      "Visit hilltop villages with a guide rooted in the region.",
      "Explore wild plants, family adventures and quieter walking trails.",
    ],
    imageAlt: "Clear river water and green woodland in Pays de Fayence, Var",
    photos: ["photo-slot-1", "photo-slot-2", "photo-slot-3"],
    experiences: [
      "hiking-experiences",
      "wild-provence",
      "family-experiences",
      "outdoor-escape-games",
    ],
    faqs: [
      {
        question: "Where is Pays de Fayence?",
        answer:
          "Pays de Fayence is a group of villages in the Var hinterland, northwest of Cannes, between the coast and the Provençal hills.",
      },
      {
        question: "What can I experience around the Siagne River?",
        answer:
          "Depending on the season and local conditions, the area offers river scenery, nature walks, waterfalls and places to enjoy the outdoors.",
      },
    ],
  },
  antibes: {
    title: "Antibes, between ramparts and sea",
    seoTitle: "Antibes Private Tours & Local Experiences | French Riviera",
    metaDescription:
      "Explore Antibes with a private local guide. Discover the old town, Provençal market and Port Vauban on a tailored French Riviera experience.",
    introduction:
      "Antibes brings together stone ramparts, market mornings and the bright curve of the coast. Take time to explore the old town, look out across Port Vauban and find a quieter perspective with a local guide.",
    highlights: [
      "Discover the old town’s lanes, ramparts and stories.",
      "Follow the market and its seasonal flavours with a local guide.",
      "Explore the coast by foot or link Antibes into a private bike tour.",
    ],
    imageAlt: "The historic ramparts and Mediterranean shoreline of Antibes",
    photos: ["photo-slot-1", "photo-slot-2", "photo-slot-3"],
    experiences: [
      "food-tours",
      "hiking-experiences",
      "cycling-experiences",
      "family-experiences",
    ],
    faqs: [
      {
        question: "What are the best things to do in Antibes?",
        answer:
          "Walk the old town and ramparts, visit the Provençal market, explore Port Vauban and discover the coastline on a private guided experience.",
      },
      {
        question: "Can Antibes be included in a private French Riviera itinerary?",
        answer:
          "Yes. Antibes can be the focus of a private experience or one stop in a tailor-made Riviera programme.",
      },
    ],
  },
  "iles-de-lerins": {
    title: "The Lérins Islands, a slower kind of escape",
    seoTitle: "Lérins Islands Private Excursions & Nature Walks | Cannes",
    metaDescription:
      "Leave Cannes by boat for the Lérins Islands. Discover clear-water coves, pine paths and island heritage with a locally planned experience.",
    introduction:
      "Just offshore from Cannes, the Lérins Islands offer a rare change of pace: clear-water coves, pine-scented paths and a sense of quiet held apart from the mainland. Let a local guide help you make the most of the crossing and the hours beyond it.",
    highlights: [
      "Plan a boat excursion around your time and the conditions at sea.",
      "Walk woodland paths and discover the islands’ natural character.",
      "Share a sunset apéro hike or an outdoor escape game on the island trails.",
    ],
    imageAlt: "Pine forest and clear Mediterranean coves on the Lérins Islands",
    photos: ["photo-slot-1", "photo-slot-2", "photo-slot-3"],
    experiences: ["hiking-experiences", "sunset-apero-hikes", "outdoor-escape-games"],
    faqs: [
      {
        question: "How do you visit the Lérins Islands from Cannes?",
        answer:
          "The islands are reached by boat from Cannes. Rando d’Azur can help shape an experience around the crossing, available time and your interests.",
      },
      {
        question: "What can I see on the Lérins Islands?",
        answer:
          "Visitors come for the Mediterranean coves, island paths, pine woodland and historic landmarks. Access and conditions can vary by season.",
      },
    ],
  },
};

const french: Record<DestinationSlug, DestinationContent> = {
  cannes: {
    title: "Cannes, au-delà de la Croisette",
    seoTitle: "Guide privé à Cannes | Visites gourmandes et balades",
    metaDescription:
      "Découvrez Cannes avec un guide local privé : ruelles du Suquet, marché Forville et littoral lors d’une expérience à pied, à vélo ou gourmande.",
    introduction:
      "Cannes ne se résume pas au tapis rouge. Notre équipe locale relie les ruelles du Suquet, les couleurs du marché Forville et le littoral méditerranéen au fil d’expériences privées imaginées pour votre journée.",
    highlights: [
      "Parcourez les ruelles et les points de vue du Suquet avec un guide local.",
      "Goûtez aux spécialités régionales et rencontrez les artisans du marché.",
      "Explorez le front de mer ou partez à vélo à votre rythme.",
    ],
    imageAlt: "Le front de mer et les ruelles colorées de Cannes",
    photos: ["photo-slot-1", "photo-slot-2", "photo-slot-3"],
    experiences: ["food-tours", "hiking-experiences", "cycling-experiences", "cruise-guests"],
    faqs: [
      { question: "Que faire à Cannes au-delà du Festival ?", answer: "Explorez le Suquet, visitez le marché Forville, longez le front de mer ou découvrez la ville lors d’une expérience privée à pied, à vélo ou gourmande." },
      { question: "Peut-on organiser une visite privée à Cannes ?", answer: "Oui. Rando d’Azur imagine des expériences privées avec guide local à Cannes, pour les voyageurs, les familles et les groupes." },
    ],
  },
  esterel: {
    title: "L’Estérel, à votre rythme",
    seoTitle: "Randonnée dans l’Estérel | VTT et guides privés",
    metaDescription:
      "Explorez les sentiers rouges et les pistes forestières de l’Estérel avec un guide privé de la Côte d’Azur, à pied ou à vélo.",
    introduction:
      "Les roches rouges, les sentiers sous les pins et les échappées sur la mer donnent à l’Estérel son caractère unique. Découvrez ses paysages à pied ou à vélo avec un guide local.",
    highlights: [
      "Choisissez une randonnée privée adaptée à votre groupe et à la saison.",
      "Parcourez les itinéraires VTT de l’Estérel avec un accompagnement local.",
      "Prenez le temps des belvédères, des forêts et d’un apéritif au coucher du soleil.",
    ],
    imageAlt: "Roches volcaniques rouges et sentiers méditerranéens de l’Estérel",
    photos: ["photo-slot-1", "photo-slot-2", "photo-slot-3"],
    experiences: ["hiking-experiences", "sunset-apero-hikes", "cycling-experiences", "outdoor-escape-games", "family-experiences"],
    faqs: [
      { question: "Peut-on réserver une randonnée privée dans l’Estérel ?", answer: "Oui. Les randonnées privées dans l’Estérel sont adaptées à votre groupe, à votre rythme et aux conditions du jour." },
      { question: "Existe-t-il des expériences de VTT dans l’Estérel ?", answer: "Rando d’Azur propose une aventure VTT guidée dans l’Estérel et des itinéraires privés à vélo." },
    ],
  },
  grasse: {
    title: "Grasse, le pays du parfum et des fleurs",
    seoTitle: "Visites privées à Grasse | Parfums, fleurs et terroir",
    metaDescription:
      "Découvrez Grasse et sa campagne parfumée avec un guide privé : patrimoine des fleurs, ruelles historiques et rencontres locales.",
    introduction:
      "Au-dessus du littoral, Grasse dévoile ses jardins parfumés, ses ruelles anciennes et ses traditions florales. Une expérience privée relie la ville aux paysages et aux personnes qui façonnent son identité.",
    highlights: [
      "Flânez dans la vieille ville et découvrez son histoire locale.",
      "Explorez les fleurs et traditions du pays du parfum.",
      "Rencontrez des producteurs et reliez le paysage à ses saveurs.",
    ],
    imageAlt: "Ruelles fleuries et patrimoine historique de Grasse",
    photos: ["photo-slot-1", "photo-slot-2", "photo-slot-3"],
    experiences: ["food-tours", "hiking-experiences", "wild-provence"],
    faqs: [
      { question: "Pourquoi Grasse est-elle connue ?", answer: "Grasse est connue pour son patrimoine de la parfumerie, ses traditions florales et sa situation perchée au-dessus de la Côte d’Azur." },
      { question: "Peut-on découvrir Grasse avec un guide privé ?", answer: "Rando d’Azur imagine des expériences privées autour de la ville, de sa campagne, de ses producteurs et des saisons." },
    ],
  },
  "pays-de-fayence": {
    title: "Pays de Fayence, la Riviera plus secrète",
    seoTitle: "Pays de Fayence | Villages, Siagne et balades nature",
    metaDescription:
      "Découvrez le Pays de Fayence avec un guide local : villages perchés, rivière Siagne, cascades et sentiers paisibles dans le Var.",
    introduction:
      "Dans les collines au nord-ouest de Cannes, le Pays de Fayence cultive un rythme plus doux. Suivez la Siagne dans ses vallées verdoyantes, découvrez ses eaux limpides et ses villages profondément liés à leur territoire.",
    highlights: [
      "Découvrez les paysages, les chemins de rivière et les cascades de la Siagne.",
      "Visitez des villages perchés avec un guide ancré dans la région.",
      "Explorez les plantes sauvages, la nature et des sentiers en famille.",
    ],
    imageAlt: "Eaux claires et forêt verdoyante du Pays de Fayence dans le Var",
    photos: ["photo-slot-1", "photo-slot-2", "photo-slot-3"],
    experiences: ["hiking-experiences", "wild-provence", "family-experiences", "outdoor-escape-games"],
    faqs: [
      { question: "Où se trouve le Pays de Fayence ?", answer: "Le Pays de Fayence rassemble plusieurs villages du Var, au nord-ouest de Cannes, entre le littoral et les collines provençales." },
      { question: "Que découvrir autour de la Siagne ?", answer: "Selon la saison et les conditions locales, la région offre des paysages de rivière, des balades nature, des cascades et des espaces de plein air." },
    ],
  },
  antibes: {
    title: "Antibes, entre remparts et Méditerranée",
    seoTitle: "Visites privées à Antibes | Vieille ville et littoral",
    metaDescription:
      "Découvrez Antibes avec un guide local privé : vieille ville, marché provençal et port Vauban au fil d’une expérience sur mesure.",
    introduction:
      "Antibes réunit remparts de pierre, matinées au marché et courbe lumineuse du littoral. Prenez le temps d’explorer la vieille ville et le port Vauban avec un guide local.",
    highlights: [
      "Découvrez les ruelles, les remparts et les histoires de la vieille ville.",
      "Suivez le marché et ses saveurs de saison avec un guide local.",
      "Explorez le littoral à pied ou lors d’un itinéraire privé à vélo.",
    ],
    imageAlt: "Remparts historiques et littoral méditerranéen d’Antibes",
    photos: ["photo-slot-1", "photo-slot-2", "photo-slot-3"],
    experiences: ["food-tours", "hiking-experiences", "cycling-experiences", "family-experiences"],
    faqs: [
      { question: "Que faire à Antibes ?", answer: "Parcourez la vieille ville et ses remparts, visitez le marché provençal, découvrez le port Vauban et explorez le littoral avec un guide." },
      { question: "Antibes peut-elle faire partie d’un itinéraire privé sur la Côte d’Azur ?", answer: "Oui. Antibes peut être le point de départ d’une expérience privée ou une étape d’un programme imaginé sur mesure." },
    ],
  },
  "iles-de-lerins": {
    title: "Les îles de Lérins, une parenthèse insulaire",
    seoTitle: "Îles de Lérins | Excursions privées et balades nature",
    metaDescription:
      "Depuis Cannes, rejoignez les îles de Lérins en bateau et découvrez criques limpides, sentiers sous les pins et patrimoine insulaire.",
    introduction:
      "Au large de Cannes, les îles de Lérins offrent une parenthèse rare : criques limpides, sentiers sous les pins et silence insulaire. Un guide local vous aide à profiter pleinement de la traversée et de la journée.",
    highlights: [
      "Imaginez une excursion en bateau selon votre temps et les conditions en mer.",
      "Parcourez les sentiers boisés et découvrez la nature des îles.",
      "Partagez une randonnée apéro au coucher du soleil ou un escape game outdoor sur les sentiers insulaires.",
    ],
    imageAlt: "Forêt de pins et criques méditerranéennes des îles de Lérins",
    photos: ["photo-slot-1", "photo-slot-2", "photo-slot-3"],
    experiences: ["hiking-experiences", "sunset-apero-hikes", "outdoor-escape-games"],
    faqs: [
      { question: "Comment visiter les îles de Lérins depuis Cannes ?", answer: "Les îles sont accessibles en bateau depuis Cannes. Rando d’Azur imagine une expérience adaptée à la traversée, au temps disponible et à vos envies." },
      { question: "Que voir sur les îles de Lérins ?", answer: "Les visiteurs viennent pour les criques méditerranéennes, les chemins insulaires, les pins et le patrimoine historique. L’accès peut varier selon la saison." },
    ],
  },
};

const destinationContent: Record<
  Locale,
  Record<DestinationSlug, DestinationContent>
> = { en: english, fr: french };

export function getDestinationContent(
  locale: Locale,
  slug: DestinationSlug,
): DestinationContent {
  return destinationContent[locale][slug];
}

export function isDestinationSlug(
  value: string,
): value is DestinationSlug {
  return destinationSlugs.includes(value as DestinationSlug);
}
