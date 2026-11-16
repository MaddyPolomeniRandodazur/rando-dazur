import Image from "next/image";
import Link from "next/link";
import { localePath, type Locale } from "../i18n/config";
import { getMessages } from "../i18n/messages";
import { getWebPageStructuredData, getFaqStructuredData } from "../lib/structured-data";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "./GiftCardsPage.module.css";

export const giftCardUrl = "https://giftcards.sumup.com/order/MCTZENS4";
export const giftCardImage = "/images/gifts/bon-cadeau-rando-azur-2027.webp";
export const giftCardSeo = {
  fr: { title: "Bon cadeau nature Côte d’Azur : offrez une expérience | Rando d’Azur", description: "Une idée cadeau pour parents, couple ou famille : offrez un bon d’achat Rando d’Azur pour une expérience sur la Côte d’Azur. Valable en 2027, achat via SumUp." },
  en: { title: "French Riviera experience gift cards | Rando d’Azur", description: "Give a nature experience on the French Riviera: Rando d’Azur gift vouchers for parents, couples and families. Valid in 2027. Buy through SumUp." },
};

export default function GiftCardsPage({ locale }: { locale: Locale }) {
  const fr = locale === "fr";
  const messages = getMessages(locale);
  const faq = fr ? [
    { question: "Que contient le bon cadeau ?", answer: "C’est un bon d’achat Rando d’Azur, et non une sortie à date fixe. Le montant est choisi lors de l’achat sur SumUp. Le bénéficiaire pourra échanger avec Maddy pour préparer son expérience, selon la valeur du bon, les disponibilités et les conditions de l’activité." },
    { question: "Quelle est sa durée de validité ?", answer: "Le bon cadeau est valable en 2027. Les conditions affichées lors de l’achat sur SumUp s’appliquent." },
    { question: "Faut-il choisir une date au moment d’offrir ?", answer: "Non : vous offrez un bon d’achat. Le bénéficiaire contactera Maddy pour convenir de son projet et d’une date disponible." },
    { question: "Est-ce une idée de cadeau pour une famille ou des parents ?", answer: "Oui : une expérience peut se préparer en tenant compte des âges, du niveau de marche et des envies. Contactez Maddy avant de réserver pour vérifier que l’activité et le budget conviennent." },
    { question: "Comment acheter le bon cadeau ?", answer: "Le bouton d’achat ouvre la page sécurisée SumUp de Maddy POLOMENI. Choisissez le montant et suivez les instructions de commande. La réservation de l’activité se prépare ensuite avec Maddy." },
  ] : [
    { question: "What does the gift voucher include?", answer: "This is a Rando d’Azur monetary voucher, not a dated activity booking. Choose the amount on SumUp. The recipient can contact Maddy to plan an experience, subject to voucher value, availability and activity conditions." },
    { question: "When is it valid?", answer: "The voucher is valid in 2027. The conditions shown at checkout on SumUp apply." },
    { question: "Do I need to choose a date now?", answer: "No. Give the voucher first; the recipient can contact Maddy to discuss their plans and an available date." },
    { question: "Is it suitable for parents or a family?", answer: "An experience can be planned around ages, walking ability and interests. Contact Maddy before booking to check suitability and budget." },
    { question: "How do I buy a voucher?", answer: "The purchase button opens Maddy POLOMENI’s secure SumUp gift-card page. Choose the amount and follow the checkout instructions. Arrange the activity separately with Maddy." },
  ];
  const cards = fr ? [
    ["Pour vos parents", "Une idée cadeau pour des parents qui aiment prendre l’air : une balade guidée, de beaux paysages et le plaisir de découvrir autrement la Côte d’Azur."],
    ["Pour un couple", "Offrez une expérience à vivre à deux : une parenthèse nature, une randonnée apéro ou une découverte gourmande à imaginer ensemble."],
    ["Pour une famille", "Une idée cadeau famille qui fait place à la curiosité : balade ou escape game en plein air, à choisir avec Maddy selon l’âge des enfants."],
  ] : [
    ["For parents", "Give parents who love the outdoors time to explore: a guided walk, beautiful landscapes and a different side of the French Riviera."],
    ["For a couple", "Give an experience for two: time in nature, an apéro hike or a food discovery to plan together."],
    ["For a family", "Make room for curiosity with a family walk or outdoor escape game, chosen with Maddy to suit the children’s ages."],
  ];
  const activities = [
    ["hiking-experiences", fr ? "Randonnées guidées" : "Guided walks"],
    ["sunset-apero-hikes", fr ? "Randonnées apéro" : "Apéro hikes"],
    ["outdoor-escape-games", fr ? "Escape games en plein air" : "Outdoor escape games"],
    ["family-experiences", fr ? "Expériences en famille" : "Family experiences"],
  ];
  const cta = fr ? "Offrir un bon cadeau" : "Give a gift voucher";
  return <>
    <Navbar locale={locale} copy={messages.navigation} contactCopy={messages.contact} lightBackground />
    <main className={styles.page}>
      <section className={`page-width ${styles.hero}`}>
        <div><p className="eyebrow">{fr ? "BON CADEAU · VALABLE EN 2027" : "GIFT VOUCHER · VALID IN 2027"}</p>
          <h1>{fr ? "Offrez une expérience nature sur la Côte d’Azur" : "Give a nature experience on the French Riviera"}</h1>
          <p className={styles.lead}>{fr ? "Du grand air, des découvertes… et de beaux souvenirs. Pour Noël, un anniversaire ou le plaisir d’offrir, choisissez un bon d’achat Rando d’Azur." : "Fresh air, discoveries and lovely memories. For Christmas, a birthday or just because: choose a Rando d’Azur gift voucher."}</p>
          <a className="button button-dark" href={giftCardUrl} target="_blank" rel="noopener noreferrer">{cta} ↗</a>
          <p className={styles.note}>{fr ? "Montant au choix sur SumUp · Bon d’achat valable en 2027" : "Choose the amount on SumUp · Voucher valid in 2027"}</p>
        </div>
        <Image src={giftCardImage} alt={fr ? "Visuel du bon cadeau Rando d’Azur valable en 2027, illustration de la Côte d’Azur" : "Rando d’Azur gift voucher valid in 2027, French Riviera illustration"} width={1200} height={800} priority sizes="(max-width: 800px) 100vw, 48vw" />
      </section>
      <section className={`page-width ${styles.section}`}><p className="eyebrow">{fr ? "MOINS D’OBJETS, PLUS DE MOMENTS ENSEMBLE" : "FEWER THINGS, MORE SHARED MOMENTS"}</p>
        <h2>{fr ? "Une idée cadeau insolite pour ceux que vous aimez" : "An original gift for the people you love"}</h2>
        <div className={styles.grid}>{cards.map(([title,text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>
      <section className={styles.band}><div className="page-width"><h2>{fr ? "Comment offrir une expérience ?" : "How does it work?"}</h2>
        <ol className={styles.grid}>{(fr ? ["Choisissez le montant de votre bon d’achat sur SumUp.", "Offrez le bon cadeau : pas besoin de fixer la date de la sortie aujourd’hui.", "Le bénéficiaire échange avec Maddy pour choisir une expérience et une date disponible en 2027."] : ["Choose your voucher amount on SumUp.", "Give the voucher — no need to choose the activity date today.", "The recipient contacts Maddy to choose an experience and an available date in 2027."]).map(text => <li key={text}>{text}</li>)}</ol>
        <p className={styles.note}>{fr ? "Le bon représente une valeur d’achat : le budget nécessaire dépend de l’expérience choisie. Vérifiez les conditions sur SumUp et échangez avec Maddy avant la réservation." : "The voucher has a monetary value; the budget required depends on the chosen experience. Check the SumUp conditions and discuss your plans with Maddy before booking."}</p>
      </div></section>
      <section className={`page-width ${styles.section}`}><h2>{fr ? "Un cadeau tourné vers la nature et les rencontres" : "A gift inspired by nature and local encounters"}</h2>
        <p>{fr ? "Vous cherchez une alternative aux objets ou une idée d’éco cadeau ? Offrir une expérience, c’est privilégier le temps partagé et la découverte locale. Balades dans l’Estérel, mimosa en saison, saveurs de la Côte d’Azur : le programme se construit selon les envies et les possibilités du moment." : "Looking for an alternative to another object? Give shared time and local discovery: Estérel walks, seasonal mimosa and Riviera flavours, planned around interests and what is available."}</p>
        <div className={styles.links}>{activities.map(([slug,label]) => <Link className="text-link" key={slug} href={localePath(locale, `/experiences/${slug}`)}>{label} ↗</Link>)}<Link className="text-link" href={localePath(locale,"/experiences/route-du-mimosa")}>{fr ? "Balades mimosa en saison" : "Seasonal mimosa walks"} ↗</Link></div>
      </section>
      <section className={`page-width ${styles.section}`}><h2>{fr ? "Vos questions sur les bons cadeaux" : "Gift voucher questions"}</h2><div className="destination-faq-list">{faq.map(item => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div></section>
      <section className={`${styles.band} ${styles.last}`}><div className="page-width"><h2>{fr ? "À Noël, offrez une escapade dont on se souviendra encore en janvier." : "This Christmas, give an escape they will still remember in January."}</h2><a className="button button-dark" href={giftCardUrl} target="_blank" rel="noopener noreferrer">{cta} ↗</a><p><Link className="text-link" href={`${localePath(locale)}#booking`}>{fr ? "Une question ? Préparez votre cadeau avec Maddy" : "Questions? Plan your gift with Maddy"} ↗</Link></p></div></section>
    </main>
    <Footer locale={locale} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@graph":[getWebPageStructuredData(locale,"/gift-cards",giftCardSeo[locale].title,giftCardSeo[locale].description),getFaqStructuredData(locale,"/gift-cards",faq)]}).replace(/</g,"\u003c") }} />
  </>;
}
