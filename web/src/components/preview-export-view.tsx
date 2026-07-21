"use client";

import { useState, useMemo } from "react";
import {
  trackExport,
  trackDsClick,
  trackMdViewToggle,
  trackSourceFormatExport,
  trackSourceFormatView,
} from "@/lib/builder/analytics";
import { AlertCircle, FileText, Copy, Check, ChevronRight, ArrowLeft, Download, ArrowUpRight, Eye, SlidersHorizontal, FolderOpen, MessageSquare, Terminal } from "lucide-react";
import { ReferencePreview } from "@/components/reference-preview";
import { extractTokens } from "@/lib/extract-tokens";
import { applyOverridesToMd } from "@/lib/core/generate-css";
import type { Overrides, StylePreferences } from "@/lib/core/types";
import type { RefDetail } from "@/app/builder/page";
import { getDesignSystem } from "@/lib/design-systems";
import { getHomepageUrl } from "@/data/registry.generated";
import { BrandNameplateLogo } from "@/components/brand-logo";
import { Markdown } from "@/components/markdown";
import { ReferenceEvidenceDrawer } from "@/components/reference-evidence-drawer";
import {
  createReferenceFormatArtifacts,
  REFERENCE_FORMATS,
  type ReferenceFormat,
  type ReferenceFormatArtifact,
} from "@/lib/references/export-formats";
import { ReferenceShareButton } from "@/components/reference-share-button";
import { INSTALL_CMD } from "@/components/install-cta";
import { copyText } from "@/lib/clipboard";
import { trackInstallCopy, trackPromptCopy } from "@/lib/activation/analytics";

type MdView = "rendered" | "raw";

