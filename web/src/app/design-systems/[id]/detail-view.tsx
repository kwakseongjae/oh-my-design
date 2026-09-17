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

import { useEffect, useState, useSyncExternalStore } from "react";
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
  SlidersHorizontal,
} from "lucide-react";
import { ReferencePreview } from "@/components/reference-preview";
import { InstallCta } from "@/components/install-cta";
import { GithubStarButton } from "@/components/github-star-button";
import { Markdown } from "@/components/markdown";
import {
  trackExport as trackDsExport,
  trackDetailView,
  trackExternalClick,
  trackMdViewToggle,
  trackOpenInBuilder,
  trackRawMdOpen,
} from "@/lib/design-systems/analytics";
import { getDesignSystem } from "@/lib/design-systems";
import { getLogoUrl, getLogoFallbackUrl, isGitHubLogo } from "@/lib/logos";
import type { ParsedTokens } from "@/lib/extract-tokens";
import type { ReferenceDetailAstContract } from "@/lib/references/detail-projection";
import type { ReferenceQualityEntry } from "@/data/reference-quality.generated";
import { ReferenceShareButton } from "@/components/reference-share-button";

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
  referenceAst?: ReferenceDetailAstContract;
  referenceQuality: ReferenceQualityEntry;
}

type MobileView = "preview" | "markdown";
const subscribeToHydration = () => () => {};

/**
 * Advisory codes, said in words a reader can act on.
 *
 * These are computed per reference and were never rendered — the evidence panel showed
 * `reasonCodes` (why a reference is not a higher tier) but not `advisoryCodes` (which of
 * its values nothing backs). That gap mattered more than it sounds: 261 references carry
 * motion values the capture harness never recorded, because it collects no transition or
 * animation property at all, and one non-standard easing curve appears in 167 unrelated
 * brands. Rewriting those documents is authoring work; saying so here is one block.
 *
 * Deliberately phrased as what is missing, not as a warning badge. AGENTS.md forbids
 * putting `Partial`/warning chrome in place of content — the content stays exactly as it
 * is, and this sits beside it in the panel that already reports evidence.
 */
const ADVISORY_LABEL: Record<string, string> = {
  motion_value_unsourced: "Motion values here were not observed in any capture",
  component_state_prose_only: "Component states are described in prose, not given per-state values",
  component_noninteractive_only: "No interactive component is documented",
  component_absent: "No components are documented",
  token_value_self_declared_derived: "Some token values say they were derived rather than measured",
  token_value_possibly_derived: "Some token values read as derived rather than measured",
  palette_grounding_low: "Most declared colours were not found on the brand's live surface",
  palette_contradicted:
    "The declared palette is contradicted — a 2026-07 capture and a 2026-09 page report the same low figure, two months apart",
};

function advisoryText(code: string): string {
  return ADVISORY_LABEL[code] ?? code.replaceAll("_", " ");
}

