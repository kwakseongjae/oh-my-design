# Design System Inspiration of freee

## 1. Visual Theme & Atmosphere

freee is Japan's leading cloud accounting / HR / payroll SaaS, and its design system **Vibes** is fully open-source at [github.com/freee/vibes](https://github.com/freee/vibes). The token files (`stylesheets/lv0/_colors.scss`, `_size.scss`, `_fonts.scss`) form a clean, semantic, three-tier architecture: **scale tokens** (`$vbColorsP01`–`P10` for primary blues, `S01`–`S10` for grayscale, etc.), **semantic tokens** (`$vbPrimaryColor`, `$vbAccentColor`, `$vbAlertColor`), and **component tokens** (line-height, font sizes mapped to typography roles). This is the cleanest token architecture among the OMD references — and it's all readable from one place.

The brand is anchored in a **deep enterprise blue** (`#285ac8`, `$vbColorsP07`) — calm, trustworthy, financial-software professional. A lighter accent blue (`#73a5ff`, `$vbColorsP04`) handles secondary emphasis. The color system extends across 9 hue families (Primary, Secondary/gray, Red, Orange, Yellow, Yellow-Green, Green, Blue-Green, Purple, Gray) with each having 5-10 calibrated shades, giving designers a complete palette for status, illustrations, and category coding.

Typography is a Japanese-first system stack: `-apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'ヒラギノ角ゴ ProN', Hiragino Kaku Gothic ProN, Arial, 'メイリオ', Meiryo, sans-serif`. The brand wordmark uses Noto Sans CJK JP Medium loaded explicitly as `freee-logo`. The type scale is a tight 5-step rhythm (10 / 12 / 14 / 16 / 24dp), with mobile sizes stepping down for headline tiers. Spacing follows a consistent 4dp baseline (4 / 8 / 16 / 24 / 32 / 48dp).

