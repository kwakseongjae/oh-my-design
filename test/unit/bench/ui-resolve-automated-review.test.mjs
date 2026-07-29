import {
  existsSync,
  mkdtempSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { prepareAutomatedReviewRound } from "../../../benchmarks/ui-resolve-bench/scripts/prepare-automated-review-round.mjs";
import { runAutomatedReviewRound } from "../../../benchmarks/ui-resolve-bench/scripts/run-automated-review-round.mjs";

const repoRoot = resolve(import.meta.dirname, "../../..");
const task = JSON.parse(readFileSync(
  join(repoRoot, "benchmarks/ui-resolve-bench/tasks/onboarding-setup-v0.1/task.json"),
  "utf8",
));

function writeJson(path, value) {
  mkdirSync(resolve(path, ".."), { recursive: true });
  writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

function fixture() {
  const root = mkdtempSync(join(tmpdir(), "ui-resolve-auto-review-"));
  const cells = [];
  for (const trial of [1, 2]) {
    for (const arm of ["slate", "ember"]) {
      const id = `onboarding-t${trial}-${arm}`;
      const workspace = join(root, "runs", id);
      const benchmark = join(workspace, ".benchmark");
      mkdirSync(join(benchmark, "screenshots"), { recursive: true });
      writeJson(join(benchmark, "manifest.json"), {
        task: {
          id: task.id,
          version: task.version,
          core_prompt_sha256: "same-prompt",
        },
        variant: {
          id: `omd-portable-${arm}`,
          label: "oh-my-design apply skill",
        },
      });
      writeFileSync(join(benchmark, "screenshots", "desktop.png"), `anonymous desktop ${trial}`);
      writeFileSync(join(benchmark, "screenshots", "mobile.png"), `anonymous mobile ${trial}`);
      cells.push({
        id,
        status: "complete",
        workspace,
        validity: "valid",
        ui_resolved: true,
        evidence_and_unknown_pass: true,
      });
    }
  }
  const state = join(root, "execution-state.json");
  writeJson(state, {
    experiment_id: "fixture-experiment",
    status: "complete",
    scheduled_cells: 4,
    completed_cells: 4,
    cells,
  });
  const salt = join(root, "salt.txt");
  writeFileSync(salt, "private-automated-review-test-salt");
  return { root, cells, state, salt };
}

function prepare(data) {
  const packets = join(data.root, "public-packets");
  const reveals = join(data.root, "private-reveals");
  const manifest = join(data.root, "private", "manifest.json");
  const document = prepareAutomatedReviewRound({
    executionStatePath: data.state,
    judges: ["judge-alpha", "judge-beta", "judge-gamma"],
    saltFile: data.salt,
    packetsOut: packets,
    revealsOut: reveals,
    manifestOut: manifest,
    methodologyEpoch: "auto-review-fixture-v1",
  });
  return { packets, reveals, manifest, document };
}

function textTree(root) {
  const output = [];
  const walk = (current) => {
    for (const name of readdirSync(current).sort()) {
      const path = join(current, name);
      if (statSync(path).isDirectory()) walk(path);
      else output.push(readFileSync(path, "utf8"));
    }
  };
  walk(root);
  return output.join("\n");
}

describe("UI-Resolve automated blind review preparation", () => {
  it("creates exact trial pairs, isolated reversals, and identity-free packets", () => {
    const data = fixture();
    const round = prepare(data);
    expect(round.document.expected).toEqual({
      reviewers: 3,
      exact_pairs: 2,
      review_units: 6,
      invocations: 12,
    });
    expect(round.document.units).toHaveLength(6);
    expect(new Set(round.document.units.map((unit) => unit.review_unit_id)).size).toBe(6);
    expect(round.document.units.every((unit) => unit.invocations.length === 2)).toBe(true);
    expect(round.document.units.every((unit) => (
      unit.invocations[1].reversal_of === unit.invocations[0].assignment_id
    ))).toBe(true);
    expect(readdirSync(round.reveals).filter((name) => name.endsWith(".json"))).toHaveLength(6);

    const publicText = textTree(round.packets);
    expect(publicText).not.toContain("slate");
    expect(publicText).not.toContain("ember");
    expect(publicText).not.toContain("omd-portable");
    expect(publicText).not.toContain("automated_gate_pass");
    expect(publicText).not.toContain("reversal_of");
    expect(publicText).toContain(task.review_brief);
  });

  it("fails incomplete states and missing screenshots before publishing outputs", () => {
    const incomplete = fixture();
    const state = JSON.parse(readFileSync(incomplete.state, "utf8"));
    state.status = "frozen";
    writeJson(incomplete.state, state);
    expect(() => prepare(incomplete)).toThrow(/execution state must be complete/i);

    const missing = fixture();
    writeFileSync(join(missing.cells[0].workspace, ".benchmark", "screenshots", "desktop.png"), "");
    const missingState = JSON.parse(readFileSync(missing.state, "utf8"));
    missingState.cells[0].workspace = join(missing.root, "missing-workspace");
    writeJson(missing.state, missingState);
    expect(() => prepare(missing)).toThrow(/ENOENT|manifest/i);
    expect(existsSync(join(missing.root, "public-packets"))).toBe(false);
  });

  it("requires unique judges and refuses overwrite", () => {
    const duplicateJudges = fixture();
    expect(() => prepareAutomatedReviewRound({
      executionStatePath: duplicateJudges.state,
      judges: ["judge-alpha", "judge-alpha"],
      saltFile: duplicateJudges.salt,
      packetsOut: join(duplicateJudges.root, "packets"),
      revealsOut: join(duplicateJudges.root, "reveals"),
      manifestOut: join(duplicateJudges.root, "manifest.json"),
      methodologyEpoch: "auto-review-fixture-v1",
    })).toThrow(/unique automated judges/i);

    const existing = fixture();
    const round = prepare(existing);
    expect(() => prepareAutomatedReviewRound({
      executionStatePath: existing.state,
      judges: ["judge-alpha", "judge-beta"],
      saltFile: existing.salt,
      packetsOut: round.packets,
      revealsOut: join(existing.root, "other-reveals"),
      manifestOut: join(existing.root, "other-manifest.json"),
      methodologyEpoch: "auto-review-fixture-v1",
    })).toThrow(/packets output already exists/i);
  });
});

function fakeInvocation(response) {
  return async ({ packetRoot }) => {
    const packet = JSON.parse(readFileSync(join(packetRoot, "packet.json"), "utf8"));
    const document = typeof response === "function" ? response(packet) : response;
    return {
      stdout: `${JSON.stringify({ model: "Cursor Grok 4.5 High" })}\n${JSON.stringify({
        type: "result",
        result: typeof document === "string" ? document : JSON.stringify(document ?? {
          assignment_id: packet.assignment_id,
          axes: {
            functionality: "a",
            usability: "a",
            fidelity: "a",
            ship_preference: "a",
          },
          reason: "A exposes the clearer hierarchy and next action.",
        }),
      })}\n`,
      stderr: "",
      exit_code: 0,
      signal: null,
      timed_out: false,
      spawn_error: null,
      wall_ms: 123,
    };
  };
}

async function runOne(round, invoke = fakeInvocation()) {
  return runAutomatedReviewRound({
    manifestPath: round.manifest,
    packetsRoot: round.packets,
    resultsRoot: join(round.documentRoot, "results"),
    statePath: join(round.documentRoot, "state.json"),
    model: "cursor-grok-4.5-high",
    timeoutMs: 300_000,
    pacingMs: 30_000,
    maxNewInvocations: 1,
    invoke,
    preflight: () => ({ pass: true, project_root: "fixture" }),
    now: () => 100_000,
    wait: async () => {},
  });
}

function executableRound() {
  const data = fixture();
  const prepared = prepare(data);
  return { ...prepared, documentRoot: data.root };
}

describe("UI-Resolve automated blind review runner", () => {
  it("executes one invocation at a time and assembles a unit only after its isolated reversal", async () => {
    const round = executableRound();
    const first = await runOne(round);
    expect(first).toMatchObject({ status: "prepared", completed_invocations: 1 });
    const judgmentPath = join(round.documentRoot, "results", "judgments", `${first.invocations[0].review_unit_id}.json`);
    expect(existsSync(judgmentPath)).toBe(false);

    const second = await runOne(round);
    expect(second.completed_invocations).toBe(2);
    expect(existsSync(judgmentPath)).toBe(true);
    const judgment = JSON.parse(readFileSync(judgmentPath, "utf8"));
    expect(judgment.judgments).toHaveLength(2);
    expect(new Set(judgment.judgments.map((item) => item.assignment_id)).size).toBe(2);
  });

  it("freezes strict invalid JSON without repair and refuses resume", async () => {
    const round = executableRound();
    const state = await runOne(round, fakeInvocation("```json\n{}\n```"));
    expect(state.status).toBe("frozen");
    expect(state.completed_invocations).toBe(0);
    expect(state.stop.reason).toBe("strict-response-invalid");
    await expect(runOne(round)).rejects.toThrow(/root is frozen/i);
  });

  it("freezes display-name drift and provider process failure", async () => {
    const drift = executableRound();
    const driftInvoke = async ({ packetRoot }) => {
      const base = await fakeInvocation()({ packetRoot });
      base.stdout = base.stdout.replace("Cursor Grok 4.5 High", "Unexpected Model");
      return base;
    };
    expect((await runOne(drift, driftInvoke)).stop.reason).toBe("runtime-display-label-mismatch");

    const process = executableRound();
    const processInvoke = async () => ({
      stdout: "",
      stderr: "quota",
      exit_code: 1,
      signal: null,
      timed_out: false,
      spawn_error: null,
      wall_ms: 50,
    });
    expect((await runOne(process, processInvoke)).stop.reason).toBe("provider-process-failure");
  });
});
