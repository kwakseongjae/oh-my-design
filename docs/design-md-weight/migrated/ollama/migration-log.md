# ollama migration log

Source: `web/references/ollama/DESIGN.md` (unmodified)
Destination: `docs/design-md-weight/migrated/ollama/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/ollama/provenance.md`
Rulebook version: **v12** (`docs/design-md-weight/MIGRATION_RULEBOOK.md`)
Date: 2026-09-02
Worker: grok-4.6 T2

Every row below was checked by grepping the three output files before it was written; the counts are `str.count` / `grep -oF`, not recollection. Bare numbers are DESIGN.md counts; provenance counts are marked `P`.

Source SHA-256: `029e238a16f34740f341018184742a9921af7899b7c8cf3bb13a70666cdfd538`

## Frontmatter

| Legacy | Disposition | Destination / reason |
|---|---|---|
| `id`, `name`, `country`, `category`, `homepage`, `verified`, `omd: "0.1"` | 분리 → provenance | Identity (P 7–20) and Freshness (P 28–35). Portable file has no frontmatter. Name kept as H1 `# Ollama Design System`. `https://ollama.com` DESIGN dest 5 (`:9`×3 catalog/home/pricing, `:22` tasks, `:175` Assets blog URL) / P dest in Identity + Surfaces. |
| `primary_color: "#000000"` | 옮김 → Foundations Ink · 분리 → provenance Identity | `#000000` DESIGN 8 / P 5. Catalog `primary_color` named at Semantic color hedge `:81` and Action charcoal `:84` (not `:83`). Unmerged from Action charcoal `#262626`. |
| `logo.type: simpleicons` / `logo.slug: ollama` | 옮김 → Typography Assets `:173` · 분리 → provenance Identity | `simpleicons` DESIGN 2 / P 2. Presented as an identity pointer, not an Ollama-distributed brand file (Assets B2a `:177`). |
| `verification_v2` schema 2, checked 2026-07-13, surfaces, sources, conflicts `[]`, claims | 분리 → provenance | Surfaces, Sources, Claim ledger, Freshness. `conflicts: []` quoted as "Conflicts unresolved: none" at P 36. |
| `tokens.source: reconciled`, `tokens.extracted: "2026-07-13"` | 분리 → provenance | P Identity 18–19 / Freshness. `reconciled` DESIGN 0 / P 1. |
| `tokens.colors` ink / action / canvas / muted / hairline / outline | 옮김 → Foundations Semantic color (`:83–88`) · 분리 → provenance claim ledger | Hexes with YAML paths. `#000000` DESIGN 8 / P 5; `#262626` DESIGN 6 / P 4; `#ffffff` DESIGN 8 / P 2; `#737373` DESIGN 1 / P 0 (body only; P ledger writes the key path `tokens.colors.muted`); `#e5e7eb` DESIGN 1 / P 0 (body; P ledger `tokens.colors.hairline`); `#d4d4d4` DESIGN 3 / P 3. Same-hex jobs unmerged (`#ffffff` as canvas, charcoal CTA text, and docs-only fills). |
| `tokens.typography.family.sans: ui-sans-serif` / `mono: ui-monospace` | 옮김 → Typography Family (`:146–147`) · 분리 → provenance claim ledger | `ui-sans-serif` DESIGN 16 / P 4; `ui-monospace` DESIGN 5 / P 3. |
| `tokens.typography.body-sm` 14 / 400 / 1.43 / "Observed product text and input" | 옮김 → Type roles table (`:159`) | Unitless `1.43` DESIGN 1 (A1a). YAML `use` DESIGN 1. Kept beside §3 `14px / 400 / 20px`. |
| `tokens.typography.body` 16 / 400 / 1.5 / "Observed product list and body text" | 옮김 → Type roles table (`:160`) | Unitless `1.5` kept as `1.5 / 24px`. YAML `use` DESIGN 1. |
| `tokens.typography.nav` 18 / 400 / 1.56 / "Product navigation and header controls" | 옮김 → Type roles table (`:161`) | Unitless `1.56` DESIGN 1. YAML `use` DESIGN 1. Surface boundary: homepage. |
| `tokens.typography.section` 30 / 500 / 1.2 / "Observed pricing heading" | 옮김 → Type roles table (`:162`) | Unitless `1.2` DESIGN 1. YAML `use` DESIGN 1. Surface: pricing (`surface-2`). |
| `tokens.spacing` xxs 4 / xs 6 / sm 8 / md 12 / lg 16 / xl 24 / 2xl 32 | 옮김 → Foundations Spacing (`:98`) · Layout Spacing system (`:391`) | Named steps DESIGN 1 at `:98`. Both destinations recorded (E2a). Values not merged with type sizes or component padding. |
| `tokens.rounded.full: 9999` | 옮김 → Foundations Shape (`:106`) · Components radii | `9999` DESIGN 12 / P 3. YAML unitless 9999 beside §1/`§5` `9999px`. |
| `tokens.shadow.none: "none"` | 옮김 → Foundations Elevation (`:114`) | `box-shadow: none` DESIGN 3 / P 1. YAML `none` DESIGN (Elevation token line). |
| `tokens.components: {}` | 옮김 → Components Capture record (`:186`) · 분리 → provenance Identity | Empty token set. No `Primitive type` field on any component (A1b: no verified type to preserve). `not in the token set` DESIGN 8. |
| `components_harvested: false` | 분리 → provenance | P 20 and Proof notes. DESIGN 0 / P 3. Not portable metadata. |

