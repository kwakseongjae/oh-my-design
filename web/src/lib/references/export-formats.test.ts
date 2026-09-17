import { describe, expect, it } from "vitest";
import type { ReferenceAstNode, ReferenceAstTokens, ReferenceAstValue } from "./schema";
import { createCoreReferenceFormatArtifacts, createReferenceFormatArtifacts } from "./export-formats";
import type { CoreConsumerContract, CoreConsumerToken } from "./core-consumer-contract";

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

function coreContract(tokens: CoreConsumerToken[]): CoreConsumerContract {
  return {
    contractVersion: 1,
    authority: {
      status: "adopted",
      designMdSha256: "a".repeat(64),
      graphSha256: "b".repeat(64),
      provenanceSha256: "c".repeat(64),
      coverageSha256: "d".repeat(64),
      manifestSha256: "e".repeat(64),
      adoptionReceiptSha256: "f".repeat(64),
    },
    identity: { name: "Synthetic" },
    claims: [],
    explicitAbsences: [],
    tokens,
    tokenAbsences: [],
    fontRoles: [],
    quality: { status: "covered", groups: {}, checks: {} },
    components: { items: [], coverage: null, checkPass: null, harvestStatus: "unreported" },
  };
}

function coreToken(id: string, value: unknown, type = "color"): CoreConsumerToken {
  return {
    id,
    claimPath: `foundations.tokens.${id}`,
    type,
    value,
    sourceClass: "repository-fact",
    evidence: [`fixture://${id}`],
  };
}

function expectFinalDtcgTree(node: Record<string, unknown>): void {
  for (const [name, value] of Object.entries(node)) {
    if (name === "$extensions") continue;
    expect(name).not.toMatch(/[{}.]/);
    expect(value).toBeTypeOf("object");
    const record = value as Record<string, unknown>;
    if ("$value" in record) {
      expect(typeof record.$type).toBe("string");
      if (typeof record.$value === "string" && /^\{[^{}]+\}$/.test(record.$value)) continue;
      switch (record.$type) {
        case "color":
          expect(record.$value).toMatchObject({ colorSpace: "srgb", components: expect.any(Array) });
          expect((record.$value as { components: unknown[] }).components).toHaveLength(3);
          break;
        case "dimension":
          expect(record.$value).toMatchObject({ value: expect.any(Number), unit: expect.stringMatching(/^(px|rem)$/) });
          break;
        case "fontFamily":
          expect(typeof record.$value === "string" || (Array.isArray(record.$value) && record.$value.every((part) => typeof part === "string"))).toBe(true);
          break;
        case "fontWeight":
          expect(typeof record.$value === "number" || typeof record.$value === "string").toBe(true);
          break;
        case "number":
          expect(record.$value).toBeTypeOf("number");
          break;
        case "transition":
          expect(record.$value).toMatchObject({
            duration: { value: expect.any(Number), unit: expect.stringMatching(/^(ms|s)$/) },
            delay: { value: expect.any(Number), unit: expect.stringMatching(/^(ms|s)$/) },
            timingFunction: [expect.any(Number), expect.any(Number), expect.any(Number), expect.any(Number)],
          });
          break;
        default:
          throw new Error(`test validator does not support emitted type ${String(record.$type)}`);
      }
      continue;
    }
    expectFinalDtcgTree(record);
  }
}

