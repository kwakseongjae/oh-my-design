---
id: accupass
name: Accupass
country: TW
category: consumer-tech
homepage: "https://www.accupass.com"
primary_color: "#00aaf5"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=accupass.com&sz=128"
verified: "2026-06-10"
added: "2026-06-10"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-10"
  note: "Blue family is intentionally multi-step: #00aaf5 (category/service accent), #0088d2 (active nav/brand), #2ab3fc (header CTA), #009ce6 (More pill), register CTA runs a #3e97d3→#1074cc gradient. Pink #ff93c2 is the secondary accent for offline-event tags and notices."
  colors:
    primary: "#00aaf5"
    brand: "#0088d2"
    cta-header: "#2ab3fc"
    cta-pill: "#009ce6"
    gradient-start: "#3e97d3"
    gradient-end: "#1074cc"
    link-organizer: "#2ea3f2"
    accent-pink: "#ff93c2"
    pink-surface: "#ffeef3"
    canvas: "#ffffff"
    surface: "#f8fbff"
    ink: "#212121"
    heading: "#333333"
    body: "#757575"
    muted: "#959ba1"
    faint: "#b5bac1"
    hairline: "#d8dde4"
    footer-dark: "#1a1f23"
    footer-subtitle: "#6d7278"
    on-dark: "#f5faff"
    on-primary: "#ffffff"
  typography:
    family: { sans: "Noto Sans", fallback: "Microsoft JhengHei" }
    event-title: { size: 32, weight: 600, lineHeight: 1.50, use: "Event detail H1" }
    section:     { size: 23, weight: 600, lineHeight: 1.50, use: "Homepage section H2 (Weekly recommend, Popular Events)" }
    footer-head: { size: 18, weight: 300, lineHeight: 1.33, use: "Footer column subtitles" }
    body:        { size: 14, weight: 400, lineHeight: 1.50, use: "Default body, nav, buttons, tags" }
    body-lg:     { size: 16, weight: 400, lineHeight: 1.50, use: "Event meta rows, calendar link" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, xl: 24, xxl: 48 }
  rounded: { xs: 3, sm: 4, md: 8, lg: 16, pill: 22, full: 100 }
  shadow:
    card: "rgba(0,0,0,0.1) 0px 2px 8px 0px"
    tag-tinted: "rgba(0,170,245,0.3) 0px 2px 4px 0px"
  components:
    button-create-event: { type: button, bg: "#2ab3fc", fg: "#ffffff", radius: "3px", padding: "6px 11px", height: "31px", font: "14px / 400 Noto Sans", use: "Header 'Create Event' CTA — organizer entry point" }
    button-register: { type: button, bg: "#1074cc", fg: "#ffffff", radius: "4px", padding: "16px", height: "50px", font: "14px / 600 Noto Sans", use: "Event-page 'Register Now' — rendered as linear-gradient #3e97d3 → #1074cc" }
    button-more: { type: button, bg: "#009ce6", fg: "#ffffff", radius: "22px", padding: "12px 48px", height: "38px", font: "14px / 700 Noto Sans", use: "Section 'More' pill on homepage" }
    button-service: { type: button, bg: "#00aaf5", fg: "#f5faff", radius: "8px", padding: "8px", height: "36px", font: "14px / 400 Noto Sans", use: "Footer 'Ask ACCUPASS' support button" }
    badge-category-blue: { type: badge, bg: "#00aaf5", fg: "#ffffff", radius: "4px", padding: "4px 16px", font: "14px / 400 Noto Sans", shadow: "rgba(0,170,245,0.3) 0px 2px 4px", use: "Event category tag (Learning)" }
    badge-category-pink: { type: badge, bg: "#ff93c2", fg: "#ffffff", radius: "4px", padding: "4px 16px", font: "14px / 400 Noto Sans", use: "Event type tag (Offline Event)" }
    badge-keyword-chip: { type: badge, fg: "#959ba1", border: "1px solid #d8dde4", radius: "100px", padding: "8px 16px", font: "14px / 400 Noto Sans", use: "Outlined keyword chips on event page (設計系統, UIUX)" }
    card-event: { type: card, bg: "#ffffff", radius: "16px", shadow: "rgba(0,0,0,0.1) 0px 2px 8px", use: "Homepage event card; image caps top corners 16px 16px 0 0" }
    nav-tab: { type: tab, active: "text #0088d2", disabled: "#b5bac1 label", font: "14px / 600 Noto Sans", use: "Homepage channel tabs (Featured Events / Learning / Art / Experience)" }
  components_harvested: true
