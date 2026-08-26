# Channel Talk migration log

Source: `web/references/channeltalk/DESIGN.md`
Destination: `docs/design-md-weight/migrated/channeltalk/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/channeltalk/provenance.md`
Date: 2026-08-24
Worker: grok-4.6 T2
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v7
Portable Core: command outputs are recorded in the F2 block below. This is not a catalog-adoption claim (E2c).
카탈로그 채택 아님.

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (id, name, country, category, homepage, primary_color, logo) | 분리 → provenance; homepage 옮김 → Experience Scope; `primary_color` 옮김 → Scope token-note + Distinctive + Foundations Primary + Marketing primary action; logo slug 옮김 → Typography & Assets + provenance | Portable file has no frontmatter. Name kept as H1 `Channel Talk Design System`. Homepage `https://channel.io` is dual Scope 9/11 + provenance identity/surfaces (E2a). Catalog `primary_color` `#242428` is identity + portable Scope token-note 13 / atmosphere 15, Distinctive unmerged B2a 44 / bullet 46, Semantic unmerged-role 85 / Primary 87, Marketing primary Background 191 / field note 199, outline border 218/225, card field note 247 (hairline is not this outline), provenance Identity/Freshness/Claim ledger (E2a). Avoid 73–77 does not contain this hex. Content 321–323 does not contain this hex. Catalog logo type `github` / slug `channel-io` is dual: provenance identity + portable Typography & Assets 168 (E2a). Not a captured first-party mark. A first-party logo-file gap sentence was not generated. |
| YAML `omd`, `verified`, `verification_v2`, token claims, `tokens.source` / `extracted` / `note`, `components_harvested`, `ds.*` | mixed: `omd` / `verified` / `verification_v2` / `extracted` / `components_harvested` / `tokens.source` YAML keys 분리 → provenance; `tokens.note` 옮김 → Experience Scope + provenance; `reconciled` 값 분리 → provenance only; `ds.name` / `ds.type` / `ds.url` / `ds.description` 옮김 → Scope 17 + provenance (A1c); `ds.og_image` URL 분리 → provenance only | `tokens.source: reconciled` YAML key and `components_harvested: true` are provenance-only as keys (A1c). The `reconciled` extraction-class string is provenance Identity/Claim ledger only; portable Scope 13 restates the token note, not that string, and `reconciled` is absent from the portable body (E2). Line 133 is the adjacent complete B2a on evidence-class application, not a reconciled restatement. Token note is dual Scope 13 + provenance identity (E2a, B2/B2a). YAML `verified` / `verification_v2.checked` / `extracted` 2026-07-12 are provenance freshness. Footer Verified is provenance only. `verification_v2.schema: 2` is provenance Identity (A1c). `ds.type: system` is provenance + portable Scope 17 (A1c, E2a). Bezier URL dual Scope 17 + provenance. `og_image` URL is provenance only; portable Assets 170 names `og_image` without the URL. |
| YAML `tokens.colors` / `typography` / `spacing` / `rounded` / `shadow` / `components` | 옮김 → Foundations, Typography & Assets, Components & States; YAML `use` also Primary tasks | 검증된 값만 최소 필드 단위. YAML unitless lineHeight 1.41 / 1.56 / 1.59 비율 보존 (A1a) Type roles 155/159/161/162/164. YAML typography `use` four fields restored on Type roles 159/161/162/164 (A1). YAML spacing xs 4 / sm 6 / md 10 / lg 20 / xl 30는 숫자 보존, px 접미사 비발명 (Spacing 98, Layout 309). Body 30–45px와 10px card-internal gap는 Spacing 98/100 / Layout 309/311/316에 별도 유지. YAML `rounded` control 6 / utility 8 / card 35 / full 9999 보존되고 harvested `6px` / `8px` / `35px` / `9999px`와 비합침 (Shape 104–113; Distinctive 44; primary 193/199; outline 219/225; card 247; tab 259/265; docs icon 292). 검증된 primitive type은 컴포넌트별로 보존: button×3 (189, 214, 283) + card (239) + tab (255). `Kind: interactive`로 뭉개지 않음 (A1b). `#242428`와 `#000000`와 `#3a3530`, canvas `#ffffff`와 on-primary `#ffffff`, `#f7f6f3`와 canvas, Pretendard와 Inter는 비합침 (A4). Primary tasks dests from YAML `use` strings: 27–29 (primary 196, tab 262, docs icon 289). Outline use 222 and card use 245 remain on those components and are not extra primary tasks. |
| §1 Visual Theme & Atmosphere | 옮김 → Experience `scope` claim, distinctive traits + Assets | 제품/표면 범위. Product-origin (9) and five-URL evidence-domain assignment (11) name the catalog homepage and the five source-footer Tier 1 URLs and values-stay-attached-to-the-surface-that-established-them. Token-note register-split (13), atmosphere extra names including generous-photography (15), marketing-versus-documentation register (17), public-history (19) 문단 인접에 derived editorial implementation inference / not Channel Talk-authored or a separately published UI specification 한정 (B2/B2a). Distinctive unmerged-role extras have adjacent complete B2a immediately before the bullets (44). §1 generous photography is dual Scope atmosphere 15 + Assets 170 as captured/recorded marketing-surface imagery; ownership unclaimed (not first-party marketing imagery) (E2a). URLs는 provenance와 dual (E2a). |
| §1 / footer / §11 공식 URL | 분리 → provenance; 본문 Scope에도 | 서사·freshness 원장. 본문은 토큰 경계 한정을 유지. Five evidence-domain URLs remain named as the captured surfaces. Bezier URL dual Scope 17 + provenance. Evidence class is official rebrand writing, official product updates, and the public Bezier repository. |
| §2 Color Palette & Roles | 옮김 → Foundations semantic color | 8 YAML hex 전부. Unmerged-role extra characterizations have adjacent complete B2a at 85 (B2/B2a). Cobalt `#329BE7` is source-stated unpromoted (13/85/368), not a new negative domain (D1). Authenticated Inbox status colors remain unnamed (85, Named gaps 362). On-primary `#ffffff` is an unmerged job from canvas (85/88/94/192/199/225). |
| §3 Typography Rules | 옮김 → Typography & Assets | Font evidence-class B2a (133). Live marketing Pretendard 484 / live docs Inter 581 / official distributed none / declared-only NotoSansKR Poppins fallback unused-locale / captured-scope unnamed 137–141. Family font-use including declared-only-fonts-not-loaded-Channel-Talk-faces (151) / ratio-versus-size-local including card-heading-and-article-heading-as-body-table-only (155) 독해는 각 인접 완전 B2a (B2/B2a). `NotoSansJP` one-use / BildV5 omitted 143. 원본에 있는 declared-only 목록은 유지. 원본에 없는 type-spec 부정은 만들지 않음 (D1). YAML unitless ratios 1.41 / 1.56 / 1.59 보존 (A1a). |
| §4 Component Stylings | 옮김 → Components & States + Primary tasks | Marketing primary / outline / Documentation icon `Type: button` 189/214/283; Marketing information card `Type: card` 239; Marketing category tab `Type: tab` 255 (A1b). Source YAML has no capture selectors; none invented (provenance Capture selectors). Primary tasks from three YAML/§4 uses: 27–29. Marketing primary / outline / Documentation icon loading·error·success omitted (C2) 208/234/302. Tab L/E/S는 category-selection 역할로 not-applicable 273–275 (C2; `not captured` 사유 아님, C1). Named Focus 없음; focus-visible 행에 hex 없음 (B1, 179). Card C4 omit kind+map 249. Field notes have adjacent complete B2a on unmerged-field readings (199/225/247/265/292). Selected / pressed are additional named observed states, not Core rows (177/179/181/277/293/304). |
| §5 Layout Principles | 옮김 → Layout & Platforms + Foundations spacing/shape | 30–45px internal spacing, 35px editorial cards, 6–8px documentation controls, full-pill not transferred to uninspected product controls, marketing vs documentation density (Layout 309–316). Shape local-geometry limiter precedes the labeled list (106). Layout recorded-span extras 309 and captured-surface-not-cross-viewport 316는 각 절 인접 완전 B2a (B2/B2a). |
| §6 Depth & Elevation | 옮김 → Foundations elevation | YAML `tokens.shadow.flat` `none` 117. Current promoted surfaces are flat; marketing cards use background, border, radius, and photography; no reusable shadow token; documentation overlays and authenticated product elevation unnamed (119). Elevation limiter (119) (B2/B2a). |
| §7 Do's and Don'ts | mixed: Do 옮김 → Experience principles (capture-bound); Don't 옮김 → Experience avoid | Capture-bound grouping of §7 Do’s named rules has adjacent complete B2a (61). Avoid named Don’ts 인접 완전 B2a (71). Inter-documentation-scale-only-for-documentation-like-surfaces is the unique §9 Do kept at Principles 66. Cobalt-product-controls-inbox-states-inputs-or-dialogs is the unique §9 Don’t kept at Avoid 76. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms | Full-pill controls and rounded editorial cards retained while horizontal section padding and tab padding reduce on narrower layouts; private-product breakpoints and mobile-native behavior unnamed (316). 1440 or invented breakpoint widths were not in the source and are not added (D1, A1). |
| §9 Agent Prompt Guide | 삭제 | 도구별 명령·프롬프트. 슬롯 없는 위임 없음. Unique brand constraints already have Components/Foundations/Experience slots: Inter documentation scale only for documentation-like surfaces → Principles 66; no Cobalt product controls, inbox states, inputs, or dialogs unless a current product source is supplied → Avoid 76; white/cream canvas, black text, charcoal full-pill, Pretendard, 35px cards → Distinctive 46–48 / Foundations. `omd-apply` / `npx omd` absent. |
| §10 Voice & Tone | 옮김 → Content & Locales | Official-writing-characterization + derived voice extra names 인접 완전 B2a (321). Captured-locale / unobserved-locale-behavior-unnamed / no-synthetic-voice-samples 인접 완전 B2a (323) (B2/B2a, E1). |
| §11 Brand Narrative | 옮김 → Experience `scope`; 서사 원장 분리 → provenance | Official rebrand / product updates / Bezier complementary signal restated in portable Scope under adjacent complete B2a (9, 15, 17, 19) (A1, B2/B2a). Rebrand URL dual Scope 11 + provenance. Evidence class is official rebrand writing, official product updates, and the public Bezier repository. |
| §12 Principles | 옮김 → Experience principles | 네 항목 전체 editorial readings. 인접 본문에 derived editorial implementation inference / not Channel Talk-authored or a separately published UI specification (54). Capture-bound grouping (§7 Do’s) has adjacent complete B2a (61). Governance 일반 문구는 그 한정의 대체물이 아님 (B2/B2a, E1). |
| §13 Personas | mixed: 공개 자료 task contexts만 Audience; 가상 biography 없음·sidecar 재수록 없음 | 원본이 public product material의 세 task context이며 verified biographical persona가 아니라고 한다. Groups는 portable Audience 36–38. Names/ages/company sizes/locations/quantitative goals는 원본에도 이관본에도 provenance에도 없음 (D2). Audience no-individual-personas-promoted + names-ages-unspecified application have adjacent complete B2a (34, 40) (B2/B2a). Primary tasks 3건 dests are on the YAML/§4 source-rows (YAML `use` 196/262/289 → Primary tasks 27–29), under adjacent complete B2a as YAML-use-strings-not-from-§13 (25). The portable body does not call those tasks independently verified (E2c). |
| §14 States | 옮김 → Components & States capture record + per-component applicability | 본문 보존: Only the current marketing tab selected state and a compact documentation control's pressed state were safely observed. No canonical empty, loading, error, success, disabled, or authenticated Inbox state is promoted (A2) 177. Capture-record graph-not-adopted 177; Core-applicability-by-meaning / omitted-L-E-S-fields 179 (B2/B2a). 선언 컴포넌트는 §4.4를 닫되 미관측 시각값은 발명하지 않음. `not captured` / `not named`를 `not-applicable` 사유로 쓰지 않음 (C1). Primary/outline/docs-icon loading·error·success omitted (C2) 208/234/302. Tab L/E/S role-based not-applicable 273–275. focus-visible 행에 hex 없음 (B1, 179). graph 위임 없음. State coverage 완료 주장 없음 (C3, 179). |
| §15 Motion & Easing | 옮김 → Foundations motion | No reusable current duration or easing token; six tab expansions prove state change, not a universal animation specification; motion values remain absent; source-stated-absence B2a (123). No motion token is promoted. 무출처 커브 없음 — provenance omitted-curves records that absence (E2b). Foundations Motion은 B3 다섯 증거 종류(transition properties · animation name · duration · easing · reduced-motion behavior)를 컴포넌트별 computed 관측한 뒤에만 승격한다는 게이트를 전문 명시 (125). “공식 출처로 검증될 때까지” 약화 문구는 쓰지 않음 (B3, E2c). Named gaps 369 lists the five kinds in inventory form; the B3 full promotion-gate sentence is Foundations Motion 125 only. |
| Footer **Verified** / Tier 1 / Tier 2 / Conflicts | mixed: freshness 분리 → provenance; live URLs는 portable에도 | Dual (E2a): five evidence-domain URLs는 Scope 11 + provenance Surfaces/Sources/Tier 1. Homepage `https://channel.io`는 Scope 9/11 + provenance. Footer verified 2026-07-12는 provenance freshness only. Conflicts unresolved: none. Portable body does not re-host Tier 2 failure strings (E1); they are provenance Tier 2. |

