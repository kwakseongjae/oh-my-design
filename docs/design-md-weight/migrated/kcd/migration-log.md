# Korea Credit Data migration log

Rulebook: **v12** (`docs/design-md-weight/MIGRATION_RULEBOOK.md`)

Source: `web/references/kcd/DESIGN.md`
Sibling: `web/references/kcd/.verification.md`
Destination: `docs/design-md-weight/migrated/kcd/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/kcd/provenance.md`
Date: 2026-08-28
Worker: grok-4.6 T2 wave 38
Portable Core: pass (`scripts/design-md-core.cjs` evaluatePortableCore, `portable_core: true`, placeholders 0). Gate PASS / `problems []`. Worker-close SHA `3153f282a567b3f53a402db5de071ea1c979f15dbb4b7fe2f5bcaedb6841dbff`. Auditor DESIGN SHA `b57411f06b9fbea8d0d1c56d3d803d563ba2c7a578518219d868bbb571c5bcb9`.

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (id, name, display_name_kr, country, category, homepage, primary_color, logo) | 옮김 → Experience H1 / Scope + 분리 → provenance Identity | Portable file has no frontmatter. Name kept as H1 `Korea Credit Data Design System` (`DESIGN.md` 1) and body `한국신용데이터` DESIGN dest **3** at 9/13/431 · P dest **1** at 11. Homepage `https://kcd.co.kr` DESIGN dest **2** at 9/22 · P dest **3** at 14/46/51. `#2d91ff` DESIGN dest **15** at 11/35/49/58/86/103/147/226/233/240/264/265/317/319/377 · P dest **5** at 15/65/90/151/154. Favicon slug DESIGN dest **1** at 211 · P dest **1** at 17. |
| YAML `omd`, `verified`, `added`, `tokens.source`, `tokens.extracted`, `tokens.note`, `components_harvested` | 분리 → provenance + 옮김 → Scope / Semantic color note | `live-extract` DESIGN dest **1** at 9 · P dest **2** at 21/65. Token note DESIGN dest **1** at 103 · P dest **1** at 65. `components_harvested` DESIGN dest **0** · P dest **3** at 23/65/127. Dual for harvested is provenance Token note + this log, not the portable body. |
| YAML `tokens.colors` (16 keys) | 옮김 → Foundations Semantic color | Each key on its own role row. `canvas` / `on-primary` both `#ffffff`. |
| YAML `tokens.typography` | 옮김 → Typography & Assets | Family sans; nine roles with unitless YAML line heights. §3 / sibling complete writings sit beside YAML `use` (Product Hero "내 사업이 채워지는 모든 순간"; Section Hero "창업을 준비하는 사장님들을 위한 첫걸음"; Title "사업자 경영관리 서비스" / "관리 거래액"). 52px corporate hero is not a YAML key. |
| YAML `tokens.spacing` (xs 4 / sm 8 / md 12 / base 16 / lg 24 / xl 32 / xxl 48 / section 64) | 옮김 → Foundations Spacing | Unitless steps in a table. Not merged with rounded or type sizes. |
| YAML `tokens.rounded` (sm 6 / md 12 / lg 16 / xl 20 / full 9999) | 옮김 → Foundations Shape | `full: 9999` stays unitless; §5 `9999px` sits beside it. |
| YAML `tokens.shadow.none` | 옮김 → Foundations Elevation | `"none"` + four-level tint/hairline/accent table. |
| YAML `tokens.components` (8 records) | 옮김 → Components & States | Each record is its own block. `Primitive type` only where YAML has `type`. `card-surface`, `card-tint`, `badge-stat` omit kind + map (C4). |
| §1 Visual Theme & Atmosphere | 옮김 → Experience `scope` claim, Distinctive traits | 두 표면 범위, 흰 캔버스, 액션 블루, 플랫. 분위기 읽기는 인접 B2a. |
| §1 52–56px corporate headlines | 옮김 → Typography corporate-hero measurement | 52px / 700 / white on "모든 과정이 쉬워지도록 돕습니다". Not folded into YAML display 56. |
| §2 Color Palette & Roles | 옮김 → Foundations Semantic color | 16 roles + token-note restatement. |
| §2 footer Verified / Tier 1 / Tier 2 / Conflicts | 분리 → provenance Freshness / Surfaces / Proof | Conflicts unresolved: none. Dual writings (product-hero color; 캐시노트 시작하기 geometry) stay side by side, not resolved. |
| §3 Typography Rules | 옮김 → Typography & Assets | Family, hierarchy, four principles. Longer §3 / sibling use strings kept. |
| §4 Component Stylings | 옮김 → Components & States | Eight anatomies. Nav `#ffffff` background is the §4 complete writing beside YAML keys. |
| §5 Layout Principles | 옮김 → Layout & Platforms + Foundations Spacing/Shape | 8px base, scale, heroes, stat row, alternating bands, radius prose scale. |
| §6 Depth & Elevation | 옮김 → Foundations Elevation | Four levels + `box-shadow: none`. Shadow-philosophy sentence carries B2a. |
| §7 Do's | 옮김 → Experience Application rules | Brand rules. Not put into Governance controlled copy. |
| §7 Don'ts | 옮김 → Experience Avoid | Brand prohibitions. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms | <640 / 640-1024 / 1024-1440, touch targets, collapsing, shadowless images. Desktop band kept as written — not rewritten as `measures 1440px`. |
| §9 Agent Prompt Guide | 삭제 | 도구별 명령·프롬프트. Unique geometry (feature-card title 44px/700 `#192d82` + body 16px/400 `#44546f`; product-hero `#192d82` assignment) landed on Surface Card and Type roles (A3). Color/radius rules already in Experience/Foundations/Components. 슬롯 없는 위임 없음. Provenance §9 deletion check. |
| §10 Voice & Tone | 옮김 → Content & Locales | Register, context table, four verbatim samples, forbidden register. |
| §11 Brand Narrative | 옮김 → Experience `scope` ¶3 + 분리 → provenance Proof notes | 2016 DESIGN dest **2** at 13×2 · P dest **2** at 131/165. 2017 DESIGN dest **2** at 13×2 · P dest **2** at 131/165. 김동호 DESIGN dest **3** at 13×2/431 · P dest **2** at 131/165. 아이디인큐 DESIGN dest **3** at 13×2/431 · P dest **1** at 131. 오픈서베이 DESIGN dest **3** at 13×2/431 · P dest **1** at 131. KakaoTalk / "사업자 경영관리" / "관리 거래액" / "캐시노트 이용 사업장" / expansion list / "사업의 모든 순간" / closing refuse-and-embrace sentence. Dual: `DESIGN.md` Scope and provenance Proof notes (165 is the derived-editorial index mention of the same years / founder). Philosophy-layer public-knowledge bound kept in Scope. |
| §12 Principles | 옮김 → Experience Principles | Five principles and UI implications, with B2a on the section head. |
| §13 Personas | 삭제 | 페르소나 3인(이름·나이·도시·동기·소속 분류 포함). 승격 없음, sidecar 재수록 없음 (D2, D2a). Audience keeps only source-named groups: small-business owners (사장님); independent shop owners; sole proprietors. |
| §14 States | 옮김 → Components & States Capture record + per-component applicability | 본문 보존: empty / loading / error / success / skeleton / disabled 표. 선언 컴포넌트는 §4.4 7상태 표를 닫되 미관측 시각값은 발명하지 않음. graph 위임 없음. |
| §15 Motion & Easing | 옮김 → Foundations Motion | Durations 120/200/320ms, two signature motions, reduced-motion. Three unsourced curves deleted at the curve-value boundary (provenance Omission ledger). B3 전문 `DESIGN.md` 161. |
| HTML comment philosophy layer | 분리 → provenance Proof + 옮김 → Scope / Principles 한정 | Founding public-knowledge bound and interpretive-claim class stay in portable Scope and Principles, not only in the sidecar (B2). Personas comment is disposition, not a rehost of names. |
| Sibling `.verification.md` | 분리 → provenance Sibling handling + 옮김 → Type roles / Soft CTA dual writings | Issued-copy needles adopted. Sibling-only extras (`#0d1741`, `#57a8ff`, cashnote body `#000000`, `60px`, `50%`, nav `0px 0px 25px`, hero height 66px, 캐시노트 시작하기 height 40px) stay in provenance, not promoted. Dual writings that the source already names (52px corporate hero; product-hero `#f3faff` beside `#192d82`) stay in `DESIGN.md`. |

