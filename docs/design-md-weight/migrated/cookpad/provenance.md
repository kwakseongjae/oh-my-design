# Cookpad provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/cookpad/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | cookpad |
| name | Cookpad |
| country | JP |
| category | consumer-tech |
| homepage | https://cookpad.com |
| primary_color | `#FF9933` |
| logo | type `favicon`, slug `https://www.google.com/s2/favicons?domain=cookpad.com&sz=128` |
| omd format (source) | 0.1 |
| tokens.source | prose-derived |
| tokens.extracted | 2026-06-09 |
| components_harvested | true |

`tokens.source: prose-derived` is this identity/Claim ledger only (A1c). The portable body does not contain `prose-derived`. Portable Scope 11 restates the `cookpad.com/jp` live inspect (Playwright computed styles, 2026-05-19) as the named evidence domain, not that YAML key.

Catalog logo type `favicon` / Google s2 slug is this identity ledger only. Portable Typography & Assets 191 records type `favicon` and a Google favicon lookup / non-promotion identity-boundary without the URL (E1). It is not a captured first-party mark. No portable Named-gaps row was invented for a first-party logo-file absence.

Homepage `https://cookpad.com` (YAML `homepage`) is dual Scope 9 + this identity ledger (E2a). It is catalog identity, not a second captured host. `cookpad.com/jp` is dual Scope 11 + Font 163 + this Surfaces/Sources/Tier 1 ledger (E2a). It is absent from Content. Scope 9 restates catalog identity without the `/jp` path.

Catalog `primary_color` `#FF9933` destinations: this identity ledger + portable Scope atmosphere 13; Primary tasks 25; Distinctive limiter 36 / bullet 38; capture-bound Do’s 58 / 61; Semantic unmerged-role 88 / Cookpad Orange 90 / on-primary “White label on `#FF9933`” 91; Capture verified-versus-inferred 219; Focus-not-focus-visible 221; Primary Background 231 / field note 239; Secondary Text 260 / Border 261 / Use 263 / field note 265; Search Use 361 / field note 363 / after-table Focus 375; Named gaps 476 / 478 (E2a). Avoid 73–80 does not name this hex. Content 418–440 does not name this hex.

`tokens.source: prose-derived` and `components_harvested: true` are this ledger only as YAML keys (A1c). YAML `verified` 2026-05-19 and `extracted` 2026-06-09 are this freshness ledger. Footer **Verified:** 2026-05-19 is this ledger only. YAML has no `ds.type` and no `verification_v2.schema`. None is invented.

## Freshness

| Event | Date |
|---|---|
| verified (YAML) | 2026-05-19 |
| surfaces inspected | 2026-05-19 |
| tokens.extracted | 2026-06-09 |
| footer Verified | 2026-05-19 |

Conflicts unresolved: Brief-supplied `#FF7F33` corrected to live-verified `#FF9933`. `#FF7F33` destinations: portable Semantic 88; Primary field note 239; Named gaps 476; this freshness / Proof notes. It is not at Distinctive 36. It is not a current token.

Preserved value pairs inside the reconstruction: catalog `primary_color` / YAML primary/brand / live `rgb(255, 153, 51)` `#FF9933` vs brief `#FF7F33`; canvas `#F8F6F2` vs card/surface `#FFFFFF` vs on-primary `#FFFFFF` (same hex, unmerged jobs); foreground `#0F0F0F` vs charcoal `#4A4A4A`; YAML `body` `#4A4A4A` vs YAML `muted` `#4A4A4A` as named jobs; cream-tint `#FEF9EE` vs pale-yellow `#FAF5D7` vs warm-yellow `#E9B83F`; warm-gray `#ECEBE9` vs charcoal; YAML radius 8 vs YAML `full` 9999 vs body `8px` / `full`; YAML `section` 22 / 700 / 1.3 vs body `20–24px` / 600–700; YAML `title` weight 600 vs body 600–700; YAML `button` 16 / 600 / 1.4 vs YAML `body` 16 / 400 / 1.5; YAML spacing numbers without a px suffix vs body `8px 24px` / `16px` / `~12px 16px` / YAML search `12px 16px`; YAML search padding `12px 16px` vs body `~12px 16px`; primary height ~`48px` vs category ~`64px`. Both sides of each pair stay in portable Foundations, Typography, or Components. Neither is chosen.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| jp-home | product-surface | https://cookpad.com/jp | 2026-05-19 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| jp-live | product-surface | https://cookpad.com/jp | 2026-05-19 |
| cookpadteam | narrative | https://medium.com/cookpadteam | 2026-05-19 |

