---
id: icook
name: iCook
country: TW
category: consumer-tech
homepage: "https://icook.tw"
primary_color: "#f04646"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=icook.tw&sz=128"
verified: "2026-06-22"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-22"
  note: "primary = iCook coral-red CTA (#f04646, live rgb(240,70,70)); accent-warm = softer coral (#f06354, rgb(240,99,84)) for interactive ghost buttons/links; amber = seasonal/badge orange (#f0993c); canvas warm-white (#fbfaf8); ink-brown = body text (#564e4a) warm near-black"
  colors:
    primary: "#f04646"
    primary-light: "#ff6060"
    accent-warm: "#f06354"
    amber: "#f0993c"
    ink: "#564e4a"
    muted: "#89817d"
    muted-light: "#706860"
    faint: "#a39b97"
    canvas: "#ffffff"
    surface: "#fbfaf8"
    surface-warm: "#efeee8"
    surface-mid: "#f0f0f0"
    hairline: "#e0d9d5"
    on-primary: "#ffffff"
  typography:
    family: { display: "system-ui, -apple-system, PingFang TC, Microsoft JhengHei", body: "system-ui, -apple-system, PingFang TC, Microsoft JhengHei" }
    hero: { size: 28, weight: 700, lineHeight: 1.4, use: "Page title (H1), e.g. 人氣食譜" }
    section: { size: 24, weight: 600, lineHeight: 1.4, use: "Section headers (H3) on homepage" }
    card-heading: { size: 20, weight: 700, lineHeight: 1.4, use: "Recipe card title (H2) in browse lists" }
    feature-title: { size: 18, weight: 600, lineHeight: 1.4, use: "Feature card title / event card heading" }
    nav: { size: 16, weight: 700, lineHeight: 1.0, use: "Primary category nav tabs" }
    body: { size: 14, weight: 400, lineHeight: 1.15, use: "Default reading text, nav links, metadata" }
    caption: { size: 12, weight: 400, lineHeight: 1.5, use: "Badge labels, small metadata" }
    button: { size: 14, weight: 500, lineHeight: 1.0, use: "Download CTA label" }
  spacing: { xs: 4, sm: 8, md: 16, base: 15, lg: 24, xl: 32, section: 48 }
  rounded: { none: 0, sm: 4, md: 8, lg: 16, full: 9999 }
  shadow:
    none: "none"
    card: "0 1px 4px rgba(0,0,0,0.08)"
  components:
    button-primary: { type: button, bg: "#f04646", fg: "#ffffff", radius: "4px", padding: "1px 6px", font: "14px / 500", height: "32px", use: "App download CTA in nav" }
    button-app-open: { type: button, bg: "#f04646", fg: "#ffffff", radius: "4px", padding: "8px 16px", font: "14px / 500", use: "Open in iCook App CTA on recipe page" }
    button-ghost: { type: button, fg: "#f06354", border: "1px solid #f06354", radius: "50%", padding: "8px", use: "Carousel prev/next circular icon button" }
    button-more: { type: button, fg: "#f06354", radius: "0px", padding: "1px 6px", font: "16px / 400", use: "Section more-link text button" }
    search-input: { type: input, bg: "#ffffff", fg: "#564e4a", border: "none", radius: "0px", padding: "0px 15px", height: "44px", font: "14px / 400", use: "Global search bar (recipe keyword input)" }
    recipe-card: { type: card, bg: "#f0f0f0", fg: "#564e4a", radius: "16px", shadow: "none", use: "Homepage story cards with photo" }
    event-card: { type: card, bg: "#ffffff", fg: "#564e4a", radius: "4px", shadow: "none", use: "Activity/event card with image" }
    category-chip: { type: badge, fg: "#f06354", border: "1px solid #f06354", radius: "4px", use: "Browse category category with image overlay" }
    badge-amber: { type: badge, bg: "#f0993c", fg: "#ffffff", radius: "4px", use: "Seasonal / special label badge" }
    nav-tab: { type: tab, fg: "#564e4a", font: "16px / 700", padding: "0px 16px", height: "40px", active: "border-bottom #f04646 2px + text #f04646", use: "Category tabs: 最新食譜 / 人氣食譜 / 低卡瘦身" }
  components_harvested: true
---

# Design System Inspiration of iCook

## 1. Visual Theme & Atmosphere

