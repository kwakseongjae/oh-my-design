import { afterEach, describe, expect, it } from 'vitest';
import {
  existsSync,
  mkdtempSync,
  readdirSync,
  readFileSync,
  rmSync,
  statSync,
  utimesSync,
  writeFileSync,
} from 'node:fs';
import { createHash } from 'node:crypto';
import { tmpdir } from 'node:os';
import { join, relative } from 'node:path';
import { runInstallSkills, postInstallGuidance } from '../../../src/cli/install-skills.js';
import { collectDoctorReport } from '../../../src/cli/doctor.js';
import {
  loadWorkflowManifest,
  selectWorkflowDecision,
  type WorkflowLanguage,
} from '../../../src/cli/workflows.js';

describe('time-compressed activation reuse', () => {
  const roots: string[] = [];

  afterEach(() => {
    for (const root of roots) {
      if (existsSync(root)) rmSync(root, { recursive: true, force: true });
    }
    roots.length = 0;
  });

  function filesUnder(root: string, dir = root): string[] {
    return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
      const path = join(dir, entry.name);
      return entry.isDirectory() ? filesUnder(root, path) : [path];
    });
  }

  function contentTreeHash(root: string): string {
    const hash = createHash('sha256');
    for (const file of filesUnder(root).sort()) {
      hash.update(relative(root, file));
      hash.update('\0');
      hash.update(readFileSync(file));
      hash.update('\0');
    }
    return hash.digest('hex');
  }

  function ageTree(root: string, ageMs: number): void {
    const aged = new Date(Date.now() - ageMs);
    for (const file of filesUnder(root)) {
      const stat = statSync(file);
      utimesSync(file, aged, aged);
      expect(stat.isFile()).toBe(true);
    }
  }

  it('keeps every channel ready and byte-stable after a simulated day-8 return', async () => {
    const channels = ['claude-code', 'codex', 'opencode', 'cursor'] as const;
    const locales: WorkflowLanguage[] = ['en', 'ko', 'ja', 'zh-CN', 'zh-TW'];
    const manifest = loadWorkflowManifest();
    const eightDaysMs = 8 * 24 * 60 * 60 * 1000;

    for (const channel of channels) {
      const root = mkdtempSync(join(tmpdir(), `omd-d8-${channel}-`));
      roots.push(root);
      expect(await runInstallSkills({
        dir: root,
        agents: [channel],
        all: true,
        lang: channel === 'cursor' ? 'ja' : 'ko',
      })).toBe(0);
      writeFileSync(join(root, 'DESIGN.md'), '# Project design\n');

      const day0Hash = contentTreeHash(root);
      expect(collectDoctorReport({ dir: root }).state).toBe('ready');

      ageTree(root, eightDaysMs);
      expect(contentTreeHash(root)).toBe(day0Hash);
      expect(collectDoctorReport({ dir: root }).state).toBe('ready');

      for (const locale of locales) {
        const guidance = postInstallGuidance(locale, {
          cursorOnly: channel === 'cursor',
        });
        expect(guidance.body).toContain('DESIGN.md');
        const routed = selectWorkflowDecision(
          locale === 'ko'
            ? 'DESIGN.md를 기준으로 기존 가격 화면을 수정해줘'
            : locale === 'ja'
              ? 'DESIGN.mdを基準に既存の料金画面を修正してください'
              : locale === 'zh-CN'
                ? '按照 DESIGN.md 修改现有价格页面'
                : locale === 'zh-TW'
                  ? '依照 DESIGN.md 修改現有價格頁面'
                  : 'Use DESIGN.md to repair the existing pricing page',
          manifest,
        );
        expect(routed.workflow.id, `${channel}/${locale}`).toBe('repair-existing-ui');
        expect(routed.ambiguous, `${channel}/${locale}`).toBe(false);
      }

      expect(await runInstallSkills({
        dir: root,
        agents: [channel],
        all: true,
        lang: channel === 'cursor' ? 'ja' : 'ko',
      })).toBe(0);
      expect(contentTreeHash(root)).toBe(day0Hash);
      expect(collectDoctorReport({ dir: root }).state).toBe('ready');
    }
  }, 30_000);
});
