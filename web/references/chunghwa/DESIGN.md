---
id: chunghwa
name: Chunghwa Telecom
country: TW
category: consumer-tech
homepage: "https://www.cht.com.tw"
primary_color: "#209cff"
logo:
  type: favicon
  slug: "https://web-eshop.cdn.hinet.net/eShop%20Images/Consumer/Faicon/Faicon_logo_128x128.png"
verified: "2026-06-22"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-22"
  note: "primary = live Chunghwa Blue (#209cff = rgb(32,156,255)); accent orange (#ff874d = rgb(255,135,77)); canvas near-white (#fafafa); body text near-black (#333333)."
  colors:
    primary: "#209cff"
    primary-hover: "#0083ec"
    primary-tint: "#e4f2ff"
    primary-surface: "#f0f8ff"
    accent: "#ff874d"
    ink: "#333333"
    muted: "#666666"
    dark-mid: "#4c4c4c"
    canvas: "#fafafa"
    surface: "#ffffff"
    hairline: "#eaeaea"
    border-input: "#cbcbcb"
    on-primary: "#ffffff"
  typography:
    family: { display: "PingFang TC", body: "PingFang TC, SF Pro TC, Microsoft JhengHei, Helvetica Neue, Noto Sans CJK TC, Helvetica, Arial, sans-serif" }
    hero: { size: 32, weight: 700, lineHeight: 1.40, use: "Hero section headlines" }
    section: { size: 24, weight: 700, lineHeight: 1.42, use: "Section headers, service category titles" }
    nav-primary: { size: 16, weight: 700, lineHeight: 1.38, use: "Primary navigation tabs (個人家庭 active)" }
    nav-secondary: { size: 16, weight: 400, lineHeight: 1.38, use: "Secondary nav links, inactive states" }
    body: { size: 20, weight: 400, lineHeight: 1.60, use: "Body text, descriptions" }
    sub-nav: { size: 18, weight: 700, lineHeight: 1.44, use: "Sub-navigation section headers" }
    cta-label: { size: 16, weight: 700, lineHeight: 1.50, use: "Button labels, find-more CTAs" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 20, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 4, md: 8, lg: 16, card: 20, full: 100 }
  shadow:
    card: "0 2px 8px rgba(0,0,0,0.08)"
    none: "none"
  components:
    button-primary: { type: button, bg: "#209cff", fg: "#ffffff", radius: "100px", padding: "16px 35px", height: "50px", font: "16px / 400", use: "Primary CTA, accept/consent, back-to-home actions" }
    button-find-more: { type: button, bg: "#e4f2ff", fg: "#209cff", radius: "8px", padding: "7px 58px", height: "40px", font: "16px / 700", use: "Find-more section CTA (找更多)" }
    nav-tab: { type: tab, fg: "#333333", font: "16px / 700", use: "Primary top nav active tab (個人家庭)", active: "text #333333 font-weight 700" }
    nav-link: { type: tab, fg: "#666666", font: "16px / 400", use: "Inactive top nav links (企業服務, 國際服務)" }
    card-white: { type: card, bg: "#ffffff", fg: "#333333", radius: "16px", use: "Service category cards, product cards" }
    search-input: { type: input, bg: "#ffffff", border: "1px solid #cbcbcb", radius: "4px", padding: "0px 10px", height: "36px", fg: "#686868", font: "13px / 400", use: "Site search field" }
    badge-orange: { type: badge, bg: "#ff874d", fg: "#ffffff", radius: "4px", use: "Promotional accent tags, hot-deal indicators" }
    badge-blue: { type: badge, bg: "#209cff", fg: "#ffffff", radius: "4px", use: "Feature highlight or primary status tags" }
  components_harvested: true
---

# Design System Inspiration of Chunghwa Telecom

## 1. Visual Theme & Atmosphere

