import { mimosaCampaign, mimosaCopy } from "../lib/mimosa-campaign";
import { getWhatsAppUrl } from "../lib/whatsapp";
import type { Locale } from "../i18n/config";
export default function MimosaBooking({ locale, expired = false }: { locale: Locale; expired?: boolean }) {
  const copy = mimosaCopy[locale];
  // Only enable a specific product once its official URL is supplied and validated.
  const product = !expired && mimosaCampaign.regiondoUrl?.startsWith("https://randodazur.regiondo.fr/") ? mimosaCampaign.regiondoUrl : null;
  if (!expired) {
    const products = [
      { city: "Cannes", slug: "cannes-private-mimosa-walk-2-12-people" },
      { city: "Mandelieu", slug: "randonnee-mimosa-tous-niveaux-mandelieu-la-napoule" },
      { city: "Tanneron", slug: "tanneron-private-mimosa-walk-2-12-people" },
    ];
    return <>{products.map(item => <a key={item.city} className="button button-dark" href={`https://randodazur.regiondo.${locale === "fr" ? "fr" : "com"}/${item.slug}`} target="_blank" rel="noopener noreferrer">{locale === "fr" ? "Randonnée privée à " : "Private walk in "}{item.city}<span aria-hidden="true">↗</span></a>)}</>;
  }
  return <a className="button button-dark" href={product ?? getWhatsAppUrl(expired ? (locale === "fr" ? "Bonjour Maddy, je souhaite recevoir des informations sur la prochaine saison des expériences mimosa." : "Hello Maddy, I would like information about the next season of mimosa experiences.") : copy.message)} target="_blank" rel="noopener noreferrer">{product ? (locale === "fr" ? "Réserver en ligne" : "Book online") : copy.request}<span aria-hidden="true">↗</span></a>;
}
