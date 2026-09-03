# PChome migration log

Rulebook: **v12** (`docs/design-md-weight/MIGRATION_RULEBOOK.md`)

Source: `web/references/pchome/DESIGN.md`
Destination: `docs/design-md-weight/migrated/pchome/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/pchome/provenance.md`
Date: 2026-09-02
Worker: grok-4.6 T2
Portable Core: pass (`scripts/design-md-core.cjs` evaluatePortableCore, `portable_core: true`, placeholders 0). Worker-close SHA `5000ea842a18c367e80182d2356d8c0d52bc14f5c618f45f308bfeaf45cf7282`.

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (id, name, country, category, homepage, primary_color, logo) | 옮김 → Experience H1 / Scope + 분리 → provenance Identity | Portable file has no frontmatter. Name kept as H1 `PChome Design System` (`DESIGN.md` 1). Homepage `https://www.pchome.com.tw` DESIGN dest **4** at 9×3/21 · P dest **4** at 13/46/51/147 (Scope, Primary tasks, Identity, Surfaces, Claim ledger). `#ea1717` DESIGN dest **27** · P dest **11**. Favicon slug `s2/favicons?domain=pchome.com.tw` DESIGN dest **1** at 234 · P dest **1** at 16. |
| YAML `omd`, `verified`, `added`, `tokens.source`, `tokens.extracted`, `tokens.note`, `components_harvested` | 분리 → provenance Identity / Freshness / Token note + 옮김 → Scope (`live-extract`, `rgb(234,23,23)`, 202 occurrences) | 출처 원장·freshness. `live-extract` DESIGN dest **3** at 9×2/93 · P dest **5** at 20/64/118/147/156. `rgb(234,23,23)` DESIGN dest **4** at 9×2/93/95 · P dest **4** at 28/87/147/156. `components_harvested` DESIGN dest **0** · P dest **3** at 22/64/123. Dual for harvested is provenance Token note + Proof, not the portable body. |
| YAML `tokens.colors` (17 keys) | 옮김 → Foundations Semantic color | Each key on its own role row. `surface` / `on-primary` both `#ffffff`. 24h `primary` `#ea1717` unmerged from portal `primary-soft` `#fe3b52`. `link` `#0090eb` unmerged from `link-deep` `#008ae0`. |
| YAML `tokens.typography` | 옮김 → Typography & Assets | Family sans/display/fallback; seven YAML roles with unitless line heights and tracking `0`. §3 rem spellings and Notes kept beside YAML `use`. YAML size `22` beside §3 `22px` DESIGN dest **2** at 214/230 · P dest **1** at 164. Strike Price is the §3 complete row with no YAML typography key. |
| YAML `tokens.spacing` (xs 4 / sm 8 / md 12 / base 16 / lg 24 / xl 32 / xxl 48 / section 64) | 옮김 → Foundations Spacing | Unitless steps in a table. Not merged with rounded or type sizes. Exact `tokens.spacing.section: 64` DESIGN dest **1** at 128. Table path `tokens.spacing.section` DESIGN dest **2** at 126/128. |
| YAML `tokens.rounded` (sm 4 / md 8 / lg 16 / full 9999) | 옮김 → Foundations Shape | `full: 9999` stays unitless. Soft CTA YAML `9999` stays on that component beside §4 `8px`. |
| YAML `tokens.shadow` (ambient / card / elevated) | 옮김 → Foundations Elevation | Navy-tint elevated `rgba(1,47,73,0.1) 0px 8px 24px` unmerged from the two neutral shadows. |
| YAML `tokens.components` (6 records) | 옮김 → Components & States | Each record is its own block. `Primitive type` only where YAML has `type` (button 2 / card 1 / badge 2 / tab 1). Promo Tile, P幣 chip, In-Stock chip, Navigation, Countdown: `not in the token set` (5). |
| §1 Visual Theme & Atmosphere | 옮김 → Experience `scope` claim, Distinctive traits | Two surfaces (portal + 24h), Key Characteristics, Traditional-Chinese-first stack. Atmosphere readings carry adjacent B2a. |
| §2 Color Palette & Roles | 옮김 → Foundations Semantic color | All named roles. 202-occurrence live extract on 24h primary. |
| §2 / footer **Verified** / Tier 1 / Method / `.verification.md` | 분리 → provenance Freshness / Surfaces / Sibling pointer | Dual: ledger. Sibling exists at `web/references/pchome/.verification.md` (direct-path `find`; dotfile). Provenance Sibling pointer records the file as a source, not as a portable fact. Sibling-only samples are not adopted into `DESIGN.md`. |
| §3 Typography Rules | 옮김 → Typography & Assets | Family stacks including 微軟正黑體 / 文泉驛正黑 / WenQuanYi Zen Hei; hierarchy table; five type principles. YAML `use` beside §3 Notes (feature-title complete form includes `white on imagery`). §3 Size spelling `22px (1.38rem)` restored beside YAML unitless `22` (`22px` DESIGN dest **2** at 214/230 · P dest **1** at 164). |
| §4 Component Stylings | 옮김 → Components & States | Six YAML anatomies plus §4-only Promo Tile / P幣 chip / In-Stock chip / Navigation / Countdown. Soft CTA YAML `9999` beside §4 `8px`. Tab YAML `fg` `#000000` beside §4 active/inactive split. Price-tag hero 24px/700 stays on that role. |
| §5 Layout Principles | 옮김 → Layout & Platforms + Foundations Spacing/Shape | Full-bleed grid, 8px gutters, 4–8px radius prose, whitespace philosophy. |
| §6 Depth & Elevation | 옮김 → Foundations Elevation | Four levels plus Shadow Philosophy. |
| §7 Do's | 옮김 → Experience Application rules | Brand rules. Not put into Governance controlled copy. |
| §7 Don'ts | 옮김 → Experience Avoid | Brand prohibitions. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms | `<640` / `640–1024` / `1024–1440` / `>1440`, touch targets, 6 → 4 → 3 → 2 collapse. |
| §9 Agent Prompt Guide | 삭제 | 도구별 명령·프롬프트. Unique geometry landed before deletion (A3): 5-column / 16px gutters → Layout; 加入購物車 label → Primary; flash-deal red `#ea1717` band + 18px Montserrat countdown → Countdown Timer (`DESIGN.md` 437). Color/radius/density rules already in Experience/Foundations/Components. 슬롯 없는 위임 없음. |
| §10 Voice & Tone | 옮김 → Content & Locales | Register, context table, forbidden register, published strings byte-exact. |
| §11 Brand Narrative | 옮김 → Experience `scope` ¶3 + 분리 → provenance Claim ledger / Proof notes | 1998 DESIGN dest **2** at 13×2 · P dest **2** at 114/126. Jan Hung-tze DESIGN dest **3** at 13×2/507 · P dest **2** at 114/126. 詹宏志 / 網路家庭 DESIGN dest **3** at 13/507 · P dest **2** at 114/126. PChome 24h購物, 24-hour delivery identity, Shopee / Momo / Yahoo奇摩購物, portal heritage, and the closing embrace-and-avoid sentence (`abundance and visible savings build trust, not minimalism` DESIGN dest **1** at 13 · P dest **1** at 126). Dual: `DESIGN.md` Scope and provenance Claim ledger / Proof notes. |
| §12 Principles | 옮김 → Experience Principles | Eight principles, with B2a on the section head (`These 8 items are a derived editorial implementation inference` DESIGN dest **1** at 45). |
| §13 Personas | 삭제 | 페르소나 4인(이름·나이·도시·동기·소속 분류 포함). 승격 없음, sidecar 재수록 없음 (D2, D2a). Audience keeps only source-named group-level wording that the source records independently of those biographies. |
| §14 States | 옮김 → Components & States Capture record + per-component applicability | 본문 보존: Empty (cart/search) / Loading (grid) / Error (out of stock) / Success (added to cart) / Promo active / Disabled / Price drop. 선언 컴포넌트는 §4.4 7상태 표를 닫되 미관측 시각값은 발명하지 않음. graph 위임 없음. |
| §15 Motion & Easing | 옮김 → Foundations Motion | Durations 0/150/250/400ms, four signature motions, reduced-motion. Three unsourced curves deleted at the curve-value boundary (provenance Omission ledger). B3 전문 `DESIGN.md` 182 (`transition properties` dest **1**, `animation name` dest **1**, `reduced-motion behavior` dest **1**, `A partial confirmation` dest **1`). |
| §16 Do's and Don'ts | 옮김 → Experience Application rules / Avoid | Unique §16 Do: surface the 24h delivery promise and P幣 rebate. Unique §16 Don't: Don't bury the price, the discount percentage, or the delivery window. Overlap with §7 merged, not dropped. |

## A5a hand sweep

Source quoted non-Latin runs and published labels were extracted by hand from `web/references/pchome/DESIGN.md` and from the sibling at `web/references/pchome/.verification.md` (direct path; the file exists). Issued-copy needles (labels, CTAs, slogans, microcopy, names) were checked against the three output files. UI-meta, token paths, font stacks, live rgb samples, and sibling-only country-source URLs were not needles.

- Extracted issued-copy needles: 26
- Missing from the three outputs: 0
- Dispositioned in this log: §13 biographies (no issued-copy needle among them)
- Gate `compared` / `candidates`: 7 / 152 (copy-loss; PASS = compared needles, not all copy). Latin remainder is this hand sweep. Sibling exists; issued UI copy that also appears in the source survived.
- latin-copy-audit lost issued copy: 0

Surviving issued copy includes: 加入購物車, 立即購買, 結帳, 每天一起變更好, 折扣, 限時, 24h到貨, P幣回饋, 限時下殺, 隔日配, 購物車是空的, 找不到符合的商品, 已售完, 網路家庭, 詹宏志, PChome 24h購物, Yahoo奇摩購物, 微軟正黑體, 文泉驛正黑, getting better together, every day, elevate your lifestyle, `$3,999`, `8% P幣回饋`, P幣, 會員, 點數.

## Key-path check (A1)

YAML `tokens.*` paths confirmed in `DESIGN.md` by string search, not by shared numerals:

- colors 17 keys → Semantic color role rows
- typography 7 roles + sans/display/fallback → Type roles / Family
- spacing xs/sm/md/base/lg/xl/xxl/section → Spacing table
- rounded sm/md/lg/full: 9999 → Shape table (`9999` at Shape and Soft CTA YAML; §4 Soft CTA `8px` stays beside it)
- shadow ambient/card/elevated → Elevation table
- components 6 × type/bg/fg/radius/font/use (and recorded states) → matching blocks

`tokens.spacing.xs: 4` ≠ `tokens.rounded.sm: 4`. `tokens.spacing.sm: 8` ≠ `tokens.rounded.md: 8`. `tokens.spacing.base: 16` ≠ `tokens.rounded.lg: 16` ≠ type 16. `tokens.spacing.lg: 24` ≠ Price Large `24`. `tokens.rounded.full: 9999` ≠ Soft CTA §4 `8px`. Toast/card shadows not collapsed.

## C2 / A1b

`Primitive type: button` 2 = YAML `type: button` 2. `card` 1=1. `badge` 2=2. `tab` 1=1. `not in the token set` dest **5** (Promo Tile, P幣 chip, In-Stock chip, Navigation, Countdown).

Primary L/E/S open (in-place commit `加入購物車` / `立即購買`). Soft CTA / Promo Tile / Product Card loading·success closed on destination role; Product Card error open (source records `已售完` on the card). Tab L/E/S closed on role. Price Tag / Promo Badge / P幣 chip / In-Stock chip / Countdown: kind `non-interactive`, no map. Navigation L/E/S closed (destination / query).

## D1 / D2a

`native application` / `mobile app` / `back-office` / `product application` / `measures 1440px` / `does not say` dest **0** in `DESIGN.md`. Source wording `24h shopping app` (`24h.pchome.com.tw`) and `primary mobile nav` are kept. Audience has no persona name, motivation, or affiliation classification invented from the dropped biographies. Provenance Omission ledger is unidentified (4인; 이름·나이·도시·동기·소속 분류).

## Unique-phrase contrast

62 source-unique expressions checked with `grep -oF` against `DESIGN.md` (years, names, narrative connectives, value modifiers, constraint sentences, issued copy). 0 were missing at submit. 1 had been 0 in an earlier draft and was restored: source §9 `red \`#ea1717\` band` now at `DESIGN.md` 437. Unique-phrase contrast: 62 checked / 1 restored from 0.
