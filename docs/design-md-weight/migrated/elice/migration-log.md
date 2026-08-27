# Elice migration log

Source: `web/references/elice/DESIGN.md`
Destination: `docs/design-md-weight/migrated/elice/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/elice/provenance.md`
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v9**
Date: 2026-08-26

Every row below was checked by grepping the actual destination file before it was written (F2). Where a value landed in two places, both destinations are named.

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (`id`, `name`, `display_name_kr` 엘리스, `country`, `category`, `homepage`, `primary_color`) | 분리 → provenance Identity | Portable file carries no frontmatter. Name kept as H1 `Elice Design System`; 엘리스 kept in the Scope claim as well, so this row lands in **both** provenance Identity and portable Scope. |
| YAML `logo` (favicon proxy URL) | 분리 → provenance Identity **and** 옮김 → portable §3 Assets | Recorded in both places, in both as a third-party favicon proxy and catalog pointer rather than an Elice-published asset. |
| YAML `verified` / `added` / `omd` / `tokens.source` / `tokens.extracted` / `components_harvested` | 분리 → provenance Identity + Freshness | Ledger and freshness fields. `live-extract` and the 2026-06-26 date are recorded there; the portable body carries the inspection date as an evidence boundary only. |
| YAML `tokens.note` | 분리 → provenance (verbatim) **and** 옮김 → portable §1 Scope / §2 Semantic color | The two-surface reading is quoted verbatim in the ledger; its substance (`#212121` corporate CTA, `#7353ea` product action, `#524fa1` deep-indigo mark) is in Scope and Foundations. |
| YAML `tokens.colors` (18 values) | 옮김 → §2 Semantic color | All 18 kept with their source role names and the surface each was computed on. (원장 재검증에서 정정: 원본 YAML `colors:`는 `web/references/elice/DESIGN.md:20–37`의 18개 항목이고, §2 Semantic color·provenance 청구원장 모두 18개를 담는다. 앞서 적힌 19는 실측과 어긋난 수치였다.) |
| YAML `tokens.typography` (family, display-hero, body, nav, nav-alt, badge) | 옮김 → §3 Family + Type roles | Unitless ratios preserved as ratios (`1.20`, `1.50`) beside the px equivalents; `2.50rem` / `1.00rem` / `0.88rem` / `0.69rem` kept as the source wrote them. |
| YAML `tokens.spacing` / `rounded` | 옮김 → §2 Spacing + Shape, restated in §5 | 4/8/12/16/24/32/48 spacing; 4/8/16/24/500px radii plus the 0px underline field. |
| YAML `tokens.shadow.none` | 옮김 → §2 Elevation | `box-shadow: none` across nav, hero, cards, chips on both surfaces. |
| YAML `tokens.components` (9 entries) | 옮김 → §4 Components & States | Each entry keeps its verified `type` — `button` ×4, `tab`, `card` ×2, `input`, `badge` — beside the Core kind, so the primitive distinction survives. Per-component claim surfaces are in provenance. |
| §1 Visual Theme & Atmosphere | 옮김 → §1 Scope + Distinctive traits | Two-surface split, ink values, flat depth, accent family, rounding, status palette. The "calm corporate / energetic product" reading carries an adjacent derived-editorial qualifier; the source itself labels it an editorial reading. |
| §2 Color Palette & Roles | 옮김 → §2 Semantic color | Role names and per-surface attribution preserved, including the `엘카데미 로그인 button, links, active-nav tint` phrasing verbatim. |
| §3 Font Family + Hierarchy | 옮김 → §3 Font evidence + Family + Type roles | Evidence classes separated: proprietary display face, live computed use, and the absence of any distributed asset or license statement. |
| §3 Principles (4 typographic readings) | 옮김 → §3, under a derived-editorial qualifier | They interpret the metrics rather than restate them, so the qualifier sits adjacent to them. |
| §4 Component Stylings (buttons, input, cards, badge, navigation) | 옮김 → §4 per component | Nine component declarations plus the Top Navigation Bar container, the only carrier of the corporate nav item's 8px 16px padding (its 8px radius is also named in §2 Shape). Each declaration names its source `type` on the Kind line, including the two `card` entries and the `badge`. |
| §4 footer **Verified** / Tier 1 / Tier 2 / Conflicts | 분리 → provenance Freshness + Surfaces and sources **and** 옮김 → portable §1 Scope (+ §3 Assets) | The Tier 2 negative results (getdesign.md SPA shell, refero echo) and "Conflicts unresolved: none" are provenance-only. The Verified date 2026-06-26 and all four Tier 1 URLs are **also** in the portable body — `https://elice.io/en`, `https://academy.elice.io` and `https://accounts.elice.io` in §1 Scope as the evidence boundary, `https://github.com/elicer` in §1 Scope and again in §3 Assets — so this row lands in **both** files. |
| §5 Layout Principles | 옮김 → §5 Layout & Platforms (spacing, grid, radius scale) | Statistic strings "13,000 +" and "2,810,000 +" carried verbatim. The whitespace philosophy is interpretive and carries an adjacent qualifier. |
| §6 Depth & Elevation | 옮김 → §2 Elevation | Three-level table kept intact. The "clean, modern, fast" reading carries an adjacent qualifier. |
| §7 Do's | 옮김 → §1 Principles / §2·§3 rules | Brand application rules stayed in Experience and Foundations; none was folded into the Governance control clauses. |
| §7 Don'ts | 옮김 → §1 Avoid | All eight kept, including `#000000`. The Avoid lead-in qualifies all ten items and states that eight restate the source's list while the last two are evidence-boundary rules from Scope. |
| §8 Responsive Behavior | 옮김 → §5 Layout & Platforms | Breakpoints (640px / 1024px / 1440px), collapsing strategy, image behaviour (shadowless illustrations and screenshots at any size), and touch-target heights kept together in §5 under one derived-editorial qualifier, because the 2026-06-26 record is a desktop inspection. §3 Assets does not restate the image line. |
| §9 Agent Prompt Guide — Quick Color Reference | 삭제 | Restatement of §2 values, all of which are in §2 Semantic color. No value is unique to this table. |
| §9 Agent Prompt Guide — Example Component Prompts (4) | 삭제 | Tool-shaped prompt wrappers. Every value they name (hero 40px/500/48px/-2.4%/`#191f28`, card `#ffffff` + `1px solid #e9ebf0` + 24px + 32px, nav 4px + `rgba(115,83,234,0.08)` + `#7353ea`, badge `#dfebe0`/`#1b5e20`/4px/11px) is in §2, §3, or §4. No slot-less delegation. |
| §9 Agent Prompt Guide — Iteration Guide (7 steps) | 삭제 | Same rules restated as instructions; the rules live in §1 Principles / Avoid and §2. |
| §10 Voice & Tone | 옮김 → §6 Content & Locales | Three verbatim samples kept byte-for-byte, including "엘카데미 \| 오늘 배워서 내일 바로 적용하는 실습중심 AI 교육". Tone table kept with an adjacent derived-editorial qualifier. Forbidden register kept. |
| §11 Brand Narrative | 옮김 → §1 Scope; 증거 등급 → provenance | 엘리스그룹, the AI Full Stack continuum, and the three product lines are in Scope. The source's own weaker attribution for the 2015 / KAIST founding detail is carried in the Scope text and recorded in the provenance evidence-class table. |
| §12 Principles (5) | 옮김 → §1 Principles | All five kept with their UI implications, under the B2a qualifier. |
| §13 Personas | 삭제 | The source labels them fictional archetypes with illustrative names. Not promoted to Audience or primary tasks, and not rehosted in provenance — the omission ledger records the deletion without reproducing any name, age, city, or segment. |
| §14 States (9 rows) | 옮김 → §4 Product state contract | Body preserved in full, including "오류가 발생했습니다" and "필수". Marked as the source's state language under a derived-editorial qualifier and explicitly not as per-component paint values. No graph delegation. |
| §15 Motion — durations (120ms / 200ms / 320ms) | 옮김 → §2 Motion | Kept as a table with uses, including the `motion-fast` "Hover, button press, focus" use line that is the source's only per-interaction language. Carries an adjacent qualifier because the source ledger gives motion no capture or publication attribution. |
| §15 Motion — three `cubic-bezier` curve values | 삭제 (본문) → 분리 → provenance 생략 원장 | Unsourced curves. The role names `ease-enter` / `ease-exit` / `ease-standard` and their uses stay in §2 Motion; the three literal values are held in the provenance omission ledger, and the exact curves are named as a gap in §7. |
| §15 Motion — rules + reduced-motion | 옮김 → §2 Motion | Press response, fade-from-below at `motion-standard` / `ease-enter`, no bounce or spring, and the `prefers-reduced-motion: reduce` contract are all in the body. |
| HTML source comment (Tier 1 inspect notes, voice attribution, narrative attribution, persona label, interpretive-claims note) | 분리 → provenance Surfaces and sources + Evidence classes | The evidence-class boundaries the comment establishes are also restated in the portable body wherever a standalone reader needs them, so this row lands in **both** files. |

