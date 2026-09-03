# Plaid provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/plaid/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | plaid |
| name | Plaid |
| country | US |
| category | fintech |
| homepage | https://plaid.com |
| primary_color | `#02294b` |
| logo | `type: favicon`, `slug: https://www.google.com/s2/favicons?domain=plaid.com&sz=128` |
| omd format (source) | 0.1 |
| added | 2026-06-17 |
| verified | 2026-06-17 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-17 |
| components_harvested | true |

The logo slug is a third-party favicon-proxy URL, not a Plaid-hosted brand file. The portable Assets section names it as a catalog pointer.

Token note from source, verbatim: "Two-surface live inspect (plaid.com home + plaid.com/products). Primary = the deep navy #02294b that fills dark sections, input borders, and the dark-section pill CTAs. Signature ink is the dark teal #012e37 (nav/menu). Hero H1 uses a bright green→teal radial-gradient text fill (#86ef5a → #10d0b7) clipped to glyphs. Bright gradient stops live in prose/components only — never as a solid token role."

`tokens.source: live-extract` is this identity/Claim ledger only as a YAML key (A1c). The portable body does not contain the string `live-extract`. `components_harvested: true` is this ledger only as a YAML key (A1c).

Source has no `ds.name` / `ds.url` / `ds.type` / `ds.description` and no `verification_v2` object. None is invented here. Threads is named in the source body as Plaid's internal design system (Platform + Brand, WCAG 2.1 AA), documented on Plaid blogs and `threads.plaid.com/brand`; portable B2a closes use the adapted form that names that documentation, not the unmodified example that would deny a published specification.

Homepage `https://plaid.com` is dual-destination: Experience Scope + this identity/surfaces/Tier 1 ledger (E2a). Catalog `primary_color` `#02294b` is dual: this identity ledger + portable Foundations Plaid Navy / YAML `primary` (E2a). Favicon URL is dual: this identity ledger + portable Typography & Assets (E2a).

## Freshness

| Event | Date |
|---|---|
| verified (YAML) | 2026-06-17 |
| added | 2026-06-17 |
| tokens.extracted | 2026-06-17 |
| surfaces inspected | 2026-06-17 |
| voice samples verified live | 2026-06-17 |

Conflicts unresolved, quoted from the source footer: none.

Verification method recorded by the source: `omd:add-reference` CREATE — Tier 1 live inspect via playwright getComputedStyle on two surfaces.

## Surfaces

The source declares no surface ids. The rows below are its own URL list with its own parenthetical descriptors.

| url | source descriptor | inspected |
|---|---|---|
| https://plaid.com/ | home — hero gradient H1, nav, pill CTAs, dark sections | 2026-06-17 |
| https://plaid.com/products/ | products — H1/H2/H3 navy headings, mega-menu rows, dark-section Explore pills, input border | 2026-06-17 |

The URLs are dual-destination with portable Experience Scope (E2a).

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://plaid.com/ | 2026-06-17 |
| products-live | product-surface | https://plaid.com/products/ | 2026-06-17 |
| plaid-design-blog | named Threads documentation | https://medium.com/plaid-design | named in source HTML comment |
| plaid-design-behind-the-scenes | named Threads documentation | https://plaid.com/blog/behind-the-scenes-with-design | named in source HTML comment |
| threads-brand | named Threads brand site | https://threads.plaid.com/brand | named in source HTML comment |

### Tier 1

- https://plaid.com/ (home — hero gradient H1, nav, pill CTAs, dark sections)
- https://plaid.com/products/ (products — H1/H2/H3 navy headings, mega-menu rows, dark-section Explore pills, input border)

### Tier 2 (no usable record)

- getdesign.md/plaid — not listed (directory returns "No designs found for 'plaid'")
- styles.refero.design/?q=plaid — no Plaid style card surfaced (fuzzy results only: Patch, Gocardless, Quicken, Square, Stripe)

Those directory findings describe this catalog's coverage. They stay here. They are lookup queries, not portable copy.

