# Hahow provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/hahow/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | hahow |
| name | Hahow |
| country | TW |
| category | education |
| homepage | `https://hahow.in` |
| primary_color | `#00CCB4` |
| logo | `type: favicon`, `slug: https://www.google.com/s2/favicons?domain=hahow.in&sz=128` |
| omd format (source) | 0.1 |
| verified | 2026-06-01 |
| tokens.source | prose-derived |
| tokens.extracted | 2026-06-09 |
| components_harvested | true |
| ds.name | hahow-design |
| ds.url | `https://github.com/hahow/hahow-design` |
| ds.type | system |
| ds.description | Hahow's open-source design-system theme — Primary/Secondary token scales (Primary 500 #00ccb4). |

The favicon slug is dual-destination: identity metadata here, and a portable asset record in `DESIGN.md` §3. It is a favicon-service URL keyed to the domain rather than a Hahow-hosted brand file, and the portable record says so.

Frontmatter `primary_color` is `#00CCB4`. Token-set `tokens.colors.primary` is `#00ccb4`. Both byte forms are kept.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-01 |
| tokens.extracted | 2026-06-09 |
| Tier 1 live inspect (source footer) | 2026-06-01 |

The source footer records the verification verbatim as **Verified:** 2026-06-01. That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: none.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| marketplace | live marketplace | `https://hahow.in` | 2026-06-01 |
| business | brand-owned business surface | `https://business.hahow.in` | named; no computed tokens in the source body |
| tokens | open-source design-system theme | `https://github.com/hahow/hahow-design` | 2026-06-01 |
| org | brand-owned GitHub org | `https://github.com/hahow` | named host of hahow-design |

### Tier 1 (as listed in the source footer)

- `https://hahow.in` — live homepage live-DOM inspect
- `https://business.hahow.in` — brand-owned regional business surface
- `https://github.com/hahow` — brand-owned org hosting the open-source design tokens

YAML `ds.url` is `https://github.com/hahow/hahow-design`. That repo path is dual-destination: identity here, and Experience Scope in `DESIGN.md`.

### Tier 2

- getdesign.md/hahow — NOT LISTED
- refero — not listed

## Sibling handling (`web/references/hahow/.verification.md`)

The sibling exists — confirmed with `find web/references/hahow -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Its own record, transcribed here:

- Inspected 2026-06-01. Method: playwright getComputedStyle (live DOM) + raw source-file fetch
- Sources: `https://raw.githubusercontent.com/hahow/hahow-design/master/src/theme.js`; `https://hahow.in`; `https://business.hahow.in`; `https://github.com/hahow`
- Token Primary 500 = #00ccb4; Primary 100 = #a3ffe8; Primary 400 = #23d9bd; Primary 800 = #006166; Primary 900 = #00444d; Secondary 500 = #ffb940 — source: theme.js
- Live page background rgb(245,247,249) = #F5F7F9 — source: https://hahow.in
- Live brand teal text rgb(0,204,180) = #00CCB4 — source: https://hahow.in
- Live teal outline button: 2px #DCF9F3 border, border-radius 8px, height 42px, font 16px/600 — source: https://hahow.in
- Live tag chip: border-radius 20px, height 33px, font 14px/400 — source: https://hahow.in
- Live typeface PingFang TC; body 16px; heading 24px/600; primary text #262626 (secondary rgba(0,0,0,0.65)) — source: https://hahow.in
- Live white card-button: bg #FFFFFF, text #595959, border-radius 8px — source: https://hahow.in
- Live promotional accents: orange #FA8C16, coral #F65F55 — source: https://hahow.in
- Country TW; brand-owned regional sources: hahow.in, business.hahow.in, github.com/hahow. The sibling states that these satisfy a TW ≥2 non-Western regional-source requirement.

Values and forms the sibling carries that the visible source body does not, kept here as corroboration and not promoted into the portable body as new facts:

- Raw theme path `https://raw.githubusercontent.com/hahow/hahow-design/master/src/theme.js`
- RGB samples `rgb(245,247,249)` and `rgb(0,204,180)`
- Method string `playwright getComputedStyle`
- The sibling's TW ≥2 non-Western regional-source requirement sentence