## Rule notes

- **A5** — every non-Latin published string in the source survives byte-for-byte in the portable body: 엘리스, 엘리스그룹, 엘카데미, 엘카데미 로그인, 로그인, 회원가입, 탐색, 내 클래스, 대시보드, 오늘 배워서 내일 바로 적용하는 실습중심 AI 교육, 오류가 발생했습니다, 필수. English glosses sit beside them, never in place of them.
- **A1a** — the unitless ratios `1.20` and `1.50` are in the §3 type-role table beside their px equivalents.
- **A1b** — the source `type` is named on every component's Kind line in §4: `button` ×4, `tab`, `input`, `card` ×2, `badge`.
- **B3** — §2 Motion states the promotion condition with all five evidence kinds (transition properties, animation name, duration, easing, reduced-motion behaviour) and the per-component-observation gate, and rejects a single-curve confirmation as sufficient. This claim is written because that full sentence is in the body.
- **C1 / C2** — every `not-applicable` entry in the file is on the Product Nav Item, and each states that control's role as the reason. No entry anywhere uses an absence of observation as grounds. Buttons and the auth field keep all seven states applicable with treatments omitted.
- **C3** — §4 Capture record says state coverage is not claimed complete.
- **C4** — the two cards and the badge get `kind: non-interactive` with a reason and no applicability map, because the source assigns them no control role.
- **D1a** — Named gaps lists only the two domains the source itself establishes: the easing roles it names, and the hover/press/focus interactions its `motion-fast` use line names. No further domain is enumerated.
- **D2** — the persona section is deleted from both files; no demographic detail is rehosted.
- **E2a** — six rows above name two destinations each: YAML identity, `logo`, `tokens.note`, the §4 footer (Verified date + the four Tier 1 URLs), §11 Brand Narrative (Scope body + provenance evidence grading), and the HTML source comment.

