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
    // Canonical omd:remember format: ## heading + ```omd-meta fenced block.
    function prefEntry(opts: {
      ts: string;
      scope: string;
      status?: string;
      slug?: string;
      confidence?: string;
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
        'Some preference body.',
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
});
