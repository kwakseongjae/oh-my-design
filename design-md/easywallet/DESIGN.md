---
id: easywallet
name: EasyWallet
country: TW
category: fintech
homepage: "https://easywallet.easycard.com.tw"
primary_color: "#007bc6"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=easywallet.easycard.com.tw&sz=128"
verified: "2026-06-22"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-22"
  note: "primary = EasyWallet brand blue (#007bc6) used for text-highlight blocks on easywallet.easycard.com.tw intro site; magenta (#e4007f) = circle/decorative accent; yellow (#f6ac19) = nav border + step line; teal (#66ecd2) = loading overlay (brand teal family); body text #333333."
  colors:
    primary: "#007bc6"
    primary-hover: "#006ba8"
    brand-teal: "#66ecd2"
    accent-magenta: "#e4007f"
    accent-yellow: "#f6ac19"
    accent-yellow-nav: "#f7b146"
    accent-green: "#40a731"
    canvas: "#ffffff"
    surface: "#efefef"
    body: "#333333"
    text-secondary: "#595153"
    on-primary: "#ffffff"
    placeholder: "#413b3b"
    hairline: "#bfbfbf"
  typography:
    family: { display: "Noto Sans TC", body: "PingFang TC", fallback: "微軟正黑體, Microsoft JhengHei, Arial, sans-serif" }
    hero-xxl: { size: 234, weight: 700, lineHeight: 1.0, use: "Oversized brand word BEEP! hero text" }
    hero-lg: { size: 58, weight: 700, lineHeight: 1.2, use: "Section H5 main headline" }
    hero-sub: { size: 43, weight: 700, lineHeight: 1.2, use: "H4 hero tagline 智慧升級，放心悠遊！" }
    section-title: { size: 38, weight: 700, lineHeight: 1.3, use: "Feature section titles (管理悠遊卡 steps)" }
    sub-title: { size: 25, weight: 500, lineHeight: 1.4, use: "H6 sub-headline under section heading" }
    highlight: { size: 20, weight: 500, lineHeight: 1.5, letterSpacing: "0.17em", use: "Text-highlight box content on brand blue" }
    nav: { size: 13.5, weight: 400, lineHeight: 1.4, letterSpacing: "0.03em", use: "Navigation menu items" }
    body: { size: 16, weight: 400, lineHeight: 1.5, use: "Standard body text" }
    caption: { size: 11, weight: 300, lineHeight: 1.0, letterSpacing: "0.1em", use: "Footer legal text / copyright" }
    download-cta: { size: 16, weight: 700, lineHeight: 1.0, letterSpacing: "0.1em", use: "App download CTA button label" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 4, md: 8, lg: 16, full: 9999 }
  shadow:
    card: "rgba(0, 0, 0, 0.15) 0px 10px 20px 0px"
    nav: "rgba(0, 0, 0, 0.2) 0px 2px 4px 0px"
  components:
    button-download: { type: button, bg: "#000000", fg: "#ffffff", font: "16px / 700 Noto Sans TC", padding: "20px 32px", use: "App download CTA — App Store / Google Play" }
    button-blue: { type: button, bg: "#007bc6", fg: "#ffffff", radius: "4px", font: "15px / 400 Noto Sans TC", padding: "8px 25px", use: "Primary action button (藍色按鈕)" }
    button-outline-blue: { type: button, fg: "#007bc6", border: "1px solid #007bc6", radius: "4px", font: "15px / 400 Noto Sans TC", padding: "8px 25px", use: "Secondary outline button" }
    button-yellow: { type: button, bg: "#f6ac19", fg: "#ffffff", radius: "4px", font: "15px / 400 Noto Sans TC", padding: "8px 25px", use: "Accent yellow CTA" }
    button-magenta: { type: button, bg: "#e4007f", fg: "#ffffff", radius: "4px", font: "15px / 400 Noto Sans TC", padding: "8px 25px", use: "Accent magenta action" }
    highlight-block: { type: card, bg: "#007bc6", fg: "#ffffff", font: "20px / 500 Noto Sans TC", padding: "8px 12px", use: "Inline text-highlight box for body copy emphasis" }
    card-surface: { type: card, bg: "#efefef", fg: "#333333", radius: "8px", use: "Content section card on light grey surface" }
    card-white: { type: card, bg: "#ffffff", fg: "#333333", radius: "8px", shadow: "rgba(0,0,0,0.15) 0px 10px 20px 0px", use: "Elevated white card for feature content" }
    nav-item: { type: tab, fg: "#000000", font: "13.5px / 400 Noto Sans TC", use: "Nav menu item", active: "2px bottom border #f7b146 on hover/active" }
    badge-green: { type: badge, bg: "#40a731", fg: "#ffffff", radius: "4px", font: "12px / 400 Noto Sans TC", use: "Success or step completion status" }
    circle-feature: { type: badge, bg: "#e4007f", fg: "#ffffff", radius: "9999px", use: "Circle feature tab indicator (四大優勢 selector)" }
    input-default: { type: input, bg: "#ffffff", border: "1px solid #bfbfbf", radius: "4px", font: "16px / 400 Noto Sans TC", use: "Standard form input" }
  components_harvested: true
