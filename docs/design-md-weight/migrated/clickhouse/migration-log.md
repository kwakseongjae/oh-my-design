# ClickHouse migration log

Source: `web/references/clickhouse/DESIGN.md`
Destination: `docs/design-md-weight/migrated/clickhouse/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/clickhouse/provenance.md`
Date: 2026-08-25
Worker: grok-4.6 T2
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v8
Portable Core: `inspectDesignMd` `portable_core: true`. `--gate-only` PASS, problems `[]`. SHA-256 of portable `DESIGN.md` at worker writing: `eb9b8ee40beb12623e241146bb30c8c643a4a7da83800a26b911cb0c30df6533` — worker SHA is not current-class after F3 (E2c). Post-F3 SHA-256 `5f370bd76b23af69c60a525b178b836c8deeda52765ce2c741c1c272f77e6ba9`. This is not a catalog-adoption claim (E2c).
카탈로그 채택 아님.

Canonical Proof: `web/references/clickhouse/.verification.md` SHA-256 `a55c8ef68ba0263db0c76248c2af90e50cf965582ddb62a073626f6f5fec8551` (provenance Proof notes).

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (id, name, country, category, homepage, primary_color, logo) | 분리 → provenance; homepage 옮김 → Experience Scope; `primary_color` 옮김 → Distinctive + Foundations Action Yellow + Public Primary Action; logo slug 옮김 → Typography & Assets + provenance | Portable file has no frontmatter. Name kept as H1 `ClickHouse Design System`. Homepage `https://clickhouse.com` (no trailing slash) is dual Scope 9 + provenance identity (E2a), not Scope 11. Scope 11 names the captured home URL `https://clickhouse.com/` with slash; that slash form is dual Scope 11 + Primary tasks 27 + provenance (E2a). Catalog `primary_color` `#faff69` is identity + portable Scope 15/17, Distinctive unmerged B2a 38 / bullet 40, Semantic unmerged-role 83 / Action Yellow 85, Capture 178, Public Primary 195/197/204, Secondary field-note 228, Number Field field-note 276, Select Menu border 319/325, Toggle field-note 339, provenance Identity/Freshness 47/Claim 111/Proof sidecar raw samples 187/189/193 (`:22`/`:23`/`:25`) (E2a). Proof `:25` expanded-select border form `0px 1px 1px` `#faff69` is provenance 193 only. Avoid 70 names `#166534`, not this yellow. Avoid 68/75 pair-with-number-field uses `#282828`, not this hex. Catalog logo type `simpleicons` / slug `clickhouse` is dual: provenance identity + portable Typography & Assets 167 (E2a). Not a captured first-party mark. A first-party logo-file gap sentence was not generated. No captured-public-route-imagery sentence. |
| YAML `omd`, `verified`, `verification_v2`, token claims, `tokens.source` / `extracted`, `components_harvested`, `ds.*` | mixed: `omd` / `verified` / `verification_v2` / `extracted` / `components_harvested` / `tokens.source` YAML keys 분리 → provenance; `reconciled` 값 분리 → provenance only; `ds.type` / `ds.name` / `ds.url` / `ds.description` 옮김 → Experience Scope + provenance | `tokens.source: reconciled` YAML key and `components_harvested: true` are provenance-only as keys (A1c). The `reconciled` extraction-class string is provenance Identity/Claim ledger only; portable Font evidence 138 restates live computed public-route use, not that string, and `reconciled` is absent from the portable body (E2). Line 133 is the adjacent complete B2a on evidence-class application, not a reconciled restatement. YAML `verified` / `verification_v2.checked` / `extracted` 2026-07-13 are provenance freshness. Footer Verified is provenance only. `verification_v2.schema: 2` is provenance Identity (A1c). YAML `ds.type: system` / `ds.name: ClickHouse Design` / `ds.url: https://clickhouse.design` / catalog description are dual Scope 13 + provenance identity (E2a, A1c). |
| YAML `tokens.colors` / `typography` / `spacing` / `rounded` / `components` | 옮김 → Foundations, Typography & Assets, Components & States; YAML `use` also Type roles / Public List Item / Public Primary | 검증된 값만 최소 필드 단위. YAML lineHeight `1.25` / `1.50` / `1.43` 비율 보존, 고정 px로 변환하지 않음 (A1a). `1.25` Distinctive 38 + Type roles 154/159/160; `1.43` Distinctive 38 + Type roles 154/162; `1.50` Type roles 154/161/163 only (not Distinctive 38). Body `45px` / `25px` / `24px` / `20px` or `17.5px` / `27px` / h1 `60px` / `96px`는 size-local observation. YAML typography `use` restored on Type roles 159–163 (A1). YAML public-list-item `use` restored on 376. YAML control `use` also Public Primary 202. YAML spacing xs 4 sm 6 md 8 control 10 lg 12 xl 16 xxl 24 section 32는 숫자 보존, px 접미사 비발명 (Spacing 97, Layout 385). Body 4/6/8/10/12/16/20/24/32px는 Spacing 99 / Layout 385에 별도 유지 (`20px`는 YAML에 없음). YAML `rounded` sm 4 / md 6 / lg 8 / dialog 10 / full 9999 보존되고 list-item `0` / select-menu `0px 0px 6px 6px`와 비합침 (Shape 105–115; Distinctive 38). 검증된 primitive type은 컴포넌트별로 보존: `Type: listItem` 370. Primary Action / Secondary Action / Navigation / Number Field / Select Trigger / Select Menu / Toggle / Cookie Dialog YAML type 없음·발명 없음 (A1b). Select Menu and Cookie Dialog omit kind and map (C4) 188/327/365; `Kind: interactive`로 뭉개지 않음. `#faff69`와 `#166534`, `#131312`와 `#282828`와 `#141414`와 `#1f1f1c`, `#151515`와 `#ffffff`, `#414141`와 `#4f5101`와 `#393939`는 비합침 (A4). Proof-only `44px` height, cookie `24px 0px`, and raw `rgb`/`lab` stay provenance Proof notes; not portable tokens. |
| §1 Visual Theme & Atmosphere | 옮김 → Experience `scope` claim, distinctive traits | 제품/표면 범위. Product-origin (9) and three-URL evidence-domain assignment (11) name the catalog homepage and the three source-footer public URLs (YAML form) and values-stay-attached-to-the-public-surface-that-established-them. Official-doc ClickHouse Design / brand / Click UI (13), token-note register split (15), atmosphere extra names including official-brand-writing-provides-character-context-not-interface-tokens (17), public-history including narrative-context-not-interface-tokens (19) 문단 인접에 derived editorial implementation inference / not ClickHouse-authored or a separately published UI specification 한정 (B2/B2a). Distinctive unmerged-role extras including compact-Inter-Basier / none-is-universal / evidence-are-separate have adjacent complete B2a immediately before the bullets (38). Three evidence-domain URLs are dual Scope 11 + Primary tasks 27/28/29 + provenance (E2a). Official design/brand/Click UI dual Scope 13 + provenance. |
| §1 / footer / §11 공식 URL | mixed: live URLs는 portable에도; our-story / open-source-10 / brand/color / brand/typography / voice-and-tone / Klim / Apache LICENSE / footer query-string URLs는 provenance; Tier 2는 provenance | 서사·freshness 원장. 본문은 토큰 경계 한정을 유지. Three evidence-domain URLs remain named as the captured surfaces (Scope 11 + Primary tasks 27/28/29). Official `https://clickhouse.design` / brand / Click UI dual Scope 13 + provenance. Footer pricing query-string URL and story `?loc=carousel` are provenance Surfaces only (E1). Evidence class is ClickHouse’s official history / brand guidelines / 2026 open-source account. |
| §2 Color Palette & Roles | 옮김 → Foundations semantic color | 9 YAML hex + body `#166534` / `#393939` / `#1f1f1c` and oklab secondary fill. Unmerged-role extra characterizations have adjacent complete B2a at 83 (B2/B2a). Cookie-consent green `#166534` is source-stated exclusion (15/38/70/83/204/451 + provenance 32/47/111/145), not a new negative domain (D1). Official yellow-primary-in-brand / selective-in-product is first-party restatement under 83. Overlay `#141414` stays cookie-dialog-only (88). Proof raw `rgb`/`lab` stay provenance Proof notes. |
| §3 Typography Rules | 옮김 → Typography & Assets | Font evidence-class B2a (133). Live Inter 1,215 / Basier 66 / Inconsolata one 18px/400 sample / declared-only `fontSohne` `fontSohneBreit` `basier Fallback` / Söhne marketing-only 138–140. Family font-use (150) / YAML-numbers including unitless-ratios-not-fixed-px (154) 독해는 각 인접 완전 B2a (B2/B2a). 원본에 있는 declared-only 목록은 유지. 원본에 없는 type-spec 부정은 만들지 않음 (D1). YAML lineHeight `1.25` Distinctive 38 + Type 154/159/160; `1.43` Distinctive 38 + Type 154/162; `1.50` Type 154/161/163 only (A1a). Public h1 is body-table only (158); YAML has no h1 lineHeight; none invented. Klim URL은 provenance only. |
| §4 Component Stylings | 옮김 → Components & States + Type roles / Primary tasks | Public List Item `Type: listItem` 370 (A1b). Other harvested controls YAML type 없음·발명 없음. Pricing Select Menu and Cookie Dialog: no YAML type; Type not invented; kind and state-applicability map omitted (C4) 188/327/365. Source capture selectors dual provenance Capture selectors + DESIGN 199/226/247/249/274/299/323/337/361/376; §14/Observed `data-omd-capture="4"` also 174/179/248/249 (E2a). Primary Action loading·error·success omitted (C2) 213. Secondary same 237. Cookie Dialog has no map (C4), so no C2 L/E/S fields. Number Field / Select Trigger loading·success omitted (C2) 286/311; error applicable. Nav / Toggle L/E/S는 역할로 not-applicable 257–259 / 347–349 (C2; `not captured` 사유 아님, C1). Select Menu has no map (C4), so no C2 L/E/S rows. Nav focus/hover/pressed on `data-omd-capture="4"`는 additional named observed states; focus-visible 행에 hex 없음 (B1, 186/249/261). List item C4 omit kind+map 380. Field notes have adjacent complete B2a on unmerged-field readings (204/228/249/276/301/325/339/363/378). YAML-type-absent-none-invented and Select-Menu/Cookie-Dialog C4 have adjacent complete B2a on Capture record 188. Home padding `10px 16px` vs pricing `12px 24px` stay unmerged (199/204). oklab secondary fill preserved 220. Select-menu radius `0px 0px 6px 6px` and yellow `0px 1px 1px` border preserved 319–320. Select Menu Observed expanded/menu-open and selected 324/327. Cookie Dialog Observed open 362/365. Proof-only pricing-primary `44px` and cookie `24px 0px` stay provenance Proof notes. Proof `:25` expanded-select selector-bound tuple (`surface-2::[data-omd-interaction-capture="menu-0-0"]`; `#282828` / `#dfdfdf`; border `0px 1px 1px` `#faff69`; lower 6px corners; 4px 0px; Inter 14px/400) stays provenance Proof notes 193; portable Select Menu keeps canonical DESIGN.md forms at 317–323. |
| §5 Layout Principles | 옮김 → Layout & Platforms + Foundations spacing/shape | 1440×900, 4/6/8/10/12/16/20/24/32px, compact public-control rhythm, no complete grid, home canvas `#131312`, calculator `#282828`, editorial article layout, do not infer authenticated-console density / dashboard grids / mobile collapse (Layout 385–387). Shape local-geometry limiter precedes the labeled list (105). Layout recorded-span extras 385 and captured-surface-not-cross-viewport 387는 각 절 인접 완전 B2a (B2/B2a). |
| §6 Depth & Elevation | 옮김 → Foundations elevation | `box-shadow: none` 119. hierarchy-from-dark-surface-changes extras B2a is on 119. Expanded pricing select recorded exception `rgba(0,0,0,0.1) 0px 10px 15px -3px` and `rgba(0,0,0,0.1) 0px 4px 6px -4px` 119. Cookie dialog and public menus are not a universal application-overlay scale (119). |
| §7 Do's and Don'ts | mixed: Do 옮김 → Experience principles (capture-bound); Don't 옮김 → Experience avoid | Capture-bound grouping of §7 Do’s named rules has adjacent complete B2a (58). Avoid named Don’ts + unique §9 constraints 인접 완전 B2a (68). Pair-only-with-selector-backed-`#282828`-number-field and do-not-invent-product-console-status-error-or-mobile-behavior are the unique §9 constraints kept at Avoid 75. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms | No viewport comparison; all three surfaces at 1440×900; preserve accessibility/responsive implementation requirements; do not claim ClickHouse-specific mobile menu behavior, breakpoints, touch targets, or grid columns without another direct observation (387). Invented breakpoint widths were not in the source and are not added (D1, A1). |
| §9 Agent Prompt Guide | 삭제 | 도구별 명령·프롬프트. 슬롯 없는 위임 없음. Unique brand constraints already have Experience/Foundations/Components slots: public primary `#faff69` / `#151515` / 1px yellow / 4px / `10px 16px` home or `12px 24px` pricing → Public Primary 195–204 / Distinctive 38; pricing number field `#282828` `#dfdfdf` 1px `#414141` 4px `0px 12px` → Number Field 268–274; expanded select menu `#282828` `#dfdfdf` lower 6px yellow border `4px 0px` → Select Menu 317–323; public body/list Inter 16px/400/24px and Basier 36px/600/45px → Type roles 159/161; pair only with selector-backed `#282828` number field / do not invent product-console status, error, or mobile → Avoid 75. `omd-apply` / `npx omd` absent. |
| §10 Voice & Tone | 옮김 → Content & Locales | Official-writing-characterization 인접 완전 B2a (392). Official wording sample *“raw, confident, exacting, technical, and direct”* is Content 406 (first-party quote, not on the 392 limiter). Voice-table directions 인접 완전 B2a (394). Voice-and-tone URL is provenance Narrative only. “direct minimalism” and “built for engineers and trusted by leaders” are §11 dual dests (Scope 19 + Content 405/407), not this row. No complete-locale-profile or synthetic-voice-sample sentence. |
| §11 Brand Narrative | 옮김 → Experience `scope` + Content official wording samples; 서사 원장 분리 → provenance | Official history restated in portable Scope official-account 19 under adjacent complete B2a (A1, B2/B2a). Canonical §11 “direct minimalism” and “built for engineers and trusted by leaders” are dual Scope 19 + Content official wording samples 405/407 (E2a). Proof disposition for those wording samples: provenance Narrative 90 records the dual dest; sidecar `:67` quoted at provenance 211 is the brand-guide sentence that names “direct minimalism” (not a third portable dest). Proof `:25` at provenance 193 is the expanded-select raw tuple, not a §11 dest. 2026 open-source account restated in Scope 19. Product-origin 9 is the catalog positioning sentence. Atmosphere 17 restates the visual/bounded-scope narrative. our-story and open-source-10 URLs are provenance Narrative. Evidence class is ClickHouse’s official history, brand guidelines, and 2026 open-source account. These two wording samples are not lumped into the §10 row. |
| §12 Principles | 옮김 → Experience principles | 다섯 항목 전체 editorial packaging + UI implications. 인접 본문에 derived editorial implementation inference / not ClickHouse-authored or a separately published UI specification (48). UI-implication tails have adjacent complete B2a (56). Capture-bound grouping (§7 Do’s) has adjacent complete B2a (58). Governance 일반 문구는 그 한정의 대체물이 아님 (B2/B2a, E1). Source sentence “The UI implications are this reference’s interpretation of official positioning, not published ClickHouse product principles” is kept at 56. Numbered stems quote official voice / brand-value / color / open-source writing. |
| §13 Personas | mixed: 공개 자료 audience groups만 Audience; 가상 biography 없음·sidecar 재수록 없음 | 원본이 named/fictional personas를 주장하지 않고 developers / data teams를 intended audience로 둔다. Groups는 portable Audience 34. Names/ages/company sizes/locations/quantitative goals는 원본에도 이관본에도 provenance에도 없음 (D2). Generic deletion only: `fictional archetype material deleted; not re-hosted`. Two source `[FILL IN: …]` audience slots are provenance placeholder omission ledger, not re-hosted labels. Audience no-individual-personas-promoted application has adjacent complete B2a (34) (B2/B2a). Primary tasks 3건 dests are the three captured public URLs (27–29), under adjacent complete B2a as independently-verified-as-the-three-captured-public-URLs / harvested-strings-controls-not-independently-verified-destination-routes / review-the-public-marketing-home / use-the-public-pricing-calculator / read-the-captured-public-customer-story (25). |
| §14 States | 옮김 → Components & States capture record + per-component applicability | 본문 보존: Public primary action default; public navigation focus/hover/pressed on `data-omd-capture="4"` raw style in verification notes; pricing select expanded/menu-open; pricing menu option selected with no unobserved selected fill; pricing toggle checked/unchecked with no different checked visual; cookie dialog open as separate consent chrome; loading/error/empty/disabled/success/skeleton not captured, intentionally unspecified (A2) 174–184. Capture-record graph-not-adopted 174; Core-applicability-by-meaning / omitted-L-E-S-fields 186 (B2/B2a). C4 omit-kind for List Item / Select Menu / Cookie Dialog 188. 선언 interactive 컴포넌트는 §4.4를 닫되 미관측 시각값은 발명하지 않음. `not captured` / `not named`를 `not-applicable` 사유로 쓰지 않음 (C1). Primary/Secondary loading·error·success omitted (C2) 213/237. Number Field / Select Trigger loading·success omitted (C2) 286/311. Nav/Toggle L/E/S role-based not-applicable 257–259 / 347–349. Select Menu and Cookie Dialog have no map (C4, 327/365). focus-visible 행에 hex 없음 (B1, 186). graph 위임 없음. State coverage 완료 주장 없음 (C3, 186). |
| §15 Motion & Easing | 옮김 → Foundations motion | Interaction outcomes recorded but no duration, easing, transition-property, or reduced-motion measurement; source-stated-absence B2a (123). No motion token is promoted. Do not infer a ClickHouse motion scale from static public states or Click UI documentation. 무출처 커브 없음 — provenance omitted-curves records that absence (E2b). Foundations Motion은 B3 다섯 증거 종류(transition properties · animation name · duration · easing · reduced-motion behavior)를 컴포넌트별 computed 관측한 뒤에만 승격한다는 게이트를 전문 명시 (125). “공식 출처로 검증될 때까지” 약화 문구는 쓰지 않음 (B3, E2c). Named gaps 455 lists the five kinds in inventory form; the B3 full promotion-gate sentence is Foundations Motion 125 only. Source `[FILL IN: motion tokens only after direct surface or official token evidence.]` is provenance placeholder omission ledger, not emitted in the portable body. |
| Footer **Verified** / Tier 1 / Tier 2 / Conflicts / Resolution note | mixed: freshness 분리 → provenance; live URLs는 portable에도; query-string / Klim / our-story / open-source-10 / Tier 2는 provenance | Dual (E2a): three evidence-domain URLs는 Scope 11 + provenance Surfaces/Sources/Tier 1. Homepage `https://clickhouse.com` (no slash)는 Scope 9 + provenance identity, not Scope 11. Official design/brand/Click UI dual Scope 13 + provenance. Footer verified 2026-07-13는 provenance freshness only. Conflicts unresolved: none. Portable body does not re-host Tier 2 failure strings (E1); they are provenance Tier 2. Resolution note: forest-green conversion CTAs and 4px/8px card rules are provenance source-stated removed claims 145 only (absent from the portable body); neon-on-black is Avoid 72; cookie-consent green exclusion is Avoid 70 / Semantic 83 / Named gaps 451; Click UI kept separate is Scope 13. Canonical Proof sidecar lineage, counts, raw `rgb`/`lab`, Proof-only `44px` / `24px 0px`, brand-guide `updated October 2025`, Klim/license, and independent-docs-chrome uninspected boundary are provenance Proof notes. |

