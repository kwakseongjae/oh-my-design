# Classting migration log

Source: `web/references/classting/DESIGN.md`
Destination: `docs/design-md-weight/migrated/classting/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/classting/provenance.md`
Date: 2026-08-24
Worker: grok-4.6 T2
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v7
Portable Core: command outputs are recorded in the F2 block below. This is not a catalog-adoption claim (E2c).
카탈로그 채택 아님.

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (id, name, country, category, homepage, primary_color, logo) | 분리 → provenance; homepage 옮김 → Experience Scope; `primary_color` 옮김 → Scope atmosphere/duality + Distinctive + Foundations Primary + Components; logo 경계 옮김 → Typography & Assets + Named gaps | Portable file has no frontmatter. Name kept as H1 `Classting Design System`. Homepage `https://www.classting.com` is dual Scope 9/11 + provenance identity/surfaces (E2a). Catalog `primary_color` `#00C896` is identity 14 + dest sentence 21 + portable Scope atmosphere 13 / duality 17, Distinctive limiter 36 / bullet 38, capture-bound 59 / Use 61 / gradient 64, Semantic unmerged 85 / Primary 87 / §9 vars 102, Elevation alpha 138, type-rule 201 / gradient 203, Success row 224, Green CTA Background 241, Consult banner 348 / field note 358. Freshness does not contain this hex. Claim ledger splits Proof `#00c896` from prose-derived fields. Proof notes 115 record lowercase `#00c896` (E2a). Avoid 70–77 does not contain this hex. Content 401–415 does not contain this hex. Catalog favicon URL `https://www.google.com/s2/favicons?domain=classting.com&sz=256` is provenance identity only 15/23. Portable Assets 211 holds a URL-free Google-favicon lookup / not-a-captured-first-party-mark / not-a-portable-mark-file sentence, not the URL string. Named gaps has no first-party-mark sentence. First-party mark-file existence is not claimed from this lookup. |
| YAML `omd`, `verified`, token claims, `tokens.source` / `extracted`, `components_harvested` | mixed: `omd` / `verified` / `extracted` / `components_harvested` / `tokens.source` YAML keys 분리 → provenance; `prose-derived` 값 분리 → provenance only | `tokens.source: prose-derived` YAML key and `components_harvested: true` are provenance-only as keys (A1c). The `prose-derived` extraction-class string is provenance Identity/Claim ledger/Proof notes only (provenance.md:17,25,74,144); it is absent from the portable body (E2). Portable Scope 11 restates homepage HTML + Webflow CSS + CT Corp. guidelines as reconstruction sources, not that YAML key. YAML `verified` 2026-06-03 / `extracted` 2026-06-08 are provenance freshness. Source YAML has no `verification_v2` object; none invented. YAML has no `ds.type`. None invented. |
| YAML `tokens.colors` / `typography` / `spacing` / `rounded` / `shadow` / `components` | 옮김 → Foundations, Typography & Assets, Components & States; YAML `use` also Primary tasks | 검증된 값만 최소 필드 단위. YAML unitless lineHeight `1.5` / `1.0` / `1.29` / `1.21` 비율 보존 (A1a) Type roles 187/191/192/194/195. YAML `display-md` has no `lineHeight`; none invented (187/193). YAML spacing xs 4 / sm 8 / md 16 / base 16 / lg 24 / xl 32 / xxl 48 / section 64는 숫자 보존, px 접미사 비발명 (Spacing 106). YAML `rounded` sm 6 / md 8 / lg 16 / pill 24 / full 9999 보존되고 harvested `6px` / `8px` / `16px` / `24px`와 비합침 (Shape 116–126; Distinctive 36/45). YAML `full` 9999에 px 접미사 비발명. 검증된 primitive type은 컴포넌트별로 보존: button×3 (239, 264, 313) + card×2 (337, 351) + badge (364). Orange CTA YAML type 없음·발명 없음 (296). Orange tag YAML type 없음·발명 없음 (381). `Kind: interactive`로 뭉개지 않음 (A1b). `#00C896`와 `#17A27E`와 Green 050, canvas `#FAFAFB`와 card/on-primary `#FFFFFF`, ink `#424242`와 footer `#000000`, outline `#ED872D`와 border `#ED872C`와 Orange 500 `#ED8936`는 비합침 (A4). Primary tasks dests from YAML `use` strings: 25–27 (primary 247, Consult banner 357, card 344). Black/outline/tag uses remain on those components and are not extra primary tasks. |
| §1 Visual Theme & Atmosphere | 옮김 → Experience `scope` claim, distinctive traits | 제품/표면 범위. Product-origin (9) and three-URL evidence-domain assignment (11) name the catalog homepage and the two other source-footer Tier 1 URLs and values-stay-attached. Atmosphere extra names including clarity-of-purpose-from-99-percent-K-12-adoption (13), public-history (15), duality (17) 문단 인접에 derived editorial implementation inference / not Classting-authored or a separately published UI specification 한정 (B2/B2a). Distinctive unmerged-role extras have adjacent complete B2a immediately before the bullets (36). URLs는 provenance와 dual (E2a). |
| §1 / footer / §11 공식 URL | mixed: 세 Tier 1 URL 옮김 → Scope + provenance; Proof raw samples 분리 → provenance | 서사·freshness 원장. Homepage dual Scope 9/11 + provenance. Webflow CSS URL dual Scope 11 + provenance Sources/Tier 1. CT Corp. URL dual Scope 11 / Font parent-corporate 173 + provenance. Not product-use font evidence. Proof sidecar Stitches names / `.button` fill padding `20px 24px` / CT Corp. logo stop-colors `#6EC090` → `#2B5CAA` are provenance Proof notes. Proof `.button` `20px 24px` and body §4 Outline padding `20px 24px` are separate source rows, not an E2a dual numeric. Outline CTA 319 is the body §4 field. CT Corp. logo stop-color literals are copied into this Proof ledger and are not portable tokens (E1). |
| §2 Color Palette & Roles | 옮김 → Foundations semantic color | YAML hex 전부. Unmerged-role extra characterizations have adjacent complete B2a at 85 (B2/B2a). Green 050 `#EFFFFA`와 `rgb(239, 255, 251)` 비합침 (89, Named gaps 453). `#FFFAF0` is orange-tag fill only (85/378/383), not a YAML color role. |
| §3 Typography Rules | 옮김 → Typography & Assets | Font evidence-class B2a (169). Live Noto Sans KR from homepage HTML + Webflow CSS / CT Corp. parent-corporate brand context not product-use font evidence / YAML-mono-same-name 173–175. Family font-use including do-not-present-as-Classting-owned / KR-400-500-700-with-TW-Noto-Sans-HK (183; dual Distinctive 44 + Family 181/183 + Content 414, E2a) / ratio-versus-size-local (187) 독해는 각 인접 완전 B2a (B2/B2a). YAML unitless ratios `1.5` / `1.0` / `1.29` / `1.21` 보존 (A1a). Body-table 24px / 14px / 54px / 68px는 size-local. 원본에 없는 FontFaceSet 카운트·exclusive-distributed-negative는 만들지 않음 (D1). |
| §4 Component Stylings | 옮김 → Components & States + Primary tasks | Green / Black / Outline `Type: button` 239/264/313; Orange CTA Type not invented 296; Blog card / Consult banner `Type: card` 337/351; Mint tag `Type: badge` 364 (A1b). Orange tag YAML type 없음·발명 없음 381. Capture selectors absent from source YAML; none invented (provenance Capture selectors). Primary tasks from three YAML/§4 uses: 25–27. Four CTAs loading·error·success omitted (C2) 258/283/307/332. Named Focus `hsl(165,100%,39%)` is Capture 218/223/229, not `focus-visible` treatment; focus-visible 행에 hex 없음 (B1, 231). Card/badge C4 omit kind+map 233/346/359/372/384. Field notes have adjacent complete B2a on unmerged-field readings (249/274/296/298/323/358/383). Orange tag YAML-row-absent-type-not-invented 381; omit-kind because type absent 384. Outline padding `20px 24px` stays on Outline CTA 319 as the body §4 field; it is not the Proof `.button` fill padding. |
| §5 Layout Principles | 옮김 → Layout & Platforms + Foundations spacing | Max-width 1,248px / 1,280px, 16px→48px padding, 120px section rhythm, rem token scales, 720px / 540px (Layout 389–395; Spacing 106–112). Shape local-geometry limiter precedes the labeled list (118). Layout recorded-span extras 389 (including gray-200-hex-unnamed-not-invented) + YAML-unmerged after-measurements 395는 각 인접 완전 B2a (B2/B2a). YAML spacing numbers and rem scales stay unmerged from page measurements (395). gray-200 hex unnamed (393, Named gaps 452). |
| §6 Depth & Elevation | 옮김 → Foundations elevation | Level 0–3 + backdrop table 130–136. YAML `shadow.subtle` / `raised` / `accent` 133–135. Elevation alpha (138) / shadow-philosophy (140) / Level-3-label-not-focus-visible (142) 각 인접 완전 B2a (B2/B2a, B1). |
| §7 Do's and Don'ts | mixed: Do 옮김 → Experience principles (capture-bound); Don't 옮김 → Experience avoid | Capture-bound grouping of §7 Do’s named rules has adjacent complete B2a (59). Avoid named Don’ts 인접 완전 B2a (70). Unique §9 purple-only-in-AI-feature-or-self-directed-learning is Distinctive 43 / Semantic 90 / Avoid 77. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms + Type-rule | Hero 56px→36px (`--fontSizes-700: 2.25rem`) and display-lg 42px→28px are Type-rule limiter 199 / recipe 205 / scale 207. Layout 394 does not contain 56px or 36px; it holds flex column→row at 720px, feature 50%/100%, CTA full-width mobile, consult padding tightens, `data-collapse="all"`. Invented extra breakpoints were not in the source and are not added (D1, A1). |
| §9 Agent Prompt Guide | 삭제; 고유 제약만 옮김 | 도구별 명령·복붙 프롬프트 삭제. 슬롯 없는 위임 없음. Unique brand values already have Experience/Foundations/Components slots: `--primary: #00C896` / `--text-dark: #424242` → Semantic 102 (A3); Primary CTA `500 14px/14px "Noto Sans KR"` → Green CTA Font 246 (A3); hero heading `56px / 700 / 68px / #424242` → Type recipe 205 (A3); section wash `linear-gradient(120deg, #EDF9F6, #FAF5FF)` → Distinctive 36/42 (A3); `max-width: 1248px; margin: 0 auto; padding: 0 16px` → Layout 389/391 (A3); KR 400+500+700 / TW Noto Sans HK → Distinctive 44 + Family 181/183 + Content 414 (A3, E2a); purple only in AI-feature or self-directed-learning → Avoid 77 (A3). Cards / tag pill / 8px fill already in Components. `omd-apply` / `npx omd` absent. |
| §10 Voice & Tone | mixed: 옮김 → Content & Locales; *Illustrative* voice samples 3건 삭제 | Three adjectives + Do/Don't table 400–408. Voice-register extras 인접 완전 B2a (400). Table-as-reconstruction / no-illustrative-samples 인접 완전 B2a (410). Source-stated empty-state label dual Capture 220 + Content 412 (not a §10 dest). KR/TW font-loading-not-complete-locale 414 (B2/B2a, E1). Source *Illustrative:* samples not promoted — 세 문자열의 바이트 원문과 삭제 사유는 Revision 2026-08-26 (v9 A5 카피 패스) 표 (A5, D2). 원본에 없는 도메인 부정 claim 신설 없음 (D1). |
| §11 Brand Narrative | 옮김 → Experience `scope`; 서사 원장 분리 → provenance | Founding / 30-plus-students / communication-to-intelligence / adoption / CT / CLST+ELO / 91.5% / mission-as-tool-to-infrastructure / student-mastery restated in portable Scope under adjacent complete B2a (15, 17) (A1, B2/B2a). Dual portable Scope + provenance Narrative. Evidence class is official history and the CT Corp. brand-guidelines citation; they do not by themselves supply interface tokens. |
| §12 Principles | 옮김 → Experience principles | 다섯 항목 전체 editorial readings. 인접 본문에 derived editorial implementation inference / not Classting-authored or a separately published UI specification (51). Capture-bound grouping (§7 Do’s) has adjacent complete B2a (59). Governance 일반 문구는 그 한정의 대체물이 아님 (B2/B2a, E1). |
| §13 Personas | mixed: lede groups만 Audience; 가상 biography 삭제·sidecar 재수록 없음 | 원본 *Illustrative* named-person entries는 fictional archetypes. Groups from the product lede (teachers, students, parents)는 portable Audience 32. Names/ages/locations/biographies는 원본 이관본에도 provenance에도 없음 (D2). Audience no-individual-personas-promoted + fictional-archetypes-not-tasks have adjacent complete B2a (32) (B2/B2a). Primary tasks 3건 dests are on the YAML/§4 source-rows (YAML `use` 247/357/344 → Primary tasks 25–27), under adjacent complete B2a as YAML-use-strings-not-from-§13 (23). The portable body does not call those tasks independently verified (E2c). |
| §14 States | 옮김 → Components & States capture record + per-component applicability | 본문 8행 보존 220–227 (Empty class feed, Loading diagnostic, Error network, Error input, Success assignment, Skeleton dashboard, Disabled button, Disabled input) (A2). Capture-record graph-not-adopted / §14-as-state-copy / named-focus-not-focus-visible / omitted-L-E-S 218 (B2/B2a). Named input `focus` `hsl(165,100%,39%)` is generic focus, not `focus-visible` (229). Input/Toast are not invented as declared components (229, Named gaps 456). 선언 컴포넌트는 §4.4를 닫되 미관측 시각값은 발명하지 않음. `not captured` / `not named`를 `not-applicable` 사유로 쓰지 않음 (C1). Four CTAs loading·error·success omitted (C2) 258/283/307/332. Card/badge C4 233/346/359/372/384. focus-visible 행에 hex 없음 (B1, 231). graph 위임 없음. State coverage 완료 주장 없음 (C3, 231). |
| §15 Motion & Easing | 옮김 → Foundations motion | Source-stated micro 0.1s / panel 0.3s / pulse 1.5s ease-in-out / nav 500ms `data-duration="500"` / easing `ease` `data-easing="ease"` / reduced-motion static gray-300 (150–157). 무출처 cubic-bezier 없음 — 삭제할 커브 없음. source-stated-not-computed B2a (146); editorial extras after the table B2a (159). Foundations Motion은 B3 다섯 증거 종류(transition properties · animation name · duration · easing · reduced-motion behavior)를 컴포넌트별 computed 관측한 뒤에만 승격한다는 게이트를 전문 명시 (161). “공식 출처로 검증될 때까지” 약화 문구는 쓰지 않음 (B3, E2c). Named gaps 457 lists the five kinds in inventory form; the B3 full promotion-gate sentence is Foundations Motion 161 only. |
| Footer **Verified** / Tier 1 / Tier 2 / Conflicts | mixed: freshness 분리 → provenance; live URLs는 portable에도 | Dual (E2a): three evidence-domain URLs는 Scope 11 + provenance Surfaces/Sources/Tier 1. Homepage `https://www.classting.com`는 Scope 9/11 + provenance. Footer verified 2026-06-03는 provenance freshness only. Conflicts unresolved: none. Portable body does not re-host Tier 2 failure strings (E1); they are provenance Tier 2. |

