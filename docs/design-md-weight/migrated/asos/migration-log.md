# ASOS migration log

Source: `web/references/asos/DESIGN.md`
Destination: `docs/design-md-weight/migrated/asos/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/asos/provenance.md`
Date: 2026-08-24
Worker: grok-4.6 T2
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v7
Gate: `node test-v2/tools/migrate-reference.mjs --brand asos --gate-only` → PASS, problems [].
Portable Core: `node scripts/migrate-design-md-core.cjs --input docs/design-md-weight/migrated/asos/DESIGN.md --check --require-portable-core --json` → status pass, `portable_core: true`. Worker DESIGN SHA-256 `22f194c6e900f724cd97a97cd77386febe016fbe7137670ef8425ae1cd4dcd7c` (pre-F3; superseded). F3 B2a·E2 audit ran 2026-08-24; current SHA is the Revision F3 value.
카탈로그 채택 아님.

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (id, name, country, category, homepage, primary_color, logo) | 분리 → provenance; `primary_color` 옮김 → Distinctive / Foundations / Components / capture-bound Do / Capture record (Avoid has no `#2d2d2d` hex); homepage 옮김 → Experience `scope`; logo 경계 옮김 → Typography & Assets | Portable file has no frontmatter. Name kept as H1 `ASOS Design System`. Catalog `primary_color` `#2d2d2d` is multi-destination (E2a): provenance identity + Scope token-note 13 + atmosphere 17 + Distinctive 44/54 + capture-bound Do 71 (Avoid has no hex) + Foundations unmerged-role 95 + Charcoal 99 + Elevation 154 + Capture-record Empty 236 / Error out-of-stock 240 / Error 404 242 + Retry Background 340 / Observed 347 / field note 349 + Search text 367/374 + Primary Gender Nav Background 480 / field note 488/490 + Category Sub-Nav field note 519. Named gaps has no hex. It is not body ink `#000000` and not Nav Active `#525050`. Catalog homepage exact `https://www.asos.com` is provenance identity + portable Scope 9 (E2a). Live-inspect form `https://www.asos.com/` is Scope 11 + provenance Surfaces/Sources/Tier 1 (E2a: identity literal vs trailing-slash form). Catalog favicon URL `https://www.google.com/s2/favicons?domain=asos.com&sz=128` is provenance identity only. Portable Assets 221 holds a URL-free Google-favicon capture-method / not-a-portable-mark sentence, not the URL string (E2a). Named gaps has no first-party-mark sentence. |
| YAML `omd`, `verified`, token claims, `tokens.source` / `extracted` / `note`, `components_harvested` | 분리 → provenance; token note 옮김 → Experience `scope` | 출처 원장·freshness·Proof. `tokens.source: live-extract` is provenance-only (A1c). Token note is dual provenance + Scope 13 (E2a). `components_harvested: true` is provenance-only (A1c). |
| YAML `verified` date + footer Tier 1 URLs | 분리 → provenance; 두 웹 URL 옮김 → Experience `scope` | Dual destination (E2a): `https://www.asos.com/` (live-inspect) and `https://www.asos.com/noisy-may/noisy-may-cropped-tank-top-in-washed-grey/prd/205778249` are portable Scope 11 AND provenance Surfaces/Sources/Tier 1. Claims/conflicts stay provenance. |
| YAML `tokens.colors` / `typography` / `spacing` / `rounded` / `shadow` / `components` | 옮김 → Foundations, Typography & Assets, Components & States | 검증된 값만 최소 필드 단위. YAML unitless `lineHeight` `1.25` / `1.0`는 비율로 보존하고 본문 표의 “16px on 16px” 관측과 합치지 않음 (A1a, Type roles 205/209–215). 검증된 primitive type은 컴포넌트별로 보존: button×4 + input + card×3 + badge + tab×2. `Kind: interactive`로 뭉개지 않음 (A1b, Type 261/286/312/338/364/416/430/445/460/478/508). Product Grid Card keeps `Type: card` 416; Lime Promo Banner `Type: card` 460; Sale Badge `Type: badge` 445; Kind+map omitted (C4, 425/440/455/472). Size Selector has no YAML `tokens.components` type; Type `input` is the source Inputs heading classification (391). `#2d2d2d`를 `#000000` / `#525050`과 합치지 않음. Surface `#f8f8f8`과 Surface Alt `#f7f7f7` 합치지 않음. YAML `rounded.lg` 19 / `19px`와 0px default와 YAML `full` 9999 / `9999px`를 합치지 않음 (A4). YAML spacing xs 4 / sm 8 / md 16 / base 16 / lg 24 / xl 32 / xxl 48 / section 64 is Foundations Spacing 126 under adjacent complete B2a (unitless token numbers rather than a claimed px scale; §5 observed px scale stays separate). Harvested-control-padding-stays-with-those-controls B2a is 130. YAML `shadow.none` `none` is Elevation 152. |
| §1 Visual Theme & Atmosphere | 옮김 → Experience `scope` claim, distinctive traits | 제품/표면 범위(homepage / PDP). Product-story-span (9), two-URL evidence-domain (11), token-note register-split (13), evidence-domain homepage-not-proxy (15), stark-editorial-restraint / product-photography-heavy-lifting / get-out-of-the-way / razor-sharp / search-pill-exception / three-accents-never-compete / fashion-retail-distilled / almost-black-without-harsh / navigation-backbone / echoing-wordmark / deliberate-search-softness / dense-precise-unapologetic (17) sit under adjacent complete B2a. Distinctive hex/geometry facts 44–52 remain source-stated; unmerged-role plus product-photography-centred / chrome-minimal has adjacent complete B2a (54). |
| §1 / §11 공식 히스토리 | 분리 → provenance Narrative; 고유 서사 옮김 → Experience `scope` | 2000 Robertson / Griffiths / As Seen On Screen / 200+ countries / no physical stores / LSE: ASC / ASOS DESIGN / Curve·Petite·Tall·AS/4U는 Scope 23 under founding-as-public-fact B2a + provenance Narrative (E2a). Democratic-instinct / digital-native-container / neutral-monochrome-frame / refuses / embraces under B2a (25). |
| §2 Color Palette & Roles | 옮김 → Foundations semantic color + Avoid | `#2d2d2d` `#ffffff` `#000000` `#525050` `#666666` `#858585` `#018849` `#d01345` `#ccff00` `#f8f8f8` `#f7f7f7` `#e8e8e8` `#dddddd` `#27455c` 및 YAML `on-primary` / `on-dark` / `cta-green-on` / `lime-on`. Unmerged-role adjacent complete B2a names charcoal-not-body-ink / defining-chrome / not-pure-black / maximum-contrast / green-as-commerce-only / lime-as-promo-only / sale-red-as-price-signal (95). `#999999` is §14 Disabled size text only (Capture record 246), not a Foundations muted token. |
| §3 Typography Rules | 옮김 → Typography & Assets | Live computed futura-pt; YAML fallback Tahoma, Geneva, Verdana, Arial, sans-serif; body alternate `Futura-pt, "Futura Std"`. YAML `1.25` / `1.0` + size-local 16px on 16px. Font evidence-class application B2a including fallback-not-product-face / alternate-not-second-identity (185). Family font-use boundary B2a (193). Type-rule readings B2a (195) including all display and navigation text uppercase / body and product description mixed case. Type-role ratio-versus-size-local / 10.5px-unmerged-from-14px-sub-nav / omitted-tracking-not-invented named at 205. Category sub-nav 10.5px / 700 is body-only, preserved, not YAML `sub-nav` 14px / 400. **[SUPERSEDED 2026-08-24 wave9 sol resubmit — prior “§3 typography가 이동됐다” close omitted the display/navigation vs body/product-description casing relation. See Revision wave9 sol resubmit.]** |
| §4 Component Stylings | 옮김 → Components & States + Named gaps + Primary tasks | Add to Bag (`Type: button`), Hero Editorial CTA dark (`Type: button`), Hero Editorial CTA light (`Type: button`), Retry (`Type: button`, body §4), Search Bar (`Type: input`), Size Selector (`Type: input` from source Inputs heading; Kind: interactive), Product Grid Card (`Type: card`, C4), Surface Section (`Type: card` from §4 Cards, C4), Sale Badge (`Type: badge`, C4), Lime Promo Banner (`Type: card`, C4), Primary Gender Nav Tab (`Type: tab`), Category Sub-Nav Tab (`Type: tab` from §4 Tabs). YAML 기하와 본문 기하를 같은 슬롯에 유지. Independently verified Primary tasks 31–35 (SHOP WOMENS/MENS; Search; Add to bag) come from these captured controls/surfaces, not from §13. Capture-record graph-not-adopted B2a (230). Philosophy-layer B2a (232). Table characterizations B2a including encouraging-product-exploration / 404-style (249). Primary Gender Nav captured-variant / hover-name-not-copied / unmerged-field B2a (488). B1 not-focus-visible restatement stays on the next line (no hex on that line). Source does not record `data-omd-capture` selectors; none invented. |
| §4 Retry / Size Selector / Surface Section / Category Sub-Nav | 옮김 → Components & States | YAML `tokens.components`에 없는 본문 §4 값. Retry Type: button from §4 Buttons (338/348). Size Selector `Type: input` from source Inputs heading (391). YAML `tokens.components` type is still absent — heading classification is preserved, not invented from nothing. Surface Section Type: card from §4 Cards (430/437). Category Sub-Nav Type: tab from §4 Tabs (508/518). |
| §4 footer **Verified** / Tier 1 / Tier 2 / Conflicts | 분리 → provenance; Tier 1 URL 옮김 → Experience `scope` | Dual destination (E2a): the two web URLs in footer Tier 1 are the same dual Scope + provenance surfaces. Tier 2 getdesign.md / refero는 numeric token 비승격 유지. Conflicts unresolved: none. |
| §5 Layout Principles | 옮김 → Layout & Platforms + Foundations spacing/shape | YAML xs 4 / sm 8 / md 16 / base 16 / lg 24 / xl 32 / xxl 48 / section 64 and body 4px/8px/16px/24px/32px/48px/64px (Foundations Spacing 126 + Layout 534). Spacing unitless-versus-px B2a is Foundations 126, not Layout. 0px-between-cards B2a is Foundations 128. Harvested-control-padding B2a is Foundations 130. Shape 0px / 19px / `9999px` (134–142). Shape local-geometry limiter precedes the labeled list and names Zero-system-default / Pill-single-exception / Full-absent (136). Adjacent complete B2a on Layout product-density / commerce-first / whitespace-not-a-design-statement / flat-depth / tints-do-hierarchy-work / zero-radius-discipline (536) and measurement-boundary / collapsing-strategy / image-behavior / touch-purpose (561). |
| §6 Depth & Elevation | 옮김 → Foundations elevation | Flat / Hairline / Tint 표 보존. YAML `shadow.none` `none` 보존. `1px solid #dddddd` 보존. divider-not-elevation / shadow-philosophy / table Use / lime-as-absolute-visual-layer / green-as-the-one-coloured-action / flatness-not-oversight / photography-supplies-three-dimensional-interest adjacent complete B2a (154). 원본에 `box-shadow: none` 문자열은 없음 — 발명하지 않음. |
| §7 Do's | 옮김 → Experience principles (capture-bound application) | 브랜드 적용 규칙. Adjacent complete B2a names the grouping as a capture-bound application of source §7 Do’s / live inspect (66). Governance 통제 문구에 넣지 않음. |
| §7 Don'ts | 옮김 → Experience avoid | 브랜드 금지. Adjacent complete B2a on the Avoid list including completing-purchase-signal (79). Rounded-on-buttons, mixed accents, hero below 700, decorative shadows, second display face, lime-on-interactive, green-on-non-commerce. Avoid has `#ccff00` at 86; it does not contain `#018849` or `#2d2d2d`. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms | Breakpoint table `<640px` / `640-1024px` / `1024px+`, collapsing, 44px / 56px / 60px / 38px touch-target record. Recorded span / collapsing-strategy / image-behavior / touch-purpose B2a (561). 원본에 없는 최소폭 값을 발명하지 않음. |
| §9 Agent Prompt Guide | 삭제; §9-only 고유값 옮김 → Product Grid Card + Search Bar | 도구별 복붙 프롬프트. Hex/geometry는 이미 Foundations/Components에 있음. Unique §9 product name 14px / 400 `#000000` + price 16px / 700 + sale `#d01345` → Product Grid Card field note 423 (A3/A4). Unique §9 search placeholder “Search for items and brands” → Search Bar Use 372 + Content Observed 572 + Primary tasks 34 (also source §10) (E2a). 슬롯 없는 위임 없음. |
| §10 Voice & Tone | 옮김 → Content & Locales | Observed live strings 570–574 under citation-character B2a (568). Caption-labels B2a (576). Derived voice + tone table + forbidden register + voice-keywords under B2a (582). No-additional-synthetic-voice B2a (600). §14 strings are state-contract not extra Observed samples (578). 원본에 없는 도메인 coverage 문구 신설 없음 (D1). |
| §11 Brand Narrative | 옮김 → Experience `scope` + provenance Narrative | Unique public-history propositions in portable Scope 23. Dual Scope + provenance Narrative (E2a). Founding public-fact limiter under B2a (23). Democratic-instinct / digital-native-container / neutral-monochrome-frame / refuses / embraces under B2a (25). |
| §12 Principles | 옮김 → Experience principles | Numbered stems 1–5 including *UI implication* notes are derived editorial implementation inference / not ASOS-authored or a separately published UI specification (58). Source HTML comment marks “product first, chrome second” as editorial. Capture-bound application is derived (66). Governance 일반 문구는 그 한정의 대체물이 아님 (B2/B2a, E1, E2c). |
| §13 Personas | mixed: 배제 경계만 옮김 → Experience Audience; sidecar 재수록 없음 | 원본이 fictional archetypes이며 공개 세그먼트에서 왔음을 명시. 가상 biography는 Audience가 아니고 primary tasks가 아님. Names/ages/cities/occupations/biographies는 sidecar에 재수록하지 않음 (D2). Independently verified Primary tasks 3건은 §13이 아니라 캡처된 homepage/PDP 컨트롤 (`count=3`). Audience no-individual-personas-promoted / exclusion / observable-work B2a (40). |
| §14 States | 옮김 → Components & States capture record + per-component applicability + Named gaps | 본문 보존: Empty/Loading/Error/Success/Skeleton/Disabled/Sale pricing 표 235–247 (A2). Graph-not-adopted B2a (230). Philosophy-layer B2a (232). Characterizations B2a including encouraging-product-exploration / 404-style (249). 선언 컴포넌트는 §4.4를 역할로 닫되 미관측 시각값은 발명하지 않음. `not captured`를 `not-applicable` 사유로 쓰지 않음 (C1). Add to Bag loading/error/success applicable from source §14 add-to-bag role (279–281); those rows remain §14 guidance, not computed paints. Both Hero CTAs / Retry: loading/error/success omitted at the field boundary 306/332/358 (C2). Search Bar loading/success omitted 384; error applicable 382. Size Selector loading/error/success remain role-based 407–409. Primary Gender Nav Tab loading/error/success remain grouping-selection role-based (498–500). Category Sub-Nav Tab same (527–529). Product Grid Card / Surface Section / Sale Badge / Lime Promo Banner: Kind+map omitted (C4, 425/440/455/472). Named gaps C2 restatement is 641; C4 restatement is 642. **[SUPERSEDED 2026-08-24 wave9 ledger sync — prior dests 639/641. See Revision wave9 ledger sync.]** generic Focus 없음; focus-visible rows carry no hex (B1). graph 위임 없음. This is not a complete state-coverage claim (C3, 253). |
| §15 Motion & Easing | 옮김 → Foundations motion + Named gaps; 무출처 커브 분리 → provenance omission ledger | Duration `0ms` / `120ms` / `200ms` / `300ms` and easing names preserved as source-stated (philosophy layer). Exact cubic-bezier omitted: `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)`; `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` (matches spec-template `ease-exit`); `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)` — provenance omission ledger only. `prefers-reduced-motion: reduce` preserved. Philosophy-layer-not-live-inspect / source-stated / spec-template-ease-exit-match B2a (158). functional-unobtrusive / content-is-the-theatre / no-spring / rapid-browse / reduced-motion-fully-navigable B2a (175). Foundations Motion 177은 B3 다섯 증거 종류(transition properties · animation name · duration · easing · reduced-motion behavior)를 컴포넌트별 computed 관측한 뒤에만 승격한다는 게이트를 전문 명시. “공식 출처로 검증될 때까지” 약화 문구 없음 (B3, E2c). Named gaps 636 lists omitted curve names; 642 lists “all five kinds” without enumerating the five evidence kinds; the B3 full text is Foundations 177 only. |

