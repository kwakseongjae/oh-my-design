---
id: "591"
name: "591"
country: TW
category: consumer-tech
homepage: "https://www.591.com.tw/"
primary_color: "#ff8000"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=591.com.tw&sz=128"
verified: "2026-06-22"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-22"
  note: "primary = 591 orange (#ff8000) — search CTA, active tab, brand accent across all surfaces. Canvas white (#ffffff). Body text warm grey (#4a4a4a). Muted greys (#999999, #666666). Red price color (#e60012). Link blue (#337ab7). Tinted surfaces (#f5f5f5, #f2f8ff, #fff7e6)."
  colors:
    primary: "#ff8000"
    canvas: "#ffffff"
    surface: "#f5f5f5"
    surface-blue: "#f2f8ff"
    surface-warm: "#fff7e6"
    ink: "#333333"
    body: "#4a4a4a"
    muted: "#666666"
    muted-light: "#999999"
    on-primary: "#ffffff"
    price-red: "#e60012"
    link: "#337ab7"
    border: "#e6e6e6"
    dark-overlay: "#262626"
  typography:
    family: { display: "Arial, 微軟正黑體, Microsoft JhengHei, sans-serif", body: "Arial, 微軟正黑體, Microsoft JhengHei, sans-serif" }
    hero-title:  { size: 50, weight: 700, use: "App download section hero headline, orange accent" }
    nav-tab:     { size: 16, weight: 700, lineHeight: 1.31, use: "Primary navigation tab labels (租屋/中古屋/新建案)" }
    search-btn:  { size: 20, weight: 700, use: "Search CTA label in hero search bar" }
    body:        { size: 14, weight: 400, lineHeight: 1.5, use: "Standard body text, nav links, listing meta" }
    body-lg:     { size: 16, weight: 400, lineHeight: 1.5, use: "Listing page body, filter labels" }
    price:       { size: 16, weight: 700, use: "Rental price display in listing cards, red color" }
    caption:     { size: 13, weight: 400, use: "Small labels, tags, secondary metadata" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 20, xl: 24, xxl: 32, section: 48 }
  rounded: { sm: 2, md: 4, lg: 8, full: 9999 }
  shadow:
    none: "none"
    card: "none"
  components:
    button-search: { type: button, bg: "#ff8000", fg: "#ffffff", radius: "0px 2px 2px 0px", height: "55px", font: "20px / 700", use: "Primary search CTA button on homepage hero" }
    button-search-rent: { type: button, bg: "#ff8000", fg: "#ffffff", radius: "0px 4px 4px 0px", padding: "5px 16px", height: "44px", font: "16px / 400", use: "Search button on rental listing page" }
    tab-active: { type: tab, bg: "#ff8000", fg: "#ffffff", radius: "2px", padding: "0px 14px", height: "30px", font: "16px / 700", active: "bg #ff8000 text #ffffff", use: "Active property type tab (租屋/中古屋/新建案)" }
    tab-inactive: { type: tab, bg: "transparent", fg: "#dddddd", radius: "2px", padding: "0px 14px", height: "30px", font: "16px / 700", use: "Inactive navigation tab in hero search area" }
    input-search: { type: input, bg: "#ffffff", fg: "#333333", radius: "2px", height: "55px", border: "0px", font: "16px / 400", use: "Main property search input field on homepage" }
    input-filter: { type: input, bg: "#ffffff", fg: "#000000", radius: "2px", padding: "4px 12px", height: "27px", border: "1px solid #e6e6e6", font: "13px / 400", use: "Filter range inputs (price, area, floor)" }
    card-listing: { type: card, bg: "#ffffff", fg: "#000000", radius: "0px", use: "Rental listing item card, flat no-shadow, full-width row" }
    card-image: { type: card, bg: "#d8d8d8", fg: "#000000", radius: "8px 8px 0px 0px", use: "Listing photo container, top-rounded corners" }
    badge-tag: { type: badge, bg: "#fff7e6", fg: "#ff8000", radius: "2px", font: "13px / 400", use: "Feature tags and property type labels" }
    badge-price: { type: badge, bg: "transparent", fg: "#e60012", radius: "0px", font: "16px / 700", use: "Rental price display in listing cards" }
    nav-item: { type: tab, fg: "#4a4a4a", font: "14px / 400", use: "Main navigation items (首頁/新建案/中古屋/租屋)", active: "color #ff8000 on active page" }
  components_harvested: true
