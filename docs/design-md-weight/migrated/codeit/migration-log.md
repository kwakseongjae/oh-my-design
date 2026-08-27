# Codeit migration log

Source: `web/references/codeit/DESIGN.md`
Destination: `docs/design-md-weight/migrated/codeit/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/codeit/provenance.md`
Date: 2026-08-25
Worker: grok-4.6 T2
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v8
Portable Core: `evaluatePortableCore` → `portable_core: true`, `level: portable-core`. Gate `migrate-reference.mjs --gate-only` → PASS, problems `[]`. This is not a catalog-adoption claim (E2c).
카탈로그 채택 아님.

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (id, name, display_name_kr, country, category, homepage, primary_color, logo) | 분리 → provenance; homepage 옮김 → Experience Scope; `primary_color` 옮김 → Distinctive + Foundations + capture-bound Do’s; logo URL 분리 → provenance, identity-boundary 옮김 → Assets | Portable file has no frontmatter. Name kept as H1 `Codeit Design System` DESIGN.md:1. Homepage `https://www.codeit.kr` dual Scope DESIGN.md:9 + provenance.md Identity 14 / dest 24 / Surfaces 48 / Sources 57 / Tier 1 66 / Inspect notes 115 (E2a). Catalog `primary_color` `#9933ff` dual provenance.md:15,22,26,42,115,117,152 + DESIGN.md Scope token note 13, atmosphere 15, Distinctive 39/41, Principles limiter 52 / stem 55, capture-bound Do’s 60/62, Foundations Purple 90/92, after-list 108, Hero/Chip/Pill/Badge 242/268/297/455 (E2a). Google s2 favicon URL `https://www.google.com/s2/favicons?domain=codeit.kr&sz=128` is provenance.md:16,28 only. Portable Assets DESIGN.md:205 is a URL-free Google-favicon lookup / not-a-captured-first-party-mark / not-a-portable-mark-file sentence. First-party mark-file existence is not claimed from this lookup. `display_name_kr` 코드잇 provenance.md:11 only. |
| YAML `omd`, `verified`, `added`, token claims, `tokens.source` / `extracted` / `components_harvested` / `note` | mixed: `omd` / `verified` / `added` / `extracted` YAML keys 분리 → provenance; `live-extract`와 token note와 `components_harvested: true`는 본문에도 | 출처 원장·freshness·Proof. YAML has no `verification_v2`; absence recorded provenance.md:30,42,144 (A1c). None invented. `tokens.source: live-extract` dual provenance.md:18,30 + Scope DESIGN.md:9 (E2a). Token note dual provenance.md:22 + Scope DESIGN.md:13 (E2a). `components_harvested: true` dual provenance.md:20,30,145 + Capture DESIGN.md:214,216 (E2a). YAML `verified` / `added` / `extracted` 2026-06-26 freshness 36/37/38. Footer Verified provenance.md:40 only. Claim ledger provenance.md:86–107. YAML has no `ds.type`. None invented. |
| YAML `tokens.colors` / `typography` / `spacing` / `rounded` / `shadow` / `components` | 옮김 → Foundations, Typography & Assets, Components & States | 검증된 값만 최소 필드 단위. Colors DESIGN.md:92–106. YAML unitless `lineHeight` `1.21` / `1.29` / `1.38` / `1.43` / `1.67` / `1.50` 비율 보존 DESIGN.md:186,190–197,199 + `1.50` also source-§3 restatement DESIGN.md:201 + provenance.md:42,151 (A1a). Body-table 82px / 62px / 44px / 40px / 30px는 size-local. rem `4.25rem` / `3.00rem` / `2.00rem` / `1.75rem` / `1.13rem` / `1.00rem` / `0.81rem` DESIGN.md:190–197. YAML `spacing` xs 4, sm 8, md 12, base 16, lg 20, xl 24, xxl 32, section 48 unitless dual DESIGN.md:112,497. YAML `rounded` sm 6, md 8, base 12, lg 20, xl 24, pill 9999 DESIGN.md:39,45,116,118,125 + provenance.md:42,153. YAML `type: button` ×5 컴포넌트별 보존 DESIGN.md:240,266,295,323,351; `type: card` ×3 DESIGN.md:405,420,435; `type: tab` DESIGN.md:471; `type: input` DESIGN.md:380; `type: badge` DESIGN.md:453 + provenance.md:147. `Kind: interactive`로 뭉개지 않음 (A1b). Hero CTA `fg` `#ffffff` / plan-card fields stay on those controls DESIGN.md:108 — 일반 Canvas/On-primary와 합치지 않음 (A4). |
| §1 Visual Theme & Atmosphere | 옮김 → Experience `scope` claim, distinctive traits | 제품/표면 범위 DESIGN.md:9–19. 네 캡처 URL dual Scope DESIGN.md:9 + provenance.md Surfaces 48–51 / Sources 57–60 / Tier 1 66–69 / Inspect notes 115–118 (E2a). tech / about official-doc URLs dual Scope DESIGN.md:11 + provenance.md Sources 61–62 / Tier 1 70–71 / Narrative 80–81 (E2a). `live-extract` token note DESIGN.md:9,13. 분위기 요약 Distinctive DESIGN.md:39–48. 반복 분위기 문장은 범위에 기여하는 요약만. |
| §1 / §11 공식 tech·about URL | 분리 → provenance; 본문에 범위 경계로도 유지 | 서사 출처 provenance.md:61–62,70–71,80–81. 본문은 official engineering blog / official company intro ≠ token-capture 경계를 Experience Scope DESIGN.md:11 / 17에 유지 (E2a). sprint.codeit.kr dual Scope 11 + Named gaps 573 + provenance 82,84 (E2a). Font evidence no longer restates those hosts as unnamed typography token surfaces (D1). |
| §2 Color Palette & Roles | 옮김 → Foundations semantic color | 14 hex 전부 DESIGN.md:92–106. Unmerged-role extras 인접 완전 B2a DESIGN.md:90; after-list 108 (B2/B2a). `#9933ff` vs `#8f00ff` / `#760dde` / `#b363fd` 비합침. Canvas `#ffffff` vs on-primary `#ffffff` 비합침. Deep Violet `#760dde`는 active/pressed link-text 색 역할이지 `focus-visible` treatment evidence가 아님 DESIGN.md:94,232 (B1). 94 hex-first bullet may name `focus-visible` on the same line; 232 is one natural prose sentence with literal `focus-visible` and `#760dde`. |
| §3 Typography Rules | 옮김 → Typography & Assets | 증거 등급 DESIGN.md:170–175 (Live computed + Declared-only fallbacks only). Pretendard hero / SpoqaHanSansNeo workhorse DESIGN.md:174,179–180. Declared-only fallbacks DESIGN.md:175. 역할 메트릭 DESIGN.md:186–201. Source `-1px` at 48px unmerged from YAML `-1.0` / `-1.0px` DESIGN.md:44,186,191,201. 미확인 family 대체 금지 DESIGN.md:182. Universal-sheet / exclusive-family / license / loaded-fallback / outside-host-typography negatives deleted (D1). 원본에 없는 OFL/GitHub URL 발명 없음. |
| §4 Component Stylings | 옮김 → Components & States | Hero Primary CTA DESIGN.md:236–260; Membership Chip DESIGN.md:262–289 including §9-only white-header right-aligned local recipe 277; Pill CTA DESIGN.md:291–317; Ghost/Outline DESIGN.md:319–345; Neutral DESIGN.md:347–374; Course Search DESIGN.md:376–400; three cards DESIGN.md:402–447 kind/map 생략 (C4); Course Card local `flat` / `hairline outline` / `no shadow` DESIGN.md:439–445 (A4, not generic Elevation); Count Badge DESIGN.md:449–465 Kind: non-interactive; Navigation tab DESIGN.md:467–492. Capture selector 없음 — 원본 HTML comment에도 `data-omd-capture` 없음, 발명 없음. |
| §4 footer **Verified** / Tier 1 / Tier 2 / Conflicts | 분리 → provenance | freshness·원장 provenance.md:32–42,64–76,142–156. Dual (E2a): four capture URLs는 Scope 9 + Surfaces/Sources/Tier 1/Inspect notes 115–118. tech/about URLs는 Scope 11 + Sources/Tier 1/Narrative. Conflicts unresolved: none. Portable body does not re-host Tier 2 failure strings (E1); they are provenance.md:75–76. |
| §5 Layout Principles | 옮김 → Layout & Platforms + Foundations spacing/shape | 4px base, 4/8/12/16/20/24/32/48, CTA 8px 24px / 10px 32px, card 24px 32px DESIGN.md:112,497. Color-banded sections, 2–3 column plan grid, explore course grid DESIGN.md:497. Whitespace philosophy 인접 완전 B2a DESIGN.md:501. Source §9-only top-nav local recipe DESIGN.md:499. YAML pill 9999 vs 22px / 21px DESIGN.md:118,125. Source Medium `8px–10px` DESIGN.md:118,121. |
| §6 Depth & Elevation | 옮김 → Foundations elevation | Flat / Tint / Card / Elevated 표 DESIGN.md:129–134. YAML `shadow.card` / `elevated` / `none` DESIGN.md:136. Shadow philosophy 인접 완전 B2a DESIGN.md:138. |
| §7 Do's | 옮김 → Experience principles (capture-bound application) | DESIGN.md:60–69. 브랜드 적용 규칙. Governance 통제 문구에 넣지 않음. |
| §7 Don'ts | 옮김 → Experience avoid | DESIGN.md:71–82. 브랜드 금지. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms | Mobile `<640px` / Tablet `640-1024px` / Desktop `1024-1440px` DESIGN.md:503,505–509. Touch-target and collapsing sentences DESIGN.md:511 including Image Behavior `at all sizes`. Source-stated이지 captured cross-viewport pass가 아님 — 인접 완전 B2a DESIGN.md:503. |
| §9 Agent Prompt Guide | mixed: 도구별 명령·복붙 프롬프트 삭제; §9-only 고유 관계는 로컬 레시피로 옮김 | 프롬프트 래퍼/`omd-apply`/`npx omd` 없음. Quick Color / Iteration 값은 Foundations/Components/Experience에 이미 있음. §9-only unique relation: white header + right-aligned membership chip (6px radius, 6px 12px padding) → Membership Chip Field note DESIGN.md:277 + Layout DESIGN.md:499 (A3). Course Card `flat, hairline outline` / `no shadow` → Course Card DESIGN.md:439–445 (A4). YAML chip padding `6px 12px 5px` DESIGN.md:271 is unmerged from §9 `6px 12px padding`. |
| §10 Voice & Tone | 옮김 → Content & Locales | 톤 표 DESIGN.md:518–524. Verbatim voice samples DESIGN.md:528–532. Forbidden register DESIGN.md:534. 합성 보이스 샘플 없음. 인접 완전 B2a DESIGN.md:516 (B2/B2a, E1). Complete-product-microcopy-guide and complete-locale-profile / unobserved-locale negatives deleted (D1). |
| §11 Brand Narrative | 옮김 → Experience `scope`; 서사 원장 분리 → provenance | 5분 학습 사이클 / 제품 범위 / AI GURU / gamified progress DESIGN.md:17. refuse/embrace + “개발도 게임처럼” DESIGN.md:19. 연표·founder 생략 제약 DESIGN.md:17, Named gaps 574. tech/about URLs dual Scope DESIGN.md:11 + provenance.md:61–62,70–71,80–81 (E2a). |
| §12 Principles | 옮김 → Experience principles | 다섯 항목과 *UI implication* DESIGN.md:52–58. 원본 HTML comment가 editorial readings라고 명시. 인접 본문에 derived editorial implementation inference / not Codeit-authored or a separately published UI specification 한정, naming the five stems and UI implications (B2/B2a). Governance 일반 문구는 그 한정의 대체물이 아님. |
| §13 Personas | mixed: no-persona 경계 옮김 → Experience Audience; 가상 biography 삭제, sidecar 재수록 없음 | 원본이 fictional archetypes라고 명시. 정민재 / 한소연 / 오준혁 / 나이 / 도시 는 DESIGN에도 provenance에도 없음 (D2). Audience no-individual-personas-promoted DESIGN.md:35 (B2/B2a). Primary tasks 4건 dests 27–30 are captured-surface outcomes, under adjacent complete B2a as not-from-§13 DESIGN.md:25. The portable body does not call those tasks independently verified (E2c). |
| §14 States | 옮김 → Components & States capture record + per-component applicability | 본문 9행 보존 DESIGN.md:222–230 (Empty×2, Loading×2, Error×2, Success, Skeleton, Disabled) (A2). 선언 컴포넌트는 §4.4를 닫되 미관측 시각값은 발명하지 않음 DESIGN.md:234. `not captured`를 `not-applicable` 사유로 쓰지 않음 (C1). Hero Primary CTA loading·error·success omitted (C2) DESIGN.md:260. Chip / Pill / Ghost loading·error·success 역할별 not-applicable DESIGN.md:287–289 / 315–317 / 343–345 (C2). Neutral loading/error applicable, success omitted DESIGN.md:374. Search loading/success omitted DESIGN.md:400. Nav tab loading·error·success 역할별 not-applicable DESIGN.md:482 / 490–492 (C2). Cards kind/map 생략 DESIGN.md:415,430,447 (C4). Badge non-interactive DESIGN.md:465. Deep Violet `#760dde`는 `focus-visible` treatment evidence가 아님 DESIGN.md:94,232 (one natural sentence; hex-first bullet 94 may keep `focus-visible`). focus-visible 행에 hex 없음 (B1). graph 위임 없음. coverage 완료 주장 없음 (C3, 234). |
| §15 Motion & Easing | mixed: durations·역할·signature·reduced-motion 옮김 → Foundations motion; 무출처 커브 생략 + 원장 | Durations 120ms / 220ms / 320ms DESIGN.md:146–148 (T1-3: duration 유지). Easing 역할/용도 커브 없이 DESIGN.md:152–156. Signature motion + `prefers-reduced-motion` DESIGN.md:160. Exact curves `cubic-bezier(0.2, 0.6, 0.25, 1)` / `cubic-bezier(0.4, 0.0, 1, 1)` / `cubic-bezier(0.25, 0.1, 0.25, 1)` 는 무출처라 승격하지 않음. Dual Motion DESIGN.md:158 + Named gaps DESIGN.md:570 + provenance.md omitted-curves table 136–138 (E2a, E2b). The exact `cubic-bezier(...)` strings are provenance 136–138, not the section head 132. Foundations Motion DESIGN.md:162는 B3 다섯 증거 종류(transition properties · animation name · duration · easing · reduced-motion behavior)를 컴포넌트별 computed 관측한 뒤에만 승격한다는 게이트를 전문 명시하고, “Official documentation of a single curve or duration is not that gate”를 포함한다. Named gaps DESIGN.md:575는 같은 다섯 종류를 inventory form으로 나열한다. B3 전문 승격 게이트 문장은 Foundations Motion 162 only (B3, E2c). |
| Footer **Verified** / Tier 1 / Tier 2 / Conflicts | 분리 → provenance | freshness·원장 provenance.md:32–42,64–76. Dual (E2a): four capture URLs는 Scope 9 + Surfaces/Sources/Tier 1/Inspect notes 115–118. tech/about URLs는 Scope 11 + Sources/Tier 1/Narrative. Conflicts unresolved: none. Source footer names no `.verification.md` Proof pointer; none was invented. |
| HTML comment inspect notes (`rgb(153,51,255)` / `rgb(246,246,248)` / `rgb(179,99,253)` / `rgb(51,50,54)`) | mixed: `rgb(51,50,54)` 옮김 → Font evidence; 나머지 세 삼중항 분리 → provenance | `rgb(51,50,54)` DESIGN.md:174 + provenance.md:115,120. `rgb(153,51,255)` / `rgb(246,246,248)` provenance.md:115,120 only; `rgb(179,99,253)` provenance.md:116,120 only (E2a). Hex equivalents `#9933ff` / `#f6f6f8` / `#b363fd`는 portable 본문에 있음. |

