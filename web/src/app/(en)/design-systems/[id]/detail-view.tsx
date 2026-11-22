"use client";

/**
 * The item page (/design-systems/<id>, /ko/design-systems/<id>) — client half.
 *
 * Round 11 (W7, owner review 2026-10-20). The first screen holds who it is and
 * the hand-off, nothing else:
 *   - a crumb row: back to the archive on the left; the official site and Share
 *     on the right;
 *   - the brand's genuine logo (or none) and the one <h1>, "{Name} DESIGN.md";
 *   - `#use`: Copy DESIGN.md and Download, two equal buttons. Old /builder?ref=
 *     links 308 to /design-systems/<id>#use and land on this group.
 * Below it, the canonical DESIGN.md — byte for byte, as before — beside the
 * preview (colours, type, spacing and shape, components). On phones one pane at
 * a time. A reference that records nothing the preview can draw (the legacy
 * snapshots, whose tokens were written from prose) gets no preview pane: the
 * DESIGN.md stands alone, with no empty column and no empty phone tab.
 *
 * Round 13 (owner, 2026-10-21): the description line under the h1 is gone. The
 * same sentence still feeds the meta description, OG and the JSON-LD
 * description, which are built on the server and do not depend on this view.
 *
 * Removed in this round, by the owner's list: the tier badge, the "how to use"
 * section (install command, first prompt, raw .md link), the evidence panel and
 * its drawer, the wide-text toggle, the "the body is English" note and the
 * "<font>: not loaded" note. Each remaining action has one placement, so
 * `ds_export` (copy / download) keeps meaning one control each.
 */

import { useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ReferencePreview } from "@/components/reference-preview";
import { hasPreviewContent, type PreviewModel } from "@/components/item/preview-model";
import { BrandLogo, type BrandLogoData } from "@/components/brand-logo";
import { ReferenceShareButton } from "@/components/reference-share-button";
import { copyText } from "@/lib/clipboard";
import { Markdown } from "@/components/markdown";
import {
  trackExport as trackDsExport,
  trackDetailView,
  trackExternalClick,
  trackMdViewToggle,
} from "@/lib/design-systems/analytics";
import { ITEM_EN, ITEM_KO } from "@/components/brand-a/copy/item";
import type { ScreensModel } from "@/lib/screens/model";
import "@/components/brand-a/archive.css";
import "@/components/brand-a/item.css";

interface Detail {
  id: string;
  designMd: string;
}

type View = "preview" | "markdown" | "screens";

// Its own chunk: a page without local screens never renders it, so never downloads it.
const ScreensTab = dynamic(() => import("@/components/item/screens-tab").then((m) => m.ScreensTab));

const SCREENS_HASH = "#screens";

