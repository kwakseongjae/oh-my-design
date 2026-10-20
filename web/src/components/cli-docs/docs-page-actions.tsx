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
    <div className="dx-tools" role="group" aria-label={labels.pageTools}>
      <button
        type="button"
        onClick={(event) => void copyText("page", pageContent, event.currentTarget)}
        className={`dx-tool${pageState === "copied" ? " dx-ok" : ""}`}
      >
        {pageState === "copied" ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
        <span aria-live="polite">{pageState === "copied" ? labels.pageCopied : pageState === "failed" ? labels.copyFailed : labels.copyPage}</span>
      </button>
      <button
        type="button"
        onClick={(event) => void copyText("llms", llmsContent, event.currentTarget)}
        className={`dx-tool${llmsState === "copied" ? " dx-ok" : ""}`}
      >
        {llmsState === "copied" ? <Check size={16} aria-hidden="true" /> : <FileText size={16} aria-hidden="true" />}
        <span aria-live="polite" lang={llmsState ? undefined : "en"}>{llmsState === "copied" ? labels.copied : llmsState === "failed" ? labels.copyFailed : "llms.txt"}</span>
      </button>
    </div>
  );
}
