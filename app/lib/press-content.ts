import type { Locale } from "../i18n/config";
import { publicAssetUrl } from "./public-assets";

export type PressStory = {
  id: string;
  publication: string;
  logo: string;
  href: string;
  date: string;
  datePrecision?: "month";
  title: string;
  excerpts: Record<Locale, string>;
};

export const pressStories: PressStory[] = [
  {
    id: "france3-wild-plants",
    publication: "France 3 Côte d’Azur",
    logo: publicAssetUrl(
      "images/press/Logos/franceinfo.svg",
    ),
    href: "https://france3-regions.franceinfo.fr/provence-alpes-cote-d-azur/var/quelles-sont-les-plantes-sauvages-comestibles-dans-le-massif-de-l-esterel-les-reponses-d-une-guide-de-randonnee-3138490.html",
    date: "2025-04-14",
    title:
      "Quelles sont les plantes sauvages comestibles dans le massif de l’Esterel ? Les réponses d’une guide de randonnée",
    excerpts: {
      en: "A week of guided walks in the Var and Alpes-Maritimes introduces participants to Mediterranean wild plants and their uses, with Maddy Polomeni sharing her field knowledge.",
      fr: "Une semaine de randonnées dans le Var et les Alpes-Maritimes initie les participants aux plantes sauvages méditerranéennes et à leurs usages, avec les connaissances de terrain de Maddy Polomeni.",
      it: "Una settimana di escursioni nel Var e nelle Alpes-Maritimes fa conoscere ai partecipanti le piante selvatiche mediterranee e i loro usi, con le conoscenze sul campo di Maddy Polomeni.",
    },
  },
  {
    id: "rcf-walking",
    publication: "RCF",
    logo: publicAssetUrl("images/press/Logos/rcf.webp"),
    href: "https://www.rcf.fr/articles/culture/pourquoi-la-marche-rencontre-un-succes-fou-en-france",
    date: "2022-05-01",
    datePrecision: "month",
    title: "Pourquoi la marche rencontre un succès fou en France ?",
    excerpts: {
      en: "In this radio feature on the growing appeal of walking, RCF gives Maddy Polomeni and Rando d’Azur a voice to share what hiking means in everyday life.",
      fr: "Dans ce sujet consacré à l’essor de la marche, RCF donne la parole à Maddy Polomeni et à Rando d’Azur pour raconter la place de la randonnée au quotidien.",
      it: "In questo servizio radiofonico sul crescente interesse per il cammino, RCF dà voce a Maddy Polomeni e Rando d’Azur per raccontare il valore quotidiano dell’escursionismo.",
    },
  },
  {
    id: "actu-rando-apero",
    publication: "actu.fr",
    logo: publicAssetUrl("images/press/Logos/actu.svg"),
    href: "https://actu.fr/provence-alpes-cote-d-azur/mandelieu-la-napoule_06079/alpes-maritimes-des-degustations-au-sommet-avec-ces-rando-apero-dans-le-massif-de-l-esterel_42224680.html",
    date: "2021-05-29",
    title:
      "Alpes-Maritimes. Des dégustations au sommet avec ces « randos apéro » dans le massif de l’Estérel",
    excerpts: {
      en: "A local feature follows Maddy Polomeni’s apéro hikes in the Estérel, where a guided walk leads to a tasting at the summit.",
      fr: "Ce reportage local suit les randonnées apéro de Maddy Polomeni dans l’Estérel, où une marche guidée mène à une dégustation au sommet.",
      it: "Un servizio locale segue le escursioni aperitivo di Maddy Polomeni nell’Estérel, dove una passeggiata guidata conduce a una degustazione in vetta.",
    },
  },
  {
    id: "france3-mimosa",
    publication: "France 3 Côte d’Azur",
    logo: publicAssetUrl(
      "images/press/Logos/franceinfo.svg",
    ),
    href: "https://france3-regions.franceinfo.fr/provence-alpes-cote-d-azur/alpes-maritimes/cannes/randonnees-parfumees-tanneron-pres-cannes-decouvrir-foret-mimosas-1912466.html",
    date: "2021-01-09",
    title:
      "Des randonnées parfumées dans le Tanneron près de Cannes pour découvrir la forêt de mimosas",
    excerpts: {
      en: "A winter report from Tanneron explores the mimosa forest and follows a guided walk led by Maddy Poloméni near Cannes.",
      fr: "Un reportage hivernal à Tanneron fait découvrir la forêt de mimosas et suit une randonnée guidée par Maddy Poloméni près de Cannes.",
      it: "Un servizio invernale da Tanneron racconta la foresta di mimose e segue un’escursione guidata da Maddy Poloméni vicino a Cannes.",
    },
  },
];

export const pressArchivePlaceholders = [
  { publication: "Nice-Matin", date: "2021-05-01", precision: "month" },
  { publication: "ELLE", date: "2017-01-01", precision: "year" },
  { publication: "Estérel Mag", date: "2021-06-01", precision: "month" },
  {
    publication: "Le Figaro Magazine",
    date: "2021-12-01",
    precision: "month",
  },
  { publication: "Rustica", date: "2023-02-10" },
  {
    publication: "La France Agricole",
    date: "2021-02-01",
    precision: "month",
  },
] as const;

export const featuredPress = [
  {
    publication: "France 3 Côte d’Azur",
    logo: pressStories[0].logo,
    href: pressStories[0].href,
  },
  {
    publication: "RCF",
    logo: pressStories[1].logo,
    href: pressStories[1].href,
  },
  {
    publication: "actu.fr",
    logo: pressStories[2].logo,
    href: pressStories[2].href,
  },
];

export function formatPressDate(
  date: string,
  locale: Locale,
  precision?: "month" | "year",
) {
  return new Intl.DateTimeFormat(locale, {
    ...(precision === "month"
      ? { month: "long", year: "numeric" }
      : precision === "year"
        ? { year: "numeric" }
        : { day: "numeric", month: "long", year: "numeric" }),
    timeZone: "UTC",
  }).format(new Date(`${date}T12:00:00Z`));
}
