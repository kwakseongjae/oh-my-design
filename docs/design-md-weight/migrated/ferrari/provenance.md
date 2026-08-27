# Ferrari provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the ferrari migration. Canonical source remains `web/references/ferrari/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | ferrari |
| name | Ferrari |
| country | IT |
| category | automotive |
| homepage | https://www.ferrari.com |
| primary_color | `#da291c` |
| logo | type `simpleicons`, slug `ferrari` |
| omd format (source) | 0.1 |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-13 |
| components_harvested | true |

The logo record is a third-party icon-set entry (`simpleicons` / slug `ferrari`), not a Ferrari-distributed brand-asset file. It is kept here only and is not carried into the portable Assets subsection as a first-party asset; the portable body instead states that this contract carries no image, icon, or logo file. That sentence deliberately stops short of type files: the first-party `Ferrari-SansRegular` and `Ferrari-SansMedium` WOFF/WOFF2 sources are carried in the portable Typography & Assets subsection, so a "no type file" claim would contradict them.

Token note from source, verbatim: "Three supplied public Ferrari surfaces were reconciled. Marketing and racing web components are retained only at their observed selector/surface boundary; no authenticated product UI, responsive behavior, semantic status palette, or unobserved interaction variant is inferred."

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-13 |
| verification_v2.schema | 2 |
| verification_v2.checked | 2026-07-13 |
| surfaces inspected | 2026-07-13 |
| sources captured | 2026-07-13 |
| tokens.extracted | 2026-07-13 |

Conflicts unresolved: none (source `conflicts: []`, and the source footer records "Conflicts unresolved: none").

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | public-brand | https://www.ferrari.com/en-EN | 2026-07-13 |
| car-range | public-product | https://www.ferrari.com/en-EN/auto/car-range | 2026-07-13 |
| formula1 | public-racing | https://www.ferrari.com/en-EN/formula1 | 2026-07-13 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://www.ferrari.com/en-EN | 2026-07-13 |
| car-range-live | product-surface | https://www.ferrari.com/en-EN/auto/car-range | 2026-07-13 |
| formula1-live | product-surface | https://www.ferrari.com/en-EN/formula1 | 2026-07-13 |
| ferrari-sans-asset | brand-asset | https://www.ferrari.com/etc.clientlibs/ferrari-fcom/clientlibs/clientlib-site/resources/fonts/Ferrari-SansRegular.woff2?v=1 | 2026-07-13 |
| ferrari-font-context | official-doc | https://www.ferrari.com/en-EN/formula1/articles/the-sf-24-is-here | 2026-07-13 |
| ferrari-legal | license | https://www.ferrari.com/en-US/legal | 2026-07-13 |
| ferrari-about | official-doc | https://www.ferrari.com/en-EN/corporate/about-us | 2026-07-13 |
| ferrari-history | official-doc | https://www.ferrari.com/en-EN/history | 2026-07-13 |
| ferrari-design | official-doc | https://www.ferrari.com/en-EN/magazine/articles/new-language-of-ferrari-design | 2026-07-13 |

### Tier 1 (source footer)

- https://www.ferrari.com/en-EN
- https://www.ferrari.com/en-EN/auto/car-range
- https://www.ferrari.com/en-EN/formula1

Recorded in the source as "supplied computed-style, FontFaceSet, and source-URL evidence".

### Tier 2 (cross-check only)

- https://getdesign.md/ferrari
- https://styles.refero.design/style/80164adf-a898-4f7c-bce7-12f3f62e1649

The source footer records that Tier 1 wins recorded component conflicts.

### Narrative and license context (not interface tokens)

