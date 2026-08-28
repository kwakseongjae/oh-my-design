# HP provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, evidence grading, and omission record for the Core v2 migration of `web/references/hp/DESIGN.md`. The canonical source remains that file until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | hp |
| name | HP |
| country | US |
| category | consumer-tech |
| homepage | `https://www.hp.com` |
| primary_color | `#0096D6` |
| logo.type | simpleicons |
| logo.slug | `hp` |
| omd format (source) | 0.1 |
| tokens.source | prose-derived |
| tokens.extracted | 2026-06-09 |
| components_harvested | true |

**Logo decision.** The catalog logo entry is `type: simpleicons`, `slug: hp`. That catalog field is kept here and is not promoted to an HP-hosted brand file in the portable document.

**Token note, quoted from the source HTML comment:**

> live DOM not directly inspected, so token-level UI values (radii, padding, semantic greens/reds, motion) are conventional consumer-tech / e-commerce values consistent with HP's published color + type system and observed hp.com store patterns.

The source §4 footer also writes: "verified via live DOM getComputedStyle". Both statements are ledgered. This file does not choose one over the other.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-06 |
| added | 2026-06-06 |
| tokens.extracted | 2026-06-09 |
| sibling verification notes | 2026-06-06 |

The source footer's producer string: Verified via WebFetch / WebSearch (2026-06-06).

## Sibling verification file (E2)

`web/references/hp/.verification.md` was read and **adopted as evidence grading only**. Confirmed with `find web/references/hp -type f`, because a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input, so nothing in it was used to establish a portable body fact.

**Method, quoted from the sibling:** playwright `getComputedStyle` (live DOM) on the production site. Sources: https://www.hp.com.

### Sibling-only values — held here, not promoted into the portable body

| Value | Sibling record | Why it stays here |
|---|---|---|
| body text `#191919` | live www.hp.com body text | Source body ink is `#212121`. Sibling `#191919` is not chosen over it. |
| heading `#000000`, 34px, weight 400, family `forma-djr-micro` | live www.hp.com heading | Source hierarchy uses Forma DJR UI at 28px / 700 for Heading 1. Sibling sample stays here. |
| primary button `#000000` background, `0px` radius, `43px` height, `16px` / `500` | live www.hp.com primary button | Source Primary CTA is `#0096D6`, 4px radius, 44px min-height, 16px / 600. Sibling sample stays here. |
| link `#3d3d3d` | live www.hp.com link | Source interactive accent is `#0096D6`. Sibling sample stays here. |
| root background `#000000` | live www.hp.com root background | Source canvas is `#ffffff`. Sibling sample stays here. |
| page background `#ffffff` | live www.hp.com page background | Same hex as the source canvas; the sibling measurement is still a sibling record, not a new role. |

These sibling-only strings are named as sibling-only. This file does not assert that they are absent from itself.

## Raw samples (from the sibling)

- live www.hp.com body text: color `#191919`, font 16px, family `-apple-system`
- live www.hp.com page background: color `#ffffff`
- live www.hp.com root background: color `#000000`
- live www.hp.com heading: color `#000000`, font 34px, / 400, family `forma-djr-micro`
- live www.hp.com primary button: color `#ffffff`, background `#000000`, border-radius `0px`, height `43px`, font 16px, / 500
- live www.hp.com link: color `#3d3d3d`

## Evidence class

| Domain | Surface | What it establishes | What it does not establish |
|---|---|---|---|
| Consumer storefront | `https://www.hp.com` | Source-named consumer surface for HP Inc. personal systems and printing | Sibling computed samples as replacements for source-body tokens |
| Official brand type | Brand Central typography; HP Type Guidelines 2.0 | Forma DJR cuts; sentence-case default; black-or-white type | UI radius, padding, semantic greens/reds, motion |
| Brand color | PMS 2925 C / Pantone 2132 records the source cites | HP Blue `#0096D6` since 2012; Electric Blue `#0278AB` in the 2025 refresh | Live computed button fill |
| Official narrative | 1939 garage; 2015 HP Inc. / HPE split; Eight Inc. circle logo | Founding, split, logo authorship, HP Simplified → Forma DJR | Current CSS values |
| Token-set | YAML `tokens.source: prose-derived` | Machine-token keys and values as the source wrote them | A claim that those keys were live-extracted |

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | consumer-storefront | https://www.hp.com | 2026-06-06 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home | product-surface | https://www.hp.com | 2026-06-06 |
| brandcentral-type | brand-asset | https://brandcentral.hp.com/us/en/elements/typography.html | 2026-06-06 |

