"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Download, Copy, FileText, Code, Braces, Check, ArrowLeft, Terminal, Paintbrush } from "lucide-react";
import { generateShadcnCss, generateVanillaCss, applyOverridesToMd } from "@/lib/core/generate-css";
import { generateNpxCommand } from "@/lib/core/config-hash";
import type { Overrides } from "@/lib/core/types";
import type { RefDetail } from "@/app/builder/page";
import { Button } from "@/components/ui/button";

type CssMode = "tailwind" | "vanilla";

export function ExportPanel({
  detail,
  overrides,
  onBack,
  components,
}: {
  detail: RefDetail;
  overrides: Overrides;
  onBack?: () => void;
  components?: string[];
}) {
  const primary = overrides.primaryColor || detail.primary;
  const radius = overrides.borderRadius || detail.radius.replace(/[-–].*/, "").trim();
  const font = overrides.fontFamily || detail.fontFamily;
  const [copied, setCopied] = useState<string | null>(null);
  const [cssMode, setCssMode] = useState<CssMode>("tailwind");

  const tailwindCss = useMemo(
    () => generateShadcnCss(primary, detail.background, detail.foreground, radius, detail.accent, detail.border, overrides.darkMode),
    [primary, detail, radius, overrides.darkMode],
  );

  const vanillaCss = useMemo(
    () => generateVanillaCss(primary, detail.background, detail.foreground, radius, detail.accent, detail.border, overrides.darkMode, font),
    [primary, detail, radius, overrides.darkMode, font],
  );

  const activeCss = cssMode === "tailwind" ? tailwindCss : vanillaCss;

  const designMd = useMemo(
    () => applyOverridesToMd(
      detail.designMd,
      detail.id.charAt(0).toUpperCase() + detail.id.slice(1),
      detail.primary, detail.fontFamily, detail.headingWeight,
      overrides, activeCss, components,
    ),
    [detail, overrides, activeCss, components],
  );

  const tokens = useMemo(() => JSON.stringify({
    $schema: "oh-my-design/tokens",
    reference: detail.id,
    tokens: {
      colors: {
        primary: overrides.primaryColor || detail.primary,
        background: detail.background,
        foreground: detail.foreground,
        accent: detail.accent,
        border: detail.border,
      },
      typography: {
        fontFamily: overrides.fontFamily || detail.fontFamily,
        headingWeight: overrides.headingWeight || detail.headingWeight,
      },
      layout: {
        borderRadius: overrides.borderRadius || detail.radius,
      },
      darkMode: overrides.darkMode,
    },
    components: components || [],
  }, null, 2), [detail, overrides, components]);

  const npxCmd = generateNpxCommand(detail.id, overrides, components);

  function download(filename: string, content: string, type = "text/plain") {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  }

  function copyTo(key: string, text: string) {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  }

  return (
    <div className="mb-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          {onBack && (
            <Button variant="ghost" size="sm" onClick={onBack} className="gap-1.5">
              <ArrowLeft className="h-3.5 w-3.5" /> Back
            </Button>
          )}
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Export</h2>
            <p className="text-sm text-muted-foreground">
              Based on {detail.id.charAt(0).toUpperCase() + detail.id.slice(1)}
              {components && ` / ${components.length} components`}
            </p>
          </div>
        </div>
      </div>

      {/* Export cards */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {/* DESIGN.md */}
        <ExportCard
          icon={FileText}
          label="DESIGN.md"
          description={`${(designMd.length / 1000).toFixed(1)}KB / Google Stitch format`}
          onDownload={() => download("DESIGN.md", designMd)}
          onCopy={() => copyTo("md", designMd)}
          copied={copied === "md"}
        />

        {/* CSS Variables */}
        <div className="rounded-xl border border-border/60 bg-card/50 dark:border-border dark:bg-card/70 p-4 backdrop-blur">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <Code className="h-4 w-4 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold">CSS Variables</div>
            </div>
          </div>
          {/* Tailwind / Vanilla toggle */}
          <div className="flex gap-1 p-0.5 rounded-lg bg-muted/50 mb-3">
            <button
              onClick={() => setCssMode("tailwind")}
              className={`flex-1 px-2.5 py-1.5 text-xs font-medium rounded-md transition-all ${
                cssMode === "tailwind" ? "bg-background shadow-sm text-foreground" : "text-muted-foreground"
              }`}
            >
              Tailwind / shadcn
            </button>
            <button
              onClick={() => setCssMode("vanilla")}
              className={`flex-1 px-2.5 py-1.5 text-xs font-medium rounded-md transition-all ${
                cssMode === "vanilla" ? "bg-background shadow-sm text-foreground" : "text-muted-foreground"
              }`}
            >
              Vanilla CSS
            </button>
          </div>
          <div className="flex gap-1.5">
            <button
              onClick={() => download(cssMode === "tailwind" ? "globals.css" : "design-tokens.css", activeCss, "text/css")}
              className="flex-1 flex items-center justify-center gap-1.5 h-8 rounded-lg border border-border/60 bg-background dark:border-border text-xs font-medium transition-colors hover:bg-muted"
            >
              <Download className="h-3 w-3" /> Download
            </button>
            <button
              onClick={() => copyTo("css", activeCss)}
              className="flex-1 flex items-center justify-center gap-1.5 h-8 rounded-lg border border-border/60 bg-background dark:border-border text-xs font-medium transition-colors hover:bg-muted"
            >
              {copied === "css" ? <Check className="h-3 w-3 text-green-500" /> : <Copy className="h-3 w-3" />} Copy
            </button>
          </div>
        </div>

        {/* JSON Tokens */}
        <ExportCard
          icon={Braces}
          label="Design Tokens"
          description="For Figma, Style Dictionary, or CI/CD"
          onDownload={() => download("design-tokens.json", tokens, "application/json")}
          onCopy={() => copyTo("json", tokens)}
          copied={copied === "json"}
        />

        {/* CLI Command */}
        <div className="rounded-xl border border-border/60 bg-card/50 dark:border-border dark:bg-card/70 p-4 backdrop-blur">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <Terminal className="h-4 w-4 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold">CLI Command</div>
              <div className="text-[10px] text-muted-foreground">Regenerate from terminal</div>
            </div>
          </div>
          <code className="text-[10px] text-muted-foreground font-mono block mb-3 truncate leading-relaxed">
            {npxCmd}
          </code>
          <button
            onClick={() => copyTo("cli", npxCmd)}
            className="w-full flex items-center justify-center gap-1.5 h-8 rounded-lg border border-border/60 bg-background dark:border-border text-xs font-medium transition-colors hover:bg-muted"
          >
            {copied === "cli" ? <Check className="h-3 w-3 text-green-500" /> : <Copy className="h-3 w-3" />} Copy Command
          </button>
        </div>
      </div>
    </div>
  );
}

