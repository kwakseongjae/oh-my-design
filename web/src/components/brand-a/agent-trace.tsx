"use client";

import { useEffect, useId, useRef, useState, type CSSProperties, type RefObject } from "react";
import type { CardNode } from "@/lib/landing-a/chat-data.server";
import "./agent-trace.css";

/**
 * Round 11 agent trace (docs/REDESIGN_R11_PLAN_2026-10-20.md W1 #6), shared by the hero chat and the
 * CLI section's apply step. The anatomy follows how coding agents show their work — Codex and
 * Claude Code tool rows, shadcn AI Elements' Reasoning / Tool / Message, assistant-ui, Meta Astryx's
 * chat template — redrawn in OmD tokens, no code taken from any of them:
 *
 *   Thinking (collapsible reasoning) → Skill omd-apply → Read …/DESIGN.md → Write <Component>.tsx +N −0
 *
 * A step runs with a shimmer on its label and a spinner, then settles to a check and its duration.
 * `compact` (the hero on phones) folds the list into one status row that opens on tap. The trace is
 * presentational: its host drives `at` with usePlay(). The server renders the finished state, which
 * is what reduced motion, ?demo=final and no-JS show; a pre-hydration script in the host adds
 * `sq-pre` (hides the run) and usePlay drops it in the same commit that rewinds to the start.
 */

export type TraceStep =
  | { readonly kind: "think"; readonly text: string }
  | { readonly kind: "tool"; readonly name: "Skill" | "Read" | "Write"; readonly target: string; readonly add?: number };

export interface TraceLabels {
  thinking: string;
  thought: string;
  sec: string;
  running: string;
  done: string;
  summary: string;
  toggle: string;
  agent: string;
}

const fill = (s: string, v: Record<string, string | number>) => s.replace(/\{(\w+)\}/g, (m, k: string) => (k in v ? String(v[k]) : m));
const secs = (ms: number) => (ms / 1000).toFixed(1);
/** the last two path segments, for the one-row trace */
const short = (p: string) => p.split("/").slice(-2).join("/");

const Check = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
);
const Spark = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.5c.5 4.6 2.9 7 7.5 7.5v.1c-4.6.5-7 2.9-7.5 7.5h-.1c-.5-4.6-2.9-7-7.5-7.5V10c4.6-.5 7-2.9 7.5-7.5z" transform="translate(0 2)" /></svg>
);
const Chev = () => (
  <svg className="sq-at-chev" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg>
);

function Label({ s, run }: { s: TraceStep; run: boolean }) {
  if (s.kind === "think") return null;
  return (
    <span className={`sq-at-l${run ? " sq-shim" : ""}`}>
      <b className="sq-at-tool" lang="en">{s.name}</b> <code className="sq-at-tgt" lang="en">{s.target.split("/").map((seg, i, all) => <span key={i}>{seg}{i < all.length - 1 ? <>/<wbr /></> : null}</span>)}</code>
    </span>
  );
}