### F1 / F2 (v8 mandatory final passes)

**[SUPERSEDED dest 2026-08-25 wave16 sol resubmit]** Worker-session F1/F2 dest maps below are not current-class. Current dests are in `## Revision 2026-08-25 (wave16 sol resubmit)`. Worker completeness is not a current-class claim (E2c). This is not a catalog-adoption claim and is not a claim that no unqualified sentence remains (E2c).

### F1 B2a scan (full DESIGN.md reread)

Worker F1 dests (F3-expanded extra names, line numbers unchanged): Scope 9/11/13/15/17/19, Primary tasks 25, Audience 34, Distinctive 38, Principles 48/56/58, Avoid 68, Semantic 83, Spacing 97/99, Shape 105/115, Elevation 119, Motion 123, Font 133, Family 150, Type-role 154, Assets 167/169, Capture 176/188/190, Primary field-note 206, Secondary 230, Nav 251/263, Number Field 278, Select Trigger 303, Select Menu 328/340, Toggle 352/364, Cookie Dialog 377/388, List Item 401/403, Layout 408/410, Content 415/417/432. F3 named extras on 17 (official-brand-writing-not-interface-tokens), 19 (narrative-context-not-interface-tokens), 25 (three job names), 38 (Inter-Basier / none-is-universal / evidence-are-separate), 48 (five stems), 99 (compact-rhythm-not-complete-grid), 432 (unobserved-locale-remains-unnamed). Capture 188 no longer names list-item/YAML-type (those stay on 190). Governance Authority / priority / unknowns / changes 438/444–449/453/459 are the controlled Core copy; they are not reconstruction readings and are not wrapped. Named gaps 464–481 are unnamed-value inventory, not extra brand doctrine. Semantic bullets 85–93 are covered by unmerged-role limiter 83. Type-role rows 158–163 are covered by YAML-number limiter 154. Principles 50–54 are covered by the five-item limiter 48. Distinctive bullets 40–44 are covered by unmerged limiter 38. L/E/S omission sentences 215/239/288/313/386 are Core C2 policy covered by capture-record omitted-L-E-S-fields 188. Official wording samples 428–430 are first-party quotes, not reconstruction readings. This is not a claim that no unqualified sentence remains (E2c). Worker F1 completeness is not a current-class claim after F3 (E2c).

