"use client";

/**
 * Neutral nameplate behind brand logos — extracted from the /design-systems
 * directory card so every surface that renders a brand logo shares the same
 * treatment (issue #19). The neutral chip guarantees legibility even when a
 * brand's primary color matches its logo color (e.g. Toss's blue favicon on
 * its blue tile), which used to make builder step-1 logos disappear.
 *
 * Fallback chain mirrors the original card logo: primary URL → favicon →
 * initial letter.
 */

import { useState } from "react";
import { getLogoUrl, getLogoFallbackUrl, isGitHubLogo } from "@/lib/logos";

type Surface = "card" | "brand";
type Size = "xs" | "md" | "lg";

const CHIP: Record<Size, string> = {
  xs: "h-4 w-4 rounded",
  md: "h-9 w-9 rounded-lg",
  lg: "h-12 w-12 rounded-xl",
};
const VECTOR: Record<Size, string> = {
  xs: "h-3 w-3",
  md: "h-5 w-5",
  lg: "h-7 w-7",
};
const RASTER: Record<Size, string> = {
  xs: "h-3 w-3 rounded",
  md: "h-6 w-6 rounded",
  lg: "h-8 w-8 rounded",
};
const INITIAL: Record<Size, string> = {
  xs: "text-[9px]",
  md: "text-sm",
  lg: "text-base",
};

export function BrandNameplateLogo({
  refId,
  name,
  surface = "card",
  size = "md",
  className = "",
}: {
  refId: string;
  name: string;
  /** "card"  — theme-aware muted chip on app surfaces (directory cards).
   *  "brand" — fixed light chip for brand-colored backgrounds (builder
   *            step-1 tiles), where a theme-muted chip would vanish against
   *            dark brand primaries in dark mode. */
  surface?: Surface;
  size?: Size;
  /** Extra classes appended to the chip (hover transitions etc.). */
  className?: string;
}) {
  const [stage, setStage] = useState<0 | 1 | 2>(0);
  // Dark logo on the light neutral chip; "card" surfaces invert it in dark mode.
  const primaryUrl = getLogoUrl(refId, "111111");
  const fallbackUrl = getLogoFallbackUrl(refId);
  const src = stage === 0 ? primaryUrl : stage === 1 ? fallbackUrl : null;
  const raster = isGitHubLogo(refId);

  const chip =
    surface === "card"
      ? "bg-muted/60 ring-1 ring-border/50 dark:bg-muted/30 dark:ring-border"
      : "bg-white/90 ring-1 ring-black/10 shadow-sm";
  const wrap = `flex shrink-0 items-center justify-center ${CHIP[size]} ${chip} ${className}`;

  if (!src) {
    return (
      <div className={wrap}>
        <span
          className={`${INITIAL[size]} font-bold ${
            surface === "card" ? "text-foreground/70" : "text-black/70"
          }`}
        >
          {name.charAt(0).toUpperCase()}
        </span>
      </div>
    );
  }
  return (
    <div className={wrap}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={name}
        onError={() => setStage((s) => (s < 2 ? ((s + 1) as 0 | 1 | 2) : 2))}
        className={`object-contain ${
          raster
            ? RASTER[size]
            : `${VECTOR[size]}${surface === "card" ? " dark:invert" : ""}`
        }`}
        loading="lazy"
      />
    </div>
  );
}
