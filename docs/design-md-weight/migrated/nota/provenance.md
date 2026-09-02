# Nota AI provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the Nota AI migration. Canonical source remains `web/references/nota/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | nota |
| name | Nota AI |
| display_name_kr | 노타 |
| country | KR |
| category | ai |
| homepage | https://www.nota.ai |
| primary_color | `#3264f0` |
| logo | `type: favicon`, `slug: https://www.google.com/s2/favicons?domain=nota.ai&sz=128` |
| omd format (source) | 0.1 |
| added | 2026-06-26 |
| verified | 2026-06-26 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-26 |
| components_harvested | true |

The logo slug is a third-party favicon-proxy URL, not a Nota-hosted brand file. The portable Assets section names it as a catalog pointer.

Token note from source, verbatim: "primary = live interactive accent blue (#3264f0) on links, section eyebrows, and the Squarespace primary button. Dark navy (#252a39) is the hero/footer canvas; near-black (#101218) is the on-light text color. Roboto is the live ENG type; Pretendard serves the KOR locale."

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-26 |
| added | 2026-06-26 |
| tokens.extracted | 2026-06-26 |
| surfaces inspected | 2026-06-26 |
| voice samples verified live | 2026-06-26 |

Conflicts unresolved, quoted from the source footer: none.

Verification method recorded by the source: `omd:add-reference` CREATE — Tier 1 live inspect via playwright getComputedStyle on three brand-owned surfaces.

## Surfaces

The source declares no surface ids. The rows below are its own URL list with its own parenthetical descriptors.

| url | source descriptor | inspected |
|---|---|---|
| https://www.nota.ai | homepage, live DOM | 2026-06-26 |
| https://www.nota.ai/community | Tech Blog, live DOM | 2026-06-26 |
| https://www.nota.ai/contact-us | contact form, live DOM | 2026-06-26 |
| https://github.com/nota-github | official GitHub org | 2026-06-26 |
| https://www.nota.ai/aboutus | About Us (mission / company story, WebFetch) | 2026-06-26 |

GitHub and About Us do not supply computed interface tokens in the source. They stay named sources.

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://www.nota.ai | 2026-06-26 |
| community-live | product-surface | https://www.nota.ai/community | 2026-06-26 |
| contact-live | product-surface | https://www.nota.ai/contact-us | 2026-06-26 |
| github-org | brand-owned | https://github.com/nota-github | 2026-06-26 |
| about-narrative | brand-owned | https://www.nota.ai/aboutus | 2026-06-26 |

### Tier 1

- https://www.nota.ai (homepage, live DOM)
- https://www.nota.ai/community (Tech Blog, live DOM)
- https://www.nota.ai/contact-us (contact form, live DOM)
- https://github.com/nota-github (official GitHub org)

### Tier 2 (no usable record)

- getdesign.md/nota — not listed ("No designs found"); styles.refero.design/?q=nota — no Nota AI match (fuzzy note-app results only)

Those directory findings describe this catalog's coverage. They stay here. They are lookup queries, not portable copy.

### Narrative (not interface tokens)

- About Us: https://www.nota.ai/aboutus — mission "Democratizing the use of AI", company story. The portable body keeps that substance; the URL stays here.

## Claim ledger

Claims use YAML anchors from the source. Live inspect 2026-06-26 on home unless noted.

