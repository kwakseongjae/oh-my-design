import { describe, expect, it } from 'vitest';
import { evaluateIncident, incidentMutant } from './autopilot-greenfield-incident-e2e-helpers.mjs';

const enabled = process.env.RUN_UI_RESOLVE_BROWSER_E2E === '1';

(enabled ? describe : describe.skip)('greenfield incident interaction mutant calibration', () => {
  it('rejects ephemeral acknowledgement without durable state', () => {
    for (const source of ['oracle-a', 'oracle-b']) {
      const workspace = incidentMutant(source, `ack-${source}`, (html) => html.replace(/acknowledged\.add\(activeIncident\);/g, '/* durable acknowledgement removed */'));
      expect(evaluateIncident(workspace, `ack-${source}`).assertions.acknowledged_state_persistent).toBe(false);
    }
  }, 60_000);
  it('rejects pointer-only incident opening', () => {
    const breakKeyboard = (html) => html.replace('</body>', `<script>for(const control of document.querySelectorAll('button,a')){if(/open|view|inspect/i.test(control.getAttribute('aria-label')||control.textContent||''))control.tabIndex=-1}</script></body>`);
    for (const source of ['oracle-a', 'oracle-b']) {
      const workspace = incidentMutant(source, `keyboard-${source}`, breakKeyboard);
      expect(evaluateIncident(workspace, `keyboard-${source}`).assertions.keyboard_open_highest).toBe(false);
    }
  }, 60_000);
});
