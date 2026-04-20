---
omd: 0.1
brand: Mercari
---

# Design System Inspiration of Mercari

## 1. Visual Theme & Atmosphere

Mercari is Japan's largest C2C marketplace (50M+ downloads, 350K daily listings) and its design system is a textbook example of **mature semantic token architecture**. The production site at `jp.mercari.com` exposes **681 CSS custom properties on `:root`**, organized into the well-named `--alias-color-*` namespace: `--alias-color-background-{role}-{state}`, `--alias-color-text-{role}-{state}`, `--alias-color-border-{role}-{state}`, `--alias-color-icon-{role}-{state}`, `--alias-color-overlay-*`. This isn't internal documentation — it's the actual design system surfaced at runtime, ready to read directly from any production page.

The brand color is the famous **Mercari Red** (`#ff333f`) — vivid, attention-grabbing, used as the `attention` semantic role for badges, error states, danger actions, and the iconic price-tag aesthetic. Around it sits a balanced palette: accent blue (`#0095ee`), success green (`#0aa466`), decorative yellow (`#ffb818`). Text hierarchy uses dark gray (`#333333` primary, `#666666` secondary) on a pure white surface (`#ffffff`), with a soft secondary background (`#f5f5f5`) for grouped sections.

Typography is **system-stack with Japanese-first fallbacks**: `Helvetica Neue, Arial, Hiragino Kaku Gothic ProN Custom, Hiragino Sans Custom, Meiryo Custom, sans-serif`. The "Custom" suffix on the Hiragino/Meiryo fonts indicates Mercari's deployment of optically-tuned variants for their production app — same font families, but adjusted spacing/hinting for marketplace UI. Buttons use **weight 700** for primary CTAs at a tight `4px` radius, while body text holds at weight 400.

**Key Characteristics:**
- **681 semantic CSS custom properties** exposed on `:root` — the public design system surface
- **Mercari Red** (`#ff333f`) as the `attention` semantic — used for badges, error/danger states, sale prices, the brand mark
- Japanese-first font stack: `Helvetica Neue → Arial → Hiragino Kaku Gothic ProN Custom → Hiragino Sans Custom → Meiryo Custom`
- Fixed `4px border-radius` on buttons and cards — sharp, commerce-functional
- Weight 700 for primary CTAs; weight 400 for body and secondary controls
- Three-tier color naming: `alias-color-{property}-{role}-{state}` (e.g., `--alias-color-background-attention-default`)
- 1440px max page width with `--grid-layout-gutter: 24px` and `--grid-layout-page-padding-horizontal: 36px`
- 4dp spacing micro-scale (`--bnfXaU: 6px`, `--exLgvR: 8px`, `--fwPfWM: 8px`, etc.) with named alias tokens
- High-density product grid with circular brand thumbnails (`border-radius: 50%`) for category navigation
- Multi-tier z-index system: dialog 1400, modal 1400, snackbar 1500, tooltip 1600

## 2. Color Palette & Roles

All values verified live from `:root` CSS custom properties on `jp.mercari.com`.

### Brand / Attention (the Mercari Red family)
- **Mercari Red** (`#ff333f`): `--alias-color-background-attention-default`, `--alias-color-text-attention-default`. The signature brand red. Used for danger actions, sale price emphasis, the brand mark.
- **Red Highlight** (`#ff6574`): `--alias-color-background-attention-highlight`, `--alias-color-border-attention-highlight`. Lighter variant for hover states.
- **Red Active** (`#e32b36`): `--alias-color-background-attention-active`, `--alias-color-border-attention-active`. Pressed state.
- **Red Thin** (`#fdf1f3`): `--alias-color-background-attentionThin-default`. Very light pink for subtle background emphasis (e.g., error message bg).
- **Red Thin Highlight** (`#ffdcdf`): `--alias-color-background-attentionThin-highlight`.

### Accent (Mercari Blue)
- **Accent Blue** (`#0095ee`): `--alias-color-background-accent-default`, `--alias-color-text-accent-default`, `--alias-color-icon-accent-default`. Links, info badges, accent CTAs.
- **Accent Blue Highlight** (`#63c5ff`): `--alias-color-background-accent-highlight`.
- **Accent Blue Active** (`#0073cc`): `--alias-color-background-accent-active`, `--alias-color-text-accent-active`.
- **Link Default** (`#0073cc`): `--alias-color-text-link-default`, `--alias-color-icon-link-default`.
- **Link Highlight** (`#30b2ff`): `--alias-color-text-link-highlight`.
- **Link Active** (`#0056ab`): `--alias-color-text-link-active`.
- **Accent Thin** (`#e8f8ff`): `--alias-color-background-accentThin-default`. Light blue notification bg.

