# Fubon provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/fubon/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | fubon |
| name | Fubon |
| country | TW |
| category | fintech |
| homepage | `https://www.fubon.com/banking/` |
| primary_color | `#0093c1` |
| logo | `type: favicon`, `slug: https://www.fubon.com/banking/common_content/images/favicon.ico` |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-22 |
| components_harvested | true |

The favicon URL is dual-destination: it is identity metadata here and a portable asset in `DESIGN.md` §3.

**Token note (verbatim from the source frontmatter):** "primary = live CTA + interactive blue (#0093c1 / rgb(0,147,193)); group site uses #008fc7 / rgb(0,143,199); deep navy ink (#0c0e1f) for primary text; secondary text (#494a57). Fubon blue is the anchor across bank + holding group."

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-22 |
| tokens.extracted | 2026-06-22 |
| surfaces live-inspected | 2026-06-22 |
| voice samples verified verbatim | 2026-06-22 |

Conflicts unresolved: none. The source records the bank/group blue difference (`#0093c1` vs `#008fc7`) as two brand blues on two surfaces, with the bank CTA value taken as `primary_color`.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| bank | product-surface (personal banking homepage) | `https://www.fubon.com/banking/` | 2026-06-22 |
| group | corporate-surface (financial holding homepage) | `https://www.fubon.com/` | 2026-06-22 |

### Tier 1 (brand-owned)

- `https://www.fubon.com/banking/` — Taipei Fubon Bank official personal banking homepage. All bank-surface token claims are sourced here.
- `https://www.fubon.com/` — Fubon Financial Holding Group official site. Group-level palette and CTA patterns are sourced here.

TW regional requirement (≥2 brand-owned regional sources) is met by the two above. Western Tier-2 catalogs are not counted toward the TW regional minimum.

### Tier 2 (no usable record)

- `getdesign.md/fubon` — not found.
- `styles.refero.design/?q=fubon` — not found.

## Method

Playwright `getComputedStyle` on headless Chromium, `domcontentloaded`, 3.5s settle, with a modal-dismissal pass, over the two brand-owned surfaces. Recorded in the source's philosophy-layer comment and in the sibling verification file `web/references/fubon/.verification.md`.

## Raw computed observations — source comment (`web/references/fubon/DESIGN.md`, philosophy-layer block)

- body: `font-family Roboto, "Noto Sans TC"`; `color rgb(12,14,31)` `#0c0e1f`; `font-size 25px`
- H1 `個人金融`: `rgb(12,14,31)` / 25px / weight 400 / Roboto / Noto Sans TC
- H2 `.title-primary` `熱門服務`: `rgb(12,14,31)` / 20px / weight 700
- H2 `.title-primary` `外幣匯率`: `rgb(12,14,31)` / 24px / weight 700
- Primary button (`.blue-btn` `確認`): bg `rgb(0,147,193)` `#0093c1` / color white / `radius 0px 0px 12px` / 16px / 700
- Cancel button (`.gray-btn` `取消`): bg `rgb(238,240,240)` `#eef0f0` / color `rgb(12,14,31)` / `radius 0px 0px 0px 12px` / 16px / 700
- Cookie CTA (`.main-btn` `同意`): bg `rgb(0,147,193)` `#0093c1` / color white / `radius 12px` / 16px / 500
- More link (`.art-more-btn` `了解更多`): color `rgb(0,147,193)` / 18px / weight 500
- More link (`.ann-more-btn`): color `rgb(0,147,193)` / 18px / weight 500
- Nav link (`.nav-link-p` `信用卡`): color `rgb(12,14,31)` / 18px / weight 400
- header bg `rgb(255,255,255)` / height 112px
- digital FAB: bg `rgb(255,255,255)` / `radius 50%` / `box-shadow rgba(0,0,0,0.11) 5px 5px 30px 0px`
- Group site primary: bg `rgb(0,143,199)` `#008fc7` (`了解更多` large CTA, member header)
- Group secondary subsidiary buttons: `rgb(60,190,231)` `#3cbee7` (sky), `rgb(83,187,159)` `#53bb9f` (teal)
- bgFreq (bank): `rgb(255,255,255)`×28, `rgb(245,245,245)`×24, `rgb(0,147,193)`×11, `rgb(238,240,240)`×7
- fgFreq (bank): `rgb(12,14,31)`×912, `rgb(73,74,87)`×481, `rgb(0,0,0)`×113, `rgb(0,147,193)`×111

