import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * Drift guard for the catalog 4-tier resolution order (issue #28, sub-task A).
 *
 * The order in which a reference DESIGN.md is resolved (.claude/data → npm
 * node_modules → dev web/references → oh-my-design.kr fetch) is documented as
 * prose in FOUR runtime documents — each must stay self-sufficient, so the
 * list is intentionally duplicated. This test parses the list out of every
 * document (anchored by the `omd:catalog-resolution-order` marker comment)
 * and asserts the paths + order are identical, so future edits that drift one
 * copy fail CI instead of silently shipping inconsistent skills.
 */

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), '../../..');

const MARKER = 'omd:catalog-resolution-order';

/** The canonical 4-tier order — change here AND in all four documents. */
const CANONICAL_ORDER = [
  '.claude/data/references/<id>/DESIGN.md',
  'node_modules/oh-my-design-cli/web/references/<id>/DESIGN.md',
  'web/references/<id>/DESIGN.md',
  'https://oh-my-design.kr/<id>/design.md',
];

const DOCUMENTS = [
  'skills/omd-init/SKILL.md',
  'skills/omd-harness/SKILL.md',
  'skills/omd-reference-capture/SKILL.md',
  'agents/omd-master.md',
];

/**
 * Extract the resolution paths, in order, from the numbered list that follows
 * the marker comment. Each tier line looks like `N. \`<path>\` (annotation…)` —
 * annotations may differ per document (each stays self-sufficient); only the
 * backticked path and its position are normative.
 */
function extractResolutionOrder(relPath: string): string[] {
  const src = readFileSync(join(repoRoot, relPath), 'utf8');
  const markerIdx = src.indexOf(MARKER);
  if (markerIdx === -1) return [];

  const window = src.slice(markerIdx).split('\n').slice(1, 14);
  const paths: string[] = [];
  for (const line of window) {
    const m = /^\s*\d+\.\s+`([^`]+)`/.exec(line);
    if (m) paths.push(m[1]);
    if (paths.length === 4) break;
  }
  return paths;
}

describe('catalog resolution order (4-tier) drift guard', () => {
  for (const doc of DOCUMENTS) {
    it(`${doc} documents the canonical 4-tier order`, () => {
      const order = extractResolutionOrder(doc);
      expect(order, `${doc}: marker "${MARKER}" or numbered list missing`).toHaveLength(4);
      expect(order).toEqual(CANONICAL_ORDER);
    });
  }

  it('all four documents agree with each other', () => {
    const orders = DOCUMENTS.map((doc) => ({ doc, order: extractResolutionOrder(doc) }));
    for (const { doc, order } of orders.slice(1)) {
      expect(order, `${doc} drifted from ${orders[0].doc}`).toEqual(orders[0].order);
    }
  });
});
