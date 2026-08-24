# Barogo migration log

Source: `web/references/barogo/DESIGN.md`
Destination: `docs/design-md-weight/migrated/barogo/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/barogo/provenance.md`
Date: 2026-08-24
Auditor: grok-4.6 (fresh F3 session, not the T2 worker)
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v7
Gate / Core: see F2 after this scan. Worker omitted this file; this log is the F3 grep ledger (E2). No worker SHA or worker F1/F2 compliance is asserted (E2c).
F3: executed in a fresh auditor session. 카탈로그 채택 아님.

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (id, name, country, category, homepage, primary_color, logo) | 분리 → provenance; `primary_color` 옮김 → Scope / Distinctive / Foundations / Components; homepage 옮김 → Experience `scope`; logo 경계 옮김 → Typography & Assets | Portable file has no frontmatter. Name kept as H1 `Barogo Design System` (1). Catalog homepage exact `https://www.barogo.com/` (not the aboutUs path) is provenance identity 14 + portable Scope 9 / named-domain 11 (E2a). aboutUs `https://www.barogo.com/aboutUs` is portable Scope 11 + provenance Surfaces 50 / Sources 57 / Tier 1 62 (E2a). Substring hits of the homepage host on aboutUs rows are not homepage destinations. Catalog `primary_color` `#fa5014` is identity 15/22/28/43/61/84/123 + portable Scope token-note 13 / atmosphere 15 + Distinctive 42 / unmerged 51 + Principles item 2 58 + capture-bound 65 + Semantic unmerged-role 93 / Foundations Barogo Orange 95 + Elevation philosophy 133 + Capture-record Empty 210 + Primary CTA Background 234 / field note 244 + Outline Text/Border 262–263 / field note 271 + Feature Card Observed additional fills 294 / field note 296 (E2a). Avoid names “orange” in running prose (78, 85) and `#2d3ce6` in the electric-blue Don’t (84); the `#fa5014` hex is not in Avoid. Catalog favicon URL `https://www.google.com/s2/favicons?domain=barogo.com&sz=128` is provenance identity 16/24 only. Portable Assets 197 is a URL-free Google-favicon identity-boundary sentence under adjacent complete B2a, not the URL (E2a). Named gaps has no first-party-mark sentence. |
| YAML `display_name_kr` | mixed: 분리 → provenance (YAML key); 값 옮김 → Experience Scope | `바로고` is dual: provenance identity (YAML key, 11/30) + portable Scope running prose `Barogo (바로고)` (9). H1 `Barogo Design System` is not the YAML key. Substring `바로고` inside live strings such as `"숫자로 보는 바로고"` is not the YAML-key destination. `tokens.source: live-extract` and `components_harvested: true` are provenance-only 18/20/30/80/119 (A1c); they are not in portable DESIGN.md. |
| YAML `omd`, `verified`, `added`, token claims, `tokens.source` / `extracted` / `note`, `components_harvested` | mixed: `omd` / `verified` / `added` / `extracted` / `components_harvested` / `tokens.source` 분리 → provenance; `tokens.note` 옮김 → Experience Scope + provenance | 출처 원장·freshness·Proof. Token note is dual provenance 22 + Scope 13 (E2a); the register-split assignment has adjacent complete B2a on Scope 13. YAML `verified` / `added` / `extracted` 2026-07-02 are provenance freshness 36–41. Footer `(omd:add-reference CREATE)` is provenance freshness 41/136 only; it is not in portable DESIGN.md. |
| YAML `tokens.colors` / `typography` / `spacing` / `rounded` / `shadow` / `components` | 옮김 → Foundations, Typography & Assets, Components & States | 검증된 값만 최소 필드 단위. YAML unitless `lineHeight` `1.33` / `1.43` / `1.0`는 Type roles 179/185/186/188/192 비율로 보존하고 표의 54px / 42px / 16px와 합치지 않음 (A1a). YAML typography `use` fields restored on Type roles (A1, 184–193). 검증된 primitive type은 컴포넌트별로 보존: Primary CTA / Outline `Type: button` 232/259; Feature Card / Stat Card `Type: card` 285/303; Top Nav `Type: tab` 344; Footer Link `Type: listItem` 379. `Kind: interactive`로 뭉개지 않음 (A1b, 231/258/343/378). Badges have no YAML type and none was invented (318). Feature Card / Stat Card / Badges keep Type where given; Kind+map omitted (C4, 226/298/314/329). `#fa5014`와 `#2d3ce6`를 합치지 않음 (A4). Ink `#000000` / Ink Soft `#111111` / Dark `#1a1a1a` 비합침 (A4, 93). Canvas `#ffffff` jobs share a hex and are not a second canvas token (93). Surface `#f6f6f6` / Surface Alt `#f9f9f9` 비합침 (93). YAML `rounded.sm` 3 / measured `3.008px` / `9999px` 비합침 (117). YAML `shadow.cta` / `shadow.card` trailing `0px` vs body shadows without it stay unmerged (131). |
| §1 Visual Theme & Atmosphere | 옮김 → Experience `scope` claim, distinctive traits | 제품/표면 범위. Product identity / catalog homepage (9) remain unqualified as class 1/2. Adjacent complete B2a on: two-URL evidence-domain (11); token-note register-split (13); visual-character / operator-plainness / high-energy-plainness / matter-of-factness / eye-trained-to-orange-as-act-now extra names (15); Korean-utilitarian / almost-no-ornament / size-and-weight extra names (17); near-flat / sharp-cornered / functional-and-fast / structure-by-tint-hairline-footer extra names (19). Distinctive hex/geometry facts 42–49 remain unqualified as observed-technical; extra unmerged-role has adjacent complete B2a (51). |
| §1 / §11 공식 히스토리 | 분리 → provenance Narrative; 고유 서사 옮김 → Experience `scope` | Public-history / founding-year-from-ghost-numeral / scale-as-public-fact / structural-gap / shared-rails / software-coordination / live-surface labels as site-visible names adjacent complete B2a (21). live-surface-labels-not-captured-product-UI is not current. Refusal / embrace / operator-aesthetic adjacent complete B2a (23). Mission line verbatim is Scope 21 source-stated. Dual Scope + provenance Narrative 73 (E2a). |
| §2 Color Palette & Roles | 옮김 → Foundations semantic color + Avoid | `#fa5014` `#000000` `#111111` `#666666` `#999999` `#ffffff` `#f6f6f6` `#f9f9f9` `#dcdcdc` `#1a1a1a` `#2d3ce6`. Unmerged-role extra characterizations adjacent complete B2a (93). Avoid named Don’ts adjacent complete B2a (76). Avoid is not an `#fa5014` hex destination; `#2d3ce6` is Avoid 84. |
| §3 Typography Rules | 옮김 → Typography & Assets + Named gaps | Live computed Pretendard; Termina display accent. YAML `1.33` / `1.43` / `1.0` + size-local px. Font evidence-class application including Termina-as-numeral-ornament-only / Pretendard-as-document-default adjacent complete B2a (163). no-additional-family-promoted is not current. Family font-use boundary (170). Type-rule one-family size-and-weight / bold-display-light-body / Termina-as-numeral / high-contrast-black-text / not-the-softened-navy-common-to-fintech-peers (181). Type-role ratio-versus-size-local (179). YAML `lineHeight` gaps on Stat Numeral / Nav / Button / Button Small / Caption are Named gaps 499. Pretendard ×434: Scope 17 + Font evidence 167 + Family 174 + provenance Tier 1 (E2a). |
| §4 Component Stylings | 옮김 → Components & States + Named gaps + Primary tasks | Primary CTA, Outline / Secondary, Feature Card, Stat Card, Badges, Top Nav, Footer Link. YAML 기하와 본문 기하를 같은 슬롯에 유지. Independently verified Primary tasks 31–33 come from live homepage/aboutUs strings under adjacent complete B2a (29), not from §13. Capture-record graph-not-adopted / philosophy-layer adjacent complete B2a (206). Table characterizations extra names adjacent complete B2a (220). Component-state gaps also Named gaps 495–499. Source does not record `data-omd-capture` selectors; none invented (provenance 97). |
| §4 Feature Card / Stat Card / Badges | 옮김 → Components & States | `Type: card` 285/303. Badges: YAML `tokens.components` does not record this control; Type is not invented (318). Kind+map omitted (C4, 226/298/314/329). Field-note unmerged-role adjacent complete B2a (296/312/327). Feature Card additional fills `#fa5014` / `#000000` / `#2d3ce6` / `#dcdcdc` are Observed 294 + field note 296, not page-wide tokens. |
| §4 Primary CTA / Outline / Footer Link / Top Nav | 옮김 → Components & States | `Type: button` 232/259; `Type: tab` 344; `Type: listItem` 379. Primary CTA / Outline / Footer Link loading/error/success omitted (C2, 253/280/395 + Named gaps 497). Top Nav loading/error/success `not-applicable` by destination-selection role (C2, 360–362). Field-note unmerged-role adjacent complete B2a (244/271/386). Header parent fill 331–338; Footer parent fill 366–373. Top Nav captured-variant field note 352 + additional observed 364. Generic Focus is not present; `focus-visible` rows carry no hex (B1, 224). |
| §5 Layout Principles | 옮김 → Layout & Platforms + Foundations spacing/shape | YAML spacing xs 8 / sm 12 / md 16 / base 20 / lg 30 / xl 40 / xxl 50 and body ~8px rhythm (109 + Layout 400). Spacing recorded-scale / unitless-YAML-not-required-px-suffix / padding-stays-with-components adjacent complete B2a (111). Shape local-geometry limiter precedes the labeled list (117). Adjacent complete B2a on Layout operational-clarity / flat-segmentation / sharp-functional-geometry extra names (402; singular inference) and recorded-span / surface-measurements-not-universal-tokens / touch-target-as-purpose-reading / collapsing-image-behavior / image-behavior-consistent-with-near-flat (428). Primary `72px` / Outline `64px` are those controls + Layout 426/428, not Foundations Spacing. |
| §6 Depth & Elevation | 옮김 → Foundations elevation | Flat / Tint / Hairline / Card / CTA table preserved (123–129). YAML trailing-`0px` vs body no-trailing-`0px` unmerge + table Use adjacent complete B2a (131). near-flat / shadow-philosophy extra names adjacent complete B2a (133). `box-shadow: none` is Elevation 133 observed-technical inside that paragraph. |
| §7 Do's | 옮김 → Experience principles (capture-bound application) | 브랜드 적용 규칙. Adjacent complete B2a names the grouping as a capture-bound application of source §7 Do’s and harvested geometry (63). Governance 통제 문구에 넣지 않음. |
| §7 Don'ts | 옮김 → Experience avoid | 브랜드 금지. Adjacent complete B2a on the Avoid list-head (76) names orange-dilutes-the-single-action-signal / headlines-always-Pretendard-700 / navy-or-soft-grey-not-primary-text / 3px-not-pill / tint-and-hairlines-not-heavy-shadows / Termina-not-hangul-body / electric-blue-not-general-UI / no-second-saturated-accent-in-product-chrome. `#2d3ce6` is Avoid 84. `#fa5014` is not in Avoid. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms | Breakpoint table Mobile `<640px` / Tablet `640–1024px` / Desktop `1024–1440px` (416–420). Recorded span / collapsing / image-behavior / touch-purpose B2a (428). 원본에 없는 최소폭 값을 발명하지 않음. 72px/64px/10px/42px/54px는 Layout + those controls. |
| §9 Agent Prompt Guide | 삭제; §9 수치는 이미 Components/Foundations에 있음 | 도구별 명령·프롬프트 삭제. 슬롯 없는 위임 없음. Observed values already have Components/Foundations slots (A3). §9-only unique renderable fields: Hero primary+outline pair; Feature Card title Pretendard 700 / `#000000` + body 16px / 400 / `#666666`. **[SUPERSEDED 2026-08-24 wave10 sol resubmit — prior close said no §9-only unique field. See Revision wave10 sol resubmit.]** |
| §10 Voice & Tone | mixed: 관측 live string 옮김 → Content + provenance; derived 표/독해 옮김 → Content (인접 B2a) | Observed (2026-07-02) dual Content 437–441 + provenance 76; "바로 문의하기" also Primary tasks 31 / Primary CTA 228/241; "숫자로 보는 바로고" also Primary tasks 33 / Stat Card 300/309 / Principles 59; "무엇이든 어디서나" also Scope atmosphere 15 (E2a). Citation-character of parentheticals adjacent complete B2a (435). Treating §14 empty/loading strings as state-contract not extra Observed samples (443). Derived voice + tone table + forbidden register extra names adjacent complete B2a (447) and are not labeled Observed (B2/B2a, E1). 원본에 없는 도메인 coverage 문구 신설 없음 (D1). |
| §11 Brand Narrative | 옮김 → Experience `scope` + provenance Narrative | Unique public-history propositions in portable Scope 21. Dual Scope + provenance Narrative 73 (E2a). Founding / scale-as-public-fact limiter under B2a (21). Refusal / embrace under B2a (23). |
| §12 Principles | 옮김 → Experience principles | Numbered stems 1–5 including each *UI implication* are derived editorial implementation inference / not Barogo-authored or a separately published UI specification (55). Capture-bound application is derived (63). Governance 일반 문구는 그 한정의 대체물이 아님 (B2/B2a, E1, E2c). |
| §13 Personas | mixed: 가상 biography 삭제·sidecar 재수록 없음; Audience는 배제 경계만 | 원본이 fictional archetypes라고 명시. Fictional given names, ages, cities, occupations, and biographies are omitted from portable Audience and from this sidecar (D2). **[SUPERSEDED 2026-08-24 wave10 sol resubmit — prior row re-hosted the source fictional given names. See Revision wave10 sol resubmit.]** Audience no-individual-personas-promoted / exclusion / observable-work-follows-three-tasks adjacent complete B2a (38). Independently verified Primary tasks 3건은 §13이 아니라 live homepage/aboutUs strings (`count=3`, 29–33). No `[FILL IN]` in source; none emitted (provenance 115). |
| §14 States | 옮김 → Components & States capture record + per-component applicability + Named gaps | 본문 보존: Empty/Loading/Error/Success/Skeleton/Disabled 표 209–218 (A2). Graph-not-adopted / philosophy-layer B2a (206). Characterizations extra names B2a (220). 선언 컴포넌트는 §4.4를 역할로 닫되 미관측 시각값은 발명하지 않음. `not captured`를 `not-applicable` 사유로 쓰지 않음 (C1, 222). Primary CTA / Outline / Footer Link: loading/error/success omitted (C2, 253/280/395 + Named gaps 497). Top Nav: loading/error/success `not-applicable` by destination-selection role (C2, 360–362). Top Nav captured-variant field note 352 + additional observed 364. Footer Link field-note 386. Feature Card / Stat Card / Badges: Kind+map omitted (C4, 226/298/314/329 + Named gaps 498). generic Focus 없음; focus-visible rows carry no hex (B1, 224). graph 위임 없음. This is not a complete state-coverage claim (C3, 222). **[SUPERSEDED dest 2026-08-24 wave10 final resubmit — prior 211–220/208/222/224/255/282/379/352–354/228/481/482/226. See Revision wave10 final resubmit.]** |
| §15 Motion & Easing | 옮김 → Foundations motion + Named gaps; 무출처 커브 분리 → provenance omission ledger | Duration `120ms` / `220ms` / `320ms` and easing names preserved as source-stated (philosophy layer). Exact cubic-bezier omitted: `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)`; `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` (matches spec-template `ease-exit`); `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)` — provenance omission ledger 101–107 only (E2b). Portable Motion tables say “omitted (unattributed cubic-bezier…)” without the curve tuples (149–151). `prefers-reduced-motion: reduce` preserved (153). Philosophy-layer / source-stated / spec-template-ease-exit-match / nintendo-workday-barogo set B2a (137). functional-and-steady / matching-fast-flat-logistics-operator / signature carousel-press / no-bounce-reliability-not-playfulness / reduced-motion-fully-functional B2a (153). omitted-unattributed-curves-not-promoted B2a (155). Foundations Motion 155은 B3 다섯 증거 종류(transition properties · animation name · duration · easing · reduced-motion behavior)를 컴포넌트별 computed 관측한 뒤에만 승격한다는 게이트를 전문 명시. “공식 출처로 검증될 때까지” 약화 문구 없음 (B3, E2c). Named gaps 479 lists omitted curve names; 484 lists “all five kinds” without enumerating the five evidence kinds; the B3 full text is Foundations 155 only. |
| Footer **Verified** / Tier 1 / Tier 2 / Conflicts / HTML comment | mixed: freshness 분리 → provenance; live-inspect URL은 portable에도 | Dual (E2a): homepage/aboutUs URLs는 Scope + provenance as split above. Footer verified 2026-07-02 `(omd:add-reference CREATE)`는 provenance freshness 41/136 only. Conflicts unresolved: none (provenance 43). HTML-comment radius frequency `20px×45` / `3.008px×6` is provenance Tier 1 61/137 only; measured `3.008px` is also portable Scope 19 + Distinctive 48/51 + Shape 117/119 + Primary CTA field note 246 (E2a). getdesign.md/barogo and styles.refero.design are provenance Tier 2 only (68–69). |

