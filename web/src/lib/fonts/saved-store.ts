/**
 * localStorage-backed persistence for Font Playground saves.
 *
 * Each SavedFont captures the user's catalog pick + customization state
 * (axis values, letter-spacing, static weight, render size, sample text).
 * No server — simpler privacy story, zero auth. Users can also share
 * individual saves via URL-state encoding (see share-link.ts).
 */

import type { LiveSelection } from "./tweaks";

const STORAGE_KEY = "omd.fontPlayground.saved.v1";

export interface SavedFont {
  id: string;
  /** User-chosen display name ("My warm brand font"). */
  name: string;
  fontId: string;
  /** UNIX ms. */
  createdAt: number;
  selection: LiveSelection;
  /** Preview size (px) the user settled on. */
  previewSize: number;
  /** Sample text the user was typing when they saved. */
  sampleText: string;
}

function safeParse(text: string | null): SavedFont[] {
  if (!text) return [];
  try {
    const parsed = JSON.parse(text);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (x): x is SavedFont =>
        x &&
        typeof x === "object" &&
        typeof x.id === "string" &&
        typeof x.fontId === "string" &&
        typeof x.name === "string" &&
        x.selection &&
        typeof x.selection === "object",
    );
  } catch {
    return [];
  }
}

function read(): SavedFont[] {
  if (typeof window === "undefined") return [];
  return safeParse(localStorage.getItem(STORAGE_KEY));
}

function write(list: SavedFont[]): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

export function listSaved(): SavedFont[] {
  return read().sort((a, b) => b.createdAt - a.createdAt);
}

export function getSaved(id: string): SavedFont | null {
  return read().find((s) => s.id === id) ?? null;
}

export interface SaveInput {
  name: string;
  fontId: string;
  selection: LiveSelection;
  previewSize: number;
  sampleText: string;
}

export function saveFont(input: SaveInput): SavedFont {
  const list = read();
  const entry: SavedFont = {
    id: `sf_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`,
    name: input.name.trim() || "Untitled font",
    fontId: input.fontId,
    createdAt: Date.now(),
    selection: input.selection,
    previewSize: input.previewSize,
    sampleText: input.sampleText,
  };
  list.push(entry);
  write(list);
  return entry;
}

export function updateSaved(id: string, patch: Partial<SaveInput>): SavedFont | null {
  const list = read();
  const idx = list.findIndex((s) => s.id === id);
  if (idx === -1) return null;
  list[idx] = {
    ...list[idx],
    ...(patch.name !== undefined ? { name: patch.name.trim() || list[idx].name } : {}),
    ...(patch.fontId !== undefined ? { fontId: patch.fontId } : {}),
    ...(patch.selection !== undefined ? { selection: patch.selection } : {}),
    ...(patch.previewSize !== undefined ? { previewSize: patch.previewSize } : {}),
    ...(patch.sampleText !== undefined ? { sampleText: patch.sampleText } : {}),
  };
  write(list);
  return list[idx];
}

export function deleteSaved(id: string): void {
  const list = read().filter((s) => s.id !== id);
  write(list);
}

export function countSaved(): number {
  return read().length;
}
