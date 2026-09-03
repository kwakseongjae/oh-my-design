# momo購物網 migration log

Rulebook: **v12** (`docs/design-md-weight/MIGRATION_RULEBOOK.md`)

Source: `web/references/momoshop/DESIGN.md`
Destination: `docs/design-md-weight/migrated/momoshop/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/momoshop/provenance.md`
Date: 2026-09-02
Worker: grok-4.6 T2
Portable Core: pass (`scripts/design-md-core.cjs` evaluatePortableCore, `portable_core: true`, placeholders 0, `reasons: []`). Worker SHA-256 `9828487fb40e224d675865b139c39fdc5d9aaa063abe4d6e4c80782b5ed0df75`. Auditor DESIGN SHA-256 `f8241a7ff33cce8b77039a95b69271f7ee3070da7f135d417f1ea84098d6a612` after B2a adjacency edits (structure and token rows unchanged). Auditor provenance SHA-256 `74902cf5cb2a2fd4dce4c2b0f6200a031cf8983afac4ae33e689281f87810482`. Mechfix DESIGN SHA-256 `01551bb13579b7a15107a8bb23de8f85ed827b852b5cb512c5cfcc416bbe257d` (33 B2a closes `momo購物網-authored` → `momoshop-authored`; token rows unchanged). Mechfix provenance SHA-256 `c54131947e0de2d3301b26a80e3de1e2fc904907afb74db7576212d1f4c70846` (Proof-notes close-form token only). Wave45 A1 restore DESIGN SHA-256 `d00c7e4f410d3b6317dca4cd8a23e0c3a2b395253ddb03fde90ba7ca05a44647` (Scope §1 type clause only; token rows unchanged). Provenance SHA unchanged.

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (id, name, country, category, homepage, primary_color, logo) | 옮김 → Experience H1 / Scope + 분리 → provenance Identity | Portable file has no frontmatter. Name kept as H1 `momo購物網 Design System`. Homepage `https://www.momoshop.com.tw` DESIGN dest **6** · P dest **11** (Scope, Identity, Surfaces — dual). `#D62872` DESIGN dest **19** · P dest **6**. `#d62872` DESIGN dest **6** · P dest **3**. Favicon slug `momoshop.com.tw&sz=256` DESIGN dest **1** · P dest **1**. |
| YAML `omd`, `verified`, `tokens.source`, `tokens.extracted`, `components_harvested` | 분리 → provenance Identity / Freshness / Token note | 출처 원장·freshness. `prose-derived` DESIGN dest **2** (Scope) · P dest **8**. Exact table `tokens.source \| prose-derived` is provenance. `components_harvested` DESIGN dest **0** · P dest **3** (Identity + Token note + Proof notes). Dual for harvested is provenance + this log, not the portable body. `verified` 2026-06-03 and `tokens.extracted` 2026-06-09 stay in provenance Freshness. |
| YAML `tokens.colors` (14 keys) | 옮김 → Foundations Semantic color | Each key on its own role row with token-set path. `primary` `#d62872` unmerged from `brand` `#e5047e`. `#454545` / `#999999` / `#FF9203` / `#EEEEEE` / `#484848` stay on §2/§5 prose roles with no invented YAML key. `#DD2726` stays on the §14 confirm-delete writing. |
| YAML `tokens.typography` | 옮김 → Typography & Assets | Family sans Microsoft JhengHei UI / mono Oxygen (price numerals). Five roles with unitless YAML line heights `1.41` / `1.33` / `1.38`. Token-set `use` strings verbatim, including `Badges` and `Heat/rank metadata labels`. §3 longer stack, `--primary-font-family`, `--price-font-family`, `font: 700 17px/24px var(--main-font)`, `:root` 1.5, and px spellings stay beside the YAML singles. |
| YAML `tokens.spacing` (`[3, 5, 6, 8, 10, 12, 16, 20, 24]`) | 옮김 → Foundations Spacing | Unitless array, no named steps. Not merged with rounded, type sizes, or component paddings. Array form DESIGN dest **1**. |
| YAML `tokens.rounded` (sm 4 / md 8 / lg 16 / full 9999) | 옮김 → Foundations Shape | `tokens.rounded.full` DESIGN dest **2** · P dest **1**. `full: 9999` stays unitless. Local radii 15px / 13px / 22px stay on those components. |
| YAML `tokens.shadow` (card / panel / modal) | 옮김 → Foundations Elevation | Level 1 `0 1px 2px 0 rgba(0,0,0,.05)` · Level 2 `0 1px 3px rgba(0,0,0,.1)` · Level 3 `0 4px 6px -1px rgba(0,0,0,.1)`. Levels 4–5 (`rgba(0,0,0,.8)`, `rgba(0,0,0,.5)` + z-index 999999) stay as §6 writings. |
| YAML `tokens.components` (10 records) | 옮김 → Components & States | Each record is its own block with `Token-set path: tokens.components.<key>`. `Primitive type` only where YAML has `type`. Trend Item (Top 3) and Trend Item (Standard) are `not in the token set`. §4 complete writings (cart 17×17, destructive 118px, rank 25×25 and `0.29%` / `99.69%` stops, tooltip title+body) stay beside YAML. |
| §1 Visual Theme & Atmosphere | 옮김 → Experience `scope` claim, Distinctive traits | Product/surface range, magenta-pink, canvas/card split, price numerals as focal stars. Atmosphere readings carry adjacent B2a. Source §1 type clause `Microsoft JhengHei UI and PingFang TC for body readability in Traditional Chinese` DESIGN dest **1** at Scope (restored in `Revision 2026-09-02 (wave45 review)`). `Traditional Chinese` DESIGN dest **1** · P dest **0**. `body readability` DESIGN dest **1** · P dest **0**. `and PingFang TC` DESIGN dest **1** · P dest **0**. `with Century Gothic` DESIGN dest **1** · P dest **0**. Editorial rewrite `in the body stack` DESIGN dest **0**. |
| Opening identity paragraph (before §1) | 옮김 → Experience `scope` ¶1 | Taiwan's largest television and digital shopping platform; Fubon Media Technology (富邦媒體科技); TV commerce heritage; mobile-first marketplace; millions of products across beauty, fashion, electronics, and daily essentials. |
| §2 Color Palette & Roles | 옮김 → Foundations Semantic color | All named roles. YAML lowercase beside §2 uppercase. |
| §2 footer Verified / Tier 1 / Tier 2 / Conflicts | 분리 → provenance Freshness / Surfaces / Proof | Dual: ledger here. Named-gaps row for getdesign.md/momoshop NOT LISTED is also in `DESIGN.md` Governance (source-stated lookup). Conflicts: none. |
| §3 Typography Rules | 옮김 → Typography & Assets | Family stacks, CSS variables, role metrics, minimum 11px, no text below 11px in the search surface. |
| §4 Component Stylings | 옮김 → Components & States | Ten YAML anatomies plus two §4-only Trend Items. Capture selectors: none in source. |
| §5 Layout Principles | 옮김 → Layout & Platforms + Foundations Spacing/Elevation | 2-column / 4–6, 44px header, no gutter, 36px search bar, icon-label no wrapping, top-left overlays, footer `#EEEEEE` / `#484848` / 13px. |
| §6 Depth & Elevation | 옮김 → Foundations Elevation | Six levels, z-index ~10 / 1000 / 1000+ / 999999. |
| §7 Do's | 옮김 → Experience Application rules | Brand rules. Not put into Governance controlled copy. |
| §7 Don'ts | 옮김 → Experience Avoid | Brand prohibitions, including shadow cap `0 10px 15px -3px rgba(0,0,0,.1)` and radius cap 22px. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms | ≤768 / 768–1024 / ≥1024, `100vh` overlay, 440px desktop search, 137px drawer, `.hover:text-[#D62872]`, `.group-hover:bg-[#D62872]`, `h-auto`, 44px touch. |
| §9 Agent Prompt Guide | 삭제 | 도구별 명령·프롬프트. Unique never-tint, CTA 38–44px / 4–8px, and price numerals in bold landed in Application rules / Primary CTA / Typography (A3). Color/radius/chip/rank rules already in Experience/Foundations/Components. 슬롯 없는 위임 없음. |
| §10 Voice & Tone | 옮김 → Content & Locales | Register, 3 adjectives, Do/Don't table with byte-exact 限時下殺 / 立刻搶購 / 你找到更多更多 / 24H快速到貨 / 十天猶豫期, three *Illustrative:* samples. |
| §11 Brand Narrative | 옮김 → Experience `scope` ¶3 + 분리 → provenance Claim ledger / Proof notes | Dual. Operator, joint venture, television-channel origin, Apple App ID `861796017` DESIGN dest **1** · P dest **1**, tagline 讓你找到更多更多 DESIGN dest **3** · P dest **1**, 24-hour rapid delivery, convenience-store pickup, 10-day no-questions return, 16 payment methods, 730,000 / 4.9-star App Store record, flagship stores, adjacent offers, trust-as-operational-depth sentence, and the closing value-in-motion sentence (`value in motion` DESIGN dest **1** · P dest **1**). |
| §12 Principles | 옮김 → Experience Principles | Five principles and UI implications, with B2a on the section head. |
| §13 Personas | 삭제 | 페르소나 4인(이름·나이·도시·동기·소속 분류 포함). 승격 없음, sidecar 재수록 없음 (D2, D2a). Audience keeps only source-named groups: each shopper; an endlessly expanding catalogue that surfaces exactly what each shopper needs. |
| §14 States | 옮김 → Components & States Capture record + per-component applicability | 본문 보존: Empty / Loading skeleton / Error network (`Main.jsp`) / Error destructive confirm (`#DD2726`, `17px Helvetica`) / Success ~2s / Skeleton 137px drawer / Disabled OOS (`補貨通知`) / Hover desktop utilities. 선언 컴포넌트는 §4.4 7상태 표를 닫되 미관측 시각값은 발명하지 않음. graph 위임 없음. |
| §15 Motion & Easing | 옮김 → Foundations Motion | ~150ms, `transition: opacity .3s, background-color .3s` from `browsing-history` CSS, search overlay `height: 0` → `auto` via `.show`, default browser easing (no custom cubic-bezier in inspected source), overlay linear or ease, functional-not-decorative rules, no parallax / no scroll animations, product grid items do not animate on scroll. B3 전문 `DESIGN.md` 151 (`transition properties, animation name, duration, easing, and reduced-motion behavior` DESIGN dest **1**). No unsourced cubic-bezier to delete. |

