---
id: yourator
name: Yourator
country: TW
category: consumer-tech
homepage: "https://www.yourator.co"
primary_color: "#0063d1"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=yourator.co&sz=128"
verified: "2026-06-08"
added: "2026-06-08"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-08"
  note: "primary = live interactive blue #0063d1 (CTA fill, links, accents); ink #333333 body / #384e69 nav; brand-tinted blue shadow rgba(0,38,90,0.1) + rgba(0,112,196,0.1)"
  colors:
    primary: "#0063d1"
    primary-hover: "#2668a0"
    primary-deep: "#00265a"
    canvas: "#fbfbfb"
    surface: "#ffffff"
    tint-blue: "#edf8ff"
    tint-blue-strong: "#cdeaff"
    heading: "#333333"
    nav: "#384e69"
    label: "#566881"
    body: "#8596ad"
    on-primary: "#ffffff"
    hairline: "#e5e7eb"
    panel: "#eceff6"
    muted: "#6c6c6c"
  typography:
    family: { sans: "Noto Sans TC", fallback: "Helvetica Neue" }
    display:    { size: 32, weight: 500, lineHeight: 1.50, tracking: 0, use: "Hero / page headline (h1)" }
    section:    { size: 24, weight: 500, lineHeight: 1.40, tracking: 0, use: "Section titles" }
    subheading: { size: 21, weight: 700, lineHeight: 1.40, tracking: 0, use: "Card / sub-section heads, emphasis" }
    lead:       { size: 18, weight: 500, lineHeight: 1.55, tracking: 0, use: "Lead paragraphs, intro text" }
    body:       { size: 16, weight: 400, lineHeight: 1.50, tracking: 0, use: "Standard reading text, nav" }
    button:     { size: 14, weight: 500, lineHeight: 1.00, tracking: 0, use: "Primary button label" }
    caption:    { size: 14, weight: 400, lineHeight: 1.50, tracking: 0, use: "Secondary labels, metadata" }
    micro:      { size: 12, weight: 400, lineHeight: 1.50, tracking: 0, use: "Fine print, tags, timestamps" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 2, md: 4, lg: 8, full: 9999 }
  shadow:
    flat: "rgb(242,242,242) 2px 3px 0px 0px"
    flat-sm: "rgb(242,242,242) 1.5px 2px 0px 0px"
    elevated: "rgba(0,38,90,0.1) 0px 9px 26px 0px, rgba(0,112,196,0.1) 0px 10px 14px 0px"
    modal: "rgba(0,0,0,0.5) 0px 5px 15px 0px"
  components_harvested: true
  components:
    button-primary: { type: button, bg: "#0063d1", fg: "#ffffff", radius: 4, padding: "6px 12px", font: "14/500", use: "Primary CTA — sign-up, 投遞履歷" }
    button-ghost: { type: button, bg: "#ffffff", fg: "#0063d1", radius: 4, font: "14/500", use: "Secondary actions, alternate paths" }
    tag-tint: { type: badge, bg: "#edf8ff", fg: "#0063d1", radius: 8, font: "12/400", use: "Category / industry explore chips" }
    tag-neutral: { type: badge, bg: "#eceff6", fg: "#566881", radius: 4, font: "12/400", use: "Neutral metadata tags" }
    card: { type: card, bg: "#ffffff", radius: 8, use: "Containers — flat offset shadow, hover lifts to elevated" }
    input: { type: input, bg: "#ffffff", fg: "#333333", radius: 0, use: "Underline-style fields, bottom-rule only" }
    avatar: { type: avatar, radius: 9999, use: "Company logo / user photo, circular 50%" }
---

# Design System Inspiration of Yourator

## 1. Visual Theme & Atmosphere

