"use client";

import { useEffect, useRef, type ReactNode } from "react";
import type { ClientCard } from "@/lib/landing-a/chat-data.server";
import { AgentTrace, CardView, useInView, usePlay, type TraceLabels, type TraceStep } from "./agent-trace";

/**
 * Round 13 CLI steps (owner 2026-10-21): install → apply as two rows, each step's text beside its
 * own visual, and each visual plays once when its row comes into view. Phones stack each text over
 * its visual.
 *
 * Round 11 drove both steps from one sticky stage. That needed tall spacer items beside the pinned
 * scene, which left empty bands before and after it and set the second step's text well below the
 * panel it described. Rows have no start or end to fit to the scroll: a text and its visual share a
 * row, nothing is pinned, and every visual has a fixed height (the apply trace keeps its finished
 * height while it plays), so nothing below a visual moves as it plays.
 *
 * The apply run follows the hero's model (agent-trace.tsx usePlay): the server renders the finished
 * state, which reduced motion, ?demo=final and no-JS keep; a pre-hydration script in cli-section.tsx
 * hides what is about to play; the run rewinds to its start once it is in view.
 */

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

export function CliSteps({ steps, term, apply }: { steps: readonly { t: string; p: string }[]; term: ReactNode; apply: ApplyProps }) {
  const termBox = useRef<HTMLDivElement>(null);
  const scrolled = useRef(false);

  // the install scene "runs" once: its output scrolls to the end the first time it is on screen
  useEffect(() => {
    const box = termBox.current;
    const pre = box?.querySelector("pre");
    if (!box || !pre) return;
    const io = new IntersectionObserver(
      (es) => {
        if (scrolled.current || !es.some((e) => e.isIntersecting)) return;
        scrolled.current = true;
        io.disconnect();
        const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.setTimeout(() => pre.scrollTo({ top: pre.scrollHeight, behavior: reduce ? "auto" : "smooth" }), reduce ? 0 : 500);
      },
      { threshold: 0.5 },
    );
    io.observe(box);
    return () => io.disconnect();
  }, []);

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
        <div className="sq-cli-vis" ref={termBox}>
          {term}
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
