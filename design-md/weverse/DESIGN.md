---
id: weverse
name: Weverse
display_name_kr: 위버스
country: KR
category: consumer-tech
homepage: "https://weverse.io"
primary_color: "#00cbd5"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=weverse.io&sz=128"
verified: "2026-06-26"
added: "2026-06-26"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-26"
  note: "primary = signature Weverse teal (#00cbd5) — dominant accent on Weverse Shop (links/prices) and the login outline border; login CTA text reads slightly darker (#00b8c1); bright teal (#08ccca) on consent accents and a lighter editorial teal (#2bd9d0) on Weverse Magazine. Body ink #202429; pure black #000000 carries the homepage chrome."
  colors:
    primary: "#00cbd5"
    primary-text: "#00b8c1"
    primary-bright: "#08ccca"
    primary-magazine: "#2bd9d0"
    ink: "#202429"
    ink-pure: "#000000"
    heading: "#111111"
    body: "#484848"
    muted: "#8e8e8e"
    faint: "#aeaeae"
    hairline: "#e4e4e4"
    canvas: "#ffffff"
    surface-dark: "#3a3a3a"
    accent-blue: "#5989fe"
    accent-pink: "#f65895"
    accent-green: "#00d284"
  typography:
    family: { sans: "Pretendard" }
    display:  { size: 24, weight: 800, lineHeight: 1.29, use: "Artist-card heading on Weverse Shop, Pretendard ExtraBold" }
    title:    { size: 26, weight: 700, lineHeight: 1.20, use: "Homepage Weverse wordmark / primary page title" }
    heading:  { size: 18, weight: 700, lineHeight: 1.28, use: "Shop section headings (Best, Notice, Recommended Artist)" }
    nav:      { size: 15, weight: 500, lineHeight: 1.30, use: "Top-nav menu buttons" }
    button:   { size: 14, weight: 700, lineHeight: 1.30, use: "Login CTA / filter-pill label" }
    body:     { size: 16, weight: 400, lineHeight: 1.50, use: "Shop / Magazine reading body" }
    body-sm:  { size: 13, weight: 400, lineHeight: 1.50, use: "Homepage list rows, captions" }
    caption:  { size: 12, weight: 700, lineHeight: 1.30, use: "Consent buttons, small chips" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48 }
  rounded: { xs: 4, sm: 8, md: 16, pill: 100, full: 9999 }
  shadow:
    none: "none"
  components:
    button-login: { type: button, bg: "#ffffff", fg: "#00b8c1", border: "1px solid #00cbd5", radius: "8px", padding: "0px 16px", height: "36px", font: "14px / 700", use: "Header login outline CTA" }
    button-filter: { type: button, bg: "#000000", fg: "#ffffff", radius: "100px", padding: "0px 16px", height: "36px", font: "14px / 500", use: "Selected artist filter pill on Weverse Shop" }
    button-consent: { type: button, bg: "#3a3a3a", fg: "#08ccca", radius: "16px", padding: "0px 16px", height: "32px", font: "12px / 700", use: "Cookie-consent accept-all accent button" }
    card-product: { type: card, bg: "#ffffff", border: "1px solid #e4e4e4", radius: "4px", use: "Weverse Shop product / content card" }
    badge-price: { type: badge, bg: "#ffffff", fg: "#f65895", radius: "4px", font: "13px / 700", use: "Sale-price / discount highlight" }
    tab-nav: { type: tab, fg: "#8e8e8e", active: "text #00cbd5", use: "Shop category / nav tab — teal active state" }
    list-community: { type: listItem, fg: "#000000", height: "48px", font: "13px / 400", use: "Community-finder list row" }
  components_harvested: true
---

# Design System Inspiration of Weverse

## 1. Visual Theme & Atmosphere

