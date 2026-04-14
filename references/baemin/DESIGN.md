# Design System Inspiration of Baemin (배달의민족)

## 1. Visual Theme & Atmosphere

Baemin is Korea's beloved food delivery platform -- a brand that turned ordering takeout into a cultural experience through typography, humor, and a fiercely distinctive mint green. The interface opens on a clean white canvas (`#ffffff`) with warm dark headings (`#212529`) and that unmistakable Baemin Mint (`#2AC1BC`) that feels like no other app. This isn't the utilitarian teal of medical software; it's a warm, playful cyan-green chosen specifically because the food industry conventionally uses warm reds and oranges -- Baemin is the deliberate contrast.

Typography IS the brand. Where most companies treat fonts as infrastructure, Baemin has released over a dozen custom typefaces -- each one preserving disappearing Korean signage culture. From the 1960s acrylic-cut Hanna (한나체) to the weathered Euljiro district lettering (을지로체), every font tells a story. But for the functional UI itself, the system uses the platform's native sans-serif -- brand fonts appear only in promotional banners and splash screens, creating a layered personality where the app is professional but the brand is warm and irreverent.

The design philosophy is "playful warmth." The UX writing is legendary in Korea for its conversational wit ("배민다움"), and the illustration-based icon system uses appetizing, sketch-like drawings rather than flat geometric icons. The overall impression is of a neighborhood restaurant's charm scaled to a platform serving millions.

**Key Characteristics:**
- Baemin Mint (`#2AC1BC`) as the singular brand accent -- warm, fresh, deliberately counter-industry
- 10+ custom open-source fonts (OFL) preserving Korean signage culture -- brand display only
- System fonts for functional UI, brand fonts for personality moments
- Card-based layout composition -- "all information composed of card-format combinations"
- Illustration-based icons: appetizing, hand-drawn feel over flat minimalism
- Conversational UX writing ("배민다움") -- witty, warm, human
- Five-variant shadow system (Natural through Crisp) for nuanced elevation

## 2. Color Palette & Roles

### Primary
- **Baemin Mint** (`#2AC1BC`): Primary brand color, CTA backgrounds, active states. Warm cyan-green, instantly recognizable. Official spec: CMYK 65:0:29:0 (hex is approximate).
- **Pure White** (`#ffffff`): Page background, card surfaces. Clean and appetizing.
- **Dark Charcoal** (`#212529`): Primary heading and text color. Warm, not harsh.

### Accent
- **Primary Teal** (`#12B886`): UI primary green, confirmation button fills, positive accents.
- **Teal Light** (`#20C997`): Hover states on teal elements, lighter accent.
- **Destructive Red** (`#FF6B6B`): Error states, destructive actions, out-of-stock indicators.
- **Warning Orange** (`#FFB347`): Attention-needed states, delivery delays, star ratings.
- **Info Blue** (`#74C0FC`): General information, order status updates.
- **Promo Red** (`#FF0000`): High-urgency alerts, promotional countdown timers.

### Neutral Scale
- **Text Primary** (`#212529`): Headings, menu item names, strong labels.
- **Text Secondary** (`#495057`): Body text, descriptions, ingredient lists.
- **Text Tertiary** (`#868E96`): Captions, timestamps, secondary metadata.
- **Text Disabled** (`#ADB5BD`): Placeholder text, disabled labels.
- **Border Light** (`#DEE2E6`): Standard card borders, dividers, input borders.
- **Surface Fill** (`#F8F9FA`): Background fill, secondary canvas.
- **Surface Subtle** (`#F1F3F5`): Tertiary background, input fills.

### Surface & Borders
- **Border Default**: `#DEE2E6`. Card borders, list dividers.
- **Border Strong**: `#343A40`. High-contrast borders for emphasis.
- **Overlay**: `rgba(0,0,0,0.5)`. Modal/sheet backdrops.
- **Overlay Dark**: `rgba(0,0,0,0.7)`. Full-screen image viewers.

## 3. Typography Rules

### Font Family
- **UI Primary**: `-apple-system, BlinkMacSystemFont, "Helvetica Neue", "Apple SD Gothic Neo", "Malgun Gothic", "Noto Sans KR", sans-serif`
- **Monospace**: `"SF Mono", SFMono-Regular, Menlo, Consolas, monospace`
- **Brand Display**: `"BMHANNA Pro"` -- signature Baemin font for brand headings and promotional banners
- **Brand Playful**: `"BMJua"` -- rounded, friendly, for casual brand copy

