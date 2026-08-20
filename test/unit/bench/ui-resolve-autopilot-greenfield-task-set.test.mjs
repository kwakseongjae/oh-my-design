import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { validateTaskSet } from '../../../benchmarks/ui-resolve-bench/scripts/validate-autopilot-greenfield-task-set.mjs';

const file = resolve(import.meta.dirname, '../../../benchmarks/ui-resolve-bench/config/autopilot-greenfield-tasks-v0.1.json');
const canonical = JSON.parse(readFileSync(file, 'utf8'));
const clone = () => structuredClone(canonical);

describe('Autopilot hidden greenfield task-set contract', () => {
  it('binds exactly one sufficiently authorized task for every preregistered family', () => {
    expect(validateTaskSet(canonical)).toMatchObject({ pass: true, task_count: 12, findings: [] });
  });

  it.each([
    ['missing task', (value) => value.tasks.pop()],
    ['duplicate family', (value) => { value.tasks[1].family = value.tasks[0].family; }],
    ['missing design-system authority', (value) => { value.tasks[0].design_system_authority = 'interview'; }],
    ['preselected brand reference', (value) => { value.tasks[0].prompt += ' Use Stripe as the reference.'; }],
    ['missing protected unknowns', (value) => { value.tasks[0].protected_unknowns = []; }],
    ['insufficient mutants', (value) => { value.tasks[0].targeted_mutants = ['one']; }],
  ])('rejects %s before provider execution', (_name, mutate) => {
    const value = clone();
    mutate(value);
    expect(validateTaskSet(value).pass).toBe(false);
  });
});
