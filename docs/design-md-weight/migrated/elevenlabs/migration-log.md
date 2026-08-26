# ElevenLabs migration log

Source: `web/references/elevenlabs/DESIGN.md`
Canonical sibling consulted: `web/references/elevenlabs/.verification.md`
Destination: `docs/design-md-weight/migrated/elevenlabs/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/elevenlabs/provenance.md`
Rulebook version: **v9** (`docs/design-md-weight/MIGRATION_RULEBOOK.md`)
Date: 2026-08-26

Every row below was checked by grepping the actual output files before it was written.

## Frontmatter

| Legacy | Disposition | Destination / reason |
|---|---|---|
| `id`, `country`, `category`, `homepage`, `logo` (`type: simpleicons`, `slug: elevenlabs`), `verified`, `omd: "0.1"` | 분리 → provenance | provenance Identity + Freshness. Portable file carries no frontmatter and no URL. |
| `name: ElevenLabs` | 옮김 → DESIGN.md H1 · 분리 → provenance | H1 `# ElevenLabs Design System` (DESIGN.md:1) and provenance Identity. |
| `primary_color: "#000000"` | 옮김 → Foundations · 분리 → provenance | Portable Semantic color row `Primary public action / foreground` (DESIGN.md:80) and provenance Identity + Token record. |
| `ds.name` / `ds.url` / `ds.type` / `ds.description` / `ds.og_image` | 분리 → provenance | provenance Identity, all five fields recorded including `ds.type: brand` (A1c). The brand page's *rules* (mark, naming, trademark boundary) stay portable under Experience → Official brand guidance (DESIGN.md:45–47); only the URLs and metadata move out. |
| `verification_v2.schema` / `checked` / `surfaces` / `sources` / `conflicts` | 분리 → provenance | provenance Freshness, Surfaces, Sources, Proof notes. |
| `verification_v2.claims` (32 entries, all on the `&public` anchor) | 분리 → provenance | provenance Claim ledger, grouped by token family with the anchor resolved once. |
| `tokens.source: reconciled`, `tokens.extracted`, `tokens.note` | 분리 → provenance | provenance Identity; the note is quoted verbatim. |
| `tokens.colors` (7) | 옮김 → Foundations · 분리 → provenance | Portable Semantic color table (DESIGN.md:79–84) keeps all six role/value rows; the `primary`/`foreground` and `canvas`/`on-primary` double naming is preserved as a sentence (DESIGN.md:86) rather than collapsed (A4). provenance Token record holds the raw key/value form. |
| `tokens.typography.family` (`ui: Inter`, `display: Waldenburg`) | 옮김 → Typography & Assets · 분리 → provenance | Portable Family block (DESIGN.md:139–141) and provenance Token record. |
| `tokens.typography.display` / `body` / `control` sizes, weights, unitless lineHeights `1.08` / `1.60` / `1.00` | 옮김 → Typography & Assets · 분리 → provenance | Portable Selector-backed hierarchy table (DESIGN.md:149–152) keeps the ratios as ratios (A1a); provenance Token record repeats them plus the verbatim `use:` strings. |
| `tokens.spacing` (xs 4 … xxl 20) | 옮김 → Foundations · 분리 → provenance | Portable Spacing (DESIGN.md:94) preserves the named scale exactly; provenance Token record repeats it. |
| `tokens.rounded` (sm 4, md 12, lg 16, full 9999) | 옮김 → Foundations · 분리 → provenance | Portable Shape (DESIGN.md:98–102) and provenance Token record. |
| `tokens.components.public-selected-tab` (`type: tab`, radius, padding, font, states, use) | 옮김 → Components & States · 분리 → provenance | Portable `Selected public tab` keeps `Primitive type: tab` (A1b), radius `14px`, padding `0px 21px 0px 20px`, font, the `aria-selected=true` / no-measured-delta observation, and the use limit (DESIGN.md:261–280). provenance Token record keeps the exact source strings `18px/400 Inter` and the two quoted fields. |
| `components_harvested: true` | 분리 → provenance | provenance Identity (A1c). |

## Legacy body sections

