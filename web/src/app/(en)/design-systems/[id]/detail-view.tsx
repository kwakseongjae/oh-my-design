"use client";

/**
 * Design-system detail view — client component.
 *
 * Concept A since rebrand round 2 (2026-10-14): manuscript-grid hero with the
 * keycap, tier badge and evidence snapshot; #use is the primary action panel;
 * one theme control site-wide (the header's).
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
 *
 * Since 2026-10-01 (IA decision D2) this is the catalog's item page: landing
 * rows and search open it, and its `#use` block holds every hand-off —
 * Copy / Download / raw DESIGN.md, the install command and the first prompt.
 * Each action has exactly one placement on the page, so `ds_export` and
 * `act_*` (surface=ref_detail) keep meaning one control each. The builder's
 * "Customize" link left with the builder (owner decision 2026-10-13); old
 * /builder?ref=<id> links 308 to this block.
 */

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ReferencePreview } from "@/components/reference-preview";
import { InstallCta } from "@/components/install-cta";
import { copyText } from "@/lib/clipboard";
import { Markdown } from "@/components/markdown";
import {
  trackExport as trackDsExport,
  trackDetailView,
  trackExternalClick,
  trackMdViewToggle,
  trackRawMdOpen,
} from "@/lib/design-systems/analytics";
import type { DesignSystemInfo } from "@/lib/design-systems";
import { isRasterLogo, logoFallbackUrl, logoUrl, type LogoRef } from "@/lib/logo-urls";
import type { ParsedTokens } from "@/lib/extract-tokens";
import type { ReferenceDetailAstContract } from "@/lib/references/detail-projection";
import type { ReferenceQualityEntry } from "@/data/reference-quality.generated";
import { ReferenceShareButton } from "@/components/reference-share-button";
import { CssKeycap, type KeycapFace } from "@/components/brand-a/keycap";
import "@/components/brand-a/archive.css";
import "@/components/brand-a/item.css";

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
  /** Set only for Core v2 references, which carry no legacy AST. */
  coreFontBasis?: { family: string; sourceClass: string };
  referenceQuality: ReferenceQualityEntry;
}

type MobileView = "preview" | "markdown";

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
 *
 * `motion_value_unsourced` is not in this map, and that is the point. It fires on 261 of
 * the 440 references, and listing it beside a reference's own gaps says "others have
 * evidence for this and you do not". They do not. A first-party check of every reference
 * with a published design system found none that publishes a motion scale, and Toss's own
 * documentation-query endpoint answered directly: the duration and easing values are not
 * in the docs at all, they live inside the Figma UI Kit. That is a fact about the industry,
 * not a defect in a reference, so it is told once, below, as what it is.
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

/**
 * The one advisory that is a catalogue-wide finding rather than a per-reference gap.
 * Reported separately so that suppressing it from the list never means hiding it.
 */
const CATALOGUE_WIDE_ADVISORY = "motion_value_unsourced";

