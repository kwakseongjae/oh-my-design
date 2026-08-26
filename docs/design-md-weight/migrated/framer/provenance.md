# Framer provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the framer migration. Canonical source remains `web/references/framer/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | framer |
| name | Framer |
| country | US |
| category | design-tools |
| homepage | https://www.framer.com |
| primary_color | `#0055ff` |
| logo | type `simpleicons`, slug `framer` |
| omd format (source) | 0.1 |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-13 |
| components_harvested | true |
| ds.name | Framer Brand Guidelines |
| ds.url | https://www.framer.com/brand?page=1 |
| ds.type | brand |
| ds.description | Official mark, color, and trademark-use guidance. |
| ds.og_image | https://framerusercontent.com/assets/MFmOCFlEnwFAS9IP2HbUEH68axo.jpg |

Two identity records carry a boundary that the portable body states in its own words rather than by repeating the field:

- `primary_color: "#0055ff"` is the official brand-asset colour Framer Deep Blue. The source itself records that it "was not a measured token in the supplied live samples", so it is never promoted to a live public-web token; the portable Foundations subsection carries that same sentence and the separate-evidence-domain rule beside it.
- The `logo` record is a third-party icon-set entry (`simpleicons` / slug `framer`), not a Framer-distributed mark file. It is kept here only; the portable Assets subsection instead states that the contract carries no first-party Framer mark, image, or icon file, and repeats the official do-not-alter/recolor/distort/substitute guidance.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-13 |
| verification_v2.schema | 2 |
| verification_v2.checked | 2026-07-13 |
| surfaces inspected | 2026-07-13 |
| sources captured | 2026-07-13 |
| tokens.extracted | 2026-07-13 |

Conflicts unresolved: none (source `conflicts: []`, and the source footer records "Conflicts unresolved: none").

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | marketing | https://www.framer.com/ | 2026-07-13 |
| surface-2 | community | https://www.framer.com/community/marketplace/components/ | 2026-07-13 |
| surface-3 | marketing | https://www.framer.com/pricing | 2026-07-13 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://www.framer.com/ | 2026-07-13 |
| marketplace-live | product-surface | https://www.framer.com/community/marketplace/components/ | 2026-07-13 |
| pricing-live | product-surface | https://www.framer.com/pricing | 2026-07-13 |
| brand-guidelines | brand-asset | https://www.framer.com/brand?page=1 | 2026-07-13 |
| inter-license | license | https://github.com/rsms/inter/blob/master/LICENSE.txt | 2026-07-13 |

### Tier 1 (source footer)

- https://www.framer.com/ (public marketing)
- https://www.framer.com/community/marketplace/components/ (public community Marketplace)
- https://www.framer.com/pricing (public pricing)
- https://www.framer.com/brand?page=1 (official brand assets)
- https://www.framer.com/careers/ and https://www.framer.com/blog/framer-next-generation-of-designers/ (official context)
- https://github.com/rsms/inter/blob/master/LICENSE.txt, https://input.djr.com/license/, and https://github.com/jetbrains/jetbrainsmono (font/license context)

### Tier 2 (source footer, cross-check only)

- https://getdesign.md/framer — one independent design record; broad direction only.
- https://styles.refero.design/style/242db326-a6f3-482a-b12e-5e7f8af94981 and https://styles.refero.design/style/d417b42f-824d-45ba-a02e-cbef3b8ea0d8 — independent generated records; no generated-only values used.

### Narrative, brand and license context (not interface tokens)

- Careers: https://www.framer.com/careers/ — the first-party mission wording and the published line "Make the web more creative". The quoted string and the mission description are carried in the portable body (Experience Scope, Content & Locales); the URL stays here.
- Product blog: https://www.framer.com/blog/framer-next-generation-of-designers/ — the enduring mission to turn ideas into stunning websites quickly. Carried as substance in the portable body; the URL stays here.
- Brand guidelines: https://www.framer.com/brand?page=1 — official mark, color, and trademark-use guidance, and the Black / White / Framer Blue (`#0099FF`) / Framer Deep Blue (`#0055FF`) mark palette. The palette values and the mark-use rule are carried in the portable body; the URL stays here.
- Inter: https://github.com/rsms/inter/blob/master/LICENSE.txt — SIL OFL 1.1 family/licence context for Inter.
- Input: https://input.djr.com/license/ — published/distributed use needs the appropriate licence.
- JetBrains Mono: https://github.com/jetbrains/jetbrainsmono — OFL-1.1; does not grant use of Framer-hosted files.

