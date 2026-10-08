import type { Locale } from "../i18n/config";

// Edit here for the next season; this URL remains stable between campaigns.
export const mimosaCampaign = {
  path: "/experiences/route-du-mimosa",
  season: 2027,
  start: "2027-01-15",
  end: "2027-02-28",
  promotionStart: "2026-11-01",
  promotionEnd: "2027-02-28",
  price: 250,
  minParticipants: 2,
  maxParticipants: 12,
  regiondoUrl: null as string | null,
  bookingWeekdays: [1, 2, 4, 5],
  excludedPeriods: [{ start: "2027-02-20", end: "2027-03-07", reason: "Zone B winter school holidays" }],
  calendarSource: "https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000052416074",
};

export function parisDate(date = new Date()) {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Paris", year: "numeric", month: "2-digit", day: "2-digit" }).format(date);
}
export function isMimosaPromotionActive(date: string) {
  return date >= mimosaCampaign.promotionStart && date <= mimosaCampaign.promotionEnd;
}
// These are scheduling rules, never a statement of live product availability.
export function isEligibleMimosaDate(date: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return false;
  const day = new Date(`${date}T12:00:00Z`);
  if (Number.isNaN(day.valueOf()) || day.toISOString().slice(0, 10) !== date) return false;
  return date >= mimosaCampaign.start && date <= mimosaCampaign.end
    && mimosaCampaign.bookingWeekdays.includes(day.getUTCDay())
    && !mimosaCampaign.excludedPeriods.some(period => date >= period.start && date <= period.end);
}
export const mimosaPhotos = [
  { src: "/images/mimosa/mimosa-flowering-trail.webp", width: 960, height: 1280, alt: { fr: "Randonneurs sur un sentier entre des mimosas jaunes en fleurs et un ciel bleu", en: "Walkers on a trail between flowering yellow mimosa trees beneath a blue sky" } },
  { src: "/images/mimosa/mimosa-guided-walk.webp", width: 720, height: 1280, alt: { fr: "Un groupe de randonneurs avance sous de grandes grappes de mimosa en fleurs", en: "A group of walkers beneath large clusters of flowering mimosa" } },
  { src: "/images/mimosa/mimosa-sensory-discovery.webp", width: 960, height: 1280, alt: { fr: "Un enfant découvre le parfum des fleurs de mimosa au bord d’un chemin", en: "A child discovering the scent of mimosa flowers beside a trail" } },
  { src: "/images/mimosa/mimosa-outdoor-break.webp", width: 720, height: 1280, alt: { fr: "Des fleurs de mimosa et une tasse lors d’une pause en extérieur", en: "Mimosa flowers and a cup during an outdoor break" } },
];
export const mimosaArchivePhotos = [
  { src: "/images/press/Articles/IMG_8862.jpeg", width: 640, height: 480, alt: { fr: "Gros plan de petites fleurs jaunes de mimosa et de feuilles vertes", en: "Close-up of small yellow mimosa flowers and green leaves" } },
  { src: "/images/press/TV/IMG_20180803_190652.jpg", width: 4000, height: 2250, alt: { fr: "Un groupe de cinq personnes souriantes devant des reliefs rocheux et la végétation méditerranéenne", en: "Five smiling people with rocky hills and Mediterranean vegetation behind them" } },
];
// Only add confirmed source URLs; categories support TV, written press, radio and historic Route references.
export const mimosaPressReferences: { category: "television" | "press" | "radio" | "route"; title: Record<Locale, string>; url: string; date?: string }[] = [];

