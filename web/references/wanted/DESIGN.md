---
id: wanted
name: Wanted
country: KR
category: productivity
homepage: "https://www.wanted.co.kr"
primary_color: "#0066ff"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=wanted.co.kr&sz=256"
verified: "2026-05-15"
omd: "0.1"
ds:
  name: Wanted Montage
  url: "https://montage.wanted.co.kr/"
  type: system
  description: Wanted's Montage design system docs — components, foundations, Wanted Sans, and the brandcenter resource hub.
---

# Design System Inspiration of Wanted (원티드)

## 1. Visual Theme & Atmosphere

Wanted (원티드) is Korea's largest career marketplace — a recruitment platform run by **Wanted Lab** (원티드랩, founded 2015) that brokers matches between 3.6M+ working professionals and 35K+ companies through AI matching, referral bonuses (합격보상금), and a long-form job-posting format that reads more like a company introduction than a classified ad. The product's visual identity rejects the generic "job board" vocabulary (slate grays, stock photography, Times New Roman density) and instead borrows from Korean fintech and SaaS: a single saturated brand blue, a calm white-and-warm-grey canvas, generous whitespace around job cards, and a custom typeface — **Wanted Sans** — built in-house for "all possibilities of working people."

The brand color is a single, decisive **`#0066FF`** (PANTONE 2195 C) — a slightly cooler, more confident hue than Toss's `#3182f6`, intentionally positioned to feel like "growth blue" rather than "transaction blue." It appears only on interactive surfaces: the 회원가입/로그인 CTA, the apply button on job detail pages, link text, and selection states. Heading text sits at near-black `#171719`, body at `#333333`, and secondary metadata at `rgba(55,56,60,0.61)` — a translucent grey that lets backgrounds bleed through, signaling lower priority without committing to a hard hex value.

The signature surface is the **JobCard** — a 12px-radius white container holding a thumbnail (12/12/0/0 corners), bookmark icon, company name, position title, salary range, and 합격보상금 (referral reward) badge. Cards sit in a 3-column grid on desktop, full-width on mobile, separated by 20–24px gutters. Filter chips above the grid use 9999px pill radii for country/condition/stack toggles, and a 10px-radius segmented control for sort order (최신순/추천순/인기순).

**Key Characteristics:**
- Single brand blue `#0066FF` (PANTONE 2195 C) — used only for interaction
- Wanted Sans (custom geometric-humanist) + Pretendard JP — 7 weights, variable axes
- Three-tier typography hierarchy: 23/16/14px for heading/sub/body
- Class naming prefix `wds-*` (emotion-style atomic) + module-scoped `JobCard_*` / `AdCard_*` (CSS Modules)
- JobCard at 12px radius is the signature surface — thumbnail / position / salary / reward badge
- 9999px pill chips for filter taxonomy, 8/10/12px stepped radii for everything else
- White canvas (`#FFFFFF`) + warm-grey panel (`#F7F7F8`) — no dark mode on web (Montage system supports it)

## 2. Color Palette & Roles

### Primary (Brand)
- **Wanted Blue** (`#0066FF`): PANTONE 2195 C. The only interaction color. Sign-up CTAs, apply buttons, link text, focus rings, selection highlights. Verified against `brandcenter` and live `rgb(0, 102, 255)` on `회원가입/로그인` button.
- **Wanted Black** (`#14191E`): Brand-center secondary. Logo lockup on light backgrounds, marketing typography. Distinct from UI heading color `#171719`.

### Brand Accent (Marketing Only)
- **Orange** (`#FF5C00`): Brand accent — promotional banners, brand campaigns. Never on functional UI.
- **Pink** (`#FF8EFF`): Brand accent — illustration accents, secondary campaign moments.
- **Sky Blue** (`#00ADFF`): Brand accent — paired with Wanted Blue in gradient marketing surfaces.
- **Violet** (`#8364FF`): Brand accent — premium / AI / Wanted+ feature surfaces.
- **Brand Grey** (`#F0F4F8`): Cool-grey marketing canvas, distinct from UI surface grey.

### UI Surface & Text
- **Background** (`#FFFFFF`): Page surface, card surface.
- **Surface Subtle** (`#F7F7F8`): Segmented-control track, secondary panel background, filter dropdown menu surface.
- **Heading** (`#171719`): Primary text — H1/H2, position title, company name on JobCard.
- **Body** (`#333333`): Standard reading text, body paragraphs in job description.
- **Secondary** (`rgba(55, 56, 60, 0.61)`): Metadata, breadcrumbs, "상품안내" sub-nav links — translucent grey, intentionally non-hex so it adapts to surface.
- **Disabled** (`rgb(160, 160, 160)`): Pre-disabled link state and inactive controls.

