---
name: Airbnb
colors:
  primary: '#ff385c'
  canvas: '#ffffff'
  foreground: '#222222'
  secondary: '#6a6a6a'
  disabled: '#c1c1c1'
  surface: '#f2f2f2'
  surface-soft: '#ebebeb'
  divider: '#dddddd'
typography:
  title:
    fontSize: 22px
    fontWeight: 500
    lineHeight: 1.18
    use: Repeated public marketplace section heading
  body:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    use: Marketplace body and list text
  action:
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.29
    use: Marketplace tabs and compact actions
  reading:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    use: Help article body and long-form list content
  newsroom:
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.56
    use: Newsroom editorial copy
rounded:
  control: 8px
  search: 32px
  card: 12px
  full: 9999px
spacing:
  xs: 4
  sm: 8
  md: 16
  lg: 24
  xl: 32
components:
  hosting-action:
    type: button
    backgroundColor: transparent
    textColor: '#222222'
    rounded: 20px
    padding: 11px 12px
    height: 40px
    typography: 14px / 500
    states: pressed observed
    use: Current public hosting entry action
  category-tab:
    type: tab
    backgroundColor: transparent
    textColor: '#6a6a6a'
    rounded: 8px
    padding: 0 16px
    typography: 14px / 500
    states: 'selected and tab-selected observed; selected text resolves to #222222'
    use: Current public category navigation
  icon-action:
    type: button
    backgroundColor: '#f2f2f2'
    textColor: '#222222'
    rounded: 9999px
    size: 28px
    states: hover and pressed observed
    use: Current compact circular marketplace control
  disabled-icon-action:
    type: button
    backgroundColor: '#f2f2f2'
    textColor: '#c1c1c1'
    rounded: 9999px
    size: 28px
    states: disabled, focus, hover, and pressed captured
    use: Disabled compact circular marketplace control
  search-shell:
    type: input
    backgroundColor: '#ebebeb'
    textColor: '#222222'
    rounded: 32px
    height: 66px
    typography: 14px / 500
    states: hover and pressed observed on the shell; input remains transparent
    use: Current public marketplace search shell
  help-list-row:
    type: listItem
    backgroundColor: transparent
    textColor: '#222222'
    border: '0 0 1px #dddddd'
    rounded: 0px
    padding: 24px 0
    typography: 14px / 400 / 20.02px
    use: Current official Help article list row
fonts:
  roles:
    ui: Airbnb Cereal VF
    editorial: Cereal
---

# Design System Inspiration of Airbnb

## Overview

### Visual Theme & Atmosphere

Airbnb is a global marketplace for homes, experiences, and services, built around the idea that travel can be organized through people and place rather than a conventional hotel inventory. Its current public product remains photography-led: a white canvas, near-black type, restrained gray controls, and compact category navigation leave most of the emotional work to destinations, hosts, and activities. Rausch pink (`#ff385c`) still appears as an identity accent on the current marketplace, but neutral structure carries the majority of the inspected interface.

The 2026 product story broadens that marketplace. Airbnb's official Summer Release introduces new search and planning work across homes, experiences, services, and adjacent travel needs, while the Help surface continues to explain the platform as a connected set of guest, host, and service-provider journeys. This evolution makes evidence boundaries especially important: marketplace UI, Newsroom editorial presentation, Help content, official brand assets, and native app behavior are related parts of Airbnb, but they are not interchangeable token sources.

Airbnb Cereal is the strongest repeatable visual signature. `Airbnb Cereal VF` was loaded and used across 973 visible marketplace and Help elements; the Newsroom loaded its `Cereal` family across 68 elements. Rounded controls, pill-like search geometry, direct labels, and generous image space create an approachable system without requiring decorative chrome.

**Key Characteristics:**
- Photography and place content lead; UI neutrals stay deliberately quiet
- Rausch `#ff385c` is a current identity accent, not an inferred fill for every CTA
- Airbnb Cereal VF spans navigation, headings, lists, inputs, and controls
- 20–32px pill geometry for public actions and search; full circles for icon controls
- Separate visual domains for marketplace, Newsroom, Help, brand assets, and native product

### Primary tasks

