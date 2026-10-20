"use client";

/**
 * A brand's genuine logo, or nothing (round 11, owner rule #16).
 *
 * The server resolves which file to show (app/(en)/design-systems/archive-rows.server.ts:
 * the official SVG collection, else the brand's own favicon). This component only
 * draws it, flat and as delivered: no recolouring, no effects, white artwork on an
 * ink tile because that is the ground it was published for. When the image fails —
 * or comes back as a raster under 32px, which is how Google's favicon proxy answers
 * an unknown domain (HTTP 404 with a 16×16 globe that browsers render without an
 * error event) — the component renders nothing and the caller's layout reads as
 * text only. There is no initial-letter or keycap stand-in.
 */

import { useEffect, useRef, useState } from "react";

export interface BrandLogoData {
  src: string;
  kind: "svg" | "favicon";
  dark?: boolean;
}

const MIN_RASTER = 32;

function unusable(img: HTMLImageElement, kind: BrandLogoData["kind"]): boolean {
  if (!img.complete) return false;
  if (img.naturalWidth === 0) return true;
  return kind === "favicon" && !/\.svg(\?|$)/i.test(img.currentSrc || img.src) && img.naturalWidth < MIN_RASTER;
}

export function BrandLogo({
  logo,
  className = "",
  onMissing,
}: {
  logo: BrandLogoData | null | undefined;
  /** Size and placement come from the caller's stylesheet. */
  className?: string;
  /** Called once if the image turns out unusable, so a caller can drop surrounding chrome. */
  onMissing?: () => void;
}) {
  const [gone, setGone] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  const drop = () => {
    setGone(true);
    onMissing?.();
  };

  // An image that failed before hydration fired its events with no listener attached.
  useEffect(() => {
    if (ref.current && logo && unusable(ref.current, logo.kind)) drop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [logo?.src]);

  if (!logo || gone) return null;
  return (
    <span className={`sq-logo${logo.dark ? " sq-logo-dark" : ""}${logo.kind === "favicon" ? " sq-logo-fav" : ""} ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={ref}
        src={logo.src}
        alt=""
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        onError={drop}
        onLoad={(e) => {
          if (unusable(e.currentTarget, logo.kind)) drop();
        }}
      />
    </span>
  );
}