### F1 / F2 (v7 mandatory final passes)

Worker F1/F2 dest maps are this session’s greps. Worker completeness is not a current-class claim (E2c). This is not a catalog-adoption claim and is not a claim that no unqualified sentence remains (E2c).

### F1 B2a scan (full DESIGN.md reread)

After a full reread of DESIGN.md, adjacent complete B2a sites match `provenance.md` Derived inventory. Governance Authority / priority / unknowns / changes 420/426/428–431/435/441 are the controlled Core copy; they are not reconstruction readings and are not wrapped. Named gaps 446–457 are unnamed-value inventory, not extra brand doctrine. Semantic bullets 87–100 and §9 vars 102 are covered by unmerged-role limiter 85. Type-role rows 191–195 are covered by ratio limiter 187. Principles 53–57 are covered by the five-item limiter 51. Distinctive bullets 38–47 are covered by unmerged limiter 36. Capture-record source contract table 220–227 is source-stated; applicability paragraph 231 and L/E/S omission sentences 258/283/307/332 are covered by capture-record omitted-L-E-S-fields 218. C4 omit-kind sentences 346/359/372/384 are covered by 233. This is not a claim that no unqualified sentence remains (E2c).

### F2 grep (this session; value + field/role context)

F2 grep after body/ledger writes (three files: DESIGN.md, provenance.md, migration-log.md):

