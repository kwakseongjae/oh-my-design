---
id: jobplanet
name: Jobplanet
display_name_kr: 잡플래닛
country: KR
category: saas
homepage: "https://www.jobplanet.co.kr/"
primary_color: "#00c362"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=jobplanet.co.kr&sz=128"
verified: "2026-07-02"
added: "2026-07-02"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-07-02"
  note: "primary = live interactive/CTA green (#00c362); neon highlight green (#00ff91) is a marker accent; green-line (#00c274) an underline/border variant; deep forest (#003a1c) a dark-on-light label. Near-shadowless — separation via #f3f3f4 surface + #e5e6e9 hairline. Product font Pretendard Variable; tech blog uses IBM Plex Sans."
  colors:
    primary: "#00c362"
    primary-bright: "#00ff91"
    green-line: "#00c274"
    green-deep: "#003a1c"
    ink: "#333333"
    ink-strong: "#323438"
    nav: "#4b4c50"
    muted: "#686a6d"
    faint: "#a4a6ad"
    disabled: "#c5c7cc"
    canvas: "#ffffff"
    surface: "#f3f3f4"
    hairline: "#e5e6e9"
    on-primary: "#ffffff"
  typography:
    family: { body: "Pretendard Variable", blog: "IBM Plex Sans" }
    section:    { size: 24, weight: 700, lineHeight: 1.5, use: "Section titles (오늘의 추천, 커뮤니티 인기글)" }
    card-title: { size: 16, weight: 700, lineHeight: 1.5, use: "Card / list-entry headline (stat chips)" }
    nav:        { size: 15, weight: 400, lineHeight: 1.4, use: "Top navigation links" }
    button:     { size: 14, weight: 700, use: "Primary CTA label" }
    input:      { size: 16, weight: 400, use: "Global search field text" }
    body:       { size: 13, weight: 400, lineHeight: 1.5, use: "Body copy, metadata, captions" }
    blog-hero:  { size: 48, weight: 600, lineHeight: 1.0, use: "Tech-blog hero headline (IBM Plex Sans)" }
  spacing: { xs: 4, sm: 6, base: 8, md: 12, lg: 16, xl: 24 }
  rounded: { sm: 4, md: 8, lg: 12, full: 9999 }
  shadow:
    none: "none"
  components:
    button-primary: { type: button, bg: "#00c362", fg: "#ffffff", radius: "5px", height: "40px", padding: "0 16px", font: "14px / 700", use: "Primary CTA (바로가기) — the single interactive green" }
    button-stat-chip: { type: button, bg: "#f3f3f4", fg: "#333333", radius: "8px", height: "48px", padding: "0 16px", font: "16px / 700", use: "Company stat entry (782개의 전∙현직자 리뷰)" }
    icon-button-round: { type: button, bg: "#ffffff", fg: "#333333", border: "1px solid #e5e6e9", radius: "9999px", padding: "6px", height: "32px", use: "Circular carousel / utility icon button" }
    card-content: { type: card, bg: "#ffffff", fg: "#333333", radius: "12px", use: "Story / content card on grey canvas, no shadow" }
    search-input: { type: input, bg: "#ffffff", fg: "#333333", font: "16px / 400", height: "48px", use: "Global search field (기업, 공고, 콘텐츠 검색), borderless" }
    nav-link: { type: tab, fg: "#4b4c50", font: "15px / 400", active: "green #00c362 text on active", use: "Top nav item (기업 랭킹, 커뮤니티, 채용)" }
    badge-highlight: { type: badge, bg: "#00ff91", fg: "#333333", radius: "4px", font: "13px / 400", use: "Neon-green highlight marker / emphasis tag" }
  components_harvested: true
---

# Design System Inspiration of Jobplanet

## 1. Visual Theme & Atmosphere

