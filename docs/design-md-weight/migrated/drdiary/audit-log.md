# Dr.diary F3 audit

Auditor: fresh session, not the T2 migration worker.
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v9** — B2 / B2a and E1 / E2 / E2a–c only.
Date: 2026-08-26
Canonical source `web/references/drdiary/DESIGN.md` was read only, never written.

Sentence class used: brand-published fact / observed technical / editorial interpretation or causal judgement.
Only the third class without an adjacent **complete** qualifier (`derived editorial implementation inference`
+ `not Dr.diary-authored or a separately published …`) was edited in the body. Being the source document's
own sentence is **not** an exemption — the test is brand-published vs. derived, not who typed it. No existing
qualifier was weakened or removed; every body edit is additive or a same-meaning rewrite.
Token values, component tables, state applicability maps and section structure were not changed.

## Classification pass (DESIGN.md)

**Brand-published — left unqualified (correct).** Page title `닥터다이어리 | Healthcare & Lifestyle Tech Company`;
hero `데이터로 선도하는 초개인화 만성질환 케어`; section headings `닥터다이어리가 지향하는 가치` /
`맞춤형 건강관리 서비스` / `닥터다이어리 새소식`; `전체보기`; careers line
`건강 관리가 평생 숙제가 아닌, 쉽고 재밌는 과정`; `오류가 발생했습니다`; `필수`. All nine survive byte-for-byte,
and Content & Locales already says at that spot that these four voice samples are the quoted-verbatim exception.

**Observed technical — left unqualified (correct).** Every hex, px, rem, unitless line-height, radius, padding,
height; `box-shadow: none`; both computed gradient strings; the hero scrim; the two component surfaces and their
attribution; `pretendard, "pretendard Fallback"`; the careers-platform-defaults boundary.

**Editorial interpretation already carrying an adjacent complete qualifier (16 sites, left as-is).** Scope closing,
Distinctive traits head, Principles head, Avoid head, Semantic color head, gradient rule, Spacing+Shape closing,
Elevation closing, Motion, Type rules, Components Evidence record, Declared state contract head, Layout whitespace,
Layout closing, Content head, Content closing.

**Editorial interpretation with no adjacent qualifier — fixed (1 site).** Audience (fix 1).

**Medical-domain check (this brand's special pass).** Brand-published efficacy/positioning strings and observed UI
facts are separated at sentence level, and both places that carry clinical vocabulary state the boundary in the
same sentence: Scope grades 혈당 / CGM / diabetes-management as source background "never as a clinical, efficacy or
safety claim", and the platform-reach sentence (보건소 pilots, 서울대병원 collaboration, employee-health programs,
글루어트/Gluart) is graded general public knowledge and "never as interface evidence or as a clinical claim".
Governance Evidence scope repeats the two-domain non-merge. No sentence in the body reads as an efficacy, safety,
outcome or market-position assertion; the state contract's glucose-logging rows sit under the derived-contract
qualifier. No unverified metric of any kind (market rank, user count, adoption figure) appears in either file.

## Fixes

1. `DESIGN.md` §1 Audience — the group-level audience was derived from the positioning and the general-knowledge
   narrative, but the only adjacent limiter was "not from an audience study", which does not finish the split from
   a brand-published audience definition (B2a: evidence class must be distinguished to the end). Prepended the
   complete form: "…are a derived editorial implementation inference from the verified surfaces; they are not
   Dr.diary-authored or a separately published audience definition." The pre-existing sentences, including the
   persona-drop record, were kept verbatim. (B2a)
2. `DESIGN.md` §2 Foundations Motion — the easing-omission sentence exposed migration-internal machinery:
   "byte-identical to the non-brand example curve in **the legacy writer template**". Rewritten in place to
   "byte-identical to a generic non-brand default curve rather than to any measured Dr.diary value" — same fact,
   same deletion justification, no internal-plumbing reference in the portable body. The full form (the curve is
   `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)`, byte-identical to `spec/omd-v0.1.md`) already lives in the
   provenance omission ledger and the migration-log row, which are the right places for it. (E1)
3. `provenance.md` Derived-inference register — scope was one row narrower than the body after fix 1. Added the
   `Experience → Audience, opening line` row and moved the head count sixteen → seventeen. Register rows now equal
   body limiter occurrences (17 = 17, grep-verified). (E1 / register-scope accuracy)
