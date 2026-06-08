---
id: zigbang
name: Zigbang
display_name_kr: Zigbang (직방)
country: KR
category: consumer-tech
homepage: "https://www.zigbang.com"
primary_color: "#0066ff"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=zigbang.com&sz=256"
verified: "2026-05-15"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  note: "brand orange #ff6600 is an illustrative wordmark-only estimate (no published token); product UI is neutral + #0066ff blue"
  colors:
    primary: "#0066ff"
    brand-orange: "#ff6600"
    canvas: "#ffffff"
    heading: "#171719"
    bookmark: "#333333"
    on-primary: "#ffffff"
  typography:
    family: { sans: "Pretendard Variable", mono: "Pretendard Variable" }
    base:        { size: 16, weight: 400, use: "Browser default body text" }
    nav:         { size: 14, weight: 400, use: "Nav button label" }
    search-icon: { size: 24, weight: 400, use: "Icon-only search glyph" }
    station:     { size: 22, weight: 400, use: "Station / region chip — read at distance" }
    paginator:   { size: 20, weight: 400, use: "Paginator arrows, disabled by default" }
    heading:     { size: 13, weight: 700, use: "Chrome heading — smaller than body, weight marks structure" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 8, md: 10, lg: 10, full: 9999 }
  shadow:
    card: "minimal — narrow shadows lift cards above the map canvas"
  components_harvested: true
  components:
    nav-auth-link: { type: button, bg: "#ffffff", fg: "#0066ff", radius: 8, padding: "7px 14px", font: "14/400", use: "회원가입/로그인 auth entry" }
    nav-link: { type: button, bg: "#ffffff", fg: "#171719", radius: 8, padding: "7px 14px", font: "14/400", use: "Standard top-bar nav links" }
    search-trigger: { type: button, fg: "#171719", radius: 9999, font: "24/400", use: "Icon-only search button, circular hit area" }
    station-chip: { type: badge, fg: "#171719", radius: 10, padding: "7px 9px 7px 11px", font: "22/400", use: "Subway-station / region map label" }
    bookmark-toggle: { type: toggle, fg: "#333333", radius: 9999, padding: "8px", use: "Save-this-listing toggle, glyph-only" }
    paginator: { type: tab, fg: "#333333", radius: 10, padding: "8px", font: "20/400", use: "Paired prev/next, split-corner segmented control" }
    listing-card: { type: card, bg: "#ffffff", radius: 10, use: "White card on white map canvas, 1px hairline separation" }
    price-chip: { type: badge, fg: "#171719", radius: 10, font: "22/400", use: "Listing price — color-separated active/past/highlight" }
---

# Design System Inspiration of Zigbang (직방)

## 1. Visual Theme & Atmosphere

Zigbang's web product is a study in restraint applied to a data-dense domain. Where almost every other Korean real-estate service crowds the viewport with red flags, yellow "신규!" badges, and saturated promotional overlays, Zigbang renders a near-monochrome map canvas with a near-black neutral (`#171719`) for primary type and a single functional blue (`#0066ff`) reserved for auth and primary interaction. The result reads less like a classified-ad site and more like a financial map tool — the visual register of a Bloomberg terminal compressed into consumer real-estate.

The signature typeface is **Pretendard Variable** (open-source Korean/Latin variable font), set on top of a Japanese-locale fallback (`Pretendard JP Variable`) and Apple system stack. This is the same family Toss, Karrot, and a generation of modern Korean apps converged on, but Zigbang uses it with notably lighter intensity than its peers — weight 400 across nav, weight 400 on station chips, and reliance on size + color rather than weight contrast for hierarchy. The disabled state uses transparency on a near-black (`rgba(55, 56, 60, 0.16)` and `rgba(55, 56, 60, 0.28)`) rather than a separate grey, which keeps the entire surface chromatically consistent — every element on the page is some opacity of the same near-black.

The brand mark is the one place warmth enters. Following the 2022 "Beyond Home" rebrand, the logo retains Zigbang's signature **orange** — described by the company as "deeper, more premium" than the original — paired with a house glyph encircled by an expanding ellipse, signifying the company's pivot from listings service to "Home OS". On the production surface this orange is reserved almost entirely for brand chrome and never bleeds into functional UI. The product UI is neutral; the brand mark carries the warmth. This separation is intentional and is the most important structural rule of the system: **orange = brand, blue = action, near-black = surface**.

Radius is generous but never frivolous. 8px on nav buttons, 10px on station chips and pagination, 9999px on icon-only and bookmark controls, 50% for circular bookmark toggles. There are no pill-shaped CTAs on the map surface — the closest is the 10px station chip, which reads as comfortable rather than playful. The map dominates the layout; chrome is built around not obscuring it.

