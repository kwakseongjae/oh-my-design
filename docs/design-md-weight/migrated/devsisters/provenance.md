# Devsisters provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/devsisters/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | devsisters |
| name | Devsisters |
| country | KR |
| category | consumer-tech |
| homepage | https://www.devsisters.com |
| primary_color | `#FF5F00` |
| logo | `type: favicon`, `slug: https://www.google.com/s2/favicons?domain=devsisters.com&sz=256` |
| omd format (source) | 0.1 |
| tokens.source | prose-derived |
| tokens.extracted | 2026-06-09 |
| components_harvested | true |

Dual destinations (E2a):

- Homepage `https://www.devsisters.com` — this identity ledger + portable Experience Scope.
- Catalog `primary_color` `#FF5F00` — this identity ledger + portable Foundations Brand Orange (named there as the catalog `primary_color`); the same hex also sits in Distinctive traits, Capture-bound application, the §14 capture record (network-failure retry text, form-success accent and checkmark), Orange Primary Background, and Tag Badge active fill.
- Catalog `logo` favicon slug — this identity ledger + portable Typography & Assets, where it is recorded as a third-party favicon proxy URL held as catalog identity metadata rather than a first-party distributed brand asset.
- `tokens.source: prose-derived` and `tokens.extracted` 2026-06-09 — this ledger + portable Experience Scope (A1c).
- Catalog `verified` 2026-06-03 — this ledger (Freshness) + portable Experience Scope, where it is named alongside `tokens.extracted` (E2a).

No `ds.name` / `ds.url` / `ds.type` / `ds.description` fields exist on the source. None are invented here.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-03 |
| tokens.extracted | 2026-06-09 |

Conflicts unresolved (source footer): none.

Preserved value conflicts inside the source, kept on both sides rather than merged:

- `tokens.typography.family` records `sans: Pretendard` and `mono: Pretendard`, while §3 names `azo-sans-web` as the English display face. Dual destination: portable Typography & Assets font-evidence table and Family list + this ledger.
- `tokens.components.card` records `radius: 8` for the standard content card while `feature-card` records `radius: 20`; §7 states 20 px for content cards and 8 px for images/thumbnails. Both figures kept in portable Foundations Shape and in the two card components.
- `tokens.typography.family.mono` repeats `Pretendard`. No distinct monospace face is invented; the repetition is recorded in portable Typography & Assets and named in Named gaps.

## Surfaces

The source lists no `surfaces:` block and no inspected-per-surface dates. None are invented here. The Tier 1 URLs below are the material the source names.

## Sources

### Tier 1

- https://www.devsisters.com (homepage HTML + inline CSS)
- https://www.devsisters.com/_next/static/css/bab2a2ef530354d9.css (CSS bundle)
- https://www.devsisters.com/resource (brand resource page)
- https://www.devsisters.com/about (about page)

Dual destination (E2a): the four Tier 1 URLs are named in portable Experience Scope as the covered surface set; `/resource` is also named in portable Typography & Assets.

### Tier 2 (no usable record)

- getdesign.md/devsisters — 0 DESIGN.md files (NOT LISTED)
- refero — no result for Devsisters KR

### Narrative (not interface tokens)

Source §11 and §12 company facts. Dual destination with portable Experience Scope and Principles (E2a); they are brand-published company statements, not interface tokens:

- founded **2007** in Seoul as a small Korean mobile studio
- Cookie Run franchise; breakout with **Cookie Run: OvenBreak**; global scale with **Cookie Run: Kingdom**
- Apple App Store top-10 rankings in the United States
- fandom spanning more than **300 million** cumulative users across all titles
- **four** global offices, **three** development studios, **one** investment subsidiary (**Devsisters Ventures**)
- reach into animation, licensing, PC, console, and VR
- mission: "We Create a Joyful World — in more places, for more people, for longer."
- the about page's **"Brave Journey"** timeline
- three philosophical pillars: **Focus on Core**, **Run Brave**, **Touch Hearts**

## Claim ledger

Source `tokens.source: prose-derived` (extracted 2026-06-09), `components_harvested: true`. The source attaches no per-value live-capture record, so no per-token live Proof mapping is asserted here.

