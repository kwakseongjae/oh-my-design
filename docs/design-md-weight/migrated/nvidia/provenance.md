# NVIDIA provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/nvidia/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | nvidia |
| name | NVIDIA |
| country | US |
| category | consumer-tech |
| homepage | `https://www.nvidia.com` |
| primary_color | `#76b900` |
| logo.type | simpleicons |
| logo.slug | nvidia |
| omd format (source) | 0.1 |
| verified (YAML) | 2026-05-15 |
| tokens.source | prose-derived |
| tokens.extracted | 2026-06-09 |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here, and the inspected homepage `https://www.nvidia.com/en-us/` in `DESIGN.md` Scope. Catalog `primary_color` `#76b900` is dual: identity here, and Foundations / Components in `DESIGN.md`. `logo.type: simpleicons` / `slug: nvidia` are dual: identity here, and a portable Assets classification in `DESIGN.md` §3. `components_harvested: true` is a ledger field (A1c). `tokens.source: prose-derived` is a ledger field (A1c).

**Logo decision.** The catalog field is `logo.type: simpleicons` / `logo.slug: nvidia`. That is an identity pointer, not an NVIDIA-hosted file.

## Freshness

| Event | Date |
|---|---|
| YAML `verified` | 2026-05-15 |
| Footer **Verified:** | 2026-05-08 (omd:migrate run 41 — Apple-tier) |
| Philosophy-layer WebFetch | 2026-04-20 |
| tokens.extracted | 2026-06-09 |

YAML `verified: "2026-05-15"` and footer `**Verified:** 2026-05-08` are two writings. They stay unmerged.

Conflicts unresolved: none — as the source footer states.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| home | website | `https://www.nvidia.com/en-us/` | 2026-05-08 (footer live DOM); voice samples 2026-04 |
| h100 | product-page | `https://www.nvidia.com/en-us/data-center/h100/` | 2026-05-08 (footer live DOM) |
| developer | microcopy | `https://developer.nvidia.com/` | 2026-04 (voice samples) |
| about | narrative | `https://www.nvidia.com/en-us/about-nvidia/` | 2026-04 |
| timeline | narrative | `https://www.nvidia.com/en-us/about-nvidia/corporate-timeline/` | 2026-04 |
| accelerated-computing-blog | narrative | `https://blogs.nvidia.com/blog/what-is-accelerated-computing/` | 2026-04 |
| research | narrative | `https://www.nvidia.com/en-us/research/` | 2026-04 |

### Tier 1 (as listed in the source footer)

- `nvidia.com/en-us` home
- `/en-us/data-center/h100/` (live DOM via playwright — NVIDIA Lime Green `#76b900` 0px sharp + Black `#000` text three-tier height (42 utility / 46 newsletter / 49 hero) / 11-13×13-15 / 16-18px·**700** Bold strict)

### Tier 2

- styles.refero.design / getdesign.md — no record (source footer).

Tier 2 data was not used to establish any token or component value.

### Tier 2 (Philosophy/founders/history) — source footer list