### Threads documentation (named; not a token table in this packet)

Source HTML comment: Design system "Threads" (Platform + Brand split, WCAG 2.1 AA) is documented on Plaid's own engineering/design blog (`medium.com/plaid-design`, `plaid.com/blog/behind-the-scenes-with-design`) and the Threads brand site (`threads.plaid.com/brand`). The live brand-guidelines route returned a 404 to the headless bot, so all token claims are grounded in the two inspected marketing surfaces.

## YAML token block (A1c)

Machine-readable keys as the source frontmatter wrote them. Portable Foundations / Typography / Components restate the values with role names; this table is the ledger of the YAML keys.

**colors:** primary `#02294b`; navy-deep `#00172e`; indigo-deep `#0d0d3f`; ink-teal `#012e37`; ink `#111111`; ink-button `#111112`; charcoal `#232424`; blue `#043c67`; link `#0a54c4`; slate `#5c7695`; green `#468254`; canvas `#ffffff`; surface `#f7faff`; surface-grey `#f6f6f6`; hairline `#ebf0f4`; hairline-alt `#dde3e9`; on-primary `#ffffff`.

**typography.family:** display `Plaid Sans`; body `Cern`.

**typography roles (YAML):** display-hero size 76 weight 500 lineHeight 1.12 tracking -3.4 use `Home hero H1, Plaid Sans, gradient text fill`; display-dark size 70 weight 500 lineHeight 1.08 tracking -2.8 use `Dark-section H2 headlines, Plaid Sans`; section size 60 weight 600 lineHeight 1.10 tracking -2 use `Product section H2, Plaid Sans`; page-title size 64 weight 600 lineHeight 1.0 tracking -2 use `Products page H1, Plaid Sans`; subhead size 26 weight 500 lineHeight 1.40 tracking -0.5 use `Feature H3 subheads, slate, Plaid Sans`; card-title size 24 weight 600 lineHeight 1.30 use `Product card H3, Plaid Sans`; stat size 36 weight 800 lineHeight 1.33 use `Stat figures, Cern`; eyebrow size 16 weight 800 lineHeight 1.0 tracking 2 use `All-caps eyebrow label, Plaid Sans`; body size 16 weight 400 lineHeight 1.50 use `Standard reading text, Cern`; button size 20 weight 600 lineHeight 1.0 use `Hero pill CTA label, Plaid Sans`; button-sm size 16 weight 600 lineHeight 1.0 use `Header pill CTA label, Plaid Sans`.

**spacing:** xs 4, sm 8, md 12, base 16, lg 24, xl 32, xxl 48, section 64.

**rounded:** sm 6, md 8, lg 12, full 9999.

**shadow:** none `none`.

**components (YAML type preserved, A1b):** button-primary-dark type button; button-primary-light type button; button-outline type button; button-ghost type button; nav-link type tab; menu-item type listItem; card-product type card; card-dark type card; input-text type input; badge-eyebrow type badge.

## Claim ledger

Claims use YAML keys from the source. Live inspect 2026-06-17 on home unless noted.

