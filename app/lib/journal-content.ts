import type { Locale } from "../i18n/config";

export const journalDate = "2026-10-18";
export type JournalCopy = {
  title: string; description: string; intro: string;
  sections: { title: string; paragraphs: string[] }[];
  faqs: { question: string; answer: string }[];
};
export type JournalArticle = {
  slug: string; lastModified?: string; image: string; alt: Record<Locale, string>;
  sources: { name: string; url: string }[];
  photos?: { image: string; alt: Record<Locale, string>; caption: Record<Locale, string> }[];
  copy: Record<Locale, JournalCopy>;
};

const mimosaImage = "/images/mimosa/mimosa-flowering-trail.webp";
const flowerAlt = { fr: "Sentier bordé de mimosas jaunes en fleurs", en: "Trail beside yellow mimosa blossom" };
export const journalArticles: JournalArticle[] = [
  {
    slug: "mimosa-cannes-mandelieu-tanneron", image: mimosaImage, alt: flowerAlt,
    sources: [
      { name: "Mandelieu Tourisme — le massif du Tanneron", url: "https://www.mandelieu-tourisme.com/evenementiel/mimosa/immersion-dans-le-tanneron/" },
      { name: "Cannes Tourisme — la Croix des Gardes", url: "https://www.cannes-france.com/decouvrir-visiter/quartiers/la-croix-des-gardes/" },
      { name: "Pays de Fayence — paysages du mimosa à Tanneron", url: "https://www.paysdefayence.com/itineraires/circuit-balade-coeur-des-mimosa/" },
    ],
    copy: {
      fr: {
        title: "Où voir le mimosa à Cannes, Mandelieu et Tanneron ?",
        description: "Floraison du mimosa, balades à Cannes, Mandelieu et Tanneron : les repères de Rando d’Azur pour préparer votre sortie hivernale sur la Côte d’Azur.",
        intro: "Vous cherchez une balade au milieu du mimosa, pas forcément une randonnée sportive ? Le premier choix est celui du secteur et du moment. Voici trois portes d’entrée pour découvrir les fleurs jaunes de la Côte d’Azur, puis choisir entre une promenade autonome et une sortie accompagnée.",
        sections: [
          { title: "Quand fleurit le mimosa ?", paragraphs: ["Dans le Tanneron, la période d’observation s’étend généralement de l’hiver au début du printemps. Janvier et février sont des mois à envisager, mais les variétés, l’exposition et la météo décalent les floraisons. Une date sur le calendrier ne garantit jamais des collines entièrement jaunes.", "Pour préparer votre visite, demandez une observation récente du secteur plutôt que de vous fier à une photographie d’une autre saison. Gardez une solution de repli si la météo ou l’accès au massif change."] },
          { title: "Cannes : les paysages de la Croix des Gardes", paragraphs: ["La Croix des Gardes associe des sentiers, des mimosas et des vues sur la baie de Cannes. C’est une piste pour une parenthèse nature pendant un séjour en ville. Le relief mérite toutefois d’être pris en compte : choisissez un parcours adapté à votre aisance à la marche, pas uniquement à sa proximité du centre."] },
          { title: "Mandelieu : une porte vers les collines", paragraphs: ["Mandelieu-la-Napoule permet de rapprocher un séjour sur le littoral des paysages du Tanneron. Pour organiser une balade, distinguez bien le point de départ, le dénivelé et le retour. Un rendez-vous en forêt n’est pas nécessairement desservi comme une adresse en centre-ville."] },
          { title: "Tanneron : prendre le temps dans le massif", paragraphs: ["Autour du village de Tanneron, les paysages mêlent mimosa cultivé et végétation du massif. Avant de partir, vérifiez les accès et respectez les propriétés et cultures. Pour profiter des fleurs, observez-les sur place et photographiez-les sans prélever de branches."] },
          { title: "Avec Rando d’Azur : deux façons de participer", paragraphs: ["Les groupes constitués peuvent demander une expérience privée. Des randonnées ouvertes aux individuels sont également proposées à dates précises : 35 € par personne, goûter au mimosa inclus. Ces sorties auront lieu à Cannes Croix des Gardes les samedis du 16 janvier au 27 février 2027, de 9 h à 11 h, avec 6 à 15 participants. Réservation sur Regiondo, sous réserve de confirmation du départ."] },
        ],
        faqs: [
          { question: "Faut-il un guide pour voir le mimosa ?", answer: "Pas nécessairement. Une promenade autonome se prépare avec un parcours autorisé, la météo et des informations d’accès à jour. Une sortie guidée apporte des explications et un parcours organisé pour le groupe." },
          { question: "Peut-on venir seul à une randonnée mimosa ?", answer: "Oui, sur les dates ouvertes aux individuels à 35 € par personne, goûter au mimosa inclus. Les sept samedis du 16 janvier au 27 février 2027 sont programmés à Cannes, de 9 h à 11 h, pour 6 à 15 participants. La réservation se fait sur Regiondo ; le départ est soumis au minimum de six inscrits." },
          { question: "La floraison est-elle garantie ?", answer: "Non. La météo, les variétés et le secteur modifient le calendrier. Le parcours est adapté aux conditions locales lorsque c’est possible." },
        ],
      },
      en: {
        title: "Where to see mimosa blossom: Cannes, Mandelieu and Tanneron",
        description: "Plan a French Riviera mimosa flower walk: flowering season, Cannes, Mandelieu and Tanneron, plus private walks and shared departures.",
        intro: "On the French Riviera, a mimosa walk means yellow flowering trees and winter landscapes. If you are searching for mimosa blossom rather than the brunch cocktail, start with the area, the conditions and the kind of walk you enjoy.",
        sections: [
          { title: "When is mimosa flowering season?", paragraphs: ["The Tanneron’s blossom season runs through winter into early spring, with January and February worth considering. Different varieties, exposures and weather mean that flowering does not happen everywhere at once. A calendar date cannot guarantee hills covered in yellow.", "Ask for a recent local observation before planning a blossom-focused trip. Photographs from previous outings show the landscape’s possibilities, not the conditions on your travel date."] },
          { title: "Cannes: Croix des Gardes", paragraphs: ["Croix des Gardes offers trails, mimosa trees and views towards Cannes Bay. It can make a nature break during a city stay. Check the route’s slopes and footing: being close to town does not automatically make a walk suitable for everyone."] },
          { title: "Mandelieu: between coast and hills", paragraphs: ["Mandelieu-la-Napoule is a starting point for exploring the Tanneron landscape from the coast. Confirm the actual meeting point, elevation and return journey. A forest departure may require different transport arrangements from a central hotel."] },
          { title: "Tanneron: a walk in the massif", paragraphs: ["Around Tanneron village, cultivated mimosa and the wider hillside landscape meet. Check access before setting off, stay on permitted paths and respect growers’ land. Leave branches on the trees and take photographs instead."] },
          { title: "Private groups and shared walks", paragraphs: ["Rando d’Azur offers private enquiries for existing groups. Shared walking departures are available at €35 per person, including a mimosa-themed snack. The walks are scheduled at Cannes Croix des Gardes on Saturdays from 16 January to 27 February 2027, 9–11 am, for 6–15 participants. Book through Regiondo, subject to departure confirmation."] },
        ],
        faqs: [
          { question: "Is this about mimosa flowers or a cocktail?", answer: "This guide is about the yellow flowering mimosa trees of the French Riviera, especially around Cannes, Mandelieu and Tanneron." },
          { question: "Can a solo traveller join?", answer: "Shared departures are available at €35 per person, with a mimosa-themed snack included. The seven Saturdays from 16 January to 27 February 2027 are scheduled in Cannes, 9–11 am, for 6–15 participants. Book through Regiondo; a minimum of six participants is required for departure." },
          { question: "Do I need a guide?", answer: "An independent walk is possible on permitted routes with up-to-date access and weather information. A guided outing adds local explanations and a route organised for your group." },
        ],
      },
    },
  },
  {
    slug: "produits-au-mimosa", image: "/images/mimosa/mimosa-outdoor-break.webp", alt: { fr: "Fleurs de mimosa et tasse lors d’une pause en plein air", en: "Mimosa flowers and a cup during an outdoor break" },
    sources: [
      { name: "Confiserie Florian — spécialités aux fleurs", url: "https://www.confiserieflorian.com/fleurs.html" },
    ],
    copy: {
      fr: {
        title: "Produits au mimosa : gourmandises, parfums et souvenirs de la Côte d’Azur",
        description: "Découvrez les saveurs florales de la Côte d’Azur, la Confiserie Florian, partenaire de Rando d’Azur, et nos balades avec goûter au mimosa.",
        intro: "Le mimosa se découvre aussi à travers les savoir-faire et les boutiques. Pour choisir un cadeau ou prolonger une balade, commencez par distinguer une spécialité alimentaire, un parfum de mimosa et un objet inspiré de ses fleurs : ils ne se choisissent pas de la même façon.",
        sections: [
          { title: "Où chercher des spécialités au mimosa ?", paragraphs: ["La Confiserie Florian, partenaire de Rando d’Azur, fait découvrir les saveurs du territoire avec ses spécialités aux fleurs et ses gels de fruits assortis, que Maddy fait goûter lors de certaines sorties. Pour une recherche précise autour du mimosa, vérifiez le parfum et les ingrédients de chaque référence : toute gourmandise florale n’est pas au mimosa."] },
          { title: "Bien lire l’étiquette", paragraphs: ["Pour une gourmandise, vérifiez les ingrédients, les allergènes et les indications du fabricant. Une évocation du mimosa dans le nom ou sur l’emballage ne suffit pas à décrire sa composition. Pour un cadeau, pensez aussi au transport et à la conservation.", "Ne préparez pas de recette à partir de fleurs cueillies lors d’une promenade sans identification et conseil adaptés. Une spécialité fabriquée pour l’alimentation ne doit pas être confondue avec une plante récoltée au hasard."] },
          { title: "Et les autres gourmandises florales ?", paragraphs: ["La Confiserie Florian, partenaire de Rando d’Azur, présente aussi des spécialités aux fleurs. Cela ne signifie pas que toutes sont au mimosa. La gamme et la composition de chaque référence doivent être vérifiées sur sa fiche : une dégustation florale peut faire découvrir d’autres parfums du territoire."] },
          { title: "Une pause gourmande après la balade", paragraphs: ["Le goûter au mimosa fait partie des randonnées individuelles à 35 € et de l’expérience privée mimosa présentée sur ce site. La composition précise dépend des disponibilités. Prévenez Maddy de vos allergies avant de réserver pour vérifier ce qui peut être proposé."] },
        ],
        faqs: [
          { question: "Rando d’Azur vend-il des produits au mimosa ?", answer: "Pas de vente de produits sur cette page. Elle indique des pistes de découverte et renvoie vers les boutiques concernées." },
          { question: "Quel produit est inclus dans le goûter ?", answer: "Le goûter au mimosa est inclus dans l’offre annoncée, mais aucune référence précise n’est garantie. Sa composition et les allergies sont à vérifier avant réservation." },
          { question: "Tous les produits aux fleurs sont-ils au mimosa ?", answer: "Non. Vérifiez le parfum, la composition et les ingrédients de chaque produit auprès du fabricant." },
        ],
      },
      en: {
        title: "Mimosa-flower products and gifts on the French Riviera",
        description: "Discover French Riviera floral treats, Rando d’Azur partner Confiserie Florian, and guided mimosa walks with a seasonal snack.",
        intro: "Looking for a gift inspired by the Riviera’s yellow mimosa flowers? Food specialities, scented products and floral souvenirs are different categories. This guide helps you find the right shop and check what a product actually contains.",
        sections: [
          { title: "Where to look", paragraphs: ["Rando d’Azur partner Confiserie Florian offers floral confectionery and assorted fruit jellies, which Maddy shares on selected outings. If you are looking specifically for mimosa, check each product’s flavour and ingredients: floral confectionery is not always mimosa-flavoured."] },
          { title: "Check the label", paragraphs: ["For food, read the ingredients, allergen information and storage instructions. A flower pictured on packaging does not explain the recipe. If you are taking a gift home, check whether it is suitable for your journey.", "Do not treat flowers collected on a walk as ready-to-eat ingredients. A food product made for consumption is different from a wild plant that has not been properly identified and assessed."] },
          { title: "Other floral specialities", paragraphs: ["Rando d’Azur partner Confiserie Florian also offers floral confectionery. Not every flower-based product is mimosa-flavoured. Check the manufacturer’s individual product information rather than assuming a flavour from the range’s name."] },
          { title: "A snack on the trail", paragraphs: ["A mimosa-themed snack is included in the €35 shared walks and in the private mimosa experience described on this site. The exact selection depends on availability. Tell Maddy about allergies before booking so that suitability can be checked."] },
        ],
        faqs: [
          { question: "Can I buy mimosa products from Rando d’Azur?", answer: "This is a discovery guide, not an online product shop. Follow the retailer links for purchases and availability." },
          { question: "Is a particular snack guaranteed?", answer: "No specific brand or recipe is guaranteed. Check the snack’s composition and any allergy requirements before booking." },
          { question: "Does mimosa here mean the cocktail?", answer: "Here it refers to products inspired by the yellow mimosa flower. Read each product’s own label to understand its ingredients." },
        ],
      },
    },
  },
  {
    slug: "hiver-cote-azur", image: "/images/destinations/esterel/cap-dramont-coastal-trail.jpg", alt: { fr: "Roches rouges et sentier côtier du cap Dramont", en: "Red rocks and coastal trail at Cap Dramont" },
    sources: [
      { name: "Nice Côte d’Azur — Carnaval 2027", url: "https://www.explorenicecotedazur.com/evenement/carnaval-de-nice-2027-vive-lamour/" },
      { name: "Fête du Citron® — programme officiel", url: "https://www.fete-du-citron.com/programme" },
    ],
    copy: {
      fr: {
        title: "Que faire sur la Côte d’Azur en hiver ? Nature, mimosa et fêtes",
        description: "Préparez un séjour d’hiver sur la Côte d’Azur : balades, mimosa, Carnaval de Nice et Fête du Citron, avec les conseils de Rando d’Azur.",
        intro: "Un séjour hivernal sur la Côte d’Azur peut alterner promenades, découvertes gourmandes et rendez-vous festifs. Pour en profiter, construisez votre programme autour de quelques moments choisis plutôt que de vouloir relier toutes les villes dans la même journée.",
        sections: [
          { title: "Garder une place pour la nature", paragraphs: ["Depuis Cannes, envisagez une balade de bord de mer, une découverte de la Croix des Gardes ou un parcours dans l’Estérel adapté aux conditions. Une sortie courte peut compléter une journée de visite sans la transformer en défi sportif. Vérifiez la météo, les accès et l’heure du retour avant de partir."] },
          { title: "Prévoir une parenthèse mimosa", paragraphs: ["Les secteurs de Cannes, Mandelieu et Tanneron permettent d’aborder la saison des fleurs sous des angles différents. Choisissez votre sortie à partir des conditions observées, de votre mobilité et de votre transport. La floraison reste variable : elle ne se réserve pas comme une place de spectacle."] },
          { title: "Les rendez-vous de février 2027", paragraphs: ["Le Carnaval de Nice est annoncé du 9 au 28 février 2027 ; la Fête du Citron® à Menton du 13 au 28 février. Consultez les programmes et billetteries des organisateurs avant de réserver votre séjour. Les billets des fêtes sont indépendants des sorties Rando d’Azur."] },
          { title: "Un programme qui garde de la souplesse", paragraphs: ["Prévoyez une activité principale par demi-journée, du temps pour les déplacements et une alternative en cas de pluie. Une visite gourmande ou un moment en ville peut remplacer une sortie exposée. Le soleil d’hiver n’exclut ni le vent ni les averses.", "Rando d’Azur peut étudier une expérience privée selon vos centres d’intérêt. Pour les agences et DMC, précisez les dates, le nombre de voyageurs, leur langue et le lieu de séjour afin de construire une proposition réaliste."] },
        ],
        faqs: [
          { question: "Peut-on randonner en hiver sur la Côte d’Azur ?", answer: "Un parcours peut être envisagé selon la météo, les accès, le terrain et le niveau des participants. Il n’existe pas de garantie de beau temps." },
          { question: "Les billets des fêtes sont-ils inclus ?", answer: "Non. Les billets du Carnaval de Nice et de la Fête du Citron sont à vérifier et réserver auprès de leurs organisateurs, séparément des sorties Rando d’Azur." },
          { question: "Peut-on organiser une sortie pour des voyageurs étrangers ?", answer: "Oui, demandez une proposition en précisant la langue, le groupe, les dates et le lieu de séjour. Les modalités et disponibilités sont confirmées avant réservation." },
        ],
      },
      en: {
        title: "French Riviera in winter: walks, mimosa blossom and festivals",
        description: "Plan a winter French Riviera stay with nature walks, mimosa flowers, Nice Carnival and Menton’s Lemon Festival, with local guidance from Rando d’Azur.",
        intro: "A winter Riviera itinerary can combine time outdoors, local flavours and seasonal festivals. Give each part of the trip room to breathe: a coast-to-coast checklist is less enjoyable than a few well-planned days.",
        sections: [
          { title: "Make room for an outdoor morning", paragraphs: ["From Cannes, consider a coastal walk, Croix des Gardes or a route in the Estérel suited to the conditions. A short outing can complement a city stay without demanding a full hiking day. Check access, weather and your return plans before leaving."] },
          { title: "Follow the yellow blossom", paragraphs: ["Cannes, Mandelieu and Tanneron offer different ways into mimosa season. Choose based on current local observations, your walking ability and transport arrangements. Flowering is a natural process, not a timed attraction with guaranteed conditions."] },
          { title: "February 2027 festival dates", paragraphs: ["Nice Carnival is announced for 9–28 February 2027 and Menton’s Fête du Citron® for 13–28 February. Consult the organisers for programmes and tickets. Admission to these festivals is separate from any Rando d’Azur experience."] },
          { title: "Build in flexibility", paragraphs: ["Allow one main activity per half-day, with time for transfers and an alternative if it rains. A food-focused visit or city break can replace an exposed outdoor plan. Winter sunshine does not rule out wind or showers.", "Rando d’Azur can discuss a private outing around your interests. Agencies and DMCs should include travel dates, group size, language and accommodation area so that the proposal fits the actual itinerary."] },
        ],
        faqs: [
          { question: "Can we hike on the French Riviera in winter?", answer: "A suitable walk can be considered depending on conditions, access and your group’s ability. Fine weather cannot be guaranteed." },
          { question: "Are festival tickets included?", answer: "No. Check and book Nice Carnival and Lemon Festival tickets with their organisers, separately from Rando d’Azur outings." },
          { question: "Can an agency request a private experience?", answer: "Yes. Share dates, group size, preferred language and accommodation area. Arrangements and availability are confirmed before booking." },
        ],
      },
    },
  },
  {
    slug: "carnaval-nice-balades-hiver", image: "/images/hero/french-riviera-panoramic-picnic.jpg", alt: { fr: "Paysage de la Côte d’Azur pour une parenthèse nature", en: "French Riviera landscape for an outdoor break" },
    sources: [{ name: "Office de Tourisme Nice Côte d’Azur — Carnaval 2027", url: "https://www.explorenicecotedazur.com/evenement/carnaval-de-nice-2027-vive-lamour/" }],
    copy: {
      fr: {
        title: "Carnaval de Nice 2027 : ajouter une balade nature à votre séjour",
        description: "Carnaval de Nice du 9 au 28 février 2027 : préparez votre séjour et complétez les festivités par une découverte nature sur la Côte d’Azur.",
        intro: "Vous venez pour le Carnaval de Nice et souhaitez aussi découvrir la Côte d’Azur dehors ? Gardez une demi-journée à part pour une balade. Elle permet de changer de rythme entre deux rendez-vous du programme, sans chercher à tout faire le même jour.",
        sections: [
          { title: "Les dates à retenir", paragraphs: ["L’office de tourisme annonce le Carnaval de Nice du 9 au 28 février 2027, sur le thème « Vive l’Amour ». Vérifiez le calendrier précis des manifestations et les conditions de billetterie sur le site de l’organisateur : toutes les journées ne correspondent pas au même spectacle."] },
          { title: "Choisir une sortie compatible avec votre séjour", paragraphs: ["Avant d’ajouter une randonnée, partez de votre hébergement et de vos billets déjà réservés. Pour une sortie dans les secteurs de Cannes, Mandelieu ou Tanneron, prévoyez une demi-journée dédiée et les déplacements. Une activité annoncée au départ de Cannes ne doit pas être comprise comme un départ du centre de Nice.", "Une découverte du mimosa peut compléter le séjour si les conditions s’y prêtent. Précisez votre temps disponible, votre niveau de marche et vos contraintes de retour pour éviter un programme trop serré."] },
          { title: "Voyager en famille ou en petit groupe", paragraphs: ["Avec des enfants, mieux vaut une promenade au rythme du groupe qu’une longue succession d’étapes. Mentionnez leur âge et vos besoins au moment de la demande. Pour une agence réceptive, indiquez aussi la langue de guidage et les modalités de transport souhaitées."] },
          { title: "Ce que propose Rando d’Azur", paragraphs: ["Rando d’Azur étudie des expériences nature privées sur demande et prépare des dates mimosa ouvertes aux individuels à 35 €, goûter inclus. Cette page est un guide indépendant pour compléter votre séjour : elle ne vend pas de billets du Carnaval et n’annonce aucun transfert inclus."] },
        ],
        faqs: [
          { question: "Quelles sont les dates du Carnaval de Nice 2027 ?", answer: "Les dates annoncées par l’office de tourisme sont du 9 au 28 février 2027. Le programme détaillé est à vérifier auprès de l’organisateur." },
          { question: "La randonnée comprend-elle l’entrée au Carnaval ?", answer: "Non. Les prestations Rando d’Azur sont distinctes des manifestations et billets du Carnaval." },
          { question: "Un transport depuis Nice est-il inclus ?", answer: "Aucun transport depuis Nice n’est inclus par défaut. Le lieu de rendez-vous et les déplacements doivent être confirmés pour chaque offre." },
        ],
      },
      en: {
        title: "Nice Carnival 2027: add a nature walk to your Riviera stay",
        description: "Nice Carnival runs from 9 to 28 February 2027. Plan an independent nature break or enquire about a guided mimosa walk during your Riviera stay.",
        intro: "Visiting for Nice Carnival and hoping to spend time outdoors too? Keep a separate half-day for a walk, rather than squeezing the Riviera’s hills between two fixed festival bookings.",
        sections: [
          { title: "The announced dates", paragraphs: ["The tourist office announces Nice Carnival for 9–28 February 2027, with the theme “Vive l’Amour”. Consult the organiser for individual performances, ticket conditions and any updates. The overall festival period is not a daily schedule of identical events."] },
          { title: "Fit the outing to your actual itinerary", paragraphs: ["Start with your accommodation and any tickets you already hold. A walk around Cannes, Mandelieu or Tanneron needs its own time for travelling and meeting your guide. A Cannes-area experience should not be mistaken for a departure from central Nice.", "A mimosa-flower walk may complement the trip when conditions allow. Share your available time, walking ability and latest return time before choosing a route."] },
          { title: "Families and travel-trade groups", paragraphs: ["For families, a manageable walk is often a better match than a crowded day of transfers. Include children’s ages when enquiring. Agencies and DMCs should also specify guiding language and any transport requirements."] },
          { title: "Independent outdoor experiences", paragraphs: ["Rando d’Azur discusses private nature experiences on request and is preparing selected €35 shared mimosa walks, snack included. This independent guide does not sell Carnival admission or imply that transfers are included."] },
        ],
        faqs: [
          { question: "When is Nice Carnival 2027?", answer: "The tourist office announces 9–28 February 2027. Check individual events and updates with the organiser." },
          { question: "Does a Rando d’Azur walk include Carnival admission?", answer: "No. Festival admission and Rando d’Azur experiences are separate bookings." },
          { question: "Is a transfer from Nice included?", answer: "No transfer from Nice is included by default. Confirm the meeting point and transport arrangements for the particular outing." },
        ],
      },
    },
  },
  {
    slug: "fete-citron-menton-nature", image: "/images/mimosa/mimosa-sensory-discovery.webp", alt: { fr: "Découverte des fleurs lors d’une sortie nature, photo d’archive Rando d’Azur", en: "Discovering flowers on a nature outing, Rando d’Azur archive photograph" },
    sources: [
      { name: "Fête du Citron® — programme officiel 2027", url: "https://www.fete-du-citron.com/programme" },
      { name: "Val Rahmeh-Menton — questions fréquentes", url: "https://www.jardinbotaniquevalrahmehmenton.fr/fr/questions-frequentes" },
    ],
    copy: {
      fr: {
        title: "Fête du Citron® à Menton 2027 : agrumes, jardins et idées nature",
        description: "Fête du Citron à Menton du 13 au 28 février 2027 : programme officiel, jardins et idées pour prolonger un séjour nature sur la Côte d’Azur.",
        intro: "Un séjour pour la Fête du Citron® peut aussi donner envie de regarder les jardins et les paysages de la Côte d’Azur. L’idée : garder du temps pour les agrumes de Menton, puis organiser une autre journée autour des fleurs et des sentiers.",
        sections: [
          { title: "Les dates officielles de l’édition 2027", paragraphs: ["La Fête du Citron® est annoncée du 13 au 28 février 2027. Le programme distingue plusieurs rendez-vous et formats : consultez les dates, horaires et billets directement sur le site officiel avant de construire votre journée."] },
          { title: "Prolonger la découverte par un jardin", paragraphs: ["Le jardin botanique Val Rahmeh-Menton permet d’aborder les collections végétales dans un autre cadre. Le jardin indique que les agrumes portent leurs fruits en hiver. Vérifiez les horaires et conditions de visite avant de vous déplacer ; aucune entrée n’est comprise dans une sortie Rando d’Azur par défaut."] },
          { title: "Mimosa et citron : deux étapes, deux ambiances", paragraphs: ["Pour associer votre séjour à une balade mimosa autour de Cannes, Mandelieu ou Tanneron, prévoyez un créneau distinct et son transport. Menton et ces secteurs ne constituent pas un seul lieu de rendez-vous. Un programme agréable doit garder une marge plutôt que juxtaposer des réservations éloignées.", "La floraison du mimosa dépend des conditions locales. Confirmez le secteur choisi et ne basez pas tout votre séjour sur la promesse d’un paysage identique à une photo."] },
          { title: "Construire votre parenthèse nature", paragraphs: ["Rando d’Azur peut discuter d’une sortie privée selon votre groupe et vos dates. Des départs mimosa individuels à 35 €, goûter inclus, sont en préparation. Les prestations, déplacements et billets des manifestations restent à distinguer : demandez les inclusions exactes avant réservation."] },
        ],
        faqs: [
          { question: "Quand a lieu la Fête du Citron 2027 ?", answer: "Le site officiel annonce du 13 au 28 février 2027. Vérifiez le programme pour choisir votre manifestation et votre billet." },
          { question: "Peut-on combiner Menton et une sortie mimosa ?", answer: "Oui, en prévoyant des créneaux et déplacements adaptés. Les sorties mimosa de Rando d’Azur sont présentées dans les secteurs de Cannes, Mandelieu et Tanneron." },
          { question: "Rando d’Azur est-il l’organisateur de la fête ?", answer: "Non. Ce guide est indépendant ; la billetterie et l’organisation de la Fête du Citron relèvent de ses organisateurs." },
        ],
      },
      en: {
        title: "Menton Lemon Festival 2027: citrus, gardens and nature ideas",
        description: "Menton’s Lemon Festival runs from 13 to 28 February 2027. Find official information and ideas for gardens and a separate French Riviera mimosa walk.",
        intro: "Coming to Menton for the Fête du Citron®? Make time for the town’s citrus theme, then consider a separate day for gardens or the Riviera’s yellow mimosa blossom. Good planning keeps the places and bookings clear.",
        sections: [
          { title: "The official 2027 dates", paragraphs: ["The Lemon Festival is announced for 13–28 February 2027. There are different events and formats within that period. Use the official programme to check your chosen day, times and tickets before arranging other activities."] },
          { title: "Add a garden visit", paragraphs: ["Val Rahmeh-Menton botanical garden offers another way to explore plant collections. The garden describes citrus fruit on its trees in winter. Check current opening and admission conditions before visiting; entry is not included in a Rando d’Azur outing by default."] },
          { title: "Citrus and mimosa: separate stops", paragraphs: ["A mimosa walk around Cannes, Mandelieu or Tanneron needs a separate slot and transport plan from Menton. These areas are not one meeting point. Allow enough time between bookings to enjoy the experience rather than rushing across the coast.", "Mimosa flowering varies with local conditions. Confirm the chosen sector and treat photographs as records of past outings rather than a promise for your own date."] },
          { title: "Plan your outdoor experience", paragraphs: ["Rando d’Azur can discuss a private walk for your party and dates. Selected €35 shared mimosa departures, snack included, are also being prepared. Check exactly what is included: outings, travel and festival admission are distinct arrangements."] },
        ],
        faqs: [
          { question: "When is Menton’s Lemon Festival in 2027?", answer: "The official dates are 13–28 February 2027. Consult the programme to select the right event and ticket." },
          { question: "Can we combine the festival and a mimosa walk?", answer: "Yes, with suitable separate time slots and travel arrangements. Rando d’Azur’s mimosa experiences are described around Cannes, Mandelieu and Tanneron." },
          { question: "Does Rando d’Azur organise the festival?", answer: "No. This is an independent guide. The festival’s organisers manage its programme and ticketing." },
        ],
      },
    },
  },
  {
    slug: "fleurs-jardins-botanique-alpes-maritimes", image: "/images/destinations/pays-de-fayence/tanneron-mimosa-eucalyptus.jpg", alt: { fr: "Mimosa et eucalyptus dans les paysages de Tanneron", en: "Mimosa and eucalyptus in the Tanneron landscape" },
    sources: [
      { name: "Mandelieu Tourisme — arboretum de mimosa", url: "https://www.mandelieu-tourisme.com/evenementiel/mimosa/exposition-mimosa/" },
      { name: "Muséum national d’Histoire naturelle — Val Rahmeh-Menton", url: "https://www.jardinbotaniquevalrahmehmenton.fr/fr/un-jardin-botanique" },
    ],
    copy: {
      fr: {
        title: "Fleurs, jardins et botanique dans les Alpes-Maritimes : par où commencer ?",
        description: "Mimosa, jardins et balades botaniques dans les Alpes-Maritimes : des pistes pour observer les plantes et découvrir les savoir-faire de la Côte d’Azur.",
        intro: "Vous aimez les fleurs et souhaitez découvrir la végétation locale ? Une balade botanique, un arboretum et une visite de jardin apportent des regards complémentaires. Commencez par choisir ce qui vous intéresse : observer dans le paysage, comparer des collections ou comprendre un savoir-faire horticole.",
        sections: [
          { title: "Observer les plantes dans leur paysage", paragraphs: ["Une promenade accompagnée permet de prendre le temps de regarder feuillages, parfums et milieux. Chez Rando d’Azur, la découverte se prépare selon la saison, le secteur et le groupe. Décrivez vos centres d’intérêt dès la demande plutôt que de réserver une sortie uniquement à partir d’une liste de noms de plantes."] },
          { title: "Comparer des mimosas à Mandelieu", paragraphs: ["L’office de tourisme présente un arboretum consacré au mimosa avec une promenade et des panneaux d’information. C’est une piste pour regarder les différences entre spécimens et compléter une découverte des collines. Consultez la source officielle pour préparer votre visite et les éventuelles animations."] },
          { title: "Explorer les collections de Menton", paragraphs: ["Le Val Rahmeh-Menton présente des collections méditerranéennes, subtropicales et tropicales. Un jardin de collection permet de comparer des végétaux dans un cadre différent du sentier. Les conditions de visite sont à vérifier directement auprès du jardin."] },
          { title: "Botanique et horticulture : préciser votre recherche", paragraphs: ["La botanique s’intéresse aux plantes ; l’horticulture concerne notamment leur culture. Si vous cherchez une pépinière, un conseil de plantation ou un achat de végétaux, cette page ne remplace pas un professionnel de cette activité. Si vous cherchez à découvrir les paysages et leurs plantes, une sortie nature peut être adaptée.", "Pour une visite de production ou de forcerie, l’accès et l’accueil doivent être confirmés auprès du site concerné. Aucune visite chez un producteur n’est automatiquement comprise dans les balades Rando d’Azur."] },
        ],
        faqs: [
          { question: "Proposez-vous des balades autour des plantes ?", answer: "Rando d’Azur présente des expériences autour des plantes et des paysages. Indiquez la saison, vos attentes et le niveau du groupe pour discuter du parcours adapté." },
          { question: "Peut-on acheter des plantes auprès de Rando d’Azur ?", answer: "Non. Rando d’Azur organise des expériences ; il ne s’agit pas d’une pépinière ni d’un service de jardinage." },
          { question: "Une visite de jardin ou de forcerie est-elle incluse ?", answer: "Pas par défaut. L’accès, les éventuels billets et les modalités d’accueil sont à confirmer séparément dans la proposition." },
        ],
      },
      en: {
        title: "Flowers, gardens and botanical walks in the Alpes-Maritimes",
        description: "Explore French Riviera plants through mimosa walks, arboretums and botanical gardens, with practical ideas from Cannes to Menton.",
        intro: "Interested in flowers beyond a quick photograph? A botanical walk, an arboretum and a garden visit offer different perspectives. Choose whether you want to observe plants in the landscape, compare collections or learn about growing traditions.",
        sections: [
          { title: "Look closely on a nature walk", paragraphs: ["An accompanied walk creates time to notice foliage, scent and habitats. Rando d’Azur discusses routes according to season, area and group. Describe your interests when enquiring rather than expecting a fixed list of plants on every departure."] },
          { title: "Compare mimosa specimens in Mandelieu", paragraphs: ["The tourist office describes a mimosa arboretum with a walk and information panels. It offers a different perspective from the surrounding hills. Consult the official source for visiting details and any organised activities."] },
          { title: "Discover Menton’s garden collections", paragraphs: ["Val Rahmeh-Menton brings together Mediterranean, subtropical and tropical collections. A collection garden lets you compare plants in a different setting from an open trail. Check the garden’s own current visitor information before planning the trip."] },
          { title: "Botany or horticulture?", paragraphs: ["Botany focuses on plants; horticulture includes their cultivation. If you need a nursery, plants to purchase or planting advice, contact a professional in that field. If you want to explore landscapes and discover their plants, a nature experience may fit your plans.", "A grower or forcing-house visit requires an actual access arrangement. It is not automatically included in a Rando d’Azur walk. Confirm any admission, transport and hosting details before booking."] },
        ],
        faqs: [
          { question: "Can I request a plant-focused walk?", answer: "Yes. Explain your interests, travel season and group’s walking ability so that a suitable proposal can be discussed." },
          { question: "Does Rando d’Azur sell plants?", answer: "No. Rando d’Azur offers experiences, not nursery stock or gardening services." },
          { question: "Is garden or grower admission included?", answer: "Not by default. Confirm any visits, admission and hosting arrangements in the specific proposal." },
        ],
      },
    },
  },
  {
    slug: "fetes-du-mimosa-mandelieu-tanneron",
    lastModified: "2026-11-05",
    image: mimosaImage,
    alt: flowerAlt,
    sources: [
      { name: "Mandelieu Tourisme — Fête du Mimosa 2027", url: "https://www.mandelieu-tourisme.com/evenementiel/mimosa/fete-mimosa/" },
      { name: "Pays de Fayence — Fête du Mimosa à Tanneron 2027", url: "https://www.paysdefayence.com/evenements/fete-du-mimosa/" },
      { name: "Côte d’Azur France — découvrir le mimosa à Mandelieu", url: "https://cotedazurfrance.fr/a-faire/fleurs-et-parfums/mandelieu-capitale-mimosa/" },
      { name: "Route du Mimosa — randonnée mimosa privée à Tanneron", url: "https://routedumimosa.com/fr/animation/sports/tanneron/randonnee-mimosa-privee-a-tanneron-8040528/" },
    ],
    copy: {
      fr: {
        title: "Fêtes du Mimosa 2027 : Mandelieu et Tanneron, dates et randonnées",
        description: "Fête du Mimosa à Mandelieu du 10 au 14 février et à Tanneron le 31 janvier 2027 : programmes officiels, randonnées mimosa et conseils pratiques.",
        intro: "Deux fêtes du Mimosa ont lieu dans des communes différentes en 2027 : Tanneron le 31 janvier et Mandelieu-la-Napoule du 10 au 14 février. Voici les dates annoncées par les offices de tourisme, des repères pour organiser votre séjour et des idées de randonnée dans les collines fleuries. Les fêtes et les sorties guidées sont distinctes : vérifiez leurs lieux, horaires et réservations séparément.",
        sections: [
          {
            title: "Quelles sont les dates de la Fête du Mimosa 2027 ?",
            paragraphs: [
              "L’Office de Tourisme de Mandelieu annonce la Fête du Mimosa du 10 au 14 février 2027, sur le thème « Le mimosa entre en jeux ». Le programme prévoit cinq jours d’animations dans la ville, avec notamment des défilés et corsos. Les chars sont annoncés le samedi 13 au soir et le dimanche 14 après-midi. Consultez la page officielle pour le programme détaillé, les horaires et les éventuelles mises à jour avant votre venue.",
              "La Fête du Mimosa célèbre Mandelieu en février, tandis que la floraison s’observe sur une période plus large et varie selon les secteurs, les variétés et la météo. Une date de fête ne garantit donc pas que chaque sentier soit en pleine floraison."
            ]
          },
          {
            title: "À Tanneron : la fête du Mimosa le 31 janvier",
            paragraphs: [
              "La Fête du Mimosa de Tanneron est annoncée le dimanche 31 janvier 2027, de 9 h à 17 h, et peut être annulée en cas de mauvais temps. Le programme publié prévoit un marché, une procession, un concours des producteurs de mimosa, un apéritif offert par la municipalité et un corso fleuri de 14 h à 16 h. Vérifiez les informations officielles avant le départ, notamment en cas de météo incertaine.",
              "Le stationnement et la circulation sont aménagés pour l’événement ; certains accès au village sont fermés aux véhicules pendant la journée. Consultez les consignes de l’Office de Tourisme du Pays de Fayence pour choisir votre parking et vérifier les navettes ou accès à pied."
            ]
          },
          {
            title: "Où randonner dans le mimosa autour de Mandelieu ?",
            paragraphs: [
              "Mandelieu-la-Napoule est une porte d’entrée vers les paysages du Tanneron. Selon votre hébergement et votre moyen de transport, vous pouvez aussi envisager la Croix des Gardes à Cannes ou les environs du village de Tanneron. Le meilleur secteur dépend de l’état de floraison, des conditions d’accès et du niveau de marche de votre groupe.",
              "Pour une randonnée mimosa, prévoyez de bonnes chaussures, de l’eau et des vêtements adaptés à la météo. Vérifiez le point de rendez-vous et le retour avant de réserver : les départs en forêt ne se trouvent pas nécessairement près d’une gare ou d’un centre-ville. Restez sur les chemins autorisés et admirez les fleurs sans couper de branches."
            ]
          },
          {
            title: "Prolonger la fête par une randonnée guidée",
            paragraphs: [
              "Rando d’Azur propose des expériences mimosa privées sur demande, à pied ou à vélo, autour de Cannes, Mandelieu et Tanneron. Pour la saison 2027, l’offre privée est annoncée du 15 janvier au 28 février, pour 2 à 12 personnes, environ deux heures, au tarif de 250 € pour le groupe. Le lieu, le parcours et la disponibilité doivent être confirmés avec Maddy selon votre date, votre niveau et les conditions locales ; la location de vélo n’est pas comprise.",
              "Des randonnées à pied ouvertes aux individuels sont également programmées à la Croix des Gardes, à Cannes, les samedis du 16 janvier au 27 février 2027, de 9 h à 11 h : 35 € par personne, goûter au mimosa inclus, de 6 à 15 participants. Le samedi 13 février tombe pendant la Fête du Mimosa, mais la randonnée a lieu à Cannes et constitue une activité séparée du programme de Mandelieu. Le départ est confirmé manuellement selon les inscriptions."
            ]
          },
          {
            title: "Organiser votre séjour sans courir",
            paragraphs: [
              "La Fête du Mimosa attire des visiteurs dans plusieurs quartiers de Mandelieu. Prévoyez du temps pour rejoindre les animations et vérifiez les informations de circulation et de stationnement publiées par la ville. Si vous ajoutez une randonnée, gardez-lui un créneau distinct et confirmez les déplacements entre votre hébergement, le lieu de départ et les événements.",
              "Si vous séjournez à Cannes, vous pouvez choisir une balade à la Croix des Gardes et rejoindre Mandelieu séparément pour la fête. Pour une sortie dans le massif du Tanneron, demandez à l’avance les modalités de transport et le point de rendez-vous exact. Aucun transfert n’est inclus par défaut dans les expériences Rando d’Azur."
            ]
          }
        ],
        faqs: [
          {
            question: "Quand a lieu la Fête du Mimosa à Tanneron en 2027 ?",
            answer: "L’Office de Tourisme du Pays de Fayence annonce le dimanche 31 janvier 2027, de 9 h à 17 h, avec une annulation possible en cas de mauvais temps. Vérifiez les dernières informations avant de partir."
          },
          {
            question: "Quand a lieu la Fête du Mimosa à Mandelieu en 2027 ?",
            answer: "L’Office de Tourisme annonce l’édition du 10 au 14 février 2027. Le programme détaillé et ses mises à jour sont à consulter sur le site officiel de Mandelieu Tourisme."
          },
          {
            question: "Peut-on faire une randonnée mimosa pendant la Fête du Mimosa ?",
            answer: "Oui, une sortie guidée peut se prévoir séparément, sous réserve de disponibilité, d’accès et de conditions météo. Rando d’Azur programme notamment une randonnée ouverte aux individuels à Cannes le samedi 13 février 2027, de 9 h à 11 h ; elle ne fait pas partie du programme officiel de la fête à Mandelieu."
          },
          {
            question: "La randonnée est-elle au départ de Mandelieu ?",
            answer: "Pas pour la randonnée ouverte aux individuels, qui est prévue à la Croix des Gardes, à Cannes. Une sortie privée peut être demandée autour de Cannes, Mandelieu ou Tanneron ; le point de départ exact doit être confirmé avant la réservation."
          },
          {
            question: "La floraison du mimosa est-elle garantie pendant la fête ?",
            answer: "Non. La floraison dépend des variétés, de la météo et du secteur. Le parcours d’une sortie privée est choisi selon les conditions observées, sans garantie que tous les mimosas soient en fleurs."
          },
          {
            question: "La randonnée inclut-elle les animations ou le transport ?",
            answer: "Non. Les activités Rando d’Azur sont distinctes de la Fête du Mimosa, et aucun transfert n’est inclus par défaut. Consultez le programme officiel de Mandelieu et confirmez séparément les déplacements."
          }
        ]
      },
      en: {
        title: "2027 Mimosa Festivals in Mandelieu and Tanneron: dates and walks",
        description: "Mandelieu’s Mimosa Festival runs 10–14 February and Tanneron’s is on 31 January 2027. Find official details, mimosa walks and local tips.",
        intro: "Two Mimosa Festivals take place in different towns in 2027: Tanneron on 31 January and Mandelieu-la-Napoule from 10 to 14 February. Find dates announced by the local tourist offices, practical planning notes and guided walk ideas for the flowering hills. Festival events and guided walks are separate activities; check their locations, times and bookings independently.",
        sections: [
          {
            title: "When is the 2027 Mimosa Festival?",
            paragraphs: [
              "Mandelieu’s tourist office announces the Mimosa Festival for 10–14 February 2027, with the theme “Mimosa in Play”. The five-day programme includes town events and parades. Floats are announced for Saturday evening, 13 February, and Sunday afternoon, 14 February. Check the official page for the detailed programme, times and updates before travelling.",
              "The festival takes place in February, while mimosa flowering spans a broader season and varies by area, variety and weather. Festival dates do not guarantee that every trail will be in full bloom."
            ]
          },
          {
            title: "In Tanneron: Mimosa Festival on 31 January",
            paragraphs: [
              "Tanneron’s Mimosa Festival is announced for Sunday, 31 January 2027, from 9 am to 5 pm. It may be cancelled in bad weather. The published programme includes a market, a procession, a mimosa-growers’ competition, a municipal aperitif and a flower-covered parade from 2 to 4 pm. Check the official information before travelling, especially if the weather is uncertain.",
              "Traffic and parking arrangements apply during the festival, and some village access is closed to vehicles during the day. Consult the Pays de Fayence tourist office for current parking, shuttle and walking-access instructions."
            ]
          },
          {
            title: "Where can you walk among mimosa near Mandelieu?",
            paragraphs: [
              "Mandelieu-la-Napoule is a gateway to the Tanneron landscapes. Depending on where you stay and how you travel, you could also consider Croix des Gardes in Cannes or the hills around Tanneron village. The right area depends on current flowering, access conditions and your group’s walking level.",
              "For a mimosa walk, bring sturdy shoes, water and clothing suited to the weather. Confirm the meeting point and return journey before booking: a forest trailhead may not be close to a train station or town centre. Stay on permitted paths and enjoy the flowers without cutting branches."
            ]
          },
          {
            title: "Add a guided walk to your festival visit",
            paragraphs: [
              "Rando d’Azur takes private mimosa experience enquiries for walking or cycling around Cannes, Mandelieu and Tanneron. For the 2027 season, the private experience is listed from 15 January to 28 February for 2–12 people, lasts around two hours and costs €250 for the group. The date, location and route must be confirmed with Maddy based on availability, your group’s level and local conditions. Bicycle rental is not included.",
              "Shared guided walks on foot are also scheduled at Croix des Gardes in Cannes on Saturdays from 16 January to 27 February 2027, 9–11 am: €35 per person, including a mimosa-themed snack, for 6–15 participants. Saturday, 13 February falls during the festival, but the walk takes place in Cannes and is separate from Mandelieu’s official programme. Departures are manually confirmed according to registrations."
            ]
          },
          {
            title: "Plan a relaxed stay",
            paragraphs: [
              "The Mimosa Festival brings visitors to several parts of Mandelieu. Leave time to reach events and check the town’s current traffic and parking information. If you add a walk, give it a separate time slot and confirm travel between your accommodation, the trailhead and festival events.",
              "If you are staying in Cannes, you can walk at Croix des Gardes and travel separately to Mandelieu for the festival. For a Tanneron outing, ask in advance about transport and the exact meeting point. Rando d’Azur experiences do not include a transfer by default."
            ]
          }
        ],
        faqs: [
          {
            question: "When is Tanneron’s Mimosa Festival in 2027?",
            answer: "The Pays de Fayence tourist office announces Sunday, 31 January 2027, from 9 am to 5 pm; the event may be cancelled in bad weather. Check for updates before travelling."
          },
          {
            question: "When is the Mandelieu Mimosa Festival in 2027?",
            answer: "The tourist office announces 10–14 February 2027. Check Mandelieu Tourisme’s official page for the detailed programme and updates."
          },
          {
            question: "Can I go on a mimosa walk during the festival?",
            answer: "A guided outing can be arranged separately, subject to availability, access and weather. Rando d’Azur has a shared walk scheduled in Cannes on Saturday, 13 February 2027, from 9–11 am; it is not part of Mandelieu’s official festival programme."
          },
          {
            question: "Does the shared walk start in Mandelieu?",
            answer: "No. The shared walk is scheduled at Croix des Gardes in Cannes. A private outing can be requested around Cannes, Mandelieu or Tanneron; confirm its exact meeting point before booking."
          },
          {
            question: "Is mimosa flowering guaranteed during the festival?",
            answer: "No. Flowering varies with the weather, variety and location. A private route is chosen according to observed conditions, but full bloom cannot be guaranteed."
          },
          {
            question: "Does a guided walk include festival events or transport?",
            answer: "No. Rando d’Azur experiences are separate from the festival programme, and transfers are not included by default. Check the official Mandelieu programme and arrange travel separately."
          }
        ]
      }
    }
  },
  {
    slug: "randonnee-raclette-esterel",
    coverCaption: { fr: "Le pique-nique raclette avec vue sur les reliefs de l’Estérel.", en: "A raclette picnic with a view across the Estérel hills." },
    lastModified: "2026-11-05",
    image: "/images/journal/raclette-esterel-repas.jpg",
    alt: {
      fr: "Fromages, pommes de terre et charcuterie pour une raclette au cœur de l’Estérel",
      en: "Cheese, potatoes and cured meat for a raclette break in the Estérel"
    },
    photos: [
      {
        image: "/images/journal/randonneuses-esterel.jpg",
        alt: { fr: "Deux randonneuses poursuivent leur chemin dans le massif de l’Estérel", en: "Two hikers continue along a trail in the Estérel hills" },
        caption: { fr: "On prend de la hauteur dans l’Estérel… et on garde un peu d’énergie pour la suite.", en: "Up into the Estérel hills… with a little energy saved for what comes next." }
      },
      {
        image: "/images/journal/raclette-esterel-service.jpg",
        alt: { fr: "Du fromage fondu servi pendant la pause raclette dans l’Estérel", en: "Melted cheese being served during a raclette break in the Estérel" },
        caption: { fr: "Au sommet, à mi-parcours : la pause raclette. Oui, le fromage fondu a aussi mérité sa montée.", en: "At the summit, halfway through: raclette break. The melted cheese earned that climb too." }
      }
    ],
    sources: [],
    copy: {
      fr: {
        title: "La vie est plus chouette quand on mange de la raclette !",
        description: "Une randonnée dans l’Estérel, une raclette au sommet à mi-parcours, puis on repart : l’idée anti-grisaille de novembre signée Rando d’Azur.",
        intro: "En novembre, quand le moral hésite entre « petite balade » et « plaid jusqu’au printemps », nous avons trouvé un compromis très sérieux : mettre les chaussures de rando… et emporter de quoi faire une raclette. Parce que la vie est plus chouette quand on mange de la raclette !",
        sections: [
          {
            title: "D’abord, on marche. Le fromage attend sagement.",
            paragraphs: [
              "Direction les sentiers et les roches rouges de l’Estérel. On avance, on profite du paysage, on prend l’air… et on peut commencer à se demander si le sac ne sent pas délicieusement le fromage.",
              "L’idée n’est pas de remplacer la randonnée par un pique-nique. C’est de donner à la randonnée une excellente raison de continuer."
            ]
          },
          {
            title: "Raclette au sommet… à mi-parcours !",
            paragraphs: [
              "La pause a lieu au sommet, à mi-chemin. Le fromage fond, les pommes de terre et la charcuterie sortent du sac, et tout le monde se rappelle soudain pourquoi novembre peut être un très bon mois pour randonner.",
              "Et non, ce n’est pas la ligne d’arrivée : après cette parenthèse fondante avec vue, on reprend le sentier. Il reste de la marche — mais, avouons-le, les jambes repartent avec un peu plus d’enthousiasme."
            ]
          },
          {
            title: "Un remède très scientifique à la grisaille ?",
            paragraphs: [
              "Nous n’avons pas mené d’essai clinique. En revanche, nous avons observé des sourires, des paysages de l’Estérel et du fromage fondu au milieu de la randonnée. La méthode reste à confirmer par les autorités compétentes en raclette.",
              "Blague à part, c’est surtout une sortie conviviale pour prendre l’air et partager un bon moment. La randonnée, le lieu de pause et l’organisation se définissent selon le groupe, les conditions et les disponibilités."
            ]
          },
          {
            title: "On vous organise une randonnée raclette ?",
            paragraphs: [
              "Cette randonnée raclette peut s’imaginer pour un groupe sur demande avec Rando d’Azur. Écris à Maddy pour parler de votre groupe et de vos envies ; le parcours et les modalités seront confirmés ensemble selon la saison, les conditions et les disponibilités.",
              "En attendant, voici notre conseil de novembre : si la journée semble un peu grise, ajoutez une balade… et éventuellement du fromage fondu."
            ]
          }
        ],
        faqs: [
          { question: "À quel moment a lieu la pause raclette ?", answer: "Au sommet, à mi-parcours. Après le repas, la randonnée continue : la raclette n’est pas le point d’arrivée !" },
          { question: "Peut-on réserver une randonnée raclette ?", answer: "Vous pouvez contacter Maddy pour envisager une sortie de groupe. Le parcours, les dates et les modalités sont à confirmer selon les disponibilités et les conditions." },
          { question: "La raclette est-elle toujours au programme ?", answer: "Cette idée dépend de l’organisation convenue pour la sortie. Contactez Rando d’Azur pour discuter du format et des modalités avant de réserver." }
        ]
      },
      en: {
        title: "Life is better with melted cheese: a raclette hike in the Estérel",
        description: "A November hike in the Estérel, melted cheese at the summit halfway through, then back on the trail: a cheerful raclette idea from Rando d’Azur.",
        intro: "In November, when your mood is choosing between “a little walk” and “blanket until spring”, we have a very serious compromise: hiking boots on, raclette in the bag. Because life is better with melted cheese!",
        sections: [
          {
            title: "First, we hike. The cheese can wait.",
            paragraphs: [
              "We head for the trails and red rocks of the Estérel. We walk, enjoy the scenery and get some fresh air… while wondering whether the backpack smells deliciously of cheese.",
              "The idea is not to replace the hike with a picnic. It is to give the hike an excellent reason to keep going."
            ]
          },
          {
            title: "Raclette at the summit… halfway through!",
            paragraphs: [
              "The break is at the summit, halfway along the hike. The cheese melts, potatoes and cured meat come out of the bags, and suddenly everyone remembers why November can be a very good month to hike.",
              "And no, this is not the finish line: after this scenic, cheesy pause, we set off again. There is still walking to do — though, admittedly, everyone’s legs seem a little more enthusiastic."
            ]
          },
          {
            title: "A scientifically proven cure for November blues?",
            paragraphs: [
              "We have not conducted a clinical trial. We have, however, observed smiles, Estérel scenery and melted cheese in the middle of a hike. The method is awaiting review by the relevant raclette authorities.",
              "Jokes aside, it is a sociable outing to enjoy the outdoors and share a good moment. The hike, break location and arrangements depend on the group, conditions and availability."
            ]
          },
          {
            title: "Would you like us to organise a raclette hike?",
            paragraphs: [
              "Rando d’Azur can discuss a raclette hike for your group on request. Contact Maddy to talk about your group and ideas; the route and arrangements will be confirmed together based on the season, conditions and availability.",
              "Until then, our November advice is simple: if the day looks a little grey, add a walk… and perhaps some melted cheese."
            ]
          }
        ],
        faqs: [
          { question: "When does the raclette break happen?", answer: "At the summit, halfway through the hike. The walk continues afterwards: raclette is not the finish line!" },
          { question: "Can we book a raclette hike?", answer: "Contact Maddy to discuss an outing for your group. The route, dates and arrangements must be confirmed based on availability and conditions." },
          { question: "Is raclette always included?", answer: "The food and format depend on the arrangements agreed for the outing. Contact Rando d’Azur to discuss the details before booking." }
        ]
      }
    }
  },
];

export function getJournalArticle(slug: string) {
  return journalArticles.find(article => article.slug === slug);
}
