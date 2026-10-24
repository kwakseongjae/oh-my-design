import type { ReactNode } from "react";
import { MOA_COPY, MOA_COPY_MARKS, MOA_SHARED, MOA_TYPE_MARKS, type MoaCopy, type MoaSide } from "./moa-copy";
import "./moa.css";

type CopyKey = keyof typeof MOA_COPY_MARKS;
type TypeKey = keyof typeof MOA_TYPE_MARKS;

/** The four illustrations, shared by both sides (moa.css sizes the slots; public/hangul/moa/ has the art). */
export type MoaArtKind = "sent" | "gift" | "chart" | "offline";

function Art({ kind }: { kind: MoaArtKind }) {
  return <span className={`moa-art moa-art--${kind}`} aria-hidden="true" />;
}

/** A rule tag pinned under the string it marks; tone says which side of the comparison it is on. */
function Chip({ text, tone }: { text?: string; tone: "before" | "after" }) {
  if (!text) return null;
  return (
    <span className="moa-chip" data-tone={tone} lang="en">
      {text}
    </span>
  );
}

const ICONS: Record<string, ReactNode> = {
  home: <path d="M4 10.5 12 4l8 6.5V19a1 1 0 0 1-1 1h-4.5v-5.5h-5V20H5a1 1 0 0 1-1-1z" />,
  gift: (
    <>
      <path d="M4 9h16v3H4zM5.5 12h13v8h-13zM12 9v11" />
      <path d="M12 9c-1.6-3.6-5.4-3.4-5.2-1.2.2 1.4 2.6 1.2 5.2 1.2zm0 0c1.6-3.6 5.4-3.4 5.2-1.2-.2 1.4-2.6 1.2-5.2 1.2z" />
    </>
  ),
  send: <path d="M20 4 3.5 10.6l6.6 2.8 2.8 6.6zM10.1 13.4 20 4" />,
  menu: <path d="M5 7h14M5 12h14M5 17h14" />,
};

function Icon({ name }: { name: keyof typeof ICONS }) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {ICONS[name]}
    </svg>
  );
}

/**
 * moa, the fintech app the page sets twice. `typo` picks the typesetting and `copy` the strings
 * (moa-copy.ts); the furniture, figures and art are the same on both sides, so a pair of screens
 * differs in exactly one of the two. `marks` pins rule tags to the strings a chapter talks about,
 * on both sides of the pair. `chrome="fixed"` keeps the status bar, app bar and tab bar still while
 * the content between them scrolls (the hero's phones); `"flow"` lays the whole screen out at length.
 *
 * Nothing in it is interactive: the buttons and tabs are drawings of buttons and tabs, so a keyboard
 * never stops on them and a screen reader reads the screen as text.
 */
