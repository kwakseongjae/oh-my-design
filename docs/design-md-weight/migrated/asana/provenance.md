# Asana provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/asana/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | asana |
| name | Asana |
| country | US |
| category | productivity |
| homepage | https://asana.com |
| primary_color | `#f06a6a` |
| logo | type `simpleicons`, slug `asana` |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-22 |
| components_harvested | true |

Token note from source: `primary = brand coral (#f06a6a) from CSS on asana.com/brand; live homepage hero CTA uses #fd3ffd magenta-pink accent; nav CTA uses high-contrast #0d0d0d. Signature TWK Lausanne font confirmed live. Multi-color dots palette: coral, violet, sky, sage.` Dual destination (E2a): this ledger and portable Experience Scope (same note plus the adjacent catalog-commentary / era-split / derived editorial implementation inference / not-Asana-authored or a separately published UI specification limiter).

Catalog logo type `simpleicons` / slug `asana` is dual: this identity ledger + portable Typography & Assets boundary sentence (`Catalog logo metadata is Simple Icons identity (asana)`, not a captured first-party mark) (E2a). Homepage `https://asana.com` is dual-destination: Experience Scope + this identity/surfaces/Tier 1 ledger (E2a). Catalog field `primary_color` is identity metadata + portable Scope token-note + Distinctive + Foundations Asana Coral / Primary (E2a). Hex `#f06a6a` also hits Scope footer / atmosphere / capture-bound / Font evidence Official product-use / §14 form-validation / Capture-record stay-on-row / Default Text Field error reason. It is not in Avoid. `tokens.source: live-extract` is this ledger only (A1c). `components_harvested: true` is this ledger only (A1c).

## Freshness

| Event | Date |
|---|---|
| verified (YAML) | 2026-06-22 |
| tokens.extracted | 2026-06-22 |
| live inspect (footer) | 2026-06-22 |
| voice samples | 2026-06-22 |

Conflicts unresolved: none (source footer). Source-stated era split, not a YAML conflict: hero CTA magenta-pink `#fd3ffd` is 2026-era marketing; coral `#f06a6a` is the permanent brand primary per brand page CSS. Preserved value pairs inside the reconstruction: ink `#0d0d0d` vs heading `#0d0e10` vs login `#000000` vs hero-accent text `#0b0505`; canvas/on-primary/on-dark `#ffffff`; sage/success `#466451` vs toggle-on `#36a651`; hairline `#e7e7e7` vs border-muted `#6e6e6e` vs login border `#757677`; YAML `rounded.card` 20 vs harvested feature card 16px vs login 6px vs layout Micro 4px vs pill 100px vs badge 9999px; YAML spacing vs body extras 28/32/40/56/64/76/100/104; YAML `display-hero` use “Ghost or TWK Lausanne” vs body-table TWK Lausanne; YAML `shadow.card` vs Level 1 hairline. Both sides of each pair stay in portable Foundations, Typography, or Components. Neither is chosen.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | marketing-surface | https://asana.com/ | 2026-06-22 |
| pricing | marketing-surface | https://asana.com/pricing | 2026-06-22 |
| brand | brand-css | https://asana.com/brand | 2026-06-22 |
| login | product-login | https://app.asana.com/-/login | 2026-06-22 |

Named product patterns in §14 (empty project, search, project view, dashboard, save, form validation, offline, task completion, toast, skeleton, disabled) are source-stated reconstruction targets in the philosophy layer. They are not given invented authenticated-app routes here.

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home | marketing-surface | https://asana.com/ | 2026-06-22 |
| pricing | marketing-surface | https://asana.com/pricing | 2026-06-22 |
| brand | brand-css | https://asana.com/brand | 2026-06-22 |
| login | product-login | https://app.asana.com/-/login | 2026-06-22 |

### Tier 1

- https://asana.com/ (homepage, TWK Lausanne confirmed, hero CTA colors, color frequency scan)
- https://asana.com/pricing (pricing buttons, surface card colors)
- https://asana.com/brand (brand CSS hex extraction — `#f06a6a` confirmed as primary brand color)
- https://app.asana.com/-/login (input field, app-level component colors)

Homepage, pricing, brand, and login URLs are dual-destination with portable Experience Scope (E2a).

### Tier 2

- styles.refero.design/style/6b2a0513-df80-4140-87a8-38b1fef34313 (Ghost font, coral palette, button specs)
- getdesign.md/asana — no entry found

### Narrative (not interface tokens)

Source HTML comment: Dustin Moskovitz and Justin Rosenstein as co-founders, Facebook origin, 2011 public launch, 2020 NYSE direct listing — publicly documented facts. Portable Scope restates those values as publicly documented facts, not interface tokens. Source also names: founded 2008; originally an internal Facebook work tool; company mission “to help humanity thrive by enabling the world's teams to work together effortlessly”; three-dot logo; 2026 homepage H1 “The OS for human-agent teams.” Those remain narrative or live voice, not tokens.