Weverse (위버스) is HYBE's global fandom platform, and its surfaces read like a quiet, gallery-white stage built to put artist imagery in the spotlight — the interface itself deliberately recedes. Across the homepage, Weverse Shop, and Weverse Magazine the canvas is pure white (`#ffffff`), and text sits in near-black: pure `#000000` for the homepage chrome and a warmer ink `#202429` for Shop and Magazine reading copy. Chrome is almost monochrome by design; the only saturated voice in the room is a single signature teal — `#00cbd5` — which appears on the login outline, on Shop links and prices, and as the brand's one unmistakable "action" cue. Photography (album art, tour key visuals, artist portraits) does the emotional work; the system supplies a calm neutral frame so fan content never competes with UI.

The typographic personality is restrained and Korean-product-native: everything is set in **Pretendard**, the de-facto hangul/latin product font, and hierarchy is carried by weight rather than by typeface switching. Headlines on Weverse Shop run heavy — artist names at 24px Pretendard ExtraBold (weight 800) — while section labels sit at 18px / 700, navigation at 15px / 500, and dense body text drops to 13–16px / 400. The login CTA and small chips push to weight 700 at 12–14px. There is no decorative display face; the bold-vs-regular Pretendard ladder is the whole hierarchy.

What distinguishes Weverse from louder commerce sites is its restraint with both color and depth. The teal never floods the page — its companions are a slightly darker text teal `#00b8c1`, a brighter consent teal `#08ccca`, and a lighter editorial teal `#2bd9d0` on Magazine — and a small functional accent set (info blue `#5989fe`, sale pink `#f65895`, success green `#00d284`) appears only where Shop genuinely needs status color. Depth is essentially flat: separation comes from hairlines (`#e4e4e4`) and a cool dark surface (`#3a3a3a`) for the consent banner rather than drop shadows. Geometry leans into the pill — filter chips and carousel controls at 100px radius, consent buttons at 16px, cards and buttons at a tight 4–8px. The neutral text ladder runs `#111111` → `#484848` → `#8e8e8e` → `#aeaeae` for heading-to-faint hierarchy. The result is a flat, photo-forward, mobile-native aesthetic: a stage, not a storefront.

**Key Characteristics:**
- Pretendard everywhere — weight (800 / 700 / 500 / 400) carries the entire hierarchy, no second display face
- Single signature teal (`#00cbd5`) reserved as the brand's one "action" color; text teal `#00b8c1` on the login CTA label
- Gallery-white canvas (`#ffffff`) with near-black text — pure `#000000` chrome on the homepage, warm ink `#202429` for Shop/Magazine body
- Photo-forward: artist key visuals carry emotion; UI stays neutral so fan content leads
- Flat depth — hairlines (`#e4e4e4`) and a dark `#3a3a3a` consent surface instead of shadows
- Pill-leaning geometry — 100px chips, 16px consent buttons, 4–8px cards/buttons
- Functional accent set (info `#5989fe`, sale `#f65895`, success `#00d284`) used sparingly on Shop status
- Cool neutral ladder `#111111` → `#484848` → `#8e8e8e` → `#aeaeae`; bright `#08ccca` and editorial `#2bd9d0` as teal variants

## 2. Color Palette & Roles

### Primary
- **Weverse Teal** (`#00cbd5`): The signature brand color. Login outline border, Weverse Shop links/prices, and the system's single "action" accent. A clean cyan-teal that is the one saturated voice in an otherwise monochrome UI.
- **Teal Text** (`#00b8c1`): A slightly darker teal used as the login CTA *text* color against white — the readable companion to the brighter border teal.
- **Teal Bright** (`#08ccca`): A vivid teal used on consent accents (the "전체 동의 / accept-all" affordance) where extra pop is wanted on the dark surface.
- **Teal Magazine** (`#2bd9d0`): A lighter editorial teal that appears as the accent on Weverse Magazine.

