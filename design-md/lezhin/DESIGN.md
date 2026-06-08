---
id: lezhin
name: "Lezhin Comics"
country: KR
category: consumer-tech
homepage: "https://www.lezhin.com"
primary_color: "#eb0014"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=lezhin.com&sz=256"
verified: "2026-06-03"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  components_harvested: true
  colors:
    primary: "#eb0014"
    primary-hover: "#ff5254"
    primary-dark: "#c40017"
    ink: "#111115"
    deep-dark: "#09090b"
    charcoal: "#222225"
    text-soft: "#36363a"
    text-subtle: "#6f6f77"
    text-muted: "#a1a1a9"
    border-muted: "#e9e9ec"
    surface-muted: "#f4f4f5"
    canvas: "#ffffff"
    on-primary: "#ffffff"
  typography:
    family: { sans: "Pretendard Variable", mono: "Pretendard Variable" }
    section-header: { size: 24, weight: 700, lineHeight: 1.35, tracking: -0.36, use: "Section headers" }
    title:         { size: 18, weight: 700, lineHeight: 1.4, use: "Smaller section headers" }
    body:          { size: 16, weight: 400, lineHeight: 1.5, use: "Body default" }
    label:         { size: 14, weight: 600, lineHeight: 1.4, use: "Label / UI text, button labels" }
    label-medium:  { size: 14, weight: 500, lineHeight: 1.4, use: "Medium UI text" }
    caption:       { size: 13, weight: 400, lineHeight: 1.4, use: "Caption / metadata" }
    caption-small: { size: 12, weight: 400, lineHeight: 1.4, use: "Smallest metadata" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 20, xl: 24, xxl: 32, section: 56 }
  rounded: { sm: 4, md: 8, lg: 12, full: 9999 }
  shadow:
    subtle: "0 0 0 rgba(17,17,21,0.06)"
    soft: "0 2px 12px 0 rgba(17,17,21,0.08)"
    medium: "0 0 0 rgba(17,17,21,0.25)"
    strong: "0 0 0 rgba(17,17,21,0.30)"
  components:
    button-primary: { type: button, bg: "#eb0014", fg: "#ffffff", radius: 4, padding: "0 12px", font: "14px/600", use: "Primary CTA, 48px height" }
    button-primary-large: { type: button, bg: "#eb0014", fg: "#ffffff", radius: 4, padding: "0 16px", font: "16px/600", use: "Large primary CTA, 56px height" }
    button-secondary: { type: button, bg: "#222225", fg: "#ffffff", radius: 4, padding: "0 12px", font: "14px/600", use: "Secondary, 48px height" }
    button-tertiary: { type: button, bg: "#f4f4f5", fg: "#36363a", radius: 4, padding: "0 12px", font: "14px/600", use: "Tertiary, 48px height" }
    button-outlined: { type: button, bg: "transparent", fg: "#36363a", radius: 4, padding: "0 20px", font: "14px/600", use: "Outlined, 1px #a1a1a9 border, 40px height" }
    card-thumbnail: { type: card, bg: "#f4f4f5", radius: 4, use: "Comic thumbnail card, 2/3 portrait aspect" }
    card-circle: { type: card, radius: 9999, use: "Circle thumb card, tracked ring" }
    badge-chip: { type: badge, bg: "transparent", fg: "#6f6f77", radius: 9999, padding: "0 12px", use: "Default genre/tag chip, 1px #e9e9ec border, 32px height" }
    badge-chip-selected: { type: badge, fg: "#c40017", radius: 9999, use: "Selected chip" }
    tab-default: { type: tab, fg: "#111115", radius: 4, padding: "0 12px", use: "Default tab, 36px height" }
    tab-selected: { type: tab, fg: "#ffffff", radius: 4, use: "Selected tab" }
    dialog-dropdown: { type: dialog, bg: "#ffffff", radius: 4, padding: "12px 0", use: "Dropdown/select container, 1px #f4f4f5 border" }
---

# Lezhin Comics

Korea's first premium webtoon platform — bold, content-first, and unapologetically direct.

## 1. Visual Theme & Atmosphere

Lezhin Comics presents a dark, immersive canvas that keeps the spotlight firmly on cover art and episode thumbnails. The interface uses a deep near-black base (`#111115`) punctuated by a single vivid crimson (`#eb0014`) that signals every interactive action — from primary buttons to the switch-selected state and the badge on adult content. Grey neutrals (`#e9e9ec` border-muted through `#09090b` ink-black) form a tight tonal ladder, producing clean hierarchy without decorative flourish. Content grids are tight and image-led; typography is set in Pretendard for sharp legibility in Korean and Latin. The overall atmosphere is premium but unadorned — a platform confident that its 8,000+ titles speak louder than chrome.

