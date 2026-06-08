---
id: ferrari
name: Ferrari
country: IT
category: automotive
homepage: "https://www.ferrari.com"
primary_color: "#ff2800"
logo:
  type: simpleicons
  slug: ferrari
verified: "2026-05-15"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  note: "Brand primary is Ferrari Red #DA291C (§2 canonical); frontmatter primary_color #ff2800 is the Rosso swatch reference"
  colors:
    primary: "#DA291C"
    primary-dark: "#B01E0A"
    primary-deep: "#9D2211"
    canvas: "#FFFFFF"
    black: "#000000"
    dark-surface: "#303030"
    light-gray: "#D2D2D2"
    heading: "#181818"
    body: "#666666"
    mid-gray: "#8F8F8F"
    silver: "#969696"
    racing-yellow: "#FFF200"
    modena-yellow: "#F6E500"
    warning: "#F13A2C"
    success: "#03904A"
    info: "#4C98B9"
    link-hover: "#3860BE"
    teal-hover: "#1EAEDB"
  typography:
    family: { sans: "FerrariSans", mono: "FerrariSans" }
    section-title: { size: 26, weight: 500, lineHeight: 1.20, use: "Primary editorial headings on white" }
    card-heading:  { size: 24, weight: 400, use: "Content card titles" }
    subheading:    { size: 18, weight: 700, lineHeight: 1.20, use: "Bold subsection labels" }
    ui-heading:    { size: 16, weight: 500, lineHeight: 1.40, tracking: 0.08, use: "Component headings, nav items" }
    button:        { size: 16, weight: 400, tracking: 1.28, use: "Primary button label, wide tracking" }
    nav-link:      { size: 13, weight: 600, lineHeight: 1.20, tracking: 0.13, use: "Navigation and footer links" }
    caption:       { size: 13, weight: 400, lineHeight: 1.50, tracking: 0.195, use: "Metadata and descriptions" }
    label-upper:   { size: 12, weight: 400, lineHeight: 1.27, tracking: 1, use: "Body-Font uppercase labels, category tags" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 20, xl: 25, section: 80 }
  rounded: { sm: 2, md: 2, lg: 8, full: 9999 }
  shadow:
    subtle: "rgb(153,153,153) 1px 1px 1px 0px"
  components:
    button-primary: { type: button, bg: "#FFFFFF", fg: "#000000", radius: 2, padding: "12px 10px", font: "16px FerrariSans", use: "Default white CTA (hover bg #1EAEDB)" }
    button-subscribe: { type: button, bg: "#DA291C", fg: "#FFFFFF", radius: 2, padding: "12px 10px", use: "High-emphasis Subscribe CTA — only red button" }
    button-ghost: { type: button, bg: "transparent", fg: "#FFFFFF", radius: 2, padding: "12px 10px", use: "Ghost button on dark backgrounds (1px white border)" }
    editorial-card: { type: card, bg: "#FFFFFF", radius: 2, use: "Content card — image above, heading + caption below, no border/shadow" }
    dark-card: { type: card, bg: "#000000", fg: "#FFFFFF", use: "Hero/feature full-bleed cinematic card" }
    input: { type: input, bg: "transparent", fg: "#FFFFFF", radius: 2, use: "Newsletter input on dark (1px #969696 placeholder)" }
    dialog: { type: dialog, bg: "#FFFFFF", radius: 8, use: "Cookie consent modal" }
    label: { type: badge, fg: "#8F8F8F", font: "12px Body-Font uppercase, 1px tracking", use: "Category tag / structural annotation" }
  components_harvested: true
---

# Design System Inspiration of Ferrari

## 1. Visual Theme & Atmosphere

Ferrari's website is a digital editorial — a curated magazine where the Prancing Horse brand is presented with the gravitas of an art institution and the precision of Italian coachwork. The page opens onto an expanse of absolute black, broken only by the iconic Prancing Horse emblem floating alone in its own atmosphere. Below, the content unfolds in dramatic alternations between inky-dark cinematic sections and crisp white editorial panels. This chiaroscuro rhythm — darkness yielding to light, machinery yielding to human story — feels more like paging through a Ferrari yearbook than scrolling a commercial website. Every section is a curated vignette: a concept car dissolving from shadow, two F1 drivers posed with sculptural stillness, a lineup of production models arranged in a jewel-toned parade.