### F2 grep (this session; value + field/role context)

F2 grep after body/ledger writes (three files: DESIGN.md, provenance.md, migration-log.md):

- Catalog `primary_color` `#faff69` → DESIGN 15/17/38/40/83/85/180/197/199/206/230/278/322/328/352 + provenance Identity 14/32, Freshness 47, Claim 111, Proof 164. Avoid 70 does not contain this hex. Avoid 68/75 uses `#282828`, not this hex.
- `#131312` → DESIGN 15/17/38/41/83/86/230/278/352/377/408 + provenance Freshness pairs
- `#282828` → DESIGN 15/17/38/41/68/75/83/87/182/230/270/278/295/303/320/328/352/377/408 + Avoid 75 pair-with-number-field + provenance Freshness pairs
- `#141414` → DESIGN 15/38/83/88/185/352/371/377
- `#dfdfdf` → DESIGN 83/89/182/271/278/296/321/395/401
- `#ffffff` → DESIGN 15/38/83/90/185/206/223/230/372/377
- `#414141` → DESIGN 15/38/83/91/206/230/272/278/297/303/348/352/377
- `#4f5101` → DESIGN 15/38/83/92/206/224/230/278
- `#151515` → DESIGN 15/17/38/40/83/93/180/198/206/230/278/377
- `#166534` → DESIGN 15/38/70/83/206/476 + provenance Identity 32, Freshness 47, Claim 111, source-stated removed claims 145
- `#393939` → DESIGN 15/38/83/185/373/377
- `#1f1f1c` → DESIGN 38/83/347/352
- Simple Icons slug `clickhouse` → Assets 167 + provenance identity
- Homepage `https://clickhouse.com` (no slash) → Scope 9 + provenance identity. Not Scope 11. Not Primary tasks
- Home `https://clickhouse.com/` → Scope 11 + Primary tasks 27 + provenance Surfaces/Sources/Tier 1
- Pricing `https://clickhouse.com/pricing` → Scope 11 + Primary tasks 28 + provenance
- Story YAML URL → Scope 11 + Primary tasks 29 + provenance. Footer `?loc=carousel` and pricing query-string URLs are provenance Surfaces only
- `https://clickhouse.design` / brand / Click UI → Scope 13 + provenance identity/Sources/Tier 1
- Klim / our-story / open-source-10 / voice-and-tone URLs → provenance Narrative/Proof only. Portable Font 139 names Klim without the URL
- `tokens.source` / `components_harvested` YAML keys → provenance only. `reconciled` is absent from the portable body; Font evidence 138 restates live computed public-route use, not the extraction-class string. Line 133 is B2a evidence-class, not a reconciled restatement
- YAML `ds.type: system` → Scope 13 + provenance identity
- YAML `use` strings → Type roles 159–163 and Public List Item 399; Public Primary 204 carries YAML control use
- `Type: listItem` → 393. `Type: button` / `Type: tab` absent
- Public Primary omission sentence → 215. Secondary → 239. Cookie Dialog → 386. Number Field → 288. Select Trigger → 313. Nav L/E/S not-applicable → 259–261. Select Menu → 336–338. Toggle → 360–362
- `omd-apply` / `npx omd` / `[FILL IN]` / `storefront` absent from portable body
- §14 public primary default / nav focus-hover-pressed / select expanded / option selected / toggle checked-unchecked / cookie open / loading-error-empty-disabled-success-skeleton unspecified → Capture record 176–187 (adjacent complete B2a on 176 and 188)
- YAML spacing numbers 4/6/8/10/12/16/24/32 → Spacing 97 and Layout 408 without a required px suffix on the YAML steps; body 20px kept at Spacing 99 and Layout 408
- YAML `1.25` / `1.50` / `1.43` → `1.25` Distinctive 38 + Type roles 154/159/160; `1.43` Distinctive 38 + Type roles 154/162; `1.50` Type roles 154/161/163 only (not Distinctive 38) + provenance Freshness pairs / Proof notes
- B3 five-kind gate → Foundations Motion 125 (`transition properties, animation name, duration, easing, and reduced-motion behavior` + per component + “Official documentation of a single curve or duration is not that gate”). Named gaps 481 lists those five kinds in inventory form; it is not the B3 full promotion-gate sentence
- Cubic-bezier values absent from DESIGN.md and from the source DESIGN.md. provenance omitted-curves records that absence
- Capture selectors → dual provenance Capture selectors + DESIGN 201/228/249/251/276/301/326/350/375/399; `data-omd-capture="4"` also 176/181/250/251
- Persona names/ages/company sizes/locations absent from DESIGN.md and provenance. Audience groups only at Audience 34
- `box-shadow: none` → Elevation 119
- oklab secondary fill → DESIGN 222/230
- `17.5px` → Distinctive 38, Type roles 154/162
- `96px` / `60px` / `48px` → Distinctive 38, Type roles 154/158
- `0px 0px 6px 6px` → Distinctive 38, Shape 108/113/115, Select Menu 323/328
- `rgba(0,0,0,0.1) 0px 10px 15px -3px` / `rgba(0,0,0,0.1) 0px 4px 6px -4px` → Elevation 119 + Select Menu field-note 328

