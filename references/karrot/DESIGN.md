# Design System Inspiration of Karrot (당근)

## 1. Visual Theme & Atmosphere

Karrot's interface is the digital equivalent of a friendly neighborhood bulletin board -- warm, approachable, and built for trust between strangers. The page opens on a clean white canvas (`#ffffff`) with warm near-black headings (`#1a1c20`) and the unmistakable Karrot Orange (`#ff6600`) that serves as the singular brand accent. This isn't the corporate orange of enterprise dashboards; it's the vivid, saturated orange of a fresh carrot -- energetic, trustworthy, and unmistakably local.

The design system, called **Seed Design**, is one of the most mature open-source systems in Korean tech. It operates on a strict 4px grid with a three-tier token architecture (palette → semantic → component) that ensures every measurement is intentional. Typography relies entirely on the platform's native font stack rather than a custom typeface -- Pretendard on web, system fonts on native -- putting community content first. The overall aesthetic is warm neutral: soft grays, generous whitespace, and that singular orange accent. Where Stripe uses shadows as brand expression, Karrot uses shadows as pure function -- minimal, neutral, and warm.

**Key Characteristics:**
- Karrot Orange (`#ff6600`) as the singular brand accent -- warm, energetic, unmistakable
- System font stack (Pretendard / Apple SD Gothic Neo) -- content takes center stage, no custom typeface
- 4px base grid with precise spacing from 2px (x0.5) to 64px (x16)
- Three-tier token system: palette → semantic → component for systematic theming
- Full dark mode via semantic token remapping (not simple inversion)
- 11-step gray scale (gray-00 through gray-1000) for nuanced depth
- Three-level shadow system with separate light/dark mode intensities
- Mobile-first at 375px baseline with `clamp()`-based accessibility font scaling

## 2. Color Palette & Roles

### Primary
- **Karrot Orange** (`#ff6600`): `$color.palette.carrot-600`. Primary CTA, active states, brand solid backgrounds. The iconic orange that defines every Karrot touchpoint.
- **Deep Orange** (`#e14d00`): `$color.palette.carrot-700`. Pressed/hover state for brand elements, dark mode brand solid.
- **Near Black** (`#1a1c20`): `$color.palette.gray-1000`, `fg-neutral`. Primary heading and text color. Warm near-black that avoids harshness.
- **Pure White** (`#ffffff`): `$color.palette.gray-00`, `bg-layer-default`. Page background, card surfaces.

### Brand Tints
- **Orange Tint** (`#fff2ec`): `$color.palette.carrot-100`. Brand weak background, subtle orange-tinted surfaces.
- **Orange Light** (`#ffb999`): `$color.palette.carrot-400`. Medium brand tint, progress indicators.
- **Orange Deep** (`#b93901`): `$color.palette.carrot-800`. Deep orange for emphasis in dark contexts.

### Semantic
- **Critical Red** (`#fa342c`): `fg-critical`. Error foreground, destructive action labels.
- **Informative Blue** (`#217cf9`): `fg-informative`. Links, informational highlights.
- **Positive Green** (`#079171`): `fg-positive`. Success states, confirmation indicators.
- **Warning Yellow** (`#9b7821`): `fg-warning`. Caution labels, attention-needed states.
- **Focus Blue** (`#5e98fe`): `stroke-focus-ring`. Keyboard focus ring on interactive elements.

### Neutral Scale
- **Gray 100** (`#f7f8f9`): `bg-layer-fill`. Subtle background fill.
- **Gray 200** (`#f3f4f5`): `bg-layer-basement`, `bg-disabled`. Secondary surfaces.
- **Gray 400** (`#dcdee3`): `stroke-neutral-weak`. Standard borders, dividers.
- **Gray 600** (`#b0b3ba`): `fg-placeholder`. Placeholder text, muted icons.
- **Gray 700** (`#868b94`): `fg-neutral-subtle`. Captions, tertiary text.
- **Gray 800** (`#555d6d`): `fg-neutral-muted`. Secondary body text.

### Surface & Borders
- **Border Subtle** (`rgba(0,0,0,0.08)`): `stroke-neutral-subtle`. Soft card borders, barely-there separation.
- **Border Muted** (`rgba(0,0,0,0.12)`): `stroke-neutral-muted`. Moderate borders for definition.
- **Overlay** (`rgba(0,0,0,0.7)`): `bg-overlay`. Modal/sheet backdrop.
- **Overlay Muted** (`rgba(0,0,0,0.5)`): `bg-overlay-muted`. Bottom sheet scrims.

## 3. Typography Rules

