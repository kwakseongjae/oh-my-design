---
id: snapchat
name: Snapchat
country: US
category: consumer-tech
homepage: "https://www.snapchat.com"
primary_color: "#FFFC00"
logo:
  type: simpleicons
  slug: snapchat
verified: "2026-06-22"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-22"
  note: "primary = Snapchat Yellow (#FFFC00) — the single unmistakable brand color; interactive blue (#0096E5) on snapchat.com web app login surface; Ghost Sans font on business/marketing surface; Avenir Next on consumer web app."
  colors:
    primary: "#FFFC00"
    primary-text: "#000000"
    interactive: "#0096E5"
    ink: "#121314"
    ink-dark: "#000000"
    body: "#53575B"
    muted: "#C7C7CC"
    surface-dark: "#3A3E41"
    canvas: "#FFFFFF"
    surface-grey: "#F0F1F2"
    on-primary: "#000000"
  typography:
    family: { display: "Ghost Sans", body: "Avenir Next", fallback: "Helvetica, Tahoma, Arial, sans-serif" }
    display-hero: { size: 44, weight: 400, lineHeight: 1.20, use: "Hero mission headline (snap.com), Inter/Ghost Sans" }
    section: { size: 28, weight: 700, lineHeight: 1.30, use: "Section headings, Avenir Next Bold" }
    body: { size: 16, weight: 500, lineHeight: 1.50, use: "Standard body text, Avenir Next Medium" }
    nav: { size: 16, weight: 500, lineHeight: 1.50, use: "Nav links, Ghost Sans Medium" }
    button: { size: 16, weight: 500, lineHeight: 1.50, use: "CTA label, Ghost Sans Medium" }
    caption: { size: 12, weight: 600, lineHeight: 1.50, use: "Nav label under icons, Avenir Next SemiBold" }
  spacing: { xs: 4, sm: 8, md: 16, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 5, md: 8, lg: 20, full: 9999 }
  shadow:
    none: "none"
    nav-elevation: "rgba(0,0,0,0.1) 0px 6px 12px 4px"
  components:
    button-primary: { type: button, bg: "#FFFC00", fg: "#000000", radius: "64px", padding: "11px 31px", font: "16px / 500 Ghost Sans", use: "Primary CTA on business/marketing surface — Get Started, See Ad Formats" }
    button-dark: { type: button, bg: "#000000", fg: "#FFFFFF", radius: "64px", padding: "11px 31px", font: "16px / 500 Ghost Sans", use: "Secondary CTA on dark canvas" }
    button-login: { type: button, bg: "#0096E5", fg: "#FFFFFF", radius: "100px", padding: "12px 20px", font: "14px / 500 Avenir Next", use: "Log In CTA on snapchat.com web app" }
    input-search: { type: input, bg: "#F0F1F2", fg: "#53575B", radius: "20px", padding: "10px 30px 10px 40px", font: "12px / 700 Arial", use: "Search input on web app" }
    input-text: { type: input, bg: "rgba(0,0,0,0.05)", fg: "#121314", radius: "5px", padding: "7px", font: "16px / 500 Arial", use: "Login form text input" }
    card-dark: { type: card, bg: "#3A3E41", fg: "#C7C7CC", radius: "8px", padding: "16px", use: "Dark content card on business surface (newsletter, blog)" }
    card-light: { type: card, bg: "#FFFFFF", fg: "#121314", radius: "8px", padding: "16px", use: "Light content card with soft border" }
    badge-yellow: { type: badge, bg: "#FFFC00", fg: "#000000", radius: "9999px", use: "Yellow emphasis pill / feature tag" }
    nav-item: { type: tab, fg: "#C7C7CC", font: "16px / 500 Ghost Sans", use: "Business nav links", active: "text #FFFC00 on active" }
    avatar-circle: { type: avatar, radius: "50%", use: "User avatar / ghost icon container, circular" }
  components_harvested: true
---

# Design System Inspiration of Snapchat

## 1. Visual Theme & Atmosphere

