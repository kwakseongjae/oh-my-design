---
id: heptabase
name: Heptabase
country: TW
category: productivity
homepage: "https://heptabase.com"
primary_color: "#2e2e2e"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=heptabase.com&sz=128"
verified: "2026-06-17"
added: "2026-06-17"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-17"
  note: "primary = live near-black ink (#2e2e2e) used for both heading text and the dark pill/CTA; canvas is a warm off-white (#f7f7f7). Single saturated accent is a clear blue (#207dff) reserved for AI-feature highlight text; green (#75c33a) only marks pricing checkmarks. Translucent fills (rgba(252,252,252,0.5) card, rgba(0,0,0,0.08) hairline) live in prose/components, not in solid colors."
  colors:
    ink: "#2e2e2e"
    ink-pure: "#000000"
    canvas: "#f7f7f7"
    surface: "#ffffff"
    surface-tint: "#fcfcfc"
    surface-warm: "#f0f0ea"
    accent-blue: "#207dff"
    accent-green: "#75c33a"
    muted: "#6a6972"
    muted-warm: "#777169"
    hairline: "#e5e7eb"
    on-primary: "#ffffff"
  typography:
    family: { display: "Instrument Sans", body: "Inter", cjk: "system CJK (PingFang TC / Noto Sans TC)" }
    display-hero: { size: 48, weight: 500, lineHeight: 1.30, tracking: -1.584, use: "Hero headline, Instrument Sans Medium" }
    section:      { size: 36, weight: 500, lineHeight: 1.30, tracking: -0.54, use: "Section titles, Instrument Sans" }
    card-title:   { size: 24, weight: 600, lineHeight: 1.50, use: "Pricing tier / card titles, Inter SemiBold" }
    nav:          { size: 16, weight: 400, lineHeight: 1.50, use: "Nav links, Inter" }
    body:         { size: 16, weight: 400, lineHeight: 1.50, use: "Standard reading text, Inter" }
    button:       { size: 16, weight: 500, lineHeight: 1.00, use: "Header CTA label, Inter Medium" }
    pill:         { size: 13, weight: 500, lineHeight: 1.00, use: "Segmented sub-nav pill, Inter" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 6, md: 8, lg: 12, pill: 9999 }
  shadow:
    none: "none"
  components:
    button-primary: { type: button, bg: "#2e2e2e", fg: "#ffffff", radius: "9999px", padding: "8px 16px", height: "36px", font: "16px / 500 Inter", use: "Header 'Get started' CTA — solid near-black pill" }
    button-cta-lg: { type: button, bg: "#2e2e2e", fg: "#ffffff", radius: "10px", padding: "14px 24px", height: "48px", font: "16px / 600 Inter", use: "Hero / pricing primary CTA — rounded-rect" }
    button-ghost: { type: button, bg: "#fcfcfc", fg: "#2e2e2e", border: "1px solid rgba(0,0,0,0.08)", radius: "10px", padding: "13px 23px", height: "48px", font: "18px / 500 Inter", use: "Secondary pricing CTA on translucent fill" }
    nav-link: { type: tab, fg: "#2e2e2e", radius: "8px", padding: "8px 12px", font: "16px / 400 Inter", active: "text #2e2e2e on hover tint", use: "Top nav item" }
    subnav-pill: { type: tab, fg: "#777169", radius: "9999px", padding: "7px 22px", font: "13px / 500 Inter", active: "text #000000 + filled pill", use: "Product sub-nav segmented pills (Home / AI Tutor)" }
    pricing-card: { type: card, bg: "#fcfcfc", border: "1px solid rgba(0,0,0,0.08)", radius: "12px", use: "Pricing tier column on translucent fill, no shadow" }
    canvas-card: { type: card, bg: "#ffffff", border: "1px solid rgba(0,0,0,0.14)", radius: "8px", use: "White product mock card" }
    feature-card: { type: card, bg: "#f0f0ea", border: "1px solid rgba(0,0,0,0.04)", radius: "8px", use: "Warm feature tile on canvas" }
    toggle-segment: { type: toggle, bg: "#ffffff", fg: "#2e2e2e", radius: "8px", padding: "6px 10px", use: "Monthly / Yearly billing switch" }
  components_harvested: true