### F1 / F2 (v7 mandatory final passes)

Reconstruction-boundary exemption not used. No “no unqualified sentence remains” claim (E2c). **[SUPERSEDED 2026-08-24 F3 — worker F1 under-named third-class readings; worker F2 listed Avoid/`Foundations 95` as hex destinations that grep does not hit. See Revision F3.]**

### F1 B2a scan (full DESIGN.md reread)

Adjacent complete B2a (`derived editorial implementation inference` / `not ASOS-authored or a separately published UI specification`) after the worker reread: Scope product-story-span (9); Scope two-URL evidence-domain (11); Scope token-note register-split (13); Scope evidence-domain homepage-not-proxy (15); Scope stark-editorial-restraint / product-photography-heavy-lifting / get-out-of-the-way / razor-sharp / search-pill-exception / three-accents-never-compete / fashion-retail-distilled (17); Scope public-history / founding-as-public-fact (23); Scope democratic-instinct / digital-native-container / refuses / embraces (25); Primary tasks not-from-§13 (31); Audience exclusion / observable-work (40); Distinctive unmerged-role / product-photography-centred / chrome-minimal (54); numbered Principles *UI implication* / derived stems (58); capture-bound grouping of §7 Do’s / live inspect (66); Avoid (79); Semantic unmerged-role / charcoal-not-body-ink / defining-chrome / not-pure-black / maximum-contrast / green-as-commerce-only / lime-as-promo-only / sale-red-as-price-signal (95); Spacing recorded-scale (126); Spacing 0px-between-cards (128); Shape local-geometry / 19px-search-only / 9999px-absent (142); Elevation divider-not-elevation / shadow-philosophy / table Use (154); Motion philosophy-layer / illustrative (158); Motion content-is-the-theatre / no-spring / rapid-browse (175); Font evidence-class application including fallback-not-product-face (185); Family font-use boundary (193); Typography Futura-everywhere / weight-signals-hierarchy / uppercase-for-identity / zero-kerning / compact-line-heights (195); Type-role ratio-versus-size-local / 10.5px-unmerged-from-14px-sub-nav (205); Assets Google-favicon identity-not-captured (221); Assets imagery-not-invented-decoration (223); Capture-record graph-not-adopted (230); Capture-record philosophy-layer (232); Capture-record table characterizations (249); Add to Bag field-note unmerged-field (271); Hero dark unmerged-variant (297); Hero light unmerged-variant (323); Retry unmerged-field (349); Search only-rounded-element / 19px-local (374); Size Selector unmerged-field (399); Size Selector out-of-stock named-availability-variant (411); Product Grid Card §9-only mixed-anatomy (423); Surface Section unmerged-field (438); Sale Badge 12px-unmerged-from-16px (453); Lime Promo high-visibility-editorial / Type-card-not-rewritten (470); Primary Gender Nav captured-variant-not-click-transition (487, 502); Category Sub-Nav unmerged-field (519); Layout product-density / flat-depth / zero-radius-discipline (536); Layout measurement-boundary / collapsing-strategy / image-behavior / touch-purpose (561); Content Observed citation-character (568); Content caption-labels (576); Content empty/loading strings as state-contract (578); Content derived voice + tone table + forbidden register + voice-keywords (582); Content no-additional-synthetic-voice (600). Left unqualified as first-party or observed-technical: ASOS product-surface identity and the captured URLs plus catalog homepage; selector-backed color/spacing/shape values; futura-pt live stack and YAML families; YAML unitless line-height `1.25` / `1.0`; component anatomy and primitive types button / input / card / badge / tab; §14 state table values; duration 0ms/120ms/200ms/300ms as source-stated tokens (the illustrative classification is qualified at 158); B3 five-kind gate (177); Core C1/C2/C3 capture-record policy and per-control C2 omission / C4 kind-omission notes; Size Selector / Gender Nav / Category Sub-Nav loading/error/success role maps; Observed live strings (570–574); Governance controlled copy; Named gaps inventory. Provenance derived inventory lists the same adjacent-complete B2a sites. Worker F1 is a self-scan, not a completeness proof (E2c).

