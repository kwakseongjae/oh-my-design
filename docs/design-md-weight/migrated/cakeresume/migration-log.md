# CakeResume migration log

Source: `web/references/cakeresume/DESIGN.md`
Destination: `docs/design-md-weight/migrated/cakeresume/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/cakeresume/provenance.md`
Date: 2026-08-24
Worker: grok-4.6 T2
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v7
Portable Core: `inspectDesignMd` `portable_core: true`, placeholders 0, `sourceValidation.valid: true`. SHA-256 of portable `DESIGN.md` at worker writing: `c50ea4851304b222e5ce5aae4b4ba443a70ee5a08f3ba0b00321fc1dd11f7f37` — SUPERSEDED dest 2026-08-24 F3. Source SHA-256 `5dd7cde07a7b81d91c2b66e0372792155ecd6098fc9fe3fe62ec69976f8b1988`.

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (id, name, country, category, homepage, primary_color, logo) | 분리 → provenance; primary_color 옮김 → Distinctive / Foundations / Components; homepage 옮김 → Experience `scope`; logo 경계 옮김 → Typography & Assets + Named gaps | Portable file has no frontmatter. Name kept as H1 `Cake Design System`. Catalog `primary_color` `#13AB67` is multi-destination (E2a): provenance identity 14/21/27; portable Scope atmosphere 13; Distinctive list-head 36 / bullet 38 / one-filled-action 45; capture-bound limiter 57 / Reserve 59; Avoid list-head 68 / Don’t 70; Foundations unmerged-role 81 / Brand green 83; capture-record Default action 165 / Secondary Log In 166; Primary Background 186; Secondary Text 213. Catalog homepage `https://www.cake.me` is provenance identity 13/21/44/46/52/58 + portable Scope 9/11 (E2a). provenance 147 restates the URL in the unqualified-inventory sentence; it is not a second portable destination. Catalog favicon URL `https://www.google.com/s2/favicons?domain=cake.me&sz=128` is provenance identity only 15/23. Portable Assets 156 holds a URL-free Google-favicon identity-boundary sentence, not the URL string. Named gaps 327 names `first-party logo mark beyond catalog Google-favicon identity` without the URL (E2a). |
| YAML `omd`, `verified`, token claims, `tokens.source` / `extracted`, `components_harvested` | 분리 → provenance | 출처 원장·freshness·Proof. `tokens.source: prose-derived` (A1c) — provenance 17/25/75/109. YAML has no `ds.type`. None invented. `components_harvested: true` — provenance 19/25/75/108 (A1c). `verified` 2026-06-01 / `tokens.extracted` 2026-06-08 — provenance 33–34. Source footer has no `(omd:migrate)`; none invented (provenance 38). |
| YAML `tokens.colors` / `typography` / `spacing` / `rounded` / `shadow` / `components` | 옮김 → Foundations, Typography & Assets, Components & States | 검증된 값만 최소 필드 단위. Hex 8개 전부 portable Foundations 83–91. YAML unitless spacing xs 4 / sm 8 / md 16 / base 16 / lg 24 / xl 32 / xxl 48 / section 64는 Foundations 95 + provenance claim ledger 92 (E2a); 본문은 32px 높이를 별 관측으로 유지 (B2a 97). YAML `rounded` sm/md/lg 4 + `full` 9999는 Foundations 101 + Shape 103 + Named gaps 328 + provenance 94/112 (E2a). YAML `full` 9999와 Don’t 금지 알약은 충돌로 보존하고 pill 토큰으로 승격하지 않음. YAML `shadow.none`는 Foundations 107 + provenance 95 (E2a). 검증된 primitive type은 컴포넌트별로 보존: button (184) / button (210) / input (235) / badge (260). `Kind: interactive`로 뭉개지 않음 (A1b). Canvas `#FFFFFF`와 on-primary `#FFFFFF`는 별 필드 (88–89, 81). Chip text `#0E0E0F`는 body `#000000`이 아님 (91, 81) (A4). YAML `primary`와 `brand`는 같은 hex `#13AB67`이며 Foundations 83에서 한 역할로 이름만 병기 (provenance 27). |
| §1 Visual Theme & Atmosphere | 옮김 → Experience `scope` claim, distinctive traits | 제품/표면 범위(Cake / CakeResume / cake.me), 현재 표현. Named-evidence-domain / this-contract-covers-the-live-brand-site 11, visual-character extras 13 sit under adjacent complete B2a. Distinctive hex/geometry 38–45 remain under Distinctive list-head B2a 36. 반복 분위기 문장은 범위에 기여하는 요약만. |
| §1 / §11 서사 | 옮김 → Experience `scope` + provenance Narrative | Public-history 15 (Taiwan origin, people/portfolios/companies, multilingual audience) and rename-ambition / green-as-growth 17 sit under adjacent complete B2a. Dual portable Scope + provenance Narrative 71 (E2a). GitHub URL은 provenance-only 53/59. Medium URL은 provenance-only 54/60. Prose “GitHub and Medium URLs stay provenance-only” is 62/71. |
| §2 Color Palette & Roles | 옮김 → Foundations semantic color + Distinctive + Avoid + Components | YAML `tokens.colors` 8 hex 전부. Literal destinations: Distinctive 36–45; Scope observed-values 13; Foundations 83–91; capture-bound 57–64; Avoid 68–73; capture-record 165–168; Type roles heading `#0C4129` 148; Components (Primary 186–187 / Secondary 213 / Language Selector 237–239 / Chip 262–263). Unmerged-role limiter-precedes-list 81. Source palette practice “one decisive thing per view” stays in 81. |
| §3 Typography Rules | 옮김 → Typography & Assets | Inter / Apple SD Gothic Neo. Evidence-class table 127–133 under adjacent complete B2a 125. Family 137–138; font-use boundary 140. YAML size/weight only — no `lineHeight` or tracking; none invented (145, Named gaps 326). Type roles 148–150. Type-rule 16px-to-38px 152. 미확인 family 대체 금지는 Family 140 + 본문 Inter/CJK 분리. |
| §4 Component Stylings | 옮김 → Components & States | Primary (Sign Up), Secondary (Log In), Language Selector, Chip (Neutral). YAML 기하와 본문 기하를 같은 슬롯에 유지. capture selector는 원본에 없음 — 발명하지 않음 (provenance 103). Chip C4: Type badge 260; Kind+map omitted 178/271. |
| §5 Layout Principles | 옮김 → Layout & Platforms + Foundations spacing/shape | Shared 32px height, uniform 4px, whitespace-first, one green action per region. Layout application 276 under adjacent complete B2a. grid/numeric breakpoint는 원본대로 생략. |
| §6 Depth & Elevation | 옮김 → Foundations elevation | YAML `shadow.none` 107. Elevation application 109 under adjacent complete B2a. |
| §7 Do's | 옮김 → Experience principles (capture-bound application) | 브랜드 적용 규칙 57–64. Adjacent complete B2a on the capture-bound list (57). Governance 통제 문구에 넣지 않음. `#378060` supporting-only는 Scope 13 / Distinctive 40 / capture-bound limiter 57 / bullet 64 / Foundations 81/85 (E2a, A3 아님). |
| §7 Don'ts | 옮김 → Experience avoid | 브랜드 금지 68–73. Adjacent complete B2a on the Avoid list (68). Pill/large-radius 금지는 Shape 103 + Named gaps 328와 이중 (E2a). |
| §8 Responsive Behavior | 옮김 → Layout & Platforms + Named gaps | Qualitative reflow 278 under adjacent complete B2a. 16px body baseline, 38px heading scales down, 32px controls keep 4px and shared height, single-column reflow. Numeric breakpoint widths / minimum width unnamed — Named gaps 331 (E2a). 원본에 없는 최소폭·리플로우 수치는 발명하지 않음. |
| §9 Agent Prompt Guide | 삭제 | 도구별 명령·복붙 프롬프트. 흰 캔버스·`#13AB67`/`#FFFFFF`/`#0C4129`·Inter 38px/600 / 16px / 14px/400·4px·32px·1px `#D1D6D4`·chips `#E2E6E4`/`#0E0E0F`·`#378060` supporting·shadow 금지는 이미 Foundations/Components/Typography/capture-bound에 있음 (A3: §9-only 고유값 없음). 슬롯 없는 위임 없음. 확인: portable 본문에 `Build on a pure white` / `omd-apply` 없음. |
| §10 Voice & Tone | 옮김 → Content & Locales | Observed labels “Sign Up” / “Log In” 285 remain unqualified. Voice-register 283 and microcopy-plain / 14px match / no-synthetic-voice 287 have adjacent complete B2a. 합성 보이스 샘플 없음. 원본에 없는 storefront 등 부정 claim 신설 없음 (D1). |
| §11 Brand Narrative | 옮김 → Experience `scope` + provenance Narrative | Unique propositions in portable Scope 15/17 under adjacent complete B2a: Taiwan origin as CakeResume; connecting people, portfolios, and companies; multilingual audience; rename as broader career surface; deep-green + brand green as growth/trust. Dual Scope + provenance Narrative 71. Not provenance-only, not deleted. GitHub/Medium URL strings are provenance-only 53/54/59/60. |
| §12 Principles | 옮김 → Experience principles | Principles 1–5 as a whole sit under adjacent complete B2a: derived editorial implementation inference from the verified surfaces; they are not Cake-authored or a separately published UI specification (49). Governance 일반 문구는 그 한정의 대체물이 아님. |
| §13 Personas | mixed: independently verified surface work → `primary-tasks`; fictional archetypes 삭제 | Generic deletion only: fictional archetype material deleted; not re-hosted (D2). Independently verified tasks는 Sign Up / Log In / header language selector 세 항 (`count=3`) under adjacent complete B2a. Audience no-invented-personas. **[SUPERSEDED dest 2026-08-24 wave13 sol resubmit — prior current-class re-hosted persona-derived grep literals.]** |
| §14 States | 옮김 → Components & States capture record + per-component applicability + Named gaps | 본문 4행 보존 165–168 (Default action, Secondary Log In, Selector default, Neutral chip). Hover/pressed/focus uncaptured sentence 170. Capture-record graph-not-adopted 163. Capture-record omitted-rather-than-synthesized 172. 선언 컴포넌트는 의미로 적용하되 미관측 시각값은 발명하지 않음. `not captured`를 `not-applicable` 사유로 쓰지 않음 (C1). Language Selector loading/error/success는 locale-selection 역할로 not-applicable (253–255) (C2). Primary: loading applicable (primary submit); error/success omitted 204 (C2). Secondary Log In: loading/error/success omitted 229 (C2). Chip: Kind+map omitted (C4) 178/271. graph 위임 없음. This is not a complete state-coverage claim (C3, 174). Hover/pressed/focus visual also Named gaps 323 (E2a). |
| §15 Motion & Easing | 옮김 → Foundations motion + Named gaps | 무출처 커브 없음(삭제할 값 없음). “Specific motion timings and easing curves were not captured during live inspection” 113. duration/easing 비승격. Motion-character (quick/understated; no bounce; crisp engineered) 115 under adjacent complete B2a. Foundations Motion은 B3 다섯 증거 종류(transition properties · animation name · duration · easing · reduced-motion behavior)를 컴포넌트별 computed 관측한 뒤에만 승격한다는 게이트를 전문 명시 117. “공식 출처로 검증될 때까지” 약화 문구 없음 (B3, E2c). Named gaps 324 is shortened inventory, not the B3 전문 (E2a / E2c). |
| Footer **Verified** / Tier 1 / Tier 2 / Conflicts / Proof | 분리 → provenance; product Tier 1 URL 옮김 → Experience `scope` | Verified 2026-06-01 freshness is provenance 33/38. Tier 2 unusable records (getdesign.md/cakeresume NOT LISTED, refero not listed) and Conflicts unresolved stay provenance-only 36/64–67. Footer Tier 1 product URL `https://www.cake.me` is dual Scope 9/11 + provenance 13/21/44/46/52/58 (E2a). GitHub URL provenance-only 53/59. Medium URL provenance-only 54/60. Proof pointer `.verification.md` is provenance 107. |

