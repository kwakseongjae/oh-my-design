/**
 * The Korean page's answer-first summary, built only from values the page
 * records (primary colour, type, radius).
 *
 * No reference carries Korean prose to summarise: the Hangul inside the
 * canonical files is captured UI text ("기업용 상품권 구매하기"), and the editorial
 * summaries are English-only. So this is a data sentence, not a translation of
 * the English summary and not a description of the brand. A value the reference
 * does not record is left out of the sentence (unknown means absent).
 *
 * Round 11 (#20): the second sentence ("값 N개 모두에 출처가 붙어 있어요") is gone
 * from the page, and so from the meta description that repeats this summary.
 *
 * Every label noun ends in a final consonant (색상·글꼴·반경), so the subject
 * particle is always 이 whatever the value is.
 */

export interface KoSummaryInput {
  primary?: string;
  fontFamily?: string;
  mono?: string;
  radius?: string;
}

/** "{표시명} DESIGN.md — 색상·타이포그래피·컴포넌트" (owner decision 3, 2026-10-20). */
export function koDetailTitle(name: string): string {
  return `${name} DESIGN.md — 색상·타이포그래피·컴포넌트`;
}

const clean = (v: string | undefined) => (v ?? "").replace(/\s+/g, " ").trim();

export function koSummary(name: string, d: KoSummaryInput): string {
  const facts = [
    clean(d.primary) ? `대표 색상(${clean(d.primary)})` : null,
    clean(d.fontFamily) ? `글꼴(${clean(d.fontFamily)})` : null,
    clean(d.mono) ? `코드 글꼴(${clean(d.mono)})` : null,
    clean(d.radius) ? `모서리 반경(${clean(d.radius)})` : null,
  ].filter((s): s is string => !!s);
  return facts.length ? `${name} DESIGN.md에는 ${facts.join(", ")}이 기록돼 있어요.` : "";
}

/** Meta description: the visible summary plus what the page lets you do. */
export function koDescription(name: string, summary: string): string {
  const tail = "영어 원문 그대로 복사하거나 내려받을 수 있어요.";
  return summary ? `${summary} ${tail}` : `${name} DESIGN.md예요. ${tail}`;
}
