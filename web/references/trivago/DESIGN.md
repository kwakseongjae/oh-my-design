---
id: trivago
name: trivago
country: DE
category: consumer-tech
homepage: "https://www.trivago.de"
primary_color: "#0079C2"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=trivago.com&sz=128"
verified: "2026-09-26"
added: "2026-09-26"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-09-26"
  colors:
    primary: "#0079c2"
    primary-hovered: "#4dbeff"
    primary-pressed: "#00578b"
    primary-emphasis: "#24a3ec"
    highlight-subdued: "#bde7ff"
    revenue: "#0a850e"
    revenue-hovered: "#6dce70"
    revenue-pressed: "#075f0a"
    critical: "#e22851"
    critical-pressed: "#b4183a"
    warning: "#e27423"
    notice: "#ffcc31"
    decorative-blue: "#78daff"
    decorative-orange: "#ff932c"
    decorative-pink: "#ff9dde"
    foreground: "#171717"
    text-strong: "#4d4d4c"
    text-subdued: "#6c6c6b"
    border-neutral: "#8d8d8b"
    canvas: "#ffffff"
    surface-subdued: "#f2f2f1"
    disabled: "#d9d8d6"
  typography:
    button: { size: 16, weight: 700, use: "search button; system font stack" }
  rounded: { sm: 4, md: 8, lg: 16, full: 9999 }
  components:
    button-search: { type: "button", bg: "#0079c2", fg: "#ffffff", radius: 8, height: "44px", padding: "12px 32px", font: "16px / 700", focus: "outline 1px dotted #4d4d4c", use: "Suchen — the primary blue search button (--action-primary-default); hover and press could not be measured; the tokens declare hovered #4dbeff and pressed #00578b." }
    button-header: { type: "button", bg: "#ffffff", fg: "#171717", radius: 8, height: "36px", padding: "8px 16px", font: "14px / 700", focus: "outline 2px solid #0079c2", use: "Einloggen in the header — white with #171717 text; focus drops the border for a 2px blue outline. Hover not measured." }
  components_harvested: true