### F1 / F2 (v7; this F3 audit)

Worker omitted this file and left no F1/F2 ledger. Reconstruction-boundary exemption not used. No “no unqualified sentence remains” claim (E2c).

- **F1 B2a scan (after this audit):** adjacent complete B2a (`derived editorial implementation inference` / `not Barogo-authored or a separately published UI specification`) on: Scope two-URL evidence-domain (11); Scope token-note register-split (13); Scope visual-character extra names (15); Scope Korean-utilitarian extra names (17); Scope near-flat extra names (19); Scope public-history / scale-as-public-fact / live-surface-labels (21); Scope refusal / embrace (23); Primary tasks independently-verified / not-from-§13 (29); Audience no-individual-personas-promoted / exclusion / observable-work (38); Distinctive unmerged-role extra names (51); numbered Principles *UI implication* notes (55); capture-bound grouping of §7 Do’s (63); Avoid named Don’ts (76); Semantic unmerged-role extra characterizations (93); Spacing recorded-scale / unitless-YAML / padding-stays (111); Shape local-geometry limiter-precedes-list (117); Elevation table Use / trailing-0px (131); Elevation near-flat extra names (133); Motion philosophy-layer / spec-template / nintendo-workday-barogo set (137); Motion-rule extra names (153); Motion omitted-unattributed-curves-not-promoted (155); Font evidence-class extra names (163); Family font-use extra names (170); Type-role ratio-versus-size-local (179); Type-rule extra names including not-the-softened-navy-common-to-fintech-peers (181); Assets Google-favicon identity-only (197); Assets imagery-not-invented-decoration (199); Capture-record graph-not-adopted / philosophy-layer (206); Capture-record table characterizations extra names (220); Primary CTA field-note (244); Outline field-note (271); Feature Card field-note (296); Stat Card field-note (312); Badges field-note (327); Top Nav field-note (352); Top Nav additional captured-variant (364); Footer Link field-note (386); Layout operational-clarity extra names, singular inference (402); Layout recorded-span / image-behavior-consistent-with-near-flat (428); Content Observed citation-character (435); Content empty/loading as state-contract (443); Content derived voice extra names (447). **[SUPERSEDED dest 2026-08-24 wave10 final resubmit — prior Family 172 / Type-role 181 / Type-rule 183 / Assets 199/201 / Capture 208/222 / CTA 246 / Outline 273 / Top Nav 344/356 / Footer 370 / Layout 386/412 / Content 419/427/431 / B1 226. See Revision wave10 final resubmit.]** Left unqualified as first-party or observed-technical: Barogo product-surface identity and catalog homepage `https://www.barogo.com/`; live-inspect URLs; YAML token measurements and primitive types button / card / tab / listItem; `box-shadow: none`; duration/easing table values; Type role rows; B1 generic-Focus notes (224); B3 five-kind gate (second half of 155); Core C1/C2/C3 capture-record policy and per-control C2 omission / C4 kind-omission notes; Governance controlled copy; Named gaps inventory. Provenance derived inventory lists the same adjacent-complete B2a sites. No reconstruction-boundary exemption.