---

# Design System Inspiration of EasyWallet

## 1. Visual Theme & Atmosphere

EasyWallet (悠遊付) is Taiwan's leading mobile payment app, developed by EasyCard Corporation (悠遊卡股份有限公司). Its marketing website — `easywallet.easycard.com.tw` — projects a clean, modern, mobile-first personality that bridges the brand's public-transit roots with contemporary digital-wallet design. The page opens on a white canvas (`#ffffff`) with a near-white grey (`#efefef`) used for scene transitions, keeping the palette airy and spacious.

The most arresting moment is the hero scene: the oversized word "BEEP!" in massive weight-700 type dominates the viewport — a playful nod to the audible NFC beep when tapping an EasyCard reader. The hero tagline "智慧升級，放心悠遊！" (Smart upgrade, worry-free travel) appears in a clean `#000000`, followed immediately by signature brand-blue (`#007bc6`) text-highlight blocks that frame the product promise in crisp, banner-like contrast. This "text on brand blue" pattern — white type set against solid `#007bc6` rectangles — is the system's primary emphasis device.

The secondary palette is vivid and purposeful: a warm magenta (`#e4007f`) signals interactive feature tabs and decorative circle elements; a golden yellow (`#f6ac19`) marks step lines and navigation accents; and a teal/cyan (`#66ecd2`) — EasyCard's legacy transit color — appears in the initial loading overlay, maintaining brand heritage. The typographic stack leads with **Noto Sans TC** for display and UI, with PingFang TC and 微軟正黑體 as cross-platform fallbacks, keeping the experience sharp and legible across all Taiwanese user environments.

**Key Characteristics:**
- EasyWallet brand blue (`#007bc6`) for inline text-highlight blocks and primary CTAs
- Warm magenta (`#e4007f`) for feature-selector circles and animated decorative elements
- Golden accent yellow (`#f6ac19`) for nav underline borders and step navigation indicators
- Brand teal (`#66ecd2`) in loading overlay — the EasyCard transit color heritage
- Oversized display type ("BEEP!" at ~234px) for bold, playful brand entry moment
- Noto Sans TC / PingFang TC as the pan-CJK type stack
- Near-shadowless flat design; subtle drop-shadow only on elevated card surfaces
- Full-viewport scrolljack sections with smooth 0.5s transitions between scenes

## 2. Color Palette & Roles

### Primary
- **EasyWallet Blue** (`#007bc6`): Primary brand color. Used for inline text-highlight blocks on the hero and for primary action buttons across the EasyCard corporate site. The definitive "action and identity" color.
- **Blue Hover** (`#006ba8`): Darkened primary for hover states on blue buttons.

