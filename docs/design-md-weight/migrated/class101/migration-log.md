# Class101 migration log

Source: `web/references/class101/DESIGN.md`
Destination: `docs/design-md-weight/migrated/class101/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/class101/provenance.md`
Date: 2026-08-24
Worker: grok-4.6 T2
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v7
Portable Core: command outputs are recorded in the F2 block below. This is not a catalog-adoption claim (E2c).
카탈로그 채택 아님.

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (id, name, country, category, homepage, primary_color, logo) | 분리 → provenance; homepage 옮김 → Experience Scope; `primary_color` 옮김 → Distinctive + Foundations + capture-bound Do’s; logo URL 분리 → provenance, identity-boundary 옮김 → Assets | Portable file has no frontmatter. Name kept as H1 `Class101 Design System` DESIGN.md:1. Homepage `https://class101.net` dual Scope DESIGN.md:9 + provenance.md Identity 13 / dest 24 (E2a). Catalog `primary_color` `#FF5D00` dual provenance.md:14,26,45,144 + DESIGN.md Scope atmosphere 15, Distinctive 36/38, capture-bound Do’s 59, Foundations Orange accent 79 (E2a). Semantic limiter DESIGN.md:77 names the reading without this hex as a required dest. Avoid DESIGN.md:65 names “orange CTA” without this hex. Google s2 favicon URL `https://www.google.com/s2/favicons?domain=class101.net&sz=128` is provenance.md:15,28 only. Portable Assets DESIGN.md:151 is a URL-free Google-favicon lookup / not-a-captured-first-party-mark / not-a-portable-mark-file sentence. Named gaps has no first-party-mark sentence. First-party mark-file existence is not claimed from this lookup. |
| YAML `omd`, `verified`, `verification_v2`, token claims, `tokens.source` / `extracted` / `components_harvested` / `note` | mixed: `omd` / `verified` / `verification_v2` / `extracted` YAML keys 분리 → provenance; `live-extract`와 token note와 `components_harvested: true`는 본문에도 | 출처 원장·freshness·Proof. `verification_v2.schema: 2` provenance.md Identity 17 + Freshness 37 + first-class 45 (A1c). `tokens.source: live-extract` dual provenance.md:18,30 + Scope DESIGN.md:11 (E2a). Token note (product home / legal-document chrome / unobserved states) dual provenance.md:22 + Scope DESIGN.md:11 (E2a). `components_harvested: true` dual provenance.md:20,30,137 + Capture DESIGN.md:162 (E2a). YAML `verified` / `extracted` 2026-07-13 freshness 36 / 42. Footer Verified provenance.md:43 only. Claim ledger provenance.md:88–118. YAML has no `ds.type`. None invented. |
| YAML `tokens.colors` / `typography` / `spacing` / `rounded` / `components` | 옮김 → Foundations, Typography & Assets, Components & States | 검증된 값만 최소 필드 단위. Colors DESIGN.md:79–83. YAML unitless `lineHeight` `1.25` / `1.29` / `1.38` / `1.67` / `1` 비율 보존 DESIGN.md:137,141–145,147 + provenance.md:45,143 (A1a). Body-table 50px / 36px / 36px / 30px / 16px는 size-local. YAML `spacing` xs 4, sm 8, md 12, lg 24, xl 36 unitless DESIGN.md:89. YAML `rounded` sm 4, md 8, lg 12 DESIGN.md:95. YAML `type: listItem` 컴포넌트별 보존 DESIGN.md:168,271; `Kind: interactive`로 뭉개지 않음 (A1b). Home navigation / outlined button YAML type 없음·발명 없음 DESIGN.md:168. legal-list-item `fg` `#0C0C0C`는 그 컨트롤의 renderable field DESIGN.md:81,274,281 — 일반 Foreground와 합치지 않음 (A4). YAML use strings Type roles DESIGN.md:141–145 + list-item 280. |
| §1 Visual Theme & Atmosphere | 옮김 → Experience `scope` claim, distinctive traits | 제품/표면 범위 DESIGN.md:9–17. 세 캡처 URL dual Scope DESIGN.md:11 + provenance.md Surfaces 51–53 / Sources 59–61 / Tier 1 68–70 (E2a). CLASS101+ / creator-centre official-doc URLs dual Scope DESIGN.md:11 + provenance.md Sources 62–63 / Tier 1 71–72 / Narrative 82–83 (E2a). Scope DESIGN.md:13 restates that narrative without those URL strings. `live-extract` token note DESIGN.md:11. 분위기 요약 Distinctive DESIGN.md:36–45. 반복 분위기 문장은 범위에 기여하는 요약만. |
| §1 / §11 공식 CLASS101+·creator URL | 분리 → provenance; 본문에 범위 경계로도 유지 | 서사 출처 provenance.md:62–63,71–72,82–83. 본문은 official-doc ≠ token-capture 경계를 Experience Scope DESIGN.md:11에 유지 (E2a). Pretendard GitHub URL은 provenance.md:64,73,84 only. |
| §2 Color Palette & Roles | 옮김 → Foundations semantic color | `#FF5D00` `#FFFFFF` `#0C0C0C` `#000000` `#373737` 및 `rgba(55, 55, 55, 0.8)` DESIGN.md:79–83. success/error/warning/CTA-background/hover/shadow 생략 제약 DESIGN.md:85, Named gaps 339. Unmerged-role extras 인접 완전 B2a DESIGN.md:77 (B2/B2a). |
| §3 Typography Rules | 옮김 → Typography & Assets | 증거 등급 DESIGN.md:119–125. Pretendard Variable 753 uses / 92 jsDelivr FontFace DESIGN.md:123,131–132. Declared-only fallbacks DESIGN.md:124. 역할 메트릭 DESIGN.md:137–147. 미확인 family 대체 금지 DESIGN.md:133. |
| §3 Pretendard license URL | 분리 → provenance; 본문에 자산·증거 등급으로도 유지 | 라이선스 원장 provenance.md:64,73,84. 본문은 SIL OFL과 “폰트 자산이지 Class101 브랜드 자산이 아님” DESIGN.md:125,153 (E2a). URL 문자열은 provenance only. |
| §4 Component Stylings | 옮김 → Components & States | Home navigation button DESIGN.md:170–192; Home outlined button DESIGN.md:194–217 (YAML type 없음·발명 없음); Home tab wrapper Anatomy `div[role="tab"]` DESIGN.md:219–241; Legal-document tab Anatomy `button[role="tab"]` DESIGN.md:243–266; Legal-document list item Type: listItem DESIGN.md:268–283, kind/map 생략 (C4). Capture selector는 provenance.md:124–130 only. |
| §4 “interactionCount: 0” / default-only | 옮김 → Components & States capture record | DESIGN.md:45,160–164. 관측 default만 본문에 남김. coverage 완료 주장 없음 (C3, 166). |
| §4 footer **Verified** / Tier 1 / Tier 2 / Conflicts / `#202020` 제거 문장 | 분리 → provenance; `#202020` 제거 문장은 본문에도 | freshness·원장 provenance.md:32–45,66–78,134. Legacy `#202020` 비승격 dual capture record DESIGN.md:164 + Avoid 65 + Named gaps 340 + provenance.md:145 (E2a). |
| §5 Layout Principles | 옮김 → Layout & Platforms | `1440×900`, `6,121px`, 16px controls/tabs, 40px display DESIGN.md:290. grid/max width/carousel/card ratio/mobile/sticky는 원본대로 생략 DESIGN.md:290. 인접 완전 B2a DESIGN.md:288 (B2/B2a). |
| §6 Depth & Elevation | 옮김 → Foundations elevation | `box-shadow: none` 관측 범위만 DESIGN.md:105. overlay/hover 미관측은 원문 문장. modal/sheet/dropdown/sticky/promotional elevation 부정은 만들지 않음 (D1). |
| §7 Do's | 옮김 → Experience principles (capture-bound application) | DESIGN.md:55–59. 브랜드 적용 규칙. Governance 통제 문구에 넣지 않음. |
| §7 Don'ts | 옮김 → Experience avoid | DESIGN.md:61–67. 브랜드 금지. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms | No responsive transition. desktop `1440×900` only. mobile/tablet/touch/safe-area/media unresolved DESIGN.md:292. |
| §9 Agent Prompt Guide | 삭제; 고유 제약만 옮김 | 도구별 명령·복붙 프롬프트 삭제. Pretendard Variable / nav button 8px·38px / outlined button 12px·`rgba(255,255,255,0.298)`·14px 13px·50px는 이미 Typography/Components에 있음. §9에만 있던 **“only when its context warrants it”** 는 Home outlined button DESIGN.md:208로 옮김 (A3). §9 **modal sheets** 금지는 Named gaps DESIGN.md:342로 옮김 (A3). 슬롯 없는 위임 없음. `omd-apply` / `npx omd` 없음. |
| §10 Voice & Tone | 옮김 → Content & Locales | creator-centre 세 문장과 use boundary DESIGN.md:297–303. 합성 consumer-product 보이스 샘플 없음. 원본에 없는 도메인 부정 claim 신설 없음 (D1). |
| §10 creator-centre 인용 | 본문 + 서사 URL provenance | 세 headline DESIGN.md:301–303. creator URL dual Scope DESIGN.md:11 + provenance.md:63,72,83 (E2a). |
| §11 Brand Narrative | 옮김 → Experience `scope` | two-sided marketplace / CLASS101+ subscription / creator publishing DESIGN.md:13,17. 연표·founder 생략 제약 DESIGN.md:17, Named gaps 346. CLASS101+ / creator URLs dual Scope DESIGN.md:11 + provenance.md:62–63,71–72,82–83 (E2a). |
| §12 Principles | 옮김 → Experience principles | 세 원칙과 *UI implication* DESIGN.md:47–53. 인접 본문에 derived editorial implementation inference / not Class101-authored or a separately published UI specification 한정 (B2/B2a). Governance 일반 문구는 그 한정의 대체물이 아님. |
| §13 Personas | mixed: no-persona 경계 옮김 → Experience Audience; 값 생략; wrapper 분리 → provenance omission ledger | 원본 본문 “No first-party user-research… Do not substitute fictional learners or creators”는 portable Audience DESIGN.md:32에 유지. `[FILL IN]` wrapper는 provenance.md:156 omission ledger (E2b). 가상 biography 승격 없음. sidecar 재수록 없음 (D2). Primary tasks 3건은 §13 placeholder가 아니라 captured Korean product home + official CLASS101+ + creator centre (`count=3` DESIGN.md:20,25–27). The portable body does not call those tasks independently verified (E2c). |
| §14 States | 옮김 → Components & States capture record + per-component applicability; placeholder wrapper 분리 → provenance omission ledger | 본문 보존: empty/loading/success/error/disabled/skeleton/validation 미관측; no state token or copy from default-state components DESIGN.md:162. `[FILL IN]` wrapper는 provenance.md:157 (E2b). 선언 컴포넌트는 §4.4를 닫되 미관측 시각값은 발명하지 않음 DESIGN.md:166. `not captured`를 `not-applicable` 사유로 쓰지 않음 (C1). Home navigation / outlined button loading·error·success omitted (C2) DESIGN.md:192,217. Home tab / legal-document tab loading·error·success 역할별 not-applicable DESIGN.md:239–241,264–266 (C2). Legal-document list item은 kind/map 생략 DESIGN.md:168,283 (C4). graph 위임 없음. coverage 완료 주장 없음 (C3, 166). |
| §15 Motion & Easing | 옮김 → Foundations motion; placeholder wrapper 분리 → provenance omission ledger | 무출처 커브 없음(삭제할 값 없음). 원문 “no transition, animation, easing, or reduced-motion observations. Do not promote durations or curves.” DESIGN.md:109. `[FILL IN]` wrapper는 provenance.md:158 (E2b). Foundations Motion DESIGN.md:111은 B3 다섯 증거 종류(transition properties · animation name · duration · easing · reduced-motion behavior)를 컴포넌트별 computed 관측한 뒤에만 승격한다는 게이트를 전문 명시하고, “Official documentation of a single curve or duration is not that gate”를 포함한다. Named gaps DESIGN.md:349는 같은 다섯 종류를 inventory form으로 나열한다. B3 전문 승격 게이트 문장은 Foundations Motion 111 only (B3, E2c). |
| Footer **Verified** / Tier 1 / Tier 2 / Conflicts | 분리 → provenance | freshness·원장 provenance.md:32–45,66–78. Dual (E2a): three capture URLs는 Scope 11 + Surfaces/Sources/Tier 1. CLASS101+ / creator URLs는 Scope 11 + Sources/Tier 1/Narrative (Scope 13 is narrative without those URL strings). Conflicts unresolved: none. Portable body does not re-host Tier 2 failure strings (E1); they are provenance.md:77–78. Source footer names no `.verification.md` Proof pointer; none was invented. |

