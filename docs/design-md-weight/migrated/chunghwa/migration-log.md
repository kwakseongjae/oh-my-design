# Chunghwa Telecom migration log

Source: `web/references/chunghwa/DESIGN.md`
Destination: `docs/design-md-weight/migrated/chunghwa/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/chunghwa/provenance.md`
Date: 2026-08-24
Worker: grok-4.6 T2
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v7
Portable Core: command output is recorded after the gate run below. This is not a catalog-adoption claim (E2c).
카탈로그 채택 아님.

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (id, name, country, category, homepage, primary_color, logo) | 분리 → provenance; homepage 옮김 → Experience Scope; `primary_color` 옮김 → Scope token-note + Distinctive + Foundations Chunghwa Blue / Semantic unmerged-role + capture-bound + Primary CTA + Blue Feature Badge; logo URL 옮김 → Typography & Assets + provenance | Portable file has no frontmatter. Name kept as H1 `Chunghwa Telecom Design System`. Homepage `https://www.cht.com.tw` is dual Scope 9/11 + provenance identity/surfaces/Proof (E2a). Catalog `primary_color` `#209cff` is identity + portable Scope token-note 13 / atmosphere 15, Distinctive unmerged B2a 42 / bullet 44, Principles 58 / capture-bound 63 / Do 65, Semantic unmerged-role 91 / Chunghwa Blue 93, Capture-record Error 231, Primary CTA Background 251 / field note 260, Find More Text 280 / field note 287, Blue Tint Card Text 392 / field note 397, Orange Promo Badge field note 411, Blue Feature Badge Background 420 / field note 425, provenance Identity (E2a). Avoid 77 names `#ff874d`, not this hex. Content Observed 502–508 is live strings without this hex. Catalog favicon URL `https://web-eshop.cdn.hinet.net/eShop%20Images/Consumer/Faicon/Faicon_logo_128x128.png` is dual: provenance identity + portable Typography & Assets 213 (E2a). Not a Google s2 lookup. A first-party logo-file gap sentence was not generated. |
| YAML `omd`, `verified`, token claims, `tokens.source` / `extracted` / `note`, `components_harvested` | mixed: `omd` / `verified` / `extracted` / `components_harvested` / `tokens.source` YAML keys 분리 → provenance; `tokens.note` 옮김 → Experience Scope + provenance; `live-extract` 값 옮김 → Font evidence live computed + provenance | `tokens.source: live-extract` YAML key and `components_harvested: true` are provenance-only as keys (A1c; provenance Identity). The `live-extract` extraction-class literal is provenance Identity/Claim ledger only (E2). Portable Font evidence restates live computed surface-use without that string. Token note is dual Scope 13 + provenance identity (E2a, B2/B2a). YAML `verified` / `extracted` 2026-06-22 are provenance freshness. Footer Verified is provenance freshness. |
| YAML `tokens.colors` / `typography` / `spacing` / `rounded` / `shadow` / `components` | 옮김 → Foundations, Typography & Assets, Components & States; YAML `use` also Primary tasks | 검증된 값만 최소 필드 단위. YAML unitless lineHeight 1.40 / 1.42 / 1.38 / 1.60 / 1.44 / 1.50 비율 보존 (A1a) Type roles 196/202–209. Body-table Small / Label 1.30 is not a YAML `lineHeight` field (209). YAML typography `use` restored on Type roles 202–208 (A1). Body-table Notes restored on the same rows. YAML spacing xs 4 / sm 8 / md 12 / base 16 / lg 20 / xl 32 / xxl 48 / section 64는 숫자 보존, px 접미사 비발명 (Spacing 109, Layout 469). YAML `rounded.full` 100는 YAML step으로 보존되고 harvested `100px` 및 live “回首頁” `30px`와 비합침 (Shape 115/119/123/127, Primary CTA field note 260). 검증된 primitive type은 컴포넌트별로 보존: button×2 (249, 277) + tab×2 (302, 327) + card (376) + input (349) + badge×2 (404, 418). Blue Tint Card YAML `tokens.components` row 없음 — Type 발명 없음 (243/397). `Kind: interactive`로 뭉개지 않음 (A1b). `#209cff`와 `#0083ec`와 `#ff874d`, `#fafafa`와 `#ffffff`, `#333333`와 `#666666`와 `#4c4c4c`와 `#686868`, `#eaeaea`와 `#cbcbcb`는 비합침 (A4). YAML `shadow.card` / `none` 문자열은 Elevation 139. Primary tasks dests from these YAML `use` strings: 31–33 (primary CTA 258, find-more 285, search 359). |
| §1 Visual Theme & Atmosphere | 옮김 → Experience `scope` claim, distinctive traits | 제품/표면 범위. Two-URL evidence-domain assignment (11) names the source-footer Tier 1 URLs. Product-origin (9), token-note register-split including `#209cff`-as-CTA-fill-not-accent / search-`#686868`-as-component-field (13), atmosphere extra names (15), public-history (17), mission-evolution (19), backbone-posture (21), refusal/embrace (23) 문단 인접에 derived editorial implementation inference / not Chunghwa Telecom-authored or a separately published UI specification 한정 (B2/B2a). Distinctive unmerged-role extras have adjacent complete B2a immediately before the bullets (42). `https://www.cht.com.tw/` / `https://www.cht.com.tw/home/cht/personal/`는 provenance와 dual (E2a). |
| §1 / footer / §11 공식 URL | 분리 → provenance; 본문 Scope에도 | 서사·freshness 원장. 본문은 토큰 경계 한정을 유지. Two URLs remain named as brand-owned Tier 1. Evidence class is public-history narrative plus live inspect, not Official history. |
| §2 Color Palette & Roles | 옮김 → Foundations semantic color | YAML hex 전부 + search `#686868` + Avoid `#000000`. Unmerged-role extra characterizations have adjacent complete B2a at 91 (B2/B2a). `#0083ec` named hover is not `focus-visible` (94, 237). `#cbcbcb` Input Border 105 is not hairline `#eaeaea` 104. |
| §3 Typography Rules | 옮김 → Typography & Assets | 증거 등급. YAML `family.display` PingFang TC vs YAML `family.body` stack vs live stack with `SF Pro Text` kept unmerged (186–192). YAML `use` restored (202–209). Body-table Notes restored on Type roles (202–209) (A1/A4). Font evidence-class B2a (179). Live computed surface-use row 183; YAML family keys name those live computed families. Family font-use (192) / type-rule (198) / ratio-versus-size-local (196) 독해는 각 인접 완전 B2a (B2/B2a). 원본에 없는 type-spec / FontFaceSet / exclusive-file 부정은 만들지 않음 (D1). |
| §4 Component Stylings | 옮김 → Components & States + Primary tasks | Primary CTA / Find More `Type: button` 249/277; Primary Tab / Secondary Nav `Type: tab` 302/327; White Service Card `Type: card` 376; Search Input `Type: input` 349; Orange / Blue badges `Type: badge` 404/418 (White Service Card / Blue Tint Card / badges kind/map 생략, C4 243/385/399/413/427/566). Blue Tint Card YAML row 없음 — Type 발명 없음. Capture selector 없음 — 발명하지 않음. Primary CTA loading·error·success omitted (C2) 269. Find More loading·error·success omitted (C2) 296. Search Input error applicable 369; loading/success omitted 371. Nav L/E/S는 destination/selection 역할로 not-applicable 317–319 / 341–343 (C2; `not captured` 사유 아님, C1). Named Primary Hover `#0083ec`는 hover 행에 기록되고 focus-visible 행에 hex 없음 (B1, 237/241/257/265/271). Field notes have adjacent complete B2a on unmerged-field readings (260/287/309/333/361/383/397/411/425). Nav captured-variant-not-click-transition has adjacent complete B2a (321). Primary tasks from these YAML/§4 uses: 31–33. Live “我接受” 54px/`16px`/`100px` and live “回首頁” 50px/`0px 35px`/`30px` stay unmerged from YAML 50px/`16px 35px`/`100px` (260). YAML search border `#cbcbcb` and body §4 `#eaeaea` stay unmerged (353–354/361). |
| §5 Layout | 옮김 → Layout & Platforms + Foundations spacing/shape | YAML scale + body 4px-base + harvested heights. Shape local-geometry limiter precedes the labeled list (117). Layout utility-over-luxury extras (471)와 recorded-span / collapsing / not-cross-viewport (481, limiter precedes the breakpoint table)는 각 절 인접 완전 B2a (B2/B2a). 1440px / 5 tabs / 4–6 column grids / 20px dominant radius ~46% 보존. |
| §6 Depth & Elevation | 옮김 → Foundations elevation | YAML `shadow.card` 139 + YAML `none` 139 + three-level table 133–137. Elevation-table Use limiter precedes the table (131) (B2/B2a). YAML `shadow.card`는 White Service Card에 복사되지 않음 (141/383). |
| §7 Do's | 옮김 → Experience principles (capture-bound application) | Capture-bound grouping of §7 Do’s named rules has adjacent complete B2a (63) (B2/B2a). Governance 통제 문구에 넣지 않음. |
| §7 Don'ts | 옮김 → Experience avoid | 브랜드 금지. Avoid list-head named Don’ts 인접 완전 B2a (75); last-bullet overload-the-blue-accent 인접 완전 B2a (83) (B2/B2a). `#000000`는 Avoid limiter 75 / Don’t 82 only (not Distinctive, not Foundations Semantic) (E2a). |
| §8 Responsive Behavior | 옮김 → Layout & Platforms | Source breakpoint table Mobile <640px / Tablet 640–1024px / Desktop 1024–1440px 보존 (487–489). Touch-purpose / collapsing / source-stated-heights-not-cross-viewport 독해는 Layout 인접 완전 B2a (481) (B2/B2a). Touch 50px / 34px / 38px 보존 (493). |
| §9 Agent Prompt Guide | mixed: 도구 프롬프트 삭제; 고유 parent-child tuple 옮김 → local recipes | 도구별 복붙 프롬프트·Quick Color Reference·Iteration Guide 삭제 (A2). 검증된 hex/radius/height/family는 이미 Foundations/Type/Components에 있음. Unique tuples restored (A3/A4): White Service Card 429–441 (white `#ffffff` parent on `#fafafa` + 16px radius + no shadow + 18px/700 title + 16px/400 secondary); Navigation Bar 443–453 (white parent + 5 tabs at 16px PingFang TC, active 700/`#333333`, inactive 400/`#666666`); Promo Badge on Service Card 455–464 (`#ff874d` / white / 4px / 13px in the upper corner of a service card). Those tuples are not promoted as global tokens. Remaining prompt-only constructions stay omitted in provenance omitted-prompts. |
| §10 Voice & Tone | 옮김 → Content Observed + derived voice (인접 B2a) | Live Observed strings 502–508 under citation-character B2a (500). Derived editorial voice + tone table + forbidden register under adjacent complete B2a (514). Treating §14 rows as state-contract not extra voice samples has adjacent complete B2a (510) (B2/B2a, E1). |
| §11 Brand Narrative | 옮김 → Experience `scope`; 서사 원장 분리 → provenance | 1996 spin-out / 2005 privatization / TWSE:2412 / NYSE:CHT / widest fixed-line / largest HiNet fiber / lead 5G operator restated in portable Scope 17; phones-to-digital-life mission evolution Scope 19; backbone-versus-challenger and institutional-versus-playful posture Scope 21; stable/trustworthy blue, dense IA, dual-language nav Scope 23; each derived relationship has adjacent complete B2a (A1, B2/B2a). Evidence class is public-history narrative. |
| §12 Principles | 옮김 → Experience principles | 다섯 항목 전체 editorial readings. 인접 본문에 derived editorial implementation inference / not Chunghwa Telecom-authored or a separately published UI specification (55). Each UI implication has adjacent complete B2a (57–61). Capture-bound grouping (§7 Do’s) has adjacent complete B2a (63). Governance 일반 문구는 그 한정의 대체물이 아님 (B2/B2a, E1). |
| §13 Personas | mixed: 가상 biography 삭제·sidecar 재수록 없음; Audience는 배제 경계만 | 원본이 named fictional archetypes. Names/biographies/ages/cities는 portable Audience에도 provenance에도 없음 (D2). Audience no-individual-personas-promoted + observable-work-follows-three-tasks application have adjacent complete B2a (38) (B2/B2a). Primary tasks 3건 dests are on the YAML/§4 source-rows (YAML `use` 258/285/359 → Primary tasks 31–33), under adjacent complete B2a as YAML-use-strings-not-from-§13 (29). The portable body does not call those tasks independently verified (E2c); independently verified in this packet is the inspected homepage URL (29). |
| §14 States | 옮김 → Components & States capture record + per-component applicability | 본문 보존: Empty (search) / Empty (service unavailable) / Loading (page / panel) / Loading (search results) / Error (session expired) / Error (form validation) / Success (application submitted) / Skeleton / Disabled (A2) 227–235. Capture-record table characterizations have adjacent complete B2a immediately before the table (223) (B2/B2a). Graph-not-adopted preservation sentence has adjacent complete B2a (221). 선언 컴포넌트는 §4.4를 닫되 미관측 시각값은 발명하지 않음. `not captured` / `not named`를 `not-applicable` 사유로 쓰지 않음 (C1). Primary CTA loading·error·success omitted (C2) 269. Find More loading·error·success omitted (C2) 296. Search Input error applicable 369; loading/success omitted 371. Nav L/E/S role-based not-applicable 317–319 / 341–343. White Service Card / Blue Tint Card / badges kind/map 생략 (C4) 243/385/399/413/427/566. Named hover `#0083ec`는 focus-visible 행에 hex 없음 (B1, 237/241/257/265/271). graph 위임 없음. State coverage 완료 주장 없음 (C3, 239/241). |
| §15 Motion & Easing | 옮김 → Foundations motion | Durations 100ms / 200ms / 300ms 149–151; easing names 157–159; signature carousel / sub-nav / reduced-motion 167–169. Utilitarian-portal and functional-and-imperceptible are named on adjacent complete B2a at 145 and 163 (B2/B2a); they are limiter names, not a second prose restoration at 165–169. Source-stated classification under adjacent complete B2a (145); not computed CSS. 무출처 cubic-bezier 3개 (`ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)` / `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` 템플릿 일치 / `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)`)는 provenance omission ledger (E2b). Foundations Motion은 B3 다섯 증거 종류(transition properties · animation name · duration · easing · reduced-motion behavior)를 컴포넌트별 computed 관측한 뒤에만 승격한다는 게이트를 전문 명시 (171). “공식 출처로 검증될 때까지” 약화 문구는 쓰지 않음 (B3, E2c). Named gaps 567 refers to all five kinds in inventory form and does not enumerate them; the B3 full promotion-gate sentence is Foundations Motion 171 only. |
| Footer **Verified** / Tier 1 / Tier 2 / Conflicts / HTML-comment Proof | mixed: freshness 분리 → provenance; live URLs는 portable에도; Proof sidecar + HTML comment 연결 → provenance | Dual (E2a): homepage/personal URLs는 Scope 9/11 + provenance Surfaces/Sources/Tier 1/Proof. Footer verified 2026-06-22는 provenance freshness only. Conflicts unresolved: none. Source HTML comment raw samples + canonical sidecar `web/references/chunghwa/.verification.md` 분리 → provenance Proof. Derived mirror `design-md/chunghwa/.verification.md` has the same SHA-256 `f73e60d22edacfd0006e5e76df9e0977ca3d9a64c98a561bff5a64e8c1ce6227`. Canonical is `web/references`. Sidecar Inspected 2026-06-22; Method playwright getComputedStyle; Sources the two inspected URLs. Portable body does not re-host the Proof rgb dump (E1). Sidecar-only fractional search font-size / extra sub-nav computed height / active-tab padding / `rgb(2,103,185)` stay on the Proof ledger without px figures the legacy DESIGN.md does not contain, and are not portable tokens. |