### F1 / F2 (v7 mandatory final passes)

Worker F1/F2 completeness is not a current-class claim (E2c). Reconstruction-boundary exemption not used. No “no unqualified sentence remains” claim (E2c).

### F1 B2a scan (worker)

SUPERSEDED dest 2026-08-24 F3. Worker list omitted Primary tasks, Capture-record graph-not-adopted, extra names under existing limiters, and used stale line numbers after later edits.

### F2 E2 grep (worker)

SUPERSEDED dest 2026-08-24 F3. Worker `#13AB67` / Inter / Assets / type / §14 / B3 / GitHub-Medium dest maps were incomplete or stale.

### Revision 2026-08-24 (F3 audit)

Auditor grok-4.6, fresh session. B2a·E2 only. Token values, component tables, state applicability, and section structure unchanged. See `audit-log.md`.

F1 inventory after this scan: Scope 11/13/15/17; Primary tasks 23; Audience 32; Distinctive 36; Principles 49; capture-bound named Do’s 57; Avoid named Don’ts 68; Semantic unmerged-role limiter-precedes-list 81; Spacing 97; Shape 103; Elevation 109; Motion-character 115; Font 125; Family 140; Type-rule 152; Assets 156; Capture graph-not-adopted 163; Capture omitted-rather-than-synthesized 172; Layout 276/278; Content 283/287.

