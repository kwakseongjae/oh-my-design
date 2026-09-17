---
id: ipassmoney
name: iPASS MONEY
country: TW
category: fintech
homepage: "https://www.i-pass.com.tw/Page/iPMIntroduce"
primary_color: "#53b232"
logo:
  type: favicon
  slug: "https://static01-ipass.cdn.hinet.net/ipassweb/iPassWebV2/Content/style2018/img/core-img/logo.png"
verified: "2026-06-22"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-22"
  note: "primary = iPASS MONEY button green (#53b232, rgb 83 178 50); brand green family spans #10a83b (nav active), #00c43e (social section), #00a73c (hero bg). Body near-black #212529; headings #1c1c1c. Orange accent #ff9900 used sparingly on highlight CTAs."
  colors:
    primary: "#53b232"
    primary-nav: "#10a83b"
    brand-bright: "#00c43e"
    brand-hero: "#00a73c"
    secondary-green: "#5cb85c"
    canvas: "#ffffff"
    surface: "#f4f4f4"
    ink: "#1c1c1c"
    body: "#212529"
    muted: "#777573"
    on-primary: "#ffffff"
    accent-orange: "#ff9900"
    hairline: "#cdcdcd"
  typography:
    family: { display: "stolzl", body: "Noto Sans TC", fallback: "Roboto, Open Sans, 微軟正黑體, Arial, sans-serif" }
    display-hero: { size: 40, weight: 600, lineHeight: 1.25, use: "App download headline, stolzl bold" }
    section: { size: 32, weight: 600, lineHeight: 1.35, use: "Feature section headings, stolzl/Noto Sans TC" }
    subsection: { size: 24, weight: 600, lineHeight: 1.40, use: "Feature card subheadings in brand green" }
    nav: { size: 17.6, weight: 400, lineHeight: 1.40, use: "Top navigation items" }
    body: { size: 16, weight: 400, lineHeight: 1.50, use: "Body copy, paragraphs" }
    h1-page: { size: 33.6, weight: 400, lineHeight: 1.35, use: "Page title breadcrumb" }
  spacing: { xs: 4, sm: 8, md: 16, base: 16, lg: 24, xl: 40, xxl: 48, section: 64 }
  rounded: { sm: 5, md: 8, lg: 50, full: 100, circle: 200 }
  shadow:
    soft: "rgba(0, 0, 0, 0.25) 0px 0px 5px 0px"
  components:
    button-primary: { type: button, bg: "#53b232", fg: "#ffffff", radius: "100px", padding: "16px 40px", font: "16px / 700 stolzl", height: "58px", use: "Primary CTA — app feature actions, full pill" }
    button-social: { type: button, bg: "#f4f4f4", fg: "#00c43e", radius: "200px", padding: "10px", height: "60px", font: "18.56px / 400 stolzl", use: "Social platform icon links — rounded circle container" }
    button-cookie: { type: button, bg: "#ff9900", fg: "#000000", radius: "5px", padding: "8px 15px", font: "14px / 400", use: "Cookie consent accept button (accent orange)" }
    nav-link: { type: tab, fg: "#777573", font: "17.6px / 400 stolzl", use: "Top nav item", active: "text #10a83b weight 700" }
    card-surface: { type: card, bg: "#f4f4f4", radius: "8px", use: "Light grey surface cards for feature sections" }
    card-white: { type: card, bg: "#ffffff", radius: "8px", shadow: "rgba(0,0,0,0.25) 0px 0px 5px 0px", use: "White elevated card with soft shadow" }
    badge-green: { type: badge, bg: "#53b232", fg: "#ffffff", radius: "50px", padding: "8px 20px", font: "14px / 700", use: "Status or category tag in brand green" }
    toggle-menu: { type: toggle, fg: "#ffffff", use: "Mobile hamburger toggle in dark header" }
  components_harvested: true
---

# Design System Inspiration of iPASS MONEY

## 1. Visual Theme & Atmosphere

iPASS MONEY (一卡通 MONEY) is Taiwan's integrated e-wallet and transit card management platform operated by iPASS Corporation (一卡通票證股份有限公司). Its visual identity is rooted in an energetic, nature-connected green — a hue that bridges the civic trust of public transit systems and the approachability of a consumer fintech app. The canvas is predominantly white (`#ffffff`) and light grey (`#f4f4f4`), creating a clean, government-adjacent professionalism that feels neither cold nor corporate-heavy.

