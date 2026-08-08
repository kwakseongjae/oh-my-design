import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { harnessContextPlannerSelfTestIssue } from '../../../src/cli/doctor.js';

describe('doctor harness context planner self-test', () => {
  let root: string;
  let dataRoot: string;
  let helperPath: string;

  beforeEach(() => {
    root = mkdtempSync(join(tmpdir(), 'omd-doctor-planner-'));
    dataRoot = join(root, '.codex/data');
    helperPath = join(dataRoot, 'scripts/design-harness-context-plan.cjs');
    mkdirSync(join(dataRoot, 'scripts'), { recursive: true });
  });

  afterEach(() => {
    rmSync(root, { recursive: true, force: true });
  });

  it('executes the byte-identical packaged helper and accepts the fixed ready plan', () => {
    writeFileSync(
      helperPath,
      readFileSync(join(process.cwd(), 'scripts/design-harness-context-plan.cjs'), 'utf8'),
      'utf8',
    );
    expect(harnessContextPlannerSelfTestIssue(root, dataRoot)).toBeNull();
  });

  it('never executes a locally modified helper', () => {
    const sentinel = join(root, 'must-not-exist');
    writeFileSync(
      helperPath,
      `require('node:fs').writeFileSync(${JSON.stringify(sentinel)}, 'executed');\n`,
      'utf8',
    );
    expect(harnessContextPlannerSelfTestIssue(root, dataRoot)).toBe(
      'installed harness context planner differs from the packaged source',
    );
    expect(existsSync(sentinel)).toBe(false);
  });
});
