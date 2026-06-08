---
id: piccollage
name: "PicCollage"
country: US
category: consumer-tech
homepage: "https://piccollage.com"
primary_color: "#4FC3C4"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=piccollage.com&sz=256"
verified: "2026-06-03"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#4fc3c4"
    teal-nav: "#b7e1da"
    teal-footer: "#7ad2c3"
    teal-border: "#2db59e"
    hero-bg: "#fbf2eb"
    nav-bg: "#f5f4ef"
    surface: "#ece9df"
    surface-hover: "#e8e4d9"
    divider: "#d9d2bf"
    body: "#292929"
    body-secondary: "#4d4d4d"
    accent-pink: "#f85482"
    accent-yellow: "#ffcf3d"
    gradient-1: "#8235b8"
    gradient-2: "#974dcb"
    gradient-3: "#ef4967"
    gradient-4: "#ee604d"
    on-primary: "#ffffff"
  typography:
    family: { sans: "Poppins", display: "Zilla Slab" }
    display:        { size: 60, weight: 600, lineHeight: 1.12, use: "Marketing hero headline (Zilla Slab)" }
    section-title:  { size: 36, weight: 700, use: "Feature card / section headline (desktop)" }
    sub-headline:   { size: 25, weight: 500, lineHeight: 1.4, use: "Hero tagline / sub-headline" }
    body:           { size: 18, weight: 400, use: "Feature descriptions, body copy" }
    label:          { size: 14, weight: 500, tracking: -0.28, use: "UI label, nav button" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 4, md: 8, lg: 16, full: 9999 }
  shadow:
    ambient: "rgba(0,0,0,0.08) 0px 2px 12px"
    card: "rgba(0,0,0,0.10) 0px 0px 12px"
    thumbnail: "rgba(0,0,0,0.15) 0px 0px 8px"
  components:
    button-primary: { type: button, bg: "#4fc3c4", fg: "#ffffff", radius: 9999, font: "14px / 700", use: "App download / sticky CTA" }
    button-nav: { type: button, bg: "#b7e1da", fg: "#292929", radius: 9999, padding: "8px 12px", font: "14px / 500", use: "Nav Download button, 1.5px #2db59e border" }
    icon-button: { type: button, bg: "#ece9df", radius: 9999, use: "Toolbar / nav icon button, 1.5px #d9d2bf border" }
    nav-item: { type: tab, fg: "#4d4d4d", radius: 9999, padding: "8px 12px", font: "14px / 500", use: "Nav menu item" }
    card: { type: card, bg: "#ffffff", radius: 16, use: "Feature panel, 2px #e8e4d9 border, soft shadow" }
    thumbnail: { type: card, radius: 16, use: "Collage thumbnail, soft drop shadow" }
  components_harvested: true
---

# PicCollage

A Taiwan-born photo-collage and greeting-card app that turns everyday photos and videos into shareable celebrations — serving 270 million users worldwide with joyful, AI-assisted creative tools.

## 1. Visual Theme & Atmosphere

PicCollage wraps creativity in warmth. The homepage opens with a soft cream canvas (`#FBF2EB`) that feels like textured scrapbook paper — unhurried, tactile, inviting touch. Against that warm ground, a signature teal (`#4FC3C4`) pops as the primary call-to-action, energetic without being aggressive. Typography mixes a serif display face (Zilla Slab) for expressive headlines with Poppins for clear, friendly body copy, signalling that the product is both crafted and accessible. Feature sections use a vivid purple-to-coral gradient (`#8235B8 → #EE604D`) as a typographic highlight, nodding to the brand's celebratory, multicolour spirit. Elevations are kept light — diffused shadows (`0px 0px 8px rgba(0,0,0,0.15)`) rather than hard drops — so collage content stays the visual hero. The overall register is: "a creative friend's studio, tidied up just enough to feel welcoming."

## 2. Color Palette & Roles

