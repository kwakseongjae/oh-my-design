import { describe, expect, it } from "vitest";
import type { ReferenceAstNode, ReferenceAstTokens, ReferenceAstValue } from "./schema";
import { createReferenceFormatArtifacts } from "./export-formats";

function value<T extends string | number>(
  input: T,
  path: string,
  confidence: "high" | "low" = "high",
): ReferenceAstValue<T> {
  return { value: input, claimPath: path, origin: "frontmatter", confidence };
}

const tokens: ReferenceAstTokens = {
  hasStructuredTokens: true,
  source: "reconciled",
  extractedAt: "2026-07-12",
  note: null,
  componentsHarvested: true,
  colors: {
    primary: value("#3182f6", "tokens.colors.primary"),
    guessed: value("#ff00ff", "tokens.colors.guessed", "low"),
  },
  typography: {
    families: { ui: value("Toss Product Sans", "tokens.typography.family.ui") },
    tiers: {
      body: {
        size: value(16, "tokens.typography.body.size"),
        weight: value(400, "tokens.typography.body.weight"),
      } as ReferenceAstNode,
    },
  },
  spacing: { control: value(12, "tokens.spacing.control") },
  rounded: { button: value("8px", "tokens.rounded.button") },
  shadows: {},
  components: {
    button: { height: value(48, "tokens.components.button.height") } as ReferenceAstNode,
  },
  claimPaths: [],
};

describe("createReferenceFormatArtifacts", () => {
  const artifacts = createReferenceFormatArtifacts({ referenceId: "toss", designMd: "# Toss\n", tokens });

  it("serializes only canonical high-confidence values", () => {
    expect(artifacts.css.content).toContain("--color-primary: #3182f6");
    expect(artifacts.css.content).toContain("--type-body-size: 16px");
    expect(artifacts.css.content).not.toContain("#ff00ff");
    expect(artifacts.css.content).not.toContain("system-ui");
    expect(artifacts.css.content).not.toContain("destructive");
  });

  it("emits Tailwind v4 namespaces without synthesizing missing groups", () => {
    expect(artifacts.tailwind.content).toContain("@theme {");
    expect(artifacts.tailwind.content).toContain("--font-ui: Toss Product Sans");
    expect(artifacts.tailwind.content).toContain("--spacing-control: 12px");
    expect(artifacts.tailwind.content).not.toContain("--shadow-");
  });

  it("keeps verified component structure only in the OmD DTCG extension", () => {
    const parsed = JSON.parse(artifacts.dtcg.content);
    expect(parsed.color.primary).toEqual({ $type: "color", $value: "#3182f6" });
    expect(parsed.typography.tiers.body.size).toEqual({ $type: "dimension", $value: "16px" });
    expect(parsed.typography.tiers.body.weight).toEqual({ $type: "fontWeight", $value: 400 });
    expect(parsed.$extensions["oh-my-design"].components.button.height).toBe(48);
    expect(parsed.color.guessed).toBeUndefined();
  });

  it("preserves the customized DESIGN.md artifact verbatim", () => {
    expect(artifacts.designmd.content).toBe("# Toss\n");
    expect(artifacts.designmd.filename).toBe("DESIGN.md");
  });

  it("applies explicit builder choices only to their canonical claim paths", () => {
    const customized = createReferenceFormatArtifacts({
      referenceId: "toss",
      designMd: "# Toss\n",
      tokens,
      claimOverrides: {
        "tokens.colors.primary": "#ff0000",
        "tokens.typography.body.weight": 600,
      },
    });
    expect(customized.css.content).toContain("--color-primary: #ff0000");
    expect(customized.css.content).toContain("--type-body-weight: 600");
    expect(customized.css.content).not.toContain("#3182f6");
  });
});
