"use client";

/**
 * Playground client orchestrator.
 *
 * Holds the single PlaygroundState and wires every control into setters
 * that (a) apply the change and (b) update override-tracking flags via
 * setPrimitive. Generates live DESIGN.md on every state change and feeds
 * ReferencePreview via extractTokens.
 */

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { extractTokens } from "@/lib/extract-tokens";
import { event } from "@/lib/gtag";
import { generateDesignMd } from "@/lib/playground/generate";
import {
  setPrimitive,
  type PlaygroundState,
  type MoodPreset,
  type Density,
  type RadiusScale,
  type WeightScale,
  type MotionPreset,
  type VoiceAdjective,
  type PersonaArchetype,
} from "@/lib/playground/state";
import { DEFAULT_STATE, stateForMood } from "@/lib/playground/defaults";
import { MOOD_DEFAULTS } from "@/lib/playground/rules/mood";
import { RANDOMIZE_WEIGHTS, RANDOMIZE_PRIMARY_POOL } from "@/lib/playground/samples";
import type { ColorPalette } from "@/lib/playground/palettes";
import { PlaygroundHeader } from "@/components/playground/header";
import { PlaygroundLayout } from "@/components/playground/layout";
import { PreviewPane } from "@/components/playground/preview-pane";
import { StartFrom } from "@/components/playground/start-from";
import { ReferencePickerModal } from "@/components/playground/reference-picker-modal";
import { CategorySection } from "@/components/playground/controls/category-section";
import { NameDescription } from "@/components/playground/controls/name-description";
import { MoodPicker } from "@/components/playground/controls/mood-picker";
import { ColorPicker } from "@/components/playground/controls/color-picker";
import { DensityPicker } from "@/components/playground/controls/density-picker";
import { RadiusPicker } from "@/components/playground/controls/radius-picker";
import { WeightPicker } from "@/components/playground/controls/weight-picker";
import { MotionPicker } from "@/components/playground/controls/motion-picker";
import { VoicePicker } from "@/components/playground/controls/voice-picker";
import { PersonasPicker } from "@/components/playground/controls/personas-picker";

function weightedPick<T extends string>(weights: Record<T, number>): T {
  const entries = Object.entries(weights) as [T, number][];
  const total = entries.reduce((s, [, w]) => s + w, 0);
  let r = Math.random() * total;
  for (const [key, w] of entries) {
    if ((r -= w) <= 0) return key;
  }
  return entries[0][0];
}

/** Map a RadiusScale to the px value that extractTokens consumes. */
function pxFromRadiusScale(r: RadiusScale): string {
  if (r === "sharp") return "2px";
  if (r === "pill") return "9999px";
  return "8px";
}

/** Infer RadiusScale from a reference's px-string value (e.g. "2-4px", "9999px"). */
function scaleFromPxRadius(rPx: string): RadiusScale {
  const m = rPx.match(/(\d+)/);
  if (!m) return "soft";
  const n = parseInt(m[1], 10);
  if (n <= 3) return "sharp";
  if (n >= 16) return "pill";
  return "soft";
}

/** Infer WeightScale from a reference's heading-weight numeric string. */
function scaleFromHeadingWeight(w: string): WeightScale {
  const n = parseInt(w, 10);
  if (isNaN(n)) return "regular";
  if (n <= 400) return "light";
  if (n >= 700) return "heavy";
  return "regular";
}

