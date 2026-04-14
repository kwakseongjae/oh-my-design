# Design System Inspiration of Toss (토스)

## 1. Visual Theme & Atmosphere

Toss is Korea's fintech super-app that redefined what a financial interface could feel like -- calm, confident, and deceptively simple. The page opens on a clean white canvas (`#ffffff`) with deep charcoal headings (`#191f28`) and a signature blue (`#3182f6`) that functions as the universal interactive accent. This isn't the cold, institutional blue of legacy banking; it's a bright, optimistic cerulean that says "your money is in good hands, and we'll make it easy."

The custom **Toss Product Sans** typeface is the quiet hero. Developed with Korean type foundries Sandoll and Leedotype, it was purpose-built for financial contexts: numerals and Latin characters are optically weighted to match Korean hangul proportions, and financial symbols (%, commas, ±) are given enhanced legibility. The font ships in 8 weights (300-950) but the UI exercises restraint, primarily using 400, 600, and 700. The system supports both variable-width numerals for display and fixed-width (tabular) numerals for data tables -- context determines mode.

What defines Toss visually is its OKLCH-based color system, rebuilt from scratch for perceptual uniformity. Colors at the same scale level appear equally bright regardless of hue, enabling consistent semantic coloring where blue-500, red-500, and green-500 carry identical visual weight without manual tuning.

**Key Characteristics:**
- Toss Blue (`#3182f6`) as the primary interactive color -- bright, optimistic, trustworthy
- Toss Product Sans with Korean-Latin optical balancing and tabular numeral support
- OKLCH color space for perceptual uniformity across all hue scales
- 10-step grey scale (grey50-grey900) with warm undertones
- Three-tier token architecture: primitive → semantic → component
- Minimal shadow system -- trust comes from clarity, not depth
- Mobile-first at 375px design baseline with accessibility scaling up to 310%

## 2. Color Palette & Roles

### Primary
- **Toss Blue** (`#3182f6`): `blue500`. Primary interactive color -- CTAs, links, active states, selection highlights. The workhorse of every tappable element.
- **Blue Hover** (`#2272eb`): `blue600`. Hover/pressed state for blue500 elements.
- **Blue Light** (`#e8f3ff`): `blue50`. Informational backgrounds, subtle blue-tinted surfaces.
- **Pure White** (`#ffffff`): `background`, `layeredBackground`. Page background, card surfaces.
- **Dark Charcoal** (`#191f28`): `grey900`. Primary heading color, strongest text. Warm near-black with subtle blue undertone.

### Brand (Logo/Marketing Only)
- **Brand Blue** (`#0064FF`): Official Toss brand color (Pantone 2175 C). Logo and marketing materials only -- distinct from UI blue500.
- **Brand Gray** (`#202632`): Official secondary brand color (Pantone 433 C). Corporate contexts.

### Semantic
- **Error Red** (`#f04452`): `red500`. Error states, destructive actions, negative financial indicators.
- **Success Green** (`#03b26c`): `green500`. Positive financial indicators, confirmations.
- **Warning Orange** (`#fe9800`): `orange500`. Pending states, attention-needed indicators.
- **Caution Yellow** (`#ffc342`): `yellow500`. Soft warnings, highlight moments.
- **Info Teal** (`#18a5a5`): `teal500`. Informational accent, alternative categorization.
- **Premium Purple** (`#a234c7`): `purple500`. Premium features, special offers.

### Neutral Scale
- **Grey 50** (`#f9fafb`): Lightest gray, `greyBackground` surface.
- **Grey 100** (`#f2f4f6`): Secondary background, card fills, disabled surfaces.
- **Grey 200** (`#e5e8eb`): Default border color, dividers, input backgrounds.
- **Grey 400** (`#b0b8c1`): Placeholder text, disabled icon fills.
- **Grey 500** (`#8b95a1`): Caption text, secondary labels.
- **Grey 600** (`#6b7684`): Body text, descriptions, metadata.
- **Grey 700** (`#4e5968`): Emphasized body text, sub-headings.
- **Grey 800** (`#333d4b`): Strong labels, navigation text.