## A5a hand sweep

Source quoted non-Latin runs and published labels were extracted by hand from `web/references/momoshop/DESIGN.md`. Sibling `web/references/momoshop/.verification.md` exists (dotfile; path written directly). The sibling is a live-inspect note, not a second issued-copy source; its sibling-only CSS-var and sample strings are not needles. Issued-copy needles (labels, CTAs, slogans, microcopy, names) were checked against the three output files. UI-meta, token paths, and font stacks were not needles.

- Extracted issued-copy needles: 17
- Missing from the three outputs: 0
- Dispositioned in this log: §13 biographies (no issued-copy needle among them; D2)
- Gate `compared` / `candidates`: not recorded in this run dir; sibling exists at `web/references/momoshop/.verification.md`; this hand sweep of 17 source issued-copy needles is the A5a denominator
- latin-copy-audit lost issued copy: 0

Surviving issued copy includes (DESIGN dest after mech remeasure, split-nonoverlap): momo購物網 **9**, 富邦媒體科技 **4**, 富邦媒體科技股份有限公司 **2**, 台灣大哥大 **2**, 讓你找到更多更多 **3**, 限時下殺 **3**, 立刻搶購 **2**, 你找到更多更多 **5** (substring of 讓你找到更多更多 included), 24H快速到貨 **2**, 十天猶豫期 **2**, 找不到？試試其他關鍵字 **2**, 補貨通知 **3**, 數十萬件商品，24小時快速到貨，讓購物更輕鬆。 **1**, 今日限時下殺！錯過等一年，快搶！ **1**, 新會員首購禮金，馬上領，立刻用，不花冤枉錢。 **1**, Main.jsp **4**, Estée Lauder **1**. momo購物網 dest was auditor **42** while B2a closes used the published name; mechfix moved those 33 closes to `momoshop-authored` so the published name stays on H1/narrative only.

