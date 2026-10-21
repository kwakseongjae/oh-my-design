"use client";

import { Analytics, type BeforeSendEvent } from "@vercel/analytics/next";
import { getStoredConsent } from "@/lib/consent";

/**
 * Vercel Web Analytics: page views with referrer, path and country, for the
 * referrer/top-page view GA4 used to give us. It sets no cookies and stores no
 * identifier in the browser (visitors are a request hash that Vercel discards
 * after 24 hours), so like the /api/active pulse it runs without the banner.
 *
 * An explicit Decline still turns it off: beforeSend reads the stored choice on
 * every event, so withdrawing consent mid-session stops the next page view.
 * It is a client component only because beforeSend is a function prop.
 */
function dropIfDeclined(event: BeforeSendEvent): BeforeSendEvent | null {
  return getStoredConsent() === "denied" ? null : event;
}

export function VercelAnalytics() {
  return <Analytics beforeSend={dropIfDeclined} />;
}
