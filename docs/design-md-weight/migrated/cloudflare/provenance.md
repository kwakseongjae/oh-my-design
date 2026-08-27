# Cloudflare provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/cloudflare/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | cloudflare |
| name | Cloudflare |
| country | US |
| category | backend-devops |
| homepage | https://www.cloudflare.com |
| primary_color | `#F6821F` |
| logo | type `simpleicons`, slug `cloudflare` |
| omd format (source) | 0.1 |
| tokens.source | design-system |
| tokens.extracted | 2026-06-08 |
| components_harvested | true |

Token note from source: Cloudflare Orange `#F6821F` is the singular brand + primary-action color; rationed to one or two places per screen. Warm near-black text, never pure `#000`. Dual-destination: Experience Scope + this identity ledger (E2a).

Catalog logo type `simpleicons` / slug `cloudflare` is dual: this identity ledger + portable Typography & Assets identity-only sentence DESIGN.md:262 (`Catalog logo metadata is Simple Icons identity (cloudflare)`) (E2a). Homepage `https://www.cloudflare.com` is dual-destination: Experience Scope DESIGN.md:9,13 + this identity/surfaces/Tier 1 ledger (E2a). Catalog `primary_color` `#F6821F` is dual identity metadata + portable Foundations Cloudflare Orange / Primary / Brand DESIGN.md:96 (also token-note Scope 11, §4 footer 13, Distinctive 42; not a single-hex merge) (E2a). `tokens.source: design-system` is dual Scope DESIGN.md:11 + this ledger (E2a). `github.com/cloudflare/kumo` is portable Scope DESIGN.md:9 only (not 13). `cloudflare.github.io/cf-ui` is dual Scope 9 + Font evidence 220. `developers.cloudflare.com/style-guide/components` is portable Scope 9 only.

No `ds.name` / `ds.url` / `ds.type` / `ds.description` fields exist on the source. None are invented here (A1c).

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-06 |
| added | 2026-06-06 |
| tokens.extracted | 2026-06-08 |
| Web research | 2026-06-06 |

Conflicts unresolved: none as a product-vs-library clash to pick a winner. Marketing orange (`#F6821F`, `--text-color-kumo-brand: #f6821f`) and kumo interactive `--color-kumo-brand` (blue) are documented as parallel evidence domains. §4 footer (live DOM getComputedStyle on cloudflare.com) and the HTML comment (cloudflare.com WebFetch unreachable; `color.cloudflare.design` ECONNREFUSED) are both kept. Preserved value pairs inside the portable file: YAML `primary-hover` `#E2700B` vs `primary-pressed` `#D9700F` vs body “approx” pairing; YAML `orange-tint` `#FDF3E7` vs body `#FBE6CC`; success `#2FB344` vs classic `#9BCA3E`; error `#BD2528` vs `#E1351D`; warning `#F6C549` vs `#FFC107`; info `#2C7CB0` vs `#0073AA`; muted `#717174` vs `#666666`; placeholder `#999999` vs `#A1A1A1`; hairline `#EDEDED` vs `#F0F0F0`; surface-alt `#F7F7F7` vs `#F5F5F5`; dark-bg `#15171A` vs `#1D1F20`; dark-surface `#262A2E` vs `#23272B`; YAML shadow `0px` form vs body `0` form; YAML Primary `36px` / `0 12px` / `8px` vs §4 large `40px` / `16px` / `8px` vs §9 example `40px` / `0 20px` / `6px`; §4 Dark CTA `8px` vs §9 hero CTA `6px`; YAML `rounded` full 9999 vs body `9999px`; eyebrow `0.06em` vs table header `0.04em`; YAML spacing without px vs body 12px / 96px; dialog 150ms vs `motion-fast` 120ms / `motion-standard` 200ms; toast live `#1D1F20` vs kumo `#FFFFFF`; switch on `#F6821F` vs kumo `#2C7CB0`. Neither side of a pair is chosen.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| marketing-live | product-surface | https://www.cloudflare.com | 2026-06-06 |
| kumo | design-system | github.com/cloudflare/kumo | 2026-06-06 |
| cf-ui | design-system | cloudflare.github.io/cf-ui | 2026-06-06 |
| style-guide | docs | developers.cloudflare.com/style-guide/components | 2026-06-06 |

The Cloudflare dashboard is named in the source as a denser product surface. No dashboard URL is recorded in the source. None is invented here.

## Sources

| id | kind | url | captured |
|---|---|---|---|
| marketing-live | product-surface | https://www.cloudflare.com | 2026-06-06 |
| kumo | design-system | github.com/cloudflare/kumo | 2026-06-06 |
| cf-ui | design-system | cloudflare.github.io/cf-ui | 2026-06-06 |
| style-guide | docs | developers.cloudflare.com/style-guide/components | 2026-06-06 |

### Tier 1

- https://www.cloudflare.com (live production marketing site, verified via live DOM getComputedStyle)
- github.com/cloudflare/kumo (source TSX + `theme-kumo.css` design tokens)
- cloudflare.github.io/cf-ui (legacy styleguide)
- developers.cloudflare.com/style-guide/components (docs Style Guide)

