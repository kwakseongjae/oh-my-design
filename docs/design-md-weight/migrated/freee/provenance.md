# freee provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/freee/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | freee |
| name | freee |
| country | JP |
| category | productivity |
| homepage | https://www.freee.co.jp |
| primary_color | `#2864f0` |
| logo | type `github`, slug `freee` |
| verified | 2026-07-13 |
| omd format (source) | 0.1 |
| ds.name | Vibes |
| ds.url | https://vibes.freee.co.jp |
| ds.type | system |
| ds.description | Official freee design system, published with accessibility-focused frontend-development materials. |
| tokens.source | live-extract |
| tokens.extracted | 2026-07-12 |
| components_harvested | true |

The four fields of the source's nested `ds:` block are ledger metadata and are kept as values (A1c). Its `type: system` line in particular is the source's own classification of Vibes as a design system rather than a marketing asset, and it is the reason the portable body treats Vibes as its own evidence domain instead of as narrative colour. The block is written nested, so the dotted form is this ledger's shorthand and not a source string: `grep -oF 'ds.type' web/references/freee/DESIGN.md | wc -l` = 0, while the nested block above reproduces it line for line. The field name reaches the portable body in neither form; `grep -oF 'ds.type' DESIGN.md | wc -l` = 0.

The source carries no `tokens.note` field and no `added` field — `grep -c '^  note:\|^added:' web/references/freee/DESIGN.md` = 0. Neither is invented here.

### Dual and multiple destinations (E2a)

- `name` `freee` is dual: this ledger + the portable H1 `# freee Design System` and every portable sentence that names the company. The published form is lower-case `freee`; it is never title-cased to `Freee` in any of the three files.
- `primary_color` `#2864f0` is multi-destination: this ledger + the portable body at 11 occurrences on 11 lines. Counted `grep -oF '#2864f0' DESIGN.md | wc -l` = **11**, at lines 13 (Scope, the Vibes-versus-live boundary), 35 (Distinctive traits), 60 (Avoid), 70 (Foundations → Semantic color), 173 and 175 (Header Action background and border), 200 and 202 (Page Action — Primary background and border), 229 and 230 (Page Action — Outline text and border), 254 (Product-category Card text).
- `homepage` `https://www.freee.co.jp` is dual: this ledger + the portable Scope, which names the three inspected routes in full, and the Foundations evidence-domain list, which names the site as `www.freee.co.jp`.
- `logo` `type: github` / `slug: freee` is dual: this ledger + portable Typography & Assets → Assets, which carries both field values and records the entry as an organization-account reference rather than a captured first-party freee mark. No portable Named-gaps row was invented for a first-party logo-file absence.
- `verified: 2026-07-13` is ledger-only. `grep -oF '2026-07-13' DESIGN.md | wc -l` = 0. The date the portable body carries is the inspection date `2026-07-12`, which is dual: this ledger/Freshness + portable Scope, Foundations evidence-domain list, and Capture record.
- `ds.name` `Vibes` and `ds.url` `https://vibes.freee.co.jp` are dual: this ledger + the portable Scope, the Foundations evidence-domain list, the Historical system boundary, and the Font-evidence table. `Vibes` occurs 14× in the portable body; `https://vibes.freee.co.jp` occurs 2×.
- `ds.description` is dual in substance: quoted in full above + carried in the portable Scope and Foundations evidence-domain list as "official open-source design system" with "accessibility-related frontend-development knowledge" and the accessibility orientation. The field string itself is not reproduced verbatim in the portable body.
- `tokens.source: live-extract` and `tokens.extracted: 2026-07-12` — the field names stay in this ledger only (`grep -oF 'live-extract' DESIGN.md | wc -l` = 0); the date is dual as recorded above.
- `components_harvested: true` is dual: this ledger + Proof notes below. It does not reach the portable body as a field name; the Capture record states the same fact as prose ("Every component below is a public-site observation with its selector and surface preserved").
- `omd: "0.1"`, `verification_v2.schema: 2`, and `verification_v2.checked: 2026-07-13` are ledger-only.

## verification_v2 block, transcribed

| Field | Value |
|---|---|
| schema | 2 |
| checked | 2026-07-13 |
| conflicts | `[]` (empty in the source) |

### Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | public-marketing | https://www.freee.co.jp/ | 2026-07-12 |
| pricing | public-marketing | https://www.freee.co.jp/pricing/ | 2026-07-12 |
| products | public-marketing | https://www.freee.co.jp/products/ | 2026-07-12 |

### Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://www.freee.co.jp/ | 2026-07-12 |
| pricing-live | product-surface | https://www.freee.co.jp/pricing/ | 2026-07-12 |
| products-live | product-surface | https://www.freee.co.jp/products/ | 2026-07-12 |
| vibes-repo | official-doc | https://github.com/freee/vibes | 2026-07-13 |
| vibes-release | official-doc | https://corp.freee.co.jp/news/20231219_design.html | 2026-07-13 |
| mission | official-doc | https://corp.freee.co.jp/mission/ | 2026-07-13 |
| company | official-doc | https://corp.freee.co.jp/company/ | 2026-07-13 |

### Claim ledger

The source declares one YAML anchor, `&live { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-12" }`, and every one of its 47 token claims dereferences it with `*live`. The anchored `surface_id` is therefore `home` for all 47 claims, including the ones the §2 and §4 prose attributes to the pricing and products routes. Both records are kept: the anchor as transcribed here, and the per-surface attributions as the prose states them. Neither is rewritten to match the other.

All 47 claim keys, transcribed literally as the source lists them:

`tokens.colors.primary` · `tokens.colors.primary-hover` · `tokens.colors.primary-pressed` · `tokens.colors.canvas` · `tokens.colors.surface-tint` · `tokens.colors.text` · `tokens.colors.text-muted` · `tokens.colors.border` · `tokens.typography.family.ui` · `tokens.typography.body.size` · `tokens.typography.body.weight` · `tokens.typography.body.lineHeight` · `tokens.typography.body.use` · `tokens.typography.action.size` · `tokens.typography.action.weight` · `tokens.typography.action.lineHeight` · `tokens.typography.action.use` · `tokens.typography.heading.size` · `tokens.typography.heading.weight` · `tokens.typography.heading.lineHeight` · `tokens.typography.heading.use` · `tokens.spacing.header-y` · `tokens.spacing.header-x` · `tokens.spacing.action-y` · `tokens.spacing.action-x` · `tokens.rounded.header-action` · `tokens.rounded.action` · `tokens.components.header-primary.type` · `tokens.components.header-primary.bg` · `tokens.components.header-primary.fg` · `tokens.components.header-primary.radius` · `tokens.components.header-primary.padding` · `tokens.components.header-primary.font` · `tokens.components.header-primary.use` · `tokens.components.header-primary.hover` · `tokens.components.primary-action.type` · `tokens.components.primary-action.bg` · `tokens.components.primary-action.fg` · `tokens.components.primary-action.radius` · `tokens.components.primary-action.padding` · `tokens.components.primary-action.font` · `tokens.components.primary-action.use` · `tokens.components.primary-action.hover` · `tokens.components.segment-card.type` · `tokens.components.segment-card.bg` · `tokens.components.segment-card.radius` · `tokens.components.segment-card.use`

## Token record, transcribed

