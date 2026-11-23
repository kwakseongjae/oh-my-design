import { SplitView } from "@/components/hangul/split-view";
import { APP_PAIRS, type AppSide } from "./app-copy";
import { AppScreen } from "./app-screen";
import type { KanaLocale } from "./copy";
import { KANA_KIT } from "./locale";
import { RuleLine, ruleLineText } from "./parts";
import "@/components/hangul/hangul.css";
import "./kana-app.css";

/**
 * #app on /ko/kana (owner 2026-11-22: "별도의 앱 화면같은걸 만들어줘 모아같이"): one whole app screen, hangul's moa in
 * Japanese, without the rules and with them, before #compare's single pairs. It reuses hangul's SplitView unchanged:
 * two phones on wide screens, one phone and a switch on narrow ones, and a tour that stops on each string that differs,
 * spotlights it on both phones and lights its rule in the middle column. The Japanese is ours (app-copy.ts), and the
 * section says so in a line that always renders above the phones. The Japanese edition reuses the screen unchanged
 * and names each rule by the quote that leads its card (parts.tsx RuleLine) instead of a Korean reading.
 */

function Phone({ side }: { side: AppSide }) {
  return (
    <div className="hg-phone">
      <div className="hg-phone-screen">
        <AppScreen side={side} />
      </div>
    </div>
  );
}

export function KanaApp({ locale = "ko" }: { locale?: KanaLocale }) {
  const { t: all } = KANA_KIT[locale];
  const t = all.app;
  return (
    <section id="app" className="kn-sec kn-sec--band ka-sec" aria-labelledby="kn-app-h">
      <div className="sq-wrap">
        <h2 id="kn-app-h" className="kn-h2">
          {t.h2}
        </h2>
        {t.intro ? <p className="kn-intro">{t.intro}</p> : null}
        <p className="ka-composed">{t.composed}</p>
        <SplitView
          variant="hero"
          labels={t.sides}
          before={<Phone side="ai" />}
          after={<Phone side="fix" />}
          tour={APP_PAIRS.map((p) => ({ target: `[data-k="${p.key}"]`, rule: p.rule, label: `${p.rule} ${ruleLineText(p.rule, locale)}` }))}
          between={
            <ol className="hg-tags ka-tags" aria-label={t.tagsLabel}>
              {APP_PAIRS.map((p) => (
                <li key={p.key} className="hg-tag ka-tag" data-rule={p.rule}>
                  <a className="ka-tag-id" href={`#${p.rule.toLowerCase()}`} lang="en" aria-label={`${p.rule}${all.paren[0]}${t.toCard}${all.paren[1]}`}>
                    {p.rule}
                  </a>
                  <span className="ka-tag-t">
                    <RuleLine id={p.rule} locale={locale} />
                  </span>
                </li>
              ))}
            </ol>
          }
        />
      </div>
    </section>
  );
}
