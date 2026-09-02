# LG유플러스 provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the lguplus migration. Canonical source remains `web/references/lguplus/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | lguplus |
| name | LG유플러스 |
| country | KR |
| category | consumer-tech |
| homepage | https://www.lguplus.com/ |
| primary_color | `#e6007e` |
| logo | type `favicon`, slug `https://www.google.com/s2/favicons?domain=lguplus.com&sz=128` |
| omd format (source) | 0.1 |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-13 |
| components_harvested | true |

The logo record is a third-party Google favicon proxy (`s2/favicons?domain=lguplus.com`), not an LG U+-distributed brand-asset file. It is kept here and named as identity metadata in the portable Assets subsection; it is not carried as a first-party mark file. Source YAML has no `ds.type` field; none is invented (A1c).

`tokens.note`, verbatim from the source frontmatter:

> Only selector-backed values from the supplied Home and public subscription-product capture are tokenized. Corporate, newsroom, declared-only, and license evidence remains separately scoped.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-13 |
| verification_v2.schema | 2 |
| verification_v2.checked | 2026-07-13 |
| surfaces inspected | 2026-07-13 |
| sources captured | 2026-07-13 |
| tokens.extracted | 2026-07-13 |
| pretendard-license captured | 2026-07-14 |

Conflicts unresolved: none (source `conflicts: []`, and the source footer records "Conflicts unresolved: none").

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | public-service-home | https://www.lguplus.com/ | 2026-07-13 |
| subscription-product | public-subscription-product | https://www.lguplus.com/pogg/product/%EC%9C%A0%ED%8A%9C%EB%B8%8C-%ED%94%84%EB%A6%AC%EB%AF%B8%EC%97%84-%EC%9C%A0%EB%8F%85pick-2?utm_campaign=o25o25udok04pfm&utm_source=uplusapp&utm_medium=main_eventbanner_empty_empty&utm_content=notsetpick2_6&utm_term=notsetnone | 2026-07-13 |
| corporate-about | corporate-about | https://www.lguplus.com/about/ko | 2026-07-13 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| lguplus-home-live | product-surface | https://www.lguplus.com/ | 2026-07-13 |
| lguplus-subscription-live | product-surface | https://www.lguplus.com/pogg/product/%EC%9C%A0%ED%8A%9C%EB%B8%8C-%ED%94%84%EB%A6%AC%EB%AF%B8%EC%97%84-%EC%9C%A0%EB%8F%85pick-2?utm_campaign=o25o25udok04pfm&utm_source=uplusapp&utm_medium=main_eventbanner_empty_empty&utm_content=notsetpick2_6&utm_term=notsetnone | 2026-07-13 |
| lguplus-about-live | product-surface | https://www.lguplus.com/about/ko | 2026-07-13 |
| lguplus-pretendard-asset | brand-asset | https://www.lguplus.com/static/pc-static/common/fonts/Pretendard-Regular.subset.woff2 | 2026-07-13 |
| pretendard-license | license | https://github.com/orioncactus/pretendard/blob/main/LICENSE | 2026-07-14 |

### Tier 1 (source footer)

- https://www.lguplus.com/
- https://www.lguplus.com/pogg/product/%EC%9C%A0%ED%8A%9C%EB%B8%8C-%ED%94%84%EB%A6%AC%EB%AF%B8%EC%97%84-%EC%9C%A0%EB%8F%85pick-2?utm_campaign=o25o25udok04pfm&utm_source=uplusapp&utm_medium=main_eventbanner_empty_empty&utm_content=notsetpick2_6&utm_term=notsetnone
- https://www.lguplus.com/about/ko

### Tier 2 (attempted; no usable record)

- https://getdesign.md/lguplus (attempted)
- https://styles.refero.design/?q=lguplus (attempted)

Tier 2 records are not interface-token sources. No value was used.

### Narrative and license context (not interface tokens)

