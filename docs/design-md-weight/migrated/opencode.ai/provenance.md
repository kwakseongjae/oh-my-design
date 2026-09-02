# OpenCode AI provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the opencode.ai migration. Canonical source remains `web/references/opencode.ai/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | opencode.ai |
| name | OpenCode AI |
| country | US |
| category | ai |
| homepage | https://opencode.ai |
| primary_color | `#000000` |
| logo | type `github`, slug `opencode-ai` |
| omd format (source) | 0.1 |
| verified | 2026-05-15 |
| ds.name | OpenCode Brand |
| ds.url | https://opencode.ai/brand |
| ds.type | brand |
| ds.description | OpenCode's terminal-oriented logo and brand assets. |
| ds.og_image | https://opencode.ai/social-share.png |
| tokens.source | prose-derived |
| tokens.extracted | 2026-06-09 |
| components_harvested | true |

Catalog identity `primary_color` `#000000` is not `tokens.colors.primary` `#201d1d`. `ds.type: brand` is recorded (A1c). The Brand page distributes terminal-oriented logo and brand assets; it is not a published component-token specification. Portable B2a uses the no-UI-spec form (`not OpenCode-authored or a separately published UI specification`).

## Freshness

| Event | Date |
|---|---|
| verified (YAML) | 2026-05-15 |
| verified (source footer) | 2026-05-08 (omd:migrate run 43 — Apple-tier) |
| tokens.extracted | 2026-06-09 |
| sibling verification notes | 2026-05-08 |

Conflicts unresolved: none (source footer records "Conflicts unresolved: none").

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | corporate-home | https://opencode.ai/ | 2026-05-08 |
| docs | documentation | https://opencode.ai/docs/ | 2026-05-08 |
| brand | brand-assets | https://opencode.ai/brand | named in YAML `ds.url` |

The collector and sibling label the home as corporate home (Korean locale) and `/docs` as documentation sidebar nav. YAML `tokens.source` is `prose-derived`; the source footer also records live DOM via playwright on those two URLs.

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://opencode.ai/ | 2026-05-08 |
| docs-live | product-surface | https://opencode.ai/docs/ | 2026-05-08 |
| brand | official-brand | https://opencode.ai/brand | YAML `ds` |
| github | product-repository | https://github.com/sst/opencode | source §11 |

### Tier 1 (source footer)

- https://opencode.ai/ (home + /docs; live DOM via playwright)
- Primary **`#201d1d` Coffee Charcoal** 4px / 40-42px / 8×16×8×10 asym (icon-spacing) / 16px·**500**
- Inverse `#fdfcfc` Soft White 4px (Zen cross-promo)
- install-snippet text-only tabs color-state
- doc sidebar `#f8f7f7` active
- **Warm-cast color discipline** — no pure black/white anywhere

### Tier 2 (attempted; no usable record)

- styles.refero.design / getdesign.md — no record
- `getdesign.md/opencode` — directory only (sibling)
- `?q=opencode` — no record (sibling)

**Tier 2 status: unavailable.** Tier 1 (opencode.ai home + /docs) treated as authoritative by the source footer and sibling.

### Narrative (not interface tokens)

- https://opencode.ai/
- https://github.com/sst/opencode
- Tech Funding News — OpenCode background story: https://techfundingnews.com/opencode-the-background-story-on-the-most-popular-open-source-coding-agent-in-the-world/
- Baseten — Conversation with Dax: https://www.baseten.co/blog/building-ai-agents-open-code-and-open-source-a-conversation-with-dax/
- opencode.ai/about, Codacy blog, Lushbinary (source footer / sibling philosophy sources)

## Sibling verification file (E2)

Canonical sibling: `web/references/opencode.ai/.verification.md`. Adopted as evidence class, not as portable token promotion.

Sibling-only measurements (not promoted as portable tokens; source footer already carries the overlapping Coffee Charcoal / Soft White / 8×16×8×10 / 40-42px / Inverse 4px / install-snippet color-state / sidebar `#f8f7f7` writings). Sibling `0px text-only` is install-snippet geometry, not a portable Shape radius:

| Observation | Sibling writing |
|---|---|
| Inverse Primary padding / height | padding 8×12×8×20; 42px / 16px·500 |
| Install tab active (curl) | `0px text-only`; bg transparent / color `#201d1d` / 0px / 16×0 / 50px / 16px·400 |
| Install tab inactive (npm/bun/brew/paru) | color `rgb(154, 152, 152)` = `#9a9898` (60% Charcoal) |
| Docs sidebar geometry | radius 0px; padding 4×24; 28px / 14px·600; sibling name Light Cream |
| Docs sidebar label | "소개" |
| Install-method labels | `curl / npm / bun / brew / paru` |

Sibling copy that is also in the source footer or §11 ("Zen 알아보기", Coffee Charcoal, Soft White) stays in the portable body as source writings. Sibling-only geometry stays in this table.

## Claim ledger

Every value below traces to `web/references/opencode.ai/DESIGN.md`. "Source location" is the legacy section or YAML path.

| Claim | Source location | Portable destination |
|---|---|---|
| identity.name OpenCode AI | YAML `name` | DESIGN.md H1 · this Identity table |
| identity.primary_color `#000000` | YAML `primary_color` | Foundations catalog identity row · this Identity table |
| `ds.type` brand | YAML `ds.type` | Typography & Assets · this Identity table |
| `ds.url` / `ds.name` / `ds.description` / `ds.og_image` | YAML `ds.*` | Assets · this Identity table |
| `tokens.source` prose-derived | YAML `tokens.source` | Experience Scope · this Identity table |
| `tokens.colors.primary` `#201d1d` | YAML · §2 OpenCode Dark | Foundations Semantic color |
| `tokens.colors.canvas` `#fdfcfc` | YAML · §2 OpenCode Light | Foundations Semantic color |
| `tokens.colors.foreground` `#201d1d` | YAML | Foundations Semantic color |
| `tokens.colors.on-primary` `#fdfcfc` | YAML | Foundations Semantic color |
| `tokens.colors.muted` `#9a9898` | YAML · §2 Mid Gray | Foundations Semantic color |
| `tokens.colors.surface` `#302c2c` | YAML · §2 Dark Surface | Foundations Semantic color |
| `tokens.colors.surface-light` `#f1eeee` | YAML · §2 Light Surface | Foundations Semantic color |
| `tokens.colors.hairline` `#646262` | YAML · §2 Border Gray | Foundations Semantic color |
| `tokens.colors.body` `#424245` | YAML · §2 Text Secondary | Foundations Semantic color |
| `tokens.colors.accent` `#007aff` | YAML · §2 Accent Blue | Foundations Semantic color |
| `tokens.colors.accent-hover` `#0056b3` | YAML | Foundations Semantic color |
| `tokens.colors.accent-active` `#004085` | YAML | Foundations Semantic color |
| `tokens.colors.error` `#ff3b30` | YAML · §2 Danger Red | Foundations Semantic color |
| `tokens.colors.success` `#30d158` | YAML | Foundations Semantic color |
| `tokens.colors.warning` `#ff9f0a` | YAML | Foundations Semantic color |
| Danger Hover `#d70015` / Active `#a50011` | §2 | Foundations recorded body writings |
| Warning Hover `#cc7f08` / Active `#995f06` | §2 | Foundations recorded body writings |
| Text Muted `#6e6e73` | §2 | Foundations recorded body writings |
| Border Warm `rgba(15, 0, 0, 0.12)` / `rgba(15,0,0,0.12)` | §2 · §12 | Foundations recorded body writings · Principles |
| `tokens.typography.family.sans` / `mono` Berkeley Mono | YAML · §3 | Typography Family |
| `tokens.typography.heading-1` 38 / 700 / 1.50 | YAML · §3 | Type roles |
| `tokens.typography.heading-2` 16 / 700 / 1.50 | YAML · §3 | Type roles |
| `tokens.typography.body` 16 / 400 / 1.50 | YAML · §3 | Type roles |
| `tokens.typography.body-medium` 16 / 500 / 1.50 | YAML · §3 | Type roles |
| `tokens.typography.body-tight` 16 / 500 / 1.00 | YAML · §3 | Type roles |
| `tokens.typography.caption` 14 / 400 / 2.00 | YAML · §3 | Type roles |
| `tokens.spacing` xs 4 … section 96 | YAML | Foundations Spacing |
| `tokens.rounded` sm 4 / md 4 / lg 6 / full 9999 | YAML | Foundations Shape |
| `tokens.shadow.flat` none | YAML · §6 | Foundations Elevation |
| `tokens.components.button-primary` type button | YAML · §4 Primary | Components Primary (Dark Fill) |
| `tokens.components.input-email` type input | YAML · §4 Email Input | Components Email Input |
| `tokens.components.link-default` type badge | YAML · §4 Default Link | Components Default Link |
| `tokens.components.tab-nav` type tab | YAML · §4 Tabs | Components Tab Navigation |
| Inverse Primary / install-snippet / docs sidebar | source footer | Components Inverse / Install-snippet / Docs sidebar |
| §14 11 state rows | §14 | Components Capture record |
| §15 0ms / 150ms / 250ms | §15 | Foundations Motion |
| §11 founding / June 19 2024 / 650,000 MAU / closing position sentence | §11 | Experience Scope narrative |

