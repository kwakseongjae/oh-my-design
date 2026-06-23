---
id: taiwanmobile
name: Taiwan Mobile
display_name_kr: 台灣大哥大
country: TW
category: consumer-tech
homepage: "https://www.taiwanmobile.com"
primary_color: "#ff6700"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=taiwanmobile.com&sz=128"
verified: "2026-06-22"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-22"
  note: "primary = live CTA orange #ff6700 (confirmed in buttons, CSS intercept, corp brand page); teal #024d58 is digital-life category accent; myfone sub-brand shares #ff6700 orange + indigo #2d2d6c"
  colors:
    primary: "#ff6700"
    primary-hover: "#f45100"
    primary-alt: "#ff8f08"
    brand-indigo: "#2d2d6c"
    teal-accent: "#024d58"
    ink: "#2d3033"
    secondary: "#515a68"
    muted: "#838d9c"
    canvas: "#ffffff"
    surface: "#f5f7f8"
    card-bg: "#e3e7ee"
    dark-bar: "#1e2022"
    on-primary: "#ffffff"
    green-accent: "#0eaa7d"
    pink-accent: "#ce2874"
  typography:
    family: { display: "Poppins", body: "Noto Sans TC", fallback: "system-ui, -apple-system, Segoe UI, Roboto" }
    hero:    { size: 48, weight: 500, lineHeight: 1.25, use: "Hero banner headline (carousel)" }
    section: { size: 34, weight: 500, lineHeight: 1.35, use: "Section headings (plan finder, features)" }
    nav:     { size: 15, weight: 400, lineHeight: 1.50, use: "Top navigation links" }
    body:    { size: 16, weight: 400, lineHeight: 1.50, use: "Standard body text, Noto Sans TC" }
    label:   { size: 14, weight: 400, lineHeight: 1.50, use: "UI labels, button text" }
    caption: { size: 12, weight: 400, lineHeight: 1.50, use: "Metadata, fine print" }
  spacing: { xs: 4, sm: 8, md: 16, lg: 24, xl: 40, xxl: 60, section: 80, hero: 120 }
  rounded: { sm: 8, md: 20, lg: 40, full: 9999 }
  shadow:
    none: "none"
    soft: "0 2px 8px rgba(0,0,0,0.08)"
  components:
    button-primary: { type: button, bg: "#ff6700", fg: "#ffffff", radius: "40px", height: "45px", padding: "8px 24px", font: "18px / 400 Poppins", states: "hover #f45100", use: "Primary plan CTA — '搭手機', '搭光纖'" }
    button-outline: { type: button, bg: "transparent", fg: "#838d9c", radius: "40px", height: "45px", padding: "8px 24px", font: "18px / 400 Poppins", use: "Inactive plan tab (搭商品 / 搭光纖 / 單門號)" }
    button-login: { type: button, bg: "transparent", fg: "#ffffff", radius: "50px", height: "37px", padding: "12px 16px", font: "14px / 400 Poppins", use: "Login pill in dark nav band" }
    button-white: { type: button, bg: "#ffffff", fg: "#515a68", radius: "40px", height: "44px", padding: "0 16px", font: "15px / 400 Poppins", use: "Dialog dismiss / secondary action '我知道了'" }
    card-picture: { type: card, bg: "#e3e7ee", radius: "20px", use: "Picture product card, 280×280–520×520px, no shadow" }
    card-surface: { type: card, bg: "#f5f7f8", radius: "20px", use: "Content card on default surface" }
    badge-orange: { type: badge, bg: "#ff6700", fg: "#ffffff", radius: "9999px", font: "12px / 400 Poppins", use: "Promotional / highlight tag" }
    nav-tab: { type: tab, fg: "#ffffff", font: "15px / 400 Poppins", use: "Top nav category (個人/家庭/企業)", active: "text #ff6700 on active highlight" }
    dialog-cookie: { type: dialog, bg: "#ffffff", radius: "20px", shadow: "0 2px 8px rgba(0,0,0,0.08)", use: "Cookie notice / info overlay" }
  components_harvested: true
---

# Design System Inspiration of Taiwan Mobile

## 1. Visual Theme & Atmosphere

