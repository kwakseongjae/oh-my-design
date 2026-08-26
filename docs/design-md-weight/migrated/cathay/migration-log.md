# Cathay migration log

Source: `web/references/cathay/DESIGN.md`
Destination: `docs/design-md-weight/migrated/cathay/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/cathay/provenance.md`
Date: 2026-08-24
Worker: grok-4.6 T2
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v7
Portable Core: command outputs are recorded after F1/F2. This is not a catalog-adoption claim (E2c).
카탈로그 채택 아님.

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (id, name, country, category, homepage, primary_color, logo) | 분리 → provenance; homepage 옮김 → Experience Scope; `primary_color` 옮김 → Scope token-note + Distinctive + Foundations Cathay Deep Green / Semantic unmerged-role + capture-bound + Primary CTA + local recipes; logo URL 옮김 → Typography & Assets + provenance | Portable file has no frontmatter. Name kept as H1 `Cathay Design System`. Homepage `https://www.cathaybk.com.tw` is dual Scope 9/11 + provenance identity/surfaces/Proof (E2a). Catalog `primary_color` `#00512a` is identity + portable Scope token-note 13 / atmosphere 15, Distinctive unmerged B2a 38 / bullet 40, Principles capture-bound 61 / Do 63, Semantic unmerged-role 94 / Cathay Deep Green 96, Capture-record Empty 225 / Focus 231 / named-Focus prose 235, Primary CTA Background 247 / Border 249 / field note 256, Outline 276–277 / 282, Motion CTA press 168, Form Input named Focus 389–390 / 403, Off-white Hero 430 / 435, Product Card 450, Named gaps 571, provenance Identity (E2a). Avoid 82 names `#e87c07`, not this hex. Content Observed 507 is the live CTA strings without this hex. Catalog apple-touch URL `https://www.cathaybk.com.tw/apple-touch-icon.png` is dual: provenance identity + portable Typography & Assets 211 (E2a). A first-party wordmark-file gap sentence was not generated. |
| YAML `omd`, `verified`, `added`, token claims, `tokens.source` / `extracted` / `note`, `components_harvested` | mixed: `omd` / `verified` / `added` / `extracted` / `components_harvested` / `tokens.source` YAML keys 분리 → provenance; `tokens.note` 옮김 → Experience Scope + provenance; `live-extract` 값 옮김 → Font evidence live computed + provenance | `tokens.source: live-extract` YAML key and `components_harvested: true` are provenance-only as keys (A1c; provenance Identity). The live-extract extraction class is dual: provenance Identity/Claim ledger + portable Font evidence table row 183 (E2a). Line 179 is the adjacent complete B2a on evidence-class application, not the live-extract restatement. Token note is dual Scope 13 + provenance identity (E2a, B2/B2a). YAML `verified` / `added` / `extracted` 2026-06-08 are provenance freshness. Footer Verified is provenance freshness. |
| YAML `tokens.colors` / `typography` / `spacing` / `rounded` / `shadow` / `components` | 옮김 → Foundations, Typography & Assets, Components & States; YAML `use` also Primary tasks | 검증된 값만 최소 필드 단위. YAML unitless lineHeight 1.50 비율 보존 (A1a) Type roles 197/203–207. YAML typography `use` 다섯 field restored on Type roles 203–207 (A1). Unique body Notes quote restored on Hero 203 (homepage hero — "每次都是更好的體驗"). Rows 204–207 restate YAML `use` in Provenance; original Notes "Feature / activity section heads" / "intro copy" are not on those rows. YAML rem 2.25 / 1.75 / 1.13 / 1.00 / 0.88 restored in Size column 203–207. YAML spacing xs 5 / sm 11 / md 15 / base 20 / lg 27 / xl 40 / section 64는 숫자 보존, px 접미사 비발명 (Spacing 112, Layout 470). Body 5px / 11px / 15px / 20px / 27px / 40px는 Spacing 112 / Layout 470에 별도 유지. YAML `rounded.full` 9999는 YAML step으로 보존되고 harvested pill로 비변환 (Distinctive 38, Shape 118/120/124/126, Primary CTA field note 256, Outline field note 282). 검증된 primitive type은 컴포넌트별로 보존: button×2 (245, 273) + tab×2 (297, 409) + card×2 (350, 365) + input (381). Quiet Nav / Utility Sign-in YAML `tokens.components` row 없음 — Type 발명 없음 (A1b). `#00512a`와 `#26a862`, `#fafafa`와 `#ffffff`, `#333333`와 `#555555`와 `#888888`, `#eeeeee`와 `#bebebe`는 비합침 (A4). YAML shadows는 Elevation 139. Primary tasks dests from these YAML `use` strings: 27–29 (primary CTA 254, glass tiles 371, quick-action strip from body §1/§4). |
| §1 Visual Theme & Atmosphere | 옮김 → Experience `scope` claim, distinctive traits | 제품/표면 범위. URL evidence-domain assignment (11) names the source-footer Tier 1 URLs. Product-origin (9), token-note register-split (13), atmosphere extra names (15), public-history (17), refusal/embrace (19) 문단 인접에 derived editorial implementation inference / not Cathay-authored or a separately published UI specification 한정 (B2/B2a). Distinctive unmerged-role extras have adjacent complete B2a immediately before the bullets (38). `https://www.cathaybk.com.tw` / `https://www.cathay-cube.com.tw` / `https://www.cathayholdings.com`는 provenance와 dual (E2a). |
| §1 / footer / §11 공식 URL | 분리 → provenance; 본문 Scope에도 | 서사·freshness 원장. 본문은 토큰 경계 한정을 유지. Homepage / cube-host remain named as brand-owned Tier 1. Holdings / App Store TW are Scope 11 country-identity + provenance Country sources (E2a). Evidence class is public-history narrative plus live homepage strings. |
| §2 Color Palette & Roles | 옮김 → Foundations semantic color | 12 YAML hex 전부. Unmerged-role extra characterizations have adjacent complete B2a at 94 (B2/B2a). `#00512a` vs `#26a862`, `#fafafa` vs `#ffffff`, `#333333` / `#555555` / `#888888` 비합침. |
| §3 Typography Rules | 옮김 → Typography & Assets | 증거 등급. Roboto Flex vs Noto Sans TC kept as stack families (187–191). YAML `use` 다섯 field restored (203–207). Body-table Notes restored on Type roles (203) (A1/A4). Font evidence-class B2a (179). Live computed surface-use row 183; YAML family keys name those live computed families. No Font Official product-use row. Family font-use (193) / type-rule (199) / ratio-versus-size-local (197) 독해는 각 인접 완전 B2a (B2/B2a). 원본에 없는 FontFaceSet / exclusive-file 부정은 만들지 않음 (D1). |
| §4 Component Stylings | 옮김 → Components & States + Primary tasks | Primary CTA / Outline `Type: button` 245/273; Top Nav / Footer Link `Type: tab` 297/409; Standard Card / Glass Tile `Type: card` 350/365; Form Input `Type: input` 381 (Standard Card / Glass Tile / Quiet Nav / Utility Sign-in kind/map 생략, C4 239/329/345/360/375/573). Quiet Nav Action / Utility Sign-in YAML `tokens.components` row 없음 — Type 발명 없음 (A1b, dests 239/326/342). Body-only Use dests: Quiet Nav 324, Utility Sign-in 340 (not YAML `use`). Capture selector 없음 — 발명하지 않음. Primary CTA loading·error·success omitted (C2) 265. Outline loading·error·success omitted 291. Form Input error applicable 399; loading/success omitted 401. Top Nav / Footer L/E/S는 destination/selection 역할로 not-applicable 312–314 / 424–426 (C2; `not captured` 사유 아님, C1). YAML input `focus` / body Focus `#00512a`는 named Focus로 보존되고 focus-visible 행에 hex 없음 (B1, 233/262/288/310/397/422). Field notes have adjacent complete B2a on unmerged-field readings (256/282/304/327/343/358/373/390/416). Primary tasks from these YAML/§4 uses: 27–29. |
| §5 Layout | 옮김 → Layout & Platforms + Foundations spacing/shape | YAML scale + body 5px/11px/15px/20px/27px/40px + harvested heights. Shape local-geometry limiter precedes the labeled list (120). Layout extras (472)와 recorded-span / collapsing / not-cross-viewport (481, limiter precedes the breakpoint table)는 각 절 인접 완전 B2a (B2/B2a). |
| §6 Depth & Elevation | 옮김 → Foundations elevation | YAML ambient / standard / overlay 139 + four-level table 133–137. Elevation-table Use limiter precedes the table (130) (B2/B2a). Overlay-shadow-and-scrim same-value unmerged has adjacent complete B2a on the following-the-table sentence (141). `rgba(0,0,0,0.08)` / `0.12` / `0.22` / scrim `0.5` 비합침 141. |
| §7 Do's | 옮김 → Experience principles (capture-bound application) | Capture-bound grouping of §7 Do’s named rules has adjacent complete B2a (61) (B2/B2a). Governance 통제 문구에 넣지 않음. |
| §7 Don'ts | 옮김 → Experience avoid | 브랜드 금지. Avoid list-head named Don’ts 인접 완전 B2a (75); last-bullet 인접 완전 B2a (86) (B2/B2a). `#e87c07` dests: Distinctive 47, Avoid limiter 75 / Don’t 82, Semantic unmerged-role 94 / Warn Orange 108, Capture-record Error 227, Form Input error reason 399 (E2a). |
| §8 Responsive Behavior | 옮김 → Layout & Platforms | Source breakpoint table Mobile <768px / Tablet 768-1024px / Desktop 1024-1440px / Large >1440px 보존 (487–490). Touch-purpose / collapsing / image-behavior / source-stated-heights-not-cross-viewport 독해는 Layout 인접 완전 B2a (481) (B2/B2a). ≈187px는 Glass Tile 370 + Layout 470/496. |
| §9 Agent Prompt Guide | mixed: 도구 프롬프트 삭제; 고유 parent-child tuple 옮김 → local recipes | 도구별 복붙 프롬프트·Quick Color Reference·Iteration Guide 삭제 (A2). 검증된 hex/radius/height/family는 이미 Foundations/Type/Components에 있음. Unique tuples restored (A3/A4): Off-white Hero 428–438 (`#fafafa` parent + 36px/700/1.5 `#333333` headline stated as Noto Sans TC in the prompt + glass-tile strip + one primary CTA); Product Card 440–453 (white parent + 18px/400 `#333333` title + 16px/400 `#555555` body + deep-green CTA); Mint Highlight Band 455–465 (`#f3fff7` parent + `#26a862` icons + `#333333` body + 5px-radius cards). Tuples are not promoted as global tokens. Kind/map omitted on those local recipes: Off-white Hero 437, Product Card 452, Mint Highlight Band 464 (E2a). Remaining prompt-only constructions stay omitted in provenance omitted-prompts. |
| §10 Voice & Tone | 옮김 → Content Observed + derived voice (인접 B2a) | Live Observed strings 505–514 under citation-character B2a (503). Derived editorial voice + tone table + forbidden register under adjacent complete B2a (520). Treating §14 rows as state-contract not extra voice samples has adjacent complete B2a (516) (B2/B2a, E1). |
| §11 Brand Narrative | 옮김 → Experience `scope`; 서사 원장 분리 → provenance | 2003 merger / group companies / CUBE App / CUBE信用卡 / taglines restated in portable Scope under adjacent complete B2a (9, 17, 19) (A1, B2/B2a). Taglines also Content Observed 505–506. Holdings/App Store URLs dual Scope 11 + provenance Country sources. Evidence class is public-history narrative plus live homepage strings. |
| §12 Principles | 옮김 → Experience principles | 일곱 항목 전체 editorial readings. 인접 본문에 derived editorial implementation inference / not Cathay-authored or a separately published UI specification (51). Capture-bound grouping (§7 Do’s) has adjacent complete B2a (61). Governance 일반 문구는 그 한정의 대체물이 아님 (B2/B2a, E1). |
| §13 Personas | mixed: 가상 biography 삭제·sidecar 재수록 없음; Audience는 배제 경계만 | 원본이 named fictional archetypes. Names/biographies/ages/cities는 portable Audience에도 provenance에도 없음 (D2). Audience no-individual-personas-promoted + observable-work-follows-three-tasks application have adjacent complete B2a (34) (B2/B2a). Primary tasks 3건 dests are on the YAML/§4 source-rows (YAML `use` + quick-action labels → Primary tasks 27–29), under adjacent complete B2a as YAML-use-strings-not-from-§13 / independently-verified-homepage-URL / harvested-strings-controls-not-independently-verified-destination-routes (25). The portable body does not call those tasks independently verified destination routes (E2c). |
| §14 States | 옮김 → Components & States capture record + per-component applicability | 본문 보존: Empty (no transactions) / Loading / Error (form validation) / Error (service failure) / Success (action complete) / Disabled / Focus (A2) 225–231. Capture-record table characterizations have adjacent complete B2a immediately before the table (221) (B2/B2a). Graph-not-adopted / philosophy-layer preservation sentence has adjacent complete B2a (219). 선언 컴포넌트는 §4.4를 닫되 미관측 시각값은 발명하지 않음. `not captured` / `not named`를 `not-applicable` 사유로 쓰지 않음 (C1). Primary CTA loading·error·success omitted (C2) 265. Outline omitted 291. Form Input error applicable 399; loading/success omitted 401. Top Nav / Footer L/E/S role-based not-applicable 312–314 / 424–426. Standard Card / Glass Tile / Quiet Nav / Utility Sign-in kind/map 생략 (C4) 239/329/345/360/375/573. Local recipes kind/map 생략 437/452/464. Quiet Nav / Utility Sign-in YAML-row-absent Type-not-invented 239/326/342. Named Focus `#00512a`는 focus-visible 행에 없음 (B1, 233). graph 위임 없음. State coverage 완료 주장 없음 (C3, 233/237). |
| §15 Motion & Easing | 옮김 → Foundations motion | Durations 150ms / 250ms / 400ms 149–151; easing names 157–159; signature tile-hover / CTA-press / reduced-motion 167–169. No-bounce / slow-end / tile-rises-it-does-not-light-up / subtle-tactile-trustworthy / function-is-never-sacrificed-for-delight restored in the signature-motion body under adjacent complete B2a (145 and 163) (B2/B2a). Source-stated classification under adjacent complete B2a (145); not computed CSS. 무출처 cubic-bezier 3개 (`ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)` / `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)` / `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` 템플릿 일치)는 provenance omission ledger (E2b). Foundations Motion은 B3 다섯 증거 종류(transition properties · animation name · duration · easing · reduced-motion behavior)를 컴포넌트별 computed 관측한 뒤에만 승격한다는 게이트를 전문 명시 (171). “공식 출처로 검증될 때까지” 약화 문구는 쓰지 않음 (B3, E2c). Named gaps 574 lists the five kinds in inventory form; the B3 full promotion-gate sentence is Foundations Motion 171 only. |
| §16 Do's and Don'ts | mixed: unique items 옮김 → Experience principles/avoid; 중복은 §7과 병합 | Unique §16 Do: warm service-first Traditional Chinese copy → Principles 71 under adjacent complete B2a. Unique §16 Don't: no-drop-below-1.5-line-height + no-trading-calm-trustworthy-tone → Avoid 85–86. Duplicate green/radius/shadow/orange rules remain in the §7 capture-bound and Avoid lists. |
| Footer **Verified** / Tier 1 / Country sources / HTML-comment Proof | mixed: freshness 분리 → provenance; live URLs는 portable에도; Proof sidecar + HTML comment 연결 → provenance | Dual (E2a): homepage/cube-host URLs는 Scope 11 + provenance Surfaces/Sources/Tier 1/Proof. Holdings / App Store는 Scope 11 country-identity + provenance Country sources. Footer verified 2026-06-08는 provenance freshness only. Source HTML comment raw samples + canonical sidecar `web/references/cathay/.verification.md` 분리 → provenance Proof. Derived mirror `design-md/cathay/.verification.md` has the same SHA-256 `8b5dbcc3d3cb7d7ed35c75371c3f6248c002b0080688e0139188aaa7ce21ea94`. Canonical is `web/references`. Sidecar Inspected 2026-06-08; Method playwright getComputedStyle; Sources the inspected URL. Portable body does not re-host the Proof rgb dump (E1). |

