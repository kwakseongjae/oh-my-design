---
id: wisetracker
name: Wisetracker
display_name_kr: 와이즈트래커
country: KR
category: marketing
homepage: "https://www.wisetracker.co.kr/"
primary_color: "#ff8d08"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=wisetracker.co.kr&sz=128"
verified: "2026-07-02"
added: "2026-07-02"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-07-02"
  note: "Two coexisting systems: a Framer-built marketing homepage (orange #ff8d08 CTA, full-pill geometry, Noto Sans CJK KR headings + Inter latin, playful category accents) and a GitBook-style developer docs portal (neutral #1d1d1d ink on Noto Sans, #d8d9d9 hairlines, 6-12px radius). Primary = the orange marketing CTA."
  colors:
    primary: "#ff8d08"
    on-primary: "#ffffff"
    ink: "#001122"
    ink-pure: "#000000"
    canvas: "#ffffff"
    surface: "#f2f2f2"
    muted: "#8a8a8a"
    label-muted: "#b5b5b5"
    disabled: "#b0b0b0"
    accent-pink: "#ff3c96"
    accent-salmon: "#ff8da1"
    accent-magenta: "#ff53ae"
    accent-cyan: "#22ccdd"
    accent-lime: "#ccdd32"
    accent-purple: "#bb66cc"
    accent-amber: "#ffbb0e"
    docs-ink: "#1d1d1d"
    docs-muted: "#6e6e6f"
    docs-slate: "#53595f"
    docs-border: "#d8d9d9"
    docs-surface: "#f7f7f7"
  typography:
    family: { display: "Noto Sans CJK KR", body: "Noto Sans CJK KR", latin: "Inter", docs: "Noto Sans" }
    display-hero: { size: 52, weight: 700, lineHeight: 1.20, use: "Marketing hero headline, Noto Sans CJK KR Bold" }
    lead:         { size: 19, weight: 400, lineHeight: 1.20, use: "Hero sub-copy, Noto Sans CJK KR Regular" }
    section:      { size: 20, weight: 700, lineHeight: 1.50, use: "Section H2 titles, #001122, Noto Sans CJK KR Bold" }
    feature:      { size: 18, weight: 400, lineHeight: 1.40, use: "Feature descriptions, Noto Sans CJK KR Regular" }
    nav-latin:    { size: 16, weight: 800, use: "Latin nav labels, Inter ExtraBold" }
    label-latin:  { size: 14, weight: 600, use: "Small latin labels (Product/Category), Inter SemiBold" }
    button:       { size: 16, weight: 700, lineHeight: 1.20, use: "Primary CTA label, white, Noto Sans CJK KR Bold" }
    nav:          { size: 12, weight: 400, use: "Marketing top-nav item text" }
    docs-body:    { size: 16, weight: 400, lineHeight: 1.625, use: "Docs reading text, #1d1d1d, Noto Sans" }
    docs-nav:     { size: 14, weight: 400, use: "Docs sidebar / top-nav links" }
  spacing: { xs: 4, sm: 6, md: 10, base: 12, lg: 20, xl: 28, xxl: 72, section: 64 }
  rounded: { sm: 4, md: 6, lg: 12, pill: 100, full: 9999 }
  shadow:
    none: "none"
    subtle: "rgba(0, 0, 0, 0.04) 0px 1px 2px"
  components:
    button-primary: { type: button, bg: "#ff8d08", fg: "#ffffff", radius: "100px", height: "56px", padding: "0 28px", font: "16px / 700 Noto Sans CJK KR Bold", shadow: "subtle Framer layered", use: "Marketing primary CTA (시작하기, 무료 데모 시작) — full pill orange" }
    button-ghost: { type: button, fg: "#000000", radius: "118px", height: "36px", padding: "0 28px", font: "12px / 400", use: "Translucent-white ghost pill (데모체험)" }
    button-disabled: { type: button, bg: "#b0b0b0", fg: "#ffffff", radius: "100px", height: "22px", padding: "0 28px", font: "12px / 400", use: "Inactive grey pill (사업자정보 확인)" }
    nav-item: { type: tab, fg: "#000000", radius: "4px", padding: "6px 10px", font: "12px / 400", use: "Marketing top-nav item (서비스/요금제/문의하기)" }
    badge-category: { type: badge, bg: "#22ccdd", fg: "#ffffff", radius: "9999px", font: "14px / 700 Inter", use: "Product-category color chip (cyan/pink #ff3c96/lime #ccdd32/amber #ffbb0e coded)" }
    docs-nav-item: { type: tab, fg: "#6e6e6f", radius: "6px", padding: "6px 12px", font: "14px / 400 Noto Sans", active: "text #53595f, weight 600", use: "Docs sidebar nav item" }
    card-docs: { type: card, bg: "#ffffff", border: "1px solid #d8d9d9", radius: "12px", padding: "6px 12px", use: "Docs guide / section toggle card" }
    input-search: { type: input, bg: "#ffffff", fg: "#1d1d1d", border: "1px solid #d8d9d9", radius: "6px", padding: "8px", font: "14px / 400 Noto Sans", use: "Docs search field (placeholder Search…)" }
  components_harvested: true
