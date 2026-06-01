---
id: gangnamunni
name: 강남언니
display_name_kr: Gangnamunni (강남언니)
country: KR
category: consumer-tech
homepage: "https://www.gangnamunni.com"
primary_color: "#d54300"
logo:
  type: favicon
  slug: "https://www.gangnamunni.com/images/icon/apple-icon-180x180.png"
verified: "2026-05-15"
omd: "0.1"
ds:
  name: Gangnamunni Blog
  url: "https://blog.gangnamunni.com/post/welchis/"
  type: brand
  description: Healience design team blog — the Cell + Welchis two-system architecture behind Gangnamunni's medical-platform UI.
  og_image: "https://blog.gangnamunni.com/contents/posts/238d9338-d3d4-80ac-a8c6-da95db5bc8bc/cover/7d41f721-4cf0-408c-b2fd-f7aa403a5cbe.png"
---

# Design System Inspiration of Gangnamunni (강남언니)

## 1. Visual Theme & Atmosphere

강남언니's web surface is the rare medical platform that reads as warm rather than clinical. The page opens on pure white (`#ffffff`) with deep blue-gray text (`#131517` — `--cell-base-color-bluegray-900`) and a single saturated orange (`#d54300` / `#FF540F` accent) doing all the brand work. There is no "medical blue", no surgical green, no pastel reassurance palette. Instead the system commits to one warm hue and lets the rest of the canvas stay cool-neutral — bluegray, never true gray. The combination reads as *honest information first, hospitality second* — appropriate for a category (성형수술·피부시술 reviews and hospital discovery) where users arrive cautious and need facts before they need feelings.

The typography is **Pretendard JP Variable** (Korean: PretendardVariable) at five weights (300/400/500/600/700) across a 15-step size ramp (`--cell-base-font-size-100` = 11px through `--cell-base-font-size-1500` = 48px). Pretendard's tight metrics and excellent Korean-Latin pairing make it a natural choice for a market where every screen mixes 한글 (hospital names, body parts, procedure names) with Latin numerals and the occasional English brand term (보톡스, 필러, BTL EmFace). The system uses 600 weight for emphasis on labels, 700 for prices and amounts, and stays at 400 for body — *no display-light experimentation*, no Stripe-style weight 300 headlines. This is finance-precision typography in a beauty-medical context.

What truly distinguishes 강남언니 is what it refuses: **no shadows on cards**, no gradients on CTAs, no decorative illustrations on empty states, no warm-pink consumer-beauty cues despite the category. Elevation is communicated by 1px hairline borders in `--cell-base-color-bluegray-200` (`#d8dfe6`) and surface tinting through bluegray-50 (`#f7f9fa`) or orange-50 (`#fef6f4`) instead of drop shadows. The footer is a single broad band of bluegray-100 (`#f5f5f5`) capped by a `4px solid #d6d6d6` top divider — the only "heavy" structural line in the whole layout, used like a paragraph break between content and meta.