### F2 E2 grep (value + field/role context)

- Catalog `primary_color` `#2d2d2d` literal hex → provenance identity + Scope 13/17 + Distinctive 44/54 + capture-bound Do 71 (Avoid has no hex) + Foundations 95/99/154 + Capture-record 236/240/242 + Retry 340/347/349 + Search 367/374 + Nav 480/488/490 + Category Sub-Nav 519. Named gaps has no hex. Not body ink `#000000`.
- Catalog homepage exact `https://www.asos.com` → provenance identity + portable Scope 9. Not Surfaces/Sources/Tier 1 (those hold `https://www.asos.com/` with trailing slash).
- Live-inspect home / PDP URLs → Scope 11 + provenance Surfaces/Sources/Tier 1.
- Google favicon URL `s2/favicons?domain=asos.com` → provenance identity only. URL-free capture-method → Assets 221. Named gaps has no first-party-mark sentence.
- YAML `tokens.source: live-extract` → provenance only (A1c). Not in portable DESIGN.md.
- Token note “primary = nav/surface dark charcoal…” → Scope 13 + provenance Identity token-note.
- YAML `lineHeight` `1.25` / `1.0` → Type roles 205/209–215; not substituted for 16px on 16px.
- YAML primitive types button / input / card / tab / badge → Components 261/286/312/338/364/416/430/445/460/478/508.
- Retry body-only → Components 334–358; Type: button 338/348; Named gaps L/E/S restatement 639.
- Product name 14px §9-only → Product Grid Card field note 423 (A3) + provenance omitted-§9 / claim ledger.
- Search placeholder “Search for items and brands” → Search Use 372 + Content Observed 572 + Primary tasks 34 + provenance Voice samples (E2a).
- `#018849` Add-to-bag → Scope 13/21 + Distinctive 46/54 + capture-bound 72 + Foundations 111 (unmerged-role 95 has no this hex) + Capture-record Loading 239 / Success checkout 244 + Add to Bag Background 263 / field note 271. Avoid 87 names add-to-bag green without the hex.
- `#ccff00` lime → Scope 13/21 + Distinctive 46/54 + capture-bound 73 + Avoid 86 + Foundations 113 (unmerged-role 95 has no this hex) + Lime Promo 462/470.
- `#d01345` sale → Scope 13/21 + Distinctive 46/54 + capture-bound 74 + Foundations 112 (unmerged-role 95 has no this hex) + Capture-record Sale pricing 247 + Product Card mixed anatomy 423 + Sale Badge 447/453.
- 19px vs 0px vs `9999px` → Scope 19 + Distinctive 48–50/54 + Shape 134–142 + Search Radius 368/374 + Layout zero-radius 547.
- 10.5px vs 14px sub-nav → Type roles 205/213/217 + Category Sub-Nav field note 519.
- §14 table → Capture record 235–247 + Named gaps. Graph-not-adopted B2a → 230. Philosophy-layer B2a → 232. Characterizations B2a → 249.
- Add to Bag / Hero dark / Hero light / Retry L/E/S omitted → 280/306/332/358 + Named gaps 639. **[SUPERSEDED 2026-08-24 wave9 sol resubmit — Add to Bag L/E/S now applicable 279–281; Hero/Retry remain omitted. See Revision wave9 sol resubmit.]**
- Search loading/success omitted → 384; error applicable → 382.
- Size Selector L/E/S role map → 407–409.
- Gender Nav L/E/S role map → 498–500.
- Category Sub-Nav L/E/S role map → 527–529.
- Product Grid Card / Surface Section / Sale Badge / Lime C4 → 425 / 440 / 455 / 472 + Named gaps 641.
- §15 curves → provenance omission ledger only; names in Motion 171–173 + Named gaps 636. B3 five-kind professional text → Foundations 177 only (E2c). Philosophy-layer B2a → 158. Motion-rule B2a → 175. Durations 162–165.
- §13 Audience no-individual-personas-promoted / exclusion / observable-work B2a → DESIGN 40. Names/ages/cities not in provenance sidecar (D2).
- Principles 1–5 derived qualifier → DESIGN 58. Capture-bound derived → 66.
- `components_harvested: true` → provenance only.
- Footer verified 2026-06-22 → provenance Freshness. Tier 2 unusable records → provenance only.
- “SHOP WOMENS” → Primary tasks 33 + Type roles 209 + Hero dark Role/Use 284/295 + Hero C2 306 + Content Observed 571. Also derived tone table 590.
- LSE: ASC → Scope 23 + provenance Narrative.