---

# Design System Inspiration of Heptabase

## 1. Visual Theme & Atmosphere

Heptabase is a visual note-taking and knowledge-management app built around an infinite whiteboard of cards, and its marketing site mirrors that product ethos: calm, paper-like, and almost editorial. The canvas is a warm off-white (`#f7f7f7`) rather than pure white, and content sits on it as a quiet field of cards. There is essentially no chroma in the chrome — text and the primary call-to-action both live in the same near-black ink (`#2e2e2e`), never a hard `#000000` for display, which gives the page a soft, printed-on-paper weight instead of a screen glare. The whole surface reads like a tidy desk: lots of whitespace, restrained neutrals, and a tight visual hierarchy where the eye is guided by type weight and spacing, not color.

The typographic personality is the system's defining move. Display headlines run in **Instrument Sans Medium (weight 500)** at large sizes — 48px on the hero with an unusually tight `-1.584px` tracking — which compresses the line into a confident, designerly block ("Master anything you learn. Do your best research and thinking."). Everything functional — nav, body, buttons, pricing copy — drops to **Inter** at weight 400–500, the workhorse UI face. This split of a characterful display sans over a neutral text sans is the same discipline you see in well-made knowledge tools: expressive where it sets the thesis, invisible where it serves reading. As a Taipei-built product that ships in English first but serves a Traditional-Chinese-reading team and audience, CJK glyphs fall through Inter to the platform stack (PingFang TC / Noto Sans TC), so 繁體中文 renders in the OS's native hanzi face rather than a bundled webfont.

What distinguishes Heptabase from louder SaaS sites is its refusal of elevation. Live inspection found `box-shadow: none` across the hero, nav, cards, and pricing columns — depth is built entirely from flat translucent fills and hairlines: a faint `rgba(252,252,252,0.5)` card tint over `#fcfcfc`, warm `#f0f0ea` feature tiles, and 1px `rgba(0,0,0,0.08)` borders. Geometry is gently rounded — 6px / 8px / 12px on cards, and a full `9999px` pill for the dark CTA. Color appears in exactly two reserved roles: a clear interactive blue (`#207dff`) that highlights AI-feature phrases, and a single green (`#75c33a`) that marks pricing checkmarks. The result is a spatial-canvas product whose website feels like the inside of the app — a quiet board on which a few deliberate things have been placed.

**Key Characteristics:**
- Warm off-white canvas (`#f7f7f7`) instead of stark white — paper-like, low-glare
- Near-black ink (`#2e2e2e`) for both display text and the primary CTA — monochrome chrome
- Instrument Sans Medium (500) display with extreme tight tracking (-1.584px at 48px)
- Inter 400–500 for all functional/UI text; CJK falls through to system PingFang TC / Noto Sans TC
- Shadow-free: depth from translucent fills (`#fcfcfc`, `#f0f0ea`) + `rgba(0,0,0,0.08)` hairlines
- Single saturated blue (`#207dff`) reserved for AI-feature highlight text
- Green (`#75c33a`) used only for pricing checkmarks — never as a brand color
- Gentle radius ladder — 6px/8px/12px cards, full `9999px` pill for the dark CTA

## 2. Color Palette & Roles

### Primary
- **Ink** (`#2e2e2e`): The system's primary color — display headings, body emphasis, and the fill of the dark CTA pill. A soft near-black that reads as ink on paper, never the harsh `#000000`.
- **Pure Black** (`#000000`): Reserved for maximum-contrast moments — the active state of a sub-nav pill, the logotype link. Used sparingly.
- **Pure White** (`#ffffff`): White product-mock cards and text on the dark ink CTA.

