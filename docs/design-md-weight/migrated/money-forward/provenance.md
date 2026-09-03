# Money Forward provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the money-forward migration. Canonical source remains `web/references/money-forward/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | money-forward |
| name | Money Forward |
| country | JP |
| category | fintech |
| homepage | https://moneyforward.com |
| primary_color | `#3B7DE9` |
| logo | type `favicon`, slug `https://www.google.com/s2/favicons?domain=moneyforward.com&sz=128` |
| omd format (source) | 0.1 |
| tokens.source | prose-derived |
| tokens.extracted | 2026-06-09 |
| components_harvested | true |
| ds.name | Money Forward Cloud UI |
| ds.url | https://github.com/moneyforward/cloud-react-ui |
| ds.type | system |
| ds.description | Money Forward's open-source React component library and theme tokens for the Money Forward Cloud business suite — buttons, forms, and a typed styled-components theme published on GitHub. |

`ds.type: system` is kept as a value, not paraphrased away (A1c): it records that Money Forward Cloud UI is published as an open-source system. Token values in the portable body are transcribed from that theme (`tokens.source: prose-derived`).

The logo record is a Google favicon-service URL. It is kept here and named as identity metadata in the portable Assets subsection.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-05-19 |
| tokens.extracted | 2026-06-09 |
| surfaces / sources (source footer) | 2026-05-19 |

Conflicts unresolved (source footer): Brief-supplied `#316AD6` not found as a literal token; using verified Cloud-product primary royalBlue `#3B7DE9`. Corporate brand layer (`design.moneyforward.com`) uses orange `#ED7100` — documented in the source note; product-blue treated as canonical for UI generation.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| cloud-ui | official-ds | https://github.com/moneyforward/cloud-react-ui | 2026-05-19 |
| design-org | corporate-design | https://design.moneyforward.com | 2026-05-19 |

The source does not record a live computed capture of Money Forward ME or Cloud product chrome. YAML `tokens.source: prose-derived` from the open-source theme.

## Sources

| id | kind | url | captured |
|---|---|---|---|
| cloud-react-ui-color | official-ds | github.com/moneyforward/cloud-react-ui src/theme/color.ts | 2026-05-19 |
| cloud-react-ui-theme | official-ds | github.com/moneyforward/cloud-react-ui src/theme/theme.ts | 2026-05-19 |
| cloud-react-ui-values | official-ds | github.com/moneyforward/cloud-react-ui src/theme/values.ts | 2026-05-19 |
| design-org-live | official-doc | https://design.moneyforward.com | 2026-05-19 |

### Tier 1 (source footer)

- github.com/moneyforward/cloud-react-ui (open-source theme — royalBlue `#3B7DE9` → cobalt `#0054AC` primary gradient, venetianRed `#D0021B` danger, nightRider `#333333` text, linkWater `#D4D8DD` border, 4px radius, button sizes 28/32/42, Noto Sans JP font stack, 10–24px type scale)
- design.moneyforward.com (live — "User Focus" stance, corporate-orange `#ED7100` brand layer)

### Tier 2 (source footer)

- getdesign.md / refero — not separately fetched (official open-source DS supersedes)

### Narrative context (not interface tokens)

- corp.moneyforward.com — source HTML comment: editorial paraphrase of positioning; not a verbatim quote. The portable body keeps that evidence class on the third voice sample.
- design.moneyforward.com — "User Focus"; "move users' lives and the world forward"; accessibility for people with visual impairments; corporate-orange `#ED7100`.

## Claim ledger

Every value below traces to `web/references/money-forward/DESIGN.md`. "Source location" is the legacy section or YAML path.

