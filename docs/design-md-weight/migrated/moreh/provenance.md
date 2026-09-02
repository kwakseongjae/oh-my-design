# Moreh provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the Moreh migration. Canonical source remains `web/references/moreh/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | moreh |
| name | Moreh |
| display_name_kr | 모레 |
| country | KR |
| category | backend-devops |
| homepage | https://moreh.io |
| primary_color | `#ff5700` |
| logo | `type: favicon`, `slug: https://www.google.com/s2/favicons?domain=moreh.io&sz=128` |
| omd format (source) | 0.1 |
| added | 2026-06-26 |
| verified | 2026-06-26 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-26 |
| components_harvested | true |

The logo slug is a third-party favicon-proxy URL, not a Moreh-hosted brand file. The portable Assets section names it as a catalog pointer.

Token note from source, verbatim: "primary = live Request-Demo CTA orange (#ff5700, Tailwind token bg-accent); lighter orange-400 (#ff793e) is the hover/secondary callout; darker burnt-orange (#dd4300) is the AA-safe inline link color on light. Ink is warm near-black (#050403); cream (#f8f7f4) is the sunken-section surface and the on-dark text. Footer is neutral-800 (#1c1a18)."

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-26 |
| added | 2026-06-26 |
| tokens.extracted | 2026-06-26 |
| surfaces inspected | 2026-06-26 |
| voice samples verified live | 2026-06-26 |

Conflicts unresolved, quoted from the source footer: none.

Verification method recorded by the source: `omd:add-reference` CREATE — Tier 1 live inspect via playwright getComputedStyle on `https://moreh.io` and `https://moreh.io/blog`.

## Surfaces

The source declares no surface ids. The rows below are its own URL list with its own parenthetical descriptors.

| url | source descriptor | inspected |
|---|---|---|
| https://moreh.io | homepage | 2026-06-26 |
| https://moreh.io/blog | blog | 2026-06-26 |
| https://github.com/moreh-dev | Moreh official GitHub org | 2026-06-26 |
| https://moreh.io/about | narrative confirmation (WebFetch) | 2026-06-26 |

GitHub and about do not supply computed interface tokens in the source. They stay named sources.

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://moreh.io | 2026-06-26 |
| blog-live | product-surface | https://moreh.io/blog | 2026-06-26 |
| github-org | brand-owned | https://github.com/moreh-dev | 2026-06-26 |
| about-narrative | brand-owned | https://moreh.io/about | 2026-06-26 |

### Tier 1

- https://moreh.io
- https://moreh.io/blog
- https://github.com/moreh-dev

### Tier 2 (no usable record)

- getdesign.md/moreh — not listed (404 "No designs found"); styles.refero.design — no Moreh-specific entry

Those directory findings describe this catalog's coverage. They stay here. They are lookup queries, not portable copy.

## Claim ledger

Claims use YAML anchors from the source. Live inspect 2026-06-26 on home unless noted.