### Brand Accents
- **Brand Teal** (`#66ecd2`): EasyCard's legacy transit-teal, appearing as the loading-screen background. Ties digital EasyWallet to the physical EasyCard's cyan identity.
- **Accent Magenta** (`#e4007f`): Vivid pink-magenta for decorative circle feature tabs (四大優勢 selectors) and animated background circles. High-energy, eye-catching.
- **Accent Yellow** (`#f6ac19`): Warm golden yellow for step-line indicators and feature nav highlights.
- **Nav Yellow** (`#f7b146`): Slightly lighter yellow for the nav bar bottom border and hover underlines.
- **Accent Green** (`#40a731`): Success state and numbered step callouts.

### Neutral & Surface
- **Canvas** (`#ffffff`): Primary page background and card surfaces.
- **Surface Grey** (`#efefef`): Light grey for alternating scene backgrounds (s-1 intro scene, s-6 footer scene).
- **Body Text** (`#333333`): Primary text color across EasyCard corporate site.
- **Secondary Text** (`#595153`): Warm dark-grey for section title copy in feature scenes.
- **Hairline** (`#bfbfbf`): Subtle separator and form input border.
- **Placeholder** (`#413b3b`): Form input placeholder text.
- **On-Primary** (`#ffffff`): White text on blue, magenta, or yellow brand backgrounds.

## 3. Typography Rules

### Font Family
- **Display / UI**: `Noto Sans TC` — the primary face across headings, nav, and feature text. The modern, legible pan-CJK sans-serif.
- **System Fallback**: `PingFang TC` (macOS/iOS), `微軟正黑體` / `Microsoft JhengHei` (Windows), then `Arial, sans-serif`.

### Hierarchy

| Role | Font | Size | Weight | Notes |
|------|------|------|--------|-------|
| Hero brand word | Noto Sans TC | ~234px | 700 | "BEEP!" oversized identity mark |
| H5 section headline | Noto Sans TC | 58px | 700 | Main section title (e.g., "悠遊付") |
| H4 hero tagline | Noto Sans TC | 43px | 700 | "智慧升級，放心悠遊！" |
| Section feature title | Noto Sans TC | 38px | 700 | Step-level feature titles, `#595153` |
| H6 sub-headline | Noto Sans TC | 25px | 500 | Below section H5 |
| Highlight text | Noto Sans TC | 20px | 500 | In brand-blue block, ls 0.17em |
| Nav link | Noto Sans TC | 13.5px | 400 | ls 0.03em, white on dark overlay |
| Body copy | Noto Sans TC | 16px | 400 | Standard prose |
| Download CTA | Noto Sans TC | 16px | 700 | ls 0.1em, in black button |
| Footer / caption | Noto Sans TC | ~11px | 300 | ls 0.17em, white on dark footer |

### Principles
- **Expressive display, functional body**: The huge "BEEP!" hero text establishes brand personality; Noto Sans TC at 16px / 400 handles informational content.
- **Letter-spacing for CJK legibility**: Consistent 0.03–0.17em tracking on Chinese body/feature text; tighter for very large display.
- **Weight 700 for headlines, 500 for sub-copy, 400 for body**: a clean three-step weight ladder.

## 4. Component Stylings

### Buttons

**App Download CTA**
- Background: `#000000`
- Text: `#ffffff`
- Font: 16px Noto Sans TC weight 700
- Padding: 20px 32px
- Use: "立即下載 / DOWNLOAD NOW" — primary app entry point

**Primary Blue Button**
- Background: `#007bc6`
- Text: `#ffffff`
- Radius: 4px
- Font: 15px Noto Sans TC weight 400
- Padding: 8px 25px
- Hover: Background `#006ba8`
- Use: Primary action on EasyCard corporate site

**Outline Blue Button**
- Text: `#007bc6`
- Border: 1px solid `#007bc6`
- Radius: 4px
- Font: 15px Noto Sans TC weight 400
- Padding: 8px 25px
- Hover: Background `#007bc6`, Text `#ffffff`
- Use: Secondary action, lower emphasis

