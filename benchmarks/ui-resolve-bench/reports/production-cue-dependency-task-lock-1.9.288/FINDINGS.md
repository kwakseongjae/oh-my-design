# Production cue dependency task lock — 1.9.288

Status: **LOCKED before provider generation**

`production-cue-dependency-review-v0.1` introduces a three-lane dependency
board distinct from the existing table, timetable, matrix, vertical rack, and
branching single-line families. Each audio, lighting, and stage lane is a
separate named relationship carrier; the handoff decision context is a fourth
carrier. The contract preserves eight cue IDs, seven predecessor links, three
lane IDs, three review views, one source-note toggle, one review form, exact
supplied evidence, and one target/evidence/state/action hierarchy.

Untouched starter: **75/85**. Task contract, state journey, design grounding,
evidence honesty, desktop geometry, target sizes, named controls, explicit
input labels, keyboard traversal, language, and network isolation pass. The
only critical gates that fail are the intended repair surfaces:

- exact foreground contrast: muted canvas text is 4.42:1; dependency and
  state accent text also fails the normal-text threshold;
- responsive geometry at 390px, 320px, and 200%: the three independent lanes
  retain their desktop width, create page overflow, and fragment atomic lane,
  cue, predecessor, and decision text.

The declarative task contract and focused regression test pass. No provider
output saw this task before lock.

Locked hashes:

- core prompt: `4cb0fbcbd4fc45f2d32eb55ef4b67da8f5f856253a5a21b480be5172c16c941d`
- starter product: `d753dbe3b6e3ea7a0995174013f99b436e258b7fff952ce61793a6e0d06946ca`
- starter `index.html`: `78f4ecc71742a3fb7cf8e22db29f743810c480298df39e05d9b59caae0607106`
- starter `DESIGN.md`: `dd61349f8029251dd4a0de587b639074cee5d267731418edc3fd99518209d45c`

Provider calls: 0. Next: preregister exact 1.9.274 conjunctive-release control
versus exact 1.9.286 all-carrier-set candidate at Reliability@3 with task,
starter, model, effort, timeout, proof policy, order, pacing, and
Tokens-to-Target accounting held fixed.