The color language is monastically restrained for a brand built on speed and emotion. Ferrari Red (`#DA291C`) appears with almost surgical sparseness — reserved for the Subscribe CTA and accent moments that need to command immediate attention. The vast majority of the interface lives in black, white, and a carefully calibrated gray scale (from `#303030` dark surfaces through `#8F8F8F` mid-tones to `#D2D2D2` light borders). Two yellows — Racing Yellow (`#FFF200`) and the deeper Modena Yellow (`#F6E500`) — exist in the token system as heritage accents for special contexts, honoring Ferrari's racing provenance. The restraint means that when red does appear, it carries the weight of the entire brand.

Typography relies on FerrariSans — a proprietary sans-serif family with medium-weight headings (500–700) and compact proportions. Display text runs at 24–26px for section titles, while the UI chrome lives at 12–16px in weights ranging from regular to bold. A secondary "Body-Font" custom typeface handles captions and utility text, rendered in uppercase with wide letter-spacing (1px) to create a label-like editorial quality. This two-font system — FerrariSans for narrative authority, Body-Font for structural annotation — gives the site a print-magazine hierarchy. No text decoration is gratuitous. Letter-spacing is tight for headlines and deliberately expanded for labels, creating a visual rhythm that alternates between urgency and composure.

**Key Characteristics:**
- Chiaroscuro layout alternating between deep black sections and clean white editorial panels
- Ferrari Red (`#DA291C`) used with extreme sparseness — accent, not atmosphere
- Prancing Horse emblem as isolated hero element on a void-black field
- FerrariSans proprietary typeface with compact proportions and medium weights
- Photo-journalism imagery: concept renders, driver portraits, lineup parades — each section is a story
- Uppercase Body-Font labels with wide letter-spacing (1px) for editorial annotation
- Nearly zero border-radius (2px default) reflecting precision engineering aesthetics
- Dual-framework architecture (PrimeReact + Element Plus) powering 32+ interactive components
- Carousel-driven hero with editorial slides and arrow/dot navigation

## 2. Color Palette & Roles

### Primary
- **Ferrari Red** (`#DA291C`): The iconic Rosso Corsa — primary accent and CTA color. Used for the Subscribe button, key action triggers, and brand moments where maximum visual authority is needed. The single most important color in the system (--f-color-accent-100)
- **Pure White** (`#FFFFFF`): Primary surface for editorial content panels, navigation text on dark backgrounds, and button fills. The canvas that provides breathing room between dark cinematic sections (--f-color-ui-0)

### Secondary & Accent
- **Dark Red** (`#B01E0A`): Deeper variant of Ferrari Red for hover/pressed states and high-contrast contexts — adds dimensionality to the brand color without introducing a new hue (--f-color-accent-90)
- **Deep Red** (`#9D2211`): The most saturated dark red — used for active states and extra emphasis where even Dark Red needs more weight (--f-color-accent-80)
- **Racing Yellow** (`#FFF200`): Heritage accent from Ferrari's racing livery — reserved for special highlights and motorsport-related contexts (--f-color-yellow-hypersail)
- **Modena Yellow** (`#F6E500`): Slightly warmer and more golden than Racing Yellow — used for secondary heritage accents and category markers (--f-color-yellow)

### Surface & Background
- **Absolute Black** (`#000000`): Hero sections, cinematic backgrounds, and the dominant dark surface — the void that makes imagery and the Prancing Horse emblem float
- **Dark Surface** (`#303030`): Secondary dark surface for footer regions, newsletter sections, and layered dark panels — slightly lifted from pure black for depth differentiation (--f-color-ui-90)
- **Light Gray Surface** (`#D2D2D2`): Subtle alternate surface for dividers and border treatments on white panels (--f-color-ui-20)
- **Overlay Dark** (`hsla(0, 0%, 7%, 0.8)`): Semi-transparent near-black for modal overlays and image caption backgrounds (--f-color-overlay-darker)