- Official corporate About us: https://www.ferrari.com/en-EN/corporate/about-us — carries the first-party wording "The power of passion becomes the beauty of achievement." and the exclusivity / performance / quality / sporting success / innovation / technology / driving pleasure description. The quotation and its attribution are also carried in the portable body (Content & Locales), byte-for-byte with the source’s curly quotation marks; the URL stays here.
- Official History: https://www.ferrari.com/en-EN/history — 1947, the 125 S, the Maranello factory gates, cars made to win on track and road.
- Official design article: https://www.ferrari.com/en-EN/magazine/articles/new-language-of-ferrari-design — Centro Stile established 2010; design and engineering, form and content.
- Official SF-24 article: https://www.ferrari.com/en-EN/formula1/articles/the-sf-24-is-here — Ferrari Sans identified as the marque’s official font for the race numbers.
- Legal: https://www.ferrari.com/en-US/legal — reviewed material does not grant a downstream web-font licence.

## Claim ledger

Claims use the YAML anchors from the source: `home` = home / home-live / computed-style / 2026-07-13; `range` = car-range / car-range-live / computed-style / 2026-07-13; `formula1` = formula1 / formula1-live / computed-style / 2026-07-13.

| claim | anchor |
|---|---|
| tokens.colors.primary | range |
| tokens.colors.canvas | home |
| tokens.colors.foreground | home |
| tokens.colors.on-primary | range |
| tokens.typography.family.ui | range |
| tokens.typography.family.chrome | home |
| tokens.typography.nav.size / weight / lineHeight / tracking / use | home |
| tokens.typography.primary-action.size / weight / lineHeight / use | range |
| tokens.typography.consent-action.size / weight / lineHeight / tracking / use | home |
| tokens.spacing.nav-y | home |
| tokens.spacing.consent-y | home |
| tokens.spacing.primary-inset | range |
| tokens.rounded.sharp | range |
| tokens.rounded.consent | home |
| tokens.components.racing-media-card.type / bg / fg / radius / shadow / use | formula1 |

## Capture selectors

| Component | Pointer |
|---|---|
| Header navigation item | `home::[data-omd-capture="1"]` |
| Subscribe CTA | `surface-2::[data-omd-capture="49"]` on car range and its Formula 1 sibling `surface-3::[data-omd-capture="49"]`; both carry the class `BtnCta__button__w7eTRXBJ` named in source §2 |
| Cookie-consent action | `home::[data-omd-capture="101"]` within the `ot-sdk-container` consent dialog |
| Formula 1 media card | `surface-3::div.Card__wrapper__2HwxoSe5.Card__wrapper--visible__1LdTLCPj.` (source `use` string, trailing period included) |

The portable body keeps each component’s role description and the two-surface fact for the Subscribe CTA; the selectors and class names above are held here only.

## Sibling verification notes — adopted

`web/references/ferrari/.verification.md` (dated 2026-07-13) exists beside the source and **is adopted** as ledger evidence in this file. Its values are not promoted into the portable body: every portable token comes from `web/references/ferrari/DESIGN.md` itself. What the sibling adds, kept here:

- **Raw samples.** `home::#page-gateway-b49510f1b1` (`body`): `font-family: FerrariSans`; `font-size: 13px`; `font-weight: 400`; `line-height: 19.5px`; `color: rgb(0, 0, 0)`. `home::[data-omd-capture="1"]`: `background-color: rgba(0, 0, 0, 0)`; `color: rgb(255, 255, 255)`; `border-radius: 0px`; `padding: 5px 0px`; `font-family: Body-Font`; `font-size: 12px`; `letter-spacing: 1px`. `surface-2::[data-omd-capture="49"]`: `background-color: rgb(218, 41, 28)` (`#da291c`); `color: rgb(255, 255, 255)`; `border-radius: 0px`; `padding: 21px`; `height: 57px`; `font-size: 16px`; `font-family: Body-Font`. `surface-3::[data-omd-capture="49"]`: same CTA fingerprint. `home::[data-omd-capture="101"]`: `background-color: rgb(255, 255, 255)`; `color: rgb(0, 0, 0)`; `border: 1px solid rgb(0, 0, 0)`; `border-radius: 2px`; `padding: 12px 10px`; `height: 42px`; `font-size: 13.008px`; `font-weight: 600`. `home::div[role="dialog"].ot-sdk-container`: `font-family: FerrariSans`; `font-size: 16px`; `background-color: rgba(0, 0, 0, 0)`; `border-radius: 0px`.
- **The body `13px` / `19.5px` / `rgb(0, 0, 0)` sample and the `1px` letter-spacing measurement.** The source DESIGN.md promotes neither the 13px body role nor a letter-spacing unit into its own tokens (its `tracking` fields are unitless `1` and `0.13008`, and source §9 phrases the header value as "1px tracking"). They stay here and are not added to the portable type-role table.
- **Coverage counters.** Three public product surfaces; five component types; 25 component variants; coverage score 80. `interactionKinds: 0` and `interactionCount: 0`; a focus pseudo-state exists for the header-item fingerprint but supplies no changed value.
- **Surface-kind caveat.** The sibling notes that the source labels all three captured URLs `product-surface` while they are public brand/racing/marketing pages, not authenticated ownership, dealer, checkout, configurator, or native product interfaces. The portable Scope carries the same boundary in the source DESIGN.md’s own words.
- **Font evidence and licence table.** The same five evidence classes the source §3 carries, with the added detail that `Body-Font` resolves to Ferrari-hosted `Ferrari-SansRegular` and Noto sources, that `Title-Font` is loaded/high with four Formula 1 heading uses, and that the declared-only faces carry `usageCount: 0`. The Noto resolution detail is not promoted to the portable body, which keeps the source DESIGN.md’s own wording.
- **Tier 2 records.** getdesign.md lists one Ferrari DESIGN.md labelled "Maintained by VoltAgent team" — a community directory record, not first-party evidence. The Refero record was found through a `site:styles.refero.design Ferrari` search on 2026-07-13 and presents a monochrome, circular-CTA interpretation.
- **Conflict matrix.** Refero claims no distinct action color and circular outlined CTAs, describes dark navigation with uppercase tracked links, has no matching consent measurement, and describes `Body-Font` plus a generic Ferrari custom sans. Every disagreement is resolved in favor of the dated Tier 1 computed evidence; Tier 2 remains cross-check context only.
- **Reverted legacy claims.** Prose-derived yellows, semantic statuses, hover blue/teal, gradients and general dark surfaces were removed; so were generic cards, newsletter input, carousel behavior, mobile breakpoints, motion, PrimeReact/Element Plus attribution, and unobserved hover/pressed/focus variants. The old cookie-first button system was replaced by the current sharp red public Subscribe CTA, with the cookie button retained only as a named utility exception. Third-party/Wikipedia narrative and fictional personas were replaced by first-party context and an explicit research placeholder.

## Omission ledger

- Source §13 ends with the placeholder `[FILL IN: validated stakeholder research before adding user archetypes.]`. It is quoted here as an omission record and is not emitted in the portable body; the portable Audience states the same unresolved boundary in prose and Named gaps names the unresolved research.
- Source §9 Agent Prompt Guide is a tool-directed construction prompt. The prompt wrapper is deleted rather than relocated. Its constituent values (`#da291c` background, white 16px `Body-Font` text, 21px inset, 0px radius, 57px CTA; transparent background, white 12px `Body-Font` text, 5px vertical padding, 1px tracking) are restatements of §1–§4; each was grep-confirmed present in the portable Experience, Foundations, Typography & Assets or Components & States before the deletion row was written. The §9 out-of-scope list (configurator, checkout, dashboard, alert, component-state system) is **not** covered by that deletion: `dashboard` and `component-state system` occur nowhere else in the source, so the whole list was moved into the portable Experience Scope instead of being dropped with the wrapper.

## Portable derived-editorial scope