Snapchat's design identity is built around a single, electrifying fact: the world's most recognizable yellow (`#FFFC00`). This near-pure yellow — so saturated it reads like a safety signal and a celebration at once — is the entire visual strategy. The consumer web app (`snapchat.com`) operates on an ultra-clean white canvas (`#FFFFFF`) with body text in a warm dark grey (`#53575B`), making the Snapchat Yellow the only moment of color on the page. The business-facing surface (`forbusiness.snapchat.com`) inverts this to a dramatic near-black dark canvas (`#121314`) where the yellow `#FFFC00` CTAs become almost neon — high-contrast, unmissable, playful even in a professional context.

The brand runs two typographic registers. The consumer product uses **Avenir Next** — a humanist geometric sans-serif that reads as approachable, rounded, and friendly, delivered in weight 500 ("Medium") for body and UI text. The business-facing and brand surface uses **Ghost Sans**, Snap Inc.'s proprietary typeface, which pairs with Helvetica-family fallbacks and gives the company's communications a more distinctive branded weight. Ghost icons (the Snapchat ghost logo) function as the brand mascot across both surfaces: the silhouette of a friendly ghost on yellow is instantly recognizable to any mobile-native user globally.

What distinguishes Snapchat design from other consumer social platforms is the decisive rejection of visual complexity. There are no gradients, no elaborate shadow stacks, no decorative typography — just yellow on black or yellow on white, a ghost silhouette, pill-shaped buttons with very large border-radius (64px), and a pervasive sense that this product is for the generation that invented camera-first communication. The interaction blue (`#0096E5`) appears only where a direct action is needed on the consumer login surface, creating a clean two-system signal: yellow = brand, blue = action.

**Key Characteristics:**
- Snapchat Yellow (`#FFFC00`) as the singular, unmissable brand color — appears on CTAs, backgrounds, the ghost logo, and brand moments
- Ghost Sans (custom brand font) on marketing and business surfaces; Avenir Next on consumer web app
- Near-pure black (`#121314`) as the signature dark canvas on business surface, creating maximum yellow contrast
- Pill-shaped CTA geometry with 64px radius — bold, friendly, mobile-native
- Near-flat visual system: components carry no shadows; depth created by canvas/color contrast; the marketing nav wrapper uses one soft ambient shadow for scroll-elevation
- Interactive blue (`#0096E5`) reserved strictly for login/action CTAs on the consumer web app
- Ghost mascot as persistent visual anchor — the brand's silhouette is a global icon among Gen Z
- Warm grey body text (`#53575B`) on white — never pure black for body copy, maintaining approachability

## 2. Color Palette & Roles

### Primary
- **Snapchat Yellow** (`#FFFC00`): The primary brand color — CTA backgrounds, logo fill, brand moments. A near-pure, high-chroma yellow that is one of the most recognizable brand colors globally. Used with black text (`#000000`) for maximum legibility and contrast.
- **Pure Black** (`#000000`): Text on yellow CTAs; secondary CTA button background on dark surfaces. Used for maximum contrast against the yellow.
- **Ink Dark** (`#121314`): Primary dark canvas on business surfaces. Near-black with a very subtle warm undertone — not pure black, but practically indistinguishable in everyday use.

### Interactive
- **Snapchat Blue** (`#0096E5`): Primary action/interactive color on the consumer web app login surface. Used for the "Log In" button and text action links. Not used on marketing surfaces — yellow owns that role.

### Neutral Scale
- **Body Grey** (`#53575B`): Secondary text and body copy on light surfaces. Warm dark grey for headings and sub-labels on the consumer web surface.
- **Muted Grey** (`#C7C7CC`): Nav link text and secondary text on dark canvas. The standard muted tone on business surfaces.
- **Surface Dark** (`#3A3E41`): Dark card background on business surfaces — one step lighter than the main dark canvas.
- **Surface Grey** (`#F0F1F2`): Light grey background for search inputs and secondary containers on consumer surfaces.

### Surface & Canvas
- **Pure White** (`#FFFFFF`): Primary page background on consumer web app and light surfaces.
- **On-Primary** (`#000000`): Text and icons on yellow background — always black for contrast.

## 3. Typography Rules

### Font Family
- **Display / Brand**: `Ghost Sans` (Snap Inc. custom typeface), with fallback `Helvetica, Tahoma, Arial, sans-serif` — used on business/marketing surfaces (forbusiness.snapchat.com, snap.com).
- **Consumer / UI**: `Avenir Next`, with fallback `Helvetica, sans-serif` — used on the Snapchat consumer web app (snapchat.com).

