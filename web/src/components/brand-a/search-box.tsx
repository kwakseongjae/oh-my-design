"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { SearchEntry } from "@/lib/landing-a/types";
import { detailHrefFor, hasKoDetailShort } from "@/lib/i18n/ko-detail";

/**
 * In-page typeahead over every reference (id, name, displayName). The index is
 * a static JSON route (/search-index.json) fetched on first focus, so the 521
 * entries never weigh on the first paint. The catalog has no ?q= parameter, so
 * the form never submits to one; Enter opens the top result.
 */
const CJK = /[぀-ヿ㐀-鿿가-힣]/;
const CC_LANG: Record<string, string> = { KR: "ko", JP: "ja", TW: "zh-Hant", CN: "zh-Hans" };
const RANK = { v: 0, p: 1, l: 2 } as const;
const norm = (s?: string) => String(s ?? "").normalize("NFC").toLowerCase().replace(/[\s\-_.()·]/g, "");

let indexPromise: Promise<SearchEntry[]> | null = null;
function loadIndex() {
  indexPromise ??= fetch("/search-index.json").then((r) => (r.ok ? r.json() : [])).catch(() => {
    indexPromise = null;
    return [];
  });
  return indexPromise;
}

function search(all: SearchEntry[], q: string): SearchEntry[] {
  const n = norm(q);
  if (!n) return [];
  const hits: { r: SearchEntry; s: number }[] = [];
  for (const r of all) {
    let s = 9;
    for (const k of [norm(r.i), norm(r.n), norm(r.d)]) {
      if (!k) continue;
      if (k === n) s = Math.min(s, 0);
      else if (k.startsWith(n)) s = Math.min(s, 1);
      else if (k.includes(n)) s = Math.min(s, 2);
    }
    if (s < 9) hits.push({ r, s });
  }
  hits.sort((a, b) => a.s - b.s || RANK[a.r.s] - RANK[b.r.s] || a.r.n.localeCompare(b.r.n));
  return hits.slice(0, 8).map((h) => h.r);
}

export function SearchBox({ labels, locale = "en" }: { labels: { label: string; ph: string; empty: string; hint: string; status: { v: string; p: string; l: string } }; locale?: string }) {
  // On /ko a result opens its Korean page when it has one (lib/i18n/ko-detail.ts), else the English page.
  const hrefOf = (r: SearchEntry) => detailHrefFor(locale, r.i, hasKoDetailShort(r.c, r.s));
  const [all, setAll] = useState<SearchEntry[] | null>(null);
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const box = useRef<HTMLDivElement>(null);
  const uid = useId().replace(/:/g, "");
  const results = all ? search(all, q) : [];

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (box.current && !box.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  const ensure = () => {
    if (!all) loadIndex().then(setAll);
  };
  const go = (r: SearchEntry) => {
    window.location.href = hrefOf(r);
  };
  const shown = open && q.trim().length > 0;

  return (
    <div className="sq-find" role="search" ref={box}>
      <label htmlFor={`q-${uid}`} className="sq-find-ic">
        <span className="sq-sr">{labels.label}</span>
        <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
          <rect x="2.5" y="2.5" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.2" />
          <path d="M12.5 12.5 18 18" stroke="currentColor" strokeWidth="2.2" />
        </svg>
      </label>
      <input
        id={`q-${uid}`}
        type="search"
        role="combobox"
        aria-expanded={shown}
        aria-controls={`ql-${uid}`}
        aria-autocomplete="list"
        aria-activedescendant={shown && active >= 0 ? `qo-${uid}-${active}` : undefined}
        autoComplete="off"
        spellCheck={false}
        placeholder={labels.ph}
        aria-label={labels.label}
        value={q}
        onFocus={() => {
          ensure();
          setOpen(true);
        }}
        onPointerEnter={ensure}
        onChange={(e) => {
          ensure();
          setQ(e.target.value);
          setActive(-1);
          setOpen(true);
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown") {
            e.preventDefault();
            setOpen(true);
            if (results.length) setActive((a) => (a + 1) % results.length);
          } else if (e.key === "ArrowUp") {
            e.preventDefault();
            if (results.length) setActive((a) => (a - 1 + results.length) % results.length);
          } else if (e.key === "Escape") {
            setOpen(false);
          } else if (e.key === "Enter") {
            const r = results[active >= 0 ? active : 0];
            if (r && shown) {
              e.preventDefault();
              go(r);
            }
          }
        }}
      />
      <ul id={`ql-${uid}`} className="sq-q-list" role="listbox" hidden={!shown}>
        {shown && all && !results.length ? (
          <li className="sq-empty" role="option" aria-disabled="true" aria-selected="false">{labels.empty}</li>
        ) : null}
        {shown
          ? results.map((r, i) => {
              const nat = [r.n, r.d].find((s) => s && CJK.test(s)) ?? r.n;
              const alt = nat !== r.n ? r.n : r.d && r.d !== r.n && !CJK.test(r.d) ? r.d : "";
              const g = /^\d/.test(nat) ? nat.match(/^\d+/)![0].slice(0, 3) : (nat.match(CJK) ?? [nat.trim()[0]])[0];
              const gl = CJK.test(g) ? (CC_LANG[r.c] ?? "en") : "en";
              return (
                <li key={r.i} id={`qo-${uid}-${i}`} role="option" aria-selected={i === active}>
                  <a href={hrefOf(r)} tabIndex={-1}>
                    <span className="sq-qg" lang={gl} aria-hidden="true">{g}</span>
                    <span className="sq-qn">
                      <span lang={CJK.test(nat) ? (CC_LANG[r.c] ?? "en") : "en"}>{nat}</span>
                      {alt ? <small lang="en">{alt}</small> : null}
                    </span>
                    <span className="sq-qs">{r.c} · {labels.status[r.s]}</span>
                  </a>
                </li>
              );
            })
          : null}
      </ul>
      <p className="sq-sr" role="status" aria-live="polite">
        {shown && all ? (results.length ? labels.hint.replace("{n}", String(results.length)) : labels.empty) : ""}
      </p>
    </div>
  );
}
