import JournalPage from "../../components/JournalPage";
import { getLocalizedPageMetadata } from "../../lib/metadata";

export function generateMetadata() {
  return getLocalizedPageMetadata({
    locale: "en",
    path: "/journal",
    title: "The Riviera Journal | Rando d’Azur",
    description:
      "Seasonal notes, local knowledge and stories from the French Riviera. The first Rando d’Azur journal pieces are in preparation.",
    noIndex: true,
  });
}

export default function Page() {
  return <JournalPage locale="en" />;
}
