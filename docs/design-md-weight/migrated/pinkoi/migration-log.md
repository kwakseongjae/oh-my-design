# Pinkoi migration log

Rulebook: **v12** (`docs/design-md-weight/MIGRATION_RULEBOOK.md`)

Source: `web/references/pinkoi/DESIGN.md`
Destination: `docs/design-md-weight/migrated/pinkoi/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/pinkoi/provenance.md`
Date: 2026-09-03
Worker: grok-4.6 T2 wave 27–46 instructions
Portable Core: pass (`scripts/design-md-core.cjs` inspectDesignMd, `portable_core: true`, `structurally_valid: true`, reasons []). Gate PASS / `problems []`. `copy-loss` compared 2 / candidates 421. Limiter 본문=52 원장=52 1:1 OK. YAML use-landing 17/17.

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (id, name, country, category, homepage, primary_color, logo) | 옮김 → Experience H1 / Scope + 분리 → provenance Identity | Portable file has no frontmatter. Name kept as H1 `Pinkoi Design System`. Homepage `https://www.pinkoi.com` DESIGN dest **2** · P dest **3**. Catalog `#ff595a` DESIGN dest **5** · P dest **6**. `logo.slug` `pinkoi` dual: Identity + Assets. Dual for `#ff595a`: Identity + portable Scope / Semantic color / Coral Tint keep-apart (not Named gaps). |
| YAML `omd`, `verified`, `tokens.source`, `tokens.extracted`, `components_harvested` | 분리 → provenance + 옮김 → Scope (`prose-derived`) | 출처 원장·freshness. `prose-derived` DESIGN dest **3**. `components_harvested` DESIGN dest **0** · P dest **4**. YAML `verified` 2026-05-15 DESIGN dest **0** · P dest **3**. Dual for harvested is provenance, not the portable body. |
| YAML token note (`primary = §2 Mid Teal #10567b`; purchase-exclusive CTA = coral `#f16c5d`) | 옮김 → Experience Scope + Foundations Semantic color | Split kept: catalog `#ff595a` ≠ `tokens.colors.primary` `#10567b` ≠ `tokens.colors.purchase` `#f16c5d`. `#10567b` DESIGN dest **14**. `#f16c5d` DESIGN dest **13**. |
| YAML `tokens.colors` (23 keys) | 옮김 → Foundations Semantic color | Each key on its own role row with `tokens.colors.<key>` path. `surface` / `on-primary` both `#ffffff` stay two keys. Prose-only `#c41428` / `#f86173` / `#289c8a` / `#bfbfc1` / `#c83166` / `#ff6299` / lime greens / `#fff8f7` / `#f0f0f0` stay off YAML keys. |
| YAML `tokens.typography` | 옮김 → Typography & Assets | Family sans `Helvetica Neue` / cjk `PingFang TC`; seven roles with YAML sizes 22/18/16/14/13/12/11. YAML has no `lineHeight`. Section YAML `22` beside §3 `21–22px` and use `Section headings — weight-driven hierarchy`. Card-title YAML `18` beside `18–20px`. Subhead YAML `16` beside `15–16px`. Body YAML `14` + use `Body, button text default, breadcrumbs` beside §3 `g-breadcrumb`. Meta YAML `13`. Badge YAML `12`. Caption YAML `11` beside `9–11px` `Captions, timestamps`. |
| YAML `tokens.spacing` (xs 4 / sm 8 / md 12 / base 16 / lg 24 / xl 32 / xxl 48 / section 64) | 옮김 → Foundations Spacing | Unitless steps in a table. Not merged with rounded or type sizes. `tokens.spacing.md` DESIGN dest **3** ≠ card gutter `12px`. `tokens.spacing.base` DESIGN dest **5** ≠ type 16 ≠ Standard card padding `16px`. `tokens.spacing.section` DESIGN dest **3** ≠ only `64px 0`. |
| YAML `tokens.rounded` (sm 2 / md 4 / lg 8 / full 9999) | 옮김 → Foundations Shape | `9999` dest **2** (`full: 9999` / `tokens.rounded.full: 9999` dest **1**). Avatar `50%` stays a separate writing. Search split-radius `0px 8px 8px 0px` stays on Search. Don't-list pill prohibition stays in Avoid. `tokens.rounded.md: 4` ≠ `tokens.spacing.xs: 4`. |
| YAML `tokens.shadow` (soft / edge / modal) | 옮김 → Foundations Elevation | Three YAML strings kept. §6 modal `0 0 4px rgba(32,32,38,.4)` stays beside YAML `0px 8px 24px`. Buttons no-shadow sentence kept. |
| YAML `tokens.components` (10 records) | 옮김 → Components & States | Each record is its own block. `Primitive type: \`button\`` **5** = YAML `type: button` **5**. `input` 1=1. `card` 2=2. `badge` 2=2. Login / Plain / Compact input / Search (header) / Country pills / Outline Secondary / Navigation header / Tables: `Not in the token set` dest **8**. |
| §1 Visual Theme & Atmosphere | 옮김 → Experience `scope` claim, Distinctive traits | Product/surface range, teal-navy canvas, locale stack, 37×/16× weights, seven button variants, coral reservation, 6-column `16.66%`, 12-step gray. Atmosphere readings carry adjacent B2a. |
| §2 Color Palette & Roles | 옮김 → Foundations Semantic color | All named roles including prose-only error-active / pink-visited / success-hover / ghost / legacy pinks / lime / tooltip hsla. CSS-use counts (41 / 32 / 26 / 25 / 22 / 20 / 10) kept. |
| §2 footer Verified / Tier 1 / Tier 2 / Conflicts | 분리 → provenance Freshness / Surfaces / Proof + 옮김 → Search / Country pills / Outline Secondary / Charcoal warm-cast / 3-fill discipline | Dual: ledger and the portable footer-capture components. Split-radius `0px 8px 8px 0px` DESIGN dest **2**. `#fff8f7` dest **3**. `3-fill discipline` dest **1**. `warm-cast` dest **1**. |
| §3 Typography Rules | 옮김 → Typography & Assets | Five locale stacks including `ヒラギノ角ゴ Pro W3` / `メイリオ`; weights 700/500/400/600; YAML sizes beside §3 ranges; conventions (`g-breadcrumb` `letter-spacing: 1px`, `.g-breadcrumb-v2` removes it, italic testimonials, `.oprice` line-through, non-tabular numerals); Playwright `/browse` 14–16px weight-driven hierarchy; `Flagship Shops`. |
| §4 Component Stylings | 옮김 → Components & States | Ten YAML anatomies plus Login, Plain, Compact input, Navigation, Tables. Hover/active matrices kept on the same variant. Standard card inferred class kept. |
| §5 Layout Principles | 옮김 → Layout & Platforms + Foundations Spacing | 5–10px micro-scale, 24px+ rhythm, padding table including `0` (15 uses) / `5px 10px` / `9px 14px` / `64px 0`, 6-column `16.66667%`, `margin: 0 -6px`, high-density rule. |
| §6 Depth & Elevation | 옮김 → Foundations Elevation | Two-track philosophy, modern uses, legacy `.m-button-{pink,gray,green,unfav}` table (`#ff6299` / `#c83166` / `#a32252` / `#7ec527` / `#65a40e` / `#4d9200` / `#8e9a9f` / `#535c5f`), z-index stack. |
| §7 Do's | 옮김 → Experience Application rules | Brand rules. Not put into Governance controlled copy. |
| §7 Don'ts | 옮김 → Experience Avoid | Brand prohibitions including no weight 300, no coral on nav, no custom web fonts, no skeuomorphic shadows on primary CTAs, no pill-shaped buttons, no overspace, error red ≠ sale text. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms | `<767px` and `<768px` kept as two writings; 768–1037 / 1037–1200 / >1200 / >1248; 6→4→3→2 collapse; 190px square; `cdn02.pinkoi.com`; hamburger below 768px; filter bottom sheet. |
| §9 Agent Prompt Guide | 삭제 | 도구별 명령·프롬프트. Unique geometry (product-card image top 75% / title 14px 700 `#39393e` 2-line clamp / price 16px 700 / ribbon absolute top-left; Purchase `9px 14px`; nav dropdown `0 0 4px rgba(32,32,38,.4)`; form helper 12px `#e63349` / `.s-required:after { color: #e63349; content: '*'; margin-left: 4px }`) landed on Product Card, Purchase, Navigation header, Input (A3). Color/radius/coral/error/transition already in Experience/Foundations/Components. 슬롯 없는 위임 없음. |
| §10 Voice & Tone | 옮김 → Content & Locales | Register, context table, forbidden phrases including `獨家優惠` / `超值`, verified/cited samples, two illustrative samples kept under the source illustrative label. |
| §11 Brand Narrative | 옮김 → Experience `scope` ¶3 | Taipei in 2011 DESIGN dest **1** · P dest **1**. `Peter Yen (顏君庭)` DESIGN dest **2** · P dest **1**. `Mike Lee (李讓)` DESIGN dest **2** · P dest **1**. `Maibelle Lin (林怡君)` DESIGN dest **2** · P dest **1**. `NT$500,000` DESIGN dest **2** · P dest **3**. `7-square-meter` DESIGN dest **2** · P dest **3**. Sequoia Capital India DESIGN dest **3** · P dest **3**. `150 countries` DESIGN dest **2** · P dest **2**. Closing sentence `the chrome stays out of the way so the object can do the talking` DESIGN dest **1**. Dual: `DESIGN.md` Scope and provenance Claim ledger / Proof notes. |
| §12 Principles | 옮김 → Experience Principles | Eight principles and UI implications, with B2a on the section head. Coral-is-finite kept in the source's inferred class. |
| §13 Personas | 삭제 | 페르소나 4인(이름·나이·도시·동기·소속 분류 포함). 승격 없음, sidecar 재수록 없음 (D2, D2a). Audience keeps only source-named groups: Taiwan / Hong Kong / Japan cross-border design buyers; Taiwan, Japan, Hong Kong, mainland China, and Thailand; shop owners; Asian independent designer; `Sell on Pinkoi`; `Be a Pinkoist`. |
| §14 States | 옮김 → Components & States Capture record + per-component applicability | 본문 보존: empty / loading / error / success / skeleton / disabled 표 (13 rows). 선언 컴포넌트는 §4.4 7상태 표를 닫되 미관측 시각값은 발명하지 않음. graph 위임 없음. Input Focus `#bfbfc1` stays observed Focus, not `focus-visible` treatment (B1). |
| §15 Motion & Easing | 옮김 → Foundations Motion | Durations 0/100/200/300/250ms, three easing *roles*, four signature motions including production `transition: border .1s, color .1s, background .1s` DESIGN dest **2**, spring stance, reduced-motion. Three unsourced curves deleted at the curve-value boundary (named in the omission sentence). B3 전문 `DESIGN.md` Motion (`transition properties, animation name, duration, easing, and reduced-motion behavior` dest **1**). |
| HTML comment philosophy layer | 분리 → provenance Proof / Omission + 옮김 → Scope quotes / 150 countries | Founder quotes including `If we abandoned the review system, Pinkoi would lose its advantage.` DESIGN dest **1**. Shanghai, Hong Kong, Tokyo, Bangkok market list kept beside the five-market body list. Personas comment is disposition, not a rehost of names. |
| Footer **Verified** / Tier 1 / Tier 2 / Conflicts | 분리 → provenance Freshness / Surfaces / Proof + 옮김 → footer-capture components | Dual: ledger and the portable Search / Country pills / Outline Secondary / warm-cast / 3-fill discipline writings. |

