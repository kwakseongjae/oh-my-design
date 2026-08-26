# Digital Agency Design System (DADS) — F3 separate-session audit

Rulebook: `MIGRATION_RULEBOOK.md` **v9** (2026-08-26). Scope: **B2 · B2a** and **E1 · E2 · E2a–c** only.
Session: fresh audit session, separate from the migration worker (Rulebook F3).
Auditor edits are limited to qualification sentences and ledger accuracy. No token value, component table,
state applicability, or section structure was touched. Source `web/references/digital-agency-jp/DESIGN.md`
was read only.

Method: every sentence of the portable body was classified as [agency-published fact / live-computed
observation / editorial reading], and every `migration-log.md` row was re-verified by grep against the three
output files and the source before being accepted or corrected.

## B2a — unqualified editorial readings found in the portable body (3)

1. **Experience → Audience.** The paragraph opened "Source-backed stakeholder groups only:" and then listed
   four groups. `service designer` occurs nowhere in the source outside the §13 fictional archetype
   (`web/references/digital-agency-jp/DESIGN.md:366`), so the fourth group is a de-identified role
   generalization, not a source-named observable segment — the evidence class was not carried to the end
   (B2a). Rewritten to name which three groups the source itself names, to state that the service-designer
   group is a generalization from the disclosed archetype, and to carry the complete limitation
   ("derived editorial implementation inference, not Digital Agency-authored or a separately published UI
   specification"). The group itself is left in place and flagged for D2 review, which is outside this audit.

2. **Foundations → Semantic color.** The qualifying paragraph covered "two colour characterizations"
   (minimum-AA grey, two-step blue) but the table also carries a third editorial reading — `#949494` as
   "the primary separation device in this shadow-free system" — which is the same reading the Elevation
   paragraph qualifies later, left unqualified here. Paragraph extended to three characterizations, with the
   hairline reading named as a role reading of the observed border. The table row itself was not edited.

3. **Typography & Assets → Assets.** "Figma and component preview images and diagrams were observed without
   shadow, consistent with the flat system" stated an observation the proof does not carry (the recorded
   `box-shadow: none` samples name the hero, header, navigation cards, and buttons — not images or diagrams)
   and appended an unqualified causal reading. Rewritten to attribute the image claim to the legacy record,
   to name what the observations actually cover, and to qualify the "consistent with the flat system" reading
   completely.

## E2 — ledger rows that did not match the files (9 in `migration-log.md`)

4. **§8 Responsive Behavior — wrong destination.** The row sent "the observed image no-shadow finding" to
   Layout & Platforms. It is in Typography & Assets (Assets); `grep -n "image" DESIGN.md` returns one hit,
   inside the `typography-assets` section. Destination corrected and the split disposition spelled out
   (control heights → Layout & Platforms; image claim → Typography & Assets; "at any size" → provenance).

5. **YAML identity — undeclared dual destinations (E2a).** Only `name` was logged as dual. `homepage` also
   appears portably in the Scope capture list (`design.digital.go.jp/`) and `primary_color` `#0017c1` also
   stands as the Foundations `primary` token value. Both added to the disposition cell.

6. **`tokens.note` — claim stronger than the ledger (E2c).** The row said "the exact note text stays in the
   ledger"; `provenance.md` itself says "verbatim in substance" and differs (`primary is` for `primary =`,
   spaced `#f2f2f2` / `#e6e6e6`, `colour` for `color`). Row corrected to claim substance plus byte-exact
   values.

7. **§15 Motion — "byte-exact" was true for only part of the row (E2c).** The three durations and three
   curves are byte-exact in the ledger; the legacy motion-rules prose is not — it was re-punctuated into one
   line and two source asides were dropped ("consistent with an accessibility-first government system",
   "public infrastructure signals steadiness and predictability"). Row narrowed to what is true and the drop
   recorded as a loss for the A-family reviewer. (The B3 compliance claim in the same row was re-checked and
   is sound: all five evidence kinds are present in the portable Foundations Motion section.)

8. **Sibling `.verification.md` — wrong count.** The row said "15 raw sample lines, four frequency scans".
   The sidecar carries 17 (13 element-level samples plus the four frequency scans) and provenance reproduces
   all 17. Corrected.

9. **§13 Personas — disposition understated what shipped.** The row claimed only the three source-named
   segments were retained; the portable Audience carries four. Row rewritten to match, with the origin of the
   fourth stated.