---

# Design System Inspiration of Wisetracker

## 1. Visual Theme & Atmosphere

Wisetracker (와이즈트래커) is a Korean marketing-analytics and attribution platform, and its two public surfaces speak in two deliberately different registers. The marketing homepage — built on Framer — is bright, confident and playful: a pure white canvas (`#ffffff`) carries near-black headlines and a single saturated orange (`#ff8d08`) that is reserved almost entirely for the call-to-action. That orange is the whole brand's "do this" signal — every "시작하기" and "무료 데모 시작" button is a full-pill orange lozenge (`border-radius: 100px`), so the eye is trained to read orange-pill as "the next step." Around that disciplined action color the page fans out a genuinely playful accent palette — magenta-pink (`#ff3c96`), salmon (`#ff8da1`), hot magenta (`#ff53ae`), cyan (`#22ccdd`), lime (`#ccdd32`), purple (`#bb66cc`) and amber (`#ffbb0e`) — used as color-coding for product categories and channel chips (카카오 / 메타 / 네이버). The result reads as a data product that wants to feel approachable rather than enterprise-cold.

The typographic personality is a two-font split. Korean display and body text run in **Noto Sans CJK KR** — the hero headline sits at a large 52px in the Bold-named face (`"Noto Sans CJK KR Bold"`) with a tight 1.2 line-height, while section titles drop to 20px Bold in a deep navy-black (`#001122`). Latin words inside that Korean layout — "Marketing Automation", "Product", "Category" — switch to **Inter**, using real numeric weights (ExtraBold 800 for nav emphasis, SemiBold 600 for small labels in a muted `#b5b5b5`). Body base text is a quiet black (`#000000`) at a compact 12px, with a soft grey (`#f2f2f2`) doing most of the section separation and muted greys (`#8a8a8a`, disabled `#b0b0b0`) marking secondary and inactive states.

The second surface — the official developer docs portal (`document.wisetracker.co.kr`) — is a GitBook-style neutral system that intentionally drops the playfulness. Here the ink is a soft near-black (`#1d1d1d`) on Noto Sans at 16px / 26px line-height, secondary nav is a calm grey (`#6e6e6f`), the active sidebar item is a slate `#53595f` at weight 600, and separation comes from thin `#d8d9d9` hairlines and a barely-there `#f7f7f7` surface rather than color. Radii tighten to a documentation-friendly 6px (rows) and 12px (guide cards). The contrast between the two surfaces is the system: expressive and orange where it sells, quiet and legible where it teaches.