## Body sections

| Legacy | Disposition | Destination / reason |
|---|---|---|
| §1 Visual Theme & Atmosphere — product, three surfaces, local-plus-cloud, key characteristics | 옮김 → Experience Scope (`:9–13`), Distinctive traits (`:34–38`) | `through an app, CLI, API, and integrations` DESIGN 1. `Start local. Scale with cloud.` DESIGN 3. `Free, Pro, and Max tiers` via `Free, Pro, Max` DESIGN 1. Documentation chrome recorded separately: Scope `:9`. |
| §1 interpretive framing (deliberately direct, restrained, not an independently named color system) | 옮김 → Experience Scope (`:11`) with adjacent B2a (`:13`) | Kept as derived editorial implementation inference, not as an Ollama statement (B2a). |
| §1 July 2026 company post (easy to run, build with, own, and keep private; larger or parallel workloads) | 옮김 → Experience Scope (`:13`) · Content Voice and tone (`:433`) | `July 2026` DESIGN 5 / P 5. `easy to run, build with, own, and keep private` DESIGN 1. `larger or parallel workloads` DESIGN 1. Dual dest: Scope narrative and the Voice-and-tone B2a (E2a). |
| §2 Color Palette & Roles — six product colors | 옮김 → Foundations Semantic color (`:83–88`) | Role prose kept. Pill-input `#6b7280` stays on that control at `:90` and `:317` and is named in the `:81` hedge (DESIGN 3), not a palette token (A4). |
| §2 Documentation chrome — separate domain | 옮김 → Foundations Documentation chrome (`:92–94`) · Components docs entries | `docs.ollama.com` DESIGN 6. `#6f6f6f` DESIGN 3 / P 1 (`:94` captured use + hedge, docs search control). oklab border DESIGN 3 / P 1. `No gradient token is asserted` DESIGN 1 (exact capital-N string; named-gaps has `a gradient token`, which is not this string). |
| §3 Official product-use / live computed / unresolved SF Pro Rounded / declared-only docs fonts | 옮김 → Typography Font evidence (`:134–141`) and Family (`:146–149`) | `SF Pro Rounded` DESIGN 9 / P 12. `36px/500/40px` DESIGN 1. `48px/600/48px` DESIGN 1. Typeface `Inter` DESIGN 3 (`:140` / `:149` / `:476`); `grep -oF Inter` DESIGN 11 because eight `Interactive` state-table cells also match. `paperMono` / `CMU Typewriter Text` / `Latin Modern` DESIGN 3 each. `system-ui` DESIGN 3. `FontFaceSet` DESIGN 1 / P 3. `Apple describes SF Pro` DESIGN 1. |
| §3 Typography application table | 옮김 → Type roles (`:157–165`) | Keep-both YAML unitless line-heights and §3 px (wave 37). Command UI `14px / 400 / 22.75px` DESIGN 1 / P 1 (E2a); `22.75px` DESIGN 2 (table cell + hedge). Unmerged from body-sm 20px. |
| §4 intro (zero interaction snapshots; selector/surface/default provenance) | 옮김 → Components Capture record (`:184`) | `zero interaction snapshots` DESIGN 1. Capture selectors DESIGN + P Capture selectors table (E2a). |
| §4 Sign-in ghost | 옮김 → Components (`:192`) | `rgba(0, 0, 0, 0.05)` DESIGN 1. `home::[data-omd-capture="5"]` DESIGN 1 / P 1. No Primitive type. |
| §4 Download charcoal CTA | 옮김 → Components (`:216`) | `#262626` / `#ffffff` / `6px 16px` / `18px / 400`. `home::[data-omd-capture="6"]` DESIGN 1 / P 1. |
| §4 Hero charcoal CTA | 옮김 → Components (`:240`) | `12px 32px` / `18px / 500` unmerged from header `6px 16px` / `18px / 400`. `home::[data-omd-capture="10"]` DESIGN 1 / P 1. |
| §4 Pricing outlined CTA | 옮김 → Components (`:264`) | `1px solid #d4d4d4` / `8px 24px` / `14px / 500`. `home::[data-omd-capture="12"]` DESIGN 1 / P 1. Unmerged from Pricing white CTA. |
| §4 Pricing white CTA | 옮김 → Components (`:289`) | Same padding/font as outlined, no border. `home::[data-omd-capture="13"]` DESIGN 1 / P 1. |
| §4 Pill input | 옮김 → Components (`:313`) | `0px solid #6b7280` / `10px 12px` / `14px / 400`. `home::[data-omd-capture="4"]` DESIGN 1 / P 1. Also observed on pricing. |
| §4 Docs search control | 옮김 → Components (`:337`) | `#6f6f6f` / `12px` / `0px 12px 0px 14px`. `surface-3::[data-omd-capture="5"]` DESIGN 1 / P 1. Docs-only. |
| §4 Docs link card | 옮김 → Components (`:362`) | oklab border / `16px` / `16px / 400`. `surface-3::[data-omd-capture="34"]` DESIGN 1 / P 1. Docs-only. |
| §5 Spacing system | 옮김 → Foundations Spacing (`:98–100`) · Layout (`:391`) | Observed cluster 4, 6, 8, 12, 16, 24, 32px; not a published Ollama spacing scale. Padding strings `6px 16px` / `12px 32px` / `10px 12px`. Both destinations (E2a). |
| §5 Product composition | 옮김 → Layout Product composition (`:395–398`) · Experience Scope / Primary tasks | `Models, Docs, Pricing, Sign in, and Download` DESIGN 1. `cloud proposition follows the local starting point instead of displacing it` DESIGN 1. `Free, Pro, Max, and an announced Team tier` via those labels. |
| §5 Radius boundary | 옮김 → Foundations Shape (`:108`) · Layout (`:402`) | `9999px` product; 12px and 16px confined to documentation chrome. |
| §6 Depth & Elevation | 옮김 → Foundations Elevation (`:114–118`) | `box-shadow: none` DESIGN 3. Universal-rule refusal kept. `transparent ring values` DESIGN 1. `not an elevated product-card token` DESIGN 1. |
| §7 Do's (5) | 옮김 → Experience Application rules (`:57–61`) | Not folded into controlled Governance copy. |
| §7 Don'ts (5) | 옮김 → Experience Avoid (`:67–71`) | Includes `SF Pro Rounded` substitution ban, docs-font promotion ban, 12px/16px generalization ban, interaction-visual ban, published-scale invention ban. |
| §8 Responsive Behavior | 옮김 → Layout Responsive behavior (`:406`) | `1440×900` DESIGN 3 / P 1 as capture size, not a breakpoint. `mobile breakpoints, collapsed navigation, touch targets, or responsive asset behavior` DESIGN 1. `intentionally absent rather than extrapolated` DESIGN 1. |
| §9 Agent Prompt Guide | 삭제 | Tool-facing prompt wrappers. Unique constraints already live in Experience / Foundations / Components / Typography (white canvas, `#000000`, `#262626` full-pill, system sans, local workflow, do not claim SF Pro Rounded, do not import docs cards or declared docs fonts). No slot-less delegation. |
| §10 Voice & Tone prose + Do/Don't table | 옮김 → Content Voice and tone (`:425–431`) | Table rows byte-exact. Register reading qualified at `:433` (B2a). |
| §10 Verified voice samples | 옮김 → Content Voice samples (`:417–419`) | Byte-exact (A5): `The easiest way to build with open models` DESIGN 1 / P 0; `Start local. Scale with cloud.` DESIGN 3 / P 1; `Your model. Your machine. Your data.` DESIGN 1 / P 0. `Get started` DESIGN 2 / P 0; `Download` DESIGN 6 / P 3. |
| §11 Brand Narrative — full paragraph including last sentence | 옮김 → Experience Scope (`:13`) | `Jeff and Michael` DESIGN 2 / P 1. `Kitematic` DESIGN 2 / P 2. `Docker Desktop` DESIGN 2 / P 2. `ownership, affordability, and privacy` DESIGN 1. `when local hardware is not enough` DESIGN 1. `download the software, run a model, connect an integration, or use the API` DESIGN 1. Last sentence `quiet, command-led public surface` DESIGN 2 / `primary mental model` DESIGN 1. `July 2026` DESIGN 5 / P 5 (Scope, Voice-and-tone hedge, provenance narrative/omission/proof). |
| §12 Principles (4 + UI implications) | 옮김 → Experience Principles (`:44–51`) | Qualified at `:42` with the full evidence-class limitation. |
| §13 Personas (3 product-surface archetypes) | 삭제 | Fictional / inferred archetypes (D2 / D2a). Not promoted as individuals. Archetype labels recorded as copy-loss disposition (not identifiers): `Local-model developer`, `Integration builder`, `Cloud-scale team member`. Motivations and affiliation classification are not re-hosted. Portable Audience uses only source wording `developers should be able to run` / `on their own machine` (SRC 1 / DESIGN 2 each). Mention of those labels in this row and in provenance Omission is disposition, not use. |
| §14 States | 옮김 → Components Capture record (`:184`) + per-component applicability tables | Body preserved (A2): `interactionCount: 0` DESIGN 2 / P 3; no observed hover, focus, pressed, disabled, error, dialog, toast, or tab state; future capture needs selector, surface, raw computed value, and interaction provenance. Graph 위임 없음. Applicability by role meaning (C1/C2); absence of capture is not a `not-applicable` reason. This is not a complete state-coverage claim (`:188`). |
| §15 Motion & Easing | 옮김 → Foundations Motion (`:122–124`) | `color-transition utilities` DESIGN 1. `No duration, easing, or motion token is asserted` DESIGN 1 (capital-N exact at `:122`; `:124` restates the same constraint in lowercase and is not a second hit of this string). No unattributed cubic-bezier to delete. |
| §15 promotion condition | 신설 근거 규칙 → Foundations Motion (`:124`) | B3 is written out in full at `:124`, verified by reading the line: transition properties, animation name, duration, easing, and reduced-motion behavior, plus the per-component computed-observation gate and "Official documentation of a single curve or duration is not that gate." This row claims only what line 124 actually contains (E2c). |
| Footer **Verified** / Tier 1 / Tier 2 / Conflicts | 분리 → provenance | Freshness and Sources. Source footer sentence on SF Pro Rounded vs Tier 2 conflict quoted at P 38. |

