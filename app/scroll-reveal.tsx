"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const elements = document.querySelectorAll<HTMLElement>(".scroll-reveal");
    if (!elements.length) return;

    document.documentElement.classList.add("has-scroll-reveal");

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -70px 0px", threshold: 0.08 },
    );

    elements.forEach((element) => observer.observe(element));

    const parallaxElements = document.querySelectorAll<HTMLElement>("[data-parallax]");
    let frame = 0;

    const updateParallax = () => {
      frame = 0;
      parallaxElements.forEach((element) => {
        const section = element.parentElement;
        if (!section) return;
        const progress = Math.min(
          Math.max(-section.getBoundingClientRect().top, 0),
          section.offsetHeight,
        );
        element.style.setProperty("--parallax-y", `${progress * 0.12}px`);
      });
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateParallax);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateParallax();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.cancelAnimationFrame(frame);
      document.documentElement.classList.remove("has-scroll-reveal");
    };
  }, []);

  return null;
}
