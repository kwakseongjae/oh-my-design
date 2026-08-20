#!/usr/bin/env node
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { parseArgs, readJson } from "./_lib.mjs";

const REQUIRED_CONDITIONS = ["desktop-1440", "narrow-390", "mobile-320"];

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function positiveInteger(value, label) {
  assert(Number.isInteger(value) && value > 0, `${label} must be a positive integer`);
}

export function validateLocalBrowserEvidence(report) {
  assert(report?.schema_version === "0.1", "local browser evidence schema_version must be 0.1");
  assert(report.status === "LOCAL_IN_APP_BROWSER_VALIDATED", "local browser evidence status is invalid");
  assert(report.provider_calls === 0, "local browser evidence must not spend provider calls");
  assert(report.model_exposures === 0, "local browser evidence must not create model exposures");
  assert(report.browser?.surface === "codex-in-app-browser", "local browser evidence must use Codex in-app browser");
  assert(report.browser.authentication_required === false, "local localhost evidence must not require authentication");
  assert(report.browser.external_browser_used === false, "local browser evidence must not use an external browser");
  assert(report.task?.portable_task_tree_sha256?.length === 64, "task portable hash must be sha256");

  assert(Array.isArray(report.observations), "local browser evidence observations are required");
  const conditions = new Map();
  for (const [index, observation] of report.observations.entries()) {
    const label = `observations[${index}]`;
    assert(typeof observation.condition === "string" && observation.condition, `${label}.condition is required`);
    assert(!conditions.has(observation.condition), `${label}.condition must be unique`);
    positiveInteger(observation.requested_viewport?.width, `${label}.requested_viewport.width`);
    positiveInteger(observation.requested_viewport?.height, `${label}.requested_viewport.height`);
    positiveInteger(observation.actual_css_viewport_width, `${label}.actual_css_viewport_width`);
    positiveInteger(observation.document_scroll_width, `${label}.document_scroll_width`);
    positiveInteger(observation.decision_width, `${label}.decision_width`);
    positiveInteger(observation.target_text_lines, `${label}.target_text_lines`);
    positiveInteger(observation.action_text_lines, `${label}.action_text_lines`);
    assert(
      observation.document_scroll_width >= observation.actual_css_viewport_width,
      `${label}.document_scroll_width cannot be smaller than the CSS viewport`,
    );
    assert(
      observation.horizontal_overflow
        === (observation.document_scroll_width > observation.actual_css_viewport_width),
      `${label}.horizontal_overflow disagrees with measured widths`,
    );
    if (observation.requested_viewport.width !== observation.actual_css_viewport_width) {
      assert(
        observation.acceptance_use?.includes("not an actual-200-percent substitute"),
        `${label} must fail closed when the requested viewport is clamped`,
      );
    }
    conditions.set(observation.condition, observation);
  }

  for (const condition of REQUIRED_CONDITIONS) {
    assert(conditions.has(condition), `missing required local browser condition: ${condition}`);
  }
  assert(conditions.get("desktop-1440").horizontal_overflow === false, "desktop baseline must remain overflow-free");
  assert(conditions.get("narrow-390").horizontal_overflow === true, "narrow-390 must preserve the observed baseline failure");
  assert(conditions.get("mobile-320").horizontal_overflow === true, "mobile-320 must preserve the observed baseline failure");
  assert(report.interaction_check?.result === "pass", "local interaction check must pass");
  assert(report.cross_check?.agreement === true, "local browser and deterministic evaluator must agree");
  assert(
    report.claim_boundary?.includes("does not measure candidate transfer"),
    "local evidence must not be promoted as model transfer",
  );

  return {
    valid: true,
    validation_id: report.validation_id,
    provider_calls: 0,
    model_exposures: 0,
    required_conditions: REQUIRED_CONDITIONS,
    observed_conditions: [...conditions.keys()],
    responsive_baseline: "red-confirmed",
    transfer_claim_allowed: false,
  };
}

async function main() {
  const args = parseArgs();
  const reportPath = args.get("report") ? resolve(String(args.get("report"))) : null;
  if (!reportPath) {
    console.error("usage: validate-local-browser-evidence.mjs --report <LOCAL-BROWSER-VALIDATION.json>");
    process.exitCode = 2;
    return;
  }
  const result = validateLocalBrowserEvidence(readJson(reportPath));
  console.log(JSON.stringify(result, null, 2));
}

if (resolve(process.argv[1] ?? "") === fileURLToPath(import.meta.url)) {
  await main();
}
