const CHECKERS = new Set(["render", "contrast", "landing"]);
const LANDING_STYLE_FAILURES = new Set(["LI-7", "LI-27"]);
const LANDING_STATUSES = new Set(["PASS", "WARN", "FAIL"]);
const DEFAULT_VIEWPORTS = ["1440x900", "390x844"];

function errorResult(checker, reason, execution, parsed = null) {
  return {
    checker,
    status: "CHECK_ERROR",
    hardFailures: [],
    styleFailures: [],
    checkerErrors: [reason],
    execution,
    parsed,
  };
}

function baseResult(checker, execution, parsed) {
  return {
    checker,
    status: "PASS",
    hardFailures: [],
    styleFailures: [],
    checkerErrors: [],
    execution,
    parsed,
  };
}

function knownFile(row) {
  return row && typeof row === "object" && !Array.isArray(row) && typeof row.file === "string" && row.file.length > 0;
}

function classifyRender(parsed, result) {
  for (const [index, row] of parsed.entries()) {
    if (!knownFile(row) || !Array.isArray(row.problems) || !["PASS", "FAIL"].includes(row.verdict) || !row.byViewport || typeof row.byViewport !== "object" || Array.isArray(row.byViewport)) {
      result.checkerErrors.push(`render result ${index} has an unknown shape`);
      continue;
    }
    const loadProblems = row.problems.filter((problem) => problem && problem.check === "load" && typeof problem.detail === "string");
    const nestedProblems = [];
    let viewportShapeValid = true;
    for (const viewport of DEFAULT_VIEWPORTS) {
      const evidence = row.byViewport[viewport];
      if (!evidence) {
        if (!loadProblems.length) viewportShapeValid = false;
        continue;
      }
      if (!Array.isArray(evidence.problems) || !Array.isArray(evidence.info)) {
        viewportShapeValid = false;
        continue;
      }
      for (const problem of evidence.problems) {
        if (!problem || typeof problem.check !== "string" || typeof problem.detail !== "string") viewportShapeValid = false;
        else nestedProblems.push({ viewport, check: problem.check, detail: problem.detail });
      }
    }
    if (!viewportShapeValid) {
      result.checkerErrors.push(`render result ${index} is missing default viewport evidence`);
      continue;
    }
    const summarized = row.problems.filter((problem) => problem?.check !== "load").map((problem) => ({ viewport: problem.viewport, check: problem.check, detail: problem.detail }));
    if (JSON.stringify(summarized) !== JSON.stringify(nestedProblems)) {
      result.checkerErrors.push(`render result ${index} contradicts its viewport problem evidence`);
      continue;
    }
    const failed = row.verdict === "FAIL" || row.problems.length > 0;
    if ((row.verdict === "PASS") !== (row.problems.length === 0)) {
      result.checkerErrors.push(`render result ${index} contradicts its problem list`);
    } else if (failed) {
      result.hardFailures.push(...(row.problems.length ? row.problems.map((problem) => ({ checker: "render", file: row.file, problem })) : [{ checker: "render", file: row.file, problem: { check: "unknown", detail: "FAIL without a problem record" } }]));
    }
  }
}

function classifyContrast(parsed, result) {
  for (const [index, row] of parsed.entries()) {
    if (!knownFile(row)) {
      result.checkerErrors.push(`contrast result ${index} has an unknown shape`);
      continue;
    }
    if (typeof row.fatal === "string" && row.fatal) {
      result.checkerErrors.push(`contrast fatal for ${row.file}: ${row.fatal}`);
      continue;
    }
    if (!Array.isArray(row.fails) || !row.viewports || typeof row.viewports !== "object" || Array.isArray(row.viewports) || !Number.isInteger(row.nojs) || row.nojs < 0) {
      result.checkerErrors.push(`contrast result ${index} has an unknown shape`);
      continue;
    }
    const fatal = row.fails.find((failure) => typeof failure !== "string" || /\bFATAL\b/.test(failure));
    if (fatal !== undefined) {
      result.checkerErrors.push(`contrast fatal for ${row.file}: ${String(fatal)}`);
      continue;
    }
    let viewportShapeValid = true;
    const expectedFailurePrefixes = row.nojs > 0 ? [`no-JS: ${row.nojs} `] : [];
    for (const viewport of DEFAULT_VIEWPORTS) {
      const evidence = row.viewports[viewport];
      if (!evidence || !Array.isArray(evidence.text) || !Array.isArray(evidence.rings)) {
        viewportShapeValid = false;
        continue;
      }
      for (const measurement of evidence.text) {
        if (!measurement || typeof measurement.el !== "string" || typeof measurement.text !== "string" || typeof measurement.pctBelow !== "number" || !Number.isFinite(measurement.pctBelow)) viewportShapeValid = false;
        else if (measurement.pctBelow > 5) expectedFailurePrefixes.push(`${viewport} ${measurement.el} "${measurement.text}" `);
      }
      for (const measurement of evidence.rings) {
        if (!measurement || typeof measurement.text !== "string" || typeof measurement.pctBelow !== "number" || !Number.isFinite(measurement.pctBelow)) viewportShapeValid = false;
        else if (measurement.pctBelow > 5) expectedFailurePrefixes.push(`${viewport} focus "${measurement.text}" `);
      }
    }
    if (!viewportShapeValid) {
      result.checkerErrors.push(`contrast result ${index} is missing default viewport evidence`);
      continue;
    }
    const summariesMatch = expectedFailurePrefixes.length === row.fails.length && expectedFailurePrefixes.every((prefix) => row.fails.some((failure) => failure.startsWith(prefix)));
    if (!summariesMatch) {
      result.checkerErrors.push(`contrast result ${index} failure summary mismatch: declared ${row.fails.length}, observed ${expectedFailurePrefixes.length}`);
      continue;
    }
    result.hardFailures.push(...row.fails.map((failure) => ({ checker: "contrast", file: row.file, failure })));
  }
}

