---
omd: 0.1
brand: Apple
---

# Design System Inspiration of Apple

## 1. Visual Theme & Atmosphere

Apple's website is a masterclass in controlled drama — vast expanses of pure black and near-white serve as cinematic backdrops for products that are photographed as if they were sculptures in a gallery. The design philosophy is reductive to its core: every pixel exists in service of the product, and the interface itself retreats until it becomes invisible. This is not minimalism as aesthetic preference; it is minimalism as reverence for the object.

The typography anchors everything. San Francisco (SF Pro Display for large sizes, SF Pro Text for body) is Apple's proprietary typeface, engineered with optical sizing that automatically adjusts letterforms depending on point size. At display sizes (56px), weight 600 with a tight line-height of 1.07 and subtle negative letter-spacing (-0.28px) creates headlines that feel machined rather than typeset — precise, confident, and unapologetically direct. At body sizes (17px), the tracking loosens slightly (-0.374px) and line-height opens to 1.47, creating a reading rhythm that is comfortable without ever feeling slack.

The color story is starkly binary. Product sections alternate between pure black (`#000000`) backgrounds with white text and light gray (`#f5f5f7`) backgrounds with near-black text (`#1d1d1f`). This creates a cinematic pacing — dark sections feel immersive and premium, light sections feel open and informational. The only chromatic accent is Apple Blue (`#0071e3`), reserved exclusively for interactive elements: links, buttons, and focus states. This singular accent color in a sea of neutrals gives every clickable element unmistakable visibility.

**Key Characteristics:**
- SF Pro Display/Text with optical sizing — letterforms adapt automatically to size context
- Binary light/dark section rhythm: black (`#000000`) alternating with light gray (`#f5f5f7`)
- Single accent color: Apple Blue (`#0071e3`) reserved exclusively for interactive elements
- Product-as-hero photography on solid color fields — no gradients, no textures, no distractions
- Extremely tight headline line-heights (1.07-1.14) creating compressed, billboard-like impact
- Full-width section layout with centered content — the viewport IS the canvas
- Pill-shaped CTAs (980px radius) creating soft, approachable action buttons
- Generous whitespace between sections allowing each product moment to breathe

## 2. Color Palette & Roles

### Primary
- **Pure Black** (`#000000`): Hero section backgrounds, immersive product showcases. The darkest canvas for the brightest products.
- **Light Gray** (`#f5f5f7`): Alternate section backgrounds, informational areas. Not white — the slight blue-gray tint prevents sterility.
- **Near Black** (`#1d1d1f`): Primary text on light backgrounds, dark button fills. Slightly warmer than pure black for comfortable reading.

### Interactive
- **Apple Blue** (`#0071e3`): `--sk-focus-color`, primary CTA backgrounds, focus rings. The ONLY chromatic color in the interface.
- **Link Blue** (`#0066cc`): `--sk-body-link-color`, inline text links. Slightly darker than Apple Blue for text-level readability.
- **Bright Blue** (`#2997ff`): Links on dark backgrounds. Higher luminance for contrast on black sections.

### Text
- **White** (`#ffffff`): Text on dark backgrounds, button text on blue/dark CTAs.
- **Near Black** (`#1d1d1f`): Primary body text on light backgrounds.
- **Black 80%** (`rgba(0, 0, 0, 0.8)`): Secondary text, nav items on light backgrounds. Slightly softened.
- **Black 48%** (`rgba(0, 0, 0, 0.48)`): Tertiary text, disabled states, carousel controls.

### Surface & Dark Variants
- **Dark Surface 1** (`#272729`): Card backgrounds in dark sections.
- **Dark Surface 2** (`#262628`): Subtle surface variation in dark contexts.
- **Dark Surface 3** (`#28282a`): Elevated cards on dark backgrounds.
- **Dark Surface 4** (`#2a2a2d`): Highest dark surface elevation.
- **Dark Surface 5** (`#242426`): Deepest dark surface tone.

### Button States
- **Button Active** (`#ededf2`): Active/pressed state for light buttons.
- **Button Default Light** (`#fafafc`): Search/filter button backgrounds.
- **Overlay** (`rgba(210, 210, 215, 0.64)`): Media control scrims, overlays.
- **White 32%** (`rgba(255, 255, 255, 0.32)`): Hover state on dark modal close buttons.

### Shadows
- **Card Shadow** (`rgba(0, 0, 0, 0.22) 3px 5px 30px 0px`): Soft, diffused elevation for product cards. Offset and wide blur create a natural, photographic shadow.

## 3. Typography Rules

