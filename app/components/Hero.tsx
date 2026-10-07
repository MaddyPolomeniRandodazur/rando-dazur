import Image from "next/image";
import type { Locale } from "../i18n/config";
import { getMessages } from "../i18n/messages";
import type { ExperiencePhoto } from "../lib/experience-photos";

export default function Hero({
  locale,
  photo,
}: {
  locale: Locale;
  photo: ExperiencePhoto;
}) {
  const copy = getMessages(locale).hero;

  return (
    <section className="hero" id="accueil">
      <Image
        className="hero-image"
        src={photo.src}
        alt={copy.imageAlt}
        fill
        sizes="100vw"
        preload
      />
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-content page-width">
        <p className="eyebrow eyebrow-light">{copy.eyebrow}</p>
        <h1>
          {copy.titleFirst}
          <br />
          <em>{copy.titleSecond}</em>
        </h1>
        <p className="hero-description">{copy.description}</p>
        <div className="hero-actions">
          <a className="button button-light" href="#experiences">
            {copy.discover}
            <span aria-hidden="true">↗</span>
          </a>
          <a className="button button-quiet" href="#agences-mice">
            {copy.create}
          </a>
        </div>
        <div className="hero-caption" aria-hidden="true">
          <span>43°33’ N &nbsp; 7°01’ E</span>
          <span>{copy.scroll}</span>
        </div>
      </div>
    </section>
  );
}