iCook (愛料理) is Taiwan's largest recipe and cooking community platform, built by Polydice Inc. since 2011. Its design language radiates the warmth and approachability of home cooking — warm neutrals, a coral-red brand accent, and generous food photography take center stage. The canvas defaults to a clean warm white (`#ffffff`) accented by gentle off-white surfaces (`#fbfaf8`) and light grey cards (`#f0f0f0`), all of which are deliberately understated so that rich food photography remains the hero of every page.

The dominant personality signal is a vivid coral-red (`#f04646`) — warm enough to evoke the heat of the kitchen rather than alarm-signal red. It appears on the "下載APP" (Download App) nav CTA and the "在 iCook App 開啟" recipe button, keeping the brand color functionally purposeful. A softer coral-warm tone (`#f06354`) handles interactive secondary actions: section "更多" links and ghost-style circular carousel navigation buttons. A muted amber orange (`#f0993c`) surfaces on seasonal or special-event badges, extending the warm-food palette without becoming a competing primary.

Typography leans entirely on the system font stack — `system-ui`, `-apple-system`, `PingFang TC`, `Microsoft JhengHei` — ensuring maximum CJK legibility across macOS, iOS, and Windows. There is no custom display typeface; instead, weight and size do all the hierarchy work: category nav tabs run at 16px/700, recipe card titles at 20px/700, section headers at 24px/600, and body copy at 14px/400. The approach is deliberately utilitarian — the cooking content, not the interface chrome, earns the user's attention.

**Key Characteristics:**
- Warm coral-red (`#f04646`) as the single CTA/brand accent — evokes kitchen warmth, not urgency
- Secondary interactive coral (`#f06354`) for ghost buttons and text-links
- System CJK font stack (PingFang TC / Microsoft JhengHei) — no custom typeface, maximum legibility
- Pure warm-white canvas (`#ffffff`) with soft surface layers (`#fbfaf8`, `#f0f0f0`) for card separation
- Warm ink-brown (`#564e4a`) instead of black for body text — cozy, food-forward
- Zero drop-shadows — flat depth via background shifts and subtle border radius
- Recipe cards use generous 16px radius for a modern, friendly container feel
- Amber accent (`#f0993c`) for seasonal/event badges — keeps warm-food palette cohesive

## 2. Color Palette & Roles

### Primary Brand
- **iCook Coral-Red** (`#f04646`): Primary brand color. The "下載APP" header button and "在 iCook App 開啟" recipe CTA button — the system's single decisive action color. Warm, approachable, kitchen-evoking.
- **Coral Light** (`#ff6060`): A brighter variant appearing on hover/active or banner overlays; softer adaptation of primary.

### Interactive Accent
- **Warm Coral** (`#f06354`): Secondary interactive color for ghost circular buttons and section "更多" text links. Close enough to primary to feel cohesive, distinct enough to signal "secondary."
- **Amber Orange** (`#f0993c`): Seasonal event label and special-category badge; the warm-food orange that extends the palette without competing with coral-red.

### Neutral & Surface
- **Canvas White** (`#ffffff`): Page background, card interiors, search bar, header.
- **Warm Surface** (`#fbfaf8`): Alternate warm-white section backgrounds; subtle differentiation from canvas.
- **Surface Warm** (`#efeee8`): Deeper warm surface, used for alternating content zones.
- **Surface Mid** (`#f0f0f0`): Homepage story card backgrounds — light neutral grey for recipe photo containers.
- **Hairline** (`#e0d9d5`): Dividers, fine borders — warm-tinted to avoid cold grey.

### Text Hierarchy
- **Ink Brown** (`#564e4a`): Primary text and heading color — a warm dark brown used instead of pure black.
- **Muted Brown** (`#89817d`): Secondary copy, metadata, captions, placeholders.
- **Muted Light** (`#706860`): Tertiary labels.
- **Faint** (`#a39b97`): Disabled states, least-emphasis copy.

## 3. Typography Rules

### Font Family
iCook uses a pure system font stack — no custom or hosted typeface. On macOS/iOS: `PingFang TC`. On Windows: `Microsoft JhengHei`. Fallbacks: `system-ui`, `-apple-system`, emoji sets, `sans-serif`. This ensures zero font-loading latency for Chinese readers on every platform.

### Hierarchy