All 12 Baemin fonts are free under OFL license. Four are on Google Fonts (Jua, Do Hyeon, Kirang Haerang, Yeon Sung). Hanna variants available via direct download from woowahan.com.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | BMHANNA Pro | 42px | 700 | 1.20 | normal | Splash screens, brand moments |
| Display Large | System | 36px | 700 | 1.25 | normal | Campaign titles, section heroes |
| Heading Large | System | 24px | 700 | 1.33 | normal | Feature section titles |
| Heading | System | 20px | 700 | 1.40 | normal | Card headings, menu categories |
| Title | System | 18px | 600 | 1.44 | normal | Restaurant names, item titles |
| Body Large | System | 16px | 400 | 1.50 | normal | Descriptions, menu details |
| Body | System | 14px | 400 | 1.57 | normal | Standard reading, reviews |
| Body Small | System | 13px | 400 | 1.54 | normal | Secondary info, ingredients |
| Caption | System | 12px | 400 | 1.50 | normal | Timestamps, delivery times |
| Price Display | System | 20px | 700 | 1.30 | normal | Menu item prices, order totals |

### Principles
- **Dual personality**: System fonts for functional UI (ordering, tracking, payments), brand fonts for the experiential layer (banners, promotions, splash). The separation keeps the app professional while the brand stays playful.
- **Bold for clarity**: In food ordering, weight 700 is used liberally for menu names, prices, and CTAs. Users scan quickly through many options.
- **All fonts are free**: Every Baemin typeface is available under OFL license for personal and commercial use.

## 4. Component Stylings

### Buttons

**Primary (Brand Mint)**
- Background: `#2AC1BC`
- Text: `#ffffff`
- Padding: 12px 24px
- Radius: 8px
- Font: 16px system weight 700
- Pressed: `#20A8A4` (darkened mint)
- Disabled: `#DEE2E6` background, `#ADB5BD` text
- Use: Primary CTAs ("주문하기", "배달 주문")

**Secondary (Ghost)**
- Background: transparent
- Text: `#2AC1BC`
- Border: 1px solid `#2AC1BC`
- Radius: 8px
- Pressed: `rgba(42,193,188,0.08)` background
- Use: Secondary actions ("장바구니", "찜하기")

**Neutral**
- Background: `#F8F9FA`
- Text: `#212529`
- Radius: 8px
- Use: Tertiary actions, filter toggles

**Destructive**
- Background: `#FF6B6B`
- Text: `#ffffff`
- Use: Cancel order, remove item

### Cards & Containers
- Background: `#ffffff`
- Border: 1px solid `#DEE2E6` or no border with shadow
- Radius: 8px (standard), 12px (featured restaurant cards)
- Shadow: `0px 2px 8px rgba(0,0,0,0.06)` (standard)

### Restaurant Cards (Key Component)
- Image: full-width, 16:9, 12px top radius
- Name: 18px weight 700, `#212529`
- Rating: star icon (`#FFB347`) + score 14px weight 600
- Delivery info: 13px weight 400, `#868E96`
- Tags: pill (9999px radius), `#F1F3F5` bg, `#495057` text, 12px
- Internal padding: 16px

### Tags & Badges
- **Category Tag**: `#F1F3F5` bg, `#495057` text, pill radius, 12px font weight 500
- **Promo Badge**: `#FF6B6B` or `#FFB347` bg, white text, 4px radius, 11px weight 700
- **Delivery Badge**: `#2AC1BC` bg, white text, 4px radius

### Inputs & Forms
- Border: 1px solid `#DEE2E6`, Radius: 8px
- Focus: 2px solid `#2AC1BC`
- Text: `#212529`, Placeholder: `#ADB5BD`
- Search bar: 20px radius, `#F8F9FA` background, search icon left

### Navigation
- Bottom tab bar: white, top border `#DEE2E6`
- Active: `#2AC1BC` icon + text, Inactive: `#868E96`
- Top app bar: white, centered title 18px weight 700
- Cart badge: `#FF6B6B` circle, white count text

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px
- Card internal padding: 16px
- Section gaps: 24px-32px

### Grid & Container
- Mobile: full-width, 16px horizontal padding
- Content max-width: 768px for tablet/web
- Restaurant list: single-column on mobile, 2-column on tablet
- Category grid: horizontal scroll with equal-width items

### Whitespace Philosophy
- **Appetizing spacing**: Food photos get generous whitespace to feel premium. A cramped photo kills appetite; a well-spaced one invites exploration.
- **Scan-friendly density**: Restaurant lists balance showing 3-4 options per viewport with enough detail per card to decide without tapping.
- **Card-format composition**: All service information is composed of card-format combinations that auto-transform based on device.

### Border Radius Scale
- Standard (4px): Small badges, promotional tags
- Comfortable (8px): Buttons, inputs, standard cards
- Featured (12px): Restaurant cards, image containers
- Search (20px): Search bar, large rounded containers
- Pill (9999px): Category tags, filter chips

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline elements |
| Natural (Level 1) | `0px 1px 3px rgba(0,0,0,0.04)` | Subtle card separation, list items |
| Deep (Level 2) | `0px 2px 8px rgba(0,0,0,0.08)` | Standard restaurant cards |
| Sharp (Level 3) | `0px 4px 12px rgba(0,0,0,0.10)` | Floating cart button, active overlays |
| Outlined (Level 4) | `0px 4px 16px rgba(0,0,0,0.12)` | Bottom sheets, modal dialogs |
| Crisp (Level 5) | `0px 8px 24px rgba(0,0,0,0.16)` | Full-screen overlays, floating menus |

