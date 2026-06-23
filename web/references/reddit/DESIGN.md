---
id: reddit
name: Reddit
country: US
category: consumer-tech
homepage: "https://www.reddit.com"
primary_color: "#FF4500"
logo:
  type: simpleicons
  slug: reddit
verified: "2026-06-22"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-22"
  note: "primary = brand OrangeRed #FF4500 (wordmark, logo); CTA/upvote active = #D93900 (darker live interactive). Downvote = alien blue-purple #6A5CFF. Link blue #115BCA. Body text #333D42. All from live CSS custom properties via playwright inspect."
  colors:
    primary: "#FF4500"
    primary-interactive: "#D93900"
    primary-hover: "#AE2C00"
    brand-orangered: "#FF4500"
    alien-blue: "#1870F4"
    action-primary: "#0A449B"
    action-secondary: "#0A2F6C"
    downvote: "#6A5CFF"
    downvote-hover: "#523DFF"
    canvas: "#FFFFFF"
    canvas-weak: "#F6F8F9"
    canvas-container: "#EEF1F3"
    surface: "#E5EBEE"
    foreground-strong: "#181C1F"
    foreground: "#333D42"
    foreground-weak: "#5C6C74"
    on-primary: "#FFFFFF"
    link: "#115BCA"
    link-hover: "#0A449B"
    link-visited: "#9B00D4"
    divider: "#E5EBEE"
    success: "#008A10"
    error: "#BC0117"
    warning: "#B78800"
    dark-bg: "#2A3236"
  typography:
    family: { sans: "-apple-system, system-ui, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif", mono: "Noto Mono, monospace" }
    display-lg: { size: 24, weight: 700, lineHeight: 1.33, use: "Page/subreddit headings" }
    body-lg: { size: 18, weight: 600, lineHeight: 1.33, use: "Post titles (prominent)" }
    body: { size: 14, weight: 400, lineHeight: 1.50, use: "Body text, comments, descriptions" }
    body-sm: { size: 12, weight: 400, lineHeight: 1.50, use: "Metadata, upvote counts, timestamps" }
    label: { size: 14, weight: 600, lineHeight: 1.00, use: "Button labels, nav items" }
    label-sm: { size: 12, weight: 600, lineHeight: 1.00, use: "Badge labels, flair text" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 20, xl: 24, xxl: 32, section: 48 }
  rounded: { sm: 4, md: 8, lg: 16, full: 9999 }
  shadow:
    sm: "0 0.0625rem 0.25rem 0 rgba(0,0,0,0.149), 0 0.25rem 0.25rem 0 rgba(0,0,0,0.149)"
    md: "0 0.25rem 0.5rem 0 rgba(0,0,0,0.102), 0 0.375rem 0.75rem 0 rgba(0,0,0,0.251)"
    modal: "0px 2px 15px rgba(26, 26, 27, 0.3)"
    nav: "0px 4px 14px rgba(0, 0, 0, 0.1)"
  components:
    button-primary: { type: button, bg: "#D93900", fg: "#ffffff", radius: "999px", height: "40px", padding: "0px 12px", font: "14px / 600", hover: "#AE2C00", use: "Log In / primary CTA — OrangeRed pill" }
    button-secondary: { type: button, bg: "#E5EBEE", fg: "#000000", radius: "999px", height: "40px", padding: "0px 12px", font: "14px / 600", hover: "#DBE4E9", use: "Sign Up / secondary action" }
    button-outlined: { type: button, bg: "transparent", fg: "#181C1F", border: "1px solid rgba(0,0,0,0.498)", radius: "999px", height: "38px", padding: "0px 11px", font: "14px / 600", use: "Create Post / ghost outlined action" }
    input-search: { type: input, bg: "#F8F8F8", border: "1px solid transparent", radius: "999px", font: "14px / 400", focus: "#0A449B border", use: "Global search bar" }
    post-card: { type: card, bg: "#FFFFFF", border: "1px solid rgba(0,0,0,0.2)", radius: "16px", shadow: "0 0.0625rem 0.25rem 0 rgba(0,0,0,0.149)", use: "Post card in feed" }
    badge-flair: { type: badge, bg: "#E5EBEE", fg: "#333D42", radius: "9999px", padding: "2px 8px", font: "12px / 600", use: "Post flair / subreddit flair" }
    upvote-tab: { type: tab, active: "text #FF4500 + icon fill", fg: "#5C6C74", use: "Upvote/downvote indicator (active = OrangeRed)" }
    nav-item: { type: tab, fg: "#333D42", active: "#181C1F font-weight 600", font: "14px / 400", use: "Top navigation tabs (Best/Hot/New/Top)" }
    toggle-switch: { type: toggle, bg: "#0A449B", radius: "9999px", use: "Settings toggle — alien blue when checked" }
    dialog-modal: { type: dialog, bg: "#FFFFFF", radius: "16px", shadow: "0px 2px 15px rgba(26, 26, 27, 0.3)", use: "Login/signup modal dialog" }
  components_harvested: true