- **B2a (F1 pass)** — the pass added or completed adjacent qualifiers at eight further places: the Scope two-chrome framing, the Scope positioning evidence class, the Distinctive-traits usage readings, the Avoid lead-in (8 → 10 items), the Foundations non-interchangeability rule, the §3 type-role readings, the §5 whitespace and responsive readings, and the §6 voice reading extended over the forbidden-register list. Three unqualified evaluations from the source's own prose were dropped from Foundations: `generous` (card padding), `compact` (button padding) and `workhorse` (8px radius). Of the three only `workhorse` survives, qualified, in §1 Avoid ("8px is the default workhorse"); `generous` and `compact` survive nowhere in the portable body. The values they characterized are intact — 32px card padding and 8px 16px button padding in §2 Spacing and §5 — so no verified value was lost, but the earlier form of this line claimed survival in Avoid for both, which was true of `workhorse` alone.

## 게이트 수정 (T2-1 웨이브 22)

`node migrate-reference.mjs --brand elice --gate-only`가 `missing-governance-authority`로
떨어졌다. `scripts/design-md-core-conformance.cjs`의 `governance_authority` 검사가
`authorityBody === expectedAuthority`(같은 파일 `GOVERNANCE_COPY.en.authority`)로 **정본 문장
바이트 일치**를 강제하기 때문이다. `kind=evidence-backed-reconstruction`의 정본은 정확히
"This document is an evidence-backed reconstruction, not authority for an unrelated target
project." 한 문장이므로, 브랜드 고유 단서를 덧붙여 확장한 문장은 통과할 수 없다.

