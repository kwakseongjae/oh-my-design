---
id: bahamut
name: Bahamut
country: TW
category: consumer-tech
homepage: "https://www.gamer.com.tw"
primary_color: "#11aac1"
logo:
  type: favicon
  slug: "https://i2.bahamut.com.tw/apple-touch-icon-144x144.png"
verified: "2026-06-22"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-22"
  note: "primary = Bahamut Teal (#11aac1) — active tab/CTA background; active link text is a darker teal (#117e96). Body text is warm dark gray (#464646). Page canvas is near-white (#f8f8f8)."
  colors:
    primary: "#11aac1"
    primary-dark: "#117e96"
    primary-deeper: "#009cad"
    canvas: "#ffffff"
    page-bg: "#f8f8f8"
    surface: "#f3f3f3"
    heading: "#2d2d2d"
    body: "#464646"
    muted: "#8c8c8c"
    on-primary: "#ffffff"
    red-accent: "#e60012"
    hairline: "#e5e7eb"
  typography:
    family: { sans: "\"Helvetica Neue\", Helvetica, Roboto, Arial, \"Lucida Grande\", \"PingFang TC\", sans-serif" }
    body:        { size: 16, weight: 400, lineHeight: 1.50, use: "Standard reading text and nav links" }
    body-sm:     { size: 14, weight: 400, lineHeight: 1.57, use: "Sidebar links, tab labels, metadata" }
    body-xs:     { size: 13, weight: 400, lineHeight: 1.50, use: "Supplementary labels, timestamps" }
    heading:     { size: 18, weight: 700, lineHeight: 1.40, use: "Section headings" }
    active-nav:  { size: 14, weight: 700, lineHeight: 1.57, use: "Active navigation tab (bold + teal)" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 2, md: 4, lg: 8, full: 9999 }
  shadow:
    card: "0 1px 3px rgba(0,0,0,0.08)"
  components:
    nav-tab-active: { type: tab, bg: "#11aac1", fg: "#ffffff", radius: "4px", padding: "8px 12px", font: "14px / 700", active: "bg #11aac1 text #ffffff", use: "Active section tab in top nav (首頁, GNN新聞)" }
    nav-tab-inactive: { type: tab, fg: "#464646", radius: "4px", padding: "8px 12px", font: "14px / 400", use: "Inactive nav tab" }
    nav-link-active: { type: listItem, fg: "#117e96", font: "14px / 700", use: "Active sidenav link with teal tint bg" }
    search-input: { type: input, bg: "#ffffff", border: "0px none", radius: "0px", font: "14px / 400", use: "Search bar embedded in nav header" }
    content-card: { type: card, bg: "#ffffff", radius: "4px", use: "Article and game content card, shadow 0 1px 3px rgba(0,0,0,0.08)" }
    post-badge: { type: badge, bg: "#e60012", fg: "#ffffff", radius: "2px", font: "12px / 400", use: "Hot/new post indicator tag" }
    section-tag: { type: badge, bg: "#f3f3f3", fg: "#464646", radius: "4px", padding: "4px 8px", font: "12px / 400", use: "Category tags in listing pages" }
    register-btn: { type: button, fg: "#ffffff", radius: "0px", padding: "0px 10px", font: "16px / 400", use: "Register / Login header links on dark nav" }
  components_harvested: true
---

# Design System Inspiration of Bahamut

## 1. Visual Theme & Atmosphere

巴哈姆特 (Bahamut Gamer) is Taiwan's largest gaming and ACG (Anime, Comics, Games) community portal, and its visual design embodies the no-nonsense density of a community-first information hub that has served Taiwanese gamers since 1996. The page opens on a near-white canvas (`#f8f8f8`) that recedes into the background, letting an enormous volume of content — news links, forum threads, game entries, live events — occupy the foreground without visual noise. The signature color is a confident teal-blue (`#11aac1`), drawn from the Bahamut brand's longstanding palette, appearing most legibly as the active state of navigation tabs and in the horizontal section indicators.

