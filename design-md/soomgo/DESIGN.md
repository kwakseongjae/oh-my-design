---
id: soomgo
name: Soomgo
country: KR
category: consumer-tech
homepage: "https://soomgo.com"
primary_color: "#693bf2"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=soomgo.com&sz=128"
verified: "2026-06-09"
added: "2026-06-09"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-09"
  components_harvested: true
  colors:
    primary: "#693bf2"
    canvas: "#ffffff"
    heading: "#293341"
    heading-deep: "#1c242f"
    body: "#6a7685"
    muted: "#aab4bf"
    surface: "#f6f7f9"
    surface-gray: "#eff1f5"
    hairline: "#e0e5eb"
    border: "#c7ced6"
    rating: "#ffc300"
    info: "#0087ff"
    ink: "#000000"
    on-primary: "#ffffff"
  typography:
    family: { sans: "Pretendard", fallback: "Apple SD Gothic Neo" }
    section:    { size: 24, weight: 700, lineHeight: 1.33, tracking: 0, use: "Section headline, page title" }
    subheading: { size: 18, weight: 700, lineHeight: 1.44, use: "Card title, sub-section head" }
    title:      { size: 16, weight: 700, lineHeight: 1.50, use: "List item title, h2 default" }
    body:       { size: 16, weight: 400, lineHeight: 1.50, use: "Standard reading text, links" }
    label:      { size: 14, weight: 500, lineHeight: 1.43, use: "Button label, nav label, chips" }
    caption:    { size: 13, weight: 400, lineHeight: 1.54, use: "Metadata, helper text, prices" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 6, md: 8, lg: 16, full: 9999 }
  shadow:
    card: "rgba(0,0,0,0.06) 0px 2px 8px"
    floating: "rgba(0,0,0,0.12) 0px 4px 16px"
  components:
    button-primary: { type: button, bg: "#693bf2", fg: "#ffffff", radius: "6px", padding: "7px 14px", font: "14px / 500", use: "Primary CTA — 고수가입 / 견적 요청, the only purple fill on the page" }
    button-secondary: { type: button, bg: "#f6f7f9", fg: "#000000", radius: "15px", padding: "12px", font: "16px / 400", use: "Soft neutral action — AI 견적 요청, surface-filled" }
    button-ghost: { type: button, bg: "#eff1f5", fg: "#1c242f", radius: "8px", padding: "8px 12px", font: "16px / 400", use: "Tertiary action — 더보기 / load-more on cards" }
    category-tab: { type: tab, bg: "#293341", fg: "#000000", radius: "16px", padding: "8px 12px", font: "16px / 400", active: "Filled dark pill #293341, inactive surface #f6f7f9", use: "Service category navigation pills" }
    region-chip: { type: badge, bg: "#f6f7f9", fg: "#293341", radius: "36px", padding: "0 16px", font: "16px / 400", use: "Region/location filter chip — 서울, fully rounded" }
    rating-badge: { type: badge, fg: "#293341", radius: "6px", font: "13px / 400", use: "Star rating, #ffc300 star glyph + count" }
    search-input: { type: input, bg: "#f6f7f9", fg: "#293341", radius: "8px", padding: "12px", font: "16px / 400", use: "Quote/search field, placeholder #aab4bf" }
    pro-card: { type: card, bg: "#ffffff", fg: "#293341", radius: "8px", use: "Pro listing card, 1px #e0e5eb hairline, card shadow on hover" }
    info-link: { type: badge, fg: "#0087ff", font: "14px / 400", use: "Inline informational link / status accent" }
---

# Design System Inspiration of Soomgo

## 1. Visual Theme & Atmosphere

Soomgo (숨고) is Korea's leading local-service and pro marketplace — the place where a homeowner finds a moving-cleaning crew, a tutor, a tax accountant, or a wedding photographer — and its design reflects exactly that mandate: get a stranger to trust a stranger, fast, on a phone. The interface opens on a clean white canvas (`#ffffff`) with ink-navy text (`#293341`) and a single, decisive purple (`#693bf2`) that does all the brand work. That purple is rationed with discipline: across the entire live homepage it appears on only the primary CTA pills (고수가입, 견적 요청). Everything else is neutral. The result feels trustworthy and utilitarian rather than playful — a marketplace that wants you to act, not to admire it.

