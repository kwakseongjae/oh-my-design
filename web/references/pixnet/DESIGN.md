---
id: pixnet
name: PIXNET
country: TW
category: content
homepage: "https://www.pixnet.net"
primary_color: "#ff7200"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=www.pixnet.net&sz=128"
verified: "2026-06-08"
added: "2026-06-08"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-08"
  note: "primary = live PIXNET orange #ff7200 (login CTA + 68 DOM uses); secondary accent = warm red #ff432b; body type is Noto Serif TC — a serif, unusual for a content platform"
  colors:
    primary: "#ff7200"
    primary-deep: "#e85f00"
    accent-red: "#ff432b"
    accent-tint: "#fcdfda"
    canvas: "#ffffff"
    surface-muted: "#f4f4f4"
    heading: "#423e3c"
    body: "#423e3c"
    label: "#575451"
    muted: "#817f7d"
    muted-2: "#969492"
    on-primary: "#ffffff"
    hairline: "#eaeae9"
    border-soft: "#c0bfbe"
    ink: "#000000"
  typography:
    family: { serif: "Noto Serif TC", sans: "system-ui" }
    heading-lg: { size: 18, weight: 700, lineHeight: 1.33, tracking: 0.5, use: "Section / channel headings, nav emphasis" }
    heading:    { size: 16, weight: 700, lineHeight: 1.50, tracking: 1.2, use: "Card titles, tag labels, h1/h2 inline" }
    body:       { size: 16, weight: 400, lineHeight: 1.50, tracking: 1.2, use: "Standard reading text, article copy" }
    body-sm:    { size: 14, weight: 400, lineHeight: 1.43, use: "Meta, captions, secondary lines" }
    button:     { size: 14, weight: 500, lineHeight: 1.00, use: "Primary CTA label (login)" }
    nav:        { size: 16, weight: 400, lineHeight: 1.50, use: "Header nav links, footer links" }
    caption:    { size: 13, weight: 400, use: "Timestamps, counts, fine print" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 4, md: 6, lg: 12, full: 9999 }
  shadow:
    ambient: "rgba(66,62,60,0.08) 0px 2px 8px"
    standard: "rgba(66,62,60,0.12) 0px 4px 16px"
    elevated: "rgba(66,62,60,0.16) 0px 8px 28px"
  components:
    button-primary: { type: button, bg: "#ff7200", fg: "#ffffff", radius: 6, font: "weight 500, 36px tall", use: "Primary CTA (login)" }
    button-ghost: { type: button, bg: "#ffffff", fg: "#423e3c", radius: 6, use: "Secondary action, 1px #eaeae9 hairline border" }
    tag-pill: { type: badge, bg: "#ffffff", fg: "#423e3c", radius: 6, font: "weight 700", use: "Tag / channel label, hairline border" }
    card: { type: card, bg: "#ffffff", radius: 6, use: "Article/content card, hairline #eaeae9 border, low warm shadow" }
  components_harvested: true
---

# Design System Inspiration of PIXNET

## 1. Visual Theme & Atmosphere

PIXNET (痞客邦) is Taiwan's largest home-grown blogging and content platform, and its design reads exactly like what it is — a warm, editorial, reader-first publishing home rather than a slick venture-funded app. The live homepage opens on a clean white canvas (`#ffffff`) with warm near-black text (`#423e3c`) — not pure black, but a soft brown-charcoal that gives every paragraph the feeling of ink on paper. The single loud color in the entire system is PIXNET orange (`#ff7200`), reserved almost exclusively for the login CTA and a handful of brand moments. Everything else is a quiet ladder of warm grays. The result is a platform that feels approachable, lived-in, and unmistakably Taiwanese-blog in heritage: content is the hero, chrome recedes.

The defining and genuinely unusual choice is the typeface. PIXNET sets its entire interface in **Noto Serif TC** — a Traditional Chinese serif. Where almost every modern content platform reaches for a clean sans-serif (and where Western training-data instincts would default to one), PIXNET commits to a serif body face at 16px / 24px line-height. For Traditional Chinese, a serif (明體/宋體 lineage) carries connotations of readability, literary weight, and the long-form blogging culture PIXNET grew up in. This single decision sets the whole mood: this is a place for reading articles, recipes, travel diaries, and reviews — not for scanning a feed.