### Ink & Neutral
- **Ink** (`#202429`): Primary body/reading text on Weverse Shop and Magazine — a warm near-black.
- **Pure Black** (`#000000`): Homepage chrome, wordmark, headings, and the selected-filter pill background.
- **Heading** (`#111111`): Shop section heading text (Best, Notice, Recommended Artist).
- **Body Slate** (`#484848`): Secondary body copy on Shop.
- **Muted** (`#8e8e8e`): Tertiary text, metadata, inactive tab labels.
- **Faint** (`#aeaeae`): Lowest-emphasis labels, placeholders, disabled text.
- **Hairline** (`#e4e4e4`): Thin borders, dividers, and card outlines — the primary separation device in the shadow-light system.

### Surface
- **Canvas White** (`#ffffff`): Page background, card surfaces, button/text on teal or dark.
- **Surface Dark** (`#3a3a3a`): Near-black background for the cookie-consent banner and its chips.

### Functional Accents (Shop status)
- **Info Blue** (`#5989fe`): Links and informational highlights on Weverse Shop.
- **Sale Pink** (`#f65895`): Discount / sale-price highlight.
- **Success Green** (`#00d284`): Positive status (in-stock, completed) on Shop.

## 3. Typography Rules

### Font Family
- **Sans (all roles)**: `Pretendard` (with system fallbacks `-apple-system`, `system-ui`, Helvetica, Arial). One family across homepage, Shop, and Magazine; hierarchy is weight-driven.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Display (artist card) | Pretendard | 24px (1.50rem) | 800 | 1.29 | Shop artist-card name, ExtraBold |
| Title / Wordmark | Pretendard | 26px (1.63rem) | 700 | 1.20 | Homepage Weverse wordmark, page title |
| Section Heading | Pretendard | 18px (1.13rem) | 700 | 1.28 | Shop section labels |
| Nav | Pretendard | 15px (0.94rem) | 500 | 1.30 | Top-nav menu buttons |
| Button | Pretendard | 14px (0.88rem) | 700 | 1.30 | Login CTA, filter-pill label |
| Body | Pretendard | 16px (1.00rem) | 400 | 1.50 | Shop / Magazine reading text |
| Body Small | Pretendard | 13px (0.81rem) | 400 | 1.50 | Homepage list rows, captions |
| Caption | Pretendard | 12px (0.75rem) | 700 | 1.30 | Consent buttons, small chips |

### Principles
- **One family, weight-led hierarchy**: Pretendard does every job; the jump from 800 (artist headlines) to 400 (body) is the system's primary signal. No serif, no secondary display face.
- **Heavy where it identifies, calm where it informs**: ExtraBold 800 sits on artist names and hero content; 400 carries dense reading and list copy.
- **Hangul-first sizing**: Body lands at 13–16px — generous for hangul legibility while staying dense enough for content-rich fan feeds and shop grids.
- **Small UI runs bold**: Login CTA (14/700) and consent chips (12/700) lean heavier than body so interactive labels read clearly at small sizes.

## 4. Component Stylings

### Buttons

**Login (Outline)**
- Background: `#ffffff`
- Text: `#00b8c1`
- Border: 1px solid `#00cbd5`
- Radius: 8px
- Padding: 0px 16px
- Height: 36px
- Font: 14px Pretendard weight 700
- Use: Header login call-to-action — the teal-outlined entry point

**Artist Filter Pill (Selected)**
- Background: `#000000`
- Text: `#ffffff`
- Radius: 100px
- Padding: 0px 16px
- Height: 36px
- Font: 14px Pretendard weight 500
- Use: Selected artist filter chip on Weverse Shop

**Consent Accept-All (Accent)**
- Background: `#3a3a3a`
- Text: `#08ccca`
- Radius: 16px
- Padding: 0px 16px
- Height: 32px
- Font: 12px Pretendard weight 700
- Use: Cookie-consent accept-all button (teal accent on the dark banner)

**Consent Select (Secondary)**
- Background: `#3a3a3a`
- Text: `#e4e4e4`
- Radius: 16px
- Padding: 0px 16px
- Height: 32px
- Font: 12px Pretendard weight 700
- Use: Cookie-consent partial-agree button