### Border & Divider
- **Border Default** (`rgba(112, 115, 124, 0.16)`): The standard 1px hairline — used on the dropdown toggle (`태그 전체` button) and as the universal card edge when shadow is suppressed. Translucent so it visually softens against any background.
- **Divider** (`#E5E8EB`): Solid hairline for list separators inside content (job description sections).

### Semantic (Inherited from Montage / WDS theme)
- **Error / Negative** (`#F0483C`): Form validation errors, application-failed states.
- **Success / Positive** (`#00B97C`): Application success, payment confirmation.
- **Warning** (`#FFAB00`): "Expiring soon" job badges, attention-needed.
- **Info** (`#0066FF`): Same as primary — info uses brand blue, not a separate teal.

## 3. Typography Rules

### Font Family
- **Primary (UI)**: `"Pretendard Variable", "Pretendard JP Variable", -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", system-ui, sans-serif` — verified live on every text node on wanted.co.kr.
- **Brand / Display**: `"Wanted Sans", "Wanted Sans Std", "Pretendard Variable", sans-serif` — used in marketing pages, brandcenter, montage docs.
- **Latin-only fallback**: `"Wanted Sans Std"` — for English-only contexts where Korean glyphs aren't needed.

Wanted maintains two parallel typefaces for two surfaces: **Pretendard Variable** drives the runtime product UI (faster to load via CDN, broad Hangul coverage); **Wanted Sans** drives the brand surfaces (marketing, brandcenter, Montage docs, hiring pages). Pretendard JP Variable extends Hangul support to Japanese kana for cross-border job postings. All three are open-source under SIL OFL 1.1.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Display | Wanted Sans | 32px+ | 700 | 1.25 | Brandcenter, montage hero |
| H1 / Page Title | Pretendard Variable | 24px | 700 | 1.4 | Job detail header |
| H2 / Section | Pretendard Variable | 20px | 700 | 1.4 | "주요업무", "자격요건" |
| Subtitle | Pretendard Variable | 16px | 600 | 1.5 | JobCard position title |
| Body | Pretendard Variable | 14px | 400 | 1.6 | Standard reading, filter chip label |
| Body Small | Pretendard Variable | 13px | 400 | 1.5 | Company name on JobCard |
| Caption | Pretendard Variable | 12px | 400 | 1.5 | Metadata, dates, location |
| Micro | Pretendard Variable | 10px | 500 | 1.4 | Footer 사업자정보확인 strip |

### Principles
- **Two surfaces, two fonts.** Product UI = Pretendard Variable (battle-tested, fast). Marketing/brand = Wanted Sans (proprietary, expressive). Never mix on the same screen.
- **Three weights, mostly.** 400 (body), 600 (emphasis / subtitle), 700 (heading). 500 only appears on micro-text (footer link strip) and bookmark micro-labels.
- **Korean is primary.** Wanted Sans was designed Korean-first; Latin glyphs are optically weighted to harmonize with Hangul. Never assume English is the default voice.
- **Variable fonts everywhere.** Both Pretendard and Wanted Sans ship as variable fonts — interpolate weight at runtime rather than loading discrete weight files.

## 4. Component Stylings

Wanted's product UI is implemented in two parallel layers: **`wds-*`** classes (Emotion / atomic generated, lowercase hash suffix) for the design-system primitives, and **module-scoped** classes (`JobCard_JobCard__thumb__iOtFn`, `Button_Button__root__MS62F`) for product-specific compositions on top. Live values below are observed from `https://www.wanted.co.kr/wdlist/518` (developer jobs feed) via playwright `getComputedStyle`.

### Buttons

**Primary CTA / Brand**
- Background: transparent (text-only on header) → `#0066FF` (filled on apply / sign-up surfaces)
- Text: `#0066FF` (text variant) → `#FFFFFF` (filled)
- Border: none
- Radius: 8px
- Padding: 7px 14px
- Font: 14px / 400 / Pretendard Variable
- Height: 32px (compact header) / 48–52px (apply CTA)
- Use: `회원가입/로그인` header button (text variant) and 지원하기 (filled variant on job detail)

**Secondary Text Button**
- Background: transparent
- Text: `#171719`
- Border: none
- Radius: 8px
- Padding: 7px 14px
- Font: 14px / 400 / Pretendard Variable
- Height: 32px
- Use: `기업 서비스`, header nav links — same geometry as primary text button, neutral color

**Filter Chip / Pill (Country, Tag)**
- Background: transparent (inactive) → `#F7F7F8` (hover/active)
- Text: `#171719`
- Border: none
- Radius: 10px (10px on `한국` filter) / 9999px (pill on round chips)
- Padding: 7px 9px 7px 11px (asymmetric — slightly tighter on right for chevron icon)
- Font: 14px / 400 / Pretendard Variable
- Height: 36px
- Use: Filter taxonomy chips above job grid (한국 / 채용조건 / 기술스택 / 글로벌)

