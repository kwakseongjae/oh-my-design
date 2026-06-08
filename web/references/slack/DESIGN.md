---
id: slack
name: Slack
country: US
category: productivity
homepage: "https://slack.com"
primary_color: "#4A154B"
logo:
  type: favicon
  slug: "https://slack.com/favicon.ico"
verified: "2026-06-06"
added: "2026-06-06"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#4A154B"
    primary-hover: "#611F69"
    primary-active: "#7C3085"
    brand: "#4A154B"
    canvas: "#FFFFFF"
    foreground: "#1D1C1D"
    body: "#616061"
    muted: "#868686"
    on-primary: "#FFFFFF"
    cta-green: "#007A5A"
    cta-green-hover: "#148567"
    link: "#1264A3"
    error: "#E01E5A"
    warning: "#ECB22E"
    success: "#2BAC76"
    accent-blue: "#36C5F0"
    accent-green: "#2EB67D"
    accent-yellow: "#ECB22E"
    surface: "#F8F8F8"
    hairline: "#E8E8E8"
    sidebar: "#3F0E40"
  typography:
    family: { sans: "Lato", mono: "Monaco" }
    display-hero:  { size: 56, weight: 900, lineHeight: 1.14, tracking: -0.02, use: "Marketing hero headlines (Larsseit)" }
    display-lg:    { size: 44, weight: 700, lineHeight: 1.18, tracking: -0.01, use: "Section headers (web)" }
    heading-1:     { size: 32, weight: 700, lineHeight: 1.25, use: "Page titles" }
    heading-2:     { size: 24, weight: 700, lineHeight: 1.33, use: "Sub-sections, modal titles" }
    heading-3:     { size: 18, weight: 700, lineHeight: 1.44, use: "Card titles, channel headers" }
    subtitle:      { size: 16, weight: 700, lineHeight: 1.50, use: "List headers, emphasized labels" }
    body-lg:       { size: 16, weight: 400, lineHeight: 1.50, use: "Marketing body, descriptions" }
    body:          { size: 15, weight: 400, lineHeight: 1.46, use: "Message text — the workhorse" }
    body-sm:       { size: 13, weight: 400, lineHeight: 1.38, use: "Secondary info, metadata" }
    caption:       { size: 12, weight: 400, lineHeight: 1.33, use: "Timestamps, fine print" }
    code:          { size: 12, weight: 400, lineHeight: 1.50, use: "Inline code, code blocks (Monaco)" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48 }
  rounded: { sm: 4, md: 8, lg: 12, full: 9999 }
  shadow:
    card: "0 1px 3px rgba(0,0,0,0.08)"
    feature: "0 4px 16px rgba(0,0,0,0.10)"
    popover: "0 4px 12px rgba(0,0,0,0.12)"
    modal: "0 18px 48px rgba(0,0,0,0.35)"
  components_harvested: true
  components:
    button-primary: { type: button, bg: "#007A5A", fg: "#FFFFFF", radius: "4px", padding: "0 16px", height: "44px", font: "18px / 900", hover: "#148567", use: "Primary marketing CTA" }
    button-aubergine: { type: button, bg: "#4A154B", fg: "#FFFFFF", radius: "4px", padding: "0 16px", font: "18px / 900", hover: "#611F69", use: "Brand-forward CTA on white" }
    button-outline: { type: button, bg: "transparent", fg: "#4A154B", border: "1px solid #4A154B", radius: "4px", padding: "0 16px", font: "18px / 700", hover: "8% aubergine tint fill", use: "Secondary marketing action" }
    button-product: { type: button, bg: "#007A5A", fg: "#FFFFFF", border: "1px solid transparent", radius: "4px", padding: "0 12px", height: "36px", font: "15px / 900", hover: "#148567", use: "In-app confirm (Send, Create channel)" }
    button-danger: { type: button, bg: "#E01E5A", fg: "#FFFFFF", radius: "4px", padding: "0 12px", font: "15px / 900", hover: "darken 8%", disabled: "opacity 0.5", use: "Destructive confirm" }
    input: { type: input, bg: "#FFFFFF", fg: "#1D1C1D", border: "1px solid rgba(29,28,29,0.3)", radius: "4px", padding: "11px 12px", font: "15px / 400", focus: "border #1264A3 + 0 0 0 1px #1264A3", use: "Standard form input" }
    composer: { type: input, bg: "#FFFFFF", fg: "#1D1C1D", border: "1px solid rgba(29,28,29,0.3)", radius: "8px", padding: "8px 12px", font: "15px / 400", focus: "border rgba(29,28,29,0.5), inner shadow", use: "Message composer" }
    card: { type: card, bg: "#FFFFFF", border: "1px solid #E8E8E8", radius: "8px", padding: "24px", shadow: "0 1px 3px rgba(0,0,0,0.08)", use: "Content panels, feature cards" }
    badge-unread: { type: badge, bg: "#CD2553", fg: "#FFFFFF", radius: "9999px", padding: "1px 6px", font: "12px / 700", use: "Channel/DM unread count" }
    badge-status: { type: badge, bg: "#F8F8F8", fg: "#616061", border: "1px solid #E8E8E8", radius: "12px", padding: "2px 10px", font: "13px / 700", use: "NEW, custom status, app labels" }
    tab-sidebar: { type: tab, bg: "transparent", fg: "rgba(255,255,255,0.7)", active: "bg #1164A3, text #FFFFFF", hover: "bg rgba(255,255,255,0.1)", font: "15px / 700", use: "Channel list in sidebar" }
    tab-segmented: { type: tab, bg: "transparent", fg: "#616061", active: "text #1D1C1D, 2px bottom border #4A154B", font: "15px / 700", use: "Threads/Mentions/Saved switching" }
    toast: { type: toast, bg: "#1D1C1D", fg: "#FFFFFF", radius: "8px", padding: "12px 16px", shadow: "0 4px 12px rgba(0,0,0,0.2)", font: "15px / 400", use: "Transient confirmation" }
    banner: { type: card, bg: "#FEF7E0", fg: "#1D1C1D", border: "3px solid #ECB22E", radius: "4px", padding: "12px 16px", use: "System notice, workspace announcement" }
    dialog: { type: dialog, bg: "#FFFFFF", fg: "#1D1C1D", radius: "8px", padding: "24px", shadow: "0 18px 48px rgba(0,0,0,0.35)", use: "Create-channel, preferences, confirmation" }
    toggle: { type: toggle, bg: "#868686", radius: "9999px", states: "on #007A5A", use: "Boolean settings; white thumb" }
