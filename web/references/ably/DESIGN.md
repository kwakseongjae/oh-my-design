---
name: Ably
colors:
  primary: '#ff5160'
  canvas: '#ffffff'
  foreground: '#1f1f1f'
  consumer-secondary: '#777777'
  team-secondary: '#757575'
  seller-body: '#5b5b5b'
  consumer-border: '#dddddd'
  platform-border: '#e5e7eb'
  team-accent-surface: '#fff2ea'
typography:
  consumer-label:
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: '-0.4px'
    use: Current mobile consumer labels
  consumer-compact:
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.33
    letterSpacing: '-0.2px'
    use: Mobile-web app-entry label as captured 2026-07-12; the rebuilt control measured 2026-09-29 renders a 10px / 400 label
  consumer-meta:
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.27
    use: Current mobile consumer metadata
  corporate-display:
    fontSize: 48px
    fontWeight: 600
    lineHeight: 1.33
    letterSpacing: '-0.3px'
    use: Current ABLY Team display heading
  corporate-section:
    fontSize: 40px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: '-0.3px'
    use: Current ABLY Team repeated section heading
  corporate-card:
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.33
    letterSpacing: '-0.3px'
    use: Current ABLY Team card heading
  corporate-body:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: '-0.3px'
    use: Current ABLY Team body and card copy
  seller-body:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    use: Current Seller Square body and navigation text
rounded:
  corporate-control: 12px
  pill: 24px
  consumer-action: 20px
  full: 9999px
spacing:
  xs: 8
  sm: 10
  md: 16
  lg: 24
  xl: 32
