"use client";

import { useMemo, useState } from "react";
import { event, trackRef } from "@/lib/gtag";
import { Copy, Check, Download } from "lucide-react";
import { generateShadcnCss, applyOverridesToMd } from "@/lib/core/generate-css";
import { generateNpxCommand } from "@/lib/core/config-hash";
import type { Overrides, StylePreferences } from "@/lib/core/types";
import type { RefDetail } from "@/app/builder/page";

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
      includePhilosophyLayer,
    ),
    [detail, overrides, css, components, stylePreferences, includePhilosophyLayer],
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
        <div className="p-6">
          <MarkdownRenderer content={designMd} />
        </div>
      </div>
    </div>
  );
}

// ── Markdown Renderer ─────────────────────────────────────────────

function MarkdownRenderer({ content }: { content: string }) {
  // Strip leading YAML frontmatter from the rendered preview only.
  // The file returned by Download/Copy still contains the frontmatter
  // so tools and AI agents that inspect the project files can read
  // the metadata. The preview is purely user-facing and benefits from
  // a cleaner opening.
  let rendered = content;
  if (rendered.startsWith("---\n")) {
    const end = rendered.indexOf("\n---\n", 4);
    if (end !== -1) {
      rendered = rendered.slice(end + 5).replace(/^\n+/, "");
    }
  }

  const lines = rendered.split("\n");
  let inCodeBlock = false;
  const codeBuffer: string[] = [];
  const elements: React.ReactNode[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("```")) {
      if (inCodeBlock) {
        elements.push(
          <pre key={`code-${i}`} className="my-3 rounded-lg bg-muted/50 dark:bg-muted/30 p-4 text-[11px] leading-[1.7] font-mono overflow-x-auto text-foreground/70">
            {codeBuffer.join("\n")}
          </pre>
        );
        codeBuffer.length = 0;
        inCodeBlock = false;
      } else {
        inCodeBlock = true;
      }
      continue;
    }
    if (inCodeBlock) { codeBuffer.push(line); continue; }

    if (line.startsWith("# ")) { elements.push(<h1 key={i} className="text-2xl font-bold mt-8 mb-3 text-foreground first:mt-0">{line.slice(2)}</h1>); continue; }
    if (line.startsWith("## ")) { elements.push(<h2 key={i} className="text-lg font-semibold mt-8 mb-2 text-foreground border-b border-border/30 pb-2">{line.slice(3)}</h2>); continue; }
    if (line.startsWith("### ")) { elements.push(<h3 key={i} className="text-base font-semibold mt-5 mb-1.5 text-foreground">{line.slice(4)}</h3>); continue; }
    if (line.startsWith("> ")) { elements.push(<div key={i} className="border-l-2 border-primary/30 pl-3 py-0.5 text-sm text-muted-foreground italic">{renderInline(line.slice(2))}</div>); continue; }
    if (line === "---") { elements.push(<hr key={i} className="border-border/20 my-4" />); continue; }
    if (/^\|[-|: ]+\|$/.test(line)) continue;
    if (line.startsWith("|")) {
      const cells = line.split("|").slice(1, -1).map(c => c.trim());
      const isHeader = lines[i + 1]?.match(/^\|[-|: ]+\|$/);
      elements.push(
        <div key={i} className={`flex text-[11px] font-mono py-1 ${isHeader ? "font-semibold text-muted-foreground border-b border-border/20" : "text-foreground/70"}`}>
          {cells.map((cell, j) => <span key={j} className="flex-1 px-2 truncate">{renderInline(cell)}</span>)}
        </div>
      );
      continue;
    }
    if (line.match(/^[-*] /)) {
      elements.push(
        <div key={i} className="flex gap-2 text-sm text-foreground/80 pl-2 py-0.5">
          <span className="text-muted-foreground/40 mt-1.5 shrink-0">--</span>
          <span>{renderInline(line.slice(2))}</span>
        </div>
      );
      continue;
    }
    if (line.trim() === "") { elements.push(<div key={i} className="h-1.5" />); continue; }
    elements.push(<p key={i} className="text-sm text-foreground/80 leading-relaxed">{renderInline(line)}</p>);
  }

  return <div>{elements}</div>;
}

function renderInline(text: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
    const codeMatch = remaining.match(/`([^`]+)`/);
    const matches = [
      boldMatch ? { index: boldMatch.index!, length: boldMatch[0].length, type: "bold" as const, content: boldMatch[1] } : null,
      codeMatch ? { index: codeMatch.index!, length: codeMatch[0].length, type: "code" as const, content: codeMatch[1] } : null,
    ].filter(Boolean).sort((a, b) => a!.index - b!.index);

    if (matches.length === 0) { parts.push(<span key={key++}>{remaining}</span>); break; }
    const match = matches[0]!;
    if (match.index > 0) parts.push(<span key={key++}>{remaining.slice(0, match.index)}</span>);
    if (match.type === "bold") parts.push(<strong key={key++} className="font-semibold text-foreground">{match.content}</strong>);
    else parts.push(<code key={key++} className="px-1 py-0.5 rounded bg-muted text-[11px] font-mono text-primary">{match.content}</code>);
    remaining = remaining.slice(match.index + match.length);
  }
  return <>{parts}</>;
}