| Group | Field | Value | Portable destination |
|---|---|---|---|
| colors | primary | `#2864f0` | Foundations → Semantic color, and 10 further body locations (see E2a above) |
| colors | primary-hover | `#2863ef` | Foundations → Semantic color; Page Action — Primary conflict note; Named gaps |
| colors | primary-pressed | `#245ad9` | Foundations → Semantic color; Page Action — Primary conflict note; Named gaps |
| colors | canvas | `#ffffff` | Foundations → Semantic color; Distinctive traits; three component records |
| colors | surface-tint | `#ebf3ff` | Foundations → Semantic color and its application guidance; Segment-selection Card background |
| colors | text | `#323232` | Foundations → Semantic color and its application guidance; Distinctive traits; Segment-selection Card text |
| colors | text-muted | `#595959` | Foundations → Semantic color and its application guidance; Distinctive traits |
| colors | border | `#e1dcdc` | Foundations → Semantic color; Product-category Card border |
| typography | family.ui | `Noto Sans JP` | Typography & Assets → Family, Font evidence, Measured public hierarchy; every component `Font` line |
| typography | body | size 14, weight 400, lineHeight `1.5`, use "Observed public-site body text." | Measured public hierarchy → Body row, including the `use` string |
| typography | action | size 16, weight 700, lineHeight `1.5`, use "Observed public primary and outline action." | Measured public hierarchy → Public action row, including the `use` string |
| typography | heading | size 40, weight 700, lineHeight `1.5`, use "Observed public-site heading." | Measured public hierarchy → Public heading row, including the `use` string |
| spacing | header-y 4, header-x 20 | unitless in the token record | Foundations → Spacing, kept as the pair `4` / `20` beside the measured `4px 20px` |
| spacing | action-y 10, action-x 16 | unitless in the token record | Foundations → Spacing, kept as the pair `10` / `16` beside the measured `10px 16px` |
| rounded | header-action 5, action 8 | unitless in the token record | Foundations → Shape, as 5px and 8px |
| components | header-primary | type `button`, bg `#2864f0`, fg `#ffffff`, radius `5px`, padding `4px 20px`, font `14px / 700 / Noto Sans JP`, hover `#2761e8`, use "Public header sign-up action only." | Components & States → Header Action — Primary, field for field |
| components | primary-action | type `button`, bg `#2864f0`, fg `#ffffff`, radius `8px`, padding `10px 16px`, font `16px / 700 / Noto Sans JP`, hover `#2863ee`, use "Public pricing-page primary action only." | Components & States → Page Action — Primary, field for field |
| components | segment-card | type `card`, bg `#ebf3ff`, radius `8px`, use "Public home segment-selection card only." | Components & States → Segment-selection Card — Tinted, field for field |

The three `lineHeight: 1.5` values are kept as the unitless ratio (A1a). The portable Measured public hierarchy prints `21px (1.5)`, `24px (1.5)`, and `60px (1.5)`: the px figures are the source's own §3 table and the parenthesised `1.5` is the source's own token value. Neither replaces the other. `grep -oF '1.5' DESIGN.md | wc -l` = 4 in the portable body — the three role rows plus the sentence that names the ratio.

The three verified primitive types are kept per component (A1b): `Type: button` on Header Action — Primary, `Type: button` on Page Action — Primary, `Type: card` on Segment-selection Card. `grep -o 'Type: button' DESIGN.md | wc -l` = 2 and `grep -o 'Type: card' DESIGN.md | wc -l` = 1.

## Canonical proof — sibling verification file

`web/references/freee/.verification.md` **is adopted into this ledger**. It is the record that the source footer's one-line **Verified** string abbreviates, and it is the authority below for the collector artifact, the capture coverage counters, the raw computed samples, the font-source paths, the source-domain separation table, and the conflict matrix.

| Field | Value |
|---|---|
| sibling | `web/references/freee/.verification.md` |
| bytes | 7,707 |
| SHA-256 | `26dfecabce8d275de422408f2859b22e7bc7e40e6eb360226e445b5df551719c` |
| heading | `# freee — Verification Notes (2026-07-13)` |
| pipeline line | `Pipeline: omd:add-reference UPDATE · Brand: freee (freee)` |
| grade | `## Proof — Tier 1 live inspect` |
| inspected | 2026-07-12 |
| raw samples | 7 — bullet lines matching `^- ` inside the sibling's `### Raw samples` block |

Source SHA-256 for the migrated input: `954332482ef863df4cbdcb9a6521c9a3d203d44811ac3dcb838e3b6e063b63ef` (`web/references/freee/DESIGN.md`, 17,731 bytes).

**Collector boundary, quoted from the sibling:** "Raw collector evidence: `artifacts/reference-evidence/freee.json`, captured `2026-07-12T16:24:53.162Z` with `playwright_cli`." and "This update used the supplied raw artifact only. It did not rerun browser capture and did not use MCP."

**Capture coverage, quoted from the sibling:** "3 public routes, score 83, 84 component variants, 3 pseudo-state kinds, 0 interaction kinds, and 0 interaction snapshots."

The sibling corroborates the source rather than widening it on the three routes, the 2026-07-12 inspection date, the `#2864f0` / `#ffffff` / `#ebf3ff` / `#323232` / `#595959` / `#e1dcdc` values, the 1,371 Noto Sans JP uses, the declared-only face list, the Apache-2.0 Vibes licence, and the four narrative URLs.

### Sibling-only values, recorded here and not promoted