### Hierarchy

| Role | Font | Size | Weight | Notes |
|------|------|------|--------|-------|
| Display Hero | Ghost Sans / Inter | 44px | 400 | Mission statement, snap.com hero |
| Section Heading | Avenir Next | 28px | 700 | Web app section heads |
| Body / Sub-heading | Avenir Next | 16px | 500 | Standard body, sub-heads |
| Nav Link | Ghost Sans | 16px | 500 | Business nav items |
| CTA Button | Ghost Sans | 16px | 500 | Primary CTA labels |
| Caption / Nav Icon Label | Avenir Next | 12px | 600 | Small nav labels under icons |
| Login Form Body | Avenir Next | 14px | 500 | Login web app secondary text |
| Input / Search | Avenir Next / Arial | 12–16px | 500–700 | Form inputs and search |

### Principles
- **Two fonts, two surfaces**: Ghost Sans is the brand's premium voice on marketing and business surfaces; Avenir Next is the friendly, approachable voice on the consumer app.
- **Medium weight as signature**: Weight 500 ("Medium") is the default for Avenir Next UI text — enough presence to be legible without being heavy.
- **Yellow does the talking**: Typography itself is restrained in color and weight. The headline isn't bold because the yellow is.
- **Pill geometry over type weight**: Snapchat communicates energy through shape (the pill CTA, the circular ghost) more than through typographic boldness.

## 4. Component Stylings

### Buttons

**Primary Yellow CTA**
- Background: `#FFFC00`
- Text: `#000000`
- Radius: 64px
- Padding: 11px 31px
- Font: 16px Ghost Sans weight 500
- Height: 50px
- Use: Primary CTAs on business/marketing surface — "Get Started", "See Success Stories", "See Ad Formats"

**Secondary Dark CTA**
- Background: `#000000`
- Text: `#FFFFFF`
- Radius: 64px
- Padding: 11px 31px
- Font: 16px Ghost Sans weight 500
- Height: 50px
- Use: Secondary CTA on dark canvas background

**Login Blue CTA**
- Background: `#0096E5`
- Text: `#FFFFFF`
- Radius: 100px
- Padding: 12px 20px
- Font: 14px Avenir Next weight 500
- Height: 40px
- Use: Log In call-to-action on snapchat.com consumer web app

**Small Yellow CTA (compact)**
- Background: `#FFFC00`
- Text: `#000000`
- Radius: 64px
- Padding: 7px 15px
- Font: 16px Ghost Sans weight 500
- Height: 42px
- Use: Compact header CTA variant on business surface

### Inputs

**Search Input**
- Background: `#F0F1F2`
- Text: `#53575B`
- Radius: 20px
- Padding: 10px 30px 10px 40px
- Font: 12px Arial weight 700
- Height: 40px
- Use: Search input on Snapchat web app sidebar

**Login Text Input**
- Background: `rgba(0,0,0,0.05)`
- Text: `#121314`
- Radius: 5px
- Padding: 7px
- Font: 16px Arial weight 500
- Height: 38px
- Use: Username / email field on web app login form

### Cards & Containers

**Dark Content Card**
- Background: `#3A3E41`
- Text: `#C7C7CC`
- Radius: 8px
- Padding: 16px
- Use: Content cards on business dark canvas (newsletter, blog, resource blocks)

**Light Content Card**
- Background: `#FFFFFF`
- Text: `#121314`
- Radius: 8px
- Padding: 16px
- Use: Light-mode content cards

### Badges

**Yellow Emphasis Badge**
- Background: `#FFFC00`
- Text: `#000000`
- Radius: 9999px
- Use: Emphasis pill / feature highlight tag

### Navigation

**Business Nav**
- Background: `#121314`
- Text: `#C7C7CC`
- Font: 16px Ghost Sans weight 500
- Active: `#FFFC00` text on active item
- Height: 64px header
- Use: Business surface top nav (Why Snapchat?, Goals, Products, Resources)

**Consumer Web App Nav**
- Background: `#FFFFFF`
- Text: `#53575B`
- Font: 12px Avenir Next weight 600
- Icon labels below icon, 72px height strip
- Use: Left sidebar with Stories, Spotlight, Chat, Lenses, Snapchat+