**Key Characteristics:**
- Single saturated orange (`#ff8d08`) reserved for the primary CTA — the one "action" color
- Full-pill CTA geometry (`100px` radius) — every primary button is a rounded lozenge
- Playful category-coding accents: pink `#ff3c96`, salmon `#ff8da1`, magenta `#ff53ae`, cyan `#22ccdd`, lime `#ccdd32`, purple `#bb66cc`, amber `#ffbb0e`
- Two-font split: Noto Sans CJK KR (Bold/Regular named faces) for Korean, Inter for Latin
- Deep navy-black (`#001122`) headings; quiet black (`#000000`) body over a `#f2f2f2` grey
- A distinct, neutral docs subsystem: `#1d1d1d` ink, `#6e6e6f` muted, `#d8d9d9` hairlines, `#f7f7f7` surface
- Muted greys for hierarchy: label `#b5b5b5`, body-muted `#8a8a8a`, disabled `#b0b0b0`
- Docs slate active state `#53595f` at weight 600; near-flat depth (only a subtle Framer CTA shadow)

## 2. Color Palette & Roles

### Primary & Action
- **Wisetracker Orange** (`#ff8d08`): The primary brand and action color. Backs every primary CTA ("시작하기", "무료 데모 시작") as a full-pill lozenge — the system's single "do this" signal.
- **On-Primary White** (`#ffffff`): Label color on the orange CTA and the page canvas.

### Neutrals & Surface
- **Ink Navy** (`#001122`): Section-heading color — a deep navy-black used for H2 titles instead of pure black.
- **Pure Black** (`#000000`): Base body/UI text and Latin nav labels.
- **Canvas White** (`#ffffff`): Page background and card surfaces.
- **Surface Grey** (`#f2f2f2`): Light grey block separator on the marketing homepage.
- **Body Muted** (`#8a8a8a`): Secondary/muted body text.
- **Label Muted** (`#b5b5b5`): Small Latin labels ("Product", "Category").
- **Disabled Grey** (`#b0b0b0`): Inactive pill background (e.g. "사업자정보 확인").

### Playful Category Accents
- **Accent Pink** (`#ff3c96`): The most frequent accent — highlight/emphasis text and category chips.
- **Accent Salmon** (`#ff8da1`): Soft pink category-chip background.
- **Accent Magenta** (`#ff53ae`): Hot-pink category-chip background.
- **Accent Cyan** (`#22ccdd`): Cyan category chip.
- **Accent Lime** (`#ccdd32`): Lime category chip.
- **Accent Purple** (`#bb66cc`): Purple category chip.
- **Accent Amber** (`#ffbb0e`): Amber/yellow category chip.

### Docs Subsystem (document.wisetracker.co.kr)
- **Docs Ink** (`#1d1d1d`): Documentation body text — a soft near-black on Noto Sans.
- **Docs Muted** (`#6e6e6f`): Secondary docs nav links.
- **Docs Slate** (`#53595f`): Active sidebar item (weight 600).
- **Docs Border** (`#d8d9d9`): Hairline borders on guide cards and dividers.
- **Docs Surface** (`#f7f7f7`): Faint grey surface for docs blocks.

## 3. Typography Rules

### Font Family
- **Korean display & body**: `Noto Sans CJK KR`, shipped as separate named faces — `"Noto Sans CJK KR Bold"` for headlines and `"Noto Sans CJK KR Regular"` for body. Because boldness is baked into the family name, the CSS `font-weight` computes to `400` even on visually-bold headlines; the token `weight` values below reflect the *visual* weight (700 for the Bold face).
- **Latin**: `Inter` — used for Latin words inside the Korean layout, with real numeric weights: ExtraBold (800) for nav emphasis, SemiBold (600) for small labels.
- **Docs**: `Noto Sans` — the developer docs portal uses the Latin/neutral Noto Sans family (not the CJK Bold-named faces) at 16px / 26px line-height.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Display Hero | Noto Sans CJK KR Bold | 52px | 700 (visual) | 62.4px (1.20) | Marketing hero headline |
| Lead | Noto Sans CJK KR Regular | 19px | 400 | 22.8px (1.20) | Hero sub-copy |
| Section | Noto Sans CJK KR Bold | 20px | 700 (visual) | ~1.50 | Section H2 titles, `#001122` |
| Feature | Noto Sans CJK KR Regular | 18px | 400 | 25.2px (1.40) | Feature descriptions |
| Nav (Latin) | Inter ExtraBold | 16px | 800 | — | Latin nav emphasis ("Marketing Automation") |
| Label (Latin) | Inter SemiBold | 14px | 600 | 16.8px | Small labels ("Product", "Category"), `#b5b5b5` |
| Button | Noto Sans CJK KR Bold | 16px | 700 (visual) | 19.2px (1.20) | White CTA label |
| Nav | sans-serif | 12px | 400 | — | Marketing top-nav item |
| Docs Body | Noto Sans | 16px | 400 | 26px (1.625) | Docs reading text, `#1d1d1d` |
| Docs Nav | Noto Sans | 14px | 400 | — | Docs sidebar / top-nav links |

