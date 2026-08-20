import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { evaluateIncident, fixtureRoot, incidentMutant } from './autopilot-greenfield-incident-e2e-helpers.mjs';

const enabled = process.env.RUN_UI_RESOLVE_BROWSER_E2E === '1';
const digest = (bytes) => createHash('sha256').update(bytes).digest('hex');

(enabled ? describe : describe.skip)('greenfield incident valid structures and severity calibration', () => {
  it('accepts table/drawer and cards/dialog implementations', () => {
    const aPath = join(fixtureRoot, 'oracle-a'); const bPath = join(fixtureRoot, 'oracle-b');
    expect(digest(readFileSync(join(aPath, 'index.html')))).not.toBe(digest(readFileSync(join(bPath, 'index.html'))));
    expect(evaluateIncident(aPath, 'valid-a')).toMatchObject({ score: 100, ui_resolved: true });
    expect(evaluateIncident(bPath, 'valid-b')).toMatchObject({ score: 100, ui_resolved: true });
  }, 60_000);
  it('kills flattened visual severity hierarchy in both structures', () => {
    const flatten = (html) => html.replace('</style>', `tr,article,[role="row"],[role="listitem"]{color:#111!important;background:#fff!important;border:0!important;font:400 16px/1.5 Arial!important}[aria-label*="severity" i],.severity,.severity-badge{color:#111!important;background:#eee!important;border:0!important;font:600 14px/1.5 Arial!important}</style>`);
    for (const source of ['oracle-a', 'oracle-b']) {
      const result = evaluateIncident(incidentMutant(source, `flat-${source}`, flatten), `flat-${source}`);
      expect(result.assertions.severity_textual_and_ranked).toBe(false);
    }
  }, 60_000);
});