### F3 audit (2026-08-25)

**[SUPERSEDED dest 2026-08-25 wave16 sol resubmit]** Post-F3 dest maps and SHA below are not current-class after the list-only revision. New F3 was not run. Auditor greps after B2a limiter expansions (DESIGN line numbers unchanged) and dest-map corrections. Post-F3 SHA-256 `5f370bd76b23af69c60a525b178b836c8deeda52765ce2c741c1c272f77e6ba9`. Worker SHA `eb9b8ee40beb12623e241146bb30c8c643a4a7da83800a26b911cb0c30df6533` superseded as current-class. `--gate-only` PASS, problems `[]`. Core `portable_core: true`. This is not a catalog-adoption claim and is not a claim that no unqualified sentence remains (E2c).

## Revision 2026-08-25 (wave16 sol resubmit)

**[SUPERSEDED dest 2026-08-25 wave16 final resubmit]** Item 1 `:21-27` (185–195) omitted sidecar `:25`; Proof sidecar `#faff69` dest 187/189 omitted `:25`; cookie `:27` dest 195 / height `:43,55` dests 197/199 / brand-guide `:67` dest 209 / Klim `:35,70,72` dests 207/211/213 / independent-docs `:74` dest 215 are pre-insert line numbers. Current dests are in `## Revision 2026-08-25 (wave16 final resubmit)`.