| Role | Size | Weight | Line Height | Notes |
|------|------|--------|-------------|-------|
| Page H1 | 28px | 700 | 1.4 | "人氣食譜" listing title |
| Section H3 | 24px | 600 | 1.4 | Homepage section headers ("精彩活動", "當季食材") |
| Recipe Card H2 | 20px | 700 | 1.4 | Recipe title in browse list |
| Feature Title H4 | 18px | 600 | 1.4 | Event/feature card title |
| Category Nav | 16px | 700 | 1.0 | Tab labels ("最新食譜", "人氣食譜") |
| Body Default | 14px | 400 | 1.15 | Nav links, metadata, card copy |
| Button CTA | 14px | 500 | 1.0 | Download/open button label |
| Caption | 12px | 400 | 1.5 | Badge labels, small metadata |

### Principles
- **System-first**: No Google Fonts or custom web fonts — the full hierarchy is expressed through size and weight alone.
- **Weight as voice**: Headlines use 600–700 to convey warmth and directness; body stays at 400 for comfortable readability of Chinese text.
- **Ink brown over black**: Body color is `#564e4a` — a warm dark brown that softens the interface and matches the food-forward personality.

## 4. Component Stylings

### Buttons

**Primary Download CTA**
- Background: `#f04646`
- Text: `#ffffff`
- Radius: 4px
- Padding: 1px 6px
- Font: 14px weight 500
- Height: 32px
- Use: "下載APP" in the global navigation header

**App Open CTA**
- Background: `#f04646`
- Text: `#ffffff`
- Radius: 4px
- Padding: 8px 16px
- Font: 14px weight 500
- Use: "在 iCook App 開啟" recipe page persistent CTA

**More-link Text Button**
- Text: `#f06354`
- Font: 16px weight 400
- Padding: 1px 6px
- Use: Section "更多" text-link buttons for browsing more recipes/events

**Ghost Circle Icon Button**
- Text: `#f06354`
- Border: 1px solid `#f06354`
- Radius: 50%
- Padding: 8px
- Height: 32px
- Use: Carousel/slider prev-next navigation buttons

### Inputs & Forms

**Global Search Bar**
- Background: `#ffffff`
- Text: `#564e4a`
- Padding: 0px 15px
- Height: 44px
- Font: 14px weight 400
- Placeholder: `#89817d`
- Radius: 0px
- Use: Recipe keyword and ingredient search field in nav

### Cards & Containers

**Homepage Story Card**
- Background: `#f0f0f0`
- Radius: 16px
- Shadow: none
- Use: Featured recipe cards on homepage with food photography

**Event / Activity Card**
- Background: `#ffffff`
- Text: `#564e4a`
- Radius: 4px
- Shadow: none
- Use: Activity/event cards in featured sections

### Badges & Tags

**Seasonal/Special Badge**
- Background: `#f0993c`
- Text: `#ffffff`
- Radius: 4px
- Use: Seasonal ingredient highlight or special event label

**Category Chip**
- Text: `#f06354`
- Border: 1px solid `#f06354`
- Radius: 4px
- Use: Browse category with image overlay (e.g. "醬料運用", "排骨湯")

### Tabs

**Category Navigation Tabs**
- Text (inactive): `#564e4a`
- Font: 16px / 700
- Padding: 0px 16px
- Height: 40px
- Active: text `#f04646` + 2px bottom border `#f04646`
- Use: Main recipe browse tabs ("最新食譜", "人氣食譜", "低卡瘦身", "簡單快速", "飲料冰品")

---

**Verified:** 2026-06-22
**Tier 1 sources:** https://icook.tw, https://icook.tw/recipes/popular
**Tier 2 sources:** getdesign.md/icook — 0 results (not listed); styles.refero.design/?q=icook — no matching entries
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Scale: 4px, 8px, 15px, 16px, 24px, 32px, 48px
- Search bar uses 15px horizontal padding (measured live)

### Grid & Container
- Full-width header with centered search bar
- Homepage features large story card blocks at 16px radius in a grid layout
- Recipe browse uses a 2-column list with thumbnail + metadata on desktop
- Category nav tabs run horizontally below the search bar at 40px height

### Whitespace Philosophy
- **Food photography first**: whitespace and neutral surfaces are intentionally minimal so food imagery fills attention
- **Flat but warm**: surfaces differentiate via warm tints (`#fbfaf8`, `#f0f0f0`) rather than shadows
- **Generous card radius**: 16px on story cards gives a soft, modern container feel

### Border Radius Scale
- None (0px): search input, certain nav elements
- Small (4px): buttons, badges, event cards — workhorse interactive radius
- Medium (8px): inline containers, info boxes
- Large (16px): story cards, photo containers
- Full (50% / 9999px): circular icon ghost buttons

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (0) | No shadow | Default — page, cards, inputs |
| Tint (1) | `#f0f0f0` or `#fbfaf8` background shift | Card container differentiation |
| Hairline (2) | `1px solid #e0d9d5` (warm) | Dividers, subtle borders |

