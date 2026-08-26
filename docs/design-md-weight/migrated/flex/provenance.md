# flex provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/flex/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | flex |
| name | flex (lowercase, as written in the source frontmatter) |
| country | KR |
| category | saas |
| homepage | https://flex.team |
| primary_color | `#000000` |
| logo | type `favicon`, slug `https://www.google.com/s2/favicons?domain=flex.team&sz=256` |
| verified | 2026-07-13 |
| omd format (source) | 0.1 |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-13 |
| components_harvested | true |
| source bytes / SHA-256 | 17,935 · `1fecece3d54dd3096642015e6b3bf61c4d8bcbbbfac611f7395e596049be2a7e` |

The source carries a `verification_v2` block at schema 2, checked 2026-07-13, with `conflicts: []`. Its per-claim `method` is `live-inspect` on every claim, anchored to two YAML anchors: `&home` = surface `home` / source `home-live` / captured 2026-07-13, and `&about` = surface `about` / source `about-live` / captured 2026-07-13. The block carries no `ds.name` / `ds.url` / `ds.type` / `ds.description` field — `grep -o 'ds\.' web/references/flex/DESIGN.md | wc -l` = 0 — and none is invented here.

The source `DESIGN.md` is not the whole evidence record. A sibling verification file sits beside it in the same directory and **is adopted into this ledger**: `web/references/flex/.verification.md`. Its record is the *Canonical proof* section below. Adoption stops at this ledger: no sibling-only value is promoted to a portable token, and the non-promoted values are listed in full under *Sibling-only values, recorded here and not promoted*.

### Dual and multiple destinations (E2a)

Counted with `grep -oF '<string>' <file> | wc -l` — occurrences, not lines. `<doc>` = `docs/design-md-weight/migrated/flex/DESIGN.md`.

- `name` `flex` is dual: this ledger + the portable H1 `# flex Design System` and Experience → Scope, byte-for-byte lowercase. `grep -oF 'flex Design System' <doc> | wc -l` = 1. The capitalized `Flex` the source uses in modifier position is likewise carried; the two forms are never substituted for each other.
- `homepage` `https://flex.team` is dual: this ledger + portable Scope (as `https://flex.team/`) and Foundations → Evidence-domain boundary (as `flex.team`).
- `primary_color` `#000000` is dual: this ledger + portable Foundations → Semantic color (Black field) and the Announcement Badge text field. `grep -oF '#000000' <doc> | wc -l` = 2.
- `logo` slug is dual: this ledger + portable Typography & Assets → Imagery and assets, which carries the same URL and records it as a third-party favicon proxy rather than a captured first-party mark. No portable Named-gaps row was invented for a first-party logo-file absence.
- `verified` / `verification_v2.checked` / `tokens.extracted` `2026-07-13` is dual: this ledger/Freshness + the portable Scope, Evidence-domain boundary, Capture record, and Brand-published lines, all of which date the inspection.
- `components_harvested: true` is dual: this ledger + *Proof notes* below. The field name does not reach the portable body; the portable Capture record states the same fact as prose.
- The two surface URLs `https://flex.team/` and `https://flex.team/about` are dual: this ledger's *Surfaces* / *Sources* tables + portable Scope. The `/about` short form is also used throughout the portable Components and Layout sections.
- `guide.flex.team` is triple: this ledger + portable Foundations → Evidence-domain boundary, Typography & Assets → Font evidence, and Governance → Named gaps. `grep -oF 'guide.flex.team' <doc> | wc -l` = 4 (one of the four is the full `https://guide.flex.team/en/` in Scope).
- `omd: "0.1"`, `tokens.source: reconciled`, and the `verification_v2` schema/anchor structure stay in this ledger only. `grep -oF 'reconciled' <doc> | wc -l` = 0.

## Canonical proof — sibling verification file

Adopted, not merely noted. Every field in this section is transcribed from the sibling file.

| Field | Value |
|---|---|
| sibling | `web/references/flex/.verification.md` |
| bytes | 8,613 |
| SHA-256 | `ed66c2b73e23625d4d96ce40e72b1e1326082547d0be63bac4913d1e9283a4c4` |
| heading | `# Flex — verification record` |
| checked | 2026-07-13 |
| raw samples | 7 — bullet lines matching `^- ` inside the sibling's `### Raw samples` block, counted with `awk` over that block |