- **F2 E2 grep (value + field/role context):** **[SUPERSEDED 2026-08-24 wave10 sol resubmit — F2 completeness reservation withdrawn. See Revision wave10 sol resubmit.]**

F2 (F3 grep; value + field/role context):

- `#fa5014` → Scope token-note 13 / atmosphere 15, Distinctive 42 / unmerged 51, Principles item 2 58, capture-bound 65, Semantic unmerged-role 93 / Foundations Barogo Orange 95, Elevation philosophy 133, Capture-record Empty 210, Primary CTA Background 234 / field note 244, Outline Text/Border 262–263 / field note 271, Feature Card Observed additional fills 294 / field note 296. Avoid is not a hex destination. **[SUPERSEDED dest map 2026-08-24 wave10 ledger sync.]**
- `#2d3ce6` → Scope token-note 13 / near-flat 19, Distinctive 46 / unmerged 51, capture-bound 72, Avoid 84, Semantic 93 / Foundations Brand-Identity Blue 105, Feature Card Observed 294 / field note 296.
- Google favicon URL → provenance identity 16/24 only. Portable Assets 197 is URL-free.
- Exact homepage `https://www.barogo.com/` (not aboutUs path) → Scope 9 / named-domain 11 + provenance identity 14 / Surfaces 49 / Sources 56 / Tier 1 61.
- aboutUs `https://www.barogo.com/aboutUs` → Scope 11 + provenance Surfaces 50 / Sources 57 / Tier 1 62.
- `tokens.source: live-extract` / `components_harvested: true` → provenance only 18/20/30/80/119.
- YAML unitless `1.33` / `1.43` / `1.0` → Type roles 179 + table 185/186/188/192.
- Primary `72px` → Primary CTA 238/244 + Outline field note 271 + Layout 426/428, not Foundations Spacing.
- Outline `64px` → Outline 266/271 + Layout 426/428.
- Measured `3.008px` → Scope 19 + Distinctive 48/51 + Shape 117/119 + Primary CTA field note 244. Frequency `20px×45` / `3.008px×6` is provenance Tier 1 only.
- Exact cubic-bezier tuples → provenance omission 103–105 only. Portable 149–151 / 155 / Named gaps 495 name omission without the tuples.
- B3 전문 → Foundations Motion 155. Named gaps 500 is shortened.
- `(omd:add-reference CREATE)` → provenance 41/136 only.

