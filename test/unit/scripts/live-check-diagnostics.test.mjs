import assert from "node:assert/strict";
import { test } from "vitest";
import {
  classifyLiveChecker,
  diagnosticRuleMap,
  mergeReceiptAndLiveStatus,
  summarizeLiveDiagnostics,
} from "../../../test-v2/tools/lib/live-check-diagnostics.mjs";
import { summarizeQualityGate } from "../../../test-v2/tools/lib/quality-gate-policy.mjs";

const landing = (checks, extra = {}) => JSON.stringify([{
  file: "/tmp/render.html",
  fails: checks.filter((check) => check.status === "FAIL").length,
  warns: checks.filter((check) => check.status === "WARN").length,
  checks,
  measurements: {},
  ...extra,
}]);

const classifyLanding = (checks, extra = {}) => classifyLiveChecker({
  checker: "landing",
  exitCode: checks.some((check) => check.status === "FAIL") ? 1 : 0,
  stdout: landing(checks, extra),
});

const emptyRenderViewports = () => ({
  "1440x900": { problems: [], info: [] },
  "390x844": { problems: [], info: [] },
});

const emptyContrastViewports = () => ({
  "1440x900": { text: [], rings: [] },
  "390x844": { text: [], rings: [] },
});

test("the explicit rule map treats only LI-7 and LI-27 as style", () => {
  assert.deepEqual(diagnosticRuleMap.landing, { "LI-7": "style", "LI-27": "style", defaultFailure: "hard" });
  for (const id of ["LI-7", "LI-27"]) {
    const result = classifyLanding([{ id, status: "FAIL", detail: "brand/style disagreement" }]);
    assert.equal(result.status, "STYLE_FAIL");
    assert.equal(result.styleFailures[0].id, id);
    assert.equal(result.hardFailures.length, 0);
  }
});

test("mixed hard and style failures remain hard while preserving both classes", () => {
  const result = classifyLanding([
    { id: "LI-7", status: "FAIL", detail: "display ratio" },
    { id: "LI-34", status: "FAIL", detail: "fold coverage" },
  ]);
  assert.equal(result.status, "FAIL");
  assert.deepEqual(result.styleFailures.map((failure) => failure.id), ["LI-7"]);
  assert.deepEqual(result.hardFailures.map((failure) => failure.id), ["LI-34"]);
});

test("unclassified landing failures fail closed as hard", () => {
  const result = classifyLanding([{ id: "LI-999", status: "FAIL", detail: "new rule" }]);
  assert.equal(result.status, "FAIL");
  assert.deepEqual(result.hardFailures.map((failure) => failure.id), ["LI-999"]);
});

test("accessibility failures are hard and never become style passes", () => {
  const viewports = emptyContrastViewports();
  viewports["390x844"].text.push({ el: "p.copy", text: "Readable text", pctBelow: 42.1 });
  const result = classifyLiveChecker({
    checker: "contrast",
    exitCode: 1,
    stdout: JSON.stringify([{ file: "/tmp/render.html", viewports, fails: ["390x844 p.copy \"Readable text\" 42.1% of glyph px < 4.5:1"], nojs: 0 }]),
  });
  assert.equal(result.status, "FAIL");
  assert.equal(result.hardFailures.length, 1);
  assert.equal(result.styleFailures.length, 0);
});

test("malformed, fatal, timeout, signal, and nonzero-empty executions are checker errors", () => {
  const cases = [
    { checker: "landing", exitCode: 1, stdout: "[not-json" },
    { checker: "landing", exitCode: 1, stdout: JSON.stringify([{ file: "/tmp/render.html", fatal: "browser launch failed" }]) },
    { checker: "render", exitCode: null, timedOut: true, stdout: "" },
    { checker: "contrast", exitCode: null, signal: "SIGTERM", stdout: "" },
    { checker: "render", exitCode: 1, stdout: "" },
  ];
  for (const input of cases) assert.equal(classifyLiveChecker(input).status, "CHECK_ERROR");
});

test("zero-exit output cannot pass with zero rows, unknown shape, or hidden failures", () => {
  assert.equal(classifyLiveChecker({ checker: "render", exitCode: 0, stdout: "[]" }).status, "CHECK_ERROR");
  assert.equal(classifyLiveChecker({ checker: "render", exitCode: 0, stdout: JSON.stringify([{ file: "/tmp/render.html" }]) }).status, "CHECK_ERROR");
  const hidden = classifyLiveChecker({
    checker: "render",
    exitCode: 0,
    stdout: JSON.stringify([{
      file: "/tmp/render.html",
      verdict: "FAIL",
      problems: [{ check: "overflow-x", detail: "20px", viewport: "390x844" }],
      byViewport: {
        "1440x900": { problems: [], info: [] },
        "390x844": { problems: [{ check: "overflow-x", detail: "20px" }], info: [] },
      },
    }]),
  });
  assert.equal(hidden.status, "FAIL");
});

