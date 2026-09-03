# momo購物網 provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/momoshop/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | momoshop |
| name | momo購物網 |
| country | TW |
| category | ecommerce |
| homepage | `https://www.momoshop.com.tw` |
| primary_color | `#D62872` |
| logo.type | favicon |
| logo.slug | `https://www.google.com/s2/favicons?domain=momoshop.com.tw&sz=256` |
| omd format (source) | 0.1 |
| verified | 2026-06-03 |
| tokens.source | prose-derived |
| tokens.extracted | 2026-06-09 |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here, and catalog homepage identity in `DESIGN.md` §1 Scope. The primary color is dual: identity here, and Foundations Momo Pink / `tokens.colors.primary` in `DESIGN.md`. The Google s2 favicon slug is dual: identity here, and a portable Assets classification in `DESIGN.md` §3. There is no `ds.name` / `ds.url` / `ds.type` field in the source frontmatter (A1c: the absence is recorded, not filled).

**Logo decision.** The catalog field is `logo.type: favicon` with a Google s2 proxy URL. That is an identity pointer, not a momo購物網-hosted brand file.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-03 |
| tokens.extracted | 2026-06-09 |

The source footer records the verification verbatim as **Verified:** 2026-06-03. That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved, as the source footer states: none.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| brand | product-surface | `https://www.momoshop.com.tw/brand` | 2026-06-03 (HTML + inline CSS) |
| about | product-surface | `https://www.momoshop.com.tw/about` | 2026-06-03 (HTML + inline CSS) |
| theme-main | css-custom-properties | `https://image.momoshop.com.tw/ecm/font/theme-main.css` | 2026-06-03 |
| search-tailwind | css-bundle | `https://www.momoshop.com.tw/search/_next/static/css/93e50030b97ac6a5.css` | 2026-06-03 |
| search-component | css-bundle | `https://www.momoshop.com.tw/search/_next/static/css/a40c6c07c5abf802.css` | 2026-06-03 |

Catalog homepage identity `https://www.momoshop.com.tw` is dual: Identity above and Scope in `DESIGN.md`.

### Tier 1 (as listed in the source footer)

- https://www.momoshop.com.tw/brand (HTML + inline CSS)
- https://www.momoshop.com.tw/about (HTML + inline CSS)
- https://image.momoshop.com.tw/ecm/font/theme-main.css (CSS custom properties)
- https://www.momoshop.com.tw/search/_next/static/css/93e50030b97ac6a5.css (Tailwind utility bundle)
- https://www.momoshop.com.tw/search/_next/static/css/a40c6c07c5abf802.css (component CSS)

### Tier 2

- getdesign.md/momoshop — NOT LISTED ("No designs found for 'momoshop'")
- refero ?q=momo — no result (TW brand, not indexed)

Tier 2 data was not used to establish any token or component value. The NOT LISTED lookup is named in `DESIGN.md` Named gaps as the source wrote it.

## Token note

The YAML `tokens.source` value is `prose-derived`. `components_harvested` is `true`. Ten component records sit in the token set: `header-bar`, `cart-badge`, `input`, `chip`, `button-primary`, `button-destructive`, `button-secondary`, `trend-card`, `rank-badge`, `tooltip`. Source §4 also writes Trend Item (Top 3 highlight) and Trend Item (Standard); those two are not YAML component keys.

## Sibling handling

`find web/references/momoshop -type f` returns `DESIGN.md` and the dotfile `web/references/momoshop/.verification.md`. The sibling is a Tier 1 live-inspect note dated 2026-06-03. Sibling-only strings were not adopted into the portable body as facts or as structural classifications: CSS bundle `78f6a3915de2905b.css`, `theme-color` meta, `--primary-pink` / `--momo-color` / `--momo-red`, `Myriad Pro`, `-apple-system` / `BlinkMacSystemFont` / `Noto Sans TC` on `:host,html`, the sibling HQ-city string, and the raw sample sizes. Shared strings that also appear in the source `DESIGN.md` (operator name, getdesign.md NOT LISTED, refero no-result) stay on the source evidence class.

## Byte-form notes