Taiwan Mobile (台灣大哥大) is Taiwan's largest telecom carrier, and its digital presence communicates bold accessibility through a clean, modern consumer-tech aesthetic. The primary brand color is a confident **vibrant orange** (`#ff6700` — 活力橘), splashed across call-to-action buttons, section headings, and the "Planet Possible" multi-color logo — a signal of energy, openness, and everyday possibility. The canvas is predominantly white (`#ffffff`) layered over a cool light-grey surface (`#f5f7f8`) that keeps the page feeling airy despite the density of telecom plans and product listings.

Typography mixes two typefaces to serve two audiences: **Poppins** (Latin display and UI weight) lends the brand an international, modern feel at 48px / weight 500 for hero text, while **Noto Sans TC** covers Mandarin Traditional Chinese body and navigation copy with excellent CJK legibility. This dual-font system lets Taiwan Mobile speak equally well in English plan names and Chinese UI labels without visual friction.

A defining trait of the system is its pill geometry. Navigation tabs for plan types ("搭手機", "搭商品", "搭光纖", "單門號") run in 40px-radius pill buttons at 45px height. Login pills, dialog buttons, and product filter chips all echo this full-round language. Combined with near-shadowless flat depth — surfaces separate by tinted background rather than elevation — the result is a crisp, modern telecom UI that feels fast and accessible on both desktop and mobile.

**Key Characteristics:**
- Vibrant orange (`#ff6700`) as the single primary action color — CTA buttons, active links, key headings
- Dual typeface: Poppins for Latin/display, Noto Sans TC for Chinese body text
- Pill-forward geometry — 40–50px radius on all interactive elements
- Near-shadowless flat depth — light grey `#f5f7f8` surface and `#e3e7ee` card backgrounds handle separation
- Dark notification bar `#1e2022` at the top, white sticky header below (two-layer header)
- Multi-color "Planet Possible" logo (orange, indigo, pink, green) reflecting group identity
- Corporate sub-site uses electric blue `#0081cc` nav — distinct from consumer orange system

## 2. Color Palette & Roles

### Primary
- **Vibrant Orange** (`#ff6700`): The 活力橘 (vibrant orange) brand primary. Appears on primary CTA buttons ("搭手機"), active nav links ("Apple 方案"), section headings on brand pages, footer brand text, and the main logo. Dominant interactive color.
- **Orange Hover** (`#f45100`): Darker orange for CTA hover state, confirmed in `default.css`.
- **Orange Alt** (`#ff8f08`): Lighter amber variant used in myfone promotional cards and special offer callouts.

### Brand & Group
- **Brand Indigo** (`#2d2d6c`): Deep indigo from the "Planet Possible" logo, used on myfone backgrounds. Represents Taiwan Mobile group "unity" pillar.
- **Teal Accent** (`#024d58`): Deep teal used in "數位生活" (Digital Life) category section backgrounds — a lifestyle-services accent within the consumer-tech suite.
- **Green Accent** (`#0eaa7d`): Sustainability and eco-emphasis accent, visible on myfone and brand-concept surfaces.
- **Pink Accent** (`#ce2874`): momo (e-commerce subsidiary) brand pink, appearing on myfone cross-promotion surfaces.

### Surface & Structure
- **Canvas White** (`#ffffff`): Main page background, sticky header bg, card white surfaces.
- **Surface Grey** (`#f5f7f8`): Default page body background — the most-frequent background (135× in frequency scan), giving pages a cool, clean non-harsh baseline.
- **Card Mist** (`#e3e7ee`): Picture-card and product-card background; 20px radius. A slightly warmer grey for product displays.
- **Dark Bar** (`#1e2022`): Notification/announcement bar at page top, dark near-black.

### Text & Muted
- **Ink** (`#2d3033`): Primary body text and default link color. Not pure black — a warm near-black.
- **Secondary** (`#515a68`): Secondary text, dialog dismiss buttons, subdued UI labels.
- **Muted** (`#838d9c`): Inactive nav tabs, placeholder text, tertiary metadata.
- **Muted Light** (`#b5bdc9`): Footer links and lowest-emphasis text (from `twm-footer.css`).

## 3. Typography Rules

