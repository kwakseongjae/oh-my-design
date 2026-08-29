# Loom provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/loom/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | loom |
| name | Loom |
| country | US |
| category | productivity |
| homepage | `https://www.loom.com` |
| primary_color | `#1868db` |
| logo.type | favicon |
| logo.slug | `https://www.google.com/s2/favicons?domain=loom.com&sz=128` |
| omd format (source) | 0.1 |
| verified | 2026-06-08 |
| added | 2026-06-08 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-08 |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here, and the inspected public marketing site `https://www.loom.com` is the portable scope record in `DESIGN.md` §1. The primary color is dual: identity here, and Foundations Loom Blue / the primary CTA in `DESIGN.md`. The Google s2 favicon slug is dual: identity here, and a portable Assets classification in `DESIGN.md` §3. There is no `ds.name` / `ds.url` / `ds.type` field in the source frontmatter (A1c: the absence is recorded, not filled).

**Logo decision.** The catalog field is `logo.type: favicon` with a Google s2 proxy URL. That is an identity pointer, not a Loom-hosted brand file.

**Token note** (source frontmatter, kept here): `primary = live Loom blue #1868db (pill CTA, white text); brand accents (coral #ff613d, purple #bf63f3, deep purple #48245d) appear in marketing illustration gradients`. The same note is also restated under Foundations Accent in `DESIGN.md`.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-08 |
| added | 2026-06-08 |
| tokens.extracted | 2026-06-08 |
| surfaces inspected | 2026-06-08 |
| sources captured | 2026-06-08 |

The source footer records the verification verbatim as **Verified:** 2026-06-08 (omd:add-reference — Tier 1 live inspect). That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: none — as the source footer states.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| home | product-surface | `https://www.loom.com` | 2026-06-08 |

### Tier 1 (as listed in the source footer)

- `https://www.loom.com` (live DOM computed-style inspect — hero, nav, CTA buttons, carousel controls, footer; playwright getComputedStyle)

### Tier 2

- getdesign.md/loom — not authoritative
- refero — directory only

Tier 2 data was not used to establish any token or component value. The source names both lookups; they stay as Named gaps of unnamed records, not as new product domains.

## Sibling handling (`web/references/loom/.verification.md`)