Voice samples (§10) are verbatim from the live 2026-06-22 homepage (H1, H2, page title). Dual-destination: portable Content Observed + this freshness/narrative ledger; the hero line is also in Experience Scope (E2a). Derived §10 copy-pattern rows are not this observation class.

## Claim ledger

Token extraction is `live-extract` (2026-06-22). `components_harvested: true`. Exact live evidence does not attach each token/component claim to a `data-omd-capture` selector. No per-claim live Proof map is recorded. Marketing homepage, pricing, brand CSS, login, Refero, and the philosophy-layer §14 reconstruction remain separate evidence domains.

| claim | evidence class |
|---|---|
| YAML colors / typography / spacing / rounded / shadow / harvested buttons, input, cards, badges, toggle | live-extract reconstruction from the source packet |
| tokens.colors.primary `#f06a6a` | catalog `primary_color` / asana.com/brand CSS |
| tokens.colors.brand-pink `#fd3ffd` | live homepage hero CTA |
| tokens.components.button-nav.* | live homepage nav CTA |
| tokens.components.input-default.* | app.asana.com/-/login |
| Ghost display font | Refero Tier 2 |
| §14 state rows | philosophy-layer reconstruction (HTML comment sections 10–15) |

## Capture selectors

The source does not record `data-omd-capture` selectors. None are invented here.

## Omitted unattributed curves

Exact cubic-bezier values from source §15, omitted from portable Foundations (names kept):

- `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)`
- `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` — matches `spec/omd-v0.1.md` template example `ease-exit`
- `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)`

These are unattributed. Duration tokens (`0ms` / `100ms` / `200ms` / `320ms`), easing names, signature-motion names/uses, and `prefers-reduced-motion: reduce` remain in portable Motion. B3 five-kind per-component computed gate remains on curve / animation-name / transition-property promotion beyond those tables.

## Omitted prompt-only values

§9 Agent Prompt Guide construction figures that remain omitted as prompt-only (not restored harvested tuples):

- Nav dropdown construction: 100px radius, `8px 24px` padding; white sticky header; right-aligned Get started — prompt-only padding kept here and marked not harvested in portable Typography + Nav CTA field note (E2a)

## Restored §9-only component tuples

§9 unique tuples restored to component field notes. Not omitted prompt-only values and not composition of already harvested tokens:

- Hero §9-only tuple restored to Hero Primary field note: subhead `20px / 400 / #646f79` with the black/ghost CTA pair. Not a Type-role row and not prompt-only composition of already harvested tokens
- Pricing-card §9-only tuple restored to Feature Card (White): plan name `24px / 500 / #0d0d0d`, price `36px / 400`
- Grey feature-card §9-only tuple restored to Tinted Surface Card: headline `24px / 500 / #0d0e10`, body `16px / 400 / #646f79`, coral badge

## Placeholder omission ledger

No `[FILL IN]` placeholders exist in the source; none are emitted.

## HTML comment (philosophy layer)

Source HTML comment: Interpretive claims (e.g. "The pill as brand DNA", "coral as permanent brand anchor") are editorial readings connecting observed design to Asana's positioning, not directly sourced Asana statements. Personas (§13) are fictional archetypes informed by publicly observable Asana user segments. Those interpretive claims are retained in portable body with adjacent complete B2a. Persona names, ages, cities, employers, and biographies are not copied here (D2).

## Proof notes

