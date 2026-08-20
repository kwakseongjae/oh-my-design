import { createHash } from "node:crypto";
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { auditDownloadableRunPackage } from "../../../benchmarks/ui-resolve-bench/scripts/audit-downloadable-run-package.mjs";

const repoRoot = resolve(import.meta.dirname, "../../..");
const contract = JSON.parse(readFileSync(resolve(repoRoot, "benchmarks/ui-resolve-bench/downloadable-run-package-contract.json"), "utf8"));

function sha256(value) {
  return createHash("sha256").update(value).digest("hex");
}

function createArtifact(root, runId, role) {
  const path = `${runId}/${role}.json`;
  mkdirSync(join(root, runId), { recursive: true });
  const content = JSON.stringify({ run_id: runId, role });
  writeFileSync(join(root, path), content);
  return { path, sha256: sha256(content) };
}

function createRun(root, { runId, taskId = "hidden-001", systemId = "omd", trial, status = "complete", representative = false }) {
  const roles = [...contract.base_artifact_roles, ...contract.status_artifact_roles[status]];
  return {
    run_id: runId,
    task_id: taskId,
    system_id: systemId,
    trial_index: trial,
    run_status: status,
    representative,
    artifacts: Object.fromEntries(roles.map((role) => [role, createArtifact(root, runId, role)])),
  };
}

function packageIndex(runs) {
  return {
    schema_version: "0.1",
    package_id: "verified-fixture",
    suite_version: "ui-resolve-v0.2",
    objective_methodology_epoch: "ui-resolve-objective-2026q3-passive-scroll-v1",
    runs,
  };
}

describe("downloadable Verified run package audit", () => {
  it("accepts ten hash-verified trials with one representative complete artifact", () => {
    const root = mkdtempSync(join(tmpdir(), "omd-downloadable-package-"));
    const runs = Array.from({ length: 10 }, (_, index) => createRun(root, {
      runId: `run-${index + 1}`,
      trial: index + 1,
      status: index === 8 ? "failed" : index === 9 ? "timed_out" : "complete",
      representative: index === 0,
    }));
    const report = auditDownloadableRunPackage(packageIndex(runs), root, contract);
    expect(report).toMatchObject({
      run_count: 10,
      group_count: 1,
      artifact_complete: true,
      verified_scale_ready: true,
      decision: "DOWNLOADABLE_VERIFIED_SCALE_PACKAGE_READY",
      observed_statuses: ["complete", "failed", "timed_out"],
    });
  });

  it("keeps an artifact-complete partial package ineligible before ten trials", () => {
    const root = mkdtempSync(join(tmpdir(), "omd-downloadable-partial-"));
    const runs = [createRun(root, { runId: "run-1", trial: 1, representative: true })];
    const report = auditDownloadableRunPackage(packageIndex(runs), root, contract);
    expect(report.artifact_complete).toBe(true);
    expect(report.verified_scale_ready).toBe(false);
    expect(report.decision).toBe("BLOCK_VERIFIED_SCALE_PACKAGE_CLAIM");
  });

  it("rejects missing, tampered, duplicate, or misleading artifacts", () => {
    const root = mkdtempSync(join(tmpdir(), "omd-downloadable-invalid-"));
    const valid = createRun(root, { runId: "run-1", trial: 1 });
    const missing = structuredClone(valid);
    delete missing.artifacts.score;
    expect(() => auditDownloadableRunPackage(packageIndex([missing]), root, contract)).toThrow(/missing artifact roles/);

    const tampered = structuredClone(valid);
    writeFileSync(join(root, tampered.artifacts.manifest.path), "tampered");
    expect(() => auditDownloadableRunPackage(packageIndex([tampered]), root, contract)).toThrow(/hash mismatch/);

    const duplicateRoot = mkdtempSync(join(tmpdir(), "omd-downloadable-duplicate-"));
    const duplicateA = createRun(duplicateRoot, { runId: "run-a", trial: 1 });
    const duplicateB = createRun(duplicateRoot, { runId: "run-b", trial: 1 });
    expect(() => auditDownloadableRunPackage(packageIndex([duplicateA, duplicateB]), duplicateRoot, contract)).toThrow(/duplicate/);

    const failedRepresentative = createRun(root, { runId: "run-3", trial: 3, status: "failed", representative: true });
    expect(() => auditDownloadableRunPackage(packageIndex([failedRepresentative]), root, contract)).toThrow(/representative artifact must be a complete run/);
  });
});
