# nvidia F3 audit (B2a · E1 · E2)

Auditor did not read a worker report. Inputs: `docs/design-md-weight/migrated/nvidia/{DESIGN.md, provenance.md, migration-log.md}`, source `web/references/nvidia/DESIGN.md`, sibling `web/references/nvidia/.verification.md` (path written; `find` confirmed the dotfile). Counts: `grep -oF -- <pat> <file> | wc -l` per file, never `grep -c`. A shell no-match was treated as unmeasured until `find`/`test -f` showed the file exists; zeros below are post-existence. After body/ledger edits the dest table was remeasured.

Not touched: token values, component tables, state applicability, document structure. Line count stayed 714 (in-place appends).

No published first-party UI specification is named in the source (v12 B2a 전제). The toss-form close `not NVIDIA-authored or a separately published UI specification` is the matching evidence class.

## Sentence class (portable DESIGN.md)

Every sentence was classed as **brand-issued fact / recorded observation / editorial-causal reading**. Thirty-seven readings already carried the complete adjacent form. Four blocks of the third class did not, and three section-level closes named only a subset of the readings they sat next to.

- **Brand-issued:** self-description quote; CTA/headline strings (`Learn More`, `NVIDIA Delivers the Lowest Token Cost`, Jensen / research / plaque lines); YAML `use` strings.
- **Observation:** hexes, `NVIDIA-EMEA` + fallbacks, YAML unitless sizes/line-heights, component anatomy rows, §14 table, duration cells, footer live-DOM chrome values already in the source footer.
- **Editorial/causal:** surface-bound, characterizations, unmerged writings, primary-task selection, persona drop, principle/Do/Don't reasons, color-role pairing, motion readings, signature-motion interpretations, kind/applicability verdicts, illustrative-class retention, §9-prompt classification, layout/voice readings.

## Fixes

### B2a — adjacent complete qualification (7)

| # | Location | What was missing | What was attached |
|---|---|---|---|
| 1 | `DESIGN.md` Semantic color `:98` | Section close named outline-vs-fill, black/white jobs, Green 500, `#666666`. The Interactive States sentence that keeps the §9 footer-link hover writing unmerged from YAML / §2 link-hover (`:456` then) was the same class and was not named. | Folded into the existing close: "keeping the §9 footer-link hover writing unmerged from the YAML / §2 link-hover writing". Occurrence +0. |
| 2 | `DESIGN.md` Elevation `:182` | Close scoped itself to the utilitarian-depth reading. Line 180's "All three writings stay" (compact YAML / spaced §2 / §1 without trailing offset) is an unmerge decision of the same class as Spacing `:150` and Shape `:168`. | Folded: "and keeping the three shadow-string writings unmerged rather than choosing one spelling as a replacement". Occurrence +0. |
| 3 | `DESIGN.md` Signature motions `:207` | Duration `:188`, easing `:197`, spring `:205`, and B3 `:214` each name their own block. The four signature-motion descriptions (fingerprint-behavior, count-up as a real number, single coordinated surface) had no covering close — same gap as Fugle's Rules block. | New complete form on the heading line. Occurrence +1. |
| 4 | `DESIGN.md` Capture record `:296` | Close named unmerge of outline vs filled-chrome, omit-kind, Focus-vs-`focus-visible`. It did not name the wave-35 decision that Primary hover/active/Focus is not copied onto Secondary or Compact (`:385`). | Folded into the existing list. Occurrence +0. |
| 5 | `DESIGN.md` State treatments `:318` | `:300` says "below" and covers the thirteen-row table. The after-table sentence that keeps the source's illustrative class on the CUDA-error and empty-state strings is a third-class evidence decision sitting after that scope. | New complete form on `:318`. Occurrence +1. |
| 6 | `DESIGN.md` Links `:456` | Same footer-hover unmerge as (1), in Components, ~350 lines from `:98`. Adjacency is per reading, not per document. | New complete form on the unmerge sentence. Occurrence +1. |
| 7 | `DESIGN.md` §9-only constructions `:543` | "These prompt bodies are not additional token-set keys" is an A3 classification with no evidence-class close. Layout `:552` is the next section. | New complete form on that sentence. Occurrence +1. |