---

# Design System Inspiration of Accupass

## 1. Visual Theme & Atmosphere

Accupass (活動通) is Taiwan's largest event-discovery and ticketing platform, and its design reads as a bright, busy, optimistic marketplace rather than a polished brand statement. The interface lives on a pure white canvas (`#ffffff`) with the faintest blue-tinted wash (`#f8fbff`) behind content bands, and every accent comes from a family of sky blues — the brand blue `#0088d2` on active navigation, a lighter `#2ab3fc` on the header's "Create Event" button, `#009ce6` on section pills, and the vivid `#00aaf5` on category tags and the "Ask ACCUPASS" service button. The blues are not one token but a gradient of enthusiasm: the closer an element sits to the act of joining an event, the more saturated and luminous the blue becomes, peaking in the event page's registration CTA, which runs an actual `#3e97d3` → `#1074cc` gradient.

Typography is deliberately utilitarian: Noto Sans (falling back to Microsoft JhengHei for Traditional Chinese) at a compact 14px base, with section headings at a modest 23px / 600 in soft charcoal `#333333` and event titles at 32px / 600 in near-black `#212121`. Nothing shouts. The hierarchy is built for scanning hundreds of event cards, not for reading a manifesto — body text sits at a quiet grey `#757575` and metadata fades through `#959ba1` to `#b5bac1`. The one moment of unexpected warmth is the bubblegum pink `#ff93c2` used on "Offline Event" tags and notice banners — a playful counterweight that keeps the blue system from feeling corporate.

Depth is shallow and friendly. Event cards float on a soft `rgba(0,0,0,0.1) 0px 2px 8px` shadow with a generous 16px radius (the card image capping the top corners at `16px 16px 0px 0px`), and category tags carry tiny color-tinted shadows of their own fill (`rgba(0,170,245,0.3)`), a charming detail that makes the little chips glow. Geometry is mixed on purpose: tight 3-4px corners on action buttons and tags, 8px on service buttons, 16px on cards, and full 22-100px pills on "More" buttons and keyword chips. The whole system feels like a community bulletin board run by an engineer — dense, legible, cheerful, and unpretentious.

**Key Characteristics:**
- A multi-step sky-blue family (`#0088d2`, `#2ab3fc`, `#009ce6`, `#00aaf5`) instead of one primary — saturation rises toward conversion moments
- Registration CTA as a literal gradient (`#3e97d3` → `#1074cc`) — the most committed blue on the platform
- Bubblegum pink `#ff93c2` as the secondary accent for offline-event tags and notices
- Noto Sans / Microsoft JhengHei at a dense 14px base — built for card-grid scanning
- Soft 16px-radius white event cards on `rgba(0,0,0,0.1)` 2px/8px shadows
- Color-tinted micro-shadows under category tags (chips that glow their own color)
- Mixed radius vocabulary: 3-4px utility, 16px cards, 22-100px pills
- Near-black footer (`#1a1f23`) with icy `#f5faff` link text closing every page

## 2. Color Palette & Roles

### Blue Family (Primary System)
- **Accu Blue** (`#00aaf5`): The most vivid blue — category tags, "Ask ACCUPASS" service button, "Add To Calendar" links. The platform's signature accent.
- **Brand Blue** (`#0088d2`): Active navigation tabs and selected channel state. The anchor blue of the identity.
- **Header CTA Blue** (`#2ab3fc`): The "Create Event" button in the global header — lighter and friendlier than the brand blue.
- **Pill Blue** (`#009ce6`): Section-level "More" pill buttons on the homepage.
- **Gradient Start** (`#3e97d3`) and **Gradient End** (`#1074cc`): The two stops of the event-page "Register Now" CTA gradient — the deepest, most committed blue on the platform.
- **Organizer Link** (`#2ea3f2`): Organizer name links on event detail pages.

