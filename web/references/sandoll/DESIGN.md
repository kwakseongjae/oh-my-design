---
id: sandoll
name: Sandoll
display_name_kr: 산돌
country: KR
category: design-tools
homepage: "https://www.sandoll.co.kr/"
primary_color: "#ff0600"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=sandoll.co.kr&sz=128"
verified: "2026-07-02"
added: "2026-07-02"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-07-02"
  note: "primary = live corporate accent red (#ff0600) reserved for CTAs, active tabs, and emphasis on an otherwise monochrome canvas; text ink is near-black #1c1c1c. Sandoll sets its OWN type: SDGretaSans on corporate, Sandoll Gothic Neo on the Cloud product. The Cloud product surface carries a separate blue accent (#4173fa / link #0d6efd)."
  colors:
    primary: "#ff0600"
    ink: "#1c1c1c"
    pure-black: "#000000"
    charcoal: "#212121"
    graphite: "#333333"
    slate: "#3b3b3b"
    muted: "#808080"
    muted-alt: "#999999"
    faint: "#a5a5a7"
    canvas: "#ffffff"
    cloud-blue: "#4173fa"
    link-blue: "#0d6efd"
    surface: "#f9f9f9"
    surface-blue: "#f5f8ff"
    surface-cool: "#d7d8d9"
    hairline: "#dddddd"
  typography:
    family: { display: "SDGretaSans", body: "SDGretaSans", product: "SandollGothicNeo1Unicode" }
    display-hero: { size: 44, weight: 400, lineHeight: 1.34, use: "Story / page H1, SDGretaSans Heavy (SDGretaSans-hBd)" }
    section:      { size: 34, weight: 400, lineHeight: 1.40, use: "Section headings (서비스/스토리/파트너사), SDGretaSans Heavy" }
    body:         { size: 16, weight: 400, lineHeight: 1.60, use: "Body text, SDGretaSans Regular" }
    nav:          { size: 16, weight: 400, lineHeight: 1.50, use: "Top navigation items, SDGretaSans Regular" }
    nav-sub:      { size: 14, weight: 400, lineHeight: 1.50, use: "Dropdown / sub-nav items" }
    product-hero: { size: 26, weight: 700, lineHeight: 1.37, use: "Sandoll Cloud promo H1, Sandoll Gothic Neo Bold" }
    caption:      { size: 13, weight: 400, use: "Footer contact, fine print" }
  spacing: { xs: 4, sm: 8, md: 12, base: 14, lg: 20, xl: 30, xxl: 48 }
  rounded: { sm: 4, md: 8, lg: 19, full: 9999 }
  shadow:
    none: "none"
  components:
    cta-inquiry:   { type: button, fg: "#ff0600", border: "1px solid #ff0600", radius: "4px", padding: "14px 30px", height: "53px", font: "16px / 400 SDGretaSans", use: "Primary '제작문의' production-inquiry CTA — outline red on white" }
    cta-portfolio: { type: button, fg: "#ffffff", border: "1px solid #ffffff", radius: "4px", padding: "14px 22px", height: "59px", font: "14px / 400 SDGretaSans", use: "'포트폴리오' CTA over hero imagery — outline white" }
    chip-active:   { type: button, bg: "#1c1c1c", fg: "#ffffff", border: "1px solid #dddddd", radius: "19px", padding: "6px 12px", height: "37px", font: "14px / 400 SandollGothicNeo", use: "Sandoll Cloud active filter/sort chip + '문의하기'" }
    chip-inactive: { type: button, bg: "#ffffff", fg: "#999999", border: "1px solid #dddddd", radius: "19px", padding: "6px 12px", height: "37px", font: "14px / 400 SandollGothicNeo", use: "Sandoll Cloud inactive filter chip ('이미지 검색')" }
    nav-tab:       { type: tab, fg: "#212121", active: "text #ff0600", font: "14px / 400 SDGretaSans", use: "Corporate nav dropdown / story sub-nav; active item turns brand red #ff0600" }
    menu-panel:    { type: card, bg: "#ffffff", border: "1px solid #dddddd", radius: "8px", use: "Nav dropdown menu panel / grouped white container (measured 8px corners)" }
    icon-round:    { type: button, bg: "#ffffff", fg: "#333333", border: "1px solid #dddddd", radius: "50%", height: "30px", padding: "2px 3px", use: "Sandoll Cloud carousel prev/next round control" }
  components_harvested: true
