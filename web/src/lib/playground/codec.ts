/**
 * URL-state codec for Playground.
 *
 * State → JSON → LZ-string compressed → base64url → `?c=<compact>`
 * Decoded with the reverse. Version check (`v: 1`) happens in
 * `validatePlaygroundState`; this module is the wire-format layer only.
 */

import { compressToEncodedURIComponent, decompressFromEncodedURIComponent } from "lz-string";
import type { PlaygroundState } from "./state";
import { validatePlaygroundState } from "./state";

export function encodeState(state: PlaygroundState): string {
  const json = JSON.stringify(state);
  return compressToEncodedURIComponent(json);
}

export function decodeState(compact: string): PlaygroundState | null {
  try {
    const json = decompressFromEncodedURIComponent(compact);
    if (!json) return null;
    const parsed = JSON.parse(json);
    return validatePlaygroundState(parsed);
  } catch {
    return null;
  }
}

/** Build the full share URL for a state. Consumer wraps this with
 *  `navigator.clipboard.writeText(buildShareUrl(origin, state))`. */
export function buildShareUrl(origin: string, state: PlaygroundState): string {
  const c = encodeState(state);
  return `${origin}/playground?c=${c}`;
}
