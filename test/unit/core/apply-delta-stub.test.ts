import { describe, it, expect } from 'vitest';
import { applyDeltaStub } from '../../../src/core/apply-delta-stub.js';
import { buildDeltaSet } from '../../../src/core/vocabulary.js';

describe('applyDeltaStub', () => {
  it('prepends a stub header comment', () => {
    const delta = buildDeltaSet('warm');
    const result = applyDeltaStub('# Title\n\n#ff5733\n', delta);
    expect(result.designMd.startsWith('<!-- omd:stub')).toBe(true);
  });

  it('shifts non-neutral hex codes', () => {
    const delta = buildDeltaSet('warm'); // hue +8
    const result = applyDeltaStub('primary: #3b82f6\n', delta);
    expect(result.stats.hexMatches).toBe(1);
    expect(result.stats.hexChanged).toBe(1);
    expect(result.designMd).not.toContain('#3b82f6');
    expect(result.designMd).toMatch(/#[0-9a-f]{6}/);
  });

  it('preserves neutral hex codes (black/white/gray)', () => {
    const delta = buildDeltaSet('warm');
    const result = applyDeltaStub(
      'black: #000000\nwhite: #ffffff\ngray: #808080\n',
      delta
    );
    expect(result.designMd).toContain('#000000');
    expect(result.designMd).toContain('#ffffff');
    expect(result.designMd).toContain('#808080');
    expect(result.stats.hexChanged).toBe(0);
  });

  it('is a no-op on empty delta (unmatched description)', () => {
    const delta = buildDeltaSet('xyzzy foo bar unknown');
    const body = 'color: #ff5733\n';
    const result = applyDeltaStub(body, delta);
    expect(result.designMd).toContain('#ff5733');
    expect(result.stats.hexChanged).toBe(0);
  });

  it('is deterministic — same input → same output', () => {
    const delta = buildDeltaSet('warm playful');
    const body = 'a:#ff5733 b:#3b82f6\n';
    const a = applyDeltaStub(body, delta);
    const b = applyDeltaStub(body, delta);
    expect(a.designMd).toBe(b.designMd);
  });

  it('records sources from all color axes', () => {
    const delta = buildDeltaSet('warm and approachable');
    const result = applyDeltaStub('#ff5733\n', delta);
    expect(result.stats.sourcesApplied).toContain('warm');
    expect(result.stats.sourcesApplied).toContain('approachable');
  });
});
