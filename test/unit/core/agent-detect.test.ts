import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { mkdtempSync, rmSync, mkdirSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import {
  detectCallingAgent,
  detectInstalledAgents,
} from '../../../src/core/agent-detect.js';

describe('agent-detect', () => {
  let root: string;
  const originalEnv = { ...process.env };

  beforeEach(() => {
    root = mkdtempSync(join(tmpdir(), 'omd-agent-'));
  });

  afterEach(() => {
    rmSync(root, { recursive: true, force: true });
    for (const k of [
      'CLAUDECODE',
      'CLAUDE_CODE',
      'CLAUDE_CODE_TASK_ID',
      'CODEX_SESSION_ID',
      'CODEX',
      'OPENAI_CODEX',
      'OPENCODE',
      'OPENCODE_SESSION',
      'CURSOR_SESSION_ID',
      'CURSOR_AGENT',
    ]) {
      delete process.env[k];
      if (originalEnv[k] !== undefined) process.env[k] = originalEnv[k];
    }
  });

  describe('detectCallingAgent', () => {
    it('returns unknown when no env vars are set', () => {
      delete process.env.CLAUDECODE;
      delete process.env.CLAUDE_CODE;
      delete process.env.CLAUDE_CODE_TASK_ID;
      delete process.env.CODEX_SESSION_ID;
      delete process.env.CODEX;
      delete process.env.OPENAI_CODEX;
      delete process.env.OPENCODE;
      delete process.env.OPENCODE_SESSION;
      delete process.env.CURSOR_SESSION_ID;
      delete process.env.CURSOR_AGENT;
      expect(detectCallingAgent()).toBe('unknown');
    });

    it('detects claude-code', () => {
      process.env.CLAUDECODE = '1';
      expect(detectCallingAgent()).toBe('claude-code');
    });

    it('detects codex', () => {
      delete process.env.CLAUDECODE;
      delete process.env.CLAUDE_CODE;
      delete process.env.CLAUDE_CODE_TASK_ID;
      process.env.CODEX_SESSION_ID = 'abc';
      expect(detectCallingAgent()).toBe('codex');
    });
  });

  describe('detectInstalledAgents', () => {
    it('all false on empty project', () => {
      const r = detectInstalledAgents(root);
      expect(r).toEqual({
        claudeCode: false,
        codex: false,
        opencode: false,
        cursor: false,
      });
    });

    it('detects via .claude/ dir', () => {
      mkdirSync(join(root, '.claude'));
      expect(detectInstalledAgents(root).claudeCode).toBe(true);
    });

    it('detects via existing AGENTS.md (codex signal)', () => {
      writeFileSync(join(root, 'AGENTS.md'), '# x', 'utf8');
      expect(detectInstalledAgents(root).codex).toBe(true);
    });

    it('detects opencode via opencode.json', () => {
      writeFileSync(join(root, 'opencode.json'), '{}', 'utf8');
      expect(detectInstalledAgents(root).opencode).toBe(true);
    });

    it('detects cursor via .cursor/ dir', () => {
      mkdirSync(join(root, '.cursor'));
      expect(detectInstalledAgents(root).cursor).toBe(true);
    });
  });
});