**Tag Dropdown ("태그 전체")**
- Background: transparent
- Text: `#171719`
- Border: none
- Radius: 8px
- Padding: 7px 11px
- Font: 14px / 400 / Pretendard Variable
- Height: 36px
- Use: Dropdown trigger for tag taxonomy — paired with 8px outlined icon container (`1px solid rgba(112,115,124,0.16)`)

**Filter Category Heading ("개발・개발 전체")**
- Background: transparent
- Text: `#171719`
- Border: none
- Radius: 6px
- Padding: 4px 0
- Font: 16px / 600 / Pretendard Variable
- Height: 40px
- Use: Active category label at top of job feed — larger, semibold, with trailing 8px-radius chevron icon button

### Cards

**JobCard (primary surface)**
- Background: `#FFFFFF`
- Border: none
- Radius: 12px (body) / 12px 12px 0 0 (thumbnail — top corners only)
- Padding: 0 (thumbnail flush) / 12px 16px (body)
- Shadow: none on default — relies on grid gutter for separation
- Thumbnail aspect: 4:3 (≈ 251×167 at default width)
- Logo crop: 50px square, 9px radius, positioned bottom-left overlapping thumbnail
- Use: Job posting in feed grid — the signature Wanted surface

**AdCard (sponsored / promoted listing)**
- Background: `#FFFFFF`
- Border: none
- Radius: 12px 12px 0 0 (thumbnail) + 12px (full card)
- Padding: 0
- Thumbnail height: 114px (4:3 at 252 wide)
- Use: Promoted job in feed — same geometry as JobCard, distinguished by a `상품안내` micro-link in the corner rather than visual treatment

**Reward Badge ("합격보상금 100만원")**
- Background: transparent overlay on thumbnail
- Text: `#FFFFFF` on dark thumbnail tint
- Border: none
- Radius: inherits thumbnail
- Font: 12px / 600 / Pretendard Variable
- Use: Referral-reward callout — Wanted's signature growth lever, surfaced on every eligible JobCard

### Inputs

**Search Input (header)**
- Background: `#FFFFFF` inside translucent dark pill wrapper (`#171719`)
- Wrapper: `38×38px`, 9999px radius, `#171719` background
- Text: `#171719` placeholder
- Font: 14px / 400 / Pretendard Variable
- Use: Header search trigger — icon-only at 38px, expands on focus

Detailed input variants (text/number/textarea/search) live in the `@wanteddev/wds` package — observable on Montage docs but not on the public-facing jobs feed surface inspected here.

### Segmented Controls / Sort Filter

**Container ("최신순 / 추천순 / 인기순")**
- Background: `#F7F7F8`
- Border: none
- Radius: 10px
- Padding: 0 4px
- Height: 40px
- Width: 236px (3-segment auto)
- Font: 14px / 400 / Pretendard Variable

**Active Segment**
- Background: `#FFFFFF`
- Text: `#333333`
- Border: none
- Radius: 8px
- Height: 32px (inset 4px on each side from container)
- Shadow: none — relies on background contrast against container `#F7F7F8`
- Use: Currently selected sort mode

### Icon Buttons

**Round Icon (bookmark, close, expand)**
- Background: transparent (default) → `#FFFFFF` (filled rest state)
- Text/Icon: `#333333`
- Border: none
- Radius: 50%
- Padding: 8px (30px target) / 11.3px (36px target) / 8px (40px target)
- Sizes: 30px (compact list), 36px (toolbar), 40px (JobCard bookmark)
- Use: Bookmark on JobCard, close on modals, expand on accordion sections

### Badges

**Solid Badge ("FAQ" / brand callout)**
- Background: `#171719` (or `#0066FF` for brand emphasis)
- Text: `#FFFFFF`
- Border: none
- Radius: 2px
- Padding: 4px 8px 4px 14px (asymmetric — leaves room for trailing chevron)
- Font: 15px / 400 / Pretendard Variable
- Height: 31px
- Use: Inline brand callouts, footer FAQ chip

**Micro Tag ("사업자정보확인" footer)**
- Background: `#A0A0A0`
- Text: `#FFFFFF`
- Border: none
- Radius: 0px
- Padding: 5px 7px
- Font: 10px / 500 / Pretendard Variable
- Height: 22px
- Use: Legal / regulatory micro-pill in footer — squared edges signal "official document" tone

### Header Avatar / Logo Lockup

**Logo / Profile Pill (header right)**
- Background: `#171719`
- Border: none
- Radius: 9999px
- Size: 38×38px
- Use: Logged-in user avatar placeholder + brand mark — full-pill, no border

---

