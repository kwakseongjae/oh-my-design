import { NextResponse } from 'next/server';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';
import { REGISTRY } from '@/data/registry.generated';
import { counterKey, getRedis } from '@/lib/kv';

// Re-resolve the HOT set at most every 30s (matches /api/leaderboard) so the
// builder grid arrives already hot-first + badged, without hammering KV on
// every page load.
export const revalidate = 30;

// Number of top-selected references that earn the HOT treatment — mirrors the
// `useHotRefs(5)` default used elsewhere so the two surfaces agree.
const HOT_LIMIT = 5;

// Display labels for category slugs. Sort priority lives in `CATEGORY_ORDER`.
const CATEGORY_LABELS: Record<string, string> = {
  fintech: 'Fintech',
  'developer-tools': 'Developer Tools',
  'backend-devops': 'Backend & DevOps',
  productivity: 'Productivity',
  'design-tools': 'Design Tools',
  ai: 'AI & LLM',
  'consumer-tech': 'Consumer Tech',
  marketing: 'Marketing',
  automotive: 'Automotive',
  ecommerce: 'E-commerce',
  government: 'Government',
  education: 'Education',
  healthcare: 'Healthcare',
  saas: 'Productivity',
};

const COUNTRY_LABELS: Record<string, string> = {
  KR: 'Korea',
  TW: 'Taiwan',
  JP: 'Japan',
  FR: 'France',
  IT: 'Italy',
  DE: 'Germany',
  UK: 'UK',
  US: 'United States',
};

function extractPrimaryColor(md: string, fallback: string): string {
  const section2 = md.match(/## 2\. Color Palette.*?\n([\s\S]*?)(?=## 3\.)/);
  if (section2) {
    const m = section2[1].match(/\*\*([^*]+)\*\*\s*\(`(#[0-9a-fA-F]{6})`\).*?(?:primary|brand|CTA|main)/i);
    if (m) return m[2];
    const first = section2[1].match(/`(#[0-9a-fA-F]{6})`/);
    if (first) return first[1];
  }
  return fallback;
}

function extractBackground(md: string): string {
  const quickRef = md.match(/Quick Color Reference[\s\S]*?(?:Page\s+)?Background.*?[(`](#[0-9a-fA-F]{6})[)`]/i);
  if (quickRef) return quickRef[1];
  const s2 = md.match(/## 2\. Color.*?\n([\s\S]*?)(?=## 3\.)/);
  if (s2) {
    const bg = s2[1].match(/(?:Pure White|Pure Black|page background).*?`(#[0-9a-fA-F]{6})`/i);
    if (bg) return bg[1];
  }
  const reverseMatch = md.match(/`(#[0-9a-fA-F]{6})`[^.]*?(?:primary\s+)?page\s+background/i);
  if (reverseMatch) return reverseMatch[1];
  if (md.match(/dark.mode.(?:native|first)/i)) {
    const d = md.match(/(?:marketing|deepest|canvas).*?`(#[0-9a-fA-F]{6})`/i);
    if (d) return d[1];
  }
  return '#ffffff';
}

/** Content-quality score (0..1) — our algorithmic stand-in for a "marquee"
 *  signal (no per-reference star count exists). Rewards live-extracted tokens,
 *  an official design-system link, harvested components, and token completeness.
 *  Globally iconic refs (Apple, Anthropic, Stripe) tend to be the most complete,
 *  so they surface in "Recommended" even before any popularity accrues. */
function qualityScore(e: (typeof REGISTRY)[number]): number {
  const t = e.tokens;
  let q = 0;
  const src = t?.source;
  if (src === 'live-extract') q += 0.35;
  else if (src === 'design-system' || src === 'reconciled') q += 0.2;
  else if (src) q += 0.1;
  if (e.ds) q += 0.2;
  if (t?.components_harvested) q += 0.15;
  const colorCount = t?.colors ? Object.keys(t.colors).length : 0;
  if (colorCount >= 6) q += 0.15;
  if (t?.typography) q += 0.15;
  return Math.min(1, q);
}

export async function GET() {
  const refDir = join(process.cwd(), 'references');
  if (!existsSync(refDir)) {
    return NextResponse.json({ error: 'references/ not found' }, { status: 500 });
  }

  // Resolve HOT server-side from the same `select` leaderboard the
  // /api/leaderboard endpoint serves. Baking it into this single response
  // (flag + ordering) means the grid never reflows after first paint.
  // Degrades silently to "no hot refs" when KV is unavailable (local dev).
  // Full popularity map (not just the top 5) so the client can offer a
  // "Popular" sort and blend popularity into the locale-aware "Recommended"
  // default. HOT = the top `HOT_LIMIT` of this same map (score > 0).
  const popMap = new Map<string, number>();
  const hotIds = new Set<string>();
  const redis = getRedis();
  if (redis) {
    try {
      const raw = await redis.zrange<(string | number)[]>(counterKey('select'), 0, -1, {
        rev: true,
        withScores: true,
      });
      for (let i = 0; i < raw.length; i += 2) {
        const id = String(raw[i]);
        const score = Number(raw[i + 1]);
        popMap.set(id, score);
        if (score > 0 && hotIds.size < HOT_LIMIT) hotIds.add(id);
      }
    } catch {
      /* KV hiccup → no hot pills / zero popularity; list still renders. */
    }
  }

  const entries = REGISTRY
    .filter(e => existsSync(join(refDir, e.id, 'DESIGN.md')))
    .map(e => {
      const md = readFileSync(join(refDir, e.id, 'DESIGN.md'), 'utf-8');
      // Prefer the reconciled machine-readable token block when present; fall
      // back to the legacy prose-regex extraction for refs without tokens.
      return {
        id: e.id,
        name: e.displayName,
        category: CATEGORY_LABELS[e.category] || e.category,
        country: COUNTRY_LABELS[e.country] || e.country,
        countryCode: e.country, // raw 2-letter for client locale matching
        primaryColor: e.tokens?.colors?.primary || e.tokens?.color?.primary || extractPrimaryColor(md, e.primaryColor),
        background: e.tokens?.colors?.canvas || e.tokens?.colors?.background || e.tokens?.color?.background || extractBackground(md),
        hot: hotIds.has(e.id),
        pop: popMap.get(e.id) ?? 0,        // select-counter score, for Popular sort + blend
        added: e.added ?? null,            // first-added date, for New sort + recency boost
        quality: qualityScore(e),          // 0..1 content-completeness (marquee proxy)
      };
    });

  // Locale-agnostic default ordering (HOT first → quality+popularity), so SSR /
  // no-JS and the first paint are sensible. The client re-sorts by the chosen
  // mode AND the visitor locale (see reference-selector). The previous hardcoded
  // KR→TW→JP country pin is gone — it buried globally iconic refs after the HOT 5.
  const maxPop = Math.max(1, ...entries.map(e => e.pop));
  entries.sort((a, b) => {
    if (a.hot !== b.hot) return a.hot ? -1 : 1;
    const sa = 0.5 * a.quality + 0.5 * (Math.log1p(a.pop) / Math.log1p(maxPop));
    const sb = 0.5 * b.quality + 0.5 * (Math.log1p(b.pop) / Math.log1p(maxPop));
    return sb - sa || a.name.localeCompare(b.name);
  });

  return NextResponse.json(entries);
}
