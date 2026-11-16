import GiftCardsPage, { giftCardImage, giftCardSeo } from "../../components/GiftCardsPage";
import { getLocalizedPageMetadata } from "../../lib/metadata";
export function generateMetadata() { return getLocalizedPageMetadata({locale:"en",path:"/gift-cards",...giftCardSeo.en,image:giftCardImage}); }
export default function Page() { return <GiftCardsPage locale="en" />; }
