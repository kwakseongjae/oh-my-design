# Databricks provenance

Not part of the portable `DESIGN.md`. Source ledger, conflicts, unpromoted legacy claims, and disposition evidence for the T2-1 Wave 18 migration candidate. Canonical source remains `web/references/databricks/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | databricks |
| name | Databricks |
| country | US |
| category | developer-tools |
| homepage | https://www.databricks.com |
| primary_color | `#FF3621` |
| logo | Simple Icons slug `databricks` |
| verified | 2026-06-22 |
| omd format (source) | 0.1 |
| tokens.source | reconciled |
| tokens.extracted | 2026-06-22 |
| components_harvested | true |

Token note: primary is brand Lava 600 (`#FF3621`) used for primary CTAs; Navy 900 (`#0B2026`) is the deep dark background; Teal (`#1B3139`) is the functional text/interface color. The source says live inspection confirms DM Sans as the sole public brand font.

Source DESIGN SHA-256: `2885c5fefa32e1eac22ddbc8913bd284b4a09db04bd1e515291550cc27a128ef`.

## Sources and proof boundary

Tier 1, inspected 2026-06-22:

- https://www.databricks.com/ — live homepage inspection
- https://www.databricks.com/product/pricing — live pricing-page inspection
- https://www.databricks.com/product/data-intelligence-platform — live product-page inspection
- https://brand.databricks.com/ — official brand portal; confirms Lava 600 `#FF3621`, Navy 900 `#0B2026`, Oat Medium `#EEEDE9`, Oat Light `#F9F7F4`, DM Sans, and DM Mono

Tier 2 returned no usable Databricks record:

- `getdesign.md/databricks` — not found (404)
- `styles.refero.design/?q=databricks` — no listing after search

Canonical sibling proof: `web/references/databricks/.verification.md`, SHA-256 `0fc96038864521a1b2c140304713dbb26144e4df839b80d955918bb8c141e6c6`. The source footer reports no unresolved conflict except the explicitly documented official/live CTA comparison below.

## Token record

### Color

| Source key | Exact value |
|---|---|
| primary | `#FF3621` |
| primary-alt | `#EB1600` |
| navy | `#0B2026` |
| teal | `#1B3139` |
| teal-mid | `#1B5162` |
| link | `#016BC1` |
| body | `#1B3139` |
| muted | `#90A5B1` |
| muted-light | `#EDF2F8` |
| on-primary | `#ffffff` |
| canvas | `#ffffff` |
| surface | `#EEEDE9` |
| surface-light | `#F9F7F4` |
| hairline | `#F4F4F4` |
| success | `#468254` |
| success-light | `#F9FFFA` |

Official/live comparison: the official brand portal value is `#FF3621`; live CTA inspection produced `rgb(235,22,0)` / `#EB1600`. The source says the latter may be a rendered variant and keeps the official value authoritative. Both remain separate; `#EB1600` is not promoted as a particular hover or pressed treatment.

### Typography

| Source key | Exact source record |
|---|---|
| family.sans | `DM Sans` |
| family.mono | `DM Mono` |
| display-hero | 60 / 500 / unitless `1.10`; hero headline |
| display-lg | 56 / 400 / unitless `1.14`; page H1 |
| section | 48 / 500 / unitless `1.17`; feature section headline |
| subsection | 40 / 400 / unitless `1.20`; sub-section heading |
| card-heading | 28 / 400 / unitless `1.29`; card/feature title |
| body-lg | 18 / 400 / unitless `1.44`; feature descriptions |
| body | 16 / 400 / unitless `1.50`; standard interface text |
| button | 16 / 500 / unitless `1.25`; primary-button label |
| nav | 16 / 400 / unitless `1.25`; navigation links |
| caption | 14 / 400 / unitless `1.50`; small labels and utility links |
| code | DM Mono 14 / 400 / unitless `1.60`; code and technical displays |

Source typography statements retained: DM Sans falls back to `sans-serif`; DM Mono falls back to `monospace`; DM Sans 400/500 covers the primary hierarchy; 700 is used only for the active-tab indication; no custom tracking is declared; DM Mono is not used for marketing prose.

### Spacing, shape, and elevation