### F1 / F2 (v7 mandatory final passes)

Worker F1/F2 dest maps were this worker session’s greps. Worker completeness and worker SHA are not current-class (E2c). F3 re-grep dests follow. This is not a catalog-adoption claim (E2c). Reconstruction-boundary exemption not used.

### F1 B2a scan (F3 reread)

Adjacent complete B2a sites (re-grep `derived editorial implementation inference`): Scope 9 product-definition / catalog-homepage-identity; 11 named evidence-domain coverage / official-doc-not-token-capture / `live-extract` token note; 13 CLASS101+ and creator-centre narrative-not-tokens; 15 atmosphere white-typographic-storefront / compact-neutral-controls / product-home-separated-from-legal-document-chrome; 17 two-sided-marketplace synthesis / omitted founding-history; Primary tasks 23 not-from-§13; Audience 32 no-individual-personas; Distinctive 36 unmerged-role list head; Principles 49 three stems and named *UI implication* tails; 55 capture-bound §7 Do’s; Avoid 63 source §7 Don’ts; Semantic 75 no-public-token-spec; 77 unmerged-role readings including home-and-tab-`#000000`; 85 omission-causal no-success-error-warning-CTA-background-hover-shadow; Spacing 89 YAML unitless; Shape 97 local harvested geometry; Elevation 105 `box-shadow: none` observed-only / unobserved-hover-and-overlay-omitted; Motion 109 absence as non-promotion; Font 119 evidence-class application; Family 129 Pretendard Variable not Class101-owned / system-face-replacement-forbidden; Type roles 137 YAML ratios scale / `normal` tracking not invented YAML; 147 after-table ratio-product arithmetic; Assets 151 Google-favicon lookup / not-a-captured-first-party-mark / not-a-portable-mark-file; 153 SIL OFL licensed-sourced; Capture 160 graph-not-adopted; 164 legacy-`#202020`-removed-rather-than-promoted; 166 §4.4 applicability-by-meaning / omitted-L-E-S; 168 YAML type omitted vs `listItem`; Home outlined 208 §9 use bound; Legal-document tab Surface 256 official-documentation-chrome-not-product-navigation; list-item field note 281; Layout 288 desktop-capture not cross-viewport; 292 no-responsive-transition / harvested control sizes not cross-viewport; Content 297 warm-polite-register / insufficiency / tone-table use-boundary labels.

