import { useSyncExternalStore } from "react";

/**
 * Which company the hero chat shows (round 12, owner 2026-10-21): a keycap, or its button in the
 * keyboard's hidden list, picks it, and the chat (chat-demo.tsx) and the keyboard (hero-keys.tsx) —
 * two client islands — read it from here. `id` stays null until the first pick, so the server render
 * and hydration both show the locale's opening company. Every pick, the shown company's included,
 * bumps `seq`, and the chat replays its run on a new seq (a press always answers).
 */
export interface HeroPick {
  readonly id: string | null;
  readonly seq: number;
}

const NONE: HeroPick = { id: null, seq: 0 };
let state: HeroPick = NONE;
const subs = new Set<() => void>();

export function pickCompany(id: string): void {
  state = { id, seq: state.seq + 1 };
  subs.forEach((f) => f());
}

function subscribe(f: () => void) {
  subs.add(f);
  return () => {
    subs.delete(f);
  };
}

export function useHeroPick(): HeroPick {
  return useSyncExternalStore(subscribe, () => state, () => NONE);
}

/** The current pick outside React (tests, and handlers that must not re-render). */
export function heroPick(): HeroPick {
  return state;
}

/** Tests only: forget every pick. */
export function resetHeroPick(): void {
  state = NONE;
  subs.forEach((f) => f());
}