---

# Design System Inspiration of Slack

## 1. Visual Theme & Atmosphere

Slack is the work-messaging app that made enterprise software feel human. Where legacy collaboration tools shouted in cold corporate blues and grays, Slack leads with **Aubergine** (`#4A154B`) — a deep, warm eggplant purple that is unmistakably its own. It reads as serious-but-friendly: confident enough for a Fortune 500 IT department, warm enough that you don't dread opening it on a Monday. The aubergine anchors the left sidebar and the marketing chrome, while the content canvas stays clean white (`#FFFFFF`) with near-black text (`#1D1C1D`).

What makes Slack instantly recognizable is the tension between that single sober aubergine and the **playful four-color hashtag logo** — cerulean (`#36C5F0`), green (`#2EB67D`), magenta-red (`#E01E5A`), and yellow (`#ECB22E`). The logo's multicolor optimism signals "this is where teams come together"; the aubergine UI signals "and you can get real work done here." The brand lives in that balance: friendly but not frivolous, colorful but not chaotic.

Typographically, Slack splits its world. The **product UI** runs on **Lato** — a humanist sans with rounded warmth that stays legible at message density. The **marketing site** uses **Larsseit** for headlines (geometric, confident) with **Circular** as a companion and **Helvetica Neue / system fonts** as fallbacks. The result is a system that feels approachable in the app and bold on the web.

**Key Characteristics:**
- Aubergine (`#4A154B`) as the brand anchor — sidebar, marketing chrome, primary identity
- Four-color hashtag logo (blue/green/red/yellow) as the playful counterweight
- Lato for product UI; Larsseit + Circular for marketing headlines
- Clean white content canvas with near-black text (`#1D1C1D`)
- Green CTA (`#007A5A`) for primary marketing actions — high contrast on aubergine
- Generous border-radius (4px UI, 8–12px marketing cards) for a soft, friendly feel
- Conversational, action-oriented voice that puts work in human terms

## 2. Color Palette & Roles

### Primary
- **Aubergine** (`#4A154B`): The brand color. Left sidebar, marketing nav, logo wordmark, primary identity surfaces. Pantone 7672 C. Warm, deep eggplant — never cold purple.
- **Aubergine Null** (`#611F69`): Resting/zero state of aubergine interactive elements on web.
- **Aubergine Active** (`#7C3085`): Hover/active state derived from aubergine.
- **Pure White** (`#FFFFFF`): Primary content canvas, card surfaces, message background.
- **Near Black** (`#1D1C1D`): Primary text color. A warm off-black, not pure `#000`.