iCook is a shadow-free design system. All depth is communicated through background tint changes and thin warm hairlines — consistent with a fast, image-first consumer app.

## 7. Do's and Don'ts

### Do
- Use coral-red (`#f04646`) exclusively for primary CTAs (app download, recipe-open)
- Use warm coral (`#f06354`) for secondary interactive elements and text links
- Keep body text in ink-brown (`#564e4a`) — never pure black, never cold grey
- Rely on the system font stack — no custom fonts needed for CJK legibility
- Use warm background tints (`#fbfaf8`, `#f0f0f0`) to separate sections without shadows
- Apply 16px radius on recipe photo containers for a friendly, food-forward feel
- Show amber orange (`#f0993c`) only for seasonal or special occasion badges

### Don't
- Spread coral-red across non-CTA elements — it must remain the clear action signal
- Use cold greys or blues for neutral surfaces — the palette stays warm throughout
- Add drop shadows — this is a flat system; depth comes from tint and hairlines
- Use a custom web font — PingFang TC/Microsoft JhengHei are the authoritative CJK stack
- Apply square corners to photo cards — the 16px radius is core to the friendly identity
- Use pure black (`#000000`) for body text — always use ink-brown `#564e4a`
- Introduce a second saturated color — amber and coral are the only accents

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | Single column cards, category tabs scroll horizontally, nav collapses |
| Tablet | 768–1024px | 2-column recipe grid, search prominent |
| Desktop | 1024px+ | Full horizontal nav, multi-column story cards, sidebar metadata |

### Touch Targets
- Search bar: 44px height — comfortably tappable
- Primary CTA button: 32px height, padded for thumb reach
- Category nav tabs: 40px height with 16px horizontal padding
- Ghost icon buttons: 32px (8px padding all sides on icon)

### Collapsing Strategy
- Category nav tabs: horizontal scroll on mobile; no wrapping
- Story cards: grid collapses to single column
- Header: burger menu or icon-only nav on small breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: iCook Coral-Red (`#f04646`)
- Secondary action / links: Warm Coral (`#f06354`)
- Seasonal badge: Amber Orange (`#f0993c`)
- Canvas: White (`#ffffff`)
- Surface tint: Warm White (`#fbfaf8`), Mid Grey (`#f0f0f0`)
- Heading / body: Ink Brown (`#564e4a`)
- Muted text: Muted Brown (`#89817d`)
- Hairlines: Warm Hairline (`#e0d9d5`)

### Example Prompts
- "Create a recipe card: `#f0f0f0` background, 16px radius, no shadow. Recipe title 20px PingFang TC weight 700 `#564e4a`. Metadata 14px weight 400 `#89817d`."
- "Design a category nav tab row: background `#ffffff`, 40px height, 16px horizontal padding, 16px/700 PingFang TC, text `#564e4a`. Active tab: text `#f04646`, 2px bottom border `#f04646`."
- "Build a download CTA button: `#f04646` background, white text, 4px radius, 1px 6px padding, 14px/500. Place right-aligned in a white 56px header."
- "Create a section layout: white background, 24px/600 heading `#564e4a`, followed by a 2-column recipe card grid with `#f0f0f0` card backgrounds at 16px radius."

### Iteration Guide
1. Coral-red (`#f04646`) is the action color — keep it exclusive to CTAs
2. Warm coral (`#f06354`) handles secondary interactions, never competing with primary
3. Ink brown (`#564e4a`) is the text color — warmer than black, cozier than dark grey
4. System font stack for everything — weight (400/600/700) does the hierarchy work
5. No shadows — warm background tints and hairlines create the structure
6. 16px radius on photo containers; 4px on interactive buttons and badges

---

## 10. Voice & Tone

iCook's voice is **warm, inclusive, and encouraging** — the tone of a knowledgeable friend who loves food and wants everyone to cook with confidence. The homepage title "開啟美好生活，愛料理" ("Begin a beautiful life with iCook") frames cooking not as a chore but as a lifestyle practice. Content tone is conversational and inviting — category labels like "都丟給電鍋" ("Just throw it all in the rice cooker") use casual, humorous Chinese that lowers the barrier for beginners.