Post-F3 DESIGN SHA-256 `c5e7151ab57e537d54d5bf5f8eb8bcfa204a043090baa09d1d18cfb14516489e`. `--gate-only` PASS, problems []. `migrate-design-md-core.cjs --check --require-portable-core` status pass / `portable_core: true`. Gate/Core command outputs recorded with the audit; they are not a catalog-adoption claim (E2c).

## Revision 2026-08-24 (wave10 sol resubmit)

Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v7. Source FAIL: `docs/reviews/t2-1-wave10-2026-08-24-sol-full.md` §5. New F3 not required.

| Item | Correction |
|---|---|
| 1. §9-only tuples | Layout 406 restores white Hero 42px/700/#000 H1 + primary CTA + outline pair. Feature Card 292–293 restores title Pretendard 700 / `#000000` and body 16px / 400 / `#666666`. |
| 2. Parent fills | `#ffffff` header fill is Header / Navigation band Background (335), not Top Nav item. `#1a1a1a` footer fill is Footer band Background (370), not Footer Link. |
| 3. §11 relations | Scope 21 restores structural gap, shared logistics rails, and software coordination, under the public-history adjacent complete B2a. |
| 4. Observed vs derived | `바로레터 구독하기` removed from harvested Observed (441). Derived voice table 455 keeps it. |
| 5. D1 negatives | Store Manager / rider-app / hub-franchise “not captured” product-domain absence deleted. Font official-spec / additional-family-promoted rows deleted. Live Pretendard ×434 and Termina 150px kept. |
| 6. D2 | Fictional given-name literals are 0 hits in DESIGN.md, provenance.md, and migration-log.md. Generic deletion disposition only. |
| 7. F2 | Source-row dests grepped below. Prior completeness reservation withdrawn. |