components:
  consumer-open-app:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#1f1f1f'
    rounded: 20px
    padding: 0px 8px
    size: 62px x 28px
    typography: 10px / 400 (visible label; the pressable itself computes 16px / 400 Pretendard-Regular)
    hover: no change in the compared scope (self, its ::before/::after, 1 descendant, 3 ancestor levels) — measured 2026-09-29
    pressed: no change in the compared scope (self, its ::before/::after, 1 descendant, 3 ancestor levels) — measured 2026-09-29
    focus: outline browser default ring (outline-style auto), not brand — measured 2026-09-29
    states: 'captured 2026-07-12 as a bordered button (1px #dddddd, 12px / 600 label); re-measured 2026-09-29 as a React Native Web pressable with no border on the control or its 3 ancestors and a 10px / 400 label; hover, pressed and keyboard focus measured 2026-09-29 (Tab 1); transition all 0s'
    use: Mobile-web app-install banner action 앱에서 보기, reached through the declared m.a-bly.com redirect to mobile.a-bly.com
  corporate-primary:
    type: button
    backgroundColor: '#ff5160'
    textColor: '#ffffff'
    rounded: 12px
    size: 160px x 56px
    typography: 18px / 600
    hover: 'bg #db3b57'
    pressed: 'bg #db3b57'
    focus: outline browser default ring (outline-style auto), not brand — measured 2026-09-29
    states: default captured 2026-07-12; hover, pressed and keyboard focus measured 2026-09-29 on the floating 채용공고 보러가기 button (Tab 26); pressed equals hover; transition all 0s
    use: Current ABLY Team primary action
    height: 56px
    padding: 0px
  corporate-soft-action:
    type: button
    backgroundColor: '#fff2ea'
    textColor: '#ff5160'
    rounded: 12px
    size: 312px x 48px
    typography: 16px / 600
    hover: 'bg #ffe5dc'
    pressed: 'bg #ffe5dc'
    focus: outline browser default ring (outline-style auto), not brand — measured 2026-09-29
    states: default captured 2026-07-12; hover, pressed and keyboard focus measured 2026-09-29 on 새소식 더보기, a button inside a link (Tab 10); pressed equals hover; transition all 0s
    use: Current ABLY Team low-emphasis action
  corporate-pill:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#4e4e4e'
    rounded: 24px
    padding: 14px 16px
    size: 105px x 48px
    typography: 16px / 400
    hover: no change in the compared scope (self, its ::before/::after, 0 descendants, 3 ancestor levels) — measured 2026-09-29
    pressed: no change in the compared scope (self, its ::before/::after, 0 descendants, 3 ancestor levels) — measured 2026-09-29
    focus: outline browser default ring (outline-style auto), not brand — measured 2026-09-29
    states: default captured 2026-07-12; hover, pressed and keyboard focus measured 2026-09-29 on 자세히 보기 (Tab 7); the shadowed carousel item around it (corporate-card) is inside the compared ancestor levels and did not change either
    use: Current ABLY Team compact editorial action
  corporate-card:
    type: card
    backgroundColor: '#ffffff'
    textColor: '#1f1f1f'
    rounded: 12px
    shadow: 0 4px 48px rgba(0,0,0,0.08)
    states: 'not a control: a list item with no Tab stop; read 2026-09-29 as an ancestor of corporate-pill, where hover and press changed nothing on it'
    use: 'Non-interactive ABLY Team card: the white mission cards and the image carousel list item that holds the 자세히 보기 pill. The shadow is on the list item, not on a link; the clickable news story is team-story-card'
  seller-primary:
    type: button
    backgroundColor: '#ff5160'
    textColor: '#ffffff'
    rounded: 9999px
    padding: 13px 30px
    size: 114px x 49px
    typography: 16px / 400 / Noto Sans Korean (visible label span; the link itself computes 14px / 400)
    hover: 'bg #bf3c47'
    pressed: 'bg #bf3c47'
    focus: no focus indication in the compared scope (self, its ::before/::after, 1 descendant, 3 ancestor levels) — measured 2026-09-29
    states: default captured 2026-07-12; hover, pressed and keyboard focus measured 2026-09-29 on My 마켓 (Tab 8); pressed equals hover; transition all 0.3s
    use: Current Seller Square primary entry action
  consumer-category-chip:
    type: tab
    backgroundColor: transparent
    textColor: '#777777'
    border: '1px solid #dddddd'
    rounded: 18px
    padding: 9px 12px
    size: 48px x 36px
    typography: 13px / 400 (visible label; the pressable itself computes 16px / 400 Pretendard-Regular)
    hover: no change in the compared scope (self, its ::before/::after, 2 descendants, 3 ancestor levels) — measured 2026-09-29
    pressed: 'bg #eeeeee'
    focus: outline browser default ring (outline-style auto), not brand — measured 2026-09-29
    states: unselected chip 상의; hover, pressed and keyboard focus measured 2026-09-29 (Tab 88); the fill appears on press only, with no hover change; transition all 0s; the selected chip was not read
    use: Consumer mobile-web category chip row (상의 and its siblings) on mobile.a-bly.com, reached through the declared m.a-bly.com redirect; the mobile web renders as a 600px column at desktop width
  team-nav-link:
    type: tab
    backgroundColor: transparent
    textColor: '#1f1f1f'
    rounded: 24px
    padding: 14px 16px
    size: 76px x 48px
    typography: 16px / 600 / Pretendard
    hover: bg rgba(0,0,0,0.05)
    pressed: bg rgba(0,0,0,0.05)
    focus: outline browser default ring (outline-style auto, offset 1px), not brand — measured 2026-09-29
    states: default, hover, pressed and keyboard focus measured 2026-09-29 on 팀 문화 (Tab 3); pressed equals hover; transition all 0s; a menu it may open would be a sibling and was not compared
    use: ABLY Team fixed header link (팀 문화 and its siblings)
  team-story-card:
    type: card
    backgroundColor: transparent
    textColor: '#1f1f1f'
    rounded: 0px
    size: 464px x 544px
    typography: '24px / 600 / Pretendard (story title; the meta line is 16px / 400 #757575)'
    hover: transform matrix(1.05, 0, 0, 1.05, 0, 0) on the card image (scale 1.05); the link itself does not change
    pressed: transform matrix(1.05, 0, 0, 1.05, 0, 0) on the card image, as on hover
    focus: outline browser default ring (outline-style auto, offset 1px), not brand — measured 2026-09-29
    states: default captured 2026-07-12 (two 464 x 544 story items); hover, pressed and keyboard focus measured 2026-09-29 on the first story link (Tab 11); the image transition is 400 ms; the link has no radius and no shadow
    use: 'ABLY Team news story card: one link wrapping image, title and meta. It is not corporate-card, whose shadow sits on non-interactive list items'
  team-news-row:
    type: listItem
    backgroundColor: '#ffffff'
    textColor: '#1f1f1f'
    rounded: 12px
    padding: 16px
    size: 960px x 104px
    typography: '24px / 600 / Pretendard (row title; the date line is 18px / 400 #757575)'
    states: default captured 2026-07-12 (two rows); not probed
    use: ABLY Team news row list above the 새소식 더보기 soft action
  seller-nav-link:
    type: tab
    backgroundColor: transparent
    textColor: '#1f1f1f'
    rounded: 0px
    padding: 0px 17px
    size: 104px x 90px
    typography: 18px / 700 / Noto Sans Korean
    hover: 'fg #ff5160'
    pressed: 'fg #ff5160'
    focus: no focus indication in the compared scope (self, its ::before/::after, 1 descendant, 3 ancestor levels) — measured 2026-09-29
    states: default, hover, pressed and keyboard focus measured 2026-09-29 on 입점 소개 (Tab 2); the label span turns with the link; transition all 0.3s; a dropdown it may open is a sibling and was not compared
    use: Seller Square header navigation item (입점 소개 and its siblings), 90px tall