The defining visual signature is a confident, rounded-everything brand language: primary action buttons are full-pill (100px radius), social icon containers are near-circular (200px), and even the small cookie consent button shows a rounded edge (5px). This softness communicates accessibility — the app is designed for everyday Taiwanese commuters, shoppers, and households rather than financial power users. The brand green family (`#53b232` for buttons, `#10a83b` for active navigation, `#00c43e` for social highlights, `#00a73c` for hero section backgrounds) is layered across surfaces to create a recognizable, transit-inspired color system without becoming monotonous.

Typography is handled through `stolzl` as the display face with `Noto Sans TC` as the Chinese character workhorse — a pragmatic split that prioritizes Traditional Chinese legibility (`#1c1c1c` headings at 32px / weight 600) while using the geometric Latin font for brand headlines and navigation. The body system sits at 16px / weight 400 in near-black `#212529`, the Bootstrap default, indicating that the product was built with a pragmatic CSS framework foundation rather than a bespoke design system.

**Key Characteristics:**
- Full-pill geometry throughout (100px–200px border radius on interactive elements)
- Green family of four (`#53b232`, `#10a83b`, `#00c43e`, `#00a73c`) — each carrying a distinct UI role
- stolzl (Latin/numbers) + Noto Sans TC (Traditional Chinese) dual-font system
- Orange accent (`#ff9900`) reserved for high-urgency callouts
- Light grey (`#f4f4f4`) surfaces with white cards — flat, shadow-light aesthetic
- Civic/transit brand heritage expressed through green sustainability framing

## 2. Color Palette & Roles

### Primary Green Family
- **iPASS Green** (`#53b232`): Primary brand CTA color. Used for all action buttons across the iPASS MONEY app intro pages — 16px/700 stolzl, full-pill 100px radius, white text. The system's dominant call-to-action signal.
- **Nav Active Green** (`#10a83b`): Active navigation link color and active state indicator. Slightly deeper than the button green, providing visual distinction between nav states.
- **Bright Brand Green** (`#00c43e`): Used for social follow section headings and social icon foreground in the light grey circle containers. The most saturated of the green family.
- **Hero Background Green** (`#00a73c`): Section-level background color used for the "convenience-list" hero section. Mid-depth green for full-bleed section backgrounds.
- **Bootstrap Secondary Green** (`#5cb85c`): Appears in legacy Bootstrap-influenced UI components on the site.

### Neutral & Surface
- **Pure White** (`#ffffff`): Page canvas, white card backgrounds, text on primary green.
- **Light Surface** (`#f4f4f4`): Tinted surface for social icon container backgrounds and feature card sections.
- **Body Near-Black** (`#212529`): Primary body text color — standard Bootstrap body default, applied consistently.
- **Heading Near-Black** (`#1c1c1c`): Slightly darker heading color at H2/H3 level (32px/600).
- **Muted Grey** (`#777573`): Secondary text, inactive navigation links, tertiary labels.
- **Hairline** (`#cdcdcd`): Thin dividers and borders used to separate content sections in a hairline weight.

### Accent
- **iPASS Orange** (`#ff9900`): Accent orange for high-emphasis callouts — the "Here We Go!!" section heading uses this orange to signal urgency and excitement, contrasting the dominant green palette.

## 3. Typography Rules

### Font Family
- **Display**: `stolzl` — a geometric sans-serif used for Latin display headings, navigation labels, and number-heavy UI. Loaded as a web font.
- **Body/CJK**: `Noto Sans TC` — Google's Traditional Chinese Noto font, ensuring excellent legibility of Traditional Chinese characters at all body sizes.
- **Fallbacks**: `Roboto, Open Sans, 微軟正黑體, Arial, sans-serif` — broad system fallback chain indicating a web-first architecture.

### Hierarchy

| Role | Size | Weight | Color | Use |
|------|------|--------|-------|-----|
| App Download Hero | 40px | 600 | `#1c1c1c` | "立即下載 一卡通 iPASS MONEY APP" |
| Section Heading (H2) | 32px | 600 | `#1c1c1c` | Feature section headings |
| Feature Sub-heading (H4) | 24px | 600 | `#53b232` | Feature card titles in brand green |
| Page Title (H1) | 33.6px | 400 | `#1c1c1c` | Breadcrumb page title |
| Navigation | 17.6px | 400 | `#777573` | Inactive nav links |
| Navigation Active | 16.64px | 700 | `#10a83b` | Active nav link |
| Body | 16px | 400 | `#212529` | Standard reading text |
| Button Primary | 16px | 700 | `#ffffff` | CTA button label |

