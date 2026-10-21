"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import type { ClientCard } from "@/lib/landing-a/chat-data.server";
import { AgentTrace, CardView, useInView, usePlay, type TraceLabels, type TraceStep } from "./agent-trace";
import { CopyButton } from "./copy-button";

/**
 * Round 13 CLI steps (owner 2026-10-21): install → apply as two rows, each step's text beside its
 * own visual, and each visual plays once when its row comes into view: the install terminal types
 * the command and streams the real output, the apply panel plays the agent trace into the screen it
 * writes. Phones stack each text over its visual.
 *
 * Round 11 drove both steps from one sticky stage. That needed tall spacer items beside the pinned
 * scene, which left empty bands before and after it and set the second step's text well below the
 * panel it described. Rows have no start or end to fit to the scroll: a text and its visual share a
 * row, nothing is pinned, and every visual has a fixed height (the apply trace keeps its finished
 * height while it plays), so nothing below a visual moves as it plays.
 *
 * Both runs follow the hero's model (agent-trace.tsx usePlay): the server renders the finished state,
 * which reduced motion, ?demo=final and no-JS keep; a pre-hydration script in cli-section.tsx hides
 * what is about to play; the run rewinds to its start once it is in view.
 */

/* ---------- install: the command typed, then the real output streamed ---------- */

/** One row of the install output (cli-section.tsx installRows): its text and tone class, or the transcript's one cut. */
export interface TermRow {
  readonly t: string;
  readonly c?: string;
  readonly gap?: boolean;
}

/** the prompt waits a beat before the first key */
const IDLE = 500;
/** ms per key after the first: 35–60, uneven so it reads as a hand, fixed so server and client agree */
const KEYS = [46, 39, 55, 42, 51, 37, 58, 44, 49, 40, 53, 47, 36, 57, 43, 50, 38, 54];
/** the pause before Enter */
const ENTER = 420;
/** after Enter: the first row, an output row, a blank gutter row (it comes with the row before) */
const START = 240, ROW = 60, BLANK = 25;
/** the hold before the marked cut, standing for the install's work (the per-file list it stands for), and before Done */
const HOLD = 900, LAST = 320;

/**
 * When each beat of the install run lands (ms from its start): beat 0 the empty prompt, beats 1…n the
 * command's characters, n+1 Enter, then one beat per output row in the transcript's order.
 */
export function installBeats(cmd: string, rows: readonly TermRow[]): number[] {
  const out = [0];
  let t = IDLE;
  for (let i = 0; i < cmd.length; i++) {
    if (i) t += KEYS[(i - 1) % KEYS.length];
    out.push(t);
  }
  t += ENTER;
  out.push(t);
  rows.forEach((r, i) => {
    t += i === 0 ? START : r.gap ? HOLD : i === rows.length - 1 ? LAST : r.t.trim() === "│" ? BLANK : ROW;
    out.push(t);
  });
  return out;
}

/** What the terminal shows at beat s of installBeats: characters typed, Enter pressed, output rows shown. */
export function installFrame(s: number, cmdLen: number): { typed: number; entered: boolean; shown: number } {
  return s <= cmdLen ? { typed: s, entered: false, shown: 0 } : { typed: cmdLen, entered: true, shown: s - cmdLen - 1 };
}

/**
 * The command with its first n characters typed. The untyped rest is laid out but invisible, so typing
 * never reflows the row; like cli-section.tsx CmdText it breaks only at its spaces.
 */
function Typed({ cmd, n, caret }: { cmd: string; n: number; caret: boolean }) {
  let at = 0;
  return (
    <>
      {cmd.split(" ").map((w, i) => {
        const st = at;
        at += w.length + 1;
        const k = Math.min(Math.max(n - st, 0), w.length);
        return (
          <span key={i}>
            {i ? " " : null}
            <span className="sq-nb">
              {w.slice(0, k)}
              {/* a fresh caret per keystroke: a new box, not a moved one (no layout shift) */}
              {caret && n >= st && n <= st + w.length ? <span key={n} className="sq-tc-car" /> : null}
              {k < w.length ? <span className="sq-tc-rest">{w.slice(k)}</span> : null}
            </span>
          </span>
        );
      })}
    </>
  );
}

const Replay = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4.5 12a7.5 7.5 0 1 0 2.2-5.3" /><path d="M6.7 2.7v4h4" /></svg>
);

export interface InstallProps {
  cmd: string;
  rows: readonly TermRow[];
  /** the page language, for the marked cut's text */
  gapLang: string;
  labels: { region: string; copy: { copy: string; copied: string; failed: string }; replay: string };
}