fonts:
  roles:
    consumer: Pretendard
    corporate: Pretendard
    seller: Noto Sans Korean
---

# Design System Inspiration of Ably (에이블리)

## Overview

### Visual Theme & Atmosphere

ABLY is a Korean style-commerce platform organized around personal taste, discovery, and the connection between consumers and sellers. Its official product story describes an AI-personalized commerce experience that expanded beyond fashion into beauty, home, stationery, food, and community/content. The current company mission frames this more broadly as expanding style commerce and a chain platform globally: people should be able to discover, buy, make, and sell styles with lower friction. Personalization and an accessible seller ecosystem are presented as two connected sides of that next-commerce direction.

The current public ecosystem has three visibly different surfaces. The consumer mobile web is narrow and app-directed, using a Next.js-loaded Pretendard alias, dense 11–16px type, white, `#1f1f1f`, and a compact 28px app-entry action. ABLY Team is a large editorial brand and recruiting surface with Pretendard, 40–48px headings, wide story cards, pale peach accent panels, and `#ff5160` actions. Seller Square uses Noto Sans Korean and its own information architecture for onboarding, market operations, advertising, guides, and global expansion.

The stable cross-surface signal is the current coral-pink `#ff5160`, not the older `#fa2e5f` snapshot. Even this shared color does not make the component systems interchangeable. A Seller Square pill, an ABLY Team recruiting CTA, and a native consumer purchase button are three different claims. The current public capture verifies the first two and only a compact app-entry action on mobile web; native shopping cards, price stacks, checkout actions, bottom navigation, badges, and sheets remain absent.

**Key Characteristics:**
- Current coral-pink `#ff5160` across consumer/corporate/seller identity moments
- Consumer mobile web: dense Pretendard, 11–16px type, app-directed entry
- ABLY Team: editorial Pretendard, 40–48px headings, story cards, 12–24px control geometry
- Seller Square: Noto Sans Korean and full-pill onboarding actions
- Personal taste and recommendation as the consumer narrative
- Seller/user ecosystem and global chain-platform expansion as the company narrative
- Strict separation of consumer web, native app, corporate, and seller evidence

### Primary tasks

- Discover and buy products that match your personal taste
- Browse taste categories beyond fashion into beauty, home, stationery and food
- Start and run a market as a seller on the platform

### Brand Narrative

ABLY began as a personalized style-commerce experience and expanded its concept of taste beyond fashion into beauty, life, food, content, and community. The company connects that consumer discovery layer to a seller and production/distribution ecosystem, then frames global expansion through style commerce and a chain platform. The visual system mirrors that ecosystem: a shared coral identity with different tools for consumers, company storytelling, and sellers. Consumer value comes from a feed and discovery experience shaped by taste; seller value comes from easier onboarding, operations, distribution, and access to audiences. ABLY Team explains the mission and culture that connect those sides, while Seller Square turns the seller relationship into a separate operational surface. The shared color signals one company, but the different typography and geometry reveal genuinely different tasks.

### Principles

1. **Start from taste.** Discovery should adapt to what a person is trying to express or find.
2. **Connect both sides of commerce.** Consumer ease and seller opportunity are related, not identical interfaces.
3. **Move quickly without inventing truth.** Fast commerce language cannot excuse unsupported UI claims.
4. **Respect surface ownership.** Mobile web, native app, company, and seller systems have distinct evidence.

