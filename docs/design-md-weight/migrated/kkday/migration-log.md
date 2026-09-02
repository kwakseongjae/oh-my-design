# KKday migration log

Rulebook: **v12** (`docs/design-md-weight/MIGRATION_RULEBOOK.md`)

Source: `web/references/kkday/DESIGN.md`
Destination: `docs/design-md-weight/migrated/kkday/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/kkday/provenance.md`
Date: 2026-08-28
Worker: grok-4.6 T2 wave 39
Portable Core: pass (`scripts/design-md-core.cjs` evaluatePortableCore, `portable_core: true`, placeholders 0). Gate PASS / `problems []`. Worker-close SHA `87403fbfdda1994301a1d6d19807db9855826395e4c4ce768edcae6db5566140`. Auditor SHA `021d3bc0209aa9cb22775647cca90a89f05c9d4f4a70cf5b5d3f08030ac038be`.

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (id, name, country, category, homepage, primary_color, logo) | 옮김 → Experience H1 / Scope + 분리 → provenance Identity | Portable file has no frontmatter. Name kept as H1 `KKday Design System` (`DESIGN.md` 1) and body `KKday` DESIGN dest at 9/13/558. Homepage `https://www.kkday.com` DESIGN dest **2** at 9/21 · P dest **5** at 13/47/48/56/57 (48/57 are `/en-us` prefix matches of the same string). `#FF5C00` DESIGN dest **18** · `#ff5c00` DESIGN dest **17** (Scope, Semantic, Components, Content, Named gaps). Favicon slug DESIGN dest **1** at 239 · P dest **1** at 16. Dual: Identity + portable Scope / Semantic / Assets. |
| YAML `omd`, `verified`, `tokens.source`, `tokens.extracted`, `components_harvested` | 분리 → provenance + 옮김 → Scope (`prose-derived`) | 출처 원장·freshness. `prose-derived` DESIGN dest **3** at 9×2/247. Exact `tokens.source: prose-derived` DESIGN dest **0** (body writes `YAML \`tokens.source\` is \`prose-derived\``). `components_harvested` DESIGN dest **0** · P dest **3** at 21/109/180. Dual for harvested is provenance Token note + this log, not the portable body. |
| YAML `tokens.colors` (16 keys) | 옮김 → Foundations Semantic color | Each key on its own role row. `primary`/`brand` both `#ff5c00`. `canvas`/`on-primary` both `#ffffff`. `#EEEEEF` DESIGN dest **2** at 84/91, `#BDBDBD` dest **5** at 84/95/262/280/288, `#26BEC9` dest **2** at 84/102 stay on §2 prose roles with no invented YAML key. |
| YAML `tokens.typography` | 옮김 → Typography & Assets | Family sans `-apple-system` / mono `SF Mono`; seven roles with YAML sizes 32/23/19/18/15/13/12. YAML has no `lineHeight`. Hero YAML `32` beside §3 `28–36px`. Section YAML `23` beside `22–24px`. Card-heading YAML `19` beside `18–20px`. Price YAML `18` + use `Price, prominent bold` beside §3 `16–20px`. Body YAML `15` + `Body, card title` beside `14–16px`. Body-small use `Location label, secondary` beside §3 `Body small / location label`. Caption use `Caption, meta` beside `Caption / meta`. |
| YAML `tokens.spacing` (xs 4 / sm 8 / md 12 / base 16 / lg 24 / xl 40 / xxl 64) | 옮김 → Foundations Spacing | Unitless steps in a table at 112–118. Not merged with rounded or type sizes. `tokens.spacing.md: 12` dest **4** at 120/326/373/501 ≠ Experience Card body `12px` (114 is the table key `tokens.spacing.md`, not the colon-12 string). `tokens.spacing.base: 16` dest **5** at 120/281/305/351/373 ≠ type 16 (115 is the table key `tokens.spacing.base`, not the colon-16 string). |
| YAML `tokens.rounded` (sm 4 / md 8 / lg 8 / full 9999) | 옮김 → Foundations Shape | `md: 8` and `lg: 8` stay two keys. `9999` dest **3** at 131/133×2. Component radii stay on those components. No `9999px` invented. |
| YAML `tokens.shadow` (card / header / dropdown / modal) | 옮김 → Foundations Elevation | Four strings kept. Hero-search construction-prompt `0 4px 16px rgba(0,0,0,0.12)` stays on Search (hero) beside `tokens.shadow.dropdown`. Buttons no-shadow sentence kept. |
| YAML `tokens.components` (9 records) | 옮김 → Components & States | Each record is its own block. `Primitive type: \`button\`` 3 = YAML `type: button` 3. `input` 1=1. `card` 1=1. `badge` 3=3. `tab` 1=1. Search (hero) / Destination Card / Sticky mobile book-bar: `Not in the token set` dest **3** at 448/469/487. |
| §1 Visual Theme & Atmosphere | 옮김 → Experience `scope` claim, Distinctive traits | Product/surface range, orange-led canvas, locale stack, card-grid-first. Atmosphere readings carry adjacent B2a. |
| §2 Color Palette & Roles | 옮김 → Foundations Semantic color | All named roles, approximation class, heritage teal as unofficial. Live-inspect-not-completed note kept in Scope and Capture record. |
| §2 footer Verified / Tier 1 / Tier 2 / Conflicts | 분리 → provenance Freshness / Surfaces / Proof + 옮김 → Scope / Semantic approximation sentence | Dual: ledger and the portable evidence-class writing. |
| §3 Typography Rules | 옮김 → Typography & Assets | Locale table, weights, YAML sizes beside §3 ranges, four conventions including `4.8 · 1,240`. |
| §4 Component Stylings | 옮김 → Components & States | Nine YAML anatomies plus Search (hero), Destination Card. Trust chip YAML tint / §4 white-or-tint keep-both. Tab font YAML `15px / 500` / §4 `14–16px` / `400–500` keep-both. |
| §5 Layout Principles | 옮김 → Layout & Platforms + Foundations Spacing | 4→1 grid, ~1200px, 8px-based scale, 8–12px internals, 40–64px section, medium-high density. |
| §6 Depth & Elevation | 옮김 → Foundations Elevation | Four shadows, buttons no shadow, z-index stack. |
| §7 Do's | 옮김 → Experience Application rules | Brand rules. Not put into Governance controlled copy. |
| §7 Don'ts | 옮김 → Experience Avoid | Brand prohibitions including no pill-fully-rounded CTAs. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms | >1200 / 1024–1200 / 768–1024 / <768, 44px+, sticky book bar, object-fit / srcset / WebP. |
| §9 Agent Prompt Guide | 삭제 | 도구별 명령·프롬프트. Unique geometry (Experience Card `object-fit: cover` / body `12px` / title `16px/700` / rating `4.8 · 1,240` / price `18px/700`; hero search destination+date+travelers and `0 4px 16px rgba(0,0,0,0.12)`; sticky mobile book-bar price-left `18px/700`) landed on Experience Card `:372`, Search (hero) `:447`, Sticky mobile book-bar `:486` (A3). Color/radius/trust rules already in Experience/Foundations/Components. 슬롯 없는 위임 없음. |
| §10 Voice & Tone | 옮김 → Content & Locales | Register, context table, forbidden phrases, five voice samples with verified/illustrative class. |
| §11 Brand Narrative | 옮김 → Experience `scope` ¶3 | 2014 DESIGN dest **2** at 13×2 (558 names list has no year). Ming Chen dest **3** at 13×2/558. Star Travel dest **3** at 13×2/558. Ezfly dest **3** at 13×2/558. 90+ dest **2** at 13×2. 300,000 dest **2** at 13×2. US$250 million dest **2** at 13×2. Series D dest **2** at 13×2. H.I.S. dest **3** at 13×2/558. Rezio dest **2** at 13/558. FineDayClub dest **2** at 13/558. ActivityJapan dest **2** at 13/558. warmth of anticipation dest **1** at 13 · warmth-of-anticipation dest **1** at 13. Dual: `DESIGN.md` Scope and provenance Claim ledger / Proof notes. |
| §12 Principles | 옮김 → Experience Principles | Six principles and UI implications, with B2a on the section head. |
| §13 Personas | 삭제 | 페르소나 3인(이름·나이·도시·동기·소속 분류 포함). 승격 없음, sidecar 재수록 없음 (D2, D2a). Audience keeps only source-named groups: TW/HK/JP independent travelers and APAC outbound tourists. `怡君` / `Yi-Jun` / `Kenji` / `Wing` DESIGN/P dest **0**. |
| §14 States | 옮김 → Components & States Capture record + per-component applicability | 본문 보존: empty / loading / error / success / skeleton / disabled 표 at 251–262. 선언 컴포넌트는 §4.4 7상태 표를 닫되 미관측 시각값은 발명하지 않음. graph 위임 없음. |
| §15 Motion & Easing | 옮김 → Foundations Motion | Durations 0/120/200/300/250ms, three easing *roles*, four signature motions, spring stance, reduced-motion. Three unsourced curves deleted at the curve-value boundary (provenance Omission ledger). B3 전문 `DESIGN.md` 181. |
| HTML comment philosophy layer | 분리 → provenance Proof / Omission | Tier 1/2 restatement, 403/redirect, heritage-teal unofficial note, illustrative-voice note. Personas comment is disposition, not a rehost of names. |

