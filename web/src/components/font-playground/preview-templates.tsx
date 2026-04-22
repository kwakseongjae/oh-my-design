"use client";

/**
 * Stage 3/5 — "font in UI context" previews.
 *
 * Given a FontEntry + LiveSelection, renders the four PREVIEW_* bundles
 * (hero / card / article / ui) so the user sees what their customized
 * font looks like applied to real layouts, not just a sample line.
 *
 * Purely presentational — consumes preview-contexts data and the live
 * typography settings. Caller is responsible for making sure the font
 * has been loaded (handled by the shell `<link>` / `<style>`).
 */

import { ArrowRight, ChevronDown } from "lucide-react";
import type { FontEntry } from "@/lib/fonts/types";
import type { LiveSelection } from "@/lib/fonts/tweaks";
import { buildVariationSettings } from "@/lib/fonts/loaders";
import {
  getPreviewBundle,
  type PreviewContextId,
  type PreviewLocale,
} from "@/lib/fonts/preview-contexts";

export const PREVIEW_CONTEXTS: { id: PreviewContextId; label: string }[] = [
  { id: "hero", label: "Hero" },
  { id: "card", label: "Card" },
  { id: "article", label: "Article" },
  { id: "ui", label: "Buttons & UI" },
];

function fontStyle(
  font: FontEntry,
  selection: LiveSelection,
  weight?: number,
  color?: string,
): React.CSSProperties {
  const vs = font.variable ? buildVariationSettings(selection.axisValues) : "";
  const resolvedWeight = font.variable
    ? (weight ?? selection.axisValues.wght ?? 500)
    : (weight ?? selection.staticWeight);
  return {
    fontFamily: font.cssFamily,
    fontWeight: resolvedWeight,
    letterSpacing: `${selection.letterSpacing}em`,
    ...(vs ? { fontVariationSettings: vs } : {}),
    ...(color && color !== "currentColor" ? { color } : {}),
  };
}

function HeroPreview({
  font,
  selection,
  bundle,
  color,
}: {
  font: FontEntry;
  selection: LiveSelection;
  bundle: ReturnType<typeof getPreviewBundle>;
  color?: string;
}) {
  const t = bundle.hero;
  return (
    <div className="rounded-2xl border border-border/50 bg-gradient-to-br from-background to-muted/20 p-8 dark:border-border sm:p-12">
      <div
        className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground"
        style={fontStyle(font, selection, 600)}
      >
        {t.kicker}
      </div>
      <h3
        className="mt-3 text-[clamp(28px,5vw,56px)] leading-[1.05] tracking-tight text-foreground"
        style={fontStyle(font, selection, 700, color)}
      >
        {t.title}
      </h3>
      <p
        className="mt-4 max-w-xl text-[clamp(14px,1.6vw,17px)] leading-relaxed text-muted-foreground"
        style={fontStyle(font, selection)}
      >
        {t.body}
      </p>
      <div
        className="mt-6 inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm text-background"
        style={{
          ...fontStyle(font, selection, 600),
          background: color && color !== "currentColor" ? color : undefined,
          backgroundColor:
            color && color !== "currentColor" ? color : "var(--foreground)",
          color: "#fff",
        }}
      >
        {t.cta}
        <ArrowRight className="h-3.5 w-3.5" />
      </div>
    </div>
  );
}

function CardPreview({
  font,
  selection,
  bundle,
  color,
}: {
  font: FontEntry;
  selection: LiveSelection;
  bundle: ReturnType<typeof getPreviewBundle>;
  color?: string;
}) {
  const t = bundle.card;
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {[0, 1].map((i) => (
        <div
          key={i}
          className="flex flex-col gap-3 rounded-xl border border-border/50 bg-card/40 p-5 dark:border-border dark:bg-card/60"
        >
          <div
            aria-hidden
            className={
              color && color !== "currentColor"
                ? "aspect-[4/3] rounded-lg"
                : "aspect-[4/3] rounded-lg bg-gradient-to-br from-muted via-muted/70 to-muted/30 ring-1 ring-inset ring-border/40"
            }
            style={
              color && color !== "currentColor"
                ? {
                    background: `linear-gradient(135deg, ${color} 0%, ${color}33 100%)`,
                  }
                : undefined
            }
          />
          <div
            className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground"
            style={fontStyle(font, selection, 600)}
          >
            {t.metaLabel} · {t.metaValue}
          </div>
          <div
            className="text-lg leading-tight text-foreground"
            style={fontStyle(font, selection, 600, color)}
          >
            {t.title}
          </div>
          <p
            className="text-sm leading-relaxed text-muted-foreground"
            style={fontStyle(font, selection)}
          >
            {t.body}
          </p>
          <div
            className="mt-auto text-xs"
            style={fontStyle(font, selection, 500, color)}
          >
            {t.actionLabel}
          </div>
        </div>
      ))}
    </div>
  );
}

