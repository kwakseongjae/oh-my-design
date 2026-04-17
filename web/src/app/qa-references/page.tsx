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
import { isRegistered, lookupFont } from "@/lib/font-registry";

const REFS_DIR = join(process.cwd(), "references");

interface RefSummary {
  id: string;
  name: string;
  primary: string;
  background: string;
  fontHint: string;
  radius: string;
  fonts: string[];
  /** Coverage = (registered fonts) / (total fonts mentioned). */
  coverage: { registered: number; total: number; pct: number; brandOnly: number };
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
      const dm = md.match(/(?:marketing|deepest|canvas).*?`(#[0-9a-fA-F]{6})`/i);
      if (dm) background = dm[1];
    }

    const fontMatch = md.match(/\*\*Primary\*\*:\s*`([^`,]+)/i);
    const fontHint = fontMatch ? fontMatch[1].replace(/['"]/g, "").trim() : "(no font listed)";

    const radiusMatch = md.match(/(?:border-radius|radius).*?(\d+px)/i);
    const radius = radiusMatch ? radiusMatch[1] : "—";

    // Extract fonts from §3 (same heuristic as extract-tokens)
    const fonts = extractFontsFromSec3(md);
    let registered = 0;
    let brandOnly = 0;
    for (const f of fonts) {
      if (isRegistered(f)) {
        registered++;
        if (lookupFont(f).license === "Brand-proprietary") brandOnly++;
      }
    }
    const total = fonts.length;
    const pct = total > 0 ? Math.round((registered / total) * 100) : 0;

    return {
      id: d.name,
      name: d.name.replace(".app", "").replace(/^./, (c) => c.toUpperCase()),
      primary,
      background,
      fontHint,
      radius,
      fonts,
      coverage: { registered, total, pct, brandOnly },
    };
  }).sort((a, b) => a.name.localeCompare(b.name));
}

