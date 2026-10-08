import type { Locale } from "../i18n/config";
import styles from "./TemporaryUpdateNotice.module.css";

// Temporary notice: remove this wrapper from both root layouts when updates are complete.
export default function TemporaryUpdateNotice({ children, locale = "en" }: { children: React.ReactNode; locale?: Locale }) {
  return (
    <>
      <aside className={styles.notice} aria-label={locale === "fr" ? "Information sur la mise à jour du site" : "Website update information"}>
        {locale === "fr" ? "Site en cours de mise à jour — Certains contenus peuvent encore évoluer. Pour toute question ou réservation, appelez Maddy :" : "Website currently being updated — Some content may still change. For any questions or bookings, call Maddy:"} {" "}
        <a href="tel:+33667906932">+33 6 67 90 69 32</a>
      </aside>
      <div className={styles.site}>{children}</div>
    </>
  );
}