### Avatar

**Circular Avatar**
- Radius: 50% (full circle)
- Use: User avatars, ghost icon containers, circular media thumbnails

---

**Verified:** 2026-06-22 (omd:add-reference CREATE — Tier 1 live inspect)
**Tier 1 sources:** https://www.snapchat.com/, https://forbusiness.snapchat.com/
**Tier 2 sources:** getdesign.md/snapchat — not indexed (404/no results); styles.refero.design/?q=snapchat — no Snapchat style entries found
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4px, 8px, 16px, 24px, 32px, 48px, 64px
- Notable: The business surface uses generous 31px horizontal padding on pill CTAs — the large radius demands proportional internal space

### Grid & Container
- Consumer web app: left sidebar navigation + main content area (chat/stories panel)
- Business/marketing: centered full-width sections, alternating dark and light bands
- Max content width: approximately 1200px
- Hero: centered text block with yellow CTA, minimal decoration

### Whitespace Philosophy
- **Minimalist and direct**: the yellow does the work that whitespace normally does on other brands — it creates visual hierarchy through color contrast alone
- **Dark surface on business**: the near-black canvas (`#121314`) creates breathing room through color, not padding
- **Flat sections**: page sections carry no shadow-based depth; sections alternate between `#121314` dark and `#FFFFFF` light (the only elevation shadow is on the nav wrapper, not page sections)

### Border Radius Scale
- Micro (5px): Form inputs on consumer login
- Small (8px): Content cards, nav dropdown items
- Medium (20px): Search pill input
- Large (64px): Primary CTA buttons — the signature pill shape
- Full (100px / 9999px): Login CTA, badges, avatar circles

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | All page backgrounds, headings, buttons, cards, inputs |
| Nav elevation (Level 0.5) | `rgba(0,0,0,0.1) 0px 6px 12px 4px` | Marketing nav wrapper (`nav.MarketingNav_nav__7WwKp`) — single ambient lift on the sticky/off-canvas nav bar |
| Color contrast (Level 1) | `#3A3E41` on `#121314` | Dark card separation by hue shift |
| Canvas swap (Level 2) | `#FFFFFF` section on `#121314` | Full-width light/dark section contrast |

**Shadow Philosophy**: Snapchat is a near-shadowless system on both consumer and business surfaces. Component-level elements — buttons, cards, inputs, and interactive elements — carry `box-shadow: none` (live-verified). The one exception is the marketing nav wrapper (`nav.MarketingNav_nav__7WwKp`, `position: absolute`), which uses a single soft ambient shadow (`rgba(0,0,0,0.1) 0px 6px 12px 4px`) to lift the nav above hero content during scroll. Visual hierarchy across all other elements is achieved entirely through the yellow/black/white color system and bold radius geometry. The approach matches Snapchat's camera-first, Gen Z product DNA — complex drop shadows signal "legacy enterprise"; flat color signals "mobile native."

## 7. Do's and Don'ts

### Do
- Use Snapchat Yellow (`#FFFC00`) for all primary CTA buttons — it is the brand's single action signal
- Use Ghost Sans on marketing/business surfaces; Avenir Next on consumer app UI
- Apply pill-shaped buttons with 64px radius — the brand geometry is non-negotiable
- Use black text (`#000000`) on all yellow backgrounds for maximum contrast
- Reserve the near-black dark canvas (`#121314`) for immersive brand moments
- Use Avenir Next weight 500 (Medium) for UI text — the friendly, approachable weight
- Apply `#0096E5` blue exclusively for the login CTA on the consumer web surface

### Don't
- Use the yellow as a background for long text blocks — it's a signal color, not a reading surface
- Mix gradients or decorative color into the yellow — the brand power is in its pure, flat application
- Apply drop shadows to Snapchat components (buttons, cards, inputs) — components are flat; only the nav wrapper carries an elevation shadow
- Use rounded corners smaller than 8px on interactive elements — the brand is pill-oriented
- Use Ghost Sans bold/heavy weights for body text — Medium (500) is the default register
- Introduce warm neutrals or beige tones — the palette is cool grey and flat black
- Use blue (`#0096E5`) as a brand highlight — it's an interactive utility color, not a brand color

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, left sidebar collapses to bottom nav, CTAs full-width |
| Tablet | 640-1024px | Sidebar may persist in icon-only mode, 2-column content |
| Desktop | 1024px+ | Full sidebar navigation + main content split |