Jobplanet (잡플래닛) is Korea's leading company-review and recruitment platform — the domestic answer to Glassdoor — and its interface reads like a bright, data-dense information utility rather than a glossy marketing site. The canvas alternates pure white (`#ffffff`) cards over a soft cool-grey page background (`#f3f3f4`), so content organizes itself into flat, scannable blocks. Text sits in a near-black `#333333` (never pure black for body), and a single confident spring-green (`#00c362`) is reserved almost entirely for action: the primary CTA, links, pagination, and inline arrows. The result is trustworthy and functional — a product built to help people compare employers, salaries, and interviews at a glance.

The typographic personality is unmistakably Korean-product-modern. The whole product surface runs on **Pretendard Variable** — the de-facto hangul UI font — with headlines at a restrained 24px / weight 700 and body dropping to a dense 13px / 400 at 1.5 line-height. There is no dramatic display-size hero on the product; hierarchy is carried by weight (700 vs 400) and by the green accent, not by giant type. This is information architecture over spectacle: sizes stay tight so that ratings, review counts, and salary figures can pack in without feeling cramped. Jobplanet's separate **tech blog** (techspace) does adopt a larger editorial voice — a 48px / 600 hero set in **IBM Plex Sans** — a distinct surface that signals "engineering culture," kept deliberately apart from the product chrome.

What distinguishes Jobplanet from flashier fintech or consumer peers is its restraint with depth. Live inspection found `box-shadow: none` across the hero, nav, story cards, and stat chips: separation comes from the flat `#f3f3f4` surface tint and thin `#e5e6e9` hairlines, not from elevation. Geometry is gently rounded — a 5px CTA, 8px stat chips, 12px content cards, and fully-round (9999px) circular icon buttons — never sharp, never heavily pill-shaped. The green comes in a small family: the workhorse `#00c362`, a vivid neon `#00ff91` used as a highlight marker, a slightly teal `#00c274` line/border variant, and a deep forest `#003a1c` for dark-on-light labels. The overall impression is clean, fast, and unintimidating — a serious data tool that still feels friendly.

**Key Characteristics:**
- Pretendard Variable across the entire product; 700 for headlines, 400 for body — weight is the hierarchy signal
- Single spring-green (`#00c362`) reserved for action — CTA, links, pagination, arrows
- Near-black `#333333` text (and `#323438` on some headings) instead of pure black — warmer, more legible
- Neon accent green (`#00ff91`) as a highlight marker, plus a `#00c274` line variant and deep `#003a1c` label green
- Flat depth: `box-shadow: none`; separation via `#f3f3f4` surface tint and `#e5e6e9` hairlines
- Gentle radius ladder — 5px CTA, 8px chips, 12px cards, full-round (`9999px`) icon buttons
- Dense, tight type sizing (13px body, 24px section head) tuned for information-heavy company data
- A separate tech-blog surface in IBM Plex Sans (48px / 600 hero) — editorial voice kept apart from product

## 2. Color Palette & Roles

### Primary
- **Jobplanet Green** (`#00c362`): The primary brand and action color. Background of the primary CTA ("바로가기"), and the text color of links, pagination numbers, footer links, and inline arrows — the system's single "action" hue.
- **Neon Highlight** (`#00ff91`): A vivid spring-green used as a small highlight marker / emphasis background. Brighter and more electric than the primary.
- **Green Line** (`#00c274`): A slightly teal-shifted green used for thin border/underline accents next to green elements.
- **Deep Forest** (`#003a1c`): A very dark green used for dark-on-light label text — a low-key branded alternative to grey for small green-family labels.
- **On-Primary White** (`#ffffff`): Text and icons on top of the green CTA.

### Neutral & Surface
- **Pure White** (`#ffffff`): Card and content surfaces, search field background, text on green/dark.
- **Surface Grey** (`#f3f3f4`): The cool-grey page background and stat-chip fill — the primary flat separation device.
- **Hairline** (`#e5e6e9`): Thin 1px borders on circular buttons, dividers, and card outlines given the shadow-free system.