| claim | surface |
|---|---|
| tokens.colors.primary `#ff5700` | home |
| tokens.colors.primary-hover `#ff793e` | home |
| tokens.colors.link `#dd4300` | home |
| tokens.colors.ink `#050403` | home |
| tokens.colors.cream `#f8f7f4` | home |
| tokens.colors.muted `#65635f` | home |
| tokens.colors.faint `#a09e9a` | home |
| tokens.colors.hairline `#dfdeda` | home |
| tokens.colors.hairline-dashed `#d2d1cd` | home |
| tokens.colors.dark `#1c1a18` | home |
| tokens.colors.dark-border `#2a2926` | home |
| tokens.colors.canvas `#ffffff` | home |
| tokens.typography.family.sans `Inter` | home |
| tokens.typography.display-hero.size / weight / lineHeight / tracking / use `Hero headline, Inter SemiBold, fluid clamp` | home |
| tokens.typography.display.size / weight / lineHeight / tracking / use `Page title (Blog), Inter SemiBold` | blog |
| tokens.typography.section.size / weight / lineHeight / tracking / use `Section titles (H2), Inter SemiBold` | home |
| tokens.typography.subsection.size / weight / lineHeight / tracking / use `Card / feature heads (H3)` | home |
| tokens.typography.body.size / weight / lineHeight / use `Standard reading text, Inter` | home |
| tokens.typography.nav.size / weight / lineHeight / use `Top nav links` | home |
| tokens.typography.button.size / weight / lineHeight / use `CTA button label, Inter Medium` | home |
| tokens.typography.small.size / weight / lineHeight / use `Inline accent links, dropdown items` | home |
| tokens.typography.micro.size / weight / tracking / use `Footer legal pill, wide-tracked` | home |
| tokens.spacing.xs `6` / sm `8` / md `12` / base `16` / lg `20` / xl `24` / section `96` | home |
| tokens.rounded.sm `6` / full `9999` | home |
| tokens.shadow.none `none` | home |
| tokens.components.button-primary.* (`type: button`, hover `#ff793e`) | home |
| tokens.components.button-ghost.* (`type: button`) | home |
| tokens.components.text-link.* (`type: button`) | home |
| tokens.components.nav-item.* (`type: tab`, active `text #dd4300 + bg #f8f7f4`) | home |
| tokens.components.callout-accent.* (`type: card`) | home |
| tokens.components.callout-inverse.* (`type: card`) | home |
| tokens.components.dropdown-menu.* (`type: dialog`) | home |
| tokens.components.footer-pill.* (`type: badge`) | home |

Live-inspect comment (source trailing HTML): Hero H1 Inter 93.6px / weight 600 / -3.744px / line-height 93.6px / color #f8f7f4 on hero-dark #050403. Semantic Tailwind classes observed: bg-accent #ff5700, bg-o-400 #ff793e, bg-inverse/text-on-inverse #050403, bg-n-800 #1c1a18, section-sunken #f8f7f4, rounded-sm 6px.

## Sibling file

`web/references/moreh/.verification.md` exists. It is a separate canonical file, not the migration input. Values it carries that the visible source body does not stay in this ledger. They are not portable tokens. Mention here is disposition of the sibling, not use as a portable value.

Sibling-only observations recorded here:

- Method extras: colors authored in `oklch` (Tailwind v4); each computed value re-resolved to hex via a 1×1 canvas `fillStyle` read; Inter hashed face `__Inter_f367f3`; cookie/modal dismissal pass; `waitUntil: domcontentloaded`.
- Raw sample extras: body `line-height: 24px`; hero section `.hero-dark` `width 1440px`, `height 830px`; h2 line-height `44.8px`; h3 line-height `23.4px`; inline link `border-radius: 6px`; footer height 428px; orange-400 callout `.bg-o-400` as a card with padding 20px 24px; frequency scans (background `#ffffff` ×14 / `#ff5700` ×7 / `#f8f7f4` ×3 / `#050403` ×2 / `#ff793e` ×1 / `#1c1a18` ×1; text `#050403` ×165 / `#65635f` ×50 / `#000000` ×36 / `#dd4300` ×33 / `#a09e9a` ×28 / `#f8f7f4` ×22; border `#dfdeda` ×20 / `#000000` ×5 / `#2a2926` ×3 / `#d2d1cd` ×1); oklch 0.11 0.005 85 for ink.
- Published strings the source body does not quote: h3 `Heterogeneous GPU Inference`; CTA writing `Request Demo →`; blog title `Blog – Moreh`; country-sources note `Technical Report + Customer Case posts`.
- Logo decision: Google s2 favicon fetched 861 bytes (image/png), visually confirmed black "M" + orange dot; alternatives moreh.io/favicon.ico (605B), github.com/moreh-dev.png (2524B).
- KR brand-owned requirement note: getdesign.md / styles.refero.design / Google favicon proxy are explicitly NOT counted toward the KR brand-owned requirement.

