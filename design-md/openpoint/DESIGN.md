---
id: openpoint
name: OPENPOINT
country: TW
category: consumer-tech
homepage: "https://www.openpoint.com.tw"
primary_color: "#8081ff"
logo:
  type: favicon
  slug: "https://www.openpoint.com.tw/cdn/images/openpoint-logo.png"
verified: "2026-06-22"
added: "2026-06-22"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-22"
  note: "primary = brand purple (#8081ff) used for CTAs, links, borders; teal (#0abbb5) for dates/accent underlines; lavender (#cf7ffa) for premium gradient; 7-ELEVEN red (#e60012) for cookie/alert banner. White (#ffffff) canvas, light-grey (#f3f3f3) card text areas."
  colors:
    primary: "#8081ff"
    teal: "#0abbb5"
    lavender: "#cf7ffa"
    lavender-mid: "#a77bca"
    muted-purple: "#9696ad"
    dark-navy: "#48484e"
    error-red: "#e60012"
    canvas: "#ffffff"
    surface: "#f3f3f3"
    surface-light: "#eeeef5"
    surface-lavender: "#f5f2ff"
    on-primary: "#ffffff"
    ink: "#000000"
    placeholder: "#cccccc"
  typography:
    family: { display: "Noto Sans TC", body: "微軟正黑體, 新細明體, 蘋果儷黑體, Arial, Helvetica" }
    h1: { size: 28.8, weight: 700, lineHeight: 1.5, use: "Page-level heading, OPENPOINT優惠活動" }
    h2: { size: 22.4, weight: 700, lineHeight: 1.5, use: "Section headings, OPENPOINT推薦/累積點數" }
    h3: { size: 19.2, weight: 700, lineHeight: 1.5, use: "Sub-section headings" }
    body: { size: 16, weight: 400, lineHeight: 1.5, use: "Body text, event cards, nav items" }
    label: { size: 16, weight: 900, lineHeight: 1, use: "Navigation labels, CTA, event-btn" }
    small: { size: 12, weight: 400, use: "Metadata, captions" }
  spacing: { xs: 8, sm: 16, md: 24, base: 16, lg: 40, xl: 48, section: 64 }
  rounded: { sm: 0, md: 8, lg: 50, full: 9999 }
  shadow:
    card: "rgba(0, 0, 0, 0.16) 2px 2px 5px 0px"
    card-hover: "rgba(0, 0, 0, 0.2) 4px 4px 8px 0px"
  components:
    button-primary: { type: button, bg: "#8081ff", fg: "#ffffff", radius: "8px", padding: "10px 15px", font: "16px / 900 Noto Sans TC", use: "Primary CTA in nav dropdown" }
    button-cta: { type: button, fg: "#000000", radius: "0px", padding: "8px 24px", font: "16px / 900 微軟正黑體", use: "Event section see-more link" }
    event-card: { type: card, bg: "#ffffff", radius: "0px", shadow: "rgba(0, 0, 0, 0.16) 2px 2px 5px 0px", use: "Promotion/event listing card" }
    card-text: { type: card, bg: "#f3f3f3", radius: "0px", padding: "16px", use: "Event date+description text area below image" }
    badge-teal: { type: badge, fg: "#0abbb5", radius: "0px", font: "16px / 900 微軟正黑體", use: "Event date labels (.date class)" }
    nav-link: { type: tab, fg: "#000000", font: "16px / 900 微軟正黑體", use: "Top nav category link", active: "text #8081ff underline" }
    dropdown-item: { type: listItem, fg: "#ffffff", radius: "8px", padding: "10px 15px", font: "16px / 900 Noto Sans TC", use: "Nav dropdown sub-menu links" }
    input-default: { type: input, fg: "#000000", border: "1px solid #8081ff", radius: "8px", font: "16px 微軟正黑體", use: "Member center form fields", focus: "border #8081ff" }
    gradient-badge: { type: badge, bg: "linear-gradient(to right, #cf7ffa, #8081ff)", fg: "#ffffff", radius: "0px", use: "Premium/points gradient accent" }
  components_harvested: true