### Font Family
- **Primary**: `"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", Roboto, "Noto Sans KR", sans-serif`
- **Monospace**: `"SF Mono", SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace`
- **Design Principle**: No custom brand typeface. Karrot intentionally uses the user's system font so community content feels native and personal, not branded.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display XL | System | 26px (t10) | 700 | 35px | 0em | Hero headlines, splash screens |
| Display Large | System | 24px (t9) | 700 | 32px | 0em | Section headers |
| Heading Large | System | 20px (t7) | 700 | 27px | 0em | Card headings, sub-sections |
| Heading | System | 18px (t6) | 700 | 24px | 0em | List section headers |
| Title | System | 16px (t5) | 500 | 22px | 0em | Navigation, standard titles |
| Body | System | 14px (t4) | 400 | 19px | 0em | Standard reading text, listings |
| Body Small | System | 13px (t3) | 400 | 18px | 0em | Secondary text, metadata |
| Caption | System | 12px (t2) | 400 | 16px | 0em | Timestamps, small labels |
| Caption Small | System | 11px (t1) | 400 | 15px | 0em | Fine print, badges |

### Principles
- **Three weights only**: Regular (400), Medium (500), Bold (700). No light or extra-bold -- the system is intentionally constrained.
- **Platform-aware tracking**: iOS uses 0em throughout; Android uses tighter tracking (-0.02em to -0.04em) for system font metrics.
- **Compact type scale**: 11px to 26px in 10 steps with no display sizes above 26px -- mobile-first, content-density over typographic drama.
- **Accessibility scaling**: All sizes use `clamp()` with `--seed-font-size-multiplier`, supporting 80% to 150% of base size.

## 4. Component Stylings

### Buttons

**Brand Solid (Primary CTA)**
- Background: `#ff6600` (carrot-600)
- Text: `#ffffff`
- Radius: 12px (large), 8px (medium/small), 9999px (xsmall pill)
- Min-height: 52px (large), 40px (medium), 36px (small), 32px (xsmall)
- Font: 16px weight 700 (large), 14px weight 700 (medium/small)
- Pressed: `#e14d00` (carrot-700)
- Disabled: `#f3f4f5` background, `#d1d3d8` text
- Use: Primary actions ("판매하기", "채팅하기")

**Neutral Weak**
- Background: `#f3f4f5` (gray-200)
- Text: `#1a1c20` (gray-1000)
- Pressed: `#eeeff1` (gray-300)
- Use: Tertiary actions, filters

**Neutral Outline**
- Background: transparent
- Text: `#1a1c20` (gray-1000)
- Border: 1px solid `#dcdee3` (gray-400)
- Pressed: `#f7f8f9` background
- Use: Cancel, dismiss, low-emphasis

**Critical Solid**
- Background: `#fa342c` (red-700)
- Text: `#ffffff`
- Use: Destructive actions ("삭제", "신고")

### Cards & Containers
- Background: `#ffffff` (bg-layer-default)
- Border: 1px solid `rgba(0,0,0,0.08)` (stroke-neutral-subtle) or no border with shadow
- Radius: 8px (standard), 12px (featured), 16px (large cards)
- Shadow: `0px 2px 10px rgba(0,0,0,0.1)` (s2) for standard cards

### Chips & Tags
- Background: `#f3f4f5` (gray-200), Selected: `#1a1c20` (gray-1000) with white text
- Radius: 9999px (pill)
- Height: 32px, Padding: 0 12px, Font: 13px weight 500

### Inputs & Forms
- Background: `#f7f8f9` (gray-100)
- Border: 1px solid `#dcdee3` (gray-400)
- Radius: 8px
- Focus: 2px solid `#5e98fe` (blue-600) focus ring
- Text: `#1a1c20`, Placeholder: `#b0b3ba` (gray-600)
- Error border: `#fa342c` (red-700)

### Navigation
- Bottom tab bar: white background, subtle top border
- Active tab: Karrot Orange icon + label, Inactive: `#868b94` (gray-700)
- App bar: white, centered title (16px weight 700), optional back arrow

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Scale: 2px (x0.5), 4px (x1), 6px (x1.5), 8px (x2), 12px (x3), 16px (x4), 20px (x5), 24px (x6), 32px (x8), 40px (x10), 56px (x14), 64px (x16)
- Global gutter: 16px (x4) on each side
- Component default vertical: 12px (x3)

### Grid & Container
- Mobile: full-width with 16px horizontal gutter
- Content max-width: 640px for web
- Listing cards: full-width with 16px horizontal padding
- Card grid: 2-column on tablet, single column on mobile

### Whitespace Philosophy
- **Content-dense, chrome-light**: Users scan many listings quickly. Spacing breathes but keeps 3-4 items per viewport.
- **Consistent gutter**: The 16px global gutter is sacred -- every screen edge, every card inset returns to this rhythm.
- **Grouped by proximity**: Related items use 4-8px gaps; distinct sections use 16-24px gaps.

### Border Radius Scale
- Micro (2px): Progress bars, inline indicators
- Standard (8px): Buttons, inputs, standard cards
- Comfortable (12px): Large buttons, featured cards
- Large (16px): Image frames, prominent cards
- Sheet (20px): Bottom sheet top corners
- Dialog (24px): Modal dialogs
- Pill (9999px): Chips, avatars, xsmall buttons

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline elements |
| Subtle (s1) | `0px 1px 4px rgba(0,0,0,0.08)` | Slight lift, list item hover |
| Standard (s2) | `0px 2px 10px rgba(0,0,0,0.10)` | Cards, dropdowns, popovers |
| Prominent (s3) | `0px 4px 16px rgba(0,0,0,0.12)` | Floating action button, bottom sheets, modals |

