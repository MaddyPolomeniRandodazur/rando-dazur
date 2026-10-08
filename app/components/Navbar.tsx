"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";
import { isLocale, localePath, type Locale } from "../i18n/config";
import { getMessages, type MessagesForLocale } from "../i18n/messages";
import { getWhatsAppUrl } from "../lib/whatsapp";
import { youthGroupsContent } from "../i18n/youth-groups";
import BrandLogo from "./BrandLogo";
import SocialLinks from "./SocialLinks";
import { regiondoShopUrl } from "../lib/regiondo";

function closeMenus(event: MouseEvent<HTMLAnchorElement>) {
  const link = event.currentTarget;
  const dropdown = link.closest("details");
  if (dropdown instanceof HTMLDetailsElement) dropdown.open = false;

  const mobileMenu = link.closest(".mobile-nav");
  if (mobileMenu instanceof HTMLDetailsElement) mobileMenu.open = false;
}

function getUnlocalizedPath(pathname: string) {
  const [firstSegment, ...rest] = pathname.split("/").filter(Boolean);
  if (firstSegment && isLocale(firstSegment)) {
    return rest.length ? `/${rest.join("/")}` : "";
  }
  return pathname === "/" ? "" : pathname;
}

function ExperiencesMenu({
  locale,
  copy,
  mobile = false,
}: {
  locale: Locale;
  copy: MessagesForLocale["navigation"];
  mobile?: boolean;
}) {
  const root = localePath(locale, "");
  const experiencePages: Record<string, string> = {
    "food-tours": "food-tours",
    "hiking-experiences": "hiking-experiences",
    "sunset-apero-hikes": "sunset-apero-hikes",
    "cycling-experiences": "cycling-experiences",
    "wild-provence": "wild-provence",
    "edible-plants": "edible-plants",
    "outdoor-escape-games": "outdoor-escape-games",
    "family-experiences": "family-experiences",
    "evjf-experiences": "evjf-experiences",
    "evg-experiences": "evg-experiences",
    "corporate-incentive-travel": "corporate-incentive-travel",
    "cruise-guests": "cruise-guests",
  };

  return (
    <details className={`nav-dropdown${mobile ? " nav-dropdown-mobile" : ""}`}>
      <summary>
        {copy.experiences} <span aria-hidden="true">⌄</span>
      </summary>
      <nav aria-label={copy.experiencesLabel}>
        {copy.experienceLinks.map(([slug, label]) => {
          const pageSlug = experiencePages[slug];
          const href = pageSlug
            ? localePath(locale, `/experiences/${pageSlug}`)
            : slug === "private-experiences"
              ? `${root}#booking`
              : `${root}#${slug}`;

          return (
            <Link href={href} key={slug} onClick={closeMenus}>
              {label}
            </Link>
          );
        })}
      </nav>
    </details>
  );
}

function GroupsMenu({ locale, mobile = false }: { locale: Locale; mobile?: boolean }) {
  const copy = getMessages(locale);
  return <details className={`nav-dropdown${mobile ? " nav-dropdown-mobile" : ""}`}>
    <summary>{copy.navigation.groups} <span aria-hidden="true">⌄</span></summary>
    <nav aria-label={copy.navigation.groups}>
      <Link href={localePath(locale, "/kids-schools-youth-groups")} onClick={closeMenus}>{youthGroupsContent[locale].title}</Link>
      {["family-experiences", "evjf-experiences", "corporate-incentive-travel"].map(slug => <Link key={slug} href={localePath(locale, `/experiences/${slug}`)} onClick={closeMenus}>{copy.navigation.experienceLinks.find(([id]) => id === slug)?.[1]}</Link>)}
      <Link href={localePath(locale, "/travel-trade")} onClick={closeMenus}>{locale === "fr" ? "Agences & partenaires professionnels" : "Travel trade & DMC partners"}</Link>
    </nav>
  </details>;
}

function LanguageSelector({
  locale,
  copy,
}: {
  locale: Locale;
  copy: MessagesForLocale["navigation"];
}) {
  const pathname = usePathname();
  const currentPath = getUnlocalizedPath(pathname);

  return (
    <details className="language-selector">
      <summary aria-label={copy.chooseLanguage}>
        {locale.toUpperCase()} <span aria-hidden="true">⌄</span>
      </summary>
      <div className="language-options">
        {copy.languages.map(([language, label]) => {
          const targetLocale = language as Locale;
          const href = localePath(targetLocale, currentPath);

          return (
            <Link
              aria-current={targetLocale === locale ? "true" : undefined}
              href={href}
              key={language}
              onClick={closeMenus}
            >
              {label}
              {targetLocale === locale && <small>{copy.current}</small>}
            </Link>
          );
        })}
      </div>
    </details>
  );
}