The typographic approach is unapologetically utilitarian. System fonts — `"Helvetica Neue"`, `Helvetica`, `Arial`, and the Traditional Chinese fallback chain `"PingFang TC"`, `蘋果儷中黑`, `"Apple LiGothic Medium"` — cover both Latin and CJK glyphs without custom-font overhead. Body text sits at 16px weight 400 for the main canvas and drops to 14px for sidebar lists, nav tabs, and metadata — a size hierarchy calibrated for dense information scanning rather than leisurely reading. The heading color is a deep charcoal (`#2d2d2d`) rather than pure black, and the body text is a warm dark gray (`#464646`) that reduces harshness over long reading sessions.

Bahamut's layout aesthetic is maximum-information: a fixed horizontal top nav with teal active tabs, a two-or-three-column grid below, sidebar lists, and horizontally tabbed content sections. Red accents (`#e60012`) appear on "hot" badges and notification counts — the one high-saturation departure from the teal/gray palette, inherited from years of gaming community visual language. The overall atmosphere is a veteran portal that knows exactly what its community needs: fast, dense, readable, familiar.

**Key Characteristics:**
- Bahamut Teal (`#11aac1`) as the primary interactive and active-state color — the brand's most recognizable hue
- System font stack covering both Latin and Traditional Chinese CJK characters
- Dense information layout: two-to-three column grid with sidebar, tabbed content sections
- Near-white page canvas (`#f8f8f8`) with white content cards — depth via flat color layers, not shadows
- Red accent (`#e60012`) reserved for hot/new badges, notification counts — an emotional urgency signal
- Conservative 4px border-radius across interactive elements — not aggressive pill, not harsh square
- Body text in warm dark gray (`#464646`) over near-black heading (`#2d2d2d`)
- Horizontal tab navigation with teal fill (`#11aac1` bg, white text) on active, transparent on inactive

## 2. Color Palette & Roles

### Primary
- **Bahamut Teal** (`#11aac1`): The brand's signature color. Active tab backgrounds, active section indicators, CTA elements. A medium-depth teal that reads as contemporary and energetic without the aggression of pure cyan.
- **Teal Dark** (`#117e96`): Active link text in sidebars and highlighted navigation items. A darker, more legible variant of the primary teal for text on white backgrounds.
- **Teal Deeper** (`#009cad`): Secondary link states and interactive underlines.

### Canvas & Surface
- **Pure White** (`#ffffff`): Content card backgrounds, nav bar, modal surfaces.
- **Page Background** (`#f8f8f8`): The main page canvas — just off-white to distinguish it from cards.
- **Section Surface** (`#f3f3f3`): Slightly darker tinted surface for alternating content sections.

### Text Hierarchy
- **Heading Charcoal** (`#2d2d2d`): Primary headings, strong labels.
- **Body Gray** (`#464646`): Standard body text and nav links in inactive state — the workhorse text color.
- **Muted Gray** (`#8c8c8c`): Secondary metadata, timestamps, captions.

### Accent
- **Red Alert** (`#e60012`): Hot badges, notification counts, error states. The only highly-saturated warm color in the system — carries urgency.

### Borders
- **Hairline** (`#e5e7eb`): Standard card and input borders.

## 3. Typography Rules

### Font Family
- **Primary stack**: `"Helvetica Neue"`, `Helvetica`, `Roboto`, `Arial`, `"Lucida Grande"`, `"PingFang TC"`, `蘋果儷中黑`, `"Apple LiGothic Medium"`, `sans-serif`
- A CJK-aware system font stack — no custom fonts loaded. Traditional Chinese glyphs rendered by `PingFang TC` (macOS/iOS) or `蘋果儷中黑` / `Apple LiGothic Medium` as fallbacks.

### Hierarchy

| Role | Size | Weight | Line Height | Notes |
|------|------|--------|-------------|-------|
| Body / Nav | 16px | 400 | 1.50 | Default reading text |
| Sidebar / Tabs | 14px | 400 | 1.57 | Dense listing contexts |
| Active Nav Tab | 14px | 700 | 1.57 | Bold + teal on active tab |
| Headings | 18px | 700 | 1.40 | Section / article titles |
| Micro / Tags | 13px | 400 | 1.50 | Timestamps, badge labels |