**Key Characteristics:**
- **Open-source design system** ([freee/vibes](https://github.com/freee/vibes)) with three-tier token architecture (scale → semantic → component)
- Enterprise blue brand: `#285ac8` primary (`$vbColorsP07`), `#73a5ff` accent (`$vbColorsP04`)
- 9-hue palette: Primary (P), Secondary/gray (S), Red (RE), Orange (OR), Yellow (YE), Yellow-Green (YG), Green (GR), Blue-Green (BG), Purple (PU), pure Gray (GY)
- Each hue scale has 5-10 calibrated shades (P01 lightest → P10 darkest)
- 4dp baseline spacing scale: `xs 4dp / s 8dp / basic 16dp / large 24dp / xl 32dp / xxl 48dp`
- Tight 5-step type scale: `10 / 12 / 14 / 16 / 24dp` — no display extremes, no middle gaps
- Form-control heights as design tokens: `small 24dp / basic 36dp / large 48dp`
- Container max-width `1120dp` (`70rem`) — wider than Bootstrap defaults but narrower than Mercari
- Three explicit shadow recipes: card, floating, popup (graduated weights)
- Z-index hierarchy with semantic names: overlay 100 → form actions 200 → floating 500 → full-screen 700 → modal 1000 → popup 2000 → max
- Japanese-first font stack with Hiragino Kaku Gothic ProN as the primary CJK fallback

## 2. Color Palette & Roles

All values extracted from `stylesheets/lv0/_colors.scss` in the open-source [freee/vibes](https://github.com/freee/vibes) repo (vibes_2021).

### Primary Blue (`$vbColorsP01–P10`)
- `#ebf3ff` (P01) — lightest tint, page background hint
- `#dce8ff` (P02) — light surface, badge bg
- `#aac8ff` (P03) — light accent
- `#73a5ff` (P04) — **`$vbAccentColor`** (accent, hover for primary)
- `#2864f0` (P05) — bright primary
- `#3264dc` (P06) — primary mid
- `#285ac8` (P07) — **`$vbPrimaryColor`** (primary actions, links, brand)
- `#1e46aa` (P08) — primary dark
- `#23418c` (P09) — primary darker
- `#143278` (P10) — primary darkest

### Secondary / Neutral (`$vbColorsS01–S10`)
- `#f7f5f5` (S01) — `$vbColumnColor` (column / table bg)
- `#f0eded` (S02) — `$vbBaseColor1` (subtle surface 1)
- `#e9e7e7` (S03) — `$vbBaseColor2` (subtle surface 2)
- `#e1dcdc` (S04)
- `#d7d2d2` (S05)
- `#bebaba` (S06)
- `#aaa7a7` (S07)
- `#8c8989` (S08) — `$vbBaseColor3` (mid neutral, captions)
- `#6e6b6b` (S09) — `$vbBurntColor` (text-burnt)
- `#464343` (S10) — darkest neutral

### Status (Red, Orange, Yellow scales)
- **Red** (`RE02 #fad2d7`, `RE04 #f07882`, `RE05 #dc1e32`, `RE07 #a51428`, `RE10 #6e0f19`)
  - `$vbAlertColor: $vbColorsRE05` (`#dc1e32`) — alerts, errors, destructive actions
- **Orange** (`OR02 #ffe1d2`, `OR04 #ffaa78`, `OR05 #fa6414`, `OR07 #be4b0f`, `OR10 #7d320a`)
- **Yellow** (`YE02 #fff0d2`, `YE04 #ffd278`, `YE05 #ffb91e`, `YE07 #be8c14`, `YE10 #825a0f`)
  - `$vbNoticeColor: $vbColorsYE07` (`#be8c14`) — warnings, notices

### Yellow-Green / Green / Blue-Green (success, growth)
- **Yellow-Green** (`YG02 #e6f0d2`, `YG04 #b4dc7d`, `YG05 #82c31e`, `YG07 #50961e`, `YG10 #3c5f14`)
- **Green** (`GR02 #cdebd7`, `GR04 #64be8c`, `GR05 #00963c`, `GR07 #006e2d`, `GR10 #004b1e`) — success
- **Blue-Green / Teal** (`BG02 #cdf0f0`, `BG04 #64d2d2`, `BG05 #00b9b9`, `BG07 #008c8c`, `BG10 #146464`)

### Purple
- `PU02 #e6d7fa`, `PU04 #b482f0`, `PU05 #733ce6`, `PU07 #5a2daa`, `PU10 #3c1e73`

### Pure Gray (`$vbColorsGY01–GY10`)
- `#fbfbfb` (GY01) — page bg highlight
- `#dcdcdc` (GY02)
- `#a0a0a0` (GY04)
- `#5a5a5a` (GY05)
- `#323232` (GY07) — **`$vbBlackColor`** (default text color)
- `#1e1e1e` (GY10) — darkest gray

### Semantic Aliases (the design contracts)
| Semantic | Value | Use |
|---|---|---|
| `$vbPrimaryColor` | `$vbColorsP07` (`#285ac8`) | Primary CTAs, brand actions |
| `$vbAccentColor` | `$vbColorsP04` (`#73a5ff`) | Accent hover, secondary brand |
| `$vbLinkColor` | `$vbColorsP07` (`#285ac8`) | Hyperlinks (matches primary) |
| `$vbColumnColor` | `$vbColorsS01` (`#f7f5f5`) | Table column bg |
| `$vbBaseColor1` | `$vbColorsS02` (`#f0eded`) | Subtle surface 1 |
| `$vbBaseColor2` | `$vbColorsS03` (`#e9e7e7`) | Subtle surface 2 |
| `$vbBaseColor3` | `$vbColorsS08` (`#8c8989`) | Mid neutral text |
| `$vbBurntColor` | `$vbColorsS09` (`#6e6b6b`) | Burnt-out text (de-emphasized) |
| `$vbBlackColor` | `$vbColorsGY07` (`#323232`) | Default text color |
| `$vbAlertColor` | `$vbColorsRE05` (`#dc1e32`) | Alerts, errors, destructive |
| `$vbNoticeColor` | `$vbColorsYE07` (`#be8c14`) | Warnings, notices |
| `$vbBackgroundColor` | `$vbColorsP01` (`#ebf3ff`) | Page tint background |

### Scrim / Overlay
- `$vbScrimColor: rgba(0, 0, 0, 0.5)` — modal backdrop
- `$vbThinScrimColor: rgba(0, 0, 0, 0.12)` — light overlay (e.g., disabled state)

## 3. Typography Rules

### Font Stack
```scss
$vbFontFamily: '-apple-system', BlinkMacSystemFont, 'Helvetica Neue',
  'ヒラギノ角ゴ ProN', Hiragino Kaku Gothic ProN, Arial, 'メイリオ', Meiryo,
  sans-serif;
```

`-apple-system` and `BlinkMacSystemFont` lead for native rendering on macOS/iOS, then Helvetica Neue, then Japanese fallbacks (Hiragino → Meiryo). The brand wordmark uses **Noto Sans CJK JP Medium** loaded explicitly as `font-family: 'freee-logo'` from Google Fonts.

### Type Scale (verified from `_size.scss`)
| Token | Size | Use |
|---|---|---|
| `$vbFontSize0625` | `0.625rem` (10dp) | Smallest icon font |
| `$vbFontSize0750` | `0.75rem` (12dp) | Caption |
| `$vbFontSize0875` | `0.875rem` (14dp) | Normal body, Headline 3 |
| `$vbFontSize1000` | `1rem` (16dp) | Headline 2 |
| `$vbFontSize1500` | `1.5rem` (24dp) | Headline 1 |

### Semantic Typography Tokens
| Token | Value |
|---|---|
| `$vbCaptionFontSize` | `0.75rem` (12dp) |
| `$vbNormalFontSize` | `0.875rem` (14dp) |
| `$vbHeadline3FontSize` | `0.875rem` (14dp) |
| `$vbHeadline2FontSize` | `1rem` (16dp) |
| `$vbHeadline1FontSize` | `1.5rem` (24dp) |

### Mobile Typography (steps down for tablets/phones)
- `$vbMobileHeadline1FontSize: 16dp` (was 24dp)
- `$vbMobileHeadline2FontSize: 14dp` (was 16dp)
- `$vbMobileHeadline3FontSize: 14dp` (unchanged)

### Line Height
- `$vbLineHeight: 1.5` — universal default (generous for CJK readability)

### Conventions
- **No display sizes above 24dp** — freee's voice is utilitarian SaaS, not editorial
- **Body and Headline 3 share 14dp** — visual hierarchy comes from weight + color, not size
- **Mobile compresses everything to 14-16dp** — preserves 1.5 line-height for cramped screens
- **Brand wordmark uses Noto Sans CJK JP Medium** — only place a custom font loads

## 4. Component Stylings

### Form Controls (heights are explicit tokens)
| Token | Height | Use |
|---|---|---|
| `$vbFormControlSmallHeight` | `1.5rem` (24dp) | Compact inputs, dense tables |
| `$vbFormControlHeight` | `2.25rem` (36dp) | Standard input, button |
| `$vbFormControlLargeHeight` | `3rem` (48dp) | Hero CTAs, mobile-friendly forms |

### Buttons
- Primary: bg `#285ac8` (`$vbPrimaryColor`), white text, weight 500-700, default `36px` height (`$vbFormControlHeight`)
- Padding follows the `xs/s/basic` spacing scale: `4px 16px` (small), `8px 16px` (basic), `12px 24px` (large)
- Border-radius: not explicitly tokenized in vibes — components use `4px` as the de facto standard
- Disabled: `$vbThinScrimColor` overlay (`rgba(0,0,0,0.12)`)

### Inputs
- Heights match `$vbFormControlHeight` tokens
- Border: `1px solid $vbBaseColor3` (`#8c8989`)
- Focus: border becomes `$vbPrimaryColor` (`#285ac8`)
- Error: border becomes `$vbAlertColor` (`#dc1e32`), helper text in same red

### Cards / Panels
- Background: white (or `$vbColumnColor: #f7f5f5` for subtle differentiation)
- Border: `1px solid $vbBaseColor2` (`#e9e7e7`)
- Padding: `$vbBasicSize` (16dp) or `$vbLargeSize` (24dp)
- Shadow: `$vbCardShadow` for elevated cards (see §6)

### Tables
- Column bg alternates: white / `$vbColumnColor` (`#f7f5f5`)
- Row dividers: `1px solid $vbBaseColor2` (`#e9e7e7`)
- Header: bold weight, dark text on white
- Compact and dense — freee is enterprise productivity software

### Navigation
- Primary nav: white bg with subtle bottom border, `$vbPrimaryColor` for active link
- Secondary nav: tab-style with underline indicator in `$vbPrimaryColor`

### Status Badges
- Success: `GR02` bg + `GR07` text (`#cdebd7` / `#006e2d`)
- Alert: `RE02` bg + `RE05` text (`#fad2d7` / `#dc1e32`)
- Notice: `YE02` bg + `YE07` text (`#fff0d2` / `#be8c14`)
- Info: `P02` bg + `P07` text (`#dce8ff` / `#285ac8`)

## 5. Layout Principles

### Spacing Scale (verified from `_size.scss`)
| Token | Value | dp |
|---|---|---|
| `$vbMinimum` | `1px` | 1px hairline |
| `$vbXSmallSize` | `0.25rem` | 4dp |
| `$vbSmallSize` | `0.5rem` | 8dp |
| `$vbBasicSize` | `1rem` | 16dp |
| `$vbLargeSize` | `1.5rem` | 24dp |
| `$vbXLargeSize` | `2rem` | 32dp |
| `$vbXXLargeSize` | `3rem` | 48dp |

### Container
- `$vbContainerSize: 70rem` (1120dp) — page max-width
- Mobile breakpoint: `$vbMobileBoundaryWidth: 48rem` (768dp)

### Density
freee is **medium-density enterprise SaaS**. Forms breathe with `16dp` padding. Tables stay tight. Dashboards prefer 24-32dp section gaps. Avoid the high-density commerce aesthetic of Mercari/Pinkoi.

## 6. Depth & Elevation

### Three explicit shadow recipes (from `_colors.scss`)
- **Card** — `$vbCardShadow`:
  ```
  0 0 1rem rgba(0, 0, 0, 0.1),
  0 0.125rem 0.25rem rgba(0, 0, 0, 0.2)
  ```
- **Floating** — `$vbFloatingShadow`:
  ```
  0 0 1.5rem rgba(0, 0, 0, 0.1),
  0 0.25rem 0.5rem rgba(0, 0, 0, 0.2)
  ```
- **Popup** — `$vbPopupShadow`:
  ```
  0 0 2rem rgba(0, 0, 0, 0.1),
  0 0.375rem 0.75rem rgba(0, 0, 0, 0.2)
  ```

Each level uses the same dual-shadow technique (ambient diffuse + directional drop), scaling the radius progressively.

### Z-Index Hierarchy (named tokens)
| Token | Value | Use |
|---|---|---|
| `$vbOverlayZIndex` | `100` | Subtle overlays |
| `$vbFormActionsZIndex` | `200` | Form action bars |
| `$vbFloatingZIndex` | `500` | Floating cards |
| `$vbFullScreenZIndex` | `700` | Full-screen views |
| `$vbModalZIndex` | `1000` | Modals |
| `$vbMessageModalZIndex` | `1500` | Message modals |
| `$vbPopupZIndex` | `2000` | Popups |
| `$vbPopupMessageZIndex` | `3000` | Popup messages |
| `$vbFixedMessageZIndex` | `4000` | Fixed messages |
| `$vbMaxZIndex` | `2147483647` | Maximum (system reserved) |

### Animation
Not explicitly tokenized in `_size.scss` extracted — components use SCSS-default transitions (`0.2-0.3s ease`).

## 7. Do's and Don'ts

- **DO** use the three-tier token system: scale (`$vbColorsP07`) → semantic (`$vbPrimaryColor`) → component-level. Always reference semantic over scale where possible.
- **DON'T** invent new color values. The 9 hue scales × 5-10 shades cover virtually any need.
- **DO** lead with `$vbPrimaryColor` (`#285ac8`) for brand actions and links. It's the same value — links should match buttons in this system.
- **DON'T** use bright accent blue (`$vbAccentColor: #73a5ff`) as a primary CTA. It's reserved for hover states and secondary emphasis.
- **DO** use the named font-size tokens (`$vbHeadline1FontSize`, `$vbNormalFontSize`) instead of raw rem values. The 5-step scale is the contract.
- **DON'T** use display sizes above 24dp. freee is enterprise SaaS — restraint is the voice.
- **DO** apply `$vbLineHeight: 1.5` universally. Japanese readers need generous vertical breathing room.
- **DO** use the locale font stack with `-apple-system` first and Hiragino/Meiryo CJK fallbacks. The brand `freee-logo` font is for the wordmark only.
- **DO** snap to the 4dp spacing scale (4 / 8 / 16 / 24 / 32 / 48). Never use intermediate values like 6, 10, or 14.
- **DON'T** invent custom shadow values — use `$vbCardShadow`, `$vbFloatingShadow`, `$vbPopupShadow` for the three elevation tiers.
- **DO** use the named z-index tokens (`$vbModalZIndex`, `$vbPopupZIndex`, etc.). The hierarchy spans 100 → 4000 with deliberate gaps.
- **DON'T** use arbitrary z-index values like `9999` — that breaks the layered system.
- **DO** use status colors with the matching family (e.g., `RE02` bg + `RE05/RE07` text for alerts).
- **DON'T** mix hue families in a single status badge (e.g., never red bg with orange text).

## 8. Responsive Behavior

### Breakpoint
- `$vbMobileBoundaryWidth: 48rem` (768dp) — single breakpoint between desktop and mobile

### Mobile Adjustments
- All headline sizes step down (`$vbMobileHeadline1FontSize: 16dp` vs. desktop 24dp)
- Form controls remain at the same height tokens (mobile-friendly already at 36-48dp)
- Container width adapts to viewport (no fixed mobile container)

### Touch
- Form controls at `36-48dp` heights = touch-friendly by default
- Buttons inherit form-control heights

### Image Behavior
- Not tokenized in vibes — application-specific
- Brand logo uses the `freee-logo` font for crisp scaling at any size

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA / Link: `#285ac8` (`$vbPrimaryColor` / `$vbColorsP07`)
- Accent (hover, secondary): `#73a5ff` (`$vbAccentColor` / `$vbColorsP04`)
- Default text: `#323232` (`$vbBlackColor` / `$vbColorsGY07`)
- Muted text: `#6e6b6b` (`$vbBurntColor` / `$vbColorsS09`)
- Caption text: `#8c8989` (`$vbBaseColor3` / `$vbColorsS08`)
- Page bg: `#ffffff` (or `#ebf3ff` for tinted bg)
- Subtle surface: `#f0eded` (`$vbBaseColor1`)
- Border default: `#e9e7e7` (`$vbBaseColor2`)
- Alert: `#dc1e32` (`$vbAlertColor`)
- Notice: `#be8c14` (`$vbNoticeColor`)
- Success: `#00963c` (`$vbColorsGR05`)

### Example Component Prompts
- "Build a freee primary button: `36px` height (`$vbFormControlHeight`), bg `#285ac8`, white text, weight 500, padding `8px 16px`, `4px` radius. Hover: bg `#3264dc` (P06). Active: bg `#1e46aa` (P08). Disabled: bg + 12% black overlay (`$vbThinScrimColor`). Use Noto-friendly font stack with Hiragino fallbacks."
- "Create a freee status badge: rounded `4px` corners, `8px 12px` padding, weight 500 12px text. For success: bg `#cdebd7` (GR02) + text `#006e2d` (GR07). For alert: bg `#fad2d7` (RE02) + text `#dc1e32` (RE05). For notice: bg `#fff0d2` (YE02) + text `#be8c14` (YE07). For info: bg `#dce8ff` (P02) + text `#285ac8` (P07)."
- "Design a freee data table: column bg alternates white / `#f7f5f5` (`$vbColumnColor`). Row dividers `1px solid #e9e7e7`. Header row: weight 700 14px text `#323232`, bg `#f0eded`, sticky on scroll. Cell padding `12px 16px`. Selected row: bg `#ebf3ff` (P01)."
- "Build a freee elevated card: white bg, `1px solid #e9e7e7` border, `4px` radius, `24px` padding. Box-shadow: `0 0 1rem rgba(0,0,0,0.1), 0 0.125rem 0.25rem rgba(0,0,0,0.2)` (`$vbCardShadow`). Heading at 24px weight 700 `#323232`. Body at 14px line-height 1.5 `#323232`."
- "Create a freee form input: `36px` height, `1px solid #8c8989` border, `4px` radius, `12px` horizontal padding. Placeholder color `#8c8989`. Focus: border `#285ac8`, no shadow ring. Error state: border `#dc1e32`, helper text `#dc1e32` 12px below."

### Iteration Guide
1. **Always reference semantic tokens (`$vbPrimaryColor`, `$vbAlertColor`)** instead of scale values (`$vbColorsP07`, `$vbColorsRE05`) when writing component-level code.
2. **The 9-hue palette is comprehensive** — don't introduce off-system hex values. If you need green, use the GR scale; if you need teal, use BG.
3. **`#285ac8` is both the link color AND the primary button color** — they're the same semantic in vibes. Maintain visual coherence.
4. **`border-radius: 4px`** is the de facto standard (vibes doesn't tokenize radius, components use 4px consistently).
5. **Type scale: 10 / 12 / 14 / 16 / 24dp** — five steps total. Don't introduce 18 or 20 or 28.
6. **Mobile shrinks H1 from 24dp → 16dp**, H2 from 16dp → 14dp. H3 stays at 14dp.
7. **Spacing snaps to the 4dp scale: 4 / 8 / 16 / 24 / 32 / 48**. Never 6, 10, or 14.
8. **Three shadow recipes only** (`$vbCardShadow`, `$vbFloatingShadow`, `$vbPopupShadow`) — graduated radius and offset.
9. **Z-index uses named tokens** with massive gaps (100 / 200 / 500 / 700 / 1000 / 1500 / 2000 / 3000 / 4000) — leaves room for future layers.
10. **Form-control heights are tokens** (24 / 36 / 48dp) — never use arbitrary heights for inputs/buttons.
11. **Line-height 1.5 is universal** — preserves Japanese vertical rhythm and accessibility.
12. **The brand wordmark uses Noto Sans CJK JP Medium** loaded as `font-family: 'freee-logo'` from Google Fonts — everywhere else uses the system stack.
