# DJI provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/dji/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | dji |
| name | DJI |
| country | CN |
| category | consumer-hardware |
| homepage | https://www.dji.com |
| primary_color | `#000000` |
| logo | favicon `https://www.google.com/s2/favicons?domain=dji.com&sz=128` |
| omd format (source) | 0.1 |
| verified | 2026-05-19 |
| tokens.source | prose-derived |
| tokens.extracted | 2026-06-09 |
| components_harvested | true |

Token note, copied from the source YAML: "Non-black/white hexes are best-fit approximations per brand-guide (Titan, sky-blue named but hex not public)". Dual-destination with the portable body (E2a): the same bound is stated in Experience Scope, restated at the head of Foundations Semantic color, attached inline to each approximate hex in that section, carried document-wide by the Scope sentence and the Components / Type-roles lead-ins for the component blocks, state rows, and type-scale row that repeat one of those hexes bare or with `≈` alone, and named in Governance Named gaps.

Homepage `https://www.dji.com` is dual-destination: portable Experience Scope plus this identity / sources ledger (E2a). The Google s2 favicon URL is catalog identity-only in this ledger; the portable Assets paragraph carries a URL-free sentence saying the catalog logo record is a Google s2 favicon entry rather than a first-party mark file, under an adjacent complete B2a (E2a: the URL itself is not dual-destination).

Catalog `primary_color` `#000000` is dual-destination: this ledger plus portable Scope, Distinctive traits, Foundations Semantic color, Primary CTA / Secondary CTA fills, and Global Header (E2a).

The source has no `ds.name` / `ds.url` / `ds.type` / `ds.description` fields and no `verification_v2` block. None are invented here.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-05-19 (omd:add-reference — CN batch) |
| Tier 1 dji.com WebFetch | 2026-05-19 |
| Tier 2 brand-guide WebSearch | 2026-05-19 |
| tokens.extracted | 2026-06-09 |

## Surfaces

The source has no `verification_v2.surfaces` table. It names one inspected surface family.

| id | kind | url | inspected |
|---|---|---|---|
| dji-com | product-marketing + store (live read) | https://www.dji.com | 2026-05-19 (WebFetch; homepage plus product/store surfaces) |

The source records that dji.com exposes no public CSS token layer, so this surface is a prose-read surface, not a computed-style claim surface.

## Sources

The URLs and source names below are copied from the source footer and its HTML comment block, not invented as an in-app harvest.

### Tier 1 (live)

- https://www.dji.com — WebFetch 2026-05-19. Confirmed a monochrome black / white / silver palette, full-bleed product photography as the hero language, sans-serif typography, a minimal / premium-industrial aesthetic, and imperative store CTAs (`立即购买` / `了解更多`). No public CSS token layer is exposed. Dual-destination with portable Experience Scope as the named homepage and read date (E2a).

### Tier 2 (brand guide / philosophy)

WebSearch 2026-05-19 surfaced DJI's global 500-page Brand & Product Communication Design Style Guide through two secondary postings:

- Behance — "DJI – Design Style Guide"
- Scribd — "DJI Toolbox BASICS"

These confirm **by name**: the primary color "Titan"; secondary white / black / silver; a single sky-blue accent; a custom DJI typeface (DJI-Demi referenced in app font assets); and the "X-Factor" grid derived from the lowercase-"i" height in the DJI wordmark. The brand guide does **not** publish exact hex values for Titan or the sky-blue accent openly. Dual-destination: this ledger plus portable Experience Scope, Typography Font evidence, and Layout X-Factor grid (E2a). The portable body attributes these to Tier 2 brand-guide material rather than to a first-party DJI publication read in this pass.

- Brandfetch dji.com — logo assets. Ledger-only; no portable asset claim is made from it.

### Style ref (not a token source)

- `apple` — recorded in the source as a premium-monochrome hardware-store tone reference. Provenance-only. It is not a portable Foundations rule, an Avoid rule, or a token origin.

## Sourcing caveat (source verbatim class)

The source's own caveat, kept as the authority bound: all specific hex values in its §2/§4 except `#000000` and `#ffffff` are BEST-FIT APPROXIMATIONS of observed / Apple-class neutral usage, flagged "approximate" inline. Titan and sky-blue are named in the guide but not published as hex. Do not present these specific hexes to the brand owner as verbatim DJI tokens — present them as observed approximations pending the official guide.

Approximate hexes carried in the portable body under that bound: `#1c1c1e` (Titan), `#86868b`–`#b0b0b5` (silver / mid gray), `#0a84ff` (sky blue), `#f5f5f7` (light gray surface), `#d2d2d7` (hairline), `#161617` (dark panel), `#34c759` (success), `#ff3b30` (error / sold-out), `#ff9f0a` (warning). Directly stated, not approximate: `#000000`, `#ffffff`.