### Neutrals & Text
- **Near Black** (`#181818`): Primary body text color on light surfaces — slightly softened from absolute black for better readability (link default color)
- **Dark Gray** (`#666666`): Secondary text and subdued UI labels — used where text needs to recede from the primary hierarchy (--f-color-black-60)
- **Mid Gray** (`#8F8F8F`): Tertiary text for metadata, timestamps, and supportive content (--f-color-black-50)
- **Silver Gray** (`#969696`): Placeholder text and disabled state indicators (--f-color-black-55)

### Semantic & Accent
- **Warning Red** (`#F13A2C`): Accessible warning state — brighter and more orange-shifted than Ferrari Red to differentiate semantic alerts from brand expression (--f-color-accessible-warning)
- **Success Green** (`#03904A`): Confirmation and positive status indicators (--f-color-accessible-success)
- **Info Blue** (`#4C98B9`): Informational callouts, tooltips, and neutral status messaging (--f-color-accessible-info)
- **Link Hover Blue** (`#3860BE`): Interactive hover state for text links — a dignified navy-blue that signals interactivity without competing with Ferrari Red

### Gradient System
- No explicit gradients in the token system
- Depth is achieved through photography and the binary contrast between black and white surfaces
- The overlay darker color (`hsla(0, 0%, 7%, 0.8)`) creates depth through transparency layering over imagery
- Occasional photographic gradients (light falloff in studio shots) provide atmospheric depth within image content

## 3. Typography Rules

### Font Family
- **FerrariSans**: Primary typeface for headings, navigation, buttons, and editorial content. A proprietary sans-serif with medium weight as the default (500), compact x-height, and precise letter-spacing control. Fallbacks: Arial, Helvetica, sans-serif
- **Body-Font**: Secondary typeface for captions, labels, and utility text. Frequently rendered in uppercase with expanded letter-spacing (1px) for an editorial label aesthetic. Used for category tags and small annotation text
- **Arial / Helvetica**: System fallback fonts used in cookie consent modals, form elements, and third-party component frameworks

### Hierarchy

| Role | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|--------|-------------|----------------|-------|
| Section Title | 26px (1.63rem) | 500 | 1.20 | normal | FerrariSans, primary editorial headings on white backgrounds |
| Card Heading | 24px (1.50rem) | 400 | normal | normal | FerrariSans, content card titles |
| Subheading | 18px (1.13rem) | 700 | 1.20 (tight) | normal | FerrariSans, bold subsection labels |
| UI Heading | 16px (1.00rem) | 500 | 1.40 | 0.08px | FerrariSans, component headings and nav items |
| Body Bold | 16px (1.00rem) | 700 | 1.30 (tight) | normal | FerrariSans, emphasized inline text |
| Button Label | 16px (1.00rem) | 400 | normal | 1.28px | FerrariSans, primary button text with wide tracking |
| Small Button | 14.4px (0.90rem) | 700 | 1.00 (tight) | normal | FerrariSans, compact action buttons |
| Nav Link | 13px (0.81rem) | 600 | 1.20 (tight) | 0.13px | FerrariSans, navigation and footer links |
| Caption | 13px (0.81rem) | 400 | 1.50 | 0.195px | FerrariSans/Body-Font, metadata and descriptions |
| Micro Button | 12px (0.75rem) | 700 | 1.00 (tight) | 0.96px | FerrariSans, small CTA with wide tracking |
| Label Upper | 12px (0.75rem) | 400 | 1.27 (tight) | 1px | Body-Font, uppercase labels and category tags |
| Micro Label | 11px (0.69rem) | 400 | 1.27 (tight) | 1px | Body-Font, uppercase smallest annotation text |
| Cookie Text | 45px (2.81rem) | 400 | 1.50 | 0.195px | Arial, consent dialog oversized button text |

