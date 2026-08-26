# CGV migration log

Source: `web/references/cgv/DESIGN.md`
Destination: `docs/design-md-weight/migrated/cgv/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/cgv/provenance.md`
Date: 2026-08-24
Worker: grok-4.6 T2
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v7
Portable Core: `scripts/design-md-core.cjs` inspectDesignMd, `portable_core: true`, placeholders 0. Worker-session DESIGN SHA-256 `b6b28c4ba25f2cf1c5d92713bf9c1971460c1a02f6646e5e26b1c2a0440a0ec0` is not a current-class claim after F3 (E2c). Post-F3 SHA and gate results are in F2 below. This is not a catalog-adoption claim (E2c).

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (id, name, country, category, homepage, primary_color, logo) | 분리 → provenance; homepage 옮김 → Experience Scope; `primary_color` 옮김 → Distinctive + Foundations + Components; logo URL 옮김 → Typography & Assets + provenance | Portable file has no frontmatter. Name kept as H1 `CGV Design System`. Homepage `https://www.cgv.co.kr/` is dual Scope 9/11 + provenance identity 13/24 (E2a). Catalog `primary_color` `#121212` is identity 14/26/44 + portable Scope atmosphere 13, Distinctive 38/40, capture-bound 55/57, Semantic unmerged-role 77 / Foreground 79, Category field note 205 (as not-this-label), Outline Action Text 224 / field note 231, Screen Format Badge Text 248 / field note 254, Menu Row Text 265 / field note 270 (E2a). Avoid has no `#121212`. Catalog logo type `favicon` / Google s2 `https://www.google.com/s2/favicons?domain=cgv.co.kr&sz=128` is dual provenance identity 15/28 + portable Assets 161 (E2a). Not a captured first-party mark. No Named-gaps first-party-mark row was invented. |
| YAML `omd`, `verified`, `verification_v2`, token claims, `tokens.source` / `extracted` / `note`, `components_harvested` | mixed: `omd` / `verified` / `extracted` / `verification_v2` YAML keys 분리 → provenance; `tokens.source: live-extract` 분리 → provenance and restated in Scope; token note 옮김 → Scope; `components_harvested: true` 분리 → provenance | `verification_v2.schema: 2` is provenance Identity 17 + Freshness 37 + restatement 30 (A1c). `tokens.source: live-extract` is dual provenance 18/22/30/103 + portable Scope 11 (E2a). Token note (coverage 81 / 1,217 uses / interaction count zero) is dual provenance 22 + Scope 11 (E2a). `components_harvested: true` is provenance 20/30/103 only as YAML key (A1c). Portable Capture 184 restates 383 variants / four canonical controls, not the YAML key. YAML `verified` 2026-07-13 and `extracted` 2026-07-13 are provenance freshness 36/41. Footer Verified 42. Claim ledger 85–101. |
| YAML `tokens.colors` / `typography` / `spacing` / `rounded` / `shadow` / `components` | 옮김 → Foundations, Typography & Assets, Components & States | 검증된 값만 최소 필드 단위. YAML unitless lineHeight `1.4` / `1` 비율 보존 (Type roles 150, 154–156) (A1a). YAML tracking `-0.4` / `-0.2` unmerged from table `-0.4px` / `-0.2px` (150/154–157). YAML typography `use` 세 field restored on Type roles 154–156 (A1). Screen marker 11px / 700 / 19px is body-table only, not a YAML typography role (150/157). YAML spacing dense 10 / sm 8 / base 16 / lg 24는 숫자 보존, px 접미사 비발명 (Spacing 90, Layout 287). YAML `rounded` badge 4 / media 16 / action 20 / chip 25 (Shape 96 / 100–103). YAML `shadow.flat` `none` (Elevation 110/114). YAML component types button ×2 + badge + listItem 보존 (Capture 188, Type 194/221/245/262) (A1b). `#121212`와 `#fc5555` 비합침; canvas `#ffffff`와 Outline fill `#ffffff` 비합침; `#f4f4f4` / `#454545` / `#d9d9d9` 비합침 (A4). |
| §1 Visual Theme & Atmosphere | 옮김 → Experience `scope` claim, distinctive traits | 제품/표면 범위(CGV public home captures). Three-capture evidence-domain assignment (11) names captured host `https://cgv.co.kr/` and catalog homepage `https://www.cgv.co.kr/` as not a captured page. Authenticated booking / seat selection / payment / theatre-operation is dual Scope 11 + Avoid 69 + Layout 289 + Named gaps 359 (E2a). Atmosphere extras (13), public-history / current-evolution extras including narrative-not-live-web-tokens (15) 문단 인접에 derived editorial implementation inference / not CGV-authored or a separately published UI specification 한정 (B2/B2a). Distinctive unmerged-role extras have adjacent complete B2a immediately before the bullets (38). `https://cgv.co.kr/`는 provenance identity 24 + Surfaces/Sources/Tier 1 50–52 / 58–60 / 66과 dual (E2a). |
| §1 / §11 공식 히스토리·리포트 URL | 분리 → provenance; 서사 요약은 Scope | 서사 출처. 본문은 토큰이 아니라고 밝힌 경계를 Experience 15에 유지. 2024 sustainability report URL은 provenance Sources 61 / Tier 1 67 only (E2a). Narrative 77 restates Gangbyeon / Cultureplex / “Deep Dive Space” without the path. Gangbyeon 1998 / CJ Village / CJ Golden Village / Cultureplex / “Deep Dive Space”는 portable Scope 15 (A1, B2/B2a). |
| §2 Color Palette & Roles | 옮김 → Foundations semantic color | `#121212` `#ffffff` `#f4f4f4` `#454545` `#d9d9d9` `#fc5555`. Unmerged-role extra characterizations have adjacent complete B2a at 77 (B2/B2a). Omitted error/success/warning/hover/pressed/focus palette (original) is dual Semantic 86 + Named gaps 354 (E2a). `#fc5555` is Signal 84, not primary. |
| §3 Typography Rules | 옮김 → Typography & Assets | 증거 등급. Official product-use (133). Live computed 1,217 uses (135). FontFaceSet nine CDN sources (136). Official distributed none (137). Declared-only Roboto / swiper-icons (138). Outside these captures = source Unresolved class, native-app / authenticated booking-flow / special-format campaign (139) dual Named gaps 360 (E2a). Licence OFL 1.1 (140) dual provenance license URL 62/68 (E2a: URL this ledger; prose 140). Font evidence-class B2a names the six classes (130). Font-use B2a (146). ratio-versus-size-local B2a (150) (B2/B2a). |
| §4 Component Stylings | 옮김 → Components & States | Category Chip / Outline Action / Screen Format Badge / Menu Row. YAML type button ×2 + badge + listItem 보존, 발명 없음 (188) (A1b). Kind: interactive 193/220/261 from tab / movie-card action / navigation-row Use, not from inverting YAML type. Capture selectors 분리 → provenance 109–110; portable Observed는 pointers 204/230 dual (E2a). Badge/Menu have no source pointer (provenance 111–112). Outline Action loading·error·success omitted (C2) 240 dual Named gaps 356 (E2a). Category Chip / Menu Row 역할별 loading/error/success not-applicable (C2) 213–215 / 278–280. Screen Format Badge kind/map 생략 (C4) 256 dual Named gaps 357 (E2a). Named Focus 없음; focus-visible 행에 hex 없음 (B1, 186). Field notes have adjacent complete B2a (205/231/254/270). Unnamed font-use variants kind/map 생략 (C4) 282. |
| §5 Layout Principles | 옮김 → Layout & Platforms + Foundations spacing/shape | YAML scale + 10px metadata / 8/10/16/24px / 40px category/menu / role-specific 25/20/16/4. Shape local-geometry limiter precedes the labeled list (98)와 Layout 독해는 각 절 인접 완전 B2a (289, 299) (B2/B2a). Authenticated seat / payment / theatre-operation (original) is dual Layout 289 named extra + Avoid 69 + Named gaps 359 (E2a). |
| §6 Iconography & Imagery | 옮김 → Typography & Assets + Experience avoid | Movie artwork / screen-format overlay: Assets 163 as captured/recorded surface imagery; ownership unclaimed (not first-party catalog content). `swiper-icons` declared-only: Font 138 + Assets 163 + Avoid 67. No brand-icon grid: Assets 163 dual Named gaps 362 (E2a). YAML `shadow.flat` is Foundations elevation, not this section (source §6 is imagery, not depth). |
| YAML `tokens.shadow.flat` (no body §6 Depth) | 옮김 → Foundations elevation | `none` 110/114 only. No modal/sheet/dropdown/sticky/promotional elevation negative and no toast negative were generated (D1). YAML restatement at 110 is source-stated, not a B2a site. |
| §7 Do's | 옮김 → Experience principles (capture-bound application) | Capture-bound grouping of §7 Do’s named rules has adjacent complete B2a (55) (B2/B2a). Governance 통제 문구에 넣지 않음. |
| §7 Don'ts | 옮김 → Experience avoid | 브랜드 금지. Avoid list-head extra causal readings 인접 완전 B2a (63); last-bullet home-capture-not-generalized 인접 완전 B2a (69) (B2/B2a). `#fc5555` 65; Roboto/swiper-icons 67; badge-colour-alone 68. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms | Source sentence: three capture surfaces but does not establish a responsive breakpoint system. Dual Layout 296 + Named gaps 358 (E2a). Seat-map / navigation-collapse unresolved is Layout 297 (same Named gaps 358 row). 40px/20px-not-cross-viewport 독해는 Layout 인접 완전 B2a (299) (B2/B2a). 원본에 없는 최소폭 발명 없음. |
| §9 Accessibility Notes | 옮김 → Experience avoid + Capture record + Layout | Source §9 is Accessibility Notes, not an Agent Prompt Guide. No tool prompt to delete. High-contrast hierarchy → capture-bound Do 57. No focus or error-state observation → Capture 184. Accessible focus / form validation require separate verified evidence → Capture 184 + Layout 299. Screen-format badge colour-not-alone → Avoid 68. Unique §9-only 값은 받을 슬롯에 옮김 (A3). provenance Source §9 126. |
| §10 Voice & Tone | 옮김 → Content (인접 B2a) | Derived editorial voice extras under adjacent complete B2a (304). Voice-table labels under adjacent complete B2a (306). Source table 310–313. Illustrative Korean lines 314–316 with source limiter; treating them as not captured microcopy has adjacent complete B2a (318) (B2/B2a, E1). |
| §11 Brand Narrative | 옮김 → Experience `scope`; 서사 원장 분리 → provenance | Gangbyeon / CJ Village / Cultureplex / Deep Dive Space restated in portable Scope under adjacent complete B2a (15) (A1, B2/B2a). Report URL은 provenance Sources 61 / Tier 1 67 only. Narrative 77 is URL-free. |
| §12 Principles | 옮김 → Experience principles | 네 항목 source-backed stems (official mission / special formats / Cultureplex / practical decisions). *UI implication* notes 인접 본문에 derived editorial implementation inference / not CGV-authored or a separately published UI specification (48). Capture-bound grouping (§7 Do’s) has adjacent complete B2a (55). Governance 일반 문구는 그 한정의 대체물이 아님 (B2/B2a, E1). |
| §13 Personas | mixed: source-backed stakeholder groups → Audience unique relationships; sidecar 재수록 없음 | 원본이 “not fictional personas or synthetic research”. The three source-backed unique relationships are portable Audience limiter 30 + bullets 32–34 (Moviegoers / Cultureplex visitors / Special-format audiences and partners). Dual provenance Source §13 122 (E2a). Biographies는 provenance에 없음 (D2 n/a — D2 is not a deletion reason for these source-backed stakeholder facts). Audience no-individual-personas-promoted + groups-not-primary-jobs application have adjacent complete B2a (30) (B2/B2a). Primary tasks 3건은 YAML public-component use strings (`count=3`) 23–25, under adjacent complete B2a as not-from-§13 / harvested-home-controls-not-independently-verified-destination-routes (21). |
| §14 States | 옮김 → Components & States capture record + per-component applicability | 본문 보존: No visual state system was captured. Content requirements table Empty / Loading / Error-availability / Error-network / Success / Skeleton / Disabled (A2) 172–183. Graph-not-adopted / content-requirements-not-token-values preservation sentence has adjacent complete B2a (170). Selector-backed-static-only / zero-interaction / accessible-focus-requires-separate-verified-evidence has adjacent complete B2a (184). Original collector-zero / no-visual-state is dual Capture record 172 + Named gaps visual-treatments 355 (hover/focus/pressed/disabled/loading/error/success/empty/skeleton/dialog/form-error; no toast domain) (E2a). 선언 컴포넌트는 §4.4를 닫되 미관측 시각값은 발명하지 않음. `not captured` / `not named`를 `not-applicable` 사유로 쓰지 않음 (C1). Outline Action loading·error·success omitted (exact mapping unresolved; §14 is content requirements, not those paints) (C2) 240 dual Named gaps 356 (E2a). Category Chip / Menu Row 역할별 loading/error/success not-applicable (C2) 213–215 / 278–280. Screen Format Badge는 interactive-kind 근거 없어 kind/map 생략 (C4) 256 dual Named gaps 357 (E2a). Unnamed font-use variants C4 282. focus-visible 행에 hex 없음 (B1, 186). graph 위임 없음. State coverage 완료 주장 없음 (C3, 186). |
| §15 Motion & Easing | 옮김 → Foundations motion | Source: No duration, easing, transition, or animated-state value is present. Not-promoted-absence under adjacent complete B2a (120); “No motion token is prescribed for CGV in this reference.” 무출처 커브 없음 — provenance omission ledger에 커브 값 없음 (E2b n/a, provenance 118). Foundations Motion은 B3 다섯 증거 종류(transition properties · animation name · duration · easing · reduced-motion behavior)를 컴포넌트별 computed 관측한 뒤에만 승격한다는 게이트를 전문 명시 (122). “공식 출처로 검증될 때까지” 약화 문구는 쓰지 않음 (B3, E2c). Named gaps 363 lists the five kinds in inventory form; the B3 full promotion-gate sentence is Foundations Motion 122 only. |
| Footer **Verified** / Tier 1 / Tier 2 / Conflicts | mixed: freshness 분리 → provenance; live CGV URL은 portable에도 | Dual (E2a): `https://cgv.co.kr/`는 Scope 11 + provenance identity 24 + Surfaces/Sources/Tier 1 50–52 / 58–60 / 66. Catalog homepage `https://www.cgv.co.kr/`는 Scope 9/11 + provenance 13/24. Footer verified 2026-07-13는 provenance freshness 42 only. Conflicts unresolved: none. Tier 2 getdesign.md/cgv and refero는 provenance 72–73 only. Report / Pretendard license URLs는 provenance Sources 61–62 + Tier 1 67–68. Source footer does not name a `.verification.md` Proof pointer; none was invented. |