---

# Design System Inspiration of Reddit

## 1. Visual Theme & Atmosphere

Reddit is the internet's self-described "front page" — and its design system, the Reddit Product Language (RPL), reflects exactly that: a platform built for content discovery at massive scale, where the design recedes so community-generated content can lead. The visual language is clean, functional, and deliberately neutral, punctuated by one unmistakable brand signature: **OrangeRed** (`#FF4500`), the color of the Snoo mascot's body and the wordmark, which appears on upvote arrows, CTA buttons, and the iconic logo.

The 2023–2024 rebrand introduced **Reddit Sans** (a custom typeface family also released publicly), moved the system toward a rounded, friendly geometry, and shifted the primary interactive color from the raw logo orange to a slightly deeper burnt-orange (`#D93900`) that works better at interactive scale without washing out. The feed itself is radically content-forward: no gradients, no decorative shadows, minimal chrome. Post cards sit on a white canvas (`#FFFFFF`) with soft neutral borders, and every decorative element serves a functional purpose — the downvote blue-purple (`#6A5CFF`) is the only other saturated hue in the system, creating an intuitive upvote-orange / downvote-purple polarity that users internalize within seconds.

The RPL is built on semantic design tokens defined as CSS custom properties (e.g. `--color-global-brand-orangered: #FF4500`, `--color-action-upvote: #D93900`, `--shreddit-color-wordmark: #FF4500`). The web frontend ships via custom elements (`shreddit-*` web components), and the token system follows a role-based naming convention that clearly separates global palette constants from contextual semantic roles.

**Key Characteristics:**
- OrangeRed (`#FF4500`) as the singular brand anchor — wordmark, logo, upvote icon active state, earned flair
- Deeper burnt-orange (`#D93900`) as the interactive/CTA color — Log In button, upvote button fill, admin identity
- Downvote blue-purple (`#6A5CFF`) as the semantic opposite — upvote polarity at a glance
- Alien Blue (`#1870F4`) as the second brand accent — focus rings, switches, primary actions
- System font stack — no custom web font for body; Reddit Sans available but body defaults to system
- Full-pill geometry (`999px` / `9999px` radius) dominates interactive elements — buttons, badges, inputs
- Flat, near-shadowless feed — content cards use only subtle hairline borders and minimal drop shadows
- Semantic token naming (`--color-action-upvote`, `--color-action-downvote`) — intentional polarity system

## 2. Color Palette & Roles

### Brand / Identity
- **OrangeRed** (`#FF4500`): Signature brand color — Snoo mascot body color, logotype wordmark, upvote arrow active text/icon state. The single most recognizable hue in the system. CSS: `--color-global-brand-orangered`, `--shreddit-color-wordmark`.
- **Interactive OrangeRed** (`#D93900`): The live CTA and upvote-fill color — slightly darker than the logo orange to improve contrast on white. CSS: `--color-brand-background`, `--color-action-upvote`, `--color-upvote-background`. Used for: Log In button background, upvote button active fill, admin identity badge.
- **OrangeRed Hover** (`#AE2C00`): Darkened hover state for primary CTA and upvote elements. CSS: `--color-brand-background-hover`, `--color-upvote-background-hover`.

### Interactive / Secondary Brand
- **Alien Blue** (`#1870F4`): The secondary brand accent — focus rings, elevation-button-focus. CSS: `--color-global-alienblue`.
- **Action Primary** (`#0A449B`): Primary action blue — switch checked state, primary button, link hover. CSS: `--color-action-primary`, `--color-switch-input-background-checked`, `--color-primary-background`.
- **Action Secondary** (`#0A2F6C`): Deep navy — secondary action dark mode, button pressed state. CSS: `--color-action-secondary`.
- **Link Blue** (`#115BCA`): Default hyperlink color. CSS: `--color-primary`, `--color-a-default`.
- **Link Hover** (`#0A449B`): Link hover darkening. CSS: `--color-a-hover`, `--color-primary-hover`.
- **Link Visited** (`#9B00D4`): Visited link purple. CSS: `--color-a-visited`.

