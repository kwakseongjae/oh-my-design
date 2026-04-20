"use client";

import { useState, useMemo } from "react";
import { Copy, Check, Download, Eye, FileText } from "lucide-react";
import { Markdown } from "@/components/markdown";
import { generateDesignMd } from "@/lib/playground/generate";
import type { PlaygroundState } from "@/lib/playground/state";
import { event } from "@/lib/gtag";

export function ExportBox({ state }: { state: PlaygroundState }) {
  const [view, setView] = useState<"rendered" | "raw">("rendered");
  const [copied, setCopied] = useState(false);

  const md = useMemo(() => generateDesignMd(state), [state]);
  const nameMissing = state.name.trim() === "";
  const personasShort = state.personas.length < 2;

  async function copy() {
    if (typeof navigator === "undefined") return;
    try {
      await navigator.clipboard.writeText(md);
      event("playground_export_copy", { brand_name: state.name });
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copy DESIGN.md:", md);
    }
  }

  function download() {
    const blob = new Blob([md], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "DESIGN.md";
    a.click();
    URL.revokeObjectURL(url);
    event("playground_export_md", {
      brand_name: state.name,
      name_set: !nameMissing,
      personas: state.personas.length,
    });
  }

  return (
    <div className="rounded-xl border border-border/60 dark:border-border overflow-hidden">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/40 bg-muted/20 px-4 py-2 dark:border-border dark:bg-muted/30">
        <div className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">
          DESIGN.md Export
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5 rounded-lg border border-border/60 bg-background p-0.5 dark:border-border">
            <button
              type="button"
              onClick={() => setView("rendered")}
              className={`flex items-center gap-1 rounded-md px-2 py-1 text-[11px] font-medium transition-colors ${
                view === "rendered" ? "bg-muted text-foreground" : "text-muted-foreground"
              }`}
              aria-pressed={view === "rendered"}
            >
              <Eye className="h-3 w-3" /> Rendered
            </button>
            <button
              type="button"
              onClick={() => setView("raw")}
              className={`flex items-center gap-1 rounded-md px-2 py-1 text-[11px] font-medium transition-colors ${
                view === "raw" ? "bg-muted text-foreground" : "text-muted-foreground"
              }`}
              aria-pressed={view === "raw"}
            >
              <FileText className="h-3 w-3" /> Raw
            </button>
          </div>
          <button
            type="button"
            onClick={download}
            disabled={nameMissing}
            className="inline-flex items-center gap-1.5 rounded-lg border border-border/60 bg-background px-3 py-1.5 text-xs font-medium transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50 dark:border-border"
          >
            <Download className="h-3.5 w-3.5" /> Download
          </button>
          <button
            type="button"
            onClick={copy}
            disabled={nameMissing}
            className="inline-flex items-center gap-1.5 rounded-lg border border-border/60 bg-background px-3 py-1.5 text-xs font-medium transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50 dark:border-border"
          >
            {copied ? (
              <Check className="h-3.5 w-3.5 text-green-500" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
      </div>

      {(nameMissing || personasShort) && (
        <div className="border-b border-amber-500/30 bg-amber-50 px-4 py-2 text-[11px] text-amber-900 dark:bg-amber-500/10 dark:text-amber-400">
          {nameMissing && <div>⚠ Brand name required before export.</div>}
          {!nameMissing && personasShort && (
            <div>⚠ Pick at least 2 personas for a complete Philosophy layer.</div>
          )}
        </div>
      )}

      {/* Body */}
      {view === "rendered" ? (
        <div className="max-h-[50vh] overflow-auto p-6">
          <Markdown content={md} />
        </div>
      ) : (
        <pre className="max-h-[50vh] overflow-auto p-6 whitespace-pre-wrap font-mono text-[11px] leading-[1.7] text-foreground/80">
          {md}
        </pre>
      )}
    </div>
  );
}
