---
omd: 0.1
brand: Notion
---

# Design System Inspiration of Notion

## 1. Visual Theme & Atmosphere

Notion's website embodies the philosophy of the tool itself: a blank canvas that gets out of your way. The design system is built on warm neutrals rather than cold grays, creating a distinctly approachable minimalism that feels like quality paper rather than sterile glass. The page canvas is pure white (`#ffffff`) but the text isn't pure black -- it's a warm near-black (`rgba(0,0,0,0.95)`) that softens the reading experience imperceptibly. The warm gray scale (`#f6f5f4`, `#31302e`, `#615d59`, `#a39e98`) carries subtle yellow-brown undertones, giving the interface a tactile, almost analog warmth.

The custom NotionInter font (a modified Inter) is the backbone of the system. At display sizes (64px), it uses aggressive negative letter-spacing (-2.125px), creating headlines that feel compressed and precise. The weight range is broader than typical systems: 400 for body, 500 for UI elements, 600 for semi-bold labels, and 700 for display headings. OpenType features `"lnum"` (lining numerals) and `"locl"` (localized forms) are enabled on larger text, adding typographic sophistication that rewards close reading.

What makes Notion's visual language distinctive is its border philosophy. Rather than heavy borders or shadows, Notion uses ultra-thin `1px solid rgba(0,0,0,0.1)` borders -- borders that exist as whispers, barely perceptible division lines that create structure without weight. The shadow system is equally restrained: multi-layer stacks with cumulative opacity never exceeding 0.05, creating depth that's felt rather than seen.

**Key Characteristics:**
- NotionInter (modified Inter) with negative letter-spacing at display sizes (-2.125px at 64px)
- Warm neutral palette: grays carry yellow-brown undertones (`#f6f5f4` warm white, `#31302e` warm dark)
- Near-black text via `rgba(0,0,0,0.95)` -- not pure black, creating micro-warmth
- Ultra-thin borders: `1px solid rgba(0,0,0,0.1)` throughout -- whisper-weight division
- Multi-layer shadow stacks with sub-0.05 opacity for barely-there depth
- Notion Blue (`#0075de`) as the singular accent color for CTAs and interactive elements
- Pill badges (9999px radius) with tinted blue backgrounds for status indicators
- 8px base spacing unit with an organic, non-rigid scale

## 2. Color Palette & Roles

### Primary
- **Notion Black** (`rgba(0,0,0,0.95)` / `#000000f2`): Primary text, headings, body copy. The 95% opacity softens pure black without sacrificing readability.
- **Pure White** (`#ffffff`): Page background, card surfaces, button text on blue.
- **Notion Blue** (`#0075de`): Primary CTA, link color, interactive accent -- the only saturated color in the core UI chrome.

### Brand Secondary
- **Deep Navy** (`#213183`): Secondary brand color, used sparingly for emphasis and dark feature sections.
- **Active Blue** (`#005bab`): Button active/pressed state -- darker variant of Notion Blue.

### Warm Neutral Scale
- **Warm White** (`#f6f5f4`): Background surface tint, section alternation, subtle card fill. The yellow undertone is key.
- **Warm Dark** (`#31302e`): Dark surface background, dark section text. Warmer than standard grays.
- **Warm Gray 500** (`#615d59`): Secondary text, descriptions, muted labels.
- **Warm Gray 300** (`#a39e98`): Placeholder text, disabled states, caption text.

### Semantic Accent Colors
- **Teal** (`#2a9d99`): Success states, positive indicators.
- **Green** (`#1aae39`): Confirmation, completion badges.
- **Orange** (`#dd5b00`): Warning states, attention indicators.
- **Pink** (`#ff64c8`): Decorative accent, feature highlights.
- **Purple** (`#391c57`): Premium features, deep accents.
- **Brown** (`#523410`): Earthy accent, warm feature sections.

### Interactive
- **Link Blue** (`#0075de`): Primary link color with underline-on-hover.
- **Link Light Blue** (`#62aef0`): Lighter link variant for dark backgrounds.
- **Focus Blue** (`#097fe8`): Focus ring on interactive elements.
- **Badge Blue Bg** (`#f2f9ff`): Pill badge background, tinted blue surface.
- **Badge Blue Text** (`#097fe8`): Pill badge text, darker blue for readability.

