# Dell provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, evidence classes, and omission record for the T2 migration of `web/references/dell/DESIGN.md`. The canonical source remains that file until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | dell |
| name | Dell |
| country | US |
| category | consumer-tech |
| homepage | https://www.dell.com |
| primary_color | `#0076CE` |
| logo | `type: simpleicons`, `slug: "dell"` |
| omd format (source) | 0.1 |
| tokens.source | prose-derived |
| tokens.extracted | 2026-06-09 |
| components_harvested | true |

`logo.type: simpleicons` is a third-party icon-set pointer in the catalog record, not a Dell-supplied asset file. The portable document says so rather than promoting it as an official Dell asset.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-06 |
| added | 2026-06-06 |
| tokens.extracted | 2026-06-09 |

Conflicts unresolved: one, recorded below under **Evidence-class conflict**.

## Sources

Reproduced from the source's own `OmD v0.1 Sources — Dell` footer block.

| Kind | Source | What it establishes |
|---|---|---|
| Brand identity (search-corroborated) | brandpalettes.com, designyourway.net, Dell brand guideline references | Dell Blue `#0076CE`, Pantone 2174 C, RGB (0, 118, 206) |
| Official design system | delldesignsystem.com | Confirmed to exist and to document Color and Typography foundations. Exact internal token hexes were image/JS-rendered and not text-extractable |
| Typeface assignment (search-corroborated) | delldesignsystem.com typography, designyourway.net logo/font history | Roboto as Dell's primary digital typeface; Dell Replica (a custom cut of LL Replica) for corporate/marketing identity |
| Live product surface (WebFetch) | https://www.dell.com | White-dominant surfaces, mega-menu navigation, card-based product grids, clear CTAs ("Purchase", "Learn More", "Explore"), dark-text-on-light |
| Tier 1 (as declared in §4) | https://www.dell.com | "live production site, verified via live DOM getComputedStyle" |

### Evidence-class conflict

The source carries two incompatible statements about the same values, and the migration preserves both rather than resolving one away:

- §4 footer: `**Tier 1 sources:** https://www.dell.com (live production site, verified via live DOM getComputedStyle).`
- Footer sources block: `exact internal token hexes were image/JS-rendered and not text-extractable, so neutral/semantic scales here are reasoned, brand-consistent values anchored to the verified Dell Blue and white-dominant commerce aesthetic.`

The frontmatter's own `tokens.source: prose-derived` agrees with the second. The portable document therefore states the weaker, honest class — one corroborated brand color plus a confirmed dark-on-light live surface, with the neutral/semantic/component/state/duration values as reasoned anchors — and records the live-DOM sentence as the source's own claim rather than adopting it as the class of every value. No value is deleted on account of this conflict.

### Interpretive-claim disclosure carried by the source

`Interpretive claims (e.g., "the page is the order desk", direct-to-customer build-to-order as design DNA) are editorial readings grounded in Dell's documented 1984 direct-sales founding history, not verbatim Dell statements.`

This is the source's own B2-style qualifier. The portable document restates it adjacent to the affected sentences rather than leaving it only here.

## Source token ledger

Frontmatter `tokens` block, carried verbatim so that byte-level verification stays possible.

