---
id: "sendbird"
name: "Sendbird"
country: US
category: developer-tools
homepage: "https://sendbird.com"
primary_color: "#742DDD"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=sendbird.com&sz=128"
verified: "2026-09-21"
omd: "0.1"
ds:
  name: Sendbird UIKit
  url: "https://sendbird.github.io/sendbird-uikit-react"
  type: system
  description: Sendbird's official chat UIKit — a documented, token-driven conversation-UI system (React, iOS, Android, React Native) with named color sets, message components, and themeable light/dark resources.
verification_v2:
  schema: 2
  checked: "2026-09-22"
  surfaces:
    - { id: uikit, kind: product-surface, url: "https://sendbird.github.io/sendbird-uikit-react", inspected: "2026-09-21" }
    - { id: marketing, kind: product-surface, url: "https://sendbird.com/", inspected: "2026-09-21" }
  sources:
    - { id: uikit-button, kind: product-surface, url: "https://sendbird.github.io/sendbird-uikit-react/iframe.html?id=2-ui-button--primary&viewMode=story", captured: "2026-09-21" }
    - { id: uikit-danger, kind: product-surface, url: "https://sendbird.github.io/sendbird-uikit-react/iframe.html?id=2-ui-button--danger&viewMode=story", captured: "2026-09-21" }
    - { id: uikit-disabled, kind: product-surface, url: "https://sendbird.github.io/sendbird-uikit-react/iframe.html?id=2-ui-button--disabled&viewMode=story", captured: "2026-09-21" }
    - { id: uikit-checkbox, kind: product-surface, url: "https://sendbird.github.io/sendbird-uikit-react/iframe.html?id=2-ui-checkbox--unchecked&viewMode=story", captured: "2026-09-21" }
    - { id: uikit-toggle, kind: product-surface, url: "https://sendbird.github.io/sendbird-uikit-react/iframe.html?id=2-ui-toggle--default&viewMode=story", captured: "2026-09-21" }
    - { id: marketing-0922, kind: product-surface, url: "https://sendbird.com/", captured: "2026-09-22" }
    - { id: marketing-live, kind: product-surface, url: "https://sendbird.com/", captured: "2026-09-21" }
    - { id: marketing-june, kind: product-surface, url: "https://sendbird.com/", captured: "2026-06-01" }
    - { id: uikit-docs, kind: official-doc, url: "https://sendbird.com/docs/chat/uikit/v3/react/overview", captured: "2026-09-21" }
  conflicts: []
  claims:
    tokens.colors.body: { surface_id: marketing, source_id: marketing-june, method: computed-style, captured: "2026-06-01" }
    tokens.colors.border-light: { surface_id: marketing, source_id: marketing-june, method: computed-style, captured: "2026-06-01" }
    tokens.colors.brand: { surface_id: uikit, source_id: uikit-button, method: computed-style, captured: "2026-09-21" }
    tokens.colors.canvas: { surface_id: uikit, source_id: uikit-button, method: computed-style, captured: "2026-09-21" }
    tokens.colors.error: { surface_id: uikit, source_id: uikit-button, method: computed-style, captured: "2026-09-21" }
    tokens.colors.foreground: { surface_id: marketing, source_id: marketing-june, method: computed-style, captured: "2026-06-01" }
    tokens.colors.hairline: { surface_id: marketing, source_id: marketing-june, method: computed-style, captured: "2026-06-01" }
    tokens.colors.info: { surface_id: uikit, source_id: uikit-button, method: computed-style, captured: "2026-09-21" }
    tokens.colors.ink-dark: { surface_id: marketing, source_id: marketing-june, method: computed-style, captured: "2026-06-01" }
    tokens.colors.muted: { surface_id: uikit, source_id: uikit-button, method: computed-style, captured: "2026-09-21" }
    tokens.colors.on-primary: { surface_id: uikit, source_id: uikit-button, method: computed-style, captured: "2026-09-21" }
    tokens.colors.primary: { surface_id: uikit, source_id: uikit-button, method: computed-style, captured: "2026-09-21" }
    tokens.colors.primary-active: { surface_id: uikit, source_id: uikit-button, method: computed-style, captured: "2026-09-21" }
    tokens.colors.primary-hover: { surface_id: uikit, source_id: uikit-button, method: computed-style, captured: "2026-09-21" }
    tokens.colors.success: { surface_id: uikit, source_id: uikit-button, method: computed-style, captured: "2026-09-21" }
    tokens.colors.surface: { surface_id: marketing, source_id: marketing-june, method: computed-style, captured: "2026-06-01" }
    tokens.components.button-pill-marketing.bg: { surface_id: marketing, source_id: marketing-0922, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-pill-marketing.fg: { surface_id: marketing, source_id: marketing-0922, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-pill-marketing.focus: { surface_id: marketing, source_id: marketing-0922, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-pill-marketing.font: { surface_id: marketing, source_id: marketing-0922, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-pill-marketing.height: { surface_id: marketing, source_id: marketing-0922, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-pill-marketing.hover: { surface_id: marketing, source_id: marketing-0922, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-pill-marketing.pressed: { surface_id: marketing, source_id: marketing-0922, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-pill-marketing.radius: { surface_id: marketing, source_id: marketing-0922, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-pill-marketing.type: { surface_id: marketing, source_id: marketing-0922, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-pill-marketing.use: { surface_id: marketing, source_id: marketing-0922, method: live-inspect, captured: "2026-09-22" }
    tokens.components.bubble-incoming.bg: { surface_id: marketing, source_id: marketing-june, method: live-inspect, captured: "2026-06-01" }
    tokens.components.bubble-incoming.fg: { surface_id: marketing, source_id: marketing-june, method: live-inspect, captured: "2026-06-01" }
    tokens.components.bubble-incoming.type: { surface_id: marketing, source_id: marketing-june, method: live-inspect, captured: "2026-06-01" }
    tokens.components.bubble-incoming.use: { surface_id: marketing, source_id: marketing-june, method: live-inspect, captured: "2026-06-01" }
    tokens.components.bubble-outgoing.bg: { surface_id: marketing, source_id: marketing-june, method: live-inspect, captured: "2026-06-01" }
    tokens.components.bubble-outgoing.fg: { surface_id: marketing, source_id: marketing-june, method: live-inspect, captured: "2026-06-01" }
    tokens.components.bubble-outgoing.type: { surface_id: marketing, source_id: marketing-june, method: live-inspect, captured: "2026-06-01" }
    tokens.components.bubble-outgoing.use: { surface_id: marketing, source_id: marketing-june, method: live-inspect, captured: "2026-06-01" }
    tokens.components.button-danger.bg: { surface_id: uikit, source_id: uikit-danger, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-danger.fg: { surface_id: uikit, source_id: uikit-danger, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-danger.font: { surface_id: uikit, source_id: uikit-danger, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-danger.hover: { surface_id: uikit, source_id: uikit-danger, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-danger.pressed: { surface_id: uikit, source_id: uikit-danger, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-danger.radius: { surface_id: uikit, source_id: uikit-danger, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-danger.type: { surface_id: uikit, source_id: uikit-danger, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-danger.use: { surface_id: uikit, source_id: uikit-danger, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-disabled.bg: { surface_id: uikit, source_id: uikit-disabled, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-disabled.disabled: { surface_id: uikit, source_id: uikit-disabled, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-disabled.fg: { surface_id: uikit, source_id: uikit-disabled, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-disabled.radius: { surface_id: uikit, source_id: uikit-disabled, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-disabled.type: { surface_id: uikit, source_id: uikit-disabled, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-disabled.use: { surface_id: uikit, source_id: uikit-disabled, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-primary.bg: { surface_id: uikit, source_id: uikit-button, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-primary.fg: { surface_id: uikit, source_id: uikit-button, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-primary.focus: { surface_id: uikit, source_id: uikit-button, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-primary.font: { surface_id: uikit, source_id: uikit-button, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-primary.hover: { surface_id: uikit, source_id: uikit-button, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-primary.pressed: { surface_id: uikit, source_id: uikit-button, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-primary.radius: { surface_id: uikit, source_id: uikit-button, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-primary.type: { surface_id: uikit, source_id: uikit-button, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-primary.use: { surface_id: uikit, source_id: uikit-button, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-secondary.fg: { surface_id: uikit, source_id: uikit-button, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-secondary.font: { surface_id: uikit, source_id: uikit-button, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-secondary.hover: { surface_id: uikit, source_id: uikit-button, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-secondary.pressed: { surface_id: uikit, source_id: uikit-button, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-secondary.radius: { surface_id: uikit, source_id: uikit-button, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-secondary.type: { surface_id: uikit, source_id: uikit-button, method: live-inspect, captured: "2026-09-21" }
    tokens.components.button-secondary.use: { surface_id: uikit, source_id: uikit-button, method: live-inspect, captured: "2026-09-21" }
    tokens.components.checkbox.focus: { surface_id: uikit, source_id: uikit-checkbox, method: live-inspect, captured: "2026-09-21" }
    tokens.components.checkbox.radius: { surface_id: uikit, source_id: uikit-checkbox, method: live-inspect, captured: "2026-09-21" }
    tokens.components.checkbox.type: { surface_id: uikit, source_id: uikit-checkbox, method: live-inspect, captured: "2026-09-21" }
    tokens.components.checkbox.use: { surface_id: uikit, source_id: uikit-checkbox, method: live-inspect, captured: "2026-09-21" }
    tokens.components.chip.bg: { surface_id: marketing, source_id: marketing-june, method: live-inspect, captured: "2026-06-01" }
    tokens.components.chip.border: { surface_id: marketing, source_id: marketing-june, method: live-inspect, captured: "2026-06-01" }
    tokens.components.chip.fg: { surface_id: marketing, source_id: marketing-june, method: live-inspect, captured: "2026-06-01" }
    tokens.components.chip.font: { surface_id: marketing, source_id: marketing-june, method: live-inspect, captured: "2026-06-01" }
    tokens.components.chip.height: { surface_id: marketing, source_id: marketing-june, method: live-inspect, captured: "2026-06-01" }
    tokens.components.chip.padding: { surface_id: marketing, source_id: marketing-june, method: live-inspect, captured: "2026-06-01" }
    tokens.components.chip.radius: { surface_id: marketing, source_id: marketing-june, method: live-inspect, captured: "2026-06-01" }
    tokens.components.chip.type: { surface_id: marketing, source_id: marketing-june, method: live-inspect, captured: "2026-06-01" }
    tokens.components.chip.use: { surface_id: marketing, source_id: marketing-june, method: live-inspect, captured: "2026-06-01" }
    tokens.components.input.bg: { surface_id: uikit, source_id: uikit-button, method: live-inspect, captured: "2026-09-21" }
    tokens.components.input.border: { surface_id: uikit, source_id: uikit-button, method: live-inspect, captured: "2026-09-21" }
    tokens.components.input.fg: { surface_id: uikit, source_id: uikit-button, method: live-inspect, captured: "2026-09-21" }
    tokens.components.input.focus: { surface_id: uikit, source_id: uikit-button, method: live-inspect, captured: "2026-09-21" }
    tokens.components.input.font: { surface_id: uikit, source_id: uikit-button, method: live-inspect, captured: "2026-09-21" }
    tokens.components.input.padding: { surface_id: uikit, source_id: uikit-button, method: live-inspect, captured: "2026-09-21" }
    tokens.components.input.radius: { surface_id: uikit, source_id: uikit-button, method: live-inspect, captured: "2026-09-21" }
    tokens.components.input.type: { surface_id: uikit, source_id: uikit-button, method: live-inspect, captured: "2026-09-21" }
    tokens.components.input.use: { surface_id: uikit, source_id: uikit-button, method: live-inspect, captured: "2026-09-21" }
    tokens.components.toggle.bg: { surface_id: uikit, source_id: uikit-toggle, method: live-inspect, captured: "2026-09-21" }
    tokens.components.toggle.focus: { surface_id: uikit, source_id: uikit-toggle, method: live-inspect, captured: "2026-09-21" }
    tokens.components.toggle.radius: { surface_id: uikit, source_id: uikit-toggle, method: live-inspect, captured: "2026-09-21" }
    tokens.components.toggle.type: { surface_id: uikit, source_id: uikit-toggle, method: live-inspect, captured: "2026-09-21" }
    tokens.components.toggle.use: { surface_id: uikit, source_id: uikit-toggle, method: live-inspect, captured: "2026-09-21" }
    tokens.rounded.full: { surface_id: uikit, source_id: uikit-button, method: computed-style, captured: "2026-09-21" }
    tokens.rounded.lg: { surface_id: uikit, source_id: uikit-button, method: computed-style, captured: "2026-09-21" }
    tokens.rounded.md: { surface_id: uikit, source_id: uikit-button, method: computed-style, captured: "2026-09-21" }
    tokens.rounded.sm: { surface_id: uikit, source_id: uikit-button, method: computed-style, captured: "2026-09-21" }
    tokens.spacing.base: { surface_id: marketing, source_id: marketing-june, method: computed-style, captured: "2026-06-01" }
    tokens.spacing.lg: { surface_id: marketing, source_id: marketing-june, method: computed-style, captured: "2026-06-01" }
    tokens.spacing.md: { surface_id: marketing, source_id: marketing-june, method: computed-style, captured: "2026-06-01" }
    tokens.spacing.sm: { surface_id: marketing, source_id: marketing-june, method: computed-style, captured: "2026-06-01" }
    tokens.spacing.xl: { surface_id: marketing, source_id: marketing-june, method: computed-style, captured: "2026-06-01" }
    tokens.spacing.xs: { surface_id: marketing, source_id: marketing-june, method: computed-style, captured: "2026-06-01" }
    tokens.typography.body-lg.size: { surface_id: marketing, source_id: marketing-june, method: computed-style, captured: "2026-06-01" }
    tokens.typography.body-lg.use: { surface_id: marketing, source_id: marketing-june, method: computed-style, captured: "2026-06-01" }
    tokens.typography.body-lg.weight: { surface_id: marketing, source_id: marketing-june, method: computed-style, captured: "2026-06-01" }
    tokens.typography.body.size: { surface_id: marketing, source_id: marketing-june, method: computed-style, captured: "2026-06-01" }
    tokens.typography.body.use: { surface_id: marketing, source_id: marketing-june, method: computed-style, captured: "2026-06-01" }
    tokens.typography.body.weight: { surface_id: marketing, source_id: marketing-june, method: computed-style, captured: "2026-06-01" }
    tokens.typography.cta.size: { surface_id: marketing, source_id: marketing-june, method: computed-style, captured: "2026-06-01" }
    tokens.typography.cta.use: { surface_id: marketing, source_id: marketing-june, method: computed-style, captured: "2026-06-01" }
    tokens.typography.cta.weight: { surface_id: marketing, source_id: marketing-june, method: computed-style, captured: "2026-06-01" }
    tokens.typography.display-serif.size: { surface_id: marketing, source_id: marketing-june, method: computed-style, captured: "2026-06-01" }
    tokens.typography.display-serif.use: { surface_id: marketing, source_id: marketing-june, method: computed-style, captured: "2026-06-01" }
    tokens.typography.display-serif.weight: { surface_id: marketing, source_id: marketing-june, method: computed-style, captured: "2026-06-01" }
    tokens.typography.family.mono: { surface_id: marketing, source_id: marketing-june, method: computed-style, captured: "2026-06-01" }
    tokens.typography.family.sans: { surface_id: marketing, source_id: marketing-june, method: computed-style, captured: "2026-06-01" }
    tokens.typography.label.size: { surface_id: marketing, source_id: marketing-june, method: computed-style, captured: "2026-06-01" }
    tokens.typography.label.use: { surface_id: marketing, source_id: marketing-june, method: computed-style, captured: "2026-06-01" }
    tokens.typography.label.weight: { surface_id: marketing, source_id: marketing-june, method: computed-style, captured: "2026-06-01" }
    tokens.typography.nav.size: { surface_id: marketing, source_id: marketing-june, method: computed-style, captured: "2026-06-01" }
    tokens.typography.nav.use: { surface_id: marketing, source_id: marketing-june, method: computed-style, captured: "2026-06-01" }
    tokens.typography.nav.weight: { surface_id: marketing, source_id: marketing-june, method: computed-style, captured: "2026-06-01" }
tokens:
  source: live-extract
  extracted: "2026-09-21"
  colors:
    primary: "#742ddd"
    primary-hover: "#6211c8"
    primary-active: "#491389"
    brand: "#742ddd"
    canvas: "#ffffff"
    foreground: "#0d0d0d"
    body: "#424242"
    muted: "#eeeeee"
    on-primary: "#ffffff"
    success: "#259c72"
    error: "#de360b"
    info: "#adc9ff"
    surface: "#f2f3f7"
    hairline: "#e3e5ef"
    border-light: "#d1d1d1"
    ink-dark: "#0d0d0d"
  typography:
    family: {sans: Helvetica Now Text, mono: system-ui}
    display-serif: {size: 72, weight: 500, use: Marketing hero headline (serif)}
    body-lg: {size: 18, weight: 400, use: Marketing body text}
    nav: {size: 16, weight: 500, use: Marketing nav links}
    body: {size: 14, weight: 400, use: UIKit message text and labels}
    label: {size: 14, weight: 600, use: 'UIKit labels, button text'}
    cta: {size: 13, weight: 600, use: Marketing pill CTA text}
  spacing:
    xs: 4
    sm: 8
    md: 12
    base: 16
    lg: 24
    xl: 32
  rounded:
    sm: 4
    md: 8
    lg: 24
    full: 9999
  components:
    button-primary: { type: "button", bg: "#742ddd", fg: "#ffffff", radius: "4", font: "13px / 400 Roboto", hover: "#6211c8", pressed: "#491389", focus: "1px solid #ffffff", use: "UIKit primary action — 40px tall." }
    button-secondary: { type: "button", fg: "#742ddd", radius: "4", font: "13px / 400 Roboto", hover: "1px solid #742ddd", pressed: "1px solid #742ddd", use: "UIKit secondary action — transparent fill, 40px tall." }
    button-danger: { type: "button", bg: "#de360b", fg: "#ffffff", radius: "4", font: "13px / 400 Roboto", hover: "#bf0711", pressed: "#9d091e", use: "UIKit destructive action — 40px tall." }
    button-disabled: { type: "button", bg: "#e0e0e0", fg: "#101010", radius: "4", disabled: "#e0e0e0", use: "UIKit unavailable action — palette swap, 40px tall." }
    input: { type: "input", bg: "#FFFFFF", fg: "rgba(0,0,0,0.87)", border: "1px solid rgba(0,0,0,0.12)", radius: "4px", padding: "7px 12px", font: "14px / 400", focus: "border #742DDD + 0 0 0 1px #742DDD", use: "UIKit text field" }
    bubble-outgoing: { type: "listItem", bg: "#742DDD", fg: "#FFFFFF", use: "Outgoing message bubble, right-aligned, max 400px" }
    bubble-incoming: { type: "listItem", bg: "#EEEEEE", fg: "rgba(0,0,0,0.87)", use: "Incoming message bubble, left-aligned, 40px avatar" }
    button-pill-marketing: { type: "button", bg: "transparent", fg: "#ffffff", radius: "8px", height: "42px", font: "18px / 700", hover: "#ffffff", pressed: "#ffffff", focus: "#0d0d0d", use: "Marketing CTA pill (Contact sales), 139×42 in the header. The element itself is transparent — the fill is painted by a child — so only the text, geometry and states are measured. Hover and pressed change nothing; focus draws a #0d0d0d 2px solid outline." }
    chip: { type: "badge", bg: "#F2F3F7", fg: "#0D0D0D", border: "1px solid #E3E5EF", radius: "8px", height: "50px", padding: "8px 12px", font: "18px / 400", use: "Marketing neutral selector / utility control" }
    checkbox: { type: "toggle", radius: "2", focus: "#742ddd", use: "UIKit checkbox — 22px box; focus fills brand purple." }
    toggle: { type: "toggle", bg: "#bdbdbd", radius: "12", focus: "#742ddd", use: "UIKit switch — 20px track, off #bdbdbd." }
  components_harvested: true
---
# Design System Inspiration of Sendbird

## 1. Visual Theme & Atmosphere

Sendbird is a developer-infrastructure company that wears two faces, and the gap between them is the whole story. The **product** — the Sendbird UIKit that powers chat inside thousands of apps — is a disciplined, token-driven system built on a single confident **purple** (`#742DDD`, "Sendbird purple") sitting on an eight-step neutral grayscale, with green, red and blue reserved strictly for semantic meaning. It is functional software color: a 4px corner radius everywhere, flat fills, no gradients, a palette that survives being dropped into a customer's own app without fighting it. The **marketing site** (sendbird.com), by contrast, is a near-monochrome editorial surface — pure white grounds, an oversized **serif display face** running to 72px for headlines, body text set in Helvetica Now Text, and pill-shaped black-and-white CTAs with no brand color at all. One surface is engineered to disappear into a developer's product; the other is engineered to read like a printed enterprise brochure. The through-line is restraint: a brand that earns trust by looking calm, legible, and uncluttered, letting the single purple do its work only where it carries product meaning.

## Primary tasks

- Send a message into a channel conversation
- Scroll a conversation and read messages from other participants
- Leave a channel you no longer want to follow
- Embed chat inside your own app and theme it

## 2. Color Palette & Roles

This reference covers **two surfaces that are not the same design language**, and the palette
splits along that line. The **Sendbird UIKit** — the chat system Sendbird's customers embed —
publishes **90 `--sendbird-*` custom properties**, measured 2026-09-21 on its public Storybook.
The **marketing site** `sendbird.com` is a separate surface with only 7 custom properties and
its own neutrals.

### UIKit palette — published tokens

Sendbird names positionally (`light-primary-300`, `light-error-300`), so the role names here
are this reference's and the UIKit token is given beside each.

- **Primary** (`#742ddd`) — `light-primary-300`. The brand purple, and the UIKit primary action.
- **Primary Hover** (`#6211c8`) — `light-primary-400`.
- **Primary Active** (`#491389`) — `light-primary-500`.
- **Error** (`#de360b`) — `light-error-300`. Also the destructive button fill.
- **Success** (`#259c72`) — `light-secondary-300`.
- **Info** (`#adc9ff`) — `light-information-100`.
- **Muted** (`#eeeeee`) — `light-background-100`.
- **Canvas / On-Primary** (`#ffffff`) — `file-message-icon-background`, `button-border-focus`.

The ramp runs 100–500 per family in both `light-` and `dark-` variants: Sendbird ships a full
dark theme, which this pass did **not** measure and does not claim.

### Marketing palette — `sendbird.com`

These six have **no UIKit token** and belong to the marketing surface only. They were captured
by the 2026-06-01 pass and carry that date; `#f2f3f7` was re-confirmed live today.

- **Foreground / Ink Dark** (`#0d0d0d`) · **Body** (`#424242`)
- **Surface** (`#f2f3f7`) · **Hairline** (`#e3e5ef`) · **Border Light** (`#d1d1d1`)

Mixing the two is the error to avoid: `#742ddd` is what an embedded Sendbird chat looks like,
and `#0d0d0d` on `#f2f3f7` is what Sendbird's own website looks like. A consumer building a
chat UI wants the first set.

## 3. Typography Rules

- **Product (UIKit):** the system font stack via `--sendbird-font-family-default` — platform-native sans (SF Pro / Roboto / system-ui) so embedded chat matches the host app. Message text and labels sit at 14px with a clear weight ladder (400 body, 500–600 labels).
- **Marketing display:** a **serif** display face for headlines, observed at **72px / weight 500** on the hero (`#0D0D0D`). The serif is the single most distinctive type choice — it signals editorial confidence and separates Sendbird from the geometric-sans default of developer-tool marketing.
- **Marketing body + nav:** **Helvetica Now Text** — body at 18px / 400 (`#424242`), nav links at 16px / 500 (`#0E1017`), small print near 13px / 600 on pill CTAs.
- **Hierarchy:** large serif headline → Helvetica Now subhead/body → medium-weight nav and buttons. Tight, legible, generous line spacing; never more than two type families on one surface.

## 4. Component Stylings

> Two systems documented below: the **UIKit** (product, token-driven, purple) verified from the official component source, and the **marketing chrome** (sendbird.com) verified from live computed style. Each is the source of truth for its own surface.

### UIKit Button

Measured 2026-09-21 on the UIKit's published Storybook, pointer parked between readings. All
variants are **40px tall, 4px radius, 13px/400 Roboto**.

| Variant | Rest | Hover | Pressed | Focus |
|---|---|---|---|---|
| **Primary** | `#742ddd` fill | `#6211c8` | `#491389` | `1px solid #ffffff` ring |
| **Secondary** | transparent, `#742ddd` text | `1px solid #742ddd` border | same | border clears |
| **Danger** | `#de360b` fill | `#bf0711` | `#9d091e` | `1px solid #ffffff` ring |
| **Disabled** | `#e0e0e0` fill, **`#101010`** text | — | — | — |

The primary and danger buttons both **darken twice** — hover then pressed — and both draw a
white focus ring. Disabled is a palette swap at full opacity, not a dimmed primary: its text
stays `#101010` so the label keeps its own contrast.

### UIKit Checkbox and Toggle

- **Checkbox** — 22px box, 2px radius. Hover and pressed are unchanged; **focus fills
  `#742ddd`**, so focus is the state that carries the brand colour.
- **Toggle** — 20px track, 12px radius, off at **`#bdbdbd`**. Focus turns it `#742ddd`.

Both follow the button pattern: the neutral rest state is grey, and brand purple appears on
interaction rather than at rest.

### UIKit Input / TextField

**Default**
- Background: `#FFFFFF`
- Text: `#000000` @ 87% (onlight-01)
- Border: 1px solid `#000000` @ 12% (onlight-04)
- Radius: 4px
- Padding: 7px 12px
- Font: 14px / 400

**Focus**
- Border: 1px solid `#742DDD` (primary-300)
- Shadow: 0 0 0 1px `#742DDD`

**Error**
- Border: 1px solid `#DE360B` (error-300)

### UIKit Message Bubble

**Outgoing (mine)**
- Background: `#742DDD` (primary-300)
- Text: `#FFFFFF`
- Max-width: 400px
- Use: messages sent by the current user, right-aligned

**Incoming (other)**
- Background: `#EEEEEE` (background-100)
- Text: `#000000` @ 87% (onlight-01)
- Max-width: 400px
- Avatar: 40px (min-width, left of bubble)
- Use: messages from other participants, left-aligned

### Marketing CTAs — re-measured 2026-09-22, and two of them were not there

The declared `cta-dark-pill` and `cta-outline-pill` were 42px pills with a **24px radius**, a
`#0D0D0D` fill and a `1px solid #0D0D0D` border. Re-measured today, sendbird.com's CTAs are
`.btn theme-pill` elements with an **8px radius**, no border, and a **transparent background
on the element itself** — the fill is painted by a child. The geometry and the fill in the old
records do not describe what the site renders now, so neither component survives as declared.

What does measure cleanly is the pill's behaviour, and it is recorded as one component:

- **Header pill (Contact sales)** — 139×42, 8px radius, `#ffffff` text at 18px/700, element
  background transparent.
- Hover and pressed: **no change** on any property.
- Focus: **`outline: rgb(13, 13, 13) solid 2px`**. `solid 2px` is authored — the browser's own
  ring is `auto 1px` — so `#0d0d0d`, sendbird's ink, is the real focus colour.
- A second instance in the body (Explore, 123×52, `#000000` text) carries the **same** focus
  ring, so the ring belongs to `.btn`, not to one placement.

### The newsletter input was the site search

`input-newsletter` was declared as a "marketing pill email capture": `#FFFFFF`,
`1px solid #D1D1D1`, 50px radius, 12.8px/400. Every one of those values is correct and still
present — on a field whose placeholder is **"Search…"**. It is sendbird.com's site search, it
measures **0×0** because it expands on demand, and it captures no email.

Removed rather than renamed. The values were right and the description was wrong, which is the
harder of the two errors to notice.

### Marketing Utility chip

**Default**
- Background: `#F2F3F7`
- Text: `#0D0D0D`
- Border: 1px solid `#E3E5EF`
- Radius: 8px
- Padding: 8px 12px
- Height: 50px
- Font: 18px / 400 / Helvetica Now Text
- Use: neutral selector / utility control on marketing surfaces

## 5. Layout Principles

- **UIKit:** a vertical conversation column with a fixed channel header, a scrolling message list, and a docked composer. Message rows are avatar + bubble, bubbles capped at 400px so long text wraps rather than spanning wide screens. 4px is the universal corner unit; spacing is an 8px rhythm.
- **Marketing:** generous single-column-of-attention sections on white, oversized serif headlines anchoring each block, wide margins, and image columns doing the visual work. No dense grids — the page breathes.
- **Density:** product is information-dense but calm (chat needs scannability); marketing is deliberately sparse.

## 6. Depth & Elevation

Sendbird is overwhelmingly **flat**. The UIKit uses fills and 1px hairlines, not shadows, to separate surfaces — incoming bubble vs. ground is a fill contrast (`#EEEEEE` on `#FFFFFF`), not a drop shadow. Elevation appears only where it carries meaning: modals/menus float above a `#000000` @ 55% overlay scrim, and the input focus ring is a 1px purple halo rather than a glow. Marketing is similarly shadowless — depth comes from whitespace and scale, not z-axis tricks.

## 7. Do's and Don'ts

### Do
- Use purple `#742DDD` for exactly one primary action per surface; let neutrals carry everything else.
- Keep the 4px radius on product controls and the pill (24px / 50px) radius on marketing chrome — don't mix the two languages.
- Reserve green, red, and blue for semantic roles (success-adjacent, destructive/error, informational).
- Pair the serif display headline with Helvetica Now body on marketing; never set body copy in the serif.

### Don't
- Introduce gradients, drop shadows, or a second brand hue — the system's calm depends on restraint.
- Put brand purple into marketing chrome, or near-black pills into the product UI; the surfaces are intentionally distinct.
- Combine multiple fields on one spec line; each token gets its own value.
- Let message bubbles exceed the 400px cap or drop the 40px avatar gutter.

## 8. Responsive Behavior

- **UIKit:** the conversation column is fluid; bubble max-width collapses from 400px to `calc(100vw - 140px)` on narrow viewports, preserving the avatar gutter and right/left alignment. Channel list and conversation become a single stacked view on mobile.
- **Marketing:** the serif hero scales down from 72px on large screens; multi-column sections reflow to a single column; pill CTAs stay full-radius and stack vertically.
- Touch targets respect the 40px (Big) / 32px (Small) button heights as comfortable minimums.

## 9. Agent Prompt Guide

When generating a Sendbird-style interface, specify which surface you mean:
- **"Sendbird UIKit style"** → token-driven chat UI: purple `#742DDD` primary, neutral grayscale, 4px radius, flat fills, 14px system-font text, message bubbles (outgoing purple / incoming `#EEEEEE`) capped at 400px with 40px avatars, semantic green/red/blue only.
- **"Sendbird marketing style"** → near-monochrome editorial: white ground, 72px serif display headline, Helvetica Now Text body, black `#0D0D0D` and white pill CTAs (24px radius), `#F2F3F7` neutral chips, no brand color in chrome.
- Default corner radius: **4px** (product) — state "pill" explicitly for marketing CTAs.
- Keep it flat: 1px hairlines and fills, not shadows. One primary action per surface.

## 10. Voice & Tone

Sendbird speaks like **infrastructure that respects your time**: precise, technical without jargon-for-its-own-sake, confident but never loud. Product copy (UIKit labels, empty states) is plain and instructive — "No messages yet," "Send," "Leave channel." Marketing copy is declarative and enterprise-assured — "The AI customer experience platform" — short clauses, present tense, outcomes over features. The serif display face gives the words a measured, editorial gravity; the tone is a senior engineer who has already solved your problem and is calmly telling you how.

## 11. Brand Narrative

Founded in Korea (originally as a community for parents) and now powering in-app conversations for some of the world's largest apps, Sendbird's story is **invisible reliability at scale**. The brand's job is to be the messaging layer you never think about — which is why the product design system is built to disappear into the host app, and why the brand color is held back from marketing chrome. The single purple is a signature you only meet where it matters: the action that sends, the link that connects. Everything else — grayscale surfaces, flat fills, serif calm — communicates "we are the dependable substrate, not the spectacle."

## 12. Principles

1. **Color carries meaning, not decoration.** One purple for primary action; semantic green/red/blue; everything else neutral.
2. **Flat by default.** Fills and hairlines over shadows; elevation only for true overlays.
3. **The product disappears.** UIKit is themeable and system-font-based so it adopts the host app's identity.
4. **Two surfaces, two languages.** Product = 4px functional; marketing = pill editorial. Never blur them.
5. **Restraint reads as trust.** Whitespace, legibility, and a single accent over visual noise.

## 13. Personas

- **The app developer** embedding chat — wants tokens, theming, and components that drop in without fighting their design. Lives in the UIKit docs.
- **The enterprise buyer** evaluating a CX/messaging platform — meets the serif marketing site, reads "reliable, secure, at scale," needs trust signals (certifications, G2).
- **The end user** inside a customer's app — never sees "Sendbird," only a calm, legible conversation that feels native to the app they're using.

## 14. States

**Measured, 2026-09-22.** The UIKit components carry their published states. On the marketing
surface, the CTA pill's hover and pressed change nothing and its focus draws a
`#0d0d0d solid 2px` outline — authored, not the browser's. Two previously declared marketing
components were removed rather than given states: the 24px-radius dark and outline pills no
longer render as recorded, and the "newsletter" input turned out to be the site search. See §4.


- **Default / Hover / Pressed:** buttons step purple-300 → purple-400 → purple-500 (danger steps error-300 → 400 → 500).
- **Focus:** 1px purple `#742DDD` border + 1px purple box-shadow halo on inputs.
- **Error:** input border switches to error-300 `#DE360B`; validation text in error color.
- **Disabled:** background-200 `#E0E0E0` fill with onlight-03 (38% black) text; no interaction.
- **Empty:** plain instructive copy ("No messages yet") centered in the conversation column, neutral text, no illustration noise.
- **Loading:** lightweight skeleton/spinner in neutral grays; the composer stays docked.

## 15. Motion & Easing

Motion is **minimal and purposeful**. New messages slide/fade into the list at the bottom; the composer and channel transitions are quick (~150–200ms) ease-out movements that never block input. State changes (hover, focus, pressed) are near-instant color transitions, not animated flourishes. Overlays fade their scrim in over ~200ms. The marketing site favors restraint too — subtle reveal-on-scroll rather than parallax theatrics. The guiding rule mirrors the visual system: motion clarifies, it does not perform.

---
**Verified:** 2026-06-01 (CREATE pilot — first ref through the proof-gated pipeline)
**Tier 1 sources:** https://sendbird.github.io/sendbird-uikit-react (the UIKit's published Storybook — 38 stories / 18 components; 90 `--sendbird-*` tokens and every button state read live 2026-09-21); https://sendbird.com (live DOM via playwright getComputedStyle — marketing chrome: nav `#0E1017` 16px/500, serif h1 72px/500 `#0D0D0D`, dark pill `#0D0D0D` 24px radius, neutral chip `#F2F3F7`/`#E3E5EF` 8px, pill input 50px radius), https://sendbird.com/docs/chat/uikit/v3/android-view/customizations/resource-customization/color-resources (official UIKit color tokens — primary/secondary/error/background/onlight/ondark/overlay full palette), https://github.com/sendbird/sendbird-uikit-react (official UIKit source — Button index.scss 4px radius / Big 40px / Small 32px / variant fills, Input index.scss 7px·12px / focus + error borders, MessageContent index.scss 400px max-width / 40px avatar)
**Tier 2 sources:** getdesign.md/sendbird — NOT LISTED ("No designs found"). styles.refero.design — NOT LISTED (curated taste-set; ?q= does not server-filter; B2B SDK absent). Tier 1 (official UIKit docs + source + live inspect) treated as authoritative per pipeline.
**Conflicts unresolved:** none. Note: an earlier web search reported a green primary (#259c72) — that is the UIKit **secondary** palette; the Android `colors.xml` source confirms **primary = purple #742DDD**. Resolved in favor of the official source file.
**Proof:** see `.verification.md` (`## Proof` block, ≥5 raw computed-style samples).
**Surface split:** §4 documents two parallel systems — the UIKit product DS (purple, 4px, token-driven) and the sendbird.com marketing chrome (monochrome serif editorial, pill radius). Both retained as authoritative for their surface.
