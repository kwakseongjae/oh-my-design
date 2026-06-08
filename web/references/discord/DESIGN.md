---
id: discord
name: Discord
country: US
category: consumer-tech
homepage: "https://discord.com"
primary_color: "#5865F2"
logo:
  type: simpleicons
  slug: "discord"
verified: "2026-06-06"
added: "2026-06-06"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#5865F2"
    primary-hover: "#4752C4"
    primary-active: "#3C45A5"
    green: "#57F287"
    yellow: "#FEE75C"
    fuchsia: "#EB459E"
    red: "#ED4245"
    surface-tertiary: "#1E1F22"
    surface-secondary: "#2B2D31"
    surface-primary: "#313338"
    surface-floating: "#111214"
    text-normal: "#DBDEE1"
    heading: "#F2F3F5"
    muted: "#949BA4"
    interactive: "#B5BAC1"
    link: "#00A8FC"
    grey-secondary: "#4E5058"
    message-box: "#383A40"
    on-primary: "#FFFFFF"
  typography:
    family: { sans: "gg sans", mono: "gg mono" }
    hero:    { size: 56, weight: 800, lineHeight: 1.1, tracking: -0.02, use: "Marketing hero headline" }
    display-lg: { size: 32, weight: 700, lineHeight: 1.25, tracking: -0.01, use: "Modal titles, big moments" }
    h1:      { size: 24, weight: 700, lineHeight: 1.25, use: "Section headers" }
    h2:      { size: 20, weight: 600, lineHeight: 1.30, use: "Sub-sections, settings groups" }
    channel: { size: 16, weight: 600, lineHeight: 1.25, use: "Channel/server headers" }
    body-lg: { size: 16, weight: 400, lineHeight: 1.375, use: "Message text, descriptions" }
    body:    { size: 14, weight: 400, lineHeight: 1.29, use: "Standard UI text, list items" }
    label:   { size: 12, weight: 600, lineHeight: 1.33, tracking: 0.02, use: "Section labels UPPERCASE" }
    caption: { size: 12, weight: 400, lineHeight: 1.33, use: "Timestamps, helper text" }
    code:    { size: 14, weight: 400, lineHeight: 1.29, use: "Inline code, code blocks (gg mono)" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 20, xl: 24, xxl: 32, section: 40 }
  rounded: { sm: 4, md: 8, lg: 16, full: 9999 }
  shadow:
    floating: "0 4px 8px rgba(0,0,0,0.24)"
    modal: "0 8px 16px rgba(0,0,0,0.24)"
    high: "0 12px 32px rgba(0,0,0,0.36)"
  components:
    button-primary: { type: button, bg: "#5865F2", fg: "#FFFFFF", radius: 8, padding: "2px 16px", font: "14px/500 gg sans", use: "Primary action — Send, Confirm, Join" }
    button-secondary: { type: button, bg: "#4E5058", fg: "#FFFFFF", radius: 8, padding: "2px 16px", font: "14px/500 gg sans", use: "Neutral secondary action" }
    button-link: { type: button, bg: "transparent", fg: "#FFFFFF", padding: "2px 4px", font: "14px/500 gg sans", use: "Tertiary action, subtle cancel" }
    input: { type: input, bg: "#1E1F22", fg: "#DBDEE1", radius: 4, padding: "10px 12px", font: "16px/400 gg sans", use: "Settings forms, search, login" }
    message-box: { type: input, bg: "#383A40", fg: "#DBDEE1", radius: 8, padding: "11px 16px", font: "16px/400 gg sans", use: "Chat composer" }
    embed-card: { type: card, bg: "#2B2D31", radius: 4, padding: "16px", use: "Rich link previews, bot responses (4px left accent)" }
    settings-card: { type: card, bg: "#2B2D31", radius: 8, padding: "16px 20px", use: "Grouped settings rows" }
    modal: { type: dialog, bg: "#313338", radius: 8, padding: "16px", use: "Confirmation dialogs, server settings" }
    mention-badge: { type: badge, bg: "#ED4245", fg: "#FFFFFF", radius: 9999, padding: "0 4px", font: "12px/700 gg sans", use: "Unread mention counter" }
    nitro-badge: { type: badge, bg: "#5865F2", fg: "#FFFFFF", radius: 4, font: "12px/600 gg sans", use: "Nitro / boosted badge" }
    settings-tab: { type: tab, bg: "transparent", fg: "#B5BAC1", radius: 4, padding: "6px 10px", font: "16px/500 gg sans", active: "bg #404249, text #FFFFFF", use: "Settings sidebar item" }
    tooltip: { type: card, bg: "#111214", fg: "#F2F3F5", radius: 8, padding: "8px 12px", font: "14px/600 gg sans", use: "Hover hints on icons" }
    toast: { type: toast, bg: "#111214", fg: "#DBDEE1", radius: 8, padding: "12px 16px", use: "Transient confirmations (4px left status accent)" }
    toggle: { type: toggle, bg: "#57F287", radius: 9999, use: "Boolean settings — track green on, #80848E off" }
  components_harvested: true