### Principles
- **System first**: No web font downloads — optimal for a high-traffic portal where page speed is paramount.
- **CJK readiness**: The fallback chain covers Traditional Chinese on every major platform.
- **Weight as state signal**: Bold (700) is used only for active navigation states and headings — body/inactive elements stay at 400.
- **Size discipline**: Three functional sizes (16px body, 14px UI, 13px micro) keep the system legible at dense layouts.

## 4. Component Stylings

### Tabs

**Active Nav Tab**
- Background: `#11aac1`
- Text: `#ffffff`
- Radius: 4px
- Padding: 8px 12px
- Font: 14px weight 700
- Height: 40px
- Use: Top navigation active section (e.g., 首頁, GNN新聞)

**Inactive Nav Tab**
- Background: transparent
- Text: `#464646`
- Radius: 4px
- Padding: 8px 12px
- Font: 14px weight 400
- Height: 40px
- Use: Unselected top navigation item

**Content Section Tab (Active)**
- Background: `#11aac1`
- Text: `#ffffff`
- Radius: 4px
- Padding: 4px 8px
- Height: 28px
- Use: Horizontal section-index tabs on content cards ("今日焦點", "熱門討論")

### Buttons

**Header Link Button**
- Background: transparent
- Text: `#ffffff`
- Padding: 0px 10px
- Height: 44px
- Font: 16px weight 400
- Use: Register (註冊) and Login (登入) links in dark header bar

**Sidenav Active Link**
- Background: `rgba(17, 170, 193, 0.1)`
- Text: `#117e96`
- Radius: 4px
- Padding: 8px 12px
- Font: 14px weight 700
- Height: 40px
- Use: Active state of left-sidebar section link (首頁)

### Cards & Containers

**Content Card**
- Background: `#ffffff`
- Radius: 4px
- Shadow: `0 1px 3px rgba(0,0,0,0.08)`
- Use: News articles, game listings, community post cards

**Section Surface**
- Background: `#f3f3f3`
- Use: Alternating section backgrounds for visual grouping

### Badges

**Hot / New Badge**
- Background: `#e60012`
- Text: `#ffffff`
- Radius: 2px
- Font: 12px weight 400
- Use: "熱門" (hot) and "新" (new) post/article markers

**Category Tag**
- Background: `#f3f3f3`
- Text: `#464646`
- Radius: 4px
- Padding: 4px 8px
- Font: 12px weight 400
- Use: Game category tags, content type labels in listing pages

### Inputs

**Search Bar**
- Background: `#ffffff`
- Text: `#464646`
- Border: none (embedded in header)
- Font: 14px weight 400
- Use: Top-of-page search bar in the navigation header area

---

**Verified:** 2026-06-22
**Tier 1 sources:** https://www.gamer.com.tw (Bahamut homepage live inspect — nav, tabs, cards, badges, body text); https://forum.gamer.com.tw (哈啦區 forum — secondary surface confirm, same teal system)
**Tier 2 sources:** getdesign.md/bahamut — 0 results (not listed); styles.refero.design/?q=bahamut — no matching results
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px
- Notable: Nav padding at 8px × 12px per tab creates a compact-but-tappable horizontal menu

### Grid & Container
- Fixed top navigation bar with logo left, tabs center, utility links right
- Main layout: wide left content column (~70%) + right sidebar (~30%)
- Forum boards and game listings use a two-column grid
- Max content width approximately 1200px, centered

### Whitespace Philosophy
- **Information density first**: Whitespace is functional, not decorative. Every row and card packs content.
- **Flat depth, no shadows**: Page hierarchy comes from background-color tiers (`#f8f8f8` → `#ffffff` → `#f3f3f3`) rather than elevation.
- **Tab rhythm**: Horizontal tab strips are the primary navigation pattern, appearing at both the global nav and within content cards.

