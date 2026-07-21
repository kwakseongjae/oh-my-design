"use client";

import { useState } from "react";
import { Check, Copy, FileText } from "lucide-react";
import type { CliDocsDictionary } from "@/data/cli-docs";
import { event } from "@/lib/gtag";
import type { DocsLocale, DocsPage } from "@/lib/docs/locales";
import { copyText as copyToClipboard } from "@/lib/clipboard";

export function DocsPageActions({
  locale,
  page,
  labels,
  pageContent,
  llmsContent,
}: {
  locale: DocsLocale;
  page: DocsPage;
  labels: CliDocsDictionary["ui"];
  pageContent: string;
  llmsContent: string;
}) {
  const [copyState, setCopyState] = useState<{ target: "page" | "llms"; status: "copied" | "failed" } | null>(null);

  async function copyText(target: "page" | "llms", content: string, button: HTMLButtonElement) {
    const copied = await copyToClipboard(content, {
      restoreTarget: button,
      onSuccess: () => event(
        target === "page" ? "cli_docs_copy_page" : "cli_docs_copy_llms",
        { locale, page },
      ),
    });
    setCopyState({ target, status: copied ? "copied" : "failed" });
    window.setTimeout(() => setCopyState(null), copied ? 1800 : 2400);
  }

  const pageState = copyState?.target === "page" ? copyState.status : null;
  const llmsState = copyState?.target === "llms" ? copyState.status : null;

  return (
    <div className="mb-8 flex flex-wrap items-center justify-end gap-2 sm:mb-10" aria-label={labels.pageTools}>
      <button
        type="button"
        onClick={(event) => void copyText("page", pageContent, event.currentTarget)}
        className="inline-flex h-8 items-center gap-1.5 rounded-lg bg-background px-3 text-xs font-medium text-foreground/75 ring-1 ring-foreground/10 transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
      >
        {pageState === "copied" ? <Check className="h-3.5 w-3.5 text-primary" /> : <Copy className="h-3.5 w-3.5" />}
        {pageState === "copied" ? labels.pageCopied : pageState === "failed" ? labels.copyFailed : labels.copyPage}
      </button>
      <button
        type="button"
        onClick={(event) => void copyText("llms", llmsContent, event.currentTarget)}
        className="inline-flex h-8 items-center gap-1.5 rounded-lg bg-background px-3 font-mono text-[11px] font-medium text-muted-foreground ring-1 ring-foreground/10 transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
      >
        {llmsState === "copied" ? <Check className="h-3.5 w-3.5 text-primary" /> : <FileText className="h-3.5 w-3.5" />}
        {llmsState === "copied" ? labels.copied : llmsState === "failed" ? labels.copyFailed : "llms.txt"}
      </button>
    </div>
  );
}
