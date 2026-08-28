# HubSpot migration log

Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v12**

Source: `web/references/hubspot/DESIGN.md`
Sibling read (not the migration input): `web/references/hubspot/.verification.md`
Destination: `docs/design-md-weight/migrated/hubspot/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/hubspot/provenance.md`
Date: 2026-08-28
Worker: grok-4.6 T2
Not a catalog-adoption claim. Gate output is recorded below as a run result, not as evidence of semantic adequacy (E2c).

Every destination line below was checked with `grep` against the three output files before it was written (F2). Line numbers are from the files as written in this directory. Counts use `grep -oF … | wc -l` per file, never `grep -c`.

Source SHA-256 `5bf1db5658bb36aebbfae28c74a554df0a4b719866f619727167cc418053d28b` (`web/references/hubspot/DESIGN.md`). Sibling SHA-256 `a93b1ac4cdb326fab8eb5df61f8c3e7157083030b8f8f17adfce740941ce9e54` (`web/references/hubspot/.verification.md`). Worker-close portable DESIGN SHA-256 `8aa3b85d2cd852fd8ae399437b42012179e4c450eb5cfd2bbfc92eacd428ac97`.

Portable Core: `scripts/design-md-core.cjs` `inspectDesignMd` → `level: portable-core`, `portable_core: true`, `reasons: []`, placeholders 0. Run result only.

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (`id`, `name`, `country`, `category`, `homepage`, `primary_color`, `logo`) | 분리 → provenance; `homepage` 옮김 → Experience Scope; `primary_color` 옮김 → Scope + Foundations + components | Portable file has no frontmatter. H1 is `# HubSpot Design System` (`DESIGN.md` 1). Identity table `provenance.md` 7–24. Bare homepage `https://www.hubspot.com` is provenance-only at Identity `provenance.md` 13. DESIGN 9 writes the source-footer form `https://www.hubspot.com/` (trailing slash) as the homepage surface, not the identity homepage landing. `#ff4800` is dual: DESIGN **13** occurrences + `provenance.md` 14/19/28/38/68/88/101 (E2a). `type: simpleicons` / `slug: hubspot` is dual: DESIGN Assets 223 + provenance 15 (E2a). |
| YAML `omd: "0.1"`, `verified`, `tokens.source: reconciled`, `tokens.extracted`, `components_harvested: true` | 분리 → provenance | A1c metadata. Table form `tokens.source` / `reconciled` `provenance.md` 17; colon-form `tokens.source: reconciled` Proof `170` only. Table `components_harvested` / `true` `20`; colon-form `components_harvested: true` `171` only. Table `ds.type` / `system` `23`; colon-form `ds.type: system` `172` only. DESIGN.md 0 for those ledger keys. |
| YAML `ds` (`name: Canvas`, `url`, `type: system`, `description`) | 분리 → provenance · 이름·경계는 옮김 → DESIGN.md | 이중 목적지. `Canvas` DESIGN.md Scope 9 + Assets 222; `ds.type: system` provenance only. Description phrase `Clear, Human, Inbound, Integrated, Collaborative` at `DESIGN.md` 9/23 and `provenance.md` 24/66. `https://canvas.hubspot.com` DESIGN.md 9/23/222 + provenance 22/45/66/76/84 (E2a). 73 is the Surfaces table rule row, not the canvas URL. |
| YAML `tokens.note` (전문) | 분리 → provenance (인용 블록) · 경계는 옮김 → DESIGN.md | 이중 목적지. Note 전문 `provenance.md` 28. Portable Scope restates the live-orange / cream / ink / teal / HubSpot Sans + HubSpot Serif clause at `DESIGN.md` 9. |
| YAML `tokens.colors` 10 keys | 옮김 → Foundations Semantic color | `DESIGN.md` 86–96. Each role keeps its name, hex, and token-set key. Exact keys grepped: `tokens.colors.primary` (role line 86), `primary-tint` 87, `canvas` 88, `warm-parchment` 89, `ink` 91, `graphite` 92, `mist` 93, `deep-teal` 94, `cadet-navy` 95, `on-primary` 90/96. Hexes `#ff4800` `#fcded2` `#fcfcfa` `#f8f5ee` `#ffffff` `#1f1f1f` `#60605f` `#cacac8` `#042729` `#15295a` all ≥1 in DESIGN.md. Pure White / On-Primary “not a second token” slotting qualified at 90 (B2a). |
| YAML `tokens.typography.family` (`sans`, `serif`, `fallback-sans`, `fallback-serif`) | 옮김 → Typography Family | `DESIGN.md` 193–196 with token-set keys. Fallbacks Inter / Source Serif 4 are fallbacks, not the brand face (189/197). |
| YAML `tokens.typography` roles + §3 hierarchy table | 옮김 → Typography Type roles | `DESIGN.md` 205–216. Unitless ratios stay ratios (A1a): `1.19` `1.10` `1.15` `1.42` `1.45` `1.67` `1.56` `1.57` `1.60` `1.00`. Button LG 18px is the §3 row; YAML `tokens.typography.button` is 16 / 500 / 1.00 — not merged (201). All eleven YAML `use` strings verbatim at 205–216. |
| YAML `tokens.spacing` 8 steps | 옮김 → Foundations Spacing · also Layout | 이중 목적지. Keys at `DESIGN.md` 102–109 as `tokens.spacing.xs`: 4 · `sm`: 8 · `md`: 12 · `base`: 16 · `lg`: 24 · `xl`: 32 · `xxl`: 48 · `section`: 64 (backtick-split). Compact `xs: 4` / `sm: 8` / `xl: 32` / `xxl: 48` DESIGN **0**. Compact `md: 12` / `base: 16` / `lg: 24` / `section: 64` appear in the keep-separate prose at 100, not as YAML key spellings. Longer source scale including 40/56/80 at 111 and 514. |
| YAML `tokens.rounded` 4 steps | 옮김 → Foundations Shape | `DESIGN.md` 117–120 as `tokens.rounded.sm`: 4 · `md`: 8 · `lg`: 16 · `tokens.rounded.full`: 9999 (9999px) at 120. Exact `full: 9999` DESIGN **0** (fitpet형 — backtick-split). Bare `9999` 2 / `9999px` 1, both on 120. Compact `sm: 4` / `md: 8` / `lg: 16` appear in the keep-separate prose at 115. YAML card-product 16px and §4 dropdown card 8px kept separate at 122/447/460. |
| YAML `tokens.shadow` (`none`, `hairline`) | 옮김 → Foundations Elevation | `DESIGN.md` 133–135. Token-set `none` and `0 0 0 1px rgba(31,31,31,0.11)` at 133–134. Live §1/§6 form `rgba(0,0,0,0.11)` at 135. Both byte forms kept; not merged. |
| YAML `tokens.components` 9 records + §4 extras | 옮김 → Components & States | `DESIGN.md` 252–507. A1b: `Primitive type: \`button\`` ×7 (255/280/301/324/348/370/393) = YAML 4 + §4 Medium / Outlined Medium / Dark Section. `input` 1 (415). `card` 3 (439/452/465). `badge` 1 (478). `tab` 1 (492). YAML `use` strings at 263/308/332/377/423/446/472/486/496. |
| §1 Visual Theme & Atmosphere | 옮김 → Experience Scope + Distinctive traits | Scope `DESIGN.md` 9–13; traits 34–41. Warm/editorial readings qualified at 11 (B2/B2a). |
| §1 / §11 연혁 (2006, Halligan, Shah, MIT, Inbound, five Hubs, Customer Platform, Academy, Blog, INBOUND) | 옮김 → Experience Scope | `DESIGN.md` 13. Also noted as narrative-not-token at 13 and `provenance.md` 67/93/174. Years/names grepped in DESIGN.md: `2006` 1 · `Brian Halligan` 1 · `Dharmesh Shah` 1 · `MIT` 2 · `Inbound methodology` 3 · `Marketing Hub` 1 · `Sales Hub` 1 · `Service Hub` 1 · `Content Hub` 1 · `Operations Hub` 1 · `HubSpot Customer Platform` 5 · `HubSpot Academy` 2 · `INBOUND` 2. |
| §2 Color Palette & Roles | 옮김 → Foundations Semantic color | `DESIGN.md` 86–96. |
| §3 Typography Rules | 옮김 → Typography & Assets | Evidence classes 183–187; Family 193–197; Type roles 205–216. HubSpot Serif Page Header Human at 11/184/205. |
| §4 Component Stylings | 옮김 → Components & States | `DESIGN.md` 252–507. Product hub YAML 16px/24px at 447 and dropdown-tab §4 8px/12px 24px at 460 kept separate (A4). |
| §5 Layout Principles | 옮김 → Layout & Platforms + Foundations Spacing/Shape | Layout `DESIGN.md` 514–528 (Spacing system 514 · Grid 516–522 · Whitespace 524–528). Spacing keys 102–109. Shape 117–120. 1200px max width at 518 and Large Desktop 537. |
| §6 Depth & Elevation | 옮김 → Foundations Elevation | `DESIGN.md` 127–137. Four-level table at 127–131. `box-shadow: none` at 137. |
| §7 Do's | 옮김 → Experience Application rules | `DESIGN.md` 57–64. Not placed in Governance controlled copy. |
| §7 Don'ts | 옮김 → Experience Avoid | `DESIGN.md` 70–76. Source's own seven Don'ts only. No invented out-of-scope domains. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms | `DESIGN.md` 530–553. Mobile `<640px` · Tablet `640–1024px` · Desktop `1024–1280px` · Large Desktop `>1280px`. Touch 42px/68px/38px/34px at 541–544. Hero 80→48→32 at 548. Domain reading (captured marketing surfaces, not a Canvas layout spec) qualified at 553 (B2a). |
| §9 Agent Prompt Guide | 삭제 | Tool-facing restatement. Values it names are already in Foundations/Components (`#ff4800`, `#fcfcfa`, `#f8f5ee`, `#1f1f1f`, `#60605f`, `#cacac8`, `#042729`, `#fcded2`, 8px/16px/4px). No slot-less delegation. Check itemised at `provenance.md` 133. |
| §10 Voice & Tone | 옮김 → Content & Locales | Voice table `DESIGN.md` 560–568. Voice samples byte-preserved at 572–574: “The HubSpot Customer Platform”, “Get a demo of HubSpot's premium software”, “Get started free with HubSpot's free tools”. Forbidden register at 576. Voice reading qualified at 558 (B2/B2a). |
| §11 Brand Narrative | 옮김 → Experience Scope | `DESIGN.md` 13: 2006, Brian Halligan, Dharmesh Shah, MIT, Inbound methodology (attract, engage, delight), Marketing / Sales / Service / Content / Operations Hub, HubSpot Customer Platform, Canvas, HubSpot Academy, HubSpot Blog, INBOUND. Narrative-not-token classing and dual-identity / philosophy sentences qualified in the same paragraph (B2a). |
| §12 Principles — 5 numbered | 옮김 → Experience Principles | `DESIGN.md` 47–51 under the B2a form at 45, closed with Canvas (rulebook v12 B2a 전제 주석). Canvas quotes “We design for clarity and focus.” and “We foster a sense of joy by humanizing the experience in ways that resonate across cultures.” at 45/48–49. “Grow better” at 51. |
| §13 Personas | 삭제 (무식별) · Audience는 도입 목록 네 그룹만 옮김 → Experience Audience | `DESIGN.md` 28. Observable segment groups are the source intro list only: SMB marketers, growth-stage sales teams, customer success managers, operations leads. Four fictional archetypes dropped; names, ages, cities, biographies, and a fifth group reconstructed from the fourth vignette are not re-hosted (D2, D2a). Disposition at `provenance.md` 132. Identifiers grepped 0 in DESIGN / provenance / this log body except this disposition row's field-kind mention. |
| §14 States | 옮김 → Components Recorded product-surface states + per-component applicability | Full §14 body at `DESIGN.md` 238–250 (A2). Applicability maps on 8 destination/tab/field controls (252–507). Absence is never a `not-applicable` reason (C1). Marketing CTAs (7) and Filter Tab close loading/error/success with destination/tab role reasons (C2). Default Input: loading/success not-applicable (field does not commit); error applicable (433). Cards omit kind+map (C4) at 447/460/473. Peach Tag `Kind: non-interactive` at 479. No complete-coverage claim (C3) at 230. |
| §15 Motion & Easing | 옮김 → Foundations Motion · 무출처 커브 3개 삭제 | Durations 0/120/200/320ms at `DESIGN.md` 145–148. Roles `ease-enter` / `ease-exit` / `ease-standard` at 154–156. Curves omitted (`cubic-bezier` DESIGN 0). Signature motions (pipeline drag, hero fade, email send / Closed Won toast) at 169–171. `prefers-reduced-motion` at 165. B3 is held: `DESIGN.md` 158 names transition properties, animation name, duration, easing, and reduced-motion behavior, plus the per-component computed-observation gate (E2c). |
| Footer **Verified** / Tier 1 / Tier 2 / Conflicts / Refero | 분리 → provenance | Freshness `provenance.md` 31–38. Tier 1 `80–84` · Tier 2 `86–89`. Conflict sentence `38`. Portable Shape/Components keep the source's 8px-tab / 16px-feature split; they do not promote Refero as a second token set. |