### Border Radius Scale
- None (0px): Legacy input borders, some footer elements
- Micro (2px): Hot/new badges
- Standard (4px): Tabs, cards, sidebar links, category tags — the workhorse
- Large (8px): Occasional larger UI containers

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text, section surfaces |
| Card (Level 1) | `0 1px 3px rgba(0,0,0,0.08)` | Content cards, news articles |
| Nav (Level 2) | `#ffffff` background on `#f8f8f8` page | Nav bar lifts visually via contrast |

**Shadow Philosophy**: Bahamut uses minimal elevation. The portal predates heavy shadow systems and its design language has not adopted them — depth is communicated through flat color layering (`#f8f8f8` page bg vs `#ffffff` card bg vs `#f3f3f3` section tint). This keeps the interface feeling fast and uncluttered for a dense information context.

## 7. Do's and Don'ts

### Do
- Use the teal (`#11aac1`) exclusively for active states and primary indicators — it's the brand signal
- Rely on system fonts for CJK rendering — PingFang TC covers Traditional Chinese on modern platforms
- Use 4px radius as the default corner treatment for tabs, cards, and badges
- Use red (`#e60012`) sparingly — only for urgency signals (hot badges, notifications, errors)
- Separate content zones with background-color tiers, not shadows
- Use bold (700) only for active/selected states and headings — keep body at 400

### Don't
- Use the teal on body text or as a background for large content areas — it's an accent/active color
- Apply heavy shadows or complex elevation to a portal that prioritizes speed and density
- Use rounded pill shapes on tabs or badges — the conservative 4px is part of the veteran-portal identity
- Mix Traditional Chinese content with a Western-only font stack that lacks PingFang TC
- Apply bright/saturated colors beyond teal and red — the palette is deliberately restrained
- Add decorative gradients or illustration — Bahamut's aesthetic is text-and-link information density

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, collapsed nav, simplified tab row |
| Tablet | 640-1024px | Partial sidebar, 2-column content |
| Desktop | 1024-1280px | Full 3-zone layout (content + sidebar + optional right rail) |

### Touch Targets
- Nav tabs at 40px height with 8px × 12px padding
- Sidebar links at 40px height
- Header register/login at 44px height

### Collapsing Strategy
- Desktop two-column grid collapses to single column on mobile
- Horizontal tab strips wrap or scroll horizontally on narrow viewports
- Sidebar disappears on mobile; content takes full width

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary active: Bahamut Teal (`#11aac1`)
- Active link text: Teal Dark (`#117e96`)
- Page background: Near White (`#f8f8f8`)
- Card background: Pure White (`#ffffff`)
- Body text: Warm Dark Gray (`#464646`)
- Heading text: Deep Charcoal (`#2d2d2d`)
- Muted / meta: Mid Gray (`#8c8c8c`)
- Hot badge: Alert Red (`#e60012`)
- Hairline border: Light Gray (`#e5e7eb`)

### Example Component Prompts
- "Create a tab navigation bar. Active tab: `#11aac1` background, `#ffffff` text, 4px radius, 8px × 12px padding, 14px weight 700. Inactive tabs: transparent background, `#464646` text, same radius and padding, weight 400. Nav background `#ffffff`, height 44px."
- "Design a content listing card: `#ffffff` background, 4px radius, `0 1px 3px rgba(0,0,0,0.08)` shadow. Title at 16px weight 700, `#2d2d2d`. Metadata at 13px weight 400, `#8c8c8c`. A red `#e60012` badge (2px radius) for hot items."
- "Build a sidebar link list: inactive links at 14px weight 400, `#464646` text, 8px 12px padding. Active link: `rgba(17,170,193,0.1)` background tint, `#117e96` text, 14px weight 700, 4px radius."
- "Create page layout: `#f8f8f8` canvas. `#ffffff` top nav with teal active tabs. Two-column body: 70% content + 30% sidebar. Section cards in `#ffffff` with `#f3f3f3` alternating zone."

