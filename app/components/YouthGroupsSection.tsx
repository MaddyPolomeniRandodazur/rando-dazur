import Link from "next/link";
import { localePath, type Locale } from "../i18n/config";
import { youthGroupsContent } from "../i18n/youth-groups";

export default function YouthGroupsSection({ locale }: { locale: Locale }) {
  const copy = youthGroupsContent[locale];
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