**Yellow Accent Button**
- Background: `#f6ac19`
- Text: `#ffffff`
- Radius: 4px
- Font: 15px Noto Sans TC weight 400
- Hover: Background `#f59205`
- Use: Accent CTA in promotional contexts

**Magenta Accent Button**
- Background: `#e4007f`
- Text: `#ffffff`
- Radius: 4px
- Font: 15px Noto Sans TC weight 400
- Hover: Background `#d5007d`
- Use: High-emphasis accent in promotional campaigns

### Cards & Containers

**Highlight Text Block**
- Background: `#007bc6`
- Text: `#ffffff`
- Font: 20px Noto Sans TC weight 500
- Padding: 8px 12px
- Use: Inline brand-blue text-highlight box wrapping key product-promise sentences

**Surface Card**
- Background: `#efefef`
- Text: `#333333`
- Radius: 8px
- Use: Content section on grey-background scene

**Elevated White Card**
- Background: `#ffffff`
- Text: `#333333`
- Radius: 8px
- Shadow: `rgba(0, 0, 0, 0.15) 0px 10px 20px 0px`
- Use: Floating feature content card on white/grey page

### Badges

**Feature Circle (active)**
- Background: `#e4007f`
- Text: `#ffffff`
- Radius: 9999px
- Use: Active state for the round 四大優勢 (4 advantages) feature selector circles

**Success Badge**
- Background: `#40a731`
- Text: `#ffffff`
- Radius: 4px
- Font: 12px Noto Sans TC weight 400
- Use: Step numbering, success states, step-1 indicator

### Inputs

**Default Text Input**
- Background: `#ffffff`
- Border: 1px solid `#bfbfbf`
- Radius: 4px
- Font: 16px Noto Sans TC weight 400
- Placeholder: `#413b3b`
- Use: Standard form input field

### Tabs / Navigation

**Nav Menu Item**
- Text: `#ffffff` (on dark nav overlay)
- Font: 13.5px Noto Sans TC weight 400
- Letter-spacing: 0.03em
- Use: Primary navigation links (四大優勢, 悠遊付影片, 合作銀行, 安全認證)
- Active: 2px bottom border `#f7b146` on hover

---

**Verified:** 2026-06-22 (omd:add-reference CREATE — Tier 1 live inspect)
**Tier 1 sources:** https://easywallet.easycard.com.tw, https://www.easycard.com.tw/
**Tier 2 sources:** getdesign.md/easywallet (not found) | refero easywallet (not found)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px
- Feature sections use full-viewport height (100vh) scenes with scrolljack navigation

### Grid & Container
- Full-viewport scene-based layout: each feature gets its own 100vh scrolljack "scene" (s-1 through s-6)
- Nav bar is fixed at top, white background, 58px height, with `#f7b146` 2px bottom border
- Content is centered within scenes; text blocks are left-aligned within centered containers
- Dot-based vertical scene navigation on the right side for desktop

### Whitespace Philosophy
- **Breath at scale**: full-viewport scenes create extreme whitespace, each feature gets an entire screen
- **Animation-first**: transitions (0.5s) between scenes deliver perceived luxury — the scroll experience IS the design
- **Blue block as punctuation**: the `#007bc6` text-highlight blocks create visual "bolding" of key sentences in an otherwise minimal layout

### Border Radius Scale
- Sharp/none (0px): legacy EasyCard nav links
- Small (4px): buttons, inputs, feature badges
- Medium (8px): cards and content containers
- Full (9999px): circle feature selectors

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Most surface areas, nav links |
| Card (Level 1) | `rgba(0,0,0,0.15) 0px 10px 20px 0px` | Elevated white content cards |
| Nav (Level 2) | `rgba(0,0,0,0.2) 0px 2px 4px 0px` | Fixed nav bar lift |