## Conflicts unresolved

Copied from the source footer: exact hex values for Titan and the sky-blue accent are not publicly published; the §2/§4 specific non-black/white hexes are flagged approximate. Restated in portable Scope, Foundations Semantic color, and Named gaps as an approximation bound, never as invented live proof (E2a).

Public-history freshness: the source states its §11 founding facts (Frank Wang / 汪滔, HKUST, Shenzhen, 2006) are widely documented public history and were re-verified against no primary DJI source in that pass. Dual-destination: this ledger plus portable Experience Scope, with the same limiter attached there (E2a).

## Preserved value pairs (both sides stay in the portable body; neither is chosen)

- Hero display: YAML `size: 64` vs body `56–80px` vs §9 prompt figure `64px`
- H2 section: YAML `size: 42` vs body `36–48px`
- H3 module / product name: YAML `size: 26` vs body `24–28px` vs §9 prompt `24px`
- Sub-head: YAML `size: 19` vs body `18–20px` vs §9 prompt `18px`
- Body / capability: YAML `size: 16` vs body `15–16px` vs §9 prompt `15px`
- H3 weight: YAML `700` vs body `500–700`
- Spec value size: body `14–16px` vs §9 prompt `14px`
- Primary CTA fill: `#000000` on white pages vs `#ffffff` on black pages (the source records the inversion, not one value)
- Product Tile background: `#ffffff` vs dark panel `#161617` on black sections
- Product Tile border: none, separation by whitespace, or `1px` hairline
- Status Pill background: transparent vs hairline outline; text sky-blue accent vs Titan
- Spec Module background: `#f5f5f7` on light vs `#161617` on dark
- Numeral convention: §3 "unit in lighter/smaller type beside the number" vs §9 "number larger than its unit"
- Radius vocabulary: YAML `rounded` keys `sm` 4 / `md` 8 / `lg` 12 / `full` 9999 vs the body's "sharp-to-modest (4–12px)" range

## Omitted unattributed easing curves (E2b)

The portable Foundations Motion section keeps the token names `ease-standard` / `ease-enter` / `ease-exit` and their uses, and marks each curve cell "omitted (unattributed cubic-bezier; matches the legacy spec template)". The curve strings themselves are omitted from the portable body as unattributed and are stored here as the omission ledger. The source's Tier 1 and Tier 2 evidence covers palette, typography, grid, and photography; it records no motion measurement.

- `ease-standard` `cubic-bezier(0.4, 0, 0.2, 1)` — matches the legacy spec template `ease-standard` `cubic-bezier(0.4, 0.0, 0.2, 1)` (`spec/omd-v0.1.md`)
- `ease-enter` `cubic-bezier(0.0, 0.0, 0.2, 1)` — matches the legacy spec template `ease-enter` exactly
- `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` — matches the legacy spec template `ease-exit` exactly

Duration tokens (`0ms` / `200ms` / `350ms` / `600ms`) differ from the template's ladder and are brand-recorded; they remain in the portable Motion table together with the five signature motions and the reduced-motion contract.

## Personas (D2)

Source §13 marks its three entries as fictional archetypes informed by publicly described DJI customer segments — consumer creators, prosumer pilots, and enterprise / industrial users — rather than individual people. The portable Audience keeps that exclusion boundary and the segment framing only. The three archetypes' names, ages, cities, and biographies are deleted and are **not** re-hosted here (D2). Portable Primary tasks come from the store / product / purchase evidence in the source's §4, §5, §8, and §14, not from §13.

## Voice-sample evidence class

Source §10 carries four voice samples, each with an inline `illustrative` HTML marker: `See It All`, `Just Fly`, `未来无所不能`, and `立即购买` / `了解更多`. The markers state that these follow observed DJI marketing/CTA convention and are not quoted as specific verified live strings. Dual-destination: the samples and their illustrative status both stay in portable Content & Locales; this ledger records the evidence class (E2a).

A fifth brand string sits in a different evidence position and was restored in the A5 pass: `Possibility in motion`. The source quotes it in the §10 prose sentence as the third of three aspirational headline examples (`"See It All"`, `"Just Fly"`, `"Possibility in motion"`), not in its sample list, and attaches no inline `illustrative` marker to that sentence. The portable Content & Locales sample list therefore carries it with its own position stated rather than borrowing the other four samples' marker, and does not promote it to a verified live string. Its casing — capital `P`, lower-case `in motion` — is the source's, carried as bytes (A5). The source's forbidden-phrase list (`革命性`, `颠覆`, `极致`, `世界第一`, exclamation marks on CTAs such as `立即购买！`, emoji on product/spec surfaces) is portable Content, not a ledger entry.

## Claim ledger

