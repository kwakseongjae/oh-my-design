import { Fragment } from "react";
import data from "@/data/kana-rules.generated.json";
import { RULE_KO, type KanaLocale } from "./copy";
import { KANA_KIT } from "./locale";
import { jaLead } from "./rule-lead";

/** Pieces the rule cards (kana-page.tsx), the comparison (compare.tsx) and the app screen's tags (app.tsx) set the same way. */

const SOURCE = new Map(data.sources.map((s) => [s.key, s]));
const RULE = new Map(data.rules.map((r) => [r.id, r]));

/** kana, CJK ideographs and punctuation, full-width forms: a Japanese run inside Korean or English copy */
const JA_RUN = /([\u3000-\u303f\u3040-\u30ff\u31f0-\u31ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff00-\uffef]+)/;

/** Korean (or English) copy with its Japanese words marked lang="ja" (they wrap and are set as Japanese). */
export function Mixed({ text }: { text: string }) {
  return (
    <>
      {text.split(JA_RUN).map((part, i) =>
        i % 2 ? (
          <span key={i} lang="ja">
            {part}
          </span>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}

/** A quoted string as the file gives it, in the page's own corner brackets (an English quote, Microsoft's, in curly
 *  quotes); its `code` marks (writing-rules.md's Markdown) set as code. */
export function Ja({ text, en = false }: { text: string; en?: boolean }) {
  return (
    <>
      <span className="kn-qm">{en ? "\u201C" : "\u300C"}</span>
      {text.split("`").map((part, i) =>
        i % 2 ? (
          <code key={i} className="kn-code">
            {part}
          </code>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
      <span className="kn-qm">{en ? "\u201D" : "\u300D"}</span>
    </>
  );
}

/** The source a quote or example comes from: the md's English page name, linked; a key with no URL (JTF) is named, not linked. */
export function SourceLink({ k, locale = "ko" }: { k: string; locale?: KanaLocale }) {
  const { t, orgs } = KANA_KIT[locale];
  const s = SOURCE.get(k);
  return (
    <span className="kn-src">
      {s ? (
        <a href={s.url} target="_blank" rel="noopener noreferrer" lang="en" aria-label={`${s.name}${t.paren[0]}${t.rules.newTab}${t.paren[1]}`}>
          {s.name}
          <span aria-hidden="true"> ↗</span>
        </a>
      ) : (
        <span>{orgs.find((o) => o.prefix === k)?.name ?? k}</span>
      )}
    </span>
  );
}

/**
 * A rule in one line, where #app's tags and #compare's captions name it: our Korean reading on the Korean page; on the
 * Japanese page the quote that leads its card (rule-lead.ts), or else writing-rules.md's English rule. `prefer` names a
 * source key whose quote should lead instead, where there is one: a #compare caption names its example's source, so
 * the sentence above it comes from the same page.
 */
export function RuleLine({ id, locale = "ko", prefer }: { id: string; locale?: KanaLocale; prefer?: string }) {
  if (locale === "ko") return <Mixed text={RULE_KO[id]} />;
  const lead = jaLead(id, prefer);
  if (lead) {
    const en = lead.quote.lang === "en";
    return (
      <span lang={en ? "en" : "ja"}>
        <Ja text={lead.quote.text} en={en} />
      </span>
    );
  }
  return (
    <span lang="en">
      <Mixed text={RULE.get(id)!.rule} />
    </span>
  );
}

/** The same line as plain text, for the app tour's status line. */
export function ruleLineText(id: string, locale: KanaLocale = "ko"): string {
  if (locale === "ko") return RULE_KO[id];
  const lead = jaLead(id);
  if (!lead) return RULE.get(id)!.rule;
  return lead.quote.lang === "en" ? `\u201C${lead.quote.text}\u201D` : `\u300C${lead.quote.text.replace(/`/g, "")}\u300D`;
}
