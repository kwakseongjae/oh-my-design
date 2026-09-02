# Lunit migration log

Source: `web/references/lunit/DESIGN.md` (unmodified)
Destination: `docs/design-md-weight/migrated/lunit/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/lunit/provenance.md`
Rulebook version: **v12** (`docs/design-md-weight/MIGRATION_RULEBOOK.md`)
Date: 2026-08-29
Worker: grok-4.6 T2

Every row below was checked by grepping the three output files before it was written; the counts are `str.count` / `grep -oF`, not recollection. Bare numbers are DESIGN.md counts; provenance counts are marked `P`.

Source SHA-256: `5e7330f060de236887fb899b0c4ef849204bc8b6137e47014a9a0d4c199d563c`

The source is an atypical 16-section prose-derived reference, not the OmD 0.1 15-section skeleton. Mapping is by meaning, not by heading number.

## Frontmatter

| Legacy | Disposition | Destination / reason |
|---|---|---|
| `id`, `country`, `category`, `homepage`, `verified`, `omd: "0.1"` | 분리 → provenance | Identity (P 8–20) and Freshness (P 28–33). Portable file has no frontmatter. `https://www.lunit.io` DESIGN dest 1 (Scope `:9`, trailing slash) / P dest 7. |
| `name: Lunit` | 옮김 → DESIGN.md H1 · 분리 → provenance | H1 `# Lunit Design System` (line 1). `Lunit` DESIGN 42 / P 16. |
| `Lunit (루닛)` in §1 | 옮김 → Experience Scope + Content · 분리 → provenance Identity `name_ko` | Byte-exact `루닛` DESIGN 4 / P 2 (A5). Latin name sits beside it, does not replace it. |
| `primary_color: "#1032cf"` | 옮김 → Foundations · 분리 → provenance | Signature blue. `#1032cf` DESIGN 12 / P 3. |
| `logo.type: favicon` / `logo.slug` | 옮김 → Typography & Assets · 분리 → provenance | Catalog pointer at DESIGN Assets (line 187). Exact `logo.type: favicon` DESIGN dest 1 / P dest 0 (Identity table writes `type: favicon`, a different string). Word `favicon` DESIGN 5 / P 4. Favicon-proxy URL dual dest DESIGN Assets + P Identity. Third-party favicon-proxy, not a Lunit-hosted file. |
| `tokens.source: prose-derived`, `tokens.extracted: 2026-06-09` | 분리 → provenance Identity / Freshness; **meaning** 옮김 → Scope (line 11) | YAML key stays in the ledger (`prose-derived` DESIGN 0 / P 4). Body states in plain language that the machine-readable set is dated 2026-06-09 and was drawn from the record's own prose after the 2026-05-14 inspection (E1). |
| `components_harvested: true` | 분리 → provenance | P 20 (A1c). DESIGN 0 / P 1. |
| `tokens.colors` (8 hex keys) | 옮김 → Foundations Semantic color · 분리 → provenance claim ledger | `hero-ink` `#151515` DESIGN 6 / P 1; `body-ink` `#232f32` DESIGN 10 / P 2; `signature-blue` `#1032cf` DESIGN 12 / P 3; `bright-blue` `#2a4eef` DESIGN 7 / P 3; `canvas` `#ffffff` DESIGN 11 / P 8; `dark` `#000000` DESIGN 8 / P 4; `footer` `#eff0f4` DESIGN 8 / P 1; `on-dark` `#ffffff` kept as a second key. Same-hex keys not merged. Blue band Text is a third writing of `#ffffff` (label on signature-blue). |
| `tokens.typography.family.sans: Lexend` / `family.mono: Lexend` | 옮김 → Typography Family (lines 159–160) · 분리 → provenance claim ledger | Both keys kept. ClashGrotesk display stack from §3 sits beside them; neither writing is selected. `Lexend` DESIGN 38 / P 13. `ClashGrotesk` DESIGN 22 / P 6. |
| `tokens.typography.*` role metrics | 옮김 → Type roles table (lines 172–179) | Unitless YAML sizes/line-heights kept as ratios (A1a): `1.08` DESIGN 3 / P 3; `1.10` DESIGN 1 / P 1; `1.40` DESIGN 3 / P 3. YAML `78` / `52` / `18` / `13` kept beside §3 `78px` / `~48–56px` / `18.4px` / `13.2px`. `52px` DESIGN 0 (not invented). YAML `use` strings verbatim, dual dest: `Hero H1, ClashGrotesk` DESIGN 1 / P 1, and the five sibling use strings each DESIGN ≥1 / P 1. |
| `tokens.spacing` (8 unitless steps) | 옮김 → Foundations Spacing (line 96) · Layout (line 335) | `xs: 4` DESIGN 1; `sm: 8` DESIGN 2; `md: 12` DESIGN 1; `base: 16` DESIGN 1; `lg: 24` DESIGN 2; `xl: 32` DESIGN 1; `xxl: 48` DESIGN 1; `section: 64` DESIGN 1. Not rewritten as px. `24px` DESIGN 0 / P 2 (proof-only padding). |
| `tokens.rounded` `sm/md/lg: 4` · `full: 9999` | 옮김 → Foundations Shape (lines 104–115) · Governance Recorded conflicts (line 386) | Three keys sharing `4` kept as three keys. `full: 9999` DESIGN 3. `9999` DESIGN 8 / P 3. Not merged with prose `0px` / `100px` / `3.75px`. `0px` DESIGN 23 / P 5. `100px` DESIGN 9 / P 2. `3.75px` DESIGN 2 / P 3. |
| `tokens.shadow.none: "none"` | 옮김 → Foundations Elevation (line 119) | `box-shadow` DESIGN 5. |
| `tokens.components.cta-pill` `type: button` | 옮김 → Components Primary CTA (lines 207–230) | `Primitive type: \`button\`` DESIGN 1 (A1b). Use string dual dest DESIGN 1 / P 1. Radius YAML `9999` beside §9 `100px`. |
| `tokens.components.surface` `type: card` | 옮김 → Components Surface (lines 294–302) | `Primitive type: \`card\`` DESIGN 1. Kind/map omitted (C4). Use string DESIGN 1 / P 1. |
| `tokens.components.blue-band` `type: badge` | 옮김 → Components Blue band (lines 304–312) | `Primitive type: \`badge\`` DESIGN 1. Kind/map omitted (C4). Use string DESIGN 1 / P 1. |

