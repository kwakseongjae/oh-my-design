# GMO Pepabo (Inhouse) provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the Pepabo migration. Canonical source remains `web/references/pepabo/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | pepabo |
| name | GMO Pepabo (Inhouse) |
| country | JP |
| category | saas |
| homepage | https://pepabo.com/ |
| primary_color | `#1f7ccc` |
| logo | `type: favicon`, `slug: https://www.google.com/s2/favicons?domain=pepabo.com&sz=128` |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-17 |
| components_harvested | true |

Token note from the source, quoted in full:

> Inhouse is a neutral multi-brand prototype: components render on the 'pepper' base flavor (black/grey, brand-swappable). primary = Pepper Blue 600 #1f7ccc (informative/interactive intention); interactive link on live sites is #0a62ad / #005bac. Brand mint #30f4c5 is the pepabo flavor key accent. Component bg #000000 / text #393c41 are the neutral pepper defaults, designed to be overwritten per brand Flavor.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-17 |
| added | 2026-06-17 |
| tokens.extracted | 2026-06-17 |
| surfaces inspected | 2026-06-17 |
| voice samples verified live | 2026-06-17 |

Conflicts unresolved: none (the source's footer states this explicitly).

The `*(verified live 2026-06-17)*` markers that sat beside each of the three voice samples in the source are freshness metadata and are recorded here rather than in the portable body; the sample strings themselves stay in the portable body verbatim.

## Sibling verification file (E2)

`web/references/pepabo/.verification.md` exists and was read in full. It is adopted as **evidence grade only**: no value in it was promoted into the portable body that the legacy `DESIGN.md` did not already establish, and no structural classification from it (element roles, frequency ranks, selector names) was promoted into a portable body fact.

- **Inspected:** 2026-06-17
- **Method (verbatim):** global playwright getComputedStyle (live DOM) — chromium headless, ja-JP locale, realistic Chrome UA; `goto` domcontentloaded/load + waitForTimeout, Escape/modal-dismiss pass, then `getComputedStyle` on body, h1/h2/h3, buttons, inputs, links, and a full-DOM background/text colour frequency scan. Color primitives additionally scraped from the rendered SVG swatch fills on the Color flavor page.
- **Sources listed there:** the five footer URLs, plus `https://design.pepabo.com/inhouse/flavors/elevation/` and `https://design.pepabo.com/inhouse/about/`. The About URL is a sibling inspect path. The source body names published Inhouse About documentation without that URL; the URL stays here and is not a portable-body fact.
- **Raw samples that the visible source body already carries** (corroboration only): Open Sans / Noto Sans JP stack; `#393c41` body; H1 21px/700; Foundation nav `#585c63` 16px; Pepper Blue 600 `#1f7ccc`; button 保存 `#000000` / 4px / 40px / level1 shadow; outlined `#585c63`; pill 20px / 32px; small 12px / 24px; medium 14px / 32px; textfield padding/height scale; elevation level1/level2 strings; pepabo.com `#393c41` ×640, `#005bac`, `#1f7acc`, mint `#30f4c5` / `#0e7365`; hero "人類のアウトプットを増やす"; `get-primitive-color` / `get-semantic-color`.
- **Sibling-only records, kept on this page, not portable-body facts:** H1 text `Pepabo Design`; document title `Inhouse - Pepabo Design`; About-page Sass names `$blue-600: #1f7ccc` and `$informative-color: blue 600`; `get-implication-color($name, $level)` and `get-image-overlay-color($state)`; full Pepper ramp lists (`#f5faff #e5f3ff #c5e2fc #9acaf5 #6aaeeb #3e93de #1f7ccc #034782 #002647` and the gray/green/yellow/red/orange siblings); sub-nav padding `0px 16px` / height 48px; pepabo.com hero region `font-size: 64px`; getdesign 404 string `No designs found for 'pepabo'`; Tech Portal URL `https://tech.pepabo.com/2021/04/30/introduction-of-inhouse/`.

Token comparison: the sibling introduces no hex that the source YAML or body does not already name, except unpromoted ramp steps (for example `#e5f3ff`, `#034782`, `#3ddba1`, `#c7a51e`) and corporate live `#1f7acc` (already in the source closing comment). Those stay here.

## Evidence class

| Domain | Surface | What it establishes | What it does not establish |
|---|---|---|---|
| Published Inhouse documentation | `design.pepabo.com/inhouse/` plus color, button, and textfield pages | Pepper flavor tokens, Sass accessors, documentation chrome, Button and Textfield geometry | Flavor-swapped service UIs (minne, SUZURI, hosting) as captured tokens |
| Corporate site | `pepabo.com` | Ink `#393c41`, resolved links `#0a62ad` / `#005bac`, brand mint `#30f4c5` / `#0e7365`, hero mission line, ink-black hero canvas | Inhouse component library geometry as a pepabo.com token |
| Elevation Flavor page | `design.pepabo.com/inhouse/flavors/elevation/` (named in the source's closing comment, not in the footer Tier 1 list) | level1 / level2 box-shadow strings | A published duration/easing scale |
| Narrative | Source §11 | 2003 Fukuoka founding, GMO Internet Group, service portfolio, 2021 documentation announcement | Interface tokens |
| Motion | — | Nothing published. Source closing note: public docs expose elevation tokens but not a published duration/easing scale | Exact cubic-bezier values |

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| inhouse-home | published-design-system | https://design.pepabo.com/inhouse/ | 2026-06-17 |
| color-flavor | published-design-system | https://design.pepabo.com/inhouse/flavors/color/ | 2026-06-17 |
| button | published-design-system | https://design.pepabo.com/inhouse/components/button/ | 2026-06-17 |
| textfield | published-design-system | https://design.pepabo.com/inhouse/components/textfield/ | 2026-06-17 |
| corporate | corporate | https://pepabo.com/ | 2026-06-17 |

Additional inspect URL from the source's closing comment (not in the footer Tier 1 list): https://design.pepabo.com/inhouse/flavors/elevation/

## Sources

### Tier 1 (from the legacy footer)

- https://design.pepabo.com/inhouse/
- https://design.pepabo.com/inhouse/flavors/color/
- https://design.pepabo.com/inhouse/components/button/
- https://design.pepabo.com/inhouse/components/textfield/
- https://pepabo.com/

Verified line from the source footer: **Verified:** 2026-06-17 (omd:add-reference CREATE — Tier 1 live inspect, 5 surfaces).

### Tier 2 (no usable record)

- getdesign.md/pepabo — 404 (no Pepabo entry)
- styles.refero.design/?q=pepabo — no brand-specific match (generic gallery only)

## Claim ledger

Claims use the source's live-inspect surfaces.

| claim | surface |
|---|---|
| tokens.colors.primary `#1f7ccc` | color-flavor / inhouse-home |
| tokens.colors.primary-strong `#0a62ad` | inhouse-home / corporate |
| tokens.colors.primary-bright `#3e93de` | color-flavor |
| tokens.colors.link `#005bac` | corporate |
| tokens.colors.ink `#393c41` | inhouse-home / corporate |
| tokens.colors.ink-strong `#1f2124` | color-flavor |
| tokens.colors.body `#585c63` | inhouse-home |
| tokens.colors.muted `#767b85` | color-flavor |
| tokens.colors.faint `#9297a1` | color-flavor |
| tokens.colors.hairline `#dee0e3` | color-flavor |
| tokens.colors.surface `#edeef0` | color-flavor / textfield |
| tokens.colors.surface-soft `#f7f8fa` | color-flavor |
| tokens.colors.canvas `#ffffff` | all five |
| tokens.colors.on-primary `#ffffff` | button |
| tokens.colors.brand-mint `#30f4c5` | corporate |
| tokens.colors.brand-mint-deep `#0e7365` | corporate |
| tokens.colors.positive `#1dc487` | color-flavor |
| tokens.colors.notice `#debf43` | color-flavor |
| tokens.colors.negative `#cc1f24` | color-flavor |
| tokens.colors.negative-strong `#b50b11` | color-flavor |
| tokens.colors.attention `#db7d42` | color-flavor |
| tokens.colors.ink-black `#000000` | button / corporate |
| tokens.typography.family.sans / cjk / kerning / mono | inhouse-home |
| tokens.typography.xxxl … xxs | inhouse-home |
| tokens.spacing.xxs … xxl | inhouse-home |
| tokens.rounded.sm / pill / full | button / avatar |
| tokens.shadow.flat / level1 / level2 | elevation flavor / button |
| tokens.components.button-primary / button-outline / button-pill / button-small | button |
| tokens.components.textfield / textfield-filled | textfield |
| tokens.components.card | inhouse-home |
| tokens.components.nav-link | inhouse-home |
| tokens.components.badge-positive / badge-negative | corporate / color-flavor |
| tokens.components.avatar | inhouse-home |

## Capture notes from the source's closing comment

Method named there: Tier 1 live inspect (2026-06-17) via global playwright getComputedStyle on 5 surfaces. Values already in the portable body are not repeated here. Values that appear only in that comment:

- `get-implication-color` — token API named beside `get-primitive-color` / `get-semantic-color` on the color Flavor page. Not a portable color token.
- Pepper ramp endpoints captured from rendered SVG swatches and not promoted as YAML keys: blue `f5faff` … `002647`; green `f5fffb` … `003d27`; red `fffafa` … `540003`. Gray `f7f8fa` … `1f2124` and the 600/700 stops already live as named tokens.
- Corporate live link `#1f7acc` recorded on `pepabo.com` beside `#005bac` / `#0a62ad`. Not a YAML key; not promoted as `tokens.colors.primary`.
- Corporate body text `#393c41` (×640).
- Live H1 21px/700 on the documentation home (also in the portable type-role table).

## Derived editorial inventory

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience Scope `:9` | Five inspected URLs as this contract's token surfaces; Flavor-swapped service UIs as intended consumers rather than captured token surfaces |
| Experience Scope `:11` | Deliberate neutrality / convenient-constraint / calm evenly-spaced palette / Japanese-product type / conservative geometry readings; Flavor names, Sass signatures, hex values, type metrics, radii, and the mission line beside them are the source's own |
| Experience Scope `:13` | Connecting 2003 / 2021 / the service portfolio to the duplicated-foundation problem; reading Inhouse as the answer; carrying the refuses/embraces pairing as one unit with the rest of the paragraph. Founding year and 2021 announcement recorded as publicly documented facts |
| Primary tasks `:19` | Selecting the three documentation-or-corporate outcomes as primary tasks; not from the persona section |
| Audience `:28` | Dropping the persona section rather than promoting it; carrying no affiliation classification or motivation; using only the source §13 header wording |
| Distinctive traits `:32` | Classifying the list as a restatement of measured values and named APIs, and the groupings inside it |
| Principles `:46` | Five items as a derived editorial paraphrase of the published Inhouse About documentation, not verbatim copy; UI implications as derived editorial implementation inference, including the published Inhouse documentation in the close |
| Application rules `:56` | Eight Do rules and the reasons attached to them |
| Avoid `:69` | Eight Don't prohibitions and the reasons inside them |
| Semantic color `:84` | Pairing each hex to its token-set path; canvas / on-primary as two `#ffffff` keys; four unmerged blues; intention names as the two-tier semantic layer rather than a merged house palette |
| Spacing `:138` | Eight YAML spacing keys unmerged from type sizes, radii, and component heights that share a number |
| Shape `:148` | Three rounded keys as named steps, not a universal radius scale for every Flavor |
| Elevation `:158` | Gentle-neutral-lift / barely-there `-0.1px` top edge / achromatic-by-design readings; box-shadow strings, `none`, and the Sass accessor beside them are the source's own |
| Motion `:162` | Durations, easing roles, and motion rules as editorial defaults, not published Inhouse motion tokens; curves omitted |
| Font evidence `:195` | Evidence-class sorting; live stack rather than an unobserved exclusive Pepabo family; fallback stack not the brand face; Latin-only stack refused for Japanese UI type |
| Family `:214` | Four-face split plus the live fallback stack as the current UI family on these captures; Latin-only substitute refused |
| Type roles `:218` | Eight roles unmerged; YAML `use` verbatim; unitless line-heights as ratios beside §3 px writings; M 16 / L 21 / XXXL 32 off spacing and radius steps that share a number |
| Assets `:237` | Google s2 favicon as a catalog identity pointer rather than as a Pepabo-hosted brand file |
| Capture record Focus `:247` | Classifying the Textfield `#1f7ccc` ring as a generic Focus observation rather than a focus-visible treatment, and keeping that observation on the Textfield record rather than on a focus-visible row |
| Capture record `:249` | Applicability note; every interactive-kind and applicability verdict and the reason for either; YAML `Primitive type` only when the token set records that type; Hairline Card labelled `not in the token set`; not a complete state-coverage claim |
| Textfield Observed Focus `:367` | Classifying the ring on the Textfield record as a generic Focus observation rather than a focus-visible treatment |
| Hairline Card `:421` | Withholding kind and a map because the source supplies no interaction evidence; labelling this record `not in the token set` |
| Layout Spacing system `:481` | Whitespace as carrying structure, not decoration; the 4px pair as grid-locked rhythm |
| Layout `:516` | Breakpoint table, touch-target sizes, and collapsing rules as the source's own responsive contract rather than as a measured cross-viewport specification from this migration |
| Content `:521` | Naming the register collegial, pragmatic, and quietly principled, and tying it to the mission line |
| Content locale omit `:539` | Omitting locale claims beyond the Japanese-first stack, the YakuHanJP punctuation layer, and the verbatim samples |
| Named gaps `:573` | List as a catalog of source-unnamed values, not coverage of domains the source never named |

Portable `DESIGN.md` carries 27 complete B2a qualifications. This table is 27 data rows. Preamble sentences on this page are not portable qualifications. Complete form used: "a derived editorial implementation inference from the verified surfaces; it is not Pepabo-authored or taken from a separately published UI specification, including the published Inhouse documentation." Principles `:46` also names the five stems as a derived editorial paraphrase of the published Inhouse About documentation (two readings, one row). The Motion five-kind gate names "including the published Inhouse documentation" as a partial confirmation that does not satisfy promotion; that sentence is the B3 gate, not a 28th B2a row.

## Omission ledger

Mention (disposition) is not use (re-hosting). This table names what was dropped and where the drop is recorded. It does not re-list fictional demographics, and it does not assert portable-body absence in the same sentence that reprints a dropped string as if it were a surviving token.

| Item | Disposition |
|---|---|
| Source §13 personas, 3 slots (name, age, and city were present) | Deleted. Not promoted as individuals, tasks, or Audience groups. Affiliation classification and motivation are not re-hosted. Portable Audience uses only the source §13 header wording the documentation already uses. |
| Source §9 Agent Prompt Guide remaining after color/type/component constraints were moved | Deleted as tool-facing prompt. Unique constraints already live in Experience / Foundations / Components / Typography. |
| Unattributed cubic-bezier curves from source §15 (`ease-enter`, `ease-exit`, `ease-standard`) | Omitted from portable Foundations as unattributed editorial defaults. Duration tokens, easing role names, motion rules, reduced-motion, and the B3 five-kind promotion gate stay in portable Motion. Source closing note: public docs expose elevation tokens but not a published duration/easing scale. |
| Closing-comment-only capture (`get-implication-color`, unpromoted ramp endpoints, corporate `#1f7acc`, ×640) | Ledger only, above. |
| Tier 2 getdesign / Refero lookup detail | Ledger only |

§9 deletion check (A3). Every value §9 names was confirmed present elsewhere in the portable body before the section was dropped. Interactive / primary Pepper Blue 600 `#1f7ccc`; strong link `#0a62ad` / `#005bac`; ink `#393c41`; body `#585c63`; muted `#767b85`; faint `#9297a1`; surface `#edeef0`; soft `#f7f8fa`; hairline `#dee0e3`; canvas `#ffffff`; Positive `#1dc487`; Notice `#debf43`; Negative `#cc1f24`; Attention `#db7d42`; brand mint `#30f4c5` / deep `#0e7365`; neutral button black `#000000` / white text / 4px / 40px / 16px Open Sans; Textfield white / `#393c41` / 4px / 8px 16px / 40px / `#dee0e3` / focus `#1f7ccc` / sizes 32/40/48px; hover `#0a62ad`; type stack YakuHanJP, Noto Sans JP, Open Sans; Heading XL 24px/700; body M 16px/400 with 24px line-height; caption XS 12px; 4px radius default; 20px pill; 9999px full; elevation `rgba(0,0,0,0.12)`.

## Proof notes

- components_harvested: true
- tokens.source: live-extract
- The published Inhouse documentation is a first-party design system. Portable B2a closes use the adapted form that names that documentation, not the unmodified example that would deny a published specification.
- Uncaptured hover/focus-visible/loading treatments are omitted. They are not `not-applicable` solely for want of a capture. Applicability follows control meaning. State coverage is not claimed complete.
- Generic Focus on the default Textfield (`#1f7ccc` ring) is a different evidence type from `focus-visible` (B1). The observation stays on the Textfield record; no `focus-visible` row carries a treatment value.
- Official company history (2003 founding, 2021 documentation announcement) is narrative context, not a token source.
- Same-hex role splits in the portable body, kept unmerged: `#ffffff` is `tokens.colors.canvas` and `tokens.colors.on-primary`; `#585c63` is `tokens.colors.body` and the outlined-button `fg`; `#000000` is `tokens.colors.ink-black` (pepper button fill and corporate hero canvas), not body text.
- YAML `tokens.spacing.lg: 32` is not type XXXL 32px, not pill height 32px, and not Textfield Small height 32px. YAML `tokens.spacing.md: 24` is not Small button height 24px. YAML `tokens.spacing.base: 16` is not type M 16px. YAML `tokens.rounded.sm: 4` is not `tokens.spacing.xxs: 4`.