### F1 / F2 (v7; this resubmit)

F1: §11 structural-gap / shared-rails / software-coordination named in Scope 21 limiter. live-surface labels as site-visible names (21), not live-surface-labels-not-captured-product-UI. Font Termina-as-numeral-ornament-only / Pretendard-as-document-default (163), not no-additional-family-promoted. Header-fill-not-nav-item (338). Footer-fill-not-link (373). Feature Card §9-only title/body (296).

F2 (this revision; value + field/role context):

- Feature Card Title/Body tuple → 292–293 / 296
- Hero primary+outline pair → Layout 406
- Header band `Background: #ffffff` → 335 (parent). Feature Card / Stat Card fills 287/305 remain card surfaces.
- Footer band `Background: #1a1a1a` → 370 (parent)
- shared logistics rails / structural gap / software coordination → Scope 21
- `바로레터 구독하기` Observed harvested list → absent; derived table → 455
- fictional given-name literals in DESIGN/provenance/migration-log → absent
- SHA-256 `2ed442e9653a78c2cb695abbc0fec1c140eaf4c46d562fe073831b54e3dc82ae`
- `--gate-only` PASS, problems []
- `--require-portable-core` exit 0, `portable_core: true`

Prior F3 “no §9-only unique field”, item-level header/footer Background, Observed 바로레터, and F2 completeness reservation are superseded. Gate/Core outputs are not a catalog-adoption claim (E2c).