export const mimosaCopy: Record<Locale, {
  name: string; title: string; intro: string; seoTitle: string; description: string;
  dates: string; facts: string[]; discover: string; request: string; message: string;
  experiences: string; walk: string; walkText: string; cycle: string; cycleText: string;
  snack: string; snackText: string; destinations: string; places: { title: string; text: string; src: string; href: string }[];
  gallery: string; galleryText: string; bloom: string; booking: string; schedule: string; calendar: string;
  history: string; historyText: string; press: string; trade: string; pressContact: string; professionalText: string;
  closed: string; nextSeason: string; bannerTitle: string; bannerText: string; bannerFacts: string; bannerLink: string; close: string;
}> = {
  fr: {
    name: "La Riviera en jaune — Expérience Mimosa 2027",
    title: "La Riviera en jaune — Une expérience Mimosa inoubliable",
    intro: "Des collines dorées, des parfums enivrants, des éclats de rire et un goûter gourmand. Découvrez le mimosa autrement, à pied ou à vélo, entre Cannes, Mandelieu et Tanneron.",
    seoTitle: "Route du Mimosa 2027 : randonnée & vélo privés | Rando d’Azur",
    description: "Découvrez le mimosa à Cannes, Mandelieu ou Tanneron avec un guide local : randonnée ou vélo, environ 2 h, goûter offert. 250 € pour votre groupe privé de 2 à 12.",
    dates: "15 janvier – 28 février 2027",
    facts: ["2 à 12 participants", "Environ 2 heures", "250 € / groupe privé", "Goûter au mimosa offert", "Vélo : location non comprise"],
    discover: "Découvrir et réserver", request: "Demander une réservation", message: "Bonjour Maddy, je souhaite demander une réservation pour La Riviera en jaune — Expérience Mimosa 2027. Date souhaitée : … Nombre de participants : … À pied ou à vélo : … Secteur préféré : Cannes, Mandelieu ou Tanneron.",
    experiences: "Deux façons de vivre le mimosa", walk: "Randonnée Mimosa", walkText: "Une balade guidée conviviale à travers les paysages fleuris, les senteurs et les panoramas de la Côte d’Azur. Le lieu et l’itinéraire s’adaptent au niveau des participants et aux conditions locales.",
    cycle: "Mimosa à vélo", cycleText: "Une découverte à vélo des paysages de mimosa, sur un itinéraire adapté au niveau du groupe et aux conditions locales. La location de vélo n’est pas comprise ; elle est à prévoir et facturer séparément si nécessaire.",
    snack: "Une petite pause, toute en douceur", snackText: "Un petit goûter au mimosa est offert dans le prix total de 250 €. Une pause conviviale pour prolonger la découverte sensorielle, sans promettre de produits particuliers : sa composition dépend des disponibilités.",
    destinations: "Trois destinations, votre choix", places: [
      { title: "Cannes", text: "Une expérience mimosa depuis Cannes, pour découvrir un autre visage de la Côte d’Azur. Le secteur de la sortie est choisi avec votre guide selon les conditions de floraison et l’itinéraire adapté à votre groupe.", src: "/images/destinations/cannes/la-croisette.jpg", href: "/destinations/cannes" },
      { title: "Mandelieu-la-Napoule", text: "Entre littoral et collines, Mandelieu-la-Napoule est une porte d’entrée vers les paysages du mimosa. Une balade guidée pour prendre le temps d’observer la végétation et les panoramas, selon les conditions du moment.", src: "/images/destinations/esterel/la-napoule-coastal-trail.jpg", href: "/destinations/esterel" },
      { title: "Tanneron", text: "Le village de Tanneron et ses environs invitent à explorer les collines du mimosa. L’itinéraire de votre visite privée est défini selon votre niveau, la météo et la floraison, qui varie d’un secteur à l’autre.", src: mimosaPhotos[0].src, href: "/destinations/pays-de-fayence" },
    ],
    gallery: "Le mimosa, vécu et partagé", galleryText: "Des photographies personnelles de sorties passées : des fleurs, des rencontres et le plaisir d’être dehors. Elles ne garantissent pas la floraison de votre date de visite.",
    bloom: "La floraison dépend des conditions météorologiques et ne peut être garantie. La durée est d’environ 2 heures, adaptable selon le lieu, l’itinéraire et le niveau des participants.",
    booking: "Votre parenthèse privée en jaune", schedule: "L’offre couvre le 15 janvier au 28 février 2027. Pour la future réservation en ligne : après-midi des lundis, mardis, jeudis et vendredis, hors vacances scolaires de zone B. Les vacances d’hiver débutent le 20 février, avec reprise le 8 mars : les dates admissibles dans cette période s’arrêtent donc au 19 février. Aucun créneau n’est garanti ; Maddy confirme votre demande et les modalités.", calendar: "Consulter le calendrier scolaire officiel",
    history: "Le mimosa, une histoire que je partage depuis des années", historyText: "Maddy Polomeni, fondatrice de Rando d’Azur, partage sa connaissance locale et ses 20 ans d’expérience professionnelle. Ses sorties et interventions autour des paysages du mimosa font partie d’une histoire que vous pouvez retrouver dans nos archives presse : télévision, articles et interviews radio.",
    press: "Découvrir les archives presse", trade: "Agences & professionnels du tourisme", pressContact: "Contact presse et partenariats", professionalText: "Pour les journalistes, offices de tourisme, agences et organisateurs de la Route du Mimosa : une expérience privée associant découverte sensorielle, activité de plein air et goûter au mimosa, entre Cannes, Mandelieu et Tanneron. Contactez Maddy pour discuter d’un reportage ou d’un projet professionnel.",
    closed: "La saison 2027 est terminée", nextSeason: "Cette page reste votre point de départ pour découvrir nos expériences mimosa. Contactez Maddy pour connaître la prochaine saison ; les dates et tarifs futurs restent à confirmer.",
    bannerTitle: "🌼 La saison du mimosa arrive !", bannerText: "Randonnée ou vélo au cœur des collines dorées. Du 15 janvier au 28 février 2027.", bannerFacts: "250 € / groupe privé · 2 à 12 personnes · Goûter offert.", bannerLink: "Découvrir l’expérience", close: "Fermer le bandeau Mimosa",
  },
  en: {
    name: "The Golden Riviera — Private Mimosa Experience 2027", title: "The Golden Riviera — An unforgettable mimosa experience",
    intro: "Golden hills, fragrant flowers, shared laughter and a little mimosa treat. Explore a different side of the French Riviera on foot or by bike, around Cannes, Mandelieu and Tanneron.",
    seoTitle: "Private Mimosa Route Walks & Cycling 2027 | Rando d’Azur", description: "Explore the Mimosa Route around Cannes, Mandelieu or Tanneron with a local guide. Around 2 hours, a mimosa treat included: €250 for your private group of 2–12.",
    dates: "15 January – 28 February 2027", facts: ["2–12 participants", "Around 2 hours", "€250 / private group", "A little mimosa treat included", "Cycling: bicycle rental excluded"],
    discover: "Explore and enquire", request: "Request a booking", message: "Hello Maddy, I would like to request The Golden Riviera — Private Mimosa Experience 2027. Preferred date: … Participants: … Walking or cycling: … Preferred area: Cannes, Mandelieu or Tanneron.",
    experiences: "Two ways to discover the golden hills", walk: "Mimosa Guided Walk", walkText: "A friendly guided walk through flowering landscapes, fragrant air and French Riviera views. Your guide adapts the location and route to your group’s level and local conditions.", cycle: "Mimosa by Bike", cycleText: "Explore mimosa landscapes by bike on a route adapted to your group’s level and local conditions. Bicycle rental is not included and must be arranged and charged separately if needed.",
    snack: "A little pause to savour", snackText: "A small mimosa-themed treat is included in the total price of €250. A warm, shared moment to continue the sensory discovery. The selection depends on availability; no particular products are guaranteed.",
    destinations: "Three places, your choice", places: [
      { title: "Cannes", text: "Discover a different side of the French Riviera with a mimosa experience from Cannes. Your guide selects the outing area according to flowering conditions and a route suited to your group.", src: "/images/destinations/cannes/la-croisette.jpg", href: "/destinations/cannes" },
      { title: "Mandelieu-la-Napoule", text: "Between the coast and the hills, Mandelieu-la-Napoule is a gateway to mimosa landscapes. Slow down on a guided walk to observe the vegetation and views, shaped by the season’s conditions.", src: "/images/destinations/esterel/la-napoule-coastal-trail.jpg", href: "/destinations/esterel" },
      { title: "Tanneron", text: "Tanneron village and its surroundings invite you into the mimosa hills. Your private tour’s route depends on your level, the weather and flowering conditions, which vary between areas.", src: mimosaPhotos[0].src, href: "/destinations/pays-de-fayence" },
    ],
    gallery: "Mimosa moments, shared", galleryText: "Personal photographs from past outings: flowers, encounters and the joy of being outdoors. They do not guarantee flowering on your chosen date.", bloom: "Flowering depends on weather conditions and cannot be guaranteed. The experience lasts around 2 hours, adapted to the location, route and participants’ level.",
    booking: "Your private golden escape", schedule: "The offer runs from 15 January to 28 February 2027. Future online booking rules: afternoons on Mondays, Tuesdays, Thursdays and Fridays, outside French Zone B school holidays. Winter holidays begin on 20 February, with classes resuming on 8 March, so eligible dates in this period end on 19 February. No slot is guaranteed; Maddy confirms your request and arrangements.", calendar: "View the official school calendar",
    history: "Mimosa stories, shared over the years", historyText: "Maddy Polomeni, founder of Rando d’Azur, brings local knowledge and 20 years of professional experience. Her outings and media contributions around mimosa landscapes are part of a story you can explore in our press archive: television, written features and radio interviews.", press: "Explore the press archive", trade: "Travel agencies & tourism professionals", pressContact: "Press & partnership enquiries", professionalText: "For journalists, tourism offices, travel agencies and Mimosa Route organisers: a private experience combining sensory discovery, outdoor activity and a little mimosa treat around Cannes, Mandelieu and Tanneron. Contact Maddy to discuss a feature or a professional project.",
    closed: "The 2027 season has ended", nextSeason: "This page remains your starting point for our mimosa experiences. Contact Maddy about the next season; future dates and prices are still to be confirmed.", bannerTitle: "🌼 Mimosa season is on its way!", bannerText: "Walk or cycle through the golden hills. 15 January–28 February 2027.", bannerFacts: "€250 / private group · 2–12 people · Treat included.", bannerLink: "Discover the experience", close: "Close the Mimosa banner",
  },
};

