import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import {
  mkdtempSync,
  rmSync,
  readFileSync,
  writeFileSync,
  existsSync,
  mkdirSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { runInstallSkills, dataDirFor } from '../../../src/cli/install-skills.js';

describe('install-skills', () => {
  let root: string;

  beforeEach(() => {
    root = mkdtempSync(join(tmpdir(), 'omd-installskills-'));
  });

  afterEach(() => {
    rmSync(root, { recursive: true, force: true });
  });

  it('installs all 5 skills × 3 agents when no agents detected (fallback)', async () => {
    const code = await runInstallSkills({ dir: root });
    expect(code).toBe(0);

    for (const skill of ['omd-init', 'omd-apply', 'omd-sync', 'omd-remember', 'omd-learn']) {
      expect(
        existsSync(join(root, '.claude/skills', skill, 'SKILL.md')),
        `claude/${skill}`
      ).toBe(true);
      expect(
        existsSync(join(root, '.agents/skills', skill, 'SKILL.md')),
        `codex/${skill}`
      ).toBe(true);
      expect(
        existsSync(join(root, '.opencode/skills', skill, 'SKILL.md')),
        `opencode/${skill}`
      ).toBe(true);
    }
  });

  it('installed files start with frontmatter, not the marker (issue #17)', async () => {
    await runInstallSkills({ dir: root });
    const path = join(root, '.claude/skills/omd-init/SKILL.md');
    const content = readFileSync(path, 'utf8');

    // Line 1 must be the YAML frontmatter fence so Claude Code reads the
    // skill's own name/description — NOT the HTML managed marker.
    expect(content.startsWith('---\n')).toBe(true);

    // Frontmatter name/description belong to the skill itself.
    const fm = /^---\n([\s\S]*?)\n---/.exec(content)![1];
    expect(/^name:\s*omd:init\b/m.test(fm)).toBe(true);
    const desc = /^description:\s*(.+)$/m.exec(fm)![1];
    expect(desc).not.toContain('omd:installed-skill');

    // The marker still ships — just after the frontmatter block.
    const afterFm = content.slice(content.indexOf('\n---\n') + 5);
    expect(afterFm.startsWith('<!-- omd:installed-skill')).toBe(true);
  });

  it('installs omd-taste with frontmatter-first format (issue #25)', async () => {
    await runInstallSkills({ dir: root, agents: ['claude-code'] });
    const path = join(root, '.claude/skills/omd-taste/SKILL.md');
    expect(existsSync(path), 'omd-taste installed').toBe(true);
    const content = readFileSync(path, 'utf8');

    // Line 1 must be the YAML frontmatter fence (issue #17 contract applies to
    // every shipped skill — omd-taste included).
    expect(content.startsWith('---\n')).toBe(true);
    const fm = /^---\n([\s\S]*?)\n---/.exec(content)![1];
    expect(/^name:\s*omd:taste\b/m.test(fm)).toBe(true);
    const desc = /^description:\s*(.+)$/m.exec(fm)![1];
    expect(desc).not.toContain('omd:installed-skill');
    expect(desc).toContain('내 취향');

    // The managed marker ships right after the frontmatter block.
    const afterFm = content.slice(content.indexOf('\n---\n') + 5);
    expect(afterFm.startsWith('<!-- omd:installed-skill')).toBe(true);
  });

  it('refreshes legacy line-1-marker files instead of skipping them as drift', async () => {
    // Simulate a pre-v1.7.2 install: marker on line 1, frontmatter pushed down.
    const target = join(root, '.claude/skills/omd-init/SKILL.md');
    mkdirSync(join(root, '.claude/skills/omd-init'), { recursive: true });
    const legacy =
      '<!-- omd:installed-skill — managed by `omd install-skills`. Do not edit; rerun the command to refresh. -->\n\n' +
      '---\nname: omd:init\ndescription: stale\n---\n\n# old body\n';
    writeFileSync(target, legacy, 'utf8');

    await runInstallSkills({ dir: root, agents: ['claude-code'] });
    const after = readFileSync(target, 'utf8');

    // Detected as managed → refreshed to the new (frontmatter-first) format.
    expect(after).not.toBe(legacy);
    expect(after.startsWith('---\n')).toBe(true);
  });

  it('respects --agents filter', async () => {
    await runInstallSkills({ dir: root, agents: ['claude-code'] });
    expect(existsSync(join(root, '.claude/skills'))).toBe(true);
    expect(existsSync(join(root, '.agents/skills'))).toBe(false);
    expect(existsSync(join(root, '.opencode/skills'))).toBe(false);
  });

  it('is idempotent — second run reports unchanged', async () => {
    await runInstallSkills({ dir: root, agents: ['claude-code'] });
    const path = join(root, '.claude/skills/omd-init/SKILL.md');
    const beforeMtime = (await import('node:fs')).statSync(path).mtimeMs;
    await new Promise((r) => setTimeout(r, 5));
    await runInstallSkills({ dir: root, agents: ['claude-code'] });
    const afterMtime = (await import('node:fs')).statSync(path).mtimeMs;
    expect(afterMtime).toBe(beforeMtime);
  });

  it('skips drift on existing user-edited files without marker', async () => {
    const target = join(root, '.claude/skills/omd-init/SKILL.md');
    mkdirSync(join(root, '.claude/skills/omd-init'), { recursive: true });
    writeFileSync(target, '# user wrote this manually\n', 'utf8');

    await runInstallSkills({ dir: root, agents: ['claude-code'] });
    const after = readFileSync(target, 'utf8');
    expect(after).toBe('# user wrote this manually\n');
  });

  it('overwrites drift when --force', async () => {
    const target = join(root, '.claude/skills/omd-init/SKILL.md');
    mkdirSync(join(root, '.claude/skills/omd-init'), { recursive: true });
    writeFileSync(target, '# user wrote this\n', 'utf8');

    await runInstallSkills({ dir: root, agents: ['claude-code'], force: true });
    const after = readFileSync(target, 'utf8');
    expect(after.startsWith('---\n')).toBe(true);
    expect(after).toContain('<!-- omd:installed-skill');
  });

  it('copies the reference catalog DESIGN.md into .claude/data/references (issue #16)', async () => {
    await runInstallSkills({ dir: root, agents: ['claude-code'] });
    // toss is a known reference id in web/references — its DESIGN.md must land
    // where omd:init resolution step 1 looks.
    const tossDesign = join(root, '.claude/data/references/toss/DESIGN.md');
    expect(existsSync(tossDesign), 'toss DESIGN.md copied').toBe(true);
    // Only DESIGN.md per id — keep install lean (no _promo.json/_research.md).
    expect(existsSync(join(root, '.claude/data/references/toss/_promo.json'))).toBe(false);
    // ctx-prime helper copied so harness CTX-PRIME works without the package dir.
    expect(existsSync(join(root, '.claude/data/scripts/ctx-prime.cjs'))).toBe(true);
  });

  it('skips the reference catalog under --skills-only', async () => {
    await runInstallSkills({
      dir: root,
      agents: ['claude-code'],
      skillsFilter: ['omd-init'],
      skillsOnly: true,
    });
    expect(existsSync(join(root, '.claude/data/references'))).toBe(false);
  });

  it('cursor channel installs the .cursor/rules shim + shared catalog (issue #20)', async () => {
    const code = await runInstallSkills({ dir: root, agents: ['cursor'] });
    expect(code).toBe(0);

    // The shim mirrors omd:sync's cursor template — frontmatter first, then
    // the hash-marked body block.
    const rule = join(root, '.cursor/rules/omd-design.mdc');
    expect(existsSync(rule), 'cursor rule shim').toBe(true);
    const content = readFileSync(rule, 'utf8');
    expect(content.startsWith('---\n')).toBe(true);
    expect(content).toMatch(/<!-- omd:start v=1 hash=[0-9a-f]{12} -->/);
    expect(content).toContain('`@DESIGN.md`');
    expect(content).toContain('<!-- omd:end -->');

    // Catalog + data JSONs land in the single shared path (.claude/data) —
    // cursor agents read it; no second catalog location is invented.
    expect(existsSync(join(root, '.claude/data/references/toss/DESIGN.md'))).toBe(true);
    expect(existsSync(join(root, '.claude/data/reference-fingerprints.json'))).toBe(true);

    // No Claude-specific surfaces for a cursor-only install.
    expect(existsSync(join(root, '.claude/skills'))).toBe(false);
    expect(existsSync(join(root, '.claude/hooks'))).toBe(false);
    expect(existsSync(join(root, '.claude/settings.json'))).toBe(false);
    expect(existsSync(join(root, '.claude/agents'))).toBe(false);
  });

  it('cursor + claude-code combined install does not double-copy the catalog (issue #28)', async () => {
    const code = await runInstallSkills({ dir: root, agents: ['claude-code', 'cursor'] });
    expect(code).toBe(0);

    // Catalog + data JSONs land in the single shared .claude/data path,
    // written by the claude-code pass only — the cursor pass is deduped.
    expect(existsSync(join(root, '.claude/data/references/toss/DESIGN.md'))).toBe(true);
    expect(existsSync(join(root, '.claude/data/reference-fingerprints.json'))).toBe(true);
    // No second catalog location is invented for cursor.
    expect(existsSync(join(root, '.cursor/data'))).toBe(false);
    expect(existsSync(join(root, '.codex/data'))).toBe(false);

    // The dedup guard itself: cursor resolves to NO data dir when claude-code
    // is also selected (its pass already wrote .claude/data); standalone cursor
    // resolves to the shared .claude path.
    expect(dataDirFor('cursor', ['claude-code', 'cursor'])).toBe(null);
    expect(dataDirFor('cursor', ['cursor'])).toBe('.claude');
  });

  it('cursor shim respects drift on user-written rule files without the marker', async () => {
    const rule = join(root, '.cursor/rules/omd-design.mdc');
    mkdirSync(join(root, '.cursor/rules'), { recursive: true });
    writeFileSync(rule, '# my own cursor rule\n', 'utf8');

    await runInstallSkills({ dir: root, agents: ['cursor'] });
    expect(readFileSync(rule, 'utf8')).toBe('# my own cursor rule\n');

    await runInstallSkills({ dir: root, agents: ['cursor'], force: true });
    expect(readFileSync(rule, 'utf8')).toContain('<!-- omd:start v=1 hash=');
  });

  it('detects installed agents and installs only for those (when present)', async () => {
    mkdirSync(join(root, '.claude'));
    // Codex/OpenCode not installed → only Claude should get skills
    await runInstallSkills({ dir: root });
    expect(existsSync(join(root, '.claude/skills/omd-init/SKILL.md'))).toBe(true);
    expect(existsSync(join(root, '.agents/skills'))).toBe(false);
    expect(existsSync(join(root, '.opencode/skills'))).toBe(false);
  });
});