The color temperature is consistently warm. Even the grays lean brown (`#969492`, `#817f7d`, `#575451`), the hairlines are a warm off-white (`#eaeae9`), and the secondary accent is a hot red-orange (`#ff432b`) rather than a cool blue. There is no corporate blue anywhere in the palette. Shadows are minimal and warm-tinted; elevation is communicated mostly through the hairline border system and the `#f4f4f4` muted surface (used for the footer) rather than through dramatic float.

**Key Characteristics:**
- Noto Serif TC as the system typeface — a Traditional Chinese serif, rare for a content platform and central to the brand
- Warm near-black text (`#423e3c`) instead of pure black — ink-on-paper warmth
- PIXNET orange (`#ff7200`) as a tightly rationed brand/CTA color, not a flood
- Secondary warm red accent (`#ff432b`) for highlights and hot/trending markers
- A ladder of warm browns-grays (`#575451` / `#817f7d` / `#969492`) for hierarchy
- Hairline-driven structure: `#eaeae9` borders carry layout, not heavy shadows
- 6px border-radius on buttons and tags — soft but not pill-shaped
- White canvas with a `#f4f4f4` muted surface for footer / secondary zones

## 2. Color Palette & Roles

### Primary
- **PIXNET Orange** (`#ff7200`): The brand anchor. Used for the primary CTA (the `登入` / login button fill), brand accents, and active/hot markers. A saturated, energetic orange that is the single loud note in an otherwise warm-neutral system. Verified live as the login button background and the most-used non-neutral color (68 DOM occurrences).
- **Orange Deep** (`#e85f00`): Darker orange for hover/pressed states on the primary CTA. A reasoned step down in lightness from `#ff7200`.
- **Pure White** (`#ffffff`): Page background, card surfaces, and the text color on the orange CTA.

### Accent
- **Warm Red** (`#ff432b`): Secondary accent for trending/hot indicators, badges, and emphasis. A hot red-orange that pairs with the primary without competing — measured live at 48 DOM occurrences.
- **Accent Tint** (`#fcdfda`): A soft peach tint used as a subtle highlight surface and hover wash for accent-themed elements.

### Text / Ink Scale
- **Warm Ink** (`#423e3c`): The workhorse text color for headings, body, nav links, and labels. A warm brown-charcoal — not pure black. This is the dominant foreground (902 DOM occurrences).
- **Label** (`#575451`): Slightly lighter warm gray for secondary headings and nav hover states.
- **Muted** (`#817f7d`): Tertiary text — captions, meta lines, timestamps.
- **Muted 2** (`#969492`): The lightest readable gray for fine print, counts, and de-emphasized metadata.
- **Pure Ink** (`#000000`): Reserved for rare maximum-contrast moments (icons, dividers); body text deliberately avoids it in favor of `#423e3c`.

### Surface & Borders
- **Canvas** (`#ffffff`): Primary background and card surface.
- **Surface Muted** (`#f4f4f4`): The footer background and secondary zone surface — a near-white warm gray.
- **Hairline** (`#eaeae9`): The structural border color. Carries card edges, dividers, input outlines, and ghost-button borders. The most-used color overall (1083 DOM occurrences) — structure lives in the hairline, not in shadow.
- **Border Soft** (`#c0bfbe`): A slightly stronger warm border for hover/active container states.

### Color Usage Rules
- Orange (`#ff7200`) is a CTA and brand color — it is not used for body text, large fills, or decorative flooding.
- All foreground text is `#423e3c` or a lighter warm gray; pure `#000000` is avoided for reading text.
- The hairline `#eaeae9` does the structural heavy lifting; shadows stay subtle and warm.
- Red (`#ff432b`) signals hot/trending/emphasis — never a primary action.

## 3. Typography Rules