| claim | evidence class |
|---|---|
| YAML `tokens.colors` / `typography` / `spacing` / `rounded` / `components` | prose-derived catalog tokens (`tokens.source`) |
| §2 role and pairing prose, §5 layout figures, §8 breakpoint figures, §14 state treatments, §15 durations/easing/rules | source-stated readings of the Tier 1 homepage, CSS bundle, `/resource`, and `/about` material |
| `azo-sans-web` display face, `Pretendard` body face, `Dotum,돋움,굴림,arial` fallback, nine-step `@font-face` registration | source §3 type evidence: portable Typography & Assets + this ledger (E2a) |
| §11 company history, mission line, "Brave Journey" timeline, three pillars | brand-published company statements (about page), not interface tokens |
| §1 atmosphere reading, §11 narrative characterisations (most-recognised-IP-creator, "breakout moment", courageous-bets), §12 UI implications, §7 Do/Don't lists, §9 application list, §10 voice reading, the catalog-logo boundary reading, the §15 easing character notes, the §15 layout-animation rule | derived editorial implementation inference; carried in the portable body only with an adjacent complete B2a limiter |
| §13 personas | source-marked illustrative, not proprietary user research; excluded (see below) |
| catalog `logo` favicon slug | third-party favicon proxy URL held as catalog identity metadata |

## Capture selectors

The source records CSS class names alongside four component groups. They are class pointers, not `data-omd-capture` selectors; none are invented.

| Component | Pointer |
|---|---|
| Orange Primary | `css-1d80czy` |
| Black Secondary | `css-w3127n` |
| Top Nav | `css-15afoiw` |
| Mobile Nav Drawer | `css-1wp6ena` |
| Standard Card | `css-136jai7` / `css-1v6f5oy` |
| Tag Badge (accent) | `css-1vxk175` |

The source records no class pointer for the News/Feature Card or the Active State Tag. None are invented.

## Personas (D2)

Source §13 carries four entries, each prefixed in the source with `*Illustrative persona — not based on proprietary user research:*`. The archetype labels, age ranges, biographies, and stated Needs are dropped and are **not** re-hosted here. No demographic segment is copied into this ledger. Portable Audience keeps only the exclusion boundary plus the group-level §11 figure (more than 300 million cumulative users across all titles). The three portable Primary tasks come from the Tier 1 surface set and §5's card grid, not from §13.

## Motion curves — retained, with the evidence boundary

The four `cubic-bezier` values in source §15 are kept in portable Foundations Motion rather than omitted:

- `cubic-bezier(0.075, 0.82, 0.165, 1)` — primary content reveal; the same value also appears in §6-adjacent §9 guidance, §12, and the §14 loading row
- `cubic-bezier(0.83, 0, 0.17, 1)` — accordion snap
- `cubic-bezier(0.22, 1, 0.36, 1)` — nav max-height expand
- `cubic-bezier(0.61, 1, 0.88, 1)` — background colour transitions on nav state changes

Grounds: none of the four is one of the curves carried by the legacy spec template (`spec/omd-v0.1.md` 266–269), the deletion scope approved in `docs/design-md-weight/2026-08-22-essence-verdict.md` is the unattributed template curve family only, and the source's Tier 1 list names the site's inline CSS and CSS bundle as the material behind §15. Their evidence class is the document's own `prose-derived` extraction, which is stated in the portable Motion section. The B3 five-kind per-component computed gate is carried in full in portable Foundations Motion and governs any promotion beyond these recorded values; the fact of that gate is also named in portable Named gaps (E2a).

## Proof notes

