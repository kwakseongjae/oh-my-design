# Meta provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the Meta migration. Canonical source remains `web/references/meta/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | meta |
| name | Meta |
| country | US |
| category | consumer-tech |
| homepage | https://about.meta.com |
| primary_color | `#0064E0` |
| logo | `type: simpleicons`, `slug: meta` |
| omd format (source) | 0.1 |
| tokens.source | prose-derived |
| tokens.extracted | 2026-06-09 |
| components_harvested | true |
| verified | 2026-06-06 |
| added | 2026-06-06 |

YAML color keys used lowercase hex (`#0064e0`, `#0082fb`, …). Portable Foundations uses the source-body uppercase forms (`#0064E0`, `#0082FB`, …). Same values.

No `ds` field in the source YAML. No separately published Meta UI specification is named as a token authority. The official rebrand story is narrative/brand context, not a component-token source.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-06 |
| added | 2026-06-06 |
| tokens.extracted | 2026-06-09 |
| WebSearch / WebFetch (source comment) | 2026-06-06 |

Conflicts unresolved: none.

## Sibling verification file (E2)

`web/references/meta/.verification.md` exists (`find` of that exact path). Dated 2026-06-06. Method: playwright `getComputedStyle` on https://about.meta.com.

Sibling-only live-DOM samples (a different evidence class from the source’s documented tokens). They were not adopted as portable token values (B1). This ledger records what the sibling file holds; it does not assert that those strings are missing from other files.

- body text: `#1c1e21`, 12px, Helvetica
- page background: `#ffffff`
- root background: `#000000`
- heading: `#000000`, 48px / 400, Optimistic Display Medium
- primary button: `#ffffff` on `#0457cb`, radius 100px, height 44px, 12px / 400
- link: `#768591`

Quote/backtick extract from the sibling: 0. Published-copy needles in the sibling: 0.

## Evidence class

| Domain | Surface | What it establishes | What it does not establish |
|---|---|---|---|
| Meta marketing brand | https://about.meta.com (live; 301 to www.meta.com/about) / meta.com | Blue gradient, Optimistic type, infinity mark, pill radii, marketing CTAs | Facebook feed geometry as a substitute for the marketing brand |
| Facebook/Instagram product lineage | Documented Facebook system tokens named in the source | Neutrals `#F0F2F5`, `#65676B`, `#E4E6EB`, `#42B72A`, `#FA383E`; solid `#0064E0`; 8px radii; white-on-gray cards | A live 2026 collector capture of facebook.com |
| Official rebrand narrative | https://design.facebook.com/stories/designing-our-new-company-brand-meta | Gradient, infinity mark, Optimistic typeface as brand-story facts | Current computed CSS; motion curves |
| Tier 2 corroboration | brandpalettes.com/meta-color-codes, brandcolorcode.com/meta-platforms, designpieces.com | Corroborate `#0082FB`, `#0064E0`, `#1C2B33` | Product-surface component recipes |
| Editorial readings (source HTML comment) | same file, HTML comment | Gradient = third dimension / immersive thesis is an editorial reading of the published rebrand, not a verbatim Meta statement. §13 items are fictional archetypes. | Brand-authored UI doctrine |

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| about | live brand surface | https://about.meta.com | 2026-06-06 (source Verified line) |
| meta-com | live brand surface | https://www.meta.com/about | 2026-06-06 (WebFetch: about.meta.com 301) |

## Sources

### Tier 1

- https://about.meta.com — live brand surface (blue gradient, Optimistic type, infinity mark)
- https://www.meta.com/about — live production (301 target)
- https://design.facebook.com/stories/designing-our-new-company-brand-meta — official rebrand story (gradient, infinity, Optimistic typeface)

**Verified:** 2026-06-06

### Tier 2

- brandpalettes.com/meta-color-codes
- brandcolorcode.com/meta-platforms
- designpieces.com

