import { describe, it, expect } from "vitest";
import { spawnSync } from "node:child_process";
import { selectFixtures, summarizeQualityGate } from "../../../test-v2/tools/lib/quality-gate-policy.mjs";

const config = () => ({
  sourceSkills: { landing: ["skills/landing/SKILL.md"] },
  fixtures: [{ id: "landing/one", skill: "landing", artifact: "render.html", checks: ["render"] }],
});

describe("release quality gate coverage", () => {
  it("blocks missing and stale evidence by default", () => {
    for (const status of ["MISSING", "STALE", "UNVERIFIED", "REVIEW_PENDING", "CHECK_PENDING", "CHECK_ERROR", "STYLE_FAIL", "FAIL", "UNKNOWN"]) {
      expect(summarizeQualityGate([{ status }]).verdict).toBe("BLOCKED");
    }
    expect(summarizeQualityGate([{ status: "PASS" }]).verdict).toBe("OK");
  });

  it("allows incomplete diagnostics explicitly but never actual failures or zero coverage", () => {
    expect(summarizeQualityGate([{ status: "STALE" }], false).verdict).toBe("OK");
    expect(summarizeQualityGate([{ status: "UNVERIFIED" }], false).verdict).toBe("OK");
    expect(summarizeQualityGate([{ status: "STYLE_FAIL" }], false).verdict).toBe("BLOCKED");
    expect(summarizeQualityGate([{ status: "FAIL" }], false).verdict).toBe("BLOCKED");
    expect(summarizeQualityGate([], false).verdict).toBe("BLOCKED");
  });

  it("rejects mistyped selectors instead of passing zero fixtures", () => {
    expect(() => selectFixtures(config(), new Set(["typo"]))).toThrow("unknown fixture");
    expect(() => selectFixtures(config(), new Set())).toThrow("requires at least one");
    expect(selectFixtures(config(), new Set(["landing/one"]))).toHaveLength(1);
  });

  it("rejects empty matrices, duplicate ids, missing sources and unrecognized checks", () => {
    expect(() => selectFixtures({ fixtures: [] })).toThrow("non-empty");
    const duplicate = config();
    duplicate.fixtures.push({ ...duplicate.fixtures[0] });
    expect(() => selectFixtures(duplicate)).toThrow("duplicate");
    expect(() => selectFixtures({ ...config(), sourceSkills: {} })).toThrow("source skill");
    for (const checks of [[], ["typo"]]) {
      const invalid = config();
      invalid.fixtures[0].checks = checks;
      expect(() => selectFixtures(invalid)).toThrow("empty or unknown checks");
    }
  });

  it("the real CLI rejects a nonexistent selector before launching a browser", () => {
    const result = spawnSync(process.execPath, ["test-v2/tools/quality-gate.mjs", "--only", "not-a-real-fixture", "--json"], { encoding: "utf8" });
    expect(result.status).toBe(1);
    expect(result.stderr).toContain("unknown fixture id: not-a-real-fixture");
  });
});