The atmosphere is "warm utility." Soomgo does not chase the gradient-heavy, illustration-rich look of consumer lifestyle apps; instead it leans on a tight neutral system — a dark ink (`#293341`), a deeper near-black ink (`#1c242f`), a mid slate (`#6a7685`), and two whisper-soft surface grays (`#f6f7f9`, `#eff1f5`) — to organize dense, scannable lists of pros, categories, and quotes. The one warm spark in the system is a saturated rating yellow (`#ffc300`) that lights up review stars, the social-proof currency of a marketplace. Geometry is friendly: pills and chips are heavily rounded (16px to fully circular `36px`), while content cards stay calmer at 8px. The overall read is approachable, dense, and conversion-focused.

There are no heavy drop shadows. Elevation is almost flat — a barely-there `rgba(0,0,0,0.06)` card shadow at most — so the page reads as a continuous, honest surface of options rather than a stack of floating panels. This flatness is intentional for a trust product: nothing is hidden, everything is laid out.

**Key Characteristics:**
- One disciplined brand purple (`#693bf2`) reserved almost exclusively for primary CTAs
- Pretendard-family Korean-optimized sans across the whole UI, 400/500/700 weights
- Ink-navy text (`#293341`) and deeper ink (`#1c242f`) instead of pure black for body and headings
- A two-tier soft-gray surface system (`#f6f7f9`, `#eff1f5`) for chips, inputs, and tertiary buttons
- Heavily rounded pills/chips (16px to fully circular) against calmer 8px content cards
- Rating yellow (`#ffc300`) as the single warm accent — social proof made visible
- Near-flat elevation; subtle `rgba(0,0,0,0.06)` shadows only
- Dense, list-first layouts optimized for fast scanning and quote requests

## 2. Color Palette & Roles

### Primary
- **Soomgo Purple** (`#693bf2`): The single brand color. Primary CTA fills (고수가입, 견적 요청), active brand moments. A bright blue-violet, saturated and confident, rationed to high-intent actions.
- **Pure White** (`#ffffff`): Page background, card surfaces, nav bar, text on purple.

### Text / Ink
- **Ink Navy** (`#293341`): Default body and heading text, nav labels. A dark blue-gray that reads softer and warmer than black.
- **Ink Deep** (`#1c242f`): Stronger emphasis text, load-more labels, near-black ink for high-contrast titles.
- **Body Slate** (`#6a7685`): Secondary text, descriptions, metadata.
- **Muted Gray** (`#aab4bf`): Placeholder text, disabled labels, lowest-priority captions.
- **Ink Black** (`#000000`): Occasional maximal-contrast labels on neutral buttons and category pills.

### Surfaces & Borders
- **Surface** (`#f6f7f9`): Soft-gray fill for inputs, region chips, secondary buttons.
- **Surface Gray** (`#eff1f5`): Slightly deeper gray for ghost/tertiary buttons and section dividers.
- **Hairline** (`#e0e5eb`): Default card and list border.
- **Border** (`#c7ced6`): Stronger divider / input border on focus-adjacent elements.

### Accents
- **Rating Yellow** (`#ffc300`): Review stars and rating highlights — the one warm color, the marketplace's trust signal.
- **Info Blue** (`#0087ff`): Inline informational links and status accents.

## 3. Typography Rules

### Font Family
- **Primary**: `Pretendard` (the live computed `font-family` resolves through a brand-aliased face), with fallback `Apple SD Gothic Neo`, then system sans. Pretendard is the de-facto Korean product sans — optimized for Hangul + Latin + numerals at small sizes.
- **Weights in use**: 400 (body), 500 (labels/buttons), 700 (titles/headings). No light display weights.

### Hierarchy

| Role | Size | Weight | Line Height | Use |
|------|------|--------|-------------|-----|
| Section | 24px | 700 | 1.33 | Page / section headlines |
| Subheading | 18px | 700 | 1.44 | Card titles, sub-sections |
| Title | 16px | 700 | 1.50 | List-item titles (default h2) |
| Body | 16px | 400 | 1.50 | Reading text, links, descriptions |
| Label | 14px | 500 | 1.43 | Buttons, nav labels, chips |
| Caption | 13px | 400 | 1.54 | Metadata, prices, helper text |

