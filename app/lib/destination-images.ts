const cannesPhotos = [
  { fileName: "la-croisette.jpg", src: "/images/destinations/cannes/la-croisette.jpg", alt: "La Croisette in Cannes on the French Riviera", objectPosition: "60% 50%" },
  { fileName: "le-suquet.jpg", src: "/images/destinations/cannes/le-suquet.jpg", alt: "Le Suquet old town in Cannes", objectPosition: "65% 50%" },
  { fileName: "marche-forville.jpg", src: "/images/destinations/cannes/marche-forville.jpg", alt: "Marché Forville in Cannes", objectPosition: "50% 50%" },
];

const lerinsPhotos = [
  { fileName: "boat-arrival.jpg", src: "/images/destinations/iles-de-lerins/boat-arrival.jpg", alt: "Boat arriving at the Lérins Islands from Cannes", objectPosition: "20% 50%" },
  { fileName: "saint-honorat-monastery.jpg", src: "/images/destinations/iles-de-lerins/saint-honorat-monastery.jpg", alt: "Monastery of Saint-Honorat on the Lérins Islands", objectPosition: "55% 50%" },
  { fileName: "mediterranean-coastal-trail.jpg", src: "/images/destinations/iles-de-lerins/mediterranean-coastal-trail.jpg", alt: "Mediterranean coastal trail on the Lérins Islands", objectPosition: "50% 50%" },
];

const esterelPhotos = [
  { fileName: "la-napoule-coastal-trail.jpg", src: "/images/destinations/esterel/la-napoule-coastal-trail.jpg", alt: "Coastal trail and Château de la Napoule on the Mediterranean", objectPosition: "40% 50%" },
  { fileName: "pic-du-cap-roux.jpg", src: "/images/destinations/esterel/pic-du-cap-roux.jpg", alt: "Pic du Cap Roux red rocks overlooking the Mediterranean in the Estérel", objectPosition: "50% 50%" },
  { fileName: "cap-dramont-coastal-trail.jpg", src: "/images/destinations/esterel/cap-dramont-coastal-trail.jpg", alt: "Cap Dramont coastal trail with red volcanic rocks, pines and blue Mediterranean water", objectPosition: "55% 50%" },
];

const antibesPhotos = [
  { fileName: "old-antibes-ramparts.jpg", src: "/images/destinations/antibes/old-antibes-ramparts.jpg", alt: "Old Antibes and its ramparts overlooking the Mediterranean", objectPosition: "50% 50%" },
  { fileName: "baie-des-milliardaires-coastal-trail.jpg", src: "/images/destinations/antibes/baie-des-milliardaires-coastal-trail.jpg", alt: "Coastal trail at the Baie des Milliardaires in Cap d’Antibes", objectPosition: "50% 50%" },
  { fileName: "cap-antibes-cycling.jpg", src: "/images/destinations/antibes/cap-antibes-cycling.jpg", alt: "Cycling along the coastal road of Cap d’Antibes", objectPosition: "65% 50%" },
];

const grassePhotos = [
  { fileName: "historic-streets-pink-umbrellas.jpg", src: "/images/destinations/grasse/historic-streets-pink-umbrellas.jpg", alt: "Pink umbrellas in the historic streets of Grasse", objectPosition: "55% 50%" },
  { fileName: "panoramic-french-riviera-view.jpg", src: "/images/destinations/grasse/panoramic-french-riviera-view.jpg", alt: "Panoramic view from Grasse towards the French Riviera", objectPosition: "50% 50%" },
  { fileName: "traditional-perfume-making.jpg", src: "/images/destinations/grasse/traditional-perfume-making.jpg", alt: "Traditional perfume making in Grasse", objectPosition: "50% 50%" },
];

const fayencePhotos = [
  { fileName: "pont-des-tuves-siagne.jpg", src: "/images/destinations/pays-de-fayence/pont-des-tuves-siagne.jpg", alt: "Pont des Tuves and the Siagne river in the Pays de Fayence", objectPosition: "60% 50%" },
  { fileName: "tanneron-mimosa-eucalyptus.jpg", src: "/images/destinations/pays-de-fayence/tanneron-mimosa-eucalyptus.jpg", alt: "Mimosa and eucalyptus hills of Tanneron", objectPosition: "50% 50%" },
  { fileName: "mons-hilltop-village.jpg", src: "/images/destinations/pays-de-fayence/mons-hilltop-village.jpg", alt: "Hilltop village of Mons in the Pays de Fayence", objectPosition: "50% 50%" },
];

export const destinationImages: Record<string, typeof cannesPhotos> = {
  cannes: cannesPhotos, "iles-de-lerins": lerinsPhotos, esterel: esterelPhotos, antibes: antibesPhotos, grasse: grassePhotos, "pays-de-fayence": fayencePhotos,
};
