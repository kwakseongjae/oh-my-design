# Firstory F3 audit

Auditor: Claude Opus 5 (fresh session, separate from the migration session)
Rulebook scope: v10 B2 / B2a and E1 / E2 / E2a–c only
Date: 2026-08-26

Sentence class used for the complete portable-body pass: brand-published fact / observed technical fact /
editorial interpretation or causal judgment. Only the third class was changed, by attaching or widening the
complete adjacent authority boundary (`derived editorial implementation inference from the verified surfaces`
/ `not Firstory-authored or a separately published UI specification`). No qualification was removed, no
documentary or measured fact was downgraded by adding one, and no token value, component table, state
applicability row, or section structure was changed. Every count below was taken with
`grep -o … | wc -l` (or its Python equivalent) with the counted string named.

## Fixes

`DESIGN.md` (B2 / B2a)

1. §2 Elevation — the causal attribution ("Hierarchy comes from …") and the ranking of the featured plan as
   "the single most important object on the pricing page" sat outside the adjacent qualifier, which as
   written covered only the further "reaches for the pink, never for depth" reading. Both are now inside it;
   the observed treatments (value shift, tinted zones, hairline rings, 2px pink border) are stated separately
   as observation, and the quoted reading is preserved verbatim so the §6 migration-log row stays true.
2. §4 Primary CTA — the Role line asserted "the single pink action per viewport" with no adjacent
   qualification. That reading is already carried twice under complete qualification (§1 Principles item 2,
   §5 whitespace stances), so the unqualified duplicate was dropped rather than re-qualified. No value lost.
3. §5 — the qualifier pointed at "the whitespace stances below", but those stances are quoted inline in the
   same sentence and nothing follows. Re-anchored to "quoted here" so the qualification names what it covers.
4. §6 — the Tone column's own characterizations ("Ambitious for the creator, business-framed",
   "Reassuringly simple", and the four others) are editorial readings of the verbatim strings beside them,
   and the qualifier that follows the table named only the voice characterization and the forbidden register.
   The column is now named inside the qualification, with the published strings explicitly separated from the
   document's characterizations.
5. §1 Distinctive traits — the qualifier enumerated three character phrases but not the tenth bullet's
   reading that matching weight and tracking keep the bilingual site "visually unified". Now enumerated.

`provenance.md` (step 3 — derived range must match reality)

6. Proof notes — the ledger's only statement of derived scope covered §14 stances and §15 motion tokens,
   which is far narrower than the body. Replaced with the full inventory of all thirteen qualified places
   (§1 Scope, §1 Distinctive traits, §1 Principles, §1 application rules, §1 Avoid, §2 Semantic color,
   §2 Elevation, §2 Motion, §3 Type roles, §4 Capture record role readings, §4 Derived state stances,
   §5, §6), plus an explicit note that documentary facts, measured values, and verbatim published strings
   are deliberately left unqualified.

`migration-log.md` (E2 / E2a / E2c)

7. §15 Motion durations row — claimed "doc=1 each". Measured: `motion-fast` 1, `motion-standard` **2**
   (duration table row plus the billing-toggle motion rule that cites it), `motion-slow` 1. Row corrected
   with what was counted.
8. §4 verbatim UI labels row — E2a understatement. The row named three dual destinations; eighteen of the
   labels it lists are also in the adopted sibling ledger. All eighteen are now listed with led counts, and
   the five doc-only labels ("Get Started for Free", "Resources", "Legal", "Data Analytics", "Distribution",
   led=0) are named as such.
9. §10 voice-samples row — E2a understatement. "the six the sibling file also samples" measured as **eight**
   (four zh headings, three zh CTAs, and the zh page title, each led=1). Listed explicitly, with the eight
   doc-only zh strings named separately.
10. §10 Context/Tone row — updated to record that the Tone column's own characterizations now sit inside the
    adjacent qualification, not only the characterization and forbidden-register list.
11. Final passes, Pass 2 — E2c. The paragraph claimed every row had been grep-checked with the counted string
    named; fixes 7–9 show three rows where that was not true as written. The claim is now stated at the
    strength the rows actually support, with the three corrections named.
12. New "F3 audit re-check" section — E2 재대조 after this audit's own body edits, re-measuring every
    destination claim (colors, primitive types, geometry, motion, §9-only aliases, §14 stance values,
    zh-TW needles, qualification-block count) and re-running the three verifications.

