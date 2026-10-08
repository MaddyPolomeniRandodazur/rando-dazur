"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState, useSyncExternalStore } from "react";
import { localePath, type Locale } from "../i18n/config";
import { isMimosaPromotionActive, mimosaCampaign, mimosaCopy, mimosaArchivePhotos, parisDate } from "../lib/mimosa-campaign";
import styles from "./MimosaCampaign.module.css";
const key = "rando-mimosa-banner-2027-dismissed";
function snapshot() {
  try { if (sessionStorage.getItem(key) === "1") return false; } catch { /* Closing still works with storage disabled through the DOM event. */ }
  return isMimosaPromotionActive(parisDate());
}
function subscribe(callback: () => void) {
  const timer = setInterval(callback, 60_000);
  window.addEventListener("mimosa-banner-change", callback);
  return () => { clearInterval(timer); window.removeEventListener("mimosa-banner-change", callback); };
}
export default function MimosaBanner({ locale }: { locale: Locale }) {
  const path = usePathname();
  const [closed, setClosed] = useState(false);
  const visible = useSyncExternalStore(subscribe, snapshot, () => false);
  const copy = mimosaCopy[locale];
  if (!visible || closed || path?.endsWith(mimosaCampaign.path)) return null;
  return <aside className={styles.banner} aria-label={copy.bannerTitle} data-mimosa-banner>
    <button className={styles.close} aria-label={copy.close} onClick={() => { setClosed(true); try { sessionStorage.setItem(key, "1"); } catch { /* Remains closed for this page when storage is unavailable. */ } window.dispatchEvent(new Event("mimosa-banner-change")); }}>×</button>
    <Image src={mimosaArchivePhotos[0].src} width={64} height={80} alt="" sizes="64px" />
    <div><strong>{copy.bannerTitle}</strong><p>{copy.bannerText}</p><p>{copy.bannerFacts}</p><Link href={localePath(locale, mimosaCampaign.path)}>{copy.bannerLink} ↗</Link></div>
  </aside>;
}