10. **§7 Do's and Don'ts — over-broad absence claim.** "Nothing brand-specific was pushed into Governance" is
    false as written: Governance carries the DADS/CC BY 4.0 authority-boundary sentence. Narrowed to the
    Do/Don't rules, with the one brand-specific Governance sentence named.

11. **E3 disclosure completed.** The log disclosed one checker-driven wording change but not the second
    checker-driven decision (the Authority claim placement). Disclosure added — see E3 below.

12. **Header bookkeeping.** `DESIGN SHA-256` refreshed after this audit's three body edits, with the
    worker-delivered hash retained alongside it; an F3 entry added under "Required final passes" so the F1/F2
    self-reports are not read as verified completeness.

## E1 / E2 — provenance corrections (3)

13. **Derived-editorial scope was narrower than the body.** The "comprises" list omitted the hairline role
    reading, the image-behavior reading, and the service-designer generalization. All three added; "two
    colour characterizations" → "three".

14. **Proof-notes evidence-domain list** extended with the same two readings so the editorial layer matches
    the body.

15. **Persona disposition** rewritten to record the fourth Audience group and its origin instead of implying
    only three segments survived.

E1 itself holds: the source ledger, freshness, Proof, and claim ledger are in `provenance.md`, while the
authority, evidence-class, and boundary qualifications needed to read the portable file standalone are in the
body.

## E3 — checker behavior, left in place and reported

- **Confirmed false positive (`design-md-core-conformance.cjs`).** The worker's disclosed reword was
  triggered by a real defect in `explicitlyNegatesClaim('foundations', …)`. Reproduced: restoring the
  original phrase "…is an explanation of the pair, not a quoted rule" makes
  `actionable_foundations_or_known_constraints` FAIL
  (`missing-actionable-foundations-or-known-constraints`) even though the claim body is full of actionable
  rules. The `BOUNDARY` guard at `scripts/design-md-core-conformance.cjs:305` does not save it, because that
  sentence contains no evidence-boundary word. Any reference that ends an editorial qualifier with "not a
  … rule / constraint / foundation" inside the Foundations claim will hit this. The shipped wording
  ("…rather than a quoted Digital Agency statement") is kept: it distorts no value and is the more complete
  B2a form, since it names the brand. Reported here rather than worked around silently.

- **Authority claim placement — checked, meaning intact.** `governance_authority` requires
  `authorityBody === expectedAuthority` (byte-for-byte against the canonical sentence), so the DADS-specific
  qualification cannot sit inside the claim block. It sits immediately after `claim-end`, in the same
  Governance section: the two captured surfaces, the "not the official DADS specification" boundary, and the
  non-transfer of the Digital Agency's CC BY 4.0 publication authority. Adjacency and meaning survive the
  move; nothing was lost. Disclosure added to the log (fix 11).

## A5 — out of scope, checked and reported clean

The three-evidence-layer separation this brand needs (institution-published fact / live-computed observation
/ editorial reading) holds at sentence level after fixes 1–3. Byte-preservation of the original Japanese was
verified mechanically: all 26 contiguous Japanese runs in the source were extracted and searched across the
three outputs. Every published string survives byte-identical — `デジタル庁デザインシステムβ版`,
`デジタル庁デザインシステムの構成`, `本ウェブサイトのコンテンツ`, `はじめに` / `ガイダンス` / `基本デザイン` /
`コンポーネント` / `リソース` / `お知らせ`, `検索`, `ヘッダーコンテナ: 概要`, `v2.0.0以降のFigmaファイル`,
`必須`. The only absent runs are the nine belonging to the §13 fictional persona names and locations
(`佐藤`, `健`, `東京`, `田中`, `美咲`, `大阪`, `鈴木`, `一郎`, `地方都市`), deleted under D2 and recorded as
such. **A5 violations: 0** — consistent with the orchestrator's retroactive note in the migration log.

## Losses noted outside this audit's scope (not fixed here)

- The two §15 motion-rule asides dropped from the provenance ledger (see fix 7) are byte-level losses in a
  loss-accounting ledger. A-family reviewer's call.
- §10's parenthetical English glosses for the nav labels ("はじめに" / Introduction …) and the closing line
  "Government content is for everyone — clarity beats cleverness" were not carried over. Both are source
  prose rather than published UI strings, so A5 is not engaged, but they are recorded here.
- Named gaps line "the DADS-published token names and values as distinct from these live computed
  observations" is a D1/D1a question (does the source establish that DADS publishes a token document?), not a
  B2a or E2 question. Left untouched.

AUDIT_DONE digital-agency-jp fixes=15
