import type { Locale } from "../i18n/config";
import { getMessages } from "../i18n/messages";
import Footer from "./Footer";
import Navbar from "./Navbar";
import PressSection from "./PressSection";
import ScrollReveal from "../scroll-reveal";

export default function PressPage({ locale }: { locale: Locale }) {
  const messages = getMessages(locale);

  return (
    <>
      <Navbar
        contactCopy={messages.contact}
        copy={messages.navigation}
        locale={locale}
      />
      <ScrollReveal />
      <main className="press-page">
        <PressSection locale={locale} fullPage />
      </main>
      <Footer locale={locale} />
    </>
  );
}