Left without B2a: catalog identity / homepage URL / product bundle; YAML tokens / primitive types; §14 four default rows / hover-pressed-focus uncaptured sentence 170; B3 five-kind gate 117; Core C1/C2/C3 174; C2 204/229; C4 178/271; quoted labels “Sign Up” / “Log In” 285; Governance; Named gaps.

F2 greps after this scan:
- `#13AB67` → DESIGN 13/36/38/45/57/59/68/70/81/83/165/166/186/213 + provenance 14/21/27 (inventory 125 names the hex in a B2a site label, not a token dest)
- `https://www.cake.me` → DESIGN 9/11 + provenance 13/21/44/46/52/58 (147 inventory restatement, not a portable dest)
- Google favicon URL → provenance 15/23 only. URL-free boundary → Assets 156 + Named gaps 327
- `prose-derived` → provenance 17/25/75/109 only
- `components_harvested: true` → provenance 19/25/75/108 only
- YAML spacing xs 4 … section 64 → Foundations 95 + provenance 92
- YAML `rounded.full` 9999 → Foundations 101/103 + Named gaps 328 + provenance 94/112
- YAML `shadow.none` → Foundations 107 + provenance 95
- Inter (word) / Apple SD Gothic Neo → DESIGN 13/42/55/125/130/132/133/137/140/148/149/150/192/193/218/283 + provenance 147. provenance 110 is “Interaction expansions”, not the face
- Primitive types button / button / input / badge → 184 / 210 / 235 / 260
- §14 four defaults → 165–168; hover sentence → 170 + Named gaps 323
- B3 전문 → Foundations Motion 117. Named gaps 324 is not that sentence (E2c)
- Language Selector L/E/S not-applicable 253–255
- GitHub URL → provenance 53/59. Medium URL → provenance 54/60. “GitHub and Medium” prose 62/71
- §13 biographies → fictional archetype material deleted; not re-hosted. Not re-hosted in this log.
- §9 tool prompt → `Build on a pure white` / `omd-apply` empty in portable body
- `#378060` → DESIGN 13/40/57/64/81/85
- `#0C4129` → DESIGN 13/39/57/60/68/73/81/84/148