## Body sections (source heading numbers)

| Legacy | Disposition | Destination / reason |
|---|---|---|
| §1 Visual Theme & Atmosphere — identity, captured values, audience sentence | 옮김 → Experience Scope (lines 9–13), Distinctive traits (lines 30–41), Audience (line 28) | Product/surface scope is the English homepage `https://www.lunit.io/`. INSIGHT CXR / DBT / MMG, about/careers, and `investors.lunit.io` kept as non-token bounds. `INSIGHT CXR / DBT / MMG` DESIGN 4 / P 1. Characterizations (journal-article read, withheld blue, geometric thesis) sit under B2a at line 13. |
| §1 Key Characteristics (10 bullets) | 옮김 → Experience Distinctive traits (lines 34–41) | Values kept; classification qualified at line 32. |
| §2 Color Palette & Roles | 옮김 → Foundations Semantic color (lines 79–92) | All 8 hexes and uses. Bright blue kept off a `focus-visible` row (B1) at line 86. No-green / no-red marketing observation kept at line 92. |
| §3 Typography — stacks, scale, rules | 옮김 → Typography & Assets Family + Type roles (lines 154–183) | Display/text/fallback stacks kept. Inter-300 substitute instruction recorded and refused as a brand-face promotion (line 164). `Inter 300` DESIGN 1 / P 1. |
| §3 “substitute with Inter 300” as a family token | 삭제 (승격 거부) · 옮김 → Family as the refused instruction | Not presented as the brand face. Core unknown-absence: omit the live specimen rather than substitute. |
| §4 Radius & Geometry | 옮김 → Foundations Shape (lines 102–115) · Governance Recorded conflicts (line 386) | Prose `0px` / `100px` / `3.75px` and “No 4px, 6px, 8px, 12px, 16px”. YAML `4` unmerged. `3.75px` DESIGN 2 / P 3. `100px` DESIGN 9 / P 2. `0px` DESIGN 23 / P 5. |
| §5 Elevation & Depth | 옮김 → Foundations Elevation (lines 117–127) | `box-shadow: none`; white / black / `#eff0f4` band switching. Editorial-spreads reading qualified at line 127. |
| §6 Spacing & Rhythm | 옮김 → Foundations Spacing (lines 94–100) · Layout (line 335) | YAML unitless map; CTA `≈ 14px 28px` (`14px` DESIGN 3 / P 1, `28px` DESIGN 6 / P 2); nav `≈ 8–20px`. Medium viewport-relative confidence kept as the source’s own note. |
| §7 Motion | 옮김 → Foundations Motion (lines 129–135) | AOS, `aos-init aos-animate` DESIGN 2 / P 1, fade/fade-up, no parallax / autoplay hero video / counter animations. No duration token, no curve. Unattributed cubic-bezier: none in source, nothing to delete. B3 full text at line 135: transition properties, animation name, duration, easing, reduced-motion behavior, per-component computed observation, and the partial-confirmation clause (E2c). `transition properties` DESIGN 2; `animation name` DESIGN 2; `reduced-motion` DESIGN 3. |
| §8 Imagery & Iconography | 옮김 → Typography & Assets Assets (lines 185–194) | Scan imagery, monochrome logo wall, outline icons, no stock people / hex-mesh. Favicon dual dest. Headings from `structure.json` not added (source IP rule). |
| §9 Components | 옮김 → Components & States (lines 207–322) | Pill CTA, secondary nav, heading block, stat block, news/solutions card, footer. YAML surface and blue-band kept as separate records. Card hover “subtle ink shift; no lift, no scale” kept. `Contact Us` DESIGN 6 / P 1. |
| §10 Voice | 옮김 → Content & Locales (lines 338–350) | Voice rules, verbs `detect` / `stratify` / `screen` / `support` (each DESIGN 2), forbidden `battle` / `fight` / `transform lives` (`transform lives` DESIGN 3), `10,000+ Customer Sites` DESIGN 3 / P 1, `amazing` DESIGN 1. Tagline-copy prohibition kept. Qualified at line 342. |
| §11 Layout Patterns | 옮김 → Layout & Platforms (lines 324–335) | Hero / stats / solutions / partnering / footer. Qualified at line 327 as homepage recordings. |
| §12 What This System Refuses | 옮김 → Experience Avoid (lines 64–73) | Merged with §16 Don't. `diverse smiling teams` DESIGN 1 (source §12 quote). 20px rounded-card refusal from this section sits in Avoid (`20px` DESIGN 7 / P 1). |
| §13 When to Reach for This System | 삭제 | Agent-selection brief (choose-this-system-when). Not a persona section. No name, age, city, or affiliation classification is carried (D2a unidentifying; there were no biographies). Audience is the §1 wording only: `radiologists` DESIGN 1, `oncology researchers` DESIGN 1, `institutional investors` DESIGN 1. Consumer-fintech / lifestyle / social contrast not promoted (D1). |
| §14 Token Reference (paths to `tokens.json` / `fonts.json` / `structure.json` / `.live-inspect-proof.json`) | 분리 → provenance | Canonical proof section. Sidecar SHAs recorded. `#141414` from `tokens.json` DESIGN 0 / P 2, not promoted. |
| §15 Verification & Sources | 분리 → provenance | Freshness, lookup, stack fingerprint, IP notes. Motive sentence about incentive to ship a public DS stays in the ledger only. `"no public DS"` P 1 / DESIGN 0. `WordPress` DESIGN 0 / P 2. `getdesign` DESIGN 0 / P 2. `refero` DESIGN 0 / P 2. `Figma` DESIGN 1 / P 1 (cookie-vendor copy named by the source). |
| §16 Do's | 옮김 → Experience Application rules (lines 53–62) | Six Do items kept as written. Qualified at line 55. Not folded into controlled Governance copy. |
| §16 Don'ts | 옮김 → Experience Avoid (lines 64–73) | Qualified at line 66. |
| No §14 States section | 옮김 → Components Capture record (lines 199–205) | Source has no States heading. Observed card hover and the `#2a4eef` hover/link/focus sibling are recorded. Applicability is by control meaning (C1/C2). Graph not used. |