### Touch Targets
- Primary CTA at 50px height — comfortable thumb target
- Nav icon strip at 72px height — generous for touch
- Search input at 40px height — standard touch-friendly
- Login CTA at 40px height minimum

### Collapsing Strategy
- Consumer web app: left sidebar navigates to bottom tab bar on mobile
- Business marketing: full-width single column; yellow CTA stacks below hero text
- Section padding reduces from 64px to 24px on mobile
- Typography scale: 44px hero compresses proportionally

### Image Behavior
- Ghost logo maintains SVG format and scales cleanly at all sizes
- Yellow backgrounds maintain flat color without adjustment
- Card images maintain 8px radius across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA background: Snapchat Yellow (`#FFFC00`)
- CTA text: Pure Black (`#000000`)
- Dark canvas: Near-black (`#121314`)
- Body text (light surface): Warm Grey (`#53575B`)
- Body text (dark surface): Muted Grey (`#C7C7CC`)
- Interactive / login action: Snapchat Blue (`#0096E5`)
- Surface dark card: Dark Grey (`#3A3E41`)
- Surface grey: Light Grey (`#F0F1F2`)

### Example Component Prompts
- "Create a hero on dark canvas (#121314). Large mission text in Ghost Sans 44px weight 400, white color. Yellow pill CTA: #FFFC00 background, #000000 text, 64px radius, 11px 31px padding, Ghost Sans 16px/500."
- "Design a light marketing section on #FFFFFF. Section heading 28px Avenir Next weight 700, #121314. Body 16px Avenir Next weight 500, #53575B. Yellow CTA button: #FFFC00, black text, 64px radius."
- "Build a dark content card: #3A3E41 background, #C7C7CC text, 8px radius, 16px padding. Ghost Sans 18px weight 400."
- "Create Snapchat login form: white background, Avenir Next. Input: rgba(0,0,0,0.05) bg, 5px radius, 7px padding. Submit button: #0096E5, white text, 100px radius, 12px 20px padding."
- "Design a badge/tag: #FFFC00 background, #000000 text, 9999px full-pill radius, 4px 12px padding, 12px Ghost Sans."

### Iteration Guide
1. Yellow `#FFFC00` is the answer to almost every brand emphasis question — lean on it
2. Ghost Sans on business surfaces; Avenir Next on consumer app — don't mix
3. Pill radius (64px) on all primary CTAs; never square or minimal rounding
4. Dark canvas (`#121314`) + yellow CTA = the signature Snapchat brand moment
5. Components are shadowless — flat color contrast does all the separating; the only shadow is on the nav wrapper itself (`rgba(0,0,0,0.1) 0px 6px 12px 4px`)
6. Blue (`#0096E5`) is for interactive actions on consumer web only
7. Body text is grey (`#53575B`), never pure black — keeps it friendly

---

## 10. Voice & Tone

Snapchat's voice is **playful, direct, and unapologetically Gen Z-native** — a communication platform whose brand voice mirrors how its core users actually communicate: visual, quick, emoji-adjacent, anti-formal. The tagline "Snap으로 말하세요" (Speak with Snap) / "Talk to your friends" is not an instruction — it's an assumption. The brand doesn't explain what Snapchat is; it assumes you're already in on it. Marketing copy is short (often 3–7 words), action-oriented, and free of corporate hedging.

| Context | Tone |
|---|---|
| Hero headlines | Ultra-short, declarative. "Snap으로 말하세요." Never explains. |
| Feature descriptions | One-line capability. "Chat. Snap. Call." Never "experience seamless communication." |
| CTAs | Immediate imperatives. "Get Started", "Try Snapchat+", "See Stories". |
| Business/ads surface | Slightly more professional but still energetic. "Reach Gen Z and Millennials." |
| Error messages | Friendly, brief. Matches the casual tone; no "System Error 500" language. |
| Onboarding | Warm, fast. Respects the user's time and mobile-native patience. |