- Catalog `primary_color` `#00C896` → DESIGN 13/17/36/38/59/61/64/85/87/102/138/201/203/224/241/348/358 + provenance Identity 14 / dest sentence 21. Freshness does not contain this hex. Claim ledger splits Proof vs prose-derived. Proof notes record lowercase `#00c896`. Avoid 70–77 does not contain this hex. Content 400–414 does not contain this hex.
- Hover green `#17A27E` → DESIGN 36/39/75/85/88/248/249/254/274/279 + provenance
- Canvas `#FAFAFB` → DESIGN 36/40/70/75/85/95/249 + provenance
- Surface / on-primary `#FFFFFF` → DESIGN 36/40/85/95/96/242/249/267/292/340 + provenance
- Ink `#424242` → DESIGN 36/41/59/66/75/85/93/102/199/205/266/274 + provenance
- Footer `#000000` → DESIGN 36/41/85/99 + provenance
- Outline `#ED872D` / border `#ED872C` → DESIGN 85/91/100/299/317/318/324/456 + provenance
- Orange 500 `#ED8936` → DESIGN 43/85/91/291/299/324 + provenance
- Orange tag `#FFFAF0` → DESIGN 85/378/383 + provenance (not a YAML color role)
- Green 050 `#EFFFFA` / `rgb(239, 255, 251)` → DESIGN 89/455 + provenance
- Google favicon URL → provenance 15/23 only. URL-free lookup / not-a-portable-mark-file → Assets 211. Named gaps has no first-party-mark sentence.
- Homepage `https://www.classting.com` → Scope 9/11 + provenance identity/surfaces. Primary tasks 25–27 do not repeat this URL
- Webflow CSS URL → Scope 11 + provenance Sources/Tier 1
- CT Corp. URL `https://ctcorp.ai/ko/brand-guidelines` → Scope 11 / Font 173 + provenance Sources/Tier 1
- `tokens.source` / `components_harvested` YAML keys → provenance only. `prose-derived` is absent from the portable body; Scope 11 restates reconstruction sources, not the extraction-class string
- YAML `use` strings → Primary tasks 25–27 and component Use 247/357/344; Black/outline/tag uses remain on 272/322/371
- `Type: button` ×3 → 239/264/313. Orange CTA Type not invented 296. `Type: card` ×2 → 337/351. `Type: badge` → 364. Orange tag type absent 381
- Green CTA omission sentence → 258. Black → 283. Orange → 307. Outline → 332
- `omd-apply` / `npx omd` / `[FILL IN]` absent from portable body
- §14 eight rows → Capture record 220–227 (adjacent complete B2a on 218)
- YAML spacing numbers 4/8/16/24/32/48/64 → Spacing 106 without a required px suffix on the YAML steps
- YAML `full` 9999 → Distinctive 36/45, Shape 116/118/124/126
- B3 five-kind gate → Foundations Motion 161 (`transition properties, animation name, duration, easing, and reduced-motion behavior` + per component + “Official documentation of a single curve or duration is not that gate”). Named gaps 457 is an inventory pointer (“all five kinds”); it does not name the five kinds and is not the B3 full promotion-gate sentence
- Cubic-bezier values absent from DESIGN.md and from the source DESIGN.md
- YAML unitless lineHeight 1.5 / 1.0 / 1.29 / 1.21 → Type roles 187/191/192/194/195
- Capture selectors → absent from source YAML; provenance records that absence. Proof sidecar `.button` / `.button-md-container-fill` stay provenance-only
- Persona names/ages/locations absent from DESIGN.md and provenance. Lede groups only at Audience 32
- `--primary` / `--text-dark` → Semantic 102
- §9 `500 14px/14px` → Green CTA Font 246
- §9 hero heading recipe → Type 205
- §9 `linear-gradient(120deg, #EDF9F6, #FAF5FF)` → Distinctive 36/42
- Proof `--colors-ct-green-500` / `.button { padding: 20px 24px }` fill / CT Corp. logo stop-colors → provenance Proof notes. Portable DESIGN.md does not host `--colors-ct-green-500` or the `.button` selector sample. Outline CTA 319 has `20px 24px` from source §4 as a separate source row from Proof `.button` fill padding. CT Corp. logo stop-color hex literals `#6EC090` → `#2B5CAA` are on this Proof ledger and are not portable tokens. Space after `#` so gate token-invention does not treat sidecar-only hex as a portable token; digits are exact.

