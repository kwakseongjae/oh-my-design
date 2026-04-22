"use client";

/**
 * Stage 4 — post-save usage walkthrough.
 *
 * "You saved it. Now what?" Two concrete paths: Web (CSS snippet +
 * Google Fonts link) and DESIGN.md (drop-in OmD v0.1 §3 Typography for
 * AI agents). Figma is intentionally out of scope — designers already
 * know Figma; the playground's reason-to-exist is wiring fonts into
 * code + agent workflows.
 *
 * Each tab has a single one-click Copy button; analytics fire per copy
 * so we know which channel people actually use. Not blocking the user —
 * Skip returns them to My Saved.
 */

import { useMemo, useState } from "react";
import { ArrowRight, Check, Copy, ExternalLink } from "lucide-react";
import type { FontEntry } from "@/lib/fonts/types";
import {
  buildExportCss,
  buildGoogleFontsHref,
} from "@/lib/fonts/loaders";
import { buildDesignMdSnippet } from "@/lib/fonts/designmd-export";
import { trackExportCopy } from "@/lib/fonts/analytics";
import type { SavedFont } from "@/lib/fonts/saved-store";

type Tab = "web" | "designmd";

const TABS: { id: Tab; label: string; hint: string }[] = [
  { id: "web", label: "Web", hint: "CSS + Google Fonts" },
  { id: "designmd", label: "DESIGN.md", hint: "For AI coding agents" },
];

export function UsageGuide({
  font,
  saved,
  onDone,
}: {
  font: FontEntry;
  saved: SavedFont;
  onDone: () => void;
}) {
  const [tab, setTab] = useState<Tab>("web");
  const [copied, setCopied] = useState<Tab | null>(null);

  const cssSnippet = useMemo(
    () => buildExportCss(font, saved.selection),
    [font, saved.selection],
  );
  const designMdSnippet = useMemo(
    () => buildDesignMdSnippet(font, saved.selection),
    [font, saved.selection],
  );
  const googleHref = useMemo(
    () => (font.loader.kind === "google" ? buildGoogleFontsHref([font]) : null),
    [font],
  );

  function copy(kind: Tab, text: string) {
    navigator.clipboard.writeText(text).catch(() => {});
    setCopied(kind);
    trackExportCopy({
      channel: kind === "web" ? "css" : "designmd",
      surface: "guide",
      fontId: font.id,
    });
    setTimeout(() => setCopied((c) => (c === kind ? null : c)), 1500);
  }

  const current = {
    web: cssSnippet,
    designmd: designMdSnippet,
  }[tab];

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
      <div className="mb-5">
        <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
          Stage 4 · Saved
        </div>
        <h2 className="mt-2 flex items-center gap-2 text-2xl font-bold tracking-tight sm:text-3xl">
          <Check className="h-6 w-6 text-emerald-500" />
          {saved.name}
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Here&apos;s how to actually use this in a project. Copy what you need
          and move on.
        </p>
      </div>

      {/* Tab bar */}
      <div className="mb-3 flex flex-wrap gap-1 border-b border-border/50 dark:border-border">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            className={
              tab === t.id
                ? "-mb-px border-b-2 border-primary px-3 py-2 text-sm font-semibold text-foreground"
                : "-mb-px border-b-2 border-transparent px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            }
            aria-selected={tab === t.id}
            role="tab"
          >
            {t.label}
            <span className="ml-1.5 text-[10px] font-normal text-muted-foreground">
              {t.hint}
            </span>
          </button>
        ))}
      </div>

      {/* Tab content — viewport-height aware so the snippet gets real
       *  room to breathe on larger screens instead of a cramped 360px box. */}
      <div className="rounded-xl border border-border/50 bg-card/40 p-4 dark:border-border dark:bg-card/60">
        {tab === "web" && googleHref && (
          <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <span>Also available as a direct link:</span>
            <a
              href={googleHref}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1 rounded-md border border-border/60 bg-background px-2 py-1 font-mono text-[11px] text-foreground transition-colors hover:bg-accent dark:border-border"
            >
              Google Fonts href
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        )}
        <pre className="max-h-[min(70vh,720px)] min-h-[320px] overflow-auto rounded-md bg-background p-4 text-xs leading-relaxed text-foreground/90">
          <code>{current}</code>
        </pre>

        <div className="mt-3 flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={() => copy(tab, current)}
            className="inline-flex h-8 items-center gap-1.5 rounded-md bg-primary px-3 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            {copied === tab ? (
              <>
                <Check className="h-3.5 w-3.5" />
                Copied
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                Copy {tab === "web" ? "CSS" : "DESIGN.md"}
              </>
            )}
          </button>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between gap-3 text-xs">
        <span className="text-muted-foreground">
          Saved to this browser. {font.license} license applies to exports.
        </span>
        <button
          type="button"
          onClick={onDone}
          className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-background px-3 py-1.5 text-xs font-semibold transition-colors hover:bg-accent dark:border-border"
        >
          Done
          <ArrowRight className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
}
