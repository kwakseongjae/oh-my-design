/**
 * QA-only browsing page — lists every reference as a card linking to its
 * /reference/<id> showcase. Used to spot-check the new ReferencePreview
 * across all 67 refs after the migration.
 *
 * **Will be deleted after QA pass** — see the banner at top.
 */

import { readFileSync, readdirSync, existsSync } from "fs";
import { join } from "path";
import Link from "next/link";
import type { Metadata } from "next";

const REFS_DIR = join(process.cwd(), "references");

interface RefSummary {
  id: string;
  name: string;
  primary: string;
  background: string;
  fontHint: string;
  radius: string;
}

function loadAll(): RefSummary[] {
  if (!existsSync(REFS_DIR)) return [];
  const dirs = readdirSync(REFS_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory() && existsSync(join(REFS_DIR, d.name, "DESIGN.md")));

  return dirs.map((d) => {
    const md = readFileSync(join(REFS_DIR, d.name, "DESIGN.md"), "utf-8");

    const primaryMatch = md.match(/## 2\. Color[\s\S]*?\*\*([^*]+)\*\*\s*\(`(#[0-9a-fA-F]{6})`\).*?(?:primary|brand|CTA|main)/i);
    const primary = primaryMatch ? primaryMatch[2] : "#6366f1";

    const quickBg = md.match(/Quick Color Reference[\s\S]*?Background.*?`(#[0-9a-fA-F]{6})`/i);
    let background = "#ffffff";
    if (quickBg) background = quickBg[1];
    else if (md.match(/dark.mode.(?:native|first)/i)) {
      const d = md.match(/(?:marketing|deepest|canvas).*?`(#[0-9a-fA-F]{6})`/i);
      if (d) background = d[1];
    }

    const fontMatch = md.match(/\*\*Primary\*\*:\s*`([^`,]+)/i);
    const fontHint = fontMatch ? fontMatch[1].replace(/['"]/g, "").trim() : "(no font listed)";

    const radiusMatch = md.match(/(?:border-radius|radius).*?(\d+px)/i);
    const radius = radiusMatch ? radiusMatch[1] : "—";

    return {
      id: d.name,
      name: d.name.replace(".app", "").replace(/^./, (c) => c.toUpperCase()),
      primary,
      background,
      fontHint,
      radius,
    };
  }).sort((a, b) => a.name.localeCompare(b.name));
}

export const metadata: Metadata = {
  title: "QA · All References — oh-my-design",
  robots: { index: false, follow: false },
};

export default function QAReferencesPage() {
  const refs = loadAll();
  return (
    <div className="min-h-screen bg-background py-10">
      <div className="mx-auto max-w-7xl px-6">
        {/* Banner */}
        <div className="mb-8 rounded-xl border border-amber-300/60 bg-amber-50 dark:bg-amber-950/30 dark:border-amber-700/60 p-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-1">QA Only · noindex</div>
          <div className="text-sm text-amber-900 dark:text-amber-200">
            Internal page for spot-checking the unified <code className="font-mono">ReferencePreview</code> across all {refs.length} references.
            <strong> Will be deleted after QA pass.</strong> Click any card to open its showcase in a new tab.
          </div>
        </div>

        <div className="mb-6 flex items-baseline justify-between">
          <h1 className="text-3xl font-bold tracking-tight">All References ({refs.length})</h1>
          <div className="text-xs text-muted-foreground">Sorted alphabetically · Each card opens in new tab</div>
        </div>

        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {refs.map((ref) => (
            <Link
              key={ref.id}
              href={`/reference/${ref.id}`}
              target="_blank"
              rel="noopener"
              className="group rounded-xl border border-border/60 dark:border-white/10 overflow-hidden hover:border-foreground/40 hover:shadow-lg transition-all"
            >
              {/* Color preview band */}
              <div className="h-20 flex items-center justify-center relative" style={{ background: ref.background }}>
                <div
                  className="h-12 w-12 rounded-full ring-4"
                  style={{ background: ref.primary, ringColor: ref.background } as React.CSSProperties}
                />
                <div className="absolute top-2 right-2 text-[9px] font-mono px-1.5 py-0.5 rounded bg-black/20 text-white">
                  r {ref.radius}
                </div>
              </div>
              {/* Meta */}
              <div className="p-3 bg-card">
                <div className="flex items-baseline justify-between gap-2 mb-1">
                  <div className="text-sm font-semibold truncate">{ref.name}</div>
                  <code className="text-[9px] font-mono text-muted-foreground flex-shrink-0">{ref.primary}</code>
                </div>
                <div className="text-[10px] text-muted-foreground truncate" title={ref.fontHint}>
                  {ref.fontHint}
                </div>
                <div className="mt-2 text-[10px] text-muted-foreground/60">
                  /reference/{ref.id} →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* QA checklist */}
        <div className="mt-12 rounded-xl border border-border/60 dark:border-border bg-muted/30 p-5">
          <h2 className="text-sm font-semibold mb-3">QA Checklist (per reference)</h2>
          <ul className="text-xs text-muted-foreground space-y-1.5 leading-relaxed">
            <li>✓ Hero: name, mood paragraph, primary swatch chip render correctly</li>
            <li>✓ Color Palette: hex swatches present, brand semantic chips show primary/accent/bg/fg/border</li>
            <li>✓ Typography Hierarchy (7 tiers): Display → Smallest renders with correct sizes/weights/line-heights</li>
            <li>✓ Font Stack: license cards show with install / source links — no broken links</li>
            <li>✓ Buttons: 5 variants × 3 sizes, pill systems (LINE/Wise/Spotify) render with full button radius</li>
            <li>✓ Cards: NOT capsule even on pill systems (capped at 16px)</li>
            <li>✓ Forms: input/password/select render in brand fg/bg/border</li>
            <li>✓ Badges (capped 8px) + Tabs (full radius)</li>
            <li>✓ Spacing & Radius: per-component radius comparison shows different values for button vs card vs badge</li>
            <li>✓ Elevation: 5 shadow tiers visible</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