Worker completeness is not a current-class claim (E2c). Worker-session DESIGN SHA-256 `caf36542429f89f6de162b7dd90c3223d1e6e2e393bbb877d359e5a76aa06d4d` is not current-class after F3 (E2c). Command outputs, not catalog adoption (E2c).

## Revision 2026-08-24 (F3 B2a·E2 audit)

Auditor: grok-4.6 (fresh session, not the T2 worker). Rulebook v7 B2/B2a/E1/E2/E2a–c only. Token values, component tables, state applicability, and section structure were not changed.

| Item | Correction |
|---|---|
| 1. B2a | Adjacent complete B2a expanded or attached at Scope atmosphere 13 (names matched to follow-on), duality 17 (voice extra not in body, trimmed), Audience 32 lede-groups-not-user-flow, Distinctive 36 hover-not-fv / YAML-9999 / light-diffuse, Semantic 85 hover-green-not-fv, Shape 126 trailing not-universal, Motion 146 table-only / 159 after-table extras, Type-rule 199 display-lg-42-to-28, Capture 229 after-list Input-Toast-not-invented, Black CTA 274 yaml-no-padding/font, Outline 324 both-hexes-kept, Orange tag 382 type-not-invented / 385 omit-kind, Layout 390 gray-200-unnamed / 396 after-measurements unmerged. |
| 2. Derived inventory | provenance derived inventory restated to those actual sites. Reconstruction-boundary exemption not used. |
| 3. `#00C896` | Provenance Identity 14 / dest 21; Freshness does not contain the hex; Claim ledger names without the hex; Proof 132 lowercase `#00c896`. |
| 4. `#FFFFFF` | Destinations include Green CTA field note 249. |
| 5. `#17A27E` / YAML `9999` | Extra dest Distinctive limiter 36. |
| 6. Hero 56px→36px | Type-rule 199/205/207. Layout 394 does not contain 56px or 36px. |
| 7. KR/TW font-loading | Dual Distinctive 44 + Family 181/183 + Content 414 (E2a). |
| 8. Proof `20px 24px` | Dual numeric: provenance `.button` fill sample 132 + Outline CTA 320 from source §4. Not “absent from portable DESIGN.md”. |
| 9. B3 / E2c | Full gate remains Motion 161. Named gaps 457 is an inventory pointer, not the five-kind list. Worker F1 “C4 385 covered by 233” and worker SHA superseded. No “no unqualified sentence remains” claim. |
| 10. Portable Core | `node test-v2/tools/migrate-reference.mjs --brand classting --gate-only` → PASS, problems []. `node scripts/migrate-design-md-core.cjs --input docs/design-md-weight/migrated/classting/DESIGN.md --check --require-portable-core --json` → exit 0 / `portable_core: true`, SHA-256 `f8d9c84d959b6d5960378a2b84aa8f61146a877c32a4d4734554a38b4869cf65`. Command outputs, not catalog adoption (E2c). |