### F1 / F2 (v7 mandatory final passes)

F1 and F2 dest maps below include the worker draft plus F3 grep corrections. Worker completeness is not a current-class claim (E2c). This is not a catalog-adoption claim and is not a claim that no unqualified sentence remains (E2c). Reconstruction-boundary exemption not used.

### F1 B2a scan (full DESIGN.md reread)

Worker F1 is not a current-class completeness claim (E2c). F3 restated `provenance.md` Derived inventory to the adjacent complete B2a sites after limiter expansions. Governance Authority is not a substitute. No “no unqualified sentence remains” claim (E2c).

### F2 grep (this draft)

F2 after body edits (three files: DESIGN.md, provenance.md, migration-log.md):

- Canonical Proof sidecar `web/references/cathay/.verification.md` → provenance Proof. Derived mirror `design-md/cathay/.verification.md` same SHA-256 `8b5dbcc3d3cb7d7ed35c75371c3f6248c002b0080688e0139188aaa7ce21ea94`. Portable DESIGN.md does not re-host the Proof rgb dump.
- Catalog `primary_color` `#00512a` → DESIGN 13/15/38/40/61/63/94/96/168/225/231/235/247/249/256/276/277/282/389/390/403/430/435/450/571 + provenance Identity. Avoid 82 does not contain `#00512a`. Content Observed 507 is the live CTA string without this hex.
- Accent `#26a862` → DESIGN 13/15/38/41/61/64/94/97/229/256/282/457/462/465 + provenance.
- Google-style favicon proxy not used. Apple-touch URL → Assets 211 + provenance identity only (not Named gaps).
- Homepage `https://www.cathaybk.com.tw` → Scope 9/11 + provenance. Cube host `https://www.cathay-cube.com.tw` → Scope 11 + provenance. Holdings `https://www.cathayholdings.com` → Scope 11 + provenance Country sources.
- `tokens.source` / `components_harvested` YAML keys → provenance only; portable Font evidence table row 183 names live computed surface-use. Line 179 is B2a evidence-class, not the live-extract restatement.
- YAML `use` strings → Type roles 203–207 and YAML component Use 254/280/302/356/371/388/414; Primary tasks 27–29 carry marketing CTA / quick-action strip / glass-tile uses. Body-only Use dests (not YAML `use`): Quiet Nav 324, Utility Sign-in 340. Local-recipe Use: 436/451/463.
- Unique body Notes quote → Type Hero 203 (homepage hero — "每次都是更好的體驗"). Rows 204–207 are YAML `use` in Provenance, not original Notes "Feature / activity section heads" / "intro copy".
- `Type: button` ×2 → 245/273. `Type: tab` ×2 → 297/409. `Type: card` ×2 → 350/365. `Type: input` → 381. Quiet Nav / Utility Sign-in YAML-row-absent Type-not-invented → 239/326/342.
- Primary CTA omission sentence → 265. Outline omission → 291. Form Input loading/success omission → 401. Not destination `not-applicable` rows.
- Standard Card / Glass Tile / Quiet Nav / Utility Sign-in C4 omit-kind → 239/329/345/360/375/573. Local recipes kind/map omit → 437/452/464.
- Persona names absent from DESIGN.md and provenance.
- `omd-apply` / `npx omd` / `[FILL IN]` absent from portable body.
- §14 seven rows → Capture record 225–231.
- YAML `rounded.full` 9999 → Distinctive 38, Shape 118/120/124/126, Primary CTA field note 256, Outline field note 282 as a YAML step. No px suffix is added to that YAML number.
- Warn orange `#e87c07` → Distinctive 47, Avoid 75/82, Semantic 94/108, Capture-record Error 227, Form Input error reason 399.
- YAML spacing numbers 5/11/15/20/27/40/64 → Spacing 112 and Layout 470 without a required px suffix on the YAML steps; body 5px/11px/15px/20px/27px/40px kept beside them. YAML section 64 keeps its unitless form in all three files.
- B3 five-kind gate → Foundations Motion 171 (`transition properties, animation name, duration, easing, and reduced-motion behavior` + per component + “Official documentation of a single curve or duration is not that gate”). Named gaps 574 lists those five kinds in inventory form; it is not the B3 full promotion-gate sentence.
- Cubic-bezier values absent from DESIGN.md tables (names only at 157–159); provenance omitted-curves stores the three source curves.
- `prefers-reduced-motion` → Motion 169.
- §9 local recipes → Off-white Hero 428–438, Product Card 440–453, Mint Highlight Band 455–465.
- Font evidence: Live computed 183; no Official product-use row.