## A5a hand sweep

Source quoted non-Latin runs and published labels were extracted by hand from `web/references/kkday/DESIGN.md` (no sibling). Issued-copy needles (labels, CTAs, slogans, microcopy, names) were checked against the three output files. UI-meta, token paths, and font stacks were not needles.

- Extracted issued-copy needles: 32
- Missing from the three outputs: 0
- Dispositioned in this log: §13 biographies (no issued-copy needle among them)
- Gate `compared` 0 / `candidates` 247 (non-Latin needles 0; Latin remainder is this hand sweep)
- latin-copy-audit lost issued copy: 0 (first run flagged 4 medium UI-meta/token strings — `1px solid #D9D9D9`, `1px solid #E5E5E6`, `error border #e0353b`, `do this next.` — restored as keep-both exact writings; re-run clean)

Surviving issued copy includes: KKday, Book Now, Add to Cart, See availability, View Details, See more, Instant confirmation, Free cancellation, Mobile voucher, Only 2 left, Selling fast, EXPLORE. DREAM. DISCOVER, Explore. Dream. Discover., Instant confirmation · Free cancellation, Only 2 spots left for this date, No experiences match these filters yet — try a nearby date or city., View cart, Tours, Tickets, Transport, SIM/WiFi, Hotels, HURRY!, LAST CHANCE!, Oops! Something went wrong, No results found., the best tour in the world, BUY NOW OR MISS OUT!, Ming Chen, Star Travel, Ezfly, H.I.S., Rezio, FineDayClub, ActivityJapan.