### Text Hierarchy
- **Ink** (`#333333`): Primary body text, most headings, strong labels — a near-black used instead of pure black.
- **Ink Strong** (`#323438`): A slightly cooler dark used on some section headings.
- **Nav Slate** (`#4b4c50`): Top-navigation link text.
- **Muted Slate** (`#686a6d`): Login/sign-up links and tertiary UI text.
- **Faint Slate** (`#a4a6ad`): Secondary/meta text, captions — the highest-frequency muted tone.
- **Disabled Grey** (`#c5c7cc`): Disabled text, placeholders, lowest-emphasis labels.

## 3. Typography Rules

### Font Family
- **Product**: `Pretendard Variable` (with `Roboto`, `Noto Sans KR` fallbacks) — the document default across the entire product surface, for headings, nav, buttons, and body.
- **Tech blog**: `IBM Plex Sans` (with `Pretendard Variable` fallback) — used only on the techspace engineering blog for its editorial hero and headings.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Section Heading | Pretendard Variable | 24px (1.50rem) | 700 | 1.5 (36px) | Section titles (오늘의 추천, 커뮤니티 인기글) |
| Card / List Title | Pretendard Variable | 16px (1.00rem) | 700 | 1.5 (24px) | Stat chips, card headlines |
| Nav Link | Pretendard Variable | 15px (0.94rem) | 400 | 1.4 | Top navigation items |
| Button | Pretendard Variable | 14px (0.88rem) | 700 | — | Primary CTA label |
| Search Input | Pretendard Variable | 16px (1.00rem) | 400 | — | Global search field text |
| Body | Pretendard Variable | 13px (0.81rem) | 400 | 1.5 (19.5px) | Body copy, metadata, captions |
| Tech-Blog Hero | IBM Plex Sans | 48px (3.00rem) | 600 | 1.0 | techspace hero headline only |

### Principles
- **Weight over size**: The product barely scales type — 24px is the largest common head. Hierarchy comes from 700 vs 400 weight and from the green accent, not from display sizes.
- **Dense body sizing**: Body sits at a tight 13px / 1.5, tuned for information-rich company data (ratings, salaries, review counts) rather than airy marketing copy.
- **One product font**: Pretendard Variable owns every product surface; IBM Plex Sans is quarantined to the tech blog so the editorial voice never bleeds into the product.
- **Normal tracking**: Letter-spacing stays `normal` throughout — there is no tight display tracking because there is no display type in the product.

## 4. Component Stylings

### Buttons

**Primary CTA (Green)**
- Background: `#00c362`
- Text: `#ffffff`
- Radius: 5px
- Padding: 0px 16px
- Height: 40px
- Font: 14px / 700 / Pretendard Variable
- Use: Primary action ("바로가기") — the system's single green CTA

**Stat Chip**
- Background: `#f3f3f4`
- Text: `#333333`
- Radius: 8px
- Padding: 0px 16px
- Height: 48px
- Font: 16px / 700 / Pretendard Variable
- Use: Company stat entry-point ("782개의 전∙현직자 리뷰", "15개의 채용정보")

**Circular Icon Button**
- Background: `#ffffff`
- Text: `#333333`
- Border: 1px solid `#e5e6e9`
- Radius: 9999px (full round)
- Padding: 6px
- Height: 32px
- Use: Carousel prev/next and small utility icon buttons

### Inputs

**Global Search**
- Background: `#ffffff`
- Text: `#333333`
- Font: 16px / 400 / Pretendard Variable
- Height: 48px
- Placeholder: `#c5c7cc`
- Use: Site-wide search field ("기업, 공고, 콘텐츠 검색") — borderless, sits on white

### Cards

**Content / Story Card**
- Background: `#ffffff`
- Text: `#333333`
- Radius: 12px
- Shadow: none
- Use: Story, interview, and recommendation cards on the grey canvas

### Badges

**Neon Highlight**
- Background: `#00ff91`
- Text: `#333333`
- Radius: 4px
- Font: 13px / 400 / Pretendard Variable
- Use: Small highlight marker / emphasis tag