export function AgentTrace({
  steps, at, ms, labels, note, compact = false,
}: {
  steps: readonly TraceStep[];
  /** the running step; earlier steps are done; ≥ steps.length = all done; < 0 = none yet */
  at: number;
  /** each step's duration, shown once it is done */
  ms: readonly number[];
  labels: TraceLabels;
  /** one line under the trace once the last step is done (the brand-face label) */
  note?: string | null;
  compact?: boolean;
}) {
  const [think, setThink] = useState(false);
  const [open, setOpen] = useState(false);
  const list = useId();
  const all = at >= steps.length;
  const total = ms.reduce((a, b) => a + b, 0);
  const cur = steps[Math.min(Math.max(at, 0), steps.length - 1)];
  const curText = !cur ? "" : cur.kind === "think" ? labels.thinking : `${cur.name} ${short(cur.target)}`;

  return (
    <div className={`sq-at${compact ? " sq-at-c" : ""}${open ? " sq-open" : ""}`}>
      {compact ? (
        <button type="button" className={`sq-at-sum${at < 0 ? " sq-off" : ""}`} aria-expanded={open} aria-controls={list} onClick={() => setOpen((o) => !o)}>
          <span className={`sq-at-ic${all ? " sq-ok" : ""}`}>{all ? <Check /> : <i className="sq-at-spin" />}</span>
          <span className={`sq-at-l${all ? "" : " sq-shim"}`}>{all ? fill(labels.summary, { n: steps.length, s: secs(total) }) : curText}</span>
          <span className="sq-sr">{labels.toggle}</span>
          <Chev />
        </button>
      ) : null}
      <ol className="sq-at-list" id={list} aria-label={labels.agent}>
        {steps.map((s, i) => {
          const state = i < at ? "done" : i === at ? "run" : "off";
          if (state === "off" && !all) return null;
          const done = all || state === "done";
          if (s.kind === "think") {
            return (
              <li key={i} className={`sq-at-step sq-at-think${done ? "" : " sq-run"}`}>
                <button type="button" className="sq-at-row" aria-expanded={think} disabled={!done} onClick={() => setThink((o) => !o)}>
                  <span className={`sq-at-ic${done ? "" : " sq-pulse"}`}><Spark /></span>
                  <span className={`sq-at-l${done ? "" : " sq-shim"}`}>{done ? fill(labels.thought, { s: Math.max(1, Math.round(ms[i] / 1000)) }) : labels.thinking}</span>
                  {done ? <Chev /> : null}
                </button>
                {done && think ? <p className="sq-at-why">{s.text}</p> : null}
              </li>
            );
          }
          return (
            <li key={i} className={`sq-at-step${done ? "" : " sq-run"}`}>
              <div className="sq-at-row">
                <span className={`sq-at-ic${done ? " sq-ok" : ""}`}>{done ? <Check /> : <i className="sq-at-spin" />}</span>
                <Label s={s} run={!done} />
                {done && s.add != null ? <span className="sq-at-diff" lang="en" aria-label={`+${s.add} −0`}><ins>+{s.add}</ins> <del>−0</del></span> : null}
                <span className="sq-at-t">{done ? fill(labels.sec, { s: secs(ms[i]) }) : ""}</span>
                <span className="sq-sr">{done ? labels.done : labels.running}</span>
              </div>
            </li>
          );
        })}
      </ol>
      {note ? <p className={`sq-at-note${all ? "" : " sq-hold"}`}>{note}</p> : null}
    </div>
  );
}

/* ---------- the example card a run ends in ---------- */

const ICON = {
  check: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 12.5l5 5L19.5 7" /></svg>,
  heart: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7.5-4.6-9.6-9.3C.9 8.2 3 4.5 6.6 4.5c2.1 0 3.6 1.2 5.4 3.2 1.8-2 3.3-3.2 5.4-3.2 3.6 0 5.7 3.7 4.2 7.2C19.5 16.4 12 21 12 21z" /></svg>,
} as const;

/** Render a card tree (chat-data.server.ts). Values come only from its tokens; parts beyond `shown` wait, invisible, in place. */
export function CardView({ n, shown }: { n: CardNode; shown: number }) {
  const style = n.css ? (Object.fromEntries(Object.entries(n.css).map(([p, t]) => [p, t!.css])) as CSSProperties) : undefined;
  const cls = [n.cls, n.part != null ? (shown >= n.part ? "sq-ex-in" : "sq-ex-wait") : null].filter(Boolean).join(" ") || undefined;
  if (n.icon) return <span className={cls} style={style} aria-hidden="true">{ICON[n.icon]}</span>;
  // eslint-disable-next-line @next/next/no-img-element -- an OmD prop from the props manifest, sized by its own width/height
  if (n.img) return <span className={cls}><img src={n.img.src} alt="" width={n.img.width} height={n.img.height} /></span>;
  const Tag = n.tag === "h3" ? "p" : n.tag; // a card title is not a heading of this page
  return (
    <Tag className={cls} style={style}>
      {n.text}
      {n.kids?.map((k, i) => <CardView key={i} n={k} shown={shown} />)}
    </Tag>
  );
}