List-only revision against `docs/reviews/t2-1-wave16-2026-08-25-sol-full.md` clickhouse conditions 1–5. Rulebook v8. New F3 was not run. Worker-session and post-F3 dest maps above are **[SUPERSEDED dest 2026-08-25 wave16 sol resubmit]**. Not a catalog-adoption claim (E2c).

1. Proof lineage/counts/raw literals: provenance Proof notes quote sidecar `:5` (177), `:15` (179), selector-bound raw samples `:21-27` (185–195), Proof-only height `:23,43,55` (189/197/199), cookie `24px 0px` `:27` (195), brand-guide `updated October 2025` `:67` (209), Klim/license `:35,70,72` (207/211/213), independent-docs-chrome `:74` (215). SHA `a55c8ef68ba0263db0c76248c2af90e50cf965582ddb62a073626f6f5fec8551`. Proof-only `44px`, cookie `24px 0px`, and raw `rgb`/`lab` are absent from portable DESIGN.md.
2. Invented imagery and locale/synthetic negatives deleted from portable DESIGN.md. Assets keeps Simple Icons identity-only (167). Official wording samples kept (405–407). Named gaps no longer lists a complete locale profile, synthetic voice samples, or imagery-ownership.
3. Pricing Select Menu and Cookie Dialog omit `Kind` and the state-applicability map (C4) 188/327/365. Named observed states and visual tuples remain (324/327, 362/365). Type uninvented. Public List Item still omits kind/map (370/380).
4. Canonical §11 “direct minimalism” and “built for engineers and trusted by leaders” recorded as dual Scope 19 + Content official wording samples 405/407 on the §11 migration-log row (not lumped into §10). §10 keeps Content 392/394 and wording sample 406 only.
5. SHA and gates recorded at the end of this block after re-run. Dest maps below are this revision’s greps, not a closed F1/F2/F3 completeness claim (E2c).