**Shadow Philosophy**: Only three levels -- enough for clear layering without visual clutter. Shadows use pure black with varying opacity (no brand-tinted shadows), keeping the system neutral so the orange accent remains the sole source of warmth. In dark mode, opacities increase dramatically (s1: 0.50, s2: 0.68, s3: 0.80) to remain perceptible on dark surfaces.

## 7. Do's and Don'ts

### Do
- Use Karrot Orange (`#ff6600`) as the singular brand accent -- it should feel special, not overwhelming
- Stick to the 4px spacing grid -- every measurement should be a multiple of 4px
- Use semantic tokens (`fg-neutral`, `bg-layer-default`) over raw palette values in component code
- Keep border-radius between 8px-12px for standard elements, pills (9999px) only for chips/avatars
- Use the system font stack -- Pretendard on web, system fonts on native
- Apply dark mode via semantic token remapping, not opacity tricks
- Maintain the 16px global gutter on all screen edges

### Don't
- Don't overuse orange -- it's for primary CTAs and brand moments only, not backgrounds or borders
- Don't use shadows heavier than s3 -- the system intentionally avoids dramatic elevation
- Don't introduce additional brand colors -- Karrot is a one-accent-color system
- Don't exceed 26px for text sizes -- this is a mobile-first system with a compact type scale
- Don't use pure black (`#000000`) for text -- use gray-1000 (`#1a1c20`) for warmth
- Don't mix palette tokens and semantic tokens in the same component
- Don't skip the `clamp()` wrapper on font sizes -- accessibility scaling is non-negotiable

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <480px | Full-width cards, single column, 16px gutter |
| Tablet | 480-768px | 2-column listing grid, expanded cards |
| Desktop (Web) | >768px | Max-width 640px content, centered layout |

### Touch Targets
- Buttons: 52px (large), 40px (medium), 36px (small), 32px (xsmall)
- Tab bar items: 48px height with centered icon + label
- List items: minimum 56px row height
- Chips: 32px height minimum

### Collapsing Strategy
- Listing grid: 2-column → single column below 480px
- Bottom tab bar persists across all sizes
- Bottom CTA: sticky full-width button + safe area padding
- Image carousels: horizontal scroll with page indicators

### Image Behavior
- Listing thumbnails: 1:1 aspect ratio, 8px radius
- Profile avatars: circular (9999px), 36-48px diameter
- Full-width hero images: edge-to-edge, no radius

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Karrot Orange (`#ff6600`)
- CTA Pressed: Deep Orange (`#e14d00`)
- Background: Pure White (`#ffffff`)
- Heading text: Near Black (`#1a1c20`)
- Body text: Dark Gray (`#555d6d`)
- Caption text: Medium Gray (`#868b94`)
- Placeholder: Light Gray (`#b0b3ba`)
- Border: Soft Gray (`#dcdee3`)
- Disabled bg: Light Fill (`#f3f4f5`)
- Error: Red (`#fa342c`)
- Success: Green (`#079171`)
- Info: Blue (`#217cf9`)
- Focus ring: Blue (`#5e98fe`)

### Example Component Prompts
- "Create a listing card: white background, 1px solid rgba(0,0,0,0.08) border, 8px radius. Horizontal layout with 1:1 thumbnail (8px radius) left. Title 16px weight 400, #1a1c20. Price 16px weight 700, #1a1c20. Location + time 13px weight 400, #868b94."
- "Build a primary CTA button: #ff6600 background, white text, 16px weight 700, min-height 52px, 12px radius, full-width. Pressed: #e14d00. Disabled: #f3f4f5 bg, #d1d3d8 text."
- "Design a filter chip bar: horizontal scroll, 8px gap. Each chip: #f3f4f5 bg, #1a1c20 text, 13px weight 500, 32px height, 9999px radius, 12px h-padding. Selected: #1a1c20 bg, #ffffff text."
- "Create a bottom sheet: white bg, 20px top-left/right radius, shadow 0px 4px 16px rgba(0,0,0,0.12). Handle: 36px wide, 4px height, #dcdee3, centered. Content: 16px h-padding."
- "Design a navigation bar: white bg, sticky top, 1px bottom border rgba(0,0,0,0.08). Centered title 16px weight 700, #1a1c20. Left: back arrow icon #1a1c20. Right: optional action icon. Height 56px."

### Iteration Guide
1. Primary color is `#ff6600` only -- no secondary brand hue exists
2. All spacing snaps to 4px grid: 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64
3. Border-radius defaults: 8px buttons/inputs, 12px cards, 9999px chips/avatars
4. Gray-1000 (`#1a1c20`) for headings, gray-800 (`#555d6d`) for body, gray-700 (`#868b94`) for captions
5. Shadows are minimal: s1 for hover, s2 for cards, s3 for floating elements only
6. Mobile-first: design at 375px width, 16px gutter, then scale up
7. System font stack -- never embed a custom font for Karrot
