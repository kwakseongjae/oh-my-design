# Kakao T migration log

Rulebook: **v12** (`docs/design-md-weight/MIGRATION_RULEBOOK.md`)

Source: `web/references/kakaot/DESIGN.md`
Destination: `docs/design-md-weight/migrated/kakaot/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/kakaot/provenance.md`
Date: 2026-08-28
Worker: grok-4.6 T2 wave 37
Portable Core: pass (`scripts/design-md-core.cjs` evaluatePortableCore, `portable_core: true`, placeholders 0). Gate PASS / `problems []`. Worker-close SHA `2804c44199171f702787b4046d538d5a7d2a57803bd0e039f68600e3b72d5491`. Auditor SHA `5c521dda650fe43f6e840dc5c4f615ede6618724e0d58159fa2e0133b47e396c`.

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (id, name, country, category, homepage, primary_color, logo) | 옮김 → Experience H1 / Scope + 분리 → provenance Identity | Portable file has no frontmatter. Name kept as H1 `Kakao T Design System` (`DESIGN.md` 1) and body `카카오 T` DESIGN dest **3** at 9/13/546. Homepage `https://www.kakaomobility.com` DESIGN dest **2** at 9/23 · P dest **2** at 13/42 (Scope, Primary tasks, Identity, Surfaces — not Scope+Identity only). `#FEE500` DESIGN dest **13** at 9/11/13/34/47/57/79/81/99/153/223/238/381 · P dest **6** at 14/36/48×2/68/132. `#fee500` DESIGN dest **3** at 79/81/238. Favicon slug DESIGN dest **1** at 208 · P dest **1** at 16. |
| YAML `omd`, `verified`, `tokens.source`, `tokens.extracted`, `components_harvested` | 분리 → provenance | 출처 원장·freshness. `prose-derived` DESIGN dest **1** at 9 (`The YAML token set is \`prose-derived\``). Exact `tokens.source: prose-derived` DESIGN dest **0** / P dest **0** (P has table `tokens.source \| prose-derived` at 19 and the value sentence at 60). `components_harvested` DESIGN dest **0** · P dest **3** at 21/60/121. Dual for harvested is provenance Token note + this log, not the portable body. |
| YAML `tokens.colors` (17 keys) | 옮김 → Foundations Semantic color | Each key on its own role row. `primary`/`brand` both `#fee500`. `foreground`/`on-primary` both `#191919`. `#EBECED` and `#D1D3D5` stay on §2 prose roles with no invented YAML key. |
| YAML `tokens.typography` | 옮김 → Typography & Assets | Family sans/mono; nine roles with unitless YAML line heights. Display Hero YAML `30` beside §3 `28–32px`. Fare Display YAML has no lineHeight; §3 `tight` kept. Caption Token-set use is the §3 complete statement `Timestamps, fine print, ETA sublabels` (YAML `:43` is the shorter form); restored in `Revision 2026-08-28 (wave37 review)`. |
| YAML `tokens.spacing` (xs 4 / sm 8 / md 12 / base 16 / lg 20 / xl 24 / xxl 32) | 옮김 → Foundations Spacing | Unitless steps in a table. Not merged with rounded or type sizes. |
| YAML `tokens.rounded` (sm 8 / md 12 / lg 16 / full 9999) | 옮김 → Foundations Shape | `full: 9999` stays unitless. Component `999px` pills stay on those components. Sheet `20px` stays on `dialog-sheet`. |
| YAML `tokens.shadow` (card / sheet / floating) | 옮김 → Foundations Elevation | Toast component shadow `0px 4px 12px` kept beside floating `0px 4px 16px`. |
| YAML `tokens.components` (13 records) | 옮김 → Components & States | Each record is its own block. `Primitive type` only where YAML has `type`. `card-trip`, `badge-live`, `toast-snackbar` omit kind + map (C4). |
| §1 Visual Theme & Atmosphere | 옮김 → Experience `scope` claim, Distinctive traits | Product/surface range, two-register split, map-first, 8–12px radii. Atmosphere readings carry adjacent B2a. |
| §2 Color Palette & Roles | 옮김 → Foundations Semantic color | All named roles and the two-register conflict. Conventional class for product hexes kept in Scope and Semantic color. |
| §2 footer Verified / Tier 1 / Tier 2 / Conflicts | 분리 → provenance Freshness / Surfaces / Proof + 옮김 → Semantic color conflict sentence | Dual: ledger and the portable conflict writing. |
| §3 Typography Rules | 옮김 → Typography & Assets | Family, hierarchy, conventions. Kakao house face stays declared-only for product UI. |
| §4 Component Stylings | 옮김 → Components & States | Thirteen anatomies, selected/pressed/disabled writings, live-badge en-route pair kept on the same pill. |
| §5 Layout Principles | 옮김 → Layout & Platforms + Foundations Spacing/Shape | Map-first, sheet padding 20px, map chrome 16px, ~1200px, radius prose scale. |
| §6 Depth & Elevation | 옮김 → Foundations Elevation | Four levels. Toast 12px blur not collapsed into floating 16px. |
| §7 Do's | 옮김 → Experience Application rules | Brand rules. Not put into Governance controlled copy. |
| §7 Don'ts | 옮김 → Experience Avoid | Brand prohibitions. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms | <768 / 768–1024 / >1024, touch targets, sheet-as-responsive-unit. |
| §9 Agent Prompt Guide | 삭제 | 도구별 명령·프롬프트. Unique geometry (class name 16px/600 `#26282B`, est. fare 14px/400 `#76787A`; matched-driver 18px/600) landed on Vehicle-Class Card and Capture record Success (matched) (A3). Color/radius/map rules already in Experience/Foundations/Components. 슬롯 없는 위임 없음. |
| §10 Voice & Tone | 옮김 → Content & Locales | Register, context table, forbidden phrases, four voice samples with verified/illustrative class. |
| §11 Brand Narrative | 옮김 → Experience `scope` ¶3 | 2017 DESIGN dest **2** at 13×2 · P dest **3** at 112/124/146. T = transportation, Kakao Taxi 2015, Kakao Driver, Kakao Parking, seven-service span, KakaoTalk national-signal sentence, design thesis, refusal pair, and the closing warm-middle sentence (`warm middle` DESIGN dest **1** at 13 · P dest **1** at 124). Dual: `DESIGN.md` Scope and provenance Claim ledger / Proof notes. |
| §12 Principles | 옮김 → Experience Principles | Six principles and UI implications, with B2a on the section head. |
| §13 Personas | 삭제 | 페르소나 3인(이름·나이·도시·동기·소속 분류 포함). 승격 없음, sidecar 재수록 없음 (D2, D2a). Audience keeps only source-named groups: anyone who hails a taxi; riders; Koreans who tap the yellow icon. |
| §14 States | 옮김 → Components & States Capture record + per-component applicability | 본문 보존: empty / loading / error / success / skeleton / disabled 표. 선언 컴포넌트는 §4.4 7상태 표를 닫되 미관측 시각값은 발명하지 않음. graph 위임 없음. |
| §15 Motion & Easing | 옮김 → Foundations Motion | Durations 0/150/250/400/300ms, 90% use claim, four signature motions, reduced-motion. Four unsourced curves deleted at the curve-value boundary (provenance Omission ledger). B3 전문 `DESIGN.md` 159. |
| HTML comment philosophy layer | 분리 → provenance Proof / Omission | Tier 1/2 restatement and illustrative-voice note. Personas comment is disposition, not a rehost of names. |

