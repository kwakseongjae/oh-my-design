/**
 * URL-state codec for Font Playground.
 *
 * State → JSON → LZ-string compressed → `?f=<compact>`. Mirrors the
 * Playground codec but with a minimal shape: fontId + selection +
 * previewSize + sampleText. Shared links land in Stage 3 (customize)
 * with the selection preloaded.
 */

import { compressToEncodedURIComponent, decompressFromEncodedURIComponent } from "lz-string";
import type { LiveSelection } from "./tweaks";

export interface SharedFontState {
  v: 1;
  fontId: string;
  selection: LiveSelection;
  previewSize: number;
  sampleText: string;
}

export function encodeSharedFont(state: Omit<SharedFontState, "v">): string {
  const full: SharedFontState = { v: 1, ...state };
  return compressToEncodedURIComponent(JSON.stringify(full));
}

export function decodeSharedFont(compact: string): SharedFontState | null {
  try {
    const json = decompressFromEncodedURIComponent(compact);
    if (!json) return null;
    const parsed = JSON.parse(json) as Partial<SharedFontState>;
    if (
      parsed.v !== 1 ||
      typeof parsed.fontId !== "string" ||
      !parsed.selection ||
      typeof parsed.selection !== "object" ||
      typeof parsed.previewSize !== "number" ||
      typeof parsed.sampleText !== "string"
    ) {
      return null;
    }
    return parsed as SharedFontState;
  } catch {
    return null;
  }
}

export function buildFontShareUrl(
  origin: string,
  state: Omit<SharedFontState, "v">,
): string {
  return `${origin}/font-playground?f=${encodeSharedFont(state)}`;
}
