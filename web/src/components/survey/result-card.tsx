"use client";

import { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import { getDesignType, matchReferences, AXES, buildTypeAvatarUrl, type TypeCode } from "@/lib/survey/types";
import { getLogoUrl, isGitHubLogo } from "@/lib/logos";
import { event } from "@/lib/gtag";
import { ShareButtons } from "./share-buttons";
import type { QuizScore } from "@/lib/survey/scoring";

/* ── Type Avatar (DiceBear Thumbs with custom palette) ──── */

function TypeAvatar({ code, className }: { code: TypeCode; className?: string }) {
  return <img src={buildTypeAvatarUrl(code)} alt={code} className={className} />;
}

/* ── Axis Badge ─────────────────────────────────────────── */

function AxisBadge({ axis, value }: { axis: string; value: string }) {
  const axisData = AXES[axis as keyof typeof AXES];
  if (!axisData) return null;
  const isB = value === axisData.B;
  const label = isB ? axisData.labelB : axisData.labelA;
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-border/60 dark:border-white/10 bg-card dark:bg-white/[0.04] px-2.5 py-0.5 text-xs text-muted-foreground">
      <span className="font-mono font-bold text-foreground">{value}</span>
      {label}
    </span>
  );
}

/* ── Main Result Card ───────────────────────────────────── */

export function ResultCard({
  score,
  onGenerateDesign,
}: {
  score: QuizScore;
  onGenerateDesign?: (refId: string) => void;
}) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const logoColor = mounted && resolvedTheme === "dark" ? "white" : "black";

  const type = getDesignType(score.typeCode);
  const matches = useMemo(
    () =>
      matchReferences(score.typeCode, {
        saturation: score.saturation,
        typography: score.typography,
        darkMode: score.darkMode,
      }),
    [score],
  );

  if (!type) return <div>Unknown type: {score.typeCode}</div>;

  const axes = [
    { axis: "temperature", value: score.typeCode[0] },
    { axis: "density", value: score.typeCode[1] },
    { axis: "elevation", value: score.typeCode[2] },
    { axis: "shape", value: score.typeCode[3] },
  ];

  return (
    <div className="px-4 py-10 sm:py-16 max-w-xl mx-auto">
      {/* ══════════ SECTION 1 · IDENTITY ══════════════════════
         Hero reveal. Breathes on page bg, no card. Large type. */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", damping: 12, stiffness: 200 }}
          className="mb-7 flex h-28 w-28 items-center justify-center rounded-3xl overflow-hidden"
        >
          <TypeAvatar code={score.typeCode} className="h-28 w-28" />
        </motion.div>

        <div className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-foreground mb-2">
          Your design type
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{type.name}</h1>
        <div className="text-xs text-muted-foreground mt-2 font-mono tracking-wider">{score.typeCode}</div>

        <p className="mt-5 text-base text-muted-foreground italic max-w-md">
          "{type.tagline}"
        </p>

        <div className="mt-5 flex flex-wrap justify-center gap-1.5">
          {axes.map((a) => (
            <AxisBadge key={a.axis} axis={a.axis} value={a.value} />
          ))}
        </div>

        <p className="mt-6 text-sm leading-relaxed text-muted-foreground max-w-md">
          {type.description}
        </p>
      </motion.section>

      {/* ══════════ Visual separator ═══════════════════════════ */}
      <div className="my-10 flex items-center gap-3">
        <div className="h-px flex-1 bg-border/40 dark:bg-white/[0.06]" />
        <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
          Recommended
        </span>
        <div className="h-px flex-1 bg-border/40 dark:bg-white/[0.06]" />
      </div>

      {/* ══════════ SECTION 2 · MATCHES ═══════════════════════
         Grouped card. Primary matches are the product. */}
      <motion.section
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.4 }}
      >
        {/* Primary — 2 hero cards */}
        <div className="grid gap-2.5 sm:grid-cols-2 mb-5">
          {matches.primary.map((ref) => {
            const logo = getLogoUrl(ref.id, logoColor);
            const isGh = isGitHubLogo(ref.id);
            return (
              <button
                key={ref.id}
                onClick={() => {
                  event("curation_match_pick", { ref_id: ref.id, score: ref.score, type_code: score.typeCode });
                  onGenerateDesign?.(ref.id);
                }}
                className="group flex items-center gap-3 rounded-2xl bg-card ring-1 ring-border/60 dark:bg-white/[0.04] dark:ring-white/10 p-4 text-left transition-all hover:ring-foreground/30 hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.99]"
              >
                {logo && (
                  <img
                    src={logo}
                    alt={ref.id}
                    className={`h-9 w-9 flex-shrink-0 object-contain ${isGh ? "rounded-lg" : ""}`}
                  />
                )}
                <div className="flex-1 min-w-0">
                  <div className="text-base font-semibold capitalize">{ref.id.replace(".app", "")}</div>
                  <div className="text-xs text-muted-foreground">{ref.category}</div>
                </div>
                <div className="flex flex-col items-end gap-0.5">
                  <span className="text-lg font-bold text-primary leading-none">{ref.score}%</span>
                  <span className="text-[9px] text-muted-foreground flex items-center gap-0.5 mt-1">
                    Customize
                    <ArrowRight className="h-2.5 w-2.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Adjacent — compact chip row */}
        {matches.adjacent.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
              Also:
            </span>
            {matches.adjacent.map((ref) => {
              const logo = getLogoUrl(ref.id, logoColor);
              const isGh = isGitHubLogo(ref.id);
              return (
                <span
                  key={ref.id}
                  className="inline-flex items-center gap-1.5 rounded-full bg-foreground/5 ring-1 ring-inset ring-foreground/10 dark:bg-white/[0.06] dark:ring-white/10 px-2.5 py-1 text-xs capitalize"
                >
                  {logo && <img src={logo} alt={ref.id} className={`h-3.5 w-3.5 object-contain ${isGh ? "rounded" : ""}`} />}
                  {ref.id.replace(".app", "")}
                </span>
              );
            })}
          </div>
        )}
      </motion.section>

      {/* ══════════ Share at peak emotion ══════════════════════ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className="mt-8 flex items-center justify-center"
      >
        <ShareButtons typeCode={score.typeCode} typeName={type.name} tagline={type.tagline} />
      </motion.div>

      {/* ══════════ SECTION 3 · PRIMARY ACTION ═════════════════
         Clear next step. Browse demoted to text link. */}
      <motion.section
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.4 }}
        className="mt-10 flex flex-col items-center gap-3"
      >
        {onGenerateDesign && matches.primary[0] && (
          <button
            onClick={() => {
              event("curation_cta_primary", { ref_id: matches.primary[0].id, type_code: score.typeCode });
              onGenerateDesign(matches.primary[0].id);
            }}
            className="group flex items-center justify-center gap-2 w-full rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 hover:scale-[1.005] active:scale-[0.995] shadow-lg shadow-primary/25"
          >
            Customize {matches.primary[0].id.replace(".app", "")} and generate DESIGN.md
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        )}
        <a
          href="/builder"
          onClick={() => event("curation_browse_all", { type_code: score.typeCode })}
          className="group text-xs text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
        >
          or browse all 64 references
          <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
        </a>
      </motion.section>
    </div>
  );
}