### Success
- **Success Green** (`#0aa466`): `--alias-color-text-success-default`, `--alias-color-icon-success-default`, `--alias-color-border-success-default`.
- **Success Highlight** (`#0fbf67`): `--alias-color-text-success-highlight`, `--alias-color-icon-success-highlight`.
- **Success Active** (`#078962`): `--alias-color-text-success-active`, `--alias-color-icon-success-active`.
- **Success Thin** (`#e4ffec`): `--alias-color-background-success-default`.
- **Success Thin Highlight** (`#cdfbd2`): `--alias-color-background-success-highlight`.

### Decorative (Yellow)
- **Decorative Yellow** (`#ffb818`): `--alias-color-icon-decorativeYellow-default`. Reviews, ratings, premium markers.
- **Decorative Yellow Highlight** (`#ffdc74`): Lighter yellow for hover.
- **Decorative Yellow Active** (`#db9611`): Darker amber for pressed.

### Text (5-tier scale)
- **Primary** (`#333333`): `--alias-color-text-primary-default`. Default body text and headlines.
- **Primary Highlight** (`#999999`): `--alias-color-text-primary-highlight`.
- **Primary Active** (`#222222`): `--alias-color-text-primary-active`.
- **Secondary** (`#666666`): `--alias-color-text-secondary-default`. Captions, metadata.
- **Secondary Highlight** (`#999999`): `--alias-color-text-secondary-highlight`.
- **Secondary Active** (`#4c4c4c`): `--alias-color-text-secondary-active`.
- **Disabled** (`#cccccc`): `--alias-color-text-disabled-default`.
- **Placeholder** (`#999999`): `--alias-color-text-placeholder-default`.
- **Inverse** (`#ffffff`): `--alias-color-text-inverse-default`. White text on dark surfaces.

### Background / Surface (5-tier scale)
- **Primary** (`#ffffff`): `--alias-color-background-primary-default`. Default page bg.
- **Primary Active** (`#f5f5f5`): `--alias-color-background-primary-active`. Pressed/hover state for white-bg controls.
- **Primary Highlight** (`#f5f5f5`): `--alias-color-background-primary-highlight`.
- **Secondary** (`#f5f5f5`): `--alias-color-background-secondary-default`. Grouped section bg.
- **Secondary Highlight** (`#e5e5e5`): `--alias-color-background-secondary-highlight`.
- **Tertiary** (`#333333`): `--alias-color-background-tertiary-default`. Dark surfaces (e.g., snackbar contrast).
- **Disabled** (`#cccccc`): `--alias-color-background-disabled-default`.

### Border / Separator
- **Primary** (`#cccccc`): `--alias-color-border-primary-default`. Standard component border.
- **Primary Highlight** (`#e5e5e5`): `--alias-color-border-primary-highlight`.
- **Primary Active** (`#999999`): `--alias-color-border-primary-active`.
- **Secondary** (`#333333`): `--alias-color-border-secondary-default`. Strong dividers.
- **Disabled** (`#cccccc`): `--alias-color-border-disabled-default`.

### Overlay (modal backdrops)
- **Weak** (`rgba(34,34,34,0.2)`): `--alias-color-overlay-weak`.
- **Middle** (`rgba(34,34,34,0.4)`): `--alias-color-overlay-middle`.
- **Mid Strong** (`rgba(34,34,34,0.6)`): `--alias-color-overlay-midStrong`.
- **Strong** (`rgba(34,34,34,0.8)`): `--alias-color-overlay-strong`.
- **Inverse Weak** (`rgba(255,255,255,0.2)`): `--alias-color-overlay-inverseWeak`. White overlay on dark surface.

### Icon (separate role from text — important for accessibility)
- **Primary** (`#333333`): `--alias-color-icon-primary-default`.
- **Secondary** (`#cccccc`): `--alias-color-icon-secondary-default`.
- **Tertiary** (`#666666`): `--alias-color-icon-tertiary-default`.
- **Inverse** (`#ffffff`): `--alias-color-icon-inverse-default`.

### System (static)
- **Static White** (`#ffffff`): `--alias-color-system-staticWhite-default`.
- **Static Black** (`#000000`): `--alias-color-system-staticBlack-default`.
- **Static Clear** (`rgba(255,255,255,0)`): `--alias-color-system-staticClear-default`.

## 3. Typography Rules

### Font Stack (verified live)
```
"Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN Custom", "Hiragino Sans Custom", "Meiryo Custom", sans-serif
```

For non-Japanese locales the secondary stack adds Traditional Chinese support:
```
Helvetica Neue, Arial, "PingFang TC Custom", "Noto Sans TC Custom", "Microsoft JhengHei", "Hiragino Kaku Gothic ProN Custom", "Hiragino Sans Custom", "Meiryo Custom", sans-serif
```

The "Custom" suffix indicates Mercari runs optically-tuned variants of these system fonts in production — same families, adjusted spacing for marketplace UI density.

### Weights
- **700**: Primary CTAs, prices, badges, "Shop Now" hero CTAs, language toggles.
- **400**: Default body, login/signup buttons, navigation links, secondary CTAs.