- **Teal / Primary CTA:** `#4FC3C4` — main download and action button background
- **Teal 200 / Nav Button:** `#b7e1da` — nav "Download the App" button fill
- **Teal 300 / Footer:** `#7ad2c3` — footer section background
- **Teal 500 / Border Accent:** `#2db59e` — interactive border on nav and teal buttons
- **Warm Cream / Hero BG:** `#FBF2EB` — hero section page background
- **Beige 50 / Nav BG:** `#f5f4ef` — navigation bar background
- **Beige 100 / Surface:** `#ece9df` — icon button fill, hover surface
- **Beige 300 / Divider:** `#d9d2bf` — subtle borders and dividers
- **Gray 850 / Body Text:** `#292929` — primary text on light surfaces
- **Gray 700 / Secondary Text:** `#4d4d4d` — secondary body and nav labels
- **Pink 500 / Accent:** `#f85482` — highlight sticker/badge accent
- **Yellow 400 / Celebration:** `#ffcf3d` — festive highlight, feature icon fill
- **Feature Gradient:** `#8235B8 → #974DCB → #EF4967 → #EE604D` — display heading gradient

## 3. Typography Rules

- **Display / Hero headline:** Zilla Slab, 60px / line-height 67px, weight 600, color white with text-shadow `0px 0px 10px #AB7624`
- **Section headline (desktop):** Poppins, 36px / weight bold — feature card titles
- **Section headline (mobile):** Poppins, 25px / weight bold — responsive scale
- **Sub-headline / hero tagline:** Poppins, 25px / line-height 35px, weight 500, white
- **Body copy:** Poppins, 18px / weight 400 — feature descriptions
- **UI label / nav button:** Poppins, 14px / weight medium (500), tracking -0.28px
- **Hierarchy:** Display → Section H1 → Body → UI Label; always Poppins below the hero; Zilla Slab reserved for marketing hero only
- **Base scale:** 10 / 12 / 14 / 16 / 18 / 20 / 24 / 28 / 32 / 36 / 40 / 44 / 48 / 72px

## 4. Component Stylings

### Primary CTA Button (App Download)

**Mobile Sticky Download**
- Background: `#4FC3C4`
- Text: `#ffffff`
- Border: none
- Radius: 30px
- Width: 294px
- Height: 44px
- Font: 14px / 700
- Shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.10)

**Nav Download Button**
- Background: `#b7e1da`
- Text: `#292929`
- Border: 1.5px solid `#2db59e`
- Radius: 9999px
- Height: 32px
- Padding: 8px 12px
- Font: 14px / 500

### Icon Button (Toolbar / Nav Icon)

**Beige Icon Button**
- Background: `#ece9df`
- Border: 1.5px solid `#d9d2bf`
- Radius: 9999px
- Width: 44px
- Height: 44px

**Hover State**
- Background: `#e8e4d9`

### Navigation Bar

**Top Nav**
- Background: `#f5f4ef`
- Height: 70px
- Shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08)
- Padding: 8px 44px

**Nav Menu Item**
- Text: `#4d4d4d`
- Font: 14px / 500
- Radius: 9999px
- Padding: 8px 12px

### Card / Feature Panel

**Feature Card**
- Background: `#ffffff`
- Radius: 16px
- Border: 2px solid `#e8e4d9`
- Shadow: 0px 0px 12px 0px `#E8E8E8`

**Collage Thumbnail**
- Radius: 16px
- Shadow: 0px 0px 8px rgba(0, 0, 0, 0.15)

---
**Verified:** 2026-06-03
**Tier 1 sources:** https://piccollage.com (homepage HTML + inline styles), https://pic-collage-mczsmo7tt-piccollage.vercel.app/_next/static/chunks/0w52i878~_fa~.css (main CSS bundle with full --color-pic-* token scale), https://piccollage.com/company (company page HTML with brand mission copy), https://play.google.com/store/apps/details?id=com.cardinalblue.piccollage.google (Google Play listing — Cardinal Blue Software, Inc.)
**Tier 2 sources:** getdesign.md/piccollage — 0 DESIGN.md files (no data). refero ?q=PicCollage — JS-only SPA, no results returned.
**Conflicts unresolved:** none

## 5. Layout Principles

