/**
 * A non-English item page's answer-first summary, title and meta description, built
 * only from values the page records (primary colour, type, radius).
 *
 * No reference carries Korean or Japanese prose to summarise: the Hangul or kana
 * inside the canonical files is captured UI text, and the editorial summaries are
 * English-only. So this is a data sentence, not a translation of the English summary
 * and not a description of the brand. A value the reference does not record is left
 * out of the sentence (unknown means absent).
 *
 * Round 11 (#20): the second sentence ("값 N개 모두에 출처가 붙어 있어요") is gone
 * from the page, and so from the meta description that repeats this summary.
 * Round 13: the summary is no longer printed on the page; it is the meta / OG /
 * JSON-LD description.
 */

import type { DetailLocale } from "./detail-locales";

export interface SummaryInput {
  primary?: string;
  fontFamily?: string;
  mono?: string;
  radius?: string;
}

/** The recorded values, in the order the sentence names them. */
const FACT_ORDER = ["primary", "fontFamily", "mono", "radius"] as const;

interface DetailWording {
  /** Each recorded value, wrapped in its label. */
  fact: Record<(typeof FACT_ORDER)[number], (value: string) => string>;
  /** The sentence around the facts (at least one). */
  sentence: (name: string, facts: readonly string[]) => string;
  /** What the page lets you do; ends the meta description. */
  tail: string;
  /** The description when nothing is recorded. */
  bare: (name: string) => string;
  /** How the summary and the tail join. */
  join: string;
  title: (name: string) => string;
  /** The title of an id outside the edition. */
  notFound: string;
}

const WORDING: Readonly<Record<DetailLocale, DetailWording>> = {
  // Every label noun ends in a final consonant (색상·글꼴·반경), so the subject
  // particle is always 이 whatever the value is.
  ko: {
    fact: {
      primary: (v) => `대표 색상(${v})`,
      fontFamily: (v) => `글꼴(${v})`,
      mono: (v) => `코드 글꼴(${v})`,
      radius: (v) => `모서리 반경(${v})`,
    },
    sentence: (name, facts) => `${name} DESIGN.md에는 ${facts.join(", ")}이 기록돼 있어요.`,
    tail: "영어 원문 그대로 복사하거나 내려받을 수 있어요.",
    bare: (name) => `${name} DESIGN.md예요.`,
    join: " ",
    // "{표시명} DESIGN.md — 색상·타이포그래피·컴포넌트" (owner decision 3, 2026-10-20).
    title: (name) => `${name} DESIGN.md — 색상·타이포그래피·컴포넌트`,
    notFound: "레퍼런스를 찾을 수 없어요",
  },
  // です・ます; full-width brackets and 、 in the sentence, no typed space between
  // Japanese and Latin text, and none between Japanese sentences.
  ja: {
    fact: {
      primary: (v) => `代表色（${v}）`,
      fontFamily: (v) => `書体（${v}）`,
      mono: (v) => `コード用の書体（${v}）`,
      radius: (v) => `角丸（${v}）`,
    },
    sentence: (name, facts) => `${name}のDESIGN.mdには、${facts.join("、")}が記録されています。`,
    tail: "英語の原文のまま、コピーまたはダウンロードできます。",
    bare: (name) => `${name}のDESIGN.mdです。`,
    join: "",
    title: (name) => `${name}のデザインシステム（DESIGN.md）`,
    notFound: "リファレンスが見つかりません",
  },
};

const clean = (v: string | undefined) => (v ?? "").replace(/\s+/g, " ").trim();

export function detailSummary(locale: DetailLocale, name: string, d: SummaryInput): string {
  const w = WORDING[locale];
  const facts = FACT_ORDER.flatMap((k) => (clean(d[k]) ? [w.fact[k](clean(d[k]))] : []));
  return facts.length ? w.sentence(name, facts) : "";
}

/** Meta description: the summary plus what the page lets you do. */
export function detailDescription(locale: DetailLocale, name: string, summary: string): string {
  const w = WORDING[locale];
  return summary ? `${summary}${w.join}${w.tail}` : `${w.bare(name)}${w.join}${w.tail}`;
}

export function detailTitle(locale: DetailLocale, name: string): string {
  return WORDING[locale].title(name);
}

export function detailNotFoundTitle(locale: DetailLocale): string {
  return WORDING[locale].notFound;
}