---

# Design System Inspiration of OPENPOINT

## 1. Visual Theme & Atmosphere

OPENPOINT (統一超商紅利點數平台) is Taiwan's dominant retail loyalty and payment ecosystem, operated by President Chain Store (統一超商股份有限公司), the parent company of Taiwan's 7-ELEVEN network. Its web presence lands in a clean white (`#ffffff`) canvas with a signature dual-tone palette of electric purple (`#8081ff`) and warm lavender (`#cf7ffa`) that together define a cheerful, accessible loyalty-program aesthetic — one that says "earn and redeem" rather than "premium fintech." The teal accent (`#0abbb5`) punctuates dates and key dividers, adding a fresh, approachable warmth.

The typeface stack leads with **Noto Sans TC** for input/interactive elements (set at `font-family: "Noto Sans TC", "Open Sans", Arial, "Microsoft JhengHei"` in the stylesheet) and falls back to the traditional Taiwanese web stack: 微軟正黑體 (Microsoft JhengHei), 新細明體, 蘋果儷黑體 — reflecting a broad-compatibility, Traditional Chinese–first approach. Body text runs at a comfortable 16px / weight 400 with 1.5× line height. Navigation and CTA labels use weight 900 for strong, punchy micro-copy.

What makes OPENPOINT's design identity distinctive is the **purple–lavender gradient** (`#cf7ffa` → `#8081ff`) used across interactive states, member features, and premium tiers. This gradient doesn't appear in the physical 7-ELEVEN brand (which uses orange-and-green) but is the OPENPOINT app-native identity — a deliberate visual separation between the points platform and the convenience-store parent. The loyalty surface feels lighter, more app-first. Cards use a subtle drop-shadow (`rgba(0,0,0,0.16) 2px 2px 5px`) rather than flat tints for event separation, and the layout leans heavily on image-led promotion cards.

**Key Characteristics:**
- Purple-to-lavender gradient (`#cf7ffa` → `#8081ff`) as the primary brand axis
- Teal (`#0abbb5`) for date labels and accent underlines — energetic, calendar-forward
- White canvas with light grey (`#f3f3f3`) for card text areas — clean, informational
- Noto Sans TC / 微軟正黑體 — Traditional Chinese–first font stack
- Weight 900 for all interactive labels (nav, CTAs) — bold, accessible, tap-friendly
- Drop-shadow cards (not flat tints) for event and promotion listings
- 7-ELEVEN red (`#e60012`) strictly limited to compliance banners and alerts
- Dropdown navigation reveals lavender-to-purple sub-menus on hover

## 2. Color Palette & Roles

### Primary Brand
- **OPENPOINT Purple** (`#8081ff`): Primary brand color, CTA buttons, links, active nav states, borders, form field focus rings. The core interactive color throughout the platform.
- **Gradient Start (Lavender)** (`#cf7ffa`): Left/top of the purple-lavender gradient. Used in premium points features, gradient badges, selected-state highlights.
- **Gradient Mid** (`#a77bca`): Mid-range purple used for gradient backgrounds and disabled-state overlays.

### Accent & Status
- **OPENPOINT Teal** (`#0abbb5`): Event date labels (`.date` class) and accent underlines (`.event_page .description` bottom border). A fresh counterpoint to the purple primary.
- **7-ELEVEN Red** (`#e60012`): Cookie-consent banner background, alert and warning indicators. Parent brand heritage color — intentionally quarantined from the rewards UI.
- **Muted Purple** (`#9696ad`): Disabled button states, secondary interactive elements.

### Neutral & Surface
- **Pure White** (`#ffffff`): Page canvas, card faces, text on dark/purple backgrounds.
- **Light Grey** (`#f3f3f3`): Event card text area background (`.event-text`). Also the footer.
- **Surface Light** (`#eeeef5`): Faint purple-tinted surface used in member forms.
- **Surface Lavender** (`#f5f2ff`): Lightest lavender tint for subtle section highlights.
- **Dark Navy** (`#48484e`): Applied to overlay backgrounds and secondary UI chrome.
- **Ink Black** (`#000000`): Primary text, headings, event-btn label.
- **Placeholder** (`#cccccc`): Form input placeholder text.

