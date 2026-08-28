# HubSpot provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the HubSpot migration. Canonical source remains `web/references/hubspot/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | hubspot |
| name | HubSpot |
| country | US |
| category | marketing |
| homepage | https://www.hubspot.com |
| primary_color | `#ff4800` |
| logo | `type: simpleicons`, `slug: hubspot` |
| omd format (source) | 0.1 |
| tokens.source | reconciled |
| tokens.extracted | 2026-06-22 |
| tokens.note | primary = live CTA orange (#ff4800 = rgb(255,72,0)); canvas cream (#fcfcfa) page bg; ink (#1f1f1f) text. Deep teal (#042729) dark sections. Custom HubSpot Sans + HubSpot Serif brand fonts. |
| components_harvested | true |
| ds.name | Canvas |
| ds.url | https://canvas.hubspot.com |
| ds.type | system |
| ds.description | HubSpot's internal design system powering all product surfaces — 5 principles (Clear, Human, Inbound, Integrated, Collaborative) |

Token note from the source, quoted in full:

> primary = live CTA orange (#ff4800 = rgb(255,72,0)); canvas cream (#fcfcfa) page bg; ink (#1f1f1f) text. Deep teal (#042729) dark sections. Custom HubSpot Sans + HubSpot Serif brand fonts.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-22 |
| surfaces inspected | 2026-06-22 |
| tokens.extracted | 2026-06-22 |

Conflicts unresolved: none (Tier 1 live orange `#ff4800` = `rgb(255,72,0)` matches refero Sprout Orange exactly).

## Sibling verification file (E2)

`web/references/hubspot/.verification.md` exists and was read in full (`find` + read). It is adopted as **evidence grade only**: no value in it was promoted into the portable body that the legacy `DESIGN.md` did not already establish.

- **Inspected:** 2026-06-22
- **Method (verbatim):** playwright getComputedStyle (live DOM) — global playwright (chromium, headless), goto https://www.hubspot.com networkidle, Escape × 2 + overlay removal, then `getComputedStyle` on body, headings, buttons, inputs, and full-DOM background/text color frequency scan. Secondary surface: https://www.hubspot.com/pricing. Canvas DS: https://canvas.hubspot.com.

Sibling-only observations kept here and **not** written into the portable body:

- nav/header link "About Us": `color: rgb(18, 69, 72)` (`#124548`); `font-size: 14px`; `font-weight: 500`; `padding: 8px 15px`; height 38px
- Skip-to-content button: `background-color: rgb(31, 31, 31)`; height 42px
- Product card (tab) height `140px`
- Frequency samples: `rgb(255,255,255)` ×109, `rgb(252,252,250)` ×12, `rgb(31,31,31)` ×8, `rgb(255,72,0)` ×4, `rgb(4,39,41)` ×2, `rgb(239,239,239)` ×2
- Text-frequency extras: `rgba(255,255,255,0.62)` ×76, `rgb(0,0,0)` ×58, `rgb(128,128,128)` ×20, `rgb(18,69,72)` ×11, `rgb(21,41,90)` ×9
- H2 computed `font-size: 18px` on the heading that the source also records as a larger serif display
- getdesign.md/hubspot: 404 / Not listed
- refero style id `3e100552-a8ad-4179-b89a-6aa5113b92e1` and its "Warm cream paper with a single…" gloss

These sibling-only strings are named as sibling-only. This file does not assert that they are absent from itself.

## Evidence class

| Domain | Surface | What it establishes | What it does not establish |
|---|---|---|---|
| Marketing homepage | `https://www.hubspot.com/` | Live CTA orange, canvas cream, ink, teal sections, HubSpot Sans / HubSpot Serif, button and card geometries | §14 CRM / pipeline / dashboard treatments as homepage computed tokens |
| Pricing | `https://www.hubspot.com/pricing` | Shared button system on a commercial/pricing route | Other commercial-route variants not named by the source |
| Published design system (context) | Canvas at `https://canvas.hubspot.com` | Official system named in YAML `ds`; five principles (Clear, Human, Inbound, Integrated, Collaborative) | Homepage and pricing machine tokens |
| Official narrative | Source §11 (Wikipedia / About / history as the source cites them) | 2006, Brian Halligan, Dharmesh Shah, MIT, Inbound methodology, five Hubs, HubSpot Customer Platform, Academy, Blog, INBOUND | Current CSS values |
| Refero (Tier 2) | `styles.refero.design/style/3e100552-a8ad-4179-b89a-6aa5113b92e1` | Confirms `#ff4800`, `#fcfcfa`, 8px button radius, 16px card radius | A second token set; product-tab cards remain 8px in the source |

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | marketing | https://www.hubspot.com/ | 2026-06-22 |
| pricing | pricing | https://www.hubspot.com/pricing | 2026-06-22 |
| canvas | published-system | https://canvas.hubspot.com | 2026-06-22 |

## Sources

### Tier 1

- https://www.hubspot.com/ (live DOM, homepage, computed styles)
- https://www.hubspot.com/pricing (secondary surface, pricing page)
- https://canvas.hubspot.com (Canvas Design System)

### Tier 2

- styles.refero.design/style/3e100552-a8ad-4179-b89a-6aa5113b92e1 (HubSpot refero entry — confirmed `#ff4800` primary, 8px button radius, 16px card radius)
- getdesign.md/hubspot — 404, not listed

### Narrative (not interface tokens)

- HubSpot founded 2006 by Brian Halligan and Dharmesh Shah at MIT; Inbound methodology as founding concept. The source attributes these to Wikipedia and HubSpot's public About/history pages.

## Claim ledger

Claims use YAML anchors from the source.

| claim | surface |
|---|---|
| tokens.colors.primary `#ff4800` | home |
| tokens.colors.primary-tint `#fcded2` | home |
| tokens.colors.canvas `#fcfcfa` | home |
| tokens.colors.warm-parchment `#f8f5ee` | home |
| tokens.colors.ink `#1f1f1f` | home |
| tokens.colors.deep-teal `#042729` | home |
| tokens.colors.graphite `#60605f` | home |
| tokens.colors.mist `#cacac8` | home |
| tokens.colors.on-primary `#ffffff` | home |
| tokens.colors.cadet-navy `#15295a` | home |
| tokens.typography.family.sans / serif | home |
| tokens.spacing.* | home |
| tokens.rounded.* | home |
| tokens.shadow.none / hairline | home |
| tokens.components.button-primary | home |
| tokens.components.button-outlined | home |
| tokens.components.button-dark | home |
| tokens.components.button-sm | home |
| tokens.components.input-default | home |
| tokens.components.card-product | home |
| tokens.components.card-feature | home |
| tokens.components.badge-default | home |
| tokens.components.tab-filter | home |
| ds.name Canvas | canvas |

## Omission ledger

Disposition mentions, not re-use. This file names what was omitted; it does not claim those strings are absent from this file.

| Item | Disposition |
|---|---|
| §13 personas | Four fictional archetypes (name · age · city included). Portable Audience keeps only the four intro-list groups (SMB marketers, growth-stage sales teams, customer success managers, operations leads). A fifth group reconstructed from the deleted fourth vignette is not kept. Biographies are not re-hosted here (D2, D2a). |
| §9 Agent Prompt Guide | Deleted as tool-facing restatement. Every value it names already has a Foundations or Components slot. |
| `spec/omd-v0.1.md` example curves | Source listed `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)`, `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)`, `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)`. Curves omitted; roles and durations kept. |
| Sibling-only nav "About Us" / `#124548` / Skip-to-content / `140px` | Kept in this sidecar only. |

## Derived-editorial inventory (B2a, 26 = 26)

Complete-form close: “derived editorial implementation inference from the verified surfaces; … not HubSpot-authored or taken from a separately published UI specification, including the published Canvas documentation.” HubSpot publishes Canvas, so the toss-form close is not used (rulebook v12 B2a 전제 주석).

| # | DESIGN.md line | Reading |
|---|---:|---|
| 1 | 9 | Treating the two captured routes as this contract's domain, and the separate Canvas record as not a substitute for those live tokens |
| 2 | 11 | Warm / modern / approachable / editorial-SaaS characterizations built on recorded hex and family values |
| 3 | 13 | Treating the recorded year / founders / MIT / Hubs / conference names as narrative rather than token evidence; calling Inbound a philosophy-turned-category, the brand a technology company with a publishing-house soul, and trust as earned by usefulness |
| 4 | 19 | Reading the two captured routes and the named Canvas record as the three primary tasks |
| 5 | 28 | Reading the source's observable segment list as this product's audience |
| 6 | 32 | Grouping the Key Characteristics as the distinctive layer |
| 7 | 45 | Treating the five headlines as this contract's principles, and the *UI implication* sentences |
| 8 | 84 | Treating color role names as live-homepage and pricing-page observation labels rather than Canvas baseline roles |
| 9 | 90 | Treating Pure White surface use and On-Primary text use as one hex with two source roles, not a second token |
| 10 | 111 | Reading the YAML eight-step set as live-surface token keys, and the longer list as the source's layout scale |
| 11 | 122 | Keeping the two card radii (YAML 16px / §4 dropdown 8px) as separate records |
| 12 | 137 | Calling the flat treatment a deliberate modern-flat approach, and saying shadows would add visual noise |
| 13 | 150 | Classing the three listed curves as untraceable to HubSpot evidence and omitting them |
| 14 | 173 | Reading the no-spring stance as a professional-SaaS signal, and motion as consistent with "clear and human" |
| 15 | 189 | Treating Canvas as not replacing live computed roles; classing Inter and Source Serif 4 as fallbacks; packet as not establishing a distributable font file |
| 16 | 197 | Calling the serif/sans split a signal of trustworthy authority and functional clarity |
| 17 | 222 | Keeping the separate Canvas record from standing in for homepage and pricing machine tokens |
| 18 | 223 | Keeping the simpleicons logo pointer in this ledger rather than as a renderable mark |
| 19 | 230 | Closing each state map by control role, and omitting kind+map without interactive-kind evidence |
| 20 | 447 | Omitting kind and a map on the product hub overview card |
| 21 | 460 | Omitting kind and a map on the product suite dropdown tab card |
| 22 | 473 | Omitting kind and a map on the feature card |
| 23 | 479 | Classing the peach tag as non-interactive |
| 24 | 514 | Reading the YAML-versus-layout-scale split as capture-versus-token-set, not a published Canvas grid specification |
| 25 | 553 | Reading breakpoint names, widths, and collapsing rules as describing the two captured marketing surfaces, not a published Canvas layout specification |
| 26 | 558 | Reading the voice as warm/helpful/confident, and Inbound as echoing through every surface |

## Proof notes

- `tokens.source: reconciled`
- `components_harvested: true`
- `ds.type: system`
- Uncaptured hover/focus/pressed treatments beyond the recorded "hover darken" string are omitted. They are not `not-applicable` by absence; applicability follows control meaning. State coverage is not claimed complete.
- Official history (2006, founders, MIT, Inbound, Hubs, Academy, Blog, INBOUND) is narrative context, not a token source.
- Card radius conflict the source already recorded: product-tab cards 8px, feature / YAML overview cards 16px — both kept.