### Tier 1

- https://cookpad.com/jp — live computed styles (Playwright, 2026-05-19). Dual portable Scope 11 / Font 163 + this ledger (E2a). Absent from Content.

### Tier 2 / narrative (WebSearch 2026-05-19)

- https://medium.com/cookpadteam — founding story. Dual portable Scope 15 + Content 438 + this ledger (E2a). Voice sample 438 names this URL as the verified mission source.
- Crunchbase (Akimitsu Sano) — named in source §11 / footer; no separate URL was supplied. This ledger records the name only.
- https://getdesign.md / refero — source footer: not separately fetched. Portable body does not re-host those failure strings (E1).

Catalog homepage `https://cookpad.com` is dual Scope 9 + this identity ledger (E2a). It is not listed as a second captured surface.

### Narrative (not interface tokens)

Source §1 / §11 founding 1997 / Akimitsu Sano (佐野陽光), an engineer trained in neural computing at Keio University who had been selling produce for local farmers on the side / decline in home cooking eroding people’s connection to food → technology could make everyday cooking *fun* again / Kitchen@coin 1998 / renamed Cookpad 1999 / after making it free, a vast community of user-submitted recipes long before social networks existed / mission "make everyday cooking fun" / more than half of Japan monthly (`>50%` in the source HTML comment) / つくれぽ community is restated in portable Scope public-history 15 under adjacent complete B2a. The source form `>50%` is dual Scope 15 + this narrative ledger (E2a). Atmosphere 13 restates the visual register without the founding URL. They are not interface tokens. Evidence class is the source-stated `medium.com/cookpadteam` founding story + Crunchbase, WebSearch 2026-05-19.

## Claim ledger

Token extraction is `prose-derived` (2026-06-09). `components_harvested: true`. Claims split by the source HTML comment: VERIFIED live computed vs INFERRED §4 controls vs illustrative §15 durations.

| claim | surface |
|---|---|
| tokens.colors.primary / brand | jp-home (live computed) |
| tokens.colors.canvas | jp-home (live computed) |
| tokens.colors.foreground | jp-home (live computed) |
| tokens.colors.body / muted | jp-home (live computed) |
| tokens.colors.surface / on-primary | jp-home (card white / on-primary jobs; same hex, unmerged) |
| tokens.colors.cream-tint / warm-gray / pale-yellow / accent-yellow | jp-home (observed tints in the same render) |
| tokens.typography.family.sans | jp-home (live stack) |
| tokens.typography.section / title / button / body | prose-derived YAML metrics; body §3 size table is size-local |
| tokens.spacing.xs / sm / md / base / lg / xl / xxl / section | prose-derived YAML numbers, no px suffix |
| tokens.rounded.sm / md / lg / full | prose-derived YAML; full 9999 unmerged from 8 |
| tokens.shadow.soft | prose-derived YAML string; no numeric token |
| tokens.components.button-primary.* | jp-home (live computed) |
| tokens.components.category-tile.* | jp-home (live computed) |
| tokens.components.button-secondary / button-text / button-disabled / search-input / rating-badge / promoted-card | inferred from palette/chrome/tints per source HTML comment |
| tokens.components.recipe-card.* | jp-home (white tiles on cream; YAML card) |

YAML `primary` `#FF9933` is catalog `primary_color` and the live inspect fill in portable Semantic 90 / Primary 231, not brief `#FF7F33`. Dual also Distinctive 36/38, Scope 13, Do’s 58/61, Capture 219, field notes 239/265/363, and this freshness pair paragraph (E2a).

## Capture selectors

No `data-omd-capture` selectors exist in the source DESIGN.md. None are invented here. Live inspect notes name `cookpad.com/jp` computed styles for the primary button and category tiles without a CSS selector string.

