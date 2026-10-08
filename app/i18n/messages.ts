import type { ExperienceSlug, Locale } from "./config";

const english = {
  seo: {
    areaName: "French Riviera, France",
  },
  contact: {
    maddyButton: "Contact Maddy",
    whatsappMessage:
      "Hello Maddy, I would like to learn more about your experiences.",
  },
  navigation: {
    brandLine: "THE FRENCH RIVIERA, REVEALED",
    mainLabel: "Main navigation",
    mobileLabel: "Mobile navigation",
    socialNavigationLabel: "Rando d’Azur social media",
    openMenu: "Open navigation menu",
    experiencesLabel: "Experiences",
    chooseLanguage: "Choose language",
    home: "Home",
    experiences: "Experiences",
    destinations: "Destinations",
    about: "About",
    press: "Press",
    reviews: "Reviews",
    contact: "Contact",
    book: "Book an experience",
    language: "Language",
    current: "Current",
    languageComingSoon: "Coming soon",
    languages: [
      ["en", "English"],
      ["fr", "Français"],
    ],
    experienceLinks: [
      ["food-tours", "Food Tours"],
      ["hiking-experiences", "Hiking Experiences"],
      ["sunset-apero-hikes", "Sunset Apéro Hikes"],
      ["cycling-experiences", "Cycling Experiences"],
      ["wild-provence", "Wild Provence"],
      ["edible-plants", "Edible Plants of Provence"],
      ["outdoor-escape-games", "Outdoor Escape Games"],
      ["family-experiences", "Family Experiences"],
      ["evjf-experiences", "EVJF & EVG · Bachelorette & Bachelor Groups"],
      ["corporate-incentive-travel", "Corporate & Incentive Travel"],
      ["cruise-guests", "Cruise Guests"],
    ],
  },
  hero: {
    eyebrow: "PRIVATE JOURNEYS · CÔTE D’AZUR",
    titleFirst: "Taste the",
    titleSecond: "French Riviera",
    description:
      "Private hiking, food and cycling experiences shaped by local French Riviera guides.",
    discover: "Discover our experiences",
    create: "Create a private journey",
    scroll: "Scroll to discover",
    imageAlt: "A private outdoor experience across the French Riviera",
  },
  manifesto: {
    eyebrow: "MORE THAN A DESTINATION",
    titleFirst: "Taste the",
    titleSecond: "French Riviera",
    words: ["Eat it.", "Walk it.", "Cycle it.", "Meet it.", "Live it."],
    introduction:
      "Not simply somewhere to see. A place to savour, explore and feel, in every way that matters.",
    stories: [
      "At a market before the morning is gone.",
      "Where the coast gives way to the wild.",
      "Along the roads that make you stay.",
      "In the villages, with the people who live them.",
      "A Riviera that feels entirely your own.",
    ],
  },
  experiences: {
    eyebrow: "THE RIVIERA IS THE EXPERIENCE",
    headingFirst: "Eat it. Walk it.",
    headingSecond: "Live it.",
    introduction:
      "Rando d’Azur is a destination management company creating private, tailor-made experiences across the French Riviera. Find your own way into the place.",
    items: [
      {
        id: "food-tours",
        slug: "food-tours",
        title: "Food Tours",
        detail: "Eat it",
        description:
          "Market mornings, makers and long lunches that taste unmistakably of the South.",
        image: "experience-food",
        alt: "A taste of the Riviera",
      },
      {
        id: "hiking",
        slug: "hiking-experiences",
        title: "Hiking Experiences",
        detail: "Walk it",
        description:
          "Coastal paths and wild trails, revealed by the people who know them by heart.",
        image: "experience-hiking",
        alt: "Walking trails of the French Riviera",
      },
      {
        id: "sunset-apero-hikes",
        slug: "sunset-apero-hikes",
        title: "Sunset Apéro Hikes",
        detail: "A golden-hour ritual",
        description:
          "An easy-paced walk, a beautiful viewpoint and a Riviera apéro as the light turns gold.",
        image: "experience-sunset",
        alt: "A Riviera sunset",
      },
      {
        id: "velo",
        slug: "cycling-experiences",
        title: "Cycling Experiences",
        detail: "Cycle it",
        description:
          "Effortless rides from sea-view roads to the beautiful villages above the coast.",
        image: "experience-cycling",
        alt: "Cycling above the Mediterranean",
      },
      {
        id: "corporate-experiences",
        slug: "corporate-incentive-travel",
        title: "Corporate & Incentive Travel",
        detail: "Meet it",
        description:
          "Locally rooted programmes, considered logistics and thoughtful experiences for your guests.",
        image: "experience-corporate",
        alt: "A corporate experience on the French Riviera",
      },
      {
        id: "familles",
        slug: "family-experiences",
        title: "Family Experiences",
        detail: "Live it together",
        description:
          "Gentle adventures, curious discoveries and a Riviera everyone can enjoy.",
        image: "experience-family",
        alt: "Family adventures on the Riviera",
      },
      {
        id: "wild-provence",
        slug: "wild-provence",
        title: "Wild Provence",
        detail: "Gathered with care",
        description:
          "Meet edible and wild plants through a guided, respectful immersion in the local landscape.",
        image: "experience-wild-provence",
        alt: "Wild edible plants of Provence",
      },
      {
        id: "outdoor-escape-games",
        slug: "outdoor-escape-games",
        title: "Escape Games Outdoor",
        detail: "Solve it together",
        description:
          "A playful outdoor challenge that brings groups together through clues, discovery and teamwork.",
        image: "experience-escape-game",
        alt: "A team taking part in an outdoor escape game",
      },
      {
        id: "evjf-experiences",
        slug: "evjf-experiences",
        title: "EVJF & EVG · Bachelorette & Bachelor Groups",
        detail: "Celebrate together",
        description:
          "Bring your group together for a private Riviera celebration, locally guided and shaped around the people at the heart of the occasion.",
        image: "experience-evjf",
        alt: "Friends celebrating an EVJF or EVG on the French Riviera",
      },
      {
        id: "cruise-guests",
        slug: "cruise-guests",
        title: "Cruise Guests",
        detail: "Beyond the port",
        description:
          "Make the most of a Riviera call with a private shore experience, carefully planned around your time ashore.",
        image: "experience-cruise",
        alt: "A private shore experience on the French Riviera",
      },
    ],
    explore: "Explore",
  },
  about: {
    eyebrow: "A DIFFERENT WAY TO KNOW A PLACE",
    title: "Why Rando d’Azur?",
    introduction:
      "We are Riviera locals and destination specialists. We create authentic, private experiences with the care, connections and insight that only come from knowing a place deeply.",
    reasons: [
      {
        title: "A truly local point of view",
        description:
          "We live here. Our local knowledge opens doors to the places and people that make the Riviera real.",
      },
      {
        title: "Experiences with meaning",
        description:
          "Every encounter is chosen for its sense of place, with genuine stories at its heart.",
      },
      {
        title: "Made around you",
        description:
          "Private journeys shaped around your interests, your pace and the people beside you.",
      },
      {
        title: "Seamlessly considered",
        description:
          "Thoughtful planning and attentive service leave you free to be completely here.",
      },
    ],
    founderEyebrow: "THE PERSON BEHIND THE JOURNEY",
    founderTitle: "Meet Maddy Polomeni",
    founderRole: "Founder & Experience Manager",
    founderParagraphs: [
      "Rando d’Azur was created by Maddy Polomeni, a local French Riviera expert sharing hiking, outdoor adventures and encounters with local people. It began with a simple belief: the most memorable way to discover the Riviera is through the people, places and everyday moments that make it unique.",
      "Today, the company has grown into a trusted local team sharing the same values. Together, we can welcome more guests while preserving the authenticity, flexibility and quality that have always mattered.",
    ],
    portraitAlt: "Maddy Polomeni, Founder & Experience Manager",
    teamAlt: "The Rando d’Azur local team",
  },
  trusted: {
    eyebrow: "TRUSTED BY TRAVEL PROFESSIONALS",
    titleFirst: "Travel,",
    titleSecond: "well connected.",
    introduction:
      "A trusted local partner for the people shaping exceptional journeys across the French Riviera.",
    introShort: "A trusted local partner for",
    categories: [
      "Luxury Hotels",
      "Travel Designers",
      "DMCs",
      "Cruise Lines",
      "Corporate Events",
    ],
    link: "Work with our local team",
  },
  press: {
    eyebrow: "PRESS & MEDIA",
    titleFirst: "Stories of the",
    titleSecond: "Riviera, told locally.",
    introduction:
      "Selected magazine and newspaper features celebrating the landscapes and experiences of the French Riviera.",
    contact: "Contact our team",
    categories: [
      "Magazine logos",
      "Newspaper articles",
      "Television appearances",
      "Awards & distinctions",
    ],
    futureContent: "Reserved for future press content",
    featuredEyebrow: "IN THE PRESS",
    featuredTitle: "Featured in",
    openCoverage: "Read our feature in",
    pageIntroduction:
      "Original reporting and interviews featuring Maddy Polomeni and Rando d’Azur. Read each story on its publisher’s website.",
    viewAll: "Explore the press archive",
    readArticle: "Read the article",
    archiveEyebrow: "FROM THE PRESS ARCHIVE",
    archiveIntroduction:
      "Print clippings are held in the company archive. Their original headlines and publisher links are being confirmed before publication.",
    archivePlaceholder: "Archive clipping · original article reference to confirm",
    televisionAppearance: "Television appearance",
    televisionArchive: "Explore the television archive",
    televisionPhotoAlt: "A moment from Rando d’Azur’s television coverage",
  },
  reviews: {
    eyebrow: "GOOGLE REVIEWS",
    titleFirst: "A note from",
    titleSecond: "our guests.",
    introduction:
      "Thoughtful moments, told in our guests’ own words.",
    trustStatement:
      "Every experience is designed around authentic encounters, local knowledge and unforgettable memories.",
    ratingLabel: "Google rating",
    publicReviews: "public Google reviews",
    statisticsLabel: "Google review statistics",
    averageRating: "Average rating",
    reviewCountLabel: "Google reviews",
    fiveStarCountLabel: "5-star reviews",
    snapshotNote: "Google profile snapshot · checked",
    fiveStars: "5 out of 5 stars",
    googleTranslationNote:
      "Short excerpts shown in Google’s English translation. Reviewer countries were not visible in the public excerpts.",
    previousReviews: "Previous reviews",
    nextReviews: "Next reviews",
    carouselLabel: "Guest review carousel",
    experiences: {
      hiking: "Hiking experience",
      mimosa: "Mimosa hike",
      "wild-plants": "Wild plants walk",
      "hiking-yoga": "Hiking & yoga weekend",
    },
    worldEyebrow: "A LOCAL WELCOME",
    worldTitle: "Trusted by travellers from around the world.",
    worldIntroduction:
      "Rooted on the French Riviera, every experience begins with local knowledge and a warm welcome.",
    countryAvailability:
      "Google did not show reviewer locations in the public excerpts.",
    ctaEyebrow: "YOUR RIVIERA STORY",
    ctaTitle: "Ready to create your own Riviera story?",
    bookExperience: "Book an Experience",
    contactMaddy: "Contact Maddy",
  },
  partners: {
    supportedEyebrow: "IN GOOD COMPANY",
    supportedTitle: "Supported by",
    supportedSubtitle:
      "Proud to collaborate with trusted outdoor brands and tourism institutions.",
    trustedEyebrow: "OUR RIVIERA NETWORK",
    trustedTitle: "They trust us",
    trustedSubtitle:
      "Travel agencies, DMCs and partners who trust Rando d’Azur to create authentic experiences on the French Riviera.",
    visitWebsite: "Visit the official website",
    logoPlaceholder: "Official logo to come",
    technicalPartnerLabel: "Official Technical Partner",
    equipmentPartnerLabel: "Official Equipment Partner",
    supportedByLabel: "Supported by",
  },
  mice: {
    eyebrow: "AGENCIES & MICE · CORPORATE & INCENTIVE TRAVEL",
    titleFirst: "Local insight.",
    titleSecond: "Exceptional delivery.",
    introduction:
      "Your on-the-ground DMC partner for private experiences and thoughtfully produced programmes across the French Riviera.",
    points: [
      "Tailor-made experiences, thoughtfully produced",
      "Luxury travel agency partnerships",
      "DMC partnerships and local coordination",
      "Corporate events and incentive travel",
      "Cruise excursions, designed around the call",
      "Multilingual guides and discreet VIP services",
    ],
    cta: "Plan a programme together",
    imageAlt: "The Mediterranean coast on the French Riviera",
  },
  map: {
    eyebrow: "ONE COAST, MANY WORLDS",
    titleFirst: "Find your",
    titleSecond: "Riviera.",
    introduction:
      "From the red rocks of Estérel to the villages above the sea, every corner has its own character. Choose a place to begin.",
    ariaLabel: "Interactive map of the French Riviera",
    drawingAlt: "Illustrated coastline of the French Riviera",
    destinationsLabel: "French Riviera destinations",
    north: "North",
    seaLabel: "M E D I T E R R A N E A N  S E A",
    franceLabel: "France",
    rivieraLabel: "French Riviera (Côte d’Azur)",
    regionalMapLabel: "Explore the French Riviera",
    fromAirportLabel: "From Nice Airport",
    exploreDestination: "Explore this destination",
    contactDestination: "Contact Maddy",
    placeEyebrow: "A PLACE TO BEGIN",
    fayenceEyebrow: "A HIDDEN CORNER OF THE VAR",
    fayenceSubtitle: "Hidden rivers, authentic villages & wild nature.",
    fayenceDetail:
      "Discover crystal-clear swimming spots along the Siagne River, waterfalls, forests and authentic villages.",
    fayenceRegion: "French Riviera • Var",
    fayenceCta: "Discover Pays de Fayence",
    discover: "Discover",
    availableExperiences: "Experiences here",
    photoAlt: "A genuine Rando d’Azur experience in this part of the Riviera",
    destinations: [
      {
        id: "cannes",
        name: "Cannes",
        x: 22,
        y: 39,
        detail:
          "Cannes is far more than the red carpet. Wander through the old streets of Le Suquet, taste local specialties at Forville Market and end the day watching the sunset over the Lérins Islands.",
        region: "French Riviera • Alpes-Maritimes",
        driveTime: "Approx. 30 min by car",
        photos: ["photo-slot-1", "photo-slot-2", "photo-slot-3"],
        experiences: ["food-tours", "cycling-experiences", "cruise-guests"],
        photosFrom: ["food-tours", "cycling-experiences"],
      },
      {
        id: "antibes",
        name: "Antibes",
        x: 37,
        y: 30,
        detail:
          "Trace the old ramparts from the market square to the port, where turquoise water and the easy rhythm of the old town meet.",
        region: "French Riviera • Alpes-Maritimes",
        driveTime: "Approx. 25 min by car",
        photos: ["photo-slot-1", "photo-slot-2", "photo-slot-3"],
        experiences: ["food-tours", "hiking-experiences", "cycling-experiences", "family-experiences"],
        photosFrom: ["food-tours", "hiking-experiences", "cycling-experiences"],
      },
      {
        id: "grasse",
        name: "Grasse",
        x: 39,
        y: 17,
        detail:
          "Follow the scent of roses through Grasse’s historic lanes, flower-filled gardens and the perfume country stretching into the hills.",
        region: "French Riviera • Alpes-Maritimes",
        driveTime: "Approx. 35 min by car",
        photos: ["photo-slot-1", "photo-slot-2", "photo-slot-3"],
        experiences: ["food-tours", "hiking-experiences", "wild-provence"],
        photosFrom: ["food-tours", "wild-provence"],
      },
      {
        id: "esterel",
        name: "Estérel",
        x: 12,
        y: 34,
        detail:
          "Walk or ride through the Estérel’s russet-red peaks, pine-scented trails and quiet coves, with the Mediterranean opening below.",
        region: "French Riviera • Var",
        driveTime: "Approx. 45 min by car",
        photos: ["photo-slot-1", "photo-slot-2", "photo-slot-3"],
        experiences: ["hiking-experiences", "sunset-apero-hikes", "cycling-experiences", "outdoor-escape-games"],
        photosFrom: ["cycling-experiences", "sunset-apero-hikes"],
      },
      {
        id: "iles-de-lerins",
        name: "Îles de Lérins",
        x: 17,
        y: 62,
        detail:
          "Leave the shoreline behind for a short boat crossing to clear-water coves, quiet woodland paths and the stillness of the islands.",
        region: "French Riviera • Alpes-Maritimes",
        driveTime: "15 min by boat from Cannes",
        photos: ["photo-slot-1", "photo-slot-2", "photo-slot-3"],
        experiences: ["hiking-experiences", "sunset-apero-hikes", "outdoor-escape-games"],
        photosFrom: ["hiking-experiences", "sunset-apero-hikes", "outdoor-escape-games"],
      },
      {
        id: "pays-de-fayence",
        name: "Pays de Fayence",
        x: 18,
        y: 16,
        detail:
          "Follow the Siagne to crystal-clear swimming spots and waterfalls, then wander through hilltop villages and peaceful forest trails.",
        region: "French Riviera • Var",
        driveTime: "Approx. 50 min by car",
        photos: ["photo-slot-1", "photo-slot-2", "photo-slot-3"],
        subtitle: "Hidden rivers, authentic villages & wild nature.",
        cta: "Discover Pays de Fayence",
        experiences: ["hiking-experiences", "wild-provence", "family-experiences", "outdoor-escape-games"],
        photosFrom: ["wild-provence", "hiking-experiences", "family-experiences"],
      },
    ],
  },
  newsletter: {
    eyebrow: "A NOTE FROM THE SOUTH",
    title: "Stay connected to the Riviera",
    description:
      "Receive seasonal experiences, hidden places, local stories and exclusive tours before everyone else.",
    privacy: "No spam. Only authentic Riviera inspiration.",
    emailLabel: "Email address",
    emailPlaceholder: "Your email address",
    submit: "Join the Newsletter",
    pending:
      "Opening the secure Brevo form. Once Brevo confirms your request, check your inbox and spam folder and confirm within 7 days. Your subscription starts only after confirmation.",
    invalidEmail: "Please enter a valid email address.",
    consentRequired: "Please agree to receive the newsletter before continuing.",
    sendError: "We could not send your request. Please try again or contact Maddy.",
    consent: "I agree to receive the Rando d’Azur newsletter and have read the",
    privacyLink: "Privacy Policy",
    withdraw: "You can unsubscribe at any time using the link in our emails.",
    providerNote: "Your email and consent are sent securely to Brevo for Rando d’Azur. You will be taken to Brevo’s confirmation page (currently in French). Please confirm your email within 7 days to complete sign-up.",
  },
  booking: {
    eyebrow: "YOUR RIVIERA STORY BEGINS HERE",
    title: "Book an Experience",
    introduction:
      "Book online, or contact Maddy to create a private Riviera journey.",
    onlineTitle: "Book online with Regiondo",
    onlineLabel: "Online booking with Regiondo",
    onlineNote:
      "Explore available experiences in our booking shop. For a tailor-made experience, contact Maddy.",
  },
  photoGallery: {
    eyebrow: "A CLOSER LOOK",
    title: "The experience, in moments.",
    description:
      "Explore the places, people and details captured across this experience.",
    photoAlt: "A moment from this Rando d’Azur experience",
  },
  footer: {
    brandLine: "DESTINATION MANAGEMENT · FRENCH RIVIERA",
    navigationLabel: "Footer navigation",
    descriptor:
      "Private experiences, shaped by local knowledge and a deep love of place.",
    eyebrow: "YOUR STORY, STARTS HERE",
    brandFirst: "Taste the",
    brandSecond: "French Riviera",
    manifesto: ["Eat it.", "Walk it.", "Cycle it.", "Meet it.", "Live it."],
    cta: "Start your Riviera Story",
    experiences: "Experiences",
    mice: "Agencies & MICE",
    about: "About Rando d’Azur",
    destinations: "Explore the Riviera",
    legalNotice: "Legal notice",
    terms: "Terms & conditions of sale",
    privacy: "Privacy policy",
    cookies: "Cookie policy",
    copyright: "All rights reserved.",
    backToTop: "Back to top",
    followEyebrow: "A LIFE WELL LIVED, SHARED",
    followTitle: "Follow our adventures",
    followDescription:
      "A little more of the Riviera, wherever you are.",
    contactDetailsTitle: "Stay in touch",
    contactLinksLabel: "Rando d’Azur contact and social links",
    facebookLabel: "Facebook",
    instagramLabel: "Instagram",
    whatsappLabel: "WhatsApp",
    phoneLabel: "Phone",
    emailLabel: "Email",
    partnershipsEmailLabel: "Partnerships",
  },
  experiencePage: {
    eyebrow: "PRIVATE EXPERIENCES · FRENCH RIVIERA",
    back: "Discover all experiences",
    enquire: "Enquire about this experience",
    chaptersEyebrow: "A JOURNEY, SHAPED AROUND YOU",
    chaptersTitleFirst: "The Riviera,",
    chaptersTitleSecond: "felt differently.",
    toursTitleFirst: "Find your",
    toursTitleSecond: "ride.",
    note:
      "Each experience is shaped with local care and adapted to the people sharing it. Details are confirmed with you before your journey.",
    booking: "Make it yours",
    pages: {
      "food-tours": {
        title: "Food Tours",
        subtitle: "Eat it.",
        description:
          "Discover the Riviera through its markets, regional flavours and the people who bring them to the table.",
        imageAlt: "Food and local flavours of the French Riviera",
        points: [
          "Market visits shaped around the season",
          "Meet local food artisans and producers",
          "A private itinerary, adapted to your tastes",
        ],
      },
      "hiking-experiences": {
        title: "Hiking Experiences",
        subtitle: "Walk it.",
        description:
          "Follow coastal paths and quieter trails through the landscapes that give the Riviera its many moods.",
        imageAlt: "Walking paths and landscapes of the French Riviera",
        points: [
          "Private walks matched to your pace",
          "Coastal, countryside and hilltop routes",
          "Local insight along the way",
        ],
      },
      "sunset-apero-hikes": {
        title: "Rando Apéro Hike",
        subtitle: "A golden-hour ritual.",
        description:
          "Set out on a guided evening walk, then pause for a generous apéro picnic as the sun settles over the Riviera.",
        imageAlt: "Guests taking a nature break on the French Riviera",
        points: [
          "A relaxed guided walk through the local landscape",
          "A picnic apéro with regional flavours",
          "A private experience timed around the evening light",
        ],
      },
      "cycling-experiences": {
        title: "Cycling Experiences",
        subtitle: "Cycle it.",
        description:
          "Take in the coast and its hinterland at your own rhythm, with a cycling experience shaped around your day.",
        imageAlt: "Cycling routes along the French Riviera",
        points: [
          "Private rides adapted to your group",
          "Coast and countryside itineraries",
          "Time to pause, explore and take it in",
        ],
        tours: [
          {
            title: "Cannes City Discovery",
            description:
              "Discover the city’s waterfront, neighbourhoods and local stories by bike.",
          },
          {
            title: "Estérel Mountain Bike Adventure",
            description:
              "Ride the red-rock landscapes and forest trails of the Estérel with a local guide.",
          },
          {
            title: "Mimosa Season Cycling Tour",
            description:
              "Cycle through golden mimosa forests and peaceful trails of the French Riviera. A seasonal guided cycling experience surrounded by nature, colour and the scents of winter.",
            seasonality: "Winter flowering season; subject to natural conditions.",
          },
        ],
      },
      "family-experiences": {
        title: "Family Experiences",
        subtitle: "Live it together.",
        description:
          "Share a more personal side of the Riviera through thoughtful adventures for different ages and interests.",
        imageAlt: "A shared family experience on the French Riviera",
        points: [
          "A pace that works for your family",
          "Outdoor discovery and local encounters",
          "A private plan shaped around your day",
        ],
      },
      "corporate-incentive-travel": {
        title: "Corporate & Incentive Travel",
        subtitle: "Meet it. Live it.",
        description:
          "Bring people together with locally rooted experiences and considered support for your Riviera programme.",
        imageAlt: "A private corporate gathering on the French Riviera",
        points: [
          "Tailor-made programmes for your objectives",
          "Local coordination and multilingual guides",
          "Experiences for corporate and incentive groups",
        ],
      },
      "wild-provence": {
        title: "Wild Provence",
        subtitle: "A closer relationship with the land.",
        description:
          "Discover edible and wild plants through a guided exploration of Provence’s generous landscapes and seasonal flavours.",
        imageAlt: "Edible and wild plants gathered in Provence",
        points: [
          "A guided introduction to local wild plants",
          "Seasonal knowledge rooted in the landscape",
          "A respectful approach to nature and gathering",
        ],
      },
      "edible-plants": {
        title: "Edible Plants of Provence",
        subtitle: "A taste of the wild.",
        description:
          "Learn about Provence’s seasonal edible plants on a locally guided walk rooted in careful observation and respect for nature.",
        imageAlt: "Seasonal edible plants growing in the Provençal landscape",
        points: [
          "Recognise selected local plants with an experienced guide",
          "Explore seasonal knowledge shaped by the landscape",
          "Discover responsible, sustainable foraging practices",
        ],
      },
      "outdoor-escape-games": {
        title: "Escape Games Outdoor",
        subtitle: "The landscape is your gameboard.",
        description:
          "Bring your group together for a playful outdoor challenge shaped by clues, local surroundings and shared discovery.",
        imageAlt: "A team collaborating during an outdoor escape game",
        points: [
          "Outdoor team challenges for private groups",
          "Shared clues, discovery and problem-solving",
          "A lively format for celebrations and events",
        ],
      },
      "evjf-experiences": {
        title: "EVJF & EVG · Bachelorette & Bachelor Groups",
        subtitle: "A celebration, made personal.",
        description:
          "Celebrate the bride- or groom-to-be with a private Riviera experience, from outdoor adventures to local discoveries, thoughtfully tailored to your group.",
        imageAlt: "Friends celebrating together on the French Riviera",
        points: [
          "A private experience tailored to your group",
          "Outdoor discovery and local touches",
          "Flexible planning around your celebration",
        ],
      },
      "evg-experiences": {
        title: "EVG · Bachelor Groups",
        subtitle: "A day worth remembering.",
        description:
          "Gather your friends for an active, locally guided experience that makes the most of your time on the Riviera.",
        imageAlt: "Friends sharing an outdoor adventure on the French Riviera",
        points: [
          "A private outing for your group",
          "Active experiences shaped around your plans",
          "Local coordination from start to finish",
        ],
      },
      "cruise-guests": {
        title: "Cruise Guests",
        subtitle: "Beyond the port.",
        description:
          "Make the most of a Riviera port call with a private shore experience carefully planned around your time ashore.",
        imageAlt: "A privately guided French Riviera shore excursion",
        points: [
          "Private shore experiences for your port call",
          "Thoughtful timing and local coordination",
          "A personal introduction to the Riviera",
        ],
      },
    },
  },
} as const;