Hex values those RGB samples convert to (`#F5F7F9`, `#00CCB4`) are already in the source body.

## Byte-form notes

- The source frontmatter records line heights as unitless ratios (`1.3` heading, `1.5` body, `1.4` chip). They are carried as ratios in the portable body, never converted to px (A1a).
- The source frontmatter records spacing and radius steps unitless (`xs: 4` … `section: 48`; `sm: 8`, `md: 8`, `lg: 20`, `full: 9999`). The portable body keeps both the unitless steps and the px forms the visible sections use. `full: 9999` stays a step.
- `tokens.spacing.sm: 8` is not `tokens.rounded.sm: 8` and is not `tokens.rounded.md: 8`. `tokens.spacing.base: 16` is not the 16px body or button type size. `tokens.rounded.lg: 20` is the chip radius step; the live chip height is `33px`.
- Frontmatter `primary_color` `#00CCB4` and `tokens.colors.primary` `#00ccb4` are two spellings of one role. YAML button `fg` is `#00ccb4`; the §4 / §14 prose uses `#00CCB4`. YAML use-string border is `#dcf9f3`; the §4 prose uses `#DCF9F3`.
- YAML `family.mono` is `PingFang TC`, same face as `sans`.

## Omission ledger

| Omitted | Boundary | Reason |
|---|---|---|
| §13 Personas — three entries | whole section | Fictional role biographies. Not promoted to verified tasks and not re-hosted in a sidecar. Role labels, ages, cities, and biographies are dropped and are deliberately not restated here (D2, D2a). |
| §9 Agent Prompt Guide | whole section | Tool-facing copy-paste prompt and restatements of rules stated elsewhere. Checked value by value before deletion: see the next paragraph. |
| Motion duration / easing curve values | no values present | The source specifies none. Nothing to delete as an unsourced curve. The B3 promotion condition is kept in the portable body. |

§9 deletion check (A3). Every value §9 names was confirmed present elsewhere in the portable body before the section was dropped. Soft gray-blue `#F5F7F9`, white `#FFFFFF` cards, 8px radius — Foundations + Layout. Teal outline button — transparent, `#00CCB4` text, 2px solid `#DCF9F3`, 8px, 42px, 16px/600 PingFang TC — Teal Outline component. Tag chips 20px / 33px / `rgba(0,0,0,0.04)` / `rgba(0,0,0,0.65)` / 14px/400 — Tag Chip. Body `#262626` at 16px and headings 24px/600 — Type roles. Teal only for interactive emphasis; orange `#FA8C16` and coral `#F65F55` for promotional callouts — Semantic color + Avoid.

## Claim ledger

| Claim | Surface |
|---|---|
| `tokens.colors.primary` / `primary-100` / `primary-400` / `primary-800` / `primary-900` / `secondary` | hahow-design theme |
| `tokens.colors.canvas` / `text` / `promo-orange` / `coral` | live hahow.in |
| `tokens.typography.family.sans` / `mono` | live hahow.in |
| `tokens.typography.heading` / `body` / `chip` (size, weight, lineHeight, use) | live hahow.in |
| `tokens.spacing.xs` / `sm` / `base` / `lg` / `xl` / `section` | source token set (prose-derived) |
| `tokens.rounded.sm` / `md` / `lg` / `full` | live hahow.in geometry + token-set pill step |
| `tokens.components.button-primary` / `button-card` / `chip-tag` | live hahow.in |
| Teal outline border `#DCF9F3` | live hahow.in (not a `tokens.colors.*` key) |
| Card-button `#FFFFFF` / `#595959` | live hahow.in |
| Voice string 好學校 / "everyone has something to learn and something to teach" | source §10 / §11 |
| `ds.name` / `ds.url` / `ds.type: system` | YAML identity |

## Proof notes

