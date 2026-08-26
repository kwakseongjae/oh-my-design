# DoorDash provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, conflicts, and omission record for the T2 Core v2 migration. The canonical source remains `web/references/doordash/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | doordash |
| name | DoorDash |
| country | US |
| category | consumer-tech |
| homepage | https://www.doordash.com |
| primary_color | `#eb1700` |
| logo | `type: simpleicons`, `slug: doordash` |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-22 |
| components_harvested | true |

Token note from the source, verbatim: "primary = live CTA red (#eb1700 = rgb(235,23,0)); brand font DD Norms (DD-TTNorms / TT-Norms). Near-black body (#191919 = rgb(25,25,25)) used instead of pure black for all text."

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-22 |
| tokens.extracted | 2026-06-22 |
| Tier 1 live inspect (both surfaces) | 2026-06-22 |
| voice samples checked live | 2026-06-22 |

Conflicts unresolved: none (source footer).

## Capture boundary

The source records a Tier 1 live inspect on 2026-06-22 via Playwright `getComputedStyle` against two surfaces only: `https://www.doordash.com` (homepage — hero, nav, CTAs, feature sections) and `https://about.doordash.com/en-us` (about/products surface). Every color, type metric and component geometry in the portable document traces to those two readings. The layout, responsive, state and motion contracts in the source body carry no attribution in its ledger; the portable document keeps them and marks them as source-recorded design rules rather than measured readings. No interaction expansion, no viewport sweep, and no reading of an ordering, tracking, payment, DashPass, Dasher or merchant screen exists in this record.

## Sources

### Tier 1 (live computed style, 2026-06-22)

| URL | What it supports |
|---|---|
| https://www.doordash.com | Hero H1 "$0 DELIVERY FEE ON FIRST ORDER" — TTNormsProCond-Blk 40px / weight 900 / color #ffffff · Primary CTA "Find restaurants" — bg rgb(235,23,0) = #eb1700 / radius 9999px / height 40px / 16px DD Norms · Secondary CTA "Sign Up" — bg rgb(255,255,255) / text rgb(25,25,25) / radius 9999px / height 40px · Ghost pill "Sign in for saved address" — bg #ffffff / text #191919 / radius 9999px / h 32px / shadow rgba(25,25,25,0.2) · Address input — bg #ffffff / text rgb(25,25,25) / radius 0px / font DD Norms 16px weight 500 · H2 "Become a Dasher" — DD Norms 32px weight 800 / color rgb(25,25,25) · H2 "Everything you crave, delivered." — DD Norms 40px weight 800 · body font: DD-TTNorms / TT-Norms / DD Norms family |
| https://about.doordash.com/en-us | body font: TT-Norms, DD-TTNorms / color rgb(25,25,25) / bg rgb(255,255,255) · Nav links "Products","Company","Impact" — TT-Norms 18px weight 500 / padding 8px 0px / color #191919 · CTA "Get Started" — bg rgb(235,23,0) = #eb1700 / radius 9999px / 40px height / padding 0px 6px · H1 "Your Door to More" — 40px weight 700 / color rgb(25,25,25) · Carousel dots — bg rgb(204,204,204) / radius 50% / height 32px |

### Tier 2 (no usable record)

- getdesign.md/doordash — not found (404)
- styles.refero.design/?q=doordash — searched, no DoorDash-specific style page found

### Public record (narrative, not interface tokens)

The source comment states: "Brand narrative and founding facts (Tony Xu, 2013, Stanford, local commerce origin) are widely documented public facts: DoorDash S-1, Wikipedia, public press interviews." No individual URL is recorded for them.

## Omission ledger

| Omitted from the portable document | Exact source value | Reason |
|---|---|---|
| `ease-enter` curve | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Unattributed curve. The source ledger names sources for color, type and component geometry and names none for motion. This value differs from the `ease-enter` example in the legacy authoring template. |
| `ease-exit` curve | `cubic-bezier(0.4, 0.0, 1, 1)` | Unattributed, and byte-identical to the `ease-exit` example in the legacy authoring template `spec/omd-v0.1.md`, which that file now labels a non-brand implementation default. |
| `ease-standard` curve | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Unattributed curve. It differs from the template's `ease-standard` example; reading it as the CSS `ease` keyword's own definition rather than a measured DoorDash token is an editorial inference recorded here and not asserted in the portable body. |
| §13 personas | four named fictional archetypes | The source itself discloses them as fictional archetypes with illustrative names that do not refer to real people. D2: not promoted to primary tasks or audience, and deliberately **not** re-hosted here — no name, age, city or demographic segment profile from that section is recorded in any output file. |
| §9 Agent Prompt Guide — prompt wrapper, three example prompts, six iteration rules | prompt sentences and restatements | Tool-facing packaging with no receiving Core slot. The renderable values that existed only inside it were moved rather than deleted; see the table below. The quick color reference and the six iteration rules restate values already carried by Foundations, Typography & Assets and Components & States, and are deleted as repetition. |

