---
id: patreon
name: Patreon
country: US
category: consumer-tech
homepage: "https://www.patreon.com"
primary_color: "#000000"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=patreon.com&sz=128"
verified: "2026-06-17"
added: "2026-06-17"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-17"
  note: "Monochrome system from the 2023 Wolff Olins / Dinamo / Active Theory rebrand. primary = pure black (#000000) CTA fill on light surfaces, inverting to white (#ffffff) on dark surfaces. Single typeface (Oracle) at ultra-light weight 250 for expressive display. Marketing site is rem-scaled ≈1.5×; token sizes are design-intent (≈ live computed ÷ 1.5). Periwinkle/cornflower (#94bbff / #71a0ff) and brand blue (#002a57) are expressive accents, not chrome."
  colors:
    primary: "#000000"
    on-primary: "#ffffff"
    canvas: "#ffffff"
    ink: "#1a1a1a"
    black: "#000000"
    muted: "#999999"
    hairline: "#cccccc"
    near-black: "#0f0c13"
    brand-blue: "#002a57"
    accent-cornflower: "#71a0ff"
    accent-periwinkle: "#94bbff"
    accent-sage: "#9fb08b"
  typography:
    family: { display: "Oracle", body: "Oracle" }
    display-hero: { size: 125, weight: 250, lineHeight: 0.98, tracking: -7.5, use: "Hero wordmark headline, Oracle ultra-light (live computed 187.5px @1.5× root)" }
    display-section: { size: 85, weight: 250, lineHeight: 0.87, tracking: -5.1, use: "Section display headline, Oracle ultra-light (live 127.5px)" }
    stat: { size: 48, weight: 250, lineHeight: 0.80, tracking: -1.92, use: "Big stat figure e.g. '10%' (live 72px)" }
    label-lg: { size: 20, weight: 400, lineHeight: 1.50, use: "Section label / eyebrow, Oracle (live 30px)" }
    subhead: { size: 15, weight: 400, lineHeight: 1.33, tracking: -0.3, use: "Feature subheading, Oracle (live 22.5px)" }
    body: { size: 15, weight: 400, lineHeight: 1.50, use: "Body / card copy, Oracle" }
    nav: { size: 9, weight: 400, use: "Nav item label, Oracle (live 13.5px)" }
    button: { size: 9, weight: 350, use: "Button / CTA label, Oracle (live 13.5px)" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 15, md: 20, lg: 30, pill: 45, full: 9999 }
  shadow:
    none: "none"
  components:
    button-primary-dark: { type: button, bg: "#000000", fg: "#ffffff", radius: "30px", padding: "15px 21px", height: "47px", font: "9px / 350 Oracle", border: "1px solid #000000", use: "Primary CTA on light surfaces — 'Get started'" }
    button-primary-light: { type: button, bg: "#ffffff", fg: "#000000", radius: "30px", padding: "15px 21px", height: "47px", font: "9px / 350 Oracle", border: "1px solid #ffffff", use: "Primary CTA on dark/photo hero — 'Get Started'" }
    button-outline: { type: button, fg: "#ffffff", radius: "30px", padding: "15px 21px", height: "47px", border: "1px solid #ffffff", font: "9px / 350 Oracle", use: "Secondary outline on dark — 'Log in', 'Updates'" }
    nav-item: { type: tab, fg: "#ffffff", radius: "30px", padding: "11px 18px", height: "47px", font: "9px / 400 Oracle", active: "underline / hover bg rgba(255,255,255,0.16)", use: "Top nav menu item on dark header" }
    search-input: { type: input, fg: "#ffffff", radius: "45px", height: "45px", font: "9px / 350 Oracle", use: "'Find a Creator' pill search on dark, translucent fill rgba(255,255,255,0.16)" }
    card-pricing: { type: card, bg: "#ffffff", fg: "#1a1a1a", radius: "30px", border: "1px solid #cccccc", use: "Pricing / feature card — shadow-free, hairline outline" }
    chip-translucent: { type: badge, fg: "#ffffff", radius: "9999px", font: "9px / 400 Oracle", use: "Language / utility chip on dark, fill rgba(255,255,255,0.16)" }
    accent-band: { type: card, bg: "#94bbff", fg: "#000000", radius: "30px", use: "Expressive periwinkle feature band — color as creator energy, not chrome" }
  components_harvested: true