### Font Family
- **Primary**: `"Noto Serif TC"`, with fallback `"Noto Serif TC Fallback"`, then system serif. A Traditional Chinese serif used across the entire interface — body, headings, nav, and most UI text.
- **Secondary**: `system-ui` / sans-serif appears only in narrow utility contexts; the brand identity is the serif.
- **Verified live**: `font-family: "Noto Serif TC", "Noto Serif TC Fallback"` on `body`, base size 16px, line-height 24px.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Heading Large | Noto Serif TC | 18px | 700 | 1.33 | 0.5px | Channel / section heads, nav emphasis ("gogo+香港", "大試用時代") |
| Heading | Noto Serif TC | 16px | 700 | 1.50 | 1.2px | Card titles, tag labels, inline h1/h2 |
| Body | Noto Serif TC | 16px | 400 | 1.50 | 1.2px | Standard reading text, article copy |
| Body Small | Noto Serif TC | 14px | 400 | 1.43 | normal | Meta, captions, secondary lines |
| Button | Noto Serif TC | 14px | 500 | 1.00 | normal | Primary CTA label (login) |
| Nav Link | Noto Serif TC | 16px | 400 | 1.50 | normal | Header nav links, footer links |
| Caption | Noto Serif TC | 13px | 400 | normal | normal | Timestamps, counts, fine print |

### Principles
- **Serif is the brand.** Noto Serif TC is the single most distinctive typographic decision. It signals long-form, literary, reader-first heritage. Do not substitute a sans-serif — that erases the PIXNET identity.
- **Weight is the hierarchy tool, not size.** The homepage runs most text at 16px and distinguishes headings from body almost entirely through weight (700 vs 400). Size steps are small (18 / 16 / 14 / 13).
- **Positive tracking on Chinese text.** A small positive letter-spacing (0.5–1.2px) is applied to Traditional Chinese text for breathing room and readability — the opposite of the negative tracking used by Latin-display systems.
- **Two weights, mostly.** 400 (regular) for reading, 700 (bold) for emphasis, with 500 reserved for the CTA label. There is no light/thin display weight — the serif already carries the personality.

## 4. Component Stylings

### Buttons

**Primary (Login / CTA)**
- Background: `#ff7200`
- Text: `#ffffff`
- Padding: 8px 12px
- Radius: 6px
- Height: 36px
- Font: 14px Noto Serif TC weight 500
- Hover: background shifts to `#e85f00`
- Use: The primary call to action — `登入` (login), sign-up, and brand actions. Verified live.

**Ghost / Tag (Trending pill)**
- Background: `#ffffff` (or transparent)
- Text: `#423e3c`
- Padding: 8px 12px
- Radius: 6px
- Height: 36px
- Border: `1px solid #eaeae9`
- Font: 16px Noto Serif TC weight 700
- Use: Hashtag / trending tag pills on the homepage (`#長榮航空`, `#親子旅遊`, `#日本旅遊`). Bold serif label, hairline border, white fill. Verified live.

**Quiet / Nav**
- Background: transparent
- Text: `#423e3c` (hover `#575451`)
- Padding: 8px 12px
- Radius: 6px
- Font: 16px Noto Serif TC weight 400
- Use: Header navigation and footer links.

### Cards & Containers
- Background: `#ffffff`
- Border: `1px solid #eaeae9` (hairline carries the edge)
- Radius: 6px on interactive cards; content thumbnails are often sharp (0px) so imagery reads edge-to-edge
- Shadow (standard): `rgba(66,62,60,0.12) 0px 4px 16px` — warm-tinted, subtle
- Hover: border deepens to `#c0bfbe`, optional lift to elevated shadow
- Dark feature card variant: `#423e3c` fill with white/light text for emphasis blocks

### Tags / Pills / Badges
- **Trending tag**: white/transparent fill, `#423e3c` 700-weight serif text, `1px #eaeae9` border, 6px radius
- **Hot / new badge**: `#ff432b` fill or `#ff7200` fill with white text for "hot" / "new" markers
- **Tint badge**: `#fcdfda` peach background with `#423e3c` text for soft category labels

### Inputs & Forms
- Border: `1px solid #eaeae9`
- Radius: 6px
- Focus: border shifts to `#ff7200` (orange) or `#c0bfbe`
- Text: `#423e3c`
- Placeholder: `#969492`
- Label: `#575451`, 14px Noto Serif TC