## Sibling handling (`web/references/hubspot/.verification.md`)

The sibling exists — confirmed with `find web/references/hubspot -type f`. It is a separate canonical file, not the migration input.

- Full record summarised at `provenance.md` 40–58 and is **not** promoted into `DESIGN.md`.
- Sibling-only strings kept in provenance and measured 0 in DESIGN.md: `About Us` · `rgb(18, 69, 72)` · `#124548` · `Skip-to-content` · `140px` · `3e100552-a8ad-4179-b89a-6aa5113b92e1`.
- Heights 42px / 68px / 38px / 34px that the source §8 already names stay in Layout (`DESIGN.md` 541–544); the sibling's extra 140px product-card height does not.

## A5 / A5a verification

The gate's `copy-loss` needles come from contiguous non-Latin runs. This brand is Latin, so `compared < candidates` is expected and the A5a hand sweep is mandatory.

| Sweep | Extracted | Missing from `DESIGN.md` + `provenance.md` | Published copy among the missing | Handling |
|---|---:|---:|---:|---|
| Quoted strings in the source (same quote regex) | 100 unique | — | — | Most are dates, hex, YAML keys, prompt wrappers. |
| Quoted strings in the sibling | — | — | — | Directory gloss, RGB samples, and “About Us” stay in provenance. |
| Brand-issued needles (CTA, hero, Canvas principles, YAML `use`, §14 copy, family names) | 31 | 0 | 0 | All thirty-one survive in `DESIGN.md` (token note full text also in provenance). |

