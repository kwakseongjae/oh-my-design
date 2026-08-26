# Bunjang provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/bunjang/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | bunjang |
| name | Bunjang |
| display_name_kr | 번개장터 |
| country | KR |
| category | ecommerce |
| homepage | https://m.bunjang.co.kr |
| primary_color | `#d80c18` |
| logo | type `favicon`, slug `https://static.bunjang.co.kr/web/ui/favicon.ico` |
| omd format (source) | 0.1 |
| tokens.source | prose-derived |
| tokens.extracted | 2026-06-08 |
| components_harvested | true |

Token note from source: `primary = --color-primary / --color-red-500 #d80c18 (matches primary_color); no box-shadow anywhere — depth is borders + tints`. Dual destination (E2a): this ledger and portable Experience Scope.

Catalog logo type `favicon` / first-party slug `https://static.bunjang.co.kr/web/ui/favicon.ico` is dual this identity ledger `16/24` + portable Assets `DESIGN.md:192` (E2a). Logo icon SVG `https://static.bunjang.co.kr/web/ui/logo-icon.svg` is dual this ledger `24/94` + portable Assets `DESIGN.md:193` (E2a). Path-only `assets/_reference/logo-icon.svg` at this ledger `63` is not the URL. Source IP guardrail (not for downstream use) is dual portable Assets `193` + this Narrative `94`.

Homepage exact `https://m.bunjang.co.kr` (YAML, no trailing slash) is dual-destination: portable Scope catalog-identity `DESIGN.md:9` and Scope evidence-domain `DESIGN.md:11` + this identity 14 / 26. Footer URL `https://m.bunjang.co.kr/` (trailing slash) is dual portable Scope packet sentence `DESIGN.md:11` + this identity 26 / Surfaces 47–48 / Sources 54 / Tier 1 64. Substring hits of the host on logo/CDN URLs are not homepage destinations.

Catalog `primary_color` `#d80c18` is identity metadata + portable Scope token-note / atmosphere `13/15`, Distinctive `36/38/44`, Principles `50/58`, Avoid `69`, Semantic `86/88/106`, Primary CTA `223/232`, Safe-chip field note `323`, Heart `365/370/381` (E2a).

`display_name_kr` `번개장터` is dual: this identity ledger (YAML key) + portable Scope running prose `Bunjang (번개장터)`. H1 is `Bunjang Design System` and is not the YAML key. `tokens.source: prose-derived` and `components_harvested: true` are this ledger only (A1c). Source has no `ds.*` and no `verification_v2`; none invented.

## Freshness

| Event | Date |
|---|---|
| verified (YAML) | 2026-05-14 |
| tokens.extracted | 2026-06-08 |
| surfaces inspected | 2026-05-14 |
| footer Verified | 2026-05-14 (omd:add-reference live capture) |

Conflicts unresolved: none (source footer). Preserved value pairs inside the reconstruction: YAML `lineHeight` `1.2` vs body `normal` vs search YAML `18` / body `18px`; YAML `rounded.full` 999 vs body `999px`; YAML button-primary radius `6px` vs body table 4-6px vs XS `4px`; `#d80c18` primary / red-500 / error sharing the 500 stop; `#c00b15` interpolated vs not observed; `#5558a8` / `#5558A8`; `#ffe1a6` / `#FFE1A6`; Gray-900 `#191919` vs secondary-button `#4c4c4c` vs card-title `#666` / `#666666` vs meta `#999` / `#999999`; partner `#000000` vs Gray-900. Both sides of each pair stay in portable Foundations, Typography, or Components. Neither is chosen.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home-mobile | product-web | https://m.bunjang.co.kr/ | 2026-05-14 (390×844 dpr=3, iPhone UA) |
| home-desktop | product-web | https://m.bunjang.co.kr/ | 2026-05-14 (1280×713 dpr=2) |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://m.bunjang.co.kr/ | 2026-05-14 |

### Tier 1 — Live inspection (PASS)

- Chrome DevTools Protocol over `:9222` (websocket, `suppress_origin=True` to bypass `--remote-allow-origins` block)
- Two viewport captures: desktop 1280×713 dpr=2 + mobile-emulated 390×844 dpr=3 (iPhone UA)
- 73 CSS custom properties extracted from `:root` via `getComputedStyle(document.documentElement)`
- 211 DOM nodes sampled across header / nav / cards / buttons / footer / price / heart / meta
- 9 raw_samples preserved in `assets/_reference/.live-inspect-proof.json`
- Logo SVG archived in `assets/_reference/logo-icon.svg`
- URL: https://m.bunjang.co.kr/