### Brand Multicolor (Logo / Accent Only)
- **Slack Blue** (`#36C5F0`): Logo lozenge. Decorative accent, illustration.
- **Slack Green** (`#2EB67D`): Logo lozenge. Online/active presence indicator inspiration.
- **Slack Red** (`#E01E5A`): Logo lozenge. Decorative accent, error-adjacent warmth.
- **Slack Yellow** (`#ECB22E`): Logo lozenge. Decorative accent, highlight.

### Action / CTA
- **CTA Green** (`#007A5A`): Primary call-to-action button on marketing surfaces. Chosen for AA contrast against aubergine backgrounds.
- **CTA Green Hover** (`#148567`): Hover state for the green CTA.
- **Link Blue** (`#1264A3`): Inline hyperlinks, interactive text in product and marketing.
- **Link Blue Hover** (`#0B4C8C`): Hover state for links.

### Semantic
- **Error Red** (`#E01E5A`): Destructive actions, error messages, validation failure.
- **Warning Yellow** (`#ECB22E`): Caution states, pending, attention-needed.
- **Success Green** (`#2BAC76`): Confirmations, sent, positive status.
- **Online Green** (`#2EB67D`): Presence dot — user is active.

### Neutral Scale
- **Black 1000** (`#1D1C1D`): Primary text, headings.
- **Gray 900** (`#454245`): Secondary text, strong labels.
- **Gray 700** (`#616061`): Body text, descriptions, metadata.
- **Gray 500** (`#868686`): Placeholder, disabled text, timestamps.
- **Gray 300** (`#E8E8E8`): Borders, dividers, input outlines.
- **Gray 200** (`#F8F8F8`): Subtle surface fills, hover backgrounds.
- **Gray 100** (`#FBFAFB`): Lightest background tint.

### Surface & Borders
- **Border Default**: `#E8E8E8`. Standard dividers, card edges, input borders.
- **Border Strong**: `#DDDDDD`. Emphasized separators.
- **Sidebar Aubergine**: `#3F0E40` (darker aubergine sidebar variant in product).
- **Overlay Scrim**: `rgba(29, 28, 29, 0.6)`. Modal backdrop.

## 3. Typography Rules

### Font Family
- **Product UI**: `Lato, "Helvetica Neue", Helvetica, "Segoe UI", Tahoma, Arial, sans-serif`
- **Marketing Headlines**: `Larsseit, "Helvetica Neue", Helvetica, Arial, sans-serif`
- **Marketing Body / Alt**: `Circular, "Helvetica Neue", Helvetica, Arial, sans-serif`
- **Monospace** (code blocks): `Monaco, Menlo, Consolas, "Courier New", monospace`
- **Emoji**: native platform emoji set, rendered inline at text size

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Larsseit | 56px | 900 | 64px (1.14) | -0.02em | Marketing hero headlines |
| Display Large | Larsseit | 44px | 700 | 52px (1.18) | -0.01em | Section headers (web) |
| Heading 1 | Larsseit / Lato | 32px | 700 | 40px (1.25) | normal | Page titles |
| Heading 2 | Lato | 24px | 700 | 32px (1.33) | normal | Sub-sections, modal titles |
| Heading 3 | Lato | 18px | 700 | 26px (1.44) | normal | Card titles, channel headers |
| Subtitle | Lato | 16px | 700 | 24px (1.50) | normal | List headers, emphasized labels |
| Body Large | Lato | 16px | 400 | 24px (1.50) | normal | Marketing body, descriptions |
| Body | Lato | 15px | 400 | 22px (1.46) | normal | Message text — the workhorse |
| Body Small | Lato | 13px | 400 | 18px (1.38) | normal | Secondary info, metadata |
| Caption | Lato | 12px | 400 | 16px (1.33) | normal | Timestamps, fine print |
| Code | Monaco | 12px | 400 | 18px (1.50) | normal | Inline code, code blocks |

### Principles
- **Two type worlds, one personality**: Lato carries the product; Larsseit carries marketing. Both are humanist/geometric sans with warmth — never a cold grotesque.
- **Weight does the work**: Lato in 400 (body), 700 (bold/headings), 900 (display). Italic for quoted/system messages.
- **Message density first**: Product body sits at 15px/1.46 — tuned for scanning long threads without fatigue.
- **Bold means emphasis, not decoration**: 700 weight signals names, headers, and `*bold*` markdown — never used for entire paragraphs.

## 4. Component Stylings

### Buttons

Slack buttons are friendly rectangles with soft corners. The hero action is the **green CTA**; aubergine and outline variants support it.

**Primary / Green (Marketing CTA)**
- Background: `#007A5A`
- Text: `#FFFFFF`
- Border: none
- Radius: 4px
- Padding: 0 16px
- Font: 18px / 900 / Larsseit (marketing), 15px / 700 / Lato (product)
- Height: 44px (marketing), 36px (product)
- Hover: `#148567`
- Use: Primary CTA — "Get started", "Try for free"