### Font Family
- **Display**: `SF Pro Display`, with fallbacks: `SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif`
- **Body**: `SF Pro Text`, with fallbacks: `SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif`
- SF Pro Display is used at 20px and above; SF Pro Text is optimized for 19px and below.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | SF Pro Display | 56px (3.50rem) | 600 | 1.07 (tight) | -0.28px | Product launch headlines, maximum impact |
| Section Heading | SF Pro Display | 40px (2.50rem) | 600 | 1.10 (tight) | normal | Feature section titles |
| Tile Heading | SF Pro Display | 28px (1.75rem) | 400 | 1.14 (tight) | 0.196px | Product tile headlines |
| Card Title | SF Pro Display | 21px (1.31rem) | 700 | 1.19 (tight) | 0.231px | Bold card headings |
| Sub-heading | SF Pro Display | 21px (1.31rem) | 400 | 1.19 (tight) | 0.231px | Regular card headings |
| Nav Heading | SF Pro Text | 34px (2.13rem) | 600 | 1.47 | -0.374px | Large navigation headings |
| Sub-nav | SF Pro Text | 24px (1.50rem) | 300 | 1.50 | normal | Light sub-navigation text |
| Body | SF Pro Text | 17px (1.06rem) | 400 | 1.47 | -0.374px | Standard reading text |
| Body Emphasis | SF Pro Text | 17px (1.06rem) | 600 | 1.24 (tight) | -0.374px | Emphasized body text, labels |
| Button Large | SF Pro Text | 18px (1.13rem) | 300 | 1.00 (tight) | normal | Large button text, light weight |
| Button | SF Pro Text | 17px (1.06rem) | 400 | 2.41 (relaxed) | normal | Standard button text |
| Link | SF Pro Text | 14px (0.88rem) | 400 | 1.43 | -0.224px | Body links, "Learn more" |
| Caption | SF Pro Text | 14px (0.88rem) | 400 | 1.29 (tight) | -0.224px | Secondary text, descriptions |
| Caption Bold | SF Pro Text | 14px (0.88rem) | 600 | 1.29 (tight) | -0.224px | Emphasized captions |
| Micro | SF Pro Text | 12px (0.75rem) | 400 | 1.33 | -0.12px | Fine print, footnotes |
| Micro Bold | SF Pro Text | 12px (0.75rem) | 600 | 1.33 | -0.12px | Bold fine print |
| Nano | SF Pro Text | 10px (0.63rem) | 400 | 1.47 | -0.08px | Legal text, smallest size |

### Principles
- **Optical sizing as philosophy**: SF Pro automatically switches between Display and Text optical sizes. Display versions have wider letter spacing and thinner strokes optimized for large sizes; Text versions are tighter and sturdier for small sizes. This means the font literally changes its DNA based on context.
- **Weight restraint**: The scale spans 300 (light) to 700 (bold) but most text lives at 400 (regular) and 600 (semibold). Weight 300 appears only on large decorative text. Weight 700 is rare, used only for bold card titles.
- **Negative tracking at all sizes**: Unlike most systems that only track headlines, Apple applies subtle negative letter-spacing even at body sizes (-0.374px at 17px, -0.224px at 14px, -0.12px at 12px). This creates universally tight, efficient text.
- **Extreme line-height range**: Headlines compress to 1.07 while body text opens to 1.47, and some button contexts stretch to 2.41. This dramatic range creates clear visual hierarchy through rhythm alone.

## 4. Component Stylings

### Buttons

**Primary Blue (CTA)**
- Background: `#0071e3` (Apple Blue)
- Text: `#ffffff`
- Padding: 8px 15px
- Radius: 8px
- Border: 1px solid transparent
- Font: SF Pro Text, 17px, weight 400
- Hover: background brightens slightly
- Active: `#ededf2` background shift
- Focus: `2px solid var(--sk-focus-color, #0071E3)` outline
- Use: Primary call-to-action ("Buy", "Shop iPhone")

**Primary Dark**
- Background: `#1d1d1f`
- Text: `#ffffff`
- Padding: 8px 15px
- Radius: 8px
- Font: SF Pro Text, 17px, weight 400
- Use: Secondary CTA, dark variant

**Pill Link (Learn More / Shop)**
- Background: transparent
- Text: `#0066cc` (light bg) or `#2997ff` (dark bg)
- Radius: 980px (full pill)
- Border: 1px solid `#0066cc`
- Font: SF Pro Text, 14px-17px
- Hover: underline decoration
- Use: "Learn more" and "Shop" links — the signature Apple inline CTA