---

# Design System Inspiration of Sandoll

## 1. Visual Theme & Atmosphere

Sandoll (산돌) is Korea's most influential type foundry, and its corporate site reads exactly like a foundry that has spent four decades thinking about letterforms: austere, editorial, and almost entirely monochrome. The canvas is pure white (`#ffffff`); text sits in a near-black `#1c1c1c` — never pure black for body — and the entire page refuses color except for one deliberate, high-voltage accent: a vivid brand red (`#ff0600`) reserved for the primary CTA, the active navigation state, and emphasis marks. The restraint is the point. When the whole surface is grayscale, a single saturated red operates like a red pen on a proof sheet — it means "this, here, now."

The typographic personality is the identity, because Sandoll makes type for a living. Headlines run in **SDGretaSans** (the foundry's own Greta Sans family) at a heavy display cut — 44px on the story H1, 34px on section heads — rendered through the `SDGretaSans-hBd` (Heavy) face rather than relying on CSS `font-weight`, so the boldness is drawn into the glyphs themselves. Body and navigation drop to `SDGretaSans-eRg` (Regular) at 16px with a comfortable 1.6 line-height. A foundry setting its own retail typeface as its site font is the most on-brand decision possible: the medium is the sample.

The system splits across two surfaces. The **corporate** site (sandoll.co.kr) is the red-and-monochrome, SDGretaSans world described above, and it is deliberately **shadowless** — live inspection returned `box-shadow: none` across hero, nav, headings, and CTAs; separation comes from whitespace and thin `#dddddd` hairlines, never elevation. The **Sandoll Cloud** product (sandollcloud.com) — the font-subscription platform — runs a warmer, more utilitarian palette: Sandoll Gothic Neo (`SandollGothicNeo1Unicode`) body type, a product-blue accent (`#4173fa`, links `#0d6efd`), near-black `#1c1c1c` filter chips at a 19px pill radius, and cool grey surfaces (`#d7d8d9`, `#f9f9f9`, blue-tint `#f5f8ff`). Same company, two registers: the corporate brand is a gallery wall; the product is a working studio.

**Key Characteristics:**
- Single saturated brand red (`#ff0600`) reserved for CTA, active tab, and emphasis on an otherwise grayscale corporate canvas
- Near-black ink (`#1c1c1c`) for text instead of pure black `#000000` — warm, editorial weight
- SDGretaSans (the foundry's own Greta Sans) as the corporate typeface; boldness baked into the `SDGretaSans-hBd` Heavy face
- Sandoll Gothic Neo (`SandollGothicNeo1Unicode`) as the Sandoll Cloud product typeface
- Shadowless corporate system — `#dddddd` hairlines and whitespace do all the separating
- Conservative corporate geometry: 4px workhorse radius, 8px dropdown panels
- Product-surface split: blue accent (`#4173fa` / `#0d6efd`) + 19px pill chips + cool grey surfaces on Sandoll Cloud
- Grey ladder for text hierarchy: `#212121` → `#333333` → `#3b3b3b` → `#808080` → `#999999` → `#a5a5a7`

## 2. Color Palette & Roles

### Primary
- **Sandoll Red** (`#ff0600`): The single brand accent. Reserved for the primary CTA outline/text ("제작문의"), the active navigation/tab state, and inline emphasis marks. On a monochrome page it is the one color that means "action / here."
- **Ink** (`#1c1c1c`): Primary text and heading color across the corporate site (measured on ~996 elements). A near-black that reads warmer and more editorial than pure black.
- **Pure White** (`#ffffff`): Page background, card/panel surfaces, and text over dark hero imagery or dark chips.

### Neutral Text Ladder
- **Pure Black** (`#000000`): Maximum-contrast promo headlines on Sandoll Cloud (H1) and occasional corporate accents.
- **Charcoal** (`#212121`): Nav dropdown item text — the inactive menu color.
- **Graphite** (`#333333`): Sandoll Cloud body text and icon-control glyphs.
- **Slate** (`#3b3b3b`): Secondary body copy on the corporate site.
- **Muted** (`#808080`): Muted labels and metadata.
- **Muted Alt** (`#999999`): Inactive nav links and inactive filter-chip text.
- **Faint** (`#a5a5a7`): Lowest-emphasis labels and fine print.

### Sandoll Cloud (product) accents
- **Cloud Blue** (`#4173fa`): The Sandoll Cloud product accent — primary product buttons and interactive highlights on the font platform.
- **Link Blue** (`#0d6efd`): The dominant interactive/link color throughout the Cloud product (measured on ~532 elements).
- **Surface** (`#f9f9f9`): Light neutral content surface on Sandoll Cloud.
- **Surface Blue** (`#f5f8ff`): Blue-tinted surface for highlighted product blocks.
- **Surface Cool** (`#d7d8d9`): The most frequent Cloud surface/divider — a cool grey used for section separation.

### Lines
- **Hairline** (`#dddddd`): Borders, dividers, chip outlines, and card edges — the primary separation device in the shadowless system.

## 3. Typography Rules

### Font Family
- **Corporate display & body**: `SDGretaSans` — Sandoll's own Greta Sans retail family. Headlines use the `SDGretaSans-hBd` (Heavy) face; body/nav use `SDGretaSans-eRg` (Regular). The foundry ships its own typeface as its site font.
- **Sandoll Cloud (product)**: `SandollGothicNeo1Unicode` — Sandoll Gothic Neo, the foundry's flagship Hangul Gothic, used for all Cloud product UI and promo headlines.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Story / Page H1 | SDGretaSans (Heavy) | 44px (2.75rem) | 400* | 1.34 (58.96px) | *Weight baked into `SDGretaSans-hBd` face |
| Section Heading | SDGretaSans (Heavy) | 34px (2.13rem) | 400* | 1.40 (47.6px) | 서비스 / 스토리 / 파트너사 |
| Body | SDGretaSans (Regular) | 16px (1.00rem) | 400 | 1.60 (25.6px) | Standard reading text |
| Nav | SDGretaSans (Regular) | 16px (1.00rem) | 400 | 1.50 | Top navigation items |
| Nav Sub | SDGretaSans (Regular) | 14px (0.88rem) | 400 | 1.50 | Dropdown / sub-nav |
| Product Hero | Sandoll Gothic Neo | 26px (1.63rem) | 700 | 1.37 (35.62px) | Sandoll Cloud promo H1 |
| Caption | SDGretaSans (Regular) | 13px (0.81rem) | 400 | normal | Footer contact, fine print |

### Principles
- **The typeface is the brand.** Sandoll sets its own type on its own site — SDGretaSans on corporate, Sandoll Gothic Neo on Cloud. Never substitute a generic system font; the sample IS the pitch.
- **Weight lives in the face, not the CSS.** Corporate headlines report `font-weight: 400` but render heavy because they use the `SDGretaSans-hBd` cut. Choose the right face rather than synthesizing bold.
- **Two typefaces, two jobs.** SDGretaSans is the corporate/editorial voice; Sandoll Gothic Neo is the product/reading voice on Cloud. They never swap roles.
- **Generous body leading.** Corporate body runs 16px at a relaxed 1.6 line-height for calm, editorial reading rhythm.

## 4. Component Stylings

### Buttons

**Production-Inquiry CTA (Primary)**
- Background: transparent
- Text: `#ff0600`
- Border: 1px solid `#ff0600`
- Radius: 4px
- Padding: 14px 30px
- Height: 53px
- Font: 16px / 400 / SDGretaSans
- Use: Primary "제작문의" production-inquiry action — the corporate site's single red-accented CTA

**Portfolio CTA (Hero, over imagery)**
- Background: transparent
- Text: `#ffffff`
- Border: 1px solid `#ffffff`
- Radius: 4px
- Padding: 14px 22px
- Height: 59px
- Font: 14px / 400 / SDGretaSans
- Use: "포트폴리오" CTA placed over dark hero imagery — outline white

**Cloud Filter Chip (Active)**
- Background: `#1c1c1c`
- Text: `#ffffff`
- Border: 1px solid `#dddddd`
- Radius: 19px
- Padding: 6px 12px
- Height: 37px
- Font: 14px / 400 / SandollGothicNeo
- Use: Sandoll Cloud active filter/sort chip and "문의하기" action — dark pill

**Cloud Filter Chip (Inactive)**
- Background: `#ffffff`
- Text: `#999999`
- Border: 1px solid `#dddddd`
- Radius: 19px
- Padding: 6px 12px
- Height: 37px
- Use: Sandoll Cloud inactive filter chip ("이미지 검색") — light pill

**Cloud Carousel Control (Round Icon)**
- Background: `#ffffff`
- Text: `#333333`
- Border: 1px solid `#dddddd`
- Radius: 50%
- Height: 30px
- Padding: 2px 3px
- Use: Sandoll Cloud carousel prev/next round icon button

### Cards & Containers

**Menu Panel**
- Background: `#ffffff`
- Border: 1px solid `#dddddd`
- Radius: 8px
- Use: Nav dropdown menu panel / grouped white container — measured 8px corners, no shadow

### Tabs & Navigation

**Nav / Sub-nav Item**
- Text (inactive): `#212121`
- Text (active): `#ff0600`
- Radius: 8px 8px 0px 0px
- Padding: 10px 20px
- Font: 14px / 400 / SDGretaSans
- Active: brand red `#ff0600` text (story sub-nav active item)
- Use: Corporate top-nav dropdown items and story sub-navigation

**Top Nav (over hero)**
- Text: `#ffffff`
- Text (inactive/other pages): `#999999`
- Font: 16px / 400 / SDGretaSans
- Use: Primary horizontal nav (서비스 / 타입브랜딩 / 스토리 / 연구 / IR / 문의)

### Badges & Emphasis

**Inline Emphasis Mark**
- Text: `#ff0600`
- Use: Notice/emphasis spans on the story surface (EM.notice-block) — brand red text draws the eye without a filled chip; Sandoll emphasizes with color on type, not with pills

---

**Verified:** 2026-07-02 (omd:add-reference CREATE — Tier 1 live inspect, 3 brand-owned surfaces)
**Tier 1 sources:** https://www.sandoll.co.kr/, https://www.sandoll.co.kr/story, https://www.sandollcloud.com/
**Tier 2 sources:** getdesign.md/sandoll (NOT LISTED); styles.refero.design/?q=sandoll (no Sandoll match — only unrelated trending styles)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base rhythm: 14px vertical CTA padding, 20–30px horizontal
- Scale (measured): 4px, 8px, 12px, 14px, 20px, 30px, 48px
- Notable: corporate CTAs use asymmetric horizontal padding (30px on the red inquiry CTA, 22px on the hero portfolio CTA); Cloud chips use a tight 6px 12px

### Grid & Container
- Corporate: centered, single-column editorial rhythm with large SDGretaSans section headings anchoring each band
- Section bands alternate white (`#ffffff`) with occasional dark hero/feature blocks (text turns `#ffffff`)
- Sandoll Cloud: denser product grid — filter/sort chip rows above a font-card catalog, carousel promo banners, cool grey (`#d7d8d9`) dividers between sections

### Whitespace Philosophy
- **Restraint as identity.** The corporate surface is airy and grayscale; whitespace is the frame that lets a single red accent and a heavy headline carry the page.
- **Flat segmentation.** Sections separate by whitespace and `#dddddd` hairlines, not by shadow or heavy borders.
- **Product density.** Sandoll Cloud trades editorial air for scan-ability — tight chips and a grid so users can browse hundreds of typefaces quickly.

### Border Radius Scale
- Small (4px): buttons, CTAs, footer contact — the corporate workhorse (measured ×28)
- Medium (8px): dropdown menu panels, grouped containers
- Large (19px): Sandoll Cloud pill filter/sort chips
- Full (50% / 9999px): round carousel controls and pill text-links (채용 / English)

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | `box-shadow: none` | Corporate page background, hero, nav, headings, CTAs |
| Hairline (Level 1) | `1px solid #dddddd` border | Panels, chips, cards, dividers |
| Tint (Level 2) | `#f9f9f9` / `#f5f8ff` / `#d7d8d9` surface shift | Sandoll Cloud section/card separation |

**Shadow Philosophy**: The Sandoll corporate site is a near-shadowless system — live inspection returned `box-shadow: none` across the hero, navigation, section headings, and all CTAs. Depth is communicated entirely through whitespace and thin `#dddddd` hairlines. This is a deliberate editorial-flat choice fitting a type foundry: nothing should compete with the letterforms for attention, and elevation would add visual noise to what is essentially a gallery for type. When emphasis is required, the system reaches for the brand red (`#ff0600`) or a dark chip (`#1c1c1c`), never a drop shadow. Sandoll Cloud, being a working product, leans on flat tinted surfaces (`#f9f9f9`, `#f5f8ff`, `#d7d8d9`) rather than elevation for the same reason.

## 7. Do's and Don'ts

### Do
- Reserve the brand red (`#ff0600`) for the primary CTA, active nav/tab state, and emphasis — keep it the single "action" color
- Use SDGretaSans on brand/corporate surfaces and Sandoll Gothic Neo on product (Cloud) surfaces
- Set headlines with the heavy `SDGretaSans-hBd` face rather than synthesizing bold from a regular weight
- Use near-black ink (`#1c1c1c`) for text instead of pure black `#000000`
- Separate sections with whitespace and `#dddddd` hairlines, not shadows
- Keep corporate geometry conservative — 4px on buttons, 8px on panels
- Use the dark chip (`#1c1c1c`, 19px pill) for Sandoll Cloud active filter/sort controls
- Let the typeface be the hero — the sample is the pitch

### Don't
- Spread the red across many elements — it dilutes the single-action signal on a monochrome canvas
- Substitute a generic system font — Sandoll's own type is the brand identity
- Use pure black (`#000000`) for corporate body text — reserve near-black `#1c1c1c`
- Add drop shadows on corporate surfaces — the system is deliberately flat
- Mix the corporate red accent into the Sandoll Cloud product surface — Cloud uses its own blue (`#4173fa` / `#0d6efd`)
- Use large rounded corners on corporate buttons — 4px is the intentional workhorse
- Synthesize bold weight in CSS when a heavy face exists
- Let decoration compete with the letterforms — restraint is the aesthetic

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, nav collapses to toggle, section headings compress |
| Tablet | 640-1024px | Moderate padding, 2-up feature/portfolio cards |
| Desktop | 1024-1440px | Full editorial layout; Sandoll Cloud shows multi-column font catalog + chip rows |

### Touch Targets
- Corporate CTAs at 53–59px height with generous 14px vertical padding — comfortably tappable
- Sandoll Cloud chips at 37px height with 6px 12px padding
- Round carousel controls at 30px

### Collapsing Strategy
- Corporate top nav (서비스 / 타입브랜딩 / 스토리 / 연구 / IR / 문의) collapses to a menu toggle on mobile
- Section headings scale down while retaining the heavy SDGretaSans face
- Sandoll Cloud chip rows wrap/scroll horizontally; the font-card grid reflows to fewer columns

### Image Behavior
- Corporate hero/portfolio imagery carries no shadow at any size, consistent with the flat system
- Sandoll Cloud carousel banners maintain their promo layout; type specimens remain crisp across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Brand accent / CTA / active: Sandoll Red (`#ff0600`)
- Text ink: Near-black (`#1c1c1c`)
- Max-contrast headline: Pure Black (`#000000`)
- Nav inactive: Charcoal (`#212121`) / Muted Alt (`#999999`)
- Product body / icon: Graphite (`#333333`)
- Background: Pure White (`#ffffff`)
- Hairline: (`#dddddd`)
- Sandoll Cloud accent: Cloud Blue (`#4173fa`), Link Blue (`#0d6efd`)
- Cloud surfaces: (`#f9f9f9`), blue-tint (`#f5f8ff`), cool grey (`#d7d8d9`)

### Example Component Prompts
- "Create a corporate hero on white background. Section heading at 34px SDGretaSans Heavy, color #1c1c1c, line-height 1.4. One red outline CTA: transparent background, #ff0600 text, 1px solid #ff0600 border, 4px radius, 14px 30px padding — '제작문의'. No shadow anywhere."
- "Build a Sandoll Cloud filter row: active chip #1c1c1c background, #ffffff text, 1px solid #dddddd border, 19px radius, 6px 12px padding; inactive chip #ffffff background, #999999 text, same border and radius. Sandoll Gothic Neo 14px."
- "Design a nav dropdown panel: white #ffffff, 8px radius, 1px solid #dddddd hairline, no shadow. Items in SDGretaSans 14px, #212121 text; active item turns #ff0600."
- "Set an editorial page title in SDGretaSans Heavy at 44px, line-height 1.34, color #1c1c1c. Body below at 16px SDGretaSans Regular, line-height 1.6, #3b3b3b."

### Iteration Guide
1. Red (`#ff0600`) is the single action color on corporate — don't spread it
2. SDGretaSans for corporate, Sandoll Gothic Neo for the Cloud product
3. Use the heavy face for headlines; don't synthesize bold
4. No shadows — separate with `#dddddd` hairlines and whitespace
5. Text is `#1c1c1c` ink, not pure black, for body
6. 4px radius on corporate buttons; 8px on panels; 19px pills only on Cloud
7. Keep the product blue (`#4173fa` / `#0d6efd`) on Cloud, off the corporate brand surface

---

## 10. Voice & Tone

Sandoll's voice is **precise, craft-proud, and quietly authoritative** — the register of a foundry that has drawn Korean letterforms since the 1980s and expects to be judged on the millimeter. Copy treats type as infrastructure for communication, not decoration. The Sandoll Cloud positioning line "모두의 창작을 위한 베스트 폰트 플랫폼" ("the best font platform for everyone's creation") captures the dual posture: expert craft on the supply side, democratized access on the demand side. Corporate copy is spare and confident; product copy is friendly and enabling.

| Context | Tone |
|---|---|
| Corporate headings | Spare, declarative, single-word section labels (서비스, 스토리, 연구, 파트너사). Confident, never salesy. |
| Type-branding / service copy | Craft-forward and expert — speaks about letterform, legibility, and brand fit. |
| Sandoll Cloud product | Friendly, enabling, creator-facing. Framed around "창작" (creation) and access. |
| CTAs | Direct and functional. "제작문의", "포트폴리오", "문의하기". |
| Notices / emphasis | Brand red on key words rather than exclamation marks — emphasis is typographic. |

**Voice samples (verbatim from live surfaces):**
- "산돌" — corporate document title / wordmark (the foundry states its name plainly). *(verified live 2026-07-02)*
- "스토리" / "연구" / "파트너사" — corporate section headings (spare, single-word labels). *(verified live 2026-07-02)*
- "모두의 창작을 위한 베스트 폰트 플랫폼 | 산돌구름" — Sandoll Cloud page title (democratized-creation positioning). *(verified live 2026-07-02)*

**Forbidden register**: hype superlatives that undercut craft authority, exclamation-heavy marketing, decorative color for its own sake, and any tone that treats type as an afterthought rather than the product.

## 11. Brand Narrative

Sandoll (산돌) is one of Korea's foundational type foundries. It was founded in **1984 by 석금호 (Seok Geum-ho)** as 산돌커뮤니케이션 (Sandoll Communication), and across four decades it grew into the country's most prolific designer of Hangul typefaces — the type behind a large share of Korean corporate identities, publications, and screens. The company's premise has been consistent: letters are infrastructure, and a well-drawn typeface is a public good that shapes how a whole language is read.

That premise matured into two arms. **Type branding / type design** is the bespoke, craft side — Sandoll draws custom corporate typefaces and retail families (its own SDGretaSans and Sandoll Gothic Neo among them). **Sandoll Cloud (산돌구름)** is the platform side — a subscription service that puts the foundry's library in front of every designer and creator, positioned as "모두의 창작을 위한 베스트 폰트 플랫폼." The two-surface design system mirrors this split precisely: an austere, red-accented, monochrome corporate brand for the foundry, and a warmer, blue-accented, denser product surface for the platform.

What Sandoll's design refuses, and what it embraces, is legible in the site itself: no decorative depth, no shadow stacks, no color for color's sake — because nothing should compete with the letterforms. What it embraces is restraint (a single red accent on grayscale), its own type as its site type (the sample is the pitch), and a flat, hairline-separated layout that reads like a well-set page. It is a company that designs the medium other companies use to speak, and it dresses accordingly.

*(Founding year/founder and the type-branding-plus-Cloud structure are widely documented public facts about Sandoll; the design reading connecting them to the observed system is an editorial interpretation, not a quoted Sandoll statement.)*

## 12. Principles

1. **The type is the product — and the message.** Sandoll ships its own typefaces as its site fonts. *UI implication:* never substitute a generic system font on a Sandoll surface; the rendered sample must be a real Sandoll typeface.
2. **Restraint amplifies.** One red accent on a grayscale canvas carries more force than a full palette. *UI implication:* reserve `#ff0600` for the primary CTA, active state, and emphasis; keep everything else monochrome.
3. **Emphasize with type, not ornament.** Sandoll marks important words in red rather than with badges, glows, or exclamation. *UI implication:* use color-on-type emphasis and heavy faces, not decorative chrome.
4. **Flat, so the letters lead.** No shadows compete with the letterforms. *UI implication:* separate with whitespace and `#dddddd` hairlines; never add elevation on corporate surfaces.
5. **Two registers, one company.** The foundry brand and the Cloud product are intentionally distinct. *UI implication:* keep the corporate red/monochrome/SDGretaSans world and the Cloud blue/Gothic-Neo world separate; don't blend their palettes.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Sandoll audiences (brand/agency designers commissioning type, and Sandoll Cloud subscribers), not individual people.*

**정민석, 38, 서울.** A brand-identity director at an agency, commissioning a custom corporate typeface. Judges a foundry by the rigor of its letterforms and the calm of its presentation; Sandoll's austere, sample-led site signals the craft seriousness he needs to trust it with a client's identity.

**이하늘, 27, 성남.** A freelance graphic designer and Sandoll Cloud subscriber who browses hundreds of typefaces a week. Values the product's density and fast filtering (판매순, 이미지 검색) over editorial air — she wants to find and license the right face in minutes.

**Yuki Tanaka, 33, Tokyo.** A UI designer at a product team choosing a Hangul + Latin pairing for a bilingual app. Trusts Sandoll Gothic Neo for screen legibility and appreciates that the foundry demonstrates its own type on its own surfaces — proof, not promise.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no search results, Cloud)** | White canvas, single graphite (`#333333`) line explaining no matching typefaces, with a path to clear filters. No illustration clutter. |
| **Empty (saved / collection, none yet)** | Muted (`#999999`) single line: nothing saved yet, plus a link back to browse. Calm, honest. |
| **Loading (font catalog fetch)** | Skeleton cards on `#f9f9f9` surface at final dimensions; flat pulse consistent with the shadowless system — no shadow shimmer. |
| **Loading (specimen render)** | Inline progress within the card; previous specimen stays visible until the new one paints. |
| **Error (search/load failed)** | Inline message in ink (`#1c1c1c`) with a plain-language explanation and a retry. No bare "오류가 발생했습니다". |
| **Error (form validation, inquiry)** | Field-level message below the input; the brand red (`#ff0600`) marks the invalid field; describes what is valid, not just "필수". |
| **Success (inquiry submitted)** | Brief inline confirmation in a calm tone; next-step detail linked below. No celebratory emoji. |
| **Skeleton** | `#f9f9f9` / `#d7d8d9` blocks at final dimensions, flat pulse, hairline (`#dddddd`) edges. |
| **Disabled** | Faint (`#a5a5a7`) text on reduced-opacity surface; the red accent fades rather than turning grey, to preserve the brand read. |
| **Active / Selected** | Brand red (`#ff0600`) text (nav/tab) or dark fill (`#1c1c1c`, Cloud chip) — the two ways Sandoll marks "current." |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, chip press, focus |
| `motion-standard` | 200ms | Card/section reveal, dropdown, carousel step |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — dropdowns, cards, carousel |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and restrained — consistent with the flat, editorial aesthetic and the foundry's focus on letterforms over spectacle. The Sandoll Cloud carousel advances at `motion-standard / ease-standard`; dropdown panels and cards fade/settle at `motion-standard / ease-enter`; chips respond to press with a subtle scale/opacity shift. No bounce or spring — a type foundry signals precision, not playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the carousel stops auto-advancing; the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-07-02) via playwright getComputedStyle across three
brand-owned surfaces (see web/references/sandoll/.verification.md "## Proof"):
- https://www.sandoll.co.kr/ — corporate homepage (nav, hero CTAs, section headings, footer)
- https://www.sandoll.co.kr/story — story/editorial surface (H1, active tab, notice emphasis)
- https://www.sandollcloud.com/ — Sandoll Cloud font-subscription product (promo H1, chips, carousel)

Token-level claims (§1-9) are sourced from that live inspection:
brand red #ff0600 (corporate CTA/active/emphasis), ink #1c1c1c, SDGretaSans
(SDGretaSans-hBd Heavy / SDGretaSans-eRg Regular) on corporate, Sandoll Gothic Neo
(SandollGothicNeo1Unicode) + blue accent #4173fa / #0d6efd on Cloud, shadowless
corporate system, 4px/8px/19px radius scale, #dddddd hairlines.

Voice samples (§10) are verbatim from live document titles and section headings
(산돌 / 스토리 / 연구 / 파트너사 / "모두의 창작을 위한 베스트 폰트 플랫폼 | 산돌구름").

Brand narrative (§11): Sandoll (산돌) founded 1984 by 석금호 (Seok Geum-ho) as
산돌커뮤니케이션; a foundational Korean type foundry; Sandoll Cloud (산돌구름) is its
font-subscription platform. These are widely documented public facts; the founding
details beyond the live surfaces are general public knowledge, not directly quoted
from a verified Sandoll statement in this turn.

Personas (§13) are fictional archetypes informed by publicly observable Sandoll
audiences (agency/brand designers commissioning type; Sandoll Cloud subscribers).
Names are illustrative; they do not refer to real people.

Interpretive claims (e.g., "the type is the message", "restraint amplifies", "flat so
the letters lead", the two-register corporate-vs-Cloud reading) are editorial
interpretations connecting Sandoll's observed design to its foundry positioning, not
directly sourced Sandoll statements.

Tier 2: getdesign.md/sandoll NOT LISTED; styles.refero.design/?q=sandoll no match
(2026-07-02). KR Tier-2 under-coverage — Tier 1 carries the proof.
-->
