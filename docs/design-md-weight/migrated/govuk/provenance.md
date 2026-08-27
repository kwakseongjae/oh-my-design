# GOV.UK provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/govuk/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | govuk |
| name | GOV.UK |
| country | UK |
| category | government |
| homepage | `https://www.gov.uk` |
| primary_color | `#1d70b8` |
| logo | `type: favicon`, `slug: https://www.google.com/s2/favicons?domain=gov.uk&sz=128` |
| omd format (source) | 0.1 |
| verified | 2026-06-22 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-22 |
| components_harvested | true |
| ds.name | GOV.UK Design System |
| ds.url | `https://design-system.service.gov.uk` |
| ds.type | system |
| ds.description | UK Government Digital Service design system. Accessibility-first, GDS Transport font, govuk-blue #1d70b8 brand, #ffdd00 focus highlight, zero border-radius policy. |

The favicon slug is dual-destination: identity metadata here, and a portable asset record in `DESIGN.md` §3. It is a favicon-service URL keyed to the domain rather than a GOV.UK-hosted brand file, and the portable record says so.

Token note from source, verbatim: `primary = govuk-blue #1d70b8 (brand functional colour); focus = #ffdd00 (WCAG-mandated yellow highlight); text = #0b0c0c (near-black); buttons use green #0f7a52 as primary action colour on DS site, while govuk.com header uses blue #1d70b8.`

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-22 |
| tokens.extracted | 2026-06-22 |
| Tier 1 live inspect | 2026-06-22 |

The source footer records **Verified:** 2026-06-22. That freshness stamp is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: none — the source footer states that Tier 1 DS documentation is the gold standard and fully consistent with live DOM inspect. The sibling conflict matrix explains three live-vs-spec differences without leaving them unresolved; that matrix is transcribed below and is not promoted into `DESIGN.md`.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| home | product-surface (homepage) | `https://www.gov.uk/` | 2026-06-22 |
| ds | design-system docs | `https://design-system.service.gov.uk` | 2026-06-22 |

### Tier 1 (as listed in the source footer)

- `https://www.gov.uk/` — live DOM inspect — font, colour, button geometry
- `https://design-system.service.gov.uk/` — authoritative DS spec — colour tokens, component specs, button/input/tag/banner live measurements
- `https://design-system.service.gov.uk/styles/colour/` — full colour palette spec
- `https://design-system.service.gov.uk/components/button/` — button variants live
- `https://design-system.service.gov.uk/components/text-input/` — input spec live
- `https://design-system.service.gov.uk/components/tag/` — tag/badge spec live
- `https://design-system.service.gov.uk/components/notification-banner/` — banner spec live

### Tier 2

- getdesign.md/govuk — not listed (0 results)
- styles.refero.design/?q=GOV.UK — not listed

## Sibling handling (`web/references/govuk/.verification.md`)