verification_v2:
  schema: 2
  checked: "2026-09-26"
  surfaces:
    - { id: home, kind: product-surface, url: "https://www.trivago.de/", inspected: "2026-09-26" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.trivago.de/", captured: "2026-09-26" }
    - { id: control-404, kind: product-surface, url: "https://www.trivago.de/zz-this-does-not-exist", captured: "2026-09-26" }
    - { id: company, kind: official-doc, url: "https://company.trivago.com/", captured: "2026-09-26" }
    - { id: legal, kind: official-doc, url: "https://www.trivago.com/en-US/sl/legal-information", captured: "2026-09-26" }
  conflicts: []
  claims:
    tokens.colors.border-neutral: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.canvas: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.critical: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.critical-pressed: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.decorative-blue: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.decorative-orange: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.decorative-pink: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.disabled: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.foreground: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.highlight-subdued: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.notice: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary-emphasis: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary-hovered: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary-pressed: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.revenue: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.revenue-hovered: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.revenue-pressed: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.surface-subdued: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.text-strong: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.text-subdued: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.warning: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.components.button-header.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-header.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-header.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-header.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-header.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-header.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-header.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-header.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-header.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-search.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-search.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-search.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-search.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-search.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-search.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-search.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-search.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-search.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.rounded.full: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.rounded.lg: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.rounded.md: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.rounded.sm: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.button.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.button.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.button.weight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
---
# Design System Inspiration of trivago

## 1. Visual Theme & Atmosphere

trivago's mission: "When travelers are searching for a hotel, we want the obvious choice to be
trivago." It was "founded in 2005 in Dusseldorf, Germany" with "a simple idea: use technology to
solve real user problems and simplify hotel search", turned a $1 million investment into $1 billion
of revenue, listed on NASDAQ, survived the pandemic, and now has 650+ team members from 75+
nationalities. Its legal notice names **trivago N.V.**, Kesselstrasse 5–7, 40221 Düsseldorf.

The hotel search page is white and utilitarian: near-black text **`#171717`**, trivago blue
**`#0079c2`** for the search action, green **`#0a850e`** for revenue (deal) actions, red and orange
for alerts, and decorative blue, orange and pink. It sets text in the **system font stack** — no
brand face loads.

What makes it worth reading:

- **Actions by business meaning.** `--action-{primary, highlight, revenue, success, critical,
  warning}-{default, hovered, pressed, disabled}` — "revenue" is its own action, the green of a deal.
- **Surfaces in nine steps.** `--surface-*-{default, emphasis, hovered, muted, pressed, soft,
  subdued, tint}` for each intent, with `surface-success-pricing` `#ebfdec` reserved for prices.
- **A 10px root scale.** Radii and borders are declared in rem on a 10px base (`--radius-8` `0.8rem`
  renders 8px).

### Primary tasks
- Search hotels by destination, dates and guests.
- Compare prices across booking sites; log in.

## 2. Color Palette & Roles

Measured with `getComputedStyle` on `trivago.de`: 511 root custom properties — `--size-*` 129,
`--space-*` 66, `--border-*` 62, `--type-*` 59, `--surface-*` 51, `--text-*` 31, `--action-*` 24,
`--icon-*` 20, `--radius-*` 11 … All first-party.

### Primary blue

- **Primary** (`#0079c2`) — `--action-primary-default`, `--text-link`.
- **Hovered** (`#4dbeff`) · **Pressed** (`#00578b`) — declared in tokens.
- **Emphasis** (`#24a3ec`) · **Highlight subdued** (`#bde7ff`).

### Revenue and status

- **Revenue** (`#0a850e`) → hovered (`#6dce70`) → pressed (`#075f0a`).
- **Critical** (`#e22851`) → pressed (`#b4183a`) · **Warning** (`#e27423`) · **Notice** (`#ffcc31`).

### Decorative

**Blue** `#78daff` · **Orange** `#ff932c` · **Pink** `#ff9dde`.

### Neutrals

- **Foreground** (`#171717`) — `--text-default`.
- **Text strong** (`#4d4d4c`) · **Text subdued** (`#6c6c6b`) · **Border neutral** (`#8d8d8b`).
- **Canvas** (`#ffffff`) · **Surface subdued** (`#f2f2f1`) · **Disabled** (`#d9d8d6`).

## 3. Typography Rules

### Font family

`--font-family-default`: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, "Noto
Sans", …`. No brand typeface is loaded on this surface; none is claimed.

### Scale

Search button 16px/700; header buttons 14px/700.

## 4. Component Stylings

Measured with focus under a real Tab key. **Hover and pressed could not be measured**: an overlay
intercepted the pointer on every load. They are omitted, not recorded as "no change".

- **Search** — Suchen: **`#0079c2`**, white 16px/700, 8px, 44px. Focus a 1px dotted `#4d4d4c`
  outline. (Tokens declare hovered `#4dbeff`, pressed `#00578b`.)
- **Header button** — Einloggen: white, `#171717` 14px/700, 8px, 36px. Focus drops the border for a
  **2px `#0079c2`** outline.

### Radius

`--radius-4` / `-8` / `-16` / `-circle` → 4px, 8px, 16px, full.

## 5. Layout Principles

- A slim header, a hero search bar (destination, dates, guests, search), and a partner-logo row
  ("Unsere Partner und über 100 weitere").

## 6. Depth & Elevation

Flat; surfaces and borders separate content.

## 7. Do's and Don'ts

### Do
- Use trivago blue `#0079c2` for search and links, and green `#0a850e` for deal actions.
- Give every action default, hovered, pressed and disabled values.
- Keep `#ebfdec` for price highlights.

### Don't
- Don't load a brand typeface here; the product uses the system stack.
- Don't use revenue green for navigation.
- Don't use decorative colours for text.

## 8. Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## 9. Agent Prompt Guide

### Quick Color Reference
`#0079c2` trivago blue · `#00578b` pressed · `#0a850e` revenue green · `#e22851` critical ·
`#171717` ink · `#6c6c6b` subdued · `#f2f2f1` surface · `#ff932c` orange

### Example Component Prompts
- "A 44px `#0079c2` search button, white 16px/700 system font, 8px radius."
- "A white 36px header button with `#171717` text and a 2px `#0079c2` focus outline."

## 10. Voice & Tone

Not assessed as authored voice.

## 11. Brand Narrative

A Düsseldorf company that bootstrapped hotel search into a NASDAQ-listed brand. The product is a
comparison tool, and it looks like one: white, dense, system-set, with blue for searching and green
for the deal.

## 12. Principles

- **The obvious choice for hotel search.** Its mission.
- **Actions named by meaning.** Revenue is an action.
- **Simplify hotel search.**

## 13. Personas

Not researched. No persona claim is made from a UI capture.

## 14. States

Focus: dotted or 2px blue outlines. Hover and pressed: not measured on the live page; declared in
tokens (`--action-primary-hovered` `#4dbeff`, `-pressed` `#00578b`).

## 15. Motion & Easing

Not measured.

---

**Tier 1 sources:** https://www.trivago.de/ (live homepage — 511 root custom properties read via `getComputedStyle`; two components measured at rest and focus, captured 2026-09-26); https://www.trivago.de/zz-this-does-not-exist (nonsense-path control — HTTP 200 rendering the homepage, a catch-all; noted, read 2026-09-26); https://company.trivago.com/ (company site — mission, founded 2005 in Düsseldorf, NASDAQ listing, 650+ team members, read 2026-09-26); https://www.trivago.com/en-US/sl/legal-information (legal information — trivago N.V., Kesselstrasse 5–7, 40221 Düsseldorf, read 2026-09-26)
