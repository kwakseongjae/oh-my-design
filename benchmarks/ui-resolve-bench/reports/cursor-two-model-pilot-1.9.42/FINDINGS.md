# Cursor fixed-runtime two-model pilot — findings

Status: **execution complete, descriptive acceptance failed**.

## Outcome

Cursor Agent completed all six preregistered cells without retry, fallback,
manual product edits, Auto/Router, timeout, or provider effort arguments.
Requested selectors and expected runtime display names matched in every cell.
Every run changed only `index.html`, preserved Evidence & Unknown, and completed
the task, state, responsive, and design-grounding gates.

The pilot nevertheless failed its preregistered descriptive acceptance:
**0/6 artifacts passed the accessibility critical gate**. All cells remain
`invalid-attribution` for public comparison because Cursor reported display
names rather than immutable model IDs.

| Requested selector | Trials | Scores | Median wall | Median non-cached tokens |
|---|---:|---:|---:|---:|
| `cursor-grok-4.5-high` | 3 | 81, 81, 81 / 85 | 326,694 ms | 72,011 |
| `composer-2.5` | 3 | 81, 81, 79 / 85 | 299,119 ms | 55,553 |

These are descriptive diagnostics only. There is no winner, W/T/L,
Reliability@3, model-lift, or frontier claim.

## Shared failure: semantic color safety

All six distinct outputs used declared `signal-orange` `#E7683D` as small text
on `paper` or `surface`. The observed contrast was 2.98–3.25:1 against a
required 4.5:1. The raw contract says the color is for “small emphasis and
status accents,” which the models reasonably but unsafely interpreted as status
text.

This is a useful Skill Lift target:

- preserve the declared hue for borders, dots, icons, large type, or a tested
  accessible surface pairing;
- use `ink` or another declared accessible role for small status labels;
- verify computed foreground/background contrast after implementation;
- never silently invent a darker orange that is absent from DESIGN.md.

The rule belongs in OmD's procedural skill, while the raw DESIGN.md remains the
frozen control. Rewriting the control after seeing the result would invalidate
the future lift comparison.

## Additional accessibility failures

- `pricing-t2-grok` added ARIA table cells and headers without required `row`
  parents.
- `pricing-t3-composer` created a horizontally scrollable plan comparison with
  no focusable content.

Both are valid harness signals. The skill channel should prefer native table
semantics when the content is tabular and should make a deliberate horizontal
scroll region keyboard reachable and labelled.

## Normalization repair

Cursor usage events use camelCase fields such as `inputTokens`,
`cacheReadTokens`, and `outputTokens`. The provider adapter retained those
events and separately normalized `model_usage`, but the common run-record
exporter initially summed only snake_case fields. That produced a misleading
zero in `execution-state.json`.

The exporter now accepts both shapes. The six retained `run-result.json` files
were re-exported without provider reruns, rescoring, or product changes. Cached
input remains a separate informational field and is not added to
`total_tokens`, matching the existing benchmark convention.

## Decision

Do not expand the raw Model Track. Proceed to:

1. `1.9.43`: install actual Agent Skills for Cursor, retain a small always-on
   bootstrap rule, add deterministic discovery/version/drift doctor checks, and
   encode semantic-color and semantic-structure safety in the reviewed skill;
2. `1.9.44`: preregister a fixed-model Raw DESIGN.md vs OmD Skill Lift pilot;
3. keep both Grok and Composer as candidate Cursor selectors, but choose the
   fixed model for the first Skill Lift only after 1.9.43 deterministic
   acceptance. The 1.9.42 diagnostics alone do not justify a model winner.

The canonical machine result is `SUMMARY.final.json`. Raw streams and local
screenshots remain under `/tmp/u1942` and are not copied into the repository
because they include provider session metadata.