| Claim | Source location | Portable destination |
|---|---|---|
| `tokens.colors.primary` `#3b7de9` | YAML; §2 royalBlue `#3B7DE9` | Foundations → Semantic color |
| `tokens.colors.primary-hover` `#0054ac` | YAML; §2 cobalt `#0054AC` | Foundations → Semantic color |
| `tokens.colors.brand` `#3b7de9` | YAML | Foundations → Semantic color (unmerged from primary) |
| `tokens.colors.canvas` `#ffffff` | YAML; §2 white `#FFFFFF` | Foundations → Semantic color (unmerged from on-primary) |
| `tokens.colors.surface` `#ecf2fd` | YAML; §2 solitude `#ECF2FD` | Foundations → Semantic color |
| `tokens.colors.foreground` `#333333` | YAML; §2 nightRider | Foundations → Semantic color |
| `tokens.colors.muted` `#999999` | YAML; §2 nobel | Foundations → Semantic color |
| `tokens.colors.on-primary` `#ffffff` | YAML | Foundations → Semantic color |
| `tokens.colors.hairline` `#d4d8dd` | YAML; §2 linkWater `#D4D8DD` | Foundations → Semantic color |
| `tokens.colors.error` `#d0021b` | YAML; §2 venetianRed `#D0021B` | Foundations → Semantic color |
| `tokens.colors.success` `#65ab51` | YAML; §2 apple `#65AB51` | Foundations → Semantic color |
| `tokens.colors.warning-bg` `#fcf8e3` | YAML; §2 cornSilk `#FCF8E3` | Foundations → Semantic color |
| `tokens.colors.warning-text` `#8a6d3b` | YAML; §2 mcKenzie `#8A6D3B` | Foundations → Semantic color |
| `tokens.colors.error-bg` `#ffeeeb` | YAML; §2 mistyRose `#FFEEEB` | Foundations → Semantic color |
| Named color.ts swatches (sanMarino through lightSlateGrey) | §2 | Foundations → Named `cloud-react-ui` swatches |
| Corporate orange `#ED7100`; brief `#316AD6` | HTML comment / footer | Experience Scope + Foundations Semantic color + this file Conflicts |
| `tokens.typography.family.sans` / `mono` `Noto Sans JP` | YAML | Typography & Assets → Family |
| Font stack + 10–24px scale | YAML typography keys; §3; values.ts | Typography & Assets → Family / Type roles |
| `tokens.spacing: [12, 16, 52]` | YAML; §4 button paddings | Foundations → Spacing (+ button sizes) |
| `tokens.rounded.sm` / `md` / `lg` `4`; `full: 9999` | YAML; §4 `4px` | Foundations → Shape |
| `tokens.shadow.active` | YAML; §6 pressed | Foundations → Elevation |
| `tokens.components.button-primary` (`type: button`) | YAML; §4 Primary | Components → Primary |
| `tokens.components.button-default` (`type: button`) | YAML; §4 Default | Components → Default (Secondary) |
| `tokens.components.button-danger` (`type: button`) | YAML; §4 Danger | Components → Danger |
| `tokens.components.button-disabled` (`type: button`) | YAML; §4 Disabled | Components → Disabled |
| `tokens.components.block` (`type: card`) | YAML; §4 Block | Components → Block |
| `tokens.components.input` (`type: input`) | YAML; §4 Text Field | Components → Text Field |
| `tokens.components.notice-error` (`type: card`) | YAML; §4 Error Notice | Components → Error Notice |
| `tokens.components.notice-warning` (`type: card`) | YAML; §4 Warning Notice | Components → Warning Notice |
| Settings button; Error Field; Success Notice | §4 only | Components (not in the token set) |
| Button sizes 28/32/42 | §4 Sizes; theme.ts | Components → Button sizes + Layout Touch |
| Transaction table 13–14px / `#F7F7F7` / right-aligned tabular | §9 example (A3) | Components → Transaction table |
| Helper text 12px `#999999` | §9 example (A3) | Components → Text Field |
| §14 ten-row state table | §14 | Components → Capture record |
| §15 durations / easing roles / signature / reduced-motion | §15 | Foundations → Motion (curves omitted) |
| zIndex backdrop `200` | §6 / §15 | Foundations → Elevation + Motion signature 3 |
| §10 voice table, forbidden patterns, three samples | §10 | Content & Locales |
| §11 founding / ME / Cloud / X / One-Two-Three / User Focus / last sentence | §11 | Experience → Scope |
| §12 five principles with UI implications | §12 | Experience → Principles |
| §7 Do / Don't | §7 | Experience → Application rules / Avoid |
| §1 Key Characteristics | §1 | Experience → Distinctive traits |
| §5 density / app-shell; §8 responsive table | §5 / §8 | Layout & Platforms |
| Footer **Verified** / Tier 1 / Tier 2 / Conflicts | footer | this file — Freshness, Sources |

## Token-block component strings

YAML `use` / `states` / geometry, kept verbatim in the portable component records:

| Component | YAML fields |
|---|---|
| `button-primary` | `type: button`, `bg: "linear-gradient(to bottom,#3b7de9,#0054ac)"`, `fg: "#ffffff"`, `border: "1px solid rgba(0,0,0,0.15)"`, `radius: "4px"`, `height: "32px"`, `padding: "0 12px"`, `font: "14px / 400"`, `states: "hover gradient flips, active 0 0 2px rgba(212,216,221,0.3)"`, `use: "Single primary action per screen"` |
| `button-default` | `type: button`, `bg: "linear-gradient(to bottom,#ffffff,#ecf2fd)"`, `fg: "#333333"`, `border: "1px solid #d4d8dd"`, `radius: "4px"`, `font: "14px / 400"`, `states: "hover gradient flips"`, `use: "Secondary / cancel actions"` |
| `button-danger` | `type: button`, `bg: "linear-gradient(to bottom,#ffffff,#ecf2fd)"`, `fg: "#d0021b"`, `border: "1px solid #d4d8dd"`, `radius: "4px"`, `use: "Destructive actions, danger in text not fill"` |
| `button-disabled` | `type: button`, `bg: "#d4d8dd"`, `fg: "#999999"`, `border: "1px solid rgba(0,0,0,0.1)"`, `radius: "4px"`, `use: "Unavailable actions"` |
| `block` | `type: card`, `bg: "#ffffff"`, `border: "1px solid #d4d8dd"`, `radius: "4px"`, `use: "Content panel / card container"` |
| `input` | `type: input`, `bg: "#ffffff"`, `fg: "#333333"`, `border: "1px solid #d4d8dd"`, `radius: "4px"`, `focus: "border #3b7de9"`, `use: "Form fields"` |
| `notice-error` | `type: card`, `bg: "#ffeeeb"`, `fg: "#d0021b"`, `radius: "4px"`, `use: "Error / danger banner"` |
| `notice-warning` | `type: card`, `bg: "#fcf8e3"`, `fg: "#8a6d3b"`, `use: "Caution banner"` |

## Omission ledger

| Item | Status |
|---|---|
| §13 Personas — 3 fictional archetypes (name, age, city included) | Deleted. The source's own §13 header states they are fictional archetypes informed by a publicly-described user base, not real individuals. Not promoted into the portable body, and not re-listed here as identifiers (D2a). Experience `Audience` carries only the source header's group wording (Japanese individuals and SME owners/finance staff) plus the voice-table Consumer (ME) / Business (Cloud) contexts. |
| §15 easing curve values — `ease-standard` `cubic-bezier(0.4, 0, 0.2, 1)`, `ease-enter` `cubic-bezier(0, 0, 0.2, 1)`, `ease-exit` `cubic-bezier(0.4, 0, 1, 1)` | Removed from the portable body as unsourced curves; kept here verbatim. `cubic-bezier(0.4, 0, 1, 1)` matches the example value that `spec/omd-v0.1.md` carries as a non-brand implementation default. Named roles and their uses stay in portable Motion. Durations stay as the source's illustrative table. |
| §9 Agent Prompt Guide — Quick Color Reference, four Example Component Prompts, eight-step Iteration Guide | Deleted as tool-facing restatement. Two writings unique to §9 were restated rather than dropped (A3): helper text 12px `#999999` on the Text Field; transaction table dense rows at 13–14px, `#333333` text, alternating `#F7F7F7` row tint, 1px `#D4D8DD` separators, financial figures right-aligned tabular. |
| Success Notice background hex | Source writes "light green tint" without a hex. Portable Success Notice keeps the text `apple #65AB51` and omits a background hex. Named gaps names that unnamed hex. |
| Legacy H1 `# Design System Inspiration of Money Forward` | Replaced by the Core v2 identity line `# Money Forward Design System`. |
| Legacy footer `**Verified:** … / Tier 1 / Tier 2 / Conflicts unresolved` | Moved to Freshness and Sources above. |

## Derived editorial inventory

