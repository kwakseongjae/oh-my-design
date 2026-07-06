import { NextResponse } from 'next/server';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';
import { resolveFontsFromDesignMd } from '@/lib/font-registry';

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

  // Background extraction — 4-tier priority ladder.
  //
  // Tier 1 — phrase-labelled hex anywhere in §2 (limited to first 2 000 chars to avoid
  //           "in light mode" tail sections in dark-first refs like Linear).
  //           Catches: "Page background", "primary canvas", "main canvas", etc.
  const s2Early = s2Full.slice(0, 2000);
  const roleRe = /\*\*[^*]+\*\*\s*\(`(#[0-9a-fA-F]{6})`\)[^\n]{0,300}?(?:primary\s+page\s+background|primary\s+canvas|main\s+canvas|default\s+canvas|page\s+background|primary\s+background|the\s+primary\s+(?:page\s+)?(?:canvas|background)|page\s+canvas|void\s+canvas|main\s+page\s+background)/i;
  const tier1 = s2Early.match(roleRe);
  if (tier1) {
    background = tier1[1];
  } else {
    // Tier 2 — Background/Surface subsection first meaningful hex
    //           "Meaningful" = description does NOT mention overlay/badge/pill/selection/frost/glass.
    //           Handles "Background Surfaces" (Linear) and "Surface & Background" (Cohere/Expo).
    const bgSectionContent = s2Full.match(
      /###[^\n]*\b(?:Background|Surface|Canvas)\b[^\n]*\n([\s\S]*?)(?=\n###|\n## |$)/i
    )?.[1] ?? '';
    const hexEntries = [...bgSectionContent.matchAll(/\*\*[^*]+\*\*\s*\(`(#[0-9a-fA-F]{6})`\)[^\n]*/g)];
    const meaningfulHex = hexEntries.find(
      (m) => !/overlay|badge|pill|selection|frost|glass|alpha|backdrop/i.test(m[0])
    );
    if (meaningfulHex) {
      background = meaningfulHex[1];
    } else if (bgSectionContent) {
      // Section exists but all rgba/hsla or only overlay entries → fallback to dark-surface hex in §2
      const darkFallback = s2Full.match(
        /\*\*[^*]+\*\*\s*\(`(#[0-9a-fA-F]{6})`\)[^\n]*(?:dark\s+(?:\w+\s+)?(?:surface|background|canvas|interactive)|deepest\s+surface|button\s+background[^\n]*dark)/i
      );
      if (darkFallback) background = darkFallback[1];
    } else {
      // Tier 3 — Quick Color Reference table (search within §2 only to avoid
      //           Philosophy layer / §10-15 false positives in full designMd)
      const quickBg = s2Full.match(/Quick Color Reference[\s\S]*?Background.*?`(#[0-9a-fA-F]{6})`/i);
      if (quickBg) background = quickBg[1];
    }
  }

  const fgMatch = designMd.match(/(?:heading|primary text).*?`(#[0-9a-fA-F]{6})`/i);
  const foreground = fgMatch ? fgMatch[1] : '#09090b';

  // Font resolution — frontmatter tokens.typography.family first (machine-
  // readable truth), then §3 prose patterns, then an honest "System" sentinel.
  // NEVER a blind 'Inter' guess (see resolveFontsFromDesignMd).
  const { family: fontFamily, mono, brand: brandFont } = resolveFontsFromDesignMd(designMd);

  const weightMatch = designMd.match(/Display.*?\|\s*(\d{3})\s*\|/);
  const headingWeight = weightMatch ? weightMatch[1] : '600';

  const radiusMatch = designMd.match(/(?:border-radius|radius).*?(\d+px(?:\s*[-–]\s*\d+px)?)/i);
  const radius = radiusMatch ? radiusMatch[1] : '6px';

  const accentMatch = designMd.match(/(?:accent|secondary).*?`(#[0-9a-fA-F]{6})`/i);
  const borderMatch = designMd.match(/(?:border.*?default|border.*?standard).*?`(#[0-9a-fA-F]{6})`/i);

  const mood = designMd.match(/## 1\. Visual Theme.*?\n([\s\S]*?)(?=## 2\.)/)?.[1]?.trim().split('\n\n')[0] || '';

  return NextResponse.json({
    id, designMd, primary, background, foreground,
    fontFamily, mono, brandFont, headingWeight, radius, mood,
    accent: accentMatch?.[1], border: borderMatch?.[1],
  });
}
