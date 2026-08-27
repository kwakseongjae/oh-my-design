# Digital Agency Design System (DADS) provenance

Not part of the portable `DESIGN.md`. Source ledger, proof, unpromoted legacy claims, and disposition evidence for the T2 migration candidate. The canonical source remains `web/references/digital-agency-jp/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | digital-agency-jp |
| name | Digital Agency Design System (DADS) |
| country | JP |
| category | government |
| homepage | https://design.digital.go.jp/ |
| primary_color | `#0017c1` |
| logo | type `favicon`; slug `https://www.google.com/s2/favicons?domain=digital.go.jp&sz=128` |
| verified | 2026-06-17 |
| added | 2026-06-17 |
| omd format (source) | 0.1 |
| ds.name | Digital Agency Design System (DADS) |
| ds.url | https://design.digital.go.jp/dads/ |
| ds.type | system |
| ds.description | "Japan Digital Agency (デジタル庁) official government design system — design language, accessibility/usability guidelines, Figma data, HTML + React component snippets, CC BY 4.0." |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-17 |
| components_harvested | true |

Token note from source, verbatim in substance: primary is the live solid-fill blue (`#0017c1`, `rgb(0,23,193)`) on the search button and outline-button borders; the link/heading blue (`#00118f`, `rgb(0,17,143)`) is the darker text-on-white accent. Body text near-black `#333333`; surfaces grey `#f2f2f2` / `#e6e6e6`; semantic red `#ec0000` and green `#197a4b` confirmed in the button-page colour scan.

## Sources and proof method

Inspected 2026-06-17 with Playwright `getComputedStyle` on the live DOM — global Playwright (chromium, headless), realistic Chrome UA and `ja-JP` locale, each URL loaded `waitUntil: domcontentloaded` plus settle, a cookie/modal dismissal pass, then computed style on `body`, `h1`/`h2`/`h3`, header/nav, buttons, inputs, links, and cards, plus a full-DOM background/text colour frequency scan.

| Source | Role | Boundary |
|---|---|---|
| https://design.digital.go.jp/ | DADS homepage, live computed style (redirects to `/dads/`) | Type stack and body metrics, header/nav, search input and submit button, inline link, navigation card, card H3, homepage colour frequencies |
| https://design.digital.go.jp/dads/components/button/ | Button component page, live computed style | Filled and outline buttons, semantic and tint colour scan, button-page colour frequencies |
| getdesign.md/digital-agency-jp | Tier 2 attempt | Not listed — government DS, outside third-party catalog coverage |
| styles.refero.design (`?q=digital agency` / DADS) | Tier 2 attempt | Not listed |

Source-recorded evidence classes for the philosophy layer: voice samples in §10 are verbatim from the live site (`document.title` and section H2 headings). The §11 brand narrative — the Digital Agency's establishment on September 1, 2021, publication at `design.digital.go.jp/dads` under CC BY 4.0 with Figma plus HTML/React snippets and accessibility/usability guidelines — is recorded by the source as coming from the homepage and the brief's Tier 1 hints; the "β版 v2.14.0" posture string is verbatim from the live header. Interpretive claims — the source names "one blue, meaning-only colour" and "flat clarity as a rejection of consumer-branding flourish" as examples — are editorial readings connecting the observed design to DADS's civic mission, not quoted Digital Agency statements.

## Token record — exact source values

| Group | Exact source values |
|---|---|
| colors | primary `#0017c1`; primary-hover `#00118f`; link `#00118f`; canvas `#ffffff`; ink `#333333`; ink-strong `#1a1a1a`; ink-pure `#000000`; muted `#666666`; muted-alt `#767676`; hairline `#949494`; surface `#f2f2f2`; surface-alt `#e6e6e6`; tint-blue `#e8f1fe`; tint-blue-selected `#d9e6ff`; error `#ec0000`; success `#197a4b`; on-primary `#ffffff` |
| typography family | sans `Noto Sans JP` |
| typography metrics | display `32 / 700 / 1.50` "Section headline (H2), Noto Sans JP Bold"; heading `20 / 700 / 1.50` "Page title (H1) / card heading (H3)"; body-lg `17 / 400 / 1.70` "Default body text, generous CJK line-height"; body `16 / 400 / 1.50` "UI text, nav links, button labels"; nav `16 / 400 / 1.50` "Header nav items"; button `16 / 700 / 1.50` "Button label, Bold" |
| spacing | xs `4`; sm `8`; md `12`; base `16`; lg `24`; xl `32`; xxl `48`; section `64` |
| rounded | sm `8`; md `16`; full `9999` |
| shadow | none `none` |