**Method, quoted from the sibling:** "supplied deterministic collector evidence (`artifacts/reference-evidence/flex.json`) plus first-party and Tier 2 web checks. No browser capture was rerun and no MCP was used." The evidence artifact is named there as `artifacts/reference-evidence/flex.json`, captured `2026-07-13T09:19:20.980Z`.

**Bundle shape, from the sibling:** two public surfaces (`home`, `surface-2`/`/about`), 352 sampled elements, 3 component types, 27 component variants, 3 observed static surface variants, coverage score 71, and `interactionCount: 0`. The font aggregation records one loaded high-confidence family with 351 visible uses and Flex-hosted source files.

**Raw samples, quoted from the sibling:**

- `home::span` — `background-color: rgb(255, 77, 0)`; `border-radius: 18px`; `padding: 0px 8px`; `font: 12px / 700`; announcement badge.
- `home::[data-omd-capture="13"]` — `color: rgb(17, 17, 17)`; `background-color: rgb(0, 255, 68)`; `border-radius: 24px`; `padding: 30px 44px`; `font: 17px / 700`; primary CTA.
- `surface-2::[data-omd-capture="8"]` — `color: rgb(17, 17, 17)`; `background-color: rgba(0, 0, 0, 0)`; `border: 1px`; `border-radius: 8px`; `padding: 8px 14px`; `font: 13px / 700`; outline nav action.
- `surface-2::[data-omd-capture="9"]` — `color: rgb(255, 255, 255)`; `background-color: rgb(17, 17, 17)`; `border-radius: 8px`; `padding: 8px 14px`; `font: 13px / 700`; solid nav action.
- `surface-2::h1` — `color: rgb(17, 17, 17)`; `font-size: 96px`; `font-weight: 600`; `line-height: 96px`; light editorial display.
- `surface-2::h1` — `color: rgb(255, 255, 255)`; `font-size: 80px`; `font-weight: 600`; `line-height: 96px`; dark editorial display.
- `surface-2::p` — `color: rgba(17, 17, 17, 0.84)`; `font-size: 17px`; `font-weight: 600`; `line-height: 26.35px`; explanatory copy.

**Font resolution table, from the sibling:** `Pretendard Variable` — 351 visible uses across home and About; `loaded` / high confidence; 92 source URLs under `https://static.flex.team/fonts/pretendard-variable/`; Pretendard's official README/LICENSE documents the family and SIL OFL 1.1; resolution "**Verified live Flex webfont.** Promote as the sole UI family token." Static `Pretendard` — declared fallback, zero observed uses, resolution "**Declared fallback only; no separate UI-family token.**" OS/system fallbacks — "**System fallback chain, not a Flex brand claim.**"

**Component provenance, from the sibling:** the four component rows carry the same selectors and default values the source `DESIGN.md` states, with `State evidence: None` on all four and resolution "Preserve default only." The sibling adds one boundary the source does not state: "The raw bundle includes selector strings ending in `::state-hover` and `::state-pressed` for unlabeled circular utility buttons, while its summary reports `interactionCount: 0` and provides no interaction records. Those samples are not sufficient to establish an interactive component, its role, or a reusable state variant; they are deliberately excluded."

**Reconciliation notes, from the sibling:** the older `#1D1D1F`/`#2D3338` palette, 52px display, manifesto cards, service-filter pills, inset rings, product-flow states, and motion values are unsupported by the 2026 evidence and were removed rather than carried forward as plausible defaults; a Terra draft that described the bundle as lacking font-face/source proof is corrected there; and "No public trust state is claimed here; the deterministic evaluator owns the verification outcome."

### Sibling-only values, recorded here and not promoted

The sibling records the deterministic bundle; the portable contract reconstructs the source `DESIGN.md`. Those are different evidence domains, so a value present only in the sibling is a ledger entry and never a portable token. The values in this class:

- Outline nav action `background-color: rgba(0, 0, 0, 0)` — transparent. The source `DESIGN.md` states that component's `Background: #FFFFFF`. Both are recorded; the portable body carries the source's value, and the sibling's is **not** used to overwrite or to close it, because the two describe different evidence domains. This divergence is listed again under *Freshness* as the one value pair the source footer's `Conflicts unresolved: none` does not cover.
- Bundle counters: 352 sampled elements, 3 component types, 27 component variants, 3 observed static surface variants, coverage score 71, `interactionCount: 0` as a field name.
- The evidence artifact path `artifacts/reference-evidence/flex.json` and its capture timestamp `2026-07-13T09:19:20.980Z`.
- The `::state-hover` and `::state-pressed` selector strings for unlabeled circular utility buttons, and the sibling's exclusion ruling on them.
- The full font-subset path `https://static.flex.team/fonts/pretendard-variable/` (the source names only the host `static.flex.team`) and the Pretendard `SIL OFL 1.1` licence string, which the source's own footer cites as a licence-boundary source without naming the licence.
- The older `#2D3338` palette value and the `52px` display size (the source names only `#1D1D1F` from that older record).
- `rgb()` notation for every measured colour, and the `rgb(0, 0, 0)`-free but `border: 1px`-shortened outline record.
- The Terra draft correction and the "deterministic evaluator owns the verification outcome" statement.

Each returns 0 from a literal grep of the portable body: `grep -oF '352' DESIGN.md | wc -l` = 0, `27 component variants` = 0, `coverage score` = 0, `interactionCount` = 0, `artifacts/reference-evidence` = 0, `state-hover` = 0, `state-pressed` = 0, `pretendard-variable/` = 0, `OFL` = 0, `#2D3338` = 0, `52px` = 0, `rgb(` = 0, `Terra` = 0.

## Freshness

| Event | Date |
|---|---|
| verified (YAML) | 2026-07-13 |
| verification_v2.checked | 2026-07-13 |
| surfaces inspected | 2026-07-13 |
| sources captured | 2026-07-13 |
| tokens.extracted | 2026-07-13 |
| footer **Verified** (mid-file and final) | 2026-07-13 |
| sibling checked | 2026-07-13 |

Every date in the record is 2026-07-13; there is no freshness spread to reconcile.

**Conflicts recorded by the source:** `verification_v2.conflicts: []` and both footers' `Conflicts unresolved: none`.

**Divergence found during migration, outside that declaration.** The outline navigation action's background is `#FFFFFF` in the source `DESIGN.md` §4 and `rgba(0, 0, 0, 0)` in the adopted sibling's raw sample. The source's value is the one the portable body carries; the sibling's is recorded above and is not used to select a side, because it belongs to a different evidence domain.

**Value pairs inside the reconstruction, neither side chosen:** `canvas` `#ffffff` against `on-dark` `#ffffff` — one value, two roles, kept separate (A4); and the navigation type role at 14px/700 for "Global navigation controls" against the two captured navigation *action* components at 13px/700. Both pairs are preserved in the portable body and neither is resolved.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | marketing | https://flex.team/ | 2026-07-13 |
| about | corporate-marketing | https://flex.team/about | 2026-07-13 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://flex.team/ | 2026-07-13 |
| about-live | product-surface | https://flex.team/about | 2026-07-13 |

### Tier 1

- `https://flex.team/` (marketing surface)
- `https://flex.team/about` (corporate/marketing surface)
- `https://guide.flex.team/en/` (documentation-domain classification only)
- `https://github.com/orioncactus/pretendard/blob/main/packages/pretendard/docs/en/README.md` and `https://github.com/orioncactus/pretendard/blob/main/LICENSE` (font availability and licence boundary only)

### Tier 2 (no usable record)

- `https://getdesign.md/flex` — attempted; safe-open failure / no usable record
- `https://styles.refero.design/?q=flex` — attempted; safe-open failure / no usable record
- Web search for both names returned no Flex Team design record

The sibling's Tier 2 table states the same two attempts with the same outcome and adds "No token or component values used."

## Claim ledger

Anchors from the source: `&home` = home / home-live / live-inspect / 2026-07-13; `&about` = about / about-live / live-inspect / 2026-07-13.

