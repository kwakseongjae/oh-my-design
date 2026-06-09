---
id: nexon
name: Nexon
country: KR
category: consumer-tech
homepage: "https://www.nexon.com"
primary_color: "#00de5a"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=www.nexon.com&sz=128"
verified: "2026-06-09"
added: "2026-06-09"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-09"
  note: "primary = live Nexon brand green (#00de5a, rgb(0,222,90)) measured on the home-page CTA with black label; chrome built on near-black #17191d text over white"
  colors:
    primary: "#00de5a"
    on-primary: "#000000"
    canvas: "#ffffff"
    ink: "#17191d"
    near-black: "#080410"
    body: "#737881"
    label: "#4a4e57"
    muted: "#919191"
    disabled: "#9fa1a7"
    pure-black: "#000000"
  typography:
    family: { sans: "NEXON Gothic Bold", fallback: "malgun gothic" }
    nav-link:   { size: 16, weight: 400, lineHeight: 1.20, use: "Primary GNB navigation link, ink color" }
    menu-link:  { size: 14, weight: 400, lineHeight: 1.20, use: "Secondary nav / sub-menu link" }
    cta:        { size: 14, weight: 700, lineHeight: 1.20, use: "Primary green CTA label, NEXON Gothic Bold" }
    body:       { size: 12, weight: 400, lineHeight: 1.20, use: "Standard reading text, footer copy" }
    label:      { size: 12, weight: 400, lineHeight: 1.20, tracking: -0.3, use: "Muted utility labels" }
    caption:    { size: 12, weight: 700, lineHeight: 1.20, use: "Bold footer / emphasis caption" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 20, xl: 24, xxl: 36, section: 48 }
  rounded: { sm: 0, md: 4, lg: 8, full: 9999 }
  shadow:
    flat: "none"
    ambient: "rgba(0,0,0,0.08) 0px 2px 8px"
    elevated: "rgba(0,0,0,0.16) 0px 8px 24px"
  components:
    button-primary: { type: button, bg: "#00de5a", fg: "#000000", radius: "0px", padding: "12px 24px", font: "14px / 700", use: "Primary green CTA, black label, NEXON Gothic Bold, sharp corners" }
    button-disabled: { type: button, bg: "#9fa1a7", fg: "#ffffff", radius: "0px", padding: "12px 24px", font: "14px / 400", use: "Inactive / disabled CTA, muted gray fill" }
    button-ghost: { type: button, bg: "#ffffff", fg: "#17191d", radius: "0px", padding: "10px 20px", font: "14px / 400", use: "Secondary text action, no fill, ink label" }
    nav-link: { type: tab, fg: "#17191d", radius: "0px", padding: "0px 16px", font: "16px / 400", use: "GNB top navigation item", active: "Nx bottom border #00de5a" }
    menu-item: { type: listItem, bg: "#ffffff", fg: "#17191d", radius: "0px", padding: "8px 16px", font: "14px / 400", use: "Dropdown / sub-nav list row" }
    card: { type: card, bg: "#ffffff", fg: "#17191d", radius: "4px", padding: "16px", use: "Game promo card on white canvas, ambient shadow" }
    badge: { type: badge, bg: "#00de5a", fg: "#000000", radius: "4px", padding: "2px 8px", font: "12px / 700", use: "NEW / event badge, brand green fill" }
    footer-label: { type: badge, fg: "#9fa1a7", radius: "0px", font: "12px / 700", use: "Bold footer label, muted gray" }
    input-text: { type: input, bg: "#ffffff", fg: "#17191d", radius: "4px", padding: "8px 12px", font: "14px / 400", use: "Search / login field, muted #919191 placeholder" }
  components_harvested: true
---

# Design System Inspiration of Nexon

## 1. Visual Theme & Atmosphere

Nexon's website is the digital storefront of one of Korea's largest game publishers, and its design reflects a deliberate split personality: an editorial, almost corporate calm in the chrome, broken by sudden bursts of high-voltage brand green. The page sits on a clean white canvas (`#ffffff`) with near-black ink (`#17191d`) for headings and navigation, but the moment a primary call-to-action appears, the system detonates its signature `#00de5a` -- an electric, arcade-bright green that reads as "press start." This is the green of a power-up, of a glowing console button, and it is used with restraint precisely so that each appearance lands like a hit.

The typographic backbone is **NEXON Gothic Bold**, the company's proprietary typeface, which carries the brand voice on every CTA and emphasis element. It falls back to `malgun gothic` for body copy, giving the running text a familiar, highly legible Korean-web baseline. The result is a hierarchy where the custom face does the shouting and the system face does the reading. Black text (`#000000`) sits directly on the green CTA -- a high-contrast, almost industrial pairing that refuses the soft white-on-color convention most consumer sites default to. The black-on-green combination is the single most identifiable Nexon design signal.