### Principles
- **Chinese-first legibility**: Noto Sans TC ensures Traditional Chinese text renders cleanly at body sizes; stolzl handles Latin branding and numbers.
- **Weight 600 for headings**: All functional headings (H2/H3/H4) use weight 600, never 400 or 800, resulting in a clear but accessible hierarchy.
- **Green for feature subheads**: H4 elements within feature cards are rendered in brand green (`#53b232`) rather than near-black, turning the font color into a brand signal.

## 4. Component Stylings

### Buttons

**Primary Action (App CTA)**
- Background: `#53b232`
- Text: `#ffffff`
- Radius: 100px
- Padding: 16px 40px
- Font: 16px stolzl weight 700
- Height: 58px
- Use: Primary call-to-action for app feature sections ("了解更多", "立即下載")

**Social Platform Link**
- Background: `#f4f4f4`
- Text: `#00c43e`
- Radius: 200px
- Padding: 10px
- Height: 60px
- Font: 18.56px weight 400
- Use: Circular icon-only links for Facebook, LINE, YouTube, Instagram social platforms

**Accent Consent Button**
- Background: `#ff9900`
- Text: `#000000`
- Radius: 5px
- Padding: 8px 15px
- Font: 14px weight 400
- Use: Cookie consent accept button — orange for urgency distinction from green system

### Cards & Containers

**Light Surface Card**
- Background: `#f4f4f4`
- Radius: 8px
- Use: Feature section cards on light grey tinted backgrounds

**White Elevated Card**
- Background: `#ffffff`
- Radius: 8px
- Shadow: `rgba(0, 0, 0, 0.25) 0px 0px 5px 0px`
- Use: White cards with soft shadow against grey surface sections

### Badges

**Brand Green Badge**
- Background: `#53b232`
- Text: `#ffffff`
- Radius: 50px
- Padding: 8px 20px
- Font: 14px weight 700
- Use: Category tag or status indicator in brand green

### Navigation

**Nav Link Default**
- Text: `#777573`
- Font: 17.6px stolzl weight 400
- Padding: 0px 9px
- Use: Inactive top-nav item

**Nav Link Active**
- Text: `#10a83b`
- Font: 16.64px weight 700
- Use: Active navigation state — deeper green, heavier weight

### Section Backgrounds

**Hero Green Section**
- Background: `#00a73c`
- Use: Full-width "convenience-list" section background — the site's primary brand-colored band

---

**Verified:** 2026-06-22
**Tier 1 sources:** https://www.i-pass.com.tw/Page/iPMIntroduce, https://www.i-pass.com.tw/Page/download
**Tier 2 sources:** getdesign.md/ipassmoney — not found (404); styles.refero.design — no results for "ipass"
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 16px (Bootstrap default)
- Scale: 4px, 8px, 16px, 24px, 40px, 48px, 64px
- Button padding: 16px vertical / 40px horizontal for full-pill CTAs

### Grid & Container
- Standard Bootstrap-based 12-column grid
- Full-width colored section bands (white/grey/green alternating)
- Feature sections organized into horizontal rows of illustrated feature cards
- Centered layout with max-width container for readability

### Whitespace Philosophy
- **Generous section spacing**: each service feature is given a full viewport-width section band, ensuring cognitive separation between: payment, transfer, rewards, transit.
- **Padding-first**: interactive pill buttons use generous internal padding (16px 40px) over tight typography — a touch-first mobile design carried to desktop.
- **Alternating band rhythm**: white → light grey → green → white creates a color-coded wayfinding system through the service sections.

### Border Radius Scale
- Small (5px): Cookie/legacy UI elements
- Medium (8px): Cards, containers
- Large (50px): Accessibility shortcut link
- Full Pill (100px): Primary CTA buttons
- Circle (200px): Social icon containers

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page backgrounds, nav, headings |
| Subtle (Level 1) | `rgba(0,0,0,0.25) 0 0 5px` | Accessibility skip-link button, elevated white cards |
| Section Band | Full-width background color change | Section separation without z-axis lift |