Yourator is Taiwan's startup-and-digital-talent job board, and its design reads exactly the way a stylish recruiting product for the tech crowd should: clean, bright, friendly, and quietly confident without ever tipping into corporate stiffness. The page opens on a near-white canvas (`#fbfbfb`) rather than pure white, a softer paper-like ground that takes the clinical edge off and lets white cards (`#ffffff`) float gently above it. The single anchoring color is a clear, optimistic blue (`#0063d1`) — not the institutional navy of a bank, not the playful teal of a consumer toy, but a trustworthy, energetic blue that says "modern Taiwanese tech" the moment you land. Ink is a warm near-black (`#333333`) for headlines and body, while navigation and structural labels step down into a desaturated slate-blue family (`#384e69`, `#566881`, `#8596ad`) that keeps the chrome calm and the blue CTAs loud.

The defining typographic choice is `Noto Sans TC` — the Traditional Chinese member of the Noto superfamily — set as the primary face for both Han characters and Latin. This is a deliberate, regional decision: rather than bolting a Western webfont onto Chinese system fallbacks, Yourator commits to a single humanist sans that renders 繁體中文 beautifully at every size, with `Helvetica Neue` as the Latin fallback. The result is even color and consistent rhythm across mixed CJK/Latin lines (e.g. "AI 熱門職缺", "DEI 求職"), which matters enormously on a job board where titles constantly mix Chinese role names with English tech terms. Headlines run at a moderate 32px / weight 500 with a generous 1.5 line-height (48px) — Yourator never shouts in heavy display weights; it trusts spacing and the blue accent to carry hierarchy.

What gives Yourator its stylish, slightly editorial signature is its shadow language. Instead of generic gray drop-shadows, decorative cards use a hard, offset, no-blur shadow in a pale gray (`rgb(242,242,242) 2px 3px 0px 0px`) — a flat, almost "sticker" or risograph offset that feels designed and intentional rather than defaulted. Then, for genuinely elevated surfaces, it layers a brand-tinted soft shadow: `rgba(0,38,90,0.1)` (deep blue) paired with `rgba(0,112,196,0.1)` (the lighter brand blue), so even elevation carries a faint blue cast that ties back to `#0063d1`. The radius scale is tight and friendly — 2px on small chrome, 4px on buttons and inputs, 8px on cards and tint chips, and full pills (9999px) reserved for progress bars and avatars. Nothing is harsh; nothing is over-rounded.

**Key Characteristics:**
- `Noto Sans TC` as the single primary face — a regional commitment to Traditional Chinese, even color across CJK + Latin
- One clear interactive blue (`#0063d1`) doing all the brand and CTA work; everything else is slate-blue or warm ink
- Warm near-black ink (`#333333`) instead of pure black — friendly, not clinical
- Off-white canvas (`#fbfbfb`) with floating white cards (`#ffffff`)
- Signature flat offset shadow (`rgb(242,242,242) 2px 3px 0px 0px`) — risograph-style, designed not defaulted
- Brand-tinted soft elevation (`rgba(0,38,90,0.1)` + `rgba(0,112,196,0.1)`) for real lift
- Tight friendly radius scale: 2 / 4 / 8 / full — buttons at 4px, cards at 8px, pills only for progress + avatars
- Pale blue tints (`#edf8ff`, `#cdeaff`) for category chips and explore surfaces
- Moderate weights (400 / 500, with 700 for emphasis) — hierarchy from space and color, not heavy display weights

## 2. Color Palette & Roles

### Primary
- **Yourator Blue** (`#0063d1`): The primary brand color. Fills every primary CTA ("註冊" / sign-up), colors all links, accents icons, and tints category chips. A clear, energetic, trustworthy blue — the single loudest element in an otherwise calm palette.
- **Blue Hover** (`#2668a0`): Deeper, slightly desaturated blue for hover/pressed states on primary actions and active links.
- **Blue Deep** (`#00265a`): The darkest brand blue, surfacing in the elevated shadow tint and for high-contrast blue text on tinted surfaces.

### Surface & Canvas
- **Canvas** (`#fbfbfb`): The page background — an off-white, paper-like ground that softens the whole UI.
- **Surface** (`#ffffff`): Card and panel surfaces, floating above the canvas.
- **Panel** (`#eceff6`): Cool gray-blue panel fill for secondary sections and grouped backgrounds.

