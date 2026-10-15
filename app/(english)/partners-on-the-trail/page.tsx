import FieldPartnersPage from "../../components/FieldPartnersPage";
import { fieldPartnersContent } from "../../i18n/field-partners";
import { getLocalizedPageMetadata } from "../../lib/metadata";
export function generateMetadata() { const copy = fieldPartnersContent.en; return getLocalizedPageMetadata({ locale: "en", path: "/partners-on-the-trail", title: `${copy.title} | Rando d’Azur`, description: copy.description }); }
export default function Page() { return <FieldPartnersPage locale="en" />; }