The sibling records the collector run; the portable contract reconstructs the source `DESIGN.md`. A value that exists only in the sibling is a ledger entry and never a portable token. The values in this class:

- The collector artifact path `artifacts/reference-evidence/freee.json`, its capture timestamp `2026-07-12T16:24:53.162Z`, and the `playwright_cli` collector name.
- The coverage counters: score 83, 84 component variants, 0 interaction kinds, 0 interaction snapshots. The source states only `interactionCount: 0` and "three pseudo-state kinds", and those two are what the portable Capture record carries.
- A sixth captured element the source never promotes: `home::li.g-headerNav_listItem` :: color `rgb(89, 89, 89)`; border-radius `0px`; padding `0px 12px`; height `29px`; font `14px / 400`. Its colour agrees with the source's `text-muted` `#595959`; its geometry (`0px 12px`, `29px`, `0px` radius) exists nowhere in the source and is not promoted.
- The sibling's surface ids for two raw samples, `surface-2::[data-omd-capture="17"]` and `surface-3::[data-omd-capture="37"]`, where the source writes `pricing::` and `products::`. The portable body carries the source's forms.
- The three freee-hosted font source paths `/_noto_fonts/NotoSansJP-Regular.otf`, `NotoSansJP-Medium.otf`, and `NotoSansJP-Bold.otf`. The source names the three weights without the paths, and the portable Assets line does the same.
- The body/text sample string `font-family "Noto Sans JP", sans-serif`. The source promotes `tokens.typography.family.ui: "Noto Sans JP"` with no fallback member, so the portable Family line carries `Noto Sans JP` alone and no `sans-serif` fallback is written into it.
- The sibling's own source-domain separation table and conflict matrix, transcribed below as ledger content.
- Two further first-party URLs the sibling lists under design and licence evidence that the source `DESIGN.md` also lists: the four narrative URLs agree between the two files, so they are corroboration, not sibling-only additions.

Each sibling-only value returns 0 from a literal grep of the portable body: `grep -oF '0px 12px' DESIGN.md | wc -l` = 0, `29px` = 0, `g-headerNav_listItem` = 0, `surface-2` = 0, `surface-3` = 0, `_noto_fonts` = 0, `sans-serif` = 0, `playwright_cli` = 0, `score 83` = 0, `84 component variants` = 0, `reference-evidence` = 0.

### Source-domain separation, transcribed from the sibling

| Domain | Sources | What it supports | What it does not support |
|---|---|---|---|
| Live public marketing/product-discovery | freee home, pricing, products supplied collector routes | Computed colors, geometry, typography, selector-backed components, and pseudo-state image samples | Authenticated accounting/HR/payroll UI, docs chrome, responsive behavior, or full interaction contracts |
| Official design system | `github.com/freee/vibes`, Vibes announcement | Vibes existence, open-source distribution, Apache-2.0 licence, and accessibility-oriented design-system context | Replacement of live public tokens with legacy Vibes values |
| Corporate context | freee mission and company pages | Product/company description, mission, founding and leadership facts | UI token, component, or font-family authority |
| Declared-only font assets | Raw `@font-face` declarations | Boundary that Cherry Bomb One, Coiny, myfont, and swiper-icons were declared but unused | A UI-family token or fallback substitution |

The portable Foundations → Evidence-domain boundary carries these four domains in the same order and with the same boundaries, so this table is dual (E2a): ledger + portable body.

### Conflict matrix, transcribed from the sibling

| Field | Tier 1 (live / official) | getdesign | refero | Resolution |
|---|---|---|---|---|
| Current public primary | `#2864f0` computed on all three routes | No freee record returned | No freee result returned | Promoted as live public primary |
| Legacy Vibes primary | Vibes source contains historical `#285ac8`; no matching current public primary capture | No freee record returned | No freee result returned | Retained only as historical design-system context; removed from current tokens |
| Public UI font | Noto Sans JP: computed + loaded FontFaceSet + three freee-hosted OTF sources | No freee record returned | No freee result returned | Promoted for the captured public routes |
| Declared fonts | Cherry Bomb One, Coiny, myfont, swiper-icons: declarations with zero visible use | No freee record returned | No freee result returned | Declared-only; not promoted |
| Buttons and cards | Selector-backed public header, pricing, product-category, and segment-card samples | No freee record returned | No freee result returned | Retained only with surface/selector/state provenance |
| Status tokens, tables, inputs, dialogs, responsive and product-app patterns | No qualifying public capture | No freee record returned | No freee result returned | Omitted rather than inferred |

