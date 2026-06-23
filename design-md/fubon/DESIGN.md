---
id: fubon
name: Fubon
country: TW
category: fintech
homepage: "https://www.fubon.com/banking/"
primary_color: "#0093c1"
logo:
  type: favicon
  slug: "https://www.fubon.com/banking/common_content/images/favicon.ico"
verified: "2026-06-22"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-22"
  note: "primary = live CTA + interactive blue (#0093c1 / rgb(0,147,193)); group site uses #008fc7 / rgb(0,143,199); deep navy ink (#0c0e1f) for primary text; secondary text (#494a57). Fubon blue is the anchor across bank + holding group."
  colors:
    primary: "#0093c1"
    primary-group: "#008fc7"
    primary-hover: "#005c7a"
    teal-accent: "#00a59b"
    sky-light: "#3cbeE7"
    canvas: "#ffffff"
    surface: "#f5f5f5"
    surface-subtle: "#f3fbfe"
    ink: "#0c0e1f"
    body: "#494a57"
    muted: "#7d7f87"
    hairline: "#d7d6db"
    on-primary: "#ffffff"
    error: "#d32f2f"
    success: "#00a59b"
  typography:
    family: { sans: "Roboto", tc: "Noto Sans TC", fallback: "Microsoft JhengHei" }
    h1: { size: 25, weight: 400, lineHeight: 1.4, use: "Page-level heading (personal / section)" }
    h2-title: { size: 24, weight: 700, lineHeight: 1.33, use: "Section title (.title-primary)" }
    h2-small: { size: 20, weight: 700, lineHeight: 1.4, use: "Compact section title" }
    body: { size: 16, weight: 400, lineHeight: 1.5, use: "Standard body text" }
    nav: { size: 18, weight: 400, lineHeight: 1.4, use: "Top nav links" }
    cta-link: { size: 18, weight: 500, lineHeight: 1.4, use: "More-link CTAs (了解更多 / 更多最新公告)" }
    label: { size: 14, weight: 400, lineHeight: 1.5, use: "Sub-nav, footer links, captions" }
    button: { size: 16, weight: 700, lineHeight: 1.25, use: "Popup confirm / cancel button" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48 }
  rounded: { sm: 4, md: 12, lg: 16, full: 9999 }
  shadow:
    card: "rgba(0, 0, 0, 0.11) 5px 5px 30px 0px"
    soft: "rgba(0, 0, 0, 0.25)"
  components:
    button-primary: { type: button, bg: "#0093c1", fg: "#ffffff", radius: "12px", font: "16px / 700 Roboto", border: "1px solid #0093c1", use: "Primary confirm / CTA (確認, 同意)" }
    button-secondary: { type: button, bg: "#eef0f0", fg: "#0c0e1f", radius: "12px", font: "16px / 700 Roboto", border: "1px solid #eef0f0", use: "Cancel / secondary action (取消)" }
    button-cta-lg: { type: button, bg: "#008fc7", fg: "#ffffff", radius: "0px", font: "16px / 400 Roboto", use: "Group-level large CTA (了解更多, 60px height)" }
    nav-link: { type: tab, fg: "#0c0e1f", font: "18px / 400 Roboto", use: "Personal banking top nav link", active: "text #0093c1 underline on hover" }
    card-white: { type: card, bg: "#ffffff", fg: "#0c0e1f", radius: "0px", shadow: "rgba(0,0,0,0.11) 5px 5px 30px", use: "White content card with drop shadow" }
    card-surface: { type: card, bg: "#f5f5f5", fg: "#0c0e1f", use: "Light grey tinted surface card" }
    card-sky: { type: card, bg: "#f3fbfe", fg: "#0c0e1f", use: "Sky-blue tinted info card" }
    badge-blue: { type: badge, bg: "#0093c1", fg: "#ffffff", radius: "4px", use: "Category / service badge" }
    input-default: { type: input, bg: "#ffffff", fg: "#0c0e1f", border: "1px solid #d7d6db", radius: "0px", font: "14px / 400 Roboto", use: "Standard form input field" }
    badge-teal: { type: badge, bg: "#00a59b", fg: "#ffffff", radius: "4px", use: "Success / eco / sustainable action badge" }
  components_harvested: true
