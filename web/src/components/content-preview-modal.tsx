"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { event } from "@/lib/gtag";
import { X, Copy, Check, Download } from "lucide-react";

export function ContentPreviewModal({
  open,
  onClose,
  title,
  content,
  language,
  filename,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  content: string;
  language: "markdown" | "css" | "json";
  filename: string;
}) {
  const [copied, setCopied] = useState(false);

  function copyContent() {
    navigator.clipboard.writeText(content);
    event("copy_content", { filename, language });
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function downloadContent() {
    const type = language === "json" ? "application/json" : language === "css" ? "text/css" : "text/plain";
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
    event("download_content", { filename, language });
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 z-50 m-auto flex max-h-[90vh] max-w-4xl flex-col overflow-hidden rounded-2xl border bg-background shadow-2xl dark:border-border"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b px-5 py-3">
              <div className="flex items-center gap-3">
                <h2 className="text-sm font-semibold">{title}</h2>
                <span className="rounded-md bg-muted px-2 py-0.5 text-[10px] font-mono text-muted-foreground">
                  {filename}
                </span>
                <span className="text-[10px] text-muted-foreground">
                  {(content.length / 1024).toFixed(1)} KB / {content.split("\n").length} lines
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={copyContent}
                  className="flex h-7 items-center gap-1.5 rounded-md border border-border/60 dark:border-border bg-background px-2.5 text-[11px] font-medium transition-colors hover:bg-muted"
                >
                  {copied ? <Check className="h-3 w-3 text-green-500" /> : <Copy className="h-3 w-3" />}
                  {copied ? "Copied" : "Copy"}
                </button>
                <button
                  onClick={downloadContent}
                  className="flex h-7 items-center gap-1.5 rounded-md border border-border/60 dark:border-border bg-background px-2.5 text-[11px] font-medium transition-colors hover:bg-muted"
                >
                  <Download className="h-3 w-3" /> Download
                </button>
                <button
                  onClick={onClose}
                  className="flex h-7 w-7 items-center justify-center rounded-md transition-colors hover:bg-muted"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto">
              <pre className={`p-5 text-[12px] leading-[1.7] font-mono whitespace-pre-wrap break-words ${
                language === "css" ? "text-blue-400 dark:text-blue-300" :
                language === "json" ? "text-emerald-400 dark:text-emerald-300" :
                "text-foreground/80"
              }`}>
                {language === "markdown" ? <MarkdownPreview content={content} /> : content}
              </pre>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/** Simple markdown rendering — headings, bold, tables, code blocks */
function MarkdownPreview({ content }: { content: string }) {
  const lines = content.split("\n");

  return (
    <div className="space-y-0 text-foreground/80 font-sans text-[13px] leading-[1.8]">
      {lines.map((line, i) => {
        // Heading 1
        if (line.startsWith("# ")) {
          return <h1 key={i} className="text-xl font-bold mt-6 mb-2 text-foreground">{line.slice(2)}</h1>;
        }
        // Heading 2
        if (line.startsWith("## ")) {
          return <h2 key={i} className="text-lg font-semibold mt-5 mb-2 text-foreground border-b border-border/40 pb-1">{line.slice(3)}</h2>;
        }
        // Heading 3
        if (line.startsWith("### ")) {
          return <h3 key={i} className="text-base font-semibold mt-4 mb-1 text-foreground">{line.slice(4)}</h3>;
        }
        // Blockquote
        if (line.startsWith("> ")) {
          return <div key={i} className="border-l-2 border-primary/40 pl-3 text-muted-foreground italic text-[12px]">{renderInline(line.slice(2))}</div>;
        }
        // Table header separator
        if (/^\|[-|: ]+\|$/.test(line)) {
          return null;
        }
        // Table row
        if (line.startsWith("|")) {
          const cells = line.split("|").slice(1, -1).map(c => c.trim());
          const isHeader = lines[i + 1]?.match(/^\|[-|: ]+\|$/);
          return (
            <div key={i} className={`flex text-[11px] font-mono ${isHeader ? "font-semibold text-muted-foreground border-b border-border/30 pb-1 mb-1" : ""}`}>
              {cells.map((cell, j) => (
                <span key={j} className="flex-1 px-1 py-0.5 truncate">{renderInline(cell)}</span>
              ))}
            </div>
          );
        }
        // List item
        if (line.match(/^[-*] /)) {
          return <div key={i} className="pl-4 relative before:content-[''] before:absolute before:left-1 before:top-[10px] before:h-1 before:w-1 before:rounded-full before:bg-muted-foreground/40">{renderInline(line.slice(2))}</div>;
        }
        // Code block fence
        if (line.startsWith("```")) {
          return <div key={i} className="text-[10px] text-muted-foreground/50 font-mono">{line}</div>;
        }
        // Horizontal rule
        if (line === "---") {
          return <hr key={i} className="border-border/30 my-3" />;
        }
        // Empty line
        if (line.trim() === "") {
          return <div key={i} className="h-2" />;
        }
        // Normal text
        return <div key={i}>{renderInline(line)}</div>;
      })}
    </div>
  );
}

/** Render inline markdown: bold, code, links */
function renderInline(text: string): React.ReactNode {
  // Split by **bold**, `code`, and plain text
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    // Bold
    const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
    // Inline code
    const codeMatch = remaining.match(/`([^`]+)`/);

    const matches = [
      boldMatch ? { index: boldMatch.index!, length: boldMatch[0].length, type: "bold" as const, content: boldMatch[1] } : null,
      codeMatch ? { index: codeMatch.index!, length: codeMatch[0].length, type: "code" as const, content: codeMatch[1] } : null,
    ].filter(Boolean).sort((a, b) => a!.index - b!.index);

    if (matches.length === 0) {
      parts.push(<span key={key++}>{remaining}</span>);
      break;
    }

    const match = matches[0]!;
    if (match.index > 0) {
      parts.push(<span key={key++}>{remaining.slice(0, match.index)}</span>);
    }

    if (match.type === "bold") {
      parts.push(<strong key={key++} className="font-semibold text-foreground">{match.content}</strong>);
    } else {
      parts.push(<code key={key++} className="px-1 py-0.5 rounded bg-muted text-[11px] font-mono text-primary">{match.content}</code>);
    }

    remaining = remaining.slice(match.index + match.length);
  }

  return <>{parts}</>;
}
