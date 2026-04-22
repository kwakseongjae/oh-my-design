"use client";

/**
 * Detail modal — interactive. User can:
 *   - nudge the font via 3 opinionated tweak pairs (Rounder/Sharper, etc.)
 *   - fine-tune via raw axis sliders (power-user opt-in)
 *   - copy either a CSS snippet or a DESIGN.md §3 block
 *
 * All state is local to the modal; on close or font-change, we reset to the
 * catalog defaults. Selection is not persisted — this keeps the modal
 * stateless across sessions (matches Browse's exploratory intent).
 */

import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Check,
  Copy,
  ExternalLink,
  FileCode2,
  FileText,
  Link2,
  Pencil,
  RotateCcw,
  Save,
  X,
} from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import type { FontEntry } from "@/lib/fonts/types";
import { buildExportCss, buildVariationSettings } from "@/lib/fonts/loaders";
import { buildDesignMdSnippet } from "@/lib/fonts/designmd-export";
import {
  distanceFromDefault,
  initialSelection,
  type LiveSelection,
} from "@/lib/fonts/tweaks";
import { findSimilar } from "@/lib/fonts/similarity";
import { saveFont, type SavedFont } from "@/lib/fonts/saved-store";
import { buildFontShareUrl } from "@/lib/fonts/share-link";
import {
  trackCustomizeSave,
  trackExportCopy,
  trackExternalClick,
  trackModalReset,
  trackModalSimilarPick,
  trackModalTweak,
} from "@/lib/fonts/analytics";
import {
  PreviewContextTabs,
  PreviewTemplates,
} from "./preview-templates";
import { ColorPalette, PREVIEW_SWATCHES } from "./color-palette";

/** CSS font-weight industry names (OS/2 usWeightClass). */
function weightName(w: number): string {
  if (w <= 150) return "Thin";
  if (w <= 250) return "Extra Light";
  if (w <= 350) return "Light";
  if (w <= 450) return "Regular";
  if (w <= 550) return "Medium";
  if (w <= 650) return "Semi Bold";
  if (w <= 750) return "Bold";
  if (w <= 850) return "Extra Bold";
  return "Black";
}

/** Snap a raw slider value to nearest 100, clamped to [min, max]. */
function snapWeight(v: number, min: number, max: number): number {
  const snapped = Math.round(v / 100) * 100;
  return Math.min(max, Math.max(min, snapped));
}
import type { PreviewContextId } from "@/lib/fonts/preview-contexts";

type ExportTab = "css" | "designmd";

