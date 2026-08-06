import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const skill = readFileSync(join(root, 'skills/omd-update/SKILL.md'), 'utf8');
const pkg = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'));

describe('omd:update distribution contract', () => {
  it('ships the skill and uses the latest package as its executor', () => {
    expect(pkg.files).toContain('skills/omd-update');
    expect(skill).toContain('npx oh-my-design-cli@latest update');
  });

  it('fails closed instead of overwriting user-owned files', () => {
    expect(skill).toContain('Never add `--force`');
    expect(skill).toContain('Do not edit `DESIGN.md`');
    expect(skill).toContain('Do not install channels that were not already installed');
  });
});