- **Max content width:** ~1221px on hero (capped via `max-width:1221px`); 690px for editor panels; standard Tailwind spacing scale (4px base unit)
- **Navigation:** Sticky top bar, full-width, 70px tall; collapses to hamburger below `sm` breakpoint (640px); content inset `44px` on sm+
- **Hero:** Full-bleed background image/video with centred text column (622px wide on desktop); app-store badges and CTA stack below tagline
- **Section grid:** Single-column on mobile; 2-column grid on `md` (768px+) for feature cards; horizontal marquee for testimonials
- **Footer:** Full-bleed teal-300 (`#7ad2c3`), 550px tall on lg / 900px tall on mobile; centred QR code + app badge layout
- **Spacing rhythm:** 8, 12, 16, 24, 32, 48, 64, 96px; section vertical padding is `32px 0 96px` on desktop

## 6. Depth & Elevation

- **Level 0 — Flat surface:** Hero cream background `#FBF2EB`, no shadow; page-level canvas
- **Level 1 — Card:** `box-shadow: 0px 0px 12px 0px #E8E8E8` — feature panels and template tiles
- **Level 2 — Thumbnail / floating element:** `box-shadow: 0px 0px 8px rgba(0,0,0,0.15)` — collage preview cards
- **Level 3 — Navigation:** `box-shadow: 0px 2px 12px 0px rgba(0,0,0,0.08)` — sticky top bar lifts above content
- **Level 4 — Modal / overlay:** `box-shadow: 0px 16px 22px 0px rgba(0,0,0,0.07)` — slide-out drawer
- **Overlay tint:** `rgba(0,0,0,0.40)` for scrim behind full-screen modals
- **Principle:** Elevation is soft and diffused (large blur, low opacity) rather than hard; keeps collage imagery as the primary visual anchor

## 7. Do's and Don'ts

### Do
- Use teal (`#4FC3C4` / `#b7e1da` family) as the action colour; reserve it for CTAs and interactive states
- Use the warm cream (`#FBF2EB`, beige family) for page backgrounds to keep the scrapbook warmth
- Apply Zilla Slab only for marketing hero headlines; use Poppins for all product and body text
- Use fully rounded pill buttons (radius 9999px / 30px+) for all primary and secondary actions
- Apply the purple-to-coral gradient (`#8235B8 → #EE604D`) exclusively on display text for celebratory emphasis
- Keep diffuse, low-opacity shadows to let collage content remain the visual star
- Transition color changes at 200ms ease-in-out for interactive elements

### Don't
- Don't use hard, deep shadows — they conflict with the airy scrapbook aesthetic
- Don't mix Zilla Slab with body-copy contexts; it is display-only
- Don't use pink (`#f85482`) or yellow (`#ffcf3d`) as primary backgrounds — accent use only
- Don't use sharp corners (radius < 8px) on interactive elements; the brand is round and soft
- Don't crowd layouts; template cards and collage thumbnails need generous white/cream space
- Don't place coloured text directly on the purple-to-coral gradient without white fill or contrast check

## 8. Responsive Behavior

- **< 640px (mobile):** Single-column layout; sticky bottom CTA bar appears (`bottom: 24px`, width `294px`, radius `30px`); hero headline scales to 32px; feature cards stack vertically; footer 900px tall
- **640px – 767px (sm):** Hero text column narrows; app-store badges side-by-side; nav stays horizontal but collapses secondary items; footer 650px tall
- **768px – 1023px (md):** Feature grid becomes 2-column; editor panel up to 690px; section padding expands to 80px block
- **1024px+ (lg):** Full hero layout (622px text column + phone mockup); max-content 1221px; footer 550px tall; all nav items visible with 44px horizontal inset
- **Breakpoints:** xs 480px, sm 640px, md 768px, lg 1024px (Tailwind standard); custom `sm:px-[44px]`, `md:px-[71px]`

## 9. Agent Prompt Guide

When generating PicCollage-style UI:

```
Visual system: warm cream (#FBF2EB) page canvas, teal (#4FC3C4) primary CTA, beige-family surfaces.
Typography: Zilla Slab 600 for hero headline only; Poppins 500/400 for all other text.
Buttons: fully rounded pills (radius 30px–9999px); primary = #4FC3C4 bg + white text; secondary = #b7e1da bg + 1.5px #2db59e border + #292929 text.
Cards: radius 16px, soft shadow (0px 0px 12px #E8E8E8), 2px beige border (#e8e4d9).
Shadows: diffuse only — blur-heavy, low-opacity; no hard drop shadows.
Gradient (display text only): linear-gradient(87.36deg, #8235B8 -9.23%, #974DCB 16.56%, #EF4967 73.21%, #EE604D 91.93%).
Tone: warm, celebratory, encouraging; short sentences with exclamation energy; never clinical.
Avoid: sharp corners, dark overlays, hard shadows, serif body text.
```

## 10. Voice & Tone

**Register:** Warm, celebratory, encouraging — like a creative best friend cheering you on.

**Adjectives:** Joyful · Approachable · Empowering

| Do | Don't |
|---|---|
| Use short, punchy verbs: "Create," "Celebrate," "Share" | Use passive or corporate phrasing ("leverage your assets") |
| Address the user directly: "your memories," "your camera roll" | Be abstract or category-generic |
| Celebrate small moments, not just big milestones | Overpromise technical perfection |
| Use light exclamation energy — one `!` per sentence max | Pile on emojis or CAPS LOCK for emphasis |
| Invite, not instruct: "Try PicCollage now!" | Command coldly: "Enter your photos." |

**Voice samples (illustrative):**
- *"The easiest photo and video editing app to add magic to your treasured memories."* — tagline on homepage hero
- *"Our promise to you — our AI tools will always act as an assistant to super-charge your creative ideas. They blend in seamlessly and never take the creative process out of your hands."* — feature copy
- *"We love a holiday! But we also believe every moment is worth romanticizing."* — feature section headline
- *"Create & Celebrate."* — brand tagline, blog subtitle
- *"Give it a try. Have some fun."* — user review echoing brand voice register

## 11. Brand Narrative

PicCollage was created by Cardinal Blue Software, Inc., a Taipei-based studio that believed photo sharing could be more than a stream of single images. Founded in 2011, the app launched as a simple drag-and-drop collage tool for iOS and quickly spread virally among users who wanted to tell stories with multiple photos in a single frame. Within a few years it had grown to tens of millions of downloads, establishing itself as a staple creative tool across Asia and North America.

Today PicCollage serves over 270 million people worldwide, operating under the mission "Create, Celebrate, Connect." The company has expanded into a suite of creative apps — OnBeat for music-driven video, BEAM, Noodle, and MemeMe — anchored by a shared philosophy of "Creative AI": AI that acts as a creative assistant, never a creative replacement. The company tagline captures this spirit in three words: "Make the World Fun & Creative."

The product's design language mirrors this mission. Warm, scrapbook-inspired surfaces and rounded, inviting controls signal that creativity here is for everyone — not just designers. Every template update, sticker pack, and holiday campaign is an act of celebration: an invitation to document life's small moments with the same ceremony reserved for big milestones.

## 12. Principles

1. **Creativity is for everyone.**
   Everyone can be creative with the right tools. PicCollage designs for first-time creators, not expert designers.
   *UI implication:* Use familiar, forgiving affordances — pill buttons, clear iconography, visible undo — so users never feel punished for experimenting.

2. **AI assists; people create.**
   AI tools are positioned as magic helpers that expand ideas, never as robots that replace personal expression.
   *UI implication:* AI features sit alongside manual tools, not above them; show the user's photo or input front-and-centre, AI output as an overlay or suggestion layer.

3. **Every moment deserves celebration.**
   The brand refuses to reserve ceremony for only the big milestones; ordinary days are worth commemorating.
   *UI implication:* Offer templates and stickers for everyday occasions (Tuesday photo dumps, random lunch photos) alongside birthdays and holidays; avoid a hierarchy that only surfaces "important" event categories.

4. **Designs should feel fresh, always.**
   The design library is updated weekly; users should never run out of inspiration.
   *UI implication:* Prominently surface "New" and "Trending" badges in template grids; use motion cues (subtle shimmer or marquee scroll) to signal freshness without overwhelming the canvas.

5. **Warmth over polish.**
   Craft is valued, but approachability trumps perfection. The aesthetic is intentionally hand-made feeling.
   *UI implication:* Prefer soft, diffuse shadows and beige/cream surfaces over stark white; allow collage imperfection (overlapping elements, slight rotations) in template previews.