## F1 / F2 (v8 mandatory final passes)

Worker F1/F2 dest maps were the T2 worker session’s greps and are not current-class (E2c). Post-F3 greps below superseded the worker greps. Both worker and post-F3 dest maps are SUPERSEDED by `Revision 2026-08-25 (wave16 sol resubmit)`. This revision does not re-assert F1/F2/F3 closed (E2c). Not a catalog-adoption claim (E2c). Reconstruction-boundary exemption not used. New F3 not run.

### F1 B2a scan (full DESIGN.md reread after F3)

Adjacent complete B2a sites (re-grep `derived editorial implementation inference`): Scope 9 catalog-homepage-as-identity / four-live-inspect-routes / token-extraction-as-`live-extract`; 11 tech-blog-and-about-as-narrative-not-token-capture / sprint.codeit.kr-not-token-surface / values-stay-attached; 13 token-note reconstruction coverage; 15 atmosphere consumer-product-not-dry-portal / open-and-modern / ink-deliberately-not-pure-black / purple-trains-the-eye / two-font-split / playful-violet-to-pink-distinguishes-from-fintech-minimal; 17 product-scope-as-narrative / five-minute-cycle-as-homepage-promise / official-history-and-company-intro-do-not-by-themselves-supply-interface-tokens / broader-corporate-facts-omitted; 19 refuse-and-embrace / 개발도-게임처럼; Primary tasks 25 named four captured-surface outcomes, not-from-§13; Audience 35 no-individual-personas / do-not-substitute / offerings-not-researched-persona-segments; Distinctive 39 unmerged-role list head; Principles 52 five stems with thesis extras and named *UI implication* tails; 60 capture-bound §7 Do’s; Avoid 73 source §7 Don’ts with named causal tails; Semantic 90 unmerged-role readings; 108 after-list component-fields-not-extra-general-inks; Spacing 112 YAML unitless; Shape 118 local harvested geometry / YAML-pill-9999-unmerged; Elevation 138 mostly-flat / homepage-shadowless / subscription-only-elevation; Motion 142 source-stated durations not computed; 158 omitted-unattributed-curves-not-promoted-tokens; 160 source-stated motion rules not computed evidence; Font 170 evidence-class application including no-universal-sheet / outside-captures-unnamed; Family 186 Pretendard hero-only / fallbacks-not-loaded / system-face-replacement-forbidden / 68px-hero-not-in-SpoqaHanSansNeo; Type roles 190 YAML ratios scale / tracking unmerged / hero-18px-700-as-component-field; 203 after-table ratio-product arithmetic / do-not-replace-yaml-ratios; 205 source §3 type principles; Assets 209 Google-favicon lookup / not-a-captured-first-party-mark / not-a-portable-mark-file; 211 illustrations 20px–24px corners; Capture 218 graph-not-adopted / harvest-flag-not-complete-coverage; 220 inspect-notes-default-computed-styles / interaction-paints-omitted; 236 Deep Violet as color role not keyboard-focus treatment; 238 §14 as source-stated copy / omitted-L-E-S / C4 cards / not-complete-coverage; Hero Primary CTA 264 omitted-L-E-S-because-mapping-unresolved; Membership Chip 282 C2 destination/info; Pill 310 C2 destination/info; Ghost 338 C2 destination; Neutral 366 C2 login-submit; Neutral 377 after-table success omitted; Course Search 403 omitted-loading-and-success; cards 418 / 433 / 447 C4 omit kind/map; Count Badge 465 non-interactive status marker; Navigation tab 482 C2 panel-select; Layout 497 four-surface spacing / not-cross-viewport / not-uninspected-lesson-layout-chrome; 499 whitespace-and-rhythm; 501 §8 breakpoints as source-stated not captured cross-viewport; Content 514 derived-voice / named table context labels / forbidden-register-as-source-§10 / not-a-complete-product-microcopy-guide; 534 Korean live-copy as named register not a complete locale profile.