### Downvote
- **Downvote Purple** (`#6A5CFF`): Downvote button active fill, semantic opposite of upvote orange. CSS: `--color-action-downvote`, `--color-downvote-background`.
- **Downvote Hover** (`#523DFF`): Deeper purple on hover. CSS: `--color-downvote-background-hover`.

### Neutral Surface
- **Canvas White** (`#FFFFFF`): Page background, post cards, modal backgrounds. CSS: `--color-neutral-background`, `--color-neutral-background-strong`.
- **Surface Grey** (`#E5EBEE`): Secondary surface — secondary buttons, switch track, selected states. CSS: `--color-secondary-background`, `--color-neutral-background-canvas`.
- **Faint Container** (`#F6F8F9`): Hover backgrounds, input fields. CSS: `--color-neutral-background-weak`, `--color-neutral-background-hover`.
- **Container Strong** (`#EEF1F3`): Card container backgrounds. CSS: `--color-neutral-background-container-strong`.
- **UI Canvas** (`#F2F2F2`): App-level canvas behind content. CSS: `--color-ui-canvas`.
- **Dark Surface** (`#2A3236`): Dark mode backgrounds, dark tooltip. CSS: `--color-global-darkblue`.

### Text Hierarchy
- **Text Strong** (`#181C1F`): Nav labels, strong headings, button labels. CSS: `--color-neutral-content-strong`.
- **Text Default** (`#333D42`): Body copy, most UI text. CSS: `--color-neutral-content`.
- **Text Weak** (`#5C6C74`): Metadata, timestamps, secondary labels, placeholder text. CSS: `--color-neutral-content-weak`, `--color-label-default`.
- **Divider** (`rgba(0,0,0,0.20)`): Default borders and hairlines between posts. CSS: `--color-neutral-border`.

### Status
- **Success** (`#008A10`): Moderator badge, success banner. CSS: `--color-success-background`, `--color-global-moderator`.
- **Error** (`#BC0117`): Error states, mods-filtered indicator text. CSS: `--color-danger-content`.
- **Warning** (`#B78800`): Caution states, award gold color, stars. CSS: `--color-global-gold`, `--color-global-stars`.

## 3. Typography Rules

### Font Family
- **Primary / UI**: System font stack — `-apple-system, "system-ui", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`. Reddit deployed a custom **Reddit Sans** typeface in 2023 (also open-sourced as `applied-b*` font-face variants in production CSS), but the body default remains the system stack for performance. Button-specific font uses an encoded font-face (`applied-button-font-0`).
- **Monospace**: `Noto Mono`, monospace — used in code blocks and technical contexts.

### Hierarchy

| Role | Size | Weight | Line Height | Notes |
|------|------|--------|-------------|-------|
| Section heading | 24px | 700 | 1.33 | Subreddit names, page titles |
| Post title (prominent) | 18px | 600 | 1.33 | Featured/large card titles |
| Post title (standard) | 16px | 600 | 1.25 | Standard feed post titles |
| Body / comments | 14px | 400 | 1.50 | Default reading text |
| Metadata / timestamps | 12px | 400 | 1.50 | Upvote counts, usernames, time |
| Button label | 14px | 600 | 1.00 | Nav CTAs — Log In, Sign Up |
| Badge / flair | 12px | 600 | 1.00 | Post flair, award labels |

### Principles
- **System stack first**: Reddit prioritizes performance and native feel — no blocking web font for body text.
- **Weight 600 dominates interactive**: Buttons, nav labels, and post titles all use weight 600 — creating clear interactive differentiation from body weight 400.
- **Pill-shaped font metrics**: The 999px border-radius on buttons and inputs reinforces the "friendly pill" geometry; larger paddings on pill elements compensate for the reduced visual weight of the rounded edge.
- **12px metadata density**: The 12px / weight 400 tier handles the platform's dense metadata layer (vote counts, comment counts, usernames, timestamps) without competing with post content.

## 4. Component Stylings

### Buttons

**Primary CTA (Log In)**
- Background: `#D93900`
- Text: `#ffffff`
- Radius: 999px
- Height: 40px
- Padding: 0px 12px
- Font: 14px / 600
- Hover: `#AE2C00` background
- Use: Primary auth CTA — "Log In" in nav

