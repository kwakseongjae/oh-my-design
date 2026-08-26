# Farfetch provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness and proof for the T2 migration of `web/references/farfetch/DESIGN.md`. The canonical source remains `web/references/farfetch/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | farfetch |
| name | Farfetch |
| country | UK |
| category | ecommerce |
| homepage | https://www.farfetch.com |
| primary_color | `#222222` |
| logo | favicon `https://www.google.com/s2/favicons?domain=farfetch.com&sz=128` (type: favicon) |
| omd format (source) | 0.1 |
| tokens.source | reconciled |
| tokens.extracted | 2026-06-22 |
| components_harvested | true |

The `logo` value is a third-party favicon service URL, not a Farfetch-distributed asset. It is recorded here as the catalog identity image and is also carried in the portable Assets subsection with the same qualification.

Token note from source, verbatim:

> primary = #222222 Carbon — jet black used for CTA button, nav, body, footer inversion. Paper white (#ffffff) is the page canvas. Zero radius across all interactive elements — strict editorial minimalism.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-22 |
| live inspect | 2026-06-22 |
| cross-check | 2026-06-22 |
| tokens.extracted | 2026-06-22 |

Conflicts unresolved (as recorded by the source): none.

## Sources

### Tier 1 — live inspect

`https://www.farfetch.com/uk/` (2026-06-22), playwright `getComputedStyle`; scope recorded as nav, hero, newsletter CTA, footer and color frequency scan.

| Observation | Value |
|---|---|
| `body` | font-family `"Farfetch Basis", "Helvetica Neue", Arial, sans-serif`; color `rgb(34,34,34)` = `#222222`; font-size 15px; bg `rgb(255,255,255)` |
| H2 "SS26 sale: up to 60% off womenswear, menswear and kidswear" | 22px / weight 700 / `rgb(34,34,34)` |
| H2 "Womenswear" | 22px / weight 700 / `rgb(34,34,34)` |
| H3 "Never miss a thing" | 30px / weight 700 / `rgb(34,34,34)` |
| Nav links "Womenswear/Menswear/Kidswear" | 15px / 400 / `rgb(34,34,34)` / padding 10px 12px / height 44px |
| Sign Up CTA button | bg `rgb(34,34,34)` = `#222222` / color `rgb(255,255,255)` / radius 0px / padding 10px 16px / 15px / 700 / height 44px |
| Email input | bg `rgb(255,255,255)` / radius 0px / padding 0px 0px 0px 16px / 15px / 400 / height 42px |
| Search icon | color `rgb(182,182,182)` = `#b6b6b6` |
| Shadow | `box-shadow: none` across all elements (confirmed shadow-free system) |
| Frequency scan | bgFreq `rgb(255,255,255)` dominant; fgFreq `rgb(34,34,34)` dominant (2200+ instances) / `rgb(34,34,34)` secondary 22 / `rgb(182,182,182)` icons |
| `document.title` | "FARFETCH UK \| The Global Destination for Modern Luxury" |

The fgFreq line is reproduced as written; the source lists `rgb(34,34,34)` twice, as both dominant and secondary.

### Tier 2 — cross-check

`styles.refero.design/style/600002c5-c5f5-4df0-adf6-6324ee6255c0` (FARFETCH España, 2026-06-22):

- Carbon `#222222` / Paper `#ffffff` / Graphite `#727272` / Ash Gray `#b6b6b6` / Smoke `#e6e6e6` / Stone `#f5f5f5` — all confirmed
- Border-radius 0px across all elements — confirmed
- "Farfetch Basis" typeface — confirmed
- Footer inversion: `#222222` background with white text — confirmed

`getdesign.md/farfetch` — not listed.

### Narrative (public record, not interface tokens)

Founded 2007 by José Neves; NYSE IPO 2018; peak market cap around $23B in 2021; restructuring 2023–2024; Coupang investment and operational control announced January 2024. The source records these as widely documented public facts and notes that the 2024 Coupang acquisition detail is publicly reported in major financial press. No first-party design-organisation publication is claimed for them.

### Evidence-class boundary recorded by the source

Interpretive claims such as "luxury is restraint" and the "white-cube gallery aesthetic" are editorial readings of the observed design decisions, not directly sourced Farfetch statements. That boundary is stated in the source and is carried into the portable body as adjacent qualification on each interpretive passage.

The body applies that qualification more widely than the source's own note, so the scope recorded here is the body's, not the source note's. Twenty passages carry it, and they cover two kinds of content: the editorial readings the source itself flags, and material the source presents as system fact that the 2026-06-22 inspect does not measure — the eleven named state treatments, the four duration tokens and three easing roles together with the motion rules and the `prefers-reduced-motion` contract, the four-row breakpoint table with the collapsing sequence and cross-breakpoint image behavior, the palette role names (Carbon, Paper, Graphite, Ash Gray, Smoke, Stone) and the monochrome-ladder framing, the eight Do application rules, the eight Don't prohibitions, the five Principles, the type rules' rationales, and the cross-storefront generalisation from the España record. The recorded values inside those passages are not qualified; only the reasoning attached to them is.

## Claim ledger