### Blue Tints
- **Tint Blue** (`#edf8ff`): Very pale blue background for category / explore chips and informational tiles, paired with `#0063d1` text.
- **Tint Blue Strong** (`#cdeaff`): A stronger pale blue for hover tints, highlights, and selected explore cards.

### Ink & Neutral Scale
- **Heading / Ink** (`#333333`): Warm near-black for headlines (h1) and primary body text. Never pure `#000000`.
- **Nav** (`#384e69`): Desaturated slate-blue for navigation links and structural labels — calm chrome that lets blue CTAs dominate.
- **Label** (`#566881`): Mid slate-blue for secondary labels and active nav items.
- **Body Muted** (`#8596ad`): Light slate-blue for tertiary text, captions, and metadata.
- **Muted Gray** (`#6c6c6c`): Neutral gray for de-emphasized text and disabled labels.

### Surface & Borders
- **Hairline** (`#e5e7eb`): The standard border / divider color for cards, inputs, and dividers — the most-used border by far.
- **On-Primary** (`#ffffff`): White text on blue CTA fills and dark surfaces.

### Shadow Colors
- **Flat Offset** (`rgb(242,242,242)`): The signature pale-gray no-blur offset shadow color (`2px 3px 0px 0px`) — risograph-style designed depth.
- **Shadow Blue Deep** (`rgba(0,38,90,0.1)`): The far layer of the brand-tinted elevation shadow.
- **Shadow Blue Light** (`rgba(0,112,196,0.1)`): The near layer of the brand-tinted elevation shadow — echoes `#0063d1`.
- **Shadow Modal** (`rgba(0,0,0,0.5)`): Heavy neutral shadow for overlays and modals only.

## 3. Typography Rules

### Font Family
- **Primary**: `Noto Sans TC`, with fallback: `Helvetica Neue`, `sans-serif`
- **Rationale**: A single humanist sans that renders Traditional Chinese and Latin with even color — essential for a Taiwanese job board where titles constantly mix 繁體中文 role names with English tech terms.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Display / H1 | Noto Sans TC | 32px (2.00rem) | 500 | 1.50 (48px) | Hero / page headline — moderate, never heavy |
| Section | Noto Sans TC | 24px (1.50rem) | 500 | 1.40 | Section titles |
| Subheading | Noto Sans TC | 21px (1.31rem) | 700 | 1.40 | Card heads, strong emphasis |
| Lead | Noto Sans TC | 18px (1.13rem) | 500 | 1.55 | Lead paragraphs, intro text |
| Body | Noto Sans TC | 16px (1.00rem) | 400 | 1.50 (24px) | Standard reading text, nav links |
| Nav Active | Noto Sans TC | 16px (1.00rem) | 500 | 1.50 | Active / hovered nav item |
| Button | Noto Sans TC | 14px (0.88rem) | 500 | 1.00 | Primary button label |
| Caption | Noto Sans TC | 14px (0.88rem) | 400 | 1.50 | Secondary labels, metadata |
| Micro | Noto Sans TC | 12px (0.75rem) | 400 | 1.50 | Fine print, tags, timestamps |

### Principles
- **One family, all scripts**: `Noto Sans TC` carries both CJK and Latin. Do not introduce a separate Latin display font — the even color of a single humanist sans is the point.
- **Moderate weights**: 400 for body, 500 for headings and CTAs, 700 reserved for genuine emphasis. There is no ultra-bold display register; hierarchy comes from size, space, and the blue accent.
- **Generous line-height**: Body and headlines run at 1.5 — CJK text needs vertical breathing room, and Yourator gives it. Headlines at 32px/48px feel airy, not cramped.
- **Largest is 32px**: Even the hero headline tops out at a moderate 32px. Yourator is a working tool, not a splashy marketing site — restraint reads as competence.
- **Blue for links, ink for text**: Body is `#333333`; any `#0063d1` text is by definition interactive (link, chip, or accent). Color carries meaning.

## 4. Component Stylings

### Buttons

