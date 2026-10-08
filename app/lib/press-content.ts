import type { Locale } from "../i18n/config";
import { publicAssetUrl } from "./public-assets";

export type PressStory = {
  id: string;
  publication: string;
  logo?: string;
  href: string;
  date?: string;
  datePrecision?: "month" | "year";
  title: string;
  excerpts: Record<Locale, string>;
  titles?: Record<Locale, string>;
  kind?: "report" | "interview" | "mention";
  reproduction?: boolean;
  originalHref?: string;
  author?: string;
};

export const pressStories: PressStory[] = [
  {
    titles: { en: "Wild plants in the Estérel, with Maddy", fr: "Les plantes sauvages de l’Estérel, avec Maddy" },
    id: "france3-wild-plants",
    kind: "report",
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
    },
  },
  {
    id: "bbc-mimosa", publication: "BBC Travel", kind: "report", reproduction: true,
    href: "https://www.thetenerifepropertyguide.com/paper/download/86#page=42",
    originalHref: "https://www.bbc.com/travel/article/20220418-frances-130km-mimosa-route",
    date: "2022-05-01", datePrecision: "month", author: "Chrissie McClatchie",
    title: "France’s 130km Mimosa Route",
    excerpts: {
      en: "Chrissie McClatchie walks with Maddy through the mimosa trails of the Estérel. This accessible reproduction in The Tenerife Property & Business Guide explicitly attributes the report to BBC Travel. The date shown is the reproduction’s issue date.",
      fr: "Chrissie McClatchie accompagne Maddy sur les sentiers de mimosa de l’Estérel. Cette reproduction accessible dans The Tenerife Property & Business Guide attribue explicitement le reportage à BBC Travel. La date affichée est celle du numéro reproduisant l’article.",
    },
  },
  {
    titles: { en: "Why walking brings people together", fr: "Pourquoi la marche rassemble" },
    id: "rcf-walking",
    publication: "RCF",
    logo: publicAssetUrl("images/press/Logos/rcf.webp"),
    href: "https://www.rcf.fr/articles/culture/pourquoi-la-marche-rencontre-un-succes-fou-en-france",
    date: "2022-05-10",
    kind: "interview",
    title: "Pourquoi la marche rencontre un succès fou en France ?",
    excerpts: {
      en: "In this radio feature on the growing appeal of walking, RCF gives Maddy Polomeni and Rando d’Azur a voice to share what hiking means in everyday life.",
      fr: "Dans ce sujet consacré à l’essor de la marche, RCF donne la parole à Maddy Polomeni et à Rando d’Azur pour raconter la place de la randonnée au quotidien.",
    },
  },
  {
    titles: { en: "Apéro hikes in the Estérel", fr: "Les randonnées apéro dans l’Estérel" },
    id: "actu-rando-apero",
    kind: "report",
    publication: "actu.fr",
    logo: publicAssetUrl("images/press/Logos/actu.svg"),
    href: "https://actu.fr/provence-alpes-cote-d-azur/mandelieu-la-napoule_06079/alpes-maritimes-des-degustations-au-sommet-avec-ces-rando-apero-dans-le-massif-de-l-esterel_42224680.html",
    date: "2021-05-29",
    title:
      "Alpes-Maritimes. Des dégustations au sommet avec ces « randos apéro » dans le massif de l’Estérel",
    excerpts: {
      en: "A local feature follows Maddy Polomeni’s apéro hikes in the Estérel, where a guided walk leads to a tasting at the summit.",
      fr: "Ce reportage local suit les randonnées apéro de Maddy Polomeni dans l’Estérel, où une marche guidée mène à une dégustation au sommet.",
    },
  },
  {
    titles: { en: "A scented winter walk in Tanneron", fr: "Une randonnée parfumée dans le Tanneron" },
    id: "france3-mimosa",
    kind: "report",
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
    },
  },
  {
    id: "figaro-mimosa", publication: "Le Figaro", kind: "mention",
    href: "https://www.lefigaro.fr/voyages/guides/route-du-mimosa-notre-itineraire-pour-profiter-de-la-cote-d-azur-en-jaune-20230123",
    date: "2023-01-23", title: "Route du Mimosa 2023",
    excerpts: { en: "Maddy’s Tanneron walks.", fr: "Les randonnées de Maddy à Tanneron." },
  },
  {
    id: "routard-mimosa", publication: "Le Routard", kind: "mention",
    href: "https://www.routard.com/fr/mag/idee-week-end/a/mandelieu-la-napoule-et-le-tanneron-au-pays-du-mimosa",
    date: "2025-01-05", author: "Olivia Le Sidaner", title: "Mandelieu-la-Napoule et le Tanneron, au pays du mimosa",
    titles: { en: "Mimosa walks around Mandelieu and Tanneron", fr: "Mandelieu et Tanneron, au pays du mimosa" },
    excerpts: { en: "This destination guide recommends Maddy as a local hiking guide for exploring the mimosa landscape. It is a recommendation within a wider travel article.", fr: "Ce guide de destination recommande Maddy pour découvrir les paysages de mimosa en randonnée. Il s’agit d’une recommandation au sein d’un article de voyage plus large." },
  },
  {
    id: "kidiklik-family", publication: "Kidiklik", kind: "report",
    href: "https://cotedazur.kidiklik.fr/articles/383459-partez-randonner-avec-maddy-polomeni.html",
    title: "Partez randonner avec Maddy Polomeni",
    titles: { en: "Outdoor family discoveries with Maddy", fr: "Partez randonner avec Maddy Polomeni" },
    excerpts: { en: "A portrait of Maddy’s approach to family walks, seasonal nature discovery and shared adventures. Historical prices in this article are not Rando d’Azur’s current rates.", fr: "Un portrait de l’approche de Maddy : randonnées familiales, découvertes saisonnières et aventures partagées. Les anciens prix de l’article ne sont pas les tarifs actuels de Rando d’Azur." },
  },
  {
    id: "dynamic-seniors", publication: "Dynamic Seniors", kind: "report",
    href: "https://dynamic-seniors.eu/mandelieu-la-napoule-nature-ville-mimosa/",
    date: "2022-02-13", author: "Caroline Paux", title: "Mandelieu-La Napoule, la nature est en ville, le mimosa en plus",
    titles: { en: "A mimosa walk with Maddy in Tanneron", fr: "Une randonnée mimosa avec Maddy dans le Tanneron" },
    excerpts: { en: "The writer joins Maddy on a guided walk and describes her interpretation of the landscape and Mediterranean plants.", fr: "La journaliste accompagne Maddy en randonnée et raconte sa lecture du paysage et des plantes méditerranéennes." },
  },
  {
    id: "riviera-magazine", publication: "Riviera Magazine", kind: "mention",
    href: "https://www.rivieramagazine.fr/article/10-idees-pour-un-hiver-unique-sur-la-cote-dazur",
    title: "10 idées pour un hiver unique sur la Côte d’Azur",
    titles: { en: "Winter ideas on the French Riviera", fr: "Un hiver sur la Côte d’Azur" },
    excerpts: { en: "A winter travel selection mentions Maddy’s mimosa walks. The dates given in the article concern the 2025 season, rather than current availability.", fr: "Une sélection hivernale mentionne les randonnées mimosa de Maddy. Les dates de l’article concernent la saison 2025, et non les disponibilités actuelles." },
  },
  {
    id: "marie-celine", publication: "Marie-Céline", kind: "report",
    logo: "/images/press/Logos/marie-celine.webp",
    href: "https://www.marie-celine.com/patrimoine/terroir/mimosa-acacia-dealbata-floraison-massif-tanneron-esterel-cote-d-azur/",
    date: "2021-02-14", author: "Marie-Céline Solérieu", title: "La floraison du Mimosa entre l’Estérel et le Massif du Tanneron",
    titles: { en: "Discovering mimosa between the Estérel and Tanneron", fr: "Découvrir le mimosa entre l’Estérel et le Tanneron" },
    excerpts: { en: "A nature report introduces a mimosa discovery walk with Maddy and identifies her as the local hiking guide.", fr: "Ce reportage nature présente une balade découverte du mimosa avec Maddy et l’identifie comme guide de randonnée locale." },
  },
  {
    id: "hortus-focus", publication: "Hortus Focus", kind: "mention",
    href: "https://magazine.hortus-focus.fr/blog/2024/01/31/escapade-nature-et-mimosa-a-mandelieu-la-napoule/",
    date: "2024-01-31", author: "Valérie Collet", title: "Mandelieu-la Napoule, capitale du Mimosa",
    titles: { en: "Mimosa and nature around Mandelieu", fr: "Mimosa et nature autour de Mandelieu" },
    excerpts: { en: "A botanical travel feature recommends Maddy for a guided walk in Tanneron and highlights her knowledge of plants.", fr: "Ce sujet de voyage et de botanique recommande Maddy pour une balade guidée dans le Tanneron et souligne sa connaissance des plantes." },
  },
  {
    id: "esterel-mag", publication: "Estérel Mag", kind: "report",
    href: "https://www.saint-raphael.com/images/brochures/2021/MAGESTEREL.pdf#page=15",
    date: "2021-01-01", datePrecision: "year", title: "Respirer aux Adrets — On a marché avec Maddy Polomeni",
    titles: { en: "Exploring the Estérel with Maddy", fr: "Découvrir l’Estérel avec Maddy" },
    excerpts: { en: "A report follows Maddy on a walk in the Estérel, sharing her approach to the landscape and local flora. Read the original destination magazine, issue 2, season 2021.", fr: "Un reportage accompagne Maddy dans l’Estérel et présente son regard sur le paysage et la flore locale. Retrouvez le magazine original de la destination, numéro 2, saison 2021." },
  },

];

// Only verified references appear publicly; research leads remain in docs/press-source-inventory.md.
export const featuredPress = [pressStories[0], pressStories[1], pressStories.find(story => story.id === "rcf-walking")!];

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