| claim | anchor |
|---|---|
| tokens.colors.canvas / ink / on-dark / action-lime / announcement-orange | home |
| tokens.typography.family.ui | home |
| tokens.typography.about-display.size / weight / lineHeight / use | about |
| tokens.typography.about-display-inverse.size / weight / lineHeight / use | about |
| tokens.typography.body-emphasis.size / weight / lineHeight / use | about |
| tokens.typography.navigation.size / weight / lineHeight / use | about |
| tokens.spacing.compact / nav-action-x | about |
| tokens.spacing.cta-y / cta-x | home |
| tokens.rounded.nav | about |
| tokens.rounded.badge / cta | home |
| tokens.components.relationship-story-card.type / bg / border / radius / padding / use | home |

## Capture selectors

| Component | Pointer |
|---|---|
| Global Navigation Action — outline | `surface-2::[data-omd-capture="8"]` |
| Global Navigation Action — solid | `surface-2::[data-omd-capture="9"]` |
| Marketing CTA — lime | `home::[data-omd-capture="13"]`, `surface-2::[data-omd-capture="25"]` |
| Announcement Badge — new | `home::span`, `surface-2::span` |
| Relationship Story Card | claim-anchored to `home`; the source states no `data-omd-capture` pointer for it |

## Source strings quoted verbatim

The record's own published and descriptive strings, kept here byte-for-byte so no portable rewording can silently displace them.

**Opening blockquote, in full:**

> **Relations Driven AX.** (Observed on `flex.team`, 2026-07-13)
>
> Korean HR-data and AI platform reference: a black-and-white information field punctuated by an acid-lime conversion action. The public marketing surface frames AI as an understanding of organizational relationships and context, while the corporate About surface makes that same thesis concrete through very large editorial type and stark light/dark transitions.

**Token and component `use` strings:**

| Record | `use` string |
|---|---|
| `tokens.typography.about-display.use` | About-page relationship statement |
| `tokens.typography.about-display-inverse.use` | Dark About-page statement |
| `tokens.typography.body-emphasis.use` | About-page explanatory copy |
| `tokens.typography.navigation.use` | Global navigation controls |
| `tokens.components.relationship-story-card.use` | Non-interactive relationship-data story item observed on the public home surface |
| Global navigation action — outline | `/about` light global navigation secondary conversion action |
| Global navigation action — solid | `/about` light global navigation primary conversion action |
| Marketing CTA — lime | high-emphasis marketing conversion link on home and `/about` |
| Announcement badge — new | compact “new” label in the public announcement strip |

All nine reach the portable body: the four typography strings as the Type roles `Where` column, the story-card string as its `Role` line verbatim, and the four component strings as their `Role` lines. Counted `grep -oF '<string>' DESIGN.md | wc -l` — occurrences, not lines: `About-page relationship statement` = 2 (Type roles, and Experience → Primary tasks, which names the same object), `Dark About-page statement` = 1, `About-page explanatory copy` = 1, `Global navigation controls` = 1, `Non-interactive relationship-data story item observed on the public home surface` = 1, `light global navigation secondary conversion action` = 1, `light global navigation primary conversion action` = 1, `high-emphasis marketing conversion link on home and` = 1, `label in the public announcement strip` = 1.

**Component variant labels**, carried verbatim into the portable body as a `Variant:` field on each of the four: `Light-surface secondary action`, `Light-surface primary action`, `Primary conversion`, `Default`. `grep -cF 'Variant:' DESIGN.md` = 4.

**Section labels in the source's typography evidence block** — `Live loaded Flex webfont:`, `Declared but unused fallback:`, `Measured public hierarchy:`, `Documentation chrome:` — are restated as evidence-class rows in the portable Font evidence table. Their content is carried; the bolded label form is not, because the table's first column carries the class instead.

**Footers, in full:**

- Mid-file: `**Verified:** 2026-07-13`; `**Tier 1 sources:**` (four URLs, listed under *Sources* above); `**Tier 2 sources:**` (two attempts plus the web-search note); `**Conflicts unresolved:** none`.
- Final: `**Verified:** 2026-07-13`; `**Pipeline:** omd:add-reference UPDATE (3-tier reconcile)`; `**Catalog position:** KR · saas · HR-data/AI platform`.

### Hex letter-case

