# ohouse provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/ohouse/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | ohouse |
| name | Ohouse |
| display_name_kr | 오늘의집 |
| country | KR |
| category | consumer-tech |
| homepage | `https://ohou.se/` |
| primary_color | `#00a1ff` |
| logo.type | favicon |
| logo.slug | `https://ohou.se/favicon.ico` |
| omd format (source) | 0.1 |
| verified | 2026-07-13 |
| tokens.source | live-extract |
| tokens.extracted | 2026-07-13 |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here, and a portable scope record in `DESIGN.md` §1. The primary color is dual: identity here, and Foundations / compact blue action / text action in `DESIGN.md`. The favicon slug is dual: identity here, and a portable asset pointer in `DESIGN.md` §3.

**Logo decision.** `logo.slug` is an Ohouse-hosted favicon on the captured consumer host (`https://ohou.se/favicon.ico`), not a third-party favicon-service URL.

YAML `ds.type` is absent in the source. Nothing to keep (A1c N/A).

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-13 |
| verification_v2.checked | 2026-07-13 |
| surfaces inspected | 2026-07-13 |
| sources captured | 2026-07-13 |
| tokens.extracted | 2026-07-13 |

Conflicts unresolved: none — as the source footer states.

The source footer records that the earlier `#35c5f0` and inferred semantic, state, layout, and motion claims were resolved by removing them because the supplied evidence did not corroborate them. That removal remains the source’s own resolution, not a new portable color.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | product | `https://ohou.se/` | 2026-07-13 |
| experts | product | `https://ohou.se/experts` | 2026-07-13 |
| customer-center | support | `https://ohou.se/customer_center` | 2026-07-13 |

Only `home` yielded a populated UI tree. `experts` and `customer-center` are product-surface attempts in the source, not a basis for generalising their chrome.

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | `https://ohou.se/` | 2026-07-13 |
| experts-live | product-surface | `https://ohou.se/experts` | 2026-07-13 |
| customer-live | product-surface | `https://ohou.se/customer_center` | 2026-07-13 |
| bucketplace-about | official-doc | `https://www.bucketplace.com/en/` | 2026-07-13 |
| pretendard-doc | official-doc | `https://github.com/orioncactus/pretendard/blob/main/packages/pretendard/docs/en/README.md` | 2026-07-13 |
| pretendard-license | license | `https://github.com/orioncactus/pretendard/blob/main/LICENSE` | 2026-07-13 |

Team culture URL named in the source body (not in YAML `verification_v2.sources`): `https://www.bucketplace.com/en/team-culture/`. Dual with portable Principles / Content citations.

### Tier 1

- `https://ohou.se/` (populated consumer product surface, supplied collector)
- `https://ohou.se/experts` and `https://ohou.se/customer_center` (product-surface attempts, no populated UI tree)
- `https://www.bucketplace.com/en/` (official company/service context)
- `https://www.bucketplace.com/en/team-culture/` (official principles/culture)
- `https://github.com/orioncactus/pretendard/` (official font documentation and license)

### Tier 2 (no usable record)

- `https://getdesign.md/ohouse` — attempted on 2026-07-13; the built-in fetch returned an internal error; no cross-check record
- `https://styles.refero.design/?q=ohouse` — attempted on 2026-07-13; the built-in fetch returned an internal error; no cross-check record

### Narrative and licence (not interface tokens, except where the source already records a computed value)

- Bucketplace About: `https://www.bucketplace.com/en/`
- Team culture: `https://www.bucketplace.com/en/team-culture/`
- Pretendard documentation: `https://github.com/orioncactus/pretendard/blob/main/packages/pretendard/docs/en/README.md`
- Pretendard license: `https://github.com/orioncactus/pretendard/blob/main/LICENSE`

## Claim ledger

Claims use YAML anchors from the source: `home` = home / home-live / computed-style / 2026-07-13.

| claim | surface |
|---|---|
| tokens.colors.action | home |
| tokens.colors.foreground | home |
| tokens.colors.body | home |
| tokens.colors.muted | home |
| tokens.colors.canvas | home |
| tokens.colors.hairline | home |
| tokens.typography.family.ui | home |
| tokens.typography.display.size / weight / lineHeight / tracking / use | home |
| tokens.typography.body.size / weight / lineHeight / tracking / use | home |
| tokens.typography.body-lg.size / weight / lineHeight / tracking / use | home |
| tokens.typography.action.size / weight / lineHeight / tracking / use | home |
| tokens.typography.compact-action.size / weight / lineHeight / tracking / use | home |
| tokens.spacing.xs / sm / md / lg | home |
| tokens.rounded.square / sm / full | home |
| tokens.shadow.floating | home |
| tokens.components.product-list-article.type / bg / fg / radius / padding / font / use | home |