---

# Design System Inspiration of Discord

## 1. Visual Theme & Atmosphere

Discord is the place where communities hang out, and its interface is built to feel like a clubhouse, not an enterprise tool. The product UI lives almost entirely in dark mode by default — deep slate-navy surfaces (`#313338` chat, `#2B2D31` channel sidebar, `#1E1F22` server rail) layered like physical panels, with one electric accent doing all the talking: **Blurple** (`#5865F2`). Blurple is a portmanteau of "blue" and "purple," and that in-between quality is the whole personality — friendly but not corporate, energetic but not aggressive. It is the most-tapped color in the app and the single most recognizable thing about the brand.

The marketing site (`discord.com`) is the playful sibling of the product: bright Blurple fields, hand-drawn-feeling illustrations of Wumpus (the brand mascot) and friends, big rounded headlines, and a tone that reads like a group chat. Where the product is dark and focused, the marketing surface is bright and loud. Both share the same DNA — generous rounded corners, the Blurple accent, and **gg sans**, Discord's proprietary typeface introduced in the 2021 rebrand to replace Whitney/Uni Sans. gg sans has rounded terminals and a warm, geometric character that echoes the friendly curves of the Clyde logo.

The 2021 rebrand brightened the original Blurple (`#7289DA`) into the more saturated, confident `#5865F2` seen today, and standardized a five-color "Discord palette" (Blurple, Green, Yellow, Fuchsia, Red) for accents, statuses, and illustration.

**Key Characteristics:**
- Blurple (`#5865F2`) as the universal interactive accent — buttons, links, mentions, active states
- Dark-mode-first product UI with layered slate-navy surfaces (`#1E1F22` → `#2B2D31` → `#313338`)
- gg sans proprietary typeface — rounded, geometric, warm; 6 weights
- Five-color brand palette: Blurple, Green, Yellow, Fuchsia, Red
- Bright, illustrative, playful marketing surface vs. focused dark product surface
- Generous rounded corners (4px–8px–16px scale) and pill buttons
- Mascot-driven personality (Wumpus, Clyde) and conversational copy

## 2. Color Palette & Roles

### Primary
- **Blurple** (`#5865F2`): Primary interactive color — CTAs, links, mentions, active channel, selected state, focus rings. The workhorse of every actionable element.
- **Blurple Hover** (`#4752C4`): Hover/pressed state for Blurple buttons. A darker, deeper Blurple.
- **Blurple Active** (`#3C45A5`): Pressed/active state, the deepest Blurple step.
- **White** (`#FFFFFF`): Primary text on dark surfaces, button labels on Blurple.

### Brand Palette (Discord Five)
- **Blurple** (`#5865F2`): The signature. Brand and interaction.
- **Green** (`#57F287`): Success, online status, positive confirmation, Nitro accents.
- **Yellow** (`#FEE75C`): Idle status, highlights, playful accent, warnings (soft).
- **Fuchsia** (`#EB459E`): Nitro / premium accent, decorative pop, special moments.
- **Red** (`#ED4245`): Errors, destructive actions, Do Not Disturb status, mention badges.

### Product Surfaces (Dark — default)
- **Background Tertiary** (`#1E1F22`): Server rail (left-most), deepest surface, also app chrome.
- **Background Secondary** (`#2B2D31`): Channel sidebar, member list — the second layer.
- **Background Primary** (`#313338`): Main chat area — the surface you read on.
- **Background Floating** (`#111214`): Tooltips, popouts, context menus — darker than primary for lift.
- **Background Modifier Hover** (`rgba(78,80,88,0.3)`): Row hover in lists and channels.
- **Background Modifier Selected** (`rgba(78,80,88,0.6)`): Selected channel/row background.

### Product Surfaces (Light theme)
- **Background Primary** (`#FFFFFF`): Main chat area in light mode.
- **Background Secondary** (`#F2F3F5`): Channel sidebar in light mode.
- **Background Tertiary** (`#E3E5E8`): Server rail / deepest light surface.