describe("createCoreReferenceFormatArtifacts lossless transport", () => {
  it("attributes overridden bound values to the user while retaining original lineage", () => {
    const contract: CoreConsumerContract = {
      ...coreContract([coreToken("color.primary", "#123456")]),
      fontRoles: [{
        metadata: { id: "ui-sans", family: "Fixture Sans", weight: 400 },
        claimPath: "typography_assets.roles",
        sourceClass: "repository-fact",
        evidence: ["fixture://font-role"],
        runtimeAvailability: { status: "unverified", source: null },
      }],
    };
    const dtcg = JSON.parse(createCoreReferenceFormatArtifacts({
      referenceId: "synthetic",
      designMd: "# Synthetic\n",
      contract,
      overrides: { primaryColor: "#654321", fontFamily: "Inter", headingWeight: "650", borderRadius: "" },
    }).dtcg.content);
    const sourceTokens = dtcg.$extensions["oh-my-design"].sourceTokens;
    expect(sourceTokens["color.primary"]).toMatchObject({
      $value: "#654321",
      source: {
        claimPath: null,
        sourceClass: "user-authored-proposal",
        evidence: ["builder://override/primaryColor"],
        derived: true,
        original: {
          value: "#123456",
          claimPath: "foundations.tokens.color.primary",
          sourceClass: "repository-fact",
          evidence: ["fixture://color.primary"],
        },
      },
    });
    expect(sourceTokens["font.ui-sans"].source).toMatchObject({
      claimPath: null,
      sourceClass: "user-authored-proposal",
      evidence: ["builder://override/fontFamily"],
      original: { value: "Fixture Sans", claimPath: "typography_assets.roles" },
    });
    expect(sourceTokens["font-weight.ui-sans"].source).toMatchObject({
      evidence: ["builder://override/headingWeight"],
      original: { value: 400, claimPath: "typography_assets.roles" },
    });
  });

  it("preserves parent and child token values with source lineage", () => {
    const artifacts = createCoreReferenceFormatArtifacts({
      referenceId: "synthetic",
      designMd: "# Synthetic\n",
      contract: coreContract([
        coreToken("color.primary", "#123456"),
        coreToken("color.primary.hover", "#234567"),
      ]),
      overrides: { primaryColor: "", fontFamily: "", headingWeight: "", borderRadius: "" },
    });
    const dtcg = JSON.parse(artifacts.dtcg.content);
    expect(dtcg.color.primary.$root).toMatchObject({
      $type: "color",
      $value: { colorSpace: "srgb", components: [18 / 255, 52 / 255, 86 / 255], hex: "#123456" },
    });
    expect(dtcg.color.primary.hover).toMatchObject({
      $type: "color",
      $value: { colorSpace: "srgb", components: [35 / 255, 69 / 255, 103 / 255], hex: "#234567" },
    });
    expect(dtcg.$extensions["oh-my-design"].sourceTokens["color.primary.hover"]).toMatchObject({
      $value: "#234567",
      source: {
        claimPath: "foundations.tokens.color.primary.hover",
        sourceClass: "repository-fact",
        evidence: ["fixture://color.primary.hover"],
        derived: false,
      },
    });
  });

  it("uses deterministic distinct CSS names when token IDs slug-collide", () => {
    const artifacts = createCoreReferenceFormatArtifacts({
      referenceId: "synthetic",
      designMd: "# Synthetic\n",
      contract: coreContract([
        coreToken("color.foo-bar", "#123456"),
        coreToken("color.foo.bar", "#234567"),
      ]),
      overrides: { primaryColor: "", fontFamily: "", headingWeight: "", borderRadius: "" },
    });
    const names = [...artifacts.css.content.matchAll(/^\s*(--[^:]+):/gm)].map((match) => match[1]);
    expect(names).toHaveLength(2);
    expect(new Set(names).size).toBe(2);
    expect(artifacts.css.content).toContain("source: color.foo-bar");
    expect(artifacts.css.content).toContain("source: color.foo.bar");
    expect(artifacts.tailwind.content).toContain(names[0]);
    expect(artifacts.tailwind.content).toContain(names[1]);
  });

  it("exports explicit user choices when every adopted source slot is absent", () => {
    const contract = coreContract([]);
    const before = JSON.stringify(contract);
    const artifacts = createCoreReferenceFormatArtifacts({
      referenceId: "synthetic",
      designMd: "# Synthetic\n",
      contract,
      overrides: {
        primaryColor: "#654321",
        fontFamily: "Inter",
        headingWeight: "650",
        borderRadius: "12px",
      },
    });
    expect(artifacts.css.content).toContain("--color-primary: #654321;");
    expect(artifacts.css.content).toContain("--radius-default: 12px;");
    expect(artifacts.css.content).toContain("--font-ui: Inter;");
    expect(artifacts.css.content).toContain("--font-weight-ui: 650;");
    const dtcg = JSON.parse(artifacts.dtcg.content);
    expect(dtcg.color.primary.$value).toEqual({
      colorSpace: "srgb",
      components: [101 / 255, 67 / 255, 33 / 255],
      hex: "#654321",
    });
    expect(dtcg.radius.default.$value).toEqual({ value: 12, unit: "px" });
    expect(dtcg.font.ui.$value).toBe("Inter");
    expect(dtcg["font-weight"].ui.$value).toBe(650);
    expect(dtcg.$extensions["oh-my-design"].sourceTokens["color.primary"].source).toEqual({
      claimPath: null,
      sourceClass: "user-authored-proposal",
      evidence: ["builder://override/primaryColor"],
      derived: true,
    });
    expect(JSON.stringify(contract)).toBe(before);
  });

  it("emits final-format values, root groups, and rewritten aliases independent of input order", () => {
    const inputTokens = [
      coreToken("color.alias", "{color.primary}"),
      coreToken("color.primary.hover", "#234567"),
      coreToken("radius.default", "0.75rem", "dimension"),
      coreToken("line-height.body", 1.5, "number"),
      coreToken("font.ui", ["Fixture Sans", "sans-serif"], "fontFamily"),
      coreToken("font-weight.ui", "semi-bold", "fontWeight"),
      coreToken("color.primary", "#123456"),
    ];
    const render = (values: CoreConsumerToken[]) => JSON.parse(createCoreReferenceFormatArtifacts({
      referenceId: "synthetic",
      designMd: "# Synthetic\n",
      contract: coreContract(values),
      overrides: { primaryColor: "", fontFamily: "", headingWeight: "", borderRadius: "" },
    }).dtcg.content);
    const forward = render(inputTokens);
    const reverse = render([...inputTokens].reverse());
    for (const dtcg of [forward, reverse]) {
      expectFinalDtcgTree(dtcg);
      expect(dtcg.color.primary.$root.$type).toBe("color");
      expect(dtcg.color.primary.hover.$value.colorSpace).toBe("srgb");
      expect(dtcg.color.alias).toEqual({ $type: "color", $value: "{color.primary.$root}" });
      expect(dtcg.radius.default).toEqual({ $type: "dimension", $value: { value: 0.75, unit: "rem" } });
      expect(dtcg["line-height"].body).toEqual({ $type: "number", $value: 1.5 });
      expect(dtcg.font.ui.$value).toEqual(["Fixture Sans", "sans-serif"]);
      expect(dtcg["font-weight"].ui.$value).toBe("semi-bold");
    }
    expect(forward.color).toEqual(reverse.color);
  });

  it("keeps unsupported and malformed Core values only in the source ledger with reasons", () => {
    const artifacts = createCoreReferenceFormatArtifacts({
      referenceId: "synthetic",
      designMd: "# Synthetic\n",
      contract: coreContract([
        coreToken("motion.valid", {
          duration: { value: 180, unit: "ms" },
          delay: { value: 0, unit: "ms" },
          timingFunction: [0.2, 0, 0, 1],
        }, "transition"),
        coreToken("motion.invalid", { duration: "180ms", easing: [0.2, 0, 0, 1] }, "transition"),
        coreToken("copy.heading", "A headline", "custom-copy"),
      ]),
      overrides: { primaryColor: "", fontFamily: "", headingWeight: "", borderRadius: "" },
    });
    const dtcg = JSON.parse(artifacts.dtcg.content);
    expectFinalDtcgTree(dtcg);
    expect(dtcg.motion.valid.$value).toEqual({
      duration: { value: 180, unit: "ms" },
      delay: { value: 0, unit: "ms" },
      timingFunction: [0.2, 0, 0, 1],
    });
    expect(dtcg.motion.invalid).toBeUndefined();
    expect(dtcg.copy).toBeUndefined();
    expect(dtcg.$extensions["oh-my-design"].sourceTokens["motion.invalid"].$value.duration).toBe("180ms");
    expect(dtcg.$extensions["oh-my-design"].sourceTokens["copy.heading"].$value).toBe("A headline");
    expect(dtcg.$extensions["oh-my-design"].conversion).toMatchObject({
      version: "2025.10",
      unsupported: expect.arrayContaining([
        { sourceId: "motion.invalid", reason: "transition-value-invalid" },
        { sourceId: "copy.heading", reason: "unsupported-core-type:custom-copy" },
      ]),
    });
    expect(artifacts.dtcg.mime).toBe("application/design-tokens+json");
    expect(artifacts.dtcg.notice).toContain("2 source tokens");
  });

  it("omits aliases whose targets are unconverted, cyclic, mismatched, or nested in a composite", () => {
    const artifacts = createCoreReferenceFormatArtifacts({
      referenceId: "synthetic",
      designMd: "# Synthetic\n",
      contract: coreContract([
        coreToken("radius.unsupported", "2em", "dimension"),
        coreToken("radius.alias", "{radius.unsupported}", "dimension"),
        coreToken("radius.cycle-a", "{radius.cycle-b}", "dimension"),
        coreToken("radius.cycle-b", "{radius.cycle-a}", "dimension"),
        coreToken("number.base", 2, "number"),
        coreToken("radius.wrong-type", "{number.base}", "dimension"),
        coreToken("motion.nested", {
          duration: "{duration.fast}",
          delay: { value: 0, unit: "ms" },
          timingFunction: [0.2, 0, 0, 1],
        }, "transition"),
      ]),
      overrides: { primaryColor: "", fontFamily: "", headingWeight: "", borderRadius: "" },
    });
    const dtcg = JSON.parse(artifacts.dtcg.content);
    expect(dtcg.radius).toBeUndefined();
    expect(dtcg.motion).toBeUndefined();
    expect(dtcg.number.base.$value).toBe(2);
    expect(dtcg.$extensions["oh-my-design"].conversion.unsupported).toEqual(expect.arrayContaining([
      { sourceId: "radius.unsupported", reason: "dimension-requires-px-or-rem" },
      { sourceId: "radius.alias", reason: "alias-target-not-emitted:radius.unsupported" },
      { sourceId: "radius.cycle-a", reason: "cyclic-alias" },
      { sourceId: "radius.cycle-b", reason: "cyclic-alias" },
      { sourceId: "radius.wrong-type", reason: "alias-type-mismatch:number.base" },
      { sourceId: "motion.nested", reason: "transition-nested-alias-not-supported" },
    ]));
  });
});
