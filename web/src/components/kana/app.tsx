import { SplitView } from "@/components/hangul/split-view";
import { APP_PAIRS, type AppSide } from "./app-copy";
import { AppScreen } from "./app-screen";
import { KANA_COPY, RULE_KO } from "./copy";
import { Mixed } from "./parts";
import "@/components/hangul/hangul.css";
import "./kana-app.css";

/**
 * #app on /ko/kana (owner 2026-11-22: "별도의 앱 화면같은걸 만들어줘 모아같이"): one whole app screen, hangul's moa in
 * Japanese, without the rules and with them, before #compare's single pairs. It reuses hangul's SplitView unchanged:
 * two phones on wide screens, one phone and a switch on narrow ones, and a tour that stops on each string that differs,
 * spotlights it on both phones and lights its rule in the middle column. The Japanese is ours (app-copy.ts), and the
 * section says so in a line that always renders above the phones.
 */

const t = KANA_COPY.app;

function Phone({ side }: { side: AppSide }) {
  return (
    <div className="hg-phone">
      <div className="hg-phone-screen">
        <AppScreen side={side} />
      </div>
    </div>
  );
}

export function KanaApp() {
  return (
    <section id="app" className="kn-sec kn-sec--band ka-sec" aria-labelledby="kn-app-h">
      <div className="sq-wrap">
        <h2 id="kn-app-h" className="kn-h2">
          {t.h2}
        </h2>
        <p className="kn-intro">{t.intro}</p>
        <p className="ka-composed">{t.composed}</p>
        <SplitView
          variant="hero"
          labels={t.sides}
          before={<Phone side="ai" />}
          after={<Phone side="fix" />}
          tour={APP_PAIRS.map((p) => ({ target: `[data-k="${p.key}"]`, rule: p.rule, label: `${p.rule} ${RULE_KO[p.rule]}` }))}
          between={
            <ol className="hg-tags ka-tags" aria-label={t.tagsLabel}>
              {APP_PAIRS.map((p) => (
                <li key={p.key} className="hg-tag ka-tag" data-rule={p.rule}>
                  <a className="ka-tag-id" href={`#${p.rule.toLowerCase()}`} lang="en" aria-label={`${p.rule} (${t.toCard})`}>
                    {p.rule}
                  </a>
                  <span className="ka-tag-t">
                    <Mixed text={RULE_KO[p.rule]} />
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