**Primary / Aubergine**
- Background: `#4A154B`
- Text: `#FFFFFF`
- Border: none
- Radius: 4px
- Padding: 0 16px
- Font: 18px / 900 / Larsseit
- Hover: `#611F69`
- Use: Brand-forward CTA on white surfaces ("Talk to sales")

**Secondary / Outline**
- Background: transparent
- Text: `#4A154B` (on light) / `#FFFFFF` (on aubergine)
- Border: 1px solid `#4A154B` (or `#FFFFFF` on dark)
- Radius: 4px
- Padding: 0 16px
- Font: 18px / 700 / Larsseit
- Hover: fill with 8% aubergine tint
- Use: Secondary marketing action ("Watch demo")

**Product / Primary**
- Background: `#007A5A`
- Text: `#FFFFFF`
- Border: 1px solid transparent
- Radius: 4px
- Padding: 0 12px
- Font: 15px / 900 / Lato
- Height: 36px
- Hover: `#148567`
- Use: In-app confirm ("Send", "Create channel")

**Product / Secondary**
- Background: `#FFFFFF`
- Text: `#1D1C1D`
- Border: 1px solid `rgba(29,28,29,0.3)`
- Radius: 4px
- Padding: 0 12px
- Font: 15px / 700 / Lato
- Hover: bg `#F8F8F8`
- Use: Cancel / dismiss / neutral action

**Danger**
- Background: `#E01E5A`
- Text: `#FFFFFF`
- Border: none
- Radius: 4px
- Padding: 0 12px
- Font: 15px / 900 / Lato
- Hover: darken 8%
- Use: Destructive confirm ("Delete", "Leave channel")

**Disabled (any variant)**: opacity `0.5`, `cursor: not-allowed`, no hover.

### Inputs

**Text Field (default)**
- Background: `#FFFFFF`
- Text: `#1D1C1D`
- Border: 1px solid `rgba(29,28,29,0.3)`
- Radius: 4px
- Padding: 11px 12px
- Font: 15px / 400 / Lato
- Placeholder: `#868686`
- Focus: border `#1264A3` + `0 0 0 1px #1264A3` ring
- Use: Standard form input

**Message Composer**
- Background: `#FFFFFF`
- Text: `#1D1C1D`
- Border: 1px solid `rgba(29,28,29,0.3)`
- Radius: 8px
- Padding: 8px 12px
- Font: 15px / 400 / Lato
- Focus: border darkens to `rgba(29,28,29,0.5)`, subtle inner shadow
- Use: The message box — taller, rounder, with toolbar row

**Error State**
- Border: 1px solid `#E01E5A`
- Focus ring: `0 0 0 1px #E01E5A`
- Helper text below: `#E01E5A`, 13px / 400 / Lato
- Use: Validation failure

### Cards

**Standard**
- Background: `#FFFFFF`
- Border: 1px solid `#E8E8E8`
- Radius: 8px
- Padding: 24px
- Shadow: `0 1px 3px rgba(0,0,0,0.08)`
- Use: Content panels, feature cards on web

**Marketing Feature**
- Background: `#FFFFFF`
- Border: none
- Radius: 12px
- Padding: 32px
- Shadow: `0 4px 16px rgba(0,0,0,0.10)`
- Use: Hero/promo cards, pricing tiles

**Message Hover Card**
- Background: `#FFFFFF`
- Border: 1px solid `#E8E8E8`
- Radius: 8px
- Padding: 0
- Shadow: `0 4px 12px rgba(0,0,0,0.12)`
- Use: Hover actions toolbar, message context popover

### Badges & Pills

**Unread Count**
- Background: `#CD2553` (notification red)
- Text: `#FFFFFF`
- Border: none
- Radius: 9999px
- Padding: 1px 6px
- Font: 12px / 700 / Lato
- Use: Channel/DM unread badge

**Mention Highlight**
- Background: `rgba(29,155,209,0.1)` to aubergine-tinted on mention
- Text: `#1264A3`
- Radius: 3px
- Padding: 0 2px
- Use: `@you` mention inline

**Status Pill**
- Background: `#F8F8F8`
- Text: `#616061`
- Border: 1px solid `#E8E8E8`
- Radius: 12px
- Padding: 2px 10px
- Font: 13px / 700 / Lato
- Use: "NEW", custom status, app labels

**Presence Dot**
- Active: `#2EB67D` (filled circle, 8px)
- Away: hollow ring `rgba(29,28,29,0.4)`
- Use: User online/away indicator

### Tabs

