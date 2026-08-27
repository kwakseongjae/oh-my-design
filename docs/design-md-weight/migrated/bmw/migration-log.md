# BMW migration log

Source: `web/references/bmw/DESIGN.md`
Destination: `docs/design-md-weight/migrated/bmw/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/bmw/provenance.md`
Date: 2026-08-24
Worker: grok-4.6 T2
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v7
Portable Core: see Revision 2026-08-24 (wave12 sol resubmit). Worker-session DESIGN SHA-256 `2fb9aaf6e262e70b857dcfd2958609475c6e580f2777e81c506a3545c9502e6c` is **[SUPERSEDED dest 2026-08-24 F3 — pre-F3 body]**. Post-F3 DESIGN SHA-256 `4e9797e243afba2d3bb550bac4656268af58afe2ac13b52a71958351198279e2` is **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit]**. This is not a catalog-adoption claim (E2c).

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (id, name, country, category, homepage, primary_color, logo) | 분리 → provenance; homepage 옮김 → Experience Scope; `primary_color` 옮김 → Distinctive + Foundations + Home primary CTA; logo slug 옮김 → Typography & Assets + provenance | Portable file has no frontmatter. Name kept as H1 `BMW Design System`. Homepage `https://www.bmw.com` is dual Scope 9 + provenance identity 13/22 (E2a). Catalog `primary_color` `#1c69d4` is identity 14/24 + portable Distinctive 36/38, capture-bound 54, Semantic Primary action 76, Home primary CTA 171/179 (E2a). Semantic unmerged-role limiter 74 names the reading without the hex. Avoid does not contain the hex. Catalog logo type `simpleicons` / slug `bmw` is dual provenance identity 15/26 + portable Assets 151 (E2a). Not a captured first-party mark. A first-party logo-file gap sentence was not generated. **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — prior Distinctive 32/34, capture-bound 50, Semantic 72, Home primary 168/176, limiter 70, Assets 148, provenance 13/21, 14/23, 15/25]** |
| YAML `omd`, `verified`, `verification_v2`, token claims, `tokens.source` / `extracted`, `components_harvested` | mixed: `omd` / `verified` / `extracted` / `verification_v2` / `tokens.source` YAML keys 분리 → provenance; `components_harvested: false` 분리 → provenance and restated in Capture record | `verification_v2.schema: 2` is provenance Identity 17 + Freshness 35 + first-class sentence 42 (A1c). `verification_v2.checked` is Freshness 36. `tokens.source: live-extract` YAML key is provenance-only 18/28/106 (A1c). `components_harvested: false` is dual provenance 20/28/106 + portable Capture 164 (E2a). YAML `verified` 2026-07-13 and `extracted` 2026-07-13 are provenance freshness 34/39. Claim ledger 91–105. Footer Verified freshness 40. **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — prior row claimed verification_v2 in provenance while schema: 2 was missing; prior dests tokens.source 17/27/104, components_harvested 19/27/104, freshness 31–38, claim ledger 85–102, Capture 161]** |
| YAML `tokens.colors` / `typography` / `spacing` / `rounded` / `components` | 옮김 → Foundations, Typography & Assets, Components & States | 검증된 값만 최소 필드 단위. YAML unitless lineHeight `1.43` / `1.56` / `1.6` / `1.5` 비율 보존 (Type roles 140, 144–147) (A1a). YAML typography `use` 네 field restored on Type roles 144–147 (A1). YAML spacing space-4 4 / space-12 12 / space-24 24 / space-32 32는 숫자 보존, px 접미사 비발명 (Spacing 86, Layout 271). YAML `rounded` none 0 / control 3 (Shape 92 / 96–97). YAML `tokens.components` is `{}` — Type 발명 없음 (Capture 164) (A1b n/a). `#1c69d4`와 generic semantic blue 비합침; `#414141`와 `#262626` 비합침; on-dark `#ffffff`와 CTA on-fill `#ffffff` 비합침; `#f2f2f2`와 foregrounds 비합침; `#666666`와 `#414141`/`#262626`/`#ffffff` 비합침 (A4). YAML `shadow` 없음 — 발명 없음. Body `box-shadow: none`는 Elevation 107. **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — prior Type roles 137/141–144, Spacing 82 / Layout 268, Shape 88 / 92–93, Capture 161, Elevation 103]** |
| §1 Visual Theme & Atmosphere | 옮김 → Experience `scope` claim, distinctive traits | 제품/표면 범위(BMW USA home / models / configurator). Three-URL evidence-domain assignment (9) names the captured BMW USA routes and catalog homepage identity `https://www.bmw.com` as not a captured page. Authenticated vehicle / account / dealer / in-car (original :84) is dual Scope 9 + Named gaps 333 (E2a). Atmosphere extra names (11), public-history / current-evolution extras including narrative-not-live-web-tokens (13) 문단 인접에 derived editorial implementation inference / not BMW-authored or a separately published UI specification 한정 (B2/B2a). Distinctive unmerged-role extras have adjacent complete B2a immediately before the bullets (36). `https://www.bmwusa.com/` / models / build-your-own는 provenance Surfaces/Sources/Tier 1 48–50 / 56–58 / 67–69와 dual (E2a). **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — prior Distinctive 32; Named gaps 333 dest omitted; Surfaces 46–56, 65–67]** |
| §1 / §11 공식 히스토리·BI URL | 분리 → provenance; 서사 요약은 Scope | 서사 출처. 본문은 토큰이 아니라고 밝힌 경계를 Experience 13에 유지. Brand-design / history / Neue Klasse / Club CI URLs는 provenance Narrative 76–83. Club CI guideline 이름은 portable Font Official distributed 127와 dual (E2a); URL은 provenance 60/83. Original :84 narrative-not-tokens is Scope 13 + provenance Narrative 76–83; authenticated-vehicle is Scope 9 + Named gaps 333 (E2a). Font Official product-use is not a source class and has no dest. **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — prior Font 124, Narrative 78–81, URL 58/81; Official product-use as a Font dest]** |
| §2 Color Palette & Roles | 옮김 → Foundations semantic color | `#1c69d4` `#414141` `#262626` `#ffffff` `#f2f2f2`. Unmerged-role extra characterizations have adjacent complete B2a at 74 (B2/B2a). Semantic omitted success/warning/error/disabled/hover/focus colors + canvas / dark-surface / roundel (original :104) are dual Semantic paragraph 82 + Named gaps 324 / 325 (E2a). `#666666`는 YAML color role이 아니라 Build-your-own flyout 245/252. **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — prior Semantic 70; Named gaps 324/325 dest omitted; flyout 242/249]** |
| §3 Typography Rules | 옮김 → Typography & Assets | 증거 등급. Five source classes only: Live computed surface-use (125/135). Live computed but limited use (126/136). Official distributed brand asset Club CI TypeNext Bold/Regular for club identifiers (127). Declared-only Arial MT / `bmw_next_icons` / SangBleuKingdom (128). Licence boundary (129) dual Named gaps public downstream webfont licence 331 (original :114) (E2a). Official product-use is not a source font evidence class and has no dest. YAML `use` 네 field restored (144–147). Font evidence-class B2a names the five classes (121). Font-use B2a (131). ratio-versus-size-local B2a (140) (B2/B2a). WOFF2 path는 provenance 59/85 only. **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — prior 122/132, 123/133, 124, 125, 126, Font B2a 117, Font-use 128, Type-role 137, WOFF2 57/83; Official product-use as a Font dest; Named gaps 331 dest omitted]** |
| §4 Component Stylings | 옮김 → Components & States | Home primary CTA / Home outline CTA / Home flyout trigger / Build-your-own flyout trigger. YAML type 없음·발명 없음 (164). Kind: interactive 169/193/217/243 from observed CTA/flyout controls, not from YAML type. Capture selectors 분리 → provenance 112–115; portable Use는 class names 177/201/224/250. Home primary / outline loading·error·success omitted (C2) 188/212. Flyout loading/error/success 역할별 not-applicable 234–236 / 260–262 (C2). Named Focus 없음; focus-visible 행에 hex 없음 (B1, 162). Field notes have adjacent complete B2a (179/203/226/252). Inputs/cards/badges/dialogs/chatbot/menu panels kind/map 생략 (C4) 266 dual Named gaps 328 (original :160) (E2a). **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — prior Capture 161, Kind 166/190/214/240, selectors 110–113, Use 174/198/221/247, C2 185/209, flyout 231–233/257–259, B1 159, field notes 176/200/223/249, omitted-surfaces 263; Named gaps 328 dest omitted]** |
| §5 Layout Principles | 옮김 → Layout & Platforms + Foundations spacing/shape | YAML scale + 4px CTA inset / 12px nav padding / 24px recurrent / 32px list margins. Shape local-geometry limiter precedes the labeled list (94)와 Layout 독해는 각 절 인접 완전 B2a (273, 275) (B2/B2a). **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — prior Shape 90, Layout 270/272]** |
| §6 Depth & Elevation | 옮김 → Foundations elevation | Observed CTA and global-navigation `box-shadow: none` 107. Chatbot shadow not an elevation token, limiter immediately before the table (103) (B2/B2a). **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — prior box-shadow 103, Elevation limiter 99]** |
| §7 Do's | 옮김 → Experience principles (capture-bound application) | Capture-bound grouping of §7 Do’s named rules has adjacent complete B2a (52) (B2/B2a). Governance 통제 문구에 넣지 않음. **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — prior 48]** |
| §7 Don'ts | 옮김 → Experience avoid | 브랜드 금지. Avoid list-head extra causal readings 인접 완전 B2a (61); last-bullet consent-banner-or-chatbot 인접 완전 B2a (66) (B2/B2a). **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — prior 57/62]** |
| §8 Responsive Behavior | 옮김 → Layout & Platforms | Source sentence: only a 1440×900 desktop collector run; does not substantiate mobile breakpoints, navigation collapse, touch targets, or responsive spacing. Dual Layout 275 + Named gaps 329 (original :200) (E2a). 52px/84px-not-cross-viewport 독해는 Layout 인접 완전 B2a (275) (B2/B2a). 원본에 없는 최소폭 발명 없음. **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — prior Layout 272 only; Named gaps 329 dest omitted]** |
| §9 Agent Prompt Guide | 삭제 | 도구별 복붙 프롬프트 삭제. 검증된 hex/radius/height/family/transparent fill/`#666666`는 이미 Foundations/Components/Experience에 있음. 슬롯 없는 위임 없음. Unique §9-only 값은 없음 (A3 n/a). provenance omitted-prompts 123–125. **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — prior omitted-prompts 121–123]** |
| §10 Voice & Tone | 옮김 → Content (인접 B2a) | Derived editorial voice extras under adjacent complete B2a (280). 2020 announcement “open, clear, customer-centred” is source-stated first-party language in the same paragraph. Source table 284–286. Product error copy boundary (original :212) is dual Content 280 + Named gaps 332 (E2a). Treating §14 collector-zero as state-contract not extra voice samples has adjacent complete B2a (288) (B2/B2a, E1). **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — prior Content 277/281–283/285; Named gaps 332 dest omitted]** |
| §11 Brand Narrative | 옮김 → Experience `scope`; 서사 원장 분리 → provenance | 1916 / 7 March 1916 / Rapp and Otto / MINI / Rolls-Royce / Motorrad / 2020 pared-down identity / Neue Klasse iX3 restated in portable Scope under adjacent complete B2a (13) (A1, B2/B2a). Timeline URLs는 provenance Narrative 80–82. **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — prior Narrative 78–80]** |
| §12 Principles | 옮김 → Experience principles | 세 항목 source-backed stems (2020 announcement / Neue Klasse). *UI implication* notes 인접 본문에 derived editorial implementation inference / not BMW-authored or a separately published UI specification (46). Capture-bound grouping (§7 Do’s) has adjacent complete B2a (52). Governance 일반 문구는 그 한정의 대체물이 아님 (B2/B2a, E1). **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — prior 42/48]** |
| §13 Personas | mixed: source-backed stakeholder groups → Audience unique relationships; sidecar 재수록 없음 | 원본이 “not fictional customers or demographic personas”. The three source-backed unique relationships (not labels-and-source-parens only) are portable Audience limiter 28 + bullets 30–32 (prospective BMW customer / official BMW Club representative / BMW Group design collaborator). Dual provenance Source §13 129 (E2a). Biographies는 provenance에 없음 (D2 n/a — D2 is not a deletion reason for these source-backed stakeholder facts). Audience no-individual-personas-promoted + groups-not-primary-tasks / groups-not-user-flow-requirements application have adjacent complete B2a (28) (B2/B2a). Primary tasks 3건은 captured BMW USA routes (`count=3`) 21–23, under adjacent complete B2a as three-routes-not-from-§13 (19). **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — prior “Audience 28 only” labels-and-parens dest]** |
| §14 States | 옮김 → Components & States capture record + per-component applicability | 본문 보존: No BMW product state treatment is asserted. Collector reports zero observed states, zero interaction kinds, and zero interaction snapshots. Empty, loading, error, success, skeleton, and disabled treatments require a future selector-level public-surface capture (A2) 160. Graph-not-adopted preservation sentence has adjacent complete B2a (158). Original :242 collector-zero is dual Capture record 160 + Named gaps visual-treatments 326 (E2a). 선언 컴포넌트는 §4.4를 닫되 미관측 시각값은 발명하지 않음. `not captured` / `not named`를 `not-applicable` 사유로 쓰지 않음 (C1). Home primary / outline loading·error·success omitted (exact mapping unresolved; §14 is collector-zero, not those paints) (C2) 188/212. Flyouts 역할별 loading/error/success not-applicable (C2) 234–236 / 260–262. Inputs/cards/badges/dialogs/chatbot/menu panels는 interactive-kind 근거 없어 kind/map 생략 (C4) 266 dual Named gaps 328 (E2a). focus-visible 행에 hex 없음 (B1, 162). graph 위임 없음. State coverage 완료 주장 없음 (C3, 162). **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — prior 157/155/185/209/231–233/257–259/263/159; Named gaps 326 dest omitted]** |
| §15 Motion & Easing | 옮김 → Foundations motion | Source: No BMW public-web duration, easing, or reduced-motion rule was captured. Not-promoted-absence under adjacent complete B2a (111); “Motion tokens are intentionally omitted.” 무출처 커브 없음 — provenance omission ledger에 커브 값 없음 (E2b n/a). Foundations Motion은 B3 다섯 증거 종류(transition properties · animation name · duration · easing · reduced-motion behavior)를 컴포넌트별 computed 관측한 뒤에만 승격한다는 게이트를 전문 명시 (113). “공식 출처로 검증될 때까지” 약화 문구는 쓰지 않음 (B3, E2c). Named gaps 330 lists the five kinds in inventory form; the B3 full promotion-gate sentence is Foundations Motion 113 only. **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — prior Motion 107/109, Named gaps 327]** |
| Footer **Verified** / Tier 1 / Tier 2 / Conflicts | mixed: freshness 분리 → provenance; live BMW USA URLs는 portable에도 | Dual (E2a): bmwusa home/models/configurator URLs는 Scope 9 + provenance Surfaces/Sources/Tier 1 48–50 / 56–58 / 67–69. Footer verified 2026-07-13는 provenance freshness 40 only. Conflicts unresolved: none. Tier 2 getdesign.md/bmw and refero는 provenance 73–74 only. WOFF2 / Club CI / brand-design / history / Neue Klasse URLs는 provenance Sources 59–63 + Narrative 76–83. Source footer does not name a `.verification.md` Proof pointer; none was invented. **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — prior Surfaces 46–56 / 65–67, Tier 2 71–72]** |