**Shadow philosophy**: iPASS MONEY uses an extremely light touch with elevation — a single `5px blur, 0.25 alpha black` ambient shadow appears only on the accessibility shortcut link and occasional white cards. The system relies primarily on background color alternation (white/grey/green bands) rather than drop shadows. This is consistent with a mobile-transit product prioritizing clarity over decoration.

## 7. Do's and Don'ts

### Do
- Use `#53b232` (iPASS Green) for all primary action buttons in the full-pill (100px) radius
- Use `Noto Sans TC` for all Traditional Chinese body text to ensure proper character rendering
- Use stolzl for navigation labels and Latin/numeric display headings
- Separate page sections with full-width color bands (white / `#f4f4f4` / `#00a73c` green)
- Apply weight 600 to all section headings for clear but accessible visual hierarchy
- Reserve `#ff9900` orange for single high-urgency callout moments — never as a secondary action
- Use the full circle (200px radius) for social icon containers — it's the brand's social identity

### Don't
- Dilute the green family by introducing additional accent colors — the four greens cover all brand roles
- Use sharp corners (0px radius) on interactive elements — even small UI elements should carry ≥5px radius
- Apply drop shadows broadly — the system is intentionally flat; save the `5px` shadow for selective elevation only
- Use weight 800 for headings — iPASS MONEY uses 600 throughout, not ExtraBold
- Mix Traditional Chinese text with fonts lacking CJK coverage (stolzl alone is insufficient for Chinese)
- Place orange (`#ff9900`) on green backgrounds — color accessibility is compromised without sufficient contrast
- Use `#5cb85c` (Bootstrap green) as a brand color — it's a legacy utility tint, not the primary `#53b232`

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | Single column, nav collapses to hamburger, hero text stacks |
| Tablet | 768-1024px | Two-column feature cards, nav may retain partial items |
| Desktop | ≥1024px | Full horizontal nav, multi-column feature grid, wide hero band |

### Touch Targets
- Primary CTA buttons: 58px height, 100px full-pill — generous tap area
- Social icon circles: 60px diameter — thumb-friendly
- Navigation items: 40px height with 9px horizontal padding

### Collapsing Strategy
- Header collapses to hamburger menu (white `:::` icon on transparent background)
- Feature sections stack from 3-4 column grid to 1-2 column on tablet/mobile
- Full-width color bands maintain across all breakpoints — the primary layout rhythm is preserved

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: iPASS Green (`#53b232`)
- Active nav / link: Green (`#10a83b`)
- Social section accent: Bright Green (`#00c43e`)
- Hero band background: Green (`#00a73c`)
- Page canvas: White (`#ffffff`)
- Feature card surface: Light Grey (`#f4f4f4`)
- Heading text: Near-Black (`#1c1c1c`)
- Body text: Near-Black (`#212529`)
- Secondary / inactive text: Grey (`#777573`)
- Urgency accent: Orange (`#ff9900`)

### Example Component Prompts
- "Create a feature CTA button: `#53b232` background, white text, 100px border radius, 16px 40px padding, 58px height, stolzl 16px weight 700. '立即下載'."
- "Design a feature section: `#00a73c` full-width green band. Centered H2 at 32px/600 in white. Below it, four icon+text feature cards in white with 8px radius and `rgba(0,0,0,0.25) 0 0 5px` shadow."
- "Build a social links row: four circular `#f4f4f4` containers, 60px diameter, 200px radius, each holding a `#00c43e` icon. Section heading: 35.2px/600 `#00c43e`."
- "Create nav bar: white background, 60px height. Left: stolzl brand logo. Links: 17.6px/400 `#777573` inactive, 16.64px/700 `#10a83b` active. Right: green pill CTA `#53b232`."

### Iteration Guide
1. Green family is hierarchical — button green (`#53b232`) → nav active (`#10a83b`) → social (`#00c43e`) → hero bg (`#00a73c`)
2. All interactive surfaces are pill/circle — 100px+ radius is the standard
3. Chinese text always Noto Sans TC; Latin/numbers in stolzl
4. Section rhythm: white → grey → green band — alternate for wayfinding
5. Orange (`#ff9900`) is a single accent — never repeat in the same viewport
6. Heading hierarchy: weight 600 for H1-H4; body at 400 always

---

## 10. Voice & Tone