4. `migration-log.md` frontmatter-identity row — `logo` is a two-destination disposition and only one was logged:
   the value (favicon proxy URL) sits in provenance Identity, while the disposition itself (proxy is not a
   brand-owned asset, so it is not promoted to a logo) is a live sentence in portable Typography & Assets. Both
   destinations now named. (E2a / E2b)
5. `migration-log.md` §8 Collapsing Strategy / Image Behavior row — logged as "옮김 → Layout & Platforms | 4항 + 3항
   전부", but two of the three Image Behavior items (hero dark top-scrim, cards/app screenshots shadowless at any
   size) also land in Typography & Assets. Row now names both destinations and marks the 16px-radius item as
   Layout-only. (E2a)
6. `migration-log.md` §12 Principles row — claimed "5항과 UI implication **전부**", which is stronger than the body.
   Grep shows the implications were compressed: `DSR-style metrics` (principle 3) is absent from both output files,
   "the visual argument that the data underneath is rigorous" (4) and "don't dilute either" (5) are gone, and
   "never the heavy chrome of legacy medical software" (1) survives only as the Avoid entry naming legacy medical
   institutions. Row rewritten to the actual disposition. (E2 / E2c)
7. `migration-log.md` 준수 메모 → B2a entry — asserted that "provenance의 Derived-inference register는 그중 상위
   여섯 묶음을 대조표로 갖고 있고, 나머지는 본문 인접 한정으로만 존재한다". False in the other direction: the register
   already carried all sixteen rows, so the log understated its own sidecar. Corrected to the verified 17/17 parity
   and the position list gained Audience. (E2 / register-scope accuracy)

## Verified, not changed