### Navigation
- White (`#ffffff`) sticky header, ~73px tall (verified live)
- PIXNET wordmark / logo left-aligned
- Links: Noto Serif TC 16px weight 400, `#423e3c` text; emphasized channel links at 18px weight 700
- Search field with hairline border and 6px radius
- Orange `登入` (login) CTA right-aligned (`#ff7200` fill, white text, 6px radius)
- Footer on `#f4f4f4` muted surface with `#423e3c` links

### Decorative Elements
- **Accent washes**: `#fcdfda` peach tints behind featured/sponsored content blocks
- **Hot markers**: `#ff432b` and `#ff7200` for trending/ranking numerals and "熱門" (hot) flags
- **Dark feature panels**: `#423e3c` background with light text for editorial highlight modules

---

**Verified:** 2026-06-08 (live inspect — playwright getComputedStyle, homepage)
**Tier 1 sources:** https://www.pixnet.net, https://www.pixnet.net/about (live DOM: body `font-family: "Noto Serif TC"`, login CTA fill `#ff7200` 6px radius 36px, text `#423e3c`, hairline `#eaeae9`, footer `#f4f4f4`, accent red `#ff432b`)
**Method:** getComputedStyle on body, h1, login button, tag pills, nav links, header, footer; lab() values resolved to #hex via canvas; top-15 DOM color frequency sampled.
**`.verification.md`:** `web/references/pixnet/.verification.md`

## 5. Layout Principles

### Spacing System
- Base unit: 8px (with a 4px sub-step)
- Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px
- Component padding is compact (8px 12px on buttons/tags), reflecting a dense, content-rich homepage

### Grid & Container
- Wide multi-column homepage grid — channel rows, trending tags, and content cards
- Content thumbnails dominate; chrome is thin so the grid reads as a magazine of articles
- Header bar at ~73px, full-width white, sticky
- Footer on `#f4f4f4` muted surface, full-width

### Whitespace Philosophy
- **Editorial density.** PIXNET is a publishing home, so the homepage packs many content entries per screen, separated by hairlines rather than large gaps. Whitespace is purposeful and moderate, not luxurious.
- **Hairlines over gaps.** Structure is communicated by `#eaeae9` dividers and borders, letting more content fit without feeling cramped.
- **Reading column comfort.** Inside articles, the serif body at 16px / 24px line-height with positive tracking gives a comfortable, paper-like reading measure.

### Border Radius Scale
- Sharp (0px): content thumbnails / imagery, so pictures read edge-to-edge
- Small (4px): subtle rounding on minor chips
- Standard (6px): buttons, tags, inputs, interactive cards — the workhorse
- Large (12px): featured modules and larger containers
- Full (9999px): avatar circles and round icon buttons only

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow, hairline border only | Page background, inline content, most cards |
| Ambient (Level 1) | `rgba(66,62,60,0.08) 0px 2px 8px` | Subtle hover lift on cards |
| Standard (Level 2) | `rgba(66,62,60,0.12) 0px 4px 16px` | Hovered content cards, dropdowns |
| Elevated (Level 3) | `rgba(66,62,60,0.16) 0px 8px 28px` | Modals, menus, floating panels |
| Focus Ring | `2px solid #ff7200` outline | Keyboard focus on interactive elements |

**Shadow Philosophy**: PIXNET communicates depth primarily through its hairline border system (`#eaeae9`) and surface contrast (white cards on white/`#f4f4f4`), not through dramatic shadows. When shadow is used, it is warm-tinted — built on the brand ink `rgba(66,62,60,...)` rather than neutral black — so even elevation stays on the warm, editorial side of the palette. This keeps the homepage calm and reading-focused: cards lift gently on hover but nothing floats aggressively.

### Decorative Depth
- `#f4f4f4` muted surface separates the footer and secondary zones from the white content area without a border
- `#fcdfda` peach washes mark featured/sponsored modules
- `#423e3c` dark feature panels create contrast-based depth for editorial highlights

## 7. Do's and Don'ts (Component-level)

### Do
- Use Noto Serif TC for all UI and reading text — the serif IS the brand
- Use `#423e3c` warm ink for text instead of pure black
- Reserve PIXNET orange (`#ff7200`) for the primary CTA and brand/hot moments only
- Let hairlines (`#eaeae9`) carry layout structure before reaching for shadow
- Apply small positive letter-spacing (0.5–1.2px) to Traditional Chinese text
- Keep button/tag radius at 6px — soft but not pill
- Use weight (400 vs 700) as the main hierarchy lever, not large size jumps