### Accent
- **Bubblegum Pink** (`#ff93c2`): "Offline Event" category tags, "How to Collect Tickets?" notice pills. The playful secondary accent.
- **Pink Surface** (`#ffeef3`): Tinted background for pink notice banners (8px radius).

### Neutrals & Surfaces
- **Pure White** (`#ffffff`): Page canvas, event cards, button label text.
- **Ice Surface** (`#f8fbff`): Faint blue-tinted band behind content sections.
- **Ink** (`#212121`): Event detail H1 titles — near-black.
- **Heading Charcoal** (`#333333`): Homepage section headings.
- **Body Grey** (`#757575`): Default body text — the most frequent text color on every surface.
- **Muted Grey** (`#959ba1`): Keyword chips, location labels, tertiary metadata.
- **Faint Grey** (`#b5bac1`): Inactive nav tabs, hashtags, lowest-emphasis labels.
- **Hairline** (`#d8dde4`): 1px outlines on keyword chips and dividers.

### Footer & Dark
- **Footer Dark** (`#1a1f23`): The near-black footer block.
- **Footer Subtitle** (`#6d7278`): Footer column headings (18px / 300).
- **On-Dark Ice** (`#f5faff`): Footer link text — icy blue-white rather than pure white.

### Shadows
- **Card Shadow** (`rgba(0,0,0,0.1) 0px 2px 8px`): Event cards.
- **Tinted Tag Shadow** (`rgba(0,170,245,0.3) 0px 2px 4px` / `rgba(255,147,194,0.3) 0px 2px 4px`): Category tags glow with their own fill color.

## 3. Typography Rules

### Font Family
- **Primary**: `Noto Sans` (served as a Next.js optimized webfont)
- **Fallbacks**: `Apple Casual`, `Corbel`, `Microsoft JhengHei` — the JhengHei fallback carries Traditional Chinese rendering.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Color | Notes |
|------|------|------|--------|-------------|-------|-------|
| Event Title (H1) | Noto Sans | 32px | 600 | 48px (1.50) | `#212121` | Event detail page headline |
| Section Heading (H2) | Noto Sans | 23px | 600 | 34.5px (1.50) | `#333333` | "Weekly recommend", "Popular Events", "Event News" |
| Footer Subtitle | Noto Sans | 18px | 300 | 24px (1.33) | `#6d7278` | Footer column headers — notably light weight |
| Body Large | Noto Sans | 16px | 400 | 1.50 | `#757575` | Event meta rows, calendar/location links |
| Body / UI | Noto Sans | 14px | 400 | 21px (1.50) | `#757575` | Default body, buttons, tags, nav |
| Nav Tab | Noto Sans | 14px | 600 | 1.50 | `#0088d2` active / `#b5bac1` inactive | Channel tabs |
| Pill Button | Noto Sans | 14px | 700 | 1.50 | `#ffffff` | "More" pill — the boldest text on the page |

### Principles
- **Density over drama**: the 14px base and 1.5 line-height are tuned for scanning long card grids, not editorial reading. There is no display type.
- **600 is the ceiling, mostly**: headings stop at semibold 600; only pill-button labels push to 700. The system never uses heavy display weights.
- **Light footer counterpoint**: footer subtitles run at weight 300 — the only light text in the system, calming the page's exit.
- **CJK-safe stack**: every weight choice renders predictably in Microsoft JhengHei, so Chinese and English mix freely in the same card.

## 4. Component Stylings

### Buttons

**Create Event (Header CTA)**
- Background: `#2ab3fc`
- Text: `#ffffff`
- Radius: 3px
- Padding: 6px 11px
- Font: 14px / 400 / Noto Sans
- Use: Global header organizer CTA — present on every page

**Register Now (Event CTA)**
- Background: linear-gradient 131deg `#3e97d3` → `#1074cc`
- Text: `#ffffff`
- Radius: 4px
- Padding: 16px
- Font: 14px / 600 / Noto Sans
- Use: The conversion CTA on event detail pages — 50px tall, full-width of its column

**More (Section Pill)**
- Background: `#009ce6`
- Text: `#ffffff`
- Radius: 22px
- Padding: 12px 48px
- Font: 14px / 700 / Noto Sans
- Use: "More" link at the end of homepage sections

