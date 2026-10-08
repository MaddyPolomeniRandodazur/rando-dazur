import Image from "next/image";
import type { Locale } from "../i18n/config";
import { getWhatsAppUrl } from "../lib/whatsapp";
import styles from "./CyclingLessons.module.css";

const content = {
  fr: {
    eyebrow: "COURS PARTICULIERS DE VÉLO",
    title: "Envie de faire du vélo, mais vous ne savez pas encore en faire… ou vous avez oublié ?",
    paragraphs: [
      "Il n'est jamais trop tôt ni trop tard pour apprendre à faire du vélo !",
      "Je propose des cours particuliers d'apprentissage, de remise en selle et de perfectionnement, pour les enfants comme pour les adultes.",
      "Que ce soit pour apprendre à pédaler, retrouver confiance ou améliorer sa technique, chaque séance est adaptée à votre niveau et à vos objectifs.",
    ],
    levels: "Tous niveaux : débutants, remise en selle et perfectionnement.",
    audience: "Enfants et adultes.",
    location: "Lieu : Cannes.",
    price: "40 € / heure",
    rental: "Location de vélo non comprise dans le tarif.",
    cta: "Réserver mon cours",
    message: "Bonjour Maddy, je souhaite réserver un cours particulier de vélo à Cannes (40 € / heure, location de vélo non comprise).",
    alt: "Illustration d’une femme accompagnant une enfant casquée qui apprend à faire du vélo, avec un paysage méditerranéen en arrière-plan",
  },
  en: {
    eyebrow: "PRIVATE CYCLING LESSONS",
    title: "Want to ride a bike, but haven’t learned yet… or need a fresh start?",
    paragraphs: [
      "It’s never too early or too late to learn to ride a bike!",
      "I offer private lessons for children and adults, whether you’re learning for the first time, getting back in the saddle or refining your skills.",
      "From your first pedal strokes to rebuilding confidence or improving your technique, every session is tailored to your level and goals.",
    ],
    levels: "All levels: beginners, returning riders and skills development.",
    audience: "Children and adults.",
    location: "Location: Cannes.",
    price: "€40 per hour",
    rental: "Bicycle rental is not included in the price.",
    cta: "Book my lesson",
    message: "Hello Maddy, I would like to book a private cycling lesson in Cannes (€40 per hour, bicycle rental not included).",
    alt: "Illustration of a woman supporting a helmeted child learning to ride a bike, with a Mediterranean landscape in the background",
  },
};

export default function CyclingLessons({ locale }: { locale: Locale }) {
  const copy = content[locale];
  return (
    <section className={styles.section} aria-labelledby="cycling-lessons-title">
      <div className={`page-width ${styles.inner}`}>
        <div className={styles.photo}>
          <Image src="/images/experiences/cannes-private-cycling-lessons.jpg" alt={copy.alt} width={1280} height={960} sizes="(max-width: 800px) 100vw, 50vw" />
        </div>
        <div className={styles.copy}>
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 id="cycling-lessons-title">{copy.title}</h2>
          {copy.paragraphs.map(text => <p key={text}>{text}</p>)}
          <ul><li>{copy.levels}</li><li>{copy.audience}</li><li>{copy.location}</li></ul>
          <div className={styles.rate}><p className={styles.price}>{copy.price}</p><p>{copy.rental}</p></div>
          <a className="button button-dark" href={getWhatsAppUrl(copy.message)} target="_blank" rel="noopener noreferrer">{copy.cta} <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}