### Canvas & Surface
- **Canvas** (`#f7f7f7`): The page background — a warm off-white that frames every card.
- **Surface Tint** (`#fcfcfc`): Near-white card fill, frequently rendered at 0.5 alpha (`rgba(252,252,252,0.5)`) so the warm canvas reads faintly through it.
- **Surface Warm** (`#f0f0ea`): A warmer beige-grey for feature tiles and section panels — adds the "paper" warmth.
- **Hairline** (`#e5e7eb`): The default border token in the stylesheet; card and divider outlines more often use the translucent `rgba(0,0,0,0.08)` / `rgba(0,0,0,0.14)` variants over it.

### Accent
- **Accent Blue** (`#207dff`): The single saturated interactive hue — highlights AI-feature phrases ("AI chat", "AI tutor", "Save 25%") and active/interactive emphasis. The product's only "this is special" color.
- **Accent Green** (`#75c33a`): Pricing checkmark color only — signals "included" in feature lists. Not a brand color and never used for chrome.

### Text Hierarchy
- **Ink** (`#2e2e2e`): Primary text, headings, nav, strong labels.
- **Muted** (`#6a6972`): Secondary body copy, descriptions, captions.
- **Muted Warm** (`#777169`): Warm-grey alternate for inactive sub-nav pills and fine print.
- **On Primary** (`#ffffff`): Text on the dark ink CTA and on dark surfaces.

## 3. Typography Rules

### Font Family
- **Display**: `Instrument Sans` (loaded as `__instrumentSans`) — all hero and section headlines, weight 500.
- **Body / UI**: `Inter` (loaded as `__Inter`) — nav, body, buttons, pricing, the document default at weight 400–600.
- **CJK**: no bundled hanzi webfont; Traditional-Chinese text falls through the Inter stack to the platform CJK face (PingFang TC on Apple, Noto Sans TC / Microsoft JhengHei on others).

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Instrument Sans | 48px (3.00rem) | 500 | 1.30 (62.4px) | -1.584px | Hero headline, very tight tracking |
| Section Heading | Instrument Sans | 36px (2.25rem) | 500 | 1.30 (46.8px) | -0.54px | Section titles |
| Card / Tier Title | Inter | 24px (1.50rem) | 600 | 1.50 | normal | Pricing tier + card heads |
| Logotype | Inter | 18px (1.13rem) | 600 | — | -0.36px | "Heptabase" wordmark |
| Nav Link | Inter | 16px (1.00rem) | 400 | 1.50 | normal | Top navigation items |
| Body | Inter | 16px (1.00rem) | 400 | 1.50 | normal | Standard reading text |
| Button | Inter | 16px (1.00rem) | 500 | 1.00 | normal | Header CTA label |
| Sub-nav Pill | Inter | 13px (0.81rem) | 500 | 1.00 | normal | Product segmented pills |

### Principles
- **Two faces, two jobs**: Instrument Sans is the expressive display voice; Inter is the functional reading/UI voice. They never swap roles.
- **Tight display tracking**: headlines compress hard (-1.584px at 48px, -0.54px at 36px); body and UI stay at normal tracking. The compression is the brand's typographic signature.
- **Soft-black ink, not pure black**: display and body text use `#2e2e2e`, reserving `#000000` for rare maximum-contrast accents.
- **Medium weight as display weight**: the hero runs at weight 500, not 700 — confidence through tracking and size, not heaviness.

## 4. Component Stylings

### Buttons

**Header CTA (Primary Pill)**
- Background: `#2e2e2e`
- Text: `#ffffff`
- Radius: 9999px
- Padding: 8px 16px
- Height: 36px
- Font: 16px Inter weight 500
- Use: Header "Get started" call-to-action — the system's single solid pill