**Secondary (Sign Up)**
- Background: `#E5EBEE`
- Text: `#000000`
- Radius: 999px
- Height: 40px
- Padding: 0px 12px
- Font: 14px / 600
- Hover: `#DBE4E9` background
- Use: Secondary auth CTA — "Sign Up" in nav

**Outlined Ghost (Create Post)**
- Background: transparent
- Text: `#181C1F`
- Border: 1px solid rgba(0, 0, 0, 0.498)
- Radius: 999px
- Height: 38px
- Padding: 0px 11px
- Font: 14px / 600
- Use: "Create Post" and other secondary ghost actions

**Small Action Pill**
- Background: rgba(0, 0, 0, 0) (transparent)
- Text: `#181C1F`
- Radius: 999px
- Height: 32px
- Padding: 0px 9px
- Font: 12px / 600
- Use: Post action buttons (Share, Save, More)

### Inputs

**Search Bar**
- Background: `#F8F8F8`
- Border: 1px solid transparent
- Radius: 999px
- Font: 14px / 400
- Focus: `#0A449B` border
- Text: `#131313`
- Placeholder: `#5C6C74`
- Use: Global site search in nav

**Form Input (Bordered)**
- Background: `#F6F8F9`
- Border: 1px solid transparent (default); `#0A449B` on focus
- Radius: 8px
- Font: 14px / 400
- Text: `#181C1F`
- Use: Login/signup form fields

### Cards & Containers

**Post Card (Feed)**
- Background: `#FFFFFF`
- Border: 1px solid rgba(0, 0, 0, 0.20)
- Radius: 16px
- Shadow: `0 0.0625rem 0.25rem 0 rgba(0,0,0,0.149), 0 0.25rem 0.25rem 0 rgba(0,0,0,0.149)`
- Use: Individual post card in main feed

**Container Card**
- Background: `#EEF1F3`
- Radius: 8px
- Use: Sidebar widgets, grouped content containers

### Badges & Tags (Flair)

**Default Flair**
- Background: `#E5EBEE`
- Text: `#333D42`
- Radius: 9999px
- Padding: 2px 8px
- Font: 12px / 600
- Use: Post flair, subreddit flair, category tags

**NSFW Badge**
- Background: `rgba(222, 1, 159, 0.15)`
- Text: `#DE019F`
- Radius: 9999px
- Font: 12px / 600
- Use: NSFW content label (`--color-global-nsfw: #DE019F`)

**Spoiler Badge**
- Background: `rgba(19, 19, 19, 0.15)`
- Text: `#131313`
- Radius: 9999px
- Font: 12px / 600
- Use: Spoiler content label

### Tabs

**Sort Tab (Best / Hot / New / Top)**
- Text (inactive): `#333D42`
- Text (active): `#181C1F` weight 600
- Font: 14px / 400 (inactive), 14px / 600 (active)
- Use: Feed sorting tabs below post composer

**Upvote Indicator**
- Active (upvoted): OrangeRed text `#FF4500` on upvote arrow; `#D93900` on count
- Active (downvoted): Purple `#6A5CFF` on downvote arrow
- Inactive: Muted `#5C6C74`
- Use: Upvote/downvote controls on each post — the polarity signal system

### Toggles

**Settings Toggle**
- Background (checked): `#0A449B`
- Background (unchecked): `#E5EBEE`
- Radius: 9999px
- Handle: `#FFFFFF`
- Use: Preferences and settings toggles

### Dialogs

**Login/Signup Modal**
- Background: `#FFFFFF`
- Radius: 16px
- Shadow: `0px 2px 15px rgba(26, 26, 27, 0.3)`
- Scrim: `rgba(0, 0, 0, 0.60)`
- Use: Auth modal, post modals

---

**Verified:** 2026-06-22 (omd:add-reference CREATE — Tier 1 live inspect)
**Tier 1 sources:** https://www.reddit.com/ (homepage live inspect, headed Chrome playwright, CSS custom properties via getComputedStyle); https://www.reddit.com/r/technology/ (subreddit page second surface — full CSS custom properties scan, 360+ tokens)
**Tier 2 sources:** getdesign.md/reddit — not found (404); styles.refero.design/?q=reddit — no Reddit match in search results
**Conflicts unresolved:** none — full CSS token set extracted from Tier 1 live surfaces only

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Scale: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 48px
- Notable: Post card internal padding 16px; subreddit/community sidebar 24px gaps; feed gutter varies by viewport