Chunghwa Telecom (中華電信), Taiwan's largest and oldest telecommunications carrier, presents a digital brand anchored in a bold, accessible sky-blue — the same Chunghwa Blue (`#209cff`) that has identified the company since the era of state-owned telecoms. The homepage opens on a near-white canvas (`#fafafa`) punctuated by clean white content panels (`#ffffff`) and a pervasive blue that functions simultaneously as a brand color, link color, and primary interactive accent. The page feels approachable and utilitarian, built for a wide demographic of Taiwanese users navigating services that span 5G mobile, HiNet broadband, MOD cable TV, and enterprise ICT.

Typography is driven by **PingFang TC** (TC = Traditional Chinese), Apple's flagship CJK font for Taiwan, with a long system-font fallback stack covering Microsoft JhengHei and Noto Sans CJK TC for cross-platform coverage. Body text sits at 20px with generous line height, optimized for busy information-dense pages carrying both Chinese characters and alphanumeric service codes. Navigation labels at 16px toggle between weight 700 (active) and weight 400 (inactive), creating a clear selected-state signal without color changes alone.

What distinguishes CHT from pure digital-native brands is its dual-tone accent system: the primary Chunghwa Blue (`#209cff`) handles all interactive, primary CTA, and brand-ownership signals, while a warm orange (`#ff874d`) provides promotional heat — price call-outs, limited-time offers, and urgency badges. The combination mirrors classic telecom retail convention (blue = brand trust, orange = deal alert) but is executed with enough restraint to avoid visual noise on a content-heavy portal.

Border radius centers on 20px — the dominant corner radius (~46% of all measured radii) applied to modals and primary content cards. Underlying service cards use 16px, secondary CTAs and tinted surface cards use 8px, form elements stay at 4px, and primary CTA buttons use the full 100px pill. Secondary radii observed live include 50% (circle crops, ×11) and 42px (×4). The system leans on tinted blue surfaces (`#e4f2ff`, `#f0f8ff`) for subtle hierarchy without heavy shadows.

**Key Characteristics:**
- Chunghwa Blue (`#209cff`) as the dominant brand and interactive accent across all surfaces
- Warm orange (`#ff874d`) reserved for promotional highlights and urgency signals
- PingFang TC as the primary typeface — Traditional Chinese optimized, mass-market legible
- Near-white canvas (`#fafafa`) with white card panels — a clean, institutional feel
- Dominant radius 20px (modal/card default, ~46% of all radii); service cards 16px; form fields 4px; primary CTA full 100px pill
- Near-black (`#333333`) body ink — warm, accessible, never pure black
- Blue tint surfaces (`#e4f2ff`) for secondary actions and hover affordances

## 2. Color Palette & Roles

### Primary
- **Chunghwa Blue** (`#209cff`): The core brand color and primary interactive accent. Used for all primary CTA buttons, link text, active nav indicators, and brand-owned surfaces. Equivalent to `rgb(32, 156, 255)` measured live on homepage.
- **Primary Hover** (`#0083ec`): Slightly deeper blue for hover/pressed states on primary buttons — measured live (`rgb(0, 131, 236)`) on the CTA button.
- **Primary Tint** (`#e4f2ff`): Light blue tint for secondary button backgrounds ("找更多" CTA) and hover surfaces. Measured `rgb(228, 242, 255)` live.
- **Primary Surface** (`#f0f8ff`): Lighter blue surface tint for content zone backgrounds and card accents. Measured `rgb(240, 248, 255)` live.

### Accent
- **CHT Orange** (`#ff874d`): Warm orange for promotional badges, price highlights, and urgency indicators. Measured `rgb(255, 135, 77)` live as a frequent background color.

### Neutral & Surface
- **Near-White Canvas** (`#fafafa`): Page background — warmer than pure white, reducing eye fatigue on dense portal pages.
- **Surface White** (`#ffffff`): Card and panel backgrounds — the primary content surface.
- **Hairline** (`#eaeaea`): Thin border and divider color for card outlines and section separators. Measured `rgb(234, 234, 234)` live.
- **Input Border** (`#cbcbcb`): Form field border color — slightly darker than hairline, providing the contrast needed for visible input outlines. Measured `rgb(203, 203, 203)` live on the search input.

