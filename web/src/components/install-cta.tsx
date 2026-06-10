"use client";

/**
 * Install CTA — the single conversion funnel every surface flows into:
 * arrive → ds_detail_view → install_copy → (npm DL joins as an external
 * metric). Two variants:
 *
 * - "bar"   — sticky pill fixed to the bottom of the viewport (reference
 *             detail pages). Pair with bottom padding on the page so the
 *             last content row stays reachable.
 * - "block" — inline card (collection pages, long-form surfaces).
 *
 * Events (GA4, matching the inline event() convention in detail-view):
 * - install_copy { source: 'hero' | 'ref_detail' | 'collection', reference? }
 * - prompt_copy  { reference }
 * Both also bump the server-side Redis `copy` counter via trackRef when a
 * reference is in context.
 */

import { useState } from "react";
import { Check, Copy, Sparkles, Terminal } from "lucide-react";
import { event, trackRef } from "@/lib/gtag";

export const INSTALL_CMD = "npx oh-my-design-cli install-skills";

export type InstallCtaSource = "hero" | "ref_detail" | "collection";

/** Per-brand first prompt — what users paste into their agent after install. */
export function firstPromptFor(brandName: string) {
  return `Set up our design system — ${brandName}-style.`;
}

export function InstallCta({
  source,
  reference,
  brandName,
  variant = "block",
}: {
  source: InstallCtaSource;
  /** Reference id when a brand is in context (detail page). */
  reference?: string;
  /** Display name for the per-brand first prompt. Omit to hide that button. */
  brandName?: string;
  variant?: "bar" | "block";
}) {
  const [copied, setCopied] = useState<"install" | "prompt" | null>(null);

  function copy(kind: "install" | "prompt", text: string) {
    navigator.clipboard.writeText(text);
    if (kind === "install") {
      event("install_copy", { source, ...(reference ? { reference } : {}) });
    } else if (reference) {
      event("prompt_copy", { reference });
    }
    if (reference) trackRef("copy", reference);
    setCopied(kind);
    setTimeout(() => setCopied(null), 2000);
  }

  const installBtn = (
    <button
      type="button"
      onClick={() => copy("install", INSTALL_CMD)}
      className="inline-flex min-w-0 items-center gap-2 rounded-full bg-foreground px-3.5 py-2 font-mono text-xs font-medium text-background transition-all hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
      aria-label="Copy install command"
    >
      <Terminal className="h-3.5 w-3.5 shrink-0" />
      <span className="truncate">{INSTALL_CMD}</span>
      {copied === "install" ? (
        <Check className="h-3.5 w-3.5 shrink-0 text-green-500" />
      ) : (
        <Copy className="h-3.5 w-3.5 shrink-0 opacity-60" />
      )}
    </button>
  );

  const promptBtn = brandName ? (
    <button
      type="button"
      onClick={() => copy("prompt", firstPromptFor(brandName))}
      className="inline-flex min-w-0 items-center gap-2 rounded-full border border-border/60 bg-card/80 px-3.5 py-2 text-xs font-medium transition-colors hover:bg-accent dark:border-border"
      aria-label={`Copy first prompt for ${brandName}`}
    >
      <Sparkles className="h-3.5 w-3.5 shrink-0 text-primary" />
      <span className="truncate">&ldquo;{firstPromptFor(brandName)}&rdquo;</span>
      {copied === "prompt" ? (
        <Check className="h-3.5 w-3.5 shrink-0 text-green-500" />
      ) : (
        <Copy className="h-3.5 w-3.5 shrink-0 opacity-60" />
      )}
    </button>
  ) : null;

  if (variant === "bar") {
    return (
      <div className="pointer-events-none fixed inset-x-0 bottom-4 z-40 flex justify-center px-4">
        <div className="pointer-events-auto flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-border/60 bg-background/85 p-1.5 shadow-lg backdrop-blur-xl dark:border-border">
          {installBtn}
          <span className="hidden sm:block">{promptBtn}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border/60 bg-card/40 p-5 dark:border-border dark:bg-card/60">
      <div className="text-sm font-semibold">
        Use these design systems in your AI coding agent
      </div>
      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
        One command installs 221 verified DESIGN.md references + 15 skills into
        Claude Code, Cursor, Codex, or OpenCode. Free, MIT, zero AI calls.
      </p>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        {installBtn}
        {promptBtn}
      </div>
    </div>
  );
}
