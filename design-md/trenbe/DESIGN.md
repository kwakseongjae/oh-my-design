---
id: trenbe
name: "Trenbe"
country: KR
category: ecommerce
homepage: "https://www.trenbe.com"
primary_color: "#7620F6"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=trenbe.com&sz=256"
verified: "2026-06-03"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#7620F6"
    primary-ui: "#7351EC"
    marketing-cta: "#7618F1"
    black: "#000000"
    canvas: "#FFFFFF"
    text01: "#2F2E2B"
    text02: "#4F4E4B"
    text03: "#6F6E6B"
    border: "#CFCECB"
    surface: "#F7F6F5"
    secondary: "#EC5151"
    success: "#1EB789"
    caution: "#FFAB1E"
    disabled-text: "#AFAEAB"
  typography:
    family: { sans: "Pretendard", mono: "Pretendard" }
    display01:  { size: 32, weight: 700, lineHeight: 1.31, use: "Largest display headline" }
    display02:  { size: 24, weight: 700, lineHeight: 1.33, use: "Secondary display" }
    title:      { size: 18, weight: 600, lineHeight: 1.44, use: "Section titles" }
    headline:   { size: 16, weight: 500, lineHeight: 1.50, use: "Subheadings" }
    body:       { size: 14, weight: 400, lineHeight: 1.57, use: "Body text" }
    caption:    { size: 12, weight: 400, lineHeight: 1.67, use: "Captions, helper text" }
    cta:        { size: 18, weight: 600, lineHeight: 1.40, use: "Marketing CTA label" }
  spacing: { xs: 2, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 2, md: 4, lg: 8, full: 9999 }
  shadow:
    scrim: "rgba(0,0,0,0.5)"
  components:
    button-primary: { type: button, bg: "#000000", fg: "#FFFFFF", radius: "2px", padding: "6px 12px", font: "13px / 400", use: "Primary black CTA in shopping UI" }
    button-ghost: { type: button, bg: "#FFFFFF", fg: "#000000", radius: "2px", padding: "6px 12px", font: "13px / 400", use: "Default outlined action" }
    button-disabled: { type: button, bg: "#FFFFFF", fg: "#AFAEAB", radius: "2px", use: "Disabled action" }
    button-marketing: { type: button, bg: "#7618F1", fg: "#FFFFFF", radius: "4px", padding: "0 24px", font: "18px / 600", use: "Brand purple CTA on marketing surfaces" }
    input-default: { type: input, bg: "#FFFFFF", fg: "#6F6E6B", radius: "0px", padding: "6px 12px", font: "13px / 400", use: "Default text field" }
    badge-primary: { type: badge, bg: "#000000", fg: "#FFFFFF", radius: "0px", padding: "0.2em 0.6em 0.3em", use: "Primary black label" }
    badge-sale: { type: badge, bg: "#EC5151", fg: "#FFFFFF", radius: "4px", use: "Sale / accent badge" }
    card: { type: card, bg: "#FFFFFF", radius: "8px", use: "Product card, hairline border" }
  components_harvested: true
---

# Trenbe

Global No.1 luxury shopping platform from Korea, combining tech-driven authentication and real-time global price scanning with a purple-accented monochrome design language.

## 1. Visual Theme & Atmosphere