export function DetailView({
  detail,
  tokens,
  summary,
  evidenceBoundary,
}: {
  detail: Detail;
  tokens: ParsedTokens;
  /** Answer-first extract from the server page (#5) — also the JSON-LD description. */
  summary?: string;
  /** English evidence-domain boundary; present only for editorially reviewed references. */
  evidenceBoundary?: string;
}) {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribeToHydration, () => true, () => false);
  const [mobileView, setMobileView] = useState<MobileView>("preview");
  const [copied, setCopied] = useState(false);

  // Fire page-view analytics once per mount.
  useEffect(() => {
    trackDetailView({
      reference: detail.id,
      referrer: typeof document !== "undefined" ? document.referrer : "",
    });
  }, [detail.id]);

  const ds = getDesignSystem(detail.id);
  const displayName =
    ds?.name ?? detail.id.replace(/\.(app|ai)$/, "").replace(/^./, (c) => c.toUpperCase());
  const quality = detail.referenceAst?.quality ?? detail.referenceQuality;
  const fontEvidence = detail.referenceAst?.foundations.uiFont;
  const componentCount = detail.referenceAst
    ? Object.keys(detail.referenceAst.tokens.components).length
    : null;
  const evidencePercent = Math.round(quality.evidenceCoverage * 100);

  function copyMd() {
    navigator.clipboard.writeText(detail.designMd);
    trackDsExport({ reference: detail.id, channel: "copy" });
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
    trackDsExport({ reference: detail.id, channel: "download" });
  }

  function externalClick() {
    trackExternalClick(detail.id);
  }

  function toggleMobileView(next: MobileView) {
    setMobileView(next);
    trackMdViewToggle({ reference: detail.id, view: next });
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
            <ReferenceShareButton reference={detail.id} location="ref_detail" compact />
            {/* Primary funnel CTA — this page is where Claude/Brave citations
                land; convert that visitor into the builder with the reference
                preselected (step=customize). Kept at least as prominent as the
                official-site link. */}
            <Link
              href={`/builder?step=customize&ref=${detail.id}`}
              onClick={() => trackOpenInBuilder(detail.id)}
              className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-sm ring-1 ring-primary/20 transition-all hover:brightness-110 hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
            >
              <SlidersHorizontal className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Customize in builder</span>
            </Link>
            {ds && (
              <a
                href={ds.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={externalClick}
                className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-border/60 bg-card/50 px-3 py-1.5 text-xs font-medium transition-colors hover:bg-accent dark:border-border"
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
            {/* Raw twin — clean markdown URL agents can fetch directly. */}
            <a
              href={`/${detail.id}/design.md`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackRawMdOpen(detail.id)}
              className="inline-flex items-center gap-1.5 rounded-lg border border-border/60 bg-card/50 px-2.5 py-1.5 text-xs font-medium transition-colors hover:bg-accent dark:border-border"
              aria-label="Open raw DESIGN.md"
            >
              <FileText className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Raw .md</span>
            </a>
            <GithubStarButton className="hidden md:inline-flex" />
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

      {/* Sticky install funnel — install_copy / prompt_copy (#4). The
          pb-20 below keeps the last content row clear of the fixed bar. */}
      <InstallCta
        variant="bar"
        source="ref_detail"
        reference={detail.id}
        brandName={displayName}
      />

      {/* Answer-first summary (#5) — the extractable lead Claude/Brave cite,
          before the full DESIGN.md dump. The labeled facts below are the visible
          backing for the page's FAQ structured data. */}
      {summary && (
        <section className="mx-auto max-w-7xl px-4 pt-6 sm:px-6">
          <p className="max-w-3xl text-sm leading-relaxed text-foreground">{summary}</p>
          {evidenceBoundary ? (
            <p className="mt-2 max-w-3xl text-xs leading-relaxed text-muted-foreground">
              <span className="font-medium text-foreground">Evidence boundary:</span>{" "}
              {evidenceBoundary}
            </p>
          ) : null}
          <dl className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <dt>Primary</dt>
              <dd className="flex items-center gap-1 font-medium text-foreground">
                <span
                  className="inline-block h-3 w-3 rounded-full ring-1 ring-border/60"
                  style={{ background: detail.primary }}
                />
                {detail.primary}
              </dd>
            </div>
            <div className="flex items-center gap-1.5">
              <dt>Typography</dt>
              <dd className="font-medium text-foreground">
                {detail.fontFamily}
                {detail.mono ? ` · ${detail.mono}` : ""}
              </dd>
            </div>
            <div className="flex items-center gap-1.5">
              <dt>Radius</dt>
              <dd className="font-medium text-foreground">{detail.radius}</dd>
            </div>
          </dl>
          <div className="mt-4 rounded-xl border border-border/60 bg-muted/30 p-3 dark:bg-muted/20">
            <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-xs font-semibold text-foreground">Evidence snapshot</h2>
              <span className="font-mono text-[10px] uppercase tracking-wide text-muted-foreground">
                {quality.status.replaceAll("_", " ")}
              </span>
            </div>
            <dl className="grid gap-2 text-xs sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <dt className="text-muted-foreground">Claims grounded</dt>
                <dd className="mt-0.5 font-medium text-foreground">
                  {quality.evidenceClaimCount}/{quality.claimCount} · {evidencePercent}%
                </dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Sources</dt>
                <dd className="mt-0.5 font-medium text-foreground">
                  {quality.surfaceCount} surfaces · {quality.sourceCount} sources
                </dd>
              </div>
              <div>
                <dt className="text-muted-foreground">UI font basis</dt>
                <dd className="mt-0.5 font-medium text-foreground">
                  {fontEvidence
                    ? `${fontEvidence.origin.replaceAll("_", " ")} · ${fontEvidence.confidence}`
                    : "unresolved"}
                </dd>
              </div>
              {detail.referenceAst && componentCount !== null && (
                <div>
                  <dt className="text-muted-foreground">Components</dt>
                  <dd className="mt-0.5 font-medium text-foreground">
                    {componentCount} documented · {detail.referenceAst.tokens.componentsHarvested ? "harvested" : "documented"}
                  </dd>
                </div>
              )}
            </dl>
            {quality.reasonCodes.length > 0 && (
              <p className="mt-2 border-t border-border/50 pt-2 font-mono text-[10px] leading-relaxed text-muted-foreground">
                Needs work: {quality.reasonCodes.join(" · ").replaceAll("_", " ")}
              </p>
            )}
            {quality.advisoryCodes.length > 0 && (
              <div className="mt-2 border-t border-border/50 pt-2">
                <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                  Not backed by evidence
                </p>
                <ul className="mt-1 space-y-0.5">
                  {quality.advisoryCodes.map((code) => (
                    <li key={code} className="text-[11px] leading-relaxed text-muted-foreground">
                      {advisoryText(code)}
                      {/* The measured share, where we have it — a bare "most were not
                          found" invites the reader to guess, and the number is the
                          whole point. */}
                      {code.startsWith("palette_") && quality.paletteGrounding !== null && (
                        <span className="ml-1 font-mono text-[10px]">
                          ({Math.round(quality.paletteGrounding * 100)}% found)
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Desktop: 2-col grid; Mobile: single-pane toggle */}
      <div className="mx-auto max-w-7xl px-0 pb-20 md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-0 md:px-6">
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