function BookingLink({
  copy,
  mobile = false,
}: {
  locale: Locale;
  copy: MessagesForLocale["navigation"];
  mobile?: boolean;
}) {
  const href = regiondoShopUrl;

  return (
    <a
      className={`booking-button${mobile ? " booking-button-mobile" : ""}`}
      href={href}
      onClick={closeMenus}
      data-conversion="booking_request"
      rel="noopener noreferrer"
      target="_blank"
    >
      {copy.book} <span aria-hidden="true">↗</span>
    </a>
  );
}

export default function Navbar({
  locale,
  copy,
  contactCopy,
  lightBackground = false,
}: {
  locale: Locale;
  copy: MessagesForLocale["navigation"];
  contactCopy: MessagesForLocale["contact"];
  lightBackground?: boolean;
}) {
  const root = localePath(locale, "");
  const links = [
    { href: `${root}#riviera-map`, label: copy.destinations },
    { href: `${root}#about`, label: copy.about },
    { href: localePath(locale, "/press"), label: copy.press },
    { href: `${root}#reviews`, label: copy.reviews },
    { href: `${root}#contact`, label: copy.contact },
  ];

  return (
    <header className={`site-header${lightBackground ? " site-header-light" : ""}`}>
      <Link
        className="brand"
        href={`${root}#accueil`}
        aria-label="Rando d’Azur"
      >
        <BrandLogo priority variant={lightBackground ? "blue" : "white"} />
        <span className="brand-tagline">{copy.brandLine}</span>
      </Link>

      <nav className="desktop-nav" aria-label={copy.mainLabel}>
        <Link href={`${root}#accueil`}>{copy.home}</Link>
        <ExperiencesMenu copy={copy} locale={locale} />
        <GroupsMenu locale={locale} />
        {links.map((link) => (
          <Link href={link.href} key={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="header-tools">
        <SocialLinks
            locale={locale}
          ariaLabel={copy.socialNavigationLabel}
          className="header-social-links"
        />
        <div className="header-actions">
          <LanguageSelector copy={copy} locale={locale} />
          <BookingLink copy={copy} locale={locale} />
        </div>

        <details className="mobile-nav">
          <summary aria-label={copy.openMenu}>
            <span />
            <span />
          </summary>
          <nav aria-label={copy.mobileLabel}>
            <Link href={`${root}#accueil`} onClick={closeMenus}>
              {copy.home}
            </Link>
            <ExperiencesMenu copy={copy} locale={locale} mobile />
            <GroupsMenu locale={locale} mobile />
            {links.map((link) => (
              <Link href={link.href} key={link.href} onClick={closeMenus}>
                {link.label}
              </Link>
            ))}
            <LanguageSelector copy={copy} locale={locale} />
            <BookingLink copy={copy} locale={locale} mobile />
          </nav>
        </details>
      </div>
      <a
        aria-label={contactCopy.maddyButton}
        className="whatsapp-floating"
        href={getWhatsAppUrl(contactCopy.whatsappMessage)}
        rel="noopener noreferrer"
        target="_blank"
      >
        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
          <path
            d="M4.2 19.8 5.3 16a8.2 8.2 0 1 1 3 3l-4.1.8Z"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="1.6"
          />
          <path
            d="M9 8.7c.2-.5.5-.5.8-.5h.4c.2 0 .4.1.5.4l.7 1.6c.1.2 0 .4-.1.6l-.6.7c-.2.2-.2.4-.1.6.4.7 1 1.3 1.7 1.7.2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.6-.1l1.5.7c.3.1.4.3.4.5 0 .4-.2 1.1-.7 1.5-.5.4-1.1.6-1.7.5-1-.2-2.2-.7-3.4-1.8-1.3-1.2-2.1-2.7-2.3-3.6-.2-.7 0-1.4.3-1.9.2-.2.5-.4.7-.5Z"
            fill="currentColor"
          />
        </svg>
        <span>{contactCopy.maddyButton}</span>
      </a>
    </header>
  );
}