The portable body carries **eight** derived-editorial readings, each closed by its own adjacent qualification. They are enumerated row by row here so that a reviewer can read the derivation scope off this ledger instead of reconstructing it from a full pass over `DESIGN.md`. A single summary sentence would not do this job: the eight sit in seven subsections across four numbered sections (Experience Scope carries two) and cover eight distinct readings — visual atmosphere, brand evolution, trait labelling, principles, geometry summary, depth attribution, layout emphasis, and voice comparison.

| # | Derived reading the qualification covers | Portable line | Legacy origin | Placement |
|---|---|---|---|---|
| 1 | Experience → Scope, 2nd paragraph — the interface reading of the observed chrome: that the combination recedes behind vehicle imagery, that it is image-led brand and racing communication rather than an in-car, owner, or commerce application, and that the low-chrome presentation is deliberate | `DESIGN.md:11` | source §1 Visual Theme & Atmosphere prose — "express that heritage as image-led brand and racing communication rather than an in-car, owner, or commerce application", "the interface mostly recedes", "the deliberate, low-chrome presentation" | complete, closes the same sentence, immediately after "Those values are observed." |
| 2 | Experience → Scope, 3rd paragraph — treating Centro Stile and its own design description as the marque's **current design evolution**, and reading the concise public web shell alongside that wider product story | `DESIGN.md:13` | source §11 Brand Narrative ¶2 — "adds a current evolution", "should be read alongside that wider product story"; plus the §1 Centro Stile / design-writing sentence | complete, closes the sentence carrying the reading; the first-party 1947 / History / Prancing-Horse statements it follows stay attributed and unqualified |
| 3 | Experience → Distinctive traits — the three interpretive **labels** attached to four observed values: image-led contrast, measured accent, sharp geometry | `DESIGN.md:35` | source §1 four key-characteristic bullets (labels only; the `#ffffff` / `#181818` / `#da291c` / 0px / 2px values under them are observed) | complete, immediately after the list |
| 4 | Experience → Principles — all four numbered principles with their UI implications **and** the three Applied rules beneath them | `DESIGN.md:39` | source §12 Principles (4 + UI implications) and source §7 Do's (4 items, carried as Applied rules) | complete, precedes the numbered list; worded to cover the Applied-rules list as well |
| 5 | Foundations → Shape — reading the two 0px measurements as a "sharp public geometry" | `DESIGN.md:84` | frontmatter `tokens.rounded` (`sharp: 0`, `consent: 2`); the summarising label matches the §1 "sharp controls" prose and the "Sharp geometry" bullet | complete, closes the paragraph under the two shape rows |
| 6 | Foundations → Elevation — attributing the observed depth to transparency, image contrast, and white or red fills | `DESIGN.md:88` | source §6 Depth & Elevation — "their observed depth comes from transparency, image contrast, and white or red fills rather than a reusable shadow token" | complete, closes the same paragraph, immediately after "The `none` value is observed" |
| 7 | Layout & Platforms — reading the visual emphasis as coming from photography rather than from a framed application shell | `DESIGN.md:218` | source §5 Layout Principles — "content whose visual emphasis comes from photography rather than a framed application shell" | complete, its own paragraph after the recorded `1440×900` and full-width / light-on-image observations |
| 8 | Content & Locales — the "much terser" comparison between the captured controls and the corporate narrative, and the conclusion drawn from it that concise discovery language belongs on public editorial surfaces | `DESIGN.md:227` | source §10 Voice & Tone — "much terser than that corporate narrative", "Use concise discovery language on public editorial surfaces" | complete, mid-paragraph, directly after the comparison and before the retained "do not fabricate … voice rules" prohibition |

1:1 check against the portable body, measured over the final files. `grep -c` was **not** used — it counts matching lines, not occurrences — so every count below is `grep -o … | wc -l` and is stated per file:

| Counted string | File | Method | Result |
|---|---|---|---|
| `derived editorial implementation inference from the verified surfaces` | `DESIGN.md` | `grep -o … \| wc -l` | 8 occurrences |
| `not Ferrari-authored` | `DESIGN.md` | `grep -o … \| wc -l` | 8 occurrences |
| `separately published UI specification` | `DESIGN.md` | `grep -o … \| wc -l` | 8 occurrences |
| lines carrying the clause | `DESIGN.md` | `grep -n` | 11, 13, 35, 39, 84, 88, 218, 227 — 8 lines |
| `derived editorial` (any form) | `provenance.md` | `grep -o … \| wc -l` | 0 — this ledger records the scope of the qualification; it does not re-host the portable clause (E1) |
| `derived editorial` (any form) | `migration-log.md` | `grep -o … \| wc -l` | 2 — both inside disposition rows that report where the qualification sits. Mentions, not portable uses |
| `derived editorial` (any form) | `audit-log.md` | `grep -o … \| wc -l` | 2 — audit findings referring to the clause. Mentions, not portable uses |

Occurrences (8) and lines (8) agree only because no line carries the clause twice; that agreement is measured, not assumed. All three clause fragments count 8 in the same file, so no qualification is partial (B2a completeness). Rows in the table above: 8. Qualifications in the body: 8. No derived reading in the body is missing from this table, and no row here lacks a body reading.

Body content left **without** a derived-editorial qualification is of four kinds, none of which is a derived reading:

1. **Observed or measured values and their source-worded boundaries** — the semantic-color roles, the three control insets, the two shape steps, the type-role table, the component value blocks, and the limit sentences carried from the source (Motion, Assets, Font evidence boundary, State record, Spacing, Layout limits, the §2 "does not establish error, success, warning, link-hover, yellow heritage, or a general dark-surface role" sentence, Avoid, Named gaps).
2. **Attributed first-party statements** — "its official history frames", "the corporate description connects", "Ferrari established Centro Stile in 2010 and describes", "Ferrari's official SF-24 article identifies", and the About-us quotation with its attribution. These are reported as Ferrari's own words, not read into an interface value.
3. **Contract governance text** — Authority, Application priority, Unknowns, Changes. These describe how this document is to be used and make no Ferrari claim.
4. **Per-component state applicability reasons** — recorded here as the boundary case, not as a derived group. The `loading` / `error` / `success` rows on the Subscribe CTA, the Header navigation item and the Cookie-consent action are control-meaning determinations required by C1/C2 and are phrased from what each control does (commits a subscription / selects a destination / opens the cookie-management surface), never from what was observed. The portable body states that boundary in its own words — "Absence of an observation is never a `not-applicable` reason" — and carries no derived-editorial qualification on those tables.

## Proof notes

- verification_v2 schema 2; `conflicts: []`
- `components_harvested: true`
- `interactionCount: 0`; only default component observations are promoted, plus one header focus snapshot that supplies no changed value
- Unobserved hover / disabled / loading / error / success treatments are omitted rather than marked `not-applicable`. Applicability follows control meaning: the Subscribe CTA commits a subscription, so its loading / error / success stay `applicable` with the treatment omitted; the header item selects a destination and the `Manage Cookies` control opens the cookie-management surface, so those three states are `not-applicable` on both for role reasons, never for a missing observation. State coverage is not claimed complete.
- No focus-visible treatment is asserted anywhere: the source records a focus snapshot, which is a different evidence class from a `focus-visible` capture.
- The official corporate, history, design and SF-24 documents are narrative and brand-context sources, not interface-token sources. The Legal page bounds licence only.
- No fictional persona, demographic, journey, or conversion claim is recorded here; source §13's placeholder is held in the Omission ledger only. The portable body's derived readings are **eight**, not one, and they are not summarised in a sentence: each is enumerated row by row with its portable line, legacy origin and qualification placement in **Portable derived-editorial scope** above, and the 1:1 count against the body is measured there (E1).