function ArticlePreview({
  font,
  selection,
  bundle,
  color,
}: {
  font: FontEntry;
  selection: LiveSelection;
  bundle: ReturnType<typeof getPreviewBundle>;
  color?: string;
}) {
  const t = bundle.article;
  return (
    <article className="mx-auto max-w-2xl rounded-xl border border-border/50 bg-background p-8 dark:border-border sm:p-10">
      <div
        className="text-[10px] font-semibold uppercase tracking-[0.2em]"
        style={fontStyle(font, selection, 600, color)}
      >
        {t.kicker}
      </div>
      <h3
        className="mt-3 text-3xl leading-tight tracking-tight text-foreground sm:text-4xl"
        style={fontStyle(font, selection, 700, color)}
      >
        {t.title}
      </h3>
      <div
        className="mt-2 text-xs text-muted-foreground"
        style={fontStyle(font, selection)}
      >
        {t.dateline}
      </div>
      <div className="mt-6 space-y-4 text-[15px] leading-[1.75] text-foreground/90">
        {t.paragraphs.map((p, i) => (
          <p key={i} style={fontStyle(font, selection)}>
            {p}
          </p>
        ))}
      </div>
      <h4
        className="mt-7 text-lg leading-tight text-foreground"
        style={fontStyle(font, selection, 600)}
      >
        {t.subheading}
      </h4>
      <p
        className="mt-3 text-[15px] leading-[1.75] text-foreground/90"
        style={fontStyle(font, selection)}
      >
        {t.tailParagraph}
      </p>
    </article>
  );
}

function UiPreview({
  font,
  selection,
  bundle,
  color,
}: {
  font: FontEntry;
  selection: LiveSelection;
  bundle: ReturnType<typeof getPreviewBundle>;
  color?: string;
}) {
  const t = bundle.ui;
  const hasColor = Boolean(color && color !== "currentColor");
  return (
    <div className="flex flex-col gap-5 rounded-xl border border-border/50 bg-background p-6 dark:border-border">
      {/* Nav */}
      <div className="flex flex-wrap items-center gap-2 border-b border-border/40 pb-4">
        {t.menuItems.map((m, i) => (
          <span
            key={m}
            className={
              i === 0
                ? "rounded-md px-2.5 py-1 text-xs"
                : "px-2.5 py-1 text-xs text-muted-foreground"
            }
            style={{
              ...fontStyle(font, selection, i === 0 ? 600 : 500),
              ...(i === 0
                ? hasColor
                  ? { background: `${color}1a`, color }
                  : { background: "hsl(var(--foreground) / 0.1)", color: "inherit" }
                : {}),
            }}
          >
            {m}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          className="rounded-md px-4 py-2 text-sm text-background"
          style={{
            ...fontStyle(font, selection, 600),
            backgroundColor: hasColor ? color : undefined,
            background: hasColor ? color : undefined,
            color: "#fff",
          }}
        >
          {t.primaryLabel}
        </button>
        <button
          type="button"
          className="rounded-md border bg-card/40 px-4 py-2 text-sm dark:border-border"
          style={{
            ...fontStyle(font, selection, 500),
            borderColor: hasColor ? `${color}66` : undefined,
            color: hasColor ? color : undefined,
          }}
        >
          {t.secondaryLabel}
        </button>
        <button
          type="button"
          className="inline-flex items-center gap-1 px-2 py-2 text-sm text-muted-foreground"
          style={fontStyle(font, selection, 500)}
        >
          {t.ghostLabel}
          <ChevronDown className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap items-center gap-1.5">
        {t.badges.map((b) => (
          <span
            key={b}
            className="rounded-full border px-2 py-0.5 text-[11px]"
            style={{
              ...fontStyle(font, selection, 600),
              borderColor: hasColor ? `${color}55` : undefined,
              color: hasColor ? color : undefined,
              background: hasColor ? `${color}0f` : undefined,
            }}
          >
            {b}
          </span>
        ))}
      </div>

      {/* Price row */}
      <div className="mt-1 flex items-baseline justify-between border-t border-border/40 pt-4">
        <span
          className="text-sm text-muted-foreground"
          style={fontStyle(font, selection, 500)}
        >
          {t.price.label}
        </span>
        <span
          className="text-xl"
          style={fontStyle(font, selection, 700, color)}
        >
          {t.price.value}
        </span>
      </div>
    </div>
  );
}

export function PreviewTemplates({
  font,
  selection,
  context,
  locale,
  color,
}: {
  font: FontEntry;
  selection: LiveSelection;
  context: PreviewContextId;
  locale: PreviewLocale;
  color?: string;
}) {
  const bundle = getPreviewBundle(locale);
  switch (context) {
    case "hero":
      return (
        <HeroPreview font={font} selection={selection} bundle={bundle} color={color} />
      );
    case "card":
      return (
        <CardPreview font={font} selection={selection} bundle={bundle} color={color} />
      );
    case "article":
      return (
        <ArticlePreview font={font} selection={selection} bundle={bundle} color={color} />
      );
    case "ui":
      return (
        <UiPreview font={font} selection={selection} bundle={bundle} color={color} />
      );
  }
}

export function PreviewContextTabs({
  active,
  onChange,
}: {
  active: PreviewContextId;
  onChange: (id: PreviewContextId) => void;
}) {
  return (
    <div
      role="tablist"
      aria-label="Preview context"
      className="inline-flex items-center gap-1 rounded-full border border-border/60 bg-card/50 p-1 dark:border-border"
    >
      {PREVIEW_CONTEXTS.map((c) => (
        <button
          key={c.id}
          type="button"
          role="tab"
          aria-selected={active === c.id}
          onClick={() => onChange(c.id)}
          className={
            active === c.id
              ? "rounded-full bg-foreground px-3 py-1 text-xs font-semibold text-background"
              : "rounded-full px-3 py-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
          }
        >
          {c.label}
        </button>
      ))}
    </div>
  );
}
