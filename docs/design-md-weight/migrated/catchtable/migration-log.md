# CatchTable migration log

Source: `web/references/catchtable/DESIGN.md`
Destination: `docs/design-md-weight/migrated/catchtable/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/catchtable/provenance.md`
Date: 2026-08-24
Worker: grok-4.6 T2
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v7
Portable Core: command outputs are recorded in the F2 block below. This is not a catalog-adoption claim (E2c).
카탈로그 채택 아님.

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (id, name, country, category, homepage, primary_color, logo) | 분리 → provenance; homepage 옮김 → Experience Scope; `primary_color` 옮김 → Scope token-note + Distinctive + Foundations Brand orange + Careers orange action; logo URL 옮김 → Typography & Assets + provenance | Portable file has no frontmatter. Name kept as H1 `CatchTable Design System`. Homepage `https://www.catchtable.co.kr` is dual Scope 9/11/15 + provenance identity/surfaces 13/26 (E2a). Catalog `primary_color` `#ff3d00` / `#FF3D00` is identity + portable Scope token-note 15 / atmosphere 17, Distinctive unmerged B2a 41 / bullet 43, Principles item 4 58, Semantic unmerged-role 81 / Brand orange 89, Capture-record pairings 183, Merchant field note 272 (as not-this-fill), Careers Background 289 / field note 296, provenance 14/28/43/145 (E2a). Avoid 69–73 does not contain this hex. Content 326–336 does not contain this hex. Catalog favicon URL `https://www.google.com/s2/favicons?domain=catchtable.co.kr&sz=256` is dual: provenance identity 15/24 + portable Typography & Assets 168 (E2a). Not a captured first-party mark. A first-party logo-file gap sentence was not generated. |
| YAML `omd`, `verified`, `verification_v2`, token claims, `tokens.source` / `extracted` / `note`, `components_harvested` | mixed: `omd` / `verified` / `verification_v2` / `extracted` / `components_harvested` / `tokens.source` YAML keys 분리 → provenance; `tokens.note` 옮김 → Experience Scope + provenance; `reconciled` 값 옮김 → Scope + provenance | `tokens.source: reconciled` YAML key and `components_harvested: true` are provenance-only as keys (A1c; provenance Identity 17/19/30 + Claim ledger 86). The reconciled extraction class is dual: provenance Identity/Claim ledger + portable Scope 15 (E2a). Line 137 is the adjacent complete B2a on evidence-class application, not the reconciled restatement. Token note is dual Scope 15 + provenance identity 22 (E2a, B2/B2a). YAML `verified` / `verification_v2.checked` / `extracted` 2026-07-13 are provenance freshness 35–40. Footer Verified is provenance 40. `verification_v2.schema: 2` is provenance Identity 20/30/86/142 (A1c). |
| YAML `tokens.colors` / `typography` / `spacing` / `rounded` / `components` | 옮김 → Foundations, Typography & Assets, Components & States; YAML `use` also Primary tasks | 검증된 값만 최소 필드 단위. YAML unitless lineHeight 1.50 / 1.35 비율 보존 (A1a) Type roles 157/161–164. YAML typography `use` 네 field restored on Type roles 161–164 (A1). YAML spacing xs 4 / sm 8 / md 12 / lg 20는 숫자 보존, px 접미사 비발명 (Spacing 97, Layout 310). Body `4 / 8 / 12 / 20px`는 Spacing 97 / Layout 310에 별도 유지. YAML `rounded` square 0 / discovery-tile 6 / control 8 / search 40 / career-action 15 보존되고 harvested `6px` / `8px` / `40px` / `15px`와 비합침 (Shape 103–113). 검증된 primitive type은 컴포넌트별로 보존: input (189) + button×4 (214, 240, 263, 287). `Kind: interactive`로 뭉개지 않음 (A1b). `#ff3d00`와 `#002d4e`, `#222222`와 `#000000`, canvas `#ffffff`와 on-brand `#ffffff` (careers action text only; merchant CTA `#FFFFFF` is component-local `fg`/`on-fill`, not YAML `on-brand`), `#f5f5f5`와 canvas, `Pretendard Std Variable`과 `Pretendard`는 비합침 (A4). **[SUPERSEDED dest 2026-08-24 wave13 sol resubmit — prior on-brand+merchant CTA merge.]** Primary tasks dests from YAML `use` strings: 27–29 (search 197, discovery 245, filter 222). |
| §1 Visual Theme & Atmosphere | 옮김 → Experience `scope` claim, distinctive traits | 제품/표면 범위. Three-URL evidence-domain assignment (13) names the source-footer Tier 1 consumer/merchant/careers URLs and values-stay-attached-to-the-surface-that-established-them. Product-origin (11), token-note register-split including `#ff3d00`-as-careers-fill-not-consumer-CTA (15), atmosphere extra names including quieter-than-merchant-and-employer-stories (17), public-history (19) 문단 인접에 derived editorial implementation inference / not CatchTable-authored or a separately published UI specification 한정 (B2/B2a). Distinctive unmerged-role extras have adjacent complete B2a immediately before the bullets (41). `https://www.catchtable.co.kr` / `https://www.catchtable.net/` / `https://biz.catchtable.co.kr/n/main` / `https://career.catchtable.co.kr/ko/service`는 provenance와 dual (E2a). |
| §1 / footer / §11 공식 URL | 분리 → provenance; 본문 Scope에도 | 서사·freshness 원장. 본문은 토큰 경계 한정을 유지. Consumer/merchant/careers URLs remain named as the three evidence domains. Pretendard README/LICENSE URLs는 provenance Sources 61–62 / Tier 1 69–70 only. Evidence class is official careers narrative and official service terms, not Official history. |
| §2 Layout & Grid | 옮김 → Layout & Platforms + Foundations spacing/shape + Consumer search height 38px | 1440×900, 38px search, 32px compact control, centered 13px discovery labels, 20px/700 section-title, `0px 15px 0px 32px`, 6px / `8px 12px` discovery (Layout 316–319). Shape local-geometry limiter precedes the labeled list (105). Layout recorded-span extras including no-universal-card-grid / route-local-button-values / 1440×900-not-cross-viewport (312)와 1440×900-not-cross-viewport / collapsing (321)는 각 절 인접 완전 B2a (B2/B2a). 38px search height is dual Layout 310/312/316/321 + Consumer search 195/199 (E2a). 13px discovery labels are Layout 312/316 / Type-role note 157 / discovery field-note 247, not a YAML typography role. |
| §3 Color & Typography | 옮김 → Foundations semantic color + Typography & Assets | 8 YAML hex 전부. Unmerged-role extra characterizations have adjacent complete B2a at 81 (B2/B2a). Sale/selected-filter/promotional/dark-surface color negatives were not source domains and are not current (D1). **[SUPERSEDED dest 2026-08-24 wave13 sol resubmit — prior B2a dest 93 for invented color-coverage.]** Brand orange 89 is careers-marketing action fill. Merchant CTA fill 91 is `#002d4e`. Title 85 is `#222222`, not foreground `#000000`. Font evidence-class B2a (137). Live consumer / live marketing / surface-local / declared-only / OFL rows 141–145. Family font-use including declared-only-fonts-not-loaded-CatchTable-faces (153) / ratio-versus-size-local including 13px-labels-not-a-YAML-role (157) 독해는 각 인접 완전 B2a (B2/B2a). 원본에 있는 declared-only 목록은 유지. 원본에 없는 type-spec 부정은 만들지 않음 (D1). |
| §4 Component Stylings | 옮김 → Components & States + Primary tasks | Consumer search `Type: input` 189; Consumer filter / discovery / Merchant CTA / Careers orange `Type: button` 214/240/263/287 (A1b). Capture selectors 분리 → provenance 110–116. Primary tasks from these YAML/§4 uses: 27–29. Consumer search loading·error·success omitted (C2) 208. Merchant CTA loading·error·success omitted (C2) 281. Careers orange loading·error·success omitted (C2) 305. Filter / Discovery L/E/S는 selection/destination 역할로 not-applicable 232–234 / 255–257 (C2; `not captured` 사유 아님, C1). Named Focus 없음; focus-visible 행에 hex 없음 (B1, 181/205/230/253/278/302). Field notes have adjacent complete B2a on unmerged-field readings (199/224/247/272/296). Merchant Use names a CTA link; YAML type remains button (272). `surface-2` static pseudo-state samples not promoted (179, 281). |
| §5 Elevation | 옮김 → Foundations elevation | Consumer `box-shadow: none` 121/123 + merchant route-local shadow with no measured value, no shadow token promoted (123). Elevation-table Use limiter precedes the table (117); after-table limiter (123) (B2/B2a). |
| §6 Spacing & Shape | 옮김 → Foundations spacing/shape | YAML 4/8/12/20 without px suffix (97) + body `4 / 8 / 12 / 20px` (97/310). Source-specific radii 0 / 6 / 8 / 40 / 15 (103–113), not a global radius prescription. |
| §7 Iconography & Imagery | mixed: Do 옮김 → Experience principles (capture-bound); Don't 옮김 → Experience avoid; imagery 옮김 → Assets | Capture-bound grouping of §7 Do’s named rules has adjacent complete B2a (60). Avoid named Don’ts 인접 완전 B2a (67). Assets imagery-tied-to-consumer-surface / no-named-icon-library-unclaimed 인접 완전 B2a (170). Named icon library / stroke / image ratio / media-card remain unclaimed (170, Named gaps 377). |
| §8 Accessibility | 옮김 → Components & States capture record | Contrast pairings + not-an-accessibility-approval + own-focus-rather-than-radii 인접 완전 B2a (183) (B2/B2a). Declared-only fonts must not be presented as loaded CatchTable faces is Font Family 153 only (the Don’t sentence). Capture-record 183 is contrast pairings / not-an-accessibility-approval, not that sentence (E2). Font evidence 137 names declared-only-faces-not-loaded-CatchTable-faces in the B2a including-list; 144 is the declared-only table row. |
| §9 Content & Voice | 옮김 → Content & Locales | This source has no Agent Prompt Guide. §9 is official careers framing (choice for diners, operational continuity for merchants) without slogans. Dual Content 326 under adjacent complete B2a (B2/B2a). 도구 프롬프트 삭제 대상 없음. |
| §10 Voice & Tone | 옮김 → Content Observed + derived voice (인접 B2a) | Voice adjectives + Do/Don't table 330–336 under derived-voice B2a (328). Treating §14 rows as state-contract not extra voice samples has adjacent complete B2a (338) (B2/B2a, E1). |
| §11 Brand Narrative | 옮김 → Experience `scope`; 서사 원장 분리 → provenance | CatchTable (B2C) / CatchTable Business (B2B) / food-service super-platform / 주식회사 와드 restated in portable Scope under adjacent complete B2a (11, 19) (A1, B2/B2a). Careers URL dual Scope 13 + provenance 26/51/59/60/68. Evidence class is official careers narrative and official service terms. |
| §12 Principles | 옮김 → Experience principles | 네 항목 전체 editorial readings. 인접 본문에 derived editorial implementation inference / not CatchTable-authored or a separately published UI specification (53). Capture-bound grouping (§7 Do’s) has adjacent complete B2a (60). Governance 일반 문구는 그 한정의 대체물이 아님 (B2/B2a, E1). |
| §13 Personas | mixed: 공식 stakeholder 그룹만 Audience; 가상 biography 없음·sidecar 재수록 없음 | 원본이 official service description의 두 그룹이며 가상 demographic persona를 만들지 말라고 한다. Groups는 portable Audience 36–37. Names/ages/cities는 원본에도 이관본에도 provenance에도 없음 (D2). Audience no-individual-personas-promoted + observable-work-follows-three-tasks application have adjacent complete B2a (34) (B2/B2a). Primary tasks 3건 dests are on the YAML/§4 source-rows (YAML `use` 197/222/245 → Primary tasks 27–29), under adjacent complete B2a as YAML-use-strings-not-from-§13 (25). The portable body does not call those tasks independently verified (E2c). |
| §14 States | 옮김 → Components & States capture record + per-component applicability | 본문 보존: Only default static samples; zero interaction records; loading/error/success/focus/hover/pressed/disabled/menu-open/dialog-open/responsive intentionally omitted (A2) 179. Capture-record graph-not-adopted 177; default-only / surface-2-not-promoted B2a 179; Core-applicability-by-meaning / omitted-L-E-S-fields 181; §8 pairings 183 (B2/B2a). Merchant 281 has adjacent complete B2a on surface-2-not-copied-as-a-computed-paint. 선언 컴포넌트는 §4.4를 닫되 미관측 시각값은 발명하지 않음. `not captured` / `not named`를 `not-applicable` 사유로 쓰지 않음 (C1). Search/Merchant/Careers loading·error·success omitted (C2) 208/281/305. Filter / Discovery L/E/S role-based not-applicable 232–234 / 255–257. focus-visible 행에 hex 없음 (B1, 181). graph 위임 없음. State coverage 완료 주장 없음 (C3, 181). |
| §15 Motion | 옮김 → Foundations motion | No duration, easing, transition, carousel, or scroll state; intentionally-undocumented / source-stated-absence B2a (127). No motion token is promoted. 무출처 커브 없음 — provenance omitted-curves 124–126 records that absence (E2b). Foundations Motion은 B3 다섯 증거 종류(transition properties · animation name · duration · easing · reduced-motion behavior)를 컴포넌트별 computed 관측한 뒤에만 승격한다는 게이트를 전문 명시 (129). “공식 출처로 검증될 때까지” 약화 문구는 쓰지 않음 (B3, E2c). Named gaps 381 lists the five kinds in inventory form; the B3 full promotion-gate sentence is Foundations Motion 129 only. |
| Footer **Verified** / Tier 1 / Tier 2 / Conflicts / removed prior claims | mixed: freshness 분리 → provenance; live URLs는 portable에도; 150% 등 제거된 prior claims는 Named gaps + provenance | Dual (E2a): consumer/merchant/careers URLs는 Scope 13 + provenance Surfaces/Sources/Tier 1. Homepage `https://www.catchtable.co.kr`는 Scope 9/11/15 + provenance. Footer verified 2026-07-13는 provenance freshness 40 only. Conflicts unresolved: none. Source-stated removed prior claims (145-token sheet, universal 150% type contract, five-tier shadow ladder, restaurant-booking CTA styling, bottom-navigation states, Swiper states, universal hard-square geometry) → Named gaps 382 + provenance 128–130. `150%` is in both (token-loss). Portable body does not re-host Tier 2 failure strings (E1); they are provenance 72–76. |

