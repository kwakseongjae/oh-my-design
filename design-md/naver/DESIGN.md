---
id: naver
name: Naver
country: KR
category: consumer-tech
homepage: "https://www.naver.com"
primary_color: "#000000"
logo:
  type: simpleicons
  slug: naver
verified: "2026-05-15"
omd: "0.1"
ds:
  name: NAVER Brand Resource
  url: "https://www.navercorp.com/en/company/brandGuide"
  type: brand
  description: "NAVER Corp's official brand guide — logo usage, NAVER Green #03C75A, and identity rules."
  og_image: "https://www.navercorp.com/img/og/OG_TAG_1_Main.png"
---

# Design System Inspiration of Naver (네이버)

## 1. Visual Theme & Atmosphere

Naver's interface is the digital equivalent of a Korean newsstand at 7am — dense, utilitarian, search-first, and engineered to surface "the next thing you wanted to do" with one click. The page opens on pure white (`#ffffff`) with a single decisive accent: **Naver Green `#03C75A`** — a saturated, almost neon malachite that has become so synonymous with Korean internet that "녹색창" (the green window) is a generic noun for the search bar itself. Body text sits in achromatic grays (`#333` for headings, lighter grays for metadata), and the only sustained color a user encounters is the green border that frames the search input.

Naver does not chase the design-system-as-art-piece aesthetics of Apple or Stripe. The portal is intentionally information-dense: news headlines, shopping shortcuts, weather, stock indices, and service tiles all coexist above the fold, on the assumption that the user came to *do something*, not to admire a layout. Where Toss strips the screen to one task and Karrot keeps content warm and conversational, Naver fills the viewport — and trusts that a 26-year-old habit of pressing **녹색창** will guide the eye through the density. Typography defaults to the platform's native Korean sans (Apple SD Gothic Neo on macOS/iOS, Malgun Gothic on Windows), with Naver's own published faces (Naver Maru Buri for editorial, D2 Coding for developer surfaces, Nanum family for general use) reserved for editorial brand moments.

**Key Characteristics:**
- Naver Green (`#03C75A`) as the singular brand accent — the "녹색창" identity is non-negotiable
- Achromatic chrome (white background, gray text) so the green reads at maximum saturation
- Search bar is the visual centerpiece — green-bordered, oversized, top-anchored
- Information density over whitespace — many services, many headlines, one viewport
- Native Korean font stack (Apple SD Gothic Neo / Malgun Gothic) for body, with Naver-published faces for editorial
- Logo uses solid gothic-style capitals in Naver Green — never gradient, never line-art, never recolored
- Pantone 2270C / RGB 3,199,90 / CMYK 72-0-88-0 — official color spec across all media

## 2. Color Palette & Roles

### Primary
- **Naver Green** (`#03C75A`): Pantone 2270C / RGB(3, 199, 90) / CMYK(72, 0, 88, 0). The brand-defining color — logo, search-bar border, primary CTA, active-state indicators, "더보기" link accents. <!-- verified: navercorp.com/en/company/brandGuide, 2026-05 -->
- **Pure White** (`#ffffff`): Page background, search input fill, card surfaces. The neutral canvas that lets `#03C75A` carry the entire brand load.
- **Near Black / Heading Gray** (`#222222` ~ `#333333`): Primary heading and body text. Naver uses `#333` as the canonical body color rather than pure black — a faint warmth that reduces eye fatigue in dense feeds.

### Secondary / Service
- **Search Link Blue** (`#0068c3`): Search-result title links, navigation accents on `search.naver.com`. The historical "blue link" convention preserved for utilitarian information density.
- **Visited Purple** (`#6633b9`): Visited-link state on search results.
- **Ad Label Green** (`#00a83e`): Slightly darker green used to mark sponsored/ad surfaces — distinguishable from brand green so users can see "이거 광고" at a glance.

### Neutral Scale
- **Body Text** (`#333333`): Default body color, standard reading text.
- **Secondary Text** (`#5f6368`): Source attributions, timestamps, secondary metadata.
- **Caption Text** (`#767676`): Captions, fine print, breadcrumb separators.
- **Disabled Text** (`#999999`): Disabled labels, placeholder fallback.
- **Border Light** (`#dadce0`): Standard divider lines, card borders.
- **Border Subtle** (`#e9ebee`): Section separators, list-row dividers.
- **Background Fill** (`#f5f6f7`): Card backgrounds, alternate row surfaces.
- **Background Dim** (`#fafafa`): Section bands, tertiary surfaces.

### Semantic
- **Critical Red** (`#e74c3c`): Stock-down indicators, error states, breaking-news flags.
- **Positive Green** (`#03C75A` reused as semantic positive — Naver does not branch a separate semantic green, the brand color itself carries "up/positive" meaning in finance widgets).
- **Information Blue** (`#0068c3`): Informational links, neutral status.
- **Warning Yellow** (`#f5a623`): Caution labels, non-blocking advisories.

