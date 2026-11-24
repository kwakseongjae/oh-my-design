import { MoaArt, MoaTabs, MoaTop } from "@/components/hangul/moa-screen";
import type { ReactNode } from "react";
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

/** One string of a side, marked on the side that breaks the rule (the chapters set a wavy line under it). */
function Str({ k, side }: { k: AppKey; side: AppSide }) {
  const s = APP_PAIR.get(k)![side];
  return side === "ai" ? <span className="moa-wavy">{s}</span> : <>{s}</>;
}

/** A rule's id beside the string it explains, on both sides (hangul's chips). */
function Chip({ id, side }: { id: string; side: AppSide }) {
  return (
    <span className="moa-chip" data-tone={side === "ai" ? "before" : undefined} lang="en">
      {id}
    </span>
  );
}

function Crop({ side, children }: { side: AppSide; children: ReactNode }) {
  return (
    <div className="moa ka-screen km-crop" data-typo="ja" data-copy={side} lang="ja">
      {children}
    </div>
  );
}

/** One part of the screen, cut out for the chapters: the greeting, the balance card or the toast. */
export function AppPart({ part, side }: { part: "greeting" | "total" | "toast"; side: AppSide }) {
  const s = APP_SHARED;
  return (
    <Crop side={side}>
      {part === "greeting" ? (
        <div className="moa-hello">
          <p className="moa-hello-t">
            <Str k="greeting" side={side} />
          </p>
        </div>
      ) : part === "total" ? (
        <div className="moa-card moa-balance">
          <p className="moa-label">
            <Str k="total" side={side} />
          </p>
          <p className="moa-amount">{s.amount}</p>
          <p className="moa-delta">
            {s.deltaLead} <b>{s.delta}</b>
          </p>
        </div>
      ) : (
        <div className="moa-toast">
          <MoaArt kind="sent" />
          <div className="moa-toast-in">
            <p className="moa-toast-t">
              <Str k="toast" side={side} />
            </p>
          </div>
        </div>
      )}
    </Crop>
  );
}

/** The send sheet alone, for the 버튼과 오류 chapter: every string that differs carries its rule's chip. */
export function AppSheet({ side }: { side: AppSide }) {
  const s = APP_SHARED;
  const id = (k: AppKey) => APP_PAIR.get(k)!.rule;
  return (
    <Crop side={side}>
      <div className="moa-sheet">
        <span className="moa-grab" aria-hidden="true" />
        <p className="moa-sheet-t">
          <Str k="sheetTitle" side={side} />
        </p>
        <Chip id={id("sheetTitle")} side={side} />
        <div className="ka-field">
          <p className="ka-field-l">{s.amountLabel}</p>
          <p className="ka-input">{s.amountValue}</p>
          <p className="ka-err">
            <Str k="error" side={side} />
          </p>
          <Chip id={id("error")} side={side} />
          <p className="ka-help">
            <Str k="helper" side={side} />
          </p>
          <Chip id={id("helper")} side={side} />
        </div>
        <div className="moa-actions">
          <span className="moa-btn moa-btn--soft">{APP_CANCEL.text}</span>
          <span className="moa-btn moa-btn--blue">
            <Str k="send" side={side} />
          </span>
        </div>
        <Chip id={id("send")} side={side} />
      </div>
    </Crop>
  );
}
