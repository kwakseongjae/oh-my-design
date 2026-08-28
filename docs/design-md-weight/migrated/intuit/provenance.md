# Intuit QuickBooks provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/intuit/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | intuit |
| name | Intuit QuickBooks |
| country | US |
| category | fintech |
| homepage | `https://design.intuit.com/quickbooks/brand/` |
| primary_color | `#0d333f` |
| logo.type | favicon |
| logo.slug | `https://www.google.com/s2/favicons?domain=intuit.com&sz=128` |
| omd format (source) | 0.1 |
| verified | 2026-07-13 |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-13 |
| components_harvested | true |
| ds.name | QuickBooks Design |
| ds.url | `https://design.intuit.com/quickbooks/brand/` |
| ds.type | brand |
| ds.description | Official QuickBooks brand hub covering visual foundations, product expression, resources, and accessibility; it is distinct from an authenticated QuickBooks application specification. |

The homepage URL is dual-destination: identity metadata here, and the inspected brand-hub route is the portable scope record in `DESIGN.md` §1. The primary color is dual: identity here, and Foundations / the product-expression outlined action in `DESIGN.md`. The favicon slug is dual: identity here, and a portable Assets classification in `DESIGN.md` §3. `ds.type: brand` / `ds.name` / `ds.url` / `ds.description` are ledger fields (A1c). The fact the description names (official brand hub, distinct from an authenticated QuickBooks application specification) is also in the portable Scope.

**Logo decision.** The catalog field is `logo.type: favicon` / a Google favicon proxy slug. That is an identity pointer, not an Intuit-hosted brand file.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-13 |
| verification_v2.checked | 2026-07-13 |
| surfaces inspected | 2026-07-13 |
| sources captured | 2026-07-13 |
| tokens.extracted | 2026-07-13 |

The source footer records the verification verbatim as **Verified:** 2026-07-13. That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: none — as the source footer states.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| brand-hub | official-brand-hub | `https://design.intuit.com/quickbooks/brand/` | 2026-07-13 |
| product-expression | official-product-expression | `https://design.intuit.com/quickbooks/product/` | 2026-07-13 |
| sign-in | public-authentication | Intuit federation authorization route (full query in source YAML) | 2026-07-13 |

YAML `verification_v2.sources` also names `brand-hub-capture` (official-doc), `product-expression-capture` and `sign-in-capture` (product-surface), `avenir-font-asset` (brand-asset), `quickbooks-type-guidance`, `intuit-origins`, and `intuit-values` (official-doc), all captured 2026-07-13.

### Tier 1 (as listed in the source footer)

- `https://design.intuit.com/quickbooks/brand/`
- `https://design.intuit.com/quickbooks/product/`
- Intuit federation authorization route (full query in source YAML and footer)

### Tier 2

- `https://getdesign.md/intuit` — attempted; safe-open failure. No Tier 2 token or component fact used.
- `https://styles.refero.design/?q=intuit` — attempted; safe-open failure. No Tier 2 token or component fact used.

Tier 2 data was not used to establish any token or component value.

## Token note

The source frontmatter `tokens.note`, kept here as a ledger string and also landed in the portable body as the fact it names (`DESIGN.md` Scope):

> Machine tokens are limited to selector-backed values in the supplied three-surface capture. The QuickBooks brand hub, product-expression route, and authentication route are separate evidence domains; no interaction state was captured.

## Sibling handling (`web/references/intuit/.verification.md`)

The sibling exists — confirmed with `find web/references/intuit -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Its own record, transcribed here:

- Inspected 2026-07-13. Method: supplied deterministic collector bundle `artifacts/reference-evidence/intuit.json` (captured `2026-07-13T14:59:45.368Z`); no browser recapture or MCP was rerun.
- `home::body` — `color: rgb(0, 0, 0)`; `font-family: "AvenirNext forINTUIT", Avenir, Helvetica, Arial, sans-serif`; 16px / 400 / 24px.
- `home::[data-omd-capture="1"]` — `role: button`; `color: rgb(0, 0, 0)`; `border-radius: 0px`; `padding: 28px 0px`; `height: 84px`; `font-size: 16px`.
- `home::[data-omd-capture="0"]` — `color: rgb(5, 83, 147)`; `font-size: 16px`; `font-weight: 500`; `line-height: 24px`.
- `home::h2` (`ds-tile__heading`) — `color: rgb(0, 0, 0)`; 40px / 600 / 52px; `margin-bottom: 20px`.
- `surface-2::[data-omd-capture="13"]` — `color: rgb(13, 51, 63)`; `border: 2px solid rgb(13, 51, 63)`; `border-radius: 4px`; `padding: 0px 28px`; `height: 52px`.
- Loaded font record — `Avenir Next forINTUIT`; 203 visible uses; source `https://lib.intuitcdn.net/fonts/AvenirNext/3.0/AvenirNextforINTUIT-Regular.1.woff2`.
- Artifact reports 3 surfaces, coverage score 71, 21 component variants, 4 component types, 0 observed states, 0 interaction kinds, and 0 interactions.