**Sidebar Channel (Active)**
- Background: `#1164A3` (selected, on aubergine sidebar)
- Text: `#FFFFFF`
- Font: 15px / 700 / Lato
- Inactive: text `rgba(255,255,255,0.7)`, no bg
- Hover (inactive): bg `rgba(255,255,255,0.1)`
- Use: Channel list in product sidebar

**Top Tab / Segmented**
- Background: transparent
- Text: `#616061` (inactive) / `#1D1C1D` (active)
- Active indicator: 2px bottom border `#4A154B`
- Font: 15px / 700 / Lato
- Use: Threads / Mentions / Saved tab switching

### Toasts / Banners

**Toast (Default)**
- Background: `#1D1C1D`
- Text: `#FFFFFF`
- Border: none
- Radius: 8px
- Padding: 12px 16px
- Shadow: `0 4px 12px rgba(0,0,0,0.2)`
- Font: 15px / 400 / Lato
- Use: "Message saved", transient confirmation

**Info Banner**
- Background: `#FEF7E0` (soft yellow tint)
- Text: `#1D1C1D`
- Border-left: 3px solid `#ECB22E`
- Radius: 4px
- Padding: 12px 16px
- Use: System notice, workspace announcement

### Dialogs

**Modal**
- Background: `#FFFFFF`
- Text: `#1D1C1D`
- Border: none
- Radius: 8px
- Padding: 24px
- Shadow: `0 18px 48px rgba(0,0,0,0.35)`
- Backdrop: `rgba(29,28,29,0.6)`
- Use: Create-channel, preferences, confirmation dialogs

### Toggles

**Switch**
- On: `#007A5A`
- Off: `#868686`
- Border: none
- Radius: 9999px
- Thumb: `#FFFFFF` circle with `0 1px 2px rgba(0,0,0,0.2)` shadow
- Use: Boolean settings (notifications, do-not-disturb)

---

**Verified:** 2026-06-06
**Tier 1 sources:** slack.com (live marketing site — aubergine chrome, green CTA, Larsseit headlines), Slack Brand Guidelines PDF (`a.slack-edge.com/.../Slack-Brand-Guidelines.pdf`) · https://slack.com (live production site)
**Tier 2 sources:** brandpalettes.com/slack-logo-color-codes, designyourway.net (Lato/Larsseit confirmation), onlinepalette.com/slack
**Conflicts unresolved:** none. Product UI (Lato, aubergine sidebar) and marketing web (Larsseit, green CTA) documented as parallel surfaces.

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Common values: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 48px, 64px
- Product message rows: 8px vertical between messages, 16px horizontal gutters
- Marketing sections: 64–96px vertical rhythm between blocks

### Grid & Container
- Marketing max-width: 1200px centered container
- Product layout: fixed left sidebar (260px) + flexible content + optional right pane (340px)
- 12-column grid on marketing pages with 24px gutters
- Message column: comfortable measure, full width within content area

### Whitespace Philosophy
- **Conversation breathes**: Messages get vertical air so threads stay scannable; avatar + name + timestamp form a clear left rail.
- **Marketing is bold and open**: Big headlines, generous section padding, one idea per scroll section.
- **Density where it counts**: Sidebar channel lists are compact; the content canvas is spacious.

### Border Radius Scale
- Tight (3px): inline mention highlights, small chips
- Standard (4px): buttons, inputs, small cards
- Comfortable (8px): cards, modals, message composer, toasts
- Large (12px): marketing feature cards
- Pill (9999px): badges, toggles, presence dots

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Sidebar, message rows, page background |
| Subtle (Level 1) | `0 1px 3px rgba(0,0,0,0.08)` | Standard cards, list separation |
| Raised (Level 2) | `0 4px 12px rgba(0,0,0,0.12)` | Hover toolbars, popovers, dropdowns |
| Floating (Level 3) | `0 4px 16px rgba(0,0,0,0.10)` | Marketing feature cards |
| Modal (Level 4) | `0 18px 48px rgba(0,0,0,0.35)` | Dialogs, full modals |

**Shadow Philosophy**: Slack uses neutral black shadows at low-to-moderate opacity. Elevation communicates interactivity (a hovered message reveals a floating action bar), but the product stays mostly flat — depth is reserved for things that genuinely float above the conversation. Marketing allows softer, larger shadows to lift feature cards off the page.

### Blur Effects
- Modal backdrops use a solid scrim, not blur, to keep focus sharp
- Some marketing overlays apply subtle backdrop blur on sticky nav

## 7. Do's and Don'ts