**Hero / Pricing CTA (Rounded Rect)**
- Background: `#2e2e2e`
- Text: `#ffffff`
- Radius: 10px
- Padding: 14px 24px
- Height: 48px
- Font: 16px Inter weight 600
- Use: Hero "Get started on mobile" and the featured pricing tier CTA

**Ghost CTA**
- Background: `#fcfcfc`
- Text: `#2e2e2e`
- Border: 1px solid `rgba(0,0,0,0.08)`
- Radius: 10px
- Padding: 13px 23px
- Height: 48px
- Font: 18px Inter weight 500
- Use: Secondary pricing-tier CTA on translucent fill

### Inputs & Forms

**Billing Toggle Segment**
- Background: `#ffffff`
- Text: `#2e2e2e`
- Radius: 8px
- Padding: 6px 10px
- Height: 32px
- Font: 16px Inter weight 500
- Use: Monthly / Yearly (Save 25%) billing switch — active segment fills white, inactive text drops to `rgba(0,0,0,0.32)`

### Cards & Containers

**Pricing Card**
- Background: `#fcfcfc` (rendered at `rgba(252,252,252,0.5)`)
- Border: 1px solid `rgba(0,0,0,0.08)`
- Radius: 12px
- Use: Pricing tier column — translucent fill over warm canvas, no shadow

**White Product Card**
- Background: `#ffffff`
- Border: 1px solid `rgba(0,0,0,0.14)`
- Radius: 8px
- Use: White product-mock card in feature sections

**Warm Feature Tile**
- Background: `#f0f0ea`
- Border: 1px solid `rgba(0,0,0,0.04)`
- Radius: 8px
- Use: Warm beige feature tile on the canvas

### Tabs / Sub-Navigation

**Top Nav Item**
- Text: `#2e2e2e`
- Radius: 8px
- Padding: 8px 12px
- Font: 16px Inter weight 400
- Use: Top navigation links (AI Tutor, Wiki, Download, Gallery, Pricing)

**Sub-nav Segmented Pill**
- Text: `#777169` (inactive)
- Radius: 9999px
- Padding: 7px 22px
- Font: 13px Inter weight 500
- Active: text `#000000` in a filled pill
- Use: Product sub-navigation segmented pills (Home / AI Tutor)

### Accent Treatment
- Feature-highlight text: `#207dff` (blue) for AI-feature phrases
- Pricing checkmarks: `#75c33a` (green) for included-feature ticks
- Neither accent appears on buttons, borders, or chrome — color is information, not decoration

---

**Verified:** 2026-06-17 (omd:add-reference CREATE — Tier 1 live inspect, 2 brand-owned surfaces)
**Tier 1 sources:** https://heptabase.com (homepage, live computed-style inspect), https://heptabase.com/pricing (pricing page, live computed-style inspect), https://wiki.heptabase.com (Heptabase official Wiki — brand-owned, mission/manifesto source)
**Tier 2 sources:** getdesign.md/heptabase — 404 "No designs found"; styles.refero.design/?q=heptabase — no matching results
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px
- Notable: nav items use a tight 8px 12px hit area; the dark CTA pill uses 8px 16px; large CTAs jump to 14px 24px for a comfortable touch target

### Grid & Container
- Centered single-column hero anchored by the 48px Instrument Sans headline
- Feature sections present product mocks inside `#fcfcfc` / `#ffffff` cards on the warm canvas
- Pricing is a 3-column grid of equal `#fcfcfc` tier cards at 12px radius
- Warm `#f0f0ea` tiles arrange supporting features in a quiet sub-grid

### Whitespace Philosophy
- **Canvas as breathing room**: the warm off-white `#f7f7f7` field is generous; cards float on it with wide margins, echoing the app's infinite whiteboard.
- **Flat segmentation**: sections separate by surface tint (`#fcfcfc` vs `#f0f0ea` vs canvas) and hairlines, never by shadow.
- **Hierarchy by type, not color**: weight and size carry the structure so the palette can stay almost monochrome.

