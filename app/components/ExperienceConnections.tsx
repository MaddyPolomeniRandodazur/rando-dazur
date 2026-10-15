import MimosaLink from "./MimosaLink";
import Link from "next/link";
import { localePath, type ExperienceSlug, type Locale } from "../i18n/config";
import { destinationSlugs, getDestinationContent } from "../i18n/destination-content";
import { getMessages } from "../i18n/messages";
import { getTravelTradeContent } from "../i18n/travel-trade";

export default function ExperienceConnections({ locale, slug }: { locale: Locale; slug: ExperienceSlug }) {
  const messages = getMessages(locale);
  const destinations = destinationSlugs.map(id => ({ id, ...getDestinationContent(locale, id) })).filter(destination => destination.experiences.includes(slug));
  const related = [...new Set(destinations.flatMap(destination => destination.experiences))].filter(id => id !== slug).slice(0, 2);
  const copy = locale === "fr"
    ? { title: "Les destinations", related: "À découvrir aussi" }
    : { title: "Destinations", related: "You may also like" };
  return <section className="experience-detail-section"><div className="page-width">
    <h2>{copy.title}</h2>
    <div className="destination-experience-list">{destinations.map(destination => <Link key={destination.id} href={localePath(locale, `/destinations/${destination.id}`)}>{destination.title}<span aria-hidden="true">↗</span></Link>)}</div>
    {related.length > 0 && <><h2>{copy.related}</h2><div className="destination-experience-list">{related.map(id => <Link key={id} href={localePath(locale, `/experiences/${id}`)}>{messages.experiencePage.pages[id].title}<span aria-hidden="true">↗</span></Link>)}</div></>}
    {["hiking-experiences", "cycling-experiences", "wild-provence"].includes(slug) && <MimosaLink locale={locale} />}
    <Link className="text-link" href={localePath(locale, "/travel-trade")}>{getTravelTradeContent(locale).linkLabel} <span aria-hidden="true">↗</span></Link>
  </div></section>;
}