## 2. Color Palette & Roles

- **Brand Red:** `#eb0014` — primary CTA buttons, state-switch-selected, state-form-bg-selected, badge
- **Red Hover:** `#ff5254` — primary button hover state
- **Red Focus/Dark:** `#c40017` — badge background, button focus/active state
- **Ink Black:** `#111115` — inverted background, text-default, icon-default
- **Deep Dark:** `#09090b` — dark-strong surface
- **Dark Charcoal:** `#222225` — secondary button background, border-default
- **Soft Black:** `#36363a` — text-soft, icon-soft
- **Mid Grey:** `#6f6f77` — text-subtle, icon-subtle
- **Muted Grey:** `#a1a1a9` — text-muted, icon-muted, placeholder
- **Border Muted:** `#e9e9ec` — card borders, dividers
- **Surface Muted:** `#f4f4f5` — background muted, disabled button, skeleton base
- **White:** `#ffffff` — default background (light), text-inverted

## 3. Typography Rules

- **Primary typeface:** Pretendard Variable → Pretendard → -apple-system → Noto Sans KR → Malgun Gothic → sans-serif
- **Scale:** 10 / 12 / 13 / 14 / 15 / 16 / 17 / 18 / 20 / 24 / 28 / 32 / 36 / 40 / 56 / 80px (mapped via `--size-3xs` through `--size-10xl`)
- **Body default:** 16px / weight 400 (regular)
- **Caption / metadata:** 12–13px / weight 400
- **Label / UI text:** 14px / weight 500 (medium) or 600 (semibold)
- **Button labels:** 14px (small/medium) or 16px (large) / weight 600
- **Section headers:** 18–24px / weight 700
- **Font weights available:** 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
- **Line height:** 1.5 for body; 1.35–1.4 for compact UI labels; `line-height: 100%` for buttons
- **Letter spacing:** −0.28px to −0.36px for tighter display text in Korean

## 4. Component Stylings

### Buttons

**Primary (lzButtonPrimary / lzBtn--filled_red)**
- Background: `#eb0014`
- Text: `#ffffff`
- Border: none
- Radius: 4px
- Height: 48px
- Padding: 0 12px
- Font: 14px / 600

**Primary Large**
- Background: `#eb0014`
- Text: `#ffffff`
- Border: none
- Radius: 4px
- Height: 56px
- Padding: 0 16px
- Font: 16px / 600

**Secondary (lzButtonSecondary / lzBtn--filled_bw)**
- Background: `#222225`
- Text: `#ffffff`
- Border: none
- Radius: 4px
- Height: 48px
- Padding: 0 12px
- Font: 14px / 600

**Tertiary (lzButtonTertiary / lzBtn--filled_grey)**
- Background: `#f4f4f5`
- Text: `#36363a`
- Border: none
- Radius: 4px
- Height: 48px
- Padding: 0 12px
- Font: 14px / 600

**Outlined (lzBtn--outlined)**
- Background: transparent
- Text: `#36363a`
- Border: 1px solid `#a1a1a9`
- Radius: 4px
- Height: 40px
- Padding: 0 20px
- Font: 14px / 600

### Cards

**Comic Thumbnail Card (lzCard)**
- Background: `#f4f4f5`
- Border: 1px solid `rgba(17,17,21,0.1)`
- Radius: 4px
- Aspect ratio: 2/3 (portrait)

**Circle Thumb Card (lzCardCircleThumb)**
- Radius: 9999px
- Border: tracked ring at 3px stroke

### Chips (lzChip)

**Default Chip**
- Background: transparent
- Text: `#6f6f77`
- Border: 1px solid `#e9e9ec`
- Radius: 999px
- Padding: 0 12px
- Height: 32px

**Selected Chip**
- Background: `rgba(255,82,84,0.15)`
- Text: `#c40017`
- Border: 1px solid transparent
- Radius: 999px

### Tabs (lzTab)

**Default Tab**
- Background: `rgba(17,17,21,0.04)`
- Text: `#111115`
- Border: 1px solid `rgba(17,17,21,0.04)`
- Radius: 4px
- Padding: 0 12px
- Height: 36px

**Selected Tab**
- Background: `rgba(17,17,21,0.95)`
- Text: `#ffffff`
- Radius: 4px

### Dropdown / Select (lzSelectPaper)

