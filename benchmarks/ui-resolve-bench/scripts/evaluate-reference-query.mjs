#!/usr/bin/env node
import {
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  statSync,
  writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  loadReferenceQueryData,
  queryReferences,
} from '../../../skills/omd-init/scripts/query-references.mjs';

const SCRIPT = fileURLToPath(import.meta.url);
const ROOT = resolve(dirname(SCRIPT), '..', '..', '..');
const DATA_ROOT = join(ROOT, 'data');
const FIXTURE_PATH = join(
  ROOT,
  'benchmarks/ui-resolve-bench/fixtures/reference-query/query-contract-v0.1.json',
);

function parseArgs(argv) {
  const options = {};
  for (let index = 0; index < argv.length; index += 1) {
    if (argv[index] === '--out') options.out = resolve(process.cwd(), argv[++index]);
    else throw new Error(`unknown argument: ${argv[index]}`);
  }
  return options;
}

function orderedContract(result) {
  return result.candidates.map((candidate) => ({
    id: candidate.id,
    score: candidate.match_score,
    status: candidate.quality.status,
    token_policy: candidate.promotion.token_policy,
    requires_reverify: candidate.promotion.requires_reverify,
  }));
}

export function evaluateReferenceQuery() {
  const startedAt = performance.now();
  const fixture = JSON.parse(readFileSync(FIXTURE_PATH, 'utf8'));
  const data = loadReferenceQueryData(DATA_ROOT);
  const localeCases = fixture.cases.filter((entry) => entry.expected_status === 'ok');
  let localeSuccess = 0;
  let deterministicMismatches = 0;
  let unsafePromotions = 0;
  let qualityMismatches = 0;

  for (const entry of fixture.cases) {
    const runs = Array.from({ length: 3 }, () =>
      queryReferences({ task: entry.task, limit: 5, ...data }));
    const baseline = JSON.stringify(orderedContract(runs[0]));
    if (runs.slice(1).some((run) => JSON.stringify(orderedContract(run)) !== baseline)) {
      deterministicMismatches += 1;
    }
    if (
      entry.expected_status === 'ok' &&
      runs[0].status === 'ok' &&
      runs[0].query.categories.includes(entry.required_category) &&
      runs[0].candidates.length > 0
    ) {
      localeSuccess += 1;
    }
    for (const candidate of runs[0].candidates) {
      const canonical = data.qualityById.get(candidate.id);
      if (canonical?.status !== candidate.quality.status) qualityMismatches += 1;
      const expectedPolicy = candidate.quality.status === 'verified_v2'
        ? 'evidence-qualified-fields-only'
        : 'context-only-reverify-first';
      if (candidate.promotion.token_policy !== expectedPolicy) unsafePromotions += 1;
    }
  }

  let exactIdSuccess = 0;
  for (const item of data.fingerprints) {
    const runs = Array.from({ length: 3 }, () =>
      queryReferences({ task: 'Use this catalog reference', brandHint: item.id, limit: 1, ...data }));
    const contracts = runs.map((run) => JSON.stringify(orderedContract(run)));
    if (contracts[1] !== contracts[0] || contracts[2] !== contracts[0]) {
      deterministicMismatches += 1;
    }
    const top = runs[0].candidates[0];
    if (top?.id === item.id && top.matched.exact_brand) exactIdSuccess += 1;
    const canonical = data.qualityById.get(item.id);
    if (top?.quality.status !== canonical?.status) qualityMismatches += 1;
    const expectedPolicy = canonical?.status === 'verified_v2'
      ? 'evidence-qualified-fields-only'
      : 'context-only-reverify-first';
    if (top?.promotion.token_policy !== expectedPolicy) unsafePromotions += 1;
  }

  const vague = fixture.cases.find((entry) => entry.id === 'vague-no-fallback');
  const vagueResult = queryReferences({ task: vague.task, ...data });
  const unsupportedFallbacks = vagueResult.status === 'needs_clarification' &&
    vagueResult.candidates.length === 0 ? 0 : 1;

  const mutantRoot = mkdtempSync(join(tmpdir(), 'omd-reference-query-eval-'));
  let missingQualityFailClosed = false;
  try {
    writeFileSync(
      join(mutantRoot, 'reference-fingerprints.json'),
      '{"count":1,"items":[{"id":"toss"}]}',
    );
    try {
      loadReferenceQueryData(mutantRoot);
    } catch (error) {
      missingQualityFailClosed = /install-skills|doctor/.test(error.message);
    }
  } finally {
    rmSync(mutantRoot, { recursive: true, force: true });
  }

  const payloadFiles = [
    join(ROOT, 'skills/omd-init/scripts/query-references.mjs'),
    join(ROOT, 'data/reference-quality.json'),
    join(ROOT, 'data/reference-fingerprints.json'),
    join(ROOT, 'data/synonyms.json'),
  ];
  const payloadBytes = Object.fromEntries(
    payloadFiles.map((path) => [path.replace(`${ROOT}/`, ''), statSync(path).size]),
  );
  const checks = {
    locale_fixture_success: localeSuccess === localeCases.length,
    exact_id_recall: exactIdSuccess === data.fingerprints.length,
    unsafe_promotion_zero: unsafePromotions === 0,
    unsupported_fallback_zero: unsupportedFallbacks === 0,
    quality_mismatch_zero: qualityMismatches === 0,
    deterministic_mismatch_zero: deterministicMismatches === 0,
    missing_quality_fails_closed: missingQualityFailClosed,
  };
  return {
    schema_version: 1,
    product_candidate: '1.9.5-candidate',
    benchmark_family: 'evidence-and-unknown',
    benchmark_status: 'Internal',
    catalog_count: data.fingerprints.length,
    quality_generated_at: data.qualityGeneratedAt,
    metrics: {
      locale_fixture_success: localeSuccess,
      locale_fixture_total: localeCases.length,
      exact_id_success: exactIdSuccess,
      exact_id_total: data.fingerprints.length,
      unsafe_promotion_count: unsafePromotions,
      unsupported_fallback_count: unsupportedFallbacks,
      quality_mismatch_count: qualityMismatches,
      deterministic_mismatch_count: deterministicMismatches,
      missing_quality_fail_closed: missingQualityFailClosed,
      wall_time_ms: Math.round((performance.now() - startedAt) * 100) / 100,
      installed_query_payload_bytes: Object.values(payloadBytes).reduce((sum, size) => sum + size, 0),
      payload_bytes_by_file: payloadBytes,
    },
    checks,
    decision: Object.values(checks).every(Boolean) ? 'accept-product-contract' : 'reject-or-repair',
    claim_boundary: 'No model/skill lift, UI-Resolved, frontier, or superiority claim.',
  };
}

function main() {
  const options = parseArgs(process.argv.slice(2));
  const result = evaluateReferenceQuery();
  const output = `${JSON.stringify(result, null, 2)}\n`;
  if (options.out) {
    mkdirSync(dirname(options.out), { recursive: true });
    writeFileSync(options.out, output, 'utf8');
  }
  process.stdout.write(output);
  if (result.decision !== 'accept-product-contract') process.exitCode = 1;
}

if (process.argv[1] && resolve(process.argv[1]) === resolve(SCRIPT)) main();