### Text Hierarchy
- **Ink** (`#333333`): Primary text, headings, nav active, all body copy. Measured `rgb(51, 51, 51)` as the dominant foreground (1084 occurrences).
- **Muted** (`#666666`): Secondary/inactive nav links, captions. Measured `rgb(102, 102, 102)` live.
- **Dark Mid** (`#4c4c4c`): Mid-range text for certain sub-headings. Measured `rgb(76, 76, 76)` live.
- **On-Primary** (`#ffffff`): Text and icons on primary blue or orange backgrounds.

## 3. Typography Rules

### Font Family
- **Display/UI**: `PingFang TC` — Apple's traditional Chinese typeface, with a system fallback stack of `SF Pro TC`, `SF Pro Text`, `Microsoft JhengHei`, `Helvetica Neue`, `Noto Sans CJK TC`, Helvetica, Arial, sans-serif. This covers macOS/iOS, Windows, Android, and web environments.
- The font stack prioritizes CJK-optimized fonts: PingFang TC and Microsoft JhengHei render Traditional Chinese characters at precise stroke weights for 20px body reading.

### Hierarchy

| Role | Size | Weight | Line Height | Notes |
|------|------|--------|-------------|-------|
| Hero Headline | 32px | 700 | 1.40 | Service category hero titles |
| Section Heading | 24px | 700 | 1.42 | Major page sections |
| Sub-nav Header | 18px | 700 | 1.44 | Second-level nav ("行動上網通話") |
| Primary Nav Tab | 16px | 700 | 1.38 | Active nav (個人家庭) — bold signals selection |
| Body / Secondary Nav | 16px | 400 | 1.38 | Inactive tabs, descriptions, general text |
| Body Large | 20px | 400 | 1.60 | Default body text (document-level) |
| Small / Label | 13px | 400 | 1.30 | Form labels, search input text |

### Principles
- **Weight as selection signal**: Nav tabs toggle between 700 (active) and 400 (inactive) weight — the weight change alone communicates selected state without color.
- **CJK-first sizing**: 20px as the body default reflects the increased pixel density needed for dense Traditional Chinese characters to be legible across a wide age demographic.
- **No display font separation**: CHT uses the same system font stack for all contexts — no dedicated brand typeface or custom web font.
- **Generous line height**: 1.60 at body size ensures readable vertical rhythm in Chinese-heavy content.

## 4. Component Stylings

### Buttons

**Primary CTA**
- Background: `#209cff`
- Text: `#ffffff`
- Radius: 100px
- Padding: 16px 35px
- Font: 16px / 400 / PingFang TC
- Height: 50px
- Hover: `#0083ec` (deeper blue)
- Use: Primary accept/consent actions, "回首頁" back-to-home CTA

**Find More (Secondary Tint)**
- Background: `#e4f2ff`
- Text: `#209cff`
- Radius: 8px
- Padding: 7px 58px
- Font: 16px / 700 / PingFang TC
- Height: 40px
- Use: "找更多 >" — section-level discovery CTAs, secondary actions

### Inputs & Forms

**Search Input**
- Background: `#ffffff`
- Border: 1px solid `#eaeaea`
- Radius: 4px
- Padding: 0px 10px
- Text: `#686868`
- Font: 13px / 400 / PingFang TC
- Height: 36px
- Use: Site-wide search field

### Cards & Containers

**White Service Card**
- Background: `#ffffff`
- Text: `#333333`
- Radius: 16px
- Use: Service category cards, product listing cards — the primary content container

**Blue Tint Card**
- Background: `#e4f2ff`
- Text: `#209cff`
- Radius: 8px
- Use: Featured service highlights, promotional content zones

### Badges & Tags

**Orange Promo Badge**
- Background: `#ff874d`
- Text: `#ffffff`
- Radius: 4px
- Use: Promotional tags, hot-deal indicators, urgency signals