### Principles
- **Proprietary identity**: FerrariSans is exclusive to Ferrari — it cannot be substituted without losing brand recognition. The font's compact proportions and medium weight default (500) convey engineering precision
- **Two-register system**: FerrariSans handles narrative voice (headings, content, buttons) while Body-Font handles structural annotation (labels, tags, micro-captions) — this mirrors print magazine conventions of editorial text vs. technical labels
- **Uppercase as emphasis tool**: Body-Font captions use `text-transform: uppercase` with expanded letter-spacing (1px) to create a visually distinct label layer that reads as "informational overlay" rather than primary content
- **Compact line-heights**: Headlines use tight line-heights (1.00–1.30) creating dense, impactful text blocks, while body text opens to 1.50 for comfortable reading — the contrast between compressed headers and relaxed body text creates visual tension
- **Weight range 400–700**: Four weights active in the system (400, 500, 600, 700) — significantly more range than Tesla but still controlled. 500 is the default "voice," 700 is for emphasis, 400 for body, 600 for navigation

## 4. Component Stylings

### Buttons
Ferrari's buttons are minimal white rectangles with near-zero radius — the CTA philosophy is "architecture, not decoration."

**Primary CTA (White)** — The default action button:
- Default: bg `#FFFFFF`, text `#000000`, fontSize 16px (FerrariSans), letterSpacing 1.28px, padding 12px 10px, borderRadius 2px, border 1px solid `#000000`
- Hover: bg `#1EAEDB` (Teal), text `#FFFFFF`, opacity 0.9
- Focus: bg `#1EAEDB`, text `#FFFFFF`, border 1px solid `#FFFFFF`, outline 2px solid `#000000`, opacity 0.9
- Used for: "Configure" actions, secondary calls to action on light backgrounds

**Subscribe CTA (Red)** — The high-emphasis action button:
- Default: bg `#DA291C` (Ferrari Red), text `#FFFFFF`, borderRadius 2px, padding 12px 10px
- Used for: Newsletter subscribe, primary conversion actions on dark backgrounds
- The only button that uses Ferrari Red — reserved for maximum visual priority

**Ghost Button (White Border)** — For dark backgrounds:
- Default: bg transparent, text `#FFFFFF`, border 1px solid `#FFFFFF`, borderRadius 2px, padding 12px 10px
- Hover: bg `#1EAEDB` (Teal), text `#FFFFFF`, opacity 0.9
- Focus: same as Primary CTA focus state
- Used for: Actions overlaid on dark imagery and cinematic sections

**Text Link** — Inline navigation:
- Default: text `#181818` (on light surfaces) or `#FFFFFF` (on dark), no border, no background
- Hover: color shifts to `#3860BE` (Link Hover Blue), decoration removes underline
- White variant on dark surfaces uses underline decoration by default
- FerrariSans or Body-Font depending on context (Body-Font for uppercase label links)

### Cards & Containers

**Editorial Card** (Content sections):
- Background: white
- Border: none
- Shadow: none
- Layout: image above, heading + caption below
- Image treatment: full-width within card, no rounded corners on image
- Text: FerrariSans heading (16–24px) + Body-Font caption (12–13px uppercase)

**Dark Cinematic Card** (Hero/feature sections):
- Background: `#000000` (Absolute Black)
- Full-bleed imagery with text overlay
- No border, no shadow — the darkness IS the container
- Text: white, positioned with careful negative space

**Vehicle Lineup** (Model carousel):
- Horizontal scrollable row of vehicle thumbnails
- Each vehicle on a neutral/white background
- Navigation: arrow buttons + dot indicators
- Background shifts to showcase the selected model's color context

### Inputs & Forms

**Newsletter Input** (Footer section):
- Background: transparent on dark surface
- Text: white
- Border: 1px solid `#CCCCCC`
- Placeholder: `#969696` (Silver Gray)
- Focus: border color transitions (standard browser focus ring)
- Label: Body-Font uppercase, 12px, 1px letter-spacing

**Cookie Consent** (Modal):
- Background: white
- Border radius: 8px (dialog)
- Shadow: `rgb(153, 153, 153) 1px 1px 1px 0px`
- Buttons: oversized (45px Arial), white bg with black border
- Uses standard PrimeReact/Element Plus modal framework

