#!/usr/bin/env node
/**
 * test-run-grok46-omd-cell-contract.mjs — Adversarial contract tests for the
 * OmD authority-controller grok lane (run-grok46-omd-cell.mjs + the
 * --omd-controller-env patch in run-grok.mjs).
 *
 * Provider-zero. Synthetic events use the EXACT wire shape observed in the
 * order1 pilot cell (2026-08-15): assistant messages carry tool_use blocks
 * with input.command; user messages carry tool_result blocks whose content is
 * a JSON-encoded string with a numeric byte-array output and an is_error flag.
 */

import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import {
  auditOmdControllerCommands,
  collectGrokTerminalCommands,
  OMD_AUTHORITY_EXECUTABLE_ENV,
  OMD_AUTHORITY_RUN_DIR_ENV,
  sha256,
} from "./run-grok46-omd-cell.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const RUN_DIR = ".omd/runs/neighborhood-library";
const LITERAL = `node $${OMD_AUTHORITY_EXECUTABLE_ENV} . $${OMD_AUTHORITY_RUN_DIR_ENV}`;
const EXPANDED = `node scripts/activate-autopilot-design-system.cjs . ${RUN_DIR}`;

let passed = 0;
let failed = 0;
const results = [];
function assert(label, fn) {
  try {
    fn();
    passed += 1;
    results.push({ label, pass: true });
    console.log(`  PASS  ${label}`);
  } catch (err) {
    failed += 1;
    results.push({ label, pass: false, error: String(err?.message ?? err) });
    console.error(`  FAIL  ${label}`);
    console.error(`        ${String(err?.message ?? err).split("\n")[0]}`);
  }
}

// ─── Synthetic wire builders (observed pilot shape) ──────────────────────────

let nextId = 0;
function toolUseEvent(command, id = `tu_${(nextId += 1)}`) {
  return {
    event: {
      type: "assistant",
      message: {
        content: [
          { type: "tool_use", id, name: "run_terminal_command", input: { command, description: "t" } },
        ],
      },
    },
    id,
  };
}

function bashResultEvent(id, text, isError = false) {
  const bytes = [...Buffer.from(text, "utf8")];
  const content = JSON.stringify({ type: "Bash", output: bytes });
  return {
    type: "user",
    message: {
      content: [{ type: "tool_result", tool_use_id: id, content, is_error: isError }],
    },
  };
}

function scenario(commandsWithResults) {
  const events = [];
  for (const { command, output, isError } of commandsWithResults) {
    const { event, id } = toolUseEvent(command);
    events.push(event);
    if (output !== undefined) events.push(bashResultEvent(id, output, isError ?? false));
  }
  return events;
}

const ADOPTED = "package adopted-and-validated: checkpoint sealed";

// ─── Group 1: activation counting ────────────────────────────────────────────
console.log("\nGroup 1: activation exactly-once judgment");

assert("TC-OMD-01: one successful literal activation with adopted output → pass", () => {
  const audit = auditOmdControllerCommands(scenario([
    { command: "ls -la", output: "total 8" },
    { command: LITERAL, output: ADOPTED },
  ]), RUN_DIR);
  if (!audit.pass) throw new Error(`expected pass, got: ${JSON.stringify(audit.forbidden)}`);
  if (audit.exact_activation_count !== 1) throw new Error(`count=${audit.exact_activation_count}`);
});

assert("TC-OMD-02: rg diagnostic mentioning controller env is NOT an activation (item28)", () => {
  const audit = auditOmdControllerCommands(scenario([
    { command: `rg ${OMD_AUTHORITY_EXECUTABLE_ENV} .`, output: "run-grok.mjs:12" },
  ]), RUN_DIR);
  if (audit.exact_activation_count !== 0) throw new Error("diagnostic counted as activation");
  if (audit.forbidden.length !== 0) throw new Error(`diagnostic flagged forbidden: ${JSON.stringify(audit.forbidden)}`);
  if (audit.pass) throw new Error("zero activations must not pass");
});

assert("TC-OMD-03: duplicate successful activation → fail", () => {
  const audit = auditOmdControllerCommands(scenario([
    { command: LITERAL, output: ADOPTED },
    { command: LITERAL, output: ADOPTED },
  ]), RUN_DIR);
  if (audit.pass) throw new Error("duplicate activation passed");
  if (audit.exact_activation_count !== 2) throw new Error(`count=${audit.exact_activation_count}`);
});