| Legacy | Disposition | Destination / reason |
|---|---|---|
| §1 Visual Theme & Atmosphere — company description, three platforms | 옮김 → Experience `scope` claim | DESIGN.md:9. Product/surface scope plus the evidence-domain separation sentence. |
| §1 — official brand system / “11” symbol / per-platform direction | 옮김 → Experience `scope` claim + Official brand guidance | DESIGN.md:11, 45–47. The brand page's published facts stay facts; the "spare parent identity" characterization carries an adjacent derived-editorial qualification (DESIGN.md:11). |
| §1 — "black-and-white actions, warm near-neutrals, low-contrast borders, Inter … Waldenburg" reading | 옮김 → Experience `scope` claim | DESIGN.md:13, with the adjacent derived-editorial qualification (B2). |
| §1 — public-surface-not-product boundary | 옮김 → Experience `scope` claim | DESIGN.md:9, kept as an evidence boundary rather than a coverage complaint. |
| §1 Key characteristics (4) | 옮김 → Experience distinctive traits | DESIGN.md:38–41, all four preserved with their hex values and the platform-identity limit. |
| §1 About / Brand links | 분리 → provenance | provenance Narrative and context sources. |
| §2 Selector-backed public surfaces (6 roles) | 옮김 → Foundations semantic color | DESIGN.md:79–84. Each role, value, and bounded-use phrase preserved, including "not a global canvas claim" for `#f5f3f1`. |
| §2 Official platform-brand boundary | 옮김 → Foundations | DESIGN.md:90 keeps Agents blue / Creative orange / API monochrome, the no-value fact, and the no-authenticated-palette boundary. |
| §3 Evidence classes table (5 rows) | 옮김 → Typography & Assets | DESIGN.md:131–135, all five rows including the 879/22 use counts, the CDN-source corroboration, the declared-only list, and the no-substitution/no-license rules. |
| §3 Selector-backed hierarchy (4 rows) | 옮김 → Typography & Assets | DESIGN.md:149–152, including the 36px/300/`1.17` public section heading. |
| §4 Public actions — black, white, warm pill | 옮김 → Components & States · 부분 옮김 → Foundations · 분리 → provenance | DESIGN.md:171–231. All values (background, text, radius, padding, font, shadow) and the two use limits preserved. Dual destination: the white action's shadow string is carried both on the component (DESIGN.md:199) and in Foundations elevation (DESIGN.md:108). `data-omd-capture` pointers moved to provenance Component selectors. |
| §4 Editorial card, Listbox trigger, Selected public tab | 옮김 → Components & States · 부분 옮김 → Foundations | DESIGN.md:233–280. Listbox trigger keeps the source's own word "button" as `Primitive type: button` (A1b); the card's interactive kind is left unresolved and its applicability map omitted (C4). Dual destination: the card's shadow string is carried both on the component (DESIGN.md:238) and in Foundations elevation (DESIGN.md:109). |
| §4 closing paragraph (zero interaction expansions; structural disabled/`aria-selected`; unmeasured state styling and unobserved menu/dialog variants omitted) | 옮김 → Components & States evidence boundary | DESIGN.md:167. |
| §5 Layout Principles | 옮김 → Layout & Platforms · 부분 옮김 → Foundations | DESIGN.md:285 (4px corners, 12px/16px containers, full-pill actions, the 4/6/8/12/16/20px repeats, and the "not a universal scale or grid" limit) and DESIGN.md:94–102 (the same spacing/shape observations as Foundations values). |
| §5 platform art direction (spheres, Chladni patterns) | 옮김 → Layout & Platforms | DESIGN.md:289, kept as a platform-brand boundary. |
| §6 Depth & Elevation (two shadows) | 옮김 → Foundations elevation | DESIGN.md:108–109, plus the no-ladder/no-modal/no-product-layer limit. §6 itself supplies the two prose readings (the white action's dark 1px-like edge plus low-alpha 1px/2px lift; the card's `0px 2px 4px` low-alpha shadow); the full shadow strings printed alongside them byte-for-byte come from the §4 component records and stay on those components too (DESIGN.md:199, 238). |
| §7 Do (4) | 옮김 → Experience principles + Official brand guidance | DESIGN.md:45 (the platform-name rule, a brand-published instruction), DESIGN.md:54 (Agents blue / Creative orange / API monochrome as direction until route-local values are observed), DESIGN.md:58 (black/white pairing, Inter–Waldenburg role separation). |
| §7 Don't (4) | 옮김 → Experience avoid · 부분 옮김 → Official brand guidance | DESIGN.md:64–67, all four kept with their original wording, including the curly-apostrophe `Don’t` form. Dual destination: the fourth is carried both in Avoid (DESIGN.md:67) and under Official brand guidance (DESIGN.md:46), where it appears in the imperative `Do not alter…` form. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms | DESIGN.md:287. The no-mobile-evidence sentence and the three named unresolved items (collapse threshold, mobile navigation pattern, touch-target size) are preserved verbatim in intent. |
| §9 Quick public-surface reference (7 lines) | 삭제 | Tool-facing restatement. Checked value by value before deleting (A3): `#ffffff`, `#000000`, `#f5f3f1`, `#777169`, `#e5e5e5` all live in Foundations semantic color (DESIGN.md:79–84); Waldenburg 48px/300 home h1 and Inter 18px/400/`1.60` live in the type-role table (DESIGN.md:149–152). No value existed only here. |
| §9 Safe prompt boundary (the quoted prompt paragraph) | 삭제 | Copy-paste prompt wrapper — deleted rather than delegated (no receiving slot). Its values (`#000000` fill, white text, 9999px radius, `0px 14px` padding, `15px / 400 / Inter` label) are the Black public action's own fields (DESIGN.md:173–180), and its "keep it scoped to parent-brand marketing, not a measured dashboard component" limit survives as that component's use line (DESIGN.md:180). |
| §10 Voice & Tone — prose | 옮김 → Content & Locales | DESIGN.md:294, with an adjacent derived-editorial qualification on the "direct, technically specific, mission-led" summary and on the derivation of the table. |
| §10 context table (4 rows) | 옮김 → Content & Locales | DESIGN.md:298–301, including the official-forms rule for `ElevenLabs`, `ElevenAgents`, `ElevenCreative`, `ElevenAPI` (A5 — the four names move as bytes and appear unchanged throughout the portable file). |
| §10 About / Documentation / Safety links | 분리 → provenance | provenance Narrative and context sources. |
| §11 Brand Narrative | 옮김 → Experience → Origin and current evolution | DESIGN.md:18. Founding year, both founder names byte-for-byte, the dubbing motivation, the accessibility mission, and the three current platforms. The reading of *why* the brand system separates the platforms carries the adjacent derived-editorial qualification. |
| §11 Press / help-center links | 분리 → provenance | provenance Narrative and context sources. |
| §12 Principles (4, with UI implications) | 옮김 → Experience derived implementation principles | DESIGN.md:53–56, headed by the complete B2a qualification at DESIGN.md:51. |
| §13 Personas | 옮김 → Experience audience | DESIGN.md:32. The source itself asserts no fictional individual; the four stakeholder groups are kept as groups. The three platform descriptions also became the `primary-tasks` claim (DESIGN.md:25–27); the Impact-program group stays audience-only. No demographic is re-hosted in provenance (D2). |
| §14 States | 옮김 → Components & States evidence boundary | DESIGN.md:167 keeps the source sentences (structural disabled buttons and selected tabs; no measured authenticated-product, loading, error, success, form-validation, or expanded interaction state; preserve the documented public selected/disabled provenance; omit product-state recipes rather than invent them). The only edit is that "in §4" became "recorded in this section", because the states now live in that section. The applicability rule at DESIGN.md:169 decides each state by control meaning, never by capture completeness (C1), and each `not-applicable` row carries a role reason, not an observation gap (C2). |
| §15 Motion & Easing | 옮김 → Foundations motion | DESIGN.md:117–119. The source's no-measurement statement and the brand-guidance-describes-graphics boundary are preserved, and a promotion condition naming all five evidence kinds — transition properties, animation name, duration, easing, reduced-motion behavior — plus the component-specific-observation gate is stated as a Foundations rule (B3). The source has no unsourced curve, so nothing was deleted here. |
| Footer **Verified** / Tier 1 / Tier 2 / Conflicts | 분리 → provenance | provenance Freshness, Tier 1, Tier 2, Proof notes. The getdesign "dark cinematic" conflict and the Refero internal-error non-result are recorded there. |