**Carousel Nav**
- Background: rgba(0,0,0,0.2)
- Text: `#ffffff`
- Border: 1px solid rgba(0,0,0,0.04)
- Radius: 100px
- Height: 36px
- Use: Previous/next banner controls on the homepage hero carousel

### Cards & Containers

**Product / Content Card**
- Background: `#ffffff`
- Border: 1px solid `#e4e4e4`
- Radius: 4px
- Use: Weverse Shop product and content cards — flat, hairline-outlined, no shadow

### Badges

**Sale Price Highlight**
- Background: `#ffffff`
- Text: `#f65895`
- Radius: 4px
- Font: 13px Pretendard weight 700
- Use: Discount / sale-price emphasis on Shop

### Tabs

**Category / Nav Tab**
- Text (inactive): `#8e8e8e`
- Active: teal `#00cbd5` text
- Use: Shop category and section tabs — muted label that turns teal when active

### List Items

**Community Row**
- Text: `#000000`
- Height: 48px
- Padding: 12px 16px
- Radius: 8px
- Font: 13px Pretendard weight 400
- Use: Community-finder list row on the homepage ("커뮤니티 찾기")

---

**Verified:** 2026-06-26 (omd:add-reference CREATE — Tier 1 live inspect, 3 brand-owned surfaces)
**Tier 1 sources:** https://weverse.io, https://shop.weverse.io, https://magazine.weverse.io
**Tier 2 sources:** getdesign.md/weverse — 0 DESIGN.md files (not listed); styles.refero.design/?q=weverse — no Weverse result (not listed)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px
- Notable: Interactive chrome uses a consistent 16px horizontal padding (login, filter pills, consent buttons); list rows use 12px 16px

### Grid & Container
- Photo-forward hero: full-bleed banner carousel of artist/tour key visuals, with 100px-radius prev/next controls
- Weverse Shop: responsive card grid of artist/product tiles on a gallery-white canvas
- Section bands labelled by 18px / 700 headings (Recommended Artist, Best, Notice)
- Community-finder presented as a scrollable list of 48px rows

### Whitespace Philosophy
- **Photo leads, UI recedes**: generous neutral space frames artist imagery; chrome is intentionally quiet so fan content carries the page.
- **Flat segmentation**: sections separate by hairline (`#e4e4e4`) and white space, not by elevation or heavy dividers.
- **Pill rhythm**: repeated 100px chips (filters, carousel controls) create a soft, consistent horizontal cadence.

### Border Radius Scale
- Extra-small (4px): cards, product tiles, price badges — the workhorse
- Small (8px): login button, list rows
- Medium (16px): consent buttons
- Pill (100px): filter chips, carousel controls
- Full (9999px): fully-round avatars/dots

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, most surfaces |
| Hairline (Level 1) | `1px solid #e4e4e4` border | Card outlines, dividers |
| Dark surface (Level 2) | `#3a3a3a` background | Cookie-consent banner / overlay chrome |

**Shadow Philosophy**: Weverse is a near-shadowless, flat system. Live inspection found `box-shadow: none` across the homepage hero, nav, and headings; separation is communicated through hairlines (`#e4e4e4`), white space, and — where an overlay needs to sit above content — a solid dark surface (`#3a3a3a`) rather than elevation. This keeps the interface feeling clean and photo-forward, letting artist imagery (not UI chrome) provide visual depth. When emphasis is needed, the system reaches for the teal (`#00cbd5`) or a functional accent, never a drop shadow.

## 7. Do's and Don'ts

### Do
- Set everything in Pretendard and drive hierarchy by weight (800 → 700 → 500 → 400)
- Reserve the teal (`#00cbd5`) as the single "action" color — login, active tabs, key links
- Keep the canvas gallery-white (`#ffffff`) and let artist photography lead
- Use near-black text — pure `#000000` for chrome, warm ink `#202429` for reading copy
- Separate with hairlines (`#e4e4e4`) and white space instead of shadows
- Use pill geometry for filters and carousel controls (100px), 4–8px for cards/buttons
- Reserve functional accents (info `#5989fe`, sale `#f65895`, success `#00d284`) for Shop status only
- Use the dark surface (`#3a3a3a`) for overlay/consent chrome, with `#08ccca` teal as its accent