### F1 / F2 (v7; this F3 audit)

F1: current adjacent-complete inventory matches provenance derived inventory after this scan. Left without B2a: product identity and catalog homepage URL; YAML/source hex/geometry/use strings; §14 eight rows; per-control C2 omission sentences; C4 omit-kind on Blog/Consult/Mint (347/360/373); B1/B3 Core policy; Governance boilerplate; Named gaps inventory.

F2 (this revision; value + field/role context): greps above plus Distinctive 36 for `#17A27E` and `9999`; Capture 229 for `hsl(165,100%,39%)`; gray-200 at 389/393/452. This log does not claim F2 completeness beyond those greps, and does not re-assert worker F1/F2 as closed (E2c).

## Revision 2026-08-25 (wave15 sol resubmit)

Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v7. Source remainder: `docs/reviews/t2-1-wave15-2026-08-25-sol-full.md` classting conditions 1–8. New F3 not required. E2c: this revision does not re-assert F1/F2/F3 closed. Not a catalog-adoption claim.

1. Claim ledger split: exact Proof samples versus prose-derived reconstruction. Unfounded per-claim home mapping and Captured/Observed live-home language removed or selector-bound.
2. CT guideline classified as parent-corporate brand context, not product-use font evidence.
3. Orange CTA `Type: button` deleted. Interactive kind kept; primitive type unresolved.
4. self-directed-learning context and §1/§11 missing relationships restored in portable Scope/Distinctive/Avoid/Semantic with adjacent complete B2a on derived relations.
5. CT gradient `#6EC090` → `#2B5CAA` and regional/source-verification metadata (`lang="ko"`, Webflow site-id, naver-site-verification hash) restored in provenance Proof. Not portable tokens. Space after `#` so gate token-invention does not treat sidecar-only hex as a portable token; digits are exact.
6. first-party mark-file negative and Named-gap row reduced to lookup/non-promotion.
7. §14 empty-state label dual Capture 220 + Content 412. Noto Sans HK dual Distinctive 44 + Family 181/183 + Content 414. Proof `.button` `20px 24px` and body §4 Outline `20px 24px` are separate source rows.
8. Dest pointers grepped against the current three files. `--gate-only` and portable Core re-run; SHA below. Existing fresh F3 execution evidence is retained. Canonical Proof was not dropped.