### Earlier values removed or bounded, quoted from the sibling

- "The previous reference promoted the Vibes `#285ac8` palette, semantic status colors, system-stack typography, 4dp global scale, shadow recipes, z-index rules, inputs, tables, badges, product states, breakpoints, and motion as if they described current public and product UI."
- "This pass preserves Vibes and its licence as official historical/design-system context while removing those unsupported live tokens at the smallest field or component boundary."
- "Current public `#2864f0`, Noto Sans JP, 5px/8px geometry, and four selector-backed components are retained with raw evidence."

## Other siblings — adoption decision (E2)

Three further files sit beside the source. Each is named here with an explicit decision and reason; none is passed over in silence.

| Sibling | Decision | Reason |
|---|---|---|
| `web/references/freee/.verification.md` | **Adopted** into this ledger | It is the proof record for the same 2026-07-13 pass that produced the source `DESIGN.md`. Adoption stops at this ledger: no sibling-only value is promoted to a portable token. |
| `web/references/freee/README.md` | **Not adopted** | It describes a superseded 2026-04-17 extraction — a "9 sections" `DESIGN.md` built by copying Vibes SCSS partials, with `#285ac8` as the brand colour, a 4dp baseline, a 10/12/14/16/24dp type scale, and three shadow recipes. The current source and its verification file record exactly those values as removed or bounded. Adopting it would restore the values the current pass removed. |
| `web/references/freee/_research.md` | **Not adopted** | Same superseded 2026-04-17 extraction, plus a 2026-04-20 "Philosophy Layer" whose §12–§15 content the current source no longer carries. Its own text marks parts of that layer as inferred, illustrative, or confirmed only by search-surface cross-check. |
| `web/references/freee/_research/vibes-storybook-1440px.png` | **Not adopted** | A Storybook screenshot from the same superseded pass. It is a binary image; no value was transcribed from it in this migration, and none is asserted from it. |

### Not promoted from `README.md` and `_research.md`

Listed so the non-promotion is auditable rather than implicit. Every item below returns 0 from a literal grep of the portable body.

- Vibes SCSS token values: brand `#285ac8` as a *current* colour (the hex itself survives in the portable body only in its source-given role as the historical Vibes value that must not be substituted), the 9-hue palette with 5–10 shades per hue, the semantic aliases `$vbPrimaryColor` / `$vbAccentColor` / `$vbAlertColor`, the shadow recipes `$vbCardShadow` / `$vbFloatingShadow` / `$vbPopupShadow`, the z-index hierarchy (overlay 100 → max 2147483647), the 4/8/16/24/32/48dp spacing scale, the 10/12/14/16/24dp type scale, the 24/36/48dp form-control heights, container max-width 1120dp, mobile boundary 768dp, line height 1.5 as a Vibes token, the Hiragino-led Japanese system stack, and the `freee-logo` wordmark face (Noto Sans CJK JP Medium).
- The `@freee_jp/vibes` npm package and the `vibes_2021.css` distribution filenames.
- `_research.md`'s own "Medium confidence" and "Inferred" items: the default `border-radius: 4px` for buttons and cards, the per-component padding and table styling patterns, and the assumed `0.2-0.3s ease` animation timing. The current source records no motion value at all, and the portable Motion section carries that plus the five-kind promotion gate.
- The 2026-04-20 Philosophy Layer: the four-adjective brand register 「かろやか」「シンプル」「あんしん」「インテリジェント」, the accessibility tagline 「だれでもビジネスの主役になれる」, the forbidden-phrase register (「革命的」「イノベーティブ」「ディスラプティブ」「完全自動」「100% 正確」), the eight-principle set, the twelve-row state table including its "Approval pending" row, the "No spring. No overshoot. No bounce." motion stance, and the `motion-instant` reduced-motion collapse.
- Four persona archetypes from that layer. Their class is named and their content is not re-hosted, here or in the portable body (D2). The current source replaced them with an explicit instruction that synthetic users are never created as evidence, and that instruction is what the portable Audience section carries.
- Three URLs that appear only in `_research.md` and in neither the source nor the sibling: the freee accessibility sustainability page, the freee a11y-guidelines intro, and the freee design-philosophy brand page, together with the third-party writeups it names. `grep -oF 'a11y-guidelines' DESIGN.md | wc -l` = 0, `brand.freee.co.jp` = 0, `speakerdeck` = 0, `developers.freee.co.jp` = 0.