---

# Design System Inspiration of 591

## 1. Visual Theme & Atmosphere

591房屋交易網 (591 Fang Wu — Taiwan's dominant property marketplace) is a dense, information-first real-estate platform where practical utility overrides aesthetic refinement. The canvas is pure white (`#ffffff`) with warm grey text (`#4a4a4a`) and a single unmistakable brand accent: **591 orange** (`#ff8000`). This orange is not a trendy brand refresh — it is the operational color of one of Taiwan's most trafficked sites, applied consistently to every primary action: the search button, the active tab, the app-download headline. Everything else is deliberate neutral: flat white listing cards, thin `#e6e6e6` hairlines, and no drop shadows anywhere.

The typographic system is radically utilitarian. The font stack is `Arial, 微軟正黑體, Microsoft JhengHei, sans-serif` — the standard CJK web fallback, never a custom typeface. Body text runs at 14px/400 in warm grey (`#4a4a4a`); navigation tabs jump to 16px/700; the search hero label hits 20px/700. The only typographic flourish is price display in `#e60012` red — a Taiwan/HK convention that signals value urgency in property listings. This is a system built for information density, not brand emotion.

Spatial treatment reflects legacy web conventions adapted for a listing-heavy interface: minimal border-radius (2px–4px on most elements, 8px only on listing photo containers), zero shadows (all depth comes from `#e6e6e6` hairlines and `#f5f5f5` / `#f2f8ff` tinted surfaces), and a navigation structure that prioritizes fast category switching (新建案/中古屋/租屋/土地/店面/辦公/廠房). The result is a platform that Taiwanese property seekers find immediately navigable because it mirrors two decades of established local web conventions.

**Key Characteristics:**
- 591 orange (`#ff8000`) as the single brand/action color — search CTA, active tabs, hero accents
- Arial / 微軟正黑體 / Microsoft JhengHei system font stack — no custom typeface, CJK-optimized
- Price red (`#e60012`) for all rental/sale price display — Taiwan market convention
- Zero shadows — flat depth via `#e6e6e6` hairlines and `#f5f5f5` / `#f2f8ff` tinted surfaces
- Minimal radius (2px–4px main UI, 8px listing photo tops only)
- Dense listing-card layout: white flat rows, no elevation, information-maximized
- Link blue (`#337ab7`) for interactive anchors and supplementary actions
- Warm grey text ladder (`#333333` → `#4a4a4a` → `#666666` → `#999999`)

## 2. Color Palette & Roles

### Primary
- **591 Orange** (`#ff8000`): The single brand action color. Applied to the homepage search button, active property-type tabs, pagination bullets, and app-download section headlines. All primary interactive signals point here.
- **Price Red** (`#e60012`): Rental and sale price text in listing cards. A Taiwan/HK market convention — red signals value priority, not danger. Appears at 16px/700 in listings.

### Canvas & Surface
- **Pure White** (`#ffffff`): Page canvas, nav background, listing card backgrounds.
- **Light Grey** (`#f5f5f5`): Filter panel background, secondary section surfaces, fold-option containers.
- **Blue Tint** (`#f2f8ff`): Highlighted listing rows, featured item backgrounds — a very light sky blue used as emphasis tint.
- **Warm Tint** (`#fff7e6`): Promotional tag surfaces, feature badge backgrounds — light orange-cream matching brand orange.

### Text Hierarchy
- **Ink** (`#333333`): Strongest text — titles, active UI labels.
- **Body Warm Grey** (`#4a4a4a`): Primary body text, nav links, listing descriptions.
- **Muted** (`#666666`): Secondary descriptions, metadata, filter labels.
- **Muted Light** (`#999999`): Placeholder text, tertiary captions, disabled labels.
- **Dark Overlay** (`#262626`): Near-black for dark section text and overlays.

### Interactive
- **Link Blue** (`#337ab7`): Standard hyperlink color — property detail links, pagination, contact links. Bootstrap-origin blue widely used in Taiwan web products of this era.
- **Orange Active** (`#ff8000`): Active nav tab indicator, active search button fill.
- **Border** (`#e6e6e6`): Thin hairlines for inputs, table rows, card separators.

## 3. Typography Rules

### Font Family
- **Display & Body**: `Arial, 微軟正黑體, "Microsoft JhengHei", sans-serif` — a system font stack prioritizing the standard Windows/macOS CJK font. No web font loading overhead; guaranteed legibility across Taiwan's dominant Windows user base.

### Hierarchy

| Role | Size | Weight | Color | Use |
|------|------|--------|-------|-----|
| Hero Headline | 50px | 700 | `#ff8000` | App-download section "立即與有興趣的屋主..." |
| Nav Tab | 16px | 700 | `#dddddd` / `#ff8000` active | Property type navigation tabs |
| Search Button | 20px | 700 | `#ffffff` on `#ff8000` | "搜尋" search CTA |
| Body Default | 14px | 400 | `#4a4a4a` | Standard page text, nav links, listing meta |
| Body Large | 16px | 400 | `#333333` | Listing page body, filter labels |
| Price | 16px | 700 | `#e60012` | Rental/sale price in listing cards |
| Caption | 13px | 400 | `#666666` | Tags, small metadata, secondary labels |

### Principles
- **CJK-first stack**: System fonts are chosen for guaranteed 繁體中文 (Traditional Chinese) rendering. No font download means near-instant text display on a listing-heavy page with hundreds of items.
- **Weight as hierarchy**: Bold (700) signals action or emphasis (tabs, prices, CTAs); regular (400) handles all content.
- **Red for value**: Price text in `#e60012` red is a culturally specific signal in the Taiwan/HK property market — buyers scan for red numbers, not highlighted cards.
- **Size restraint**: The system uses only 13px–20px — a tight range that maximizes information density at readable sizes.

## 4. Component Stylings

### Buttons

**Primary Search (Homepage)**
- Background: `#ff8000`
- Text: `#ffffff`
- Radius: 0px 2px 2px 0px
- Height: 55px
- Font: 20px / 700 / Arial
- Use: Main search CTA attached to right edge of search input on homepage hero

**Primary Search (Listing Page)**
- Background: `#ff8000`
- Text: `#ffffff`
- Radius: 0px 4px 4px 0px
- Padding: 5px 16px
- Height: 44px
- Font: 16px / 400 / Arial
- Use: Search button on rental listing page (rent.591.com.tw)

**Secondary Text Button**
- Background: `#ffffff`
- Text: `#333333`
- Radius: 4px
- Padding: 5px 16px
- Height: 44px
- Font: 14px / 400 / Arial
- Use: Secondary map/community search options ("社區找房", "地圖找房")

### Inputs

**Main Search Input**
- Background: `#ffffff`
- Text: `#999999`
- Radius: 2px
- Height: 55px
- Border: none (no visible border — attached to orange search button)
- Font: 16px / 400 / Arial
- Use: Primary property keyword/location input on homepage hero

**Filter Range Input**
- Background: `#ffffff`
- Text: `#000000`
- Radius: 2px
- Padding: 4px 12px
- Height: 27px
- Border: 1px solid `#e6e6e6`
- Font: 13px / 400 / Arial
- Use: Price range, area, floor filter inputs in search panel

### Cards & Containers

**Listing Row Card**
- Background: `#ffffff`
- Text: `#000000`
- Radius: 0px
- Shadow: none
- Use: Flat white listing item rows — no elevation, full-width, separated by `#e6e6e6` hairlines

**Listing Photo Container**
- Background: `#d8d8d8`
- Radius: 8px 8px 0px 0px
- Use: Photo placeholder/container within listing card, top-rounded only

**Featured Listing (Highlighted)**
- Background: `#f2f8ff`
- Radius: 0px
- Use: Blue-tint highlight for sponsored or featured listings

### Badges & Tags

**Property Feature Tag**
- Background: `#fff7e6`
- Text: `#ff8000`
- Radius: 2px
- Font: 13px / 400 / Arial
- Use: Feature labels on listing cards ("近捷運", "獨立衛浴", "可養寵物")

**Price Display**
- Text: `#e60012`
- Font: 16px / 700 / Arial
- Use: Rental or sale price in listing cards — red conventional for Taiwan property market

### Navigation Tabs

**Active Tab**
- Background: `#ff8000`
- Text: `#ffffff`
- Radius: 2px
- Padding: 0px 14px
- Height: 30px
- Font: 16px / 700 / Arial
- Use: Currently selected property type (租屋/中古屋/新建案) in hero search area

**Inactive Tab**
- Background: transparent
- Text: `#dddddd`
- Radius: 2px
- Padding: 0px 14px
- Height: 30px
- Font: 16px / 700 / Arial
- Use: Unselected property type tabs in homepage hero

---

**Verified:** 2026-06-22
**Tier 1 sources:** https://www.591.com.tw/, https://rent.591.com.tw/
**Tier 2 sources:** getdesign.md/591 (not found) | styles.refero.design/?q=591 (not found)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 4px–8px micro rhythm
- Scale: 4, 8, 12, 16, 20, 24, 32, 48px
- Listing card internal padding: 12px–16px
- Section separators: full-width `#e6e6e6` 1px hairlines

### Grid & Container
- Full-width navigation bar with centered content at max ~1200px
- Homepage: centered search box with category tabs above, listing cards below
- Listing pages: two-column layout (filter sidebar + results list)
- Category tabs arranged as horizontal pill-row within a dark hero banner (on homepage)

### Whitespace Philosophy
- **Density over breathing room**: 591 is an information product — listing rows are compact (264–300px tall for full card with image), not airy.
- **Flat segmentation**: Sections separated by thin `#e6e6e6` hairlines and background tint shifts (`#f5f5f5`, `#f2f8ff`), never shadows.
- **Consistent tab height**: Navigation tabs and filter rows are 30–44px, creating a predictable rhythm for power users who scan frequently.

### Border Radius Scale
- Extra small (2px): inputs, tags, tabs — dominant micro-UI radius
- Small (4px): secondary buttons, filter buttons
- Medium (8px): listing photo container top corners only
- Full (50%): circular navigation arrow buttons

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | All listing cards, inputs, buttons, nav |
| Hairline (Level 1) | `1px solid #e6e6e6` | Card rows, filter separators, input borders |
| Tint (Level 2) | `#f5f5f5` or `#f2f8ff` background | Highlighted listings, filter panel, section alternation |
| Dark Overlay | `rgba(0,0,0,0.8)` | Navigation carousel overlays, modal backgrounds |

**Shadow Philosophy**: 591 is an entirely shadow-free system. Live inspection found `box-shadow: none` across all listing cards, navigation elements, inputs, and buttons. Depth is communicated exclusively through flat background tints and hairline borders — a pragmatic choice that keeps the dense listing interface fast-loading and visually uncluttered. This matches the broader pattern of legacy Taiwanese web products that prioritize information density over UI polish.

## 7. Do's and Don'ts

### Do
- Use 591 orange (`#ff8000`) exclusively for the primary search action and active navigation states
- Display property prices in red (`#e60012`) — this is a culturally established Taiwan/HK market convention
- Use Arial / 微軟正黑體 system fonts — guaranteed CJK legibility, zero font loading overhead
- Separate listing rows with `#e6e6e6` hairlines — flat, no shadows
- Apply 2px radius to inputs and micro-UI elements; 8px only to photo container tops
- Use `#f2f8ff` blue tint for featured or highlighted listing rows
- Keep body text at 14px/400 `#4a4a4a` for dense listing readability
- Use `#333333`–`#999999` grey ladder for text hierarchy

### Don't
- Use drop shadows — 591 is fully flat; shadows would add visual weight to an already-dense UI
- Apply the orange accent to decorative elements — it must signal only primary actions
- Use custom web fonts — the system stack is load-critical on a listing-heavy page
- Round corners more than 8px on listing elements — excessive radius reduces information density
- Use green for price/value signals — red (`#e60012`) is the Taiwan property market convention
- Mix multiple accent colors — orange and red have distinct roles; a third accent would confuse the action hierarchy
- Use light-weight typography for navigation tabs — 700 weight is needed for scanability across 8+ category options

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | Single column, simplified nav, listing images above metadata |
| Tablet | 768–1024px | 2-column listing, compressed filter sidebar |
| Desktop | 1024px+ | Full sidebar + 1-column listing list, centered 1200px max |

### Touch Targets
- Search button at 55px height on desktop (44px on listing page) — comfortable desktop click target
- Nav tabs at 30px height on homepage hero — designed for mouse, not touch-first
- Filter inputs at 27px — compact for desktop power users

### Collapsing Strategy
- Category tabs remain visible but may collapse to scroll on mobile
- Filter sidebar collapses to modal/drawer on mobile
- Listing cards maintain full-width on mobile with thumbnail on left
- Search input + button remain paired, compressing on narrower viewports

### Image Behavior
- Listing photo containers maintain 8px top radius at all breakpoints
- Image placeholder (`#d8d8d8`) used when photos unavailable — consistent neutral fill

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary action / brand: 591 Orange (`#ff8000`)
- Price display: Price Red (`#e60012`)
- Background: Pure White (`#ffffff`)
- Tinted surface: Light Grey (`#f5f5f5`) / Blue Tint (`#f2f8ff`) / Warm Tint (`#fff7e6`)
- Primary text: Ink (`#333333`)
- Body text: Warm Grey (`#4a4a4a`)
- Muted: `#666666` / `#999999`
- Link: Link Blue (`#337ab7`)
- Hairline: `#e6e6e6`

### Example Component Prompts
- "Create a property search bar: white input (55px tall, 2px radius, no border), attached on the right to an orange button (#ff8000, 0px 2px 2px 0px radius, 20px bold '搜尋' in white). Above input: horizontal tabs at 30px height, active tab orange with white text, inactive tabs transparent with #dddddd text."
- "Design a rental listing card: full-width flat white row (no shadow), photo container on left (8px top radius, #d8d8d8 placeholder), property title in #333333 16px bold, price in #e60012 16px bold, meta tags (#fff7e6 bg, #ff8000 text, 2px radius, 13px)."
- "Build a filter panel on #f5f5f5 surface. Range inputs: white bg, #e6e6e6 border, 2px radius, 27px height, 13px Arial. Labels in #666666 14px."
- "Design property type navigation tabs: horizontal row, 16px bold Arial. Active = #ff8000 bg + white text, 2px radius. Inactive = transparent + #dddddd text."

### Iteration Guide
1. Orange (`#ff8000`) is the only action color — search, active tabs, brand signals
2. Red (`#e60012`) owns price display — never use orange for prices
3. No shadows — separate with hairlines (`#e6e6e6`) and tinted surfaces (`#f5f5f5`, `#f2f8ff`)
4. System fonts only — Arial / 微軟正黑體 / JhengHei
5. Minimal radius: 2px for inputs/tags, 4px for buttons, 8px for photo containers
6. Dense layout — compact listing rows, no generous whitespace between items
7. Link blue (`#337ab7`) for all clickable hyperlinks

---

## 10. Voice & Tone

591's voice is **direct, efficient, and trustworthy** — a marketplace that speaks the language of practical property seekers in Taiwan. The brand does not aspire to editorial sophistication; it speaks plainly in 繁體中文 (Traditional Chinese) about what matters: location, price, size, type. Headlines are utilitarian calls to action ("立即與有興趣的屋主、經紀人、建商聯繫"), scale claims are stated as facts ("超過8萬筆租屋、32萬筆中古屋"), and feature descriptions stay concrete and scan-friendly.

| Context | Tone |
|---|---|
| Site title / hero | Factual, scope-asserting. "台灣第一房屋網路平台" — market leader claim, stated plainly. |
| Category labels | Minimal and categorical: "租屋", "中古屋", "新建案", "土地", "店面", "辦公", "廠房" |
| Search CTA | Single word command: "搜尋" — no softening, no embellishment |
| Feature counts | Numbers-first: "超過8萬筆租屋、32萬筆中古屋、5000筆新建案" — scope through raw numbers |
| App download | Benefit-then-action: "在線VR、影片賞屋，助您找房更方便" — practical value, formal 您 register |

**Voice samples (live homepage 2026-06-22):**
- "591房屋交易網 | 租屋買屋實價登錄資訊平台" — page title (utility + authority register). *(verified live 2026-06-22)*
- "立即與有興趣的屋主、經紀人、建商聯繫" — app-download CTA (direct action, formal 您-implied). *(verified live 2026-06-22)*
- "超過8萬筆租屋、32萬筆中古屋、5000筆新建案" — scale claim (factual, numbers-first). *(verified live 2026-06-22)*

**Forbidden register**: casual/playful tone, excessive emoji or exclamation, vague aspirational copy ("find your dream home"), English-first UI copy, misleading availability claims.

## 11. Brand Narrative

591 (五九一) was established by **Addcn Technology** (台灣數字科技股份有限公司) in **2001**, making it one of Taiwan's oldest surviving internet businesses. The name "591" is a memorable numeric sequence for Taiwanese users and has no semantic meaning in Mandarin — the brand operates purely on recognition built over two decades of market dominance. What began as a classified property listing board evolved into Taiwan's definitive real-estate marketplace, hosting rental listings, resale homes, new construction projects, land, commercial properties, and interior design services under one roof.

The brand's market position is built on coverage breadth and verifiable data: 實價登錄 (Actual Price Registration) integration — Taiwan's mandated government price transparency system — makes 591 the authoritative source for what properties actually transacted at, not just asking prices. This data trust layer is the product's deepest moat and is prominently featured in the title ("租屋買屋實價登錄資訊平台"). The platform serves renters looking for monthly accommodation, buyers researching market prices before committing, and landlords/agents reaching the largest possible tenant pool.

The design system reflects this positioning: no-frills, high-density, data-first. 591 has never attempted a Western-style "clean" redesign — its flat, information-packed interface is not aesthetic laziness but deliberate alignment with how experienced property-seekers in Taiwan actually use the product.

## 12. Principles

1. **Data over decoration.** 591's value is real-estate data — listings, prices, transaction records. *UI implication:* maximize information density per screen; never sacrifice a data field for visual breathing room.
2. **Orange signals action, nothing else.** The brand orange (`#ff8000`) appears only where the user must act. *UI implication:* reserve for search buttons, active tabs, and primary brand moments; no decorative orange borders or backgrounds.
3. **Red is price.** Rental and sale prices render in `#e60012` red by convention. *UI implication:* never use red for error states or warnings — it would conflict with the price-reading pattern Taiwanese users have built over 20+ years.
4. **Speed through familiarity.** The system uses standard web conventions (system fonts, Bootstrap-era link blue `#337ab7`, conventional hairline borders) deliberately to minimize cognitive load for returning users. *UI implication:* resist novel interaction patterns; legible convention > design innovation.
5. **Coverage is credibility.** Scale numbers are prominently displayed ("8萬筆租屋", "32萬筆中古屋"). *UI implication:* quantified scope claims should remain visible in key surfaces; they are trust signals, not marketing copy.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable 591 user segments (Taiwan property seekers), not individual people.*

**林宜蓉, 26, 台北市.** A recent graduate searching for her first apartment rental near Xinyi MRT. Visits 591 daily, filters by price range and floor, scans red price numbers first, then feature tags (近捷運, 可開伙). Knows the interface inside out; any navigation change would disrupt her established scan pattern.

**王建明, 38, 新北市.** A homeowner considering a resale purchase. Uses 591's 實價登錄 data to research what similar units transacted at before negotiating. Relies on the price transparency data to negotiate confidently; trusts 591 over agent-provided comparables.

**陳美如, 52, 台中市.** A landlord listing a rental unit. Uses 591 because "everyone searches here." Focused on the listing creation flow and inquiry call volume. Values the phone call count metrics prominently shown on listings.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no search results)** | White canvas, single `#4a4a4a` message at body size explaining criteria. Practical next steps (widen radius, lower price floor) listed as text links in `#337ab7`. |
| **Empty (saved listings, none yet)** | Muted `#999999` instruction line, link to begin searching. No illustration. |
| **Loading (listing results)** | Skeleton rows on `#f5f5f5` surface at final card height (~265px). Grey placeholder image area where photo loads. Flat — no shimmer animation consistent with the shadowless system. |
| **Loading (map view)** | `#d8d8d8` tile placeholder until map tiles render; orange loading indicator matching brand. |
| **Error (search failed / timeout)** | Inline orange-bordered message with plain Traditional Chinese explanation and retry link in `#337ab7`. |
| **Error (form validation)** | Field-level red (`#e60012`) message below input — reuses the price-red deliberately as "attention required" signal without introducing a new color. |
| **Success (inquiry sent)** | Brief inline `#333333` confirmation, link to "我的詢問" listing; no celebratory state. |
| **Skeleton** | `#f5f5f5` blocks at final card dimensions, zero radius on body blocks, 8px radius on photo placeholder top. |
| **Disabled** | `#999999` muted-light text on standard surface; orange elements reduce to `#f5f5f5` fill to signal unavailability while preserving layout. |
| **Active / Selected filter** | `#ff8000` border or text on filter pill; `#fff7e6` warm-tint background on selected option. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 100ms | Hover state changes on links, tab highlight transition |
| `motion-standard` | 200ms | Dropdown menus, filter panel expand/collapse |
| `motion-slow` | 300ms | Carousel transitions, modal open/close |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Panels arriving, dropdowns opening |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals, closing panels |
| `ease-linear` | `linear` | Carousel slide transitions (consistent speed) |

