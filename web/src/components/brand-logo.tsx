"use client";

/**
 * A brand's genuine logo, or — where the caller asks for it — the oh-my-design mark as a
 * stand-in (round 11, owner rule #16; stand-in added by the owner, 2026-11-04).
 *
 * The server resolves which file to show (app/(en)/design-systems/archive-rows.server.ts:
 * the official SVG collection, else the icon the brand's homepage declares, else the
 * brand's own favicon). This component only
 * draws it, flat and as delivered: no recolouring, no effects, white artwork on an
 * ink tile because that is the ground it was published for. When the image fails —
 * or comes back as a raster under 32px, which is how Google's favicon proxy answers
 * an unknown domain (HTTP 404 with a 16×16 globe that browsers render without an
 * error event) — the component renders nothing and the caller's layout reads as
 * text only. A card passes `fallback`: then the tile shows our own mark instead, muted, so it
 * reads as a stand-in and never as the brand's logo. There is still no initial letter, no
 * brand-coloured glyph and nothing drawn from the brand.
 */

import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/brand-a/logo";

export interface BrandLogoData {
  src: string;
  /** `icon` (a harvested first-party icon) is drawn and checked exactly like `favicon`. */
  kind: "svg" | "icon" | "favicon";
  dark?: boolean;
}

const squareTile = (kind: BrandLogoData["kind"]) => kind !== "svg";

const MIN_RASTER = 32;

function unusable(img: HTMLImageElement, kind: BrandLogoData["kind"]): boolean {
  if (!img.complete) return false;
  if (img.naturalWidth === 0) return true;
  return squareTile(kind) && !/\.svg(\?|$)/i.test(img.currentSrc || img.src) && img.naturalWidth < MIN_RASTER;
}

export function BrandLogo({
  logo,
  className = "",
  onMissing,
  fallback = false,
}: {
  logo: BrandLogoData | null | undefined;
  /** Size and placement come from the caller's stylesheet. */
  className?: string;
  /** Called once if the image turns out unusable, so a caller can drop surrounding chrome. */
  onMissing?: () => void;
  /** With no usable logo, draw the oh-my-design mark on the same tile instead of nothing. */
  fallback?: boolean;
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

  if (!logo || gone) {
    if (!fallback) return null;
    return (
      <span className={`sq-logo sq-logo-fav sq-logo-omd ${className}`} aria-hidden="true">
        <Logo wordmark={false} />
      </span>
    );
  }
  return (
    <span className={`sq-logo${logo.dark ? " sq-logo-dark" : ""}${squareTile(logo.kind) ? " sq-logo-fav" : ""} ${className}`}>
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
