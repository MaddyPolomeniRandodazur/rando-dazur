import Image from "next/image";
import type { Locale } from "../i18n/config";
import { getMessages } from "../i18n/messages";
import {
  supportingOrganizations,
  trustedPartners,
} from "../lib/partner-content";

export default function PartnerTrustSection({ locale }: { locale: Locale }) {
  const copy = getMessages(locale).partners;

  return (
    <section
      aria-label={copy.trustedTitle}
      className="partner-trust-section scroll-reveal"
      id="partners"
    >
      <div className="page-width partner-trust-inner">
        <section
          aria-labelledby="supported-by-title"
          className="partner-trust-group"
        >
          <div className="partner-trust-heading">
            <p className="eyebrow">{copy.supportedEyebrow}</p>
            <h2 id="supported-by-title">{copy.supportedTitle}</h2>
            <p>{copy.supportedSubtitle}</p>
          </div>
          <LogoWall
            copy={copy}
            items={supportingOrganizations}
            variant="supporters"
          />
        </section>

        <section
          aria-labelledby="trusted-partners-title"
          className="partner-trust-group"
        >
          <div className="partner-trust-heading">
            <p className="eyebrow">{copy.trustedEyebrow}</p>
            <h2 id="trusted-partners-title">{copy.trustedTitle}</h2>
            <p>{copy.trustedSubtitle}</p>
          </div>
          <LogoWall copy={copy} items={trustedPartners} variant="partners" />
        </section>
      </div>
    </section>
  );
}

function LogoWall({
  copy,
  items,
  variant,
}: {
  copy: ReturnType<typeof getMessages>["partners"];
  items: typeof supportingOrganizations;
  variant: "supporters" | "partners";
}) {
  return (
    <div className={`partner-logo-wall partner-logo-wall-${variant}`}>
      {items.map((partner) => (
        <a
          aria-label={`${copy.visitWebsite}: ${partner.name}${partner.caption ? ` · ${getPartnerCaption(copy, partner.caption)}` : ""}`}
          className={`partner-logo-card${variant === "supporters" ? " partner-logo-card-supporter" : ""}`}
          href={partner.href}
          key={partner.name}
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="partner-logo-stage">
            {partner.logo ? (
              <Image
                alt={partner.name}
                className={`partner-logo-image${partner.name === "Andy Swann Voyage" ? " partner-logo-image-white" : ""}${variant === "supporters" ? " partner-logo-image-supporter" : ""}`}
                height={100}
                sizes="(max-width: 520px) 40vw, (max-width: 780px) 28vw, 190px"
                src={partner.logo}
                width={240}
              />
            ) : (
              <span className="partner-logo-placeholder">
                <strong>{partner.name}</strong>
                <span>{copy.logoPlaceholder}</span>
              </span>
            )}
          </span>
          {partner.caption && (
            <span className="partner-supporter-copy">
              <span>{getPartnerCaption(copy, partner.caption)}</span>
              {partner.caption !== "technical" && (
                <strong>{partner.name}</strong>
              )}
            </span>
          )}
        </a>
      ))}
    </div>
  );
}

function getPartnerCaption(
  copy: ReturnType<typeof getMessages>["partners"],
  caption: NonNullable<(typeof supportingOrganizations)[number]["caption"]>,
) {
  switch (caption) {
    case "technical":
      return copy.technicalPartnerLabel;
    case "equipment":
      return copy.equipmentPartnerLabel;
    case "supportedBy":
      return copy.supportedByLabel;
  }
}