### Navigation
- **Desktop**: Prancing Horse logo centered at top of page, primary navigation below — not a traditional horizontal nav bar but a full-width header block on black background
- **Logo**: Centered Prancing Horse emblem (44×42px) on absolute black — the single most prominent UI element
- **Links**: FerrariSans, 13px, weight 600, white text on dark backgrounds
- **Mobile**: Hamburger collapse to vertical navigation drawer
- **Footer**: Multi-column layout on `#303030` (Dark Surface) with category links in Body-Font uppercase
- **No sticky nav behavior** observed — the page scrolls naturally with the header moving off-screen

### Image Treatment
- **Hero**: Full-width editorial photography on black backgrounds — concept cars in atmospheric studio lighting, editorial portraits with cinematic composition
- **Aspect ratios**: Mixed — landscape (16:9) for hero sections, near-square for portrait/driver imagery, wide panoramic for vehicle lineups
- **Full-bleed vs padded**: Hero images are full-bleed edge-to-edge; editorial content images are padded within white containers
- **Lazy loading**: Below-fold sections use progressive loading (PrimeReact framework handles this)
- **Image quality**: High-resolution photography with studio lighting — no user-generated or lifestyle imagery. Every image is art-directed

### Carousel Component
- Editorial carousel with multiple slides
- Dot indicators for slide position
- Arrow navigation (left/right) at slide edges
- Auto-advancing with manual override
- Content: mixed editorial — event recaps, model launches, racing highlights

## 5. Layout Principles

### Spacing System
- **Base unit**: 8px (detected system base)
- **Scale**: 1px, 2px, 4px, 5px, 6px, 9px, 10px, 11.2px, 12px, 13px, 15px, 16px, 19px, 20px, 25px
- **Button padding**: 12px vertical, 10px horizontal — compact and precise
- **Section padding**: Generous vertical spacing (40–80px estimated) between major content blocks
- **Card gaps**: 16–20px between grid items
- **Footer padding**: 25px horizontal sections within the dark footer block

### Grid & Container
- **Max width**: 1920px (largest breakpoint) with content constraining at narrower widths
- **Hero**: Full-bleed on black, content centered
- **Editorial sections**: 2-column layouts with image + text, alternating sides
- **Vehicle lineup**: Horizontal scroll/carousel, 5–6 models visible at desktop width
- **Footer**: 4-column grid for link categories

### Whitespace Philosophy
Ferrari treats white space as a gallery wall. Each section — whether a concept car render on black void or a pair of F1 drivers on neutral gray — is given its own "room" of breathing space. The alternating black/white sections create a pacing rhythm: dark = immersive moment, white = editorial content, dark = immersive moment. This cadence makes scrolling feel like turning pages in a luxury publication. White space between editorial cards is moderate (not Tesla-extreme) because Ferrari is telling stories, not exhibiting single objects.

### Border Radius Scale
| Value | Context |
|-------|---------|
| 1px | Subtle softening on small inline elements (spans) |
| 2px | Default for buttons, inputs, and interactive elements — barely perceptible, razor-precision |
| 8px | Modal dialogs and overlay containers — the "softest" structural radius |
| 50% | Circular elements: carousel dots, avatar thumbnails, slider handles |

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Level 0 (Flat) | No shadow, no border | Default state for all content sections and cards |
| Level 1 (Subtle) | `rgb(153, 153, 153) 1px 1px 1px 0px` | Rare — cookie consent dialogs and dropdown menus |
| Level 2 (Overlay) | `hsla(0, 0%, 7%, 0.8)` backdrop | Modal overlays and image caption backgrounds |
| Level 3 (Border) | `1px solid #CCCCCC` | Input fields, form containers — depth through delineation not shadow |

### Shadow Philosophy
Ferrari's approach to elevation is nearly as flat as Tesla's, but with a different rationale. Where Tesla avoids shadows for minimalism, Ferrari avoids them because the editorial photography provides all the visual depth needed. The single shadow token (`rgb(153, 153, 153) 1px 1px 1px 0px`) is extremely subtle — a 1-pixel whisper used only in utilitarian contexts like consent dialogs. The site communicates hierarchy through three strategies:
1. **Surface color contrast**: Black sections vs. white sections create unmistakable layering
2. **Overlay transparency**: The `--f-color-overlay-darker` at 80% opacity creates depth without shadow
3. **Photographic depth**: Studio-lit car imagery with reflections, ground shadows, and atmospheric haze provides all the visual dimensionality