/* ---------- driving a run ---------- */

/** true once the element has been at least `threshold` in view */
export function useInView(ref: RefObject<HTMLElement | null>, threshold = 0.25): boolean {
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || seen) return;
    // the first callback reports isIntersecting for any overlap at all, whatever the threshold
    const io = new IntersectionObserver((es) => {
      if (es.some((e) => e.isIntersecting && e.intersectionRatio >= threshold - 0.01)) {
        setSeen(true);
        io.disconnect();
      }
    }, { threshold });
    io.observe(el);
    return () => io.disconnect();
  }, [ref, threshold, seen]);
  return seen;
}

/**
 * Play a run once `go` turns true: s steps 0 → times.length − 1 on the given schedule (ms from the
 * start). Starts at the final step, which the server rendered. Reduced motion or ?demo=final keeps
 * it; ?demo=mid freezes at `mid`. `live` turns true in the same commit that rewinds to 0, so the
 * host's className (which the pre-hydration script extended with sq-pre) drops sq-pre exactly then.
 *
 * `replay` (round 12, the hero chat's keycap pick): each new `key` after mount drops whatever is
 * running and plays the run again from 0 on `replay.times` (same length as `times`); under reduced
 * motion or ?demo it jumps straight to the end. A replay before the first `go` stands in for that run.
 * The rewind happens in the render that sees the new key (React's "adjust state while rendering"),
 * so the host never paints the new subject at the old step.
 */
const stillNow = () => {
  const q = new URLSearchParams(location.search).get("demo");
  return q === "final" || q === "mid" || matchMedia("(prefers-reduced-motion: reduce)").matches;
};

export function usePlay(
  times: readonly number[],
  go: boolean,
  mid: number,
  replay?: { readonly key: number; readonly times: readonly number[] },
): { s: number; live: boolean } {
  const last = times.length - 1;
  const [st, setSt] = useState({ s: last, live: false });
  const mode = useRef<"wait" | "still" | "play">("wait");
  const timers = useRef<number[]>([]);
  const start = useRef(0);
  const key = replay?.key ?? 0;
  const fast = replay?.times;
  // a pick only ever happens on the client after hydration, so the server never takes this branch
  const [rendered, setRendered] = useState(key);
  if (fast && key !== rendered) {
    setRendered(key);
    setSt({ s: stillNow() ? fast.length - 1 : 0, live: true });
  }
  const played = useRef(key);
  useEffect(() => {
    const q = new URLSearchParams(location.search).get("demo");
    const still = stillNow();
    let raf = 0;
    if (still) {
      mode.current = "still";
      raf = requestAnimationFrame(() => setSt({ s: q === "mid" ? mid : last, live: true }));
    }
    const t = timers.current;
    return () => {
      cancelAnimationFrame(raf);
      t.forEach(clearTimeout);
    };
  }, [last, mid]);
  useEffect(() => {
    if (!go || mode.current !== "wait") return;
    mode.current = "play";
    let fired = false;
    // rewind on the next frame (one commit drops sq-pre and shows step 0), then the schedule
    const raf = requestAnimationFrame(() => {
      fired = true;
      setSt({ s: 0, live: true });
      times.forEach((ms, i) => {
        if (i) timers.current.push(window.setTimeout(() => setSt({ s: i, live: true }), ms));
      });
    });
    start.current = raf;
    return () => {
      if (fired) return;
      cancelAnimationFrame(raf);
      mode.current = "wait";
    };
  }, [go, times]);
  // the replay's schedule (the render above already rewound to 0, or jumped to the end when still)
  useEffect(() => {
    if (!fast || key === played.current) return;
    played.current = key;
    cancelAnimationFrame(start.current);
    timers.current.forEach(clearTimeout);
    timers.current.length = 0;
    if (mode.current === "still") return;
    mode.current = "play";
    fast.forEach((ms, i) => {
      if (i) timers.current.push(window.setTimeout(() => setSt({ s: i, live: true }), ms));
    });
  }, [key, fast]);
  return st;
}
