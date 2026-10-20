/**
 * BM25 over the build-time chunks (src/data/ask-index.generated.json) for /api/ask.
 * First stage is lexical (docs/REDESIGN_R11_PLAN_2026-10-20.md W4); embeddings come later.
 *
 * Locale: a page in locale L searches chunks written in L, the locale-neutral reference
 * metadata, and English at a discount, so a Korean question finds the Korean docs first and
 * still reaches an English-only passage. Chinese text and queries split Han runs at function
 * characters (tokenize.ts). Two passages from the same group (the same FAQ answer or docs
 * section in two languages) never both make the top k.
 *
 * References: a short FAQ answer that repeats the question's words outscores every archive
 * entry, so "일본 회사 레퍼런스도 있나요?" would cite only the FAQ. When the question names a
 * brand, a country or a specific category (the index's `intent` words), entries that clear their
 * own floor keep up to two of the k slots. Verified entries rank slightly ahead of partial and
 * legacy ones.
 */
import type { SiteLocale } from "@/lib/i18n/site-locales";
import type { AskChunk } from "./chunk";
import { queryTerms, tokenize } from "./tokenize";

export const TOP_K = 6;
const K1 = 1.2;
const B = 0.75;
/** English passages on a non-English page. */
const EN_FALLBACK = 0.6;
/** Passages under this share of the best score are noise for the prompt. */
const RELATIVE_FLOOR = 0.25;
/**
 * A reference needs half the best reference's score. Unless the question is about companies,
 * it also needs this share of the best score overall: katakana bigrams collide
 * (エストニア and インストール share スト), and an archive entry that only collides is noise.
 */
const REF_FLOOR = 0.35;
const MIN_REFS = 2;
const TIER_PRIOR = { v: 1.15, p: 1, l: 0.9 } as const;

export interface AskHit {
  chunk: AskChunk;
  score: number;
  /** The link for this page's locale (the Korean item page on /ko when one exists). */
  url: string;
}

export interface AskRetriever {
  readonly size: number;
  search(query: string, locale: SiteLocale, k?: number): AskHit[];
}

function localeWeight(loc: AskChunk["loc"], page: SiteLocale): number {
  if (loc === "*" || loc === page) return 1;
  if (loc === "en") return EN_FALLBACK;
  return 0;
}

/** What gets indexed: the title twice (the passage's own summary), the text, the keywords. */
function indexText(c: AskChunk): string {
  // "Toss DESIGN.md": every reference title ends the same way, which says nothing about it
  const title = c.src === "ref" ? c.title.replace(/\s*DESIGN\.md$/i, "") : c.title;
  return `${title}\n${title}\n${c.text}\n${c.kw ?? ""}`;
}

/** Each entry's tokens, per tokenizer mode; an entry fires only when all of them are in the query. */
function intentEntries(intent: readonly string[], zh: boolean): string[][] {
  const out: string[][] = [];
  for (const w of intent) {
    const terms = [...new Set(tokenize(w, { zh }))];
    if (terms.length) out.push(terms);
  }
  return out;
}

export function createRetriever(chunks: readonly AskChunk[], intent: readonly string[] = []): AskRetriever {
  const intentByMode = { zh: intentEntries(intent, true), other: intentEntries(intent, false) };
  const n = chunks.length;
  const lengths = new Float64Array(n);
  // term → flat [docIndex, tf, docIndex, tf, …]
  const postings = new Map<string, number[]>();
  let total = 0;
  chunks.forEach((c, i) => {
    const terms = tokenize(indexText(c), { zh: c.loc === "zh-tw" });
    lengths[i] = terms.length;
    total += terms.length;
    const tf = new Map<string, number>();
    for (const t of terms) tf.set(t, (tf.get(t) ?? 0) + 1);
    for (const [t, f] of tf) {
      let p = postings.get(t);
      if (!p) postings.set(t, (p = []));
      p.push(i, f);
    }
  });
  const avg = n ? total / n : 1;

  return {
    size: n,
    search(query, locale, k = TOP_K) {
      const terms = queryTerms(query, { zh: locale === "zh-tw" });
      if (!terms.size || !n) return [];
      const scores = new Float64Array(n);
      const entries = locale === "zh-tw" ? intentByMode.zh : intentByMode.other;
      const aboutCompanies = entries.some((e) => e.every((t) => terms.has(t)));
      for (const [t, w] of terms) {
        const p = postings.get(t);
        if (!p) continue;
        const df = p.length / 2;
        const idf = Math.log(1 + (n - df + 0.5) / (df + 0.5));
        for (let j = 0; j < p.length; j += 2) {
          const d = p[j];
          const f = p[j + 1];
          scores[d] += (w * idf * (f * (K1 + 1))) / (f + K1 * (1 - B + (B * lengths[d]) / avg));
        }
      }

      const ranked: { i: number; s: number }[] = [];
      for (let i = 0; i < n; i++) {
        if (scores[i] <= 0) continue;
        const c = chunks[i];
        const s = scores[i] * localeWeight(c.loc, locale) * (c.tier ? TIER_PRIOR[c.tier] : 1);
        if (s > 0) ranked.push({ i, s });
      }
      if (!ranked.length) return [];
      ranked.sort((a, b) => b.s - a.s || a.i - b.i);

      // one passage per group, best first
      const seen = new Set<string>();
      const unique = ranked.filter(({ i }) => !seen.has(chunks[i].group) && seen.add(chunks[i].group));
      const top = unique[0].s;
      const topRef = unique.find(({ i }) => chunks[i].src === "ref")?.s ?? 0;
      const passes = ({ i, s }: { i: number; s: number }) =>
        chunks[i].src === "ref"
          ? s >= 0.5 * topRef && (aboutCompanies || s >= REF_FLOOR * top)
          : s >= RELATIVE_FLOOR * top;
      const eligible = unique.filter(passes);

      let picked = eligible.slice(0, k);
      const refs = eligible.filter(({ i }) => chunks[i].src === "ref");
      const want = aboutCompanies ? Math.min(MIN_REFS, refs.length, k) : 0;
      const have = picked.filter(({ i }) => chunks[i].src === "ref").length;
      if (have < want) {
        const extra = refs.filter((h) => !picked.includes(h)).slice(0, want - have);
        const keptRefs = picked.filter(({ i }) => chunks[i].src === "ref");
        const others = picked.filter(({ i }) => chunks[i].src !== "ref").slice(0, k - keptRefs.length - extra.length);
        picked = [...others, ...keptRefs, ...extra].sort((a, b) => b.s - a.s || a.i - b.i);
      }

      return picked.map(({ i, s }) => {
        const c = chunks[i];
        return { chunk: c, score: s, url: locale === "ko" && c.urlKo ? c.urlKo : c.url };
      });
    },
  };
}
