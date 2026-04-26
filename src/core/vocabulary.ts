import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

export interface AxisSpec {
  type: 'int' | 'float' | 'enum';
  domain: [number, number];
  unit?: string;
  step?: number;
}

export interface KeywordAxes {
  [axis: string]: { delta: number; range: [number, number] };
}

export interface KeywordSpec {
  group: 'tone' | 'density' | 'formality' | 'domain';
  axes: KeywordAxes;
  conflicts_with: string[];
  voice_hints: string[];
  coupled_axes?: string[];
  sources?: string[];
}

export interface Vocabulary {
  version: number;
  generated_at: string;
  axis_registry: Record<string, AxisSpec>;
  modifiers: Record<string, number>;
  keywords: Record<string, KeywordSpec>;
}

export interface SynonymsFile {
  version: number;
  map: Record<string, string>;
}

let cachedVocab: Vocabulary | null = null;
let cachedSynonyms: SynonymsFile | null = null;

function dataDir(): string {
  const here = dirname(fileURLToPath(import.meta.url));
  // When built (dist/) we are at dist/*.js → data/ is ../data
  // When running from src/ via tsx we are at src/core/ → data/ is ../../data
  const candidates = [
    join(here, '..', 'data'),
    join(here, '..', '..', 'data'),
  ];
  for (const c of candidates) {
    try {
      readFileSync(join(c, 'vocabulary.json'), 'utf8');
      return c;
    } catch {
      // continue
    }
  }
  throw new Error('data/vocabulary.json not found relative to ' + here);
}

export function loadVocabulary(): Vocabulary {
  if (cachedVocab) return cachedVocab;
  const path = join(dataDir(), 'vocabulary.json');
  cachedVocab = JSON.parse(readFileSync(path, 'utf8')) as Vocabulary;
  return cachedVocab;
}

export function loadSynonyms(): SynonymsFile {
  if (cachedSynonyms) return cachedSynonyms;
  const path = join(dataDir(), 'synonyms.json');
  cachedSynonyms = JSON.parse(readFileSync(path, 'utf8')) as SynonymsFile;
  return cachedSynonyms;
}

export interface ResolvedKeyword {
  keyword: string;
  modifier: number;
  matchedAs: 'direct' | 'synonym';
  synonymSource?: string;
}

const MODIFIER_RE = /\b(primarily|mostly|slightly|very|not)\s+([a-z][a-z-]*)/gi;

export function tokenize(description: string): string[] {
  return description
    .toLowerCase()
    .split(/[^a-z-]+/)
    .filter(Boolean);
}

export function extractKeywords(description: string): ResolvedKeyword[] {
  const vocab = loadVocabulary();
  const { map: synonyms } = loadSynonyms();

  const lower = description.toLowerCase();
  const modifierOverrides = new Map<string, number>();
  let match: RegExpExecArray | null;
  const modRe = new RegExp(MODIFIER_RE.source, MODIFIER_RE.flags);
  while ((match = modRe.exec(lower)) !== null) {
    const modName = match[1];
    const target = match[2];
    const value = vocab.modifiers[modName];
    if (value !== undefined) modifierOverrides.set(target, value);
  }

  const tokens = tokenize(description);
  const seen = new Set<string>();
  const results: ResolvedKeyword[] = [];

  for (const token of tokens) {
    if (seen.has(token)) continue;
    seen.add(token);

    if (vocab.keywords[token]) {
      results.push({
        keyword: token,
        modifier: modifierOverrides.get(token) ?? 1.0,
        matchedAs: 'direct',
      });
      continue;
    }

    const syn = synonyms[token];
    if (syn && vocab.keywords[syn]) {
      results.push({
        keyword: syn,
        modifier: modifierOverrides.get(token) ?? 1.0,
        matchedAs: 'synonym',
        synonymSource: token,
      });
    }
  }

  return results;
}

export interface ConflictResolution {
  kept: ResolvedKeyword[];
  dropped: Array<{ keyword: string; reason: string }>;
  warnings: string[];
}