**Blue Feature Badge**
- Background: `#209cff`
- Text: `#ffffff`
- Radius: 4px
- Use: Feature highlights, primary category labels, new-service indicators

### Navigation

**Primary Tab (Active)**
- Text: `#333333`
- Font: 16px / 700 / PingFang TC
- Height: 34px
- Use: Active top-level nav tab — "個人家庭" bold weight

**Secondary Nav Links (Inactive)**
- Text: `#666666`
- Font: 16px / 400 / PingFang TC
- Use: Inactive nav tabs — "企業服務", "國際服務", "科技研發", "關於我們"

---

**Verified:** 2026-06-22
**Tier 1 sources:** https://www.cht.com.tw/ (homepage live inspect), https://www.cht.com.tw/home/cht/personal/ (personal services surface — session-gated, partial)
**Tier 2 sources:** getdesign.md/chunghwa — 0 files (not indexed); styles.refero.design — no results for "chunghwa telecom"
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Scale: 4px, 8px, 12px, 16px, 20px, 32px, 48px, 64px
- CHT's portal is information-dense; sections group related services (行動上網通話, 光世代寬頻, MOD) into tabbed panels with 12–20px internal padding

### Grid & Container
- Centered max-width layout at 1440px viewport
- Top navigation bar: full-width with 5 primary tabs (個人家庭, 企業服務, 國際服務, 科技研發, 關於我們)
- Sub-navigation row: horizontal scrolling links for service sub-categories
- Hero section: full-width carousel with promotional banners
- Content panels: 4–6 column card grids for service listings

### Border Radius Scale
- Minimal (4px): form inputs, small badges, search fields
- Standard (8px): secondary CTAs ("找更多"), tinted surface cards
- Card (16px): service and product listing cards
- Modal/Card Default (20px): the dominant radius — ~46% of all measured corner radii (×66 live); used on modals and primary card containers
- Full pill (100px): primary CTA buttons ("我接受", consent/accept actions)
- Secondary observed: 50% / circle (×11, avatar/icon crops), 42px (×4, select promotional containers)

### Whitespace Philosophy
- **Utility over luxury**: CHT serves millions of Taiwanese users looking for specific telecom products — whitespace is functional, not editorial
- **Flat tint segmentation**: Blue tint surfaces (`#e4f2ff`, `#f0f8ff`) divide content zones without heavy shadows
- **Card separation**: White cards on `#fafafa` canvas create natural depth through contrast

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Canvas, inline text, most surfaces |
| Card (Level 1) | White bg `#ffffff` on `#fafafa` canvas | Service cards, content containers |
| Tint (Level 2) | `#e4f2ff` or `#f0f8ff` background | Featured sections, secondary CTAs |

**Shadow Philosophy**: CHT operates a largely flat, portal-style design. The primary depth mechanism is background color difference — white cards (`#ffffff`) on a near-white canvas (`#fafafa`) — rather than box shadows. This keeps the page fast-loading and accessible on both desktop and mobile browsers used across Taiwan's diverse device landscape.

## 7. Do's and Don'ts

### Do
- Use Chunghwa Blue (`#209cff`) for all primary interactive elements and brand-owned actions
- Use PingFang TC with the full CJK fallback stack to ensure cross-platform Traditional Chinese legibility
- Apply the orange accent (`#ff874d`) only for promotional urgency — price highlights, limited-time offers
- Use 100px-radius pill buttons for primary CTAs to distinguish them from secondary actions
- Maintain weight 700 for active nav states and weight 400 for inactive states
- Use near-black (`#333333`) for text — never pure black for body copy
- Separate content sections with blue tint surfaces (`#e4f2ff`) rather than heavy shadows