// Editorial presentation only: the offer, scheduling and SEO values above remain unchanged.
export const mimosaVisualCopy = {
  fr: {
    total: "Pour tout votre groupe privé — pas par personne",
    included: "Petit goûter au mimosa offert",
    offerTitle: "Tout un moment à partager",
    offerIntro: "Une randonnée à pied ou une découverte à vélo, entre Cannes, Mandelieu-la-Napoule et Tanneron.",
    offerGuide: "Environ 2 heures avec un guide professionnel",
    offerRental: "Location des vélos non comprise",
    snackEyebrow: "Une pause au milieu des fleurs",
    snackCaption: "L’ambiance de nos sorties mimosa — la composition du goûter dépend des disponibilités.",
    expertise: "20 ans d’expérience professionnelle",
    route: "Référencée sur la Route du Mimosa",
    archiveTitle: "Des histoires et des rencontres dans les médias",
    archiveNote: "Reportages et interviews d’archives, sans implication de partenariat actuel.",
    reproduction: "Reproduction attribuée à BBC Travel",
    interview: "Interview radio sur la marche",
    feature: "Reportage mimosa",
    mention: "Mention dans un article de voyage",
    galleryCaptions: ["Les pompons jaunes, de près", "Le plaisir de marcher ensemble", "Découvrir le mimosa avec tous ses sens", "Un chemin dans les collines fleuries", "Des rencontres au grand air", "Une pause au fil de la balade"],
  },
  en: {
    total: "For your whole private group — not per person",
    included: "A little mimosa treat included",
    offerTitle: "A moment made for sharing",
    offerIntro: "A guided walk or a cycling discovery around Cannes, Mandelieu-la-Napoule or Tanneron.",
    offerGuide: "Around 2 hours with a professional guide",
    offerRental: "Bicycle rental not included",
    snackEyebrow: "A pause among the flowers",
    snackCaption: "The atmosphere of our mimosa outings — the treat selection depends on availability.",
    expertise: "20 years of professional experience",
    route: "Featured on the Mimosa Route",
    archiveTitle: "Stories and encounters in the media",
    archiveNote: "Archived reports and interviews, with no claim of a current partnership.",
    reproduction: "Reproduction attributed to BBC Travel",
    interview: "Radio interview about walking",
    feature: "Mimosa report",
    mention: "Mention in a travel feature",
    galleryCaptions: ["Golden blossoms, up close", "The joy of walking together", "Discovering mimosa with every sense", "A path through the flowering hills", "Encounters in the great outdoors", "A little pause along the way"],
  },
};
