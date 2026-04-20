/**
 * Reference Smoke Test
 *
 * For every reference in `references/`, exercise the CLI's actual
 * generation pipeline (loadReference → applyOverrides) and assert
 * the produced DESIGN.md + shadcn CSS pass basic structural checks.
 *
 * This is the primary guard against a malformed reference DESIGN.md
 * landing in the repo: PR reviewers see exactly which ref(s) failed
 * which check, in vitest's per-test output.
 *
 * Note: the inline-modification logic for StylePreferences (the
 * subject of the previous design-md-consistency.test.mjs simulation)
 * lives in `web/src/lib/core/generate-css.ts` and is unit-tested
 * directly in `web/src/lib/core/generate-css.test.ts`. We don't
 * re-test it from the CLI side to avoid drift between a transcribed
 * copy and the real production code.
 */

import { describe, it, expect } from "vitest";
import { listReferences, loadReference } from "../../src/core/reference-parser.js";
import { applyOverrides } from "../../src/core/customizer.js";

const REFERENCES = listReferences();

describe("every reference loads + generates a valid DESIGN.md", () => {
  it("references/ is non-empty", () => {
    expect(REFERENCES.length).toBeGreaterThan(0);
  });

  for (const meta of REFERENCES) {
    describe(meta.id, () => {
      const ref = loadReference(meta.id);

      it("loads with required identity fields", () => {
        expect(ref.name).toBeTruthy();
        expect(ref.colors.primary).toMatch(/^#[0-9a-fA-F]{6}$/);
        expect(ref.colors.background).toMatch(/^#[0-9a-fA-F]{6}$/);
        expect(ref.colors.foreground).toMatch(/^#[0-9a-fA-F]{6}$/);
        expect(ref.designMd.length).toBeGreaterThan(500);
      });

      it("DESIGN.md carries the canonical Stitch sections 1-9", () => {
        // Stitch format: 1.Visual, 2.Color, 3.Typography, 4.Component,
        // 5.Layout, 6.Depth, 7.Do's & Don'ts, 8.Responsive, 9.Agent.
        // Philosophy Layer (10-15) is optional per OmD v0.1.
        const numbered = [...ref.designMd.matchAll(/^## (\d+)\. /gm)].map(
          (m) => parseInt(m[1], 10),
        );
        const unique = new Set(numbered);
        for (const n of [1, 2, 3, 4, 5, 6, 7, 8, 9]) {
          expect(unique, `${meta.id} missing section ${n}`).toContain(n);
        }
      });

      it("as-is mode produces a sane DESIGN.md + shadcn CSS", () => {
        const { designMd, shadcnCss, previewData } = applyOverrides(
          ref, { darkMode: false }, "as-is",
        );

        expect(designMd).toMatch(/^# /m);
        expect(designMd.length).toBeGreaterThan(500);
        expect(designMd).toContain("## Iconography & SVG Guidelines");
        expect(designMd).toContain("## Document Policies");

        expect(shadcnCss).toContain("--primary:");
        expect(shadcnCss).toContain("--background:");
        expect(shadcnCss).toContain("--radius:");
        expect(shadcnCss).not.toContain(".dark {");

        expect(previewData.basedOn).toBe(ref.name);
      });

      it("customized mode swaps primary color into the body", () => {
        const { designMd } = applyOverrides(
          ref,
          { primaryColor: "#6366f1", darkMode: false },
          "customized",
        );
        expect(designMd).toContain("#6366f1");
        expect(designMd).toMatch(new RegExp(`based on ${ref.name}`, "i"));
      });

      it("dark mode adds .dark scope to shadcn CSS", () => {
        const { shadcnCss } = applyOverrides(ref, { darkMode: true }, "as-is");
        expect(shadcnCss).toContain(".dark {");
      });
    });
  }
});