Sibling-only items (transcribed as sibling records; mention here is not portable-body use):

- RGB spellings of hex values already in the source (`rgb(0, 0, 0)`, `rgb(5, 83, 147)`, `rgb(13, 51, 63)`)
- Computed stack spelling `AvenirNext forINTUIT` (no space after Avenir)
- Selector class `ds-tile__heading`
- Logo-link `font-weight: 500` on `home::[data-omd-capture="0"]`
- Collector totals 4 component types / coverage score 71 / 0 interaction kinds
- Artifact timestamp `2026-07-13T14:59:45.368Z`
- Declared-only face spellings `ProximaNovaBold`, `ProximaNovaCondRegular`, `ProximaNovaLight`, `ProximaNovaRegular`, `ProximaNovaSemibold` (source body writes “Proxima Nova faces”)
- 48 Intuit CDN source URLs
- getdesign and refero attempt URLs

## Byte-form notes

- The source frontmatter records display / body / nav line heights as `52`, `24`, `24`. They are carried in that form in the portable token-set table and as `52px` / `24px` in the observed-hierarchy table. They are not rewritten as ratios (A1a).
- `tokens.spacing.tile-text-bottom: 20` is not a type size. `tokens.spacing.secondary-action-x: 28` is not `tokens.spacing.global-nav-y: 28`. `tokens.typography.body.size` `16` is not `tokens.typography.nav.size` `16` as a collapsed key — both type keys are kept, and neither is a spacing step.
- `tokens.rounded.square: 0` is not `tokens.rounded.secondary-action: 4`. Navigation tab `0px` stays on that control as well as on `square`.
- YAML `tokens.components.global-nav-tab.type: button` is attached only to Global Navigation Tab. The product-expression outlined action is not in the token set.
- YAML hex is lowercase. The portable body keeps that form beside the source body’s uppercase spellings (`#0D333F`, `#FFFFFF`, `#6B6C72`).

## Omission ledger

| Omitted | Boundary | Reason |
|---|---|---|
| §13 Personas | whole section | The source labels three product-context archetypes and says they are not research-validated personas. Fictional personas are neither promoted to verified tasks nor re-hosted in a sidecar. The section is dropped and is deliberately not restated here as names, occupations, or affiliation classifications (D2, D2a). |
| §9 Agent Prompt Guide | whole section | Tool-facing copy-paste prompts and restatements of rules stated elsewhere. Checked value by value before deletion: see the next paragraph. |

No `cubic-bezier` from the `spec/omd-v0.1.md` example table appears in the source. The source lists no duration, easing, animation, or reduced-motion value.

§9 deletion check (A3). Every value §9 names was confirmed present elsewhere in the portable body before the section was dropped. Loaded `Avenir Next forINTUIT`, black `#000000` text on transparent navigation, square 84px role-button tab with `28px 0px` padding — Global Navigation Tab. Documented brand character (optimistic, supportive of small businesses, visually clear) — Scope + Principles. Secondary public action 52px high, `#0D333F` text/border, 4px radius, `0px 28px` padding — Product-expression Outlined Action. The “do not add green hexes, generic finance-dashboard components, shadows, responsive values, or interaction variants” restatement is in Avoid + Foundations + Layout.

## Claim ledger

Claims use the YAML anchors from the source: `*product` = product-expression / product-expression-capture / computed-style / 2026-07-13; `*brand` = brand-hub / brand-hub-capture; `*font` = brand-hub / avenir-font-asset / computed-style-plus-fontfaceset-source.

| Claim | Surface |
|---|---|
| `tokens.colors.dark-action` | product-expression computed-style |
| `tokens.colors.ink` / `brand-link` | brand-hub computed-style |
| `tokens.colors.canvas` / `muted` | product-expression computed-style |
| `tokens.typography.family.ui` / `display` / `body` | brand-hub + avenir-font-asset |
| `tokens.typography.nav` | brand-hub computed-style |
| `tokens.spacing.tile-text-bottom` / `global-nav-y` | brand-hub computed-style |
| `tokens.spacing.secondary-action-x` | product-expression computed-style |
| `tokens.rounded.square` | brand-hub computed-style |
| `tokens.rounded.secondary-action` | product-expression computed-style |
| `tokens.shadow.flat` | brand-hub computed-style |
| `tokens.components.global-nav-tab` (type, bg, fg, radius, padding, height, font, states, use) | brand-hub computed-style |
| Published strings QuickBooks / Intuit / Avenir Next for Intuit / Avenir Next forINTUIT / Quicken / Scott Cook / Tom Proulx / See what needs your attention today. / Keep your cash flow in view. / Review the details before you continue. | source §1 / §3 / §10 / §11 |
| 1983 founding / Scott Cook / Tom Proulx / Quicken / family checkbook / DOS to web, mobile, cloud, and AI / customer problems at the center / closing sentence that the brand-hub story is a brand and marketing narrative, not proof of any unobserved product workflow | source §1 / §11 narrative |