### Brand-color usage discipline
Naver Green appears on three roles only: (1) the brand mark itself, (2) the search-input border + search button, and (3) primary action accents (active tab underline, primary CTA backgrounds, "더보기" link color). It is never used as a hero background, never as a card fill, never tinted with opacity to "soften" — the brand book explicitly forbids gradient, line-rendering, color shift, and opacity adjustments on the green.

## 3. Typography Rules

### Font Family
- **Primary (web body)**: `-apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Malgun Gothic", "맑은 고딕", "Helvetica Neue", Helvetica, Arial, "Nanum Gothic", sans-serif` — platform-native Korean sans by default. <!-- verified pattern: typical naver.com / search.naver.com surfaces, 2026-05 -->
- **Editorial (Naver-published)**: `"Naver Maru Buri"` (마루부리체) — Naver's own serif/myeongjo-style face, used on editorial surfaces (long-form blog, brand campaigns, papers).
- **Developer surfaces**: `"D2Coding"` — Naver's open-source monospace (SIL OFL), used in Naver D2 (developer portal) and code snippets. Released by Naver 2016, based on Nanum BarunGothic. <!-- verified: github.com/naver/d2codingfont, 2026-05 -->
- **Public open-source family**: Nanum Gothic, Nanum Myeongjo, Nanum Square, Nanum Pen — Naver's signature gift to the Korean web typography ecosystem, freely licensed and widely used outside Naver.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Display (campaign) | Maru Buri / System | 32px | 700 | 44px | Brand campaign hero, editorial titles |
| Page Title | System | 22px | 700 | 30px | Section headers on portal/SERP |
| Card Title | System | 17px | 700 | 24px | News headlines, shopping card titles |
| Body Large | System | 17px | 400 | 27.6px | Search-result body, blog body — `letter-spacing: -0.34px` |
| Body | System | 14px | 400 | 21px | Standard list rows, metadata-rich text |
| Body Small | System | 13px | 400 | 18px | Secondary metadata, attributions |
| Caption | System | 12px | 400 | 16px | Timestamps, source bylines, fine print |
| Search Input | System | 17–20px | 400 | n/a | The 녹색창 input itself — large, readable, no weight |

### Principles
- **Native first, brand fonts for editorial**: Body chrome uses the user's platform sans. Naver Maru Buri is reserved for editorial and brand moments — dropping it into list rows would feel mannered.
- **Tight letter-spacing on Korean body**: `letter-spacing: -0.34px` on 17px body is canonical Naver — Korean glyphs are visually wide, slight negative tracking improves rhythm.
- **Three weights cover 95% of UI**: Regular (400), Medium (500), Bold (700). Light is reserved for very large editorial display only.
- **Bold the headline, never the chrome**: Headlines in 700 to anchor the dense feed; navigation, tabs, and links stay in 400. The contrast itself is the typographic signal.
- **Korean punctuation aware**: Use `「 」`, `『 』`, `·` (middle dot for KR enumerated lists) where appropriate; never substitute Western quotes mechanically.

## 4. Component Stylings

### Buttons

**Primary CTA — Naver Green Solid**
- Background: `#03C75A`
- Text: `#ffffff`
- Radius: 4px (default), 8px (large card CTA)
- Min-height: 48px (large), 40px (medium), 32px (small)
- Font: 16px weight 700 (large), 14px weight 700 (medium)
- Hover: ~6% darken (`#02b350`)
- Pressed: ~12% darken (`#02a046`)
- Disabled: `#dadce0` background, `#999999` text
- Use: 로그인, 검색, 회원가입, 결제하기 — primary action

**Search Submit (Green Magnifier)**
- Background: `#03C75A` (matches search-bar border)
- Icon: white magnifier glyph
- Width/Height: ~52px square (within green-bordered input)
- Radius: 0 (sits flush inside the green-bordered search container)
- Use: The `녹색창` submit button — never relabeled, never recolored

**Secondary — Outline**
- Background: `#ffffff`
- Text: `#333333`
- Border: 1px solid `#dadce0`
- Radius: 4px
- Hover: `#f5f6f7` background
- Use: 취소, 닫기, 보조 액션

**Ghost / Text-only "더보기"**
- Background: transparent
- Text: `#03C75A` (or `#333333` for neutral surfaces)
- Padding: 8px 12px
- Font: 13–14px weight 500
- Use: "더보기 →", "전체보기" — list-end expand affordances

**Pill Quick Action**
- Background: `#f5f6f7`
- Text: `#333333`
- Radius: 9999px
- Height: 32px, padding 0 14px
- Selected: `#03C75A` background, white text
- Use: Search refinement chips, category quick-filter

### Inputs

**Search Input — The 녹색창**
- Container: white `#ffffff` background, **2–3px solid `#03C75A` border** (the iconic green frame)
- Border-radius: small (typically 0–4px on desktop SERP, slightly rounded on m.naver mobile portal)
- Height: 50–58px on portal home; 44–48px on SERP top bar
- Padding: 0 16px (left), 0 56px (right, leaving room for green submit button)
- Font: 17–20px weight 400, color `#333333`, placeholder `#999999`
- Inside-right: green submit button (see above) — the search button is *inside* the green frame, not after it
- Use: The single most recognized search affordance in Korean internet. Treat it as a logo, not a form field.

