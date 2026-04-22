"use client";

/**
 * Stage 5 — saved fonts list, redesigned as a workbench.
 *
 * Each saved pick is a finished decision — the user is here to USE it.
 * Surface the four concrete endpoints inline so they don't need to re-
 * enter Stage 4: Copy CSS (stylesheets), Copy DESIGN.md (AI coding
 * agents / brand docs), Share link, Re-open to tweak. Delete is a
 * two-tap confirm so nothing leaves by accident.
 */

import { useState } from "react";
import {
  ArrowLeft,
  BookOpen,
  Check,
  Clock,
  Copy,
  FileText,
  Link2,
  SlidersHorizontal,
  Trash2,
} from "lucide-react";
import { FONT_CATALOG } from "@/lib/fonts/catalog";
import { buildExportCss, buildVariationSettings } from "@/lib/fonts/loaders";
import { buildDesignMdSnippet } from "@/lib/fonts/designmd-export";
import { buildFontShareUrl } from "@/lib/fonts/share-link";
import {
  deleteSaved,
  listSaved,
  type SavedFont,
} from "@/lib/fonts/saved-store";
import {
  trackExportCopy,
  trackSavedDelete,
  trackSavedOpen,
} from "@/lib/fonts/analytics";
import { scriptLabels } from "./labels";

type ActionId = "css" | "designmd" | "share";