### Iteration Guide
1. Teal (`#11aac1`) signals active/selected — never use it for passive text or card backgrounds
2. System fonts are intentional — `PingFang TC` is the CJK workhorse on Apple devices
3. 4px radius is the design signature — don't round or square further without clear reason
4. Red (`#e60012`) is an urgency color — one badge per item maximum
5. Text hierarchy lives in size + weight, not color — body stays `#464646`, only headings and active states deviate

---

## 10. Voice & Tone

Bahamut's voice is **communal, direct, and encyclopedic** — the editorial register of a gaming community that has been Taiwan's trusted authority on gaming and ACG culture for three decades. The platform speaks to fans as fellow fans: no corporate distance, no marketing jargon, just fast, confident information delivery. Chinese headings are short and punchy ("巴哈姆特30週年", "GNN新聞", "哈啦區"), and the interface labels privilege familiarity over formality — regular users know what "我的小屋" (My Cottage — user profile) means without explanation.

| Context | Tone |
|---|---|
| Navigation labels | Concise, community-idiomatic. "哈啦區", "動畫瘋", "GNN新聞" — brand-specific names, not generic. |
| Forum section names | Thematic and self-explanatory within community context. |
| Game listings | Factual: title + release date + genre tags. No marketing superlatives. |
| Error states | Practical and brief. "找不到網頁" + link back. |
| Registration prompts | Low-friction. "註冊" / "登入" — two words, no persuasion. |

**Voice samples (verified live 2026-06-22):**
- "巴哈姆特電玩資訊站" — site title (category statement: gaming information station). *(verified live 2026-06-22)*
- "首頁" — home tab label (literal, unadorned). *(verified live 2026-06-22)*
- "我的小屋" — user profile link (warm community idiom: "My Cottage"). *(verified live 2026-06-22)*

**Forbidden register**: gaming hype marketing, corporate formality, English-only labels on Taiwan-facing surfaces.

## 11. Brand Narrative

巴哈姆特 (Bahamut Gamer) was founded in **1996** in Taiwan by a group of gaming enthusiasts — the name drawn from the legendary dragon **Bahamut** in role-playing game mythology. The site launched as a game information and news portal at a time when Taiwanese internet infrastructure was nascent, and grew organically to become the dominant community hub for gaming and ACG culture in the Chinese-speaking world.

Today, Bahamut operates as a multi-surface platform: the main portal at `gamer.com.tw` covers news (GNN), forum boards (哈啦區 — "Harla" community discussions), a commerce section (巴哈商城), and the streaming/anime platform 動畫瘋 (`ani.gamer.com.tw`), which is Taiwan's largest legal anime streaming service. The company has grown from a volunteer-driven fan site into a professional media property, but the design language has preserved the dense, community-oriented layout that users have navigated for decades.

What Bahamut refuses: the minimalist, whitespace-heavy redesign that would alienate its core users who depend on information density. What it embraces: a recognizable teal brand color that has persisted across design iterations, a system-font stack that ensures CJK legibility on every Taiwanese device, and tab-navigation patterns that veteran users navigate without thought.

## 12. Principles

1. **Information density is a feature, not a problem.** The community comes for coverage breadth — more content links per page is a user benefit. *UI implication:* two-column layouts with sidebars, not single-column editorial.
2. **Brand continuity across decades.** The teal color has been Bahamut's signature since early versions. *UI implication:* preserve `#11aac1` as the unambiguous active-state signal.
3. **CJK legibility is non-negotiable.** Taiwan-first means Traditional Chinese characters must render clearly at all body sizes. *UI implication:* system fonts over web fonts; 14px minimum for list contexts.
4. **Red for urgency, teal for active.** Two functional hues carry the whole semantic system. *UI implication:* no additional accent colors; badge colors have fixed meanings.
5. **Community naming over generic labels.** Interface terms are community-fluent ("哈啦區", "我的小屋"). *UI implication:* localize for the community's own vocabulary, not corporate nomenclature.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Bahamut user segments, not individual people.*

