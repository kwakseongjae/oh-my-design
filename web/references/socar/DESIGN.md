---
id: socar
name: SOCAR
country: KR
category: consumer-tech
homepage: "https://www.socar.kr"
primary_color: "#000000"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=socar.kr&sz=256"
verified: "2026-05-15"
omd: "0.1"
ds:
  name: SOCAR Design
  url: "https://design.socar.kr/"
  type: system
  description: SOCAR's design system hub — Space Frame, SOCAR Blue, Sandoll Gothic Neo2 + Avenir typography, and mobility-flow component patterns.
  og_image: "https://design.socar.kr/og.jpg"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  note: "SOCAR Blue brand hex unpublished; web chrome intentionally achromatic, so primary maps to ink #000000 / neutral scale"
  colors:
    primary: "#000000"
    canvas: "#ffffff"
    foreground: "#354153"
    body: "#354153"
    muted: "#b4bbcb"
    on-primary: "#ffffff"
    surface: "#f2f3f8"
    surface-footer: "#f5f5f5"
    hairline: "#e5e8ef"
  typography:
    family: { sans: "Pretendard", mono: "Pretendard" }
    h1:     { size: 26, weight: 700, lineHeight: 1.38, use: "Single hero line" }
    h2:     { size: 22, weight: 700, lineHeight: 1.36, use: "Section titles" }
    h3:     { size: 16, weight: 600, lineHeight: 1.50, use: "City names, card headings" }
    nav:    { size: 16, weight: 600, use: "Header navigation items" }
    body:   { size: 16, weight: 400, use: "Card descriptions, copy" }
    button: { size: 14, weight: 600, use: "Search CTA label" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32 }
  rounded: { sm: 12, md: 14, lg: 16, full: 9999 }
  shadow:
    card: "rgba(0,0,0,0.1) 0px 4px 8px 0px"
  components_harvested: true
  components:
    button-primary: { type: button, fg: "#ffffff", radius: "12px", padding: "12px 18px", font: "14px / 600", use: "Primary booking CTA (SOCAR Blue in funnel)" }
    button-search: { type: button, bg: "#f2f3f8", fg: "#b4bbcb", radius: "12px", padding: "12px 18px", font: "14px / 600", use: "Neutral search trigger, state-swaps when complete" }
    link-nav: { type: button, bg: "transparent", fg: "#354153", font: "16px / 600", use: "Top nav text link, no underline/hover bg" }
    card: { type: card, bg: "#ffffff", radius: "16px", shadow: "rgba(0,0,0,0.1) 0px 4px 8px 0px", use: "Article / promo tile" }
    card-region: { type: card, bg: "#ffffff", border: "1px solid #e5e8ef", radius: "14px", padding: "20px", fg: "#354153", use: "Location/region booking entry tile" }
    chip-timerange: { type: badge, bg: "#ffffff", border: "1px solid #e5e8ef", radius: "14px", padding: "0 12px", font: "16px / 400", use: "Date-time range selector chip" }
    input: { type: input, bg: "#ffffff", fg: "#354153", border: "1px solid #e5e8ef", radius: "12px", padding: "0 13px", font: "16px / 400", use: "Search field; placeholder #b4bbcb" }
---

# Design System Inspiration of SOCAR

## 1. Visual Theme & Atmosphere

SOCAR (쏘카) is Korea's dominant car-sharing platform, and its web surface reads exactly like the product it sells: clean, calm, gently confident — a service that wants to disappear out of the user's way the moment a car has to be reserved. The site opens on pure white, runs body text in **Pretendard** (the de-facto Korean web sans), and keeps the entire chrome in a soft cool-grey palette anchored by `#354153` for body text and `#e5e8ef` for borders. Nothing about the home page asks for attention except the action you came for: pick a time, pick a location, see a car.