The source comment also states: brand narrative (1961 founding, Tsai family, 2005 merger of Taipei Bank and Fubon Bank) are widely documented public facts; voice samples were verified verbatim from live pages on 2026-06-22; personas are illustrative archetypes whose names do not refer to real people.

## Sibling verification file (`web/references/fubon/.verification.md`)

The sibling is a separate canonical file, not the migration input. Its values are recorded here and are deliberately not promoted into the portable body; neither are its structural classifications. Values it carries that the migrated `DESIGN.md` source does not:

- bank bgFreq extras: `rgb(174,175,180)`×7 (`#aeafb4`), `rgb(238,240,239)`×6 (`#eef0ef`), `rgb(21,107,155)`×2 (`#156b9b`), `rgb(243,251,254)`×2 (`#f3fbfe`)
- bank fgFreq extra: `rgb(255,255,255)`×95
- group bgFreq: `rgb(114,114,114)`×136, `rgb(0,143,199)`×22, `rgb(255,255,255)`×20, `rgb(60,190,231)`×5, `rgb(83,187,159)`×4, `rgb(0,158,156)`×2
- group fgFreq: `rgb(0,0,0)`×1026, `rgb(255,255,255)`×356, `rgb(42,42,42)`×245, `rgb(0,143,199)`×21
- `https://www.fubon.com/banking/` · body · full stack `font-family: Roboto, "Noto Sans TC", sans-serif, Arial, Helvetica, 微軟正黑體`; `background-color: rgb(255, 255, 255)`
- `https://www.fubon.com/banking/` · H2 `.title-primary` `全方位守護` · `rgb(12, 14, 31)` / 24px / 700
- `https://www.fubon.com/banking/` · `.main-btn.mCookieBtn` `同意` · `border: 1px solid rgb(0, 147, 193)`
- `https://www.fubon.com/banking/` · `.gray-btn` `取消` · `border: 1px solid rgb(238, 240, 240)`
- `https://www.fubon.com/banking/` · `.art-more-btn` `了解更多` · `background: rgba(0,0,0,0)`
- `https://www.fubon.com/` · `.m-btn.--blue.--lg` `了解更多` · `background-color: rgb(0, 143, 199)`; `height: 60px`; `border-radius: 0px`; 16px / 400
- `https://www.fubon.com/` · `.m-header-nav-members-btn` `金控成員` · `background-color: rgb(0, 143, 199)`; `color: rgb(0,0,0)`; `border-radius: 0px 0px 16px 16px`; 16px
- `https://www.fubon.com/` · `.m-btn.--sm` `台北富邦銀行官網` · `background-color: rgb(60, 190, 231)`; `color: rgb(0,0,0)`; `height: 34px`; `border-radius: 0px`
- `https://www.fubon.com/` · `.m-btn.--sm` `富邦人壽官網` · `background-color: rgb(83, 187, 159)`; `color: rgb(0,0,0)`; `height: 34px`

Sibling conflict matrix, recorded as-is:

| Field | Tier 1 bank (live) | Tier 1 group (live) | Resolution recorded in the sibling |
|---|---|---|---|
| Primary blue | `rgb(0,147,193)` `#0093c1` | `rgb(0,143,199)` `#008fc7` | Bank surface is the primary product; bank blue used as `primary_color`; group variant documented as `primary-group`. |
| Primary text | `rgb(12,14,31)` `#0c0e1f` | `rgb(42,42,42)` `#2a2a2a` | Bank value used; group uses a warmer dark-grey. |
| Nav font | 18px / 400 | 16px / 400 | Different surfaces — bank nav 18px, group dropdown 16px. Both documented. |
| Button radius | 12px (popup confirm) | 0px (large CTA) | Context-dependent; both documented as separate variants. |