Geometry is sharp and confident. Buttons and nav items use zero or minimal corner radius, echoing the rectangular, pixel-grid heritage of game UI rather than the soft pill shapes of modern SaaS. Shadows are light and functional -- elevation exists to separate cards from the canvas, not to create atmosphere. The overall impression is of a company that takes its games' energy seriously but frames it inside a disciplined, grown-up corporate shell.

**Key Characteristics:**
- Signature arcade-green `#00de5a` reserved for primary CTAs and brand accents -- used sparingly for maximum impact
- Black label (`#000000`) directly on green -- the defining high-contrast Nexon pairing
- Proprietary **NEXON Gothic Bold** for CTAs and emphasis; `malgun gothic` fallback for body
- Near-black ink (`#17191d`) instead of pure black for headings and navigation
- Sharp, low-radius geometry (0-4px) echoing game-UI heritage
- Restrained, functional shadows -- elevation, not atmosphere
- Muted gray scale (`#737881`, `#4a4e57`, `#919191`, `#9fa1a7`) for hierarchy and utility text

## 2. Color Palette & Roles

### Primary
- **Nexon Green** (`#00de5a`): The signature brand color. Primary CTA backgrounds, brand accents, active-state underlines, event badges. An electric arcade green measured live as `rgb(0,222,90)` on the home-page CTA.
- **On-Primary Black** (`#000000`): Label color that sits directly on Nexon Green. The black-on-green pairing is the brand's most identifiable signal.
- **Pure White** (`#ffffff`): Page background, card surfaces, nav background.

### Ink & Text
- **Ink** (`#17191d`): Primary heading, navigation, and link text. A near-black that reads cleaner than pure black on white.
- **Near-Black Link** (`#080410`): Deepest link/text tone for high-emphasis inline links.
- **Body Gray** (`#737881`): Default body and secondary text color, measured on `body`.
- **Label Gray** (`#4a4e57`): Stronger secondary labels and sub-headings.
- **Muted Gray** (`#919191`): Utility labels and placeholder-adjacent text, often with -0.3px tracking.
- **Disabled Gray** (`#9fa1a7`): Inactive CTA fills and disabled control text.

### Pure Black
- **Pure Black** (`#000000`): CTA label on green, maximum-contrast utility.

## 3. Typography Rules

### Font Family
- **Primary**: `NEXON Gothic Bold` -- the proprietary brand face, used on CTAs, emphasis, and bold captions.
- **Fallback / Body**: `malgun gothic`, then `sans-serif` -- the running-text face for body copy and most navigation.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Nav Link | NEXON Gothic Bold / malgun | 16px | 400 | 1.20 | normal | Primary GNB items, `#17191d` |
| Menu Link | malgun gothic | 14px | 400 | 1.20 | normal | Sub-nav, dropdown rows |
| CTA | NEXON Gothic Bold | 14px | 700 | 1.20 | normal | Green CTA label, black text |
| Body | malgun gothic | 12px | 400 | 1.20 | normal | Standard reading text |
| Label | malgun gothic | 12px | 400 | 1.20 | -0.3px | Muted utility labels |
| Caption Bold | NEXON Gothic Bold | 12px | 700 | 1.20 | normal | Bold footer labels, `#9fa1a7` |

### Principles
- **Two-face system**: NEXON Gothic Bold for shouting (CTAs, emphasis), `malgun gothic` for reading (body, most nav). The custom face is a deliberate brand stamp.
- **Weight as emphasis**: 700 is reserved for CTAs and key labels; 400 carries everything else. The contrast between the two is the primary typographic signal.
- **Tight line-height**: Compact ~1.2 line-heights keep dense Korean-web layouts legible without wasted vertical space.
- **Small base size**: 12px body reflects the information-dense Korean portal convention; emphasis is created by weight and color, not large type.

## 4. Component Stylings

### Buttons

**Primary Green CTA**
- Background: `#00de5a`
- Text: `#000000`
- Padding: 12px 24px
- Radius: 0px (sharp)
- Font: 14px NEXON Gothic Bold, weight 700
- Use: Primary action -- "다운로드", "게임 시작", "지금 플레이"

**Disabled CTA**
- Background: `#9fa1a7`
- Text: `#ffffff`
- Padding: 12px 24px
- Radius: 0px
- Font: 14px weight 400
- Use: Inactive / unavailable action

