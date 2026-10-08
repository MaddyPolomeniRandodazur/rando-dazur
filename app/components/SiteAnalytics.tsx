"use client";

import { Analytics } from "@vercel/analytics/next";
import { track } from "@vercel/analytics";
import { useEffect, useRef, useSyncExternalStore } from "react";
import { localePath, type Locale } from "../i18n/config";
import { analyticsContent } from "../i18n/analytics-content";
import { hasAnalyticsConsent, saveAnalyticsChoice, subscribeAnalyticsConsent } from "../lib/analytics-consent";
import { conversionForLink, filterAnalyticsEvent } from "../lib/analytics-privacy";
import styles from "./SiteAnalytics.module.css";

const noConsentOnServer = () => false;
export function AnalyticsSettingsLink({ locale }: { locale: Locale }) {
  return <button className={styles.settings} type="button" onClick={() => window.dispatchEvent(new Event("rando:analytics-settings"))}>{analyticsContent[locale].settings}</button>;
}

export default function SiteAnalytics({ locale }: { locale: Locale }) {
  const allowed = useSyncExternalStore(subscribeAnalyticsConsent, hasAnalyticsConsent, noConsentOnServer);
  const dialog = useRef<HTMLDialogElement>(null);
  const copy = analyticsContent[locale];
  useEffect(() => {
    const open = () => dialog.current?.showModal();
    const click = (event: MouseEvent) => {
      if (!hasAnalyticsConsent() || !(event.target instanceof Element)) return;
      const link = event.target.closest<HTMLAnchorElement>("a[href]");
      if (!link) return;
      const conversion = conversionForLink(link);
      // Fixed event names only: no href, label, phone, email, text or form data.
      if (conversion && filterAnalyticsEvent({ type: "event", url: location.href })) track(conversion);
    };
    window.addEventListener("rando:analytics-settings", open);
    document.addEventListener("click", click, true);
    return () => {
      window.removeEventListener("rando:analytics-settings", open);
      document.removeEventListener("click", click, true);
    };
  }, []);
  function choose(value: boolean) {
    saveAnalyticsChoice(value);
    dialog.current?.close();
    // Unload an already-loaded SDK on withdrawal. beforeSend blocks immediately.
    if (!value && allowed) window.location.reload();
  }
  return <>
    {allowed && <Analytics beforeSend={filterAnalyticsEvent} />}
    <dialog ref={dialog} className={styles.dialog} aria-labelledby="analytics-choice-title">
      <h2 id="analytics-choice-title">{copy.title}</h2><p>{copy.description}</p><p>{copy.storage}</p>
      <div className={styles.actions}><button type="button" onClick={() => choose(true)}>{copy.accept}</button><button type="button" onClick={() => choose(false)}>{copy.refuse}</button></div>
      <a href={localePath(locale, "/privacy-policy")}>{copy.policy}</a>
      <button type="button" className={styles.close} onClick={() => dialog.current?.close()}>{copy.close}</button>
    </dialog>
  </>;
}
