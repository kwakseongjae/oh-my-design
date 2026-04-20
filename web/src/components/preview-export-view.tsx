"use client";

import { useState, useMemo } from "react";
import { event } from "@/lib/gtag";
import { Eye, FileText, Terminal, Copy, Check, ArrowLeft, Download, ArrowUpRight } from "lucide-react";
import { ReferencePreview } from "@/components/reference-preview";
import { extractTokens } from "@/lib/extract-tokens";
import { ExportPanel } from "@/components/export-panel";
import { generateShadcnCss, applyOverridesToMd } from "@/lib/core/generate-css";
import { generateNpxCommand } from "@/lib/core/config-hash";
import type { Overrides, StylePreferences } from "@/lib/core/types";
import type { RefDetail } from "@/app/builder/page";
import { Button } from "@/components/ui/button";
import { getDesignSystem, type DesignSystemInfo } from "@/lib/design-systems";
import { getLogoUrl, getLogoFallbackUrl, isGitHubLogo } from "@/lib/logos";
import { isLight } from "@/lib/core/color";

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
      detail.primary, detail.fontFamily,
      overrides, components, stylePreferences,
    ),
    [detail, overrides, components, stylePreferences],
  );

  const npxCmd = generateNpxCommand(detail.id, overrides, components);
  const refName = detail.id.charAt(0).toUpperCase() + detail.id.slice(1);
  const ds = getDesignSystem(detail.id);

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
      </div>

      {/* Official source card — sits between the npx command and the content
          preview. Reads as "here's the company's canonical site", not "OMD's
          export is official". */}
      {ds && <OfficialSourceCard ds={ds} refName={refName} primary={detail.primary} />}

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

/**
 * Card linking to the company's canonical design-system / brand-guidelines
 * page. Sits between the npx command and the preview/DESIGN.md content.
 * Wording is framed around the LINK destination ("Browse {Company}'s design
 * system →") — the card is a pointer outward, not a claim about OMD's output.
 */
function OfficialSourceCard({ ds, refName, primary }: { ds: DesignSystemInfo; refName: string; primary: string }) {
  const isSystem = ds.type === "system";
  const headline = isSystem
    ? `Browse ${refName}'s design system`
    : `Browse ${refName}'s brand guidelines`;
  return (
    <a
      href={ds.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => event("ds_click", { reference: ds.refId, url: ds.url, location: "preview_export" })}
      className="mb-4 group flex items-center gap-4 rounded-xl border border-border/60 dark:border-border bg-muted/20 dark:bg-muted/30 px-4 py-3 transition-colors hover:bg-muted/40 dark:hover:bg-muted/50"
    >
      <OfficialSourceLogo refId={ds.refId} refName={refName} primary={primary} />
      <div className="flex-1 min-w-0">
        <div className="text-sm font-semibold text-foreground leading-snug">{headline}</div>
        <div className="text-xs font-mono text-muted-foreground mt-0.5 truncate">{ds.name}</div>
        <p className="hidden sm:block text-xs text-muted-foreground leading-snug mt-1 line-clamp-1">
          {ds.description}
        </p>
      </div>
      <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground shrink-0 transition-colors group-hover:text-foreground">
        <span className="hidden sm:inline">Visit</span>
        <ArrowUpRight className="h-4 w-4 sm:h-3.5 sm:w-3.5" />
      </div>
    </a>
  );
}

/** Same fallback chain as the builder's Reference step: primary logo → favicon → initial. */
function OfficialSourceLogo({ refId, refName, primary }: { refId: string; refName: string; primary: string }) {
  const isLightBrand = isLight(primary);
  const logoColor = isLightBrand ? "000000" : "ffffff";
  const primaryUrl = getLogoUrl(refId, logoColor);
  const fallbackUrl = getLogoFallbackUrl(refId);
  const isGh = isGitHubLogo(refId);
  const [stage, setStage] = useState<0 | 1 | 2>(0);
  const src = stage === 0 ? primaryUrl : stage === 1 ? fallbackUrl : null;

  const wrap =
    "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ring-1 ring-border/60 dark:ring-border";
  const wrapStyle = { background: primary };

  if (!src) {
    return (
      <div className={wrap} style={wrapStyle}>
        <span className="text-base font-bold" style={{ color: isLightBrand ? "#1e1e1e" : "#ffffff" }}>
          {refName.charAt(0).toUpperCase()}
        </span>
      </div>
    );
  }
  return (
    <div className={wrap} style={wrapStyle}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={refName}
        onError={() => setStage((s) => (s < 2 ? ((s + 1) as 0 | 1 | 2) : 2))}
        className={isGh || stage > 0 ? "h-6 w-6 rounded object-contain" : "h-6 w-6 object-contain"}
        loading="lazy"
      />
    </div>
  );
}