**Ghost / Text Action**
- Background: `#ffffff`
- Text: `#17191d`
- Padding: 10px 20px
- Radius: 0px
- Use: Secondary text-only actions

### Navigation
- Clean horizontal GNB on white (`#ffffff`)
- Links: 16px, `#17191d` ink, NEXON Gothic Bold / malgun fallback
- Active item: Nexon Green (`#00de5a`) bottom border underline
- Sub-menu rows: 14px `malgun gothic`, `#17191d` on white

### Cards & Containers
- Background: `#ffffff`
- Radius: 4px
- Shadow (ambient): `rgba(0,0,0,0.08) 0px 2px 8px`
- Shadow (elevated): `rgba(0,0,0,0.16) 0px 8px 24px`
- Use: Game promo cards, event tiles on white canvas

### Badges
- Background: `#00de5a`
- Text: `#000000`
- Padding: 2px 8px
- Radius: 4px
- Font: 12px NEXON Gothic Bold, weight 700
- Use: NEW / event markers

### Inputs & Forms
- Background: `#ffffff`
- Border radius: 4px
- Text: `#17191d`
- Placeholder: `#919191` muted gray
- Padding: 8px 12px

---

**Verified:** 2026-06-09 (omd-add-reference live inspect)
**Tier 1 sources:** https://www.nexon.com, https://www.nexon.com/Main/Index (Korean home + main surface, live DOM)

## 5. Layout Principles

### Spacing System
- Base unit: 8px (with dense 4px micro-steps)
- Scale: 4px, 8px, 12px, 16px, 20px, 24px, 36px, 48px
- Notable: Dense spacing reflects the Korean game-portal convention of fitting many entry points (games, events, community) above the fold.

### Grid & Container
- Full-width hero banner for the featured game, edge-to-edge
- Below the hero: multi-column game grids and event tiles
- Centered content column for corporate/IR pages
- White canvas throughout, with cards as the primary content unit

### Whitespace Philosophy
- **Functional density**: Nexon packs many games and entry points into the layout; whitespace separates groups, not individual items.
- **Green as the spotlight**: In a dense gray-and-white field, the green CTA is the deliberate focal point that pulls the eye.

### Border Radius Scale
- Sharp (0px): Buttons, nav items, GNB -- the game-UI default
- Small (4px): Cards, badges, inputs
- Large (8px): Larger feature containers

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | `none` | Page background, nav, inline text |
| Ambient (Level 1) | `rgba(0,0,0,0.08) 0px 2px 8px` | Cards, hover lift |
| Elevated (Level 2) | `rgba(0,0,0,0.16) 0px 8px 24px` | Dropdowns, modals, featured tiles |

**Shadow Philosophy**: Nexon's elevation is purely functional. Shadows are neutral black at low alpha -- they exist to lift a card off the white canvas, not to add brand atmosphere. The brand energy comes entirely from color (`#00de5a`) and typography (NEXON Gothic Bold), never from decorative depth. This keeps the chrome calm so the game content and the green CTA carry all the visual voltage.

## 7. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | Single column, hamburger GNB, full-width CTAs |
| Tablet | 768-1024px | 2-column game grids |
| Desktop | >1024px | Full multi-column portal layout |

### Touch Targets
- CTAs use comfortable 12px vertical padding
- Nav items spaced for tap on mobile GNB
- Green CTA scales to full-width on mobile for thumb reach

### Collapsing Strategy
- GNB: horizontal links collapse to hamburger
- Game grids: multi-column reduce to 2-column then single
- Hero banner: maintains full-width, reduces internal padding
- Body type holds at 12-14px; emphasis stays weight-driven

## 8. Do's and Don'ts

### Do
- Reserve Nexon Green (`#00de5a`) for primary CTAs, active states, and brand accents -- scarcity is what makes it land
- Pair black (`#000000`) text directly on the green -- the high-contrast combo is the brand signal
- Use NEXON Gothic Bold for CTAs and emphasis; `malgun gothic` for body
- Use near-black ink (`#17191d`) for headings and nav instead of pure black
- Keep geometry sharp (0-4px radius) -- it echoes the game-UI heritage
- Keep shadows neutral and functional -- elevation, not atmosphere
- Use the gray scale (`#737881`, `#4a4e57`, `#919191`, `#9fa1a7`) for hierarchy