function classifyLanding(parsed, result) {
  for (const [index, row] of parsed.entries()) {
    if (!knownFile(row)) {
      result.checkerErrors.push(`landing result ${index} has an unknown shape`);
      continue;
    }
    if (typeof row.fatal === "string" && row.fatal) {
      result.checkerErrors.push(`landing fatal for ${row.file}: ${row.fatal}`);
      continue;
    }
    if (!Number.isInteger(row.fails) || row.fails < 0 || !Array.isArray(row.checks) || row.checks.length === 0) {
      result.checkerErrors.push(`landing result ${index} has an unknown shape`);
      continue;
    }
    const invalidCheck = row.checks.find((check) => !check || typeof check.id !== "string" || !LANDING_STATUSES.has(check.status));
    if (invalidCheck) {
      result.checkerErrors.push(`landing result ${index} contains an unknown check shape`);
      continue;
    }
    const failures = row.checks.filter((check) => check.status === "FAIL");
    if (failures.length !== row.fails) {
      result.checkerErrors.push(`landing result ${index} failure count mismatch: declared ${row.fails}, observed ${failures.length}`);
      continue;
    }
    for (const failure of failures) {
      const diagnostic = { checker: "landing", file: row.file, id: failure.id, detail: failure.detail || "" };
      if (LANDING_STYLE_FAILURES.has(failure.id)) result.styleFailures.push(diagnostic);
      else result.hardFailures.push(diagnostic);
    }
  }
}

/**
 * Classify one live checker execution from stdout JSON and process metadata.
 * Runtime faults remain CHECK_ERROR. Only LI-7 and LI-27 are style failures;
 * every other actual failure defaults to hard.
 */
export function classifyLiveChecker({ checker, exitCode, signal = null, timedOut = false, spawnError = null, stdout = "", stderr = "", expectedFile = null }) {
  const execution = { exitCode, signal, timedOut, spawnError, stderr: String(stderr || "") };
  if (!CHECKERS.has(checker)) return errorResult(checker, `unknown checker: ${checker}`, execution);
  if (timedOut) return errorResult(checker, `${checker} timed out`, execution);
  if (signal) return errorResult(checker, `${checker} terminated by signal ${signal}`, execution);
  if (spawnError) return errorResult(checker, `${checker} could not run: ${spawnError}`, execution);
  if (!Number.isInteger(exitCode)) return errorResult(checker, `${checker} returned no exit code`, execution);
  if (exitCode < 0 || exitCode > 1) return errorResult(checker, `${checker} returned unsupported exit code ${exitCode}`, execution);

  const text = String(stdout || "").trim();
  if (!text) return errorResult(checker, `${checker} returned empty stdout`, execution);
  let parsed;
  try {
    parsed = JSON.parse(text);
  } catch (error) {
    return errorResult(checker, `${checker} returned malformed JSON: ${error.message}`, execution);
  }
  if (!Array.isArray(parsed) || parsed.length === 0) return errorResult(checker, `${checker} returned no result rows`, execution, parsed);
  if (parsed.length !== 1) return errorResult(checker, `${checker} returned ${parsed.length} rows for one requested artifact`, execution, parsed);
  if (expectedFile && parsed[0]?.file !== expectedFile) return errorResult(checker, `${checker} result file does not match the requested artifact`, execution, parsed);

  const result = baseResult(checker, execution, parsed);
  if (checker === "render") classifyRender(parsed, result);
  else if (checker === "contrast") classifyContrast(parsed, result);
  else classifyLanding(parsed, result);

  if (result.checkerErrors.length) result.status = "CHECK_ERROR";
  else if (result.hardFailures.length) result.status = "FAIL";
  else if (result.styleFailures.length) result.status = "STYLE_FAIL";
  else if (exitCode !== 0) {
    result.status = "CHECK_ERROR";
    result.checkerErrors.push(`${checker} exited ${exitCode} without a reported failure`);
  }
  return result;
}

/** Preserve all live classes while selecting the row's blocking status. */
export function summarizeLiveDiagnostics(checks) {
  const values = Object.values(checks || {});
  const summary = {
    hardFailures: values.flatMap((check) => check.hardFailures || []),
    styleFailures: values.flatMap((check) => check.styleFailures || []),
    checkerErrors: values.flatMap((check) => check.checkerErrors || []),
  };
  summary.status = summary.checkerErrors.length ? "CHECK_ERROR" : summary.hardFailures.length ? "FAIL" : summary.styleFailures.length ? "STYLE_FAIL" : "PASS";
  return summary;
}

/** Live failures override incomplete or stale receipts; a clean live run does not. */
export function mergeReceiptAndLiveStatus(receiptStatus, liveStatus) {
  if (liveStatus === "CHECK_ERROR" || receiptStatus === "CHECK_ERROR") return "CHECK_ERROR";
  if (liveStatus === "FAIL" || receiptStatus === "FAIL") return "FAIL";
  if (liveStatus === "STYLE_FAIL" || receiptStatus === "STYLE_FAIL") return "STYLE_FAIL";
  return receiptStatus;
}

export const diagnosticRuleMap = Object.freeze({
  render: "hard",
  contrast: "hard",
  landing: Object.freeze({ "LI-7": "style", "LI-27": "style", defaultFailure: "hard" }),
  fatal: "checker-error",
  malformed: "checker-error",
  timeout: "checker-error",
});
