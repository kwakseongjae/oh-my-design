import { createRequire } from "node:module";
import { readFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import {
  DESIGN_MD_VALIDATE_COMMAND,
  DESIGN_MD_CORE_SECTIONS,
  describeBuilderDesignMdCoreConformance,
  projectBuilderDesignMdCore,
} from "./design-md-core-export";

const require = createRequire(import.meta.url);
const coreEngine = require("../../../../scripts/design-md-core.cjs") as {
  inspectDesignMd(markdown: string): {
    format: string;
    coreSectionIds: string[];
    conformance: {
      structurally_valid: boolean;
      portable_core: boolean;
      reasons: { code: string; message: string }[];
    };
  };
  migrateDesignMd(markdown: string, options?: { requireSourceValid?: boolean }): {
    designMd: string;
    report: { status: string; projection_roundtrip_equal: boolean };
  };
};
const catalogRoot = fileURLToPath(new URL("../../../references", import.meta.url));

const emptyOverrides = {
  primaryColor: "",
  fontFamily: "",
  headingWeight: "",
  borderRadius: "",
  darkMode: false,
};

const original = {
  primaryColor: "#0cefd3",
  fontFamily: "WORK",
  headingWeight: "700",
  borderRadius: "12px",
};

function legacySource() {
  return `---
id: baemin
omd: "0.1"
verification_v2:
  checked: "2026-07-12"
---
# Design System Inspiration of Baemin (배달의민족)

## 1. Visual Theme & Atmosphere

Baemin uses a bright mint on its inspected public product surface.

## 2. Color Palette & Roles

- **Primary:** \`#0cefd3\` on the current web action.

## 4. Component Patterns

### App download card
- Height: 54px
- States: default and hover were observed.

---

**Verified:** 2026-07-12 (verification v2, live capture)

## 8. Responsive Behavior

No universal breakpoint is established.

## 10. Voice & Tone

Warm, concise, and clear about recovery.
`;
}

describe("Builder DESIGN.md Core v2 export", () => {
  it("labels shared-engine conformance without upgrading Structural Core", () => {
    expect(describeBuilderDesignMdCoreConformance({
      level: "structural-core",
      structurally_valid: true,
      portable_core: false,
      reasons: [
        { code: "missing-product-surface-scope", message: "Scope is missing." },
        { code: "missing-primary-task", message: "Primary task is missing." },
      ],
    })).toEqual(expect.objectContaining({
      title: "Structural Core — project context required",
      tone: "warning",
    }));
    expect(describeBuilderDesignMdCoreConformance({
      level: "structural-core",
      structurally_valid: true,
      portable_core: false,
      reasons: [{ code: "contains-prescriptive-placeholder", message: "Placeholder remains." }],
    })).toEqual(expect.objectContaining({
      title: "Structural Core — validation work required",
      tone: "warning",
    }));
    expect(describeBuilderDesignMdCoreConformance({
      level: "portable-core",
      structurally_valid: true,
      portable_core: true,
      reasons: [],
    })).toEqual(expect.objectContaining({ title: "Portable Core", tone: "pass" }));
  });

  it("publishes the exact standalone validation handoff and uses the shared engine verdict", () => {
    expect(DESIGN_MD_VALIDATE_COMMAND).toBe("npx oh-my-design-cli@latest design-md validate DESIGN.md");
    const result = projectBuilderDesignMdCore({
      source: legacySource(),
      referenceName: "Baemin",
      original,
      overrides: emptyOverrides,
    });
    expect(result.conformance).toEqual(coreEngine.inspectDesignMd(result.markdown).conformance);
  });

  it("projects the as-is Builder download into the same Core contract the CLI reads", () => {
    const result = projectBuilderDesignMdCore({
      source: legacySource(),
      referenceName: "Baemin",
      original,
      overrides: emptyOverrides,
      components: ["button", "input", "dialog"],
      stylePreferences: {
        buttonStyle: "sharp",
        headerStyle: "glass",
        density: "spacious",
      },
    });

    expect(result.markdown.startsWith("# Baemin (배달의민족) Reference Design System\n")).toBe(true);
    expect(result.markdown).not.toMatch(/^---/);
    expect(result.markdown).not.toMatch(/\bomd\b|oh-my-design|verification_v2|\*\*Verified:/i);
    expect(result.decisions).toEqual([]);
    expect(result.markdown).toContain("<!-- design-md:claim authority kind=evidence-backed-reconstruction lang=en -->");
    expect(result.markdown).toContain("<!-- design-md:claim application-priority order=prompt-fact,repository-fact,system-contract,reference-inspiration lang=en -->");
    expect(result.markdown).toContain("<!-- design-md:claim unknowns policy=absent-at-smallest-unresolved-boundary lang=en -->");
    expect(result.markdown).toContain("<!-- design-md:claim changes policy=review-record-validate-before-adoption lang=en -->");
    expect(result.markdown).toContain("not authority for an unrelated target project");
    expect(result.markdown).toContain("<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->");
    expect(result.markdown).not.toContain("<!-- design-md:claim scope kind=product-surface lang=en -->");
    expect(result.markdown).not.toMatch(/<!-- design-md:claim primary-tasks\b/);
    expect(result.markdown.match(/<!-- design-md:claim-end -->/g)).toHaveLength(5);

    const inspection = coreEngine.inspectDesignMd(result.markdown);
    expect(inspection.format).toBe("core-v2");
    expect(inspection.coreSectionIds).toEqual(DESIGN_MD_CORE_SECTIONS.map(({ id }) => id));
    for (const { id } of DESIGN_MD_CORE_SECTIONS) {
      expect(result.markdown.match(new RegExp(`<!-- design-md:section ${id} -->`, "g"))).toHaveLength(1);
    }
  });

  it("declares scope and primary tasks only when the source names those claims explicitly", () => {
    const result = projectBuilderDesignMdCore({
      source: `# Explicit Design System

## Product Scope

The operations console serves incident responders.

## Primary Tasks

- Review a queued incident.
- Resolve the incident with an auditable disposition.

## Foundations

- Use \`#123456\` for the primary action.
`,
      referenceName: "Explicit",
      original,
      overrides: emptyOverrides,
    });

    expect(result.markdown).toContain("<!-- design-md:claim scope kind=product-surface lang=en -->");
    expect(result.markdown).toContain("<!-- design-md:claim primary-tasks kind=user-outcomes count=2 lang=en -->");
    expect(result.markdown).toContain("<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->");
    expect(result.markdown.match(/<!-- design-md:claim-end -->/g)).toHaveLength(7);
    expect(result.conformance.portable_core).toBe(true);
    expect(result.conformance).toEqual(coreEngine.inspectDesignMd(result.markdown).conformance);
  });

  it("does not declare user outcomes for an explicit heading without a task list", () => {
    const result = projectBuilderDesignMdCore({
      source: `# Incomplete Design System

## Product Scope

The operations console serves incident responders.

## Primary Tasks

No task list was established by the source.

## Foundations

- Use \`#123456\` for the primary action.
`,
      referenceName: "Incomplete",
      original,
      overrides: emptyOverrides,
    });

    expect(result.markdown).toContain("<!-- design-md:claim scope kind=product-surface lang=en -->");
    expect(result.markdown).not.toMatch(/<!-- design-md:claim primary-tasks\b/);
    expect(result.conformance.reasons).toContainEqual(expect.objectContaining({
      code: "missing-primary-task",
    }));
  });

  it("keeps unknown groups absent instead of synthesizing generic Builder defaults", () => {
    const result = projectBuilderDesignMdCore({
      source: `# Design System Inspiration of Sparse\n\n## 1. Visual Theme & Atmosphere\n\nA compact scheduling product.\n`,
      referenceName: "Sparse",
      original: { primaryColor: "", fontFamily: "", headingWeight: "", borderRadius: "" },
      overrides: emptyOverrides,
      components: ["button", "input", "table", "card", "badge", "tabs", "dialog"],
      stylePreferences: {
        buttonStyle: "sharp",
        inputStyle: "bordered",
        headerStyle: "glass",
        cardStyle: "bordered",
        density: "spacious",
      },
    });

    const typography = result.markdown.split("<!-- design-md:section typography-assets -->")[1]
      .split("<!-- design-md:section components-states -->")[0];
    const components = result.markdown.split("<!-- design-md:section components-states -->")[1]
      .split("<!-- design-md:section layout-platforms -->")[0];
    expect(typography).not.toMatch(/font|system-ui|pretendard|arial/i);
    expect(components).not.toMatch(/button|input|table|card|badge|tabs|dialog|padding|blur|radius/i);
    expect(result.markdown).not.toMatch(/9999px|backdrop-filter|dark mode tokens/i);
  });

  it("records only changed user overrides as typed decisions without generating fallback recipes", () => {
    const result = projectBuilderDesignMdCore({
      source: legacySource(),
      referenceName: "Baemin",
      original,
      overrides: {
        primaryColor: "#123456",
        fontFamily: "Project Sans",
        headingWeight: "700", // unchanged: not a user decision
        borderRadius: "8px",
        darkMode: true,
      },
      components: ["dialog"],
      stylePreferences: { buttonStyle: "rounded", headerStyle: "glass" },
    });

    expect(result.decisions).toEqual([
      expect.objectContaining({ path: "foundations.color.primary", value: "#123456", source: "user-instruction" }),
      expect.objectContaining({ path: "foundations.shape.radius", value: "8px", source: "user-instruction" }),
      expect.objectContaining({ path: "typography_assets.type.family.ui", value: "Project Sans", source: "user-instruction" }),
      expect.objectContaining({ path: "foundations.color.modes.dark.required", value: true, source: "user-instruction" }),
      expect.objectContaining({ path: "components_states.button.style", value: "rounded", source: "user-instruction" }),
    ]);
    expect(result.markdown).toContain("If adopted for a project, these selections take precedence over conflicting reference observations");
    expect(result.markdown).toContain("Exact dark-mode token values remain unspecified");
    expect(result.markdown).not.toMatch(/9999px|backdrop-filter|primary-tinted near-black|padding: 10px/i);
    expect(result.markdown).not.toContain("typography_assets.type.heading.weight");
    expect(result.markdown).toContain("**Button style:** `rounded` (explicit user instruction)");
  });

  it("normalizes an existing Core source without duplicating anchors", () => {
    const source = `# Existing Design System\n\n${DESIGN_MD_CORE_SECTIONS.map(({ id, heading }, index) => `<!-- design-md:section ${id} -->\n## ${index + 1}. ${heading}\n\n${id === "experience" ? "Known experience." : ""}`).join("\n\n")}\n`;
    const result = projectBuilderDesignMdCore({
      source,
      referenceName: "Existing",
      original,
      overrides: emptyOverrides,
    });
    expect(result.markdown.startsWith("# Existing Design System\n")).toBe(true);
    expect(coreEngine.inspectDesignMd(result.markdown).format).toBe("core-v2");
    for (const { id } of DESIGN_MD_CORE_SECTIONS) {
      expect(result.markdown.match(new RegExp(`<!-- design-md:section ${id} -->`, "g"))).toHaveLength(1);
    }
  });

  it("preserves unmatched substantive legacy sections without promoting them to typed facts", () => {
    const source = `# Catchtable Design System

## 1. Visual Theme & Atmosphere

A reservation experience.

## 6. Spacing & Shape

Spacing follows an observed 8px rhythm.

## 8. Accessibility

Keyboard focus remains visible.

## 9. Overall Personality

Calm during high-demand booking moments.

## 10. Verification

Captured from a public marketing page.
`;
    const result = projectBuilderDesignMdCore({
      source,
      referenceName: "Catchtable",
      original,
      overrides: emptyOverrides,
    });

    expect(result.markdown).toContain("Spacing follows an observed 8px rhythm.");
    expect(result.markdown).toContain("Keyboard focus remains visible.");
    expect(result.markdown).toContain("Preserved source material — Overall Personality");
    expect(result.markdown).toContain("Calm during high-demand booking moments.");
    expect(result.markdown).not.toContain("Captured from a public marketing page.");
    expect(result.diagnostics).toEqual({
      substantiveSourceSections: 5,
      mappedSections: 3,
      preservedUnclassifiedSections: ["9. Overall Personality"],
      omittedMetadataSections: ["10. Verification"],
    });
  });

  it("keeps source-domain and evidence-boundary rules in portable Governance", () => {
    const source = `# Domain-aware Design System

## 1. Visual Theme & Atmosphere

A restrained product surface.

## 9. Source Domains & Verification Boundary

Only home and catalog surfaces may establish product tokens. Corporate, newsroom, and documentation copy must not populate product CSS.
`;
    const result = projectBuilderDesignMdCore({ source, referenceName: "Domain-aware", original, overrides: emptyOverrides });
    expect(result.markdown).toContain("Preserved source material — Source Domains & Verification Boundary");
    expect(result.markdown).toContain("must not populate product CSS");
    expect(result.diagnostics.preservedUnclassifiedSections).toEqual([
      "9. Source Domains & Verification Boundary",
    ]);
    expect(result.diagnostics.omittedMetadataSections).toEqual([]);
  });

  it("removes legacy placeholder labels while preserving their evidence boundary", () => {
    const source = `# Boundary Design System

## 1. Visual Theme & Atmosphere

This product lets an operator review and resolve an incident record.

## 2. Color

No action color was established. Do not infer one. [FILL IN: owner-approved color]

| State | Treatment |
|---|---|
| Loading | [FILL IN — no observed state] |
| Surface | #fff | [FILL IN: font] | verified note |

- **[FILL IN: invented persona]** — do not add one.
- Keep color #fff; font [FILL IN: missing family].

## 10. Application Rules

Unknown values remain absent.
`;
    const result = projectBuilderDesignMdCore({
      source,
      referenceName: "Boundary",
      original,
      overrides: emptyOverrides,
    });
    expect(result.markdown).not.toMatch(/\[FILL\s+IN/i);
    expect(result.markdown).toContain("No action color was established. Do not infer one.");
    expect(result.markdown).toContain("| Loading |  |");
    expect(result.markdown).toContain("| Surface | #fff |  | verified note |");
    expect(result.markdown).toContain("Keep color #fff; font.");
    expect(result.markdown).not.toContain("invented persona");
  });

  it("keeps every canonical reference read-only while projecting a portable Core boundary", () => {
    const ids = readdirSync(catalogRoot, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name)
      .filter((id) => {
        try {
          readFileSync(`${catalogRoot}/${id}/DESIGN.md`, "utf8");
          return true;
        } catch {
          return false;
        }
      })
      .sort();
    expect(ids.length).toBeGreaterThanOrEqual(400);
    let portableCoreCount = 0;
    const structuralOnly: { id: string; reasons: string[] }[] = [];

    for (const id of ids) {
      const source = readFileSync(`${catalogRoot}/${id}/DESIGN.md`, "utf8");
      const result = projectBuilderDesignMdCore({
        source,
        referenceName: id,
        original: { primaryColor: "", fontFamily: "", headingWeight: "", borderRadius: "" },
        overrides: emptyOverrides,
      });
      expect(result.markdown, id).not.toMatch(/^---/);
      expect(result.markdown, id).not.toMatch(/oh-my-design|\bomd\b|data-omd-/i);
      const inspection = coreEngine.inspectDesignMd(result.markdown);
      expect(inspection.format, id).toBe("core-v2");
      expect(inspection.conformance.structurally_valid, id).toBe(true);
      expect(result.conformance, `${id}: Builder and CLI conformance`).toEqual(inspection.conformance);
      if (inspection.conformance.portable_core) {
        portableCoreCount += 1;
      } else {
        structuralOnly.push({
          id,
          reasons: inspection.conformance.reasons.map((reason: { code: string }) => reason.code),
        });
      }
      const cliProjection = coreEngine.migrateDesignMd(result.markdown, { requireSourceValid: true });
      expect(cliProjection.report.status, id).toBe("pass");
      expect(cliProjection.report.projection_roundtrip_equal, id).toBe(true);
      expect(cliProjection.designMd, `${id}: Builder and CLI projection bytes`).toBe(result.markdown);
      expect(result.decisions, id).toEqual([]);
      expect(
        result.diagnostics.mappedSections
          + result.diagnostics.preservedUnclassifiedSections.length
          + result.diagnostics.omittedMetadataSections.length,
        `${id}: every substantive source section is accounted for`,
      ).toBe(result.diagnostics.substantiveSourceSections);
      expect(readFileSync(`${catalogRoot}/${id}/DESIGN.md`, "utf8"), id).toBe(source);
    }
    // Never freeze a marketing-friendly count here: the shared evaluator is
    // the source of truth, and catalog evidence may improve independently.
    // Every current structural result must keep all of its exact reason codes.
    expect(portableCoreCount + structuralOnly.length).toBe(ids.length);
    expect(structuralOnly.length).toBeGreaterThan(0);
    for (const entry of structuralOnly) {
      expect(entry.reasons.length, entry.id).toBeGreaterThan(0);
      expect(entry.reasons, entry.id).not.toContain("contains-prescriptive-placeholder");
    }
  }, 15_000);
});
