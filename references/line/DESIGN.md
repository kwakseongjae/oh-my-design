# Design System Inspiration of LINE

## 1. Visual Theme & Atmosphere

LINE is the messaging platform that anchors daily life across Japan, Taiwan, Thailand, and Indonesia, and its visual identity reflects exactly that role — confident, friendly, instantly recognizable. The page chrome is bright white with the famous **LINE Green** (`#07b53b`) reserved for the brand mark and the most important interactive moments. Headlines are oversized and bold (`Life on LINE` renders at 70px weight 700, in near-black `#1e1e1e`), creating a high-contrast editorial feel that matches LINE's positioning as a media-style super-app rather than a utility messenger.

The signature interaction primitive is the **fully pill-shaped button** (`border-radius: 50px`) — used for category filters, navigation chips, and CTAs. This is LINE's tactile fingerprint: every clickable surface curves into a complete oval, signaling approachability and a touch-friendly design heritage. Contrast this with Pinkoi's sharp 4px corners or Dcard's modest 8px Material radii — LINE's pill-shape is unmistakably its own.

Typography is **multi-locale system fonts** with the global SF Pro foundation: `SFPro, Arial, "Noto Sans JP", "Noto Sans KR", sans-serif`. The Korean and Japanese fallbacks are first-class — LINE serves localized markets where native font rendering is non-negotiable. There is no custom brand typeface; instead, weight 700 and large display sizes do the visual work. Body text starts at a generous 20px (vs. typical 14-16px), reinforcing the editorial, content-forward atmosphere of LINE's marketing surfaces.

**Key Characteristics:**
- LINE Green (`#07b53b`) reserved for the brand mark and primary "selected" / active states
- Pill-shaped controls: `border-radius: 50px` is the workhorse on buttons, category chips, and navigation
- Weight 700 dominant on headlines (H2 70px, H3 40px), buttons, and category labels
- Editorial-scale hero typography — display headlines 40-70px, body 20px (much larger than commerce sites)
- Locale-aware font stack: `SFPro, Arial, Noto Sans JP, Noto Sans KR` — Japanese and Korean as first-class fallbacks
- Dimmed inactive states via alpha — `rgba(30, 30, 30, 0.7)` for unselected pills (vs. solid `#1e1e1e` active)
- White surface background with bright green accents — never dark mode or muted palettes for the marketing chrome
- Subtle grid: oversized hero images with vertical scroll narrative (services listed below the hero)
- "Life on LINE" voice: aspirational, lifestyle-led, not utility-functional

## 2. Color Palette & Roles

### Brand
- **LINE Green** (`#07b53b`): The signature brand color. Used as button bg for the active/selected state, brand iconography, the LINE logo bubble. RGB: `rgb(7, 181, 59)`.
- **LINE Green Dark** (`#069030`): Inferred hover/pressed state — darker variant for press feedback (estimated, not officially confirmed).
- **Pure White** (`#ffffff`): Default page surface, pill button text on green bg.

### Text & Foreground
- **Near Black** (`#1e1e1e`): Primary headline color, active pill label, body emphasis.
- **Pure Black** (`#000000`): Body text default.
- **Inactive Label** (`rgba(30, 30, 30, 0.7)`): Unselected pill labels, secondary text.
- **Tertiary** (`rgba(30, 30, 30, 0.4)`): Hint text, muted captions (estimated).

### Surface
- **Page White** (`#ffffff`): Default background. LINE marketing rarely uses gray surfaces — content sits on white with rich imagery providing visual interest.
- **Image Overlay**: Hero sections layer text on full-bleed photography; no card chrome required.

### Sectional / Service Brand Accents
LINE products span Communication / Entertainment / Lifestyle / Shopping / Fintech / Business / News categories. Each LINE service (LINE NEWS, LINE MUSIC, LINE Pay, etc.) carries its own accent color in product UIs. Marketing surfaces stay green-anchored; product UIs may use service-specific palettes.

### Swiper Defaults (carousel UI)
- **Swiper Theme** (`#007aff`): iOS system blue used for carousel navigation arrows (`--swiper-theme-color`).
- **Swiper Nav Size**: `44px` (`--swiper-navigation-size`) — touch-friendly circular controls.

## 3. Typography Rules

### Font Stack
```
SFPro, Arial, "Noto Sans JP", "Noto Sans KR", sans-serif
```

LINE leads with `SFPro` (Apple system font) for instant familiarity on iOS/macOS, then falls back to Noto Sans JP and Noto Sans KR for Japanese and Korean content. There is **no custom brand typeface** — system fonts respect each market's native reading habits.

### Weights
- **700 (bold)**: The dominant weight. All headlines, all buttons, all category pills, all emphasis. LINE almost never uses weight 400 or 500 for visible interactive text.
- **400 (regular)**: Reserved for long-form body copy and supporting captions.

