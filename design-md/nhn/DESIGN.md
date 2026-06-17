---
id: nhn
name: NHN
display_name_kr: NHN
country: KR
category: saas
homepage: "https://www.nhn.com/"
primary_color: "#212126"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=nhn.com&sz=128"
verified: "2026-06-17"
added: "2026-06-17"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-17"
  note: "Achromatic 2024 Kenya Hara CI — chrome is entirely grayscale. primary = ink #212126 (also the dark full-pill CTA bg); near-blacks #36363d/#57575b for nav hierarchy; light greys #f8f8f8/#e9e9e9/#dbdbdb for cards/panels. Display = Poppins (EN) + Main Pretendard Variable (KR), body = Pretendard Variable. Shadowless."
  colors:
    primary: "#212126"
    ink: "#212126"
    ink-soft: "#36363d"
    ink-muted: "#57575b"
    ink-faint: "#62626a"
    disabled: "#797981"
    hint: "#aaaaae"
    surface: "#f8f8f8"
    panel: "#e9e9e9"
    hairline: "#dbdbdb"
    canvas: "#ffffff"
    on-primary: "#ffffff"
    pure-black: "#000000"
    notice: "#ff2222"
  typography:
    family: { display-en: "Poppins", display-kr: "Main Pretendard Variable", body: "Pretendard Variable" }
    display-hero:  { size: 60, weight: 700, lineHeight: 1.20, use: "EN hero display, Poppins (Weaving New Play)" }
    display-kr:    { size: 32, weight: 800, lineHeight: 1.50, use: "KR feature headline, Main Pretendard Variable ExtraBold" }
    section:       { size: 44, weight: 700, lineHeight: 1.41, use: "EN section display (Game / PaymentAd), Poppins" }
    subhead:       { size: 22, weight: 600, lineHeight: 1.00, use: "Block label (Recent News), Poppins SemiBold" }
    card-title:    { size: 20, weight: 700, lineHeight: 1.50, use: "News-card headline, Main Pretendard Variable" }
    body:          { size: 16, weight: 400, lineHeight: 1.50, use: "Body copy, Pretendard Variable" }
    nav:           { size: 16, weight: 500, lineHeight: 1.50, use: "Primary nav link, Pretendard Variable" }
    nav-sub:       { size: 14, weight: 500, lineHeight: 1.57, use: "Sub-nav / mega-menu link, Pretendard Variable" }
  spacing: { xs: 4, sm: 8, md: 10, base: 16, lg: 24, xl: 48, xxl: 72 }
  rounded: { sm: 12, md: 20, lg: 24, pill: 100, full: 9999 }
  shadow:
    none: "none"
  components:
    cta-dark: { type: button, bg: "#212126", fg: "#ffffff", radius: "9999px", padding: "16px 24px", height: "48px", font: "16px / 400 Main Pretendard Variable", use: "Primary dark full-pill CTA (Visit the Newsroom / 뉴스룸 바로가기)" }
    lang-toggle-active: { type: button, bg: "#ffffff", fg: "#212126", radius: "0px", padding: "14px 24px 14px 16px", height: "48px", font: "16px / 400 Pretendard Variable", use: "Active language switch (한국어)" }
    lang-toggle-inactive: { type: button, bg: "#ffffff", fg: "#797981", radius: "0px", padding: "14px 24px 14px 16px", height: "48px", font: "16px / 400 Pretendard Variable", use: "Inactive language switch (English / 日本語)" }
    social-chip: { type: button, bg: "#f8f8f8", fg: "#212126", border: "1px solid #f8f8f8", radius: "100px", padding: "10px", height: "42px", font: "16px / 400 Pretendard Variable", use: "Round social icon chip (YouTube / Instagram / LinkedIn)" }
    feature-card: { type: card, bg: "#f8f8f8", fg: "#212126", radius: "24px", use: "Full-bleed editorial feature card, no shadow" }
    content-card: { type: card, bg: "#f8f8f8", fg: "#212126", radius: "20px", use: "Content / Plays! card, no shadow" }
    grey-panel: { type: card, bg: "#e9e9e9", fg: "#212126", radius: "12px", use: "Neutral grey content panel, no shadow" }
    nav-link: { type: tab, fg: "#36363d", font: "16px / 500 Pretendard Variable", active: "text #212126", disabled: "#797981 inactive", use: "Top primary nav item" }
  components_harvested: true