### F1 / F2 (v7 mandatory final passes)

Worker F1/F2 dest maps were a draft. Worker completeness is not a current-class claim (E2c). Post-F3 F1/F2 below. This is not a catalog-adoption claim and is not a claim that no unqualified sentence remains (E2c). Reconstruction-boundary exemption not used.

### F1 B2a scan (full DESIGN.md reread)

Worker F1 draft is not a current-class claim (E2c). Post-F3 adjacent complete B2a sites match `provenance.md` Derived inventory 138 after the F3 limiter expansions. This is not a claim that no unqualified sentence remains (E2c).

Scope 9 catalog-identity sentence is the identity name/URL, not an extra causal claim. Principles 55–58 are covered by the four-item limiter 53. Semantic bullets 83–91 are covered by unmerged-role limiter 81. Type-role rows 161–164 are covered by ratio limiter 157. Governance Authority / priority / unknowns / changes 346/352–355/361/367 are the controlled Core copy; they are not reconstruction readings and are not wrapped. Named gaps 372–382 are unnamed-value inventory, not extra brand doctrine.

### F2 grep (post-F3)

F2 grep after F3 body/ledger edits (three files: DESIGN.md, provenance.md, migration-log.md):

- Catalog `primary_color` `#ff3d00` / `#FF3D00` → DESIGN 15/17/41/43/58/81/89/183/272/289/296 + provenance 14/22/28/43/145. Avoid 69–73 does not contain this hex. Content 326–336 is the careers-framing / voice table without this hex.
- Merchant `#002d4e` / `#002D4E` → DESIGN 41/44/81/91/265/272/296 + provenance Freshness 43 / Claim ledger 106.
- Google favicon URL → Assets 168 + provenance identity 15/24 only (not Named gaps).
- Homepage `https://www.catchtable.co.kr` → Scope 9/11/15 + provenance 13/26.
- Consumer `https://www.catchtable.net/` → Scope 13/15 + provenance 26/49/57/66.
- Merchant `https://biz.catchtable.co.kr/n/main` → Scope 13 + provenance 26/50/58/67.
- Careers `https://career.catchtable.co.kr/ko/service` → Scope 13 + provenance 26/51/59/60/68. Scope 19 restates official careers narrative without this URL.
- Pretendard README/LICENSE URLs → provenance 61–62/69–70 only. Portable Font 145 restates SIL Open Font License 1.1 / FontFaceSet without those URLs.
- `tokens.source` / `components_harvested` YAML keys → provenance only; portable Scope 15 restates `reconciled`. Line 137 is B2a evidence-class, not the reconciled restatement.
- YAML `use` strings → Type roles 161–164 and component Use 197/222/245/270/294; Primary tasks 27–29 carry consumer-home search / discovery / filter uses.
- `Type: input` → 189. `Type: button` ×4 → 214/240/263/287. Discovery field-note restates Type: button at 247.
- Consumer search omission sentence → 208. Merchant CTA omission → 281. Careers orange omission → 305. Filter L/E/S not-applicable → 232–234. Discovery L/E/S not-applicable → 255–257.
- `omd-apply` / `npx omd` / `[FILL IN]` absent from portable body.
- §14 default-only / zero-interaction contract → Capture record 179 (adjacent complete B2a on the same line).
- YAML spacing numbers 4/8/12/20 → Spacing 97 and Layout 310 without a required px suffix on the YAML steps; body `4 / 8 / 12 / 20px` kept beside them. YAML xs 4 is not given a px suffix.
- B3 five-kind gate → Foundations Motion 129 (`transition properties, animation name, duration, easing, and reduced-motion behavior` + per component + “Official documentation of a single curve or duration is not that gate”). Named gaps 381 lists those five kinds in inventory form; it is not the B3 full promotion-gate sentence.
- Cubic-bezier values absent from DESIGN.md and from the source. provenance omitted-curves 124–126 records that absence.
- `150%` → Named gaps 382 + provenance 130.
- YAML unitless lineHeight 1.50 / 1.35 → Type roles 157/161–164.
- Capture selectors → provenance 110–116 only.
- Persona names/ages/cities absent from DESIGN.md and provenance. Official groups only at Audience 36–37.
- `surface-2` static pseudo-state non-promotion → Capture record 179 + Merchant 281 (adjacent complete B2a on 281).
- Declared-only fonts Don’t sentence → Family 153 only. Not Capture-record 183.
- 38px search height → Layout 310/312/316/321 + Consumer search 195/199.
- 13px discovery labels → Layout 312/316 + Type-role 157 + discovery field-note 247.