The one string that does cross from that layer into the portable body is 「スモールビジネスを、世界の主役に。」 — but it crosses from the **current source**, whose §10 carries it with a verification marker, not from `_research.md`. Its presence is source-backed, not sibling-backed.

## Freshness

| Event | Date |
|---|---|
| verified (YAML) | 2026-07-13 |
| verification_v2.checked | 2026-07-13 |
| surfaces inspected | 2026-07-12 |
| sources captured (3 live routes) | 2026-07-12 |
| sources captured (4 official-doc) | 2026-07-13 |
| tokens.extracted | 2026-07-12 |
| footer **Verified** | 2026-07-13 |
| sibling inspected | 2026-07-12 |
| collector artifact timestamp | 2026-07-12T16:24:53.162Z |

The record is internally consistent: the live capture is 2026-07-12 and the official-document review and sign-off are 2026-07-13.

### Conflict found during migration, not recorded by the source footer

The source footer states "Conflicts unresolved: none" and `verification_v2.conflicts` is `[]`. Two pseudo-state values nevertheless disagree inside the source:

| Source location | Hover | Pressed |
|---|---|---|
| §2 Color Palette — "Primary hover snapshot (`#2863ef`): pseudo-state snapshot on the pricing/page action capture" and "Primary pressed snapshot (`#245ad9`): pseudo-state snapshot on a pricing primary action" | `#2863ef` | `#245ad9` |
| YAML `tokens.colors.primary-hover` / `primary-pressed` | `#2863ef` | `#245ad9` |
| §4 Page actions → Primary, at `pricing::[data-omd-capture="17"]` | `#2863ee` | `#2762ec` |
| YAML `tokens.components.primary-action.hover` | `#2863ee` | — |

Both pairs describe the pricing primary action's hover and pressed snapshots, and they differ. Both are preserved in the portable body — the `#2863ef` / `#245ad9` pair in Foundations → Semantic color, the `#2863ee` / `#2762ec` pair in the Page Action — Primary record — and the disagreement is stated in the component record and named in Governance → Named gaps. Neither side is selected.

The header action has no such disagreement: YAML `header-primary.hover` and §4's Header action hover both give `#2761e8`.

### Source-internal evidence note, not a conflict

§10's third voice sample is marked to `corp.freee.co.jp/vision/`. That URL is not in the source's own `verification_v2.sources` list, which names mission, company, vibes-repo, and vibes-release. The string is carried byte-for-byte all the same, because it is a freee-published line the source records as an official vision framing; the marker's absence from the source list is recorded here rather than used to drop the line.

## Sources ledger

### Tier 1

- https://www.freee.co.jp/ — public home route, live computed capture, inspected 2026-07-12
- https://www.freee.co.jp/pricing/ — public pricing route, live computed capture, inspected 2026-07-12
- https://www.freee.co.jp/products/ — public products route, live computed capture, inspected 2026-07-12
- https://corp.freee.co.jp/news/20231219_design.html — official Vibes publication announcement, captured 2026-07-13; narrative and design-system context, not a live token source
- https://github.com/freee/vibes — official Vibes repository, captured 2026-07-13; Apache-2.0 licence and published component system
- https://corp.freee.co.jp/mission/ — official mission, captured 2026-07-13; narrative only
- https://corp.freee.co.jp/company/ — official company profile, captured 2026-07-13; establishment date and leadership facts, narrative only

The three corporate URLs stay in this ledger. `grep -oF 'corp.freee.co.jp' DESIGN.md | wc -l` = 0. The two Vibes addresses are dual, because they are the official design system's own published addresses: `grep -oF 'vibes.freee.co.jp' DESIGN.md | wc -l` = 2 and `grep -oF 'github.com/freee/vibes' DESIGN.md | wc -l` = 2.

### Tier 2