Post-F3 DESIGN SHA-256 `c1e1778a655b55f53feac403c6aee369513263ea4c99eae080e08dbc04f90777`. `--gate-only` PASS, problems []. Core `portable_core: true`. Not a catalog-adoption claim (E2c).


## Revision 2026-08-24 (wave13 sol resubmit)

List-only revision against `docs/reviews/t2-1-wave13-2026-08-24-sol-full.md` cakeresume conditions 1–5. Rulebook v7. New F3 was not run. Worker-session and post-F3 dest maps above are **[SUPERSEDED dest 2026-08-24 wave13 sol resubmit]**. Not a catalog-adoption claim (E2c).

1. Canonical Proof sidecar `web/references/cakeresume/.verification.md` is present. provenance Proof notes record heading, Inspected 2026-06-01, playwright getComputedStyle method, three sources, and raw samples. False-absence deleted.
2. Font table is Live surface-use only: Inter + Apple SD Gothic Neo, with YAML `family.sans` / `family.cjk` naming those same live-confirmed faces. Official-product-use / official-distributed negatives and Declared-only misclassification deleted.
3. Capture-bound lists five source §7 Do’s (57). `#378060` supporting-only is §2/§9 (65), not a sixth §7 Do.
4. Persona-derived literals deleted from current portable/sidecar/this log. Generic deletion only: fictional archetype material deleted; not re-hosted.
5. Current dests grepped below. SHA and both machine checks re-run.