### Do
- Use Aubergine (`#4A154B`) for brand chrome — sidebar, nav, identity surfaces
- Use Green CTA (`#007A5A`) for the primary action; it pops against aubergine
- Use Lato in the product UI; Larsseit for marketing headlines
- Keep border-radius at 4px for buttons/inputs, 8px for cards/modals
- Use the four-color logo only as logo or decorative accent — never as UI state colors
- Use near-black `#1D1C1D` for text, never pure `#000000`
- Use the green presence dot (`#2EB67D`) for active status

### Don't
- Don't use aubergine as a CTA fill where green is expected — green is the action color
- Don't recolor the four-color logo or use its colors for functional UI states
- Don't use cold blue-purple — Slack's purple is warm aubergine, not violet
- Don't pack messages tightly; conversation needs vertical breathing room
- Don't use heavy shadows in-product — depth is reserved for floating elements
- Don't mix Lato and Larsseit within the same surface
- Don't set body text in bold (700); reserve it for names, headers, and `*bold*`

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, collapsed sidebar (hamburger), stacked CTAs |
| Tablet | 640–1024px | Sidebar as overlay, 2-up feature grids |
| Desktop | 1024–1280px | Full 3-pane product layout, multi-column marketing |
| Wide | >1280px | Centered 1200px container, generous margins |

### Touch Targets
- Buttons: minimum 44px tall on touch surfaces
- Channel/DM rows: 36–44px tap height
- Icon buttons: 36px minimum hit area with padding

### Collapsing Strategy
- Product sidebar collapses to an icon rail or hamburger drawer on mobile
- Right thread pane slides over content as a full-screen sheet on mobile
- Marketing hero stacks headline → subhead → CTA vertically
- Multi-column feature grids collapse to single column

### Image Behavior
- App/integration logos: 20–40px, consistent within context
- Marketing illustrations: full-bleed or contained, maintain aspect ratio
- Avatars: 36px in lists, 48px in profiles, rounded 4px (squircle), never full circle

## 9. Agent Prompt Guide

### Quick Color Reference
- Brand / Sidebar: Aubergine (`#4A154B`)
- Aubergine Hover: (`#611F69`)
- Primary CTA: Green (`#007A5A`)
- CTA Hover: (`#148567`)
- Background: White (`#FFFFFF`)
- Surface tint: Light Gray (`#F8F8F8`)
- Heading text: Near Black (`#1D1C1D`)
- Body text: Gray (`#616061`)
- Placeholder: Gray (`#868686`)
- Border: Gray (`#E8E8E8`)
- Link: Blue (`#1264A3`)
- Success / Presence: Green (`#2EB67D`)
- Error: Red (`#E01E5A`)
- Warning: Yellow (`#ECB22E`)

### Example Component Prompts
- "Create a Slack-style primary CTA: `#007A5A` bg, white text, 18px Larsseit weight 900, 44px tall, 4px radius, 0 16px padding. Hover `#148567`."
- "Build a channel sidebar row: aubergine `#3F0E40` bg. Active row `#1164A3` bg, white 15px Lato 700. Inactive `rgba(255,255,255,0.7)`. Hover `rgba(255,255,255,0.1)`. 36px tall, `#` prefix."
- "Design a message: 48px squircle avatar (4px radius) left, name 15px Lato 700 `#1D1C1D` + timestamp 12px `#868686`, body 15px/1.46 Lato 400 `#1D1C1D`. 8px vertical gap between messages."
- "Create a message composer: white bg, 1px border `rgba(29,28,29,0.3)`, 8px radius, 8px 12px padding, 15px Lato. Toolbar row of icon buttons below."
- "Build a feature card: white bg, 12px radius, 32px padding, shadow `0 4px 16px rgba(0,0,0,0.10)`. Larsseit 24px 700 title, Lato 16px/1.5 body `#616061`."

### Iteration Guide
1. Aubergine `#4A154B` is brand/chrome; green `#007A5A` is action. Don't swap them.
2. Product UI = Lato; marketing = Larsseit headlines + Circular/Lato body.
3. Radius: 4px buttons/inputs, 8px cards/modals, pill for badges/toggles.
4. Text is near-black `#1D1C1D`, never pure black. Body in 400, names/headers in 700.
5. The four-color logo is decorative only — never functional UI state colors.
6. Conversation needs vertical air; keep message rows breathing.
7. Shadows are neutral and reserved for floating elements.

---

## 10. Voice & Tone

Slack speaks like a sharp, friendly colleague: clear, warm, occasionally witty, never corporate. It puts work in human terms ("where work happens", "work starts in conversation") and favors plain verbs over jargon. Sentences are short and active. Humor shows up in microcopy and empty states, but it never gets in the way of getting something done. English is the primary voice; localized strings preserve the same warmth.