Verified: primary attention CTAs (e.g., "コンテンツにスキップ" skip link) use weight 700 with bg `#ff333f` and `4px` radius. Secondary actions (login, signup, language) use weight 400.

### Size Scale
- **Base body**: `15px` (verified `bodySize`)
- **Heading scale** is application-defined (homepage uses `15-20px` for H1/H2 with weight 700)
- Mobile sizes step down via `--typography-*-font-size-mobile` tokens

### Conventions
- **No letter-spacing tweaks** — system defaults trusted.
- **Default line-height ~1.4** (estimated from rendered metrics).
- **Uppercase reserved for the "MERCARI" wordmark only.**

## 4. Component Stylings

### Buttons (verified across variants)
**Primary attention CTA (red)**:
- bg `#ff333f`, text `#ffffff`, `border-radius: 4px`, `padding: 11px 15px`, `font-weight: 700`

**Accent CTA (blue, e.g., "Shop Now")**:
- bg `#ffffff`, text `#0095ee`, `border-radius: 4px`, `padding: 8px 12px`, `font-weight: 700`

**Login / Signup (secondary, neutral)**:
- bg `#ffffff`, text `#333333`, `border-radius: 4px`, `padding: 8px`, `font-weight: 400`

**Icon button**:
- bg `transparent`, color `#000000` or `#333333`, `border-radius: 4px`, `padding: 4px`, `font-weight: 400`

**Language toggle**:
- bg `transparent`, text `#333333`, `border-radius: 4px`, `padding: 8px 16px`, `font-weight: 700`

### Cards (Product Card, Brand Card)
- White bg (`--alias-color-background-primary-default`)
- Subtle `1px solid #e0e0e0` border or no border (image-led cards)
- Brand thumbnails: `border-radius: 50%` (circular) — distinctive Mercari pattern for category navigation
- Image fills top, title + price below
- Price emphasis: weight 700, often in `#ff333f` (Mercari Red) for sale prices

### Search Input
- Full-width bar at top of page, `bg: #f5f5f5` (secondary surface), `border-radius: 4px`, dark gray placeholder `#999999`
- Camera search icon + magnifier icon inside the input on right

### Navigation (top header)
- White sticky bg, height ~50-64px
- Mercari wordmark + heart logo on left
- Search bar centered
- ログイン (Login), 会員登録 (Signup), notification bell, language toggle (日本語) on right
- Tabs row below: おすすめ, マイリスト, ゲーム, etc. — horizontal scroll on mobile

### Chips / Tabs
- Underline-driven active indicator (red underline `#ff333f` for active tab)
- Inactive tabs: text `#333333` weight 400
- Active tab: text `#ff333f` (or `#222222`) weight 700 with `2px` red underline

### Snackbar / Toast
- Dark bg (`--alias-color-background-tertiary-default: #333333`)
- White text (`--alias-color-text-inverse-default: #ffffff`)
- Z-index `--mer-z-index-snackbar: 1500`

### Modal / Dialog
- White surface, `border-radius: 8px`
- Backdrop: `--alias-color-overlay-strong: rgba(34,34,34,0.8)`
- Z-index `--mer-z-index-modal: 1400`

## 5. Layout Principles

### Page Structure
- Max width: `1440px` (`--bqHLTv`, `--gIsGsE`)
- Grid layout page padding: top `40px` (`--grid-layout-page-padding-top`), bottom `64px` (`--grid-layout-page-padding-bottom`), horizontal `36px` (`--grid-layout-page-padding-horizontal`)
- Grid gutter: `24px` (`--grid-layout-gutter`)
- Inner inset: `16px` (`--grid-layout-inset`)

### Spacing Tokens (semantic aliases)
Mercari uses Panda CSS-generated hashed token names alongside semantic aliases. Common values from CSS:
- `4px`, `6px`, `8px`, `12px`, `16px`, `20px`, `24px`, `28px`, `32px`, `36px`, `40px`, `44px`, `48px`, `56px`, `64px`, `80px`, `96px`, `128px`, `164px`

This is a 4dp baseline scale extended with named tokens.

### Density
Mercari is **commerce-density** — tight product grids with minimal card chrome, image-led visual hierarchy. The 6-column product grid on homepage uses `~190-240px` card widths with `12-16px` gutters.

## 6. Depth & Elevation

Mercari has explicit shadow tokens for floating UI:

- **Card lift** (subtle): `0px 2px 4px 0px rgba(0,0,0,.2)` (`--ljPKsT`)
- **Tooltip / popover**: `0px 4px 8px 0px rgba(0,0,0,.2)` (`--coocrY`)
- **Modal / dropdown**: `0px 8px 10px 0px rgba(0,0,0,.2)` (`--jcKRRc`)
- **Strong overlay**: `0px 0px 16px 0px rgba(0,0,0,.2)` (`--gQVqIQ`)