iPASS MONEY's voice is **pragmatic, inclusive, and confidence-inspiring** — a civic utility that sounds like a helpful city guide rather than a finance app. The service positioning as "電子支付工具也是票卡管理小幫手" (electronic payment tool and transit card management assistant) establishes a friendly dual identity: useful for both spending money and catching buses. Copy is direct Traditional Chinese without English-heavy hybrid jargon, except for the "iPASS MONEY" brand name itself and technical QR standards ("TWQR付款").

| Context | Tone |
|---|---|
| Hero headlines | Optimistic and empowering. "實現生活簡單自由！" (Achieve simple, free living!). Aspirational without hype. |
| Feature subheads | Benefit-forward, concise. "儲值簡單又安全", "生活繳費最方便", "轉帳可跨機構最方便". |
| Registration prompts | Reassuring and procedural. "請準備好身分證及銀行帳戶，註冊後即可開始使用！" |
| Transfer/payment CTAs | Speed-focused. "隨時隨地都可以轉帳，簡單快速又安全！" |
| Sustainability messaging | Community-spirited. "一卡通跟你一起用行動愛地球" (iPASS joins you in caring for the earth). |

**Voice samples (verbatim from live pages):**
- "實現生活簡單自由！" — service hero headline (aspirational positioning). *(verified live 2026-06-22)*
- "智在生活隨時掌握！" — app download CTA subhead (smart lifestyle pitch). *(verified live 2026-06-22)*
- "一卡通 iPASS MONEY APP 之間轉帳免手續費！" — transfer feature benefit (zero-fee hook). *(verified live 2026-06-22)*

**Forbidden register**: bureaucratic coldness, banking jargon unexplained in Chinese, English-only instructions for a predominantly Chinese-speaking market, aggressive sales urgency ("Limited time offer expires now!").

## 11. Brand Narrative

iPASS (一卡通) was established in Taiwan to operate stored-value card payment services for public transit, expanding progressively from Kaohsiung's mass transit system to a nationwide multi-purpose payment platform. The corporate entity — 一卡通票證股份有限公司 (iPASS Corporation) — operates under the brand in both physical card form (the signature orange-blue stored-value card) and the digital wallet: **iPASS MONEY**.

The MONEY layer transforms the transit card brand into a full-spectrum daily fintech: QR code payments via TWQR, inter-institutional transfers with no fees, utility bill payment, and cross-border PayPay support for Japan. In early 2026, LINE Pay's iPASS MONEY wallet features migrated to iPASS's standalone app — consolidating what was previously a secondary feature of LINE Pay into a dedicated brand surface. This migration marks iPASS MONEY's evolution from embedded fintech feature to an independent consumer app brand.

The visual identity reflects this transit-first heritage: green communicates public transport, sustainability, and civic service. The orange accent of the physical iPASS card is echoed minimally in the digital brand — as a single urgency color for callout moments — while the green takes full ownership of the digital palette.

## 12. Principles

1. **Integrate, don't fragment.** One app for transit, payment, transfers, and bill management. *UI implication:* all service categories accessible from a single bottom navigation or menu; no deep link silos per function.
2. **Simple registration, immediate value.** The system's onboarding promise: "ID card + bank account = ready." *UI implication:* minimize registration steps; surface the value proposition before the form.
3. **Zero-fee transfer as trust signal.** No-fee transfers between iPASS MONEY accounts is the competitive anchor. *UI implication:* surface the "免手續費" claim at the transfer CTA, not buried in fine print.
4. **Sustainability as brand value.** 一卡通綠點 (Green Points) for transit use — earning points by taking public transport, not just spending. *UI implication:* green palette is earned symbolically; the color itself communicates eco-consciousness.
5. **Accessibility through consistency.** Full-pill buttons, large touch targets, CJK-first typography. *UI implication:* every interactive element must be thumb-friendly at 58px+ height; Chinese text must render at ≥16px body size.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable iPASS MONEY user segments (Taiwanese daily commuters, urban households, cross-border travelers), not individual people.*

**林小美, 26, 台北.** A daily MRT commuter who links her transit card to iPASS MONEY for automatic top-up. She values never needing to check her card balance at the gates, and uses 一卡通綠點 to get discounts on transit. She discovered iPASS MONEY when LINE Pay migrated its stored-value features.