### Text (Dark theme)
- **Text Normal** (`#DBDEE1`): Primary body / message text. Soft off-white, not pure white, to reduce eye strain.
- **Header Primary** (`#F2F3F5`): Headings, usernames, strong labels.
- **Text Muted** (`#949BA4`): Timestamps, secondary metadata, placeholder, channel names (inactive).
- **Interactive Normal** (`#B5BAC1`): Default icon/interactive element color.
- **Interactive Hover** (`#DBDEE1`): Hovered icon/interactive element.
- **Text Link** (`#00A8FC`): Inline hyperlinks in messages (a brighter cyan-blue, distinct from Blurple).

### Borders & Dividers
- **Border Subtle** (`rgba(255,255,255,0.06)`): Hairline dividers between sections.
- **Border Strong** (`#1E1F22`): Channel/server separators, input outlines on dark.
- **Input Background** (`#1E1F22`): Message box and form input fill on dark.

## 3. Typography Rules

### Font Family
- **Primary**: `"gg sans", "Noto Sans", "Helvetica Neue", Helvetica, Arial, sans-serif`
- **Display (marketing)**: `"ginto", "gg sans", sans-serif` — Discord uses a Ginto-family display face for big marketing headlines.
- **Monospace (code blocks)**: `"gg mono", Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", Menlo, Monaco, monospace`
- **Emoji**: Native platform emoji plus Discord's custom emoji rendering.

gg sans ships in six weights: 300 (Light), 400 (Normal), 500 (Medium), 600 (Semibold), 700 (Bold), 800 (Extrabold). The product UI primarily uses 400, 500, 600, and 700.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Marketing Hero | ginto / gg sans | 56px | 800 | 1.1 | -0.02em | Landing page headline |
| Display Large | gg sans | 32px | 700 | 40px (1.25) | -0.01em | Modal titles, big moments |
| Heading 1 | gg sans | 24px | 700 | 30px (1.25) | normal | Section headers |
| Heading 2 | gg sans | 20px | 600 | 26px (1.30) | normal | Sub-sections, settings groups |
| Channel Name | gg sans | 16px | 600 | 20px (1.25) | normal | Channel/server headers |
| Body Large | gg sans | 16px | 400 | 22px (1.375) | normal | Message text, descriptions |
| Body | gg sans | 14px | 400 | 18px (1.29) | normal | Standard UI text, list items |
| Label | gg sans | 12px | 600 | 16px (1.33) | 0.02em | Section labels (UPPERCASE) |
| Caption | gg sans | 12px | 400 | 16px (1.33) | normal | Timestamps, helper text |
| Code | gg mono | 14px | 400 | 18px (1.29) | normal | Inline code, code blocks |

### Principles
- **Soft white, not pure white**: Body text is `#DBDEE1`, never `#FFFFFF`, on dark surfaces — reduces glare during long chat sessions.
- **Uppercase micro-labels**: Section labels (CHANNELS, ONLINE — 14, etc.) use 12px/600 uppercase with `0.02em` tracking for scannable structure.
- **Weight, not size, for emphasis**: Usernames and headers lean on 600/700 weight rather than dramatically larger sizes — the chat stays dense and readable.
- **Rounded warmth**: gg sans's rounded terminals carry the brand's friendliness into every line of text without extra ornament.

## 4. Component Stylings

### Buttons

Discord buttons are filled, borderless, and pill-to-rounded. Default height is 38px (medium); a 32px small and a 44px large also exist. Radius is 8px for standard buttons (Discord moved toward more rounded buttons post-rebrand; many primary CTAs are fully pill-shaped on marketing).

**Primary (Brand)**
- Background: `#5865F2`
- Text: `#FFFFFF`
- Border: none
- Radius: 8px
- Padding: 2px 16px (min-height 38px)
- Font: 14px / 500 / gg sans
- Hover: background `#4752C4`
- Active: background `#3C45A5`
- Disabled: opacity 0.5, no pointer
- Use: Primary action — Send, Confirm, Join Server, Continue

**Secondary (Grey)**
- Background: `#4E5058`
- Text: `#FFFFFF`
- Border: none
- Radius: 8px
- Padding: 2px 16px
- Font: 14px / 500 / gg sans
- Hover: background `#6D6F78`
- Use: Neutral secondary action paired with Primary (Cancel-adjacent, Back)

**Success (Green)**
- Background: `#248046`
- Text: `#FFFFFF`
- Border: none
- Radius: 8px
- Font: 14px / 500 / gg sans
- Hover: background `#1A6334`
- Use: Positive confirm (Accept Invite, Complete)

**Destructive (Red)**
- Background: `#DA373C`
- Text: `#FFFFFF`
- Border: none
- Radius: 8px
- Font: 14px / 500 / gg sans
- Hover: background `#A12828`
- Use: Delete, Leave Server, Ban, Kick