**Ask ACCUPASS (Service)**
- Background: `#00aaf5`
- Text: `#f5faff`
- Radius: 8px
- Padding: 8px
- Font: 14px / 400 / Noto Sans
- Use: Footer customer-service button

**Carousel Arrow**
- Background: `rgba(0, 0, 0, 0.1)`
- Text: `#ffffff`
- Radius: 36px
- Padding: 8px
- Use: Hero/banner carousel previous/next controls — translucent circles over imagery

### Badges & Tags

**Category Tag (Blue)**
- Background: `#00aaf5`
- Text: `#ffffff`
- Radius: 4px
- Padding: 4px 16px
- Font: 14px / 400 / Noto Sans
- Shadow: `rgba(0,170,245,0.3) 0px 2px 4px`
- Use: Event category chips ("Learning", "Design") — shadow tinted with the chip's own fill

**Category Tag (Pink)**
- Background: `#ff93c2`
- Text: `#ffffff`
- Radius: 4px
- Padding: 4px 16px
- Font: 14px / 400 / Noto Sans
- Shadow: `rgba(255,147,194,0.3) 0px 2px 4px`
- Use: Event type chips ("Offline Event")

**Keyword Chip (Outlined)**
- Background: transparent
- Text: `#959ba1`
- Border: 1px solid `#d8dde4`
- Radius: 100px
- Padding: 8px 16px
- Font: 14px / 400 / Noto Sans
- Use: Event keyword pills on detail pages (設計系統, UIUX, FIGMA)

**Notice Pill (Pink)**
- Background: `#ff93c2`
- Text: `#ffffff`
- Radius: 16px
- Padding: 4px 16px
- Font: 14px / 300 / Noto Sans
- Use: "How to Collect Tickets?" helper pill inside pink notice banners

### Cards & Containers

**Event Card**
- Background: `#ffffff`
- Radius: 16px
- Shadow: `rgba(0,0,0,0.1) 0px 2px 8px`
- Use: The platform's core unit — homepage grids and carousels; cover image caps top corners at `16px 16px 0px 0px`

**Notice Banner**
- Background: `#ffeef3`
- Radius: 8px
- Use: Pink-tinted ticket-collection notice on event pages

### Tabs / Navigation

**Channel Tab**
- Active: text `#0088d2`
- Inactive: text `#b5bac1`
- Font: 14px / 600 / Noto Sans
- Use: Homepage channel switcher ("Featured Events" / "Learning" / "Art" / "Experience") and area tabs (North / Central / South / Singapore)

### Links

**Inline Action Link**
- Text: `#00aaf5`
- Font: 16px / 400 / Noto Sans
- Use: "Add To Calendar" and other inline actions on event pages

**Organizer Link**
- Text: `#2ea3f2`
- Font: 14px / 400 / Noto Sans
- Use: Organizer profile names

---
**Verified:** 2026-06-10
**Tier 1 sources:** https://www.accupass.com (homepage, live inspect), https://www.accupass.com/event/2605092145291488451008 (event detail, live inspect), https://blog.accupass.com (ACCUPASS 生活誌 — official blog)
**Tier 2 sources:** none available (getdesign.md/accupass — 404 "No designs found"; styles.refero.design/?q=accupass — no matching results)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Observed scale: 4px, 8px, 12px, 16px, 24px, 48px
- Tag padding is consistently `4px 16px`; chips `8px 16px`; the register CTA uses an even 16px; the "More" pill stretches to `12px 48px` for a wide tap target

### Grid & Container
- Homepage is a vertical stack of horizontally scrolling card carousels and card grids, each introduced by a 23px H2 and closed by a centered "More" pill
- Event cards hold a fixed recipe: cover image (top corners 16px), date line, title, location/price metadata
- Event detail pages run a two-column desktop layout: content left, sticky registration/organizer module right
- Area and channel tabs sit directly under the global header, doubling as the primary information architecture

### Whitespace Philosophy
- **Marketplace density**: Accupass optimizes for how many events fit on screen before scrolling, not for air. Sections are separated by modest vertical gaps and the faint `#f8fbff` wash rather than dramatic spacing.
- **Cards carry the structure**: because every unit is a shadowed 16px-radius card, the layout stays legible even at high density — the shadow does the separating, not the whitespace.
- **Footer as a hard stop**: the page always terminates in the near-black `#1a1f23` footer block, a strong horizon line under the airy white catalog.