Sites in the portable `DESIGN.md` that carry an adjacent complete qualifier. Complete form used: "a derived editorial implementation inference from the verified surfaces; they are not Money Forward-authored or taken from a separately published UI specification, including the published Money Forward Cloud UI (`cloud-react-ui`) documentation." This is an index of the derived-reading sites, not a completeness claim. Portable `DESIGN.md` carries 25 complete B2a qualifications. This table is 25 data rows. Preamble sentences on this page are not portable qualifications.

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience Scope ¶1 | Treating `cloud-react-ui` as this contract's token source; keeping `design.moneyforward.com` as the User Focus / corporate-orange layer rather than as a Cloud product-token surface; keeping `#316AD6` out of the token set; keeping every value attached to its evidence class |
| Experience Scope ¶2 | Characterizations trustworthy-enough / light-enough; SmartHR-adjacent restraint; Money Forward Cloud fingerprint; subtly dimensional polished blue pill, signaling "press me, this is safe."; competence and care; never loud |
| Experience Scope ¶3 | Classifying the founding-and-mission narrative (silos-and-stress, ME / Cloud / X, お金の見える化, One / Two / Three through its last clause, User Focus, visual-impairment accessibility, methodical-and-trustworthy closing sentence) as context that does not by itself supply interface tokens |
| Primary tasks | Selecting the three product/control/Cloud-artifact outcomes as primary tasks, and refusing the persona section |
| Audience | Dropping the fictional biographies rather than promoting them; reading the source header's publicly-described user base and the voice-table Consumer (ME) / Business (Cloud) contexts as audience |
| Distinctive traits | Classifying the list as a restatement of the source's Key Characteristics, and the groupings and the readings inside them |
| Principles | The five stems plus UI-implication items as a reconstruction pairing; Principle 4's stem restates published User Focus; every UI implication is the source's own editorial reading |
| Application rules | Treating the source Do list as capture-bound application, reasons included |
| Avoid | Treating the source Don't list as reconstruction prohibitions, reasons included |
| Semantic color | Pairing hexes to token-set paths or named swatches; keeping `primary` unmerged from `brand`; keeping `canvas` unmerged from `on-primary`; keeping named color.ts entries as named swatches rather than as invented YAML keys |
| Semantic color (corporate layer) | Keeping `design.moneyforward.com` orange `#ED7100` on the corporate brand layer rather than as a Cloud product token; keeping `#316AD6` out of the token set |
| Spacing | Keeping `[12, 16, 52]` on `tokens.spacing` and the three paddings on the button sizes rather than treating a shared numeral as the same token |
| Shape | Keeping `sm` / `md` / `lg` / `full` as four keys; keeping control `4px` on the controls; leaving `full: 9999` beside the "4px everywhere" rule rather than choosing between them |
| Elevation | Reading elevation as subtle and gradient-led rather than shadow-heavy; reading the button gradient as the distinctive depth cue |
| Motion (register) | Reading restrained/confidence-building, state-not-entertainment, the spring/overshoot prohibition, the bouncy-undermines-calm-competence causal clause, and accessibility-outranks-polish as an implementation stance |
| Motion | Treating durations as illustrative rather than as computed tokens; omitting unsourced curves; keeping named easing roles and signature pairings; requiring the five-kind per-component computed gate before further promotion |
| Font evidence | Sorting evidence classes; treating Noto Sans JP as the explicit lead of the published stack rather than as a custom brand webfont; treating the platform-native chain as fallbacks rather than as a substitute branded family |
| Family | Reading YAML `mono` as `Noto Sans JP` rather than as an invented monospace face; reading the native chain as fallbacks rather than as the brand face |
| Type roles | Keeping YAML `use` beside the §3 table; keeping weights only where YAML or the two-weight rule records them; refusing to flatten a missing line-height into a px |
| Assets | Treating the Google favicon-service slug as identity metadata rather than as a Money Forward-hosted logo asset |
| Capture record | Declaring Core applicability by control meaning; attaching `Primitive type` only when YAML records it; treating generic Focus as a different evidence type from `focus-visible`; role-based loading/error/success; not a complete state-coverage claim |
| Components → Button sizes | Recording 28/32/42 as source §4 writings rather than YAML keys; pairing YAML primary height/padding with medium; leaving shared numerals unmerged from `tokens.spacing` |
| Layout → Density | Reading Cloud as high-density, and reading the 10–14px range / `4px` radius / 1px `linkWater` border as reflecting that density |
| Layout → Responsive behavior | Reading the Desktop / Tablet / Mobile table and the Touch & Mobile bullets as source-stated intended behavior rather than as a captured cross-viewport pass |
| Content & Locales | Characterizing the voice as clear, reassuring, and quietly empowering; reading the name as the thesis; treating English beside a Japanese label as a reading aid rather than a replacement |

## Proof notes

- `tokens.source: prose-derived`
- `components_harvested: true`
- `ds.type: system`
- No sibling `.verification.md` beside the legacy source.
- Uncaptured hover/disabled/loading/error/success treatments are omitted where the source supplies none. They are not `not-applicable` for want of a capture; applicability follows control meaning. State coverage is not claimed complete.
- Input/notice §4 variants are the source's own inferred mappings of verified tokens.
- Motion durations are the source's own illustrative table. Exact cubic-bezier values are not portable tokens.
- Official history / User Focus / corporate orange are narrative or brand-layer context, not Cloud product-token sources.

## Source closing note

Source HTML comment (OmD v0.1 Sources — Money Forward), kept here as the evidence-class assignment:

- VERIFIED: entire color palette, button variants, radius, type scale, font stack — all from the open-source cloud-react-ui theme (authoritative Tier-1 DS for the Cloud product).
- NOTE / CONFLICT: the brief supplied `#316AD6` (blue). The closest VERIFIED token is royalBlue `#3B7DE9`. Separately, the MF corporate/brand design-org site (design.moneyforward.com) leads with an ORANGE accent (`#ED7100`), reflecting a corporate brand layer distinct from the Cloud product blue.
- INFERRED: input/notice component variants in §4 are reasonable mappings of verified tokens. Motion tokens (§15) follow the theme's zIndex/gradient discipline but duration values are illustrative. Voice samples marked illustrative are not verbatim live strings.
- Personas (§13) are fictional archetypes of MF's described individual + SME user base.