Compliance is not claimed stronger than the body (E2c). Worker F1/F2 compliance is not re-asserted as a completeness proof.

## Revision 2026-08-24 (F3 B2a·E2 audit)

Auditor: grok-4.6 (fresh session, not the T2 worker). Rulebook v7 B2/B2a/E1/E2/E2a–c only. Token values, component tables, state applicability, and section structure were not changed.

| Item | Correction |
|---|---|
| 1. B2a | Adjacent complete B2a attached or expanded at Scope atmosphere extra names / neutral-monochrome-frame; Audience no-individual-personas-promoted; Avoid completing-purchase-signal; Spacing harvested-control-padding; Shape limiter-precedes-list / Zero-Pill-Full labels; Elevation extra shadow-philosophy names; Motion spec-template-ease-exit-match / philosophy-layer-not-live-inspect; Motion reduced-motion-fully-navigable; Font alternate-not-second-identity; Type-role omitted-tracking-not-invented; Capture-record encouraging-product-exploration / 404-style; Gender Nav hover-name-not-copied / unmerged-field; Layout commerce-first / whitespace-not-a-design-statement / tints-do-hierarchy-work (singular `inference`). |
| 2. Derived inventory | provenance derived inventory restated to those actual adjacent-complete B2a sites. Reconstruction-boundary exemption not used. |
| 3. `#2d2d2d` | Destinations include Category Sub-Nav 519 and Gender Nav field note 488. Avoid does not contain the hex. Capture-bound Do 71 does. Catalog homepage exact `https://www.asos.com` is identity + Scope 9, not Surfaces/Sources/Tier 1. |
| 4. `#018849` / `#ccff00` / `#d01345` | Scope atmosphere 21 is a hex hit. Foundations unmerged-role 95 is not. Avoid has `#ccff00` at 86 only. Add to Bag Background is 263. |
| 5. Live strings | “SHOP WOMENS” also Type roles 209 + Hero C2 306. Search placeholder also Primary tasks 34. 19px also Scope 19. |
| 6. F1/F2/E2c | Worker F1 under-naming and F2 destination overstatements superseded. No “no unqualified sentence remains” claim. |
| 7. Portable Core | `node test-v2/tools/migrate-reference.mjs --brand asos --gate-only` → PASS, problems []. `node scripts/migrate-design-md-core.cjs --input docs/design-md-weight/migrated/asos/DESIGN.md --check --require-portable-core --json` → exit 0 / `portable_core: true`, SHA-256 `8ea6e76dd473167fbd22d449393685e4fddb96d924bb232768c2dfa821fad3c9`. Command outputs, not catalog adoption (E2c). |