### F1 / F2 (v7 mandatory final passes)

Worker F1/F2 dest maps are this session’s greps. Worker completeness is not a current-class claim (E2c). This is not a catalog-adoption claim and is not a claim that no unqualified sentence remains (E2c).

### F1 B2a scan (full DESIGN.md reread)

After a full reread of DESIGN.md, adjacent complete B2a sites match `provenance.md` Derived inventory. Governance Authority / priority / unknowns / changes 331/337–340/346/352 are the controlled Core copy; they are not reconstruction readings and are not wrapped. Named gaps 355–369 are unnamed-value inventory, not extra brand doctrine. Semantic bullets 87–94 are covered by unmerged-role limiter 85. Type-role rows 159–164 are covered by ratio limiter 155. Principles 56–59 are covered by the four-item limiter 54. Distinctive bullets 46–50 are covered by unmerged limiter 44. Capture-record source contract 177 is source-stated; applicability paragraph 179 has adjacent complete B2a. L/E/S omission sentences 208/234/302 are covered by capture-record omitted-L-E-S-fields 179. Documentation icon pressed-not-Core-row B2a is 293. This is not a claim that no unqualified sentence remains (E2c).

### F2 grep (this session; value + field/role context)

F2 grep after body/ledger writes (three files: DESIGN.md, provenance.md, migration-log.md):

