import data from "@/data/kana-rules.generated.json";

/**
 * Which of a rule's quotes leads its card on /ja/kana. The Korean page heads each card with our Korean reading of the
 * rule (copy.ts RULE_KO); the Japanese page writes no such reading. It heads the card with the source's own sentence
 * when one of the rule's quotes can stand as the rule's statement, and otherwise with the rule as writing-rules.md
 * states it, in English, labelled as ours (not a quote).
 *
 * The choice is a model's judgment (Claude Opus 5.5, 2026-11-23), not a native reader's: a native reader should look
 * at it first. 43 rules lead with a Japanese quote, 3 with Microsoft's English one (the only language it gives them
 * in), and 5 lead with none (NO_LEAD below).
 */

type Quote = { key: string; text: string; via?: string; label?: string; lang?: string };
type Rule = (typeof data.rules)[number];

/** The rules whose best statement is not their first quote: the index of the quote that leads. */
export const LEAD_INDEX: Readonly<Record<string, number>> = {
  // the first quote says what goes wrong; the second states the rule
  "KW-20": 1,
  // the first quote asks for a dialog; Ubie's says to ask with a question, the rule's lead
  "KW-63": 5,
  // the first quote is the general aim; the second names the count and the outcome, the rule itself
  "KW-64": 1,
};

/** The rules none of whose quotes states the rule: the card shows the quotes in their order under the English rule. */
export const NO_LEAD: Readonly<Record<string, string>> = {
  "KW-04": "the quote has no subject: it is Mozilla's checkbox section, but the sentence does not say checkbox",
  "KW-31": "the quotes are items of the suffix list, not the statement that the list is fixed",
  "KW-54": "the quote covers SmartHR's 件 only; WordPress's no-space half is in the examples alone",
  "KW-57": "the quote is one case (ダミー), not the general statement",
  "KW-66": "the first quote is a fragment without its condition",
};

const RULE = new Map(data.rules.map((r) => [r.id, r]));

/** The quote that leads the rule's card on the Japanese page and its index in the rule's quotes, or null. With
 *  `prefer`, the first unlabelled quote from that source key leads instead, when the rule has one. */
export function jaLead(r: Rule | string, prefer?: string): { quote: Quote; index: number } | null {
  const rule = typeof r === "string" ? RULE.get(r) : r;
  if (!rule || rule.id in NO_LEAD) return null;
  const preferred = prefer ? (rule.quotes as Quote[]).findIndex((q) => q.key === prefer && !q.label) : -1;
  const index = preferred > -1 ? preferred : (LEAD_INDEX[rule.id] ?? 0);
  const quote = (rule.quotes as Quote[])[index];
  return quote && !quote.label ? { quote, index } : null;
}
