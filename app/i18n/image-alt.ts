import type { Locale } from "./config";

// Translate descriptions only: the photographs, filenames and crops are shared.
const frenchImageAlt: Record<string, string> = {
  "Maddy Polomeni with yellow mimosa on the French Riviera": "Maddy Polomeni au milieu des mimosas sur la Côte d’Azur",
  "A Provençal picnic overlooking the French Riviera": "Un pique-nique provençal face à la Côte d’Azur",
  "La Croisette in Cannes on the French Riviera": "La Croisette à Cannes sur la Côte d’Azur",
  "Le Suquet old town in Cannes": "Le Suquet, quartier historique de Cannes",
  "Marché Forville in Cannes": "Le marché Forville à Cannes",
  "Boat arriving at the Lérins Islands from Cannes": "Un bateau arrive aux îles de Lérins depuis Cannes",
  "Monastery of Saint-Honorat on the Lérins Islands": "Le monastère de Saint-Honorat sur les îles de Lérins",
  "Mediterranean coastal trail on the Lérins Islands": "Un sentier côtier méditerranéen sur les îles de Lérins",
  "Coastal trail and Château de la Napoule on the Mediterranean": "Le sentier côtier et le château de la Napoule au bord de la Méditerranée",
  "Pic du Cap Roux red rocks overlooking the Mediterranean in the Estérel": "Les roches rouges du pic du Cap Roux dans l’Estérel, au-dessus de la Méditerranée",
  "Cap Dramont coastal trail with red volcanic rocks, pines and blue Mediterranean water": "Le sentier côtier du cap Dramont, ses roches rouges, ses pins et la Méditerranée bleue",
  "Old Antibes and its ramparts overlooking the Mediterranean": "Le vieil Antibes et ses remparts au-dessus de la Méditerranée",
  "Coastal trail at the Baie des Milliardaires in Cap d’Antibes": "Le sentier côtier de la baie des Milliardaires au cap d’Antibes",
  "Cycling along the coastal road of Cap d’Antibes": "Des cyclistes sur la route côtière du cap d’Antibes",
  "Pink umbrellas in the historic streets of Grasse": "Des parapluies roses dans les rues historiques de Grasse",
  "Panoramic view from Grasse towards the French Riviera": "Vue panoramique depuis Grasse vers la Côte d’Azur",
  "Traditional perfume making in Grasse": "Un atelier traditionnel de parfumerie à Grasse",
  "Pont des Tuves and the Siagne river in the Pays de Fayence": "Le pont des Tuves et la Siagne dans le Pays de Fayence",
  "Mimosa and eucalyptus hills of Tanneron": "Les collines de Tanneron couvertes de mimosa et d’eucalyptus",
  "Hilltop village of Mons in the Pays de Fayence": "Le village perché de Mons dans le Pays de Fayence",
  "Cyclists exploring the Cannes waterfront beside the Mediterranean": "Des cyclistes découvrent le front de mer de Cannes au bord de la Méditerranée",
  "Four helmeted mountain bikers with backpacks riding through the red rocks of the Estérel above the Mediterranean": "Quatre vététistes portant casques et sacs à dos parmi les roches rouges de l’Estérel au-dessus de la Méditerranée",
  "A mountain biker riding a peaceful trail surrounded by golden yellow mimosa blossoms": "Un vététiste sur un sentier paisible entouré de mimosa jaune en fleurs",
  "A local guide sharing a tasting with visitors in a Cannes shop": "Une guide locale partage une dégustation avec des visiteurs dans une boutique à Cannes",
  "Local pastries shared above Cannes harbour": "Des pâtisseries locales partagées au-dessus du port de Cannes",
  "Visitors meeting a socca maker at the Cannes market": "Des visiteurs rencontrent un artisan de la socca au marché de Cannes",
  "Two young hikers looking over the French Riviera at sunset": "Deux jeunes randonneurs contemplent la Côte d’Azur au coucher du soleil",
  "A hiker following a rocky woodland trail": "Une randonneuse suit un sentier rocheux en forêt",
  "A Provençal picnic overlooking the Riviera at sunset": "Un pique-nique provençal face à la Côte d’Azur au coucher du soleil",
  "Hikers sharing bread and local produce at sunset": "Des randonneurs partagent du pain et des produits locaux au coucher du soleil",
  "Cyclists riding beside the Mediterranean on the Riviera promenade": "Des cyclistes longent la Méditerranée sur une promenade de la Côte d’Azur",
  "Three happy cyclists enjoying a sunny ride overlooking the Mediterranean coast": "Trois cyclistes souriants profitent du soleil au-dessus du littoral méditerranéen",
  "Two hikers resting above a turquoise river in Provence": "Deux randonneuses se reposent au-dessus d’une rivière turquoise en Provence",
  "A family hiking above the Mediterranean at sunset": "Une famille randonne au-dessus de la Méditerranée au coucher du soleil",
  "Friends celebrating a bachelorette hiking experience at sunset": "Des amies célèbrent un EVJF en randonnée au coucher du soleil",
  "A group sharing maps and planning an activity above the Riviera": "Un groupe partage des cartes et prépare une activité sur la Côte d’Azur",
  "An outdoor escape game map overlooking the Mediterranean": "Une carte d’escape game outdoor face à la Méditerranée",
  "A visitor overlooking Cannes harbour and a cruise ship": "Une visiteuse contemple le port de Cannes et un bateau de croisière",
};

export function localizedImageAlt(locale: Locale, description: string) {
  return locale === "fr" ? frenchImageAlt[description] ?? description : description;
}