### Border Radius Scale
- Small (6px): inner card elements, dense containers
- Medium (8px): nav items, white/warm cards, toggle segments
- Large (12px): pricing cards, large panels
- Pill (9999px): header CTA, sub-nav segmented pills

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page canvas, inline text, most surfaces |
| Tint (Level 1) | `#fcfcfc` / `#f0f0ea` fill shift | Card and section separation without elevation |
| Hairline (Level 2) | `1px solid rgba(0,0,0,0.08)` border | Card outlines, dividers |

**Shadow Philosophy**: Heptabase is a deliberately shadowless system. Live inspection found `box-shadow: none` across the hero, nav, feature cards, and pricing columns. Depth and grouping come entirely from flat translucent fills — a `rgba(252,252,252,0.5)` tint over `#fcfcfc`, warm `#f0f0ea` panels — and thin `rgba(0,0,0,0.08)` hairlines over the `#e5e7eb` base border. This keeps the marketing surface feeling like the product: a calm, paper-like board where cards sit flat and the user's attention is never pulled by artificial elevation. When emphasis is needed the system reaches for the dark ink (`#2e2e2e`) fill or the blue accent (`#207dff`), never a drop shadow.

## 7. Do's and Don'ts

### Do
- Use a warm off-white canvas (`#f7f7f7`) instead of pure white — paper-like calm
- Use near-black ink (`#2e2e2e`) for display text and the primary CTA — keep chrome monochrome
- Set headlines in Instrument Sans Medium (500) with tight negative tracking (-1.584px at 48px)
- Use Inter weight 400–500 for all nav, body, and UI text
- Keep the system shadow-free — separate with `#fcfcfc` / `#f0f0ea` fills and `rgba(0,0,0,0.08)` hairlines
- Reserve blue (`#207dff`) for AI-feature highlight text only
- Use green (`#75c33a`) only for pricing checkmarks
- Fall CJK text through to the system stack (PingFang TC / Noto Sans TC) for 繁體中文

### Don't
- Use pure black (`#000000`) for display or body text — reserve it for rare maximum-contrast accents
- Add drop shadows for elevation — Heptabase is flat and paper-like
- Spread the blue or green accents across chrome — they carry meaning, not decoration
- Set headlines in a heavy 700 weight — Medium 500 plus tight tracking is the voice
- Use Inter for big display headlines — Instrument Sans owns display
- Use a stark white page background — the warmth of `#f7f7f7` is intentional
- Bundle a CJK webfont — let 繁體中文 render in the native OS hanzi face
- Use loud SaaS gradients or glassmorphism — the surface stays quiet and printed

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline compresses, pricing cards stack |
| Tablet | 640-1024px | Moderate padding, 2-up feature cards |
| Desktop | 1024-1440px | Full layout, centered hero, 3-column pricing grid |

### Touch Targets
- Large CTAs at 48px height with 14px 24px padding — comfortably tappable
- Header pill CTA at 36px height, full radius for an unmistakable target
- Nav items at 36px height with 8px 12px hit area

### Collapsing Strategy
- Hero: 48px Instrument Sans headline scales down on mobile, weight 500 maintained
- Pricing: 3-column tier grid collapses to a single stacked column
- Feature cards: multi-column → stacked single column
- Warm/white card surfaces maintain their fills and hairlines across breakpoints

### Image Behavior
- Product-mock cards carry no shadow at any size, consistent with the flat system
- Cards maintain their 8px/12px radius across breakpoints
- Whiteboard/canvas screenshots sit inside `#fcfcfc` / `#ffffff` framed cards

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary text + CTA: Ink (`#2e2e2e`)
- Page background: Canvas (`#f7f7f7`)
- Card fill: Surface Tint (`#fcfcfc`)
- Warm panel: Surface Warm (`#f0f0ea`)
- White card: (`#ffffff`)
- Feature highlight: Accent Blue (`#207dff`)
- Pricing checkmark: Accent Green (`#75c33a`)
- Secondary text: Muted (`#6a6972`)
- Inactive pill text: Muted Warm (`#777169`)
- Border base: Hairline (`#e5e7eb`)