Left unqualified as first-party, source-stated, observed-technical, or Core policy: Codeit product identity restatement after 9; four capture URLs and `live-extract` restatement after 9; tech/about first-party sentences after 11; token-note restatement after 13; atmosphere restatement after 15; product-scope restatement after 17; refuse/embrace restatement after 19; primary-task list 27–30; Audience source §13 sentences after 35; Distinctive bullets 41–48; Principles stems 54–58; capture-bound Do’s 62–69; Avoid bullets 75–82; Semantic bullets 92–106; harvested spacing restatement after 112; YAML rounded 116 and shape list 120–125; elevation table 129–134 and YAML shadow 136; duration/easing tables 144–156; omitted-curves restatement after 158; source motion-rules restatement in 160; B3 five-kind gate 162; Font table 173–179; Family bullets 182–183; Type-role rows 194–201; Assets restatement after 209/211; Capture source-state table 224–234; Core C1/C2/focus-visible applicability sentences after 238; chip/pill/ghost/tab role-based not-applicable rows 290–292 / 318–320 / 346–348 / 490–492; card anatomy 408–416 / 423–431 / 438–445; badge anatomy 450–463; Layout measurements 503–509; Content table 516–522 and verbatim samples 526–530; forbidden-register restatement 532; Governance controlled copy 542/549–552/557/563; Named gaps inventory 568–578.

