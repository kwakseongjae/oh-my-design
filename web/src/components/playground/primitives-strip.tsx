"use client";

/**
 * Always-visible strip at the top of the Playground preview pane — surfaces
 * every primitive with a miniature visual so the user can see at a glance
 * what `ReferencePreview` alone can't express (density, motion in particular).
 *
 * Primitive pills (L→R): Mood · Color · Density · Radius · Weight · Motion.
 */

import { useState } from "react";
import type { PlaygroundState } from "@/lib/playground/state";
import { MOOD_DEFAULTS } from "@/lib/playground/rules/mood";
import { DENSITY_RULES } from "@/lib/playground/rules/density";
import { RADIUS_RULES } from "@/lib/playground/rules/radius";
import { WEIGHT_RULES } from "@/lib/playground/rules/weight";
import { MOTION_RULES } from "@/lib/playground/rules/motion";
import { ContrastBadge } from "./contrast-badge";

export function PrimitivesStrip({ state }: { state: PlaygroundState }) {
  return (
    <div className="flex flex-wrap gap-2 rounded-xl border border-border/40 bg-card/30 p-2 dark:border-border dark:bg-card/50">
      <MoodPill mood={state.mood} />
      <ColorPill primary={state.primary} />
      <ContrastBadge primary={state.primary} compact />
      <DensityPill density={state.density} />
      <RadiusPill radius={state.radius} />
      <WeightPill weight={state.weight} />
      <MotionPill motion={state.motion} />
    </div>
  );
}

const PILL_CLS =
  "inline-flex items-center gap-2 rounded-lg border border-border/40 bg-background px-2.5 py-1.5 text-[11px] font-medium dark:border-border";
const LABEL_CLS = "font-mono uppercase tracking-wider text-muted-foreground";

function MoodPill({ mood }: { mood: PlaygroundState["mood"] }) {
  const d = MOOD_DEFAULTS[mood];
  return (
    <div className={PILL_CLS} title={`Mood — ${d.tagline}`}>
      <span
        className="flex h-4 w-4 shrink-0 items-center justify-center rounded text-[9px] text-white"
        style={{ background: d.primary }}
        aria-hidden
      >
        {d.glyph}
      </span>
      <span className={LABEL_CLS}>mood</span>
      <span className="capitalize">{mood}</span>
    </div>
  );
}

function ColorPill({ primary }: { primary: string }) {
  return (
    <div className={PILL_CLS} title={`Primary ${primary}`}>
      <span
        className="h-4 w-4 shrink-0 rounded ring-1 ring-border/60"
        style={{ background: primary }}
        aria-hidden
      />
      <span className={LABEL_CLS}>color</span>
      <span className="font-mono">{primary}</span>
    </div>
  );
}

function DensityPill({ density }: { density: PlaygroundState["density"] }) {
  const rules = DENSITY_RULES[density];
  return (
    <div className={PILL_CLS} title={`Density — unit ${rules.unit}px`}>
      <span className="flex h-4 w-4 shrink-0 flex-col justify-center gap-[2px]" aria-hidden>
        <span
          className="h-[2px] w-full rounded-sm bg-foreground/70"
          style={{ marginTop: density === "compact" ? 0 : density === "comfortable" ? 1 : 2 }}
        />
        <span
          className="h-[2px] w-full rounded-sm bg-foreground/50"
          style={{ marginTop: density === "compact" ? 1 : density === "comfortable" ? 2 : 3 }}
        />
        <span
          className="h-[2px] w-full rounded-sm bg-foreground/30"
          style={{ marginTop: density === "compact" ? 1 : density === "comfortable" ? 2 : 3 }}
        />
      </span>
      <span className={LABEL_CLS}>density</span>
      <span className="capitalize">{density}</span>
      <span className="text-muted-foreground">{rules.unit}px</span>
    </div>
  );
}

function RadiusPill({ radius }: { radius: PlaygroundState["radius"] }) {
  const rules = RADIUS_RULES[radius];
  const corner = Math.min(rules.control, 8);
  return (
    <div className={PILL_CLS} title={`Radius — control ${rules.control}px`}>
      <span
        className="h-4 w-4 shrink-0 bg-foreground/70"
        style={{ borderRadius: `${corner}px ${corner}px 0 0` }}
        aria-hidden
      />
      <span className={LABEL_CLS}>radius</span>
      <span className="capitalize">{radius}</span>
    </div>
  );
}

function WeightPill({ weight }: { weight: PlaygroundState["weight"] }) {
  const rules = WEIGHT_RULES[weight];
  return (
    <div className={PILL_CLS} title={`Weight — heading ${rules.heading}, body ${rules.body}`}>
      <span
        className="text-sm leading-none"
        style={{ fontWeight: rules.heading }}
        aria-hidden
      >
        Aa
      </span>
      <span className={LABEL_CLS}>weight</span>
      <span className="capitalize">{weight}</span>
    </div>
  );
}

function MotionPill({ motion }: { motion: PlaygroundState["motion"] }) {
  const rules = MOTION_RULES[motion];
  const [hover, setHover] = useState(false);
  return (
    <div
      className={PILL_CLS}
      title={`Motion — ${rules.durations.standard}ms, spring ${rules.springLicensed ? "licensed" : "forbidden"}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <span
        className="relative h-4 w-8 overflow-hidden rounded-full bg-muted/60"
        aria-hidden
      >
        <span
          className="absolute left-0.5 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-foreground/80"
          style={{
            transform: `translate(${hover ? 14 : 0}px, -50%)`,
            transition: `transform ${rules.durations.standard}ms ${rules.easings.standard}`,
          }}
        />
      </span>
      <span className={LABEL_CLS}>motion</span>
      <span className="capitalize">{motion}</span>
    </div>
  );
}
