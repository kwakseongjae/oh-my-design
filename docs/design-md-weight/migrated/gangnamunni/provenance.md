# Gangnamunni provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/gangnamunni/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | gangnamunni |
| name | 강남언니 |
| display_name_kr | Gangnamunni (강남언니) |
| country | KR |
| category | consumer-tech |
| homepage | `https://www.gangnamunni.com` |
| primary_color | `#d54300` |
| logo | type `favicon`, slug `https://www.gangnamunni.com/favicon.ico` |
| verified | 2026-07-13 |
| omd format (source) | 0.1 |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-13 |
| components_harvested | true |

### Design-system record (`ds`)

| Field | Value |
|---|---|
| ds.name | Gangnamunni Blog |
| ds.url | `https://blog.gangnamunni.com/post/welchis/` |
| ds.type | brand |
| ds.description | Official account of Cell for the consumer app and Welchis for the PC back office. |

`ds.type: brand` is kept as a value, not paraphrased away (A1c): it records that the design-system evidence for this reference is a brand-owned blog account rather than a published design-system site. The two system names it carries, `Cell` and `Welchis`, are brand-published names and also stand in the portable body.

**`tokens.note`, quoted verbatim:**

> Only current computed consumer-product values are tokens. Frontmatter primary_color is catalog identity metadata, not a current token.

Both clauses reach the portable body: the first opens Foundations → Semantic color, the second is the sentence that keeps `#d54300` out of the token set. The field name `tokens.note` stays here.

### Dual and multiple destinations (E2a)

Counts below are `grep -oF <string> <file> | wc -l`, taken per file after the final edit. Occurrences inside this ledger's own explanatory prose are mentions of a string, not uses of the value; only the `DESIGN.md` column measures portable-body survival.