## A5a hand sweep

Source quoted non-Latin runs and published labels were extracted by hand from `web/references/kcd/DESIGN.md` and sibling `web/references/kcd/.verification.md`. Issued-copy needles (labels, CTAs, slogans, microcopy, names) were checked against the three output files. UI-meta, token paths, and font stacks were not needles.

- Extracted issued-copy needles: 32
- Missing from the three outputs: 0
- Dispositioned in this log: §13 biographies (no issued-copy needle among them)
- Gate `compared` 32 / `candidates` 191 (non-Latin needles only; Latin remainder is this hand sweep)

Surviving issued copy includes: 한국신용데이터, 캐시노트, 사장님, 내 사업이 채워지는 모든 순간, 모든 과정이 쉬워지도록 돕습니다, 앱 다운로드, 캐시노트 시작하기, 캐시노트 컨설턴트, 서비스 보기, 자세히 보기, 2026년 5월 기준, 회사소개, 서비스, 팀 문화, 인재영입, 새 소식, 사업의 모든 순간 마주하는 문제를 데이터와 연결로 풀어내고자 합니다., 모든 고민은 사장님에 대한 공감에서 시작합니다., 매출을 확인하고 관리하는 모든 순간, 누구나 기술 혜택을 누릴 수 있는 세상, 데이터와 연결로, 공감, 사업의 모든 순간, 사업자 경영관리, 관리 거래액, 캐시노트 이용 사업장, 창업을 준비하는 사장님들을 위한 첫걸음, 사업자 경영관리 서비스, 오류가 발생했습니다, 필수, 김동호, 아이디인큐, 오픈서베이.