function extractFontsFromSec3(md: string): string[] {
  const sec3m = md.match(/## 3\. Typography[\s\S]*?(?=## 4\.)/i);
  if (!sec3m) return [];
  const sec3 = sec3m[0];
  const out = new Set<string>();
  const push = (raw: string) => {
    const cleaned = raw.replace(/['"]/g, "").replace(/[;].*/, "").trim();
    if (!cleaned || cleaned.length > 50) return;
    if (/^#[0-9a-f]{3,8}$/i.test(cleaned)) return;
    if (/^(serif|sans-serif|monospace|var|inherit)$/i.test(cleaned)) return;
    out.add(cleaned);
  };
  for (const m of sec3.matchAll(/\*\*(?:Primary|Monospace|Display|Mono|Serif|Sans|Heading|Body)[^*]*\*\*:?\s*`([^`]+)`/gi)) {
    m[1].split(",").forEach((f) => push(f.trim()));
  }
  for (const m of sec3.matchAll(/font-family:\s*([^;\n]+)/gi)) {
    m[1].split(",").forEach((f) => push(f.trim()));
  }
  for (const m of sec3.matchAll(/`([A-Z][A-Za-z][\w\s\-]{2,40})`/g)) {
    const name = m[1].trim();
    if (name.length > 35) continue;
    if (/^(?:Display|Heading|Body|Caption|Small|Large|Medium|Regular|Bold|Light|Italic|Mono|Sans|Serif|Variable|Pro|UI|Inter Placeholder|Inter Fallback|Fallback|XS|S|M|L|XL|XXL|Pro Medium|Pro SemiBold|SemiBold|ExtraBold|Black|Thin)$/i.test(name)) continue;
    push(name);
  }
  return [...out];
}

export const metadata: Metadata = {
  title: "QA · All References — oh-my-design",
  robots: { index: false, follow: false },
};

export default function QAReferencesPage() {
  const refs = loadAll();
  const stats = {
    total: refs.length,
    fullCoverage: refs.filter((r) => r.coverage.total > 0 && r.coverage.pct === 100).length,
    partial: refs.filter((r) => r.coverage.total > 0 && r.coverage.pct > 0 && r.coverage.pct < 100).length,
    noFonts: refs.filter((r) => r.coverage.total === 0).length,
    totalFonts: refs.reduce((acc, r) => acc + r.coverage.total, 0),
    registeredFonts: refs.reduce((acc, r) => acc + r.coverage.registered, 0),
  };
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

        <div className="mb-6 flex items-baseline justify-between flex-wrap gap-3">
          <h1 className="text-3xl font-bold tracking-tight">All References ({refs.length})</h1>
          <div className="text-xs text-muted-foreground">Sorted alphabetically · Each card opens in new tab</div>
        </div>

        {/* Font registry coverage stats */}
        <div className="mb-8 grid gap-3 grid-cols-2 sm:grid-cols-4">
          <div className="rounded-lg bg-card p-3 ring-1 ring-border/40">
            <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Registry coverage</div>
            <div className="text-2xl font-bold mt-1">{stats.registeredFonts}/{stats.totalFonts}</div>
            <div className="text-[10px] text-muted-foreground mt-0.5">{stats.totalFonts > 0 ? Math.round((stats.registeredFonts / stats.totalFonts) * 100) : 0}% of all fonts mapped</div>
          </div>
          <div className="rounded-lg bg-emerald-50 dark:bg-emerald-950/30 p-3 ring-1 ring-emerald-200/60 dark:ring-emerald-800/60">
            <div className="text-[10px] font-mono text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">Full coverage</div>
            <div className="text-2xl font-bold mt-1 text-emerald-700 dark:text-emerald-400">{stats.fullCoverage}</div>
            <div className="text-[10px] text-emerald-700/70 dark:text-emerald-400/70 mt-0.5">refs with all fonts in registry</div>
          </div>
          <div className="rounded-lg bg-amber-50 dark:bg-amber-950/30 p-3 ring-1 ring-amber-200/60 dark:ring-amber-800/60">
            <div className="text-[10px] font-mono text-amber-700 dark:text-amber-400 uppercase tracking-wider">Partial</div>
            <div className="text-2xl font-bold mt-1 text-amber-700 dark:text-amber-400">{stats.partial}</div>
            <div className="text-[10px] text-amber-700/70 dark:text-amber-400/70 mt-0.5">some fonts unregistered</div>
          </div>
          <div className="rounded-lg bg-gray-50 dark:bg-gray-900/40 p-3 ring-1 ring-gray-200/60 dark:ring-gray-700/60">
            <div className="text-[10px] font-mono text-gray-600 dark:text-gray-400 uppercase tracking-wider">No fonts in §3</div>
            <div className="text-2xl font-bold mt-1 text-gray-700 dark:text-gray-300">{stats.noFonts}</div>
            <div className="text-[10px] text-gray-600/70 dark:text-gray-400/70 mt-0.5">DESIGN.md needs typography section</div>
          </div>
        </div>

        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {refs.map((ref) => {
            const cov = ref.coverage;
            const covBg = cov.total === 0
              ? "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
              : cov.pct === 100
                ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400"
                : cov.pct >= 50
                  ? "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400"
                  : "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400";
            return (
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
                  {/* Coverage badge */}
                  <div className="mt-2 flex items-center justify-between gap-2">
                    <span className={`inline-flex items-center rounded-md px-1.5 py-0.5 text-[10px] font-medium ${covBg}`} title={`${cov.registered} of ${cov.total} fonts registered. ${cov.brandOnly} are brand-only.`}>
                      {cov.total === 0 ? "no fonts" : `${cov.registered}/${cov.total} fonts`}
                      {cov.brandOnly > 0 && ` · ${cov.brandOnly} brand-only`}
                    </span>
                    <span className="text-[10px] text-muted-foreground/60">→</span>
                  </div>
                </div>
              </Link>
            );
          })}
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
