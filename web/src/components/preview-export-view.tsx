"use client";

import { useState, useMemo } from "react";
import { event } from "@/lib/gtag";
import { Eye, FileText, Terminal, Copy, Check, ArrowLeft, Download } from "lucide-react";
import { ReferencePreview } from "@/components/reference-preview";
import { extractTokens } from "@/lib/extract-tokens";
import { ExportPanel } from "@/components/export-panel";
import { generateShadcnCss, applyOverridesToMd } from "@/lib/core/generate-css";
import { generateNpxCommand } from "@/lib/core/config-hash";
import type { Overrides, StylePreferences } from "@/lib/core/types";
import type { RefDetail } from "@/app/builder/page";
import { Button } from "@/components/ui/button";

type ViewMode = "preview" | "designmd";

export function PreviewExportView({
  detail,
  overrides,
  onBack,
  components,
  onComponentsChange,
  stylePreferences,
}: {
  detail: RefDetail;
  overrides: Overrides;
  onBack: () => void;
  components: string[];
  onComponentsChange: (c: string[]) => void;
  stylePreferences?: StylePreferences;
}) {
  const [view, setView] = useState<ViewMode>("preview");
  const [copied, setCopied] = useState(false);

  const primary = overrides.primaryColor || detail.primary;
  const radius = overrides.borderRadius || detail.radius.replace(/[-–].*/, "").trim();

  const css = useMemo(
    () => generateShadcnCss(primary, detail.background, detail.foreground, radius, detail.accent, detail.border, overrides.darkMode),
    [primary, detail, radius, overrides.darkMode],
  );

  const designMd = useMemo(
    () => applyOverridesToMd(
      detail.designMd,
      detail.id.charAt(0).toUpperCase() + detail.id.slice(1),
      detail.primary, detail.fontFamily, detail.headingWeight,
      overrides, css, components, stylePreferences,
    ),
    [detail, overrides, css, components, stylePreferences],
  );

  const npxCmd = generateNpxCommand(detail.id, overrides, components);
  const refName = detail.id.charAt(0).toUpperCase() + detail.id.slice(1);

  function download() {
    const blob = new Blob([designMd], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "DESIGN.md";
    a.click();
    URL.revokeObjectURL(url);
  }

  function copyNpx() {
    navigator.clipboard.writeText(npxCmd);
    event("copy_npx_command", { reference: detail.id });
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={onBack} className="gap-1.5">
            <ArrowLeft className="h-3.5 w-3.5" /> Back
          </Button>
          <div>
            <h2 className="text-2xl font-bold tracking-tight">{refName}</h2>
            <p className="text-sm text-muted-foreground">
              {components.length} components / {designMd.split("\n").length} lines
            </p>
          </div>
        </div>
      </div>

      {/* View toggle */}
      <div className="flex items-center justify-center mb-4">
        <div className="flex gap-1 p-1 rounded-lg border border-border/40 dark:border-border bg-muted/30 dark:bg-muted/50">
          <button
            onClick={() => { setView("preview"); event("view_toggle", { view: "preview", reference: detail.id }); }}
            className={`flex items-center gap-1.5 rounded-md px-4 py-2 text-sm font-medium transition-all ${
              view === "preview" ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Eye className="h-3.5 w-3.5" /> Live Preview
          </button>
          <button
            onClick={() => { setView("designmd"); event("view_toggle", { view: "designmd", reference: detail.id }); }}
            className={`flex items-center gap-1.5 rounded-md px-4 py-2 text-sm font-medium transition-all ${
              view === "designmd" ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <FileText className="h-3.5 w-3.5" /> DESIGN.md
          </button>
        </div>
      </div>

      {/* npx command — always visible */}
      <div className="rounded-xl border border-border/60 dark:border-border bg-muted/20 dark:bg-muted/30 p-4 mb-4">
        <div className="flex items-center gap-3 rounded-lg border border-border/40 dark:border-border bg-background pl-3 pr-4 py-3 font-mono text-sm">
          <div className="flex items-center justify-center shrink-0 h-8 w-8 rounded-full border border-border/40 dark:border-border bg-muted/30">
            <img src="/logo.png" alt="OMD" className="h-4 block dark:hidden" />
            <img src="/logo-white.png" alt="OMD" className="h-4 hidden dark:block" />
          </div>
          <code className="flex-1 text-foreground/80 truncate">{npxCmd}</code>
          <button
            onClick={copyNpx}
            className="flex items-center gap-1.5 shrink-0 rounded-md px-2 py-1 text-xs font-medium transition-colors hover:bg-muted"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5 text-muted-foreground" />}
          </button>
        </div>
        <p className="text-sm text-muted-foreground mt-3">
          Run in your project root to generate <code className="px-1.5 py-0.5 rounded bg-muted text-xs font-mono">DESIGN.md</code>. Your AI coding agent will read it and build UI that matches this design system.
        </p>
        <div className="flex items-start gap-2 mt-3 text-xs text-muted-foreground/70">
          <span className="text-primary mt-0.5">*</span>
          <p>Not an official {refName} design system. A curated starting point for building {refName.toLowerCase()}-like UIs with your AI coding agent.</p>
        </div>
      </div>

      {/* Content */}
      {view === "preview" && (
        <div className="rounded-xl overflow-hidden border border-border/40 dark:border-border">
          <ReferencePreview
            tokens={extractTokens(detail)}
            overrides={overrides}
            embedded
          />
        </div>
      )}
      {view === "designmd" && (
        <ExportPanel detail={detail} overrides={overrides} components={components} stylePreferences={stylePreferences} />
      )}
    </div>
  );
}
