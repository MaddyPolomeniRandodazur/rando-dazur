import LegalPage, { getLegalPageMetadata } from "../../components/LegalPage";

export function generateMetadata() {
  return getLegalPageMetadata("en", "terms-and-conditions");
}

export default function Page() {
  return <LegalPage locale="en" slug="terms-and-conditions" />;
}