- Catalog `primary_color` `#242428` → DESIGN 13/15/44/46/85/87/191/199/218/225/247 + provenance Identity/Freshness/Claim ledger. Avoid 73–77 does not contain this hex. Content 321–323 does not contain this hex. Line 247 names `#242428` as the outline border that this card’s hairline is not (E2a dest).
- Cobalt `#329BE7` → DESIGN 13/85/368 + provenance source-stated unpromoted
- Google/GitHub logo slug `channel-io` → Assets 168 + provenance identity (Bezier URL 17 also contains the slug as part of `https://github.com/channel-io/bezier-react`)
- Homepage `https://channel.io` → Scope 9/11 + provenance identity
- KR `https://channel.io/kr` → Scope 11 + provenance Surfaces/Sources/Tier 1
- US `https://channel.io/us` → Scope 11 + provenance
- Updates URL → Scope 11 + provenance
- Help URL → Scope 11 + provenance
- Rebrand URL → Scope 11 + provenance. Scope 15/19 restates official rebrand narrative without this URL
- Bezier URL `https://github.com/channel-io/bezier-react` → Scope 17 + provenance identity/Sources/Tier 1
- Bezier `og_image` URL → provenance only. Portable Assets 170 names `og_image` without the URL. §1 generous photography → dual Scope 15 + Assets 170 as captured/recorded marketing-surface imagery; ownership unclaimed (not first-party marketing imagery).
- `tokens.source` / `components_harvested` YAML keys → provenance only. `reconciled` is absent from the portable body; Scope 13 restates the token note, not the extraction-class string. Line 133 is B2a evidence-class, not a reconciled restatement
- YAML `use` strings → Type roles 159/161/162/164 and component Use 196/222/245/262/289; Primary tasks 27–29 carry primary-signup / category-tab / docs-icon uses
- `Type: button` ×3 → 189/214/283. `Type: card` → 239. `Type: tab` → 255
- Marketing primary omission sentence → 208. Outline omission → 234. Docs icon omission → 302. Tab L/E/S not-applicable → 273–275
- `omd-apply` / `npx omd` / `[FILL IN]` absent from portable body
- §14 selected/pressed / no canonical empty/loading/error/success/disabled/authenticated Inbox → Capture record 177 (adjacent complete B2a on 177 and 179)
- YAML spacing numbers 4/6/10/20/30 → Spacing 98 and Layout 309 without a required px suffix on the YAML steps; body 30–45px kept at Spacing 98/100 and Layout 309/311/316
- YAML `full` 9999 / harvested `9999px` → Distinctive 44, Shape 104/111/113, primary 193/199, outline 219/225, card 247, tab 259/265, docs icon 292
- B3 five-kind gate → Foundations Motion 125 (`transition properties, animation name, duration, easing, and reduced-motion behavior` + per component + “Official documentation of a single curve or duration is not that gate”). Named gaps 369 lists those five kinds in inventory form; it is not the B3 full promotion-gate sentence
- Cubic-bezier values absent from DESIGN.md and from the source DESIGN.md. provenance omitted-curves records that absence
- YAML unitless lineHeight 1.41 / 1.56 / 1.59 → Type roles 155/159/161/162/164
- Capture selectors → absent from source YAML; provenance records that absence
- Persona names/ages/company sizes/locations absent from DESIGN.md and provenance. Task-context groups only at Audience 36–38
- `rgba(0,0,0,0.85)` → Documentation icon action 286/292
- 45px → Spacing 98/100 + Layout 309/311/316
- `ds.type: system` → Scope 17 + provenance Identity