Needles confirmed present in `DESIGN.md`: The HubSpot Customer Platform; Get a demo of HubSpot's premium software; Get started free with HubSpot's free tools; Grow better; We design for clarity and focus.; We foster a sense of joy…; You haven't added any contacts yet.; Import contacts; Create a contact.; No deals in this pipeline.; Generating your report...; You're all set!; Deal marked as Closed Won.; Manage your pipeline; By Use Case; By Team Size; Why HubSpot?; Learn more about Revenue Hub; and the YAML `use` strings.

A5 분모: hand-sweep published needles 31 / 미생존 0. Gate `copy-loss` compared/candidates recorded below — A5a was mandatory. `verdict: PASS` is not cited as copy-preservation evidence.

## Gate run

`node test-v2/tools/migrate-reference.mjs --brand hubspot --gate-only` → `verdict: PASS`, `problems: []`, `coverage: [{ check: "copy-loss", compared: 0, candidates: 171 }]`. First run after the log existed blocked on `token-loss` `px:9999px`; the source §5 form `9999px` was restored beside YAML `9999` (`DESIGN.md` 120) and the gate was re-run. `inspectDesignMd` reports `portable_core: true`. Neither result is cited as semantic adequacy (E2c).

## Deviations recorded

- Three unsourced easing curves deleted (T1-3 constraint 5 / rulebook §15). Durations and signature motions kept.
- §13 four fictional archetypes deleted without re-hosting identifiers (D2 / D2a).
- §9 tool prompts deleted; values they restated already have Foundations/Components slots.
- Sibling-only nav color, Skip-to-content, and 140px card height not promoted (B1).
- YAML `card-product` 16px and §4 dropdown-tab card 8px kept as two records (A4).
- Marketing CTAs and the filter tab close loading/error/success by destination/tab role (C2). Input opens error only.
- No invented out-of-scope domains (`native application` / `mobile app` / `back-office` DESIGN 0). No defensive “does not say that anything measures 1440px” sentence.

