import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { validateAdapters } from '../../../benchmarks/ui-resolve-bench/scripts/validate-autopilot-greenfield-adapters.mjs';

const root = resolve(import.meta.dirname, '../../..');
const taskBytes = readFileSync(resolve(root, 'benchmarks/ui-resolve-bench/config/autopilot-greenfield-tasks-v0.1.json'));
const tasks = JSON.parse(taskBytes);
const adapters = JSON.parse(readFileSync(resolve(root, 'benchmarks/ui-resolve-bench/config/autopilot-greenfield-adapters-v0.1.json')));
const clone = () => structuredClone(adapters);

describe('Autopilot greenfield observable-outcome adapters', () => {
  it('covers all twelve task authorities without prescribing one implementation', () => {
    expect(validateAdapters(adapters, tasks, taskBytes)).toEqual({ schema_version: '0.1', adapter_count: 12, findings: [], pass: true });
  });
  it.each([
    ['wrong task authority', (value) => { value.task_set_sha256 = '0'.repeat(64); }],
    ['missing second accepted structure', (value) => { value.adapters[0].accepted_structures = ['one']; }],
    ['missing mutant detector', (value) => { delete value.adapters[0].mutant_detection['primary-action-removed']; }],
    ['task-specific id selector', (value) => { value.adapters[0].journey[0] = '#reserve'; }],
    ['hard-coded visual token', (value) => { value.adapters[0].atomic_assertions[0] = '#2f684f'; }],
  ])('rejects %s before model execution', (_name, mutate) => {
    const value = clone(); mutate(value);
    expect(validateAdapters(value, tasks, taskBytes).pass).toBe(false);
  });
});