Worker completeness is not a current-class claim (E2c). Worker-session DESIGN SHA-256 `2f201346e63bb87c587cc896c49db7b0e6ce6d6b2cb8ea2fcde7d084f1664f09` is **[SUPERSEDED dest 2026-08-24 F3 — pre-F3 body]**. Post-F3 SHA and gate: see Revision 2026-08-24 (F3 B2a·E2 audit). Not a catalog-adoption claim (E2c).

## Revision 2026-08-24 (F3 B2a·E2 audit)

Auditor: grok-4.6 (fresh session, not the T2 worker). Rulebook v7 B2/B2a/E1/E2/E2a–c only. Token values, component tables, state applicability, and section structure were not changed.

| Item | Correction |
|---|---|
| 1. B2a | Adjacent complete B2a expanded so under-named third-class readings are named at Scope 15/17/19, Distinctive 44, Semantic 85, Family 151, Type roles 155, Capture 177, Tab field note 265, Docs icon field note 292, Layout 309/316, Content 323. |
| 2. Derived inventory | provenance derived inventory restated to those actual extra names. Reconstruction-boundary exemption not used. |
| 3. `reconciled` | Provenance-only. Portable Scope 13 restates the token note, not the extraction-class string. `reconciled` is absent from DESIGN.md. |
| 4. `#242428` | Destinations include card field note 247 (hairline is not this outline). Avoid 73–77 and Content 321–323 do not contain the hex. |
| 5. YAML `9999` | Dual dests Distinctive 44 / Shape 104–113 / primary 193/199 / outline 219/225 / card 247 / tab 259/265 / docs icon 292. Body 30–45px dests include Layout 316. |
| 6. §2 log | “careers-style” withdrawn; Channel Talk has no careers surface. On-primary `#ffffff` dests 85/88/94/192/199/225. |
| 7. F1/F2/E2c | Worker F1 under-naming and `reconciled` dual-to-Scope overclaim superseded. No “no unqualified sentence remains” claim. |
| 8. Portable Core | `node test-v2/tools/migrate-reference.mjs --brand channeltalk --gate-only` → PASS, problems []. `node scripts/migrate-design-md-core.cjs --input docs/design-md-weight/migrated/channeltalk/DESIGN.md --check --require-portable-core --json` → exit 0 / `portable_core: true`, SHA-256 `8b903d73774fa1607ad5196dc63195856038ed6da2fdb338a89880db3eb9c931`. Command outputs, not catalog adoption (E2c). |

