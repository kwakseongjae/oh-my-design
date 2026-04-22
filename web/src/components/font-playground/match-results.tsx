"use client";

/**
 * Stage 2 — match results (AI-powered + deterministic fallback).
 *
 * Flow on submit:
 *   1. POST /api/font-playground/match → server returns 3 picks + reasons
 *   2. On 503 (no key) / 502 (upstream) / 429 (rate-limited) / network:
 *      fall back to match-intent.ts (deterministic keyword rules)
 *   3. Surface a banner when falling back so the user knows why this
 *      feels slightly less clever.
 *
 * Query is editable inline. Each "Update" re-runs the match — we gate
 * on Submit (no debounce) so we don't burn AI calls on every keystroke.
 */

import { useEffect, useRef, useState } from "react";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  CornerDownLeft,
  Loader2,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import type { FontEntry, FontScript } from "@/lib/fonts/types";
import { FONT_CATALOG, FONT_BY_ID } from "@/lib/fonts/catalog";
import { matchQuery } from "@/lib/fonts/match-intent";
import {
  trackMatchFallback,
  trackMatchView,
  type FpFallbackReason,
} from "@/lib/fonts/analytics";
import { ScriptToggle } from "./script-toggle";
import { scriptLabels } from "./labels";

interface Pick {
  font: FontEntry;
  reason: string;
}

type FetchState =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "ai"; picks: Pick[] }
  | { kind: "fallback"; picks: Pick[]; reason: FallbackReason };

type FallbackReason = FpFallbackReason;

const FALLBACK_COPY: Record<FallbackReason, string> = {
  no_api_key: "AI 매칭이 비활성화돼 있어 오프라인 매처로 보여드려요.",
  rate_limited: "요청이 너무 잦아요. 잠시 후 다시 시도하거나, 오프라인 매처 결과를 먼저 보세요.",
  upstream_error: "AI 매칭이 잠시 응답하지 않아 오프라인 매처로 대체했어요.",
  no_picks: "AI가 유효한 결과를 못 돌려줘서 오프라인 매처로 대체했어요.",
  network: "네트워크 오류 — 오프라인 매처 결과를 보여드려요.",
};

/** Loading messages — rotated to create a sense of progress rather than
 *  a single spinner label. Covers the typical 2–4s AI round-trip. */
const LOADING_MESSAGES = [
  "분위기를 읽는 중",
  "카탈로그 60종을 훑어보는 중",
  "가장 어울리는 셋을 고르는 중",
];

function sampleScriptFor(font: FontEntry, pref?: FontScript): FontScript {
  if (pref && font.scripts.includes(pref)) return pref;
  return font.scripts.includes("hangul") ? "hangul" : "latin";
}

function pickDisplay(font: FontEntry, query: string, preferScript?: FontScript): string {
  const q = query.trim();
  const script = sampleScriptFor(font, preferScript);
  if (!q || /[가-힣a-z0-9]/i.test(q) === false) {
    return font.sampleText[script] ?? font.sampleText.latin ?? font.name;
  }
  const looksLikeNL = q.length > 40 || /\s(for|like|with|의|을|는|을)\s/i.test(q);
  if (looksLikeNL) return font.sampleText[script] ?? font.sampleText.latin ?? font.name;
  return q;
}

function displayWeight(font: FontEntry): number {
  if (font.variable) return font.axes.find((a) => a.tag === "wght")?.default ?? 500;
  return font.weights?.[Math.floor(font.weights.length / 2)] ?? 400;
}

/** Map the deterministic matcher's output to a homogeneous Pick shape. */
function deterministicPicks(query: string, scripts: FontScript[]): Pick[] {
  const results = matchQuery(query, FONT_CATALOG, 3, scripts);
  return results.map((r) => ({
    font: r.font,
    reason: r.reasons.join(" · ") || `${r.font.family} · ${r.font.scripts.join("+")}`,
  }));
}

function bothScripts(scripts: FontScript[]): boolean {
  return scripts.length === 0 || (scripts.includes("hangul") && scripts.includes("latin"));
}

