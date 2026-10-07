import Image from "next/image";
import { type Locale } from "../i18n/config";
import { getMessages } from "../i18n/messages";
import { professionalContent } from "../i18n/professional-content";
import { getBusinessStructuredData, getWebsiteStructuredData, getWebPageStructuredData, getPersonStructuredData, getBreadcrumbStructuredData } from "../lib/structured-data";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MaddyProfile from "./MaddyProfile";
import BookingSection from "./BookingSection";
export default function MeetMaddyPage({ locale }: { locale: Locale }) {
 const messages = getMessages(locale), copy = professionalContent[locale];
 const graph = { "@context": "https://schema.org", "@graph": [getBusinessStructuredData(locale), getWebsiteStructuredData(), getPersonStructuredData(locale), { ...getWebPageStructuredData(locale, "/meet-maddy", copy.profileTitle, copy.description), mainEntity: { "@id": getPersonStructuredData(locale)["@id"] } }, getBreadcrumbStructuredData(locale, [{ name: messages.navigation.home, path: "" }, { name: "Maddy Polomeni", path: "/meet-maddy" }])] };
 return <><Navbar locale={locale} copy={messages.navigation} contactCopy={messages.contact} /><main>
   <section className="experience-detail-hero">
     <Image src="/images/about/maddy-polomeni-mimosa-portrait.jpg" alt="Maddy Polomeni with yellow mimosa on the French Riviera" fill preload sizes="100vw" className="experience-detail-photo" style={{ objectPosition: "45% 35%" }} />
     <div className="hero-shade" aria-hidden="true" />
     <div className="page-width experience-detail-content"><p className="eyebrow eyebrow-light">RANDO D’AZUR · CANNES</p><h1>{copy.profileTitle}</h1><p className="hero-description">{copy.description}</p></div>
   </section>
   <div className="page-width"><MaddyProfile locale={locale} showProfileLink={false} /></div>
   <BookingSection locale={locale} />
 </main><Footer locale={locale} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }} /></>;
}