### Navigation
- Background: `#ffffff`
- Text: `#4b4c50`
- Font: 15px / 400 / Pretendard Variable
- Height: 50px items
- Active: green `#00c362` text on the active item
- Secondary links ("로그인", "회원가입"): `#686a6d`
- Use: Top horizontal nav ("기업 랭킹", "커뮤니티", "채용", "콘텐츠", "연봉")

---

**Verified:** 2026-07-02 (omd:add-reference CREATE — Tier 1 live inspect, 2 product surfaces + tech blog)
**Tier 1 sources:** https://www.jobplanet.co.kr/welcome/index, https://www.jobplanet.co.kr/companies, https://techspace.jobplanet.co.kr/
**Tier 2 sources:** getdesign.md/jobplanet (0 DESIGN.md files — not listed); styles.refero.design/?q=jobplanet (no Jobplanet-specific match)
**Conflicts unresolved:** none (both Tier-2 catalogs returned no Jobplanet data; all values from Tier 1 live inspect)

## 5. Layout Principles

### Spacing System
- Base unit: 8px, with a dense small end (4px, 6px) for chip and icon padding
- Scale: 4px, 6px, 8px, 12px, 16px, 24px
- Notable: Interactive padding lands at `0px 16px` horizontally on both the 40px CTA and 48px stat chips, giving a consistent, tappable horizontal rhythm

### Grid & Container
- White content cards float over a full-width `#f3f3f4` grey canvas
- Section headings (24px / 700) anchor each block; recommendation and story cards arrange in horizontal carousels and responsive grids
- The global search input is a prominent, borderless 48px field at the top of company-search surfaces
- Stat chips ("N개의 전∙현직자 리뷰") group review + recruitment counts as flat grey entry points

### Whitespace Philosophy
- **Flat segmentation**: sections separate by background (white cards vs `#f3f3f4` canvas) and `#e5e6e9` hairlines, not by shadow.
- **Dense but breathable**: body type is tight (13px) so data packs in, but generous card radius (12px) and 16px interior padding keep it from feeling cramped.
- **Action lives in one color**: the green `#00c362` is spatially rare — one CTA per block — so the eye always knows where to click.

### Border Radius Scale
- Small (4px): highlight badges, inner elements
- CTA (5px): the primary green button
- Medium (8px): stat chips, mid-size containers
- Large (12px): content and story cards — the workhorse card radius
- Full (9999px): circular icon/carousel buttons

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text, most surfaces |
| Tint (Level 1) | `#f3f3f4` background shift | Card/section separation without elevation |
| Hairline (Level 2) | `1px solid #e5e6e9` border | Circular button outlines, dividers |

**Shadow Philosophy**: Jobplanet is a near-shadowless system. Live inspection returned `box-shadow: none` across the hero, nav, story cards, and stat chips. Depth and grouping are communicated entirely through flat tinted surfaces (`#f3f3f4`) and thin `#e5e6e9` hairlines. This is a deliberate modern-flat choice that keeps a data-heavy company-review product feeling fast, light, and mobile-native — avoiding the heavy card-stack look. When emphasis is needed the system reaches for the green (`#00c362`) or the neon highlight (`#00ff91`), never elevation.

## 7. Do's and Don'ts

### Do
- Use Pretendard Variable across the entire product; reserve IBM Plex Sans for the tech blog only
- Carry hierarchy with weight (700 vs 400) rather than large display sizes
- Reserve green (`#00c362`) for action — CTA, links, pagination — keep it the single "action" color
- Use near-black `#333333` for body text instead of pure black
- Separate sections with the `#f3f3f4` surface tint and `#e5e6e9` hairlines, not shadows
- Keep body dense (13px / 1.5) so ratings, salaries, and review counts pack in cleanly
- Use the gentle radius ladder — 5px CTA, 8px chips, 12px cards, full-round icon buttons
- Use the neon `#00ff91` sparingly as a highlight marker, not as a fill color