Left unqualified as first-party, source-stated, observed-technical, or Core policy: Class101 product identity restatement after 9; three capture URLs and token note restatement after 11; CLASS101+ / creator-centre first-party sentences after 13; atmosphere restatement after 15; founding-history omission restatement after 17; primary-task list 25–27; Audience source §13 sentences after 32; Distinctive bullets 38–45; Principles stems’ first-party sentences 51–53; capture-bound Do’s 57–59; Avoid bullets 65–67; Semantic bullets 79–83; harvested spacing 91; YAML rounded 95 and shape list 99–101; `box-shadow: none` restatement 105; source motion absence restatement 109; B3 five-kind gate 111; Font table 123–125; Family bullets 131–133; Type-role rows 141–145; Assets restatement after 151/153; Capture source-state sentences 162; Core C2 omit sentences 192/217; tab role-based not-applicable 239–241 / 264–266; list-item anatomy 270–280 and C4 283; Layout measurements 290; Content table 301–303; Governance controlled copy 311/317–320/326/332; Named gaps inventory 337–349.

### F2 E2 grep (F3 value + field/role context)

- Catalog `primary_color` `#FF5D00` → DESIGN 15/36/38/59/79 + provenance 14/26/45/144. Semantic 77 has no hex. Avoid 65 has no `#FF5D00`.
- Canvas `#FFFFFF` → DESIGN 36/39/80 + provenance 45/146.
- Foreground `#0C0C0C` → DESIGN 36/40/77/81/274/281 + provenance 45/146.
- Foreground-strong / control text `#000000` → DESIGN 36/40/77/82/176/200/225/249 + provenance 45/146. Semantic 77 names this hex in the unmerged-role limiter.
- Muted `#373737` → DESIGN 36/41/83 + provenance 45/146.
- Title-sample `rgba(55, 55, 55, 0.8)` → DESIGN 36/41/83 + provenance 45/146.
- Outlined-button `rgba(255,255,255,0.298)` → DESIGN 36/201 + provenance 45/132/146.
- Legal-tab `rgb(0,0,0)` → DESIGN 250 + provenance 132.
- Legacy `#202020` → DESIGN 65/164/340 + provenance 145.
- Google favicon URL → provenance 15/28 only. DESIGN 151 is URL-free lookup / not-a-captured-first-party-mark / not-a-portable-mark-file. Named gaps has no first-party-mark sentence. First-party mark-file existence is not claimed.
- Homepage `https://class101.net` → Scope 9 + provenance 13/24. DESIGN 11 names captured `/ko` routes, not catalog identity.
- Capture URLs home/giftcard/privacy → Scope 11 + provenance Surfaces 51–53 / Sources 59–61 / Tier 1 68–70.
- CLASS101+ URL → Scope 11 + provenance 62/71/82. Scope 13 has no URL string.
- Creator URL → Scope 11 + provenance 63/72/83. Scope 13 has no URL string.
- Pretendard GitHub URL → provenance 64/73/84 only. Portable 125/153 restate SIL OFL without the URL.
- Tier 2 getdesign.md / refero → provenance 77–78 only.
- `tokens.source: live-extract` → provenance 18/30 + Scope 11.
- `components_harvested: true` → provenance 20/30/137 + Capture 162.
- `verification_v2.schema: 2` → provenance 17/30/37/45. Proof 136 is `verification_v2 schema 2` without the `.schema` key; not a dest of that key.
- YAML lineHeight `1.25` / `1.29` / `1.38` / `1.67` / `1` → DESIGN 137,141–145,147 + provenance 45/143.
- YAML tracking `-1.12px` / `-0.616px` → DESIGN 137/141–142.
- YAML spacing xs 4 / sm 8 / md 12 / lg 24 / xl 36 → DESIGN 89.
- YAML rounded sm 4 / md 8 / lg 12 → DESIGN 95.
- `type: listItem` → DESIGN 168/271 + provenance 140.
- `role="tab"` → DESIGN 223/247 + provenance 128/129/140.
- Home nav 108px × 38px → DESIGN 180/183/292.
- Outlined 240px × 50px / `14px 13px` / 12px → DESIGN 91/100/202–205/292.
- Home tab 97px × 44px → DESIGN 229/292.
- Legal tab 61px × 45px / `12px 0px 10px` → DESIGN 91/252/254/292.
- List item `0px 0px 0px 24px` / 28px / 4px → DESIGN 91/276/278.
- `6,121px` → DESIGN 290 only. `1440×900` → DESIGN 290/292.
- `box-shadow: none` → DESIGN 105.
- B3 full promotion-gate sentence → Foundations Motion DESIGN.md:111 only. Named gaps 349 is inventory form.
- Capture selectors `data-omd-capture` / `data-testid` → provenance 124–130; `data-omd-capture` also named on 132 as not re-hosted in portable Use lines.
- Home outlined “only when its context warrants it” → DESIGN 208.
- modal sheets → Named gaps 342.
- snackbar → Capture 164 + Named gaps 341.
- Persona biographies absent from DESIGN.md Audience 32 and from provenance 152–158 (omission ledger quotes the source “do not substitute” sentence; no fictional labels re-hosted).
- Home navigation / outlined L/E/S omit sentences → 192/217, not destination `not-applicable` rows.
- Tab role-based `not-applicable` → 239–241 / 264–266 (not “not captured”).
- `[FILL IN]` wrappers → provenance 156–158 only; DESIGN.md has none.