Trenbe's interface balances the accessibility of mass-market ecommerce with the calm restraint expected of a luxury goods destination. The canvas is predominantly white with a warm near-black text system and deliberate use of Trenbe's signature vivid purple (#7620F6) as the sole accent color, signaling trust, exclusivity, and forward-facing technology. Product photography is given maximum breathing room within a tight typographic grid; decorative ornamentation is avoided in favor of clean rule lines and generous whitespace. On marketing surfaces the purple can appear in gradients and saturated CTAs, while within the shopping UI it is reserved for interactive states, labels, and primary links — preventing visual noise against high-resolution luxury imagery. The result feels simultaneously confident and approachable: global in aspiration, Korean in precision.

## 2. Color Palette & Roles

- **Purple (Primary):** `#7620F6` — brand primary; maps to `--primary` and `--purple` across all Trenbe sub-domains; used for interactive labels, uiPrimary text, hover states on marketing CTAs
- **Purple 500 (UI Primary):** `#7351EC` — semantic `uiPrimary` / `textPrimary` token in app DS v4; active focus rings, highlight text
- **Black:** `#000000` — primary action button background (btn-primary, btn-black); high-emphasis foreground
- **White:** `#FFFFFF` — page canvas, card backgrounds, field01 input surface; theme-color meta
- **Gray 1000 (text01):** `#2F2E2B` — body text, headings, highest-contrast foreground
- **Gray 900 (text02):** `#4F4E4B` — secondary body text, descriptions
- **Gray 800 (text03):** `#6F6E6B` — tertiary text, subheadings
- **Gray 400 (border):** `#CFCECB` — hairline dividers, card borders
- **Gray 100 (surface):** `#F7F6F5` — page background, input field02 fill
- **Red 500 (Secondary):** `#EC5151` — semantic `uiSecondary` / `textSecondary`; sale badges, error states, price emphasis
- **Green 500 (Success):** `#1EB789` — success states, confirmation labels
- **Yellow 500 (Caution):** `#FFAB1E` — caution / promotional badges

## 3. Typography Rules

- **Primary font:** Pretendard (weights 100–900 loaded via subset WOFF2), fallback: "Apple SD Gothic Neo", "Helvetica Neue", sans-serif
- **Feature settings:** `"ss03"`, `"cv01"` enabled on mobile — applied via `@media (max-width: 768px)` on `#app`
- **Type scale (v4 rem-based, base 10px root):**
  - overline: 1.0rem / line-height 1.8rem
  - caption: 1.2rem / 2.0rem
  - body: 1.4rem / 2.2rem
  - headline: 1.6rem / 2.4rem
  - title: 1.8rem / 2.6rem
  - display03: 2.0rem / 2.8rem
  - display02: 2.4rem / 3.2rem
  - display01: 3.2rem / 4.2rem
- **Legacy CSS (global fallback):** body font-size 13px, line-height 1.2, color `#444444`
- **Weight usage:** 400 for body, 500 for subheadings, 700 for CTAs and prices, 600 for section titles

## 4. Component Stylings

### Buttons

**Primary (Black CTA)**
- Background: `#000000`
- Text: `#FFFFFF`
- Border: 1px solid `#000000`
- Radius: 2px
- Padding: 6px 12px
- Font: 13px / 400

**Default (Ghost)**
- Background: `#FFFFFF`
- Text: `#000000`
- Border: 1px solid `#88888E`
- Radius: 2px
- Padding: 6px 12px
- Font: 13px / 400

**Disabled**
- Background: `#FFFFFF`
- Text: `#AFAEAB`
- Border: 1px solid `#CFCECB`
- Radius: 2px

**Marketing CTA (Brand Purple)**
- Background: `#7618F1`
- Text: `#FFFFFF`
- Border: none
- Radius: 4px
- Height: 55px
- Font: 18px / 600

### Form Fields

**Default Input**
- Background: `#FFFFFF`
- Text: `#555555`
- Border: 1px solid `#CCCCCC`
- Radius: 0px
- Height: 29px
- Padding: 6px 12px
- Font: 13px / 400

**Focus Input**
- Background: `#FFFFFF`
- Text: `#555555`
- Border: 1px solid `#66AFE9`

### Badges / Labels

**Primary Badge (Black)**
- Background: `#000000`
- Text: `#FFFFFF`
- Radius: 0px
- Padding: 0.2em 0.6em 0.3em

**Sale / Accent Badge (Red)**
- Background: `#EC5151`
- Text: `#FFFFFF`
- Radius: 4px

---
**Verified:** 2026-06-03
**Tier 1 sources:** https://www.trenbe.com (HTML + theme-color meta), https://assets.trenbe.com/20260602.151834.7400ea3/main.696cafc00c26f4e3cdcd.js (embedded CSS + design token object), https://www.trenbecorp.com (corp CSS: common.css + main.css), https://trenbe.github.io (tech blog CSS: --primary: #7620F6), https://assets.trenbe.com/font/pretendard/pretendard-subset.css (confirmed Pretendard font)
**Tier 2 sources:** getdesign.md/trenbe — NOT LISTED (no data). refero — no result for Trenbe.
**Conflicts unresolved:** Two purple primary values co-exist in the codebase: #7620F6 (older token, used on tech blog and trenbecorp.com as `--primary`) and #7351EC (newer v4 DS token `purple500` / `uiPrimary`). The tech blog and corporate site both use #7620F6 as `--primary`, which is treated as the canonical brand primary here. The v4 DS purple500 (#7351EC) is the current interactive UI token in the product app.

## 5. Layout Principles

- Single-column mobile-first grid; horizontal padding: 20px mobile, 41px tablet, 48px desktop
- Vertical rhythm follows spacing token scale (0.2rem–6.4rem in 8-step increments)
- Product grid: 2-column on mobile, 3–4 column on tablet/desktop, with consistent gutter matching horizontal padding
- Maximum content width: 1200px (pc breakpoint), centered with auto margins
- Cards have 8px radius (main borderRadius token), hairline 1px `#CFCECB` borders
- zIndex layers: header 1399, modal 1500, ProductCard 1

## 6. Depth & Elevation

- Minimal shadow philosophy: UI avoids drop-shadows on cards; separation achieved via border `#CFCECB` and background-color contrast (`#F7F6F5` vs `#FFFFFF`)
- Modals use `rgba(0,0,0,0.5)` scrim backdrop (alpha50 token = `#2F2E2B80`)
- Sticky header separates with a subtle bottom border, no shadow
- Drawers and bottom sheets slide in with `0.325s ease-out` without elevation shadow

## 7. Do's and Don'ts

### Do
- Use `#7620F6` (or `#7351EC` in v4 DS contexts) exclusively as the brand accent; do not introduce other accent hues
- Keep primary CTAs black (#000) on white surfaces inside the product UI to respect luxury product photography
- Reserve the purple CTA only for high-emphasis marketing surfaces (landing pages, onboarding)
- Use Pretendard for all Korean and Latin text; ensure feature settings `"ss03"` `"cv01"` are active on mobile
- Apply 8px radius to product cards; 4px to chips, badges, and secondary UI elements
- Use red (#EC5151) exclusively for sale prices, error states, and count-down labels
- Respect the 20px mobile / 48px desktop horizontal padding consistently

### Don't
- Don't use the purple as a button background inside the main shopping UI — the primary action is always black
- Don't add gradients or decorative patterns behind product images
- Don't reduce line-height below 1.5× for body text; the Pretendard variable-weight range demands adequate leading
- Don't mix the legacy 13px/1.2 line-height scale with the v4 rem scale in new components
- Don't use border-radius above 8px for cards or 4px for chips in the current DS

## 8. Responsive Behavior

- **Mobile (≤480px):** 20px horizontal padding; 2-column product grid; bottom navigation bar replaces desktop header links; font sizes follow v4 rem scale with `font-feature-settings: "ss03","cv01"`
- **Tablet mini (480–768px):** 41px horizontal padding; 3-column grid; header retains logo + search; secondary nav collapsed
- **Tablet big (768–1024px):** full desktop header; 3–4 column grid; xPadding 41px
- **Desktop (1024–1200px):** 48px horizontal padding; max-content 1200px; full navigation visible
- **Large desktop (≥1200px):** content remains capped at 1200px; outer gutters expand

## 9. Agent Prompt Guide

When generating Trenbe UI:
- Use white (`#FFFFFF`) canvas with warm near-black body text (`#2F2E2B`)
- Primary interactive element: black button (bg `#000`, text `#fff`, radius 2px)
- Use Pretendard font; specify weights 400 / 500 / 700
- Accent color: `#7620F6` for labels, links, and focus indicators only
- Red (`#EC5151`) for price reductions and error messages
- Green (`#1EB789`) for success confirmations
- Card containers: white bg, 1px `#CFCECB` border, 8px radius
- Do not add gradients, shadows, or decorative flourishes behind product images
- Layout: 20px mobile gutter, 48px desktop gutter, max-width 1200px

## 10. Voice & Tone

**Three defining adjectives:** Trustworthy, Direct, Savvy

| Do | Don't |
|----|-------|
| Use clear, benefit-forward language: "verified by our experts" | Use vague luxury clichés: "elevate your lifestyle" |
| Be specific about tech advantages: "AI price matching across 10M items" | Use jargon: "synergize your fashion portfolio" |
| Acknowledge the user's desire directly: "가지고 싶은 것, 가지고 싶을 때" (what you want, when you want it) | Be passive or hedged: "you might consider exploring..." |
| Frame authentication as protection, not gatekeeping | Shame or intimidate around budget |

**Voice samples (illustrative):**
- "전세계 명품을 한 눈에. 최저가 스캐너로 가장 빠르게." — All the world's luxury, at a glance. Fastest with our lowest-price scanner. *(illustrative tone sample)*
- "가지고 싶은 것, 가지고 싶을 때, 가질 수 있도록." — What you want, when you want it, yours to have. *(illustrative brand line)*
- "300% 보상 정책으로 안심하고 쇼핑하세요." — Shop with peace of mind backed by our 300% compensation policy. *(illustrative trust copy)*

## 11. Brand Narrative

Trenbe was founded in November 2016 in Seoul, South Korea, by CEO Park Kyung-hoon with a clear thesis: luxury shopping online did not have to mean counterfeit risk, opaque pricing, or limited selection. The name "Trenbe" blends "trend" and "be," signaling the brand's aspiration for customers to inhabit the trends they love rather than merely observe them. From the start, the company invested in physical infrastructure — overseas offices and fulfillment centers in the UK, US, France, Germany, Italy, and Japan — so that its platform could offer direct buying, direct inspection, and direct shipping rather than relying on third-party resellers.

The company describes itself as a "luxury tech-commerce" business rather than a simple marketplace. Its proprietary Trenbot AI scans roughly 10 million products in real time across global department stores, brand official sites, and outlets to surface the lowest available price. The Korean Authentic Center, initially an in-house inspection team of over 40 expert authenticators, was later spun off as an independent subsidiary to reinforce the credibility of Trenbe's authentication signal. In 2022 Trenbe raised a KRW 35 billion Series D round, and the platform's MAU reached 4.5 million by late 2020. By Q1 2026 the pre-owned luxury segment contributed to its first operating profit of KRW 300 million.

Trenbe's corporate manifesto — "We change the rules. We change the commerce." — anchors its design and product philosophy. The purple accent in its design system represents this disruption: vivid and technologically forward in a category traditionally expressed through ivory and gold. Yet the dominant use of black-and-white in the shopping UI maintains the respectful restraint that luxury buyers expect when their attention is focused on the products themselves.

## 12. Principles

1. **Trust through transparency** — Every price displayed shows where it came from. Every product that passes through Trenbe's fulfillment is inspected and logged. *UI implication:* Inspection status, price history, and authentication certificates appear prominently on product detail pages without requiring the user to dig for them.

2. **Desire, not delay** — The user's intent is to acquire something desirable; friction between intent and checkout must be minimized. *UI implication:* Add-to-cart and purchase flows are surfaced within one thumb's reach on mobile; payment providers including Naver Pay, Apple Pay, and card-based installments are pre-integrated.

3. **Global reach, local precision** — Trenbe operates in seven countries but the experience is built for Korean consumers first, then localized. *UI implication:* Korean-language copy is the primary string; KRW pricing is canonical; Pretendard is loaded as a subset for performance at Korean character density.

4. **Technology as service, not spectacle** — AI and automation power the platform but should never make the user feel surveilled or overwhelmed. *UI implication:* Trenbot recommendations are labeled clearly as price comparisons, not "personalization magic"; data-driven badges use factual language ("15% below market average").

5. **Authenticity as table stakes** — Counterfeit risk is the sector's defining anxiety. Trenbe's response is operational, not just copywritten. *UI implication:* Authentic guarantee badges and Korean Authentic Center certification marks appear at the same visual weight as the price; they are never buried in footers.

## 13. Personas

*Illustrative Persona A — The Aspirational Accumulator:* A 28-year-old woman in Seoul in her first management-level role. She buys one statement luxury piece per quarter as a self-reward. She comparison-shops obsessively before committing. She trusts Trenbe's price scanner because she has verified its results against department-store prices herself. Her primary device is iPhone; she browses during commute and completes purchases at home.

*Illustrative Persona B — The Resale Strategist:* A 35-year-old man who buys luxury goods both to enjoy and to trade. He uses the Shuffle exchange feature to upgrade without net spend. He values the authentication certificate because it protects the resale value of his items. He reads the tech blog and trusts the brand's engineering transparency.

*Illustrative Persona C — The Gifting Professional:* A 40-year-old professional who buys 3–5 luxury gifts per year for clients and family. She needs fast, reliable delivery and gift-wrap options. She cares deeply about authenticity guarantees because a counterfeit gift would be a professional embarrassment. The 300% compensation policy is the feature that converted her.

*Illustrative Persona D — The Global Shopper:* A Korean expat in London who relies on Trenbe's UK office logistics to ship authenticated pieces home to family at prices competitive with local boutiques. She reads prices in KRW and filters by brand country of origin.

## 14. States

- **Empty:** Category page with no matching items shows a centered purple icon + "검색 결과가 없어요" (No results found) in gray900 text with a suggestion to broaden the filter — no full-bleed illustration, no decorative artwork
- **Loading (skeleton):** Product cards show a gray100 (#F7F6F5) block for the image area and two gray200 (#EFEEEB) lines for title/price; animated with a left-to-right shimmer using linear gradient
- **Error — Network:** Full-page or modal overlay on a white background with a neutral icon, headline in gray1000, sub-copy in gray800, and a black "다시 시도" (Retry) CTA button
- **Error — Validation:** Inline beneath form fields; border turns red (#EC5151), helper text appears in red500 at 1.2rem (12px), field label does not change color
- **Success:** Green (#1EB789) inline confirmation text or toast; checkmark icon at 24px; auto-dismisses after 3s with 0.2s ease-in-out fade-out
- **Skeleton (product detail):** Hero image area dims to gray200, product title and price lines show as gray100 bars; below-fold specs show 3-line skeleton
- **Disabled:** Button opacity 0.65; text color switches to #AFAEAB (gray600/textDisabled); cursor changes to not-allowed; no background color change

## 15. Motion & Easing

**Duration scale:**
- Micro: 150ms — border-color focus transitions (`ease-in-out`)
- Short: 200ms — hover state color changes, icon rotations (`ease-in-out`)
- Medium: 240ms — drawer bottom position animations (`ease`)
- Standard: 325ms — modal entrance/exit, overlay opacity (`ease-out`)
- Long: 400ms — page-level slide carousels (`linear`)

**Primary easing functions:**
- `ease-in-out` — default for interactive state changes (border, background-color)
- `ease-out` — modal fade-in and slide-up (enters fast, settles gently)
- `linear` — carousel swipe momentum, progress bars

**Rules:**
- All transitions are applied via CSS `transition` properties; no JavaScript-driven animation for routine UI state changes
- Skeleton shimmer uses a CSS linear-gradient animation at 1.5s infinite linear (AOS library handles scroll-triggered reveals)
- Carousel interactions use Swiper.js inertia; drag velocity maps naturally without artificial easing override
- Reduced-motion: no explicit `prefers-reduced-motion` override is in the current CSS; agents generating new components must add it