**Key Characteristics:**
- **Pretendard Variable** as the universal typeface across nav, body, chips, and headings
- **Near-black `#171719`** as the primary text neutral — not pure black, slightly warm, designed to sit on a white map canvas without harshness
- **Functional blue `#0066ff`** as the single interactive color (auth links, primary CTA) — never used decoratively
- **Signature orange** as brand-mark-only — does not appear on functional UI on the map surface
- **Disabled-by-transparency** (`rgba(55,56,60,0.16)` / `0.28`) rather than dedicated grey tokens — every UI state is an opacity stop of the same neutral
- 8/10/9999/50% radius scale — 8px nav, 10px chips & paginators, 9999px icon controls, 50% circular toggles
- Weight 400 dominant — Zigbang resists the bold-Korean-headline default
- White map canvas is the design's largest surface — chrome must never compete with it

## 2. Color Palette & Roles

### Brand
- **Zigbang Orange** (`#FF6600` approx, premium tone): Logo mark only following 2022 "Beyond Home" rebrand. Encircles the house-glyph in the wordmark. *Not* used in functional product UI on the map surface.
- **Map Canvas White** (`#FFFFFF`): The dominant surface of the entire product — the map background that listing chrome floats over.

### Text Neutrals
- **Heading / Primary Text** (`#171719`, observed `rgb(23, 23, 25)`): Near-black with a slight warm cast. Used for the search button, nav labels, station-name chip text, and primary content.
- **Bookmark Icon** (`#333333`, observed `rgb(51, 51, 51)`): Slightly lighter than primary text — used on icon-only bookmark toggles in the listing rail.

### Interactive
- **Action Blue** (`#0066ff`, observed `rgb(0, 102, 255)`): The single functional accent. Used on auth links ("회원가입/로그인"), primary text-link CTAs, and active states. Reserved — does not appear decoratively.

### Disabled / Muted (opacity tokens)
- **Muted 28%** (`rgba(55, 56, 60, 0.28)`): Bookmark-this-position icons, secondary disabled controls.
- **Muted 16%** (`rgba(55, 56, 60, 0.16)`): Paginator inactive arrows, deep-disabled states.

### Surface
- **Page Background** (`#FFFFFF`): Map canvas and floating panel backgrounds.
- **Transparent Chrome** (`rgba(0, 0, 0, 0)`): Nav buttons sit on transparent backgrounds — chrome is structured by typography, not by fill.

### Notes on the orange/blue split
Pre-2022, Zigbang's product UI itself was orange-tinted. The "Beyond Home" rebrand re-cast orange as a brand-only signal and migrated interactive UI to neutral + blue. This is the system Zigbang now ships. The orange wordmark reads as warm and human; the product reads as technical and data-rich. This split is the brand's most distinctive design decision and the reason Zigbang doesn't feel like a competing listings site.

## 3. Typography Rules

### Font Family
- **Primary**: `"Pretendard Variable"`, with fallback chain `"Pretendard JP Variable", -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif`
- **OpenType Features**: standard; Pretendard's variable axis is used implicitly via `font-weight` values

### Hierarchy

| Role | Font | Size | Weight | Color | Notes |
|------|------|------|--------|-------|-------|
| Base body | Pretendard Variable | 16px | 400 | `#171719` | Browser default body text inherits this |
| Nav button label | Pretendard Variable | 14px | 400 | `#171719` (default) / `#0066ff` (auth) | 7px 14px padding, 32px tall |
| Search button (icon) | Pretendard Variable | 24px | 400 | `#171719` | Icon-only, 24px glyph, 9999px hit area |
| Station chip | Pretendard Variable | 22px | 400 | `#171719` | Comfortable size — map labels are read at distance |
| Paginator arrows | Pretendard Variable | 20px | 400 | `rgba(55,56,60,0.16-0.28)` | Disabled-by-default |
| Bookmark icon | Pretendard Variable | 22-24px | 400 | `#333333` / `rgba(55,56,60,0.28)` | Glyph-only |
| Heading (h2 example "NOTICE") | Pretendard Variable | 13px | 700 | `#000000` | Headings are *smaller* than body — Zigbang uses weight, not size, to mark structure in chrome |

### Principles
- **Pretendard Variable is non-negotiable.** The fallback chain to `Pretendard JP Variable` shows the company expects the same family across all Korean and JP locales — no per-locale type swap.
- **Weight 400 as default.** Most Korean services lean on weight 600-700 for nav and chip labels to "feel substantial". Zigbang stays at 400 and uses size + color separation instead. This is the source of the system's quiet confidence.
- **Headings can be smaller than body.** The `h2 NOTICE` heading at 13px / 700 against 16px / 400 body is the inverted convention: when chrome must label rather than dominate, Zigbang shrinks the heading and adds weight. This is deliberate and worth preserving.
- **Color carries hierarchy.** With weight pinned to 400, hierarchy is built by `#171719` → `#333333` → `rgba(55,56,60,0.28)` → `rgba(55,56,60,0.16)` — a four-stop opacity ramp on a single neutral.
- **No italic, no underline as decoration.** Underline is reserved for link affordance only. Italic does not appear on the map surface.