- https://getdesign.md/freee — attempted through built-in web search; the returned directory results did not identify a freee record.
- https://styles.refero.design/?q=freee — attempted through built-in web search; the public result set did not return a freee style record.

Quoted from the sibling: "Both are independent Tier 2 attempts. Their absence neither resolves an unknown Tier 1 field nor permits a substitute." Both stay in this ledger; `grep -oF 'getdesign' DESIGN.md | wc -l` = 0 and `grep -oF 'refero' DESIGN.md | wc -l` = 0.

## Observation ledger

Raw samples, transcribed from the sibling's `### Raw samples` block. These are the computed observations the reconstruction rests on.

| Route :: selector | Value |
|---|---|
| home :: `home::[data-omd-capture="8"]` | background `rgb(40, 100, 240)`; color `rgb(255, 255, 255)`; border-radius `5px`; padding `4px 20px`; height `31px`; font `14px / 700` |
| pricing :: `surface-2::[data-omd-capture="17"]` | background `rgb(40, 100, 240)`; color `rgb(255, 255, 255)`; border `2px`; border-radius `8px`; padding `10px 16px`; height `48px` |
| pricing :: `surface-2::[data-omd-capture="70"]` | background `rgb(255, 255, 255)`; color `rgb(40, 100, 240)`; border `2px`; border-radius `8px`; padding `10px 16px`; height `48px` |
| home :: `home::div.fr-3ezzk7z2_kv_card` | background `rgb(235, 243, 255)`; color `rgb(50, 50, 50)`; border-radius `8px`; height `103px`; font `16px / 400` |
| products :: `surface-3::[data-omd-capture="37"]` | background `rgb(255, 255, 255)`; color `rgb(40, 100, 240)`; border-color `rgb(225, 220, 220)`; border-radius `8px`; padding `10px 14px`; height `186px` |
| home :: `home::li.g-headerNav_listItem` | color `rgb(89, 89, 89)`; border-radius `0px`; padding `0px 12px`; height `29px`; font `14px / 400` — sibling-only element, not promoted |
| home :: body/text samples | font-family `"Noto Sans JP", sans-serif`; body `14px / 400 / 21px`; heading `40px / 700 / 60px` |

### Pseudo-state snapshots, from the source §4

| Component | Selector | Hover | Pressed | Focus |
|---|---|---|---|---|
| Header action — Primary | `home::[data-omd-capture="8"]` | `#2761e8` | `#2358d4` | `#2256ce` |
| Page actions — Primary | `pricing::[data-omd-capture="17"]` | `#2863ee` | `#2762ec` | `#2763ed` background with `#2761e8` border |

All three focus entries are generic focus captures. The source contains no `focus-visible` string — `grep -o 'focus-visible' web/references/freee/DESIGN.md | wc -l` = 0 — so no portable `focus-visible` row carries a treatment value (B1). The portable body's `focus-visible` rows are `applicable` on control meaning with the treatment omitted, and the focus snapshots are preserved as their own component fields.

## Portable derived-editorial scope (E1)

This ledger is 1:1 with the portable body for the counted qualification phrase: every occurrence the body carries is listed here, and nothing is listed that the body does not carry. Counted, not estimated — `grep -o 'derived editorial' DESIGN.md | wc -l` = **7** on 7 distinct lines, and `grep -o 'not freee-authored' DESIGN.md | wc -l` = **7**, so every occurrence closes its evidence class rather than stopping at "derived from the verified surfaces".

| # | Line | Portable location | What carries the qualification |
|---|---:|---|---|
| 1 | 15 | §1 Experience → Scope ¶4 | The reading of the captured pages: the mission expressed through a clean white field, a vivid practical blue, high-contrast Japanese text, and compact rounded calls to action, and the system reading as calm and approachable. The colour roles, type metrics, geometry, and component records are named as the measured parts. |
| 2 | 42 | §1 Experience → Principles | The three numbered principles, list head, with an added clause on item 1 stating that it says nothing about how freee's accounting, HR, payroll, or approval product behaves, and a clause stating that the three are not drawn from Vibes. |
| 3 | 50 | §1 Experience → Capture-bound application | The three application rules carried from the source's Do list. |
| 4 | 58 | §1 Experience → Avoid | The three boundary prohibitions carried from the source's Don't list. |
| 5 | 81 | §2 Foundations → Semantic color | The application guidance moved out of the source's agent-prompt section: white canvas with `#323232` and `#595959`, `#ebf3ff` only in the observed segment-card context, and no status colour beyond the capture. The eight role names and values are named as the measured parts. |
| 6 | 162 | §4 Components & States → Capture record | The reading of the four control roles as public marketing entry or destination controls, and every state-applicability verdict built on that reading. The selectors, surfaces, geometry, and pseudo-state snapshots are named as the measured parts. |
| 7 | 313 | §6 Content & Locales → Voice reading | The voice reading and the three Do/Don't rows. |

