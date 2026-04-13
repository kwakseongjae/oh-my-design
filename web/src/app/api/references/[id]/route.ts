import { NextResponse } from 'next/server';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

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

  const quickBg = designMd.match(/Quick Color Reference[\s\S]*?Background.*?`(#[0-9a-fA-F]{6})`/i);
  const s2 = designMd.match(/## 2\. Color.*?\n([\s\S]*?)(?=## 3\.)/);
  let background = '#ffffff';
  if (quickBg) background = quickBg[1];
  else if (s2) {
    const bg = s2[1].match(/(?:Pure White|page background).*?`(#[0-9a-fA-F]{6})`/i);
    if (bg) background = bg[1];
  }
  if (designMd.match(/dark.mode.(?:native|first)/i)) {
    const d = designMd.match(/(?:marketing|deepest|canvas).*?`(#[0-9a-fA-F]{6})`/i);
    if (d) background = d[1];
  }

  const fgMatch = designMd.match(/(?:heading|primary text).*?`(#[0-9a-fA-F]{6})`/i);
  const foreground = fgMatch ? fgMatch[1] : '#09090b';

  const fontMatch = designMd.match(/\*\*Primary\*\*:\s*`([^`]+)`/i);
  const fontFamily = fontMatch ? fontMatch[1].split(',')[0].trim() : 'Inter';

  const monoMatch = designMd.match(/\*\*Monospace\*\*:\s*`([^`]+)`/i);
  const mono = monoMatch ? monoMatch[1].split(',')[0].trim() : undefined;

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