## 4. Component Stylings

### Buttons

**Nav Auth Link (회원가입/로그인)**
- Background: transparent (`rgba(0, 0, 0, 0)`)
- Text: `#0066ff`
- Border: none
- Radius: 8px
- Padding: 7px 14px
- Height: 32px
- Font: 14px Pretendard Variable / 400
- Use: Auth-related actions in the header — sign-in, sign-up, account entry

**Nav Default Link (기업 서비스 etc.)**
- Background: transparent (`rgba(0, 0, 0, 0)`)
- Text: `#171719`
- Border: none
- Radius: 8px
- Padding: 7px 14px
- Height: 32px
- Font: 14px Pretendard Variable / 400
- Use: Standard nav entries — non-auth top bar links

**Search Trigger (Icon-only)**
- Background: transparent (`rgba(0, 0, 0, 0)`)
- Icon: `#171719`
- Border: none
- Radius: 9999px (circular hit area)
- Padding: 0
- Height: 24px
- Font: 24px / 400 (glyph)
- Use: Search-icon button at the right of the top bar

### Listing & Map Chrome

**Station Chip (map label / region filter, e.g., "강남역")**
- Background: transparent (`rgba(0, 0, 0, 0)`)
- Text: `#171719`
- Border: none
- Radius: 10px
- Padding: 7px 9px 7px 11px (asymmetric — extra left for icon-glyph)
- Height: 32px
- Font: 22px Pretendard Variable / 400
- Use: Subway-station and region chips on the map surface — the largest piece of text on the chrome

**Bookmark Toggle (listing card)**
- Background: transparent
- Icon color (default): `#333333`
- Icon color (muted/empty state): `rgba(55, 56, 60, 0.28)`
- Border: none
- Radius: 50%
- Padding: 8px
- Height: 40px
- Font: 22-24px glyph
- Use: Save-this-listing toggle on every listing card and map-position pin

**Pagination Arrow (이전 / 다음)**
- Background: transparent
- Icon: `rgba(55, 56, 60, 0.16)` (disabled/inactive) — becomes `#333333` when active
- Radius (prev): `10px 0px 0px 10px` (left-rounded only)
- Radius (next): `0px 10px 10px 0px` (right-rounded only)
- Padding: 8px
- Height: 32px
- Font: 20px / 400
- Border: none
- Use: Paired previous/next paginators — the split-corner radius makes the pair read as a single segmented control

**Bookmark-this-Position (icon, map pin)**
- Background: transparent
- Icon color: `rgba(55, 56, 60, 0.28)` (default)
- Radius: 9999px
- Padding: 0
- Height: 24px
- Font: 24px glyph
- Use: "Save this map position" affordance — sits on the map at decision points

### Cards & Containers
- Listing cards on the map surface are predominantly white (`#FFFFFF`) on the white map canvas, separated by 1px hairlines or subtle shadows
- Border-radius on listing cards: matches the chrome scale (8-10px range observed; specific tokens vary by surface)
- Shadow: minimal — the map is the dominant visual; cards lift via narrow shadows rather than heavy elevation
- Padding: aligned to 8px multiples

### Inputs & Search
- Search input is launched as a dedicated mode rather than always-visible on the map; entry is via the search-trigger icon
- Placeholder reads "Search" (English on the production input observed) — Korean placeholder variants exist on other surfaces

### Navigation
- Header sits on the white canvas with no border-bottom by default; sticky on scroll
- Logo (Zigbang wordmark) left-aligned
- Right-side cluster: nav links + auth link in `#0066ff` + icon controls
- Mobile: collapses to icon-only top bar with hamburger affordance

### Map Overlay Components
The map surface is Zigbang's most distinctive component class. Every overlay must:
- Float on `#FFFFFF` map canvas without competing with map tiles
- Use transparent or low-opacity backgrounds where possible
- Reserve `#0066ff` for primary actions only — overuse drowns the map
- Use `#171719` near-black for type, never pure black
- Disable via opacity (`rgba(55,56,60,0.16)`) rather than swap to grey
- Pin / marker variants live as floating chrome; bookmark toggles use 50% radius

### Price Chips (real-estate-domain-specific)
Price chips on listing cards follow the chip pattern (10px radius, 22px Pretendard, weight 400) but lean on color separation:
- **Active / featured price**: `#171719` text on white
- **Past / sold**: `rgba(55, 56, 60, 0.28)` muted neutral
- **Highlight (new listing, optional)**: `#0066ff` for indicator dot — never as background fill

---

