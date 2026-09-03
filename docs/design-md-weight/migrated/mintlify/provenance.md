# Mintlify provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/mintlify/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | mintlify |
| name | Mintlify |
| country | US |
| category | productivity |
| homepage | `https://mintlify.com` |
| primary_color | `#0d9373` |
| logo.type | simpleicons |
| logo.slug | mintlify |
| omd format (source) | 0.1 |
| verified (YAML) | 2026-05-15 |
| tokens.source | prose-derived |
| tokens.extracted | 2026-06-09 |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here, and a portable scope record in `DESIGN.md` §1. Catalog `primary_color` `#0d9373` is dual: identity here, and Foundations / Scope in `DESIGN.md`, kept unmerged from `tokens.colors.brand` `#18e299` / `#18E299`. The simpleicons slug is dual: identity here, and a portable Assets pointer in `DESIGN.md` §3. There is no `ds.name` / `ds.url` / `ds.type` field in the source frontmatter (A1c: the absence is recorded, not filled).

## Freshness

| Event | Date |
|---|---|
| YAML verified | 2026-05-15 |
| Footer **Verified:** | 2026-05-08 (omd:migrate run 37 — Apple-tier) |
| tokens.extracted | 2026-06-09 |
| sibling verification notes | 2026-05-08 |

Conflicts unresolved: none — as the source footer states.

Style ref recorded by the source footer: `stripe`. That producer string is ledger metadata and is not a portable token.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| home | public-marketing | `https://mintlify.com` / `mintlify.com/` | 2026-05-08 (footer live DOM) |
| pricing | public-marketing | `mintlify.com/pricing` | 2026-05-08 (footer live DOM) |

### Tier 1 (as listed in the source footer)

- mintlify.com home + /pricing (live DOM via playwright — Primary `lab(100 0 0)` White 9999px / 34-40px / 4.5-7×12-24 / 15-16px·500 + Mintlify Near-Black `lab(2.42579 -0.165291 -0.470081)` (`#0a0d10` w/ blue cast) inverse for featured tier; Translucent ghost `lab(100 0 0 / 0.05)`; 60px announcement banner sub-pill. **`lab()` color-space canonical**)

Those footer measurements are dual: ledger here, and portable Components "Live-DOM home + /pricing" plus Scope / Distinctive traits in `DESIGN.md`.

### Tier 2

- styles.refero.design / getdesign.md — no record (source footer). Sibling: `getdesign.md/mintlify` — directory only; `?q=Mintlify` — no record. **Tier 2 status: unavailable.**

### Narrative sources named by the source §11 (not interface tokens)

- https://www.ycombinator.com/companies/mintlify
- https://www.mintlify.com/blog/ycombinator
- https://www.mintlify.com/blog/series-a
- https://techcrunch.com/2024/09/05/mintlify-is-building-a-next-gen-platform-for-writing-software-docs/
- https://tracxn.com/d/companies/mintlify/__4H1JwQrPEEjkuME5kKnugS51A3fazz3eCPVzsiIl9gs

Founder/funding facts those URLs support also land in portable Experience Scope as source-stated narrative. The URLs themselves stay on this ledger.

## Token source (YAML `tokens.source`)

The source frontmatter records `tokens.source: prose-derived` and `tokens.extracted: 2026-06-09`. That producer string is ledger metadata. The portable body names the prose-derived grade in Experience Scope and Font evidence.

## Claim ledger

Claims follow YAML keys from the source. Surface attachment is the reconstructed website unless the footer live-DOM pass is named.

| claim | surface |
|---|---|
| tokens.colors.ink / canvas / brand / brand-light / brand-deep / amber / blue / error | reconstructed website (prose-derived) |
| tokens.colors.gray-700 / gray-500 / gray-400 / border / surface / surface-tint | reconstructed website (prose-derived) |
| tokens.typography.family.sans / family.mono | reconstructed website (prose-derived) |
| tokens.typography.display-hero / section / subheading / card-title / body-lg / body / body-medium / button / link / label / mono-code | reconstructed website (prose-derived) |
| tokens.spacing.xs / sm / md / base / lg / xl / xxl / section | reconstructed website (prose-derived) |
| tokens.rounded.sm / md / lg / full | reconstructed website (prose-derived) |
| tokens.shadow.card / button | reconstructed website (prose-derived) |
| tokens.components.button-primary / button-secondary / button-nav / button-accent / card / card-featured / input | reconstructed website (prose-derived) |
| Footer live-DOM Primary `lab(100 0 0)` / Near-Black `lab(2.42579 -0.165291 -0.470081)` / ghost `lab(100 0 0 / 0.05)` / 60px banner | mintlify.com home + /pricing, 2026-05-08 |

## Sibling handling (`web/references/mintlify/.verification.md`)

