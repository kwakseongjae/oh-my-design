// Consent state + GA Consent Mode v2 helper. This is the single gate that
// controls BOTH GA and Mixpanel: non-EU visitors are auto-granted (no banner),
// EEA/UK/CH visitors stay denied until they Accept. The stored choice persists
// the decision across visits.
export type Consent = "granted" | "denied";

const STORAGE_KEY = "omd-consent";

export function getStoredConsent(): Consent | null {
  if (typeof window === "undefined") return null;
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

export function setStoredConsent(v: Consent) {
  try {
    window.localStorage.setItem(STORAGE_KEY, v);
  } catch {
    /* private mode — fine, the banner simply reappears next visit */
  }
}

/** Flip GA Consent Mode to granted. No-ops when GA isn't loaded (e.g. local dev
 *  where NEXT_PUBLIC_GA_ID is unset, so the gtag scripts never render). */
export function grantGAConsent() {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("consent", "update", {
      analytics_storage: "granted",
      ad_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
    });
  }
}

/** Flip GA Consent Mode back to denied — used when a user withdraws consent. */
export function revokeGAConsent() {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("consent", "update", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
  }
}