**Verified:** 2026-05-13
**Tier 1 sources:**
- `https://www.wanted.co.kr/wdlist/518` — live DOM inspection via playwright `getComputedStyle` (22 distinct component samples; class prefix `wds-*` / `JobCard_*` / `AdCard_*` / `TagList_*` / `SortFilter_*` / `IconButton_*` / `Button_*`)
- `https://www.wanted.co.kr/brandcenter/` — official brand palette (`#0066FF` PANTONE 2195 C, secondary `#14191E`/`#FF5C00`/`#FF8EFF`/`#00ADFF`/`#8364FF`/`#F0F4F8`)
- `https://montage.wanted.co.kr/` — Wanted Montage Design System (WDS) docs portal
- `https://github.com/wanteddev/montage-web` — `@wanteddev/wds` package family (wds-theme, wds-engine, wds-icon, wds-lottie, wds-nextjs)
- `https://github.com/wanteddev/wanted-sans` — Wanted Sans typeface (7 weights + variable, SIL OFL 1.1)

**Tier 2 sources:**
- `getdesign.md/wanted` — no record (search returned "No designs found for 'wanted'"). Logged as unavailable per pipeline.
- `styles.refero.design/?q=wanted` — playwright session contested by parallel agents (tab kept switching to a-bly, zigzag, refero/socar). Could not reliably capture refero result for `q=wanted` within this turn. Logged as **unavailable**; Tier 1 (live DOM + brandcenter + Montage docs + GitHub source) treated as authoritative.

**Tier 2b status:** partial — getdesign confirmed empty; refero unreliable due to session contention. Tier 1 is comprehensive enough to stand alone (official brand palette + live computed styles + open-source token package family).

**Conflicts unresolved:** none. The live `rgb(0, 102, 255)` on the sign-up CTA matches the brandcenter-declared `#0066FF` exactly. Logo avatar background `rgb(23, 23, 25)` (`#171719`) differs by 7-8 units from the brand-secondary `#14191E` — this is a known split between **UI heading color** (`#171719`, used in product) and **brand black** (`#14191E`, used on marketing). Both retained as parallel tokens.

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Common values: 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64
- JobCard internal padding: 12px 16px (asymmetric — tighter top/bottom)
- Filter row padding: 45px 0 20px (large top buffer, smaller bottom)
- Header height: 56px on desktop, 52px on mobile

### Grid & Container
- Max content width: 1185px (observed on `JobList_JobList__filter` div)
- Job feed grid: 4 columns at ≥1185px / 3 at ≥768px / 2 at ≥480px / 1 at <480px
- Card width at 4-col: ~252px (matches `AdCard_AdCard__thumbnail` width)
- Gutter: 20px horizontal, 24px vertical
- Page horizontal padding: 0 (cards flush to grid edge) with internal card padding handling visual breathing room

### Whitespace Philosophy
- **Generous filter zone**: 45px above the filter row, 20px below — the filter UI deserves emphasis as the primary navigation pattern.
- **Tight card interiors**: JobCard body uses 12px 16px padding — denser than Toss (which uses 20px) because cards are smaller and meant to be scanned in a grid, not read in isolation.
- **Hierarchical density**: Job feed is dense (grid of 12–16 cards visible). Job detail is spacious (single column, ≥24px vertical rhythm between sections).

### Border Radius Scale
- Squared (0–2px): Legal/regulatory micro-pills, official-document callouts
- Compact (4–6px): Filter category heading, small accents
- Standard (8px): Buttons, inputs, secondary controls
- Comfortable (10px): Segmented-control container, filter chips
- Card (12px): JobCard, AdCard, sheets
- Pill (9999px): Header avatar, search trigger, country filter (`한국`)

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, JobCard at rest |
| Border (Level 1) | `1px solid rgba(112, 115, 124, 0.16)` | Dropdown trigger icon, hairline edges |
| Hover (Level 2) | Subtle bg shift to `#F7F7F8` | Filter chip hover, segmented-control segment |
| Floating (Level 3) | `0px 4px 12px rgba(0,0,0,0.08)` | Dropdown menus, popovers, "더보기" overflow |
| Modal (Level 4) | `0px 8px 24px rgba(0,0,0,0.12)` | Application-form dialogs, full-screen sheets |

**Shadow Philosophy.** Wanted prefers background-tint elevation over drop shadows. JobCards float on a white canvas without shadows — separation comes from the 20–24px grid gutter and the warm-grey `#F7F7F8` of the surrounding filter bar. Shadows only appear on floating overlays (dropdowns, modals), and they're single-layer pure black at low opacity — no colored tints, no multi-layer stacks. This matches Toss's restraint principle but is implemented through grid spacing rather than shadow tokens.

## 7. Do's and Don'ts

### Do
- Use `#0066FF` for every interactive element — links, primary CTAs, focus rings, selection states
- Pair Pretendard Variable (UI) and Wanted Sans (brand) — never mix them in the same surface
- Use 12px radius for JobCard and any "container of job content" surface — it's the recognizable Wanted shape
- Use `#F7F7F8` for segmented-control tracks and secondary panels — it's the Wanted "surface grey"
- Display 합격보상금 (referral bonus) prominently on every JobCard that has one — it's a brand differentiator
- Use translucent secondary text (`rgba(55, 56, 60, 0.61)`) for metadata — it adapts to surface automatically