## Claim ledger

Claims use the YAML anchors from the source: `home` = home / home-live / computed-style / 2026-07-13; `mkt` = surface-2 / marketplace-live / computed-style / 2026-07-13. The single non-computed method is noted in its row.

| claim | anchor | method |
|---|---|---|
| tokens.colors.canvas | home | computed-style |
| tokens.colors.foreground | home | computed-style |
| tokens.colors.muted | home | computed-style |
| tokens.colors.marketplace-surface | mkt | computed-style |
| tokens.colors.accent | mkt | computed-style |
| tokens.typography.family.ui | mkt | computed-style |
| tokens.typography.family.display | home | computed-style |
| tokens.typography.public-body.size / weight / lineHeight / tracking / use | home | computed-style |
| tokens.spacing.compact-x | mkt | computed-style |
| tokens.spacing.menu-inset | mkt | computed-style |
| tokens.rounded.compact | mkt | computed-style |
| tokens.rounded.menu | mkt | computed-style |
| tokens.rounded.category-card | mkt | computed-style |
| tokens.shadow.marketplace-menu | mkt | computed-style |
| tokens.components.marketplace-filter.type / bg / fg / radius / padding / font / use | mkt | computed-style |
| tokens.components.marketplace-filter.states | mkt | **interaction-capture** |
| tokens.components.marketplace-category.type / bg / fg / radius / use | mkt | computed-style |

`tokens.components.marketplace-filter.states` is the only claim in the source recorded with `method: interaction-capture`; it is the evidence behind the filter trigger's `expanded and menu-open` observation line in the portable body.

## Capture selectors

| Component / role | Pointer |
|---|---|
| Public home body | `home::p` |
| Public home display heading | captured `home::h1` |
| Public home section heading | captured `home::h2` |
| Marketplace filter trigger | `surface-2::[data-omd-capture="26"]`, `aria-haspopup="menu"` |
| Marketplace accent action | `surface-2::[data-omd-capture="15"]` |
| Marketplace open menu panel | `surface-2::[data-omd-interaction-capture="menu-0-0"]` |
| Marketplace unchecked menu option | `surface-2::[data-omd-interaction-capture="menu-0-2"]` |
| Marketplace category card | `surface-2::[data-omd-capture="21"]` |
| Marketplace category label | `surface-2::span.category-card-module-scss-module__VfU1Xq__name` |
| Marketplace disabled tab | `surface-2::[data-omd-capture="13"]` |
| Home form field, error | `home::[data-omd-interaction-capture="form-error-0-0"]` |
| Home utility controls (unidentified role) | `data-omd-capture="31"` through `"33"` |
| Marketplace toast viewport | `surface-2::[data-omd-capture="125"]` |

The portable body keeps each component's role description, its measured values and its observed state; the selectors and class names above are held here only.

## Sibling files

### `web/references/framer/.verification.md` — adopted

Dated 2026-07-13 and sitting beside the source, it is **adopted** as ledger evidence here. None of its distinct values is promoted into the portable body: every portable token comes from `web/references/framer/DESIGN.md` itself. What it adds, kept here:

- **Bundle identity.** Captured `2026-07-13T11:49:01.330Z` at `1440×900`; raw collector bundle `artifacts/reference-evidence/framer.json`; pipeline `spec/verification-pipeline.md`, mode `omd:add-reference UPDATE`.
- **Coverage counters.** `surfaceCount: 3`, coverage score `100`, `componentTypes: 10`, `componentVariants: 39`, `observedStates: 5`, `interactionKinds: 2`, `interactionCount: 3`. The three interaction records are two Marketplace menu openings and one home form-error capture — the portable body carries that three-expansion fact in its own words; the counters stay here.
- **Raw computed samples.** `home::body` color `rgb(0, 0, 0)` / background `rgb(0, 0, 0)` / `12px / 400` system canvas sample; `home::p` `rgb(255, 255, 255)` `Inter Variable` `14px / 400 / 14px` tracking `-0.01px`; `home::h1` `GT Walsheim Medium` `54px / 500 / 54px` tracking `-2.16px`; `home::h2` `44px / 500 / 48.4px` tracking `-1.76px`; `surface-2::[data-omd-capture="26"]` `rgb(36, 36, 36)` / `rgb(255, 255, 255)` / radius `8px` / padding `0px 10px` / `12px / 500 / 12px`; `surface-2::[data-omd-capture="15"]` `rgb(0, 153, 255)` / `rgb(255, 255, 255)` / `8px` / `0px 10px` / `12px / 600 / 12px`; `surface-2::[data-omd-interaction-capture="menu-0-0"]` `rgb(36, 36, 36)` / border `rgb(51, 51, 51)` `1px` / radius `13px` / padding `5px` / shadow `rgba(0, 0, 0, 0.08) 0px 3px 6px 0px`; `surface-2::[data-omd-capture="21"]` `rgb(17, 17, 17)` / `rgb(255, 255, 255)` / `20px` / `12px / 500 / 18px`; `surface-2::[data-omd-capture="13"]` `rgb(102, 102, 102)` / `8px` / `0px 10px` / `12px / 500 / 12px`; `home::[data-omd-interaction-capture="form-error-0-0"]` `rgb(222, 230, 255)` / radius `0px` / `Inter` `14px / 500 / 19.6px`.
- **Values the source DESIGN.md does not promote, and which therefore stay here.** The `home::body` `12px / 400` system-canvas sample; the category-card `18px` line height and the category label's own `12px / 500` root row; the form-error `0px` radius and `19.6px` line height; the toast-viewport measurements (transparent, `15px` padding, Inter `12px / 400`); the `1px` transparent-border restatement for the accent action. The portable type-role table and component rows keep only the values the source DESIGN.md itself carries.
- **Toast resolution.** "Toast container is present but has no message/lifecycle sample; do not promote a toast component." The portable body records the viewport's presence and the missing message/lifecycle/style contract, and declares no toast component.
- **Font detail.** The 512 / 392 / 11 / 14 / 3 / 1 visible-use counts, the two Framer-hosted Inter Variable WOFF2 source URLs (`https://www.framer.com/creators-assets/_next/static/media/Inter_Variable-s.p.0r27kd5h06n72.woff2`, `https://www.framer.com/creators-assets/_next/static/media/Inter_Variable_Italic-s.p.0lyls.rsx6v21.woff2`), the "78 zero-use declarations" total, the additional declared-only names Lazzer, Manrope, Mona Sans and Open Runde, and the note that computed `sans-serif` is an operating-system stack and not a Framer brand face. The portable body keeps the evidence classes and the named declared-only families the source DESIGN.md lists; the URLs, the 78 count and the extra names stay here.
- **Extra licence source.** Grilli Type's GT Walsheim web-font licence material (https://www.grillitype.com/api/storage/app/uploads/public/57f/c08/e9b/57fc08e9b1fca040093410.pdf) establishes a licensed-webfont boundary with no downstream asset grant. The source DESIGN.md does not cite it; it is recorded here only, and the portable body's GT Walsheim treatment stays at the source's own "keep metadata, no reusable distributed asset" wording.
- **Product-vocabulary source.** https://www.framer.com/dictionary/design-system — first-party explanation of Framer's design-system features. Recorded as product vocabulary only; its documentation-page chrome populates nothing.
- **Tier 2 records.** getdesign.md lists one Framer record with a broad "design-creative Website builder" description and no selector provenance. The Refero query URL `https://styles.refero.design/?q=framer` returned a safe-open internal error, and the two style records were reached by built-in web search; they echo a dark, blue-accent direction with Inter/GT Walsheim naming but add generated sizes, radius scales, substitutes and component advice that are excluded.
- **Conflict matrix.** Canvas/foreground, blue accent, Marketplace action/menu, category card, public web fonts, and the legacy hero/pills/states row are all resolved in favour of the dated Tier 1 computed evidence.
- **Reverted legacy claims.** The previous reference mixed an older marketing snapshot with unobserved app behavior. Its 110px/85px/62px display scale, 100px and 40px global pills, `#090909` cards, blue ring hierarchy, frosted defaults, Mona Sans / Open Runde / Azeret UI roles, navigation behavior, breakpoints, product state recipes, and spring token table were removed at the individual field/component boundary. None of them is reinstated by this migration.
- **Trust note.** "No public trust outcome is assigned in this record."

