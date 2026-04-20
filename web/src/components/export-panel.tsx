"use client";

import { useMemo, useState } from "react";
import { event, trackRef } from "@/lib/gtag";
import { Copy, Check, Download, Eye, FileText } from "lucide-react";
import { generateShadcnCss, applyOverridesToMd } from "@/lib/core/generate-css";
import { generateNpxCommand } from "@/lib/core/config-hash";
import type { Overrides, StylePreferences } from "@/lib/core/types";
import type { RefDetail } from "@/app/builder/page";
import { Markdown } from "@/components/markdown";

type MdView = "rendered" | "raw";

export function ExportPanel({
  detail,
  overrides,
  components,
  stylePreferences,
}: {
  detail: RefDetail;
  overrides: Overrides;
  components?: string[];
  stylePreferences?: StylePreferences;
}) {
  const primary = overrides.primaryColor || detail.primary;
  const radius = overrides.borderRadius || detail.radius.replace(/[-–].*/, "").trim();
  const [copied, setCopied] = useState<string | null>(null);

  // Only surface the toggle when the source file actually carries an OmD v0.1
  // Philosophy Layer — checked via the canonical "## 10. Voice & Tone" header.
  const hasPhilosophyLayer = detail.designMd.includes("## 10. Voice & Tone");
  const [includePhilosophyLayer, setIncludePhilosophyLayer] = useState(true);

  // Rendered vs raw-source view of DESIGN.md. Default is "rendered" because
  // ExportPanel has always rendered markdown (via a hand-rolled renderer).
  // The toggle adds a "raw" view for users who want to inspect the source
  // DESIGN.md before copy/download — it does not change the default.
  const [mdView, setMdView] = useState<MdView>("rendered");

  const css = useMemo(
    () => generateShadcnCss(primary, detail.background, detail.foreground, radius, detail.accent, detail.border, overrides.darkMode),
    [primary, detail, radius, overrides.darkMode],
  );

  const designMd = useMemo(
    () => applyOverridesToMd(
      detail.designMd,
      detail.id.charAt(0).toUpperCase() + detail.id.slice(1),
      detail.primary, detail.fontFamily,
      overrides, components, stylePreferences,
      includePhilosophyLayer,
    ),
    [detail, overrides, components, stylePreferences, includePhilosophyLayer],
  );

  function copyTo(key: string, text: string) {
    navigator.clipboard.writeText(text);
    event("copy_designmd", { reference: detail.id });
    trackRef("copy", detail.id);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  }

  function download() {
    const blob = new Blob([designMd], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "DESIGN.md";
    a.click();
    URL.revokeObjectURL(url);
    event("download_designmd", { reference: detail.id });
    trackRef("download", detail.id);
  }

  function setView(next: MdView) {
    setMdView(next);
    event("md_view_toggle", { reference: detail.id, view: next });
  }

  return (
    <div>
      {/* DESIGN.md viewer */}
      <div className="rounded-xl border border-border/60 dark:border-border overflow-hidden">
        {/* Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/40 dark:border-border bg-muted/20 dark:bg-muted/30 px-4 py-2">
          {hasPhilosophyLayer ? (
            <label
              className="flex items-center gap-2 text-sm text-foreground cursor-pointer select-none"
              title="Voice · Narrative · Principles · Personas · States · Motion. Uncheck to export only the base design system."
            >
              <input
                type="checkbox"
                checked={includePhilosophyLayer}
                onChange={(e) => {
                  const next = e.target.checked;
                  setIncludePhilosophyLayer(next);
                  event("philosophy_toggle", { reference: detail.id, on: next });
                }}
                className="h-4 w-4 cursor-pointer accent-primary"
              />
              <span className="font-medium">Include brand philosophy</span>
            </label>
          ) : (
            <span />
          )}
          <div className="flex items-center gap-2">
            {/* Rendered ↔ Raw toggle — segmented control */}
            <div className="flex items-center gap-0.5 rounded-lg border border-border/60 dark:border-border bg-background p-0.5">
              <button
                onClick={() => setView("rendered")}
                className={`flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors ${
                  mdView === "rendered"
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                aria-pressed={mdView === "rendered"}
              >
                <Eye className="h-3 w-3" /> Rendered
              </button>
              <button
                onClick={() => setView("raw")}
                className={`flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors ${
                  mdView === "raw"
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                aria-pressed={mdView === "raw"}
              >
                <FileText className="h-3 w-3" /> Raw
              </button>
            </div>
            <button
              onClick={download}
              className="flex items-center gap-2 rounded-lg border border-border/60 dark:border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
            >
              <Download className="h-4 w-4" /> Download
            </button>
            <button
              onClick={() => copyTo("md", designMd)}
              className="flex items-center gap-2 rounded-lg border border-border/60 dark:border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
            >
              {copied === "md" ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
              {copied === "md" ? "Copied" : "Copy"}
            </button>
          </div>
        </div>

        {/* Content */}
        {mdView === "rendered" ? (
          <div className="p-6 max-h-[60vh] overflow-auto">
            <Markdown content={designMd} />
          </div>
        ) : (
          <pre className="p-6 max-h-[60vh] overflow-auto text-[11px] leading-[1.7] font-mono text-foreground/80 whitespace-pre-wrap">
            {designMd}
          </pre>
        )}
      </div>
    </div>
  );
}
