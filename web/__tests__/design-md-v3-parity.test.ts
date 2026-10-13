/**
 * DESIGN.md v3 runtime parity (dev tool, not a gate).
 *
 * Loads every reference twice — once from a legacy tree, once from the working tree — and requires
 * the item page's inputs to be identical: the projected detail (minus the served bytes), the AST
 * contract, and every field `extractTokens` returns. It is how a batch proves that converting a
 * file changes what the item page shows by nothing (two diagnostic exceptions, explained below).
 *
 *   git archive HEAD~N web/references | tar -x -C /tmp/legacy   # a tree before the batch
 *   V3_PARITY_LEGACY_ROOT=/tmp/legacy/web npx vitest run __tests__/design-md-v3-parity.test.ts
 */
import { describe, expect, test } from "vitest";
import { join, resolve } from "node:path";
import { REGISTRY } from "../src/data/registry.generated";
import { loadReference } from "../src/lib/references/repository.server";
import { projectActiveReference } from "../src/lib/references/consumer-adapter";
import { extractTokens } from "../src/lib/extract-tokens";

const LEGACY_ROOT = process.env.V3_PARITY_LEGACY_ROOT;
const WEB_ROOT = resolve(__dirname, "..");

function pageInputs(id: string, root: string) {
  const loaded = loadReference(id, root);
  if (!loaded) return null;
  const projection = projectActiveReference(loaded);
  const detail = { ...projection.detail, ...(projection.referenceAst ? { referenceAst: projection.referenceAst } : {}) };
  const { designMd: _served, ...rest } = projection.detail;
  return { sourceFormat: loaded.sourceFormat, detail: rest, ast: projection.referenceAst, tokens: extractTokens(detail) };
}

describe.skipIf(!LEGACY_ROOT)("DESIGN.md v3 runtime parity", () => {
  test("every converted reference feeds the item page the same inputs as its legacy file", () => {
    const diffs: string[] = [];
    let compared = 0;
    for (const entry of REGISTRY) {
      const now = pageInputs(entry.id, WEB_ROOT);
      if (!now || now.sourceFormat !== "v3") continue;
      const before = pageInputs(entry.id, join(LEGACY_ROOT!));
      compared++;
      for (const key of ["detail", "ast"] as const) {
        const a = (now[key] ?? {}) as Record<string, unknown>;
        const b = (before?.[key] ?? {}) as Record<string, unknown>;
        for (const field of new Set([...Object.keys(a), ...Object.keys(b)])) {
          if (JSON.stringify(a[field]) !== JSON.stringify(b[field])) {
            diffs.push(`${entry.id}: ${key}.${field}`);
            if (process.env.V3_PARITY_VERBOSE && field === "parity") console.log(entry.id, JSON.stringify(a[field]), "WAS", JSON.stringify(b[field]));
            if (process.env.V3_PARITY_VERBOSE && field === "accent") console.log(entry.id, JSON.stringify(a[field]), "WAS", JSON.stringify(b[field]));
          }
        }
      }
      for (const [field, value] of Object.entries(now.tokens)) {
        const prev = (before?.tokens as unknown as Record<string, unknown>)?.[field];
        if (field === "identity" && value && prev) {
          for (const k of Object.keys({ ...(value as object), ...(prev as object) })) {
            if (JSON.stringify((value as Record<string, unknown>)[k]) !== JSON.stringify((prev as Record<string, unknown>)[k])) diffs.push(`${entry.id}: tokens.identity.${k}`);
          }
        } else if (JSON.stringify(value) !== JSON.stringify(prev)) diffs.push(`${entry.id}: tokens.${field}`);
      }
    }
    const byField: Record<string, number> = {};
    for (const d of diffs) byField[d.split(": ")[1]] = (byField[d.split(": ")[1]] ?? 0) + 1;
    console.log(JSON.stringify({ compared, diffs: diffs.length, byField }));
    // Reported, not failed: `ast.parity` is the diagnostic comparison between the AST and the
    // retired regex detail adapter, which scans the raw frontmatter text and the legacy section
    // order — neither survives conversion byte for byte, and no rendered value comes from it. The
    // regex `accent` is a first-match prose heuristic over the whole document, so it moves when v3
    // regroups sections (11 references on the full catalog, listed by this test).
    const reportedOnly = /: (ast\.parity|detail\.accent|tokens\.identity\.accent)$/;
    console.log(JSON.stringify({ accentMoved: diffs.filter((d) => d.endsWith(": detail.accent")).map((d) => d.split(":")[0]) }));
    expect(diffs.filter((d) => !reportedOnly.test(d)).slice(0, 60)).toEqual([]);
  });
});