### F1 / F2 (v7 mandatory final passes)

Worker-session F1/F2 dest maps and completeness claims are **[SUPERSEDED dest 2026-08-24 F3 B2a·E2 audit]** and **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit]**. Reconstruction-boundary exemption not used. No “no unqualified sentence remains” claim (E2c). See Revision 2026-08-24 (wave12 sol resubmit).

### F1 B2a scan (full DESIGN.md reread)

**[SUPERSEDED dest 2026-08-24 F3 B2a·E2 audit — worker inventory under-named extra readings.]** **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — dest numbers below are not current. Current grepped dests are in `## Revision 2026-08-24 (wave12 sol resubmit)`.]** Current adjacent-complete sites: provenance Derived inventory. Left unqualified as first-party or observed-technical: BMW product identity and catalog homepage URL; live BMW USA URLs; YAML/token hex/geometry; Type role rows including YAML `use` strings; component anatomy including source Use/class strings; 2020 announcement openness/clarity/restraint language; B3 five-kind gate (109); Core C1/C2/C3 capture-record policy (159); per-control C2 omission sentences (185/209); flyout role-based not-applicable (231–233 / 257–259); B1 generic-Focus sentence (159); §14 collector-zero (157); Governance boilerplate; Named gaps inventory. Reconstruction-boundary exemption not used.

