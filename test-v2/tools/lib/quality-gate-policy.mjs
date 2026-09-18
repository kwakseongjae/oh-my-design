/** Validate the requested coverage before starting expensive browser checks. */
export function selectFixtures(config, only = null) {
  if (!Array.isArray(config.fixtures) || config.fixtures.length === 0) {
    throw new Error("quality gate requires a non-empty fixture matrix");
  }
  const knownChecks = new Set(["render", "contrast", "landing"]);
  const ids = new Set();
  for (const fixture of config.fixtures) {
    if (!fixture.id || ids.has(fixture.id)) throw new Error(`invalid or duplicate fixture id: ${fixture.id}`);
    ids.add(fixture.id);
    if (!fixture.artifact || !fixture.skill) throw new Error(`missing artifact or skill: ${fixture.id}`);
    const sources = config.sourceSkills?.[fixture.skill];
    if (!Array.isArray(sources) || !sources.length || sources.some((p) => typeof p !== "string" || !p.trim())) {
      throw new Error(`missing source skill files: ${fixture.id}`);
    }
    if (!Array.isArray(fixture.checks) || !fixture.checks.length || fixture.checks.some((c) => !knownChecks.has(c))) {
      throw new Error(`empty or unknown checks: ${fixture.id}`);
    }
  }
  if (only) {
    if (!only.size) throw new Error("--only requires at least one fixture id");
    for (const id of only) if (!ids.has(id)) throw new Error(`unknown fixture id: ${id}`);
  }
  return config.fixtures.filter((fixture) => !only || only.has(fixture.id));
}

/** Incomplete evidence blocks by default; diagnostic opt-out must be explicit. */
export function summarizeQualityGate(rows, strict = true) {
  const counts = rows.reduce((a, r) => ((a[r.status] = (a[r.status] || 0) + 1), a), {});
  const known = new Set(["PASS", "FAIL", "STYLE_FAIL", "CHECK_ERROR", "CHECK_PENDING", "REVIEW_PENDING", "MISSING", "STALE", "UNVERIFIED"]);
  const hardFail = rows.filter((r) => ["FAIL", "CHECK_ERROR", "CHECK_PENDING"].includes(r.status) || !known.has(r.status)).length;
  const styleFail = rows.filter((r) => r.status === "STYLE_FAIL").length;
  const softFail = rows.filter((r) => ["MISSING", "STALE", "UNVERIFIED", "REVIEW_PENDING"].includes(r.status)).length;
  const verdict = !rows.length || hardFail || styleFail || (strict && softFail) ? "BLOCKED" : "OK";
  return { verdict, counts, hardFail, styleFail, softFail };
}