### Shadows & Depth
- **Card Shadow** (`rgba(0,0,0,0.04) 0px 4px 18px, rgba(0,0,0,0.027) 0px 2.025px 7.84688px, rgba(0,0,0,0.02) 0px 0.8px 2.925px, rgba(0,0,0,0.01) 0px 0.175px 1.04062px`): Multi-layer card elevation.
- **Deep Shadow** (`rgba(0,0,0,0.01) 0px 1px 3px, rgba(0,0,0,0.02) 0px 3px 7px, rgba(0,0,0,0.02) 0px 7px 15px, rgba(0,0,0,0.04) 0px 14px 28px, rgba(0,0,0,0.05) 0px 23px 52px`): Five-layer deep elevation for modals and featured content.
- **Whisper Border** (`1px solid rgba(0,0,0,0.1)`): Standard division border -- cards, dividers, sections.

## 3. Typography Rules

### Font Family
- **Primary**: `NotionInter`, with fallbacks: `Inter, -apple-system, system-ui, Segoe UI, Helvetica, Apple Color Emoji, Arial, Segoe UI Emoji, Segoe UI Symbol`
- **OpenType Features**: `"lnum"` (lining numerals) and `"locl"` (localized forms) enabled on display and heading text.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | NotionInter | 64px (4.00rem) | 700 | 1.00 (tight) | -2.125px | Maximum compression, billboard headlines |
| Display Secondary | NotionInter | 54px (3.38rem) | 700 | 1.04 (tight) | -1.875px | Secondary hero, feature headlines |
| Section Heading | NotionInter | 48px (3.00rem) | 700 | 1.00 (tight) | -1.5px | Feature section titles, with `"lnum"` |
| Sub-heading Large | NotionInter | 40px (2.50rem) | 700 | 1.50 | normal | Card headings, feature sub-sections |
| Sub-heading | NotionInter | 26px (1.63rem) | 700 | 1.23 (tight) | -0.625px | Section sub-titles, content headers |
| Card Title | NotionInter | 22px (1.38rem) | 700 | 1.27 (tight) | -0.25px | Feature cards, list titles |
| Body Large | NotionInter | 20px (1.25rem) | 600 | 1.40 | -0.125px | Introductions, feature descriptions |
| Body | NotionInter | 16px (1.00rem) | 400 | 1.50 | normal | Standard reading text |
| Body Medium | NotionInter | 16px (1.00rem) | 500 | 1.50 | normal | Navigation, emphasized UI text |
| Body Semibold | NotionInter | 16px (1.00rem) | 600 | 1.50 | normal | Strong labels, active states |
| Body Bold | NotionInter | 16px (1.00rem) | 700 | 1.50 | normal | Headlines at body size |
| Nav / Button | NotionInter | 15px (0.94rem) | 600 | 1.33 | normal | Navigation links, button text |
| Caption | NotionInter | 14px (0.88rem) | 500 | 1.43 | normal | Metadata, secondary labels |
| Caption Light | NotionInter | 14px (0.88rem) | 400 | 1.43 | normal | Body captions, descriptions |
| Badge | NotionInter | 12px (0.75rem) | 600 | 1.33 | 0.125px | Pill badges, tags, status labels |
| Micro Label | NotionInter | 12px (0.75rem) | 400 | 1.33 | 0.125px | Small metadata, timestamps |

### Principles
- **Compression at scale**: NotionInter at display sizes uses -2.125px letter-spacing at 64px, progressively relaxing to -0.625px at 26px and normal at 16px. The compression creates density at headlines while maintaining readability at body sizes.
- **Four-weight system**: 400 (body/reading), 500 (UI/interactive), 600 (emphasis/navigation), 700 (headings/display). The broader weight range compared to most systems allows nuanced hierarchy.
- **Warm scaling**: Line height tightens as size increases -- 1.50 at body (16px), 1.23-1.27 at sub-headings, 1.00-1.04 at display. This creates denser, more impactful headlines.
- **Badge micro-tracking**: The 12px badge text uses positive letter-spacing (0.125px) -- the only positive tracking in the system, creating wider, more legible small text.

## 4. Component Stylings

### Buttons

**Primary Blue**
- Background: `#0075de` (Notion Blue)
- Text: `#ffffff`
- Padding: 8px 16px
- Radius: 4px (subtle)
- Border: `1px solid transparent`
- Hover: background darkens to `#005bab`
- Active: scale(0.9) transform
- Focus: `2px solid` focus outline, `var(--shadow-level-200)` shadow
- Use: Primary CTA ("Get Notion free", "Try it")