### F2 E2 grep (value + field/role context)

**[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — dest numbers below are not current. Current grepped dests are in `## Revision 2026-08-24 (wave12 sol resubmit)`.]**

- Catalog `primary_color` `#1c69d4` → DESIGN 32/34/50/72/168/176 + provenance 14/23. Semantic 70 has no hex. Avoid does not contain `#1c69d4`. **[SUPERSEDED dest 2026-08-24 F3 — prior 70 as hex dest]**
- Home foreground `#414141` → DESIGN 32/73/74/200/249 + provenance 40. Semantic 70 has no `#414141`. **[SUPERSEDED dest 2026-08-24 F3 — prior 70]**
- Configurator foreground `#262626` → DESIGN 32/74/249 + provenance 40. Semantic 70 has no `#262626`. **[SUPERSEDED dest 2026-08-24 F3 — prior 70]**
- On-dark / CTA on-fill `#ffffff` → DESIGN 32/75/169/176/216/223/249 + provenance 40. Text field is 169, not Background 168. Semantic 70 has no `#ffffff`. **[SUPERSEDED dest 2026-08-24 F3 — prior 70/168]**
- Outline `#f2f2f2` → DESIGN 32/76/193/198/200 + provenance 40/123. Semantic 70 has no `#f2f2f2`. **[SUPERSEDED dest 2026-08-24 F3 — prior 70]**
- Flyout `#666666` → DESIGN 32/70/78/242/249 + provenance 40/123. Not a YAML color role. 70 contains the `#666666`-flyout-label name.
- Google favicon URL → ABSENT (source logo is Simple Icons slug `bmw`, not a favicon URL).
- Simple Icons slug `bmw` → Assets 148 + provenance identity 15/25.
- Homepage `https://www.bmw.com` → Scope 9 + provenance 13/21.
- BMW USA home/models/configurator URLs → Scope 9 + provenance 46–56 / 65–67.
- WOFF2 path → provenance 57/83 only. Portable Font 122 names 52 BMWUSA-hosted WOFF/WOFF2 URLs without the path.
- Club CI URL → provenance 58/81. Portable Font 124 names the guideline.
- Brand-design / history / Neue Klasse URLs → provenance 59–61 / 78–80. Narrative facts in Scope 13.
- Tier 2 getdesign.md / refero → provenance 71–72 only.
- `tokens.source` YAML key → provenance 17/27/104 only; portable 161 restates `components_harvested: false`.
- YAML `use` strings → Type roles 141–144.
- YAML lineHeight `1.43` / `1.56` / `1.6` / `1.5` → 137, 141–144.
- Kind: interactive ×4 → 166/190/214/240. Type not invented (161).
- Home primary/outline omission sentences → 185/209, not destination `not-applicable` rows.
- Flyout role-based `not-applicable` → 231–233 / 257–259 (not “not captured”).
- Persona biographies absent from DESIGN.md Audience 28 (groups only) and from provenance 125–127.
- B3 full promotion-gate sentence → Foundations Motion 109 only. Named gaps 327 is inventory form.
- Capture selectors `data-omd-capture` → provenance 110–113 only; portable Use class names 174/198/221/247.

