"use client";

import { useState, useMemo } from "react";
import { event, trackRef } from "@/lib/gtag";
import { FileText, Copy, Check, ArrowLeft, Download, ArrowUpRight, Eye } from "lucide-react";
import { ReferencePreview } from "@/components/reference-preview";
import { extractTokens } from "@/lib/extract-tokens";
import { applyOverridesToMd } from "@/lib/core/generate-css";
import type { Overrides, StylePreferences } from "@/lib/core/types";
import type { RefDetail } from "@/app/builder/page";
import { Button } from "@/components/ui/button";
import { getDesignSystem } from "@/lib/design-systems";
import { getHomepageUrl } from "@/data/registry.generated";
import { BrandNameplateLogo } from "@/components/brand-logo";
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
  // Mobile-only: which panel is shown (desktop shows both side-by-side via lg: classes).
  const [mobileView, setMobileView] = useState<"preview" | "designmd">("preview");

  const designMd = useMemo(
    () => applyOverridesToMd(
      detail.designMd,
      detail.id.charAt(0).toUpperCase() + detail.id.slice(1),
      detail.primary, detail.fontFamily,
      overrides, components, stylePreferences,
      true,
    ),
    [detail, overrides, components, stylePreferences],
  );

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
            {/* Neutral nameplate (shared treatment, issue #19) — the old
                primary-colored tile hid logos matching detail.primary. */}
            <BrandNameplateLogo refId={ds.refId} name={refName} size="xs" />
            <span className="truncate max-w-[180px]">
              {ds.type === "system" ? `${refName} Design System` : `${refName} Brand`}
            </span>
            <ArrowUpRight className="h-3 w-3 shrink-0 opacity-50" />
          </a>
        )}
      </div>

      {/* ── Mobile view toggle (desktop shows both side-by-side) ── */}
      <div className="flex lg:hidden items-center rounded-[0.5rem] border border-border/40 dark:border-border bg-muted/20 p-0.5">
        <button
          onClick={() => setMobileView("preview")}
          className={`flex flex-1 items-center justify-center gap-1.5 rounded-[0.4rem] px-3 py-2 text-xs font-medium transition-all duration-200 ${
            mobileView === "preview" ? "bg-primary/10 text-primary font-semibold shadow-[0_2px_10px_-3px_rgba(85,70,255,0.45)] ring-1 ring-inset ring-primary/40" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Eye className="h-3.5 w-3.5" /> Live Preview
        </button>
        <button
          onClick={() => setMobileView("designmd")}
          className={`flex flex-1 items-center justify-center gap-1.5 rounded-[0.4rem] px-3 py-2 text-xs font-medium transition-all duration-200 ${
            mobileView === "designmd" ? "bg-primary/10 text-primary font-semibold shadow-[0_2px_10px_-3px_rgba(85,70,255,0.45)] ring-1 ring-inset ring-primary/40" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <FileText className="h-3.5 w-3.5" /> DESIGN.md
        </button>
      </div>

      {/* ── 2-column layout ── */}
      <div className="grid gap-4 lg:grid-cols-[1fr_440px] items-start">

        {/* Left — brand preview */}
        <div className={`${mobileView === "preview" ? "block" : "hidden"} lg:block rounded-xl border border-border/40 dark:border-border ring-1 ring-border/20 dark:ring-transparent overflow-hidden`}>
          <ReferencePreview
            tokens={tokens}
            overrides={{ ...overrides, stylePreferences }}
            embedded
            homepageUrl={homepageUrl ?? undefined}
          />
        </div>

        {/* Right — sticky DESIGN.md panel */}
        <div className={`${mobileView === "designmd" ? "flex" : "hidden"} lg:flex sticky top-[4.5rem] flex-col rounded-xl border border-border/40 dark:border-border overflow-hidden max-h-[calc(100dvh-5.5rem)] lg:max-h-[calc(100vh-5.5rem)]`}>

          {/* Toolbar */}
          <div className="shrink-0 flex items-center gap-2 border-b border-border/40 dark:border-border px-3 py-2">
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

          {/* DESIGN.md content. Rendered strips all frontmatter (markdown.tsx),
              so the tokens block is hidden there; Raw shows the full file —
              tokens sit at the top like frontmatter, which is the intent. */}
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