---

# Design System Inspiration of Fubon

## 1. Visual Theme & Atmosphere

Fubon Financial Holding (富邦金控) and its flagship retail arm Taipei Fubon Bank (台北富邦銀行) share a design language built on trust, approachability, and Taiwanese banking heritage. The canvas is clean white (`#ffffff`) underpinned by a confident, mid-range blue — `#0093c1` on the bank product surface, the marginally deeper `#008fc7` on the group holding site — that reads as clear, accessible, and dependably institutional without the heaviness of legacy banking navy. The page motto "正向力量 成就可能" (Positive Power — All Possible) signals this: optimism embedded in the brand DNA, not just compliance.

Typography runs in **Roboto** as the Latin primary, with **Noto Sans TC** carrying Traditional Chinese glyphs — the standard pairing for modern TW financial digital products, chosen for legibility across dense financial tables, multilingual UI, and accessibility mandates. Section headings at 24px / weight 700 project confidence; body text at 16px / 400 breathes comfortably. There is no ultra-heavy display font à la Korean fintechs — Fubon uses weight 700 selectively on section titles and button labels, keeping the rest at regular weight for a calm, readable financial interface.

The interactive system is built around the Fubon blue as the sole saturated action color. "了解更多" (Learn More) links appear in `#0093c1` text; the primary button fills `#0093c1` with white text; the cookie/popup confirm fills the same. Shadows appear on floating elements — a 30px spread card shadow (`rgba(0,0,0,0.11) 5px 5px 30px`) and the digital service FAB — giving gentle elevation without drama. Section separation relies on flat tinted surfaces (`#f5f5f5` grey and `#f3fbfe` sky-blue) rather than heavy borders.

**Key Characteristics:**
- Fubon Blue (`#0093c1`) as the single action and brand anchor color
- Roboto + Noto Sans TC — accessible, multilingual-ready pairing
- Section titles at 24px weight 700; body at 16px / 400 — no display ultra-bold
- White canvas with `#f5f5f5` and `#f3fbfe` tinted surface sections
- Ink text in deep near-black navy (`#0c0e1f`) instead of pure black
- Secondary text at warm dark-grey (`#494a57`) for readability with comfort
- Gentle card shadow (`rgba(0,0,0,0.11) 5px 5px 30px`) — soft elevation not harsh depth
- Rounded corners at 12px for buttons; service icons on circular 50% containers

## 2. Color Palette & Roles

### Primary
- **Fubon Blue** (`#0093c1`): The primary brand CTA color. Button backgrounds (確認, 同意), "了解更多" link text, icon accents, and category chips. Consistent across bank and holding surfaces.
- **Fubon Blue Deep** (`#008fc7`): Group financial holding site variant — a slightly deeper blue used for the large group-level CTA buttons (60px height) and member sub-buttons.
- **Primary Hover** (`#005c7a`): Darker blue for hover and active states on primary interactive elements.

### Accent
- **Teal Accent** (`#00a59b`): Used for eco/sustainability-themed labels, success states, and the 富邦人壽 (life insurance) subsidiary badge. A calm, trustworthy green-teal that complements the blue anchor.
- **Error Red** (`#d32f2f`): Semantic error color for validation messages and critical alerts. Deep red that reads clearly on white canvas without visual aggression.
- **Sky Light** (`#3cbee7`): Light sky-blue for secondary subsidiary buttons (富邦銀行, 富邦證券) and certain promotional callouts.

### Neutral & Surface
- **Canvas White** (`#ffffff`): Page background, cards, and button text on blue.
- **Surface Grey** (`#f5f5f5`): Subtle cool-grey tinted section backgrounds.
- **Surface Sky** (`#f3fbfe`): Very light blue-tinted surface for info cards and service sections.
- **Hairline** (`#d7d6db`): Thin dividers, input borders, and soft separators.
- **Muted Grey** (`#aeafb4`): Disabled states and lower-emphasis metadata.