### F1 / F2 (v7 mandatory final passes)

F1 B2a scan and F2 grep were performed on this draft after the portable body was complete. Worker completeness is not a current-class claim that no unqualified sentence remains (E2c). This is not a catalog-adoption claim. Historical worker sentence `F3 was not run` is superseded: a fresh-session F3 did run (`audit-log.md`, `AUDIT_DONE fixes=14`). This revision does not re-run F3.

### F1 B2a scan (full DESIGN.md reread)

Reread DESIGN.md from line 1. Every causal / interpretive / judgment sentence checked for evidence class. Adjacent complete B2a (`derived editorial implementation inference` / `not Chunghwa Telecom-authored or a separately published UI specification`) sites match `provenance.md` Derived inventory. Capture-record named-hover-not-focus-visible (237) and YAML-row-absent-Type-not-invented (243) were confirmed in that reread. Lines 239/241 are Core C1/C2/C3 restatements adjacent to 237, not separate complete B2a phrases. Primary CTA 269 now carries adjacent complete B2a on session-expired-page-row-not-this-button-error-state. Governance Authority / priority / unknowns / changes are controlled copy, not brand interpretation. Worker completeness is not a current-class claim that no unqualified sentence remains (E2c).

### F2 grep (this draft)

Grep after body + provenance + this log (three files):