- Two brand-owned Tier 1 web surfaces plus the GitHub org, recorded 2026-06-01. Computed interface values in the source body attach to hahow.in and to the published `hahow-design` theme. `business.hahow.in` is named and contributes no computed token in the source body.
- `components_harvested: true`; three component records in the source token set (`button-primary`, `button-card`, `chip-tag`).
- The source records no interaction expansion and no `focus-visible` string. Uncaptured hover, focus-visible, disabled, loading, error, and success treatments are omitted as values; they are not turned into `not-applicable` for lack of capture. Applicability follows control role. State coverage is not claimed complete.
- Hahow publishes a first-party design-system theme (`hahow-design`, `ds.type: system`). Derived-editorial qualifications therefore close by naming that published specification: not Hahow-authored or taken from a separately published UI specification, including the published hahow-design documentation (rulebook v12 B2a 전제 주석).
- 好學校, the learn-and-teach premise, and the institution-versus-people framing are source-stated narrative. They stay in Experience Scope as narrative context, not as interface tokens.

## Portable derived-editorial scope

Every passage in the portable `DESIGN.md` that carries the derived-editorial qualification. The qualification itself stays in the body; this table is an index, not its home. Measured against `DESIGN.md` with `grep -o 'derived editorial implementation inference' … | wc -l` (file-level, not `grep -c`): **26**. This table has **26** rows (E1 1:1). The same 26 lines also carry `not Hahow-authored` and `including the published hahow-design documentation`.

| Portable location | Qualified material |
|---|---|
| Experience — Scope ¶1 | The surface boundary that stops a hahow.in live measurement from standing in for a business.hahow.in treatment, and that keeps a hahow-design token attached to the published theme |
| Experience — Scope ¶2 | The atmosphere readings: content that breathes, teal that does not shout, inviting 8px, good-teacher surface |
| Experience — Scope ¶3 | Classing the §11 narrative as not a token source, and the refusal that the hahow.in inspect is not a proxy for an uninspected business.hahow.in treatment |
| Experience — Primary tasks | The step from observed modules and labels to "primary tasks" |
| Experience — Audience | The step from the published 好學校 learn-and-teach premise to an audience grouping |
| Experience — Distinctive traits | The grouping and characterizing half of the recorded values |
| Experience — Principles | All five §12 principles |
| Experience — Application rules | Grouping the Do list as application rules, and their rationales |
| Experience — Avoid | The rationales in the Don't list, and the scope-boundary prohibition |
| Foundations — Semantic color | The characterizing phrases attached to roles |
| Foundations — Semantic color / palette-role | Keeping Primary 400 / 800 as palette roles and not writing them onto any component hover or pressed row |
| Foundations — Spacing | Keeping `sm: 8` off the two rounded-8 keys, and `base: 16` off the 16px type size |
| Foundations — Shape | Calling 8px / 20px inviting, and keeping `full: 9999` off the live 20px chip |
| Foundations — Elevation | Reading the stack as restrained, soft, flat, and friendly |
| Foundations — Motion | The source's gentle-and-encouraging motion prose |
| Typography — Font evidence / Official product-use | Classing hahow-design as a color-token source rather than a type specimen |
| Typography — Font evidence / License | Treating PingFang TC as an upstream system face, not a Hahow-owned brand asset |
| Typography — Family | The ban on substituting a system face for PingFang TC and presenting a fallback as the Hahow face |
| Typography — Type roles | Keeping `16px / 600` on the teal-outline component record and not opening a fourth type-role key |
| Typography — Type rules | Reading the three roles as the hierarchy principle |
| Typography — Assets | Classing the favicon slug as a third-party favicon service |
| Components — Surface state contract | The four-row §14 contract read as this surface's state contract, and keeping the source-noted Primary 400 / 800 steps as palette roles rather than writing them onto component hover or pressed rows |
| Components — How applicability is decided here | The role-based decision procedure, and every Reason cell in every per-component table |
| Layout & Platforms — spacing | Reading the canvas as letting cards sit as the foreground, teal as used sparingly and never as a flood, spacing as generous, and the marketplace as browsable |
| Layout & Platforms — reflow | Reading the recorded 42px / 33px heights as translating to mobile tapping |
| Content & Locales — voice | The voice reading (encouraging, human, supportive teacher) |
