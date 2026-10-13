---
name: goorm
colors:
  ink: '#262626'
  text-secondary: '#4c4c4c'
  text-muted: '#5d5d5d'
  text-tertiary: '#393939'
  primary: '#2a72e5'
  anchor: '#0957c8'
  link: '#0043b3'
  canvas: '#ffffff'
  surface: '#f7f7f7'
  hairline: '#e1e1e1'
  border-strong: '#c6c6c6'
  on-primary: '#ffffff'
  edu-ink: '#2b2d36'
  edu-body: '#3e404c'
typography:
  display:
    fontSize: 48px
    fontWeight: 500
    lineHeight: 1.29
    letterSpacing: '-0.4px'
    use: Arkain page headline (h2)
  nav:
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.71
    use: Global navigation item on www.goorm.io
  button:
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.57
    letterSpacing: '-0.1px'
    use: Header action label
  button-lg:
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: '-0.1px'
    use: Hero action label
  body:
    fontSize: 16px
    fontWeight: 400
    use: Marketing body text (line height computes normal)
  card-title:
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: '-0.2px'
    use: Customer story card title
  edu-body:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: '-0.096px'
    use: goormEDU body text
  edu-section:
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: '-0.3px'
    use: goormEDU section heading (h3)
rounded:
  sm: 3px
  md: 8px
spacing:
  nav-y: 8
  nav-x: 12
  cta-x: 16
  cta-lg-x: 24
  card: 24
  menu: 4
