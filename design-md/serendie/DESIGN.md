# Serendie Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

### Visual Theme & Atmosphere

Serendie is Mitsubishi Electric's digital-platform brand, and Serendie Design System is the design language its DX Innovation Center publishes for it. The atmosphere is a calm institutional blue on white with generously rounded action shapes — a deep `#0650a0` fill on a fully-rounded 40px pill, white surfaces, and a near-navy `#073165` for text on tinted panels. Nothing in the palette shouts; the contrast work is done by one saturated blue against a large amount of white and a warm grey (`#efeeeb`) used for recessed surfaces.

**Key characteristics:**
- Impression blue `#0a69cf` with a darker `#0650a0` carrying the default theme's actions
- Fully-rounded actions (`9999px`) at 40px height — no square buttons in the observed default theme
- A three-tier token architecture published as CSS custom properties: 184 reference, 158 system, 31 web-system
- Five themes named for Japanese traditional colours, with KONJO (紺青) as the default

**One thing this reference must not overstate.** Serendie Design System is deliberately skinnable. Its own About page describes 着せ替え型の設計 — a dress-up design — and says the five default themes follow the *Serendie brand* while each Mitsubishi Electric business domain may add custom themes that override Serendie UI, with the system acting as 各事業デザインシステムの骨格 ("the skeleton of each business's design system"). Everything documented here is the Serendie brand's own default expression. It is not a description of how every Mitsubishi Electric product looks.

### Brand Narrative