## Checks that passed with no change needed

- **A5 / register contrast.** All twenty-six Traditional-Chinese runs in the source are byte-preserved where
  they were carried; English appears beside them, never instead of them (§6 states that policy explicitly).
  「你」 doc=7 against source=7. 「您」 source=0 and doc=1, that one occurrence being the §6 sentence that
  records its absence from the sampled strings — so the informal-register contrast dcard lost is preserved
  here, and the absence claim was verified by grep before being accepted, not assumed. Dropped CJK strings
  are the three fictional persona entries only (D2), and they are absent from all four files.
- **C2 (v10).** Six declared interactive controls close `loading` / `error` / `success` as `not-applicable`
  with role reasons — marketing hand-off ×3, destination link, view switch, disclosure trigger — matching
  the roles v10 names as legitimate closes. No close is justified by capture absence (C1 clean: zero
  "not captured" / "not observed" reasons in any state table). "Interactive control" appears 6× and only as
  the `focus-visible` **applicable** reason, which is the diagnostic-marker form v10 explicitly de-listed as
  a forbidden string; it is the same wording the corrected notion sample uses. C3 negation present.
- **§14 handling.** "Loading (audio processing)" sits in the separate "Derived state stances" block under one
  qualification and is attached to no component's applicability map. No playback state was invented —
  `playing` / `paused` / `buffering` are 0 in the portable body.
- **E1.** `process-leak-check.mjs` → firstory absent (0 hits). Manual scan for catalog graph / legacy spec
  template / Tier 1–2 / provenance / source ledger / migration vocabulary in the portable body → 0.
- **E2a sibling handling.** The ledger's "the source records no `focus-visible` observation" has the legacy
  `DESIGN.md` as its subject and is true of it; the adopted sibling file records no focus-visible either, so
  the statement is correct on both readings.
- Source `web/references/firstory/DESIGN.md` was not edited
  (SHA-256 `9292210acbf361f39006baaf34aa179f28bf0099edd52fc9a8f4b6c82157742c`).

## E3 — reported, not reverted

The migration worker reported that a conformance check read its scope-boundary sentence
("It does not **stand in for** the rest of the product…") as self-negation, and rewrote it to
"It does not treat those marketing pages as a proxy for the rest of the product…". Verified: the rewrite
loses no meaning — both state that the marketing-surface evidence does not extend to the advertiser surface,
the blog, or the authenticated creator side, and the replacement is if anything more precise about the
evidence relation. The replacement idiom is the corpus-approved form (notion's approved Scope reads
"It does not treat those routes as a proxy for an authenticated workspace…"; the form appears in ten migrated
files), and "does not stand in for" is itself used unflagged in dropbox and coinone, which is what makes the
detection a false positive rather than a rule. Left as the worker wrote it. One correction to the worker's
report: the idiom it credits to musinsa is notion's.

## Out of scope — reported only

- **D1a (Named gaps).** "the authenticated creator side" enumerates a domain whose literal word
  (`authenticated`) is 0× in the source. The domain itself is established there — §14 records
  dashboard/list, episode upload, and episode-published states — so this reads as inside D1a rather than the
  databricks/datadog defect, but it is the closest thing to that pattern in this file and belongs to a lane
  this audit did not own.
- **A3 (sibling-only string).** The sibling file records a third page title, `Pricing — Firstory`, which
  lives in the ledger's raw samples but has no counterpart in the portable §6 page-title bullet, which
  carries the en and zh titles. It is a brand-published string with no legacy-section row, so no E2 row is
  wrong; flagging it for the A-series lane.
- **E2 precision nit.** The §4 Component Stylings row reports the FAQ trigger's `64px` as "doc=5", but that
  string also occurs in the spacing scale and the touch-target line. The count is a true measurement of the
  string; the attribution to one component is loose.

Verification after all edits: `migrate-reference.mjs --brand firstory --gate-only` → `PASS`, `problems: []`;
`evaluatePortableCore` → `level: portable-core`, `portable_core: true`, `reasons: []`, `claim_locale: en`,
seven claim declarations; `process-leak-check.mjs` → firstory absent. Per the audit brief the gate result is
recorded as a run outcome, not cited as evidence of conformance.

AUDIT_DONE firstory fixes=12
