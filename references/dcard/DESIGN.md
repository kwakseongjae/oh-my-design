# Design System Inspiration of Dcard

## 1. Visual Theme & Atmosphere

Dcard is Taiwan's largest anonymous social platform — and its design system is an exemplar of **Material Design adapted for East-Asian forum culture**. The page chrome is wrapped in a deep teal-navy (`#00324e`) header bar that frames a **clean light-gray content surface** (`#f2f2f2`), inside which posts sit on **pure white cards** (`#ffffff`). This editorial framing — dark exterior, clean interior — distinguishes Dcard from the all-light Western social platforms (Reddit, Facebook) and the all-dark gamer-chic alternatives. It feels closer to a curated digital magazine than an open feed.

Typography is **Roboto-led** with comprehensive Traditional Chinese fallbacks (`Roboto, "Helvetica Neue", Helvetica, Arial, "PingFang TC", 黑體-繁, "Heiti TC", 蘋果儷中黑, "Apple LiGothic Medium", 微軟正黑體, "Microsoft JhengHei"`). Headlines use **weight 500 (medium)**, not 700 — a Material Design convention that creates hierarchy through subtle weight shifts and color (`rgba(0,0,0,0.85)` for primary text). The typography scale is exhaustive: 4 headline tiers (32/28/24/20px), title (18px/600), 2 subtitles (16/14px/500), 2 body sizes (16/14px/400), and 2 caption sizes (12/10px/500).

