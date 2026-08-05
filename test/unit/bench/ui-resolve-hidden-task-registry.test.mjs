import { mkdtempSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { buildHiddenTaskRegistry } from "../../../benchmarks/ui-resolve-bench/scripts/build-hidden-task-registry.mjs";

const repoRoot = resolve(import.meta.dirname, "../../..");
const contract = JSON.parse(readFileSync(resolve(repoRoot, "benchmarks/ui-resolve-bench/hidden-task-coverage-contract.json"), "utf8"));

function writePrivateTask(root, id, locale, prompt) {
  const taskRoot = join(root, id);
  mkdirSync(join(taskRoot, "starter"), { recursive: true });
  const task = {
    id,
    track: "creation",
    locale,
    benchmark_visibility: "hidden",
    independent_audit: "eligible",
    journey_oracle: {},
    viewports: [{ name: "mobile" }, { name: "narrow-320" }, { name: "css-zoom-surrogate-200" }],
    semantic_oracle: {},
    protected_unknown_patterns: ["unknown"],
    screenshot_oracle: {},
    open_brief_oracle: {},
  };
  writeFileSync(join(taskRoot, "task.json"), JSON.stringify(task));
  writeFileSync(join(taskRoot, "PROMPT.md"), prompt);
  writeFileSync(join(taskRoot, "starter/DESIGN.md"), "# Private design contract");
  writeFileSync(join(taskRoot, "starter/index.html"), "<!doctype html><title>Private starter</title>");
}

describe("hidden task public commitment registry", () => {
  it("publishes stable commitments without task names, prompts, or source paths", () => {
    const sourceRoot = mkdtempSync(join(tmpdir(), "omd-private-tasks-"));
    writePrivateTask(sourceRoot, "confidential-japanese-brief", "ja", "A confidential Japanese product brief");
    writePrivateTask(sourceRoot, "confidential-korean-brief", "ko", "A confidential Korean product brief");
    const registry = buildHiddenTaskRegistry({ sourceRoot, repoRoot, contract });
    const rendered = JSON.stringify(registry);
    expect(registry.task_count).toBe(2);
    expect(registry.tasks.map((task) => task.task_alias)).toEqual(["hidden-001", "hidden-002"]);
    expect(registry.tasks.every((task) => /^[a-f0-9]{64}$/.test(task.bundle_sha256))).toBe(true);
    expect(rendered).not.toContain("confidential-japanese-brief");
    expect(rendered).not.toContain("confidential-korean-brief");
    expect(rendered).not.toContain("A confidential");
    expect(rendered).not.toContain(sourceRoot);
  });

  it("rejects a private-source claim for task content stored in the public repository", () => {
    expect(() => buildHiddenTaskRegistry({
      sourceRoot: resolve(repoRoot, "benchmarks/ui-resolve-bench/tasks"),
      repoRoot,
      contract,
    })).toThrow(/outside the public repository/);
  });

  it("rejects incomplete or non-audit-eligible private bundles", () => {
    const sourceRoot = mkdtempSync(join(tmpdir(), "omd-private-tasks-invalid-"));
    const taskRoot = join(sourceRoot, "incomplete");
    mkdirSync(taskRoot);
    writeFileSync(join(taskRoot, "task.json"), JSON.stringify({
      id: "incomplete",
      locale: "en",
      benchmark_visibility: "hidden",
      independent_audit: "eligible",
    }));
    expect(() => buildHiddenTaskRegistry({ sourceRoot, repoRoot, contract })).toThrow(/bundle is incomplete/);
  });
});
