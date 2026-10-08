import { contactChannels, isPublishedSocialUrl } from "../lib/contact-channels";

const accounts = [
  {
    label: "Facebook",
    href: contactChannels.facebookUrl,
    icon: "facebook",
  },
  {
    label: "Instagram",
    href: contactChannels.instagramUrl,
    icon: "instagram",
  },
] as const;

export default function SocialLinks({
  ariaLabel,
  className,
  showLabels = false,
}: {
  ariaLabel: string;
  className: string;
  showLabels?: boolean;
}) {
  return (
    <nav aria-label={ariaLabel} className={`social-links ${className}`}>
      {accounts.filter(account => isPublishedSocialUrl(account.href)).map((account) => (
        <a
          aria-label={`Follow Rando d’Azur on ${account.label}`}
          className="social-link"
          href={account.href}
          key={account.icon}
          rel="noopener noreferrer"
          target="_blank"
        >
          {account.icon === "facebook" ? (
            <svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.28 20v-7.27h2.44l.37-2.84h-2.81V8.07c0-.82.23-1.38 1.4-1.38h1.5V4.15c-.26-.03-1.14-.11-2.16-.11-2.15 0-3.62 1.31-3.62 3.72v2.13H8v2.84h2.4V20h2.88Z" />
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              viewBox="0 0 24 24"
            >
              <rect height="17" rx="5" width="17" x="3.5" y="3.5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.7" cy="6.6" fill="currentColor" r="1" stroke="none" />
            </svg>
          )}
          {showLabels && <span>{account.label}</span>}
        </a>
      ))}
    </nav>
  );
}