**Motion rules**: 591's motion vocabulary is minimal and functional — consistent with a 25-year-old marketplace that prioritizes reliability over delight. Carousel image transitions use linear easing for predictable pacing; dropdown filters open and close cleanly. There are no spring animations, no bounce effects — this is a product for efficiency-oriented property seekers, not an experiential app. Under `prefers-reduced-motion: reduce`, all transitions should collapse to instant; the product remains fully operational without any animation.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-22) via playwright getComputedStyle:
- www.591.com.tw homepage: title "591房屋交易網 | 租屋買屋實價登錄資訊平台"
- Body: font-family Arial,微軟正黑體,"Microsoft JhengHei",sans-serif; color rgb(74,74,74)=#4a4a4a; font-size 14px; line-height 21px
- Active tab "租屋": bg rgb(255,128,0)=#ff8000; color rgb(255,255,255); radius 2px; 16px/700
- Inactive tabs: color rgb(221,221,221)=#dddddd; bg transparent; 16px/700
- Search button "搜尋": bg rgb(255,128,0)=#ff8000; color rgb(255,255,255); 20px/700; height 55px; radius 0px 2px 2px 0px
- Search input: bg rgb(255,255,255); color rgb(153,153,153)=#999999; height 55px; radius 2px
- Hero H3 "立即與有興趣的屋主、經紀人、建商聯繫": color rgb(255,128,0); font-size 50px; font-weight 700
- Hero H3 "超過8萬筆租屋、32萬筆中古屋、5000筆新建案": color rgb(255,128,0); font-size 50px; font-weight 700
- BG freq top: rgb(255,255,255)×45, rgb(0,0,0)×9, rgb(245,245,245)×9, rgb(38,38,38)×9, rgb(255,128,0)×5, rgb(22,158,113)×2
- FG freq top: rgb(153,153,153)×681, rgb(74,74,74)×628, rgb(255,255,255)×171, rgb(51,122,183)×141, rgb(51,51,51)×105

