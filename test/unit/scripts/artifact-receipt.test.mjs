import { afterEach, describe, expect, it } from 'vitest';
import { mkdirSync, mkdtempSync, readFileSync, rmSync, statSync, utimesSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createArtifactReceipt, verifyArtifactReceipt } from '../../../scripts/execution/artifact-receipt.mjs';

const roots = [];
afterEach(() => { for (const root of roots.splice(0)) rmSync(root, { recursive: true, force: true }); });

function fixture(diagnostics = [
  { id: 'render', scope: 'test-v2/tools/render-integrity.mjs', class: 'hard', status: 'pass' },
  { id: 'designer-review', scope: 'render.html', class: 'style', status: 'pass' },
]) {
  const root = mkdtempSync(join(tmpdir(), 'omd-receipt-'));
  roots.push(root);
  const groups = {};
  for (const group of ['source', 'brief', 'assets', 'output', 'checkers']) {
    const path = `${group}.txt`;
    writeFileSync(join(root, path), `${group}-v1\n`);
    groups[group] = [path];
  }
  return { root, spec: { root, taskId: 'fixture', groups, diagnostics } };
}

describe('execution artifact receipt', () => {
  it('binds source, brief, assets, output, and checker bytes', () => {
    const item = fixture();
    const receipt = createArtifactReceipt(item.spec);
    expect(receipt.gates).toEqual({
      hard: { pass: true, total: 1, failed: [] },
      style: { pass: true, total: 1, failed: [] },
    });
    expect(Object.values(receipt.groups).flat()).toHaveLength(5);
    expect(verifyArtifactReceipt(receipt)).toMatchObject({ valid: true });
  });

  it('ignores timestamp-only changes but rejects byte mutation with the original mtime restored', () => {
    const item = fixture();
    const receipt = createArtifactReceipt(item.spec);
    const source = join(item.root, 'source.txt');
    const original = statSync(source);
    utimesSync(source, new Date(), new Date());
    expect(verifyArtifactReceipt(receipt).valid).toBe(true);
    writeFileSync(source, 'source-v2\n');
    utimesSync(source, original.atime, original.mtime);
    expect(verifyArtifactReceipt(receipt)).toMatchObject({ valid: false, mismatches: ['content mismatch: source/source.txt'] });
  });

  it('keeps hard and style failures separate and never lets style pass hide hard failure', () => {
    const item = fixture([
      { id: 'broken-image', scope: 'render-integrity/img', class: 'hard', status: 'fail', detail: '404' },
      { id: 'visual-review', scope: 'render.html', class: 'style', status: 'pass' },
    ]);
    const receipt = createArtifactReceipt(item.spec);
    expect(receipt.gates.hard).toEqual({ pass: false, total: 1, failed: ['broken-image'] });
    expect(receipt.gates.style).toEqual({ pass: true, total: 1, failed: [] });
    expect(verifyArtifactReceipt(receipt)).toMatchObject({ valid: true, gates: receipt.gates });
  });

  it('rejects a tampered gate summary even when file hashes still match', () => {
    const item = fixture([{ id: 'render', scope: 'checker', class: 'hard', status: 'fail' }, { id: 'review', scope: 'page', class: 'style', status: 'pass' }]);
    const receipt = createArtifactReceipt(item.spec);
    receipt.gates.hard.pass = true;
    expect(verifyArtifactReceipt(receipt)).toMatchObject({ valid: false, mismatches: ['hard gate summary mismatch'] });
  });

  it('allows an explicitly asset-free artifact and keeps pending style unpassed', () => {
    const item = fixture([
      { id: 'render', scope: 'checker', class: 'hard', status: 'pass' },
      { id: 'visual-review', scope: 'page', class: 'style', status: 'pending' },
    ]);
    item.spec.groups.assets = [];
    item.spec.emptyReasons = { assets: 'UI-only task with no requested or generated media' };
    const receipt = createArtifactReceipt(item.spec);
    expect(receipt.gates).toMatchObject({ hard: { pass: true }, style: { pass: false, failed: ['visual-review'] } });
    expect(verifyArtifactReceipt(receipt).valid).toBe(true);
  });

  it('fails closed on malformed or empty diagnostics', () => {
    const item = fixture();
    const receipt = createArtifactReceipt(item.spec);
    receipt.diagnostics = [];
    receipt.gates = { hard: { pass: true, total: 0, failed: [] }, style: { pass: true, total: 0, failed: [] } };
    expect(verifyArtifactReceipt(receipt)).toMatchObject({ valid: false });
  });
});