Current DESIGN SHA-256 `c93c25b8c6171e6b7e42713009e95b8a641f5818f554dec225e3a384b8c90f7e`. `node test-v2/tools/migrate-reference.mjs --brand classting --gate-only` → PASS, problems `[]`. `node scripts/migrate-design-md-core.cjs --input docs/design-md-weight/migrated/classting/DESIGN.md --check --require-portable-core --json` → exit 0 / `portable_core: true`. Command outputs, not catalog adoption (E2c).

## Revision 2026-08-26 (v9 A5 카피 패스)

Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v9 — 신설 A5(브랜드가 발행한 문자열은 바이트 그대로) + 게이트 `copy-loss` 대응. 이 패스는 토큰 값, 컴포넌트 표의 값, state applicability 판정, 섹션 구조, 그리고 원본 `web/references/classting/DESIGN.md`를 변경하지 않았다. F1/F2/F3가 닫혔다는 재주장이 아니고 카탈로그 채택 주장도 아니다 (E2c).

### A5 실측 — 게이트가 지목한 5개 needle의 원본 출처

| needle (게이트 보고) | 원본 위치 | 원본이 붙인 성격 |
|---|---|---|
| `진단부터 추천까지. 데이터가 길을 만듭니다` | 원본 §10 `:235` | `**Voice samples (illustrative):**`(`:234`) 머리글 아래, 행 접두 `*Illustrative:*` |
| `선생님이 매 학생을 개별적으로 파악하기 어려운 게 현실입니다. 클래스팅` | 원본 §10 `:236` | 같은 머리글 아래 `*Illustrative:*` — 한 인용문의 앞 조각 |
| `가 그 공백을 채웁니다` | 원본 §10 `:236` | 같은 인용문의 뒤 조각 (라틴 `AI`에서 run이 끊긴 자리) |
| `맞춤 교육` | 원본 §10 `:237` | 같은 머리글 아래 `*Illustrative:*` — 한 문장의 앞 조각 |
| `지금 시작하세요` | 원본 §10 `:237` | 같은 문장의 뒤 조각 (콤마 구분자에서 갈린 자리) |