## Proof notes

- Three named Tier 1 surfaces, recorded 2026-07-13. The brand hub and product-expression route are the computed-token surfaces. The authentication route is a separate evidence domain. Typography, origins, operating values, and resources are brand sources, not computed-token surfaces for the live palette.
- `components_harvested: true`; one component record in the source token set (`global-nav-tab`).
- The source records no `focus-visible` string. Interaction count is zero. Uncaptured hover, focus, pressed, disabled, error, and expanded treatments are omitted as values; they are not turned into `not-applicable`. Applicability follows control role. State coverage is not claimed complete.
- Intuit / QuickBooks Design is a published brand hub (`ds.type: brand`), not a first-party UI specification of the Carbon / Pajamas class. Derived-editorial qualifications therefore close with the toss-form: not Intuit-authored or a separately published UI specification (rulebook v12 B2a 전제 주석). The close does not claim that the brand hub is absent; it refuses to treat editorial inferences as if they were that hub’s authored UI specification.
- 1983 Scott Cook / Tom Proulx / Quicken / family checkbook, DOS-to-web-mobile-cloud-and-AI, customer problems at the center, QuickBooks as one product on that platform, logo-as-possibility, real-customer photography, playful industry illustration, and the source §11 closing sentence (brand and marketing narrative, not proof of any unobserved product workflow) are source-stated narrative. They stay in Experience Scope as narrative context, not as interface tokens.

## Portable derived-editorial scope

Every passage in the portable `DESIGN.md` that carries the derived-editorial qualification. The qualification itself stays in the body; this table is an index, not its home. Measured against `DESIGN.md` by listing each line that contains `derived editorial implementation inference` (file-level; not `grep -c`): **24**. This table has **24** rows (E1 1:1). The same 24 lines also carry `not Intuit-authored` and `a separately published UI specification`.

| Portable location | Qualified material |
|---|---|
| Experience — Scope ¶1 | Surface boundary: three public URLs as token surfaces; typography / origins / operating-values / resources pages do not automatically supply computed tokens; brand hub distinct from an authenticated application specification |
| Experience — Scope ¶2 | Not a generic bank dashboard / working brand hub rather than a frozen archive; recorded values stay on the surfaces that established them; green is narrative, not a machine color token; authentication-surface orange and blue stay off the QuickBooks brand set |
| Experience — Scope ¶3 | Classifying the 1983 / Cook / Proulx / Quicken / DOS-to-AI narrative, and the closing brand-and-marketing-narrative sentence, as context that does not supply tokens |
| Experience — Primary tasks | Selecting the three surface tasks; they do not come from the persona section |
| Experience — Audience | Reading the source-named group “small businesses” as this product’s audience |
| Experience — Distinctive traits | Grouping the recorded values into the trait list |
| Experience — Principles | The four source principles and their UI implications |
| Experience — Application rules | The four Do-list rules and the reasons attached to them |
| Experience — Avoid | The four Don’t-list prohibitions |
| Foundations — Semantic color | Palette-role slotting; uppercase / lowercase hex keep-both; green not a token; authentication orange/blue off the brand set |
| Foundations — Spacing | Local measured relationships, not a complete scale; two writings of `28` stay on two keys; `80` / `60` stay off the spacing token-set |
| Foundations — Shape | Keeping `square: 0` / `secondary-action: 4` / nav `0px` / action `4px` on their own paths |
| Foundations — Elevation | Reading `box-shadow: none` as a flat treatment for the observed navigation tab rather than a depth system; not inferring a card-shadow scale or overlay recipe |
| Foundations — Motion | Five-kind promotion gate; keep-purposeful and verify-against-an-official-surface instruction; no motion token promoted from this capture |
| Typography — Font evidence | Official product-use / SSO library / declared-only Proxima Nova and iconfont / Arial-as-system readings |
| Typography — Family | No-substitution rule; loaded Avenir canonical only where computed use and FontFace/source evidence agree |
| Typography — Type roles | `52` / `24` kept off invented ratios; body `16` and nav `16` stay type keys |
| Typography — Assets | Favicon slug as an identity pointer, not a hosted brand file; SSO library off a public-licence claim; candid photography and playful industry illustration kept as first-party brand-hub imagery, not invented brand-color decoration |
| Components — Capture record | Promoted because default visual values were measured; unobserved interaction treatments omitted as values; role-based applicability procedure; interactive-kind and not-applicable verdicts |
| Components — Recorded state-content practices | §14 rows kept as derived content practices, not as observed visual treatments or a complete state-coverage claim |
| Layout | Three 1440×900 routes; official responsive-scale numerics left unnamed; `tile-text-bottom: 20` stays a local tile relationship |
| Content — Voice | Content-direction reading of official guidance; illustrative lines are not a captured interface copy deck |
| Content — Published strings | Byte-exact / gloss-beside rule |
| Governance — Recorded unresolved | Naming the list from the source’s own unresolved fields |