## 3. Typography Rules

### Font Family
- **Primary (Traditional Chinese + Latin)**: `"Noto Sans TC", "Open Sans", Arial, "Microsoft JhengHei", "Apple LiGothic Medium", sans-serif` — applied to input/button/select elements.
- **Body default**: `微軟正黑體 (Microsoft JhengHei), 新細明體, 蘋果儷黑體, Arial, Helvetica, sans-serif` — broad Taiwanese Windows/macOS compatibility.

### Hierarchy

| Role | Family | Size | Weight | Line Height | Notes |
|------|--------|------|--------|-------------|-------|
| H1 (Page) | 微軟正黑體 | 28.8px (1.8em) | 700 | 1.5 | Hero section headings |
| H2 (Section) | 微軟正黑體 | 22.4px (1.4em) | 700 | 1.5 | Event category titles |
| H3 | 微軟正黑體 | 19.2px (1.2em) | 700 | 1.5 | Sub-section heads |
| Body | 微軟正黑體 | 16px | 400 | 1.5 | Card descriptions, metadata |
| Nav / CTA Label | 微軟正黑體 | 16px | 900 | 1 | Navigation items, event-btn |
| Caption | 微軟正黑體 | 12px | 400 | — | Fine print, legal |

### Principles
- **Weight 900 for action text**: Nav, CTAs, and event-btn links all run at font-weight 900 — visually declaring tap zones in a dense, touch-first layout.
- **Traditional Chinese–first stack**: The web falls back gracefully from Noto Sans TC to 微軟正黑體, ensuring correct rendering on both modern and legacy Taiwanese devices.
- **Body is functional**: No display fonts, no tight tracking. Copy is meant to be read quickly — a loyalty platform where users scan promotions, not read essays.
- **Size stays conservative**: H1 at 28.8px, H2 at 22.4px — modest at desktop, comfortable on mobile.

## 4. Component Stylings

### Buttons

**Primary (Nav Dropdown CTA)**
- Background: `#8081ff`
- Text: `#ffffff`
- Radius: 8px
- Padding: 10px 15px
- Font: 16px / 900 Noto Sans TC
- Height: 38px
- Use: Sub-navigation items displayed as pill-like anchor buttons

**Event See-More Link**
- Text: `#000000`
- Padding: 8px 24px
- Font: 16px / 900 微軟正黑體
- Height: 33px
- Use: "查看更多優惠" (See more promotions) link-styled CTA

**Disabled / Secondary (Muted Purple)**
- Background: `#9696ad`
- Text: `#ffffff`
- Use: Disabled or deactivated action states

**Gradient Button (Premium)**
- Background: linear-gradient(to right, `#cf7ffa`, `#8081ff`)
- Text: `#ffffff`
- Use: Premium feature access buttons, member upgrade CTAs

### Cards & Containers

**Event Card**
- Background: `#ffffff`
- Shadow: `rgba(0, 0, 0, 0.16) 2px 2px 5px 0px`
- Hover Shadow: `rgba(0, 0, 0, 0.2) 4px 4px 8px 0px`
- Radius: 0px (sharp corners)
- Use: Promotion/event listing cards; image fills 48% height, text area below

**Event Text Area**
- Background: `#f3f3f3`
- Padding: 16px
- Use: Below event card image — shows date + title + description

**Member Form Surface**
- Background: `#eeeef5`
- Use: Read-only field backgrounds, faint purple-tinted input areas

### Inputs & Forms

**Default**
- Border: 1px solid `#8081ff`
- Radius: 8px
- Text: `#000000`
- Placeholder: `#cccccc`
- Font: 16px 微軟正黑體 / Noto Sans TC
- Focus: border `#8081ff` (maintained, no shift)
- Use: Member center login/register forms

### Badges & Tags

**Date Badge (Teal)**
- Text: `#0abbb5`
- Font: 16px / 900 微軟正黑體
- Use: Event dates in card listings, e.g. "活動時間：2026/01/01–06/30"