The sibling exists — confirmed with `find web/references/govuk -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact, and none of its structural classifications (selector naming, frequency-scan ranks, component-page URLs, `rgb()` byte forms) was promoted into `DESIGN.md`.

Its own record, transcribed here:

- Inspected 2026-06-22. Method: playwright `getComputedStyle` (live DOM) — global playwright (chromium, headless), domcontentloaded, then `getComputedStyle` on body, h1/h2/h3, buttons, links, inputs, and full-DOM colour frequency scan. Two surfaces: www.gov.uk (homepage) and design-system.service.gov.uk (authoritative DS site + component example pages).
- Sources: `https://www.gov.uk/`; `https://design-system.service.gov.uk/`; `https://design-system.service.gov.uk/styles/colour/`; `https://design-system.service.gov.uk/components/button/default/index.html`; `https://design-system.service.gov.uk/components/button/secondary/index.html`; `https://design-system.service.gov.uk/components/button/warning/index.html`; `https://design-system.service.gov.uk/components/text-input/default/index.html`; `https://design-system.service.gov.uk/components/tag/default/index.html`; `https://design-system.service.gov.uk/components/notification-banner/default/index.html`; `https://design-system.service.gov.uk/components/select/default/index.html`; `https://design-system.service.gov.uk/components/inset-text/default/index.html`.
- `https://www.gov.uk/` · body · `font-family: "GDS Transport", arial, sans-serif` · `color: rgb(0, 0, 0)` · `font-size: 16px` · `background-color: rgb(255, 255, 255)` (#ffffff)
- `https://www.gov.uk/` · H1 "The best place to find government servi…" · `font-size: 64px` · `font-weight: 700` · `color: rgb(255, 255, 255)` (white on blue header band) · `font-family: "GDS Transport", arial, sans-serif`
- `https://www.gov.uk/` · nav link "GOV.UK" logo · `background-color: rgb(29, 112, 184)` (#1d70b8) · `color: rgb(255, 255, 255)` · `font-size: 30px`
- `https://www.gov.uk/` · button "Accept additional cookies" · `background-color: rgb(0, 112, 60)` (#00703c variant) · `color: rgb(255, 255, 255)` · `padding: 8px 10px 7px` · `border-radius: 0px` · `font-size: 19px` · `height: 38px`
- `https://www.gov.uk/` · link "HMRC account: sign in…" · `color: rgb(29, 112, 184)` (#1d70b8) · `font-size: 19px` · `font-weight: 700`
- `https://www.gov.uk/` · H2 "Popular on GOV.UK" · `font-size: 36px` · `font-weight: 700` · `color: rgb(11, 12, 12)` (#0b0c0c) · `border-radius: 0px`
- `https://design-system.service.gov.uk/styles/colour/` · DS colour spec · `text: #0b0c0c` · `secondary-text: #484949` · `link: #1a65a6` · `link-hover: #0f385c` · `link-visited: #54319f` · `border: #cecece` · `focus: #ffdd00` · `error: #ca3535` · `success: #0f7a52` · `brand: #1d70b8`
- `https://design-system.service.gov.uk/components/button/default/index.html` · `.govuk-button` "Save and continue" · `background-color: rgb(15, 122, 82)` (#0f7a52) · `color: rgb(255, 255, 255)` · `border-radius: 0px` · `padding: 8px 10px 7px` · `font-size: 19px` · `box-shadow: rgb(8, 61, 41) 0px 2px 0px 0px`
- `https://design-system.service.gov.uk/components/button/secondary/index.html` · `.govuk-button--secondary` "Find address" · `background-color: rgb(243, 243, 243)` (#f3f3f3) · `color: rgb(11, 12, 12)` · `border-radius: 0px` · `box-shadow: rgb(133, 134, 134) 0px 2px 0px 0px`
- `https://design-system.service.gov.uk/components/button/warning/index.html` · `.govuk-button--warning` "Delete account" · `background-color: rgb(202, 53, 53)` (#ca3535) · `color: rgb(255, 255, 255)` · `box-shadow: rgb(101, 27, 27) 0px 2px 0px 0px`
- `https://design-system.service.gov.uk/components/text-input/default/index.html` · `.govuk-input` · `background-color: rgb(255, 255, 255)` · `border: 2px solid rgb(11, 12, 12)` · `border-radius: 0px` · `padding: 5px` · `height: 40px` · `font-size: 19px`
- `https://design-system.service.gov.uk/components/tag/default/index.html` · `.govuk-tag` "Completed" · `background-color: rgb(210, 226, 241)` (#d2e2f1) · `color: rgb(15, 56, 92)` (#0f385c) · `padding: 2px 8px 3px` · `border-radius: 1px` · `font-size: 19px`
- `https://design-system.service.gov.uk/components/notification-banner/default/index.html` · `.govuk-notification-banner` · `background-color: rgb(29, 112, 184)` (#1d70b8) · `border-color: rgb(29, 112, 184)` · `color: rgb(0, 0, 0)`
- `https://design-system.service.gov.uk/components/select/default/index.html` · `.govuk-select` · `background-color: rgb(255, 255, 255)` · `border: 2px solid rgb(11, 12, 12)` · `padding: 5px` · `height: 40px` · `font-size: 19px`
- `https://design-system.service.gov.uk/components/inset-text/default/index.html` · `.govuk-inset-text` · `border-left: 10px solid rgb(206, 206, 206)` (#cecece) · `padding: 15px` · `border-radius: 0px` · `color: rgb(11, 12, 12)`
- `https://design-system.service.gov.uk/` · DS colour page bgFreq top · `rgb(243, 243, 243)` ×18 (#f3f3f3) · `rgb(244, 248, 251)` ×7 (#f4f8fb) · `rgb(255, 255, 255)` ×6 (#ffffff) · `rgb(15, 122, 82)` ×6 (#0f7a52) · `rgb(11, 12, 12)` ×6 (#0b0c0c) · `rgb(29, 112, 184)` ×3 (#1d70b8)
- `https://design-system.service.gov.uk/styles/colour/` · fgFreq · `rgb(11, 12, 12)` ×927 (#0b0c0c) · `rgb(26, 101, 166)` ×165 (#1a65a6) · `rgb(255, 255, 255)` ×31 (#ffffff) · `rgb(209, 49, 24)` ×17 (error tint)
- The sibling records no transition, animation, duration, or easing observation on either surface.

### Logo decision (sibling)

- Checked Google favicon: `https://www.google.com/s2/favicons?domain=gov.uk&sz=128` → 1971 bytes, 128×128 PNG → above 450-byte threshold, real GOV.UK crown favicon — SELECTED
- GOV.UK website has a SVG favicon at a long hash URL (`/assets/frontend/favicon-d962d21b5bb443f546c097ea21b567cde639adef7370da45be5e349ba8d62d33.svg`, 1846 bytes) but the hashed path may change on frontend releases; Google favicon is more stable
- SimpleIcons: `https://cdn.simpleicons.org/govuk` → HTTP 404 — not available
- Final: `type: favicon, slug: "https://www.google.com/s2/favicons?domain=gov.uk&sz=128"` (1971 bytes)

### Sibling conflict matrix (not promoted)

| Field | Tier 1 live (www.gov.uk) | Tier 1 DS spec | Resolution (sibling) |
|---|---|---|---|
| Primary button bg | `rgb(0, 112, 60)` = #00703c | `#0f7a52` (govuk-colour("green")) | DS spec is authoritative token; live variation is same hue, minor render difference — use `#0f7a52` |
| Link colour | `rgb(29, 112, 184)` = #1d70b8 | `#1a65a6` (DS link token) | Both are correct: gov.uk uses #1d70b8 (brand), DS site uses #1a65a6 (link functional). Both documented. |
| Body text | `rgb(0, 0, 0)` = #000000 | `#0b0c0c` (DS text token) | DS spec is authoritative; #0b0c0c is the design token; live body inherit from browser, not element-level |
| Tag bg | `rgb(210, 226, 241)` = #d2e2f1 | Not on colour page directly | Live inspect confirms; matches "blue tint-80" from DS palette |

Values and strings the sibling carries that the visible source body does not, kept here and not promoted:

- Homepage cookie-button label `Accept additional cookies` and live fill `#00703c`.
- Homepage link label `HMRC account: sign in…`.
- Homepage H2 `Popular on GOV.UK`.
- Homepage H1 nav lockup size `30px` on the "GOV.UK" wordmark.
- Notification-banner live text `color: rgb(0, 0, 0)` on the informational example (source token is `#ffffff` on `#1d70b8`).
- Every `rgb()` byte form and every frequency count (×18, ×927, and the rest).
- Component-page URLs with `/default/index.html` paths. The source footer names the component roots without those suffixes.
- Selectors `.govuk-button`, `.govuk-button--secondary`, `.govuk-button--warning`, `.govuk-input`, `.govuk-tag`, `.govuk-notification-banner`, `.govuk-select`, `.govuk-inset-text`.
- getdesign.md phrase `0 DESIGN.md files for govuk`.
- Hashed first-party SVG favicon path and SimpleIcons 404.

## Byte-form notes

- The source frontmatter records line heights as unitless ratios (`1.1`, `1.15`, `1.11`, `1.25`, `1.31`, `1.43`). They are carried as ratios in the portable body, never converted to px (A1a).
- The source frontmatter records spacing and radius steps unitless (`xs: 5` … `section: 80`; `sm: 0`, `md: 0`, `lg: 0`, `full: 1`). The portable body keeps both the unitless steps and the px forms the visible sections use. `full: 1` stays a 1px tag step, not a pill.
- YAML component font shorthands keep the byte form `19px / 400 GDS Transport`. YAML padding `8px 10px 7px` and tag padding `2px 8px 3px` keep those byte forms.
- YAML shadow strings keep `0 2px 0 #083d29` / `#858686` / `#651b1b` and `0 -2px #ffdd00, 0 4px #0b0c0c`.

## Omission ledger

| Omitted | Boundary | Reason |
|---|---|---|
| `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)` | curve value only; token name, role, durations, motion rules, signature motions, and reduced-motion behavior kept | No observation stands behind the value. The source's evidence is a Tier 1 live inspect of colour, type, geometry, border, and shadow, and it supplies no transition, animation, or easing sample. |
| `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)` | curve value only | Same: no observation stands behind the value. |
| `ease-exit` `cubic-bezier(0.4, 0, 1, 1)` | curve value only | Same, and byte-identical to the example table at `spec/omd-v0.1.md` line 262, the documented re-injection path for this value. |
| §13 Personas — four entries | whole section | The source's own italic line labels them illustrative archetypes informed by publicly stated user-research commitments, not individual people. Fictional personas are neither promoted to verified tasks nor re-hosted in a sidecar, so the four entries — including names, ages, and cities — are dropped and are deliberately not restated here (D2, D2a). |
| §9 Agent Prompt Guide — Quick Color Reference, Example Component Prompts, Iteration Guide | whole section | Tool-facing copy-paste prompts and restatements of rules stated elsewhere. Checked value by value before deletion: see the next paragraph. |

§9 deletion check (A3). Every value §9 names was confirmed present elsewhere in the portable body before the section was dropped. Quick Color Reference: `#1d70b8`, `#0f7a52`, `#083d29`, `#ffdd00`, `#ffffff`, `#0b0c0c`, `#484949`, `#cecece`, `#ca3535`, `#54319f`, `#d2e2f1`, `#0f385c` — all are Foundations semantic-color roles. Example Component Prompts: primary button `#0f7a52` / white / 0px / `8px 10px 7px` / 19px/400 GDS Transport / `0 2px 0 #083d29` / focus `#ffdd00` 3px; text input white / `#0b0c0c` / `2px solid #0b0c0c` / 0px / 5px / 19px/400; tag `#d2e2f1` / `#0f385c` / 1px / `2px 8px 3px` / 19px/400 / "Completed"; service page white canvas / `#1d70b8` header / "GOV.UK" wordmark / 960px / "Check your State Pension" 36px/700 / lead 19px/400 / "Start now" `#0f7a52`; notification banner `#1d70b8` / white / `5px solid #1d70b8` / 0px / "Important" / 19px/400 — all are Components, Typography, Layout, or Content entries. Iteration Guide: `#ffdd00` focus on every interactive element; 0px radius; 2px bottom shadow only; `#1d70b8` brand/link vs `#0f7a52` action; GDS Transport required, Arial if unavailable (not Helvetica, not system-ui); visited `#54319f`; weights 700 headings / 400 body, no 500/600 — all are Foundations, Typography, or Experience application rules. §9 contributed no value that is absent elsewhere.

## Claim ledger

Claims use the source token-set keys. Surfaces: `home` = www.gov.uk / 2026-06-22; `ds` = design-system.service.gov.uk / 2026-06-22.

| claim | surface |
|---|---|
| tokens.colors.primary / brand / notification-banner | home + ds |
| tokens.colors.primary-hover / tag-default-fg | ds |
| tokens.colors.action / success / action-shadow | ds |
| tokens.colors.action-secondary / action-secondary-shadow | ds |
| tokens.colors.action-warning / error / action-warning-shadow | ds |
| tokens.colors.canvas / foreground / secondary-text / surface / surface-alt / hairline / input-border | ds |
| tokens.colors.focus / focus-text / visited / on-primary / tag-default-bg | ds |
| tokens.typography.family.sans / fallback | home + ds |
| tokens.typography.display-hero.* | home |
| tokens.typography.heading-xl / heading-l / heading-m / heading-s / body-l / body-m / caption | ds |
| tokens.spacing.xs / sm / md / base / lg / xl / xxl / section | ds (declared scale) |
| tokens.rounded.sm / md / lg / full | ds |
| tokens.shadow.button / button-secondary / button-warning / focus | ds |
| tokens.components.button-primary / button-secondary / button-warning | ds |
| tokens.components.text-input / select / tag / notification-banner / inset-text | ds |
| tokens.components.cookie-banner | home (action-button tokens) |

## Portable derived-editorial scope

Each row is one complete B2a close in `DESIGN.md` (derived editorial implementation inference / not GOV.UK-authored / including the published GOV.UK Design System documentation). 25 = 25.

| Interpretation | DESIGN.md line | Legacy source | Qualifier placement |
|---|---|---|---|
| Two-surface split as a hard domain boundary | 9 | §1 + YAML token note | adjacent, same paragraph |
| Atmosphere readings (utilitarian, institutional, anti-decoration, signature focus) | 11 | §1 | adjacent, same paragraph |
| Causal "led to" typeface / focus / zero-radius; "Nothing is decorative" | 13 | §11 | adjacent, same paragraph |
| Naming of the three primary tasks | 21 | §1 H1 + §4 CTAs + DS pages | adjacent, section head |
| Audience grouping from the two surfaces | 30 | captured surfaces, not §13 | adjacent, same paragraph |
| Distinctive-trait groupings and readings | 34 | §1 Key Characteristics | adjacent, section head |
| Causal sentences inside the five items (not marked *UI implication*) and the *UI implication* sentences | 47 | §12 | adjacent, section head |
| Justifications inside the eight Do rules | 57 | §7 Do | adjacent, section head |
| Reasons inside the eight Don'ts | 70 | §7 Don't | adjacent, section head |
| Characterizing phrases on semantic-color roles | 85 | §2 | adjacent, section head |
| 5px cadence as document-density vs 4/8 grid | 140 | §5 | adjacent, next paragraph |
| 0px as system constraint; `full: 1` reserved for tags | 149 | §4 + YAML rounded | adjacent, after shape table |
| Shadow-philosophy paragraph | 161 | §6 | adjacent, same paragraph |
| Motion contract (durations, roles, rules, signatures, reduced-motion) | 165 | §15 | adjacent, section head |
| License-row reading that GDS Transport is government-exclusive | 210 | §3 | adjacent, same cell |
| Outside-captures reading that department-service typography is outside this contract | 211 | §3 + Scope | adjacent, same cell |
| Family reading (institutional weight / Arial-only fallback) | 217 | §3 | adjacent, same bullet |
| Type-rules reading (two weights, 19px default, no tracking) | 240 | §3 Principles | adjacent, after observables |
| Favicon classed as third-party favicon service | 244 | YAML logo | adjacent, same bullet |
| Twelve-row surface state contract as the state contract | 253 | §14 | adjacent, section head |
| Every kind / applicability / reason verdict | 276 | Core §4.4 rewrite | adjacent, after the procedure |
| Whitespace policy as document density | 500 | §5 Whitespace Philosophy | adjacent, same paragraph |
| Breakpoint table as declared behavior, not a live-width observation | 510 | §8 | adjacent, after the table |
| Voice characterization (institutional clarity, directness without warmth) and the glosses "users scan, not read" / "Every word must justify its presence" | 519 | §10 | adjacent, same paragraph |
| Register table and forbidden-pattern rule as the voice contract | 553 | §10 | adjacent, after the table |

## Proof notes

- verification_v2 is not present on the source; freshness is the footer **Verified:** 2026-06-22 plus YAML `verified` / `tokens.extracted`
- `ds.type: system` is kept in the Identity table (A1c)
- `components_harvested: true`
- Uncaptured hover/disabled/loading/error/success treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete.
- Official history (2012 launch, GDS, 2018 Design System, Public Sector Bodies Accessibility Regulations 2018) is narrative context, not a token source
- `focus-visible` occurs 0 times in the source (`grep -o 'focus-visible' web/references/govuk/DESIGN.md | wc -l` = 0). The portable body keeps `#ffdd00` as a generic Focus observation and does not attach it to any `focus-visible` row (B1)
- B3 is held in full at `DESIGN.md` 184: computed transition properties, animation name, duration, easing, reduced-motion behavior, and the per-component gate
