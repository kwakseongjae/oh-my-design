---
omd: 0.1
brand: freee
---

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

---

## 10. Voice & Tone

freee speaks to Japanese small-business owners and the accountants who support them — people who did not ask to become back-office operators and would rather spend the afternoon running the shop. The voice is therefore **plain, reassuring, and unobtrusively competent**: it uses everyday 丁寧語 instead of compliance jargon, names the next concrete step before it names the rule, and never performs sophistication. Numbers, due dates, and tax categories are treated as the subjects of sentences; the product itself stays quiet. The brand's public Design Philosophy names four adjectives — *かろやか* (light-footed), *シンプル*, *あんしん* (reassuring), *インテリジェント* — and those four are the register to hold, together at all times ([brand.freee.co.jp/designphilosophy](https://brand.freee.co.jp/designphilosophy/)).

| Context | Tone |
|---|---|
| CTAs | Plain imperative naming the outcome — *「確定して保存」「申告書を作成する」*. Never clever, never hedged. |
| Empty states | Name the next concrete action, not the absence. *「最初の取引を登録しましょう」* over *「データがありません」*. |
| Error (validation) | Say what is wrong and what to do, in that order; never blame the user. *「金額を半角数字で入力してください」*. |
| Error (system / network) | Admit the condition, state the user's safe next move. *「通信エラーが発生しました。少し待ってからもう一度お試しください」*. |
| Success (money-moved) | Confirm the ledger state, not the feeling. *「仕訳を登録しました」*. No celebratory emoji, no 🎉. |
| Onboarding | First-person plural in 丁寧語 — *「まずは事業者情報を登録しましょう」*. Calm, step-by-step, no surprise. |
| Help / inline explanation | One sentence of plain language before any tax-code reference. Technical term on second mention, parenthetical on first. |
| Accessibility surfaces | Written for screen reader + keyboard first; visible copy and `aria-label` say the same thing in the same register (`a11y-guidelines.freee.co.jp`). |

**Voice samples.**
- *「スモールビジネスを、世界の主役に。」* — corporate mission tagline, set at marketing hero scale. <!-- verified: https://corp.freee.co.jp/mission/ , 2026-04 -->
- *「だれでもビジネスの主役になれる」* — accessibility-page framing; states *why* accessibility is non-negotiable at freee. <!-- verified: https://corp.freee.co.jp/sustainability/social/accessibility/ , 2026-04 -->
- *「かろやか・シンプル・あんしん・インテリジェント」* — the four-adjective voice register published on the brand site; used as the header of product voice decisions. <!-- cited: https://brand.freee.co.jp/designphilosophy/ -->
- Empty state for an unstarted ledger: *「まだ取引がありません。最初の取引を登録しましょう。」* <!-- illustrative: not verified as live freee copy; register modelled on corp.freee.co.jp 丁寧語 -->
- Validation error on an amount field: *「金額を半角数字で入力してください。」* <!-- illustrative: not verified as live freee copy; register matches a11y-guidelines.freee.co.jp form-error examples -->
- Success toast after saving a journal entry: *「仕訳を登録しました。」* <!-- illustrative: not verified as live freee copy; plain 丁寧語 past-tense state confirmation -->

**Forbidden phrases.** In Japanese product copy: カタカナ-heavy jargon that does not carry its weight — *イノベーティブ*, *ディスラプティブ*, *ネクストジェネレーション*, *革命的*. In English surfaces: *revolutionary*, *game-changer*, *next-generation*, *AI-powered* as a standalone claim. In money-moved and filing-submitted confirmations: emoji of any kind — 🎉 ✨ 🚀 💯 are all wrong for a tax filing. Absolutes that a tax authority could contradict: *完全自動*, *絶対に間違えません*, *100% 正確*. Second-person scolding in error states (*「入力ミスです」*) — rewrite as instructive (*「…を入力してください」*).

## 11. Brand Narrative