export function PlaygroundView({
  initialState,
  seedSource,
}: {
  initialState: PlaygroundState;
  seedSource: "shared-link" | "personality" | "clone" | "blank";
}) {
  const [state, setState] = useState<PlaygroundState>(initialState);
  const [refModalOpen, setRefModalOpen] = useState(false);
  const startedRef = useRef(false);

  /* ─── Apply a clone-from-reference seed (shared by URL + modal paths) ─── */
  const applyCloneFromRef = useCallback(async (refId: string) => {
    try {
      const res = await fetch(`/api/references/${refId}`);
      if (!res.ok) return;
      const data = (await res.json()) as {
        primary?: string;
        headingWeight?: string;
        radius?: string;
      };
      setState((s) => {
        const nextRadius = data.radius ? scaleFromPxRadius(data.radius) : s.radius;
        const nextWeight = data.headingWeight
          ? scaleFromHeadingWeight(data.headingWeight)
          : s.weight;
        const nextPrimary = data.primary ?? s.primary;
        const mDefault = MOOD_DEFAULTS[s.mood];
        return {
          ...s,
          base: { kind: "clone", refId },
          primary: nextPrimary,
          radius: nextRadius,
          weight: nextWeight,
          overrides: {
            ...s.overrides,
            primary: nextPrimary !== mDefault.primary,
            radius: nextRadius !== mDefault.radius,
            weight: nextWeight !== mDefault.weight,
          },
        };
      });
    } catch {
      // Silent — the user still has a functional Playground.
    }
  }, []);

  /* ─── On mount: analytics + optional clone-seed fetch from URL ─── */
  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    event("playground_start", {
      source: seedSource,
      ...(state.base.kind === "clone" && "refId" in state.base
        ? { refId: state.base.refId }
        : {}),
      ...(state.base.kind === "personality" && "code" in state.base
        ? { typeCode: state.base.code }
        : {}),
    });

    if (state.base.kind === "clone" && "refId" in state.base) {
      void applyCloneFromRef(state.base.refId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ─── Primitives with mood-override tracking ─── */
  const moodDefault = MOOD_DEFAULTS[state.mood];

  const setMood = useCallback((m: MoodPreset) => {
    setState((prev) => ({
      ...stateForMood(prev.name, m),
      tagline: prev.tagline,
      description: prev.description,
      base: prev.base,
      personas: prev.personas,
    }));
    event("playground_mood_pick", { mood: m });
  }, []);

  const setColor = useCallback(
    (hex: string, method: "preset" | "picker" | "palette" = "picker") => {
      setState((s) => setPrimitive(s, "primary", hex, moodDefault.primary));
      event("playground_color_pick", { primary: hex, method });
    },
    [moodDefault.primary],
  );

  const pickPalette = useCallback(
    (palette: ColorPalette) => {
      const hex = palette.colors[palette.primaryIndex];
      setColor(hex, "palette");
      event("playground_palette_pick", { palette: palette.id, primary: hex });
    },
    [setColor],
  );

  const setDensity = useCallback(
    (d: Density) => {
      setState((s) => setPrimitive(s, "density", d, moodDefault.density));
      event("playground_token_change", { token: "density", value: d });
    },
    [moodDefault.density],
  );

  const setRadius = useCallback(
    (r: RadiusScale) => {
      setState((s) => setPrimitive(s, "radius", r, moodDefault.radius));
      event("playground_token_change", { token: "radius", value: r });
    },
    [moodDefault.radius],
  );

  const setWeight = useCallback(
    (w: WeightScale) => {
      setState((s) => setPrimitive(s, "weight", w, moodDefault.weight));
      event("playground_token_change", { token: "weight", value: w });
    },
    [moodDefault.weight],
  );

  const setMotion = useCallback(
    (m: MotionPreset) => {
      setState((s) => setPrimitive(s, "motion", m, moodDefault.motion));
      event("playground_motion_pick", { motion: m });
    },
    [moodDefault.motion],
  );

  const setVoice = useCallback(
    (v: VoiceAdjective[]) => {
      setState((s) => setPrimitive(s, "voice", v, [...moodDefault.voice]));
      event("playground_voice_pick", { count: v.length, adjectives: v.join(",") });
    },
    [moodDefault.voice],
  );

  const setPersonas = useCallback((p: PersonaArchetype[]) => {
    setState((s) => ({ ...s, personas: p }));
    event("playground_personas_pick", { count: p.length, archetypes: p.join(",") });
  }, []);

  const setNameDescription = useCallback(
    (next: { name?: string; tagline?: string; description?: string }) => {
      setState((s) => ({
        ...s,
        name: next.name !== undefined ? next.name : s.name,
        tagline: next.tagline !== undefined ? next.tagline : s.tagline,
        description: next.description !== undefined ? next.description : s.description,
      }));
    },
    [],
  );

  /* ─── Start From handlers ─── */
  const pickBlank = useCallback(() => {
    setState((s) => ({ ...s, base: { kind: "blank" } }));
    event("playground_base_blank", {});
  }, []);

  const openReferenceModal = useCallback(() => {
    setRefModalOpen(true);
  }, []);

  const handleReferencePick = useCallback(
    (refId: string) => {
      event("playground_base_clone", { refId });
      void applyCloneFromRef(refId);
    },
    [applyCloneFromRef],
  );

  /* ─── Header actions ─── */
  const reset = useCallback(() => {
    setState(DEFAULT_STATE);
    event("playground_reset", {});
  }, []);

  const randomize = useCallback(() => {
    const mood = weightedPick(RANDOMIZE_WEIGHTS.mood);
    const seeded = stateForMood(state.name, mood);
    const next: PlaygroundState = {
      ...seeded,
      tagline: state.tagline,
      description: state.description,
      base: state.base,
      personas: state.personas,
      primary:
        RANDOMIZE_PRIMARY_POOL[Math.floor(Math.random() * RANDOMIZE_PRIMARY_POOL.length)],
      density: weightedPick(RANDOMIZE_WEIGHTS.density),
      radius: weightedPick(RANDOMIZE_WEIGHTS.radius),
      weight: weightedPick(RANDOMIZE_WEIGHTS.weight),
      motion: weightedPick(RANDOMIZE_WEIGHTS.motion),
    };
    const newMoodDefault = MOOD_DEFAULTS[mood];
    next.overrides = {
      primary: next.primary !== newMoodDefault.primary,
      density: next.density !== newMoodDefault.density,
      radius: next.radius !== newMoodDefault.radius,
      weight: next.weight !== newMoodDefault.weight,
      motion: next.motion !== newMoodDefault.motion,
      voice: false,
    };
    setState(next);
    event("playground_randomize", {});
  }, [state.name, state.tagline, state.description, state.base, state.personas]);

  const revertOverrides = useCallback(() => {
    setState((s) => {
      const d = MOOD_DEFAULTS[s.mood];
      return {
        ...s,
        primary: d.primary,
        density: d.density,
        radius: d.radius,
        weight: d.weight,
        motion: d.motion,
        voice: [...d.voice],
        overrides: {
          primary: false,
          density: false,
          radius: false,
          weight: false,
          motion: false,
          voice: false,
        },
      };
    });
  }, []);

  /* ─── Live preview — generate DESIGN.md → tokens → <ReferencePreview> ─── */
  const tokens = useMemo(() => {
    const md = generateDesignMd(state);
    return extractTokens({
      id: state.name.trim() || "untitled",
      designMd: md,
      primary: state.primary,
      background: "#ffffff",
      foreground: "#18181b",
      fontFamily: "Geist",
      headingWeight: String(
        state.weight === "heavy" ? 700 : state.weight === "light" ? 400 : 600,
      ),
      radius: pxFromRadiusScale(state.radius),
      mood: state.mood,
    });
  }, [state]);

  /* ─── Layout ─── */
  const controls = (
    <>
      <CategorySection title="Start from" defaultOpen>
        <StartFrom
          state={state}
          onPickBlank={pickBlank}
          onOpenReferenceModal={openReferenceModal}
          onRandomize={randomize}
        />
      </CategorySection>

      <CategorySection title="Brand identity" subtitle="Name, tagline, description" defaultOpen>
        <NameDescription
          name={state.name}
          tagline={state.tagline}
          description={state.description}
          onChange={setNameDescription}
        />
      </CategorySection>

      <CategorySection title="Mood" subtitle={`Current: ${state.mood}`} defaultOpen>
        <MoodPicker value={state.mood} onPick={setMood} />
      </CategorySection>

      <CategorySection title="Color" subtitle={state.primary} defaultOpen>
        <ColorPicker
          primary={state.primary}
          mood={state.mood}
          onChange={(hex) => setColor(hex, "picker")}
          onPickPalette={pickPalette}
        />
      </CategorySection>

      <CategorySection
        title="Tokens"
        subtitle={`${state.density} / ${state.radius} / ${state.weight}`}
      >
        <div className="space-y-4">
          <div>
            <div className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
              Density
            </div>
            <DensityPicker value={state.density} onPick={setDensity} />
          </div>
          <div>
            <div className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
              Radius
            </div>
            <RadiusPicker value={state.radius} onPick={setRadius} />
          </div>
          <div>
            <div className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
              Weight
            </div>
            <WeightPicker value={state.weight} onPick={setWeight} />
          </div>
        </div>
      </CategorySection>

      <CategorySection title="Motion" subtitle={state.motion}>
        <MotionPicker value={state.motion} onPick={setMotion} />
      </CategorySection>

      <CategorySection
        title="Philosophy"
        subtitle={`Voice: ${state.voice.length}/3 · Personas: ${state.personas.length}/4`}
      >
        <div className="space-y-4">
          <div>
            <div className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
              Voice
            </div>
            <VoicePicker value={state.voice} mood={state.mood} onChange={setVoice} />
          </div>
          <div>
            <div className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
              Personas
            </div>
            <PersonasPicker value={state.personas} onChange={setPersonas} />
          </div>
        </div>
      </CategorySection>
    </>
  );

  const preview = <PreviewPane state={state} tokens={tokens} />;

  return (
    <div className="min-h-screen">
      <PlaygroundHeader
        state={state}
        onReset={reset}
        onRevertOverrides={revertOverrides}
      />
      <PlaygroundLayout controls={controls} preview={preview} />
      <ReferencePickerModal
        open={refModalOpen}
        onOpenChange={setRefModalOpen}
        onPick={handleReferencePick}
      />
    </div>
  );
}