### Grid & Container
- Max content width: ~1200px; three-column layout (feed + sidebar + context panel on desktop)
- Feed column: dominant (~60–65% width), sidebar ~30%
- Full-bleed hero for subreddit headers (banner image)
- Mobile: single-column, sidebar collapses into bottom sheet

### Whitespace Philosophy
- **Content-forward minimalism**: the design system stands back so community content takes center stage. Tight vertical rhythm between post cards (8–12px gap) maximizes information density.
- **Breathing room within cards**: post card internals use generous 16px padding, but card-to-card spacing is compact.
- **Flat and fast**: minimal decorative whitespace; every spacing decision serves information hierarchy.

### Border Radius Scale
- Sharp (4px): Inner chips, tooltips
- Standard (8px): Form inputs, container cards
- Relaxed (16px): Post cards, modal dialogs
- Pill (999px): Buttons, search bar, flair badges
- Full (9999px): Vote count pills, small badges

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow, transparent background | Feed backgrounds, nav links |
| Hairline (Level 1) | `1px solid rgba(0,0,0,0.20)` border | Post card borders, dividers |
| Raised (Level 2) | `elevation-sm`: `0 0.0625rem 0.25rem rgba(0,0,0,0.149), 0 0.25rem 0.25rem rgba(0,0,0,0.149)` | Post cards |
| Floating (Level 3) | `elevation-md`: `0 0.25rem 0.5rem rgba(0,0,0,0.102), 0 0.375rem 0.75rem rgba(0,0,0,0.251)` | Dropdowns, menus |
| Overlay (Level 4) | `boxshadow-modal: 0px 2px 15px rgba(26,26,27,0.3)` + `rgba(0,0,0,0.60)` scrim | Modal dialogs |
| Navigation | `boxshadow-navigation: 0px 4px 14px rgba(0,0,0,0.10)` | Sticky nav bar |

**Shadow Philosophy**: Reddit uses neutral, dark-gray shadows throughout — no chromatic tinting. The shadow system is subtle and functional, emphasizing content lift rather than brand atmosphere. The scrim for modals is a deep `rgba(0,0,0,0.60)`, communicating content lock without decorative effect.

## 7. Do's and Don'ts

### Do
- Use `#FF4500` OrangeRed for the wordmark and logo — it is the brand's single identity color
- Use `#D93900` for interactive CTAs and upvote fills — slightly darker for better contrast
- Use full-pill geometry (`999px` radius) for all buttons, search inputs, and flair badges
- Use `#6A5CFF` exclusively for downvote states — the orange/purple polarity is a core UX signal
- Use `#0A449B` Alien Blue for focus rings, checkboxes, and switch toggles
- Use semantic token names from the RPL — role-based naming (`--color-action-upvote`) over raw hex
- Keep card backgrounds `#FFFFFF` with subtle hairline borders — no heavy shadows on content cards
- Use weight 600 for button labels, nav items, and post titles to establish interaction hierarchy

### Don't
- Use `#FF4500` as a button fill for interactive states — it lacks contrast on white; use `#D93900`
- Spread the OrangeRed to decorative elements — it means "upvote" and "action" in this system
- Use the downvote purple (`#6A5CFF`) for non-voting contexts — it carries specific semantic meaning
- Apply heavy box shadows to post cards — Reddit's elevation is intentionally minimal
- Use rectangular corners on buttons — the pill shape is a core identity element
- Mix the orange and blue-purple as decorative gradients — they function as opposing signals
- Use custom serif or display fonts — Reddit's voice is system-native, not editorial
- Apply high-saturation backgrounds to large surfaces — neutrals dominate; color is reserved for action

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, sidebar hidden, compact nav |
| Tablet | 640-1024px | Two-column layout (feed + compact sidebar) |
| Desktop | 1024-1280px | Full three-column layout |
| Large Desktop | >1280px | Centered content with max-width ~1200px |

### Touch Targets
- All primary buttons at 40px height — comfortably tappable
- Small action pill buttons at 32px height (8px padding) — borderline on mobile, but aligns with platform density expectations
- Upvote/downvote buttons: 32px × 32px minimum tap zone

### Collapsing Strategy
- Sidebar: three columns → two columns → hidden (accessed via bottom drawer on mobile)
- Post title typography: scales from 18px on desktop to 16px on mobile
- Navigation: horizontal full nav → condensed with overflow menu

## 9. Agent Prompt Guide