F2 greps after this revision (value + field/role context):

- Canonical `.verification.md` → provenance Proof notes 107– (heading / Inspected / Method / Sources / raw samples). Not a portable token table.
- `#13AB67` → DESIGN 13/36/38/45/57/59/69/71/82/84/162/163/183/210 + provenance identity
- `https://www.cake.me` → DESIGN 9/11 + provenance identity/surfaces
- Google favicon URL → provenance identity only. URL-free boundary → Assets + Named gaps
- five source §7 Do’s → DESIGN 57–63. `#378060` supporting-only → DESIGN 13/40/65/82/86
- `#0C4129` → DESIGN 13/39/57/60/69/74/82/85/145
- Live surface-use Inter / Apple SD Gothic Neo → DESIGN 126/130/134
- Primitive types button / button / input / badge → 181 / 207 / 232 / 257
- §14 four defaults → 162–. Language Selector L/E/S not-applicable → 250–252
- B3 전문 → Foundations Motion 118. Named gaps 316 is inventory form
- fictional archetype material deleted; not re-hosted → provenance Proof notes + this log §13. Literals not re-hosted here.

Post-revision DESIGN SHA-256 `5b44da4936ada1c813450aaea948216cfd6e9f1cc9d2c338546d0dbb28de5035`. `--gate-only` PASS, problems []. Core `portable_core: true`. F3 was not re-run. Not a catalog-adoption claim (E2c).


## Revision 2026-08-24 (wave13 ledger sync)

Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v7. Source remainder: `docs/reviews/t2-1-wave13-2026-08-24-sol-recheck.md` cakeresume condition 5. DESIGN.md not edited. New F3 not required. E2c: this revision does not re-assert F1/F2/F3 closed. Unmarked provenance current dests from Revision 2026-08-24 (wave13 sol resubmit) are **[SUPERSEDED dest 2026-08-24 wave13 ledger sync]**.

| Item | Prior current dest | Actual current dest |
|---|---|---|
| Brand green / unmerged-role | 83 / 81 | 84 / 82 |
| capture Default / Secondary Log In | 165 / 166 | 162 / 163 |
| Primary Background / Secondary Text | 186 / 213 | 183 / 210 |
| Assets Google-favicon boundary / Named gaps first-party logo | 156 / 327 | 153 / 324 |
| Font evidence B2a | 125 | 126 |
| B3 전문 | 117 | 118 |
| Avoid Don’ts B2a | 68 | 69 |
| C1/C2/C3 / per-control C2 / C4 | 174 / 204/229 / 178/271 | 171 / 201/226 / 175/268 |

### F2 (this revision; value + field/role context)

- `#13AB67` Brand green → 84; unmerged-role limiter → 82; capture Default → 162; Secondary Log In → 163; Primary Background → 183; Secondary Text → 210
- Google-favicon URL-free boundary → Assets 153; first-party logo Named gaps → 324
- Font live-surface-use B2a → 126
- B3 전문 → Motion 118. Named gaps 316 is inventory form
- Avoid Don’ts B2a → 69 / Don’t bullet 71
- C2 Primary omit → 201; Secondary omit → 226; C4 chip → 175/268; C3 capture-record → 171

SHA-256 `5b44da4936ada1c813450aaea948216cfd6e9f1cc9d2c338546d0dbb28de5035` unchanged (DESIGN.md not edited). This log does not claim F2 completeness beyond those greps, and does not re-assert F1/F2/F3 compliance as closed (E2c). Not a catalog-adoption claim (E2c). F3 was not re-run.