**Secondary / Tertiary**
- Background: `rgba(0,0,0,0.05)` (translucent warm gray)
- Text: `#000000` (near-black)
- Padding: 8px 16px
- Radius: 4px
- Hover: text color shifts, scale(1.05)
- Active: scale(0.9) transform
- Use: Secondary actions, form submissions

**Ghost / Link Button**
- Background: transparent
- Text: `rgba(0,0,0,0.95)`
- Decoration: underline on hover
- Use: Tertiary actions, inline links

**Pill Badge Button**
- Background: `#f2f9ff` (tinted blue)
- Text: `#097fe8`
- Padding: 4px 8px
- Radius: 9999px (full pill)
- Font: 12px weight 600
- Use: Status badges, feature labels, "New" tags

### Cards & Containers
- Background: `#ffffff`
- Border: `1px solid rgba(0,0,0,0.1)` (whisper border)
- Radius: 12px (standard cards), 16px (featured/hero cards)
- Shadow: `rgba(0,0,0,0.04) 0px 4px 18px, rgba(0,0,0,0.027) 0px 2.025px 7.84688px, rgba(0,0,0,0.02) 0px 0.8px 2.925px, rgba(0,0,0,0.01) 0px 0.175px 1.04062px`
- Hover: subtle shadow intensification
- Image cards: 12px top radius, image fills top half

### Inputs & Forms
- Background: `#ffffff`
- Text: `rgba(0,0,0,0.9)`
- Border: `1px solid #dddddd`
- Padding: 6px
- Radius: 4px
- Focus: blue outline ring
- Placeholder: warm gray `#a39e98`

### Navigation
- Clean horizontal nav on white, not sticky
- Brand logo left-aligned (33x34px icon + wordmark)
- Links: NotionInter 15px weight 500-600, near-black text
- Hover: color shift to `var(--color-link-primary-text-hover)`
- CTA: blue pill button ("Get Notion free") right-aligned
- Mobile: hamburger menu collapse
- Product dropdowns with multi-level categorized menus

### Image Treatment
- Product screenshots with `1px solid rgba(0,0,0,0.1)` border
- Top-rounded images: `12px 12px 0px 0px` radius
- Dashboard/workspace preview screenshots dominate feature sections
- Warm gradient backgrounds behind hero illustrations (decorative character illustrations)

### Distinctive Components

**Feature Cards with Illustrations**
- Large illustrative headers (The Great Wave, product UI screenshots)
- 12px radius card with whisper border
- Title at 22px weight 700, description at 16px weight 400
- Warm white (`#f6f5f4`) background variant for alternating sections

**Trust Bar / Logo Grid**
- Company logos (trusted teams section) in their brand colors
- Horizontal scroll or grid layout with team counts
- Metric display: large number + description pattern

**Metric Cards**
- Large number display (e.g., "$4,200 ROI")
- NotionInter 40px+ weight 700 for the metric
- Description below in warm gray body text
- Whisper-bordered card container

### Interactive States

Consolidated state behavior across all interactive components.

- **Default**: Standard appearance with whisper border (`1px solid rgba(0,0,0,0.1)`)
- **Hover**: Color shift on text, `scale(1.05)` transform on buttons, underline on links
- **Active / Pressed**: `scale(0.9)` transform, darker background variant (e.g. `#005bab` for Notion Blue)
- **Focus**: `2px solid` focus ring in Focus Blue (`#097fe8`) + shadow level 200 reinforcement; supported on all interactive elements via keyboard tab navigation
- **Disabled**: Warm gray (`#a39e98`) text, primary actions reduce to `rgba(0,117,222,0.3)`, ultra-thin border preserved

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 2px, 3px, 4px, 5px, 6px, 7px, 8px, 11px, 12px, 14px, 16px, 24px, 32px
- Non-rigid organic scale with fractional values (5.6px, 6.4px) for micro-adjustments

### Grid & Container
- Max content width: approximately 1200px
- Hero: centered single-column with generous top padding (80-120px)
- Feature sections: 2-3 column grids for cards
- Full-width warm white (`#f6f5f4`) section backgrounds for alternation
- Code/dashboard screenshots as contained with whisper border

