import MeetMaddyPage from "../../components/MeetMaddyPage";
import { professionalContent } from "../../i18n/professional-content";
import { getLocalizedPageMetadata } from "../../lib/metadata";
export function generateMetadata() { const copy = professionalContent.en; return getLocalizedPageMetadata({ locale: "en", path: "/meet-maddy", title: copy.seoTitle, description: copy.description, image: "/images/about/maddy-polomeni-mimosa-portrait.jpg" }); }
export default function Page() { return <MeetMaddyPage locale="en" />; }
