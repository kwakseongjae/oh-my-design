import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

const root = resolve(import.meta.dirname, '../../..');
const init = readFileSync(resolve(root, 'skills/omd-init/SKILL.md'), 'utf8');
const learn = readFileSync(resolve(root, 'skills/omd-learn/SKILL.md'), 'utf8');
const autopilot = readFileSync(resolve(root, 'skills/omd-autopilot/SKILL.md'), 'utf8');
const contract = readFileSync(resolve(root, 'skills/omd-autopilot/references/design-system-contract.md'), 'utf8');
const harness = readFileSync(resolve(root, 'skills/omd-harness/SKILL.md'), 'utf8');
const phases = readFileSync(resolve(root, 'skills/omd-harness/references/master-execution-phases.md'), 'utf8');
const master = readFileSync(resolve(root, 'agents/omd-master.md'), 'utf8');
const architect = readFileSync(resolve(root, 'agents/omd-design-system-architect.md'), 'utf8');

const activeWriters = { init, learn, autopilot, contract, harness, phases, master };

const sections = [
  ['experience', '1. Experience'],
  ['foundations', '2. Foundations'],
  ['typography-assets', '3. Typography & Assets'],
  ['components-states', '4. Components & States'],
  ['layout-platforms', '5. Layout & Platforms'],
  ['content-locales', '6. Content & Locales'],
  ['governance', '7. Governance'],
];

describe('Core v2 future-generation contract', () => {
  it('describes one vendor-neutral seven-section compiler projection', () => {
    expect(init).toContain('Single-write Core v2');
    expect(contract).toContain('no YAML/frontmatter');
    expect(contract).toContain('tool, vendor, generator, model');
    for (const [id, heading] of sections) {
      expect(contract).toContain(`<!-- design-md:section ${id} -->\n## ${heading}`);
    }
    expect(init).not.toContain('Section 구조 frozen');
    expect(init).not.toMatch(/omd:\s*0\.1\n\s*brand:/u);
    expect(init).not.toContain('§11-13 본문을 `[FILL IN:');
  });

  it('requires the provider-free review, compiler, checkpoint, and adopter chain after explicit authority', () => {
    for (const [name, source] of Object.entries(activeWriters)) {
      expect(source, name).toContain('omd design-md prepare-review');
      expect(source, name).toContain('--provenance <provenance>');
      expect(source, name).toContain('--coverage <coverage>');
      expect(source, name).toContain('omd design-md approve-review');
      expect(source, name).toContain('--review-receipt <approval>');
      expect(source, name).toContain('omd design-md prepare-checkpoint');
      expect(source, name).toContain('omd design-md adopt');
      expect(source, name).toContain('--checkpoint-receipt <checkpoint>');
      expect(source, name).toContain('compile-design-md-core.cjs');
    }
    expect(init).toContain('Phase 3.5의 프로젝트 시스템 설정/교체 승인이 없으면 compile하지 않는다');
    expect(autopilot).toContain('design-system-decision.json');
    expect(phases).toMatch(/explicitly authorize `establish` or `refresh`/u);
  });

  it('never asks an agent to seed the compiler projection hash', () => {
    expect(contract).toContain('authority-neutral graph draft has no `projection` binding');
    expect(contract).toContain('placeholder, precomputed, or zero SHA');
    for (const [name, source] of Object.entries(activeWriters)) {
      expect(source, name).toMatch(/projection(?:`|\.sha256| SHA)[\s\S]{0,360}fail(?:-| )clos/iu);
    }
    for (const [name, source] of Object.entries(activeWriters)) {
      expect(source, name).not.toContain("'0'.repeat(64)");
      expect(source, name).not.toContain('0'.repeat(64));
    }
  });

  it('makes section and semantic-claim delimiters compiler-owned', () => {
    for (const id of [
      'scope',
      'primary-tasks',
      'foundations',
      'authority',
      'application-priority',
      'unknowns',
      'changes',
    ]) {
      expect(contract).toContain(`\`${id}\``);
    }
    for (const [name, source] of Object.entries({ ...activeWriters, architect })) {
      expect(source, name).toContain('claim-end');
      expect(source, name).toMatch(/compiler-owned|compiler\s+(?:alone\s+)?(?:owns|authors)/iu);
    }
    for (const [name, source] of Object.entries(activeWriters)) {
      expect(source, name).not.toContain('Write 툴로 `DESIGN.md` emit');
      expect(source, name).not.toMatch(/main agent authors the projection/iu);
      expect(source, name).not.toContain('createHash(');
    }
  });

  it('keeps machine authority in canonical sidecars and legacy documents read-only', () => {
    for (const file of ['manifest', 'graph', 'provenance', 'coverage']) {
      expect(autopilot).toContain(`.omd/system/${file}.json`);
      expect(contract).toContain(`${file}.json`);
    }
    expect(autopilot).toMatch(/single-write\s+Core v2/u);
    expect(autopilot).toMatch(/Legacy\s+13\/15\/16-section and unmarked documents remain readable/u);
    expect(contract).toContain('New create/refresh work must never choose the legacy proof path.');
  });

  it('requires a lossless migration check before refactor or refresh', () => {
    for (const source of [init, autopilot, contract]) {
      expect(source).toContain('dropped=0');
      expect(source).toContain('dev.oh-my-design.migration');
    }
    expect(init).toContain('round-trip pass');
    expect(contract).toContain('content-addressed rollback');
    expect(contract).toContain('migration candidate, which remains non-authoritative');
  });

  it('keeps compilation conformance separate from evidence and final proof', () => {
    for (const [name, source] of Object.entries({ ...activeWriters, architect })) {
      expect(source, name).toMatch(/provenance/iu);
      expect(source, name).toMatch(/license/iu);
      expect(source, name).toMatch(/visual[-\s]*quality/iu);
    }
    expect(contract).toContain('does not attest that a fact');
    expect(autopilot).toContain('installed final project-system validator');
    expect(phases).toContain('Compiler PASS proves declaration conformance');
  });

  it('fails closed until evidence bindings and atomic project adoption are available', () => {
    for (const [name, source] of Object.entries(activeWriters)) {
      expect(source, name).toMatch(/provenance.+coverage/isu);
      expect(source, name).toMatch(/fail closed|fail-close/iu);
      expect(source, name).toMatch(/atomic (?:package )?adopter/iu);
      expect(source, name).toMatch(/manual|수동|agent-(?:calculated|authored)/iu);
    }
    expect(contract).toContain('If the compiled manifest does not bind the exact provenance');
    expect(contract).toContain('Never copy files one by one');
  });
});