**Gradient Accent Badge**
- Background: linear-gradient(to right, `#cf7ffa`, `#8081ff`)
- Text: `#ffffff`
- Use: Points highlights and premium feature labels

**Muted Badge**
- Background: `#9696ad`
- Text: `#ffffff`
- Use: Neutral/inactive status indicators

### Navigation

**Top Nav Category Link**
- Text: `#000000`
- Font: 16px / 900 微軟正黑體
- Active: `#8081ff` text
- Use: Horizontal nav top-level items ("優惠活動", "點數交換", "旅遊集點護照")

**Dropdown Sub-Item**
- Text: `#ffffff`
- Radius: 8px
- Padding: 10px 15px
- Font: 16px / 900 Noto Sans TC
- Use: Dropdown menu items on hover ("OPENPOINT推薦", "累積點數", "兌換點數")

---

**Verified:** 2026-06-22 (omd:add-reference CREATE — Tier 1 live inspect)
**Tier 1 sources:** https://www.openpoint.com.tw, https://www.openpoint.com.tw/cdn/css/style.css
**Tier 2 sources:** getdesign.md/openpoint (404 — not listed) | styles.refero.design/?q=openpoint (0 matches)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 16px
- Scale: 8px, 16px, 24px, 40px, 48px, 64px
- Event cards padded at 16px; event-btn at 8px 24px
- Section titles use 40px vertical margin

### Grid & Container
- Max-width 1200px centered container
- Homepage uses a full-width hero carousel (slick-slider) with 0.3 opacity on non-active slides
- Event cards arranged in 3-column grid at desktop (≥1200px); single column on mobile
- Footer: centered single-column, `#f3f3f3` background, 147px height

### Whitespace Philosophy
- **Generous section spacing**: 40px margins around event-title banners
- **Tight cards**: event cards pack image + text compactly with minimal internal whitespace
- **Full-width bands**: hero carousel and event-title banners span the full viewport
- **No padding on carousel list**: `padding: 0px 150px` on desktop gives the panoramic parallax feel

### Border Radius Scale
- Zero (0px): event cards, image containers, most content blocks — blunt, functional
- Small (8px): nav dropdown items, form inputs — the primary interactive radius
- Large (50px+): rarely used decorative elements

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (0) | No shadow | Page canvas, nav header, footers |
| Card (1) | `rgba(0,0,0,0.16) 2px 2px 5px` | Event and promotion listing cards |
| Card Hover (2) | `rgba(0,0,0,0.20) 4px 4px 8px` | Card hover state — subtle lift |
| Overlay | `rgba(0,0,0,0.8–0.9)` | Modal overlays, loading screen |

**Shadow Philosophy**: OPENPOINT uses light drop-shadows (not flat tints) on cards, giving the event listings a magazine-like raised quality. The shadow is warm-neutral (black, not blue-tinted), keeping the feel casual and approachable. Loading states use a near-opaque black overlay (`rgba(0,0,0,0.9)`) with an SVG spinner — keeping the experience clean while content loads.

## 7. Do's and Don'ts

### Do
- Use purple (`#8081ff`) for all primary CTAs, links, and active states
- Apply teal (`#0abbb5`) for date labels and fresh accent underlines
- Use the lavender-to-purple gradient (`#cf7ffa` → `#8081ff`) for premium features
- Set nav and CTA labels at font-weight 900 for clear tap targets
- Keep card corners sharp (0px radius) to maintain the magazine-grid aesthetic
- Use `#f3f3f3` for card text area backgrounds — soft, readable separation
- Limit red (`#e60012`) to system alerts and compliance banners only

### Don't
- Spread 7-ELEVEN red (`#e60012`) into brand UI — it belongs to alerts only
- Use drop shadows heavier than the card-standard `2px 2px 5px` on content
- Apply Noto Sans TC at weights below 400 — the TC hinting requires standard weight
- Mix orange or green (7-ELEVEN store palette) into the OPENPOINT digital surface
- Round card corners — the sharp edge is part of the information-dense grid language
- Use the gradient on text — only as a background fill
- Replace teal with generic grey for dates — teal is the calendar/time signal

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <1199.98px | Single-column event cards, carousel fills full width (no 150px padding), font-size 16px base |
| Desktop | ≥1200px | 3-column event grid, carousel with 150px side padding creating parallax, 1200px max-width container |