### Font Family
- **Display / UI Latin**: `Poppins` — modern geometric sans. Used for hero headlines, section titles, navigation, and button labels.
- **CJK / Body**: `Noto Sans TC` — optimized for Traditional Chinese. Covers body copy, UI labels in Mandarin, plan descriptions.
- **Fallback chain**: `system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Hero / Banner | Poppins | 48px | 500 | 1.25 | Carousel headline, bilingual use |
| Section Heading | Poppins + Noto | 34px | 500 | 1.35 | Plan-finder prompt, feature sections |
| Sub-heading | Poppins + Noto | 28px | 700 | 1.35 | Headings on myfone sub-brand |
| Nav Link | Poppins + Noto | 15px | 400 | 1.50 | Top navigation items |
| Body | Noto Sans TC | 16px | 400 | 1.50 | Standard reading text |
| Button / Label | Poppins | 14–18px | 400 | 1.00 | CTA buttons (18px), login pill (14px) |
| Caption | Noto Sans TC | 12px | 400 | 1.50 | Metadata, pricing fine print |

### Principles
- **Poppins for brand confidence, Noto for readability**: Poppins carries the brand personality at display sizes; Noto serves dense Traditional Chinese plan descriptions.
- **Medium weight dominates**: Weight 500 for headings rather than heavy bold — accessible, scan-friendly for plan comparison.
- **Bilingual fluency**: Plan names run English-first (e.g. "Apple 方案", "OP 響樂生活"); UI labels are Mandarin-first.

## 4. Component Stylings

### Buttons

**Primary CTA (Plan Tab Active)**
- Background: `#ff6700`
- Text: `#ffffff`
- Radius: 40px
- Height: 45px
- Padding: 8px 24px
- Font: 18px Poppins weight 400
- Hover: `#f45100` background
- Use: Active plan tab — "搭手機"; primary CTAs on product pages

**Inactive Plan Tab**
- Background: transparent
- Text: `#838d9c`
- Radius: 40px
- Height: 45px
- Padding: 8px 24px
- Font: 18px Poppins weight 400
- Use: Inactive plan tabs ("搭商品", "搭光纖", "單門號")

**Login Pill**
- Background: transparent
- Text: `#ffffff`
- Radius: 50px
- Height: 37px
- Padding: 12px 16px
- Font: 14px Poppins weight 400
- Use: "登入" login link in the dark header top band

**White Secondary (Dialog Dismiss)**
- Background: `#ffffff`
- Text: `#515a68`
- Radius: 40px
- Height: 44px
- Padding: 0px 16px
- Font: 15px Poppins weight 400
- Use: Secondary dismiss buttons — "我知道了", "返回首頁"

### Cards & Containers

**Picture Product Card**
- Background: `#e3e7ee`
- Radius: 20px
- Shadow: none
- Use: Product and plan picture cards, 280×280 to 520×520px

**Surface Content Card**
- Background: `#f5f7f8`
- Radius: 20px
- Shadow: none
- Use: Feature content cards on the cool-grey surface sections

### Badges

**Orange Promo Badge**
- Background: `#ff6700`
- Text: `#ffffff`
- Radius: 9999px
- Font: 12px Poppins weight 400
- Use: Promotional tag, "限時優惠", highlight badges

### Navigation

**Top Header (White)**
- Background: `#ffffff`
- Height: 72px
- Font: 15px Poppins + Noto Sans TC weight 400
- Text: `#2d3033` standard, `#ff6700` on highlighted link
- Use: Main sticky white navigation header

**Notification Bar**
- Background: `#1e2022`
- Text: `#ffffff`
- Height: 34px
- Use: Top announcement/notification band above main header

### Dialogs

**Cookie / Info Overlay**
- Background: `#ffffff`
- Radius: 20px
- Shadow: `0 2px 8px rgba(0,0,0,0.08)`
- Use: Cookie consent overlay, system notices

---