Serendie Design System is published by 三菱電機株式会社DXイノベーションセンター (Mitsubishi Electric's DX Innovation Center). Its stated aim is to be a foundation for producing experimental new services quickly while staying close to Mitsubishi Electric's manufacturing culture — the About page says the assets it provides are centred on what is immediately effective for digital product development, and that it is a design system for light, flexible product-making rather than one pursuing only completeness and robustness.

The GitHub organisation describes it in one line: "An open-source design system by Mitsubishi Electric".

### Principles

Three, stated on the About page:

- **Adaptive** — aims to fit business domains from the home to space (家庭から宇宙まで) and every phase from validation to productisation, by providing basic assets that prioritise generality.
- **Borderless** — a shared asset for everyone connected to Mitsubishi Electric, usable freely without permission or approval, inside or outside the company.
- **Circulative** — never finished; analysis of usage and continuous improvement are cycled, and the work is not closed to one team.

### Personas

Not asserted. The documentation addresses designers and developers by role, but no persona research is published and none is invented here.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=5 lang=en -->
### Primary tasks

- Read a design token from the published three-tier set

- Pick a theme, or add a business-specific one over the defaults

- Build a screen from the published component set

- Follow the design or development track under Get Started

- Sync tokens between Figma and code
<!-- design-md:claim-end -->

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic tokens

- **color.canvas**: `#ffffff`
- **color.on-primary**: `#ffffff`
- **color.on-tertiary**: `#073165`
- **color.primary**: `#0a69cf`
- **color.primary-hover**: `#024288`
- **color.secondary**: `#0650a0`
- **color.surface-dim**: `#efeeeb`
- **color.surface-dimmest**: `#afaeaa`
- **color.tertiary**: `#eff2fc`
- **radius.action**: `9999px`
- **radius.default**: `9999px`

### Color Palette & Roles

Observed as CSS custom properties on the live site under the `--web-system-color-*` namespace, which is the layer a consumer binds to.

| Role | Value | Token |
|---|---|---|
| Primary | `#0a69cf` | `impression-primary` |
| On primary | `#ffffff` | `impression-onPrimary` |
| Secondary (default-theme action) | `#0650a0` | `impression-secondary` |
| Tertiary / subtle | `#eff2fc` | `impression-tertiary`, `impression-subtle` |
| On tertiary | `#073165` | `impression-onTertiary` |
| Surface | `#ffffff` | `component-surface` |
| On surface | `#073165` | `component-onSurface` |
| Surface dim | `#efeeeb` | `component-surfaceDim` |
| Surface dimmest | `#afaeaa` | `component-surfaceDimmest` |

A further data-visualisation ramp is published under `mvShape-*` (`#428cfe`, `#bfcefc`, `#f84258`, `#f2dbc0`, `#aeead5` and others). It is recorded here as observed but is not a UI role set.

### Depth & Elevation

Four published shadow levels, as `drop-shadow` filters:

- level 1 — `0px 1px 2px 0px #0000004D`
- level 2 — `0px 1px 4px 0px #00000033`
- level 3 — `0px 2px 8px 0px #00000033`
- level 4 — `0px 4px 12px 0px #00000033`

Elevation is expressed as a filter rather than a box-shadow, and the opacity drops from 30% at level 1 to 20% for levels 2–4 while the blur grows.

### Motion & Easing

Not measured. No motion tokens appear in the observed custom-property set, and none are asserted.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Type roles

| Role | Usage | Family | Size | Weight | Line height |
|---|---|---|---|---|---|
| display | declared type role: display |  | 64px | 400 | 1.6 |
| heading | declared type role: heading |  | 32px | 400 | 1.6 |
| title | declared type role: title |  | 18px | 700 | 1.6 |
| body | declared type role: body | Roboto | 14px | 400 | 1.6 |
| label | declared type role: label |  | 13px | 400 | 1 |

### Typography Rules

First-party, from the typography foundation page: 「Serendieブランドは、欧文フォント「Roboto」、和文フォント「Noto Sans JP」を採用しています。Serendie Design Systemにおいてもそれを踏襲しつつ、等幅フォント「Noto Sans Mono」を追加しています」 — the Serendie brand adopts **Roboto** for Latin and **Noto Sans JP** for Japanese, and the design system adds **Noto Sans Mono**. All three are open source and free for commercial use. The page records an update date of 2024/11/1.

The system publishes a paired compact/expanded scale. Expanded values, observed as tokens:

| Role | Weight / size / line-height |
|---|---|
| display-medium | 400 · 64px · 1.6 |
| display-small | 400 · 43px · 1.6 |
| headline-large | 400 · 32px · 1.6 |
| headline-medium | 400 · 26px · 1.6 |
| title-large | 700 · 18px · 1.6 |
| title-medium | 700 · 16px · 1.6 |
| body-large | 400 · 16px · 1.6 |
| body-medium | 400 · 14px · 1.6 |
| label-large | 400 · 13px · 1 |

Weight is binary in the reference layer: 400 regular, 700 bold. Line-height is a named scale — none 1, tight 1.4, normal 1.6, relaxed 1.8.

<!-- design-md:section components-states -->
## 4. Components & States

### Component Stylings

Measured on the design-system home in the default KONJO theme, with the pointer parked between reads so a sticky hover could not be recorded as another state.

| Component | Rest | Hover / pressed | Geometry |
|---|---|---|---|
| Theme action (button) | bg `#0650a0`, fg `#ffffff` | `#024288` | radius `9999px`, height `40px`, padding `0 12px 0 16px`, 16px/400 |

Only one component is recorded with measured values. The documentation site publishes a larger set (accordion, list, search and others), and the button page itself has sections for サイズ, バリエーション, アイコン付きボタン and 状態. Those are not transcribed here because they were not measured in this pass, and a documented variant is not an observation.

### States

Measured for the theme action only: rest `#0650a0` → hover `#024288`, with pressed matching hover. Focus was not separately distinguishable from hover in the observed component, and no focus-ring value is asserted. The button documentation page carries a 状態 section that was not transcribed in this pass.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

### Layout Principles

Spacing is a published scale rather than ad-hoc values: 0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80px, named none through sixExtraLarge. The typographic scale is paired compact/expanded, which is the system's mechanism for density rather than a separate spacing mode.

### Responsive Behavior

Not measured in this pass. The system publishes a compact/expanded typographic pairing which implies a density switch, but no breakpoint values were observed and none are asserted here.

<!-- design-md:section content-locales -->
## 6. Content & Locales

### Voice & Tone

The documentation writes to practitioners in plain Japanese and states its own limits — it names what the system is for, and where a business domain should keep its own components instead. It does not market itself.

<!-- design-md:section governance -->
## 7. Governance

<!-- design-md:claim authority kind=evidence-backed-reconstruction lang=en -->
### Authority

This document is an evidence-backed reconstruction, not authority for an unrelated target project.
<!-- design-md:claim-end -->

<!-- design-md:claim application-priority order=prompt-fact,repository-fact,system-contract,reference-inspiration lang=en -->
### Application priority

1. Direct user instructions for the requested scope.
2. Repository facts.
3. This system contract.
4. Reference inspiration.
<!-- design-md:claim-end -->

<!-- design-md:claim unknowns policy=absent-at-smallest-unresolved-boundary lang=en -->
### Unknowns

Omit only the smallest unresolved value or group. Do not replace it with a plausible default.
<!-- design-md:claim-end -->

<!-- design-md:claim changes policy=review-record-validate-before-adoption lang=en -->
### Changes

Record, review, and validate changes before adoption.
<!-- design-md:claim-end -->

### Do's and Don'ts

- **Do** bind to the `--web-system-*` layer. The reference and system tiers exist so that the binding layer can be re-themed without touching consumers.
- **Do** treat the five themes as the brand's own range, not as decoration — they are named for Japanese traditional colours (KONJO 紺青, ASAGI 浅葱, KURIKAWA 栗皮, SUMIRE 菫, TSUTSUJI 躑躅), with a dark variant of KONJO.
- **Don't** read this reference as Mitsubishi Electric's corporate identity. Serendie is one platform brand inside the company, and business domains layer their own visual identity on top of this system.
- **Don't** assume a square action. Every observed action in the default theme is fully rounded.

### Agent Prompt Guide

Ask for "Serendie, default KONJO theme": deep blue `#0650a0` actions, fully-rounded pills at 40px, white surfaces with `#eff2fc` tinted panels, `#073165` text on tint, Roboto with Noto Sans JP for Japanese. Say "expanded scale" for the 64/43/32/18/16/14/13 ramp. If a brief needs a different accent, say "custom theme over Serendie" rather than changing the token values — re-theming is how this system is meant to be adapted.