What truly distinguishes Dcard is the **breadth of its semantic token system**. The site exposes 200+ CSS custom properties on `:root`, organized into clear namespaces: `--color-dcard-*` for brand, `--color-state-*` for status, `--color-text-*` for foreground, `--color-bg-*` for surfaces, `--color-gender-*` for forum-specific identity colors (a unique reflection of Dcard's gender-tagged posting culture), `--shadow-level-1` through `--shadow-level-5` for elevation, `--vars-*` for layout sizing, and `--animations-*` for motion. This isn't an internal-only design system — it's a public, semantically-named token layer that any agent can read directly from the live site.

**Key Characteristics:**
- Roboto-led typography stack with full Traditional Chinese (`PingFang TC`, `Heiti TC`, `微軟正黑體`) fallbacks
- **Weight 500 (medium)** as the headline default — Material Design convention, not bold-700
- 200+ semantic CSS custom properties exposed on `:root` (effectively a public design system)
- Deep teal-navy header (`#00324e`) framing a light-gray content area (`#f2f2f2`) with white post cards
- Blue-monochrome brand palette: primary `#3397cf`, secondary `#006aa6`, tertiary `#00324e`
- 5-level Material elevation shadow system (`--shadow-level-1` to `--shadow-level-5`)
- Material Design easing curve: `cubic-bezier(.4, 0, .2, 1)` with `.15s` short / `.3s` medium durations
- Unique **gender-coded color tokens** (`--color-gender-female: #cb3a6b`, `--color-gender-male: #1c7fac`) reflecting forum culture
- **Gold premium accent** (`#ffc51b`) reserved for subscription/premium features
- **Topic purple** (`#bf8ff0`) for cross-cutting interest groups
- 8px border-radius is the default (buttons, cards, chips); `--vars-max-page-width: 1280px` with 728px main content + 300px aside

## 2. Color Palette & Roles

Dcard exposes its color system via CSS custom properties on `:root`. All values below are extracted directly.

### Brand
- **Dcard Primary** (`#3397cf`): `--color-dcard-primary`. Main brand blue. Used for primary CTAs (Download App), brand icons, link accents.
- **Dcard Primary Hover** (`#5ab0db`): `--color-dcard-primary-hover`. Lighter blue for hover states.
- **Dcard Secondary** (`#006aa6`): `--color-dcard-secondary`. Deeper supporting blue, used in search submit buttons and active states.
- **Dcard Tertiary** (`#00324e`): `--color-dcard-tertiary`. The signature deep teal-navy. Used as the page header bg, sidebar hover bg (`--color-bg-sidebar-hover: #032133`), and brand chrome.
- **Dcard Hint** (`#e7f3f9`): `--color-dcard-hint`. Very light blue tint for hover backgrounds and subtle highlights.
- **Dcard Premium** (`#ffc51b`): `--color-dcard-premium`. Gold for premium subscribers and paid features.
- **Dcard Premium Hover** (`#ffd558`): `--color-dcard-premium-hover`.

### State (Status)
- **Success** (`#49bd69`): `--color-state-success`. Hover `#6fc985`, active `#339653`.
- **Danger** (`#ea5c5c`): `--color-state-danger`. Hover `#f78c88`, active `#c44347`.
- **Reminder / Warning** (`#f0a955`): `--color-state-reminder`. Hover `#f0b941`, active `#da9246`.

### Backgrounds (Surfaces)
- **Bg Base 1** (`#f2f2f2`): `--color-bg-base-1`. Default page content background — the gray frame inside the navy header.
- **Bg Base 2** (`#ffffff`): `--color-bg-base-2`. Card surface, post background.
- **Bg Base 3** (`#ffffff`): `--color-bg-base-3`. Same as base 2; reserved for layered cards.
- **Bg Light** (`#ffffff`): `--color-bg-light`. Pure white, modal/dropdown surfaces.
- **Bg Dark** (`#000000`): `--color-bg-dark`. Reserved for inverted contexts.
- **Bg Container** (`#0000000d`): `--color-bg-container`. Black 5% — chip backgrounds on light surfaces.
- **Bg Special** (`#f0b941`): `--color-bg-special`. Same as reminder hover — used for promotional/sponsored chips.
- **Bg Topic** (`#bf8ff0`): `--color-bg-topic`. Lavender-purple for topic tags (cross-cutting interest groups).
- **Bg Snackbar** (`#2c2c2c`): `--color-bg-snackbar`. Dark gray for toast notifications.
- **Bg Sidebar Hover** (`#032133`): `--color-bg-sidebar-hover`. Slightly darker than tertiary for sidebar item hover.
- **Bg Chip on Dark** (`#ffffff14`): `--color-bg-chip-on-dark`. White 8% for chips on the navy header.
- **Bg Spotlight** (`#00000059`): `--color-bg-spotlight`. Black 35% — modal backdrop.
- **Bg Sign-up Overlay** (`#000000b3`): `--color-bg-sign-up-overlay`. Black 70% — full-page CTA overlay.
- **Bg Btn Disabled** (`#e0e0e0`): `--color-bg-btn-disabled`.
- **Shimmer Bg / Fg** (`#f2f2f2` / `#fafafa`): Loading skeleton colors.

### Text (Foreground)
- **Text Primary** (`#000000d9`): `--color-text-primary`. Black at 85% opacity. Used for headings, post titles, primary body text.
- **Text Secondary** (`#00000080`): `--color-text-secondary`. Black at 50%. Captions, timestamps, metadata.
- **Text Hint** (`#00000059`): `--color-text-hint`. Black at 35%. Placeholder hints.
- **Text Disabled** (`#0003`): `--color-text-disabled`. Black at 20%.
- **Text Light Primary** (`#ffffff`): `--color-text-light-primary`. White text on the navy header.
- **Text Light Secondary** (`#ffffff8c`): `--color-text-light-secondary`. White at 55% on dark surfaces.
- **Text Light Hint** (`#fff6`): `--color-text-light-hint`. White at 40%.
- **Text Dark Primary / Secondary**: Same as primary / secondary, semantic aliases.
- **Text Default Hovered** (`#00000059`): `--color-text-default-hovered`.

### Borders & Separators
- **Border** (`#cacaca`): `--color-border`. Standard component border (inputs, dividers).
- **Border Disabled** (`#e0e0e0`): `--color-border-disabled`.
- **Separator** (`#0000001a`): `--color-separator`. Black 10% — row dividers on light surfaces.
- **Separator on Dark** (`#ffffffb3`): `--color-separator-on-dark`. White 70% — separators on the navy header.

### Gender-Coded (Unique to Dcard)
A reflection of Dcard's posting culture, where many forums (女孩 / 男生 / 心情) display gender-tagged author chips:
- **Female** (`#cb3a6b`): `--color-gender-female`. Light variant `#f48fb1`.
- **Male** (`#1c7fac`): `--color-gender-male`. Light variant `#81d4fa`.
- **Other** (`#2c2c2c`): `--color-gender-other`. Light variant `#e0e0e0`.

### Icon & Misc
- **Icon Button** (`#000000b3`): `--color-icon-button`. Black 70% — default icon color on light surfaces.
- **Crop Mask** (`#000000b3`): `--color-crop-mask`. Modal/crop UI backdrop.
- **Brand Sponsor Hovered** (`#fcd46d`): `--color-brand-sponsor-hovered`. Sponsored content highlight.

## 3. Typography Rules

### Font Stack
```
Roboto, "Helvetica Neue", Helvetica, Arial, "PingFang TC", 黑體-繁, "Heiti TC", 蘋果儷中黑, "Apple LiGothic Medium", 微軟正黑體, "Microsoft JhengHei", sans-serif
```

Roboto leads (Material Design convention), with full Traditional Chinese fallbacks for native rendering on TW/HK Chrome environments.

### Type Scale (verified from `:root` CSS custom properties)

| Role | Token | Size | Weight | Line Height |
|---|---|---|---|---|
| Headline 1 | `--typography-headline-1-font-size` | `32px` (mobile `30px`) | `500` | `42px` (mobile `40px`) |
| Headline 2 | `--typography-headline-2-font-size` | `28px` (mobile `24px`) | `500` | `40px` (mobile `33px`) |
| Headline 3 | `--typography-headline-3-font-size` | `24px` (mobile `20px`) | `500` | `28px` |
| Headline 4 | `--fonts-headline-4-font-size` | `20px` | `500` | `28px` |
| Title | `--typography-title-font-size` | `18px` | `600` | `25px` |
| Subtitle 1 | `--typography-subtitle-1-font-size` | `16px` | `500` | `22px` |
| Subtitle 2 | `--typography-subtitle-2-font-size` | `14px` | `500` | `20px` |
| Body 1 | `--typography-body-1-font-size` | `16px` | `400` | `22px` |
| Body 1 (lh-28 variant) | `--typography-body-1-lh-28-font-size` | `16px` | `400` | `28px` (article reading) |
| Body 2 | `--typography-body-2-font-size` | `14px` | `400` | `20px` |
| Caption | `--typography-caption-font-size` | `12px` | `500` | `17px` |
| Caption 2 | `--typography-caption-2-font-size` | `10px` | `500` | `16px` |

### Conventions
- **Weight 500 (medium)** is the headline default — never weight 700/800 like commerce or news sites. Material Design heritage.
- **Title is the only weight-600 tier** — used sparingly for section headers in modals and editors.
- **Body uses weight 400** — captions and small labels jump to weight 500 to remain readable at small sizes.
- **Mobile sizes step down by ~20%** for headlines but stay identical for body and below.
- **Line-heights are generous** (1.3–1.4× ratio for body, ~1.4× for headlines) — supports CJK glyph density.

## 4. Component Stylings

### Buttons
**Default radius**: `8px` (verified across multiple button variants on the site).

| Variant | Bg | Text | Notable |
|---|---|---|---|
| Primary CTA (Download App) | `#3397cf` (`--color-dcard-primary`) | `#ffffff` | Weight 500, 14px |
| Secondary CTA (search submit) | `#006aa6` (`--color-dcard-secondary`) | `#ffffff` | Often joined to input → `border-radius: 0px 4px 4px 0px` |
| Counter / Action (584, 179 likes) | transparent | `rgba(0,0,0,0.5)` | 8px radius, 14px weight 500 |
| Disabled | `#e0e0e0` (`--color-bg-btn-disabled`) | secondary text | |

Padding patterns: `1px 14px` (small), `8px 20px` (medium for search submit).

### Cards (Post Entry)
- White bg (`#ffffff` = `--color-bg-base-2`)
- Sit on the gray content background (`#f2f2f2`) → contrast handles separation, no border needed
- `--vars-min-post-list-section-width: 728px` defines the main feed width
- `--vars-post-entry-padding: 20px` for inner spacing
- `--vars-post-entry-thumbnail-size: 84px` for inline thumbnails
- Cross-post variants use `--vars-post-entry-cross-post-thumbnail-size: 66px`
- Forum cards have explicit dimensions: `--vars-forum-card-width: 146px`, `--vars-forum-card-height: 110px`

### Header / Navigation
- **Header**: `--vars-header-height: 48px`, `--vars-header-padding: 20px`, bg `#00324e` (tertiary), white text
- **Logo + Search + Sign In/Up + Download App**: horizontal layout
- **Search input**: White bg, pill-leaning corners (left 0px, right 8px when joined with submit)
- **Left Sider** (forum nav): `--vars-my-page-sider-width: 208px`, light bg, icon + text rows
- **Right Aside** (widgets/ads): `--vars-forum-aside-section-width: 300px`, `--vars-forum-aside-section-gap: 10px`

### Tabs (All / Following)
- Underline-driven indicator
- Active tab: text color `--color-text-primary` (`#000000d9`)
- Inactive: `--color-text-secondary` (`#00000080`)
- Tab header height: `--vars-tabview-header-height: 48px`

### Chips / Topics
- Topic chips: bg `#bf8ff0` (`--color-bg-topic`), white text — lavender accent
- Sponsor/special chips: bg `#f0b941` (`--color-bg-special`)
- On-dark chips: bg `#ffffff14` (`--color-bg-chip-on-dark`)
- Topic spacing: `--vars-topic-gap: 8px`
- Topic list height: `--vars-topic-list-height: 60px`

### Snackbar / Toast
- Bg `#2c2c2c` (`--color-bg-snackbar`)
- White text (`--color-text-light-primary`)
- Bottom positioning: `--vars-toast-bottom: 0px`, `--vars-toast-width: 250px`
- With bottom bar: `--vars-snackbar-bottom-with-bottom-bar: 16px`

### Modals
- Post modal: `--vars-post-modal-width: 728px`
- Comment modal: `--vars-comment-modal-width: 720px`
- Backdrop: `--color-bg-spotlight` (`#00000059`) or `--color-mask` (`#0006`)

### Sign-Up Overlay
- Full-page bg: `--color-bg-sign-up-overlay` (`#000000b3`, black 70%)
- Triggers after scroll/engagement to encourage account creation

## 5. Layout Principles

### Page Structure
- **Max page width**: `--vars-max-page-width: 1280px`
- **Three-column layout**:
  - Left sider (forum nav): `208px` (`--vars-my-page-sider-width`)
  - Main content (post list): `728px` (`--vars-min-post-list-section-width`)
  - Right aside (widgets/ads): `300px` (`--vars-forum-aside-section-width`)
- Sections gap: `--vars-forum-sections-gap: 12px`

### Spacing
- **Header padding**: `20px`
- **Post entry padding**: `20px`
- **Post view padding**: `20px` vertical, `24px` horizontal
- **Post list section padding**: `20px` vertical, `24px` horizontal
- **Columns item horizontal**: `24px`
- Content title height: `60px` (`--vars-my-page-content-title-height`)

### Density
Dcard is **medium-density**. Posts are visually distinct (white card on gray bg), but the 728px main column packs efficiently — title + preview + thumbnail + actions in a single horizontal row at desktop sizes. Not as dense as Pinkoi commerce, not as airy as Medium articles.

## 6. Depth & Elevation

Dcard uses a **Material Design-style 5-level shadow system**, all keyed off black with low alpha for soft, neutral elevation.

| Level | Token | Value | Use |
|---|---|---|---|
| 1 | `--shadow-level-1` | `0px 1px 6px -2px #00000052` | Subtle lift (chips, hover cards) |
| 2 | `--shadow-level-2` | `0px 2px 8px -1px #0003` | Default card, dropdown |
| 3 | `--shadow-level-3` | `0px 3px 12px #0000002e` | Elevated card, popover |
| 4 | `--shadow-level-4` | `0px 4px 16px #00000029` | Modal, sticky bar |
| 5 | `--shadow-level-5` | `0px 6px 24px #0000001f` | Highest elevation: dialogs, full-screen overlays |

Note: Most post cards on the feed sit **flat without shadow** — the content area (`#f2f2f2`) provides separation against white cards via contrast. Shadows are reserved for genuinely floating elements.

### Z-Index
- Header is sticky and sits above content
- Modals use `--color-bg-spotlight` backdrop
- Sign-up overlay (`--color-bg-sign-up-overlay`) sits above all chrome
- Toast/snackbar at the highest level

### Animation
- Easing: `--animations-bezier: cubic-bezier(.4, 0, .2, 1)` — Material Design standard easing curve
- Short duration: `--animations-short-duration: .15s` (hover, press)
- Medium duration: `--animations-medium-duration: .3s` (page transitions, accordions)

## 7. Do's and Don'ts

- **DO** use weight 500 (medium) for headlines. Dcard never goes weight 700 — Material Design convention.
- **DON'T** use weight 700 except in legacy or one-off display contexts.
- **DO** use the semantic color token namespace: `--color-dcard-*` for brand, `--color-state-*` for status, `--color-text-*` for foreground, `--color-bg-*` for surfaces.
- **DON'T** introduce ad-hoc hex values. Dcard's 200+ tokens cover virtually every UI surface.
- **DO** wrap the page in the deep navy header (`#00324e`) and place content on the gray base (`#f2f2f2`) with white cards. The chrome/content contrast is the brand signature.
- **DON'T** use white-on-white nesting — the `#f2f2f2` content layer is what separates white cards visually.
- **DO** use `8px border-radius` as the default for buttons, cards, and chips.
- **DON'T** use 4px or sharp corners — Dcard's softer 8px radius is the brand's tactile signature.
- **DO** use `--shadow-level-2` (`0px 2px 8px -1px #0003`) for default cards that need elevation. Use higher levels only for genuinely floating UI.
- **DON'T** apply heavy shadows to feed posts — let the gray/white contrast separate them.
- **DO** use the gender colors (`--color-gender-female`, `--color-gender-male`, `--color-gender-other`) for author chips on gender-tagged posts. This is a culturally significant part of Dcard's UX.
- **DON'T** use gender colors for non-author contexts — it conflates identity with status.
- **DO** reserve gold (`#ffc51b`, `--color-dcard-premium`) for premium/subscription features only.
- **DON'T** use premium gold for warnings or general highlights — it weakens the subscription signal.
- **DO** use Material easing `cubic-bezier(.4, 0, .2, 1)` with `.15s` for hover/press and `.3s` for page transitions.
- **DON'T** use bouncy/elastic easing — Dcard's motion is restrained and platform-native.

## 8. Responsive Behavior

### Breakpoints (inferred from mobile-specific tokens)
Dcard provides explicit mobile typography sizes via `--typography-*-font-size-mobile` tokens, indicating a clear breakpoint at the tablet/mobile boundary (typically 768px in Material conventions).

| Width | Behavior |
|---|---|
| Desktop `>1280px` | Centered max-width container, three-column layout (208 / 728 / 300) |
| Desktop `1024–1280px` | Three-column compresses, asides may collapse |
| Tablet `768–1024px` | Right aside hidden, two-column (sider + main) |
| Mobile `<768px` | Single column. Headlines step down: H1 32px → 30px, H2 28px → 24px, H3 24px → 20px |

### Touch & Mobile
- Bottom navigation height token: `--vars-bottom-navigation-height: 0px` on web (used in app webviews)
- Safe area inset: `--safe-area-inset-bottom: 0px` (notch handling)
- Forum hero image: `--vars-forum-hero-image-height: 243px`

### Media Caps
- `--vars-max-post-media-vh: 60vh` — embedded videos/images cap at 60% viewport height
- Cover image: `width: 100%`, `object-fit: cover`, `height: 100%` (`--mixins-cover-image-*`)

### Text Truncation
- Single-line ellipsis: `--mixins-ellipsis-overflow: hidden; --mixins-ellipsis-text-overflow: ellipsis; --mixins-ellipsis-white-space: nowrap`
- Multi-line clamp: `--mixins-multi-ellipsis-display: -webkit-box`, `--mixins-multi-ellipsis--webkit-box-orient: vertical`, `--mixins-multi-ellipsis--webkit-line-clamp: 1`
- Line-clamp value can be customized per component

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: `--color-dcard-primary` (`#3397cf`); hover `#5ab0db`
- Secondary CTA: `--color-dcard-secondary` (`#006aa6`)
- Page chrome (header bg): `--color-dcard-tertiary` (`#00324e`)
- Page content bg: `--color-bg-base-1` (`#f2f2f2`)
- Card / surface: `--color-bg-base-2` (`#ffffff`)
- Primary text: `--color-text-primary` (`#000000d9`, black 85%)
- Secondary text: `--color-text-secondary` (`#00000080`, black 50%)
- Border: `--color-border` (`#cacaca`)
- Separator: `--color-separator` (`#0000001a`, black 10%)
- Premium: `--color-dcard-premium` (`#ffc51b`) — subscription only
- Topic accent: `--color-bg-topic` (`#bf8ff0`)
- Success / Danger / Reminder: `#49bd69` / `#ea5c5c` / `#f0a955`

### Example Component Prompts
- "Create a Dcard-style post card: white bg (`#ffffff`), no border, no radius (sits on gray `#f2f2f2` page bg). Inner padding 20px. Layout: avatar (40px circle) + forum name (12px weight 500 colored per forum) + timestamp (12px weight 500 `#00000080`) on top row, post title H4 size (20px weight 500 `#000000d9`) on second row, body preview (14px weight 400 `#00000080` 2-line clamp), inline thumbnail (84px), action buttons (heart/comment/save/share) at bottom."
- "Build a Dcard primary button: bg `#3397cf`, white text, 8px border-radius, 14px weight 500, padding `8px 20px`. Hover: bg `#5ab0db`. Active: darken further. No shadow. Transition: `background .15s cubic-bezier(.4, 0, .2, 1)`."
- "Design the Dcard header: full-width sticky bar, height 48px, bg `#00324e` (tertiary navy), white logo on left (28px height), search input center (white bg, 8px radius left side, joined search submit `#006aa6` on right with `0px 8px 8px 0px` radius), Sign in/Sign up text link + Download App button (`#3397cf` bg, white text, 8px radius) on right."
- "Create a topic chip: bg `#bf8ff0` (lavender purple), white text, 12px weight 500, 8px radius, padding `4px 10px`. Use only for cross-cutting topics (e.g., '#study tips', '#dating advice')."
- "Build a sign-up overlay CTA: full-page absolute overlay with `#000000b3` (black 70%) bg, centered content card (white, 8px radius, `0px 6px 24px #0000001f` shadow level 5), heading 'From school to work, find your resonance on Dcard.' (24px weight 500 `#000000d9`), subhead 14px weight 400 `#00000080`, two buttons: Sign in (white border ghost) + Sign up (`#3397cf` filled). Triggers after 2 scroll lengths."

### Iteration Guide
1. **Always reference CSS variables, not hex values** — Dcard's design system is its `:root` token layer. `--color-dcard-primary` is more durable than `#3397cf`.
2. **Default headline weight is 500, never 700**. Dcard is Material Design-aligned.
3. **`8px` radius everywhere** (buttons, cards, chips). Don't use 4px or pill shapes.
4. **Wrap page in `#00324e` chrome + content on `#f2f2f2` + white cards** — this is the visual signature.
5. **Five shadow levels exist (`--shadow-level-1` to `-5`)** — use level 2 for cards by default, escalate only for floating UI.
6. **Roboto first, then Traditional Chinese fallbacks** — never hardcode `font-family` without including the TC stack.
7. **Material easing `cubic-bezier(.4, 0, .2, 1)`** with `.15s` (hover/press) or `.3s` (transitions). Don't use bounce.
8. **Gender colors (`--color-gender-*`) only for author chips** on gender-tagged forums (女孩/男生/感情). Never repurpose.
9. **Premium gold (`#ffc51b`) only for subscription/premium UI**. It's a finite signal.
10. **Three-column layout 208 / 728 / 300** at desktop. Right aside drops first on tablet, sider drops on mobile.