### Principles
- **Weight, not size, carries hierarchy.** Soomgo distinguishes a title from body text mostly by jumping 400 → 700 at the same 16px, keeping list rows compact and scannable.
- **Generous line-height for Hangul.** 1.50 line-height at body keeps Korean glyphs legible in dense lists; nothing is set tight.
- **No negative tracking.** Letter-spacing stays `normal` everywhere — Korean type does not benefit from the tight Latin tracking other brands use.
- **Three weights only.** 400 / 500 / 700. The 500 weight is the button/label voice; 700 is reserved for emphasis and titles.

## 4. Component Stylings

### Buttons
**Primary (purple)** — `#693bf2` bg, `#ffffff` text, 6px radius, 7px 14px padding, 14px / weight 500. The only purple fill on the page; reserved for 고수가입 / 견적 요청.
**Secondary (soft neutral)** — `#f6f7f9` bg, `#000000` text, 15px radius, 12px padding, 16px / 400. Used for AI 견적 요청 and other soft primary-adjacent actions.
**Ghost (tertiary)** — `#eff1f5` bg, `#1c242f` text, 8px radius, 8px 12px padding, 16px / 400. Load-more and inline secondary actions.

### Category Tabs / Pills
- Service-category navigation renders as pills, 16px radius, 8px 12px padding.
- Inactive: `#f6f7f9` surface fill, `#293341` text. **Active: filled dark pill `#293341` with light text.**
- Region/location filter chips are fully rounded (`36px` radius), `#f6f7f9` fill, `#293341` text.

### Cards & Containers
- Background: `#ffffff`
- Border: `1px solid #e0e5eb` hairline
- Radius: 8px
- Shadow (resting): none to `rgba(0,0,0,0.06) 0px 2px 8px`
- Shadow (hover/floating): `rgba(0,0,0,0.12) 0px 4px 16px`

### Inputs
- Background: `#f6f7f9`
- Radius: 8px
- Padding: 12px
- Text: `#293341`, placeholder `#aab4bf`
- Font: 16px / 400

### Badges
- **Rating badge**: `#ffc300` star glyph + count, `#293341` text, 13px.
- **Info link**: `#0087ff` text, 14px, inline.

### Navigation
- White (`#ffffff`) horizontal top bar, ink-navy (`#293341`) labels at 16px / 400.
- Brand logotype left, purple primary CTA (고수가입) right.

**Tier 1 sources:** https://soomgo.com, https://blog.soomgo.com

## 5. Layout Principles

### Spacing System
- Base unit: 4px, with an 8px working rhythm (4 / 8 / 12 / 16 / 24 / 32 / 48 / 64).
- Dense at the small end for list rows and chip clusters; generous at section breaks.

### Grid & Container
- Mobile-first single column; the homepage is a vertical stack of scannable sections (category grid, region chips, pro cards, quote CTA).
- On desktop, content centers in a constrained column with multi-column category grids and 2–3 column pro-card rows.
- Lists dominate: the layout is engineered for scrolling through many comparable options.

### Whitespace Philosophy
- **Scannable density.** Soomgo favors tight, comparable rows over airy hero space — the job is comparison and selection, not contemplation.
- **Neutral fields, colored actions.** Backgrounds stay neutral so the rationed purple CTA always wins the eye.
- **Section rhythm via gray.** Soft-gray surfaces (`#f6f7f9` / `#eff1f5`) separate sections instead of heavy rules or shadows.

### Border Radius Scale
- Small (6px): primary buttons.
- Standard (8px): cards, inputs, ghost buttons.
- Large (16px): category pills.
- Full (9999 / 36px): region chips, avatars — fully circular.

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (0) | No shadow | Page background, list rows, chips |
| Card (1) | `rgba(0,0,0,0.06) 0px 2px 8px` | Pro cards, surfaced panels |
| Floating (2) | `rgba(0,0,0,0.12) 0px 4px 16px` | Hover cards, dropdowns, bottom sheets |

