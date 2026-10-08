"use client";

export const consentKey = "rando-analytics-consent-v1";
const consentDuration = 180 * 24 * 60 * 60 * 1000;
const changeEvent = "rando:analytics-consent";
let storageUnavailable = false;
let memoryChoice: { allowed: boolean; expires: number } | undefined;

export function hasAnalyticsConsent(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const stored = window.localStorage.getItem(consentKey);
    const choice = storageUnavailable ? memoryChoice : stored ? JSON.parse(stored) : undefined;
    if (choice && typeof choice.expires === "number" && choice.expires <= Date.now()) {
      window.localStorage.removeItem(consentKey);
      memoryChoice = undefined;
      return false;
    }
    return choice?.allowed === true && typeof choice.expires === "number" && choice.expires > Date.now();
  } catch {
    return storageUnavailable && memoryChoice?.allowed === true && memoryChoice.expires > Date.now();
  }
}

export function saveAnalyticsChoice(allowed: boolean) {
  memoryChoice = { allowed, expires: Date.now() + consentDuration };
  try { window.localStorage.setItem(consentKey, JSON.stringify(memoryChoice)); storageUnavailable = false; } catch { storageUnavailable = true; }
  window.dispatchEvent(new Event(changeEvent));
}

export function subscribeAnalyticsConsent(callback: () => void) {
  window.addEventListener(changeEvent, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(changeEvent, callback);
    window.removeEventListener("storage", callback);
  };
}