## Revision 2026-08-24 (F3 B2a·E2 audit)

**[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — dest maps in this F3 revision are not current. Current grepped dests are in `## Revision 2026-08-24 (wave12 sol resubmit)`. Font Official-product-use, Audience labels-only, missing schema: 2, and incomplete Named-gaps dests are not current-class.]** Fresh-session auditor. DESIGN.md: adjacent complete B2a expanded or moved at Scope 9/13, Audience 28, Distinctive 32, Principles 42, capture-bound 48, Semantic 70, Spacing 84, Elevation 99, Font 117, Type roles 137, Build-your-own field note 249, Layout 272, Content 277. Token values, component tables, state applicability, and section structure unchanged. provenance derived inventory restated to actual extra names; `#1c69d4` Semantic 70 hex dest removed. Worker F1 inventory and hex dest maps superseded. Reconstruction-boundary exemption not used. No “no unqualified sentence remains” claim (E2c).

F2 after body edits (value + field/role context) **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit]**:

- `#1c69d4` → DESIGN 32/34/50/72/168/176 + provenance 14/23. Semantic 70 has no hex. Avoid has no hex.
- `#414141` → DESIGN 32/73/74/200/249 + provenance 40
- `#262626` → DESIGN 32/74/249 + provenance 40
- `#ffffff` → DESIGN 32/75/169/176/216/223/249 + provenance 40
- `#f2f2f2` → DESIGN 32/76/193/198/200 + provenance 40/123
- `#666666` → DESIGN 32/70/78/242/249 + provenance 40/123
- Homepage `https://www.bmw.com` → Scope 9 + provenance 13/21
- BMW USA URLs → Scope 9 + provenance 46–56 / 65–67
- Simple Icons slug `bmw` → Assets 148 + provenance 15/25
- WOFF2 path → provenance 57/83 only
- YAML lineHeight `1.43` / `1.56` / `1.6` / `1.5` → 137, 141–144
- YAML rounded 0 / 3 → Shape 88 / 92–93
- Kind: interactive ×4 → 166/190/214/240
- C2 omit L/E/S → 185/209
- Flyout not-applicable → 231–233 / 257–259
- B3 five-kind full text → Motion 109 only (Named gaps 327 inventory)
- `box-shadow: none` → Elevation 103
- `data-omd-capture` → provenance 110–113 only