- Browse homes, experiences, and services in one marketplace
- Compare location, timing, and category before choosing an offering
- Present and manage an offering as a host
- Look up an official Help answer about a booking

### Brand Narrative

Airbnb grew by reframing accommodation as access to people and places, then expanded that frame into experiences and services. Its visual system follows the same logic: the Bélo and Rausch identify the brand, but photographs, host offerings, and local context create the actual variety. The 2026 release continues this evolution by treating planning as a broader connected journey rather than a single lodging search. Homes remain the marketplace foundation, while experiences and services bring more of a trip into the same discovery environment. This increases the importance of clear category, availability, and offering boundaries. The brand's warmth comes from the people and places represented, not from applying coral to every interaction. Airbnb Cereal, rounded controls, direct labels, and generous image areas form the stable frame that lets highly varied inventory still feel like one product.

### Principles

1. **Let the place lead.** UI should frame photography and real offerings rather than compete with them.
2. **Make discovery approachable.** Rounded geometry and direct language reduce perceived complexity.
3. **Reserve brand voltage.** Identity color should clarify ownership or a verified high-value role, not decorate every action.
4. **Keep evidence domains explicit.** Marketplace, editorial, support, brand, and native surfaces cannot silently substitute for one another.

### Personas

First-party material establishes task contexts only:
- A guest exploring homes, experiences, or services.
- A host presenting and managing an offering.
- A traveler seeking official Help before or after a booking-related task.

Project-specific names, ages, income, trip frequency, team structure, and success metrics are intentionally unspecified and must come from the product brief.

## Colors

- **Identity accent** (`#ff385c`): currently observed on the marketplace; retained as Airbnb's primary identity color without inventing a universal component role.
- **Canvas** (`#ffffff`) and **foreground** (`#222222`): the dominant marketplace and Help pairing.
- **Secondary** (`#6a6a6a`): category labels and supporting marketplace text.
- **Disabled** (`#c1c1c1`): disabled circular-control content.
- **Surface** (`#f2f2f2`): compact circular controls and quiet utility surfaces.
- **Soft search surface** (`#ebebeb`): current 66px marketplace search shell.
- **Divider** (`#dddddd`): official Help list-row separation.

Newsroom-local black/white controls and `#f7f7f7` panels remain editorial-domain observations. Earlier Luxe, Plus, error, legal-link, and generic semantic colors are omitted because the current inspected surfaces did not establish those roles.

## Typography

### Font evidence boundary

| Evidence class | Resolution |
|---|---|
| Official product-use | First-party marketplace and Help surfaces establish Airbnb Cereal as Airbnb's public product family. |
| Live surface-use | Airbnb Cereal VF loaded/high with 973 visible uses; Cereal loaded/high with 68 Newsroom uses. |
| Official distributed asset | Cereal is delivered as a first-party webfont but is not represented as a freely installable or redistributable asset. |
| Declared-only | Cereal Italic and HE/JP/KR/Thai variable families were declared on the Newsroom but had zero visible use in this capture. |
| Unresolved | Authenticated booking flows, native apps, and locale-specific runtime overrides remain unresolved. |

| Role | Family | Size | Weight | Line height |
|---|---|---:|---:|---:|
| Marketplace section title | Airbnb Cereal VF | 22px | 500 | 26px |
| Marketplace body/list | Airbnb Cereal VF | 14px | 400 | 20.02px |
| Marketplace action/tab | Airbnb Cereal VF | 14px | 500 | 18px |
| Help reading text | Airbnb Cereal VF | 16px | 400 | 24px |
| Newsroom editorial copy | Cereal | 18px | 400 | 28px |

Do not render Circular, system-ui, or another sans as though it were Airbnb Cereal. If the authorized font cannot load, preserve metadata and omit the specimen.

## Layout

- Give photography the largest visual area and keep utility controls compact.
- Build hierarchy with white space, type weight, and neutral surfaces before shadows.
- Use 32px search-shell geometry as a role-specific container, not a universal pill.
- Keep marketplace category navigation horizontally scannable and stateful.
- Treat Help and Newsroom layout measurements as domain-local unless a shared implementation is directly verified.

### Responsive Behavior