**Primary (Blue Fill)**
- Background: `#0063d1`
- Text: `#ffffff`
- Padding: 6px 12px (compact) — up to 8px 60px on hero CTAs
- Radius: 4px
- Height: 36px
- Font: 14px Noto Sans TC weight 500
- Hover: `#2668a0` background
- Use: Primary CTA ("註冊" sign-up, "立即開始", "投遞履歷")

**Ghost / Outlined**
- Background: transparent
- Text: `#0063d1`
- Padding: 6px 12px
- Radius: 4px
- Border: `1px solid #e5e7eb`
- Font: 14px Noto Sans TC weight 500
- Hover: `#edf8ff` tint background
- Use: Secondary actions, alternate paths

**Tint Chip / Explore**
- Background: `#edf8ff`
- Text: `#0063d1`
- Radius: 8px
- Font: 16px Noto Sans TC weight 400
- Use: Category / industry explore chips ("AI 熱門職缺", "前端工程師", "DEI 求職")

### Cards & Containers
- Background: `#ffffff`
- Border: `1px solid #e5e7eb`
- Radius: 8px
- Shadow (flat signature): `rgb(242,242,242) 2px 3px 0px 0px` — hard offset, no blur
- Shadow (elevated): `rgba(0,38,90,0.1) 0px 9px 26px 0px, rgba(0,112,196,0.1) 0px 10px 14px 0px`
- Hover: lift to the brand-tinted elevated shadow

### Tags / Pills
**Tint Tag**
- Background: `#edf8ff`
- Text: `#0063d1`
- Radius: 8px
- Padding: ~4px 12px
- Font: 12-14px Noto Sans TC weight 400

**Neutral Tag**
- Background: `#eceff6`
- Text: `#566881`
- Radius: 4px
- Font: 12px weight 400

### Inputs & Forms
- Background: `#ffffff`
- Border: bottom-rule only (`0px none` on the sides; a single bottom hairline `#e5e7eb`) — square, minimal underline-style fields
- Radius: 0px (search/hero inputs) or 4px (boxed form fields)
- Text: `#333333`, 16-18px Noto Sans TC
- Placeholder: `#8596ad`
- Focus: `#0063d1` underline / border

### Navigation
- Clean horizontal nav on near-white canvas, sticky
- Brand logotype left-aligned
- Links: Noto Sans TC 16px weight 400, `#384e69` text; active/hover steps to weight 500 / `#566881`
- CTA: blue `#0063d1` "註冊" button right-aligned, 4px radius, white text
- Mobile: hamburger toggle

### Avatars & Logos
- Company logos and user photos render as circles (50% radius)
- Progress indicators use full pills (9999px radius) in `#0063d1`

### Decorative Elements
**Flat Offset Shadow**
- `rgb(242,242,242) 2px 3px 0px 0px` (and `1.5px 2px 0px 0px` for smaller chips) — the signature designed, no-blur offset that gives Yourator its stylish, slightly editorial feel

**Blue Tint Tiles**
- `#edf8ff` / `#cdeaff` tinted explore tiles with `#0063d1` text for industry / category navigation

---

**Verified:** 2026-06-08 (omd:add-reference — Tier 1 live inspect)
**Tier 1 sources:** https://www.yourator.co (live DOM, playwright getComputedStyle — body, h1, nav, primary CTA `#0063d1` 4px / 36px / weight 500, flat + brand-tinted shadows, radius scale); https://www.yourator.co/companies (employer surface, same Taiwan site)
**Country sources:** https://www.yourator.co (繁體中文 brand homepage, TW), https://www.yourator.co/companies (Yourator employer page, TW) — see `.verification.md`
**Method:** playwright headless getComputedStyle on the live DOM; rgb()→hex conversion; >=6 measured samples collected.
**`.verification.md`:** `web/references/yourator/.verification.md`

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px
- Observed button padding spans 6px 12px (compact) to 20px 32px 36px (large explore tiles), showing a comfortable, generous spacing temperament

### Grid & Container
- Centered single-column hero with a prominent search bar
- Job listings as a responsive card grid (2-3 columns on desktop, single column on mobile)
- Category / explore tiles in a tint-blue tile grid
- Generous gutters; cards never crowd