## A5a hand sweep

Source quoted non-Latin runs and published labels were extracted by hand from `web/references/kakaot/DESIGN.md` (no sibling). Issued-copy needles (labels, CTAs, slogans, microcopy, names) were checked against the three output files. UI-meta, token paths, and font stacks were not needles.

- Extracted issued-copy needles: 32
- Missing from the three outputs: 0
- Dispositioned in this log: §13 biographies (no issued-copy needle among them)
- Gate `compared` 29 / `candidates` 218 (non-Latin needles only; Latin remainder is this hand sweep)
- latin-copy-audit lost issued copy: 0

Surviving issued copy includes: 카카오 T, 호출하기, 결제하기, 로그인, 다음, 취소, 호출 취소, 어디로 갈까요?, 홈, 이용내역, 결제, 전체, 도착, 운행 중, 일반, 블루, 모범, 벤티, 예약, 추천, 호출이 취소되었어요, 자세히 보기, 우리의 기술로 생활을 움직입니다, 해요체, 합니다, 잠시만 기다려 주세요, 기사님을 찾고 있어요, 차량이 도착했어요, 결제가 완료되었어요, 주변에 차량이 없어요. 잠시 후 다시 시도해 주세요, 최근 이용 내역이 없어요, 오류가 발생했습니다, 최고의, 역대급, 안심, 대리운전, 택시 호출하기, 호출에 실패했어요. 다시 시도해 주세요, 확인, 다른 차량 보기, 현재 위치.

## Key-path check (A1)

YAML `tokens.*` paths confirmed in `DESIGN.md` by string search, not by shared numerals:

- colors 17 keys → Semantic color role rows
- typography 9 roles + sans/mono → Type roles / Family
- spacing xs/sm/md/base/lg/xl/xxl → Spacing table
- rounded sm/md/lg/full: 9999 → Shape table (`9999` at Shape; `999px` only on chips/badge)
- shadow card/sheet/floating → Elevation table
- components 13 × type/bg/fg/radius/padding/font/use (and recorded states) → matching blocks

`tokens.spacing.md: 12` ≠ `tokens.rounded.md: 12`. `tokens.spacing.base: 16` ≠ `tokens.rounded.lg: 16` ≠ type 16. `tokens.spacing.lg: 20` ≠ sheet `20px` radius. `tokens.rounded.full: 9999` ≠ `999px`. Toast `0px 4px 12px` ≠ floating `0px 4px 16px`.