F2 greps after this revision (value + field/role context; not a closed completeness claim):

- Catalog `primary_color` `#faff69` → DESIGN 15/17/38/40/83/85/178/195/197/204/228/276/319/325/339 + provenance Identity 14/32, Freshness 47, Claim 111, Proof sidecar 187/189. Avoid 70 does not contain this hex. Avoid 68/75 uses `#282828`, not this hex
- `#131312` → DESIGN 15/17/38/41/83/86/228/276/339/363/385 + provenance Freshness pairs / Proof `:21` 185 (`rgb(19, 19, 18)` provenance-only)
- `#282828` → DESIGN 15/17/38/41/68/75/83/87/180/228/268/276/293/301/317/325/339/363/385 + Avoid 75 pair-with-number-field + provenance Freshness pairs / Proof `:24` 191 (`lab(16.1088 0 0)` provenance-only)
- `#141414` → DESIGN 15/38/83/88/183/339/357/363 + provenance Proof `:27` 195 (`rgb(20, 20, 20)` provenance-only)
- `#dfdfdf` → DESIGN 83/89/180/269/276/294/318/372/378
- `#ffffff` → DESIGN 15/38/83/90/183/204/221/228/358/363
- `#414141` → DESIGN 15/38/83/91/204/228/270/276/295/301/335/339/363 + provenance Proof `:24` 191 (`lab(27.5348 0 0)` provenance-only)
- `#4f5101` → DESIGN 15/38/83/92/204/222/228/276
- `#151515` → DESIGN 15/17/38/40/83/93/178/196/204/228/276/363 + provenance Proof `:22` 187 (`lab(6.77022 0 0)` provenance-only)
- `#166534` → DESIGN 15/38/70/83/204/451 + provenance Identity 32, Freshness 47, Claim 111, source-stated removed claims 145
- `#393939` → DESIGN 15/38/83/183/359/363
- `#1f1f1c` → DESIGN 38/83/334/339 + provenance Proof `:26` 193 (`lab(11.6695 -0.575654 2.20573)` provenance-only)
- Proof-only `44px` → provenance 32/127/183/189/197; absent from DESIGN.md
- Proof-only cookie `24px 0px` → provenance 127/183/195; absent from DESIGN.md
- Simple Icons slug `clickhouse` → Assets 167 + provenance identity. No imagery-ownership sentence
- Homepage `https://clickhouse.com` (no slash) → Scope 9 + provenance identity. Not Scope 11. Not Primary tasks
- Home `https://clickhouse.com/` → Scope 11 + Primary tasks 27 + provenance Surfaces/Sources/Tier 1
- Pricing `https://clickhouse.com/pricing` → Scope 11 + Primary tasks 28 + provenance
- Story YAML URL → Scope 11 + Primary tasks 29 + provenance. Footer `?loc=carousel` and pricing query-string URLs are provenance Surfaces only
- `https://clickhouse.design` / brand / Click UI → Scope 13 + provenance identity/Sources/Tier 1
- Klim / our-story / open-source-10 / voice-and-tone URLs → provenance Narrative/Proof only. Sidecar Klim/license quotes 207/211/213. Portable Font 139 names Klim without the URL
- brand guide `updated October 2025` → provenance Proof `:67` 209
- independent docs chrome uninspected → provenance Proof `:74` 215
- `tokens.source` / `components_harvested` YAML keys → provenance only. `reconciled` is absent from the portable body
- YAML `ds.type: system` → Scope 13 + provenance identity
- YAML `use` strings → Type roles 159–163 and Public List Item 376; Public Primary 202 carries YAML control use
- `Type: listItem` → 370. `Type: button` / `Type: tab` absent. Select Menu / Cookie Dialog Type uninvented
- `Kind: interactive` → Primary 193, Secondary 218, Nav 242, Number Field 266, Select Trigger 291, Toggle 332. Select Menu and Cookie Dialog have no Kind field
- C4 omit kind/map → Capture 188; Select Menu 327; Cookie Dialog 365; List Item 380; Named gaps 446
- Public Primary omission sentence → 213. Secondary → 237. Number Field → 286. Select Trigger → 311. Nav L/E/S not-applicable → 257–259. Toggle → 347–349. Select Menu and Cookie Dialog have no map
- §14 public primary default / nav focus-hover-pressed / select expanded / option selected / toggle checked-unchecked / cookie open / loading-error-empty-disabled-success-skeleton unspecified → Capture record 174–184 (adjacent complete B2a on 174 and 186)
- YAML spacing numbers 4/6/8/10/12/16/24/32 → Spacing 97 and Layout 385 without a required px suffix on the YAML steps; body 20px kept at Spacing 99 and Layout 385
- YAML `1.25` / `1.50` / `1.43` → `1.25` Distinctive 38 + Type roles 154/159/160; `1.43` Distinctive 38 + Type roles 154/162; `1.50` Type roles 154/161/163 only (not Distinctive 38)
- B3 five-kind gate → Foundations Motion 125. Named gaps 455 lists those five kinds in inventory form; it is not the B3 full promotion-gate sentence
- Capture selectors → dual provenance Capture selectors + DESIGN 199/226/247/249/274/299/323/337/361/376; `data-omd-capture="4"` also 174/179/248/249
- Canonical §11 “direct minimalism” / “built for engineers and trusted by leaders” → dual Scope 19 + Content 405/407 (E2a). §10 wording sample *“raw, confident, exacting, technical, and direct”* → Content 406
- `box-shadow: none` → Elevation 119
- oklab secondary fill → DESIGN 220/228
- `17.5px` → Distinctive 38, Type roles 154/162
- `96px` / `60px` / `48px` → Distinctive 38, Type roles 154/158
- `0px 0px 6px 6px` → Distinctive 38, Shape 108/113/115, Select Menu 320/325
- `rgba(0,0,0,0.1) 0px 10px 15px -3px` / `rgba(0,0,0,0.1) 0px 4px 6px -4px` → Elevation 119 + Select Menu field-note 325
- `omd-apply` / `npx omd` / `[FILL IN]` / `storefront` / captured public-route imagery / complete locale profile / synthetic voice samples absent from portable body

