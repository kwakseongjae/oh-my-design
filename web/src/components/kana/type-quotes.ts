/**
 * The typography part of the kana pages' 組版 chapter: three rules from docs/drafts/kana/references/rules.md (JT-01,
 * JT-05, JT-13) with the one sentence of each that the page quotes, and the measured values the chapter cites.
 *
 * The quotes had not had the character check the writing rules' quotes had on 2026-11-21. On 2026-11-24 each was
 * fetched from its source page and found, character for character, in the page's text with its markup taken out
 * (DADS sets letter-spacing, 0, 1% … in <code>): scripts/lang/check-type-quotes.mjs, which reads this file. A quote
 * that stops matching is taken off the page, not reworded. The page tests also hold that each quote is in rules.md.
 *
 * The measured values are copied from docs/drafts/kana/references/measured-jp.md (77 Japanese home pages, 2026-11-12)
 * and skills/hangul/references/measured-67.md (Korean services); the page test reads both files for them.
 */

export interface TypeQuote {
  readonly id: "JT-01" | "JT-05" | "JT-13";
  readonly lang: "ja" | "en";
  readonly text: string;
  readonly source: { readonly name: string; readonly url: string };
  /** the document status of the source, in the skill's own words */
  readonly standing: "government design system" | "W3C Candidate Recommendation Draft";
  readonly checked: string;
}

export const TYPE_QUOTES: readonly TypeQuote[] = [
  {
    id: "JT-13",
    lang: "en",
    text: "In this style, sequences of CJK characters do not break.",
    source: { name: "CSS Text Module Level 3, word-break: keep-all", url: "https://www.w3.org/TR/css-text-3/#valdef-word-break-keep-all" },
    standing: "W3C Candidate Recommendation Draft",
    checked: "2026-11-24",
  },
  {
    id: "JT-05",
    lang: "ja",
    text: "文字間隔（letter-spacing）はフォントサイズの大小に応じて、0、1%（0.01em）、2%（0.02em）に指定されています。",
    source: { name: "DADS, Typography", url: "https://design.digital.go.jp/dads/foundations/typography/" },
    standing: "government design system",
    checked: "2026-11-24",
  },
  {
    id: "JT-01",
    lang: "ja",
    text: "読み物コンテンツにおける本文テキストの行ボックスの高さ（行高）はフォントサイズに対して少なくとも1.5倍を維持することを推奨します。",
    source: { name: "DADS, Typography", url: "https://design.digital.go.jp/dads/foundations/typography/" },
    standing: "government design system",
    checked: "2026-11-24",
  },
];

export const TYPE_QUOTE = new Map(TYPE_QUOTES.map((q) => [q.id, q]));

/** The values the chapter's notes cite, each with the line of its source file that states it. */
export const TYPE_MEASURED = {
  ja: {
    file: "docs/drafts/kana/references/measured-jp.md",
    measuredOn: "2026-11-12",
    services: 77,
    /** "heading letter-spacing is negative: 2 / 77" */
    headingNegative: 2,
    /** "word-break: keep-all on 10% of the text or more: 2 / 77" */
    keepAll: 2,
    /** "paragraph line-height … n 57 … median 1.7" */
    paragraphServices: 57,
    paragraphMedian: 1.7,
  },
  ko: {
    file: "skills/hangul/references/measured-67.md",
    /** headings: "23/65 negative" */
    headings: 65,
    headingNegative: 23,
  },
} as const;