Worker SHA-256 `d03d2255986ecefcb473146f76002965ef31b0fa34c45b5950025cf4f09a1950` is pre-F3. Not a current-file SHA (E2c). Not a catalog-adoption claim (E2c).

### Revision 2026-08-24 (F3 B2a·E2 audit)

F3 expanded adjacent complete B2a names and restated dest maps. Token values, component tables, state applicability, and section structure were not changed. Post-F3 DESIGN SHA-256 `3814808edcc122e389349cb282f37cbfc9ad55cac8928eb8da6501f57058ae88`. `--gate-only` PASS, problems []. `--require-portable-core` exit 0, `portable_core: true`. Not a catalog-adoption claim (E2c).


## Revision 2026-08-24 (wave13 sol resubmit)

List-only revision against `docs/reviews/t2-1-wave13-2026-08-24-sol-full.md` cathay conditions 1–7. Rulebook v7. New F3 was not run. Worker-session and post-F3 dest maps above are **[SUPERSEDED dest 2026-08-24 wave13 sol resubmit]**. Not a catalog-adoption claim (E2c).

1. Type roles 203–207 restore YAML `use` and body Notes as separate fields. Primary CTA Use 254 is YAML two-string plus body §4 “設定手機提款” / “更多新鮮事” on the same control (also 265).
2. Quiet Nav Type `link` / Kind interactive + map (316–). Utility Sign-in Type `link` / Kind interactive + map (341–). Glass Tile YAML `type: card` + Kind interactive from Proof `(a)` + map (382–). Standard Card remains C4 omit-kind (380). Unobserved visual treatments omitted.
3. `first-party catalog content` ownership deleted. Imagery-not-invented-decoration limiter precedes the implementation reading. Ownership is not claimed.
4. Audience complete B2a precedes “No individual personas are promoted” (34).
5. “想轉就轉” is derived voice table only (557), not Observed live (534–536).
6. Proof frequency `rgb(0, 0, 0) — 45` restored as proof-only in provenance (sidecar hex form is not copied into the three gate-scanned files; not a portable token).
7. Named gaps actual heading 594–603. Tagline Content Observed 534–535. B3 five-kind full sentence is Motion 171. Named gaps 603 names animation/transition/duration and refers to all five; it is not the B3 전문.

