import Link from "next/link";
import Image from "next/image";
import { localePath, type Locale } from "../i18n/config";
import { youthGroupsContent } from "../i18n/youth-groups";

export default function YouthGroupsSection({ locale, illustrated = false }: { locale: Locale; illustrated?: boolean }) {
  const copy = youthGroupsContent[locale];
  if (illustrated) {
    return <section className="home-youth-section" aria-labelledby="youth-groups-title">
      <div className="page-width home-youth-inner">
        <div className="home-youth-photo">
          <Image
            src="/images/groups/children-nature-walk-mediterranean.jpg"
            alt={locale === "fr"
              ? "Un groupe d’enfants découvre le paysage méditerranéen avec une accompagnatrice lors d’une sortie nature"
              : "Children discovering the Mediterranean landscape with a guide during an outdoor nature activity"}
            width={1280}
            height={720}
            sizes="(max-width: 800px) 100vw, 55vw"
          />
        </div>
        <div className="home-youth-copy">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 id="youth-groups-title">{copy.title}</h2>
          <p className="section-intro">{copy.introduction}</p>
          <p className="section-intro">{copy.quote}</p>
          <Link className="text-link" href={localePath(locale, "/kids-schools-youth-groups")}>{copy.discover} <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </section>;
  }
  return <section className="experience-detail-section" aria-labelledby="youth-groups-title">
    <div className="page-width">
      <div className="section-heading">
        <div><p className="eyebrow">{copy.eyebrow}</p><h2 id="youth-groups-title">{copy.title}</h2></div>
        <p className="section-intro">{copy.introduction}</p>
      </div>
      <p className="section-intro">{copy.quote}</p>
      <Link className="text-link" href={localePath(locale, "/kids-schools-youth-groups")}>{copy.discover} <span aria-hidden="true">↗</span></Link>
    </div>
  </section>;
}