원본에 있는 것은 5개가 아니라 **3개 인용문**이다. 게이트가 콤마와 라틴 문자를 run 구분자로 쓰기 때문에 `맞춤 교육, 지금 시작하세요.`가 둘로, `선생님이 매 학생을 개별적으로 파악하기 어려운 게 현실입니다. 클래스팅 AI가 그 공백을 채웁니다.`가 `AI`에서 둘로 쪼개져 보고됐다.

### A5 판정 — 세 문자열은 브랜드 발행 문자열이 아니다 (복원하지 않음)

원본이 스스로 세 문자열을 illustrative로 명기했다: `:234`의 머리글 `**Voice samples (illustrative):**`와 `:235`–`:237` 각 행의 `*Illustrative:*` 접두. 검증 sibling `web/references/classting/.verification.md`의 Proof raw samples 열 행은 전부 CSS custom property·셀렉터 선언이며, 카피 문자열을 측정 대상으로 명기한 행이 하나도 없다 — A5 후단의 "검증 sibling이 측정 대상으로 명기한 문자열" 경로도 성립하지 않는다.

그러므로 A5의 대상이 아니다. 이 셋을 portable Content & Locales로 올리면 §13 *Illustrative* named-person 항목과 같은 등급의 가상 카피를 마이크로카피 계약으로 승격하는 것이 되어 D2 위반이다. 이관본 Content & Locales 410은 이미 "not promoting the source’s three *Illustrative:* voice samples"를 인접 완전 B2a와 함께 담고 있고, 이 절은 그 disposition에 원문 바이트를 붙여 소실을 가시화한다 — A5가 요구하는 것은 무삭제가 아니라 소실의 가시화다.

같은 브랜드 안의 일관성 근거: 원본 §14 `:275`의 empty-state 라벨은 `*Illustrative*` 표시가 없는 source-stated 카피이고, 삭제되지 않고 이관본 Capture 220 + Content 412 두 곳에 바이트 그대로 남아 있다 (E2a). 발행/비발행 구분은 이 브랜드에서 일관되게 적용됐다.

| 원본 위치 | 원문 (바이트 그대로) · 영문은 원본 병기 gloss, 대체 아님 | Disposition |
|---|---|---|
| §10 `:235` 태그라인 | "진단부터 추천까지. 데이터가 길을 만듭니다." (From diagnosis to recommendation. Data makes the path.) | **삭제** — 원본이 illustrative로 명기한 비발행 예시. 발행 근거 없음, 검증 sibling 측정 대상 아님. 승격 시 D2 위반. |
| §10 `:236` 본문 | "선생님이 매 학생을 개별적으로 파악하기 어려운 게 현실입니다. 클래스팅 AI가 그 공백을 채웁니다." (It's reality that teachers can't track every student individually. Classting AI fills that gap.) | **삭제** — 같은 사유 (D2). 게이트는 라틴 `AI`에서 두 needle로 쪼갰으나 원본의 단위는 이 한 문장이다. |
| §10 `:237` CTA | "맞춤 교육, 지금 시작하세요." (Start personalized education now.) | **삭제** — 같은 사유 (D2). 게이트는 콤마에서 두 needle로 쪼갰으나 원본의 단위는 이 한 문장이다. |

세 문자열은 이관본 `DESIGN.md`에도 `provenance.md`에도 없다 (D2: 승격도 provenance 재수록도 금지). 위 표가 유일한 감사 기록이다.

### 게이트 보고 (E3 — 표기를 왜곡해 피하지 않았다)