## A5a hand sweep

Source quoted non-Latin runs and published labels were extracted by hand from `web/references/pinkoi/DESIGN.md` and from sibling `web/references/pinkoi/.verification.md`. Issued-copy needles (labels, CTAs, slogans, microcopy, names) were checked against the three output files. UI-meta, token paths, and font stacks were not needles except where the source itself marks a string as a brand line.

- Extracted issued-copy needles from source DESIGN.md: 38. Missing from DESIGN.md (use): 0.
- Sibling file present. Sibling-only live-verified labels (not in source DESIGN.md): `Search` (trailing-button name), `Taiwan / Japan / Republic of Korea (ROK) / Thailand / Explore More`, `Cross-border Free Shipping`, `See more`, `Join us`, `Download the Pinkoi app`. Source DESIGN.md 0 / portable DESIGN.md 0. Disposition: not copied into the portable body (B1 — sibling-only; source DESIGN.md does not carry them). Mention in this log is disposition, not use.
- Dispositioned in this log: §13 biographies (no issued-copy needle among them); sibling-only labels above.
- Gate `compared` 2 / `candidates` 421 (non-Latin needles 2; Latin remainder is this hand sweep). A5a mandatory because compared < candidates. `verdict: PASS` is compared-among-needles, not “all issued copy preserved.”
- Surviving issued copy includes: Pinkoi, Design the way you are., Asia's cross-border design marketplace, Sell on Pinkoi, Be a Pinkoist, Let's work together., Pinkoi loves collaborating with people. We can't wait to turn your good ideas into great realities., Stay up to date on the latest designs, Pinkoi believes that design has a transformative power that can permeate every aspect of our lives., Embracing great design can bring us closer to our ideal lifestyles, Sign In / Register, Add to Cart, Buy Now, Continue Browsing, View Order, View Cart, Place Order, Flagship Shops, Peter Yen (顏君庭), Mike Lee (李讓), Maibelle Lin (林怡君), Sequoia Capital India, GMO Venture Partners, 獨家優惠, 超值, ヒラギノ角ゴ Pro W3, メイリオ, PingFang TC, pinkoi_logo_2019.svg, If we abandoned the review system, Pinkoi sells non-standard products.