### Example Component Prompts
- "Create a hero on a warm off-white background (#f7f7f7). Headline at 48px Instrument Sans weight 500, line-height 1.30, letter-spacing -1.584px, color #2e2e2e. Below it a dark CTA pill: #2e2e2e background, white text, 9999px radius, 8px 16px padding, 16px Inter weight 500."
- "Design a pricing card: #fcfcfc fill at 0.5 alpha, 1px solid rgba(0,0,0,0.08) border, 12px radius, no shadow. Tier title 24px Inter weight 600 #2e2e2e. Feature list 16px Inter #6a6972 with #75c33a checkmarks. Featured tier CTA: #2e2e2e background, white text, 10px radius, 14px 24px padding."
- "Build a warm feature tile: #f0f0ea background, 1px solid rgba(0,0,0,0.04) border, 8px radius. Title 36px Instrument Sans weight 500, letter-spacing -0.54px, #2e2e2e. Body 16px Inter #6a6972. Highlight 'AI chat' in #207dff."
- "Create a top nav on #f7f7f7. Inter 16px weight 400 links, #2e2e2e text, 8px radius hover tint. Dark pill 'Get started' CTA right-aligned: #2e2e2e, white text, 9999px radius."

### Iteration Guide
1. Instrument Sans Medium (500) for headlines with tight tracking; Inter 400–500 for everything functional
2. Ink (`#2e2e2e`) is both the text and the action color — keep chrome monochrome
3. No shadows — separate with `#fcfcfc` / `#f0f0ea` fills and `rgba(0,0,0,0.08)` hairlines
4. Warm canvas `#f7f7f7`, never stark white
5. Blue (`#207dff`) only on AI-feature text; green (`#75c33a`) only on checkmarks
6. Gentle radius — 6px/8px/12px cards, full pill for the CTA
7. Let 繁體中文 render in the native system CJK face

---

## 10. Voice & Tone

Heptabase's voice is **calm, intellectual, and earnest** — a tool for thinkers that speaks the way a good study partner does, plainly and with quiet conviction. The hero line "Master anything you learn. Do your best research and thinking." sets the register: aspirational about understanding, never gimmicky about productivity. Copy treats the user as a serious learner building something lasting, not a metrics target. The vision statement — "create a world where anyone can effectively establish a deep understanding of anything" — is the spine of every surface.

| Context | Tone |
|---|---|
| Hero headlines | Aspirational, learning-framed. "Master anything you learn." Confident, not hype. |
| Feature copy | Concrete and capability-first. "Ask AI to explain any sources you bring." |
| Pricing taglines | Plain, audience-named. "For anyone building a lifelong knowledge base." |
| CTAs | Direct, low-pressure. "Get started", "Get started on mobile". |
| Trust / social proof | Understated. "Trusted by customers from the world's leading universities." |

**Voice samples (verbatim from live site, 2026-06-17):**
- "Master anything you learn. Do your best research and thinking." — hero headline (learning-framed mission). *(verified live homepage)*
- "For anyone building a lifelong knowledge base." — Pro tier tagline (audience-named, plain). *(verified live pricing)*
- "Trusted by customers from the world's leading universities." — pricing social proof (understated). *(verified live pricing)*

**Forbidden register**: hustle-productivity hype, exclamation-heavy urgency, undefined buzzwords, "10x your output"-style claims, and anything that frames learning as a competition rather than a personal pursuit of understanding.

## 11. Brand Narrative