### Don't
- Add drop shadows for elevation — Jobplanet is a flat, shadow-free system
- Spread green across many elements — it dilutes the single-action signal
- Use pure black (`#000000`) for body text — reserve near-black `#333333`
- Set giant display headlines on the product — the largest common head is 24px
- Use IBM Plex Sans on product surfaces — that voice belongs to the tech blog
- Use sharp square corners on cards or chips — everything is gently rounded
- Introduce a second saturated accent color — the green family is the only saturated hue
- Rely on size alone for hierarchy — weight and the green accent do that work

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, carousels become horizontal scroll, nav collapses |
| Tablet | 640-1024px | 2-up card grids, moderate padding |
| Desktop | 1024-1440px | Full layout, multi-column card grids, centered content |

### Touch Targets
- Primary CTA at 40px height with 0px 16px padding — comfortably tappable
- Stat chips at 48px height for easy tapping into company detail
- Nav items at 50px height with 16px horizontal padding
- Search field at 48px height, full-width on narrow viewports

### Collapsing Strategy
- Section heads (24px / 700) hold their size; card grids reflow multi-column → stacked
- Recommendation/story carousels switch to horizontal scroll on mobile
- White cards maintain 12px radius across breakpoints; grey canvas stays full-width
- Global search remains a prominent field near the top on all sizes

### Image Behavior
- Card thumbnails and company logos carry no shadow at any size, consistent with the flat system
- Story cards keep their 12px radius; imagery is contained within the white card

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary action / CTA / links: Jobplanet Green (`#00c362`)
- Neon highlight marker: (`#00ff91`)
- Green line / border accent: (`#00c274`)
- Deep green label: (`#003a1c`)
- Body / heading text: Ink (`#333333`), Ink Strong (`#323438`)
- Nav link: Nav Slate (`#4b4c50`)
- Secondary link: Muted Slate (`#686a6d`)
- Meta / caption: Faint Slate (`#a4a6ad`)
- Disabled / placeholder: (`#c5c7cc`)
- Canvas: Pure White (`#ffffff`); Surface: Grey (`#f3f3f4`); Hairline: (`#e5e6e9`)

### Example Component Prompts
- "Create a company-review card block on a #f3f3f4 grey canvas. White card (#ffffff, 12px radius, no shadow). Section title 24px Pretendard Variable weight 700, #333333. Inside, a grey stat chip: #f3f3f4 background, #333333 text, 8px radius, 0px 16px padding, 48px height, 16px/700 — '782개의 전∙현직자 리뷰'. One green CTA: #00c362 background, white text, 5px radius, 40px height, 14px/700."
- "Build a top nav: white 50px header. Pretendard Variable 15px weight 400 links, #4b4c50 text, green #00c362 on the active item. Login/sign-up links in #686a6d."
- "Design a global search field: white #ffffff background, borderless, 48px height, 16px Pretendard Variable, #333333 text, #c5c7cc placeholder — '기업, 공고, 콘텐츠 검색'."
- "Add a neon highlight badge: #00ff91 background, #333333 text, 4px radius, 13px Pretendard Variable."

### Iteration Guide
1. Pretendard Variable everywhere on product; IBM Plex Sans only on the tech blog
2. Green (`#00c362`) is the single action color — don't spread it
3. No shadows — separate with `#f3f3f4` tint and `#e5e6e9` hairlines
4. Weight, not size, drives hierarchy — 700 heads, 400 body
5. Text color is `#333333` near-black, never pure black for body
6. Radius ladder: 5px CTA, 8px chips, 12px cards, full-round icon buttons
7. Keep body dense (13px / 1.5) for data-rich company layouts

---

## 10. Voice & Tone

Jobplanet's voice is **candid, insider, and pragmatic** — the tone of a trusted colleague who tells you what a company is really like to work at. Copy is plain Korean, information-first, and comfortable with real employee slang ("네카라쿠배", "이직러") because the product's whole premise is unvarnished, from-the-inside truth about employers. It never oversells: headlines state what you'll find ("전∙현직자가 직접 평가한 '사내문화가 좋은 기업'") rather than hyping an outcome. The register treats the user as a job-seeker or career-mover who deserves transparent data — reviews, salaries, interview reports — not a marketing funnel.