### Personas

First-party material establishes task contexts only:
- A consumer discovering and purchasing products aligned with personal taste.
- A seller evaluating onboarding, market operations, advertising, or global expansion.
- A candidate or partner learning about ABLY's mission, culture, and platform direction.

Project-specific names, ages, spending, seller revenue, category preference, conversion rate, and success metrics are intentionally unspecified and must come from the product brief.

## Colors

- **Current ABLY coral** (`#ff5160`): live identity/action color across current official surfaces.
- **Canvas** (`#ffffff`) and **foreground** (`#1f1f1f`): current consumer and corporate base.
- **Consumer secondary** (`#777777`): current mobile-web supporting text.
- **Team secondary** (`#757575`): current company/editorial supporting copy.
- **Seller body** (`#5b5b5b`): current Seller Square explanatory text.
- **Consumer border** (`#dddddd`): the 1px outline of the mobile-web category chips (re-measured 2026-09-29). In July it also outlined the compact app-entry action; the rebuilt control has no border.
- **Platform border** (`#e5e7eb`): repeated Team and Seller Square boundary.
- **Team accent surface** (`#fff2ea`): current pale peach corporate action surface.

Older hot-deal pink, discount red, shipping mint, success, error, link, tab, and native surface colors are omitted. A yellow Seller Square campaign action was captured as a local promotion, not a canonical ABLY semantic color.

## Typography

### Font evidence boundary

| Evidence class | Resolution |
|---|---|
| Official product-use | Consumer mobile web establishes Pretendard; ABLY Team establishes Pretendard; Seller Square establishes Noto Sans Korean. |
| Live surface-use | `__Pretendard_a4ae19` loaded/high with 85 consumer uses; Pretendard loaded/high with 117 corporate uses; Noto Sans Korean loaded/high with 119 seller uses. |
| Official distributed asset | Pretendard is loaded from first-party and public distribution paths; Noto Sans Korean is delivered on Seller Square. Neither is an ABLY-exclusive font. |
| Declared-only | Pretendard fallback, Black Tie, Font Awesome, Glyphicons, and other vendor icon families had zero visible text use. |
| Unresolved | Native iOS/Android consumer typography and campaign-specific type remain unresolved. |

| Domain/role | Family | Size | Weight | Line height | Tracking |
|---|---|---:|---:|---:|---:|
| Consumer label | Pretendard | 16px | 600 | 20px | -0.4px |
| Consumer compact action (July 2026-07-12; the rebuilt control renders a 10px / 400 label) | Pretendard | 12px | 600 | 16px | -0.2px |
| Consumer metadata | Pretendard | 11px | 400 | 14px | normal |
| Team display | Pretendard | 48px | 600 | 64px | -0.3px |
| Team section | Pretendard | 40px | 600 | 56px | -0.3px |
| Team card title | Pretendard | 24px | 600 | 32px | -0.3px |
| Team body | Pretendard | 16px | 400 | 24px | -0.3px |
| Seller body | Noto Sans Korean | 16px | 400 | 25.6px | normal |

Do not render Noto Sans Korean as the consumer app font or Pretendard as Seller Square truth. Surface ownership matters more than visual similarity.

## Layout

- Keep consumer mobile web compact and direct users toward the full app without pretending it is the app.
- Use large editorial sections and paired story cards on ABLY Team.
- Use Seller Square's own content density and onboarding hierarchy for seller tasks.
- Share `#ff5160` as identity, not as proof of identical control geometry.
- Let product imagery and taste categories carry consumer variety; do not fabricate their layout from memory.

### Responsive Behavior

The consumer surface is explicitly mobile web and uses compact type/actions. ABLY Team reflows large editorial stories and card compositions. Seller Square has its own desktop-oriented seller information hierarchy. Native-app safe areas, bottom navigation, checkout keyboards, and product-grid breakpoints remain unresolved.

## Elevation & Depth