### Border Radius Scale
- Tight (3-4px): header CTA, category tags, register CTA — utility actions
- Medium (8px): service buttons, notice banners
- Large (16px): event cards, notice pills — the workhorse radius
- Pill (22px / 36px / 100px): "More" buttons, carousel arrows, keyword chips

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page canvas, text, tabs, outlined chips |
| Tint (Level 1) | `#f8fbff` / `#ffeef3` background shift | Section bands, notice banners |
| Card (Level 2) | `rgba(0,0,0,0.1) 0px 2px 8px` | Event cards — the standard elevation |
| Glow (accent) | `rgba(0,170,245,0.3) 0px 2px 4px` (fill-tinted) | Category tags — chips glow their own color |

**Shadow Philosophy**: Accupass keeps elevation light and literal — one soft neutral shadow level for cards, and that's essentially the whole z-axis. The memorable exception is the tinted micro-shadow under category tags: a blue tag casts a blue shadow (`rgba(0,170,245,0.3)`), a pink tag casts a pink one. It is a small, cheap, characterful trick that makes the tag system feel alive without adding visual weight. Navigation and headers stay shadowless; the dark footer provides closure through contrast rather than depth.

## 7. Do's and Don'ts

### Do
- Use the blue family directionally — `#0088d2` for wayfinding/active states, `#2ab3fc`/`#009ce6` for mid-level CTAs, and reserve the `#3e97d3` → `#1074cc` gradient for the registration moment
- Keep event cards white, 16px radius, on `rgba(0,0,0,0.1) 0px 2px 8px` shadows
- Tint tag shadows with the tag's own fill color (`rgba(0,170,245,0.3)` under a `#00aaf5` chip)
- Use pink `#ff93c2` for offline/ticketing notices — it is the system's only warm accent
- Keep body text at 14px Noto Sans / `#757575` and headings at 600 weight
- Cap card cover images with `16px 16px 0px 0px` so image and card read as one unit
- Close pages with the `#1a1f23` footer and icy `#f5faff` links
- Use outlined 100px-radius chips (`#d8dde4` hairline, `#959ba1` text) for keywords and filters

### Don't
- Collapse the blue family into one blue — the saturation steps are the platform's conversion language
- Use the register gradient on secondary actions — it marks the single committed step
- Add heavy display typography or weights above 700 — the system tops out at semibold headings
- Use pure black text for body copy — ink stops at `#212121` for titles and `#757575` for body
- Put neutral grey shadows under category tags — tags glow their own color or nothing
- Square off event cards — 16px is the identity radius of the catalog
- Introduce a second warm accent beyond pink `#ff93c2`
- Make the footer white — the dark block is the page's structural full stop

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single-column card lists, sticky bottom register bar, tabs scroll horizontally |
| Tablet | 640-1024px | 2-3 column card grids, condensed header |
| Desktop | 1024px+ | Full card carousels, two-column event detail with sticky right rail |

### Touch Targets
- Keyword chips at 39px height with `8px 16px` padding — comfortably tappable
- Register CTA at 50px height — the largest target on the platform, as befits its job
- Carousel arrows at 40px circles
- Category tags are display-only metadata at 29px; tap targets route through the parent card

### Collapsing Strategy
- Card carousels become vertical lists or horizontal swipe rows on mobile
- The event detail right rail (registration/organizer) collapses into a fixed bottom action bar
- Channel and area tabs remain at the top as horizontally scrollable rows
- The dense footer columns stack vertically while keeping the `#1a1f23` block treatment

### Image Behavior
- Event cover images are the card's visual anchor — fixed aspect ratio, top corners rounded to match the 16px card
- Banner carousel images run full-bleed with translucent `rgba(0, 0, 0, 0.1)` arrow circles overlaid
- Images never carry their own shadows; the card shadow does the work

## 9. Agent Prompt Guide

