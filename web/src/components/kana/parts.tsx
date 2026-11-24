import { Fragment } from "react";
import data from "@/data/kana-rules.generated.json";
import { RULE_KO, type KanaLocale } from "./copy";
import { KANA_KIT } from "./locale";
import { jaLead } from "./rule-lead";

/** Pieces both kana pages set the same way: Japanese runs, quotes, source links, a rule in one line, example pairs. */

type Quote = { key: string; text: string; via?: string; label?: string; lang?: string };
export type Example = { key: string; via?: string; sides: { role: string; label: string | null; texts: string[] }[] };
type Tier = { tier: string; of4?: number };

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
          <Fragment key={i}>{en ? <Mixed text={part} /> : part}</Fragment>
        ),
      )}
      <span className="kn-qm">{en ? "\u201D" : "\u300D"}</span>
    </>
  );
}

/** One quote, as a line: the sentence in its own language and brackets. */
export function QuoteLine({ q, className = "km-q" }: { q: { text: string; lang?: string }; className?: string }) {
  const en = q.lang === "en";
  return (
    <p className={className} lang={en ? "en" : "ja"}>
      <span className="kn-qtext">
        <Ja text={q.text} en={en} />
      </span>
    </p>
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

/** A source's wrong/right (or given) example, one line per side: the source's own label, then its texts. */
export function PairLines({ e, locale = "ko", only }: { e: Example; locale?: KanaLocale; only?: "wrong" | "right" }) {
  const { t } = KANA_KIT[locale];
  return (
    <>
      {e.sides
        .filter((s) => !only || s.role === only)
        .map((s, i) => (
          <p key={i} className={`km-pl km-pl--${s.role}`}>
            <span className="km-pl-l" lang={s.label ? (/^[A-Za-z'+−]+$/.test(s.label) ? "en" : "ja") : locale}>
              {s.label ?? (s.role === "given" ? t.rules.given : s.role === "wrong" ? t.rules.before : t.rules.after)}
            </span>
            <span className="km-pl-t" lang="ja">
              {s.texts.map((x, j) => (
                <span key={j} className="kn-qtext">
                  <Ja text={x} />
                </span>
              ))}
            </span>
          </p>
        ))}
    </>
  );
}

/** Which sources say the same thing, as one line of text (the index) or a list (the rule cards). */
export function tierText(x: Tier, locale: KanaLocale): string {
  const { t } = KANA_KIT[locale];
  return x.tier === "law"
    ? t.tiers.law
    : x.tier === "government"
      ? t.tiers.government
      : x.tier === "company"
        ? t.tiers.company(x.of4 ?? 1)
        : x.tier === "translation"
          ? t.tiers.translation
          : t.tiers.optim;
}

export function Tiers({ tiers, locale }: { tiers: readonly Tier[]; locale: KanaLocale }) {
  const { t } = KANA_KIT[locale];
  return (
    <ul className="kn-tiers" aria-label={t.tiers.label}>
      {tiers.map((x, i) => (
        <li key={i} className={x.tier === "optim-not-counted" ? "kn-tier kn-tier--muted" : "kn-tier"}>
          {tierText(x, locale)}
        </li>
      ))}
    </ul>
  );
}

/**
 * A rule in one line: our Korean reading on the Korean pages; on the Japanese pages the quote that leads its card
 * (rule-lead.ts), or else writing-rules.md's English rule. `prefer` names a source key whose quote should lead instead,
 * where there is one: a caption that names its example's source shows that source's sentence above it.
 */
export function RuleLine({ id, locale = "ko", prefer }: { id: string; locale?: KanaLocale; prefer?: string }) {
  if (locale === "ko") return <Mixed text={RULE_KO[id]} />;
  const lead = jaLead(id, prefer);
  if (lead) {
    const en = lead.quote.lang === "en";
    return (
      <span lang={en ? "en" : "ja"} className="kn-qtext">
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

/** The quote objects a rule's line already shows on the Japanese pages, so a list under it can leave that one out. */
export function leadIndex(id: string, locale: KanaLocale): number {
  return locale === "ja" ? (jaLead(id)?.index ?? -1) : -1;
}

export type { Quote };