These corroborate `#0082FB` (light blue), `#0064E0` (blue), `#1C2B33` (gray/ink). They are not component-token sources.

### Narrative (not interface tokens)

- Official rebrand story: https://design.facebook.com/stories/designing-our-new-company-brand-meta
- Live brand: https://about.meta.com

## Claim ledger

YAML token claims. Portable destinations are listed where the value is in `DESIGN.md`. Identity/freshness-only fields stay here.

| claim | surface / class | portable destination |
|---|---|---|
| tokens.colors.primary `#0064e0` | marketing + product interactive | Foundations Semantic color · Components primary solid / links |
| tokens.colors.primary-light `#0082fb` | marketing gradient terminus | Foundations Brand gradient · Primary (Gradient) |
| tokens.colors.primary-bright `#0080fb` | lighter UI accents | Foundations Semantic color |
| tokens.colors.primary-pressed `#0058c4` | product hover / gradient pressed | Foundations (via component) · Primary (Solid) hover · Primary (Gradient) pressed |
| tokens.colors.canvas `#ffffff` | marketing / cards | Foundations · Components |
| tokens.colors.ink `#1c2b33` | text / dark surfaces | Foundations · Content · Components |
| tokens.colors.ink-800 `#2d3a42` | strong labels | Foundations Neutral scale |
| tokens.colors.gray-700 `#465a69` | emphasized body | Foundations Neutral scale |
| tokens.colors.gray-600 `#65676b` | body / secondary text | Foundations Neutral scale · Tabs inactive · Empty copy |
| tokens.colors.gray-500 `#8a8d91` | caption / placeholder | Foundations · Inputs placeholder · Empty no-results |
| tokens.colors.gray-400 `#bcc0c4` | placeholder / disabled fills | Foundations · Toggle off |
| tokens.colors.border `#e4e6eb` | default border | Foundations Surface & borders · Compact card · Secondary bg |
| tokens.colors.border-strong `#ced0d4` | emphasized border | Foundations · Default input border · Disabled input geometry |
| tokens.colors.canvas-gray `#f0f2f5` | product canvas | Foundations · Layout · Filled input · Segmented track |
| tokens.colors.surface-tint `#f7f8fa` | lightest tint | Foundations Neutral scale |
| tokens.colors.success `#42b72a` | success / online | Foundations Semantic color · Success toast icon |
| tokens.colors.success-text `#2e8b1e` | success pill label | Foundations · Success Pill badge |
| tokens.colors.error `#fa383e` | error / notification | Foundations · Notification badge · Input error |
| tokens.colors.warning `#f5a623` | warning | Foundations Semantic color |
| tokens.typography.family.sans Optimistic Text | brand text | Typography Family / Type roles |
| tokens.typography.family.mono SF Mono | declared mono | Typography Family |
| tokens.typography.display-hero … button | type roles | Typography Type roles table |
| tokens.spacing xs…section | spacing | Foundations Spacing · Layout |
| tokens.rounded sm/md/lg/full | 6 / 8 / 16 / 9999 | Foundations Shape · Components |
| tokens.shadow.standard / featured / gradient / dialog | elevation | Foundations Elevation · matching components |
| tokens.components.button-primary | type: button | Components Primary (Solid) |
| tokens.components.button-secondary | type: button | Components Secondary |
| tokens.components.button-outline | type: button | Components Outline |
| tokens.components.input | type: input | Components Default (Box) input |
| tokens.components.input-filled | type: input | Components Filled input |
| tokens.components.card | type: card | Components Standard card |
| tokens.components.badge-notif | type: badge | Components Notification (count) badge |
| tokens.components.badge-status | type: badge | Components Status / Pill badge |
| tokens.components.tab | type: tab | Components Top Tab |
| tokens.components.segmented | type: tab | Components Segmented |
| tokens.components.toast | type: toast | Components Toast |
| tokens.components.dialog | type: dialog | Components Centered Modal |
| tokens.components.toggle | type: toggle | Components Toggle |