### Whitespace Philosophy
- **Calm chrome, loud CTA**: The slate-blue navigation and abundant off-white space keep the interface quiet so the single `#0063d1` blue and its CTAs read instantly.
- **Card breathing room**: Job and company cards carry comfortable internal padding; the 1.5 line-height keeps dense CJK listings legible.
- **Paper ground**: The `#fbfbfb` canvas plus white cards creates a layered "documents on a desk" feel appropriate to a tool people use daily.

### Border Radius Scale
- Hairline (2px): Small chrome, fine elements
- Standard (4px): Buttons, inputs, neutral tags — the workhorse
- Card (8px): Cards, tint chips, explore tiles
- Full (9999px): Progress bars, avatars, circular badges

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text |
| Offset (Level 1) | `rgb(242,242,242) 2px 3px 0px 0px` | Signature designed cards, chips, default lift |
| Offset Small (Level 1b) | `rgb(242,242,242) 1.5px 2px 0px 0px` | Smaller chips, compact cards |
| Elevated (Level 2) | `rgba(0,38,90,0.1) 0px 9px 26px 0px, rgba(0,112,196,0.1) 0px 10px 14px 0px` | Hover lift, featured cards, dropdowns — brand-tinted |
| Modal (Level 3) | `rgba(0,0,0,0.5) 0px 5px 15px 0px` | Overlays, modals, dialogs |
| Ring (Accessibility) | `#0063d1` focus outline | Keyboard focus ring |

**Shadow Philosophy**: Yourator runs two distinct depth languages. The everyday one is a hard, no-blur **offset** shadow (`rgb(242,242,242) 2px 3px 0px 0px`) — a risograph / sticker aesthetic that reads as deliberately styled rather than a default blur, and gives the product its approachable, editorial personality. The second, reserved for genuine elevation (hover, dropdowns, featured surfaces), is a **brand-tinted** soft shadow that pairs a deep blue (`rgba(0,38,90,0.1)`) far layer with a lighter brand-blue (`rgba(0,112,196,0.1)`) near layer — so even elevation carries a faint blue cast that echoes `#0063d1`. Heavy neutral shadows (`rgba(0,0,0,0.5)`) appear only on true overlays.

### Decorative Depth
- Tint-blue tiles (`#edf8ff` / `#cdeaff`) create depth through color contrast rather than shadow
- The offset shadow does double duty as decoration, not just elevation

## 7. Do's and Don'ts

### Do
- Use `Noto Sans TC` for everything — CJK and Latin alike — for even color across mixed titles
- Use `#0063d1` as the single primary/CTA/link blue; let it be the loudest thing on screen
- Keep ink warm: `#333333` for headings and body, never pure `#000000`
- Set the page on the off-white `#fbfbfb` canvas with white (`#ffffff`) cards floating above
- Use the signature flat offset shadow (`rgb(242,242,242) 2px 3px 0px 0px`) for default card lift
- Reserve the brand-tinted soft shadow (`rgba(0,38,90,0.1)` + `rgba(0,112,196,0.1)`) for real elevation
- Keep radius friendly and tight: 4px buttons, 8px cards, full pills only for progress + avatars
- Use pale blue tints (`#edf8ff`, `#cdeaff`) for category / explore chips with `#0063d1` text

### Don't
- Don't introduce a separate Latin display font — `Noto Sans TC` carries both scripts
- Don't use heavy display weights for headlines — 500 is the headline weight; 700 is for emphasis only
- Don't use pure black (`#000000`) — warm `#333333` ink is the brand's voice
- Don't use generic gray blur shadows for default cards — the flat offset is the signature
- Don't over-round — no large pill buttons; pills are for progress bars and avatars only
- Don't let nav chrome compete with CTAs — keep navigation in the calm slate-blue family (`#384e69`)
- Don't use `#0063d1` for non-interactive text — blue text means "clickable" here
- Don't crowd cards — the generous 1.5 line-height and comfortable padding are essential for CJK legibility

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, stacked job cards, hamburger nav |
| Tablet | 640-1024px | 2-column card grid, condensed nav |
| Desktop | 1024-1280px | Full layout, 3-column job/company grids |
| Large Desktop | >1280px | Centered content with generous side margins |

