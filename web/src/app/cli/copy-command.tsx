"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { event } from "@/lib/gtag";

export function CopyCommand({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <div className="flex h-11 max-w-md flex-1 items-center gap-2 rounded-full border border-border/60 bg-card/40 pl-4 pr-1.5 font-mono text-sm">
      <span className="select-none text-muted-foreground">$</span>
      <code className="flex-1 truncate">{command}</code>
      <button
        type="button"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(command);
            setCopied(true);
            event("install_copy", { location: "cli_page" });
            setTimeout(() => setCopied(false), 1600);
          } catch {
            setCopied(false);
          }
        }}
        aria-label={copied ? "Copied" : "Copy install command"}
        className="inline-flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
      >
        {copied ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
      </button>
      <span className="sr-only" role="status" aria-live="polite">
        {copied ? "Install command copied" : ""}
      </span>
    </div>
  );
}