## 13. Personas

*Illustrative — these are representative archetypes inferred from brand copy, user reviews, and app-store description, not from first-party research.*

**The Celebration Architect — Mia, 32**
Parents, birthdays, holidays: Mia runs the family memory archive. She uses PicCollage weekly to create invitation cards, countdown collages, and holiday cards. She wants beautiful output fast — she doesn't have time to learn Photoshop, but she cares deeply that the result looks personal and thoughtful. She gets frustrated if she can't find a template for exactly her occasion.

**The Social Storyteller — Jake, 22**
Jake uses PicCollage for Instagram photo dumps and Snapchat year-in-reviews. He cares more about vibe and aesthetic than occasion. He explores template libraries the way other people scroll TikTok — browsing for inspiration he didn't know he needed. He loves new sticker drops and will switch to a competing app if PicCollage feels stale.

**The Occasional Sender — Lin, 48**
Lin only opens PicCollage a few times a year — around major holidays and her children's birthdays. She needs the app to be so intuitive that she doesn't have to remember how it works between sessions. Error states and confusing flows make her abandon the task. Success for Lin is finishing and sending in under five minutes, feeling proud of the result.

**The Young Creator — Sam, 14**
Sam uses the app for school projects, creative memes, and friend-group collages. Sam is the fastest user in the room and will find every edge of the canvas. She wants maximum customisation and loves AI magic features. She shares her creations immediately and watches for reactions; the share flow must be frictionless.

## 14. States

- **Empty (no photos):** Warm cream canvas with a dashed-border drop zone, illustrated collage placeholder icons, and an approachable prompt: "Tap to add your first photo" — never a plain error icon
- **Loading / skeleton:** Rounded rectangles (radius 16px) in `#e2ddcf` (beige-200) pulse softly at 1.5s timing; matches card shape exactly to prevent layout shift
- **Error — network:** Inline banner at top of canvas with coral tint (`#f19daf`, pink-300 family); icon + short friendly message ("Couldn't load — tap to retry"); never modal unless blocking
- **Error — upload failed:** Toast notification at bottom of screen, `rgba(0,0,0,0.80)` dark pill, white text; auto-dismisses after 4s; offers "Try again" action
- **Success — save/share:** Brief confetti burst animation (0.7s, `cubic-bezier(.22,1,.36,1)`) centred on canvas, then green-tinted toast; shares to OS share sheet immediately after
- **Skeleton — template grid:** Grid of 16px-radius beige cards animate in with staggered 50ms delay per card; grid layout preserved so items don't reflow when real templates load
- **Disabled state:** `opacity: 0.5`; `cursor: not-allowed`; no border change on teal buttons; applied via `data-disabled` attribute
- **Focus visible:** `outline: 1px solid #298e7d` (teal-600), `outline-offset: 2px` — keyboard-accessible, matches teal brand family

## 15. Motion & Easing

**Duration scale:**
- Micro (hover, color change): 150ms
- Standard (color transition on interactive elements): 200ms
- Expand / accordion: 200ms (`ease-out`)
- Reveal / entry animation: 700ms (`cubic-bezier(.22, 1, .36, 1)` — spring-like)
- Marquee scroll (testimonials): 40s linear infinite
- Loader spin: 3s linear infinite

**Easing tokens:**
- `ease-in-out` — primary transition easing for color and border changes
- `ease-out` — accordion expand, slide-in panels
- `cubic-bezier(.22, 1, .36, 1)` — reveal-from-rect entry animation (bouncy spring)
- `linear` — infinite scroll marquees and spinner

**Motion rules:**
- All color/background transitions on interactive elements use 200ms ease-in-out
- Modals and drawers use 200ms ease-in-out translate; entry from left for drawers (`translateX(-100%)` to 0)
- Hover on collage thumbnails may apply a subtle scale (not measured explicitly; follow standard `scale(1.02)` at 200ms)
- Reduced-motion: `@media (prefers-reduced-motion)` in CSS sets `animation: none` for marquee and loader; all entry animations should respect this
- Never animate content that is the user's creation (the collage canvas itself should not move spontaneously)
