"use client";

/**
 * Design-system detail view — client component.
 *
 * Desktop (md+): two-column layout — DESIGN.md markdown on the left
 * (scrollable) and <ReferencePreview> on the right (sticky until footer).
 * Mobile (< md): a single pane at a time, toggled via the header control;
 * Preview is the default view because the page's primary intent is visual
 * recognition before detail reading.
 *
 * Ownership split vs the RSC parent (page.tsx): parent does disk read +
 * token extraction; this component only orchestrates layout, theme, and
 * interaction analytics.
 */

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
  ArrowLeft,
  Check,
  Copy,
  Download,
  ExternalLink,
  FileText,
  Eye,
  Moon,
  Sun,
} from "lucide-react";
import { ReferencePreview } from "@/components/reference-preview";
import { Markdown } from "@/components/markdown";
import { event, trackRef } from "@/lib/gtag";
import { getDesignSystem } from "@/lib/design-systems";
import { getLogoUrl, getLogoFallbackUrl, isGitHubLogo } from "@/lib/logos";
import type { ParsedTokens } from "@/lib/extract-tokens";

interface Detail {
  id: string;
  designMd: string;
  primary: string;
  background: string;
  foreground: string;
  fontFamily: string;
  mono?: string;
  headingWeight: string;
  radius: string;
  mood: string;
  accent?: string;
  border?: string;
}

type MobileView = "preview" | "markdown";

