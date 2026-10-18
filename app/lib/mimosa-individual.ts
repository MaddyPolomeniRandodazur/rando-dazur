import type { Locale } from "../i18n/config";
export const mimosaIndividual = {
  price: 35, minParticipants: 6, maxParticipants: 15,
  startTime: "09:00", endTime: "11:00",
  meetingPoint: { fr: "Secteur Cannes — repère : office de tourisme de Cannes", en: "Cannes area — reference point: Cannes tourist office" },
  dates: ["2027-01-16", "2027-01-23", "2027-01-30", "2027-02-06", "2027-02-13", "2027-02-20", "2027-02-27"],
  regiondoUrl: "https://randodazur.regiondo.com/cannes-mimosa-walk-snack-saturday-mornings",
  regiondoUrlFr: "https://randodazur.regiondo.fr/cannes-mimosa-walk-snack-saturday-mornings",
};
export const mimosaFaqs: Record<Locale, { question: string; answer: string }[]> = {
  fr: [
    { question: "Peut-on réserver seul ou à deux ?", answer: "Oui. La randonnée individuelle est proposée à 35 € par personne, goûter au mimosa inclus, les samedis du 16 janvier au 27 février 2027, de 9 h à 11 h, à Cannes Croix des Gardes. Départ à partir de 6 participants, maximum 15. Réservation sur Regiondo ; confirmation manuelle du départ selon les inscriptions." },
    { question: "Quel est le lieu de rendez-vous ?", answer: "Repères génériques : office de tourisme de Cannes ; parking de Décathlon à Mandelieu ; devant l’office de tourisme de Tanneron. Ce ne sont pas les départs exacts. Le point de départ précis est communiqué après réservation et paiement. Si vous n’êtes pas véhiculé, prévenez Maddy avant de réserver." },
    { question: "Le goûter au mimosa est-il inclus ?", answer: "Oui, dans le tarif individuel de 35 € comme dans l’expérience privée présentée ici. Prévenez Maddy de vos allergies avant réservation ; la composition précise dépend des disponibilités." },
    { question: "La floraison est-elle garantie ?", answer: "Non. Elle dépend des variétés, du secteur et de la météo. Les photographies montrent des sorties passées ; les conditions locales sont prises en compte." },
    { question: "Quelle différence avec la sortie privée ?", answer: "L’offre individuelle a lieu à pied à Cannes aux sept dates du samedi annoncées, avec d’autres participants. L’expérience privée à 250 € concerne votre groupe constitué de 2 à 12 personnes, à pied ou à vélo selon les modalités convenues. La location de vélo n’est pas comprise." },
  ],
  en: [
    { question: "Can I join as a solo traveller or a couple?", answer: "Yes. The shared walk is €35 per person, including a mimosa-themed snack, on Saturdays from 16 January to 27 February 2027, 9–11 am, at Croix des Gardes in Cannes. Minimum 6 participants to run, maximum 15. Book through Regiondo; departures are manually confirmed depending on registrations." },
    { question: "Where is the meeting point?", answer: "General reference points: Cannes tourist office; Décathlon car park in Mandelieu; outside Tanneron tourist office. These are not the exact departure points. The precise starting point is shared after booking and payment. Tell Maddy before booking if you do not have a vehicle." },
    { question: "Is the mimosa-themed snack included?", answer: "Yes, in the €35 shared walk and in the private experience described here. Tell Maddy about allergies before booking; the exact selection depends on availability." },
    { question: "Is flowering guaranteed?", answer: "No. Blossom varies with variety, area and weather. Photographs show previous outings; local conditions are taken into account." },
    { question: "How is a private outing different?", answer: "The shared walk takes place on foot in Cannes on the seven announced Saturdays, with other participants. The €250 private experience is for your own group of 2–12, on foot or by bike as agreed. Bicycle rental is not included." },
  ],
};
