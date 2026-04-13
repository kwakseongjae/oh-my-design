import { readFileSync, readdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// ── Types ────────────────────────────────────────────────────────

export interface ReferenceEntry {
  id: string;          // folder name e.g. "stripe"
  name: string;        // display name e.g. "Stripe"
  category: string;    // e.g. "Fintech"
  designMd: string;    // full DESIGN.md content
  colors: ExtractedColors;
  typography: ExtractedTypography;
  radius: string;      // e.g. "4px-8px"
  mood: string;        // extracted from section 1
}

export interface ExtractedColors {
  primary: string;          // main brand hex
  primaryName: string;      // e.g. "Stripe Purple"
  background: string;
  foreground: string;
  accent?: string;
  border?: string;
}

export interface ExtractedTypography {
  primary: string;     // e.g. "sohne-var"
  mono?: string;       // e.g. "SourceCodePro"
  headingWeight: string;
}

// ── Category mapping ─────────────────────────────────────────────

const CATEGORIES: Record<string, string> = {
  stripe: 'Fintech', coinbase: 'Fintech', revolut: 'Fintech', wise: 'Fintech', kraken: 'Fintech',
  vercel: 'Developer Tools', cursor: 'Developer Tools', warp: 'Developer Tools',
  expo: 'Developer Tools', lovable: 'Developer Tools', raycast: 'Developer Tools', superhuman: 'Developer Tools',
  supabase: 'Backend & DevOps', mongodb: 'Backend & DevOps', sentry: 'Backend & DevOps',
  posthog: 'Backend & DevOps', hashicorp: 'Backend & DevOps', clickhouse: 'Backend & DevOps',
  composio: 'Backend & DevOps', sanity: 'Backend & DevOps',
  notion: 'Productivity', 'linear.app': 'Productivity', 'cal': 'Productivity',
  zapier: 'Productivity', intercom: 'Productivity', resend: 'Productivity', mintlify: 'Productivity',
  figma: 'Design Tools', framer: 'Design Tools', miro: 'Design Tools',
  webflow: 'Design Tools', airtable: 'Design Tools', clay: 'Design Tools',
  claude: 'AI & LLM', cohere: 'AI & LLM', mistral: 'AI & LLM', 'mistral.ai': 'AI & LLM',
  ollama: 'AI & LLM', 'opencode.ai': 'AI & LLM', replicate: 'AI & LLM',
  'together.ai': 'AI & LLM', 'x.ai': 'AI & LLM', elevenlabs: 'AI & LLM',
  minimax: 'AI & LLM', runwayml: 'AI & LLM', voltagent: 'AI & LLM',
  apple: 'Consumer Tech', spotify: 'Consumer Tech', uber: 'Consumer Tech',
  airbnb: 'Consumer Tech', pinterest: 'Consumer Tech', nvidia: 'Consumer Tech',
  ibm: 'Consumer Tech', spacex: 'Consumer Tech',
  shopify: 'E-commerce', semrush: 'Marketing',
  tesla: 'Automotive', bmw: 'Automotive', ferrari: 'Automotive',
  lamborghini: 'Automotive', renault: 'Automotive', bugatti: 'Automotive',
};

// ── Extraction helpers ───────────────────────────────────────────

function extractHexColors(text: string): string[] {
  const matches = text.match(/#[0-9a-fA-F]{6}\b/g) || [];
  return [...new Set(matches)];
}

function extractPrimaryColor(md: string): { hex: string; name: string } {
  // Look for the first color in section 2 with "Primary" or "Brand" in its description
  const section2Match = md.match(/## 2\. Color Palette.*?\n([\s\S]*?)(?=## 3\.)/);
  if (section2Match) {
    const section2 = section2Match[1];
    // Pattern: **Name** (`#hex`): description with "primary" or "brand" or "CTA"
    const primaryMatch = section2.match(/\*\*([^*]+)\*\*\s*\(`(#[0-9a-fA-F]{6})`\).*?(?:primary|brand|CTA|main)/i);
    if (primaryMatch) {
      return { hex: primaryMatch[2], name: primaryMatch[1] };
    }
    // Fallback: first hex in section 2
    const firstHex = section2.match(/`(#[0-9a-fA-F]{6})`/);
    if (firstHex) {
      return { hex: firstHex[1], name: 'Primary' };
    }
  }
  const allHex = extractHexColors(md);
  return { hex: allHex[0] || '#6366f1', name: 'Primary' };
}

function extractBackground(md: string): string {
  // Try specific page/canvas background patterns first (avoid matching component backgrounds)
  const patterns = [
    /(?:page|canvas|marketing)\s+background.*?`(#[0-9a-fA-F]{6})`/i,
    /(?:Pure White|White).*?`(#[0-9a-fA-F]{6})`.*?(?:page background|background)/i,
    /Background:.*?Pure White.*?\(`(#[0-9a-fA-F]{6})`\)/i,
    /(?:Page|Site)\s+background.*?`(#[0-9a-fA-F]{6})`/i,
  ];
  for (const pattern of patterns) {
    const match = md.match(pattern);
    if (match) return match[1];
  }
  // Look in Section 2 for surface/background colors
  const section2 = md.match(/## 2\. Color.*?\n([\s\S]*?)(?=## 3\.)/);
  if (section2) {
    const surfaceBg = section2[1].match(/(?:Pure White|page background|Background\b).*?`(#[0-9a-fA-F]{6})`/i);
    if (surfaceBg) return surfaceBg[1];
  }
  // Check Quick Color Reference section for background
  const quickRef = md.match(/Quick Color Reference[\s\S]*?Background.*?`(#[0-9a-fA-F]{6})`/i);
  if (quickRef) return quickRef[1];
  // Fallback: if the design mentions dark-mode-native, use dark bg
  if (md.match(/dark.mode.(?:native|first)/i)) {
    const darkBg = md.match(/(?:marketing|deepest|canvas).*?`(#[0-9a-fA-F]{6})`/i);
    if (darkBg) return darkBg[1];
  }
  return '#ffffff';
}

function extractForeground(md: string): string {
  const fgMatch = md.match(/(?:heading|primary text).*?`(#[0-9a-fA-F]{6})`/i);
  return fgMatch ? fgMatch[1] : '#09090b';
}

function extractAccent(md: string): string | undefined {
  const accentMatch = md.match(/(?:accent|secondary).*?`(#[0-9a-fA-F]{6})`/i);
  return accentMatch ? accentMatch[1] : undefined;
}

function extractBorder(md: string): string | undefined {
  const borderMatch = md.match(/(?:border.*?default|border.*?standard).*?`(#[0-9a-fA-F]{6})`/i);
  return borderMatch ? borderMatch[1] : undefined;
}

function extractTypography(md: string): ExtractedTypography {
  const section3 = md.match(/## 3\. Typography.*?\n([\s\S]*?)(?=## 4\.)/);
  let primary = 'Inter';
  let mono: string | undefined;
  let headingWeight = '600';

  if (section3) {
    const text = section3[1];
    const primaryMatch = text.match(/\*\*Primary\*\*:\s*`([^`]+)`/i);
    if (primaryMatch) primary = primaryMatch[1].split(',')[0].trim();

    const monoMatch = text.match(/\*\*Monospace\*\*:\s*`([^`]+)`/i);
    if (monoMatch) mono = monoMatch[1].split(',')[0].trim();

    // Look for heading weight in hierarchy table
    const weightMatch = text.match(/Display.*?\|\s*(\d{3})\s*\|/);
    if (weightMatch) headingWeight = weightMatch[1];
  }

  return { primary, mono, headingWeight };
}

function extractRadius(md: string): string {
  const radiusMatch = md.match(/(?:border-radius|radius).*?(\d+px(?:\s*[-–]\s*\d+px)?)/i);
  return radiusMatch ? radiusMatch[1] : '6px';
}

function extractMood(md: string): string {
  const section1 = md.match(/## 1\. Visual Theme.*?\n([\s\S]*?)(?=## 2\.)/);
  if (!section1) return '';
  // First sentence or two
  const text = section1[1].trim();
  const firstParagraph = text.split('\n\n')[0];
  return firstParagraph.slice(0, 300);
}

function toDisplayName(id: string): string {
  const special: Record<string, string> = {
    'linear.app': 'Linear', 'cal': 'Cal.com', 'mistral.ai': 'Mistral AI',
    'opencode.ai': 'OpenCode AI', 'together.ai': 'Together AI',
    'x.ai': 'xAI', ibm: 'IBM', bmw: 'BMW', nvidia: 'NVIDIA',
    posthog: 'PostHog', supabase: 'Supabase', voltagent: 'VoltAgent',
    elevenlabs: 'ElevenLabs', runwayml: 'RunwayML', spacex: 'SpaceX',
    coinbase: 'Coinbase', airbnb: 'Airbnb', clickhouse: 'ClickHouse',
  };
  return special[id] || id.charAt(0).toUpperCase() + id.slice(1);
}

// ── Main API ─────────────────────────────────────────────────────

function getReferencesDir(): string {
  // Try multiple locations: project root, relative to this file
  const candidates = [
    join(process.cwd(), 'references'),
    join(__dirname, '..', '..', 'references'),
  ];
  for (const dir of candidates) {
    if (existsSync(dir)) return dir;
  }
  throw new Error('references/ directory not found. Run from the oh-my-design project root.');
}

export function loadReference(id: string): ReferenceEntry {
  const dir = getReferencesDir();
  const mdPath = join(dir, id, 'DESIGN.md');
  if (!existsSync(mdPath)) {
    throw new Error(`Reference not found: ${id}`);
  }

  const designMd = readFileSync(mdPath, 'utf-8');
  const primary = extractPrimaryColor(designMd);

  return {
    id,
    name: toDisplayName(id),
    category: CATEGORIES[id] || 'Other',
    designMd,
    colors: {
      primary: primary.hex,
      primaryName: primary.name,
      background: extractBackground(designMd),
      foreground: extractForeground(designMd),
      accent: extractAccent(designMd),
      border: extractBorder(designMd),
    },
    typography: extractTypography(designMd),
    radius: extractRadius(designMd),
    mood: extractMood(designMd),
  };
}

export function listReferences(): Array<{ id: string; name: string; category: string; primaryColor: string }> {
  const dir = getReferencesDir();
  const entries = readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isDirectory() && existsSync(join(dir, d.name, 'DESIGN.md')))
    .map((d) => {
      const mdPath = join(dir, d.name, 'DESIGN.md');
      const md = readFileSync(mdPath, 'utf-8');
      const primary = extractPrimaryColor(md);
      return {
        id: d.name,
        name: toDisplayName(d.name),
        category: CATEGORIES[d.name] || 'Other',
        primaryColor: primary.hex,
      };
    });

  // Sort by category, then name
  return entries.sort((a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name));
}