components:
  header-nav-button:
    type: tab
    backgroundColor: transparent
    textColor: '#262626'
    rounded: 8px
    padding: 8px 12px
    height: 40px
    typography: 14px / 600 / 24px Pretendard
    states: hover and pressed frames read background oklab(0 0 0 / 0), still transparent although the class names hover:bg-v-gray-40, so they are treated as transition frames and no hover value is declared; the menu triggers open a captured menu
    use: Global navigation item on www.goorm.io (비즈니스 and 리소스 open menus; 채용 and 공지사항 are links) at home::[data-omd-capture="1"], 100 x 40; the Arkain page repeats the same values
  header-cta:
    type: button
    backgroundColor: '#262626'
    textColor: '#ffffff'
    rounded: 8px
    padding: 0px 16px
    height: 40px
    typography: 14px / 500 / 22px Pretendard
    states: rest on home and the Arkain page (capture 7 on each); no state frame
    use: Header 도입 문의하기 action at home::[data-omd-capture="7"], 107 x 40
  hero-cta:
    type: button
    backgroundColor: '#262626'
    textColor: '#ffffff'
    rounded: 8px
    padding: 0px 24px
    height: 48px
    typography: 16px / 500 / 24px Pretendard
    states: rest only; no state frame
    use: Hero action at home::[data-omd-capture="9"], 134 x 48; the Arkain page renders the same values on an a role=button (surface-2 capture 8)
  outline-cta:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#262626'
    rounded: 8px
    padding: 0px 24px
    height: 48px
    typography: 16px / 500 / 24px Pretendard
    shadow: rgb(198, 198, 198) 0px 0px 0px 1px inset
    states: rest only; no state frame
    use: Secondary hero action on the Arkain page at surface-2::[data-omd-capture="9"], 148 x 48; its edge is a 1px inset shadow, not a border
  neutral-icon-button:
    type: button
    backgroundColor: '#e1e1e1'
    rounded: 8px
    size: 40px x 40px
    states: rest on two sibling buttons (capture 10, 11); no state frame
    use: Icon-only carousel buttons on the Arkain page at surface-2::[data-omd-capture="10"]
  product-demo-primary:
    type: button
    backgroundColor: '#2a72e5'
    rounded: 8px
    padding: 0px 16px
    height: 40px
    states: 'one element; its hover and pressed frames both read #1e5dcc, but with no sibling to agree the value is not declared as a state'
    use: Primary button inside the in-page product demo on www.goorm.io at home::[data-omd-capture="13"], 84 x 40; its label sits in a child that was not captured, so no text colour is claimed
  product-demo-navbar-button:
    type: button
    backgroundColor: transparent
    rounded: 8px
    size: 32px x 32px
    hover: 'bg #f0f0f0'
    pressed: 'bg #f0f0f0'
    states: 'rest, hover and pressed; four sibling buttons (capture 11, 17, 18, 19) all read #f0f0f0 in both frames; focus is not declared from the capture'
    use: Icon button in the product demo's navigation bar at home::[data-omd-capture="11"]
  customer-story-card:
    type: card
    backgroundColor: '#f7f7f7'
    border: '1px solid #e1e1e1'
    rounded: 8px
    padding: 24px
    size: 352px x 420px
    use: 'Customer story card (article.customer-story-card) on home and the Arkain page; title 20px / 500 / 30px #262626, description 16px / 500 / 24px #5d5d5d, footer divided by a 1px #e1e1e1 top border'
  patent-card:
    type: card
    backgroundColor: '#f7f7f7'
    border: '1px solid #e1e1e1'
    rounded: 8px
    padding: 24px
    size: 369px x 130px
    use: 'Patent card (article.patent-card) on home, eight captured; title 16px / 500 / 24px #262626'
  dropdown-menu:
    type: card
    backgroundColor: '#ffffff'
    border: '1px solid #e1e1e1'
    rounded: 8px
    padding: 4px
    shadow: color(srgb 0 0 0 / 0.2) 0px 4px 10px 0px
    use: Menu panel (role=menu) opened by the collector from a header trigger (interaction capture menu-0-0), 160 wide; its items are 14px / 400 / 22px with 8px radius and 4px 8px padding
  edu-primary-button:
    type: button
    backgroundColor: '#393939'
    textColor: '#ffffff'
    rounded: 8px
    padding: 0px 24px
    height: 48px
    typography: 16px / 500 / 24px Pretendard Variable
    states: rest captured; the pressed frame adds only a transparent zero-size box-shadow, a transition frame, so no pressed value is declared; no hover frame; focus is not declared from the capture
    use: Vapor UI button on edu.goorm.io at surface-3::[data-omd-capture="17"], 133 x 48
  edu-search-input:
    type: input
    backgroundColor: '#f7f7fa'
    textColor: '#2b2d36'
    rounded: 8px
    padding: 0px 32px 0px 0px
    height: 32px
    typography: 14px / 400 / 22px Pretendard Variable
    states: rest only; no state frame
    use: Header search field on edu.goorm.io (Vapor UI input) at surface-3::[data-omd-capture="7"], 347 x 32
  edu-header-link:
    type: tab
    backgroundColor: transparent
    textColor: '#2b2d36'
    height: 36px
    typography: 16px / 500 / 24px Pretendard Variable
    hover: 'fg #1d6ce0'
    pressed: 'fg #1d6ce0'
    states: 'rest, hover and pressed; siblings (capture 11, 12 and the smaller capture 8) all read #1d6ce0 in both frames; focus is not declared from the capture'
    use: Primary header link on edu.goorm.io at surface-3::[data-omd-capture="11"], 55 x 36
  edu-course-tab:
    type: tab
    backgroundColor: transparent
    textColor: '#4c4c4c'
    border: 2px solid transparent (bottom only)
    padding: 14px 4px 12px
    height: 50px
    typography: 16px / 400 / 24px Pretendard Variable
    selected: 'fg #2a72e5, weight 500, 2px bottom border #2a72e5 (capture 14)'
    states: selected variant read from rest values (capture 14 against 15); no pointer frame
    use: Course category tab on edu.goorm.io at surface-3::[data-omd-capture="15"], 100 x 50
  family-bar-link:
    type: tab
    backgroundColor: transparent
    textColor: '#262626'
    typography: 12px / 400 / 18px Pretendard Variable
    selected: 'fg #0043b3, weight 700 on the current service (capture 0)'
    states: selected variant read from rest values (capture 0 against 1-3); no pointer frame
    use: goorm family-service switcher at the top of edu.goorm.io at surface-3::[data-omd-capture="1"]
  family-bar-account-link:
    type: button
    backgroundColor: transparent
    textColor: '#5d5d5d'
    typography: 12px / 400 / 20px Pretendard Variable
    hover: 'fg #0043b3'
    pressed: 'fg #0043b3'
    states: 'rest, hover and pressed; both links (capture 4, 5) read #0043b3 in both frames; focus is not declared from the capture'
    use: Account links at the right end of the family bar on edu.goorm.io at surface-3::[data-omd-capture="4"]; styles were read without following the links
fonts:
  roles:
    sans: Pretendard
    product: Pretendard Variable
---

# Design System Inspiration of goorm

## Overview

### Visual Theme & Atmosphere