### F1 / F2 (v7; this F3 audit)

F1: current adjacent-complete inventory matches provenance derived inventory after this scan (Scope 15 official-rebrand-writing-as-narrative-context-not-interface-tokens; Scope 17 Bezier-color-becomes-current-marketing-token-only-when-inspected-surface-confirms-it; Scope 19 reconstruction-does-not-use-Bezier-repository-to-fabricate-current-private-app-values; Distinctive 44 Bezier-as-product-system-context-not-substituted; Semantic 85 authenticated-Inbox-status-colors-unnamed; Family 151 do-not-replace-Pretendard / do-not-present-Inter-as-Pretendard; Type roles 155 yaml-has-no-lineHeight-none-invented; Capture 177 because-inspectable-evidence-did-not-establish; Tab 265 selected-tab-selected-as-additional-named-observed-state-not-Core-row; Docs icon 292 yaml-has-no-font-field-none-invented; Layout 309 do-not-transfer-marketing-full-pill-geometry; Layout 316 should-not-be-inferred-from-the-marketing-site; Content 323 no-synthetic-voice-samples; plus the worker-listed sites that were already complete). Left without B2a: verified hex/geometry/YAML use strings, per-control C2 omission sentences, C4 omit-kind sentences, B1/B3 Core policy, Governance boilerplate, Named gaps inventory.

