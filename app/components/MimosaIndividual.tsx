import type { Locale } from "../i18n/config";
import { mimosaIndividual } from "../lib/mimosa-individual";
import { getWhatsAppUrl } from "../lib/whatsapp";
import styles from "./MimosaCampaign.module.css";
export default function MimosaIndividual({ locale }: { locale: Locale }) {
  const url = locale === "fr" ? mimosaIndividual.regiondoUrlFr : mimosaIndividual.regiondoUrl;
  return <section id="individuals" className={`${styles.section} ${styles.soft}`}><div className="page-width">
    <p className="eyebrow">{locale === "fr" ? "LES SAMEDIS MATIN · CANNES" : "SATURDAY MORNINGS · CANNES"}</p>
    <h2>{locale === "fr" ? "Randonnée mimosa ouverte aux individuels" : "Join a shared mimosa blossom walk"}</h2>
    <p className={styles.price}>{locale === "fr" ? "35 € par personne · goûter au mimosa inclus" : "€35 per person · mimosa-themed snack included"}</p>
    <p>{locale === "fr" ? "Venez seul, à deux ou entre amis pour une balade à pied à la Croix des Gardes. Deux heures pour découvrir les paysages du mimosa et partager une pause gourmande." : "Join solo, as a couple or with friends for a walk at Croix des Gardes. Two hours to discover the mimosa landscape and share a snack."}</p>
    <ul className={styles.facts}><li>{locale === "fr" ? "9 h – 11 h" : "9–11 am"}</li><li>{locale === "fr" ? "Départ à partir de 6 participants · maximum 15" : "Minimum 6 participants to run · maximum 15"}</li><li>{mimosaIndividual.meetingPoint}</li></ul>
    <h3>{locale === "fr" ? "Les sept dates 2027" : "The seven 2027 dates"}</h3>
    <ul className={styles.facts}>{mimosaIndividual.dates.map(date => <li key={date}><time dateTime={`${date}T09:00:00+01:00`}>{new Intl.DateTimeFormat(locale === "fr" ? "fr-FR" : "en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "Europe/Paris" }).format(new Date(`${date}T12:00:00Z`))}</time></li>)}</ul>
    <p>{url ? (locale === "fr" ? "Choisissez votre date et réservez sur Regiondo." : "Choose your date and book through Regiondo.") : (locale === "fr" ? "Réservations prochainement sur Regiondo. Le calendrier de vente est en cours de préparation ; ces dates ne sont pas encore réservables en ligne." : "Booking will open through Regiondo. The sales calendar is being prepared; these dates cannot yet be booked online.")}</p>
    <a className="button button-dark" href={url ?? getWhatsAppUrl(locale === "fr" ? "Bonjour Maddy, je souhaite des informations sur la randonnée mimosa individuelle du samedi à Cannes, à 35 € avec goûter inclus. Date : … Nombre de personnes : …" : "Hello Maddy, I would like details of the Saturday shared mimosa walk in Cannes, €35 with snack included. Date: … Number of people: …")} target="_blank" rel="noopener noreferrer">{url ? (locale === "fr" ? "Réserver sur Regiondo" : "Book on Regiondo") : (locale === "fr" ? "Me renseigner auprès de Maddy" : "Ask Maddy for details")} ↗</a>
  </div></section>;
}