- YAML color keys are lowercase (`#d62872`). Source §2 roles use uppercase (`#D62872`). The portable body keeps both writings on the named roles.
- `#ffffff` / `#FFFFFF` is on-primary text on pink fills, white card surface fill (source §5 / Level 1), Search Input and Secondary Rules Button fills, and control text on header / cart / CTA / destructive / rank / tooltip. Those roles stay unmerged.
- `#f2f2f2` / `#F2F2F2` is page canvas (`tokens.colors.canvas`) and Search Chip Background on the chip. Those roles stay unmerged.
- `tokens.colors.primary` `#d62872` is not `tokens.colors.brand` `#e5047e`.
- `#454545` and `#999999` are source §2 roles with no YAML color key. They stay on those prose roles.
- `#FF9203` is the rank-gradient end. It is not `tokens.colors.accent-rank` (`#ffaa3b` only).
- `#DD2726` is the source §14 confirm-delete writing. It is not `tokens.colors.error` `#dd2222` and not `tokens.colors.error-delete` `#ea3323`.
- Footer `#EEEEEE` / `#484848` are source §5 roles with no YAML color key.
- YAML line heights stay unitless ratios (`1.41`, `1.33`, `1.38`). Source §3 px spellings (`24px` / `20px` / `18px`) stay beside them (A1a).
- `tokens.spacing` is the unitless array `[3, 5, 6, 8, 10, 12, 16, 20, 24]` with no named steps. Those numbers are not component paddings, not type sizes, and not `tokens.rounded` steps that share a numeral.
- `tokens.rounded.full: 9999` is a YAML step. No harvested control writes `9999` as its radius.
- YAML `type` is attached only to the ten records that have that key. Trend Item (Top 3 highlight) and Trend Item (Standard) keep `Primitive type: not in the token set`.
- `tokens.typography.family.mono` is `"Oxygen"`. The source use is price numerals exclusively.

## Omission ledger

Mention (disposition) is not use (re-hosting). This table names what was dropped and where the drop is recorded. It does not re-list fictional demographics, and it does not assert portable-body absence in the same sentence that reprints a dropped string as if it were a surviving token.

| Item | Disposition |
|---|---|
| Source §13 Personas — four illustrative archetypes | Whole section dropped. The source labels the entries as illustrative, not individual people. Fictional personas are neither promoted to verified tasks nor re-hosted here. No name, age, city, motivation, or affiliation classification is restated as an item (D2, D2a). Audience in the portable body keeps only the group-level wording the source records independently of that section: each shopper; an endlessly expanding catalogue that surfaces exactly what each shopper needs. |
| Source §9 Agent Prompt Guide | Deleted as tool-facing prompt. Unique brand constraints landed in Experience Application rules and on the matching components before deletion (A2, A3). See §9 deletion check below. |
| Unsourced cubic-bezier curves | None in the source. Source §15 states no custom cubic-bezier is defined in inspected source. Nothing to delete at the curve-value boundary. Recorded durations, the `browsing-history` transition, the search-overlay instant swap, default-browser easing, overlay linear/ease, and the motion rules stay in Foundations Motion. |
| YAML `ds.type` | Absent in the source. Nothing to keep (A1c N/A). |

## Claim ledger

| Claim | Surface |
|---|---|
| `tokens.colors.primary` `#d62872` | brand / about / search CSS; catalog `primary_color` `#D62872` |
| `tokens.colors.primary-hover` `#d9006c` | primary-button hover; selected tab underlines |
| `tokens.colors.brand` `#e5047e` | cart notification badge |
| `tokens.colors.canvas` `#f2f2f2` | page canvas and footer zone |
| `tokens.colors.surface` `#fafafa` | product card and panel backgrounds |
| `tokens.colors.foreground` `#404040` | body text, product titles |
| `tokens.colors.muted` `#727272` | captions, metadata |
| `tokens.colors.on-primary` `#ffffff` | text on primary pink fills |
| `tokens.colors.accent-link` `#027bff` | hyperlinks, filter chips, restriction-text |
| `tokens.colors.error` `#dd2222` | discount labels, urgent sale badges, delete-confirm actions |
| `tokens.colors.error-delete` `#ea3323` | delete-all browse-history button |
| `tokens.colors.accent-rank` `#ffaa3b` | rank-badge gradient start |
| `tokens.colors.hairline` `#ededed` | dividers, card borders |
| `tokens.colors.border-medium` `#b3b3b3` | input outlines, rules buttons |
| `tokens.typography.family.sans` Microsoft JhengHei UI | `--primary-font-family` in theme-main.css |
| `tokens.typography.family.mono` Oxygen | `--price-font-family`; price numerals exclusively |
| `tokens.typography.heading` / `body` / `caption` / `badge` / `micro` | YAML roles; §3 px spellings beside them |
| `tokens.spacing` `[3, 5, 6, 8, 10, 12, 16, 20, 24]` | prose-derived array |
| `tokens.rounded.sm` / `md` / `lg` / `full` | prose-derived |
| `tokens.shadow.card` / `panel` / `modal` | prose-derived; Levels 1–3 |
| `tokens.components.header-bar` through `tooltip` (type and recorded fields) | YAML harvest; §4 complete writings beside them |
| Published strings 讓你找到更多更多 / 限時下殺 / 立刻搶購 / 你找到更多更多 / 24H快速到貨 / 十天猶豫期 / 找不到？試試其他關鍵字 / 補貨通知 | source §10 / §11 / §14 |
| Illustrative, not verified verbatim: 數十萬件商品… / 今日限時下殺！錯過等一年，快搶！ / 新會員首購禮金… | source §10 |
| Fubon Media Technology Co., Ltd. / 富邦媒體科技股份有限公司 / Fubon Financial Holdings / Taiwan Mobile (台灣大哥大) / Apple App ID 861796017 / 730,000 App Store reviews averaging 4.9 stars / flagship stores Apple, Dyson, MUJI, Estée Lauder / closing value-in-motion sentence | source §11 narrative |