- Official About: https://www.lguplus.com/about/ko — 1996 establishment; personal mobile, home internet/IPTV, smart-home, people-centred AI, enterprise AI and security services. Company/product context only. The portable body keeps that substance; the URL stays here.
- Official Simply. U+ newsroom: https://news.lguplus.com/?p=19596 — simplifying daily life by reducing complexity and retaining what is needed. Brand-evolution and voice context only.
- Official Simple Lab / campaign: https://news.lguplus.com/?p=20541 — simplicity, customer ideas, and Simple Lab. Brand-evolution context only.
- Pretendard license: https://github.com/orioncactus/pretendard/blob/main/LICENSE — SIL Open Font License 1.1. License fact only; not LG U+ font ownership.

## Claim ledger

Every value below traces to `web/references/lguplus/DESIGN.md`. "Source location" is the legacy section or YAML path.

| Claim | Source location | Portable destination |
|---|---|---|
| `tokens.colors.primary` | YAML `tokens.colors.primary`, §2 Primary | Foundations → Semantic color |
| `tokens.colors.ink` | YAML `tokens.colors.ink`, §2 Ink | Foundations → Semantic color |
| `tokens.colors.canvas` | YAML `tokens.colors.canvas`, §2 Canvas | Foundations → Semantic color (Home canvas unmerged from CTA `fg` `#ffffff`) |
| `tokens.colors.muted` | YAML `tokens.colors.muted`, §2 Muted | Foundations → Semantic color |
| `tokens.colors.soft` | YAML `tokens.colors.soft`, §2 Soft | Foundations → Semantic color (`pr-btne add` only) |
| `tokens.colors.border` | YAML `tokens.colors.border`, §2 Border | Foundations → Semantic color |
| `tokens.typography.family.home` | YAML `tokens.typography.family.home` | Typography & Assets → Family |
| `tokens.typography.family.subscription` | YAML `tokens.typography.family.subscription` | Typography & Assets → Family (`nskr`) |
| `tokens.typography.body.size` / `weight` / `lineHeight` / `use` | YAML body; §3 Public Home body | Typography & Assets → Type roles (A1a: unitless `1.5` kept; source 24px kept beside it). YAML use: Observed public Home body |
| `tokens.typography.subscription-action.size` / `weight` / `lineHeight` / `use` | YAML subscription-action; §3 Public subscription purchase CTA | Typography & Assets → Type roles (A1a: unitless `1.5` kept; source 24px kept beside it). YAML use: Observed public subscription purchase action |
| `tokens.spacing.xs` / `sm` / `md` / `lg` | YAML `tokens.spacing`; §5 | Foundations → Spacing (+ Layout & Platforms) |
| `tokens.rounded.none` / `row` / `primary-cta` | YAML `tokens.rounded`; §4 / §5 | Foundations → Shape (+ Components) |
| `home-primary-cta` (`type: button`) | YAML `tokens.components.home-primary-cta`; §4 Button | Components & States → Home primary CTA |
| `subscription-information-row` (`type: listItem`) | YAML `tokens.components.subscription-information-row`; §4 List item | Components & States → Subscription information row |
| §3 four-row hierarchy table | §3 Captured hierarchy | Typography & Assets → Type roles |
| §14 seven-row state boundary table | §14 | Components & States → Capture record |
| §15 motion absence + local-extension rule | §15 | Foundations → Motion |
| §10 voice cues, Do/Don't table, three illustrative Korean strings | §10 | Content & Locales |
| §11 1996, official service landscape, Simply. U+, Simple Lab | §11 | Experience → Scope (fenced as brand narrative) |
| §12 four principles with UI implications | §12 | Experience → Principles |
| §7 Do / Don't | §7 | Experience → Application rules / Avoid |
| §1 observed characteristics | §1 | Experience → Distinctive traits |
| Footer **Verified** / Tier 1 / Tier 2 / Conflicts | §4 footer block | This file — Freshness, Sources |

## Capture selectors

| Component | Pointer |
|---|---|
| Home primary CTA | `home::[data-omd-capture="19"]` (source). Sibling also records native `a.c-btn-solid-1-m`. |
| Subscription information row | `surface-2::[data-omd-capture="14"]` (source). Sibling also records `a.list-item_before`. |
| Public subscription purchase CTA (type role only; not a harvested component) | `surface-2::[data-omd-capture="15"]` (source). |

The portable body keeps each harvested component’s YAML `use` string, including those selectors; the table above is the ledger copy (E2a). Sibling class names are evidence here and are not portable component types (B1).