### Don't
- Don't substitute a sans-serif for the body face — it erases PIXNET's identity
- Don't flood layouts with orange — it is a rationed accent, not a fill
- Don't use pure black (`#000000`) for reading text — warm ink `#423e3c` is the voice
- Don't introduce corporate blue — the palette is deliberately warm
- Don't use heavy neutral-black shadows — keep elevation subtle and warm-tinted
- Don't pill-shape buttons or tags — 6px is the considered radius
- Don't apply negative tracking to Chinese text — it harms readability

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single/two-column content stack, collapsed nav, larger touch targets |
| Tablet | 640–1024px | 2–3 column content grid, condensed header |
| Desktop | 1024–1280px | Full multi-column magazine grid |
| Large Desktop | >1280px | Centered max-width content with wider gutters |

### Touch Targets
- Buttons / tags at 36px height with 8px 12px padding — comfortable for tap
- Nav links spaced for thumb reach on mobile
- Round icon buttons use full radius for clear tap affordance

### Collapsing Strategy
- Header: full horizontal nav → hamburger / condensed search on mobile
- Content grid: multi-column magazine → 2-column → single column stack
- Trending tag row: wraps or becomes horizontally scrollable on narrow screens
- Footer (`#f4f4f4`): link columns stack vertically on mobile
- Typography: 18px channel heads → 16px on mobile; body stays 16px for readability

### Image Behavior
- Content thumbnails stay sharp-cornered (0px) and fill their cells edge-to-edge
- Cover images crop responsively while preserving the serif caption beneath
- Avatars remain circular (full radius) at all sizes

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: PIXNET Orange (`#ff7200`)
- CTA Hover: Orange Deep (`#e85f00`)
- Background: White (`#ffffff`)
- Muted surface / footer: (`#f4f4f4`)
- Heading & Body text: Warm Ink (`#423e3c`)
- Label: (`#575451`)
- Muted text: (`#817f7d`) / (`#969492`)
- Hairline / border: (`#eaeae9`)
- Accent (hot/trending): Warm Red (`#ff432b`)
- Accent tint: Peach (`#fcdfda`)

### Example Component Prompts
- "Create a content homepage header on white (`#ffffff`), ~73px tall. PIXNET wordmark left, Noto Serif TC nav links at 16px weight 400 color `#423e3c`, emphasized channel links at 18px weight 700. Right-aligned orange login button (`#ff7200` fill, white text, 6px radius, 36px tall, 14px weight 500)."
- "Design a trending-tag pill: white fill, `1px solid #eaeae9` border, 6px radius, 36px tall, Noto Serif TC 16px weight 700, text `#423e3c`. Label like `#日本旅遊`."
- "Build an article card: white background, `1px solid #eaeae9` border, 6px radius, sharp-cornered cover image edge-to-edge on top, title in Noto Serif TC 16px weight 700 color `#423e3c`, meta line 14px weight 400 color `#817f7d`. Hover: shadow `rgba(66,62,60,0.12) 0px 4px 16px`, border `#c0bfbe`."
- "Create a footer on `#f4f4f4` surface, Noto Serif TC links at 16px color `#423e3c`, no top border — surface contrast separates it."
- "Make a hot badge: `#ff432b` fill, white text, 6px radius, Noto Serif TC 13px weight 700, for '熱門' / trending markers."

### Iteration Guide
1. Always set `font-family: "Noto Serif TC"` — the serif is non-negotiable brand DNA
2. Text color is `#423e3c` (warm ink), never `#000000` for reading
3. Orange `#ff7200` only for the primary CTA and hot/brand moments — keep it rare
4. Use hairline `#eaeae9` for structure before adding shadow
5. Radius stays at 6px for buttons/tags/inputs; thumbnails stay sharp
6. Hierarchy comes from weight (400→700), not big size jumps
7. Add 0.5–1.2px positive letter-spacing on Traditional Chinese text
8. Shadows, when needed, are warm: `rgba(66,62,60,α)`, subtle

