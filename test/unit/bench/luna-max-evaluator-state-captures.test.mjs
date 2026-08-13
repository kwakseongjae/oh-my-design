import { createHash } from 'node:crypto';
import { mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import {
  LUNA_MAX_STATE_SCREENSHOT_REQUIREMENTS,
  writeStateScreenshotManifest,
} from '../../../benchmarks/ui-resolve-bench/scripts/evaluate-autopilot-greenfield-task.mjs';

const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex');

describe('Luna Max evaluator state screenshots', () => {
  it('binds exact state coverage for exactly the three current Luna tasks', () => {
    expect(LUNA_MAX_STATE_SCREENSHOT_REQUIREMENTS).toEqual({
      'neighborhood-library-landing': ['default', 'focus-visible', 'unavailable-information'],
      'cold-chain-operations': ['filtered', 'selected', 'assignment-error', 'assigned'],
      'clinic-visit-prep-locales': ['locale-selected', 'in-progress', 'complete', 'translation-unavailable'],
    });
  });

  it('writes a state-to-relative-file-and-hash manifest with exact coverage', () => {
    const screenshotDir = mkdtempSync(join(tmpdir(), 'omd-state-screenshots-'));
    const taskId = 'cold-chain-operations';
    const captures = LUNA_MAX_STATE_SCREENSHOT_REQUIREMENTS[taskId].map((state, index) => {
      const viewportId = index % 2 === 0 ? 'desktop-1440' : 'mobile-390';
      const file = `${state}--${viewportId}.png`;
      writeFileSync(join(screenshotDir, file), `png fixture ${state}`);
      return { state, viewport_id: viewportId, file };
    });

    const result = writeStateScreenshotManifest({ taskId, screenshotDir, captures });
    expect(result.manifestPath).toBe(join(screenshotDir, 'STATE-SCREENSHOTS.json'));
    expect(result.manifest).toMatchObject({
      schema_version: '0.1',
      kind: 'omd-luna-max-evaluator-state-screenshots',
      task_id: taskId,
    });
    expect(Object.keys(result.manifest.states)).toEqual(LUNA_MAX_STATE_SCREENSHOT_REQUIREMENTS[taskId]);
    for (const capture of captures) {
      expect(result.manifest.states[capture.state]).toEqual([{
        viewport_id: capture.viewport_id,
        file: capture.file,
        sha256: sha256(readFileSync(join(screenshotDir, capture.file))),
      }]);
    }
    expect(JSON.parse(readFileSync(result.manifestPath, 'utf8'))).toEqual(result.manifest);
  });

  it('fails closed when an observed-state capture is missing', () => {
    const screenshotDir = mkdtempSync(join(tmpdir(), 'omd-state-screenshots-missing-'));
    const file = 'default--desktop-1440.png';
    writeFileSync(join(screenshotDir, file), 'png fixture default');
    expect(() => writeStateScreenshotManifest({
      taskId: 'neighborhood-library-landing',
      screenshotDir,
      captures: [{ state: 'default', viewport_id: 'desktop-1440', file }],
    })).toThrow('required state screenshot was not observed: neighborhood-library-landing/focus-visible');
  });

  it('does not create state manifests for tasks outside the current Luna set', () => {
    const screenshotDir = mkdtempSync(join(tmpdir(), 'omd-state-screenshots-other-'));
    expect(writeStateScreenshotManifest({ taskId: 'incident-response-dashboard', screenshotDir, captures: [] })).toBeNull();
  });
});