Sibling logo decision, recorded as-is: Google s2 favicon (`domain=fubon.com&sz=128`) returned 726 bytes, matching the generic globe size, and was rejected. The direct bank favicon ICO at `https://www.fubon.com/banking/common_content/images/favicon.ico` is 16,958 bytes, verified as an MS Windows ICO resource 64×64 32bpp, and was accepted. The SimpleIcons `fubon` slug returned HTTP 404.

## Byte-form notes

- The source frontmatter spells the sky accent `"#3cbeE7"`; the visible section spells it `#3cbee7`. The portable document uses the visible-section spelling; both byte forms are recorded here.
- The source frontmatter records radius steps unitless (`sm: 4`, `md: 12`, `lg: 16`, `full: 9999`) and spacing steps unitless (`xs: 4` … `xxl: 48`). The portable document keeps both the unitless steps and the px-suffixed forms the visible sections use.
- The source frontmatter records line heights as unitless ratios (`1.4`, `1.33`, `1.5`, `1.25`). They are carried as ratios, not converted to px.

## Omission ledger

| Omitted | Boundary | Reason |
|---|---|---|
| `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)` | curve value only; token name, role, and durations kept | No observation behind the value. The method captured computed style on two static pages and recorded no transition, animation, or easing sample. |
| `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` | curve value only | Same, and byte-identical to the example table in `spec/omd-v0.1.md`, the documented re-injection path for this value. |
| `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)` | curve value only | Same: no observation behind the value. |
| §13 Personas — four entries | whole section | The source labels them illustrative archetypes that are not real individuals. Fictional personas are neither promoted to verified tasks nor re-hosted in a sidecar, so the names, ages, cities, occupations, and inferred segments are dropped and are deliberately not restated here. |
| §9 Agent Prompt Guide — Quick Color Reference, Example Component Prompts, Iteration Guide | whole section | Tool-facing copy-paste prompts and restatements. Every hex, radius, size, weight, family, and height it names is already carried in Foundations, Typography & Assets, or Components & States. |

The §9 Quick Color Reference and Iteration Guide contributed no value that is absent elsewhere: `#0093c1`, `#008fc7`, `#00a59b`, `#3cbee7`, `#ffffff`, `#f5f5f5`, `#f3fbfe`, `#0c0e1f`, `#494a57`, `#7d7f87`, `#d7d6db`, `#eef0f0`, 112px, 12px, 0px, 24px, 16px, 18px are all carried in the portable body from §1–§8 and the token set.

## Claim ledger

| Claim | Surface |
|---|---|
| `tokens.colors.primary` / `primary-hover` / `teal-accent` / `canvas` / `surface` / `surface-subtle` / `ink` / `body` / `muted` / `hairline` / `on-primary` / `error` / `success` | bank |
| `tokens.colors.primary-group` / `sky-light` | group |
| `tokens.typography.family.*` / `h1` / `h2-title` / `h2-small` / `body` / `nav` / `cta-link` / `label` / `button` | bank |
| `tokens.spacing.*` / `tokens.rounded.*` | bank |
| `tokens.shadow.card` / `tokens.shadow.soft` | bank |
| `tokens.components.button-primary` / `button-secondary` / `nav-link` / `card-white` / `card-surface` / `card-sky` / `badge-blue` / `badge-teal` / `input-default` | bank |
| `tokens.components.button-cta-lg` | group |
| Voice samples `正向力量 成就可能` / `全方位守護` / `北富銀理財學院` | bank and group homepages, verified verbatim 2026-06-22 |

## Proof notes

- Two brand-owned Tier 1 surfaces, live-inspected on the same date; TW regional minimum met.
- `components_harvested: true`; ten component records in the source token set.
- No interaction expansion, pseudo-state capture, hover/focus computed sample, or motion sample is present in the evidence. Uncaptured hover, focus-visible, disabled, loading, error, and success treatments are omitted as values; they are not turned into `not-applicable`. Applicability follows control role. State coverage is not claimed complete.
- Public-history material (1961 founding, Tsai family, 2005 merger, 2024–2026 digital push, 150+ branches) is narrative context, not a token source.
