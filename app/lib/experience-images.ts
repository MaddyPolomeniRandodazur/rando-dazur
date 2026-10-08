// Existing originals only; Next Image handles responsive sizes and web delivery.
// Explicit assignments avoid gallery/hero fallbacks reusing the wrong tour image.
export const cyclingTourImages = [
  { src: "/images/manifesto/cycle-tour-french-riviera.jpg", alt: "Cyclists exploring the Cannes waterfront beside the Mediterranean", objectPosition: "50% 50%" },
  { src: "/images/experiences/esterel-mountain-bike-four-cyclists.jpg", alt: "Four helmeted mountain bikers with backpacks riding through the red rocks of the Estérel above the Mediterranean", objectPosition: "50% 78%", mobileObjectPosition: "50% 70%" },
  { src: "/images/experiences/mimosa-season-cycling-tour.jpg", alt: "A mountain biker riding a peaceful trail surrounded by golden yellow mimosa blossoms", objectPosition: "50% 85%" },
];

export const experienceImages: Record<string, { src: string; alt: string; objectPosition?: string }[]> = {
  "food-tours": [
    { src: "/images/experiences/food-tour-tasting-cannes.jpg", alt: "A local guide sharing a tasting with visitors in a Cannes shop" },
    { src: "/images/experiences/food-tour-cannes-seaview.jpg", alt: "Local pastries shared above Cannes harbour" },
    { src: "/images/manifesto/meet-it-socca-cannes-market.jpg", alt: "Visitors meeting a socca maker at the Cannes market" },
  ],
  "hiking-experiences": [
    { src: "/images/experiences/hiking-young-hikers-sunset.jpg", alt: "Two young hikers looking over the French Riviera at sunset", objectPosition: "70% 50%" },
    { src: "/images/manifesto/walk-it-forest-hike.jpg", alt: "A hiker following a rocky woodland trail" },
  ],
  "sunset-apero-hikes": [
    { src: "/images/experiences/sunset-apero-hikes-picnic.jpg", alt: "A Provençal picnic overlooking the Riviera at sunset" },
    { src: "/images/manifesto/live-it-shared-hiking-picnic.jpg", alt: "Hikers sharing bread and local produce at sunset" },
  ],
  "cycling-experiences": [
    { src: "/images/experiences/cycling-experiences-riviera-promenade.jpg", alt: "Cyclists riding beside the Mediterranean on the Riviera promenade", objectPosition: "60% 70%" },
    { src: "/images/manifesto/cycle-tour-french-riviera.jpg", alt: "A group cycling along the French Riviera waterfront" },
  ],
  "wild-provence": [{ src: "/images/experiences/wild-provence-hikers-turquoise-river.jpg", alt: "Two hikers resting above a turquoise river in Provence" }],
  "family-experiences": [{ src: "/images/experiences/family-experiences-coastal-hike.jpg", alt: "A family hiking above the Mediterranean at sunset" }],
  "evjf-experiences": [{ src: "/images/experiences/evjf-sunset-hiking-celebration.jpg", alt: "Friends celebrating a bachelorette hiking experience at sunset" }],
  "corporate-incentive-travel": [{ src: "/images/experiences/corporate-incentive-riviera-group.jpg", alt: "A group sharing maps and planning an activity above the Riviera" }],
  "outdoor-escape-games": [{ src: "/images/experiences/escape-game-outdoor-riviera-map.jpg", alt: "An outdoor escape game map overlooking the Mediterranean" }],
  "cruise-guests": [{ src: "/images/experiences/cruise-guests-cannes-port.jpg", alt: "A visitor overlooking Cannes harbour and a cruise ship", objectPosition: "30% 50%" }],
};