- Canonical Proof sidecar `web/references/chunghwa/.verification.md` → provenance Proof. Derived mirror `design-md/chunghwa/.verification.md` same SHA-256 `f73e60d22edacfd0006e5e76df9e0977ca3d9a64c98a561bff5a64e8c1ce6227`. Portable DESIGN.md does not re-host the Proof rgb dump.
- Catalog `primary_color` `#209cff` → DESIGN 13/15/42/44/58/63/65/91/93/231/251/260/280/287/392/397/411/420/425 + provenance Identity. Avoid 77 names `#ff874d`, not this hex. Content Observed 502–508 is live strings without this hex.
- Hover `#0083ec` → DESIGN 13/42/45/91/94/241/257/259/260/265/271/564 + provenance Identity. Capture 237 names the hover-versus-`focus-visible` reading without this hex.
- Accent `#ff874d` → DESIGN 13/15/42/46/58/63/67/77/91/97/260/406/411/425/457/461 + provenance Identity. Avoid limiter 75 names orange-as-accent-only; Don’t 77 has this hex.
- Google-style favicon URL is absent. First-party HiNet CDN URL → Assets 213 + provenance identity only (not Named gaps).
- Homepage `https://www.cht.com.tw` → Scope 9/11 + provenance identity/surfaces/Proof.
- Personal-services URL → Scope 11 + provenance surfaces/Sources/Tier 1/Proof.
- `tokens.source` / `components_harvested` YAML keys and the `live-extract` extraction-class literal → provenance only. Portable Font evidence names live computed surface-use without that string.
- YAML `use` strings → Type roles 202–209 and component Use 258/285/307/331/359/381/409/423; Primary tasks 31–33 carry primary CTA / find-more / search uses.
- Body-table Notes → Type roles 202–209.
- `Type: button` ×2 → 249/277. `Type: tab` ×2 → 302/327. `Type: card` → 376. `Type: input` → 349. `Type: badge` ×2 → 404/418.
- Primary CTA omission sentence → 269. Find More omission → 296. Search Input loading/success omission → 371. Not destination `not-applicable` rows.
- Nav L/E/S not-applicable → 317–319 / 341–343 (destination/selection role, not `not captured`).
- White Service Card / Blue Tint Card / badges C4 omit-kind → 243/385/399/413/427.
- Persona names absent from DESIGN.md and provenance.
- `omd-apply` / `npx omd` / `[FILL IN]` absent from portable body.
- §14 nine rows → Capture record 227–235.
- YAML `rounded.full` string → Distinctive 42 / Shape 123 / Primary CTA field note 260. YAML `full` 100 step also Distinctive 49 / Shape 115/119/123/127; harvested `100px` and live `30px` unmerged.
- Avoid `#000000` → 75/82 only.
- Search `#686868` → 13/42/91/352/361.
- `#cbcbcb` / `#eaeaea` → 13/42/91/104/105/234/235/353–354/361.
- B3 five-kind gate sentence → Foundations Motion 171 only. Named gaps 558 is inventory; line 567 refers to the five kinds and is not the B3 full promotion-gate sentence.
- Unattributed cubic-bezier values → provenance omission ledger only, not portable Foundations.

