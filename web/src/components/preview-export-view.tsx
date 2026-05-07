"use client";

import { useState, useMemo } from "react";
import { event, trackRef } from "@/lib/gtag";
import { FileText, Copy, Check, ArrowLeft, Download, ArrowUpRight, Eye } from "lucide-react";
import { ReferencePreview } from "@/components/reference-preview";
import { extractTokens } from "@/lib/extract-tokens";
import { applyOverridesToMd } from "@/lib/core/generate-css";
import { generateNpxCommand } from "@/lib/core/config-hash";
import type { Overrides, StylePreferences } from "@/lib/core/types";
import type { RefDetail } from "@/app/builder/page";
import { Button } from "@/components/ui/button";
import { getDesignSystem } from "@/lib/design-systems";
import { getHomepageUrl } from "@/lib/homepage-urls";
import { isLight } from "@/lib/core/color";
import { getLogoUrl, getLogoFallbackUrl, isGitHubLogo } from "@/lib/logos";
import { Markdown } from "@/components/markdown";

type MdView = "rendered" | "raw";

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
  const [mdView, setMdView] = useState<MdView>("rendered");
  const [copied, setCopied] = useState<string | null>(null);
  const hasPhilosophyLayer = detail.designMd.includes("## 10. Voice & Tone");
  const [includePhilosophyLayer, setIncludePhilosophyLayer] = useState(true);

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

  const npxCmd = generateNpxCommand(detail.id, overrides, components, stylePreferences);
  const refName = detail.id.charAt(0).toUpperCase() + detail.id.slice(1);
  const ds = getDesignSystem(detail.id);
  const homepageUrl = getHomepageUrl(detail.id);
  const tokens = useMemo(() => extractTokens(detail), [detail]);
  const lineCount = designMd.split("\n").length;

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

  function copyMd() {
    navigator.clipboard.writeText(designMd);
    event("copy_designmd", { reference: detail.id });
    trackRef("copy", detail.id);
    setCopied("md");
    setTimeout(() => setCopied(null), 2000);
  }

  function copyNpx() {
    navigator.clipboard.writeText(npxCmd);
    event("copy_npx_command", { reference: detail.id });
    setCopied("npx");
    setTimeout(() => setCopied(null), 2000);
  }

  return (
    <div className="flex flex-col gap-4">

      {/* ── Header ── */}
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="sm" onClick={onBack} className="gap-1.5 shrink-0">
          <ArrowLeft className="h-3.5 w-3.5" /> Back
        </Button>

        <div className="flex-1 min-w-0">
          <h2 className="text-xl font-semibold tracking-tight leading-tight">{refName}</h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            {components.length} components · {lineCount} lines
          </p>
        </div>

        {ds && (
          <a
            href={ds.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => event("ds_click", { reference: ds.refId, url: ds.url, location: "preview_header" })}
            className="hidden sm:flex items-center gap-1.5 shrink-0 rounded-[0.625rem] border border-border/25 dark:border-border/50 bg-muted/10 dark:bg-muted/20 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors duration-150 hover:bg-muted/30 hover:text-foreground"
          >
            <DsLogo refId={ds.refId} refName={refName} primary={detail.primary} />
            <span className="truncate max-w-[180px]">
              {ds.type === "system" ? `${refName} Design System` : `${refName} Brand`}
            </span>
            <ArrowUpRight className="h-3 w-3 shrink-0 opacity-50" />
          </a>
        )}
      </div>

      {/* ── 2-column layout ── */}
      <div className="grid gap-4 lg:grid-cols-[1fr_440px] items-start">

        {/* Left — brand preview */}
        <div className="rounded-xl border border-border/40 dark:border-border ring-1 ring-border/20 dark:ring-transparent overflow-hidden">
          <ReferencePreview
            tokens={tokens}
            overrides={{ ...overrides, stylePreferences }}
            embedded
            homepageUrl={homepageUrl ?? undefined}
          />
        </div>

        {/* Right — sticky DESIGN.md panel */}
        <div className="sticky top-[4.5rem] flex flex-col rounded-xl border border-border/40 dark:border-border overflow-hidden max-h-[calc(100vh-5.5rem)]">

          {/* NPX command */}
          <div className="shrink-0 border-b border-border/40 dark:border-border px-3 py-2.5">
            <div className="flex items-center gap-2 rounded-[0.5rem] border border-border/40 dark:border-border bg-muted/30 dark:bg-muted/20 pl-3 pr-2 py-2">
              <div className="shrink-0 h-4 w-4 flex items-center justify-center">
                <img src="/logo.png" alt="OMD" className="h-3.5 block dark:hidden" />
                <img src="/logo-white.png" alt="OMD" className="h-3.5 hidden dark:block" />
              </div>
              <code className="flex-1 font-mono text-[11px] text-foreground/60 truncate">{npxCmd}</code>
              <button
                onClick={copyNpx}
                aria-label="Copy npx command"
                className="shrink-0 flex items-center justify-center h-6 w-6 rounded-md text-muted-foreground transition-colors duration-150 hover:bg-muted hover:text-foreground"
              >
                {copied === "npx"
                  ? <Check className="h-3 w-3 text-emerald-500" />
                  : <Copy className="h-3 w-3" />}
              </button>
            </div>
          </div>

          {/* Toolbar */}
          <div className="shrink-0 flex items-center gap-2 border-b border-border/40 dark:border-border px-3 py-2">
            {/* Philosophy layer toggle — only when available */}
            {hasPhilosophyLayer && (
              <label className="flex items-center gap-1.5 text-xs text-muted-foreground cursor-pointer select-none mr-auto">
                <input
                  type="checkbox"
                  checked={includePhilosophyLayer}
                  onChange={(e) => {
                    const next = e.target.checked;
                    setIncludePhilosophyLayer(next);
                    event("philosophy_toggle", { reference: detail.id, on: next });
                  }}
                  className="h-3 w-3 cursor-pointer accent-primary"
                />
                <span>Philosophy</span>
              </label>
            )}

            <div className="flex items-center gap-1.5 ml-auto">
              {/* Rendered / Raw toggle */}
              <div className="flex items-center rounded-[0.5rem] border border-border/40 dark:border-border bg-muted/20 p-0.5">
                <button
                  onClick={() => setMdView("rendered")}
                  className={`flex items-center gap-1 rounded-[0.375rem] px-2 py-1 text-[11px] font-medium transition-colors duration-150 ${
                    mdView === "rendered"
                      ? "bg-background text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Eye className="h-2.5 w-2.5" /> Rendered
                </button>
                <button
                  onClick={() => setMdView("raw")}
                  className={`flex items-center gap-1 rounded-[0.375rem] px-2 py-1 text-[11px] font-medium transition-colors duration-150 ${
                    mdView === "raw"
                      ? "bg-background text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <FileText className="h-2.5 w-2.5" /> Raw
                </button>
              </div>

              <button
                onClick={download}
                className="flex items-center gap-1 rounded-[0.5rem] border border-border/40 dark:border-border bg-background px-2.5 py-1.5 text-[11px] font-medium text-foreground/80 transition-colors duration-150 hover:bg-muted"
              >
                <Download className="h-3 w-3" /> Download
              </button>

              <button
                onClick={copyMd}
                className="flex items-center gap-1 rounded-[0.5rem] border border-border/40 dark:border-border bg-background px-2.5 py-1.5 text-[11px] font-medium text-foreground/80 transition-colors duration-150 hover:bg-muted"
              >
                {copied === "md"
                  ? <><Check className="h-3 w-3 text-emerald-500" /> Copied</>
                  : <><Copy className="h-3 w-3" /> Copy</>}
              </button>
            </div>
          </div>

          {/* DESIGN.md content */}
          <div className="flex-1 overflow-auto min-h-0">
            {mdView === "rendered"
              ? <div className="p-5"><Markdown content={designMd} /></div>
              : <pre className="p-5 text-[11px] leading-[1.7] font-mono text-foreground/70 whitespace-pre-wrap">{designMd}</pre>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

/** Tiny logo for the DS link chip in the header. */
function DsLogo({ refId, refName, primary }: { refId: string; refName: string; primary: string }) {
  const isLightBrand = isLight(primary);
  const logoColor = isLightBrand ? "000000" : "ffffff";
  const [stage, setStage] = useState<0 | 1 | 2>(0);
  const src = stage === 0 ? getLogoUrl(refId, logoColor) : stage === 1 ? getLogoFallbackUrl(refId) : null;
  const isGh = isGitHubLogo(refId);

  const wrap = "flex h-4 w-4 shrink-0 items-center justify-center rounded overflow-hidden";

  if (!src) {
    return (
      <span className={`${wrap} text-[9px] font-bold`} style={{ background: primary, color: isLightBrand ? "#1e1e1e" : "#ffffff" }}>
        {refName.charAt(0).toUpperCase()}
      </span>
    );
  }
  return (
    <span className={wrap} style={{ background: primary }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={refName}
        onError={() => setStage((s) => (s < 2 ? ((s + 1) as 0 | 1 | 2) : 2))}
        className={isGh || stage > 0 ? "h-3 w-3 rounded object-contain" : "h-3 w-3 object-contain"}
      />
    </span>
  );
}