function formatAge(ms: number): string {
  const diff = Date.now() - ms;
  const mins = Math.floor(diff / 60_000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  return new Date(ms).toLocaleDateString();
}

export function MyFonts({
  onBack,
  onOpen,
  onBrowseCatalog,
}: {
  onBack: () => void;
  onOpen: (saved: SavedFont) => void;
  onBrowseCatalog: () => void;
}) {
  const [items, setItems] = useState<SavedFont[]>(() => listSaved());
  const [confirming, setConfirming] = useState<string | null>(null);
  /** Per-row transient "just copied" feedback. Keyed by `${id}:${action}`. */
  const [copied, setCopied] = useState<string | null>(null);

  function handleDelete(id: string) {
    if (confirming !== id) {
      setConfirming(id);
      return;
    }
    const entry = items.find((s) => s.id === id);
    deleteSaved(id);
    setConfirming(null);
    setItems(listSaved());
    if (entry) trackSavedDelete(entry.fontId);
  }

  function handleCopy(action: ActionId, s: SavedFont) {
    const font = FONT_CATALOG.find((f) => f.id === s.fontId);
    if (!font) return;
    let text = "";
    if (action === "css") text = buildExportCss(font, s.selection);
    else if (action === "designmd") text = buildDesignMdSnippet(font, s.selection);
    else if (action === "share") {
      const origin = typeof window !== "undefined" ? window.location.origin : "";
      text = buildFontShareUrl(origin, {
        fontId: s.fontId,
        selection: s.selection,
        previewSize: s.previewSize,
        sampleText: s.sampleText,
      });
    }
    if (!text) return;
    navigator.clipboard.writeText(text).catch(() => {});
    const key = `${s.id}:${action}`;
    setCopied(key);
    setTimeout(() => setCopied((c) => (c === key ? null : c)), 1500);
    trackExportCopy({ channel: action, surface: "saved", fontId: s.fontId });
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
      <button
        type="button"
        onClick={onBack}
        className="mb-4 inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Back to describe
      </button>

      <div className="mb-6 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
            Stage 5 · My saved
          </div>
          <h2 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
            {items.length === 0
              ? "Nothing saved yet"
              : `${items.length} saved font${items.length === 1 ? "" : "s"}`}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {items.length === 0
              ? "Saved locally in this browser. Nothing leaves your device."
              : "Copy CSS for stylesheets, or DESIGN.md for an AI agent's brand doc. Everything's local — share links encode state in the URL itself."}
          </p>
        </div>
      </div>

      {items.length === 0 ? (
        <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-border/60 bg-muted/10 py-16 text-center dark:border-border">
          <p className="max-w-sm text-sm text-muted-foreground">
            Tweak a font, hit Save, and it&apos;ll live here — with the exact
            axis settings and size you landed on.
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={onBack}
              className="inline-flex h-8 items-center gap-1.5 rounded-md border border-border/60 px-3 text-xs font-semibold transition-colors hover:bg-accent dark:border-border"
            >
              Describe a font
            </button>
            <button
              type="button"
              onClick={onBrowseCatalog}
              className="inline-flex h-8 items-center gap-1.5 rounded-md bg-primary px-3 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <BookOpen className="h-3.5 w-3.5" />
              Browse catalog
            </button>
          </div>
        </div>
      ) : (
        <ul className="space-y-3">
          {items.map((s) => {
            const font = FONT_CATALOG.find((f) => f.id === s.fontId);
            if (!font) return null;
            const vs = font.variable ? buildVariationSettings(s.selection.axisValues) : "";
            const resolvedWeight = font.variable
              ? (s.selection.axisValues.wght ?? 500)
              : s.selection.staticWeight;
            const sample =
              s.sampleText.trim() ||
              font.sampleText.hangul ||
              font.sampleText.latin ||
              font.name;
            const isConfirming = confirming === s.id;
            const tracking =
              s.selection.letterSpacing !== 0
                ? `${s.selection.letterSpacing > 0 ? "+" : ""}${s.selection.letterSpacing.toFixed(3)}em`
                : null;

            return (
              <li
                key={s.id}
                className="group overflow-hidden rounded-2xl border border-border/50 bg-card/40 transition-colors hover:border-primary/30 dark:border-border dark:bg-card/60"
              >
                {/* Specimen row — click anywhere opens the customize modal */}
                <button
                  type="button"
                  onClick={() => {
                    trackSavedOpen(s.fontId);
                    onOpen(s);
                  }}
                  className="flex w-full flex-col items-start gap-4 p-5 text-left sm:flex-row sm:items-center sm:gap-6"
                  aria-label={`Open ${s.name}`}
                >
                  <div className="min-w-0 flex-1">
                    <div
                      className="truncate text-[32px] leading-tight text-foreground sm:text-[38px]"
                      style={{
                        fontFamily: font.cssFamily,
                        fontWeight: resolvedWeight,
                        letterSpacing: `${s.selection.letterSpacing}em`,
                        ...(vs ? { fontVariationSettings: vs } : {}),
                      }}
                    >
                      {sample}
                    </div>
                  </div>
                  <div className="flex w-full shrink-0 flex-col gap-1 sm:w-[240px]">
                    <div className="truncate text-sm font-semibold text-foreground">
                      {s.name}
                    </div>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[11px] text-muted-foreground">
                      <span className="truncate">{font.name}</span>
                      <span aria-hidden className="text-border">·</span>
                      <span>{Math.round(resolvedWeight)}</span>
                      <span aria-hidden className="text-border">·</span>
                      <span>{s.previewSize}px</span>
                      {tracking && (
                        <>
                          <span aria-hidden className="text-border">·</span>
                          <span>{tracking}</span>
                        </>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                      <span>{scriptLabels(font.scripts)}</span>
                      <span aria-hidden className="text-border">·</span>
                      <span className="inline-flex items-center gap-1 text-muted-foreground/80 normal-case tracking-normal">
                        <Clock className="h-2.5 w-2.5" />
                        {formatAge(s.createdAt)}
                      </span>
                    </div>
                  </div>
                </button>

                {/* Action strip — the "now what?" row. Keep labels short and
                    iconed so the workflow reads at a glance. */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-t border-border/40 bg-background/50 px-3 py-2 dark:bg-background/30">
                  <div className="flex flex-wrap items-center gap-1">
                    <ActionButton
                      icon={<FileText className="h-3 w-3" />}
                      label={copied === `${s.id}:css` ? "Copied" : "Copy CSS"}
                      active={copied === `${s.id}:css`}
                      onClick={() => handleCopy("css", s)}
                    />
                    <ActionButton
                      icon={<Copy className="h-3 w-3" />}
                      label={
                        copied === `${s.id}:designmd` ? "Copied" : "Copy DESIGN.md"
                      }
                      active={copied === `${s.id}:designmd`}
                      onClick={() => handleCopy("designmd", s)}
                    />
                    <ActionButton
                      icon={<Link2 className="h-3 w-3" />}
                      label={copied === `${s.id}:share` ? "Copied" : "Share"}
                      active={copied === `${s.id}:share`}
                      onClick={() => handleCopy("share", s)}
                    />
                    <ActionButton
                      icon={<SlidersHorizontal className="h-3 w-3" />}
                      label="Open"
                      onClick={() => {
                    trackSavedOpen(s.fontId);
                    onOpen(s);
                  }}
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => handleDelete(s.id)}
                    onBlur={() => setConfirming((c) => (c === s.id ? null : c))}
                    className={
                      isConfirming
                        ? "inline-flex h-7 items-center gap-1 rounded-md bg-destructive px-2.5 text-[11px] font-semibold text-destructive-foreground"
                        : "inline-flex h-7 items-center gap-1 rounded-md px-2 text-[11px] text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                    }
                    aria-label={isConfirming ? `Confirm delete ${s.name}` : `Delete ${s.name}`}
                  >
                    <Trash2 className="h-3 w-3" />
                    {isConfirming ? "Confirm" : ""}
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

function ActionButton({
  icon,
  label,
  onClick,
  active,
}: {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        active
          ? "inline-flex h-7 items-center gap-1.5 rounded-md bg-primary/10 px-2.5 text-[11px] font-semibold text-primary"
          : "inline-flex h-7 items-center gap-1.5 rounded-md px-2.5 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
      }
    >
      {active ? <Check className="h-3 w-3" /> : icon}
      {label}
    </button>
  );
}