- E2 row-by-row grep pass over all 47 disposition rows plus the transparency row: every other destination resolves
  in the named file. Spot checks — §9 Quick Color Reference deletion (all 11 role colors present in Foundations),
  §9 example-prompt gradient stops rescued into Foundations and logged in the provenance deletion ledger (A3),
  §10 voice samples dual-hosted (two as the `typography.heading` measurement target, two as dedicated ledger rows),
  §14 error/empty copy rules dual-hosted in the state table and Content & Locales, `[FILL IN]` 0 in source and 0 in
  output, `Notion` 0 in source (the transparency row's premise holds).
- E2c compliance memos re-checked against the body: **B3** — Foundations Motion does carry all five evidence kinds
  (transition properties · animation name · duration · easing · reduced-motion behavior) plus the per-component
  computed-observation gate, so the memo is not stronger than the body. **C1/C2** — 13 `not-applicable` rows,
  grep-confirmed, every one giving a control-role reason and none citing non-capture. **D1a** — Named gaps holds
  two items, both domains the source itself establishes.
- `Core §4.4` in the Components evidence record is the portable Core v2 contract this document conforms to, not
  migration plumbing; it is used the same way in other migrated bodies, so it was left. Same for "sidecar", which
  is settled corpus vocabulary for the provenance file.

## Reported, not fixed

- **A1 value loss (outside this audit's clause scope).** `DSR-style metrics` from source §12 principle 3 exists in
  neither output file (grep 0). It is a verified source enumeration item, not a limiter, so it was logged in
  fix 6 rather than restored. Same class: principle 4's "the visual argument that the data underneath is rigorous"
  and principle 1's "never the heavy chrome of legacy medical software".
- **A1/evidence-grade (outside scope).** Typography & Assets asserts "Hero photography **is first-party imagery**".
  The source establishes only that hero photography carries a dark top-scrim; nothing in either the legacy body or
  the sibling verification record establishes ownership of the imagery. Unqualified provenance assertion — flagged
  for the clause owner, not edited.
- **B1-adjacent (outside scope).** More Link is given `Primitive: link`; the source's frontmatter `components` map
  has no entry for it and §4 only calls it a "more-link". Low risk (the label matches the control), but it is a
  primitive assigned without a source `type` field, unlike the five that do carry one.
- **A5 count (left as written).** The 준수 메모 says "인용된 한국어 문자열 10종". Unique quoted strings are 9; counting
  the hero line's two quoted forms (with and without the trailing period, both byte-faithful to the source) gives
  10. Not an over-claim in either reading, and five further Korean terms (닥터다이어리, 혈당, 보건소, 서울대병원,
  글루어트) are carried unquoted and byte-faithful, so the memo is if anything narrower than reality. Left alone.
- **Medical-domain scan: clean.** No efficacy, safety, outcome or market-position claim; no unverified figure. The
  only market-facing sentence — 글루어트/Gluart "expanding into overseas retail channels" — is attributed to homepage
  press items inside a sentence that grades the whole enumeration as general public knowledge and bars it from
  interface-evidence and clinical use.
- **E3 — no gate false positive.** The gate returned `PASS` / `problems: []` both before and after these edits. No
  hex, string or line break was altered to satisfy any check; fix 2 is a portable-body wording change made for E1,
  and the exact curve value it refers to remains byte-intact in the provenance omission ledger.

## Gate

- `cd test-v2/tools && node migrate-reference.mjs --brand drdiary --gate-only` → `{"brand":"drdiary","verdict":"PASS","problems":[]}`

AUDIT_DONE drdiary fixes=7

---

## 정정 및 후속 (T2-1 웨이브 21 개정 워커, 2026-08-26)

Below is appended by the revision worker. The audit record above is left as written — corrections are added,
not rewritten.

**정정 1 — fix 2와 마지막 E3 항목의 소재지 진술이 사실과 다르다 (E2).** Fix 2 wrote that the full form
(the `ease-exit` curve value — elided here rather than copied a second time — "byte-identical to
`spec/omd-v0.1.md`") "already lives in the provenance omission ledger and the migration-log row", and the
closing E3 bullet wrote that "the exact curve value … remains byte-intact in the provenance omission ledger".
Measured at revision time, before this note was appended, the literal curve string occurred **0× in
`provenance.md`, 0× in `migration-log.md`**, and 1× in this file — inside the sentence making the claim.
Both ledgers identified the matching token only as "one of the three" / "셋 중 하나". A body deletion was
therefore justified by an "it already lives elsewhere" reason that was not true — the exact failure class E2
exists to block, committed by the auditor rather than by the worker.

**해소.** Two things were separated. (a) *Which token matched* is a token name, not a value, so it is now
named: the `provenance.md` omission-ledger row and the `migration-log.md` §15 Easings row both read
`ease-exit`. (b) *The curve value itself* is re-hosted in no migrated output file, by design — §15 Easings was
a deletion, not a relocation. The three values remain only in the canonical source
`web/references/drdiary/DESIGN.md` (lines 363-365), and the generic non-brand default is at
`spec/omd-v0.1.md:267`. The one copy that exists inside the migrated set is the quotation in fix 2 above, in
this sidecar; the portable body and `provenance.md` hold none. Fix 2's edit to the portable body was correct
on its own terms; only its stated justification was wrong, and both ledger rows now say plainly that the
values live nowhere in the migrated output.

**후속 2 — "Reported, not fixed" 두 건 처리.** The auditor correctly flagged both as outside its B2/E-clause
scope; the revision worker owns them.
- *Typography & Assets, Assets.* "Hero photography **is first-party imagery** and carries the dark top-scrim
  gradient…" → "Hero photography carries the dark top-scrim gradient described under Elevation." `first-party`
  occurs 0× in the legacy body and 0× in the sibling `.verification.md`; asset ownership is a licensed claim
  and was asserted unqualified (A1 invention). The observed top-scrim fact is untouched.
- *Components & States, More Link.* `Primitive: link` removed; `Kind: interactive` and the full role-reasoned
  applicability map are kept. The source's frontmatter `components` map has no More Link entry and no `type`
  for it, and the source itself refutes inferring a primitive from the name — it types `nav-link` as
  `type: tab`. Omitting only the `Primitive:` field is the smallest unresolved-field boundary; the five
  primitives that do carry a source `type` are unaffected.

**후속 3 — §12 `DSR-style metrics` 생략 사유를 로그에 명기.** The migration-log §12 row recorded the absence but
not the reason. It now records it: `DSR` appears once in the source (`DESIGN.md:321`, inside the very
enumeration) and 0× in `.verification.md`, with no definition or source anywhere — an undefined clinical
abbreviation, where omission is the conservative answer in a medical domain. The omission stands; only the
reason was missing.

**의료 도메인 재확인.** The auditor's clean finding was re-checked and holds: no efficacy, safety, outcome or
market-position claim; no unverified figure; both clinical-vocabulary sites close their own boundary inside
the same sentence. None of the edits above touch that structure.

**E3.** No gate false positive was encountered; nothing was reshaped to satisfy a check.