**Filter / Search Button**
- Background: `#fafafc`
- Text: `rgba(0, 0, 0, 0.8)`
- Padding: 0px 14px
- Radius: 11px
- Border: 3px solid `rgba(0, 0, 0, 0.04)`
- Focus: `2px solid var(--sk-focus-color, #0071E3)` outline
- Use: Search bars, filter controls

**Media Control**
- Background: `rgba(210, 210, 215, 0.64)`
- Text: `rgba(0, 0, 0, 0.48)`
- Radius: 50% (circular)
- Active: scale(0.9), background shifts
- Focus: `2px solid var(--sk-focus-color, #0071e3)` outline, white bg, black text
- Use: Play/pause, carousel arrows

### Cards & Containers
- Background: `#f5f5f7` (light) or `#272729`-`#2a2a2d` (dark)
- Border: none (borders are rare in Apple's system)
- Radius: 5px-8px
- Shadow: `rgba(0, 0, 0, 0.22) 3px 5px 30px 0px` for elevated product cards
- Content: centered, generous padding
- Hover: no standard hover state — cards are static, links within them are interactive

### Navigation
- Background: `rgba(0, 0, 0, 0.8)` (translucent dark) with `backdrop-filter: saturate(180%) blur(20px)`
- Height: 48px (compact)
- Text: `#ffffff` at 12px, weight 400
- Active: underline on hover
- Logo: Apple logomark (SVG) centered or left-aligned, 17x48px viewport
- Mobile: collapses to hamburger with full-screen overlay menu
- The nav floats above content, maintaining its dark translucent glass regardless of section background

### Image Treatment
- Products on solid-color fields (black or white) — no backgrounds, no context, just the object
- Full-bleed section images that span the entire viewport width
- Product photography at extremely high resolution with subtle shadows
- Lifestyle images confined to rounded-corner containers (12px+ radius)

### Distinctive Components

**Product Hero Module**
- Full-viewport-width section with solid background (black or `#f5f5f7`)
- Product name as the primary headline (SF Pro Display, 56px, weight 600)
- One-line descriptor below in lighter weight
- Two pill CTAs side by side: "Learn more" (outline) and "Buy" / "Shop" (filled)

**Product Grid Tile**
- Square or near-square card on contrasting background
- Product image dominating 60-70% of the tile
- Product name + one-line description below
- "Learn more" and "Shop" link pair at bottom

**Feature Comparison Strip**
- Horizontal scroll of product variants
- Each variant as a vertical card with image, name, and key specs
- Minimal chrome — the products speak for themselves

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 2px, 4px, 5px, 6px, 7px, 8px, 9px, 10px, 11px, 14px, 15px, 17px, 20px, 24px
- Notable characteristic: the scale is dense at small sizes (2-11px) with granular 1px increments, then jumps in larger steps. This allows precise micro-adjustments for typography and icon alignment.

### Grid & Container
- Max content width: approximately 980px (the recurring "980px radius" in pill buttons echoes this width)
- Hero: full-viewport-width sections with centered content block
- Product grids: 2-3 column layouts within centered container
- Single-column for hero moments — one product, one message, full attention
- No visible grid lines or gutters — spacing creates implied structure

### Whitespace Philosophy
- **Cinematic breathing room**: Each product section occupies a full viewport height (or close to it). The whitespace between products is not empty — it is the pause between scenes in a film.
- **Vertical rhythm through color blocks**: Rather than using spacing alone to separate sections, Apple uses alternating background colors (black, `#f5f5f7`, white). Each color change signals a new "scene."
- **Compression within, expansion between**: Text blocks are tightly set (negative letter-spacing, tight line-heights) while the space surrounding them is vast. This creates a tension between density and openness.

### Border Radius Scale
- Micro (5px): Small containers, link tags
- Standard (8px): Buttons, product cards, image containers
- Comfortable (11px): Search inputs, filter buttons
- Large (12px): Feature panels, lifestyle image containers
- Full Pill (980px): CTA links ("Learn more", "Shop"), navigation pills
- Circle (50%): Media controls (play/pause, arrows)

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow, solid background | Standard content sections, text blocks |
| Navigation Glass | `backdrop-filter: saturate(180%) blur(20px)` on `rgba(0,0,0,0.8)` | Sticky navigation bar — the glass effect |
| Subtle Lift (Level 1) | `rgba(0, 0, 0, 0.22) 3px 5px 30px 0px` | Product cards, floating elements |
| Media Control | `rgba(210, 210, 215, 0.64)` background with scale transforms | Play/pause buttons, carousel controls |
| Focus (Accessibility) | `2px solid #0071e3` outline | Keyboard focus on all interactive elements |

**Shadow Philosophy**: Apple uses shadow extremely sparingly. The primary shadow (`3px 5px 30px` with 0.22 opacity) is soft, wide, and offset — mimicking a diffused studio light casting a natural shadow beneath a physical object. This reinforces the "product as physical sculpture" metaphor. Most elements have NO shadow at all; elevation comes from background color contrast (dark card on darker background, or light card on slightly different gray).

### Decorative Depth
- Navigation glass: the translucent, blurred navigation bar is the most recognizable depth element, creating a sense of floating UI above scrolling content
- Section color transitions: depth is implied by the alternation between black and light gray sections rather than by shadows
- Product photography shadows: the products themselves cast shadows in their photography, so the UI doesn't need to add synthetic ones

## 7. Do's and Don'ts

### Do
- Use SF Pro Display at 20px+ and SF Pro Text below 20px — respect the optical sizing boundary
- Apply negative letter-spacing at all text sizes (not just headlines) — Apple tracks tight universally
- Use Apple Blue (`#0071e3`) ONLY for interactive elements — it must be the singular accent
- Alternate between black and light gray (`#f5f5f7`) section backgrounds for cinematic rhythm
- Use 980px pill radius for CTA links — the signature Apple link shape
- Keep product imagery on solid-color fields with no competing visual elements
- Use the translucent dark glass (`rgba(0,0,0,0.8)` + blur) for sticky navigation
- Compress headline line-heights to 1.07-1.14 — Apple headlines are famously tight

### Don't
- Don't introduce additional accent colors — the entire chromatic budget is spent on blue
- Don't use heavy shadows or multiple shadow layers — Apple's shadow system is one soft diffused shadow or nothing
- Don't use borders on cards or containers — Apple almost never uses visible borders (except on specific buttons)
- Don't apply wide letter-spacing to SF Pro — it is designed to run tight at every size
- Don't use weight 800 or 900 — the maximum is 700 (bold), and even that is rare
- Don't add textures, patterns, or gradients to backgrounds — solid colors only
- Don't make the navigation opaque — the glass blur effect is essential to the Apple UI identity
- Don't center-align body text — Apple body copy is left-aligned; only headlines center
- Don't use rounded corners larger than 12px on rectangular elements (980px is for pills only)

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Small Mobile | <360px | Minimum supported, single column |
| Mobile | 360-480px | Standard mobile layout |
| Mobile Large | 480-640px | Wider single column, larger images |
| Tablet Small | 640-834px | 2-column product grids begin |
| Tablet | 834-1024px | Full tablet layout, expanded nav |
| Desktop Small | 1024-1070px | Standard desktop layout begins |
| Desktop | 1070-1440px | Full layout, max content width |
| Large Desktop | >1440px | Centered with generous margins |

### Touch Targets
- Primary CTAs: 8px 15px padding creating ~44px touch height
- Navigation links: 48px height with adequate spacing
- Media controls: 50% radius circular buttons, minimum 44x44px
- "Learn more" pills: generous padding for comfortable tapping

### Collapsing Strategy
- Hero headlines: 56px Display → 40px → 28px on mobile, maintaining tight line-height proportionally
- Product grids: 3-column → 2-column → single column stacked
- Navigation: full horizontal nav → compact mobile menu (hamburger)
- Product hero modules: full-bleed maintained at all sizes, text scales down
- Section backgrounds: maintain full-width color blocks at all breakpoints — the cinematic rhythm never breaks
- Image sizing: products scale proportionally, never crop — the product silhouette is sacred

### Image Behavior
- Product photography maintains aspect ratio at all breakpoints
- Hero product images scale down but stay centered
- Full-bleed section backgrounds persist at every size
- Lifestyle images may crop on mobile but maintain their rounded corners
- Lazy loading for below-fold product images

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Apple Blue (`#0071e3`)
- Page background (light): `#f5f5f7`
- Page background (dark): `#000000`
- Heading text (light): `#1d1d1f`
- Heading text (dark): `#ffffff`
- Body text: `rgba(0, 0, 0, 0.8)` on light, `#ffffff` on dark
- Link (light bg): `#0066cc`
- Link (dark bg): `#2997ff`
- Focus ring: `#0071e3`
- Card shadow: `rgba(0, 0, 0, 0.22) 3px 5px 30px 0px`

### Example Component Prompts
- "Create a hero section on black background. Headline at 56px SF Pro Display weight 600, line-height 1.07, letter-spacing -0.28px, color white. One-line subtitle at 21px SF Pro Display weight 400, line-height 1.19, color white. Two pill CTAs: 'Learn more' (transparent bg, white text, 1px solid white border, 980px radius) and 'Buy' (Apple Blue #0071e3 bg, white text, 8px radius, 8px 15px padding)."
- "Design a product card: #f5f5f7 background, 8px border-radius, no border, no shadow. Product image top 60% of card on solid background. Title at 28px SF Pro Display weight 400, letter-spacing 0.196px, line-height 1.14. Description at 14px SF Pro Text weight 400, color rgba(0,0,0,0.8). 'Learn more' and 'Shop' links in #0066cc at 14px."
- "Build the Apple navigation: sticky, 48px height, background rgba(0,0,0,0.8) with backdrop-filter: saturate(180%) blur(20px). Links at 12px SF Pro Text weight 400, white text. Apple logo left, links centered, search and bag icons right."
- "Create an alternating section layout: first section black bg with white text and centered product image, second section #f5f5f7 bg with #1d1d1f text. Each section near full-viewport height with 56px headline and two pill CTAs below."
- "Design a 'Learn more' link: text #0066cc on light bg or #2997ff on dark bg, 14px SF Pro Text, underline on hover. After the text, include a right-arrow chevron character (>). Wrap in a container with 980px border-radius for pill shape when used as a standalone CTA."

### Iteration Guide
1. Every interactive element gets Apple Blue (`#0071e3`) — no other accent colors
2. Section backgrounds alternate: black for immersive moments, `#f5f5f7` for informational moments
3. Typography optical sizing: SF Pro Display at 20px+, SF Pro Text below — never mix
4. Negative letter-spacing at all sizes: -0.28px at 56px, -0.374px at 17px, -0.224px at 14px, -0.12px at 12px
5. The navigation glass effect (translucent dark + blur) is non-negotiable — it defines the Apple web experience
6. Products always appear on solid color fields — never on gradients, textures, or lifestyle backgrounds in hero modules
7. Shadow is rare and always soft: `3px 5px 30px 0.22 opacity` or nothing at all
8. Pill CTAs use 980px radius — this creates the signature Apple rounded-rectangle-that-looks-like-a-capsule shape

---

## 10. Voice & Tone

Apple's marketing voice is famously terse, confident, and carefully modulated. The register assumes the audience already knows Apple and is here to learn the specifics. Headlines are short declaratives ("The most powerful Mac we've ever built"), rarely contain more than seven words, and use period punctuation instead of exclamations. Superlatives exist but are **self-comparative** ("the most [X] we've ever built"), never industry-comparative ("the world's best") without a footnoted benchmark. On HIG and developer documentation surfaces the voice shifts slightly — more explicit, more prescriptive — but retains the same clarity discipline.

| Context | Tone |
|---|---|
| Hero headlines | Short declarative. "Hello, new iPhone." "Supercharged by Apple Silicon." |
| Product specs | Numeric, specific, never adjectival. "Up to 20% faster CPU performance." |
| CTAs | Verb + noun, minimal. "Buy", "Learn more", "Watch the film". Never "Shop now!". |
| Error / system messages | Specific + actionable. Apple's OS-level error copy is the gold standard. |
| HIG / developer docs | Prescriptive, example-driven, peer-to-peer. |
| Legal / safety | Formal, precise. Reads like FDA labeling. |
| Marketing film voiceover | Slow, confident, pause-heavy. Never rushed. |
| Support copy | Warm but exact. "Here's how to fix that." Not apologetic theater. |
| Onboarding | One idea per screen; generous whitespace, single accent color. |

**Forbidden phrases.** "Revolutionary" as a marketing adjective — Apple reserves this word for actual paradigm shifts and uses it rarely. "Unleash", "supercharge" as decorative adjectives (Apple will use *"Supercharged by Apple Silicon"* structurally but never decoratively). Lightning-adjective pairings ("lightning-fast"). Emoji anywhere in product-surface copy or HIG. Exclamation marks on marketing CTAs. Superlative stacks ("the most powerful, most beautiful, most intuitive..."). Industry-comparative claims without a footnote or specific benchmark.

## 11. Brand Narrative

Apple was founded in 1976 in Los Altos, California, by **Steve Jobs, Steve Wozniak, and Ronald Wayne**. The company's design posture — informed by Steve Jobs' famous calligraphy class at Reed College and by the founders' shared appreciation of **Dieter Rams' "10 Principles of Good Design"** — has stayed remarkably consistent through multiple design-leadership eras (Jony Ive for roughly two decades, followed by Evans Hankey, then Alan Dye and the current design leadership).

Apple's publicly documented design philosophy lives in the **Human Interface Guidelines (HIG)** — a continuously maintained set of guidelines with three canonical principles formalized in iOS 7 (2013): **Clarity** (*"text is readable at any size, icons are precise and lucid, and adornments are kept to a minimum"*), **Deference** (*"The UI should step back and let user content take center stage"*), and **Depth** (layering, shadows, and motion to convey hierarchy and create a sense of vitality). These three words have anchored Apple's interface design for over a decade and remain the vocabulary any Apple-platform designer is expected to know.

The contemporary expression of those principles is **Liquid Glass**, announced on **June 9, 2025, at WWDC** — the first cross-platform material update since iOS 7, extending uniformly across **iOS 26, iPadOS 26, macOS Tahoe 26, watchOS 26, and tvOS 26**. As **Alan Dye**, Apple's VP of Human Interface Design, described it in the official announcement: *"It combines the optical qualities of glass with a fluidity only Apple can achieve, as it transforms depending on your content or context."* The material *"is translucent and behaves like glass in the real world. Its color is informed by surrounding content and intelligently adapts between light and dark environments"* and *"uses real-time rendering and dynamically reacts to movement with specular highlights."* Liquid Glass is, in effect, **Depth promoted from visual metaphor to actual material behavior** — the same HIG principle, now rendered via real-time lensing and refraction rather than static layers.

What Apple refuses: decorative interface elements (*"adornments are kept to a minimum"* is HIG-verbatim), generic stock photography, marketing superlatives without quantitative backing, competitor name-calling in marketing, and visual inconsistency across platforms. What it embraces: **San Francisco** as a proprietary typeface engineered with optical sizing (letterforms automatically adjust to point size), the binary black / light-gray section rhythm as cinematic pacing, Apple Blue (`#0071e3`) reserved exclusively for interactive elements, pill-shaped CTAs at 980px radius, and **product-as-sculpture** photography on solid color fields — no gradients, no textures, no distractions from the object.

## 12. Principles

1. **Clarity.** *(HIG canonical principle, verbatim.)* Text is readable at any size. Icons are precise and lucid. Adornments are kept to a minimum. Focus on essential content to support functionality. This is the principle most designers cite when justifying a Jobs-era simplification.
2. **Deference.** *(HIG canonical principle, verbatim.)* The UI steps back and lets user content take center stage. Controls exist to support content, never to compete with it. This is why Apple's photography-heavy product pages feel empty of "design" — the emptiness IS the deference.
3. **Depth.** *(HIG canonical principle.)* Visual layers and motion communicate hierarchy, convey vitality, and facilitate understanding. Depth is how Apple replaces traditional borders and decorative chrome — physics rather than ornament.
4. **Consistency across platforms.** A text field in iOS, macOS, iPadOS, watchOS, and visionOS should feel like it belongs to the same family. Consistency is why Apple writes HIG as a single document set rather than letting each platform drift.
5. **Self-comparative superlatives only.** "The most powerful Mac we've ever built" is acceptable. "The world's most powerful laptop" requires a footnote citing benchmarks. This discipline makes Apple's big claims land when they are made.
6. **One accent color at a time.** Apple Blue (`#0071e3`) is the web-marketing accent for interactive elements. In-product accent is configurable per user. But on any given surface, interactive elements share one accent; rainbow decoration is forbidden.
7. **Product-as-sculpture photography.** Every product shot treats the object as a sculpture on a solid color field. No lifestyle context, no model holding it, no gradient background in hero modules. The product's industrial design must be legible in the photography.
8. **Motion is physics, not time-curve.** Apple interfaces borrow from spring physics — elements have mass, velocity, and inertia. Motion is never flat linear; it is also never cartoonish overshoot. The goal is *"how a well-made physical object would move in air"*.
9. **"It just works" is a design commitment.** The phrase is Steve Jobs-era but continues as an implicit design target. When it doesn't just work, the error message explains specifically why — a broken promise is made honest rather than hidden.
10. **SF (San Francisco) is the typographic voice.** Proprietary, optical-sized, the only text treatment on marketing and in-product surfaces. Substituting a third-party font breaks the voice, even when the type looks superficially similar.
11. **Material as behavior, not decoration.** *(Contemporary extension via Liquid Glass, 2025.)* Translucency, refraction, real-time lensing, and specular response to device motion are treated as first-class material properties that react to content and light — not decorative skeuomorphism. This is how Depth has evolved from a visual metaphor (iOS 7) into an actual material that behaves like glass (iOS 26).

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Apple user segments (creative professionals, developers, mainstream consumers, education / young users), not individual people.*

**Sara Klein, 35, Berlin.** UX designer at a mid-size agency. Uses a MacBook Pro for work and an iPhone personally. Watches Apple keynotes in full — not for news but for the pacing. Appreciates that Apple's marketing voice is terse enough to respect her time. Immediately notices when another software product uses Apple-pattern elements (SF font, Apple Blue, pill CTAs) without the underlying discipline — calls this "Apple-clone aesthetic" in Slack.

**Jamal Ansari, 29, Dubai.** iOS developer at a consumer fintech startup. Reads every section of the Human Interface Guidelines once per major iOS release. Appreciates that HIG is *prescriptive* — tells him what to do, not just what to consider. Rejects features his PM proposes that would violate HIG because "Apple will reject it in App Review" is both a true statement and a useful shield.

**Joanna Williams, 57, Edinburgh.** Manages a small accounting practice. Uses her iPad Pro as her primary computer because she finds the Mac too complicated for her current workflow. Does not think about Apple's design; she experiences it. Would describe the iPad as "easier than my old computer" and could not articulate why — which is exactly what Apple's design philosophy is designed to produce.

**Miguel Castro, 16, São Paulo.** High school student using a family iPhone for school, social, and creative work (photography, iMovie). Has never used a non-Apple phone and treats HIG-shaped interactions as the default mental model of how computers work. Will internally find Android phones "confusing" when he eventually uses one — eight years of HIG consistency have taught him a specific interaction vocabulary.

## 14. States

| State | Treatment |
|---|---|
| **Empty (search, no results)** | SF text at 17px, near-black (`#1d1d1f`) on white: "No results for `<query>`." No illustration. One link in Apple Blue to adjust search or view suggestions. |
| **Empty (first launch of an app)** | Dedicated welcome flow with centered SF headline at display size and a single Apple Blue CTA. Onboarding never covers multiple concepts per screen. |
| **Loading (dashboard / app shell)** | Skeleton rectangles in `#f5f5f7` matching final content structure. Shimmer pass uses a lighter gray; never blue-tinted. |
| **Loading (pull-to-refresh)** | Native iOS / macOS refresh indicator — a spring-animated arc that follows the gesture. Uses system Depth principle: the indicator has physics. |
| **Error (network / system)** | Full-screen or modal treatment depending on severity. SF headline + 1-sentence specific cause + 1 recovery CTA. Never a generic "Something went wrong". No emoji, no illustration. |
| **Error (form validation)** | Field-level. Border shifts to system red (iOS) or equivalent. 13px caption below in system red, specific about what is invalid. |
| **Error (app crash / unexpected quit)** | Crash report offered to send to Apple; user-facing copy acknowledges the problem without blame ("The app quit unexpectedly"). No apology theater, no emoji. |
| **Success (purchase completed)** | Dedicated confirmation — checkmark animation drawn over ~600ms with spring easing, summary of what was purchased, delivery date if physical. Quiet, not celebratory. |
| **Success (action committed)** | Subtle haptic + brief UI acknowledgement (checkmark appearing where the action happened). No toast, no notification for routine actions. |
| **Skeleton** | Light gray (`#f5f5f7`) blocks at exact final dimensions. Shimmer in an even lighter gray. Skeletons preserve the same radius geometry as final content. |
| **Disabled** | System opacity reduction. Apple Blue becomes a lighter, desaturated blue. Geometry stable; pill buttons stay pills. |
| **Loading (long task, installation or system update)** | Progress bar with precise percent + current step label. Time estimate if available. Apple never hides progress behind an indeterminate spinner when determinate information exists. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | State commits, selection confirm |
| `motion-fast` | 150ms | Hover (desktop), tap feedback, small reveals |
| `motion-standard` | 300ms | Sheet, modal, view push / pop |
| `motion-slow` | 500ms | Dedicated hero moments, onboarding step advance |
| `motion-spring` | variable (physics-based) | Pull-to-refresh, swipe-to-dismiss, rubber-band scroll |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — sheets, modals, view transitions |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |
| `ease-spring` | spring physics (mass, stiffness, damping) | Gesture-driven elements — physics rather than cubic-bezier |

**Spring parameters.** Apple's motion system distinguishes itself from most design systems by using actual **spring physics** (mass / stiffness / damping) for gesture-driven elements rather than cubic-bezier curves. When an element responds to a user's drag or swipe, the motion should *feel like mass* — the object has weight, a velocity when released, and a natural settling rather than a programmed decelerate.

**Signature motions.**

1. **Pull-to-refresh.** The refresh indicator appears via spring physics as the user drags. When released below threshold, it springs back. When released above, it detaches and shows the refreshing state. This is the single most-copied motion in mobile UX and it works because it is physics-driven, not time-driven.
2. **Swipe-to-dismiss / swipe-to-action.** Table rows and cards use spring physics to respond to horizontal drag. Partial swipes spring back; full swipes commit with a natural overshoot-then-settle.
3. **Rubber-band scroll.** When a list is scrolled past its top or bottom, it resists with increasing spring tension, then rubber-bands back on release. Apple's signature physics moment; present on every Apple platform since the original iPhone.
4. **Sheet and modal presentation.** Sheets rise with spring physics — the sheet has mass that settles into its final position, rather than arriving on a time curve. Dismissal uses a slightly faster spring with more damping.
5. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all spring motions degrade to instant appearances or simple crossfades. This is enforced at OS level, not just app level — an Apple app that ignores Reduce Motion is a HIG violation and may be rejected in App Review.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Direct verification via WebFetch / WebSearch (2026-04-19):
- https://developer.apple.com/design/ — confirms the Apple Design portal
  exists and references "Human Interface Guidelines", "SF Symbols", and
  "Apple Design Resources" as first-class developer resources. Marketing
  tagline for developer design verified: "Design incredible apps and games
  that integrate seamlessly with Apple platforms."
- https://developer.apple.com/design/human-interface-guidelines — HIG
  landing page existence confirmed (the specific principles copy was not
  directly verifiable on the landing shell, so the three canonical
  principles were cross-confirmed via WebSearch).
- https://www.apple.com/newsroom/2025/06/apple-introduces-a-delightful-and-elegant-new-software-design/
  — Apple's official newsroom announcement of Liquid Glass (WWDC, 9 June 2025).
  Verbatim quotes used in §11 and §12 #11:
    Alan Dye (VP of Human Interface Design): "It combines the optical
    qualities of glass with a fluidity only Apple can achieve, as it
    transforms depending on your content or context."
    "This translucent material reflects and refracts its surroundings,
     while dynamically transforming to help bring greater focus to content."
    "The new material, Liquid Glass, is translucent and behaves like glass
     in the real world. Its color is informed by surrounding content and
     intelligently adapts between light and dark environments."
    "Liquid Glass uses real-time rendering and dynamically reacts to
     movement with specular highlights."
  Platforms confirmed: iOS 26, iPadOS 26, macOS Tahoe 26, watchOS 26, tvOS 26.
- WebSearch: Apple HIG core design principles "Clarity / Deference / Depth" —
  widely reported verbatim across secondary sources summarizing HIG:
    "Clarity: text is readable at any size, icons are precise and lucid,
     and adornments are kept to a minimum."
    "Deference: The UI should step back and let user content take center
     stage. Fluid animations and translucent or subtle UI elements help
     the content shine without distraction."
    "Depth: layering, shadows, and visual effects... creating a sense of
     hierarchy and a multi-dimensional experience that guides users
     naturally through the app."
  These three principles were formalized by Apple in iOS 7 (2013) and
  remain the anchor vocabulary of Apple platform design, now extended
  through the Liquid Glass material announced in 2025.

Base DESIGN.md (sections 1–9) is the source for all token-level claims
(SF Pro Display / SF Pro Text proprietary typefaces with optical sizing,
binary #000000 / #f5f5f7 section rhythm, Apple Blue #0071e3 as the
sole web-marketing interactive accent, pill CTAs at 980px radius,
product-as-hero photography on solid color fields).

Not independently verified via WebFetch — widely documented public facts used:
- Apple was founded on April 1, 1976, in Los Altos, California, by
  Steve Jobs, Steve Wozniak, and Ronald Wayne.
- Steve Jobs' calligraphy class at Reed College influenced Apple's early
  typographic sensibilities (widely cited in his 2005 Stanford commencement
  address and later biographies).
- Apple's design leadership lineage includes Jony Ive (for roughly two
  decades), Evans Hankey, and currently Alan Dye.
- Dieter Rams' "10 Principles of Good Design" is widely cited as a
  significant influence on Apple industrial and software design,
  especially in the Jony Ive era.
- Apple's App Review process does enforce HIG compliance as a submission
  requirement, including the Reduce Motion accessibility setting.

Personas (§13) are fictional archetypes informed by publicly observable
Apple user segments (creative professionals, iOS developers, mainstream
long-time consumers, young digital-native users). Names are illustrative;
they do not refer to real people.

Interpretive claims (e.g., "product-as-sculpture photography", "the
emptiness IS the deference", "self-comparative superlatives only") are
editorial readings connecting Apple's HIG principles and observable
marketing discipline to the design system, not directly sourced
Apple statements.
-->