## Component token record — exact source values

| id / primitive type | Exact source record |
|---|---|
| button-filled / button | bg `#0017c1`; fg `#ffffff`; radius `8px`; height `48px`; padding `8px 16px`; font `16px / 700 Noto Sans JP`; use "Primary filled action — search submit, key CTA"; states "hover #00118f" |
| button-outline / button | bg `#ffffff`; fg `#0017c1`; border `1px solid #0017c1`; radius `8px`; height `56px`; padding `12px 16px`; font `16px / 700 Noto Sans JP`; use "Secondary outline action — section anchors"; states "hover bg #e8f1fe" |
| button-text / button | fg `#00118f`; font `17px / 400 Noto Sans JP`; use "Inline text link button (e.g. Figma file link)" |
| input-text / input | bg `#ffffff`; fg `#1a1a1a`; border `1px solid #666666`; radius `8px`; height `48px`; padding `0 16px`; font `16px / 400 Noto Sans JP`; use "Search box / text input, focus blue #0017c1" |
| card-canvas / card | bg `#ffffff`; fg `#333333`; border `1px solid #949494`; radius `16px`; padding `24px`; use "Content navigation card, no shadow, #00118f heading" |
| nav-link / tab | fg `#333333`; font `16px / 400 Noto Sans JP`; padding `10px 16px`; active "text #00118f + 2px bottom border #0017c1"; use "Header navigation item" |
| chip-blue / badge | bg `#e8f1fe`; fg `#00118f`; radius `8px`; font `16px / 400 Noto Sans JP`; use "Selected / informational chip tint" |
| error-text / badge | fg `#ec0000`; font `16px / 400 Noto Sans JP`; use "Field-level error message colour" |

## Raw live samples

- body: `font-family: "Noto Sans", "Noto Sans JP", -apple-system, system-ui, sans-serif`; `color: rgb(51, 51, 51)` (`#333333`); `font-size: 17px`; `line-height: 28.9px` (`1.70`)
- `document.title`: "デジタル庁デザインシステムβ版"
- H1 "デジタル庁デザインシステムβ版 v2.14.0": `font-size: 20px`; `font-weight: 700`; `color: rgb(51, 51, 51)`; Noto Sans JP
- H2 "デジタル庁デザインシステムの構成": `font-size: 32px`; `font-weight: 700`; `line-height: 48px`; `color: rgb(51, 51, 51)`
- search submit BUTTON "検索": `background-color: rgb(0, 23, 193)` (`#0017c1`); `color: rgb(255, 255, 255)`; `border-radius: 8px`; `padding: 8px 0px`; `font-size: 16px`; `font-weight: 700`; height 48px. The source body records this control's padding as `8px 16px`; the proof's computed value is `8px 0px`. Both representations are kept; the source-body value is the one carried in the portable component record.
- search INPUT: `background-color: rgb(255, 255, 255)`; `color: rgb(26, 26, 26)` (`#1a1a1a`); `border: 1px solid rgb(102, 102, 102)` (`#666666`); `border-radius: 8px`; `padding: 0px 16px 0px 48px`; `font-size: 16px`; height 48px
- nav link "はじめに": `color: rgb(51, 51, 51)`; `padding: 10px 16px`; `font-size: 16px`; height 44px; Noto Sans JP
- inline link "v2.0.0以降のFigmaファイル": `color: rgb(0, 17, 143)` (`#00118f`); `font-size: 17px`; `font-weight: 400`
- navigation card (A "はじめに …"): `background-color: rgb(255, 255, 255)`; `color: rgb(51, 51, 51)`; `border: 1px solid rgb(148, 148, 148)` (`#949494`); `border-radius: 16px`; `padding: 24px`; `box-shadow: none`; height ~154px. The `A` element notation is the interactive-kind evidence used for the portable Navigation card record; the ~154px height is a sidecar-only measurement and is not promoted to the portable body.
- card H3 "はじめに": `color: rgb(0, 17, 143)` (`#00118f`); `font-size: 20px`; `font-weight: 700`
- button-page filled BUTTON "検索": `background-color: rgb(0, 23, 193)`; white text; `border-radius: 8px`; height 48px
- button-page outline A "ヘッダーコンテナ: 概要": `background-color: rgb(255, 255, 255)`; `color: rgb(0, 23, 193)`; `border: 1px solid rgb(0, 23, 193)`; `border-radius: 8px`; `padding: 12px 16px`; `font-size: 16px`; `font-weight: 700`; height 56px
- homepage bg frequency: `rgb(255,255,255)` ×7, `rgba(255,255,255,0.85)` ×1, `rgb(0,23,193)` ×1
- homepage fg frequency: `rgb(51,51,51)` ×451, `rgb(0,17,143)` ×26, `rgb(0,0,0)` ×11, `rgb(26,26,26)` ×6, `rgb(102,102,102)` ×3, `rgb(255,255,255)` ×1
- button-page bg frequency: `rgb(242,242,242)` ×12, `rgb(255,255,255)` ×7, `rgb(230,230,230)` ×3, `rgb(232,241,254)` ×2, `rgb(217,230,255)` ×2, `rgb(118,118,118)` ×2, `rgb(0,23,193)` ×1
- button-page fg frequency: `rgb(51,51,51)` ×581, `rgb(0,17,143)` ×42, `rgb(26,26,26)` ×11, `rgb(118,118,118)` ×8, `rgb(0,23,193)` ×7, `rgb(0,0,0)` ×6, `rgb(102,102,102)` ×3, `rgb(255,255,255)` ×3, `rgb(236,0,0)` ×2, `rgb(25,122,75)` ×1
- `box-shadow: none` across hero, header, navigation cards, and buttons

