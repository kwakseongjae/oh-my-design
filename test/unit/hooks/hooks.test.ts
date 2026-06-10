import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { spawnSync } from 'node:child_process';
import {
  mkdtempSync,
  rmSync,
  mkdirSync,
  writeFileSync,
  readFileSync,
  existsSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';

// Hooks are plain CommonJS scripts run by Claude Code with a JSON payload on
// stdin. We exercise them exactly that way: spawn node, pipe a realistic
// payload, assert stdout / file effects. CLAUDE_PROJECT_DIR points at a tmp
// project so the hooks read/write isolated state.

const HOOKS_DIR = resolve(__dirname, '../../../.claude/hooks');

function runHook(
  name: string,
  payload: unknown,
  projectDir: string,
  rawStdin?: string,
): { stdout: string; status: number | null } {
  const input = rawStdin !== undefined ? rawStdin : JSON.stringify(payload);
  const res = spawnSync('node', [join(HOOKS_DIR, name)], {
    input,
    encoding: 'utf8',
    env: { ...process.env, CLAUDE_PROJECT_DIR: projectDir },
  });
  return { stdout: res.stdout, status: res.status };
}

describe('hooks', () => {
  let root: string;

  beforeEach(() => {
    root = mkdtempSync(join(tmpdir(), 'omd-hooks-'));
  });
  afterEach(() => {
    rmSync(root, { recursive: true, force: true });
  });

  // Canonical omd:remember format: ## heading + ```omd-meta fenced block.
  function prefEntry(opts: {
    ts: string;
    scope: string;
    status?: string;
    slug?: string;
    confidence?: string;
    body?: string;
  }) {
    return [
      `## ${opts.ts} — ${opts.slug ?? 'entry'}`,
      '',
      '```omd-meta',
      `id: pref_${Math.random().toString(36).slice(2)}`,
      `timestamp: ${opts.ts}`,
      `scope: ${opts.scope}`,
      'signal: user-statement',
      `confidence: ${opts.confidence ?? 'explicit'}`,
      `status: ${opts.status ?? 'pending'}`,
      'source_agent: claude-code',
      '```',
      '',
      opts.body ?? 'Some preference body.',
      '',
    ].join('\n');
  }

  function writePrefs(entries: string[]) {
    mkdirSync(join(root, '.omd'), { recursive: true });
    const text =
      '---\nschema: omd.preferences/v1\ndesign_md_hash_at_creation:\n---\n\n# Preference Log\n\n' +
      entries.join('\n');
    writeFileSync(join(root, '.omd', 'preferences.md'), text);
  }

  describe('post-edit-watch.cjs', () => {
    it('reads snake_case tool_input and emits hookSpecificOutput.additionalContext', () => {
      // No DESIGN.md → every introduced hex is "off-system".
      const { stdout } = runHook(
        'post-edit-watch.cjs',
        {
          tool_name: 'Edit',
          tool_input: {
            file_path: 'src/components/Button.tsx',
            new_string: 'const c = "#ff0000";',
          },
        },
        root,
      );
      expect(stdout).not.toBe('');
      const out = JSON.parse(stdout);
      expect(out.hookSpecificOutput).toBeTruthy();
      expect(out.hookSpecificOutput.hookEventName).toBe('PostToolUse');
      expect(out.hookSpecificOutput.additionalContext).toContain('#ff0000');
      // Must NOT use the dropped top-level shape.
      expect(out.additionalContext).toBeUndefined();
    });

    it('exits silently on non-design file', () => {
      const { stdout } = runHook(
        'post-edit-watch.cjs',
        {
          tool_name: 'Edit',
          tool_input: { file_path: 'README.md', new_string: '#ff0000' },
        },
        root,
      );
      expect(stdout).toBe('');
    });

    it('does not crash on malformed stdin', () => {
      const { status } = runHook('post-edit-watch.cjs', null, root, 'not json{');
      expect(status).toBe(0);
    });
  });

  describe('skill-activation.cjs', () => {
    function payload(prompt: string, extra: Record<string, unknown> = {}) {
      return { prompt, cwd: '/Users/me/projects/design-studio', transcript_path: '/tmp/style.jsonl', ...extra };
    }

    it('fires the gate for UI prompts when DESIGN.md is absent', () => {
      const { stdout } = runHook(
        'skill-activation.cjs',
        payload('이 버튼 컴포넌트 디자인 다시 잡아줘'),
        root,
      );
      const out = JSON.parse(stdout);
      expect(out.hookSpecificOutput.hookEventName).toBe('UserPromptSubmit');
      expect(out.hookSpecificOutput.additionalContext).toContain('OMD GATE');
      expect(out.additionalContext).toBeUndefined();
    });

    it('does NOT fire on cwd/transcript paths containing design/style', () => {
      // prompt is non-UI; the design-studio cwd + style.jsonl path must be ignored.
      const { stdout } = runHook(
        'skill-activation.cjs',
        payload('what is 2 + 2?'),
        root,
      );
      expect(stdout).toBe('');
    });

    it('uses word boundaries — "discard" does not match cue "card"', () => {
      const { stdout } = runHook(
        'skill-activation.cjs',
        payload('please discard the previous changes'),
        root,
      );
      expect(stdout).toBe('');
    });

    it('cue is 색상 not bare 색 — "검색" does not trip the gate', () => {
      const { stdout } = runHook(
        'skill-activation.cjs',
        payload('데이터베이스에서 사용자 검색 기능 추가해줘'),
        root,
      );
      expect(stdout).toBe('');
    });

    it('stays silent when DESIGN.md exists', () => {
      writeFileSync(join(root, 'DESIGN.md'), '# design');
      const { stdout } = runHook(
        'skill-activation.cjs',
        payload('버튼 디자인 해줘'),
        root,
      );
      expect(stdout).toBe('');
    });

    it('does not crash on malformed stdin', () => {
      const { status, stdout } = runHook('skill-activation.cjs', null, root, '<<<bad');
      expect(status).toBe(0);
      expect(stdout).toBe('');
    });
  });

  describe('preferences parser (foldin / state-loader)', () => {
    it('state-loader counts pending entries from the canonical format', () => {
      const now = new Date().toISOString();
      writePrefs([
        prefEntry({ ts: now, scope: 'components.button', slug: 'a' }),
        prefEntry({ ts: now, scope: 'color', slug: 'b' }),
        prefEntry({ ts: now, scope: 'color', slug: 'c', status: 'applied' }),
      ]);
      const { stdout } = runHook('session-state-loader.cjs', {}, root);
      const out = JSON.parse(stdout);
      expect(out.hookSpecificOutput.hookEventName).toBe('SessionStart');
      expect(out.hookSpecificOutput.additionalContext).toContain('Pending preferences: 2');
      expect(out.additionalContext).toBeUndefined();
    });

    it('foldin emits a proposal when a scope recurs ≥3× in window', () => {
      const now = Date.now();
      const iso = (offsetDays: number) =>
        new Date(now - offsetDays * 86400000).toISOString();
      writePrefs([
        prefEntry({ ts: iso(0), scope: 'components.button', slug: 'a' }),
        prefEntry({ ts: iso(1), scope: 'components.button', slug: 'b' }),
        prefEntry({ ts: iso(2), scope: 'components.button', slug: 'c' }),
      ]);
      runHook('session-end-foldin.cjs', {}, root);
      const timeline = join(root, '.omd', 'timeline.md');
      expect(existsSync(timeline)).toBe(true);
      const text = readFileSync(timeline, 'utf8');
      expect(text).toContain('fold_in_proposal');
      expect(text).toContain('components.button');
    });

    it('foldin does NOT fire for a single non-recurring entry', () => {
      writePrefs([
        prefEntry({ ts: new Date().toISOString(), scope: 'color', slug: 'a' }),
      ]);
      runHook('session-end-foldin.cjs', {}, root);
      expect(existsSync(join(root, '.omd', 'timeline.md'))).toBe(false);
    });
  });

  describe('auto-fold gate — foldin-proposal.json (issue #23)', () => {
    const proposalPath = () => join(root, '.omd', 'foldin-proposal.json');
    const iso = (offsetDays: number) =>
      new Date(Date.now() - offsetDays * 86400000).toISOString();

    function writeRecurringPrefs(body = 'CTAs are pill-shaped') {
      writePrefs([
        prefEntry({ ts: iso(2), scope: 'components.button', slug: 'a', body }),
        prefEntry({ ts: iso(1), scope: 'components.button', slug: 'b', body }),
        prefEntry({ ts: iso(0), scope: 'components.button', slug: 'c', body }),
      ]);
    }

    it('writes the proposal file when a scope crosses the threshold', () => {
      writeRecurringPrefs();
      runHook('session-end-foldin.cjs', {}, root);
      expect(existsSync(proposalPath())).toBe(true);
      const proposal = JSON.parse(readFileSync(proposalPath(), 'utf8'));
      expect(proposal.status).toBe('proposed');
      expect(proposal.created_at).toBeTruthy();
      expect(proposal.scopes).toHaveLength(1);
      const s = proposal.scopes[0];
      expect(s.scope).toBe('components.button');
      expect(s.count).toBe(3);
      expect(s.score).toBeGreaterThanOrEqual(60);
      expect(s.entry_ids).toHaveLength(3);
      // summary = 1 line from the latest entry's body
      expect(s.summary).toBe('CTAs are pill-shaped');
      // internal bookkeeping must not leak into the artifact
      expect(s.latestTs).toBeUndefined();
    });

    it('does NOT write a proposal below the threshold', () => {
      writePrefs([
        prefEntry({ ts: iso(0), scope: 'color', slug: 'a' }),
      ]);
      runHook('session-end-foldin.cjs', {}, root);
      expect(existsSync(proposalPath())).toBe(false);
    });

    it('state-loader injects the AskUserQuestion instruction for a proposed file', () => {
      mkdirSync(join(root, '.omd'), { recursive: true });
      writeFileSync(
        proposalPath(),
        JSON.stringify({
          created_at: new Date().toISOString(),
          status: 'proposed',
          scopes: [
            {
              scope: 'components.button',
              count: 3,
              score: 92,
              entry_ids: ['pref_a', 'pref_b', 'pref_c'],
              summary: 'CTAs are pill-shaped',
            },
          ],
        }),
      );
      const { stdout } = runHook('session-state-loader.cjs', {}, root);
      const out = JSON.parse(stdout);
      expect(out.hookSpecificOutput.hookEventName).toBe('SessionStart');
      const ctx = out.hookSpecificOutput.additionalContext;
      expect(ctx).toContain('OMD FOLD-IN PROPOSAL');
      expect(ctx).toContain('AskUserQuestion');
      expect(ctx).toContain('components.button: CTAs are pill-shaped (3×)');
      expect(ctx).toContain('전부 반영');
      expect(ctx).toContain('나중에');
      expect(ctx).toContain('omd:learn');
    });

    it('does NOT re-inject a snoozed proposal', () => {
      mkdirSync(join(root, '.omd'), { recursive: true });
      writeFileSync(
        proposalPath(),
        JSON.stringify({
          created_at: new Date().toISOString(),
          status: 'snoozed',
          snoozed_at: new Date().toISOString(),
          scopes: [{ scope: 'color', count: 3, score: 80, entry_ids: [], summary: 'x' }],
        }),
      );
      const { stdout } = runHook('session-state-loader.cjs', {}, root);
      expect(stdout).not.toContain('OMD FOLD-IN PROPOSAL');
    });

    it('leaves a snoozed proposal alone when no scope gained new entries', () => {
      writeRecurringPrefs();
      const snoozed = {
        created_at: iso(3),
        status: 'snoozed',
        snoozed_at: new Date(Date.now() + 60000).toISOString(), // after all entries
        scopes: [],
      };
      mkdirSync(join(root, '.omd'), { recursive: true });
      writeFileSync(proposalPath(), JSON.stringify(snoozed));
      runHook('session-end-foldin.cjs', {}, root);
      const after = JSON.parse(readFileSync(proposalPath(), 'utf8'));
      expect(after.status).toBe('snoozed');
    });

    it('re-proposes a snoozed proposal after new recurrence', () => {
      writeRecurringPrefs(); // latest entry is "now" — newer than snoozed_at below
      mkdirSync(join(root, '.omd'), { recursive: true });
      writeFileSync(
        proposalPath(),
        JSON.stringify({
          created_at: iso(3),
          status: 'snoozed',
          snoozed_at: iso(1.5), // entries at iso(1) and iso(0) are newer
          scopes: [],
        }),
      );
      runHook('session-end-foldin.cjs', {}, root);
      const after = JSON.parse(readFileSync(proposalPath(), 'utf8'));
      expect(after.status).toBe('proposed');
      expect(after.scopes[0].scope).toBe('components.button');
    });
  });

  describe('post-edit-watch ambient persistence (issue #24)', () => {
    const prefsPath = () => join(root, '.omd', 'preferences.md');

    function editPayload(filePath: string, newString: string) {
      return {
        tool_name: 'Edit',
        tool_input: { file_path: filePath, new_string: newString },
      };
    }

    it('persists detected hex drift in the canonical omd:remember format', () => {
      writeFileSync(join(root, 'DESIGN.md'), '## 2. Color Palette\n- #000000\n- #ffffff\n');
      const { stdout } = runHook(
        'post-edit-watch.cjs',
        editPayload('src/components/Button.tsx', 'const c = "#ff0000";'),
        root,
      );
      // alert kept (alert + record)
      expect(JSON.parse(stdout).hookSpecificOutput.additionalContext).toContain('#ff0000');
      const prefs = readFileSync(prefsPath(), 'utf8');
      expect(prefs).toContain('schema: omd.preferences/v1');
      expect(prefs).toContain('```omd-meta');
      expect(prefs).toMatch(/id: pref_[a-z0-9]+_[0-9a-f]{8}/);
      expect(prefs).toContain('scope: color');
      expect(prefs).toContain('signal: ambient');
      expect(prefs).toContain('confidence: inferred');
      expect(prefs).toContain('status: pending');
      expect(prefs).toContain('source_context: "src/components/Button.tsx"');
      expect(prefs).toContain('#ff0000');
    });

    it('dedups same scope + same body within 24h (one entry across two edits)', () => {
      writeFileSync(join(root, 'DESIGN.md'), '- #000000\n');
      const payload = editPayload('src/App.tsx', 'bg = "#ff0000"');
      runHook('post-edit-watch.cjs', payload, root);
      runHook('post-edit-watch.cjs', payload, root);
      const prefs = readFileSync(prefsPath(), 'utf8');
      expect(prefs.match(/```omd-meta/g)).toHaveLength(1);
    });

    it('never records while editing DESIGN.md / .claude/ / .omd/ files', () => {
      writeFileSync(join(root, 'DESIGN.md'), '- #000000\n');
      runHook('post-edit-watch.cjs', editPayload('DESIGN.md', '#ff0000'), root);
      runHook(
        'post-edit-watch.cjs',
        editPayload('.claude/hooks/foo.css', 'a { color: #ff0000; }'),
        root,
      );
      runHook(
        'post-edit-watch.cjs',
        editPayload('.omd/scratch.css', 'a { color: #ff0000; }'),
        root,
      );
      expect(existsSync(prefsPath())).toBe(false);
    });

    it('detects radius drift against the DESIGN.md radius scale', () => {
      writeFileSync(
        join(root, 'DESIGN.md'),
        '## 4. Component Stylings\n- Radius: 4px\n- Radius: 2px\n- #000000\n',
      );
      const { stdout } = runHook(
        'post-edit-watch.cjs',
        editPayload(
          'src/Card.tsx',
          '<div className="rounded-2xl rounded-sm" />', // sm(2px) on-scale, 2xl(16px) off
        ),
        root,
      );
      const ctx = JSON.parse(stdout).hookSpecificOutput.additionalContext;
      expect(ctx).toContain('rounded-2xl(16px)');
      expect(ctx).not.toContain('rounded-sm');
      const prefs = readFileSync(prefsPath(), 'utf8');
      expect(prefs).toContain('scope: visualTheme');
      expect(prefs).toContain('rounded-2xl(16px)');
    });

    it('detects motion drift against the DESIGN.md motion section', () => {
      writeFileSync(
        join(root, 'DESIGN.md'),
        '## 15. Motion & Easing\n- motion-fast: 150ms\n- motion-standard: 250ms\n',
      );
      const { stdout } = runHook(
        'post-edit-watch.cjs',
        editPayload(
          'src/Sheet.tsx',
          '<div className="duration-700 duration-150" />', // 150 on-scale, 700 off
        ),
        root,
      );
      const ctx = JSON.parse(stdout).hookSpecificOutput.additionalContext;
      expect(ctx).toContain('duration-700(700ms)');
      expect(ctx).not.toContain('duration-150(');
      const prefs = readFileSync(prefsPath(), 'utf8');
      expect(prefs).toContain('scope: motion');
      expect(prefs).toContain('duration-700(700ms)');
    });

    it('skips an axis silently when DESIGN.md has no parsable scale for it', () => {
      // DESIGN.md has colors but no radius scale and no motion section.
      writeFileSync(join(root, 'DESIGN.md'), '- #000000\n');
      const { stdout } = runHook(
        'post-edit-watch.cjs',
        editPayload('src/Card.tsx', '<div className="rounded-2xl duration-700" />'),
        root,
      );
      expect(stdout).toBe('');
      expect(existsSync(prefsPath())).toBe(false);
    });
  });
});