### Tier 2 / unreachable at write time

- color.cloudflare.design (“Color by Cloudflare Design”) — HTML comment: unreachable (ECONNREFUSED / classifier unavailable)
- cloudflare.com WebFetch — HTML comment: unreachable at write time
- developers.cloudflare.com design-system — named as typography grounding in the HTML comment
- blog.cloudflare.com/dark-mode — named as dark-mode confirmation
- brandcolors.net/b/cloudflare, brandpalettes.com, schemecolor.com — named as public brand-color references for Orange `#F6821F` / logomark gradient, not first-party token sheets

### Narrative (not interface tokens)

Widely documented public facts recorded in the source HTML comment: founded 2009 by Matthew Prince, Lee Holloway, and Michelle Zatlyn out of Project Honey Pot; NYSE NET 2019; mission “help build a better Internet.” Dual-destination for the founding year, founders, ticker, and mission line: portable Experience Scope + this ledger (E2a). Official history URLs beyond those named above are not invented.

## Claim ledger

Claims use YAML / kumo / live cloudflare.com as named in the source. Token extraction is `design-system` (2026-06-08). `components_harvested: true`.

| claim | surface |
|---|---|
| tokens.colors.primary / primary-hover / primary-pressed / brand / brand-gradient-end | marketing-live + public brand-color refs |
| tokens.colors.canvas / surface / surface-alt / foreground / body / muted / placeholder / hairline / border-strong / on-primary / orange-tint | interpretive reconstruction (HTML comment) + YAML |
| tokens.colors.success / error / warning / info | interpretive reconstruction (HTML comment) + YAML |
| tokens.colors.dark-bg / dark-surface / dark-border / dark-text | interpretive reconstruction (HTML comment) + YAML |
| tokens.typography.family.sans / mono | design-system docs named in HTML comment |
| tokens.typography.display-hero … code-mono | YAML + §3 table |
| tokens.spacing.xs … section | YAML |
| tokens.rounded.sm / md / lg / xl / full | YAML + kumo ladder |
| tokens.shadow.subtle / raised / floating / modal | YAML |
| tokens.components.button-* / icon-button | kumo + marketing-live |
| tokens.components.input / input-mono / select / switch / checkbox | kumo + marketing-live |
| tokens.components.card / stat-card / surface / badge / status-pill / tabs / table | kumo + marketing-live |
| tokens.components.dialog / toast / tooltip / code-block | kumo + marketing-live |

## Capture selectors

The source does not record `data-omd-capture` selectors. None are invented here.

## Omitted unattributed curves

Exact cubic-bezier values from source §15, omitted from portable Foundations (names and uses kept). HTML comment classifies motion tokens as interpretive reconstructions. `ease-enter` / `ease-exit` / `ease-standard` match `spec/omd-v0.1.md` example-table values:

- `ease-enter` `cubic-bezier(0.0, 0.0, 0.2, 1)`
- `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)`
- `ease-standard` `cubic-bezier(0.4, 0.0, 0.2, 1)`
- `ease-out-soft` `cubic-bezier(0.16, 1, 0.3, 1)`

Duration tokens (`motion-instant` 0ms / `motion-fast` 120ms / `motion-standard` 200ms / `motion-emphasis` 300ms / `motion-page` 350ms), dialog-local 150ms, easing names/uses, signature-motion prose, and `prefers-reduced-motion` remain in portable Motion. B3 five-kind per-component computed gate remains on curve / animation-name / transition-property promotion beyond those tables.

## Proof notes

