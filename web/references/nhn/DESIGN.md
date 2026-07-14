---
id: nhn
name: NHN
display_name_kr: NHN
country: KR
category: saas
homepage: "https://www.nhn.com/"
primary_color: "#212126"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=nhn.com&sz=128"
verified: "2026-07-13"
added: "2026-06-17"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: corporate, url: "https://www.nhn.com/", inspected: "2026-07-13" }
    - { id: services, kind: corporate-services, url: "https://www.nhn.com/services?tab=technology", inspected: "2026-07-13" }
    - { id: ir, kind: corporate-ir, url: "https://www.nhn.com/ir?tab=financials&subTab=consolidatedFinancial", inspected: "2026-07-13" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.nhn.com/", captured: "2026-07-13" }
    - { id: services-live, kind: product-surface, url: "https://www.nhn.com/services?tab=technology", captured: "2026-07-13" }
    - { id: ir-live, kind: product-surface, url: "https://www.nhn.com/ir?tab=financials&subTab=consolidatedFinancial", captured: "2026-07-13" }
    - { id: ci-story, kind: official-doc, url: "https://inside.nhn.com/corp/245", captured: "2026-07-13" }
    - { id: type-story, kind: official-doc, url: "https://inside.nhn.com/corp/260", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.primary": &home { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.foreground": *home
    "tokens.colors.muted": *home
    "tokens.colors.subtle": &services { surface_id: services, source_id: services-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.hint": &ir { surface_id: ir, source_id: ir-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.surface": *services
    "tokens.colors.canvas": *home
    "tokens.colors.hairline": *home
    "tokens.colors.on-primary": *home
    "tokens.typography.family.ui": *home
    "tokens.typography.family.display-kr": *home
    "tokens.typography.body.size": *home
    "tokens.typography.body.weight": *home
    "tokens.typography.body.lineHeight": *home
    "tokens.typography.body.use": *home
    "tokens.typography.nav.size": *home
    "tokens.typography.nav.weight": *home
    "tokens.typography.nav.lineHeight": *home
    "tokens.typography.nav.use": *home
    "tokens.typography.label.size": *services
    "tokens.typography.label.weight": *services
    "tokens.typography.label.lineHeight": *services
    "tokens.typography.label.use": *services
    "tokens.typography.title.size": *home
    "tokens.typography.title.weight": *home
    "tokens.typography.title.lineHeight": *home
    "tokens.typography.title.use": *home
    "tokens.spacing.xs": *home
    "tokens.spacing.sm": *home
    "tokens.spacing.md": *home
    "tokens.spacing.base": *home
    "tokens.spacing.lg": *home
    "tokens.spacing.xl": *home
    "tokens.spacing.xxl": *home
    "tokens.rounded.none": *home
    "tokens.rounded.pill": *services
    "tokens.shadow.none": *home
    "tokens.components.previous-control.type": *services
    "tokens.components.previous-control.fg": *services
    "tokens.components.previous-control.radius": *services
    "tokens.components.previous-control.font": *services
    "tokens.components.previous-control.states": *services
    "tokens.components.previous-control.use": *services
tokens:
  source: reconciled
  extracted: "2026-07-13"
  note: "Corporate-web evidence only: three public NHN corporate/disclosure surfaces. Colors and components below are live computed observations; no authenticated product UI or documentation chrome was captured."
  colors:
    primary: "#212126"
    foreground: "#36363d"
    muted: "#57575b"
    subtle: "#62626a"
    hint: "#aaaaae"
    surface: "#f8f8f8"
    canvas: "#ffffff"
    hairline: "#e5e7eb"
    on-primary: "#ffffff"
  typography:
    family: { ui: "Pretendard Variable", display-kr: "Main Pretendard Variable" }
    body: { size: 16, weight: 400, lineHeight: 1.50, use: "Observed corporate body/list text" }
    nav: { size: 16, weight: 500, lineHeight: 1.75, use: "Observed primary navigation action" }
    label: { size: 14, weight: 500, lineHeight: 1.57, use: "Observed secondary action and label" }
    title: { size: 20, weight: 700, lineHeight: 1.50, use: "Observed Korean heading" }
  spacing: { xs: 4, sm: 7, md: 8, base: 10, lg: 22, xl: 32, xxl: 80 }
  rounded: { none: 0, pill: 50 }
  shadow:
    none: "none"
  components:
    previous-control: { type: button, fg: "#212126", radius: "0px", font: "16px / 400 Pretendard Variable", states: "disabled opacity 0.4", use: "Observed previous-navigation control on the services surface" }
  components_harvested: true
---

# Design System Inspiration of NHN

## 1. Visual Theme & Atmosphere

NHN is a Korean IT group whose public corporate presence connects a long Hangame-era history with businesses in games, payments and advertising, technology, commerce, and content. Its current brand expression is built around **Weaving New Play**: NHN’s own rebrand story explains the phrase as a move from a simple connection toward a more multidirectional act of weaving. The 2024 CI then made that idea tangible through folded-paper forms, a 27-degree fold motif, and a decision to abandon a single fixed brand colour in favour of achromatic identity. [NHN history](https://www.nhn.com/company?tab=about) and [official CI story](https://inside.nhn.com/corp/245) provide that context.

The supplied July 2026 runtime evidence is limited to three public corporate surfaces: the main site, a services listing, and an investor-relations financial page. Across those surfaces, the visible interface is restrained and nearly monochrome: `#212126` is the principal ink, `#36363d` and `#57575b` carry hierarchy, and `#f8f8f8` provides the recurring soft surface. The collector observed no shadows and only zero-radius navigation/action controls plus a 50px pill on one low-confidence services control. These are corporate-web observations, not a claim about NHN’s separate customer products or their documentation interfaces.

**Key Characteristics:**
- Official brand rationale: connection reinterpreted as multidirectional weaving
- Corporate-web palette: near-black ink with neutral grey hierarchy and white canvas
- Flat visual treatment: the captured components report `box-shadow: none`
- Live UI typography: Pretendard Variable; Main Pretendard Variable appears in Korean heading roles
- Official NHN Sans is a distinct brand asset, not a live-family token for these captured pages

## 2. Color Palette & Roles

### Live corporate-web colors
- **Primary Ink** (`#212126`): Observed text and transparent action labels across all three captured surfaces.
- **Foreground** (`#36363d`): Observed corporate primary-navigation list item text.
- **Muted** (`#57575b`): Most frequent observed secondary/list text colour.
- **Subtle** (`#62626a`): Secondary action/label text on the services surface.
- **Hint** (`#aaaaae`): Low-emphasis list text on the IR surface.
- **Surface** (`#f8f8f8`): Recurrent neutral background, including the observed services pill control.
- **Canvas / On Ink** (`#ffffff`): Observed page background and contrast text.
- **Hairline** (`#e5e7eb`): Computed border colour recurring in the raw collector output.

### Brand boundary

NHN’s official CI story says the company chose achromatic brand colour rather than a single colour so the identity could accommodate a variety of combinations. That supports the neutral brand narrative; it does not promote colours from affiliate product surfaces into this corporate-web token set. [Official CI story](https://inside.nhn.com/corp/245)

## 3. Typography Rules

### Evidence classes

- **Live computed + FontFaceSet corroborated — `Pretendard Variable`:** 370 observed uses across body, buttons, cards, headings, and lists. The bundle records 92 NHN-hosted subset source URLs under `static.nhnent.com`.
- **Live computed + FontFaceSet corroborated — `Main Pretendard Variable`:** 32 observed uses, including Korean `h2`/`h3` roles. The collector found it loaded, but did not retain an individual source URL; retain it as a live family with that source-url limitation.
- **Live internal family, public-name unresolved — `__Poppins_1848dd`:** two heading uses and NHN-hosted font assets were observed. The collector does not establish that this internal runtime name is the public Poppins family, so `Poppins` is not a typography token.
- **Official distributed brand asset / official product-use — `NHN Sans`:** NHN’s brand-resource page presents it as the company’s exclusive typeface, and the official typeface story says it is intended for official communications. It was not observed as a loaded family on the three captured surfaces, so it is not a live UI token or specimen here. [Brand resource](https://www.nhn.com/en-US/company?subTab=brandResource&tab=brand) · [Typeface story](https://inside.nhn.com/corp/260)
- **Declared-only:** `__Poppins_Fallback_1848dd` and `swiper-icons` appeared without visible use; neither is promoted.

### Observed hierarchy

| Role | Family | Size | Weight | Line Height | Evidence boundary |
|------|--------|------|--------|-------------|-------------------|
| Corporate body/list | Pretendard Variable | 16px | 400 | 24px | Repeated across all captured surfaces |
| Primary action | Pretendard Variable | 16px | 500 | 28px | Transparent action-label control |
| Secondary label | Pretendard Variable | 14px | 500 | 22px | Services controls/labels |
| Korean title | Main Pretendard Variable | 20px | 700 | 30px | Captured `h3` role |
| Large Korean display | Main Pretendard Variable | 32px | 800 | 48px | One captured `h2` role |

## 4. Component Stylings

### Corporate navigation

**Primary list item**
- Text: `#36363d`
- Radius: 0px
- Padding: 0px 80px 0px 0px
- Font: 16px / 400 / Pretendard Variable
- Use: Observed corporate primary-navigation list item (`home::li`; also present on services and IR surfaces).

**Secondary list item**
- Text: `#57575b`
- Radius: 0px
- Padding: 7.008px 0px
- Font: 16px / 400 / Pretendard Variable
- Use: Observed corporate secondary/list item (`home::li`; also present on services and IR surfaces).

### Actions

**Transparent action label**
- Text: `#212126`
- Radius: 0px
- Font: 16px / 500 / Pretendard Variable
- Use: Observed transparent action control (`home::[data-omd-capture="45"]`) across the corporate surfaces.

**Secondary label action**
- Text: `#62626a`
- Radius: 0px
- Font: 14px / 500 / Pretendard Variable
- Use: Observed services-surface control (`surface-2::[data-omd-capture="49"]`).

**Previous control**
- Text: `#212126`
- Radius: 0px
- Font: 16px / 400 / Pretendard Variable
- Disabled: Observed disabled instance has transparent background and `opacity: 0.4` (`surface-2::[data-omd-capture="37"]`).
- Use: Observed previous-navigation control on the services surface.

### Compact pill

**Services pill**
- Background: `#f8f8f8`
- Text: `#62626a`
- Radius: 50px
- Padding: 4px 8px 4px 14px
- Font: 14px / 500 / Pretendard Variable
- Use: One low-confidence observed services control (`surface-2::[data-omd-capture="43"]`); do not generalize it to other NHN surfaces.

---

**Verified:** 2026-07-13
**Tier 1 sources:** https://www.nhn.com/ (corporate marketing surface, raw collector); https://www.nhn.com/services?tab=technology (corporate services surface, raw collector); https://www.nhn.com/ir?tab=financials&subTab=consolidatedFinancial (IR disclosure surface, raw collector); https://www.nhn.com/company?tab=about (official context); https://inside.nhn.com/corp/245 (official CI narrative); https://inside.nhn.com/corp/260 (official typeface narrative)
**Tier 2 sources:** https://getdesign.md/nhn (attempted; retrieval error in this run); https://styles.refero.design/?q=nhn (attempted; retrieval error in this run)
**Conflicts unresolved:** none

## 5. Layout Principles

The collected evidence supports a flat corporate information layout: transparent navigation/actions, neutral `#f8f8f8` surface moments, and a white canvas. Measured spacing clusters include 4, 7, 8, 10, 22, 32, and 80px; they are observations rather than a complete spacing scale. No product-app layout or documentation layout was captured.

## 6. Depth & Elevation

All captured representative components report `box-shadow: none`. Separation in the captured corporate UI comes from text hierarchy, white/neutral surfaces, and the recurring `#e5e7eb` computed border colour. No elevation ramp is inferred beyond that evidence.

## 7. Do's and Don'ts

### Do
- Keep the corporate chrome neutral and let the ink-to-grey text hierarchy do the work.
- Use the observed flat treatment: no shadow on captured corporate components.
- Keep `Pretendard Variable` for live UI/body roles represented in this evidence.
- Treat NHN Sans as an official communication asset until a target surface proves live use.
- Keep the one observed disabled previous-control treatment tied to its services-surface context.

### Don't
- Promote affiliate-product colours or components into the NHN corporate reference without direct evidence.
- Rename `__Poppins_1848dd` to Poppins in a token set without a reliable public-family mapping.
- Invent hover, focus, pressed, error, or success variants: the supplied collector has zero interaction captures.
- Generalize the low-confidence services pill into a global button style.

## 8. Responsive Behavior

The supplied collector used only a 1440×900 viewport. Responsive breakpoints, mobile navigation, and touch-target behaviour are unresolved and intentionally omitted.

## 9. Agent Prompt Guide

Use this reference only for an NHN-like **corporate information surface**: white canvas, near-black `#212126` text, a muted `#36363d` / `#57575b` hierarchy, `#f8f8f8` neutral surface moments, Pretendard Variable body/UI text, and no shadows. Do not use it as a substitute for an NHN affiliate product, authenticated app, or documentation system.

## 10. Voice & Tone

NHN’s first-party language centres on connection and future-facing expansion: the official slogan is “Weaving New Play,” while the company’s rebrand story describes a shift from simple connection to multidirectional weaving. Corporate copy should stay explanatory and composed rather than adding product-marketing superlatives. [Official slogan story](https://inside.nhn.com/corp/164)

## 11. Brand Narrative

NHN traces its history to Hangame Communication and the Hangame online-game portal, then describes a modern global IT group working across multiple business areas. Its official timeline records the 2023 public introduction of “Weaving New Play”; its 2024 CI story explains the subsequent folded-paper identity, the 27-degree fold, and the achromatic colour decision. [Official history](https://www.nhn.com/company?tab=about) · [Official CI story](https://inside.nhn.com/corp/245)

## 12. Principles

1. **Connection becomes weaving.** Official rebrand material frames the idea as multidirectional connection. *UI implication:* organise diverse corporate information under one calm, consistent structure.
2. **Achromatic identity leaves room for variety.** NHN says it abandoned a single colour to open varied combinations. *UI implication:* keep corporate chrome neutral unless a directly observed surface provides a different role.
3. **CI and typography are controlled brand assets.** NHN asks that brand resources not be arbitrarily changed. *UI implication:* do not substitute NHN Sans, its CI, or unverified font-family names as though they were live tokens.

## 13. Personas

[FILL IN] NHN has not supplied first-party audience-segment or persona documentation in the sources reviewed for this reference. Do not fabricate named user personas from the corporate, services, or IR surfaces.

## 14. States

The only state recorded by the supplied collector is a **disabled** previous-navigation control on the services surface: transparent background, `#212126` text, and `opacity: 0.4`. Hover, focus, pressed, loading, error, empty, and success states were not captured and are unresolved.

## 15. Motion & Easing

No motion durations, easing curves, or interaction transitions were captured. The raw class names are not sufficient evidence to publish motion tokens; leave motion unresolved for this reference.