## Capture selectors

| Component | Pointer |
|---|---|
| Compact blue action | `home::[data-omd-capture="9"]`, `button[role="button"]`, 91×40px; one captured occurrence |
| Circular floating control | `home::[data-omd-capture="20"]`, `button`, 48×48px; seven captured occurrences |
| Outlined utility control | `home::[data-omd-capture="127"]`, `button`, 182×32px; one captured occurrence |
| Text action | `home::[data-omd-capture="32"]`, `button`, 41×20px; six captured occurrences |
| Top-navigation text input | `home::[data-omd-capture="4"]`, `input[type="text"]`, 255×20px; one captured occurrence |
| Product-list article shell | `home::article.today-deal-item`, representative 269px-wide articles; 4+ captured occurrences |

Selectors are dual-destination with the portable component Use lines.

## Token note (YAML `tokens`)

`tokens.source: live-extract`. `tokens.extracted: 2026-07-13`. `components_harvested: true`.

YAML color keys: `action` `#00a1ff`, `foreground` `#2f3438`, `body` `#424242`, `muted` `#828c94`, `canvas` `#ffffff`, `hairline` `#e0e0e0`. YAML `tokens.typography.family.ui`: `Pretendard Variable`. YAML spacing: `xs 6`, `sm 12`, `md 16`, `lg 20`. YAML rounded: `square 0`, `sm 4`, `full 24`. YAML `tokens.shadow.floating`: `0 2px 5px rgba(63, 71, 77, 0.15)` (body writing `0px 2px 5px rgba(63, 71, 77, 0.15)`). YAML component: `product-list-article` only (`type: card`).

## Sibling handling

`web/references/ohouse/.verification.md` is present (dotfile; path written directly). Nothing from that sibling was promoted into the portable body as a product fact or as a structural classification. Sibling-only raw samples and Team-culture labels that the source body does not carry stay in the sibling. Mention of the sibling path here is a pointer, not a claim that those strings are absent from this ledger.

## Derived editorial inventory

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience Scope `:9` | Three consumer URLs as this contract’s captured surfaces; only the populated home as the token surface; `/experts` and `/customer_center` as product-surface attempts rather than as a basis for generalising their chrome; corporate site and a historic app icon as not a token export |
| Experience Scope `:11` | Characterizations image-led commerce, a relatively quiet text-and-control layer, compact controls rather than a published visual system; hex values, family name, radii, and surface names beside them are the source’s own |
| Experience Scope `:13` | 2014 incorporation / 2016 Ohouse Store launch / service list / timeline names / purchase-installation-offline-showrooms-renovation extension / two-level-claims sentence / corporate-presentation sentence as narrative context that does not by itself supply interface tokens |
| Primary tasks `:19` | Selecting the three primary tasks from captured home controls and shells; not from the source’s persona section |
| Audience `:28` | Dropping individual biographies rather than promoting them; carrying no occupation classification or motivation |
| Audience `:34` | Reading those source-named groups as this product’s audience; using only the source’s stakeholder-group wordings |
| Distinctive traits `:38` | Classifying the list as a restatement of measured values, and the groupings inside it |
| Principles `:49` | Three items; numbered stems resting on first-party About and Team culture sentences; every *UI implication* as the source’s own editorial reading |
| Application rules `:57` | Three Do rules and the reasons attached to them |
| Avoid `:65` | Three Don’ts and the reasons inside them; keeping the Agent Prompt Guide snapshot bounds here as capture limits rather than as a tool prompt |
| Semantic color `:77` | Pairing each hex to its token-set path; canvas white’s recorded uses on `tokens.colors.canvas`; `#141414` on the top-navigation text input rather than as a YAML color token |
| Spacing `:103` | Four YAML spacing keys unmerged from occurrence clusters, from compact-action padding, and from type sizes |
| Shape `:115` | Three rounded keys as local captured defaults rather than as a universal radius scale; `full: 24` unmerged from 48×48px size |
| Elevation `:119` | One floating-control shadow as the captured elevation record rather than as a multi-level scale; YAML `0 2px 5px` beside body `0px 2px 5px` |
| Font evidence `:131` | Sorting the source’s font records into evidence classes; class contents remain the source’s own |
| Family `:145` | Fallback prohibition; declared-only faces and `Times` refused as the UI family |
| Type roles `:149` | YAML `use` verbatim beside hierarchy-table capture scope; unitless YAML line-heights beside table px writings; Body large emphasis off `tokens.typography.action` and off `tokens.typography.body-lg` |
| Assets `:167` | Favicon URL as an identity pointer on the captured host |
| Capture record `:178` | Applicability by control meaning; YAML `Primitive type` only when the token set records that type; §4-only controls labelled `not in the token set`; generic focus is not a `focus-visible` treatment; not a complete state-coverage claim |
| Compact blue action `:197` | Keeping this control’s `0px 16px` padding off `tokens.spacing.md: 16`; keeping its `4px` radius as this control’s corner rather than as a universal radius scale |
| Circular floating control `:225` | Keeping this control’s `24px` radius on `tokens.rounded.full: 24`; keeping 48×48px as this control’s size rather than as that radius step |
| Product-list article shell `:324` | Omitting `kind` and a state-applicability map because that pair is not interactive-kind evidence |
| Layout `:333` | 1440×900 as the supplied capture size rather than as a breakpoint system; occurrence clusters rather than a documented layout scale; control sizes as desktop-capture measurements |
| Content `:340` | Company statements as voice context for this reconstruction rather than as a separately published content-style guide |
| Named gaps `:374` | List as unnamed values rather than as coverage of domains the source never named |