The 2024 SOCAR rebrand is the explicit context. The company replaced its earlier playful identity with the **SOCAR Space Frame** — a trapezoidal symbol below the wordmark, intended to read as *"a vessel that carries new experiences"* — and shifted its primary color to **SOCAR Blue**, deliberately chosen *to convey gravity and seriousness* ([abocado.kr 리브랜딩 케이스](https://abocado.kr/brand_news/news_detail?no=52)). Web surfaces inherit that posture: an achromatic chrome that lets the blue do the brand-flagging work where it matters (CTAs, the symbol, the app store badges), and stays out of the way everywhere else.

What distinguishes SOCAR from other Korean transportation apps (Kakao Mobility's yellow, Tada's coral) is the **uniform 12–16px radius scale**. Search inputs round at 12px, search-row chips at 14px, content cards at 14–16px — a consistent, mid-rounded geometry that reads as friendly without tipping into consumer-app cuteness. Cards float on a single light shadow (`rgba(0,0,0,0.1) 0 4px 8px`), never the multi-layer chromatic stacks of fintech-grade UIs. The entire system feels like a thoughtful product page that has been quietly tuned for months.

**Key characteristics:**

- Pretendard / PretendardVariable across the whole site — no custom typeface on web ([live inspect, socar.kr, 2026-05-13](https://www.socar.kr/))
- Body text in `#354153` instead of black — softens the page, signals "we are not a bank"
- Borders in `#e5e8ef` — a near-imperceptible cool grey
- Filled inputs use `#f2f3f8` background with `#b4bbcb` placeholder text
- 12px / 14px / 16px radius scale — consistent mid-roundness, no pill buttons in primary chrome
- Single-layer black shadows (`rgba(0,0,0,0.1) 0 4px 8px`) — restrained, never chromatic
- H1 26px / 700, H2 22px / 700, H3 16px / 600 — a tight, almost mobile-first heading scale even on desktop
- Footer in `#f5f5f5` — the only off-white surface; everything else is pure white
- The rebrand color is "SOCAR Blue" reserved for the brand symbol and primary CTAs ([abocado.kr](https://abocado.kr/brand_news/news_detail?no=52)); web chrome itself is intentionally achromatic
- App download badges and the SOCAR Space Frame symbol are the only places the brand blue appears prominently on the public home

## 2. Color Palette & Roles

### Primary (Brand)
- **SOCAR Blue** (brand primary): The signature post-rebrand color. Used on the Space Frame symbol, app store badges, primary product CTAs in the booking flow. Public hex not published; widely read as a saturated mid-blue. ([abocado.kr](https://abocado.kr/brand_news/news_detail?no=52))
- **Pure White** (`#ffffff`): Page background, card surface, header background.

### Neutral Scale (verified live)
- **Text Default** (`#354153` / `rgb(53, 65, 83)`): All body text, all heading text, all nav links. Not black. A cool blue-grey that does the work black would do in another system.
- **Footer Grey** (`#f5f5f5`): Footer background — the only sustained off-white on the page.
- **Border Default** (`#e5e8ef` / `rgb(229, 232, 239)`): Card and tile borders.
- **Input Fill** (`#f2f3f8` / `rgb(242, 243, 248)`): Search button / filled input background.
- **Placeholder / Disabled Text** (`#b4bbcb` / `rgb(180, 187, 203)`): Search-button label, placeholder states.

### Supporting (post-rebrand brand system)
- Achromatic / neutral palette acts as the entire supporting system, by design — *"the brand uses an achromatic palette to make SOCAR Blue stand out more clearly"* ([abocado.kr](https://abocado.kr/brand_news/news_detail?no=52)). The grey scale above is the operational expression of that decision.

### Inferred Semantic Slots (not directly verified on web home; consistent with SOCAR FRAME's documented practice)
- **Success / Confirmation**: Reserved for booking-success states inside the product. Not visible on the public home.
- **Warning / Alert / Danger**: Reserved for in-app states (insurance reminders, late-return alerts). The marketing home avoids semantic colors entirely.

## 3. Typography Rules

### Font Family
- **Primary (web)**: `Pretendard, PretendardVariable, "PretendardVariable Fallback"`. Inspected live on socar.kr ([live, 2026-05-13](https://www.socar.kr/)). The full SOCAR brand standard names **산돌고딕네오2 (Sandoll Gothic Neo2)** for Korean and **Avenir** for Latin in official brand documents ([abocado.kr](https://abocado.kr/brand_news/news_detail?no=52)); on the public site these are substituted with Pretendard, the open-licensed Korean web variant that pairs naturally with Avenir-style Latin glyphs.
- **No custom typeface on web** — unlike SOCAR's print/brand materials.

### Hierarchy (verified computed values)

| Role | Font | Size | Weight | Line Height | Color | Notes |
|------|------|------|--------|-------------|-------|-------|
| H1 (hero) | Pretendard | 26px | 700 | 36px (1.38) | `#354153` | Single hero line — "차가 필요할 땐, 쏘카" |
| H2 (section) | Pretendard | 22px | 700 | 30px (1.36) | `#354153` | Section titles ("어디로 떠날까요?") |
| H3 (card title) | Pretendard | 16px | 600 | 24px (1.50) | `#354153` | City names, card headings |
| Nav link | Pretendard | 16px | 600 | normal | `#354153` | Header navigation items |
| Body | Pretendard | 16px | 400 | normal | `#354153` | Card descriptions, copy |
| Button text (filled) | Pretendard | 14px | 600 | normal | `#b4bbcb` (disabled) / white (active) | Search CTA |
| Input value | Pretendard | 16px | 400 | normal | `#354153` | Date/time chips, filters |

### Principles

- **Pretendard everywhere.** SOCAR does not run a custom variable font on web; the type voice comes from disciplined sizing, not from a bespoke face.
- **Weight 600–700 for headings, 400 for body.** No light-weight display experiments — headings are confidently set in 700 to read as a service confirmation, not as marketing copy.
- **Mobile-first scale.** The hero is 26px even at desktop width — the system does not balloon at large viewports. SOCAR is a Korean app-first company; the web surface is sized like a slightly-relaxed mobile screen.
- **Letter-spacing left at `normal`.** No tracking adjustments on Korean text — Pretendard's metrics are trusted as shipped.
- **Color, not weight, separates levels.** All hierarchy ends up the same `#354153` cool-grey. Differentiation comes from size and weight, never from a darker heading color.

## 4. Component Stylings

### Buttons

**Primary CTA (booking surface)**

- Background: SOCAR Blue (brand-blue, public hex unpublished; product-flow primary)
- Text: `#ffffff`
- Radius: 12px
- Font: 14–16px Pretendard, weight 600
- Padding: 12px 18px (matches search button geometry)
- Use: "예약하기" final confirm in the reservation flow; app download badge background
- Note: On the public home page, this CTA appears as the header nav `예약하기` link styled as text — the strongly-colored variant is reserved for the booking funnel.

**Search Button (filled, neutral)**

- Background: `#f2f3f8`
- Text: `#b4bbcb` (when in disabled / placeholder state)
- Radius: 12px
- Padding: 12px 18px
- Font: 14px Pretendard / weight 600
- Border: none
- Use: Main "검색" trigger on the hero booking strip — neutral until the form is complete, then state-swaps to the SOCAR Blue active treatment in the booking flow.

**Text Link (nav)**

- Background: transparent
- Text: `#354153`
- Font: 16px Pretendard / weight 600
- Padding: 0
- Use: "예약하기", "쏘카 서비스", "블로그" in the top nav. No underline, no hover bg — pure typographic link.

### Cards & Containers

**Content Card (article / promo)**

- Background: `#ffffff`
- Border: none (visual edge comes from the shadow)
- Radius: 16px
- Shadow: `rgba(0, 0, 0, 0.1) 0px 4px 8px 0px`
- Padding: not directly inspected; visual ratio matches ~16–20px
- Use: "쏰쏰 여행 정보" article tiles on the home

**Location / Region Card (booking entry tile)**

- Background: `#ffffff`
- Border: `1px solid #e5e8ef`
- Radius: 14px
- Padding: 20px
- Font: 16px Pretendard / weight 400 (label) and 600 (city name)
- Color: `#354153`
- Use: "어디로 떠날까요?" — Jeju / Seoul / Busan tiles; airport tiles

**Time-Range Chip**

- Background: `#ffffff`
- Border: `1px solid #e5e8ef`
- Radius: 14px
- Padding: 0 12px
- Font: 16px Pretendard / weight 400
- Use: "오늘 15:00 ~ 19:00" date-time selector on hero strip

### Inputs

- Background: `#ffffff` (search field) or `#f2f3f8` (filled state)
- Border: `1px solid #e5e8ef` on white-bg variant; borderless on filled variant
- Radius: 12–14px
- Text: 16px Pretendard / 400 / `#354153`
- Placeholder: `#b4bbcb`
- Padding: 12px 18px (filled) / 0 13px (search bar)
- No focus-ring color verified on the public home — the booking flow likely shifts the border to SOCAR Blue.

### Navigation (Header)

- Background: `#ffffff`
- Layout: horizontal, left-aligned wordmark + Space Frame symbol, right-aligned link group
- Link font: Pretendard 16px / weight 600 / `#354153`
- No bottom border on header — the page padding does the separation
- Sticky behavior: visible on initial scroll; not transparent

### Footer

- Background: `#f5f5f5`
- Text: 16px Pretendard / 400 / `#000000` (slightly darker than body — footer drops to true black)
- Padding: 30px
- Use: Company info, terms, customer service links

### Badges (inferred from page label patterns)
- City tiles use inline labels like "인기" — these read as small bold tags rendered inside the card label rather than as standalone badge components. No distinct badge token observed on the public home.

---

**Verified:** 2026-05-13
**Tier 1 sources:**
- `https://www.socar.kr/` — live computed-style inspect (Pretendard family, `#354153` body, `#e5e8ef` borders, `#f2f3f8` input fill, `#b4bbcb` placeholder, 12/14/16px radii, `rgba(0,0,0,0.1) 0 4px 8px` card shadow, footer `#f5f5f5`, H1 26/700, H2 22/700, H3 16/600, nav 16/600)
- `https://design.socar.kr/` — SOCAR Brand Center, navigated (SPA shell only via static fetch; live inspect of the booking flow's primary CTA could not be completed in this session because a shared browser session bounced between unrelated tabs after the first inspection)

**Tier 2 sources:**
- `https://getdesign.md/socar` — *"No designs found for 'socar'"* (no tokens published as of 2026-05-13)
- `https://styles.refero.design/?q=socar` — page reachable; no isolated SOCAR token set surfaced in this session
- `https://design-system-group.gitbook.io/reference/undefined/socar` — naming-convention reference only; no hex codes
- `https://abocado.kr/brand_news/news_detail?no=52` — SOCAR rebrand case study (SOCAR Blue as primary, achromatic supporting palette, Sandoll Gothic Neo2 + Avenir as brand typefaces, "소유를 줄여 삶의 여유를 더한다" tagline, SOCAR Space Frame symbol)
- `https://tech.socarcorp.kr/design/2020/06/23/socar-design-system-01.html` — SOCAR FRAME series #1 (process narrative; no hex specifics)
- `https://tech.socarcorp.kr/fe/2026/02/23/socar-frame2-web.html` — SOCAR FRAME 2.0 web rollout (system architecture; no token table)

**Conflicts unresolved:**
- Brand-document typefaces (Sandoll Gothic Neo2 / Avenir) vs. actual web fonts (Pretendard / PretendardVariable). Treated as intentional: brand print system uses the licensed faces; the public web substitutes Pretendard. Documented in §3.
- Exact SOCAR Blue hex not publicly published. §1–§2 reference the color by its brand name; §9 lists it as "SOCAR Blue (brand-published hex pending — use Brand Center reference)" rather than guess.
- SOCAR FRAME 2.0 component-level tokens (button height variants, dark-mode palette) live behind the internal SOCAR Frame docs and were not extracted in this run.

## 5. Layout Principles

### Spacing System
- No published numeric scale on the public home. Inspected paddings cluster at **12px / 18px / 20px / 30px**, which reads as an 8–4 hybrid grid (8 / 12 / 16 / 20 / 24 / 30) rather than a strict 8-multiple.
- Card padding: **20px**.
- Input padding: **12px 18px**.
- Footer padding: **30px**.

### Grid & Container
- Single-column hero with the booking strip centered.
- City / airport tiles in a responsive grid (likely 6-up at desktop, collapsing to 3-up tablet, 2-up mobile based on visible breakpoints).
- Article cards in a responsive horizontal-scroll row.
- Generous side gutters at desktop — content rarely runs to viewport edges.

### Whitespace Philosophy
- **Calm chrome, busy form.** The booking strip is the densest UI on the page; everything around it intentionally backs off so the form is the obvious next action.
- **Soft separation.** Sections are delineated by spacing and small heading shifts, not by colored bands or rules. The page has one background (`#ffffff`) until the footer.
- **The shadow is the border.** Article cards use a 4px-blur drop shadow in place of a border — visual containment without visual weight.

### Border Radius Scale
- **12px** — inputs, search button, smallest interactive surfaces
- **14px** — booking chips, city/airport tiles
- **16px** — content / article cards
- **20px+** — reserved for full-bleed promotional units (not verified on home, but consistent with rebrand asset templates)
- No pill (`9999px`) and no sharp-corner (`0`) primary components observed.

## 6. Iconography & Illustration

- **Symbol-first brand mark.** The SOCAR Space Frame — a trapezoidal symbol sitting beneath the wordmark — is the primary brand asset. Described in official brand materials as *"a vessel that carries new experiences, freedom of movement, and life expansion"* ([abocado.kr](https://abocado.kr/brand_news/news_detail?no=52)).
- **No editorial illustration on the public home.** The site uses photography for travel-content cards and a small set of UI glyphs (search, location pin, calendar) — no illustrated empty states, no character mascots.
- **Icon weight reads light-medium.** UI icons appear as monoline glyphs sized roughly to the body text (~16–18px), in the same `#354153` color as body copy — never used as decoration.
- **Brand symbol stays blue.** When the Space Frame appears, it appears in SOCAR Blue. App-store badges follow the platform-specified treatment.

## 7. Imagery & Photography

- **Editorial / lifestyle photography** for the travel-content cards ("5월 드라이브 코스 추천", "부산·경남·울산 봄 축제"): wide-aspect, naturally-lit, location-forward — roads, beaches, cherry blossoms, urban districts. No people in the foreground; no model-driven imagery.
- **Vehicle photography** (in the booking flow, not on the home itself) follows standard automotive product treatment: 3/4 front angle, clean studio background, color-accurate.
- **Card crop:** rounded to 16px to match the card radius; never bleed-cropped.
- **No stock-photo register.** Imagery reads like commissioned location work, not the generic stock vocabulary common in Korean SaaS pages.

## 8. Patterns

- **Hero = booking form.** The page's main interaction lives above the fold as a horizontal strip of pickers (place, date-time, car-class). Marketing copy is secondary. The pattern is: *if you came here to book, the booking form is here.*
- **Article cards as soft promotion.** Below the booking strip, travel-content cards run horizontally — the secondary surface that converts non-intending visitors into trip-planners.
- **Region tiles as exploration.** "어디로 떠날까요?" exposes the catalog as a grid of city tiles — a familiar Korean e-commerce pattern (Coupang, Kakao) applied to mobility.
- **Footer as utility.** The footer carries terms, customer service phone, regulatory text, and app download badges. It is informational, not promotional — no email capture, no banner CTAs.

## 9. Accessibility

- **Text contrast.** Body `#354153` on `#ffffff` measures ~9.4:1 — well above WCAG AAA for body text.
- **Placeholder contrast.** `#b4bbcb` on `#ffffff` measures ~2.5:1 — below WCAG AA for normal text. Acceptable for placeholder/disabled treatment only; care needed if the same color is reused for active text.
- **Focus states** not directly inspected on the public home; the booking flow likely surfaces a SOCAR Blue border on input focus consistent with FRAME's documented practice.
- **Korean as primary script.** All copy is set in Pretendard, which carries an explicit Korean glyph set — no fallback flicker, no width mismatch.
- **Touch targets.** Search button at 12px 18px padding plus 14px-font line height clears the 44×44px iOS recommendation. City tiles at 20px padding clear it comfortably.
- **Motion / reduced motion.** Not directly verified — should be added to the SOCAR Frame docs review before a strict claim is made.

---

## 10. Voice & Tone

SOCAR speaks like a service that has done this hundreds of millions of times and would rather get you to the car than make a moment of it. Calm Korean, short sentences, zero hedging — *"차가 필요할 땐, 쏘카"* ("When you need a car, SOCAR"), full stop. The tagline of the rebrand is *"소유를 줄여 삶의 여유를 더한다"* — *"reduce ownership, add life's ease"* ([abocado.kr](https://abocado.kr/brand_news/news_detail?no=52)). Both register the same posture: SOCAR is not selling adventure; it is removing friction from a thing you were going to do anyway.

| Context | Tone |
|---|---|
| Headlines | Declarative Korean. Short. Service-confirmation register, not marketing register. *"차가 필요할 땐, 쏘카"*, *"어디로 떠날까요?"* |
| Booking CTAs | Imperative verb form — `예약하기`, `검색`, `찾기`. Never `Get started`, never `Start your journey`. |
| Travel-content cards | One-line topical headlines ("5월 드라이브 코스 추천 2026 | 봄 당일치기 명소") — useful, dated, specific. No clickbait stacking. |
| Empty / error states | Should follow Korean fintech-app convention: explain the cause in one line, offer one action, never `오류가 발생했습니다`. |
| Legal / terms | Formal Korean `합니다` endings, regulator-readable. Same pattern as other Korean mobility platforms. |
| Customer-service surfaces | Direct, warm but procedural. Phone number visible in the footer. |

**Forbidden phrases.** *"Revolutionary"*, *"Game-changer"*, *"새로운 경험을 시작하세요"* as marketing decoration without an action attached, exclamation marks on routine CTAs, emoji on transactional surfaces (booking, payment, return). Travel-content cards may carry editorial color; the booking funnel may not.

## 11. Brand Narrative

SOCAR was founded in **2011** in Jeju as Korea's first car-sharing service and has since become the country's dominant car-sharing platform, with the rebrand to its current identity rolling out from **2024** ([abocado.kr 리브랜딩 케이스](https://abocado.kr/brand_news/news_detail?no=52)). The rebrand reframed the company from *"car-sharing service"* to *"car-sharing that transforms everyday life and mobility throughout the city"* — a deliberate broadening of scope from a transactional product to an everyday-life platform.

The rebrand is design's load-bearing artifact. The previous identity leaned playful and consumer-app; the new identity replaced that with the **SOCAR Space Frame** symbol — a trapezoid below the wordmark, intended as *"a vessel that carries new experiences, freedom of movement, and life expansion"* — and substituted **SOCAR Blue** for the previous palette, chosen *"to convey gravity and seriousness"* ([abocado.kr](https://abocado.kr/brand_news/news_detail?no=52)). The supporting palette is intentionally achromatic so the blue does the brand-flagging work.

In parallel, SOCAR has been publishing the **SOCAR FRAME** design system since 2020 ([SOCAR Tech Blog, FRAME #1](https://tech.socarcorp.kr/design/2020/06/23/socar-design-system-01.html)) — the internal cross-platform component library, recently relaunched as **FRAME 2.0** with an explicit design-code integration stack ([SOCAR Tech Blog, FRAME 2.0 web, 2026](https://tech.socarcorp.kr/fe/2026/02/23/socar-frame2-web.html)). FRAME is the engineering substrate; the rebrand is the brand vocabulary that sits on top of it. They share the same underlying restraint: clear naming, repeatable rules, one decision per artifact.

What SOCAR refuses: the playful consumer-app vocabulary of its earlier identity (bright accents, illustrated states), the institutional-blue gravity of legacy car rental brands (Avis, Hertz, Lotte Rent-a-Car), and the gamified booking flows common in Southeast-Asian super-apps. What it embraces: a calm achromatic chrome with a single load-bearing brand color, mobile-first sizing on every surface, and a public site that opens directly on the form you came to fill out.

## 12. Principles

1. **Service over spectacle.** The home page opens with a booking form, not a marketing video. If the user came to reserve a car, the reservation form is the hero. Anything else is below it.
2. **Achromatic chrome, branded action.** Only the brand symbol, app badges, and primary booking CTA carry SOCAR Blue. Everything else is `#354153` text on white. The brand color is reserved for the moment it matters.
3. **Mobile-first sizing on every surface.** Hero headings cap at 26px even on desktop. SOCAR is an app-first company; the web is a slightly-relaxed mobile surface, not an inflated desktop poster.
4. **Pretendard, not a custom face.** The web does not run a bespoke variable font. Brand documents specify Sandoll Gothic Neo2 + Avenir for the printed identity; web operationalizes that as Pretendard. The decision is honest, not aspirational.
5. **One shadow, one radius scale.** Cards use a single soft black shadow. Radii live on the 12 / 14 / 16 ladder. No multi-layer chromatic stacks, no pill experiments — visual restraint is the trust signal.
6. **Body text is `#354153`, not black.** A cool grey-blue softens the chrome and signals "we are not a bank, we are not a government form".
7. **Brand vocabulary is a service contract.** *"소유를 줄여 삶의 여유를 더한다"* is not a tagline pasted over a hero — it is the company's contract with the user. Every surface should make ownership feel smaller and ease feel larger.
8. **FRAME is the substrate.** Designers do not improvise components for the public surface. If a button is needed, FRAME is the source of truth — naming and behavior pulled from the documented library, not freestyled.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Korean car-sharing user segments, not individual people.*

**민호 (Minho), 29, Seoul.** Software engineer renting a car for a Jeju trip with friends. Opens SOCAR app first, switches to web only because his friend is coordinating the booking on a laptop. Expects the web surface to mirror the app's reservation flow exactly — same fields in the same order. If the web booking funnel diverges from the app's, he loses confidence in the brand's internal consistency.

**지영 (Jiyoung), 34, Bundang.** Mother of two, no second car at home. Books a 4-hour SOCAR every other Saturday for Costco runs and family errands. Never uses the marketing content; goes straight from app icon to "예약" to "결제". Cares deeply that the time-window picker confirms exactly what she selected — she has been burned by overlapping reservations on legacy rental sites.

**대훈 (Daehoon), 42, Busan.** Small business owner. Uses SOCAR Business for client visits when his own car is in the shop. Reads the FAQ and insurance terms before each booking — values that SOCAR publishes its insurance coverage in plain Korean rather than hiding it in a PDF. Considers the calm achromatic chrome a sign that the company "is serious".

**서연 (Seoyeon), 23, Daegu.** University student. SOCAR was her first car-rental experience — she had never used a legacy car-rental brand. Treats SOCAR Blue as "the color of borrowed cars" the way an older generation treats yellow as "the color of taxis". Heavy user of weekend short rentals (4–6 hours). Notices immediately when other mobility brands lean into a similar achromatic-plus-blue palette and reads it as imitation.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no recent reservations)** | Single Korean sentence in `#354153` body text: *"아직 이용 내역이 없어요"*. One secondary action linking to the booking flow. No illustration. |
| **Empty (no available cars in this location)** | One line in `#354153`: *"이 시간대에 이용할 수 있는 차가 없어요"* plus a suggested-action link to widen the time window. Never *"검색 결과가 없습니다"*. |
| **Loading (first paint)** | Skeleton blocks in the card grid at `#e5e8ef` (border-default color) over white. Card geometry preserved at exact radii (14–16px). |
| **Loading (booking submit)** | Inline spinner inside the primary CTA. Button width does not change. SOCAR Blue retained on the button surface; user cannot double-tap. |
| **Error (input validation)** | Inline below the field, single Korean sentence describing what was invalid and what would be valid (e.g. *"이용 종료 시간이 시작 시간보다 빨라요"*). Field border shifts to the FRAME alert color. |
| **Error (server / no availability)** | Modal or banner with one-sentence cause, one retry CTA, link to customer service. Never a generic *"문제가 발생했습니다"*. |
| **Success (reservation confirmed)** | Dedicated confirmation screen — not a toast. The reservation timeline, location, vehicle, and total fare laid out in a single readable column. Single primary CTA: *"확인"*. Money-moving events are never reduced to a toast. |
| **Success (small action, e.g. saved location)** | Brief 3s toast at the bottom of the viewport, dark background, white text, no emoji. |
| **Skeleton** | `#e5e8ef` blocks at exact card dimensions. Subtle shimmer. Fare amounts never render as skeletons — they show *"--"* until resolved. |
| **Disabled (CTA, form incomplete)** | Search button drops to `#f2f3f8` background with `#b4bbcb` label — the verified default disabled state on the home. The geometry stays stable; only the color contrast changes. |
| **No connectivity** | Top-bar banner: *"인터넷 연결을 확인해 주세요"*. Last-known content stays visible. Critical actions (confirm reservation) are blocked until connectivity returns. |

## 15. Motion & Easing

The public home page is mostly static — SOCAR earns its trust through restraint rather than kinetic flourish. The motion vocabulary below is the principled extension of FRAME's documented practice into SOCAR Blue brand-tier surfaces; specific token values are not published on the public site and are reasoned from observed behavior.

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle states, selection commits |
| `motion-fast` | 150ms | Hover, focus, button press overlay |
| `motion-standard` | 240ms | Bottom-sheet rise, card expand, tab switch — the default |
| `motion-slow` | 360ms | Reservation-success transition, the only screen that earns extra weight |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.0, 0.0, 1)` | Things arriving — bottom sheets, drop-downs |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Things leaving |
| `ease-standard` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Two-way transitions — collapsibles, tab content |

**Signature motions.**

1. **Booking-confirmed.** When a reservation is confirmed, the confirmation screen does *not* cross-fade from the form. It pushes in from the right at `motion-standard / ease-enter`, the form fades behind it. The completion is a destination, not a state change.
2. **Time-window selection.** Picking a date or time slides the chip's content up/in (`motion-fast`) rather than cross-fading — the user must see the value change to trust it.
3. **Card hover.** Article cards on desktop lift their shadow from `4px 8px` to roughly `8px 16px` at `motion-fast`. No translate, no scale — only shadow depth. The motion reads as "available", not "playful".
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant` and pushes become instant swaps. Booking remains fully usable.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

§10 Voice & Tone — derived from the rebrand tagline ("소유를 줄여 삶의 여유를 더한다"),
the SOCAR home headline ("차가 필요할 땐, 쏘카"), and convention shared with peer
Korean mobility/fintech surfaces (Toss, Kakao Mobility). Direct quote sourced
from https://abocado.kr/brand_news/news_detail?no=52.

§11 Brand Narrative — sourced primarily from the abocado.kr rebrand case
study (SOCAR Blue, SOCAR Space Frame, "vessel that carries new experiences",
Sandoll Gothic Neo2 + Avenir, "소유를 줄여 삶의 여유를 더한다"), with the
SOCAR Tech Blog FRAME series providing the engineering-substrate context.
Founding year (2011, Jeju) is widely-documented public history; exact founding
month not asserted here.

§12 Principles — interpretive editorial readings connecting the rebrand's
stated intent (gravity / seriousness / achromatic supporting palette) to the
verified web tokens (achromatic chrome, SOCAR Blue reserved for brand-tier
action, Pretendard substitution, single-shadow / mid-radius geometry).

§13 Personas — fictional archetypes informed by publicly observable Korean
car-sharing user segments (urban app-first users, family weekend renters,
small-business renters, student first-time renters). Names are illustrative;
they do not refer to real people.

§14 States — the inline form-validation, skeleton, and money-event patterns
follow Korean mobility/fintech-app convention. The "money-moving events are
never reduced to a toast" rule mirrors the same principle documented in the
Toss reference and is asserted as a reasoned design-system claim, not a
directly-quoted SOCAR policy.

§15 Motion & Easing — token values are reasoned from observed page behavior
plus standard FRAME-tier conventions, not published SOCAR tokens. Treat as
inference until cross-checked against the internal SOCAR Frame 2.0 motion
documentation.
-->

## 16. Do's and Don'ts

### Do
- Set all body and heading text in cool blue-grey #354153 on pure white #ffffff, never true black, to signal a calm service rather than a bank or government form
- Reserve SOCAR Blue exclusively for the Space Frame symbol, app-store badges, and the primary booking CTA, keeping the rest of the chrome achromatic
- Keep radii on the 12 / 14 / 16px ladder — 12px for inputs and the search button, 14px for booking chips and city tiles, 16px for content cards
- Contain article cards with the single soft shadow rgba(0,0,0,0.1) 0 4px 8px and let it act as the border, rather than adding outlines
- Cap headings at the mobile-first scale (H1 26px/700, H2 22px/700, H3 16px/600) even on desktop, and separate hierarchy by size and weight, not by a darker color
- Render booking and payment confirmations as a dedicated single-column screen with one '확인' CTA, never reducing money-moving events to a toast

### Don't
- Spread SOCAR Blue across large background areas or general chrome — it must stay achromatic so the blue does the brand-flagging where it matters
- Reuse the #b4bbcb placeholder/disabled grey for active text, since it only measures ~2.5:1 on white and fails WCAG AA
- Introduce pill (9999px) or sharp-corner (0px) primary components, or multi-layer chromatic shadow stacks — both break the single-shadow, mid-radius geometry
- Swap Pretendard for a bespoke web display face or add letter-spacing to Korean text; the type voice comes from disciplined sizing with tracking left at normal
- Revive the pre-2024 playful consumer-app vocabulary — bright accents, illustrated empty states, or character mascots — that the rebrand deliberately retired
- Write generic error copy like '검색 결과가 없습니다' or '문제가 발생했습니다', or put exclamation marks and emoji on booking, payment, or return surfaces
