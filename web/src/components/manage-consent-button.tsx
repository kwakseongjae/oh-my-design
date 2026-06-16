"use client";

/**
 * Re-opens the analytics consent banner from anywhere (privacy pages, footer).
 * Lets a user who accepted/auto-granted withdraw later — GDPR Art.7(3) / PIPA
 * 처리정지 require withdrawal to be as easy as giving consent. Dispatches a
 * window event that AnalyticsConsent (mounted in the root layout) listens for.
 */
export function ManageConsentButton({
  label = "Manage analytics preferences",
  className = "underline underline-offset-2 hover:text-foreground",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("omd:manage-consent"))}
      className={className}
    >
      {label}
    </button>
  );
}