1. 소실 판정 자체는 오탐이 아니다. 세 문자열은 실제로 세 산출물 어디에도 없었고 원장에 disposition 행도 없었다 — 게이트는 "기록되지 않은 드롭"을 정확히 드러냈다. 위 표가 그 기록을 붙여 해소한다.
2. needle 단위가 원본의 단위와 어긋난다(보고 정밀도). A5의 단위는 라벨인데, 콤마 구분자 규칙이 한 문장 CTA를 두 조각으로, non-Latin run 규칙이 `클래스팅 AI가`의 라틴 `AI`에서 한 문장을 두 조각으로 나눈다. 뒤 조각 `가 그 공백을 채웁니다`는 조사에서 시작하는 문장 파편이라 그 자체로는 어떤 라벨도 아니다. 원문 표기는 그대로 두고 여기 기록만 한다.
3. needle 추출은 원본의 `*Illustrative:*` 표시를 읽지 않는다. 그래서 발행 카피와, 원본이 스스로 비발행이라 밝힌 예시가 같은 급으로 보고된다. 발행/비발행 판정은 기계가 아니라 의미 검토의 몫이고, 이 브랜드는 3건 전부 후자였다.

### 원장 포인터 실측 재검증 (F2; 이번 세션 grep)

§10 행 포인터는 현행과 일치했다: Do/Don't 표 402–408, voice-register B2a 400, table-as-reconstruction·no-illustrative-samples B2a 410, source-stated empty-state 412 (dual Capture 220), KR/TW font-loading 414. 다음도 현행과 일치했다 — `Type: button` 239/264/313, `Type: card` 337/351, `Type: badge` 364, Orange CTA type-not-invented 296, C2 생략문 258/283/307/332, C4 omit-kind 346/359/372/384, B3 다섯 증거 종류 161, Assets 211, Audience 32, Primary tasks 25–27, Spacing 106, Shape 116/118/124/126, Elevation 133–135/138, Family 181/183, Type roles 187/194/195, Green CTA Font 246, Outline padding 319, Named gaps 452/456/457.

아래 여섯 건은 wave15 개정(Orange CTA `Type: button` 삭제 등)으로 행이 밀린 뒤 갱신되지 않은 stale 포인터다. 값은 그대로이고 행 번호만 바뀌었다. 이전 개정 블록의 기재를 고쳐 쓰지 않고 여기서 supersede한다.

| 원장 기재 | 실측 현행 |
|---|---|
| F2 `#00C896` dest 끝부분 `348 / 358` | `353` / `358` — 348은 `### Section Banner (Consult)` 제목 행이고 hex는 353 |
| F2 `#ED872D` / `#ED872C` dest `85/91/100/299/317/318/324/456` | `#ED872D` 85/91/100/298/316/317/323/454, `#ED872C` 85/100/298/317/323/454 |
| F2 Orange 500 `#ED8936` dest `43/85/91/291/299/324` | 43/85/91/290/298/323 |
| F2 Green 050 `#EFFFFA` dest `89/455` | 89/453 (상단 표 §2 행의 `Named gaps 453`가 맞다) |
| Revision 2026-08-24 항목 8 `Outline CTA 320` | 319 (`- Padding: 20px 24px`) |
| Revision 2026-08-24 F1 `C4 … (347/360/373)` | 346/359/372 (Orange tag는 384) |

상단 표 §4 행의 field-note 목록 `249/274/296/298/323/358/383` 중 296은 field note가 아니라 Orange CTA `Use:` 행이다. 현행 field note 행은 249/274/298/323/358/383이다.

`provenance.md` 87/122와 위 F2 블록이 아직 "Space after `#` so gate token-invention does not treat sidecar-only hex as a portable token"라고 적고 있으나, 실측하면 두 행 모두 `#6EC090` → `#2B5CAA`를 공백 없이 정상 표기한다 (v8에서 원복된 상태). 그 설명 문장은 현행 파일과 불일치하는 stale 기재다. 이 패스는 값 표기를 건드리지 않으므로 여기에 기록만 한다 (E3, E2).

DESIGN.md는 이 패스에서 바뀌지 않았다 — SHA-256 `c93c25b8c6171e6b7e42713009e95b8a641f5818f554dec225e3a384b8c90f7e`로 wave15 기록과 동일하다. `node test-v2/tools/migrate-reference.mjs --brand classting --gate-only` → PASS, problems `[]`. `node scripts/migrate-design-md-core.cjs --input docs/design-md-weight/migrated/classting/DESIGN.md --check --require-portable-core --json` → exit 0 / `portable_core: true`. 명령 출력이지 카탈로그 채택 주장이 아니다 (E2c).