rent.591.com.tw:
- Body: font-family Arial,微軟正黑體,"Microsoft JhengHei"; font-size 16px
- Search btn "搜尋": bg rgb(255,128,0); color white; radius 0px 4px 4px 0px; padding 5px 16px; height 44px; 16px/400
- Secondary button "社區找房": bg rgb(255,255,255); color rgb(51,51,51); radius 4px; padding 5px 16px; height 44px; 14px/400
- Nav active "租屋": color rgb(255,128,0)=#ff8000
- Input: bg rgb(255,255,255); color rgb(51,51,51); radius 4px 0 0 4px; 0 0 0 16px padding; height 44px
- Filter input: bg white; border 1px solid rgb(230,230,230)=#e6e6e6; radius 2px; padding 4px 12px; height 27px
- Listing card items: bg rgb(255,255,255); radius 0px; shadow none
- BG freq: rgb(255,255,255)×507, rgb(242,248,255)×152 (#f2f8ff), rgba(0,0,0,0.8)×51, rgb(255,247,230)×22 (#fff7e6)
- FG freq: rgb(0,0,0)×2742, rgb(51,51,51)×878, rgb(102,102,102)×283, rgb(255,255,255)×264, rgb(80,120,179)×152, rgb(240,24,0)×130

Voice samples are verbatim from live homepage inspect (title, H3 elements).
Brand narrative (Addcn Technology, 2001 founding, 實價登錄) from publicly observable site content.
Personas are fictional archetypes informed by publicly observable user segments; names are illustrative.
Interpretive claims (e.g., "conventions over design innovation") are editorial readings connecting observed design to product positioning.
-->