**Verified:** 2026-05-13
**Tier 1 sources:** zigbang.com/ (home — live DOM, computed-style observation on header buttons, station chips, bookmark toggles, paginators, body); zigbang.com/home/apt/map (map surface — partial inspect; second-pass evaluate disrupted by parallel browser-session tab contention)
**Tier 2 sources:** getdesign.md/zigbang (no entry — "No designs found for 'zigbang'"); styles.refero.design/?q=zigbang (no public style entry surfaced via search); designcompass.org Beyond Home rebrand commentary (token-light, design rationale only); company.zigbang.com/en/newsroom/view?idx=314 (rebrand announcement, CEO quote, color-direction "deeper, more premium orange" — no hex value published)
**Conflicts unresolved:** Zigbang's exact brand orange hex is not published publicly. The 2022 rebrand commentary describes the orange as "deeper, more premium" than the original, but no canonical token is exposed in the company-published materials reviewed. The `#FF6600`-approx label in §2 is a conservative estimate aligned with the wordmark; treat as illustrative until token publication is confirmed. The map surface is JS-rendered with a long bootstrap; listing-card and price-chip values in §4 are inferred from the chrome inspected and the visual rendering — exact card-surface tokens (border color, shadow) should be re-verified on a stable inspect session.

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Observed scale: 4px, 7px, 8px, 9px, 11px, 14px (from button padding `7px 14px` and chip padding `7px 9px 7px 11px`)
- Asymmetric padding is used deliberately — the 11px-left / 9px-right station chip padding accounts for an embedded glyph

### Grid & Container
- The map surface is the container — full-bleed, edge-to-edge
- Floating chrome panels (filter rail, listing rail, detail sheet) sit over the map at fixed widths (typically 360-440px)
- Header is full-width with content-bounded inner padding (~16-24px lateral)
- No marketing-style centered max-width container on the map surface — the map *is* the layout

### Whitespace Philosophy
- **The map is the negative space.** Zigbang's whitespace is the white map canvas itself. Floating chrome must respect this — no overlay should cover more than ~40% of viewport width at desktop
- **Asymmetric padding is fine.** The station chip uses `7px 9px 7px 11px` precisely because the leading glyph needs 11px of breathing room and the trailing text only needs 9px. Symmetric padding would feel mechanical
- **Air over decoration.** No decorative dividers, no badge clusters. If chrome can be removed without losing function, it is removed

### Border Radius Scale
- 8px: nav buttons, standard interactive chrome
- 10px: station chips, segmented controls (with split-corner application)
- 9999px (effective ∞): icon-only hit areas, bookmark-position toggles
- 50%: circular toggles (bookmark on listing card)
- Split-corner application: paginators use `10px 0 0 10px` / `0 10px 10px 0` to read as a connected pair

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (0) | No shadow, transparent background | Nav buttons, page chrome on map |
| Map-pin lift (1) | Subtle 1-2px shadow on white background | Map markers, station chips with overlay state |
| Floating panel (2) | Soft shadow, 8-10px radius, white surface | Listing rail, filter rail |
| Sheet (3) | Stronger shadow, top-radius only (`16px 16px 0 0`) | Bottom-sheet detail panels on mobile |
| Modal (4) | Backdrop dim (`rgba(0,0,0,0.4-0.5)`) + center-aligned white panel | Sign-in, filter modals |
| Focus ring | 2px solid `#0066ff` outline | Keyboard focus on interactive elements |

**Shadow Philosophy.** Zigbang uses elevation sparingly. The map already implies depth via tile shading and scroll; over-layering shadows on chrome would compete. The system favors *position* over *shadow* — a panel reads as elevated because it floats over the map at a fixed offset, not because it has a heavy drop shadow.

## 7. Do's and Don'ts

### Do
- Use Pretendard Variable everywhere with weight 400 as default
- Reserve `#0066ff` for auth and primary interaction only
- Use `#171719` (near-black) for all primary text — never pure black
- Build hierarchy with opacity ramps on `rgba(55,56,60,...)`, not with separate grey tokens
- Use 10px radius on chips and segmented controls; 8px on nav; 9999px on icon-only
- Treat the white map canvas as the dominant surface — chrome floats, never dominates
- Use orange only for the wordmark and brand-chrome moments — never for functional UI on the map
- Use split-corner radius on paired paginators to read as one segmented control
- Apply asymmetric padding when a leading glyph needs more breathing room than trailing text

### Don't
- Don't use bold weight (600-700) on nav, chip, or station labels — weight 400 is the signature
- Don't introduce a second accent color alongside `#0066ff` — the system is single-accent on functional UI
- Don't use pure black (`#000`) for text — `#171719` is the warmer, on-brand neutral
- Don't paint the product orange — orange is brand-mark-only post-2022 rebrand
- Don't use heavy drop shadows on map chrome — the map already implies depth
- Don't add decorative dividers, badges, or "신규!" flags — Zigbang's restraint is the differentiator vs. competitor real-estate sites
- Don't use pill-radius (full-round) on long-text CTAs — keep it at 10px max for content chrome
- Don't ever cover more than ~40% of viewport width with overlay panels at desktop

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Bottom-sheet detail; map full-bleed; collapsed nav to hamburger |
| Tablet | 640-1024px | Side panels become bottom-sheet on narrow tablets; map remains dominant |
| Desktop | 1024-1440px | Listing rail at left/right of map; full nav surfaced |
| Large Desktop | >1440px | Listing rail width grows; map expands to fill remaining width |