### Principles
- **Two fonts, two jobs.** Noto Sans CJK KR carries all Korean copy; Inter carries Latin words and labels. They never swap roles within a surface.
- **Bold-in-family.** Korean headlines get their weight from the `"…Bold"` named face rather than a numeric `font-weight`, so weight is a font-selection decision, not a CSS value.
- **Marketing vs docs split.** The docs portal deliberately uses plain Noto Sans at a comfortable 16px/26px for long-form reading, versus the compact 12px UI text on the marketing site.
- **Latin weights carry emphasis.** Where Inter is used, real weights do the work — ExtraBold (800) for nav, SemiBold (600) for small labels.

## 4. Component Stylings

### Buttons

**Primary CTA (Orange Pill)**
- Background: `#ff8d08`
- Text: `#ffffff`
- Radius: 100px
- Padding: 0px 28px
- Height: 56px
- Font: 16px / 700 / Noto Sans CJK KR Bold
- Shadow: subtle Framer layered shadow (`rgba(0, 0, 0, 0.04) 0px 1px 2px`)
- Use: Marketing primary action ("시작하기", "무료 데모 시작") — the single brand action color

**Primary CTA (Compact)**
- Background: `#ff8d08`
- Text: `#ffffff`
- Radius: 100px
- Padding: 0px 20px
- Height: 32px
- Use: Sticky-nav compact "시작하기" pill

**Ghost Pill**
- Background: translucent white (`rgba(255,255,255,0.05)`)
- Text: `#000000`
- Radius: 118px
- Padding: 0px 28px
- Height: 36px
- Use: Secondary "데모체험" pill on tinted hero panels

**Disabled Grey Pill**
- Background: `#b0b0b0`
- Text: `#ffffff`
- Radius: 100px
- Padding: 0px 28px
- Height: 22px
- Use: Inactive/utility pill ("사업자정보 확인")

### Inputs & Forms

**Docs Search**
- Background: `#ffffff`
- Text: `#1d1d1d`
- Border: 1px solid `#d8d9d9`
- Radius: 6px
- Padding: 8px
- Font: 14px / 400 / Noto Sans
- Use: Developer-docs search field (placeholder "Search…")

### Cards & Containers

**Docs Guide Card**
- Background: `#ffffff`
- Border: 1px solid `#d8d9d9`
- Radius: 12px
- Padding: 6px 12px
- Use: Docs guide selector / section toggle card

**Marketing Section Surface**
- Background: `#f2f2f2`
- Radius: 12px
- Use: Grey block separating homepage sections

### Badges

**Category Color Chip**
- Background: `#22ccdd`
- Text: `#ffffff`
- Radius: 9999px (full)
- Font: 14px / 700 / Inter
- Use: Product-category color chip; the same chip recolors to pink (`#ff3c96`), lime (`#ccdd32`), amber (`#ffbb0e`), purple (`#bb66cc`) or salmon (`#ff8da1`) per category

### Tabs & Navigation

**Marketing Nav Item**
- Background: transparent
- Text: `#000000`
- Radius: 4px
- Padding: 6px 10px
- Font: 12px / 400
- Use: Top-nav item ("서비스", "요금제", "문의하기", "제휴서비스")

