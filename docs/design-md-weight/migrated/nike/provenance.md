# Nike provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/nike/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | nike |
| name | Nike |
| country | US |
| category | ecommerce |
| homepage | https://www.nike.com |
| primary_color | `#111111` |
| logo | type `simpleicons`, slug `nike` |
| omd format (source) | 0.1 |
| tokens.source | prose-derived |
| tokens.extracted | 2026-06-09 |
| components_harvested | true |
| verified | 2026-06-06 |
| added | 2026-06-06 |

Catalog homepage exact `https://www.nike.com` (no trailing slash) is dual-destination: portable Experience Scope + this identity ledger (E2a). Catalog `primary_color` `#111111` is dual: this identity row + portable Scope keep-off + `tokens.colors.ink` (E2a). Catalog logo type `simpleicons` / slug `nike` is dual: this identity row + portable Typography & Assets (E2a). It is not a captured first-party mark file.

`tokens.source: prose-derived`, `tokens.extracted: 2026-06-09`, `components_harvested: true`, `omd: "0.1"`, `verified`, and `added` are this ledger (A1c). Portable Scope restates `tokens.source` is `prose-derived` as the source's own bound.

## Freshness

| Event | Date |
|---|---|
| verified (YAML) | 2026-06-06 |
| added | 2026-06-06 |
| tokens.extracted | 2026-06-09 |
| footer Verified | 2026-06-06 |
| sibling Inspected | 2026-06-06 |

Conflicts unresolved (source footer): none. Volt exact hex varies by surface (`#d8ff00` product / `#cdfb40` UI accent); both retained. That pair is dual: portable Semantic color + this freshness note (E2a).

A second conflict is preserved rather than resolved: the visible source footer and HTML comment record live fetch HTTP 403 (bot-blocked) and representative-not-computed-style tokens; the sibling `.verification.md` records a playwright getComputedStyle live inspect on the same date. The portable body keeps the source-body 403 writing. Sibling measurements stay in the sibling section below.

Verified line from the source footer: **Verified:** 2026-06-06 (token-level from Nike brand corpus + nike.com observation). This freshness row is provenance-only — the portable body does not restate the footer date. The HTTP 403 bound is a separate dual (portable Scope / Font evidence / Named gaps + this ledger) (E2a).

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | storefront | https://www.nike.com | 2026-06-06 |

YAML homepage identity is `https://www.nike.com` (no trailing slash). Portable Scope and this surfaces row use that exact literal (E2a).

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home | product-surface | https://www.nike.com | 2026-06-06 |

### Tier 1

- https://www.nike.com (live production site). Source footer: nike.com homepage/PLP/PDP visual language; Nike wordmark (Futura ND Nike 365). Live fetch returned HTTP 403 (bot-blocked); tokens grounded in Nike's documented black/white + Volt system and condensed-display typography.

Home URL is dual-destination with portable Experience Scope (E2a).

### Tier 2

Source footer names these as typography-history corroboration, not interface-token sources:

- designyourway.net, fontsinuse.com (footer short form)
- designyourway.net/blog/nike-font
- fontsinuse.com/uses/14239/nike-website-2016
- fontyouneed.com / fontinlogo.com

These URLs stay this ledger. They are not promoted as official Nike type-specimen pages.

### Narrative (not interface tokens)

Source HTML comment: Brand narrative facts (Blue Ribbon Sports 1964, renamed Nike 1971, Swoosh by Carolyn Davidson for $35, Bowerman waffle sole, Wieden+Kennedy "Just Do It" 1988) are widely documented public history. Dual portable Scope (under adjacent complete B2a, narrative rather than interface tokens) + this ledger (E2a).

Volt popularized in elite running and the 2012 Olympics; heritage orange `#fa5400` noted as packaging/legacy, not core UI accent. Dual portable Scope / Semantic color + this ledger (E2a).

## Sibling verification file (E2)

`web/references/nike/.verification.md` exists (dotfile; confirmed with a direct path check, not a glob that hides dotfiles) and was read in full. It is a separate canonical file, not the migration input. No value in it was promoted into the portable body that the legacy `DESIGN.md` did not already establish.

- **Inspected:** 2026-06-06
- **Method (verbatim):** playwright getComputedStyle (live DOM) on the production site
- **Sources:** https://www.nike.com

Sibling raw samples (kept here; not portable-body facts):

- live www.nike.com body text: color `#ffffff`, font 16px, family Helvetica Now Text
- live www.nike.com page background: color `#111111`
- live www.nike.com root background: color `#000000`
- live www.nike.com heading: color `#ffffff`, font 16px, / 500, family Helvetica Now Display Medium
- live www.nike.com primary button: color `#1f1f21`, background `#ffffff`, border-radius 30px, height 46px, font 16px, / 500
- live www.nike.com link: color `#ffffff`