Hexes, families, radii, paddings, and the four voice samples that also stand in the source DESIGN.md are corroboration.

## Proof notes

- components_harvested: true
- tokens.source: live-extract
- Interaction expansions: the source YAML records hover `#ff793e` on button-primary and active `text #dd4300 + bg #f8f7f4` on nav-item. Other component records are default-state observations.
- Uncaptured hover/pressed/`focus-visible` treatments on controls other than Request Demo hover are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete.
- The source never records `focus-visible` as a captured state; no `focus-visible` treatment value appears in the portable body.
- Three YAML cards (Accent Callout, Inverse Callout) plus Feature Card carry no interactive-kind evidence, so kind and the state-applicability map are omitted for them.
- Loading, error, and success are closed with a role reason on destination controls (View Benchmarks, Inline Accent Link, Footer Legal Pill, Nav Mega-Dropdown, Nav Item), never for absence of observation.
- No published first-party UI specification was found; the B2a example form is used as-is.
- Official about and GitHub org are narrative / brand-owned sources, not token sources.

## Derived editorial inventory

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience Scope `:9` | Two inspected homepage/blog routes as this contract's token surfaces; GitHub and about as named sources that do not supply computed interface tokens |
| Experience Scope `:11` | Characterizations (disciplined vendor-neutral engineering; quiet almost-editorial neutral field; orange doing all the persuading; industrial and confident; infrastructure tooling that respects attention rather than a consumer app fighting for it; premium as scale and tracking; a single dense engineered headline block; dark and serious opening; documentation-style sections; uniformly restrained geometry) as source readings, not a published UI specification; hex values, family, radii, and labels beside them are the source's own |
| Experience Scope `:13` | Founding-and-product narrative, the refuses/embraces pairing, and the closing sentence that the restraint is the message as brand context that does not by itself supply interface tokens |
| Primary tasks `:19` | Selecting the four recorded controls/labels/surfaces as primary tasks; not from a persona section |
| Audience `:29` | Dropping fictional biographies; carrying no name, age, city, motivation, or affiliation classification; reading the source-named groups as audience; keeping the source's sophisticated-reader and peer-to-peer note beside those groups |
| Distinctive traits `:33` | Classifying the list as a restatement of source Key Characteristics, and the groupings and the readings inside them |
| Principles `:47` | Five numbered stems plus every UI implication; source labels of this kind as editorial readings connecting observed design to positioning |
| Application rules `:57` | Eight Do rules and the reasons attached to them |
| Avoid `:70` | Don't list and the reasons inside them |
| Semantic color `:87` | Role names from the source's labels; pairing each hex to its token-set path; cream as both sunken-section surface and on-dark text; ink as both heading text and hero-dark / inverse-callout background; canvas off dropdown-menu surface as two jobs of `#ffffff`; three orange keys unmerged |
| Spacing `:116` | Named steps as a ~4px base with a 6/8/12/16/20/24 ladder; YAML unitless steps off prose px; body type `16` off `tokens.spacing.base: 16`; button padding `18px` off the YAML spacing map |
| Shape `:120` | YAML `6` off prose `6px`; YAML `9999` off prose `9999px`; `6px` as the single workhorse radius rather than a mid-range option; `9999` as avatar/dot-only rather than a button pill |
| Elevation `:133` | Near-shadowless system; depth through band contrast and hairlines; deliberate engineering-grade flatness; orange or inverse dark rather than drop shadow; four-level table, `none` token, live `box-shadow: none`, and faint-shadow overlay writing unmerged |
| Motion duration `:137` | Duration roles as this record states them; no computed transition observation behind the duration table |
| Motion easing `:145` | Easing token names and uses as this record states them; curves omitted while token names and uses remain |
| Motion `:153` | Reduced-motion rule; motion character (functional and quiet; no bounce or spring; steadiness) |
| Motion B3 `:155` | Five-kind promotion gate; refusal of a partial confirmation; a match against an official framework or vendor document is not that gate |
| Font evidence `:163` | Evidence-class sorting; resolution cells (no published type spec, live Inter, no distributed file, no declared-only family, no license, no type value from a surface outside the two captures) |
| Family `:181` | Inter as the one typeface that carries every job; 600 / 500 / 400 as the only weights in use; refusal to substitute a system font or another grotesque as the brand face |
| Type roles `:185` | YAML numbers kept beside §3 px and live 93.6px / -3.744px; YAML `use` verbatim; body `16` off spacing `16`; YAML micro with no lineHeight beside §3 micro `1.50`; live hero `93.6px` as inspect writing rather than a replacement for YAML `94` |
| Type-hierarchy readings `:201` | Four hierarchy readings (weight does the work; tracking tightens with size; no light weight; dense technical body) |
| Assets `:213` | Google s2 favicon as catalog identity pointer rather than a Moreh-hosted brand file; charts as first-party page content rather than a published illustration specification |
| Capture record `:226` | Applicability-by-meaning note; interactive-kind and applicability verdicts and the reason for either; omit-kind for three card records; YAML primitive type attached only when recorded; non-YAML components labelled `not in the token set`; not a complete state-coverage claim |
| State treatments `:230` | Nine-row state contract as composed, uncomputed treatments |
| Layout whitespace `:465` | Editorial calm over density; Band cadence; Hairline economy; ~4px base as a reading of the recorded scale |
| Layout responsive `:473` | Breakpoint table and collapsing rules; inspections taken at a desktop viewport |
| Layout touch `:492` | Compact but tappable / comfortable as readings of recorded heights |
| Layout image `:499` | No-shadow imagery as consistent with the flat system; 6px radius across breakpoints |
| Content voice samples `:506` | Parenthetical captions (hero headline, page title meta, section heading, CTA labels) on verbatim live strings |
| Content voice and tone `:517` | Precise / technical / quietly ambitious register, including the tone table |
| Content forbidden register `:529` | Hype superlatives, exclamation-heavy marketing, vague AI buzzwords, unbacked claims |
| Content locale `:533` | `모레` kept beside `Moreh` rather than as a replacement; two founder-name writings unmerged |
| Named gaps `:567` | List as unnamed values rather than as coverage of domains the source never named |