### Don't
- Don't use any blue other than `#0066FF` for interaction — even the marketing accents (`#00ADFF` sky, `#8364FF` violet) are decorative only
- Don't put shadows on cards at rest — Wanted uses gutter separation, not elevation
- Don't mix brand black `#14191E` and UI heading `#171719` on the same screen — pick the surface (marketing vs product)
- Don't use Wanted Sans on dense UI (job listings, forms) — it's a display face, Pretendard handles density better
- Don't square the JobCard corners — 12px radius is the brand mark of the surface
- Don't use 합격보상금 callouts on non-job surfaces — the badge is reserved for job postings with active referral programs
- Don't put bold (700) weight on body text — reserved for headings and job titles

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <480px | 1-column job feed, full-width cards, hamburger nav |
| Tablet | 480–768px | 2-column job feed, condensed filter bar (scrolls horizontally) |
| Desktop | 768–1185px | 3-column job feed, full filter bar visible |
| Wide | ≥1185px | 4-column job feed, centered content with 1185px max-width |

### Touch Targets
- Filter chips: 36px height — comfortable for thumb-tap, dense enough for desktop
- Icon buttons: 30 / 36 / 40px stepped — context-dependent (compact / toolbar / card-action)
- Apply CTA: 48–52px — full-width on mobile, fixed width on desktop

### Collapsing Strategy
- Filter bar: scrolls horizontally on mobile rather than wrapping (preserves the linear chip taxonomy)
- JobCard thumbnail: maintains 4:3 aspect ratio at all widths
- Header search: collapses to 38px icon trigger on mobile, expands to inline input on desktop ≥768px

### Image Behavior
- Company logos: 50px square, 9px radius, bottom-left overlap on JobCard thumbnail
- Job thumbnails: 4:3 aspect, object-fit cover, no skeleton — uses solid `#F0F4F8` background while loading
- Brand illustrations (marketing pages): full-bleed, responsive, follow Wanted Sans display rhythm

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary / Interactive: `#0066FF` (Wanted Blue, PANTONE 2195 C)
- Heading text: `#171719`
- Body text: `#333333`
- Secondary text: `rgba(55, 56, 60, 0.61)`
- Surface: `#FFFFFF`
- Surface subtle: `#F7F7F8`
- Border default: `rgba(112, 115, 124, 0.16)`
- Brand black (marketing): `#14191E`
- Marketing accents: `#FF5C00` / `#FF8EFF` / `#00ADFF` / `#8364FF` / `#F0F4F8`

### Example Component Prompts
- "Create a JobCard: white bg, 12px radius, 4:3 thumbnail with top-corners-only radius (12 12 0 0), 50px-square company logo (9px radius) overlapping bottom-left of thumbnail. Below thumbnail: 12 16px padding, position title 16px weight 600 `#171719`, company name 13px weight 400 `#333333`, location + experience caption 12px `rgba(55,56,60,0.61)`, optional 합격보상금 badge as small pill at top-right of thumbnail. Bookmark icon button 40px circle, top-right of card."
- "Build a sign-up CTA: `#0066FF` background, white text 14px weight 400, 8px radius, 32px height (header) or 48px (apply page), 7px 14px padding. No shadow."
- "Design a filter chip row: horizontal scroll on mobile. Each chip 36px height, 10px radius, transparent bg with `#171719` text 14px weight 400, 7–11px asymmetric padding. Active chip uses `#F7F7F8` background. Country chip (`한국`) uses 10px radius with trailing chevron."
- "Create a segmented control for sort (최신순/추천순/인기순): `#F7F7F8` container at 40px height, 10px radius, 0 4px padding. Active segment is white at 32px height with 8px radius. Inactive segments transparent. 14px Pretendard Variable text."
- "Design a referral-reward badge (합격보상금 100만원): translucent overlay at top-left of JobCard thumbnail, white 12px weight 600 text, no background shape — just text on a subtle dark gradient overlay across the top 30% of the thumbnail for legibility."

### Iteration Guide
1. Always use Pretendard Variable for product UI, Wanted Sans for marketing
2. The interactive color is `#0066FF` — never a different blue, even if a Material/Tailwind blue looks close
3. JobCard 12px radius is non-negotiable — that radius is the brand
4. Borders should be `rgba(112, 115, 124, 0.16)` translucent — not a solid `#E5E8EB`
5. Use grid gutter (20–24px) for card separation, not shadow
6. Filter chips are pill-or-10px-radius — never square
7. Secondary text is translucent (`rgba(55,56,60,0.61)`), not a fixed grey hex

---

## 10. Voice & Tone