## Key-path check (A1)

YAML `tokens.*` paths confirmed in `DESIGN.md` by string search, not by shared numerals:

- colors 16 keys → Semantic color role rows (`tokens.colors.primary` through `on-primary`)
- typography 9 roles + sans → Type roles / Family (`tokens.typography.display-hero` through `button`)
- spacing xs/sm/md/base/lg/xl/xxl/section → Spacing table
- rounded sm/md/lg/xl/full: 9999 → Shape table (`9999` at Shape; §5 `9999px` beside it)
- shadow.none → Elevation
- components 8 × type/bg/fg/radius/padding/font/use (and recorded height/border/focus/active) → matching blocks

`tokens.spacing.md: 12` ≠ `tokens.rounded.md: 12`. `tokens.spacing.base: 16` ≠ `tokens.rounded.lg: 16` ≠ type 16. `tokens.spacing.lg: 24` ≠ outline `0 24px`. `tokens.spacing.xxl: 48` ≠ soft-CTA `48px`. `tokens.rounded.full: 9999` ≠ `9999px` spelling. Soft-CTA `16px` ≠ Outline `16px` written as the other control.

## C2 / A1b

`Primitive type: button` 3 = YAML `type: button` 3. `input` 1=1. `card` 2=2. `badge` 1=1. `tab` 1=1. `not in the token set` dest 0.

Soft / Outline / Corporate Ghost / Nav L/E/S closed on destination role. Input error open, loading/success closed. `loading | applicable` DESIGN dest **0**. `error | applicable` DESIGN dest **1** at Form field. Surface Card / Blue-Tinted Card / Stat Chip: kind + map omitted (C4).

## D1 / D2a

`native application` / `mobile app` / `back-office` / `product application` / `measures 1440px` / `does not say` dest 0 in `DESIGN.md`. Source wording `mobile-native` and `loud consumer app` is kept. Audience has no persona name, motivation, or affiliation classification. Provenance Omission ledger is unidentified (3인; 이름·나이·도시·동기·소속 분류).

## F1 / F2

F1 B2a scan: DESIGN.md re-read end-to-end. Causal / interpretive sentences received the adjacent complete qualifier (`derived editorial implementation inference` + `not KCD-authored or a separately published UI specification`). Count **36** = provenance inventory **36**. F3 auditor folded arriving / dismissal / two-way use-name keep into the Motion gate qualifier (`DESIGN.md` 159) and expanded nine inventory rows that under-named their qualifiers (count unchanged). Font-evidence "does not publish" negative claim retracted. Sibling-only hero height 66px removed from the portable body.

F2 E2: each log row was written after `grep` on the destination files. Dual destinations named. B3 claimed only because `DESIGN.md` 161 carries the five-kind sentence. F3 auditor corrected identity P dest for `한국신용데이터` / `#2d91ff` and §11 P dest for `2016` / `2017` / `김동호` (131/165).