function InstallTerm({ cmd, rows, gapLang, labels }: InstallProps) {
  const root = useRef<HTMLDivElement>(null);
  const out = useRef<HTMLPreElement>(null);
  // follow the newest row unless the reader has scrolled up to read
  const stick = useRef(true);
  const seen = useInView(root, 0.5);
  const [key, setKey] = useState(0);
  const times = useMemo(() => installBeats(cmd, rows), [cmd, rows]);
  const { s, live } = usePlay(times, seen, Math.round(cmd.length * 0.55), { key, times });
  const last = times.length - 1;
  const f = installFrame(s, cmd.length);
  const running = live && s < last;
  useLayoutEffect(() => {
    const el = out.current;
    if (el && stick.current) el.scrollTop = el.scrollHeight;
  }, [f.shown]);
  return (
    <div className={`sq-term${live ? " sq-live" : ""}`} id="cli-term" ref={root} role="region" aria-label={labels.region} suppressHydrationWarning>
      <div className="sq-term-cmd">
        {/* the typed text is the command itself (no hidden copy), so selecting it by hand copies it once */}
        <code lang="en">
          <span className="sq-tc-ps" aria-hidden="true">$ </span>
          <span className={`sq-tc-txt${live && !f.entered && s === 0 ? " sq-idle" : ""}`}>
            <Typed cmd={cmd} n={f.typed} caret={live && !f.entered} />
          </span>
        </code>
        <button
          type="button"
          className={`sq-term-re${live && !running ? "" : " sq-re-wait"}`}
          aria-label={labels.replay}
          title={labels.replay}
          onClick={() => {
            // the button hides while the run plays: keep focus on the output it replays
            stick.current = true;
            out.current?.focus({ preventScroll: true });
            setKey((k) => k + 1);
          }}
        >
          <Replay />
        </button>
        <CopyButton text={cmd} labels={labels.copy} className="sq-cmd-copy" />
      </div>
      <pre
        className="sq-to"
        lang="en"
        tabIndex={0}
        ref={out}
        aria-busy={running || undefined}
        onScroll={(e) => {
          const el = e.currentTarget;
          stick.current = el.scrollHeight - el.scrollTop - el.clientHeight < 24;
        }}
      >
        {rows.slice(0, f.shown).map((r, i) => (
          <span key={i} className={r.gap ? "sq-tg" : r.c} lang={r.gap ? gapLang : undefined}>{r.t + (i < rows.length - 1 ? "\n" : "")}</span>
        ))}
        {running && f.entered ? <span key={`cur${f.shown}`} className="sq-to-cur" aria-hidden="true" /> : null}
      </pre>
    </div>
  );
}

/* ---------- apply: the agent trace beside the screen it writes ---------- */

const TIMES = [0, 300, 1300, 1750, 2350, 2700, 3050, 3400, 3800];
const AT = [-1, 0, 1, 2, 3, 3, 3, 3, 4];
const PART = [0, 0, 0, 0, 0, 1, 2, 3, 99];
const MS = [1000, 450, 600, 1450];

export interface ApplyProps {
  card: ClientCard;
  prompt: string;
  think: string;
  trace: TraceLabels;
}

function ApplyScene({ card, prompt, think, trace }: ApplyProps) {
  const root = useRef<HTMLDivElement>(null);
  const chat = useRef<HTMLDivElement>(null);
  const seen = useInView(root, 0.35);
  // phones stack the trace over the screen: until the run ends, the trace keeps the height of the
  // finished state the server rendered, so the screen under it never moves as its rows arrive
  useEffect(() => {
    const el = chat.current;
    // reduced motion and ?demo= keep the finished state (usePlay): nothing will play, nothing to hold
    const still = /[?&]demo=/.test(location.search) || matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (seen && el && !still && !el.style.minHeight) el.style.minHeight = `${el.offsetHeight}px`;
  }, [seen]);
  const { s, live } = usePlay(TIMES, seen, 5);
  const last = TIMES.length - 1;
  useEffect(() => {
    if (live && s === last && chat.current) chat.current.style.minHeight = "";
  }, [live, s, last]);
  const at = AT[s];
  const steps: TraceStep[] = [
    { kind: "think", text: think },
    { kind: "tool", name: "Skill", target: "omd-apply" },
    { kind: "tool", name: "Read", target: card.read },
    { kind: "tool", name: "Write", target: card.file, add: card.lines },
  ];
  return (
    <div className={`sq-apply${live ? " sq-live" : ""}`} ref={root} id="cli-apply" suppressHydrationWarning>
      <div className="sq-apply-chat" ref={chat}>
        <div className="sq-msg-u">
          <p className="sq-bub">{prompt}</p>
        </div>
        <AgentTrace steps={steps} at={at} ms={MS} labels={trace} />
      </div>
      <div className={`sq-apply-scr sq-ex${at >= 3 ? "" : " sq-ex-hide"}`} data-company={card.id}>
        <CardView n={card.root} shown={PART[s]} />
      </div>
    </div>
  );
}

/* ---------- the two rows ---------- */

export function CliSteps({ steps, install, apply }: { steps: readonly { t: string; p: string }[]; install: InstallProps; apply: ApplyProps }) {
  const text = (i: number) => (
    <div className="sq-cli-txt">
      <h3 className="sq-cli-t">{steps[i].t}</h3>
      <p>{steps[i].p}</p>
    </div>
  );
  return (
    <ol className="sq-cli">
      <li className="sq-cli-row" data-step="install">
        {text(0)}
        <div className="sq-cli-vis">
          <InstallTerm {...install} />
        </div>
      </li>
      <li className="sq-cli-row" data-step="apply">
        {text(1)}
        <div className="sq-cli-vis">
          <ApplyScene {...apply} />
        </div>
      </li>
    </ol>
  );
}