`node test-v2/tools/migrate-reference.mjs --brand bmw --gate-only` → PASS, problems `[]`.
`node scripts/migrate-design-md-core.cjs --input docs/design-md-weight/migrated/bmw/DESIGN.md --check --require-portable-core` → exit 0, `portable_core: true`.
Post-F3 DESIGN SHA-256 `4e9797e243afba2d3bb550bac4656268af58afe2ac13b52a71958351198279e2` is **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit]** as the current-file SHA. Command outputs are not catalog adoption (E2c).

## Revision 2026-08-24 (wave12 sol resubmit)

Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v7. Source FAIL: `docs/reviews/t2-1-wave12-2026-08-24-sol-full.md` §1 bmw. New F3 is not required. F3 was not re-run. Not a catalog-adoption claim (E2c). This revision does not re-assert F1/F2/F3 compliance as closed.

| Item | Correction |
|---|---|
| 1. `verification_v2.schema: 2` | Restored as a first-class metadata row on provenance Identity 17 and Freshness 35, plus first-class sentence 42 (A1c). Source YAML `:13-14`. Freshness still records `checked` 36 as a date. Claim ledger remains token claims 91–105. |
| 2. §13 unique relationships | Portable Audience keeps the existing B2a limiter 28 and restores the three source-backed unique relationships (not labels-and-source-parens only) at 30–32. Dual provenance Source §13 129 (E2a). D2 is not a deletion reason. |
| 3. Font Official product-use | Deleted. No dest. Source font evidence classes `:108-114` are the five remaining rows 125–129. Font B2a 121 names those five classes; it does not name Official-product-use. provenance Narrative 76–83 still classifies the 2020 announcement / history / Neue Klasse URLs as narrative-not-interface-token. |
| 4. Named-gaps dual dests | Original `:104` → Semantic 82 + Named gaps 324/325. Original `:160` → omitted-surfaces 266 + Named gaps 328. Original `:200` → Layout 275 + Named gaps 329. Original `:242` → Capture record 160 + Named gaps 326. Original `:114` → Font Licence 129 + Named gaps 331. Original `:212` → Content 280 + Named gaps 332. Original `:84` → Scope 9/13 + Named gaps 333. |
| 5. Ledgers | Source-row dests rewritten to current grep. Prior F3 dest maps and Post-F3 SHA `4e9797e2…` marked SUPERSEDED. Audit current-class notes for Font Official-product-use, Audience labels-only, missing schema: 2, and incomplete Named-gaps dests are SUPERSEDED. F3 not re-run. |

