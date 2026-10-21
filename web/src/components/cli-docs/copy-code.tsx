"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import { Check, Copy } from "lucide-react";
import { event } from "@/lib/gtag";
import { trackInstallCopy } from "@/lib/activation/analytics";
import {
  copyTextWithTextarea,
  runCopyAttempt,
} from "@/lib/clipboard";

export { copyTextWithTextarea, runCopyAttempt } from "@/lib/clipboard";

export function copyStatusMessage(
  status: "idle" | "copying" | "copied" | "failed",
  copiedLabel: string,
  failureLabel: string,
): string {
  if (status === "copied") return copiedLabel;
  if (status === "failed") return failureLabel;
  return "";
}

/**
 * A terminal command (npx, npm …, and the shadcn page's `curl` download); anything else is a
 * prompt said to the coding agent.
 */
export function isShellCommand(code: string): boolean {
  return /^(?:npx|npm|pnpm|yarn|bun|bunx|curl)\s/.test(code);
}

/**
 * A copyable block. Shell commands sit in the landing's dark command field with a `$` per
 * line; prompts for the agent sit on a light field in the reading face. The label stays
 * visible on the button and the outcome is announced once through a polite live region.
 */
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
  const shell = isShellCommand(code);

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
    <div className={`dx-code ${shell ? "dx-code-shell" : "dx-code-prompt"}`}>
      <pre>
        {shell ? (
          <code translate="no">
            {code.split("\n").map((line, index) => (
              <span key={index} style={{ display: "block" }}>
                <span className="dx-code-ps" aria-hidden="true">$ </span>
                {line}
              </span>
            ))}
          </code>
        ) : (
          code
        )}
      </pre>
      <button
        type="button"
        onClick={onCopy}
        disabled={status === "copying"}
        aria-busy={status === "copying"}
        aria-label={copyLabel}
        className={`dx-copy${status === "copied" ? " dx-ok" : ""}`}
      >
        {status === "copied" ? <Check size={15} aria-hidden="true" /> : <Copy size={15} aria-hidden="true" />}
        <span aria-hidden="true">{status === "copied" ? copiedLabel : status === "failed" ? failureLabel : copyLabel}</span>
      </button>
      <span className="sq-sr" role="status" aria-live="polite">
        {copyStatusMessage(status, copiedLabel, failureLabel)}
      </span>
    </div>
  );
}
