import JournalPage from "../../components/JournalPage";
import { getLocalizedPageMetadata } from "../../lib/metadata";

export function generateMetadata() {
  return getLocalizedPageMetadata({
    locale: "en",
    path: "/journal",
    title: "The Riviera Journal | Rando d’Azur",
    description:
      "Mimosa blossom, gardens, winter walks, Nice Carnival and Menton’s Lemon Festival: local guides for your French Riviera stay with Rando d’Azur.",
  });
}

export default function Page() {
  return <JournalPage locale="en" />;
}
