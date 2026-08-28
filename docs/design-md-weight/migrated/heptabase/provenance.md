# Heptabase provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/heptabase/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | heptabase |
| name | Heptabase |
| country | TW |
| category | productivity |
| homepage | `https://heptabase.com` |
| primary_color | `#2e2e2e` |
| logo | `type: favicon`, `slug: https://www.google.com/s2/favicons?domain=heptabase.com&sz=128` |
| omd format (source) | 0.1 |
| verified | 2026-06-17 |
| added | 2026-06-17 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-17 |
| components_harvested | true |

The favicon slug is dual-destination: identity metadata here, and a portable asset record in `DESIGN.md` §3. It is a favicon-service URL keyed to the domain rather than a Heptabase-hosted brand file, and the portable record says so.

Token note from source, kept as ledger text: primary = live near-black ink (`#2e2e2e`) used for both heading text and the dark pill/CTA; canvas is a warm off-white (`#f7f7f7`). Single saturated accent is a clear blue (`#207dff`) reserved for AI-feature highlight text; green (`#75c33a`) only marks pricing checkmarks. Translucent fills (`rgba(252,252,252,0.5)` card, `rgba(0,0,0,0.08)` hairline) live in prose/components, not in solid colors.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-17 |
| added | 2026-06-17 |
| tokens.extracted | 2026-06-17 |
| Tier 1 live inspect (source footer) | 2026-06-17 |

The source footer records the verification verbatim as **Verified:** 2026-06-17 (omd:add-reference CREATE — Tier 1 live inspect, 2 brand-owned surfaces). That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: none.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| homepage | marketing homepage | `https://heptabase.com` | 2026-06-17 |
| pricing | pricing page | `https://heptabase.com/pricing` | 2026-06-17 |
| wiki | official Wiki (mission / founder) | `https://wiki.heptabase.com` | named mission source; not a token surface |

### Tier 1 (as listed in the source footer)

- `https://heptabase.com` (homepage, live computed-style inspect)
- `https://heptabase.com/pricing` (pricing page, live computed-style inspect)
- `https://wiki.heptabase.com` (Heptabase official Wiki — brand-owned, mission/manifesto source)

`https://heptabase.com` is dual-destination: Experience Scope in `DESIGN.md` and this ledger. `https://heptabase.com/pricing` is dual-destination the same way. `https://wiki.heptabase.com` is dual-destination: Scope names it as a mission source, and this ledger records it as a non-token surface.

### Tier 2

- getdesign.md/heptabase — 404 "No designs found"
- styles.refero.design/?q=heptabase — no matching results

Both Tier 2 catalogs under-cover Heptabase. The source assigns proof to the Tier 1 brand-owned surfaces. No Tier 1 ↔ Tier 2 conflicts (Tier 2 silent).

## Sibling handling (`web/references/heptabase/.verification.md`)

The sibling exists — confirmed with `find web/references/heptabase -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Its own record, transcribed here:

- Inspected 2026-06-17. Method: playwright getComputedStyle (live DOM) — global playwright (chromium, headless, viewport 1440×900)
- Sources: `https://heptabase.com`; `https://heptabase.com/pricing`; `https://wiki.heptabase.com`
- body: Inter; `background-color: rgb(247, 247, 247)` (`#f7f7f7`)
- hero h1 "Master anything you learn. Do your best research and thinking.": Instrument Sans 48px / 500 / `-1.584px` / line-height 62.4px / `rgb(46, 46, 46)` (`#2e2e2e`)
- section h2 "Ask AI to explain any sources you bring…": 36px / 500 / `-0.54px` / 46.8px
- logotype "Heptabase": Inter 18px / 600 / `-0.36px`
- header CTA "Get started": `#2e2e2e` / 9999px / 8px 16px / 36px / Inter 16px / 500
- hero CTA "Get started on mobile": `#2e2e2e` / 10px / 14px 24px / 48px / Inter 16px / 600
- nav item "Pricing": `#2e2e2e` / 8px / 8px 12px / 36px / Inter 16px / 400
- sub-nav pill "Home" (active): `#000000` / 9999px / 7px 22px / 13px / 500
- pricing card: `rgba(252,252,252,0.5)` / `1px solid rgba(0,0,0,0.08)` / 12px / `box-shadow: none`
- warm feature tile: `#f0f0ea` / `1px solid rgba(0,0,0,0.04)` / 8px
- white product card: `#ffffff` / `1px solid rgba(0,0,0,0.14)` / 8px
- billing toggle "Yearly (Save 25%)": `#ffffff` / 8px / 6px 10px / 32px
- ghost pricing CTA "Get started": `#fcfcfc` / `1px solid rgba(0,0,0,0.08)` / 10px / 13px 23px / 48px / 18px / 500
- accent blue `#207dff` on "AI chat", "AI tutor", "Save 25%"
- accent green `#75c33a` on pricing checkmarks
- `box-shadow: none` across hero, nav, cards, pricing
- default border token `#e5e7eb`
- document.title: "Heptabase" (homepage), "Pricing | Heptabase" (pricing)

Values and forms the sibling carries that the visible source body does not, kept here as corroboration and not promoted into the portable body as new facts:

- Viewport string `1440×900`
- Card measurements `420×676`, `644×500`, `316×152`, `420×717`
- Radius-frequency `50%`
- Text-color sample `rgba(0,0,0,0.72)`
- Inactive sub-nav padding `7px 18px 7px 22px` and height `27px`
- Homepage feature-card radius `6px` at `644×500` (the source rounded scale already has `sm: 6`)
- Phrase `100 AI credits/month`
- Label fragment `AI TutorNew`
- document.title `Pricing | Heptabase` (homepage title `Heptabase` is already a published wordmark in the source body)
- Method string `playwright getComputedStyle`
- Frequency counts (`rgb(0,0,0)` ×649 and the rest of the sibling scans)

Hex values those RGB samples convert to (`#f7f7f7`, `#2e2e2e`, `#207dff`, `#75c33a`, `#6a6972`, `#777169`) are already in the source body.

## Byte-form notes

- The source frontmatter records line heights as unitless ratios (`1.30` display-hero / section, `1.50` card-title / nav / body, `1.00` button / pill). They are carried as ratios in the portable body, never converted to a single px form (A1a). The source itself also writes `62.4px` and `46.8px` beside `1.30`; both forms stay.
- The source frontmatter records spacing and radius steps unitless (`xs: 4` … `section: 64`; `sm: 6`, `md: 8`, `lg: 12`, `pill: 9999`). The portable body keeps both the unitless steps and the px forms the visible sections use. `tokens.rounded.pill: 9999` stays a step. The source also writes `9999px`.
- `tokens.spacing.sm: 8` is not `tokens.rounded.md: 8`. `tokens.spacing.md: 12` is not `tokens.rounded.lg: 12`. `tokens.spacing.base: 16` is not the 16px body / nav / button type size. `tokens.spacing.lg: 24` is not the 24px card-title size.
- The 10px radius on `button-cta-lg` and `button-ghost` is a component measurement. It is not a `tokens.rounded` step.
- Frontmatter `primary_color` is `#2e2e2e`, the same byte form as `tokens.colors.ink`.
- YAML `family.cjk` is `system CJK (PingFang TC / Noto Sans TC)`.

## Omission ledger

| Omitted | Boundary | Reason |
|---|---|---|
| §13 Personas — three entries | whole section | Fictional archetypes. Not promoted to verified tasks and not re-hosted in a sidecar. Role labels, ages, cities, and biographies are dropped and are deliberately not restated here (D2, D2a). |
| §9 Agent Prompt Guide | whole section | Tool-facing copy-paste prompt and restatements of rules stated elsewhere. Checked value by value before deletion: see the next paragraph. |
| Three unsourced easing curves | curve values only | `ease-enter` / `ease-exit` / `ease-standard` roles and uses stay. The three cubic-bezier values match the catalog template set and are not traceable to Heptabase evidence. Durations 120ms / 200ms / 320ms and the motion rules stay. The B3 promotion condition is kept in the portable body. |

§9 deletion check (A3). Every value §9 names was confirmed present elsewhere in the portable body before the section was dropped. Ink `#2e2e2e`, canvas `#f7f7f7`, surface tint `#fcfcfc`, surface warm `#f0f0ea`, white `#ffffff`, accent blue `#207dff`, accent green `#75c33a`, muted `#6a6972`, muted warm `#777169`, hairline `#e5e7eb` — Semantic color. Hero 48px Instrument Sans 500 / 1.30 / `-1.584px` — Type roles + Header / Hero CTA components. Pricing card `#fcfcfc` at 0.5 alpha, `rgba(0,0,0,0.08)`, 12px, no shadow — Pricing Card. Warm tile `#f0f0ea` / `rgba(0,0,0,0.04)` / 8px — Warm Feature Tile. Nav Inter 16px / 400 / `#2e2e2e` / 8px — Top Nav Item. Dark pill "Get started" — Header CTA. Radius 6 / 8 / 12 / 9999 — Shape. 繁體中文 native CJK face — Family + Application rules.

## Claim ledger

| Claim | Surface |
|---|---|
| `tokens.colors.ink` / `ink-pure` / `canvas` / `surface` / `surface-tint` / `surface-warm` / `accent-blue` / `accent-green` / `muted` / `muted-warm` / `hairline` / `on-primary` | live heptabase.com + heptabase.com/pricing |
| `tokens.typography.family.display` / `body` / `cjk` | live heptabase.com |
| `tokens.typography.display-hero` / `section` / `card-title` / `nav` / `body` / `button` / `pill` | live heptabase.com + pricing |
| `tokens.spacing.xs` / `sm` / `md` / `base` / `lg` / `xl` / `xxl` / `section` | source token set (live-extract) |
| `tokens.rounded.sm` / `md` / `lg` / `pill` | live heptabase.com geometry + token-set pill step |
| `tokens.shadow.none` | live heptabase.com + pricing (`box-shadow: none`) |
| `tokens.components.button-primary` / `button-cta-lg` / `button-ghost` / `nav-link` / `subnav-pill` / `pricing-card` / `canvas-card` / `feature-card` / `toggle-segment` | live heptabase.com + pricing |
| Vision "create a world where anyone can effectively establish a deep understanding of anything"; founder Alan Chan | wiki.heptabase.com |
| Voice strings "Master anything you learn…"; "For anyone building a lifelong knowledge base."; "Trusted by customers from the world's leading universities." | live homepage / pricing |
| Country TW by operating base; Delaware incorporation; Y Combinator W22 | source §11 narrative (public operating-base classification) |