**陳大明, 38, 高雄.** A small business owner who pays utility bills, parking fees, and supplier transfers through iPASS MONEY. Appreciates the inter-institutional transfer with zero fee and the ability to manage multiple family cards from one app.

**黃美玲, 52, 台中.** A frequent traveler to Japan who uses iPASS MONEY's PayPay cross-border feature. Values not needing to carry cash or exchange currency for everyday Japan purchases.

**王小凱, 21, 新竹.** A university student using 乘車碼 for bus and rail travel across the TPASS southern routes. Manages his limited budget through the automatic recharge threshold setting.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no transaction history)** | White canvas with single Noto Sans TC body copy in `#212529`, explaining the empty state with a green CTA to start a transaction. |
| **Empty (no linked cards)** | `#f4f4f4` surface with an illustration placeholder and green pill button to add a transit card. |
| **Loading (balance fetch)** | Skeleton rows on `#f4f4f4` surface at final card dimensions, 8px radius. Consistent with the flat surface system — no shimmer animation heavier than a gentle opacity pulse. |
| **Loading (QR code generation)** | Spinner in brand green `#53b232` within the QR code container area. |
| **Error (transfer failed)** | Inline message in `#212529` near-black with clear next-step instruction in Traditional Chinese. No generic error codes unexplained. |
| **Error (payment QR timeout)** | Inline prompt to regenerate the QR code with a green refresh CTA. |
| **Success (transfer complete)** | Brief confirmation screen with a checkmark in brand green `#53b232`; transaction details below; no excessive animation. |
| **Success (top-up credited)** | Inline notification with updated balance immediately visible, confirmation in brand green. |
| **Skeleton** | `#f4f4f4` blocks at final content dimensions, 8px radius, gentle pulse opacity. |
| **Disabled** | Muted grey `#777573` text on reduced-opacity surface; green CTAs fade to `#5cb85c` to preserve the brand read while communicating unavailability. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 100ms | Tap feedback, button press, nav toggle |
| `motion-standard` | 200ms | Card reveal, tab switch, modal open |
| `motion-slow` | 350ms | Page transition, hero reveal, section scroll animation |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` | Elements arriving (cards, sheets, QR code) |
| `ease-exit` | `cubic-bezier(0.55, 0.085, 0.68, 0.53)` | Elements dismissing |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1.0)` | Standard two-way transitions |

**Motion rules**: As a transit and payment app used in public environments (MRT gates, checkout queues), motion must be fast and purposeful. QR code generation should appear near-instant (100ms feedback, then populate). Pill button taps respond with immediate opacity/scale feedback. Section scroll reveals use `motion-slow / ease-enter` for marketing pages, never for functional transaction screens where latency reads as error. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; payment-critical flows must remain fully functional without motion dependency.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-22) via playwright getComputedStyle on:
- https://www.i-pass.com.tw/Page/iPMIntroduce (iPASS MONEY service intro page)
- https://www.i-pass.com.tw/Page/download (app download page)
- https://www.i-pass.com.tw/ (homepage)

Raw observations:
- Primary button bg: rgb(83, 178, 50) = #53b232 · radius 100px · padding 16px 40px · height 58px · font 16px/700 stolzl
- Nav active link: rgb(16, 168, 59) = #10a83b · font-weight 700 · 16.64px
- Social section heading: rgb(0, 196, 62) = #00c43e · 35.2px/600
- Hero section background: rgb(0, 167, 60) = #00a73c (convenience-list section)
- Social icon container: bg rgb(244, 244, 244) = #f4f4f4 · color rgb(0, 196, 63) · radius 200px · 60px height
- Body: font-family stolzl, roboto, Noto Sans TC · color rgb(33, 37, 41) = #212529 · 16px / 24px line-height
- H2 headings: rgb(28, 28, 28) = #1c1c1c · 32px/600
- H4 feature subheads: rgb(83, 178, 50) = #53b232 · 24px/600
- Orange accent heading "Here We Go!!": rgb(255, 153, 0) = #ff9900 · 32px/600
- document.title (iPMIntroduce): "服務介紹 - iPASS一卡通"
- document.title (download): "立即下載 - iPASS一卡通"

Brand narrative and service descriptions sourced from live page copy (verbatim paragraphs captured during 2026-06-22 inspect).
Philosophy sections are editorial readings connecting observed design to brand positioning.
Personas are fictional archetypes, not real people.
-->