**Shadow philosophy**: EasyWallet is predominantly flat. Depth communicates only on elevated cards and the fixed nav bar. The scene-based layout creates visual separation through full-screen background-color shifts between `#ffffff` and `#efefef` rather than through elevation.

## 7. Do's and Don'ts

### Do
- Use `#007bc6` blue for inline text-highlight blocks on white pages — it's the brand's emphasis device
- Lead display moments with bold weight-700 Noto Sans TC at large sizes
- Use `#e4007f` magenta for interactive circle selectors and key decorative accents
- Use `#f6ac19` / `#f7b146` yellow for nav accents, step lines, and progress indicators
- Maintain full-viewport scene structure for each product feature on marketing surfaces
- Reserve `#66ecd2` teal for loading states and brand-heritage touchpoints connecting EasyWallet to EasyCard transit
- Apply 0.03–0.17em letter-spacing to CJK body text for legibility

### Don't
- Use pure black (`#000000`) as a body text color — EasyCard system uses `#333333` for prose
- Mix the magenta and yellow accents on the same element — they're distinct semantic roles
- Use round corners on buttons beyond 4–8px — EasyWallet avoids pill buttons in its UI components
- Replace Noto Sans TC with a serif face — the entire brand is sans-serif first
- Add heavy drop-shadows across most elements — elevation is reserved for floating cards only
- Use teal (`#66ecd2`) as a CTA or interactive color — it's an ambient brand-heritage tint

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | Stack scenes to natural scroll, reduce oversized type proportionally |
| Tablet | 768–1200px | Adjusted circle sizes (vw-based), navigation collapses |
| Desktop | >1200px | Full scrolljack experience, 1440px design width |

### Touch Targets
- App download button at ~75px height with generous horizontal padding — primary mobile entry
- Circle feature tabs at 17vw diameter on tablet, maintaining large touch area
- Navigation links at minimum 51px height with 15–16px padding on corporate site

### Collapsing Strategy
- Hero "BEEP!" text scales down proportionally (vh-based sizing)
- Scrolljack transitions degrade to natural scroll on mobile
- Nav bar collapses dropdown menu to mobile overlay pattern

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary / CTA: EasyWallet Blue (`#007bc6`)
- Brand heritage teal: `#66ecd2`
- Accent magenta: `#e4007f`
- Accent yellow: `#f6ac19`
- Nav accent yellow: `#f7b146`
- Success / step green: `#40a731`
- Page background: Canvas (`#ffffff`)
- Section surface: `#efefef`
- Body text: `#333333`
- Feature copy: `#595153`
- White on brand colors: `#ffffff`

### Example Component Prompts
- "Hero section for EasyWallet: oversized 'BEEP!' in weight-700 Noto Sans TC on white. Below, 43px weight-700 headline in black. Key product sentences inside blue (#007bc6) text-highlight boxes with white text at 20px/500."
- "Feature tab selector: five equal circles, inactive white with #e4007f border, active = solid #e4007f fill, white label text at 500 weight, mild drop-shadow on active."
- "EasyWallet nav bar: white, 58px, fixed top, bottom border 2px #f7b146, white text nav links at 13.5px/400 Noto Sans TC on dark overlay. App logo left."
- "App download CTA block: black background, two column (iOS / Google Play), white text 700 weight at 16px, center-aligned, letter-spacing 0.1em, vertical separator line."

### Iteration Guide
1. EasyWallet Blue (`#007bc6`) = primary brand + highlight emphasis — keep it focused
2. Magenta (`#e4007f`) = feature selectors + animation accents — not for text
3. Yellow (`#f6ac19`) = step lines, nav borders, progress — always secondary
4. Teal (`#66ecd2`) = brand heritage only (loading, ambient) — never CTA
5. Noto Sans TC is the voice — weight 700 for headlines, 400 for body
6. Scenes are full-viewport: let each feature breathe at 100vh
7. Blue inline highlight blocks = the copywriting emphasis tool

---

## 10. Voice & Tone