`node test-v2/tools/migrate-reference.mjs --brand chunghwa --gate-only` → PASS, problems `[]`.
`node scripts/migrate-design-md-core.cjs --input docs/design-md-weight/migrated/chunghwa/DESIGN.md --check --require-portable-core --json` → `portable_core: true`.
Post-F3 DESIGN SHA-256 `046e292c241960a6a9930e9d2cb5a2d375f9cdde930b8d661d85252b3424adcd`. Worker SHA `70e4858c3d183ef19f742330c44ed3a953a361718f5cfd508187d60aaf60612e` is superseded. Not a catalog-adoption claim (E2c).

### Revision 2026-08-24 (F3 B2a·E2 audit)

Fresh-session auditor grok-4.6. Adjacent complete B2a expanded in-place on DESIGN 15/87/159/188/256/265/305/357/437/460. Dest maps and derived inventory grepped against current files. Token values, component tables, state applicability, and section structure were not changed. See `audit-log.md`.

## Revision 2026-08-24 (wave14 sol resubmit)

Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v7. Source remainder: `docs/reviews/t2-1-wave14-2026-08-24-sol-full.md` chunghwa conditions 1–5. New F3 not required. E2c: this revision does not re-assert F1/F2/F3 closed. Not a catalog-adoption claim.

1. Carousel slide = `motion-standard`; auto-advance is source-stated slow cadence prose, not `motion-slow`; `ease-standard` is carousel two-way easing. Those three stay unmerged (Motion 163/165/167).
2. §11 facts and derived relationships restored in portable Scope 17/19/21/23 with adjacent complete B2a on each derived relationship.
3. Proof-only measurements restored exactly in provenance: active-tab padding 6 px, sub-nav height 69 px, search 13.33 px, independent radius scan `20px`×86 / `50px`×26. Not merged with portable 13px / 34px / 38px / radius tokens.
4. `live-extract` literal is provenance-only. Historical worker sentence `F3 was not run` is superseded; fresh F3 already ran.
5. provenance/migration/audit/F2 dests grepped against current files. `--gate-only` and portable Core re-run. **[SUPERSEDED dest 2026-08-24 wave14 pointer sync — current dests in Revision 2026-08-24 (wave14 pointer sync).]**

