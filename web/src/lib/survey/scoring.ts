/**
 * Quiz Scoring — 12-question → TypeCode + supplementary axes
 */

import type { TypeCode, Temperature, Density, Elevation, Shape } from "./types";
import { getTypeCode, REFERENCE_PROFILES } from "./types";
import type { CoreAxis, QuestionTemplate } from "./quiz-data";

/* ── Types ──────────────────────────────────────────────── */

export interface QuizAnswers {
  /** Core axis answers: maps question template ID → chosen company ID */
  core: Record<string, string>;
  /** Saturation preference */
  saturation: "muted" | "vivid";
  /** Typography character preference */
  typography: "geometric" | "humanist" | "monospace";
  /** Dark mode preference */
  darkMode: boolean;
  /** Comprehensive question — chosen company ID */
  comprehensive: string;
}

export interface QuizScore {
  typeCode: TypeCode;
  axisScores: Record<CoreAxis, number>; // 0 = strong A, 1 = split, 2 = strong B
  saturation: "muted" | "vivid";
  typography: "geometric" | "humanist" | "monospace";
  darkMode: boolean;
}

/* ── Scoring Logic ──────────────────────────────────────── */

const AXIS_POLE_B: Record<CoreAxis, string> = {
  temperature: "W",
  density: "O",
  elevation: "L",
  shape: "R",
};

/**
 * Compute quiz score from 12 answers.
 *
 * Core axes: each has 2 questions. Count how many times user chose pole B.
 *   0 = strong A, 1 = tied, 2 = strong B.
 *
 * Tiebreaker for tied axes (score=1):
 *   Use the first answer given (earlier question wins).
 *
 * Comprehensive question:
 *   Only applies as secondary tiebreaker when a core axis is tied.
 *   Looks up the chosen company's REFERENCE_PROFILES to break the tie.
 */
export function computeScore(
  answers: QuizAnswers,
  templates: QuestionTemplate[],
): QuizScore {
  const coreTemplates = templates.filter(
    (t) => t.axis === "temperature" || t.axis === "density" || t.axis === "elevation" || t.axis === "shape",
  );

  // Group templates by axis
  const byAxis: Record<CoreAxis, QuestionTemplate[]> = {
    temperature: [],
    density: [],
    elevation: [],
    shape: [],
  };
  for (const t of coreTemplates) {
    byAxis[t.axis as CoreAxis].push(t);
  }

  // Score each axis
  const axisScores: Record<CoreAxis, number> = {
    temperature: 0,
    density: 0,
    elevation: 0,
    shape: 0,
  };

  // Track first answer per axis for tiebreaking
  const firstAnswerPole: Record<CoreAxis, string> = {
    temperature: "",
    density: "",
    elevation: "",
    shape: "",
  };

  for (const axis of Object.keys(byAxis) as CoreAxis[]) {
    const axisTemplates = byAxis[axis];
    let poleBCount = 0;

    for (let i = 0; i < axisTemplates.length; i++) {
      const t = axisTemplates[i];
      const chosen = answers.core[t.id];
      if (!chosen) continue;

      const chosePoleB = chosen === t.companyB;
      if (chosePoleB) poleBCount++;

      // Track first answer's pole
      if (i === 0) {
        firstAnswerPole[axis] = chosePoleB ? t.poleB : t.poleA;
      }
    }

    axisScores[axis] = poleBCount;
  }

  // Resolve axis values
  const resolveAxis = (axis: CoreAxis): string => {
    const score = axisScores[axis];
    const poleB = AXIS_POLE_B[axis];
    const poleA = axis === "temperature" ? "C" : axis === "density" ? "D" : axis === "elevation" ? "F" : "S";

    if (score === 0) return poleA;
    if (score === 2) return poleB;

    // Tied (score === 1): use first answer
    if (firstAnswerPole[axis]) return firstAnswerPole[axis];

    // Fallback: use comprehensive question's company profile
    if (answers.comprehensive) {
      const profile = REFERENCE_PROFILES[answers.comprehensive];
      if (profile) {
        const profileKey = axis === "temperature" ? "t" : axis === "density" ? "d" : axis === "elevation" ? "e" : "s";
        return profile[profileKey];
      }
    }

    return poleA; // ultimate fallback
  };

  const t = resolveAxis("temperature") as Temperature;
  const d = resolveAxis("density") as Density;
  const e = resolveAxis("elevation") as Elevation;
  const s = resolveAxis("shape") as Shape;

  return {
    typeCode: getTypeCode(t, d, e, s),
    axisScores,
    saturation: answers.saturation,
    typography: answers.typography,
    darkMode: answers.darkMode,
  };
}