EasyWallet's (悠遊付) voice is **playful, reassuring, and progress-oriented** — the digital companion to Taiwan's best-known transit card. The hero's opening word "BEEP!" (with an exclamation mark, in massive type) distills the brand personality into a single onomatopoeic moment: this is the sound of a seamless payment, made joyful. From there the copy turns calm and benefit-focused: "智慧升級，放心悠遊！" (Smart upgrade, worry-free travel) frames the product as a natural evolution of something already trusted.

| Context | Tone |
|---|---|
| Hero moments | Energetic, playful. "BEEP!" — one word does the work. |
| Product taglines | Warm and reassuring. "放心悠遊" (worry-free travel) is the brand mantra. |
| Feature names | Clean, action-oriented Chinese. "嗶乘車", "掃碼付款", "自動加值". |
| CTAs | Direct and inclusive. "立即下載" (Download now), "DOWNLOAD NOW". |
| Legal / footer | Matter-of-fact. Low-key copyright and policy language. |

**Voice samples (verbatim from live site):**
- "一卡一付 無現生活更進一步！" — page title (app + card convergence). *(verified live 2026-06-22)*
- "智慧升級，放心悠遊！" — hero H4 tagline. *(verified live 2026-06-22)*
- "悠遊付=最聰明的電子錢包" — feature section (product positioning). *(verified live 2026-06-22)*

**Forbidden register**: banking jargon, fear-based urgency, overly formal institutional language, foreign-word-heavy copy that loses the approachable Taiwanese sensibility.

## 11. Brand Narrative

EasyCard Corporation (悠遊卡股份有限公司) launched the EasyCard in 2002 as Taipei's contactless transit card — the ubiquitous cyan card that became embedded in Taiwanese daily life for MRT, buses, YouBike, and convenience-store payments. EasyWallet (悠遊付) is its mobile evolution: a digital wallet that preserves the EasyCard's physical-card management while adding full smartphone-native payment capabilities.

The product story is one of continuity and upgrade — "從實體到數位" (from physical to digital) — not disruption. EasyWallet pitches itself as EasyCard's "最佳拍檔" (best companion), deliberately building on 20+ years of transit-card trust rather than replacing it. The tagline "無現生活 悠遊無限" (Cashless living, unlimited ease) frames mobile payment not as a bank product but as a lifestyle upgrade rooted in everyday mobility.

The "BEEP!" brand device is more than playfulness: it's the sound recognition that bridges a generation of NFC transit payments with the new app-driven contactless future. By putting that sound at the center of the visual identity, EasyWallet inherits the physical card's emotional familiarity and translates it to the smartphone era.

## 12. Principles

1. **Heritage as foundation.** EasyWallet builds on 20+ years of EasyCard trust, not away from it. *UI implication:* retain the EasyCard teal (`#66ecd2`) as a brand-heritage touchpoint; never fully abandon the card-management metaphor.
2. **Upgrade without intimidation.** "Smart" is framed as ease, not complexity. *UI implication:* feature names are plain Chinese verbs ("嗶乘車", "掃碼付款"); no fintech acronyms unexplained.
3. **One card, one app.** Integration is the core promise — physical card + digital wallet unified. *UI implication:* card management is primary nav, not a sub-feature.
4. **Playful at entry, calm inside.** The "BEEP!" hero tone gives way to functional clarity once the user is in the app flow. *UI implication:* marketing surfaces can be expressive; transactional surfaces should be minimal and clear.
5. **Mobility first.** EasyWallet is a transit-adjacent product; the tap-to-pay moment is the signature interaction. *UI implication:* the 嗶乘車 (tap-to-ride) feature is always prominent; app performance at the MRT gate is paramount.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable EasyWallet user segments (Taipei transit commuters, young digital-native Taiwanese), not individual people.*

**陳小玲, 26, 台北。** A daily MRT commuter who already uses EasyCard but wants to stop carrying a physical card. Adopted EasyWallet for "嗶乘車" (tap-to-ride). Appreciates that the app feels familiar — it looks like EasyCard, just on her phone.

