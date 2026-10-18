import { locales, localePath, experienceSlugs } from "../i18n/config";
import { destinationSlugs, getDestinationContent } from "../i18n/destination-content";
import { getMessages } from "../i18n/messages";
import { getTravelTradeContent } from "../i18n/travel-trade";
import { contactChannels } from "./contact-channels";
import { getSiteUrl } from "./site-url";
import { journalArticles } from "./journal-content";

// Optional directory for tools that read llms.txt. The linked HTML pages remain
// the source of truth; availability and prices are deliberately not duplicated.
export function getDiscoveryText() {
  const absolute = (path: string) => new URL(path, getSiteUrl()).toString();
  const lines = [
    "# Rando d’Azur",
    "",
    "> Private guided experiences on the French Riviera, based in Cannes, France. Founded by Maddy Polomeni. Randonnées et expériences privées sur la Côte d’Azur.",
    "",
    "English and French pages describe private hiking, food tours, cycling, family activities, mimosa walks and experiences for travel agencies and DMCs. Current arrangements, inclusions, prices and availability are confirmed on the relevant page and with Maddy before booking.",
    "",
    `Professional and press enquiries: ${contactChannels.primaryEmail} · ${contactChannels.phoneInternational}`,
  ];
  for (const locale of locales) {
    const messages = getMessages(locale);
    const trade = getTravelTradeContent(locale);
    lines.push("", `## ${locale === "fr" ? "Français" : "English"}`, "");
    const pages = [
      ["", locale === "fr" ? "Accueil" : "Home"],
      ["/meet-maddy", locale === "fr" ? "Maddy Polomeni : présentation et qualifications" : "Maddy Polomeni: background and qualifications"],
      ["/travel-trade", trade.title],
      ["/press", locale === "fr" ? "Contact presse et reportages publiés" : "Press contact and published features"],
      ["/journal", locale === "fr" ? "Journal : guides du mimosa, des fleurs et de l’hiver" : "Journal: mimosa blossom, flowers and winter guides"],
      ...journalArticles.map(article => [`/journal/${article.slug}`, article.copy[locale].title]),
      ["/experiences/route-du-mimosa", locale === "fr" ? "Route du Mimosa : sorties privées et informations saisonnières" : "Mimosa Route: private walks and seasonal information"],
      ["/kids-schools-youth-groups", locale === "fr" ? "Enfants, scolaires et groupes jeunesse" : "Kids, schools and youth groups"],
      ...experienceSlugs.filter(slug => slug !== "evg-experiences").map(slug => [`/experiences/${slug}`, messages.experiencePage.pages[slug].title]),
      ...destinationSlugs.map(slug => [`/destinations/${slug}`, getDestinationContent(locale, slug).title]),
    ];
    for (const [path, title] of pages) lines.push(`- [${title}](${absolute(localePath(locale, path))})`);
  }
  lines.push("", "## Contact and official profiles", "",
    `- [Instagram](${contactChannels.instagramUrl})`,
    `- [Facebook](${contactChannels.facebookUrl})`,
    `- [Sitemap](${absolute("/sitemap.xml")})`, "");
  return lines.join("\n");
}