**Docs Sidebar Item**
- Text: `#6e6e6f`
- Radius: 6px
- Padding: 6px 6px 6px 12px
- Font: 14px / 400 / Noto Sans
- Active: text `#53595f`, weight 600
- Use: Developer-docs sidebar navigation

---

**Verified:** 2026-07-02 (omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces)
**Tier 1 sources:** https://www.wisetracker.co.kr/ (marketing homepage, live computed style); https://document.wisetracker.co.kr/v2-developer (official developer docs portal, live computed style)
**Tier 2 sources:** getdesign.md/wisetracker — 0 DESIGN.md files (no data); styles.refero.design/?q=wisetracker — no Wisetracker-specific entry (generic catalog grid only)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base rhythm: ~4px, stepping through 6px, 10px, 12px, 20px, 28px, up to a generous 72px
- Notable: the primary CTA carries very wide horizontal padding (0px 72px on the hero, 0px 28px elsewhere), making the orange pill an oversized, unmistakable target
- Docs rows use a tight 6px/12px inset padding for dense navigation

### Grid & Container
- Marketing homepage is a centered, single-column narrative: 52px hero headline, sub-copy, then an orange CTA
- Product capabilities are laid out as color-coded category chips and cards
- Feature sections alternate white (`#ffffff`) and grey (`#f2f2f2`) full-width bands
- The docs portal is a classic three-zone doc layout: left sidebar nav, center content column, top utility nav

### Whitespace Philosophy
- **Airy marketing, dense docs.** The homepage breathes with generous vertical rhythm; the docs sidebar packs many links into tight 32px rows.
- **Color over lines.** On marketing, separation is done with grey tint (`#f2f2f2`) and color; on docs, with thin `#d8d9d9` hairlines and `#f7f7f7` surface.
- **Pill rhythm.** The repeated full-pill CTA establishes a consistent rounded silhouette across the marketing surface.

### Border Radius Scale
- Small (4px): marketing nav items
- Medium (6px): docs rows, docs search
- Large (12px): docs guide cards
- Pill (100px / 118px): primary and ghost CTAs
- Full (9999px): category badges

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Most surfaces, docs content, headings |
| Subtle (Level 1) | `rgba(0, 0, 0, 0.04) 0px 1px 2px` (soft Framer layered) | Primary CTA lift |
| Tint (Level 1) | `#f2f2f2` (marketing) / `#f7f7f7` (docs) background shift | Section/block separation without elevation |
| Hairline (Level 2) | `1px solid #d8d9d9` | Docs card outlines, dividers |

**Shadow Philosophy**: Wisetracker is a near-flat system. The only meaningful elevation is a very soft, sub-pixel Framer layered shadow under the orange CTA — everything else relies on flat color tints and hairlines. On the docs portal there is essentially no shadow at all; grouping is done with `#d8d9d9` borders and the faint `#f7f7f7` surface. When the marketing site needs emphasis it reaches for the orange (`#ff8d08`) or a category accent, never for heavy elevation.

## 7. Do's and Don'ts

### Do
- Reserve orange (`#ff8d08`) for the primary CTA — keep it the single "action" color
- Make every primary button a full pill (`100px` radius) with white label text
- Use Noto Sans CJK KR (Bold face) for Korean headlines and Inter for Latin words/labels
- Use deep navy-black (`#001122`) for section headings, quiet black (`#000000`) for body
- Deploy the category accents (pink `#ff3c96`, cyan `#22ccdd`, lime `#ccdd32`, amber `#ffbb0e`, purple `#bb66cc`) as color-coding, not as random decoration
- Separate marketing sections with the `#f2f2f2` grey band
- On docs surfaces, use `#1d1d1d` ink on Noto Sans with `#d8d9d9` hairlines and 6–12px radii
- Keep depth flat — a subtle CTA shadow is the ceiling