Consumer mobile web and Seller Square promoted controls are flat. ABLY Team uses a specific large-card shadow (`0 4px 48px rgba(0,0,0,.08)`) on 12px non-interactive cards: the mission cards and the image carousel item. The clickable news story card has no radius and no shadow, and its hover scales the image instead of lifting the card. That corporate editorial shadow is not a native commerce sheet token.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.corporate-card`: `0 4px 48px rgba(0,0,0,0.08)`

## Motion & Easing

No reusable duration or easing curve is promoted. Measured transitions are surface-local: `all 0s` on the consumer and ABLY Team controls, `all 0.3s` on Seller Square, and a 400 ms image transition inside the ABLY Team news story card. Native app motion and a cross-domain animation system remain unobserved.

---

**Verified:** 2026-07-12 (omd:migrate)
**Tier 1 sources:** https://m.a-bly.com/ ; https://ably.team/ ; https://square.a-bly.com/ ; https://ably.team/news/ZS8_IREAACIAr50Y
**Tier 2 attempts:** getdesign.md had no reliable ABLY consumer record; Refero produced no authoritative current ABLY surface
**Conflicts unresolved:** none

## Components

Rest values are the July 2026-07-12 capture unless marked. Hover, pressed and keyboard focus were measured on 2026-09-29 with the fixed live state probe (one load per surface, logged out, keyboard walk first); "no change" below means no computed change across the control, its ::before/::after, every descendant and 3 ancestor levels.

### Consumer mobile web

The declared `m.a-bly.com` now redirects to `mobile.a-bly.com`, a React Native Web build that renders as a 600px column at desktop width.

#### Compact app-entry action (앱에서 보기)
- White / `#1f1f1f` label, 20px radius, 62×28px, `0px 8px`
- Re-measured 2026-09-29: no border on the control or its 3 ancestors, and a 10px/400 label (the pressable itself computes 16px/400). July read a bordered button (1px `#dddddd`, Pretendard 12px/600); the site has since been rebuilt.
- Hover and pressed: no change within scope (1 descendant). Keyboard focus: the browser's default ring only.
- No native purchase meaning is attached

#### Category chip (probe rest reading, 2026-09-29)
- Transparent, 1px `#dddddd` outline, 18px radius, 48×36px, `9px 12px`; visible label `#777777` 13px/400
- Hover: no change within scope (2 descendants). Pressed: fill `#eeeeee`, on press only. Keyboard focus: browser default ring.

### ABLY Team

#### Primary action
- `#ff5160` / white, 12px radius, 160×56px, Pretendard 18px/600
- Hover = pressed: fill `#db3b57`. Keyboard focus: browser default ring (not a brand token).

#### Soft action
- `#fff2ea` / `#ff5160`, 12px radius, 312×48px, 16px/600
- Hover = pressed: fill `#ffe5dc`. Keyboard focus: browser default ring.

#### Editorial pill
- White / `#4e4e4e`, 24px radius, 105×48px, `14px 16px`, 16px/400
- Hover and pressed: no change within scope (0 descendants). Keyboard focus: browser default ring.

#### Mission and carousel card (non-interactive)
- White / near-black, 12px radius
- `0 4px 48px rgba(0,0,0,.08)` shadow on list items with no Tab stop: the white mission cards and the image carousel item that holds the editorial pill. It is not a link, and the pill's hover and press change nothing on it.

#### News story card
- One link wrapping image, title and meta; 464×544px, no radius, no shadow; title `#1f1f1f` 24px/600, meta `#757575` 16px/400
- Hover = pressed: the image scales to 1.05 (`matrix(1.05, 0, 0, 1.05, 0, 0)`); the link's own fill, border, radius and shadow do not change. Keyboard focus: browser default ring.

#### News row
- White, 12px radius, `16px` padding, 960×104px; title `#1f1f1f` 24px/600, date `#757575` 18px/400
- Default only (July capture); not probed

#### Header link (probe rest reading, 2026-09-29)
- Transparent, `#1f1f1f` 16px/600, 24px radius, `14px 16px`, 76×48px
- Hover = pressed: fill `rgba(0,0,0,0.05)`. Keyboard focus: browser default ring.

### Seller Square

#### Primary entry action
- `#ff5160` / white, full-pill, 114×49px, `13px 30px`
- Visible label Noto Sans Korean 16px/400 (the link itself computes the 14px/400 that July recorded)
- Hover = pressed: fill `#bf3c47`, a different darkening from ABLY Team's. Keyboard focus: nothing within scope (1 descendant).