Wikipedia (NVIDIA + Jensen Huang), NVIDIA blog (Denny's $T plaque), Quartr Insights, Sequoia Capital (Crucible Moments), TheStreet, NBC News (2025-07-09 $4T), CNBC (2025-10-30 $5T), Bloomberg.

## Sibling verification file (E2)

`web/references/nvidia/.verification.md` exists and was read in full (`find` + read). It is adopted as **evidence grade only**: no value in it was promoted into the portable body that the legacy `DESIGN.md` did not already establish.

- **Inspected:** 2026-05-08
- **Pipeline:** `spec/verification-pipeline.md` · Skill: `omd:migrate`
- **Method (verbatim):** live DOM (playwright getComputedStyle) on `nvidia.com/en-us/` and `nvidia.com/en-us/data-center/h100/`

Sibling-only observations kept here and **not** written into the portable body (the DESIGN.md footer already carries the 42 / 46 / 49 height writing, the 0px sharp writing, the `#76b900` fill writing, and the 11-13×13-15 / 16-18px·700 writing):

- Cookie/A11y primary label pair `계속하기` / `Continue`
- Hero primary labels `Try Now` / `View Datasheet` / `Read Whitepaper`
- Newsletter primary label `Subscribe`
- Use glosses `A11y dismiss / cookie continue`, `hero/page Primary on home + product pages`, `newsletter/footer Primary`
- Sibling-only numerical claim `As of May 2026`: market cap ~`$5.154T`
- Sibling conflict-matrix checkmarks and the sentence that this is “one of the strictest single-system canonical chromes in the entire corpus”
- Padding scales `11×13 (compact) / 13×15 (standard)`; Cookie/A11y `padding 11×13`; hero/newsletter `padding 13×15`
- Corresponding font sizes `(16 / 16 / 18)` listed against the three height tiers

SHA-256 `23213b650ce86406ca0b43f5ea2e89814bf6a3f70acb1749cba2234e79687f78` (`web/references/nvidia/.verification.md`).

## Token note

The source frontmatter has no `tokens.note` field. YAML `tokens.source` is `prose-derived`. YAML `components_harvested: true`.

## Claim ledger

Claims use the source YAML token paths. Surfaces named beside a claim are the source footer captures (home, h100) unless the path is a prose-derived reconstruction with no selector.

| claim | surface |
|---|---|
| tokens.colors.primary | home + h100 (footer) / prose-derived palette |
| tokens.colors.primary-light | prose-derived |
| tokens.colors.ink | prose-derived |
| tokens.colors.canvas | prose-derived |
| tokens.colors.near-black | prose-derived |
| tokens.colors.orange | prose-derived |
| tokens.colors.yellow | prose-derived |
| tokens.colors.yellow-tint | prose-derived |
| tokens.colors.error | prose-derived |
| tokens.colors.error-deep | prose-derived |
| tokens.colors.success | prose-derived |
| tokens.colors.info | prose-derived |
| tokens.colors.purple | prose-derived |
| tokens.colors.purple-tint | prose-derived |
| tokens.colors.fuchsia | prose-derived |
| tokens.colors.gray-300 | prose-derived |
| tokens.colors.gray-400 | prose-derived |
| tokens.colors.gray-500 | prose-derived |
| tokens.colors.gray-border | prose-derived |
| tokens.colors.link-hover | prose-derived |
| tokens.colors.button-hover | prose-derived |
| tokens.colors.button-active | prose-derived |
| tokens.typography.family.sans / mono | prose-derived (`NVIDIA-EMEA`) |
| tokens.typography.display-hero / section / subheading / card-title / body-lg / body / button / button-compact / link / caption / micro | prose-derived |
| tokens.spacing.base / lg | prose-derived |
| tokens.rounded.sm / md / lg / full | prose-derived |
| tokens.shadow.card | prose-derived |
| tokens.components.button-primary / button-secondary / button-compact / card / card-dark | prose-derived |
| footer live-DOM filled lime chrome | home + h100 |

## Proof notes

- YAML `verified` 2026-05-15 and footer **Verified:** 2026-05-08 stay unmerged.
- `components_harvested: true`; `tokens.source: prose-derived`.
- Outline Primary (`transparent`, `2px solid #76b900`, radius 2) and footer filled-lime chrome (`#76b900` fill, 0px, heights 42 / 46 / 49) stay unmerged in the portable body.
- Uncaptured visual treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete.
- B1: the source's Focus treatment on the outline Primary is kept as observed Focus, not as `focus-visible` treatment.
- No published first-party UI specification is named in the source; the B2a example form is used as-is.
- Official About, timeline, blog, and Research pages are narrative sources, not token sources.

## Derived editorial inventory

Portable `DESIGN.md` carries 41 complete B2a qualifications (`derived editorial implementation inference` + `not NVIDIA-authored or a separately published UI specification`). This table is 41 data rows.

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience Scope `:9` | Two footer-named pages as this contract's token surfaces; developer portal as a microcopy source rather than a token-capture surface; About, timeline, blog, and Research as narrative sources that do not automatically supply computed interface tokens |
| Experience Scope `:12` | Characterizations (high-contrast and technology-forward; raw computational power through design restraint; green as a brand fingerprint; not the lush green of nature but the electric lime-shifted green of GPU-rendered light; between chartreuse and kelly green; industrial typographic voice; European, pragmatic, and engineering-focused; screen real estate optimized like GPU memory; green as a signal not a surface; precision engineering hardware rendered in pixels) as source readings, not a published UI specification; hex values, family, fallbacks, metrics, and the shadow string beside them are the source's own |
| Experience Scope `:14` | Footer live-DOM filled chrome and YAML / §4 outline-button writing kept unmerged rather than choosing fill or outline as a replacement |
| Experience Scope `:22` | Founding-and-milestone narrative, the "thread is visible only in retrospect" sentence, the category-claim reading of "accelerated computing," the refuses/embraces pairing, and the closing sentence that accelerated computing is not a performance upgrade but a generational re-architecture, as brand context that does not by itself supply interface tokens |
| Primary tasks `:27` | Selecting the three recorded labels/surfaces as primary tasks; not from a persona section |
| Audience `:36` | Dropping fictional biographies; carrying no name, age, city, motivation, or affiliation classification |
| Distinctive traits `:40` | Classifying the list as a restatement of source Key Characteristics, and the groupings and the readings inside them |
| Principles `:54` | Nine numbered stems plus every UI implication |
| Principles `:66` | Keeping the source comment's "sharp corners as a hardware category signal" evidence-class note adjacent |
| Application rules `:70` | Do list and the reasons attached to them |
| Avoid `:81` | Don't list and the reasons inside them |
| Avoid `:90` | Don't-list filled-green prohibition and footer filled-lime chrome kept unmerged |
| Semantic color `:98` | Role names from the source's labels; pairing each hex to its token-set path; `#000000` as both page background and light-surface text; `#ffffff` as both dark-bg text and light surfaces; `#76b900` outline-accent vs footer fill unmerged; `#1a1a1a` off True Black; Green 500 off brand green; `#666666` off YAML gray keys; §9 footer-link hover writing unmerged from the YAML / §2 link-hover writing |
| Spacing `:150` | YAML unitless `base: 16` / `lg: 24` off the §5 px scale; writings of `16` and `24` on their own records |
| Shape `:168` | `sm` / `md` / `lg` as three keys; `full: 9999` off prose `50%`; Micro `1px` off Standard `2px`; footer `0px` off YAML `2` |
| Elevation `:182` | Minimal utilitarian depth; one 5px ambient shadow; primary depth from color contrast; hardware-like visual layering from material difference; three shadow-string writings kept unmerged |
| Motion duration `:188` | Duration roles as this record states them; no computed transition observation behind the duration table |
| Motion easing `:197` | Easing token names and uses as this record states them; curves omitted while token names and uses remain |
| Motion spring `:205` | Spring-stance rationale; GTC carve-out; "linear-to-standard-ease at most" reading |
| Signature motions `:207` | Four signature-motion descriptions, including fingerprint-behavior, count-up-as-real-number, and single-coordinated-surface readings |
| Motion B3 `:214` | Five-kind promotion gate; refusal of a partial confirmation; a match against an official framework or vendor document is not that gate |
| Font evidence `:222` | Evidence-class sorting; resolution cells |
| Family `:241` | NVIDIA-EMEA as the custom family that carries UI text; YAML `mono` as the same family name rather than an invented monospace face; refusal to present the fallback stack as the brand face |
| Type roles `:245` | YAML numbers kept beside §3 px/rem; YAML `use` verbatim; YAML body `16` off spacing `16`; YAML micro `10` off §3 Micro `11px`; Link and Link Uppercase as two rows; Body Bold / Body Small / Body Small Bold / Button Large / Caption Small as §3-only rows |
| Type-hierarchy readings `:270` | Four hierarchy readings (bold as default voice; tight headings and relaxed body; uppercase navigation; no decorative tracking) |
| Assets `:279` | simpleicons slug as a catalog identity pointer rather than an NVIDIA-hosted brand file |
| Capture record `:296` | Applicability-by-meaning note; interactive-kind and applicability verdicts and the reason for either; omit-kind for two YAML cards; YAML primitive type attached only when recorded; non-YAML components labelled `not in the token set`; outline Primary and footer filled-chrome unmerged; not copying outline Primary hover/active/Focus onto Secondary or Compact; Focus treated as observed Focus rather than `focus-visible` evidence; not a complete state-coverage claim |
| State treatments `:300` | Thirteen-row state contract as composed, uncomputed treatments; Loading (skeleton) and Skeleton unmerged |
| State treatments illustrative marker `:318` | Keeping the source's illustrative class on the CUDA-error and empty-state strings rather than promoting them as verified live copy |
| Primary text `:338` | §9 hero CTA text `#ffffff` and YAML / §4 text `#000000` kept unmerged |
| Links footer-hover `:456` | §9 footer-link hover writing kept unmerged from the YAML / §2 link-hover writing |
| §9-only constructions `:543` | Prompt bodies classified as recorded constructions rather than additional token-set keys |
| Layout packet `:552` | Spacing, grid, whitespace, radius, breakpoints, touch, collapsing, image, type scaling, and dark/light strategy treated as layout for the captured website |
| Layout whitespace `:572` | Purposeful density; section rhythm; catalog-feel card density |
| Layout breakpoints `:590` | Breakpoint table as this record's breakpoint table |
| Layout touch `:599` | Comfortable tap targets as a reading of recorded 11px 13px padding and 14px uppercase |
| Layout dark/light `:632` | "Natural scroll rhythm and content grouping" reading |
| Content voice `:637` | Voice paragraph, including "datasheet with a headline" |
| Content tone table `:651` | Table as this contract's tone map, including register labels (declarative-missional, discovery-framed, CUDA-style, peer-engineer) |
| Content byte-exact `:670` | Byte-exact / no re-casing rule |
| Named gaps `:704` | List as unnamed values rather than as coverage of domains the source never named |

## Omission ledger

Mention (disposition) is not use (re-hosting). This table names what was dropped and where the drop is recorded. It does not re-list fictional demographics, and it does not assert portable-body absence in the same sentence that reprints a dropped string as if it were a surviving token.

| Item | Disposition |
|---|---|
| Source §13 personas — 4 fictional archetypes (name, age, city, motivation, and affiliation classification) | Deleted. The source's own header labels them fictional archetypes informed by publicly described segments. Not promoted to Audience or primary-tasks, and not re-hosted here as names, ages, cities, motivations, or affiliation classifications (D2, D2a). |
| Source §9 Agent Prompt Guide remaining after color/type/component constraints were moved | Deleted as tool-facing prompt. Brand constraints already live in Foundations, Typography, Components, and Layout. §9-only hero subtitle `#a7a7a7` / CTA text `#ffffff`, product-card body 15px `#757575` with title underline, dark-feature section label 14px 700 uppercase `#76b900` with 20px gap, and footer-link hover `#76b900` / legal 12px `#757575` were moved into Components and Content rather than dropped (A3). |
| `ease-standard` `cubic-bezier(0.4, 0.0, 0.2, 1)`, `ease-enter` `cubic-bezier(0.0, 0.0, 0.2, 1)`, `ease-exit` `cubic-bezier(0.4, 0.0, 1.0, 1)` | The three exact curves carry no attribution in the source; they match the legacy authoring template. Token names, durations, uses, signature motions, reduced-motion, and the forbidden spring curve string survive in the portable body; these three curves are dropped rather than promoted. B3 five-kind gate stays in portable Motion. |
| Sibling-only computed values and published strings listed under Sibling verification file | Ledger only |
| Tier 2 getdesign / Refero lookup detail | Ledger only |