export function MoaScreen({
  typo,
  copy,
  marks,
  chrome = "flow",
}: {
  typo: MoaSide;
  copy: MoaSide;
  marks?: "type" | "copy";
  chrome?: "flow" | "fixed";
}) {
  const c: MoaCopy = MOA_COPY[copy];
  const s = MOA_SHARED;
  const before = marks === "copy" ? copy === "ai" : marks === "type" ? typo === "ai" : false;
  const tone = before ? "before" : "after";
  const cm = (k: CopyKey) => (marks === "copy" ? MOA_COPY_MARKS[k] : undefined);
  const tm = (k: TypeKey) => (marks === "type" ? MOA_TYPE_MARKS[k] : undefined);
  /** a string the 문구 chapter marks on the side without the skill gets the proofreader's wavy line */
  const w = (k: CopyKey, text: string): ReactNode =>
    marks === "copy" && copy === "ai" && MOA_COPY_MARKS[k] ? <span className="moa-wavy">{text}</span> : text;

  return (
    <div className={`moa moa--${chrome}`} data-typo={typo} lang="ko">
      <div className="moa-top">
        <div className="moa-status" aria-hidden="true">
          <span className="moa-time">9:41</span>
          <span className="moa-status-i">
            <svg viewBox="0 0 18 12" width="18" height="12"><path d="M1 9h2v2H1zM5 7h2v4H5zM9 4.5h2V11H9zM13 2h2v9h-2z" fill="currentColor" /></svg>
            <svg viewBox="0 0 16 12" width="16" height="12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M1.5 4.3a9.4 9.4 0 0 1 13 0M3.9 6.9a6 6 0 0 1 8.2 0M6.3 9.4a2.6 2.6 0 0 1 3.4 0" /></svg>
            <svg viewBox="0 0 26 12" width="26" height="12"><rect x=".6" y=".6" width="21.8" height="10.8" rx="3.2" fill="none" stroke="currentColor" strokeOpacity=".4" strokeWidth="1.2" /><rect x="2.4" y="2.4" width="16.4" height="7.2" rx="1.8" fill="currentColor" /><path d="M24 4v4c.9-.3 1.4-1.1 1.4-2s-.5-1.7-1.4-2z" fill="currentColor" fillOpacity=".45" /></svg>
          </span>
        </div>
        <div className="moa-bar">
          <span className="moa-logo">
            <svg viewBox="0 0 28 28" width="26" height="26" aria-hidden="true">
              <rect width="28" height="28" rx="8" fill="#3478F6" />
              <circle cx="11" cy="14.5" r="5.2" fill="#fff" />
              <circle cx="17.5" cy="14.5" r="5.2" fill="#fff" fillOpacity=".55" />
            </svg>
            <span className="moa-logo-t">{s.app}</span>
          </span>
          <span className="moa-bell" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9a6 6 0 0 1 12 0c0 6.5 2.5 8 2.5 8h-17S6 15.5 6 9" /><path d="M10.3 20.5a2 2 0 0 0 3.4 0" /></svg>
            <span className="moa-dot" />
          </span>
        </div>
      </div>

      <div className="moa-view">
        <div className="moa-scroll">
          <div className="moa-hello">
            <p className="moa-hello-t">{w("greeting", c.greeting)}</p>
            <Chip text={cm("greeting") ?? tm("greeting")} tone={tone} />
          </div>

          <div className="moa-card moa-balance">
            <p className="moa-label">{w("total", c.total)}</p>
            <Chip text={cm("total")} tone={tone} />
            <p className="moa-amount">{s.amount}</p>
            <p className="moa-delta">
              {s.deltaLead} <b>{s.delta}</b>
            </p>
            <div className="moa-actions">
              <span className="moa-btn moa-btn--soft">{s.accounts}</span>
              <span className="moa-btn moa-btn--blue">{s.transfer}</span>
            </div>
          </div>

          <div className="moa-card moa-recent">
            <p className="moa-h">{s.recentH}</p>
            <ul className="moa-people">
              {s.recent.map((n, i) => (
                <li key={n}>
                  <span className="moa-avatar" data-i={i} aria-hidden="true">{n.slice(0, 1)}</span>
                  <span className="moa-name">{n}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="moa-toast">
            <Art kind="sent" />
            <div className="moa-toast-in">
              <p className="moa-toast-t">{w("toast", c.toast)}</p>
              <p className="moa-toast-s">{c.toastSub}</p>
              <Chip text={cm("toast") ?? tm("toast")} tone={tone} />
            </div>
          </div>

          <div className="moa-banner">
            <div className="moa-banner-in">
              <p className="moa-banner-t">{w("banner", c.banner)}</p>
              <Chip text={cm("banner")} tone={tone} />
            </div>
            <Art kind="gift" />
          </div>

          <div className="moa-card moa-stats">
            <div className="moa-stats-top">
              <p className="moa-cap">{s.statsCap}</p>
              <Art kind="chart" />
            </div>
            <p className="moa-stats-h">{s.statsH}</p>
            <Chip text={tm("statsH")} tone={tone} />
            <div className="moa-figs">
              {s.stats.map((f) => (
                <div key={f.label} className="moa-fig">
                  <p className="moa-fig-v">
                    <b>{f.value}</b>
                    {f.unit}
                  </p>
                  <p className="moa-fig-l">{f.label}</p>
                </div>
              ))}
            </div>
            <p className="moa-asof">{s.asOf}</p>
            <Chip text={tm("asOf")} tone={tone} />
          </div>

          <div className="moa-sheet">
            <span className="moa-grab" aria-hidden="true" />
            <p className="moa-sheet-t">{w("sheetTitle", c.sheetTitle)}</p>
            <Chip text={cm("sheetTitle")} tone={tone} />
            <p className="moa-sheet-b">{w("sheetBody", c.sheetBody)}</p>
            <Chip text={cm("sheetBody")} tone={tone} />
            <div className="moa-actions">
              <span className="moa-btn moa-btn--soft">{w("buttons", c.close)}</span>
              <span className="moa-btn moa-btn--blue">{w("buttons", c.send)}</span>
            </div>
            <Chip text={cm("buttons")} tone={tone} />
          </div>

          <div className="moa-error">
            <Art kind="offline" />
            <div className="moa-error-in">
              <p className="moa-error-t">{w("error", c.error)}</p>
              <Chip text={cm("error")} tone={tone} />
            </div>
          </div>

          <div className="moa-helper">
            <p className="moa-helper-t">{w("helper", c.helper)}</p>
            <Chip text={cm("helper")} tone={tone} />
          </div>
        </div>
      </div>

      <ul className="moa-tabs" aria-hidden="true">
        {(["home", "gift", "send", "menu"] as const).map((icon, i) => (
          <li key={icon} className={i === 0 ? "is-on" : undefined}>
            <Icon name={icon} />
            <span>{s.tabs[i]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