After: `grep -oF 'derived editorial implementation inference'` DESIGN **41** / provenance **1** (inventory preamble mention, not a body close) / log **0**. Complete `not NVIDIA-authored or a separately published UI specification` DESIGN **41** / P **1** / log **0**. Body lines: 9, 11, 13, 21, 27, 36, 40, 54, 66, 70, 81, 90, 98, 150, 168, 182, 188, 197, 205, 207, 214, 222, 241, 245, 270, 279, 296, 300, 318, 338, 456, 543, 552, 572, 590, 599, 632, 637, 651, 670, 704.

### E1 — provenance derived scope (1)

| # | Location | What was wrong | What changed |
|---|---|---|---|
| 8 | `provenance.md` Derived editorial inventory | 37 data rows against a 37-close body at intake. After (3)(5)(6)(7) that map would have been **narrow** (fastcampus). `:98` / `:182` / `:296` also under-described the folds. | Preamble: portable body 41 complete / table 41 data rows. Added `:207` Signature motions, `:318` illustrative marker, `:456` Links footer-hover, `:543` §9-only constructions. Expanded `:98`, `:182`, `:296`. Line pointers match the body (`:207` not `:208`). |

Krafton-type same-hex splits (`#000000` page-bg vs light-surface text; `#ffffff` dark-bg text vs light surfaces; `#76b900` outline vs footer fill) were already in `:98`. Not a new row.

### E2 / E2a / E2c — log destinations (4)

Body was not rewritten to chase dest numbers. Dual destinations are both named. Compliance claims match body text.

| # | Location | What was wrong (remeasured) | What changed |
|---|---|---|---|
| 9 | log §10 Voice + §13 Primary tasks | `` `NVIDIA Delivers the Lowest Token Cost` dest 2 ``. Remeasured DESIGN **3** (Primary tasks / tone table / additional published strings). Fitpet-class: a 2nd-destination count that is not the body count. P dest 0 — DESIGN-only. | dest **3** on both rows. src 2 stays (source body). |
| 10 | log YAML `tokens.components` | `` `button-compact` dest 3 ``. Bare slug DESIGN **4** / P **2** because `tokens.typography.button-compact` shares it. Exact `tokens.components.button-compact` DESIGN **3**. `` `button-secondary` dest 3 `` / `` `card-dark` dest 3 `` omitted P dest of the claim-ledger slugs (E2a). | Exact paths DESIGN dest 3 named; bare `button-compact` DESIGN dest 4 / P dest 2; bare `button-secondary` DESIGN dest 3 / P dest 1; bare `card-dark` DESIGN dest 3 / P dest 1. |
| 11 | log §15 durations | `` `motion-instant` `0ms` DESIGN dest 2 ``. `motion-instant` DESIGN **2** is true; `grep -oF '0ms'` DESIGN **6** because `140ms` / `240ms` / `380ms` contain the substring. Dest 2 on `0ms` fails the mandated counter. | `motion-instant` dest 2; `0ms` dest 6 with the substring note; `140ms`/`240ms`/`380ms` dest 1/1/3 unchanged. Signature-motions B2a pointer `:207`. |
| 12 | log §12 inventory count + B2a pointers | "37 data rows". After (8) that would be E2c (compliance stronger than the ledger). §2/§4/§6/§14 still pointed at the pre-fold closes. | 41 data rows / body 41. §2 names the footer-hover unmerge at 98; §4 names 296 / 318 / 456 / 543; §6 names three shadow writings at 182; §14 names 318; §15 names 207. |

B3 / E2c held: `DESIGN.md:214` still names transition properties (DESIGN 2), animation name (3), duration, easing, and reduced-motion behavior (2), plus the per-component gate and the partial-confirmation clause, in full text.

A5a dests that this body pass did not move (remeasured, hex/CTA strings not added by the new closes): `#76b900` DESIGN 34 / P 9; `Learn More` DESIGN 7; `Register Now` 4; `Watch On Demand` 3; `Out Now` 2; `Read Blog` 4.

## 문장 분류 요약

Third-class readings already closed at intake were left. The seven edits above are the ones whose adjacent complete form was missing or incomplete. Scope, Content, and Principles were scanned with the same rule; their existing closes already named the readings they sit on.

## 사후 실측