| claim | surface |
|---|---|
| tokens.colors.primary `#02294b` | home + products |
| tokens.colors.navy-deep `#00172e` | products headings; home section H2 inspect |
| tokens.colors.indigo-deep `#0d0d3f` | home dark band |
| tokens.colors.ink-teal `#012e37` | home nav / products mega-menu |
| tokens.colors.ink `#111111` | home body |
| tokens.colors.ink-button `#111112` | home header pills |
| tokens.colors.charcoal `#232424` | home nav |
| tokens.colors.blue `#043c67` | home copy |
| tokens.colors.link `#0a54c4` | home carousel |
| tokens.colors.slate `#5c7695` | home feature H3 |
| tokens.colors.green `#468254` | home accent block |
| tokens.colors.canvas `#ffffff` | home + products |
| tokens.colors.surface `#f7faff` | products mega-menu |
| tokens.colors.surface-grey `#f6f6f6` | home |
| tokens.colors.hairline `#ebf0f4` | home cards |
| tokens.colors.hairline-alt `#dde3e9` | home outline CTA |
| tokens.colors.on-primary `#ffffff` | on-dark text |
| tokens.typography.family.display `Plaid Sans` / family.body `Cern` | home + products |
| tokens.typography.display-hero.* use `Home hero H1, Plaid Sans, gradient text fill` | home |
| tokens.typography.display-dark.* use `Dark-section H2 headlines, Plaid Sans` | home |
| tokens.typography.section.* use `Product section H2, Plaid Sans` | products |
| tokens.typography.page-title.* use `Products page H1, Plaid Sans` | products |
| tokens.typography.subhead.* use `Feature H3 subheads, slate, Plaid Sans` | home |
| tokens.typography.card-title.* use `Product card H3, Plaid Sans` | home / products |
| tokens.typography.stat.* use `Stat figures, Cern` | home |
| tokens.typography.eyebrow.* use `All-caps eyebrow label, Plaid Sans` | products |
| tokens.typography.body.* use `Standard reading text, Cern` | home |
| tokens.typography.button.* use `Hero pill CTA label, Plaid Sans` | home |
| tokens.typography.button-sm.* use `Header pill CTA label, Plaid Sans` | home |
| tokens.spacing.xs `4` / sm `8` / md `12` / base `16` / lg `24` / xl `32` / xxl `48` / section `64` | home |
| tokens.rounded.sm `6` / md `8` / lg `12` / full `9999` | home + products |
| tokens.shadow.none `none` | home + products |
| tokens.components.button-primary-dark.* (`type: button`) | home |
| tokens.components.button-primary-light.* (`type: button`) | home |
| tokens.components.button-outline.* (`type: button`) | home |
| tokens.components.button-ghost.* (`type: button`) | home |
| tokens.components.nav-link.* (`type: tab`, active `text #012e37`) | home |
| tokens.components.menu-item.* (`type: listItem`) | products |
| tokens.components.card-product.* (`type: card`) | home |
| tokens.components.card-dark.* (`type: card`) | home |
| tokens.components.input-text.* (`type: input`) | products |
| tokens.components.badge-eyebrow.* (`type: badge`) | products |

Live-inspect comment (source trailing HTML): home hero H1 Plaid Sans 76px/500/-3.4px, gradient text fill `#86ef5a`→`#10d0b7` `background-clip:text`; section H2 "Powered by the largest financial network" 58px/500, color `rgb(0,23,46)` `#00172e`; pill CTAs 100px radius, dark fill on `#02294b` / `#0d0d3f` sections; nav ink `rgb(35,36,36)` `#232424` and `rgb(1,46,55)` `#012e37`; body `rgb(17,17,17)` `#111111`. Products H1 "Everything you need to build intelligent finance" Plaid Sans 64px/600/-2px, `rgb(0,23,46)` `#00172e`; product H2 60px/600; H3 24px/600; mega-menu rows bg `rgb(247,250,255)` `#f7faff` text `rgb(1,46,55)` `#012e37` 6px radius; Explore pills on dark bands `rgb(2,41,75)` `#02294b`; input border 1px solid `rgb(2,41,75)` `#02294b`, bg `#ffffff`, 8px radius.

Voice samples (§10) are verbatim from the live home and products surfaces (hero H1 "Turn data into revolutionary financial products", section H2 "Powered by the largest financial network", products H1 "Everything you need to build intelligent finance"). Dual with portable Content (E2a).

Brand narrative (§11): founding 2013 by Zach Perret (CEO) and William Hockey; product catalog (Auth, Identity, Balance, Transfer, Signal, Protect, IDV) is the live products-page taxonomy. Founding people/year are widely documented public facts, not directly quoted from a verified Plaid statement in that turn. Dual with portable Scope (E2a).