### Don't
- Introduce a second display typeface — Pretendard weight is the whole hierarchy
- Spread the teal across many elements — it dilutes the single-action signal
- Add drop shadows for elevation — Weverse separates with hairlines and tint
- Let UI chrome compete with artist imagery — keep chrome monochrome and quiet
- Use the Shop status accents (pink/blue/green) as decorative brand color
- Use heavy borders or boxed cards — a 1px `#e4e4e4` hairline is enough
- Set body text in pure black where warm ink `#202429` reads softer on Shop/Magazine

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single-column feed, full-bleed banner, chips scroll horizontally |
| Tablet | 640-1024px | 2-3 column card grid, moderate padding |
| Desktop | 1024-1440px | Full multi-column Shop grid, centered content |

### Touch Targets
- Login CTA at 36px height, full 16px horizontal padding
- Filter pills and carousel controls at 36px with 100px radius — large, unmistakable targets
- Community-finder rows at 48px height for comfortable tapping
- Consent buttons at 32px height

### Collapsing Strategy
- Banner carousel: full-bleed at all sizes, controls shrink-wrap on mobile
- Shop card grid: multi-column → 2-up → single column stacked
- Filter chip row: horizontal scroll on narrow viewports
- Section headings (18/700) persist across breakpoints

### Image Behavior
- Artist key visuals and album art are the hero content — full-bleed, no shadow, at every size
- Product/content cards keep the 4px radius and `#e4e4e4` hairline across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary / action: Weverse Teal (`#00cbd5`)
- Login CTA text: Teal Text (`#00b8c1`)
- Consent accent: Teal Bright (`#08ccca`)
- Magazine accent: Teal Magazine (`#2bd9d0`)
- Body ink: Ink (`#202429`); chrome: Pure Black (`#000000`)
- Heading: `#111111`; body slate `#484848`; muted `#8e8e8e`; faint `#aeaeae`
- Background: Canvas White (`#ffffff`); dark surface `#3a3a3a`; hairline `#e4e4e4`
- Shop status: info `#5989fe`, sale `#f65895`, success `#00d284`

### Example Component Prompts
- "Create a header on white background. Pretendard wordmark at 26px weight 700, color #000000. Login button: white background, #00b8c1 text, 1px solid #00cbd5 border, 8px radius, 0 16px padding, 36px height, 14px Pretendard weight 700."
- "Design a Weverse Shop card grid: white #ffffff cards with 1px solid #e4e4e4 hairline, 4px radius, no shadow. Artist name 24px Pretendard weight 800 over the key visual. Selected filter pill: #000000 background, white text, 100px radius."
- "Build a cookie-consent banner on a #3a3a3a dark surface. Accept-all button: #08ccca teal text, 16px radius, 32px height, 12px weight 700. Select button: #e4e4e4 text, same shape."
- "Create category tabs: inactive labels #8e8e8e, active label teal #00cbd5. Body text 16px Pretendard 400 in ink #202429."

### Iteration Guide
1. Pretendard for everything; weight is the hierarchy (800 / 700 / 500 / 400)
2. Teal (`#00cbd5`) is the single action color — don't spread it
3. No shadows — separate with `#e4e4e4` hairlines and white space
4. Pill geometry for chips/controls (100px), 4–8px for cards/buttons
5. Text is `#000000` chrome / `#202429` reading ink, never gray for primary copy
6. Functional accents (pink/blue/green) only for Shop status, never as brand color
7. Dark overlay chrome uses `#3a3a3a` with `#08ccca` teal accents

---

## 10. Voice & Tone