export function DetailView({
  name,
  detail,
  tokens,
  summary,
  evidenceBoundary,
  ds,
  logo,
  cap,
}: {
  /** Brand name from the server page — the same string as the title and JSON-LD. */
  name: string;
  detail: Detail;
  tokens: ParsedTokens;
  /** Official DS / brand-guide link, resolved by the server page. Passed in
   *  rather than looked up here so this client view never imports the registry. */
  ds: DesignSystemInfo | null;
  logo: LogoRef | null;
  /** Answer-first extract from the server page (#5) — also the JSON-LD description. */
  summary?: string;
  /** English evidence-domain boundary; present only for editorially reviewed references. */
  evidenceBoundary?: string;
  /** Concept-A keycap from the landing resolvers (server); null = no cap. */
  cap?: KeycapFace | null;
}) {
  const [mobileView, setMobileView] = useState<MobileView>("preview");
  const [copied, setCopied] = useState(false);
  const drawerRef = useRef<HTMLDetailsElement>(null);

  // Fire page-view analytics once per mount.
  useEffect(() => {
    trackDetailView({
      reference: detail.id,
      referrer: typeof document !== "undefined" ? document.referrer : "",
    });
  }, [detail.id]);

  // The landing links /design-systems/toss#evidence as its evidence example:
  // arriving there opens the drawer rather than showing it closed.
  useEffect(() => {
    if (window.location.hash === "#evidence" && drawerRef.current) drawerRef.current.open = true;
  }, []);

  const displayName =
    ds?.name ?? detail.id.replace(/\.(app|ai)$/, "").replace(/^./, (c) => c.toUpperCase());
  const quality = detail.referenceAst?.quality ?? detail.referenceQuality;
  const fontEvidence = detail.referenceAst?.foundations.uiFont;
  // A Core reference has no AST, so its font basis comes from the package's own
  // font role. Rendered as the source class alone: the Core contract states where
  // a value came from but not a confidence, and inventing one to fill the same
  // shape would be presenting an ungrounded value as a grounded one.
  const fontBasis = fontEvidence
    ? `${fontEvidence.origin.replaceAll("_", " ")} · ${fontEvidence.confidence}`
    : detail.coreFontBasis
      ? detail.coreFontBasis.sourceClass.replaceAll("-", " ")
      : null;
  /**
   * From the quality manifest, not the AST.
   *
   * This read `Object.keys(referenceAst.tokens.components).length`, which is
   * null for every reference without an AST — and the manifest covers all 440.
   * Checked before switching: the two counts agree on all 440, so there is no
   * information in keeping the second source, only a way for them to drift.
   */
  const componentCount = quality.componentCount;
  const interactiveCount = quality.interactiveComponentCount;
  const statedCount = quality.statedComponentCount;
  const evidencePercent = Math.round(quality.evidenceCoverage * 100);
  const advisories = quality.advisoryCodes.filter((code) => code !== CATALOGUE_WIDE_ADVISORY);
  const tierClass = quality.status === "verified_v2" ? "sq-t-v" : quality.status === "partial" ? "sq-t-p" : "sq-t-l";
  const tierLabel = quality.status === "verified_v2" ? "Verified v2" : quality.status === "partial" ? "Partial" : "Legacy snapshot";

  async function copyMd(event: React.MouseEvent<HTMLButtonElement>) {
    const ok = await copyText(detail.designMd, {
      restoreTarget: event.currentTarget,
      onSuccess: () => trackDsExport({ reference: detail.id, channel: "copy" }),
    });
    if (!ok) return;
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
    <div className="sq-item">
      {/* Reference bar. The site header (and its one theme control) comes from
          design-systems/layout.tsx; this bar carries no second toggle. */}
      <div className="sq-root sq-item-bar">
        <div className="sq-wrap sq-item-bar-in">
          <Link href="/design-systems" className="sq-crumb">
            <span aria-hidden="true">←</span> Archive
          </Link>
          <span className="sq-crumb-sep" aria-hidden="true">/</span>
          <BrandChip refId={detail.id} logo={logo} name={displayName} primary={detail.primary} />
          <span className="sq-item-bar-act">
            <ReferenceShareButton reference={detail.id} location="ref_detail" compact />
            {ds && (
              <a href={ds.url} target="_blank" rel="noopener noreferrer" onClick={externalClick} className="sq-btn-ghost">
                Official site <span aria-hidden="true">↗</span>
              </a>
            )}
          </span>
        </div>
      </div>

      <section className="sq-root sq-item-hero">
        <div className="sq-wrap sq-item-hero-in">
          <div className="sq-item-id">
            <div className="sq-item-head">
              {cap ? (
                <span className="sq-item-cap">
                  <CssKeycap d={cap} />
                </span>
              ) : null}
              <div className="min-w-0">
                <p className="sq-item-kick">
                  <span className={`sq-tier ${tierClass}`}>{tierLabel}</span>
                  <span className="sq-mono">{detail.id}</span>
                </p>
                {/* The page's one <h1>. ReferencePreview's brand name and the embedded
                    DESIGN.md title are not headings at this level. */}
                <h1>{name} design system</h1>
              </div>
            </div>

            {/* Answer-first summary (#5) — the extractable lead Claude/Brave cite,
                before the full DESIGN.md dump. The labeled facts below are the visible
                backing for the page's FAQ structured data. */}
            {summary && (
              <>
                <p className="sq-item-sum">{summary}</p>
                {evidenceBoundary ? (
                  <p className="sq-item-bound">
                    <b>Evidence boundary:</b> {evidenceBoundary}
                  </p>
                ) : null}
                <dl className="sq-item-facts">
                  <div>
                    <dt>Primary</dt>
                    <dd>
                      <span className="sq-item-sw" style={{ background: detail.primary }} aria-hidden="true" />
                      {detail.primary}
                    </dd>
                  </div>
                  <div>
                    <dt>Typography</dt>
                    <dd>
                      {detail.fontFamily}
                      {detail.mono ? ` · ${detail.mono}` : ""}
                    </dd>
                  </div>
                  <div>
                    <dt>Radius</dt>
                    <dd>{detail.radius}</dd>
                  </div>
                </dl>
              </>
            )}

          </div>

          <UseSection
            refId={detail.id}
            name={name}
            promptBrand={displayName}
            copied={copied}
            onCopy={copyMd}
            onDownload={downloadMd}
          />
            {summary && (
              /* id + scroll margin: the landing's "verified" tier links here
                 (/design-systems/toss#evidence) as its one real evidence example. */
              <div id="evidence" className="sq-evi sq-item-evi">
                <div className="sq-evi-head">
                  <h2>Evidence snapshot</h2>
                  <span className="sq-mono">{quality.status.replaceAll("_", " ")}</span>
                </div>
                <dl className="sq-evi-grid">
                  <div>
                    <dt>Claims grounded</dt>
                    <dd>
                      {quality.evidenceClaimCount}/{quality.claimCount} · {evidencePercent}%
                    </dd>
                  </div>
                  <div>
                    <dt>Sources</dt>
                    <dd>
                      {quality.surfaceCount} surfaces · {quality.sourceCount} sources
                    </dd>
                  </div>
                  <div>
                    <dt>UI font basis</dt>
                    <dd>{fontBasis ?? "unresolved"}</dd>
                  </div>
                  {/*
                    * Interactive count, not just the total: 31 of 440 references carry
                    * one component or none and nothing interactive — all verified_v2,
                    * because that tier means the evidence graph is complete, not that
                    * there is a button to look at.
                    */}
                  <div>
                    <dt>Components</dt>
                    <dd>
                      {componentCount === 0 ? (
                        "none documented"
                      ) : (
                        <>
                          {componentCount} documented
                          {" · "}
                          {interactiveCount === 0
                            ? "none interactive"
                            : `${interactiveCount} interactive${statedCount > 0 ? `, ${statedCount} with states` : ""}`}
                        </>
                      )}
                    </dd>
                  </div>
                </dl>
                {(quality.reasonCodes.length > 0 || advisories.length > 0 || quality.advisoryCodes.includes(CATALOGUE_WIDE_ADVISORY)) && (
                  <details className="sq-drawer" ref={drawerRef}>
                    <summary>What the evidence does not cover</summary>
                    {quality.reasonCodes.length > 0 && (
                      <p className="sq-drawer-codes">
                        Needs work: {quality.reasonCodes.join(" · ").replaceAll("_", " ")}
                      </p>
                    )}
                    {advisories.length > 0 && (
                      <div className="sq-drawer-sec">
                        <p className="sq-drawer-lab">Not backed by evidence</p>
                        <ul>
                          {advisories.map((code) => (
                            <li key={code}>
                              {advisoryText(code)}
                              {/* The measured share, where we have it — a bare "most were not
                                  found" invites the reader to guess. */}
                              {code.startsWith("palette_") && quality.paletteGrounding !== null && (
                                <span className="sq-mono"> ({Math.round(quality.paletteGrounding * 100)}% found)</span>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {quality.advisoryCodes.includes(CATALOGUE_WIDE_ADVISORY) && (
                      <p className="sq-drawer-sec">
                        The motion values in this reference were not observed in a capture — and neither
                        were anyone&rsquo;s. No design system we checked publishes a duration or easing
                        scale; Toss states outright that its component motion lives in the Figma UI Kit
                        rather than in its documentation. Treat any exact curve here as a local default.
                      </p>
                    )}
                  </details>
                )}
              </div>
            )}
        </div>
      </section>

      {/* Mobile pane toggle */}
      <div className="sq-root sq-wrap sq-panes-m" role="group" aria-label="Show">
        <button type="button" onClick={() => toggleMobileView("preview")} aria-pressed={mobileView === "preview"}>
          Preview
        </button>
        <button type="button" onClick={() => toggleMobileView("markdown")} aria-pressed={mobileView === "markdown"}>
          DESIGN.md
        </button>
      </div>

      {/* Desktop: 2-col grid; Mobile: single-pane toggle */}
      <div className="sq-wrap sq-item-body">
        {/* Markdown pane — desktop visible always; mobile only when selected */}
        <section className={`sq-item-md ${mobileView === "markdown" ? "" : "sq-m-hide"}`} aria-label="DESIGN.md">
          <p className="sq-pane-lab">DESIGN.md</p>
          <Markdown content={detail.designMd} demoteH1 />
        </section>

        {/* Preview pane — desktop sticky; mobile only when selected */}
        <section className={`sq-item-pv ${mobileView === "preview" ? "" : "sq-m-hide"}`} aria-label="Preview">
          <div className="sq-item-pv-in">
            <p className="sq-pane-lab">Preview</p>
            <ReferencePreview tokens={tokens} logo={logo} embedded />
          </div>
        </section>
      </div>
    </div>
  );
}

/**
 * `#use` — the hand-off block and the page's primary action panel. Composes the
 * page's existing actions rather than re-implementing them: copy/download come
 * from DetailView (ds_export + act_handoff), and the install command and first
 * prompt are <InstallCta> (act_install_copy / act_prompt_copy, surface=ref_detail).
 */
function UseSection({
  refId,
  name,
  promptBrand,
  copied,
  onCopy,
  onDownload,
}: {
  refId: string;
  name: string;
  /** Brand label for the first prompt — unchanged from the former sticky bar. */
  promptBrand: string;
  copied: boolean;
  onCopy: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onDownload: () => void;
}) {
  return (
    <section id="use" aria-labelledby="use-heading" className="sq-use">
      <h2 id="use-heading">Use the {name} DESIGN.md</h2>
      <p className="sq-use-sub">Put the file at your project root and give your coding agent the first prompt.</p>

      <ol className="sq-steps">
        <li>
          <span className="sq-step-k" aria-hidden="true">1</span>
          <span className="sq-step-b">
            <span className="sq-step-t">Get the file</span>
            <span className="sq-use-acts">
              <button type="button" onClick={onCopy} className="sq-btn-primary">
                {copied ? "Copied" : "Copy DESIGN.md"}
              </button>
              <button type="button" onClick={onDownload} className="sq-btn-ghost">
                Download
              </button>
              {/* Raw twin — clean markdown URL agents can fetch directly. */}
              <a
                href={`/${refId}/design.md`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackRawMdOpen(refId)}
                className="sq-btn-ghost"
              >
                Raw .md
              </a>
              <span className="sr-only" role="status" aria-live="polite">
                {copied ? "DESIGN.md copied" : ""}
              </span>
            </span>
          </span>
        </li>
      </ol>
      <InstallCta variant="panel" source="ref_detail" reference={refId} brandName={promptBrand} />
    </section>
  );
}

/**
 * Compact brand chip for the reference bar — logo + name on a primary-tinted
 * square tile.
 */
function BrandChip({
  refId,
  logo,
  name,
  primary,
}: {
  refId: string;
  logo: LogoRef | null;
  name: string;
  primary: string;
}) {
  const primaryUrl = logoUrl(logo, "111111");
  const fallbackUrl = logoFallbackUrl(logo);
  const [stage, setStage] = useState<0 | 1 | 2>(0);
  const src = stage === 0 ? primaryUrl : stage === 1 ? fallbackUrl : null;
  const raster = isRasterLogo(logo);

  return (
    <span className="sq-bchip">
      <span className="sq-bchip-t" style={{ background: primary + "18" }}>
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={name}
            onError={() => setStage((s) => (s < 2 ? ((s + 1) as 0 | 1 | 2) : 2))}
            className={raster ? "sq-bchip-r" : "sq-bchip-v"}
            loading="lazy"
          />
        ) : (
          <span>{name.charAt(0).toUpperCase()}</span>
        )}
      </span>
      <span className="sq-bchip-n">
        <b>{name}</b>
        <span className="sq-mono">{refId}</span>
      </span>
    </span>
  );
}
