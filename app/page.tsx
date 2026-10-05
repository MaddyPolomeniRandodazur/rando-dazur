import Image from "next/image";
import ScrollReveal from "./scroll-reveal";

type IconName = "arrow" | "mountain" | "star" | "whatsapp" | "instagram" | "mail";

function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  const common = {
    "aria-hidden": true as const,
    className,
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.7,
    viewBox: "0 0 24 24",
  };

  if (name === "arrow") {
    return (
      <svg {...common}>
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    );
  }

  if (name === "mountain") {
    return (
      <svg {...common}>
        <path d="m3 19 7-13 4 7 2-3 5 9H3Z" />
        <path d="m8 10 2 2 2-2" />
      </svg>
    );
  }

  if (name === "star") {
    return (
      <svg {...common}>
        <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
      </svg>
    );
  }

  if (name === "whatsapp") {
    return (
      <svg {...common}>
        <path d="M20.4 11.6a8.4 8.4 0 0 1-12.4 7.3L4 20l1.2-3.8a8.4 8.4 0 1 1 15.2-4.6Z" />
        <path d="M9 8.3c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .5.4l.7 1.6c.1.2 0 .4-.1.6l-.5.6c-.2.2-.2.4 0 .6.5.9 1.2 1.5 2.1 1.9.2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.6-.1l1.5.7c.3.1.4.3.3.6-.1.5-.3.9-.7 1.2-.4.4-1 .6-1.5.5-1-.1-2.4-.7-3.6-1.8-1.3-1.2-2-2.7-2.1-3.7 0-.7.1-1.3.4-1.8Z" />
      </svg>
    );
  }

  if (name === "instagram") {
    return (
      <svg {...common}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M17.5 6.5h.01" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

const navigation = [
  ["Accueil", "#accueil"],
  ["Randonnées", "#randonnees"],
  ["L’esprit Rando d’Azur", "#pourquoi"],
  ["À propos", "#maddy"],
  ["Avis", "#avis"],
  ["FAQ", "#faq"],
  ["Contact", "#contact"],
];

const experiences = [
  {
    number: "01",
    title: "Randonnées guidées",
    description: "L’Estérel en confidence, ses sentiers secrets et ses plus beaux panoramas.",
    detail: "L’Estérel, accompagné autrement",
    image: "/esterel-calanque.webp",
    alt: "Crique turquoise bordée par les roches rouges de l’Estérel",
  },
  {
    number: "02",
    title: "Aventures en famille",
    description: "Des escapades joyeuses, adaptées aux petits pas comme aux grandes curiosités.",
    detail: "Les premières histoires de plein air",
    image: "/mimosa.webp",
    alt: "Mimosa en fleurs sur la Côte d’Azur",
  },
  {
    number: "03",
    title: "Excursions privées",
    description: "Un itinéraire imaginé rien que pour vous, au rythme de vos envies.",
    detail: "Le privilège du sur-mesure",
    image: "/cap-antibes.webp",
    alt: "Coucher de soleil sur le Cap d’Antibes",
  },
  {
    number: "04",
    title: "Randonnées au coucher du soleil",
    description: "L’Estérel s’embrase, la mer scintille : prolongez la journée en beauté.",
    detail: "L’heure dorée, côté mer",
    image: "/cap-antibes.webp",
    alt: "La lumière du soir sur la Méditerranée au Cap d’Antibes",
  },
  {
    number: "05",
    title: "Team building au grand air",
    description: "Rassemblez votre équipe autour d’une aventure qui a du sens.",
    detail: "Des liens qui prennent de la hauteur",
    image: "/verdon.webp",
    alt: "Les falaises monumentales des gorges du Verdon",
  },
];

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#accueil" aria-label="Rando d’Azur — accueil">
        <Image className="brand-logo" src="/logo.png" alt="Rando d’Azur" width={222} height={63} style={{ height: "auto" }} priority />
      </a>

      <nav className="desktop-nav" aria-label="Navigation principale">
        {navigation.map(([label, href]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </nav>

      <a className="header-cta" href="#contact">
        Partir en randonnée <Icon name="arrow" />
      </a>

      <details className="mobile-nav">
        <summary aria-label="Ouvrir le menu">
          <span />
          <span />
        </summary>
        <nav aria-label="Navigation mobile">
          {navigation.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
      </details>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="accueil">
      <div className="hero-image" data-parallax aria-hidden="true" />
      <div className="hero-grain" aria-hidden="true" />
      <Header />

      <div className="hero-content page-width">
        <p className="eyebrow hero-eyebrow">
          <span className="eyebrow-line" />
          RANDONNÉES PRIVÉES · MASSIF DE L’ESTÉREL
        </p>
        <h1>
          Randonnées accompagnées
          <br />
          sur la <em>Côte d’Azur.</em>
        </h1>
        <p className="hero-description">
          Découvrez les plus beaux sentiers entre mer et montagne avec Maddy
          Polomeni, guide diplômée.
        </p>
        <div className="hero-actions">
          <a
            className="button button-light"
            href="https://wa.me/?text=Bonjour%20Maddy%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20vos%20randonn%C3%A9es."
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="whatsapp" />
            Réserver sur WhatsApp
          </a>
          <a className="button button-outline" href="#randonnees">
            Découvrir les randonnées <Icon name="arrow" />
          </a>
        </div>
      </div>

      <div className="hero-bottom page-width">
        <span>ESTÉREL · RIVIERA FRANÇAISE</span>
        <span className="hero-scroll">
          DÉFILER POUR EXPLORER <i />
        </span>
        <span>VAR · CÔTE D’AZUR</span>
      </div>
      <div className="hero-side-note" aria-hidden="true">
        LE SOUFFLE DU SUD, AU FIL DES SENTIERS
      </div>
    </section>
  );
}

function WhyRandoDAzur() {
  const reasons = [
    ["01", "Un regard local", "Les chemins confidentiels de l’Estérel, partagés par une enfant du pays."],
    ["02", "Une guide diplômée", "Une présence attentive, des itinéraires sûrs et un rythme qui vous ressemble."],
    ["03", "Des sorties privées", "Un petit groupe, de vraies rencontres et toute la place pour respirer."],
    ["04", "Le goût du beau", "La lumière du Sud, les roches rouges et cette mer qu’on n’oublie pas."],
  ];

  return (
    <section className="why-section" id="pourquoi">
      <div className="page-width">
        <div className="section-heading scroll-reveal">
          <div>
            <p className="eyebrow"><span className="eyebrow-line" /> L’ESPRIT RANDO D’AZUR</p>
            <h2>
              Le Sud se découvre
              <br />
              <em>à pas choisis.</em>
            </h2>
          </div>
          <p className="section-intro">
            Plus qu’une randonnée, une parenthèse précieuse au cœur d’une
            Riviera sauvage, lumineuse et profondément vivante.
          </p>
        </div>
        <div className="reasons-grid">
          {reasons.map(([number, title, description]) => (
            <article className="reason-card scroll-reveal" key={number}>
              <span className="reason-number">{number}</span>
              <span className="reason-icon"><Icon name="mountain" /></span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Statistics() {
  return (
    <section className="statistics-section" aria-label="Quelques repères Rando d’Azur">
      <div className="page-width statistics-grid">
        <div className="stat-item scroll-reveal">
          <strong>15<span>+</span></strong>
          <p>années à arpenter la Riviera</p>
        </div>
        <div className="stat-item scroll-reveal">
          <strong>1&nbsp;000<span>+</span></strong>
          <p>randonneurs heureux sur les sentiers</p>
        </div>
        <div className="stat-item scroll-reveal">
          <strong>5<span className="stat-star">★</span></strong>
          <p>avis Google <small>· note à confirmer</small></p>
        </div>
      </div>
    </section>
  );
}

function Experiences() {
  return (
    <section className="section experiences-section" id="randonnees">
      <div className="page-width">
        <div className="section-heading scroll-reveal">
          <div>
            <p className="eyebrow"><span className="eyebrow-line" /> NOS RANDONNÉES</p>
            <h2>
              L’Estérel,
              <br />
              <em>à votre manière.</em>
            </h2>
          </div>
          <p className="section-intro">
            Des roches rouges aux criques turquoise, choisissez votre façon de
            vous évader et laissez le quotidien derrière vous.
          </p>
        </div>

        <div className="experience-grid">
          {experiences.map((experience) => (
            <a
              className="experience-card scroll-reveal"
              href="#contact"
              key={experience.number}
            >
              <div
                className="experience-image"
                role="img"
                aria-label={experience.alt}
                style={{ backgroundImage: `url("${experience.image}")` }}
              >
                <span className="card-number">{experience.number}</span>
                <span className="card-arrow"><Icon name="arrow" /></span>
              </div>
              <div className="experience-copy">
                <span className="card-detail">{experience.detail}</span>
                <h3>{experience.title}</h3>
                <p>{experience.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const testimonials = [
    {
      initials: "ÉM",
      name: "Élodie M.",
      context: "EN FAMILLE · ESTÉREL",
      quote: "Une parenthèse lumineuse, au rythme de chacun. Le genre de journée qui donne envie de revenir.",
    },
    {
      initials: "TL",
      name: "Thomas L.",
      context: "EXCURSION PRIVÉE",
      quote: "Des paysages incroyables et cette délicieuse impression d’avoir découvert un secret bien gardé.",
    },
    {
      initials: "CP",
      name: "Camille P.",
      context: "COUCHER DE SOLEIL",
      quote: "La lumière, la mer, les roches rouges… un souvenir qu’on emporte longtemps avec soi.",
    },
  ];

  return (
    <section className="reviews-section" id="avis">
      <div className="page-width reviews-inner">
        <div className="reviews-heading scroll-reveal">
          <p className="eyebrow eyebrow-light">
            <span className="eyebrow-line" /> ILS EN PARLENT
          </p>
          <h2>
            Les plus beaux
            <br />
            souvenirs <em>se partagent.</em>
          </h2>
          <p className="reviews-intro">
            Aperçus à remplacer par vos véritables avis avant publication.
          </p>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <article className="testimonial-card scroll-reveal" key={testimonial.initials}>
              <div className="review-stars" aria-label="Exemple de note, cinq étoiles">
                {Array.from({ length: 5 }, (_, index) => (
                  <Icon className="star-icon" key={index} name="star" />
                ))}
              </div>
              <blockquote>« {testimonial.quote} »</blockquote>
              <div className="testimonial-author">
                <span className="testimonial-avatar">{testimonial.initials}</span>
                <span>
                  <strong>{testimonial.name}</strong>
                  <small>{testimonial.context}</small>
                </span>
              </div>
              <span className="testimonial-placeholder">EXEMPLE · AVIS À REMPLACER</span>
            </article>
          ))}
        </div>
        <a className="reviews-google-link" href="#contact">
          <span className="review-stars" aria-hidden="true">★★★★★</span>
          Préparer votre prochaine sortie <Icon name="arrow" />
        </a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about-section" id="maddy">
      <div className="page-width about-grid">
        <div className="about-photo-wrap scroll-reveal">
          <div
            className="about-photo"
            role="img"
            aria-label="Paysage méditerranéen dans le massif de l’Estérel"
          />
          <div className="about-stamp">
            <Icon name="mountain" />
            <span>DE LA MER<br />AUX SOMMETS</span>
          </div>
          <span className="photo-caption">L’ESTÉREL, MON TERRAIN DE JEU</span>
        </div>
        <div className="about-copy scroll-reveal">
          <p className="eyebrow"><span className="eyebrow-line" /> QUI VOUS ACCOMPAGNE ?</p>
          <h2>
            Bonjour,
            <br />
            moi c’est <em>Maddy.</em>
          </h2>
          <p className="about-lead">
            Guide diplômée, amoureuse des grands espaces et des petits chemins
            qui n’appartiennent qu’à ceux qui les prennent.
          </p>
          <p className="about-text">
            Entre le bleu de la Méditerranée et les reliefs des Alpes-Maritimes,
            j’imagine des sorties à taille humaine, attentives à votre rythme et
            à ce qui vous émerveille. Mon plaisir ? Vous faire découvrir ce
            territoire comme si c’était la première fois.
          </p>
          <a href="#contact" className="text-link">
            Rencontrons-nous sur les sentiers <Icon name="arrow" />
          </a>
          <div className="about-signature">Maddy Polomeni</div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const photos = [
    {
      image: "/esterel-calanque.webp",
      alt: "Crique méditerranéenne aux rochers rouges dans le massif de l’Estérel",
      caption: "ESTÉREL · ROCHES ROUGES & CRIQUES",
      className: "gallery-tall",
    },
    {
      image: "/mimosa.webp",
      alt: "Mimosa jaune en fleurs dans le massif du Tanneron",
      caption: "TANNERON · SAISON DU MIMOSA",
      className: "",
    },
    {
      image: "/cap-antibes.webp",
      alt: "La côte du Cap d’Antibes au soleil couchant",
      caption: "CAP D’ANTIBES · HEURE DORÉE",
      className: "",
    },
    {
      image: "/mercantour.webp",
      alt: "Sommets du parc national du Mercantour",
      caption: "MERCANTOUR · L’APPEL DES SOMMETS",
      className: "",
    },
    {
      image: "/verdon.webp",
      alt: "Gorges du Verdon et falaises calcaires",
      caption: "VERDON · L’HORIZON SAUVAGE",
      className: "",
    },
  ];

  return (
    <section className="gallery-section" id="galerie">
      <div className="page-width">
        <div className="gallery-heading scroll-reveal">
          <div>
            <p className="eyebrow"><span className="eyebrow-line" /> NOS GRANDS DÉCORS</p>
            <h2>
              L’appel du Sud,
              <br />
              <em>grandeur nature.</em>
            </h2>
          </div>
          <p>De l’Estérel au Mercantour, du Cap d’Antibes au Verdon, chaque sentier a son âme.</p>
        </div>
        <div className="gallery-grid scroll-reveal">
          {photos.map((photo) => (
            <div
              className={`gallery-photo ${photo.className}`}
              key={photo.image}
              role="img"
              aria-label={photo.alt}
              style={{ backgroundImage: `url("${photo.image}")` }}
            >
              <span>{photo.caption}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const questions = [
    ["À qui s’adressent les randonnées ?", "Les sorties s’adaptent à votre niveau, à vos envies et à la composition de votre groupe. Écrivez-moi pour choisir ensemble le parcours idéal."],
    ["Où ont lieu les sorties ?", "Principalement dans le massif de l’Estérel et ses environs, entre Fréjus, Saint-Raphaël et la Méditerranée. Le lieu précis est confirmé selon la sortie et les conditions."],
    ["Que faut-il prévoir ?", "Des chaussures adaptées à la marche, de l’eau, une protection solaire et une tenue confortable. Je vous envoie les conseils détaillés avant votre randonnée."],
    ["Peut-on réserver une sortie privée ou en famille ?", "Bien sûr. Les excursions privées et familiales sont pensées sur mesure, avec un itinéraire et un rythme adaptés à vos envies."],
    ["Comment réserver ?", "Contactez Maddy sur WhatsApp pour échanger sur vos dates, le nombre de participants et la sortie qui vous ressemble."],
  ];

  return (
    <section className="faq-section" id="faq">
      <div className="page-width faq-grid">
        <div className="faq-heading scroll-reveal">
          <p className="eyebrow"><span className="eyebrow-line" /> AVANT DE PARTIR</p>
          <h2>
            Les réponses
            <br />
            <em>en chemin.</em>
          </h2>
          <p>Une question qui ne figure pas ici ? Je serai ravie d’en parler avec vous.</p>
          <a
            className="text-link"
            href="https://wa.me/?text=Bonjour%20Maddy%2C%20j%27ai%20une%20question%20sur%20vos%20randonn%C3%A9es."
            target="_blank"
            rel="noreferrer"
          >
            Poser une question <Icon name="arrow" />
          </a>
        </div>
        <div className="faq-list scroll-reveal">
          {questions.map(([question, answer]) => (
            <details className="faq-item" key={question}>
              <summary>
                {question}
                <span aria-hidden="true" />
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-image" aria-hidden="true" />
      <div className="page-width contact-inner">
        <div className="contact-copy">
          <p className="eyebrow eyebrow-light">
            <span className="eyebrow-line" /> VOTRE PROCHAINE ÉCHAPPÉE
          </p>
          <h2>
            Et si on
            <br />
            <em>prenait le large ?</em>
          </h2>
          <p>Racontez-moi ce qui vous ferait vibrer. On trouve le sentier ensemble.</p>
          <a
            className="button button-light"
            href="https://wa.me/?text=Bonjour%20Maddy%2C%20j'aimerais%20organiser%20une%20randonn%C3%A9e."
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="whatsapp" />
            Parlons de votre randonnée
          </a>
        </div>
        <div className="contact-links scroll-reveal">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-icon"><Icon name="instagram" /></span>
            <span><small>RETROUVEZ-MOI SUR</small>Instagram</span>
            <Icon className="contact-arrow" name="arrow" />
          </a>
          <a href="mailto:bonjour@randodazur.fr">
            <span className="contact-icon"><Icon name="mail" /></span>
            <span><small>ÉCRIVEZ-MOI</small>bonjour@randodazur.fr</span>
            <Icon className="contact-arrow" name="arrow" />
          </a>
        </div>
      </div>
      <footer className="site-footer page-width">
        <a className="brand footer-brand" href="#accueil" aria-label="Rando d’Azur — accueil">
          <Image className="brand-logo footer-logo" src="/logo.png" alt="Rando d’Azur" width={222} height={63} style={{ height: "auto" }} />
        </a>
        <div className="footer-links">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
          <a
            href="https://wa.me/?text=Bonjour%20Maddy%2C%20je%20souhaite%20organiser%20une%20randonn%C3%A9e."
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
          <a href="mailto:bonjour@randodazur.fr">E-mail</a>
          <details className="legal-notice">
            <summary>Mentions légales</summary>
            <div>
              <p>Éditeur : Rando d’Azur · Maddy Polomeni.</p>
              <p>Adresse professionnelle, SIRET et hébergeur : informations à compléter avant publication.</p>
              <p>Crédits photographiques et licences disponibles ci-dessous.</p>
            </div>
          </details>
        </div>
        <details className="photo-credits">
          <summary>Crédits photos</summary>
          <div>
            <a href="https://commons.wikimedia.org/wiki/File:CalanquesEsterel.JPG" target="_blank" rel="noreferrer">
              Estérel · Opasteur ·{" "}
              <span>CC BY-SA 3.0</span>
            </a>
            <a href="https://commons.wikimedia.org/wiki/File:Cap_d_Antibes~Coucher_de_soleil.jpg" target="_blank" rel="noreferrer">
              Cap d’Antibes · Broenberr ·{" "}
              <span>CC BY-SA 4.0</span>
            </a>
            <a href="https://commons.wikimedia.org/wiki/File:Cime_mercantour.jpg" target="_blank" rel="noreferrer">
              Mercantour · Iros ·{" "}
              <span>CC BY-SA 2.5</span>
            </a>
            <a href="https://commons.wikimedia.org/wiki/File:Gorge_du_Verdon_Goat_0254.jpg" target="_blank" rel="noreferrer">
              Verdon · Dirk Beyer ·{" "}
              <span>CC BY-SA 3.0</span>
            </a>
            <a href="https://commons.wikimedia.org/wiki/File:Mimosa_Mandelieu-la-Napoule_01.jpg" target="_blank" rel="noreferrer">
              Mimosa · Rémih ·{" "}
              <span>CC BY-SA 4.0</span>
            </a>
          </div>
        </details>
        <span>© {new Date().getFullYear()} Rando d’Azur · Maddy Polomeni</span>
        <a href="#accueil" className="back-to-top">REMONTER ↑</a>
      </footer>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <ScrollReveal />
      <Hero />
      <WhyRandoDAzur />
      <Statistics />
      <Experiences />
      <Reviews />
      <About />
      <Gallery />
      <FAQ />
      <Contact />
      <a
        className="floating-whatsapp"
        href="https://wa.me/?text=Bonjour%20Maddy%2C%20je%20souhaite%20r%C3%A9server%20une%20randonn%C3%A9e."
        target="_blank"
        rel="noreferrer"
        aria-label="Contacter Maddy sur WhatsApp"
      >
        <Icon name="whatsapp" />
        <span>Un mot sur WhatsApp ?</span>
      </a>
    </main>
  );
}