#### Header navigation item (probe rest reading, 2026-09-29)
- Transparent, label `#1f1f1f` Noto Sans Korean 18px/700, `0px 17px`, 90px tall
- Hover = pressed: label `#ff5160`. Keyboard focus: nothing within scope (1 descendant).

The Channel.io chat launcher on Seller Square is third-party and excluded. Native consumer product cards, price stacks, shipping/deal badges, native filters, checkout CTAs, bottom tabs, bottom sheets, dialogs, and transactional states are absent until an inspectable native surface verifies them.

### States

Hover, pressed and keyboard focus were measured on 2026-09-29 with the fixed live state probe; nine controls have all three.

| Control (surface) | Hover | Pressed | Keyboard focus |
|---|---|---|---|
| 앱에서 보기 (consumer) | no change in scope | no change in scope | browser default ring |
| Category chip 상의 (consumer) | no change in scope | fill `#eeeeee` | browser default ring |
| Primary action (Team) | fill `#db3b57` | fill `#db3b57` | browser default ring |
| Soft action (Team) | fill `#ffe5dc` | fill `#ffe5dc` | browser default ring |
| Editorial pill (Team) | no change in scope | no change in scope | browser default ring |
| Header link 팀 문화 (Team) | fill `rgba(0,0,0,0.05)` | fill `rgba(0,0,0,0.05)` | browser default ring |
| News story card (Team) | image scale 1.05 | image scale 1.05 | browser default ring |
| My 마켓 (Seller) | fill `#bf3c47` | fill `#bf3c47` | nothing in scope |
| 입점 소개 (Seller) | label `#ff5160` | label `#ff5160` | nothing in scope |

No control has an authored focus style. The browser's default ring (`auto 1px`, `#005fcc`) is recorded as what renders, not as an ABLY token, and Seller Square shows no focus indication at all within the compared scope. "In scope" means the control, its ::before/::after, every descendant and 3 ancestor levels; a menu opened as a sibling, canvas and pixels are outside it. Loading, empty, cart, payment, order-success and error states remain absent.

## Do's and Don'ts

### Do
- Use current `#FF5160` and name the surface that gives a component its role.
- Keep consumer, corporate, and seller font evidence separate.
- Preserve ABLY's taste-discovery, personalization, and seller-ecosystem narrative.
- Omit native details until an inspectable native path exists.

### Don't
- Do not restore the older `#FA2E5F` as current primary without new proof.
- Do not infer purchase buttons, deal badges, price typography, tabs, or sheets from commerce convention.
- Do not show Noto Sans Korean as the consumer product font.
- Do not turn ABLY Team recruiting cards into consumer product cards.

## Voice & Tone

ABLY's official voice is energetic, friendly, and direct. Consumer and product stories emphasize discovering one's taste quickly; seller content emphasizes starting and operating a market easily; company content speaks in terms of next commerce, ecosystem, and expansion. Category or community copy can be playful, but transactional language should state price, choice, or next action without manufactured urgency. Seller guidance should distinguish onboarding, operations, advertising, and global expansion. Keep Korean copy conversational but task-clear. Avoid invented discounts, conversion claims, urgency phrases, and seller-growth numbers.

## Agent Prompt Guide

> Build only the verified ABLY surface: use `#ff5160`, white, and `#1f1f1f`; Pretendard for consumer/Team or Noto Sans Korean for Seller Square; apply the exact domain-specific component geometry above. For native shopping UI, omit unverified cards, price stacks, badges, tabs, and checkout controls. Keep state values on their own surface: the ABLY Team primary darkens to `#db3b57`, the Seller Square pill to `#bf3c47`. Keyboard focus is the browser's default ring or nothing, so supply an accessible focus style without presenting it as ABLY's.

## Governance

### Known Gaps

- **Contrast, `corporate-primary`.** Text `#ffffff` on `#ff5160` measures 3.18:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `corporate-soft-action`.** Text `#ff5160` on `#fff2ea` measures 2.90:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `seller-primary`.** Text `#ffffff` on `#ff5160` measures 3.18:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `team-nav-link`.** Text `#1f1f1f` on `#00000000` measures 1.27:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `team-story-card`.** Text `#1f1f1f` on `#00000000` measures 1.27:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `seller-nav-link`.** Text `#1f1f1f` on `#00000000` measures 1.27:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