The source has no `verification_v2.claims` object and no per-claim surface mapping. None is invented here. Token extraction remains `prose-derived` (extracted 2026-06-09); `components_harvested: true`. The string `prose-derived` is dual portable Scope + Typography Font evidence + Governance Named gaps + this ledger (E2a).

## Capture selectors

The source records no `data-omd-capture` selectors and no computed-style capture. None are invented here.

## Proof notes

- The source predates the Proof-block convention: it has no `## Proof` section, no raw sample list, and no regional-source list. None is fabricated here.
- `tokens.source: prose-derived`, not `reconciled`, and not an official published DJI UI specification. Destinations: this ledger + portable Scope + portable Typography Font evidence + portable Governance Named gaps (E2a); the string is not placed in Foundations.
- Catalog logo Google s2 URL is identity-only in this ledger and is not dual-destination with portable Assets (E2a). The portable Assets sentence about it sits under an adjacent complete B2a.
- The 500-page brand guide is reached through two secondary postings (Behance, Scribd), not through a first-party DJI download. The portable body labels it Tier 2 brand-guide material for that reason.
- Adjacent complete B2a in the portable body (`derived editorial implementation inference` / `not DJI-authored or a separately published UI specification`), listed in document order so the ledger neither narrows nor widens the body: Scope category-defining reading; Scope atmosphere + Vignelli/Rams comparison; Scope origin-to-design reading and not-interface-tokens; Audience application; Distinctive ranking + trait characterizations; the six numbered Principles and the capture-bound application list; Avoid causal wording; Semantic color emotional-ground reading; Semantic color instrument-readout reading; Semantic color 1px-hairline-preference reading; Semantic color palette-philosophy role note; Shape YAML-key-to-component correspondence; Shape sharp-to-modest / precision-instrument reading and Shape local-geometry reading; Elevation flat-chrome depth reading; Elevation full-black-lightbox reading; Motion signature-motion characterizations; Motion character + spring stance; Typography Font-evidence application readings; Weights fragility reading; Conventions headline-is-a-phrase and numbers-persuade judgements; Conventions CJK optical-weight reading; Assets logo/imagery/illustration readings; §14 capture-record characterizations; representative-reconstruction-pixels qualifier; Text / Link "only place the blue accent reliably appears" reading; Spec Table Row "heart of every product page" reading; Status Pill "understated" reading; Layout X-Factor consequence reading; Layout density reading; Layout unlisted-surface boundary; Content voice characterization + copy-pattern table + forbidden-phrase rationale.
- Generic `Focus` on the Input (border transitions to the sky-blue accent) is kept as an additional observed named state on that component. It is not promoted to a `focus-visible` treatment, and no `focus-visible` row carries a value (B1).
- Uncaptured hover / disabled / loading visual treatments are omitted as values. They are never `not-applicable`; applicability follows control meaning (C1). Primary CTA `success` is `not-applicable` for a meaning reason — the source places that confirmation on the cart drawer and the order-confirmation page rather than on the control. Global Navigation Item `loading` / `error` / `success` are `not-applicable` for selection-versus-request meaning reasons (C2). Secondary CTA, Text / Link, and Input keep their unresolved fields omitted at the field boundary rather than closed. State coverage is not claimed complete (C3).
- Product Tile, Spec Module, Spec Table Row, Global Header / Footer, and Status Pill omit `Kind` and the state-applicability map for absent interactive-kind evidence (C4). None of them is declared `non-interactive`. Product Tile keeps its hover lift `0 4px 16px rgba(0,0,0,0.08)` as an additional observed named state.
- Verified primitive types are preserved per component (A1b): `button` on Primary CTA, Secondary CTA, and Text / Link (source YAML `button-link`, whose body name is Text / Link — both writings kept); `input` on Input; `card` on Product Tile and Spec Module; `badge` on Status Pill. No `Kind: interactive` umbrella replaces them.
- YAML `typography.family` records `sans: "DJI"` and `mono: "DJI"`. Both keys are preserved in portable Typography Font evidence; the mono key is not merged into the sans key (A1c).
- YAML `rounded.full: 9999` is unitless in the source and is written unitless in the portable body; it is not converted to a `px` value (A1a).
- Brand-published strings move as bytes (A5): `立即购买`, `了解更多`, `预订`, `继续购物`, `售罄`, `未来无所不能`, `思源黑体`, `革命性`, `颠覆`, `极致`, `世界第一`, `立即购买！`, `大疆创新`, `汪滔`, `See It All`, `Just Fly`, `Possibility in motion`, `Mavic 4 Pro`, `Air 3S`, `Osmo Pocket`, `Buy Now`, `Learn More`, `Pre-order`, `Sold out`, `Notify me`, `Continue shopping`, `No products match your search`, `Up to 51 minutes of flight time.` are carried in the portable body in their original script, with English glosses placed beside the original rather than replacing it.
- No `[FILL IN]` placeholder exists in the source; none is emitted.
