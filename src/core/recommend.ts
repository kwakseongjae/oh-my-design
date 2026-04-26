import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { tokenize } from './vocabulary.js';

export interface ReferenceTag {
  id: string;
  color: string;
  category: string;
  keywords: string[];
}

export interface RecommendHit {
  id: string;
  category: string;
  color: string;
  keywords: string[];
  score: number;
  matchedKeywords: string[];
}

let cachedTags: ReferenceTag[] | null = null;

function stem(s: string): string {
  // Minimal English suffix stripping for recall across -ing/-ed/-s variants.
  // Preserves stems of length ≥3 so we don't collapse short words.
  let out = s;
  for (const suffix of ['ing', 'ed', 'ly', 'es', 's']) {
    if (out.length - suffix.length >= 3 && out.endsWith(suffix)) {
      out = out.slice(0, -suffix.length);
      break;
    }
  }
  return out;
}

function tagsFilePath(): string {
  const here = dirname(fileURLToPath(import.meta.url));
  const candidates = [
    join(here, '..', 'data', 'reference-tags.md'),
    join(here, '..', '..', 'data', 'reference-tags.md'),
  ];
  for (const c of candidates) {
    try {
      readFileSync(c, 'utf8');
      return c;
    } catch {
      // continue
    }
  }
  throw new Error('data/reference-tags.md not found');
}

const ROW_RE = /^\|\s*([a-z0-9._-]+)\s*\|\s*([^|]*?)\s*\|\s*([^|]*?)\s*\|\s*([^|]*?)\s*\|$/i;

export function loadReferenceTags(): ReferenceTag[] {
  if (cachedTags) return cachedTags;
  const raw = readFileSync(tagsFilePath(), 'utf8');
  const rows: ReferenceTag[] = [];
  for (const line of raw.split('\n')) {
    const m = ROW_RE.exec(line);
    if (!m) continue;
    const [, id, color, category, keywordsRaw] = m;
    if (id === 'id') continue; // header
    if (id.startsWith('---')) continue;
    rows.push({
      id: id.trim(),
      color: color.trim(),
      category: category.trim(),
      keywords: keywordsRaw
        .split(',')
        .map((k) => k.trim().toLowerCase())
        .filter(Boolean),
    });
  }
  cachedTags = rows;
  return rows;
}

export interface RecommendOptions {
  topK?: number;
  diversityByCategory?: boolean;
}

export function recommend(
  description: string,
  opts: RecommendOptions = {}
): RecommendHit[] {
  const topK = opts.topK ?? 5;
  const diversityByCategory = opts.diversityByCategory ?? true;

  const tags = loadReferenceTags();
  const rawTokens = [
    ...tokenize(description),
    ...description
      .toLowerCase()
      .split(/[^a-z0-9-]+/)
      .filter(Boolean),
  ];
  const queryTokens = new Set(rawTokens);
  const queryStems = new Set(rawTokens.map(stem));

  const scored: Array<RecommendHit & { _ratio: number }> = tags.map((t) => {
    const matched = t.keywords.filter(
      (kw) => queryTokens.has(kw) || queryStems.has(stem(kw))
    );
    // Score = absolute match count (primary) with ratio as tiebreak.
    // Absolute count prevents sparse-tag refs from winning on a single match.
    const score = matched.length;
    const ratio = matched.length / Math.max(1, t.keywords.length);
    return {
      id: t.id,
      category: t.category,
      color: t.color,
      keywords: t.keywords,
      score,
      matchedKeywords: matched,
      _ratio: ratio,
    };
  });

  scored.sort(
    (a, b) =>
      b.score - a.score || b._ratio - a._ratio || a.id.localeCompare(b.id)
  );

  const stripRatio = (s: typeof scored): RecommendHit[] =>
    s.map(({ _ratio, ...rest }) => {
      void _ratio;
      return rest;
    });

  if (!diversityByCategory) return stripRatio(scored.slice(0, topK));

  // Category-bucketed diversity: one top hit per category, fill with next best.
  const picked = stripRatio(scored).slice(0, 0);
  const pickedSet = new Set<string>();
  const usedCategories = new Set<string>();
  const allHits = stripRatio(scored);
  for (const hit of allHits) {
    if (picked.length >= topK) break;
    if (usedCategories.has(hit.category)) continue;
    picked.push(hit);
    pickedSet.add(hit.id);
    usedCategories.add(hit.category);
  }
  for (const hit of allHits) {
    if (picked.length >= topK) break;
    if (pickedSet.has(hit.id)) continue;
    picked.push(hit);
    pickedSet.add(hit.id);
  }
  return picked;
}
