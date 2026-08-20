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

  it.runIf(Boolean(chromePath) && browserE2EEnabled)(
    "keeps the stable starter at the existing 85 point maximum",
    () => {
      const workspace = mkdtempSync(join(tmpdir(), "ui-resolve-stable-entry-"));
      try {
        cpSync(starterRoot, workspace, { recursive: true });
        mkdirSync(join(workspace, ".benchmark"), { recursive: true });
        writeFileSync(join(workspace, ".benchmark", "manifest.json"), JSON.stringify({
          schema_version: "test",
          task: { id: taskId },
          variant: { id: "stable-entry-control" },
        }, null, 2));

        execFileSync(process.execPath, [evaluatorPath, "--workspace", workspace], {
          cwd: repoRoot,
          env: { ...process.env, CHROME_PATH: chromePath },
          encoding: "utf8",
          maxBuffer: 10 * 1024 * 1024,
          timeout: 60_000,
        });

        const score = JSON.parse(readFileSync(join(workspace, ".benchmark", "score.json"), "utf8"));
        expect(score).toMatchObject({
          status: { automated_gate_pass: true },
          points: { deterministic_total: 85, deterministic_max: 85 },
          checks: {
            contract: { entry_identity_exact: true, console_clean: true },
            entry_identity_details: {
              observations_complete: true,
              final_url_exact: true,
              no_post_initial_navigation_requests: true,
              no_post_initial_navigation_commits: true,
              behavior_execution_stable: true,
            },
          },
        });
      } finally {
        rmSync(workspace, { recursive: true, force: true });
      }
    },
    60_000,
  );

  it.runIf(Boolean(chromePath) && browserE2EEnabled)(
    "scores invalid-script native navigation as a product failure instead of crashing",
    () => {
      const workspace = mkdtempSync(join(tmpdir(), "ui-resolve-invalid-script-navigation-"));
      try {
        cpSync(starterRoot, workspace, { recursive: true });
        const entryPath = join(workspace, "index.html");
        const original = readFileSync(entryPath, "utf8");
        const mutant = original.replace(
          'prices.forEach((price) => { price.textContent = `$${price.dataset[period]}`; });',
          'prices.forEach((price) => { price.textContent = \\`$${price.dataset[period]}\\`; });',
        );
        expect(mutant).not.toBe(original);
        writeFileSync(entryPath, mutant, "utf8");

        mkdirSync(join(workspace, ".benchmark"), { recursive: true });
        writeFileSync(join(workspace, ".benchmark", "manifest.json"), JSON.stringify({
          schema_version: "test",
          task: { id: taskId },
          variant: { id: "invalid-script-navigation-mutant" },
        }, null, 2));

        execFileSync(process.execPath, [evaluatorPath, "--workspace", workspace], {
          cwd: repoRoot,
          env: { ...process.env, CHROME_PATH: chromePath },
          encoding: "utf8",
          maxBuffer: 10 * 1024 * 1024,
          timeout: 60_000,
        });

        const score = JSON.parse(readFileSync(join(workspace, ".benchmark", "score.json"), "utf8"));
        const desktop = score.observations.viewports.find((viewport) => viewport.name === "desktop");
        expect(score).toMatchObject({
          schema_version: "0.7",
          methodology_epoch: "ui-resolve-objective-2026q3-entry-identity-v1",
          status: { automated_gate_pass: false },
          points: { deterministic_max: 85 },
          checks: {
            observation_presence: { semantics: true, design: true },
            contract: { entry_identity_exact: false, console_clean: false },
            states: { billing: false, faq: false, form: false },
          },
        });
        expect(score.checks.entry_identity_details).toMatchObject({
          observations_complete: true,
          no_post_initial_navigation_requests: false,
        });
        expect(score.observations.evidence_ledger.sources_scanned).toBeGreaterThan(0);
        expect(desktop.page_errors).toEqual(expect.arrayContaining([
          expect.objectContaining({ name: "SyntaxError", message: expect.stringMatching(/invalid|unexpected token/i) }),
        ]));
        expect(desktop.entry_identity.post_initial_main_frame_navigation_requests).toEqual(expect.arrayContaining([
          expect.objectContaining({ method: "GET", resource_type: "document" }),
        ]));
      } finally {
        rmSync(workspace, { recursive: true, force: true });
      }
    },
    60_000,
  );
});