### F1 / F2 (v7 mandatory final passes)

Worker F1/F2 dest maps were a draft. Worker completeness is not a current-class claim (E2c). Post-F3 F1/F2 below. Reconstruction-boundary exemption not used. No “no unqualified sentence remains” claim (E2c). Dest maps grepped against current `DESIGN.md` and `provenance.md` after the F3 B2a pass.

### F1 B2a scan (full DESIGN.md reread)

Worker F1 draft is not a current-class claim (E2c). Post-F3 adjacent complete B2a sites match `provenance.md` Derived inventory 128 after the F3 limiter expansions. This is not a claim that no unqualified sentence remains (E2c).

Adjacent complete B2a (derived editorial implementation inference / not CGV-authored or a separately published UI specification) at: Scope 11/13/15, Primary tasks 21, Audience 30, Distinctive 38, Principles 48, capture-bound 55, Avoid 63/69, Semantic 77, Spacing 90/92, Shape 98/106, Motion 120, Font 130/146, Type roles 150, Assets 161/163, Capture 170/184/188, Category 205, Outline 231, Badge 254, Menu 270, unnamed variants 282, Layout 289/299, Content 304/306/318. Elevation 110/114 is YAML `shadow.flat: none` only (not a B2a site).

Left unqualified as first-party or observed-technical: product identity and catalog homepage (9); YAML/token hex/geometry/type; Type role rows including YAML `use`; component anatomy including source Use/Observed; 2024 report facts after limiter (15); B3 five-kind gate (122); Core C1/C2/C3 (186); Category Chip role-based not-applicable (213–215); Outline Action C2 omission (240); Screen Format Badge C4 (256); Menu Row role-based not-applicable (278–280); §14 table (172–183); Governance boilerplate; Named gaps inventory.

