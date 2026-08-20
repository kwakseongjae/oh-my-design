# Electrical single-line task lock — 1.9.277

Status: **LOCKED before provider generation**

`electrical-single-line-review-v0.1` introduces a branching electrical
single-line topology distinct from the existing list, card, timeline, routing,
approval, plate, spectrum, matrix, timetable, and vertical-rack families. The
contract preserves eight named nodes, seven connectors, four branch IDs, three
diagram views, one annotation toggle, a named review form, exact supplied
evidence, and one target/evidence/state/action hierarchy.

Untouched starter: **75/85**. Task contract, state journey, design grounding,
evidence honesty, desktop geometry, target sizes, named controls, explicit input
labels, keyboard traversal, language, and network isolation pass. The only
critical gates that fail are the intended repair surfaces:

- exact foreground contrast: `#68716D` on `#F4F0E8` is reported by axe as
  **4.42:1**, and the accent state on the surface is also below the normal-text
  threshold;
- responsive geometry at 390px, 320px, and 200%: the diagram retains its
  desktop width, creates page overflow, and fragments atomic node, branch, and
  decision identifiers.

An authoring-time 7/8 node-count mismatch was found before lock, corrected by
making the supplied `JCT-E07` branch junction explicit, and re-evaluated. No
provider output saw the defective task.

Locked hashes:

- core prompt: `0daf594cc474391e5ac26ff8c7579c030ea70592debb3f2923c8ecf8d0094b4b`
- starter product: `b72cc06735c1e973dbdee901abcaefb9f7512c3ba12d6da956825989a8a457a7`
- starter `index.html`: `fb312bb5c195348e130d16bcf3ccfac11e24f4770d5760f01323454dfe77c46f`
- starter `DESIGN.md`: `36b1851c222b47cb25d72aa6937d62e421dbf62241c72259798d47e4cc0b11ac`

Provider calls: 0. Next: exact close-latch versus conjunctive-release candidate
Reliability@3 preregistration with task, prompt, starter, DESIGN.md, runtime,
model, effort, timeout, proof policy, balanced order, pacing, and the
Tokens-to-Target goal ledger contract held fixed.
