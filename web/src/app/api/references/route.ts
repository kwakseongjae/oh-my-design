import { NextResponse } from 'next/server';
import { readdirSync, readFileSync, existsSync } from 'fs';
import { join } from 'path';

const CATEGORIES: Record<string, string> = {
  stripe: 'Fintech', coinbase: 'Fintech', revolut: 'Fintech', wise: 'Fintech', kraken: 'Fintech',
  vercel: 'Developer Tools', cursor: 'Developer Tools', warp: 'Developer Tools',
  expo: 'Developer Tools', lovable: 'Developer Tools', raycast: 'Developer Tools', superhuman: 'Developer Tools',
  supabase: 'Backend & DevOps', mongodb: 'Backend & DevOps', sentry: 'Backend & DevOps',
  posthog: 'Backend & DevOps', hashicorp: 'Backend & DevOps', clickhouse: 'Backend & DevOps',
  composio: 'Backend & DevOps', sanity: 'Backend & DevOps',
  notion: 'Productivity', 'linear.app': 'Productivity', cal: 'Productivity',
  zapier: 'Productivity', intercom: 'Productivity', resend: 'Productivity', mintlify: 'Productivity',
  figma: 'Design Tools', framer: 'Design Tools', miro: 'Design Tools',
  webflow: 'Design Tools', airtable: 'Design Tools', clay: 'Design Tools',
  claude: 'AI & LLM', cohere: 'AI & LLM', 'mistral.ai': 'AI & LLM',
  ollama: 'AI & LLM', 'opencode.ai': 'AI & LLM', replicate: 'AI & LLM',
  'together.ai': 'AI & LLM', 'x.ai': 'AI & LLM', elevenlabs: 'AI & LLM',
  minimax: 'AI & LLM', runwayml: 'AI & LLM', voltagent: 'AI & LLM',
  apple: 'Consumer Tech', spotify: 'Consumer Tech', uber: 'Consumer Tech',
  airbnb: 'Consumer Tech', pinterest: 'Consumer Tech', nvidia: 'Consumer Tech',
  ibm: 'Consumer Tech', spacex: 'Consumer Tech', semrush: 'Marketing',
  tesla: 'Automotive', bmw: 'Automotive', ferrari: 'Automotive',
  lamborghini: 'Automotive', renault: 'Automotive',
};

const DISPLAY_NAMES: Record<string, string> = {
  'linear.app': 'Linear', cal: 'Cal.com', 'mistral.ai': 'Mistral AI',
  'opencode.ai': 'OpenCode AI', 'together.ai': 'Together AI', 'x.ai': 'xAI',
  ibm: 'IBM', bmw: 'BMW', nvidia: 'NVIDIA', posthog: 'PostHog',
  supabase: 'Supabase', voltagent: 'VoltAgent', elevenlabs: 'ElevenLabs',
  runwayml: 'RunwayML', spacex: 'SpaceX', coinbase: 'Coinbase',
  airbnb: 'Airbnb', clickhouse: 'ClickHouse',
};

function extractPrimaryColor(md: string): string {
  const section2 = md.match(/## 2\. Color Palette.*?\n([\s\S]*?)(?=## 3\.)/);
  if (section2) {
    const m = section2[1].match(/\*\*([^*]+)\*\*\s*\(`(#[0-9a-fA-F]{6})`\).*?(?:primary|brand|CTA|main)/i);
    if (m) return m[2];
    const first = section2[1].match(/`(#[0-9a-fA-F]{6})`/);
    if (first) return first[1];
  }
  return '#6366f1';
}

function extractBackground(md: string): string {
  const quickRef = md.match(/Quick Color Reference[\s\S]*?Background.*?`(#[0-9a-fA-F]{6})`/i);
  if (quickRef) return quickRef[1];
  const s2 = md.match(/## 2\. Color.*?\n([\s\S]*?)(?=## 3\.)/);
  if (s2) {
    const bg = s2[1].match(/(?:Pure White|page background).*?`(#[0-9a-fA-F]{6})`/i);
    if (bg) return bg[1];
  }
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

  const entries = readdirSync(refDir, { withFileTypes: true })
    .filter(d => d.isDirectory() && existsSync(join(refDir, d.name, 'DESIGN.md')))
    .map(d => {
      const md = readFileSync(join(refDir, d.name, 'DESIGN.md'), 'utf-8');
      return {
        id: d.name,
        name: DISPLAY_NAMES[d.name] || d.name.charAt(0).toUpperCase() + d.name.slice(1),
        category: CATEGORIES[d.name] || 'Other',
        primaryColor: extractPrimaryColor(md),
        background: extractBackground(md),
      };
    })
    .sort((a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name));

  return NextResponse.json(entries);
}