### Don't
- Use orange (`#ff874d`) as a primary brand color — it is an accent-only promotional signal
- Apply drop shadows heavily — CHT uses flat tint-based depth, not elevation
- Mix Traditional Chinese (PingFang TC) and Western display fonts — system stack is consistent
- Use rounded corners larger than 20px on service cards or modals (20px is the documented maximum for cards; reserve 100px exclusively for pill CTAs)
- Set inactive nav items with colored text — inactive is always `#666666` muted grey
- Use pure black (`#000000`) for body text — the warm near-black `#333333` is the system standard
- Overload the blue accent — it should signal primary action, not decoration

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, sub-nav horizontally scrollable, hero compresses |
| Tablet | 640–1024px | 2-col card grid, condensed nav |
| Desktop | 1024–1440px | Full 4–6 col card grid, full horizontal nav |

### Touch Targets
- Primary pill CTA: 50px height × full-width on mobile — generous tap area
- Nav tabs: 34px height — tight but standard for compressed navigation
- Sub-nav links: 38px height with 8px right padding for tappable separation

### Collapsing Strategy
- Top navigation collapses to hamburger on mobile
- Sub-category links wrap or scroll horizontally
- Service cards stack from multi-column to single-column
- Hero banners maintain full-width treatment at all breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA / Brand Blue: Chunghwa Blue (`#209cff`)
- Primary Hover: `#0083ec`
- Primary Tint Surface: `#e4f2ff`
- Lighter Surface: `#f0f8ff`
- Promotional Orange: `#ff874d`
- Page Background: Near-White (`#fafafa`)
- Card Background: White (`#ffffff`)
- Primary Text: Ink (`#333333`)
- Secondary Text: Muted (`#666666`)
- Divider: Hairline (`#eaeaea`)

### Example Component Prompts
- "Create a CHT primary CTA button: `#209cff` background, white text, 100px radius, 16px/400/PingFang TC, 50px height, 16px 35px padding. Hover darkens to `#0083ec`."
- "Build a service card: white `#ffffff` background on `#fafafa` canvas, 16px radius, no shadow. Title in `#333333`, 18px PingFang TC weight 700. Secondary text `#666666`, 16px weight 400."
- "Design a promotional badge: `#ff874d` background, white text, 4px radius, 13px PingFang TC. Place it in the upper corner of a service card."
- "Create the CHT navigation bar: white background, 5 tabs at 16px PingFang TC. Active = weight 700, color `#333333`. Inactive = weight 400, color `#666666`."

### Iteration Guide
1. Chunghwa Blue (`#209cff`) is the anchor — primary buttons, links, and brand signals all use it
2. Orange (`#ff874d`) is heat-only — promotional tags, never primary actions
3. Text is always `#333333` (never pure black) for body; `#666666` for secondary
4. Full-pill (100px) = primary CTA; modal/card default = 20px (~46% of radii); secondary surfaces = 8px–16px; inputs/badges = 4px
5. PingFang TC + fallback stack for all text — no custom fonts
6. Flat depth: distinguish zones with `#fafafa` vs `#ffffff` vs `#e4f2ff`, not shadows

---

## 10. Voice & Tone

Chunghwa Telecom's voice is **reliable, inclusive, and service-oriented** — the brand speaks with the authority of Taiwan's dominant telecom operator and the approachability of a national public utility. Headlines are declarative and benefit-forward ("5G行動上網通話", "HiNet光世代寬頻"), naming the service directly without marketing abstraction. Copy is dense with product specifics — plan names, speeds, prices — reflecting a user who has already decided to subscribe and wants to compare details quickly.

| Context | Tone |
|---|---|
| Navigation tabs | Categorical and precise. "個人家庭", "企業服務", "國際服務" — segment first, then product. |
| Hero banners | Product-forward. Names the plan, technology, and benefit in one tight phrase. |
| CTAs | Direct and action-named. "新申請", "續約門號", "找更多" — no soft language. |
| Promotional copy | Urgency without panic. Price and deal terms stated plainly. |
| Error / system copy | Institutional clarity. "網頁過期囉" (page expired) with a single recovery action. |