## Placeholder omission ledger

No `[FILL IN]` placeholders exist in the source; none are emitted.

## Omitted unattributed curves

Exact cubic-bezier values from source §15, omitted from portable Foundations (names kept):

- `ease-standard` `cubic-bezier(0.4, 0, 0.2, 1)` — matches `spec/omd-v0.1.md` template example `ease-standard`
- `ease-enter` `cubic-bezier(0, 0, 0.2, 1)` — matches the legacy spec-template `ease-enter` example
- `ease-exit` `cubic-bezier(0.4, 0, 1, 1)` — matches `spec/omd-v0.1.md` template example `ease-exit`
- `ease-warm` `cubic-bezier(0.34, 1.2, 0.64, 1)` — source-reserved overshoot; unattributed (source HTML comment: motion tokens inferred)

Portable Motion 129–136 keeps the four names and uses. Duration 0ms / 150ms / 250ms / 300ms remain in portable Motion 124–127. Signature motions, spring stance, and `prefers-reduced-motion: reduce` remain in portable Motion 138–149. This omission ledger is a log disposition (E2b), not a promotion.

## Source-stated removed / unpromoted claims

Source HTML comment INFERRED set (this ledger + portable Capture 219 / Secondary 265 / Search 363 / Badge 387 / Promoted 349): secondary/outline button, search input, badge variants, warm-tint usage in notices/highlights, motion tokens in §15 (duration values illustrative). Those names are source-stated evidence-class labels, not new negative coverage invented for an unmentioned domain (D1).

Brief-supplied `#FF7F33` remains a conflict note, not a token (Semantic 88 / Primary field note 239 / Named gaps 476). Distinctive 36 does not name this hex.

## Omitted §13 fictional archetypes

Source §13 labels personas as fictional archetypes informed by Cookpad's publicly-described user base, not real individuals. Generic deletion only: fictional archetype material deleted; not re-hosted. Names, ages, and cities from source §13 are absent from this ledger and from the portable body (D2). Audience 32 restates Japanese home cooks, recipe contributors, and つくれぽ community at group level under adjacent complete B2a.

## Derived inventory (portable B2a sites)