### Surface & Borders
- **Border Default**: `#e5e8eb` (grey200). Standard card borders, input borders, dividers.
- **Border Strong**: `#d1d6db` (grey300). Emphasized borders, active input outlines.
- **Background Float**: `#ffffff`. `floatBackground`. Floating elements -- tooltips, dropdowns.
- **Overlay Scrim**: `rgba(2,9,19,0.5)` to `rgba(2,9,19,0.91)`. `greyOpacity` scale. Blue-tinted dark overlays.

## 3. Typography Rules

### Font Family
- **Primary**: `"Toss Product Sans", "Tossface", "SF Pro KR", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Basier Square", "Apple SD Gothic Neo", Roboto, "Noto Sans KR", sans-serif`
- **Monospace**: `"SF Mono", SFMono-Regular, Menlo, Consolas, monospace`
- **Emoji**: `Tossface` -- Toss's custom emoji font (3500+ emojis, open-source on GitHub)

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Toss Product Sans | 30px | 700 | 40px (1.33) | normal | Splash screens, hero moments |
| Display Large | Toss Product Sans | 26px | 700 | 36px (1.38) | normal | Section headers, key metrics |
| Heading Large | Toss Product Sans | 22px | 700 | 30px (1.36) | normal | Feature titles, modal headers |
| Heading | Toss Product Sans | 20px | 600 | 28px (1.40) | normal | Card headings, sub-sections |
| Subtitle | Toss Product Sans | 16px | 600 | 24px (1.50) | normal | Navigation titles, list headers |
| Body Large | Toss Product Sans | 16px | 400 | 24px (1.50) | normal | Descriptions, explanations |
| Body | Toss Product Sans | 14px | 400 | 22px (1.57) | normal | Standard reading text |
| Body Small | Toss Product Sans | 13px | 400 | 20px (1.54) | normal | Secondary information |
| Caption | Toss Product Sans | 12px | 400 | 18px (1.50) | normal | Timestamps, fine print |
| Number Display | Toss Product Sans | 30px+ | 700 | tight | normal | Financial amounts -- tabular nums |

### Principles
- **Eight weights, three used**: Ships 300-950, but UI uses 400 (body), 600 (emphasis), 700 (headings). Restraint over variety.
- **Dual numeral modes**: Variable-width for display, fixed-width (tabular) for financial tables and stock tickers. Context determines mode.
- **Korean-Latin optical balance**: Korean characters and Latin/numerals are independently weighted so mixed text looks harmonious without manual kerning.
- **Financial symbol optimization**: %, comma separators, ±, currency symbols, and directional arrows given enhanced legibility at small sizes.

## 4. Component Stylings

### Buttons

**Primary (Fill)**
- Background: `#3182f6` (blue500)
- Text: `#ffffff`
- Radius: `var(--button-border-radius)` (typically 8px-12px)
- Font: 16px weight 600
- Pressed: dimmed overlay (opacity reduction)
- Loading: 3-dot animation replacing text
- Disabled: reduced opacity via `--button-disabled-opacity-color`
- Display modes: `inline` (auto-width), `block` (full-width with line break), `full` (fills parent)
- Sizes: `tiny`, `medium`, `large`, `big` (default)
- Colors: `primary`, `dark`, `danger`, `light`
- Use: Primary CTAs ("송금하기", "확인")

**Secondary (Weak)**
- Background: `#e8f3ff` (blue50) or `#f2f4f6` (grey100)
- Text: `#3182f6` (blue500) or `#191f28` (grey900)
- Use: Less prominent CTAs, secondary actions

**Dark**
- Background: `#191f28` (grey900)
- Text: `#ffffff`
- Use: Actions on light backgrounds where blue would be too playful

**Danger**
- Background: `#f04452` (red500)
- Text: `#ffffff`
- Use: Destructive actions, alert confirmations

