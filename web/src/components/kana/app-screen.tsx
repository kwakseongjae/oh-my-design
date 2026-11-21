import { MoaArt, MoaTabs, MoaTop } from "@/components/hangul/moa-screen";
import { APP_CANCEL, APP_PAIR, APP_SHARED, type AppKey, type AppSide } from "./app-copy";

/**
 * hangul's moa home screen in Japanese (app-copy.ts), for #app on /ko/kana. It borrows moa's chrome (status bar, app
 * bar, tab bar, art) and moa.css, and the fixed-chrome structure SplitView walks: `.moa--fixed` with `.moa-view`,
 * `.moa-scroll` and `.moa-focus`. Both sides are this one component with the same typesetting (`data-typo="ja"`,
 * kana-app.css); only `side` changes the strings. Every string that differs carries `data-k`, the tour's target.
 *
 * Nothing in it is interactive: the buttons, the field and the tabs are drawings, so a keyboard never stops on them.
 */
export function AppScreen({ side }: { side: AppSide }) {
  const s = APP_SHARED;
  const str = (k: AppKey) => APP_PAIR.get(k)![side];
  return (
    <div className="moa moa--fixed ka-screen" data-typo="ja" data-copy={side} lang="ja">
      <MoaTop app={s.app} />

      <div className="moa-view">
        <div className="moa-scroll">
          <div className="moa-hello">
            <p className="moa-hello-t" data-k="greeting">
              {str("greeting")}
            </p>
          </div>

          <div className="moa-card moa-balance">
            <p className="moa-label" data-k="total">
              {str("total")}
            </p>
            <p className="moa-amount">{s.amount}</p>
            <p className="moa-delta">
              {s.deltaLead} <b>{s.delta}</b>
            </p>
            <div className="moa-actions">
              <span className="moa-btn moa-btn--soft">{s.deposit}</span>
              <span className="moa-btn moa-btn--blue">{s.transfer}</span>
            </div>
          </div>

          <div className="moa-card moa-recent">
            <div className="ka-recent-top">
              <p className="moa-h">{s.recentH}</p>
              <p className="ka-link" data-k="seeAll">
                {str("seeAll")}
              </p>
            </div>
            <ul className="moa-people">
              {s.recent.map((n, i) => (
                <li key={n}>
                  <span className="moa-avatar" data-i={i} aria-hidden="true">
                    {n.slice(0, 1)}
                  </span>
                  <span className="moa-name">{n}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="moa-toast" data-k="toast">
            <MoaArt kind="sent" />
            <div className="moa-toast-in">
              <p className="moa-toast-t">{str("toast")}</p>
            </div>
          </div>

          <div className="moa-banner" data-k="banner">
            <div className="moa-banner-in">
              <p className="moa-banner-t">{str("banner")}</p>
            </div>
            <MoaArt kind="gift" />
          </div>

          <div className="moa-sheet">
            <span className="moa-grab" aria-hidden="true" />
            <p className="moa-sheet-t" data-k="sheetTitle">
              {str("sheetTitle")}
            </p>
            <div className="ka-field">
              <p className="ka-field-l">{s.amountLabel}</p>
              <p className="ka-input">{s.amountValue}</p>
              <p className="ka-err" data-k="error">
                {str("error")}
              </p>
              <p className="ka-help" data-k="helper">
                {str("helper")}
              </p>
            </div>
            <div className="moa-actions">
              <span className="moa-btn moa-btn--soft">{APP_CANCEL.text}</span>
              <span className="moa-btn moa-btn--blue" data-k="send">
                {str("send")}
              </span>
            </div>
          </div>
        </div>
      </div>

      <MoaTabs tabs={s.tabs} />
      <span className="moa-focus" aria-hidden="true" />
    </div>
  );
}
