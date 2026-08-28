# KKday provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/kkday/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | kkday |
| name | KKday |
| country | TW |
| category | ecommerce |
| homepage | `https://www.kkday.com` |
| primary_color | `#FF5C00` |
| logo.type | favicon |
| logo.slug | `https://www.google.com/s2/favicons?domain=kkday.com&sz=128` |
| omd format (source) | 0.1 |
| verified | 2026-05-19 |
| tokens.source | prose-derived |
| tokens.extracted | 2026-06-09 |
| components_harvested | true |

Token note from source: live computed-style verification of kkday.com was not completed this pass (HTTP 403 + Playwright redirect). Catalog `primary_color` `#FF5C00` is the creation-brief-provided value and matches KKday's known orange-led commerce identity; hexes other than the primary are well-grounded approximations pending live re-inspection.

The homepage URL is dual-destination: identity metadata here, and a portable scope record in `DESIGN.md` §1. Catalog identity `primary_color` `#FF5C00` is dual: identity here, and the portable Semantic color primary role. The favicon URL is dual: identity here, and a portable asset pointer in `DESIGN.md` §3. `tokens.source` `prose-derived` is dual: this table and the portable Scope sentence.

**Logo decision.** The `logo.slug` above is a Google s2 favicon URL for `kkday.com`, kept as the catalog identity pointer and classified in the portable document as that identity pointer, not a KKday-hosted brand file.

No `ds.*` record is in the source YAML. The portable B2a close uses the toss-form `not KKday-authored or a separately published UI specification` (rulebook v12 B2a 전제 주석: no first-party published UI specification is named).

## Freshness

| Event | Date |
|---|---|
| verified (YAML) | 2026-05-19 |
| tokens.extracted | 2026-06-09 |
| sources captured | 2026-05-19 |

The source footer records the verification verbatim as **Verified:** 2026-05-19. That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved, as the source footer states: exact production hexes beyond primary not live-verified this pass (browser session unreliable) — flagged for UPDATE.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| homepage | product-surface (named; live inspect not completed) | `https://www.kkday.com` | not completed this pass |
| en-us hero | copy source (WebSearch) | `https://www.kkday.com/en-us` | 2026-05-19 (hero line only) |

YAML token claims resolve to the `prose-derived` set. They are not a computed-style extract.

## Sources

| id | kind | url | captured |
|---|---|---|---|
| homepage-named | product-surface | `https://www.kkday.com` | 2026-05-19 (named; inspect not completed) |
| en-us-hero | copy | `https://www.kkday.com/en-us` | 2026-05-19 (WebSearch) |
| wikipedia | narrative | `https://en.wikipedia.org/wiki/KKday` | 2026-05-19 (WebFetch) |
| brandcolorcode | unofficial aggregator | brandcolorcode.com/kkday | heritage teal `#26BEC9` |
| lilingh | UX case study | lilingh.com/projects/kkday | WCAG contrast note |

### Tier 1 (attempted)

- kkday.com — live inspect NOT completed (403 + browser redirect); primary `#FF5C00` is brief-provided and matches KKday's orange-led identity
- kkday.com/en-us hero `EXPLORE. DREAM. DISCOVER` (WebSearch 2026-05-19)

### Tier 2

- brandcolorcode.com/kkday — heritage teal `#26BEC9` (Pantone 319C); the aggregator states those color values have not been given explicitly in the KKday brand guidelines
- lilingh.com KKday UX case study — brand-color-on-white contrast was too low and button shades were adjusted for WCAG (informs the orange-hover / accessibility note)
- Wikipedia (KKday — Ming Chen / 2014 Taipei / 90+ countries / H.I.S. / $250M+)
- Style ref named by the source footer: `pinkoi` (TW commerce tone). That string is a producer comparison, not a KKday token.

## Sibling handling (`web/references/kkday/.verification.md`)

The sibling path was checked directly. There is no `.verification.md` under `web/references/kkday/`. A missing file is unmeasured, not a zero inventory.

## Token-set key paths (YAML)

| Path | Surface attachment |
|---|---|
| tokens.colors.primary / primary-hover / brand / canvas / foreground / muted / on-primary / surface / hairline / border-mid / body / brand-tint / success / warning / error / rating | prose-derived named homepage |
| tokens.typography.family.sans / mono | prose-derived (inferred stack) |
| tokens.typography.hero / section-heading / card-heading / price / body / body-small / caption | prose-derived (inferred scale) |
| tokens.spacing.xs / sm / md / base / lg / xl / xxl | prose-derived |
| tokens.rounded.sm / md / lg / full | prose-derived |
| tokens.shadow.card / header / dropdown / modal | prose-derived |
| tokens.components.button-primary.* | prose-derived |
| tokens.components.button-outline.* | prose-derived |
| tokens.components.button-ghost.* | prose-derived |
| tokens.components.input.* | prose-derived |
| tokens.components.card-experience.* | prose-derived |
| tokens.components.badge-sale.* | prose-derived |
| tokens.components.badge-trust.* | prose-derived |
| tokens.components.badge-urgency.* | prose-derived |
| tokens.components.tab-nav.* | prose-derived |