```yaml
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#0076CE"
    primary-hover: "#0063AF"
    primary-active: "#00538F"
    blue-tint: "#E5F1FA"
    canvas: "#ffffff"
    band: "#F7F8FA"
    heading: "#11141a"
    navy: "#0E1B2C"
    body: "#4C545E"
    caption: "#6B7480"
    placeholder: "#9AA3AE"
    label: "#22262B"
    border: "#DDE1E6"
    border-strong: "#C5CBD3"
    fill: "#EEF0F3"
    success: "#008A00"
    success-bg: "#E6F4E6"
    error: "#CE2029"
    warning: "#B85C00"
    on-primary: "#ffffff"
  typography:
    family: { sans: "Roboto", mono: "Roboto Mono" }
    display-hero: { size: 48, weight: 700, lineHeight: 1.17, tracking: -0.5, use: "Marketing hero headlines" }
    display-lg:   { size: 36, weight: 700, lineHeight: 1.22, tracking: -0.25, use: "Landing section headers" }
    h1:           { size: 28, weight: 700, lineHeight: 1.29, use: "Page titles, PDP product name" }
    h2:           { size: 22, weight: 500, lineHeight: 1.36, use: "Section headings, card titles" }
    h3:           { size: 18, weight: 500, lineHeight: 1.44, use: "Sub-sections, spec group labels" }
    subtitle:     { size: 16, weight: 500, lineHeight: 1.50, use: "List headers, emphasized labels" }
    body-lg:      { size: 16, weight: 400, lineHeight: 1.50, use: "Descriptions, marketing copy" }
    body:         { size: 14, weight: 400, lineHeight: 1.43, use: "Standard reading text, spec rows" }
    body-sm:      { size: 13, weight: 400, lineHeight: 1.38, use: "Secondary info, table cells" }
    caption:      { size: 12, weight: 400, lineHeight: 1.33, tracking: 0.2, use: "Legal, fine print, timestamps" }
    price:        { size: 28, weight: 700, use: "Product price, tabular numerals" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 4, md: 8, lg: 8, full: 9999 }
  shadow:
    subtle: "0 1px 3px rgba(17,20,26,0.08)"
    standard: "0 4px 12px rgba(17,20,26,0.10)"
    elevated: "0 8px 24px rgba(17,20,26,0.14)"
    modal: "0 8px 32px rgba(17,20,26,0.20)"
  components:
    button-primary: { type: button, bg: "#0076CE", fg: "#ffffff", radius: 4, padding: "0 24px", font: "14px/500 Roboto", use: "Primary commerce CTA (Add to Cart, Buy Now)" }
    button-secondary: { type: button, bg: "#ffffff", fg: "#0076CE", radius: 4, padding: "0 24px", font: "14px/500 Roboto", use: "Secondary action (Compare, Learn More)" }
    button-tertiary: { type: button, bg: "transparent", fg: "#0076CE", radius: 4, padding: "0 8px", font: "14px/500 Roboto", use: "Low-emphasis inline action (View details, Remove)" }
    button-dark: { type: button, bg: "#11141a", fg: "#ffffff", radius: 4, padding: "0 24px", font: "14px/500 Roboto", use: "High-contrast marketing CTA" }
    button-danger: { type: button, bg: "#CE2029", fg: "#ffffff", radius: 4, padding: "0 24px", font: "14px/500 Roboto", use: "Destructive confirmation" }
    input: { type: input, bg: "#ffffff", fg: "#22262B", radius: 4, padding: "10px 12px", font: "14px/400 Roboto", use: "Standard form input" }
    product-card: { type: card, bg: "#ffffff", radius: 8, padding: "16px", use: "Grid product tile" }
    promo-card: { type: card, bg: "#0E1B2C", fg: "#ffffff", radius: 8, padding: "24px", use: "Dark promotional banner card" }
    badge-deal: { type: badge, bg: "#CE2029", fg: "#ffffff", radius: 4, padding: "2px 8px", font: "12px/700 Roboto", use: "Save $X, Clearance, Doorbuster" }
    badge-instock: { type: badge, bg: "#E6F4E6", fg: "#008A00", radius: 4, padding: "2px 8px", font: "12px/500 Roboto", use: "Availability indicator" }
    badge-new: { type: badge, bg: "#E5F1FA", fg: "#0076CE", radius: 4, padding: "2px 8px", font: "12px/700 Roboto", use: "Newly released product" }
    badge-neutral: { type: badge, bg: "#EEF0F3", fg: "#4C545E", radius: 4, padding: "2px 8px", font: "12px/500 Roboto", use: "Category tags, metadata chips" }
    tab: { type: tab, bg: "#ffffff", fg: "#6B7480", font: "14px/500 Roboto", active: "2px bottom border #0076CE, text #11141a", use: "PDP sections, account dashboard" }
    toast: { type: toast, bg: "#11141a", fg: "#ffffff", radius: 4, padding: "12px 16px", font: "14px/400 Roboto", use: "Transient confirmation" }
    dialog: { type: dialog, bg: "#ffffff", fg: "#11141a", radius: 8, padding: "24px", use: "Configuration confirm, cart review, sign-in" }
    toggle: { type: toggle, bg: "#0076CE", radius: 9999, use: "Boolean preferences (on track blue, off #C5CBD3)" }
  components_harvested: true
```

Ledger notes:

- `tab.active: "2px bottom border #0076CE, text #11141a"` and `toggle.use: "Boolean preferences (on track blue, off #C5CBD3)"` are the only places the ledger records an interaction/selection value; both also appear in the portable body's Tabs and Toggle entries.
- `button-dark.use: "High-contrast marketing CTA"` (ledger) and the body's "High-contrast CTA on light marketing bands" are two wordings of the same use. The body wording is the one carried into the portable document; the ledger wording is preserved here.
- Every ledger `type:` value — `button`, `input`, `card`, `badge`, `tab`, `toast`, `dialog`, `toggle` — is carried per component in the portable document as `Type (source)`, so the primitive distinction is not collapsed into `Kind: interactive`.
- `rounded.md: 8` and `rounded.lg: 8` are the same value under two names in the source. The portable Shape scale states 8px once, as the container radius.

## Evidence class per portable claim