---

# Design System Inspiration of Patreon

## 1. Visual Theme & Atmosphere

Patreon's marketing surface is the rare brand system that treats restraint as a stage and color as something it deliberately gives away. Following its 2023 rebrand (strategy by Wolff Olins, custom type by Dinamo, motion by Active Theory), the interface is uncompromisingly monochrome — pure white (`#ffffff`) canvases and pure black (`#000000`) sections trade places down the page, with text in near-black ink (`#1a1a1a`) or true black (`#000000`) and a quiet muted grey (`#999999`) for support. The chrome itself almost never carries a brand hue; instead, full-bleed documentary photography of real creators fills the hero, and the enormous wordmark-scale headline sits *on top* of the image rather than beside it. The effect is editorial and warm — closer to a culture magazine than a SaaS dashboard.

The defining element is the typeface. The entire site runs in **Oracle**, Dinamo's custom variable typeface for Patreon, on every single text element (a live scan found Oracle on 1,556 elements and effectively nothing else). Display headlines run at an extraordinarily light **weight 250** — "Where podcasts grow", "Start Your Patreon for Free", "Earning made easy" — at hero scale (≈125px design size, 187.5px live computed on the 1.5×-scaled root) with tight negative tracking (≈ -0.06em). This ultra-light, oversized treatment is the brand's signature: confident enough to whisper at billboard scale. Smaller UI text — nav, buttons, body — drops to weight 350–400 at 9–15px, calm and unobtrusive so the creator photography and the headline carry the page.

What makes Patreon unmistakable is its philosophy of *color as creator expression rather than brand swatch*. In Patreon's own words, "Our goal is not to be defined by a shape or a color, but rather by a visual language… one as diverse and expressive as the creators it represents." So the system's saturated hues — a cornflower (`#71a0ff`), a periwinkle (`#94bbff`), a deep brand blue (`#002a57`), a soft sage (`#9fb08b`) — appear as full expressive section *bands*, contextual and rotating, never as a fixed button color. Geometry is all pill: buttons at 30px radius, search at 45px, avatars circular, larger pills at ≈25px. And there are no shadows anywhere — depth comes from photography and the black/white contrast, never from elevation.

**Key Characteristics:**
- Single custom typeface (Oracle by Dinamo) on every text element — no secondary UI font
- Ultra-light weight 250 for all expressive display headlines at billboard scale (≈125px hero)
- Strict monochrome chrome: pure black (`#000000`) and pure white (`#ffffff`) trade places, ink at `#1a1a1a`
- Color as creator expression — saturated bands (`#94bbff`, `#71a0ff`, `#002a57`, `#9fb08b`), never fixed brand chrome
- Pill geometry everywhere — 30px buttons, 45px search, circular avatars, full-round chips
- Shadow-free system — depth from full-bleed photography and black/white contrast
- Surface-inverting primary CTA — black fill on light, white fill on dark
- Tight negative tracking on display headlines (≈ -0.06em); body text relaxed at weight 400

## 2. Color Palette & Roles

### Primary (Monochrome)
- **Stage Black** (`#000000`): The primary action color and the dark-section background. As a CTA it is a pure-black fill with white text on light surfaces; as a backdrop it is the full black hero/section behind white photography captions and the ultra-light wordmark.
- **Paper White** (`#ffffff`): Page canvas, the inverted CTA fill on dark/photo heroes, and all text on black sections. The two-tone black/white duality is the entire chrome system.
- **Obsidian Ink** (`#1a1a1a`): Near-black primary text and card copy on white surfaces (live `color(srgb 0.1 0.1 0.1)`, ×298). Slightly softened from pure black for long-form reading.