type Widen<T> = T extends string
  ? string
  : T extends number
    ? number
    : T extends boolean
      ? boolean
      : T extends readonly unknown[]
        ? { readonly [Index in keyof T]: Widen<T[Index]> }
        : T extends object
          ? { [Key in keyof T]: Widen<T[Key]> }
          : T;

type Destination = {
  id: string;
  name: string;
  x: number;
  y: number;
  detail: string;
  region: string;
  driveTime: string;
  photos: readonly string[];
  experiences: readonly ExperienceSlug[];
  photosFrom: readonly ExperienceSlug[];
  subtitle?: string;
  cta?: string;
};

type EnglishMessages = Widen<typeof english>;
type Messages = Omit<EnglishMessages, "map" | "navigation" | "experiences"> & {
  navigation: Omit<EnglishMessages["navigation"], "experienceLinks"> & {
    experienceLinks: readonly (readonly [string, string])[];
  };
  experiences: Omit<EnglishMessages["experiences"], "items"> & {
    items: readonly EnglishMessages["experiences"]["items"][number][];
  };
  map: Omit<EnglishMessages["map"], "destinations"> & {
    destinations: readonly Destination[];
  };
};

const french: Messages = {
  seo: {
    areaName: "Côte d’Azur, France",
  },
  contact: {
    maddyButton: "Contacter Maddy",
    whatsappMessage:
      "Bonjour Maddy, j’aimerais en savoir plus sur vos expériences.",
  },
  navigation: {
    brandLine: "LA CÔTE D’AZUR, AUTREMENT",
    mainLabel: "Navigation principale",
    mobileLabel: "Navigation mobile",
    socialNavigationLabel: "Réseaux sociaux de Rando d’Azur",
    openMenu: "Ouvrir le menu de navigation",
    experiencesLabel: "Expériences",
    chooseLanguage: "Choisir la langue",
    home: "Accueil",
    experiences: "Expériences",
    destinations: "Destinations",
    about: "À propos",
    press: "Presse",
    reviews: "Avis",
    contact: "Contact",
    book: "Réserver une expérience",
    language: "Langue",
    current: "Actuelle",
    languageComingSoon: "Bientôt disponible",
    languages: [
      ["en", "English"],
      ["fr", "Français"],
    ],
    experienceLinks: [
      ["food-tours", "Parcours gourmands"],
      ["hiking-experiences", "Randonnées"],
      ["sunset-apero-hikes", "Randonnées apéro au coucher du soleil"],
      ["cycling-experiences", "Expériences à vélo"],
      ["wild-provence", "Provence sauvage"],
      ["edible-plants", "Plantes comestibles de Provence"],
      ["outdoor-escape-games", "Escape games outdoor"],
      ["family-experiences", "Expériences en famille"],
      ["evjf-experiences", "EVJF & EVG · Groupes entre amis"],
      ["corporate-incentive-travel", "Voyages d’entreprise & incentive"],
      ["cruise-guests", "Excursions pour croisiéristes"],
    ],
  },
  hero: {
    eyebrow: "VOYAGES PRIVÉS · CÔTE D’AZUR",
    titleFirst: "Goûtez la",
    titleSecond: "Côte d’Azur",
    description:
      "Des expériences privées et authentiques, imaginées autour du meilleur de la Côte d’Azur.",
    discover: "Découvrir nos expériences",
    create: "Créer un voyage privé",
    scroll: "Défiler pour découvrir",
    imageAlt: "Une expérience privée en plein air sur la Côte d’Azur",
  },
  manifesto: {
    eyebrow: "BIEN PLUS QU’UNE DESTINATION",
    titleFirst: "Goûtez la",
    titleSecond: "Côte d’Azur",
    words: ["Goûtez-la.", "Parcourez-la.", "Pédalez-la.", "Rencontrez-la.", "Vivez-la."],
    introduction:
      "Un lieu à savourer, à explorer et à ressentir, dans tout ce qui compte vraiment.",
    stories: [
      "Au marché, avant que la matinée ne s’échappe.",
      "Là où le littoral laisse place à la nature.",
      "Sur les routes qui donnent envie de s’attarder.",
      "Dans les villages, avec ceux qui les font vivre.",
      "Une Riviera qui vous ressemble.",
    ],
  },
  experiences: {
    eyebrow: "LA RIVIERA EST L’EXPÉRIENCE",
    headingFirst: "Goûtez-la. Parcourez-la.",
    headingSecond: "Vivez-la.",
    introduction:
      "Rando d’Azur est une agence réceptive qui imagine des expériences privées et sur mesure dans toute la Côte d’Azur. Découvrez-la à votre manière.",
    items: [
      {
        id: "food-tours",
        slug: "food-tours",
        title: "Parcours gourmands",
        detail: "Goûtez-la",
        description:
          "Marchés du matin, artisans et longues tablées aux saveurs du Sud.",
        image: "experience-food",
        alt: "Saveurs de la Riviera",
      },
      {
        id: "hiking",
        slug: "hiking-experiences",
        title: "Randonnées",
        detail: "Parcourez-la",
        description:
          "Sentiers côtiers et chemins sauvages dévoilés par ceux qui les connaissent.",
        image: "experience-hiking",
        alt: "Sentiers de randonnée de la Côte d’Azur",
      },
      {
        id: "sunset-apero-hikes",
        slug: "sunset-apero-hikes",
        title: "Randonnées apéro au coucher du soleil",
        detail: "L’heure dorée",
        description:
          "Une balade à votre rythme, un beau panorama et un apéritif au soleil couchant.",
        image: "experience-sunset",
        alt: "Un coucher de soleil sur la Riviera",
      },
      {
        id: "velo",
        slug: "cycling-experiences",
        title: "Expériences à vélo",
        detail: "Pédalez-la",
        description:
          "Des routes en balcon sur la mer aux beaux villages de l’arrière-pays.",
        image: "experience-cycling",
        alt: "Itinéraires à vélo au-dessus de la Méditerranée",
      },
      {
        id: "corporate-experiences",
        slug: "corporate-incentive-travel",
        title: "Voyages d’entreprise & incentive",
        detail: "Rencontrez-la",
        description:
          "Des programmes ancrés localement, une logistique soignée et des expériences pensées pour vos invités.",
        image: "experience-corporate",
        alt: "Une expérience d’entreprise sur la Côte d’Azur",
      },
      {
        id: "familles",
        slug: "family-experiences",
        title: "Expériences en famille",
        detail: "À vivre ensemble",
        description:
          "Des aventures douces et des découvertes pour toutes les générations.",
        image: "experience-family",
        alt: "Aventures en famille sur la Riviera",
      },
      {
        id: "wild-provence",
        slug: "wild-provence",
        title: "Provence sauvage",
        detail: "Cueillir avec respect",
        description:
          "Découvrez les plantes comestibles et sauvages lors d’une immersion guidée au cœur du paysage provençal.",
        image: "experience-wild-provence",
        alt: "Plantes sauvages et comestibles de Provence",
      },
      {
        id: "outdoor-escape-games",
        slug: "outdoor-escape-games",
        title: "Escape games outdoor",
        detail: "Résoudre ensemble",
        description:
          "Un défi ludique en plein air où indices, découverte et esprit d’équipe rassemblent votre groupe.",
        image: "experience-escape-game",
        alt: "Une équipe participe à un escape game en plein air",
      },
      {
        id: "evjf-experiences",
        slug: "evjf-experiences",
        title: "EVJF & EVG · Groupes entre amis",
        detail: "Célébrer ensemble",
        description:
          "Réunissez votre groupe pour une célébration privée et conviviale sur la Riviera, accompagnée localement et imaginée autour des personnes au cœur de l’événement.",
        image: "experience-evjf",
        alt: "Des amis célèbrent un EVJF ou un EVG sur la Côte d’Azur",
      },
      {
        id: "cruise-guests",
        slug: "cruise-guests",
        title: "Excursions pour croisiéristes",
        detail: "Au-delà du port",
        description:
          "Profitez pleinement de votre escale grâce à une excursion privée organisée selon votre temps à terre.",
        image: "experience-cruise",
        alt: "Une excursion privée pendant une escale sur la Côte d’Azur",
      },
    ],
    explore: "Découvrir",
  },
  about: {
    eyebrow: "UNE AUTRE FAÇON DE CONNAÎTRE UN LIEU",
    title: "Pourquoi Rando d’Azur ?",
    introduction:
      "Nous sommes des experts locaux de la Riviera. Nous imaginons des expériences privées et authentiques, guidées par une connaissance intime du territoire.",
    reasons: [
      {
        title: "Un regard profondément local",
        description:
          "Nous vivons ici. Notre connaissance ouvre les portes des lieux et des rencontres qui font la vraie Riviera.",
      },
      {
        title: "Des expériences qui ont du sens",
        description:
          "Chaque rencontre est choisie pour son ancrage et les histoires sincères qu’elle révèle.",
      },
      {
        title: "Imaginées autour de vous",
        description:
          "Des voyages privés conçus selon vos envies, votre rythme et ceux qui vous accompagnent.",
      },
      {
        title: "Un service tout en justesse",
        description:
          "Une organisation attentive vous laisse libre de profiter pleinement de l’instant.",
      },
    ],
    founderEyebrow: "LA PERSONNE DERRIÈRE LE VOYAGE",
    founderTitle: "Rencontrez Maddy Polomeni",
    founderRole: "Fondatrice & responsable des expériences",
    founderParagraphs: [
      "Maddy Polomeni, fondatrice de Rando d’Azur, partage sa connaissance locale de la Côte d’Azur à travers les randonnées, les expériences outdoor et les rencontres avec ses habitants. Une conviction simple anime cette démarche : la plus belle façon de découvrir la Riviera passe par ses habitants, ses lieux et les instants du quotidien qui la rendent unique.",
      "Aujourd’hui, l’entreprise est devenue une équipe locale de confiance qui partage les mêmes valeurs. Cette évolution nous permet d’accueillir davantage de voyageurs tout en préservant l’authenticité, la souplesse et la qualité qui nous tiennent à cœur.",
    ],
    portraitAlt: "Maddy Polomeni, fondatrice & responsable des expériences",
    teamAlt: "L’équipe locale de Rando d’Azur",
  },
  trusted: {
    eyebrow: "LA CONFIANCE DES PROFESSIONNELS DU VOYAGE",
    titleFirst: "Le voyage,",
    titleSecond: "bien accompagné.",
    introduction:
      "Un partenaire local de confiance pour celles et ceux qui imaginent des voyages d’exception sur la Côte d’Azur.",
    introShort: "Un partenaire local pour",
    categories: [
      "Hôtels de luxe",
      "Créateurs de voyages",
      "Agences réceptives",
      "Compagnies de croisière",
      "Événements d’entreprise",
    ],
    link: "Travailler avec notre équipe locale",
  },
  press: {
    eyebrow: "PRESSE & MÉDIAS",
    titleFirst: "La Riviera,",
    titleSecond: "racontée de l’intérieur.",
    introduction:
      "Une sélection de parutions dans la presse et les magazines qui célèbrent les paysages et expériences de la Côte d’Azur.",
    contact: "Contacter notre équipe",
    categories: [
      "Logos de magazines",
      "Articles de presse",
      "Reportages télévisés",
      "Prix & distinctions",
    ],
    futureContent: "Emplacement réservé aux prochaines parutions",
    featuredEyebrow: "DANS LES MÉDIAS",
    featuredTitle: "Ils parlent de nous",
    openCoverage: "Lire notre parution dans",
    pageIntroduction:
      "Reportages et entretiens consacrés à Maddy Polomeni et Rando d’Azur. Retrouvez chaque publication sur le site de son éditeur.",
    viewAll: "Explorer les archives presse",
    readArticle: "Lire l’article",
    archiveEyebrow: "DANS LES ARCHIVES DE PRESSE",
    archiveIntroduction:
      "Des coupures de presse sont conservées dans les archives de l’entreprise. Leurs titres originaux et liens éditeurs sont en cours de vérification avant publication.",
    archivePlaceholder:
      "Coupure d’archive · référence de l’article original à confirmer",
    televisionAppearance: "Passage à la télévision",
    televisionArchive: "Explorer les archives télévisuelles",
    televisionPhotoAlt: "Un instant des reportages consacrés à Rando d’Azur",
  },
  reviews: {
    eyebrow: "AVIS GOOGLE",
    titleFirst: "Quelques mots",
    titleSecond: "de nos voyageurs.",
    introduction:
      "Des instants choisis, racontés par celles et ceux qui les ont vécus.",
    trustStatement:
      "Chaque expérience est imaginée autour de rencontres authentiques, de notre connaissance locale et de souvenirs inoubliables.",
    ratingLabel: "Note Google",
    publicReviews: "avis publics sur Google",
    statisticsLabel: "Statistiques des avis Google",
    averageRating: "Note moyenne",
    reviewCountLabel: "Avis Google",
    fiveStarCountLabel: "Avis 5 étoiles",
    snapshotNote: "Profil Google consulté le",
    fiveStars: "5 étoiles sur 5",
    googleTranslationNote:
      "Extraits courts affichés dans la traduction anglaise de Google. Le pays des voyageurs n’était pas visible dans les extraits publics.",
    previousReviews: "Avis précédents",
    nextReviews: "Avis suivants",
    carouselLabel: "Carrousel des avis voyageurs",
    experiences: {
      hiking: "Randonnée",
      mimosa: "Randonnée mimosa",
      "wild-plants": "Balade plantes sauvages",
      "hiking-yoga": "Week-end randonnée & yoga",
    },
    worldEyebrow: "UN ACCUEIL LOCAL",
    worldTitle: "La confiance de voyageurs venus du monde entier.",
    worldIntroduction:
      "Ancrée sur la Côte d’Azur, chaque expérience commence par une connaissance locale et un accueil chaleureux.",
    countryAvailability:
      "Google n’affichait pas la localisation des voyageurs dans les extraits publics.",
    ctaEyebrow: "VOTRE HISTOIRE RIVIERA",
    ctaTitle: "Prêts à imaginer votre propre histoire sur la Riviera ?",
    bookExperience: "Réserver une expérience",
    contactMaddy: "Contacter Maddy",
  },
  partners: {
    supportedEyebrow: "À NOS CÔTÉS",
    supportedTitle: "Ils nous soutiennent",
    supportedSubtitle:
      "Fiers de collaborer avec des marques outdoor et des institutions touristiques de confiance.",
    trustedEyebrow: "NOTRE RÉSEAU SUR LA RIVIERA",
    trustedTitle: "Ils nous font confiance",
    trustedSubtitle:
      "Agences de voyages, DMC et partenaires qui font confiance à Rando d’Azur pour créer des expériences authentiques sur la Côte d’Azur.",
    visitWebsite: "Visiter le site officiel",
    logoPlaceholder: "Logo officiel à venir",
    technicalPartnerLabel: "Partenaire technique officiel",
    equipmentPartnerLabel: "Partenaire équipementier officiel",
    supportedByLabel: "Avec le soutien de",
  },
  mice: {
    eyebrow: "AGENCES & MICE · VOYAGES D’ENTREPRISE & INCENTIVE",
    titleFirst: "L’expertise locale.",
    titleSecond: "L’excellence en action.",
    introduction:
      "Votre partenaire réceptif sur le terrain pour des expériences privées et des programmes soigneusement orchestrés sur la Côte d’Azur.",
    points: [
      "Expériences sur mesure, conçues avec soin",
      "Partenariats avec des agences de voyages haut de gamme",
      "Partenariats DMC et coordination locale",
      "Événements d’entreprise et voyages incentive",
      "Excursions de croisière adaptées à chaque escale",
      "Guides multilingues et services VIP discrets",
    ],
    cta: "Imaginons votre programme",
    imageAlt: "Le littoral méditerranéen de la Côte d’Azur",
  },
  map: {
    eyebrow: "UN LITTORAL, MILLE VISAGES",
    titleFirst: "Trouvez votre",
    titleSecond: "Riviera.",
    introduction:
      "Des roches rouges de l’Estérel aux villages perchés, chaque lieu a son caractère. Choisissez votre point de départ.",
    ariaLabel: "Carte interactive de la Côte d’Azur",
    drawingAlt: "Illustration du littoral de la Côte d’Azur",
    destinationsLabel: "Destinations de la Côte d’Azur",
    north: "Nord",
    seaLabel: "M E R  M É D I T E R R A N É E",
    franceLabel: "France",
    rivieraLabel: "French Riviera (Côte d’Azur)",
    regionalMapLabel: "Explorer la Côte d’Azur",
    fromAirportLabel: "Depuis l’aéroport de Nice",
    exploreDestination: "Explorer cette destination",
    contactDestination: "Contacter Maddy",
    placeEyebrow: "UN LIEU À DÉCOUVRIR",
    fayenceEyebrow: "UN SECRET BIEN GARDÉ DU VAR",
    fayenceSubtitle: "Rivières secrètes, villages authentiques & nature sauvage.",
    fayenceDetail:
      "Découvrez les eaux cristallines de la Siagne, ses cascades, ses forêts et ses villages authentiques.",
    fayenceRegion: "Côte d’Azur • Var",
    fayenceCta: "Découvrir le Pays de Fayence",
    discover: "Découvrir",
    availableExperiences: "Expériences sur place",
    photoAlt: "Une expérience Rando d’Azur photographiée dans cette région de la Riviera",
    destinations: [
      {
        id: "cannes",
        name: "Cannes",
        x: 22,
        y: 39,
        detail:
          "Cannes ne se résume pas au tapis rouge. Flânez dans les ruelles du Suquet, goûtez aux spécialités du marché Forville et admirez le coucher du soleil sur les îles de Lérins.",
        region: "Côte d’Azur • Alpes-Maritimes",
        driveTime: "Environ 30 min en voiture",
        photos: ["photo-slot-1", "photo-slot-2", "photo-slot-3"],
        experiences: ["food-tours", "cycling-experiences", "cruise-guests"],
        photosFrom: ["food-tours", "cycling-experiences"],
      },
      {
        id: "antibes",
        name: "Antibes",
        x: 37,
        y: 30,
        detail:
          "Suivez les remparts jusqu’au marché provençal et au port, entre les eaux turquoise et le rythme paisible du vieil Antibes.",
        region: "Côte d’Azur • Alpes-Maritimes",
        driveTime: "Environ 25 min en voiture",
        photos: ["photo-slot-1", "photo-slot-2", "photo-slot-3"],
        experiences: ["food-tours", "hiking-experiences", "cycling-experiences", "family-experiences"],
        photosFrom: ["food-tours", "hiking-experiences", "cycling-experiences"],
      },
      {
        id: "grasse",
        name: "Grasse",
        x: 39,
        y: 17,
        detail:
          "Suivez le parfum des roses dans les ruelles de Grasse, ses jardins fleuris et les collines de son pays parfumé.",
        region: "Côte d’Azur • Alpes-Maritimes",
        driveTime: "Environ 35 min en voiture",
        photos: ["photo-slot-1", "photo-slot-2", "photo-slot-3"],
        experiences: ["food-tours", "hiking-experiences", "wild-provence"],
        photosFrom: ["food-tours", "wild-provence"],
      },
      {
        id: "esterel",
        name: "Estérel",
        x: 12,
        y: 34,
        detail:
          "Parcourez à pied ou à vélo les sommets rouge feu de l’Estérel, ses sentiers sous les pins et ses criques discrètes ouvertes sur la Méditerranée.",
        region: "Côte d’Azur • Var",
        driveTime: "Environ 45 min en voiture",
        photos: ["photo-slot-1", "photo-slot-2", "photo-slot-3"],
        experiences: ["hiking-experiences", "sunset-apero-hikes", "cycling-experiences", "outdoor-escape-games"],
        photosFrom: ["cycling-experiences", "sunset-apero-hikes"],
      },
      {
        id: "iles-de-lerins",
        name: "Îles de Lérins",
        x: 17,
        y: 62,
        detail:
          "Laissez le rivage derrière vous pour rejoindre en bateau les criques limpides, les sentiers boisés et le calme des îles.",
        region: "Côte d’Azur • Alpes-Maritimes",
        driveTime: "15 min en bateau depuis Cannes",
        photos: ["photo-slot-1", "photo-slot-2", "photo-slot-3"],
        experiences: ["hiking-experiences", "sunset-apero-hikes", "outdoor-escape-games"],
        photosFrom: ["hiking-experiences", "sunset-apero-hikes", "outdoor-escape-games"],
      },
      {
        id: "pays-de-fayence",
        name: "Pays de Fayence",
        x: 18,
        y: 16,
        detail:
          "Suivez la Siagne jusqu’aux baignades cristallines et aux cascades, puis flânez dans les villages perchés et les paisibles sentiers forestiers.",
        region: "Côte d’Azur • Var",
        driveTime: "Environ 50 min en voiture",
        photos: ["photo-slot-1", "photo-slot-2", "photo-slot-3"],
        subtitle: "Rivières secrètes, villages authentiques & nature sauvage.",
        cta: "Découvrir le Pays de Fayence",
        experiences: ["hiking-experiences", "wild-provence", "family-experiences", "outdoor-escape-games"],
        photosFrom: ["wild-provence", "hiking-experiences", "family-experiences"],
      },
    ],
  },
  newsletter: {
    eyebrow: "UNE LETTRE DU SUD",
    title: "Gardez le lien avec la Riviera",
    description:
      "Recevez nos expériences de saison, lieux secrets, histoires locales et visites exclusives avant tout le monde.",
    privacy: "Aucun spam. Seulement de l’inspiration authentique.",
    emailLabel: "Adresse e-mail",
    emailPlaceholder: "Votre adresse e-mail",
    submit: "S’inscrire à la lettre",
    pending:
      "Ouverture du formulaire sécurisé Brevo. Après validation de votre demande par Brevo, vérifiez votre boîte de réception et vos courriers indésirables et confirmez sous 7 jours. L’inscription ne commence qu’après confirmation.",
    invalidEmail: "Veuillez saisir une adresse e-mail valide.",
    consentRequired: "Veuillez accepter de recevoir la newsletter avant de continuer.",
    sendError: "Votre demande n’a pas pu être envoyée. Réessayez ou contactez Maddy.",
    consent: "J’accepte de recevoir la newsletter Rando d’Azur et j’ai lu la",
    privacyLink: "Politique de confidentialité",
    withdraw: "Vous pouvez vous désinscrire à tout moment via le lien dans nos e-mails.",
    providerNote: "Votre adresse et votre consentement sont transmis de façon sécurisée à Brevo pour Rando d’Azur. La page de confirmation Brevo s’ouvrira ensuite. Confirmez votre adresse sous 7 jours pour terminer l’inscription.",
  },
  booking: {
    eyebrow: "VOTRE HISTOIRE RIVIERA COMMENCE ICI",
    title: "Réserver une expérience",
    introduction:
      "Réservez en ligne ou contactez Maddy pour créer votre expérience privée sur la Riviera.",
    onlineTitle: "Réservez en ligne avec Regiondo",
    onlineLabel: "Réservation en ligne avec Regiondo",
    onlineNote:
      "Découvrez les expériences disponibles dans notre boutique. Pour une expérience sur mesure, contactez Maddy.",
  },
  photoGallery: {
    eyebrow: "UN REGARD DE PLUS PRÈS",
    title: "L’expérience, en images.",
    description:
      "Découvrez les lieux, les personnes et les détails saisis au fil de cette expérience.",
    photoAlt: "Un instant d’une expérience Rando d’Azur",
  },
  footer: {
    brandLine: "AGENCE RÉCEPTIVE · CÔTE D’AZUR",
    navigationLabel: "Navigation de pied de page",
    descriptor:
      "Des expériences privées, façonnées par notre connaissance locale et notre amour du territoire.",
    eyebrow: "VOTRE HISTOIRE COMMENCE ICI",
    brandFirst: "Goûtez la",
    brandSecond: "Côte d’Azur",
    manifesto: ["Goûtez-la.", "Parcourez-la.", "Pédalez-la.", "Rencontrez-la.", "Vivez-la."],
    cta: "Commencez votre histoire Riviera",
    experiences: "Expériences",
    mice: "Agences & MICE",
    about: "À propos de Rando d’Azur",
    destinations: "Explorer la Riviera",
    legalNotice: "Mentions légales",
    terms: "Conditions générales de vente",
    privacy: "Politique de confidentialité",
    cookies: "Politique relative aux cookies",
    copyright: "Tous droits réservés.",
    backToTop: "Retour en haut",
    followEyebrow: "UN ART DE VIVRE À PARTAGER",
    followTitle: "Suivez nos aventures",
    followDescription:
      "Un peu plus de Riviera, où que vous soyez.",
    contactDetailsTitle: "Restons en contact",
    contactLinksLabel: "Coordonnées et réseaux sociaux de Rando d’Azur",
    facebookLabel: "Facebook",
    instagramLabel: "Instagram",
    whatsappLabel: "WhatsApp",
    phoneLabel: "Téléphone",
    emailLabel: "E-mail",
    partnershipsEmailLabel: "Partenariats",
  },
  experiencePage: {
    eyebrow: "EXPÉRIENCES PRIVÉES · FRENCH RIVIERA",
    back: "Toutes les expériences",
    enquire: "Demander cette expérience",
    chaptersEyebrow: "UN VOYAGE IMAGINÉ POUR VOUS",
    chaptersTitleFirst: "La Riviera,",
    chaptersTitleSecond: "à ressentir autrement.",
    toursTitleFirst: "Choisissez votre",
    toursTitleSecond: "parcours.",
    note:
      "Chaque expérience est imaginée avec attention et adaptée aux voyageurs qui la partagent. Les détails sont confirmés avec vous avant le départ.",
    booking: "Imaginons votre expérience",
    pages: {
      "food-tours": {
        title: "Parcours gourmands",
        subtitle: "Goûtez-la.",
        description:
          "Découvrez la Riviera à travers ses marchés, ses saveurs régionales et celles et ceux qui les font vivre.",
        imageAlt: "Cuisine et saveurs locales de la Côte d’Azur",
        points: [
          "Marchés au rythme des saisons",
          "Rencontre avec les artisans et producteurs",
          "Un itinéraire privé adapté à vos goûts",
        ],
      },
      "hiking-experiences": {
        title: "Randonnées",
        subtitle: "Parcourez-la.",
        description:
          "Empruntez les sentiers côtiers et chemins confidentiels qui révèlent les multiples paysages de la Riviera.",
        imageAlt: "Sentiers et paysages de la Côte d’Azur",
        points: [
          "Balades privées adaptées à votre rythme",
          "Itinéraires côtiers, ruraux et perchés",
          "Regards et histoires de nos guides locaux",
        ],
      },
      "sunset-apero-hikes": {
        title: "Randonnée Rando Apéro",
        subtitle: "Un rituel à l’heure dorée.",
        description:
          "Partez pour une balade guidée en soirée, puis partagez un apéritif généreux au coucher du soleil sur la Côte d’Azur.",
        imageAlt: "Des visiteurs profitent d’une pause au bord d’une rivière de la Côte d’Azur",
        points: [
          "Une balade guidée à votre rythme dans les paysages locaux",
          "Un apéritif pique-nique aux saveurs régionales",
          "Une expérience privée au moment des dernières lumières",
        ],
      },
      "cycling-experiences": {
        title: "Expériences à vélo",
        subtitle: "Pédalez-la.",
        description:
          "Parcourez le littoral et l’arrière-pays à votre rythme, lors d’une expérience pensée pour votre journée.",
        imageAlt: "Itinéraires cyclables de la Côte d’Azur",
        points: [
          "Sorties privées adaptées à votre groupe",
          "Itinéraires entre littoral et campagne",
          "Le temps de faire halte et de découvrir",
        ],
        tours: [
          {
            title: "Cannes City Discovery",
            description:
              "Découvrez le front de mer, les quartiers et les histoires locales à vélo.",
          },
          {
            title: "Estérel Mountain Bike Adventure",
            description:
              "Parcourez les roches rouges et les pistes forestières de l’Estérel avec un guide local.",
          },
          {
            title: "Mimosa Season Cycling Tour",
            description:
              "Pédalez à travers les forêts de mimosa doré et les sentiers paisibles de la Côte d’Azur. Une sortie guidée saisonnière au cœur de la nature, des couleurs et des parfums de l’hiver.",
            seasonality: "Floraison hivernale, sous réserve des conditions naturelles.",
          },
        ],
      },
      "family-experiences": {
        title: "Expériences en famille",
        subtitle: "Vivez-la ensemble.",
        description:
          "Partagez une Riviera plus personnelle à travers des aventures pensées pour vos âges et vos envies.",
        imageAlt: "Une expérience à partager en famille sur la Côte d’Azur",
        points: [
          "Un rythme adapté à votre famille",
          "Découvertes en plein air et rencontres locales",
          "Un programme privé pensé pour votre journée",
        ],
      },
      "corporate-incentive-travel": {
        title: "Voyages d’entreprise & incentive",
        subtitle: "Rencontrez-la. Vivez-la.",
        description:
          "Rassemblez vos équipes autour d’expériences ancrées dans le territoire et d’un accompagnement attentif.",
        imageAlt: "Un événement privé sur la Côte d’Azur",
        points: [
          "Programmes sur mesure selon vos objectifs",
          "Coordination locale et guides multilingues",
          "Expériences pour groupes et voyages incentive",
        ],
      },
      "wild-provence": {
        title: "Provence sauvage",
        subtitle: "Au plus près du vivant.",
        description:
          "Découvrez les plantes sauvages et comestibles lors d’une exploration guidée des paysages et saveurs de Provence.",
        imageAlt: "Plantes sauvages et comestibles cueillies en Provence",
        points: [
          "Une découverte guidée des plantes locales",
          "Des savoirs saisonniers ancrés dans le territoire",
          "Une approche respectueuse de la nature et de la cueillette",
        ],
      },
      "edible-plants": {
        title: "Plantes comestibles de Provence",
        subtitle: "Un goût de nature.",
        description:
          "Découvrez les plantes comestibles de saison lors d’une balade guidée, attentive au territoire et respectueuse de la nature.",
        imageAlt: "Plantes comestibles de saison dans les paysages provençaux",
        points: [
          "Reconnaître des plantes locales avec un guide expérimenté",
          "Explorer des savoirs saisonniers liés au paysage",
          "Découvrir une cueillette responsable et respectueuse",
        ],
      },
      "outdoor-escape-games": {
        title: "Escape games outdoor",
        subtitle: "Le paysage devient votre terrain de jeu.",
        description:
          "Rassemblez votre groupe autour d’un défi ludique en plein air, entre indices, exploration et esprit d’équipe.",
        imageAlt: "Une équipe résout des énigmes lors d’un escape game outdoor",
        points: [
          "Des défis en plein air pour les groupes privés",
          "Des énigmes et une découverte collective",
          "Un format vivant pour les célébrations et événements",
        ],
      },
      "evjf-experiences": {
        title: "EVJF & EVG · Groupes entre amis",
        subtitle: "Une célébration à votre image.",
        description:
          "Célébrez la future mariée ou le futur marié avec une expérience privée sur la Riviera, entre aventure en plein air et découvertes locales, imaginée pour votre groupe.",
        imageAlt: "Des amis célèbrent un EVJF ou un EVG sur la Côte d’Azur",
        points: [
          "Une expérience privée adaptée à votre groupe",
          "Découvertes en plein air et attentions locales",
          "Une organisation souple autour de votre célébration",
        ],
      },
      "evg-experiences": {
        title: "EVG · Groupes entre amis",
        subtitle: "Une journée qui restera.",
        description:
          "Retrouvez vos amis pour une expérience active, accompagnée par des experts locaux, le temps d’une journée sur la Riviera.",
        imageAlt: "Des amis partagent une aventure en plein air sur la Côte d’Azur",
        points: [
          "Une sortie privée pour votre groupe",
          "Des expériences actives selon vos envies",
          "Une coordination locale de bout en bout",
        ],
      },
      "cruise-guests": {
        title: "Excursions pour croisiéristes",
        subtitle: "Au-delà du port.",
        description:
          "Profitez pleinement d’une escale sur la Riviera avec une expérience privée organisée selon votre temps à terre.",
        imageAlt: "Une excursion privée avec guide pendant une escale sur la Côte d’Azur",
        points: [
          "Des expériences privées pensées pour votre escale",
          "Un timing étudié et une coordination locale",
          "Une première rencontre personnelle avec la Riviera",
        ],
      },
    },
  },
};

export const messages = {
  en: english,
  fr: french,
} satisfies Record<Locale, Messages>;

export type MessagesForLocale = Messages;

export function getMessages(locale: Locale): MessagesForLocale {
  return messages[locale];
}
