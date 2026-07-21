"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import { Check, Copy } from "lucide-react";
import { event } from "@/lib/gtag";
import { trackInstallCopy } from "@/lib/activation/analytics";

type ClipboardWriter = (text: string) => Promise<void>;

export function copyStatusMessage(
  status: "idle" | "copying" | "copied" | "failed",
  copiedLabel: string,
  failureLabel: string,
): string {
  if (status === "copied") return copiedLabel;
  if (status === "failed") return failureLabel;
  return "";
}

export async function runCopyAttempt({
  text,
  writeText,
  fallback,
  onSuccess,
}: {
  text: string;
  writeText?: ClipboardWriter;
  fallback: () => boolean;
  onSuccess: () => void;
}): Promise<boolean> {
  let copied = false;
  if (writeText) {
    try {
      await writeText(text);
      copied = true;
    } catch {
      // Permission and browser-policy failures may still support the synchronous
      // selection fallback while the original click activation is available.
    }
  }
  if (!copied) {
    try {
      copied = fallback();
    } catch {
      copied = false;
    }
  }
  if (copied) {
    try {
      onSuccess();
    } catch {
      // Telemetry must never turn a completed copy into a visible failure.
    }
  }
  return copied;
}

export function copyTextWithTextarea(
  text: string,
  restoreTarget: Pick<HTMLElement, "focus"> | null,
  clipboardDocument: Pick<Document, "body" | "createElement" | "execCommand"> = document,
): boolean {
  const textarea = clipboardDocument.createElement("textarea");
  let appended = false;
  try {
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    textarea.style.pointerEvents = "none";
    clipboardDocument.body.appendChild(textarea);
    appended = true;
    textarea.select();
    return clipboardDocument.execCommand("copy");
  } catch {
    return false;
  } finally {
    if (appended) textarea.remove();
    restoreTarget?.focus({ preventScroll: true });
  }
}

export function CopyCode({
  code,
  copyLabel,
  copiedLabel,
  failureLabel,
  kind = "recipe",
}: {
  code: string;
  copyLabel: string;
  copiedLabel: string;
  failureLabel: string;
  kind?: "install" | "recipe" | "agent";
}) {
  const [status, setStatus] = useState<"idle" | "copying" | "copied" | "failed">("idle");
  const inFlight = useRef(false);
  const resetTimer = useRef<number | null>(null);
  const isShellCommand = /^(?:npx|npm|pnpm|yarn|bun|bunx)\s/.test(code);

  useEffect(() => () => {
    if (resetTimer.current) window.clearTimeout(resetTimer.current);
  }, []);

  function resetStatusAfter(delay: number) {
    if (resetTimer.current) window.clearTimeout(resetTimer.current);
    resetTimer.current = window.setTimeout(() => setStatus("idle"), delay);
  }

  async function onCopy(clickEvent: MouseEvent<HTMLButtonElement>) {
    if (inFlight.current) return;
    inFlight.current = true;
    setStatus("copying");
    const button = clickEvent.currentTarget;
    const didCopy = await runCopyAttempt({
      text: code,
      writeText: navigator.clipboard?.writeText
        ? (text) => navigator.clipboard.writeText(text)
        : undefined,
      fallback: () => copyTextWithTextarea(code, button),
      onSuccess: () => {
        if (kind === "install") {
          trackInstallCopy({ surface: "docs" });
        } else {
          event("cli_recipe_copy", { kind, surface: "docs" });
        }
      },
    });
    inFlight.current = false;
    if (!didCopy) {
      setStatus("failed");
      resetStatusAfter(2000);
      return;
    }
    setStatus("copied");
    resetStatusAfter(1600);
  }

  return (
    <div className="group relative overflow-hidden rounded-lg bg-card ring-1 ring-foreground/10">
      <div className={`flex min-w-0 items-start gap-3 px-4 py-3.5 pr-24 ${isShellCommand ? "" : "min-h-20"}`}>
        {isShellCommand && <span aria-hidden className="pt-0.5 font-mono text-xs text-primary">$</span>}
        <code className={`min-w-0 font-mono text-[13px] leading-6 text-foreground/90 ${isShellCommand ? "overflow-x-auto whitespace-pre" : "whitespace-pre-wrap break-words"}`}>
          {code}
        </code>
      </div>
      <button
        type="button"
        onClick={onCopy}
        disabled={status === "copying"}
        aria-busy={status === "copying"}
        aria-label={copyLabel}
        className="absolute right-2 top-2 inline-flex h-8 items-center gap-1.5 rounded-lg border border-border bg-background px-2.5 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:cursor-wait disabled:opacity-70 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
      >
        {status === "copied" ? <Check className="h-3.5 w-3.5 text-primary" /> : <Copy className="h-3.5 w-3.5" />}
        <span aria-hidden="true">{status === "copied" ? copiedLabel : status === "failed" ? failureLabel : copyLabel}</span>
      </button>
      <span className="sr-only" role="status" aria-live="polite">
        {copyStatusMessage(status, copiedLabel, failureLabel)}
      </span>
    </div>
  );
}