| Context | Tone |
|---|---|
| Tagline / hero | Warm aspiration. "開啟美好生活，愛料理" — lifestyle invitation, not a feature list. |
| Category labels | Casual, descriptive. "低卡瘦身", "簡單快速", "飲料冰品" — plain food language. |
| Humorous entries | Light-hearted. "都丟給電鍋" — approachable, self-deprecating kitchen humor. |
| CTAs | Direct, friendly. "下載APP", "在 iCook App 開啟", "更多" — short and actionable. |
| Recipe titles | Descriptive and appetizing. "鑄鐵鍋燜油飯-一鍋到底" — craft cues, ingredient cues. |

**Voice samples (verbatim from live surface):**
- "開啟美好生活，愛料理" — site tagline/logo caption. *(verified live 2026-06-22)*
- "都丟給電鍋" — category tab label (casual humor). *(verified live 2026-06-22)*
- "300,000 道食譜，每天都有新食譜！" — page title meta (scale + freshness promise). *(verified live 2026-06-22)*

**Forbidden register**: cold technical language, urgent/fear-based CTAs, overly formal Chinese (書面語).

## 11. Brand Narrative

iCook (愛料理) — literally "love cooking" — was founded in **2011** by **Polydice Inc.** in Taipei, Taiwan, as a recipe-sharing community built around the belief that cooking is an act of love and self-expression accessible to anyone. The name "愛料理" (ài liào lǐ) pairs "love" (愛) with "cooking" (料理) to signal that the platform's mission is emotional, not merely functional.

Over fifteen years, iCook grew into Taiwan's leading food platform: **300,000+ recipes** shared by home cooks, food professionals, and passionate community members ("每天都有新食譜" — new recipes every day). The ecosystem expanded from recipes into a lifestyle magazine (生活誌), a food marketplace (市集), cooking video content (愛料理 TV), and the iGood product recommendation service. Together they reflect a vision of cooking as a complete lifestyle practice.

The brand holds a deliberately non-intimidating visual identity: warm colors, system fonts, flat design — all signaling that cooking is for everyone, not just for experts. Polydice's choice to build the platform as a community (anyone can post a recipe) rather than a curated editorial voice is reflected in the design's openness and warmth.

## 12. Principles

1. **Cooking is for everyone.** iCook removes barriers rather than gatekeeping expertise. *UI implication:* category labels use casual language; beginner-friendly categories like "簡單快速" (Quick & Simple) have equal visual weight as advanced ones.
2. **Food photography leads.** The interface exists to surface beautiful food, not to showcase UI sophistication. *UI implication:* flat, warm neutrals keep the visual focus on food imagery; no shadows compete with photography.
3. **Warmth over precision.** The brand accent is coral-red (warm) rather than a pure red or orange precisely because warmth is the priority signal. *UI implication:* every color decision skews warm — ink brown over black, warm hairlines over cold grey.
4. **Community-built authenticity.** Recipes come from real home cooks, not chefs with credentials. *UI implication:* no gatekeeping visual hierarchy — all recipes presented equivalently; community contributors are the content heroes.
5. **Everyday life, not special occasions.** "300,000 道食譜，每天都有新食譜！" — the promise is daily, not seasonal. *UI implication:* the navigation surfaces everyday categories (簡單快速, 低卡瘦身) as prominently as seasonal features.

## 13. Personas

*Personas below are fictional archetypes informed by iCook's publicly observable user segments (Taiwanese home cooks, food enthusiasts, health-conscious eaters), not individual people.*

**陳小雯, 28, 台北.** A young professional cooking for herself after moving out. Doesn't identify as a "real cook" but wants to eat well. Gravitates to "簡單快速" and "都丟給電鍋" categories. Uses the app to plan weekday dinners while commuting.

**林媽媽, 45, 台中.** A home cook who has been on iCook since 2014. Shares her own recipes, collects others' rice cooker favorites, and browses seasonal ingredient features. The community aspect — seeing comments and bookmarks — is central to her experience.

**黃阿志, 35, 高雄.** Health-conscious professional who filters by "低卡瘦身" (low-calorie/slimming). Values the specific calorie/nutrition labeling on recipes and uses the iGood marketplace for kitchen tools. Trusts iCook as a credible source for health-oriented cooking.