### Cards & Containers
- Background: `#ffffff` (layeredBackground)
- Border: 1px solid `#e5e8eb` (grey200) or no border
- Radius: 12px (standard), 16px (featured), 8px (compact)
- Shadow: `0px 2px 8px rgba(0,0,0,0.08)` -- single-layer, minimal
- Financial cards: prominent number display with amount in 700 weight, currency label in 400

### Inputs & Forms
- Background: `#f2f4f6` (grey100) for contained variant
- Border: 1px solid `#e5e8eb`, focus: 2px solid `#3182f6`
- Radius: 8px
- Text: `#191f28`, Placeholder: `#b0b8c1` (grey400)
- Error border: `#f04452` (red500)
- Special: SplitTextField for OTP, SecureKeypad for financial input

### Navigation
- Bottom tab bar: white background, top border `#e5e8eb`
- Active: `#3182f6` icon + `#191f28` text, Inactive: `#b0b8c1` icon + `#8b95a1` text
- Top app bar: white, sticky, optional backdrop blur
- Segmented control for section switching

### Overlays
- Bottom Sheet: `#ffffff`, 16px top radius, managed via `overlay-kit`
- Dialog: centered modal, AlertDialog and ConfirmDialog variants
- Toast: floating notification, subtle shadow, auto-dismiss
- Tooltip: `#191f28` background, white text, arrow pointer

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Common values: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px
- Horizontal padding: 20px (slightly wider than typical 16px)
- Financial data grids: tighter 4px internal spacing

### Grid & Container
- Design baseline: 375px mobile width
- Content: full-width with 20px horizontal padding
- No explicit multi-column grid -- single-column, mobile-first
- Transaction lists: full-width rows with consistent left-align for amounts

### Whitespace Philosophy
- **Breathing room for money**: Financial numbers get extra surrounding space. A balance at 30px with 32px margins communicates security through spaciousness.
- **Progressive density**: Summary screens are spacious; detail/transaction screens are denser. The deeper you go, the more information-dense.
- **Grouped by function**: Send/receive/invest actions separated by 24px+ gaps; related data within a group uses 8-12px gaps.

### Border Radius Scale
- Compact (4px): Small badges, inline elements
- Standard (8px): Inputs, small buttons, compact cards
- Comfortable (12px): Standard cards, dialog corners
- Large (16px): Featured cards, bottom sheet top corners
- Pill (9999px): Toggle switches, floating chips

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline elements |
| Subtle (Level 1) | `0px 1px 3px rgba(0,0,0,0.06)` | Slight lift, list item separation |
| Standard (Level 2) | `0px 2px 8px rgba(0,0,0,0.08)` | Cards, content panels |
| Elevated (Level 3) | `0px 4px 12px rgba(0,0,0,0.12)` | Dropdowns, popovers, floating buttons |
| Modal (Level 4) | `0px 8px 24px rgba(0,0,0,0.16)` | Bottom sheets, dialogs, modals |

**Shadow Philosophy**: Toss keeps shadows minimal and neutral. In a financial app, visual noise undermines trust -- elevation is communicated through subtle opacity differences rather than dramatic depth. Pure black with low opacity creates clinical precision matching the fintech context. Where Stripe uses brand-colored shadows, Toss uses restraint as its brand statement.

### Blur Effects
- Menu components use backdrop blur for lightweight floating panels
- Navigation bar applies subtle blur on scroll for the sticky header

## 7. Do's and Don'ts

### Do
- Use Toss Blue (`#3182f6`) for all interactive elements -- links, buttons, toggles, selections
- Apply the full font stack with Korean fallbacks including Tossface emoji
- Use tabular (fixed-width) numerals for financial data and transaction amounts
- Use 700 weight for financial amounts and headings, 400 for body, 600 for emphasis
- Keep border-radius between 8px-16px for most elements
- Show positive changes in green (`#03b26c`), negative in red (`#f04452`)
- Use blue50 (`#e8f3ff`) for subtle informational backgrounds