## Token record

| Group | Source values |
|---|---|
| colors | primary `#201d1d`; canvas `#fdfcfc`; foreground `#201d1d`; on-primary `#fdfcfc`; muted `#9a9898`; surface `#302c2c`; surface-light `#f1eeee`; hairline `#646262`; body `#424245`; accent `#007aff`; accent-hover `#0056b3`; accent-active `#004085`; error `#ff3b30`; success `#30d158`; warning `#ff9f0a` |
| typography.family | sans `Berkeley Mono`; mono `Berkeley Mono` |
| typography.heading-1 | size 38, weight 700, lineHeight 1.50, use "Hero headlines, page titles" |
| typography.heading-2 | size 16, weight 700, lineHeight 1.50, use "Section titles, bold emphasis" |
| typography.body | size 16, weight 400, lineHeight 1.50, use "Standard body text, paragraphs" |
| typography.body-medium | size 16, weight 500, lineHeight 1.50, use "Links, button text, nav items" |
| typography.body-tight | size 16, weight 500, lineHeight 1.00, use "Compact labels, tab items" |
| typography.caption | size 14, weight 400, lineHeight 2.00, use "Footnotes, metadata, small labels" |
| spacing | xs 4; sm 8; md 12; base 16; lg 24; xl 32; xxl 48; section 96 |
| rounded | sm 4; md 4; lg 6; full 9999 |
| shadow | flat `none` |
| button-primary | type `button`; bg `#201d1d`; fg `#fdfcfc`; radius `4px`; padding `4px 20px`; font `16px / 500`; border `1px solid #646262`; use "Primary CTAs, main actions" |
| input-email | type `input`; bg `#f1eeee`; fg `#201d1d`; border `1px solid rgba(15,0,0,0.12)`; radius `6px`; padding `20px`; use "Form fields, email capture" |
| link-default | type `badge`; fg `#201d1d`; font `16px / 500`; states `underline 1px`; use "Primary text links in body content" |
| tab-nav | type `tab`; font `16px / 500`; active `2px bottom border #9a9898`; use "Section switching, content filtering" |

## Omission ledger

Disposition mentions. These rows name the dropped field kind; they do not re-host the dropped content as a fact.

| Item | Status |
|---|---|
| §13 Personas — 3 fictional archetypes (name, age, city included) | Deleted. The source's own §13 header states they are fictional archetypes informed by OpenCode user segments, not individual people. Not promoted into the portable body, and not re-listed here as identifiers (D2a). Experience `Audience` carries only the group-level wording that header already records. |
| §9 Agent Prompt Guide — example component prompts and numbered iteration restatement | Deleted as tool-facing restatement. Unique values that guide held — sticky `#201d1d` nav; Feature List 16px vertical gap and 16px/700 feature-name / 16px/400 description; footer 16px/400 `#9a9898` links, weight 700 section headers, Border-top `1px solid rgba(15, 0, 0, 0.12)`; Iteration Guide contrast `use `#201d1d` not `#000000`, use `#fdfcfc` not `#ffffff`` — land in Components Navigation / Feature List / Muted Link and Foundations Semantic color (A3). Overlapping color, type, radius, and button values already have Foundations / Components / Typography slots. |
| §15 cubic-bezier tuple | Not present as a numeric tuple. The source writes "Standard cubic-bezier; no bounce" without a curve value. Nothing to delete at the curve-value boundary. Durations 0ms / 150ms / 250ms stay. B3 five-kind gate stays in portable Motion. |
| YAML `ds.type` | Present (`brand`). Kept in this Identity table and in portable Assets (A1c). |