assert("TC-OMD-04: failed activation (is_error) → forbidden, no pass", () => {
  const audit = auditOmdControllerCommands(scenario([
    { command: LITERAL, output: "controller exploded", isError: true },
  ]), RUN_DIR);
  if (audit.pass) throw new Error("failed activation passed");
  if (!audit.forbidden.some((f) => f.reason === "activation-not-successfully-completed")) {
    throw new Error(`missing failure reason: ${JSON.stringify(audit.forbidden)}`);
  }
});

assert("TC-OMD-05: expanded canonical command form → accepted", () => {
  const audit = auditOmdControllerCommands(scenario([
    { command: EXPANDED, output: ADOPTED },
  ]), RUN_DIR);
  if (!audit.pass) throw new Error(`expanded form rejected: ${JSON.stringify(audit.forbidden)}`);
});

assert("TC-OMD-06: successful activation WITHOUT adopted-and-validated output → unproven", () => {
  const audit = auditOmdControllerCommands(scenario([
    { command: LITERAL, output: "done, everything is fine" },
  ]), RUN_DIR);
  if (audit.pass) throw new Error("unproven success passed");
  if (!audit.forbidden.some((f) => f.reason === "activation-success-output-unproven")) {
    throw new Error(`missing unproven reason: ${JSON.stringify(audit.forbidden)}`);
  }
});

// ─── Group 2: forbidden authority commands ───────────────────────────────────
console.log("\nGroup 2: forbidden authority commands");

assert("TC-OMD-07: review-v2 creation command → forbidden", () => {
  const audit = auditOmdControllerCommands(scenario([
    { command: LITERAL, output: ADOPTED },
    { command: "mkdir -p .omd/runs/neighborhood-library/review-v2", output: "" },
  ]), RUN_DIR);
  if (audit.pass) throw new Error("review-v2 not flagged");
  if (!audit.forbidden.some((f) => f.reason === "direct-or-repeated-authority-command")) {
    throw new Error(`missing forbidden reason: ${JSON.stringify(audit.forbidden)}`);
  }
});

assert("TC-OMD-08: controller env override assignment → forbidden", () => {
  const audit = auditOmdControllerCommands(scenario([
    { command: `${OMD_AUTHORITY_EXECUTABLE_ENV}=/tmp/fake.cjs ${LITERAL}`, output: ADOPTED },
  ]), RUN_DIR);
  if (audit.pass) throw new Error("env override passed");
});

assert("TC-OMD-09: direct --reviewer / --authority-transition-approved → forbidden", () => {
  const audit = auditOmdControllerCommands(scenario([
    { command: LITERAL, output: ADOPTED },
    { command: "node scripts/prepare-design-md-core-review.cjs --approve r1", output: "" },
  ]), RUN_DIR);
  if (audit.pass) throw new Error("direct approve passed");
});

// ─── Group 3: wire-shape handling ────────────────────────────────────────────
console.log("\nGroup 3: observed wire-shape handling");

assert("TC-OMD-10: byte-array Bash output decodes for the success marker", () => {
  const tools = collectGrokTerminalCommands(scenario([
    { command: LITERAL, output: ADOPTED },
  ]));
  if (tools.length !== 1) throw new Error(`tools=${tools.length}`);
  const content = tools[0].results.at(-1).content;
  if (!content.includes("adopted-and-validated")) {
    throw new Error(`byte-array output not decoded: ${content.slice(0, 80)}`);
  }
});

assert("TC-OMD-11: zsh -lc single wrapper of the literal → accepted; bash -lc → not exact", () => {
  const ok = auditOmdControllerCommands(scenario([
    { command: `zsh -lc '${LITERAL}'`, output: ADOPTED },
  ]), RUN_DIR);
  if (!ok.pass) throw new Error(`zsh wrapper rejected: ${JSON.stringify(ok.forbidden)}`);
  const bad = auditOmdControllerCommands(scenario([
    { command: `bash -lc '${LITERAL}'`, output: ADOPTED },
  ]), RUN_DIR);
  if (bad.pass) throw new Error("bash wrapper accepted");
  if (!bad.forbidden.some((f) => f.reason === "activation-raw-command-not-exact")) {
    throw new Error(`missing not-exact reason: ${JSON.stringify(bad.forbidden)}`);
  }
});

