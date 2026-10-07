import TravelTradePage from "../../components/TravelTradePage";
import { getTravelTradeContent } from "../../i18n/travel-trade";
import { getLocalizedPageMetadata } from "../../lib/metadata";
export function generateMetadata() {
  const copy = getTravelTradeContent("en");
  return getLocalizedPageMetadata({ locale: "en", path: "/travel-trade", title: copy.seoTitle, description: copy.description });
}
export default function Page() { return <TravelTradePage locale="en" />; }