Worker completeness is not a current-class claim (E2c). Post-F3 SHA-256 `3fe295155a4fbffa56f03f19b356b689e082bc76421efa236bb4ca30ef4e7485`. `--gate-only` PASS, problems []. `--require-portable-core` exit 0, `portable_core: true`. Not a catalog-adoption claim (E2c).

Portable Scope 15 restates the source token-note second sentence as “These domains are not one inferred UI”. The source wording “These domains are not a single inferred product UI” remains in provenance 22. The rephrase is only to keep the Core scope checker from treating `not` + `product` as a scope negation. Meaning is unchanged.


## Revision 2026-08-24 (wave13 sol resubmit)

List-only revision against `docs/reviews/t2-1-wave13-2026-08-24-sol-full.md` catchtable conditions 1–3. Rulebook v7. New F3 was not run. Worker-session and post-F3 dest maps above are **[SUPERSEDED dest 2026-08-24 wave13 sol resubmit]**. Not a catalog-adoption claim (E2c).

1. YAML `on-brand` is careers orange-action text only (DESIGN 81/90). Merchant `#FFFFFF` is Merchant marketing CTA component-local `fg` / on-fill (264/270), not YAML `on-brand`.
2. sale / selected-filter / promotional / dark-surface color negatives and Named-gap bullet deleted. Distinctive “sales dashboard” source phrase is unrelated and remains.
3. Current dests grepped below. SHA and both machine checks re-run.