### Don't
- Spread orange across many elements — it dilutes the single-action signal
- Use sharp/square corners on primary CTAs — the brand's buttons are full pills
- Set Korean headlines in Inter or Latin labels in Noto Sans CJK KR — the two fonts don't swap jobs
- Use pure black (`#000000`) for section headings — that role belongs to navy `#001122`
- Carry the playful accent palette into the developer docs — docs stay neutral grey
- Add heavy drop shadows or card-stacks — the system is near-flat
- Introduce a competing saturated action color alongside the orange
- Use the marketing 12px compact type for long-form docs reading — docs use 16px/26px

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline compresses, category chips wrap |
| Tablet | 640–1024px | Moderate padding, 2-up feature cards |
| Desktop | 1024–1440px | Full centered layout, multi-column feature bands, docs 3-zone layout |

### Touch Targets
- Primary CTA at 56px height, full pill, wide horizontal padding — an unmistakable, comfortably tappable target
- Marketing nav items at ~29px with 6px 10px padding
- Docs sidebar rows at 32px height for dense but tappable navigation

### Collapsing Strategy
- Hero: 52px headline scales down on mobile; the orange CTA stays full-width-friendly
- Category chip rows wrap onto multiple lines on narrow viewports
- Feature bands: multi-column → stacked single column
- Docs: left sidebar collapses behind a toggle; content column takes full width

### Image Behavior
- Product/screenshot imagery keeps the near-flat treatment (little to no shadow) at all sizes
- Cards keep their 12px radius across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Wisetracker Orange (`#ff8d08`), white text
- Heading: Ink Navy (`#001122`)
- Body: Pure Black (`#000000`)
- Marketing surface: Surface Grey (`#f2f2f2`)
- Muted text: `#8a8a8a`; small labels `#b5b5b5`; disabled `#b0b0b0`
- Category accents: `#ff3c96`, `#ff8da1`, `#ff53ae`, `#22ccdd`, `#ccdd32`, `#bb66cc`, `#ffbb0e`
- Docs ink: `#1d1d1d`; docs muted `#6e6e6f`; docs slate `#53595f`; docs border `#d8d9d9`; docs surface `#f7f7f7`

### Example Component Prompts
- "Create a marketing hero on a white background. Headline at 52px Noto Sans CJK KR Bold, line-height 1.2, color #001122. Sub-copy at 19px Noto Sans CJK KR Regular, #000000. One full-pill CTA: #ff8d08 background, white text, 100px radius, 0 28px padding, 56px height, 16px Noto Sans CJK KR Bold — '무료 데모 시작'."
- "Design a row of product-category chips: full-round (9999px) badges, white text, cycling background colors #22ccdd, #ff3c96, #ccdd32, #ffbb0e, #bb66cc. 14px Inter weight 700."
- "Build a developer-docs page: #ffffff canvas, #1d1d1d Noto Sans body at 16px/26px. Left sidebar with 6px-radius rows, inactive links #6e6e6f, active #53595f weight 600. Search field: 1px solid #d8d9d9, 6px radius, 8px padding, placeholder 'Search…'. Guide card: white with 1px #d8d9d9 border, 12px radius."
- "Create a top nav: transparent items, #000000 text, 4px radius, 6px 10px padding, 12px. Latin emphasis label 'Marketing Automation' in Inter ExtraBold 16px. Orange compact CTA pill right-aligned (#ff8d08, 100px radius, 32px height)."

### Iteration Guide
1. Orange (`#ff8d08`) is the single action color — never spread it
2. Every primary button is a full pill (100px) with white text
3. Noto Sans CJK KR for Korean, Inter for Latin — no swapping
4. Headings are navy `#001122`; body is black `#000000`
5. Category accents are for color-coding, applied as full-round chips
6. Keep depth flat — subtle CTA shadow only, otherwise tints and `#d8d9d9` hairlines
7. Docs surfaces stay neutral: `#1d1d1d` ink, `#f7f7f7` surface, 6–12px radii, 16px/26px reading text

---

## 10. Voice & Tone