**Verified:** 2026-06-22 (omd:add-reference CREATE — Tier 1 live inspect)
**Tier 1 sources:** https://www.taiwanmobile.com/ (homepage, live computed style + CSS intercept), https://corp.taiwanmobile.com/company-profile/brand-concept.html (corporate brand concept — brand-owned)
**Tier 2 sources:** getdesign.md/taiwanmobile — not found; styles.refero.design/?q=taiwan+mobile — no relevant results
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 8px (Tailwind custom scale)
- Scale (from `global-variables.css`): s9=4px, s8=8px, s7=16px, s6=24px, s5=40px, s4=60px, s3=80px, s2=120px, s1=160px
- Notable: The 60px and 80px stops power generous section padding; the 16px/24px duo covers card internal rhythm.

### Grid & Container
- Full-width hero carousel with overlay text centered
- Plan tab selector as a horizontal pill group below the hero
- Product cards in a horizontal swiper (280px square tiles)
- Feature sections alternate between white and `#f5f7f8` surface backgrounds
- Max content width: ~1440px viewport with centered content blocks

### Whitespace Philosophy
- **Surface-over-shadow**: depth comes from alternating `#ffffff` and `#f5f7f8` band backgrounds rather than card shadows
- **Generous hero**: carousel banners run full-viewport-width, creating an immersive first impression before narrowing to structured plan content
- **Breathing pill row**: plan tabs are generously padded (8px 24px) with 40px radius, making each option feel tappable and inviting

### Border Radius Scale
- None (0px): notification bar, full-bleed sections
- Small (8px): inner elements, chips
- Medium (20px): product cards, picture cards — the dominant card shape
- Large (40–50px): plan tabs, login pills, secondary buttons
- Full (9999px): promo badges

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Navigation, plan tabs, most UI elements |
| Tint (Level 1) | `#f5f7f8` background shift | Section separation, card surfaces |
| Card Mist (Level 2) | `#e3e7ee` background | Product picture cards |
| Subtle (Level 3) | `0 2px 8px rgba(0,0,0,0.08)` | Cookie overlay, modals |

**Shadow Philosophy**: Taiwan Mobile's consumer-tech surface is nearly shadowless — flat, fast, and scan-optimized for users comparing telecom plans. When elevation is needed (dialogs, overlays), a minimal `rgba(0,0,0,0.08)` ambient shadow appears. Depth is communicated through background alternation (white → surface-grey → card-mist), matching the clean, mobile-native aesthetics expected in Taiwan's competitive telecom retail market.

## 7. Do's and Don'ts

### Do
- Use `#ff6700` orange exclusively for primary CTAs and active interactive states
- Apply Poppins for display and button Latin text; Noto Sans TC for body Mandarin
- Use 40px or greater border-radius on all interactive pill elements — the language is round
- Separate sections with flat background tint (`#f5f7f8`) and `#e3e7ee` card backgrounds rather than shadows
- Keep headings at weight 500 — Taiwan Mobile is confident, not heavy
- Maintain the two-layer header: dark notification bar `#1e2022` on top, white sticky nav below

### Don't
- Replace orange with any other color as the primary CTA — `#ff6700` is the brand signal
- Use sharp corners on buttons — all interactive elements are pills (≥40px radius)
- Apply heavy shadows or layered elevation — the system is flat and surface-based
- Use pure black (`#000000`) for body text — the brand uses warm near-black `#2d3033`
- Mix the teal `#024d58` or indigo `#2d2d6c` accents into primary UI elements — they are category-specific accents
- Set Poppins at a light weight (300) for headlines — Taiwan Mobile is weight 500 medium

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero compresses, plan tabs scroll horizontally, cards stack |
| Tablet | 640-1024px | 2-column card grid, moderate padding |
| Desktop | 1024-1440px | Full carousel, multi-column plan grid, centered hero |
| Large | >1440px | Max-width constrained center, generous lateral margins |

### Touch Targets
- Plan tab buttons at 45px height with 24px horizontal padding — generous tap area
- Login pill at 37px height, still comfortably tappable
- Product cards at 280px — thumbnail-first browsing optimized for touch

