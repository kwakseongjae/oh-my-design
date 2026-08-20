import { mkdirSync, symlinkSync, writeFileSync } from "node:fs";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { collectRunRecords, findRunRecordPaths } from "../../../benchmarks/ui-resolve-bench/scripts/collect-run-records.mjs";

const roots = [];

afterEach(async () => {
  await Promise.all(roots.splice(0).map((root) => rm(root, { recursive: true, force: true })));
});

function writeRecord(root, workspace, runId) {
  const directory = join(root, workspace, ".benchmark");
  mkdirSync(directory, { recursive: true });
  writeFileSync(join(directory, "run-record.json"), `${JSON.stringify({ run_id: runId })}\n`);
}

describe("UI-Resolve run record collector", () => {
  it("finds nested records and returns stable run-id order", async () => {
    const root = await mkdtemp(join(tmpdir(), "ui-resolve-collect-"));
    roots.push(root);
    writeRecord(root, "z-workspace", "z-run");
    writeRecord(root, "a-workspace", "a-run");

    expect(findRunRecordPaths(root)).toHaveLength(2);
    expect(collectRunRecords(root).map((record) => record.run_id)).toEqual(["a-run", "z-run"]);
  });

  it("rejects duplicate run ids", async () => {
    const root = await mkdtemp(join(tmpdir(), "ui-resolve-collect-"));
    roots.push(root);
    writeRecord(root, "one", "same-run");
    writeRecord(root, "two", "same-run");

    expect(() => collectRunRecords(root)).toThrow("duplicate run ids");
  });

  it("ignores broken runtime symlinks while traversing workspaces", async () => {
    const root = await mkdtemp(join(tmpdir(), "ui-resolve-collect-"));
    roots.push(root);
    writeRecord(root, "workspace", "kept-run");
    const scratch = join(root, "workspace", ".t");
    mkdirSync(scratch, { recursive: true });
    symlinkSync(join(root, "missing-task-output"), join(scratch, "expired.output"));

    expect(collectRunRecords(root).map((record) => record.run_id)).toEqual(["kept-run"]);
  });
});