### Touch Targets
- Primary CTA at 36px height with comfortable padding
- Nav links at 16px with adequate spacing
- Tint chips sized for tapping with 8px radius and generous padding

### Collapsing Strategy
- Hero: 32px headline maintained; search bar goes full-width on mobile
- Navigation: horizontal slate-blue links → hamburger toggle
- Job / company cards: 3-column → 2-column → single column stacked
- Category tile grid: reflows to fewer columns, then a horizontal scroll row on mobile
- Section spacing: 64px → ~40px on mobile

### Image Behavior
- Company logos maintain circular (50% radius) crop at all sizes
- Card images keep consistent 8px radius
- Tint-blue tiles maintain their `#edf8ff` background and `#0063d1` text across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Yourator Blue (`#0063d1`)
- CTA Hover: Blue Hover (`#2668a0`)
- Canvas: Off-White (`#fbfbfb`)
- Card surface: White (`#ffffff`)
- Heading / body ink: Warm Near-Black (`#333333`)
- Nav text: Slate-Blue (`#384e69`)
- Secondary label: Mid Slate (`#566881`)
- Muted text: Light Slate (`#8596ad`)
- Border: Hairline (`#e5e7eb`)
- Tint chip bg: Pale Blue (`#edf8ff`), text `#0063d1`
- Link: Yourator Blue (`#0063d1`)

### Example Component Prompts
- "Create a hero on an #fbfbfb canvas. Headline at 32px Noto Sans TC weight 500, line-height 1.5, color #333333. A prominent search input with a single bottom hairline (#e5e7eb), 18px #333333 text. Primary blue CTA (#0063d1, 4px radius, white text, 14px weight 500, 36px height)."
- "Design a job card: white #ffffff background, 1px solid #e5e7eb border, 8px radius, flat offset shadow rgb(242,242,242) 2px 3px 0px 0px. Title at 18px Noto Sans TC weight 500 #333333, company at 14px weight 400 #8596ad. A tint tag (#edf8ff bg, #0063d1 text, 8px radius)."
- "Build a category explore tile: #edf8ff background, 8px radius, #0063d1 label text at 16px Noto Sans TC weight 400. On hover, lift to rgba(0,38,90,0.1) 0px 9px 26px 0px, rgba(0,112,196,0.1) 0px 10px 14px 0px and tint to #cdeaff."
- "Create navigation: near-white sticky header. Noto Sans TC 16px weight 400 links in #384e69, active step to weight 500 / #566881. Blue '註冊' CTA right-aligned (#0063d1 bg, white text, 4px radius, 36px height)."
- "Design a primary button: #0063d1 fill, white text, 4px radius, 14px Noto Sans TC weight 500, 36px height, 6px 12px padding. Hover background #2668a0."

### Iteration Guide
1. Always use `Noto Sans TC` with `Helvetica Neue` fallback for all text — one family, all scripts
2. `#0063d1` is the only brand/CTA/link blue; everything interactive is blue, nothing else is
3. Headlines top out at 32px / weight 500; use 700 only for genuine emphasis
4. Ink is `#333333`; nav and chrome live in the slate-blue family (`#384e69` / `#566881` / `#8596ad`)
5. Default card depth is the flat offset `rgb(242,242,242) 2px 3px 0px 0px`; real elevation uses the brand-tinted blue pair
6. Radius scale: 4px buttons/inputs, 8px cards/chips, full pills only for progress + avatars
7. Canvas is `#fbfbfb`, cards are `#ffffff` — never the reverse
8. Tint chips are `#edf8ff` bg with `#0063d1` text; stronger hover tint is `#cdeaff`

---

## 10. Voice & Tone