`#EEEEEF`, `#BDBDBD`, and `#26BEC9` are source §2 body only; they have no YAML `tokens.colors.*` path. Search (hero), Destination Card, and the sticky mobile book-bar are source §4 / §8 / §9 only; they have no YAML `tokens.components.*` path.

## Omission ledger

Disposition mentions. These rows name the dropped field kind; they do not re-host the dropped content as a fact.

| Item | Disposition |
|---|---|
| §13 Personas — 3 fictional archetypes | Deleted. No name, motivation, or affiliation classification is re-hosted here (D2, D2a). The source-named groups TW/HK/JP independent travelers and APAC outbound tourists survive in `DESIGN.md` Audience because the source calls them publicly described KKday user segments, not fictional biographies. |
| §9 Agent Prompt Guide — tool-facing construction prompts and iteration list | Deleted. No receiving slot. Unique geometry the prompts name (Experience Card `object-fit: cover` / body `12px` / title `16px/700` / rating `4.8 · 1,240` / price `18px/700`; hero search destination+date+travelers and `0 4px 16px rgba(0,0,0,0.12)`; sticky mobile book-bar price-left `18px/700`) landed on Experience Card, Search (hero), and Sticky mobile book-bar (A3). Color/radius/trust rules already in Experience/Foundations/Components. |
| Unsourced easing curves | Curve values omitted at the curve-value boundary. Duration tokens 0ms / 120ms / 200ms / 300ms / 250ms, the three easing *roles*, four signature motions, spring stance, and reduced-motion stay in `DESIGN.md` Motion. B3 promotion gate is in `DESIGN.md` Motion. |
| YAML `omd`, `verified`, `tokens.source` / `extracted`, `components_harvested` | Kept in this ledger (A1c). `prose-derived` also has a portable Scope sentence. Producer strings `omd` / `verified` / `extracted` are not copied into portable top matter. |
| HTML comment philosophy layer / footer Tier lines | Ledger metadata here. Wikipedia / brandcolorcode / lilingh / pinkoi stay in this file. |

## Claim ledger

Claims use the prose-derived named-homepage anchor from the source.

| claim | surface |
|---|---|
| tokens.colors.primary / brand | named homepage (brief-provided primary) |
| tokens.colors.primary-hover / canvas / foreground / muted / on-primary / surface / hairline / border-mid / body / brand-tint / success / warning / error / rating | named homepage (approximation class) |
| tokens.typography.family.sans / mono | inferred OTA/TW stack |
| tokens.typography.hero / section-heading / card-heading / price / body / body-small / caption | inferred scale |
| tokens.spacing.xs / sm / md / base / lg / xl / xxl | prose-derived |
| tokens.rounded.sm / md / lg / full | prose-derived |
| tokens.shadow.card / header / dropdown / modal | prose-derived |
| tokens.components.button-primary.* / button-outline.* / button-ghost.* / input.* / card-experience.* / badge-sale.* / badge-trust.* / badge-urgency.* / tab-nav.* | prose-derived |
| §11 2014 / Taipei / Ming Chen / Star Travel / Ezfly / 90+ countries / 300,000 / US$250 million / Series D $70M late 2024 / H.I.S. / Rezio / FineDayClub / ActivityJapan / closing warmth-of-anticipation sentence | narrative (Wikipedia via WebFetch 2026-05-19); dual with `DESIGN.md` Scope |

## Derived-editorial inventory (B2a, 1:1 with portable complete-form closes)

Each row names one portable sentence that carries the complete close `derived editorial implementation inference` + `not KKday-authored or a separately published UI specification`. Count must match `DESIGN.md`.