### Don't
- Don't overuse the green -- a page full of `#00de5a` kills its power-up impact
- Don't put white text on the green CTA -- black is the brand-correct label
- Don't use large pill radii on buttons -- Nexon's geometry is sharp and rectangular
- Don't add colored or heavy decorative shadows -- elevation is functional only
- Don't replace NEXON Gothic Bold on CTAs with a generic bold -- the proprietary face is the stamp
- Don't use pure black (`#000000`) for body headings -- `#17191d` reads cleaner

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Nexon Green (`#00de5a`) with black (`#000000`) label
- Background: Pure White (`#ffffff`)
- Heading / nav text: Ink (`#17191d`)
- Body text: Body Gray (`#737881`)
- Secondary label: Label Gray (`#4a4e57`)
- Muted / placeholder: Muted Gray (`#919191`)
- Disabled: Disabled Gray (`#9fa1a7`)

### Example Component Prompts
- "Create a primary CTA: `#00de5a` background, `#000000` text, 0px radius, 12px 24px padding, 14px NEXON Gothic Bold weight 700. Label '지금 플레이'."
- "Design a game promo card: white background, 4px radius, shadow `rgba(0,0,0,0.08) 0px 2px 8px`. Title 16px `#17191d`, body 12px `#737881`. Green `#00de5a` NEW badge with black text, 4px radius."
- "Build a GNB nav bar: white background, 16px `#17191d` links, active item with `#00de5a` bottom border underline."

### Iteration Guide
1. Green (`#00de5a`) is precious -- one or two appearances per viewport maximum
2. Black on green, always -- never white-on-color
3. NEXON Gothic Bold for CTAs/emphasis; malgun gothic for body
4. Headings are `#17191d`, body is `#737881`, labels step through `#4a4e57` / `#919191`
5. Sharp corners (0-4px); no pills
6. Shadows are neutral black, low alpha, functional only

---

## 10. Voice & Tone

Nexon's voice is that of an established game publisher speaking to two audiences at once: players, with energy and immediacy, and the market and partners, with measured corporate confidence. On player-facing surfaces the register is direct and inviting -- "지금 플레이", "다운로드", short imperative verbs that map to the green "press start" CTA. On corporate, IR, and careers surfaces the same brand restraint applies, but the tone shifts to the steady, factual register of a major listed company.

| Context | Tone |
|---|---|
| Game CTAs | Direct imperatives -- "지금 플레이", "사전등록", "다운로드". |
| Game/event copy | Energetic, benefit-forward, but not hype-stacked. |
| Corporate / IR | Measured, factual, the register of a publicly listed company. |
| Careers / About | Confident, mission-oriented, talent-focused. |

## 11. Brand Narrative

Nexon was founded in **1994** in Seoul by **Jake Kim (Kim Jung-ju)** and is widely credited with pioneering the **massively multiplayer online (MMO) graphical game** and the **free-to-play, item-based business model** that reshaped global game monetization. Its 1996 title *Nexus: The Kingdom of the Winds* (바람의나라) is recognized as one of the world's first commercially successful graphical MMORPGs. Over three decades Nexon grew into one of the largest game publishers in Asia, operating franchises such as *MapleStory*, *Dungeon&Fighter*, *KartRider*, *FIFA Online*, and *The Finals*, and is publicly listed (Nexon Co., Ltd. on the Tokyo Stock Exchange).

The brand identity is built around a single, confident gesture: the electric green "go" signal. In a category crowded with dark, fantasy-heavy game branding, Nexon's bright `#00de5a` on white reads as energetic, accessible, and modern -- a publisher's mark rather than a single game's skin. The proprietary **NEXON Gothic** typeface (released as a free public font family) reinforces a corporate identity that is consistent across dozens of game brands while remaining recognizably Nexon.

What the brand refuses: a single dominant game aesthetic imposed on the corporate shell. The white canvas and disciplined gray-and-green system act as a neutral frame so that each game's own art can shine through, while the green CTA and NEXON Gothic stamp keep the publisher's identity present on every screen.

## 12. Principles

1. **Green is the spark, not the field.** The brand green works because it is scarce. Used as the CTA and accent only, it stays a power-up; used everywhere, it would become wallpaper.
2. **Black on green, by design.** The high-contrast label pairing is intentional and industrial -- it signals confidence and refuses the soft default of white-on-color.
3. **A neutral frame for vivid games.** The white-and-gray chrome is deliberately calm so that diverse game art can carry the color. The publisher's restraint is what lets the products be loud.
4. **The typeface is the constant.** NEXON Gothic Bold appears across every game brand and every CTA -- one consistent voice unifying a varied portfolio.
5. **Sharp geometry signals games.** The low-radius, rectangular forms tie the corporate site back to the pixel-grid heritage of the medium.
6. **Energy without hype.** Player copy is immediate and direct; corporate copy is measured. Both avoid stacked superlatives.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Nexon audience segments (Korean and global players, returning veterans, prospective partners/investors), not individual people.*