## Capture selectors

The source records no collector selectors. Component geometry is prose-derived from the inspected HTML/CSS, not a computed-style capture with `data-omd-capture` pointers.

## Proof notes

- Five named Tier 1 sources, recorded 2026-06-03. YAML `tokens.source` is `prose-derived`; `tokens.extracted` is 2026-06-09.
- `components_harvested: true`; ten component records in the source token set.
- The source records no `focus-visible` string. Uncaptured `focus-visible` treatments are omitted as values; they are not turned into `not-applicable` for that reason. Applicability follows control role. State coverage is not claimed complete.
- momo購物網 has no published first-party UI specification in the source (getdesign.md/momoshop — NOT LISTED). Derived-editorial qualifications therefore close with the toss-form example: not momoshop-authored or a separately published UI specification (rulebook v12 B2a 전제 주석). The catalog-id token is the mechanical complete-form close; the published name stays in H1 and narrative.
- Source §11 founding-and-operations narrative, including the closing sentence — "The brand's visual identity — that unmistakable magenta-pink — functions as a permanent signal of value in motion, readable at a glance across television, mobile, and web surfaces." — stays in Experience Scope as narrative context, not as interface tokens.

## §9 deletion check

§9 Agent Prompt Guide was deleted as tool-facing restatement. Each unique brand constraint it names was checked against the portable body before deletion (A2, A3):

| §9 item | Portable landing |
|---|---|
| Global background `#F2F2F2`; `#FFFFFF` card surfaces with `box-shadow: 0 1px 3px rgba(0,0,0,.1)` | Foundations Elevation Level 2 + Layout |
| Primary `#D62872`; hover/pressed `#D9006C`; never tint or desaturate it | Foundations Semantic color + Experience Application rules (unique never-tint) + Primary CTA hover |
| Font stack Microsoft JhengHei UI / PingFang TC; price numerals Oxygen / Century Gothic in bold | Typography Family + weight scale 700 for price labels |
| Header 44px, `#D62872` fill, white text/icons | Components Primary Header Bar |
| CTA `height 38–44px`, `border-radius 4–8px`, `#D62872` / `#FFFFFF` / 700 | Components Primary CTA (harvested 38px / 4px beside the §9 range) |
| Search chips height 32px, radius 16px, `#F2F2F2` / `#404040` | Components Search Chip Tag |
| Rank badges top 1-3: `#FFAA3B → #FF9203`, white text, radius 4px, `25×25px` | Components Rank Number |
| Price/discount labels `#DD2222`, bold, Oxygen/Century Gothic numerals | Foundations Sale Red + Typography weight scale |
| Error/delete `#EA3323` | Foundations Alert Red + Destructive Button |
| Dividers 1px solid `#EDEDED`; placeholder `#999999` | Foundations hairline + Text Secondary |

## Derived editorial inventory