### Touch Targets
- Dropdown nav items at 38px height, 8px radius — comfortable thumb targets
- Event-btn at 33px height with 24px horizontal padding
- Event cards at 247px height — generous touch/click area

### Collapsing Strategy
- Hero carousel: full-width on both sizes; padding removed on mobile
- Event cards: 3-up desktop → stacked single-column mobile
- Navigation: horizontal nav hidden; replaced by hamburger/mobile nav menu (m-btn class)

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: OPENPOINT Purple (`#8081ff`)
- Gradient left: Lavender (`#cf7ffa`)
- Date / Accent: Teal (`#0abbb5`)
- Text Primary: Ink Black (`#000000`)
- Card Background: Pure White (`#ffffff`)
- Card Text Area: Light Grey (`#f3f3f3`)
- Muted / Disabled: `#9696ad`
- Alert / 7-ELEVEN: Red (`#e60012`)

### Example Component Prompts
- "Build a promotion card: white background, no border-radius, shadow `rgba(0,0,0,0.16) 2px 2px 5px`. Image at 48% height, fills full width. Below: #f3f3f3 text area, 16px padding. Date in #0abbb5, weight 900. Title in black #000000, weight 900, 2-line ellipsis."
- "Create a nav dropdown: dark overlay background. Items as `<a>` with #8081ff background, white text, 8px radius, 10px 15px padding, weight 900. Stack vertically with 4px gap."
- "Design a gradient accent badge: background `linear-gradient(to right, #cf7ffa, #8081ff)`, white text, weight 700. Use for 'OPENPOINT優惠' labels."
- "Style a form input: 1px solid #8081ff border, 8px radius, #000 text, Noto Sans TC 16px, placeholder #ccc."

### Iteration Guide
1. Purple (`#8081ff`) owns all interactions — CTAs, borders, active nav, focus rings
2. Teal (`#0abbb5`) marks time — date labels and timeline underlines only
3. Gradient (`#cf7ffa` → `#8081ff`) signals premium or selected states
4. Cards use sharp corners and gentle shadows — lean into the information-grid feel
5. All label/button text at weight 900 — boldness = accessibility at small size
6. Keep red (`#e60012`) for alerts; never use orange/green (store palette)

---

## 10. Voice & Tone

OPENPOINT's voice is **friendly, reward-focused, and transactional** — the communication style of a loyalty programme that wants users to feel like they're winning every day. The copy is predominantly Traditional Chinese (繁體中文), concise, and action-oriented. Service names like 「OPENPOINT推薦」, 「累積點數」, 「兌換點數」 are plain category labels with zero jargon — the UX copy doesn't try to be clever, it tries to be clear and fast.

| Context | Tone |
|---|---|
| Nav categories | Factual, minimal: 「優惠活動」 / 「點數交換」 / 「旅遊集點護照」 |
| Event titles | Specific and time-bracketed: 「活動時間：2026/01/01–06/30」 + product name |
| CTAs | Direct imperative: 「查看更多優惠」 (See more promotions), 「登入」 (Login) |
| Footer legal | Compact formality: 「OPENPOINT為統一超商股份有限公司發行之紅利點數業務」 |
| App download prompts | Benefit-first: highlights points-earning, payment, membership |

**Voice samples (verbatim from live homepage 2026-06-22):**
- "OPENPOINT優惠活動" — page H1 title (clarity over cleverness). *(verified live 2026-06-22)*
- "查看更多優惠" — event section CTA (direct, lowest-friction). *(verified live 2026-06-22)*
- "OPENPOINT為統一超商股份有限公司發行之紅利點數業務" — footer brand disclosure. *(verified live 2026-06-22)*

**Forbidden register**: hype language, urgency countdown pressure, English mixed into core navigation (aside from brand names like "OPENPOINT" and "icash"), emojis in body copy.