freee was founded in July 2012 by Daisuke Sasaki, who had previously run SMB marketing for Google Japan and the Asia-Pacific region ([corp.freee.co.jp/company](https://corp.freee.co.jp/company/)). The starting observation was that the smallest Japanese businesses — the shops, clinics, studios, and single-person LLCs that make up most of the economy — spent a disproportionate share of their week on bookkeeping they had not signed up for. Cloud accounting freee launched in 2013, and over the following decade grew into an integrated platform spanning accounting, HR, payroll, and approval workflows.

The mission, refreshed in 2018, is *「スモールビジネスを、世界の主役に。」* — *"Put small businesses center stage"* ([corp.freee.co.jp/mission](https://corp.freee.co.jp/mission/)). freee frames small businesses as *「多様な価値観や生き方を生み出す、イノベーションの源泉」* — the catalysts that push the rest of the economy forward — and positions its product as the back-office infrastructure that lets those businesses spend their time being businesses instead of clerks. Accessibility is treated as a literal extension of the mission: *「すべての人が freee のサービスを使える必要がある」* ([corp.freee.co.jp/sustainability/social/accessibility](https://corp.freee.co.jp/sustainability/social/accessibility/)), which is why freee publishes its accessibility guidelines ([a11y-guidelines.freee.co.jp](https://a11y-guidelines.freee.co.jp/)) and the Vibes design system ([github.com/freee/vibes](https://github.com/freee/vibes)) as open source.

What freee refuses: the marketing-first aesthetics of consumer SaaS, the stern compliance tone of legacy Japanese enterprise software, and the "magic AI" framing that obscures what the software actually did to a ledger. What it embraces: plain 丁寧語, the four-adjective register (*かろやか / シンプル / あんしん / インテリジェント*), a single enterprise-blue brand signal (`#285ac8`), and a design system that treats accessibility as a quality constraint rather than a feature — scored against WCAG 2.1 AA from the component level up.

## 12. Principles

1. **Give small businesses their time back.** Every screen is measured against whether it removes back-office work or adds it. *UI implication:* default to the shortest path that still produces a legally correct record — pre-fill from prior entries, hide advanced fields behind disclosure, never ask for data the product already has. Example: a repeat invoice reuses the last vendor, amount, and tax category; the user confirms, not re-enters.
2. **かろやか and シンプル, together.** *Light-footed* and *simple* are the first two adjectives of the brand register; they act on layout and density. *UI implication:* snap every measurement to the 4dp scale (`$vbXSmallSize` → `$vbXXLargeSize`); keep the type scale to the five published steps (10 / 12 / 14 / 16 / 24dp); no display sizes above 24dp anywhere in product UI. Example: a dashboard headline is `$vbHeadline1FontSize` (24dp) — never 32 or 40, even on the hero.
3. **あんしん is a legibility contract.** *Reassurance* on a tax filing means the user can *see* what will happen before it happens. *UI implication:* confirmation screens state the ledger effect in words and in numbers, journal entries preview their debit/credit pair before commit, destructive actions say exactly what will be deleted. Default text color is `$vbBlackColor` (`#323232`) at line-height 1.5 — never light-gray body type on white.
4. **インテリジェント means the software did the work, not the copy.** Automation earns its adjective by producing the right entry, not by announcing itself. *UI implication:* auto-matched transactions show the matching rule in plain language and a one-click override; never label a feature *AI* on the surface when a verb ("自動で仕訳") is more precise. No sparkle icons on automated suggestions.
5. **One brand blue, used like a signature.** `$vbPrimaryColor` (`#285ac8`, `$vbColorsP07`) is simultaneously the primary-action color, the link color, and the brand mark color. *UI implication:* do not introduce a second blue for links; do not use the lighter accent (`#73a5ff`, P04) as a primary CTA — it is a hover/secondary tint only. Example: a screen has at most one primary blue button per task region; everything else is neutral.
6. **Status lives in hue families, not in one-off hexes.** The 9-hue palette (P / S / RE / OR / YE / YG / GR / BG / PU / GY) is the complete vocabulary for success, warning, alert, info, and category tagging. *UI implication:* a status badge uses the `02` tint as background and the `05`-or-`07` shade as foreground, both from the same family (e.g., `RE02 #fad2d7` bg + `RE05 #dc1e32` text). Never mix families inside a single status (no orange text on red background).
7. **Accessibility is a product constraint, not a checklist.** freee publishes its accessibility guidelines as an open standard because accessibility is how the mission reaches *everyone who needs the software* ([a11y-guidelines.freee.co.jp](https://a11y-guidelines.freee.co.jp/)). *UI implication:* every interactive component ships with a keyboard path, visible focus (`_focus.scss`), and a screen-reader label that matches the visible label; WCAG 2.1 AA contrast is enforced by the semantic tokens (`$vbPrimaryColor` on white clears 4.5:1). A component without a keyboard path is not finished.
8. **Fewer words, placed next to the decision.** Japanese SMB users skim; accountants scan. *UI implication:* inline helper text appears only at the field where a costly mis-entry is possible, not on every field; terms of art are glossed once on first appearance, not repeated; error messages sit directly under the input, not in a summary banner. Example: the tax-code selector has a one-line helper; the company-name field has none.

## 13. Personas

*Personas are fictional archetypes informed by publicly described freee user segments — Japanese small-business owners, their employees, and the tax accountants who support them. They are not individual people.*

**Kenji Tanaka, 52, Setagaya.** Owner of a six-seat ramen shop. Uses freee on an iPad at the counter to photograph receipts between lunch and dinner service; the auto-matching has to be right on the first pass because he will not re-open the app. Cares about one question at year-end — *is the filing done correctly* — and judges the product entirely on that.

**Haruka Mori, 34, freelance illustrator, Kichijōji.** Registered sole proprietor (個人事業主). Opens freee once a week on a laptop to log invoices and expenses, once a quarter to pay consumption tax, once a year to e-file 確定申告. Switched from paper because the app walks her through the filing in plain Japanese — she has never read a tax form in her life and does not intend to start.

**Ms. Sato, 47, licensed tax accountant (税理士), Nagoya.** Runs a practice with 40 SMB clients, most on freee. Lives in the accountant's dashboard: bulk review, anomaly flags, quarterly closes. Prefers keyboard-first workflows, dense tables, and `$vbColumnColor` striping because she reads ledgers all day. Notices immediately if an error message is imprecise about *which row* failed.

**Yamada-san, 29, back-office lead at a 20-person design studio, Shibuya.** Handles payroll, expense approvals, and onboarding in freee HR. Routes approval requests via Slack and expects state to be visible at a glance — submitted, approved, returned — without opening each item. Forwards the freeeアクセシビリティー・ガイドライン to the studio's web team as a matter of course.

## 14. States

| State | Treatment |
|---|---|
| **Empty (ledger, no transactions yet)** | White canvas. One 14dp `$vbBlackColor` sentence naming the next step (*「最初の取引を登録しましょう」*). One `$vbPrimaryColor` 36dp pill-less rectangular (`4px` radius) CTA. No illustration — *かろやか* means not filling the space. |
| **Empty (search / filter, no matches)** | Muted 14dp body in `$vbBurntColor` (`#6e6b6b`) stating the filter used and one "Clear filter" link in `$vbLinkColor` (`#285ac8`). Never suggests the data doesn't exist — suggests the filter is narrow. |
| **Loading (table)** | Rows render as `$vbBaseColor2` (`#e9e7e7`) skeleton blocks at final width. 1.2s shimmer over the whole grid. Amount columns show `¥ -` placeholder in `$vbBurntColor`, not a bare dash — keeps currency context visible. |
| **Loading (in-button, saving a journal entry)** | Button retains `$vbFormControlHeight` (36dp) and `$vbPrimaryColor` background; label swaps to *「保存中…」* with a 14dp neutral spinner on the left. Button stays disabled; no width jump. |
| **Error (form validation)** | Input border becomes `$vbAlertColor` (`#dc1e32`). Helper text appears directly below the field in the same red at 12dp — one sentence naming both the problem and the corrective action. |
| **Error (system / API)** | Inline banner at the top of the working region, `RE02` (`#fad2d7`) background + `RE07` (`#a51428`) text, no dismiss icon during the first 3s. Includes a retry button — the banner disappears when the request succeeds. |
| **Error (permission / auth)** | Full-region empty-canvas treatment with a single 16dp sentence in `$vbBlackColor` stating which role is required and one link to the admin. Never a modal — permission errors are not interruptions. |
| **Success (journal entry saved)** | Inline toast at top-right: `GR02` (`#cdebd7`) bg + `GR07` (`#006e2d`) text, 3s auto-dismiss, message *「仕訳を登録しました」*. No checkmark animation; the new row appearing in the table is the confirmation. |
| **Success (e-filing submitted)** | Full-screen confirmation. `$vbPrimaryColor` header bar, white card with the submitted form type, timestamp, and reference number in `$vbHeadline1FontSize` (24dp). Single *「ダッシュボードに戻る」* button. This is the only full-screen success in the product; it earns the scale because a tax submission is final. |
| **Skeleton** | `$vbBaseColor2` (`#e9e7e7`) blocks at exact final dimensions. 1.2s shimmer. Currency fields show `¥ -`, dates show `----/--/--` — locale-formatted placeholders, never bare dashes. |
| **Disabled** | Apply `$vbThinScrimColor` (`rgba(0, 0, 0, 0.12)`) overlay to the whole control. Disabled control keeps its `4px` radius and 36dp height — does not shrink, does not change shape, never loses its label. |
| **Approval pending (HR / expense workflow)** | Inline pill in `YE02` (`#fff0d2`) bg + `YE07` (`#be8c14`) text: *「承認待ち」*. Row stays in the primary list, not archived — the work is not done until it is approved. |

## 15. Motion & Easing

**Durations.**

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle commits, selection state, disabled-state transitions |
| `motion-fast` | 120ms | Button hover/press color change, tab underline slide |
| `motion-standard` | 200ms | Toast enter/exit, dropdown open, inline banner appear |
| `motion-slow` | 320ms | Modal enter, full-screen success reveal, sheet rise |

**Easings.**

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Things arriving — toasts, modals, sheets |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 0.9, 1)` | Dismissals, closes |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions — hover, focus ring, tab switch |

**Spring stance.** **No spring. No overshoot. No bounce.** freee is accounting, HR, payroll, and tax filing software — the product's job is to make the user trust the number on screen, not to delight them about it. Spring easing tells a user "watch this," which is exactly the wrong message next to a ledger balance. The four-adjective register is *かろやか / シンプル / あんしん / インテリジェント* — none of those adjectives license a bounce. Motion is therefore strictly linear-to-eased; any curve that overshoots its target is forbidden across product surfaces.

**Signature motions.**

1. **Row commit.** When a new journal entry is saved, the row fades into the table at `motion-standard` with `ease-enter`. No slide-down, no color flash — the row simply *is there*. The success toast (§14) confirms in words; the table does not need to celebrate.
2. **Button press.** Primary buttons transition `background-color` from `$vbPrimaryColor` (`#285ac8`) to the pressed-darker shade over `motion-fast` with `ease-standard`. No scale transform — a button that shrinks under a finger feels imprecise for a money action.
3. **Modal enter.** Backdrop fades to `$vbScrimColor` (`rgba(0, 0, 0, 0.5)`) over `motion-standard`; the dialog translates from +8dp to 0 and fades in over `motion-slow` with `ease-enter`. No zoom, no spring.
4. **Inline banner (error / info).** Banner translates from -8dp to 0 and fades in over `motion-standard` with `ease-enter`. Dismiss reverses with `ease-exit` over `motion-fast`.
5. **Full-screen filing success.** The full-screen confirmation page (§14) fades in over `motion-slow` with `ease-enter`. The reference-number text does not animate in — it is present immediately, so the user can screenshot it without waiting.
6. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`. Row commits, banners, modals, and the full-screen success all appear without transition. No exceptions — accessibility is a product constraint, not a feature (see Principle 7).

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

## Direct verification via WebFetch (2026-04-20)
- https://corp.freee.co.jp/mission/ — mission statement "スモールビジネスを、世界の主役に。" and surrounding
  framing of small businesses as catalysts of innovation. Used in §11 narrative and §10 voice samples.
- https://corp.freee.co.jp/company/ — founding year (July 2012), founder Daisuke Sasaki, his prior roles
  at Google / CLSA / Hakuhodo / ALBERT, and the Hitotsubashi commerce-department education. Used in §11.
- https://corp.freee.co.jp/sustainability/social/accessibility/ — "だれでもビジネスの主役になれる" accessibility
  framing; the "すべての人が freee のサービスを使える必要がある" rationale. Used in §10 samples, §11, §12.7.
- https://a11y-guidelines.freee.co.jp/intro/intro.html — purpose statement of the open-source accessibility
  guidelines; WCAG 2.1 AA basis; concrete-over-abstract editorial stance. Used in §12.7.
- https://developers.freee.co.jp/entry/growing-vibes — Vibes' accessibility-as-foundation stance, the
  tiered designer/engineer/QA accessibility model, the "scrap-and-build" reset history. Used in §12.7.

## Cited (search-surface confirmation, not full live fetch)
- https://brand.freee.co.jp/designphilosophy/ — the four-adjective register (かろやか / シンプル / あんしん /
  インテリジェント) and the supporting adjectives (まえむき / リラックス / たのしさ as spice). Source for §10 intro,
  §10 forbidden-phrases register decisions, and §12.2–12.4 principle framings. Page itself returned
  minimal markdown to WebFetch, but the four adjectives are consistently documented across search-surface
  summaries of the page and multiple third-party analyses (Takram's freee rebrand case, note.com writeups,
  developers.freee.co.jp reading-group article).
- https://speakerdeck.com/magi1125/dezainpurinsipurunotukurikata — "Design Principle creation" deck.
  Confirms that freee operates against concrete principles such as "segment screens by business workflow",
  "restrict explanatory text to critical error-prevention areas", and "prioritize efficiency in repetitive
  workflows". Principles 1 and 8 echo this framing at a general level.
- https://corp.freee.co.jp/news/20231219_design.html — 2023-12-19 press release announcing Vibes as
  open-source, framing accessibility as the headline engineering asset. Supports §11 and §12.7.

## JP-translated / illustrative
- §10 voice samples marked `illustrative` are written in plain 丁寧語 matching the register observed on
  corp.freee.co.jp and a11y-guidelines.freee.co.jp; they are NOT verified as live freee product strings.
  A reviewer with freee product access should cross-check these against actual screens before they are
  used as microcopy source by an agent.

## Base DESIGN.md (§1–9) — carry-from-base, not re-verified
- All token-level claims (#285ac8 $vbPrimaryColor, 4dp spacing scale, 5-step type scale 10/12/14/16/24dp,
  three shadow recipes, z-index hierarchy, Hiragino-led font stack) are sourced from the base DESIGN.md
  §1–9, which was extracted in 2026-04-17 from the open-source github.com/freee/vibes SCSS partials.
  These were not re-verified in the Philosophy pass; §14 and §15 reference them as authoritative.

## Interpretive / editorial claims (flagged for honesty)
- The framing of freee's voice as "plain, reassuring, unobtrusively competent" is an editorial synthesis
  of the four-adjective register + the accessibility-first mission; freee does not publish a voice-and-tone
  document that uses those exact words.
- The "no spring, no overshoot" motion stance (§15) is an editorial derivation from the product category
  (accounting / tax filing) + the four-adjective register; freee's published materials do not include a
  motion spec. A reviewer with access to Vibes component source can verify or refute this stance against
  the actual component library.
- Personas (§13) are fictional archetypes informed by publicly described freee user segments (SMB owners,
  sole proprietors, 税理士, in-house back-office leads). Names are illustrative and do not refer to real
  people.
-->