### F2 E2 grep (value + field/role context, post-F3)

- Catalog `primary_color` `#9933ff` → DESIGN 13/15/39/41/52/55/60/62/90/92/108/246/272/300/455 + provenance 15/22/26/42/115/117/152.
- Bright `#8f00ff` → DESIGN 13/15/39/47/82/90/93 + provenance 22/42/152.
- Deep `#760dde` → DESIGN 13/15/39/47/82/90/94/236 + provenance 22/42/149/152.
- Lavender `#b363fd` → DESIGN 13/15/39/47/60/69/90/95/425 + provenance 22/42/116/152.
- Soft `#c47cfd` → DESIGN 15/39/47/82/96 + provenance 42.
- Pink `#ff52b7` → DESIGN 15/39/47/82/97 + provenance 42.
- Ink `#333236` → DESIGN 13/15/39/42/60/64/73/76/90/98/226/230/328/357/386/474/476/477 + provenance 22/42.
- Night `#080c14` / plum `#3d1457` → DESIGN 15/39/47/99/100/509 + provenance 42.
- Canvas / on-primary `#ffffff` → DESIGN 15/39/42/60/65/90/101/106/108/247/273/301/410/426/440/456/473/497 + provenance 42/153.
- Surface `#f6f6f8` → DESIGN 15/42/60/65/90/102/132/233/356/385/497 + provenance 42/115/117/118.
- Violet surface `#f8ecff` → DESIGN 15/42/60/65/90/103/132/497 + provenance 42.
- Violet tint `#f3e1fd` → DESIGN 90/104 + provenance 42.
- Pink surface `#ffebf7` → DESIGN 90/105 + provenance 42.
- Google favicon URL → provenance 16/28 only. DESIGN 209 is URL-free lookup / not-a-captured-first-party-mark / not-a-portable-mark-file.
- Homepage `https://www.codeit.kr` → Scope 9 + provenance 14/24/48/57/66/115.
- Capture URLs subscription/explore/signin → Scope 9 + provenance Surfaces 49–51 / Sources 58–60 / Tier 1 67–69 / Inspect notes 116–118.
- tech.codeit.kr → Scope 11 + provenance 61/70/80.
- about.codeit.com/ko/ → Scope 11 + provenance 62/71/81.
- sprint.codeit.kr → Scope 11 + Font 179 + Named gaps 575 + provenance 82/84.
- Pretendard GitHub / OFL URL → none. Source had none; none invented.
- Tier 2 getdesign.md / refero → provenance 75–76 only.
- `tokens.source: live-extract` → provenance 18/30 + Scope 9.
- `components_harvested: true` → provenance 20/30/145 + Capture 218/220.
- `verification_v2.schema` → absent in source; absence provenance 30/42/144. None invented.
- YAML lineHeight `1.21` / `1.29` / `1.38` / `1.43` / `1.67` / `1.50` → DESIGN 190,194–201,203 + `1.50` also 205 + provenance 42/151.
- rem `4.25rem` / `3.00rem` / `2.00rem` / `1.75rem` / `1.13rem` / `1.00rem` / `0.81rem` → DESIGN 194–201.
- YAML spacing xs 4 / sm 8 / md 12 / base 16 / lg 20 / xl 24 / xxl 32 / section 48 → DESIGN 112,497.
- YAML rounded sm 6 / md 8 / base 12 / lg 20 / xl 24 / pill 9999 → DESIGN 39/45/116/118/125 + provenance 42/153.
- `type: button` → DESIGN 244/270/298/326/354 + provenance 147.
- `type: card` → DESIGN 408/423/438 + provenance 147.
- `type: tab` → DESIGN 471 + provenance 147.
- `type: input` → DESIGN 383 + provenance 147.
- `type: badge` → DESIGN 453 + provenance 147.
- Hero CTA 10px 32px / 48px / 18px / 700 → DESIGN 249–251,112,497 + height 48px also 509.
- Chip 6px 12px 5px / 32px → DESIGN 275–276.
- Pill 22px / 43px → DESIGN 302/304.
- Ghost 8px 24px / 45px / `rgba(51,50,54,0.2)` → DESIGN 330–332.
- Neutral 14px 0px / 55px → DESIGN 359–360.
- Search 21px / 8px 16px / 40px → DESIGN 387–389,509. Pill padding `8px 16px` is 303, not a Search dest.
- Plan card 24px / `rgba(51,50,54,0.1)` / `rgba(0,0,0,0.08)` → DESIGN 411–413.
- Recommended `#b363fd` / `rgba(0,0,0,0.2)` → DESIGN 425/428.
- Course card 20px / `rgba(51,50,54,0.15)` → DESIGN 441–442.
- Badge 0px 6px / 28px / 15px → DESIGN 458–460.
- Nav 80% → DESIGN 476.
- Breakpoints 640px / 1024px / 1440px → DESIGN 501,503–507.
- Durations 120ms / 220ms / 320ms → DESIGN 146–148 + provenance 132.
- Exact cubic-bezier three values → DESIGN 158/570 + provenance 136–138 (E2a). Section head 132 names the omission, not the curve strings.
- `rgb(51,50,54)` → DESIGN 175 + provenance 115/120.
- `rgb(153,51,255)` / `rgb(246,246,248)` → provenance 115/120 only. `rgb(179,99,253)` → provenance 116/120 only.
- B3 전문 → Foundations Motion DESIGN.md:162. Named gaps 578 is inventory form only (E2c).
- §13 fictional names → neither DESIGN.md nor provenance.md (D2).
- B3 유지 주장은 Foundations Motion 162에 다섯 종류 + official-documentation 절이 실재할 때만 적음 (E2c).