Wisetracker's voice is **practical, expert, and encouraging** — a data-analytics partner that turns a technical domain (attribution, tracking, CRM automation) into approachable Korean. Marketing copy leads with concrete capability and benefit ("똑똑한 데이터 활용을 향한 출발점" / "the starting point toward smart data use"), while the developer docs shift into a precise, instructional register ("SDK 설정 전 기초 진단", "이벤트 발생 현황"). The two surfaces share one goal — make marketing data usable — but the homepage persuades and the docs teach.

| Context | Tone |
|---|---|
| Hero headlines | Aspirational but concrete. "똑똑한 데이터 활용을 향한 출발점." Confident, not hype. |
| Feature copy | Benefit-first, decodes the analytics jargon into an outcome. |
| CTAs | Direct, low-friction. "시작하기", "무료 데모 시작", "데모체험". |
| Product-update banners | Plain, informative. "[NEW] 회사 도메인으로 만든 트래킹 링크…". |
| Developer docs | Instructional and precise. Step titles read as tasks: "SDK 연동", "SDK 데이터 검증". |

**Voice samples (verbatim from live surfaces):**
- "똑똑한 데이터 활용을 향한 출발점" — homepage hero headline (aspirational, concrete). *(verified live 2026-07-02)*
- "와이즈트래커는 마케팅 분석&활용에 필요한 서비스를 통합" — hero sub-copy (integration promise). *(verified live 2026-07-02)*
- "🧑‍💻 개발자 가이드" / "SDK 설정 전 기초 진단" — docs section labels (task-framed, instructional). *(verified live 2026-07-02)*

**Forbidden register**: hype-heavy superlatives, fear-based marketing, undefined analytics jargon left unexplained on marketing surfaces, and playful/emoji tone bleeding into the precise developer docs.

## 11. Brand Narrative

Wisetracker (와이즈트래커) is a Korean marketing-analytics and mobile/web attribution platform built for a concrete problem: Korean marketers spend across a fragmented set of channels — 카카오, 메타, 네이버 and more — and struggle to see which spend actually drives conversion. Wisetracker's positioning, stated plainly on its homepage, is to be "the starting point toward smart data use" — a single place to integrate the analysis and activation a marketing team needs, from inflow performance analysis through user-activity analytics to marketing automation.

The product surface reflects that mission: channel and category color-coding makes a genuinely technical toolset feel navigable, and the "비교부터 활용까지" style promise — measure, then act — is expressed through the marketing-automation features (e.g. sending a purchase-nudge message to cart-abandoners a day later). The brand pairs an approachable, colorful marketing face with a rigorous developer-docs portal, signalling that it serves both the marketer who wants outcomes and the engineer who has to wire up the SDK.

What the design refuses: the cold, chart-heavy austerity of legacy enterprise analytics dashboards (hence the playful accent palette and friendly orange), and, conversely, letting that playfulness undermine the credibility of its technical documentation (hence the deliberately neutral docs subsystem). What it embraces: one clear action color, approachable category-coded color, and a clean separation between "selling the outcome" and "teaching the integration."

*(Company-history specifics beyond the live homepage and docs positioning are not asserted here; the narrative above is grounded in the two live-inspected Wisetracker surfaces.)*

## 12. Principles

1. **One action, one color.** Orange (`#ff8d08`) means "do this." *UI implication:* reserve the saturated orange exclusively for the primary CTA so the next step is never ambiguous.
2. **Approachable, not enterprise-cold.** A technical analytics product should not feel intimidating. *UI implication:* use the category-accent palette to color-code and humanize a data-heavy toolset.
3. **Measure, then act.** The product spans analysis through automation. *UI implication:* let insight surfaces flow directly into an action (a CTA, an automation), never dead-end at a chart.
4. **Sell in color, teach in grey.** *UI implication:* keep the marketing surface expressive and orange; keep the developer docs neutral (`#1d1d1d` on `#f7f7f7`, `#d8d9d9` hairlines) for uninterrupted reading.
5. **Flat and legible.** Clarity beats decorative depth. *UI implication:* avoid heavy shadows; separate with flat tints, color, and hairlines, keeping the page quick to scan.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Wisetracker user segments (Korean performance marketers, growth teams, and integration engineers), not individual people.*