Weverse's voice is **warm, inclusive, and fan-first** — a platform that frames itself as the place where artists and fans meet, globally and directly. The register is plain and welcoming rather than corporate or hype-driven: the homepage simply says it is a "Global Fandom Platform," and the Shop calls itself the place for "All Things for Fans." Copy treats the fan as a member of a community, not a transaction, and treats the artist relationship as the product.

| Context | Tone |
|---|---|
| Platform positioning | Plain, welcoming, global. "Global Fandom Platform." Inclusive, never exclusive. |
| Shop | Fan-centric and friendly. "All Things for Fans!" — celebratory, not salesy. |
| Magazine | Editorial, knowledgeable, culture-forward. "Everything K-POP and More!" |
| Calls-to-action | Direct and low-pressure. "커뮤니티 찾기" (Find community), "로그인" (Log in). |
| Community surfaces | Conversational, member-to-member; artist and fan share one space. |

**Voice samples (verbatim from live surfaces):**
- "Global Fandom Platform - Weverse" — homepage page title (positioning). *(verified live 2026-06-26)*
- "Weverse Shop - All Things for Fans!" — Shop page title (fan-first framing). *(verified live 2026-06-26)*
- "Weverse Magazine - Everything K-POP and More!" — Magazine page title (editorial scope). *(verified live 2026-06-26)*
- "커뮤니티 찾기" — homepage community-finder CTA (low-pressure invitation). *(verified live 2026-06-26)*

**Forbidden register**: exclusionary or gatekeeping language, hard-sell urgency, hype superlatives that overshadow the artist, anything that frames fans as mere buyers rather than community members.

## 11. Brand Narrative

Weverse (위버스) is the global fandom platform operated by **Weverse Company** (formerly beNX), a subsidiary of **HYBE** — the Korean entertainment company behind BTS and a roster of K-pop artists. Launched in **2019** by Big Hit Entertainment (now HYBE), Weverse was created to solve a problem global K-pop fandom felt acutely: fan communities, official content, livestreams, and merchandise were scattered across many disconnected channels and languages. Weverse consolidated them into one place where an artist and their worldwide fanbase could meet directly.

The platform grew into a three-part ecosystem visible across its surfaces: the **Weverse** community app and site (artist-to-fan communication, posts, livestreams, memberships), **Weverse Shop** ("All Things for Fans" — official albums and merchandise), and **Weverse Magazine** (editorial coverage of K-pop and artist culture). In 2021 HYBE and Naver brought their fan-platform efforts together — folding Naver's V Live into Weverse — reinforcing Weverse's position as the leading global home for K-pop fandom, hosting communities for both HYBE and non-HYBE artists.

What Weverse refuses, visible in its design: a loud, transactional storefront aesthetic that would compete with artist imagery, and the fragmentation it was built to replace. What it embraces: a gallery-white, photo-forward stage; a single trustworthy teal; Pretendard set in confident weights; and copy that consistently frames the experience around fans and the artists they follow — "for fans," globally.

## 12. Principles

1. **Fans first, artists at the center.** Weverse exists to connect artists and their global fandom. *UI implication:* keep chrome quiet and monochrome so artist photography and fan content lead every screen.
2. **One stage, one accent.** A single teal (`#00cbd5`) signals "action." *UI implication:* reserve the teal for the primary affordance (login, active tab, key link); let the rest stay neutral.
3. **Photo leads, UI recedes.** The interface is a frame, not the subject. *UI implication:* use gallery-white space and hairlines, not heavy chrome or shadows, so imagery carries the emotion.
4. **Global by default.** Fandom is worldwide and multilingual. *UI implication:* plain, translatable copy and inclusive framing ("Global Fandom Platform"); never region-locked tone.
5. **Calm commerce.** Shop is celebratory, not pushy. *UI implication:* status color (sale pink, success green) is functional and sparing; merchandising never overwhelms the fan experience.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Weverse user segments (global K-pop fans, community members, merchandise buyers), not individual people.*

**Mina, 19, Seoul.** A daily community user who follows posts and livestreams from her favorite group. Values that the artist and fans share one space, and that the interface stays out of the way so the content shines.