Adjacent complete B2a (`derived editorial implementation inference` / `not Cookpad-authored or a separately published UI specification`) on the current portable body: Scope catalog-homepage-not-a-second-captured-host (9); Scope evidence-domain including this-contract-covers-the-cookpad-com-jp-live-inspect-from-the-2026-05-19-packet / values-stay-attached-to-the-surface-or-note-that-established-them / live-computed-notes-not-a-stand-in-for-inferred-§4-controls (11); Scope atmosphere extras including warm-off-white-`#F8F6F2`-a-soft-cream-never-pure-white / recipe-cards-as-white-tiles-on-that-cream / Cookpad-Orange-`#FF9933`-on-the-primary-action-and-brand-mark / near-black-`#0F0F0F`-text / charcoal-`#4A4A4A`-chrome / rounded-`8px`-corners / photo-forward-recipe-images / Noto-Sans-backed-by-system-ui-apple-system-Segoe-UI-Roboto-Helvetica-Arial / a-16px-body (13); Scope public-history including founded-in-Japan-in-1997-by-Akimitsu-Sano-佐野陽光 / Sano-an-engineer-trained-in-neural-computing-at-Keio-University / selling-produce-for-local-farmers-on-the-side / decline-in-home-cooking-eroding-people’s-connection-to-food / believed-technology-could-make-everyday-cooking-fun-again / launched-1998-as-Kitchen@coin / renamed-Cookpad-in-1999 / dropped-a-paid-subscription-model-and-made-it-free / grew-into-a-vast-community-of-user-submitted-recipes-long-before-social-networks-existed / a-million-users-in-Japan-by-2003 / more-than-half-the-Japanese-population-uses-it-monthly-`>50%` / mission-string-make-everyday-cooking-fun (15); Scope refusal extra names as reconstruction-scope rather than live-captured chrome (17); Primary tasks YAML-use-strings-not-from-§13 (23); Audience no-individual-personas-promoted / fictional-archetypes-not-Audience / group-level-Japanese-home-cooks-recipe-contributors-つくれぽ-community-not-researched-persona-segments (32); Distinctive unmerged-role extras, limiter immediately before the bullets (36); numbered Principles five stems (48); UI-implication tails including warmth-over-polish-encouragement-over-instruction-approachable-over-elite / the-cream-background-friendly-orange-and-soft-radius-all-serve-this / the-warm-canvas-makes-images-pop / Don’t-clutter-a-card / the-voice-roots-for-the-user / treat-the-community-as-the-product-not-an-add-on / warm-neutral-accents-soft-corners-gentle-never-dramatic-depth (56); capture-bound grouping of §7 Do’s named rules (58); Avoid named Don’ts + unique §9 constraints including the-warmth-is-the-brand / 8px-is-the-approachable-signature / everyday-cooking-is-the-point / cooks-browse-with-thumbs / recipes-must-load-fast-on-every-phone (71); Semantic unmerged-role extra characterizations (88); Spacing YAML-without-px / none-is-added-here (104); Spacing unitless-YAML-not-required-px-suffix / body-padding-not-converted-YAML / no-site-wide-spacing-token-as-merged-from-those-two-lists (106); Shape local-geometry / YAML-8-unmerged-from-YAML-full-9999 / 8px-is-the-approachable-signature (112); Elevation no-reusable-numeric-shadow-token-is-promoted / depth-from-warm-cream-separating-white-cards / food-photography-itself-as-depth / shadows-where-present-are-gentle / recipe-cards-minimal-shadow-cream-vs-white-contrast / photo-tiles-rgba-scrim / dropdowns-modals-light-shadow-plus-scrim (116); Motion duration table and easing names as source-stated / duration-values-illustrative (120); Motion spring-stance (138); Motion signature-motion characterizations including appetizing-reveal-no-slide / the-one-warm-overshoot-fitting-an-emotional-community-moment / tappable-and-immediate / Calm (140); Motion warmth-never-costs-accessibility (149); Motion omitted-unattributed-curves-not-promoted-motion-tokens (151); Font evidence-class extras (159); Family font-use named including do-not-present-system-ui-or-Arial-as-Noto-Sans (172); Type-role unitless-YAML-ratios-as-scaling-with-font-size-and-not-fixed-px / YAML-numbers-without-px / YAML-section-unmerged-from-body-20–24px (176); Type-role after-table YAML-section-title-button unmerge restatement (185); Type conventions including 16px-is-the-comfortable-body-default / readable-for-long-recipe-steps-and-ingredient-lists / weight-600-carries-buttons-and-titles / 700-for-stronger-headings / body-weight-400-for-ingredient-lists-and-step-text (187); Assets Google-favicon-lookup identity-only (191); Assets photo-forward-imagery as source-stated primary content rather than a complete image specification (193); Capture-record graph-not-adopted (200); Capture-record table characterizations (217); Capture-record verified-versus-inferred split (219); Capture-record named-Focus-ring-`#FF9933`-not-focus-visible / omitted-L-E-S-fields-rather-than-closed-from-§14-rows / not-a-complete-state-coverage-claim (221); Capture-record YAML-type-card C4 omit-kind / badge Kind-non-interactive (223); Primary field-note unmerged-field (239); Primary omitted-error-success-not-paints-on-this-button (249); Primary YAML-button-disabled-as-treatment-recipe (251); Secondary field-note inferred-control (265); Secondary omitted-L-E-S-because-mapping-unresolved (274); Text field-note unmerged-field (286); Text omitted-L-E-S-because-mapping-unresolved (295); Category field-note unmerged-field (311); Category L/E/S role-based not-applicable (313); Category after-table press-not-a-Core-row (325); Recipe card field-note including meta-row-`#4A4A4A`-not-title-`#0F0F0F` + C4 (339); Promoted field-note inferred + C4 (349); Search field-note inferred + Focus-not-focus-visible (363); Search omitted-loading-and-success-not-paints-on-this-field (373); Search after-table INFERRED-Focus-not-a-Core-row (375); Badge field-note inferred + Kind-non-interactive (387); Layout recorded-span extras including packs-efficiently / each-card-gives-its-food-photo-room-to-look-appetizing / recipe-discovery-is-the-core-loop / generous-padding-inside-category-tiles-comfortable-tap-targets / YAML-spacing-without-a-px-suffix (392); Layout Desktop/Tablet/Mobile table as source-stated-§8-not-a-measured-breakpoint-token-sheet / touch-targets-are-generous-by-design (409); Content voice extras including copy-embodies-the-mission / tired-busy-not-a-professional-chef / never-makes-them-feel-inadequate / homey-peer-to-peer-warmth (418); Content voice-table directions (420); Content forbidden-pattern list including intimidates-home-cooks / anything-that-makes-a-tired-parent-feel-theyre-cooking-wrong / Cookpad-roots-for-the-cook (432); Content japanese-です・ます調-register-and-the-recorded-samples-as-source-§10-evidence / illustrative-samples-not-verbatim-except-the-published-mission (440). Reconstruction-boundary exemption not used. Governance Authority is not a substitute. Core C1/C2/C3 sentences after 221 stay unqualified Core policy. No “no unqualified sentence remains” claim (E2c). This ledger does not re-host those sentences.

