"use client";

/**
 * Stage 1 — describe-first entry.
 *
 * Replaces the old browse-first gallery landing. User types what they
 * want ("warm korean sans") or picks a chip; we route them to Stage 2
 * (match-results). Browse catalog + My saved are secondary escapes for
 * users who prefer to explore the old way.
 */

import { useState } from "react";
import { ArrowRight, BookOpen, Star } from "lucide-react";
import type { FontScript } from "@/lib/fonts/types";
import { trackHeroChipClick } from "@/lib/fonts/analytics";
import { ScriptToggle } from "./script-toggle";

const SUGGESTION_CHIPS: { label: string; query: string }[] = [
  { label: "몽글몽글 따뜻한 느낌", query: "몽글몽글 따뜻한 느낌의 폰트" },
  { label: "토스 같은 핀테크 산세리프", query: "토스 같은 핀테크 산세리프" },
  { label: "배민처럼 친근한 느낌", query: "배민처럼 친근한 느낌의 폰트" },
  { label: "프리텐다드인데 조금 더 따뜻하게", query: "프리텐다드 느낌인데 조금 더 따뜻한" },
  { label: "긴 글 읽기 좋은 세리프", query: "긴 글 읽기 좋은 편집 세리프" },
  { label: "Geist 느낌을 한글로", query: "Geist 느낌을 한글로 옮긴 산세리프" },
];

export function HeroEntry({
  initialQuery,
  initialScripts,
  savedCount,
  onSubmit,
  onBrowseCatalog,
  onOpenSaved,
}: {
  initialQuery?: string;
  initialScripts?: FontScript[];
  savedCount: number;
  onSubmit: (query: string, scripts: FontScript[], source?: "input" | "chip") => void;
  onBrowseCatalog: () => void;
  onOpenSaved: () => void;
}) {
  const [query, setQuery] = useState(initialQuery ?? "");
  const [scripts, setScripts] = useState<FontScript[]>(
    initialScripts ?? ["hangul", "latin"],
  );

  function submit(value: string, source: "input" | "chip" = "input") {
    const q = value.trim();
    if (!q) return;
    onSubmit(q, scripts, source);
  }

  return (
    <section className="mx-auto flex min-h-[calc(100vh-3.5rem)] max-w-3xl flex-col items-center justify-center px-4 pb-20 sm:px-6">
      <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
        Describe · Match · Customize
      </div>

      <h1 className="mt-5 text-center text-3xl font-bold tracking-tight sm:text-4xl">
        Describe the font you want
      </h1>
      <p className="mt-2 max-w-xl text-center text-sm text-muted-foreground leading-relaxed">
        원하는 분위기를 한 줄로 적어주세요. 카탈로그에서 가장 가까운 폰트를
        찾아드려요.
      </p>

      <form
        className="mt-6 w-full"
        onSubmit={(e) => {
          e.preventDefault();
          submit(query);
        }}
      >
        <div className="flex items-center gap-2 rounded-xl border border-border/60 bg-background p-1.5 shadow-sm transition-colors focus-within:border-primary/60 focus-within:shadow-[0_0_0_3px_oklch(0.55_0.22_275/0.12)] dark:border-border dark:focus-within:shadow-[0_0_0_3px_oklch(0.7_0.2_275/0.18)]">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g., Pretendard but warmer · 따뜻한 한글 산세리프"
            autoFocus
            className="h-10 min-w-0 flex-1 bg-transparent px-3 text-sm outline-none"
            aria-label="Font description"
          />
          <button
            type="submit"
            disabled={!query.trim()}
            className="inline-flex h-10 shrink-0 items-center gap-1.5 rounded-lg bg-primary px-4 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Discover
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </form>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs">
        <span className="text-muted-foreground">지원하는 언어:</span>
        <ScriptToggle value={scripts} onChange={setScripts} size="sm" />
      </div>

      <div className="mt-14 w-full">
        <div className="mb-3 text-center text-[11px] text-muted-foreground">
          이렇게 검색해보시는 건 어떠신가요?
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {SUGGESTION_CHIPS.map((chip, idx) => (
            <button
              key={chip.label}
              type="button"
              onClick={() => {
                trackHeroChipClick({ position: idx, queryLen: chip.query.length });
                setQuery(chip.query);
                submit(chip.query, "chip");
              }}
              className="rounded-full border border-dashed border-border/70 bg-background px-3.5 py-1.5 text-xs text-foreground/80 transition-all hover:-translate-y-0.5 hover:border-solid hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-sm dark:border-border"
            >
              {chip.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-20 flex items-center gap-4 text-xs text-muted-foreground">
        <button
          type="button"
          onClick={onBrowseCatalog}
          className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
        >
          <BookOpen className="h-3.5 w-3.5" />
          Browse catalog
        </button>
        <span className="h-3 w-px bg-border" aria-hidden />
        <button
          type="button"
          onClick={onOpenSaved}
          className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
        >
          <Star className="h-3.5 w-3.5" />
          My saved
          {savedCount > 0 && (
            <span className="rounded-full bg-foreground/10 px-1.5 py-0.5 text-[10px] font-semibold text-foreground">
              {savedCount}
            </span>
          )}
        </button>
      </div>

    </section>
  );
}