**Shadow Philosophy**: Baemin uses five tiers -- richer than most mobile apps, reflecting the layered nature of a delivery platform where maps, restaurant lists, order sheets, and cart overlays compete for attention. The naming (Natural, Deep, Sharp, Outlined, Crisp) reflects Baemin's design culture of using evocative, human language rather than cold technical terms.

## 7. Do's and Don'ts

### Do
- Use Baemin Mint (`#2AC1BC`) as the primary brand accent for CTAs and active states
- Apply brand fonts (BMHANNA, BMJua) for promotional banners and special moments only
- Use system fonts for the core ordering/tracking UI -- keep it functional
- Make food photography the star: generous whitespace, no overlapping UI on images
- Keep border-radius between 4px-12px for standard UI elements
- Use the conversational, warm tone for UX writing (Baemin voice)
- Use illustration-based icons for food categories -- appetizing over geometric

### Don't
- Don't use brand fonts for body text or functional UI -- they're for personality moments only
- Don't use heavy shadows on food photos -- let the photography speak
- Don't introduce competing accent colors alongside mint -- one-accent system
- Don't use cold, clinical blues for interactive elements -- warm mint territory
- Don't use pure black (`#000000`) for text -- `#212529` is the correct dark
- Don't apply mint to large background areas -- it works as an accent, not a canvas
- Don't make checkout/payment "fun" -- ordering should be clear and trustworthy

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile (Primary) | <480px | Full design, single column, 16px gutter |
| Tablet | 480-768px | 2-column restaurant grid, expanded cards |
| Desktop (Web) | >768px | Centered content, max-width 768px |

### Touch Targets
- CTA buttons: minimum 48px height, full-width on mobile
- Restaurant cards: entire card tappable, min 120px height
- Category scrollers: 44px minimum touch height
- Cart floating button: 56px circular, fixed bottom-right
- Quantity steppers: 36px minimum

### Collapsing Strategy
- Restaurant grid: 2-column → single column below 480px
- Category bar: horizontal scroll on all sizes, no wrapping
- Order summary: full-width sheet on mobile, side panel on tablet+
- Search: full-screen overlay on mobile, inline on desktop

### Image Behavior
- Restaurant photos: 16:9 aspect ratio, full card width, 12px top radius
- Menu thumbnails: 1:1 square, 8px radius, 80-100px on mobile
- Promotional banners: full-width, swipeable carousel

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Baemin Mint (`#2AC1BC`)
- CTA Pressed: Deep Mint (`#20A8A4`)
- Alternate CTA: Teal (`#12B886`)
- Background: Pure White (`#ffffff`)
- Background Surface: Light Gray (`#F8F9FA`)
- Heading text: Dark Charcoal (`#212529`)
- Body text: Dark Gray (`#495057`)
- Caption text: Medium Gray (`#868E96`)
- Placeholder: Soft Gray (`#ADB5BD`)
- Border: Light Gray (`#DEE2E6`)
- Error: Warm Red (`#FF6B6B`)
- Rating: Warm Orange (`#FFB347`)

### Example Component Prompts
- "Create a restaurant card: white bg, 12px radius. Full-width photo (16:9, 12px top radius). Name 18px weight 700, #212529. Star icon (#FFB347) + rating 14px weight 600. Delivery time + fee 13px weight 400, #868E96. Tags as pills (#F1F3F5 bg, #495057 text). 16px padding."
- "Build a primary button: #2AC1BC bg, white text, 16px weight 700, 48px height, 8px radius, full-width. Pressed: #20A8A4."
- "Design a menu item row: 16px padding. Left: name (16px weight 600, #212529) + description (13px weight 400, #868E96, 2-line max) + price (16px weight 700). Right: 80px square thumbnail, 8px radius. Divider: 1px solid #DEE2E6."
- "Build a floating cart button: 56px circle, #2AC1BC bg, white cart icon. Badge: 18px circle, #FF6B6B bg, white text 11px weight 700, top-right. Shadow: 0px 4px 12px rgba(0,0,0,0.10)."
- "Design a search bar: #F8F9FA bg, 20px radius, 44px height. Left: 16px padding + #868E96 search icon. Placeholder '맛집을 검색해보세요' in #ADB5BD. Text: #212529. Full-width with 16px margin."

### Iteration Guide
1. System fonts for UI, BMHANNA for brand display moments only
2. Primary accent is `#2AC1BC` (Baemin Mint) -- warm, not cold
3. Food photography is centerpiece: 16:9 for restaurants, 1:1 for menu items
4. Bold (700) used liberally for names, prices, CTAs -- food ordering needs scannable bold
5. Border-radius: 8px buttons/inputs, 12px restaurant cards, pill for tags
6. Five shadow levels: use Deep (Level 2) as default card shadow
7. Warm neutrals: #212529 headings, #F8F9FA backgrounds