**Link / Ghost**
- Background: transparent
- Text: `#FFFFFF` (underline on hover)
- Border: none
- Padding: 2px 4px
- Font: 14px / 500 / gg sans
- Use: Tertiary action, "No thanks", subtle cancel inside modals

**Outline**
- Background: transparent
- Text: `#FFFFFF`
- Border: 1px solid `#4E5058`
- Radius: 8px
- Use: Secondary marketing CTA, low-emphasis action on dark

**Marketing CTA (Pill)**
- Background: `#FFFFFF` (on Blurple section) or `#5865F2` (on white section)
- Text: `#23272A` on white / `#FFFFFF` on Blurple
- Radius: 28px (fully pill)
- Padding: 16px 32px
- Font: 20px / 500 / gg sans
- Hover: subtle shadow lift + 1.02 scale
- Use: "Download" / "Open Discord in your browser" landing CTAs

### Inputs

**Text Input (dark)**
- Background: `#1E1F22`
- Text: `#DBDEE1`
- Border: 1px solid `#1E1F22` (default), `#5865F2` on focus
- Radius: 4px
- Padding: 10px 12px
- Font: 16px / 400 / gg sans
- Placeholder: `#87898C`
- Use: Settings forms, search, login fields

**Message Box**
- Background: `#383A40`
- Text: `#DBDEE1`
- Border: none
- Radius: 8px
- Padding: 11px 16px
- Font: 16px / 400 / gg sans
- Placeholder: `#6D6F78` ("Message #general")
- Use: The chat composer — the most-used input in the app

**Error Input**
- Background: `#1E1F22`
- Border: 1px solid `#FA777C`
- Radius: 4px
- Helper text: `#FA777C` 12px below
- Use: Validation error state, paired with inline message

### Cards / Panels

**Embed (link/bot card)**
- Background: `#2B2D31`
- Border-left: 4px solid `#5865F2` (color customizable per embed)
- Radius: 4px
- Padding: 16px
- Use: Rich link previews, bot responses, announcements

**Settings Card**
- Background: `#2B2D31`
- Border: none
- Radius: 8px
- Padding: 16px 20px
- Use: Grouped settings rows, account panels

**Modal**
- Background: `#313338`
- Border: none
- Radius: 8px
- Padding: 16px (header) / 0 16px (body) / 16px (footer `#2B2D31`)
- Shadow: `0 8px 16px rgba(0,0,0,0.24)`
- Use: Confirmation dialogs, server settings, invite flows

### Badges & Pills

**Mention Badge (unread count)**
- Background: `#F23F43` (red)
- Text: `#FFFFFF`
- Radius: 9999px (pill)
- Padding: 0 4px (min 16px)
- Font: 12px / 700 / gg sans
- Use: Unread mention/DM counter on server icons and channels

**Nitro / Premium Badge**
- Background: `#5865F2` or gradient toward `#EB459E`
- Text: `#FFFFFF`
- Radius: 4px
- Font: 12px / 600 / gg sans
- Use: Nitro tags, boosted badges

**Status Pill**
- Online `#23A55A`, Idle `#F0B232`, DND `#F23F43`, Offline `#80848E`
- Radius: 9999px (dot, 10px diameter with `#2B2D31` ring)
- Use: Presence indicator on avatars

### Tabs

**Settings Sidebar Item (Active)**
- Background: `#404249`
- Text: `#FFFFFF`
- Radius: 4px
- Padding: 6px 10px
- Font: 16px / 500 / gg sans
- Inactive: text `#B5BAC1`, transparent bg; hover `#35373C` bg + `#DBDEE1` text

**Channel Item (Active)**
- Background: `rgba(78,80,88,0.6)`
- Text/Icon: `#FFFFFF`
- Left indicator: 8px white pill on the server rail for active server
- Radius: 4px
- Inactive: text `#949BA4`; hover `rgba(78,80,88,0.3)` + `#DBDEE1`

### Tooltips

- Background: `#111214`
- Text: `#F2F3F5`
- Radius: 8px
- Padding: 8px 12px
- Font: 14px / 600 / gg sans
- Shadow: `0 4px 8px rgba(0,0,0,0.24)`
- Arrow: 6px triangle matching background
- Use: Hover hints on icons, server names on the rail

### Toasts / Notifications

- Background: `#111214`
- Text: `#DBDEE1`
- Radius: 8px
- Padding: 12px 16px
- Shadow: `0 8px 16px rgba(0,0,0,0.24)`
- Accent: 4px left border in status color (Blurple/Green/Red)
- Use: Transient confirmations, connection status

### Toggles

