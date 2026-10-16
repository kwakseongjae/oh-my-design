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
import { ITEM_EN, ITEM_KO, type ItemLabels } from "@/components/brand-a/copy/item";
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
// The labels live in components/brand-a/copy/item.ts (`advisory`), one map per page locale.
function advisoryText(code: string, labels: Record<string, string>): string {
  return labels[code] ?? code.replaceAll("_", " ");
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
  locale = "en",
  sharePath,
}: {
  /** Page chrome language. The DESIGN.md body and values are the same in every locale. */
  locale?: "en" | "ko";
  /** Path the share button copies; defaults to the English page. */
  sharePath?: string;
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
  const t = locale === "ko" ? ITEM_KO : ITEM_EN;
  const [mobileView, setMobileView] = useState<MobileView>("preview");
  const [copied, setCopied] = useState(false);
  const [wide, setWide] = useState(false);
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
  const tierLabel = quality.status === "verified_v2" ? t.tier.v : quality.status === "partial" ? t.tier.p : t.tier.l;

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
      {/* First screen: who it is, the one-line summary, one main action and one
          quiet one. The site header (and its one theme control) comes from
          design-systems/layout.tsx. Restraint pass r4 (RESTRAINT.md §4). */}
      <section className="sq-root sq-ih">
        <div className="sq-wrap sq-ih-in">
          <p className="sq-ih-kick">
            <Link href={t.crumbHref} className="sq-crumb">
              <span aria-hidden="true">←</span> {t.crumb}
            </Link>
            {/* The page's one tier mark. */}
            <span className={`sq-tier ${tierClass}`}>{tierLabel}</span>
          </p>
          <div className="sq-ih-head">
            {cap ? (
              <span className="sq-item-cap" data-content-object>
                <CssKeycap d={cap} />
              </span>
            ) : (
              <BrandTile logo={logo} name={displayName} primary={detail.primary} />
            )}
            {/* The page's one <h1>. ReferencePreview's brand name and the embedded
                DESIGN.md title are not headings at this level. */}
            <h1>{t.h1(name)}</h1>
          </div>
          {/* Answer-first summary (#5) — the extractable lead Claude/Brave cite,
              before the full DESIGN.md. */}
          {summary ? <p className="sq-item-sum">{summary}</p> : null}
          <div className="sq-ih-acts">
            <button type="button" onClick={copyMd} className="sq-btn-primary sq-btn-lg">
              {copied ? t.copied : t.copyMd}
            </button>
            <button type="button" onClick={downloadMd} className="sq-btn-quiet">
              {t.download}
            </button>
            <span className="sr-only" role="status" aria-live="polite">
              {copied ? t.srCopied : ""}
            </span>
          </div>
        </div>
      </section>

      <div className="sq-root sq-wrap sq-ib">
        <UseSection
          refId={detail.id}
          name={name}
          promptBrand={displayName}
          ds={ds}
          onExternal={externalClick}
          t={t}
          sharePath={sharePath}
        />
        {(summary || locale !== "en") && (
          /* id + scroll margin: the landing's "verified" tier links here
             (/design-systems/toss#evidence) as its one real evidence example.
             The spec values and the evidence snapshot are one quiet row. */
          <section id="evidence" className="sq-evi" aria-labelledby="evi-heading">
            <h2 id="evi-heading">{t.evidence}</h2>
            {evidenceBoundary ? (
              <p className="sq-item-bound">
                {/* The boundary is English editorial text on every page. */}
                <b>{t.boundary}</b> <span lang="en">{evidenceBoundary}</span>
              </p>
            ) : null}
            <dl className="sq-evi-row">
              <div>
                <dt>{t.dt.primary}</dt>
                <dd>
                  <span className="sq-item-sw" data-content-object style={{ background: detail.primary }} aria-hidden="true" />
                  {detail.primary}
                </dd>
              </div>
              <div>
                <dt>{t.dt.type}</dt>
                <dd lang="en">
                  {detail.fontFamily}
                  {detail.mono ? ` · ${detail.mono}` : ""}
                </dd>
              </div>
              <div>
                <dt>{t.dt.radius}</dt>
                <dd>{detail.radius}</dd>
              </div>
              <div>
                <dt>{t.dt.claims}</dt>
                <dd>
                  {quality.evidenceClaimCount}/{quality.claimCount} · {evidencePercent}%
                </dd>
              </div>
              <div>
                <dt>{t.dt.sources}</dt>
                <dd>{t.sources(quality.surfaceCount, quality.sourceCount)}</dd>
              </div>
              <div>
                <dt>{t.dt.fontBasis}</dt>
                <dd>{fontBasis ? <span lang="en">{fontBasis}</span> : t.unresolved}</dd>
              </div>
              {/*
                * Interactive count, not just the total: 31 of 440 references carry
                * one component or none and nothing interactive — all verified_v2,
                * because that tier means the evidence graph is complete, not that
                * there is a button to look at.
                */}
              <div>
                <dt>{t.dt.components}</dt>
                <dd>
                  {componentCount === 0 ? (
                    t.compNone
                  ) : (
                    <>
                      {t.compDocumented(componentCount)}
                      {" · "}
                      {interactiveCount === 0
                        ? t.compNoInteractive
                        : t.compInteractive(interactiveCount, statedCount)}
                    </>
                  )}
                </dd>
              </div>
            </dl>
            {(quality.reasonCodes.length > 0 || advisories.length > 0 || quality.advisoryCodes.includes(CATALOGUE_WIDE_ADVISORY)) && (
              <details className="sq-drawer" ref={drawerRef}>
                <summary>{t.drawer}</summary>
                {quality.reasonCodes.length > 0 && (
                  <p className="sq-drawer-codes">
                    {t.needsWork} <span lang="en">{quality.reasonCodes.join(" · ").replaceAll("_", " ")}</span>
                  </p>
                )}
                {advisories.length > 0 && (
                  <div className="sq-drawer-sec">
                    <p className="sq-drawer-lab">{t.notBacked}</p>
                    <ul>
                      {advisories.map((code) => (
                        <li key={code}>
                          {advisoryText(code, t.advisory)}
                          {/* The measured share, where we have it — a bare "most were not
                              found" invites the reader to guess. */}
                          {code.startsWith("palette_") && quality.paletteGrounding !== null && (
                            <span>{t.paletteFound(Math.round(quality.paletteGrounding * 100))}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {quality.advisoryCodes.includes(CATALOGUE_WIDE_ADVISORY) && (
                  <p className="sq-drawer-sec">{t.motionNote}</p>
                )}
              </details>
            )}
          </section>
        )}
      </div>

      {/* Mobile pane toggle */}
      <div className="sq-root sq-wrap sq-panes-m" role="group" aria-label={t.show}>
        <button type="button" onClick={() => toggleMobileView("preview")} aria-pressed={mobileView === "preview"}>
          {t.preview}
        </button>
        <button type="button" onClick={() => toggleMobileView("markdown")} aria-pressed={mobileView === "markdown"}>
          DESIGN.md
        </button>
      </div>

      {/* Desktop: 2-col grid (or one wide reading column); Mobile: single-pane toggle */}
      <div className={`sq-wrap sq-item-body${wide ? " sq-wide" : ""}`}>
        {/* Markdown pane — desktop visible always; mobile only when selected */}
        <section className={`sq-item-md ${mobileView === "markdown" ? "" : "sq-m-hide"}`} aria-labelledby="md-heading">
          <div className="sq-md-head">
            <h2 id="md-heading">DESIGN.md</h2>
            <button type="button" className="sq-btn-quiet sq-md-w" onClick={() => setWide((w) => !w)} aria-pressed={wide}>
              {wide ? t.narrow : t.wide}
            </button>
          </div>
          {/* On a non-English page the body is still the canonical English file:
              said once here, and marked lang="en" for screen readers. */}
          {t.bodyNote ? <p className="sq-md-note">{t.bodyNote}</p> : null}
          <div className="sq-md-body" lang="en">
            <Markdown content={detail.designMd} demoteH1 />
          </div>
        </section>

        {/* Preview pane — desktop sticky; mobile only when selected */}
        <section className={`sq-item-pv ${mobileView === "preview" ? "" : "sq-m-hide"}`} aria-label={t.preview}>
          <div className="sq-item-pv-in" lang="en">
            <ReferencePreview tokens={tokens} logo={logo} embedded />
          </div>
        </section>
      </div>
    </div>
  );
}

/**
 * `#use` — the hand-off block, just below the first screen. Copy and Download
 * live in the first screen (ds_export); this block holds the install command
 * and the first prompt (<InstallCta>, act_install_copy / act_prompt_copy,
 * surface=ref_detail) and a quiet row with the raw file, the official site and
 * share. Every action has exactly one placement on the page.
 */
function UseSection({
  refId,
  name,
  promptBrand,
  ds,
  onExternal,
  t,
  sharePath,
}: {
  refId: string;
  name: string;
  /** Brand label for the first prompt — unchanged from the former sticky bar. */
  promptBrand: string;
  ds: DesignSystemInfo | null;
  onExternal: () => void;
  t: ItemLabels;
  sharePath?: string;
}) {
  return (
    <section id="use" aria-labelledby="use-heading" className="sq-use">
      <h2 id="use-heading">{t.useH2(name)}</h2>
      <p className="sq-use-sub">{t.useSub}</p>
      <InstallCta variant="panel" source="ref_detail" reference={refId} brandName={promptBrand} labels={t.install} />
      <p className="sq-use-more">
        {/* Raw twin — clean markdown URL agents can fetch directly. */}
        <a href={`/${refId}/design.md`} target="_blank" rel="noopener noreferrer" onClick={() => trackRawMdOpen(refId)}>
          {t.rawMd}
        </a>
        {ds && (
          <a href={ds.url} target="_blank" rel="noopener noreferrer" onClick={onExternal}>
            {t.official} <span aria-hidden="true">↗</span>
          </a>
        )}
        <ReferenceShareButton reference={refId} location="ref_detail" compact labels={t.shareLabels} path={sharePath} />
      </p>
    </section>
  );
}

/**
 * Brand tile for references without a keycap — the logo on a primary-tinted
 * square. The name is the h1 beside it, so the tile carries no label of its own.
 */
function BrandTile({
  logo,
  name,
  primary,
}: {
  logo: LogoRef | null;
  name: string;
  primary: string;
}) {
  const primaryUrl = logoUrl(logo, "111111");
  const fallbackUrl = logoFallbackUrl(logo);
  const [stage, setStage] = useState<0 | 1 | 2>(0);
  const src = stage === 0 ? (primaryUrl ?? fallbackUrl) : stage === 1 ? fallbackUrl : null;
  const raster = isRasterLogo(logo);

  return (
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
  );
}