| pattern | DESIGN.md | provenance.md | migration-log.md |
|---|---:|---:|---|
| `derived editorial implementation inference` | 41 | 1 | 0 |
| `not NVIDIA-authored or a separately published UI specification` | 41 | 1 | 0 |
| inventory data rows | — | 41 | — |
| `NVIDIA Delivers the Lowest Token Cost` | 3 | 0 | 3 |
| `button-compact` | 4 | 2 | 4 |
| `tokens.components.button-compact` | 3 | 0 | 1 |
| `0ms` | 6 | 0 | 7 |
| `Learn More` | 7 | 0 | 4 |
| `#76b900` | 34 | 9 | 8 |
| `prose-derived` | 0 | 33 | 3 |
| `Try Now` | 0 | 1 | 3 |
| `Priya` | 0 | 0 | 0 |
| `cubic-bezier(0.4, 0.0, 0.2, 1)` | 0 | 1 | 1 |
| `transition properties` | 2 | 0 | 2 |

provenance/log hits are mention, not portable-body use.

## 범위 밖 관찰

- **A5a.** Log: gate `copy-loss` compared 0 (empty needle set on this Latin body); hand sweep 32 extracted / 0 missing; YAML `use` 16 / 0; sibling published 6 ledger-only. `verdict: PASS` is not "copy preserved." Sampled issued strings survive in DESIGN.md (`Learn More` 7, `Register Now` 4, `Watch On Demand` 3, `Out Now` 2, `Read Blog` 4, `Explore Solutions` 4, `Explore Curriculum` 1, `Read More` 1, `Browse by Topic` 1, `NVIDIA Delivers the Lowest Token Cost` 3, the Blackwell TCO sentence 2, the developer-command sentence 2, the three-sentence Jensen quote 1, plaque / founding-mission / `See the full stack`). No Latin published-copy loss spotted. Not edited.
- **B1 / sibling promotion.** Sibling-only issued strings DESIGN dest 0: `계속하기`, `Continue`, `Try Now`, `View Datasheet`, `Read Whitepaper`, `Subscribe`, `$5.154T`. Structural classes `Hero Primary` / `Newsletter Primary` / `A11y/Cookie` / `portal H2` DESIGN 0. `rgb(118, 185, 0)` DESIGN 4 / source 1 — source underline rule, not a sibling-only promotion. Footer chrome values (0px, fill, 42 / 46 / 49, 11-13×13-15, 16-18px·700) are in the source footer.
- **D2a.** Deletion rows (log §13, provenance Omission ledger) name 4 fictional archetypes and field kinds only. Identifiers DESIGN/P/log 0. Motivations and affiliation classifications DESIGN 0 (not reconstructed into Audience or Primary tasks). No archetype label that the copy-loss gate would require to be named in the deletion row.
- **E2d.** Dest-0 claims are portable-body dest 0 (`Measured DESIGN.md 0 for those sibling-only strings`). They do not assert "nowhere in the three files" while reprinting the string as a surviving token. Provenance lists sibling-only items as ledger contents.
- **A1 key path.** YAML `tokens.components.button-primary|button-secondary|button-compact|card|card-dark` fields (`type`, `bg`, `fg` where present, `radius`, `padding` where present, `font` where present, `use`) each appear as a row in that component block, plus a `YAML fields:` inventory line. Typography 11 roles are table rows with YAML numbers beside §3 px/rem; token-set paths listed. Not an icook-style field loss. Component tables not edited.
- **Same hex, different roles (krafton).** `#ffffff` canvas vs dark-bg text; `#000000` page-bg vs light-surface text; `#76b900` outline-accent vs footer fill. Already unmerged in the body and named in inventory `:98`.
- **Wave 39.** §15 cubic-bezier values DESIGN dest 0; token names and uses remain (T2). No synthesized motion/spacing rule. Forbidden spring string DESIGN dest 1 as a prohibition.
- **Wave 40 conflict policy.** Outline vs filled chrome, link-hover pair, Primary text `#000000` vs §9 hero `#ffffff`, rounded 2 vs 0px vs 1px vs 50% vs `full: 9999`, YAML spacing 16 vs type 16: unmerged throughout. No per-seat policy split.
- **H100 URL form.** Full `https://www.nvidia.com/en-us/data-center/h100/` source dest 0 (footer writes `/en-us/data-center/h100/`); DESIGN dest 1 / P dest 1. Reconstruction of a path the source named, not a sibling-only fact. Not edited.