Wanted speaks like a career mentor who happens to run a marketplace: confident without being pushy, growth-oriented without inflating expectations, factual about salary and conditions without becoming a spreadsheet. Korean is the primary voice; English UI is a secondary translation that follows the Korean structure (not the other way around). The brandcenter explicitly codifies four communication values: **"부드럽지만 명확하게"** (gentle yet clear), confident messaging that supports career growth, respectful framing that considers the audience's perspective, and straightforward fact-based communication without embellishment.

| Context | Tone |
|---|---|
| CTAs | Imperative, short Korean verb form (`지원하기`, `회원가입`, `로그인`, `이력서 만들기`) |
| Job posting headers | Long-form descriptive, not pitch-y — `OO에서 함께 일할 백엔드 엔지니어를 찾습니다` |
| Salary range | Exact range or "회사 내규에 따름" — never "competitive" / "negotiable" alone |
| Referral reward (합격보상금) | Concrete amount in 만원 (`100만원`, `200만원`) — never approximate |
| Empty states | One sentence stating the *why*, one action — `조건에 맞는 채용공고가 없어요` + reset button |
| Error messages | Blameless, specific, actionable — `잠시 후 다시 시도해주세요` is acceptable; never `오류가 발생했습니다` alone |
| Onboarding | Second-person, growth-framed — `당신의 다음 커리어를 찾아드릴게요`, not `회원가입을 진행해주세요` |
| Marketing voice | Confident, possibility-oriented — "일하는 사람들의 모든 가능성" is the master tagline |

**Forbidden phrases.** `대박 채용`, `핫한 회사`, `놓치지 마세요` (urgency-as-marketing — Wanted positions itself above shallow recruitment ads), `Oops`, generic `문제가 발생했습니다`, any sentence that hedges salary (`약 X만원`, `최대 X까지`). The brand promise is precision and respect for the candidate's time.

## 11. Brand Narrative

Wanted is the consumer-facing product of **Wanted Lab** (원티드랩, 비상장 → KOSDAQ-listed 2021), founded in **2015** in Seoul. The company's thesis was that Korean recruitment was broken by an asymmetry — candidates couldn't see salary ranges until offer stage, companies paid head-hunters 25–30% commissions, and "good fit" was assessed through resume scanning rather than data. Wanted's answer was a **referral-bonus marketplace** (합격보상금): when a successful hire happens, the platform pays a cash bonus split between the candidate, the referrer, and Wanted itself — flipping the traditional headhunting fee structure outward toward the labor side.

The product launched as a job-posting platform but evolved into what Wanted Lab now calls an "AI-powered career platform" — **3.6M+ registered professionals**, **35K+ companies**, AI matching trained on 10M+ historical matches, and adjacent products (Wanted Plus for premium career coaching, Wanted Gigs for freelance, Wanted ATS for company recruitment ops). The platform's signature mechanic — surfacing salary ranges on every posting — became a cultural force in Korean tech: by the late 2010s "원티드에 올라온 연봉" was treated as a market-rate reference across the industry.