**Shadow Philosophy**: Soomgo is deliberately flat. Elevation is communicated mostly through surface color (`#ffffff` cards on `#f6f7f9` sections) and hairline borders (`#e0e5eb`) rather than shadow. The rare shadow is a soft, neutral `rgba(0,0,0,0.06)` — just enough to lift an interactive card without implying a deep z-stack. For a trust marketplace, flatness reads as transparency: nothing is hidden behind dramatic depth.

## 7. Motion notes

Motion is functional and restrained — content reveals, chip selection, and sheet transitions in the 150–250ms range with standard ease-out curves. No bounce, no decorative parallax. The product prioritizes responsiveness on mobile networks over delight animation.

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | Single column, full-width cards, sticky bottom CTA |
| Tablet | 768–1024px | 2-column category/pro grids |
| Desktop | >1024px | Centered constrained column, multi-column grids |

### Touch Targets
- CTA pills sized for thumb taps; chips at 36px+ height.
- Category and region pills have generous horizontal padding for tap comfort.

### Collapsing Strategy
- Multi-column pro grids collapse to single column on mobile.
- Top-nav CTAs persist; secondary nav collapses into menus.
- Region/category chip rows become horizontally scrollable strips.

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Soomgo Purple (`#693bf2`)
- Background: White (`#ffffff`)
- Heading / body text: Ink Navy (`#293341`)
- Strong emphasis: Ink Deep (`#1c242f`)
- Secondary text: Body Slate (`#6a7685`)
- Placeholder / muted: Muted Gray (`#aab4bf`)
- Surface fill: `#f6f7f9` / `#eff1f5`
- Border: Hairline (`#e0e5eb`)
- Rating: Yellow (`#ffc300`)
- Info link: Blue (`#0087ff`)

### Example Component Prompts
- "Primary CTA button: `#693bf2` background, white 14px/500 label, 6px radius, 7px 14px padding. The only purple fill on the screen."
- "Pro card: white background, 1px solid `#e0e5eb` border, 8px radius, optional `rgba(0,0,0,0.06) 0px 2px 8px` shadow on hover. Title 16px/700 `#293341`, body 16px/400 `#6a7685`, rating row with `#ffc300` stars."
- "Category pill: 16px radius, 8px 12px padding. Inactive `#f6f7f9` fill / `#293341` text; active filled `#293341` dark pill with light text."
- "Region chip: fully rounded (36px radius), `#f6f7f9` fill, `#293341` text, 16px/400."
- "Search input: `#f6f7f9` background, 8px radius, 12px padding, `#293341` text, `#aab4bf` placeholder."

### Iteration Guide
1. Keep purple (`#693bf2`) rationed to primary CTAs only — neutrals do everything else.
2. Use `#293341` ink-navy for text, never pure black for body.
3. Carry hierarchy with weight (400 → 700) at constant size before increasing size.
4. Stay flat: prefer surface color + hairline borders over shadows.
5. Round pills heavily (16px–full) but keep content cards at 8px.
6. Reserve `#ffc300` strictly for ratings.

## 10. Voice & Tone

Soomgo's voice is direct, helpful, and action-oriented — the tone of a competent local guide who wants to connect you with the right pro quickly. Microcopy is imperative and concrete: 견적 요청 (request a quote), 고수가입 (sign up as a pro), 더보기 (see more). It avoids hype and decoration; the value proposition is the match itself, not adjectives about it.

| Context | Tone |
|---|---|
| CTAs | Direct imperatives — "견적 요청", "고수찾기", "더보기" |
| Category labels | Plain nouns, the user's own words for the service |
| Pro listings | Factual: name, rating, region, price range |
| Empty / helper text | Encouraging, practical, next-step oriented |

## 11. Brand Narrative

Soomgo (숨고, "숨은 고수" — "hidden masters/experts") is operated by Braincommerce and launched in Korea in 2014 as a request-for-quote marketplace connecting consumers with local service professionals across hundreds of categories — cleaning, moving, lessons, design, legal/tax, events, and more. The name encodes the core promise: there are skilled pros ("고수") hidden in every neighborhood, and Soomgo surfaces them. The product flow is built around the quote request: a customer describes a need, multiple vetted pros respond with quotes, and the customer compares and chooses. The design system — neutral, dense, trust-forward, with rationed purple and visible rating stars — is a direct expression of that comparison-and-trust workflow.