Command outputs (not catalog adoption, E2c):

- `node test-v2/tools/migrate-reference.mjs --brand class101 --gate-only` → PASS, problems `[]`
- `node scripts/migrate-design-md-core.cjs --input docs/design-md-weight/migrated/class101/DESIGN.md --check --require-portable-core --json` → exit 0, `portable_core: true`
- Post-F3 DESIGN.md SHA-256 `5278e4dd2d32f166d5c0af9b850a1e151a95e0436999097acf3a4608fce854e2`
- Worker SHA `ab304f713eaef002c9b06d28fe3f1fdebb59b7a4bb0c25362290c7cf2ad6d950` is not current-class

F3 감사 완료. sol 의미 레인 대기. 카탈로그 채택 아님.

## Revision 2026-08-25 (wave15 sol resubmit)

Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v7. Source remainder: `docs/reviews/t2-1-wave15-2026-08-25-sol-full.md` class101 conditions 1–4. New F3 not required. E2c: this revision does not re-assert F1/F2/F3 closed. Not a catalog-adoption claim.

1. DESIGN.md:151 first-party mark-file absence and ownership-unclaimed deleted. Google favicon remains catalog lookup / not a captured first-party mark / not a portable mark file.
2. provenance.md:28/178, migration-log dests, and audit current-class match that disposition. Named gaps has no first-party-mark sentence.
3. Dest pointers grepped against the current three files.
4. `--gate-only` and portable Core re-run; SHA below. Existing fresh F3 execution evidence is retained.

Current DESIGN SHA-256 `f62a7e23c1a3d7baa33ed730f311e4456065412ad787091bebc7c75297a555ac`. `node test-v2/tools/migrate-reference.mjs --brand class101 --gate-only` → PASS, problems `[]`. `node scripts/migrate-design-md-core.cjs --input docs/design-md-weight/migrated/class101/DESIGN.md --check --require-portable-core --json` → exit 0 / `portable_core: true`. Command outputs, not catalog adoption (E2c).