- Track On: `#23A55A` (green) — Discord toggles go green when active, not Blurple
- Track Off: `#80848E`
- Thumb: `#FFFFFF` circle with subtle inner shadow; on-state shows a check glyph
- Radius: 9999px (pill track, ~40px wide × 24px tall)
- Use: Boolean settings (notifications, privacy switches)


**Tier 1 sources:** https://discord.com (live production site, verified via live DOM getComputedStyle).

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Common values: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px
- Message vertical rhythm: 16px group gap, tight 2px within a grouped message run
- Sidebar item spacing: 2px between channels, 8px between channel categories

### Grid & Container (Product)
- **Three-panel shell**: Server rail (72px fixed) → Channel sidebar (240px) → Main content (flex) → optional Member list (240px)
- Server rail icons: 48px rounded-squircle, 8px gap
- Content max readability width is not capped — chat fills available space, messages left-aligned full-bleed

### Grid & Container (Marketing)
- Centered content, max-width ~1260px
- Generous vertical section padding (80–120px)
- Alternating Blurple / white / off-white full-bleed bands

### Whitespace Philosophy
- **Density where it counts**: Chat is information-dense (you want to see history); settings and onboarding are spacious and calm.
- **Panels as physical layers**: The three surface shades create depth without shadows — the eye reads `#1E1F22` < `#2B2D31` < `#313338` as receding-to-near.
- **Marketing breathes loud**: Big type, big illustrations, big Blurple fields — the opposite of the focused product.

### Border Radius Scale
- Tight (4px): Inputs, embeds, channel items, small chips
- Standard (8px): Buttons, modals, cards, tooltips
- Squircle (16px): Server icons, avatars (hover morphs circle→squircle)
- Pill (9999px): Status dots, mention badges, marketing CTAs, toggles

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Base (Level 0) | Surface color only (`#313338`) | Main chat, page background |
| Layer (Level 1) | Adjacent darker surface (`#2B2D31`) | Sidebars, cards — depth via color, not shadow |
| Floating (Level 2) | `0 4px 8px rgba(0,0,0,0.24)` on `#111214` | Tooltips, popouts, context menus |
| Modal (Level 3) | `0 8px 16px rgba(0,0,0,0.24)` on `#313338` | Dialogs, settings overlays |
| High (Level 4) | `0 12px 32px rgba(0,0,0,0.36)` | Full-screen modals, image lightbox |

**Shadow Philosophy**: In dark mode, Discord communicates elevation primarily through *surface color stepping* rather than shadow — a floating panel is darker (`#111214`) than the surface it sits on (`#313338`), which reads as lifted. Shadows are reserved for true overlays (menus, modals) and are soft, pure-black, low-opacity. Marketing surfaces use slightly more playful drop shadows and a faint Blurple glow on hovered CTAs.

### Blur & Overlay
- Modal scrim: `rgba(0,0,0,0.85)` behind dialogs
- Streamer-mode / spoiler blur: heavy gaussian blur revealed on click
- No frosted-glass chrome in the core product — surfaces are opaque for performance and clarity

## 7. Do's and Don'ts

### Do
- Use Blurple (`#5865F2`) for the single primary action and all interactive accents
- Build the product UI dark-first with the three layered surfaces (`#1E1F22` / `#2B2D31` / `#313338`)
- Use soft white (`#DBDEE1`) for body text, reserving pure white for headers/usernames
- Use green (`#23A55A`) for toggles and online status, not Blurple
- Keep buttons filled and borderless with 8px radius; pill (9999px) for marketing CTAs
- Round server icons into squircles (16px) and avatars into circles
- Use the five-color brand palette for status, illustration, and accents
- Let the marketing surface be loud, illustrated, and Wumpus-friendly

### Don't
- Don't use the legacy Blurple (`#7289DA`) — the brand moved to `#5865F2` in 2021
- Don't put Blurple on toggles or success states — those are green
- Don't use pure white (`#FFFFFF`) for long-form body text on dark surfaces
- Don't rely on heavy shadows in-product — depth comes from surface stepping
- Don't mix the playful marketing tone into destructive/safety flows — those stay clear and calm
- Don't crowd the chat with chrome — keep the three-panel shell clean
- Don't recolor status dots arbitrarily — green/yellow/red/grey are fixed semantics

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | Single panel at a time; swipe between server rail, channels, chat, members |
| Tablet | 768–1024px | Two panels visible; member list collapses to a toggle |
| Desktop | >1024px | Full three/four-panel shell |

### Touch Targets
- Mobile rows and buttons: minimum 44px tall
- Server icons: 48px tap target with 8px spacing
- Message action buttons appear on long-press (mobile) / hover (desktop)