## Key-path check (A1)

YAML `tokens.*` paths confirmed in `DESIGN.md` by string search, not by shared numerals:

- colors 14 keys → Semantic color role rows (`tokens.colors.primary` through `tokens.colors.border-medium`)
- typography 5 roles + sans/mono → Type roles / Family (`tokens.typography.heading` / `body` / `caption` / `badge` / `micro`)
- spacing array `[3, 5, 6, 8, 10, 12, 16, 20, 24]` → Spacing
- rounded sm/md/lg/full: 9999 → Shape table
- shadow card/panel/modal → Elevation table
- components 10 × type/bg/fg/radius/padding/font/use (and recorded states) → matching blocks

`tokens.spacing` `16` ≠ `tokens.rounded.lg: 16` ≠ Primary CTA font 16px. `tokens.spacing` `8` ≠ `tokens.rounded.md: 8`. `tokens.rounded.sm: 4` is not a spacing step (the array has no `4`). `tokens.rounded.full: 9999` ≠ z-index 999999. `tokens.colors.primary` `#d62872` ≠ `tokens.colors.brand` `#e5047e`. `#DD2726` ≠ `#dd2222` ≠ `#ea3323`.

## C2 / A1b

`Primitive type: \`button\`` DESIGN dest **3** = YAML `type: button` 3. `Primitive type: \`input\`` dest **1**. `Primitive type: \`card\`` dest **3**. `Primitive type: \`badge\`` dest **3**. `not in the token set` dest **3** (Capture record names the two Trend Items, plus each Trend Item block). The unbackticked string `Primitive type: button` is DESIGN dest **0**.