The sibling exists — confirmed with `find web/references/loom -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Its own record, transcribed here:

- Inspected 2026-06-08. Method: playwright getComputedStyle (live DOM). Source: `https://www.loom.com`.
- Primary CTA "Get Loom for free": `background: rgb(24, 104, 219)` (#1868db), `color: rgb(255, 255, 255)`, `border-radius: 9999px`, `height: 58px`, `padding: 15.6154px 23.4231px`, `font-size: 15.6154px`, `font-weight: 700`
- Secondary "Contact Sales": `background: rgb(233, 242, 254)` (#e9f2fe), `color: rgb(0, 0, 0)`, `border-radius: 9999px`, `height: 48px`, `padding: 7.80769px 15.6154px`
- Dark CTA "Learn more": `background: rgb(16, 18, 20)` (#101214), `color: rgb(255, 255, 255)`, `border-radius: 9999px`, `height: 58px`
- h1 "One video is worth a thousand words": `font-size: 63.2692px`, `font-weight: 700`, `color: rgb(16, 18, 20)` (#101214), `line-height: 65.104px`, `font-family: "Charlie Display", sans-serif`
- h2 "Millions of people across 400,000 companies": `font-size: 44.1538px`, `font-weight: 700`, `color: rgb(16, 18, 20)`, `line-height: 50.4678px`
- body: `color: rgb(41, 42, 46)` (#292a2e), `font-family: "Charlie Text", sans-serif`, `font-size: 16px`
- carousel control "Next testimonial": `background: rgb(255, 255, 255)`, `border-radius: 9999px`, `height: 56px`, `box-shadow: rgba(0, 0, 0, 0.03) 0px 4px 6.4px 0px, rgba(0, 0, 0, 0.05) 0px 3px 9.6px 0px`
- footer: `background: rgb(233, 242, 254)` (#e9f2fe), `color: rgb(41, 42, 46)` (#292a2e)
- palette colors seen (getComputedStyle color sweep): `rgb(24, 104, 219)` #1868db, `rgb(0, 82, 204)` #0052cc, `rgb(125, 129, 138)` #7d818a, `rgb(255, 97, 61)` #ff613d, `rgb(191, 99, 243)` #bf63f3, `rgb(72, 36, 93)` #48245d
- Country note: US brand. Tier 1 live inspect of the official site is sufficient under the catalog policy for US references; the regional brand-owned ≥2 source requirement applies only to KR/TW. Brand narrative facts (founding, Atlassian 2023 acquisition) are widely documented public record.
- Sibling closing: Tier 1 live inspect is the authoritative source for all §2–§6 token claims. No Tier 1 ↔ Tier 2 conflicts found.

Sibling-only strings stay here. They are inspect context, not portable-body use. That includes the sub-pixel paddings and font sizes (`15.6154px`, `23.4231px`, `7.80769px`, `63.2692px`, `44.1538px`), `line-height: 65.104px` / `50.4678px`, Secondary height `48px` against YAML light `58px`, Secondary `color: rgb(0, 0, 0)` against YAML `#101214`, the h2 line "Millions of people across 400,000 companies", and the carousel accessible name "Next testimonial".

## Capture selectors

The source HTML comment / footer records the live inspect, not `data-omd-capture` pointers. Pointers below are the source’s own surface + control names.

| Component | Pointer |
|---|---|
| Primary / Primary Compact | homepage hero/nav Loom-blue pills; YAML `tokens.components.button-primary`; §4 compact is not its own YAML id |
| Light | homepage secondary pill; YAML `tokens.components.button-light` |
| Dark | homepage alternate emphasis pill; YAML `tokens.components.button-dark` |
| Icon / carousel | testimonial carousel previous/next; YAML `tokens.components.icon-button` |
| Footer | homepage footer; YAML `tokens.components.footer` |

## Proof notes

- One named Tier 1 source, recorded 2026-06-08. `https://www.loom.com` live DOM is the token surface.
- `components_harvested: true`; five component records in the source token set.
- `tokens.source: live-extract`.
- Uncaptured focus-visible treatments are omitted as values; they are not turned into `not-applicable` for that reason. Applicability follows control role. State coverage is not claimed complete.
- YAML `hover: bg #0052cc` is a hover/press writing. It is not written onto `focus-visible` rows (B1).
- Loom has no published first-party UI specification in the source. Derived-editorial qualifications therefore close with the toss-form example: not Loom-authored or a separately published UI specification (rulebook v12 B2a 전제 주석). Atlassian acquisition (2023, roughly $975M) is source-stated narrative, not a token source and not a claim that Atlassian Design System is or is not Loom's spec.
- Founding 2015 as Opentest then OpenVid; founders Joe Thomas, Shahed Khan, Vinay Hiremath; async-video pivot; that founding insight shaped everything; a friendly consumer-grade interface that lowers the barrier to pressing record; the bold blue-and-white visual identity is the design expression of that ethos — bright, immediate, and unintimidating; bottom-up adoption; Atlassian 2023 — source-stated narrative. They stay in Experience Scope as narrative context, not as interface tokens.
- Source §15 cubic-bezier values, omitted from the portable body as unattributed curves (the `ease-exit` value matches the catalog template): `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)`; `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)`; `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)`. Durations 0 / 120 / 220 / 320 ms, role names, signature-motion pairings, and reduced-motion stay in `DESIGN.md` Motion.

## Claim ledger

Claims use the homepage inspect (home / home-live / live-extract / 2026-06-08) unless noted.

| claim | surface |
|---|---|
| tokens.colors.primary / primary-hover / brand / canvas / surface-blue / foreground / body / muted / on-primary / ink / accent-coral / accent-purple / accent-deep | home |
| tokens.typography.family.display / text | home |
| tokens.typography.display-hero / display-lg / heading / lead / body / button / button-light (size / weight / lineHeight / tracking / use) | home |
| tokens.spacing.xs / sm / md / base / lg / xl / xxl / section | home |
| tokens.rounded.sm / md / lg / full | home |
| tokens.shadow.soft / standard | home |
| tokens.components.button-primary.* | home |
| tokens.components.button-light.* | home |
| tokens.components.button-dark.* | home |
| tokens.components.icon-button.* | home |
| tokens.components.footer.* | home |
| Hero line "One video is worth a thousand words" | home |

## §9 deletion check

§9 Agent Prompt Guide was deleted as tool-facing restatement. Each unique brand constraint it names was checked against the portable body before deletion (A2, A3):

| §9 item | Portable landing |
|---|---|
| Primary CTA `#1868db` | Foundations Loom Blue + Primary CTA |
| CTA Hover `#0052cc` | Foundations Primary Hover + Primary hover row |
| Background `#ffffff` | Foundations Pure White / canvas |
| Heading text `#101214` | Foundations Ink |
| Body text `#292a2e` | Foundations Body Charcoal |
| Muted `#7d818a` | Foundations Muted Gray |
| Secondary surface / footer `#e9f2fe` | Foundations Surface Blue + Footer + Light button |
| Dark button `#101214` | Dark (Ink) component |
| Accent decorative coral / purple / aubergine | Foundations Accent |
| Hero 63px Charlie Display 700 / line-height 1.03 | Type roles display-hero |
| Lead 27px Charlie Text 400 / 1.52 | Type roles lead |
| Primary pill 9999px / 16px 23px / white text 700 | Primary component |
| Light pill `#e9f2fe` / `#101214` / 9999px | Light component |
| Feature card white / 16px radius / standard shadow / heading 33px / body 16px 1.5 | Cards & Containers + Type roles heading/body |
| Dark CTA pill `#101214` / white / 9999px / 16px 23px / 16px 700 | Dark component |
| Circular carousel 56px / stacked shadow | Icon Buttons |
| Footer `#e9f2fe` / `#292a2e` / links toward `#1868db` | Footer |
| Iteration rules (blue-only action, full pills, Charlie 700/400, ink/charcoal/muted, soft 0.03–0.05, `#e9f2fe` surface, accents decorative only) | Application rules + Avoid + Foundations |

§9 example prompt assigns lead color `#101214`. Source §2 assigns `#101214` to headings and `#292a2e` to body. That prompt color is not promoted as a lead token.

## Omission ledger

| Location | Disposition |
|---|---|
| §13 Personas — 3 illustrative archetypes (name, age, city included) | Deleted. Not promoted into Audience or `primary-tasks`, and not re-hosted here. This row names the source section and the field kinds only (D2, D2a). Identifier strings are not copied into this file. |
| §15 cubic-bezier values for `ease-enter` / `ease-exit` / `ease-standard` | Omitted from portable Foundations as unattributed curves (T1-3 constraint 5). Values kept on this file under Proof notes. Duration tokens, role names, signature pairings, and reduced-motion remain in `DESIGN.md`. |
| `[FILL IN]` wrappers | Source count 0. None omitted, none rewritten. |

Mention of that section as a deletion is a disposition pointer, not a reuse of the biographies.

## B2a ledger (portable-body qualifications)

Each row is one derived-editorial qualification that also appears adjacent in `DESIGN.md`. This ledger does not add a second interpretation; it records the same class. Measured against `DESIGN.md` with `grep -o 'derived editorial implementation inference' … | wc -l` (file-level, not `grep -c`). This table has as many data rows as that count (E1 1:1). The same lines also carry `not Loom-authored` and `separately published UI specification`.

| Location | Qualified reading |
|---|---|
| Experience — Scope ¶1 | Treating `https://www.loom.com` as this contract's token surface, and refusing to treat Atlassian suite membership after the 2023 acquisition as a token source for this capture |
| Experience — Scope ¶2 | Calling the recorded layer friendly confidence, a bright approachable cobalt rather than cold corporate blue, punchy editorial loudness, or a page that wants the visitor to press record immediately, plus the source comparison “Where Stripe murmurs, Loom announces” |
| Experience — Scope ¶3 | Classifying the founding-and-acquisition narrative as context that does not by itself supply interface tokens |
| Experience — Primary tasks | Selecting the three surface-or-control tasks; they do not come from the persona section |
| Experience — Audience | Reading the source-named groups as audience, and dropping archetype biographies rather than promoting them |
| Experience — Distinctive traits | Classifying the list as a restatement of recorded values; grouping the eight traits and the readings inside them |
| Experience — Principles | Reading the five source principles and every UI implication as implementation principles |
| Experience — Application rules | Grouping the eight Do-list rules and the reasons attached to them |
| Experience — Avoid | Grouping the seven Don’t-list prohibitions and the reasons inside them |
| Foundations — Semantic color | Pairing hexes to token-set paths; keep-both on primary/brand `#1868db` (Primary/Compact fills and footer-link hover = component uses, not extra keys), canvas/on-primary `#ffffff`; icon-button/card/circular fill `#ffffff` = component fields not a third color key; Primary/Compact/Dark text `#ffffff` = on-primary uses; foreground/ink `#101214` (Dark fill / Light text = component uses); body `#292a2e` is the body-and-nav-link role while icon-button/Footer text = component uses; Light fill / Footer fill = component uses of `#e9f2fe`; illustration accents off UI fills; ink undertone as recorded description rather than a second heading hex; YAML `button-primary.hover` `bg #0052cc` is hover/press not `focus-visible` |
| Foundations — Spacing | Keeping unitless spacing steps on their own keys; padding/gutter px off those keys; `md: 16` ≠ `base: 16`; spacing `8` / `16` / `24` ≠ rounded `8` / `16` / `24`; `base: 16` ≠ body size 16 ≠ compact padding `8px 16px`; `xxl: 48` ≠ Compact height `48px`; `16px 23px` not a spacing-scale step |
| Foundations — Shape | Keeping four rounded keys; keep-both on unitless `9999` / `9999px`; `8` / `16` / `24` unmerged from matching spacing keys |
| Foundations — Elevation | Keeping YAML shadow strings on their own keys rather than flattening them over the §6 level table; Control stacked writing as a third spelling; philosophy paragraph as the source's own elevation rule rather than a new shadow token |
| Foundations — Motion | Holding durations and role names; omitting the three curve values as unattributed to the live extract; `ease-exit` catalog-template match ≠ live-computed curve; holding the five-kind promotion gate (official documentation of a single curve or duration is not that gate); reading the motion section as outside the live-extract token set |
| Typography — Font evidence | Evidence-class application readings: Charlie pair is live computed UI; no foundry license URL; FontFaceSet unnamed; no exclusive distributed family; `sans-serif` remains a fallback; recordings-library and recorder-product remain outside the marketing type capture |
| Typography — Family | Keeping `tokens.typography.family.display` and `tokens.typography.family.text` as two keys; refusing to present a fallback as the brand face; humanist/rounded-terminals sentence as the source's own type description |
| Typography — Type roles | Keeping YAML `use` verbatim; unitless `1.03` / `1.14` / `1.27` / `1.52` / `1.5` / `1.0`; YAML sizes beside px/rem spellings; YAML tracking `0` beside `normal`; YAML size `16` ≠ `tokens.spacing.base: 16` ≠ compact padding; YAML size `63` ≠ a spacing step |
| Typography — Assets | Catalog-boundary reading of the Google s2 favicon slug; illustration accents as decorative content that must not become UI fills |
| Components — Capture record | Applicability procedure; omitting Kind and the map on footer, Cards & Containers, and Navigation; L/E/S closures on dark destination CTA and carousel icon-button; L/E/S open on primary, compact, and light committing CTAs; YAML `use` as Token-set use beside Role; YAML `button-primary` / `button-light` / `button-dark` `font` `16px / 700` beside those bodies; Compact body weight 400 beside type-role `button-light`, not a YAML component font; Primary Compact not a YAML component id; Capture-record rows = product-level writings not per-control computed tokens; `#0052cc` not written onto `focus-visible` |
| Layout & Platforms | Treating §5 and §8 as this contract's layout record; 8px-rhythm padding off unitless spacing keys; 48–58px heights beside declared controls; 58/48/56/~63px as source-stated layout numbers also recorded as desktop-capture measurements, not independently re-measured values; breakpoints as the source's own layout contract rather than independently measured media queries |
| Content & Locales — voice | Calling the register warm, direct, and human; product-to-copy mirroring (short, plain, action-first); hero as a familiar idiom with a knowing wink; CTAs never gated or salesy on the basics; reading the table as reconstruction direction rather than as a Loom-authored voice guide |
| Governance — Named gaps | Reading the list as unnamed values, not as coverage of domains the source never named |