Heptabase was created by founder **Alan Chan**, who built the product around a single conviction: that genuine understanding is spatial and visual, not linear. The product is a visual note-taking and knowledge-management app whose core interaction is an infinite whiteboard of cards — you bring sources in, lay them out on a canvas, and make sense of them by arranging, connecting, and synthesizing rather than by stacking notes in a list. Its stated vision is to "create a world where anyone can effectively establish a deep understanding of anything."

Organizationally, Heptabase is a **Taipei-based team** — the founder and core team operate out of Taiwan, which is why this reference is classified `country: TW` by operating base. The company is incorporated in Delaware and went through **Y Combinator's W22 batch**, so the legal entity is US-registered; but the design culture, the team, and the day-to-day product work are Taiwanese, and the design-led founder's hand is visible in the restraint of every surface. (Classification follows operating base, not place of incorporation.)

What Heptabase refuses, visible in its design: the loud, gradient-heavy chrome of growth-stage SaaS and the dopamine-loop urgency of consumer productivity apps. What it embraces: a warm, paper-like canvas; a near-monochrome palette where color is reserved for meaning; expressive display type over a quiet text face; and a flat, shadowless surface that feels like the inside of the product — a calm board on which serious thinking can happen. The website is, deliberately, a demonstration of the product's thesis: that a well-arranged space helps you understand.

## 12. Principles

1. **Understanding is spatial.** The product's whole premise is that arranging knowledge on a canvas beats stacking it in a list. *UI implication:* lay content out as cards on a generous canvas; let space and adjacency carry relationships, not nesting depth.
2. **Color is information, not decoration.** The palette is near-monochrome so that the two accents mean something. *UI implication:* reserve blue (`#207dff`) for feature emphasis and green (`#75c33a`) for "included"; keep all chrome in ink and neutrals.
3. **Calm over stimulation.** A thinking tool should not compete for attention. *UI implication:* no shadows, no gradients, no urgency — a warm `#f7f7f7` canvas and flat fills keep the surface quiet.
4. **Type sets the thesis.** Expressive display type states the idea; neutral text type serves the reading. *UI implication:* Instrument Sans Medium with tight tracking for headlines; Inter for everything that must simply be read.
5. **Built to live with.** Copy frames a "lifelong knowledge base," not a quick win. *UI implication:* design for durability and density of use, not for first-session delight; nothing should feel like a trend that ages in a year.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Heptabase user segments (university researchers, lifelong learners, knowledge workers building personal knowledge bases), not individual people.*

**Chen Yi-Hsuan, 27, Taipei.** A graduate researcher synthesizing papers for a literature review. Lays each source as a card on a whiteboard and draws the connections between arguments. Chose Heptabase because the spatial canvas matches how she actually thinks, and because the interface stays out of the way.

**Daniel Okafor, 34, London.** A product strategist building a lifelong knowledge base from books, talks, and meeting notes. Values that the tool is calm and shadow-free — it feels like a desk, not a dashboard. Uses the AI chat to interrogate sources he has brought in rather than to generate filler.

**Mizuki Tanaka, 22, Kyoto.** An undergraduate using Heptabase as an AI tutor to master hard courses. Appreciates the plain, non-gamified tone and that the blue highlight reliably means "this is an AI feature." Reads 繁體中文 and Japanese content side by side and relies on the native system CJK rendering.

## 14. States