| Group | Exact source values |
|---|---|
| spacing | xs `4`; sm `8`; md `12`; base `16`; lg `24`; xl `32`; xxl `48`; section `64` |
| rounded | sm `2`; md `4`; lg `20`; full `9999` |
| shadow.card | `0px 2px 8px rgba(27,49,57,0.12)` |
| shadow.elevated | `0px 4px 16px rgba(27,49,57,0.16)` |

The legacy body additionally records 0px CTA corners, 2px minor input/preference corners, 4px badges, 20px tabs, flat level 0, a dark-section level represented by `#0B2026`, and an accessibility focus-ring concept without a universal value.

## Component token record

| id / primitive | Exact source record |
|---|---|
| button-primary / button | bg `#FF3621`; fg `#ffffff`; radius `0px`; padding `8px 24px`; height `40px`; font `16px / 500 DM Sans`; primary trial/explore CTA |
| button-secondary / button | bg `#1B3139`; fg `#ffffff`; radius `0px`; padding `8px 24px`; height `40px`; font `16px / 500 DM Sans`; demo/pricing CTA |
| button-ghost / button | bg `#EEEDE9`; fg `#1B3139`; radius `2px`; padding `12px 10px`; height `40px`; font `16px / 400 DM Sans`; preference action |
| nav-tab-active / tab | fg `#1B3139`; bg `#ffffff`; radius `20px`; padding `12px 16px`; height `40px`; font `16px / 700 DM Sans`; active is white background + 700 weight |
| nav-tab-inactive / tab | bg `rgba(237,242,248,0.1)`; fg `#ffffff`; radius `20px`; padding `12px 16px`; height `40px`; font `16px / 500 DM Sans` |
| card-product / card | bg `#ffffff`; fg `#1B3139`; radius `0px`; Data Engineering / Data Warehousing pricing card |
| badge-success / badge | bg `#F9FFFA`; fg `#468254`; radius `4px`; font `14px / 400 DM Sans`; positive status / availability |
| input-text / input | bg `#ffffff`; fg `#1B3139`; border `1px solid #EEEDE9`; radius `2px`; font `16px DM Sans`; named source focus `1px solid #FF3621` |

The legacy component body also names a Dark Feature Panel (`#0B2026` / `#ffffff`) and Oat Surface Section (`#EEEDE9` / `#1B3139`). They are preserved as non-control surface recipes in the portable document.

## Raw proof samples

Sibling proof method: Playwright `getComputedStyle`, Chromium headless, `domcontentloaded` plus 3500ms settle, modal/cookie dismissal, element sampling, and full-DOM background/text frequency scan across three surfaces on 2026-06-22.

- body: `"DM Sans", sans-serif`; `rgb(27, 49, 57)` / `#1B3139`; 16px; line-height 24px.
- Hero H1: 60px / 500 / `#1B3139`.
- Pricing H1: 56px / 400 / `#1B3139`; height 64px.
- Data Intelligence Platform H1: 56px / 400 / `#1B3139`.
- Product H2: 48px / 500 / white. Pricing H2: 40px / 400 / `#1B3139`. “Pay as you go” H3: 28px / 400 / `#1B3139`.
- “Try Databricks”: `rgb(235, 22, 0)` / approximately `#EB1600`; white; 0px; padding `12px`; height 40px; 16px / 500. Its `12px` raw padding remains distinct from the YAML component's `8px 24px` record.
- “Explore the product” and “Start free trial”: `#EB1600`; white; 0px; padding `8px 24px`; height 40px; 500.
- “See demo”: `#1B3139`; white; 0px; padding `8px 24px`; height 40px; 16px / 500.
- Active “Platform” tab: white / `#1B3139`; 20px; `12px 16px`; height 40px; 700. Inactive “Database”: `rgba(237, 242, 248, 0.1)` / white; same geometry; 500.
- “Manage Preferences”: `#EEEDE9` / `#1B3139`; 2px; `12px 10px`.
- Language-link `#016BC1` confirmed.
- Background frequency: white ×37; `#1B3139` ×15; `#EEEDE9` ×15; `#EB1600` ×10; `#0B2026` ×6; `#F4F4F4` ×6.
- Text frequency: white ×4973; `#1B3139` ×2506; `#90A5B1` ×339; `#EDF2F8` ×206; `#016BC1` ×170.
- Portal confirmation: `#FF3621`, `#0B2026`, `#EEEDE9`, `#F9F7F4`, DM Sans, and DM Mono.