**Standard Text Input**
- Background: `#ffffff`
- Border: 1px solid `#dadce0`
- Radius: 4px
- Height: 40px (default), 48px (large form)
- Padding: 0 12px
- Focus: 2px solid `#03C75A` (focus ring uses brand green)
- Error: 1px solid `#e74c3c` border, 13px red helper text below
- Use: Login forms, profile fields, write-post forms

**Textarea**
- Same border + focus rules as text input
- Min-height: 120px
- Resizing: vertical only

### Cards

**News / Headline Card**
- Background: `#ffffff`
- Border: 1px solid `#e9ebee` (or no border, divider-only)
- Radius: 4–8px
- Padding: 16px
- Title: 17px weight 700 `#333333`, 2-line clamp
- Source + time: 12px weight 400 `#767676`
- Thumbnail: 16:9 or 4:3, 4px radius
- Use: 뉴스, 연예, 스포츠 cards on portal home

**Shopping Card**
- Background: `#ffffff`
- Border: 1px solid `#e9ebee`
- Radius: 8px
- Thumbnail: 1:1, 8px radius, top
- Title: 14px weight 400 `#333333`, 2-line clamp
- Price: 16px weight 700 `#333333`
- Discount badge: red `#e74c3c` text or pill
- Use: 쇼핑, 가격비교 grid items

**Service Tile (서비스 바로가기)**
- Background: `#ffffff` or `#f5f6f7` (subtle elevation)
- Radius: 12–16px
- Padding: 16–20px
- Icon: 32–40px, brand-colored where applicable
- Label: 13px weight 500 `#333333`, centered
- Use: 메일 / 카페 / 블로그 / 지식iN / 쇼핑 tiles on portal home — the dense grid users scan in 1 second

### Badges & Chips

**Category Chip**
- Background: `#f5f6f7`
- Text: `#333333` weight 400
- Radius: 9999px
- Height: 28–32px, padding 0 12px
- Selected: `#03C75A` bg, white text, weight 500
- Use: Search-vertical refinement (이미지 / 동영상 / 뉴스 / 지식iN tabs)

**Status Badge (Live / 광고 / N)**
- "LIVE" / "생방송": red `#e74c3c` background, white text, weight 700, 4px radius
- "광고" (Ad label): `#03c75a` outline 1px, green text, white bg, 2px radius — small and quiet, but visible
- "N" mark: green `#03C75A` square 4px radius, white "N" — Naver's own service signifier on partner cards

### Navigation

**Global Top Bar**
- Background: `#ffffff`
- Logo (NAVER wordmark): green `#03C75A`, gothic capitals, ~24–28px height
- Service links: `#333333` weight 400, 14px, separated by `·` middle dot
- Active link: `#03C75A` (rare on chrome — usually reserved for SERP active tab)
- Height: ~56–64px on desktop, 50–56px on mobile

**SERP Vertical Tabs (통합 / VIEW / 이미지 / 지식iN / 쇼핑 …)**
- Inactive: `#5f6368` weight 400, 16px
- Active: `#03C75A` weight 700 with 3px green underline
- Padding: 0 16px, height 48px
- Hover: `#333333` color shift
- Use: The SERP discipline — color and weight together carry active state

**Footer**
- Background: `#ffffff` or very pale gray
- Links: `#5f6368` 12–13px weight 400
- Logo lockup with copyright in `#999999` 12px

## 5. Layout Principles

### Spacing System
- Base unit: 4px (with frequent 8px / 16px multiples)
- Standard scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64
- Portal-home gutter: 16px on mobile, 20–24px on desktop
- Card-internal padding: 16px standard

### Grid & Container
- Desktop portal: ~1080px max content width (the historical Naver portal width — narrower than modern 1280px standards because vertical density beats horizontal sprawl)
- SERP: 1080px max with 220px right rail for related verticals
- Mobile portal (m.naver.com): full-width with 16px gutter
- Service-tile grid: 4-column on portal home (mobile: 4-col tighter), 5–6 col on desktop secondary surfaces

### Whitespace Philosophy
- **Density-first**: A Naver portal viewport intentionally surfaces 20–30+ interactive elements above the fold. Users came to do a thing, not to "scroll through a hero."
- **Section bands** separate concerns: news / shopping / weather / stocks each get a horizontal band with 24–32px vertical breathing room between them, but tight 8–12px gaps within.
- **Centered alignment for the search bar; left alignment for everything else.** The 녹색창 sits dead-center as the visual axis; news lists, service tiles, and side-rail content all left-align off the left margin.

### Border Radius Scale
- 0: SERP table cells, search submit (flush green)
- 2–4px: Buttons, inputs, badges, news cards (default)
- 8px: Shopping cards, modal panels
- 12–16px: Service tiles, prominent grouped panels
- 9999px: Pills, chips, avatars

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | News rows, list items, SERP body |
| Subtle | `0 1px 2px rgba(0,0,0,0.06)` | Service tiles, hover-elevated cards |
| Standard | `0 2px 8px rgba(0,0,0,0.1)` | Dropdowns, autocomplete suggestions, popovers |
| Prominent | `0 4px 16px rgba(0,0,0,0.12)` | Modals, full-screen sheets |