### F1 (changed B2a sites; this resubmit)

Changed: Font 121 (five source classes Live computed surface-use / Live computed but limited use / Official distributed brand asset / Declared-only / Licence boundary named; Official-product-use not a current class). Audience limiter 28 kept; unique relationships 30–32 are source-backed stakeholder facts, not a new derived class.

Unchanged adjacent-complete sites (grepped): Scope 9/11/13; Primary tasks 19; Distinctive 36; Principles 46; capture-bound 52; Avoid 61/66; Semantic 74; Spacing 86/88; Shape 94/99; Elevation 103; Motion 111; Family font-use 131; Type-role 140; Assets 151; Capture-record 158; YAML-empty 164; Home primary 179; Home outline 203; Home flyout 226/238; Build-your-own 252/264; omitted-surfaces 266; Layout 273/275; Content 280/288.

Left without B2a: BMW product identity and catalog homepage URL; live BMW USA URLs; YAML/token hex/geometry; Type role rows including YAML `use` strings; component anatomy including source Use/class strings; 2020 announcement openness/clarity/restraint language; source-backed Audience unique relationships 30–32; B3 five-kind gate 113; Core C1/C2/C3 capture-record policy 162; per-control C2 omission 188/212; flyout role-based not-applicable 234–236 / 260–262; B1 generic-Focus sentence 162; §14 collector-zero 160; Governance boilerplate; Named gaps inventory.

