"use client";

/**
 * WCAG contrast-ratio indicator — plain-language for non-designers.
 *
 * Drops the "AAA / AA / AA-L" jargon in the primary label and replaces it
 * with language an owner-operator can read at a glance: "Easy to read",
 * "Readable", "Large text only", "Hard to read". The technical tier and
 * the raw ratio still appear as secondary annotation for people who need
 * it to file an a11y audit, but they don't lead.
 */

import { Check, AlertTriangle, X } from "lucide-react";

function luminance(hex: string): number {
  const m = hex.replace("#", "").match(/.{2}/g);
  if (!m) return 0;
  const [r, g, b] = m.map((x) => {
    const v = parseInt(x, 16) / 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrastRatio(a: string, b: string): number {
  const la = luminance(a);
  const lb = luminance(b);
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
}

type Tier = "excellent" | "readable" | "display" | "fail";

function rate(ratio: number): { tier: Tier; label: string; tech: string; Icon: typeof Check } {
  if (ratio >= 7)
    return {
      tier: "excellent",
      label: "Easy to read",
      tech: "WCAG AAA",
      Icon: Check,
    };
  if (ratio >= 4.5)
    return {
      tier: "readable",
      label: "Readable",
      tech: "WCAG AA",
      Icon: Check,
    };
  if (ratio >= 3)
    return {
      tier: "display",
      label: "Large text only",
      tech: "WCAG AA · display size",
      Icon: AlertTriangle,
    };
  return {
    tier: "fail",
    label: "Hard to read",
    tech: "Below WCAG AA",
    Icon: X,
  };
}

const STYLES: Record<Tier, string> = {
  excellent: "border-green-500/30 bg-green-50 text-green-900 dark:bg-green-500/10 dark:text-green-300",
  readable: "border-border/50 bg-muted/30 text-foreground dark:bg-muted/20",
  display: "border-amber-500/30 bg-amber-50 text-amber-900 dark:bg-amber-500/10 dark:text-amber-300",
  fail: "border-red-500/30 bg-red-50 text-red-900 dark:bg-red-500/10 dark:text-red-300",
};

export function ContrastBadge({
  primary,
  background = "#ffffff",
  compact = false,
}: {
  primary: string;
  background?: string;
  /** Compact variant for the PrimitivesStrip — single-line, small. */
  compact?: boolean;
}) {
  const ratio = contrastRatio(primary, background);
  const { tier, label, tech, Icon } = rate(ratio);

  if (compact) {
    return (
      <div
        className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-[11px] font-medium ${STYLES[tier]}`}
        title={`${tech} · ${ratio.toFixed(2)}:1 contrast`}
      >
        <Icon className="h-3.5 w-3.5 shrink-0" />
        <span className="font-mono uppercase tracking-wider text-muted-foreground">
          contrast
        </span>
        <span>{label}</span>
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 ${STYLES[tier]}`}
      title={`Contrast ratio ${ratio.toFixed(2)}:1`}
    >
      <Icon className="h-4 w-4 shrink-0" />
      <div className="flex flex-col leading-tight">
        <span className="text-xs font-semibold">{label}</span>
        <span className="text-[9px] font-mono opacity-75">
          {tech} · {ratio.toFixed(2)}:1
        </span>
      </div>
    </div>
  );
}
