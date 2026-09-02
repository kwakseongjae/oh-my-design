# KRDS migration log

Source: `web/references/krds/DESIGN.md`
Sibling read (not the migration input): `web/references/krds/.verification.md`
Destination: `docs/design-md-weight/migrated/krds/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/krds/provenance.md`
Date: 2026-08-29
Worker: grok-4.6 T2
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v12**
Not a catalog-adoption claim. Gate output is recorded below as a run result, not as evidence of semantic adequacy (E2c).

Every destination line below was checked with `grep` against the three output files before it was written (F2). Line numbers are from the files as committed in this directory. Counts use `grep -o … | wc -l` per file, never `grep -c`, which counts lines.

Source SHA-256 `fae4d780b259f7f4a453b25e64c462d7d70cf7e0e4dad49652c404326ddf4591` (`web/references/krds/DESIGN.md`). Sibling SHA-256 `c37c6a071bd61747ac9a116810fcf4c97396d66476f07b0f57bdea8f88d74f34` (`web/references/krds/.verification.md`). Worker-close portable DESIGN SHA-256 `f07cc88076164ceaea91ba1cae50b67d032da65fb6db8cf196aa93944108e6cd`. Worker-close provenance SHA-256 `21a14b3896b8f21b70f535365b84548de06084bb682a954481b1f59287559d54`. Auditor-close DESIGN SHA-256 `a93085c3b5f35b5953350cfe333f7de1a1c2fae1aa85b2bc6fe14f005b43612e`. Auditor-close provenance SHA-256 `81e4cbc2cbaf068e6f8b98bdffb4c024bc43367e46adf56bb59125f3c70d7763`.

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (`id`, `name`, `country`, `category`, `homepage`, `primary_color`, `logo`) | 분리 → provenance; `homepage` 옮김 → Experience Scope; `primary_color` 옮김 → Scope + Foundations + components; `logo.slug` 옮김 → Typography & Assets Assets | Portable file has no frontmatter; H1 is `# KRDS Design System` (`DESIGN.md` 1). Identity table `provenance.md` 7–31. `https://www.krds.go.kr/html/site/index.html` is dual: `DESIGN.md` dest **2** at 9/785 + `provenance.md` dest **4** at 13/24/54/69 (E2a). `#256ef4` is dual: `DESIGN.md` dest **10** at 11/94/165/391/394/426/487/571×2/605 + `provenance.md` dest **5** at 14/112/143×2/147 (E2a). Favicon slug is dual: `DESIGN.md` dest **1** at 324 + `provenance.md` dest **1** at 15 (E2a). |
| YAML `omd: "0.1"`, `verified`, `verification_v2`, `tokens.source: reconciled`, `tokens.extracted`, `tokens.note`, `components_harvested: true`, `ds.name` / `ds.url` / `ds.type: system` / `ds.description` / `ds.og_image` | 분리 → provenance; `ds.url` 옮김 → Scope; `ds.og_image` 옮김 → Assets | Verification metadata is a value and is kept, not dropped (A1c): `provenance.md` 16–31, 35–46, 219–221. `ds.type` is provenance-only (`DESIGN.md` dest **0** / `provenance.md` dest **3** at 25/33/220). Token note transcribed at `provenance.md` 31. `WCAG/KWCAG 2.2` in `ds.description` is dual: `DESIGN.md` dest **1** at 13 + `provenance.md` dest **2** at 26/33 (E2a). OG image dual: `DESIGN.md` dest **1** at 325 + `provenance.md` dest **1** at 27 (E2a). |
| YAML `tokens.colors` (18 keys) | 옮김 → Foundations semantic color | `DESIGN.md` 94–111. All eighteen roles kept with lowercase YAML hex: primary, primary-hover, primary-deep, brand, canvas, foreground, muted, on-primary, surface, surface-primary, hairline, border-strong, body, secondary, point, danger, warning, success, information. YAML `primary-deep` `#083891` is not collapsed into Brand-section "Primary Deep" `#0B50D0` (A4; `DESIGN.md` 90). Uppercase visible tables `DESIGN.md` 117–161. Divider `#E6E8EA` (not a YAML key) at 113. |
| YAML `tokens.typography.family.sans` (`Pretendard GOV`) | 옮김 → Typography & Assets Family | `DESIGN.md` 263. Fallback stack is a fallback, not the brand face (`DESIGN.md` 266). Source 설계 원칙 `한글·라틴·기호의 메트릭이 균일` DESIGN dest **1** at 270 (3라운드; Distinctive traits `한글·라틴·숫자 일체` dest **1** at 34 keep-both). |
| YAML `tokens.typography.display-large / display-small / heading-* / body-*` | 옮김 → Typography & Assets Type roles | `DESIGN.md` 278–302. Unitless line-height `1.5` stays a ratio (A1a; `DESIGN.md` 272). All YAML `use` strings restored verbatim on token-set rows (`DESIGN.md` 278–302). Display Medium is visible-scale only (not a YAML key) and kept (`DESIGN.md` 281). Heading xxsmall keeps visible 적용 `H5` DESIGN dest **3** at 81/292/293 and YAML-absence note dest **2** at 281/293 (keep-both; 3라운드 항목 11). Body medium keeps YAML `Standard body (default)` DESIGN dest **1** at 300 and §3 `표준 본문 (`<body>` 기본)` DESIGN dest **1** at 300 (keep-both; 3라운드 항목 11). Body small keeps YAML `Caption / small label` DESIGN dest **1** at 301 and §3 `캡션 / 보조 / 작은 라벨` DESIGN dest **1** at 301 (keep-both; 2라운드 항목 11). |
| YAML `tokens.spacing` (7 steps) / `tokens.rounded` (4 steps) | 옮김 → Foundations spacing + shape; also Layout | Unitless and px both kept: `DESIGN.md` 171 (`xs 2` · `sm 4` · `md 8` · `base 16` · `lg 24` · `xl 32` · `xxl 40`), 175–184 (padding-1..10 including 10/12/20 auxiliary), 190 (`sm 4` · `md 6` · `lg 8` · `full 1000`), 192–198 (2/4/6/8/10/12/1000). `full: 1000` stays that step (`DESIGN.md` 200). |
| YAML `tokens.shadow.focus` / `tokens.shadow.modal` | 옮김 → Foundations elevation + Focus observation | Focus `0 0 0 0.4rem #256ef4` at `DESIGN.md` 165 (also `4px` form). Modal token-set `0.1`/`0.1` and visible `a1`/`a2` both at `DESIGN.md` 208/212. Generic Focus, not a `focus-visible` treatment (B1; source `focus-visible` dest **0**). |
| YAML `tokens.components` (12 records) | 옮김 → Components & States | `DESIGN.md` 387–619. Verified primitive types preserved per component, not flattened to `Kind` (A1b): `button` ×3 (390/422/449), `input` ×2 (476/509), `dialog` (540), `badge` ×2 (564 non-interactive + 596 tag). All twelve YAML `use` strings restored: 404, 433, 460, 490, 522, 547, 571–575, 606. YAML `font` shorthands `17px / 400` / `19px / 400` / `15px / 400` (badge token-set font at 565). YAML border byte forms `1px solid #256ef4` (394/426/571), `1px solid #58616a` (453/480/514), `1px solid #cdd1d5` (600). YAML disabled `bg #cdd1d5 fg #6d7882` (402/488). Tertiary hover token-set `#f4f5f6` at 459. Tag token-set bg/fg `#ffffff`/`#1e2124` at 597–598; token-set radius `1000px` at 601. |
| §1 Visual Theme & Atmosphere | 옮김 → Experience `scope` claim + Distinctive traits | Scope `DESIGN.md` 9–13; Key Characteristics as Distinctive traits 32–44. Atmosphere readings carry an adjacent complete qualifier at 11 (B2/B2a). Documentation-versus-adopting-service split carries one at 9. "기본 동작" / "행위의 색" carry one at 13. Accessibility-mandate facts (장차법, KWCAG 2.1, MOIS `누구나 쉽게 사용할 수 있는 공공 웹·앱`) are in the same Scope paragraph as source-recorded narrative. |
| §2 Color Palette & Roles | 옮김 → Foundations semantic color | `DESIGN.md` 90–167. Full Primary 11-step table 119–131; Secondary 133; Gray 137–151; System 155–161. Magic numbers 167. Focus halo at 165 with B1 boundary. Characterizing phrases covered by the qualifier at 90 (B2/B2a). Primary 5 Role `약한 강조` DESIGN dest **1** at 121. Gray 40 Role `bg-disabled` DESIGN dest **1** at 144 (`disabled badge` kept; Gray 20 `input disabled bg` unmerged). |
| §3 Typography Rules — evidence, family, 3-layer scale | 옮김 → Typography & Assets | Evidence classes `DESIGN.md` 250–258; family 263–270; roles 278–309; type rules 314–320. The License/outside-captures readings carry adjacent complete qualifiers at 257 and 270 (B2/B2a). Family close at 270 names fallback-not-brand-face. Source 설계 원칙 `한글·라틴·기호의 메트릭이 균일` DESIGN dest **1** at 270; Distinctive traits `한글·라틴·숫자 일체` DESIGN dest **1** at 34 (keep-both; 3라운드). |
| §3 Principles — two weights, 17px, 1.5, zoom, tracking, rem | 옮김 → Typography & Assets Type rules | Observables at `DESIGN.md` 316–320; interpretive half inside the qualified sentence at 314 (B2/B2a). |
| §4 Component Stylings — harvested | 옮김 → Components & States declared records | Primary/Secondary/Tertiary, Text Input, Select, Dialog, Badge (18 variants), Tag. Size scales kept (407, 494, 525, 609). YAML `states` strings at 432, 489, and 521. |
| §4 Component Stylings — unreverified prose | 옮김 → Components & States prose-only inventory | `DESIGN.md` 621–677. Token note withholds machine tokens for card, toggle, tab, toast, floating-button (`DESIGN.md` 334; `provenance.md` 31). C4: no kind/map on that inventory (`DESIGN.md` 623). Unique values kept (Text/Link, Icon, Floating, Textarea, Date, File, Checkbox, Radio, Toggle, panels, Accordion, Tab, Toast, Snackbar, Tooltip, Help, Coachmark, Pagination, Breadcrumb, Side Menu, Step, Spinner, mobile-only). |
| Footer **Verified** / **Tier 1** / **Tier 2** / **Tier 3** / **Conflicts** | 분리 → provenance; URL 열 개 옮김 → Experience Scope | Freshness `provenance.md` 35–46; Tier 1 list 69–79; Tier 2 84–85; Tier 3 89–91. Conflicts unresolved: none — `provenance.md` 46. Homepage URL dual as above (E2a). |
| §5 Layout Principles | 옮김 → Layout & Platforms + Foundations spacing/shape | `DESIGN.md` 682–726 (1200px container, four breakpoints, columns/gutter/margin, sub-page five regions, 12 basic patterns, 5 service patterns), 171–199 (padding + radius). 12 patterns also record `"사용성·접근성·인터랙션 가이드·플랫폼 고려사항"` DESIGN dest **1** at 701 / P dest **1** at 277 (E2a; 2라운드). Whitespace reading qualified at 695 (B2/B2a). Breakpoint table as declared documentation qualified at 691 (B2/B2a). |
| §6 Depth & Elevation | 옮김 → Foundations elevation | Four-level table `DESIGN.md` 206–210 plus Focus halo row. Shadow-philosophy paragraph qualified at 212 (B2/B2a). Two shadow writings kept at 208/212 (E2a within the body). |
| §7 Do's | 옮김 → Experience application rules | `DESIGN.md` 58–67, under the grouping qualifier at 58. Not placed in Governance controlled copy. Korean magic-number line `primary-50 위 gray-0` at 66. |
| §7 Don'ts | 옮김 → Experience avoid | `DESIGN.md` 74–82, under the qualifier at 72. Forbidden adjectives "혁신적인", "최고의", "감동의" kept byte-exact on the Don'ts line. `"혁신적인"` DESIGN dest **3** (Avoid + Voice list + 금지 표현). `"최고의"` DESIGN dest **3** (same three). `"감동의"` DESIGN dest **1** (Don'ts only). |
| §8 Responsive Behavior | 옮김 → Layout & Platforms | Breakpoint key-changes column `DESIGN.md` 686–689; touch targets 697; mobile-only list 675. |
| §9 Agent Prompt Guide — Quick Color Reference, Example Component Prompts, Iteration Guide | 삭제 | Tool-facing copy-paste prompts and restatements; no receiving slot and no delegation. Every value §9 names was checked against the portable body before deletion and each was already present (A2, A3). Itemised at `provenance.md` 157. |
| §10 Voice & Tone | 옮김 → Content & Locales | Published strings `DESIGN.md` 735–757; register table 761–772; forbidden register 774. Voice characterization qualified at 733 (B2/B2a). Register table qualified at 776 (B2/B2a). Illustrative sample kept as illustrative, not as live copy (`DESIGN.md` 759). Locale is Korean (`ko`) for public services — not an English locale. 영문 카피가 필요한 경우 is a copy rule DESIGN dest **1** at 733. Marketing 감탄 `"놀라운"` DESIGN dest **1** at 733 (Voice list; not merged into Don'ts or 금지 표현). |
| §11 Brand Narrative | 옮김 → Experience Scope | `DESIGN.md` 13: April 2024 MOIS release, 2023 survey quotes byte-exact ("동일한 행동을 반복적으로 요청한다", "표현이 일관되지 않다", "어려운 행정 용어가 많다"), 범정부 디자인시스템 구축 사업 July–December 2023, Government Symbol applying set, purpose (1) `동일한 사용 경험` DESIGN dest **1** / (2) `디자이너와 개발자` DESIGN dest **1** and `품질 편차` DESIGN dest **1**, 장차법 / KWCAG 2.1, GOV.UK / USWDS / Singapore comparison coordinates, "전자정부 표준프레임워크 UI 가이드". Marked there as narrative context that supplies no interface tokens; the "기본 동작" / "행위의 색" / comparison-coordinate / official-history readings carry an adjacent complete qualifier in the same paragraph (B2/B2a). Also noted as narrative-not-token-source at `provenance.md` 223. |
| §12 Principles — 5 numbered | 옮김 → Experience principles | `DESIGN.md` 50–54 under the adapted B2a form at 48: the five headings are the source's own numbered list; the source's reconstruction note records that a numbered principles URL is unpublished; the *UI implication* sentences are "a derived editorial implementation inference from the verified surfaces; they are not KRDS-authored or taken from a separately published UI specification, including the published KRDS documentation." The published-DS close is required because KRDS is a first-party issued specification (rulebook v12 B2a 전제 주석). |
| §13 Personas — 5 entries | 삭제 | The source's own italic line labels them fictional reconstructions of publicly named groups, not specific people. Not promoted to Audience or to `primary-tasks`, and not re-hosted in the sidecar: no name, age, or city appears in either output (D2, D2a). Occupation-task quotations from that section are omitted with the section (deleted, not carried); the two A5 copy-loss needles that exist only there are itemised in the next two rows as 삭제, not as portable facts. Disposition at `provenance.md` omission ledger. Audience at `DESIGN.md` Audience carries only the group-level description the captured surfaces and §11 establish, under an adjacent qualifier. The three `primary-tasks` come from modules and labels the source records; Primary tasks says so and qualifies the step from label to "primary task". |
| §13 quoted run `어떤 버튼이` | 삭제 — 복원 대상 아님 | Source 1, §13 only. Writer-prose occupation-task quotation, not published KRDS copy. Not promoted and not re-hosted in provenance (D2). A5 copy-loss disposition: deleted, not carried. |
| §13 quoted run `어떤 배지가` | 삭제 — 복원 대상 아님 | Source 1, §13 only. Writer-prose occupation-task quotation, not published KRDS copy. Not promoted and not re-hosted in provenance (D2). A5 copy-loss disposition: deleted, not carried. |
| §14 States — 14 rows + 13 journey-node rows | 옮김 → Components & States capture record + surface state contract + journey table + per-component applicability | Full fourteen-row body preserved at `DESIGN.md` 344–357 (A2; the catalog graph is still 0/440, so nothing is delegated), including the published strings "검색 결과가 없습니다. 다른 키워드로 다시 시도해 주세요.", "신청한 내역이 없습니다.", "처리 중...", "올바른 형식이 아닙니다. example@domain.kr 형식으로 입력해 주세요.", "일시적으로 서비스를 이용할 수 없습니다. 잠시 후 다시 시도해 주세요.", "저장되었습니다.", "신청이 완료되었습니다.", "신청 내역 확인하기", "주민등록번호를 먼저 입력해 주세요". Journey-node table at 365–377. Applicability rule at 381–385, whose qualifier at 385 covers every Reason cell that follows. Non-observation is never used as a `not-applicable` reason (C1). |
| §14 → per-component applicability (Core §4.4) | 옮김 → Components & States | Harvested interactive components with maps: Primary / Secondary buttons keep loading/error/success `applicable` with role reasons (commits 신청하기/확인/다운로드). Tertiary closes L/E/S as `not-applicable` because cancel/reset/close do not commit a durable operation (`DESIGN.md` 469–471) — role reason, not capture-absence (C2 v10). Text Input and Select keep all seven `applicable` with declared error/disabled treatments. Dialog closes disabled/L/E/S as `not-applicable` because the panel is not the committing control (`DESIGN.md` 556–559). Badge is `kind: non-interactive` with a reason instead of a map (`DESIGN.md` 564). Tag keeps hover/focus-visible/disabled `applicable` and closes L/E/S as `not-applicable` (filter chip is not an in-place commit) (`DESIGN.md` 617–619). Prose-only inventory: no kind and no map (C4) (`DESIGN.md` 623). |
| §15 Motion & Easing — durations, named easings, stance, signature motions, reduced-motion | 옮김 → Foundations motion | `DESIGN.md` 220–224 (five duration tokens including `motion-collapse-width`), 226 (ease-in-out / ease / linear names and uses), 228 (reduced-motion → 0ms), 236–240 (five signature motions). Live `--krds-transition-*` values kept. No `cubic-bezier` was in the source; none invented; none named as a new gap (D1). |
| §15 Motion stance (spring/bounce/overshoot forbidden) | 옮김 → Foundations motion, with B2a | Recorded as the source states it at `DESIGN.md` 232; the causal reading is qualified in the same paragraph (B2/B2a). |
| B3 promotion gate | 옮김 → Foundations motion | Held in full at `DESIGN.md` 230: computed transition properties, animation name, duration, easing, reduced-motion behavior, and the per-component gate (E2c). |

## Sibling handling (`web/references/krds/.verification.md`)

The sibling exists — confirmed with `find web/references/krds -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input, so nothing in it was used to establish a portable body fact.

- Its full record is transcribed at `provenance.md` 106–125 and is **not** promoted into `DESIGN.md` as a portable token. The sibling count `1,934` stays in provenance (DESIGN dest **0**). Sibling handling head at `provenance.md` 102 records that stay.
- Values it carries that the visible source body does not: style_02 intro `색상은 정보 전달과 시각적 경험을 결정하는 중요한 요소다`; style_03 intro `타이포그래피는 정보를 효과적으로 전달하고 일관된 사용자 경험을 제공하는 데 필수적인 요소이다`; MOIS press full title; 정책브리핑 full title; English title `Pan-Government UI/UX Design Systems(KRDS), Transforming Public Websites and Applications`; 588 CSS vars; `rgb()` forms; selectors; 760×501px modal box; action-row padding `16px 40px 40px`; xlarge-input 72px right padding; size-height `72`; `SF Mono`; `swiper-icons`; `VideoJS`; `lnb-toggle`; `omd:add-reference`; getdesign `No designs found for "krds"` / `No designs found for 'krds'`; abbreviated `rgba a1` shadow; Tag `btn-delete` `(16px icon, no border)`. Recorded at `provenance.md` 127–137. Exact `색상은 정보 전달과 시각적 경험을 결정하는 중요한 요소다` DESIGN dest **0**; `1,934` DESIGN dest **0**; `16px icon, no border` DESIGN dest **0**.
- Its structural classifications were likewise not promoted (B1): coverage scores, fingerprint counts, interaction-kind fixture scores.

## A5 / A5a verification

The gate's `copy-loss` needles come only from contiguous non-Latin runs of four characters or more inside quotations. `compared < candidates` is expected, so the A5a hand sweep is mandatory and was run.

| Sweep | Extracted | Missing from `DESIGN.md` + `provenance.md` | Published copy among the missing | Handling |
|---|---:|---:|---:|---|
| Brand-issued strings in the source body (labels, CTAs, headlines, error/empty/success copy, MOIS quotations) | 70 distinct | 0 | 0 | All 70 survive in `DESIGN.md`. |
| Brand-issued strings in the sibling | 5 distinct extra | 0 | 0 | The two foundation intros and three MOIS titles survive in provenance. |
| `node test-v2/tools/latin-copy-audit.mjs --brand krds` after provenance | 95 candidates | remaining reported runs | 0 published-copy missing | Gate copy-loss compared 199 / candidates 921. Remaining non-Latin quoted runs that are writer-prose live in provenance A5 ledger. Two §13 occupation-task fragments are omitted in this log (D2). |

Sub-needle labels confirmed present individually in `DESIGN.md`: 시작하기, 신청하기, 확인, 확인하기, 다음 단계, 자세히 보기, 이전 단계, 취소, 다운로드, 초기화, 닫기, 글자·화면 설정, 글자·화면 표시 설정, 통합검색, 전체메뉴, 모두를 위한 디지털 서비스 경험, 누구나 쉽게 사용할 수 있는 공공 웹·앱, 신청이 완료되었습니다, 저장되었습니다, 처리 중..., 검색 결과가 없습니다. 다른 키워드로 다시 시도해 주세요., 신청한 내역이 없습니다., 새 신청서 작성하기, 신청 내역 확인하기, 필수 입력 항목입니다, Apply now, Pan-Government UI/UX Design System, 전자정부 표준프레임워크 UI 가이드.

A5 분모: gate copy-loss compared 199 / candidates 921. latin-copy-audit 95 candidates / 0 published-copy missing among the remaining. Sibling published-copy 5/5 survived in provenance.

## Gate run

`node test-v2/tools/migrate-reference.mjs --brand krds --gate-only` → `verdict: PASS`, `problems: []`, `coverage: [{ check: "copy-loss", compared: 199, candidates: 921 }]`. Separately, `scripts/design-md-core.cjs` `inspectDesignMd` reports `level: portable-core`, `portable_core: true`, `reasons: []`, and 0 `[FILL IN]`. Both are run results only. The gate has historically passed A5 losses, narrow ledgers, false log destinations, and B1 promotions, so neither is cited here as evidence that the migration is correct; the sweeps above and the two mandatory passes are. A5a was mandatory because `compared` 199 < `candidates` 921.

## Deviations recorded

- `DESIGN.md` is 10,569 words by `wc -w` at auditor close (10,522 at worker close), above the spec's 600–1,800-word SHOULD budget. The budget yielded to A1: eighteen colour keys plus 11-step tables, a 3-layer type scale, twelve harvested component records with dual `use`/`font`/`border` forms, a fourteen-row surface state contract plus thirteen journey-node rows, a 7-state applicability matrix, 12+5 official pattern tables, the 2023/2024 narrative, and the B2a qualifications cannot be compressed without dropping verified values or dropping the qualifications. Recorded rather than silently accepted.
- KRDS is a published first-party design system, so every derived-editorial close names that specification instead of copying the toss example's "not a separately published UI specification" (rulebook v12 B2a 전제 주석). Auditor-close measure `grep -o 'including the published KRDS documentation' DESIGN.md | wc -l` = 25. Scope `:13` and Family `:268` closes were expanded in audit to name comparison-coordinates / official-history and fallback-not-brand-face; count stayed 25.
- YAML `ds.description` writes `WCAG/KWCAG 2.2`; visible sections write KWCAG 2.1 / WCAG 2.1 AA. Both writings are kept; they are not collapsed (A1a/A4).

## F1 B2a scan (mandatory pass 1)

Re-read the whole portable body after drafting. Every causal, interpretive, or judging sentence was classified. Source-authored or source-recorded facts (MOIS quotations, token values, YAML `use` strings, §14 copy, pattern names) stay unqualified. Derived editorial readings — atmosphere, documentation/service split, comparison-coordinates / official-history-not-tokens, principle UI implications, Do/Don't justifications, color characterizations, shadow philosophy, motion-stance cause, type-rule readings, fallback-not-brand-face, kind/applicability verdicts, whitespace-as-civic-density, voice characterization, named-gaps selection — each have an adjacent complete close: "derived editorial implementation inference from the verified surfaces; they are not KRDS-authored or taken from a separately published UI specification, including the published KRDS documentation." 25 closes. Governance controlled copy is not a substitute. Auditor F1 expanded the `:13` and `:268` closes so those readings are named.

Sentences checked in this pass that are source facts, not derived: April 2024 release; 2023 survey three quotes; applying-set list; 장차법 / KWCAG 2.1 names; live `--krds-transition-*` values; Pretendard GOV family stack; harvested component measurements.

## F2 E2 대조 (mandatory pass 2)

Each log row was written only after `grep -o … | wc -l` per file showed the named value in the named file. Dual destinations are marked E2a. Homepage URL DESIGN dest **2** at 9/785 / P dest **4** at 13/24/54/69. `#256ef4` DESIGN dest **10** / P dest **5**. `WCAG/KWCAG 2.2` DESIGN dest **1** at 13 / P dest **2** at 26/33. OG dest 1/1 at 325/27. Favicon dest 1/1 at 324/15. `ds.type` DESIGN dest **0** / P dest **3** at 25/33/220. `1,934` DESIGN dest **0**. "B3 유지" is used only because `DESIGN.md` 230 contains the five evidence kinds and the per-component gate in full text (E2c). Persona deletion is described without restating names, ages, cities, or occupation-task fragments in the omission ledger (D2a). Absence claims in provenance do not list the absent items in the same sentence that asserts absence (E2d): the omission ledger names the section and the field kind; the sibling-only list is a transcription of items that *are* in provenance.

DONE migrated=1

## 개정 — 2라운드 (의미 검토 FAIL 5, 2026-08-29)

2라운드 판정이 지목한 다섯 결함만 고침. 토큰 값·컴포넌트 표·상태 applicability·구조·원본 미수정. 한정·원장 행 추가 없음 (25=25 유지). provenance 본문 무변경.

### 결함 1 — §11 목적 (1)(2) 복원 (A1)

Experience Scope `:13`에 원본 `:1122` 목적 (1) `동일한 사용 경험` · (2) `디자이너와 개발자` / `품질 편차`를 서사로 복원. 사실 인용, 한정 없음.

### 결함 2 — 기본 패턴 4종 가이드 복원 (A1)

Layout Basic Patterns 머리에 원본 `:953` `"사용성·접근성·인터랙션 가이드·플랫폼 고려사항"`을 복원. 12행 purpose 표는 그대로. provenance A5 원장 dest 1 유지 (E2a).

### 결함 3 — 금지 감탄 `"놀라운"` 복원 (A1)

Content Voice 목록에 원본 `:1090` 마케팅 감탄 `("놀라운", "혁신적인", "최고의")`를 복원. Don'ts `"감동의"` · 금지 표현 `"차세대"`는 원본 각 목록 그대로 병기. Don'ts 목록에 `"놀라운"`을 합치지 않음.

### 결함 4 — Locale English-option 승격 해제 (D2)

Content Locale에서 `English option` 결합을 제거. 원본 §10 `영문 카피가 필요한 경우`를 카피 규칙으로 되돌림. Locale는 Korean (`ko`) for public services. 페르소나 식별은 세 파일 dest 0 유지.

### 결함 5 — body-small YAML/§3 use 병기 (A1, 항목 11)

Type roles Body small: YAML `Caption / small label` + §3 `캡션 / 보조 / 작은 라벨`. 한쪽으로 고치지 않음.

갱신한 dest 행 (`grep -oF -e` 실측, 이 절을 쓰기 전 본문 기준; 표 바늘은 DESIGN dest를 가리킨다):

| 바늘 | 옛 DESIGN dest | 새 DESIGN dest | provenance dest |
|---|---:|---:|---:|
| `동일한 사용 경험` | 0 | 1 | 0 |
| `품질 편차` | 0 | 1 | 0 |
| `디자이너와 개발자` | 0 | 1 | 0 |
| `사용성·접근성·인터랙션 가이드·플랫폼 고려사항` | 0 | 1 | 1 |
| `놀라운` | 0 | 1 | 0 |
| `English option` | 1 | 0 | 0 |
| `영문 카피가 필요한 경우` | 0 | 1 | 0 |
| `Caption / small label` | 1 | 1 | 0 |
| `캡션 / 보조 / 작은 라벨` | 0 | 1 | 0 |
| `혁신적인` | 2 | 3 | 0 |
| `최고의` | 2 | 3 | 0 |

## 개정 — 3라운드 (의미 검토 FAIL 5, 2026-08-29)

3라운드 판정이 지목한 다섯 결함만 고침. 토큰 값·컴포넌트 표·상태 applicability·구조·원본 미수정. 한정 행 추가 없음 (25=25 유지). provenance Family 원장 행은 mixed-script 예문을 빼고 fallback-not-brand-face만 이름함 (본문 한정이 그 읽기만 닫음).

### 결함 1 — Primary 5 Role 세 번째 쓰임 복원 (A1)

Primary 표 `:121` Role에 원본 `:357` `약한 강조`를 복원. `약한 배경` (Key Characteristics)과 합치지 않음.

### 결함 2 — Gray 40 Role 절단 복원 (A1)

Gray 표 `:144` Role을 원본 `:390` `bg-disabled, disabled badge`로 되돌림. Gray 20 `input disabled bg`와 합치지 않음. 치환 `Disabled badge fill` 삭제.

### 결함 3 — 서체 설계 원칙 `기호` 메트릭 복원 (A1)

Family `:270`에 원본 `:444` `한글·라틴·기호의 메트릭이 균일`을 복원. Distinctive traits `:34` `한글·라틴·숫자 일체` (원본 Key Characteristics `:307`)는 유지 (내부 충돌 병기). `Hangul/Latin/numeral` 치환 삭제. 예문 `"민원 24"` / `"행정 API"` DESIGN dest **1**.

### 결함 4 — Body medium YAML/§3 병기 (A1, 항목 11)

Type roles Body medium: YAML `Standard body (default)` + §3 `표준 본문 (`<body>` 기본)`. 한쪽으로 고치지 않음.

### 결함 5 — Heading xxsmall 적용 `H5` 복원 (A1, 항목 11)

Type roles Heading xxsmall: 원본 `:468` 적용 `H5` + YAML 부재 주석 `(visible scale only; not a YAML key)`. Display Medium 행의 YAML 부재 주석은 그대로.

갱신한 dest 행 (`grep -oF -e` 실측, 이 절을 쓰기 전 본문 기준; 표 바늘은 DESIGN dest를 가리킨다):

| 바늘 | 옛 DESIGN dest | 새 DESIGN dest | provenance dest |
|---|---:|---:|---:|
| `약한 강조` | 0 | 1 | 0 |
| `bg-disabled` | 0 | 1 | 0 |
| `Disabled badge fill` | 1 | 0 | 0 |
| `기호` | 0 | 1 | 0 |
| `메트릭` | 0 | 1 | 0 |
| `한글·라틴·기호의 메트릭이 균일` | 0 | 1 | 0 |
| `한글·라틴·숫자 일체` | 1 | 1 | 0 |
| `Hangul/Latin/numeral` | 1 | 0 | 0 |
| `설계 원칙` | 0 | 1 | 0 |
| `Standard body (default)` | 1 | 1 | 0 |
| `<body>` | 0 | 1 | 0 |
| `표준 본문` | 0 | 1 | 0 |
| `H5` | 2 | 3 | 0 |
| `(visible scale only; not a YAML key)` | 2 | 2 | 0 |
| `민원 24` | 1 | 1 | 0 |
| `행정 API` | 1 | 1 | 0 |
