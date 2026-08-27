# 誠品 (eslite) F3 audit

Auditor: opus5 (fresh session, not the T2 migration worker).
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v9** — B2 / B2a and E1 / E2 / E2a–c only.
Date: 2026-08-26

Sentence class used: brand-published fact / observed technical / editorial interpretation or
causal-application judgement. Only the third class without an adjacent **complete** qualifier
(`derived editorial implementation inference` / `not 誠品-authored or a separately published UI
specification`) was eligible for a body edit. No reconstruction-boundary exemption was applied:
"the source author wrote it" is not a reason to drop a qualifier, because the test is the
publishing party, not the file of origin. Token values, component tables, state applicability
maps, and section structure were not changed.

## B2 / B2a — 0 fixes

Every editorial or causal sentence in the portable body already carries an adjacent complete
qualifier, and every qualifier uses the approved B2a wording verbatim. Five envelopes, all
grep-checked for both halves of the phrase:

- Experience Scope — the restrained-interface reading (`the interface reads as editorial and calm`)
- Experience Principles — `These 4 items …`, covering all four items and their *UI implications*
- Experience Capture-bound application — `These 6 items …`, covering all six bullets
- Content & Locales Voice reading — the characterisation **and** the four Do/Don't rows, named explicitly
- Content & Locales Locale — the Traditional-Chinese preservation rule

Left unqualified after classification, as brand-published, observed-technical, or as
evidence-boundary limits that E1 keeps in the body:

- Scope company history / ecosystem breadth / corporate-page inventory (brand fact)
- Scope Japanbridge and expo-platform sentences (attributed: `says`, `describes`)
- Scope capture-coverage boundary (`not a claim about member, checkout, native-app, or physical-store systems`)
- Primary tasks; Distinctive traits — the worker restated §1's evaluative halves
  (`carry the baseline information hierarchy`, `component geometry remains useful`) as observations,
  which is the alternative permitted fix, so no qualifier is owed
- Audience — group labels under the source's own no-published-personas boundary. Checked against the
  approved golden sample: musinsa's `Use stakeholder groups only: …` carries the same structure with
  no B2a envelope. Left as-is rather than qualified past precedent.
