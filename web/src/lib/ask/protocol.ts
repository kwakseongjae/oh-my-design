/**
 * Wire format between /api/ask and the question box (docs/REDESIGN_R11_PLAN_2026-10-20.md W4).
 * Client-safe: no server imports.
 *
 * Failures before the answer starts are JSON `{ error }` with a real HTTP status (503
 * unavailable, 429 rate_limited / daily_cap / busy, 413 too_long, 400 invalid, 403 forbidden).
 * An answer is NDJSON (`application/x-ndjson`), one event per line: `sources` first so the cards
 * appear at once, then `delta` text, then exactly one terminal `done`, `refused` or `error`.
 */

export const ASK_MAX_CHARS = 500;

export type AskErrorCode =
  | "unavailable"
  | "invalid"
  | "too_long"
  | "forbidden"
  | "rate_limited"
  | "daily_cap"
  | "busy"
  | "failed";

export interface AskSource {
  n: number;
  title: string;
  url: string;
}

export type AskDoneReason = "end_turn" | "max_tokens" | "no_sources";

export type AskEvent =
  | { type: "sources"; sources: AskSource[] }
  | { type: "delta"; text: string }
  | { type: "done"; reason: AskDoneReason }
  | { type: "refused" }
  | { type: "error"; code: AskErrorCode };

/** Code points, so a Hangul or emoji character counts once. */
export function askLength(question: string): number {
  return Array.from(question).length;
}

const ERROR_CODES = new Set<AskErrorCode>(["unavailable", "invalid", "too_long", "forbidden", "rate_limited", "daily_cap", "busy", "failed"]);

export function isAskErrorCode(v: unknown): v is AskErrorCode {
  return typeof v === "string" && ERROR_CODES.has(v as AskErrorCode);
}

function isEvent(v: unknown): v is AskEvent {
  if (!v || typeof v !== "object") return false;
  const e = v as Record<string, unknown>;
  switch (e.type) {
    case "sources":
      return Array.isArray(e.sources);
    case "delta":
      return typeof e.text === "string";
    case "done":
      return e.reason === "end_turn" || e.reason === "max_tokens" || e.reason === "no_sources";
    case "refused":
      return true;
    case "error":
      return isAskErrorCode(e.code);
    default:
      return false;
  }
}

/** Splits an NDJSON byte stream into events; partial lines wait for the next chunk. */
export function createNdjsonParser(onEvent: (e: AskEvent) => void) {
  let buf = "";
  const line = (raw: string) => {
    const s = raw.trim();
    if (!s) return;
    try {
      const v: unknown = JSON.parse(s);
      if (isEvent(v)) onEvent(v);
    } catch {
      // a malformed line is dropped; the missing terminal event surfaces as an error
    }
  };
  return {
    push(chunk: string) {
      buf += chunk;
      let i: number;
      while ((i = buf.indexOf("\n")) >= 0) {
        line(buf.slice(0, i));
        buf = buf.slice(i + 1);
      }
    },
    end() {
      line(buf);
      buf = "";
    },
  };
}