Two further readings close their evidence class in a different form and are therefore not among the seven:

- §6 Content & Locales, immediately after the Do/Don't table (line 321): "That table is an authoring rule for writing in this style. It is not a freee-published policy, and it asserts nothing about freee's actual product copy, marketing conduct, accounting or tax guidance, or compliance position." The closure is by anaphora to row 7 immediately above it, plus its own domain boundary.
- §4 Components & States → Capture record (line 164): "These applicability verdicts describe those four public marketing controls and nothing else. None of them describes a control inside freee's accounting, HR, payroll, or approval product, and none asserts anything about how that product behaves." This is the domain boundary attached to row 6, not a second qualification.

No occurrence sits in §7 Governance, in §3 Typography & Assets, or in §5 Layout & Platforms, by measurement rather than by omission. §7 is the fixed claim block plus Named gaps; §3 holds evidence classes, family, measured metrics, and the two asset records; §5 holds measured paddings, radii, and rendered heights with their measurement boundary. The opposite error was checked too: no measured value carries a qualification that would demote it. The colour roles, the type metrics, the spacing and radius records, the component fields, the pseudo-state snapshots, and the three published Japanese lines carry none.

## Deletions

| Deleted | Where it was | Reason |
|---|---|---|
| §9 Agent Prompt Guide, all three prompt strings | Source §9 | Tool-shaped copy-and-paste prompts with no receiving slot. Every value inside them already exists in Foundations or a component record; the one rule that existed only there — use `#ebf3ff` only in the observed segment-card context and add no unobserved status colour — was moved to Foundations → Semantic color (A3), qualified. |
| The `<!-- verified: … -->` markers on the three voice samples | Source §10 | Verification-record markers. Their URLs and dates are transcribed in this ledger; the portable body states that the reviewed material marks the first two as mission-page lines and the third as a vision framing, without reproducing the marker syntax. |
| The mid-file footer block (**Verified** / **Tier 1 sources** / **Tier 2 sources** / **Conflicts unresolved**) | Source footer | Freshness and source ledger. Transcribed above. |
| The bare `[FILL IN]` tokens in §13, §14, and §15 | Source §13–§15 | Placeholder markers. The prose beside each of them is preserved: §13 → Experience → Audience, §14 → Components & States → Capture record, §15 → Foundations → Motion. `grep -o '\[FILL IN' DESIGN.md | wc -l` = 0. |
| The legacy H1 `# Design System Inspiration of freee` | Source line 110 | Replaced by the Core H1 `# freee Design System`, which is the required form and keeps the published lower-case `freee`. |

Nothing else was deleted. No published string, no measured value, no evidence-class statement, and no boundary rule was dropped.

## Proof notes

- `verification_v2` schema 2; `conflicts: []` as the source states it. The hover/pressed disagreement found during migration is recorded above and is not written back into the source.
- `tokens.source: live-extract`, `tokens.extracted: 2026-07-12`, `components_harvested: true`.
- Capture coverage: 3 public routes, 3 pseudo-state kinds, `interactionCount: 0`. Only default component observations plus the two pseudo-state sets above are promoted.
- Uncaptured hover, disabled, loading, error, and success treatments are omitted. Where the portable body marks a state `not-applicable`, the reason given is the control's role, never the absence of a capture. State coverage is not claimed complete.
- Official mission, company, and Vibes-announcement material is narrative and design-system context, not a token source.
- The four evidence domains — live public capture, official Vibes system, corporate context, declared-only font assets — are separate. No observation in one populates another's tokens, in either this ledger or the portable body.
- No value in this reference describes an accounting treatment, a tax condition, or an HR, payroll, or approval outcome. The captured routes are public marketing pages; the authenticated product was never in the evidence base.
