# Master legacy intake and production transition

Read this file only when the deterministic council handoff is unavailable, the
task contains a URL/Figma input, or the user explicitly shifts to production.

## Legacy intake

1. Read `.omd/context.json` when present; otherwise inspect package metadata,
   top-level UI files, and visible token sources without writing.
2. Empty greenfield work enters SLOT_GATE. Existing code enters CONTEXT_DETECT.
   A URL enters URL_EXTRACT. A prior run enters LOAD_STATE/CONTINUE.
3. Founder fast-exit may propose a reversible plan that omits unresolved facts
   and records their paths for later authority, but
   it never bypasses mandatory Phase 3, Phase 5, or ship checkpoints.
4. A vibe-coder path may suggest the top evidence-matched catalog reference; it
   may not fabricate a reference id or silently make product decisions.

## URL and Figma

- For non-Figma URLs, inspect observable colors, declared fonts, spacing, and
  composition with confidence labels. Marketing evidence does not become app
  product fact without an explicit bridge.
- If extraction fails, match the domain against the resolved catalog and offer
  up to three real ids.
- Figma URLs are guidance only unless inspectable tokens/artifacts are supplied.
  Ask for a Tokens Studio export or an evidence-matched catalog reference.

## Production transition

Production keywords (`production`, `ship`, `deploy`, `실배포`, `프로덕션화`)
reactivate the design contract. Do not fall back to generic coding or extract a
DESIGN.md mechanically from prototype CSS.

1. Read the prototype only for atmosphere signals: dominant colors, declared
   fonts, motion vocabulary, visible copy register, and five short adjectives.
2. Match those signals to 2–3 real catalog references. Present a curated base +
   explicit user delta. Direct extraction is allowed only as a clearly labeled
   lower-confidence option.
3. Protect an existing DESIGN.md by preserving it with a timestamp before an
   approved replacement. Never overwrite silently.
4. Resolve the chosen reference in the canonical order documented in the
   master kernel. If every source misses, halt instead of inventing the base.
5. Apply only user-stated delta axes: hue, saturation, radius, font, weight, or
   density. Unmentioned axes remain unchanged.
6. Visual sections may combine the verified base with approved deltas. Voice,
   narrative, principles, personas, states, and motion retain source evidence;
   user-specific facts absent from evidence stay absent from prescriptive Core fields.
7. Record base reference, applied deltas, preserved sections, unresolved paths,
   predecessor, and timestamp in the run manifest.
8. Sync channel shims, then run asset curation, microcopy, accessibility, and
   delivery only within the approved scope.

## Canonical reference resolution

<!-- omd:catalog-resolution-order — omd-init/omd-harness/omd-reference-capture SKILL.md 와 동일 순서 강제. drift guard: test/unit/core/catalog-resolution-order.test.ts -->

1. `.codex/data/references/<id>/DESIGN.md`
2. `.claude/data/references/<id>/DESIGN.md`
3. `.opencode/data/references/<id>/DESIGN.md`
4. `node_modules/oh-my-design-cli/web/references/<id>/DESIGN.md`
5. `web/references/<id>/DESIGN.md`
6. `https://oh-my-design.kr/<id>/design.md`

The kernel repeats this list because its drift guard treats the master role as
self-contained. This sidecar copy is explanatory, not a fifth guarded surface.