### Quick Color Reference
- Signature accent / service: Accu Blue (`#00aaf5`)
- Active nav / brand: Brand Blue (`#0088d2`)
- Header CTA: `#2ab3fc`
- Section pill CTA: `#009ce6`
- Register gradient: `#3e97d3` → `#1074cc`
- Secondary accent: Bubblegum Pink (`#ff93c2`), surface `#ffeef3`
- Canvas: White (`#ffffff`), tinted band `#f8fbff`
- Title text: `#212121`; headings `#333333`; body `#757575`; muted `#959ba1`; faint `#b5bac1`
- Chip hairline: `#d8dde4`
- Footer: `#1a1f23` bg, `#6d7278` subtitles, `#f5faff` links

### Example Component Prompts
- "Create an event card: white #ffffff background, 16px radius, shadow rgba(0,0,0,0.1) 0px 2px 8px. Cover image with 16px 16px 0px 0px top corners. Below: 14px Noto Sans date in #00aaf5, title in #333333 600, location/price metadata in #959ba1."
- "Build the event-page CTA column: 'Register Now' button with linear-gradient 131deg from #3e97d3 to #1074cc, white text, 4px radius, 16px padding, 50px tall, 14px / 600 Noto Sans."
- "Design category tags: 4px radius, 4px 16px padding, 14px white text. Blue variant #00aaf5 with shadow rgba(0,170,245,0.3) 0px 2px 4px; pink variant #ff93c2 with shadow rgba(255,147,194,0.3) 0px 2px 4px."
- "Create the homepage section: H2 'Popular Events' at 23px / 600 / #333333, a grid of white 16px-radius event cards, then a centered More pill — #009ce6 background, white 14px / 700 text, 22px radius, 12px 48px padding."
- "Build a keyword chip row: transparent chips with 1px solid #d8dde4 border, 100px radius, 8px 16px padding, #959ba1 text at 14px."
- "Design the footer: #1a1f23 background, column subtitles at 18px / 300 / #6d7278, links in #f5faff 14px, and an 'Ask ACCUPASS' button — #00aaf5 background, #f5faff text, 8px radius."

### Iteration Guide
1. The blue family is stepped, not singular — match saturation to conversion proximity
2. Event card = white + 16px radius + rgba(0,0,0,0.1) 2px/8px shadow, always
3. Tags glow their own fill color at 0.3 alpha — never neutral shadows on chips
4. 14px Noto Sans / #757575 is the default voice; headings stop at 600
5. Pink #ff93c2 only for offline-event/ticketing accents
6. Keyword chips are outlined 100px pills; action buttons are tight 3-4px rectangles
7. End every page with the #1a1f23 footer block

---

## 10. Voice & Tone

Accupass speaks like an enthusiastic local friend who always knows what's happening this weekend — **upbeat, practical, and exploratory**. The blog's tagline 「與你一同『探索』生活的更多可能」("exploring more of life's possibilities with you") is the register in one line: the platform sells discovery, not tickets. Platform UI copy stays terse and functional ("Create Event", "Register Now", "Ask ACCUPASS"), while editorial surfaces loosen up with emoji, exclamation marks, and listicle energy. The voice splits cleanly by audience: attendee-facing copy is playful and seasonal; organizer-facing copy (Organizer Academy) is pragmatic and conversion-minded.

| Context | Tone |
|---|---|
| Platform UI / buttons | Terse, functional imperatives. "Create Event", "Register Now", "Add To Calendar". |
| Section headings | Plain catalog labels. "Weekly recommend", "Popular Events", "Event News". |
| Blog (attendee) | Playful listicle energy — seasonal hooks, 攻略 (strategy-guide) framing, emoji allowed. |
| Blog (organizer) | Practical growth advice — "必學" (must-learn), conversion and tooling tips. |
| Notices / help | Friendly and direct: "How to Collect Tickets?" as a pink pill, not buried legalese. |

**Voice samples:**
- 「與你一同『探索』生活的更多可能」 — blog tagline (discovery-framed). *(verified on blog.accupass.com, 2026-06-10)*
- "GPT-5.5 攻略：活動主辦方必學！用 AI 快速打造高轉換活動頁" — organizer-facing blog title (pragmatic, trend-surfing). *(verified on blog.accupass.com, 2026-06-10)*
- "2026 兒童節省錢攻略｜全台 10 處免費親子景點大集合！" — attendee-facing blog title (seasonal listicle). *(verified on blog.accupass.com, 2026-06-10)*
- "Weekly recommend" / "Popular Events" — homepage section headings (plain catalog voice). *(verified live 2026-06-10)*