| # | Portable site | Judgment named |
|---|---|---|
| 1 | Scope ¶1 | homepage as named marketplace surface; YAML kept in `prose-derived`; live-inspect-not-completed as the source's own evidence class; values stay attached; uninspected DOM refused as a computed-style source |
| 2 | Scope ¶2 | orange as sunrise; night-market rather than concierge; unembarrassed enthusiasm; the source's own "do this next." sentence kept as conversion-signal writing rather than as a separately published doctrine |
| 3 | Scope narrative | classifying the §11 paragraph — including 2014 Taipei, Ming Chen, Star Travel, Ezfly, the "things to do" thesis, 90+ countries / 300,000 / US$250 million / Series D $70M late 2024 / H.I.S., the super-app span, the three subsidiaries, and the closing warmth-of-anticipation sentence — as narrative context that does not by itself supply interface tokens |
| 4 | Primary tasks | selecting the three marketplace outcomes as primary tasks; refusing the persona section |
| 5 | Audience | refusing to promote individual personas; reading the source-named groups as this product's audience |
| 6 | Distinctive traits | classifying the list as a restatement of the source Key Characteristics; groupings and readings inside the list |
| 7 | Principles | the six items and every *UI implication* |
| 8 | Application rules | the source Do rules and the reasons attached |
| 9 | Avoid | the source Don't prohibitions and the reasons inside them |
| 10 | Semantic color | pairing each hex to its token-set path; keeping `#EEEEEF` / `#BDBDBD` / `#26BEC9` on the §2 body roles; keeping hexes other than the primary in the approximation class |
| 11 | Semantic color attachments | reading canvas/on-primary and primary/brand as two-key pairs rather than as a collapsed fill |
| 12 | Spacing | keeping each number on its own key path |
| 13 | Shape | keeping `md: 8` and `lg: 8` as two keys; keeping `full: 9999` on its own path; keeping local radii on their components |
| 14 | Elevation | reading the stack as commerce-shadow elevation; keeping each shadow string on the YAML key |
| 15 | Motion spring stance | classifying the avoid-spring sentence as derived editorial |
| 16 | Motion | three untraceable curves omitted; four signature motions kept; reduced-motion kept; five-kind promotion gate held |
| 17 | Font evidence | applying official-product-use / live-computed-not-completed / inferred-stack / mono / distributed-asset / license classes |
| 18 | Family | keeping YAML `-apple-system` / `SF Mono` beside the longer locale table; fallback prohibition |
| 19 | Type roles | keeping YAML sizes as token-set numbers; keeping YAML use and the §3 longer range on the same role |
| 20 | Type conventions | the four §3 convention rules and the readings inside them |
| 21 | Type roles sizes | reading 32 / 23 / 19 / 18 / 15 / 13 / 12 as the roles named beside them rather than as shared numerals |
| 22 | Assets | favicon URL as an identity pointer rather than hosted brand artwork |
| 23 | Capture record §14 | keeping the ten state rows attached to the source §14 section rather than transferring them onto a different control as computed treatments |
| 24 | Capture record applicability | preserving the source state contract here rather than delegating to an unadopted catalog graph; role-based decision procedure; every interactive-kind verdict; every applicability verdict and reason; refusal to treat the map as a complete state-coverage claim |
| 25 | Primary (Book / Action) | reading 8px / 10px 20px / 16px as this button's geometry rather than those YAML steps; keeping §14 booking-loading and Disabled on the §14 rows |
| 26 | Secondary (Outlined) | reading 8px / 16px as this outlined button's geometry rather than those YAML steps |
| 27 | Ghost / Text | reading 8px / 8px 12px as this ghost control's geometry rather than those YAML steps |
| 28 | Input | reading 8px / 10px 14px / 16px as this input's geometry; keeping observed Focus off the `focus-visible` row |
| 29 | Experience Card | keeping YAML `padding: 0` beside construction-prompt body `12px`; reading 8px / 12px / 16px / 18px as this card's geometry |
| 30 | Sale Badge | omitting kind and the map; reading 4px as this badge's geometry |
| 31 | Trust Chip | keeping YAML tint and §4 white-or-tint as a conflict; omitting kind and the map |
| 32 | Urgency Chip | omitting kind and the map because the source supplies no interaction evidence |
| 33 | Sticky header nav | keeping YAML `15px / 500` and §4 `14–16px` / `400–500`; reading mega-menu categories as this header's chrome |
| 34 | Search (hero) | omitting a primitive type; keeping bordered-box beside shadowed-pill; reading the construction-prompt shadow as this field's geometry rather than only `tokens.shadow.dropdown` |
| 35 | Destination Card | omitting a primitive type; reading 8px as this tile's geometry |
| 36 | Sticky mobile book-bar | omitting a primitive type; omitting kind and the map because the bar is chrome around the Primary CTA |
| 37 | Layout spacing | reading card-internal `8–12px` and section `40–64px` as layout measurements rather than as those YAML spacing steps |
| 38 | Layout density | reading the medium-high-density paragraph as a layout rule for the recorded marketplace |
| 39 | Layout measurements | reading ~1200px / the four breakpoint rows / 44px+ / the sticky book bar as the layout measurements the source recorded |
| 40 | Content & Locales | reading the source register as this contract's voice rather than as a separately published KKday microcopy guide |
| 41 | Voice samples | keeping each sample's verified / illustrative class rather than promoting illustrative strings as live-verified copy |
| 42 | Named gaps | calling the list a set of named gaps rather than a domain inventory; treating the items as unnamed values rather than permissions to invent |
| 43 | Motion durations | keeping the five duration rows as duration tokens rather than easing curves |
| 44 | Assets photography | refusing to replace recorded destination/experience photography with invented brand-color decoration |
| 45 | Published names | classifying the source's published names and lines as byte-exact kept strings |

## Proof notes

- conflicts: exact production hexes beyond primary not live-verified this pass
- components_harvested: true
- tokens.source: prose-derived
- Uncaptured visual treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete.
- Narrative context (2014 Taipei, Ming Chen, Star Travel, Ezfly, 90+ countries, 300,000 experiences, US$250 million, Series D $70M late 2024, H.I.S., Rezio, FineDayClub, ActivityJapan, closing warmth-of-anticipation sentence) does not by itself supply interface tokens
- Heritage teal `#26BEC9` remains a legacy/unofficial aggregator accent, not a current primary
