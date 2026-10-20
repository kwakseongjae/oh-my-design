/**
 * The question box's states (docs/REDESIGN_R11_PLAN_2026-10-20.md W4): idle → loading (waiting
 * for sources) → streaming → done, or one of error, rate-limited, unavailable ("준비 중", sticky
 * for the visit: the key is not set) and refused. Client-safe; the component is ask.tsx.
 */
import type { AskErrorCode, AskEvent, AskSource } from "./protocol";

export type AskPhase = "idle" | "loading" | "streaming" | "done" | "error" | "rate-limited" | "unavailable" | "refused";

export interface AskState {
  phase: AskPhase;
  question: string;
  text: string;
  sources: AskSource[];
  /** How a finished answer ended, when it matters to the reader. */
  note: null | "max_tokens" | "stopped" | "no_sources";
  /** Which message an error or limit shows. */
  problem: null | "failed" | "too_long" | "rate_limited" | "daily_cap" | "busy";
}

export type AskAction =
  | { type: "submit"; question: string }
  | { type: "event"; event: AskEvent }
  | { type: "http_error"; code: AskErrorCode }
  | { type: "network_error" }
  | { type: "stopped" }
  | { type: "ended_without_terminal" };

export const initialAskState: AskState = { phase: "idle", question: "", text: "", sources: [], note: null, problem: null };

export function isAskBusy(s: AskState): boolean {
  return s.phase === "loading" || s.phase === "streaming";
}

function failure(s: AskState, code: AskErrorCode): AskState {
  switch (code) {
    case "unavailable":
      return { ...s, phase: "unavailable", text: "", problem: null };
    case "rate_limited":
    case "daily_cap":
    case "busy":
      return { ...s, phase: "rate-limited", text: "", problem: code };
    case "too_long":
      return { ...s, phase: "error", text: "", problem: "too_long" };
    default:
      return { ...s, phase: "error", text: "", problem: "failed" };
  }
}

export function askReducer(s: AskState, a: AskAction): AskState {
  switch (a.type) {
    case "submit":
      if (s.phase === "unavailable") return s;
      return { phase: "loading", question: a.question, text: "", sources: [], note: null, problem: null };
    case "http_error":
      return failure(s, a.code);
    case "network_error":
      return failure(s, "failed");
    case "stopped":
      return isAskBusy(s) ? { ...s, phase: "done", note: "stopped" } : s;
    case "ended_without_terminal":
      return isAskBusy(s) ? failure(s, "failed") : s;
    case "event": {
      if (!isAskBusy(s)) return s;
      const e = a.event;
      switch (e.type) {
        case "sources":
          return { ...s, phase: "streaming", sources: e.sources };
        case "delta":
          return { ...s, phase: "streaming", text: s.text + e.text };
        case "done":
          return { ...s, phase: "done", note: e.reason === "end_turn" ? null : e.reason };
        case "refused":
          // a partial answer cut by the safety classifier is not shown
          return { ...s, phase: "refused", text: "" };
        case "error":
          return failure(s, e.code);
      }
    }
  }
  return s;
}