Sibling-only strings that the visible source body does not establish as token values: `#000000` as root background; `#1f1f21` as primary-button text; `border-radius 30px`; height `46px`; family label `Helvetica Now Display Medium`. Those remain this sibling section. They are not rewritten as portable Foundations or component fields.

Sibling method (playwright getComputedStyle, live DOM as source of truth) conflicts with the visible source footer/HTML comment (HTTP 403; representative, not a single scraped DOM). The conflict is preserved. The portable body follows the source body.

Values the sibling corroborates that the source body already carries (Helvetica Now Text, `#ffffff`, `#111111`, 16px / 500) stay attributed to the source body.

## Claim ledger

Claims use the source YAML token paths. Surface for all rows: nike.com storefront as the source describes it (prose-derived; source-body 403).

| claim | surface |
|---|---|
| tokens.colors.ink | nike.com |
| tokens.colors.canvas | nike.com |
| tokens.colors.volt | nike.com |
| tokens.colors.volt-ui | nike.com |
| tokens.colors.orange-heritage | nike.com |
| tokens.colors.sale | nike.com |
| tokens.colors.error | nike.com |
| tokens.colors.success | nike.com |
| tokens.colors.info | nike.com |
| tokens.colors.warning | nike.com |
| tokens.colors.grey-50 | nike.com |
| tokens.colors.grey-100 | nike.com |
| tokens.colors.grey-200 | nike.com |
| tokens.colors.grey-300 | nike.com |
| tokens.colors.grey-500 | nike.com |
| tokens.colors.grey-600 | nike.com |
| tokens.colors.grey-700 | nike.com |
| tokens.typography.family.sans | nike.com |
| tokens.typography.family.mono | nike.com |
| tokens.typography.hero | nike.com |
| tokens.typography.display-lg | nike.com |
| tokens.typography.display-md | nike.com |
| tokens.typography.h1 | nike.com |
| tokens.typography.h2 | nike.com |
| tokens.typography.subtitle | nike.com |
| tokens.typography.body-lg | nike.com |
| tokens.typography.body | nike.com |
| tokens.typography.price | nike.com |
| tokens.typography.caption | nike.com |
| tokens.typography.label | nike.com |
| tokens.spacing.xs / sm / md / base / lg / xl | nike.com |
| tokens.rounded.sm / md / lg / full | nike.com |
| tokens.shadow.toast | nike.com |
| tokens.components.button-primary | nike.com |
| tokens.components.button-inverted | nike.com |
| tokens.components.button-secondary | nike.com |
| tokens.components.button-volt | nike.com |
| tokens.components.input-default | nike.com |
| tokens.components.input-search | nike.com |
| tokens.components.product-card | nike.com |
| tokens.components.surface-card | nike.com |
| tokens.components.promo-pill | nike.com |
| tokens.components.sale-pill | nike.com |
| tokens.components.filter-chip | nike.com |
| tokens.components.toast | nike.com |
| tokens.components.dialog | nike.com |

## Omission ledger

Disposition mentions. These rows name the dropped field kind; they do not re-host the dropped content as a fact.

| Item | Disposition |
|---|---|
| §13 페르소나 3인 (이름·나이·도시·동기·소속 분류 포함) | Deleted. The source's own header labels them fictional archetypes informed by publicly described athletic-retail segments, not individual people. Not promoted to Audience or primary-tasks, and not re-hosted here as names, ages, cities, motivations, or affiliation classifications (D2, D2a). |
| §9 Agent Prompt Guide — construction prompts and iteration guide | Deleted. Tool-facing copy-paste prompts. Values they restated are already in Foundations / Components / Experience. See the §9 deletion check below. |
| §15 easing curve values — `cubic-bezier(0.0, 0.0, 0.2, 1)` (`ease-enter`), `cubic-bezier(0.4, 0.0, 1, 1)` (`ease-exit`), `cubic-bezier(0.4, 0.0, 0.2, 1)` (`ease-standard`) | Removed from the portable body as unsourced template curves; kept here verbatim. `cubic-bezier(0.4, 0.0, 1, 1)` is the example value that `spec/omd-v0.1.md` carries and defines as a non-brand implementation default that must not be moved into a reference. The other two match that same template table. The roles and their uses stay in the portable body. Unique `ease-power` `cubic-bezier(0.2, 0.8, 0.2, 1)` is kept in portable Motion as a named source writing. |