| Claim | Evidence |
|---|---|
| tokens.colors.primary `#222222` | Tier 1 body/CTA computed color; Tier 2 confirmed |
| tokens.colors.canvas `#ffffff` | Tier 1 body bg; Tier 2 confirmed |
| tokens.colors.graphite `#727272` | Tier 2 confirmed |
| tokens.colors.muted `#b6b6b6` | Tier 1 search icon; Tier 2 confirmed |
| tokens.colors.hairline `#e6e6e6` | Tier 2 confirmed |
| tokens.colors.surface `#f5f5f5` | Tier 2 confirmed (named Stone there, Surface in the palette roles) |
| tokens.colors.on-primary `#ffffff` | Tier 1 CTA color |
| tokens.colors.error `#cc0000` | Declared as a standard ecommerce convention, recorded by the source as not present on the homepage |
| tokens.typography.family.sans `"Farfetch Basis"` | Tier 1 computed body font-family; Tier 2 confirmed |
| tokens.typography.family.fallback `"Helvetica Neue", Arial, sans-serif` | Tier 1 computed body font-family |
| tokens.typography.display-hero 30 / 700 / 1.20 / -0.3 | Tier 1 H3 "Never miss a thing" |
| tokens.typography.section 22 / 700 / 1.31 | Tier 1 H2 "Womenswear" and the SS26 sale headline |
| tokens.typography.nav-primary 15 / 400 / 1.33 | Tier 1 nav links and body |
| tokens.typography.caption 13 / 400 / 1.33 | Declared role; no separate Tier 1 line |
| tokens.typography.button 15 / 700 / 1.33 | Tier 1 Sign Up CTA button |
| tokens.spacing xs 4 / sm 8 / md 16 / base 24 / lg 48 / xl 72 / section 96 | Declared scale; nav padding 10px 12px is the Tier 1 measurement |
| tokens.rounded sm/md/lg/full = 0 | Tier 1 CTA and input radius 0px; Tier 2 confirmed across all elements |
| tokens.shadow.none `none` | Tier 1 `box-shadow: none` across all elements |
| tokens.components.button-primary.* | Tier 1 Sign Up CTA button |
| tokens.components.input-email.* | Tier 1 email input (height 42px from this line) |
| tokens.components.nav-tab.* | Tier 1 nav links |
| tokens.components.footer-link.* | Tier 1 footer inspect; height 34px and 6px vertical padding from the responsive touch-target list |
| tokens.components.button-outline.* / product-card.* / badge-sale.* | Declared component styles; no separate Tier 1 line |
| Voice samples (4) | Marked verified live 2026-06-22 in the source |

## Omission ledger

| Item | Disposition |
|---|---|
| `ease-enter` = `cubic-bezier(0.2, 0.6, 0.25, 1)` | Curve value removed. No source line supports it; the live inspect covers computed static styles only. The token name and its use survive in the portable Motion subsection, and the exact value is named as a gap. |
| `ease-exit` = `cubic-bezier(0.4, 0.0, 1, 1)` | Same disposition. This exact value is the one the approved easing verdict identifies as a re-injected default rather than a brand observation. |
| `ease-standard` = `cubic-bezier(0.25, 0.1, 0.25, 1)` | Same disposition. |
| §13 personas — four named archetypes | Deleted. The source labels them fictional archetypes twice (visible section note and source comment). Not promoted to tasks or audience and not re-hosted here: no names, ages, cities, occupations or segment demographics are recorded in this file. |
| §9 tool prompts, example component prompts and iteration guide | Deleted as tool-specific packaging. Every unique value inside them moved to a semantic slot first: 64px header bar → Layout; product-tile brand name 13px / 700 → Product Tile anatomy; footer column grouping and the labels "Careers", "FARFETCH app", "Company", "Customer Service", "Help" → Layout and Content; "Hover: slight opacity reduction" → carried alongside the §4 hover wording on the Primary CTA Button. |
| Duration tokens 0ms / 120ms / 200ms / 300ms | **Not** omitted. The approved easing verdict limits deletion to unsourced curves; durations differ per brand and are preserved with their names, values, uses and an evidence-class qualification. |

## Internal tension recorded, not resolved

The source assigns `#f5f5f5` to navigation hover in the palette roles ("Subtle hover wash on nav items") while the do/don't rules forbid a hover background color fill on nav items and allow underline or opacity only. Both statements are preserved verbatim in the portable body and neither is promoted over the other. The source's own footer records "Conflicts unresolved: none", so this tension is not one the source itself flagged.

The primary button hover is described twice: "subtle brightness reduction on Carbon bg" in the component styling and "slight opacity reduction" in a construction example. Both wordings are carried on the component; neither is dropped.

## Proof notes

- `components_harvested: true`; seven component entries in the source token block, ten component blocks in the visible component section.
- Interaction expansions: none recorded. Only default component observations are measured; the eleven named states are the source's reconstruction, and the portable body carries that evidence-class qualification adjacent to them.
- Uncaptured hover / focus-visible / disabled / loading / error / success treatments are omitted, not marked `not-applicable`. Applicability follows control meaning. State coverage is not claimed complete.
- No `focus-visible` treatment value is asserted anywhere; the source never records a `focus-visible` observation, only a "focus ring appearance" duration use.
- Brand narrative and public-record corporate history are context, not token sources.
