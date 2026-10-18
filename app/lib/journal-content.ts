import type { Locale } from "../i18n/config";

export const journalDate = "2026-10-18";
export type JournalCopy = {
  title: string; description: string; intro: string;
  sections: { title: string; paragraphs: string[] }[];
  faqs: { question: string; answer: string }[];
};
export type JournalArticle = {
  slug: string; image: string; alt: Record<Locale, string>;
  sources: { name: string; url: string }[];
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
      { name: "Pays de Fayence — floraison du mimosa à Tanneron", url: "https://provence-alpes-cotedazur.com/decouvrir/espaces-naturels/patrimoine-naturel/la-floraison-du-mimosa-a-tanneron-pays-de-fayence-tanneron-fr-3394698/" },
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
          { title: "Avec Rando d’Azur : deux façons de participer", paragraphs: ["Les groupes constitués peuvent demander une expérience privée. Des randonnées ouvertes aux individuels seront également proposées à dates précises : 35 € par personne, goûter au mimosa inclus. Ces sorties auront lieu à Cannes Croix des Gardes les samedis du 16 janvier au 27 février 2027, de 9 h à 11 h, avec 6 à 15 participants. La réservation Regiondo est en préparation."] },
        ],
        faqs: [
          { question: "Faut-il un guide pour voir le mimosa ?", answer: "Pas nécessairement. Une promenade autonome se prépare avec un parcours autorisé, la météo et des informations d’accès à jour. Une sortie guidée apporte des explications et un parcours organisé pour le groupe." },
          { question: "Peut-on venir seul à une randonnée mimosa ?", answer: "Oui, sur les futures dates ouvertes aux individuels à 35 € par personne, goûter au mimosa inclus. Les sept samedis du 16 janvier au 27 février 2027 sont programmés à Cannes, de 9 h à 11 h, pour 6 à 15 participants. Les réservations Regiondo ne sont pas encore ouvertes." },
          { question: "La floraison est-elle garantie ?", answer: "Non. La météo, les variétés et le secteur modifient le calendrier. Le parcours est adapté aux conditions locales lorsque c’est possible." },
        ],
      },
      en: {
        title: "Where to see mimosa blossom: Cannes, Mandelieu and Tanneron",
        description: "Plan a French Riviera mimosa flower walk: flowering season, Cannes, Mandelieu and Tanneron, plus private walks and upcoming shared departures.",
        intro: "On the French Riviera, a mimosa walk means yellow flowering trees and winter landscapes. If you are searching for mimosa blossom rather than the brunch cocktail, start with the area, the conditions and the kind of walk you enjoy.",
        sections: [
          { title: "When is mimosa flowering season?", paragraphs: ["The Tanneron’s blossom season runs through winter into early spring, with January and February worth considering. Different varieties, exposures and weather mean that flowering does not happen everywhere at once. A calendar date cannot guarantee hills covered in yellow.", "Ask for a recent local observation before planning a blossom-focused trip. Photographs from previous outings show the landscape’s possibilities, not the conditions on your travel date."] },
          { title: "Cannes: Croix des Gardes", paragraphs: ["Croix des Gardes offers trails, mimosa trees and views towards Cannes Bay. It can make a nature break during a city stay. Check the route’s slopes and footing: being close to town does not automatically make a walk suitable for everyone."] },
          { title: "Mandelieu: between coast and hills", paragraphs: ["Mandelieu-la-Napoule is a starting point for exploring the Tanneron landscape from the coast. Confirm the actual meeting point, elevation and return journey. A forest departure may require different transport arrangements from a central hotel."] },
          { title: "Tanneron: a walk in the massif", paragraphs: ["Around Tanneron village, cultivated mimosa and the wider hillside landscape meet. Check access before setting off, stay on permitted paths and respect growers’ land. Leave branches on the trees and take photographs instead."] },
          { title: "Private groups and shared walks", paragraphs: ["Rando d’Azur offers private enquiries for existing groups. Selected shared walking departures are also planned at €35 per person, including a mimosa-themed snack. The walks are scheduled at Cannes Croix des Gardes on Saturdays from 16 January to 27 February 2027, 9–11 am, for 6–15 participants. Regiondo booking is being prepared."] },
        ],
        faqs: [
          { question: "Is this about mimosa flowers or a cocktail?", answer: "This guide is about the yellow flowering mimosa trees of the French Riviera, especially around Cannes, Mandelieu and Tanneron." },
          { question: "Can a solo traveller join?", answer: "Selected shared departures are planned at €35 per person, with a mimosa-themed snack included. The seven Saturdays from 16 January to 27 February 2027 are scheduled in Cannes, 9–11 am, for 6–15 participants. Regiondo booking has not yet opened." },
          { question: "Do I need a guide?", answer: "An independent walk is possible on permitted routes with up-to-date access and weather information. A guided outing adds local explanations and a route organised for your group." },
        ],
      },
    },
  },
  {
    slug: "produits-au-mimosa", image: "/images/mimosa/mimosa-outdoor-break.webp", alt: { fr: "Fleurs de mimosa et tasse lors d’une pause en plein air", en: "Mimosa flowers and a cup during an outdoor break" },
    sources: [
      { name: "Mandelieu Tourisme — shopping mimosa", url: "https://www.mandelieu-tourisme.com/evenementiel/mimosa/shopping-mimosa/" },
      { name: "Boutique officielle — épicerie fine", url: "https://boutique.mandelieu-tourisme.com/epicerie-fine.html" },
      { name: "Confiserie Florian — spécialités aux fleurs", url: "https://www.confiserieflorian.com/fleurs.html" },
    ],
    copy: {
      fr: {
        title: "Produits au mimosa : gourmandises, parfums et souvenirs de la Côte d’Azur",
        description: "Où chercher sirop, confit et souvenirs au mimosa à Mandelieu ? Des pistes vérifiées et une découverte gourmande avec Rando d’Azur.",
        intro: "Le mimosa se découvre aussi à travers les savoir-faire et les boutiques. Pour choisir un cadeau ou prolonger une balade, commencez par distinguer une spécialité alimentaire, un parfum de mimosa et un objet inspiré de ses fleurs : ils ne se choisissent pas de la même façon.",
        sections: [
          { title: "Où chercher des spécialités au mimosa ?", paragraphs: ["La boutique de l’office de tourisme de Mandelieu référence une sélection autour du mimosa, notamment sirop et confit, ainsi que des souvenirs parfumés. Consultez sa boutique officielle pour les compositions, les stocks et les modalités de retrait ou d’expédition : ce guide ne constitue pas une boutique Rando d’Azur."] },
          { title: "Bien lire l’étiquette", paragraphs: ["Pour une gourmandise, vérifiez les ingrédients, les allergènes et les indications du fabricant. Une évocation du mimosa dans le nom ou sur l’emballage ne suffit pas à décrire sa composition. Pour un cadeau, pensez aussi au transport et à la conservation.", "Ne préparez pas de recette à partir de fleurs cueillies lors d’une promenade sans identification et conseil adaptés. Une spécialité fabriquée pour l’alimentation ne doit pas être confondue avec une plante récoltée au hasard."] },
          { title: "Et les autres gourmandises florales ?", paragraphs: ["La Confiserie Florian, partenaire de Rando d’Azur, présente aussi des spécialités aux fleurs. Cela ne signifie pas que toutes sont au mimosa. La gamme et la composition de chaque référence doivent être vérifiées sur sa fiche : une dégustation florale peut faire découvrir d’autres parfums du territoire."] },
          { title: "Une pause gourmande après la balade", paragraphs: ["Le goûter au mimosa fait partie des futures randonnées individuelles à 35 € et de l’expérience privée mimosa présentée sur ce site. La composition précise dépend des disponibilités. Prévenez Maddy de vos allergies avant de réserver pour vérifier ce qui peut être proposé."] },
        ],
        faqs: [
          { question: "Rando d’Azur vend-il des produits au mimosa ?", answer: "Pas de vente de produits sur cette page. Elle indique des pistes de découverte et renvoie vers les boutiques concernées." },
          { question: "Quel produit est inclus dans le goûter ?", answer: "Le goûter au mimosa est inclus dans l’offre annoncée, mais aucune référence précise n’est garantie. Sa composition et les allergies sont à vérifier avant réservation." },
          { question: "Tous les produits aux fleurs sont-ils au mimosa ?", answer: "Non. Vérifiez le parfum, la composition et les ingrédients de chaque produit auprès du fabricant." },
        ],
      },
      en: {
        title: "Mimosa-flower products and gifts on the French Riviera",
        description: "Discover mimosa-flower specialities, syrups and scented gifts around Mandelieu, with verified shop links and Rando d’Azur’s snack-inclusive walks.",
        intro: "Looking for a gift inspired by the Riviera’s yellow mimosa flowers? Food specialities, scented products and floral souvenirs are different categories. This guide helps you find the right shop and check what a product actually contains.",
        sections: [
          { title: "Where to look", paragraphs: ["Mandelieu’s tourist-office shop lists a mimosa selection, including syrup and confit as well as scented souvenirs. Check its official shop for ingredients, current stock and collection or shipping conditions. Rando d’Azur does not sell those products on this page."] },
          { title: "Check the label", paragraphs: ["For food, read the ingredients, allergen information and storage instructions. A flower pictured on packaging does not explain the recipe. If you are taking a gift home, check whether it is suitable for your journey.", "Do not treat flowers collected on a walk as ready-to-eat ingredients. A food product made for consumption is different from a wild plant that has not been properly identified and assessed."] },
          { title: "Other floral specialities", paragraphs: ["Rando d’Azur partner Confiserie Florian also offers floral confectionery. Not every flower-based product is mimosa-flavoured. Check the manufacturer’s individual product information rather than assuming a flavour from the range’s name."] },
          { title: "A snack on the trail", paragraphs: ["A mimosa-themed snack is included in the planned €35 shared walks and in the private mimosa experience described on this site. The exact selection depends on availability. Tell Maddy about allergies before booking so that suitability can be checked."] },
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
];

export function getJournalArticle(slug: string) {
  return journalArticles.find(article => article.slug === slug);
}