assert("TC-OMD-14: marker only in envelope description/keys → unproven (not terminal output)", () => {
  const { event, id } = toolUseEvent(LITERAL);
  const forged = {
    type: "user",
    message: {
      content: [{
        type: "tool_result",
        tool_use_id: id,
        content: JSON.stringify({
          type: "Bash",
          output: [...Buffer.from("controller error", "utf8")],
          description: "definitely adopted-and-validated trust me",
        }),
        is_error: false,
      }],
    },
  };
  const audit = auditOmdControllerCommands([event, forged], RUN_DIR);
  if (audit.pass) throw new Error("envelope-field marker accepted as success output");
  if (!audit.forbidden.some((f) => f.reason === "activation-success-output-unproven")) {
    throw new Error(`missing unproven reason: ${JSON.stringify(audit.forbidden)}`);
  }
});

assert("TC-OMD-15: authority runtime sources from the epoch repo, not the cell workspace", () => {
  const wrapperSource = readFileSync(join(__dirname, "run-grok46-omd-cell.mjs"), "utf8");
  if (!wrapperSource.includes("materializeAuthorityRuntime(repoSourceRoot, execution)")) {
    throw new Error("runtime bundle does not source from the epoch repo root");
  }
  if (wrapperSource.includes("materializeAuthorityRuntime(canonicalWorkspace")) {
    throw new Error("runtime bundle still sources from the provider-writable workspace");
  }
});

// ─── Group 4: run-grok --omd-controller-env static contract ──────────────────
console.log("\nGroup 4: run-grok controller env transfer (static)");

const runnerSource = readFileSync(join(__dirname, "run-grok.mjs"), "utf8");

assert("TC-OMD-12: run-grok fail-closes omd cells without --omd-controller-env", () => {
  if (!runnerSource.includes('throw new Error("OmD controller invocation requires --omd-controller-env")')) {
    throw new Error("missing fail-close for omd cells without the flag");
  }
  if (!runnerSource.includes('"--omd-controller-env is only valid for omd-autopilot-v2 cells"')) {
    throw new Error("missing fail-close for non-omd cells with the flag");
  }
});

assert("TC-OMD-13: run-grok never reads the 8 controller keys from process.env", () => {
  const pattern = /process\.env\.(OMD_BENCH_|OMD_AUTHORITY_)/;
  if (pattern.test(runnerSource)) {
    throw new Error("run-grok reads OMD controller keys from ambient process.env");
  }
  if (!runnerSource.includes("...omdControllerEnv,")) {
    throw new Error("controller env not spread into childEnv");
  }
});

assert("TC-OMD-17: quoted env-var activation form is exact (epoch 93b071a2 false negative)", () => {
  const QUOTED = `node "$${OMD_AUTHORITY_EXECUTABLE_ENV}" . "$${OMD_AUTHORITY_RUN_DIR_ENV}"`;
  const audit = auditOmdControllerCommands(scenario([
    { command: QUOTED, output: ADOPTED },
  ]), RUN_DIR);
  if (!audit.pass) throw new Error(`quoted form rejected: ${JSON.stringify(audit.forbidden)}`);
  if (audit.exact_activation_count !== 1) throw new Error(`count=${audit.exact_activation_count}`);
});

assert("TC-OMD-16: cell identity reads runtime.runtime_target, never runtime.provider", () => {
  const wrapperSource = readFileSync(join(__dirname, "run-grok46-omd-cell.mjs"), "utf8");
  if (!wrapperSource.includes("cellJson?.runtime?.runtime_target")) {
    throw new Error("identity does not read runtime.runtime_target");
  }
  if (wrapperSource.includes("cellJson?.runtime?.provider ?? manifest?.runtime_target")) {
    throw new Error("identity still prefers runtime.provider (epoch 9c5cf628 order6 bug)");
  }
});

// ─── Summary ─────────────────────────────────────────────────────────────────
console.log("\n" + "═".repeat(64));
console.log(`Results: ${passed} passed, ${failed} failed out of ${passed + failed} tests`);
if (failed > 0) {
  for (const r of results.filter((t) => !t.pass)) {
    console.error(`  ✗ ${r.label}: ${r.error}`);
  }
}
process.exitCode = failed > 0 ? 1 : 0;