goorm (구름, Korean for "cloud") is a Korean AI and software education and developer-tools company, goorm Inc. ((주)구름), based in Pangyo. Its brand guideline treats the name as one lowercase word taken from 구름, the cloud its services run in. The public site now leads with "Superpowers, for everyone" and describes the company as backing enterprise AX — AI transformation — with technology and execution, across three platforms: goormEDU, a learning-experience platform with AI tutoring that runs in the cloud; Devth, for AI talent; and Arkain, a cloud development environment. Arkain is the newest chapter of the company's IDE line: goorm's BX team writes that goormIDE outgrew the "IDE" category as the market turned AI-native and was redefined as Arkain for a global audience, with a symbol built on the initial "a" drawn as a bold gradient line. The education side remains the company's public face — in 2025 goorm reported winning the coding-education category of Korea's consumer-voted Brand of the Year for a second year.

The captured surfaces read as calm, engineered software. www.goorm.io sets `#262626` ink on white `#ffffff`, puts its actions in the same dark `#262626` fill with white labels, and groups stories and patents in `#f7f7f7` cards edged with a `#e1e1e1` hairline — no drop shadow on any card. A 1px inset `#c6c6c6` edge replaces a border on the outline action, and the only floating surface is the dropdown menu's shadow. The saturated goorm blue (`#2a72e5`) appears where the product itself appears: on the primary button inside the page's live product demo and as the selected course tab on goormEDU. Radii stay at 8px on actions, cards, menus and fields.

goormEDU is the older product chrome under the same roof and already runs goorm's design system: its header, family-service bar, search field and buttons carry `vapor_components_0_42_1` classes, Vapor UI — "구름 디자인 시스템 3.0" on its public documentation site. There the ink shifts to `#2b2d36`, course copy to `#3e404c`, links to `#0957c8`, the current service in the family bar to `#0043b3`, and header links settle on `#1d6ce0` under the pointer. All text on both domains is Pretendard; goorm's own open-source typeface, 구름 산스 (goorm sans), is published with its brand resources but was not rendered on any captured page.

