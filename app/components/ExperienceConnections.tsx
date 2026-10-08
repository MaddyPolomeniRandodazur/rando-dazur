import MimosaLink from "./MimosaLink";
import Link from "next/link";
import { localePath, type ExperienceSlug, type Locale } from "../i18n/config";
import { destinationSlugs, getDestinationContent } from "../i18n/destination-content";
import { getMessages } from "../i18n/messages";
import { getTravelTradeContent } from "../i18n/travel-trade";

export default function ExperienceConnections({ locale, slug }: { locale: Locale; slug: ExperienceSlug }) {
  const messages = getMessages(locale);
  const destinations = destinationSlugs.map(id => ({ id, ...getDestinationContent(locale, id) })).filter(destination => destination.experiences.includes(slug));
  const related = [...new Set(destinations.flatMap(destination => destination.experiences))].filter(id => id !== slug).slice(0, 4);
  const copy = locale === "fr" ? { title: "Où vivre cette expérience", text: "Le choix du parcours dépend de vos envies, du rythme du groupe et des conditions de la saison. Contactez Maddy pour discuter de la destination et des modalités avant de réserver.", related: "Pour prolonger la découverte" } : { title: "Where to enjoy this experience", text: "The itinerary depends on your interests, your group’s pace and seasonal conditions. Talk to Maddy about the destination and practical arrangements before booking.", related: "More ways to explore" };
  return <section className="experience-detail-section"><div className="page-width">
    <h2>{copy.title}</h2><p className="section-intro">{copy.text}</p>
    <div className="destination-experience-list">{destinations.map(destination => <Link key={destination.id} href={localePath(locale, `/destinations/${destination.id}`)}>{destination.title}<span aria-hidden="true">↗</span></Link>)}</div>
    {related.length > 0 && <><h2>{copy.related}</h2><div className="destination-experience-list">{related.map(id => <Link key={id} href={localePath(locale, `/experiences/${id}`)}>{messages.experiencePage.pages[id].title}<span aria-hidden="true">↗</span></Link>)}</div></>}
    {["hiking-experiences", "cycling-experiences", "wild-provence"].includes(slug) && <MimosaLink locale={locale} />}
    <Link className="text-link" href={localePath(locale, "/travel-trade")}>{getTravelTradeContent(locale).linkLabel} <span aria-hidden="true">↗</span></Link>
  </div></section>;
}