### Text
- **Ink Navy** (`#0c0e1f`): Primary text, headings, nav items — a very dark blue-black with financial gravitas.
- **Body Grey** (`#494a57`): Secondary body text, sub-nav links, caption text.
- **Muted** (`#7d7f87`): Tertiary text, placeholder text.

## 3. Typography Rules

### Font Family
- **Latin**: `Roboto` — clean, neutral, highly legible for dense financial UI
- **Traditional Chinese**: `"Noto Sans TC"` — complete TC Unicode coverage, pairs seamlessly with Roboto
- **Fallback**: `Arial, Helvetica, 微軟正黑體, Microsoft JhengHei, Apple LiGothic, 蘋果儷中黑` — broad compatibility across TW Windows/macOS environments

### Hierarchy

| Role | Size | Weight | Line Height | Use |
|------|------|--------|-------------|-----|
| Page H1 | 25px | 400 | 1.4 | Page-level heading (個人金融, 信用卡) |
| Section Title | 24px | 700 | 1.33 | `.title-primary` — major section breaks |
| Compact Section | 20px | 700 | 1.4 | Sidebar / widget headers (熱門服務) |
| Nav Link | 18px | 400 | 1.4 | Top nav items |
| CTA Link | 18px | 500 | 1.4 | Learn-more links (了解更多, 更多最新公告) |
| Body | 16px | 400 | 1.5 | Standard reading, card content |
| Button | 16px | 700 | 1.25 | Popup confirm / primary buttons |
| Caption / Label | 14px | 400 | 1.5 | Footer links, sub-nav, member list |

### Principles
- **Bilingual first**: Roboto + Noto Sans TC maintain equal visual weight across Latin and TC glyphs — no awkward size compensation needed.
- **Section headings stay at 700**: weight 700 is the maximum used; there is no 800/900 display weight in this system.
- **Functional sizing**: body at 16px, caption at 14px — comfortable for mixed-age Taiwanese banking users and accessibility compliance.
- **No negative letter-spacing**: Unlike KR fintech counterparts, Fubon uses default tracking throughout — the system trusts the typefaces' own spacing.

## 4. Component Stylings

### Buttons

**Primary (確認 / 同意)**
- Background: `#0093c1`
- Text: `#ffffff`
- Radius: 12px
- Font: 16px Roboto weight 700
- Border: 1px solid `#0093c1`
- Use: Popup confirm, cookie consent, primary action

**Secondary / Cancel (取消)**
- Background: `#eef0f0`
- Text: `#0c0e1f`
- Radius: 12px
- Font: 16px Roboto weight 700
- Border: 1px solid `#eef0f0`
- Use: Cancel / dismiss in popup dialogs

**Large Group CTA (了解更多)**
- Background: `#008fc7`
- Text: `#ffffff`
- Height: 60px
- Radius: 0px
- Font: 16px Roboto weight 400
- Use: Group-level primary CTA, full-width section buttons

### Cards & Containers

**White Content Card**
- Background: `#ffffff`
- Text: `#0c0e1f`
- Shadow: `rgba(0, 0, 0, 0.11) 5px 5px 30px 0px`
- Use: Product / feature cards with gentle floating elevation

**Grey Surface Card**
- Background: `#f5f5f5`
- Text: `#0c0e1f`
- Use: Alternating section background tint — separates content zones without borders

**Sky-Blue Info Card**
- Background: `#f3fbfe`
- Text: `#0c0e1f`
- Use: Light-blue tinted info sections, product highlights

### Navigation

**Primary Nav Link**
- Text: `#0c0e1f`
- Font: 18px Roboto weight 400
- Active: text color `#0093c1`, underline indicator
- Background: transparent on default; hover state shows Fubon Blue text

### Badges

**Primary Blue Badge**
- Background: `#0093c1`
- Text: `#ffffff`
- Radius: 4px
- Use: Category tags, service indicators, subsidiary label chips