## Sibling files (E2)

`ls -a` / `find web/references/ollama -name '.verification.md'`: sibling exists.

| Field | Value |
|---|---|
| path | `web/references/ollama/.verification.md` |
| SHA-256 | `83a61fd4f88259b94154e32d3e84fd2ed8d622e76edcfdf1bdb2dbc90d6ba5c8` |

Adopted into provenance § Canonical proof. Nothing from the sibling was promoted into the portable body as a token. Sibling-only values (`letterSpacing: -1.2px`, docs card `lineHeight: 28px`, input `backgroundColor: rgba(0, 0, 0, 0)`, collector score 71 / componentTypes 4 / componentVariants 23, font-use counts, declared-source host counts, getdesign “Terminal-first, monochrome simplicity.”, Refero internal-error wording, MIT license) stay in the provenance sibling-only table. Portable-body counts: `-1.2px` 0, `28px` as docs-card line-height 0, `score: 71` 0, `Terminal-first` 0.

## State applicability decisions (C2)

Judged by role meaning, not by primitive name and not by capture completeness. YAML `tokens.components` is empty, so no `Primitive type` is attached.

| Component | loading / error / success | Reason class |
|---|---|---|
| Sign-in ghost | not-applicable | Homepage header link; destination navigation, no committing operation |
| Download charcoal CTA | applicable | Header Download CTA; a download can pend, fail, and complete |
| Hero charcoal CTA | applicable | Homepage hero action; commits a start step that can pend, fail, and confirm |
| Pricing outlined CTA, Pricing white CTA | not-applicable | Homepage pricing action that takes the reader to a pricing path; the control itself commits no operation |
| Pill input | applicable | Product input / form field; a submitted value can pend, fail, and confirm |
| Docs search control | loading / error applicable; success not-applicable | Search can pend or fail; completing a search presents results elsewhere |
| Docs link card | not-applicable | Docs destination link; the card itself commits no operation |

