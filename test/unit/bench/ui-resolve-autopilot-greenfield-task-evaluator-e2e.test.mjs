import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { cpSync, mkdtempSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { tmpdir } from 'node:os';
import { describe, expect, it } from 'vitest';

const enabled = process.env.RUN_UI_RESOLVE_BROWSER_E2E === '1';
const repoRoot = resolve(import.meta.dirname, '../../..');
const evaluator = join(repoRoot, 'benchmarks/ui-resolve-bench/scripts/evaluate-autopilot-greenfield-task.mjs');
const fixtureRoot = join(repoRoot, 'benchmarks/ui-resolve-bench/fixtures/autopilot-greenfield/neighborhood-library-landing');
const digest = (bytes) => createHash('sha256').update(bytes).digest('hex');

function evaluate(workspace, label, taskId = 'neighborhood-library-landing') {
  const outputRoot = mkdtempSync(join(tmpdir(), `omd-landing-eval-${label}-`));
  const out = join(outputRoot, 'score.json');
  execFileSync(process.execPath, [evaluator, '--task-id', taskId, '--workspace', workspace, '--out', out], {
    cwd: repoRoot,
    encoding: 'utf8',
    maxBuffer: 4 * 1024 * 1024,
  });
  return JSON.parse(readFileSync(out, 'utf8'));
}

function mutant(sourceName, label, transform, rootFixture = fixtureRoot) {
  const root = mkdtempSync(join(tmpdir(), `omd-landing-${label}-`));
  const workspace = join(root, label);
  mkdirSync(workspace, { recursive: true });
  cpSync(join(rootFixture, sourceName), workspace, { recursive: true });
  const entry = join(workspace, 'index.html');
  const original = readFileSync(entry, 'utf8');
  const changed = transform(original);
  expect(changed).not.toBe(original);
  writeFileSync(entry, changed);
  return workspace;
}

(enabled ? describe : describe.skip)('greenfield landing calibrated browser evaluator', () => {
  it('accepts two structurally distinct valid implementations', () => {
    const aPath = join(fixtureRoot, 'oracle-a');
    const bPath = join(fixtureRoot, 'oracle-b');
    const aBytes = readFileSync(join(aPath, 'index.html'));
    const bBytes = readFileSync(join(bPath, 'index.html'));
    expect(digest(aBytes)).not.toBe(digest(bBytes));
    expect(aBytes.toString()).not.toContain('<dialog');
    expect(bBytes.toString()).toContain('<dialog');
    expect(evaluate(aPath, 'oracle-a')).toMatchObject({ score: 100, ui_resolved: true });
    expect(evaluate(bPath, 'oracle-b')).toMatchObject({ score: 100, ui_resolved: true });
  }, 30_000);

  it('maps primary-action removal to the journey contract', () => {
    for (const source of ['oracle-a', 'oracle-b']) {
      const workspace = mutant(source, `cta-${source}`, (html) => html.replace(/>Reserve a tool<\//g, '>Browse tools</'));
      const result = evaluate(workspace, `cta-${source}`);
      expect(result.groups.journey.pass).toBe(false);
      expect(result.groups.responsive.pass).toBe(true);
      expect(result.groups.evidence_honesty.pass).toBe(true);
    }
  }, 30_000);

  it('maps a minimum-width defect to responsive failure', () => {
    for (const source of ['oracle-a', 'oracle-b']) {
      const workspace = mutant(source, `overflow-${source}`, (html) => html.replace('</style>', 'body { min-width: 641px !important; overflow-x: visible !important; }\n</style>'));
      const result = evaluate(workspace, `overflow-${source}`);
      expect(result.groups.journey.pass).toBe(true);
      expect(result.groups.responsive.pass).toBe(false);
      expect(result.groups.evidence_honesty.pass).toBe(true);
    }
  }, 30_000);

  it('maps invented social proof to evidence honesty failure', () => {
    for (const source of ['oracle-a', 'oracle-b']) {
      const workspace = mutant(source, `social-${source}`, (html) => html.replace('</main>', '<section aria-labelledby="testimonial-heading"><h2 id="testimonial-heading">Testimonials</h2><p>Trusted by 500 neighbors.</p></section>\n</main>'));
      const result = evaluate(workspace, `social-${source}`);
      expect(result.groups.journey.pass).toBe(true);
      expect(result.groups.responsive.pass).toBe(true);
      expect(result.groups.evidence_honesty.pass).toBe(false);
    }
  }, 30_000);
});
