import { existsSync } from 'node:fs';
import { join } from 'node:path';

export type AgentId = 'claude-code' | 'codex' | 'opencode' | 'cursor' | 'unknown';

export function detectCallingAgent(): AgentId {
  const env = process.env;

  if (env.CLAUDECODE === '1' || env.CLAUDE_CODE === '1' || env.CLAUDE_CODE_TASK_ID) {
    return 'claude-code';
  }
  if (env.CODEX_SESSION_ID || env.CODEX || env.OPENAI_CODEX) {
    return 'codex';
  }
  if (env.OPENCODE || env.OPENCODE_SESSION) {
    return 'opencode';
  }
  if (env.CURSOR_SESSION_ID || env.CURSOR_AGENT) {
    return 'cursor';
  }

  return 'unknown';
}

export interface AgentPresence {
  claudeCode: boolean;
  codex: boolean;
  opencode: boolean;
  cursor: boolean;
}

export function detectInstalledAgents(projectRoot: string): AgentPresence {
  return {
    claudeCode:
      existsSync(join(projectRoot, '.claude')) ||
      existsSync(join(projectRoot, 'CLAUDE.md')),
    codex:
      existsSync(join(projectRoot, '.codex')) ||
      existsSync(join(projectRoot, 'AGENTS.md')) ||
      existsSync(join(projectRoot, 'AGENTS.override.md')),
    opencode:
      existsSync(join(projectRoot, '.opencode')) ||
      existsSync(join(projectRoot, 'opencode.json')) ||
      existsSync(join(projectRoot, 'opencode.jsonc')),
    cursor:
      existsSync(join(projectRoot, '.cursor')) ||
      existsSync(join(projectRoot, '.cursorrules')),
  };
}