## Conflict matrix

| Field | Tier 1 (live) | getdesign | refero | Resolution |
|---|---|---|---|---|
| Primary blue | `#0017c1` (`rgb 0,23,193`) filled button | not listed | not listed | Tier 1 — live computed style |
| Link/heading blue | `#00118f` (`rgb 0,17,143`) links + H3 | not listed | not listed | Tier 1 |
| Body text | `#333333` (`rgb 51,51,51`) | not listed | not listed | Tier 1 |
| Font family | Noto Sans JP stack | not listed | not listed | Tier 1 |
| Card hairline | `#949494` (`rgb 148,148,148`) 16px radius | not listed | not listed | Tier 1 |
| Error / success | `#ec0000` / `#197a4b` | not listed | not listed | Tier 1 (colour scan) |

The source records no conflicts: getdesign.md and styles.refero.design do not list this government design system, so Tier 1 live inspection carries every token claim. The source also records that JP has no ≥2-brand-owned regional-source requirement and that the Proof Gate (≥5 raw samples with `rgb()`/hex/px plus ≥1 source URL) is satisfied by the samples above. Conflicts unresolved: none.

## Unpromoted legacy claim ledger

These source bytes are preserved for loss accounting. They are not promoted as verified Core values because the proof does not establish their evidence class.

### Responsive recipes

- Breakpoints: Mobile `<768px` — single column, header collapses to hamburger, cards stack. Tablet `768-1024px` — moderate padding, 2-up card grid. Desktop `>1024px` — full layout, multi-column card grid, persistent header nav.
- Collapsing strategy: header nav horizontal links → hamburger menu button on mobile; navigation card grid multi-column → 2-up → stacked single column; 32px section headings reduce on mobile while weight 700 is maintained; grey/white alternating sections keep full-width treatment.
- Image behavior: Figma/component preview images and diagrams carry no shadow at any size; cards maintain 16px radius across breakpoints.
- Touch-target claims tied to the same responsive framing: buttons at 48–56px height with 8–16px padding; search input at 48px height with a clear 48px icon affordance; nav items at 10px/16px padding landing at 44px tall.

The proof contains a single desktop capture per URL and no multi-viewport observation, so the breakpoint widths, the collapse sequence, the cross-breakpoint radius retention, and the any-size image claim stay here rather than in the portable responsive contract. The measured control heights themselves (44px, 48px, 56px) are observed at the captured viewport and do remain portable.

### Motion recipes

