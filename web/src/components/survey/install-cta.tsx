"use client";

/**
 * Install CTA at peak intent — surfaced on the quiz result + shared-result
 * pages. The quiz tells a visitor "you're <brand>-like"; this converts that
 * moment into the persistent-memory product (a DESIGN.md the agent reads every
 * session), not just another web session. Copying the command fires
 * `cli_install_cta_click` keyed by reference/type so the install funnel from
 * the wedge is finally measurable.
 */

import { useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";
import { event } from "@/lib/gtag";

const CMD = "npx oh-my-design-cli install-skills";

export function InstallCta({
  refId,
  typeCode,
  location,
}: {
  refId?: string;
  typeCode?: string;
  location: string;
}) {
  const [copied, setCopied] = useState(false);

  const brand = refId ? refId.replace(/\.(app|ai)$/, "") : null;
  const brandLabel = brand ? brand.charAt(0).toUpperCase() + brand.slice(1) : null;

  function copy() {
    navigator.clipboard.writeText(CMD);
    const params: Record<string, string> = { location };
    if (refId) params.reference = refId;
    if (typeCode) params.type_code = typeCode;
    event("cli_install_cta_click", params);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="rounded-2xl border border-border/60 bg-card/50 dark:border-white/10 dark:bg-white/[0.03] p-5 text-center">
      <div className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-foreground mb-2">
        Make it permanent
      </div>
      <p className="text-sm text-muted-foreground mb-4 max-w-sm mx-auto">
        {brandLabel ? (
          <>
            Want your AI to build in <span className="font-semibold text-foreground">{brandLabel}</span>&apos;s
            style every time? Install oh-my-design — your agent sets up this exact
            reference as your project&apos;s <span className="font-mono text-foreground">DESIGN.md</span>.
          </>
        ) : (
          <>
            Install oh-my-design once — your AI coding agent gets a working memory
            of your brand as a <span className="font-mono text-foreground">DESIGN.md</span> it
            reads on every task.
          </>
        )}
      </p>
      <button
        onClick={copy}
        className="group inline-flex items-center gap-2.5 rounded-xl border border-border/60 bg-background/80 dark:border-white/10 px-4 py-3 font-mono text-sm transition-colors hover:bg-accent w-full sm:w-auto justify-center"
        aria-label="Copy install command"
      >
        <Terminal className="h-4 w-4 text-muted-foreground" />
        <span className="text-foreground">{CMD}</span>
        {copied ? (
          <Check className="h-4 w-4 text-green-500" />
        ) : (
          <Copy className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
        )}
      </button>
      <p className="text-[11px] text-muted-foreground mt-3">
        One command. Then just talk to Claude Code / Cursor / Codex.
      </p>
    </div>
  );
}
