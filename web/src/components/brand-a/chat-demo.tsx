"use client";

import { useRef } from "react";
import type { ChatCard } from "@/lib/landing-a/chat-data.server";
import type { R11HeroCopy } from "./copy/r11-hero";
import { AgentTrace, CardView, useInView, usePlay, type TraceStep } from "./agent-trace";

/**
 * Round 11 hero chat (docs/REDESIGN_R11_PLAN_2026-10-20.md W1 #2 #5 #6 #7 #8). The user's prompt,
 * the agent's trace (Thinking → Skill omd-apply → Read the company's DESIGN.md → Write the card),
 * and an example card that fills the rest of the column, drawn only from that company's verified
 * tokens (lib/landing-a/chat-data.server.ts builds it on the server; this island only plays it).
 * The company is the page locale's own (ko Toss, ja pixiv, en Linear, zh-tw 104); every locale is
 * its own document, so a language switch — the 2D drop included — loads and replays the new one.
 *
 * No visible "example" tag (owner, #5); the group's accessible name still says it is one. When the
 * company names a UI face the page doesn't load (Toss Product Sans), the trace's last line says the
 * card is set in the page font, so no face is passed off as the brand's (AGENTS.md, G3).
 *
 * Timeline (s): 0 the prompt · 1 thinking · 2 skill · 3 read · 4 write starts, the card opens ·
 * 5–8 its parts stream in · 9 done. Phones fold the trace into one status row (compact).
 * ?demo=mid freezes at 6, ?demo=final at the end, for review screenshots.
 */
const TIMES = [0, 350, 1450, 1950, 2650, 2950, 3250, 3550, 3850, 4250];
const AT = [-1, 0, 1, 2, 3, 3, 3, 3, 3, 4];
const PART = [0, 0, 0, 0, 0, 1, 2, 3, 4, 99];
/** each step's duration, matching TIMES */
const MS = [1100, 500, 700, 1600];

export function ChatDemo({ card, t }: { card: ChatCard; t: Pick<R11HeroCopy, "chat" | "trace"> }) {
  const root = useRef<HTMLDivElement>(null);
  const seen = useInView(root, 0.5);
  const { s, live } = usePlay(TIMES, seen, 6);
  const at = AT[s];
  const steps: TraceStep[] = [
    { kind: "think", text: t.chat.think },
    { kind: "tool", name: "Skill", target: "omd-apply" },
    { kind: "tool", name: "Read", target: card.read },
    { kind: "tool", name: "Write", target: card.file, add: card.lines },
  ];
  const note = !card.face.name || card.face.shown
    ? null
    : card.face.sub
      ? t.trace.faceSub.replace("{face}", card.face.name).replace("{sub}", card.face.sub)
      : t.trace.face.replace("{face}", card.face.name);

  return (
    <div className={`sq-chat${live ? " sq-live" : ""}`} ref={root} id="chat" role="group" aria-label={t.chat.label} suppressHydrationWarning>
      <div className="sq-chat-log">
        <div className="sq-msg-u">
          <p className="sq-bub">{t.chat.prompt}</p>
        </div>
        <AgentTrace steps={steps} at={at} ms={MS} labels={t.trace} note={note} compact />
      </div>
      <div className={`sq-ex${at >= 3 ? "" : " sq-ex-hide"}`} data-company={card.id}>
        <CardView n={card.root} shown={PART[s]} />
      </div>
    </div>
  );
}