Counted in DESIGN.md: `not-applicable` 14 as word total (12 table cells + Capture-record prose mentions). Absence of an observation is not a `not-applicable` reason. This is not a complete state-coverage claim.

## A5 / A5a

Gate `copy-loss` needles are contiguous non-Latin runs of length ≥4 inside quotations. This source is Latin-only, so `compared` will be far below `candidates` and A5a hand sweep is mandatory.

Hand sweep of brand-issued or source-quoted published strings (CTAs, slogans, entry-point labels, voice samples):

| String | DESIGN | P | Disposition |
|---|---:|---:|---|
| `Start local. Scale with cloud.` | 3 | 1 | kept |
| `The easiest way to build with open models` | 1 | 0 | kept |
| `Your model. Your machine. Your data.` | 1 | 0 | kept |
| `Get started` | 2 | 0 | kept |
| `Download` | 6 | 3 | kept |
| `Models, Docs, Pricing, Sign in, and Download` | 1 | 0 | kept |
| `Sign in` | 1 | 0 | kept (inside the entry-point list) |
| `Free, Pro, Max` | 1 | 0 | kept |
| `announced Team` | 2 | 0 | kept |

Denominator for the A5a claim: the 9 published/quoted rows above, 0 unaccounted losses. `verdict` here is “those needles survived”, not “every quotation in the file is copy”. Editorial glosses (`deliberately direct`, `command-led`) are B2a-qualified characterizations, not A5 needles.