**王同學, 21, 台南.** A university student making their first attempts at cooking. Drawn by humorous category labels and short-form video content on 愛料理 TV. App is the primary surface; mobile UX is the core experience.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no search results)** | Warm white canvas. Ink-brown (`#564e4a`) single line explaining no matches. Warm coral (`#f06354`) suggestion to try different keywords. |
| **Empty (no saved recipes)** | Muted brown (`#89817d`) single line encouraging the user to browse. Path back to homepage or popular recipes. |
| **Loading (recipe list)** | Skeleton blocks on `#f0f0f0` surface at card dimensions (16px radius), warm-tinted. No elevation. |
| **Loading (search results)** | Spinner or skeleton rows inline with the search surface. |
| **Error (search failed)** | Inline warm-toned message in ink-brown; retryable. Plain language explanation, no jargon. |
| **Error (recipe load failed)** | Card-level inline error in warm tone; link to try again or browse similar. |
| **Success (recipe bookmarked)** | Brief toast confirmation in warm coral (`#f06354`) — "已加入收藏". No celebration animation, functional confirm. |
| **Skeleton** | `#f0f0f0` blocks at final card dimensions, 16px radius, flat pulse (no shadow shimmer). |
| **Disabled** | Muted brown (`#89817d`) with reduced opacity. CTAs fade rather than switching to cold grey. |
| **VIP gated** | Coral-red (`#f04646`) "升級 VIP" label to indicate premium content with an action link. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 100ms | Hover state change on buttons/links |
| `motion-standard` | 200ms | Card reveal, tab switch, carousel slide |
| `motion-slow` | 300ms | Section/page transition, modal open |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving content (cards, sheets) |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Bidirectional transitions |

**Motion rules**: Motion is quiet and functional — this is a content-heavy food platform where the UI should get out of the way. Carousel slides transition at `motion-standard / ease-enter`; tab switches are nearly instant (`motion-fast`). No bounce or spring effects — food browsing should feel calm and comfortable. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the experience remains fully functional without any animation.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-22) via playwright getComputedStyle on https://icook.tw/ and https://icook.tw/recipes/popular:
- body: font-family system-ui, PingFang TC; color rgb(86,78,74) = #564e4a; font-size 14px; line-height 16.1px
- H1 "人氣食譜": color rgb(86,78,74); font-size 28px; font-weight 700
- H3 "精彩活動": color rgb(86,78,74); font-size 24px; font-weight 600
- H2 recipe titles (e.g. "鑄鐵鍋燜油飯"): color rgb(86,78,74); font-size 20px; font-weight 700
- BUTTON "下載APP": bg rgb(240,70,70) = #f04646; color rgb(255,255,255); radius 4px; padding 1px 6px; height 32px; font-size 14px; font-weight 500
- BUTTON "在 iCook App 開啟": bg rgb(240,70,70) = #f04646; color rgb(255,255,255); radius 4px; padding 8px 16px
- BUTTON ghost circles (carousel): border 1px solid rgb(240,99,84) = #f06354; radius 50%; color rgb(240,99,84); padding 8px; height 32px
- BUTTON "更多": color rgb(240,99,84) = #f06354; radius 0px; padding 1px 6px; font-size 16px
- A "升級 VIP": color rgb(240,70,70); font-size 14px
- INPUT search: bg rgb(255,255,255); color rgb(86,78,74); padding 0px 15px; height 44px; font-size 14px; radius 0px
- story card (homepageStoryCard): bg rgb(240,240,240) = #f0f0f0; radius 16px; shadow none
- top bg frequencies: rgb(240,240,240)×48, rgb(255,255,255)×42, rgb(240,70,70)×4, rgb(251,250,248)×2, rgb(255,96,96)×1, rgb(240,153,60)×1
- top text frequencies: rgb(86,78,74)×545, rgb(255,255,255)×134, rgb(0,0,0)×126, rgb(137,129,125)×42, rgb(240,99,84)×24, rgb(240,70,70)×6
- page title: "愛料理 - 300,000 道食譜，每天都有新食譜！"
- tagline text in logo link: "開啟美好生活，愛料理"
- category tabs: "最新食譜","人氣食譜","低卡瘦身","簡單快速","飲料冰品","都丟給電鍋","氣炸鍋" — font-size 16px; font-weight 700; padding 0px 16px; height 40px
- footer copyright: © 2011-2026 Polydice, Inc.

Brand narrative: iCook (愛料理) founded 2011 by Polydice Inc. The copyright footer and Android package name (com.polydice.icook) confirm the Polydice ownership. The 300,000 recipe count is taken directly from the live page title.

Voice samples (§10) are verbatim from the live homepage.

Personas (§13) are fictional archetypes informed by publicly observable iCook user segments. Names are illustrative; they do not refer to real people.
-->