`node test-v2/tools/migrate-reference.mjs --brand clickhouse --gate-only` → PASS, problems `[]`.
`node scripts/migrate-design-md-core.cjs --input docs/design-md-weight/migrated/clickhouse/DESIGN.md --check --require-portable-core --json` → exit 0, `portable_core: true`.
SHA-256 of portable `DESIGN.md` `60cb67aa2497bf9243ea21ad9ff25c567e208263ad709cbff03f228dfa6d1c57`. New F3 was not run. Not a catalog-adoption claim (E2c).

## Revision 2026-08-25 (wave16 final resubmit)

List-only remainder against `docs/reviews/t2-1-wave16-2026-08-25-sol-recheck.md` clickhouse conditions 1 and 4. Rulebook v8. DESIGN.md not edited. New F3 was not run. Wave16 sol-resubmit Proof dests above are **[SUPERSEDED dest 2026-08-25 wave16 final resubmit]**. Not a catalog-adoption claim (E2c).

1. Canonical `.verification.md:25` selector-bound raw tuple restored byte-exact on provenance Proof notes 193: `surface-2::[data-omd-interaction-capture="menu-0-0"]`; `#282828` / `#dfdfdf`; border `0px 1px 1px` `#faff69`; lower 6px corners; 4px 0px; Inter 14px/400. Selector-bound raw samples are now `:21` 185, `:22` 187, `:23` 189, `:24` 191, `:25` 193, `:26` 195, `:27` 197. Proof-only `44px` / cookie `24px 0px` / raw `rgb`/`lab` / Proof `:25` border form without `solid` stay provenance-only (A1 / A4 / E1).
2. §11 dual dests unchanged in portable body: Scope 19 + Content 405/407. Proof disposition now matches: provenance Narrative 90 records that dual dest; sidecar `:67` quoted at provenance 211 names “direct minimalism” in the brand-guide sentence (not a third portable dest); `:25` at 193 is not a §11 dest. Current-class Proof/F2/audit dests below replace the overclaim that `:21-27` lived at 185–195.

F2 greps after this revision (value + field/role context; not a closed completeness claim):