### Quick Color Reference
- Brand / Logo: OrangeRed (`#FF4500`)
- Primary CTA / Upvote active: Burnt Orange (`#D93900`)
- CTA Hover: Dark Orange (`#AE2C00`)
- Downvote active: Purple (`#6A5CFF`)
- Link Blue: (`#115BCA`)
- Focus ring / Switch: Alien Blue (`#0A449B`)
- Background: White (`#FFFFFF`)
- Card border: `rgba(0,0,0,0.20)`
- Body text: Dark Teal (`#333D42`)
- Metadata text: Slate (`#5C6C74`)
- Surface: Light Blue-Grey (`#E5EBEE`)
- Container: (`#EEF1F3`)

### Example Component Prompts
- "Create a Reddit-style Log In button: `#D93900` background, white text, 999px radius, 40px height, 0px 12px padding, 14px / weight 600 system-ui. Hover: `#AE2C00`."
- "Design a Reddit post card: white `#FFFFFF` background, 16px radius, 1px solid rgba(0,0,0,0.20) border, minimal box-shadow `0 1px 4px rgba(0,0,0,0.15)`. Post title 18px / 600 / `#181C1F`. Metadata 12px / 400 / `#5C6C74`."
- "Build a flair badge: `#E5EBEE` background, `#333D42` text, 9999px radius, 2px 8px padding, 12px / 600. For NSFW: `#DE019F` text with `rgba(222,1,159,0.15)` background."
- "Create upvote/downvote controls: upvote arrow icon in `#D93900` when active / `#5C6C74` inactive; vote count text `#D93900` when upvoted; downvote arrow `#6A5CFF` when active."
- "Design a Reddit modal: white `#FFFFFF` background, 16px radius, `0px 2px 15px rgba(26,26,27,0.3)` shadow, `rgba(0,0,0,0.60)` backdrop scrim."

### Iteration Guide
1. The OrangeRed (`#FF4500`) is brand identity; the burnt orange (`#D93900`) is interactive/action
2. Pill geometry (999px+) is non-negotiable for buttons and inputs — Reddit's rounded language
3. The orange/purple vote polarity (`#D93900` upvote / `#6A5CFF` downvote) is a product UX primitive, not decorative
4. Keep card borders thin and dark (`rgba(0,0,0,0.20)`) — no colored borders
5. System font stack for body — no display fonts; weight 600 does the heavy lifting
6. `#333D42` is the default text color (not black) — warm, slightly blue-shifted
7. Alien Blue `#1870F4` / `#0A449B` is for focus accessibility and system state, not branding
8. Post titles at 18px / 600 create enough hierarchy over 14px / 400 body without display sizes

---

## 10. Voice & Tone

Reddit's voice is **irreverent, direct, community-owned, and proudly unpolished.** The company tagline — "The heart of the internet" — captures the paradox: a platform with immense cultural influence that still feels like it belongs to the people who use it, not the corporation that runs it. Reddit's product copy is sparse and functional; the real "voice" of Reddit is 100,000 communities (subreddits) each expressing their own personality. Reddit-as-platform stays out of the way and lets the community speak.

| Context | Tone |
|---|---|
| Nav/CTA labels | Terse and direct: "Log In", "Sign Up", "Create Post". No explanation. |
| Error messages | Plain-English, often self-deprecating ("Hmm, that page doesn't exist"). |
| Empty states | Communal framing: "Be the first to comment." Not "No content found." |
| Onboarding | Casual, interest-led: "What are you into?" — not "Complete your profile". |
| Community rules | Varies by subreddit; platform defaults to firm-but-clear. |
| Admin / mod messages | Authoritative. Badge color `#008A10` signals official status. |
| Marketing / ads | Bold, internet-native, subversive — frequently riffs on Reddit culture itself. |

**Voice samples (characteristic Reddit product UI):**
- "The front page of the internet" — original tagline (brand heritage). *(historically verified)*
- "Log In" / "Sign Up" — nav CTAs: shortest possible labels. *(verified live 2026-06-22)*
- "Reddit - The heart of the internet" — current page title on homepage. *(verified live 2026-06-22)*

**Forbidden register**: corporate enthusiasm ("We're excited to announce"), patronizing explanations, over-designed onboarding friction, buzzword marketing copy. Reddit's community is sophisticated and allergic to inauthentic brand speak.

## 11. Brand Narrative