The sibling exists — confirmed with `find web/references/mintlify -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Its own record, transcribed here as ledger:

- Pipeline: `spec/verification-pipeline.md` · Skill: `omd:migrate`. Dated 2026-05-08.
- Surfaces: `mintlify.com/` (corporate home — Intelligent Knowledge Platform positioning, dark canvas); `mintlify.com/pricing` (pricing — Free/Pro/Enterprise tiers).
- Header Primary (White Pill on Dark): bg `lab(100 0 0)`; color `lab(2.42579 -0.165291 -0.470081)` (~`#0a0d10`); radius `3.35544e+07px` (≈9999px); padding 4.5×12; 34px / 15px·500; Use: header Primary on home + pricing; copy "Start for free".
- Header Secondary (Translucent White Ghost): bg `lab(100 0 0 / 0.05)`; color `lab(100 0 0)`; radius 9999px; padding 4.5×12; 34px / 15px·500; copy "Contact sales".
- Pricing Page Outline: bg `lab(2.42579 -0.165291 -0.470081 / 0.03)`; color Near-Black; 34px / 15px·500; copy "Contact sales".
- Pricing Hero Primary: bg `lab(100 0 0)`; padding 7×24; 40px / 16px·500; copy "Get started".
- Featured-tier inverse Primary: bg Near-Black; color White; 40px / 16px·500; copy "Try for free".
- Top-level Nav: transparent; color White; radius 9999px; padding 4×12; 32px / 15px·500; labels "Resources / Documentation / Customers / Blog / Pricing".
- NEW Workflows banner: bg `lab(2.42579 -0.165291 -0.470081 / 0.15)`; color `#000`; radius 60px; padding 4×8×4×4; 30px / 16px·400; copy "NEW · Workflows for self-updating docs".
- Tier 2: getdesign directory only; refero no record.

### Sibling-only strings (not promoted into `DESIGN.md`)

These values appear in the sibling and not in the visible source body. They stay on this ledger. They are not portable facts.

- `3.35544e+07px`
- header height `34px` as a single figure (source footer writes the range 34-40px)
- nav height `32px`
- padding `4×12` as a nav-only figure
- `lab(2.42579 -0.165291 -0.470081 / 0.15)`
- `lab(2.42579 -0.165291 -0.470081 / 0.03)`
- banner padding `4×8×4×4`
- banner `30px / 16px·400`
- banner color `#000`
- issued copy: "Start for free"; "Contact sales"; "Resources / Documentation / Customers / Blog / Pricing"; "Try for free"; "Contact us"; "NEW · Workflows for self-updating docs"
- sibling surface gloss "dark canvas" / "Free/Pro/Enterprise tiers" as sibling-only labels

Values the sibling shares with the source footer (corroboration, not new portable facts): `lab(100 0 0)`; `lab(2.42579 -0.165291 -0.470081)`; `#0a0d10`; `lab(100 0 0 / 0.05)`; 9999px; 34-40px range; 4.5-7×12-24; 15-16px·500; 60px announcement banner; `lab()` color-space canonical; pricing-hero 40px/7×24.

Issued sibling copy listed above is brand-issued. It is recorded here so A5a survival is on this ledger, not promoted into the portable body (the source body never writes those strings).

## Token-set key paths (YAML)

| Path | Surface attachment |
|---|---|
| tokens.colors.ink / canvas / brand / brand-light / brand-deep / amber / blue / error / gray-700 / gray-500 / gray-400 / border / surface / surface-tint | reconstructed website |
| tokens.typography.family.sans / family.mono | reconstructed website |
| tokens.typography.display-hero / section / subheading / card-title / body-lg / body / body-medium / button / link / label / mono-code | reconstructed website |
| tokens.spacing.xs / sm / md / base / lg / xl / xxl / section | reconstructed website |
| tokens.rounded.sm / md / lg / full | reconstructed website |
| tokens.shadow.card / button | reconstructed website |
| tokens.components.button-primary / button-secondary / button-nav / button-accent / card / card-featured / input | reconstructed website |

## Omission ledger

Disposition mentions. These rows name the dropped field kind; they do not re-host the dropped content as a fact.

| Item | Disposition |
|---|---|
| §13 페르소나 3인 (이름·나이·도시 포함) | Deleted. The source labels them fictional archetypes informed by Mintlify user segments, not individual people. Not promoted to Audience or primary-tasks, and not re-hosted here as names, ages, cities, motives, or affiliation labels (D2, D2a). Audience restates only the source's own §13 header wording (Mintlify user segments) and Brand Narrative groups. |
| §15 unattributed cubic-bezier as a promoted numeric curve | Omitted from Foundations as a promoted value. The source-stated name "Standard cubic-bezier; no bounce", durations 0ms / 150ms / 250ms, and `prefers-reduced-motion: reduce` stay in portable Motion. B3 five-kind gate stays in DESIGN.md. |
| §9 Agent Prompt Guide — tool-facing prompt sentences | Deleted. Tool-facing copy-paste prompts and iteration restatements. Brand constraints they restated are already in Experience / Foundations / Components. §9-only values that had a receiving slot (pill-badge `4px 12px`; nav `backdrop-filter blur(12px)`; hero subtitle `#666666` at 18px/400; trust-label 13px/500 uppercase 0.65px) were moved to Components / Type roles. |