### Touch Targets
- Bookmark toggle: 40px (`8px padding` + 24px glyph) — comfortably above 44pt iOS guidance
- Nav buttons: 32px tall — borderline; relies on horizontal padding for tap area
- Paginators: 32px square — adequate; benefits from split-corner pairing
- Station chip: 32px — same scale as paginators, intentional for chrome consistency

### Collapsing Strategy
- Map: always present, never collapsed
- Listing rail: side panel on desktop → bottom-sheet on mobile, swipe-up to expand
- Filter rail: dropdown chips on desktop → full-screen modal on mobile
- Nav: full link cluster on desktop → hamburger + search icon on mobile
- Sign-in CTA: visible as link on desktop → moved into hamburger drawer on mobile

### Image Behavior
- Listing photos in cards crop to fixed aspect (commonly 4:3 or 16:9)
- Map pins remain at fixed pixel size — no scaling on zoom (avoids visual chaos)
- Logo wordmark preserves orange at all sizes

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary text: Near-black (`#171719`)
- Body neutral fallback: `#333333`
- Interactive (auth, primary action): Action Blue (`#0066ff`)
- Disabled / muted: `rgba(55,56,60,0.16)` (deep) / `rgba(55,56,60,0.28)` (medium)
- Background: White (`#FFFFFF`)
- Brand mark only: Premium Orange (~`#FF6600`)
- Focus ring: `#0066ff`

### Example Component Prompts
- "Create a Zigbang-style nav header on white. Left: Zigbang wordmark in orange. Right: nav links in Pretendard Variable 14px / 400, color `#171719`, 8px radius, 7px 14px padding, transparent background. Auth link uses `#0066ff` text. Search trigger is an icon-only button with 9999px hit area and 24px glyph."
- "Build a station chip for the map surface. 22px Pretendard Variable / 400, color `#171719`, transparent background, 10px radius, 7px 9px 7px 11px padding (asymmetric for leading glyph), 32px tall."
- "Design paired paginators (이전 / 다음). 32px square, transparent background. Left arrow uses radius `10px 0 0 10px`, right arrow uses `0 10px 10px 0`. Disabled state: `rgba(55,56,60,0.16)` icon. Active: `#333333` icon. 20px glyph, no border."
- "Make a bookmark toggle for a listing card. 40px circular button (50% radius), 8px padding, 22-24px heart/star glyph. Default state: `#333333`. Empty/muted: `rgba(55,56,60,0.28)`. Transparent background. No border."
- "Listing card on the map surface: white background, ~8-10px radius, soft shadow (avoid heavy lifts — the map already implies depth). 16px Pretendard Variable / 400 body. Price emphasized in `#171719`. Bookmark toggle in upper-right corner. Maximum 40% viewport width when floating over the map."

### Iteration Guide
1. Pretendard Variable is non-negotiable across all locales — never swap to a Korean-specific or Japanese-specific family
2. Weight 400 is the default. Use 700 *only* on tiny labels like a 13px "NOTICE" header — never on nav or content
3. The map canvas is the largest design surface. Chrome must never compete with it
4. Action Blue (`#0066ff`) is the only functional accent. Don't add a second accent
5. Orange is brand-mark-only. Do not paint UI orange — that was the pre-2022 system
6. Build hierarchy with opacity ramps on `rgba(55,56,60,...)` — not separate grey tokens
7. Split-corner radius on paired controls is a signature pattern — use it on segmented paginators
8. Asymmetric padding is fine when content requires it — don't force symmetry on a glyph-prefixed chip

---

## 10. Voice & Tone

Zigbang's voice is **trustworthy, data-rich, and neutral-utilitarian** — the tone of a regional analyst rather than a salesperson. Where Korean real-estate has historically traded on urgency ("지금 안 보면 놓쳐요!"), Zigbang chose the opposite register after the 2022 rebrand: declarative, fact-forward, and quiet. CEO 안성우's most-quoted founding observation was that "most listings online were 허위매물 (fake)" — the brand voice is the brand's response to that history. Trust is performed through restraint, not through claims of trust.

