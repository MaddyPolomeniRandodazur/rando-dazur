import Image from "next/image";
import Link from "next/link";
import { localePath } from "../i18n/config";
import { getTravelTradeContent } from "../i18n/travel-trade";
import type { Locale } from "../i18n/config";
import { getMessages } from "../i18n/messages";
import type { ExperiencePhoto } from "../lib/experience-photos";

export default function ClientsSection({
  locale,
  corporatePhoto,
}: {
  locale: Locale;
  corporatePhoto: ExperiencePhoto | null;
}) {
  const copy = getMessages(locale).mice;

  return (
    <section className="mice-section" id="agences-mice">
      <div className="mice-image">
        {corporatePhoto && (
          <Image
            src={corporatePhoto.src}
            alt={copy.imageAlt}
            fill
            sizes="(max-width: 860px) 100vw, 50vw"
          />
        )}
      </div>
      <div className="mice-content">
        <p className="eyebrow eyebrow-light">{copy.eyebrow}</p>
        <h2>
          {copy.titleFirst}
          <br />
          <em>{copy.titleSecond}</em>
        </h2>
        <p className="mice-lead">{copy.introduction}</p>
        <Link className="text-link" href={localePath(locale, "/travel-trade")}>{getTravelTradeContent(locale).linkLabel} ↗</Link>
        <div className="mice-points">
          {copy.points.map((point, index) => (
            <p key={point}>
              <span>0{index + 1}</span> {point}
            </p>
          ))}
        </div>
        <a className="button button-outline" href="#contact">
          {copy.cta} <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}