### Decorative Depth
- No UI gradients, no glows, no blur effects on interface elements
- The Prancing Horse logo on black creates a "floating in void" effect through pure contrast — no glow or shadow needed
- Dark-to-light section transitions are hard cuts, not gradient blends — reinforcing the editorial page-turn metaphor

## 7. Do's and Don'ts

### Do
- Use Ferrari Red (`#DA291C`) sparingly — only for primary CTAs and brand-critical moments. Its power comes from restraint
- Alternate between black cinematic sections and white editorial sections to create the signature chiaroscuro rhythm
- Use FerrariSans at weight 500 as the default heading voice — it's the typographic equivalent of the engine note
- Apply Body-Font in uppercase with 1px letter-spacing for all labels, category tags, and structural annotations
- Keep border-radius at 2px for all interactive elements — razor precision, not rounded friendliness
- Let photography carry the emotional weight — every image should be art-directed studio quality
- Use the Prancing Horse emblem as a standalone hero element on black — never crowd it with adjacent content
- Maintain the 12px/10px button padding ratio — compact, purposeful, no excess
- Use `#181818` (Near Black) for body text instead of pure `#000000` — the subtle warmth improves readability
- Reserve the yellow accents (`#FFF200`, `#F6E500`) strictly for motorsport and racing heritage contexts

### Don't
- Scatter Ferrari Red across the interface as decoration — it's a CTA signal, not a theme color
- Use rounded-pill buttons or large border-radii — the 2px precision is non-negotiable
- Add box-shadows to cards or content containers — depth comes from surface color contrast and photography
- Mix FerrariSans and Body-Font within the same text block — they serve separate hierarchical functions
- Use colorful backgrounds (blue, green, etc.) for sections — the palette is exclusively black/white/gray with red and yellow accents
- Apply text transforms to FerrariSans headings — uppercase is reserved for Body-Font labels only
- Display low-quality or user-generated imagery — every photograph must meet editorial standards
- Use the Link Hover Blue (`#3860BE`) for anything other than interactive hover states — it's not a brand color
- Create busy layouts with multiple competing focal points — each section should have one clear story
- Override the semantic color system (warning, success, info) with brand colors — `#F13A2C` warning is deliberately different from `#DA291C` brand red

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile Small | ≤375px | Single-column, minimal padding (12px), stacked navigation, hero text scales to ~18px, full-width CTAs |
| Mobile | 376–600px | Single-column, slightly larger padding (16px), hamburger nav, body text at 13px |
| Tablet Small | 601–768px | 2-column editorial grid begins, hero images maintain full-width, footer switches to 2-column |
| Tablet | 769–960px | Full 2-column layout, carousel shows 3 vehicles, padding increases to 20px |
| Desktop | 961–1280px | Full navigation, 2-column editorial with larger imagery, vehicle lineup shows 5 models |
| Large Desktop | 1281–1920px | Maximum content width, generous whitespace, hero photography at full cinematic scale |

### Touch Targets
- Primary CTA buttons: minimum 44px height with 12px vertical padding (meets WCAG AAA 44×44px target)
- Navigation links: 13px text with 1.50 line-height and adequate spacing between items
- Carousel arrows: 44px+ touch targets at viewport edges
- Footer links: grouped with sufficient vertical spacing (16–20px) for touch accuracy

### Collapsing Strategy
- **Navigation**: Full horizontal nav collapses to centered Prancing Horse logo + hamburger menu on mobile
- **Editorial sections**: 2-column image+text layouts collapse to single-column with image stacking above text
- **Vehicle lineup**: Horizontal carousel maintains scroll behavior but reduces visible models from 5 to 2–3
- **Footer**: 4-column link grid collapses to 2-column on tablet, single-column accordion on mobile
- **Hero carousel**: Full-width at all breakpoints, dot indicators and arrows scale proportionally
- **Spacing reduction**: Section padding reduces from 40–80px (desktop) to 20–40px (mobile), maintaining proportional breathing room