**Sofia, 24, São Paulo.** A global fan who relies on Weverse for official, translatable updates and for Weverse Shop to buy albums that are otherwise hard to get locally. Trusts the platform because it feels official and fan-first, not like a reseller.

**Jae, 28, Los Angeles.** A long-time K-pop listener who reads Weverse Magazine for editorial depth and uses memberships to access exclusive content. Appreciates the calm, photo-forward design that treats fandom as culture, not just commerce.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no communities joined)** | Gallery-white canvas. Single near-black (`#000000`) line inviting the user to find a community, with one teal (`#00cbd5`) CTA ("커뮤니티 찾기"). No clutter. |
| **Empty (Shop cart / no orders)** | Muted (`#8e8e8e`) single line stating nothing yet, plus a path back to browsing. Calm, fan-friendly. |
| **Loading (feed / shop grid)** | Skeleton cards at final dimensions with 4px radius on white; flat pulse consistent with the shadowless system — no shadow shimmer. |
| **Loading (in-place refresh)** | Subtle teal (`#00cbd5`) progress indicator; previous content stays visible. |
| **Error (content failed to load)** | Inline message in ink (`#202429`) with a plain explanation and a retry — never a bare error code. |
| **Error (form validation)** | Field-level message below the input describing what is valid, not just "required." |
| **Success (order placed / post sent)** | Brief inline confirmation, optionally with success green (`#00d284`); next-step detail linked below. No celebratory emoji overload. |
| **Skeleton** | White blocks at final dimensions, 4px radius, flat pulse. |
| **Disabled** | Faint (`#aeaeae`) text on reduced-opacity surface; teal actions fade rather than turn gray to preserve brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, chip press, focus |
| `motion-standard` | 220ms | Card/section reveal, banner carousel transition, sheet |
| `motion-slow` | 360ms | Page-level transitions, hero reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, sheets, banners |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is quiet and functional, consistent with the flat, photo-forward aesthetic. The homepage banner carousel advances with a smooth `motion-standard / ease-standard` crossfade so artist key visuals transition gracefully; pill chips respond to press with a subtle scale/opacity shift; cards fade-in from below at `motion-standard / ease-enter`. No bounce or spring — the platform signals a calm, premium stage, not playful UI. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the carousel stops auto-advancing; the experience remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-26) via playwright getComputedStyle on three brand-owned surfaces:
- https://weverse.io — homepage: Pretendard body; signature teal login (#00b8c1 text, #00cbd5 border);
  pure black #000000 chrome; pill (100px) carousel controls; consent teal #08ccca; box-shadow none.
- https://shop.weverse.io — Weverse Shop: ink #202429 body; teal #00cbd5 (dominant accent, 61 occurrences);
  artist headings 24px/800; section headings 18px/700; black filter pills (100px); functional accents
  info #5989fe, sale #f65895, success #00d284; radii 4px workhorse / 8px / 16px / 100px.
- https://magazine.weverse.io — Weverse Magazine: editorial teal #2bd9d0; Pretendard headings.

Token-level claims (§1-9) are sourced from this live inspection (see .verification.md Raw samples).

Voice samples (§10) are verbatim from the live page titles and CTA labels of the three surfaces.

Brand narrative (§11): Weverse is HYBE's global fandom platform, operated by Weverse Company
(formerly beNX); launched 2019 by Big Hit Entertainment (now HYBE); V Live folded into Weverse
via the 2021 HYBE-Naver fan-platform combination. These are widely documented public facts about
the company; they are not quoted from a single verified Weverse statement in this turn.

Personas (§13) are fictional archetypes informed by publicly observable Weverse user segments
(global K-pop fans, community members, merchandise buyers). Names are illustrative; they do not
refer to real people.

Interpretive claims (e.g., "photo leads, UI recedes", "one stage, one accent") are editorial
readings connecting Weverse's observed design to its positioning, not directly sourced statements.
-->