| Context | Tone |
|---|---|
| Section headings | Descriptive, benefit-clear. "전∙현직자가 직접 평가한 '사내문화가 좋은 기업'". |
| Stat / entry chips | Plain and factual. "782개의 전∙현직자 리뷰", "15개의 채용정보". |
| CTAs | Direct, low-pressure. "바로가기", "더 보기". |
| Content / community titles | Conversational, insider, sometimes playful. "이직러가 꼽은 '네카라쿠배' 중 1위는?". |
| Trust / data framing | Concrete and sourced. Emphasizes that reviews come from 전∙현직자 (current/former employees). |

**Voice samples (verbatim from live surfaces):**
- "NO.1 기업 정보 플랫폼 | 잡플래닛" — page title (category-leadership claim). *(verified live 2026-07-02)*
- "전∙현직자가 직접 평가한 '사내문화가 좋은 기업'" — section head (transparency framing). *(verified live 2026-07-02)*
- "782개의 전∙현직자 리뷰" — stat chip (data-density, sourced count). *(verified live 2026-07-02)*

**Forbidden register**: hype superlatives detached from data, fear-based career pressure, undefined jargon, exclamation-heavy marketing. Jobplanet's authority comes from being specific and sourced, not loud.

## 11. Brand Narrative

Jobplanet (잡플래닛) launched in **2014**, built by the team that would become **BrainCommerce** (later operating under the Jobplanet/기업 정보 group), to solve a distinctly Korean information asymmetry: job-seekers had almost no transparent, employee-sourced view of what companies were actually like — culture, salary, management, interview process — before they signed on. Jobplanet's founding premise was to open that black box by aggregating reviews and ratings from 전·현직자 (current and former employees), positioning itself as the country's answer to Glassdoor.

Over the following decade the product matured into Korea's leading 기업 정보 (company-information) and recruitment platform, layering salary data, interview reports, company rankings, a jobs marketplace, and community discussion on top of the original review core. It also grew a B2B side — employer-branding and recruitment services for companies (기업 회원 서비스) — turning transparency into a two-sided marketplace where candidates get truth and employers get reach. The homepage's "NO.1 기업 정보 플랫폼" claim states that category leadership plainly.

What Jobplanet's design refuses is the glossy, aspirational chrome of consumer marketing sites: there is no oversized hero, no heavy shadow-stacked cards, no single hero image doing the persuading. What it embraces is a flat, dense, data-first interface — a single trustworthy green for action, near-black text for legibility, and tight typography that lets ratings and review counts speak for themselves. The design is, in effect, an argument that the data is the product.

## 12. Principles

1. **Transparency is the product.** Jobplanet exists to surface employee-sourced truth about companies. *UI implication:* foreground counts and sources ("782개의 전∙현직자 리뷰"); make data visible and scannable before any CTA.
2. **Data density over spectacle.** A career decision needs many data points at once. *UI implication:* keep type tight (13px body), use weight for hierarchy, and pack ratings/salaries/reviews without resorting to giant display type.
3. **One action, one color.** Green (`#00c362`) means "do this." *UI implication:* reserve the saturated green exclusively for the primary CTA, links, and pagination so the next step is never ambiguous.
4. **Flat and fast.** Mobile-native clarity beats decorative depth. *UI implication:* no shadows; separate with the `#f3f3f4` tint and `#e5e6e9` hairlines; keep the page quick to scan.
5. **Plain, insider voice.** Speak like a candid colleague, not a marketer. *UI implication:* descriptive headings and factual chips; embrace real job-market language rather than sanitized copy.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Jobplanet user segments (Korean job-seekers researching employers, career-movers comparing salaries, HR/employer-branding teams), not individual people.*

**김도현, 28, 서울.** A developer preparing to switch jobs. Reads interview reports and 전·현직자 reviews on Jobplanet before applying, and cross-checks salary ranges. Trusts the platform because the reviews feel sourced and specific, not like a recruiter's pitch.