Sibling-only published string `Terminal-first, monochrome simplicity.` is recorded in provenance and not promoted (DESIGN 0).

## B2a

Portable body: `derived editorial implementation inference` **23** · `not Ollama-authored or a separately published UI specification` **23** (`grep -oF`, not line hits). No published first-party UI specification; the example form is used as-is. Provenance derived inventory is 23 data rows (P 169–191), 1:1 with the body. Heading P 165 is exactly `## Derived editorial inventory`. Header `| Location in DESIGN.md | Qualified reading |`.

Pass 1 (F1) re-read the finished body. Causal/interpretive sentences outside Principles (Scope surface split `:9`, Scope atmosphere + §11 last sentence `:13`, primary-task selection `:19`, Audience drop `:28`, Distinctive traits grouping `:32`, Application rules `:55`, Avoid `:65`, color role pairing `:81`, Documentation chrome `:94`, Spacing unmerge `:102`, Shape `:110`, Elevation `:118`, Motion five-kind gate `:124`, Font evidence sorting `:132`, Family promotion `:151`, Type-role unmerge `:167`, Assets pointer `:177`, Capture/applicability `:190`, Layout composition `:408`, Voice-sample grouping `:415`, Voice register `:433`, Named gaps listing `:467`) each have an adjacent full-form bound. “Native application / authenticated / mobile app is out of scope” sentences were not written (D1). Over-defense of the form “does not say that anything measures 1440px” was not written; `1440×900` is recorded as the source’s capture size.

