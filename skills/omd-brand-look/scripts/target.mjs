// What omd-brand-look reads from the screen it repaints (MVP: examples/sample.html).
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { SLOT_NAMES } from './tokens.mjs';

export const SAMPLE = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'examples', 'sample.html');
export const readTarget = (file = SAMPLE) => readFileSync(file, 'utf8');

// The screen's own values for the shadcn slots (its first :root block). An omitted slot keeps this value.
export function keptValues(html) {
  const block = /^\s*:root\s*\{([\s\S]*?)\}/m.exec(html)?.[1] ?? ''; // a rule at line start, not a mention in a comment
  const out = {};
  for (const m of block.matchAll(/--([a-z-]+):\s*(#[0-9a-f]{6})\s*;/gi)) if (SLOT_NAMES.includes(m[1])) out[m[1]] = m[2].toLowerCase();
  return out;
}

// The slot pairs the screen paints text with: the first class of each text element is t-<text slot>__<background slot>.
export function textPairs(html) {
  const seen = new Map();
  for (const m of html.matchAll(/class="t-([a-z-]+?)__([a-z-]+)[\s"]/g)) seen.set(`${m[1]}|${m[2]}`, [m[1], m[2]]);
  return [...seen.values()];
}

// The pair an element label from text-contrast / break.mjs ("button.t-primary-foreground__primary") paints.
export const pairOfLabel = (label) => {
  const m = /\.t-([a-z-]+?)__([a-z-]+)$/.exec(label ?? '');
  return m ? [m[1], m[2]] : null;
};

// The repainted copy: one <style data-omd-brand-look> block, last in <head>. When the brand sets --font-sans the screen's
// default font link goes, so the face that paints is the one the label names (G3).
export function themedCopy(html, css, { dropDefaultFont }) {
  let out = dropDefaultFont ? html.replace(/[ \t]*<link[^>]*data-omd-default-font[^>]*>\n?/g, '') : html;
  return out.replace('</head>', `<style data-omd-brand-look>\n${css}\n</style>\n</head>`);
}