## Sibling verification file (E2)

`web/references/lguplus/.verification.md` exists beside the legacy source and **is adopted** as the evidence record for this migration. Adoption is at the evidence level only. **No portable token and no structural classification was promoted from the sibling** (B1). Concretely, the sibling records the following facts that the legacy `DESIGN.md` never carried as tokens, and none of them entered `docs/design-md-weight/migrated/lguplus/DESIGN.md`:

| Sibling-only fact | Where it lives | Portable body |
|---|---|---|
| Coverage counters: 3 surfaces, coverage 92, 85 component variants, 4 static observed-state records, `interactionCount: 0` | Proof notes below | `interactionCount: 0` is also in the legacy YAML/§4/§14, so that phrase is a source fact in the portable Capture record. The coverage 92 / 85 / 4 counters are sibling-only. |
| `.pg-button-prod_detail-cart_add` geometry: `border-radius: 90px`; `padding: 15.5px`; `height: 55px` | Raw samples below | `90px`, `15.5px`, `55px` are held here. The portable body keeps the YAML/§3 type role (16px / 700 / `nskr` / 1.5) for the subscription purchase CTA, not this extra geometry. |
| `.pr-btne.add` extra geometry: `border-radius: 8px`; `padding: 0px 10px`; `height: 60px`; `font-size: 12px`; `font-weight: 700`; `line-height: 18px` | Raw samples below | `#f5f5f5` and the source name `pr-btne add` are the legacy §2 Soft row. Extra measurements stay here. |
| Corporate About `surface-3` sample: `color: rgb(34, 23, 28)`; `Pretendard Variable`; `16px` / `600` / `24px` | Raw samples below | Corporate About is context, not a product-token source. `Pretendard Variable` and `rgb(34, 23, 28)` stay here. |
| Native element readings `a.c-btn-solid-1-m` and `a.list-item_before` | Capture selectors / raw samples | YAML primitives stay `button` and `listItem`. No sibling heading-level classification is a portable type. |
| Home body computed stack `Pretendard, -apple-system, ...` | Raw samples below | Portable family is the legacy computed name Pretendard, not the fallback stack. |

### Raw samples (from the sibling)

Kept here because they are per-element evidence, not portable contract.

- `home::body` — `color: rgb(0, 0, 0)`; `background-color: rgb(255, 255, 255)`; `font-family: Pretendard, -apple-system, ...`; `font-size: 16px`; `font-weight: 400`; `line-height: 24px`.
- `home::[data-omd-capture="19"]` `.c-btn-solid-1-m` — `background-color: rgb(230, 0, 126)`; `color: rgb(255, 255, 255)`; `border-width: 0px`; `border-radius: 20px`; `padding: 0px 30px`; `height: 40px`; `font-size: 16px`; `font-weight: 400`.
- `surface-2::[data-omd-capture="14"]` `.list-item_before` — `background-color: rgba(0, 0, 0, 0)`; `color: rgb(34, 34, 34)`; `border-color: rgb(235, 235, 235)`; `border-width: 1px`; `border-radius: 8px`; `padding: 19px`; `height: 65px`; `font-size: 14px`; `font-weight: 500`; `line-height: 21px`.
- `surface-2::[data-omd-capture="15"]` `.pg-button-prod_detail-cart_add` — `background-color: rgb(230, 0, 126)`; `color: rgb(255, 255, 255)`; `border-radius: 90px`; `padding: 15.5px`; `height: 55px`; `font-size: 16px`; `font-weight: 700`; `line-height: 24px`.
- `surface-2::[data-omd-capture="34"]` `.pr-btne.add` — `background-color: rgb(245, 245, 245)`; `border-radius: 8px`; `padding: 0px 10px`; `height: 60px`; `font-size: 12px`; `font-weight: 700`; `line-height: 18px`.
- `surface-3::[data-omd-capture="2"]` — `color: rgb(34, 23, 28)`; `padding: 8px`; `font-family: Pretendard Variable, ...`; `font-size: 16px`; `font-weight: 600`; `line-height: 24px`.

### Conflict matrix (from the sibling)