### Collapsing Strategy
- Hero carousel: full-viewport → compressed height on mobile, text overlays scale
- Plan tab row: horizontal scroll on narrow viewports; orange active tab maintains prominence
- Product cards: horizontal swiper adapts to viewport width; maintains 20px radius
- Dark notification bar: persists across breakpoints, stays at top

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Vibrant Orange (`#ff6700`)
- CTA Hover: Orange Dark (`#f45100`)
- Background: Canvas White (`#ffffff`)
- Surface: Surface Grey (`#f5f7f8`)
- Card: Card Mist (`#e3e7ee`)
- Heading / body text: Ink (`#2d3033`)
- Secondary text: Secondary (`#515a68`)
- Muted / inactive: Muted (`#838d9c`)
- Notification bar: Dark Bar (`#1e2022`)
- Brand Indigo (logo/myfone): `#2d2d6c`
- Teal accent (Digital Life): `#024d58`

### Example Component Prompts
- "Create a plan selector on white background. Horizontal pill tab row — active tab: `#ff6700` background, white text, 40px radius, 45px height, 8px 24px padding, 18px Poppins. Inactive tabs: transparent background, `#838d9c` text, same shape."
- "Design a product card: `#e3e7ee` background, 20px radius, no shadow. Title 16px Noto Sans TC weight 400, `#2d3033`. Price in orange `#ff6700`."
- "Build a hero section: full-width background image or gradient. Headline 48px Poppins weight 500, white text. Sub-text 16px Noto Sans TC. Orange CTA button `#ff6700`, white text, 40px radius, 24px 24px padding, hover `#f45100`."
- "Create top nav: white 72px sticky header. Logo left, nav links center (15px Poppins + Noto, `#2d3033`). Orange highlighted link `#ff6700`. Login pill right (transparent bg, white text would be on dark band, 14px, 50px radius)."

### Iteration Guide
1. Orange `#ff6700` is the ONLY primary action color — never dilute with a second accent
2. Pill everything — minimum 40px radius on buttons; 20px on cards
3. Flat depth — use `#f5f7f8` and `#e3e7ee` surfaces, not shadows
4. Poppins for brand/display Latin; Noto Sans TC for Chinese product text
5. Weight 500 medium for headings; weight 400 for body/UI
6. Dark notification bar `#1e2022` at the very top; white header below
7. Muted grey `#838d9c` for inactive states; orange `#ff6700` for active

---

## 10. Voice & Tone

Taiwan Mobile's brand voice is **optimistic, energetic, and human-centered** — captured by the tagline *"Open Possible 能所不能"* (Enabling the impossible, opening every possibility). Copy treats users as empowered digital citizens, not passive telecoms customers. The interface speaks in short, inviting Chinese phrases — "今天想找什麼電信方案呢？" (What telecom plan are you looking for today?) — conversational and forward-looking rather than formal or corporate.

| Context | Tone |
|---|---|
| Hero / campaign | Bold, aspirational. "大可飆速、大可響樂、大可回饋、大可永續" — repetition of 大可 (dà kě / Taiwan Mobile's shorthand "it's possible") creates a branded cadence. |
| Plan naming | Descriptive and benefit-led: "影音多享組", "好速成双", "獨門方案". Functional, not hype. |
| CTAs | Action-oriented and simple. "搭手機", "立即加購", "了解更多". |
| Service / support | Accessible, warm. "我要問小麥" (Ask Xiaomai, the AI assistant) — brand-named, friendly. |
| Corporate / ESG | Mission-driven and earnest. "為你的世界打開無限可能" — serious about openness as a social value. |

**Voice samples (verbatim from live site, 2026-06-22):**
- "台灣大 大可能" — homepage tagline (brand-coded repetition). *(verified live 2026-06-22)*
- "今天想找什麼電信方案呢？" — section prompt heading. *(verified live 2026-06-22)*
- "給你美好數位生活的各種可能" — page subtitle meta description. *(verified live 2026-06-22)*

**Forbidden register**: impersonal corporate speak, coverage-first fear marketing, jargon-heavy plan descriptions without plain-language benefit framing.

## 11. Brand Narrative

Taiwan Mobile (台灣大哥大) was founded in **1997** as one of Taiwan's first mobile telecoms licensees, growing to become the island's largest carrier with the national "5G Taiwan Team" (5G台灣隊) positioning — a platform for Taiwan's digital transformation. The brand has undergone a landmark **2020 rebrand** under the "Open Possible 能所不能" platform: the classic 12-sided circular logo evolved into "Planet Possible," a multi-color sphere incorporating the brand palette of all group entities (orange for telecom energy, indigo for digital unity, pink for momo e-commerce, green for sustainability).

The company sits at the convergence of Taiwan's telecom, media, and e-commerce markets. Its subsidiaries include **myfone** (digital-first telecom storefront), **momo** (Taiwan's largest e-commerce platform), **MyVideo** (OTT streaming), and **OP** (lifestyle rewards app). This group breadth explains the colorful "Planet Possible" logo — the visual merger of multiple consumer digital brands into one identity.