export function MatchResults({
  query,
  scripts,
  onQueryChange,
  onBack,
  onSelect,
  onBrowseCatalog,
  onResult,
}: {
  query: string;
  scripts: FontScript[];
  onQueryChange: (q: string, scripts: FontScript[]) => void;
  onBack: () => void;
  onSelect: (id: string) => void;
  onBrowseCatalog: () => void;
  /** Fired once per settled fetch: picks in display order + whether they
   *  came from AI or deterministic fallback. Parent uses this to attribute
   *  downstream clicks (rank, kind) to the match source. */
  onResult?: (kind: "ai" | "fallback", pickIds: string[]) => void;
}) {
  const [draft, setDraft] = useState(query);
  const [draftScripts, setDraftScripts] = useState<FontScript[]>(scripts);
  const [state, setState] = useState<FetchState>({ kind: "idle" });
  const [loadingIdx, setLoadingIdx] = useState(0);

  /** Hold the latest `onResult` in a ref so the match effect can stay
   *  keyed on (query, scripts) only — otherwise every parent re-render
   *  that passes a fresh inline callback would re-trigger the fetch. */
  const onResultRef = useRef(onResult);
  useEffect(() => {
    onResultRef.current = onResult;
  }, [onResult]);

  // Rotate loading messages while the fetch is in flight.
  useEffect(() => {
    if (state.kind !== "loading") return;
    setLoadingIdx(0);
    const id = setInterval(() => {
      setLoadingIdx((i) => (i + 1) % LOADING_MESSAGES.length);
    }, 1400);
    return () => clearInterval(id);
  }, [state.kind]);

  // Keep the draft in sync when the parent mutates query (e.g., share link).
  useEffect(() => {
    setDraft(query);
  }, [query]);

  useEffect(() => {
    setDraftScripts(scripts);
  }, [scripts]);

  // Run a match whenever the active query changes. We use a `cancelled`
  // flag instead of AbortController so the stale fetch just resolves into
  // the void — avoids the "signal is aborted without reason" dev overlay
  // that fires when React 19 Strict Mode re-runs the effect.
  useEffect(() => {
    if (!query.trim()) {
      setState({ kind: "idle" });
      return;
    }

    let cancelled = false;
    setState({ kind: "loading" });

    const apiScripts = bothScripts(scripts) ? [] : scripts;

    (async () => {
      try {
        const res = await fetch("/api/font-playground/match", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query, scripts: apiScripts }),
        });
        if (cancelled) return;

        if (res.ok) {
          const body = (await res.json()) as { picks?: { id: string; reason_ko: string }[] };
          if (cancelled) return;
          const picks: Pick[] = (body.picks ?? [])
            .map((p) => {
              const font = FONT_BY_ID[p.id];
              return font ? { font, reason: p.reason_ko } : null;
            })
            .filter((x): x is Pick => x !== null)
            .slice(0, 3);

          if (picks.length > 0) {
            setState({ kind: "ai", picks });
            trackMatchView({
              kind: "ai",
              pickCount: picks.length,
              queryLen: query.length,
              scripts,
            });
            onResultRef.current?.("ai", picks.map((p) => p.font.id));
            return;
          }
          const fallbackPicks = deterministicPicks(query, scripts);
          setState({ kind: "fallback", picks: fallbackPicks, reason: "no_picks" });
          trackMatchFallback("no_picks");
          trackMatchView({
            kind: "fallback",
            pickCount: fallbackPicks.length,
            queryLen: query.length,
            scripts,
            fallbackReason: "no_picks",
          });
          onResultRef.current?.("fallback", fallbackPicks.map((p) => p.font.id));
          return;
        }

        let reason: FallbackReason = "upstream_error";
        if (res.status === 503) reason = "no_api_key";
        else if (res.status === 429) reason = "rate_limited";
        else if (res.status === 502) reason = "upstream_error";

        const fallbackPicks = deterministicPicks(query, scripts);
        setState({ kind: "fallback", picks: fallbackPicks, reason });
        trackMatchFallback(reason);
        trackMatchView({
          kind: "fallback",
          pickCount: fallbackPicks.length,
          queryLen: query.length,
          scripts,
          fallbackReason: reason,
        });
        onResultRef.current?.("fallback", fallbackPicks.map((p) => p.font.id));
      } catch {
        if (cancelled) return;
        const fallbackPicks = deterministicPicks(query, scripts);
        setState({ kind: "fallback", picks: fallbackPicks, reason: "network" });
        trackMatchFallback("network");
        trackMatchView({
          kind: "fallback",
          pickCount: fallbackPicks.length,
          queryLen: query.length,
          scripts,
          fallbackReason: "network",
        });
        onResultRef.current?.("fallback", fallbackPicks.map((p) => p.font.id));
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [query, scripts]);

  const picks: Pick[] =
    state.kind === "ai" || state.kind === "fallback" ? state.picks : [];

  const preferredScript: FontScript | undefined = /[가-힣]/.test(query) ||
    /korean|hangul/i.test(query)
    ? "hangul"
    : "latin";

  const loading = state.kind === "loading";
  const empty = !loading && picks.length === 0 && query.trim().length > 0;

  const scriptsDiffer =
    draftScripts.length !== scripts.length ||
    draftScripts.some((s) => !scripts.includes(s));

  function submitDraft() {
    const next = draft.trim();
    if (!next) return;
    if (next === query && !scriptsDiffer) return;
    onQueryChange(next, draftScripts);
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
      {/* Refinement bar */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex shrink-0 items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          New search
        </button>
        <form
          className="flex min-w-0 flex-1 items-center gap-2 rounded-lg border border-border/60 bg-background px-2 transition-colors focus-within:border-primary/60 dark:border-border"
          onSubmit={(e) => {
            e.preventDefault();
            submitDraft();
          }}
        >
          <span className="pl-1 text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
            Describing
          </span>
          <input
            type="text"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            maxLength={500}
            className="h-9 min-w-0 flex-1 bg-transparent text-sm outline-none"
            aria-label="Refine query"
          />
          <ScriptToggle
            value={draftScripts}
            onChange={setDraftScripts}
            size="sm"
          />
          <button
            type="submit"
            disabled={
              !draft.trim() ||
              (draft.trim() === query && !scriptsDiffer) ||
              loading
            }
            className="inline-flex h-7 shrink-0 items-center gap-1 rounded-md bg-primary px-2.5 text-[11px] font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <CornerDownLeft className="h-3 w-3" />
            Update
          </button>
        </form>
      </div>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
          <Sparkles className="h-3 w-3" />
          Stage 2 · {state.kind === "ai" ? "Curated" : state.kind === "fallback" ? "Offline picks" : "Searching"}
        </div>
        <h2 className="mt-3 flex items-baseline gap-2 text-2xl font-bold tracking-tight sm:text-3xl">
          <span>
            {loading
              ? "어울리는 폰트를 찾는 중"
              : empty
                ? "Nothing matched yet"
                : `${picks.length} picks`}
          </span>
          {!loading && !bothScripts(scripts) && (
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
              · {scripts.includes("hangul") ? "KO" : ""}
              {scripts.includes("latin") ? "EN" : ""} only
            </span>
          )}
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">
          {loading
            ? "분위기를 읽고 카탈로그를 훑어 세 개를 추려 드릴게요."
            : empty
              ? "Try broader words (\"warm\", \"minimal\"), or browse the catalog directly."
              : "Click a pick to customize. Three curated matches — nothing more, nothing less."}
        </p>
      </div>

      {/* Fallback banner */}
      {state.kind === "fallback" && (
        <div className="mb-4 flex items-start gap-2 rounded-lg border border-amber-400/40 bg-amber-50/60 px-3 py-2 text-xs text-amber-900 dark:border-amber-400/30 dark:bg-amber-500/10 dark:text-amber-200">
          <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0" />
          <span>{FALLBACK_COPY[state.reason]}</span>
        </div>
      )}

      {/* Body */}
      {loading && (
        <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-border/60 bg-primary/[0.02] py-16 text-sm text-muted-foreground dark:border-border dark:bg-primary/[0.04]">
          <div className="flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin text-primary" />
            <span>{LOADING_MESSAGES[loadingIdx]}</span>
            <span className="inline-flex" aria-hidden>
              <span className="animate-pulse">·</span>
              <span className="animate-pulse [animation-delay:150ms]">·</span>
              <span className="animate-pulse [animation-delay:300ms]">·</span>
            </span>
          </div>
          <div className="flex gap-1.5" aria-hidden>
            {LOADING_MESSAGES.map((_, i) => (
              <span
                key={i}
                className={
                  i === loadingIdx
                    ? "h-1 w-6 rounded-full bg-primary transition-all"
                    : "h-1 w-6 rounded-full bg-border transition-all"
                }
              />
            ))}
          </div>
        </div>
      )}

      {!loading && empty && (
        <div className="flex flex-col items-center gap-3 rounded-xl border border-dashed border-border/60 py-16 text-center dark:border-border">
          <p className="max-w-sm text-sm text-muted-foreground">
            오프라인 매처도 매칭 실패. 다른 표현을 시도하거나 카탈로그를 직접 둘러보세요.
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={onBack}
              className="inline-flex h-8 items-center gap-1.5 rounded-md border border-border/60 px-3 text-xs font-semibold transition-colors hover:bg-accent dark:border-border"
            >
              <RotateCcw className="h-3 w-3" />
              Reword
            </button>
            <button
              type="button"
              onClick={onBrowseCatalog}
              className="inline-flex h-8 items-center gap-1.5 rounded-md bg-primary px-3 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Browse catalog
              <ArrowRight className="h-3 w-3" />
            </button>
          </div>
        </div>
      )}

      {!loading && picks.length > 0 && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {picks.map((p, idx) => (
            <button
              key={p.font.id}
              type="button"
              onClick={() => onSelect(p.font.id)}
              className={
                idx === 0
                  ? "group relative flex flex-col gap-5 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/[0.04] via-card/40 to-card/40 p-6 text-left shadow-[0_0_0_1px_oklch(0.55_0.22_275/0.06)] transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-[0_6px_24px_-10px_oklch(0.55_0.22_275/0.35)] dark:border-primary/30 dark:from-primary/[0.07]"
                  : "group relative flex flex-col gap-5 rounded-2xl border border-border/50 bg-card/40 p-6 text-left transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card dark:border-border dark:bg-card/60 dark:hover:bg-card"
              }
            >
              {idx === 0 && (
                <span className="absolute -top-2 left-4 inline-flex items-center gap-1 rounded-full bg-primary px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-primary-foreground shadow-sm">
                  <Sparkles className="h-2.5 w-2.5" />
                  Best match
                </span>
              )}

              <div
                className="flex min-h-[7.5rem] items-center break-words text-[26px] leading-[1.25] text-foreground"
                style={{
                  fontFamily: p.font.cssFamily,
                  fontWeight: displayWeight(p.font),
                }}
              >
                {pickDisplay(p.font, query, preferredScript)}
              </div>

              <div className="border-t border-border/30 pt-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-sm font-semibold">{p.font.name}</div>
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    {p.font.family}
                  </span>
                </div>
                {p.reason && (
                  <div className="mt-3 text-[11px] leading-relaxed text-muted-foreground">
                    {p.reason}
                  </div>
                )}
                <div className="mt-3 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  <span>{scriptLabels(p.font.scripts)}</span>
                  {p.font.variable && (
                    <>
                      <span aria-hidden className="text-border">·</span>
                      <span className="rounded bg-primary/10 px-1.5 py-0.5 text-[9px] text-primary">
                        Variable
                      </span>
                    </>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {!loading && picks.length > 0 && (
        <div className="mt-6 text-center text-xs text-muted-foreground">
          이 중에 없다면{" "}
          <button
            type="button"
            onClick={onBrowseCatalog}
            className="underline-offset-2 transition-colors hover:text-foreground hover:underline"
          >
            카탈로그 전체 보기
          </button>
        </div>
      )}
    </div>
  );
}