Current DESIGN SHA-256 `4f7e86db6b88651f60654f90feb355d87472e8e674883e16b942c94f1fa4c488`.

## Revision 2026-08-24 (wave14 pointer sync)

Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v7. Source remainder: `docs/reviews/t2-1-wave14-2026-08-24-sol-recheck.md` chunghwa condition 5. DESIGN.md not edited. New F3 not required. E2c: this revision does not re-assert F1/F2/F3 closed. Unmarked current dests from Revision 2026-08-24 (wave14 sol resubmit) are **[SUPERSEDED dest 2026-08-24 wave14 pointer sync]**.

| Item | Prior current dest | Actual current dest |
|---|---|---|
| Motion source-stated / signature limiter | 141 / 159 | 145 / 163 |
| Duration / easing / signature numbered | 145–147 / 153–155 / 163–165 | 149–151 / 157–159 / 167–169 |
| B3 five-kind gate | 167 or 175 | 171 |
| Font / Family / Type-role / Type-rule | 175 / 188 / 192 / 198 | 179 / 192 / 196 / 198 |
| Capture graph-not-adopted | 217 | 221 |
| Principle 3/4/5 UI | 55/56/57 | 59/60/61 |
| Spacing 4px-base / Shape local-harvested | 107 / 123 | 111 / 127 |
| Primary CTA session-expired / named-hover | 265 / 267 | 269 / 271 |
| Primary Tab captured-variant | 317 | 321 |
| Content §14-not-extra | 506 | 510 |
| Chunghwa Blue / CHT Orange / Hairline / Input Border | 89 / 93 / 100 / 101 | 93 / 97 / 104 / 105 |

### F1 / F2 (v7; this pointer sync)

F1: current adjacent complete B2a sites match `provenance.md` Derived inventory. Prior F1 named-hover 233 and Core 235/237 adjacent to 233 are not current (237; 239/241 adjacent to 237).

F2 (this revision; value + field/role context; not a claim that every source-row destination is closed):

- Motion duration table → 149–151; easing names → 157–159; signature numbered → 167–169; source-stated limiter → 145; signature limiter → 163
- B3 five-kind gate → Foundations Motion 171; Named gaps inventory → 567
- Font evidence-class B2a → 179; live computed row → 183; Family font-use → 192; Type-role → 196; Type-rule → 198
- Capture graph-not-adopted → 221; table characterizations → 223; nine rows → 227–235
- SHA-256 `4f7e86db6b88651f60654f90feb355d87472e8e674883e16b942c94f1fa4c488` unchanged (DESIGN.md not edited)

This log does not claim F2 completeness beyond those greps, and does not re-assert F1/F2/F3 compliance as closed (E2c). Not a catalog-adoption claim (E2c). F3 was not re-run.