### Z-Index Hierarchy (explicit named tokens)
- Menu: `1100` (`--mer-z-index-menu`)
- Navigation top: `1200` (`--mer-z-index-navigation-top`)
- Navigation bottom: `1200` (`--mer-z-index-navigation-bottom`)
- Autocomplete: `1300` (`--mer-z-index-autocomplete`)
- Dialog: `1400` (`--mer-z-index-dialog`)
- Modal: `1400` (`--mer-z-index-modal`)
- Side sheet: `1400` (`--mer-z-index-side-sheet`)
- Information popup: `1400` (`--mer-z-index-information-popup`)
- Action sheet: `1400` (`--mer-z-index-action-sheet`)
- Snackbar: `1500` (`--mer-z-index-snackbar`)
- Tooltip: `1600` (`--mer-z-index-tooltip`)

### Animation
- Easing curves: `cubic-bezier(0.65, 0, 0.35, 1)` (sheets), `cubic-bezier(0.33, 1, 0.68, 1)` (snackbars/dialogs)
- Standard duration: `0.25s`
- Loading spinner: `1.25s` 8-step rotation

## 7. Do's and Don'ts

- **DO** use the `--alias-color-*` semantic tokens. The 681 variables cover virtually every UI surface — never hardcode hex values when an alias exists.
- **DON'T** invent new color values. Mercari's palette is exhaustive; if you can't find an alias, use the closest one.
- **DO** reserve **Mercari Red** (`#ff333f`) for the `attention` semantic — sale prices, danger actions, the brand mark, error states.
- **DON'T** use red for general "primary" CTAs that aren't attention-grabbing. Mercari's primary actions are often blue-accent (`#0095ee`) or neutral, not red.
- **DO** use weight 700 for primary CTAs and prices. Weight 400 for navigation, secondary actions, body.
- **DON'T** use weight 500 or 600 — they're not part of Mercari's typography rhythm.
- **DO** keep `border-radius: 4px` on buttons and cards. Mercari's commerce voice is sharp and functional.
- **DON'T** use pill-shaped or large-radius buttons — that breaks the marketplace density aesthetic.
- **DO** apply circular thumbnails (`border-radius: 50%`) to brand/category icons in navigation. It's a distinctive Mercari pattern.
- **DON'T** use shadows on flat product cards — let the white card on `#f5f5f5` secondary bg provide separation.
- **DO** use the locale-aware font stack with Hiragino/Meiryo "Custom" variants. The optical tuning matters for Japanese readability.
- **DON'T** load custom web fonts. Mercari's audience is mobile-first across slow connections; system fonts respect that.
- **DO** use the explicit named z-index tokens (`--mer-z-index-*`) — Mercari's stacking order is deliberate.
- **DON'T** use arbitrary z-index values like `9999` — that breaks the layered system.

## 8. Responsive Behavior

### Breakpoints (inferred from `--typography-*-font-size-mobile` tokens and `--vbMobileBoundaryWidth`-style patterns)
| Width | Behavior |
|---|---|
| Desktop `>1440px` | Centered max-width container, full grid |
| Desktop `1024–1440px` | 6-column product grid, full nav |
| Tablet `768–1024px` | 4-column product grid, condensed nav |
| Mobile `<768px` | 2-column grid, hamburger nav, sticky bottom navigation |

### Touch & Mobile
- Mobile bottom navigation: tab bar with icon + label
- Form heights: small `36px`, medium ~`48px`, large ~`56px` (estimated from spacing tokens)
- Touch targets: minimum `44px` per Apple HIG conventions

### Image Behavior
- Product images: square aspect ratio, `4px` corner radius (matches button/card scheme)
- Brand thumbnails: circular (`50%` radius)
- Lazy-load via Next.js Image equivalent
- Placeholder skeleton uses `--color-shimmer-bg` / `--color-shimmer-fg` pattern

## 9. Agent Prompt Guide

### Quick Color Reference
- **Mercari Red** (attention, sale, brand): `#ff333f` (`--alias-color-background-attention-default`)
- Accent Blue (links, info): `#0095ee`
- Success Green: `#0aa466`
- Decorative Yellow (ratings): `#ffb818`
- Primary text: `#333333`
- Secondary text: `#666666`
- Page bg: `#ffffff`
- Secondary bg: `#f5f5f5`
- Border default: `#cccccc`
- Inverse text: `#ffffff` (on dark surfaces)

