"use client";

import { useState } from "react";
import { Check, Share2 } from "lucide-react";
import { referenceSharePath } from "@/lib/references/editorial";
import { trackReferenceShare } from "@/lib/design-systems/analytics";

async function writeClipboardWithFallback(text: string): Promise<boolean> {
  if (navigator.clipboard?.writeText) {
    const clipboardResult = await Promise.race([
      navigator.clipboard.writeText(text).then(() => true).catch(() => false),
      new Promise<boolean>((resolve) => window.setTimeout(() => resolve(false), 600)),
    ]);
    if (clipboardResult) return true;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  const copied = document.execCommand("copy");
  textarea.remove();
  return copied;
}

export function ReferenceShareButton({
  reference,
  location,
  compact = false,
}: {
  reference: string;
  location: "builder" | "ref_detail" | "evolution";
  compact?: boolean;
}) {
  const [copied, setCopied] = useState(false);
  const path = referenceSharePath(reference);
  const artifact = path.endsWith("/evolution") ? "evolution" : "detail";

  async function copyShareLink() {
    const url = new URL(path, window.location.origin).toString();
    const copied = await writeClipboardWithFallback(url);
    if (!copied) return;
    trackReferenceShare({ reference, location, artifact });
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      type="button"
      onClick={copyShareLink}
      aria-label={copied ? "Share link copied" : "Copy share link"}
      className={`inline-flex items-center justify-center gap-1.5 rounded-lg border border-border/60 bg-card/50 font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 ${
        compact ? "h-8 px-2.5 text-xs" : "px-3 py-2 text-xs"
      }`}
    >
      {copied ? <Check className="h-3.5 w-3.5 text-primary" /> : <Share2 className="h-3.5 w-3.5" />}
      <span className={compact ? "hidden sm:inline" : ""}>{copied ? "Copied" : "Share"}</span>
    </button>
  );
}