## Key-path check (A1)

YAML `tokens.*` paths confirmed in `DESIGN.md` by string search, not by shared numerals:

- colors 16 keys → Semantic color role rows
- typography 7 roles + sans/mono → Type roles / Family
- spacing xs/sm/md/base/lg/xl/xxl → Spacing table
- rounded sm/md/lg/full: 9999 → Shape table (`9999` at 131/133)
- shadow card/header/dropdown/modal → Elevation table
- components 9 × type/bg/fg/radius/padding/font/use (and recorded hover/focus/states) → matching blocks

`tokens.spacing.md: 12` ≠ Experience Card body `12px`. `tokens.spacing.base: 16` ≠ type 16 ≠ Primary `16px / 600`. `tokens.spacing.sm: 8` ≠ `tokens.rounded.md: 8` ≠ `tokens.rounded.lg: 8`. `tokens.rounded.sm: 4` ≠ `tokens.spacing.xs: 4`. `tokens.rounded.full: 9999` ≠ a component `9999px` (none written). `tokens.colors.primary` / `brand` both `#ff5c00` as two keys. `tokens.colors.canvas` / `on-primary` both `#ffffff` as two keys.

## C2 / A1b

`Primitive type: button` 3 = YAML `type: button` 3. `input` 1=1. `card` 1=1. `badge` 3=3. `tab` 1=1. `not in the token set` dest **3** at 448/469/487.

Primary (Book / Action) L/E/S open (in-place commit). `loading | applicable` DESIGN dest **1** at 289. Outline / Ghost / Experience Card / Sticky header nav / Destination Card L/E/S closed on role. Input / Search (hero) error open, loading/success closed. Sale / Trust / Urgency badges and Sticky mobile book-bar: kind + map omitted (C4).

## D1 / D2a

`native application` / `mobile app` / `back-office` / `product application` / `measures 1440px` / `does not say` dest **0** in `DESIGN.md`. Audience has no persona name, motivation, or affiliation classification. Provenance Omission ledger is unidentified (3인; 이름·나이·도시·동기·소속 분류).

## Pass 1 (B2a)

`DESIGN.md` re-read end-to-end. Every causal / interpretive / judgment sentence (Scope so/because, Principles, Content voice, Docs-citation character) was asked: brand-issued fact or observation-derived reading. Derived readings carry an adjacent complete-form close (`derived editorial implementation inference` + `not KKday-authored or a separately published UI specification`). Count **45** = provenance inventory **45**. F3 added Motion durations `:150`, Assets photography `:240`, Published names `:558`.

## Pass 2 (E2)

Each log row was written after a file search for the named value. Dual destinations are both named. Compliance claims (`B3 유지`) are made only where the full five-kind gate sentence is in `DESIGN.md` 181. F3 dest corrections: homepage P **5**; `#FF5C00` **18** / `#ff5c00` **17**; `prose-derived` **3**; `#BDBDBD` **5**; `tokens.spacing.md: 12` **4**; `tokens.spacing.base: 16` **5**; `9999` **3**; §11 year/name occurrence counts.

`node test-v2/tools/migrate-reference.mjs --brand kkday --gate-only` → `verdict: PASS`, `problems: []`, `coverage: [{ check: "copy-loss", compared: 0, candidates: 247, detail: "바늘 0개 — 이 브랜드에서 A5는 기계 검사되지 않았다. 발행 라틴 문자열을 손으로 전수 대조하라." }]`. Separately, `scripts/design-md-core.cjs` `evaluatePortableCore` reports `level: portable-core`, `portable_core: true`, `reasons: []`, and 0 `[FILL IN]`. Both are run results only. The gate has historically passed A5 losses, narrow ledgers, false log destinations, and B1 promotions, so neither is cited here as evidence that the migration is correct; the sweeps above and the two mandatory passes are. A5a was mandatory because `compared` 0 < `candidates` 247.
