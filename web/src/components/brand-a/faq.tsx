"use client";

import { useId, useMemo, useState, type ReactNode } from "react";
import type { FaqCat, R10Copy } from "./copy/r10";

/**
 * Round 10 FAQ (#faq): A's category list with counts on the left, an animated accordion on the
 * right (grid-rows 0fr → 1fr, 0.32 s; none with reduced motion), and B's search on top, which
 * filters by question and answer text. Answers arrive as server-rendered nodes (rich.tsx), and
 * closed panels stay in the DOM, so every answer is in the page source whatever is open. The selected
 * category is the section's one violet state.
 */
export interface FaqItem { cat: FaqCat; q: string; text: string; answer: ReactNode }

const norm = (s: string) => s.toLowerCase().normalize("NFKC");

export function Faq({ t, items, issuesHref, head }: { t: R10Copy["faq"]; items: FaqItem[]; issuesHref: string; head: ReactNode }) {
  const [cat, setCat] = useState<"all" | FaqCat>("all");
  const [q, setQ] = useState("");
  const [open, setOpen] = useState<number | null>(0);
  const id = useId();
  const cats = ["all", "basics", "use", "cost"] as const;
  const count = (c: (typeof cats)[number]) => (c === "all" ? items.length : items.filter((x) => x.cat === c).length);
  const shown = useMemo(() => {
    const n = norm(q.trim());
    return items.map((x, i) => ({ x, i })).filter(({ x }) => (cat === "all" || x.cat === cat) && (!n || norm(`${x.q} ${x.text}`).includes(n)));
  }, [items, cat, q]);

  return (
    <div className="sq-faq-g">
      <div className="sq-faq-side">
        {head}
        <label className="sq-fsearch">
          <span className="sq-sr">{t.searchLabel}</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
          <input type="search" value={q} placeholder={t.search} onChange={(e) => setQ(e.target.value)} aria-controls={`${id}-list`} />
        </label>
        <div className="sq-cats" role="group" aria-label={t.catsLabel}>
          {cats.map((c) => (
            <button key={c} type="button" aria-pressed={cat === c} onClick={() => setCat(c)}>
              {t.cats[c]} <span>{count(c)}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="sq-acc" id={`${id}-list`}>
        {shown.map(({ x, i }) => {
          const on = open === i;
          return (
            <div key={i} className={`sq-acc-i${on ? " sq-on" : ""}`}>
              <h3>
                <button type="button" className="sq-acc-b" aria-expanded={on} aria-controls={`${id}-a${i}`} id={`${id}-q${i}`} onClick={() => setOpen(on ? null : i)}>
                  <span>{x.q}</span>
                  <span className="sq-acc-ic" aria-hidden="true" />
                </button>
              </h3>
              <div className="sq-acc-p" id={`${id}-a${i}`} role="region" aria-labelledby={`${id}-q${i}`} inert={!on}>
                <div><p>{x.answer}</p></div>
              </div>
            </div>
          );
        })}
        {shown.length ? null : (
          <p className="sq-faq-empty" role="status">
            {t.empty} <a href={issuesHref}>{t.issues}</a>
          </p>
        )}
      </div>
    </div>
  );
}
