import type { Locale } from "./config";

export const fieldPartnersContent = {
  fr: {
    title: "Mes partenaires sur le terrain",
    description: "Les vêtements, parapluies et saveurs qui accompagnent les aventures de Rando d’Azur sur la Côte d’Azur.",
    eyebrow: "DANS MON SAC & À PARTAGER",
    intro: "De quoi s’équiper pour marcher, s’abriter d’une averse et partager une pause gourmande. Voici les partenaires qui accompagnent mes aventures.",
    disclosure: "Ces marques soutiennent Rando d’Azur, notamment par des produits offerts. Je vous présente ici notre collaboration, sans note ni classement.",
    visit: "Découvrir la marque",
    contact: "Préparer une sortie avec Maddy",
    note: "Les dégustations varient selon la sortie et les produits disponibles. Signalez vos allergies lors de la réservation. Les boissons alcoolisées sont réservées aux adultes ; des options sans alcool peuvent être prévues. L’abus d’alcool est dangereux pour la santé, à consommer avec modération.",
    items: [
      { id: "columbia", brand: "Columbia Sportswear", category: "POUR LES SENTIERS", title: "Mes vêtements de randonnée", text: "Columbia m’accompagne depuis plusieurs saisons. Des vêtements que je porte pour guider mes groupes, avec des couches adaptées à la sortie et à la météo.", detail: "Vêtements outdoor · Randonnée", href: "https://www.columbiasportswear.fr/", logo: "/images/partners/columbia-sportswear.svg" },
      { id: "isotoner", brand: "Isotoner", category: "POUR LES AVERSES", title: "Les parapluies dans mon sac", text: "Isotoner a rejoint l’aventure avec une dotation de parapluies pour mes sorties. Une place dans mon sac pour les journées où la Riviera prend la pluie !", detail: "Parapluies · Sorties en ville", href: "https://www.isotoner.fr/", logo: "" },
      { id: "comte", brand: "Brasserie du Comté", category: "POUR TRINQUER", title: "Bières & limonades de la région", text: "Une collaboration autour des bières et des boissons sans alcool de la Brasserie du Comté, à faire découvrir pendant les pauses de nos randonnées apéro.", detail: "Bières · Limonades · Randos apéro", href: "https://www.brasserieducomte.fr/", logo: "/images/partners/brasserie-du-comte.png" },
      { id: "florian", brand: "Confiserie Florian", category: "POUR LA PAUSE GOURMANDE", title: "Les pâtes de fruits à partager", text: "Une touche de douceur dans nos balades gourmandes : les pâtes de fruits de la Confiserie Florian, partenaire de Rando d’Azur pour faire découvrir les saveurs de la Côte d’Azur.", detail: "Pâtes de fruits · Gourmandises locales", href: "https://www.confiserieflorian.com/", logo: "" },
    ],
  },
  en: {
    title: "My partners on the trail",
    description: "The clothing, umbrellas and local flavours accompanying Rando d’Azur adventures on the French Riviera.",
    eyebrow: "IN MY BAG & AROUND THE TABLE",
    intro: "Clothing for the trail, shelter from a shower and something delicious to share. Meet the partners accompanying my adventures.",
    disclosure: "These brands support Rando d’Azur, including through gifted products. This page introduces our collaborations, without scores or rankings.",
    visit: "Explore the brand",
    contact: "Plan an outing with Maddy",
    note: "Tastings vary with the outing and product availability. Tell us about allergies when booking. Alcoholic drinks are for adults only; alcohol-free options can be arranged. Please drink responsibly.",
    items: [
      { id: "columbia", brand: "Columbia Sportswear", category: "FOR THE TRAIL", title: "My hiking clothing", text: "Columbia has accompanied me for several seasons. I wear their outdoor clothing when guiding my groups, choosing layers to suit the outing and weather.", detail: "Outdoor clothing · Hiking", href: "https://www.columbiasportswear.fr/", logo: "/images/partners/columbia-sportswear.svg" },
      { id: "isotoner", brand: "Isotoner", category: "FOR RAINY DAYS", title: "The umbrellas in my bag", text: "Isotoner joined the adventure with a gift of umbrellas for my outings. A place in my bag for those days when the Riviera gets a little rain!", detail: "Umbrellas · City walks", href: "https://www.isotoner.fr/", logo: "" },
      { id: "comte", brand: "Brasserie du Comté", category: "FOR A SHARED TOAST", title: "Local beers & lemonades", text: "A collaboration featuring beers and alcohol-free drinks from Brasserie du Comté, to discover during the breaks on our apéro hikes.", detail: "Beers · Lemonades · Apéro hikes", href: "https://www.brasserieducomte.fr/", logo: "/images/partners/brasserie-du-comte.png" },
      { id: "florian", brand: "Confiserie Florian", category: "FOR A SWEET BREAK", title: "Fruit jellies to share", text: "A sweet touch on our food walks: fruit jellies from Confiserie Florian, a Rando d’Azur partner sharing the flavours of the French Riviera.", detail: "Fruit jellies · Local treats", href: "https://www.confiserieflorian.com/", logo: "" },
    ],
  },
} satisfies Record<Locale, object>;