export function DetailModal({
  font,
  sampleText,
  open,
  onOpenChange,
  onSelectFont,
  initialSelection: presetSelection,
  initialPreviewSize,
  onSaved,
  onSampleTextChange,
}: {
  font: FontEntry | null;
  sampleText: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Called when the user clicks a "similar font" card. Parent swaps the
   *  detail view to that font (modal stays open). */
  onSelectFont?: (id: string) => void;
  /** Preloaded selection (e.g. when opening a saved font). Defaults to
   *  the font's catalog defaults when omitted. */
  initialSelection?: LiveSelection;
  /** Preloaded render size. Defaults to 56 when omitted. */
  initialPreviewSize?: number;
  /** If provided, shows a Save button; called with the new SavedFont row
   *  after we've persisted it. Parent typically advances to Stage 4. */
  onSaved?: (saved: SavedFont) => void;
  /** If provided, the specimen becomes an editable input that updates
   *  the shared sample-text state (sticky header stays in sync). */
  onSampleTextChange?: (value: string) => void;
}) {
  const [selection, setSelection] = useState<LiveSelection | null>(null);
  const [tab, setTab] = useState<ExportTab>("css");
  const [copied, setCopied] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);
  const [previewSize, setPreviewSize] = useState<number>(initialPreviewSize ?? 56);
  const [previewContext, setPreviewContext] = useState<PreviewContextId>("hero");
  const [previewColorId, setPreviewColorId] = useState<string>(PREVIEW_SWATCHES[0].id);
  const [saveOpen, setSaveOpen] = useState(false);
  const [saveName, setSaveName] = useState("");

  const similar = useMemo(() => (font ? findSimilar(font) : []), [font]);

  // Reset selection whenever the font changes. Merge preset with defaults
  // so legacy saves (predating lineHeight) fill in missing fields.
  useEffect(() => {
    if (font) {
      const base = initialSelection(font);
      const merged = presetSelection
        ? {
            ...base,
            ...presetSelection,
            lineHeight:
              typeof presetSelection.lineHeight === "number"
                ? presetSelection.lineHeight
                : base.lineHeight,
          }
        : base;
      setSelection(merged);
      setPreviewSize(initialPreviewSize ?? 56);
    }
    // We key on `font?.id` (identity) rather than `font` (object) to avoid
    // re-running the reset every render when the parent recreates the
    // entry; linter nag acknowledged and intentional.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [font?.id, presetSelection, initialPreviewSize]);

  // Close handler resets tab state — clearing modal-local UI state on close
  useEffect(() => {
    if (!open) {
      setCopied(false);
      setShareCopied(false);
      setTab("css");
      setSaveOpen(false);
      setSaveName("");
      setPreviewContext("hero");
      setPreviewColorId(PREVIEW_SWATCHES[0].id);
    }
  }, [open]);

  if (!font || !selection) return null;

  const isDirty = distanceFromDefault(font, selection) > 0.001;

  function setAxis(tag: string, v: number) {
    if (!selection) return;
    setSelection({
      ...selection,
      axisValues: { ...selection.axisValues, [tag]: v },
    });
  }

  function setStaticWeight(w: number) {
    if (!selection) return;
    setSelection({ ...selection, staticWeight: w });
  }

  function setLetterSpacing(v: number) {
    if (!selection) return;
    setSelection({ ...selection, letterSpacing: v });
  }

  function setLineHeight(v: number) {
    if (!selection) return;
    setSelection({ ...selection, lineHeight: v });
  }

  function reset() {
    if (!font) return;
    setSelection(initialSelection(font));
    trackModalReset(font.id);
  }

  const css = buildExportCss(font, {
    axisValues: selection.axisValues,
    staticWeight: selection.staticWeight,
    letterSpacing: selection.letterSpacing,
    lineHeight: selection.lineHeight,
  });
  const designMd = buildDesignMdSnippet(font, selection);
  const exportText = tab === "css" ? css : designMd;

  async function copyExport() {
    try {
      await navigator.clipboard.writeText(exportText);
      trackExportCopy({
        channel: tab === "css" ? "css" : "designmd",
        surface: "modal",
        fontId: font!.id,
      });
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copy:", exportText);
    }
  }

  function openFontSource() {
    if (!font) return;
    trackExternalClick({ destination: "get_font", fontId: font.id });
    window.open(font.source, "_blank", "noopener,noreferrer");
  }

  function pickSimilar(id: string) {
    trackModalSimilarPick({ from: font!.id, to: id });
    onSelectFont?.(id);
  }

  async function copyShareLink() {
    if (!font || !selection) return;
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    const url = buildFontShareUrl(origin, {
      fontId: font.id,
      selection,
      previewSize,
      sampleText,
    });
    try {
      await navigator.clipboard.writeText(url);
      trackExportCopy({ channel: "share", surface: "modal", fontId: font.id });
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 2000);
    } catch {
      window.prompt("Copy link:", url);
    }
  }

  function handleSave() {
    if (!font || !selection) return;
    const name = saveName.trim() || `${font.name} — custom`;
    const entry = saveFont({
      name,
      fontId: font.id,
      selection,
      previewSize,
      sampleText,
    });
    trackCustomizeSave({
      fontId: font.id,
      hasCustomizations: distanceFromDefault(font, selection) > 0.001,
      nameLen: name.length,
    });
    setSaveOpen(false);
    setSaveName("");
    onSaved?.(entry);
  }

  const displayWeight = font.variable
    ? (selection.axisValues.wght ?? 400)
    : selection.staticWeight;
  const display =
    sampleText.trim() !== ""
      ? sampleText
      : (font.sampleText.hangul ?? font.sampleText.latin ?? font.name);
  const previewLocale: "latin" | "hangul" = font.scripts.includes("hangul")
    ? "hangul"
    : "latin";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="sm:max-w-3xl gap-0 p-0 overflow-hidden max-h-[92vh] flex flex-col"
        showCloseButton={false}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-3 border-b border-border/40 px-6 py-4 dark:border-border">
          <div className="min-w-0 flex-1">
            <DialogTitle className="text-lg font-semibold">{font.name}</DialogTitle>
            <div className="mt-0.5 flex flex-wrap items-center gap-1.5 text-[10px] uppercase tracking-wider text-muted-foreground">
              <span>{font.family}</span>
              <span aria-hidden>·</span>
              <span>{font.scripts.join(" + ")}</span>
              {font.designer && (
                <>
                  <span aria-hidden>·</span>
                  <span>by {font.designer}</span>
                </>
              )}
              <span aria-hidden>·</span>
              <span className="rounded bg-muted/50 px-1.5 py-0.5 text-[9px] font-semibold">
                {font.license}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            {isDirty && (
              <button
                type="button"
                onClick={reset}
                className="inline-flex items-center gap-1 rounded-lg border border-border/60 bg-card/50 px-2 py-1 text-[11px] font-medium transition-colors hover:bg-accent dark:border-border"
                aria-label="Reset to catalog defaults"
              >
                <RotateCcw className="h-3 w-3" />
                Reset
              </button>
            )}
            <button
              type="button"
              onClick={copyShareLink}
              className="inline-flex items-center gap-1 rounded-lg border border-border/60 bg-card/50 px-2 py-1 text-[11px] font-medium transition-colors hover:bg-accent dark:border-border"
              aria-label="Copy share link"
            >
              {shareCopied ? (
                <Check className="h-3 w-3 text-green-500" />
              ) : (
                <Link2 className="h-3 w-3" />
              )}
              {shareCopied ? "Copied" : "Share"}
            </button>
            {onSaved && (
              <button
                type="button"
                onClick={() => setSaveOpen(true)}
                className="inline-flex items-center gap-1 rounded-lg bg-foreground px-2.5 py-1 text-[11px] font-semibold text-background transition-opacity hover:opacity-90"
                aria-label="Save this font"
              >
                <Save className="h-3 w-3" />
                Save
              </button>
            )}
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="rounded-full p-1.5 text-muted-foreground hover:bg-accent"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Specimen — reflects current selection live */}
        <div className="flex-1 overflow-y-auto">
          <section className="border-b border-border/40 px-6 py-6 dark:border-border">
            {onSampleTextChange && (
              <div className="mb-4 flex items-center gap-2 rounded-lg border border-border/60 bg-background px-3 py-2 transition-colors focus-within:border-primary/60 dark:border-border">
                <Pencil className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                <div className="relative min-w-0 flex-1">
                  <input
                    type="text"
                    value={sampleText}
                    onChange={(e) => onSampleTextChange(e.target.value)}
                    maxLength={200}
                    className="peer relative z-10 h-7 w-full bg-transparent text-sm outline-none placeholder:text-transparent"
                    placeholder="문구를 적어 이 폰트로 바로 확인해보세요"
                    aria-label="미리보기 문구"
                  />
                  {!sampleText && (
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-y-0 left-0 flex items-center text-sm peer-focus:opacity-60"
                    >
                      <span className="fp-placeholder-shimmer">
                        문구를 적어 이 폰트로 바로 확인해보세요
                      </span>
                      <span className="fp-blink-cursor" />
                    </span>
                  )}
                </div>
                {sampleText && (
                  <button
                    type="button"
                    onClick={() => onSampleTextChange("")}
                    className="text-[10px] text-muted-foreground transition-colors hover:text-foreground"
                    aria-label="지우기"
                  >
                    지우기
                  </button>
                )}
              </div>
            )}
            <div
              className="break-words text-foreground"
              style={{
                fontFamily: font.cssFamily,
                fontSize: `${previewSize}px`,
                fontWeight: displayWeight,
                lineHeight: selection.lineHeight,
                fontVariationSettings: font.variable
                  ? buildVariationSettings(selection.axisValues)
                  : undefined,
                letterSpacing: selection.letterSpacing
                  ? `${selection.letterSpacing}em`
                  : undefined,
              }}
            >
              {display}
            </div>
            <div className="mt-5 space-y-2.5">
              <SliderRow label="Size" value={`${previewSize}px`}>
                <input
                  type="range"
                  min={14}
                  max={144}
                  step={1}
                  value={previewSize}
                  onChange={(e) => setPreviewSize(parseInt(e.target.value, 10))}
                  className="h-1 flex-1 cursor-pointer accent-primary"
                  aria-label="Preview size"
                />
              </SliderRow>

              {(() => {
                const wghtAxis = font.variable
                  ? font.axes.find((a) => a.tag === "wght")
                  : null;

                // Build the set of selectable weights. Variable fonts get
                // every 100-step within their wght range; static fonts get
                // their declared weights; single-weight gets one pill.
                let weights: number[] = [];
                let isVariable = false;
                let activeWeight = 400;
                if (wghtAxis) {
                  isVariable = true;
                  const start = Math.ceil(wghtAxis.min / 100) * 100;
                  const end = Math.floor(wghtAxis.max / 100) * 100;
                  for (let w = start; w <= end; w += 100) weights.push(w);
                  activeWeight = snapWeight(
                    selection.axisValues.wght ?? wghtAxis.default,
                    wghtAxis.min,
                    wghtAxis.max,
                  );
                } else if (font.weights && font.weights.length > 0) {
                  weights = [...font.weights];
                  activeWeight = selection.staticWeight;
                } else {
                  weights = [selection.staticWeight];
                  activeWeight = selection.staticWeight;
                }

                const locked = weights.length <= 1;

                return (
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs">
                    <span className="w-14 shrink-0 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                      Weight
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {weights.map((w) => {
                        const active = activeWeight === w;
                        return (
                          <button
                            key={w}
                            type="button"
                            disabled={locked}
                            onClick={() => {
                              if (locked) return;
                              if (isVariable) setAxis("wght", w);
                              else setStaticWeight(w);
                            }}
                            title={`${w} · ${weightName(w)}`}
                            className={
                              active
                                ? "rounded-md border border-primary bg-primary/10 px-2 py-0.5 text-[11px] font-mono text-primary"
                                : locked
                                  ? "rounded-md border border-border/50 bg-muted/40 px-2 py-0.5 font-mono text-[11px] text-muted-foreground dark:bg-muted/30"
                                  : "rounded-md border border-border/50 bg-background px-2 py-0.5 text-[11px] font-mono transition-colors hover:border-foreground/30"
                            }
                            aria-pressed={active}
                          >
                            {w}
                          </button>
                        );
                      })}
                    </div>
                    <span className="text-[10px] text-muted-foreground">
                      {weightName(activeWeight)}
                      {locked && " · 단일 웨이트"}
                    </span>
                  </div>
                );
              })()}

              <SliderRow
                label="Spacing"
                value={`${selection.letterSpacing.toFixed(3)}em`}
              >
                <input
                  type="range"
                  min={-0.1}
                  max={0.2}
                  step={0.005}
                  value={selection.letterSpacing}
                  onChange={(e) => setLetterSpacing(parseFloat(e.target.value))}
                  className="h-1 flex-1 cursor-pointer accent-primary"
                  aria-label="Letter spacing"
                />
              </SliderRow>

              <SliderRow
                label="Line"
                value={selection.lineHeight.toFixed(2)}
              >
                <input
                  type="range"
                  min={0.9}
                  max={2}
                  step={0.05}
                  value={selection.lineHeight}
                  onChange={(e) => setLineHeight(parseFloat(e.target.value))}
                  className="h-1 flex-1 cursor-pointer accent-primary"
                  aria-label="Line height"
                />
              </SliderRow>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              {font.description}
            </p>
          </section>

          {/* Preview in context */}
          <section className="border-b border-border/40 px-6 py-4 dark:border-border">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
              <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                Preview in context
              </div>
              <PreviewContextTabs
                active={previewContext}
                onChange={(id) => {
                  setPreviewContext(id);
                }}
              />
            </div>
            <div className="mb-3 flex items-center gap-3">
              <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                Color
              </span>
              <ColorPalette
                activeId={previewColorId}
                onChange={(sw) => {
                  setPreviewColorId(sw.id);
                  trackModalTweak({ fontId: font.id, kind: "color" });
                }}
              />
            </div>
            <PreviewTemplates
              font={font}
              selection={selection}
              context={previewContext}
              locale={previewLocale}
              color={
                PREVIEW_SWATCHES.find((s) => s.id === previewColorId)?.value
              }
            />
          </section>

          {/* Tags */}
          <section className="grid gap-4 border-b border-border/40 px-6 py-4 sm:grid-cols-2 dark:border-border">
            <TagRow label="Mood" tags={font.tags.mood} />
            <TagRow label="Use" tags={font.tags.use} />
            <TagRow label="Era" tags={font.tags.era} />
            <TagRow label="Personality" tags={font.tags.personality} />
          </section>

          {/* Similar fonts — reference-based discovery */}
          {similar.length > 0 && (
            <section className="border-b border-border/40 px-6 py-4 dark:border-border">
              <div className="mb-2 flex items-center justify-between">
                <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  Fonts like {font.name}
                </div>
                <div className="text-[10px] text-muted-foreground">
                  deterministic · tag-similarity
                </div>
              </div>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {similar.map(({ font: s, reasons }) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => pickSimilar(s.id)}
                    className="group flex items-center gap-3 rounded-lg border border-border/50 bg-card/30 p-3 text-left transition-all hover:border-foreground/30 hover:bg-accent/30 dark:border-border dark:bg-card/60"
                  >
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-muted/50 text-lg dark:bg-muted/30"
                      style={{
                        fontFamily: s.cssFamily,
                        fontWeight: s.variable
                          ? (s.axes.find((a) => a.tag === "wght")?.default ?? 500)
                          : (s.weights?.[Math.floor((s.weights?.length ?? 1) / 2)] ?? 400),
                      }}
                      aria-hidden
                    >
                      Aa
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-semibold">{s.name}</div>
                      <div className="mt-0.5 text-[10px] text-muted-foreground truncate">
                        {reasons.join(" · ") || `${s.family} · ${s.scripts.join("+")}`}
                      </div>
                    </div>
                    <ArrowRight className="h-3.5 w-3.5 text-muted-foreground shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:text-foreground" />
                  </button>
                ))}
              </div>
            </section>
          )}

          {/* Export tabs */}
          <section className="px-6 py-4">
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center gap-0.5 rounded-lg border border-border/50 bg-background p-0.5 dark:border-border">
                <TabButton
                  active={tab === "css"}
                  onClick={() => setTab("css")}
                  icon={<FileCode2 className="h-3.5 w-3.5" />}
                  label="CSS"
                />
                <TabButton
                  active={tab === "designmd"}
                  onClick={() => setTab("designmd")}
                  icon={<FileText className="h-3.5 w-3.5" />}
                  label="DESIGN.md"
                />
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={copyExport}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border/60 bg-background px-3 py-1.5 text-xs font-medium transition-colors hover:bg-muted dark:border-border"
                >
                  {copied ? (
                    <Check className="h-3.5 w-3.5 text-green-500" />
                  ) : (
                    <Copy className="h-3.5 w-3.5" />
                  )}
                  {copied ? "Copied" : `Copy ${tab === "css" ? "CSS" : "snippet"}`}
                </button>
                <button
                  type="button"
                  onClick={openFontSource}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-sm transition-all hover:brightness-110"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Get font
                </button>
              </div>
            </div>
            <pre className="max-h-64 overflow-auto rounded-lg bg-muted/40 px-4 py-3 font-mono text-[11px] leading-relaxed text-foreground/80 dark:bg-muted/30">
              {exportText}
            </pre>
            <p className="mt-2 text-[10px] leading-relaxed text-muted-foreground">
              This tool curates and points — it doesn&apos;t host or
              redistribute font files. Click <span className="font-semibold">Get font</span>
              {" "}to download from the original source under its own license
              ({font.license}).
            </p>
          </section>

        </div>

        {/* Inline save overlay — kept inside DialogContent so focus stays
         *  trapped in the same layer as the underlying modal. */}
        {saveOpen && onSaved && (
          <div
            className="absolute inset-0 z-10 flex items-center justify-center bg-background/70 backdrop-blur-sm"
            role="dialog"
            aria-label="Save font"
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSave();
              }}
              className="w-[min(22rem,90vw)] rounded-xl border border-border/60 bg-background p-5 shadow-xl dark:border-border"
            >
              <div className="text-sm font-semibold">Save this font</div>
              <p className="mt-1 text-xs text-muted-foreground">
                Give it a nickname so you can find it later.
              </p>
              <input
                type="text"
                autoFocus
                value={saveName}
                onChange={(e) => setSaveName(e.target.value)}
                placeholder={`${font.name} — custom`}
                className="mt-3 h-9 w-full rounded-md border border-border/60 bg-background px-3 text-sm outline-none focus:border-foreground/50 dark:border-border"
                aria-label="Save name"
                maxLength={64}
              />
              <div className="mt-4 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setSaveOpen(false);
                    setSaveName("");
                  }}
                  className="h-8 rounded-md border border-border/60 px-3 text-xs font-semibold transition-colors hover:bg-accent dark:border-border"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex h-8 items-center gap-1.5 rounded-md bg-foreground px-3 text-xs font-semibold text-background transition-opacity hover:opacity-90"
                >
                  <Save className="h-3 w-3" />
                  Save
                </button>
              </div>
            </form>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

function SliderRow({
  label,
  value,
  children,
}: {
  label: string;
  value: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 text-xs">
      <span className="w-14 shrink-0 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
        {label}
      </span>
      {children}
      <span className="w-14 text-right font-mono text-xs text-muted-foreground">
        {value}
      </span>
    </div>
  );
}

function TabButton({
  active,
  onClick,
  icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-[11px] font-medium transition-colors ${
        active ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

function TagRow({ label, tags }: { label: string; tags: string[] }) {
  return (
    <div>
      <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
        {label}
      </div>
      <div className="mt-1 flex flex-wrap gap-1">
        {tags.map((t) => (
          <span
            key={t}
            className="rounded-full bg-muted/50 px-2 py-0.5 text-[10px] font-medium capitalize text-foreground/80 dark:bg-muted/30"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
