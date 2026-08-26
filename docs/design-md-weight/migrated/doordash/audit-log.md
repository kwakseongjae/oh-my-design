# DoorDash audit log — B2a · E1 · E2 (F3 separate-session audit)

Auditor: fresh session, not the migrating session (F3).
Scope audited: `MIGRATION_RULEBOOK.md` v9 — B2 · B2a and E1 · E2 · E2a–c only.
Files touched: `DESIGN.md`, `migration-log.md`, `provenance.md`. The canonical source
`web/references/doordash/DESIGN.md` was read only.
Not touched (out of audit mandate): token values, component records, state applicability
rows and reasons, section structure.

## Fixes

### B2a — adjacent qualification of derived/editorial sentences

1. **Foundations → Semantic color.** The role entries carried unqualified evaluative
   readings ("the defining brand color"; an "orange-leaning red" that "reads energetic and
   accessible at large sizes"; the near-black read as warmer and more consumer-grade than
   pure black). The section above it qualified only the *class boundary*, not these
   readings. Added an adjacent complete-form qualifier that separates the measured hexes
   and token names from the character readings. No value or role name changed.
2. **Typography & Assets → Family.** "On-demand boldness." on the display face is an
   editorial characterization and stood unqualified; the nearest qualifiers covered the
   evidence-class table and the four Typography rules, not the Family entries. Added an
   adjacent complete-form qualifier.
3. **Components & States → Evidence boundary.** The component `Use:` lines carry the
   source's own character and *intent* readings — "sharp corners contrast intentionally
   with pill buttons", "equal visual weight at a glance". The same sharp-corner reading is
   labelled as editorial in Scope but stood as an intent attribution to DoorDash here.
   Extended the existing evidence-boundary paragraph to cover the `Use:` readings. The
   component records themselves were not edited.
4. **Layout & Platforms → Grid and container.** Scope asserts that the layout, responsive,
   state and motion contracts "each carr[y] that boundary where it appears", and the
   provenance claim ledger records §5 layout as a source-recorded design rule "marked as
   such in the portable body" — but the section's closing note names only the *breakpoint,
   touch-target and collapsing* figures (§8). The §5 grid/band/container figures had no
   marking at all, so the promise was kept for §8 · §14 · §15 and broken for §5. Added an
   adjacent sentence marking those figures as source-recorded design rules with no
   layout-level measurement behind them, in complete B2a form.

### E1 — migration-internal vocabulary removed from the portable body