## Derived editorial inventory

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience Scope | Treating `https://opencode.ai/` and `https://opencode.ai/docs/` as token surfaces; treating the Brand page as logo-and-asset identity rather than as a component-token specification; treating GitHub as a named product source; keeping `prose-derived` YAML beside the footer live-DOM writing |
| Experience Scope | Readings of the captured layer as terminal-native, as a sophisticated terminal emulator rather than a cold IDE, as lived-in, as "everything is code", as deliberately minimal, or as warm-cast rather than generic dark |
| Experience Scope | Treating the SST origin, 2021 Y Combinator, $1M, June 19 2024 launch, server-client architecture, 650,000 MAU, Zen cross-promo, and the closing position sentence as official context facts that do not by themselves supply interface tokens |
| Primary tasks | Selecting the three captured homepage/docs outcomes as primary tasks, and refusing the persona section |
| Audience | Dropping the fictional archetype slots rather than promoting them, carrying no demographic identifier list, and reading that header's group-level wording as audience |
| Distinctive traits | Classifying the list as a restatement of the source's Key Characteristics, and the groupings and the readings inside it |
| Principles | The five stems rest on the source's Principles section; every UI implication is the source's own editorial reading; the pairing is one reconstruction |
| Application rules | Treating the source Do list as capture-bound application |
| Avoid | Treating the source Don't list as reconstruction prohibitions |
| Semantic color | Pairing hexes to token-set paths; keeping primary unmerged from foreground; keeping catalog `#000000` unmerged from `#201d1d`; keeping canvas unmerged from on-primary; keeping muted unmerged from Border Tab; keeping hairline unmerged from Border Outline and from button-primary border; keeping body unmerged from Text Secondary as two names; keeping surface-light unmerged from input-email `#f1eeee` and from `#f8f7f7` writings |
| Spacing | Keeping YAML unitless steps beside the source px list; not treating a spacing step as a type size, radius, padding, or control height; treating 1px / 2px / 20px / 40px / 64px / 80px as the §5 scale rather than as missing YAML keys |
| Shape | Reading 4 / 4 / 6 / 9999 as four token-set keys; keeping sm unmerged from md; keeping 6 as the input radius; keeping 9999 as the recorded full step rather than as a universal radius |
| Elevation | Reading the flat / three-border samples as a border-and-shift treatment for the observed elements rather than as a drop-shadow scale |
| Motion | Omitting an unnamed curve tuple; keeping durations, the §7 100-150ms writing, "Standard cubic-bezier; no bounce", reduced-motion; requiring the five-kind per-component computed gate before any promotion; official documentation of a single curve or duration is not that gate |
| Font evidence | Sorting evidence classes; Berkeley Mono as captured sole typeface without a loadable source URL; no system-face or IBM Plex Mono substitution; licence/specimen absence is unresolved official product-use not distributed-asset proof; fallback stack is fallback not a branded family |
| Family | Reading computed visible use without a matching FontFaceSet source URL as family metadata rather than as a loadable specimen URL; keeping YAML `sans` unmerged from YAML `mono` |
| Type roles | Keeping YAML unitless line-heights; keeping YAML `use` verbatim; keeping the longer §3 Notes column; keeping heading-1 `38` off spacing; keeping 16 off `tokens.spacing.base: 16`; keeping caption `14` off a radius |
| Type roles | Keeping the YAML Primary font writing unmerged from the §4 Primary line-height writing; keeping Body Medium line-height off the button line-height; keeping Body Tight as the tab compact line-height |
| Type principles | Treating the four typography-section principles as type-role rules rather than as a separately published type specification |
| Assets | Treating the Brand page as an asset source but not as an interface-token specification or a font licence; treating the GitHub slug as catalog identity rather than as a hosted mark file |
| Capture record | Treating the source's "likely" focus as not a `focus-visible` treatment; treating generic observed Focus as a different evidence class from `focus-visible` |
| Capture record | Treating hover sequences as qualitative color-key writings rather than as per-control computed paints |
| Capture record | Declaring Core applicability by control meaning; keeping YAML `use` / font / padding / radius / border / states / `active` byte forms; treating Capture-record empty / loading / error / success / skeleton / disabled rows as product-level recorded treatments not per-control computed state tokens; treating 다운로드 / 문서 읽기 / Zen 알아보기 as destinations, Tab Navigation and install-snippet tabs as tabs, Email Input as a form field |
| Light Link | Keeping the nav underline writing as the Navigation treatment and Light Link decoration none as this row |
| Components chrome | Treating Navigation, Terminal Hero, and Feature List as chrome or a text list with no state-applicability map; mapping Email Capture onto the Email Input and Primary (Dark Fill) rows rather than as a third primitive |
| Layout | Reading measurements as local captured geometry rather than as a complete grid; keeping YAML spacing keys unmerged from the §5 extra scale; refusing to treat 800-900px as an exact width token |
| Layout → Responsive behavior | Reading the <640px / 640-1024px / >1024px table as a recorded source table rather than a live computed breakpoint capture |
| Content & Locales | Characterizing official materials as OSS-AI-coding-direct and CLI-fluent implementation context rather than as a separately published copy manual; requiring quoted strings byte-exact; treating English beside a Korean string as a reading aid rather than a replacement |
| Named gaps | List as unnamed values rather than as coverage of domains the source never named |