Portable `DESIGN.md` carries 33 complete B2a qualifications. This table is 33 data rows. Preamble sentences on this page are not portable qualifications.

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience Scope `:9` | Five inspected URLs as this contract's token sources; catalog homepage identity on `https://www.momoshop.com.tw`; YAML token set kept `prose-derived`; every value attached to the surface or evidence class that established it |
| Experience Scope `:11` | Atmosphere characterizations (warm confident energy; "deal in progress"; dense but purposeful; urgency and abundance; cool-neutral so hot pink and photography pop; price numerals as true focal stars; depth that keeps the eye moving) |
| Experience Scope `:13` | Founding-and-operations narrative, including the closing value-in-motion sentence, classified as context that does not by itself supply interface tokens |
| Primary tasks `:19` | Selecting the three surface-or-control outcomes as primary tasks; refusing the persona section |
| Audience `:28` | Dropping the four illustrative archetype biographies; carrying no name, age, city, motivation, or affiliation classification; reading source-named shopper wording as audience |
| Distinctive traits `:32` | Classifying the list as a restatement of recorded values; groupings and readings inside the list |
| Principles `:44` | Five numbered items and every UI implication |
| Application rules `:54` | Seven Do rules plus the §9 never-tint prohibition, and the reasons attached to them |
| Avoid `:67` | Six Don't prohibitions and the reasons inside them |
| Semantic color `:82` | Role-to-path pairing; YAML lowercase beside §2 uppercase; `#454545` / `#999999` / `#FF9203` / `#DD2726` / footer `#EEEEEE` kept off invented YAML keys; `primary` unmerged from `brand`; canvas unmerged from footer and from white card; Search Chip Background kept on the chip as well as on canvas; on-primary text unmerged from white card fill; white card unmerged from `surface` |
| Spacing `:109` | Keeping each array numeral on its own key path rather than treating a shared numeral as the same token |
| Shape `:122` | Local radii on their components; `full: 9999` on its own key path; §9 `4–8px` range beside harvested `4px` |
| Elevation `:126` | Canvas / card / panel / modal / tooltip / login-scrim reading rather than a universal drop-shadow scale; YAML `card` / `panel` / `modal` on the three levels that name those strings |
| Elevation `:137` | Source §5 `1px subtle shadow` spelling kept beside Level 1 and Level 2 box-shadow strings rather than replacing them |
| Motion `:143` | Recorded durations/transitions/easing as the motion contract for the inspected surfaces; omitting a custom cubic-bezier because the source states none is defined; holding the five-kind per-component promotion gate |
| Motion `:151` | Source §14 implicit hover (no explicit duration) read as not a duration token |
| Font evidence `:159` | Evidence-class sorting; YAML `mono` Oxygen as the price-numeral family rather than as a second UI face; fallback members as fallbacks; system-font substitution refused |
| Family `:174` | Fallback-and-reservation reading; price font not mixed into body copy |
| Type roles `:178` | YAML unitless line heights kept as ratios; YAML singles beside §3 px spellings; `:root` 1.5 beside those ratios; type sizes kept off the spacing array |
| Type roles `:195` | Header / CTA / Destructive / Tooltip fonts as those controls' fonts rather than as the Heading / Body / Caption rows rewritten |
| Assets `:199` | Google s2 favicon as catalog identity pointer rather than a hosted brand file |
| Assets `:200` | Refusing to replace product photography with invented brand-color decoration |
| Capture record `:218` | Role-based applicability procedure; interactive-kind and applicability verdicts and the reason for either; YAML `type` only on the ten records that have that key; geometry of each control as that control's geometry rather than a spacing or rounded step; not a complete state-coverage claim |
| Search Input (Desktop) `:259` | `8px 8px 8px 10px` / `36px` / `4px` / `15px` as this field's geometry rather than `tokens.spacing` `8` / `10` |
| Search Chip Tag `:283` | `16px` radius / `6px 8px` padding as this chip's geometry rather than `tokens.spacing` `6` / `8` / `16` |
| Primary CTA `:308` | §9 `38–44px` / `4–8px` range kept beside harvested `38px` / `4px`; those figures as this control's geometry rather than `tokens.spacing` `16` |
| Destructive Button `:333` | Confirm-delete `#DD2726` as this dialog's confirm rather than as this button's default fill |
| Secondary Rules Button `:357` | `13px` radius and `3px 5px 3px 8px` padding as this control's local geometry rather than a YAML rounded step or `tokens.spacing` `3` / `5` / `8` |
| Search Trend Card `:378` | `15px` radius as this card's local geometry rather than a YAML rounded step |
| Layout & Platforms `:431` | Source layout list as the layout contract for the inspected public surfaces; each measurement on the role that established it; 440px search bar not treated as a page canvas size |
| Content & Locales `:454` | Direct, warm, deal-forward register as this contract's voice rather than as a separately published microcopy guide |
| Content & Locales `:470` | Three voice samples classified as illustrative rather than verified live copy; Do/Don't table strings kept byte-exact |
| Named gaps `:506` | List as unnamed values rather than as coverage of domains the source never named |
