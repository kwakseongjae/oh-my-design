"use client";

import { useRouter } from "next/navigation";
import { useId, useMemo, useRef, useState } from "react";
import { trackDetailOpen } from "@/lib/design-systems/analytics";
import { EN, KO, type Locale } from "./copy";

interface IndexEntry {
  id: string;
  n: string;
  d?: string;
  h: string;
  p: string;
  s: "v" | "p" | "l";
  c: string;
}

const STATUS_KEY = { v: "verified_v2", p: "partial", l: "legacy_snapshot" } as const;
const MAX_RESULTS = 8;

let indexPromise: Promise<IndexEntry[]> | null = null;
function loadIndex(): Promise<IndexEntry[]> {
  indexPromise ??= fetch("/api/search-index")
    .then((r) => (r.ok ? r.json() : []))
    .catch(() => {
      indexPromise = null;
      return [];
    });
  return indexPromise;
}

/**
 * Catalog search on the landing. The index (521 entries + native-language
 * aliases) is fetched on first focus from a build-time static route, so it
 * never weighs on the page itself. Enter or the button opens the highlighted
 * match's reference page (/design-systems/<id>).
 */
export function SearchBox({ locale, totalRefs }: { locale: Locale; totalRefs: number }) {
  const copy = locale === "ko" ? KO : EN;
  const router = useRouter();
  const [index, setIndex] = useState<IndexEntry[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [cursor, setCursor] = useState(0);
  const listId = useId();
  const inputRef = useRef<HTMLInputElement>(null);

  const ensureIndex = () => {
    if (index || loading) return;
    setLoading(true);
    loadIndex().then((data) => {
      setIndex(data);
      setLoading(false);
    });
  };

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q || !index) return [];
    const starts: IndexEntry[] = [];
    const contains: IndexEntry[] = [];
    for (const e of index) {
      if (!e.h.includes(q)) continue;
      (e.h.split(" ").some((w) => w.startsWith(q)) ? starts : contains).push(e);
      if (starts.length >= MAX_RESULTS) break;
    }
    return [...starts, ...contains].slice(0, MAX_RESULTS);
  }, [query, index]);

  const go = (entry?: IndexEntry) => {
    const target = entry ?? results[cursor] ?? results[0];
    if (!target) return;
    trackDetailOpen({ reference: target.id, source: "home_search" });
    router.push(`/design-systems/${encodeURIComponent(target.id)}`);
  };

  const showList = open && query.trim().length > 0;
  const activeId = results[cursor] ? `${listId}-${results[cursor].id}` : undefined;

  return (
    <form
      role="search"
      className="relative"
      onSubmit={(e) => {
        e.preventDefault();
        go();
      }}
    >
      <div className="flex items-stretch border-y-2 border-ink">
        <label className="flex min-w-0 flex-1 items-center gap-3 px-1 py-3 sm:gap-4 sm:py-4">
          <span className="shrink-0 font-mono text-xs uppercase tracking-wide text-proof">{copy.search.label}</span>
          <input
            ref={inputRef}
            type="search"
            role="combobox"
            aria-expanded={showList}
            aria-controls={listId}
            aria-autocomplete="list"
            aria-activedescendant={showList ? activeId : undefined}
            value={query}
            placeholder={copy.search.placeholder(totalRefs)}
            onFocus={() => {
              ensureIndex();
              setOpen(true);
            }}
            onBlur={() => setTimeout(() => setOpen(false), 120)}
            onChange={(e) => {
              setQuery(e.target.value);
              setCursor(0);
              setOpen(true);
              ensureIndex();
            }}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setCursor((c) => Math.min(c + 1, Math.max(results.length - 1, 0)));
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setCursor((c) => Math.max(c - 1, 0));
              } else if (e.key === "Escape") {
                setOpen(false);
              }
            }}
            className="min-w-0 flex-1 bg-transparent text-lg text-ink outline-none placeholder:text-ink-2 sm:text-xl [&::-webkit-search-cancel-button]:hidden"
          />
        </label>
        <button
          type="submit"
          onClick={(e) => {
            if (results.length === 0) {
              e.preventDefault();
              inputRef.current?.focus();
            }
          }}
          className="hidden shrink-0 items-center gap-2 bg-ink px-5 text-sm font-semibold text-paper hover:opacity-90 sm:flex"
        >
          {copy.search.open} <span aria-hidden="true">→</span>
        </button>
      </div>

      {showList && (
        <div className="absolute inset-x-0 top-full z-30 border-x border-b border-ink bg-sheet shadow-[0_8px_0_0_var(--omd-paper-2)]">
          {!index ? (
            <p className="px-3 py-3 text-sm text-ink-2">{copy.search.loading}</p>
          ) : results.length === 0 ? (
            <p className="px-3 py-3 text-sm text-ink-2">{copy.search.noMatch}</p>
          ) : (
            <ul id={listId} role="listbox" aria-label={copy.search.resultsLabel}>
              {results.map((r, i) => (
                <li
                  key={r.id}
                  id={`${listId}-${r.id}`}
                  role="option"
                  aria-selected={i === cursor}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    go(r);
                  }}
                  onMouseEnter={() => setCursor(i)}
                  className={`flex cursor-pointer items-center gap-3 border-t border-rule px-3 py-2 first:border-t-0 ${i === cursor ? "bg-paper-2" : ""}`}
                >
                  <span aria-hidden="true" className="h-4 w-4 shrink-0 rounded-tag ring-1 ring-inset ring-ink/15" style={{ background: r.p }} />
                  <span className="min-w-0 flex-1 truncate text-base font-semibold text-ink">
                    {locale === "ko" && r.d ? r.d : r.n}
                  </span>
                  <span className="font-mono text-[11px] text-ink-2">{r.c}</span>
                  <span className={`w-14 text-right font-mono text-[11px] ${r.s === "v" ? "text-proof" : "text-ink-2"}`}>
                    {copy.status[STATUS_KEY[r.s]]}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
      {/* Keeps the listbox id resolvable for aria-controls while closed. */}
      {!showList && <span id={listId} hidden />}
    </form>
  );
}