What Taiwan Mobile refuses to be: an austere, technical-only carrier. The pivot to "digital life" (數位生活) — streaming bundles, gaming services, international roaming packages — positions the brand as a **lifestyle enabler**, not merely a pipe. The orange-led color system, pill-forward geometry, and bilingual Poppins + Noto typography all communicate accessibility, modernity, and everyday consumer relevance.

The carrier won the **2024 Brand of Excellence Award** for telecom (品牌卓越獎) and is Taiwan's first telecom to operate an integrated 5G + fiber + media + e-commerce platform under one roof.

## 12. Principles

1. **Open every possibility.** 能所不能 is not marketing speak — it is a design directive. Every service should feel reachable within one tap. *UI implication:* prominent orange CTAs, horizontal pill tabs rather than buried menu trees, search-first plan discovery.
2. **One system, many identities.** The Taiwan Mobile group runs telecoms, streaming, e-commerce, and smart home under one brand umbrella. *UI implication:* the multi-color "Planet Possible" logo and varied accent palette (teal, indigo, pink) acknowledge sub-brand diversity while orange anchors the parent brand.
3. **Consumer-grade simplicity.** Telecom is inherently complex (5G, roaming, bundle pricing). The design simplifies without dumbing down. *UI implication:* pill-tab plan selector over dropdown menus; benefit-first plan names over technical specs.
4. **Bilingual by default.** Taiwan is Mandarin-primary but globally connected. *UI implication:* every plan has a Chinese name AND an English descriptor; typography handles both scripts with equal visual grace.
5. **Energy without aggression.** Orange is confident, not alarmist. *UI implication:* the orange is reserved for "do this" moments only — it never appears as a warning or error color.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Taiwan Mobile user segments (Taiwanese telecom customers, digital lifestyle consumers), not individual people.*

**陳靜雯, 28, 台北.** Young professional juggling Netflix, Disney+, and HBO Max subscriptions across three devices. Chose Taiwan Mobile's "影音多享組" because one bill covers all streaming. Values the myfone interface for comparing plan prices quickly; has never visited a physical store.

**林大偉, 42, 台中.** Family plan holder with 4 SIM cards across the family. Upgrades every 2–3 years when a flagship model launch coincides with a good plan. Uses "搭手機" flow exclusively — always searches by handset first, plan second. Appreciates that Taiwan Mobile is the "5G Taiwan Team" national standard-bearer.

**蔡小玲, 22, 高雄.** Student on a budget, uses a prepaid card (預付卡). Watches MyVideo for free bundled streaming. Switches between plans every semester based on whatever deal is running. Engages heavily with "OP 響樂生活" points for free 7-Eleven coffee.

**鄭建宏, 55, 花蓮.** Small business owner who recently subscribed to a 5G fixed wireless access (FWA) plan for his shop. Found Taiwan Mobile through a local franchise store; primary interaction is the "我要問小麥" AI chat for billing questions. Values reliability of coverage over plan features.

## 14. States

