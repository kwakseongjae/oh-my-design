import { SplitView } from "@/components/hangul/split-view";
import data from "@/data/kana-rules.generated.json";
import { APP_PAIRS, type AppSide } from "./app-copy";
import { AppScreen } from "./app-screen";
import type { KanaLocale } from "./copy";
import { KANA_KIT } from "./locale";
import { Mixed, PairLines, QuoteLine, SourceLink, type Example } from "./parts";
import { jaLead } from "./rule-lead";
import "@/components/hangul/hangul.css";
import "./kana-app.css";

/**
 * The moa pair: hangul's moa home screen in Japanese twice, in the forms the rules' sources tell you to avoid and in
 * the forms they recommend (app-copy.ts). It reuses hangul's SplitView: two phones on wide screens, one phone and a
 * switch on narrow ones, and a tour that stops on each string that differs, spotlights it on both phones and lights its
 * rule between them. Each rule also has a card with the source's own example (or, where the rule has no wrong/right
 * pair, its leading quote); the tour shows the card of the rule it lights (split-view.tsx lights [data-tour-card]).
 *
 * `tone` is the ground: "night" on /ko/kana's first screen, "day" in /ja/kana's second section (kana-app.css).
 */

const RULE = new Map(data.rules.map((r) => [r.id, r]));

function Phone({ side }: { side: AppSide }) {
  return (
    <div className="hg-phone">
      <div className="hg-phone-screen">
        <AppScreen side={side} />
      </div>
    </div>
  );
}

/** The source behind a tag: the example app-copy.ts names, or the rule's leading quote. */
function TagSource({ rule, example, locale }: { rule: string; example?: number; locale: KanaLocale }) {
  const r = RULE.get(rule)!;
  if (example !== undefined) {
    const e = (r.examples as Example[])[example];
    return (
      <>
        <PairLines e={e} locale={locale} />
        <SourceLink k={e.key} locale={locale} />
      </>
    );
  }
  const q = locale === "ja" ? (jaLead(rule)?.quote ?? r.quotes[0]) : r.quotes[0];
  return (
    <>
      <QuoteLine q={q} />
      <SourceLink k={q.key} locale={locale} />
    </>
  );
}

export function AppPair({ locale, tone }: { locale: KanaLocale; tone: "night" | "day" }) {
  const { t } = KANA_KIT[locale];
  return (
    <div className={`km-pair km-pair--${tone}`}>
      <SplitView
        variant="hero"
        labels={t.app.sides}
        before={<Phone side="ai" />}
        after={<Phone side="fix" />}
        tour={APP_PAIRS.map((p) => ({ target: `[data-k="${p.key}"]`, rule: p.rule, label: `${p.rule} ${t.app.tags[p.rule]}` }))}
        between={
          <div className="km-mid">
            <ol className="hg-tags km-tags" aria-label={t.app.tagsLabel}>
              {APP_PAIRS.map((p) => (
                <li key={p.key} className="hg-tag km-tag" data-rule={p.rule}>
                  <a className="km-tag-id" href={`#${p.rule.toLowerCase()}`} lang="en">
                    {p.rule}
                  </a>{" "}
                  <Mixed text={t.app.tags[p.rule]} />
                </li>
              ))}
            </ol>
            <div className="km-tagqs">
              {APP_PAIRS.map((p) => (
                <div key={p.key} className="km-tagq" data-rule={p.rule} data-tour-card="">
                  <p className="km-tagq-h">
                    <span lang="en">{p.rule}</span> {t.app.srcHead}
                  </p>
                  <TagSource rule={p.rule} example={p.example} locale={locale} />
                </div>
              ))}
            </div>
          </div>
        }
      />
    </div>
  );
}