### F1 / F2 (v7; this F3 audit)

F1: current adjacent-complete inventory matches provenance derived inventory after this scan (Scope atmosphere extra names / neutral-monochrome-frame; Audience no-individual-personas-promoted; Avoid completing-purchase-signal; Spacing harvested-control-padding; Shape limiter-precedes-list; Elevation extra names; Motion spec-template / fully-navigable; Font alternate-not-second-identity; omitted-tracking-not-invented; Capture-record extra characterizations; Gender Nav hover-name-not-copied / unmerged-field; Layout commerce-first / whitespace / tints; plus the worker-listed sites that were already complete). Left without B2a: verified hex/geometry, C2 omission sentences, C4 omit-kind sentences, B1 not-focus-visible restatement (own line, no hex), B3 five-kind gate, Governance boilerplate, Named gaps inventory.

F2 (this revision; value + field/role context):

- `#2d2d2d` → provenance identity + Scope 13/17 + Distinctive 44/54 + capture-bound Do 71 + Foundations 95/99/154 + Capture-record 236/240/242 + Retry 340/347/349 + Search 367/374 + Nav 480/488/490 + Category Sub-Nav 519. Avoid has no hex. Named gaps has no hex.
- `#018849` → Scope 13/21 + Distinctive 46/54 + capture-bound 72 + Foundations 111 + Capture-record 239/244 + Add to Bag 263/271. Not Avoid 87. Not Foundations 95.
- `#ccff00` → Scope 13/21 + Distinctive 46/54 + capture-bound 73 + Avoid 86 + Foundations 113 + Lime Promo 462/470. Not Foundations 95.
- `#d01345` → Scope 13/21 + Distinctive 46/54 + capture-bound 74 + Foundations 112 + Capture-record 247 + Product Card 423 + Sale Badge 447/453. Not Foundations 95.
- Catalog homepage exact `https://www.asos.com` → provenance identity + Scope 9. Live-inspect `https://www.asos.com/` → Scope 11 + provenance Surfaces/Sources/Tier 1.
- “SHOP WOMENS” → Primary tasks 33 + Type roles 209 + Hero dark 284/295/306 + Content Observed 571 + derived tone 590.
- Search placeholder → Primary tasks 34 + Search Use 372 + Content Observed 572.
- 19px → Scope 19 + Distinctive 48/54 + Shape 136–142 + Search 368/374 + Layout 547.
- SHA-256 `8ea6e76dd473167fbd22d449393685e4fddb96d924bb232768c2dfa821fad3c9`; `--gate-only` PASS; `portable_core: true`. **[SUPERSEDED 2026-08-24 wave9 sol resubmit — F3 left Size Selector Type not invented and Add to Bag L/E/S omitted. See Revision wave9 sol resubmit.]**