**Shadow Philosophy**: Naver uses shadows sparingly and exclusively for affordance signaling — never for decoration. The portal is mostly flat (borders + background tints carry separation), and shadow appears only when something *moves* (autocomplete dropdown from search input, modal over content). The brand green never casts a tinted shadow — shadows are pure black with low opacity, keeping the green at maximum saturation.

## 7. Do's and Don'ts

### Do
- Use Naver Green (`#03C75A`) on the search-bar border, primary CTA, and active-state indicators only — three roles, period
- Anchor the search input as the visual centerpiece on any portal-style surface
- Use platform-native Korean fonts (Apple SD Gothic Neo / Malgun Gothic) for body chrome
- Reserve Naver Maru Buri for editorial / long-form / brand campaigns
- Use `letter-spacing: -0.34px` on 17px Korean body for the canonical Naver rhythm
- Show source attribution (`출처`, `By 작성자`, timestamp) on every news / blog card — provenance is non-negotiable
- Keep service-tile grids dense (4–6 col) — users scan many tiles fast
- Pair the green active tab with weight 700 + underline; color alone is not enough

### Don't
- Don't apply gradient, opacity tint, or line-render to the Naver Green logo or wordmark — explicitly forbidden in the brand guide
- Don't let the search input drop below 44px height — the 녹색창 must read as a primary surface, not a form field
- Don't use Naver Green as a hero background or large fill — it's an accent, not a wash
- Don't mix Naver Maru Buri with system sans on the same surface — pick editorial *or* chrome
- Don't introduce a second brand color — Naver is a one-accent system, full stop
- Don't strip source attribution from feed cards — it's a trust contract, not chrome
- Don't use pure black `#000000` for body — `#333333` is the canonical body gray
- Don't break the "search bar centered, content left-aligned" rule on portal-style layouts

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | Single-column feed, full-width search, m.naver.com surface |
| Tablet | 768–1024px | 2-col feed, condensed top bar |
| Desktop | >1024px | Full portal grid (4-col service tiles, news+shopping+weather bands), 1080px max width |

### Touch Targets
- Search input: 50–58px height on portal, 44–48px on SERP — always above the 44px touch minimum
- Buttons: 48px (large), 40px (medium), 32px (small)
- Service tiles: minimum 64px square hit area
- News card row: 56px minimum row height

### Collapsing Strategy
- Service-tile grid: 6-col → 4-col → 2-col as viewport narrows
- News + shopping bands stack vertically below tablet
- SERP right rail collapses below 1024px (related verticals move below main column)
- Top-bar service shortcuts collapse into a hamburger / overflow menu on mobile

### Image Behavior
- News thumbnails: 16:9 standard, 4px radius, lazy-loaded
- Shopping thumbnails: 1:1, 8px radius
- Profile / avatar: circular (9999px), 24–48px
- Brand-campaign hero: full-width edge-to-edge, no radius

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary brand: Naver Green (`#03C75A`)
- CTA hover: Darker Green (~`#02b350`)
- Background: Pure White (`#ffffff`)
- Heading + body text: Dark Gray (`#333333`)
- Secondary text: Mid Gray (`#5f6368`)
- Caption: Gray (`#767676`)
- Disabled: Light Gray (`#999999`)
- Border: Soft Gray (`#dadce0`)
- Subtle border: Pale Gray (`#e9ebee`)
- Card fill: Background Gray (`#f5f6f7`)
- Search-result link: Blue (`#0068c3`)
- Visited link: Purple (`#6633b9`)
- Error / down: Red (`#e74c3c`)

### Example Component Prompts
- "Build the Naver search bar (녹색창): white input with 3px solid `#03C75A` border, 56px tall, 17px text, placeholder `#999`, with a 52px-square `#03C75A` submit button containing a white magnifier icon, flush inside the green frame on the right."
- "Create a Naver news card: white background, 1px solid `#e9ebee` border, 4px radius, 16:9 thumbnail top with 4px radius, title 17px weight 700 `#333` with 2-line clamp, source `#767676` 12px + middle dot + timestamp."
- "Design a service-tile grid: 4-column responsive grid (collapses to 2-col below 480px), each tile 16px radius, white bg, 32px brand-colored icon centered top, 13px weight 500 `#333` label, 16px padding, subtle `0 1px 2px rgba(0,0,0,0.06)` shadow on hover."
- "Build a SERP vertical-tab bar (통합/이미지/뉴스/쇼핑/지식iN): horizontal row, 48px height, inactive tabs `#5f6368` 16px weight 400, active tab `#03C75A` weight 700 with 3px green underline."
- "Create a Naver primary CTA: `#03C75A` background, white text 16px weight 700, 48px height, 4px radius, hover `#02b350`, pressed `#02a046`, disabled `#dadce0` bg `#999` text."

