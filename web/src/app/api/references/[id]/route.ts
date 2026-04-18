import { NextResponse } from 'next/server';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

const HEX_RE = /^#[0-9a-f]{3,8}$/i;
const KEYWORD_RE = /^(serif|sans-serif|monospace|var|inherit|system-ui|none)$/i;

function isValidFontName(s: string): boolean {
  if (!s || s.length > 50) return false;
  if (HEX_RE.test(s)) return false;
  if (KEYWORD_RE.test(s)) return false;
  return true;
}

function cleanFontToken(raw: string): string {
  return raw.replace(/['"`]/g, '').replace(/[;].*/, '').trim();
}

function extractPrimaryFont(md: string): string {
  const sec3 = md.match(/## 3\. Typography[\s\S]*?(?=## 4\.)/i)?.[0] ?? md;

  // 1. **Primary** label
  const primary = sec3.match(/\*\*Primary[^*]*\*\*:?\s*`([^`]+)`/i);
  if (primary) {
    const first = cleanFontToken(primary[1].split(',')[0]);
    if (isValidFontName(first)) return first;
  }

  // 2. **Display** / **Sans** / **Heading** label
  const display = sec3.match(/\*\*(?:Display|Sans|Heading)[^*]*\*\*:?\s*`([^`]+)`/i);
  if (display) {
    const first = cleanFontToken(display[1].split(',')[0]);
    if (isValidFontName(first)) return first;
  }

  // 3. font-family declaration (first non-keyword)
  for (const m of sec3.matchAll(/font-family:\s*([^;\n]+)/gi)) {
    for (const tok of m[1].split(',')) {
      const cleaned = cleanFontToken(tok);
      if (isValidFontName(cleaned)) return cleaned;
    }
  }

  // 4. First capitalized backticked font name (heuristic)
  for (const m of sec3.matchAll(/`([A-Z][A-Za-z][\w\s\-]{2,40})`/g)) {
    const name = m[1].trim();
    if (name.length > 35) continue;
    if (/^(?:Display|Heading|Body|Caption|Small|Large|Medium|Regular|Bold|Light|Italic|Mono|Sans|Serif|Variable|Pro|UI|Inter Placeholder|Inter Fallback|Fallback|XS|S|M|L|XL|XXL|SemiBold|ExtraBold|Black|Thin)$/i.test(name)) continue;
    if (/^[0-9]/.test(name)) continue;
    if (isValidFontName(name)) return name;
  }

  return 'Inter';
}

function extractMonoFont(md: string): string | undefined {
  const sec3 = md.match(/## 3\. Typography[\s\S]*?(?=## 4\.)/i)?.[0] ?? md;
  // Explicit Monospace label
  const m = sec3.match(/\*\*Monospace[^*]*\*\*:?\s*`([^`]+)`/i)
    ?? sec3.match(/\*\*Mono[^*]*\*\*:?\s*`([^`]+)`/i);
  if (m) {
    const first = cleanFontToken(m[1].split(',')[0]);
    if (isValidFontName(first)) return first;
  }
  return undefined;
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const mdPath = join(process.cwd(), 'references', id, 'DESIGN.md');
  if (!existsSync(mdPath)) {
    return NextResponse.json({ error: 'Reference not found' }, { status: 404 });
  }

  const designMd = readFileSync(mdPath, 'utf-8');

  // Extract key info
  const primaryMatch = designMd.match(/## 2\. Color[\s\S]*?\*\*([^*]+)\*\*\s*\(`(#[0-9a-fA-F]{6})`\).*?(?:primary|brand|CTA|main)/i);
  const primary = primaryMatch ? primaryMatch[2] : '#6366f1';

  // Background extraction — priority ladder:
  //  (1) An explicit **Name** (`#hex`) entry in §2 whose prose role-labels it
  //      as the page background / primary canvas. This wins across §2
  //      subsections — Claude/Framer/Expo put it under Surface & Background,
  //      Runway puts it under Primary.
  //  (2) Quick Color Reference → Background row.
  //  (3) First **Name** (`#hex`) entry in `### Surface & Background`.
  //  (4) Default #ffffff.
  //
  // The old logic anchored on "Pure White|page background" which matched text
  // colors first for dark-brand refs, forcing many of them (Claude, RunwayML,
  // Sanity, ClickHouse, Composio, HashiCorp, Sentry, Expo, VoltAgent, Resend,
  // SpaceX, Lamborghini) to render as white-canvas when their DESIGN.md
  // explicitly declared a dark canvas.
  const s2Full = designMd.match(/## 2\. Color[\s\S]*?(?=## 3\.)/i)?.[0] ?? '';
  let background = '#ffffff';
  const roleRe = /\*\*[^*]+\*\*\s*\(`(#[0-9a-fA-F]{6})`\)[^\n]{0,200}?(?:primary\s+page\s+background|primary\s+canvas|main\s+canvas|default\s+canvas|page\s+background|primary\s+background|the\s+primary\s+(?:page\s+)?(?:canvas|background)|page\s+canvas|void\s+canvas|main\s+page\s+background)/i;
  const explicit = s2Full.match(roleRe);
  if (explicit) background = explicit[1];
  else {
    const quickBg = designMd.match(/Quick Color Reference[\s\S]*?Background.*?`(#[0-9a-fA-F]{6})`/i);
    if (quickBg) background = quickBg[1];
    else {
      const surface = s2Full.match(/###\s+Surface[^\n]*\n([\s\S]*?)(?=\n###|\n## )/i)?.[1];
      const first = surface?.match(/\*\*[^*]+\*\*\s*\(`(#[0-9a-fA-F]{6})`\)/);
      if (first) background = first[1];
    }
  }

  const fgMatch = designMd.match(/(?:heading|primary text).*?`(#[0-9a-fA-F]{6})`/i);
  const foreground = fgMatch ? fgMatch[1] : '#09090b';

  // Broader font extraction — looks at §3 with multiple patterns to avoid Inter fallback
  // for refs that don't use the strict **Primary**: format.
  const fontFamily = extractPrimaryFont(designMd);
  const mono = extractMonoFont(designMd);

  const weightMatch = designMd.match(/Display.*?\|\s*(\d{3})\s*\|/);
  const headingWeight = weightMatch ? weightMatch[1] : '600';

  const radiusMatch = designMd.match(/(?:border-radius|radius).*?(\d+px(?:\s*[-–]\s*\d+px)?)/i);
  const radius = radiusMatch ? radiusMatch[1] : '6px';

  const accentMatch = designMd.match(/(?:accent|secondary).*?`(#[0-9a-fA-F]{6})`/i);
  const borderMatch = designMd.match(/(?:border.*?default|border.*?standard).*?`(#[0-9a-fA-F]{6})`/i);

  const mood = designMd.match(/## 1\. Visual Theme.*?\n([\s\S]*?)(?=## 2\.)/)?.[1]?.trim().split('\n\n')[0]?.slice(0, 300) || '';

  return NextResponse.json({
    id, designMd, primary, background, foreground,
    fontFamily, mono, headingWeight, radius, mood,
    accent: accentMatch?.[1], border: borderMatch?.[1],
  });
}