## Omission ledger

Mention (disposition) is not use (re-hosting). This table names what was dropped and where the drop is recorded. It does not re-list fictional demographics, and it does not assert portable-body absence in the same sentence that reprints a dropped string as if it were a surviving token.

| Item | Disposition |
|---|---|
| Source §13 personas — 3 fictional archetypes (name, age, city, motivation, and affiliation classification) | Deleted. The source's own header labels them fictional archetypes informed by publicly observable segments. Not promoted to Audience or primary-tasks, and not re-hosted here as names, ages, cities, motivations, or affiliation classifications (D2, D2a). Audience in the portable body keeps the source's own group wording only. |
| Source §9 Agent Prompt Guide remaining after color/type/component constraints were moved | Deleted as tool-facing prompt. Brand constraints already live in Foundations, Typography, Components, and Layout. The §9-only Feature Card geometry (white `#ffffff`, 1px `#dfdeda`, 6px, no shadow, title 18px Inter 600 / -0.18px / `#050403`, body 16px 400 / `#65635f`, inline link `#dd4300` 13px/500 with a → arrow) and the sunken-section writing (`#f8f7f4`, 96px vertical padding, 1px top border `#dfdeda`) were moved into Components and Layout rather than dropped (A3). |
| `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)`, `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)`, `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)` | The three exact curves carry no attribution in the source, whose motion section is part of an unsourced philosophy layer; `ease-exit` is the same value carried by the legacy authoring template. Token names, durations, uses, signature motion, and reduced-motion survive in the portable body; the curves are dropped rather than promoted. B3 five-kind gate stays in portable Motion. |
| Sibling-only computed values and published strings listed under Sibling file | Ledger only |
| Tier 2 getdesign / Refero lookup detail | Ledger only |