- tokens.source: `design-system`; `components_harvested: true`
- No `ds.type` on source; none invented (A1c)
- Catalog logo Simple Icons slug `cloudflare` is dual-destination: this identity ledger + portable Typography & Assets boundary sentence DESIGN.md:262 (E2a)
- Homepage `https://www.cloudflare.com` is dual-destination: Experience Scope DESIGN.md:9,13 + this identity/surfaces/Tier 1 ledger (E2a)
- `primary_color` `#F6821F` is dual-destination: identity + portable Foundations Cloudflare Orange DESIGN.md:96 (E2a)
- Token note is dual-destination: Experience Scope DESIGN.md:11 + this ledger (E2a)
- `tokens.source: design-system` is dual-destination: Experience Scope DESIGN.md:11 + this ledger (E2a)
- kumo URL `github.com/cloudflare/kumo` is dual-destination: Experience Scope DESIGN.md:9 (not 13) + this surfaces/sources/Tier 1 ledger (E2a)
- cf-ui URL `cloudflare.github.io/cf-ui` is dual-destination: Experience Scope DESIGN.md:9 + Font evidence 220 + this surfaces/sources/Tier 1 ledger (E2a)
- style-guide URL `developers.cloudflare.com/style-guide/components` is dual-destination: Experience Scope DESIGN.md:9 (not 13) + this surfaces/sources/Tier 1 ledger (E2a)
- Founding 2009 / Prince, Holloway, Zatlyn / NYSE NET 2019 / mission line are dual-destination: Experience Scope DESIGN.md:17 + Content DESIGN.md:811 (mission “to help build a better Internet”) + this narrative ledger (wording here is “help build a better Internet”) (E2a)
- Interpretive claims in source (orange-as-category-differentiation; whitespace-earns-trust; borders-before-shadows; warm-not-cold; eight §12 principles; voice as “technical but human”) are editorial readings of the reconstruction, not official Cloudflare UI specifications. Portable adjacent complete B2a (`derived editorial implementation inference` / `not Cloudflare-authored or a separately published UI specification`) after the 2026-08-25 wave16 sol resubmit (prior dest maps SUPERSEDED; this is not an F1/F2/F3 completeness claim, E2c): DESIGN.md:9 (this-contract-covers), 13 (keep-orange-led-identity), 15 (must-not-collapse-second-grounding-path), 17 (public-facts-not-interface-tokens), 19 (atmosphere extras), 21 (causal extras), 27 (Primary tasks named jobs), 36 (Audience extras), 40 (Distinctive unmerged), 51 (Principles named stems+tails), 62 (capture-bound named Do’s), 74 (Avoid named Don’ts), 77 (Avoid kumo-blue-split), 83 (Avoid fallback-boundary), 92 (semantic unmerge lede), 94 (grey/semantic/dark evidence domains), 124 (component-fields-not-general-inks), 126 (switch on-state split), 130 (Spacing YAML-without-px), 140 (Shape §5 local scale), 148 (local geometry), 171 (tooltip shadow-lg), 173 (elevation reading), 177 (motion reconstruction-vs-omission), 189 (150ms dialog-local), 200 (signature motions / Focus not focus-visible), 216 (Font evidence-class), 233 (Family stacks), 235 (type-character extras), 239 (unitless lineHeight), 258 (0.04em vs 0.06em), 262 (Simple Icons identity-only), 264 (Assets logomark-never-recolors / partner-logos grayscale-or-mono), 271 (capture-record preserve), 290 (applicability/C2/C4), 316 (Primary yaml/§4/§9 not averaged), 373 (Ghost omitted L/E/S), 417 (Compact omitted L/E/S), 437 (Icon omitted L/E/S), 451 (Dark CTA YAML-type-not-invented), 460 (Dark CTA omitted L/E/S), 462 (Dark CTA radii both kept), 488 (tab active not Core row), 517 (Text Field omitted loading/success), 542 (Mono Input omitted loading/success), 566 (Select omitted loading/success), 591 (switch split not Core row), 597 (radio YAML-type-not-invented), 625 (recessed not white panel), 638 (marketing-feature-card YAML-type-not-invented), 647 (Marketing Feature Card omitted L/E/S), 672 (table hover not focus-visible), 714 (sibling pills not merged), 742 (toast fills both kept), 762 (Pagination YAML-type-not-invented), 771 (Pagination omitted L/E/S), 789 (Layout YAML-without-px), 791 (whitespace), 806 (Layout logomark-never-recolors / partner-logos grayscale-or-mono), 813 (voice table extras), 827 (no-synthetic-voice) (B2/B2a)
- Source HTML comment limiter on grey / semantic / dark-mode hex, component geometry, and motion tokens is dual-destination: portable Scope DESIGN.md:15 + Semantic 94 + Motion 177 + Font 216/220 + Named gaps 866 + this ledger (E1, E2a)
- Source §13 personas are fictional archetypes informed by publicly described Cloudflare user segments, not specific individuals. Portable Audience keeps the exclusion boundary only. Names, ages, cities, employers, and biographies are not copied here (D2). Primary tasks come from YAML `use` / §4 Use strings (Get started / Add site / Save / Deploy; DNS records and proxy toggle; Overview / Analytics / DNS / SSL and analytics tiles), not §13
- Named `Focus` `0 0 0 3px rgba(246,130,31,0.2)` is not `focus-visible` treatment evidence (B1). kumo `focus-visible:ring-2 focus-visible:ring-kumo-brand` is recorded in Primary Button anatomy; kumo-brand is blue
- Uncaptured visual treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete
- No `[FILL IN]` placeholders exist in the source; none are emitted
- Current-class after 2026-08-25 wave16 sol resubmit (not a completeness claim, E2c; new F3 not run). C4: `Type: omitted` / `Kind: omitted` fields are not emitted; Badge / Status Pill have no `Kind: non-interactive`. Marketing Feature Card Kind: interactive from the named hover-lift cue; Pagination Kind: interactive as numbered compact buttons. C1/C2: Primary Save/Deploy and Destructive Delete/Purge error/success applicable with treatment omitted; Ghost and Dark CTA L/E/S omitted at the unresolved destination boundary (not N/A as navigation); Text/Mono/Select error applicable, loading/success omitted (not N/A from capture absence). YAML `type: card` cardinality is 6: panel `Type: card` 617, YAML surface `(type: card)` 625, stat 652, table 664, code-block 677, tooltip 747. Signature-motion relation tails restored at DESIGN.md:202–205 (hover-lift interactive cue; accessibility-first never suppressed; leaving quicker than arriving; never a hard swap so operators perceive the change). The do-not-replace imagery ban is not in the portable file.