## Key-path check (A1)

YAML `tokens.*` paths confirmed in `DESIGN.md` by string search, not by shared numerals:

- colors 23 keys → Semantic color role rows with `tokens.colors.<key>`
- typography 7 roles + sans/cjk → Type roles / Family
- spacing xs/sm/md/base/lg/xl/xxl/section → Spacing table
- rounded sm/md/lg/full: 9999 → Shape table (`9999` dest **2**)
- shadow soft/edge/modal → Elevation
- components 10 × type/bg/fg/radius/padding/font/use (and recorded hover/active) → matching blocks

`tokens.spacing.md: 12` ≠ card gutter `12px` ≠ Input padding 12. `tokens.spacing.base: 16` ≠ Subhead YAML 16 ≠ Product Card price `16px/700` ≠ Standard card padding `16px`. `tokens.spacing.sm: 8` ≠ `tokens.rounded.lg: 8` ≠ Search split 8px. `tokens.rounded.sm: 2` ≠ Discount YAML radius 2 as the only writing (`2px 0 2px 0` kept beside it). `tokens.rounded.md: 4` ≠ `tokens.spacing.xs: 4`. `tokens.rounded.full: 9999` ≠ avatar `50%` ≠ a component `9999px` (none written). `tokens.colors.surface` / `on-primary` both `#ffffff` as two keys. `tokens.colors.primary` `#10567b` ≠ catalog `#ff595a` ≠ `tokens.colors.purchase` `#f16c5d`. YAML modal `0px 8px 24px` ≠ §6 `0 0 4px`.