## Revision 2026-08-25 (wave16 sol resubmit)

Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v8. Source remainder: `docs/reviews/t2-1-wave16-2026-08-25-sol-full.md` §3 codeit conditions 1–7. New F3 not run. Prior worker and post-F3 dest maps in this file are SUPERSEDED. E2c: this revision does not re-assert F1/F2/F3 closed. Not a catalog-adoption claim.

### Conditions

1. **E3 restore + incident.** `worker-log.txt` claimed splitting a B2a sentence because the gate flagged `focus-visible` + hex on the same line. Exact false-positive shape: a **prose** line containing both `focus-visible` and a hex (not a state-table row). The B1 gate is now table-row-aware (`migrate-reference.mjs`). Natural sentence restored at DESIGN.md:232 using literal `focus-visible` on the same line as `#760dde`: “YAML `primary-deep` `#760dde` is a color role for active / pressed link text, not `focus-visible` treatment evidence.” Preceding B2a limiter on the same line matches (`focus-visible`, not `keyboard-focus`). Deep Violet bullet DESIGN.md:94 keeps hex-first list pattern and names `focus-visible` on the same bullet. No sentence split. No synonym dodge. Incident also recorded in provenance Proof notes 149 / 162.

2. **Source forms + §9 unique relations (A1/A3/A4).** Source `-1px` at 48px restored as a distinct form next to YAML `-1.0` / `-1.0px` (DESIGN.md:44, 186, 191, 201). Source Medium range `8px–10px` (en-dash) restored as the Medium label (DESIGN.md:118, 121); YAML `md` 8 and hero 10px remain unmerged. §9-only unique relation — white header + right-aligned membership chip (6px radius, 6px 12px padding) — is a local recipe at Membership Chip Field note DESIGN.md:277 and Layout DESIGN.md:499, not a prompt wrapper. `omd-apply` / `npx omd` absent. YAML chip padding `6px 12px 5px` DESIGN.md:271 is unmerged. Course Card local fields `flat` / `hairline outline` / `no shadow` are DESIGN.md:439–445; generic Elevation is not a substitute. §9 row in this log no longer claims unique values = 0.