§9 deletion check (A3). Every value §9 names was confirmed present elsewhere in the portable body before the section was dropped, except the four §9-only writings named above, which land on Navigation / Pill badge / Atmospheric Hero / Trust Bar.

## Derived editorial inventory

Portable `DESIGN.md` carries 26 complete B2a qualifications. This table is 26 data rows. Preamble sentences on this page are not portable qualifications.

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience — Scope ¶1 | Named surfaces; catalog `primary_color` unmerged from `tokens.colors.brand`; prose-derived token grade as metadata rather than a live-computed harvest claim |
| Experience — Scope ¶2 | documentation-as-product / airy / ethereal intelligence; refusal to merge the light-canvas reconstruction with the footer live-DOM pass |
| Experience — Scope ¶3 | Founding-to-funding narrative as context that does not by itself supply interface tokens; last-sentence adoption kept as one unit |
| Experience — Primary tasks | Selecting the three CTA / email-input tasks; they do not come from the persona section |
| Experience — Audience | Dropping fictional archetypes; reading §13-header Mintlify user segments and Brand Narrative groups as the audience |
| Experience — Distinctive traits | Classifying the Key Characteristics list as a restatement and grouping |
| Experience — Principles | Five numbered items as editorial readings; UI implications as the source's own |
| Experience — Application rules | Do list as source-stated rules |
| Experience — Avoid | Don't list as source-stated prohibitions |
| Foundations — Semantic color | Pairings and unmerges (`primary_color` / brand; ink / Gray 900 / `#0a0d10`; canvas / `lab(100 0 0)`; `#e5e5e5` / `rgba(0,0,0,0.05)` / `rgba(0,0,0,0.08)`; surface keys beside "no gray sections"); twoslash uses; micro-softness as §2 writing; Focus Ring `#18E299` is not a `focus-visible` token; §7 dark-mode hexes not YAML color keys |
| Foundations — Spacing | YAML unitless keys unmerged from §5 px writings and from type/radius jobs; 2px / 5px / 6px / 7px / 10px / 96px as §5/§1/§9/§12 writings, not extra YAML keys |
| Foundations — Shape | §5 4px unmerged from YAML rounded; `8` / `16` / `24` / `9999` kept as four keys |
| Foundations — Elevation | Six-level table as the source's elevation record, not a global shadow scale; shadow-philosophy as source editorial reading |
| Foundations — Motion (durations) | Duration table and "Standard cubic-bezier; no bounce" as source-stated; cubic-bezier unattributed |
| Foundations — Motion (B3 gate) | Five-kind per-component promotion gate; refusal of a partial confirmation |
| Typography — Font evidence | Evidence-class table rather than a published type specimen; fallbacks not the brand face |
| Typography — Family | Inter / Geist Mono as named families; fallback stacks as fallbacks |
| Typography — Type roles | Unitless YAML line heights unconverted; YAML `use` verbatim; §3-only rows not invented YAML keys; size steps unmerged from spacing |
| Typography — Type principles | tight-tracking / relaxed-reading / two-font / uppercase-hierarchy / three-weights as source-stated type rules |
| Typography — Assets | simpleicons slug as identity metadata rather than a first-party mark file; §4 Image Treatment writings on Assets rather than as a kinded component |
| Components — Capture record | Every interactive-kind verdict and applicability verdict; omission of kind/map for Featured Card, Logo/Trust Card, Atmospheric Hero, Trust Bar, Feature Cards with Icons, CTA Footer Section, Pill badge, and live-DOM footer records; `Primitive type` only on YAML components; YAML `use` beside longer §4 Use; §9-only Title/Body on Standard Card as type-role copy |
| Components — Atmospheric Hero | elevation-and-intelligence sentence as source-stated register |
| Components — Live-DOM footer | Footer live-DOM pass not YAML `tokens.components.*` keys; does not replace prose-derived button records; Cursor + Lovable pattern sentence as source-footer writing; kind omitted as measurements |
| Layout & Platforms | Breakpoint table as source-stated rather than live-computed harvest; YAML spacing unmerged from §5 extra steps |
| Layout — Whitespace philosophy | documentation-grade-breathing-room / sections-as-chapters / content-density-is-low as source-stated register |
| Content & Locales | Voice table and forbidden-pattern paragraph as source-stated register rather than a published microcopy specification |

## Proof notes

- components_harvested: true
- tokens.source: prose-derived
- Uncaptured hover/disabled/loading/error/success treatments on controls that lack a recorded paint are omitted. They are not `not-applicable` for want of a capture; applicability follows control meaning. Destination / nav roles close loading/error/success with a role reason (C2). State coverage is not claimed complete
- Source never records the token `focus-visible`. Focus Ring stays in Foundations as a color. `focus-visible` rows are applicable with visual treatment omitted (B1)
- Founding/funding URLs are narrative context, not token sources
- `tokens.source: prose-derived` is ledger metadata
- Footer live-DOM and YAML button-primary stay two records
