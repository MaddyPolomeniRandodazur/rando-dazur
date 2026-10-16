import type { Metadata } from "next";
import PressPage from "../../components/PressPage";
import { pressMedia } from "../../i18n/press-media";
import { getLocalizedPageMetadata } from "../../lib/metadata";

export function generateMetadata(): Metadata {
  const copy = pressMedia.en;

  return getLocalizedPageMetadata({
    locale: "en",
    path: "/press",
    title: copy.seoTitle,
    description: copy.description,
  });
}

export default function Page() {
  return <PressPage locale="en" />;
}