Portable `DESIGN.md` carries 29 complete B2a qualifications. This table is 29 data rows. Preamble sentences on this page are not portable qualifications. Complete form used: "a derived editorial implementation inference from the verified surfaces; it is not OpenCode-authored or a separately published UI specification."

## Proof notes

- `tokens.source: prose-derived`
- `components_harvested: true`
- `ds.type: brand`
- verification method recorded by the source footer and sibling: playwright getComputedStyle on `https://opencode.ai/` and `https://opencode.ai/docs/`, 2026-05-08
- YAML primitive types in the token set: `button` ×1, `input` ×1, `badge` ×1, `tab` ×1. Portable `Primitive type` matches that set. Inverse Primary, Light Link, Muted Link, Install-snippet tabs, Docs sidebar, Navigation, Terminal Hero, Feature List are `not in the token set` (no invented YAML type).
- Unobserved per-control hover / pressed / `focus-visible` treatments are omitted rather than marked `not-applicable` for missing observation. Applicability follows control meaning: 다운로드 / 문서 읽기 / Zen 알아보기 / Light Link / Muted Link / Default Link / Docs sidebar are destinations, so loading / error / success are `not-applicable` on that destination role; Tab Navigation and install-snippet tabs close loading / error / success on the tab role; Email Input keeps error `applicable` as a form field and closes loading / success on the value-field role. Disabled stays `applicable` on interactive controls. Terminal Hero, Feature List, and Navigation chrome have no applicability map (C4). State coverage is not claimed complete.
- No `focus-visible` treatment is asserted anywhere: the source records a "likely" outline/accent-blue focus. That hedge is not promoted as `focus-visible` (B1).
- Official history, SST origin, June 19 2024 launch, and 650,000 MAU are narrative sources, not interface-token sources.
- Catalog `primary_color` `#000000` and `tokens.colors.primary` `#201d1d` stay two keys.
- YAML `input-email` background `#f1eeee` and §4 Email Input `#f8f7f7` and docs-sidebar `#f8f7f7` stay three writings.
- YAML `button-primary` padding `4px 20px` and source-footer live-DOM `8×16×8×10` / 40-42px stay two writings of Primary.
- Style ref `stripe` is catalog metadata on this page only.