3. **Image Behavior.** `at all sizes` restored at Assets DESIGN.md:207 and Layout DESIGN.md:511. First-party catalog-imagery / ownership promotion deleted. Official-surface appearance is not ownership evidence.

4. **Evidence class.** Portable Scope DESIGN.md:11 / 17 now matches actual class: official engineering blog + official company intro. “Official history pages” deleted. Provenance Narrative 80–81 already had this class.

5. **D1 unsupported negatives deleted** from Font table, Family extras, Named gaps, Content: universal typography sheet / Codeit-exclusive distributed family / license / loaded-fallback / outside-host typography coverage audit; captured first-party mark-file gap; complete product-microcopy guide / locale profile / unobserved locale. Kept: observed Pretendard/Spoqa, fallbacks-as-fallbacks, named sources, Google favicon lookup/not-captured/not-portable (DESIGN.md:205 URL-free + provenance-only URL) without claiming a first-party file does not exist.

6. **Tier-2 literals.** provenance.md:75–76 restored to canonical form `getdesign.md/codeit`, `styles.refero.design` (no `https://`).

7. **SHA + gates.** Greps below are POST-EDIT. New F3 not run. Prior dest maps SUPERSEDED. Not catalog adoption. F1/F2/F3 not claimed closed (E2c).

### F2 E2 grep (POST-EDIT line numbers)

