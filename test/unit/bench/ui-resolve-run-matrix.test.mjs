import { describe, expect, it } from "vitest";
import { mkdtempSync, mkdirSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import {
  directBrowserCommandCount,
  harnessDeliveryStopReason,
  firstProductWriteTransaction,
  lastAdvisoryToFirstProductWriteMs,
  preflightRuntimeEnvironment,
  preregisteredStopReason,
  replacementVerifierAuthorship,
  runArgsForCell,
} from "../../../benchmarks/ui-resolve-bench/scripts/run-prepared-matrix.mjs";

const cell = {
  runtime: "claude-code",
  model_id: "claude-opus-4-8",
  effort: "xhigh",
  timeout_seconds: 900,
};
const manifest = {
  variant: { kind: "agent-harness" },
  agents: {
    required_model: "opus",
    installed: [{ id: "omd-ux-writer" }, { id: "omd-ux-engineer" }],
  },
};
const validRun = {
  started_at: "2026-07-23T00:00:00.000Z",
  process: { exit_code: 0, child_exit_code: 0, timed_out: false },
  runtime: { model: "claude-opus-4-8" },
  output: {
    final_message_present: true,
    model_usage: [{ model: "claude-opus-4-8" }],
    infrastructure_tool_error_count: 0,
    sandbox_error_count: 0,
    sandbox_cwd_error_count: 0,
    agent_tool_error_count: 0,
    requested_agent_ids: ["omd-ux-engineer", "omd-ux-writer"],
    agent_calls: [
      { agent_id: "omd-ux-writer", requested_model: "opus" },
      { agent_id: "omd-ux-engineer", requested_model: "opus" },
    ],
    milestones: { first_builtin_product_write_ms: 313484 },
  },
  workspace: {
    changed_product_files: [{ path: "index.html", status: "modified" }],
  },
};

describe("UI-Resolve prepared matrix execution", () => {
  it("proves Cursor project-cache writeability before provider execution", () => {
    const temp = mkdtempSync(join(tmpdir(), "omd-cursor-runtime-preflight-"));
    const projects = join(temp, "projects");
    mkdirSync(projects);
    const result = preflightRuntimeEnvironment(
      { cells: [{ runtime: "cursor" }] },
      { cursorProjectsRoot: projects },
    );
    expect(result).toEqual({
      status: "complete",
      runtimes: ["cursor"],
      checks: [{
        runtime: "cursor",
        resource: "project-cache",
        status: "writable",
      }],
    });
  });

  it("fails before provider execution when Cursor project cache is unavailable", () => {
    const temp = mkdtempSync(join(tmpdir(), "omd-cursor-runtime-preflight-fail-"));
    expect(() => preflightRuntimeEnvironment(
      { cells: [{ runtime: "cursor" }] },
      { cursorProjectsRoot: join(temp, "missing", "projects") },
    )).toThrow("runtime-preflight-failure:cursor-project-cache-not-writable:ENOENT");
  });

  it("accepts an exact, complete harness attribution", () => {
    expect(preregisteredStopReason(cell, manifest, validRun)).toBeNull();
  });

  it("stops on specialist model or cardinality mismatch", () => {
    const run = structuredClone(validRun);
    run.output.agent_calls[0].requested_model = "sonnet";
    expect(preregisteredStopReason(cell, manifest, run)).toBe("specialist-model-or-cardinality-mismatch");
  });

  it("keeps recoverable verifier failures outside the stop class", () => {
    const run = structuredClone(validRun);
    run.output.recoverable_tool_error_count = 3;
    expect(preregisteredStopReason(cell, manifest, run)).toBeNull();
  });

  it("stops on timeout, sandbox failure, or observed parent-model mismatch", () => {
    const timeout = structuredClone(validRun);
    timeout.process.timed_out = true;
    expect(preregisteredStopReason(cell, manifest, timeout)).toBe("timeout");

    const sandbox = structuredClone(validRun);
    sandbox.output.sandbox_error_count = 1;
    expect(preregisteredStopReason(cell, manifest, sandbox)).toBe("sandbox-error");

    const model = structuredClone(validRun);
    model.output.model_usage = [{ model: "claude-sonnet-4-6" }];
    expect(preregisteredStopReason(cell, manifest, model)).toBe("observed-model-mismatch");
  });

  it("maps the frozen cell budget to the Claude runner", () => {
    expect(runArgsForCell(cell, "/tmp/u197/pricing-t1-harness")).toEqual([
      "--workspace", "/tmp/u197/pricing-t1-harness",
      "--model", "claude-opus-4-8",
      "--effort", "xhigh",
      "--timeout-ms", "900000",
    ]);
  });

  it("stops a harness on a late or missing first product write", () => {
    const gates = { first_product_write_ms_max: 450000, forbid_replacement_verifier: true };
    const late = structuredClone(validRun);
    late.output.milestones.first_builtin_product_write_ms = 450001;
    expect(harnessDeliveryStopReason(manifest, late, gates)).toBe("late-first-product-write");

    const missing = structuredClone(validRun);
    delete missing.output.milestones;
    expect(harnessDeliveryStopReason(manifest, missing, gates)).toBe("missing-first-product-write-milestone");
  });

  it("measures and gates the last advisory to first useful product edit", () => {
    const events = [
      {
        type: "assistant",
        timestamp: "2026-07-23T00:01:00.000Z",
        message: { content: [{ type: "tool_use", id: "writer", name: "Agent", input: {} }] },
      },
      {
        type: "assistant",
        timestamp: "2026-07-23T00:01:01.000Z",
        message: { content: [{ type: "tool_use", id: "engineer", name: "Agent", input: {} }] },
      },
      {
        type: "user",
        timestamp: "2026-07-23T00:03:30.000Z",
        message: { content: [{ type: "tool_result", tool_use_id: "writer", content: "done" }] },
      },
      {
        type: "user",
        timestamp: "2026-07-23T00:04:00.000Z",
        message: { content: [{ type: "tool_result", tool_use_id: "engineer", content: "done" }] },
      },
    ];
    const run = structuredClone(validRun);
    run.output.milestones.first_builtin_product_write_ms = 313484;
    expect(lastAdvisoryToFirstProductWriteMs(run, events)).toBe(73484);

    const gates = {
      first_product_write_ms_max: 450000,
      last_advisory_to_first_product_write_ms_max: 90000,
      forbid_replacement_verifier: true,
    };
    expect(harnessDeliveryStopReason(manifest, run, gates, events)).toBeNull();

    run.output.milestones.first_builtin_product_write_ms = 330001;
    expect(harnessDeliveryStopReason(manifest, run, gates, events))
      .toBe("late-advisory-to-first-product-write");

    run.output.milestones.first_builtin_product_write_ms = 200000;
    expect(harnessDeliveryStopReason(manifest, run, gates, events))
      .toBe("product-write-before-last-advisory");

    expect(harnessDeliveryStopReason(manifest, validRun, gates, []))
      .toBe("missing-advisory-to-first-write-milestone");
  });

  it("requires the first product transaction to be a real targeted Edit", () => {
    const edit = [{
      type: "assistant",
      message: {
        content: [{
          type: "tool_use",
          name: "Edit",
          input: {
            file_path: "/tmp/workspace/index.html",
            old_string: "min-height: 40px",
            new_string: "min-height: 44px",
          },
        }],
      },
    }];
    expect(firstProductWriteTransaction(validRun, edit)).toMatchObject({
      tool: "Edit",
      path: "index.html",
      no_op: false,
    });
    const gates = {
      first_product_write_ms_max: 450000,
      require_targeted_first_product_edit: true,
      forbid_replacement_verifier: true,
    };
    expect(harnessDeliveryStopReason(manifest, validRun, gates, edit)).toBeNull();

    const write = structuredClone(edit);
    write[0].message.content[0].name = "Write";
    expect(harnessDeliveryStopReason(manifest, validRun, gates, write))
      .toBe("non-targeted-first-product-write");

    const noOp = structuredClone(edit);
    noOp[0].message.content[0].input.new_string = "min-height: 40px";
    expect(harnessDeliveryStopReason(manifest, validRun, gates, noOp))
      .toBe("no-op-first-product-edit");

    expect(harnessDeliveryStopReason(manifest, validRun, gates, []))
      .toBe("missing-first-product-write-transaction");
  });

  it("detects an authored replacement verifier but allows a real-browser probe", () => {
    const shim = [{
      type: "assistant",
      message: {
        content: [{
          type: "tool_use",
          name: "Bash",
          input: { command: "cat > .t/verify.js <<'EOF'\nclass Element {}\nglobalThis.document = {}\nEOF" },
        }],
      },
    }];
    expect(replacementVerifierAuthorship(shim)).toMatchObject({
      detected: true,
      reason: "suspicious-verifier-path",
    });

    const probe = [{
      type: "assistant",
      message: {
        content: [{
          type: "tool_use",
          name: "Bash",
          input: { command: "python3 - probe.html <<'EOF'\nopen('probe.html','w').write('<script>document.querySelectorAll(\"button\")</script>')\nEOF" },
        }],
      },
    }];
    expect(replacementVerifierAuthorship(probe)).toEqual({ detected: false });

    const realBrowserHtml = [{
      type: "assistant",
      message: {
        content: [{
          type: "tool_use",
          name: "Bash",
          input: { command: "python3 - verify.html <<'EOF'\nopen('verify.html','w').write('<script>document.querySelectorAll(\"button\")</script>')\nEOF\n/Applications/Google\\ Chrome.app/Contents/MacOS/Google\\ Chrome --headless verify.html" },
        }],
      },
    }];
    expect(replacementVerifierAuthorship(realBrowserHtml)).toEqual({ detected: false });
  });

  it("counts actual headless browser invocations without counting discovery", () => {
    const discovery = {
      type: "assistant",
      message: {
        content: [{
          type: "tool_use",
          name: "Bash",
          input: {
            command: 'ls "/Applications/Google Chrome.app/Contents/MacOS/" 2>/dev/null; which chromium',
          },
        }],
      },
    };
    const oneBrowser = {
      type: "assistant",
      message: {
        content: [{
          type: "tool_use",
          name: "Bash",
          input: {
            command: '"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --dump-dom index.html',
          },
        }],
      },
    };
    const twoBrowsersOneCall = {
      type: "assistant",
      message: {
        content: [{
          type: "tool_use",
          name: "Bash",
          input: {
            command: "chromium --headless --dump-dom index.html; google-chrome-stable --headless=new --dump-dom index.html",
          },
        }],
      },
    };
    expect(directBrowserCommandCount([discovery])).toBe(0);
    expect(directBrowserCommandCount([discovery, oneBrowser])).toBe(1);
    expect(directBrowserCommandCount([twoBrowsersOneCall])).toBe(2);
  });

  it("fails closed when the direct-browser command budget is exceeded", () => {
    const localeManifest = { variant: { kind: "locale-skill-stack" } };
    const gates = {
      variant_kinds: ["locale-skill-stack"],
      first_product_write_ms_max: 450000,
      forbid_replacement_verifier: true,
      max_direct_browser_commands: 1,
    };
    const run = {
      output: { milestones: { first_builtin_product_write_ms: 313841 } },
      workspace: { changed_product_files: [{ path: "index.html" }] },
    };
    const invocation = (suffix) => ({
      type: "assistant",
      message: {
        content: [{
          type: "tool_use",
          name: "Bash",
          input: {
            command: `"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --dump-dom index.html ${suffix}`,
          },
        }],
      },
    });
    expect(harnessDeliveryStopReason(localeManifest, run, gates, [])).toBeNull();
    expect(harnessDeliveryStopReason(localeManifest, run, gates, [invocation("2>/dev/null")])).toBeNull();
    expect(harnessDeliveryStopReason(
      localeManifest,
      run,
      gates,
      [invocation("2>/dev/null"), invocation("2>&1")],
    )).toBe("direct-browser-command-budget-exceeded");

    const zeroGate = { ...gates, max_direct_browser_commands: 0 };
    expect(harnessDeliveryStopReason(localeManifest, run, zeroGate, [])).toBeNull();
    expect(harnessDeliveryStopReason(
      localeManifest,
      run,
      zeroGate,
      [invocation("2>/dev/null")],
    )).toBe("direct-browser-command-budget-exceeded");
  });

  it("fails closed when replacement-verifier authorship is observed", () => {
    const gates = { first_product_write_ms_max: 450000, forbid_replacement_verifier: true };
    const events = [{
      type: "assistant",
      message: {
        content: [{
          type: "tool_use",
          name: "Write",
          input: { file_path: ".t/dom-shim.mjs", content: "class Document {}" },
        }],
      },
    }];
    expect(harnessDeliveryStopReason(manifest, validRun, gates, events)).toBe("replacement-verifier-authored");
  });

  it("applies delivery authority to an explicitly named non-agent skill stack", () => {
    const localeManifest = { variant: { kind: "locale-skill-stack" } };
    const gates = {
      variant_kinds: ["locale-skill-stack"],
      first_product_write_ms_max: 450000,
      forbid_replacement_verifier: true,
    };
    const run = {
      output: { milestones: { first_builtin_product_write_ms: 339542 } },
      workspace: { changed_product_files: [{ path: "index.html" }] },
    };
    const productWrite = {
      type: "assistant",
      message: {
        content: [{
          type: "tool_use",
          name: "Write",
          input: { file_path: "index.html", content: "<main>done</main>" },
        }],
      },
    };
    expect(harnessDeliveryStopReason(localeManifest, run, gates, [productWrite])).toBeNull();
    expect(harnessDeliveryStopReason(localeManifest, run, gates, [
      productWrite,
      {
        type: "assistant",
        message: {
          content: [{
            type: "tool_use",
            name: "Write",
            input: { file_path: ".t/verify.mjs", content: "export const ok = true" },
          }],
        },
      },
    ])).toBe("replacement-verifier-authored");
  });
});
