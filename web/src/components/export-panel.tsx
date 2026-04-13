"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Download, Copy, FileText, Code, Braces, Check, ArrowLeft, Terminal } from "lucide-react";
import { generateShadcnCss, applyOverridesToMd } from "@/lib/core/generate-css";
import { generateNpxCommand } from "@/lib/core/config-hash";
import type { Overrides } from "@/lib/core/types";
import type { RefDetail } from "@/app/builder/page";
import { Button } from "@/components/ui/button";

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
  const [copied, setCopied] = useState<string | null>(null);

  const css = useMemo(
    () => generateShadcnCss(primary, detail.background, detail.foreground, radius, detail.accent, detail.border, overrides.darkMode),
    [primary, detail, radius, overrides.darkMode],
  );

  const designMd = useMemo(
    () => applyOverridesToMd(
      detail.designMd,
      detail.id.charAt(0).toUpperCase() + detail.id.slice(1),
      detail.primary, detail.fontFamily, detail.headingWeight,
      overrides, css,
    ),
    [detail, overrides, css],
  );

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

  const tokens = JSON.stringify({
    name: detail.id,
    primary: overrides.primaryColor || detail.primary,
    background: detail.background,
    foreground: detail.foreground,
    fontFamily: overrides.fontFamily || detail.fontFamily,
    headingWeight: overrides.headingWeight || detail.headingWeight,
    borderRadius: overrides.borderRadius || detail.radius,
    darkMode: overrides.darkMode,
  }, null, 2);

  const npxCmd = generateNpxCommand(detail.id, overrides, components);

  const actions = [
    { key: "md", icon: FileText, label: "DESIGN.md", sub: `${(designMd.length / 1000).toFixed(1)}KB`, content: designMd, filename: "DESIGN.md" },
    { key: "css", icon: Code, label: "CSS Variables", sub: "shadcn/ui", content: css, filename: "globals.css" },
    { key: "json", icon: Braces, label: "JSON Tokens", sub: "Structured", content: tokens, filename: "design-tokens.json" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8"
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          {onBack && (
            <Button variant="ghost" size="sm" onClick={onBack} className="gap-1.5">
              <ArrowLeft className="h-3.5 w-3.5" /> Back
            </Button>
          )}
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Export</h2>
            <p className="text-sm text-muted-foreground">Based on {detail.id.charAt(0).toUpperCase() + detail.id.slice(1)}</p>
          </div>
        </div>
      </div>

      {/* Action cards — horizontal */}
      <div className="grid grid-cols-3 gap-3">
        {actions.map((a) => (
          <div
            key={a.key}
            className="flex items-center gap-4 rounded-xl border border-border/60 bg-card/50 dark:border-border dark:bg-card/70 p-4 backdrop-blur"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <a.icon className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold">{a.label}</div>
              <div className="text-[11px] text-muted-foreground">{a.sub}</div>
            </div>
            <div className="flex gap-1.5 shrink-0">
              <button
                onClick={() => download(a.filename, a.content)}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-border/60 bg-background dark:border-border transition-colors hover:bg-muted"
                title="Download"
              >
                <Download className="h-3.5 w-3.5" />
              </button>
              <button
                onClick={() => copyTo(a.key, a.content)}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-border/60 bg-background dark:border-border transition-colors hover:bg-muted"
                title="Copy"
              >
                {copied === a.key ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5" />}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CLI Command */}
      <div className="mt-3 rounded-xl border border-border/60 bg-card/50 dark:border-border dark:bg-card/70 p-4 backdrop-blur">
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
            <Terminal className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold">CLI Command</div>
            <code className="text-xs text-muted-foreground font-mono block mt-0.5 truncate">
              {npxCmd}
            </code>
          </div>
          <button
            onClick={() => copyTo("cli", npxCmd)}
            className="flex h-8 items-center gap-1.5 rounded-lg border border-border/60 bg-background dark:border-border px-3 text-xs font-medium transition-colors hover:bg-muted"
          >
            {copied === "cli" ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5" />}
            Copy
          </button>
        </div>
      </div>
    </motion.div>
  );
}