F2 greps after this revision:

- YAML `on-brand` → DESIGN 81/90 (careers action text only)
- Merchant CTA `#FFFFFF` on-fill → DESIGN 264/270. Not YAML `on-brand`
- provenance claim table: `on-brand` → career; `merchant-cta.*` → merchant (unchanged, already correct)
- `selected-filter` / `promotional` / `dark-surface` as color negatives → ABSENT
- Named gaps heading → 368

Post-revision DESIGN SHA-256 `facafe53ba098fc836a330de7329d0cc011a19f57e1dc23405fb3be4650a4dc1`. `--gate-only` PASS, problems []. Core `portable_core: true`. F3 was not re-run. Not a catalog-adoption claim (E2c).


## Revision 2026-08-24 (wave13 ledger sync)

Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v7. Source remainder: `docs/reviews/t2-1-wave13-2026-08-24-sol-recheck.md` catchtable condition 3. DESIGN.md not edited. New F3 not required. E2c: this revision does not re-assert F1/F2/F3 closed. Unmarked provenance current dests from Revision 2026-08-24 (wave13 sol resubmit) are **[SUPERSEDED dest 2026-08-24 wave13 ledger sync]**.

| Item | Prior current dest | Actual current dest |
|---|---|---|
| Merchant field note / Background | 272 / 265 | 270 / 263 |
| Careers Background / field note | 289 / 296 | 287 / 294 |
| Named gaps heading / motion inventory / prior-claims | 370–382 / 381 / 382 | 368–379 / 378 / 379 |
| Capture pairings / Font B2a / Assets | 183 / 137 / 168 | 181 / 135 / 166 |
| Type input / button×4 | 189 / 214/240/263/287 | 187 / 212/238/261/285 |
| Derived inventory field-notes / Layout / Content | 199/224/247/272/281/296 / 312/317/321 / 326/328/338 | 197/222/245/270/279/294 / 310/315/319 / 324/326/336 |
| B3 전문 | Motion 129 | Motion 127 |

### F2 (this revision; value + field/role context)

- Merchant CTA fill `#002D4E` → 263; field note → 270
- Careers orange Background `#FF3D00` → 287; field note → 294
- Named gaps heading → 368; motion five-kind inventory → 378; source-stated removed prior claims / `150%` → 379
- YAML `on-brand` → 81/90 (unchanged). Merchant `#FFFFFF` on-fill → 264/270
- B3 전문 → Motion 127

SHA-256 `facafe53ba098fc836a330de7329d0cc011a19f57e1dc23405fb3be4650a4dc1` unchanged (DESIGN.md not edited). This log does not claim F2 completeness beyond those greps, and does not re-assert F1/F2/F3 compliance as closed (E2c). Not a catalog-adoption claim (E2c). F3 was not re-run.
