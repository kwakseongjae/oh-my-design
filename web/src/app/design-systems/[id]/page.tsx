/**
 * Design-system detail route — /design-systems/<id>.
 *
 * Server component. Reads references/<id>/DESIGN.md from disk (same
 * pattern as the legacy /reference/[id] route it replaces), parses
 * tokens, and hands off to <DetailView>, a client component that
 * presents the DESIGN.md markdown alongside a live <ReferencePreview>.
 *
 * Why RSC here: the data is static-at-request-time (markdown file on
 * disk, parsed with regex), so disk-read + SSG cover every reference at
 * build time via generateStaticParams. Zero client JS for the loader.
 */

import { readFileSync, existsSync, readdirSync } from "fs";
import { join } from "path";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { DetailView } from "./detail-view";
import { extractTokens } from "@/lib/extract-tokens";
import { getRelatedReferences } from "@/lib/design-systems";

const REFS_DIR = join(process.cwd(), "references");

function loadDetail(id: string) {
  const mdPath = join(REFS_DIR, id, "DESIGN.md");
  if (!existsSync(mdPath)) return null;
  const designMd = readFileSync(mdPath, "utf-8");

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

  const fontMatch = designMd.match(/\*\*Primary\*\*:\s*`([^`]+)`/i);
  const fontFamily = fontMatch ? fontMatch[1].split(",")[0].trim() : "Inter";

  const monoMatch = designMd.match(/\*\*Monospace\*\*:\s*`([^`]+)`/i);
  const mono = monoMatch ? monoMatch[1].split(",")[0].trim() : undefined;

  const weightMatch = designMd.match(/Display.*?\|\s*(\d{3})\s*\|/);
  const headingWeight = weightMatch ? weightMatch[1] : "600";

  const radiusMatch = designMd.match(/(?:border-radius|radius).*?(\d+px(?:\s*[-–]\s*\d+px)?)/i);
  const radius = radiusMatch ? radiusMatch[1] : "6px";

  const accentMatch = designMd.match(/(?:accent|secondary).*?`(#[0-9a-fA-F]{6})`/i);
  const borderMatch = designMd.match(/(?:border.*?default|border.*?standard).*?`(#[0-9a-fA-F]{6})`/i);

  const mood =
    designMd
      .match(/## 1\. Visual Theme.*?\n([\s\S]*?)(?=## 2\.)/)?.[1]
      ?.trim()
      .split("\n\n")[0]
      ?.slice(0, 360) || "";

  return {
    id,
    designMd,
    primary,
    background,
    foreground,
    fontFamily,
    mono,
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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const detail = loadDetail(id);
  if (!detail) return { title: "Reference not found" };
  const name = id.replace(".app", "").replace(/^./, (c) => c.toUpperCase());
  const path = `/design-systems/${id}`;
  const desc =
    detail.mood.slice(0, 160) ||
    `${name} design system — DESIGN.md, live preview, and token reference.`;
  return {
    title: `${name} — Design System · oh-my-design`,
    description: desc,
    alternates: { canonical: path },
    openGraph: {
      title: `${name} — Design System · oh-my-design`,
      description: desc,
      url: path,
      type: "article",
    },
  };
}

export default async function DesignSystemDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const detail = loadDetail(id);
  if (!detail) notFound();
  const tokens = extractTokens(detail);
  const related = getRelatedReferences(id, 6);
  return (
    <>
      <DetailView detail={detail} tokens={tokens} />
      <RelatedReferences related={related} />
    </>
  );
}

/**
 * Server-rendered "Related design systems" block — real <Link>s so crawlers
 * follow detail→detail and readers hop deeper into the wedge. Colored-initial
 * tiles (no external logo fetch) keep it robust in the static HTML.
 */
function RelatedReferences({
  related,
}: {
  related: ReturnType<typeof getRelatedReferences>;
}) {
  if (related.length === 0) return null;
  return (
    <section className="border-t border-border/40 bg-muted/20 dark:bg-white/[0.02]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <h2 className="mb-5 text-sm font-semibold uppercase tracking-[0.1em] text-muted-foreground">
          Related design systems
        </h2>
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-6">
          {related.map((r) => (
            <Link
              key={r.id}
              href={`/design-systems/${r.id}`}
              className="group flex items-center gap-2.5 rounded-xl border border-border/60 bg-card/50 p-3 transition-all hover:-translate-y-0.5 hover:border-foreground/30 hover:shadow-sm dark:border-white/10 dark:bg-white/[0.04]"
            >
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-xs font-bold ring-1 ring-border/50"
                style={{ background: r.primaryColor + "1a", color: r.primaryColor }}
              >
                {r.name.charAt(0).toUpperCase()}
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold leading-tight">
                  {r.name}
                </span>
                <span className="block truncate text-[11px] text-muted-foreground">
                  {r.category.replace(/-/g, " ")}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
