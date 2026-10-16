"use client";

import { useEffect, useRef, useState } from "react";
import type { R10Copy } from "./copy/r10";

/**
 * Round 10 hero chat (direction B, docs/research/2026-10-17-direction/): an illustrative,
 * shadcn-style conversation — the user's prompt, the agent's tool trace (a shimmer on the
 * running step), and the artifact card streaming in. Not a live AI, and labelled so beside
 * the stage. No libraries: one timer chain and CSS.
 *
 * The screen uses only Toss values, each one in web/references/toss/DESIGN.md (checked by
 * __tests__/chat-demo.test.ts). They are inline styles so the content object never reads the
 * site's tokens. The trace's file path is where `install-skills` copies the catalog in a user
 * project (src/cli/install-skills.ts installReferenceCatalog, Claude Code channel).
 *
 * Timeline (step s): 0 prompt only · 1–3 trace lines run in turn · 4 the "drawing" line runs and
 * the card opens · 5–9 the card's elements stream in · 10 done. The server renders the final
 * state (no JS, reduced motion); the inline script after the stage adds .sq-chat-pre, hiding the
 * trace before first paint, when the timeline will play, and this island takes over at hydration. ?demo=mid freezes
 * at step 7 and ?demo=final at 10, for review screenshots.
 */
export const TOSS_VALUES = [
  { k: "colors.primary", v: "#3182f6" },
  { k: "colors.foreground", v: "#191f28" },
  { k: "colors.body", v: "#4e5968" },
  { k: "colors.muted", v: "#8b95a1" },
  { k: "colors.surface", v: "#f2f4f6" },
  { k: "colors.canvas", v: "#ffffff" },
  { k: "typography.h3", v: "24px / 600 / 36px" },
  { k: "typography.body", v: "16px / 400 / 24px" },
  { k: "rounded.md", v: "6px" },
  { k: "components.tds-button.height", v: "56px" },
  { k: "components.tds-button.rounded", v: "16px" },
  { k: "components.tds-button.typography", v: "17px / 600" },
] as const;

export const CHAT_PATH = { dir: ".claude/data/references/", file: "toss/DESIGN.md" };
const FINAL = 10;
const MID = 7;

const T = {
  primary: "#3182f6", fg: "#191f28", body: "#4e5968", muted: "#8b95a1", surface: "#f2f4f6", canvas: "#ffffff",
};