## Named gaps — source grounding

Every entry in the portable Named gaps list names a domain the source itself
establishes as existing and unresolved (D1a). Checked against the source:
authenticated product (§1, §2, §4, §14), documentation chrome (§1, §7),
platform color values (§2, §7), hover / focus / pressed / expanded-menu and
dialog variants (§4, §7), loading / error / success / form-validation (§14),
mobile viewport / breakpoint / collapse threshold / mobile navigation /
touch-target size (§8), motion duration / easing / reduced-motion (§15), shadow
ladder / modal elevation / product layers (§6), font-license source (§3), and
the white public action's unestablished semantic variant name (§4). No domain
absent from the source was added.

## Final passes

- **F1 (B2a scan).** The finished portable file was reread from the top. Twenty
  causal, interpretive, or classifying passages carry a complete adjacent
  qualification naming the evidence class and distinguishing it from
  ElevenLabs-authored doctrine; their line numbers are listed in provenance →
  Derived editorial range. Eighteen were written during the migration; two more
  (DESIGN.md:47 and DESIGN.md:86) were added by the separate-session audit —
  see `audit-log.md`. Brand-published facts (platform names, the “11”
  symbol rules, the per-platform color assignment, the founding account) are
  left unqualified because they are published, and are attributed to the source
  that publishes them.
- **F2 (E2 cross-check).** Each row above was grepped in the destination files
  before being written. Double destinations are recorded on both sides
  (`primary_color`, `name`, and every token group). Four more that the migration
  pass missed — the two §4 shadow strings, which are carried on their components
  and again in Foundations elevation, and the fourth §7 Don't item, which is
  carried in Avoid and again under Official brand guidance — were added to their
  rows by the separate-session audit. The B3 claim in the §15 row
  is written because DESIGN.md:119 actually contains all five evidence kinds and
  the component-specific gate; the A1a claim is written because `1.08`, `1.60`,
  and `1.00` are present as ratios in DESIGN.md:149–152; the A1b claim is
  written because `Primitive type: tab` and `Primitive type: button` are present
  at DESIGN.md:263 and DESIGN.md:243.
- **Latin copy (A5).** The `copy-loss` gate only builds needles from non-Latin
  runs, and this source has none, so the Latin brand strings were checked by
  hand: `ElevenLabs`, `ElevenAgents`, `ElevenCreative`, `ElevenAPI`, the “11”
  symbol, `Inter`, `Waldenburg`, `Geist Mono`, `WaldenburgFH`, `Waldenburg-ML`,
  `Piotr Dąbkowski`, `Mati Staniszewski`, `aria-haspopup="listbox"`,
  `aria-selected=true`, and `role="tab"` all survive unchanged. The source's own
  quoted `use:` strings are reproduced verbatim in provenance → Token record.