| Context | Tone |
|---|---|
| CTAs | Plain, inviting verbs: "Get started", "Try for free", "Create channel" |
| Success messages | Friendly, brief: "Message sent." "Channel created." Often a small celebratory emoji in-product. |
| Error messages | Blameless, specific, human: never "An error occurred." Say what happened and what to do. |
| Empty states | Light and encouraging: a touch of personality ("This is the very beginning of the #channel channel") plus one clear next step. |
| Onboarding | Second person, one idea at a time, conversational guidance. |
| Marketing | Confident and benefit-led: "AI in Slack doesn't make you think, it helps you do." |
| Notifications | Concise, scannable, action-first. Respect attention. |

**Forbidden phrases.** "An unexpected error occurred", "Oops! Something went wrong" without a fix, cold corporate filler ("Please be advised", "As per"), and over-cute copy on serious actions (deleting data, billing). Wit yields to clarity whenever stakes are high.

## 11. Brand Narrative

Slack ("Searchable Log of All Conversation and Knowledge") was born inside **Tiny Speck** while building the game *Glitch*. When the game failed in 2012, the internal chat tool the team had built to coordinate became the product. Founded by **Stewart Butterfield** — who had previously co-founded Flickr — Slack launched publicly in **2014** and became one of the fastest-growing SaaS products in history, reaching a billion-dollar valuation in just over a year.

The design thesis was a rejection of enterprise software's coldness. Email and legacy collaboration tools were gray, siloed, and joyless. Slack proposed that work software could be **warm, fast, and even fun** without sacrificing power. The warm aubergine — not a cold institutional blue — was a deliberate signal: this is software made by people who like people. The playful four-color hashtag logo (a 2019 redesign that unified an earlier, busier mark) carries the optimism; the disciplined aubergine UI carries the credibility.

Slack was acquired by **Salesforce in 2021 for ~$27.7 billion**, one of the largest software acquisitions ever. Today it positions itself as the conversational layer of work — increasingly the home for AI agents working alongside human teams ("all your people and AI agents working together"). Across that evolution the brand has kept its core promise: make work feel less like work.

What Slack refuses: the gray sterility of legacy enterprise tools, the chaos of unstructured communication, and the cold formality of corporate software. It occupies a deliberate middle — serious enough for the enterprise, human enough that people actually want to use it.

## 12. Principles

1. **Warm, not cold.** The brand purple is aubergine, not violet; text is near-black, not pure black. Every default leans a degree warmer than the enterprise norm — that warmth is the brand.
2. **Conversation is the interface.** Layout, spacing, and hierarchy all serve scanning and reading threads. Messages get vertical air; the content canvas stays clean.
3. **One action color.** Green (`#007A5A`) means "do the thing." Aubergine is identity, not action. Never blur the two.
4. **The logo stays playful; the UI stays disciplined.** Four colors belong to the mark and decoration. Functional UI uses the restrained aubergine/neutral/green system.
5. **Plain language wins.** Copy reads like a smart colleague talking — short, active, jargon-free. Wit is welcome until stakes are high.
6. **Fast and legible over dense.** Lato at 15px/1.46 for messages is tuned for reading volume without fatigue. Speed of comprehension is a feature.
7. **Soft corners, gentle depth.** 4–8px radii and low neutral shadows keep the product approachable. Drama is reserved for marketing.
8. **Human celebration.** Small moments of delight — an emoji on a sent message, a friendly empty state — reward the user without slowing them down.

## 13. Personas

*Personas below are fictional archetypes informed by publicly described Slack user segments, not individual people.*

**Maya, 31, San Francisco.** Product manager at a 400-person SaaS company. Lives in Slack 9 hours a day across a dozen channels. Expects threads to load instantly and search to actually find that message from three weeks ago. Uses keyboard shortcuts constantly, reacts with emoji instead of typing "got it", and judges any new tool by whether it integrates with Slack. Mild rage if a notification is noisy or mistimed.

**Daniel, 47, Chicago.** IT director rolling Slack out to a 2,000-person org. Cares about SSO, compliance, admin controls, and not getting paged at 2am. The warm aubergine and friendly tone matter less to him than uptime and granular permissions — but he appreciates that employees adopt it without training. Distrusts anything that feels like a toy until he sees the enterprise grid controls.

**Priya, 24, Austin.** New grad, first job, first week. Slack is her primary workplace. The friendly onboarding copy and empty states ("This is the very beginning of the #team channel") make a daunting new job feel approachable. Customizes her sidebar theme, sets a status emoji daily, and treats DMs like texting. Would be lost without thread notifications and `@here`.

## 14. States

