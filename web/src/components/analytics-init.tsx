"use client";

import { useEffect } from "react";
import { initErrorLogging, initScrollDepth } from "@/lib/gtag";
import { pulseActive } from "@/lib/active";

/**
 * Client-only analytics side-effects, mounted once in the root layout.
 * - global JS error logging → GA `js_error`
 * - scroll depth 25/50/75/100% → GA `scroll_depth`
 * - active-user pulse → server-side HLL DAU/WAU/MAU (consent-independent)
 *
 * gtag itself is injected in layout.tsx (guarded by GA_ID). These listeners
 * no-op gracefully when window.gtag is absent (e.g. GA_ID unset locally), so
 * mounting this is always safe. `pulseActive` is independent of gtag/consent —
 * it only sends an anonymous "browser was active today" beacon to /api/active.
 */
export function AnalyticsInit() {
  useEffect(() => {
    initErrorLogging();
    initScrollDepth();
    pulseActive();
  }, []);
  return null;
}