## Proof notes

- tokens.source: `prose-derived`; `components_harvested: true` preserved (A1c). The string `prose-derived` is absent from the portable body
- Catalog Google s2 favicon URL is this identity ledger only. Portable Assets 191 names type `favicon` and Google favicon lookup / non-promotion without the URL (E1). Named gaps has no first-party-mark sentence
- Catalog homepage `https://cookpad.com` is dual Scope 9 + this identity ledger (E2a), not Scope 11. `cookpad.com/jp` is dual Scope 11 / Font 163 + this ledger. Absent from Content.
- `primary_color` `#FF9933` destinations listed in Identity (E2a)
- YAML typography `use` restored on Type roles 180–183 and on Primary/Category/Search Use 237 / 309 / 361 (A1). YAML `button-primary` / `category-tile` / `search-input` uses also Primary tasks 25–27
- YAML lineHeight `1.3` / `1.4` / `1.5` preserved as unitless ratios, not rewritten as fixed px (A1a). `1.3` / `1.4` Type roles 176 / 180–183 / 185 only. `1.5` Distinctive 36/43 + Type roles 176 / 183 / 185
- Verified primitive types preserved: `Type: button` on Primary 229 / Secondary 257 / Text 280 / Category 301 / YAML `button-disabled` recipe 251; `Type: card` on Recipe 330 / Promoted 344; `Type: input` on Search 355; `Type: badge` on Rating 381 (A1b). `Kind: interactive` does not replace a missing Type. Recipe/Promoted omit kind (C4, 223/339/349)
- Named Focus ring `#FF9933` on search is an additional INFERRED named-source-state (source HTML comment: INFERRED search input), not an observed interaction capture; focus-visible rows carry no hex (B1, 221/245/271/292/319/369/375)
- Uncaptured visual treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete (221)
- Primary omits error/success fields (C2) 249. Secondary / Text omit loading/error/success (C2) 274/295. Search omits loading/success (C2) 373; error remains applicable. Category loading/error/success remain role-based not-applicable (C2, 321–323). `not captured` is not the reason (C1)
- C4 omit-kind set: Recipe card (330/339), Promoted card (344/349). YAML records `type: card` and no interactive-kind. Rating badge Kind: non-interactive, map omitted (381/387)
- Source §13 fictional archetypes are deleted, not Audience, not primary tasks, and not re-hosted as demographics here (D2)
- The B3 five-kind per-component computed gate is Foundations Motion 151 only (`transition properties, animation name, duration, easing, and reduced-motion behavior` + per component + “Official documentation of a single curve or duration is not that gate”). Named gaps 486 lists those five kinds in inventory form; it is not the B3 full promotion-gate sentence
- Source §9 Agent Prompt Guide brand constraints are in Experience Avoid 71–80 and Distinctive/Foundations; the prompt wrapper is deleted. No `omd-apply` / `npx omd` in the portable body
- No `.verification.md` sidecar is named in the source packet; none is invented here and none is claimed absent as a portable negative
- Source YAML has no `ds.type` and no `verification_v2.schema`; none invented