Interpretive claims (e.g., "ration the color", "infrastructure should be invisible then delightful") are editorial readings connecting Plaid's observed design and stated Threads philosophy to its positioning, not directly sourced Plaid statements. Dual with portable Principles (E2a).

## Sibling file

`web/references/plaid/.verification.md` exists. It is a separate canonical file, not the migration input. Values it carries that the visible source body does not stay in this ledger. They are not portable tokens. Mention here is disposition of the sibling, not use as a portable value.

Sibling-only observations recorded here:

- Method extras: global playwright (chromium, headless, viewport 1440×900), goto with `domcontentloaded` + 4s settle, Escape/cookie dismissal pass, full-DOM background/text color frequency scan.
- Headlines the source body does not quote: h2 "The AI infrastructure behind smarter finance" (home dark band, 70px / 500 / line-height 75.6px / letter-spacing -2px / white); h2 "A network that makes your products better" (home, 70px / 500 / letter-spacing -2.8px / `#02294b`); h2 "Payments" (products, 60px / 600 / -2px / `#00172e`); "Explore Protect" pill; carousel control "Previous items".
- Computed extras the source body does not write: hero H1 line-height `85.12px` (source §3 writes `85px`); home section H2 line-height `66.12px` and letter-spacing `-2px` on the 58px line; mega-menu padding `13px 11px 13px 16px` (source YAML/§4 write `13px 16px`); product-card padding `4px`; carousel control `padding: 17px`, height 54px, `border-radius: 100%`; nav/outline computed `border-radius: 999px` (source §1 already writes `999px`; YAML outline/nav write `9999px`); "Read the docs" nearest filled ancestor `background-color: rgb(13, 13, 63)` `#0d0d3f` (source YAML groups that CTA with `button-primary-dark` bg `#02294b`; the HTML comment says dark fill on `#02294b` / `#0d0d3f` *sections*).
- Frequency extras: background `rgb(39,69,92)` ×8 (not a source color token); text `rgb(0,0,0)` ×465; document.title home `Plaid: Enabling all companies to build fintech solutions`; document.title products `Plaid products - Financial APIs & connections for fintech | Plaid`; eyebrow computed as lowercase `all products`.
- Logo decision extras: Google s2 fetch 3151 bytes; `https://cdn.simpleicons.org/plaid` 404.
- Conflict matrix rows and the US-brand note (no ≥2 regional brand-owned rule).

Hexes, families, radii, paddings, and the three source voice samples that also stand in the source DESIGN.md are corroboration.

## Proof notes

- components_harvested: true
- tokens.source: live-extract
- Interaction expansions are not recorded in this packet. Component records are default-state observations, plus nav-link active `text #012e37`.
- Uncaptured hover/pressed/`focus-visible` treatments are omitted. They are not `not-applicable`; applicability follows control meaning. Generic `Focus` named as a `motion-fast` use is a different observation. State coverage is not claimed complete.
- The source never records `focus-visible` as a captured state; no `focus-visible` treatment value appears in the portable body.
- Two YAML cards plus the eyebrow badge carry no interactive-kind evidence, so kind and the state-applicability map are omitted for them.
- Loading, error, and success are closed with a role reason on destination controls (Primary Pill, Header Dark Pill, Outline Pill, Ghost Pill, Top Nav Item, Mega-Menu Row), never for absence of observation. The text input keeps those three applicable as a form field.
- Threads is named as a published design system; portable B2a closes name that documentation rather than deny it. Token claims remain grounded in the two inspected marketing surfaces, as the source states.
- Official founding facts and the HTML-comment class split are narrative / evidence-class context, not extra token sources.

## Omitted easing curves (T1-3 constraint 5)

Deletion target is unsourced philosophy-layer curves. Duration tokens, signature motions, reduced-motion, and easing *names* remain in portable Foundations.

Source §15 writings, kept here as the omission ledger (not promoted as portable tokens):