## Proof notes

- Two brand-owned Tier 1 web surfaces plus the Wiki, recorded 2026-06-17. Computed interface values in the source body attach to heptabase.com and heptabase.com/pricing. The Wiki is named and contributes the vision string and the founder record, not computed tokens.
- `components_harvested: true`; nine component records in the source token set.
- The source records no interaction expansion and no `focus-visible` string. Uncaptured hover, focus-visible, disabled, loading, error, and success treatments are omitted as values; they are not turned into `not-applicable` for lack of capture. Applicability follows control role. State coverage is not claimed complete.
- Heptabase publishes no first-party design-system documentation in the source (getdesign 404; refero silent). Derived-editorial qualifications therefore close with the toss-form: not Heptabase-authored or a separately published UI specification (rulebook v12 B2a).
- Alan Chan, Taipei operating base, Delaware incorporation, and Y Combinator W22 are source-stated narrative. They stay in Experience Scope as narrative context, not as interface tokens.

## Portable derived-editorial scope

Every passage in the portable `DESIGN.md` that carries the derived-editorial qualification. The qualification itself stays in the body; this table is an index, not its home. Measured against `DESIGN.md` with `grep -o 'derived editorial implementation inference' … | wc -l` (file-level, not `grep -c`): **32**. This table has **32** rows (E1 1:1). The same 32 lines also carry `not Heptabase-authored` and `separately published UI specification`.

| Portable location | Qualified material |
|---|---|
| Experience — Scope ¶1 | The surface boundary that keeps values on the surface that established them, and that treats the Wiki as a named mission source rather than a token surface |
| Experience — Scope ¶2 | The atmosphere readings: paper-like low-glare canvas, printed-on-paper weight, tidy desk guided by type, quiet board |
| Experience — Scope ¶3 | Classing the §11 founding-and-incorporation narrative as not a token source; the operating-base TW classification; the founder's-hand-in-restraint reading |
| Experience — Scope ¶4 | The refusal/embrace reading, and reading the website as a demonstration of the product's thesis |
| Experience — Primary tasks | The step from observed labels to "primary tasks" |
| Experience — Audience | The step from the source's group labels to an audience grouping, and the Taipei-built → 繁體中文 fallback-scope causal |
| Experience — Distinctive traits | The grouping and characterizing half of the recorded values |
| Experience — Principles | All five §12 principles and their UI implications |
| Experience — Application rules | Grouping the Do list as application rules, and their rationales |
| Experience — Avoid | The rationales in the Don't list |
| Foundations — Semantic color | The characterizing phrases attached to roles |
| Foundations — Spacing | Keeping `sm: 8` / `md: 12` / `base: 16` / `lg: 24` off the radius and type keys that share a number |
| Foundations — Shape | Calling 8px the workhorse, keeping rounded steps off spacing keys, and classing 10px as a component measurement |
| Foundations — Elevation | Reading the stack as a flat, tint-and-hairline elevation system |
| Foundations — Motion / omitted curves | Classing the three source-listed curves as untraceable to Heptabase evidence and omitting them on that ground |
| Foundations — Motion | Reading the motion rules as a calm, paper-like / steadiness signal |
| Typography — Font evidence / Official product-use | Classing the live surfaces as not a separately issued typography specification |
| Typography — Font evidence / License | Treating Instrument Sans and Inter as upstream faces, not Heptabase-owned brand assets |
| Typography — Font evidence / Outside these captures | Classing type beyond the two token-inspected pages as outside this contract |
| Typography — Family | The ban on substituting a system face and presenting a fallback as the Heptabase face |
| Typography — Type roles | Keeping line heights as unitless ratios and refusing a single px conversion |
| Typography — Type rules | Reading the scale as the four typography principles |
| Typography — Assets | Classing the favicon slug as a third-party favicon service |
| Typography — Assets / image behavior | Reading shadowless product-mock cards as consistent with the flat system |
| Components — How to read this section | The role-based decision procedure, and every Reason cell in every per-component table |
| Components — Accent Treatment | Reading the two accents as information, not chrome decoration |
| Components — State record | The nine-row §14 contract read as this surface's state contract, not as per-control observations or treatments attached to marketing destination controls |
| Layout & Platforms | Reading the page as a generous canvas, tint-not-elevate bands, and type-not-color hierarchy |
| Layout & Platforms — Responsive | Reading the breakpoints and collapsing strategy as system-level rather than cross-viewport measurements |
| Layout & Platforms — Image behavior | Reading that image behavior as consistent with the flat system |
| Content & Locales — voice / register | The voice reading and the register-table contract |
| Governance — Recorded unresolved | Framing the list as source-opened values, not a license to invent or a list of never-established domains |