export function PreviewExportView({
  detail,
  overrides,
  onBack,
  onCustomize,
  components,
  stylePreferences,
  handoffPrompt,
}: {
  detail: RefDetail;
  overrides: Overrides;
  onBack: () => void;
  /** Opt-in tweak path — opens the (demoted) customize wizard from preview. */
  onCustomize: () => void;
  components: string[];
  onComponentsChange: (c: string[]) => void;
  stylePreferences?: StylePreferences;
  handoffPrompt: string;
}) {
  const [mdView, setMdView] = useState<MdView>("rendered");
  const [sourceFormat, setSourceFormat] = useState<ReferenceFormat>("designmd");
  const [copyState, setCopyState] = useState<{
    target: string;
    status: "copied" | "failed";
  } | null>(null);
  // Mobile-only: which panel is shown (desktop shows both side-by-side via lg: classes).
  const [mobileView, setMobileView] = useState<"preview" | "designmd">("preview");
  const tokens = useMemo(() => extractTokens(detail), [detail]);
  const exportComponents = useMemo(
    () => tokens.components.length > 0 ? components : [],
    [tokens.components.length, components],
  );

  const designMd = useMemo(
    () => applyOverridesToMd(
      detail.designMd,
      detail.id.charAt(0).toUpperCase() + detail.id.slice(1),
      detail.primary, detail.fontFamily,
      overrides, exportComponents, stylePreferences,
      true,
    ),
    [detail, overrides, exportComponents, stylePreferences],
  );

  const claimOverrides = useMemo(() => {
    const contract = detail.referenceAst;
    if (!contract) return {};
    const values: Record<string, string | number> = {};
    if (overrides.primaryColor && contract.foundations.primary) {
      values[contract.foundations.primary.claimPath] = overrides.primaryColor;
    }
    if (overrides.fontFamily && contract.foundations.uiFont) {
      values[contract.foundations.uiFont.claimPath] = overrides.fontFamily;
    }
    if (overrides.borderRadius && contract.foundations.radius) {
      values[contract.foundations.radius.claimPath] = overrides.borderRadius;
    }
    if (overrides.headingWeight) {
      for (const claimPath of contract.tokens.claimPaths) {
        if (
          /tokens\.(?:typography|font|text)\./i.test(claimPath)
          && /(?:display|heading|headline|title|h1|h2)/i.test(claimPath)
          && /(?:font-?weight|weight)$/i.test(claimPath)
        ) {
          values[claimPath] = Number(overrides.headingWeight) || overrides.headingWeight;
        }
      }
    }
    return values;
  }, [detail.referenceAst, overrides.primaryColor, overrides.fontFamily, overrides.borderRadius, overrides.headingWeight]);

  const formatArtifacts = useMemo(() => {
    if (!detail.referenceAst) return null;
    return createReferenceFormatArtifacts({
      referenceId: detail.id,
      designMd,
      tokens: detail.referenceAst.tokens,
      claimOverrides,
    });
  }, [detail.id, detail.referenceAst, designMd, claimOverrides]);

  const designMdArtifact: ReferenceFormatArtifact = {
    id: "designmd",
    label: "DESIGN.md",
    content: designMd,
    filename: "DESIGN.md",
    mime: "text/markdown",
  };
  const activeArtifact = formatArtifacts?.[sourceFormat] ?? designMdArtifact;
  const availableFormats = detail.referenceAst ? REFERENCE_FORMATS : (["designmd"] as const);

  const refName = detail.id.charAt(0).toUpperCase() + detail.id.slice(1);
  const ds = getDesignSystem(detail.id);
  const homepageUrl = getHomepageUrl(detail.id);
  const handoffPromptPreview = handoffPrompt.split(" (builder config:")[0];

  function setCopyFeedback(target: string, copied: boolean) {
    setCopyState({ target, status: copied ? "copied" : "failed" });
    window.setTimeout(() => setCopyState(null), copied ? 1600 : 2400);
  }

  function downloadArtifact(artifact: ReferenceFormatArtifact, format: ReferenceFormat) {
    const blob = new Blob([artifact.content], { type: artifact.mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = artifact.filename;
    a.click();
    URL.revokeObjectURL(url);
    if (format === "designmd") trackExport({ reference: detail.id, channel: "download" });
    trackSourceFormatExport({ reference: detail.id, format, action: "download" });
  }

  function download() {
    downloadArtifact(activeArtifact, sourceFormat);
  }

  async function copyMd(button: HTMLButtonElement) {
    const copied = await copyText(activeArtifact.content, {
      restoreTarget: button,
      onSuccess: () => {
        if (sourceFormat === "designmd") trackExport({ reference: detail.id, channel: "copy" });
        trackSourceFormatExport({ reference: detail.id, format: sourceFormat, action: "copy" });
      },
    });
    setCopyFeedback(sourceFormat, copied);
  }

  async function copyInstall(button: HTMLButtonElement) {
    const copied = await copyText(INSTALL_CMD, {
      restoreTarget: button,
      onSuccess: () => trackInstallCopy({ surface: "builder", reference: detail.id }),
    });
    setCopyFeedback("install", copied);
  }

  async function copyPrompt(button: HTMLButtonElement) {
    const copied = await copyText(handoffPrompt, {
      restoreTarget: button,
      onSuccess: () => trackPromptCopy({ surface: "builder", reference: detail.id }),
    });
    setCopyFeedback("prompt", copied);
  }

  function selectSourceFormat(format: ReferenceFormat) {
    setSourceFormat(format);
    trackSourceFormatView({ reference: detail.id, format });
  }

  function selectMdView(view: MdView) {
    setMdView(view);
    trackMdViewToggle({ reference: detail.id, view });
  }

  return (
    <div className="flex flex-col gap-4">

      {/* ── Header ── */}
      {/* The breadcrumb's terminal crumb (brand name) doubles as the page
          title — the left preview panel already shows the brand prominently —
          so we drop the redundant <h2>. The crumb is sized up a touch
          (text-sm + semibold) to keep a focal point, and the DS link rides on
          the same row. "← reference" keeps an explicit back affordance for
          users who don't read a breadcrumb as clickable. This is the builder
          funnel, so the parent is "brands" (the selector), never the
          /reference catalog route. */}
      <div className="flex items-center justify-between gap-3">
        <nav aria-label="Breadcrumb" className="flex min-w-0 items-center gap-1.5 text-sm">
          <button
            type="button"
            onClick={onBack}
            aria-label="Back to brands"
            className="group inline-flex shrink-0 items-center gap-1 font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:underline"
          >
            <ArrowLeft className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-x-0.5" />
            brands
          </button>
          <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground/50" />
          <span className="truncate font-semibold tracking-tight text-foreground">{refName}</span>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <ReferenceShareButton reference={detail.id} location="builder" compact />
        {ds && (
          <a
            href={ds.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackDsClick({ reference: ds.refId, location: "preview_header" })}
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
          <FileText className="h-3.5 w-3.5" /> Source
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
            referenceAst={detail.referenceAst}
          />
        </div>

        {/* Right — sticky DESIGN.md panel */}
        <div className={`${mobileView === "designmd" ? "flex" : "hidden"} lg:flex sticky top-[4.5rem] flex-col rounded-xl border border-border/40 dark:border-border overflow-hidden max-h-[calc(100dvh-5.5rem)] lg:max-h-[calc(100vh-5.5rem)]`}>

          {/* Toolbar */}
          <div className="shrink-0 flex flex-wrap items-center gap-2 border-b border-border/40 dark:border-border px-3 py-2">
            {/* Rendered / Raw toggle — lowest-emphasis (neutral segmented) */}
            {sourceFormat === "designmd" ? <div className="flex items-center rounded-[0.5rem] border border-border/40 dark:border-border bg-muted/20 p-0.5">
              <button
                onClick={() => selectMdView("rendered")}
                className={`flex items-center gap-1 rounded-[0.375rem] px-2 py-1 text-[11px] font-medium transition-colors duration-150 ${
                  mdView === "rendered"
                    ? "bg-background text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Eye className="h-2.5 w-2.5" /> Rendered
              </button>
              <button
                onClick={() => selectMdView("raw")}
                className={`flex items-center gap-1 rounded-[0.375rem] px-2 py-1 text-[11px] font-medium transition-colors duration-150 ${
                  mdView === "raw"
                    ? "bg-background text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <FileText className="h-2.5 w-2.5" /> Raw
              </button>
            </div> : (
              <span className="font-mono text-[11px] font-medium text-muted-foreground">
                {activeArtifact.label}
              </span>
            )}

            {/* Customize — demoted, opt-in tweak path (most users export as-is). */}
            <button
              type="button"
              onClick={onCustomize}
              className="flex items-center gap-1.5 rounded-[0.5rem] border border-border/40 dark:border-border bg-background px-2.5 py-1.5 text-[11px] font-medium text-muted-foreground transition-colors duration-150 hover:bg-muted hover:text-foreground"
            >
              <SlidersHorizontal className="h-3 w-3" /> Customize
            </button>

            {/* Export actions — Download = primary (solid indigo), Copy =
                secondary (tonal indigo). On mobile the group takes its own
                full-width row with flex-1 buttons = comfortable tap targets;
                inline + right-aligned from sm up. */}
            <div className="ml-auto flex w-full items-center gap-2 sm:w-auto">
              <button
                onClick={(event) => copyMd(event.currentTarget)}
                className="flex flex-1 items-center justify-center gap-1.5 rounded-[0.5rem] border border-primary/25 bg-primary/10 px-3 py-2 text-xs font-semibold text-primary transition-colors duration-150 hover:bg-primary/20 dark:border-primary/30 sm:flex-none"
              >
                {copyState?.target === sourceFormat && copyState.status === "copied"
                  ? <><Check className="h-3.5 w-3.5 text-emerald-500" /> Copied</>
                  : copyState?.target === sourceFormat && copyState.status === "failed"
                    ? <><AlertCircle className="h-3.5 w-3.5 text-red-500" /> Try again</>
                    : <><Copy className="h-3.5 w-3.5" /> Copy</>}
              </button>

              <button
                onClick={download}
                className="flex flex-1 items-center justify-center gap-1.5 rounded-[0.5rem] bg-primary px-3.5 py-2 text-xs font-semibold text-primary-foreground shadow-[0_2px_12px_-3px_rgba(85,70,255,0.65)] transition-all duration-150 hover:bg-primary/90 active:translate-y-px sm:flex-none"
              >
                <Download className="h-3.5 w-3.5" /> Download
              </button>
            </div>
          </div>

          <ReferenceEvidenceDrawer reference={detail.id} contract={detail.referenceAst} />

          <div
            className="shrink-0 overflow-x-auto border-b border-border/40 px-3 py-2 dark:border-border"
            role="tablist"
            aria-label="Source format"
          >
            <div className="flex w-max min-w-full items-center gap-0.5 rounded-lg bg-muted/40 p-[3px]">
              {availableFormats.map((format) => {
                const artifact = formatArtifacts?.[format] ?? designMdArtifact;
                const active = sourceFormat === format;
                return (
                  <button
                    key={format}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => selectSourceFormat(format)}
                    className={`rounded-md px-2.5 py-1.5 text-[11px] font-medium transition-colors ${
                      active
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {artifact.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* DESIGN.md content. Rendered strips all frontmatter (markdown.tsx),
              so the tokens block is hidden there; Raw shows the full file —
              tokens sit at the top like frontmatter, which is the intent. */}
          <div className="flex-1 overflow-auto min-h-0">
            {sourceFormat === "designmd" && mdView === "rendered"
              ? <div className="p-5"><Markdown content={activeArtifact.content} /></div>
              : <pre className="p-5 text-[11px] leading-[1.7] font-mono text-foreground/70 whitespace-pre-wrap">{activeArtifact.content}</pre>
            }
          </div>
        </div>
      </div>

      <section className="rounded-xl border border-border/50 bg-card/40 p-4 sm:p-5 dark:border-border dark:bg-card/60" aria-labelledby="builder-handoff-title">
        <div className="max-w-2xl">
          <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
            Continue in your project
          </div>
          <h2 id="builder-handoff-title" className="mt-1 text-xl font-semibold tracking-tight">
            Use this DESIGN.md with your coding agent
          </h2>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
            Three actions, three destinations: save the file in your project, run the command in Terminal, then paste the prompt into your coding-agent chat.
          </p>
        </div>

        <ol className="mt-5 grid gap-3 md:grid-cols-3">
          <li className="flex min-w-0 flex-col rounded-xl border border-border/50 bg-background p-4 dark:border-border">
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-[11px] font-semibold text-primary">01 / 03</span>
              <FolderOpen className="h-4 w-4 text-muted-foreground" aria-hidden />
            </div>
            <div className="mt-5 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Save to · project root
            </div>
            <h3 className="mt-1.5 text-sm font-semibold">Put DESIGN.md in your project</h3>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              Download the file, then move it into the top-level folder you open with your coding agent.
            </p>
            <div className="mt-3 rounded-lg bg-muted/60 px-3 py-2 font-mono text-[11px] text-foreground/70">
              your-project/DESIGN.md
            </div>
            <div className="mt-auto pt-4">
              <button
                type="button"
                onClick={() => downloadArtifact(designMdArtifact, "designmd")}
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-border bg-background px-3 text-xs font-semibold transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                <Download className="h-3.5 w-3.5" /> Download DESIGN.md
              </button>
            </div>
          </li>

          <li className="flex min-w-0 flex-col rounded-xl border border-border/50 bg-background p-4 dark:border-border">
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-[11px] font-semibold text-primary">02 / 03</span>
              <Terminal className="h-4 w-4 text-muted-foreground" aria-hidden />
            </div>
            <div className="mt-5 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Run in · project terminal
            </div>
            <h3 className="mt-1.5 text-sm font-semibold">Install OmD from Terminal</h3>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              Open Terminal in the same project folder, paste this command, and press Enter. Restart your agent when it finishes.
            </p>
            <div className="mt-3 truncate rounded-lg bg-muted/60 px-3 py-2 font-mono text-[11px] text-foreground/70">
              $ {INSTALL_CMD}
            </div>
            <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">
              After restart, run <code className="font-mono text-foreground/75">{INSTALL_CMD} doctor</code> once in the same Terminal.
            </p>
            <div className="mt-auto pt-4">
              <button
                type="button"
                onClick={(event) => copyInstall(event.currentTarget)}
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-foreground px-3 font-mono text-[11px] font-semibold text-background transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                {copyState?.target === "install" && copyState.status === "copied" ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : copyState?.target === "install" && copyState.status === "failed" ? <AlertCircle className="h-3.5 w-3.5 text-red-400" /> : <Copy className="h-3.5 w-3.5" />}
                {copyState?.target === "install" && copyState.status === "copied" ? "Command copied" : copyState?.target === "install" && copyState.status === "failed" ? "Copy failed" : "Copy Terminal command"}
              </button>
            </div>
          </li>

          <li className="flex min-w-0 flex-col rounded-xl border border-border/50 bg-background p-4 dark:border-border">
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-[11px] font-semibold text-primary">03 / 03</span>
              <MessageSquare className="h-4 w-4 text-muted-foreground" aria-hidden />
            </div>
            <div className="mt-5 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Paste in · agent chat
            </div>
            <h3 className="mt-1.5 text-sm font-semibold">Tell your coding agent what to do</h3>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              Open Claude Code, Codex, OpenCode, or Cursor for this project. Paste the prompt into its chat and send it.
            </p>
            <div className="mt-3 line-clamp-2 rounded-lg bg-muted/60 px-3 py-2 text-[11px] leading-relaxed text-foreground/70">
              &ldquo;{handoffPromptPreview}&rdquo;
            </div>
            <div className="mt-auto pt-4">
              <button
                type="button"
                onClick={(event) => copyPrompt(event.currentTarget)}
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-primary px-3 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                {copyState?.target === "prompt" && copyState.status === "copied" ? <Check className="h-3.5 w-3.5" /> : copyState?.target === "prompt" && copyState.status === "failed" ? <AlertCircle className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                {copyState?.target === "prompt" && copyState.status === "copied" ? "Agent prompt copied" : copyState?.target === "prompt" && copyState.status === "failed" ? "Copy failed" : "Copy prompt for agent"}
              </button>
            </div>
          </li>
        </ol>
        <span className="sr-only" role="status" aria-live="polite">
          {copyState?.status === "copied" ? "Copied" : copyState?.status === "failed" ? "Copy failed" : ""}
        </span>
      </section>
    </div>
  );
}