Reddit was founded in **2005** by **Steve Huffman (Ohanian's college roommate and current CEO)** and **Alexis Ohanian**, two 22-year-old University of Virginia graduates who pitched Y Combinator the idea of a "front page of the internet" — a link aggregator where users, not editors, decided what mattered. The original idea (proposed to Paul Graham as an "online ordering for food" concept) was redirected toward social news aggregation. Reddit was acquired by **Condé Nast** in 2006 for a reported $10–20M, operated under Condé Nast's Advance Publications umbrella for years, and went public on the **NYSE (ticker: RDDT)** in March 2024 at a $6.4B valuation.

Reddit's cultural influence vastly outweighs its revenue. The **WallStreetBets subreddit** orchestrated the 2021 GameStop short squeeze, demonstrating that coordinated community action on Reddit could move global financial markets. Reddit's **Ask Me Anything (AMA)** format became a mainstream media genre — presidents, scientists, and celebrities treated a Reddit AMA as a cultural currency. The platform's community-moderated structure (volunteer moderators "mods" control individual subreddits) is both its greatest strength and most persistent management challenge.

The 2023 API pricing controversy — which drove a mass subreddit blackout protest — illustrated the tension between Reddit's community-ownership culture and its corporate imperatives as a public company. The eventual IPO in 2024 formalized that tension, with Reddit positioning user karma and contribution as a foundational differentiator against algorithmically-driven competitors.

What Reddit refuses: editorial curation replacing community voice, clean corporate aesthetics that feel out of place in a community context, and losing the nerd-internet authenticity that made it the "front page" in the first place. What it embraces: Snoo the mascot, OrangeRed as an icon-level color, the upvote/downvote mechanic as a democratic signal, and a design language that says "the content is what matters."

## 12. Principles

1. **Community over curation.** Algorithms assist; communities decide. *UI implication:* the design must never visually overshadow user-generated content — neutral colors, thin borders, and minimal chrome keep the post front and center.
2. **Vote polarity is a first-class UX primitive.** The orange upvote / purple downvote is not decoration — it is the platform's core engagement mechanic rendered in color. *UI implication:* `#D93900` and `#6A5CFF` are reserved exclusively for vote states; using them elsewhere creates signal confusion.
3. **Identity is the subreddit, not the surface.** Reddit's product chrome is deliberately generic so each community can express its own personality through flair, banners, and custom themes. *UI implication:* platform-level UI components are neutral and modular; community theming sits on top.
4. **Density serves discovery.** Reddit is a platform where users scan hundreds of titles in minutes. *UI implication:* compact card height, tight metadata, 12px timestamps — density is a feature, not a bug.
5. **Earn the orange.** OrangeRed appears when something is earned (upvotes, awards) or acted upon (CTAs). It doesn't decorate. *UI implication:* `#FF4500` / `#D93900` are state/action colors, not background colors for sections or illustrations.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Reddit user segments, not individual people.*

**Marcus Webb, 26, Chicago.** /r/nba lurker and frequent commenter on sports threads. Opens Reddit before Twitter after any major game. Values the thread format — ten levels of nested debate in a way no other platform enables. Uses the app daily, votes obsessively, has strong opinions about which subreddits have "good mods." Would notice immediately if Reddit changed the upvote button color.

**Priya Nair, 32, Bengaluru.** Senior software engineer who uses /r/cscareerquestions and /r/ExperiencedDevs for career signal and /r/LocalLLaMA for ML research tracking. Treats Reddit as a curated RSS that happens to have real humans attached. Uses old.reddit.com in a separate browser tab because she prefers information density over polish. Allergic to product redesigns.

**Dani Kowalczyk, 19, Warsaw.** Uses Reddit in English because the niche communities she's interested in (vintage synthesizers, obscure film) are richer there than on any Polish-language platform. Has multiple accounts — one for gaming, one for music. Participates in AMA threads. Has bought products purely because /r/BuyItForLife recommended them.

**Greg Thornton, 48, Nashville.** Found Reddit during the pandemic through /r/DIY and /r/woodworking. Uses it almost exclusively through search ("reddit woodworking dovetail jig") because direct navigation to the site feels chaotic. Has never posted, only comments. Has been lurking for four years. A classic "dark matter" Redditor.

## 14. States

| State | Treatment |
|---|---|
| **Empty (new subreddit, no posts)** | Neutral canvas. Single-sentence prompt in `#5C6C74` metadata tone: "Be the first to post here." One orange CTA: "Create Post". No illustration required. |
| **Empty (search, no results)** | Direct explanation: "Hmm, your search returned no results. Try a different term." No decorative empty state. |
| **Loading (feed first paint)** | Skeleton cards at post-card dimensions — white `#FFFFFF` background, 16px radius, placeholder bars in `#EEF1F3` at title/metadata positions. Shimmer at `#00000008` opacity. |
| **Loading (vote processing)** | Upvote count updates optimistically — count changes immediately, reverts on error. No blocking spinner. |
| **Error (post failed to load)** | Inline error in the card position with a grey background: "Something went wrong. Try refreshing." Retry CTA in default outlined style. |
| **Error (form validation — login)** | Field-level. Red border (`#BC0117` tone) on the input + 12px error text below: specific message ("Incorrect password"). |
| **Error (rate limit / banned)** | Full-page error: direct, no-nonsense explanation. "You've been temporarily banned from /r/X." Links to appeals process. |
| **Success (post submitted)** | Brief confirmation: redirected to the new post. No celebratory toast — the post existing IS the confirmation. |
| **Success (vote registered)** | Instant color change on the upvote/downvote arrow and count. No toast, no animation beyond the state flip. |
| **Skeleton** | `#EEF1F3` placeholder blocks at exact card dimensions, 8px radius on inner blocks, 16px on card wrapper. Subtle horizontal shimmer. |
| **Disabled** | Button opacity reduced; OrangeRed interactive becomes `rgba(217,57,0,0.3)` (`--color-upvote-background-disabled`). Downvote disabled: `rgba(106,92,255,0.3)`. |
| **NSFW blur** | Post thumbnail blurred with `rgba(0,0,0,0.6)` overlay until user confirms age. Badge `#DE019F` visible above blur. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Vote state commits, focus ring appearance |
| `motion-fast` | 100–150ms | Button hover/active, icon state change |
| `motion-standard` | 200ms | Dropdown open, sheet slide-in, modal appear |
| `motion-slow` | 300ms | Page transitions, sidebar collapse |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — modals, dropdowns, drawers |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Signature motions**:
1. **Vote state flip.** The upvote/downvote count and icon color transition is effectively instantaneous (≤100ms) — optimistic update is the mechanic, motion is barely perceptible. The semantic color change IS the feedback; animation would delay it.
2. **Feed post card hover.** Subtle `box-shadow` intensification on hover (`elevation-sm` → `elevation-md`) with `motion-fast` ease. The shadow lift signals interactivity without moving the card.
3. **Sidebar drawer (mobile).** Full-height drawer from the left edge at `motion-standard / ease-enter`. Communities list appears as a coherent panel, not individual items animating.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all transitions collapse to instant state changes. Skeleton shimmer is replaced with a static `#EEF1F3` fill. Vote counts update without transition. The product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-22) via playwright getComputedStyle on:
- https://www.reddit.com/ — headed Chrome, networkidle, full CSS custom properties scan (360+ color tokens)
- https://www.reddit.com/r/technology/ — second subreddit surface, domcontentloaded, component inspection

