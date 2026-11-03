import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { REGISTRY } from "@/data/registry.generated";
import { REFERENCE_QUALITY, REFERENCE_QUALITY_BY_ID } from "@/data/reference-quality.generated";
import { readReferenceSource } from "../../../scripts/lib/reference-source.mjs";
import { compareReferences, getComponentStates, getDesignMd, getTokens, sectionsOf, summaryFor } from "./catalog";
import { CATALOG, TOKEN_GROUPS } from "./contracts";
import { MAX_RESPONSE_BYTES, toolResult } from "./response";

it("uses exactly the build-reference-ast hash, never a hash of reserialized v3 markdown", () => {
  const sha256 = (text: string) => createHash("sha256").update(text).digest("hex");
  const corpusHash = sha256(REGISTRY.map(({ id }) => `${id}\0${sha256(readReferenceSource(join(process.cwd(), "references", id)).markdown)}`).join("\n"));
  expect(CATALOG.reference_ast).toBe(corpusHash.slice(0, 12));
  // The newest verification date, not the wall clock, so one catalog always gives one answer.
  expect(CATALOG.generated).toBe(REGISTRY.map((r) => String(r.verified ?? "")).filter((d) => /^\d{4}-\d{2}-\d{2}$/.test(d)).sort().at(-1));
});

it.each(["toss", "sixt"])("every emitted %s token value has joined claim evidence", (id) => {
  for (const group of TOKEN_GROUPS) {
    const values = getTokens({ id, groups: [group] }).groups[group] ?? [];
    for (const value of values) {
      expect(value.evidence.status, value.path).toBeUndefined();
      expect(value.evidence.source?.url, value.path).toMatch(/^https?:/);
      expect(value.evidence.surface?.url, value.path).toMatch(/^https?:/);
      expect(value.evidence.method, value.path).toBeTruthy();
      expect(value.evidence.captured, value.path).toBeTruthy();
    }
  }
});

it("counts only evidenced states, omits missing sections and keeps siblings of absent groups", () => {
  const states = getComponentStates({ id: "toss" });
  const button = states.components.find((component) => component.id === "tds-button")!;
  expect(button.states.pressed?.[0].value).toContain("scale(0.96)");
  expect(button.not_measured).toContain("hover");
  expect(button.states).not.toHaveProperty("hover");
  const section = getDesignMd({ id: "skyscanner", sections: ["Colors", "Governance"] });
  expect(section.absent).toContain("sections.Governance");
  expect(section.markdown).toMatch(/^## Colors\n/);
});

it("slices actual headings without cutting at code samples", () => {
  const text = "---\nname: Example\n---\n## Colors\n\n```md\n## Components\n```\n\n## Typography\n\nBody\n";
  const sections = sectionsOf(text);
  expect(sections.map((section) => section.title)).toEqual(["Colors", "Typography"]);
  expect(sections[0].markdown).toBe(text.slice(text.indexOf("## Colors"), text.indexOf("## Typography")));
});

it("matches Korean detail routing and omits invented Hangul names for every reference", () => {
  for (const entry of REGISTRY) {
    const summary = summaryFor(entry.id);
    expect(!!summary.urls.page_ko).toBe(entry.country === "KR" || REFERENCE_QUALITY_BY_ID[entry.id].status === "verified_v2");
    expect(summary.display_name_ko).toBe(/[가-힣ᄀ-ᇿ㄰-㆏]/u.test(entry.displayName) ? entry.displayName : undefined);
  }
});

// Re-verification moves legacy references to verified (mercury did on 2026-11-02), so the legacy example is
// picked from the data: one that still carries preserved prose shadow values and a primary colour.
const LEGACY = REFERENCE_QUALITY.filter((entry) => entry.status === "legacy_snapshot").map((entry) => entry.id).find((id) => {
  const json = JSON.parse(readFileSync(join(process.cwd(), "references", id, "reference.json"), "utf8"));
  const prose: { path: string }[] = json.migration?.prose ?? [];
  return prose.some(({ path }) => path.startsWith("shadow.")) && getTokens({ id, groups: ["colors"] }).groups.colors?.some((v) => v.path === "colors.primary");
})!;

it("compares original values in aligned cells, without scores or fabricated missing values", () => {
  const result = compareReferences({ ids: ["toss", "sixt", LEGACY], aspects: ["colors", "radius", "motion"] });
  const row = result.rows.find((row) => row.path === "colors.primary")!;
  expect(row.values.toss.value).toBe("#3182f6");
  expect(row.values[LEGACY].trust).toBe("unverified");
  expect(row.values).not.toHaveProperty("sixt");
  expect(row.absent).toContain("sixt");
  expect(result.absent).toContain("sixt.colors.primary");
  expect(JSON.stringify(result)).not.toContain('"score"');
});

it("reports untrusted preserved shadow values without inferring them from prose", () => {
  expect(LEGACY).toBeDefined();
  const data = getTokens({ id: LEGACY, groups: ["shadow"] });
  const original = JSON.parse(readFileSync(join(process.cwd(), "references", LEGACY, "reference.json"), "utf8"));
  expect(data.groups.shadow.map(({ path, value }) => ({ path, value }))).toEqual(original.migration.prose.filter(({ path }: { path: string }) => path.startsWith("shadow.")));
  expect(data.groups.shadow.every((value) => value.trust === "unverified" && value.evidence.status === "unsourced")).toBe(true);
});

describe("256 KB cap", () => {
  it("measures UTF-8 bytes and both JSON representations; never truncates canonical markdown", () => {
    const within = toolResult({ markdown: "x".repeat(100_000) });
    expect(within.isError).not.toBe(true);
    const oversized = toolResult({ markdown: "가".repeat(50_000) });
    expect(oversized.isError).toBe(true);
    expect(oversized.structuredContent).toMatchObject({ error: { code: "response_too_large" }, catalog: CATALOG });
    expect(Buffer.byteLength(JSON.stringify(oversized))).toBeLessThan(MAX_RESPONSE_BYTES);
  });
});