export function resolveConflicts(
  keywords: ResolvedKeyword[]
): ConflictResolution {
  const vocab = loadVocabulary();
  const kept: ResolvedKeyword[] = [];
  const dropped: Array<{ keyword: string; reason: string }> = [];

  // Classify each keyword: kept if strictly higher modifier than any conflicter, else dropped.
  for (const kw of keywords) {
    const spec = vocab.keywords[kw.keyword];
    if (!spec) continue;

    const conflictingHere = keywords.filter(
      (other) =>
        other.keyword !== kw.keyword &&
        spec.conflicts_with.includes(other.keyword)
    );

    if (conflictingHere.length === 0) {
      kept.push(kw);
      continue;
    }

    const strictlyHigherThanAll = conflictingHere.every(
      (c) => kw.modifier > c.modifier + 1e-9
    );
    if (strictlyHigherThanAll) {
      kept.push(kw);
      continue;
    }

    dropped.push({
      keyword: kw.keyword,
      reason: `conflicts with ${conflictingHere.map((c) => c.keyword).join(',')}`,
    });
  }

  // Emit warnings ONLY for conflict groups where no member was kept
  // (genuine tie — user should disambiguate).
  const warnings: string[] = [];
  const keptSet = new Set(kept.map((k) => k.keyword));
  const warned = new Set<string>();
  for (const kw of keywords) {
    const spec = vocab.keywords[kw.keyword];
    if (!spec) continue;
    const conflictingHere = keywords.filter(
      (other) =>
        other.keyword !== kw.keyword &&
        spec.conflicts_with.includes(other.keyword)
    );
    if (conflictingHere.length === 0) continue;
    const groupKeys = [kw.keyword, ...conflictingHere.map((c) => c.keyword)];
    const groupHasWinner = groupKeys.some((k) => keptSet.has(k));
    if (groupHasWinner) continue;
    const pairKey = [...new Set(groupKeys)].sort().join(',');
    if (warned.has(pairKey)) continue;
    warned.add(pairKey);
    warnings.push(
      `${kw.keyword} ↔ ${conflictingHere.map((c) => c.keyword).join(',')}: use "primarily <kw>" or "very <kw>" to pick a winner`
    );
  }

  return { kept, dropped, warnings };
}

export interface DeltaSet {
  axes: Record<string, { value: number; rangeUnion: [number, number]; sources: string[] }>;
  voiceHints: string[];
  unresolved: string[];
  warnings: string[];
  droppedKeywords: Array<{ keyword: string; reason: string }>;
  matchedKeywords: ResolvedKeyword[];
}

function clamp(value: number, lo: number, hi: number): number {
  return Math.max(lo, Math.min(hi, value));
}

function snap(value: number, spec: AxisSpec): number {
  if (spec.type === 'int') return Math.round(value);
  if (spec.type === 'enum') {
    const [lo, hi] = spec.domain;
    return Math.abs(value - lo) < Math.abs(value - hi) ? lo : hi;
  }
  return Number(value.toFixed(3));
}

export function buildDeltaSet(description: string): DeltaSet {
  const vocab = loadVocabulary();
  const matched = extractKeywords(description);
  const { kept, dropped, warnings } = resolveConflicts(matched);

  const axes: DeltaSet['axes'] = {};
  const voiceHintSet = new Set<string>();

  for (const kw of kept) {
    const spec = vocab.keywords[kw.keyword];
    const multiplier = kw.modifier;

    for (const hint of spec.voice_hints) voiceHintSet.add(hint);

    for (const [axisName, axisDelta] of Object.entries(spec.axes)) {
      const bucket = axes[axisName] ?? {
        value: 0,
        rangeUnion: [axisDelta.range[0], axisDelta.range[1]] as [number, number],
        sources: [] as string[],
      };
      bucket.value += axisDelta.delta * multiplier;
      bucket.rangeUnion = [
        Math.min(bucket.rangeUnion[0], axisDelta.range[0]),
        Math.max(bucket.rangeUnion[1], axisDelta.range[1]),
      ];
      bucket.sources.push(kw.keyword);
      axes[axisName] = bucket;
    }
  }

  for (const [axisName, bucket] of Object.entries(axes)) {
    const registry = vocab.axis_registry[axisName];
    if (!registry) continue;
    let v = clamp(bucket.value, bucket.rangeUnion[0], bucket.rangeUnion[1]);
    v = clamp(v, registry.domain[0], registry.domain[1]);
    bucket.value = snap(v, registry);
    bucket.sources.sort();
  }

  return {
    axes,
    voiceHints: [...voiceHintSet],
    unresolved: [],
    warnings,
    droppedKeywords: dropped,
    matchedKeywords: kept,
  };
}

export function listKeywords(): string[] {
  return Object.keys(loadVocabulary().keywords).sort();
}