F2 greps after this revision:

- body Notes Feature / activity section heads → Type 204. intro copy → 205. Standard text, nav, button label → 206
- 設定手機提款 → Primary CTA Use 254 / C2 sentence 265 / Observed 536
- Type: link → Quiet Nav 320, Utility Sign-in 345
- Glass Tile Kind: interactive → 385. Standard Card C4 omit → 380. Named gaps Standard Card only → 602
- first-party catalog content → ABSENT
- Audience limiter-precedes-exclusion → 34
- 想轉就轉 → derived table 557 only. Observed taglines → 534–535
- rgb(0, 0, 0) — 45 → provenance frequency table
- Named gaps → 594–603. B3 전문 → 171

Post-revision DESIGN SHA-256 `cafa12233729a0b3830fd37cb6481d348faa254f18b1206ddc4354dbf8b0d583`. `--gate-only` PASS, problems []. Core `portable_core: true`. F3 was not re-run. Not a catalog-adoption claim (E2c).


## Revision 2026-08-24 (wave13 ledger sync)

Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v7. Source remainder: `docs/reviews/t2-1-wave13-2026-08-24-sol-recheck.md` cathay conditions 6–7. DESIGN.md not edited. New F3 not required. E2c: this revision does not re-assert F1/F2/F3 closed. Provenance frequency row `rgb(0, 0, 0) — 45` without hex, the Notes-absent claim, and unmarked stale dests from Revision 2026-08-24 (wave13 sol resubmit) are **[SUPERSEDED dest 2026-08-24 wave13 ledger sync]**.