### Size Scale (verified live on `line.me`)
| Use | Size | Weight |
|---|---|---|
| Body default | `20px` | 400 |
| Hero subtitle | `20px` | 400-700 |
| H1 (page title) | `20px` | 700 |
| H3 (service names — LINE NEWS, LINE MUSIC) | `40px` | 700 |
| H2 (hero — "Life on LINE") | `70px` | 700 |

The size jumps are aggressive: 20px body → 40px section heads → 70px hero. There is no quiet middle tier (no 24/32 between body and 40). Headlines exist to dominate the viewport, not to fill it.

### Conventions
- **No letter-spacing tweaks** — system defaults trusted.
- **`font-style: italic` not used** in marketing chrome.
- **No tabular numerals** — body type flows naturally.
- **All-caps reserved** for the LINE wordmark itself.

## 4. Component Stylings

### Buttons / Pills (`.productCategory`, generic CTAs)
The signature LINE control. Verified live on `line.me`:

- `border-radius: 50px` — fully pill-shaped (not 4px or 8px — always 50px)
- `padding: 8px 15px` for compact category pills
- `font-weight: 700`, default `font-size: 14-16px`
- **Active state**: bg `#07b53b` (LINE Green), text `#ffffff`
- **Inactive state**: bg `transparent`, text `rgba(30, 30, 30, 0.7)`
- **Hover**: text gains opacity (transitions to `rgba(30, 30, 30, 1)`)
- No shadow, no border on the inactive state

### Hero Sections
- Full-bleed background image (typically lifestyle photography)
- Centered overlay text (white or near-black depending on background contrast)
- Hero CTA below the headline, often using app store badges (Apple, Google Play, Desktop)

### Navigation
- Sticky horizontal header: LINE logo left, page-section nav center, language switcher right
- Active nav link gets a `2px` solid `#1e1e1e` underline accent
- Nav items: `font-weight: 700`, `font-size: 16px`, color `#1e1e1e`
- Background: `#ffffff` with subtle bottom border on scroll

### App Download CTAs
Iconified app store badges (App Store, Google Play, Desktop) instead of textual buttons:
- Square white tiles with thin `1px` border, `~12px` radius
- 56px square (touch-friendly), inline icon for the platform
- Hover: background tints to a very light green or gray

### Scroll Indicators
- Centered "Scroll" label below the hero with a subtle vertical line animation
- Reinforces the magazine-like vertical narrative

## 5. Layout Principles

### Spacing
LINE marketing pages use **vertical sections of generous height** — each service block (LINE NEWS, LINE MUSIC, etc.) takes a full viewport scroll. Section paddings are large (typically 80-120px vertical).

| Use | Padding |
|---|---|
| Pill button | `8px 15px` |
| Section vertical | `80–120px` |
| Hero vertical | `100vh` (full viewport) |

### Grid
- Single-column hero with overlay text
- Service blocks use full-width imagery + centered or left-aligned text overlay
- Footer uses 3-4 column grid for links

### Density
LINE is **low-density, high-impact**. Each viewport scroll reveals one service or one message. Don't pack multiple features into a single fold — let imagery dominate, let typography shout.

## 6. Depth & Elevation

LINE marketing chrome is **almost entirely flat**. Buttons have no shadow. Cards (when used) have no shadow. The visual depth comes from full-bleed photography behind the chrome.

### Where shadow does appear
- **Sticky header on scroll**: very subtle `0 1px 0 rgba(0, 0, 0, 0.1)` bottom border (or inset shadow)
- **Modal / popup**: `0 4px 24px rgba(0, 0, 0, 0.15)` (estimated — LINE rarely uses modals on marketing surfaces)
- **App download icon hover**: subtle lift via `box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08)`

### Z-Index Hierarchy
- Sticky header above scroll content
- Modal/popup above all chrome
- Toast/snackbar at the highest level

### Animation
- Scroll-triggered fade-in for hero text and service blocks
- Pill hover transition: `0.2s ease` color/bg transition
- Image parallax: subtle vertical translate on scroll within hero

## 7. Do's and Don'ts

- **DO** use weight 700 for everything visible — headlines, buttons, pills, nav, captions. LINE doesn't whisper.
- **DON'T** use weight 300 or 400 for interactive text. Buttons that look quiet read as broken in LINE's voice.
- **DO** use pill-shaped buttons (`border-radius: 50px`). This is LINE's tactile signature.
- **DON'T** use 4px, 8px, or any "rectangular" radius for primary CTAs — that breaks the brand language entirely.
- **DO** reserve LINE Green (`#07b53b`) for the brand mark, the active selected state, and the primary "Download LINE" CTA. It's a finite signal.
- **DON'T** use LINE Green for warnings, links, or general accents — it dilutes the brand association.
- **DO** lead with the locale-aware font stack: `SFPro, Arial, Noto Sans JP, Noto Sans KR` — Japanese and Korean as first-class.
- **DON'T** load a custom web font. LINE's audience reads on phones across many markets; system fonts are fastest and most native.
- **DO** use oversized display headlines (40-70px) with high vertical spacing. LINE's marketing is editorial, not utilitarian.
- **DON'T** pack a viewport with multiple competing CTAs. One scroll = one service block = one message.
- **DO** dim inactive UI with alpha (`rgba(30, 30, 30, 0.7)`) instead of swapping to a different gray hex.
- **DON'T** introduce shadow to flatten interactive controls. LINE chrome is overwhelmingly flat — depth comes from photography.