Destructive Button L/E/S open (in-place delete-all commit). Primary CTA loading/error/success closed (Error-page / Home destination to `Main.jsp`). Search Input loading/success closed; error open (form field). Search Chip Tag and Secondary Rules Button L/E/S closed on role. Header bar / Trend Card / Tooltip: kind + map omitted (C4). Cart Badge / Rank Number: `kind: non-interactive`.

## D1 / D2a

`native application` / `back-office` / `product application` / `measures 1440px` / `does not say` dest **0** in `DESIGN.md` and provenance. Source wording `mobile-first marketplace` and Principle 5 `TV, web, iOS, and Android` are kept as the source wrote them. Audience has no persona name, motivation, or affiliation classification. Provenance Omission ledger is unidentified (4인; 이름·나이·도시·동기·소속 분류).

## F1 / F2

F1 B2a scan: 33 complete adjacent qualifications in `DESIGN.md` (`derived editorial implementation inference` dest **33** = `not momoshop-authored` dest **33** = `separately published UI specification` dest **33`; `not momo購物網-authored` dest **0**). Provenance Derived editorial inventory data rows **33** (header `| Location in DESIGN.md | Qualified reading |`). Auditor added 9 adjacent qualifications (Elevation `:137`, Motion `:151`, Type roles `:195`, Assets `:200`, Search Chip Tag `:283`, Primary CTA `:308`, Destructive Button `:333`, Secondary Rules `:357`, Search Trend Card `:378`) and folded chip dual-role / on-primary≠card-fill into Semantic `:82`. Mechfix 2026-09-02: CJK `momo購物網-authored` is not a mechanical complete-form token (`check-limiter-ledger.mjs`); the 33 closes now use catalog-id `momoshop-authored`. Ledger rows unchanged.

F2 E2: each log row above was written after `grep -oF` on the destination files, then remeasured after the auditor's B2a edits. Dual destinations name both files. `B3 유지` is claimed because `DESIGN.md` 151 carries the five evidence kinds and the per-component computed-observation gate (`transition properties, animation name, duration, easing, and reduced-motion behavior` DESIGN dest **1**). Sibling is dual-noted: provenance Sibling handling + this log A5a (not the portable body). `Primitive type: button` without backticks is not a 2nd destination — only `Primitive type: \`button\`` is in `DESIGN.md`. Wave45 A1 restore DESIGN SHA-256 `d00c7e4f410d3b6317dca4cd8a23e0c3a2b395253ddb03fde90ba7ca05a44647` (mechfix `01551bb1…` is the pre-restore byte). `Traditional Chinese` DESIGN dest **1** · P dest **0**. `body readability` DESIGN dest **1** · P dest **0**.

## Unique-phrase self-check

Extracted 82 source-unique expressions (years and proper names, quotes, §11 causal/closing sentences, value modifiers such as `0.29%` / `99.69%` / `hover #d9006c` / `(30, bg)`-class stops, and §15/§7 constraint sentences). `grep -oF` dest 0 that required restore: **0** after the wave45 Scope restore of §1 `Traditional Chinese` / `body readability`. Persona-only identifiers were dest 0 by D2, not restores. Restored-from-zero: **1**.

## Revision 2026-09-02 (wave45 review)

Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v12**. Trigger: semantic review FAIL 1. One defect only. Token values, component-table structure, state applicability, B2a complete qualifiers, and the derived-inventory 1:1 were not opened. Source `web/references/momoshop/DESIGN.md` was not modified. Sibling `web/references/momoshop/.verification.md` exists (`test -f`). Provenance inventory 33 rows unchanged. Provenance body unchanged.

**1. A1 — source §1 type clause.** Source §1 writes `Microsoft JhengHei UI and PingFang TC for body readability in Traditional Chinese`. Scope had kept the stack names and dropped the script noun and the readability purpose. Restored the source clause in Experience Scope (same paragraph that already carried the type stacks and the price-numeral reservation). Two fragments in one sentence count as one defect. Source wording restored as a source-stated fact, not as a derived reading — no new B2a qualifier, no new provenance derived row. B2a remains **33 = 33**. Editorial rewrite `with PingFang TC in the body stack` is gone; `PingFang TC` DESIGN dest **3** unchanged.

실측 (`grep -oF -e` | `wc -l`, 파일별; `grep -c` 미사용):

| needle | orig | sib | dest after | provenance after |
|---|---|---|---|---|
| `Traditional Chinese` | 1 | 0 | **1** | 0 |
| `body readability` | 1 | 0 | **1** | 0 |
| `and PingFang TC` | 1 | 0 | **1** | 0 |
| `with Century Gothic` | 1 | 0 | **1** | 0 |
| `in the body stack` | 0 | 0 | **0** | 0 |
| `PingFang TC` | 3 | 3 | **3** | 1 |

`Traditional Chinese` dest **1** = Experience Scope. `body readability` dest **1** = the same sentence. provenance **0** is correct: the clause is a source fact, not a derived inference. Mentions in this revision section and the updated §1 / Unique-phrase / F2 rows are this file's denominator (E2d).

B2a `derived editorial implementation inference` dest **33** = provenance inventory **33** data rows (164–196). `momo購物網` DESIGN dest **9** unchanged.

**안 건드린 것.** 토큰 값 · 컴포넌트 표 구조 · 상태 applicability · B2a 33=원장 33 · 원본 `web/references/momoshop/**` · sibling · provenance 본문.

Post-revision DESIGN.md SHA-256: `d00c7e4f410d3b6317dca4cd8a23e0c3a2b395253ddb03fde90ba7ca05a44647`. provenance.md SHA unchanged `c54131947e0de2d3301b26a80e3de1e2fc904907afb74db7576212d1f4c70846`.
