"use client";

/**
 * Design-system directory card — extracted from /design-systems/page.tsx so
 * the same grid card serves both the full directory and /collections/[slug]
 * pages. Thumbnail cascade, logo fallback chain, and analytics stay identical;
 * only the ds_detail_open `source` varies per surface.
 */

import Link from "next/link";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { isNewRef } from "@/lib/new-refs";
import { StatusBadge } from "@/components/status-badge";
import { BrandNameplateLogo } from "@/components/brand-logo";
import type { DesignSystemInfo } from "@/lib/design-systems";
import { getLogoUrl, isGitHubLogo, getLogoFallbackUrl } from "@/lib/logos";
import { trackDetailOpen, trackExternalClick } from "@/lib/design-systems/analytics";

export function DSCard({
  ds,
  hot = false,
  source = "directory",
}: {
  ds: DesignSystemInfo;
  hot?: boolean;
  /** Where the card is rendered — becomes ds_detail_open { source }. */
  source?: string;
}) {
  const isSystem = ds.type === "system";
  const typeLabel = isSystem ? "Design System" : ds.type === "brand" ? "Brand Guide" : "Reference";
  const qualityLabel = ds.qualityStatus === "verified_v2"
    ? "Verified v2"
    : ds.qualityStatus === "partial" ? "Partial" : "Legacy";
  const qualityClass = ds.qualityStatus === "verified_v2"
    ? "bg-primary text-primary-foreground"
    : ds.qualityStatus === "partial"
      ? "bg-secondary text-secondary-foreground"
      : "border border-border text-muted-foreground";
  return (
    <Link
      href={`/design-systems/${ds.refId}`}
      onClick={() =>
        trackDetailOpen({ reference: ds.refId, source })
      }
      className="group relative flex flex-col gap-3 rounded-2xl border border-border/50 bg-card/40 p-3 transition-all hover:border-foreground/20 hover:bg-card hover:-translate-y-0.5 dark:border-border dark:bg-card/60 dark:hover:bg-card"
    >
      {/* Thumbnail — OG image with logo fallback */}
      <CardThumbnail ds={ds} />

      {/* Body */}
      <div className="px-1 pb-2">
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <span
            className={`text-[10px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded ${
              isSystem ? "bg-primary/10 text-primary" : "bg-foreground/5 text-muted-foreground"
            }`}
          >
            {typeLabel}
          </span>
          <div className="flex items-center gap-1.5">
            {hot && <StatusBadge kind="hot" />}
            {isNewRef(ds.refId) && <StatusBadge kind="new" />}
            <span
              className={`rounded-4xl px-2 py-0.5 text-[10px] font-medium ${qualityClass}`}
              title={ds.verifiedAt ? `Last checked ${ds.verifiedAt}` : "No checked date"}
            >
              {qualityLabel}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {/* Neutral nameplate logo — shared with the builder (issue #19);
              see BrandNameplateLogo for the fallback chain. */}
          <BrandNameplateLogo refId={ds.refId} name={ds.name} />
          <div className="min-w-0 flex-1">
            <div className="text-base font-semibold leading-tight truncate">{ds.name}</div>
            <div className="text-[11px] text-muted-foreground/80 mt-0.5 capitalize truncate">
              {ds.refId.replace(".app", "").replace(".ai", "")}
            </div>
          </div>
        </div>
        <div className="text-xs text-muted-foreground leading-snug mt-2 line-clamp-2">
          {ds.description}
        </div>
        {/* Secondary action — jump straight to the canonical external site.
            Must be a <button> (not <a>), because this node is already a
            descendant of a <Link>/<a> and HTML forbids nested anchors.
            stopPropagation alone only suppresses the JS click bubble;
            the DOM validity issue triggers a hydration error. We open
            the external URL programmatically via window.open instead. */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            trackExternalClick(ds.refId);
            window.open(ds.url, "_blank", "noopener,noreferrer");
          }}
          className="mt-3 inline-flex items-center gap-1 text-[11px] font-medium text-muted-foreground transition-colors hover:text-foreground"
          aria-label={`${ds.name} ${ds.type === "reference" ? "brand" : "official"} site (opens in a new tab)`}
        >
          {ds.type === "reference" ? "Brand site" : "Official site"} <ExternalLink className="h-3 w-3" />
        </button>
      </div>
    </Link>
  );
}

/**
 * Thumbnail cascade: OG image → mShots live screenshot → gradient-logo tile.
 *
 * mShots (WordPress's public screenshot service) renders any public URL as a
 * cached screenshot and is our safety net for sites that don't publish an
 * og:image or block hotlinking. First visitor may see a brief placeholder
 * while mShots warms its cache — subsequent loads are instant.
 */
function CardThumbnail({ ds }: { ds: DesignSystemInfo }) {
  const isSystem = ds.type === "system";
  const initialStage: 0 | 1 | 2 = ds.ogImage ? 0 : 1;
  const [stage, setStage] = useState<0 | 1 | 2>(initialStage);

  if (stage === 2) return <LogoFallbackThumbnail refId={ds.refId} isSystem={isSystem} name={ds.name} />;

  const src =
    stage === 0
      ? ds.ogImage!
      : `https://s0.wp.com/mshots/v1/${encodeURIComponent(ds.url)}?w=1200&h=675`;

  return (
    <div className="relative overflow-hidden rounded-xl ring-1 ring-border/40 aspect-[16/9] bg-muted/30">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={`${ds.name} preview`}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        loading="lazy"
        onError={() => setStage((s) => (s < 2 ? ((s + 1) as 0 | 1 | 2) : 2))}
      />
    </div>
  );
}

function LogoFallbackThumbnail({
  refId,
  isSystem,
  name,
}: {
  refId: string;
  isSystem: boolean;
  name: string;
}) {
  const logoColor = isSystem ? "ffffff" : "475569";
  const logoUrl = getLogoUrl(refId, logoColor) ?? getLogoFallbackUrl(refId);
  const raster = isGitHubLogo(refId);
  const bg = isSystem
    ? { backgroundImage: "linear-gradient(135deg, #1e293b 0%, #312e81 50%, #1e1b4b 100%)" }
    : undefined;
  return (
    <div
      className={`flex aspect-[16/9] items-center justify-center overflow-hidden rounded-xl ring-1 ring-border/40 ${
        isSystem ? "" : "bg-muted/60 dark:bg-muted/30"
      }`}
      style={bg}
    >
      {logoUrl && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={logoUrl}
          alt={name}
          className={raster ? "h-12 w-12 rounded object-contain" : "h-11 w-11 object-contain"}
          loading="lazy"
        />
      )}
    </div>
  );
}