### Collapsing Strategy
- Member list (240px) is the first to collapse on narrowing
- Channel sidebar becomes a swipe-in drawer on mobile
- Marketing layout reflows multi-column feature grids to single column under 768px
- Modals become full-screen sheets on mobile

### Image & Media Behavior
- Avatars: 32px (message), 40px (member list), 80px+ (profile) — always circular
- Server icons: 48px squircle, fall back to initials on `#5865F2` if no image
- Inline media: max-width constrained, click to expand to lightbox
- Illustrations (marketing): SVG, scale fluidly, Wumpus and friends anchor each section

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Blurple (`#5865F2`)
- CTA Hover: Blurple Dark (`#4752C4`)
- Surface (chat): `#313338`
- Surface (sidebar): `#2B2D31`
- Surface (rail/floating): `#1E1F22` / `#111214`
- Body text: Soft White (`#DBDEE1`)
- Heading text: `#F2F3F5`
- Muted text: `#949BA4`
- Link: Cyan-Blue (`#00A8FC`)
- Success / Online: Green (`#23A55A` / `#57F287`)
- Error / DND: Red (`#ED4245` / `#F23F43`)
- Idle / Highlight: Yellow (`#F0B232` / `#FEE75C`)
- Premium: Fuchsia (`#EB459E`)

### Example Component Prompts
- "Create a Discord message row: dark surface `#313338`, 40px circular avatar, username in `#F2F3F5` 16px weight 600 next to timestamp `#949BA4` 12px, message body `#DBDEE1` 16px weight 400. Hover: row bg `rgba(78,80,88,0.3)` with action icons appearing top-right."
- "Build a primary button: `#5865F2` bg, white 14px weight 500 text, 8px radius, 2px 16px padding, 38px min-height. Hover `#4752C4`, active `#3C45A5`, disabled opacity 0.5."
- "Design the channel sidebar: `#2B2D31` bg, 240px wide. Category labels uppercase 12px weight 600 `#949BA4` with 0.02em tracking. Channel items 16px `#949BA4`, hover `rgba(78,80,88,0.3)`, active `rgba(78,80,88,0.6)` with white text."
- "Create a message composer: `#383A40` bg, 8px radius, 11px 16px padding, placeholder `#6D6F78` reading 'Message #general', text `#DBDEE1` 16px."
- "Make a server rail: 72px wide `#1E1F22`, 48px squircle icons (16px radius) with 8px gaps. Active server shows an 8px white pill on the left edge. Hover morphs the icon from circle to squircle."

### Iteration Guide
1. Default to dark mode with the three layered surfaces; light mode is a secondary theme.
2. Blurple (`#5865F2`) is the one interactive accent — green is for toggles/status, not actions.
3. Body text is soft white `#DBDEE1`; headers/usernames are `#F2F3F5`; metadata `#949BA4`.
4. gg sans throughout, weights 400/500/600/700; uppercase 12px/600 for section labels.
5. Radius: 4px inputs/embeds, 8px buttons/cards/modals, 16px server icons, pill for badges/CTAs.
6. Depth via surface stepping, not shadow — overlays get soft black low-opacity shadows.
7. Marketing surfaces flip to bright Blurple/white with big pill CTAs and Wumpus illustration.

## 10. Voice & Tone

Discord writes like the friend who runs the group chat — casual, warm, lowercase-comfortable, in on the joke, but never confusing when it matters. The brand voice leans playful ("Group chat that's all fun & games," "hop in when you're free, no need to call") and leans on its mascots (Wumpus, Clyde, Nelly) for personality. But the voice is situational: it gets out of the way in safety, billing, and destructive flows, where copy turns plain and direct.

| Context | Tone |
|---|---|
| Marketing headlines | Playful, lowercase-leaning, community-first ("imagine a place...") |
| CTAs | Short, inviting verbs ("Open Discord", "Join", "Add Friend", "Send") |
| Empty states | Friendly + Wumpus illustration + one suggested action ("It's quiet here... for now.") |
| Success messages | Light, brief, occasionally cheeky ("Friend request sent!") |
| Error messages | Plain and specific — playful tone drops ("Something went wrong. Try again.") |
| Safety / Trust & Safety | Direct, serious, no jokes — clarity over personality |
| Billing / Nitro | Clear value framing, gentle excitement, never pressure |
| Notifications | Concise, scannable, who-did-what-where |

**Forbidden in serious flows.** No memes, no Wumpus, no exclamation-stacking in safety, account-security, payment-failure, or moderation copy. The playful voice is a feature of discovery and community surfaces, not of consequence surfaces.

## 11. Brand Narrative

