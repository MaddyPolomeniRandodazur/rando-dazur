"use client";

import type { BeforeSendEvent } from "@vercel/analytics";
import { destinationSlugs } from "../i18n/destination-content";
import { experienceSlugs, legalPageSlugs } from "../i18n/config";
import { hasAnalyticsConsent } from "./analytics-consent";

const publicPaths = new Set([
  "/", "/meet-maddy", "/press", "/travel-trade", "/journal",
  ...legalPageSlugs.map(slug => `/${slug}`),
  ...experienceSlugs.map(slug => `/experiences/${slug}`),
  ...destinationSlugs.map(slug => `/destinations/${slug}`),
]);

function isPublicPath(path: string) {
  return publicPaths.has(path.replace(/^\/(fr|it)(?=\/|$)/, "") || "/");
}

export function filterAnalyticsEvent(event: BeforeSendEvent): BeforeSendEvent | null {
  if (!hasAnalyticsConsent()) return null;
  try {
    // The SDK includes document.referrer independently of beforeSend.url.
    // Drop events when that referrer might contain identifying information.
    if (document.referrer) {
      const referrer = new URL(document.referrer);
      if (referrer.search || referrer.hash || (referrer.origin === location.origin ? !isPublicPath(referrer.pathname) : referrer.pathname !== "/")) return null;
    }
    // Never forward identity/traits from the SDK's optional attribution feature.
    if (localStorage.getItem("__va_attribution")) return null;
    const details = event as BeforeSendEvent & { payload?: { name?: unknown; data?: unknown }; __cdp?: unknown };
    if (details.__cdp !== undefined) return null;
    if (event.type === "event" && details.payload) {
      if (!["whatsapp_click", "phone_click", "email_click", "booking_request_click"].includes(String(details.payload.name))) return null;
      if (details.payload.data && (typeof details.payload.data !== "object" || Object.keys(details.payload.data).length > 0)) return null;
    }
    const url = new URL(event.url);
    if (url.origin !== location.origin || !isPublicPath(url.pathname)) return null;
    return { ...event, url: `https://www.randodazur.com${url.pathname}` };
  } catch { return null; }
}

export function conversionForLink(link: HTMLAnchorElement) {
  const href = link.getAttribute("href") ?? "";
  if (link.dataset.conversion === "booking_request" || /(?:^|\/)#booking$/.test(href) || href.endsWith("#booking")) return "booking_request_click";
  if (/^tel:/i.test(href)) return "phone_click";
  if (/^mailto:/i.test(href)) return "email_click";
  try {
    const url = new URL(href, location.origin);
    if (["wa.me", "api.whatsapp.com", "web.whatsapp.com"].includes(url.hostname)) return "whatsapp_click";
  } catch { /* Not an actionable URL. */ }
  return null;
}