- `ease-enter` curve as the source wrote it: `cubic-bezier(0.2, 0.6, 0.25, 1)`
- `ease-exit` curve as the source wrote it: `cubic-bezier(0.4, 0.0, 1, 1)` — matches `spec/omd-v0.1.md` example `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)`
- `ease-standard` curve as the source wrote it: `cubic-bezier(0.25, 0.1, 0.25, 1)`

Portable Foundations keeps the names `ease-enter` / `ease-exit` / `ease-standard` and the Use column, and records the omission. Dual: this ledger + portable Motion table / Named gaps (E2a). B3 five-kind gate stays in portable Motion.

## Omission ledger (D2 / D2a)

Source §13 carries 3 fictional archetypes (names, ages, cities, motivations, and affiliation classifications included). They are marked in the source as fictional archetypes informed by publicly observable Plaid user segments, not individual people. Deleted with §13. Not promoted into Experience Audience or Primary tasks. Not re-hosted in this file even as names, cities, motivations, or affiliation classifications.

Mention of that deletion is this unidentified count and field-kind only. This paragraph names the source section and the dropped field kinds. It does not assert that those strings are absent from a file that is currently listing them.

## Derived editorial inventory

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience Scope `:9` | Two inspected home/products routes as this contract's token surfaces; Platform/Brand split as the source names it rather than as a second token table; blog and brand-site documentation as named Threads sources that do not supply the computed tokens |
| Experience Scope `:11` | Characterizations (infrastructure that wants to feel approachable; an eclectic, almost playful palette used with strict discipline; the hero headline as the defining gesture and the single most distinctive thing on the page announcing the brand's whole thesis; serious financial plumbing rendered with warmth and color; restrained and engineered product chrome; bright color rationed; pill-based geometry; essentially no drop shadows, with separation entirely through tinted dark sections, hairlines, and whitespace; a flat, fast, modern aesthetic; engineered and trustworthy then one confident hit of color) as source readings, not taken from the published Threads documentation; hex values, family names, radii, labels, and `background-clip: text` beside them are the source's own |
| Experience Scope `:13` | Founding-and-product narrative, the refuses/embraces pairing, and the closing sentence "Serious infrastructure, rendered with warmth" as brand context that does not by itself supply interface tokens |
| Primary tasks `:19` | Selecting the three recorded controls/labels/surfaces as primary tasks; not from a persona section |
| Audience `:28` | Dropping fictional biographies; carrying no name, age, city, motivation, or affiliation classification; reading the source-named groups as audience; keeping the source's builder-not-lead note beside those groups |
| Distinctive traits `:32` | Classifying the list as a restatement of source Key Characteristics, and the groupings and the readings inside them |
| Principles `:45` | Five numbered stems plus every UI implication; source labels of this kind as editorial readings connecting observed design and stated Threads philosophy to positioning |
| Application rules `:55` | Eight Do rules and the reasons attached to them |
| Avoid `:68` | Don't list and the reasons inside them |
| Semantic color `:85` | Role names from the source's labels; pairing each hex to its token-set path; `#ffffff` unmerged across canvas, on-primary, outline-button fill, input fill, and white product-card fill; `#02294b` unmerged across primary dark-section fill, dark-feature-card fill, dark-section pill fill, and default input border; YAML `ink` off YAML `ink-button`; gradient stops in prose/components rather than as solid token roles |
| Semantic color leftover `:118` | Input `#4b4b4b` kept on `tokens.components.input-text` rather than as a `tokens.colors.*` key |
| Spacing `:126` | YAML unitless steps unmerged from the body px list; `tokens.spacing.sm: 8` off `tokens.rounded.md: 8`; `tokens.spacing.md: 12` off `tokens.rounded.lg: 12`; `tokens.spacing.base: 16` off body 16px and eyebrow 16px; `tokens.spacing.lg: 24` off card-title 24px; mega-menu `13px` as component padding rather than a YAML spacing key |
| Shape `:139` | YAML `100px` / `9999px` / §1 `999px` unmerged; `tokens.rounded.full: 9999` off `999px` and off `100px`; `tokens.rounded.md: 8` off `tokens.spacing.sm: 8`; `tokens.rounded.lg: 12` off `tokens.spacing.md: 12`; 6px–12px as cards and inputs rather than as a universal radius |
| Elevation `:151` | Effectively shadowless marketing surface; depth from dark sections, menu tints, and hairlines; color or a dark band rather than a drop shadow; flat, fast, and modern rather than skeuomorphic; three-level table, `none` token, and live `box-shadow: none` unmerged |
| Motion duration `:155` | Duration roles as this record states them; no computed transition observation behind the duration table |
| Motion easing `:163` | Easing token names and uses as this record states them; curves omitted while token names and uses remain |
| Motion `:171` | Reduced-motion rule; motion character (functional and quiet; no bounce or spring; steadiness; hero gradient as the one non-interactive motion) |
| Motion B3 `:173` | Five-kind promotion gate; refusal of a partial confirmation; a match against an official framework or vendor document, including the published Threads documentation, is not that gate; generic-Focus sentence classified as a non-promotion rather than a captured treatment |
| Font evidence `:181` | Evidence-class sorting; resolution cells (Threads documented but no type specimen page in this capture; live Plaid Sans / Cern; fallback stacks; no distributed file; no license; no type value from a surface outside the two captures) |
| Family `:199` | Plaid Sans as display/nav/menu/button and Cern as body/stat; fallback stacks as fallbacks rather than brand faces; refusal to present Helvetica, Arial, or an Averta-class face as Plaid Sans or Cern |
| Type roles `:203` | YAML numbers kept beside §3 px/rem and live 58px / 500; YAML `use` verbatim; body `16` off spacing `16`; live `58px` as inspect writing rather than a replacement for YAML `70` or `60`; Nav Link as a §3 table role that is not a YAML typography key |
| Type-hierarchy readings `:223` | Four hierarchy readings (extreme display tracking; two fonts two jobs; weight discipline; gradient fill not gradient backgrounds) |
| Assets `:235` | Google s2 favicon as catalog identity pointer rather than a Plaid-hosted brand file; screenshots as first-party page content rather than a published illustration specification |
| Capture record `:248` | Capture-record notes above, including the generic-Focus non-promotion; interactive-kind and applicability verdicts and the reason for either; omit-kind for two cards and the eyebrow; YAML primitive type attached only when recorded; not a complete state-coverage claim |
| State treatments `:252` | Nine-row state contract as composed, uncomputed treatments |
| Ghost padding writings `:359` | YAML `button-ghost` missing background and height kept beside the §4 padding writing; the two writings unmerged |
| Top Nav §8 height `:386` | Nav 48px row height classified as a §8 writing rather than a YAML component field |
| Mega-Menu §8 height `:414` | Mega-menu ~50px height classified as a §8 writing rather than a YAML component field |
| Layout whitespace `:491` | Air over density; Flat segmentation; Color rationing |
| Layout responsive `:499` | Breakpoint table and collapsing rules; inspections' desktop-viewport setting |
| Layout touch `:518` | Large / unmistakable / comfortable as readings of recorded heights |
| Layout image `:526` | No-shadow imagery as consistent with the flat system; 12px radius across breakpoints; retained text-fill effect as the source wrote it |
| Content voice samples `:533` | Parenthetical captions (home hero H1, home section H2, products page H1) on verbatim live strings |
| Content voice and tone `:541` | Plain / confident / developer-respectful register, including the tone table |
| Content forbidden register `:554` | Hype superlatives, fear-based pressure, unexplained jargon, emoji, exclamation marks on routine CTAs |
| Named gaps `:588` | List as unnamed values rather than as coverage of domains the source never named |

Portable `DESIGN.md` carries 36 complete B2a qualifications. This table is 36 data rows. Preamble sentences on this page are not portable qualifications. Complete form used: "a derived editorial implementation inference from the verified surfaces; it is not Plaid-authored or taken from a separately published UI specification, including the published Threads documentation."