This log does not claim F2 completeness beyond those greps, and does not re-assert worker F1/F2 as closed (E2c).

## Revision 2026-08-24 (wave9 sol resubmit)

Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v7. Source FAIL: `docs/reviews/t2-1-wave9-2026-08-24-sol-full.md` §4. New F3 not required.

| Item | Correction |
|---|---|
| 1. Typography casing | Type rules 195 restore all display and navigation text uppercase / body and product description mixed case, beside navigation and CTA uppercase. |
| 2. Size Selector A1b | `Type: input` restored from source Inputs heading (391). YAML `tokens.components` type remains absent. Named-gap “Type for Size Selector” deleted. |
| 3. Add to Bag C2 | loading/error/success applicable from source §14 add-to-bag role (279–281). Visual values remain §14 guidance, not computed paints. Hero/Retry omissions unchanged. |
| 4. Ledgers | provenance Proof primitives / C2, original §3 / §4 / §14 / YAML type rows, and F3 Size-Selector-not-invented / Add-to-Bag-omitted claims superseded. |
| 5. Machine gates | `node test-v2/tools/migrate-reference.mjs --brand asos --gate-only` → PASS, problems []. `node scripts/migrate-design-md-core.cjs --input docs/design-md-weight/migrated/asos/DESIGN.md --check --require-portable-core --json` → exit 0, `portable_core: true`, SHA-256 `7fa00a2f82183231bf91133e0b38411889a9e31362556175ba3d0a64258fc218`. New F3 not required. Prior Post-F3 SHA `8ea6e76d…ad3c9` superseded as the current-file SHA (E2c). |

