import { describe, it, expect } from "vitest";
import { computeScore, type QuizAnswers } from "./scoring";
import { CORE_TEMPLATES, SUPPLEMENTARY_TEMPLATES } from "./quiz-data";

describe("computeScore", () => {
  const allTemplates = [...CORE_TEMPLATES, ...SUPPLEMENTARY_TEMPLATES];

  /** Build core answers where every pole-A company is chosen */
  const allPoleA = (templates = CORE_TEMPLATES): Record<string, string> => {
    const out: Record<string, string> = {};
    for (const t of templates) out[t.id] = t.companyA;
    return out;
  };

  /** Build core answers where every pole-B company is chosen */
  const allPoleB = (templates = CORE_TEMPLATES): Record<string, string> => {
    const out: Record<string, string> = {};
    for (const t of templates) out[t.id] = t.companyB;
    return out;
  };

  it("returns CDFS when all pole-A answers are chosen", () => {
    // Use only 2 templates per axis (simulating the quiz's random selection)
    const selected = CORE_TEMPLATES.filter((t) => ["T1", "T2", "D1", "D2", "E1", "E2", "S1", "S2"].includes(t.id));
    const answers: QuizAnswers = {
      core: allPoleA(selected),
      saturation: "muted",
      typography: "geometric",
      darkMode: false,
      comprehensive: "vercel",
    };
    const score = computeScore(answers, [...selected, ...SUPPLEMENTARY_TEMPLATES]);
    expect(score.typeCode).toBe("CDFS");
    expect(score.axisScores).toEqual({ temperature: 0, density: 0, elevation: 0, shape: 0 });
  });

  it("returns WOLR when all pole-B answers are chosen", () => {
    const selected = CORE_TEMPLATES.filter((t) => ["T1", "T2", "D1", "D2", "E1", "E2", "S1", "S2"].includes(t.id));
    const answers: QuizAnswers = {
      core: allPoleB(selected),
      saturation: "vivid",
      typography: "humanist",
      darkMode: true,
      comprehensive: "airbnb",
    };
    const score = computeScore(answers, [...selected, ...SUPPLEMENTARY_TEMPLATES]);
    expect(score.typeCode).toBe("WOLR");
    expect(score.axisScores).toEqual({ temperature: 2, density: 2, elevation: 2, shape: 2 });
  });

  it("passes supplementary axes through unchanged", () => {
    const selected = CORE_TEMPLATES.filter((t) => ["T1", "T2", "D1", "D2", "E1", "E2", "S1", "S2"].includes(t.id));
    const answers: QuizAnswers = {
      core: allPoleA(selected),
      saturation: "vivid",
      typography: "monospace",
      darkMode: true,
      comprehensive: "vercel",
    };
    const score = computeScore(answers, [...selected, ...SUPPLEMENTARY_TEMPLATES]);
    expect(score.saturation).toBe("vivid");
    expect(score.typography).toBe("monospace");
    expect(score.darkMode).toBe(true);
  });

  it("tiebreaks on first answer when one axis is split", () => {
    // T1 = pole A (vercel = Cool), T2 = pole B (claude = Warm) → tie → first answer (Cool)
    const t1 = CORE_TEMPLATES.find((t) => t.id === "T1")!;
    const t2 = CORE_TEMPLATES.find((t) => t.id === "T2")!;
    const rest = CORE_TEMPLATES.filter((t) => ["D1", "D2", "E1", "E2", "S1", "S2"].includes(t.id));

    const answers: QuizAnswers = {
      core: {
        [t1.id]: t1.companyA, // Cool
        [t2.id]: t2.companyB, // Warm
        ...allPoleA(rest),
      },
      saturation: "muted",
      typography: "geometric",
      darkMode: false,
      comprehensive: "vercel",
    };
    const score = computeScore(answers, [t1, t2, ...rest, ...SUPPLEMENTARY_TEMPLATES]);
    // First temperature answer was Cool → tiebreak to C
    expect(score.typeCode[0]).toBe("C");
    expect(score.axisScores.temperature).toBe(1);
  });

  it("records axisScores as raw pole-B counts (0, 1, or 2)", () => {
    const t1 = CORE_TEMPLATES.find((t) => t.id === "T1")!;
    const t2 = CORE_TEMPLATES.find((t) => t.id === "T2")!;
    const rest = CORE_TEMPLATES.filter((t) => ["D1", "D2", "E1", "E2", "S1", "S2"].includes(t.id));

    const answers: QuizAnswers = {
      core: {
        [t1.id]: t1.companyB,
        [t2.id]: t2.companyB,
        ...allPoleA(rest),
      },
      saturation: "muted",
      typography: "geometric",
      darkMode: false,
      comprehensive: "vercel",
    };
    const score = computeScore(answers, [t1, t2, ...rest, ...SUPPLEMENTARY_TEMPLATES]);
    expect(score.axisScores.temperature).toBe(2);
    expect(score.axisScores.density).toBe(0);
    expect(score.axisScores.elevation).toBe(0);
    expect(score.axisScores.shape).toBe(0);
  });
});
