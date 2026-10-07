"use client";

import { useEffect, useState } from "react";

export default function BackToTop({ label }: { label: string }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setIsVisible(window.scrollY > 520);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  return (
    <button
      aria-label={label}
      className={`back-to-top${isVisible ? " is-visible" : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      tabIndex={isVisible ? 0 : -1}
      type="button"
    >
      <span aria-hidden="true">↑</span>
      <span>{label}</span>
    </button>
  );
}