1. Proof frequency exact values restored from canonical `web/references/cathay/.verification.md` as proof-only observations, including rgb→hex. Black row is `rgb(0, 0, 0)` → `#000000` — 45. Not a portable token.
2. Claim ledger Type roles 203–207 now record YAML `use` and body Notes as separate fields on each row (Hero 203 / Section 204 Feature / activity section heads / Subheading 205 intro copy / Body 206 / Caption 207). The prior “Notes are not on those rows” current claim is not current.
3. Named gaps heading 594–603. `#00512a` Named-gaps dest is 600 (named Focus exception), not 571. B3 전문 is Motion 171. Named gaps 603 names animation/transition/duration and refers to all five; it does not enumerate the five kinds.
4. Content Observed taglines 534–535; CTA strings without `#00512a` at 536 (not 507). Component/local-recipe dests remapped to actual current lines.

### F2 (this revision; value + field/role context)

- `rgb(0, 0, 0)` → `#000000` — 45 → provenance frequency table (proof-only)
- body Notes Feature / activity section heads → Type 204; intro copy → 205; Standard text, nav, button label → 206
- Named gaps → 594–603. `#00512a` Named-gaps exception → 600. B3 전문 → 171. Named gaps 603 is not the B3 전문
- Observed taglines → 534–535. Observed CTAs (no `#00512a`) → 536
- Off-white Hero → 457–467; Product Card → 469–482; Mint Highlight Band → 484–494
- Quiet Nav Type `link` → 320; Utility Sign-in Type `link` → 345; Form Input named Focus → 418/432; Form Input error `#e87c07` → 428