**林俊宏, 34, 新北市。** Uses EasyWallet primarily for the automatic card top-up feature and QR code payments at convenience stores. Values the consolidated transaction history that helps him track spending without opening a separate banking app.

**張惠美, 45, 台中。** Slower adopter who was drawn in by the e-invoice lottery matching feature. Trust in EasyCard brand made her comfortable installing EasyWallet. Uses it mainly for bill payments and checking her EasyCard balance.

## 14. States

| State | Treatment |
|---|---|
| **Loading / Launch** | Full-viewport teal (`#66ecd2`) overlay — brand-heritage color signals the app is initializing |
| **Empty (no transaction history)** | White canvas, `#595153` secondary text explaining no records, blue link to make first payment |
| **Loading (data fetch)** | Minimal spinner or skeleton row in `#efefef` grey at card height; no heavy shimmer |
| **Error (payment failed)** | Inline message in `#595153` with plain-language Chinese explanation; retry CTA in blue `#007bc6` |
| **Error (network / beep failed)** | Immediate inline feedback — "感應失敗，請再試一次" — tap-to-retry within 0.5s |
| **Success (payment confirmed)** | Brief green (`#40a731`) confirmation check; amount and merchant confirmed; auto-dismisses |
| **Skeleton (loading cards)** | `#efefef` placeholder blocks at card dimensions; gentle opacity pulse |
| **Disabled** | Reduced opacity on buttons; blue `#007bc6` becomes `#b3d8ee`; always provides clear reason |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-beep` | 100ms | Tap-to-pay NFC feedback — near-instant, mimics physical card beep |
| `motion-fast` | 150ms | Button press feedback, badge state change |
| `motion-standard` | 500ms | Scene-to-scene scrolljack transition |
| `motion-slow` | 750ms | Feature circle animation, page-level reveals |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.39, 0.575, 0.565, 1)` | Arriving elements (EasyCard CSS native easing) |
| `ease-exit` | `cubic-bezier(0.39, 0.575, 0.565, 1)` | Departing elements (same easing on leave) |
| `ease-standard` | `0.5s ease` (CSS default) | Scene scrolljack transitions |

**Motion rules**: EasyWallet motion is split between two registers — the near-instant NFC payment feedback (100ms, should feel like a physical tap), and the graceful full-viewport scene animations on the marketing site (500–750ms). The loading screen teal overlay fades in and out with a slow opacity transition, establishing calm. Under `prefers-reduced-motion: reduce`, scene transitions collapse to instant; NFC tap feedback uses a brief static color flash rather than animation.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-22) via playwright getComputedStyle on:
- https://easywallet.easycard.com.tw/ — full CSS extraction, heading text, color frequency
- https://www.easycard.com.tw/ — corporate site CSS color system, btn classes, font family

Key observations:
- body font: "Noto Sans TC", "PingFang TC", 微軟正黑體, Semibold, "Microsoft JhengHei", Arial, sans-serif
- nav bar: white bg, 58px height, 2px bottom border rgb(247, 177, 70) #f7b146
- loading overlay: rgb(102, 236, 210) #66ecd2 — EasyCard transit teal
- hero brand blue highlight blocks: rgb(0, 123, 198) #007bc6
- magenta circle accent: rgb(228, 0, 127) #e4007f
- yellow step line: rgb(246, 172, 25) #f6ac19
- text on feature scenes: rgb(89, 81, 83) #595153
- success step: rgb(64, 167, 49) #40a731
- app-download button: rgb(0, 0, 0) #000000

Voice samples (§10) from verified live homepage easywallet.easycard.com.tw 2026-06-22.

Brand narrative (§11): EasyCard Corporation history as Taiwan's national transit card operator is publicly documented fact.

Personas (§13): fictional archetypes. Names are illustrative; do not refer to real people.

Interpretive claims are editorial connections between observed design choices and EasyWallet/EasyCard public positioning.
-->