## Auditor (F3)

B2a worker-close 24 → auditor **26** (Pure White/On-Primary slotting `:90` · Layout domain `:553`; Scope `:13` narrative-not-token folded into the existing form). Provenance inventory 24 → **26 = 26**. Destination pointers above were corrected to measured lines/strings; worker-close portable DESIGN SHA-256 `8aa3b85d2cd852fd8ae399437b42012179e4c450eb5cfd2bbfc92eacd428ac97` remains the pre-audit hash. Auditor portable DESIGN SHA-256 recorded in `audit-log.md`.

## Revision 2026-08-28 (wave31 review)

Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v12**. Trigger: semantic review FAIL 1, re-confirmed by the orchestrator. One defect only. Token values, component-table structure, other state rows, B2a complete qualifiers, and the derived-inventory 1:1 were not opened. Source `web/references/hubspot/DESIGN.md` and sibling `.verification.md` were not modified.

`find` confirmed the six files before any count: dest `DESIGN.md` / `provenance.md` / `migration-log.md` / `audit-log.md`, source `DESIGN.md`, sibling `.verification.md`. Counts below are `grep -oF '<needle>' <file> | wc -l`, file by file. A file that exists and prints no match is 0 for that file.

**1. D2 — remove the reconstructed fifth audience group.** Source §13 intro list (`:412`) independently records four groups: SMB marketers, growth-stage sales teams, customer success managers, operations leads. The fourth vignette (`:420`) names `Solutions Partner Program`; the HTML comment (`:478`) names `agency partners`. Portable Audience `:28` had attached a fifth group as 「What the source independently records」 using the fused string `Solutions Partner agencies` (source 0 / sibling 0 / dest was 1). That classification is a persona-derived promotion, not an independent segment list. The fifth group is removed. The four intro-list groups stay. The vignette program name and the comment phrase are not promoted in their place. Identifiers and motives stay unhosted (`Priya Nair` / `Sequences` / `360-degree` dest 0).

