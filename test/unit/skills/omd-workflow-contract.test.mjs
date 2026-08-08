import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

const root = resolve(import.meta.dirname, '../../..');
const read = (path) => readFileSync(resolve(root, path), 'utf8');

describe('OmD cross-skill delivery contract', () => {
  const harness = read('skills/omd-harness/SKILL.md');
  const orchestrator = read('skills/omd-orchestrator/SKILL.md');
  const master = read('agents/omd-master.md');

  it('bridges approved harness artifacts into real product delivery', () => {
    expect(harness).toContain('Step 5 — Delivery bridge');
    expect(harness).toContain('main-agent-after-checkpoint-3');
    expect(harness).toContain('delivery-verification.json');
    expect(harness).toContain('같은 route·viewport·state');
    expect(master).toContain('handoff/delivery.json');
    expect(master).toContain('Do not invent a consumer route');
  });

  it('keeps specialists advisory and one caller responsible for implementation', () => {
    expect(orchestrator).toContain('implementation_owner: caller-main-agent');
    expect(orchestrator).toContain('status: advice-ready');
    expect(orchestrator).toContain('완료·수정됨·검증됨이라고 표현하지 않는다');
    expect(orchestrator).toContain('같은 consumer route·viewport·state');
  });

  it('keeps all mandatory harness checkpoints intact', () => {
    expect(harness).toContain('checkpoint #3 이후만');
    expect(harness).toContain('mandatory checkpoint를 건너뛰지 않는다');
    expect(harness).toContain('사용자 체크포인트를 자동 승인하지 말 것');
  });

  it('routes council advice by authority source without wasting calls behind blockers', () => {
    expect(harness).toContain('dispatch_suppressed_by_blocked: true');
    expect(harness).toContain('preserve-existing/defer');
    expect(harness).toContain('choose-new/user-answerable/interview');
    expect(harness).toContain('external-unverifiable/blocked');
    expect(harness).toMatch(/`blocked`(?:가|는) interview와\n?같은 것으로 세지 않는다/);
    expect(harness).toContain('design-council-handoff.cjs');
    expect(harness).toContain('if handoff.status == "blocked"');
    expect(master).toContain('dispatch_suppressed_by_blocked: true');
    expect(master).toContain('Never report a blocked item as a retained user');
    expect(master).toContain('Skip SLOT_GATE entirely only when no effective `blocked` item remains');
    expect(master).toContain('`blocked` — launcher relays the missing external evidence');
  });
});