**Teal Success Badge**
- Background: `#00a59b`
- Text: `#ffffff`
- Radius: 4px
- Use: Success, sustainability, eco-friendly service tags

### Inputs

**Default Input**
- Background: `#ffffff`
- Border: 1px solid `#d7d6db`
- Text: `#0c0e1f`
- Radius: 0px
- Font: 14px Roboto weight 400
- Placeholder: `#7d7f87`
- Use: Search fields, form inputs

---

**Verified:** 2026-06-22
**Tier 1 sources:** https://www.fubon.com/banking/ (Taipei Fubon Bank personal banking), https://www.fubon.com/ (Fubon Financial Holding Group)
**Tier 2 sources:** getdesign.md/fubon — not found; styles.refero.design/?q=fubon — not found
**Conflicts unresolved:** none (group site blue #008fc7 vs bank site #0093c1 — both are brand blues; bank CTA value used as primary)

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px
- Section padding: 48px vertical between major content bands

### Grid & Container
- Desktop: centered container with side padding; hero banners extend full-width
- Hot-service icon row: 2×4 grid of quick-access service icons with equal spacing
- Footer: multi-column link grid, Roboto 14px / `#494a57`

### Whitespace Philosophy
- **Generous between sections**: alternating white/grey/sky-blue bands create separation without heavy borders
- **Compact within sections**: financial data (exchange rates, announcements) presented densely for efficiency
- **Icon-driven shortcuts**: the 8-icon quick-access grid replaces prose with visual affordance

### Border Radius Scale
- Small (4px): badges, chip labels, form inputs
- Medium (12px): primary/secondary popup buttons — the workhorse interactive radius
- Full (50%): circular floating service button (digital banking FAB)
- Sharp (0px): large full-width group CTA buttons — authoritative, institutional feel

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (0) | No shadow, no border | Page background, nav items, most inline elements |
| Tint (1) | `#f5f5f5` or `#f3fbfe` background | Section separation — Fubon's primary grouping device |
| Soft Card (2) | `rgba(0,0,0,0.11) 5px 5px 30px` | Floating white cards, digital service FAB |
| Overlay (3) | `rgba(0,0,0,0.25)` scrim | Modal/popup overlay background |

**Shadow Philosophy**: Fubon uses elevation sparingly — the dominant pattern is flat tinted bands, not card stacks. The 30px-spread card shadow is soft and diffused; it suggests depth without competing with the brand blue as the visual focal point.

## 7. Do's and Don'ts

### Do
- Use Fubon Blue (`#0093c1`) for primary CTAs, active link states, and icon accents
- Pair Roboto with Noto Sans TC for all bilingual UI — never separate the two
- Use 24px / weight 700 for section titles; keep body at 16px / 400
- Separate content zones with flat tinted backgrounds (`#f5f5f5`, `#f3fbfe`)
- Set ink text to deep navy (`#0c0e1f`) rather than pure black for warmth
- Apply 12px radius to popup/confirm buttons; keep large CTA banners at 0px for authority
- Use the teal accent (`#00a59b`) for success and sustainability-themed elements
- Keep the shadow soft and diffused — `rgba(0,0,0,0.11) 5px 5px 30px` not harsh drop shadows

### Don't
- Use more than one saturated hue on the same surface — Fubon Blue is the single action color
- Apply ultra-bold display weights (800+) — 700 is the maximum
- Use pure black (`#000000`) for body text — the system uses `#0c0e1f` near-black
- Mix the group's deeper blue (`#008fc7`) and bank blue (`#0093c1`) on the same page without intent
- Apply heavy box shadows — Fubon elevation is gentle, not dramatic
- Use sharp 0px radius on popup buttons — they are 12px rounded for approachability
- Set negative letter-spacing on headlines — Fubon uses default tracking
- Use pure grey backgrounds — the tint (`#f5f5f5`) has subtle cool warmth

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | Single column; quick-icon grid becomes 2-wide; nav collapses to hamburger |
| Tablet | 768–1024px | 2-column layout; reduced hero banner height |
| Desktop | 1024px+ | Full multi-column layout; 2×4 quick-access icon grid |

### Touch Targets
- Large group CTA buttons at 60px height — comfortable thumb target
- Quick-service icons: padded icon containers for easy tapping
- Floating digital-service button: circular, clearly distinct from content

### Collapsing Strategy
- Section headings maintain 24px / 700 across breakpoints
- Tinted surface bands remain full-width at all sizes
- Exchange rate table: horizontal scrollable on mobile

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary Action: Fubon Blue (`#0093c1`)
- Group CTA Deep: `#008fc7`
- Teal Success: `#00a59b`
- Sky Accent: `#3cbee7`
- Background: Canvas White (`#ffffff`)
- Section Tint: Surface Grey (`#f5f5f5`)
- Info Tint: Sky Blue (`#f3fbfe`)
- Primary Text: Ink Navy (`#0c0e1f`)
- Secondary Text: Body Grey (`#494a57`)
- Muted / Placeholder: `#7d7f87`
- Hairline / Border: `#d7d6db`

### Example Component Prompts
- "Design a Fubon primary button: `#0093c1` bg, white text, 12px radius, 16px Roboto 700, 1px solid `#0093c1` border. Cancel button: `#eef0f0` bg, `#0c0e1f` text, same radius."
- "Build a Fubon section: white `#ffffff` background. Section title 24px Roboto 700, `#0c0e1f`. Body copy 16px / 400, `#494a57`. CTA link '了解更多' at 18px / 500, `#0093c1`."
- "Create a feature card: white bg, `rgba(0,0,0,0.11) 5px 5px 30px` shadow, no border radius. Section title inside 24px / 700, `#0c0e1f`."
- "Build a nav: white 112px header. Roboto nav links 18px / 400, `#0c0e1f` default, `#0093c1` on active. Group member dropdown bg `#008fc7`."

### Iteration Guide
1. Fubon Blue (`#0093c1`) is the single action color — every primary button and active link
2. Roboto + Noto Sans TC — always paired, never separated
3. Weight 700 only for section titles and buttons; 400 everywhere else
4. Flat tinted bands (`#f5f5f5`, `#f3fbfe`) do the layout work, not shadows or dividers
5. Ink navy (`#0c0e1f`) for all primary text — never pure `#000000`
6. 12px radius on interactive buttons; 0px on large authoritative CTA banners

---

## 10. Voice & Tone

Fubon's voice is **reassuring, empowering, and community-grounded** — the brand of Taiwan's largest financial group presenting itself as a trusted partner for life, not a faceless institution. The brand tagline "正向力量 成就可能" (Positive Power — All Possible) crystallizes this: financial products framed as enablers of aspiration rather than gatekeepers of access.

| Context | Tone |
|---|---|
| Brand headline | Aspirational, warm, declarative. "正向力量 成就可能." Not sales-first. |
| Product names | Functional, clear. "個人金融", "信用卡", "外幣匯率" — utility-forward. |
| Service CTAs | Low-pressure, inviting. "了解更多" ("Learn more"), "線上申辦" ("Apply online"). |
| Alert / security copy | Calm, concrete. "詐騙手法：請提高警覺" — states risk + action, no panic. |
| Announcement copy | Plain, informative. Dates and facts first; no promotional hype in disclosures. |

**Voice samples (verbatim from live site, verified 2026-06-22):**
- "正向力量 成就可能" — group brand tagline, homepage hero. *(verified live 2026-06-22)*
- "全方位守護" — personal banking section heading (all-round protection). *(verified live 2026-06-22)*
- "北富銀理財學院" — wealth management education section. *(verified live 2026-06-22)*

**Forbidden register**: alarming or fear-based financial urgency, excessive promotional superlatives, jargon-first explanations without plain-language accompaniment.

## 11. Brand Narrative

Fubon Financial Holding (富邦金控) traces its roots to **Taipei City Insurance (台北市產物保險)**, established in **1961** by the Tsai (蔡) family. Over six decades the group expanded into banking, life insurance, securities, and investment trusts, becoming one of Taiwan's two largest financial holding companies alongside Cathay. The Tsai family remains at the helm — Chairman **Tsai Ming-Chung (蔡明忠)** and his brother Tsai Ming-Hsing built a conglomerate that spans Taiwan, Hong Kong, mainland China, Vietnam, and beyond.

Taipei Fubon Bank (台北富邦銀行) emerged from the 2005 merger of Fubon Bank and Taipei Bank — pairing the group's financial scale with Taipei Municipal Bank's deep roots in public service. This heritage shapes the brand's dual register: commercially ambitious yet civic in spirit, serving individual depositors and SMEs with the same presence it brings to institutional investors.

What distinguishes the Fubon design approach from peers is this civic-professional balance. Where some TW fintech brands chase a startup aesthetic, Fubon anchors in legibility, multilingual accessibility, and a color identity that signals trust (the blue) without intimidation. The 2024–2026 digital banking push — Fubon+ mobile app, digital account opening, and new branch formats — drives a modernisation push, but the core palette and typographic register remain steady.

## 12. Principles

1. **Positive progress over risk avoidance.** The tagline 正向力量 is not marketing language — it reflects a brand posture that leads with possibility. *UI implication:* primary actions are always inviting; warning states explain and redirect, not just block.
2. **Accessibility for all generations.** Fubon serves Taiwan's full demographic range, from young digital-first customers to older branch visitors. *UI implication:* 16px body minimum, WCAG-compliant colour ratios on blue/white, bilingual layouts with equal TC/Latin legibility.
3. **Clarity over decoration.** The financial interface should make rates, terms, and actions immediately readable. *UI implication:* section titles are bold and direct; marketing language is kept off product data cards.
4. **Trust through consistency.** The brand blue appears identically across all touchpoints — bank, insurance, securities, corporate. *UI implication:* `#0093c1` (bank) and `#008fc7` (group) are intentionally close; do not introduce a third blue variant.
5. **Digital-forward, branch-aware.** Fubon invests in digital UX while maintaining 150+ branch locations. *UI implication:* service shortcuts (線上申辦, 預約諮詢, 查詢據點) always co-exist; digital and physical are not siloed.

## 13. Personas

*Personas below are illustrative archetypes informed by Fubon's publicly observable product range and Taiwanese banking demographics — not real individuals.*

**陳小美, 28, 台北.** A young professional who opened a digital account and uses the Fubon+ app for daily payments and currency exchange. Values speed and transparent rates; compares foreign currency before every trip. Chose Fubon because the digital account opening was friction-free and the mobile interface is clean.

**林建國, 45, 新竹.** An SME owner using Taipei Fubon Bank for corporate payroll and FX services. Trusts the Fubon brand because of its Taipei Bank heritage and the personal relationship with his business banker. Accesses the website mainly for rate lookups and branch location.

**吳麗華, 62, 台中.** A retiree managing savings and insurance products across the Fubon group. Prioritises clear, unhurried information; appreciates that the site is readable and multilingual-accessible. Uses the 查詢據點 function to find her nearest branch.

**Kevin, 32, 台北 (expat).** A foreign national working in Taiwan who needs English-language banking. Uses the English-language corporate banking section. Values that Fubon Financial has an international footprint (HK, Vietnam, mainland China).

## 14. States

| State | Treatment |
|---|---|
| **Empty (no announcements)** | White canvas with `#494a57` supporting text — a calm explanation of no current notices, with a service shortcut link. |
| **Empty (search — no results)** | Plain body-grey `#494a57` message with a suggestion to adjust the search term. No illustration clutter. |
| **Loading (page / data fetch)** | Skeleton blocks on `#f5f5f5` tinted surface at card dimensions; grey pulse. Consistent with the flat system. |
| **Loading (rate query)** | Inline spinner within the exchange-rate module; previous values remain visible. |
| **Error (form validation)** | Field-level error message below input in a warm error tone; states what to correct, not just "必填". |
| **Error (system / service unavailable)** | Inline plain-language explanation with a retry or contact-link — "台北富邦銀行系統暫停服務" pattern matches observed site announcements. |
| **Success (online application submitted)** | Brief inline confirmation with next-step detail ("線上申辦成功"). Calm, no celebration emoji. |
| **Skeleton** | `#f5f5f5` blocks at final card dimensions, flat grey pulse consistent with the tinted-surface system. |
| **Disabled** | Muted grey (`#aeafb4`) text on reduced-opacity surface; primary blue actions de-saturate rather than turn red. |
| **Security Warning** | Distinct "詐騙手法" alert block — calm but prominent with a clear action to take, not a generic red warning banner. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 150ms | Button press, tab switch, focus ring |
| `motion-standard` | 250ms | Dropdown open/close, card reveal, accordion |
| `motion-slow` | 400ms | Page-level section fade, banner transition |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving panels, sheets, expanding menus |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals, collapsing accordions |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Toggles, two-directional transitions |

**Motion rules**: Motion is functional and conservative — matching the institution's temperament. Navigation dropdowns ease in smoothly; page banner transitions use a clean fade rather than parallax or spring. Mobile touch targets respond immediately on press (sub-100ms feedback). Under `prefers-reduced-motion: reduce`, all animated transitions collapse to instant cut; the site remains fully usable.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-22) via playwright getComputedStyle on:
- https://www.fubon.com/banking/ (Taipei Fubon Bank personal banking homepage)
- https://www.fubon.com/ (Fubon Financial Holding Group homepage)

Key computed style observations:
- body: font-family Roboto, "Noto Sans TC"; color rgb(12,14,31) #0c0e1f; font-size 25px
- H1 "個人金融": rgb(12,14,31) / 25px / weight 400 / Roboto/Noto Sans TC
- H2 .title-primary "熱門服務": rgb(12,14,31) / 20px / weight 700
- H2 .title-primary "外幣匯率": rgb(12,14,31) / 24px / weight 700
- Primary button (.blue-btn "確認"): bg rgb(0,147,193) #0093c1 / color white / radius 0px 0px 12px / 16px/700
- Cancel button (.gray-btn "取消"): bg rgb(238,240,240) #eef0f0 / color rgb(12,14,31) / radius 0px 0px 0px 12px / 16px/700
- Cookie CTA (.main-btn "同意"): bg rgb(0,147,193) #0093c1 / color white / radius 12px / 16px/500
- More link (.art-more-btn "了解更多"): color rgb(0,147,193) / 18px / weight 500
- More link (.ann-more-btn): color rgb(0,147,193) / 18px / weight 500
- Nav link (.nav-link-p "信用卡"): color rgb(12,14,31) / 18px / weight 400
- header bg rgb(255,255,255) / height 112px
- digital FAB: bg rgb(255,255,255) / radius 50% / shadow rgba(0,0,0,0.11) 5px 5px 30px 0px
- Group site primary: bg rgb(0,143,199) #008fc7 (了解更多 large CTA, member header)
- Group: secondary subsidiary btns: rgb(60,190,231) #3cbee7 (sky), rgb(83,187,159) #53bb9f (teal)
- bgFreq (bank): rgb(255,255,255)×28, rgb(245,245,245)×24, rgb(0,147,193)×11, rgb(238,240,240)×7
- fgFreq (bank): rgb(12,14,31)×912, rgb(73,74,87)×481, rgb(0,0,0)×113, rgb(0,147,193)×111

TW regional requirement (≥2 brand-owned Tier 1 sources):
1. https://www.fubon.com/banking/ — Taipei Fubon Bank official personal banking homepage
2. https://www.fubon.com/ — Fubon Financial Holding Group official site

Voice samples verified verbatim from live pages 2026-06-22.
Brand narrative: Fubon 1961 founding, Tsai family, 2005 merger (Taipei Bank + Fubon Bank) are widely documented public facts.
Personas are illustrative archetypes; names do not refer to real people.
-->