- Durations: `motion-fast` `120ms` — hover, focus, press; `motion-standard` `200ms` — disclosure/accordion expand, dropdown, sheet; `motion-slow` `320ms` — page-level transitions.
- Easings: `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)` — arriving (disclosures, dropdowns, sheets); `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` — dismissals; `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)` — two-way transitions.
- Legacy motion rules: motion is minimal, functional, and quiet; disclosures and accordions expand at `motion-standard / ease-enter` while hover and focus respond at `motion-fast`; no bounce, no spring, no decorative animation; under `prefers-reduced-motion: reduce` all transitions collapse to instant and the interface remains fully functional; motion must never be the sole carrier of meaning.

The proof records computed static styles only — no transition property, animation name, computed duration or easing, and no reduced-motion observation — and the source ledger attributes no origin to this table. No value here is promoted. The portable Foundations Motion rule states the five evidence kinds and the component-specific observation gate required before any promotion.

### State recipes

The complete legacy §14 recipe table is retained in the portable Components & States section as derived editorial guidance with an adjacent evidence-class limitation, as required while the catalog graph is unadopted. It is not recorded as measured interaction proof and supplies no treatment to the per-component applicability tables.

### Tool-facing §9 material

The Agent Prompt Guide's quick colour reference, four example component prompts, and seven-step iteration guide were deleted rather than delegated. Every value they carry — `#0017c1`, `#00118f`, `#ffffff`, `#333333`, `#1a1a1a`, `#666666`, `#767676`, `#949494`, `#f2f2f2`, `#e6e6e6`, `#e8f1fe`, `#d9e6ff`, `#ec0000`, `#197a4b`, the 20px/17px/16px type steps, the 8px and 16px radii, the 48px and 56px control heights, the `1px solid #666666` field border, and the 2px bottom-border active treatment — is present in the portable Foundations, Typography & Assets, Components & States, or Layout & Platforms sections. No unique value existed only in §9.

## Persona disposition

The three legacy §13 entries were fictional archetypes by the source's own disclosure. Under Rulebook D2 their names, ages, locations, and biographies are deleted rather than recopied here. The stakeholder segments the source itself names as publicly observable — government service teams, ministry developers, and the citizens they serve — are retained in portable Experience, and they are the only groups portable Audience carries. A fourth group, "service designers in national and local government bodies", was shipped by the migration worker and is now **deleted under D2**: `service designer` occurs nowhere in the source outside the §13 archetype 田中 美咲 (`web/references/digital-agency-jp/DESIGN.md:366`), and the §13 preamble enumerates the observable segments as exactly three (`…:362`), so the group was a promotion of a fictional archetype's occupation — widened further by "national" — and D2 bars the promotion itself rather than admitting a B2a-qualified version of it. Neither the group nor its justification sentence remains in the portable body.

## Proof notes

- Canonical sibling proof used: `web/references/digital-agency-jp/.verification.md`.
- Evidence-domain separation for a public institution: the agency-published layer (DADS's existence, its `design.digital.go.jp/dads/` publication, CC BY 4.0, the Figma and HTML/React resources, the β/version posture, the Digital Agency's 2021-09-01 establishment, and the verbatim JA site strings) is distinct from the live-computed layer (every colour, metric, geometry, and control dimension), which is in turn distinct from the editorial layer (the civic-legibility reading, the two-step blue contrast strategy, the shadowless-as-accessibility-choice reading, the "mandated typeface" characterization, the minimum-AA-grey reading, the hairline-as-primary-separation role reading, the image-behavior reading, the five principles and their UI implications, the do/don't rules, the register characterization, the layout and whitespace grouping, the state-applicability judgments, and the legacy state recipes). Observation on the documentation surfaces does not populate any ministry or local-government service surface.
- The two Tier 2 catalogs list nothing for this reference, so no third-party corroboration exists and none is claimed.
- Derived editorial scope in the portable document comprises the civic-mission and openness readings in Scope; primary-task framing; audience grouping; distinctive-trait selection; the five derived implementation principles and their UI implications in Experience; the Experience Avoid rules; the three colour characterizations (minimum-AA grey, two-step blue, hairline-as-primary-separation); the elevation reading; the image-behavior reading in Assets; the motion-promotion decision; the derived application rules in Foundations; the mandated-typeface characterization and the four type directions; the component-role and state-applicability judgments; the non-interactive classifications; the legacy state guidance; the layout grouping and portability judgments; the register characterization, tone directions, and forbidden register; and the governance judgments. Each of these carries an adjacent complete authority limitation in the portable body: derived editorial implementation inference, not Digital Agency-authored or a separately published UI specification.