// Reusable export card
function ExportCard({
  icon: Icon,
  label,
  description,
  onDownload,
  onCopy,
  copied,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  description: string;
  onDownload: () => void;
  onCopy: () => void;
  copied: boolean;
}) {
  return (
    <div className="rounded-xl border border-border/60 bg-card/50 dark:border-border dark:bg-card/70 p-4 backdrop-blur">
      <div className="flex items-center gap-3 mb-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
          <Icon className="h-4 w-4 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-sm font-semibold">{label}</div>
          <div className="text-[10px] text-muted-foreground">{description}</div>
        </div>
      </div>
      <div className="flex gap-1.5">
        <button
          onClick={onDownload}
          className="flex-1 flex items-center justify-center gap-1.5 h-8 rounded-lg border border-border/60 bg-background dark:border-border text-xs font-medium transition-colors hover:bg-muted"
        >
          <Download className="h-3 w-3" /> Download
        </button>
        <button
          onClick={onCopy}
          className="flex-1 flex items-center justify-center gap-1.5 h-8 rounded-lg border border-border/60 bg-background dark:border-border text-xs font-medium transition-colors hover:bg-muted"
        >
          {copied ? <Check className="h-3 w-3 text-green-500" /> : <Copy className="h-3 w-3" />} Copy
        </button>
      </div>
    </div>
  );
}