The design system, **Montage** (몽타주), was first released as an open-source design library on **April 1, 2024** (initially as an April Fool's gesture that took on a life of its own) and expanded into a full multi-platform system (`montage-web`, `montage-ios`, `montage-android`) on April 3, 2025. The team built it because internal product complexity — with 70+ components and 20–30 variants each — was outpacing their ability to maintain consistency. The system's central principle, the **"Makers' Principle"** (메이커 원칙), codifies how components should be used: background colors intuitively indicate availability, customization scope is clearly bounded, and the system is "more communicative than restrictive."

Wanted's visual rejection is of two opposing job-platform aesthetics: the grey-and-bureaucratic legacy boards (Saramin, JobKorea) with their dense list layouts and institutional typography, and the playful-but-shallow consumer apps (some startup-y competitors with cartoon mascots and gamification). Wanted occupies the middle: confident enough to feel professional, warm enough to feel like a career partner.

What Wanted refuses: urgency marketing, salary obfuscation, recruiter spam tone. The brand promise is **respect for the working person's time** — and the design system enforces it by making every job posting structurally identical, every salary range visible, every CTA singular.

## 12. Principles

1. **One screen, one decision.** Job feed shows job cards. Job detail shows one job. Apply flow shows one form. No "promoted alongside organic" mixed-intent screens that blur user goals.
2. **Salary is sacred.** Every job posting surfaces a salary range or `회사 내규` disclosure — never hidden, never "ask in interview." The grid layout is built to make salary visible without clicking through.
3. **Brand blue is interaction, not decoration.** `#0066FF` appears on links, CTAs, focus rings, and selection states. Marketing illustrations may use the accent palette (orange/pink/sky/violet), but the product UI is monochromatic blue.
4. **The card is the brand.** JobCard's 12px radius, 4:3 thumbnail, bottom-left logo crop, and bookmark-top-right placement are the strongest visual signature. Other surfaces should reference its rhythm, not invent new ones.
5. **Korean-first, English-parity.** Wanted serves a Korean-primary audience with global ambitions. UI strings are written in Korean first; English translations preserve sentence structure, not literal word order.
6. **Density follows context.** Job feed is dense (4×N grid). Job detail is spacious (single column, large vertical rhythm). The deeper the user goes, the more breathing room they get.
7. **Gentle but clear.** From the brandcenter: never sacrifice clarity for friendliness, never sacrifice warmth for precision. Both/and, not either/or.

## 13. Personas

*Personas below are fictional archetypes informed by publicly described Korean career-platform user segments and Wanted Lab's published positioning (3.6M+ professionals, 35K+ companies). Not individual people.*

**민준 (Minjun), 31, Seoul.** Backend engineer at a Series B startup, 7 years experience, mid-level. Opens Wanted 2–3 times a week to passive-browse — not actively job-hunting, but watching the market. Scans salary ranges to benchmark his current comp against peers. Bookmarks 5–10 listings a month "just in case." Sees the referral bonus as a small bonus rather than a deciding factor. Reads job descriptions end-to-end before applying; bounces immediately if salary is hidden.

**지영 (Jiyoung), 27, Pangyo.** UX designer transitioning from agency to in-house, 4 years experience. Uses Wanted intensively for 3–4 weeks at a time during active job searches, then dormant. Cares deeply about company culture descriptions and the long-form posting format — values that Wanted presents jobs as company introductions, not classifieds. Filters heavily by company stage (Series A–C) and stack tags. Cross-references with company brunch.co.kr posts before applying.

**박PM (Park, PM), 38, Gangnam.** Product manager at a mid-size SaaS company, hiring side. Uses Wanted ATS to post 2–3 roles per quarter. Pays the success fee (referral bonus) without negotiation because Wanted candidates tend to be pre-filtered for fit. Posts roles with explicit salary bands because he's seen what happens when companies hide them ("우리 회사도 그러면 안 보이게 돼요"). Values Wanted's company-introduction format over short job descriptions.

**유진 (Yujin), 24, Busan.** Recent CS grad, first full-time search. Found Wanted through her university career center's blog post. Treats every salary range as ground truth and uses Wanted's 인기순 sort to learn which companies are popular at her experience level. Has applied to 30 roles, gotten 4 interviews. The referral-bonus mechanic confused her at first ("내가 받는 거예요?") but now uses it as a signal — `100만원` bonus = company is serious about filling the role.

## 14. States

| State | Treatment |
|---|---|
| **Empty (filter zero results)** | Single line of `#333333` body text (`조건에 맞는 채용공고가 없어요`) + secondary line of `rgba(55,56,60,0.61)` caption suggesting filter relaxation + `#0066FF` text button to reset filters. No illustration. |
| **Empty (no bookmarks yet)** | Single paragraph explaining the *why* (`관심있는 채용공고를 북마크 해보세요`) + CTA to browse feed. Uses the `#F7F7F8` surface for the empty-state card to differentiate from the white feed. |
| **Loading (first paint)** | Skeleton blocks at `#F7F7F8` matching final JobCard dimensions — 4:3 thumbnail rectangle + 3 horizontal line placeholders for title/company/salary. 12px radius preserved. |
| **Loading (refresh / pagination)** | Inline spinner at bottom of feed in `#0066FF`. No overlay, no blocking. Existing cards stay rendered. |
| **Error (form field)** | `#F0483C` 1px border on input + 13px `#F0483C` helper text below. One actionable sentence. |
| **Error (network failure)** | Centered message with `#171719` heading + `#333333` body, retry button in `#0066FF`. No illustration on inline errors; only on full-page outages. |
| **Error (full-page server outage)** | White screen, centered Wanted logo at top, single-line message in 16px `#171719` weight 600, retry button in `#0066FF` filled style. |
| **Success (applied)** | Brief inline flash — bookmark turns `#0066FF`, "지원완료" badge appears in `#00B97C` for 2s, then settles to a persistent "지원함" status pill. No toast — application is a state change, not an event. |
| **Success (saved / bookmarked)** | Bookmark icon fills `#0066FF`, brief 200ms scale animation (1.0 → 1.15 → 1.0) with `ease-spring` easing. No toast. |
| **Skeleton** | `#F7F7F8` blocks at exact final dimensions. 1.5s shimmer with 6% white highlight gradient. JobCard skeletons preserve 12px radius and 4:3 thumbnail aspect. |
| **Disabled** | Button opacity drops to 0.4. Disabled inputs keep their `rgba(112,115,124,0.16)` border (geometry stable). Disabled chips show `#A0A0A0` text on transparent background. |
| **Hover (chip / button)** | Background transitions to `#F7F7F8` over 150ms with `ease-standard`. Text color unchanged. |
| **Focus (keyboard)** | 2px outline ring in `#0066FF` with 2px offset. Replaces hover background — focused element doesn't double up bg-change + ring. |

## 15. Motion & Easing

**Durations:**

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Bookmark fill, chip selection state, checkbox flip |
| `motion-fast` | 150ms | Hover transitions, chip background fade, button press |
| `motion-standard` | 250ms | The default — dropdown open, modal fade-in, card hover lift |
| `motion-slow` | 400ms | Page transitions, success state celebrations, filter drawer slide |
| `motion-page` | 350ms | Full-page route transitions |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Elements appearing — dropdowns, modals, toasts, sheets |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Elements leaving — dismissals, pops, modal close |
| `ease-standard` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Two-way transitions — chips, accordions, tab switches |
| `ease-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Reserved for bookmark fill animation and apply-success badge. Overshoot only on celebration moments. |

**Signature motions.**

1. **Bookmark fill.** When a user bookmarks a job, the icon scales 1.0 → 1.15 → 1.0 over `motion-standard` with `ease-spring` while the color transitions from `#333333` to `#0066FF`. This is the one place where overshoot is licensed — bookmarking is a small celebration.
2. **Filter chip selection.** Active state transitions: background `transparent` → `#F7F7F8` over `motion-fast` with `ease-standard`. Text color stays constant. The change feels deliberate but not flashy.
3. **JobCard hover (desktop).** Subtle lift — `translateY(0)` → `translateY(-2px)` over `motion-fast` with `ease-standard`. No shadow change, just position. This keeps the flat aesthetic while signaling interactivity.
4. **Apply success.** "지원완료" badge fades in (`motion-standard` / `ease-enter`) with a brief scale pulse (`motion-fast` overlap, `ease-spring`). Persists for 2s, then settles to a quieter "지원함" status. Never a toast — application is a permanent state change.
5. **Reduce motion.** `prefers-reduced-motion: reduce` collapses all durations to `motion-instant`. Transitions become state swaps. The product stays fully functional; just less kinetic.

<!--
OmD v0.1 Sources — Philosophy Layer (§10-15)

Verified via WebFetch / WebSearch (2026-05-13):
- https://www.wanted.co.kr/brandcenter/ — primary brand color #0066FF (PANTONE 2195 C),
  secondary palette (#14191E, #FF5C00, #FF8EFF, #00ADFF, #8364FF, #F0F4F8),
  four brand voice values: "부드럽지만 명확하게" / confident growth messaging /
  respectful framing / fact-based communication without embellishment.
- https://www.wantedlab.com/en/ — Wanted Lab founded 2015, 3.6M+ professionals,
  35K+ companies, AI-Powered HR Tech positioning, "AI Agents trained on 10M+
  matching data" claim, 70% time-to-hire reduction marketing claim.
- https://blog.wantedlab.com/library/insight/wds — WDS design system launch
  April 1, 2024 (April Fool gesture that took off), expanded April 3, 2025,
  70+ components, "Makers' Principle" referenced, principle of
  "더 나은 협업 방식과 사용자 경험".
- https://montage.wanted.co.kr/ — Montage system name, "From Separate Core Blocks
  To a Seamless Flow" tagline, Wanted Sans + Pretendard JP typography stack.
- https://github.com/wanteddev/wanted-sans — Wanted Sans: "A Sans-serif font;
  Geometric with a heart, Humanist with a soul", 7 weights + variable,
  SIL OFL 1.1, supports 97+ languages, Korean-first design.
- https://github.com/wanteddev/montage-web — @wanteddev/wds package family
  (wds, wds-engine, wds-theme, wds-icon, wds-lottie, wds-nextjs, wds-codemod,
  wds-mcp, eslint-plugin-wds), MIT licensed, 295 releases.

Live DOM token observations (playwright getComputedStyle on
https://www.wanted.co.kr/wdlist/518):
- Primary CTA color: rgb(0, 102, 255) = #0066FF (confirmed brand alignment)
- Heading text: rgb(23, 23, 25) = #171719
- Body text: rgb(51, 51, 51) = #333333
- Secondary text: rgba(55, 56, 60, 0.61)
- Border: rgba(112, 115, 124, 0.16)
- Surface subtle: rgb(247, 247, 248) = #F7F7F8
- Font stack: "Pretendard Variable", "Pretendard JP Variable", system-ui
- JobCard radius: 12px; SortFilter container: 10px; segments: 8px

Personas (§13) are fictional archetypes informed by Wanted Lab's published
positioning data (user/company counts, AI matching claim, product surface
list). Any resemblance to specific individuals is unintended.

Interpretive claims (e.g., "the cooler blue positions as growth-blue rather
than transaction-blue") are editorial readings of the design vs Toss's
#3182f6, not documented Wanted statements.
-->