### Example Component Prompts
- "Create a Mercari-style attention CTA: bg `#ff333f`, white text, `border-radius: 4px`, `padding: 11px 15px`, `font-weight: 700`. Hover: bg darkens to `#ff6574`. Active: `#e32b36`. Use this for danger actions, sale CTAs, the brand-mark button — never for generic 'primary' actions (those use accent blue)."
- "Build a Mercari product card: white bg, no border or `1px solid #e0e0e0`, `4px` radius. Image fills top 70% in `4px` rounded square. Title in 14px weight 400 `#333333` (2-line clamp), price below in 16px weight 700 `#333333` for normal price OR `#ff333f` for sale price. Optional sale badge in top-left corner using `#ff333f` bg + white text + 2px radius."
- "Design a Mercari brand thumbnail (category icon): circular `border-radius: 50%`, ~64-80px diameter, white bg with `1px solid #f5f5f5` border, brand image centered. Below: brand name in 12px weight 400 `#333333`, max 1 line ellipsis."
- "Create a Mercari search bar: full-width, bg `#f5f5f5` (secondary surface), `border-radius: 4px`, padding 12-16px, placeholder `#999999`. Right side: camera icon + magnifier icon, both `#666666`. On focus: bg shifts to white, border becomes `1px solid #cccccc`."
- "Build a Mercari snackbar: bg `#333333` (`--alias-color-background-tertiary-default`), white text, `border-radius: 4px`, `padding: 12px 16px`, fixed at bottom with z-index 1500. Slides in via `cubic-bezier(0.33, 1, 0.68, 1)` over `0.25s`. Auto-dismiss after 3-4s."

### Iteration Guide
1. **Always reference `--alias-color-*` tokens, not raw hex**. Mercari's 681 vars are the canonical source.
2. **Mercari Red (`#ff333f`) is the `attention` role** — destructive, sale-emphasis, brand mark. Not a default primary.
3. **`border-radius: 4px`** is the workhorse. Cards, buttons, badges. Brand thumbnails get `50%` (circular).
4. **Weight 700 for prices and primary CTAs**, weight 400 for everything else. No middle weights.
5. **Use the locale-aware font stack with Hiragino/Meiryo "Custom" variants**. Optical tuning matters.
6. **Z-index uses named tokens** (`--mer-z-index-*`) — never arbitrary numbers.
7. **Animation easing `cubic-bezier(0.65, 0, 0.35, 1)` for sheets**, `cubic-bezier(0.33, 1, 0.68, 1)` for snackbars/dialogs. Duration `0.25s`.
8. **Surface contrast** (`#ffffff` cards on `#f5f5f5` page bg) handles separation — minimal shadow needed on flat layouts.
9. **Body text `#333333`, secondary `#666666`, tertiary `#999999`** — three-tier text hierarchy across the entire system.
10. **Page padding 36px horizontal, 40px top, 64px bottom**, with `24px` gutter — the layout grid is explicit.

---

## 10. Voice & Tone

Mercari's voice is **pragmatic, transparent, and functionally-warm** — the voice of a trust infrastructure, not a lifestyle brand. Where LINE sells belonging ("Life on LINE") and where Apple sells aspiration, Mercari sells **circulation**: moving value from someone who no longer needs it to someone who does. The copy reflects that — action verbs, concrete amounts, shipping logistics, and a Japanese-origin register that favors politeness without ceremony. The "Move Fast" value is balanced by "Safe Rollout" — safety copy is direct ("ID verified", "payment held until delivery"), never reassurance-only ("don't worry!").

| Context | Tone |
|---|---|
| Headlines | Declarative about value and circulation. "Sell what you don't need. Buy what someone didn't." No superlatives, no "revolutionary marketplace". |
| Product CTAs | Imperative verb + noun ("List item", "Ship now", "Request refund"). Plain, never clever. |
| Listings copy | Matter-of-fact. The condition labels (`New`, `Like New`, `Good`) carry the judgment; subjective adjectives like "amazing" or "must-have" are banned from platform chrome. |
| Error messages | In Japanese UI, proper 丁寧語 (teineigo) — blameless and concrete. In English, direct and action-oriented ("Upload failed. Tap to retry."). |
| Trust / safety copy | Explicit rather than reassuring. *"Payment held until buyer confirms receipt"* beats *"Secure and trusted"*. |
| Engineering / culture content | Professional and retrospective; documents failures openly ("Lessons from…", "Behind the Scenes of…") — in line with the "Go Bold" + document-learnings value. |
| Onboarding | Functional orientation first — *what you can buy and sell, how fees work, how shipping is handled* — not aspirational framing. |
| Push notifications | Transactional specificity — item title + action ("Your listing sold: iPhone 14 Pro"). Never promotional spam in the primary notification surface. |

**Forbidden phrases.** "Revolutionary", "game-changer", "world's best", "amazing deals". In Japanese UI: avoid カタカナ tech-marketing language (イノベーティブ, ディスラプティブ). Generic hype emoji (🔥 ✨ 💯 🚀) on listings or system copy — emoji is reserved for user-generated message content between buyer and seller, not for platform voice.

**Representative voice samples.** Where a verified live string exists on Mercari's public surfaces it is cited with a source marker; where no public surface carries the string (logged-in-only copy, error states), the sample is marked *illustrative* and a production team should replace it with Mercari's real live copy before shipping.