export function ChatDemo({ t }: { t: R10Copy["chat"] }) {
  const [s, setS] = useState(FINAL);
  const root = useRef<HTMLDivElement>(null);
  const log = useRef<HTMLDivElement>(null);
  const n = TOSS_VALUES.length;
  const fill = (x: string) => x.replace("{n}", String(n));

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const q = new URLSearchParams(location.search).get("demo");
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (q === "final" || reduce) {
      el.classList.remove("sq-chat-pre");
      return;
    }
    if (q === "mid") {
      setS(MID);
      el.classList.remove("sq-chat-pre");
      return;
    }
    // the timeline: prompt, three trace lines, the card opening, five elements, done
    const at = [0, 500, 1150, 1800, 2450, 2850, 3100, 3350, 3600, 3850, 4350];
    const timers: number[] = [];
    let started = false;
    const run = () => {
      if (started) return;
      started = true;
      setS(0);
      el.classList.remove("sq-chat-pre");
      at.forEach((ms, i) => i && timers.push(window.setTimeout(() => setS(i), ms)));
    };
    // start once the stage is on screen (it is, at load, on every width the hero fits)
    const io = new IntersectionObserver((es) => { if (es.some((e) => e.isIntersecting)) { io.disconnect(); run(); } }, { threshold: 0.25 });
    io.observe(el);
    return () => { io.disconnect(); timers.forEach(clearTimeout); };
  }, []);

  // keep the newest line in view when the conversation outgrows the stage (a message scroller)
  useEffect(() => {
    const l = log.current;
    if (!l || l.scrollHeight <= l.clientHeight + 1) return;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    l.scrollTo({ top: l.scrollHeight, behavior: reduce ? "auto" : "smooth" });
  }, [s]);

  const line = (k: number) => (s < k ? "sq-off" : (k < 4 ? s === k : s >= 4 && s < FINAL) ? "sq-run" : "sq-done");
  const shown = (j: number) => (s >= 4 + j ? "sq-in" : "sq-off");
  const Ic = ({ k }: { k: number }) => (
    <span className="sq-ic" aria-hidden="true">
      {line(k) === "sq-done" ? (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
      ) : null}
    </span>
  );
  const st = (k: number) => <span className="sq-sr">{line(k) === "sq-run" ? t.status.running : t.status.done}</span>;

  return (
    <div className="sq-chat" ref={root} id="chat" role="group" aria-label={t.label} suppressHydrationWarning>
      <p className="sq-chat-tag">{t.tag}</p>
      <div className="sq-chat-log" ref={log}>
        <div className="sq-msg sq-msg-u">
          <p className="sq-bub">{t.prompt}</p>
        </div>
        <div className="sq-msg sq-msg-a">
          <ol className="sq-trace" aria-label={t.agent} aria-live="polite">
            <li className={line(1)}><Ic k={1} /><span className="sq-tl">{t.steps.skill}</span>{st(1)}</li>
            <li className={line(2)}>
              <Ic k={2} />
              <span className="sq-tl">
                {t.steps.read} <code lang="en">{(CHAT_PATH.dir + CHAT_PATH.file).split("/").map((seg, i, all) => <span key={i}>{seg}{i < all.length - 1 ? <>/<wbr /></> : null}</span>)}</code>
              </span>
              {st(2)}
            </li>
            <li className={line(3)}><Ic k={3} /><span className="sq-tl">{fill(t.steps.pick)}</span>{st(3)}</li>
            <li className={line(4)}>
              <Ic k={4} />
              <span className="sq-tl">
                {s >= FINAL ? <>{t.steps.wrote} <code lang="en">PaymentComplete.tsx</code></> : <span className="sq-shim">{t.steps.drawing}</span>}
              </span>
              {st(4)}
            </li>
          </ol>
          <figure className={`sq-art ${s >= 4 ? "sq-in" : "sq-off"}`}>
            <figcaption className="sq-art-bar">
              <b lang="en">PaymentComplete.tsx</b>
              <span>{t.bar} · {fill(t.barValues)}</span>
            </figcaption>
            {/* content object: Toss values only (TOSS_VALUES), never the site's tokens */}
            <div className="sq-art-body" data-content-object="toss" style={{ background: T.canvas }}>
              <div className="sq-pay" style={{ color: T.fg }}>
                <span className={`sq-pay-chk ${shown(1)}`} style={{ color: T.primary }} aria-hidden="true">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 12.5l5 5L19.5 7" /></svg>
                </span>
                <p className={shown(2)} style={{ margin: 0, fontSize: 24, fontWeight: 600, lineHeight: "36px", color: T.fg }}>{t.pay.title}</p>
                <p className={shown(3)} style={{ margin: 0, fontSize: 16, fontWeight: 400, lineHeight: "24px", color: T.body }}>{t.pay.amount}</p>
                <dl className={`sq-pay-rows ${shown(4)}`} style={{ background: T.surface, borderRadius: 6, fontSize: 16, fontWeight: 400, lineHeight: "24px" }}>
                  {t.pay.rows.map(([k, v]) => (
                    <div key={k}><dt style={{ color: T.muted }}>{k}</dt><dd style={{ color: T.fg }}>{v}</dd></div>
                  ))}
                </dl>
                <span className={`sq-pay-btn ${shown(5)}`} style={{ height: 56, borderRadius: 16, background: T.primary, color: T.canvas, fontSize: 17, fontWeight: 600 }}>{t.pay.cta}</span>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
}

/** Inline, right after the stage (pre-hydration): hide the trace and card until the island plays them. */
export const chatScript = `(function(){try{var c=document.getElementById("chat");if(c&&!/[?&]demo=/.test(location.search)&&!matchMedia("(prefers-reduced-motion: reduce)").matches)c.classList.add("sq-chat-pre")}catch(e){}})();`;
