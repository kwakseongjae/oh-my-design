/**
 * Per-reference design system showcase route.
 *
 * Server component — reads references/<id>/DESIGN.md directly from disk,
 * parses tokens, hands off to <ReferencePreview>. No API roundtrip.
 *
 * Replaces the deprecated static references/<id>/preview.html files
 * (kept on disk for backward compat but no longer the canonical preview).
 */

import { readFileSync, existsSync, readdirSync } from "fs";
import { join } from "path";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ReferencePreview } from "@/components/reference-preview";
import { extractTokens } from "@/lib/extract-tokens";
import { resolveFontsFromDesignMd } from "@/lib/font-registry";

const REFS_DIR = join(process.cwd(), "references");

// Force dynamic rendering so edits to references/<id>/DESIGN.md show up
// without a full server restart. SSG caching otherwise pins the parsed token
// snapshot to whatever the file was at first build.
export const dynamic = "force-dynamic";
export const revalidate = 0;

function loadDetail(id: string) {
  const mdPath = join(REFS_DIR, id, "DESIGN.md");
  if (!existsSync(mdPath)) return null;
  const designMd = readFileSync(mdPath, "utf-8");

  // Reuse the same heuristics as /api/references/[id] for consistency.
  const primaryMatch = designMd.match(
    /## 2\. Color[\s\S]*?\*\*([^*]+)\*\*\s*\(`(#[0-9a-fA-F]{6})`\).*?(?:primary|brand|CTA|main)/i,
  );
  const primary = primaryMatch ? primaryMatch[2] : "#6366f1";

  const quickBg = designMd.match(/Quick Color Reference[\s\S]*?Background.*?`(#[0-9a-fA-F]{6})`/i);
  const s2 = designMd.match(/## 2\. Color.*?\n([\s\S]*?)(?=## 3\.)/);
  let background = "#ffffff";
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
  const foreground = fgMatch ? fgMatch[1] : "#09090b";

  // Font resolution — frontmatter tokens.typography.family → §3 prose → honest
  // "System" sentinel. Never a blind 'Inter' guess (see font-registry).
  const { family: fontFamily, mono, brand: brandFont } = resolveFontsFromDesignMd(designMd);

  const weightMatch = designMd.match(/Display.*?\|\s*(\d{3})\s*\|/);
  const headingWeight = weightMatch ? weightMatch[1] : "600";

  // Prefer authoritative patterns over a greedy "any px after radius" sweep —
  // some refs (e.g., DCard) write "8px border-radius is the default (…) 1280px"
  // on one line, which made the old regex capture the trailing max-width as
  // the radius. Try in priority order:
  //   1. **Default radius**: `Npx`        ← canonical statement
  //   2. Default radius: `Npx`            ← without bold
  //   3. Npx border-radius                ← prefix form ("8px border-radius")
  //   4. border-radius: Npx               ← postfix CSS form
  //   5. anywhere "radius" + first px     ← legacy fallback
  const radiusPatterns: RegExp[] = [
    /\*\*Default radius\*\*\s*[:：]\s*`?(\d+px(?:\s*[-–]\s*\d+px)?)`?/i,
    /Default radius\s*[:：]\s*`?(\d+px(?:\s*[-–]\s*\d+px)?)`?/i,
    /`?(\d+px(?:\s*[-–]\s*\d+px)?)`?\s+border-radius/i,
    /border-radius\s*[:：]\s*`?(\d+px(?:\s*[-–]\s*\d+px)?)`?/i,
    /(?:border-radius|radius).*?(\d+px(?:\s*[-–]\s*\d+px)?)/i,
  ];
  let radius = "6px";
  for (const re of radiusPatterns) {
    const m = designMd.match(re);
    if (m) { radius = m[1]; break; }
  }

  const accentMatch = designMd.match(/(?:accent|secondary).*?`(#[0-9a-fA-F]{6})`/i);
  const borderMatch = designMd.match(/(?:border.*?default|border.*?standard).*?`(#[0-9a-fA-F]{6})`/i);

  // Mood = first prose paragraph from §1. Canonical title is
  // "## 1. Visual Theme & Atmosphere", but tolerate variants (Overview /
  // Identity / Foundation / §N syntax) by matching ANY §1 header, then
  // skipping leading table/list/subheading lines until a real paragraph.
  const section1 =
    designMd.match(/^##\s+(?:1\.|§1\b)[^\n]*\n([\s\S]*?)(?=^##\s+(?:2\.|§2\b))/m)?.[1] ?? "";
  const moodParagraph = section1
    .split(/\n\n+/)
    .map((p) => p.trim())
    .find((p) => {
      if (p.length < 40) return false; // skip "What's design-noteworthy:" intros
      // reject lists/tables/subheaders. NOTE: `**bold**` markdown opens with
      // `*` too — only reject `-` / `*` / `+` followed by space (real bullet)
      // or `1.` numbered list markers.
      return !/^(#|\||-\s|\*\s|\+\s|\d+\.\s)/.test(p);
    });
  const mood = moodParagraph?.slice(0, 360) || "";

  return {
    id,
    designMd,
    primary,
    background,
    foreground,
    fontFamily,
    mono,
    brandFont,
    headingWeight,
    radius,
    mood,
    accent: accentMatch?.[1],
    border: borderMatch?.[1],
  };
}

export async function generateStaticParams() {
  if (!existsSync(REFS_DIR)) return [];
  return readdirSync(REFS_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory() && existsSync(join(REFS_DIR, d.name, "DESIGN.md")))
    .map((d) => ({ id: d.name }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const detail = loadDetail(id);
  if (!detail) return { title: "Reference not found" };
  const name = id.replace(".app", "").replace(/^./, (c) => c.toUpperCase());
  // Legacy route — kept for the internal /qa-references QA tool. Tell crawlers
  // to point all SEO authority at the canonical /design-systems/[id] URL,
  // and don't index this preview-only variant.
  return {
    title: `${name} — Design System Preview · oh-my-design`,
    description:
      detail.mood.slice(0, 160) ||
      `Design system showcase for ${name}, generated from DESIGN.md.`,
    alternates: { canonical: `/design-systems/${id}` },
    robots: { index: false, follow: true },
  };
}

export default async function ReferencePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const detail = loadDetail(id);
  if (!detail) notFound();
  const tokens = extractTokens(detail);
  return <ReferencePreview tokens={tokens} />;
}