- `name` `강남언니` is dual: this ledger + the portable body, where it stands byte-exact in the H1, in Experience → Scope, and in Content & Locales → Terminology. Measured: `DESIGN.md` = **5** (this includes the three occurrences inside `Gangnamunni (강남언니)`), `provenance.md` = 6.
- `display_name_kr` `Gangnamunni (강남언니)` is dual: this ledger + the portable H1, Experience → Scope, and Content & Locales → Terminology, byte-exact in all three. The Latin form never replaces the Korean form. Measured: `DESIGN.md` = **3**, `provenance.md` = 3.
- `primary_color` `#d54300` is **ledger-only**. The portable body carries the constraint that this value is catalog identity metadata rather than a current token, and deliberately not the hex itself. Measured: `DESIGN.md` = **0**, `provenance.md` = 4 (the Identity row plus this bullet's own quotations).
- `homepage` `https://www.gangnamunni.com` is dual: this ledger + Experience → Scope, which names the two read routes `https://www.gangnamunni.com/` and `https://www.gangnamunni.com/events`. Measured on the bare prefix: `DESIGN.md` = **2**, `provenance.md` = 11.
- `logo` slug is ledger-only. The portable Assets subsection records that a favicon logo entry exists and states that its URL stays here. Measured on `favicon`: `DESIGN.md` = **1** (the word, no URL), `provenance.md` = 4.
- `verified` `2026-07-13` is dual: this ledger/Freshness + Experience → Scope, which dates the inspection. Measured: `DESIGN.md` = **1**, `provenance.md` = 18.
- `tokens.source: reconciled`, `tokens.extracted`, `omd: "0.1"`, `country`, `category` are ledger-only. Measured: `reconciled` `DESIGN.md` = **0** / `provenance.md` = 3; `consumer-tech` `DESIGN.md` = **0** / `provenance.md` = 2.
- `components_harvested: true` is ledger-only as a field name (A1c); the portable Capture record states the same fact as prose. Measured: `DESIGN.md` = **0**, `provenance.md` = 4.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-13 |
| verification_v2.checked | 2026-07-13 |
| surfaces inspected | 2026-07-13 |
| sources captured | 2026-07-13 |
| tokens.extracted | 2026-07-13 |

Conflicts unresolved: none. `verification_v2.schema: 2`.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | product | `https://www.gangnamunni.com/` | 2026-07-13 |
| events | product | `https://www.gangnamunni.com/events` | 2026-07-13 |
| welchis-post | documentation | `https://blog.gangnamunni.com/post/welchis/` | 2026-07-13 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| live-home | product-surface | `https://www.gangnamunni.com/` | 2026-07-13 |
| live-events | product-surface | `https://www.gangnamunni.com/events` | 2026-07-13 |
| official-welchis | official-doc | `https://blog.gangnamunni.com/post/welchis/` | 2026-07-13 |
| official-voice | official-doc | `https://blog.gangnamunni.com/post/ui-text-guideline` | 2026-07-13 |
| pretendard-license | license | `https://github.com/orioncactus/pretendard/blob/main/LICENSE` | 2026-07-13 |

## Claim ledger

The source uses five YAML anchors, each a `computed-style` observation captured 2026-07-13:

| Anchor | surface_id | source_id | method | selector |
|---|---|---|---|---|
| `&card` | home | live-home | computed-style | `home::[data-omd-capture=20]` |
| `&cta` | home | live-home | computed-style | `home::[data-omd-capture=3]` |
| `&events` | events | live-events | computed-style | `surface-2::p.typo-label-sm-subtle` |
| `&chip` | home | live-home | computed-style | `home::[data-omd-capture=34]` |
| `&title` | home | live-home | computed-style | `home::h3` |

| claim | anchor |
|---|---|
| `tokens.colors.canvas` | `card` |
| `tokens.colors.foreground` | `cta` |
| `tokens.colors.muted` | `events` |
| `tokens.colors.surface` | `chip` |
| `tokens.colors.border` | `cta` |
| `tokens.typography.family.sans` | `card` |
| `tokens.typography.body.size` | `card` |
| `tokens.typography.body.weight` | `card` |
| `tokens.typography.body.lineHeight` | `card` |
| `tokens.typography.label.size` | `chip` |
| `tokens.typography.label.weight` | `chip` |
| `tokens.typography.label.lineHeight` | `chip` |
| `tokens.typography.title.size` | `title` |
| `tokens.typography.title.weight` | `title` |
| `tokens.typography.title.lineHeight` | `title` |
| `tokens.spacing.sm` | `cta` |
| `tokens.spacing.md` | `cta` |
| `tokens.rounded.cta` | `cta` |
| `tokens.rounded.card` | `card` |
| `tokens.rounded.full` | `chip` |
| `tokens.components.outline-cta.type` | `cta` |
| `tokens.components.outline-cta.fg` | `cta` |
| `tokens.components.outline-cta.border` | `cta` |
| `tokens.components.outline-cta.radius` | `cta` |
| `tokens.components.outline-cta.padding` | `cta` |
| `tokens.components.outline-cta.font` | `cta` |
| `tokens.components.outline-cta.states` | `cta` |
| `tokens.components.outline-cta.use` | `cta` |
| `tokens.components.filter-chip.type` | `chip` |
| `tokens.components.filter-chip.bg` | `chip` |
| `tokens.components.filter-chip.fg` | `chip` |
| `tokens.components.filter-chip.radius` | `chip` |
| `tokens.components.filter-chip.height` | `chip` |
| `tokens.components.filter-chip.padding` | `chip` |
| `tokens.components.filter-chip.font` | `chip` |
| `tokens.components.filter-chip.states` | `chip` |
| `tokens.components.filter-chip.use` | `chip` |

The dotted claim paths and the DOM selectors are UI/collector metadata; they are ledger-only and appear nowhere in the portable body.

Note on the `title` anchor: the source's `claims` map declares `home::h3` as the selector for the three title-role metrics, but the frontmatter token block carries `title: { size: 20, weight: 700, lineHeight: "28px" }` without naming the element in prose. The portable Type roles table therefore records the title role with its metrics and the source's own evidence phrase ("current home observation"), and does not restate `h3` as a structural fact about the page (B1).

## Verbatim source strings kept here

Field strings whose byte form the portable body restates in different words. They are reproduced verbatim so the source form survives (A5 / A1c).

| Source field | Verbatim value |
|---|---|
| `components.outline-cta.states` | `pressed state captured; no changed pressed value retained` |
| `components.outline-cta.use` | `Current small outline CTA on home and events` |
| `components.filter-chip.states` | `selected-false and selected-true DOM variants captured; no interaction expansion` |
| `components.filter-chip.use` | `Current procedure filter chip on home` |
| `components.outline-cta.border` | `1px solid #b5bfc9` — kept as the CSS shorthand byte form, which the portable Outline CTA record also carries contiguously (A1a) |
| §4 Outline CTA — Use | ``Use: `home::[data-omd-capture="3"]`; same fingerprint on home and events.`` |
| §4 Procedure filter — Use | ``Use: `home::[data-omd-capture="34"]`.`` |
| §4 Media card action — Use | ``Use: `home::[data-omd-capture="20"]`; 303px rendered height is context, not a portable token.`` |
| §4 Procedure filter — Selected | `Separate selected-true DOM variant captured with #131517 background and #ffffff text; no interaction expansion.` |

`Current small outline CTA on home and events` and `Current procedure filter chip on home` also reach the portable body byte-exact as the two components' Role lines, so those two carry two destinations (E2a). Measured: each is `DESIGN.md` = **1**, `provenance.md` = 2 (the row above plus this sentence). `1px solid #b5bfc9` is the third dual row, `DESIGN.md` = **1**. The remaining six rows are `DESIGN.md` = **0**; the portable body restates their content in its own words, which is why the byte form is kept here.

## Capture selectors

| Component | Pointer |
|---|---|
| Outline CTA | `home::[data-omd-capture="3"]`; same fingerprint on home and events |
| Procedure filter chip (unselected) | `home::[data-omd-capture="34"]` |
| Home feature-card action | `home::[data-omd-capture="20"]` |
| Events tertiary label | `surface-2::p.typo-label-sm-subtle` |
| Title role | `home::h3` |

## Mid-file footer — transcribed from the source

**Verified:** 2026-07-13 (verification v2; supplied current computed-style bundle plus first-party source review)

**Tier 1 sources:** https://www.gangnamunni.com/ · https://www.gangnamunni.com/events · https://blog.gangnamunni.com/post/welchis/ · https://blog.gangnamunni.com/post/ui-text-guideline

**Tier 2 sources:** https://getdesign.md/gangnamunni direct detail attempt returned an internal fetch error; https://styles.refero.design/?q=gangnamunni and https://styles.refero.design/?q=%EA%B0%95%EB%82%A8%EC%96%B8%EB%8B%88 direct search attempts returned internal fetch errors. No Tier 2 value was imported.

**Surface split:** Home and events are consumer-product surfaces. The Welchis post is documentation context only; its typography and controls are not Cell/product tokens.

**Conflicts unresolved:** none

No importable Tier 2 value was available to conflict with current Tier 1 observations.

## Placeholder omission ledger

The source carries three `[FILL IN]` markers. None is emitted into the portable body; each is recorded here with what the source says around it.

| Source section | Marker | Source sentence around it | Migrated treatment |
|---|---|---|---|
| §13 Personas | `[FILL IN]` | "Add research-backed decision, accessibility, and locale needs only when a user or first-party source supplies them." | Named without a value in Governance → Named gaps. The §13 statement that no named synthetic personas are included, and that first-party sources substantiate only Cell consumer-app users and Welchis back-office users, is in Experience → Audience. |
| §14 States | `[FILL IN]` | "The supplied bundle has `interactionCount: 0` and no current first-party contract for loading, empty, error, success, disabled, or selection behavior beyond the captured DOM variants." | Sentence preserved in Components & States → Source state contract; the marker itself is dropped. |
| §15 Motion & Easing | `[FILL IN]` | "No current first-party motion token, duration, easing curve, or reduced-motion behavior was collected." | Sentence preserved in Foundations → Motion; the marker itself is dropped. |

## Record history carried out of the portable body

The source's §10 closes with a note about this catalog record's own history: *"the earlier legacy claim banning exclamation marks has been removed."* That sentence is about a previous revision of the reference, not about current product behavior, and a standalone reader has no earlier revision to compare against. The rule it protects — that the official UI-text guideline permits restrained emphasis, including an exclamation mark, when it makes value or a completed journey clear — is stated positively in the portable Content & Locales section. The historical clause is recorded here and not in the portable body.

## Sibling verification file (not adopted)

`web/references/gangnamunni/.verification.md` **exists** — confirmed with `find web/references/gangnamunni/ -type f`, not with `ls` or a `*` glob, since a dotfile is invisible to both. **It was not adopted.** No value, count, DOM selector, structural classification, or published string was taken from it into any output that does not independently stand in `web/references/gangnamunni/DESIGN.md`.

Items that exist only in the sibling and are therefore absent from the portable body and from the ledger above, named here so the non-adoption is visible rather than silent:

| Sibling-only item | What it would have asserted |
|---|---|
| `home::[data-omd-capture="33"]` selected-chip selector | A DOM pointer for the selected variant; the source states the variant and its two colors without a selector |
| `surface-2::[data-omd-capture="4"]` outline chip, `#697683` text with a `#b5bfc9` 1px border, 32px, 9999px, `0px 10px` | A fifth component the source never declares |
| `13px/400 · 20px line-height` on the events tertiary label | A type role the source's three-role table does not carry |
| `16px/400 · 24px line-height · 187 occurrences` dominant-cluster count | A frequency figure the source does not state |
| `coverage score 84`, `5 component classes`, `28 component variants`, `two DOM-state labels` | Bundle statistics the source does not state |
| `interactionKinds: 0` | A second collector counter; the source states only `interactionCount: 0` |
| `rgb(...)` forms of every hex | An alternate notation the source does not use |
| "no separate public marketing page was retained" | A marketing evidence domain the source never establishes (D1a) |
| "dialog" in the uncaptured-state list | A state name the source's own list does not contain |
| `artifacts/reference-evidence/gangnamunni.json` raw-bundle path | A pipeline artifact path |
| `https://blog.gangnamunni.com/post/mission-vision-of-designchapter` | The design-chapter URL; the source states the mission and customer-perspective facts in §11 without this URL, and the portable body carries them from §11 |
| Pretendard upstream README URL | A second upstream URL; the source cites only the LICENSE URL |

Structural classifications in the sibling ("the Welchis blog is official documentation chrome", surface-kind wording, element types) were likewise not promoted into portable body facts. The portable body's documentation-context boundary comes from the source's own **Surface split** footer and §1, both transcribed above (B1).

## Proof notes

- `verification_v2` schema 2; `conflicts: []`
- `components_harvested: true`
- `interactionCount: 0` — no interaction expansion; only default component observations plus two captured DOM appearances (the chip's selected-true variant, the CTA's pressed capture with no changed value) are promoted
- Uncaptured hover, focus, disabled, error, toast, and changed-pressed treatments are omitted. They are not `not-applicable` on that ground; applicability follows control meaning. State coverage is not claimed complete.
- The official blog articles (Welchis platform split, design-chapter mission, UI-text guideline) are narrative and voice context. They are not token sources, and the record states that they do not establish a current native-app component catalogue, a current orange component token, a font-distribution notice, named personas, or an interaction/motion contract.
- Pretendard's SIL Open Font License 1.1 describes the upstream font project. It is not a Gangnamunni distribution or license claim.
