import type { Metadata } from "next";
import PressPage from "../../components/PressPage";
import { getMessages } from "../../i18n/messages";
import { getLocalizedPageMetadata } from "../../lib/metadata";

export function generateMetadata(): Metadata {
  const copy = getMessages("en").press;

  return getLocalizedPageMetadata({
    locale: "en",
    path: "/press",
    title: "Press & Media | Rando d’Azur",
    description: copy.pageIntroduction,
  });
}

export default function Page() {
  return <PressPage locale="en" />;
}
