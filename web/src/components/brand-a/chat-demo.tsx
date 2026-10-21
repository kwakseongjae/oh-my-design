"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import type { HeroChat } from "@/lib/landing-a/chat-data.server";
import type { R11HeroCopy } from "./copy/r11-hero";
import { AgentTrace, CardView, useInView, usePlay, type TraceStep } from "./agent-trace";
import { useHeroPick } from "./hero-pick";

/**
 * Round 11 hero chat (docs/REDESIGN_R11_PLAN_2026-10-20.md W1 #2 #5 #6 #7 #8). The user's prompt,
 * the agent's trace (Thinking → Skill omd-apply → Read the company's DESIGN.md → Write the card),
 * and the example drawn only from that company's verified tokens (lib/landing-a/chat-data.server.ts
 * builds it on the server; this island only plays it). Round 13: the example is one finished
 * component — a receipt, a ticket, a list in a card, a carousel … — centred on OmD's stage, the
 * white panel that fills the rest of the column (agent-trace.css .sq-ex).
 * It opens on the page locale's own company (ko Toss, ja pixiv, en Linear, zh-tw 104); every locale
 * is its own document, so a language switch — the 2D drop included — loads and replays the new one.
 *
 * Round 12 (owner 2026-10-21): a keycap picks the company (hero-pick.ts) and the chat re-renders for
 * it — its prompt, the Read path, the Write file and the card — replaying the run in about 2.2 s
 * (reduced motion: straight to the end). Picking the company already shown replays it too. Under
 * the card, a quiet text link opens the shown company's item page; it never competes with the
 * hero's one filled action.
 *
 * No visible "example" tag (owner, #5); the group's accessible name still says it is one.
 *
 * Round 13 (owner 2026-10-21): no font note under the trace. A card is set in its company's face
 * only where that open face loads on this page for real (chat-data.server.ts faceOf); otherwise it
 * is set in the page's own face, and no substitute ever stands in for a brand face (AGENTS.md, G3),
 * so there is nothing to label.
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
/** a replay after a pick: the same ten beats in 2.2 s, and the durations the trace then reports */
const FAST = [0, 120, 520, 760, 1060, 1260, 1460, 1660, 1860, 2160];
const MS_FAST = [400, 240, 300, 1100];

export function ChatDemo({
  chats, initial, t,
}: {
  chats: Readonly<Record<string, HeroChat>>;
  initial: string;
  t: { trace: R11HeroCopy["trace"]; link: string };
}) {
  const root = useRef<HTMLDivElement>(null);
  const seen = useInView(root, 0.5);
  const pick = useHeroPick();
  const id = pick.id && chats[pick.id] ? pick.id : initial;
  const chat = chats[id];
  const card = chat.card;
  const { s, live } = usePlay(TIMES, seen, 6, { key: pick.seq, times: FAST });
  // phones stack the keycaps over the chat, so a pick would change content below the fold: bring
  // the chat into view (the least scroll that shows it; instant under reduced motion). Desktop has
  // both side by side and never scrolls.
  useEffect(() => {
    const el = root.current;
    if (!pick.seq || !el || !matchMedia("(max-width:900px)").matches) return;
    const r = el.getBoundingClientRect();
    if (r.top < innerHeight * 0.6 && r.bottom <= innerHeight) return;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ block: "nearest", behavior: reduce ? "auto" : "smooth" });
  }, [pick.seq]);
  const at = AT[s];
  const steps: TraceStep[] = [
    { kind: "think", text: chat.think },
    { kind: "tool", name: "Skill", target: "omd-apply" },
    { kind: "tool", name: "Read", target: card.read },
    { kind: "tool", name: "Write", target: card.file, add: card.lines },
  ];
  const [before, after] = t.link.split("{name}");

  return (
    <div className={`sq-chat${live ? " sq-live" : ""}`} ref={root} id="chat" role="group" aria-label={chat.label} suppressHydrationWarning>
      <div className="sq-chat-log">
        {/* a new pick re-enters the bubble (key), so the change of request is seen */}
        <div className={`sq-msg-u${pick.seq ? " sq-msg-new" : ""}`} key={pick.seq}>
          <p className="sq-bub">{chat.prompt}</p>
        </div>
        <AgentTrace steps={steps} at={at} ms={pick.seq ? MS_FAST : MS} labels={t.trace} compact />
      </div>
      {/* keyed by company: a new company's card starts hidden instead of fading out a frame of itself */}
      <div className={`sq-ex${at >= 3 ? "" : " sq-ex-hide"}`} data-company={card.id} key={card.id}>
        <CardView n={card.root} shown={PART[s]} />
      </div>
      <p className="sq-chat-go">
        <Link href={chat.href} prefetch={false}>
          {before}<span lang={chat.nLang}>{chat.name}</span>{after}<span aria-hidden="true"> →</span>
        </Link>
      </p>
    </div>
  );
}