Yourator's voice is encouraging, practical, and peer-to-peer — it speaks to ambitious young Taiwanese professionals who want to work at startups and digital teams, not to HR departments. The register is warm 繁體中文 with comfortable code-switching into English tech vocabulary ("AI 熱門職缺", "DEI 求職", "全端工程師") that mirrors how its audience actually talks. Calls to action are direct and motivating ("立即開始製作履歷", "拓展求職視野，找到你的理想工作") — they frame job-seeking as an act of growth and self-investment, never as desperation. The headline *"拓展求職視野，找到你的理想工作"* ("Expand your job-search horizons, find your ideal job") captures the whole posture: aspirational, supportive, forward-looking.

| Context | Tone |
|---|---|
| Hero headline | Aspirational, growth-framed. "Expand your horizons, find your ideal job." |
| Job / company copy | Concrete and honest about the role and team. Highlights culture and tech stack. |
| CTAs | Direct, motivating imperatives. "立即開始", "投遞履歷", "註冊". |
| Resume / tool guidance | Helpful, coaching register. Treats the user as a capable professional in progress. |
| Community / blog | Peer voice — practitioners sharing career advice, not corporate broadcast. |
| Empty / error states | Reassuring and actionable; never blames the user. |

**Forbidden register.** Stiff corporate HR-speak, desperation framing, hype superlatives ("革命性", "顛覆"), and exclamation-stacked urgency. Yourator is encouraging, not pushy.

## 11. Brand Narrative