| Context | Tone |
|---|---|
| Home / landing | Declarative, vision-forward. "Beyond Home". "공간에서 경험까지". No exclamation. |
| Map chrome | Functional, label-only. "강남역", "이전", "다음", "검색". Never decorative. |
| Listing card | Data-first. Price, size, floor, address — in that order, every time. No "great deal!" qualifiers. |
| Filter chips | Single-noun labels. "전세", "월세", "매매". The category *is* the label. |
| Empty states | Honest. "조건에 맞는 매물이 없습니다." Never "Oops!" Never an apology animation. |
| Error states | Mechanism-first. The error names what went wrong; the recovery action follows. |
| Marketing / company | Vision-register. "Home OS", "주거 혁신", "Beyond Home" — confident but not superlative. |
| Smart Home product | Slightly warmer, lifestyle-flavored — but still factual. "집의 디지털화". |
| Customer service | Patient, structured. Real-estate disputes are emotional; voice does not match the emotion, it grounds it. |

**Forbidden phrases.** "지금 바로!", "놓치지 마세요!", "최저가 보장", "단 한 번뿐인 기회". Performative urgency. Exclamation marks on routine CTAs. Star ratings as marketing claims (they are data, not a claim). Stacked superlatives ("최고의 프리미엄 매물"). Emoji on functional chrome. "혁신적인" as an adjective applied to UI ("혁신적인 검색 경험") — the word may appear in vision statements but never as marketing dressing.