---

## 10. Voice & Tone

PIXNET's voice is that of a warm, encouraging community host for Taiwanese creators and readers — friendly, everyday, and culturally local, without corporate stiffness. The homepage title reads 「痞客邦PIXNET-掌握最新熱門話題貼文、短影音，讓生活充滿靈感！」("PIXNET — catch the latest trending posts and short videos, fill life with inspiration!"), which captures the register: upbeat, life-centered, inclusive. The platform positions itself as 「台灣人的生活文創平台」("a life and creative-culture platform for Taiwanese people"). Copy is in Traditional Chinese, conversational, and oriented around lifestyle verticals — 旅遊 (travel), 美食 (food), 影視 (film/TV), 親子 (parenting), 寵物 (pets).

| Context | Tone |
|---|---|
| Homepage / hero | Warm, life-inspiring. "Fill life with inspiration." Inclusive of all readers and creators. |
| Channel labels | Plain, category-clear: 旅遊 / 美食 / 影視 / 親子. Everyday vocabulary. |
| Creator-facing | Encouraging and supportive — PIXNET is a home for bloggers to publish and grow. |
| CTAs | Direct and friendly: 登入 (login), 註冊 (sign up), 寫文章 (write). |
| Trending / hot | Energetic, of-the-moment: 熱門 (hot), trending hashtags. |
| Community / help | Patient, neighborly, respectful of long-time bloggers. |

**Tone anchors.** Lifestyle-warm, locally Taiwanese, creator-supportive, inclusive. Avoid cold corporate jargon, English-first phrasing, and hype-startup superlatives — PIXNET's strength is its homey, long-running community feel.

## 11. Brand Narrative

PIXNET (痞客邦) is one of Taiwan's oldest and largest user-generated content and blogging platforms, a cornerstone of the Traditional-Chinese-language web. Originating in the mid-2000s out of Taiwan's blogging boom, it grew into the country's dominant home for personal blogs, lifestyle writing, travel and food reviews, parenting diaries, and creator communities. For a generation of Taiwanese internet users, "PIXNET" is synonymous with "blog" — the place where independent writers built audiences and where readers went to research a restaurant, a trip, or a product through real, long-form personal accounts.

That heritage explains the design. The serif typeface, the warm ink text, the editorial density, and the rationed accent color all express a platform built around *reading* and *writing* rather than around a swipe-driven feed. PIXNET's identity is the long-tail of authentic creator content — millions of articles accumulated over nearly two decades — and the interface treats that content as the product. The modern homepage layers in trending hashtags, short video, and creator-economy features ("社群影響力" / social influence, "大試用時代" / a product-trial program), but the underlying posture remains: a Taiwanese life and creative-culture platform where everyday people publish and everyday people read.

What PIXNET embraces: warmth, locality, long-form authenticity, and a creator-first community. What it avoids: the cold institutional aesthetics of enterprise software, English-first global-startup polish, and the visual hype that would betray its homey, decades-deep blogging roots.

## 12. Principles

1. **Content is the product.** The interface recedes so that articles, photos, and creator voices are the focus. Chrome is thin; hairlines do the structuring.
2. **Read like paper.** The Noto Serif TC body, warm ink, and comfortable line-height make the platform feel like reading, not scrolling — honoring its blogging heritage.
3. **Warmth over sterility.** Every neutral leans warm; the accent is a friendly orange. Nothing is cold, corporate, or clinical.
4. **Local first.** PIXNET is built for Taiwanese readers and creators in Traditional Chinese. Typography, tracking, and tone all respect that context.
5. **One loud color, used sparingly.** Orange (`#ff7200`) marks action and energy precisely because it is rare. Restraint makes it legible as "the brand."
6. **Support the creator.** The system exists to help bloggers publish, grow, and be discovered — the design is in service of that community.
7. **Density with dignity.** A content-rich homepage stays calm through hairline structure and consistent type, never feeling cluttered.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable PIXNET user segments (lifestyle bloggers, travel/food creators, parenting writers, and Taiwanese readers researching real experiences), not individual people.*

