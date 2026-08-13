import { execFileSync } from "node:child_process";
import { mkdtempSync, mkdirSync, readFileSync, symlinkSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { describe, expect, it } from "vitest";
import {
  assertExactCommittedBytes,
  omdRuntimePaths,
  validateOmdRuntimeClosure,
  validateMaterializedOutput,
} from "../../../benchmarks/ui-resolve-bench/scripts/materialize-luna-max-wow-preview.mjs";

const root = process.cwd();
const artifactRoot = process.env.OMD_LUNA_MAX_MATERIALIZED_ROOT;

function copiedArtifact() {
  const target = mkdtempSync(join(tmpdir(), "omd-luna-max-materializer-test-"));
  execFileSync("cp", ["-R", artifactRoot, join(target, "artifact")]);
  return join(target, "artifact");
}

describe("Luna Max Wow Preview execution materializer", () => {
  it.skipIf(!artifactRoot)("read-backs all 48 cells, all six arms, and six immutable ineligible slots", () => {
    const { manifest, status } = validateMaterializedOutput(resolve(artifactRoot));
    expect(manifest.prepared_cells).toBe(48);
    expect(manifest.ineligible_unexecuted_slots).toBe(6);
    expect(new Set(manifest.cells.map((cell) => cell.variant_id))).toEqual(new Set([
      "model-only",
      "anthropic-frontend-design",
      "impeccable-prompt-only",
      "ui-ux-pro-max",
      "taste-eligible-scope-only",
      "omd-autopilot-v2",
    ]));
    expect(status.provider_execution_allowed).toBe(false);
    expect(manifest.evaluator_authority.source_only_not_copied_to_execution_root).toBe(true);
    expect(manifest.evaluator_authority.evaluation_runtime_receipt.status).toBe("unresolved-required-before-scoring");
    for (const cell of manifest.cells) {
      const metadata = JSON.parse(readFileSync(join(resolve(artifactRoot), "prepared-cells", cell.id, ".benchmark/cell.json"), "utf8"));
      expect(Object.keys(metadata.task).sort()).toEqual(["id", "prompt_bytes", "prompt_sha256", "same_source_facts_sha256"]);
    }
  });

  it.skipIf(!artifactRoot)("fails closed when a prepared prompt is tampered", () => {
    const copy = copiedArtifact();
    const manifest = JSON.parse(readFileSync(join(copy, "MATERIALIZATION.json"), "utf8"));
    writeFileSync(join(copy, "prepared-cells", manifest.cells[0].id, ".benchmark/prompt.txt"), "tampered");
    expect(() => validateMaterializedOutput(copy)).toThrow(/prepared matrix tree drift/);
  });

  it.skipIf(!artifactRoot)("fails closed when a symlink is injected into a prepared workspace", () => {
    const copy = copiedArtifact();
    const manifest = JSON.parse(readFileSync(join(copy, "MATERIALIZATION.json"), "utf8"));
    const cell = join(copy, "prepared-cells", manifest.cells[0].id);
    mkdirSync(join(cell, "nested"), { recursive: false });
    symlinkSync("../index.html", join(cell, "nested/escape"));
    expect(() => validateMaterializedOutput(copy)).toThrow(/symlink is not allowed/);
  });

  it("fails closed when current source bytes differ from committed authority", () => {
    const committed = Buffer.from("exact");
    expect(assertExactCommittedBytes("source", committed, committed)).toEqual(expect.objectContaining({
      path: "source",
      bytes: 5,
    }));
    expect(() => assertExactCommittedBytes("source", Buffer.from("dirty"), committed)).toThrow(/differs from commit/);
  });

  it("pins the activation wording and keeps task facts separate", () => {
    const source = readFileSync(resolve(root, "benchmarks/ui-resolve-bench/scripts/materialize-luna-max-wow-preview.mjs"), "utf8");
    expect(source).toContain("Use the installed $omd-autopilot skill for this task.");
    expect(source).toContain("activation_prefix: armReceipt.activation_prefix");
    expect(source).toContain("invocation_prompt_sha256");
    expect(source).not.toContain("targeted_mutants_evaluator_only");
  });

  it("closes every local helper dependency and installed Core v2 schema", () => {
    expect(validateOmdRuntimeClosure()).toBe(true);
    expect(omdRuntimePaths).toEqual(expect.arrayContaining([
      "skills/omd-autopilot",
      "scripts/design-md-core-conformance.cjs",
      "scripts/migrate-design-md-core.cjs",
      "scripts/rebind-design-md-core-migration.cjs",
      "spec/schema",
    ]));
  });
});