## C2 / A1b

`Primitive type: button` 4 = YAML `type: button` 4. `input` 2=2. `card` 2=2. `badge` 2=2. `dialog` 1=1. `tab` 1=1. `toast` 1=1. `not in the token set` dest 0.

Primary / Dark / Danger L/E/S open (in-place commit). `loading \| applicable` DESIGN dest **3** at 255/277/321. Outline / Search loading·success / Error-input loading·success / Vehicle card / Status chip / Trip sheet / Bottom tab L/E/S closed on role. Trip card / Live badge / Snackbar: kind + map omitted (C4).

## D1 / D2a

`native application` / `mobile app` / `back-office` / `product application` / `measures 1440px` / `does not say` dest 0 in `DESIGN.md`. Source wording `mobility app` is kept. Audience has no persona name, motivation, or affiliation classification. Provenance Omission ledger is unidentified (3인; 이름·나이·도시·동기·소속 분류).

## Revision 2026-08-28 (wave37 review)

Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v12**. Trigger: semantic review FAIL 1, re-confirmed by the orchestrator. One defect only. Token values, component-table structure, other state rows, B2a complete qualifiers, and the derived-inventory 1:1 were not opened. Source `web/references/kakaot/DESIGN.md` was not modified. Sibling `web/references/kakaot/.verification.md` does not exist (`find` on that path → `No such file`).

`find` confirmed the five files before any count: dest `DESIGN.md` / `provenance.md` / `migration-log.md` / `audit-log.md`, source `DESIGN.md`. Sibling path was checked directly; a missing file is unmeasured, not 0. Counts below are `grep -o '<needle>' <file> | wc -l`, file by file. A file that exists and prints no match is 0 for that file.

**1. A1 · 항목 2/5 — Caption §3 Use 복원.** Source §3 `:136` writes Caption Use as `Timestamps, fine print, ETA sublabels`. YAML `:43` is the shorter form `Timestamps, fine print`. The same YAML-vs-§3 length split already landed Heading Large's §3 addition (`어디로 갈까요?`) at `DESIGN.md` 202; Caption kept only the YAML abbreviation at Type roles `:199`. The longer writing is the source's complete statement. Restored the complete Use on the Caption Token-set use cell at `DESIGN.md` 199: `Timestamps, fine print, ETA sublabels`. No new sentence, no new B2a qualifier, no new provenance inventory row — this is a source-value restore into an existing table slot, not a derived reading.

실측 (`find` 후 `grep -o` | `wc -l`, 파일별):

| needle | orig | sib | dest after | provenance after |
|---|---|---|---|---|
| `ETA sublabels` | 1 | no file | **1** | 0 |
| `Timestamps, fine print, ETA sublabels` | 1 | no file | **1** | 0 |
| `Timestamps, fine print` | 2 | no file | **1** | 0 |

`ETA sublabels` dest **1** = Type roles Caption `:199`. orig **1** = source §3 `:136`. YAML `:43` does not contain `ETA sublabels`; orig `Timestamps, fine print` **2** is YAML `:43` plus the §3 cell as a prefix of the complete string. dest `Timestamps, fine print` **1** is that same Caption cell after the restore. provenance **0** — the claim ledger already names type-role `use` as a class and does not need a second body fact. This revision section and the updated YAML typography row name the same needles; those mentions are this file's denominator (E2d).

**줄 포인터.** dest DESIGN.md `wc -l` **589** unchanged (in-cell restore). Every `DESIGN.md` pointer in this log and in `provenance.md` was re-read against the current file and kept: homepage 9/23 · `#FEE500` 9/11/13/34/47/57/79/81/99/153/223/238/381 · `#fee500` 79/81/238 · `카카오 T` 9/13/546 · slug 208 · `prose-derived` 9 · `2017` 13×2 · `warm middle` 13 · B3 159 · Type roles 188/199/202/204 · Assets 208 · Capture 232 · `loading \| applicable` 255/277/321 · Search 338 · Vehicle-Class 384 · Status chip 420 · Named gaps 580. provenance pointers kept: Identity 13/14/16/19/21 · Surfaces 42 · `#FEE500` 14/36/48×2/68/132 · `2017` 112/124/146 · `components_harvested` 21/60/121 · inventory 144–178 (35 data rows). Historical `audit-log.md` keeps the F3 snapshot (DESIGN 589); it is not rewritten as a current pointer.

B2a `derived editorial implementation inference` dest **35** = provenance inventory **35** data rows. gate `PASS` / `problems []`. `inspectDesignMd` `portable_core: true` / `level: portable-core` / `reasons: []`. SHA-256 `a806cf57199df19b34d5c443aa067c1b0a303881e3d9095ed85c77b4427fe976`.

**안 건드린 것.** 토큰 값 · 컴포넌트 표의 다른 행 · state 표 · B2a 완전형 35=원장 35 · Heading Large `:202` · 원본 `web/references/kakaot/**`.