| needle | orig | sib | dest after | provenance after |
|---|---:|---:|---:|---:|
| `Solutions Partner agencies` | 0 | 0 | 0 | 0 |
| `Solutions Partner Program` | 1 | 0 | 0 | 0 |
| `agency partners` | 1 | 0 | 0 | 0 |
| `SMB marketers` | 2 | 0 | 1 | 1 |
| `growth-stage sales teams` | 1 | 0 | 1 | 1 |
| `customer success managers` | 1 | 0 | 1 | 1 |
| `operations leads` | 1 | 0 | 1 | 1 |
| `Priya Nair` | 1 | 0 | 0 | 0 |
| `Sequences` | 1 | 0 | 0 | 0 |
| `360-degree` | 1 | 0 | 0 | 0 |

This file names the defect string in this revision section; those mentions are the defect record, not a body fact. Historical `audit-log.md` still names the old fifth group once; that mention is the F3 out-of-scope note, not a body fact. The §13 disposition row above now states the four intro-list groups only. Provenance omission `:132` now states the same four groups and that a fifth reconstructed group is not kept — without writing the fused string.

Line count of `DESIGN.md` stays 614 (in-place clause deletion). Provenance stays 177 (same row). F2 pointers re-checked against the current file: 1 · 9 · 11 · 13 · 19 · 28 · 32 · 45 · 84 · 86 · 90 · 102 · 109 · 117 · 120 · 145 · 158 · 205 · 222 · 223 · 230 · 255 · 280 · 301 · 324 · 348 · 370 · 393 · 415 · 439 · 447 · 452 · 460 · 465 · 473 · 478 · 479 · 492 · 514 · 518 · 530 · 537 · 541 · 553 · 558 · 560 · 572. Provenance 13 · 14 · 19 · 22 · 24 · 28 · 38 · 66 · 67 · 68 · 76 · 84 · 88 · 93 · 101 · 132. B2a `derived editorial implementation inference` dest 26 = provenance inventory 26 data rows. `#ff4800` dest 13 / P 14/19/28/38/68/88/101. gate `PASS` / `problems []`. `inspectDesignMd` `portable_core: true` / `level: portable-core` / `reasons: []`. SHA-256 `f3955b8a86af5a134ca32fd571c48bbbf5fe01fac5182bdc9b87054e8e8bbf06`.