### Image Behavior
- Hero images: full-bleed at all breakpoints, using `object-fit: cover` to maintain cinematic composition
- Editorial images: responsive within their containers, maintaining aspect ratio
- Vehicle lineup: thumbnail size scales but maintains consistent car-to-frame proportions
- Art direction: mobile crops may tighten on vehicle subjects, reducing environmental context
- Lazy loading: PrimeReact handles progressive image loading for below-fold content

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: "Ferrari Red (#DA291C)"
- Background Light: "Pure White (#FFFFFF)"
- Background Dark: "Absolute Black (#000000)"
- Secondary Dark Surface: "Dark Surface (#303030)"
- Heading text (light bg): "Near Black (#181818)"
- Body text: "Dark Gray (#666666)"
- Tertiary text: "Mid Gray (#8F8F8F)"
- Border: "Border Gray (#CCCCCC)"
- Button Hover: "Teal (#1EAEDB)"
- Link Hover: "Link Blue (#3860BE)"

### Example Component Prompts
- "Create a hero section on Absolute Black (#000000) background with a centered logo emblem at the top, generous vertical spacing (80px+), and a single editorial headline in FerrariSans at 26px weight 500 in white, with a small Body-Font uppercase caption (12px, 1px letter-spacing) in Silver Gray (#969696) below"
- "Design a Subscribe section on Dark Surface (#303030) with a left-aligned headline in white FerrariSans (24px/500), a subtitle in Mid Gray (#8F8F8F, 13px), an email input with transparent background and 1px #CCCCCC border, and a Ferrari Red (#DA291C) Subscribe button with white text, 2px border-radius, and 12px 10px padding"
- "Build an editorial card on white background with a full-width image (16:9 ratio) above, a FerrariSans heading (16px/700, Near Black #181818) below, and a Body-Font uppercase label (11px, 1px letter-spacing, Mid Gray #8F8F8F) as the category tag — no border, no shadow, no border-radius"
- "Create a vehicle lineup carousel showing 5 car thumbnails in a horizontal scroll on white background, with left/right arrow navigation, dot indicators below, and a FerrariSans model name (16px/500) beneath each vehicle"
- "Design a dark cinematic section with full-bleed studio photography of a concept car on Absolute Black, a white FerrariSans headline (26px/500) positioned in the lower-left with generous padding (40px), and a Ghost Button (transparent bg, 1px white border, white text, 2px radius) as the CTA"

### Iteration Guide
When refining existing screens generated with this design system:
1. Focus on ONE component at a time — Ferrari's editorial rhythm means each section is a self-contained vignette
2. Reference specific color names and hex codes from this document — the palette is small but each color has a precise role
3. Use natural language descriptions, not CSS values — "razor-sharp 2px corners" conveys intent better than "border-radius: 2px"
4. Describe the desired "feel" alongside specific measurements — "editorial magazine page-turn between sections" communicates the layout philosophy better than "margin-bottom: 80px"
5. Always maintain the chiaroscuro contrast — if a section feels flat, check whether it needs to be on black or white to maintain the alternating rhythm
6. Reserve Ferrari Red for ONE element per screen — if red appears in more than one place, it loses its authority

## 10. Voice & Tone

Ferrari's voice is **Maranello-pride and racing-heritage.** Italian-craft pride + chiaroscuro black/white sections + Ferrari Red `#da291c` for one element per screen. Marketing copy emphasizes lineage (Enzo Ferrari, F1 victories, Maranello) over feature lists.

| Context | Tone |
|---|---|
| CTA | Heritage-imperative. "Discover", "Configure", "Reserve" |
| Marketing | Photography first, racing heritage second, copy third |
| Documentation | Sparse — luxury product, minimal docs |
| Error | Polite. "An error occurred. Try again." |

**Voice samples**
- Brand register: "The Power of Dreams" / "Tradition of Innovation" type framing <!-- illustrative -->

**Forbidden phrases.** "Revolutionary supercar". Direct Lamborghini comparison.

## 11. Brand Narrative