Home URL with trailing slash is dual portable Scope packet sentence `DESIGN.md:11` + this Tier 1 row 64 (E2a). YAML homepage without slash is dual portable Scope `DESIGN.md:9,11` + this identity 14 / 26. 211/211 is dual this ledger 66 + portable Scope `15` / Font evidence `160/164` (E2a). 73 custom properties and 9 raw_samples are this ledger; portable Scope names the `:root` getComputedStyle extraction without those two counts.

### Tier 1 — Official published DS (NEGATIVE — documented)

Attempted lookups (all 2026-05-14):

- `https://design.bunjang.co.kr/` → DNS no-resolve (000)
- `https://bun-ui.bunjang.co.kr/` → DNS no-resolve (000)
- `https://tech.bunjang.co.kr/` → DNS no-resolve (000)
- `https://brand.bunjang.co.kr/` → DNS no-resolve (000)
- `https://company.bunjang.co.kr/` → DNS no-resolve (000)
- `https://blog.bunjang.co.kr/` → DNS no-resolve (000)
- `https://medium.com/bunjang-tech/` → 404
- `https://github.com/bunjang` → 200 but org has no public repos / members / packages
- `https://www.npmjs.com/package/@bunjang/bun-ui` → 403 (package does not exist on public npm)

Portable Scope 17 restates the standalone conclusion and authority boundary only: the DS exists internally (Bun UI / `--bun-ui-*` / vanilla-extract patterns); public Storybook, public npm, published documentation, and public GitHub artifacts do not. Individual lookup host/status rows stay this ledger 72–80. They are not restated in portable Scope.

### Tier 2 — 3rd-party indexes (NEGATIVE)

- `https://getdesign.md/bunjang` → "No designs found for 'bunjang'"
- `https://styles.refero.design/?q=bunjang` → no entry

This row is this ledger only.

### Narrative (not interface tokens)

- Internal name **Bun UI** from `--bun-ui-*` prefix and vanilla-extract class-name patterns `Box__7nn0kn17`, `Flex__wsrgth3`, `Typography_typography__1wr8iu13`. Dual portable Scope + this ledger (E2a).
- Logo SVG `https://static.bunjang.co.kr/web/ui/logo-icon.svg` archived in `assets/_reference/` for capture-fidelity verification only — not for downstream use. Dual portable Assets + this ledger (E2a).
- Service-feature names `안전결제`, `감정완료`, `내폰시세` used descriptively. Dual portable Components / Content + this ledger (E2a).
- Source §9 / §11 voice and Karrot comparison are derived editorial; portable Content marks them analysis-only. Not first-party manifesto quotes.
- Source atmosphere fictional demographics: deleted; not re-hosted as labels (D2). Generic deletion only.

## Claim ledger

Token extraction is `prose-derived` (2026-06-08). `components_harvested: true`. The source does not record `data-omd-capture` selectors or a per-hex Proof map. Footer live-inspect notes attach groups of values to the home URL and to `:root` getComputedStyle; they are not a claim-by-claim computed Proof table invented here.

YAML component keys: `button-primary`, `button-secondary`, `input-search`, `product-card`, `chip-safe`, `chip-care`, `chip-info`, `heart-button`. Primitive types button ×2, input ×1, card ×1, badge ×3, toggle ×1.

## Capture selectors

Source DESIGN.md names Bun UI class patterns rather than `data-omd-capture` ids:

| Component | Pointer |
|---|---|
| Primary / Secondary button | Bun UI `_button_1cw4e_1`; three variants × four sizes `_variant-{normal|primary|…}` × `_size-{XS|M|XL}` × `_full`; named `primary` / `normal` (secondary) |
| Search input | Bun UI `_input_au7f1_17` |
| Product card | Bun UI `_container_15rjm_1` |
| Thumbnail radius | `--radiusVar__1j9duj80: 6px` |
| Aspect | `--aspectRatioVar__1nf1jaf0: var(--bun-ui-aspect-ratio-vertical)` |

## Proof notes

- Verifier: omd:add-reference live capture
- components_harvested: true
- tokens.source: prose-derived
- Interaction: source says no hover state was captured; `#c00b15` interpolated. Uncaptured hover/pressed/`focus-visible` treatments are omitted. They are not `not-applicable` solely for that reason. State coverage is not claimed complete.
- No States section and no Motion section in the source. Portable Capture record and Foundations Motion record that absence. B3 five-kind gate is in portable Foundations Motion.
- Official published DS lookups are negative; Bun UI is internal.
- Logo SVG is verification-only, not a portable mark for derivative products.

## Derived editorial inventory

Portable DESIGN.md adjacent-complete B2a sites (not a completeness claim):