### Neutral Support
- **Muted Grey** (`#999999`): Secondary/metadata text, captions, de-emphasized labels (live `color(srgb 0.6 0.6 0.6)`).
- **Hairline Grey** (`#cccccc`): Thin card outlines and dividers — the primary separation device in a shadow-free system (live `color(srgb 0.8 0.8 0.8)`).
- **Near-Black Plum** (`#0f0c13`): Occasional deepest-section background, a hair warmer than pure black.

### Expressive Accents (creator-energy bands, not chrome)
- **Brand Blue** (`#002a57`): The deep blue reserved for logo and brand moments — the closest thing to a "Patreon color", used sparingly.
- **Cornflower** (`#71a0ff`): Saturated mid-blue used as an expressive feature-band background.
- **Periwinkle** (`#94bbff`): Lighter blue-violet band background — the warm, inviting expressive surface seen on feature sections.
- **Sage** (`#9fb08b`): Soft muted green used as an alternating expressive section/pricing surface tint.

> Translucent values used in chrome (not in the solid token map): `rgba(255,255,255,0.16)` for utility chips and nav-hover fills on dark; `rgba(255,255,255,0.6)` for secondary captions on photography.

## 3. Typography Rules

### Font Family
- **Display & Body**: `Oracle` (Dinamo's custom variable typeface for Patreon), with system sans fallbacks (`"Noto Sans JP/KR/SC/TC"`, `"Helvetica Neue"`, `Helvetica`, `Arial`, `sans-serif`). One typeface does every job — there is no separate UI font.
- **Variable axis**: Oracle ships a full variable weight range; the brand uses an adaptive wordmark that "shifts in density and softness depending on its context" — thin to spotlight the creator, heavier to spotlight Patreon.

### Hierarchy

| Role | Font | Size (design) | Live computed | Weight | Line Height | Letter Spacing | Notes |
|------|------|---------------|---------------|--------|-------------|----------------|-------|
| Display Hero | Oracle | ≈125px | 187.5px | 250 | 0.98 | -7.5px (≈ -0.06em) | Hero wordmark headline, ultra-light |
| Display Section | Oracle | ≈85px | 127.5px | 250 | 0.87 | -5.1px (≈ -0.06em) | Section display headlines |
| Stat Figure | Oracle | ≈48px | 72px | 250 | 0.80 | -1.92px | Big numbers ("10%") |
| Label Large | Oracle | ≈20px | 30px | 400 | 1.50 | normal | Section label / eyebrow |
| Subhead | Oracle | ≈15px | 22.5px | 400 | 1.33 | -0.3px | Feature subheading |
| Body | Oracle | ≈15px | — | 400 | 1.50 | normal | Card / body copy |
| Nav | Oracle | ≈9px | 13.5px | 400 | normal | normal | Top nav item labels |
| Button | Oracle | ≈9px | 13.5px | 350 | normal | normal | CTA / button labels |

*Live computed sizes read ≈1.5× the design size because the marketing site enlarges its rem root; the proportions and weights are exact.*

### Principles
- **One typeface, full range**: Oracle does display, body, nav, and buttons. The hierarchy comes from weight (250 vs 400) and dramatic scale, not from font switching.
- **Ultra-light as signature**: Weight 250 on giant headlines is the brand's most distinctive choice — billboard-scale type that doesn't shout. Heavier weights are reserved for the adaptive wordmark when Patreon needs the spotlight.
- **Scale is the hierarchy**: The jump from ≈125px display to ≈15px body is enormous and intentional — the headline is a graphic element, the body recedes.
- **Tight display tracking**: ≈ -0.06em on display sizes compresses the ultra-light letters into a cohesive block; body text returns to normal tracking.

## 4. Component Stylings

### Buttons

**Primary (on light surface)**
- Background: `#000000`
- Text: `#ffffff`
- Border: 1px solid `#000000`
- Radius: 30px
- Padding: 15px 21px
- Height: 47px
- Font: 9px Oracle weight 350
- Use: Primary CTA on white surfaces — "Get started" on pricing/feature sections

**Primary (on dark / photo hero)**
- Background: `#ffffff`
- Text: `#000000`
- Border: 1px solid `#ffffff`
- Radius: 30px
- Padding: 15px 21px
- Height: 47px
- Font: 9px Oracle weight 350
- Use: Primary CTA on dark heroes — "Get Started" in the nav over photography

**Outline (on dark)**
- Text: `#ffffff`
- Border: 1px solid `#ffffff`
- Radius: 30px
- Padding: 15px 21px
- Height: 47px
- Font: 9px Oracle weight 350
- Hover: fill shifts to `rgba(255,255,255,0.16)`
- Use: Secondary actions on dark — "Log in", "Updates"

### Inputs & Forms

**Find-a-Creator Search**
- Text: `#ffffff`
- Radius: 45px
- Height: 45px
- Font: 9px Oracle weight 350
- Use: Pill search field on the dark header; translucent `rgba(255,255,255,0.16)` fill

### Cards & Containers

**Pricing / Feature Card**
- Background: `#ffffff`
- Text: `#1a1a1a`
- Border: 1px solid `#cccccc`
- Radius: 30px
- Use: Shadow-free card with hairline outline on white surfaces

**Expressive Accent Band**
- Background: `#94bbff`
- Text: `#000000`
- Radius: 30px
- Use: Full-width periwinkle feature band — color as creator energy, rotating/contextual

### Badges & Chips

**Translucent Utility Chip**
- Text: `#ffffff`
- Radius: 9999px
- Font: 9px Oracle weight 400
- Use: Language selector / utility chip on dark; `rgba(255,255,255,0.16)` fill

### Navigation
- Background: `#000000` (dark photo header) or `#ffffff`
- Text: `#ffffff` on dark
- Font: 9px Oracle weight 400
- Radius: 30px on item hit-area
- Height: 47px items
- Hover: `rgba(255,255,255,0.16)` fill
- Use: Top nav ("Creators", "Features", "Pricing", "Resources", "Updates") with the "PATREON" wordmark left-aligned and "Get Started" pill right-aligned

---

**Verified:** 2026-06-17 (omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces)
**Tier 1 sources:** https://www.patreon.com, https://www.patreon.com/pricing, https://news.patreon.com/articles/patreon-redesigned, https://abcdinamo.com/custom/patreon
**Tier 2 sources:** getdesign.md/patreon — no entry ("No designs found"); styles.refero.design/style/bb94375b-cf09-47d4-a2e3-7b332b2c9216 — Patreon entry, corroborates Oracle 250–500 / 30px buttons / 45px inputs / `#1a1a1a` ink / `#002a57` brand blue / shadow-free
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px
- Notable: button padding lands at 15px 21px (live); sections breathe with 64px+ vertical gaps so full-bleed photography and the billboard headline have room

### Grid & Container
- Full-bleed photographic heroes with the oversized Oracle headline overlaid in the lower-left or spanning the width
- Centered content columns for feature copy and pricing
- Alternating full-width bands: black sections, white sections, and expressive color bands (`#94bbff`, `#71a0ff`, `#9fb08b`) for rhythm
- Pricing cards group at 30px radius with hairline outlines

### Whitespace Philosophy
- **Photography over ornament**: the visual richness comes from real human creator photography, not from interface decoration. Whitespace frames the photo and the headline.
- **Band rhythm**: the page reads as a sequence of full-width bands (black / white / color) rather than a card grid — cinematic, scroll-driven, editorial.
- **Headline as graphic**: the ultra-light billboard headline is treated as a layout element in its own right, not just a label.

### Border Radius Scale
- Medium (15–20px): inner containers
- Large (30px): buttons, cards — the workhorse pill radius
- Pill (45px): search input
- Full (9999px / 50%): chips, circular avatars and icons

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Every surface — page, cards, buttons, nav |
| Hairline (Level 1) | `1px solid #cccccc` border | Card outlines, dividers |
| Photographic (Level 2) | Full-bleed image with text overlay | Hero / section depth comes from imagery |
| Color band (Level 3) | Full-width saturated background (`#94bbff` / `#71a0ff` / `#9fb08b`) | Expressive emphasis, creator-energy moments |

**Shadow Philosophy**: Patreon is a deliberately shadow-free system. Live inspection found `box-shadow: none` across nav, hero CTAs, headings, and pricing cards. Depth is communicated entirely through full-bleed documentary photography, the stark black/white contrast of inverting sections, and expressive color bands. Hairline `#cccccc` borders separate white cards. When the system needs emphasis it reaches for scale, photography, or a saturated color band — never elevation. This keeps the interface flat, editorial, and focused on the creators in the imagery rather than on UI chrome.

## 7. Do's and Don'ts

### Do
- Use Oracle for everything — display, body, nav, buttons; one typeface does every job
- Set expressive headlines at weight 250 and billboard scale — ultra-light is the signature
- Keep chrome strictly monochrome — pure black (`#000000`) and pure white (`#ffffff`)
- Use near-black `#1a1a1a` for body ink on white, not a grey
- Invert the primary CTA by surface — black fill on light, white fill on dark
- Treat color (`#94bbff`, `#71a0ff`, `#002a57`, `#9fb08b`) as expressive creator-energy bands, contextual and rotating
- Use pill geometry throughout — 30px buttons, 45px search, circular avatars
- Let full-bleed creator photography carry depth and warmth
- Apply tight negative tracking (≈ -0.06em) on display headlines

### Don't
- Add drop shadows for elevation — the system is flat and shadow-free
- Pin a single fixed brand color to buttons — color belongs to creator expression, chrome stays monochrome
- Set display headlines in a heavy weight — ultra-light 250 is the voice at scale
- Introduce a second UI typeface — Oracle covers the whole range
- Use sharp/square corners on interactive elements — geometry is pill
- Use mid-grey for body text — reserve near-black `#1a1a1a`
- Let interface ornament compete with the creator photography
- Apply positive letter-spacing at display sizes — Patreon tracks tight

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, billboard headline compresses, photo heroes stack |
| Tablet | 640-1024px | Moderate padding, 2-up feature/pricing cards |
| Desktop | 1024-1440px | Full-bleed heroes, multi-band layout, oversized headlines |

### Touch Targets
- Buttons at 47px height with 15px 21px padding — comfortably tappable pills
- Search input at 45px height, full pill
- Nav items at 47px height with generous spacing

### Collapsing Strategy
- Hero: billboard Oracle headline scales down on mobile, weight 250 maintained
- Bands: black / white / color full-width treatment maintained; internal padding reduces
- Pricing/feature cards: multi-column → stacked single column, 30px radius retained
- Photography: full-bleed heroes keep aspect via cover-crop, text overlay reflows

### Image Behavior
- Full-bleed creator photography is the load-bearing visual — kept edge-to-edge at all sizes, no shadow
- Cards maintain 30px radius and hairline outline across breakpoints
- Color bands maintain full-width saturated treatment

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA (light surface): Stage Black (`#000000`) fill, white text
- Primary CTA (dark surface): Paper White (`#ffffff`) fill, black text
- Canvas: Paper White (`#ffffff`)
- Dark section: Stage Black (`#000000`)
- Body ink: Obsidian (`#1a1a1a`)
- Muted text: Grey (`#999999`)
- Hairline: `#cccccc`
- Brand blue: `#002a57`
- Expressive accents: Cornflower (`#71a0ff`), Periwinkle (`#94bbff`), Sage (`#9fb08b`)

### Example Component Prompts
- "Create a full-bleed photo hero (real creator portrait). Overlay a billboard headline in Oracle, weight 250, ~125px, line-height 0.98, letter-spacing -0.06em, white text. Top nav over the photo: 'PATREON' wordmark left, menu items in Oracle 9px weight 400 white, and a white pill 'Get Started' CTA (#ffffff fill, #000000 text, 30px radius, 15px 21px padding) right-aligned. No shadows."
- "Design a pricing card: white #ffffff background, 1px solid #cccccc border, 30px radius, no shadow. Title in Oracle weight 250 at large scale, #1a1a1a. Body Oracle 15px weight 400, #1a1a1a. Black pill CTA: #000000 fill, white text, 30px radius."
- "Build an expressive feature band: full-width #94bbff periwinkle background, black #000000 Oracle headline weight 250, supporting copy in Oracle weight 400. Treat the color as creator energy — rotating, contextual."
- "Create a search input: pill at 45px radius, translucent rgba(255,255,255,0.16) fill on a dark header, white Oracle text — 'Find a Creator'."

### Iteration Guide
1. Oracle everywhere; hierarchy from weight (250 display / 400 body) and scale, never font switching
2. Chrome is monochrome black/white; color only appears as expressive full-width bands
3. No shadows — separate with `#cccccc` hairlines and black/white contrast
4. Invert the primary CTA by surface (black on light, white on dark)
5. Pill geometry — 30px buttons, 45px search, circular avatars
6. Billboard-scale ultra-light headlines with tight -0.06em tracking
7. Let creator photography carry warmth and depth

---

## 10. Voice & Tone

Patreon's voice is **warm, creator-first, and quietly confident** — it speaks to and about creators, not about itself. The 2023 brand framing makes this explicit: the company describes its goal as building "a visual language… one as diverse and expressive as the creators it represents," and its photography brief is about "heroizing creators in a way that feels inviting and warm." Headlines are declarative and human ("Where podcasts grow", "Your wildest creative reality", "Make it making art", "Creator is now a career"), and CTAs are direct and low-friction ("Get started", "Get Started for Free").

| Context | Tone |
|---|---|
| Hero headlines | Declarative, human, creator-centered. "Where podcasts grow." "Your wildest creative reality." |
| Feature headlines | Plain-benefit, confident. "Complete creative control." "Earning made easy." |
| CTAs | Direct, low-pressure. "Get started", "Start Your Patreon for Free". |
| Pricing copy | Plain and reassuring. "Secure payments handled for you." "We handle taxes." "No setup headaches." |
| Brand / mission | Mission-framed, generous — centers creators over the company. |

**Voice samples (verbatim from live surfaces):**
- "Where Creator Communities Thrive" — homepage title (mission-framed positioning). *(verified live 2026-06-17)*
- "Start Your Patreon for Free" — pricing hero headline (low-friction onboarding). *(verified live 2026-06-17)*
- "Our goal is not to be defined by a shape or a color, but rather by a visual language… one as diverse and expressive as the creators it represents." — Patreon brand announcement. *(verified via news.patreon.com 2026-06-17)*

**Forbidden register**: corporate self-promotion that centers the platform over creators, hype-laden urgency, fear-based monetization pitches, and anything that treats color or logo as a rigid brand asset rather than a creator canvas.

## 11. Brand Narrative

Patreon was co-founded in **2013** by **Jack Conte** and **Sam Yam** ([Patreon fact sheet](https://c5.patreon.com/external/press/resources/fact-sheet.pdf), [Wikipedia](https://en.wikipedia.org/wiki/Patreon)). Conte — half of the indie band Pomplamoose — built the first version because YouTube ad revenue couldn't come close to funding the work he wanted to make; his college roommate Sam Yam saw the opportunity to connect creators directly to their fans' support ([TechCrunch](https://techcrunch.com/2019/02/12/patreon-story/)). The premise was, and remains, a rejection of the ad-funded attention economy: let fans pay creators directly through membership so creators can "afford the freedom to do their best work, and the stability to build an independent creative career" ([patreon.com/about](https://www.patreon.com/about)). By 2021 the company was valued at roughly **$4 billion**, and fans have sent creators on the order of **$10 billion** since launch ([CNBC](https://www.cnbc.com/2022/03/31/how-jack-conte-sam-yam-built-a-4-billion-start-up-called-patreon.html)).

In **October 2023** Patreon overhauled its brand with partners Wolff Olins (strategy), Dinamo (the custom Oracle typeface and a variable, ever-shifting wordmark), Active Theory (digital and motion), and artist David McLeod. The centerpiece was a logo with no canonical form: "Our new logo does not have an exact canonical form, there isn't one definitive Patreon logo." The system was built "motion-first for a digital-first world," embracing "animation, interactivity, contextual adaptation, and color transformation" rather than 20th-century retail conventions.

What Patreon refuses, visible in its design: a fixed brand color, a frozen logo, and interface ornament that competes with the work. What it embraces: a single expressive typeface at the extremes of its weight range, a strictly monochrome chrome so that *color belongs to creators*, full-bleed documentary photography that heroizes real people, and a planned tool letting creators render the Patreon mark in their own colors, textures, and motion. The design is, in essence, a brand that gets out of the way.

## 12. Principles

1. **The creator is the brand.** Patreon's identity foregrounds creators over the company. *UI implication:* full-bleed creator photography carries the page; chrome stays monochrome so nothing competes with the work.
2. **Color belongs to creators.** The system refuses a single fixed brand swatch. *UI implication:* keep buttons and chrome black/white; reserve saturated hues (`#94bbff`, `#71a0ff`, `#9fb08b`) for expressive, rotating, contextual bands.
3. **One voice, full range.** Oracle does every typographic job across its variable weight axis. *UI implication:* derive hierarchy from weight (250 vs 400) and scale, never from font switching.
4. **Get out of the way.** The lighter wordmark/weight exists "to put creators in the spotlight." *UI implication:* ultra-light billboard headlines and unobtrusive UI text; minimal ornament.
5. **Motion-first, contextual.** Built for a digital-first world that animates and adapts. *UI implication:* design for transformation and context, not a static, frozen mark.
6. **Flat, warm, editorial.** *UI implication:* no shadows; depth from photography and black/white contrast; hairline `#cccccc` separation.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Patreon user segments (independent creators monetizing via membership, and their paying fans), not individual people.*

**Devon Marsh, 34, Portland.** A video essayist who left ad-supported platforms to fund long-form work through membership. Chose Patreon because it centers the creator, not the algorithm, and because the brand "feels like it's about us, not about them." Wants tools that handle payments and taxes so he can keep making.

**Priya Anand, 27, London.** An illustrator running a tiered membership with monthly process zines. Loves that she can present Patreon's mark in her own palette and that the interface doesn't fight her aesthetic. Values the warm, photographic brand over a clinical SaaS look.

**Marcus Webb, 41, Atlanta.** A podcaster scaling from hobby to career. Reads the pricing page closely — "Secure payments handled for you", "We handle taxes", "No setup headaches" — and trusts the plain, reassuring tone. Wants a stable, independent creative income, not virality.

**Sofia Reyes, 23, Mexico City.** A longtime fan who supports three creators monthly. Experiences Patreon mostly through creators' pages, where the platform recedes and the creator's identity dominates — exactly the point.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no creators / no posts yet)** | White canvas, single Obsidian (`#1a1a1a`) line in Oracle explaining the empty state, with one black pill CTA to get started. No illustration clutter — restraint is the brand. |
| **Empty (search, no results)** | Muted Grey (`#999999`) single line in Oracle: nothing found, with a path to adjust the query. Calm and plain. |
| **Loading (page / feed)** | Flat skeleton blocks at final dimensions, 30px radius, hairline `#cccccc` outline, no shadow shimmer — consistent with the shadow-free system. |
| **Loading (in-place)** | Subtle progress within the control; previous content stays visible. No spinner-blocking. |
| **Error (action failed)** | Inline message in Obsidian (`#1a1a1a`) Oracle with a plain-language explanation and a retry. No generic "Something went wrong" alone. |
| **Error (form validation)** | Field-level message below the input describing what is valid, not just "Required". |
| **Success (membership / payment)** | Brief inline confirmation in calm Oracle tone; next-step detail linked immediately below. No celebratory emoji. |
| **Skeleton** | `#cccccc`-outlined blocks at final dimensions, 30px radius, flat pulse. |
| **Disabled** | Reduced-opacity surface and `#999999` text; pill geometry and monochrome preserved. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button/chip press, focus |
| `motion-standard` | 240ms | Card/section reveal, sheet, dropdown |
| `motion-slow` | 400ms | Band-to-band scroll transitions, hero reveals |
| `motion-brand` | 600ms+ | Morphing logo / wordmark density shifts, ambient color transformation |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — bands, cards, sheets |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Patreon is explicitly a "motion-first brand for a digital-first world" — motion is a first-class identity element, not decoration. The signature is the morphing logo and the variable wordmark, which shift density and softness by context (thin to spotlight the creator, heavier to spotlight Patreon), and ambient color transformation across expressive bands. Interactive UI motion stays quiet and functional: pill controls respond with a subtle scale/opacity shift; bands reveal from below at `motion-standard / ease-enter`. The brand-level morphing and color transformation live in a slower, ambient register (`motion-brand`). Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the logo/wordmark hold a static form; the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-17) via playwright getComputedStyle on https://www.patreon.com
and https://www.patreon.com/pricing:
- Oracle typeface on 1,556 elements (single-typeface system)
- Display headlines weight 250 at billboard scale (live 187.5px hero / 127.5px section), tracking ≈ -0.06em
- Monochrome chrome: #000000 / #ffffff trade places; ink #1a1a1a; muted #999999; hairline #cccccc
- Pill geometry: 30px buttons, 45px search, 9999px chips, 50% avatars
- box-shadow: none across nav/hero/cards (shadow-free)
- Expressive accent bands from frequency scan: #71a0ff, #94bbff, #002a57, #9fb08b
- Surface-inverting primary CTA: #000000 fill on light, #ffffff fill on dark
- Page titles: "Where Creator Communities Thrive — Patreon", "Patreon Pricing Plans — Patreon"
- Voice samples (§10) are verbatim from live homepage/pricing titles and headings.

Token-level claims (§1-9) are sourced from this live inspection plus Tier 2 refero corroboration
(styles.refero.design Patreon entry: Oracle 250–500, 30px buttons, 45px inputs, #1a1a1a ink,
#002a57 brand blue, shadow-free). getdesign.md has no Patreon entry.

Brand-redesign quotes (§1, §10, §11, §12, §15) are verbatim/paraphrased from Patreon's own brand
announcement (https://news.patreon.com/articles/patreon-redesigned) and Dinamo's typeface page
(https://abcdinamo.com/custom/patreon): "our new logo does not have an exact canonical form",
"a visual language… as diverse and expressive as the creators it represents", "motion-first brand
for a digital-first world", the Oracle variable wordmark shifting density to spotlight creator vs
Patreon, and the credited partners (Wolff Olins, Dinamo, Active Theory, David McLeod).

Brand narrative (§11): Patreon co-founded 2013 by Jack Conte and Sam Yam; ~$4B valuation (2021);
~$10B paid to creators. Sourced to Patreon's press fact sheet, patreon.com/about, Wikipedia,
TechCrunch, and CNBC (linked inline).

Personas (§13) are fictional archetypes informed by publicly observable Patreon user segments
(independent creators monetizing via membership and their paying fans). Names are illustrative;
they do not refer to real people.

Interpretive claims (e.g., "the creator is the brand", "color belongs to creators", "a brand that
gets out of the way") are editorial readings connecting Patreon's stated rebrand philosophy to its
observed design, not directly quoted Patreon statements.
-->