### Tier 1

- https://www.hp.com

### Tier 2

- brandpalettes.com/hewlett-packard-color-codes — HP Blue `#0096D6` (PMS 2925 C), cited by the source HTML comment
- brandcolorcode.com/hp — same HP Blue citation
- brandcentral.hp.com/us/en/elements/typography.html — Forma DJR, sentence case, black-or-white type
- HP Type Guidelines 2.0 PDF — same type rules
- HP Brand Visual Identity page — 2025 Electric Blue (Pantone 2132)

## Claim ledger

| claim | surface | portable destination |
|---|---|---|
| tokens.colors.primary `#0096d6` | home | DESIGN.md Foundations Semantic color |
| tokens.colors.primary-hover `#0073a8` | home | DESIGN.md Foundations Semantic color |
| tokens.colors.primary-pressed `#005c87` | home | DESIGN.md Foundations Semantic color |
| tokens.colors.primary-light `#e6f4fb` | home | DESIGN.md Foundations Semantic color |
| tokens.colors.electric-blue `#0278ab` | home | DESIGN.md Foundations Semantic color |
| tokens.colors.ink `#212121` | home | DESIGN.md Foundations Semantic color |
| tokens.colors.canvas `#ffffff` | home | DESIGN.md Foundations Semantic color |
| tokens.colors.grey-50 `#f7f7f7` | home | DESIGN.md Foundations Semantic color |
| tokens.colors.grey-100 `#eeeeee` | home | DESIGN.md Foundations Semantic color |
| tokens.colors.border `#e0e0e0` | home | DESIGN.md Foundations Semantic color |
| tokens.colors.border-strong `#cccccc` | home | DESIGN.md Foundations Semantic color |
| tokens.colors.placeholder `#9e9e9e` | home | DESIGN.md Foundations Semantic color |
| tokens.colors.caption `#767676` | home | DESIGN.md Foundations Semantic color |
| tokens.colors.body `#595959` | home | DESIGN.md Foundations Semantic color |
| tokens.colors.emphasis `#404040` | home | DESIGN.md Foundations Semantic color |
| tokens.colors.success `#0c7d2f` | home | DESIGN.md Foundations Semantic color |
| tokens.colors.error `#d32f2f` | home | DESIGN.md Foundations Semantic color |
| tokens.colors.warning `#f5a623` | home | DESIGN.md Foundations Semantic color |
| tokens.typography.family.sans / mono | home | DESIGN.md Typography Family |
| tokens.typography.display-hero / body / button / label | home | DESIGN.md Type roles |
| tokens.spacing.xs / sm / md / base / lg / xl / xxl / section | home | DESIGN.md Foundations Spacing |
| tokens.rounded.sm / md / lg / full | home | DESIGN.md Foundations Shape |
| tokens.shadow.flat | home | DESIGN.md Foundations Elevation |
| tokens.components.button-primary / button-secondary / button-tertiary / button-dark / button-danger | home | DESIGN.md Components & States |
| tokens.components.input-default / input-error / input-search | home | DESIGN.md Components & States |

## Omission ledger

Disposition mentions. These rows name the dropped field kind; they do not re-host the dropped content as a fact.

| Item | Disposition |
|---|---|
| §13 페르소나 3인 (이름·나이·도시 포함) | Deleted. Fictional archetypes. Not promoted to Audience or primary-tasks, and not re-hosted here as names, ages, or cities (D2, D2a). |
| §15 `ease-enter` `cubic-bezier(0.0, 0.0, 0.2, 1)` | Deleted. Unattributed curve. |
| §15 `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` | Deleted. Unattributed, and byte-identical to `spec/omd-v0.1.md` line 267. |
| §15 `ease-standard` `cubic-bezier(0.4, 0.0, 0.2, 1)` | Deleted. Unattributed curve. |
| §9 Agent Prompt Guide — Quick Color Reference, Example Component Prompts, Iteration Guide | Deleted. Tool-facing copy-paste prompts. Values they restated are already in Foundations / Components. |