| State | Treatment |
|---|---|
| **Empty (new channel)** | Friendly one-liner ("This is the very beginning of the #channel channel") in `#616061` 15px, plus a suggested action (invite people, set a topic). Personality, never sterile. |
| **Empty (search no results)** | Single line in `#868686` ("No results for '...'") with a tip to refine the query. No illustration required. |
| **Loading (first paint)** | Skeleton rows matching message structure in `#F8F8F8` with a 1.2s shimmer. Sidebar shows skeleton channel rows. |
| **Loading (sending)** | Message appears immediately in a dimmed state (`opacity 0.6`) with a small spinner; resolves to full opacity on confirm. |
| **Error (inline field)** | 1px `#E01E5A` border + `0 0 0 1px #E01E5A` focus ring, helper text below in `#E01E5A` 13px. One actionable sentence. |
| **Error (message failed)** | Red `#E01E5A` "Failed to send" label under the message with a "Retry" link. Message stays visible, never silently dropped. |
| **Error (toast)** | `#1D1C1D` bg, white 15px text, 8px radius, auto-dismiss ~4s. One blameless sentence. |
| **Success (sent)** | Message snaps to full opacity; optional small green check or emoji reaction. No blocking confirmation. |
| **Success (action)** | Brief `#1D1C1D` toast ("Channel created") bottom-center, 4s dismiss. |
| **Disabled** | Opacity `0.5`, `cursor: not-allowed`, no hover transition. Geometry preserved. |
| **Presence** | Filled green dot `#2EB67D` (active) / hollow ring `rgba(29,28,29,0.4)` (away) on avatars. |
| **Unread** | Bold channel name `#1D1C1D` 700 in sidebar + red `#CD2553` count badge for mentions/DMs. |

## 15. Motion & Easing

**Durations:**

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle flips, checkbox state |
| `motion-fast` | 100ms | Hover, focus, button press, emoji reaction pop |
| `motion-standard` | 200ms | The default — menu opens, tooltip, hover toolbar reveal |
| `motion-slow` | 300ms | Modal in/out, sidebar drawer, thread pane slide |
| `motion-emphasis` | 450ms | Celebratory moments — emoji confetti, onboarding advance |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Things appearing — menus, toasts, panes sliding in |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Things leaving — dismissals, closing menus |
| `ease-standard` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Two-way transitions — hover states, expand/collapse |
| `ease-bounce` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Reserved for delight — emoji reaction pop, celebration. Never on routine UI. |

**Signature motions.**

1. **Emoji reaction pop.** Adding a reaction scales the emoji from 0.6→1.1→1.0 over `motion-fast` with `ease-bounce`. A small, joyful overshoot — the one place bounce is licensed in-product.
2. **Thread pane slide.** The right pane slides in from `x+340px` with `motion-slow / ease-enter`; content stays visible behind it. Dismissal uses `ease-exit` and feels quicker.
3. **Hover action toolbar.** Hovering a message fades in the floating action bar over `motion-fast / ease-standard` — instant enough to feel responsive, soft enough to not flicker.
4. **Message send.** A sent message fades from `opacity 0.6` to `1.0` over `motion-standard` once confirmed by the server — a subtle settle that signals "delivered".
5. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all tokens collapse to `motion-instant`, slides become fades, and the reaction pop drops its overshoot. Fully usable, just calm.

<!--
OmD v0.1 Sources

Direct verification via WebFetch (2026-06-06):
- https://slack.com — confirms aubergine brand chrome, conversational/AI-forward
  marketing voice ("AI in Slack doesn't make you think, it helps you do",
  "work starts in conversation"), green primary CTAs.

WebSearch (2026-06-06) — grounded tokens:
- Aubergine #4A154B (Pantone 7672 C); Aubergine Null #611F69; Aubergine Active #7C3085
  (Slack Brand Guidelines PDF, a.slack-edge.com; brandpalettes.com; onlinepalette.com).
- Four-color logo: blue #36C5F0, green #2EB67D, red #E01E5A, yellow #ECB22E.
- Typography: Lato (product UI), Larsseit (marketing headlines), Circular companion,
  Helvetica Neue fallback (designyourway.net; Slack brand guidelines).

Widely documented public facts:
- Slack = "Searchable Log of All Conversation and Knowledge"; built inside Tiny Speck
  during the game Glitch; launched 2014; founder Stewart Butterfield (ex-Flickr);
  acquired by Salesforce 2021 for ~$27.7B; 2019 logo redesign to the four-color hashtag.

Personas (§13) are fictional archetypes informed by publicly described Slack user
segments. Component pixel values (radii, paddings, heights) for in-app surfaces are
representative of Slack's observed UI conventions; exact internal design-token names
may differ. Green CTA #007A5A is the observed marketing action color.
-->