§4-only (not in YAML `tokens.components`): Primary (Gradient), Ghost / Text, Featured card, Gradient Hero card, Compact (Bordered) card, Success Pill badge, Default input Error variant. Those live in portable Components (A3).

YAML `tokens.shadow` does not include Level 3 `0 8px 24px rgba(28,43,51,0.16)` or toast `0 4px 12px rgba(28,43,51,0.24)`. Those are §6 / §4 body values in portable Foundations / Toast. Portable Elevation now also restates the four YAML keys beside the Level table (`standard` = Level 1 Subtle, `featured` = Level 2, `gradient` = Brand Glow, `dialog` = Level 4 Modal) without merging the two name systems.

## Same-hex role split

Source-stated multi-role uses of one hex. Not a merge, and not a sibling live-DOM value.

| Hex | Roles in portable DESIGN.md (source-stated) |
|---|---|
| `#FFFFFF` | Pure White: page background, card surfaces, button text on blue. Also segmented active fill, toggle thumb, toast/badge/hero text as the matching component recipes. |
| `#0064E0` | Meta Blue (CTA, links, focus, active). Info Blue reuses the same hex (source: “Informational accents reuse the primary blue”). Also toggle-on and tab active indicator. |
| `#1C2B33` | Meta Ink / Ink 900 text and dark surfaces; toast and error-screen backgrounds; overlay-scrim channel. |
| `#F0F2F5` | Gray 100 / product canvas; filled-input background; segmented track. |
| `#FA383E` | Error Red; notification-count badge fill. |
| `#0058C4` | Product hover / gradient pressed. Not a Foundations Semantic swatch; lives on Capture Hover, Primary (Solid) hover, and Primary (Gradient) pressed. |

## Derived editorial inventory

Portable `DESIGN.md` carries 16 complete B2a qualifications (`derived editorial implementation inference` + `not Meta-authored` + `separately published`). This table is 16 data rows. Preamble sentences on this page are not portable qualifications. Wave 45 E1: former row 14 (Components how-to-read `:282`) was deleted — that body line uses `none of them is Meta-authored`, which is not the complete-form token `not Meta-authored`, so it is not a 17th complete site. No body limiter was added.

| # | Location in DESIGN.md | Qualified reading |
|---|---|---|
| 1 | Experience Scope `:19` | Third-dimension / immersive thesis; big-tech-confident-but-human atmosphere; related but non-identical domains / not one interchangeable template; family names as product-scope context not a license to invent unobserved-hardware tokens; “deliberately moved past” / heritage-blue causal intent; must-therefore-flex / connective-tissue; trillion-impression / planet-scale / robotic scale language |
| 2 | Primary tasks `:25` | Reading the two evidence domains as the three jobs; source has no task list |
| 3 | Audience `:34` | Group-level actors from the product family; fictional archetypes not promoted as Experience claims |
| 4 | Distinctive traits `:38` | Grouping as the distinctive layer; marketing/product not one template; third-dimension bullet is editorial, not a recorded observation |
| 5 | Principles `:50` | The 8 numbered items |
| 6 | Foundations Spacing `:138` | YAML spacing keys kept beside the §5 common-value list (20/64/96 not YAML keys), unmerged |
| 7 | Foundations Shape `:142` | YAML `sm/md/lg/full` kept beside Compact/Standard/Comfortable/Large/Pill labels (12/20/28 not YAML keys), unmerged |
| 8 | Foundations Elevation `:165` | Third-dimension ambition without skeuomorphism; YAML shadow keys unmerged from Level labels; toast shadow is a toast field, not YAML elevation or Level 2 |
| 9 | Foundations Motion `:174` | Duration table, easing names, signature motions, and reduced-motion treated as source-stated rather than computed CSS |
| 10 | Signature motions `:196` | “Living, three-dimensional shimmer” and “imply unlimited” clauses |
| 11 | Typography Font evidence `:211` | Evidence-class sorting; fallback/system stack is not the Optimistic family |
| 12 | Type roles `:245` | YAML `use` strings kept beside source table Notes, neither column replaced |
| 13 | Assets `:260` | Product photography / hardware imagery as first-party content not replaced with invented decoration |
| 14 | Compact (Bordered) card `:505` | Omitting `kind` and a state-applicability map (C4) |
| 15 | Layout `:643` | Whitespace-philosophy labels read as layout rules for the two evidence domains |
| 16 | Content & Locales `:690` | Voice paragraph and brand/product register split as the voice contract |

