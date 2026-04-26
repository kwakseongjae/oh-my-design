import {
  mkdtempSync,
  rmSync,
  mkdirSync,
  writeFileSync,
  readFileSync,
  existsSync,
  cpSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import { buildDeltaSet, type DeltaSet } from '../../src/core/vocabulary.js';
import { recommend } from '../../src/core/recommend.js';
import { applyDeltaStub, type StubStats } from '../../src/core/apply-delta-stub.js';
import { writeAllShims } from '../../src/core/shims.js';
import {
  appendEntry,
  readFile as readPrefs,
  updateEntryStatus,
} from '../../src/core/preferences.js';
import { readLock } from '../../src/core/sync-lock.js';
import { hashContent } from '../../src/core/sync-marker.js';
import { deprecateDesignMd } from '../../src/core/init-deprecate.js';

import type { ScenarioCase } from './cases.js';

export interface CheckResult {
  name: string;
  passed: boolean;
  detail: string;
}

export interface ScenarioResult {
  id: string;
  title: string;
  checks: CheckResult[];
  passed: boolean;
  delta: DeltaSet;
  topRefs: string[];
  stubStats: StubStats;
  archivePath: string;
}

const REPO_ROOT = (() => {
  let cur = dirname(fileURLToPath(import.meta.url));
  for (let i = 0; i < 8; i++) {
    if (existsSync(join(cur, 'references')) && existsSync(join(cur, 'package.json'))) {
      return cur;
    }
    const parent = dirname(cur);
    if (parent === cur) break;
    cur = parent;
  }
  throw new Error('could not locate repo root');
})();

function axisSignCheck(delta: DeltaSet, axis: string, sign: string): boolean {
  const bucket = delta.axes[axis];
  const v = bucket?.value ?? 0;
  switch (sign) {
    case '>0':
      return v > 0;
    case '<0':
      return v < 0;
    case '==0':
      return v === 0;
    case '!=0':
      return v !== 0;
    default:
      return false;
  }
}

export function runScenario(
  scenario: ScenarioCase,
  archiveRoot: string
): ScenarioResult {
  const projectRoot = mkdtempSync(join(tmpdir(), `omd-sc-${scenario.id}-`));
  const checks: CheckResult[] = [];

  // 1. Recommendation sanity
  const hits = recommend(scenario.description, { topK: 5 });
  const topIds = hits.map((h) => h.id);
  if (scenario.expected.topRefsAnyOf) {
    const matched = scenario.expected.topRefsAnyOf.filter((id) =>
      topIds.includes(id)
    );
    checks.push({
      name: 'recommendation-top5-includes-expected',
      passed: matched.length > 0,
      detail: `expected any of [${scenario.expected.topRefsAnyOf.join(', ')}], got top-5 [${topIds.join(', ')}] → matched ${matched.length}`,
    });
  }

  // 2. Delta set computation
  const delta = buildDeltaSet(scenario.description);

  if (scenario.expected.matchedKeywordsIncludes) {
    const matchedSet = new Set([
      ...delta.matchedKeywords.map((k) => k.keyword),
      ...delta.droppedKeywords.map((k) => k.keyword),
    ]);
    for (const kw of scenario.expected.matchedKeywordsIncludes) {
      checks.push({
        name: `keyword-matched:${kw}`,
        passed: matchedSet.has(kw),
        detail: `expected "${kw}" in matched+dropped, got matched=[${[...matchedSet].join(', ')}]`,
      });
    }
  }

  if (scenario.expected.matchedKeywordsCount) {
    const count =
      delta.matchedKeywords.length + delta.droppedKeywords.length;
    const { min, max } = scenario.expected.matchedKeywordsCount;
    if (min !== undefined) {
      checks.push({
        name: 'matched-keywords-min',
        passed: count >= min,
        detail: `expected ≥${min}, got ${count}`,
      });
    }
    if (max !== undefined) {
      checks.push({
        name: 'matched-keywords-max',
        passed: count <= max,
        detail: `expected ≤${max}, got ${count}`,
      });
    }
  }

  if (scenario.expected.keptKeywordsIncludes) {
    const kept = new Set(delta.matchedKeywords.map((k) => k.keyword));
    for (const kw of scenario.expected.keptKeywordsIncludes) {
      checks.push({
        name: `kept-keyword:${kw}`,
        passed: kept.has(kw),
        detail: `expected "${kw}" kept, got kept=[${[...kept].join(', ')}]`,
      });
    }
  }

  if (scenario.expected.keptKeywordsExcludes) {
    const kept = new Set(delta.matchedKeywords.map((k) => k.keyword));
    for (const kw of scenario.expected.keptKeywordsExcludes) {
      checks.push({
        name: `dropped-keyword:${kw}`,
        passed: !kept.has(kw),
        detail: `expected "${kw}" NOT kept, got kept=[${[...kept].join(', ')}]`,
      });
    }
  }

  if (scenario.expected.axisSigns) {
    for (const [axis, sign] of Object.entries(scenario.expected.axisSigns)) {
      checks.push({
        name: `axis-sign:${axis}:${sign}`,
        passed: axisSignCheck(delta, axis, sign),
        detail: `expected ${sign}, got value=${delta.axes[axis]?.value ?? 'absent'}`,
      });
    }
  }

  if (scenario.expected.hasWarnings !== undefined) {
    const has = delta.warnings.length > 0;
    checks.push({
      name: 'warnings-expectation',
      passed: has === scenario.expected.hasWarnings,
      detail: `expected hasWarnings=${scenario.expected.hasWarnings}, got ${delta.warnings.length} warnings`,
    });
  }

  // 3. Determinism — recompute and compare
  const delta2 = buildDeltaSet(scenario.description);
  checks.push({
    name: 'determinism',
    passed: JSON.stringify(delta.axes) === JSON.stringify(delta2.axes),
    detail: 'recomputed delta_set.axes matches original',
  });

  // 4. E2E: init prepare (simulated), stub apply, sync, preferences
  const refPath = join(REPO_ROOT, 'references', scenario.reference, 'DESIGN.md');
  if (!existsSync(refPath)) {
    checks.push({
      name: 'reference-exists',
      passed: false,
      detail: `reference not found: ${refPath}`,
    });
    return finalize(scenario, checks, delta, topIds, {
      hexMatches: 0,
      hexChanged: 0,
      hueShift: 0,
      satShift: 0,
      lightShift: 0,
      sourcesApplied: [],
    }, archiveRoot, projectRoot);
  }
  const referenceMd = readFileSync(refPath, 'utf8');

  // Simulate init-context
  const contextPath = join(projectRoot, '.omd', 'init-context.json');
  mkdirSync(join(projectRoot, '.omd'), { recursive: true });
  writeFileSync(
    contextPath,
    JSON.stringify(
      {
        schema: 'omd.init-context/v1',
        created_at: new Date().toISOString(),
        reference_id: scenario.reference,
        reference_path: refPath,
        description: scenario.description,
        delta_set: delta,
      },
      null,
      2
    ) + '\n',
    'utf8'
  );

  // Deprecate path (no-op since no existing DESIGN.md in tempdir)
  deprecateDesignMd({
    projectRoot,
    newReference: scenario.reference,
    reason: 'scenario-runner',
  });

  // Stub-apply DESIGN.md
  const stub = applyDeltaStub(referenceMd, delta);
  const designMdPath = join(projectRoot, 'DESIGN.md');
  writeFileSync(designMdPath, stub.designMd, 'utf8');

  if (scenario.expected.hexChangesMin !== undefined) {
    checks.push({
      name: 'hex-changes-min',
      passed: stub.stats.hexChanged >= scenario.expected.hexChangesMin,
      detail: `expected ≥${scenario.expected.hexChangesMin}, got ${stub.stats.hexChanged}/${stub.stats.hexMatches} changed`,
    });
  }

  // 5. Shim install
  const writeResults = writeAllShims(projectRoot);
  const shimsOk = writeResults.every(
    (r) => r.status === 'created' || r.status === 'updated'
  );
  checks.push({
    name: 'shims-created',
    passed: shimsOk && writeResults.length === 3,
    detail: `${writeResults.length} shims, statuses=[${writeResults.map((r) => r.status).join(', ')}]`,
  });

  const lock = readLock(projectRoot);
  checks.push({
    name: 'sync-lock-valid',
    passed: !!lock && Object.keys(lock.targets).length === 3,
    detail: `lock=${lock ? `${Object.keys(lock.targets).length} targets` : 'null'}`,
  });

  // 6. Preferences cycle
  if (scenario.preferences && scenario.preferences.length > 0) {
    const designMdHash = hashContent(stub.designMd);
    let allScopeOk = true;
    let allAppliedOk = true;
    for (const pref of scenario.preferences) {
      const entry = appendEntry(projectRoot, { note: pref.note }, designMdHash);
      if (pref.expectedScope && entry.meta.scope !== pref.expectedScope) {
        allScopeOk = false;
      }
      try {
        updateEntryStatus(projectRoot, {
          id: entry.meta.id,
          status: 'applied',
          applied_design_md_hash: designMdHash,
        });
      } catch {
        allAppliedOk = false;
      }
    }
    checks.push({
      name: 'preferences-scope-inference',
      passed: allScopeOk,
      detail: `all ${scenario.preferences.length} entries got expected scopes`,
    });
    checks.push({
      name: 'preferences-apply-cycle',
      passed: allAppliedOk,
      detail: 'all entries transitioned to applied',
    });
    const prefsAfter = readPrefs(projectRoot)!;
    const allApplied = prefsAfter.entries.every(
      (e) => e.meta.status === 'applied'
    );
    checks.push({
      name: 'preferences-persisted',
      passed: allApplied,
      detail: `read-back shows ${prefsAfter.entries.length} entries, all applied=${allApplied}`,
    });
  }

  const result = finalize(scenario, checks, delta, topIds, stub.stats, archiveRoot, projectRoot);
  rmSync(projectRoot, { recursive: true, force: true });
  return result;
}

function finalize(
  scenario: ScenarioCase,
  checks: CheckResult[],
  delta: DeltaSet,
  topRefs: string[],
  stubStats: StubStats,
  archiveRoot: string,
  projectRoot: string
): ScenarioResult {
  const archivePath = join(archiveRoot, scenario.id);
  mkdirSync(archivePath, { recursive: true });

  writeFileSync(
    join(archivePath, 'scenario.json'),
    JSON.stringify(scenario, null, 2) + '\n',
    'utf8'
  );
  writeFileSync(
    join(archivePath, 'delta_set.json'),
    JSON.stringify(delta, null, 2) + '\n',
    'utf8'
  );
  writeFileSync(
    join(archivePath, 'top-refs.json'),
    JSON.stringify(topRefs, null, 2) + '\n',
    'utf8'
  );
  writeFileSync(
    join(archivePath, 'stub-stats.json'),
    JSON.stringify(stubStats, null, 2) + '\n',
    'utf8'
  );
  writeFileSync(
    join(archivePath, 'checks.json'),
    JSON.stringify(checks, null, 2) + '\n',
    'utf8'
  );

  // Copy project artifacts if they exist
  for (const rel of [
    'DESIGN.md',
    'CLAUDE.md',
    'AGENTS.md',
    '.cursor/rules/omd-design.mdc',
    '.omd/preferences.md',
    '.omd/sync.lock.json',
    '.omd/init-context.json',
  ]) {
    const src = join(projectRoot, rel);
    if (!existsSync(src)) continue;
    const dst = join(archivePath, rel);
    mkdirSync(dirname(dst), { recursive: true });
    cpSync(src, dst);
  }

  const passed = checks.every((c) => c.passed);
  return {
    id: scenario.id,
    title: scenario.title,
    checks,
    passed,
    delta,
    topRefs,
    stubStats,
    archivePath,
  };
}

export interface RunAllResult {
  scenarios: ScenarioResult[];
  totals: {
    scenarios: number;
    passed: number;
    checks: number;
    checksPassed: number;
  };
  vocabCoverage: number; // fraction of scenarios with ≥1 matched keyword
}

export function runAllScenarios(
  scenarios: ScenarioCase[],
  archiveRoot: string
): RunAllResult {
  mkdirSync(archiveRoot, { recursive: true });
  const results = scenarios.map((sc) => runScenario(sc, archiveRoot));
  const checksTotal = results.reduce((a, r) => a + r.checks.length, 0);
  const checksPassed = results.reduce(
    (a, r) => a + r.checks.filter((c) => c.passed).length,
    0
  );
  const withMatches = results.filter(
    (r) =>
      r.delta.matchedKeywords.length + r.delta.droppedKeywords.length > 0
  ).length;

  writeResultsMd(archiveRoot, results, {
    scenarios: results.length,
    passed: results.filter((r) => r.passed).length,
    checks: checksTotal,
    checksPassed,
    vocabCoverage: withMatches / results.length,
  });

  return {
    scenarios: results,
    totals: {
      scenarios: results.length,
      passed: results.filter((r) => r.passed).length,
      checks: checksTotal,
      checksPassed,
    },
    vocabCoverage: withMatches / results.length,
  };
}

function writeResultsMd(
  archiveRoot: string,
  results: ScenarioResult[],
  totals: {
    scenarios: number;
    passed: number;
    checks: number;
    checksPassed: number;
    vocabCoverage: number;
  }
): void {
  const lines: string[] = [];
  lines.push('# Scenario Test Results');
  lines.push('');
  lines.push(`- Generated: ${new Date().toISOString()}`);
  lines.push(
    `- Scenarios: ${totals.passed}/${totals.scenarios} passed`
  );
  lines.push(
    `- Checks: ${totals.checksPassed}/${totals.checks} passed (${((totals.checksPassed / totals.checks) * 100).toFixed(1)}%)`
  );
  lines.push(
    `- Vocab coverage: ${(totals.vocabCoverage * 100).toFixed(0)}% of scenarios produced ≥1 keyword match`
  );
  lines.push('');
  lines.push('## Per-scenario summary');
  lines.push('');
  lines.push('| ID | Title | Pass | Checks | Hex Δ | Matched keywords | Top refs |');
  lines.push('|---|---|---|---|---|---|---|');
  for (const r of results) {
    const matchedKw =
      r.delta.matchedKeywords.map((k) => k.keyword).join(', ') || '—';
    const refs = r.topRefs.slice(0, 3).join(', ');
    const checksPass = r.checks.filter((c) => c.passed).length;
    lines.push(
      `| ${r.id} | ${r.title} | ${r.passed ? '✅' : '❌'} | ${checksPass}/${r.checks.length} | ${r.stubStats.hexChanged}/${r.stubStats.hexMatches} | ${matchedKw} | ${refs} |`
    );
  }
  lines.push('');
  lines.push('## Failed checks (if any)');
  lines.push('');
  let anyFails = false;
  for (const r of results) {
    const failed = r.checks.filter((c) => !c.passed);
    if (failed.length === 0) continue;
    anyFails = true;
    lines.push(`### ${r.id} — ${r.title}`);
    for (const c of failed) {
      lines.push(`- ❌ **${c.name}** — ${c.detail}`);
    }
    lines.push('');
  }
  if (!anyFails) lines.push('_No failed checks._');
  lines.push('');
  lines.push('## Artifacts');
  lines.push('');
  for (const r of results) {
    lines.push(`- \`${r.id}/\` — DESIGN.md, delta_set.json, shims, preferences, checks.json`);
  }
  lines.push('');

  writeFileSync(join(archiveRoot, 'RESULTS.md'), lines.join('\n'), 'utf8');
}
