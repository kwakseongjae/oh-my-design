"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      {/* omd:feel — reducedMotion="user" makes every framer-motion component
          respect prefers-reduced-motion (transform/layout animations off,
          opacity kept). One point, covers home + docs + the whole site.
          🟢 a11y SPEC. */}
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </NextThemesProvider>
  );
}