**Key Characteristics:**
- `#262626` near-black ink and a dark `#262626` action fill instead of a coloured primary on the marketing site
- goorm blue `#2a72e5` reserved for product moments — the demo's primary button, goormEDU's selected tab
- Flat cards: `#f7f7f7` fill, 1px `#e1e1e1` hairline, 8px radius, 24px padding, no shadow
- Inset strokes instead of borders (`rgb(198, 198, 198) 0px 0px 0px 1px inset`); one menu shadow
- Pretendard on both domains — self-hosted through next/font on www.goorm.io, Pretendard Variable 1.3.9 on goormEDU
- 8px radius as the working corner; 14px / 600 navigation, 14px and 16px / 500 action labels
- Vapor UI (goorm's design system) in production on goormEDU
- A brand typeface, 구름 산스, published under the SIL Open Font License but not used on the captured pages

### Primary tasks

- Learn to code in the browser without local setup (goormEDU)
- Compare courses by category and start one
- Evaluate AI talent and hiring assessments (Devth)
- Work in a cloud development environment (Arkain)
- Ask for an enterprise AX training or tooling consultation (도입 문의하기)

### Brand Narrative

goorm takes its name from 구름, the cloud: its guideline asks that the name always be written as a single lowercase word, and that goorm's official services be referred to as 구름 or goorm. The company's first identity was the cloud IDE; its product family has since grown into education (goormEDU, goormLEVEL, the KDT bootcamps behind its 2025 Brand of the Year win), hiring and talent (Devth), and cloud development (Arkain).

The Arkain story, told by goorm's BX team in April 2026, shows how the brand is evolving. As the market reorganised around AI-native tooling, goormIDE prepared to become a platform covering development through operations, and the word "IDE" became a ceiling. The product was redefined as Arkain for a global market, and the team rejected metaphor-heavy symbols in favour of an initial "a" — a mark that anyone, in any language, identifies quickly — drawn as a bold gradient line under the concept of an experience that "connects smoothly into one".

The company's own design infrastructure is public too. Vapor UI, presented on its documentation site as "구름 디자인 시스템 3.0", ships in production on goormEDU; 구름 산스 and 구름 산스 코드 are released as open-source typefaces tuned for long hours of reading code. What goorm refuses, visible in the captured pages: the intimidating chrome of legacy developer tooling. What it embraces: dark, quiet actions, flat hairline cards and one blue kept for the product itself.

### Principles

1. **Anyone can develop.** The blog's sign-off is the mission. *UI implication:* plain labels and low-friction flows; never gate understanding behind jargon.
2. **Quiet chrome, blue for the product.** *UI implication:* marketing actions in `#262626`; `#2a72e5` for the product's own primary and selected states.
3. **Flat and precise.** *UI implication:* `#f7f7f7` cards with `#e1e1e1` hairlines and no shadow; inset strokes for outlines.
4. **One corner.** *UI implication:* 8px on actions, cards, menus and fields.
5. **Identification over metaphor.** From the Arkain symbol work. *UI implication:* marks and icons should be recognisable at a glance across languages.
6. **A shared system.** *UI implication:* build product surfaces from Vapor UI components rather than one-off styles.

### Personas

*Personas below are fictional archetypes informed by publicly observable goorm user segments (coding learners and bootcamp students, enterprise training buyers, developers using cloud environments), not individual people.*

**한지우, 22, 대전.** A computer-science student taking goormEDU courses. Values that the environment runs in the browser with nothing to install before the first lesson.

**박도현, 38, 판교.** An HR lead evaluating AX training and AI-talent assessments for his company. Wants a calm page, a clear 도입 문의하기, and proof from customer stories.

**이서연, 29, 서울.** A backend developer trying Arkain as a cloud development environment. Expects precise, quiet tooling UI with an obvious primary action.

## Colors

Every token below was read by the deterministic collector on 2026-09-30 from www.goorm.io, its Arkain page, and edu.goorm.io.

### Ink & Text
- **Ink** (`#262626`): Body text on www.goorm.io, headings, navigation, and the fill of the header and hero actions.
- **Secondary** (`#4c4c4c`): Unselected course tabs on goormEDU.
- **Muted** (`#5d5d5d`): Story descriptions on home and the account links in goormEDU's family bar.
- **Tertiary** (`#393939`): A small 12px / 500 goormEDU link beside the Vapor UI button, and that button's fill.
- **goormEDU Ink** (`#2b2d36`): goormEDU header links and search text.
- **goormEDU Body** (`#3e404c`): Course-card copy on goormEDU.

### Blues
- **goorm Blue** (`#2a72e5`): The primary button inside the home page's product demo and goormEDU's selected course tab (text and 2px underline).
- **Anchor** (`#0957c8`): Default link colour on goormEDU course links.
- **Link** (`#0043b3`): The current service ("EDU") in goormEDU's family bar and the hover colour of its account links.

### Neutral & Surface
- **Canvas** (`#ffffff`): Page background, menus and the outline action.
- **Surface** (`#f7f7f7`): Story, patent and use-case cards.
- **Hairline** (`#e1e1e1`): 1px card and menu borders, card footers, and the fill of the neutral icon buttons.
- **Border Strong** (`#c6c6c6`): The 1px inset edge of the outline action.
- **On Primary** (`#ffffff`): Labels on the dark actions.

### Not carried forward
- The Partial record's Vapor documentation palette — semantic tints `#c6e6ff`, `#bbecd7`, `#ffd8d7`, `#ffd9c8`, success `#058765`, danger `#da3944` and a faint `#a3a3a3` text grey — came from the documentation site in June 2026. None was observed on the three captured product and marketing pages, so none is a token here.

## Typography

### Font Family
- **Marketing site, live use**: `Pretendard`, self-hosted through next/font under the family name `pretendard` (`/_next/static/media/ff840cfebfb63b0c-s.p.woff2`); 665 observed uses on www.goorm.io and the Arkain page.
- **goormEDU, live use**: `Pretendard Variable` 1.3.9 dynamic subset from `statics.goorm.io/gds/fonts/pretendard/v1.3.9/`; 449 observed uses.
- **Official brand typeface, distributed but not observed**: 구름 산스 (goorm sans) — Regular 400, Medium 500, Bold 700 — and 구름 산스 코드, a coding face that keeps hangul and latin on the same advance in code. goorm's font page states that goorm owns the typefaces and releases them under the SIL Open Font License, free to use; selling the font on its own is restricted. No captured page renders it, so it is brand context and not a token.
- **Declared only (no visible use)**: `vapor-font` and `goorm-bootstrap` (icon fonts from `statics.goorm.io/styles/`), `Inter` and `Fira Code` (Google Fonts).
- **Unresolved**: a code snippet in the home page's product demo asks for `FiraCode:regular`, a family name no loaded face matches; it falls back, so no code font is claimed.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Observed on |
|------|------|------|--------|-------------|----------------|-------------|
| Display | Pretendard | 48px | 500 | 62px (1.29) | -0.4px | Arkain page headline |
| goormEDU Section | Pretendard Variable | 24px | 700 | 36px (1.5) | -0.3px | goormEDU section heads |
| Card Title | Pretendard | 20px | 500 | 30px (1.5) | -0.2px | Customer story titles |
| Body | Pretendard | 16px | 400 | normal | normal | www.goorm.io body |
| Button Large | Pretendard | 16px | 500 | 24px (1.5) | -0.1px | Hero action |
| Nav | Pretendard | 14px | 600 | 24px (1.71) | normal | Global navigation |
| Button | Pretendard | 14px | 500 | 22px (1.57) | -0.1px | Header action |
| goormEDU Body | Pretendard Variable | 14px | 400 | 21px (1.5) | -0.096px | goormEDU body |

### Principles
- **Medium, not bold, for the marketing voice**: the Arkain headline is 48px at 500 with -0.4px tracking; action labels are 500 and navigation 600.
- **Bold where the catalogue needs scanning**: goormEDU's section heads step up to 700.
- **Slight negative tracking** on titles and labels (-0.4px to -0.1px); goormEDU applies -0.096px to all body text.

## Layout

### Spacing System
- Navigation items: 8px vertical, 12px horizontal
- Actions: 16px horizontal at 40px height, 24px at 48px height
- Cards: 24px padding
- Menus: 4px inner padding around 4px 8px items

### Grid & Container
- www.goorm.io stacks full-width sections; customer stories run as a 1140px row of 352px cards.
- The Arkain page's use-case carousel expands one 1012px card while the others collapse to 20px edges.
- goormEDU uses a wide catalogue grid of 212px course cards under a two-row header (family bar, then header with search).

### Whitespace Philosophy
- **Calm density**: generous section rhythm on marketing pages, tight inside controls.
- **Flat segmentation**: cards separate by the `#f7f7f7` fill and `#e1e1e1` hairlines rather than elevation.

### Border Radius Scale
- 3px: small raised carousel buttons on goormEDU
- 8px: actions, cards, menus, menu items, the search field — the working corner

### Responsive Behavior

#### Breakpoints
Only the 1440 × 900 desktop viewport was captured. goormEDU's header links carry `d-none d-md-flex`, which hides them below a medium breakpoint; no other breakpoint was measured.

#### Touch Targets
- Navigation items and header actions: 40px tall
- Hero, outline and goormEDU actions: 48px tall
- goormEDU search field: 32px tall

#### Collapsing Strategy
- Not measured beyond the `d-none d-md-flex` header links.

#### Image Behavior
- Use-case screenshots on the Arkain page sit flat inside `#f7f7f7` cards, without shadows.

## Elevation & Depth

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow | Page, cards, navigation, actions |
| Hairline | 1px solid `#e1e1e1` | Card and menu borders |
| Inset stroke | `rgb(198, 198, 198) 0px 0px 0px 1px inset` | Outline action edge |
| Raised small | `rgba(0, 0, 0, 0.2) 0px 1px 3px 0px` | goormEDU 40 × 40 carousel buttons |
| Menu | `color(srgb 0 0 0 / 0.2) 0px 4px 10px 0px` | Dropdown menu panel |

**Shadow Philosophy**: goorm's pages are flat; cards carry no shadow at all. Edges are drawn as hairlines or inset strokes, and outer shadows are kept for things that float above the page — the dropdown menu and goormEDU's small carousel buttons.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.inset-strong`: `rgb(198, 198, 198) 0px 0px 0px 1px inset`
- `shadow.menu`: `color(srgb 0 0 0 / 0.2) 0px 4px 10px 0px`
- `shadow.raised-sm`: `rgba(0, 0, 0, 0.2) 0px 1px 3px 0px`

## Motion & Easing

The collector reads computed style, not animation, so no duration or easing is measured. Several frames caught controls mid-transition — the global navigation's hover fill had not yet left transparent, and a goormEDU tab's focus border was at alpha 0.004 — which shows transitions exist without timing them. Treat motion as unspecified rather than borrowing values, and honour `prefers-reduced-motion` in any build.

<!--
Sources — 2026-09-30 promotion to Verified v2
- Tokens and §4: artifacts/reference-evidence/goorm.json (capturedAt 2026-09-30), deterministic collector, 1440x900, logged out: www.goorm.io (goorm.co redirects there), www.goorm.io/solution/ai-dev, edu.goorm.io.
- §1, §3, §11 context: www.goorm.io/resources/brands, www.goorm.io/resources/fonts, vapor-ui.goorm.io (nonsense-path control 404), blog.goorm.io/arkain-brand-symbol-design/ (2026-04-21), blog.goorm.io/brand-of-the-year-2025/ (2025-09-03). All opened 2026-09-30.
- ide.goorm.io now redirects to www.goorm.io, so no separate IDE landing page was captured; the IDE itself is behind sign-in and was not visited.
- Personas are fictional archetypes. Interpretive readings are editorial.
-->

## Components

### Navigation

**Global navigation item (www.goorm.io)**
- Background: transparent
- Text: `#262626`
- Radius: 8px
- Padding: 8px 12px
- Height: 40px
- Font: 14px / 600 / 24px Pretendard
- States: hover and pressed frames read background `oklab(0 0 0 / 0)` — still transparent although the class names a grey hover fill — so they are treated as transition frames and no hover value is declared
- Use: 비즈니스 and 리소스 (menu triggers), 채용 and 공지사항 (links)

**Dropdown menu**
- Background: `#ffffff`
- Border: 1px solid `#e1e1e1`
- Radius: 8px
- Padding: 4px
- Shadow: `color(srgb 0 0 0 / 0.2) 0px 4px 10px 0px`
- Use: menu panel opened from a header trigger; items are 14px / 400 / 22px with 8px radius and 4px 8px padding

**goormEDU header link**
- Background: transparent
- Text: `#2b2d36`
- Height: 36px
- Font: 16px / 500 / 24px Pretendard Variable
- Hover: text `#1d6ce0`
- Pressed: text `#1d6ce0`
- States: sibling links (capture 11, 12 and the smaller capture 8) all settle on `#1d6ce0`; focus is not declared from the capture
- Use: primary header links on edu.goorm.io

**goormEDU course tab**
- Background: transparent
- Text: `#4c4c4c`
- Border: 2px solid transparent, bottom only
- Padding: 14px 4px 12px
- Height: 50px
- Font: 16px / 400 / 24px Pretendard Variable
- Selected: text `#2a72e5` at 500 with a 2px `#2a72e5` bottom border
- States: selected variant read from rest values; no pointer frame
- Use: course category tabs on edu.goorm.io

**Family-service bar link**
- Background: transparent
- Text: `#262626`
- Font: 12px / 400 / 18px Pretendard Variable
- Selected: text `#0043b3` at 700 on the current service
- States: selected variant read from rest values; no pointer frame
- Use: switcher between goorm services at the top of edu.goorm.io

**Family-service bar account link**
- Background: transparent
- Text: `#5d5d5d`
- Font: 12px / 400 / 20px Pretendard Variable
- Hover: text `#0043b3`
- Pressed: text `#0043b3`
- States: both links (capture 4 and 5) settle on `#0043b3`; focus is not declared from the capture
- Use: account links at the right end of the family bar (read, never followed)

### Buttons

**Header action**
- Background: `#262626`
- Text: `#ffffff`
- Radius: 8px
- Padding: 0px 16px
- Height: 40px
- Font: 14px / 500 / 22px Pretendard
- States: rest on home and the Arkain page; no state frame
- Use: 도입 문의하기 in the header, 107 × 40

**Hero action**
- Background: `#262626`
- Text: `#ffffff`
- Radius: 8px
- Padding: 0px 24px
- Height: 48px
- Font: 16px / 500 / 24px Pretendard
- States: rest only; no state frame
- Use: hero action on www.goorm.io, 134 × 48; repeated on the Arkain page

**Outline action**
- Background: `#ffffff`
- Text: `#262626`
- Radius: 8px
- Padding: 0px 24px
- Height: 48px
- Font: 16px / 500 / 24px Pretendard
- Shadow: `rgb(198, 198, 198) 0px 0px 0px 1px inset`
- States: rest only; no state frame
- Use: secondary hero action on the Arkain page; the edge is an inset shadow, not a border

**Neutral icon button**
- Background: `#e1e1e1`
- Radius: 8px
- Size: 40 × 40
- States: rest on two siblings; no state frame
- Use: carousel buttons on the Arkain page

**Product demo primary**
- Background: `#2a72e5`
- Radius: 8px
- Padding: 0px 16px
- Height: 40px
- States: one element; its hover and pressed frames both read `#1e5dcc`, but with no sibling to confirm the value it is not declared as a state
- Use: primary button inside the live product demo on the home page; its label colour was not captured

**Product demo navigation button**
- Background: transparent
- Radius: 8px
- Size: 32 × 32
- Hover: background `#f0f0f0`
- Pressed: background `#f0f0f0`
- States: four sibling buttons settle on `#f0f0f0`; focus is not declared from the capture
- Use: icon buttons in the demo's navigation bar

**goormEDU primary button (Vapor UI)**
- Background: `#393939`
- Text: `#ffffff`
- Radius: 8px
- Padding: 0px 24px
- Height: 48px
- Font: 16px / 500 / 24px Pretendard Variable
- States: rest captured; the pressed frame adds only a transparent zero-size shadow, a transition frame, so no pressed value is declared; focus is not declared from the capture
- Use: Vapor UI button on edu.goorm.io, 133 × 48

### Inputs & Forms

**goormEDU search field (Vapor UI)**
- Background: `#f7f7fa`
- Text: `#2b2d36`
- Radius: 8px
- Padding: 0px 32px 0px 0px
- Height: 32px
- Font: 14px / 400 / 22px Pretendard Variable
- States: rest only; no state frame
- Use: header search on edu.goorm.io, 347 × 32

### Cards & Containers

**Customer story card**
- Background: `#f7f7f7`
- Border: 1px solid `#e1e1e1`
- Radius: 8px
- Padding: 24px
- Size: 352 × 420
- Use: customer stories on home and the Arkain page; title 20px / 500 / 30px `#262626`, description 16px / 500 / 24px `#5d5d5d`, footer split by a 1px `#e1e1e1` top border

**Patent card**
- Background: `#f7f7f7`
- Border: 1px solid `#e1e1e1`
- Radius: 8px
- Padding: 24px
- Size: 369 × 130
- Use: patent list on home, eight captured

---

**Verified:** 2026-09-30 (deterministic collector capture of three public pages, logged out, plus first-party context)
**Tier 1 sources:** https://www.goorm.io/ ; https://www.goorm.io/solution/ai-dev ; https://edu.goorm.io/ ; https://www.goorm.io/resources/brands ; https://www.goorm.io/resources/fonts ; https://vapor-ui.goorm.io/ ; https://blog.goorm.io/arkain-brand-symbol-design/
**Tier 2 sources:** getdesign.md/goorm (HTTP 200; the served page contains no occurrence of the name) and styles.refero.design/?q=goorm (HTTP 200, the name appears only as the echoed query), requested 2026-09-30; no Tier 2 value used
**Conflicts unresolved:** none

### States

Only these states were observed on the three captured pages; nothing else is specified here.

| State | Observation |
|---|---|
| **Hover and pressed (goormEDU header links)** | Text `#2b2d36` → `#1d6ce0` on sibling links. |
| **Hover and pressed (family-bar account links)** | Text `#5d5d5d` → `#0043b3`. |
| **Hover and pressed (product demo navigation buttons)** | Background transparent → `#f0f0f0` on four siblings. |
| **Selected (goormEDU course tab)** | Text `#2a72e5` at 500 with a 2px `#2a72e5` underline. |
| **Selected (family-service bar)** | Current service in `#0043b3` at 700. |
| **Menu open** | Header menu triggers open a white, 8px-radius menu with a 1px `#e1e1e1` border and `color(srgb 0 0 0 / 0.2) 0px 4px 10px 0px` shadow. |
| **Transition frames (not declared)** | Global navigation hover (`oklab(0 0 0 / 0)`), goormEDU button pressed (transparent zero-size shadow), a goormEDU tab focus frame at alpha 0.004. |

Focus rings, error, empty, loading and success treatments were not captured and are not described.

## Do's and Don'ts

### Do
- Use `#262626` for text and for the main marketing action fill, with white labels
- Keep goorm blue (`#2a72e5`) for product moments — the product's own primary action and selected states
- Build cards from `#f7f7f7`, a 1px `#e1e1e1` hairline, 8px radius and 24px padding
- Draw outline edges as a 1px inset `#c6c6c6` shadow
- Set everything in Pretendard; use 500 for action labels and 600 for navigation
- Keep 8px corners on actions, cards, menus and fields
- Name the company in lowercase as goorm, per its brand guideline

### Don't
- Don't put drop shadows on cards; only menus and small floating controls are raised
- Don't make goorm blue the default action colour on marketing pages — the captured actions are dark
- Don't substitute 구름 산스 for Pretendard in product UI; the captured pages do not use it
- Don't reuse the old documentation-only semantic tints as if the product used them
- Don't invent hover colours for controls that recorded none
- Don't capitalise or restyle the goorm wordmark — the guideline forbids changing its weight, proportion, colour, case or font

## Voice & Tone

goorm's voice is **encouraging, plain-spoken and growth-oriented** — a company that lowers the barrier to building software rather than gatekeeping it. The marketing site pairs an ambitious English line, "Superpowers, for everyone", with plain Korean about enterprise AX, and the blog signs off with "ANYONE CAN DEVELOP". Copy treats the reader as a capable learner or a business partner, not a lead to pressure.

| Context | Tone |
|---|---|
| Hero | Aspirational but grounded. "Superpowers, for everyone." |
| Business copy | Concrete and partnership-framed. "기업의 AX 전환을 기술과 실행으로 뒷받침하고, 비즈니스의 성공을 이끄는 AX 생태계를 만들어갑니다." |
| Navigation | Plain nouns. "비즈니스", "리소스", "채용", "공지사항". |
| CTAs | Direct and low-pressure. "도입 문의하기". |
| Education | Inclusive. "모두를 위한 맞춤형 IT교육". |
| Brand writing | Reasoned and first-person-plural; the Arkain symbol post explains each decision. |

**Voice samples (verbatim, opened 2026-09-30):**
- "goorm - Superpowers, for everyone" — www.goorm.io page title.
- "구름EDU - 모두를 위한 맞춤형 IT교육" — goormEDU page title.
- "goorm은 단일 단어이며, 항상 소문자로 표기합니다." — brand guideline.
- "ANYONE CAN DEVELOP" — official blog sign-off.

**Forbidden register**: gatekeeping developer-speak, fear-based "you'll fall behind" urgency, unexplained jargon, exclamation-heavy hype.

## Agent Prompt Guide

### Quick Color Reference
- Text and dark action fill: `#262626`; labels on it: `#ffffff`
- Secondary text: `#4c4c4c`, `#5d5d5d`, `#393939`
- goorm blue (product moments): `#2a72e5`
- goormEDU links: `#0957c8`; current service and account hover: `#0043b3`; header hover `#1d6ce0`
- Canvas `#ffffff`; cards `#f7f7f7`; hairline `#e1e1e1`; inset stroke `#c6c6c6`
- goormEDU ink `#2b2d36`; course copy `#3e404c`

### Example Component Prompts
- "Create a marketing header action: `#262626` background, white 14px / 500 Pretendard label with -0.1px tracking, 8px radius, 0 16px padding, 40px tall."
- "Design a customer story card: `#f7f7f7` background, 1px solid `#e1e1e1`, 8px radius, 24px padding, no shadow; title 20px / 500 `#262626`, description 16px / 500 `#5d5d5d`."
- "Build an outline action: white background, `#262626` 16px / 500 label, 8px radius, 48px tall, edge drawn as `rgb(198, 198, 198) 0px 0px 0px 1px inset`."
- "Make goormEDU course tabs: 16px Pretendard Variable, unselected `#4c4c4c` at 400, selected `#2a72e5` at 500 with a 2px `#2a72e5` bottom border, 50px tall."

### Iteration Guide
1. Pretendard everywhere; 600 for navigation, 500 for actions and the display headline
2. Dark `#262626` actions on marketing pages; blue only for product moments
3. Flat cards — fill and hairline, no shadow
4. 8px corners throughout
5. Inset strokes for outlined edges; shadows only for floating menus

---

## Governance

### Known Gaps

- **Contrast, `header-nav-button`.** Text `#262626` on `#00000000` measures 1.39:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `edu-header-link`.** Text `#2b2d36` on `#00000000` measures 1.53:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `edu-course-tab`.** Text `#4c4c4c` on `#00000000` measures 2.45:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `family-bar-link`.** Text `#262626` on `#00000000` measures 1.39:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `family-bar-account-link`.** Text `#5d5d5d` on `#00000000` measures 3.19:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