| State | Treatment |
|---|---|
| **Empty (new whiteboard)** | Warm canvas (`#f7f7f7`) with a single Ink (`#2e2e2e`) prompt at body size inviting the first card. No illustration clutter — the empty canvas is the invitation. |
| **Empty (no search results)** | Muted (`#6a6972`) single line explaining nothing matched, with a path to adjust the query. Calm, honest. |
| **Loading (board / card fetch)** | Flat skeleton blocks on `#fcfcfc` fill at final dimensions, 8px/12px radius. No shadow shimmer — a quiet pulse consistent with the shadowless system. |
| **Loading (AI compute)** | Inline progress within the AI panel; the blue accent (`#207dff`) marks the active AI action; previous content stays visible. |
| **Error (sync / load failed)** | Inline message in Ink (`#2e2e2e`) with a plain-language explanation and a retry. No generic "Something went wrong" alone — states what to do next. |
| **Error (form / field)** | Field-level message below the input describing what is valid, not just "Required". |
| **Success (saved / synced)** | Brief, quiet inline confirmation; no celebratory emoji, no toast spam — the card itself reflects the saved state. |
| **Skeleton** | `#fcfcfc` blocks at final dimensions, 8px/12px radius, flat pulse. |
| **Disabled** | Muted Warm (`#777169`) text on reduced-opacity surface; the dark ink action fades rather than switching to a different hue, preserving the monochrome read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, pill press, focus |
| `motion-standard` | 200ms | Card/section reveal, panel open, sheet |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, panels, sheets |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and quiet, consistent with the calm, paper-like aesthetic. Cards and panels fade-in from below at `motion-standard / ease-enter`; pills respond to press with a subtle scale/opacity shift. There is no bounce or spring — a thinking tool signals steadiness, not playfulness. On an infinite-canvas product, panning and zooming are direct and immediate rather than animated for show. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-17) via global playwright getComputedStyle on
https://heptabase.com and https://heptabase.com/pricing:
- Hero H1 "Master anything you learn. Do your best research and thinking." —
  Instrument Sans 48px / weight 500 / -1.584px / line-height 62.4px / color rgb(46,46,46)
- Section H2 — Instrument Sans 36px / 500 / -0.54px / rgb(46,46,46)
- Header CTA "Get started" — bg rgb(46,46,46) #2e2e2e / radius 9999px / 8px 16px / Inter 16px / 500 / white text
- Hero/pricing CTA — bg rgb(46,46,46) / radius 10px / 14px 24px / Inter 16px / 600 / white
- Nav items — Inter 16px / 400 / rgb(46,46,46) / 8px radius / 8px 12px padding
- Sub-nav pills — Inter 13px / 500 / inactive rgb(119,113,105) #777169 / active rgb(0,0,0) / 9999px
- Pricing cards — bg rgba(252,252,252,0.5) over #fcfcfc / 1px solid rgba(0,0,0,0.08) / radius 12px
- Warm feature tiles — bg rgb(240,240,234) #f0f0ea / 1px solid rgba(0,0,0,0.04) / radius 8px
- Accent blue rgb(32,125,255) #207dff on AI-feature spans ("AI chat","AI tutor","Save 25%")
- Accent green rgb(117,195,58) #75c33a on pricing checkmarks
- box-shadow: none across hero/nav/cards/pricing (shadowless system confirmed)
- Canvas bg rgb(247,247,247) #f7f7f7; body font Inter; display font Instrument Sans

Mission/voice (§10-11) verified via brand-owned surfaces:
- https://wiki.heptabase.com — vision "create a world where anyone can effectively
  establish a deep understanding of anything"; founder Alan Chan; visual whiteboard
  knowledge-management philosophy.
- https://heptabase.com/pricing — tier taglines ("For anyone building a lifelong
  knowledge base.") and social proof ("Trusted by customers from the world's leading
  universities."), verbatim.

Country classification: TW by OPERATING BASE — founder and core team are Taipei-based.
The company is Delaware-incorporated and a Y Combinator W22 alum (US legal entity), noted
in §11; per project rule, country follows operating base, not place of incorporation.
This is widely documented public information, not a directly quoted Heptabase statement.

Personas (§13) are fictional archetypes informed by publicly observable Heptabase user
segments (researchers, lifelong learners, students using the AI tutor). Names are
illustrative; they do not refer to real people.

Interpretive claims (e.g., "the website is a demonstration of the product's thesis",
"color is information, not decoration") are editorial readings connecting Heptabase's
observed design to its stated mission, not directly sourced Heptabase statements.
-->