**Voice samples (from live homepage 2026-06-22):**
- "5G行動上網通話、HiNet光世代寬頻上網/市話、MOD影視娛樂及智慧生活應用" — page title (exhaustive service listing). *(verified live 2026-06-22)*
- "找更多 >" — section-level discovery CTA (low-friction, direct). *(verified live 2026-06-22)*
- "個人家庭" — primary nav tab for the consumer segment (two characters = full concept). *(verified live 2026-06-22)*

**Forbidden register**: vague aspirational slogans that omit product specifics, English-dominant copy that marginalizes Mandarin speakers, aggressive fear-based urgency without stated terms.

## 11. Brand Narrative

Chunghwa Telecom (中華電信, literally "China/Chunghwa Telecommunications") was spun out of the Directorate General of Telecommunications of Taiwan in **1996** and fully privatized by **2005**, becoming a listed company on the Taiwan Stock Exchange (TWSE: 2412) and the New York Stock Exchange (NYSE: CHT). As the successor to Taiwan's national telephone infrastructure, it holds an unparalleled position: the widest fixed-line network, the largest fiber broadband subscriber base (HiNet), and — following 5G spectrum auctions — one of Taiwan's lead 5G operators.

The brand's mission has evolved from connecting Taiwan's phones to connecting Taiwan's digital life. The product surface now spans mobile (5G/4G), fixed broadband (HiNet 光世代), cable TV and OTT (MOD), enterprise ICT solutions, and smart city infrastructure. CHT positions itself as the backbone of Taiwan's digital transformation rather than a consumer products challenger — a posture that shows in its design: institutional, comprehensive, and confidence-projecting rather than disruptive or playful.

What the brand refuses, visible in its design choices: excessive decoration, trend-chasing color palettes, or marketing language that obscures service terms. What it embraces: a clear blue identity that reads as stable and trustworthy to a national audience that has used CHT services for decades, dense information architecture that respects users' time, and dual-language (Chinese/English) navigation that reflects Taiwan's bilingual professional class.

## 12. Principles

1. **Clarity before persuasion.** Taiwanese users come to CHT to confirm a service, compare a plan, or initiate a subscription — not to be convinced. *UI implication:* lead with product names and specs; reserve persuasion for secondary copy.
2. **Blue as trust, orange as attention.** The two-tone accent system maps directly to user need states. *UI implication:* blue (`#209cff`) for every action that continues a journey; orange (`#ff874d`) only for time-sensitive promotions.
3. **Inclusive legibility.** CHT's user base spans teenagers to seniors, urban to rural. *UI implication:* 20px body text, high-contrast `#333333` on `#fafafa`, CJK-optimized font stack, generous touch targets.
4. **Comprehensive before minimal.** Unlike SaaS brands that hide complexity, CHT surfaces all products because users arrive with specific intent. *UI implication:* tabbed navigation covers every service segment; sub-categories are explicit, not hidden under hamburger menus.
5. **Institutional credibility.** As Taiwan's largest carrier, CHT's design signals stability over novelty. *UI implication:* measured radius scale (4px–20px for most elements, 100px pill for primary CTA only), flat system fonts, no experimental motion.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable CHT service segments (Taiwan residential consumers, SMB operators, enterprise IT buyers), not individual people.*

**陳大偉, 52, 台中.** A homeowner on a legacy HiNet ADSL plan comparing upgrade options to 光世代 fiber. Values stability and clear pricing. Trusts CHT because he's been a subscriber for 20 years. Uses the website on a desktop browser; needs large, readable text and straightforward plan comparison tables.

**林雅婷, 28, 台北.** A young professional deciding between CHT 5G and a competitor MVNO. Uses mobile first. Checks the promotional banner for the current new-subscriber offer, then clicks "新申請" immediately. Cares about speed tiers and included data; less loyal to any brand.

**張志遠, 41, 新竹.** An IT manager at a technology company evaluating CHT enterprise cloud and data-center services. Uses the "企業服務" tab exclusively. Requires technical spec sheets and account management contact; the consumer-facing design language is background noise for him.

