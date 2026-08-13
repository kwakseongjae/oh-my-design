import { afterEach, describe, expect, it, vi } from 'vitest';
import { mkdirSync, mkdtempSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const generator = require('../../../scripts/gen-llms-full.cjs');
const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), '../../..');

describe.sequential('llms public artifact generation', () => {
  let root;

  afterEach(() => {
    generator.configureRoot(repositoryRoot);
    if (root) rmSync(root, { recursive: true, force: true });
    root = undefined;
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it('keeps two writes byte-identical until a canonical source changes', () => {
    root = mkdtempSync(join(tmpdir(), 'omd-llms-write-'));
    const files = {
      'README.md': '# Readme\n',
      'CHANGELOG.md': '# Changes\n',
      'skills/omd-autopilot/SKILL.md': '# Autopilot\n',
      'skills/omd-harness/SKILL.md': '# Harness\n',
      'skills/omd-apply/SKILL.md': '# Apply\n',
      'skills/omd-init/SKILL.md': '# Init\n',
      'agents/omd-master.md': '# Master\n',
      'spec/design-md-core-v2.md': '# Core v2 spec\n',
      'web/references/test/DESIGN.md': '# Test\n\nA useful reference.\n',
      'web/public/llms.txt': '# llms\n\n## Resources\n',
    };
    for (const [relative, content] of Object.entries(files)) {
      const target = join(root, relative);
      mkdirSync(dirname(target), { recursive: true });
      writeFileSync(target, content);
    }
    generator.configureRoot(root);
    vi.spyOn(process.stdout, 'write').mockImplementation(() => true);
    vi.useFakeTimers();

    vi.setSystemTime(new Date('2026-01-01T00:00:00.000Z'));
    expect(generator.main(['--repo-root', root])).toBe(0);
    const llmsFull = join(root, 'web/public/llms-full.txt');
    const first = readFileSync(llmsFull, 'utf8');
    expect(generator.embeddedGeneratedAt(first)).toBe('2026-01-01T00:00:00.000Z');

    vi.setSystemTime(new Date('2026-01-02T00:00:00.000Z'));
    expect(generator.main(['--repo-root', root])).toBe(0);
    expect(readFileSync(llmsFull, 'utf8')).toBe(first);

    writeFileSync(join(root, 'README.md'), '# Changed readme\n');
    expect(generator.main(['--repo-root', root])).toBe(0);
    const changed = readFileSync(llmsFull, 'utf8');
    expect(changed).not.toBe(first);
    expect(generator.embeddedGeneratedAt(changed)).toBe('2026-01-02T00:00:00.000Z');

    vi.setSystemTime(new Date('2026-01-03T00:00:00.000Z'));
    expect(generator.main(['--repo-root', root])).toBe(0);
    expect(readFileSync(llmsFull, 'utf8')).toBe(changed);
  });

  it('check-only detects drift without writing either public file', () => {
    root = mkdtempSync(join(tmpdir(), 'omd-llms-check-'));
    const files = {
      'README.md': '# Readme\n',
      'CHANGELOG.md': '# Changes\n',
      'skills/omd-autopilot/SKILL.md': '# Autopilot\n',
      'skills/omd-harness/SKILL.md': '# Harness\n',
      'skills/omd-apply/SKILL.md': '# Apply\n',
      'skills/omd-init/SKILL.md': '# Init\n',
      'agents/omd-master.md': '# Master\n',
      'spec/design-md-core-v2.md': '# Core v2 spec\n',
      'web/references/test/DESIGN.md': '# Test\n\nA useful reference.\n',
      'web/public/llms.txt': '# llms\n\n## Resources\n',
    };
    for (const [relative, content] of Object.entries(files)) {
      const target = join(root, relative);
      mkdirSync(dirname(target), { recursive: true });
      writeFileSync(target, content);
    }
    generator.configureRoot(root);
    const llmsTxt = join(root, 'web/public/llms.txt');
    writeFileSync(llmsTxt, generator.renderLlmsTxt(readFileSync(llmsTxt, 'utf8')));
    const llmsFull = join(root, 'web/public/llms-full.txt');
    writeFileSync(llmsFull, generator.buildLlmsFull('2026-01-01T00:00:00.000Z'));

    const before = {
      full: readFileSync(llmsFull),
      txt: readFileSync(llmsTxt),
      fullMtime: statSync(llmsFull).mtimeMs,
      txtMtime: statSync(llmsTxt).mtimeMs,
    };
    vi.spyOn(process.stdout, 'write').mockImplementation(() => true);
    vi.spyOn(process.stderr, 'write').mockImplementation(() => true);

    expect(generator.main(['--check-only', '--repo-root', root])).toBe(0);
    writeFileSync(join(root, 'README.md'), '# Changed readme\n');
    expect(generator.main(['--check-only', '--repo-root', root])).toBe(1);

    expect(readFileSync(llmsFull)).toEqual(before.full);
    expect(readFileSync(llmsTxt)).toEqual(before.txt);
    expect(statSync(llmsFull).mtimeMs).toBe(before.fullMtime);
    expect(statSync(llmsTxt).mtimeMs).toBe(before.txtMtime);
  });
});