## Sibling / proof files (E2)

`ls -a` / `find web/references/lunit -name '.verification.md'`: no `.verification.md`. The source §14 points at `assets/_reference/.live-inspect-proof.json`. That file is adopted in provenance (SHA-256 `d0354e4f8346b656084da53aa562ca213d130680ab6aad1555d7f3b7ad2e224e`, 8 raw samples). `tokens.json` / `fonts.json` / `structure.json` were read. Proof-only values (hero weight 300, `92px` lh, CTA `7px 24px` / weight 500, nav ClashGrotesk on `INVESTORS`, tag `a`, `100+ Partnerships`, viewport 1280×713, captured H1/H2 strings, `#141414`) stay in provenance and are not portable tokens. `92px` DESIGN 0 / P 3; `7px` DESIGN 0 / P 2; `100+ Partnerships` DESIGN 0 / P 2; `Conquer Cancer` DESIGN 0 / P 1.

## State applicability (C2)

Judged by role meaning, not by primitive name and not by capture completeness.

| Component | loading / error / success | Reason class |
|---|---|---|
| Primary CTA — Pill | not-applicable | A marketing `Contact Us` control navigates; it commits no operation in place |
| Secondary nav (top-row) | not-applicable | A destination nav link commits no operation in place |
| Card (news / solutions) | not-applicable | A destination card commits no operation in place |
| Section heading block, Stat block, Footer | map omitted | DESIGN writes `Kind: non-interactive` dest 3 (heading/stat/footer). Exact `kind: non-interactive` DESIGN dest 0 |
| Surface, Blue band | map omitted | No interactive-kind evidence (C4) |

Counted in DESIGN.md with `^\| [a-z-]+ \| applicable \|` / `not-applicable`: **12** `applicable` rows, **9** `not-applicable` rows. Word totals are higher because `not-applicable` contains `applicable` and the Capture record uses both words in prose. Absence of an observation is not a `not-applicable` reason. This is not a complete state-coverage claim.