## 12. Principles

1. **Trust is the product.** Ratings, reviews, and clear pro profiles drive every layout decision; the rating yellow is the one rationed warm accent.
2. **Action over admiration.** Purple is spent only on CTAs; the UI is built to get users to request a quote, not to dwell.
3. **Density is respect.** Showing many comparable pros in scannable rows respects a user who wants to choose, not be marketed to.
4. **Neutral by default, colored with intent.** A disciplined neutral system makes the single brand action unmistakable.
5. **Flat and honest.** Minimal shadow signals transparency — nothing hidden in a trust marketplace.

## 13. Personas

*Fictional archetypes informed by Soomgo's publicly observable user segments (homeowners seeking services, and independent pros), not real individuals.*

**Jiyeong, 34, Seoul.** Just signed a new apartment lease and needs move-in cleaning by the weekend. Opens Soomgo on her phone, taps a category, describes the unit, and within hours compares quotes by price and star rating. Chooses the highest-rated pro within budget. Trusts the stars more than any marketing copy.

**Minho, 45, Busan.** An independent interior-cleaning pro. Uses Soomgo to receive quote requests and grow his client base. Cares that his profile, reviews, and response speed are clearly presented, because that is what wins jobs against competitors on the same list.

**Seoyeon, 29, Seongnam.** Planning a small wedding and sourcing a photographer and a makeup artist. Values being able to line up several pros side by side, read recent reviews, and message before committing.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no quotes yet)** | White canvas, ink-navy (`#293341`) single line + a purple CTA to request a quote. Practical, next-step framing. |
| **Loading (list)** | Neutral skeleton rows in `#eff1f5` at final dimensions; no spinner blocking the list. |
| **Default (pro card)** | White card, hairline `#e0e5eb` border, name 16px/700, rating row with `#ffc300` stars. |
| **Selected (chip/tab)** | Filled dark pill `#293341` with light text replacing the inactive `#f6f7f9` surface. |
| **Disabled** | Muted gray (`#aab4bf`) text on `#f6f7f9` surface; purple actions drop to a faded fill. |
| **Success (quote sent)** | Brief inline confirmation in ink-navy; the pro list updates with response status. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `fast` | 150ms | Chip/tab selection, hover, focus |
| `standard` | 200–250ms | Sheet, dropdown, card reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Most transitions |
| `ease-out` | `cubic-bezier(0, 0, 0.2, 1)` | Sheets and reveals arriving |

**Signature motions.**
1. **Chip/tab selection** — instant fill swap from `#f6f7f9` to dark `#293341`, ~150ms, no bounce.
2. **Bottom sheet (mobile quote flow)** — slides up with `ease-out` at ~250ms.
3. **Card hover** — soft shadow lift from flat to `rgba(0,0,0,0.06)`, ~150ms.
4. **Reduce motion** — under `prefers-reduced-motion`, transitions collapse to instant; the product remains fully usable.

## 16. Do's and Don'ts

### Do
- Ration `#693bf2` purple to primary CTAs only — let neutrals carry the rest.
- Use ink-navy `#293341` for text; reserve `#1c242f` for strong emphasis.
- Carry hierarchy with weight (400 → 700) at constant size in dense lists.
- Keep the page flat — surface color (`#f6f7f9` / `#eff1f5`) and hairlines (`#e0e5eb`) over shadows.
- Round pills heavily (16px to full) while keeping content cards at 8px.
- Use `#ffc300` exclusively for rating stars — it is the trust signal.
- Set generous line-height (1.5) for Hangul legibility in lists.

### Don't
- Don't spread purple across decorative or non-CTA surfaces — it dilutes the action signal.
- Don't use pure black (`#000000`) for body text — use `#293341` ink-navy.
- Don't add heavy drop shadows or deep z-stacks — flatness signals transparency.
- Don't tighten letter-spacing on Korean text — keep tracking normal.
- Don't repurpose rating yellow (`#ffc300`) for non-rating accents.
- Don't sacrifice list density for hero whitespace — comparison is the job.