The inspected public surfaces maintain large media areas, horizontally navigable category controls, compact circular actions, and reflowing text. Exact native-app breakpoints, authenticated booking layouts, and locale-specific truncation behavior remain unresolved.

## Elevation & Depth

The current marketplace components promoted here are flat. Newsroom consent UI exposed an 8px panel with a strong `0 8px 28px rgba(0,0,0,.28)` shadow, but that cookie-specific surface is not a general Airbnb product elevation token.

## Motion & Easing

No reusable duration or easing curve is promoted. Captured interaction states establish state availability, not a universal Airbnb motion token.

---

**Verified:** 2026-07-12 (omd:migrate)
**Tier 1 sources:** https://www.airbnb.co.kr/ ; https://news.airbnb.com/product-releases/airbnb-2026-summer-release/ ; https://www.airbnb.com/help/article/2503 ; https://brand.withairbnb.com
**Tier 2 attempts:** getdesign.md/airbnb supplied a directory entry only; Refero was retained only as a historical conflict candidate
**Conflicts unresolved:** none

## Components

### Current marketplace components

#### Hosting action
- Transparent / `#222222`, 20px radius, 40px height, `11px 12px`
- Airbnb Cereal VF 14px/500; pressed state observed

#### Category tab
- Transparent / `#6a6a6a`, 8px radius, `0 16px`
- Selected and tab-selected states observed; selected text resolves to `#222222`

#### Circular icon controls
- Active compact control: `#f2f2f2` / `#222222`, 28px circle
- Disabled sibling: `#f2f2f2` / `#c1c1c1`, 28px circle
- Hover and pressed were observed; the disabled sibling also exposed disabled and focus states

#### Search shell
- `#ebebeb` / `#222222`, 32px radius, 66px height
- The shell exposes hover/pressed behavior; its inner text input is transparent and uses 14px/500

### Official Help component

#### Help list row
- Transparent / `#222222`, 1px `#dddddd` bottom divider
- `24px 0` padding, 14px/400/20.02px

Red Reserve buttons, listing cards, modal dialogs, badges, inputs, and booking states are not promoted without a current inspectable path that establishes their exact role and geometry.

### States

Marketplace circular controls expose focus, hover, pressed, and disabled states. Category navigation exposes selected/tab-selected states. Search shells expose hover and pressed behavior. Booking loading, error, success, authentication, and empty states remain absent.

## Do's and Don'ts

### Do
- Use Airbnb Cereal only when an authorized source can load it.
- Keep the neutral marketplace hierarchy and photography-first composition.
- Preserve Rausch as identity evidence while assigning component roles only from current capture.
- Separate marketplace, Help, Newsroom, brand, and native evidence.

### Don't
- Do not recreate old Reserve, Luxe, Plus, error, or shadow tokens from memory.
- Do not turn Rausch into a default fill for every control.
- Do not promote a Newsroom cookie button or Help row as a marketplace product primitive.
- Do not substitute system UI fonts and label the result Airbnb Cereal.

## Voice & Tone

Airbnb's current public language is welcoming, concrete, and action-oriented. It names a place, activity, service, or next step directly and allows imagery to carry aspiration. Marketplace labels should help a guest compare location, timing, category, or offering without unnecessary travel jargon. Host-facing language should make responsibility and next steps clear. Help content becomes procedural and explicit; Newsroom content becomes explanatory and product-led. Safety and policy language should remain direct, specific, and calm. Avoid generic luxury language, exaggerated belonging claims, and unsupported outcome metrics.

## Agent Prompt Guide

> Build a photography-led travel marketplace on a white canvas with `#222222` type, quiet `#6a6a6a` hierarchy, Airbnb Cereal VF, 20–32px role-specific pills, compact circular controls, and Rausch used only as a verified identity accent. Omit unverified booking, card, modal, and semantic states.

## Governance

### Known Gaps

- **Contrast, `hosting-action`.** Text `#222222` on `#00000000` measures 1.32:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `category-tab`.** Text `#6a6a6a` on `#00000000` measures 3.88:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `disabled-icon-action`.** Text `#c1c1c1` on `#f2f2f2` measures 1.61:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `help-list-row`.** Text `#222222` on `#00000000` measures 1.32:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