Portable `DESIGN.md` carries 25 complete B2a qualifications. This table is 25 data rows. Preamble sentences on this page are not portable qualifications. Complete form used: "a derived editorial implementation inference from the verified surfaces; it is not Ohouse-authored or a separately published UI specification." Ohouse has no separately published UI specification in this packet; the unmodified example applies.

## Omission ledger

Mention (disposition) is not use (re-hosting). This table names what was dropped and where the drop is recorded. It does not re-list fictional demographics, and it does not assert portable-body absence in the same sentence that reprints a dropped string as if it were a surviving token.

| Item | Disposition |
|---|---|
| Source §13, group-level slots (no name, age, or city existed) | Deleted as individual personas. Not promoted as individuals or as newly coined Audience labels. Occupation classification and motivation are not re-hosted. Portable Audience uses only the source’s own stakeholder-group wordings. |
| Source §9 Agent Prompt Guide remaining after snapshot bounds were moved | Deleted as tool-facing prompt. Unique snapshot bounds (“Do not infer hover or mobile behavior”; “Do not request a complete Ohouse design system from this snapshot”) already live in Experience Avoid; “Do not infer hover or mobile behavior” is also in Components capture record. The 91×40px `#00a1ff` 4px action already lives on Compact blue action. |
| Unattributed cubic-bezier curves | None in the source. Nothing to delete. Motion stays unresolved in portable Foundations; no B3 five-kind promotion gate is claimed, because the source does not state that gate. |
| YAML frontmatter identity / omd / verification_v2 / tokens metadata | Ledger in this file. Portable H1 uses `Ohouse Design System`. |
| Source footer **Verified** / Tier 1 / Tier 2 / Conflicts | Ledger in Freshness and Sources above. |

## Proof notes

- `tokens.source: live-extract`
- `components_harvested: true`
- verification_v2 schema 2; conflicts: []
- Interaction expansions: `interactionKinds: 0`, `interactionCount: 0`; only default component observations promoted
- Uncaptured hover/pressed/focus/disabled/loading/error/success treatments are omitted. They are not `not-applicable` solely for that reason. Applicability follows control meaning. State coverage is not claimed complete.
- Official history, Team culture, and the Pretendard OFL 1.1 licence are narrative or licence context, not token sources, except where the source DESIGN.md itself records a computed value
- Same-hex role splits in the portable body, kept unmerged: `#ffffff` is `tokens.colors.canvas` (control surfaces, compact-action text, circular-control background, circular-control text); `#00a1ff` is `tokens.colors.action` (filled compact action background, text-action and border color)