### Whitespace Philosophy
- **Generous vertical rhythm**: 64-120px between major sections. Notion lets content breathe with vast vertical padding.
- **Warm alternation**: White sections alternate with warm white (`#f6f5f4`) sections, creating gentle visual rhythm without harsh color breaks.
- **Content-first density**: Body text blocks are compact (line-height 1.50) but surrounded by ample margin, creating islands of readable content in a sea of white space.

### Border Radius Scale
- Micro (4px): Buttons, inputs, functional interactive elements
- Subtle (5px): Links, list items, menu items
- Standard (8px): Small cards, containers, inline elements
- Comfortable (12px): Standard cards, feature containers, image tops
- Large (16px): Hero cards, featured content, promotional blocks
- Full Pill (9999px): Badges, pills, status indicators
- Circle (100%): Tab indicators, avatars

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow, no border | Page background, text blocks |
| Whisper (Level 1) | `1px solid rgba(0,0,0,0.1)` | Standard borders, card outlines, dividers |
| Soft Card (Level 2) | 4-layer shadow stack (max opacity 0.04) | Content cards, feature blocks |
| Deep Card (Level 3) | 5-layer shadow stack (max opacity 0.05, 52px blur) | Modals, featured panels, hero elements |
| Focus (Accessibility) | `2px solid var(--focus-color)` outline | Keyboard focus on all interactive elements |

**Shadow Philosophy**: Notion's shadow system uses multiple layers with extremely low individual opacity (0.01 to 0.05) that accumulate into soft, natural-looking elevation. The 4-layer card shadow spans from 1.04px to 18px blur, creating a gradient of depth rather than a single hard shadow. The 5-layer deep shadow extends to 52px blur at 0.05 opacity, producing ambient occlusion that feels like natural light rather than computer-generated depth. This layered approach makes elements feel embedded in the page rather than floating above it.

### Decorative Depth
- Hero section: decorative character illustrations (playful, hand-drawn style)
- Section alternation: white to warm white (`#f6f5f4`) background shifts
- No hard section borders -- separation comes from background color changes and spacing

## 7. Do's and Don'ts

### Brand Rules

- **DO** use warm near-black for text via `rgba(0,0,0,0.95)` — pure `#000000` reads as cold and clinical against Notion's warm canvas.
- **DON'T** use cold grays (`#9ca3af`, `#6b7280`) — they break the warm yellow-brown undertone that defines Notion's analog feel.
- **DO** apply aggressive negative tracking (-2.125px at 64px) on display headlines using NotionInter (or standard Inter).
- **DON'T** use default tracking on display sizes — Notion's typography is precisely engineered, not casual.
- **DO** use ultra-thin `1px solid rgba(0,0,0,0.1)` borders as the dominant separation pattern — they exist as whispers.
- **DON'T** use heavy borders, opaque colors, or visible shadows — Notion's depth is felt, not seen.
- **DO** stack multi-layer shadows with each layer below 0.05 opacity for cumulative depth.
- **DON'T** use single-layer drop shadows over 0.1 opacity — they read as heavy and break the analog warmth.
- **DO** reserve Notion Blue `#0075de` for CTAs and interactive elements only — it's the singular accent.
- **DON'T** scatter blue across borders, dividers, or decorative elements — the brand uses blue surgically.
- **DO** enable OpenType `"lnum"` and `"locl"` features on larger text — they reward close reading.
- **DON'T** disable these features for Latin-only contexts — they're part of Notion's typographic refinement.

### Accessibility

- **DO** ensure visible focus indicators on every interactive element — `2px solid` outline in Focus Blue (`#097fe8`) plus shadow level 200 reinforcement. Tab navigation must work everywhere.
- **DO** maintain WCAG AA-or-better contrast ratios:
  - Primary text (`rgba(0,0,0,0.95)`) on white: ~18:1 (exceeds WCAG AAA)
  - Secondary text (`#615d59`) on white: ~5.5:1 (WCAG AA)
  - Blue CTA (`#0075de`) on white: ~4.6:1 (WCAG AA for large text)
  - Badge text (`#097fe8`) on badge background (`#f2f9ff`): ~4.5:1 (WCAG AA for large text)
- **DON'T** drop focus rings to "look cleaner" — they are mandatory across the system, not decoration.
- **DON'T** use Notion Blue at less than ~4.5:1 against any background — the brand color carries an accessibility floor.

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile Small | <400px | Tight single column, minimal padding |
| Mobile | 400-600px | Standard mobile, stacked layout |
| Tablet Small | 600-768px | 2-column grids begin |
| Tablet | 768-1080px | Full card grids, expanded padding |
| Desktop Small | 1080-1200px | Standard desktop layout |
| Desktop | 1200-1440px | Full layout, maximum content width |
| Large Desktop | >1440px | Centered, generous margins |

