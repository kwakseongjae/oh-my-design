import { execFileSync } from "node:child_process";
import {
  cpSync,
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { describe, expect, it } from "vitest";

const repoRoot = resolve(import.meta.dirname, "../../..");
const evaluatorPath = join(repoRoot, "benchmarks/ui-resolve-bench/scripts/evaluate-run.mjs");
const taskId = "pricing-conversion-v0.1";
const starterRoot = join(repoRoot, "benchmarks/ui-resolve-bench/tasks", taskId, "starter");
const chromeCandidates = [
  process.env.CHROME_PATH,
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Chromium.app/Contents/MacOS/Chromium",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].filter(Boolean);
const chromePath = chromeCandidates.find(existsSync);
const browserE2EEnabled = process.env.RUN_UI_RESOLVE_BROWSER_E2E === "1";

describe("UI-Resolve evaluator fail-closed end to end", () => {
  it.runIf(Boolean(chromePath) && browserE2EEnabled)(
    "writes a failed score instead of crashing when a protected form node is missing",
    () => {
      const workspace = mkdtempSync(join(tmpdir(), "ui-resolve-missing-form-"));
      try {
        cpSync(starterRoot, workspace, { recursive: true });
        const entryPath = join(workspace, "index.html");
        const original = readFileSync(entryPath, "utf8");
        const mutant = original.replace(
          '<p id="form-status" data-bench="form-status"',
          '<p id="form-status" data-bench="removed-form-status"',
        );
        expect(mutant).not.toBe(original);
        writeFileSync(entryPath, mutant, "utf8");

        mkdirSync(join(workspace, ".benchmark"), { recursive: true });
        writeFileSync(join(workspace, ".benchmark", "manifest.json"), JSON.stringify({
          schema_version: "test",
          task: { id: taskId },
          variant: { id: "missing-form-status-mutant" },
        }, null, 2));

        execFileSync(process.execPath, [evaluatorPath, "--workspace", workspace], {
          cwd: repoRoot,
          env: { ...process.env, CHROME_PATH: chromePath },
          encoding: "utf8",
          maxBuffer: 10 * 1024 * 1024,
          timeout: 60_000,
        });

        const score = JSON.parse(readFileSync(join(workspace, ".benchmark", "score.json"), "utf8"));
        expect(score.status.automated_gate_pass).toBe(false);
        expect(score.checks.observation_presence.behavior).toBe(true);
        expect(score.checks.states.form).toBe(false);
        expect(score.checks.state_details.form.required_elements_present).toBe(false);
        expect(score.observations.behavior.form.presence).toEqual({
          form: true,
          email: true,
          status: false,
        });
      } finally {
        rmSync(workspace, { recursive: true, force: true });
      }
    },
    60_000,
  );
});
