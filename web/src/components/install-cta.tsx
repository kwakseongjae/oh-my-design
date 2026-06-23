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
 * Events (via lib/activation/analytics):
 * - act_install_copy { surface, reference? } — KEY EVENT. Also bumps the Redis
 *   `install` counter (NOT `copy`), so install-command copies never pollute a
 *   reference's content-copy popularity.
 * - act_prompt_copy  { reference } — bumps the Redis `copy` counter.
 */

import { useState } from "react";
import { Check, Copy, Sparkles, Terminal } from "lucide-react";
import { trackInstallCopy, trackPromptCopy } from "@/lib/activation/analytics";
import { REFERENCE_COUNT } from "@/lib/catalog-count";
import {
  firstPromptFor,
  stripBuilderProvenance,
} from "@/lib/core/builder-prompt";

export const INSTALL_CMD = "npx oh-my-design-cli install-skills";

export type InstallCtaSource = "hero" | "ref_detail" | "collection" | "builder";

export { firstPromptFor };

export function InstallCta({
  source,
  reference,
  brandName,
  prompt,
  variant = "block",
}: {
  source: InstallCtaSource;
  /** Reference id when a brand is in context (detail page). */
  reference?: string;
  /** Display name for the per-brand first prompt. Omit to hide that button. */
  brandName?: string;
  /**
   * Full first-prompt override (builder preview: composed from the live
   * config so customizations survive the handoff). Falls back to the
   * generic firstPromptFor(brandName). GA4 prompt_copy is unchanged.
   */
  prompt?: string;
  variant?: "bar" | "block";
}) {
  const [copied, setCopied] = useState<"install" | "prompt" | null>(null);

  function copy(kind: "install" | "prompt", text: string) {
    navigator.clipboard.writeText(text);
    if (kind === "install") {
      trackInstallCopy({ surface: source, reference });
    } else if (reference) {
      trackPromptCopy(reference);
    }
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

  const promptText = prompt ?? (brandName ? firstPromptFor(brandName) : null);
  // Copy carries the full prompt (incl. builder-config provenance URL);
  // the visible label drops the URL and is width-capped so the pill stays short.
  const promptDisplay = promptText ? stripBuilderProvenance(promptText) : null;

  const promptBtn = promptText ? (
    <button
      type="button"
      onClick={() => copy("prompt", promptText)}
      className="inline-flex min-w-0 max-w-[24rem] items-center gap-2 rounded-full border border-border/60 bg-card/80 px-3.5 py-2 text-xs font-medium transition-colors hover:bg-accent dark:border-border"
      aria-label={brandName ? `Copy first prompt for ${brandName}` : "Copy first prompt"}
    >
      <Sparkles className="h-3.5 w-3.5 shrink-0 text-primary" />
      <span className="truncate">&ldquo;{promptDisplay}&rdquo;</span>
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
        One command installs {REFERENCE_COUNT} verified DESIGN.md references + 17
        skills into Claude Code, Cursor, Codex, or OpenCode. Free, MIT, zero AI calls.
      </p>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        {installBtn}
        {promptBtn}
      </div>
    </div>
  );
}
