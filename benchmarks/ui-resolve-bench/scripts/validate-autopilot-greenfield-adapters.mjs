#!/usr/bin/env node
import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const sha = (bytes) => createHash('sha256').update(bytes).digest('hex');
export function validateAdapters(value, taskSet, taskSetBytes) {
  const findings = [];
  if (value?.schema_version !== '0.1' || value?.status !== 'provider-zero-calibration-required') findings.push('adapter-envelope');
  if (value?.task_set_sha256 !== sha(taskSetBytes)) findings.push('task-set-sha');
  const policy = value?.locator_policy || {};
  if (policy.role_and_accessible_name_only !== true || policy.required_ids_classes_or_testids !== false
    || policy.exact_dom_shape_required !== false || policy.exact_visual_token_required !== false) findings.push('locator-policy');
  if (!Array.isArray(value?.common_checks) || value.common_checks.length < 10) findings.push('common-checks');
  if (!Array.isArray(value?.adapters) || value.adapters.length !== taskSet.tasks.length) findings.push('adapter-count');
  const byTask = new Map((value?.adapters || []).map((item) => [item.task_id, item]));
  for (const task of taskSet.tasks) {
    const adapter = byTask.get(task.id);
    if (!adapter) { findings.push(`missing-adapter:${task.id}`); continue; }
    if (!Array.isArray(adapter.accepted_structures) || adapter.accepted_structures.length < 2) findings.push(`polymorphism:${task.id}`);
    if (!Array.isArray(adapter.journey) || adapter.journey.length < 3) findings.push(`journey:${task.id}`);
    if (!Array.isArray(adapter.atomic_assertions) || adapter.atomic_assertions.length < 4) findings.push(`assertions:${task.id}`);
    const mutantKeys = Object.keys(adapter.mutant_detection || {}).sort();
    if (mutantKeys.join('|') !== [...task.targeted_mutants].sort().join('|')) findings.push(`mutant-map:${task.id}`);
    const text = JSON.stringify(adapter);
    if (/(#[a-z]|\.[a-z][a-z0-9_-]*|data-testid|rgb\(|#[0-9a-f]{3,8})/i.test(text)) findings.push(`implementation-specific-selector:${task.id}`);
  }
  if (byTask.size !== taskSet.tasks.length) findings.push('extra-or-duplicate-adapter');
  return { schema_version: '0.1', adapter_count: value?.adapters?.length || 0, findings, pass: findings.length === 0 };
}

const invoked = process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (invoked) {
  const adapterPath = resolve(process.argv[2] || 'benchmarks/ui-resolve-bench/config/autopilot-greenfield-adapters-v0.1.json');
  const taskPath = resolve(process.argv[3] || 'benchmarks/ui-resolve-bench/config/autopilot-greenfield-tasks-v0.1.json');
  if (!existsSync(adapterPath) || !existsSync(taskPath)) throw new Error('adapter or task authority is missing');
  const taskBytes = readFileSync(taskPath);
  const result = validateAdapters(JSON.parse(readFileSync(adapterPath, 'utf8')), JSON.parse(taskBytes), taskBytes);
  process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
  if (!result.pass) process.exitCode = 1;
}
