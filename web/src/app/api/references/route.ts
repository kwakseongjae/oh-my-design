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

export async function GET() {
  const refDir = join(process.cwd(), 'references');
  if (!existsSync(refDir)) {
    return NextResponse.json({ error: 'references/ not found' }, { status: 500 });
  }

  // Resolve HOT server-side from the same `select` leaderboard the
  // /api/leaderboard endpoint serves. Baking it into this single response
  // (flag + ordering) means the grid never reflows after first paint.
  // Degrades silently to "no hot refs" when KV is unavailable (local dev).
  const hotIds = new Set<string>();
  const redis = getRedis();
  if (redis) {
    try {
      const raw = await redis.zrange<(string | number)[]>(counterKey('select'), 0, HOT_LIMIT - 1, {
        rev: true,
        withScores: true,
      });
      for (let i = 0; i < raw.length; i += 2) {
        if (Number(raw[i + 1]) > 0) hotIds.add(String(raw[i]));
      }
    } catch {
      /* KV hiccup → no hot pills; the list still renders normally. */
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
        primaryColor: e.tokens?.colors?.primary || e.tokens?.color?.primary || extractPrimaryColor(md, e.primaryColor),
        background: e.tokens?.colors?.canvas || e.tokens?.colors?.background || e.tokens?.color?.background || extractBackground(md),
        hot: hotIds.has(e.id),
        tokens: e.tokens ?? null,
      };
    })
    .sort((a, b) => {
      // HOT references float to the top, grouped together. Within the hot and
      // non-hot partitions the existing country/category order is preserved.
      if (a.hot !== b.hot) return a.hot ? -1 : 1;
      // Asian markets first (Korea → Taiwan → Japan), then everything else by industry order.
      const countryPriority = ['Korea', 'Taiwan', 'Japan'];
      const ac = countryPriority.indexOf(a.country);
      const bc = countryPriority.indexOf(b.country);
      if (ac !== -1 || bc !== -1) {
        if (ac === -1) return 1;
        if (bc === -1) return -1;
        return ac - bc || a.name.localeCompare(b.name);
      }
      const order = [
        'AI & LLM', 'Design Tools', 'Developer Tools',
        'Productivity', 'Consumer Tech', 'Fintech', 'Backend & DevOps',
        'E-commerce', 'Automotive', 'Marketing', 'Government',
      ];
      const ai = order.indexOf(a.category);
      const bi = order.indexOf(b.category);
      const oa = ai === -1 ? 999 : ai;
      const ob = bi === -1 ? 999 : bi;
      return oa - ob || a.name.localeCompare(b.name);
    });

  return NextResponse.json(entries);
}