## Source HTML comment (authority limiter)

Quoted from the source HTML comment, not promoted as a portable brand doctrine:

> Personas (§13) are fictional archetypes informed by publicly described Meta product user segments. Interpretive claims (gradient = third dimension / immersive thesis) are editorial readings of the published rebrand, not verbatim Meta statements.

WebFetch note from the same comment: about.meta.com 301-redirects to www.meta.com/about. Brand-surface reading of gradient + Optimistic type is consistent with the official rebrand story.

Facebook product-surface neutrals (`#F0F2F5` canvas, `#65676B` secondary text, `#E4E6EB` border, `#42B72A` green, `#FA383E` red, `#1877F2` legacy blue) are widely documented Facebook design-system tokens used in the source as the product lineage that Meta's marketing brand sits atop.

## Omitted easing curves

Stored here as the omitted-value ledger (E2b). Portable Foundations keeps the **names** `ease-enter` / `ease-exit` / `ease-standard` and omits the cubic-bezier values because they match `spec/omd-v0.1.md` template examples (T1-3 constraint 5). Exact source strings:

- `ease-enter` `cubic-bezier(0.0, 0.0, 0.2, 1)`
- `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)`
- `ease-standard` `cubic-bezier(0.4, 0.0, 0.2, 1)`

`ease-brand` `cubic-bezier(0.22, 1, 0.36, 1)` is **not** a template match. It is in portable Foundations with the limiter “Source-stated; reasoned extrapolation, not a computed observation” (E2a: this file + DESIGN.md Motion).

## Omission ledger

Disposition only. This ledger names section, count, and field kinds. It does not re-list deleted content (D2a). It does not assert absence of strings that this file itself repeats (E2d).

| Item | Disposition |
|---|---|
| Source H1 `# Design System Inspiration of Meta` | Replaced by Core identity `# Meta Design System`. The legacy title is not reused as a product name. |
| YAML frontmatter keys `omd`, `verified`, `added`, `tokens.source`, `tokens.extracted`, `logo.type`, `logo.slug`, `components_harvested` | Kept in this Identity table. Not portable top-matter. |
| §9 Agent Prompt Guide (Quick Color Reference, Example Component Prompts, Iteration Guide) | Deleted as tool commands / copy-paste prompts. Values that existed only there and had a Components/Foundations slot were moved (feed-card header anatomy; notification anchored top-right). Remaining prompt sentences are not a portable contract. |
| §13 Personas | Deleted. Source count: 3 fictional archetypes. Field kinds: name, age, city, biography. Not promoted into Experience. Not re-hosted here as names, ages, or cities. Audience in DESIGN.md uses product-family groups only. |
| `ease-enter` / `ease-exit` / `ease-standard` cubic-bezier values | Omitted from portable token values as unsourced spec-template matches. Names retained. Exact strings in “Omitted easing curves” above. |

## Proof notes

- `tokens.source: prose-derived`
- `components_harvested: true`
- `omd: "0.1"`
- No collector selectors, no interaction-expansion count, no verification_v2 block in the source.
- Uncaptured `focus-visible` treatments are omitted from applicability rows. They are not `not-applicable`. Applicability follows control meaning. State coverage is not claimed complete.
- Official rebrand story and live about.meta.com are brand-surface / narrative context. Product-surface neutrals are the Facebook system lineage named by the source, not a 2026 live facebook.com capture.