**Scuderia Ferrari** — the racing team — was founded **1929** by **Enzo Ferrari** as a Grand Prix outfit affiliated with **Alfa Romeo**, where Enzo had worked through the 1920s ([Enzo Ferrari — Wikipedia](https://en.wikipedia.org/wiki/Enzo_Ferrari)). After Allied bombing forced relocation from Modena, **Ferrari S.p.A. was founded 1947 in Maranello** to build road cars under his own name; the **first car (125 S, V-12 engine, 1947)** secured the brand's **first Grand Prix victory in Rome, May 1947** ([Ferrari — Wikipedia](https://en.wikipedia.org/wiki/Ferrari)). Began as racing manufacturer; road cars sold to fund the F1 program — the inverse of every other carmaker. **NYSE direct listing October 21 2015** under ticker **RACE**, priced at **$52/share** (top of $48-52 range), market cap **~$9.8B**, raised **~$900M** in public capital as part of the **Fiat Chrysler demerger** ([CNBC — Ferrari market debut](https://www.cnbc.com/2015/10/21/ferrari-spikes-15-in-market-debut.html), [Ferrari Corporate — Listing](https://www.ferrari.com/en-EN/corporate/listing-information)). The brand carries Italian craftsmanship + racing heritage as primary positioning. Ferrari Red `#da291c` is iconic — live measurement on `/auto/car-range` confirms it as the **canonical Primary CTA color** (0px sharp, 21px square padding, 16px·400 white text), not a decorative accent. Cinematic chrome elsewhere is text-only ALL CAPS ghost — the imagery is the design.

## 12. Principles

1. **One Ferrari Red per screen.** *UI implication:* if red appears more than once, hierarchy collapses.
2. **Chiaroscuro alternation.** Black ↔ white section rhythm. *UI implication:* never flat all-light or all-dark sequences.
3. **2px tight radius.** *UI implication:* sharp Italian-precision corners.
4. **Photography is the showcase.** *UI implication:* cars dominate, copy supports.
5. **Maranello heritage > tech specs.** *UI implication:* lead with story, not numbers.

## 13. Personas

*Personas are fictional archetypes informed by Ferrari user segments (existing Ferraristi, prospective buyers, racing enthusiasts), not individual people.*

**Marcus Conti, 55, Milan.** Existing Ferrari owner with 3 cars in collection.

**Heinz Müller, 48, Munich.** Track-day enthusiast considering 296 GTB.

**Sofia Park, 42, Seoul.** Tech founder, first Ferrari purchase.

## 14. States

| State | Treatment |
|---|---|
| **Empty (configurator start)** | Model selector with cinematic photography |
| **Empty (no saved configs)** | "Begin your Ferrari" CTA |
| **Loading (config render)** | Real-time 3D rendering |
| **Loading (price)** | Per-option price update |
| **Error (incompatible)** | Constraint explanation |
| **Error (waitlist required)** | "This model is by allocation only — contact dealer" |
| **Success (saved)** | Configuration ID + dealer share |
| **Success (booked test)** | Dealer confirmation |
| **Skeleton (model showcase)** | Black/white placeholders |
| **Disabled (region restricted)** | Region tooltip |
| **Loading (long render)** | Persistent progress |

## 15. Motion & Easing

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Selection |
| `motion-fast` | 200ms | Hover |
| `motion-cinematic` | 600ms | Hero reveals |

Cinematic easing for hero, standard for chrome. `prefers-reduced-motion: reduce` disables hero auto-play.

---

**Verified:** 2026-05-08 (omd:migrate run 24 — Apple-tier)
**Tier 1 sources:** ferrari.com/en-EN home + /en-EN/auto/car-range (live DOM via playwright — Primary `#da291c` Ferrari Red **0px** 21px-square 57px / 16px·400 (SUBSCRIBE on /auto); ALL CAPS 12px·400 ghost nav across chrome; cookie banner 2px / 13.008px·600 utility exception).
**Tier 2 sources:** styles.refero.design / getdesign.md — no record.
**Tier 2 (Philosophy/history):** Wikipedia (Enzo Ferrari + Ferrari company), Britannica, CNBC (2015-10-21 IPO debut), Ferrari Corporate listing page, Fortune.
**Style ref:** `apple` (luxury minimal). **Conflicts unresolved:** none. **Earlier mistake reverted:** prior footer cited cookie banner as canonical Primary; the actual Primary is `#da291c` 0px (cookie 2px is GDPR utility track).