- Avoid (five §7 Don'ts) — each is an evidence-boundary prohibition, not an inference
- Foundations Evidence-domain boundary, Spacing/Shape locality notes, Elevation zero-width-border
  reasoning, Motion absence
- Typography evidence-class rows and the fallback-rendering boundary; Assets catalog-logo boundary
  (`identity metadata rather than a captured first-party 誠品 mark`). This last one is a statement
  about this document's own evidence, not a claim mistakable for 誠品 doctrine, and 10 of 33 approved
  bodies carrying that sentence leave it unqualified. Judged boundary, not inference.
- Components capture record, B1 static-sample note, Core §4.4 applicability policy, C4 card note
- Layout measurements and their not-a-specification limits; Governance; Named gaps

E1 also checked in this pass: `node test-v2/tools/process-leak-check.mjs` reports **no eslite entry**
(0 hits). `Core §4.4` is not a leak — the approved musinsa and 29cm golden samples use the same
citation and the checker's term list excludes it. `Catalog logo metadata` and `catalog identity
color` are catalog-ledger vocabulary with 80+ occurrences across approved bodies, not migration
process vocabulary. No `catalog graph`, `legacy spec template`, `Tier 1/2`, `in provenance`, or
`Core v2` citation appears in the body.

## E2 / E2a / E2c — 9 fixes

Every log row was re-grepped against all three files before writing. Fixes are in
`migration-log.md` and `provenance.md` only; the portable body was not touched.

`migration-log.md`

1. **A5 preamble (E2c).** The claim "`Eslite` appears only where the source itself uses the Latin
   form" was stronger than the body: Scope opens `誠品 (Eslite)`, a gloss the source's §1 does not
   have. Rewritten to state the gloss explicitly as 병기, to record that §10/§11/§12/§13 prose using
   `Eslite`/`Eslite's` is rendered `誠品`/`誠品's` (substitution runs only toward the published 繁體
   name), and to state the byte check that was actually run: all five multi-character 繁體 runs in
   the source (`誠品`, `蘋方體`, and the three §10 voice samples) are present byte-for-byte.
2. **Ledger fields row (E2a).** Destination read "provenance Identity + Proof notes", but
   `tokens.extracted: 2026-07-13` also lands in provenance Freshness. Rewritten per field:
   `reconciled` → Identity only; `2026-07-13` → Identity **and** Freshness; `components_harvested`
   → Identity **and** Proof notes.
3. **`primary_color` row (E2a).** Logged as a triple destination; `#917e57` actually occupies four
   portable sites (Scope reading, Distinctive traits, Capture-bound application, Foundations Search
   Accent) plus the ledger. Corrected to five.
4. **`tokens.spacing` row (E2a).** Destination omitted Experience Capture-bound application, where
   the retained §9 geometry sentence carries the literal `6px 12px 6px 16px`. Added, with the
   dual-string note.
5. **`tokens.rounded` row (E2a).** Same omission for `8px 0px 0px 8px`. Added; the Avoid destination
   for the do-not-spread rule is now in the destination column rather than only in the reason text.
6. **`public-search-input` row (E2a).** `height: 40px` is triple (component anatomy, Layout &
   Platforms, retained §9 geometry bullet); only the component destination was recorded. Added.
7. **§3 evidence-class row (E2c).** "every approved migration in this catalog already qualifies that
   label the same way" overstated the survey. Measured: 25 migrated bodies carry such a row, 17 use
   `Unresolved claim` and 8 use another class noun; none leaves it bare. Restated at that strength,
   with the E3 false-positive report attached.
8. **§9 row (E2 — disposition mismatch).** The row said value-restating sentences were deleted
   because they had already landed elsewhere, and that two §9-only sentences were kept. In fact
   three of §9's four sentences are in the body: the opening `Begin an Eslite-inspired public catalog
   surface with a white field, compact 16px / 400 reading text, narrow gray edges, and content-led
   square cards` is a live Capture-bound application bullet, not a deletion. The fourth (gold-only)
   was merged into the §7 Do #2 bullet as a duplicate. This is the exact E2 failure shape — "삭제라고
   적고 실제로는 합쳤거나". Row rewritten to 3 옮김 / 1 합침, 0 삭제.
9. **§11 row (E2 — unlogged deletion).** The row is marked pure 옮김, but two source sentences are
   absent from the body: "Eslite's current cultural-commerce identity joins reading with a broader
   everyday-life proposition." and "The cultural premise is active beyond a storefront."
   (`cultural-commerce`, `beyond a storefront` → 0 hits). Both are the source author's thesis
   restatements, carrying no verified value, URL, or 繁體 string. The deletion is defensible; leaving
   it unlogged is not. Row rewritten to mixed disposition with the two sentences quoted and the
   reason stated.

`provenance.md` — derived/dual scope widened to match reality (narrow is a defect)

- `#917e57` was recorded as "triple"; corrected to its five actual destinations (same finding as 3).
- Catalog `name` `誠品` was absent from the dual-destination list although it is dual (identity ledger
  + portable H1 and body) and is the A5-critical value for this brand. Added, with the 병기 note.
- The capture-selector dual entry omitted the class string `deep-base-product-card ec-card
  e-banner-product card-block`, which is dual on the same terms. Added.
- The verbatim block was headed "Source token `use` strings" but its third entry is a `states`
  string. Heading corrected, and the two component `use` strings are now explained as absent because
  the portable `Role`/`Use` lines carry them whole.

## `Unresolved` → `Unresolved claim` — ruling: legitimate, not an E3 violation

The worker's account was verified empirically rather than accepted. Restoring the source's bare cell
and re-running the checker reproduces it exactly:

```
current  level: portable-core,   reasons: []
bare     level: structural-core, reasons: [contains-prescriptive-placeholder]
```

`scripts/design-md-core-conformance.cjs:96` puts `UNRESOLVED` in `PLACEHOLDER_WORD`, and
`prescriptivePlaceholderLines` splits table rows into cells and tests each against
`BARE_PLACEHOLDER`, so a cell whose entire content is the label `Unresolved` matches. The report is
accurate.

Ruled a legitimate tolerance alignment, on four grounds:

1. **The object is not a protected string.** E3 was written for the wave-15 case where a worker bent
   a *hex value* in the ledger, destroying byte-level verifiability. This cell is a taxonomy label
   authored by the reference writer — not brand-published (A5 does not reach it), not measured, and
   not carried in the ledger at all. Nothing byte-verifiable moved.
2. **Meaning is unchanged.** The row still names the same evidence class, over the same untouched
   body cell, for the same face (`NotoSerifCJKtc`, one unresolved text use). The project's own §3
   taxonomy names that class "unresolved claims", so the added noun restores the canonical name
   rather than inventing a softer one. It was not rewritten to `Outside this capture` — that
   substitution *would* have changed the class.
3. **It is a catalog convention, not an eslite-local dodge.** All 25 migrated bodies carrying such a
   row qualify the label; of the 7 whose source cell was bare (`ably`, `airbnb`, `line`, `naver`,
   `figma`, `wanted`, `vercel`), all 7 render `Unresolved claim`. The naver, airbnb, and vercel logs
   record it as a **restoration** ("Unresolved는 금지 placeholder가 아님"), and the figma and wanted
   F3 audits reviewed it and explicitly declined to revert.
4. **It was self-reported.** Disclosed in the migration-log at the time, not discovered here.

**But E3's second half was left undone**, and this audit completes it. E3 says: when the check
false-positives, *report the false positive*. It is a false positive — `BARE_PLACEHOLDER` has no
exception for an evidence-class label cell, so it will block any future migration that preserves a
bare source label, and 26 source references still carry one. Reported here for the checker owner:
`prescriptivePlaceholderLines` should not treat the label column of an evidence-class table as a
fillable slot. No notation was distorted to obtain this pass, and the label stays as the worker left
it.

## Out of scope — reported, not fixed

- **§1 depth (AGENTS.md reference-depth rule).** The two §11 thesis sentences dropped in finding 9
  thin the brand-narrative register slightly. The retained Scope still covers company origin,
  ecosystem breadth, the Japanbridge account, the expo platform, and the 35th-anniversary evolution,
  so depth is intact; restoring prose is outside a B2a/E2 audit's remit. Flagged for the value lane.
- **A5 (checked, clean).** All five multi-character 繁體 runs survive byte-for-byte. The three §10
  voice samples keep their 繁體 text with English glosses placed **beside** them and labelled as
  reading aids, exactly the dcard failure inverted. The §10 annotation "that sustain the brand's
  future direction" was narrowed to "the material describes" — that is the reference author's
  characterisation, not a published string, so no A5 loss.
- **D1a (checked, clean).** Every noun in Named gaps resolves to a source line; the log's own D1a
  table is accurate. No domain absent from the source is enumerated.

No token values, component tables, state applicability maps, or section structure were changed.
`Unresolved claim` was not reverted. The portable `DESIGN.md` was not modified in this audit.

Gate after fixes: `node test-v2/tools/migrate-reference.mjs --brand eslite --gate-only` → **PASS**,
`problems: []`. Conformance re-checked: `level: portable-core`, `portable_core: true`, `reasons: []`.
Process leak check: 0 eslite hits.

AUDIT_DONE eslite fixes=9

### 계수 정정 (2026-08-26, 의미 검토 반영)

`:67`·`:160`의 "five multi-character 繁體 runs"는 오분류다. 원본의 다중문자 繁體
문자열은 **4종**이고(`誠品` · `蘋方體` · §10 voice sample 2종), 다섯 번째로 센
`Live your Dream`은 **라틴 문자열**이다.

검사한 다섯 문자열이 전부 바이트 보존인 사실 자체는 맞으므로 준수 과대주장은 아니다 —
분류만 틀렸다. 정확한 표기는 **"4 繁體 + 1 라틴"**이다.

감사 기록 원문은 고쳐 쓰지 않는다. 감사가 무엇을 세었는지와 그 분류가 정확했는지는
다른 사실이고, 원장은 둘 다 보여야 한다.