**정민아, 32, 서울.** A performance marketer at a mid-size e-commerce brand running spend across 카카오, 메타 and 네이버. Chose Wisetracker to see channel attribution in one place and to trigger cart-abandon nudges without engineering help. Values that the dashboard color-codes channels so she can scan performance at a glance.

**이도현, 29, 판교.** A mobile engineer responsible for wiring up the tracking SDK. Lives in the developer docs portal; appreciates the task-framed step titles ("SDK 설정 후 체크리스트") and the calm, distraction-free grey documentation layout that lets him focus on code.

**한서영, 41, 부산.** A growth lead evaluating analytics platforms. Books the free demo from the orange CTA. Trusts the brand more because the marketing site is approachable while the developer docs are rigorous — a signal that the product is both usable and technically serious.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no report data)** | White canvas with a single Ink Navy (`#001122`) line explaining there's nothing to show yet, and one orange (`#ff8d08`) CTA to connect a channel or run a demo. No decorative clutter. |
| **Empty (saved list, none yet)** | Muted (`#8a8a8a`) single line noting nothing saved, with a path back. Calm and honest. |
| **Loading (dashboard fetch)** | Skeleton blocks on the `#f2f2f2` surface at final dimensions; flat pulse consistent with the near-flat system — no heavy shimmer. |
| **Loading (docs search)** | Inline progress within the search field; prior results stay visible. |
| **Error (data fetch failed)** | Inline message in Ink Navy with a plain-language explanation and a retry action — never a bare "오류가 발생했습니다". |
| **Error (form validation)** | Field-level message below the input in a warm error tone; states what's valid, not just "필수". |
| **Success (demo requested / action saved)** | Brief inline confirmation in a calm tone; next-step detail linked immediately below. No celebratory emoji. |
| **Skeleton** | `#f2f2f2` (marketing) / `#f7f7f7` (docs) blocks at final dimensions, matching radii (12px cards, 6px rows), flat pulse. |
| **Disabled** | Grey (`#b0b0b0`) pill / faint (`#b5b5b5`) label on reduced-opacity surface; the orange CTA fades rather than turning a different hue, preserving the brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, CTA press, focus |
| `motion-standard` | 200ms | Card/section reveal, sidebar expand, dropdown |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, chips, sheets |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and quiet, consistent with the near-flat aesthetic. The orange CTA responds to press with a subtle scale/opacity shift; category chips and cards fade-in from below at `motion-standard / ease-enter`. The developer docs keep motion minimal — sidebar expand/collapse only. No bounce or spring: an analytics product signals steadiness and precision, not playfulness in motion. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant while the product stays fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-07-02) via playwright getComputedStyle on two surfaces:
- https://www.wisetracker.co.kr/ — marketing homepage (hero, nav, CTA, category chips)
- https://document.wisetracker.co.kr/v2-developer — official developer docs portal

Token-level claims (§1-9) are sourced from this live inspection (see .verification.md
Proof block for the raw computed-style samples).

Voice samples (§10) are verbatim from the live homepage (hero headline, sub-copy) and
the live docs portal (section labels).

Brand narrative (§11) is grounded in the positioning stated on the two live-inspected
Wisetracker surfaces (mission copy "똑똑한 데이터 활용을 향한 출발점", the integration
promise, and the analysis→automation feature set). Company-history specifics beyond the
live surfaces are not asserted.

Personas (§13) are fictional archetypes informed by publicly observable Wisetracker user
segments (Korean performance marketers, growth teams, integration engineers). Names are
illustrative; they do not refer to real people.

Interpretive claims (e.g., "one action, one color", "sell in color, teach in grey") are
editorial readings connecting Wisetracker's observed two-surface design to its
positioning, not directly sourced Wisetracker statements.
-->