### Touch Targets
- Buttons use comfortable padding (8px-16px vertical)
- Navigation links at 15px with adequate spacing
- Pill badges have 8px horizontal padding for tap targets
- Mobile menu toggle uses standard hamburger button

### Collapsing Strategy
- Hero: 64px display -> scales to 40px -> 26px on mobile, maintains proportional letter-spacing
- Navigation: horizontal links + blue CTA -> hamburger menu
- Feature cards: 3-column -> 2-column -> single column stacked
- Product screenshots: maintain aspect ratio with responsive images
- Trust bar logos: grid -> horizontal scroll on mobile
- Footer: multi-column -> stacked single column
- Section spacing: 80px+ -> 48px on mobile

### Image Behavior
- Workspace screenshots maintain whisper border at all sizes
- Hero illustrations scale proportionally
- Product screenshots use responsive images with consistent border radius
- Full-width warm white sections maintain edge-to-edge treatment

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Notion Blue (`#0075de`)
- Background: Pure White (`#ffffff`)
- Alt Background: Warm White (`#f6f5f4`)
- Heading text: Near-Black (`rgba(0,0,0,0.95)`)
- Body text: Near-Black (`rgba(0,0,0,0.95)`)
- Secondary text: Warm Gray 500 (`#615d59`)
- Muted text: Warm Gray 300 (`#a39e98`)
- Border: `1px solid rgba(0,0,0,0.1)`
- Link: Notion Blue (`#0075de`)
- Focus ring: Focus Blue (`#097fe8`)

### Example Component Prompts
- "Create a hero section on white background. Headline at 64px NotionInter weight 700, line-height 1.00, letter-spacing -2.125px, color rgba(0,0,0,0.95). Subtitle at 20px weight 600, line-height 1.40, color #615d59. Blue CTA button (#0075de, 4px radius, 8px 16px padding, white text) and ghost button (transparent bg, near-black text, underline on hover)."
- "Design a card: white background, 1px solid rgba(0,0,0,0.1) border, 12px radius. Use shadow stack: rgba(0,0,0,0.04) 0px 4px 18px, rgba(0,0,0,0.027) 0px 2.025px 7.85px, rgba(0,0,0,0.02) 0px 0.8px 2.93px, rgba(0,0,0,0.01) 0px 0.175px 1.04px. Title at 22px NotionInter weight 700, letter-spacing -0.25px. Body at 16px weight 400, color #615d59."
- "Build a pill badge: #f2f9ff background, #097fe8 text, 9999px radius, 4px 8px padding, 12px NotionInter weight 600, letter-spacing 0.125px."
- "Create navigation: white header. NotionInter 15px weight 600 for links, near-black text. Blue pill CTA 'Get Notion free' right-aligned (#0075de bg, white text, 4px radius)."
- "Design an alternating section layout: white sections alternate with warm white (#f6f5f4) sections. Each section has 64-80px vertical padding, max-width 1200px centered. Section heading at 48px weight 700, line-height 1.00, letter-spacing -1.5px."

