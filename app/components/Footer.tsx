import { localePath, type Locale } from "../i18n/config";
import { youthGroupsContent } from "../i18n/youth-groups";
import { getTravelTradeContent } from "../i18n/travel-trade";
import { getMessages } from "../i18n/messages";
import { contactChannels } from "../lib/contact-channels";
import { regiondoShopUrl } from "../lib/regiondo";
import { getWhatsAppUrl } from "../lib/whatsapp";
import { AnalyticsSettingsLink } from "./SiteAnalytics";
import BrandLogo from "./BrandLogo";
import BackToTop from "./BackToTop";
import SocialLinks from "./SocialLinks";

export default function Footer({ locale }: { locale: Locale }) {
  const messages = getMessages(locale);
  const copy = messages.footer;
  const contactCopy = messages.contact;
  const root = localePath(locale, "");

  return (
    <>
      <section
        aria-labelledby="social-follow-title"
        className="social-follow-section"
      >
        <div className="page-width social-follow-inner">
          <div className="social-follow-copy">
            <p className="eyebrow">{copy.followEyebrow}</p>
            <h2 id="social-follow-title">{copy.followTitle}</h2>
            <p>{copy.followDescription}</p>
          </div>
          <SocialLinks
            locale={locale}
            ariaLabel={messages.navigation.socialNavigationLabel}
            className="follow-social-links"
            showLabels
          />
        </div>
      </section>
      <footer className="footer-section" id="contact">
        <div className="page-width footer-main">
          <div className="footer-brand-block">
            <a className="brand footer-brand" href={`${root}#accueil`}>
              <BrandLogo variant="white" />
              <span className="brand-tagline">{copy.brandLine}</span>
            </a>
            <p>{copy.descriptor}</p>
            <div className="footer-contact-details">
              <p className="eyebrow eyebrow-light">{copy.contactDetailsTitle}</p>
              <SocialLinks
            locale={locale}
                ariaLabel={messages.navigation.socialNavigationLabel}
                className="footer-social-links"
                showLabels
              />
              <nav aria-label={copy.contactLinksLabel} className="footer-contact-links">
                <a
                  href={getWhatsAppUrl(contactCopy.whatsappMessage)}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {copy.whatsappLabel}
                  <span aria-hidden="true">↗</span>
                </a>
                <a href={`tel:${contactChannels.phoneInternational}`}>
                  <span>{copy.phoneLabel}</span>
                  <span>{contactChannels.phoneDisplay}</span>
                </a>
                <a href={`mailto:${contactChannels.primaryEmail}`}>
                  <span>{copy.emailLabel}</span>
                  <span>{contactChannels.primaryEmail}</span>
                </a>
                {contactChannels.secondaryEmail !== contactChannels.primaryEmail && <a href={`mailto:${contactChannels.secondaryEmail}`}>
                  <span>{copy.partnershipsEmailLabel}</span>
                  <span>{contactChannels.secondaryEmail}</span>
                </a>}
              </nav>
            </div>
          </div>
          <div className="footer-signature">
            <p className="eyebrow eyebrow-light">{copy.eyebrow}</p>
            <h2>{copy.brandFirst}<br /><em>{copy.brandSecond}</em></h2>
            <p className="footer-manifesto">
              {copy.manifesto.map((phrase) => (
                <span key={phrase}>{phrase}</span>
              ))}
            </p>
            <a className="button button-light" href={regiondoShopUrl} target="_blank" rel="noopener noreferrer" data-conversion="booking_request">
              {copy.cta} <span aria-hidden="true">↗</span>
            </a>
            <a
              className="button button-quiet footer-maddy-contact"
              href={getWhatsAppUrl(contactCopy.whatsappMessage)}
              rel="noopener noreferrer"
              target="_blank"
            >
              {contactCopy.maddyButton}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
          <nav className="footer-links" aria-label={copy.navigationLabel}>
            <a href={`${root}#experiences`}>{copy.experiences}</a>
            <a href={localePath(locale, "/kids-schools-youth-groups")}>{youthGroupsContent[locale].title}</a>
            <a href={`${root}#agences-mice`}>{copy.mice}</a>
            <a href={localePath(locale, "/travel-trade")}>{getTravelTradeContent(locale).linkLabel}</a>
            <a href={localePath(locale, "/meet-maddy")}>{copy.about}</a>
            <a href={`${root}#riviera-map`}>{copy.destinations}</a>
            <a href={localePath(locale, "/legal-notice")}>{copy.legalNotice}</a>
            <a href={localePath(locale, "/terms-and-conditions")}>{copy.terms}</a>
            <a href={localePath(locale, "/privacy-policy")}>{copy.privacy}</a>
            <a href={localePath(locale, "/cookie-policy")}>{copy.cookies}</a>
            <AnalyticsSettingsLink locale={locale} />
          </nav>
        </div>
        <div className="page-width footer-bottom">
          <span>© {new Date().getFullYear()} Rando d’Azur · {copy.copyright}</span>
          <a href={`${root}#accueil`}>{copy.backToTop} ↑</a>
        </div>
        <BackToTop label={copy.backToTop} />
      </footer>
    </>
  );
}
