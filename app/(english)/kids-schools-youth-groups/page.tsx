import YouthGroupsPage from "../../components/YouthGroupsPage";
import { youthGroupsContent } from "../../i18n/youth-groups";
import { getLocalizedPageMetadata } from "../../lib/metadata";
export function generateMetadata() {
  const copy = youthGroupsContent.en;
  return getLocalizedPageMetadata({ locale: "en", path: "/kids-schools-youth-groups", title: copy.seoTitle, description: copy.description });
}
export default function Page() { return <YouthGroupsPage locale="en" />; }
