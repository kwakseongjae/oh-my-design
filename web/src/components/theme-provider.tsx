"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Site-wide client provider. The site is light only (owner, 2026-10-16): no theme
 * switcher, no `.dark` class, `color-scheme: light` on <html> (globals.css), so an OS
 * dark preference never bleeds into form controls or scrollbars. next-themes went with it.
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    /* omd:feel — reducedMotion="user" makes every framer-motion component respect
       prefers-reduced-motion (transform/layout animations off, opacity kept). 🟢 a11y SPEC. */
    <MotionConfig reducedMotion="user">{children}</MotionConfig>
  );
}
