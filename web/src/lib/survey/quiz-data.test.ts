import { describe, it, expect } from "vitest";
import {
  selectTemplates,
  CORE_TEMPLATES,
  SUPPLEMENTARY_TEMPLATES,
  COMPANY_TOKENS,
} from "./quiz-data";

describe("selectTemplates", () => {
  it("returns exactly 12 templates (8 core + 4 supplementary)", () => {
    const templates = selectTemplates(42);
    expect(templates).toHaveLength(12);
  });

  it("includes exactly 2 templates per core axis", () => {
    const templates = selectTemplates(42);
    const byAxis: Record<string, number> = {};
    for (const t of templates) {
      byAxis[t.axis] = (byAxis[t.axis] || 0) + 1;
    }
    expect(byAxis.temperature).toBe(2);
    expect(byAxis.density).toBe(2);
    expect(byAxis.elevation).toBe(2);
    expect(byAxis.shape).toBe(2);
  });

  it("includes all 4 supplementary templates", () => {
    const templates = selectTemplates(42);
    const supAxes = templates.filter((t) =>
      ["saturation", "typography", "comprehensive", "darkmode"].includes(t.axis),
    );
    expect(supAxes).toHaveLength(4);
  });

  it("produces same output for same seed (deterministic)", () => {
    const t1 = selectTemplates(42);
    const t2 = selectTemplates(42);
    expect(t1.map((t) => t.id)).toEqual(t2.map((t) => t.id));
  });

  it("produces different output for different seeds", () => {
    const t1 = selectTemplates(1);
    const t2 = selectTemplates(999);
    // At least one id should differ (given 81+ combinations, probability of identity is ~1%)
    const ids1 = t1.map((t) => t.id).join(",");
    const ids2 = t2.map((t) => t.id).join(",");
    // Use multiple seeds to ensure eventual difference
    let anyDiff = ids1 !== ids2;
    if (!anyDiff) {
      for (let s = 2; s < 20; s++) {
        if (selectTemplates(s).map((t) => t.id).join(",") !== ids1) {
          anyDiff = true;
          break;
        }
      }
    }
    expect(anyDiff).toBe(true);
  });
});

describe("CORE_TEMPLATES", () => {
  it("has 12 templates (3 per axis × 4 axes)", () => {
    expect(CORE_TEMPLATES).toHaveLength(12);
  });

  it("every template references a valid company", () => {
    for (const t of CORE_TEMPLATES) {
      expect(COMPANY_TOKENS[t.companyA]).toBeDefined();
      expect(COMPANY_TOKENS[t.companyB]).toBeDefined();
    }
  });

  it("every template has valid pole letters", () => {
    for (const t of CORE_TEMPLATES) {
      const axisPoles: Record<string, string[]> = {
        temperature: ["C", "W"],
        density: ["D", "O"],
        elevation: ["F", "L"],
        shape: ["S", "R"],
      };
      expect(axisPoles[t.axis]).toContain(t.poleA);
      expect(axisPoles[t.axis]).toContain(t.poleB);
    }
  });
});

describe("COMPANY_TOKENS", () => {
  it("has hex colors in expected format", () => {
    for (const [id, tokens] of Object.entries(COMPANY_TOKENS)) {
      expect(tokens.primary).toMatch(/^#[0-9a-fA-F]{6}$/);
      expect(tokens.bg).toMatch(/^#[0-9a-fA-F]{6}$/);
      expect(tokens.fg).toMatch(/^#[0-9a-fA-F]{6}$/);
    }
  });

  it("has valid saturation and typography values", () => {
    for (const tokens of Object.values(COMPANY_TOKENS)) {
      expect(["muted", "vivid"]).toContain(tokens.saturation);
      expect(["geometric", "humanist", "monospace"]).toContain(tokens.typography);
    }
  });
});