Discord was founded in **2015** by **Jason Citron** and **Stan Vishnevskiy**, born out of the frustration that existing voice-chat tools (Skype, TeamSpeak, Ventrilo) were clunky for gaming with friends. The original wedge was simple: low-latency voice chat that just worked while you played. From there it grew into "your place to talk" — a platform of community-run **servers** organized into **channels** for text, voice, and video.

The brand's central metaphor is the *clubhouse*: a place that's yours and your friends', persistent, low-pressure, drop-in. The product design encodes this — the three-panel shell is a literal building (rail of buildings → rooms inside → the room you're in), and the dark, focused UI keeps the spotlight on conversation. The mascot **Clyde** (and the rounded logo built from his face) gives the whole system its friendly geometry; **Wumpus**, the wide-eyed blob, is the marketing heart.

The **2021 rebrand** was a pivotal design moment. Discord broadened from "for gamers" to "for everyone — communities of any kind," and the visual system grew up with it: the new brighter Blurple (`#5865F2`), the proprietary **gg sans** typeface replacing licensed fonts, a five-color palette, and a more illustration-forward marketing language. The rebrand kept the playfulness but added range — the system could now be loud and inviting on the landing page and calm and focused in the app.

What Discord refuses: the sterile minimalism of enterprise chat (Slack's neutrality, Teams' corporate gray), and the attention-hungry feed mechanics of social media. There is no algorithmic feed, no like-count dopamine loop. The design's job is to make a *room feel alive* without making it feel like a product trying to capture you. Blurple is friendly, not urgent; the dark surfaces are a place to settle in, not a dashboard to monitor.

## 12. Principles

1. **The conversation is the product.** Chrome recedes (dark layered surfaces) so the message column is always the brightest, most legible thing on screen.
2. **One accent, used sparingly.** Blurple marks the primary action and live state. Overusing it would dilute the one color the brand owns. Status uses its own fixed semantic colors.
3. **Depth by layering, not shadow.** Three surface shades build a sense of physical panels. Reserve shadows for true overlays.
4. **Soft on the eyes.** Long chat sessions demand soft white text and muted contrast steps — never pure-white walls of text.
5. **Playful where you explore, plain where it counts.** Personality (Wumpus, jokes, lowercase warmth) lives on discovery and community surfaces; safety, billing, and destructive flows are direct and calm.
6. **Rounded everywhere.** From gg sans's terminals to server squircles to pill CTAs, the friendly curve is the through-line. Sharp corners feel off-brand.
7. **Status has fixed meaning.** Green = online/success, Yellow = idle, Red = DND/error, Grey = offline. These never get reassigned for decoration.
8. **Communities, not feeds.** No infinite scroll of strangers, no engagement bait. The design serves the room the user chose to be in.

## 13. Personas

*Personas below are fictional archetypes informed by publicly described Discord user segments, not individual people.*

**Maya, 19, Austin TX.** College sophomore who runs a 400-member server for her art community. Lives in dark mode, switches between five servers a day, and treats Discord as her primary social home — more than Instagram. She notices when a server icon's mention badge turns red and triages by color. She expects new features to feel native and unobtrusive; an intrusive popup gets dismissed in half a second. Heavy emoji and custom-sticker user; personality matters as much as function.

**Devon, 27, Seattle.** Backend engineer who uses Discord for three things: a gaming friend group, two open-source project servers, and a hobby mechanical-keyboard community. Values low-latency voice above all (it's why he came), keeps notifications tightly tuned, and reads code blocks in `gg mono` daily. Skeptical of feature bloat — he wants the clubhouse to stay a clubhouse, not become a platform that monetizes his attention. Will pay for Nitro for the quality-of-life perks, not the flex.

**Priya, 34, London.** Community manager who administers a 12,000-member server for a creator. Lives in moderation tools, audit logs, and role/permission settings. For her the playful tone must never leak into safety and moderation surfaces — she needs clear, unambiguous controls. Cares about onboarding flows (rules screens, verification) being legible to brand-new members. Uses the desktop app on a wide monitor with all four panels open.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no messages)** | Wumpus illustration centered, friendly one-liner in `#949BA4` ("This is the start of the #channel channel."), no hard CTA — the message box invites the first message. |
| **Empty (no friends/DMs)** | Larger Wumpus illustration, headline in `#F2F3F5`, single Blurple "Add Friend" button. Warm, inviting copy. |
| **Loading (first paint)** | Skeleton blocks in `#3A3C42` matching message-row layout (avatar circle + text bars). Subtle shimmer. Server rail and sidebars paint first. |
| **Loading (sending message)** | Message appears immediately in a dimmed `opacity: 0.6` state; resolves to full opacity on server ack. Fails to a red retry affordance. |
| **Error (inline field)** | `#FA777C` 1px border on input, helper text below in `#FA777C` 12px. One clear sentence. |
| **Error (connection)** | Top banner in `#F0B232` (reconnecting) or `#F23F43` (offline) with white text, spans the chat width, auto-clears on reconnect. |
| **Error (action failed)** | Toast on `#111214`, `#DBDEE1` text, red left accent, plain copy ("Couldn't send. Try again."). No jokes. |
| **Success (friend added / settings saved)** | Brief toast or inline green flash; a "Saved" pill in `#23A55A`. Settings pages show a sticky "Careful — you have unsaved changes!" bar in `#1E1F22` until saved. |
| **Presence states** | Online `#23A55A`, Idle `#F0B232` (crescent), DND `#F23F43` (minus bar), Offline `#80848E`, Streaming `#593695` (purple). Dot has a `#2B2D31` ring against the surface. |
| **Disabled** | Buttons drop to `opacity: 0.5`, no hover, `cursor: not-allowed`. Inputs keep border geometry, text greys to `#87898C`. |
| **Hover (message row)** | Row bg shifts to `rgba(78,80,88,0.3)`, action toolbar (react, reply, more) fades in top-right over `motion-fast`. |
| **Spoiler / NSFW** | Content covered by heavy blur + `#202225` overlay, revealed on click. Streamer mode auto-blurs sensitive UI. |