Key token extractions (verified live):
- --color-global-brand-orangered: #FF4500 (brand OrangeRed)
- --shreddit-color-wordmark: #FF4500 (logo color confirmed)
- --color-brand-background: #D93900 (interactive CTA fill)
- --color-action-upvote: #D93900 (upvote active fill)
- --color-action-downvote: #6A5CFF (downvote fill)
- --color-global-alienblue: #1870F4 (focus ring / secondary accent)
- --color-action-primary: #0A449B (primary interactive)
- --color-a-default: #115BCA (link color)
- --color-neutral-content: #333D42 (body text)
- Log In button: rgb(217,57,0) = #D93900 (live computed style)
- Sign Up button: rgb(229,235,238) = #E5EBEE (live computed style)
- Body font stack: -apple-system, system-ui, Segoe UI, Roboto, Helvetica Neue, Arial
- document.title: "Reddit - The heart of the internet"

RPL (Reddit Product Language) is Reddit's internal design system. Not publicly documented
at a URL — token names inferred from CSS custom property naming conventions in the live
production CSS bundle.

Brand narrative: Reddit founding (2005), Steve Huffman + Alexis Ohanian, Y Combinator,
Condé Nast acquisition (~2006), NYSE IPO March 2024 (RDDT), WallStreetBets/GameStop 2021 —
widely documented public facts.

Personas are fictional archetypes informed by publicly observable Reddit user segments.
Names are illustrative; they do not refer to real people.

Tier 2: getdesign.md/reddit returned "No designs found"; refero search returned no Reddit match.
All design values sourced from Tier 1 live inspection only.
-->