Conflict matrix conclusions: live and portal agree on DM Sans, Navy, and Oat. Live supplies 0px CTA and 20px tab radii. The official `#FF3621` versus live `#EB1600` CTA difference remains explicit rather than merged.

Exact color-function forms additionally retained from source/proof: legacy shorthand `rgba(27,49,57,...)`; `rgb(255,255,255)`; `rgb(238,237,233)`; `rgb(1,107,193)`; `rgb(11,32,38)`; `rgb(244,244,244)`; `rgb(144,165,177)`; `rgb(237,242,248)`; portal `rgb(255,54,33)`.

## Narrative and interpretation ledger

Portable Scope retains the source's 2013 / eight-cofounder / AMPLab / Apache Spark / managed-Spark / Data Intelligence Platform / lakehouse / Delta Lake / MLflow / Unity Catalog / multicloud context. The source also claims that the lakehouse term was coined by Databricks researchers and published academically, that the company was valued above `$62B` in 2025–2026, and that it served thousands of enterprises. Those temporal and historical claims have no separate field-level proof bundle here and remain source narrative rather than interface-token evidence.

The source's causal readings—Lava as combustion/computation, Navy and Oat as stable infrastructure, square corners as engineering precision, and the claim that Databricks refused a black-box-AI pivot—are disclosed in the source comment as editorial interpretation. Portable derivatives carry adjacent B2a wording and do not present those readings as Databricks-authored doctrine.

## Unpromoted responsive ledger

- Centered maximum-width layout: approximately `1200px` content area.
- Mobile `<640px`: single column, compressed hero, scrolling tabs.
- Tablet `640–1024px`: two-column feature grids, moderate padding.
- Desktop `1024–1280px`: full layout and multi-column grids.
- Large desktop `>1280px`: centered content and generous whitespace.
- Claimed collapse: 60px hero to approximately 36px; horizontal navigation to hamburger/collapsed menu; dark sections retain full width; product tabs scroll; pricing cards go from three columns to one.
- Touch declarations: CTA and tabs 40px high; CTA horizontal padding 24px; tab padding 12–16px; navigation link uses a 65px header zone.

The source includes no separate multi-viewport proof ledger, so the breakpoints and collapse behavior remain exact but unpromoted.

## Unpromoted motion ledger

| Token | Exact value | Legacy use |
|---|---|---|
| motion-instant | 0ms | State commits, toggle snaps |
| motion-fast | 100ms | Button hover overlay, focus ring |
| motion-standard | 200ms | Tab transitions, dropdown appears |
| motion-slow | 300ms | Page-level section reveals, panel slides |
| ease-enter | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Panels and dropdowns arriving |
| ease-exit | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| ease-standard | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

Legacy rules preserved exactly in meaning: motion is functional and quiet; the decorative banner has an observed pause button; tab transitions use standard/standard; no spring, overshoot, or bounce; under `prefers-reduced-motion: reduce`, transitions collapse to instant and the banner pauses. The source does not provide component-specific transition-property, animation-name, duration, easing, and reduced-motion proof for these values, so none is promoted.

## Persona disposition

The legacy source explicitly labels all named personas fictional archetypes. Rulebook D2 prohibits copying their names or biographies into either artifact. Only the source-backed user-segment groups remain in portable Experience.

## Proof notes

- The portable color/type/component values come from the reconciled YAML, legacy body, and canonical sibling proof. Sibling-only tuples and frequency counts remain in this ledger.
- The three voice samples are identified by the source as verbatim live copy from 2026-06-22.
- The legacy §14 recipes remain in portable Components as explicitly derived guidance, not measured interaction proof.
- Portable derived-editorial scope includes Scope surface/source/evidence/narrative judgments, visual characterization, task formulations, audience grouping and biography-retention disposition, distinctive-trait selection, implementation principles and avoidances, official/live color separation, component-padding placement, shape grouping, depth characterization, motion promotion boundary, family-use and proprietary-font-asset authority boundaries, identity-asset authority, state/applicability judgments, container classification, state recipes, layout/responsive boundaries, content direction, and governance judgments.
- Every such portable scope carries adjacent complete wording classifying it as a derived editorial implementation inference and as not Databricks-authored or a separately published UI specification.