Yourator (https://www.yourator.co) is a Taiwan-based job platform focused specifically on the startup and digital-talent ecosystem — connecting engineers, designers, product people, and marketers with modern teams across Taiwan and, through its Japanese-job track ("日系工作"), abroad. Where traditional Taiwanese job boards optimize for mass-market volume and dense listing density, Yourator positions itself as the curated, culture-forward alternative: it surfaces team culture, tech stacks, and growth-oriented roles, and pairs the board with practical tools (a resume builder, career content) that treat job-seeking as a craft.

The product's identity is built around the audience it serves: people who chose startups and digital work on purpose, and who expect the tools they use to look and feel as considered as the products they build. That is why the design leans stylish and editorial — the off-white paper canvas, the risograph-style offset shadows, the single confident blue, the committed `Noto Sans TC` typography — rather than the utilitarian gray density of incumbent boards. The themed verticals visible on the homepage (新創實習 startup internships, DEI 求職, 歡迎新鮮人 new-grad friendly, 中高階職缺 senior roles, 日系工作 Japan-track jobs) signal a platform that segments its audience by life-stage and value, not just by industry.

What Yourator embraces: a curated, culture-first view of work; tools that respect the job-seeker as a professional; and a clean, modern aesthetic that signals "we are part of the tech community we serve." What it rejects: the cold, high-density, volume-first feel of legacy job boards.

## 12. Principles

1. **Curated over comprehensive.** Yourator's value is selection, not volume. The design's calm, spacious layout reflects a board that shows you the right roles, not every role.
2. **The tools should look like the work.** The audience builds digital products; the platform they job-hunt on should feel equally crafted. Stylish offset shadows and committed typography are a trust signal to that audience.
3. **One language, every script.** `Noto Sans TC` for CJK and Latin together is a regional commitment — even color across mixed titles is a quality the audience notices.
4. **Color carries meaning.** A single blue (`#0063d1`) means "interactive." Calm slate-blue chrome stays out of the way so the blue can do its job.
5. **Encourage, don't pressure.** Job-seeking is framed as growth ("拓展求職視野"). The voice and the warm `#333333` ink both refuse the cold, transactional feel of legacy boards.
6. **Friendly geometry.** Tight 4-8px radii and warm ink keep the product approachable; full pills are reserved, not default. Nothing harsh, nothing over-cute.

## 13. Personas

*Personas below are fictional archetypes informed by Yourator's publicly observable audience segments (startup-bound engineers and designers, new graduates, mid-career switchers, and Japan-track seekers in Taiwan), not individual people.*

**Chen Yu-ting, 26, Taipei.** Frontend engineer two years into her career, looking to move from a traditional SI firm to a product startup. Browses Yourator specifically because it surfaces tech stack and team culture, not just salary bands. Trusts the platform partly because it looks like the design systems she works in daily.

**Lin Cheng-hao, 23, Hsinchu.** Final-year CS student using the "歡迎新鮮人" (new-grad friendly) and "新創實習" (startup internship) tracks. Built his first resume with Yourator's resume tool. Values that the CTAs feel encouraging rather than corporate — it lowers the anxiety of a first job hunt.

**Wang Mei-ling, 34, Taichung.** Product manager considering a "日系工作" (Japan-track) role. Appreciates that Yourator segments by value and life-stage, and that the bilingual CJK/Latin typography renders Japanese-company role names cleanly.

**Hsu Chia-wei, 29, Taipei.** Designer at a Series-A startup, occasionally hiring through Yourator's employer side ("companies" surface). Notices and respects the offset-shadow / Noto Sans TC craft — to her it signals the platform understands design-literate users on both sides of the marketplace.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no saved jobs)** | White `#ffffff` card on `#fbfbfb` canvas. Single encouraging line in `#333333` at 16px Noto Sans TC: "還沒有收藏的職缺". One blue CTA (`#0063d1`): "探索職缺". No blame, just a next step. |
| **Empty (no search results)** | `#8596ad` line at 14px: "找不到符合的職缺，試試調整篩選條件". Filter summary stays visible so the user can adjust scope. |
| **Loading (listing grid)** | Skeleton cards at final dimensions in `#e5e7eb`, keeping the flat offset shadow shape. Gentle shimmer. |
| **Error (request failed)** | Inline card with `#333333` message + a blue "重新整理" retry link (`#0063d1`). Never a generic crash screen. |
| **Error (form validation)** | Field-level: the bottom hairline turns to a warning tone, with a 12px message below describing what's invalid. |
| **Success (application submitted)** | Brief confirmation in a tint-blue tile (`#edf8ff` bg, `#0063d1` text): "履歷已送出". Linked status detail below. |
| **Disabled** | Reduced opacity on surface and text together. Blue actions fade toward a desaturated blue rather than switching to gray, preserving brand read. |
| **Selected (filter chip)** | Active chip fills `#cdeaff` with `#0063d1` text and a subtle blue border. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, focus, chip selection |
| `motion-standard` | 220ms | Card hover-lift, dropdown, modal open |
| `motion-slow` | 320ms | Page-level transitions, hero reveals |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — dropdowns, cards, sheets |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Signature motions.**

1. **Card hover-lift.** Job and company cards transition from the flat offset shadow to the brand-tinted elevated shadow (`rgba(0,38,90,0.1)` + `rgba(0,112,196,0.1)`) on hover over `motion-standard / ease-enter`, with a subtle 2px rise — the offset "lifts off the page."
2. **Chip selection.** Filter / category chips tint from `#edf8ff` to `#cdeaff` over `motion-fast` when selected — quick, responsive, no overshoot.
3. **CTA press.** Primary blue buttons darken to `#2668a0` over `motion-fast`. No spring, no bounce — clean and trustworthy.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, hover-lifts and transitions collapse to instant state changes; the board stays fully functional without decorative motion.

## 16. Do's and Don'ts

### Do
- Treat `#0063d1` as the one interactive blue — CTAs, links, accents, selected states
- Set everything in `Noto Sans TC` with the `Helvetica Neue` fallback
- Keep the page on `#fbfbfb` canvas with white `#ffffff` cards
- Use the flat offset shadow (`rgb(242,242,242) 2px 3px 0px 0px`) as the default card depth
- Reserve the brand-tinted soft shadow for genuine hover / elevation
- Frame copy as growth and encouragement, in warm `#333333` ink
- Keep radii tight and friendly (4px / 8px), pills only for progress + avatars

### Don't
- Don't reach for a second blue or a competing accent — one blue, one meaning
- Don't use pure black ink or heavy display weights
- Don't replace the signature offset shadow with a generic gray blur on default cards
- Don't over-round buttons into large pills or crowd CJK text with tight line-height
- Don't let nav chrome shout — keep it in the calm slate-blue family
- Don't write pushy, hype-stacked, or HR-corporate copy
