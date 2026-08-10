#!/usr/bin/env node
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const expectedFamilies = [
  'landing', 'saas-dashboard', 'dense-operations', 'onboarding', 'checkout',
  'transactional-approval', 'search-and-filter', 'content-editorial', 'mobile-first',
  'evidence-and-unknowns', 'state-and-error-recovery', 'five-locale-surface',
];
const forbiddenPromptPatterns = [/toss|linear|apple|airbnb|stripe/i, /use the attached design/i, /DESIGN\.md is provided/i];

export function validateTaskSet(value) {
  const findings = [];
  if (value?.schema_version !== '0.1') findings.push('schema-version');
  if (value?.status !== 'provider-zero-calibration-required') findings.push('status');
  for (const key of ['task_specific_setup_allowed', 'task_specific_reference_allowed', 'task_specific_design_tokens_allowed']) {
    if (value?.[key] !== false) findings.push(`${key}-must-be-false`);
  }
  if (!Array.isArray(value?.tasks) || value.tasks.length !== 12) findings.push('task-count-exact-12');
  const ids = new Set();
  const families = new Set();
  for (const task of value?.tasks || []) {
    if (!/^[a-z0-9-]+$/.test(task.id || '') || ids.has(task.id)) findings.push(`task-id:${task.id || 'missing'}`);
    ids.add(task.id);
    if (!expectedFamilies.includes(task.family) || families.has(task.family)) findings.push(`task-family:${task.family || 'missing'}`);
    families.add(task.family);
    if (typeof task.prompt !== 'string' || task.prompt.length < 180 || task.design_system_authority !== 'establish') findings.push(`task-prompt-authority:${task.id}`);
    if (!/Establish a project-owned design system\./.test(task.prompt || '')) findings.push(`task-explicit-system-authority:${task.id}`);
    if (forbiddenPromptPatterns.some((pattern) => pattern.test(task.prompt || ''))) findings.push(`task-preselected-reference:${task.id}`);
    if (!Array.isArray(task.primary_journey) || task.primary_journey.length < 3) findings.push(`task-journey:${task.id}`);
    if (!Array.isArray(task.protected_unknowns) || task.protected_unknowns.length < 2) findings.push(`task-unknowns:${task.id}`);
    if (!Array.isArray(task.required_states) || task.required_states.length < 3) findings.push(`task-states:${task.id}`);
    if (!Array.isArray(task.targeted_mutants) || task.targeted_mutants.length < 3 || new Set(task.targeted_mutants).size !== task.targeted_mutants.length) findings.push(`task-mutants:${task.id}`);
  }
  if (expectedFamilies.some((family) => !families.has(family))) findings.push('family-coverage');
  return { schema_version: '0.1', task_set_id: value?.task_set_id || null, task_count: value?.tasks?.length || 0, findings, pass: findings.length === 0 };
}

const invoked = process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (invoked) {
  const input = resolve(process.argv[2] || 'benchmarks/ui-resolve-bench/config/autopilot-greenfield-tasks-v0.1.json');
  if (!existsSync(input)) throw new Error(`task set missing: ${input}`);
  const result = validateTaskSet(JSON.parse(readFileSync(input, 'utf8')));
  process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
  if (!result.pass) process.exitCode = 1;
}