test("one-artifact runs reject extra rows and mismatched result paths", () => {
  const pass = { file: "/tmp/render.html", verdict: "PASS", problems: [], byViewport: emptyRenderViewports() };
  assert.equal(classifyLiveChecker({ checker: "render", exitCode: 0, stdout: JSON.stringify([pass, pass]), expectedFile: pass.file }).status, "CHECK_ERROR");
  assert.equal(classifyLiveChecker({ checker: "render", exitCode: 0, stdout: JSON.stringify([pass]), expectedFile: "/tmp/another.html" }).status, "CHECK_ERROR");
});

test("nonzero execution with valid pass rows is a checker error", () => {
  const result = classifyLiveChecker({
    checker: "render",
    exitCode: 2,
    stdout: JSON.stringify([{ file: "/tmp/render.html", verdict: "PASS", problems: [], byViewport: emptyRenderViewports() }]),
  });
  assert.equal(result.status, "CHECK_ERROR");
});

test("stale evidence never masks a live failure", () => {
  assert.equal(mergeReceiptAndLiveStatus("STALE", "STYLE_FAIL"), "STYLE_FAIL");
  assert.equal(mergeReceiptAndLiveStatus("STALE", "FAIL"), "FAIL");
  assert.equal(mergeReceiptAndLiveStatus("STALE", "CHECK_ERROR"), "CHECK_ERROR");
  assert.equal(mergeReceiptAndLiveStatus("STALE", "PASS"), "STALE");
});

test("all live failures block even when incomplete evidence is allowed", () => {
  for (const status of ["STYLE_FAIL", "FAIL", "CHECK_ERROR"]) {
    assert.equal(summarizeQualityGate([{ status }], false).verdict, "BLOCKED");
  }
  assert.equal(summarizeQualityGate([{ status: "STALE" }], false).verdict, "OK");
});

test("multiple checker results keep hard, style, and checker-error evidence", () => {
  const style = classifyLanding([{ id: "LI-27", status: "FAIL", detail: "system display face" }]);
  const hard = classifyLiveChecker({
    checker: "render",
    exitCode: 1,
    stdout: JSON.stringify([{
      file: "/tmp/render.html",
      verdict: "FAIL",
      problems: [{ check: "img", detail: "broken image", viewport: "1440x900" }],
      byViewport: {
        "1440x900": { problems: [{ check: "img", detail: "broken image" }], info: [] },
        "390x844": { problems: [], info: [] },
      },
    }]),
  });
  const malformed = classifyLiveChecker({ checker: "contrast", exitCode: 1, stdout: "" });
  const summary = summarizeLiveDiagnostics({ landing: style, render: hard, contrast: malformed });
  assert.equal(summary.status, "CHECK_ERROR");
  assert.equal(summary.styleFailures.length, 1);
  assert.equal(summary.hardFailures.length, 1);
  assert.equal(summary.checkerErrors.length, 1);
});

test("empty viewport maps and inconsistent summaries are checker errors", () => {
  assert.equal(classifyLiveChecker({
    checker: "render",
    exitCode: 0,
    stdout: JSON.stringify([{ file: "/tmp/render.html", verdict: "PASS", problems: [], byViewport: {} }]),
  }).status, "CHECK_ERROR");
  assert.equal(classifyLiveChecker({
    checker: "contrast",
    exitCode: 0,
    stdout: JSON.stringify([{ file: "/tmp/render.html", viewports: {}, fails: [], nojs: 0 }]),
  }).status, "CHECK_ERROR");

  const viewports = emptyContrastViewports();
  viewports["1440x900"].rings.push({ text: "Start", pctBelow: 25 });
  assert.equal(classifyLiveChecker({
    checker: "contrast",
    exitCode: 0,
    stdout: JSON.stringify([{ file: "/tmp/render.html", viewports, fails: [], nojs: 0 }]),
  }).status, "CHECK_ERROR");
});

test("render load errors remain hard when navigation prevents viewport evidence", () => {
  const result = classifyLiveChecker({
    checker: "render",
    exitCode: 1,
    stdout: JSON.stringify([{
      file: "/tmp/render.html",
      verdict: "FAIL",
      problems: [{ check: "load", viewport: "1440x900", detail: "net::ERR_FILE_NOT_FOUND" }],
      byViewport: {},
    }]),
  });
  assert.equal(result.status, "FAIL");
  assert.equal(result.hardFailures[0].problem.check, "load");
});