**Forbidden register**: corporate solemnity, luxury-brand minimal-speak, FOMO-style countdown pressure on editorial surfaces, and untranslated jargon in attendee copy.

## 11. Brand Narrative

Accupass (活動通) is operated by **Accuvally Inc. (盈科泛利股份有限公司)**, founded by **謝耀輝 (Yao-Hui Hsieh)** and his university classmate **羅子文 (Tzu-Wen Lo)**. The pair left engineering careers (Hsieh had been a Foxconn software engineer in Shenzhen) to start a restaurant-reservation service, AccuSeats, in 2009 — then pivoted into events, launching **Accupass in Taiwan in 2012** and a sister platform, 活動行, in China in 2013. The company's stated mission is to **「壯大亞洲活動生態圈」 (grow the Asian event ecosystem)** — positioning events as a "third space" of life beyond home and work, and Accupass as the infrastructure that connects organizers to audiences across the region.

The company's defining story is survival. After raising roughly NT$200M and expanding aggressively across Chinese cities, Accuvally nearly went bankrupt — founder interviews (今周刊, 換日線, 104掌聲) recount Hsieh contemplating declaring bankruptcy on his own birthday before cutting the company back to its Taiwan core and rebuilding it into the island's dominant event platform. Hsieh's own framing — that every industry needs people with long-term thinking rather than quick-money instincts — explains the product's unglamorous steadiness: a dense, reliable catalog that serves hundreds of thousands of events rather than a flashy brand reinvention.

That history is legible in the design. What Accupass refuses: scarcity theatrics, luxury polish, and the winner-take-all hero aesthetics of Western ticketing brands. What it embraces: marketplace density, a cheerfully stepped blue system that guides users from browsing to registering, a playful pink for the offline moments that are the product's whole point, and an editorial voice (ACCUPASS 生活誌) that treats going out — learning, art, experience — as everyday self-improvement rather than special-occasion consumption.

## 12. Principles

1. **Discovery is the product.** The catalog, not any single event, is what Accupass sells. *UI implication:* optimize for cards-per-screen and scanning rhythm; every section ends with a "More" pill because there is always more.
2. **Saturation tracks commitment.** The blue family steps up as the user approaches registration. *UI implication:* wayfinding gets `#0088d2`, mid-funnel CTAs get `#2ab3fc`/`#009ce6`, and only the register action gets the `#3e97d3` → `#1074cc` gradient.
3. **Serve both sides of the stage.** Attendees and organizers are co-equal users. *UI implication:* "Create Event" lives permanently in the global header at the same visual weight as discovery; organizer tooling copy stays as polished as attendee copy.
4. **Cheerful, not premium.** Events are everyday joy, not luxury goods. *UI implication:* tinted glowing tag shadows, bubblegum pink accents, and emoji-friendly editorial — warmth beats restraint.
5. **Long-term steadiness over trend-chasing.** The company survived by becoming infrastructure. *UI implication:* conservative type scale, predictable card recipes, and no redesign-of-the-week — reliability is the brand.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Accupass user segments (Taiwanese event-goers and event organizers), not individual people.*

**林佳穎, 27, 台北.** A UX designer who checks Accupass weekly for design workshops and tech meetups. Scans the Learning channel on her commute, taps into an event page, and decides within thirty seconds based on the title, date, and organizer name. Values that registration is two taps and the ticket lives in the app.

**陳威廷, 34, 桃園.** A weekend father hunting 親子 (family) activities. Finds free children's events through blog listicles and the search chips. Cares about location filters and price visibility on the card itself — he will not tap through to discover an event is in Taipei.

**張雅婷, 31, 台中.** Community manager at a SaaS startup who runs monthly meetups through the organizer dashboard. Reads Organizer Academy posts for conversion tips, lives by the attendee-list export, and chose Accupass because her audience already has the app installed.