SHA-256 `cafa12233729a0b3830fd37cb6481d348faa254f18b1206ddc4354dbf8b0d583` unchanged (DESIGN.md not edited). This log does not claim F2 completeness beyond those greps, and does not re-assert F1/F2/F3 compliance as closed (E2c). Not a catalog-adoption claim (E2c). F3 was not re-run.


## Revision 2026-08-26 (A5 카피 복원)

Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v9 — **A5** (브랜드 발행 문자열은
바이트 그대로; 사명 포함) 및 신설 게이트 `copy-loss`. 수행: opus5. 값·컴포넌트 표·상태
applicability·섹션 구조·원본 파일 무변경. 이 개정은 F1/F2/F3 종료를 주장하지 않는다 (E2c).
카탈로그 채택 아님.

| Legacy | Disposition | Destination / reason |
|---|---|---|
| §11 Brand Narrative 정식 사명 `國泰世華商業銀行` (source line 327) | 복원 → Experience Scope product-origin 9 | A5. 이관 시 이 자리에는 §1·Sources의 통용 단축형 `國泰世華銀行`만 남고 §11의 정식 사명이 소실돼 게이트 `copy-loss`가 차단했다. 정식 사명을 바이트 그대로 Scope 9에 복원하고, 영문 사명 `Cathay United Bank`는 대체가 아니라 **병기**로 유지했다 (A5). 캡처 홈페이지 표기인 단축형 `國泰世華銀行`도 같은 문장에 함께 남겨 두 발행 표기를 모두 보존한다 — Scope 9 / 11. §11의 나머지 서사(2003 병합, 그룹사, CUBE, 태그라인) dest는 기존 §11 행 그대로 (Scope 9/17/19). |

### F2 grep (this revision)

각 행은 이 문장을 쓰기 전에 실제 파일 grep으로 확인했다.

- `國泰世華商業銀行` → legacy `web/references/cathay/DESIGN.md` 327 → portable `DESIGN.md` 9 (1회). provenance.md 0회 — 사명은 portable 본문 값이므로 sidecar 재수록 없음.
- `國泰世華銀行` (단축형) → portable `DESIGN.md` 9 / 11. 기존 11의 캡처 홈페이지 지칭 문장 무변경.
- `國泰金控` → DESIGN 9 / 444 / 542. `國泰人壽` · `國泰產險` · `國泰綜合證券` → DESIGN 11 / 17 / 444 / 542.
  `國泰投信` → DESIGN 11 / 17. `世華聯合商業銀行` → DESIGN 17 + provenance 119. 이 개정에서 값·자리 무변경 —
  444는 Footer Observed 상태 행, 542는 Content 관측 카피 행이다.

Post-revision DESIGN SHA-256 `d941546f6a9acbc402639246d1a8490a63d0d1d4a6160fbc8e0965160cf6888a`.
`--gate-only` PASS, problems []. Core `portable_core: true`. F3 재실행 없음. 게이트 오탐 없음 (E3).