| Field | Tier 1 supplied capture | getdesign | refero | Resolution |
|---|---|---|---|---|
| Public Home CTA | `#e6007e`, white, 20px, `0px 30px`, 40px | No analysable record | No style detail | Tier 1 retained. |
| Subscription information row | `#222222`, 1px `#ebebeb`, 8px, 19px, 65px | No analysable record | No style detail | Tier 1 retained as `listItem`. |
| Loaded families | Home Pretendard; subscription `nskr` | No analysable record | No style detail | Surface split retained. |
| Interactive states | `interactionCount: 0` | No value | No value | Omitted; default geometry remains. |

No unresolved conflicts.

## Omission ledger

| Item | Status |
|---|---|
| §13 Personas — 3 inferred service-domain archetypes (role titles and inferred task sketches) | Deleted. The source's own §13 header labels them as inferred from public service categories, not surveyed personas, demographics, or observed product-flow behavior. Not promoted into the portable body, and not re-listed here as identifiers (D2a). Experience `Audience` carries only the official service categories the company presentation independently records. |
| §8 Reference Implementation Notes — tool-facing claim-path instruction | The instruction to use only frontmatter tokens with a matching `verification_v2.claims` path, and the two-component default-geometry / zero-interaction summary, moved into Components & States Capture record (A3: unique bound). The claims table itself stays in this file. |
| §9 Verification Scope — packet path and sibling/_research domain split | Packet path `artifacts/reference-evidence/lguplus.json` and the domain split across `.verification.md` / `_research.md` stay in this file (freshness/evidence ledger). Experience Scope keeps the recorded bounds "The 2025 Simply. U+ narrative is brand context only. It does not create colors, components, states, or motion tokens" and "These are corporate and campaign facts, not evidence that all legacy pages already share a new visual system." |
| Unsourced motion curve / duration / reduced-motion values | None were in the source. Nothing to drop as a curve. B3 five-kind promotion gate is in portable Motion. |
| `[FILL IN]` placeholders | Source count 0. None emitted. |

## Derived editorial inventory

Sites in the portable `DESIGN.md` that carry an adjacent complete qualifier. Complete form used: "a derived editorial implementation inference from the verified surfaces; it is not LG U+-authored or a separately published UI specification." This is an index of the derived-reading sites, not a completeness claim. Portable `DESIGN.md` carries 22 complete B2a qualifications. This table is 22 data rows. Preamble sentences on this page are not portable qualifications.