### Iteration Guide
1. Always use warm neutrals -- Notion's grays have yellow-brown undertones (#f6f5f4, #31302e, #615d59, #a39e98), never blue-gray
2. Letter-spacing scales with font size: -2.125px at 64px, -1.875px at 54px, -0.625px at 26px, normal at 16px
3. Four weights: 400 (read), 500 (interact), 600 (emphasize), 700 (announce)
4. Borders are whispers: 1px solid rgba(0,0,0,0.1) -- never heavier
5. Shadows use 4-5 layers with individual opacity never exceeding 0.05
6. The warm white (#f6f5f4) section background is essential for visual rhythm
7. Pill badges (9999px) for status/tags, 4px radius for buttons and inputs
8. Notion Blue (#0075de) is the only saturated color in core UI -- use it sparingly for CTAs and links

---

## 10. Voice & Tone

Notion's voice operates on two registers. Current marketing copy — *"The AI workspace that works for you."*, *"Meet the night shift."*, *"More productivity. Fewer tools."* — is terse, imperative, and confidently practical. But when Notion writes about itself at length (careers, about, long-form blog), the voice shifts to **lineage**: Alan Kay quotes, references to "early computing pioneers", and the now-famous LEGO metaphor *"a set of Legos (if Legos were designed by The New York Times)"*. The dual register is the signature — pragmatic at the surface, intellectual at the foundation.

| Context | Tone |
|---|---|
| Hero headlines | Short, confident, promise-driven. "The AI workspace that works for you." |
| Product feature copy | Consolidation-framed. "More productivity. Fewer tools." Not feature-listy. |
| CTAs | Imperative verb + noun. "Get Notion free", "Contact sales", "Request a demo". |
| Empty states | Encouraging without being perky. Guide the first action, never congratulatory. |
| Docs / help | Neutral, thorough, respects reader's time. Screenshots are high-fidelity and unnarrated. |
| Careers / about | Lineage voice. References pioneers, craft, the LEGO-by-NYT metaphor. |
| Changelog / Release notes | Ship-proud but understated. Past tense, specific, unglamorous. |
| Blog / long-form | Essayistic. Ideas-first; screenshots illustrating ideas, not decorating them. |

**Forbidden phrases.** "Revolutionary", "game-changer", "unleash", "next-generation", "10x". Toast strings like "You're amazing! 🎉". Corporate verbs like "leverage", "synergize", "optimize" as self-descriptors. Emoji at the start of product-surface strings — Notion treats emoji as first-class block icons for *users*; the product's own voice is not emoji-spammy. Adjective stacks on capabilities ("powerful, flexible, intuitive").

## 11. Brand Narrative

Notion was founded in San Francisco by **Ivan Zhao** and **Simon Last** in the mid-2010s. The founding thesis — still centered in Notion's careers and about pages — inherits from the "tools for thought" lineage of Douglas Engelbart and Alan Kay: software as a medium that, in Notion's own phrasing, *"amplify[s] our imagination, extend[s] our intellect, and help[s] us model information in ways never before seen."* Alan Kay is quoted directly on Notion's about page: *"The best way to predict the future is to invent it."* Notion frames itself explicitly as a continuation of that intellectual project.

The product metaphor is **building blocks** — what Notion's own careers page calls *"a set of Legos (if Legos were designed by The New York Times)."* That sentence captures the whole aesthetic in one line: modularity like Lego, but composed with the taste of a high editorial design desk. Every block (text, page, database, embed, toggle) is treated as a small typographic object with the care a New York Times story would get, not a spreadsheet cell.

What Notion refuses: the rigid schemas of traditional productivity software (Jira-style workflows, SharePoint-style wikis), the cold-glass aesthetic of enterprise SaaS (blue-gray palettes, generic illustrations of laptops), and playful-at-the-expense-of-serious design (cartoon mascots, decorative emoji applied by the product itself). What it embraces: warm neutrals with yellow-brown undertones, NotionInter as a modified but restrained Inter, whisper-thin `1px solid rgba(0,0,0,0.1)` borders, and the user's own emoji choices as the primary source of color and personality on any given page.

## 12. Principles

1. **Empower every person to use software their way.** *(Notion values, verbatim.)* The product's job is to bend to the user's shape, not the other way around. Designs that force a workflow (forms, wizards, linear "steps") exist only in onboarding.
2. **Be a truth seeker.** *(Notion values, verbatim.)* Design decisions are backed by evidence or by an explicit opinion — never by hand-wave. When the truth changes, the design changes.
3. **Be kind and direct.** *(Notion values, verbatim.)* Product copy treats users as peers; error messages are specific and blameless; help docs don't patronize. Warmth does not require hedging.
4. **Be a pace setter.** *(Notion values, verbatim.)* Ship rhythm matters more than big unveils. Changelog entries are frequent and specific, not seasonal marketing events.
5. **Blocks are the product.** Every surface — page, doc, database, kanban — is a composition of the same small primitives. The visual treatment of a block is *slightly-smaller-than-invisible*: ultra-thin borders, near-zero shadows, warm neutrals. The block stays out of the way so the user's content can be the thing.
6. **LEGO, but by The New York Times.** The careers page's own phrase is the whole aesthetic guidance. Modular like Lego; composed with editorial taste. Never cartoonish; never sterile.
7. **Warmth is tone, not decoration.** The yellow-brown undertones in every gray (`#f6f5f4`, `#31302e`, `#615d59`) are the warmth. Illustrations and stickers are user-supplied; the product's own chrome provides warmth through color temperature alone.
8. **Notion Blue is the one color.** `#0075de` anchors CTAs and primary interactive moments. Everything else lives in the warm-neutral scale. Rainbow-accent design would betray the block-as-canvas philosophy.
9. **The user's emoji is the brand's color.** Page icons, cover images, emoji-as-bullet — these are first-class design surfaces, but they are *user-supplied*, not part of Notion's own voice. The product's own copy, buttons, and marketing do not emoji-spam.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Notion user segments (knowledge workers, startup operators, writers, researchers, small-team leaders), not individual people.*

**Sophie Tremblay, 29, Montreal.** Operations manager at a 40-person B2B startup. Notion is her single workspace — company wiki, project tracker, personal second brain. Has ~60 pages arranged in a nested hierarchy she has built over three years. Notices immediately when a Notion release subtly shifts the line-height of body text because she reads in Notion for 5 hours a day. Would be horrified by any "redesign" that removed the warm neutral palette.

**Hiroshi Tanaka, 37, Osaka.** Independent researcher and academic writer. Uses Notion for literature review, manuscript drafting, and citation management. Values the block-level typography because his notes include Japanese, English, and occasional LaTeX — NotionInter's `"lnum"` and `"locl"` features matter to him directly. Reads long-form essays on the Notion blog for their ideas-first voice; ignores promotional posts.

**Amaka Obi, 25, Lagos.** Solo founder building a creator-economy SaaS. Uses Notion as internal docs, a public customer FAQ (via publishing), and a public customer-facing changelog. Uses emoji as page icons extensively — the page icons are effectively her brand's color scheme. Notices immediately when a SaaS competitor uses a Notion-clone layout without the "LEGO-by-NYT" taste, and writes them off.

**Priscilla Mendes, 42, Lisbon.** Chief of Staff at a Series-C SaaS company. Runs her CEO's weekly meeting off a Notion database, an embedded calendar, and a toggled prep doc. Does not use Notion AI by default — prefers the empty canvas because it forces her to write the agenda, not delegate it. Would not use Notion if the product copy sounded like it was selling her productivity.

## 14. States

| State | Treatment |
|---|---|
| **Empty (new page)** | White canvas. Single placeholder string in warm gray (`#a39e98`) at body size: "Press `space` for AI, `/` for commands…". Blinking cursor in warm near-black. No illustration, no onboarding tour. The blank page is the welcome. |
| **Empty (database, no rows)** | Warm gray (`#615d59`) caption: "No items yet." One link ("Add a row") in Notion Blue. Database schema visible above, so the user can see what to add to. |
| **Empty (search, no results)** | Warm gray caption: "No results for `<query>`." Nothing else — Notion trusts users to rephrase or move on without illustration. |
| **Loading (page first paint)** | Warm neutral (`#f6f5f4`) skeleton blocks matching the block-level structure of the page. Ultra-thin border maintained on skeleton blocks. 1.5s shimmer in a lighter warm tone. |
| **Loading (block rendering, real-time)** | Individual block renders with a 180ms opacity fade from 0.6 → 1.0. Cursor position preserved. Never a spinner on an individual block. |
| **Error (sync failed)** | Top-right inline indicator — small warm-gray dot that transitions to a muted red when sync fails. Tooltip on hover: specific failure reason + retry action. Never a modal; Notion does not block the document. |
| **Error (form validation, database property)** | Field-level. 13px caption below the property in muted red (not bright). States what is invalid and what would be valid. |
| **Error (AI response failure)** | Inline under the AI action. One line of warm-gray text: "Couldn't complete that. Try again." + reason if known. Blameless, concise. |
| **Success (comment added)** | Comment appears inline with a 300ms fade. No toast, no celebratory emoji. The comment's presence is the confirmation. |
| **Success (page published to web)** | Toast at bottom-left with warm-gray background and near-black text: "Published to web." Link + copy-URL action inline. 5s auto-dismiss. |
| **Skeleton** | Warm neutral `#f6f5f4` blocks at exact block dimensions. Ultra-thin border preserved. Shimmer uses a lighter warm tone, never cool blue. |
| **Disabled** | Opacity on text and ultra-thin border together. Primary Notion Blue actions become `rgba(0,117,222,0.3)`. |
| **AI thinking (Notion AI)** | A small waveform / "thinking" indicator inline at the AI invocation point. Stays within the block flow — never floats over the document. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Selection, toggle commit, keyboard shortcut confirm |
| `motion-fast` | 150ms | Hover, focus, block drag-handle reveal |
| `motion-standard` | 220ms | Sheet, popover, database view switch |
| `motion-slow` | 360ms | Page transitions on marketing surfaces, rare hero reveals |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — popovers, sheets, toggle expand |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |
| `ease-gentle` | `cubic-bezier(0.2, 0.4, 0.2, 1)` | Block opacity fades, toggle-content reveals — slightly softer entry for in-document changes |

**Explicitly forbidden.** No spring, no bounce, no overshoot. Blocks never "pop" into view. A bouncing callout block would undermine the "document as medium" feeling that underwrites the whole product.

**Signature motions.**

1. **Block drag-handle reveal.** On hover over a block's left gutter, the drag handle (`⋮⋮` six-dot icon) fades in at `motion-fast` with `ease-gentle`. This is Notion's single most recognizable motion — the "handle that appears when you look at it" is the tactile proof that everything is a block.
2. **Toggle expand.** When a toggle block opens, its content expands over `motion-standard` with `ease-gentle`, height animating from 0 to natural. No scale, no fade — just height. The toggle's content feels physical, not theatrical.
3. **Slash menu reveal.** The `/` command menu appears at `motion-fast` with `ease-enter`. Keyboard-driven, so speed matters; 150ms is deliberately close to instant.
4. **Cursor-follow comments.** Live collaboration cursors update position at raw frame rate (no easing) — accurate position is more important than smooth motion when multiple people are typing simultaneously.
5. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`. Toggle expansions become instantaneous. Drag handles appear immediately on hover. The document remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Direct verification via WebFetch (2026-04-19):
- https://www.notion.com/ — confirms current marketing positioning and voice:
    "The AI workspace that works for you." (current tagline)
    "Meet the night shift."
    "Keep work moving 24/7."
    "More productivity. Fewer tools."
    "Bring all your work together."
  Confirms Notion's current AI-forward positioning and headline register
  (terse, imperative, consolidation-framed).
- https://www.notion.com/about — confirms the lineage framing:
    "break away from today's tools—and bring back some of the ideas of
     those early pioneers"
    "all-in-one workspace"
    Alan Kay quote: "The best way to predict the future is to invent it."
  Confirms "building blocks" metaphor ("dozens of building blocks") used
  in the product positioning.
- https://www.notion.com/careers — confirms Notion's stated company values
  (verbatim), used as direct source for §12 Principles #1–#4:
    "We are drivers of our mission. We're driven by our commitment to
     empower every person on the planet to use software exactly the way
     they want."
    "Be a pace setter."
    "Be a truth seeker."
    "Be kind and direct."
  Also confirms the famous self-description verbatim:
    "a set of Legos (if Legos were designed by The New York Times)"
  And the pioneers framing:
    "Early computing pioneers envisioned a future where machines on our
     desks could amplify our imagination, extend our intellect, and help
     us model information in ways never before seen."

Base DESIGN.md (sections 1–9) is the source for all token-level claims
(NotionInter typeface, warm neutral palette with yellow-brown undertones,
#0075de Notion Blue as the sole accent, `1px solid rgba(0,0,0,0.1)`
whisper borders, multi-layer shadow stacks with sub-0.05 opacity,
four-weight system 400/500/600/700).

Not independently verified via WebFetch — widely documented public facts used:
- Notion is headquartered in San Francisco.
- Notion was founded by Ivan Zhao (CEO) and Simon Last (CTO).
- The company had an earlier product iteration before the current Notion
  was rebuilt (widely reported in founder interviews).
- "Tools for thought" as an intellectual lineage is associated with
  Douglas Engelbart and Alan Kay; Notion's public positioning invokes
  this tradition without always citing the phrase itself.

Personas (§13) are fictional archetypes informed by publicly observable
Notion user segments (operations managers, researchers, solo founders,
chief-of-staff roles). Names are illustrative; they do not refer to real
people.

Interpretive claims (e.g., "LEGO, but by The New York Times as the whole
aesthetic guidance", "user's emoji is the brand's color", "blocks are
slightly-smaller-than-invisible") are editorial readings connecting
Notion's stated positioning to the design system, not directly sourced
Notion statements.
-->