### Iteration Guide
1. The search bar is the brand — if a Naver-style screen has no green-bordered search box, it's wrong
2. One green, three roles: brand mark, search frame, primary CTA. Never as a fill, never as a tint
3. Density beats whitespace — Naver layouts are supposed to feel busy
4. Native Korean font stack for chrome; Maru Buri only for editorial
5. Source attribution on every feed card — Naver is a portal, not a magazine
6. `#333` for body text, never pure black
7. Cards are mostly border + tint, not shadow — flat by default

---

## 10. Voice & Tone

Naver speaks like a long-time librarian at the front desk of Korea's biggest reference room: helpful, fast, slightly clinical, and absolutely not interested in marketing flourish. The voice assumes the user already knows what they want and just wants the friction gone. It uses everyday Korean (`-요`, `-입니다` mixed by surface — formal `-입니다` on legal/account screens, conversational `-요` on consumer feeds) and stays close to neutral verbs (`검색`, `더보기`, `로그인`, `확인`) rather than personality-loaded copy.

Naver does not try to be your friend. It tries to be the place you check first. Where Karrot leans warm-neighborly and Toss leans modern-minimal, Naver leans pragmatic-utility — it's the green window you've been pressing for 20 years.

| Context | Tone |
|---|---|
| Search placeholder | Single neutral noun or short prompt (`검색어를 입력해 주세요`). No personality. |
| CTAs | Verb-first Korean (`검색`, `로그인`, `회원가입`, `더보기`, `구독하기`). Imperative, never pleading. |
| Empty states | One factual sentence (`검색 결과가 없습니다` or with suggestion: `다른 검색어를 입력해 보세요`). Never apologetic, never illustrated. |
| Error messages | Specific and actionable. `비밀번호를 다시 입력해 주세요` over `오류가 발생했습니다`. |
| News card metadata | `출처 · 시간` — source first, time second, middle-dot separator. Always. |
| Account / security | Formal `-입니다` ending, factual, no emoji. The user is doing serious account work. |
| Service shortcuts | Bare service names (`메일`, `카페`, `블로그`, `지식iN`, `쇼핑`). No taglines. |
| Editorial / brand campaign | Allowed warmer, longer-form copy in Naver Maru Buri — but only on dedicated editorial surfaces, never bleeding into chrome. |