- Catalog `primary_color` `#faff69` → DESIGN 15/17/38/40/83/85/178/195/197/204/228/276/319/325/339 + provenance Identity 14/32, Freshness 47, Claim 111, Proof sidecar raw samples 187/189/193 (`:22`/`:23`/`:25`). Proof `:43` 199 also contains this hex (height row; not a portable token). Proof notes intro 183 names the portable Select Menu form. Avoid 70 does not contain this hex. Avoid 68/75 uses `#282828`, not this hex
- `#131312` → DESIGN 15/17/38/41/83/86/228/276/339/363/385 + provenance Freshness pairs / Proof `:21` 185 (`rgb(19, 19, 18)` provenance-only)
- `#282828` → DESIGN 15/17/38/41/68/75/83/87/180/228/268/276/293/301/317/325/339/363/385 + Avoid 75 pair-with-number-field + provenance Freshness pairs / Proof `:24` 191 (`lab(16.1088 0 0)` provenance-only) / Proof `:25` 193 (hex form on the expanded-select tuple)
- `#141414` → DESIGN 15/38/83/88/183/339/357/363 + provenance Proof `:27` 197 (`rgb(20, 20, 20)` provenance-only)
- `#dfdfdf` → DESIGN 83/89/180/269/276/294/318/372/378 + provenance Proof `:25` 193
- `#ffffff` → DESIGN 15/38/83/90/183/204/221/228/358/363
- `#414141` → DESIGN 15/38/83/91/204/228/270/276/295/301/335/339/363 + provenance Proof `:24` 191 (`lab(27.5348 0 0)` provenance-only)
- `#4f5101` → DESIGN 15/38/83/92/204/222/228/276
- `#151515` → DESIGN 15/17/38/40/83/93/178/196/204/228/276/363 + provenance Proof `:22` 187 (`lab(6.77022 0 0)` provenance-only)
- `#166534` → DESIGN 15/38/70/83/204/451 + provenance Identity 32, Freshness 47, Claim 111, source-stated removed claims 145
- `#393939` → DESIGN 15/38/83/183/359/363
- `#1f1f1c` → DESIGN 38/83/334/339 + provenance Proof `:26` 195 (`lab(11.6695 -0.575654 2.20573)` provenance-only)
- Proof `:25` expanded-select tuple → provenance 193. Selector dual Capture selectors 122 + DESIGN 323 + Proof `:25` 193 / `:58` 203. Proof border form `0px 1px 1px` `#faff69` (no `solid`) → provenance 32/193. Portable border `0px 1px 1px solid #faff69` → DESIGN 319/325 + provenance 32/183. Proof `lower 6px corners` → DESIGN Capture 180 + provenance 193. Portable radius `0px 0px 6px 6px` → DESIGN 320/325. Proof raw 4px 0px (no surrounding backticks, matching sidecar `:25`) → provenance 193. Portable Padding field `4px 0px` → DESIGN 321. Proof `Inter 14px/400` → provenance 191/193; portable Select Menu font `14px / 400 / Inter` → DESIGN 322
- Proof-only `44px` → provenance 32/127/183/189/199; absent from DESIGN.md
- Proof-only cookie `24px 0px` → provenance 127/183/197; absent from DESIGN.md
- Simple Icons slug `clickhouse` → Assets 167 + provenance identity. No imagery-ownership sentence
- Homepage `https://clickhouse.com` (no slash) → Scope 9 + provenance identity. Not Scope 11. Not Primary tasks
- Home `https://clickhouse.com/` → Scope 11 + Primary tasks 27 + provenance Surfaces/Sources/Tier 1
- Pricing `https://clickhouse.com/pricing` → Scope 11 + Primary tasks 28 + provenance
- Story YAML URL → Scope 11 + Primary tasks 29 + provenance. Footer `?loc=carousel` and pricing query-string URLs are provenance Surfaces only
- `https://clickhouse.design` / brand / Click UI → Scope 13 + provenance identity/Sources/Tier 1
- Klim / our-story / open-source-10 / voice-and-tone URLs → provenance Narrative/Proof only. Sidecar Klim/license quotes 209/213/215. Portable Font 139 names Klim without the URL
- brand guide `updated October 2025` → provenance Proof `:67` 211
- independent docs chrome uninspected → provenance Proof `:74` 217
- `tokens.source` / `components_harvested` YAML keys → provenance only. `reconciled` is absent from the portable body
- YAML `ds.type: system` → Scope 13 + provenance identity
- YAML `use` strings → Type roles 159–163 and Public List Item 376; Public Primary 202 carries YAML control use
- `Type: listItem` → 370. `Type: button` / `Type: tab` absent. Select Menu / Cookie Dialog Type uninvented
- `Kind: interactive` → Primary 193, Secondary 218, Nav 242, Number Field 266, Select Trigger 291, Toggle 332. Select Menu and Cookie Dialog have no Kind field
- C4 omit kind/map → Capture 188; Select Menu 327; Cookie Dialog 365; List Item 380; Named gaps 446
- Public Primary omission sentence → 213. Secondary → 237. Number Field → 286. Select Trigger → 311. Nav L/E/S not-applicable → 257–259. Toggle → 347–349. Select Menu and Cookie Dialog have no map
- §14 public primary default / nav focus-hover-pressed / select expanded / option selected / toggle checked-unchecked / cookie open / loading-error-empty-disabled-success-skeleton unspecified → Capture record 174–184 (adjacent complete B2a on 174 and 186)
- YAML spacing numbers 4/6/8/10/12/16/24/32 → Spacing 97 and Layout 385 without a required px suffix on the YAML steps; body 20px kept at Spacing 99 and Layout 385
- YAML `1.25` / `1.50` / `1.43` → `1.25` Distinctive 38 + Type roles 154/159/160; `1.43` Distinctive 38 + Type roles 154/162; `1.50` Type roles 154/161/163 only (not Distinctive 38)
- B3 five-kind gate → Foundations Motion 125. Named gaps 455 lists those five kinds in inventory form; it is not the B3 full promotion-gate sentence
- Capture selectors → dual provenance Capture selectors + DESIGN 199/226/247/249/274/299/323/337/361/376; `data-omd-capture="4"` also 174/179/248/249
- Canonical §11 “direct minimalism” / “built for engineers and trusted by leaders” → dual Scope 19 + Content 405/407 (E2a). Proof disposition: provenance Narrative 90; sidecar `:67` 211 (brand-guide sentence, not a third portable dest). §10 wording sample *“raw, confident, exacting, technical, and direct”* → Content 406
- Proof lineage/counts/raw: `:5` 177, `:15` 179, `:21` 185, `:22` 187, `:23` 189, `:24` 191, `:25` 193, `:26` 195, `:27` 197, `:43` 199, `:55` 201, `:58` 203, `:61` 205, `:35` 209, `:67` 211, `:70` 213, `:72` 215, `:74` 217
- `box-shadow: none` → Elevation 119
- oklab secondary fill → DESIGN 220/228
- `17.5px` → Distinctive 38, Type roles 154/162
- `96px` / `60px` / `48px` → Distinctive 38, Type roles 154/158
- `0px 0px 6px 6px` → Distinctive 38, Shape 108/113/115, Select Menu 320/325
- `rgba(0,0,0,0.1) 0px 10px 15px -3px` / `rgba(0,0,0,0.1) 0px 4px 6px -4px` → Elevation 119 + Select Menu field-note 325
- `omd-apply` / `npx omd` / `[FILL IN]` / `storefront` / captured public-route imagery / complete locale profile / synthetic voice samples absent from portable body

`node test-v2/tools/migrate-reference.mjs --brand clickhouse --gate-only` → PASS, problems `[]`.
`node scripts/migrate-design-md-core.cjs --input docs/design-md-weight/migrated/clickhouse/DESIGN.md --check --require-portable-core --json` → exit 0, `portable_core: true`.
SHA-256 of portable `DESIGN.md` `60cb67aa2497bf9243ea21ad9ff25c567e208263ad709cbff03f228dfa6d1c57` (unchanged; DESIGN.md not edited). New F3 was not run. Not a catalog-adoption claim (E2c).