| claim | surface |
|---|---|
| tokens.colors.primary `#3264f0` | home |
| tokens.colors.ink `#101218` | home |
| tokens.colors.navy `#252a39` | home |
| tokens.colors.black `#000000` | home / contact |
| tokens.colors.canvas `#ffffff` | home |
| tokens.colors.headline `#f5f5f7` | home |
| tokens.colors.surface `#f6f6f8` | home |
| tokens.colors.field `#fafafa` | contact |
| tokens.colors.hairline `#e7e7e7` | home |
| tokens.colors.border-soft `#eaeaee` | home |
| tokens.colors.slate `#7e8390` | community |
| tokens.colors.muted `#888888` | home |
| tokens.colors.faint `#aaaaaa` | home |
| tokens.colors.on-primary `#ffffff` | home |
| tokens.typography.family.sans `Roboto` | home |
| tokens.typography.family.kr `Pretendard` | home (KOR locale) |
| tokens.typography.display-hero.size / weight / lineHeight / use `Hero headline, Roboto Bold on dark navy` | home |
| tokens.typography.display-section.size / weight / lineHeight / use `Section headlines, Roboto Regular` | home |
| tokens.typography.display-emphasis.size / weight / lineHeight / use `Emphasis section headlines, Roboto Bold` | home |
| tokens.typography.eyebrow.size / weight / lineHeight / use `Blue section eyebrow labels (Newsroom, Tech Blog)` | home |
| tokens.typography.nav.size / weight / lineHeight / use `Top navigation links, Roboto` | home |
| tokens.typography.body.size / weight / lineHeight / use `Standard reading text` | home |
| tokens.typography.small.size / weight / lineHeight / use `Captions, form fields, inline link buttons` | home / contact |
| tokens.spacing.xs: 4 / tokens.spacing.sm: 8 / tokens.spacing.md: 11 / tokens.spacing.base: 15 / tokens.spacing.lg: 16 / tokens.spacing.xl: 24 / tokens.spacing.xxl: 48 / tokens.spacing.section: 64 | home |
| tokens.rounded.sm: 4 / tokens.rounded.md: 8 / tokens.rounded.lg: 10 / tokens.rounded.full: 9999 | home |
| tokens.shadow.card `rgba(141,141,141,0.15) 10px 10px 28px 0px` | home |
| tokens.shadow.none `none` | home |
| tokens.components.button-primary.* (`type: button`) | home |
| tokens.components.button-dark.* (`type: button`) | home |
| tokens.components.input-text.* (`type: input`) | contact |
| tokens.components.card-elevated.* (`type: card`) | home |
| tokens.components.card-outline.* (`type: card`) | home |
| tokens.components.eyebrow-label.* (`type: badge`) | home |
| tokens.components.nav-link.* (`type: tab`, active `accent #3264f0 text`) | home |

Live-inspect comment (source trailing HTML): dark-navy body rgb(37,42,57)=#252a39; hero H1 "Industry-tailored Vision Intelligence" 52px/700/lh 70.2px color rgb(245,245,247)=#f5f5f7; section H1 43.2px/400; blue eyebrow H4 "Newsroom"/"Tech Blog" 21.36px color rgb(50,100,240)=#3264f0; cards radius 10px with shadow rgba(141,141,141,0.15) 10px 10px 28px; outline card 1px solid rgb(231,231,231)=#e7e7e7; primary outline button (sqs-button-element--primary) #3264f0 border+text, 4px radius, 11px 15px padding, 12px/500 Roboto; Tech Blog slate rgb(126,131,144)=#7e8390; contact fields bg rgb(250,250,250)=#fafafa, 1px solid rgb(0,0,0)=#000000, radius 0px, padding 10px, height 40px, 12px Roboto.

## Sibling file

`web/references/nota/.verification.md` exists. It is a separate canonical file, not the migration input. Values it carries that the visible source body does not stay in this ledger. They are not portable tokens. Mention here is disposition of the sibling, not use as a portable value.

Sibling-only observations recorded here:

- Method extras: global playwright (chromium, headless); `goto` each surface `domcontentloaded`; cookie/modal Escape-dismiss pass; full-page scroll to load lazy content; full-DOM background/text/radius/font frequency scan.
- Raw sample extras: body `font-size: 12px`; body `color: rgb(255, 255, 255)`; h1 section "High-performance AI on Any Device" `line-height: 59.616px`, `color: rgb(255, 255, 255)`; h1 section "Across Industries—Turning On-Device AI into Reality" `font-size: 43.2px` / weight 700 / `line-height: 51.84px` / `color: rgb(37, 42, 57)` (#252a39); h4 eyebrow `line-height: 31.271px`; primary button label "Accept"; frequency scans (background `rgb(255,255,255)` ×58 / `rgb(0,0,0)` ×12 / `rgb(246,246,248)` ×6 / `rgb(37,42,57)` ×2 / `rgb(234,234,238)` ×2 / `rgb(16,18,24)` ×1; text `rgb(255,255,255)` ×435 / `rgb(16,18,24)` ×361 / `rgb(0,0,0)` ×123 / `rgb(37,42,57)` ×27 / `rgb(50,100,240)` ×4 / `rgb(136,136,136)` ×4 / `rgb(170,170,170)` ×3 / `rgb(126,131,144)` ×3; radius `10px` ×49 / `4px` ×18 / `50%` ×3 / `8px` ×1; font `Roboto` ×755 / `sans-serif` ×132 / `Roboto, sans-serif` ×84 / `Pretendard, sans-serif` ×1); document.title: "Nota AI".
- Published strings the source body does not quote: primary button "Accept"; section headline `Across Industries—Turning On-Device AI into Reality`.
- Logo decision: Google s2 favicon fetched 1031 bytes (image/png), HTTP 200; alternative `type: github, slug: nota-github` (org avatar, 1566B image/png, HTTP 200) kept as fallback; simpleicons has no `nota` (404).
- KR brand-owned requirement note: getdesign.md / styles.refero.design / Google favicon proxy are explicitly NOT counted toward the KR brand-owned requirement. Country sources list also names About Us.

Hexes, families, radii, paddings, and the four voice samples that also stand in the source DESIGN.md are corroboration.

## Proof notes

- components_harvested: true
- tokens.source: live-extract
- Interaction expansions: the source YAML records active `accent #3264f0 text` on nav-link. Other component records are default-state observations.
- Uncaptured hover/pressed/`focus-visible` treatments as computed values are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete.
- The source never records `focus-visible` as a captured state; generic `focus` is named as a `motion-fast` use. No `focus-visible` treatment value appears in the portable body.
- Two YAML cards plus the eyebrow-label badge carry no interactive-kind evidence, so kind and the state-applicability map are omitted for them.
- Loading, error, and success are closed with a role reason on destination controls (Inline Link Button, Nav Link), never for absence of observation.
- No published first-party UI specification was found; the B2a example form is used as-is.
- Official About Us and GitHub org are narrative / brand-owned sources, not token sources.

## Derived editorial inventory

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience Scope `:9` | Three inspected homepage/community/contact routes as this contract's token surfaces; GitHub and About Us as named sources that do not supply computed interface tokens |
| Experience Scope `:11` | Characterizations (confident engineering-grade product site rather than a hype-driven startup splash; the eye is trained to read that one hue as "this is interactive."; The result reads as precise and industrial; a company that ships AI onto cameras, cars, and edge devices and wants its marketing surface to feel as measured as its product; diffuse and quiet, never dramatic; a clean, modern, slightly technical white-and-navy system anchored by one decisive blue; the workhorse neo-grotesque; which keeps long technical copy readable; hierarchy built on size and weight contrast rather than many type families; the 21px blue eyebrow that floats above section titles like a chapter marker; Depth is handled with restraint) as source readings, not a published UI specification; hex values, families, radii, and labels beside them are the source's own |
| Experience Scope `:13` | Founding-and-product narrative, the refuses/embraces pairing, and the closing sentence that the layout is disciplined enough to feel as engineered as the on-device models it ships as brand context that does not by itself supply interface tokens |
| Primary tasks `:19` | Selecting the five recorded controls/labels/surfaces as primary tasks; not from a persona section |
| Audience `:30` | Dropping fictional biographies; carrying no name, age, city, motivation, or affiliation classification; reading the source-named groups as audience; keeping the source's technical-buyer-or-engineer note beside those groups |
| Distinctive traits `:34` | Classifying the list as a restatement of source Key Characteristics, and the groupings and the readings inside them |
| Principles `:48` | Five numbered stems plus every UI implication; source labels of this kind as editorial readings connecting observed design to the stated mission |
| Application rules `:58` | Eight Do rules and the reasons attached to them |
| Avoid `:71` | Don't list and the reasons inside them |
| Semantic color `:88` | Role names from the source's labels; pairing each hex to its token-set path; canvas off on-primary as two jobs of `#ffffff`; black off ink; hairline off border-soft; three grey keys unmerged |
| Spacing `:119` | Named steps as a ~4px base; YAML unitless steps off prose px; `md: 11` off `base: 15` off `lg: 16`; form-field `10px` off the YAML spacing map; outline padding `11px` off filled padding `16px` |
| Shape `:123` | YAML `4` / `8` / `10` / `9999` off prose `4px` / `8px` / `10px` / `50%`; `10px` as the workhorse card radius; `0px` as form-field-only |
| Elevation `:136` | Mostly-flat system; emphasis by color rather than stacked elevation; four-level table, `card` and `none` tokens, live `box-shadow: none`, and quiet-and-atmospheric writing unmerged |
| Motion duration `:140` | Duration roles as this record states them; no computed transition observation behind the duration table |
| Motion easing `:148` | Easing token names and uses as this record states them; curves omitted while token names and uses remain |
| Motion `:156` | Reduced-motion rule; motion character (functional and quiet; slideIn folder reveal; arrow nudge; fade-in from below; no bounce or spring; steadiness) |
| Motion B3 `:158` | Five-kind promotion gate; refusal of a partial confirmation; a match against an official framework or vendor document is not that gate |
| Font evidence `:166` | Evidence-class sorting; resolution cells (no published type spec, live Roboto / Pretendard, no distributed file, sans-serif fallback not the brand face, no license, no type value from a surface outside the three captures) |
| Family `:185` | Roboto as ENG family and Pretendard as KOR family; 700 / 500 / 400 as the weights in use; refusal to substitute a system font as the brand face; refusal to replace an unavailable or unobserved brand type with Roboto or Pretendard; the roles never cross so each font owns its locale |
| Type roles `:189` | YAML numbers kept beside §3 px/rem and live 70.2px / 43.2px / 21.36px; YAML `use` verbatim; YAML small weight `400` beside §3 `400-500`; live hero `70.2px` as inspect writing rather than a replacement for YAML `1.35` |
| Type-hierarchy readings `:203` | Four hierarchy readings (one family, weight-and-size; blue eyebrow as structure; near-black not black for reading; locale-aware swap) |
| Assets `:215` | Google s2 favicon as catalog identity pointer rather than a Nota-hosted brand file; product imagery as first-party page content rather than a published illustration specification |
| Capture record `:228` | Applicability-by-meaning note; Generic `focus` named as a `motion-fast` use is not `focus-visible` treatment evidence; interactive-kind and applicability verdicts and the reason for either; omit-kind for two cards and the eyebrow; YAML primitive type attached only when recorded; non-YAML components labelled `not in the token set`; not a complete state-coverage claim |
| State treatments `:232` | Seven-row state contract as composed, uncomputed treatments |
| Layout whitespace `:453` | Breathing, technical calm; Flat segmentation; One accent, repeated; ~4px base as a reading of the recorded scale |
| Layout responsive `:461` | Breakpoint table and collapsing rules; inspections taken at a desktop viewport |
| Layout touch `:480` | Generous / comfortably as readings of recorded heights |
| Layout image `:487` | Imagery as consistent with the 10px card geometry; radius across breakpoints |
| Content voice samples `:494` | Parenthetical captions (hero headline, section headline, newsroom section, company mission) on verbatim live strings |
| Content voice and tone `:503` | Confident / technical / benefit-framed register, including the tone table |
| Content forbidden register `:515` | Vague AI hype, fear-based marketing, undefined jargon, exclamation-heavy salesmanship |
| Content locale `:519` | `노타` kept beside `Nota AI` rather than as a replacement; Roboto and Pretendard on their own locales rather than merged |
| Named gaps `:553` | List as unnamed values rather than as coverage of domains the source never named |

## Omission ledger

Mention (disposition) is not use (re-hosting). This table names what was dropped and where the drop is recorded. It does not re-list fictional demographics, and it does not assert portable-body absence in the same sentence that reprints a dropped string as if it were a surviving token.

| Item | Disposition |
|---|---|
| Source §13 personas — 3 fictional archetypes (name, age, city, motivation, and affiliation classification) | Deleted. The source's own header labels them fictional archetypes informed by publicly observable segments. Not promoted to Audience or primary-tasks, and not re-hosted here as names, ages, cities, motivations, or affiliation classifications (D2, D2a). Audience in the portable body keeps the source's own group wording only. |
| Source §9 Agent Prompt Guide remaining after color/type/component constraints were moved | Deleted as tool-facing prompt. Brand constraints already live in Foundations, Typography, Components, and Layout. The §9-only wording `one family per locale` was moved into Typography rather than dropped (A3). |
| `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)`, `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)`, `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)` | The three exact curves carry no attribution in the source, whose motion section is part of an unsourced philosophy layer; `ease-exit` is the same value carried by the legacy authoring template. Token names, durations, uses, signature motion, and reduced-motion survive in the portable body; the curves are dropped rather than promoted. B3 five-kind gate stays in portable Motion. |
| Sibling-only computed values and published strings listed under Sibling file | Ledger only |
| Tier 2 getdesign / Refero lookup detail | Ledger only |