export function DetailView({
  detail,
  tokens,
}: {
  detail: Detail;
  tokens: ParsedTokens;
}) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileView, setMobileView] = useState<MobileView>("preview");
  const [copied, setCopied] = useState(false);

  useEffect(() => setMounted(true), []);

  // Fire page-view analytics once per mount.
  useEffect(() => {
    event("ds_detail_view", {
      reference: detail.id,
      referrer: typeof document !== "undefined" ? document.referrer : "",
    });
    trackRef("select", detail.id);
  }, [detail.id]);

  const ds = getDesignSystem(detail.id);
  const displayName =
    ds?.name ?? detail.id.replace(/\.(app|ai)$/, "").replace(/^./, (c) => c.toUpperCase());

  function copyMd() {
    navigator.clipboard.writeText(detail.designMd);
    event("ds_copy_md", { reference: detail.id });
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function downloadMd() {
    const blob = new Blob([detail.designMd], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "DESIGN.md";
    a.click();
    URL.revokeObjectURL(url);
    event("ds_download_md", { reference: detail.id });
  }

  function externalClick() {
    event("ds_external_click", { reference: detail.id });
  }

  function toggleMobileView(next: MobileView) {
    setMobileView(next);
    event("ds_view_toggle", { reference: detail.id, view: next });
  }

  return (
    <div className="min-h-screen">
      {/* Sticky header */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl dark:border-border">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <Link
              href="/design-systems"
              className="flex shrink-0 items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Design Systems</span>
            </Link>
            <span className="hidden h-4 w-px bg-border sm:block" />
            <BrandChip refId={detail.id} name={displayName} primary={detail.primary} />
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            {ds && (
              <a
                href={ds.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={externalClick}
                className="hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-sm ring-1 ring-primary/20 transition-all hover:brightness-110 hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              >
                Official site <ExternalLink className="h-3 w-3" />
              </a>
            )}
            <button
              onClick={copyMd}
              className="inline-flex items-center gap-1.5 rounded-lg border border-border/60 bg-card/50 px-2.5 py-1.5 text-xs font-medium transition-colors hover:bg-accent dark:border-border"
              aria-label="Copy DESIGN.md"
            >
              {copied ? (
                <Check className="h-3.5 w-3.5 text-green-500" />
              ) : (
                <Copy className="h-3.5 w-3.5" />
              )}
              <span className="hidden sm:inline">{copied ? "Copied" : "Copy"}</span>
            </button>
            <button
              onClick={downloadMd}
              className="inline-flex items-center gap-1.5 rounded-lg border border-border/60 bg-card/50 px-2.5 py-1.5 text-xs font-medium transition-colors hover:bg-accent dark:border-border"
              aria-label="Download DESIGN.md"
            >
              <Download className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Download</span>
            </button>
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-border/60 bg-card/50 transition-colors hover:bg-accent dark:border-border"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="h-3.5 w-3.5" />
                ) : (
                  <Moon className="h-3.5 w-3.5" />
                )}
              </button>
            )}
          </div>
        </div>

        {/* Mobile pane toggle */}
        <div className="flex items-center justify-center border-t border-border/30 px-4 py-2 md:hidden">
          <div className="flex gap-1 rounded-lg border border-border/40 bg-muted/30 p-1 dark:bg-muted/20">
            <button
              onClick={() => toggleMobileView("preview")}
              className={`flex items-center gap-1.5 rounded-md px-3 py-1 text-xs font-medium transition-colors ${
                mobileView === "preview"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground"
              }`}
              aria-pressed={mobileView === "preview"}
            >
              <Eye className="h-3 w-3" /> Preview
            </button>
            <button
              onClick={() => toggleMobileView("markdown")}
              className={`flex items-center gap-1.5 rounded-md px-3 py-1 text-xs font-medium transition-colors ${
                mobileView === "markdown"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground"
              }`}
              aria-pressed={mobileView === "markdown"}
            >
              <FileText className="h-3 w-3" /> DESIGN.md
            </button>
          </div>
        </div>
      </header>

      {/* Desktop: 2-col grid; Mobile: single-pane toggle */}
      <div className="mx-auto max-w-7xl px-0 md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-0 md:px-6">
        {/* Markdown pane — desktop visible always; mobile only when selected */}
        <section
          className={`border-border/40 md:border-r md:px-6 md:py-8 ${
            mobileView === "markdown" ? "block" : "hidden"
          } md:block`}
        >
          <div className="px-4 py-6 md:px-0 md:py-0">
            <Markdown content={detail.designMd} />
          </div>
        </section>

        {/* Preview pane — desktop sticky; mobile only when selected */}
        <section
          className={`md:px-6 md:py-8 ${
            mobileView === "preview" ? "block" : "hidden"
          } md:block`}
        >
          <div className="md:sticky md:top-[calc(3.5rem+1px)]">
            {/* max-h = viewport minus header so the preview can scroll independently on desktop */}
            <div className="md:max-h-[calc(100vh-3.5rem-1px)] md:overflow-auto">
              <ReferencePreview tokens={tokens} embedded />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

/**
 * Compact brand chip for the header — logo + name on a primary-tinted tile.
 * Mirrors the visual rhythm from the builder's OfficialSourceLogo / directory
 * CardBrandLogo so header identity stays consistent across surfaces.
 */
function BrandChip({
  refId,
  name,
  primary,
}: {
  refId: string;
  name: string;
  primary: string;
}) {
  const primaryUrl = getLogoUrl(refId, "111111");
  const fallbackUrl = getLogoFallbackUrl(refId);
  const [stage, setStage] = useState<0 | 1 | 2>(0);
  const src = stage === 0 ? primaryUrl : stage === 1 ? fallbackUrl : null;
  const raster = isGitHubLogo(refId);

  return (
    <div className="flex min-w-0 items-center gap-2.5">
      <div
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md ring-1 ring-border/50"
        style={{ background: primary + "18" }}
      >
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={name}
            onError={() => setStage((s) => (s < 2 ? ((s + 1) as 0 | 1 | 2) : 2))}
            className={
              raster ? "h-4 w-4 rounded object-contain" : "h-3.5 w-3.5 object-contain dark:invert"
            }
            loading="lazy"
          />
        ) : (
          <span className="text-xs font-bold text-foreground/70">
            {name.charAt(0).toUpperCase()}
          </span>
        )}
      </div>
      <div className="min-w-0 truncate">
        <div className="truncate text-sm font-semibold leading-tight">{name}</div>
        <div className="truncate text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
          {refId}
        </div>
      </div>
    </div>
  );
}