**Min-jun Park, 24, Seoul.** University student and lifelong MapleStory player. Visits nexon.com to check events and download the launcher. Recognizes the green CTA instantly -- to him it means "the new event is live." Would be confused by a redesign that buried the play button under decorative chrome.

**Soo-yeon Lee, 33, Busan.** Returning player who quit years ago and is curious about a remaster. Scans the game grid quickly, trusts the clean corporate frame as a sign the company is stable and still investing. Values that the site loads fast and information is dense.

**David Chen, 41, Singapore.** Mid-market investor reviewing Nexon as a listed company. Lands on the IR/corporate surface, expects and finds a measured, factual register. The disciplined brand system reads to him as a sign of operational maturity.

**Hana Kim, 28, Seoul.** Designer evaluating Nexon for a job. Notices the proprietary NEXON Gothic typeface and the restraint of the green-on-white system, and reads it as a brand team that understands scarcity and consistency.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no events)** | White canvas, single line in `#737881` body gray: "예정된 이벤트가 없습니다." No illustration. |
| **Loading** | Neutral skeleton blocks in light gray at final dimensions, subtle shimmer. |
| **Error** | Inline message in muted gray with a clear retry text action. Plain, factual wording. |
| **Success (action done)** | Brief inline confirmation, no emoji. The green accent marks completion sparingly. |
| **Disabled (CTA)** | Green fill switches to disabled gray (`#9fa1a7`) with white text -- clearly inert, brand color withheld. |
| **Active (nav)** | Nexon Green (`#00de5a`) bottom-border underline on the current GNB item. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, focus, button press |
| `motion-standard` | 240ms | Dropdown, menu, card hover lift |
| `motion-slow` | 360ms | Hero banner carousel transitions |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Menus, hover, two-way transitions |
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Dropdowns, banner arrivals |

**Signature motions.**

1. **CTA hover.** The green CTA brightens slightly on hover using `motion-fast / ease-standard` -- a quick, responsive "ready" signal, no scale bounce.
2. **Hero banner carousel.** The featured-game banner crossfades or slides at `motion-slow`, giving each game a moment to register.
3. **Reduce motion.** Under `prefers-reduced-motion: reduce`, carousel auto-advance pauses and transitions collapse to near-instant; the site stays fully functional.

## 16. Do's and Don'ts

### Do
- Use Nexon Green (`#00de5a`) as the scarce, high-impact CTA and accent color
- Pair black (`#000000`) on the green; near-black ink (`#17191d`) for headings
- Apply NEXON Gothic Bold on CTAs and emphasis, `malgun gothic` for body
- Keep corners sharp (0-4px) and shadows neutral/functional
- Step text hierarchy through the gray scale (`#737881`, `#4a4e57`, `#919191`, `#9fa1a7`)
- Let the white-and-gray frame stay calm so game art and the green CTA carry the energy

### Don't
- Don't flood the layout with green -- scarcity is the whole point
- Don't use white text on the green CTA
- Don't use pill/large radii or colored decorative shadows
- Don't swap NEXON Gothic Bold for a generic bold on CTAs
- Don't use pure black (`#000000`) for body headings -- prefer `#17191d`

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Token-level claims (sections 1–9) are sourced from a live Playwright
getComputedStyle inspection of https://www.nexon.com (2026-06-09):
  - Primary CTA: background rgb(0,222,90) = #00de5a, label rgb(0,0,0) = #000000,
    font "NEXON Gothic Bold" 14px weight 700.
  - Disabled CTA: background rgb(159,161,167) = #9fa1a7, white text.
  - Heading/link ink: rgb(23,25,29) = #17191d; near-black link rgb(8,4,16) = #080410.
  - Body: rgb(115,120,129) = #737881; label rgb(74,78,87) = #4a4e57;
    muted rgb(145,145,145) = #919191 (tracking -0.3px).
  - Body font fallback: "malgun gothic", "sans-serif".

Brand narrative (§11) uses widely documented public facts:
  - Nexon founded 1994 in Seoul by Jake Kim (Kim Jung-ju).
  - Nexus: The Kingdom of the Winds (1996) among the first graphical MMORPGs.
  - Pioneer of the free-to-play / item-based monetization model.
  - Franchises: MapleStory, Dungeon&Fighter, KartRider, FIFA Online, The Finals.
  - NEXON Gothic released as a free public typeface family.

Personas (§13) are fictional archetypes informed by publicly observable
Nexon audience segments, not real individuals. Interpretive claims about
brand intent ("green as scarce power-up", "neutral frame for vivid games")
are editorial readings connecting the measured design tokens to Nexon's
publicly visible positioning, not official Nexon statements.
-->