**Voice samples (verbatim from live surfaces):**
- "Snapchat에 로그인" — web app login heading (16-character, zero decoration). *(verified live 2026-06-22)*
- "친구들과 채팅하고, Snap을 보내고, 영상 통화를 하세요" — web app sub-heading (feature list as sentence). *(verified live 2026-06-22)*
- "Snapchat Ads: Reach Gen Z and Millennials" — business surface page title (audience-first framing). *(verified live 2026-06-22)*

**Forbidden register**: corporate superlatives ("world-class", "revolutionary"), long-form explanations of features users already know, institutional formality, passive voice, jargon-heavy marketing ("omnichannel", "synergy", "paradigm").

## 11. Brand Narrative

Snapchat was launched in **September 2011** by **Evan Spiegel (CEO)**, **Bobby Murphy (CTO)**, and **Reggie Brown** — initially called Picaboo — while Spiegel and Murphy were students at Stanford University. The founding insight was a rejection of the internet's permanent memory: in a world where every photo posted became part of a permanent digital record, Snapchat offered ephemeral images that disappeared after viewing. This wasn't a bug; it was the product's entire premise. The company rebranded to Snapchat in 2012 and launched Stories in 2013 — a format so compelling that Instagram, Facebook, and WhatsApp all copied it within four years.

Snap Inc. — the parent company — has positioned itself from the beginning as a camera company, not a social network. The foundational framing, stated in Snap's 2017 IPO filing, is: *"Snap Inc. is a camera company. We believe that reinventing the camera represents our greatest opportunity to improve the way people live and communicate."* This camera-first identity distinguishes Snap from text-first platforms and from feed-based social networks, and it explains every design decision: the product opens directly to the camera, the ghost mascot is a visual metaphor for ephemeral images, and the interface privileges visual creation over text consumption.

The signature Snapchat Yellow — `#FFFC00` — was chosen to be instantly recognizable in app store grids and on lock screens. Its near-pure chroma is a visual shout in a world of muted app icons. The ghost logo (nicknamed "Ghostface Chillah") was designed to be friendly rather than threatening — an approachable icon for a platform built around disappearing content and authentic, unfiltered communication between close friends.

## 12. Principles

1. **Camera first.** The product opens to the camera. *UI implication:* visual creation is the primary action; browsing/reading is secondary. The camera icon is always one tap away.
2. **Ephemeral is authentic.** Content that disappears enables honesty. *UI implication:* do not add permanence cues (timestamps, archives, public counts) where they undermine the ephemeral experience.
3. **One color, one signal.** Yellow means Snapchat. *UI implication:* `#FFFC00` is used sparingly and decisively — it is the single most important pixel on any Snap-branded surface.
4. **Friends over followers.** The product is built for close relationships, not public audiences. *UI implication:* default to friend-group experiences (Stories visible to friends, Snaps addressed to individuals) over broadcast defaults.
5. **Playful geometry.** Pill shapes, circular avatars, rounded interfaces signal approachability. *UI implication:* minimum 64px radius on primary CTAs; no sharp corners on interactive elements.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Snapchat user segments (Gen Z daily communicators, teen/young-adult social users, business marketers), not individual people.*

**Zoe Park, 19, Los Angeles.** Opens Snapchat before any other app every morning — the camera is the first thing she sees. Sends an average of 40 Snaps per day to a tight group of 12 friends. Values the disappearing format because it lets her be herself without curating. Would describe Snapchat as "just how we talk" — not as a "social media platform."

**Marcus Williams, 24, Atlanta.** Uses Snapchat Stories to follow creators and celebrities but contributes his own content mostly in private group chats. Discovered multiple viral trends on Spotlight before they hit TikTok. Appreciates that Snapchat doesn't show a public follower count on personal profiles — it keeps the social pressure lower than Instagram.