AUDIT_DONE fixes=12

---

## 기계검사 정정 — portable_core product_surface_scope (2026-09-02)

검사 출력: limiter 41=41 1:1 OK · use 16/16 OK · gate PASS · `portable_core=false failed=product_surface_scope`.

원인: Scope claim 본문의 원문 두 문장이 `explicitlyNegatesClaim('scope')`에 걸림.
- `:12` (옛 `:11`) `The green is a signal, not a surface.` — `not` 뒤 32자 안에 `\bsurface\b`. 같은 문장에 evidence-boundary 어휘(`verified` / `This contract does not treat … as a proxy` / `the source … not`) 없음.
- `:18` (옛 `:17`) `"Accelerated computing" is a category claim, not a product claim` — `not` 뒤 32자 안에 `\bproduct\b`. ATTRIBUTED 가드 미적용.
한정이 빠진 자리가 아님 — 본문 완전형 41 / 원장 41 유지. 7앵커·governance 정본 문안(authority / application-priority / unknowns / changes)은 이미 바이트 동일. 토큰 값·컴포넌트 표·상태 applicability·원본·원장 행 내용(줄 번호만 제외) 미수정. 원문 문장을 고쳐 쓰지 않음 (E3: 검사기 통과를 위해 원문을 왜곡하지 않음).

정정: `<!-- design-md:claim-end -->`를 실제 제품·표면 범위 문단 `:9` 직후로 옮김. 분위기·브랜드 내러티브·B2a `:12` `:14` `:22`는 `### Scope` 제목 아래 Experience에 남고, scope claim 본문 밖. 시각 줄 수는 DESIGN **714** 유지(삽입 1 / 삭제 1). 원장 위치 포인터 `:11`→`:12`, `:13`→`:14`, `:21`→`:22`.

판정 근거 (행):
- Experience Scope `:9` — 제품·표면 범위 문단. claim 본문. 원장 유지.
- Experience Scope `:12` — `not a surface` 원문. claim 밖. 원장 줄 번호만 갱신.
- Experience Scope `:14` — chrome unmerge. claim 밖. 원장 줄 번호만 갱신.
- Experience Scope `:22` — 내러티브를 토큰이 아니라고 분류. claim 밖. 원장 줄 번호만 갱신.
원장 병합·삭제 0. 본문 한정 신설 0.

실측 (`python` substring count, 파일별; `grep -c` 미사용):

| 문자열 | DESIGN | provenance | log |
|---|---:|---:|---:|
| `The green is a signal, not a surface.` | **2** | 0 | 2 |
| `not a product claim` | **1** | 0 | 2 |
| `This contract does not treat` | **0** | 0 | 1 |
| `derived editorial implementation inference` | **41** | 1 | 1 |
| `<!-- design-md:claim-end -->` | **7** | 0 | 1 |

검증:
- `node scripts/check-limiter-ledger.mjs nvidia` → 본문 41 = 원장 41 1:1 OK
- `node scripts/check-yaml-use-landing.mjs --list nvidia` → use 16/16 (100%) 미착지 0
- `node test-v2/tools/migrate-reference.mjs --brand nvidia --gate-only` → PASS, problems `[]`
- `inspectDesignMd` → `portable_core: true`, failed `[]`

줄 수 DESIGN **714**. `wc -w` DESIGN **10849**. 원본·CURRENT_STATE 미수정.

FIX_DONE nvidia mech

---

## 개정 — 의미 검토 FAIL 2 (2026-09-02)

대상: `docs/design-md-weight/migrated/nvidia/{DESIGN.md,provenance.md,migration-log.md}`. 원본·sibling 미수정. 토큰 값·컴포넌트 표 구조·상태 applicability 미수정. 한정·원장 행 수 41=41 불변.

### 결함 1 — A1 · 항목 9 — padding 이산값 융합