## A5 / A5a

latin-copy-audit `--brand lunit`: `withLoss: 0`. Gate `copy-loss` coverage: `compared` 0 / `candidates` 128 (A5a trigger: the machine needle is empty because the only Hangul run in parentheses, `루닛`, is two characters and the needle floor is 4). Hand sweep of brand-issued or source-quoted published strings (labels, stats, Korean name, INSIGHT product names, voice verbs, the §12 stock-photo quote) is therefore the A5 check. Survival:

| String | DESIGN | P | Disposition |
|---|---:|---:|---|
| `Contact Us` | 6 | 1 | kept |
| `Allow all` | 1 | 1 | kept |
| `10,000+ Customer Sites` | 3 | 1 | kept |
| `65+ Countries` | 2 | 1 | kept |
| `700+ Publications` | 2 | 1 | kept |
| `루닛` | 4 | 2 | kept |
| `INSIGHT CXR / DBT / MMG` | 4 | 1 | kept |
| `detect` / `stratify` / `screen` / `support` | 2 / 2 / 2 / 2 | 1 / 0 / 0 / 0 | kept |
| `battle` / `fight` / `transform lives` | 2 / 2 / 3 | 0 | kept as refused verbs |
| `diverse smiling teams` | 1 | 0 | restored from source §12 |
| `amazing` | 1 | 0 | kept |
| Live H1/H2 strings in `structure.json` | 0 | mention in asset-sidecar table | source declined to copy them into DESIGN.md; not promoted |

Denominator for the A5a claim: the 12 published/quoted rows above, 0 unaccounted losses. `verdict` here is “those needles survived”, not “every quotation in the file is copy”. Editorial glosses (`journal article`, `scientific composure`) are B2a-qualified characterizations, not A5 needles.

## B2a

Portable body: `derived editorial implementation inference` **26** · `not Lunit-authored or a separately published UI specification` **26** · `separately published` **26**. Inventory is provenance `## Derived editorial inventory` (26 data rows, 179–204). No published first-party UI specification; the example form is used as-is.

Pass 1 (F1) re-read the finished body. Causal/interpretive sentences outside Principles (Scope keep-both, Distinctive traits, color pairing, spacing/shape keep-both, elevation reading, motion signal, B3 gate, font-class sorting, Inter refusal, Lexend rationale, type-role keep-both, wrap rule, assets, capture/applicability, layout, voice) each have an adjacent full-form bound. F3 expanded eight existing closes in place (occurrence count +0): Scope `:11` homepage-layer ≠ published token spec + canvas/inverse two roles; Principles `:45` stems+UI-implication folded, incomplete second close removed (`separately published` 27→26); Semantic `:81` `#ffffff` canvas/on-dark/Blue-band-Text + `#000000` nav; Spacing `:98` eight-step map ≠ complete scale; Motion `:135` official-framework/vendor match ≠ gate; Font `:143` official-use/fallback/license classes; Capture `:203` C4 + static default-only + card-hover ink-shift; Content `:342` `루닛` beside `Lunit`. “No breakpoint / 200% reflow / Korean UI locale” sentences were not written (D1).

## D1 / D2

- `mobile app` DESIGN 0 / P 0. `native application` 0 / 0. `back-office` 0 / 0. `200%` 0 / 0.
- No personas to promote or re-host. §13 was agent-selection guidance; drop is unidentifying.

## Checks run

- `inspectDesignMd` on the migrated `DESIGN.md` → `conformance.portable_core: true`, `level: portable-core`, `reasons: []`, `structurally_valid: true`, placeholders 0
- `findProcessLeaks()` on the migrated body → `[]`
- `node test-v2/tools/latin-copy-audit.mjs --brand lunit` → `withLoss: 0`
- `node test-v2/tools/migrate-reference.mjs --brand lunit --gate-only` → **PASS**, `problems: []`, copy-loss `compared` 0 / `candidates` 128

## Hashes

| File | SHA-256 |
|---|---|
| `web/references/lunit/DESIGN.md` (source, unmodified) | `5e7330f060de236887fb899b0c4ef849204bc8b6137e47014a9a0d4c199d563c` |
| `web/references/lunit/assets/_reference/.live-inspect-proof.json` | `d0354e4f8346b656084da53aa562ca213d130680ab6aad1555d7f3b7ad2e224e` |
| `docs/design-md-weight/migrated/lunit/DESIGN.md` | `8b7504e3347db5430eab0e16816d2254b8f00bde29d7c8eaef08400824d65dcb` |
| `docs/design-md-weight/migrated/lunit/provenance.md` | `31e8264125253ad397924f431c2d2f01e9916991fd6e8b7dd0ef11bd2c211c3b` |