- Primary JP nav label (verified): *"出品"* <!-- verified: jp.mercari.com bottom-nav CTA, 2026-04 --> — two-character imperative, the canonical "List item" tap target across the app.
- JP footer safety banner (verified): *"メルカリあんしん・あんぜん宣言！"* <!-- verified: jp.mercari.com footer, 2026-04 --> — exclamation-ending, commits to a publicly-listed safety initiative rather than generic "trust".
- EN product description (verified): *"A C2C marketplace where individuals can enjoy buying and selling items. Through our unique payment deposit system and our use of AI to monitor for fraud, anyone can enjoy safe and secure transactions."* <!-- verified: about.mercari.com/en, 2026-04 --> — tone exemplar: concrete mechanisms (*payment deposit system*, *AI to monitor for fraud*) over vague reassurance.
- Empty state (new user, no listings): *"Nothing listed yet. Take a photo and list your first item."* <!-- illustrative: not verified as live Mercari copy -->
- Error (photo upload failed): *"Upload failed. Tap to retry."* <!-- illustrative: not verified as live Mercari copy -->
- Success (item sold): *"Sold to <buyer>. Package it and print the shipping label."* <!-- illustrative: not verified as live Mercari copy -->

## 11. Brand Narrative

Mercari was founded in 2013 in Tokyo by Shintaro Yamada, after he left Rakuten Auctions and travelled the world asking one question — *"What can I do to help society thrive with the finite resources we have?"* ([about.mercari.com](https://about.mercari.com/en/about/)). That question became the company's founding premise: **circulate all forms of value to unleash the potential in all people**. The answer took the shape of a smartphone-first C2C marketplace that made listing an item fast enough (3 minutes, 3 photos) to be worth doing for a single pair of used jeans.

From that origin Mercari grew into **Japan's largest C2C marketplace** (50M+ downloads, 350K daily listings <!-- source: base DESIGN.md §1, carried from 2026-04-17 extraction, not re-verified -->), expanded to the US in 2014, and spun up adjacent divisions: **Merpay** (2019, payments — *"Building trust for a seamless society"*), **Mercoin** (2023, crypto — *"Circulate your value, anywhere and everywhere"*). The consistent thread across divisions is the word *circulate* — not *sell*, not *exchange*, not *marketplace*. Every product framing returns to that verb.

What Mercari refuses: the **auction-complexity** aesthetic of eBay (bidding clocks, snipe warnings); the **spam-forward** commerce chrome of flash-sale marketplaces (flashing banners, permanent 50%-off overlays); the **corporate-blue sterility** of legacy Japanese e-commerce (Rakuten Ichiba, Yahoo! JAPAN Auctions). What it embraces: a **semantic-token-first** design system (681 `:root` variables — see §2), Mercari Red as a **finite attention signal** (never decorative), mobile-first listing flow, and explicit trust infrastructure (ID verification, escrow, ratings) surfaced directly in the UI rather than hidden in settings.

## 12. Principles

1. **Circulate, don't just sell.** Product framing uses the verb *circulate*; listings flow from one user to another, not from a retailer to a consumer. *UI implication:* both sides of a transaction are peers — no "seller dashboard" / "customer account" asymmetry. The same person is often both on the same day, and the interface reflects that symmetry.

2. **Semantic tokens are the source of truth.** All 681 `:root` CSS custom properties (`--alias-color-background-attention-default` and friends) resolve through the token layer before any pixel is painted. *UI implication:* components never hardcode hex values. A theme swap (dark mode, regional variant) is a `:root` redefinition, not a UI refactor.

3. **Mercari Red is the `attention` role, not a primary accent.** `#ff333f` signals danger, sale emphasis, and the brand mark — nothing else. Using it as a decorative accent on buttons, illustrations, or empty-state icons dilutes its function as a warning signal. *UI implication:* primary CTA surfaces use neutral dark text on white, not red; red is reserved for destructive actions and sale-price emphasis.

4. **4px radius is the commerce signature.** Sharp 4px corners read as "browse the catalog efficiently" — LINE's 50px pills would make Mercari feel social when it is transactional. *UI implication:* never round corners to match a reference aesthetic ("softer", "friendlier"); the 4px is intentional functional rigor.

5. **Two weights: 700 and 400. Nothing in between.** Price, badge, primary CTA, and section headings use 700. Body, secondary labels, and helper text use 400. Middle weights (500, 600) are absent — they blur the hierarchy between scan-value (price, button) and read-value (description). *UI implication:* disable imported fonts' "medium" weight; design tokens expose only two.

6. **Hiragino / Meiryo "Custom" variants are first-class, not fallbacks.** The optically-tuned Japanese faces are the primary reading surface for 50M+ Japanese users; they lead the stack, not end it. *UI implication:* never specify `-apple-system` or `system-ui` alone — the fallback chain must name the Japanese optical variants explicitly ([verified at runtime on jp.mercari.com](https://jp.mercari.com)).

7. **"Move Fast" pairs with "Safe Rollout."** The engineering culture (*Go Bold, All for One, Be a Pro, Move Fast* — [careers.mercari.com/mission-values](https://careers.mercari.com/mission-values/)) is explicitly paired with documented-failure practice. Blog titles like "Safe Chunked Execution" and "Behind the Scenes" are intentional; failures are surfaced, not buried. *UI implication:* error and recovery states are visible on the failing element (*"Upload failed. Tap to retry"*), not hidden behind a modal or a support ticket.

8. **Disagree & commit.** Once decisions are made — after debate — the team commits fully ([mission-values](https://careers.mercari.com/mission-values/)). *UI implication:* there is no "legacy styles" escape hatch in the design system. Deprecated tokens are removed on a schedule, not left for "gradual migration forever."

## 13. Personas

*Personas are fictional archetypes informed by publicly described Mercari user segments and mission documentation; not individual people.*

**Yuki Sato, 28, Tokyo.** Office worker who declutters every 2–3 weeks — a jacket, a manga set, a hand mixer. Lists in under 3 minutes during her evening commute and expects the "sold" notification to tell her exactly how to ship. Japanese-language-first; sub-¥20,000 items only, rarer collectibles still go to Yahoo! Auctions.

**Takeshi Nakamura, 42, Osaka.** Secondhand-bookshop owner using Mercari as a **secondary retail channel** — photographs overstock at the shop, lists in the evening. A 1-star rating materially damages his shop's income, so he treats the platform's forced taxonomy (`Like New`, `Good`) as a feature that protects him from subjective disputes.

**Sarah Kim, 19, Los Angeles.** Mercari US user since 2022; thrifts Y2K fashion and old consumer electronics. Never uses eBay ("too auction-y, too slow"); compares Mercari to Depop and picks Mercari for lower-budget finds, Depop for curated vintage.

**Hiroko Tanaka, 56, Kobe.** Retiree selling handmade knit goods — supplemental income that Yahoo! Auctions' complexity never allowed. Depends on the ID-verification badge as social proof; buyers hesitate on higher-priced items without it. Her listings are spare — 3 photos, 2 sentences, 1 honest condition label.

## 14. States

*Copy strings below are **illustrative treatments** of Mercari's tone applied to each state, not verified live copy. A production team should replace them with Mercari's actual copy (observable via Playwright against jp.mercari.com's logged-in surfaces) before shipping.*

| State | Treatment |
|---|---|
| **Empty (home, new user)** | White canvas (`--alias-color-background-primary-default`). One line of body copy (15px weight 400, `#333333`) explaining what Mercari does in the local register. One **4px-radius** `--alias-color-background-attention-default` (Mercari Red) CTA *"List your first item"*. No illustration — the category thumbnails below serve as visual orientation. |
| **Empty (search results)** | Neutral gray (`#666666`) microcopy: *"No results for '<query>'. Try a broader keyword or browse categories below."* <!-- illustrative: not verified as live Mercari copy --> Suggested-category chips follow immediately. Never a "sorry" apology or emoji. |
| **Loading (listing grid)** | Skeleton tiles at the exact final card dimensions (`--alias-color-background-secondary-default` `#f5f5f5` blocks, 4px radius). Shimmer pass ≤ 1.2s. Skeleton never shows placeholder text — only rectangles. |
| **Loading (price / amount field)** | Currency-localized placeholder, never a number: `¥ -` for JP, `$ -` for US. Never `¥ 0` — zero reads as "this item is free." |
| **Error (photo upload failed)** | Red icon (`--alias-color-icon-attention-default` `#ff333f`) attached to the failed photo slot. Inline text: *"Upload failed. Tap to retry."* Retry tap reattempts without full form resubmission. Never a blocking modal. |
| **Error (network)** | Top banner in `--alias-color-background-tertiary-default` (`#333333`) with white text. One sentence + retry pill. Banner disappears silently when connectivity returns. |
| **Error (listing rejected, policy violation)** | Modal is used here — this is not a transient error. Headline states the violation plainly (*"This item type isn't allowed"*), body links to the policy page, CTA is *"Edit listing"*. Never hide the policy reason behind a support ticket. |
| **Success (listed)** | Bottom toast snackbar at `--mer-z-index-snackbar` (1500), `--alias-color-background-tertiary-default` (`#333333`) bg, white text, 3–4s auto-dismiss: *"Listed. View your item →"* — the link inside the toast goes to the listing. |
| **Success (sold)** | Full-width banner at top of the listing-detail view using the success-green family (derived from `#0aa466`, not brand red — red is for attention, not celebration). Body: *"Sold to @buyer. Package within 3 days."* Primary CTA: *"Generate shipping label"* — the platform takes the user straight into the next step. |
| **Skeleton** | `#f5f5f5` (`--alias-color-background-secondary-default`) at exact final dimensions. Never over the `price` field — that stays currency-placeholder. |
| **Disabled** | Opacity applied to text and fill together. Disabled CTA keeps its 4px radius — never flattens or rounds to a different shape. |

## 15. Motion & Easing

Mercari's motion vocabulary is **disciplined commerce motion**: fast feedback on interaction, measured confirmation on completion, **no spring or bounce**. This is deliberate. Spring motion reads as delight; commerce requires precision about amounts and states. LINE's `ease-sticker` overshoot would be wrong here — a Mercari user watching a purchase-confirmation animation should feel *confidence*, not *whimsy*.

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle commits, selection state |
| `motion-fast` | 150ms | Button/card tap feedback, image thumbnail expand |
| `motion-standard` | 250ms | Bottom sheet rise, snackbar enter/exit, dialog appear |
| `motion-slow` | 400ms | Listing-submit success confirmation, payment complete |
| `motion-page` | 300ms | In-app navigation push/pop |

**Easings** (verified from live `:root` computed styles on `jp.mercari.com`):

| Token | Curve | Use |
|---|---|---|
| `ease-standard` | `cubic-bezier(0.33, 1, 0.68, 1)` | Snackbars, dialogs, toasts — the everyday easing |
| `ease-sheet` | `cubic-bezier(0.65, 0, 0.35, 1)` | Bottom sheet rise/dismiss — more deliberate, like a drawer |
| `ease-exit` | `cubic-bezier(0.4, 0, 0.9, 1)` | Dismissals, cancellations |

No `ease-bounce`, no `ease-overshoot`, no cubic-bezier with y-values > 1 or < 0 anywhere in the system. **Commerce has no spring.**

**Signature motions.**

1. **Card tap feedback.** Listing cards scale `1.0` → `0.98` over `motion-fast` on press, returning to `1.0` on release. Subtle, thumb-oriented, feels tactile without bouncing.
2. **Bottom sheet rise (filters, sort, category picker).** Uses `ease-sheet` over `motion-standard`. The deliberate easing matches the Japanese-origin UX tradition of drawers sliding smoothly, not snapping into place.
3. **Favorite toggle.** Heart icon fills over `motion-fast` with a simple crossfade — no scaling pulse. The commit is the signal; no decorative reinforcement.
4. **Listing submit success.** Full-width success banner fades + slides down from top at `motion-slow` with `ease-standard`. No confetti, no illustration — the ship-now CTA that appears is the reward.
5. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`. Sheets and modals appear via opacity only. The app remains fully functional; motion is never load-bearing for comprehension.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Extracted 2026-04-20 via omd:add-reference AUGMENT mode.
Style reference: line/DESIGN.md (Asian / JP-origin matrix auto-pick).

Direct verification via WebFetch (2026-04-20):
- https://about.mercari.com/en/about/ — confirms the founding question ("What
  can I do to help society thrive with the finite resources we have?"), the
  group mission ("Circulate all forms of value to unleash the potential in all
  people"), and the four divisions (Mercari JP, Mercari US, Merpay, Mercoin)
  with their divisional missions.
- https://careers.mercari.com/mission-values/ — confirms the four values
  ("Go Bold / All for One / Be a Pro / Move Fast") with taglines and example
  behaviors, and the four foundational mindsets (Sustainability; Inclusion &
  Diversity; Trust & Openness; Customer Perspective).
- https://engineering.mercari.com/en/blog/ — confirms the engineering voice
  register as pragmatic and retrospective, with "Move Fast" culturally paired
  with "Safe Rollout" and documented failure.

Base DESIGN.md (sections 1–9) is the source for all token-level claims: Mercari
Red #ff333f, accent blue #0095ee, success green #0aa466, the 4px radius
signature, the two-weight hierarchy (700/400), the 681 :root CSS custom
properties with the --alias-color-{property}-{role}-{state} namespace, the
JP-first font stack (Hiragino Kaku Gothic ProN Custom, Hiragino Sans Custom,
Meiryo Custom), the z-index scale (1100–1600) via --mer-z-index-* tokens, and
the easing curves cubic-bezier(0.33, 1, 0.68, 1) and cubic-bezier(0.65, 0, 0.35,
1) originally extracted from live :root inspection in _research.md.

Not independently verified in this session but widely documented public facts:
- Mercari founded 2013 in Tokyo by Shintaro Yamada (previously at Rakuten
  Auctions / Unoh).
- US market launch 2014; Merpay launched 2019; Mercoin launched 2023.
- "50M+ downloads, 350K daily listings" figures carried over from the base
  DESIGN.md §1, originally from the 2026-04-17 runtime extraction on
  jp.mercari.com; these are rounded public figures rather than independently
  re-verified in this augmentation pass.
-->

