import type { Locale } from "./config";

export const fieldPartnersContent = {
  fr: {
    title: "Mes partenaires sur le terrain",
    description: "Les vêtements, parapluies et saveurs qui accompagnent les aventures de Rando d’Azur sur la Côte d’Azur.",
    eyebrow: "DANS MON SAC & À PARTAGER",
    intro: "De quoi s’équiper pour marcher, s’abriter d’une averse et partager une pause gourmande. Voici les partenaires qui accompagnent mes aventures.",
    disclosure: "Ces marques soutiennent Rando d’Azur, notamment par des produits offerts. Je vous présente ici notre collaboration, sans note ni classement.",
    visit: "Découvrir la sélection",
    contact: "Préparer une sortie avec Maddy",
    note: "Les dégustations varient selon la sortie et les produits disponibles. Signalez vos allergies lors de la réservation. Les boissons alcoolisées sont réservées aux adultes ; des options sans alcool peuvent être prévues. L’abus d’alcool est dangereux pour la santé, à consommer avec modération.",
    items: [
      { id: "columbia", brand: "Columbia Sportswear", category: "POUR LES SENTIERS", title: "Mes vêtements de randonnée", text: "Columbia m’accompagne depuis plusieurs saisons. Des vêtements que je porte pour guider mes groupes, avec des couches adaptées à la sortie et à la météo.", detail: "Vêtements outdoor · Randonnée", href: "https://www.columbiasportswear.fr/", logo: "/images/partners/columbia-sportswear.svg" },
      { id: "isotoner", brand: "Isotoner", category: "POUR LES AVERSES", title: "Les parapluies que je vous prête", text: "Pendant les sorties en ville, je prête à mes clients les parapluies noirs X-TRA SOLIDE ALPHA d’Isotoner, compacts avec leurs 17,5 cm une fois fermés. De quoi continuer la balade si une averse s’invite… même si, bien sûr, il ne fait jamais moche sur la Côte d’Azur !", detail: "X-TRA SOLIDE ALPHA · 17,5 cm · Noir", href: "https://www.isotoner.fr/products/parapluie-x-tra-solide-alpha-17-5-cm-noir", logo: "/images/partners/isotoner.svg" },
      { id: "comte", brand: "Brasserie du Comté", category: "POUR TRINQUER", title: "Ambassadrice de la Brasserie du Comté", text: "Je suis ambassadrice de la Brasserie du Comté ! À l’honneur : la collection La Côte d’Azur, née d’une collaboration avec la marque Côte d’Azur France. Des bières et des limonades pour partager les saveurs de notre région lors de nos pauses et randonnées apéro.", detail: "Collection La Côte d’Azur · Bières & limonades", href: "https://www.brasserieducomte.fr/la-cote-dazur/", logo: "/images/partners/brasserie-du-comte.png" },
      { id: "florian", brand: "Confiserie Florian", category: "POUR LA PAUSE GOURMANDE", title: "Les gels de fruits que je vous fais goûter", text: "Lors de mes dégustations, je partage les gels de fruits assortis de la Confiserie Florian. Ces petites douceurs fruitées accompagnent la découverte de notre région, le temps d’une pause gourmande.", detail: "Spécialité de gels de fruits assortis", href: "https://www.confiserieflorian.com/gels-de-fruits-assortis.html", logo: "/images/partners/confiserie-florian.png" },
    ],
  },
  en: {
    title: "My partners on the trail",
    description: "The clothing, umbrellas and local flavours accompanying Rando d’Azur adventures on the French Riviera.",
    eyebrow: "IN MY BAG & AROUND THE TABLE",
    intro: "Clothing for the trail, shelter from a shower and something delicious to share. Meet the partners accompanying my adventures.",
    disclosure: "These brands support Rando d’Azur, including through gifted products. This page introduces our collaborations, without scores or rankings.",
    visit: "Explore the selection",
    contact: "Plan an outing with Maddy",
    note: "Tastings vary with the outing and product availability. Tell us about allergies when booking. Alcoholic drinks are for adults only; alcohol-free options can be arranged. Please drink responsibly.",
    items: [
      { id: "columbia", brand: "Columbia Sportswear", category: "FOR THE TRAIL", title: "My hiking clothing", text: "Columbia has accompanied me for several seasons. I wear their outdoor clothing when guiding my groups, choosing layers to suit the outing and weather.", detail: "Outdoor clothing · Hiking", href: "https://www.columbiasportswear.fr/", logo: "/images/partners/columbia-sportswear.svg" },
      { id: "isotoner", brand: "Isotoner", category: "FOR RAINY DAYS", title: "The umbrellas I lend you", text: "On city walks, I lend my guests black Isotoner X-TRA SOLIDE ALPHA umbrellas, just 17.5 cm long when folded. Ready for an unexpected shower… although, of course, the Riviera never has bad weather!", detail: "X-TRA SOLIDE ALPHA · 17.5 cm · Black", href: "https://www.isotoner.fr/products/parapluie-x-tra-solide-alpha-17-5-cm-noir", logo: "/images/partners/isotoner.svg" },
      { id: "comte", brand: "Brasserie du Comté", category: "FOR A SHARED TOAST", title: "Brasserie du Comté ambassador", text: "I am an ambassador for Brasserie du Comté! In the spotlight: the La Côte d’Azur collection, created with the Côte d’Azur France brand. Beers and lemonades to share a taste of our region during our breaks and apéro hikes.", detail: "La Côte d’Azur collection · Beers & lemonades", href: "https://www.brasserieducomte.fr/la-cote-dazur/", logo: "/images/partners/brasserie-du-comte.png" },
      { id: "florian", brand: "Confiserie Florian", category: "FOR A SWEET BREAK", title: "The fruit gels I share with you", text: "During my tastings, I share Confiserie Florian’s assorted fruit gels. These little fruit treats bring a sweet break to our discovery of the region.", detail: "Assorted fruit gel speciality", href: "https://www.confiserieflorian.com/gels-de-fruits-assortis.html", logo: "/images/partners/confiserie-florian.png" },
    ],
  },
} satisfies Record<Locale, object>;