**陳建宇, 22, 台北.** A university student who checks Bahamut's GNN news feed every morning for game release announcements and review scores. He navigates by top tab — directly to 哈啦區 for forum discussion, then the front page for headlines. Has been a registered member since high school. Finds the dense layout comfortable; he'd be disoriented by a whitespace-heavy redesign.

**林怡君, 28, 台中.** An ACG fan who uses 動畫瘋 for seasonal anime and maintains a "小屋" profile with a curated anime list. Participates in the 哈啦板 (board) for specific series. Values the coverage breadth — Bahamut is the only site that covers both gaming news and anime streaming in Traditional Chinese at this scale.

**王志明, 35, 高雄.** A veteran member who has been active since the early 2000s. Knows the site's navigation by muscle memory. Occasional contributor to game wikis and 攻略 (strategy guide) boards. Would be frustrated by any UI change that breaks his 20-year-old navigation pattern.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no forum results)** | Near-white canvas. Simple text in body gray (`#464646`) explaining no results. One teal link back to listing. No illustration. |
| **Empty (user has no posts)** | Brief note in muted gray (`#8c8c8c`), link to browse boards. |
| **Loading (content section)** | Gray placeholder bars on `#f3f3f3` surface at approximate text dimensions. No shimmer — flat gray blocks consistent with the non-animated system. |
| **Loading (image thumbnails)** | `#f3f3f3` placeholder at final image dimensions. |
| **Error (page not found)** | "找不到網頁" heading. Teal link back to previous page and home. Matches live site behavior (verified 2026-06-22). |
| **Error (login required)** | Redirect to login page with brief message. Teal confirm button. |
| **Success (post submitted)** | Inline confirmation on the same page. No modal — community sites favor in-page feedback. |
| **Skeleton** | Flat `#f3f3f3` blocks at content dimensions. No animated shimmer. |
| **Disabled** | Reduced opacity on links and buttons; muted gray (`#8c8c8c`) text. |
| **Active / Selected** | Teal background (`#11aac1`), white text — the consistent system-wide active signal. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Tab selection commits, focus rings |
| `motion-fast` | 100ms | Hover color transitions on links and tabs |
| `motion-standard` | 200ms | Dropdown menus, modal open/close |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | All transitions |

**Motion rules**: Bahamut is a portal with decades of community habit. Motion is functional and subtle — hover states change color in ~100ms; tab switches are near-instant. No page transition animations, no hero reveals. The community uses the site at high frequency and motion that adds latency perception is unwelcome. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the site remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-22) via playwright getComputedStyle:
- https://www.gamer.com.tw — nav, tabs, body text, cards, badges (primary surface)
- https://forum.gamer.com.tw — 哈啦區 forum board (secondary surface confirm)

Key observations:
- Active nav tab: bg rgb(17,170,193) = #11aac1 / text #ffffff / radius 4px / font 14px weight 700
- Active sidenav link: bg rgba(17,170,193,0.1) / color rgb(17,126,150) = #117e96 / weight 700
- Body text: rgb(70,70,70) = #464646 (warm dark gray)
- Page bg: rgb(248,248,248) = #f8f8f8
- Section surface: rgb(243,243,243) = #f3f3f3
- Nav bar bg: rgb(255,255,255) = #ffffff
- Muted text: rgb(140,140,140) = #8c8c8c
- Red accent: rgb(230,0,18) = #e60012

Brand narrative: Bahamut (巴哈姆特) founded 1996 in Taiwan as a gaming community — public record.
The 動畫瘋 (ani.gamer.com.tw) streaming platform was bot-challenged during inspection; 
visual design confirmed consistent with main portal via source inspection.

Personas (§13) are fictional archetypes informed by publicly observable Bahamut user segments. 
Names are illustrative; they do not refer to real people.

Interpretive claims (e.g., "information density is a feature", "brand continuity across decades") 
are editorial readings connecting Bahamut's observed design to its community heritage, not 
directly sourced Bahamut statements.
-->