**Hsiao-Ming Chen, 38, Taichung.** A food and travel blogger who has published on PIXNET for over a decade. He measures a platform by how well it showcases his long-form reviews and photo sets. The serif type and clean reading layout feel like home; he would resent a redesign that turned his careful articles into a feed of disposable cards.

**Yu-Ting Lin, 29, Taipei.** A reader planning a weekend trip. She comes to PIXNET specifically to read real, detailed personal accounts — not sponsored listicles. She trusts the platform because the writing feels human and the interface stays out of the way. The warm, readable serif signals "real person wrote this."

**Mei-Ling Wu, 34, Kaohsiung.** A parenting blogger documenting daily life with two kids. She values the supportive creator community and the encouraging, neighborly tone. She wants publishing tools that respect Traditional Chinese typography and make her posts look as warm as they read.

**Chih-Hao Yang, 26, Hsinchu.** A new short-video creator exploring PIXNET's "社群影響力" creator program. He is drawn by the chance to reach an established Taiwanese audience. He appreciates that the brand feels local and authentic rather than a copy of a Western platform.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no posts yet)** | White canvas, single warm-ink (`#423e3c`) line in Noto Serif TC 16px: an encouraging prompt to write the first article. One orange CTA (`#ff7200`). No cold "No data" wording. |
| **Empty (search no results)** | Muted-gray (`#817f7d`) single line in Traditional Chinese suggesting alternate keywords; search field stays visible. |
| **Loading (feed first paint)** | Skeleton blocks at card dimensions in hairline `#eaeae9`, gentle warm shimmer. Thumbnails skeleton sharp-cornered to match. |
| **Loading (in-place refresh)** | Subtle orange (`#ff7200`) progress hint; previous content stays visible. |
| **Error (load failed)** | Inline warm-toned banner, `#ff432b`-adjacent accent, plain Traditional-Chinese explanation plus a retry link. No generic "Something went wrong." |
| **Error (form validation)** | Field-level, warm-red border with a short serif message describing what is invalid. |
| **Success (post published)** | Brief confirmation toast in warm ink, friendly past-tense Chinese phrasing. No exclamation overload. |
| **Disabled** | Reduced opacity on surface and text together; orange CTA becomes a faded warm orange, not switched to gray. |
| **Hot / trending** | Orange (`#ff7200`) or red (`#ff432b`) marker / numeral flags the trending item. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | State commits, selection, focus rings |
| `motion-fast` | 150ms | Hover lifts, button press, tag hover |
| `motion-standard` | 220ms | Dropdowns, menus, card expand |
| `motion-slow` | 320ms | Page-level transitions, modal reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — menus, dropdowns, cards |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Signature motions.**

1. **Card hover lift.** Content cards lift gently on hover using `motion-fast / ease-standard` — a small shadow grow (`rgba(66,62,60,0.12)`) and border deepen to `#c0bfbe`. Calm, never bouncy, in keeping with a reading-focused home.
2. **Tag / nav hover.** Trending tags and nav links transition color toward `#575451` and/or reveal an orange underline over `motion-fast`.
3. **Menu reveal.** Dropdowns and account menus arrive with `motion-standard / ease-enter`, a short fade-and-rise.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`; hovers become immediate color changes. Reading is never gated on animation.

## 16. Do's and Don'ts

### Do
- Commit fully to Noto Serif TC across the interface — it defines PIXNET
- Keep text in warm ink `#423e3c`; reserve `#000000` for rare contrast needs
- Treat PIXNET orange `#ff7200` as a precious, rationed CTA / brand color
- Lean on `#eaeae9` hairlines and `#f4f4f4` muted surfaces for structure
- Keep the mood warm, local, and creator-supportive in copy and color
- Use 6px radius on buttons/tags and sharp corners on imagery
- Let content density stay calm via consistent type and hairline dividers

### Don't
- Don't swap in a sans-serif body face — it destroys the brand read
- Don't flood the UI with orange or introduce cold corporate blue
- Don't use pure black or negative tracking on Traditional Chinese text
- Don't add heavy gray/black shadows — elevation is subtle and warm
- Don't pill-shape buttons or tags
- Don't adopt English-first, hype-startup tone — PIXNET is homey and Taiwanese
- Don't bury content under heavy chrome — the reader and creator come first