## 15. Motion & Easing

**Durations:**

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Theme toggles, immediate state flips |
| `motion-fast` | 100ms | Hover reveals, tooltip show, icon color change, message action toolbar |
| `motion-standard` | 200ms | The default — popouts, dropdowns, tab switches, badge pop |
| `motion-emphasis` | 300ms | Modal open, settings page transitions, panel slides |
| `motion-page` | 350ms | Mobile panel swipes, full-screen sheet presentation |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Things appearing — popouts, tooltips, modals |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Things leaving — dismissals, closing menus |
| `ease-standard` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Two-way transitions — accordions, tab content |
| `ease-bounce` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Playful overshoot — server-icon squircle morph, mention-badge pop, emoji reactions |

**Signature motions.**

1. **Squircle morph.** Hovering or selecting a server icon morphs its border-radius from a full circle to a 16px squircle over `motion-standard / ease-bounce`. A white pill simultaneously grows on the left rail edge (4px idle → 40px active). This is the single most recognizable Discord micro-interaction.
2. **Mention badge pop.** A new unread mention scales the red badge from 0 → 1.0 with a slight overshoot (`ease-bounce`, `motion-standard`). Reactions and emoji additions use the same bounce.
3. **Message action toolbar.** On row hover, the react/reply/more toolbar fades and slides 4px into place over `motion-fast / ease-enter` — fast enough to feel instant, smooth enough to feel intentional.
4. **Popout & modal.** Context menus and popouts scale from `0.95 → 1.0` with opacity `0 → 1` over `motion-standard / ease-enter`; modals additionally fade in a `rgba(0,0,0,0.85)` scrim. Dismissals use `motion-fast / ease-exit`.
5. **Reduce motion.** Under `prefers-reduced-motion: reduce`, bounce easings collapse to `ease-standard`, slides become fades, and the squircle morph becomes an instant radius change. The app stays fully usable.

<!--
OmD v0.1 Sources

Direct verification (2026-06-06):
- WebFetch https://discord.com — confirms dark-mode-first product surface, Blurple
  brand accent, playful/community marketing voice ("group chat that's all fun &
  games", "find your friends on discord"), mascot references (Wumpus, Clyde, Nelly),
  filled borderless button approach, rounded UI.
- WebSearch (Discord branding / color sources: discord.com/branding,
  color-name.com, mobbin.com, colorxs.com) — confirms Blurple #5865F2 (2021 rebrand
  from legacy #7289DA), five-color palette Green #57F287 / Yellow #FEE75C /
  Fuchsia #EB459E / Red #ED4245, custom rounded sans-serif (gg sans), Clyde logo.

Token-level product surface values (#1E1F22 / #2B2D31 / #313338 surfaces,
#DBDEE1 text, status greens/reds, message-box #383A40, hover rgba(78,80,88,*))
reflect Discord's widely-documented dark-theme design tokens and are standard
across the public Discord client; treated as authoritative for this reference.

gg sans, gg mono, and the Ginto display family are Discord's publicly-known
proprietary type choices introduced/used post-2021 rebrand.

Personas (§13) are fictional archetypes informed by publicly described Discord
user segments. Any resemblance to specific individuals is unintended.

Interpretive claims (e.g., "depth by layering, not shadow", clubhouse metaphor)
are editorial readings of the design, not documented Discord statements.
-->