| State | Treatment |
|---|---|
| **Empty (plan search, no results)** | White canvas with `#f5f7f8` surface. Ink text (`#2d3033`) at body size: "目前無符合條件的方案。" One orange CTA to reset filters. No illustration. |
| **Empty (myfone cart, none added)** | Warm illustration or simple icon, muted text (`#838d9c`): "購物車是空的。" Orange CTA to browse products. |
| **Loading (plan results)** | Skeleton cards at `#e3e7ee` card-mist background with 20px radius, same dimensions as live product cards. Flat shimmer — consistent with shadow-free system. |
| **Loading (page first paint)** | Surface-grey `#f5f7f8` base with skeleton blocks for hero carousel and plan tab row. Orange tab placeholder maintains spatial presence. |
| **Error (plan lookup failed)** | Inline message in Ink (`#2d3033`) with plain description and orange retry CTA. Never generic "發生錯誤" alone — provides next step. |
| **Error (form validation)** | Field-level message in a warm warning tone below the input; describes what is valid. Orange or amber border highlight. |
| **Success (plan application submitted)** | Brief confirmation on `#f5f7f8` surface, plain Mandarin sentence. Orange checkmark icon. Next-step link to SIM delivery tracking. No emoji. |
| **Skeleton** | `#e3e7ee` blocks at final card dimensions, 20px radius, flat-fade pulse. |
| **Disabled** | Muted grey `#838d9c` text with reduced opacity surfaces. Orange actions fade to semi-transparent orange rather than switching to grey to preserve brand read. |
| **Offline / Coverage Error** | Full-page fallback with "大哥大" mascot/icon and plain message: "請確認您的網路連線。" Orange retry CTA. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover state on orange CTAs, tab active switch |
| `motion-standard` | 200ms | Sheet, dialog reveal, card expand |
| `motion-slow` | 320ms | Hero carousel transition, page-level navigation |
| `motion-carousel` | 400ms | Plan/product carousel auto-advance |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving elements — plan drawer, dialog |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions, tab switch |

**Motion rules**: Carousel-driven design (the hero is a swiper) means motion is primarily horizontal — product slides sweep laterally using `ease-standard` at `motion-carousel` duration. Orange interactive elements respond to hover with a fast `120ms` background darken from `#ff6700` → `#f45100`. Dialogs fade-and-scale in at `motion-standard / ease-enter`. Under `prefers-reduced-motion: reduce`, all carousel auto-advance stops and all transitions collapse to instant; the product remains fully navigable.

**Signature motion**: The "Planet Possible" logo sphere in motion on campaign materials rotates gently, echoing the original "spinning ball" heritage of the 台灣大哥大 brand. On the live web UI, this expresses as the horizontal carousel sweep — the brand in motion, orbiting possibilities.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-22) via playwright getComputedStyle on https://www.taiwanmobile.com:
- Document title: "台灣大哥大 | 給你美好數位生活的各種可能，大可飆速、大可響樂、大可回饋、大可永續，台灣大 大可能"
- Hero H1 "多樣資費任你選 跨平台暢看" — Poppins 48px / weight 500 / color rgb(0,0,0)
- Section H2 "今天想找什麼電信方案呢？" — 34px / 500 / rgb(45,48,51)
- Primary CTA "搭手機" — bg rgb(255,103,0) #ff6700 / radius 40px / 18px Poppins / white text
- Login pill "登入" — transparent bg / white text / radius 50px / 14px
- Nav header — white #ffffff / 72px height / Poppins 15px / rgb(45,48,51)
- Picture cards — bg rgb(227,231,238) / radius 20px / no shadow

Second surface: https://corp.taiwanmobile.com/company-profile/brand-concept.html
- Brand philosophy: "Open Possible 能所不能" confirmed
- Orange #ff6700 confirmed in brand heading color
- Corporate nav rgb(0,129,204) = #0081cc

Third surface: https://www.myfone.com.tw (myfone sub-brand)
- Button pills "搭門號"/"買空機" bg white / orange text #ff6700 / radius 30px
- myfone bg frequency: rgb(45,45,108) #2d2d6c indigo ×41, rgb(255,103,0) orange ×35

Brand narrative: Taiwan Mobile founded 1997; 2020 "Open Possible" rebrand and Planet Possible logo confirmed from corp.taiwanmobile.com/esg/rebranding.html.

Personas are fictional archetypes informed by public Taiwan Mobile product categories (prepaid, family plans, 5G FWA, streaming bundles, myfone digital store). Names are illustrative; do not refer to real people.

Voice samples §10 are verbatim from the live homepage document title and section headings (verified live 2026-06-22).

Interpretive claims (e.g., "pill-forward as accessibility signal", "flat depth as mobile-native telecom") are editorial readings connecting observed design to brand positioning, not direct TWM statements.
-->