### F2 (grepped dests; current line numbers)

- `verification_v2.schema: 2` → provenance Identity 17 + Freshness 35 + sentence 42. Not in portable DESIGN.md. Not in claim ledger 91–105.
- Original `:13-14` schema → provenance 17/35/42 (no portable dest)
- §13 unique relationships → Audience limiter 28 + bullets 30–32 + provenance 129
- Font Official product-use → deleted; no dest. Not a current Font class in DESIGN.md. SUPERSEDED notes in provenance/this log are not dests.
- Original `:104` semantic omitted colors / canvas / dark-surface / roundel → Semantic paragraph 82 + Named gaps 324/325 (limiter names the readings at 74)
- Original `:160` inputs/cards/badges/dialogs/chatbot/menu → omitted-surfaces 266 + Named gaps 328
- Original `:200` 1440×900 / no mobile breakpoints → Layout 275 + Named gaps 329
- Original `:242` §14 collector-zero → Capture record 160 + Named gaps visual-treatments 326
- Original `:114` licence boundary → Font Licence 129 + Named gaps 331
- Original `:212` product error copy → Content 280 + Named gaps 332
- Original `:84` authenticated vehicle / narrative-not-tokens → Scope 9 (authenticated vehicle) / Scope 13 (narrative-not-tokens) + Named gaps 333
- `#1c69d4` → DESIGN 36/38/54/76/171/179 + provenance 14/24. Semantic 74 has no `#1c69d4` hex. Avoid has no hex.
- `#414141` → DESIGN 36/77/78/203/252 + provenance 42
- `#262626` → DESIGN 36/78/252 + provenance 42
- `#ffffff` → DESIGN 36/79/172/179/219/226/252 + provenance 42
- `#f2f2f2` → DESIGN 36/80/196/201/203 + provenance 42/125
- `#666666` → DESIGN 36/74/82/245/252 + provenance 42/125
- Homepage `https://www.bmw.com` → Scope 9 + provenance 13/22
- BMW USA URLs → Scope 9 + provenance 48–50 / 56–58 / 67–69
- Simple Icons slug `bmw` → Assets 151 + provenance 15/26
- WOFF2 path → provenance 59/85 only. Portable Font Live computed 125 names 52 BMWUSA-hosted WOFF/WOFF2 URLs without the path.
- Club CI URL → provenance 60/83. Portable Font Official distributed 127 names the guideline.
- Brand-design / history / Neue Klasse URLs → provenance 61–63 / 80–82. Narrative facts in Scope 13.
- Tier 2 getdesign.md / refero → provenance 73–74 only
- `tokens.source` YAML key → provenance 18/28/106 only; portable 164 restates `components_harvested: false`
- YAML `use` strings → Type roles 144–147
- YAML lineHeight `1.43` / `1.56` / `1.6` / `1.5` → 140, 144–147
- YAML rounded 0 / 3 → Shape 92 / 96–97
- Kind: interactive ×4 → 169/193/217/243. Type not invented (164)
- C2 omit L/E/S → 188/212
- Flyout not-applicable → 234–236 / 260–262
- B3 five-kind full text → Motion 113 only (Named gaps 330 inventory)
- `box-shadow: none` → Elevation 107
- `data-omd-capture` → provenance 112–115 only; portable Use class names 177/201/224/250
- SHA-256 `77492c4dae561d58c335a606c6ebd2e48e6375961544302b3ea511c17e5a8dec`
- `--gate-only` PASS, problems `[]`
- `--require-portable-core` exit 0, `portable_core: true`

Prior F3 dest maps that no longer match are SUPERSEDED. `node test-v2/tools/migrate-reference.mjs --brand bmw --gate-only` → PASS, problems `[]`. `node scripts/migrate-design-md-core.cjs --input docs/design-md-weight/migrated/bmw/DESIGN.md --check --require-portable-core --json` → exit 0, `portable_core: true`. Command outputs are not catalog adoption (E2c). F3 was not re-run. This revision does not re-assert F1/F2/F3 compliance as closed.