## D1 / D2

- `native application` DESIGN 0 / P 0. `native app` 0 / 0. `authenticated` 0 / 0. `mobile app` 0 / 0. `back-office` 0 / 0. `product application` 0 / 0.
- Personas: three inferred archetypes deleted; drop is unidentifying for names/ages/cities (D2a). Source §13 only. Archetype labels are named in the §13 deletion row and in provenance Omission as copy-loss disposition (wave 41), not as identifiers. Audience grep: `developers should be able to run` SRC 1 / DESIGN 2; `on their own machine` SRC 1 / DESIGN 2. Those labels are mention-in-ledger, not portable-body use.

## Checks run

- `evaluatePortableCore` on the migrated `DESIGN.md` → `structurally_valid: true`, `portable_core: true`, `level: portable-core`, `reasons: []`
- `node test-v2/tools/migrate-reference.mjs --brand ollama --gate-only` → **PASS**, `problems: []`, copy-loss `compared` 0 / `candidates` 110

The gate is not evidence of semantic conformance. `compared` 0 < `candidates` 110 is the A5a trigger; the hand sweep above is the A5 check.

## Hashes

| File | SHA-256 |
|---|---|
| `web/references/ollama/DESIGN.md` (source, unmodified) | `029e238a16f34740f341018184742a9921af7899b7c8cf3bb13a70666cdfd538` |
| `web/references/ollama/.verification.md` (sibling, unmodified) | `83a61fd4f88259b94154e32d3e84fd2ed8d622e76edcfdf1bdb2dbc90d6ba5c8` |
| `docs/design-md-weight/migrated/ollama/DESIGN.md` | `ff1bb196e72fd07c3e5361fed7d136e8c936a2f56381b8ad973a1622a7db539e` |
| `docs/design-md-weight/migrated/ollama/provenance.md` | `1b70febd257485af0ca70b4c48a06357d5173ec5c42ba307343de47d70148983` |

## 고유 표현 대조

뽑은 110 / 0이었다가 복원한 0. First-pass DESIGN.md already carried the §11 last sentence (`quiet, command-led public surface` / `primary mental model`), July 2026 / Jeff and Michael / Kitematic / Docker Desktop, YAML `use` strings, unitless line-heights `1.43` / `1.5` / `1.56` / `1.2` beside §3 px, command UI `22.75px`, unresolved `SF Pro Rounded` 36px/500/40px and 48px/600/48px, declared docs faces, `#6b7280` / `#6f6f6f` / oklab, `1440×900`, `interactionCount: 0`, and the five homepage entry points. Post-write `grep -oF` counts on DESIGN.md are ≥1 for every string in that 110-item set except sibling-only `Terminal-first, monochrome simplicity.` (provenance, not promoted) and persona archetype labels (deleted from the portable body; named only in the §13 deletion row and provenance Omission as copy-loss disposition).