- `tokens.source: prose-derived`; not `reconciled`; not an official published Devsisters UI specification. That bound is restated in portable Experience Scope (E2a).
- `components_harvested: true` is the source's own flag; it is not evidence of a per-value computed capture, and the portable Scope says so.
- Source §14 records seven state treatments (Empty, Loading, Error — network failure, Error — 404/Not Found, Success, Skeleton loading, Disabled). All seven are preserved verbatim in the portable capture record while the catalog graph is not adopted (A2).
- `not captured` / `not named` is not used anywhere as a `not-applicable` reason (C1). Where a canonical state has no held value, the visual treatment is omitted and the applicability follows control meaning.
- Orange Primary, Black Secondary, and Top Nav omit loading/error/success at the field boundary rather than closing them against the page-level network-failure, 404, and form-success cards (C2). Top Nav additionally omits `disabled` because the source does not resolve whether the interactive unit is the bar or the individual link.
- Mobile Nav Drawer, Standard Card, News/Feature Card, and Tag Badge omit `Kind` and the state-applicability map (C4). Their observed treatments (drawer translate-in, card hover lift, image overlay, active tag fill) are recorded as observations, not as applicability rows.
- Verified primitive types are preserved per component (A1b): `button` ×2 (Orange Primary, Black Secondary), `tab` ×1 (Top Nav), `card` ×2 (Standard Card, News/Feature Card), `badge` ×1 (Tag Badge). The source records no `type` for the Mobile Nav Drawer, so none is invented.
- The unitless `lineHeight: 1.5` on body type is preserved as the ratio `1.5` in the portable Type roles table (A1a). Type sizes are carried unitless as the source records them in `tokens.typography`, with §3's prose px figures quoted alongside.
- `letter-spacing: -0.56px` (large-format hero numerals) and `0.01em` (uppercase display copy) are preserved in the portable Type roles table.
- The source records no `focus-visible` state anywhere. Portable `focus-visible` rows carry applicability by control meaning and no treatment value (B1).
- The source states no font licence and no logo licence. No licence sentence — positive or negative — is added in either file (D1).
- Source §10 voice samples carry the source's own `*Illustrative:*` marker. They are preserved in portable Content & Locales with that marker intact and with an explicit note that they are sample sentences, not observed product copy. Korean strings are preserved byte-for-byte: `Dotum,돋움,굴림,arial`, `"세상을 즐겁게"`, and `"세상을 즐겁게. 더 넓은 곳에서, 더 많은 사람들에게, 더 오랜 시간 동안."`
- Derived inventory in the portable body, each with an adjacent complete B2a limiter (`derived editorial implementation inference from the verified surfaces` / `not Devsisters-authored or a separately published UI specification`): Scope atmosphere paragraph; Scope §11 narrative characterisations (most-recognised-IP-creator, "breakout moment", courageous-bets — split from the dated/countable brand-published facts in the same paragraph); Audience restriction reading and the corporate-site-readers reading; Distinctive traits list; Principles items 4–5, every *UI implication*, and the pillars-surface-in-UI reading; Capture-bound application list; Avoid list; Semantic color role/pairing/application readings; Shape radius-vocabulary reading; Elevation no-shadow reading; Font evidence-class application readings; Family font-use boundary; Assets catalog-logo boundary reading; Components applicability note, the kind-omission paragraph, and the three state maps; Motion easing character notes and the layout-animation motion rule; Layout source-measurements reading; Content copy-pattern-table reading; Content locale-behavior instruction.
- **Source attribution is not an evidence class (§15 character notes).** The three character notes (`easeOutCirc feel; overshoots slightly, settles softly`, `fast-out, slow-in; snappy close/open`, `spring-like deceleration`) are the source's own parentheticals in §15, and the portable body says so — but B2a asks whether a sentence is brand-published or a derived editorial reading, not whether this migration composed it. Devsisters published no curve-feel description; every reference in this catalog is an evidence-based reconstruction, so the source's own prose carries the same limiter that §1 atmosphere, §2 role readings, and §7 Do/Don't carry. The F3 audit removed the adjacent B2a limiter here and added a clause giving the notes the evidence class of the CSS-observed curve values they annotate; that promotion is withdrawn. The attribution to §15 is kept, the promotion clause is deleted, and the complete adjacent B2a limiter is restored.
- Left unqualified as source-stated, brand-published, or catalog metadata — not as a reconstruction-boundary exemption: the Tier 1 surface set and `prose-derived` bound; §11 dated and countable company facts, the quoted mission line, the "Brave Journey" timeline name, and the three pillars (labelled as brand-published about-page material); Primary tasks (surface-observable outcomes read off the Tier 1 surface set and §5's card grid, matching the approved golden-sample treatment — not source sentences); hex/role values; spacing, radius, type, component, breakpoint, and §14 figures; §15 duration table and easing token names/uses; the §15 entrance-trigger and reduced-motion rules; the B3 promotion gate; Governance; Named gaps.
- This ledger does not claim that every unqualified sentence in the portable body has been individually adjudicated beyond the F1 scan recorded in `migration-log.md`.