**黃柏勳, 42, 台北.** An arts organization producer selling ticketed exhibitions and lectures. Needs reliable ticketing, QR check-in that doesn't fail at the door, and a page that renders his long Traditional Chinese event description cleanly.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no search results)** | White canvas, single `#757575` line stating no events match, with suggested keyword chips (`#d8dde4` outline pills) to broaden the search. No illustration clutter. |
| **Empty (no saved events)** | Muted `#959ba1` one-liner plus a `#009ce6` More-style pill routing back to Popular Events. |
| **Loading (card grids)** | Skeleton cards at final dimensions — 16px radius blocks with the image area and two text bars, soft pulse on `#f8fbff`. |
| **Loading (event page)** | Title and meta-row skeletons; the register module renders last so the gradient CTA never flashes unstyled. |
| **Error (registration failed)** | Inline message above the CTA in plain language stating the cause (sold out, session expired) and the next step. The gradient button stays visible; the error never replaces it. |
| **Error (page load)** | Friendly full-page message with a retry action and a link back to the homepage catalog. |
| **Success (registration complete)** | Confirmation view with ticket/QR access front and center and "Add To Calendar" (`#00aaf5`) as the immediate next action. |
| **Success (event created)** | Organizer redirected to the event dashboard with a quiet inline confirmation — the published page itself is the reward. |
| **Skeleton** | `#f8fbff`-tinted blocks at final card dimensions, 16px radius, gentle pulse — never spinner-only screens in the catalog. |
| **Disabled (sold out)** | Register CTA desaturates to a flat grey with explicit "已售完 / Sold Out" label; category tags keep their color so the event remains identifiable. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Tab switches, chip hover, button press feedback |
| `motion-standard` | 240ms | Card hover lift, carousel slide steps, dropdown reveal |
| `motion-slow` | 400ms | Banner carousel auto-advance transitions |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Default for hovers, tabs, reveals |
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Cards and sheets arriving |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |

**Motion rules**: Motion at Accupass is carousel-first — the hero banner and card rows slide horizontally at a steady, unhurried pace, and that sideways rhythm is the platform's signature movement. Card hover adds a subtle shadow deepen/lift at `motion-standard`; tags and chips respond at `motion-fast` with opacity shifts. No bounce or spring anywhere — a ticketing platform's motion must read as dependable, and playful energy is delegated to color (pink, glowing tags) rather than physics. Under `prefers-reduced-motion: reduce`, carousels stop auto-advancing and become manually navigable, and hover lifts collapse to instant state changes.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-10) via playwright getComputedStyle on
https://www.accupass.com and https://www.accupass.com/event/2605092145291488451008:
all token-level claims in §1-9 (blue family #0088d2/#2ab3fc/#009ce6/#00aaf5,
register gradient #3e97d3→#1074cc, pink #ff93c2, card 16px radius +
rgba(0,0,0,0.1) 0 2px 8px shadow, tinted tag shadows, Noto Sans/Microsoft
JhengHei stack, 23px/600 section H2, 32px/600 event H1, footer #1a1f23).

Voice samples (§10): blog tagline and post titles fetched verbatim from
https://blog.accupass.com (2026-06-10); homepage section headings observed live.

Brand narrative (§11): founding facts (謝耀輝 + 羅子文, AccuSeats 2009,
Accupass Taiwan 2012, 活動行 China 2013, operator Accuvally Inc.
盈科泛利股份有限公司, mission 壯大亞洲活動生態圈, near-bankruptcy and Taiwan
refocus) are drawn from public founder interviews and press:
- https://crossing.cw.com.tw/article/15332 (換日線 founder interview)
- https://www.businesstoday.com.tw/article/category/154687/post/201912120034
  (今周刊 — bankruptcy-contemplation story)
- https://blog.104.com.tw/104bravo-accupass-founder/ (104掌聲 profile)
- https://meet.bnext.com.tw/articles/view/41647 (Meet創業小聚)
These were surfaced via web search in this turn; the narrative paraphrases
rather than quotes, except Hsieh's long-term-thinking sentiment, which is
paraphrased from the 換日線/104 interviews.

Personas (§13) are fictional archetypes informed by publicly observable
Accupass user segments (attendees, family event-goers, meetup organizers,
arts producers). Names are illustrative; they do not refer to real people.

Interpretive claims (e.g., "saturation tracks commitment", "marketplace
density as a survival-shaped aesthetic") are editorial readings connecting
observed design to the company's public history, not sourced Accupass
statements.
-->
