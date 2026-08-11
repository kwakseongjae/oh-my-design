import { execFileSync } from 'node:child_process';
import { cpSync, mkdtempSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { tmpdir } from 'node:os';
import { describe, expect, it } from 'vitest';

const enabled = process.env.RUN_UI_RESOLVE_BROWSER_E2E === '1';
const root = resolve(import.meta.dirname, '../../..');
const fixtures = join(root, 'benchmarks/ui-resolve-bench/fixtures/autopilot-greenfield/cold-chain-operations');
const evaluator = join(root, 'benchmarks/ui-resolve-bench/scripts/evaluate-autopilot-greenfield-task.mjs');
const evaluate = (workspace, label) => { const dir = mkdtempSync(join(tmpdir(), `omd-cold-${label}-`)); const out = join(dir, 'score.json'); execFileSync(process.execPath, [evaluator, '--task-id', 'cold-chain-operations', '--workspace', workspace, '--out', out], { cwd: root, maxBuffer: 4 * 1024 * 1024 }); return JSON.parse(readFileSync(out, 'utf8')); };
const mutant = (source, label, transform) => { const workspace = join(mkdtempSync(join(tmpdir(), `omd-cold-mutant-${label}-`)), label); mkdirSync(workspace, { recursive: true }); cpSync(join(fixtures, source), workspace, { recursive: true }); const path = join(workspace, 'index.html'); const before = readFileSync(path, 'utf8'); const after = transform(before, source); if (after === before) throw new Error(`mutant did not alter ${source}`); writeFileSync(path, after); return workspace; };

(enabled ? describe : describe.skip)('greenfield cold-chain oracle and mutant calibration', () => {
  it('accepts responsive table/drawer and card/detail implementations', () => {
    for (const source of ['oracle-a', 'oracle-b']) expect(evaluate(join(fixtures, source), `valid-${source}`)).toMatchObject({ score: 100, ui_resolved: true });
  }, 60_000);
  it('accepts a programmatic urgent button and arbitrary visible shipment prefixes', () => {
    const workspace = mutant('oracle-a', 'button-filter', (html) => html
      .replaceAll('CC-', 'SMP-')
      .replace('<label class="filter"><input id="urgent" type="checkbox"> Urgent shipments only</label>', '<button class="filter" id="urgent" type="button" aria-pressed="false">Urgent shipments only</button>')
      .replace("urgent.addEventListener('change',()=>{rows.forEach(r=>r.hidden=urgent.checked&&r.dataset.priority!=='urgent'); count.textContent=rows.filter(r=>!r.hidden).length; summary.textContent=urgent.checked?'Urgent filter active':'All priorities'});", "urgent.addEventListener('click',()=>{const active=urgent.getAttribute('aria-pressed')!=='true';urgent.setAttribute('aria-pressed',String(active));rows.forEach(r=>r.hidden=active&&r.dataset.priority!=='urgent');count.textContent=rows.filter(r=>!r.hidden).length;summary.textContent=active?'Urgent filter active':'All priorities'});"));
    expect(evaluate(workspace, 'button-filter')).toMatchObject({ score: 100, ui_resolved: true });
  }, 60_000);
  it('accepts sample scope and the evidence datum as separate labels in one detail region', () => {
    const workspace = mutant('oracle-a', 'separate-sample-evidence-labels', (html) => html
      .replace('<h3 id="evidence-title">Sample evidence</h3>', '<h3 id="evidence-title">Recorded evidence</h3>')
      .replace('Sample sensor note: 9.1°C recorded at 08:40.', 'Temperature reading: 9.1°C observed at 08:40.')
      .replace('Sample evidence note: signal interrupted at 09:12.', 'Scan event: signal interrupted at 09:12.'));
    expect(evaluate(workspace, 'separate-sample-evidence-labels')).toMatchObject({ score: 100, ui_resolved: true });
  }, 60_000);
  it('writes a terminal failure score when no supported urgent control exists', () => {
    const workspace = mutant('oracle-a', 'missing-filter', (html) => html
      .replace('<label class="filter"><input id="urgent" type="checkbox"> Urgent shipments only</label>', '<p>Urgent shipments are listed below.</p>'));
    const result = evaluate(workspace, 'missing-filter');
    expect(result.ui_resolved).toBe(false);
    expect(result.assertions.filter_selected_and_visible).toBe(false);
  }, 60_000);
  it('kills a 320px clipping defect in both structures', () => {
    for (const source of ['oracle-a', 'oracle-b']) { const result = evaluate(mutant(source, `clip-${source}`, (html) => html.replace('</style>', 'body{min-width:720px!important}</style>')), `clip-${source}`); expect(result.assertions.responsive).toBe(false); expect(result.groups.journey.pass).toBe(true); }
  }, 60_000);
  it('kills a visually hidden active filter state', () => {
    for (const source of ['oracle-a', 'oracle-b']) { const result = evaluate(mutant(source, `filter-${source}`, (html) => html.replace(/summary\.textContent=urgent\.checked\?[^;]+;/, "summary.textContent='All priorities';")), `filter-${source}`); expect(result.assertions.filter_selected_and_visible).toBe(false); }
  }, 60_000);
  it('kills assignment confirmation that is not persistent in the queue', () => {
    for (const source of ['oracle-a', 'oracle-b']) { const result = evaluate(mutant(source, `owner-${source}`, (html, kind) => kind === 'oracle-a' ? html.replace('document.querySelector(`[data-id="${active}"] td:first-child`).append(` · Assigned to ${owner.value.split(\' ·\')[0]}`)', 'void 0') : html.replace("const card=document.querySelector(`[data-id=\"${active}\"]`),assigned=card.querySelector('.assigned');assigned.textContent=`Assigned to ${owner.value.split(' ·')[0]}`;assigned.hidden=false", 'void 0')), `owner-${source}`); expect(result.assertions.assigned_owner_confirmed_and_persistent).toBe(false); }
  }, 60_000);
});