§9 deletion check (A3). Every value §9 names was confirmed present elsewhere in the portable body before the section was dropped. Primary / Ink `#111111` — Semantic color + Application rules. Background `#ffffff` — Semantic color. Volt `#d8ff00` — Semantic color + Application rules. Secondary text `#757575` — Grey 600. Caption / placeholder `#8d8d8d` — Grey 500. Border `#e5e5e5` — Grey 200. Sale / Error `#d43f21` — Sale. Success `#0a8800` — Success Green. Inverted surface `#111111` with white text — Inverted Surface. Product card square 1:1, no border, no shadow, 12px gap, 'Just In' 13px `#d43f21`, title 16px/500 `#111111`, category 15px `#757575`, price 16px/500, hover black pill Add to Bag — Product Card + Status Pill + Motion quick-add. Primary CTA `#111111` / white / 16px/500 / 9999px / 48px / 24px padding / hover `#757575` / invert on black — Primary + Inverted. PDP size selector 44px / 1.5px `#e5e5e5` / 4px / 15px / selected `#111111` / sold out `#cccccc` diagonal strike — Size Selector. Hero full-bleed, gradient `rgba(0,0,0,0.5)`, UPPERCASE condensed 64px/700 white at 0.95, white pill CTA — Editorial Card + Type roles Hero `64-88px` + Inverted. Filter chips white pill, 1px `#e5e5e5`, 8px/16px, 15px, selected `#111111` — Filter Chip.

## Derived editorial inventory

Portable `DESIGN.md` carries 25 complete B2a qualifications. This table is 25 data rows. Preamble sentences on this page are not portable qualifications.

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience Scope ¶1 | Homepage as this contract's storefront surface; catalog `primary_color` `#111111` off a replacement of `tokens.colors.ink`; 403 / representative-not-computed-style bound as the source wrote it; values stay attached |
| Experience Scope ¶2 | Athletic-minimalism-as-sales-engine / brand-magazine / contrast-as-a-system / rationed-color / motion-implied-even-in-static-layout / fast-premium-kinetic atmosphere |
| Experience Scope ¶3 | Founding-and-identity narrative as context that does not by itself supply interface tokens; closing refuses / minimalism-meets-adrenaline sentence kept as one unit |
| Primary tasks | Selecting the three recorded surfaces and controls as primary tasks; not from the Personas section |
| Audience | Biography-drop (no name, age, city, motivation, or affiliation classification); source-named Members and the athlete |
| Distinctive traits | Grouping the recorded Key Characteristics as the distinctive layer |
| Principles | The eight numbered items, including "one spark per view" as the source HTML comment's editorial example |
| Application rules | The seven Do rules and the reasons attached |
| Avoid | The seven Don't rules and the reasons inside them |
| Foundations Semantic color | Role names from the source's labels; sale off error; volt off volt-ui; ink off Grey 900 alias; catalog `primary_color` as a second record; grey-50 off grey-100; Volt-hex-varies pair retained; storefront value not relabeled as a house palette for every Nike surface; info `#1463ff` "focus rings on some surfaces" as generic Focus rather than `focus-visible` treatment |
| Foundations Spacing | Unitless steps unmerged from matching type sizes, paddings, gutters, and §5 48/64/96 writings |
| Foundations Shape | `sm: 4` / `md: 8` / `lg: 12` / `full: 9999` unmerged; Square `0px` kept as a §5 named use rather than a YAML key |
| Foundations Elevation | Contrast-and-scale hierarchy as the elevation rule; YAML toast shadow off the two §6-only shadows; sticky-header blur as a named effect rather than a motion token |
| Foundations Motion | §15 as representative named set rather than live computed observation; three template cubic-bezier values omitted; unique `ease-power` kept as named source writing; five-kind gate held |
| Motion duration keep-off | Named `motion-hero` `600ms` kept off a type size and off Grey 600 as replacements |
| Motion B3 | Five-kind promotion gate; partial confirmation insufficient; `ease-power` as named source writing rather than later per-component computed promotion |
| Typography Font evidence | Mid-1970s Futura as official product-use context rather than a live computed family; 403 as the source body's live-surface evidence class; source body without a Nike-hosted type-specimen URL not filled with a URL; `family.sans` / `family.mono` unmerged; typography beyond the source's nike.com storefront writing stays outside this contract |
| Typography Family | §3 stacks kept beside the two YAML family keys; fallback refused as the brand face |
| Type roles | YAML unitless ratios kept; YAML use and longer §3 notes both kept; Hero `80` off `64-88px` as a replacement; body-lg / price `16` off spacing `16`; h2 `24` off spacing `24`; label `13` off caption `13` as a merged role |
| Type principles | The five type-voice items |
| Assets | Simpleicons slug as identity metadata rather than a portable first-party asset file; first-party photography not replaced |
| Components Capture record | Source state contract kept rather than delegated to an unadopted catalog graph; role-based decision procedure; kind and applicability verdicts; generic Focus not treated as focus-visible; geometry-versus-token-path readings on the controls below; not a complete state-coverage claim |
| Layout & Platforms | Recorded measurements rather than a specification invented on top of them; spacing `16` off grid gutter `16`; button height `48px` off §5 common value `48px` |
| Content & Locales | Coach-who-believes-in-you register; table not a complete product-microcopy guide |
| Named gaps | Named gaps rather than a domain inventory; omitted template curves as unnamed exact curves rather than Nike motion tokens |