## C2 / A1b

`Primitive type: button` 5 = YAML `type: button` 5. `input` 1=1. `card` 2=2. `badge` 2=2. `Not in the token set` dest **8** at Login / Plain / Compact input / Search (header) / Country pills / Outline Secondary / Navigation header / Tables.

Primary / Login / Purchase / Danger / Green L/E/S open (in-place commit). Secondary / Plain / Product Card / Country pills / Outline Secondary / Navigation header L/E/S closed on role. Input / Compact / Search error open; loading/success closed where commit lives elsewhere. Standard card / Card Badge / Discount Badge / Tables: kind + map omitted (C4).

## D1 / D2a

`native application` / `mobile app` / `back-office` / `product application` / `measures 1440px` / `does not say` dest **0** in `DESIGN.md`. Audience has no persona name, motivation, or affiliation classification. Provenance Omission ledger is unidentified (4인; 이름·나이·도시·동기·소속 분류).

## Pass 1 (B2a)

`DESIGN.md` re-read end-to-end. Every causal / interpretive / judgment sentence (Scope so/because, Principles, Content voice, Docs-citation character) was asked: brand-issued fact or observation-derived reading. Derived readings carry an adjacent complete-form close (`derived editorial implementation inference` + `not Pinkoi-authored or a separately published UI specification`). Count **52** = provenance inventory **52**.

## Pass 2 (E2)

Each log row was written after a file search for the named value. Dual destinations are both named. Compliance claims (`B3 유지`) are made only where the full five-kind gate sentence is in `DESIGN.md` Motion (`transition properties, animation name, duration, easing, and reduced-motion behavior` dest **1**).

## Unique-expression self-check (wave 43)

Pulled 85 source-unique expressions (years, proper names, quotes, modifiers, constraint sentences). `grep -oF` against `DESIGN.md`: 84 present on first pass; 1 needle (`weight 600`) was a worker paraphrase of source `**600**: Reserved for narrow contexts` (src 0 for that exact string) and was not a loss. Restored 1 nearby constraint to byte-exact form: `Never go above \`10px\` except on rare hero overlays` (src 1 / dest 1 after restore). Result: pulled 85 / restored 1.
