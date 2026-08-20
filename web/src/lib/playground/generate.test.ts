import { createRequire } from "node:module";
import { describe, expect, it } from "vitest";
import { DEFAULT_STATE } from "./defaults";
import { generateDesignMd } from "./generate";
import type { PlaygroundState } from "./state";

const require = createRequire(import.meta.url);
const coreEngine = require("../../../../scripts/design-md-core.cjs") as {
  inspectDesignMd(markdown: string): { format: string; coreSectionIds: string[] };
  migrateDesignMd(markdown: string, options?: { requireSourceValid?: boolean }): {
    designMd: string;
    report: { status: string; projection_roundtrip_equal: boolean };
  };
};

const sectionIds = [
  "experience",
  "foundations",
  "typography-assets",
  "components-states",
  "layout-platforms",
  "content-locales",
  "governance",
] as const;

describe("Playground DESIGN.md Core v2 writer", () => {
  it("exports a deterministic, standalone Core projection without tool metadata", () => {
    const state: PlaygroundState = {
      ...DEFAULT_STATE,
      name: "Atlas",
      tagline: "Work with less noise",
      primary: "#185cff",
      voice: ["Direct", "Grounded"],
      personas: ["engineer-who-skims", "pm-who-approves"],
    };

    const first = generateDesignMd(state);
    const second = generateDesignMd(state);

    expect(second).toBe(first);
    expect(first.startsWith("# Atlas Design System\n")).toBe(true);
    expect(first).not.toMatch(/^---/);
    expect(first).not.toMatch(/oh-my-design|\bomd\b|playground|generated via|verification_v2/i);
    expect(first).toContain("`#185cff`");
    expect(first).toContain("project proposals from the current control state");
    expect(first).toContain("Unchanged defaults are generator proposals, not user-authored or observed production facts");
    expect(first).toContain("Unknown values remain absent at the smallest unresolved field or group boundary");

    const inspection = coreEngine.inspectDesignMd(first);
    expect(inspection.format).toBe("core-v2");
    expect(inspection.coreSectionIds).toEqual(sectionIds);
    for (const id of sectionIds) {
      expect(first.match(new RegExp(`<!-- design-md:section ${id} -->`, "g"))).toHaveLength(1);
    }

    const roundtrip = coreEngine.migrateDesignMd(first, { requireSourceValid: true });
    expect(roundtrip.report.status).toBe("pass");
    expect(roundtrip.report.projection_roundtrip_equal).toBe(true);
    expect(roundtrip.designMd).toBe(first);
  });

  it("labels empty choices as unresolved instead of inventing production facts", () => {
    const markdown = generateDesignMd({ ...DEFAULT_STATE, name: "Sparse" });
    expect(markdown).toContain("No personas selected");
    expect(markdown).toContain("when product evidence or owner input is available");
    expect(markdown).toContain("not user-authored or observed production facts");
    expect(markdown).not.toMatch(/(?:are|as) (?:verified product|observed production) facts/i);
  });
});