## 11. Brand Narrative

OPENPOINT (統一超商紅利點數) was launched by **President Chain Store Corporation (統一超商股份有限公司)** — Taiwan's largest convenience-store operator, running over 6,800 7-ELEVEN locations — as the digital loyalty and payment platform that bridges Taiwan's physical retail-first economy into an app-native consumer experience. The platform unifies in-store point earning (at 7-ELEVEN), payment via icash and icash Pay, and redemption partnerships with airlines, banks, and international loyalty schemes (Japan's Ponta, the Philippines' CLiQQ, Thailand's ALL member).

The brand name "OPENPOINT" signals openness — an open ecosystem where points flow beyond a single store chain to partner merchants, credit cards, and travel networks. The OPEN! mascot character (shared with 7-ELEVEN Taiwan's broader brand expression) carries a playful, orange-and-green character identity in physical retail, but OPENPOINT's own digital surface deliberately adopts a distinct purple identity — separating the loyalty app from the store brand, creating a more tech-forward, "smart wallet" perception.

The product targets Taiwan's mobile-first consumer who shops at 7-ELEVEN multiple times per week and wants to maximise everyday-spend rewards without friction — a context where the platform's dense information hierarchy and promotions-first homepage make perfect sense.

## 12. Principles

1. **Every visit is a earning opportunity.** OPENPOINT homepage surfaces active promotions before any account features. *UI implication:* promotions carousel is above the fold, member login is secondary; teal dates signal freshness.
2. **Open ecosystem, closed visual identity.** The purple-lavender palette is platform-native — distinct from the 7-ELEVEN orange-green store brand. *UI implication:* never import 7-ELEVEN's brand orange into the OPENPOINT UI.
3. **Clarity over elegance.** The navigation is a flat category list with no mega-menu or editorial photography. *UI implication:* nav labels are noun-only, no taglines; copy is short and informational.
4. **Rewards are visible, not buried.** Points balance, earning events, and redemption options are top-level navigation categories. *UI implication:* 累積點數 / 兌換點數 / 優惠 are first-level nav, not nested in a profile dropdown.
5. **Taiwan-first, Asia-connected.** International exchange features (Ponta, CLiQQ, ALL member) are prominent nav items reflecting Taiwan's outbound-travel culture. *UI implication:* travel and exchange features get dedicated nav real estate, not buried in settings.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable OPENPOINT user patterns and Taiwan 7-ELEVEN consumer behaviour, not individual people.*

**林雅婷, 32, 台北市.** Office worker who visits 7-ELEVEN two or three times daily. Uses OPENPOINT to earn and track points from every purchase, periodically redeeming for gift certificates or icash top-ups. Values the one-app convenience of seeing balance, recent transactions, and active promotions without needing to log in to multiple systems.

**陳建宇, 45, 台中市.** A small business owner who uses icash Pay for supplier transactions and collects points passively. Attracted to the bank-points exchange feature — consolidates points from credit cards into OPENPOINT for travel redemption. Sees the platform as a financial tool, not just a loyalty card.

**黃小芸, 22, 高雄市.** University student and frequent traveller. Primarily interested in the Japan Ponta and airline miles exchange features. Uses OPENPOINT's uniopen PRIMA subscription for enhanced earning rates. Engages most with the travel and partner-exchange sections of the app.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no active promotions)** | White canvas with placeholder text in `#000000`; `#0abbb5` teal date label absent. Section titles still render; single CTA to browse categories. |
| **Empty (no points balance)** | Member centre shows 0 balance in black ink; prompt to earn displayed in `#8081ff` purple CTA. |
| **Loading** | Full-viewport overlay `rgba(0,0,0,0.9)` with SVG circle spinner (`.loading-circle`). Fades out with `.loading.fade` class (opacity 0, z-index -1 transition). |
| **Loading (section data)** | Section title and card grid render; card image areas show background-color placeholder until images load. |
| **Error (service unavailable)** | Alert banner in `#e60012` red (cookie/system banner pattern), white text. Describes issue and prompts retry — matches the cookie-consent banner component. |
| **Error (form validation)** | Border shifts to `#e60012` red; placeholder / field-level message below input. Uses Noto Sans TC for readability in Traditional Chinese. |
| **Success (points earned)** | Points balance increments with brief inline confirmation. Teal (`#0abbb5`) used as positive signal. No celebratory animation — transactional confirmation. |
| **Skeleton** | Background-color placeholder at card dimensions; no shimmer (static grey `#f3f3f3` blocks). |
| **Disabled** | Muted purple `#9696ad` background replaces purple `#8081ff`; white text maintained. |
| **Read-only field** | Background `#ebebе4` (light warm-grey `rgb(235,235,228)`) — distinct from editable `#eeeef5`. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 150ms | Hover states (event-btn arrow, dropdown reveal) |
| `motion-standard` | 250ms | Card hover shadow transition (`transition: box-shadow 0.25s`) |
| `motion-image` | 300ms | Event card image scale on hover (`transition: 0.3s ease-out`) |
| `motion-cookie` | 2000ms | Cookie banner slide (2s cubic-bezier reveal) |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-image` | `ease-out` | Event card image zoom on hover (`0.3s ease-out`) |
| `ease-cookie` | `cubic-bezier(0.23, 1, 0.32, 1)` | Cookie consent slide — quick exit, smooth deceleration |
| `ease-loading-fade` | implicit transition | Loading overlay fade-out with opacity + z-index collapse |

**Motion rules**: Motion is conservative and functional. The event card hover uses a scale(1.2) image zoom (`0.3s ease-out`) paired with an elevated shadow — a standard e-commerce pattern that communicates interactivity without distraction. The cookie banner entrance uses a heavy ease-in/out curve, reflecting the legal-compliance character of that surface. Under `prefers-reduced-motion`, image scale transforms should collapse; shadow transitions are safe to retain at reduced magnitude.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-22) via playwright getComputedStyle on https://www.openpoint.com.tw:
- H1 "OPENPOINT優惠活動": font-family 微軟正黑體; font-size 28.8px; font-weight 700; color rgb(0,0,0)
- H2 "OPENPOINT推薦": font-size 22.4px; font-weight 700; color rgb(255,255,255) [on bg-image title-bar]
- Event card date ".date": color rgb(10,187,181) = #0abbb5; font-weight 900
- Nav dropdown item: color rgb(255,255,255); radius 8px; padding 10px 15px; font 16px weight 900
- Event-btn "查看更多優惠": color rgb(0,0,0); padding 8px 24px; font-weight 900; height 33px
- Event card (event-item): bg rgb(255,255,255); shadow rgba(0,0,0,0.16) 2px 2px 5px
- Event text area (event-text): bg rgb(243,243,243); padding 16px
- Header: bg rgb(255,255,255); color rgb(0,0,0); height 100px
- Footer: bg rgb(243,243,243); height 147px
- CSS: primary #8081ff; lavender #cf7ffa; teal #0abbb5; red #e60012; muted-purple #9696ad
- CSS: gradient linear-gradient(to right, #cf7ffa, #8081ff) for premium features
- body font-family: 微軟正黑體, 新細明體, 蘋果儷黑體, Arial, Helvetica, sans-serif
- input/button font-family: "Noto Sans TC", "Open Sans", Arial, "Microsoft JhengHei"
- box-shadow card: rgba(0, 0, 0, 0.16) 2px 2px 5px 0px
- Footer copyright text: "© 2026 UNI-President Chain Store Corporation. All rights reserved."

Voice samples (§10) are verbatim from live page innerText (2026-06-22).

Brand narrative (§11): President Chain Store Corporation / 統一超商股份有限公司 is the publicly-traded Taiwanese entity operating 7-ELEVEN Taiwan — widely documented public facts.

Personas (§13) are fictional archetypes informed by publicly observable OPENPOINT usage patterns (Taiwan 7-ELEVEN loyalty programme customers). Names are illustrative and do not refer to real people.

Interpretive claims ("open ecosystem", "purple as digital-native identity") are editorial readings of the brand's observed design choices vs the 7-ELEVEN physical brand palette.
-->