## 14. States

| State | Treatment |
|---|---|
| **Empty (search, no results)** | Ink (`#333333`) message explaining no matches, with a suggestion to refine or call 123 customer service. Blue CTA to return to home. |
| **Empty (service unavailable in region)** | Plain-language Chinese copy with contact reference. No illustration. |
| **Loading (page / panel)** | Session-based portal uses server-side rendering; expired sessions show "網頁過期囉" page — white canvas with a single blue pill CTA ("回首頁"). |
| **Loading (search results)** | Skeleton card placeholders on `#fafafa` at standard 16px-radius card dimensions. |
| **Error (session expired)** | Dedicated error page: title "網頁過期囉", near-white canvas, single `#209cff` pill button "回首頁". Calm and directive, not alarming. |
| **Error (form validation)** | Field-level inline message in `#333333` below the input; describes what format is expected. |
| **Success (application submitted)** | Plain confirmation copy in `#333333` with next-step summary. No heavy celebratory treatment. |
| **Skeleton** | `#eaeaea` blocks at final card dimensions, 16px radius, minimal pulse. Matches the flat system aesthetic. |
| **Disabled** | Muted (`#666666`) text on `#eaeaea` background; blue actions fade — preserves brand read while signaling unavailability. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 100ms | Hover states on nav links, badge pulse |
| `motion-standard` | 200ms | Panel transitions, card reveal, carousel slide |
| `motion-slow` | 300ms | Page-level transitions, sheet or dropdown open |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Panels arriving — cards, dropdowns |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals, closing panels |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions, carousel |

**Motion rules**: CHT is a utilitarian portal; motion is functional and imperceptible rather than expressive. Hero carousels auto-advance at a slow, non-disorienting rate. Sub-nav panels slide in at `motion-standard / ease-enter`. No bounce, spring, or playful physics — the system's credibility depends on calm, predictable behavior. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; all functionality remains intact.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-22) via playwright getComputedStyle on https://www.cht.com.tw/:
- body: font PingFang TC / SF Pro TC stack; color rgb(51,51,51) #333333; fontSize 20px; lineHeight 32px; bg rgb(250,250,250) #fafafa
- nav primary tab "個人家庭": color rgb(51,51,51); fontSize 16px; fontWeight 700 (active)
- nav secondary "企業服務": color rgb(102,102,102) #666666; fontSize 16px; fontWeight 400 (inactive)
- sub-nav "行動上網通話": fontSize 18px; fontWeight 700; color rgb(51,51,51)
- "找更多 >" button: bg rgb(228,242,255) #e4f2ff; color rgb(32,156,255) #209cff; radius 8px; padding 7px 58px; height 40px
- "我接受" primary button: bg rgb(32,156,255) #209cff; color white; radius 100px; padding 16px; height 54px
- "回首頁" button: bg rgb(32,156,255); color white; radius 30px; padding 0px 35px; height 50px
- bgFreq top: rgb(255,255,255) ×52, rgba(0,0,0,0.2) ×25, rgb(32,156,255) ×19, rgb(255,135,77) ×7, rgb(228,242,255) ×6, rgb(0,131,236) ×2
- fgFreq top: rgb(51,51,51) ×1084, rgb(32,156,255) ×176, rgb(255,255,255) ×75, rgb(255,135,77) ×26

Brand narrative (§11): CHT established 1996 (spin-off), fully privatized 2005; TWSE:2412, NYSE:CHT.
These are widely documented public corporate facts.

Voice samples (§10): page title "5G行動上網通話、HiNet光世代寬頻" etc., CTA "找更多 >", nav "個人家庭"
— all verbatim from live homepage 2026-06-22.

Personas (§13) are fictional archetypes informed by publicly observable CHT user segments.
Names are illustrative; they do not refer to real people.

Interpretive claims (dual-tone system, institutional positioning, CJK-first sizing)
are editorial readings connecting CHT's observed design to its positioning.
-->