5. **Foundations → Motion, easing roles.** The body named the internal file
   `spec/omd-v0.1.md` and "the legacy authoring template" — concepts only this migration
   holds, and already recorded in the provenance omission ledger. Rewritten so the same
   finding survives for a standalone reader ("identical to a generic authoring-template
   default rather than to anything read on a DoorDash surface"); the exact curve strings
   and the template identification stay in provenance. Confirmed clean by
   `test-v2/tools/process-leak-check.mjs` (term `spec/omd-v0.1`).
6. **Typography & Assets → Assets.** "The catalog record points at the SimpleIcons slug"
   named this catalog rather than the reference's own record → "The source's own logo
   record points at …". Same fact, no catalog-internal referent.
7. **Tier vocabulary (2 places).** Foundations → "Evidence class of the color record" and
   Governance → Named gaps used "Tier 2" / "Tier 2 lookups". The source-tier taxonomy is
   ledger structure (E1) and is meaningless to a reader holding only the portable file.
   Rewritten as "secondary-source lookups" / "second-source corroboration". Both keep the
   full substance — two lookups, no DoorDash record — so the D1a anchoring in the source
   footer is unchanged. The three approved golden samples carry no Tier vocabulary in the
   body; 18 of 106 migrated bodies still do (reported, not fixed here).

### E2 / E2a — log rows vs. reality

8. **Footer row (E2a).** The row recorded the Tier 2 line as a provenance-only
   destination, but the lookup result is also stated twice in the portable body
   (Foundations evidence-class paragraph, Governance Named gaps). Recorded both
   destinations and why the label itself stays in provenance.
9. **F1 row (E2c).** The F1 record enumerated the passages it qualified; four passages in
   the document did not appear there because they were not qualified at all (fixes 1–4).
   Appended an F3 sub-entry recording what this audit added and rewrote, so the log's
   compliance claim is not stronger than the body.

### E1/E2 — provenance derived-scope row

10. **Claim ledger, "derived editorial implementation inference of this migration" row.**
    The enumerated scope was narrower than the body: it omitted the Foundations
    color-class boundary and the zero-alpha `ring` reading (both already qualified in the
    body), and after fixes 1–4 also the semantic-color character readings, the Family
    character reading, the `Use:`-line readings and Layout Grid and container. Widened to
    match the document exactly.

## Verified, no change needed

- **Brand-specific check — "source-recorded design rules" honoured sentence by sentence.**
  §14 states sit under a "Source state contract" heading whose paragraph separates design
  recipes from the two measured surfaces; every per-component reason that draws on them
  says so ("The source's state contract records …", "The source assigns …", "Source-recorded
  hover / active treatment"), while measured rows say "Live-read on the homepage / about
  site". §15 motion carries a whole-contract qualifier plus the B3 promotion gate; §8 carries
  its closing note. No live-computed observation is presented as a source rule and no source
  rule is presented as measured. The one gap in that pattern was §5 (fix 4).
- All 27 derived-qualifier sentences use the complete B2a form — both the
  "derived editorial implementation inference" half and the "not DoorDash-authored or a
  separately published UI specification" half (0 partial forms).
- Every migration-log row was grep-verified against the three files: nine color tokens,
  both families and all seven type roles with unitless line-heights, eight frontmatter
  component records with their primitive `type`, ten §4 body records, eleven state-contract
  rows, four motion durations and three easing role names, and each declared dual
  destination (`name`, `primary_color`, the `tokens.note` facts, both shadow strings in the
  spacing form each source section uses, the capture boundary, the §11 refusals, the §14
  disabled recipe, the §8 full-width rule, the two §9-only guidance values). No row claimed
  a disposition the files contradict beyond fix 8.
- D2 holding confirmed: no persona name, age, city or segment profile appears in any of the
  three output files.
- Gate false positives: none. No value, hex spelling, curve string, URL or label was altered
  in any direction (E3).

## Reported, not fixed (judgment calls left standing)

- The label *legacy prompt-block guidance* (4 occurrences) and "the legacy persona section"
  (2) use migration-era "legacy" framing, but each is defined in the body in reader-facing
  terms ("the source's example-prompt block", "fictional archetypes … in its own source"),
  so a standalone reader can follow them. Renaming would cascade through the log and
  provenance for no gain in comprehension.
- The body refers to "provenance" three times (38 of 106 migrated bodies do). Generic
  enough to read as "the source record"; left alone rather than churned in one brand.

## Result

- Portable Core: `evaluatePortableCore` → `level: portable-core`, `portable_core: true`,
  `reasons: []`, `claim_locale: en`.
- E1 process-leak scan: doordash clean (0 hits of 107 scanned bodies' 123 hits).
- Gate: `node test-v2/tools/migrate-reference.mjs --brand doordash --gate-only` → PASS,
  `problems: []`.

AUDIT_DONE doordash fixes=10

---

## 개정 세션 정정 (wave 21 semantic review, 2026-08-26)

이 절은 위 감사 기록을 고쳐 쓰지 않고 덧붙인 정정이다. 감사자의 10건 수정은 정확했고
그대로 유지된다.

- **"Reported, not fixed" 두 번째 항목 — 실측 불일치.** 그 줄은 본문이 "provenance"를
  **세 번** 언급한다고 적었지만, `grep -c` 실측은 **1회**다: `DESIGN.md:33`의 "into this
  document or its provenance". 판단 자체("일반적 표현으로 읽히므로 손대지 않는다")는
  유효하므로 문구는 그대로 두고 횟수만 여기서 정정한다.
- **"All 27 derived-qualifier sentences" 카운트.** 감사 시점 기준으로는 맞았다. 이 개정에서
  Foundations → Shape와 Typography & Assets → Type roles에 완전형 한정이 하나씩 추가되어
  현재는 **29**다. 둘 다 감사가 쓴 것과 같은 완전형("derived editorial implementation
  inference" + "not DoorDash-authored or a separately published UI specification")이므로
  "0 partial forms"는 유지된다.
- 개정에서 수정한 4건(B2a ×2, B1 ×1, provenance E2 ×1)의 내역은 `migration-log.md`의
  **Wave-21 semantic review revision** 항목에 있다.
