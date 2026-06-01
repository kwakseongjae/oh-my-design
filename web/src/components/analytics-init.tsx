"use client";

import { useEffect } from "react";
import { initErrorLogging, initScrollDepth } from "@/lib/gtag";

/**
 * Client-only analytics side-effects, mounted once in the root layout.
 * - global JS error logging → GA `js_error`
 * - scroll depth 25/50/75/100% → GA `scroll_depth`
 *
 * gtag itself is injected in layout.tsx (guarded by GA_ID). These listeners
 * no-op gracefully when window.gtag is absent (e.g. GA_ID unset locally), so
 * mounting this is always safe.
 */
export function AnalyticsInit() {
  useEffect(() => {
    initErrorLogging();
    initScrollDepth();
  }, []);
  return null;
}