- Scope product-kind C2C / flea-market / evidence-domain / desktop-as-courtesy (`11`)
- Scope token-note register split (`13`)
- Scope visual-character extras: near-monochrome, scarcity, trader-tool sober, funnel/venue, atomic card, no-gradient-sweep, no-shadow-ladder, Korean-text-dominates, incidental-Latin-on-the-system-stack, app-install-rail-as-the-bottom-of-home (`15`)
- Scope Bun UI / public-artifact extras: internal prefix, vanilla-extract patterns, DS-exists-internally-public-artifacts-do-not (`17`). Individual lookup hosts are this ledger 72–80, not portable Scope.
- Primary tasks treating-captured-jobs named: search-the-captured-catalog / scan-81:100-portrait-cards / single highest-intent captured CTA (`23`)
- Audience no-individual-personas-promoted / atmosphere-labels-not-Audience / three-tasks (`32`)
- Distinctive unmerged-trait readings limiter-precedes-list: reserved-for-single-highest-intent-CTA / Pretendard-Variable-only / app-install-rail-at-bottom-of-home (`36`)
- Principles five items + each stem + each *UI implication* (`48`)
- Principles capture-bound Do’s named (`56`)
- Avoid list-head named Don’ts including mix-Noto-Apple-SD-Gothic-or-display-face (`67`)
- Avoid last-bullet partner+snackbar pairing (`76`)
- Semantic unmerged-role extras: strong-dividers / barely-tinted-section-divider (`86`)
- Gray-200 disabled-ish hedge (`99`)
- Gray-70 source-label-not-promoted-hover-paint (`102`)
- Green teal-leaning (`108`)
- Care careful-handling (`114`)
- Safe escrow-signal (`116`)
- Partner federated-login / never-reuse-in-chrome / apple-not-Gray-900 (`118`)
- Spacing YAML-not-CSS-variable / ~24-32px not converted to a px writing of YAML lg 24 / tighter-on-mobile (`126`)
- Shape local-geometry (`132`)
- Elevation table Use precede (`138`)
- Elevation extra philosophy: no-shadow-choice-deliberate / transparent-ledger / nothing-floats / product-is-the-photograph / chrome-shouldn't-compete (`148`)
- Font evidence-class extras: live-211/211-as-sampled-node-computed-use / Bunjang-CDN-self-host-as-source-sentence / Pretendard-Variable-as-the-only-observed-family / fallback-sans-serif-not-substitute (`160`). Live computed row `164`. Official-distributed / exclusive-negative / exact-woff2 / Official-product-use-as-DS-lookup / Declared-only / Unresolved-woff2 rows are absent.
- Family font-use boundary: letter-spacing-normal-everywhere / Hangul-stems-never-tightened (`171`)
- Family weight-axis: brand-voice-riding-on-the-weight-axis / no-italics (`173`)
- Type-role ratio-versus-normal-versus-18px (`177`)
- Assets photo-aesthetic extras (`198`)
- Capture-record loading-lazy-not-component-Loading (`209`)
- Capture-record button-family cardinality is observed-technical (`207`): three variants × four sizes `_variant-{normal|primary|…}` × `_size-{XS|M|XL}` × `_full`; named `normal` (secondary), `primary`; sizes XS, M, XL; `_full`
- Primary field note Role-as-the-single-highest-intent-CTA (`232`)
- Secondary / Search / Card / chips / Heart / Header / Banner field notes (`259/285/308/323/338/353/370/388/396`)
- Product Card not-a-page-wide-type-role-merge (`308`)
- Heart tapped-as-named-state (`381`)
- Layout token-not-complete-breakpoint / generous-side-gutters / mobile-first-not-cross-viewport precedes measurements (`403`)
- Layout stacking / snackbar-over-modal (`409`)
- Content analysis-only / IP-not-verbatim / original-interpretation (`414`)
- Content citation-character (`418`)
- Content derived voice extras + five principles named (`430`)
- Content Karrot comparison adjacent-complete (`450`)

Left unqualified as observed-technical or source-stated: catalog identity `Bunjang` / `번개장터` / homepage URL; YAML token names and hex/px/ratio values; CSS custom-property names; component YAML fields and primitive types; button-family cardinality `207/229/256`; 211/211; 81/100; z-index integers; Observed strings; Governance controlled copy; Named gaps inventory; B3 five-kind gate sentence `152`; C1/C2/C3 capture-record policy `211–215`. Reconstruction-boundary exemption not used.

## Omission ledger

- Source atmosphere fictional demographics: deleted from portable Audience / Primary tasks / this Narrative body. Not re-hosted as labels (D2).
- Source §12 "When to draw inspiration" / "Do NOT use this reference for" agent-usage guidance: deleted. Brand constraints already in Experience principles / Avoid. No slot-less delegation.
- No unattributed cubic-bezier in the source. None omitted as a curve ledger (E2b). Duration / easing / reduced-motion were never present; portable Motion keeps the B3 gate rather than inventing values.
- No `[FILL IN]` in the source. None quoted.
- YAML `tokens.source: prose-derived` stays this ledger (A1c); portable Scope wording `Token extraction is prose-derived` is not the YAML key.