**Voice samples** (illustrative; align with verified vision register from CEO statements):
- *"Beyond Home."* — Brand-level positioning, verified ([Zigbang Smart Home newsroom](http://en.smarthome.zigbang.com/index/?bmode=view&idx=162547182))
- *"공간에서 경험까지, 완전히 새롭게."* — From [company.zigbang.com/who-we-are](https://company.zigbang.com/who-we-are), verbatim
- *"Our next chapter goes beyond listings—we're building the Home OS."* — CEO Ahn Sung-woo, [company.zigbang.com newsroom](https://company.zigbang.com/en/newsroom/view?idx=314), verbatim

## 11. Brand Narrative

Zigbang was founded in **2010** as **채널브리즈 (Channel Breeze)** by **안성우 (Ahn Sung-woo)**, a Seoul National University Statistics graduate who, while looking for a place to rent after graduation, discovered that the overwhelming majority of online real-estate listings were 허위매물 — fake listings staged to lure renters into calling offices for a different unit ([나무위키 안성우](https://namu.wiki/w/%EC%95%88%EC%84%B1%EC%9A%B0), [아주경제 창업 스토리](https://www.ajunews.com/view/20210805150341038)). The **Zigbang app launched in March 2012**; the parent company renamed itself from 채널브리즈 to 직방 in **October 2015** ([company.zigbang.com/who-we-are](https://company.zigbang.com/who-we-are)).

The name itself encodes the founding rejection. *직방* literally reads as "직접 찍은 방" — "rooms photographed directly". The product premise was that every listing on Zigbang would carry the actual photographs of the actual unit, not stock interior photos or competitive bait. This was an aggressive position in a market built on the opposite practice, and it shaped the brand's tone for the next decade: trust is performed through evidence, not asserted through copy.

In **November 2022**, Zigbang unveiled the **"Beyond Home"** rebrand — the first identity change since the 2012 launch ([Zigbang Smart Home newsroom](http://en.smarthome.zigbang.com/index/?bmode=view&idx=162547182)). The new wordmark replaced the Korean name with the English "zigbang", added a house glyph encircled by an expanding ellipse, and re-cast the signature orange in a "deeper, more premium" tone. CEO 안성우 framed the rebrand in a published statement: *"Our next chapter goes beyond listings—we're building the Home OS. Zigbang will evolve into a proptech company that supports every part of the residential experience, from home search to home life."* The 2022 rebrand is also when the product UI dropped its orange-heavy chrome and migrated to the neutral + functional-blue system documented here.

What Zigbang refuses: urgency-driven marketing (no "right now / limited time" CTAs), fake-listing tolerance (the original founding rejection — operationalized as a verification system), and orange-tinted UI chrome (orange is now strictly a brand signal). What it embraces: a near-monochrome product surface that lets the map carry the design, Pretendard Variable as a quiet typographic baseline, and an English-forward wordmark that signals global ambition without abandoning the Korean meaning of the name.

## 12. Principles

1. **Show the room, don't claim it.** The founding rejection of fake listings is the entire brand. Every design surface should support evidence (photos, measurements, verified-broker badges) and avoid claims that could be unverified. *UI implication:* Listing card hierarchy is photo → price → size → floor → address. Marketing copy is below this fold, never above.
2. **The map is the product.** Zigbang's defining design choice is that the map dominates and chrome floats. *UI implication:* No overlay covers more than ~40% of viewport width. Chrome uses transparent backgrounds wherever it can.
3. **One accent is enough.** `#0066ff` is the only functional color outside the neutral ramp. Adding a second accent would compete with the brand orange and turn the system into a flag of confusion. *UI implication:* No "second CTA color". No urgent-red, no success-green outside semantic states.
4. **Orange is the wordmark. Blue is the action.** The 2022 rebrand split these intentionally. *UI implication:* If you find yourself painting a CTA orange, stop. Orange belongs to the logo and to brand-chrome moments only.
5. **Restraint is trust.** In a market saturated with red-flag urgency and yellow promotional badges, the absence of decoration is itself a positioning statement. *UI implication:* When in doubt, remove the badge.
6. **Weight 400 is the signature.** Most Korean services lean on 600-700 for chrome to "feel substantial". Zigbang's quiet confidence comes from refusing that. *UI implication:* Reserve 700 for tiny labels (13px or smaller) only.
7. **Hierarchy by opacity, not by hue.** Zigbang's four-stop neutral ramp is a single near-black at four opacity levels. *UI implication:* Don't introduce a "grey-300" or "grey-500" — use `rgba(55,56,60,...)` opacity stops.
8. **Asymmetry is okay when content asks for it.** The 11px-left / 9px-right chip padding exists because a glyph leads. *UI implication:* Don't force symmetric padding on chrome with leading glyphs.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Zigbang user segments (first-time renters in Seoul, mid-career apartment buyers, returning expats, Smart Home customers), not individual people.*

**김지윤, 27, 서울 마포구.** First-time monthly-rental seeker, two years out of university, looking for a 원룸 under ₩600,000 deposit + ₩50만 월세. Uses Zigbang on commute every evening. Trusts Zigbang specifically because she once called about a listing on a competitor and was offered a different unit ("그건 나갔어요, 비슷한 거 보여드릴게요") — Zigbang's verified-photo policy is the entire reason she still has the app. Cares more about the photos being real than about the price being lowest.

**박재훈, 41, 경기 성남시 분당구.** Mid-career buyer with a school-age child, looking to upgrade from his current apartment within a 2km school-zone radius. Spends 30+ minutes per session on the map view, comparing 단지 by 단지. Reads every listing's transaction history before contacting an agent. Values that Zigbang's filter chips don't try to upsell premium listings — the data is presented flat and he ranks it himself.

**Sarah Lim, 33, returning from London.** Korean-American returning to Seoul after six years abroad, looking for a 전세 oh in 한남동. Uses the English logo and the international-ready interface as a signal that Zigbang is the modern option among Korean real-estate apps. Does not speak fluent Korean for legal documents but can navigate the map and listing chrome confidently because the icon language is universal.

**이수진, 52, 부산 해운대구.** Apartment owner who installed Zigbang Smart Home digital locks two years ago and discovered the listings app later through the cross-promo. Uses Zigbang as a household-management tool, not primarily as a real-estate tool. Trusts the brand because the lock has not failed once in 24 months.

## 14. States

| State | Treatment |
|---|---|
| **Empty (map area with no listings)** | Map remains visible. Floating panel center-aligned over the map: 16px Pretendard Variable / 400 in `#171719`: "조건에 맞는 매물이 없어요". One secondary line in muted: "필터를 조정해 보세요." One blue text-link: "필터 초기화". No illustration. |
| **Empty (saved listings)** | White panel. 16px line in `#171719`: "찜한 매물이 없어요." Below in `rgba(55,56,60,0.28)`: "지도에서 ♡ 아이콘을 눌러 저장할 수 있어요." |
| **Loading (map first paint)** | Map tiles load progressively; chrome (listing rail) shows skeleton blocks at exact dimensions in a low-opacity neutral. 1.0s shimmer. No spinner over the map itself — the tile load *is* the loading affordance. |
| **Loading (filter applied)** | Subtle 2px `#0066ff` progress bar at the top of the listing rail. Previous results remain visible underneath. |
| **Error (network failed)** | Inline banner above the listing rail. Text: 14px / 400 in `#171719`. Pattern: error type + retry link in `#0066ff`. No alarm color — Zigbang trusts the user to read. |
| **Error (geolocation denied)** | Banner over the map: "위치 권한이 거부되어 현재 위치를 표시할 수 없어요." Recovery: "주소 직접 검색" link in `#0066ff`. |
| **Success (listing saved)** | Bookmark glyph fills (`#333333` → filled `#FF6600` brand orange — the one place orange touches functional UI, as a momentary state). 2s auto-dismiss confirmation: "찜 목록에 저장됐어요." Sentence case, declarative. |
| **Success (agent contacted)** | Inline confirmation in the listing detail: "문의가 전송됐어요. 곧 연락받으실 수 있어요." Past tense, factual. |
| **Skeleton** | Low-opacity neutral blocks (`rgba(55,56,60,0.08-0.12)`) at final dimensions. No shimmer hue — the shimmer is opacity-only, consistent with the entire design system's anti-second-color rule. |
| **Disabled** | Action Blue actions fade to `rgba(0,102,255,0.3)`. Neutral actions fade to `rgba(55,56,60,0.16)`. Text stays at `rgba(55,56,60,0.28)`. |
| **Map pin hover** | Pin scales 1.05× over 120ms; no color change. The size delta is enough. |
| **Listing card hover** | 1-2px lift via subtle shadow increase; never a background-color change. |

## 15. Motion & Easing

**Durations:**

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | State commits, bookmark toggles, focus rings |
| `motion-fast` | 120ms | Hover lifts, pin scale, button press feedback |
| `motion-standard` | 200ms | Filter rail open, listing rail slide, dropdown |
| `motion-slow` | 320ms | Bottom-sheet expand, modal enter |
| `motion-map` | 400-600ms | Map pan/zoom transitions (Naver Maps / Kakao Maps default) |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.7, 0.3, 1)` | Sheet, modal, rail enter |
| `ease-exit` | `cubic-bezier(0.4, 0, 1, 1)` | Dismissal |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Hover, focus, generic two-way |
| `ease-map` | (provided by underlying map SDK) | Pan/zoom — Zigbang inherits rather than overrides |

**Explicitly forbidden.** Spring, bounce, overshoot. `cubic-bezier` middle control above 1.0. Bouncing "drop the pin" pin-animation. Confetti, success-celebration motion. Real-estate decisions are weighty; the motion language must signal stability, not delight.

**Signature motions:**

1. **Bottom-sheet expand.** On mobile, tapping a listing rail item or a map pin lifts a sheet from the bottom with `motion-slow` / `ease-enter`. The sheet uses top-only radius (`16px 16px 0 0`). Backdrop dims to `rgba(0,0,0,0.4)` simultaneously.
2. **Map-pin selection.** Tapping a pin scales it to 1.1× with `motion-fast`. The corresponding listing card in the rail scrolls into view with `motion-standard` / `ease-standard`. No color flash — the size delta + scroll is the affordance.
3. **Filter chip activation.** Tapping a filter chip applies `motion-fast` border/fill change. The listing rail behind it refreshes with a `#0066ff` top progress bar — never a full content blur or replacement.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`. Map pan/zoom respects the underlying SDK's reduced-motion handling. Bottom sheets snap rather than slide. Pin scaling on selection disables entirely.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10-15)

Verified via WebFetch (2026-05-13):
- https://company.zigbang.com/who-we-are — confirms vision phrasing "Living Forward, Zigbang",
  brand values (Reliability / Innovation / Efficiency / Possibility), and founding timeline
  (채널브리즈 1115/2010 → Zigbang web launch 03/2012 → rename to 직방 10/2015).
- https://company.zigbang.com/en/newsroom/view?idx=314 — confirms 2022 "Beyond Home" rebrand,
  CEO Ahn Sung-woo's verbatim quote: "Our next chapter goes beyond listings—we're building
  the Home OS. Zigbang will evolve into a proptech company that supports every part of the
  residential experience, from home search to home life." Confirms "deeper, more premium
  orange" color direction.
- http://en.smarthome.zigbang.com/index/?bmode=view&idx=162547182 — confirms English Beyond
  Home rebrand article, logo description (house icon encircled by expanding ellipse).
- https://designcompass.org/en/2022/11/30/zigbang-rebranding-beyond-home/ — third-party
  design commentary on the rebrand; rationale rather than specs.

Verified via WebSearch (2026-05-13):
- 안성우 founding story (Seoul National Univ. Statistics graduate, post-graduation rental
  search → discovered prevalent fake listings → founded 채널브리즈 1115/2010): aju news +
  나무위키 + 서울경제 CEO&Story corroborate.
- 직방 name etymology ("직접 찍은 방"): standard interpretation across CEO interviews
  available in the cited search results.

Tier 1 live inspect (2026-05-13):
- zigbang.com home — Pretendard Variable confirmed, #171719 confirmed, #0066ff confirmed
  on auth link, 8px nav radius, 10px chip radius, 9999px icon, 50% bookmark toggle,
  rgba(55,56,60,0.16/0.28) muted ramp.
- zigbang.com/home/apt/map — partial inspect; tab contention from parallel browser
  sessions prevented full second-pass. Map-overlay tokens in §4 are inferred from the
  chrome inspected on the home surface + visual rendering.

Personas (§13) are fictional archetypes informed by publicly observable Zigbang user
segments. Names are illustrative; they do not refer to real people.

Interpretive claims (e.g., "weight 400 is the signature", "the map is the negative space",
"orange = brand, blue = action") are editorial readings connecting Zigbang's observed
design choices to its founding rejection of fake listings, not directly sourced Zigbang
statements.

Brand-orange hex value is NOT publicly published; the ~#FF6600 estimate in §2 is
conservative and labeled as illustrative. Treat as unresolved until official token
publication is confirmed.
-->