Live-DOM filled lime chrome Padding이 원본 범위 `11-13×13-15`에 sibling 이산값 `11×13 (compact) / 13×15 (standard)`를 괄호 없이 붙여 `11×13 compact / 13×15 standard`로 썼다. 그 문자열은 원본 0 / sibling 0. Components `:357`을 원본 범위만으로 되돌림. sibling 이산 padding은 provenance Sibling file에만 둠. Scope `:14`는 원래 원본 범위만 있어 그대로.

### 결함 2 — A1 · 항목 9 — 높이 3단에 폰트 16/16/18 짝짓기

Font가 원본 `16-18px·**700** Bold strict`에 sibling `corresponding font sizes (16 / 16 / 18)`을 한 문장으로 묶어 `16 / 16 / 18 with those three heights`를 만들었다. 그 문자열은 원본 0 / sibling 0. Components `:359`를 원본 표기로 되돌림. `(16 / 16 / 18)`은 provenance Sibling file에만 둠.

`grep -oF -e` 실측 (파일별; 개정 후; audit-log 이 절 기록 전):

| 문자열 | SRC | SIB | DESIGN | provenance | log |
|---|---:|---:|---:|---:|---:|
| `11-13×13-15` | 1 | 0 | **2** | **2** | 3 |
| `11×13 compact / 13×15 standard` | 0 | 0 | **0** | **0** | 1 |
| `11×13 compact` | 0 | 0 | **0** | **0** | 2 |
| `13×15 standard` | 0 | 0 | **0** | **0** | 2 |
| `11×13 (compact) / 13×15 (standard)` | 0 | 1 | **0** | **1** | 2 |
| `11×13 (compact)` | 0 | 1 | **0** | **1** | 4 |
| `padding 11×13` | 0 | 1 | **0** | **1** | 2 |
| `11×13` | 0 | 3 | **0** | **2** | 9 |
| `13×15` | 0 | 5 | **0** | **2** | 5 |
| `16 / 16 / 18 with those three heights` | 0 | 0 | **0** | **0** | 1 |
| `16 / 16 / 18` | 0 | 1 | **0** | **1** | 4 |
| `16-18px` | 1 | 1 | **2** | **2** | 3 |

로그 extra hits는 dest 행·sibling handling mention (E2d). `derived editorial implementation inference` DESIGN dest **41** 불변. `#76b900` DESIGN dest **34** · `Learn More` dest **7** 불변. 줄 수 DESIGN **714**. `wc -w` DESIGN **10835**.

### 갱신한 dest 행 (`grep -oF -e` 실측)

| 행 | 바늘 | 옛 dest | 새 dest |
|---|---|---|---|
| Footer **Verified** | `16-18px` DESIGN / P | (없음 dest) | **2** / **2** |
| Footer **Verified** | `11×13 compact / 13×15 standard` DESIGN / P | 1 / 0 | **0** / **0** |
| Footer **Verified** | `11×13 compact` DESIGN | 1 | **0** |
| Footer **Verified** | `13×15 standard` DESIGN | 1 | **0** |
| Footer **Verified** | `11×13` DESIGN / P | 1 / 0 | **0** / **2** |
| Footer **Verified** | `13×15` DESIGN / P | 1 / 0 | **0** / **2** |
| Footer **Verified** | `16 / 16 / 18 with those three heights` DESIGN / P | 1 / 0 | **0** / **0** |
| Footer **Verified** | `11×13 (compact) / 13×15 (standard)` DESIGN / P | 0 / 0 | **0** / **1** |
| Footer **Verified** | `11×13 (compact)` DESIGN / P | 0 / 0 | **0** / **1** |
| Footer **Verified** | `padding 11×13` DESIGN / P | 0 / 0 | **0** / **1** |
| Footer **Verified** | `16 / 16 / 18` DESIGN / P | 1 / 0 | **0** / **1** |
| Unique-phrase / mech | `wc -w` DESIGN | 10849 | **10835** |

`node scripts/check-limiter-ledger.mjs nvidia` → 본문 **41** / 원장 **41** (144–184) 1:1 OK.
`node scripts/check-yaml-use-landing.mjs nvidia` → use 16/16 (100%) 미착지 0.
`node test-v2/tools/migrate-reference.mjs --brand nvidia --gate-only` → PASS, `problems: []`.

FIX_DONE nvidia fixed=2 logdest=12
