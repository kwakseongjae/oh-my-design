"use client";

import { useState } from "react";
import { Check, Link2 } from "lucide-react";
import { buildShareUrl } from "@/lib/playground/codec";
import type { PlaygroundState } from "@/lib/playground/state";
import { event } from "@/lib/gtag";

export function ShareButton({ state }: { state: PlaygroundState }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    if (typeof window === "undefined") return;
    const url = buildShareUrl(window.location.origin, state);
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      event("playground_share", { state_bytes: url.length });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback: put the URL in a prompt so the user can copy manually
      window.prompt("Copy this Playground link:", url);
      event("playground_share", { state_bytes: url.length, fallback: true });
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-1.5 rounded-lg border border-border/60 bg-card/50 px-2.5 py-1.5 text-xs font-medium transition-colors hover:bg-accent dark:border-border"
      aria-label="Share Playground link"
    >
      {copied ? (
        <Check className="h-3.5 w-3.5 text-green-500" />
      ) : (
        <Link2 className="h-3.5 w-3.5" />
      )}
      <span className="hidden sm:inline">{copied ? "Copied" : "Share"}</span>
    </button>
  );
}
