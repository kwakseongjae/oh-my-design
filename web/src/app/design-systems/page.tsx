"use client";

/**
 * Design Systems directory — dedicated page listing every verified public DS
 * and brand-guidelines page OMD tracks. Each card uses the site's own
 * og:image as the thumbnail (harvested via scripts/fetch-og-images.mjs),
 * falling back to a gradient-logo thumbnail when the site doesn't publish
 * an OG image.
 */

import Link from "next/link";
import { ArrowLeft, ExternalLink, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { getAllDesignSystems, type DesignSystemInfo } from "@/lib/design-systems";
import { getLogoUrl, isGitHubLogo, getLogoFallbackUrl } from "@/lib/logos";
import { event } from "@/lib/gtag";

export default function DesignSystemsPage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const systems = getAllDesignSystems();
  const systemCount = systems.filter((d) => d.type === "system").length;
  const brandCount = systems.filter((d) => d.type === "brand").length;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/60 backdrop-blur-xl dark:border-border">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center">
            <img src="/logo.png" alt="oh-my-design" className="h-6 sm:h-8 block dark:hidden" />
            <img src="/logo-white.png" alt="oh-my-design" className="h-6 sm:h-8 hidden dark:block" />
          </Link>
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-border/60 bg-card/50 transition-colors hover:bg-accent dark:border-border dark:bg-card/60"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          )}
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pt-10 pb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground mb-6"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Home
        </Link>
        <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-3">
          Directory
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Design Systems</h1>
        <p className="text-muted-foreground mt-4 max-w-2xl leading-relaxed">
          Jump to the company&apos;s canonical documentation — {systemCount} full design
          systems with components and tokens, plus {brandCount}{" "}
          brand / trademark guideline pages.
        </p>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {systems.map((ds) => (
            <DSCard key={ds.refId} ds={ds} />
          ))}
        </div>
      </section>
    </div>
  );
}

function DSCard({ ds }: { ds: DesignSystemInfo }) {
  const isSystem = ds.type === "system";
  return (
    <a
      href={ds.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => event("ds_click", { reference: ds.refId, url: ds.url, location: "directory" })}
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
            {isSystem ? "Design System" : "Brand"}
          </span>
          <ExternalLink className="h-3.5 w-3.5 text-muted-foreground shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
        <div className="flex items-center gap-3">
          <CardBrandLogo refId={ds.refId} name={ds.name} />
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
      </div>
    </a>
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

/** Compact brand logo shown beside the card title. Same source + fallback
 *  chain as the builder's Reference step, but neutral-backed so it reads as
 *  a nameplate rather than a brand statement. */
function CardBrandLogo({ refId, name }: { refId: string; name: string }) {
  const [stage, setStage] = useState<0 | 1 | 2>(0);
  const primaryUrl = getLogoUrl(refId, "111111");
  const fallbackUrl = getLogoFallbackUrl(refId);
  const src = stage === 0 ? primaryUrl : stage === 1 ? fallbackUrl : null;
  const raster = isGitHubLogo(refId);

  const wrap =
    "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted/60 ring-1 ring-border/50 dark:bg-muted/30 dark:ring-border";

  if (!src) {
    return (
      <div className={wrap}>
        <span className="text-sm font-bold text-foreground/70">{name.charAt(0).toUpperCase()}</span>
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
        className={raster ? "h-6 w-6 rounded object-contain" : "h-5 w-5 object-contain dark:invert"}
        loading="lazy"
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