**Priya Patel, 32, London.** Brand marketing manager using Snapchat for Business to run AR lens campaigns targeting 18–24-year-olds in the UK. Chose Snapchat Ads because the audience is genuinely hard to reach on any other platform. Evaluates the business surface as professional but still energetic — the yellow CTA buttons signal that this is a creative advertising partner, not a buttoned-up enterprise tool.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no snaps/messages)** | White canvas with ghost illustration centered. Single friendly prompt: "Send your first Snap." Yellow CTA below. No clutter. |
| **Empty (stories feed, none)** | Warm grey text suggesting who to follow; yellow "Add Friends" CTA. Never a dark or anxious empty state — Snapchat's empty states are invitations. |
| **Loading (camera)** | Camera view animates to readiness immediately; ghost logo pulse on initial app load. |
| **Loading (Stories feed)** | Skeleton rows in `#F0F1F2` surface grey at story tile dimensions; no shadow shimmer — flat pulse consistent with the flat system. |
| **Error (network failure)** | Friendly message in Avenir Next, warm grey text. Single retry action. Never technical error codes. "Couldn't send your Snap. Try again." |
| **Error (login failed)** | Field-level highlight in blue (`#0096E5`) border; short message below. Maintains the login surface's blue interactive register. |
| **Success (snap sent)** | Brief animated confirmation (ghost pulse / checkmark) then return to camera. No persistent toast. The medium is the message — the camera is ready for the next snap. |
| **Skeleton** | `#F0F1F2` blocks at final avatar/tile dimensions; flat surface grey pulse without shadows. |
| **Disabled** | Muted grey (`#C7C7CC`) text; yellow actions fade to reduced opacity. Ghost icon remains visible but dims. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Snap delivery confirmation, selection state |
| `motion-fast` | 120ms | Button press, hover, focus state |
| `motion-standard` | 200ms | Panel transitions, dropdown, story expand |
| `motion-slow` | 300ms | Full-screen story reveal, camera open animation |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — sheets, stories, panels |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals, story close |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Signature motions.**

1. **Camera shutter.** When a Snap is captured, a brief shutter-like flash animation confirms capture. Duration: `motion-fast`. This is Snapchat's most recognizable motion — immediate, satisfying, camera-authentic.
2. **Story reveal.** Tapping a story tile expands to full-screen at `motion-slow / ease-enter` with a gentle scale-up. The ephemeral nature of stories is echoed in the transient, fade-out exit animation.
3. **Ghost pulse.** On loading states, the ghost icon performs a subtle opacity pulse — the "ghost appearing" metaphor extended to waiting states.
4. **Pill press.** Yellow CTA buttons respond to press with a brief scale-down (0.97) at `motion-fast / ease-standard`. The pill doesn't change color on press — scale shift communicates the action without destroying the yellow signal.
5. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all transitions collapse to instant. Camera capture flash is suppressed. Story expand is immediate. The product remains fully functional; the identity is preserved through color and shape rather than motion.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-22) via playwright getComputedStyle on:
- https://www.snapchat.com/ (consumer web app, login surface)
- https://forbusiness.snapchat.com/ (business/marketing surface)
- https://snap.com/en-US (Snap Inc. corporate surface)

Key observations:
- Consumer web: body font "Avenir Next", Helvetica, sans-serif; color rgb(0,0,0); bg rgb(255,255,255)
- Login button: bg rgb(0,150,229) #0096E5; radius 100px; Avenir Next 14px/500; white text
- Business surface: font "Ghost Sans", Helvetica, Tahoma, Arial, sans-serif
- Business CTA "Get Started": bg rgb(255,252,0) #FFFC00; color rgb(0,0,0); radius 64px; 11px 31px padding; 16px/500 Ghost Sans; height 50px
- Business nav: bg rgb(18,19,20) #121314; text rgb(199,199,204) #C7C7CC
- Yellow frequency on business surface: rgb(255,252,0) ×11 (dominant brand color)
- Dark surface frequency: rgb(0,0,0) ×15, rgb(18,19,20) ×4

Brand narrative (§11): Snapchat founding by Evan Spiegel, Bobby Murphy, Reggie Brown (2011 at Stanford).
"Camera company" framing from Snap's 2017 IPO S-1 filing — widely documented public record.
Snapchat Yellow as deliberate app store recognition strategy — Snap brand guidelines confirm.

Personas (§13) are fictional archetypes informed by publicly observable Snapchat user segments.
Names are illustrative; they do not refer to real people.

Interpretive claims connecting design to product philosophy are editorial readings,
not directly quoted Snap Inc. statements.
-->