## Derived editorial inventory

Portable `DESIGN.md` carries 33 complete B2a qualifications. This table is 33 data rows. Preamble sentences on this page are not portable qualifications.

| # | Portable location | Qualified reading |
|---|---|---|
| 1 | Experience Scope ¶1 | hp.com as this contract's surface; keeping both inspect statements; not promoting a sibling sample over the source body |
| 2 | Experience Scope ¶2 | Unmistakable or clean-confident accent; precise but approachable; products-as-the-color restraint; never-compete-with-the-device; humanist warmth; established and current |
| 3 | Experience Scope ¶3 | Founder-myth / heritage-anchors / deliberately-stable / continuity-approachability / device-as-hero thesis; official-history narrative as context that does not supply interface tokens |
| 4 | Experience Scope ¶4 | Refusal/embrace pairing read as a current-surface design instruction |
| 5 | Primary tasks | Selecting the five recorded labels as primary tasks |
| 6 | Audience | Group-level personal-systems and printing audience |
| 7 | Distinctive traits | Grouping the Key Characteristics as the distinctive layer |
| 8 | Principles | The eight numbered items |
| 9 | Application rules | The seven Do rules and the reasons attached |
| 10 | Avoid | The seven Don't rules and the reasons inside them |
| 11 | Foundations Semantic color | Role-to-path pairing; sole interactive accent; Electric Blue as marketing energy; `#212121` as soft near-black |
| 12 | Foundations Spacing | Unitless steps not rewritten as a grid; spacing `base: 16` and `lg: 24` are not radius or type steps |
| 13 | Foundations Shape | `sm: 4` and `md: 4` as two keys; search `8` / `24px` / `9999px` sit on their records; 4px/8px as the source radius rule |
| 14 | Foundations Elevation | Punctual, banding-first depth; `tokens.shadow.flat: none` kept on its own path |
| 15 | Foundations Motion | Unattributed durations, roles, signature motions, and reduced-motion rule |
| 16 | Typography Official product-use | Brand Central as not supplying UI radius, padding, or motion tokens |
| 17 | Typography Declared-only | Fallback stack members are not the brand face |
| 18 | Typography License | License classed as unresolved |
| 19 | Typography Outside these captures | Typography beyond hp.com sits outside this contract |
| 20 | Typography Family | Fallback prohibition |
| 21 | Typography Type roles | Token-set Body `16` / `1.5` and hierarchy Body `14px` / `1.57` kept as two records; unitless ratios stay ratios |
| 22 | Typography rules | Reading the measured metrics as those four principles |
| 23 | Assets photography | First-party catalog content; no invented decoration |
| 24 | Components how-to-read | Kind and applicability verdicts |
| 25 | State record | System-level treatments without per-control observation |
| 26 | State record close | Rows are not attached as visual treatments to every control |
| 27 | Layout whitespace | Hardware-breathe / banded sections / quiet density as layout rules |
| 28 | Layout responsive | Breakpoints stated at system level rather than measured across viewports |
| 29 | Content & Locales | Voice characterization, register reading, and tone table |
| 30 | Content & Locales close | Byte-exact published strings; a gloss may sit beside a line and never replaces it |
| 31 | Typography Live computed | Keeping both inspect statements rather than choosing one |
| 32 | Assets logo catalog | Catalog simpleicons field recorded only as a ledger pointer; not presented as an HP-hosted brand file |
| 33 | Search Input | YAML `8` and body `24px` both kept; neither chosen as a replacement token |

## Proof notes

- verification schema from sibling: Tier 1 live inspect 2026-06-06
- components_harvested: true
- tokens.source: prose-derived
- Uncaptured hover / focus-visible / per-control loading / error / success treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete.
- Official history (1939 / 2015 / 2012 / 2024–2025) is narrative context, not a token source
- HP has Brand Central typography guidelines in this packet and no published first-party UI design system, so every derived-editorial close uses the toss-form "not HP-authored or a separately published UI specification" (rulebook v12 B2a 전제 주석). Brand Central is named as official type guidance, not denied.
