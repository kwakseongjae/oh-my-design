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
 * - "inline" — the two buttons alone, for a host section that already
 *             carries its own heading (the detail page's #use block).
 *
 * Events (via lib/activation/analytics):
 * - act_install_copy { surface, reference? } — KEY EVENT. Also bumps the Redis
 *   `install` counter (NOT `copy`), so install-command copies never pollute a
 *   reference's content-copy popularity.
 * - act_prompt_copy  { reference } — bumps the Redis `copy` counter.
 */

import { useEffect, useRef, useState } from "react";
import { AlertCircle, Check, Copy, Sparkles, Terminal } from "lucide-react";
import { trackInstallCopy, trackPromptCopy } from "@/lib/activation/analytics";
import { REFERENCE_COUNT, SKILL_COUNT } from "@/lib/catalog-count";
import { copyText } from "@/lib/clipboard";

export const INSTALL_CMD = "npx oh-my-design-cli@latest";

export type InstallCtaSource = "hero" | "ref_detail" | "collection" | "docs" | "cli";

/** Per-brand first prompt — the sentence a user pastes into their agent. */
export function firstPromptFor(brandName: string): string {
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
  variant?: "bar" | "block" | "inline" | "panel";
}) {
  const [copyState, setCopyState] = useState<{
    kind: "install" | "prompt";
    status: "copied" | "failed";
  } | null>(null);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (resetTimer.current) clearTimeout(resetTimer.current);
  }, []);

  async function copy(
    kind: "install" | "prompt",
    text: string,
    restoreTarget: HTMLButtonElement,
  ) {
    const copied = await copyText(text, {
      restoreTarget,
      onSuccess: () => {
        if (kind === "install") {
          trackInstallCopy({ surface: source, reference });
        } else if (reference) {
          trackPromptCopy({ reference, surface: source });
        }
      },
    });
    setCopyState({ kind, status: copied ? "copied" : "failed" });
    if (resetTimer.current) clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setCopyState(null), copied ? 1600 : 2400);
  }

  const installBtn = (
    <button
      type="button"
      onClick={(event) => copy("install", INSTALL_CMD, event.currentTarget)}
      className="inline-flex min-w-0 items-center gap-2 rounded-full bg-foreground px-3.5 py-2 font-mono text-xs font-medium text-background transition-all hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
      aria-label="Copy install command"
    >
      <Terminal className="h-3.5 w-3.5 shrink-0" />
      <span className="truncate">{INSTALL_CMD}</span>
      {copyState?.kind === "install" && copyState.status === "copied" ? (
        <Check className="h-3.5 w-3.5 shrink-0 text-green-500" />
      ) : copyState?.kind === "install" && copyState.status === "failed" ? (
        <AlertCircle className="h-3.5 w-3.5 shrink-0 text-red-400" />
      ) : (
        <Copy className="h-3.5 w-3.5 shrink-0 opacity-60" />
      )}
    </button>
  );

  const promptText = brandName ? firstPromptFor(brandName) : null;

  const promptBtn = promptText ? (
    <button
      type="button"
      onClick={(event) => copy("prompt", promptText, event.currentTarget)}
      className="inline-flex min-w-0 max-w-[24rem] items-center gap-2 rounded-full border border-border/60 bg-card/80 px-3.5 py-2 text-xs font-medium transition-colors hover:bg-accent dark:border-border"
      aria-label={brandName ? `Copy first prompt for ${brandName}` : "Copy first prompt"}
    >
      <Sparkles className="h-3.5 w-3.5 shrink-0 text-primary" />
      <span className="truncate">&ldquo;{promptText}&rdquo;</span>
      {copyState?.kind === "prompt" && copyState.status === "copied" ? (
        <Check className="h-3.5 w-3.5 shrink-0 text-green-500" />
      ) : copyState?.kind === "prompt" && copyState.status === "failed" ? (
        <AlertCircle className="h-3.5 w-3.5 shrink-0 text-red-400" />
      ) : (
        <Copy className="h-3.5 w-3.5 shrink-0 opacity-60" />
      )}
    </button>
  ) : null;

  const status = (
    <span className="sr-only" role="status" aria-live="polite">
      {copyState?.status === "copied" ? "Copied" : copyState?.status === "failed" ? "Copy failed" : ""}
    </span>
  );

  if (variant === "panel") {
    // Concept A item page (#use): numbered steps, the command and the whole
    // first prompt readable rather than truncated. Same buttons' handlers, so
    // act_install_copy / act_prompt_copy keep meaning one control each.
    const mark = (kind: "install" | "prompt") =>
      copyState?.kind === kind ? (copyState.status === "copied" ? "Copied" : "Copy failed") : "Copy";
    return (
      <>
      <ol className="sq-steps" start={2}>
        <li>
          <span className="sq-step-k" aria-hidden="true">2</span>
          <span className="sq-step-b">
            <span className="sq-step-t">Install the skills</span>
            <button
              type="button"
              className="sq-cmd"
              onClick={(event) => copy("install", INSTALL_CMD, event.currentTarget)}
              aria-label="Copy install command"
            >
              <code>{INSTALL_CMD}</code>
              <span className="sq-cmd-c">{mark("install")}</span>
            </button>
          </span>
        </li>
        {promptText ? (
          <li>
            <span className="sq-step-k" aria-hidden="true">3</span>
            <span className="sq-step-b">
              <span className="sq-step-t">Give your agent the first prompt</span>
              <button
                type="button"
                className="sq-cmd sq-cmd-p"
                onClick={(event) => copy("prompt", promptText, event.currentTarget)}
                aria-label={brandName ? `Copy first prompt for ${brandName}` : "Copy first prompt"}
              >
                <span>&ldquo;{promptText}&rdquo;</span>
                <span className="sq-cmd-c">{mark("prompt")}</span>
              </button>
            </span>
          </li>
        ) : null}
      </ol>
      {status}
      </>
    );
  }

  if (variant === "inline") {
    return (
      <div className="flex min-w-0 flex-wrap items-center gap-2">
        {installBtn}
        {promptBtn}
        {status}
      </div>
    );
  }

  if (variant === "bar") {
    return (
      <div className="pointer-events-none fixed inset-x-0 bottom-4 z-40 flex justify-center px-4">
        <div className="pointer-events-auto flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-border/60 bg-background/85 p-1.5 shadow-lg backdrop-blur-xl dark:border-border">
          {installBtn}
          <span className="hidden sm:block">{promptBtn}</span>
          <span className="sr-only" role="status" aria-live="polite">
            {copyState?.status === "copied" ? "Copied" : copyState?.status === "failed" ? "Copy failed" : ""}
          </span>
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
        One command installs {REFERENCE_COUNT} quality-graded DESIGN.md references + {SKILL_COUNT}
        skills into Claude Code, Cursor, Codex, or OpenCode. Free, MIT, zero AI calls.
      </p>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        {installBtn}
        {promptBtn}
      </div>
      <span className="sr-only" role="status" aria-live="polite">
        {copyState?.status === "copied" ? "Copied" : copyState?.status === "failed" ? "Copy failed" : ""}
      </span>
    </div>
  );
}