### §9-only values that were moved rather than deleted

| Value | Destination |
|---|---|
| White 48px header for the about-site nav, red CTA right-aligned | Components & States → About-site Top Nav CTA, and Layout & Platforms → Grid and container, both labelled legacy prompt-block guidance |
| One red pill CTA per feature section, right-aligned | Components & States → Primary Red CTA, and Layout & Platforms → Grid and container, labelled legacy prompt-block guidance |
| Hero headline `#ffffff` on a red background image | Typography & Assets → Type roles: the color into the Hero Banner notes, the background into the adjacent evidence-class sentence below the table, labelled as prompt-block guidance. Only the color is corroborated — the Tier 1 hero H1 element reading records `color #ffffff` and no background. The red background is not in that reading: it comes from this §9 prompt ("a red background image") and from the §14 promo row ("red or image background"), so it is carried with that origin marked rather than merged into the observation (B1). |

## Claim ledger

| Claim | Class | Record |
|---|---|---|
| `#eb1700` primary / error, `#ffffff` canvas and on-primary, `#191919` ink, `#000000` ink-pure, `#767676` muted, `#f6f6f6` surface, `#cccccc` hairline | Live computed reading | Homepage and about-site inspect, 2026-06-22. `tokens.source: live-extract`. |
| `TTNormsProCond-Blk`, `DD Norms` / `DD-TTNorms` / `TT-Norms`, and all seven type-role metrics | Live computed reading | Same inspect; the hero, section, subsection, nav, body and input metrics are element-level readings |
| About-site H1 weight 700 | Live computed reading | Recorded in the source comment only; the source's §3 hierarchy table does not carry it |
| Eight component records (button ×3, input, card, badge, tab, toggle) and their geometry | Live computed reading | `components_harvested: true`; the frontmatter records and the §4 body describe the same controls |
| "hover darker red" on the primary CTA | Source-recorded direction | The frontmatter `states` field gives a direction and no value; the exact hover color stays unresolved |
| `#191919` underline accent on the nav item | Source-recorded active treatment | Frontmatter `nav-link.active`; kept on the component and out of the seven-state table, since `active` is not a canonical Core state |
| The five voice samples | Verbatim live copy | The source marks each "verified live 2026-06-22" and calls the set "verbatim from live homepage"; "Your Door to More" is the about-site hero |
| Founding 2013, Tony Xu, Stanley Tang, Andy Fang, Evan Moore, Stanford, Palo Alto origin, the local-commerce insight, the mission quote, DashPass, category expansion | Public record | The source comment marks these as widely documented public facts |
| §5 layout, §6 elevation philosophy, §8 responsive, §14 states, §15 motion | Source-recorded design rules | No attribution in the source ledger; carried as recorded and marked as such in the portable body |
| "pill = trust", "one color one action", and the other interpretive readings | Editorial interpretation | The source comment declares these as editorial readings connecting observed design choices to product positioning |
| The portable document's own B2a qualifications — Scope, Primary tasks, Audience, Distinctive traits, Derived implementation principles, Avoid, the Foundations color-class boundary and the semantic-color character readings, the Shape `Use`-column causal reading, the Elevation shadow reading, the zero-alpha `ring` reading, the whole Motion contract and its promotion gate, Font evidence, the `Family` display-face character reading and the no-substitution rule, the Type roles `Notes`-column effect reading and the hero-background evidence-class sentence, Typography rules, Assets, the Components & States evidence boundary including the `Use:`-line character and intent readings, the Source state contract, Layout Grid and container, Layout Whitespace and the responsive-proof note, Content & Locales voice and copy classes, and Governance | Derived editorial implementation inference of this migration | Wider than the interpretive set the source comment declares in the row above. Each qualification is stated adjacent to its passage in the portable body (B2/B2a) rather than held only in this ledger (E1) |

## Proof notes

- `verified: 2026-06-22` and `tokens.extracted: 2026-06-22` are the same live inspect; no later re-check exists.
- Interaction expansions: none. Applicability in the portable document follows control meaning, and unmeasured treatments are omitted rather than marked `not-applicable`. State coverage is not claimed complete.
- The `ring` shadow token `rgba(25, 25, 25, 0) 0px 0px 0px 1px inset` has zero alpha and sits on buttons at rest. It is not promoted into a `focus-visible` treatment; the source never records a `focus-visible` observation (B1).
- The §14 disabled recipe (`rgba(235,23,0,0.4)` red, `#767676` label) is attached to the Primary Red CTA as the source's own disabled treatment, and stays in the state-contract table as well.
- No license grant and no distributed DoorDash type or brand-asset package is recorded for `DD Norms`, `TT Norms Pro`, `TTNormsProCond-Blk` or the logo; the logo record is a SimpleIcons pointer.
- The `rounded` token record carries `sm` 4 and `lg` 16 steps that the source body assigns to no component; they are kept in Foundations → Shape without a component claim, and the gap is named in Governance.