### Don't
- Don't confuse Brand Blue (`#0064FF`) with UI Blue (`#3182f6`) -- brand is for marketing/logo only
- Don't use heavy shadows -- rely on background color layering, not depth
- Don't use bold (700) for body text -- reserved for headings and financial amounts
- Don't mix variable-width and tabular numerals in the same data context
- Don't use warm accent colors (orange, pink) for primary actions -- blue is the sole interactive hue
- Don't use border-radius > 16px except for pills/toggles
- Don't add decorative elements to financial data displays -- clarity is the aesthetic

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile (Primary) | <480px | Full design fidelity, 375px baseline |
| Tablet | 480-768px | Expanded cards, optional side margins |
| Desktop (Web) | >768px | Centered column, max-width ~480px for mobile-web parity |

### Touch Targets
- Buttons: xlarge (~56px), large (~48px), medium (~40px), small (~36px)
- List items: minimum 52px row height for financial actions
- Keypad buttons: large targets (56-64px) for secure input

### Collapsing Strategy
- Desktop web mirrors mobile layout in a centered column
- Bottom sheet → modal dialog on larger screens
- Sticky bottom CTA bar with safe area insets on all devices
- Horizontal scrolling card carousels for product discovery

### Image Behavior
- Bank/service logos: 24-40px with consistent sizing within context
- Tossface emojis: inline at text size, display size for decorative use
- Charts/graphs: full-width, responsive, maintain aspect ratio

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Toss Blue (`#3182f6`)
- CTA Hover: Blue 600 (`#2272eb`)
- Background: Pure White (`#ffffff`)
- Background Surface: Light Gray (`#f2f4f6`)
- Heading text: Dark Charcoal (`#191f28`)
- Body text: Medium Gray (`#6b7684`)
- Caption text: Gray (`#8b95a1`)
- Placeholder: Soft Gray (`#b0b8c1`)
- Border: Gray 200 (`#e5e8eb`)
- Success/Positive: Green (`#03b26c`)
- Error/Negative: Red (`#f04452`)
- Warning: Orange (`#fe9800`)

### Example Component Prompts
- "Create a balance card: white bg, 12px radius, 20px padding. Balance label 14px weight 400, #8b95a1. Amount 30px weight 700, #191f28, tabular numerals. Currency '원' 20px weight 400. Shadow 0px 2px 8px rgba(0,0,0,0.08)."
- "Build a send-money button: #3182f6 bg, white text, 16px weight 600, min-height 56px, 12px radius, full-width. Pressed: overlay dim. Loading: 3-dot white animation."
- "Design a transaction row: full-width, 16px h-padding, 52px min-height. Left: 32px circle icon + name (14px weight 600, #191f28) + category (13px weight 400, #8b95a1). Right: amount (14px weight 600, #f04452 expense / #03b26c income)."
- "Create an OTP input: 6 boxes, each 48px wide, 56px tall, 8px radius, 1px border #e5e8eb. Active: 2px border #3182f6. Digit: 24px weight 700, centered, #191f28."
- "Design a bottom tab bar: white bg, top border 1px #e5e8eb. 4 tabs evenly spaced. Active: #3182f6 icon + #191f28 label 11px weight 500. Inactive: #b0b8c1 icon + #8b95a1 label. Tab height 56px with safe area."

### Iteration Guide
1. Always use the full Toss Product Sans font stack with Korean fallbacks
2. Primary interactive color is `#3182f6` (blue500) -- never `#0064FF` (brand blue)
3. Financial numbers: 700 weight, tabular numerals, right-aligned in lists
4. Grey scale has warm undertones: grey900 `#191f28`, grey50 `#f9fafb`
5. Border-radius: 8px inputs, 12px cards, 16px sheets, pill for toggles
6. Shadows are single-layer, pure black opacity, no colored tints
7. Mobile-first: design at 375px, 20px horizontal padding