## 8. Responsive Behavior

### Breakpoints (inferred from line.me layout shifts)
| Width | Behavior |
|---|---|
| Desktop `>1024px` | Full nav visible, hero at 70px, services full-width with overlay text |
| Tablet `768–1024px` | Nav condenses, hero shrinks to ~50px, service blocks stack |
| Mobile `<768px` | Hamburger nav, hero scales to ~40px, service blocks become full-mobile views |

### Touch & Mobile
- Pill buttons stay touch-friendly at all sizes (min `44px` tappable height per Apple HIG)
- App download badges remain prominent on mobile (top of fold)
- Image-heavy hero sections gracefully crop on portrait orientation

### Image Behavior
- Hero photography: full-bleed, lazy-loaded, art-directed for desktop vs. mobile crops
- Service icons: vector SVG (LINE NEWS, LINE MUSIC, LINE Pay icons all single-color or 2-tone)
- Carousel (`swiper`-based): horizontal scroll with `44px` circular nav arrows in `#007aff`

## 9. Agent Prompt Guide

### Quick Color Reference
- LINE Green (brand / active CTA): `#07b53b` (`rgb(7, 181, 59)`)
- Headline / active text: `#1e1e1e`
- Inactive text: `rgba(30, 30, 30, 0.7)`
- Body text: `#000000` (or `#1e1e1e`)
- Page bg: `#ffffff`
- Carousel theme: `#007aff` (iOS system blue)

### Example Component Prompts
- "Create a LINE-style category pill: `border-radius: 50px`, `padding: 8px 15px`, `font-weight: 700`, `font-size: 14px`. Active state: bg `#07b53b`, white text. Inactive: transparent bg, `rgba(30, 30, 30, 0.7)` text. No shadow, no border. Smooth `0.2s ease` transition on color/bg."
- "Build a LINE hero: full-viewport white bg with full-bleed lifestyle photography behind. Centered headline 'Life on LINE' at 70px weight 700 color `#1e1e1e` (or white if photo is dark). Subhead at 20px weight 400 below. Three app download icon tiles (Apple, Google, Desktop) — 56px squares, `12px` radius, thin border, no fill."
- "Design a LINE service card: full-bleed product screenshot on left, oversized `40px` weight 700 service name (e.g., 'LINE NEWS') on right with brand accent color, supporting copy at 20px weight 400 below. No card chrome — section uses background color contrast for separation."
- "Create a LINE sticky nav: white bg, 56-64px height, LINE logo wordmark left, horizontal pill nav center (active item gets `#1e1e1e` 2px underline), language switcher (globe icon + locale code) right. On scroll, add a subtle `0 1px 0 rgba(0, 0, 0, 0.1)` bottom shadow."
- "Build a LINE 'Download Now' primary CTA: `border-radius: 50px`, bg `#07b53b`, white text, `font-weight: 700`, `padding: 16px 32px`, `font-size: 18px`. Hover: bg darkens to `#069030`. Active: scale `0.98`. Add LINE icon (the speech bubble) to the left of the text label."

### Iteration Guide
1. **Always default to weight 700** for visible interactive text. LINE never whispers.
2. **Pill radius (50px) is non-negotiable** for buttons and chips — it's the brand signature.
3. **LINE Green (`#07b53b`) is rare** — use it for the brand mark, the single primary CTA, and the active "selected" state. Nothing else.
4. **Use the locale-aware font stack with Noto Sans JP and Noto Sans KR** in the fallback chain — never hardcode a single Latin-only font family.
5. **Body type is 20px** (not 14-16px). Editorial scale, not utility scale.
6. **Hero typography 40-70px** at weight 700. No middle tier between 20px and 40px — LINE's hierarchy jumps.
7. **No shadow on the modern button system** — depth comes from photography behind the chrome, not from elevation primitives.
8. **Use alpha (`rgba(30, 30, 30, 0.7)`) for inactive states**, not a different gray hex. Maintains color-family coherence.
9. **One viewport = one message** — let each service block breathe with full-screen vertical sections.
10. **Service-specific color accents** (LINE NEWS green, LINE MUSIC pink, etc.) belong inside product UIs — marketing chrome stays green-anchored.