- E3 natural sentence `focus-visible` + `#760dde` (one prose line, not a state-table row) → DESIGN 232. Hex-first Deep Violet bullet with `focus-visible` → DESIGN 94. `keyboard-focus` → DESIGN none.
- Source `-1px` at 48px → DESIGN 44 / 186 / 201. YAML `-1.0` / `-1.0px` → DESIGN 44 / 186 / 191.
- Source Medium `8px–10px` → DESIGN 118 / 121. Slug `8px-10px` → DESIGN none.
- §9 white header + right-aligned chip (6px radius, 6px 12px padding) → DESIGN 277 / 499. YAML chip padding `6px 12px 5px` → DESIGN 271.
- Course Card hairline / flat / no shadow → DESIGN 439 / 440 / 441 / 445.
- Image Behavior `at all sizes` → DESIGN 207 / 511. `first-party catalog imagery` / `at the sizes named` → DESIGN none.
- Official engineering blog + official company intro → DESIGN 11 / 17. `official history` → DESIGN none.
- Font evidence Live computed + Declared-only fallbacks only → DESIGN 170 / 174 / 175. Universal-sheet / exclusive-family / license / outside-host-typography rows → DESIGN none. Family fallbacks-as-fallbacks (no loaded-fallback audit) → DESIGN 182.
- Google favicon lookup / not-a-captured-first-party-mark / not-a-portable-mark-file → DESIGN 205. URL → provenance 16 / 28 only. Captured first-party mark-file Named gap → none.
- Named gaps remaining → DESIGN 570 curves / 571 treatments / 572 L-E-S visuals / 573 sprint·tech·about token surfaces / 574 founding chronology / 575 B3 five kinds. Deleted font-owned / mark-file / locale-profile gaps → none.
- Content voice B2a → DESIGN 516. Complete-microcopy-guide / complete-locale-profile / unobserved-locale → DESIGN none.
- Tier 2 `getdesign.md/codeit` / `styles.refero.design` (no scheme) → provenance 75 / 76. `https://getdesign.md` / `https://styles.refero.design` → none.
- Catalog `primary_color` `#9933ff` → DESIGN 13/15/39/41/52/55/60/62/90/92/108/242/268/277/297/455/499 + provenance 15/22/26/42/115/117/152.
- Deep `#760dde` → DESIGN 13/15/39/47/82/90/94/232 + provenance 22/42/149/152.
- `type: button` → DESIGN 240/266/295/323/351. `type: card` → DESIGN 405/420/435. `type: tab` → 471. `type: input` → 380. `type: badge` → 453.
- YAML lineHeight `1.21` / `1.29` / `1.38` / `1.43` / `1.67` / `1.50` → DESIGN 186,190–197,199 + `1.50` also 201.
- YAML spacing xs 4 … section 48 → DESIGN 112,497. YAML rounded pill 9999 → DESIGN 116/125.
- `components_harvested: true` → provenance 20/30/145 + Capture 214/216.
- Google favicon URL → provenance 16/28 only.
- Homepage `https://www.codeit.kr` → Scope 9 + provenance 14/24/48/57/66/115.
- tech.codeit.kr / about.codeit.com → Scope 11/17 + provenance 61–62/70–71/80–81.
- sprint.codeit.kr → Scope 11 + Named gaps 573 + provenance 82/84 (no Font typography-audit dest).
- `rgb(51,50,54)` → DESIGN 174 + provenance 115/120.
- Exact cubic-bezier three values → DESIGN 158/570 + provenance 136–138.
- B3 전문 → Foundations Motion DESIGN.md:162. Named gaps 575 is inventory form only.
- §13 fictional names → neither DESIGN.md nor provenance.md.
- `omd-apply` / `npx omd` → DESIGN none.

Current DESIGN SHA-256 `c64a9f0258b6db622480a2116af5eb1d6e9ff9d9c367c24f86640390f6538286`. `node test-v2/tools/migrate-reference.mjs --brand codeit --gate-only` → PASS, problems `[]`. `node scripts/migrate-design-md-core.cjs --input docs/design-md-weight/migrated/codeit/DESIGN.md --check --require-portable-core --json` → exit 0 / `portable_core: true`. Command outputs, not catalog adoption (E2c). Restored `focus-visible`+hex prose line was not split; gate did not flag it.