### F1 / F2 (v7; this resubmit)

F1: Type-rule readings (195) now name display/navigation uppercase and body/product-description mixed-case. Size Selector Type: input is observed-technical from the source heading. Add to Bag L/E/S applicability is observed-technical from source §14 role naming; the §14-guidance-not-computed-paint reading sits on those rows.

F2 (this revision; value + field/role context):

- `All display and navigation text is uppercase; body and product description text is mixed case` → Type rules 195
- Size Selector `Type: input` → 391
- Add to Bag loading/error/success applicable → 279–281
- Named-gap `Type for Size Selector` → absent from current DESIGN.md
- Add to Bag L/E/S omitted sentence → absent from current Add to Bag block

This log does not claim F2 completeness beyond those greps, and does not re-assert F1/F2/F3 compliance as closed (E2c).

## Revision 2026-08-24 (wave9 ledger sync)

Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v7. Source remainder: `docs/reviews/t2-1-wave9-2026-08-24-sol-recheck.md` asos condition 4. DESIGN.md not edited. New F3 not required.

| Item | Correction |
|---|---|
| 1. Named gaps C2/C4 dest | Original §14 source row now points Named gaps C2 restatement to 641 and C4 restatement to 642 (`DESIGN.md` Named gaps). Prior dests 639/641 are superseded. |

### F1 / F2 (v7; this ledger sync)

F1: unchanged from wave9 sol resubmit.

F2 (this revision; value + field/role context; not a claim that every source-row destination is closed):

- Named gaps C2 restatement (Hero/Retry omitted L/E/S; Search omitted loading/success) → 641
- Named gaps C4 restatement (Product Grid Card / Surface Section / Sale Badge / Lime Promo Banner kind+map) → 642

This log does not claim F2 completeness beyond those greps, and does not re-assert F1/F2/F3 compliance as closed (E2c).