F2 (this revision; value + field/role context):

- `#242428` → DESIGN 13/15/44/46/85/87/191/199/218/225/247 + provenance Identity/Freshness/Claim ledger. Avoid 73–77 does not contain this hex. Content 321–323 does not.
- `reconciled` → provenance Identity/Claim ledger only. Absent from DESIGN.md.
- YAML `full` 9999 → Distinctive 44, Shape 104/111/113, primary 193/199, outline 219/225, card 247, tab 259/265, docs icon 292.
- 30–45px → Spacing 98/100 + Layout 309/311/316.
- SHA-256 `8b903d73774fa1607ad5196dc63195856038ed6da2fdb338a89880db3eb9c931`; `--gate-only` PASS; `portable_core: true`.

This log does not claim F2 completeness beyond those greps, and does not re-assert worker F1/F2 as closed (E2c).

## Revision 2026-08-24 (wave14 sol resubmit)

Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v7. Source remainder: `docs/reviews/t2-1-wave14-2026-08-24-sol-full.md` channeltalk conditions 1–3. New F3 not required. E2c: this revision does not re-assert F1/F2/F3 closed. Not a catalog-adoption claim.

1. Assets 170: `first-party marketing imagery` replaced with captured/recorded marketing-surface imagery; ownership unclaimed.
2. migration-log §1 photography is dual Scope 15 + Assets 170. provenance derived inventory uses the actual ownership phrase.
3. audit/F2 current claims and SHA synchronized. `--gate-only` and portable Core re-run.

Current DESIGN SHA-256 `a9e42f8dc69f0e98c60b81da2753a7918073a04e6626c78f9c7a03e0fbdcb1bf`.