- **claim 블록 안** — 정본 한 문장만 남겼다(`DESIGN.md` §7 Authority).
- **claim 블록 밖** — Elice 고유 단서는 삭제하지 않고 같은 Governance 절의 `claim-end`
  **직후**에 인접 배치했다: 세 개 Elice 표면 라이브 검사 + 브랜드 공개 포지셔닝에서 조립됐다는
  것, Elice 발행물이 아니며 발행 권위는 엘리스그룹에 남는다는 것. 위치만 바뀌었고 의미는
  유실되지 않았다. 같은 웨이브의 `digital-agency-jp`가 같은 원인으로 같은 처리를 받았고
  검토자가 정당하다고 판정한 선례를 따랐다.

정본 일치가 요구되는 나머지 세 Governance claim(`application-priority`, `unknowns`,
`changes`)은 이미 `GOVERNANCE_COPY.en`과 바이트 일치라 손대지 않았다. `scope`,
`primary-tasks`, `foundations`는 정본 문구 대조가 아니라 `hasSubstantiveText` / 선언 `count`
대조 검사이므로 해당 요구가 없고, `count=5`는 §1 Primary tasks의 5개 항목과 일치한다.

토큰 값, 컴포넌트 표의 값, 상태 applicability 판정, 섹션 구조, 원본
`web/references/elice/DESIGN.md`는 건드리지 않았다.

### 원장 재검증 (F2 재수행)

이 파일과 `provenance.md`에는 수치 줄번호 포인터가 없고(파일·섹션 이름 포인터만 사용),
이번 절에서 새로 도입한 원본 줄번호 `web/references/elice/DESIGN.md:20–37`은 현재 파일과
일치한다. 표의 각 행은 실측 grep으로 재대조했다. 확인한 수치: 색 18개(§2 Semantic color의
distinct hex 18 = 원본 YAML `colors:` 18 = provenance 청구원장 15행이 담는 18값 — 원장의
19는 위에서 18로 정정), 타입 역할 5행, 컴포넌트 선언 9개 + Top Navigation Bar 1개 = §4의
`###` 12개 중 10개(나머지 둘은 Capture record와 Product state contract), 상태 계약 9행, Avoid 10항, Principles 5항, 모션 지속시간 3개(120ms/200ms/320ms),
통계 문자열 "13,000 +"·"2,810,000 +" 보존, 비라틴 published string 12종 전수 생존
(엘리스·엘리스그룹·엘카데미·엘카데미 로그인·로그인·회원가입·탐색·내 클래스·대시보드·오늘 배워서
내일 바로 적용하는 실습중심 AI 교육·오류가 발생했습니다·필수), §13 페르소나의 이름·나이·도시가
두 출력 파일 어디에도 재게시되지 않음. 색 개수 한 건 외에 밀린 포인터는 없었다.

게이트: `node migrate-reference.mjs --brand elice --gate-only` → **PASS**, problems `[]`.
`inspectDesignMd(...).conformance.portable_core` → `true`, reasons `[]`.
