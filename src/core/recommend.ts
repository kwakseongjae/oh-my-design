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
  matchedCategories: string[];
}

const CATEGORY_HINTS: Record<string, string[]> = {
  Consumer: [
    'marketplace',
    'shopping',
    'ecommerce',
    'consumer',
    'b2c',
    'retail',
    'subscription',
    'family',
    'families',
    'meal',
    'meals',
    'meal-kit',
    'food',
    'travel',
    'social',
    'community',
    'buyer',
    'seller',
    'parents',
    'kids',
    'lifestyle',
    'recipe',
    'recipes',
  ],
  Fintech: [
    'fintech',
    'banking',
    'bank',
    'payment',
    'payments',
    'crypto',
    'trading',
    'wallet',
    'invest',
    'investing',
    'money',
    'finance',
    'financial',
    'lending',
    'remittance',
    'tax',
  ],
  'Developer Tools': [
    'developer',
    'devtool',
    'devtools',
    'dev-tool',
    'deploy',
    'deployment',
    'build',
    'ci',
    'cd',
    'cli',
    'sdk',
    'editor',
    'ide',
    'engineering',
    'compiler',
    'runtime',
  ],
  AI: [
    'ai',
    'ml',
    'llm',
    'agent',
    'agents',
    'model',
    'models',
    'inference',
    'gpt',
    'chatbot',
    'rag',
    'embedding',
    'embeddings',
    'mcp',
  ],
  'Design Tools': [
    'design',
    'design-tool',
    'whiteboard',
    'prototype',
    'prototyping',
    'wireframe',
    'wireframes',
    'mockup',
    'mockups',
    'figma-like',
    'illustration',
    'canvas',
  ],
  Productivity: [
    'saas',
    'workspace',
    'team',
    'teams',
    'project-management',
    'enterprise',
    'b2b',
    'crm',
    'docs',
    'wiki',
    'collaboration',
    'kanban',
    'scheduling',
    'meetings',
  ],
  Backend: [
    'backend',
    'database',
    'db',
    'api',
    'apis',
    'observability',
    'monitoring',
    'logging',
    'analytics',
    'pipeline',
    'data-pipeline',
    'streaming',
    'queue',
    'cache',
  ],
  Automotive: [
    'car',
    'cars',
    'vehicle',
    'vehicles',
    'auto',
    'automotive',
    'driving',
    'ev',
    'electric-vehicle',
  ],
  Marketing: [
    'marketing',
    'seo',
    'campaign',
    'campaigns',
    'newsletter',
    'email-marketing',
    'attribution',
  ],
};

function matchedCategoriesFor(
  queryTokens: Set<string>,
  queryStems: Set<string>
): Set<string> {
  const out = new Set<string>();
  for (const [category, hints] of Object.entries(CATEGORY_HINTS)) {
    for (const hint of hints) {
      if (queryTokens.has(hint) || queryStems.has(stem(hint))) {
        out.add(category);
        break;
      }
    }
  }
  return out;
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
  const matchedCategories = matchedCategoriesFor(queryTokens, queryStems);

  // First pass: tag matches per ref, to know whether to gate category bonus.
  const tagMatchByRef = tags.map((t) =>
    t.keywords.filter(
      (kw) => queryTokens.has(kw) || queryStems.has(stem(kw))
    )
  );
  const totalTagMatches = tagMatchByRef.reduce((a, m) => a + m.length, 0);

  const scored: Array<RecommendHit & { _ratio: number }> = tags.map((t, i) => {
    const matched = tagMatchByRef[i];
    const tagScore = matched.length;
    const categoryHit = matchedCategories.has(t.category);
    // Category bonus normally requires ≥1 tag match (prevents flooding).
    // But when the description produces zero tag matches anywhere, we
    // fall back to category-only scoring so users still get a useful
    // top-K instead of an alphabetical no-op.
    const categoryBonus =
      categoryHit && (tagScore > 0 || totalTagMatches === 0) ? 0.5 : 0;
    const score = tagScore + categoryBonus;
    const ratio = matched.length / Math.max(1, t.keywords.length);
    return {
      id: t.id,
      category: t.category,
      color: t.color,
      keywords: t.keywords,
      score,
      matchedKeywords: matched,
      matchedCategories: categoryHit ? [t.category] : [],
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
