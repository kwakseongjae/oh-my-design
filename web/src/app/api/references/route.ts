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
  // Asian companies categorized by industry (country handled by separate filter)
  toss: 'Fintech', kakaobank: 'Fintech',
  kakao: 'Consumer Tech', baemin: 'Consumer Tech', karrot: 'Consumer Tech',
  naver: 'Consumer Tech', ohouse: 'Consumer Tech', ridi: 'Consumer Tech',
  qanda: 'Consumer Tech',
  pinkoi: 'Consumer Tech', dcard: 'Consumer Tech',
  line: 'Consumer Tech', mercari: 'Consumer Tech',
  freee: 'Productivity',
  coupang: 'E-commerce', musinsa: 'E-commerce', kurly: 'E-commerce',
  yeogiotte: 'Travel', yanolja: 'Travel',
  krds: 'Government',
  // 2026-05-13 KR-10 batch
  socar: 'Consumer Tech', gangnamunni: 'Consumer Tech', zigbang: 'Consumer Tech',
  kakaopay: 'Fintech', banksalad: 'Fintech',
  zigzag: 'E-commerce', '29cm': 'E-commerce', ably: 'E-commerce',
  wanted: 'Productivity', remember: 'Productivity',
  // 2026-05-14 KR-10 batch
  kream: 'E-commerce', bunjang: 'E-commerce',
  upbit: 'Fintech', kbank: 'Fintech', wadiz: 'Fintech',
  inflearn: 'Productivity', classum: 'Productivity',
  channeltalk: 'Productivity', flex: 'Productivity',
  lunit: 'Consumer Tech',
};

const COUNTRIES: Record<string, string> = {
  // Korea
  toss: 'Korea', kakao: 'Korea', baemin: 'Korea', karrot: 'Korea',
  yeogiotte: 'Korea', musinsa: 'Korea', kurly: 'Korea', ohouse: 'Korea',
  naver: 'Korea', yanolja: 'Korea', coupang: 'Korea', kakaobank: 'Korea',
  ridi: 'Korea', qanda: 'Korea', krds: 'Korea',
  // 2026-05-13 KR-10 batch
  socar: 'Korea', gangnamunni: 'Korea', kakaopay: 'Korea', zigzag: 'Korea',
  '29cm': 'Korea', ably: 'Korea', banksalad: 'Korea', zigbang: 'Korea',
  wanted: 'Korea', remember: 'Korea',
  // 2026-05-14 KR-10 batch
  kream: 'Korea', upbit: 'Korea', kbank: 'Korea', inflearn: 'Korea',
  wadiz: 'Korea', channeltalk: 'Korea', lunit: 'Korea',
  bunjang: 'Korea', flex: 'Korea', classum: 'Korea',
  // Taiwan
  pinkoi: 'Taiwan', dcard: 'Taiwan',
  // Japan
  line: 'Japan', mercari: 'Japan', freee: 'Japan',
  // France
  'mistral.ai': 'France', renault: 'France',
  // Italy
  ferrari: 'Italy', lamborghini: 'Italy',
  // Germany
  bmw: 'Germany',
  // UK
  revolut: 'UK', wise: 'UK',
  // (default for unmapped → 'United States')
};

const DISPLAY_NAMES: Record<string, string> = {
  'linear.app': 'Linear', cal: 'Cal.com', 'mistral.ai': 'Mistral AI',
  'opencode.ai': 'OpenCode AI', 'together.ai': 'Together AI', 'x.ai': 'xAI',
  ibm: 'IBM', bmw: 'BMW', nvidia: 'NVIDIA', posthog: 'PostHog',
  supabase: 'Supabase', voltagent: 'VoltAgent', elevenlabs: 'ElevenLabs',
  runwayml: 'RunwayML', spacex: 'SpaceX', coinbase: 'Coinbase',
  airbnb: 'Airbnb', clickhouse: 'ClickHouse',
  karrot: 'Karrot', toss: 'Toss', baemin: 'Baemin', kakao: 'Kakao',
  pinkoi: 'Pinkoi', dcard: 'Dcard',
  line: 'LINE', mercari: 'Mercari', freee: 'freee',
  yeogiotte: '여기어때', musinsa: 'Musinsa', kurly: 'Kurly', ohouse: 'Ohouse',
  naver: 'Naver', yanolja: 'Yanolja', coupang: 'Coupang',
  kakaobank: 'KakaoBank', ridi: 'RIDI', qanda: 'QANDA',
  krds: 'KRDS',
  // 2026-05-13 KR-10 batch
  socar: 'SOCAR', gangnamunni: '강남언니', kakaopay: 'KakaoPay',
  zigzag: 'ZIGZAG', '29cm': '29CM', ably: 'Ably',
  banksalad: 'Banksalad', zigbang: 'Zigbang',
  wanted: 'Wanted', remember: 'Remember',
  // 2026-05-14 KR-10 batch
  kream: 'KREAM', upbit: 'Upbit', kbank: 'K bank', inflearn: 'Inflearn',
  wadiz: 'Wadiz', channeltalk: 'Channel Talk', lunit: 'Lunit',
  bunjang: '번개장터', flex: 'flex', classum: 'Classum',
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
  // Quick Color Reference (supports backtick and parenthesis hex)
  const quickRef = md.match(/Quick Color Reference[\s\S]*?(?:Page\s+)?Background.*?[(`](#[0-9a-fA-F]{6})[)`]/i);
  if (quickRef) return quickRef[1];
  // Section 2: look for page background description
  const s2 = md.match(/## 2\. Color.*?\n([\s\S]*?)(?=## 3\.)/);
  if (s2) {
    const bg = s2[1].match(/(?:Pure White|Pure Black|page background).*?`(#[0-9a-fA-F]{6})`/i);
    if (bg) return bg[1];
  }
  // Match "hex: The primary page background" (hex before description)
  const reverseMatch = md.match(/`(#[0-9a-fA-F]{6})`[^.]*?(?:primary\s+)?page\s+background/i);
  if (reverseMatch) return reverseMatch[1];
  // Dark-mode-native fallback
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
        country: COUNTRIES[d.name] || 'United States',
        primaryColor: extractPrimaryColor(md),
        background: extractBackground(md),
      };
    })
    .sort((a, b) => {
      // Asian markets first (Korea → Taiwan → Japan), then everything else by industry order.
      // Categories are kept as industry labels (Consumer Tech, Fintech, etc.) — country priority
      // only affects sort order, not display labels.
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
        'E-commerce', 'Travel', 'Automotive', 'Marketing', 'Government',
      ];
      const ai = order.indexOf(a.category);
      const bi = order.indexOf(b.category);
      const oa = ai === -1 ? 999 : ai;
      const ob = bi === -1 ? 999 : bi;
      return oa - ob || a.name.localeCompare(b.name);
    });

  return NextResponse.json(entries);
}
