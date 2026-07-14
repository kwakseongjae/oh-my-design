---
id: supabase
name: Supabase
country: US
category: backend-devops
homepage: "https://supabase.com"
primary_color: "#72e3ad"
logo:
  type: simpleicons
  slug: supabase
verified: "2026-07-13"
omd: "0.1"
ds:
  name: Supabase Brand Assets
  url: "https://supabase.com/brand-assets"
  type: brand
  description: Official logo and integration-button assets with trademark-use boundaries.
  og_image: "https://supabase.com/images/og/supabase-og.png"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: marketing, url: "https://supabase.com/", inspected: "2026-07-13" }
    - { id: features, kind: marketing, url: "https://supabase.com/features", inspected: "2026-07-13" }
    - { id: pricing, kind: public-pricing, url: "https://supabase.com/pricing", inspected: "2026-07-13" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://supabase.com/", captured: "2026-07-13" }
    - { id: features-live, kind: product-surface, url: "https://supabase.com/features", captured: "2026-07-13" }
    - { id: pricing-live, kind: product-surface, url: "https://supabase.com/pricing", captured: "2026-07-13" }
    - { id: brand-assets, kind: brand-asset, url: "https://supabase.com/brand-assets", captured: "2026-07-13" }
    - { id: architecture, kind: official-doc, url: "https://supabase.com/docs/guides/getting-started/architecture", captured: "2026-07-13" }
    - { id: community, kind: official-doc, url: "https://supabase.com/contribute/about", captured: "2026-07-13" }
    - { id: inter-license, kind: license, url: "https://github.com/rsms/inter", captured: "2026-07-13" }
    - { id: manrope-license, kind: license, url: "https://github.com/davelab6/manrope", captured: "2026-07-13" }
    - { id: source-code-license, kind: license, url: "https://github.com/adobe-fonts/source-code-pro", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.primary": &home { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.typography.family.ui": *home
    "tokens.typography.family.display": *home
    "tokens.typography.family.mono": *home
    "tokens.typography.display.size": *home
    "tokens.typography.display.weight": *home
    "tokens.typography.display.lineHeight": *home
    "tokens.typography.display.use": *home
    "tokens.typography.body.size": *home
    "tokens.typography.body.weight": *home
    "tokens.typography.body.lineHeight": *home
    "tokens.typography.body.use": *home
    "tokens.typography.control.size": *home
    "tokens.typography.control.weight": *home
    "tokens.typography.control.lineHeight": *home
    "tokens.typography.control.use": *home
    "tokens.spacing.xs": *home
    "tokens.spacing.sm": *home
    "tokens.spacing.md": *home
    "tokens.spacing.control": *home
    "tokens.spacing.lg": *home
    "tokens.spacing.xl": *home
    "tokens.rounded.focus": *home
    "tokens.rounded.control": *home
    "tokens.rounded.overlay": *home
    "tokens.components.green-form-submit.type": *home
    "tokens.components.green-form-submit.bg": *home
    "tokens.components.green-form-submit.fg": *home
    "tokens.components.green-form-submit.border": *home
    "tokens.components.green-form-submit.radius": *home
    "tokens.components.green-form-submit.padding": *home
    "tokens.components.green-form-submit.font": *home
    "tokens.components.green-form-submit.states": *home
    "tokens.components.green-form-submit.use": *home
    "tokens.components.dark-compact-action.type": &pricing { surface_id: pricing, source_id: pricing-live, method: computed-style, captured: "2026-07-13" }
    "tokens.components.dark-compact-action.bg": *pricing
    "tokens.components.dark-compact-action.fg": *pricing
    "tokens.components.dark-compact-action.border": *pricing
    "tokens.components.dark-compact-action.radius": *pricing
    "tokens.components.dark-compact-action.padding": *pricing
    "tokens.components.dark-compact-action.font": *pricing
    "tokens.components.dark-compact-action.states": *pricing
    "tokens.components.dark-compact-action.use": *pricing
    "tokens.components.selected-pill-tab.type": *home
    "tokens.components.selected-pill-tab.bg": *home
    "tokens.components.selected-pill-tab.fg": *home
    "tokens.components.selected-pill-tab.border": *home
    "tokens.components.selected-pill-tab.radius": *home
    "tokens.components.selected-pill-tab.padding": *home
    "tokens.components.selected-pill-tab.font": *home
    "tokens.components.selected-pill-tab.states": *home
    "tokens.components.selected-pill-tab.use": *home
    "tokens.components.public-input.type": *home
    "tokens.components.public-input.bg": *home
    "tokens.components.public-input.fg": *home
    "tokens.components.public-input.border": *home
    "tokens.components.public-input.radius": *home
    "tokens.components.public-input.padding": *home
    "tokens.components.public-input.font": *home
    "tokens.components.public-input.states": *home
    "tokens.components.public-input.use": *home
    "tokens.components.public-dialog.type": *home
    "tokens.components.public-dialog.bg": *home
    "tokens.components.public-dialog.fg": *home
    "tokens.components.public-dialog.border": *home
    "tokens.components.public-dialog.radius": *home
    "tokens.components.public-dialog.states": *home
    "tokens.components.public-dialog.use": *home
tokens:
  source: reconciled
  extracted: "2026-07-13"
  note: "Selector-backed observations from Supabase public marketing, features, and pricing routes only. No authenticated dashboard or documentation-chrome token is inferred."
  colors:
    primary: "#72e3ad"
  typography:
    family: { ui: "Inter", display: "Manrope", mono: "Source Code Pro" }
    display: { size: 46, weight: 500, lineHeight: 1.00, use: "Home h1 only; not a complete display scale" }
    body: { size: 16, weight: 450, lineHeight: 1.50, use: "Repeated public-route Inter text and list items" }
    control: { size: 14, weight: 500, lineHeight: 1.14, use: "Observed public navigation/control sample" }
  spacing: { xs: 4, sm: 8, md: 12, control: 16, lg: 24, xl: 32 }
  rounded: { focus: 2, control: 6, overlay: 8 }
  components:
    green-form-submit: { type: button, bg: "#72e3ad", fg: "oklch(0.1 0 34)", border: "1px solid oklab(0.685565 -0.144466 0.057858 / 0.75)", radius: "6px", padding: "4px 10px", font: "12px / 450 / Inter", states: "dialog-open capture context", use: "home::[data-omd-capture=\"75\"] public form submit" }
    dark-compact-action: { type: button, bg: "oklch(0.1 0 34)", fg: "oklch(0.995 0 34)", border: "1px solid oklch(0.394455 0 34)", radius: "6px", padding: "4px 10px", font: "12px / 450 / Inter", states: "focus, hover, and pressed computed snapshots", use: "pricing::[data-omd-capture=\"17\"] compact public action" }
    selected-pill-tab: { type: tab, bg: "oklch(0.995 0 34)", fg: "oklch(0.1 0 34)", border: "1px solid oklch(0.1 0 34)", radius: "3.35544e+07px", padding: "8px 32px", font: "14px / 450 / Inter", states: "selected and tab-selected", use: "home::[data-omd-capture=\"19\"] selected public tab" }
    public-input: { type: input, bg: "oklab(0.1 0 0 / 0.026)", fg: "oklch(0.1 0 34)", border: "1px solid oklch(0.1 0 34 / 0.146418)", radius: "6px", padding: "8px", font: "14px / 450 / Inter", states: "error capture; no changed error color is asserted", use: "home::[data-omd-capture=\"74\"] public email input" }
    public-dialog: { type: dialog, bg: "oklch(0.995 0 34)", fg: "oklch(0.1 0 34)", border: "1px solid oklch(0.1 0 34 / 0.0812725)", radius: "8px", states: "dialog-open", use: "home::[data-omd-interaction-capture=\"dialog-1-0\"] public dialog" }
  components_harvested: true
---

# Supabase — Design Reference

## 1. Visual Theme & Atmosphere

Supabase is an open-source Postgres development platform: its architecture documentation places a full Postgres database at the center of a project, with Auth, Storage, Realtime, Functions, and other services around it. The current public site communicates that developer platform with a bright, low-chrome interface rather than the older dark-terminal treatment in this reference. Across the captured home, features, and pricing routes, a mint `#72e3ad` action fill punctuates white and near-white surfaces; Inter supplies repeated UI text, Manrope carries the larger marketing hierarchy, and Source Code Pro appears sparingly in live public content. The result is technical but open rather than ornamental—small radii, direct controls, and lightweight overlays support dense product information without standing in for the authenticated dashboard.

The official brand-assets page separately governs logo and integration-button use: official logos are supplied in light and dark treatments, and Supabase says its trademarks and other brand elements must represent Supabase. This reference therefore keeps that identity guidance separate from the computed public-route values. It also keeps public marketing, public pricing, authenticated product UI, documentation chrome, and declared-only font assets as different evidence domains.

- **Mint action signal:** `#72e3ad` is the repeated observed public background color, not a blanket status or product-surface palette.
- **Light public chrome:** the captured menu and dialog surfaces compute to near-white Oklch values with thin neutral rules.
- **Compact geometry:** 4px, 8px, 12px, 16px, 24px, and 32px are recurring public-route measurements; the packet does not publish them as an official scale.

## 2. Color Palette & Roles

### Selector-backed public roles

- **Mint action** (`#72e3ad`): high-confidence public background color across all three captured routes; exact submit sample at `home::[data-omd-capture="75"]`.
- **Compact dark action** (`oklch(0.1 0 34)`): pricing compact-action background at `pricing::[data-omd-capture="17"]`.
- **Near-white public surfaces** (`oklch(1 0 34)` and `oklch(0.995 0 34)`): observed menu, selected-tab, and dialog backgrounds. They remain raw computed values because the packet does not provide a matching official hex scale.
- **Public foreground** (`oklch(0.1 0 34)`): observed button, input, tab, and dialog text; it is not presented as a dashboard token.

The collector also aggregates `#3fcf8e` and `#0a874f` on public routes, but no selector-backed role from this packet makes either a canonical token. The brand-assets page supplies logo rules, not a published UI color scale; no semantic success, warning, error, product-console, or documentation palette is inferred.

## 3. Typography Rules

### Evidence classes

| Evidence class | Family and boundary |
|---|---|
| Live computed public-surface use | **Inter** is loaded/high, has 752 visible uses, and is backed by Supabase-hosted WOFF2 sources. It appears in body, buttons, cards, dialogs, inputs, lists, menus, tabs, text, and toggles. |
| Live computed public-surface use | **Manrope** is loaded/high, has 150 visible uses, and is backed by Supabase-hosted WOFF2 sources. It appears in public h1–h4, body, and buttons. |
| Live computed public-surface use | **Source Code Pro** is loaded/high, has 13 visible uses and seven Supabase-hosted source URLs. Its captured uses are limited to body, button, and h3 roles; this is not a complete code-style scale. |
| System stack | `ui-sans-serif` has 407 uses but is an operating-system stack, not a Supabase-family substitute. |
| Declared-only | `Inter Fallback` and the KaTeX family declarations have zero visible captured uses. They are not typography-family tokens. |
| Documentation boundary | Some font source URLs are served from Supabase’s docs asset host, but no documentation route or documentation-chrome computed sample is in this packet. An asset URL alone does not populate documentation typography. |

### Captured public hierarchy

| Role | Family | Size | Weight | Line height | Scope |
|---|---|---:|---:|---:|---|
| Home h1 | Manrope | 46px | 500 | 46px | `home::h1` only |
| Public large heading | Manrope | 34px | 600 | 37.7778px | home h2/h3 samples |
| Repeated body/list text | Inter | 16px | 450 | 24px | public routes |
| Navigation/control sample | Inter | 14px | 500 | 16px | public controls |
| Compact action label | Inter | 12px | 450 | 16px | home/pricing compact actions |

### Official font and licence context

Inter’s official repository describes it as screen-oriented and licensed under the SIL Open Font License. The Manrope project identifies Michael Sharanda as designer and uses the SIL Open Font License. Adobe’s official Source Code Pro repository describes a monospaced family for UI and coding environments under OFL-1.1. Those licences explain the upstream font families; Supabase’s loaded WOFF2 URLs prove public-route use, not a grant to redistribute Supabase’s served files. If a target cannot load the family legitimately, mark the specimen unavailable rather than rendering a system substitute as Inter, Manrope, or Source Code Pro.

## 4. Components

All values below retain their public-route selector and state boundary. The collector reports four interaction kinds and 12 interactions: menu, dialog, tab, and form-error captures. Those records prove the listed expanded/open/selected/error contexts only; unobserved variants are omitted.

### Public actions

**Green form submit**
- Background: `#72e3ad`
- Text: `oklch(0.1 0 34)`
- Border: `1px solid oklab(0.685565 -0.144466 0.057858 / 0.75)`
- Radius: `6px`
- Padding: `4px 10px`
- Font: `12px / 450 / Inter`
- Dialog-open: captured context at `home::[data-omd-capture="75"]`; no general dialog-button contract is inferred
- Use: Public home form submit

**Dark compact action**
- Background: `oklch(0.1 0 34)`
- Text: `oklch(0.995 0 34)`
- Border: `1px solid oklch(0.394455 0 34)`
- Radius: `6px`
- Padding: `4px 10px`
- Font: `12px / 450 / Inter`
- Hover: computed snapshot recorded for `pricing::[data-omd-capture="17"]`
- Pressed: computed snapshot recorded for `pricing::[data-omd-capture="17"]`
- Focus: computed snapshot recorded for `pricing::[data-omd-capture="17"]`
- Use: Compact public pricing action

### Selected public tab

**Selected pill tab**
- Background: `oklch(0.995 0 34)`
- Text: `oklch(0.1 0 34)`
- Border: `1px solid oklch(0.1 0 34)`
- Radius: `3.35544e+07px`
- Padding: `8px 32px`
- Font: `14px / 450 / Inter`
- Selected: `home::[data-omd-capture="19"]` is `aria-selected="true"`
- Use: Public home tab; this does not establish a general tab system

### Public form field

**Email input**
- Background: `oklab(0.1 0 0 / 0.026)`
- Text: `oklch(0.1 0 34)`
- Border: `1px solid oklch(0.1 0 34 / 0.146418)`
- Radius: `6px`
- Padding: `8px`
- Font: `14px / 450 / Inter`
- Error: an error capture is recorded at `home::[data-omd-interaction-capture="form-error-5-0"]`; no changed error color is asserted
- Use: Public home email input at `home::[data-omd-capture="74"]`

### Public overlays

**Navigation menu — expanded**
- Background: `oklch(1 0 34)`
- Text: `oklch(0.394455 0 34)`
- Border: `1px solid oklch(0.1 0 34 / 0.144163)`
- Radius: `6px`
- Padding: `4px`
- Font: `16px / 450 / Inter`
- Expanded: menu-open capture at `home::[data-omd-interaction-capture="menu-0-0"]`
- Use: Public navigation menu, not authenticated application navigation

**Public dialog — open**
- Background: `oklch(0.995 0 34)`
- Text: `oklch(0.1 0 34)`
- Border: `1px solid oklch(0.1 0 34 / 0.0812725)`
- Radius: `8px`
- Dialog-open: captured at `home::[data-omd-interaction-capture="dialog-1-0"]`
- Use: Public dialog; no padding or shadow value is asserted because it was not measured in the representative claim

## 5. Layout Principles

The packet is three desktop captures at 1440×900. It records 4px, 8px, 12px, 16px, 24px, and 32px as recurring public-route spacing values, with 8px most frequent. These observations support compact controls and more generous public-section rhythm, but they do not establish mobile breakpoints, authenticated-dashboard density, or a published Supabase grid.

## 6. Depth & Elevation

The captured public menu has two small neutral shadows (`rgba(0, 0, 0, 0.1) 0px 4px 6px -1px` and `rgba(0, 0, 0, 0.1) 0px 2px 4px -2px`); the compact action, selected pill tab, and representative input report no shadow. That is evidence for these public overlay/control instances only, not a reusable elevation scale.

## 7. Do's and Don'ts

### Do

- Use `#72e3ad` only where a selector-backed public action relationship is appropriate.
- Preserve Inter, Manrope, and Source Code Pro as separate loaded families when the target has legitimate access to them.
- Keep raw Oklch/Oklab values as raw computed evidence instead of inventing a hex token scale.
- Retain selector and state provenance when reusing an observed public component pattern.

### Don't

- Do not recreate the obsolete dark/Circular system from the prior snapshot.
- Do not convert `ui-sans-serif`, `Inter Fallback`, or declared-only KaTeX faces into Supabase UI typography.
- Do not move marketing/pricing/menu/dialog values into an authenticated dashboard, native application, or documentation chrome without evidence from that surface.
- Do not invent unobserved component variants, semantic status colors, responsive rules, or interaction behavior.

## 8. Responsive Behavior

No responsive viewport was supplied. The three captures are all 1440×900, so no breakpoint, mobile navigation, stacking, or touch-target behavior is documented here.

## 9. Agent Prompt Guide

Use this reference as a public Supabase-web direction, not as a dashboard clone: prefer the observed mint action, light raw-computed surfaces, Inter UI rhythm, and Manrope display hierarchy. Keep the public-route selector boundary visible in implementation notes. Do not add a dark terminal canvas, Circular, generic product-console widgets, or fonts that the target cannot load.

## 10. Voice & Tone

Supabase’s official architecture and contribution pages use direct, technically specific language: Postgres stays explicit, open source is an operating choice, and the community invitation is practical—contribute code, documentation, or help. Prefer short capability-led CTAs such as “Start your project” and “Build in a weekend, scale to millions,” both visible on official public pages.

## 11. Brand Narrative

Supabase presents a Postgres-centered platform rather than an abstraction over it: its architecture documentation says each project contains several tools around a single Postgres instance, and explains that the company chose open-source tools that are scalable and approachable. Its company page frames the present organization as a large open-source community, while the contribution page describes a mission of helping developers succeed through work in the open. This is product and culture context, not evidence that public marketing values describe every product surface.

## 12. Principles

1. **Keep Postgres legible.** *UI implication:* describe database capability directly rather than masking it behind generic backend language.
2. **Work in the open.** *UI implication:* make contribution, documentation, and community paths concrete.
3. **Make the platform approachable.** *UI implication:* public information architecture should let users begin small and find deeper technical detail when needed.

## 13. Personas

*Stakeholder groups below are source-backed categories, not fictional people.*

- **Developers new to Postgres:** the architecture guidance says they can start small and grow into the platform.
- **Postgres veterans:** the same guidance identifies users who want full Postgres access and familiarity.
- **Open-source contributors and helpers:** the contribution page invites people to contribute code, improve documentation, and help developers across community channels.

## 14. States

Only the public form-error state is captured: `home::[data-omd-interaction-capture="form-error-5-0"]` preserves the input’s raw background, border, radius, padding, and Inter text values. The packet also captures public menu-open, dialog-open, and selected-tab contexts. It does not supply empty, loading, success, disabled, or product-console state treatments, so none is invented.

## 15. Motion & Easing

The public control class names expose `duration-200` and transition utilities, but the packet does not contain a measured easing curve or a motion scale. Preserve that boundary; do not promote an inferred motion-token system.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://supabase.com/, https://supabase.com/features, https://supabase.com/pricing, https://supabase.com/brand-assets, https://supabase.com/docs/guides/getting-started/architecture, https://supabase.com/contribute/about
**Tier 2 sources:** https://getdesign.md/supabase (one editorial Supabase record; no token provenance used); Refero query attempted at https://styles.refero.design/?q=Supabase and was unavailable to built-in open, with no indexed Supabase record returned by built-in search.
**Resolution note:** Replaced the legacy dark/Circular snapshot with selector-backed 2026-07-13 public-route evidence. Marketing, features, pricing, unauthenticated overlays, documentation assets, and authenticated product UI remain separate domains.
**Conflicts unresolved:** none