The brand operates **two design systems** by name (confirmed by the team's own engineering blog at https://blog.gangnamunni.com/post/welchis/):
- **Cell** — mobile-first (iOS, Android, mobile web). Compiled tokens are visible on the public web bundle as `--cell-base-*` and `--cell-semantic-*`. This is what the consumer surface uses.
- **Welchis** — PC back-office system. Welchis Design (tone/manner/style) + Welchis UI (Figma library + web library). Storybook is the handoff bridge; no Zeplin pixel-measure.

This DESIGN.md focuses on **Cell** — the consumer-facing token system.

**Key Characteristics:**
- One brand hue: orange `#d54300` (semantic strong) / `#f66336` (semantic regular) / `#FF540F` (raw accent fill used on hot-deal and review badges)
- Pretendard JP Variable across all surfaces — Korean-Latin parity at every weight
- Bluegray 9-step neutral scale (50 → 900), never warm gray, never pure black
- Zero card shadows by default — elevation = 1px hairline borders + tinted surfaces
- 8px base spacing grid (`--cell-base-dimension-scale-200`)
- Radius ramp 2px → 32px → `9999px`, with 16px (`radius-400`) as the default chrome radius for buttons / pills / cards
- Status palette already wired: green-400 success, red-500 danger, yellow-400 warning, blue-500 info — used sparingly
- Information-density bias: medical category data (price ranges, review counts, doctor specialties) gets list-and-table treatment, not card-hero treatment

## 2. Color Palette & Roles

### Brand (Orange)
- **Brand Strong** (`#d54300`): `--cell-base-color-orange-500`. Deep brand orange. Used for the primary brand mark, brand-strong text, pressed states.
- **Brand Regular** (`#f66336`): `--cell-base-color-orange-400`. `--cell-semantic-color-fg-brand-regular-default`. Primary brand FG — links, icons, accent text.
- **Brand Strong FG** (`#ab350c`): `--cell-base-color-orange-600`. `--cell-semantic-color-fg-brand-strong-default`. Used where brand text must override a tinted background.
- **Brand Subtle Border** (`#fa8563`): `--cell-base-color-orange-300`. `--cell-semantic-color-border-brand-subtle-default`. Subtle orange-tinted border on selected pills, chip outlines.
- **Brand Tint 100** (`#feeee9`): `--cell-base-color-orange-100`. Surface for promoted rows, hot-deal cards, brand-tinted badges.
- **Brand Tint 50** (`#fef6f4`): `--cell-base-color-orange-50`. Lightest brand wash — section backgrounds, hover wash on neutral surfaces.
- **Brand Accent Raw** (`#FF540F`): Raw hex emitted by Tailwind utilities on the live home for "hot-deal" / review-flag fills. Slightly more saturated than `#d54300`; co-existent with the semantic ramp.

### Neutral (Bluegray)
- **Text Primary** (`#131517`): `--cell-base-color-bluegray-900`. Headings, primary text, important labels.
- **Text 800** (`#21272d`): `--cell-base-color-bluegray-800`. Strong border (`--border-neutral-strong-default`), inverse-bg text.
- **Text Secondary** (`#3a444d`): `--cell-base-color-bluegray-700`. Body text, secondary headings.
- **Text 600** (`#515e6a`): `--cell-base-color-bluegray-600`. Long-form body.
- **Text Tertiary** (`#697683`): `--cell-base-color-bluegray-500`. Captions, meta info, timestamps.
- **Text Placeholder** (`#8694a2`): `--cell-base-color-bluegray-400`. Input placeholders, disabled text.
- **Border 300** (`#b5bfc9`): `--cell-base-color-bluegray-300`. Stronger dividers.
- **Border Default** (`#d8dfe6`): `--cell-base-color-bluegray-200`. `--cell-semantic-color-border-neutral-subtle-default`. Default 1px border on cards, inputs, header sign-in button.
- **Border Weak** (`#e4e8ec`): `--cell-base-color-bluegray-150`. `--cell-semantic-color-border-neutral-weak-default`. Hairline dividers in lists.
- **Surface Subtle** (`#eff2f5`): `--cell-base-color-bluegray-100`. Card subtle bg, footer band, section break.
- **Surface Faint** (`#f7f9fa`): `--cell-base-color-bluegray-50`. Lightest surface wash.
- **Pure White** (`#ffffff`): `--cell-base-color-white`. Canvas, primary surface.

### Status
- **Success FG** (`#27a86d`): `--cell-base-color-green-400`. Success badges, checkmarks.
- **Success Strong** (`#1a8656`): `--cell-base-color-green-500`. Strong success border, badge stroke.
- **Danger** (`#d73f39`): `--cell-base-color-red-500`. Field error, danger CTA, decline.
- **Danger Weak** (`#f75e54`): `--cell-base-color-red-400`. Inline error text accent.
- **Warning** (`#f9c647`): `--cell-base-color-yellow-400`. Caution badges (`#fff8e9` tint surface).
- **Info / Certification** (`#3270d6`): `--cell-base-color-blue-500`. Verified-clinic badges, info banners.
- **Payment** (`#0b819d`): `--cell-base-color-lightblue-500`. Payment-flow accents, refund states.
- **Trending** (`pink-300` ramp present): `--cell-base-color-pink-300` is referenced by `--cell-semantic-color-border-trending-subtle-default` — soft pink for trending/popular chips. Used sparingly, never as primary brand.

### Tinted Surfaces (for badges)
- Orange tint (`#feeee9` / `#fef6f4`)
- Green tint (`#e8f6ec` / `#d5ebdc`)
- Red tint (`#ffedeb` / `#fff6f5`)
- Yellow tint (`#fff0d3` / `#fff8e9`)
- Blue tint (`#ebf2ff` / `#f5f9ff`)

## 3. Typography Rules

### Font Family
- **Primary**: `Pretendard JP Variable`, fallback `PretendardVariable` → `PretendardVariable Fallback` → `sans-serif`
- **Monospace**: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`
- **CJK variants in the token system** (selected by locale): `Pretendard JP Variable` (default/JP), Noto Sans JP, Noto Sans SC, Noto Sans TC, Noto Sans Thai, PingFang SC/TC, Hiragino Sans, Sukhumvit — the brand supports Korean, Japanese, Thai, and Chinese rendering through the same Cell semantic typography classes.

### Weights
- **300 (light)**, **400 (regular)**, **500 (medium)**, **600 (semibold)**, **700 (bold)** — all five emitted from `--cell-base-font-weight-{300..700}`. The product uses 400 for body, 500-600 for labels/buttons, 700 for prices and amounts. 300 exists in the ramp but is rare on-product.

### Size Ramp (`--cell-base-font-size-*`)

| Token | rem | px | Use |
|---|---|---|---|
| 100 | 0.6875 | 11 | Smallest meta — legal, very fine print |
| 200 | 0.75 | 12 | `label-xs` — chips, timestamps, tag pills |
| 300 | 0.8125 | 13 | `label-sm` — secondary buttons, "전체보기" links |
| 400 | 0.875 | 14 | `label-md` / `body-md` — default UI text |
| 500 | 1.0 | 16 | `label-lg` / `body-lg` — primary body, card titles |
| 600 | 1.125 | 18 | `label-xl` / `title-md` — section subheads |
| 700 | 1.25 | 20 | `title-md-strong` — card headings |
| 800 | 1.375 | 22 | sub-display |
| 900 | 1.5 | 24 | `title-lg-strong` — page section titles |
| 1000 | 1.75 | 28 | `display-md-strongest` — feature headlines |
| 1100 | 2.0 | 32 | `title-xl-strong` — landing headlines |
| 1200 | 2.25 | 36 | hero |
| 1300 | 2.5 | 40 | hero large |
| 1400 | 2.75 | 44 | hero xl |
| 1500 | 3.0 | 48 | display max (rare) |

### Semantic typography classes (Cell)
The system emits 7 families × multiple sizes × {regular, strong, strongest, subtle}:
- `cell-semantic-typography-display-{sm,md}-strongest`
- `cell-semantic-typography-title-{xs,sm,md,lg,xl}-strong`
- `cell-semantic-typography-label-{xxs,xs,sm,md,lg,xl}-{regular,strong,subtle}`
- `cell-semantic-typography-body-single-{sm,md,lg,xl}-{regular,strong,subtle}`
- `cell-semantic-typography-body-multi-{sm,md,lg,xl}-{regular,subtle}`
- `cell-semantic-typography-description-{xs,sm,md,lg,xl}-{regular,subtle}`
- `cell-semantic-typography-caption-*`

### Principles
- **Pretendard everywhere.** No serif, no display custom font, no script. Pretendard's Korean-Latin metrics are the brand's typographic constant.
- **Numbers are bold (700).** Prices, review counts ("후기 7,300건"), star ratings, distance ("0.4km") all use 700 weight against 400-weight body. The numeric weight contrast is how the eye picks out information.
- **No tracking experiments.** Letter-spacing token `--cell-base-font-letterspacing-none` is the default everywhere; `letterspacing-200` exists only on `display-strongest`. No Stripe-style negative tracking on headlines.
- **Display-strongest is rare.** Display sizes (`display-{sm,md}-strongest`) appear on marketing surfaces; the consumer app surface stays in `title-*-strong` (20-32px) and below.

## 4. Component Stylings

### Buttons

**Primary Brand**
- Background: `#d54300`
- Text: `#ffffff`
- Border: none
- Radius: 16px (`--cell-base-radius-400`)
- Padding: 12px 20px (`spacing-300` vertical / `spacing-500` horizontal)
- Font: 16px / 600 / Pretendard JP Variable
- Hover: Background `#ab350c` (`orange-600`)
- Pressed: Background `#93250a` (`orange-700`)
- Disabled: Background `#fbb8a4` (`orange-200`)
- Use: Primary CTA — "병원 예약하기", "후기 작성하기", "이벤트 보기"

**Primary Brand (raw accent variant)**
- Background: `#FF540F`
- Text: `#ffffff`
- Border: 1px solid `#FF540F`
- Radius: 16px
- Padding: 12px 20px
- Font: 16px / 600 / Pretendard JP Variable
- Use: Hot-deal CTA, time-limited promo — raw Tailwind utility variant of the brand color, slightly more saturated than the semantic `#d54300`.

**Outline / Secondary**
- Background: `#ffffff`
- Text: `#131517` (bluegray-900)
- Border: 1px solid `#d8dfe6` (bluegray-200)
- Radius: 16px (32px → pill when small)
- Padding: 6px 14px (sign-in size) → 10px 16px (default) → 12px 20px (large)
- Font: 14-16px / 400-500 / Pretendard JP Variable
- Hover: Background `#f7f9fa` (bluegray-50)
- Disabled: Text `#8694a2`, border `#e4e8ec`
- Use: "로그인/가입" header CTA (32px tall, 16px radius — observed live), filter pills, neutral secondary action.

**Ghost / Tertiary**
- Background: transparent
- Text: `#3a444d` (bluegray-700)
- Border: none
- Radius: 16px
- Padding: 6px 12px
- Font: 14px / 500 / Pretendard JP Variable
- Hover: Background `rgba(216,223,230,0.4)`
- Use: Tab strip, in-card secondary action, "더보기".

**Brand Subtle (tinted)**
- Background: `#fef6f4` (orange-50)
- Text: `#d54300` (orange-500)
- Border: 1px solid `#feeee9` (orange-100) — optional
- Radius: 16px
- Padding: 8px 14px
- Font: 14px / 600 / Pretendard JP Variable
- Use: Secondary-yet-brand CTA — "관심 병원에 추가", "쿠폰 받기".

**Danger**
- Background: `#d73f39` (red-500)
- Text: `#ffffff`
- Border: none
- Radius: 16px
- Padding: 10px 16px
- Font: 14px / 600 / Pretendard JP Variable
- Hover: Background `#b02b27` (red-600)
- Use: Destructive action — "예약 취소", "후기 삭제".

**Icon Button**
- Background: transparent
- Border: none
- Radius: 9999px (`radius-full`)
- Hit target: 40px × 40px (8px padding around 24px icon)
- Hover: Background `#eff2f5` (bluegray-100)
- Use: Bookmark, share, dismiss.

### Inputs & Forms

**Text Input — Default**
- Background: `#ffffff`
- Text: `#131517`
- Placeholder: `#8694a2` (bluegray-400)
- Border: 1px solid `#d8dfe6` (bluegray-200)
- Radius: 12px (`radius-300`)
- Padding: 12px 16px
- Font: 16px / 400 / Pretendard JP Variable
- Height: 48px
- Focus: Border `#d54300` (orange-500), focus ring `2px` outset of `radius-300`
- Error: Border `#d73f39`, ring `red-500`
- Disabled: Background `#f7f9fa`, text `#8694a2`, border `#e4e8ec`
- Use: Standard form field — sign-in, review form, hospital review search.

**Search Input — Hero**
- Background: `#eff2f5` (bluegray-100) or `#ffffff` with border
- Text: `#131517`
- Placeholder: `#697683` (bluegray-500) — "병원, 시술, 의사 검색"
- Border: none (pill) or 1px `#d8dfe6`
- Radius: 9999px (`radius-full`)
- Padding: 14px 20px (left icon 44px wide)
- Font: 16px / 500 / Pretendard JP Variable
- Height: 52px
- Use: Hero search bar above category nav.

### Cards & Containers

**Doctor / Clinic Card**
- Background: `#ffffff`
- Border: 1px solid `#d8dfe6` (bluegray-200) — or none on grid layouts where the bluegray-50 page bg provides separation
- Radius: 12px (`radius-300`)
- Padding: 16px
- Shadow: **none by default** — elevation is conveyed by border + bluegray-50 page wash
- Hover: Background tint `#f7f9fa`, no shadow change
- Title: 16-18px / 700 / `#131517`
- Meta row: 13px / 400 / `#697683` — "강남구 · 0.4km · 후기 7,300건"
- Price row: 14px / 700 / `#131517` with strikethrough on `--list-price` in `#8694a2`
- Use: Hospital list cards, doctor cards, treatment cards.

**Review / Article Card (gap-2 column flex)**
- Background: transparent (image-led)
- Border: none
- Radius: 12px on the image, no container border
- Title: 16px / 400 / `#000000` (live-observed as `rgb(0,0,0)` — slightly heavier than the semantic bluegray-900 on rich-media surfaces)
- Padding: 0 (image touches container edges, text below)
- Height observed: 330px (image + title + meta)
- Use: 칼럼/community article grid.

**Event / Promo Card (orange-tinted)**
- Background: `#fef6f4` (orange-50)
- Border: 1px solid `#feeee9` (orange-100)
- Radius: 12px
- Padding: 16px
- Heading accent: `#d54300` or `#FF540F` flag tag (top-left)
- Use: 핫딜 / 이벤트 / 한정 promo block.

### Badges, Tags & Pills

**Brand Badge ("HOT", "특가")**
- Background: `#FF540F`
- Text: `#ffffff`
- Border: none
- Radius: 4px (`radius-100`)
- Padding: 2px 6px
- Font: 11-12px / 700 / Pretendard JP Variable
- Use: Time-sensitive flags overlaid on event cards.

**Success Badge ("인증 병원")**
- Background: `#e8f6ec` (green-100)
- Text: `#1a8656` (green-500)
- Border: 1px solid `#aed2ba` (green-200) — optional
- Radius: 9999px
- Padding: 2px 8px
- Font: 12px / 600 / Pretendard JP Variable
- Use: Verification, success indicators.

**Info Badge ("의료광고 사전심의")**
- Background: `#ebf2ff` (blue-100)
- Text: `#1b59bd` (blue-600)
- Border: none
- Radius: 4px
- Padding: 2px 6px
- Font: 11px / 600 / Pretendard JP Variable
- Use: Regulatory / certification labels.

**Neutral Pill (category)**
- Background: `#ffffff`
- Text: `#131517`
- Border: 1px solid `#d8dfe6`
- Radius: 9999px
- Padding: 6px 12px
- Font: 13-14px / 500 / Pretendard JP Variable
- Selected: Background `#fef6f4` (orange-50), text `#d54300`, border `#fa8563`
- Use: Category filter strip — "보톡스", "필러", "리프팅", "지방성형".

### Navigation

**Global Header**
- Background: `#ffffff`
- Border-bottom: `0px solid #f5f5f5` (effectively a hairline divider via Tailwind utility — visually a subtle seam)
- Height: 48px (observed live)
- Logo left, sign-in button right (`outline` variant — 32px tall, 16px radius)
- Font: 16px / 400 / Pretendard JP Variable on link labels

**Category Nav (icon + label, horizontal)**
- Item: 88px tall (icon 56px stacked above 13px label)
- Background: transparent
- Font: 13px / 400 / `#131517`
- Use: Procedure category grid on home (제모 / 가슴성형 / 보톡스 / 필러 / 리프팅 / 모발이식 ...)

**Bottom Nav (mobile primary chrome)**
- Background: `#ffffff` (translucent on iOS via backdrop-blur on real mobile shell)
- Border-top: 1px solid `#d8dfe6`
- Height: 64-65px
- Five items: 홈 / 병원 / 이벤트 / 커뮤니티 / 칼럼
- Active state: icon and label switch to `#d54300` (orange-500)
- Font: 11px / 500 / Pretendard JP Variable on label

### Footer
- Background: `#f5f5f5` (bluegray-100 alias)
- Border-top: 4px solid `#d6d6d6` — the system's heaviest single divider
- Padding: 30px
- Text: 13-14px / 400 / `#3a444d`
- Link rows: Company / PR / 병원입점신청 / 이용약관 / 인재영입 / 위치기반서비스 이용약관 / 개인정보처리방침
- No social icon row inline — kept text-only.

### Status & Inline States

**Field Error**
- Border: 1px solid `#d73f39` on input
- Helper text: 12-13px / 400 / `#d73f39` below input
- Icon: optional 16px `info` glyph in `#d73f39`

**Toast (bottom-center)**
- Background: `#131517` (bluegray-900)
- Text: `#ffffff` 14px / 500
- Border: none
- Radius: 12px
- Padding: 12px 16px
- Duration: 3s

**Skeleton**
- Background: `#eff2f5` (bluegray-100)
- Radius: matches component being loaded (4 / 8 / 12 / 16)
- Shimmer: 8% white gradient sweep, 1.2s linear

---

**Verified:** 2026-05-13
**Tier 1 sources:** https://www.gangnamunni.com/ (live DOM `getComputedStyle` on header / sign-in button / category nav / article card / bottom nav / footer); https://next-static.gangnamunni.com/cheetah/rc-ad53c62/_next/static/css/d246c5b2edcb00b6.css (production CSS bundle — full `--cell-base-*` + `--cell-semantic-*` token map extracted); https://blog.gangnamunni.com/post/welchis/ (engineering blog confirming Cell + Welchis two-system architecture)
**Tier 2 sources:** Tier 2: not found in getdesign/refero as of 2026-05-13 (getdesign.md/gangnamunni → "No designs found"; styles.refero.design/?q=gangnamunni and ?q=강남언니 → no brand-matched style cards)
**Conflicts unresolved:** none (no Tier 2 data to conflict with Tier 1)

## 5. Layout Principles

### Spacing System
- Base unit: 8px (`--cell-base-dimension-scale-200` = 0.5rem)
- Full scale (rem): 25 → 0.0625 (1px), 50 → 0.125 (2px), 75 → 0.1875 (3px), 100 → 0.25 (4px), 150 → 0.375 (6px), 200 → 0.5 (8px), 250 → 0.625 (10px), 300 → 0.75 (12px), 350 → 0.875 (14px), 400 → 1 (16px), 500 → 1.25 (20px), 600 → 1.5 (24px), 700 → 1.75 (28px), 800 → 2 (32px), 900 → 2.25 (36px), 1000 → 2.5 (40px), 1200 → 3 (48px), 1400 → 3.5 (56px), 1600 → 4 (64px), 1800 → 4.5 (72px), 2000 → 5 (80px), 2400 → 6 (96px)
- Page-section vertical rhythm typically uses `spacing-1200` (48px) between major sections, `spacing-800` (32px) within sections.

### Grid & Container
- Mobile-first; the consumer app surface is the primary design target. Web is a re-skin of the mobile layout.
- Max content width on web home: ~1200px centered with 24px side padding on tablet, 48px+ on desktop.
- Category nav: 4 columns mobile, 8-10 columns desktop, icons fixed 56px.
- Card grids: 2 columns mobile, 3-4 columns desktop, 16px gap (`spacing-400`).

### Whitespace Philosophy
- **Information density first.** The category-discovery surface is intentionally dense — users scanning for a treatment do not want a hero. Spacing within cards is tight (16px paddings) while between cards remains generous (16-24px gaps).
- **Footer-as-paragraph-break.** The single 4px `#d6d6d6` divider is the strongest horizontal rule in the layout — it tells the user "you've reached company info, what's above was content."
- **Tint, not shadow.** Section breaks use `bluegray-50` or `orange-50` washes rather than elevation. Saves visual budget for the few places where contrast really matters (price, review count, certified-clinic badge).

### Border Radius Scale
- Micro (2-4px): Inline badges, small tags
- Small (6-8px): Inline chips, status pills
- Standard (12px): Cards, inputs — the workhorse
- Medium (16px): **Default chrome radius** — buttons, sign-in pill, search containers, primary CTA
- Large (20-24px): Bottom sheets, large card variants
- 32px raw: Special-case rounded chrome (e.g., floating action buttons, full-width media containers)
- `full` (9999px): Search bar, avatars, icon buttons, category pills

## 6. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow, no border | Inline text, page bg |
| Hairline (Level 1) | 1px solid `#d8dfe6` (bluegray-200) | **Default for cards, inputs, headers** — replaces a drop shadow |
| Tinted Surface (Level 2) | `bluegray-50` (`#f7f9fa`) or `bluegray-100` (`#eff2f5`) bg | Section backgrounds, hover surfaces |
| Soft Shadow (Level 3) | `0 4px 12px rgba(0, 0, 0, 0.08)` | Bottom sheets, dropdowns, popovers |
| Modal (Level 4) | `0 12px 32px rgba(0, 0, 0, 0.16)` + 60% black backdrop | Full-screen modals, reservation confirmation |
| Heavy Divider | `border-top: 4px solid #d6d6d6` | Page footer separation — unique single use |

**Elevation philosophy.** Gangnamunni's medical context demands trust, and dramatic shadows look "consumer-app fun" rather than "clinically clean". The system communicates depth through **hairline borders + tinted backgrounds** rather than shadow stacks. Drop shadows appear only at popover/sheet/modal levels — never on resting cards. The single heaviest divider (4px `#d6d6d6` footer top) carries the structural break that other systems would use a section shadow for.

## 7. Do's and Don'ts

### Do
- Use `#d54300` (or raw `#FF540F` for time-sensitive flags) as the sole brand accent — orange is the entire brand identity
- Use **bluegray** for neutrals — never warm gray, never pure black on text
- Default to 1px `#d8dfe6` borders on cards instead of drop shadows
- Use 700 weight for prices and quantitative data; let the numeric weight do the visual highlighting
- Use orange-50 (`#fef6f4`) as a tint surface for event/promo cards — keeps the brand orange visible without an overwhelming CTA-orange wash
- Pretendard JP Variable across all locales — the system is multilingual-by-design
- Use the 16px (`radius-400`) chrome radius for buttons and sign-in CTAs — confirmed by live header inspection
- Use bluegray-900 (`#131517`) for headings — not `#000`

### Don't
- Don't introduce a second hue as a brand color — orange is singular
- Don't use pink as a primary CTA fill (the trending-pink token exists but is reserved for chips, never CTA)
- Don't apply drop shadows to resting cards — elevation = border + tint
- Don't pick a display-light weight (300) for headlines — the brand is in the 400-700 register
- Don't use pure black (`#000000`) for headings — always `#131517` bluegray-900 (live-observed black-on-rich-media images is an exception)
- Don't substitute pure gray for the bluegray neutrals — the cool undertone is intentional
- Don't add tracking experiments on Korean text — `letterspacing-none` is the default
- Don't replace category icons with stock photography — the home is icon-grid-driven

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|---|---|---|
| Mobile | <640px | 4-col category nav, 2-col card grid, bottom nav visible |
| Tablet | 640-1024px | 6-col category nav, 3-col card grid, bottom nav hidden, header sign-in visible |
| Desktop | 1024-1280px | 8-10 col category nav, 4-col card grid, full footer |
| Large Desktop | >1280px | Content max 1200px centered, side padding 48px+ |

### Touch Targets
- Bottom nav items: 64px tall, ≥ 48px wide
- Sign-in button (header): 32px tall — small for desktop, the mobile shell uses a different chrome
- Category icons: 56px icon + 13px label = 88px total touch target
- Card-level tap zones span full card width (no hidden hit-targets)

### Collapsing Strategy
- Header: full nav links → search icon + sign-in pill (mobile)
- Category nav: 8-10 columns → 4 columns, scrollable horizontal strip on narrow tablet
- Card grid: 4 → 3 → 2 → 1 column
- Footer: link grid stacks vertically below 640px

### Image Behavior
- Doctor / clinic / event card images use 12px radius (matching card radius)
- Aspect ratios: 1:1 (doctor portrait), 4:3 (treatment), 16:9 (event banner)
- Always `object-fit: cover` — never stretched

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary brand: Orange `#d54300` (`--cell-base-color-orange-500`)
- Brand FG regular: Orange `#f66336` (`--cell-base-color-orange-400`)
- Brand accent raw: `#FF540F`
- Background canvas: `#ffffff`
- Surface subtle: Bluegray-100 `#eff2f5` / Bluegray-50 `#f7f9fa`
- Heading: Bluegray-900 `#131517`
- Body: Bluegray-700 `#3a444d`
- Caption: Bluegray-500 `#697683`
- Border default: Bluegray-200 `#d8dfe6`
- Success: Green-400 `#27a86d` / Green-500 `#1a8656`
- Danger: Red-500 `#d73f39`
- Warning: Yellow-400 `#f9c647`
- Info: Blue-500 `#3270d6`
- Footer divider: `#d6d6d6` (4px solid top border) on `#f5f5f5` band

### Example Component Prompts
- "Create a primary brand CTA: background `#d54300`, text `#ffffff`, 16px radius, padding 12px 20px, Pretendard JP Variable 16px weight 600. Hover background `#ab350c`."
- "Build a hospital card: white background, 1px solid `#d8dfe6` border, 12px radius, 16px padding, **no shadow**. Title at 16px Pretendard weight 700, color `#131517`. Meta row '강남구 · 0.4km · 후기 7,300건' at 13px weight 400 color `#697683`. Price `350,000원` at 14px weight 700 color `#131517` with list price strikethrough in `#8694a2`."
- "Design a hot-deal badge: background `#FF540F`, white text, 4px radius, 2px 6px padding, 12px Pretendard weight 700. Position absolute top-left of event card."
- "Create the global header: 48px tall, white background, hairline `#f5f5f5` bottom seam, Pretendard 16px / 400 link text in `#131517`. Sign-in button on the right: 32px tall, white bg, `1px solid #d8dfe6` border, 16px radius, 6px 14px padding, 14px Pretendard 400, '로그인/가입' label."
- "Build the category nav: 4 columns mobile, 8 desktop. Each item is an 88px-tall stack: 56px icon, 8px gap, 13px Pretendard 400 label in `#131517`. Transparent background. Tap target spans full cell."
- "Design the footer band: `#f5f5f5` background, `border-top: 4px solid #d6d6d6`, 30px padding, link text 13px Pretendard 400 in `#3a444d`. No social icons inline."

### Iteration Guide
1. **One brand hue only.** If your CTA isn't orange, it isn't the primary CTA. Pink, blue, green are reserved for status, trending chips, or info badges — never primary.
2. **Hairline > shadow.** Default to `1px solid #d8dfe6` borders on resting cards. Only apply shadows when an element actually floats (popover, sheet, modal).
3. **Bluegray, not gray.** Always `#697683` for caption, `#3a444d` for body, `#131517` for heading. The cool undertone separates the brand from generic warm-neutral medical UI.
4. **Numbers in 700.** Prices, review counts, distances all switch to weight 700. Don't mix; numbers should always read "heavier" than surrounding body.
5. **16px radius for chrome.** Buttons, sign-in pills, primary CTAs all use `radius-400` (16px). Smaller pills (chips, badges) use 4-8px. Search bars and avatars go to `radius-full`.
6. **No display-light.** Stick to 400-700. The brand does not use weight 300 on display headlines.
7. **Pretendard JP Variable** is the only font. No serif, no display custom, no script.
8. **Korean-first copy.** UI labels and CTAs should be Korean by default. English exists in technical labels (BTL, IPL) but never on chrome buttons.

---

## 10. Voice & Tone

강남언니's voice is the careful clinician who happens to be on your side — informational first, reassuring second, never sales-y. The product handles a category where users are nervous (성형수술, 피부시술, 모발이식 are not impulse purchases) and where misinformation is the historical norm in Korean beauty media. So the copy refuses the consumer-beauty register: no "✨ 예뻐지자!", no exclamation marks on routine CTAs, no rounded "약 30만원~" pricing. Information is exact ("후기 7,300건", "강남구 · 0.4km · 1,234곳"), and the system explains *why* before asking the user to act.

Korean is the primary voice; English UI strings exist for overseas surfaces but are translations, not parity. Sentences in body copy end with `.`; CTA buttons do not. No emoji on medical-information surfaces.

| Context | Tone |
|---|---|
| Card titles (hospital, doctor, treatment) | Factual, scan-friendly. "강남 OO성형외과 — 코재수술 전문". Never "예뻐지는 비결". |
| CTAs | Imperative + concrete object. "병원 예약하기", "후기 작성하기", "쿠폰 받기", "상담 신청". Never "지금 시작하기!" with exclamation. |
| Review prompts | Second-person, soft. "솔직한 후기를 들려주세요." Never "꼭 남겨주세요!!". |
| Hospital meta | Comma-separated facts. `강남구 · 0.4km · 후기 7,300건 · 인증 병원`. Numerals always exact. |
| Price display | `350,000원` (comma-separated), with `--list-price` strikethrough where applicable. Never `약 35만원`, never `35만원대`. |
| Empty state (search) | One reassuring line in `#697683`: "조건에 맞는 결과가 없어요. 필터를 조정해보세요." |
| Error (form / API) | Specific + blameless. "이메일 형식을 확인해주세요." Never "오류가 발생했습니다." |
| Verification / regulatory | Formal medical-advertising tone — `의료광고 사전심의필`, `보건복지부 지침에 따라` — required by Korean medical-advertising regulation. |
| Onboarding (overseas / Unni) | English mirror of Korean voice — same restraint, same factual register. |

**Forbidden phrases.** `예뻐지세요!`, `~할 수 있어요!` (with exclamation), `약 ~원` on primary pricing, rounded review counts (`후기 약 7,000건`), generic `오류가 발생했습니다`, "✨", "💖", "🥺", any phrase that frames cosmetic surgery as cosmetic-only ("예쁘게"). Promotional sales-speak ("초특가", "100만원 할인!!") is restricted to flagged hot-deal cards with the `#FF540F` badge, never used in body copy.

**Voice samples (verified against live home 2026-05-13).**
1. `종아리 보톡스 맞으면 발목 두꺼워져? 효과·부작용·용량·주기` — article title; question form invites the user, mid-dot separator lists exactly what will be covered. No fluff. *(Verified: gangnamunni.com home, observed via playwright snapshot 2026-05-13.)*
2. `보톡스 입문자 가이드, 효과·비용·부작용부터 국산vs수입 차이까지` — same pattern: target reader + comma-separated index of contents. Sets expectation precisely. *(Verified: gangnamunni.com home 2026-05-13.)*
3. `로그인/가입` — the sign-in CTA. One slash, no "회원가입은 무료입니다!". Zero salesmanship. *(Verified: gangnamunni.com header.)*

## 11. Brand Narrative

강남언니 is the consumer brand of **힐링페이퍼 (Healingpaper)**, a Korean medtech company founded in **July 2012** by **홍승일 (Hong Seung-il)** — co-founder and CEO ([Rocketpunch — 홍승일 / vanitymind](https://www.rocketpunch.com/@vanitymind), [Rocketpunch — Healingpaper](https://www.rocketpunch.com/companies/healingpaper)). The mission is straightforward and stated repeatedly in the company's own materials: *"더 좋은 의료를 더 많은 사람들이 접할 수 있도록"* (make better medical services accessible to more people). The product entered a Korean cosmetic-surgery information market that had been dominated by opaque pricing, paid placements masquerading as reviews, and 압구정 office-tower fliers — the design's refusal of beauty-app pinks-and-sparkles is a refusal of that media culture.

The company crossed the **예비 유니콘 (pre-unicorn)** threshold by 2021 and as of recent funding has cumulative investment near **313억원 ($230M+)** across multiple rounds: Seed 2015-07 (3억), Series A 2019-07 (45억) with Premier Partners / Stonebridge Ventures / Won-Ik Investment, Series B 2020-03 (185억) with Premier / Stonebridge / Legend Capital / Hana Ventures / KB Investment, and a Series D growth round of **428억원** in **2025-02** ([Hankook Ilbo — 2025-02-17](https://www.hankookilbo.com/News/Read/A2025021715490005621), [TheVC — Healingpaper](https://thevc.kr/healingpaper)). The platform now serves **7M+ users globally** across Korea, Japan, Thailand, and other markets — the overseas-only app *Unni* alone passed **700,000 users by March 2024**.

The design system is named **Cell** (mobile: iOS / Android / mWeb) and **Welchis** (PC back-office for partner clinics) — the team published the rationale on their own engineering blog: *"앱과 백오피스는 UX 패턴이 본질적으로 달라서 (앱은 바텀시트, 백오피스는 팝업·테이블), 한 시스템으로 묶기보다 둘로 나눴습니다."* (the back-office and the consumer app have fundamentally different UX patterns — bottom sheets vs. popups-and-tables — so they're split rather than merged) ([Welchis 소개 — gangnamunni blog](https://blog.gangnamunni.com/post/welchis/)). Welchis itself is split into **Welchis Design** (tone / manner / visual) and **Welchis UI** (Figma file + web component library), with Storybook as the design-engineering handoff bridge — explicitly replacing Zeplin pixel-measurement.

What 강남언니 refuses: the visual vocabulary of consumer-beauty apps (cartoon pinks, sparkle emojis, "예뻐지는 비결"), the opacity of legacy cosmetic-surgery media (rounded pricing, anonymous testimonials, undisclosed paid placements), and the institutional sterility of hospital websites (cold blues, medical iconography). What it embraces: exact numerals (`후기 7,300건`, `0.4km`), single-hue brand restraint (orange-500 only), bluegray neutrals (warmer than pure gray, cooler than beige), and a footer that ends with `의료광고 사전심의` rather than social-media icons.

## 12. Principles

1. **Information density is hospitality.** A user opening 강남언니 is researching, not browsing for delight. Cards show price, distance, review count, and certification status simultaneously. Trimming any of those to "look cleaner" is unkind to the user's real task. *UI implication: hospital cards never hide review count behind a hover; price is never rounded for visual cleanliness.*
2. **One hue, one job.** Orange `#d54300` (or its raw cousin `#FF540F`) is the only brand color. Every other color in the system has a specific semantic role (green = success / certified, red = danger / decline, blue = info / regulatory, yellow = warning). Brand never bleeds into status; status never decorates brand. *UI implication: a "popular" tag cannot be orange; it goes pink-tinted or neutral. A success badge cannot use brand orange.*
3. **Trust comes from numerals.** Prices in `350,000원` (comma-separated, weight 700) rather than `약 35만원`. Distances in `0.4km` rather than `근거리`. Review counts in `7,300건` rather than `많음`. The exactness signals "we have the data; we are not rounding to soften a sale." *UI implication: numbers always tabular-weighted (700) and never abbreviated; ranges show both endpoints (`300,000 – 450,000원`), never a single rounded figure.*
4. **Hairlines over shadows.** Default elevation is a 1px `#d8dfe6` border, not a drop shadow. Shadows are reserved for surfaces that *literally* float (popover, sheet, modal). This is the system's strictest aesthetic line — consumer-app shadow stacks would make the surface feel less like a medical product. *UI implication: resting cards never have `box-shadow`. A designer adding one is making the surface "less trusted," even if it looks "more polished."*
5. **Two systems, one voice.** Cell (app) and Welchis (back-office) are split because their *form* differs, not because their *voice* differs. The tone of an error message on the partner-clinic dashboard reads the same as the tone of a review prompt on the consumer app — both refuse "오류가 발생했습니다" in favor of specific blameless guidance. *UI implication: a designer working in Welchis cannot import consumer-app voice patterns directly, but they cannot drift into IT-admin sterility either.*
6. **Regulatory disclosure is part of the design.** Korean medical advertising is regulated; `의료광고 사전심의필` and `보건복지부 지침` callouts are mandatory and visible on the footer. The system treats those badges as **part of trust** rather than legal afterthought — they're typeset with the same care as a UI label. *UI implication: never hide regulatory text in a sub-modal. It belongs on the surface, near the action.*
7. **Korean is primary, not localized.** The product is a Korean medical platform first; English and other-locale strings (Japanese, Thai) are translations of the Korean source-of-truth, not parallel design targets. Pretendard JP Variable was chosen because it renders Korean and Japanese with equal care — but the design grammar is Korean-first. *UI implication: a UI string that reads well in English but awkwardly in Korean must be rewritten. The reverse is acceptable.*

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable 강남언니 user segments (Korean cosmetic-procedure researchers, overseas medical-tourism inbound users, partner-clinic operators using the Welchis back-office). Names are illustrative — they do not refer to real people.*

**지수 (Jisoo), 26, 서울 신촌.** Marketing associate considering 코재수술 after her first rhinoplasty 4 years ago. Opens 강남언니 most evenings, scrolls 칼럼 articles for 30-45 minutes before bed, has saved 18 hospitals in her shortlist. Will not consult any clinic that doesn't have at least 200 후기 with photos on 강남언니. Reads the regulatory `의료광고 사전심의필` badge specifically as a trust marker — if the certification icon is missing, the clinic moves to a "not yet" list. Distrusts any banner that uses an exclamation mark.

**선생님 박 (Dr. Park), 47, 강남.** Plastic surgeon, head of a 4-doctor clinic. Uses the **Welchis** back-office daily to manage events, respond to consultations, and track inquiry-to-booking conversion. Has strong opinions about the consultation-response template UI — wants no animation delay between "new message" toast and the chat opening. Reads the Welchis Storybook component names ("HeaderDefault", "BookingTable") in the same language as his front-end developer son, which he considers oddly satisfying.

**Mei (메이), 32, 上海 → 강남.** Inbound medical-tourism user, uses the *Unni* overseas app in English with occasional 한글 cross-references when she sees a doctor's name. Decision factors in priority order: certification badge → before/after photos (`수술 전후`) → English-fluent staff indicator → price range → distance from her hotel. Will not book without a written quote in writing within the app — phone-call-only clinics are filtered out.

**준호 (Junho), 34, 대구.** Considering 모발이식 after a year of medication that plateaued. Browses on mobile during lunch breaks. Sensitive to pricing transparency — has bookmarked one clinic specifically because their event card shows `1,500모: 2,400,000원` (exact graft count, exact price) rather than the more common `상담 후 결정`. Reads the 칼럼 article gateway titles ("탈모 정도별 추천 시술") as decision aids, not entertainment.

## 14. States

| State | Treatment |
|---|---|
| **Empty (saved-hospitals list)** | White canvas. Bluegray-700 body text at 16px: `아직 저장한 병원이 없어요.` Single brand CTA below: `병원 둘러보기` (16px Pretendard weight 600, white text, `#d54300` background, 16px radius). No illustration, no mascot. |
| **Empty (search results)** | Bluegray-500 caption at 14px: `조건에 맞는 결과가 없어요.` Filter chips remain visible above so the user can adjust scope. No suggested-content fallback grid (the system trusts the user to refine the query themselves). |
| **Empty (no reviews yet on a hospital page)** | Bluegray-700 single line: `아직 후기가 작성되지 않았어요.` + secondary brand-subtle CTA: `첫 후기 작성하기` in `#fef6f4` bg / `#d54300` text. |
| **Loading (first paint — hospital list)** | Skeleton blocks at `#eff2f5` (bluegray-100), exact final card dimensions, 12px radius matching cards. 1.2s shimmer at 8% white. Price areas show narrower skeleton bars (matches the typographic width of `350,000원`) — never wider than the final value. |
| **Loading (in-place refresh — review list)** | 2px `#d54300` progress bar across the top of the list. Previous reviews stay visible and interactive. No spinner overlay. |
| **Error (form validation)** | Field-level. 1px solid `#d73f39` (red-500) border on the input. Below the input: 13px `#d73f39` text describing exactly what's invalid (`전화번호 형식을 확인해주세요. 예: 010-1234-5678.`). Never `필수 입력입니다.` alone. |
| **Error (API call failed)** | Inline banner above the action area. `#fff6f5` (red-50) background, 1px `#fbb7af` (red-200) border, 13px `#d73f39` text. Message = what failed + concrete retry guidance (`예약 정보를 불러오지 못했어요. 잠시 후 다시 시도해주세요.`). Retry button as Outline secondary. |
| **Error (network / offline)** | Full-screen state. White canvas. 16px `#131517` heading `연결이 끊어졌어요.` + 14px `#697683` subtitle `네트워크 상태를 확인해주세요.` + Outline retry button. |
| **Success (booking confirmed)** | Dedicated confirmation surface — not a toast. `#27a86d` (green-400) checkmark icon top-center (40px), heading `예약이 완료됐어요` at 20px weight 700 below, then booking facts (clinic / doctor / date / price). Single brand CTA: `예약 내역 보기`. Money-affecting actions are never toasts. |
| **Success (review saved / settings updated)** | 3s auto-dismiss toast bottom-center. `#131517` bg, white 14px weight 500 text, 12px radius, `후기를 저장했어요`. No emoji, no exclamation. |
| **Skeleton** | `#eff2f5` blocks at exact final dimensions, radius matched to the loading component (4 / 8 / 12 / 16). Linear-gradient shimmer 8% white over 1.2s. Prices and other tabular numerals always render `--` rather than a skeleton block (a placeholder block where money is expected reads as "the system thinks something is here" — visually misleading). |
| **Disabled** | Button opacity collapses surface and text together. Brand-orange CTA disabled → `#fbb8a4` (orange-200). Outline button disabled → text `#8694a2`, border `#e4e8ec`. Geometry never changes. |
| **Selected (category pill)** | Background switches from white to `#fef6f4` (orange-50). Text switches from `#131517` to `#d54300`. Border switches from `#d8dfe6` to `#fa8563` (orange-300). |

## 15. Motion & Easing

**Durations.**

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle flips, checkmark commits, focus rings |
| `motion-fast` | 150ms | Hover, focus, small reveals, pill-select state change |
| `motion-standard` | 250ms | Default — sheet open, card expand, tab switch, dropdown |
| `motion-slow` | 350ms | Booking-confirmation surface entry, success checkmark draw |
| `motion-page` | 320ms | Top-level route transitions on web; iOS-style push on mobile |

**Easings.**

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Things arriving — bottom sheets, toasts, success surfaces |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals — sheet close, toast disappear |
| `ease-standard` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Two-way transitions — tabs, collapsible filter, accordion |

**Explicitly forbidden.** No spring, no bounce, no overshoot. The medical category cannot afford the consumer-app "delight" register. A button that wiggles on press reads less trustworthy. The system intentionally has no `ease-spring` token (unlike Toss, which licenses one specifically for the money-moved checkmark — 강남언니's confirmation surface uses `motion-slow / ease-enter` linear-checkmark draw instead, no overshoot).

**Signature motions.**

1. **Bottom-sheet present (mobile).** Sheets rise from `y+40px` with `motion-standard / ease-enter`, synchronized backdrop fade from `rgba(19,21,23,0)` to `rgba(19,21,23,0.5)`. Dismissal uses `motion-fast / ease-exit`. The sheet is the dominant pattern for hospital-detail, doctor-detail, review-photo gallery.
2. **Category pill select.** When a user picks a procedure (보톡스 → selected), the pill background transitions from white → `#fef6f4` over `motion-fast / ease-standard`, the text color transitions in parallel. Border stroke transition is on the same curve. No scale animation, no shadow pulse.
3. **Booking confirmation entry.** When `예약 완료` surface mounts: checkmark icon draws from center over `motion-slow / ease-enter` (stroke-dashoffset animation, no bounce). Body content fades in at `motion-standard / ease-enter` with a `y+8px` slide. The entire sequence reads as **calm** rather than celebratory — appropriate for a high-stakes medical-procedure booking.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`. The sheet appears in place. The checkmark renders complete. The app is fully usable without any kinetic feedback.

<!--
OmD v0.1 Sources — Philosophy Layer (§10-15)

Direct verification (2026-05-13):
- https://www.gangnamunni.com/ — voice samples §10 (article titles "종아리 보톡스...", "보톡스 입문자 가이드...", header CTA "로그인/가입")
  confirmed via playwright snapshot.
- https://blog.gangnamunni.com/post/welchis/ — confirms Cell + Welchis architecture, Storybook handoff,
  custom UI library rationale (multiple products requiring consistent updates, third-party API
  conflicts with design specs, fork maintenance burden, missing component classes).
- https://www.hankookilbo.com/News/Read/A2025021715490005621 — 2025-02 Series D 428억원 round.
- https://thevc.kr/healingpaper — cumulative funding ≈ 313억, founder/CEO 홍승일.
- https://www.rocketpunch.com/@vanitymind — confirms 홍승일 as Healingpaper Co-founder/CEO (vanitymind handle).
- https://www.rocketpunch.com/companies/healingpaper — 2012-07 founding, company profile.

Not independently verified — widely reported public facts used:
- 7M+ global users across KR / JP / TH (multiple press cites, see WebSearch synthesis 2026-05-13).
- 'Unni' overseas app at 700,000 users as of 2024-03.

Personas (§13) are fictional archetypes informed by publicly observable 강남언니 user segments
(Korean cosmetic-procedure researchers, overseas medical-tourism users, partner-clinic operators).
Names and specific shortlist sizes / 모 counts are illustrative.

Interpretive claims (e.g., "the brand's refusal of pink-and-sparkle consumer-beauty cues is a refusal
of the legacy 압구정 media culture", "hairline borders are stricter aesthetic line than shadow stacks
in a medical context") are editorial readings connecting the system's observed restraint to its
category positioning, not directly sourced 강남언니 statements.
-->