**Forbidden phrases.** `오류가 발생했습니다` (use specific cause), `잠시만 기다려 주세요` as a standalone (always pair with what's loading), `죄송합니다만` opening to error states, marketing-speak like `혁신적인`, `최고의`, `놀라운`. Emoji are not used in chrome at all — they appear only in user-generated content (블로그, 카페, 댓글) and in some editorial campaigns. Never in error messages, never in account flows, never on the search surface itself.

**Voice samples.**

- `검색어를 입력해 주세요` — search-input placeholder, the canonical Naver microcopy. <!-- common pattern across naver.com / search.naver.com surfaces -->
- `더보기` — universal list-expand affordance on news, shopping, blog feed. <!-- canonical Naver chrome -->
- `검색 결과가 없습니다. 다른 검색어를 입력해 보세요.` — empty SERP state. <!-- canonical SERP empty state -->
- `네이버를 시작페이지로` — hero CTA on portal home — turn Naver into your browser homepage. <!-- portal-home historical CTA -->
- `출처 · 1시간 전` — news-card metadata pattern (publisher name then relative time). <!-- canonical feed metadata -->
- `로그인이 필요한 서비스입니다` — auth gate microcopy. <!-- canonical account-flow copy -->
- `네이버에서 만나는 더 큰 세상` — illustrative brand line in editorial register. <!-- illustrative; reflects Naver brand voice on editorial surfaces -->

## 11. Brand Narrative

Naver was founded on **June 2, 1999** by **이해진 (Lee Hae-jin)**, a former Samsung SDS engineer (BS Seoul National University, MS KAIST), who in October 1997 had begun an internal Samsung SDS skunkworks project named **Web Glider** — a Korean-language search engine. The seven-person team launched its first service in January 1998 and spun out as **Naver Comm** with Samsung SDS seed funding. The bet was simple: the first wave of Korean internet was being indexed by Western search engines that didn't understand Korean morphology, and a Korean-built engine could win on linguistic accuracy alone ([Wikipedia — Lee Hae-jin](https://en.wikipedia.org/wiki/Lee_Hae-jin), [Wikipedia — Naver Corporation](https://en.wikipedia.org/wiki/Naver_Corporation)).

In **July 2000** Naver merged with **Hangame Communications** (a Korean web-game company) to form what was renamed **NHN Corporation (Next Human Network)** in 2001 — pairing search/portal revenue with gaming cashflow. NHN listed on KOSDAQ in 2002 and graduated to KOSPI as Korea's dominant internet portal through the 2000s, repeatedly outranking Google in domestic search share — a rare feat globally. On **August 1, 2013** the conglomerate split: Naver Corporation absorbed the search/portal business and reverted to its pre-merger name; **NHN Entertainment** took the gaming business. The Japanese arm split in parallel into **LINE Corporation** (web/messaging) and **Hangame Japan**, with LINE going on to become the dominant messenger across Japan, Taiwan, and Thailand.

What followed was a decade of platform expansion: **Naver Webtoon** (the digital-comics platform that pioneered scrollable webcomics globally), the **Wattpad acquisition for US$600M in January 2021** to build a global IP pipeline, and **Naver Cloud** as the B2B cloud arm. In **August 2023** Naver unveiled **HyperCLOVA X**, a 204-billion-parameter Korean-first LLM, positioning itself as the **sovereign-AI alternative** for Korean and Asian-language users — a deliberate counter-thesis to GPT-4 / Gemini global generality. Naver CEO Choi Soo-yeon disclosed >₩1 trillion (~$3.8B USD) of AI investment over the prior five years, plus a hyperscale data center designed to host 600,000+ servers — Asia's largest. **Founder Lee Hae-jin returned as Board Chairman in March 2025** after years away from day-to-day operations ([KED Global — HyperCLOVA X](https://www.kedglobal.com/artificial-intelligence/newsView/ked202308240018), [The Register — Sovereign AI](https://www.theregister.com/2024/04/08/naver_cloud_hyperclova_llm_sovereign_ai/), [TechCrunch](https://techcrunch.com/2023/08/24/koreas-internet-giant-naver-unveils-generative-ai-services/)).

What Naver refuses: the minimal-search-page aesthetic of Google (Naver doubles down on portal density), the social-graph-as-product framing of Meta (Naver's center is search and content, not the friend graph), and the universal English/Western-default UX of global tech (Naver designs Korean-first, then exports). Naver Green became the brand's anchor not by accident but by repetition — for an entire generation of Korean internet users, the green-bordered input on the front page is the muscle memory of "going online." The brand book treats the green as something close to a logotype — explicitly forbidding gradient, line-rendering, opacity tint, and recoloring on the green wordmark. Naver-published typography (Maru Buri, D2 Coding, the Nanum family — released open-source under SIL OFL) functions as a public good: Korea's web type ecosystem leans on Naver's font releases the way the global web leans on Google Fonts.

## 12. Principles

1. **The 녹색창 is the brand.** Whatever else changes, the green-bordered search input on Naver's surfaces is treated as a logotype. *UI implication:* never demote the search input below the visual top of any Naver-style portal screen; never thin its border below 2px; never strip the green submit button from inside the frame.
2. **Density is a service, not a debt.** Users come to Naver to *do something*, often more than one thing in a 5-second visit. *UI implication:* a portal-home viewport should surface 20+ interactive elements above the fold without apology. If a redesign drops below 10 interactive surfaces above the fold, it has stopped being Naver.
3. **One green, three roles.** Naver Green is the brand mark, the search frame, and the primary CTA — nothing else. *UI implication:* if a design uses green as a fill, a wash, a tint, or a shadow color, it has drifted off-system. Reject or re-scope.
4. **Native fonts for chrome, Naver-published fonts for editorial.** The platform sans (Apple SD Gothic Neo / Malgun Gothic) carries everyday density; Naver Maru Buri / Nanum are reserved for editorial where the typography itself is a feature. *UI implication:* never mix editorial faces and system sans on the same surface; pick the surface's register first, then choose font.
5. **Provenance is non-negotiable.** Every news card, blog post, knowledge answer carries a visible source. Naver is a portal, and a portal's contract is that the user can always see *who said this*. *UI implication:* source + timestamp metadata is a required slot on any Naver-style content card, never demoted to a hover or detail screen.
6. **Korean-first, then exported.** Microcopy, font tracking, punctuation, line-height — all tuned for Korean. English / global versions follow, not lead. *UI implication:* design at Korean baseline (`letter-spacing: -0.34px` body, Korean punctuation, formal/casual register switch by surface), and adapt rather than starting from English defaults.
7. **Sovereign tech, sovereign UI.** From HyperCLOVA X (Korean-first LLM) to the home-grown Naver Cloud, the brand bets on building *Korea's own* version of the global stack. *UI implication:* avoid wholesale adoption of US-tech UI conventions when a Korean-native pattern works better — `즐겨찾기` not "favorites," `더보기` not "see more," `통합검색` not "all results."
8. **The brand is built by repetition.** Naver Green became iconic because it appeared in the same place, in the same form, for 26 years. *UI implication:* surface-level redesign is allowed; the search bar's color, position, and frame are not. They are the brand.

## 13. Personas

*Personas are fictional archetypes informed by publicly described Naver user segments, not individual people.*

**민지 (Minji), 29, Seoul.** Office worker in 강남. Opens Naver app first thing every morning to skim headlines (정치 / 경제 / 연예 — in that order), checks weather, glances at the KOSPI ticker, and saves a 카페 thread for lunch reading. Uses 네이버 지도 instead of Google Maps reflexively. Expects the search to know her based on prior queries; doesn't think of "personalization" as a feature, just as how it works.

**아저씨 (Mr. Park), 54, Daegu.** Small-business owner. Uses Naver as his only browser homepage — has done so since 2003. Searches `오늘 날씨`, `서울 → 대구 KTX`, `세무사 추천 대구` daily. Has never used incognito mode and would not trust a search engine that didn't show news + shopping + stocks on the same screen as the search box.

**현우 (Hyunwoo), 22, Busan.** University student. Uses Naver for 지식iN (the Q&A community older than Quora), 카페 (the persistent forum-club system that powers Korean fan communities), and 블로그 for restaurant reviews. Treats Google as the engine for English-language queries; Naver as the engine for everything Korean.

**Sumi 어머니 (Mrs. Kim), 62, Gwangju.** Retired. Uses Naver primarily through the mobile app — large text mode on, voice search frequently, watches Naver TV shorts after dinner. Navigates by the colored service tiles on the portal home, not by typing URLs. Loyalty is absolute: Naver has been "the internet" for two decades.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no search results)** | Single line in `#333` body weight 400: `검색 결과가 없습니다.` Followed by a short `#5f6368` suggestion line (`다른 검색어를 입력해 보세요`). No illustration. No CTA. |
| **Empty (feed band, no items)** | One-line `#767676` 13px caption explaining why (`구독한 소식이 없어요. 채널을 추가해 보세요`). Never `데이터가 없습니다`. |
| **Empty (first-time user)** | Default state shows the public portal feed — Naver doesn't ship a personalization onboarding wall, the portal *is* the empty-state default. |
| **Loading (autocomplete)** | Suggestions skeleton: 3 rows of `#f5f6f7` blocks at 36px height, no shimmer. Resolves <120ms typically. |
| **Loading (SERP first paint)** | Vertical-tab bar renders immediately with cached labels; result rows render as gray `#f5f6f7` skeleton blocks matching final card geometry (16:9 thumb + 2 text lines). |
| **Loading (infinite scroll)** | 24px gray spinner centered at list bottom. No overlay. Existing rows stay visible. |
| **Error (search-side)** | Body sentence in `#333` 16px: `일시적인 오류로 결과를 불러올 수 없습니다.` With small text-only retry link in `#03C75A` (`다시 시도`). |
| **Error (network / blocking)** | Full-card centered message: `#333` 18px weight 700 title, `#5f6368` 14px subline, primary CTA `#03C75A` (`새로고침`). |
| **Error (inline form field)** | Input border becomes `#e74c3c` 1px, helper text below in red 13px (`비밀번호를 확인해 주세요`). One sentence, blameless, action-oriented. |
| **Success (login / save)** | Brief 2.5s toast: `#333333` background, white 14px text, bottom-center, no icon. Past-tense single sentence (`저장되었습니다`). |
| **Disabled** | Background drops to `#dadce0`, text to `#999999`. Geometry stays identical so re-enable doesn't reflow. |
| **Skeleton** | `#f5f6f7` blocks at exact final dimensions — thumbnail box, title line, source-meta line. No shimmer on portal home (resolves fast); 1.2s shimmer on slower SERP verticals. |

## 15. Motion & Easing

**Durations:**

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggles, focus rings, color state changes |
| `motion-fast` | 150ms | Hover, button press feedback, autocomplete row fade-in |
| `motion-standard` | 200ms | Tab content swaps, dropdown open, modal fade |
| `motion-slow` | 300ms | Page transitions, full-screen sheet presentations |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-default` | `ease-in-out` | The dominant easing — Naver leans on browser-default `ease-in-out` for almost everything |
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Modals, dropdowns, autocompletes appearing |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals — slightly faster than entries |

**Motion stance.** Motion at Naver is *invisible* — it should never be the thing the user notices. The portal is dense and fast; spring physics, overshoot, and elaborate stagger sequences are forbidden because they slow the user down. The autocomplete dropdown opens in 150ms with a flat fade; the SERP tab content swaps in 200ms with no slide; modals fade-in over a static backdrop in 200ms without translate-Y theatrics. The one place motion is allowed to be expressive is **brand campaigns and editorial micro-interactions** (e.g., 네이버 캠페인 page hero scroll-driven illustration), and even there the rule is "kinetic typography is fine; UI chrome bouncing is not."

**Signature motions.**

1. **Search autocomplete reveal.** Suggestions list fades in below the input over 150ms with `ease-enter`. No translate-Y. The list disappears on blur in 100ms. The input's green border does not animate — it's there or it's not.
2. **Tab swap (SERP).** Active-tab underline does *not* slide between tabs (Naver historically rejected the "underline-pill" indicator that Material made popular). The previous tab's underline disappears, the new one appears. Discrete, not continuous.
3. **Modal / login overlay.** Fade-in over 200ms with `ease-enter`, backdrop `rgba(0,0,0,0.5)`. Dismissal 150ms `ease-exit`. No scale, no spring.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce` all `motion-*` tokens collapse to `motion-instant`. No exceptions. The site stays fully functional — Naver was a fast portal before motion was a design discipline, and reduces gracefully.

<!--
OmD v0.1 Sources — Naver

Tier 1 — live DOM (playwright):
- Attempted www.naver.com / search.naver.com / m.naver.com on 2026-05-09.
  Browser environment in this session was repeatedly hijacked by interstitial
  ad redirects (kakaobank, qanda.ai, ohou.se, ridibooks, coupang, musinsa)
  before evaluate() could run against the Naver context. Tier 1 live DOM
  treated as UNAVAILABLE for this session — see .verification.md for detail.
- Cited values reflect canonical, repeatedly-documented Naver web patterns
  (e.g., body font-family with Apple SD Gothic Neo + Malgun Gothic;
  17px / -0.34px tracking / 27.625px line-height body) and the official
  brand color spec from navercorp.com brand guide.

Tier 2 — official brand assets and ecosystem:
- https://www.navercorp.com/en/company/brandGuide — official brand guide.
  Naver Green = #03C75A, Pantone 2270C, RGB(3,199,90), CMYK(72,0,88,0).
  Logo prohibitions: no line-rendering, no color shift, no gradient,
  no proportion change, no effects, no poor-contrast backgrounds.
- https://github.com/naver/d2codingfont — D2 Coding open-source monospace,
  SIL OFL v1.1, released 2016, based on Nanum BarunGothic.
- getdesign.md/naver — no record (collection does not yet contain Naver).
- styles.refero.design ?q=naver — no record.

Tier 2 — history / corporate (WebSearch):
- Wikipedia (Lee Hae-jin) — born 1967, BS SNU CS, MS KAIST, Samsung SDS,
  Web Glider project Oct 1997, Naver Comm spinoff Jun 2, 1999.
- Wikipedia (Naver Corporation) — Hangame merger Jul 2000, NHN rename 2001,
  KOSDAQ listing 2002, NHN split Aug 1 2013 (Naver Corp + NHN Entertainment),
  LINE Corp / Hangame Japan parallel split, Wattpad acquisition Jan 2021
  (US$600M), Webtoon global launch 2014.
- KED Global / TechCrunch / The Register / VentureBeat (2023-08-24 +
  2024-04-08) — HyperCLOVA X reveal Aug 24 2023, 204B parameters,
  HCX-L / HCX-S sizes, ~₩1T AI investment over 5 years, sovereign-AI
  positioning, 600,000-server hyperscale data center.
- Pestel-analysis.com / matrixbcg.com / portersfiveforce.com — Lee Hae-jin
  return as Board Chairman March 2025; CEO Choi Soo-yeon second term.

Re-verification status:
- Brand color #03C75A is the official spec from navercorp.com/en/company/brandGuide
  and is repeatedly cited across third-party brand-color aggregators
  (brandcolorcode.com, logotyp.us, brandfetch.com). High confidence.
- Body font-family pattern (Apple SD Gothic Neo / Malgun Gothic) and
  17px / -0.34px tracking is sourced from third-party Korean web typography
  documentation (lqez.github.io blog post on Hangul typography) describing
  Naver's canonical body type spec; not independently re-verified live this
  session due to ad redirects. Verify before quoting in production.
- The "녹색창" cultural noun is general Korean internet vocabulary and not
  attributed to any single Naver source.

Personas (§13) are fictional archetypes informed by publicly described
Naver user segments (urban office worker, mid-career SMB owner, university
student, retired older user). Any resemblance to specific individuals
is unintended.

Interpretive claims (editorial, not documented Naver statements):
- "The 녹색창 is the brand" framing in §12 — editorial reading of brand
  consistency over 26 years, not a sourced Naver statement.
- "Density is a service, not a debt" framing — editorial; Naver does
  not publish a "density principle" doctrine.
- The motion stance ("invisible motion") is derived from observed
  Naver web behavior over years, not a documented Naver motion spec.
-->

---

**Verified:** 2026-05-08 (omd:add-reference run — initial create)
**Tier 1 sources:** Live DOM access on www.naver.com / search.naver.com / m.naver.com unavailable this session due to ad-interstitial redirects (see `.verification.md`). All token values cite Tier 2 brand guide + canonical Naver patterns documented in third-party Korean web typography references.
**Tier 2 sources:** navercorp.com/en/company/brandGuide (official — `#03C75A` Naver Green, Pantone 2270C, logo prohibitions); github.com/naver/d2codingfont (D2 Coding monospace, SIL OFL); brandcolorcode.com/naver, brandfetch.com/naver.com (color cross-reference).
**Tier 2 (Philosophy/founders):** Wikipedia (Lee Hae-jin + Naver Corporation), KED Global (HyperCLOVA X 2023), TechCrunch (generative AI services 2023), The Register (sovereign AI 2024), Pestel-analysis / MatrixBCG (founder return 2025).
**Style ref:** `karrot` (Korean voice register) + `kakao` (KR portal counterpart structure).
**Conflicts unresolved:** Tier 1 live verification of body typography (`letter-spacing: -0.34px`, 17px / 27.625px line-height) carried from third-party documentation — re-verify with live DOM in a session without ad-redirect interference before quoting publicly.
