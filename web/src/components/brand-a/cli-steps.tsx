"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import type { ChatCard } from "@/lib/landing-a/chat-data.server";
import type { R11HeroCopy } from "./copy/r11-hero";
import { AgentTrace, CardView, useInView, usePlay, type TraceStep } from "./agent-trace";

/**
 * Round 11 CLI steps (W3): install → apply, driven by scroll. Wide screens: the two step texts sit
 * in the left column and scroll past one sticky stage on the right, which shows the scene of the
 * step crossing the middle of the viewport (IntersectionObserver, not a scroll timeline, so every
 * browser gets it). Phones: each text sits over its own scene, nothing pinned. The active step's
 * title is the section's one violet state. Focus moving into a scene makes its step active, so a
 * keyboard never lands on a faded scene.
 *
 * The apply scene plays the hero's trace (agent-trace.tsx) once it is on screen — the active step
 * on wide screens, in view on phones — and ends in the screen the Write step creates.
 */
const TIMES = [0, 300, 1300, 1750, 2350, 2700, 3050, 3400, 3800];
const AT = [-1, 0, 1, 2, 3, 3, 3, 3, 4];
const PART = [0, 0, 0, 0, 0, 1, 2, 3, 99];
const MS = [1000, 450, 600, 1450];

type Apply = { card: ChatCard; prompt: string; think: string; trace: R11HeroCopy["trace"] };

function ApplyScene({ card, prompt, think, trace, active }: Apply & { active: boolean }) {
  const root = useRef<HTMLDivElement>(null);
  const seen = useInView(root, 0.35);
  const [phone, setPhone] = useState(false);
  useEffect(() => {
    const mq = matchMedia("(max-width:900px)");
    const on = () => setPhone(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  const { s, live } = usePlay(TIMES, phone ? seen : active && seen, 5);
  const at = AT[s];
  const steps: TraceStep[] = [
    { kind: "think", text: think },
    { kind: "tool", name: "Skill", target: "omd-apply" },
    { kind: "tool", name: "Read", target: card.read },
    { kind: "tool", name: "Write", target: card.file, add: card.lines },
  ];
  const note = card.face.name && !card.face.shown ? trace.face.replace("{face}", card.face.name) : null;
  return (
    <div className={`sq-apply${live ? " sq-live" : ""}`} ref={root} id="cli-apply" suppressHydrationWarning>
      <div className="sq-apply-chat">
        <div className="sq-msg-u">
          <p className="sq-bub">{prompt}</p>
        </div>
        <AgentTrace steps={steps} at={at} ms={MS} labels={trace} note={note} />
      </div>
      <div className={`sq-apply-scr sq-ex${at >= 3 ? "" : " sq-ex-hide"}`} data-company={card.id}>
        <CardView n={card.root} shown={PART[s]} />
      </div>
    </div>
  );
}

export function CliSteps({ steps, label, term, apply }: { steps: readonly { t: string; p: string }[]; label: string; term: ReactNode; apply: Apply }) {
  const [on, setOn] = useState(0);
  const texts = useRef<(HTMLDivElement | null)[]>([]);
  const termBox = useRef<HTMLDivElement>(null);
  const scrolled = useRef(false);

  // the step whose text crosses the middle band of the viewport is active
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => {
        for (const e of es) if (e.isIntersecting) setOn(Number((e.target as HTMLElement).dataset.i));
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    for (const t of texts.current) if (t) io.observe(t);
    return () => io.disconnect();
  }, []);

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

  const txt = (i: number) => (
    <div className={`sq-cli-txt${on === i ? " sq-on" : ""}`} data-i={i} ref={(el) => { texts.current[i] = el; }}>
      <h3 className="sq-cli-t">{steps[i].t}</h3>
      <p>{steps[i].p}</p>
    </div>
  );
  return (
    <div className="sq-cli" role="group" aria-label={label} data-on={on}>
      <div className="sq-cli-item">{txt(0)}</div>
      <div className={`sq-cli-scene${on === 0 ? " sq-on" : ""}`} data-scene="0" ref={termBox} onFocusCapture={() => setOn(0)}>
        {term}
      </div>
      <div className="sq-cli-item">{txt(1)}</div>
      <div className={`sq-cli-scene${on === 1 ? " sq-on" : ""}`} data-scene="1" onFocusCapture={() => setOn(1)}>
        <ApplyScene {...apply} active={on === 1} />
      </div>
    </div>
  );
}