**Dropdown Container**
- Background: `#ffffff`
- Border: 1px solid `#f4f4f5`
- Radius: 4px
- Padding: 12px 0

---
**Verified:** 2026-06-03
**Tier 1 sources:** https://www.lezhin.com (homepage HTML + 5 CSS bundles: 035ea059869bfd89.css, 9161416b11db8c9e.css, 06e1ad77298be69d.css, 0427f27bd4442fbd.css, 895581ecc829564e.css), https://about.lezhin.com/en (corporate brand/about page)
**Tier 2 sources:** getdesign.md/lezhin — NOT LISTED (no data). refero — not checked (KR brand, typically no result).
**Conflicts unresolved:** none

## 5. Layout Principles

Lezhin uses a fluid column-grid whose gutter and column count adapt per viewport: 7 columns on desktop (≥ 961px), 4 columns on tablet (640–960px), 3–4 columns on mobile (≤ 639px). Card widths are computed via `calc((100% - (col-1) × gap) / col)` with 4px or 8px gutters on dense grids and 12–16px gutters on sparser layouts. The horizontal page max-widths are 1036px at 961–1280px breakpoint and 1212px at 1281px+. Horizontal scroll snap is used for compact-carousel sections (snap-scroll list) on mobile. All interactive regions maintain at minimum 36px touch targets.

## 6. Depth & Elevation

Elevation is expressed through the shadow token ladder:

- **Level 1 – Subtle:** `rgba(17,17,21,0.06)` — hero banner ambient, near-flat cards
- **Level 2 – Soft:** `rgba(17,17,21,0.08)` — dropdown menus (lzSelectPaper: `0 2px 12px 0 rgba(17,17,21,.08)`)
- **Level 3 – Medium:** `rgba(17,17,21,0.25)` — drawers, floating elements
- **Level 4 – Strong:** `rgba(17,17,21,0.30)` — modals
- **Level 5 – Bold:** `rgba(17,17,21,0.50)` — overlay scrim base
- **Thumbnail shadow:** `rgba(17,17,21,0.20)` inset on cover art
- **Dark overlay (full scrim):** `rgba(17,17,21,0.85)` — background-overlay-bold

Dark mode uses the same numeric scale but on the dark surface (`#111115`), so card depth reads via subtle border differences (`--border-muted: #222225`) rather than box-shadow contrast.

## 7. Do's and Don'ts

### Do
- Use `#eb0014` exclusively for the single highest-priority CTA per screen
- Apply Pretendard (or Noto Sans KR fallback) — never substitute decorative display fonts
- Follow the exact button-height ladder: 28px (xs) / 40px (sm) / 48px (md) / 56px (lg)
- Use the pill chip (`border-radius: 999px`) for filterable genre or tag selectors
- Maintain 4px radius on cards and rectanglular buttons for the characteristic sharp-yet-soft look
- Use the skeleton shimmer (`lzSkeleton` — 1.8s ease-in-out infinite) during async content loads
- Reserve the AI gradient (`#4CECBE → #00BFE2 → #007EE0`) only for AI-feature UI accents

### Don't
- Don't use red for destructive warnings — Lezhin's red is a brand/action signal, not a danger signal
- Don't mix primary and secondary CTAs at equal visual weight on the same card or row
- Don't apply `border-radius` larger than 12px on rectangular interactive components (chips and avatars are exempt)
- Don't place light-mode text (`#111115`) directly on the dark surface (`#111115`) — toggle to inverted tokens
- Don't hard-code pixel color values — always reference the semantic CSS variable so dark-mode tokens apply correctly
- Don't add decorative illustration or icon embellishments inside buttons

## 8. Responsive Behavior

Lezhin uses three primary breakpoints:

- **Mobile** `max-width: 960px` — single-column flow, horizontal-scroll carousels, paddings collapse to 8–16px, card grids shift to 3–4 columns
- **Tablet** `min-width: 640px and max-width: 960px` — 4–6 column grids, moderate gutters (12–16px), nav bar adjusts to compact mode
- **Desktop** `min-width: 961px` — 7-column grids, 24–32px gutters, full GNB nav, fixed sidebar elements appear

Additional breakpoints handle edge cases: `max-width: 639px` (small mobile, 3-col grids), `max-width: 320px` (reduced padding to 8px), `min-width: 1281px` (max-width: 1212px container). Components observe `prefers-color-scheme: dark` via 53 scoped media queries, switching semantic tokens to their dark-palette counterparts without changing the component markup.

## 9. Agent Prompt Guide

When building Lezhin-styled UI:

- **Color:** Treat `#eb0014` as the single brand accent; use it on the primary button and selected-state only. All other UI operates on the grey ladder (#111115 → #e9e9ec → #ffffff).
- **Typography:** Set the font stack to `Pretendard Variable, Pretendard, -apple-system, Noto Sans KR, sans-serif`. Use 14px/600 for buttons, 16px/400 for body copy, 12px/400 for metadata.
- **Radius:** Default to 4px on buttons and cards. Use 999px for pills (chips, avatars). Avoid values above 12px on rectangular elements.
- **Spacing:** Prefer 4/8/12/16/20/24px spacing increments. Card gutters are 4px (dense) or 8–12px (standard).
- **Dark mode:** Swap `--bg-default` to `#111115`, `--text-default` to `#ffffff`, border tokens adjust automatically when referencing CSS variables.
- **Animation:** Transitions are `0.2s ease-in-out` for background-color and borders; `0.25s linear` for transforms. Skeleton is `1.8s ease-in-out infinite`.
- **States:** Disabled buttons carry `rgba(255,82,84,0.2)` background. Focus states use `#9e0018` for primary.

## 10. Voice & Tone

**Brand voice:** Direct, confident, candid

The Lezhin voice is **솔직한** (honest/frank) — it does not hedge or oversell. Copy leans toward short declarative punches rather than elaborate prose. It speaks to adult readers who know what they want and appreciate the platform getting out of the way.

| Do | Don't |
|----|-------|
| Use short, punchy sentences | Use vague or corporate euphemisms |
| Be direct about content types | Sanitize mature topics with excessive euphemism |
| Address readers as adults who make their own choices | Be paternalistic or add unsolicited warnings |
| Use Korean naturally (informal register is fine) | Over-translate Korean idioms into stiff English equivalents |
| Let the content title and art do the heavy lifting | Over-describe what readers can see for themselves |

**Voice samples (illustrative):**
- *Illustrative:* "솔직한 재미 대폭발 — 당신이 찾던 진짜 웹툰." (Honest fun explosion — the real webtoon you've been looking for.)
- *Illustrative:* "매일 업데이트. 오늘 뭐 읽을까?" (Updated every day. What are you reading today?)
- *Illustrative:* "재미있는 만화를, 쉽게 결제해서, 편하게 보게 하자." (Let's make great comics easy to buy and comfortable to read.)

## 11. Brand Narrative

Lezhin Entertainment was founded in April 2012 by Han Hee-sung (the blogger known as "lezhin") and developer Kwon Jung-hyuk, launching its Android app on June 7, 2013. The company was acquired by Seoul-listed KidariStudio in December 2020. The platform was built on a simple conviction: great comics deserve frictionless commerce. By introducing a coin-based micro-payment system at a time when most Korean webtoon platforms relied on ad revenue, Lezhin created South Korea's first premium webtoon marketplace — positioning itself as the platform for creators who wanted to earn and readers who wanted more.

The company's governing mission is that "stories can make the world a better place." Lezhin Entertainment operates as a global content company, running the Lezhin Comics platform across Korea, the United States, and Japan. Its catalogue spans over 8,000 titles, and beyond reading, Lezhin Studio adapts webtoon IPs into films, dramas, and games while the Lezhin Shop brings physical merchandise to fans who want to hold their favourite stories in their hands.

The brand's tagline — "솔직한 재미 대폭발" (honest fun explosion) — encapsulates the operating philosophy: candid about content, direct about pricing, and unapologetically focused on reader satisfaction. Lezhin's four stated values — duty and self-reliance, mutual respect, customer satisfaction, and innovation — underpin both its creator relationships and its product decisions, from daily episode release schedules to the coin economy.

## 12. Principles

1. **Reader first, always.** Every service decision begins with the question of how readers discover and enjoy content. *UI implication:* Thumbnail art is the dominant visual element; interface chrome is minimal so it never competes with the cover image.

2. **Honest commerce.** Lezhin pioneered transparent paid webtoons. The pricing model is explicit — coins, costs, and episode counts are surfaced without dark patterns. *UI implication:* Coin balances and episode prices are always visible in context before purchase; no hidden upsells.

3. **Candid about content.** The platform serves adult audiences without euphemism. *UI implication:* Genre and content-type badges (including adult tags) are shown directly on thumbnail cards rather than hidden behind additional taps.

4. **Data and intuition in balance.** The founding team values "2% crazy" creative instinct alongside clear analytical thinking. *UI implication:* The platform ships experimental features (AI search, Snack short-drama) as clearly-labelled distinct experiences rather than silently folding them into the main flow.

5. **Global through localisation.** Lezhin operates dedicated services for KR, US, and JP markets with locale-specific content curation rather than a one-size-fits-all approach. *UI implication:* Typography stacks, locale date formats, and content catalogues adapt per region rather than defaulting to a single language baseline.

## 13. Personas

*Illustrative — for design scenario use only:*

**The Weekend Binge Reader** — A Korean professional in their late 20s who subscribes to Lezhin Premium. They open the app on Friday night, scan the "New Updates" carousel, and burn through three episodes of their favourite romance series back-to-back. They top up coins proactively rather than per-episode. For them, friction = bad; they want zero loading states and instant next-episode transitions.

*Illustrative — for design scenario use only:*

**The Genre Explorer** — A 32-year-old who discovered Lezhin through a recommendation for a specific genre (BL, thriller, or isekai). They use the tag-filter chip system heavily and bookmark titles for later. They read on both mobile and desktop and expect the reading experience to be consistent across devices.

*Illustrative — for design scenario use only:*

**The Loyal Creator Fan** — A college student who follows a specific artist and gets notified for every update. They comment frequently using the page-stamp system and engage with the creator's social feeds. Price sensitivity is moderate; they will spend coins on a title they love but are cautious about new unfamiliar series.

*Illustrative — for design scenario use only:*

**The International Reader** — An English-speaking reader in the US or Japan accessing Lezhin via lezhinus.com or the JP equivalent. They tend toward licensed titles with professional translation. They are brand-new to the coin system and need clear onboarding. The UI's Korean-first defaults (label copy, currency display) can create friction if not properly localised.

## 14. States

- **Empty (no content):** Shows the `lzEmpty` component with an illustrated book image (96×140px from `ccdn.lezhin.com/files/assets/img/empty-book-lt.png`); title in `#36363a` at 18px / weight 500; subtitle in `#6f6f77` at default size / weight 400
- **Loading (skeleton):** `lzSkeleton` — background `#f4f4f5`; shimmer overlay `hsla(0,0%,100%,0.6)` animated via `linear-gradient(120deg, transparent 35%, shimmer 50%, transparent 65%)` at 1.8s ease-in-out infinite; dark-mode variant uses `#3a3b3d` base and `hsla(0,0%,100%,0.08)` shimmer
- **Error (network/500):** `lzError` component centered at max-width 640px; title `#111115` at 34px / weight 500 (desktop) or 24px (mobile); error illustration displayed at `width: auto; height: 180px`; home button uses primary red CTA
- **Error (expired/access denied):** Same `lzError` structure; uses specific expired-state illustration (132px wide); body text in `#6f6f77` at 14px; action CTA in red primary button
- **Success:** State-form-bg-selected `#eb0014` applied to radio/checkbox fill; switch tracks when selected use `#eb0014`; snackbar uses dark `#2f353e` background with `#ffffff` text and blue-tinted link `#2992d6`
- **Skeleton (card-specific):** Comic card background holds `#f4f4f5` while image lazy-loads; once loaded, image covers the background fully with `object-fit: cover`
- **Disabled:** Primary button background `rgba(255,82,84,0.2)` with `#ffffff` text; tertiary button background `#fafafa` with `#dadadd` text; pointer-events none applied via attribute `[disabled]`

## 15. Motion & Easing

**Duration scale:**
- **Fast (micro-interactions):** 125ms — sort-arrow expand/collapse
- **Standard:** 200ms — button background/border transitions, tab color, opacity fades (snackbar)
- **Deliberate:** 250ms — slide-in/slide-out transforms (drawer, sheet transitions), switch track background, skeleton reveal height

**Easing:**
- `ease-in-out` — background-color and border transitions on buttons and tabs
- `linear` — switch thumb position and track color
- `ease-in-out` — skeleton shimmer sweep (1.8s)

**Rules:**
- Button hover/focus: 200ms ease-in-out on `background-color` and `border`
- Drawer / bottom-sheet: `transform 250ms ease-in-out, opacity 250ms ease-in-out` — enters from below or from the left
- Snackbar: `opacity 200ms` fade-in / fade-out; no transform movement
- Skeleton: `translateX(-100% → 100%)` over 1.8s ease-in-out infinite; never use shorter durations as it feels cheap against dense content grids
- Switch: `250ms linear` for track background, `250ms linear` for circle position — simultaneous, never staggered
- AI gradient divider (search bar): `translateX` at 3s ease-in-out infinite — slower to feel ambient, not urgent