### F2 E2 grep (value + field/role context)

F2 grep after F3 body/ledger edits (three files: DESIGN.md, provenance.md, migration-log.md):

- Catalog `primary_color` `#121212` → DESIGN 13/38/40/55/57/77/79/205/224/231/248/254/265/270 + provenance 14/26/44. Semantic 77 names the hex in the limiter; Foreground bullet is 79. Avoid does not contain `#121212`. Content does not contain `#121212`.
- Signal `#fc5555` → DESIGN 38/63/65/77/84 + provenance 44. Avoid 65 has the hex.
- Canvas / Outline fill `#ffffff` → DESIGN 13/38/40/55/57/80/205/223/231 + provenance 44/126 (Freshness unmerged pair + a11y hierarchy). Semantic Canvas 80.
- Subtle `#f4f4f4` → DESIGN 13/38/42/77/81/196/198/205/231/270
- Secondary `#454545` → DESIGN 13/38/42/77/82/197/205/231
- Line `#d9d9d9` → DESIGN 13/38/42/77/83/225/231
- Badge overlay `rgba(0, 0, 0, 0.55)` → DESIGN 247/254
- YAML lineHeight `1.4` / `1` → DESIGN 150/154–156
- YAML tracking `-0.4` / `-0.2` and table `-0.4px` / `-0.2px` → DESIGN 150/154–157
- Body-table 30.8px / 19.6px / 19px → DESIGN 150/154/155/157
- YAML spacing dense 10 / sm 8 / base 16 / lg 24 → DESIGN 90/287
- YAML rounded 4 / 16 / 20 / 25 → DESIGN 96/100–103
- `shadow.flat` `none` → DESIGN 110/114 + provenance 97. No modal/sheet/dropdown/sticky/promotional elevation sentence. No toast in Named gaps 355.
- Type: button ×2 → DESIGN 194/221; type: button restated Capture 188; Type: badge 245; Type: listItem 262
- Kind: interactive ×3 → 193/220/261. Badge kind omitted 256 (C4).
- Outline Action C2 omission → DESIGN 240, not a destination `not-applicable` row
- Category Chip / Menu Row role-based `not-applicable` → 213–215 / 278–280 (not “not captured”)
- Google favicon URL `s2/favicons?domain=cgv.co.kr` → DESIGN 161 + provenance 15/28
- Homepage `https://www.cgv.co.kr/` → Scope 9/11 + provenance 13/24
- Captured host `https://cgv.co.kr/` → Scope 11 + provenance identity 24 + Surfaces/Sources/Tier 1 50–52 / 58–60 / 66
- Report URL → provenance 61/67 only. Narrative 77 is URL-free. Portable Scope 15 names the 2024 sustainability report without the path.
- Pretendard license URL → provenance 62/68 only. Portable Font 140 names SIL Open Font License 1.1.
- Tier 2 getdesign.md / refero → provenance 72–73 only
- `tokens.source` YAML key → provenance 18/22/30/103; portable Scope 11 restates `live-extract`
- `components_harvested: true` YAML key → provenance 20/30/103 only
- YAML `use` strings → Primary tasks 23–25 + component Use 203/229/253/269
- Capture selectors `data-omd-capture` → DESIGN 204/230 + provenance 109–110
- Persona biographies absent from DESIGN.md Audience 30 (groups 32–34) and from provenance 122
- B3 full promotion-gate sentence → Foundations Motion 122 only. Named gaps 363 is inventory form.
- Coverage 81 / 1,217 uses / 383 variants → Scope 11 / Distinctive 41 / Font 130 (limiter names live-computed-1,217) / Font 135 / Capture 184
- Omitted error/success/warning/hover/pressed/focus palette → Semantic 86 + Named gaps 354
- Authenticated seat / payment / theatre-operation layouts → Scope 11 + Avoid 69 + Layout 289 + Named gaps 359 (not 360)
- Claim ledger rows → provenance 85–101 (not 89–101)

Worker completeness is not a current-class claim (E2c). Post-F3 DESIGN SHA-256 `efcbe5cc3f7564dbfbb1d8899e144dfc0291926e201bf03651ad15c53e279939`. `--gate-only` PASS, problems []. `--require-portable-core` exit 0, `portable_core: true`. Not a catalog-adoption claim (E2c).

## Revision 2026-08-24 (wave14 sol resubmit)

Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v7. Source remainder: `docs/reviews/t2-1-wave14-2026-08-24-sol-full.md` cgv conditions 1–4. New F3 not required. E2c: this revision does not re-assert F1/F2/F3 closed. Not a catalog-adoption claim.

1. Assets 163: `first-party catalog content` removed. Movie artwork is captured/recorded surface imagery; ownership unclaimed.
2. Elevation keeps YAML `shadow.flat: none` at 110/114 only. Modal/sheet/dropdown/sticky/promotional elevation negatives and Named-gaps toast negative deleted (D1).
3. provenance/migration/audit current-class sentences match that disposition. Dest pointers grepped against current files.
4. `--gate-only` and portable Core re-run; SHA below.

Current DESIGN SHA-256 `9f9ca84aaf5b0941945ca0b205851b777b8fa8e2f806d60281e4a63a55897792`.