- tokens.source: `live-extract`; `components_harvested: true` preserved (A1c)
- Catalog logo Simple Icons slug `asana` is dual-destination: this identity ledger + portable Typography & Assets boundary sentence (E2a)
- Homepage `https://asana.com` is dual-destination: Experience Scope + this identity/surfaces/Tier 1 ledger (E2a)
- Catalog field `primary_color` destinations: identity + Scope token-note + Distinctive + Foundations Asana Coral / Primary. Hex `#f06a6a` also: Scope footer, Scope atmosphere, capture-bound, Font evidence Official product-use, §14 form-validation, Capture-record stay-on-row, Default Text Field error reason. Not Avoid (E2a)
- Token note is dual-destination: Experience Scope + this ledger (E2a)
- Homepage 2026-06-22 voice strings and date are dual-destination: portable Content Observed + this freshness/narrative ledger; the hero line is also in Experience Scope. Observed homepage voice is the three live strings only. Harvested CTA labels stay on the harvested CTA components. Pricing tier names stay with the pricing surface / derived pricing row. They are not homepage voice-observation. The derived copy-pattern table also quotes the H1 and is labeled derived, not Observed (E2a)
- `#27455c` destinations: Semantic color Dark feature band + Layout Grid and container (E2a)
- `#36a651` destinations: Distinctive + Semantic Sage “Not toggle-on” + Semantic Toggle-on green + §14 Success (task completed) + Capture-record stay-on-row + Toggle On component / field note (E2a)
- `#000000` destinations: Distinctive + Semantic Login input text + Semantic Ink “not pure `#000000`” + Default Text Field value + Default Text Field field note (E2a)
- `#0b0505` destinations: Semantic Hero-accent text + Hero Accent component value + Hero Accent field note (E2a)
- `#757677` destinations: Semantic Border Muted “Not login” + Semantic Login input border + Default Text Field border + Default Text Field field note + Secondary Outline field note (E2a)
- YAML `rounded.card` 20 destinations: Distinctive + capture-bound + Shape (YAML scale / role-label limiter / local-geometry restatement) + Feature Card field note (E2a)
- `8px 24px` destinations: Typography “not promoted” + Nav CTA field note + this omission ledger (E2a)
- Interpretive claims retained in portable body, each with adjacent complete B2a (`derived editorial implementation inference` / `not Asana-authored or a separately published UI specification`): Scope evidence-domain (four URLs); token-note coral/magenta/ink assignment; footer era-split not-a-merge; Scope visual-character extra names and compressed high-contrast / near-monochromatic / editorial-system / bold-black-pills / single-magenta-hero / signature-coral-still-in-brand-CSS; public-history-as-narrative including founding-cause / premise-to-clarity-and-public-writing / logo-evolution; category-expansion / three-dot / connective-tissue; Audience no-individual-personas-promoted / exclusion / observable-work-follows-three-tasks; Distinctive unmerge + flat-via-hairline + fallback-declared-only; five numbered principles and UI implications; capture-bound grouping of source §7 Do’s / harvested geometry / display-hero-string-not-collapsed; Avoid extra-name readings including login-6px-unmerged-from-Micro-4px and YAML-shadows-remain-named-levels; Semantic unmerged-role / signature-brand-hue / coral-blush-error-banner / dark-feature-band-may-use / near-black-with-warmth; Spacing both-records-kept / recorded-scale card-padding and section-gaps; Shape Micro-Standard-Comfortable-Modal-Pill-Full role labels / harvested-not-collapsed / local-geometry; Elevation hairline-not-shadow.card / table Use assignments; Elevation shadow-light / tint-band / no-atmospheric-depth; Motion character readings including essential-feedback-kept / omitted-unattributed-curves-not-promoted; Declared-only fallback-not-product-face; Unresolved display-hero both-strings-kept; Family font-use boundary / fallback-not-either-face; Type-role not-converted / unmerged tracking / nav-body-table-only / use-strings-restored; type-personality readings including whisper-weight-authority / light-authority; Hero Primary §9-only subhead/pair; Feature Card plan-name/price tuple; Tinted Surface Card headline/body/badge tuple; Assets Simple Icons identity-not-captured; Capture-record graph-not-adopted / extra characterizations including no-illustration / exactly-what's-needed / no-emoji / subtle-shimmer / fades-subtly; Capture-record named-product-pattern vs harvested-component split / form-validation-hex-stays / toggle-green-stays / empty-strings-not-extra-voice; Hero Accent / Secondary Outline / Nav CTA / Default Text Field / Sky Blue Badge / Toggle On / Feature Card / Tinted field notes; Layout kept-as-recorded; Layout not-a-gutter / not-universal-grid / generous / pill-as-rhythm / flat-separation / feature-immersion; Touch not-cross-viewport; Layout source-stated-sizes not newly-measured / collapsing-strategy / image-behavior; Content empty-state strings as state-contract not extra voice samples; Content forbidden-register list; Content voice + copy-pattern table (B2/B2a). Font Official product-use unresolved type sheet / Official distributed absence / Ghost loaded-source URL / complete product-microcopy guide are not current claims (D1). Scope public-history includes founding-cause / premise-to-clarity-and-public-writing / logo-evolution under adjacent complete B2a.
- Source §13 personas are fictional archetypes, not specific individuals. Portable Audience keeps the no-individual-personas-promoted exclusion boundary only. Persona-derived stakeholder groups are not Audience values. Names, ages, cities, employers, and biographies are not copied here (D2). Primary tasks come from homepage Get started, asana.com/pricing, and app.asana.com/-/login, not §13
- No generic `Focus` capture is promoted to `focus-visible` treatment; focus-visible rows carry no hex (B1)
- Uncaptured visual treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete
- Hero Primary / Hero Accent / Secondary Outline / Nav CTA / Pricing Card Secondary / Pricing Card Primary loading·error·success omitted; Default Text Field loading·success omitted; Toggle On loading·error·success omitted (C2)
- Feature Card / Tinted Surface Card / Coral Blush Badge / Sky Blue Badge: kind/map omitted (C4)