**이서연, 33, 판교.** A product manager comparing two offers. Uses company rankings and 사내문화 ratings to sanity-check culture claims she heard in interviews. Values that the interface is dense enough to scan many companies in one sitting.

**박준혁, 41, 기업 인사팀.** An HR lead at a mid-size company managing the employer-branding profile (기업 회원 서비스). Wants the company page to look credible and current; cares that reviews and job posts render cleanly. Sees Jobplanet as where candidates form first impressions.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no reviews yet)** | White card on `#f3f3f4` canvas. Single Ink (`#333333`) line explaining no reviews exist yet, with one green (`#00c362`) CTA to write the first review. No illustration clutter. |
| **Empty (no search results)** | Faint Slate (`#a4a6ad`) single line stating nothing matched, with the search field kept visible above so the query can be adjusted. |
| **Loading (results fetch)** | Skeleton cards at final 12px-radius dimensions on the `#f3f3f4` surface. Flat pulse — no shadow shimmer, consistent with the shadowless system. |
| **Loading (in-place refresh)** | Previous content stays visible; a subtle green (`#00c362`) progress indicator signals the update. Never blank the list. |
| **Error (data load failed)** | Inline message in Ink (`#333333`) with a plain-language explanation and a retry, not a bare "오류가 발생했습니다". States what to do next. |
| **Error (form validation)** | Field-level message below the input describing what is valid, not just "필수". |
| **Success (review submitted)** | Brief inline confirmation in a calm tone; the new review surfaces immediately. No celebratory emoji. |
| **Skeleton** | `#f3f3f4` blocks at final dimensions, 12px radius, flat pulse. |
| **Disabled** | Disabled Grey (`#c5c7cc`) text on reduced-opacity surface; green actions fade rather than turn grey, to preserve brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, chip/button press, focus |
| `motion-standard` | 200ms | Card/section reveal, carousel slide, dropdown |
| `motion-slow` | 320ms | Page-level transitions, rare hero reveals |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, dropdowns, sheets |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions, carousel |

**Motion rules**: Motion is functional and quiet — consistent with the flat, fast, data-first aesthetic. Cards and results fade in from below at `motion-standard / ease-enter`; carousels slide horizontally with `ease-standard`; buttons and chips respond to press with a subtle opacity/scale shift. No bounce or spring — a company-information product signals steadiness and credibility, not playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and carousels advance without animation; the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-07-02) via playwright getComputedStyle:
- https://www.jobplanet.co.kr/welcome/index — nav, hero cards, primary CTA #00c362, stat chips, section heads
- https://www.jobplanet.co.kr/companies — global search input, pagination (green #00c362), interactive green
- https://techspace.jobplanet.co.kr/category/product — tech blog (IBM Plex Sans, 48px/600 hero) — second brand-owned surface
Full computed-style samples + color/radius frequency scans recorded in web/references/jobplanet/.verification.md.

Voice samples (§10) are verbatim from the live surfaces (page title, section head, stat chip).

Brand narrative (§11): Jobplanet (잡플래닛) launched ~2014 as a Korean company-review / recruitment
platform (the domestic Glassdoor analogue), later layering salary data, rankings, a jobs marketplace,
and B2B employer-branding services (기업 회원 서비스). "NO.1 기업 정보 플랫폼" is the homepage's own
category claim. Broader corporate-structure details are general public knowledge, not directly quoted
from a verified Jobplanet statement in this turn.

Personas (§13) are fictional archetypes informed by publicly observable Jobplanet user segments
(Korean job-seekers, career-movers, HR/employer-branding teams). Names are illustrative; they do not
refer to real people.

Interpretive claims (e.g., "the data is the product", "one action, one color", "flat and fast as a
rejection of glossy marketing chrome") are editorial readings connecting Jobplanet's observed design
to its positioning, not directly sourced Jobplanet statements.
-->
