import LegalPage, { getLegalPageMetadata } from "../../components/LegalPage";

export function generateMetadata() {
  return getLegalPageMetadata("en", "privacy-policy");
}

export default function Page() {
  return <LegalPage locale="en" slug="privacy-policy" />;
}
