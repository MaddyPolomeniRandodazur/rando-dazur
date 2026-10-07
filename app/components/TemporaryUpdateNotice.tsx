import styles from "./TemporaryUpdateNotice.module.css";

// Temporary notice: remove this wrapper from both root layouts when updates are complete.
export default function TemporaryUpdateNotice({ children }: { children: React.ReactNode }) {
  return (
    <>
      <aside className={styles.notice} aria-label="Website update information">
        Website currently being updated — Some content may still change. For any questions or bookings, call Maddy: {" "}
        <a href="tel:+33667906932">+33 6 67 90 69 32</a>
      </aside>
      <div className={styles.site}>{children}</div>
    </>
  );
}