### `web/references/framer/README.md`, `preview.html`, `preview-dark.html` — not adopted

These three are the upstream import artifacts, not evidence. They are **not adopted**, for a stated reason rather than by silence:

- `README.md` describes the file as "extracted from the public Framer website", says "This is not the official design system. Colors, fonts, and spacing may not be 100% accurate", counts the document as "9 sections", and links a third-party repository copy plus two R2-hosted preview screenshots. It is upstream packaging metadata about a document shape this migration replaces; the only substantive point it carries — that the reference is a reconstruction rather than official authority — is already the portable file's declared authority kind.
- `preview.html` and `preview-dark.html` are token-catalog demos built from the **pre-reconciliation** snapshot. Their variables are exactly the claims the 2026-07-13 reconciliation removed: `--color-near-black: #090909`, `--color-blue-glow`, frosted surfaces, `--font-mono: 'Azeret Mono'`, a `--radius-xs: 1px` / `--radius-sm: 5px` scale, and Google-Fonts-loaded Inter and Azeret Mono. Adopting any of it would re-import rolled-back values, so nothing from either file reaches the portable body or this ledger's token rows.

## Omission ledger

- The source has no `[FILL IN` placeholder of any form, so nothing is quoted here as a placeholder record and the portable body emits none.
- Source §9 Agent Prompt Guide is a tool-directed construction prompt. The prompt wrapper itself is deleted rather than relocated. Two of its clauses are **not** restatements and were moved instead of dropped: the "not an app-kit specification" reading of the whole reference (now in the portable Experience Scope) and the "not an unbounded display scale" bound on the two captured display examples (now in the portable Typography & Assets hierarchy). Its remaining values (`#000000` canvas, `#ffffff` foreground, Inter UI text, `#0099ff` accent, `#242424` with white `12px / 500` Inter text, `8px` radius, `0px 10px` padding, the `13px` menu panel, GT Walsheim Medium at `54px`/500 and `44px`/500) were each grep-confirmed present in the portable Experience, Foundations, Typography & Assets or Components & States before the deletion row was written.
- Source §3's per-row `Provenance` column and source §4's `Use:` selector strings held capture pointers only; the pointers moved to the capture-selector table above and the columns were replaced by the role/use wording. The role text itself stays in the portable body.

## Proof notes

- verification_v2 schema 2; `conflicts: []`
- `components_harvested: true`; `tokens.source: reconciled`
- Three interaction expansions are recorded: two Marketplace menu openings and one home form-error capture. Every other component row is a default/observed-state measurement.
- Unobserved hover / focus-visible / disabled treatments are omitted rather than marked `not-applicable`. Applicability follows control meaning: the accent action and the home form field keep `loading` / `error` / `success` applicable with treatments omitted, because an action runs an operation and a field commits an entry; the filter trigger (opens a menu), the `menuitemcheckbox` option (toggles its own value) and the coming-soon tab (selects which panel is shown) mark those three `not-applicable` for role reasons, never for a missing observation. State coverage is not claimed complete.
- No `focus-visible` treatment is asserted anywhere. The source records no focus capture at all; a `focus` mention in its don't-list is a prohibition, not an observation.
- The Marketplace category card and the open menu panel carry no interactive-kind evidence in the source: the card root's control role is undeclared, so no kind and no applicability map are fixed for it, and the panel is the surface the options sit in.
- Official brand guidance, careers, blog, dictionary and font-licence documents are narrative, brand and licence context. They are not interface-token sources, and the published brand palette is a separate evidence domain from the live computed capture.