| Location | Qualified reading |
|---|---|
| Experience Scope | Treating the two public product captures as this contract's token surfaces; treating corporate About as context rather than a shared product-token source; not treating the capture as a single universal LG U+ design system or as evidence for authenticated, native-app, checkout, or support flows |
| Experience Scope | Readings of the captured layer as a white, near-black service foundation with a high-visibility magenta action signal, and of Simply. U+ as framing everyday telecom-task complexity rather than as a token source |
| Experience Scope | Treating the 1996 establishment statement, official service landscape, Simply. U+ 2025 direction, and Simple Lab as corporate and campaign facts that do not by themselves supply interface tokens, and as not evidence that all legacy pages already share a new visual system |
| Primary tasks | Selecting the three captured-surface outcomes as primary tasks, and refusing the persona section |
| Audience | Dropping the inferred archetypes rather than promoting them, carrying no demographic segment list, and reading official service categories as audience |
| Distinctive traits | Classifying the list as a restatement of measured values, and the groupings inside it |
| Principles | The four Simply. U+ stems plus UI-implication items as a reconstruction pairing; numbered stems rest on official Simply. U+ direction; every UI implication is the source's own editorial reading |
| Application rules | Treating the source Do list as capture-bound application |
| Avoid | Treating the source Don't list as reconstruction prohibitions |
| Semantic color | Pairing hexes to token-set paths; keeping canvas `#ffffff` unmerged from CTA `fg` `#ffffff`; keeping CTA border `0px solid #ffffff` as that component's border field rather than canvas or a second YAML color key; keeping ink `#000000` unmerged from row `#222222`; keeping muted and soft scoped; not promoting `#222222` as a general foreground; not merging Corporate About ink or low-frequency page-specific colors into the product-scoped palette |
| Spacing | Keeping YAML unitless steps beside the source's own captured-px list; not treating a spacing step as a type size or as a radius; treating the captured 4/8/12/16 cluster as a measured local cluster rather than a complete grid declaration |
| Shape | Reading 0 / 8 / 20 as local harvested geometry for observed controls rather than averaging Home CTA and subscription-row geometries, and not as a universal radius |
| Motion | Treating measured absence as a reason not to promote motion values; requiring the five-kind per-component computed gate before any promotion; official documentation of a single curve or duration is not that gate |
| Font evidence | Sorting evidence classes; Home Pretendard and subscription `nskr` as surface-specific; NotoSansKR filenames as delivery identity rather than a replacement name; no first-party announcement names one family for every LG U+ product; hosted-file delivery is not proprietary typeface ownership; Pretendard SIL OFL 1.1 is not an LG U+ trademark or cross-product font policy; declared-only omitted; no system-face substitution called Pretendard or `nskr` |
| Family | Reading computed visible use as the reason Pretendard is canonical on Home and `nskr` on the subscription detail, and refusing to replace or extend either family |
| Type roles | Keeping YAML unitless `1.5` beside the source's own 24px writings; keeping information-row 21px unconverted; keeping each YAML `use` string beside the hierarchy-table note; Public Home body is not a universal product scale |
| Assets | Treating the Google favicon-proxy catalog pointer as identity metadata rather than a portable first-party mark file |
| Capture record | Declaring Core applicability by control meaning; keeping the two promoted components' measured default geometry and zero-interaction summaries without fabricating interactive states; keeping YAML `use` / font / padding / border / states byte forms beside the §4 writings; preserving the information row as `listItem` rather than button semantics; generic observed `focus` is not a `focus-visible` treatment |
| Layout | Reading spacing repetitions as a measured local cluster rather than a complete grid, and refusing to average Home CTA and subscription-row geometries |
| Layout → Responsive behavior | Reading 1440×900 as the capture viewport rather than a cross-viewport specification |
| Content & Locales | Characterizing **plain** / **reassuring** / **next-step oriented** as implementation guidance rather than an approved copy manual, and reading the Do/Don't table as reconstruction guidance rather than published LG U+ microcopy |
| Content & Locales | Treating English beside a Korean label as a reading aid rather than a replacement, and requiring the three illustrative strings byte-exact |

Evidence-class boundary sentences in the portable body (a different class from the qualifier above, listed separately so the two are not conflated):

- Scope — the two public product captures are the token surfaces; corporate About is context; Simply. U+ 2025 does not create colors, components, states, or motion tokens.
- Scope — the narrative supplies product context and does not by itself supply interface tokens.
- Foundations → Semantic color — `#222222` stays a component field; muted and soft stay subscription-detail scoped.
- Foundations → Motion — no duration, easing, transition, carousel, or motion-reduction value is verified; B3 five-kind gate is stated.
- Content & Locales — the three Korean strings are labelled illustrative, not LG U+ copy; reproduce them byte-exact.

## Proof notes

- verification_v2 schema 2; `conflicts: []`
- `components_harvested: true`
- `tokens.source: reconciled`
- `interactionCount: 0`; only default component observations promoted
- Unobserved hover / disabled / loading / error / success treatments are omitted rather than marked `not-applicable` for missing observation. Applicability follows control meaning: the Home primary CTA is a public Home solid CTA, so loading / error / success stay `applicable` with treatment omitted; the subscription information row is an observed link/row classified as `listItem`, so loading / error / success are `not-applicable` on that destination role. Disabled stays `applicable` on both interactive controls with treatment omitted. State coverage is not claimed complete.
- No focus-visible treatment is asserted anywhere: the source records no `focus-visible` capture. The observed-state name `focus` is not promoted as `focus-visible` (B1).
- Official About, Simply. U+ newsroom, Simple Lab, and Pretendard license pages are narrative or licence sources, not interface-token sources.
- No official LG U+ UI specification was collected. The B2a form used in Experience is the no-published-UI-specification form.
- Raw UI proof path recorded by the source: `artifacts/reference-evidence/lguplus.json`.