| Portable claim | Class |
|---|---|
| `#0076CE`, Pantone 2174 C, RGB (0, 118, 206) | Search-corroborated brand identity |
| Roboto as product UI face; Dell Replica as corporate/marketing face | Search-corroborated, plus the confirmed existence of delldesignsystem.com typography documentation |
| White-dominant surfaces, dark text on light, mega-menu, card-based product grids, CTA labels | Live WebFetch of https://www.dell.com |
| Neutral scale, semantic colors, component values, type metrics, spacing, shape, elevation, product states, motion durations | Reasoned, brand-consistent values anchored to the verified Dell Blue and the white-dominant commerce surface. `tokens.source: prose-derived` |
| "The page is the order desk", direct-to-customer build-to-order as design DNA | Editorial reading, disclosed as such by the source's own footer note |
| The migration's own editorial readings — the Scope boundary, the Primary-tasks selection, the Audience restriction, the Distinctive traits and Avoid lists, the Principles framing, the Foundations value-class split, the component-bound unmerged fields, the elevation reading, the font-evidence reading, the ratio-versus-px reading, the Assets priority and boundary, every §4 component role / kind / state-applicability judgment including the Badge and Spec Table non-interactive kinds, the Density trade, and the Content voice and per-context contract | Derived editorial implementation inference. Not Dell-authored, not a separately published UI specification, and not covered by the source's footer note either — that note names two examples, while this class is the migration's and is wider. Each of these carries the qualifier adjacent to itself in the portable body (19 places) |
| Removal of the four easing tokens and curves | Migration disposition, not a Dell statement about Dell's own motion. Qualified in its own words in §2 Motion rather than with the editorial-inference form |

## Omission ledger

Values and blocks removed rather than carried, recorded here so nothing disappears silently.

| Removed | Where it was | Reason |
|---|---|---|
| `ease-enter` → `cubic-bezier(0.0, 0.0, 0.2, 1)` | §15 Easings | Unsourced curve. Nothing in the sources block, the frontmatter token ledger, or the live fetch records a Dell easing value. Byte-identical to the example row at `spec/omd-v0.1.md:266` — a template example copied in as if observed |
| `ease-exit` → `cubic-bezier(0.4, 0.0, 1, 1)` | §15 Easings | Unsourced curve, and byte-identical to the example row at `spec/omd-v0.1.md:267` — a template example copied in as if observed |
| `ease-standard` → `cubic-bezier(0.4, 0.0, 0.2, 1)` | §15 Easings | Unsourced curve, and byte-identical to the example row at `spec/omd-v0.1.md:268` — a template example copied in as if observed |
| `ease-emphasized` → `cubic-bezier(0.2, 0.0, 0, 1)` | §15 Easings | Unsourced curve. Not present in the template table, so template copying is not established for this one |
| Easing-token references inside the five signature motions (`motion-standard / ease-enter`, `motion-fast / ease-exit`, `motion-standard / ease-standard`, `motion-slow / ease-emphasized`) | §15 Signature motions | The token names carried nothing but the removed curves, and Core v2 forbids a component referencing an unresolved token. The signature motions themselves are kept, with their duration tokens intact |
| §13 personas — three named archetypes with age, city, occupation, and behaviour | §13 | Fictional archetypes, labelled as such by the source. Not promoted and not re-recorded here, per the migration rulebook's persona clause. The one product-surface string they contained, `"Save Quote"`, is recorded in the migration log rather than promoted from a fictional context |
| §9 quick color reference, example component prompts, iteration guide | §9 | Tool-facing prompt wrappers and restatements. Every hex, size, radius, and rule in them already exists in §2, §3, §4, §5, or §7; the migration log records the per-value check |

Nothing else was dropped. Durations, the reduced-motion rule, and the signature motions are retained because the approved verdict scopes motion deletion to unsourced curves only.

## Proof notes

- `components_harvested: true`; 16 component records in the ledger, 11 component entries in the portable body. The five `button` records collapse into one Button with five variants and the four `badge` records into one Badge with four variants, taking the 16 ledger records to nine body entries; the body adds Configuration Card and Spec Table, which the ledger does not carry, for 11.
- The source records no `focus-visible` state anywhere. The input's `Focus:` treatment — border `#0076CE`, ring `0 0 0 3px rgba(0,118,206,0.2)` — is kept in the portable body as its own source-labelled row and is not promoted into a `focus-visible` treatment.
- State applicability in the portable body is judged by what each control means in this storefront. Missing evidence omits a visual treatment; it never makes a state `not-applicable`. The three `not-applicable` rows in the document are all on Tabs and all cite the source's own routing of loading, error, and success to other surfaces.
- The portable body does not claim complete state coverage.
- No accessibility audit, contrast measurement, runtime conformance test, or license grant is part of this reference.