The source writes the same five colours two ways: lowercase in the YAML token record (`#ffffff`, `#111111`, `#00ff44`, `#ff4d00`) and uppercase in its §3 colour list and §4 component bodies (`#FFFFFF`, `#111111`, `#00FF44`, `#FF4D00`, `#1D1D1F`). The portable body uses the YAML record's lowercase form throughout, and both forms are recorded here so the normalisation is visible rather than silent. No digit is altered.

## Portable derived-editorial scope (E1)

Where the portable body carries the qualification, and what each occurrence covers.

| Portable location | Covers |
|---|---|
| Experience → Scope, final paragraph | The black-and-white/acid-lime characterization, the "high-contrast, editorial marketing system" reading, and the "serious enterprise register" reading |
| Experience → Audience | The three need statements attached to the stakeholder groups |
| Experience → Distinctive traits | All four trait bullets |
| Experience → Principles | All five principles and their UI implications, with the extra product-stance disclaimer on item 1 |
| Experience → Capture-bound application | All five application rules |
| Experience → Avoid | All five boundary rules |
| Foundations → Semantic color | The "high-contrast" grading of the two chrome pairings |
| Typography & Assets → Imagery and assets | The marketing-illustration and story-framing readings |
| Content & Locales → Voice reading | The three voice adjectives and the four Do/Don't rows |

Measured values carry no qualification: the colour roles, the spacing and radius scales, the type metrics and ratios, the component fields, the published strings, the surface URLs, and the dated inspection are recorded values, not readings.

## Deletions

| Item | Reason |
|---|---|
| §9-equivalent tool-facing material | The source carries no agent-prompt section, so nothing of that class existed to delete. `grep -o 'Agent Prompt' web/references/flex/DESIGN.md | wc -l` = 0. |
| Mid-file and final footers: **Verified**, **Tier 1 sources**, **Tier 2 sources**, **Conflicts unresolved**, **Pipeline**, **Catalog position** | Separated to this ledger. The dates and surface URLs inside them are dual-destination and reach the portable body as prose; the grading vocabulary, the pipeline name `omd:add-reference UPDATE (3-tier reconcile)`, and the catalog position string `KR · saas · HR-data/AI platform` are ledger-only. |
| `#1D1D1F` and the sentence naming the older graphite/pill-service-card claims as removed | The hex is recorded here and in *Canonical proof* above; `grep -oF '#1D1D1F' DESIGN.md | wc -l` = 0 and `grep -oiF '#1d1d1f' DESIGN.md | wc -l` = 0. The operative rule survives in the portable body as the first Avoid item, without the pipeline framing. |
| The source's own H1 `# flex — Design Reference` and its opening blockquote wrapper | Replaced by the Core H1 `# flex Design System`. The blockquote's content — `Relations Driven AX`, the `flex.team` / 2026-07-13 observation marker, and the black-and-white/acid-lime characterization — is carried into Experience → Scope, the characterization under its qualification. |

## Source-side gaps inherited, not repaired

- The source assigns no family token to the measured public hierarchy roles, and states so explicitly. The portable Type roles table leaves that column empty rather than filling it with `Pretendard Variable`, and Named gaps records it.
- The source states the Relationship Story Card only in the YAML token record; it has no `##` body entry there. The portable body gives it a component record built from those five fields plus its `use` string, and nothing more.
- The source names no `type:` primitive for the two navigation actions. None is assigned here. `link` on the Marketing CTA and `card` on the Relationship Story Card are the two the source does supply.

## Proof notes

- `verification_v2` schema 2; `conflicts: []`; every claim `method: live-inspect`, captured 2026-07-13.
- `components_harvested: true`; four components in the source body plus one in the token record.
- Interaction coverage is zero in both the source and the adopted sibling; only default observations are promoted.
- Uncaptured hover/pressed/focus/disabled/menu/dialog/form treatments are omitted. They are not `not-applicable` on grounds of absent observation; applicability follows control meaning. State coverage is not claimed complete.
- `focus-visible` appears once in the source, in its accessibility section, as a statement that the collector recorded no such state. No portable state row carries a focus-visible treatment value.
- The two public marketing/corporate pages, the Help Center domain, and any logged-in application surface are separate evidence domains. No observation on one populates another.