## Revision 2026-08-24 (wave10 final resubmit)

Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v7. Source remainder: `docs/reviews/t2-1-wave10-2026-08-24-sol-final.md` barogo. DESIGN.md not edited. New F3 not required.

| Item | Correction |
|---|---|
| 1. Active §14 source-row | `migration-log.md` §14 dests remapped to current DESIGN.md: B1 224; C1/C3 222; C4 226; Primary CTA C2 253; Outline C2 280; Footer Link C2 395; Top Nav field-note 352 / C2 360–362 / additional 364; Footer Link field-note 386; Named gaps C2/C4 497–498. |
| 2. Active F1 component/Content dests | Capture 206/220; field-notes 244/271/296/312/327/352/386; Layout 402/428; Content 435/443/447; B1 224. Prior 208/222/246/273/344/356/370/386/412/419/427/431/226 superseded. |

### F1 / F2 (v7; this final resubmit)

F1: Capture graph-not-adopted (206); table characterizations (220); Primary CTA (244); Outline (271); Feature Card (296); Stat Card (312); Badges (327); Top Nav (352); Top Nav additional (364); Footer Link (386); Layout operational-clarity (402); Layout recorded-span (428); Content citation-character (435); Content empty/loading (443); Content derived voice (447). B1 generic-Focus (224).

F2 (this revision; value + field/role context):

- B1 `focus-visible` colour absence → 224
- C4 Feature Card / Stat Card / Badges kind omit → 226
- Primary CTA loading/error/success omitted → 253
- Outline loading/error/success omitted → 280
- Top Nav captured-variant field note → 352
- Top Nav loading/error/success `not-applicable` → 360–362
- Top Nav additional observed → 364
- Footer Link field-note → 386
- Footer Link loading/error/success omitted → 395
- Layout operational-clarity B2a → 402
- Layout recorded-span B2a → 428
- Content citation-character → 435
- Content empty/loading as state-contract → 443
- Content derived voice → 447
- Named gaps C2 omission → 497
- Named gaps C4 kind/map → 498
- SHA-256 `2ed442e9653a78c2cb695abbc0fec1c140eaf4c46d562fe073831b54e3dc82ae` unchanged (DESIGN.md not edited)
- `--gate-only` PASS, problems []
- `--require-portable-core` exit 0, `portable_core: true`

This log does not re-assert F1/F2/F3 compliance as closed (E2c). Gate/Core outputs are not a catalog-adoption claim (E2c).