export function DetailView({
  name,
  detail,
  preview,
  official,
  logo,
  screens = null,
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
  /** The preview, built by the server from the reference's own tokens (preview-tokens.server.ts). */
  preview: PreviewModel;
  /** Official design-system / brand-guide link from the registry, resolved by the server. */
  official: string | null;
  /** Genuine logo resolved by the server (archive-rows.server.ts), or null. */
  logo: BrandLogoData | null;
  /**
   * This service's real screens (lib/screens/source.server.ts: the published manifest, or a local folder), or
   * null. Null renders the page exactly as before: no tab row, no request, no markup.
   */
  screens?: ScreensModel | null;
}) {
  const t = locale === "ko" ? ITEM_KO : ITEM_EN;
  const withPreview = hasPreviewContent(preview);
  const defaultView: View = withPreview ? "preview" : "markdown";
  // One view for both layouts. Desktop shows the two panes for "preview" and "markdown" alike and
  // the Screens tab for "screens"; phones show one pane at a time.
  const [view, setView] = useState<View>(defaultView);
  const [copied, setCopied] = useState(false);
  const [hasLogo, setHasLogo] = useState(!!logo);

  // Fire page-view analytics once per mount.
  useEffect(() => {
    trackDetailView({
      reference: detail.id,
      referrer: typeof document !== "undefined" ? document.referrer : "",
    });
  }, [detail.id]);

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

  // #screens opens the Screens tab, so a link can land on it. Read after mount: the server
  // always renders the DESIGN.md view, and #use and the bare URL keep working as before.
  useEffect(() => {
    if (!screens) return;
    const sync = () =>
      setView((v) => (window.location.hash === SCREENS_HASH ? "screens" : v === "screens" ? defaultView : v));
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [screens, defaultView]);

  function selectView(next: View) {
    setView(next);
    if (!screens) return;
    const { pathname, search, hash } = window.location;
    if (next === "screens" && hash !== SCREENS_HASH) {
      window.history.replaceState(window.history.state, "", `${pathname}${search}${SCREENS_HASH}`);
    } else if (next !== "screens" && hash === SCREENS_HASH) {
      window.history.replaceState(window.history.state, "", `${pathname}${search}`);
    }
  }

  function toggleMobileView(next: "preview" | "markdown") {
    selectView(next);
    trackMdViewToggle({ reference: detail.id, view: next });
  }

  return (
    <div className="sq-item">
      <section className="sq-root sq-ih">
        <div className="sq-wrap sq-ih-in">
          <div className="sq-ih-bar">
            <Link href={t.crumbHref} className="sq-crumb">
              <span aria-hidden="true">←</span> {t.crumb}
            </Link>
            <div className="sq-ih-tools">
              {official ? (
                <a href={official} target="_blank" rel="noopener noreferrer" className="sq-ih-ext" onClick={() => trackExternalClick(detail.id)}>
                  {t.official} <span aria-hidden="true">↗</span>
                </a>
              ) : null}
              <ReferenceShareButton reference={detail.id} location="ref_detail" labels={t.shareLabels} path={sharePath} variant="brand" />
            </div>
          </div>
          <div className="sq-ih-head">
            {hasLogo ? <BrandLogo logo={logo} className="sq-ih-logo" onMissing={() => setHasLogo(false)} /> : null}
            {/* The page's one <h1>. ReferencePreview names no brand and the embedded
                DESIGN.md title is demoted, so neither competes with it. */}
            <h1>{t.h1(name)}</h1>
          </div>
          <div id="use" className="sq-ih-acts" role="group" aria-label={t.useLabel}>
            <button type="button" onClick={copyMd} className="sq-act sq-act-primary">
              <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
                {copied ? (
                  <path d="m4.5 10.5 3.5 3.5 7.5-8" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                ) : (
                  <>
                    <rect x="7" y="7" width="10" height="10" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M13 4.5H5.5a1 1 0 0 0-1 1V13" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </>
                )}
              </svg>
              {copied ? t.copied : t.copyMd}
            </button>
            <button type="button" onClick={downloadMd} className="sq-act sq-act-line">
              <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M10 3.5v9m0 0-3.6-3.6M10 12.5l3.6-3.6M4 15.5h12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {t.download}
            </button>
            <span className="sr-only" role="status" aria-live="polite">
              {copied ? t.srCopied : ""}
            </span>
          </div>
        </div>
      </section>

      {/* Desktop: DESIGN.md (the two panes) or the service's screens. Only where screens exist. */}
      {screens ? (
        <div className="sq-root sq-wrap sq-tabs-d">
          <div className="sq-tabs-g" role="tablist" aria-label={t.screens.tabsLabel}>
            <button type="button" role="tab" aria-selected={view !== "screens"} onClick={() => selectView(view === "screens" ? defaultView : view)}>
              DESIGN.md
            </button>
            <button type="button" role="tab" aria-selected={view === "screens"} onClick={() => selectView("screens")}>
              {t.screens.tab}
            </button>
          </div>
        </div>
      ) : null}

      {/* Phones: one pane at a time, the preview first (recognition before reading); the screens third. */}
      {withPreview || screens ? (
        <div className="sq-root sq-wrap sq-panes-m" role="group" aria-label={t.show}>
          {withPreview ? (
            <button type="button" onClick={() => toggleMobileView("preview")} aria-pressed={view === "preview"}>
              {t.preview}
            </button>
          ) : null}
          <button type="button" onClick={() => toggleMobileView("markdown")} aria-pressed={view === "markdown"}>
            DESIGN.md
          </button>
          {screens ? (
            <button type="button" onClick={() => selectView("screens")} aria-pressed={view === "screens"}>
              {t.screens.tab}
            </button>
          ) : null}
        </div>
      ) : null}

      {screens && view === "screens" ? (
        <div className="sq-wrap">
          <ScreensTab model={screens} labels={t.screens} panelId="screens-panel" />
        </div>
      ) : null}

      <div className={`sq-wrap sq-item-body${withPreview ? "" : " sq-item-solo"}${view === "screens" ? " sq-v-hide" : ""}`}>
        <section className={`sq-item-md ${view === "markdown" ? "" : "sq-m-hide"}`} aria-labelledby="md-heading">
          <h2 id="md-heading" className="sq-md-h">
            DESIGN.md
          </h2>
          {/* The canonical file, byte for byte, on every locale (lang="en"). */}
          <div className="sq-md-body" lang="en">
            <Markdown content={detail.designMd} demoteH1 />
          </div>
        </section>

        {withPreview ? (
          <section className={`sq-item-pv ${view === "preview" ? "" : "sq-m-hide"}`} aria-label={t.preview}>
            <div className="sq-item-pv-in">
              <ReferencePreview model={preview} labels={t.pv} />
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
}