---

# Design System Inspiration of NHN

## 1. Visual Theme & Atmosphere

NHN is a Korean technology group — cloud, payments, games, commerce, and content under one publicly listed parent — and its corporate site is the clearest expression of the radical 2024 rebrand by Kenya Hara (Nippon Design Center) with NHN's in-house designers. The defining decision is the absence of brand color. Where almost every IT holding company anchors itself to a signature blue or green, NHN's chrome is rendered **entirely in grayscale**: an ink `#212126` (a near-black with the faintest blue-warm cast) carries headings, nav, and body; lighter near-blacks `#36363d` and `#57575b` step the navigation hierarchy down; and light neutrals `#f8f8f8`, `#e9e9e9`, and `#dbdbdb` fill cards, panels, and hairlines. The single highest-contrast moment is the primary CTA — a fully-rounded pill in the same ink `#212126` with white text. This is a confident, gallery-like restraint: the company signals scale and seriousness not by shouting in color, but by refusing it.

The typography is a deliberate bilingual pairing. English display runs in **Poppins** — a geometric sans at 60px/700 for the hero ("Weaving New Play") and 44px/700 for section markers ("Game", "PaymentAd"), giving the Latin headlines a rounded, modern, almost editorial weight. Korean display and card headlines run in **Main Pretendard Variable** (the brand's tuned Pretendard) at ExtraBold 800 for feature lines and Bold 700 for news titles, optimized for dense hangul legibility. Body and navigation drop to **Pretendard Variable** at 16px/400–500. The split is consistent: Poppins is the brand's English voice, Pretendard its working Korean voice, and they never swap roles.

What distinguishes NHN from its peers is its commitment to flatness. Live inspection found `box-shadow: none` across the hero, nav, headings, CTA pills, news cards, and footer. Depth and grouping come from flat tinted surfaces (`#f8f8f8` editorial cards, `#e9e9e9` neutral panels) and thin `#dbdbdb` hairlines, never elevation. Geometry leans into the rounded rectangle and the pill — 24px and 20px radii on content cards, a 12px neutral panel, 100px round social chips, and the full 9999px pill on the primary CTA. The result reads as a calm, monochrome, content-forward corporate canvas: a design system that gets out of the way of the news, products, and people it presents.

**Key Characteristics:**
- Achromatic 2024 Kenya Hara CI — chrome is entirely grayscale, no brand hue
- Ink `#212126` as the single workhorse: headings, body, nav, and the primary pill CTA
- Stepped near-black nav hierarchy: `#36363d` (primary) → `#57575b` (sub) → `#797981` (inactive)
- Bilingual display pairing: Poppins (English, 60px/700 hero) over Main Pretendard Variable (Korean, 800)
- Pretendard Variable for all body/nav at 16px/400–500
- Flat, shadow-free system — separation via `#f8f8f8`/`#e9e9e9` surfaces and `#dbdbdb` hairlines
- Rounded geometry — 24px/20px cards, 12px panel, 100px chips, 9999px full-pill CTA
- White canvas (`#ffffff`) with pure black (`#000000`) reserved as a maximum-contrast accent

## 2. Color Palette & Roles

NHN's palette is intentionally monochromatic — a grayscale ladder from near-black ink to off-white, with no saturated brand color in the chrome.

### Ink & Text
- **Ink** (`#212126`): The primary color. Headings, body text, nav, footer, and the primary CTA background. A near-black with a barely-perceptible warm-blue cast — never pure black for structure.
- **Ink Soft** (`#36363d`): Primary navigation links and news-card headlines. One step lighter than ink for the top tier of menu items.
- **Ink Muted** (`#57575b`): Sub-navigation and mega-menu links — the second tier of the hierarchy.
- **Ink Faint** (`#62626a`): Tertiary text, metadata, and captions.
- **Disabled** (`#797981`): Inactive language toggles and lowest-emphasis labels.
- **Hint** (`#aaaaae`): Placeholder-level / faintest hint text.

### Surface & Neutral
- **Canvas** (`#ffffff`): Page background, footer, nav bar, and active language toggle.
- **Surface** (`#f8f8f8`): Editorial and content cards (feature, "Plays!"), round social chips. The dominant card tint.
- **Panel** (`#e9e9e9`): Neutral grey content panels and structural blocks.
- **Hairline** (`#dbdbdb`): Thin borders and dividers — the primary separation device in a shadow-free system.

### Contrast & Accent
- **On Primary** (`#ffffff`): White text/labels on the ink pill CTA and on dark editorial image cards.
- **Pure Black** (`#000000`): Reserved as a maximum-contrast accent on select surfaces; rare.
- **Notice** (`#ff2222`): A small notice/alert red that appears only on minor status marks — not part of the brand chrome, used sparingly.

## 3. Typography Rules

### Font Family
- **English display**: `Poppins` — geometric Latin sans for hero and section headlines (700 weight).
- **Korean display**: `Main Pretendard Variable` (with `Pretendard Variable` fallback) — ExtraBold (800) for feature lines, Bold (700) for card titles.
- **Body / UI**: `Pretendard Variable` (with system fallbacks) — the document default at weight 400–500.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Display Hero (EN) | Poppins | 60px (3.75rem) | 700 | 1.20 (72px) | "Weaving New Play" hero |
| Feature Headline (KR) | Main Pretendard Variable | 32px (2.00rem) | 800 | 1.50 (48px) | Feature card line, white on image |
| Section Display (EN) | Poppins | 44px (2.75rem) | 700 | 1.41 (62px) | "Game" / "PaymentAd" markers |
| Block Sub-head | Poppins | 22px (1.38rem) | 600 | 1.00 | "Recent News" label |
| Card Title (KR) | Main Pretendard Variable | 20px (1.25rem) | 700 | 1.50 (30px) | News-card headline |
| Nav Link | Pretendard Variable | 16px (1.00rem) | 500 | 1.50 | Primary nav item |
| Body | Pretendard Variable | 16px (1.00rem) | 400 | 1.50 (24px) | Standard reading text |
| Sub-nav Link | Pretendard Variable | 14px (0.88rem) | 500 | 1.57 | Mega-menu / secondary nav |

### Principles
- **Two display fonts, two languages**: Poppins owns English display; Main Pretendard Variable owns Korean display. They are never mixed within a single headline role.
- **Weight does the work, not color**: With no brand hue, hierarchy is carried by weight (700–800 display vs 400–500 body) and by the stepped ink ladder.
- **Hangul-first body sizing**: Body sits at a comfortable 16px / line-height 1.50, generous for dense hangul reading.
- **Quiet tracking**: Letter-spacing stays at `normal` across the system — the restraint extends to the typography metrics, not just the palette.

## 4. Component Stylings

### Buttons

**Primary Dark Pill (Visit the Newsroom)**
- Background: `#212126`
- Text: `#ffffff`
- Radius: 9999px
- Padding: 16px 24px
- Height: 48px
- Font: 16px Main Pretendard Variable weight 400
- Use: Primary call-to-action — the single high-contrast pill ("Visit the Newsroom" / "뉴스룸 바로가기")

**Language Toggle (Active)**
- Background: `#ffffff`
- Text: `#212126`
- Radius: 0px
- Padding: 14px 24px 14px 16px
- Height: 48px
- Font: 16px Pretendard Variable weight 400
- Use: Selected language in the switcher ("한국어")

**Language Toggle (Inactive)**
- Background: `#ffffff`
- Text: `#797981`
- Radius: 0px
- Padding: 14px 24px 14px 16px
- Height: 48px
- Font: 16px Pretendard Variable weight 400
- Use: Unselected languages ("English", "日本語")

**Social Round Chip**
- Background: `#f8f8f8`
- Text: `#212126`
- Border: 1px solid `#f8f8f8`
- Radius: 100px
- Padding: 10px
- Height: 42px
- Font: 16px Pretendard Variable weight 400
- Use: Round icon chips for YouTube / Instagram / LinkedIn / meetup links

### Cards & Containers

**Editorial Feature Card**
- Background: `#f8f8f8`
- Text: `#212126`
- Radius: 24px
- Use: Full-bleed editorial feature card (no shadow); white headline overlay on image variants

**Content Card**
- Background: `#f8f8f8`
- Text: `#212126`
- Radius: 20px
- Use: Content / "Plays!" cards in the lower grid (no shadow)

**Neutral Grey Panel**
- Background: `#e9e9e9`
- Text: `#212126`
- Radius: 12px
- Use: Structural neutral panel / placeholder block (no shadow)

### Navigation
- Background: `#ffffff`
- Primary link: `#36363d`, 16px Pretendard Variable weight 500
- Sub link: `#57575b`, 14px weight 500
- Active: text shifts to ink `#212126`
- Inactive/disabled: `#797981`
- Use: Top horizontal nav ("회사소개", "서비스", "홍보", "투자정보") with a stepped grey mega-menu

### Footer
- Background: `#ffffff`
- Text: `#212126`, 16px Pretendard Variable
- Use: Corporate footer links (legal, family sites, language) on white, hairline-separated

---

**Verified:** 2026-06-17 (omd:add-reference CREATE — Tier 1 live inspect, 2 brand-owned surfaces)
**Tier 1 sources:** https://www.nhn.com/ (KR homepage, live computed style); https://www.nhn.com/en-US (EN locale homepage, live computed style)
**Tier 2 sources:** getdesign.md/nhn — NOT FOUND (no entry); styles.refero.design/?q=nhn — not listed (96 generic fallback cards, no NHN brand)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: ~8px
- Scale: 4px, 8px, 10px, 16px, 24px, 48px, 72px
- Notable: CTA pills use 16px×24px padding; round social chips use a tight 10px; section rhythm opens up to 48–72px between blocks

### Grid & Container
- Centered, wide content column on a white canvas with generous margins
- Hero anchored by the 60px Poppins English display ("Weaving New Play") with the KR mission line beneath
- "Recent News" grid: equal news cards (20px radius, `#f8f8f8`) in a responsive multi-column layout
- Business-area sections ("Game", "PaymentAd", "Commerce", "Technology", "Contents") marked by 44px Poppins display headers
- Editorial feature cards run full-bleed at 24px radius

### Whitespace Philosophy
- **Gallery restraint**: the monochrome palette plus abundant white space makes the page feel like a curated exhibition, not a marketing funnel.
- **Flat segmentation**: sections separate by surface tint (`#f8f8f8` / `#e9e9e9`) and `#dbdbdb` hairlines, never by shadow or heavy borders.
- **Content as color**: with grayscale chrome, the photography and editorial imagery inside cards supply all the chromatic interest.

### Border Radius Scale
- Small (12px): neutral grey structural panels
- Medium (20px): content / Plays! cards
- Large (24px): full-bleed editorial feature cards
- Chip (100px): round social icon chips
- Full (9999px): the primary dark pill CTA

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, nav, headings, footer — the entire system |
| Tint (Level 1) | `#f8f8f8` / `#e9e9e9` background shift | Card and panel separation without elevation |
| Hairline (Level 2) | `1px solid #dbdbdb` | Dividers, footer rules, list separators |

**Shadow Philosophy**: NHN is a fully shadowless system. Live inspection returned `box-shadow: none` across the hero, navigation, headings, CTA pills, news cards, and footer. All grouping is achieved through flat tinted surfaces (`#f8f8f8`, `#e9e9e9`) and thin `#dbdbdb` hairlines. This is the natural extension of the achromatic CI: where color is removed, elevation is removed too, leaving a calm, two-dimensional canvas. When emphasis is needed, the system reaches for the maximum-contrast ink pill (`#212126`), never for a drop shadow.

## 7. Do's and Don'ts

### Do
- Keep the chrome achromatic — ink `#212126` and the grayscale ladder carry everything
- Use Poppins for English display headlines and Main Pretendard Variable for Korean display
- Use Pretendard Variable at 16px/400–500 for body and nav
- Reserve the dark `#212126` full-pill as the single primary CTA
- Step the nav hierarchy with the ink ladder: `#36363d` → `#57575b` → `#797981`
- Separate sections with `#f8f8f8` / `#e9e9e9` surfaces and `#dbdbdb` hairlines
- Keep everything flat — no shadows anywhere
- Use rounded geometry — 24px/20px cards, 100px chips, 9999px pill
- Let editorial photography inside cards supply the only chromatic interest

### Don't
- Introduce a saturated brand color into the chrome — NHN's identity is the absence of one
- Use drop shadows for elevation — the system is shadow-free
- Use pure black (`#000000`) for body text — reserve the near-black ink `#212126`
- Mix Poppins and Pretendard within one headline role — each language has its display font
- Set body text in a heavy weight — display is 700–800, body stays 400–500
- Use sharp 0px corners on content cards — cards and CTAs are rounded
- Spread the dark pill across many actions — keep it the single primary CTA
- Add gradients or colored fills to structural surfaces — grays and white only

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero display compresses, news cards stack, nav collapses to a menu |
| Tablet | 640-1024px | 2-up news cards, moderate margins |
| Desktop | 1024-1440px | Full multi-column news grid, wide centered content, mega-menu nav |

### Touch Targets
- CTA pill and language toggles at 48px height — comfortably tappable
- Round social chips at 42px with full 100px radius
- Nav links spaced within a tall header row

### Collapsing Strategy
- Hero: 60px Poppins display scales down on mobile; the KR mission line wraps
- News grid: multi-column → 2-up → single stacked
- Business-area section markers (44px) compress on narrow viewports
- Editorial feature cards maintain full-bleed treatment with reduced radius on mobile
- Footer link clusters reflow into stacked groups

### Image Behavior
- Editorial card imagery carries no shadow at any size, consistent with the flat system
- Cards hold their 20–24px radius across breakpoints
- Photography supplies all color; the surrounding chrome stays grayscale

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary / heading / CTA: Ink (`#212126`)
- Primary nav: Ink Soft (`#36363d`)
- Sub-nav: Ink Muted (`#57575b`)
- Inactive: Disabled (`#797981`)
- Background: Canvas (`#ffffff`)
- Card surface: Surface (`#f8f8f8`)
- Neutral panel: Panel (`#e9e9e9`)
- Hairline: `#dbdbdb`
- CTA text: White (`#ffffff`)

### Example Component Prompts
- "Create a corporate hero on white. English display 'Weaving New Play' at 60px Poppins weight 700, line-height 1.20, color #212126. Korean mission line below in Main Pretendard Variable. One primary CTA: a dark full pill — #212126 background, white text, 9999px radius, 16px 24px padding, 48px height, 'Visit the Newsroom'."
- "Design a news card: #f8f8f8 background, 20px radius, no shadow. Title 20px Main Pretendard Variable weight 700, line-height 1.50, color #36363d. Keep it flat; separate from siblings with a #dbdbdb hairline."
- "Build a section marker: 'Game' at 44px Poppins weight 700, color #212126, on white. No color accent — let the section photography carry the hue."
- "Create top nav on white. Primary links 16px Pretendard Variable weight 500, color #36363d; sub-links 14px color #57575b; inactive #797981; active shifts to #212126. No underline, no color highlight."
- "Make a round social chip: #f8f8f8 background, 1px solid #f8f8f8 border, 100px radius, 10px padding, 42px height, monochrome icon in #212126."

### Iteration Guide
1. Keep the chrome 100% grayscale — ink `#212126` is the primary; never introduce a brand hue
2. Poppins for English display, Main Pretendard Variable for Korean display, Pretendard Variable for body/nav
3. No shadows — separate with `#f8f8f8`/`#e9e9e9` surfaces and `#dbdbdb` hairlines
4. The single primary CTA is the dark `#212126` full pill with white text
5. Step the nav with the ink ladder `#36363d` → `#57575b` → `#797981`
6. Rounded geometry — 24px/20px cards, 100px chips, 9999px pill
7. Let editorial photography inside cards be the only source of color

---

## 10. Voice & Tone

NHN's voice is **measured, connective, and quietly ambitious** — a corporate group that frames itself not as a single product but as a weaver of many. The English tagline "Weaving New Play" and the Korean mission line "상상과 현실, 기술과 삶, 사람과 사람을 연결합니다" ("We connect imagination and reality, technology and life, people and people") set the register: aspirational without hype, infrastructural without coldness. Copy treats the reader — investor, partner, candidate, or developer — as a peer evaluating a serious, multi-business technology company.

| Context | Tone |
|---|---|
| Hero / tagline | Aspirational, connective. "Weaving New Play." Confident, never loud. |
| Mission statement | Humanistic and infrastructural. Frames technology as connection, not spectacle. |
| Newsroom / press | Factual, corporate, third-person. Headlines state the news plainly. |
| Business-area labels | One-word, declarative. "Game", "Commerce", "Technology", "Contents". |
| Investor / governance | Formal, disclosure-grade. Reads like a careful corporate filing. |
| Culture / careers | Warm but composed. Celebrates people and craft, not bravado. |

**Voice samples (verbatim from live homepage):**
- "Weaving New Play" — English hero tagline (the brand's central metaphor). *(verified live 2026-06-17, nhn.com/en-US)*
- "상상과 현실, 기술과 삶, 사람과 사람을 연결합니다" — Korean mission line (connection as the founding frame). *(verified live 2026-06-17, nhn.com)*
- "Recent News" / "Visit the Newsroom" — newsroom CTA copy (plain, factual). *(verified live 2026-06-17)*

**Forbidden register**: color-hyped product superlatives, exclamation-driven marketing, "revolutionary"/"game-changing" boilerplate, and any visual or verbal flourish that breaks the gallery-calm restraint. NHN's confidence is in the absence of noise.

## 11. Brand Narrative

NHN is a Korean technology group whose corporate lineage traces back to the early Korean internet era — its name a legacy of the "Next Human Network" framing — and which today operates as a publicly listed holding company spanning five business areas: **Game, Payment & Advertising, Commerce, Technology, and Contents**. Where a search-portal heritage once defined it, NHN has positioned the modern group around connection: the homepage states plainly that the company connects "imagination and reality, technology and life, and people with people," and presents "Weaving New Play" as the single English promise binding its otherwise diverse businesses.

The most consequential brand event of recent years was the **2024 corporate-identity redesign led by Kenya Hara** of Nippon Design Center (the art director behind Muji's visual philosophy), working with NHN's in-house design team. The rebrand introduced an **origami-derived logomark** — the folds forming the letters "N" and "H" to symbolize connectivity, scalability, and open-ended possibility — and, crucially, moved NHN off the fixed signature color that almost every IT company defaults to. In its place came a **monochromatic identity** designed to adapt seamlessly across online and offline environments. The achromatic chrome observed live (ink `#212126`, grayscale surfaces, no brand hue, no shadows) is the direct product of that decision.

What NHN's design refuses is the loud, color-coded, gradient-heavy look of conventional tech-company branding. What it embraces is gallery-grade restraint: a single ink, a flat shadow-free canvas, rounded forms, a disciplined bilingual type system (Poppins for English, Pretendard for Korean), and editorial photography as the only carrier of color. The result is a corporate brand that signals seriousness and longevity through reduction — an identity that, like the origami it is built on, finds richness in folding simple material into many forms.

*Founding-era and rebrand details (Next Human Network heritage, 2024 Kenya Hara CI, origami logomark, five business areas) reflect publicly documented facts and the live homepage; specific dates beyond the homepage are general public knowledge rather than quoted NHN statements.*

## 12. Principles

1. **Identity through reduction.** NHN's brand is defined by what it removes — the signature color. *UI implication:* keep the chrome grayscale; never reach for a brand hue to create emphasis.
2. **Connection over product.** The group frames itself as a weaver of many businesses, not one. *UI implication:* design surfaces that present diverse content (news, games, commerce, tech) under one calm, consistent system.
3. **Flat and quiet.** Calm restraint beats decorative depth. *UI implication:* no shadows; separate with tint and hairlines; let white space do the structuring.
4. **Two languages, two display voices.** Poppins for English, Pretendard for Korean. *UI implication:* never mix display fonts within a role; respect the bilingual split.
5. **Let the content carry the color.** With grayscale chrome, photography and editorial imagery supply all chromatic interest. *UI implication:* design cards as neutral frames around vivid content, not as colored objects themselves.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable NHN audiences (institutional investors, enterprise/partner evaluators, prospective employees, developers across the group's businesses), not individual people.*

**한지수, 38, 서울.** An equity analyst covering Korean tech holdings. Visits the corporate site for newsroom updates, quarterly results, and governance disclosures. Values that the achromatic, gallery-calm presentation signals a mature, well-run company rather than a hype-driven startup.

**David Lim, 44, Singapore.** A regional partnerships lead evaluating NHN's payments and cloud businesses. Reads the EN locale, appreciates the plain "Weaving New Play" framing and the clear five-area structure. Trusts the restraint as a sign of operational seriousness.

**박서연, 27, 판교.** A designer considering joining NHN. Recognizes the Kenya Hara rebrand immediately and reads the monochrome identity as a statement of craft and confidence. The flat, type-driven system tells her the company takes design seriously.

**김도현, 33, 대전.** A developer integrating one of NHN's group services. Comes for technical news and product announcements; values that the corporate chrome stays out of the way so the content is easy to scan.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no news for filter)** | White canvas. Single Ink (`#212126`) line at body size explaining no items, with a path back to all news. No illustration, no color. |
| **Empty (search, no results)** | Ink Muted (`#57575b`) single line stating nothing matched, filter summary visible above. Calm and factual. |
| **Loading (news grid)** | Skeleton cards on `#f8f8f8` at final 20px-radius dimensions. Flat pulse — no shadow shimmer, consistent with the shadowless system. |
| **Loading (page transition)** | Subtle top-of-viewport progress; previous content stays visible. No spinner overlay. |
| **Error (content failed to load)** | Inline Ink (`#212126`) message with a plain explanation and a retry. No generic "오류가 발생했습니다" alone. |
| **Error (form validation, contact/subscribe)** | Field-level message below the input in the notice tone; describes what is valid, not just "필수". |
| **Success (subscribed / submitted)** | Brief inline confirmation in calm Ink tone; next-step link immediately below. No celebratory emoji, no color burst. |
| **Skeleton** | `#f8f8f8` / `#e9e9e9` blocks at final dimensions and radii, flat pulse. |
| **Disabled** | Disabled (`#797981`) text on reduced-opacity surface; the dark pill CTA fades rather than switching to a different hue. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, nav reveal, focus |
| `motion-standard` | 220ms | Card/section reveal, mega-menu, language switch |
| `motion-slow` | 360ms | Page-level transitions, hero reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — menus, cards, sheets |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is restrained and functional, matching the flat, achromatic aesthetic. The mega-menu and language switcher fade/slide in at `motion-standard / ease-enter`; news cards reveal with a quiet fade-up. No bounce, no spring, no color-driven flourish — a corporate technology group signals steadiness, not playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the page remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-17) via playwright getComputedStyle on two brand-owned surfaces:
- https://www.nhn.com/ (KR homepage) and https://www.nhn.com/en-US (EN locale)
- Achromatic chrome confirmed: ink rgb(33,33,38) #212126, near-blacks #36363d/#57575b,
  light greys #f8f8f8/#e9e9e9/#dbdbdb, no saturated brand color, box-shadow: none everywhere.
- Display fonts: Poppins (EN, 60px/700 hero "Weaving New Play") + Main Pretendard Variable
  (KR, 800/700). Body/nav: Pretendard Variable 16px/400–500.
- Primary CTA: dark full-pill #212126 / white text / 9999px / 48px ("Visit the Newsroom" /
  "뉴스룸 바로가기"). Cards #f8f8f8 at 20–24px radius; grey panel #e9e9e9 12px.

Voice samples (§10) are verbatim from the live homepage (EN tagline "Weaving New Play";
KR mission line "상상과 현실, 기술과 삶, 사람과 사람을 연결합니다"; "Recent News" / "Visit the Newsroom").

Brand narrative (§11): NHN as a Korean tech group across five business areas (Game,
Payment & Advertising, Commerce, Technology, Contents). The 2024 corporate-identity
redesign was led by Kenya Hara (Nippon Design Center) with NHN's in-house designers,
introducing an origami-derived "N"/"H" logomark and a monochromatic identity that moves
off fixed IT-company color. These are publicly documented facts (corroborated by web
reporting and the IDSA IDEA "NHN Rebrand" gallery) plus the live homepage; specific
dates beyond the homepage are general public knowledge, not quoted NHN statements.

Personas (§13) are fictional archetypes informed by publicly observable NHN audiences
(investors, partners, candidates, developers). Names are illustrative; they do not refer
to real people.

Interpretive claims (e.g., "identity through reduction", "let the content carry the color",
"richness in folding simple material") are editorial readings connecting NHN's observed
achromatic design to its stated connection-mission and the Kenya Hara rebrand, not directly
sourced NHN statements.
-->
