---
id: xiaohongshu
name: Xiaohongshu
country: CN
category: social-commerce
homepage: "https://www.xiaohongshu.com"
primary_color: "#FF2442"
logo:
  type: simpleicons
  slug: xiaohongshu
verified: "2026-05-19"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#ff2442"
    red-pressed: "#e01f3d"
    red-tint: "#ffecef"
    canvas: "#ffffff"
    surface: "#f5f5f5"
    text-primary: "#333333"
    text-secondary: "#999999"
    text-tertiary: "#cccccc"
    border: "#eeeeee"
    divider: "#f0f0f0"
    error: "#ff4d4f"
    success: "#52c41a"
  typography:
    family: { sans: "PingFang SC", mono: "PingFang SC" }
    header:    { size: 18, weight: 600, use: "Profile names, section titles" }
    note-title: { size: 14, weight: 500, use: "Note title, two-line clamp" }
    body:      { size: 15, weight: 400, use: "Note detail reading view" }
    meta:      { size: 12, weight: 400, use: "Username, likes, timestamp" }
    caption:   { size: 11, weight: 400, use: "Hashtags, fine labels" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24 }
  rounded: { sm: 8, md: 16, lg: 20, full: 9999 }
  shadow:
    hover: "0 2px 12px rgba(0,0,0,0.06)"
    floating: "0 -2px 16px rgba(0,0,0,0.1)"
    modal: "0 4px 24px rgba(0,0,0,0.12)"
  components:
    button-primary: { type: button, bg: "#ff2442", fg: "#ffffff", radius: 20, padding: "6px 16px", font: "14px/500 PingFang SC", use: "Follow / buy CTA, press #e01f3d" }
    button-secondary: { type: button, bg: "#ffffff", fg: "#333333", radius: 20, padding: "6px 16px", font: "14px/500 PingFang SC", use: "Following state, 1px #eeeeee border" }
    input-search: { type: input, bg: "#f5f5f5", fg: "#333333", radius: 20, padding: "8px 16px", font: "14px/400 PingFang SC", use: "Pill search, red caret" }
    note-card: { type: card, bg: "#ffffff", radius: 8, padding: "8px 10px", use: "Waterfall note card, variable height, no border" }
    chip: { type: badge, bg: "#f5f5f5", fg: "#333333", radius: 16, padding: "4px 12px", font: "12px/400 PingFang SC", use: "Hashtag chip, branded uses #ffecef bg #ff2442 text" }
    like-heart: { type: toggle, fg: "#999999", use: "Outline heart, active fill #ff2442 with scale-pop" }
    action-sheet: { type: dialog, bg: "#ffffff", radius: 16, use: "Bottom sheet, 40% black backdrop" }
    nav-tab: { type: tab, fg: "#999999", use: "Top/category tab", active: "#ff2442 text + red underline" }
  components_harvested: true
---

# Design System Inspiration of Xiaohongshu

## 1. Visual Theme & Atmosphere

Xiaohongshu (小红书) — known in English as RED or RedNote — is China's dominant lifestyle-discovery and social-commerce platform, the place a generation goes to research a skincare routine, a travel itinerary, or a restaurant before they buy or book. Its design is built around a single overwhelming idea: **the content is the interface, and the brand stays out of its way**. The signature is a vivid **Torch Red** (`#FF2442`) — the logo color, the like-heart fill, the primary CTA, the brand's whole identity — set against an almost-clinical clean white surface that lets user-generated photography blaze. The platform's defining layout is the **two-column waterfall (masonry) feed**: notes (笔记) of varying heights tile down the screen, each a portrait-or-square cover image with a short title and a creator chip, and the eye flows down the staggered columns the way it flows through a magazine. Red is the only saturated color the chrome allows itself; everything else is white, near-black text, and soft grays, precisely so the food, fashion, and travel imagery does the talking.

This is *种草* (zhòng cǎo — "planting grass") culture rendered as UI: the feed exists to seed desire through peer recommendation, and the design optimizes for browsing, saving, and the slow build of "I want that". Where a marketplace shouts price and discount, Xiaohongshu whispers aspiration. The aesthetic is soft, rounded, and approachable — generous corner radii, pill-shaped chips, a warm friendly red rather than an aggressive commerce red — because the emotional register is a trusted friend sharing a find, not a vendor closing a sale.

Typography is system-font-first with full Simplified-Chinese coverage (`PingFang SC` on Apple, `Source Han Sans SC` / `思源黑体` and `Microsoft YaHei` cross-platform), no custom brand typeface. Note titles are set in a comfortable medium weight, body and captions in regular, and the type stays modest in size so the imagery keeps primacy. The interface is dense with content but never visually loud — the loudness is reserved for the red and for the photos.

**Key Characteristics:**
- **Torch Red `#FF2442`** as the singular brand color — logo, like-heart, primary CTA, brand identity
- Two-column **waterfall / masonry feed** of variable-height note cards — the platform's defining layout
- Clean white surfaces + near-black text + soft grays so user photography dominates
- Soft, rounded, approachable shapes — generous radii, pill chips, a warm friendly red
- *种草* (grass-planting) emotional logic: browse → save → aspire → buy, not shout-and-convert
- System-font-first stack with full Simplified-Chinese fallbacks (`PingFang SC`, `思源黑体`)
- Modest type sizes so imagery keeps primacy; titles medium weight, body regular
- The red heart 👍 is the platform's emotional currency — likes/saves drive the whole discovery loop
- Content-first chrome: minimal nav, no decorative graphics, the brand defers to the creators
- Mobile-native feel even on web — card tap targets, bottom-sheet interactions, thumb-friendly

## 2. Color Palette & Roles

Xiaohongshu does not expose a public CSS token layer; the values below combine the verified brand red with the observable live-site usage. Non-red neutral hexes are best-fit approximations of observed values and are flagged accordingly.

### Brand
- **Torch Red** (`#FF2442`): The brand. Logo, primary CTA fill, like-heart fill, active/selected accents, the "RED" identity. RGB `rgb(255, 36, 66)`. Verified across logo and brand-asset sources.
- **Red Pressed** (≈`#E01F3D`, approximate): Darker red for primary-button hover/press.
- **Red Tint** (≈`#FFECEF`, approximate): Very light red wash for selected chip backgrounds and subtle highlights.

### Surface
- **Page White** (`#FFFFFF`): Default content background. The clinical-clean ground that lets photos blaze.
- **Soft Gray Surface** (≈`#F5F5F5`, approximate): Page ground behind cards, skeleton blocks, section bands.
- **Card White** (`#FFFFFF`): Note-card surface; separation from page via subtle gray + radius, not heavy borders.

### Text (near-black + opacity)
- **Primary Text** (≈`#333333` / `#000000E0`, approximate): Note titles, primary body. A soft near-black, not pure `#000`.
- **Secondary Text** (≈`#999999` / `#00000066`, approximate): Creator names, metadata, like counts, captions.
- **Tertiary / Hint** (≈`#CCCCCC`, approximate): Placeholders, disabled labels, faint timestamps.

### Border & Divider
- **Hairline Border** (≈`#EEEEEE`, approximate): Card edges, row dividers, input borders. Thin and pale.
- **Divider** (≈`#F0F0F0`, approximate): List separators.

### State
- **Like / Active** (`#FF2442`): The heart fills brand red on like — the single most important state color in the product.
- **Error** (≈`#FF4D4F`, approximate): Form errors, destructive confirmations.
- **Success** (≈`#52C41A`, approximate): Order/save confirmations.

> Role note: Red is jealously guarded. It is the brand, the like, and the primary action — and nothing else. Because the chrome is otherwise white-and-gray, the red carries enormous signal: a flash of `#FF2442` always means "this is the important thing" or "you loved this".

## 3. Typography Rules

### Font Stack
```
-apple-system, BlinkMacSystemFont, "PingFang SC", "Source Han Sans SC", "思源黑体", "Microsoft YaHei", "微软雅黑", "Helvetica Neue", Arial, sans-serif
```

System UI fonts lead (San Francisco on Apple, native sans on Android/Windows) with comprehensive Simplified-Chinese fallbacks — `PingFang SC` first on Apple platforms, then `Source Han Sans SC` / `思源黑体` and `Microsoft YaHei`. No custom brand typeface; the content imagery is the visual identity, so the type stays native and quiet.

### Weights
- **Medium (500)**: Note titles, creator names, button labels, active tabs. The "this matters" weight.
- **Regular (400)**: Body copy, descriptions, metadata, captions.
- **Semibold (600)**: Reserved for section headers, profile names, key numbers (follower counts, prices).

Xiaohongshu rarely goes to weight 700 — the brand is friendly and soft, and heavy bold reads as aggressive. Hierarchy comes from the 500/400 split + the near-black/gray opacity ladder.

### Size Scale (observed)
| Role | Size | Weight | Notes |
|---|---|---|---|
| Page/section header | `18–20px` | 600 | Profile names, section titles |
| Note title (in card) | `14–15px` | 500 | Two-line clamp on card covers |
| Body / note content | `15–16px` | 400 | Note detail reading view |
| Creator / metadata | `12–13px` | 400 | Username, likes, timestamp |
| Caption / tag | `11–12px` | 400 | Hashtags, fine labels |

### Conventions
- **Note titles clamp to two lines** in the feed; overflow ellipsizes. Density without chaos.
- **Numbers (likes, saves, followers) are set in medium weight** — engagement metrics are first-class, since they signal trust in 种草 culture.
- **Type stays modest** so the cover image keeps visual dominance — the photo is the headline, the text is the caption.
- **CJK-first** — the fallback stack is chosen so Simplified Chinese renders crisply at small sizes against busy imagery.

## 4. Component Stylings

### Buttons

**Primary CTA (Follow / 关注, Buy)**
- Background: `#FF2442`
- Text: `#FFFFFF`
- Border: none
- Radius: 20px (pill) for follow/action chips; 8px for larger CTAs
- Padding: 6px 16px (chip) / 12px 24px (full CTA)
- Font: 14px / 500
- Hover/press: background ≈`#E01F3D`
- Use: Follow button, primary purchase/action. Brand red is the action color.

**Secondary (Following / 已关注)**
- Background: `#FFFFFF`
- Text: ≈`#333333`
- Border: 1px solid ≈`#EEEEEE`
- Radius: 20px (pill)
- Padding: 6px 16px
- Font: 14px / 500
- Use: Already-following / secondary toggle state.

**Ghost / Text**
- Background: transparent
- Text: ≈`#333333` (or red for emphasis)
- Border: none
- Use: Tertiary actions, "see more".

### Inputs

**Search / Default**
- Background: ≈`#F5F5F5` (filled) or `#FFFFFF` with border
- Text: ≈`#333333`
- Border: 1px solid ≈`#EEEEEE` (or borderless filled)
- Radius: 20px (pill search) / 8px (form field)
- Padding: 8px 16px
- Font: 14px / 400
- Focus: subtle border darken; red caret
- Use: Search bar (pill), comment input, form fields.

### Cards

**Note Card (waterfall feed)**
- Background: `#FFFFFF`
- Border: none
- Radius: 8px (cover image top corners + card)
- Padding: 0 on image; 8–10px on the text footer
- Shadow: none default; very subtle lift on hover (web)
- Layout: variable-height cover image (the star) → 2-line title (14px/500) → creator avatar (20px) + name (12px/400 gray) + like-heart + count
- Use: The atomic unit of the feed. Variable height drives the masonry waterfall.

### Tags / Chips

**Topic / Hashtag Chip**
- Background: ≈`#F5F5F5` (or red-tint `#FFECEF` for branded topics)
- Text: ≈`#333333` (or `#FF2442` for branded)
- Radius: 16px (pill)
- Padding: 4px 12px
- Font: 12px / 400
- Use: `#护肤` `#穿搭` `#旅行` hashtags, topic filters above the feed.

### Like / Engagement Control

**Like Heart**
- Default: outline heart, ≈`#999999`
- Active: filled heart, `#FF2442`, with a brief scale-pop
- Count: 12px / 400 ≈`#999999` beside the heart
- Use: The platform's emotional currency. The red-fill transition is the single signature micro-interaction.

### Navigation

- Top bar (web): logo (red wordmark) left, pill search center, profile/post right
- Category/topic row: horizontal scrollable pill chips above the waterfall
- Active tab: red text + red underline indicator
- Mobile: bottom tab bar (Home / Shop / + Post / Messages / Me), the center "+" is brand red

### Bottom Sheet (mobile-native pattern)

**Action Sheet**
- Background: `#FFFFFF`
- Radius: 16px top corners
- Backdrop: black ~40%
- Use: Share, comment, more-actions — slides up from bottom. Core mobile interaction primitive.

## 5. Layout Principles

### The Waterfall
The two-column masonry feed is the brand's structural signature. Cards have variable heights (driven by cover aspect ratio), so columns stagger — the eye flows down both columns rather than scanning rigid rows. This is what makes browsing feel like flipping a magazine, and it's load-bearing to the 种草 discovery loop.

### Spacing
| Use | Value |
|---|---|
| Card gap (between waterfall items) | `8–12px` |
| Card text footer padding | `8–10px` |
| Chip padding | `4px 12px` |
| Page horizontal margin (mobile) | `12–16px` |
| Section vertical | `16–24px` |

### Grid
- Feed: 2-column masonry on mobile, 4–6 column on wide web
- Note detail: single-column reading view (image carousel + text + comments)
- Profile: 3-column tile grid of the creator's notes

### Density
Xiaohongshu is **high-density browsing, low-density reading**. The feed packs many cards (discovery is a numbers game — see more, find more to want), but tapping into a note opens a calm, single-column, generously-spaced reading view. The two modes are deliberately different.

## 6. Depth & Elevation

Xiaohongshu is **nearly flat**. Cards separate from the page via the gray ground + radius + gap, not via shadow. Depth appears only on genuinely floating UI.

| Level | Value (approx) | Use |
|---|---|---|
| Flat | none | Default — feed cards, chips, inputs |
| Hover lift (web) | `0 2px 12px rgba(0,0,0,0.06)` | Note card on hover |
| Floating | `0 -2px 16px rgba(0,0,0,0.1)` | Bottom sheet, sticky comment bar |
| Modal | `0 4px 24px rgba(0,0,0,0.12)` | Image lightbox, dialogs |

### Z-Index
- Sticky top bar / bottom tab bar above content
- Bottom sheet above page, below toast
- Image lightbox above all chrome
- Toast at the highest level

### Animation
- Like-heart scale-pop on tap (the signature)
- Bottom-sheet slide-up
- Image carousel swipe with page dots
- Smooth, friendly easing — soft, never harsh

## 7. Do's and Don'ts

- **DO** reserve `#FF2442` for the brand, the like-heart, and the primary action. A flash of red always means "important" or "loved".
- **DON'T** spray red across the chrome. Its scarcity is its signal — the white-and-gray ground is what makes it loud.
- **DO** build the feed as a two-column variable-height masonry waterfall. This is the structural brand signature.
- **DON'T** force the feed into rigid equal-height rows — that kills the magazine-browse rhythm and the 种草 flow.
- **DO** let the cover image be the headline; keep titles to two lines and modest size.
- **DON'T** let chrome or type compete with user photography. The content is the interface.
- **DO** use generous radii and pill chips — the brand is soft, friendly, approachable.
- **DON'T** use sharp corners or aggressive commerce styling. Xiaohongshu whispers aspiration; it doesn't shout discount.
- **DO** make the like-heart's red-fill pop the signature micro-interaction.
- **DON'T** add celebratory confetti or loud animations elsewhere — the friendly red and the soft motion carry the personality.
- **DO** lead the font stack with `PingFang SC` / `思源黑体` so Simplified Chinese renders crisply against busy imagery.
- **DON'T** go weight 700 — heavy bold reads aggressive; the friendly register tops out at 500/600.

## 8. Responsive Behavior

| Width | Behavior |
|---|---|
| Desktop `>1280px` | 4–6 column waterfall, top bar with centered search, wide note-detail modal |
| Laptop `1024–1280px` | 3–4 column waterfall |
| Tablet `768–1024px` | 2–3 column waterfall |
| Mobile `<768px` | 2-column waterfall, bottom tab bar, full-screen note detail, bottom-sheet actions |

### Touch & Mobile
- Mobile-native even on web: thumb-friendly card targets, bottom sheets, swipe carousels
- Bottom tab bar with brand-red center "+" post button
- Min 44px tap targets; like-heart generous hit area
- Image carousels swipe horizontally with page dots

### Media
- Cover images drive card height; `object-fit: cover`, lazy-loaded
- Note detail: full-bleed image carousel at top, text + comments below
- Video notes autoplay muted in the feed on scroll-into-view

## 9. Agent Prompt Guide

### Quick Color Reference
- Brand / like / primary CTA: `#FF2442` (pressed ≈`#E01F3D`, tint ≈`#FFECEF`)
- Page bg: `#FFFFFF`; card ground: ≈`#F5F5F5`
- Primary text: ≈`#333333`; secondary: ≈`#999999`; hint: ≈`#CCCCCC`
- Border/divider: ≈`#EEEEEE`

### Example Component Prompts
- "Create a Xiaohongshu note card: white bg, 8px radius, no border. Variable-height cover image (top corners 8px), then 2-line title clamp 14px weight 500 `#333`, then a row with 20px circular creator avatar + name 12px `#999` + an outline like-heart that fills `#FF2442` on tap + count 12px `#999`. No shadow; sits in a 2-column masonry gap of 10px."
- "Build a Xiaohongshu follow button: pill (20px radius), bg `#FF2442`, white text 14px weight 500, padding `6px 16px`. Following state: white bg, `#333` text, 1px `#EEE` border, same pill shape."
- "Design a Xiaohongshu pill search bar: filled `#F5F5F5` bg, 20px radius, 14px `#333` text, gray search icon left, padding `8px 16px`. No hard border."
- "Create the like-heart micro-interaction: outline heart `#999` → on tap, fill `#FF2442` with a scale `1 → 1.3 → 1` pop over 300ms, count increments. This is the signature interaction."

### Iteration Guide
1. **`#FF2442` is sacred** — brand, like, primary action only. Scarcity is the signal.
2. **Two-column variable-height masonry** is the structural signature; never rigid rows.
3. **Cover image is the headline.** Titles 2 lines, modest size; content dominates chrome.
4. **Soft and rounded** — generous radii, pill chips, friendly red. No sharp commerce styling.
5. **The like-heart red-fill pop** is the one micro-interaction to get right.
6. **`PingFang SC` / `思源黑体` fallbacks**, weights cap at 500/600, hierarchy via near-black/gray opacity.
7. **Nearly flat** — separate cards with gray ground + radius + gap, not shadow.
8. **High-density feed, calm single-column reading view** — two deliberately different modes.

---

## 10. Voice & Tone

Xiaohongshu's voice is **warm, peer-level, and enthusiastic-but-credible** — the voice of a slightly-more-stylish friend who has already tried the thing and genuinely wants you to love it too. It is not a brand voice talking *at* users; it's the platform getting out of the way so creators' voices come through, and the system copy matches that register: casual Simplified Chinese using `你` (not the formal `您`), friendly, encouraging, never corporate. The native content vocabulary is famous — 种草 (planting the desire to buy), 拔草 (un-planting, i.e. buying it or deciding against), 避雷 (avoiding a dud), 笔记 (note, the unit of content), 干货 (substance/useful content), 好物 (a great find). The platform's chrome copy borrows this lexicon lightly so it feels native to the community rather than imposed on it.

| Context | Tone |
|---|---|
| CTAs | Short, friendly verb. `关注` (Follow), `发布` (Post), `收藏` (Save), `购买`. Casual `你` register. |
| Note prompts | Encouraging creator-facing copy. `分享你的好物` (Share your great find), `记录生活` (Record your life). |
| Empty states | Warm, inviting, never blaming. `还没有笔记，去发现更多吧` (No notes yet — go discover more). |
| Engagement | Counts beside icons — likes, saves, comments. The number is the social proof; no decorative units. |
| Error messages | Friendly and blameless, single sentence + fix. Never a cold system tone. |
| Search empty | Gentle redirect, suggest related topics. `没有找到相关笔记，试试其他关键词`. |
| Community guidelines | Slightly more formal but still warm — the platform protects the trust that 种草 culture depends on. |

**Forbidden phrases.** Hard-sell commerce language that breaks the trusted-friend register — `限时抢购！` (limited-time grab!) with exclamation aggression, `最低价` / `全网最便宜` (cheapest anywhere) hype, fake-scarcity FOMO. The formal `您` in casual feed/social contexts (it reads as a corporation intruding on a friend space — reserve `您` for legal/payment surfaces only). Cold apology openers (`抱歉，系统错误`) — state the condition warmly instead. Over-promising superlatives that undermine the peer-credibility the platform sells.

**Voice samples.**
- `关注` / `收藏` — follow / save CTAs, short friendly verbs. <!-- illustrative: standard Xiaohongshu social CTA register; not quoted as a specific live string -->
- `分享你的好物` — creator-prompt pattern using native 好物 lexicon (Share your great find). <!-- illustrative: reflects XHS creator-prompt register; not verified verbatim -->
- `种草` / `拔草` / `避雷` — the platform's signature community vocabulary that the brand voice leans on. <!-- cited: widely documented XHS community lexicon, WebSearch 2026-05-19 -->
- `还没有笔记，去发现更多吧` — warm empty-state pattern. <!-- illustrative: follows XHS warm-empty-state convention -->

## 11. Brand Narrative

Xiaohongshu (小红书 — "Little Red Book") was founded in **2013** in Shanghai by **Charlwin Mao (毛文超)** and **Miranda Qu (瞿芳)**. It began not as a social network but as a **shopping guide** — a PDF and then an app that helped Chinese travelers figure out what to actually buy abroad, pooling trustworthy peer recommendations to solve a real problem: overseas shopping was full of fakes, markups, and uncertainty, and official brand information was untrustworthy. That origin defines the brand to this day. Xiaohongshu's entire value proposition is **peer trust at scale** — the belief that a real person's genuine review (a 笔记, a "note") is worth more than any advertisement. ([en.wikipedia.org/wiki/Xiaohongshu](https://en.wikipedia.org/wiki/Xiaohongshu) — founding facts via WebSearch 2026-05-19) <!-- source: Wikipedia / brand-asset sources; not re-verified against a primary XHS source this pass -->

From that shopping guide grew the 种草 ("planting grass") economy: creators post lifestyle notes — a skincare routine, a café, an outfit, a trip — and readers browse, save, and slowly accumulate desire until they "拔草" (pull the grass: buy it, or decide against). The two-column waterfall feed, the white-and-red restraint, the soft friendly shapes — all of it serves this slow-burn discovery loop rather than the shout-and-convert logic of a marketplace. The platform later grew an integrated e-commerce layer so the journey from "I want that" to "I bought it" never leaves the app, and rebranded internationally as **RED / RedNote** (the app styled `rednote` on the app stores from January 2025), gaining a wave of Western users in early 2025.

What Xiaohongshu refuses: the hard-sell aggression of marketplace commerce, decorative brand color that drowns out user photography, the corporate `您` register that breaks the trusted-friend feeling, and any design that competes with the creators' content. What it embraces: peer trust as the core asset, the content as the interface, a single jealously-guarded brand red, soft approachable shapes, and a community vocabulary (种草/拔草/笔记/好物) so distinctive it became the lingua franca of Chinese lifestyle commerce.

## 12. Principles

1. **The content is the interface.** The brand defers to the creators. *UI implication:* White-and-gray chrome, minimal decoration, modest type — every pixel of attention budget goes to the cover image. If a screen feels brand-heavy, strip it back.

2. **Red is scarce, therefore loud.** `#FF2442` is the brand, the like, and the primary action — nothing else. *UI implication:* Never use red for decoration, dividers, or generic accents. Because the rest is white and gray, every red element carries maximum signal: "important" or "you loved this".

3. **The waterfall is the discovery engine.** Variable-height masonry makes browsing feel like flipping a magazine, which is how 种草 works. *UI implication:* Build the feed as a two-column staggered masonry, card height driven by cover aspect ratio. Rigid rows break the loop.

4. **Peer trust is the product.** Genuine notes beat advertisements. *UI implication:* Surface creator identity and engagement metrics (likes/saves) prominently — they're the trust signals. Make the like-heart's red-fill satisfying; it's the act that powers the whole economy. Never disguise ads as organic notes.

5. **Soft, not aggressive.** A trusted friend sharing a find, not a vendor closing a sale. *UI implication:* Generous radii, pill chips, friendly warm red, calm motion, casual `你` copy. No fake scarcity, no shout-y discount badges, no hard-sell.

6. **Two modes: browse fast, read calm.** *UI implication:* High-density discovery feed; calm single-column generously-spaced reading view on tap-in. Design the two modes deliberately differently.

## 13. Personas

*Personas are fictional archetypes informed by publicly described Xiaohongshu user segments (lifestyle-conscious young consumers, predominantly women in tier-1/2 cities, plus creators), not individual people.*

**李梦 (Li Meng), 26, Shanghai.** Marketing professional. Opens Xiaohongshu before every purchase decision — searches "敏感肌 防晒" before buying sunscreen, "上海 brunch" before booking. Saves notes obsessively into collections, "拔草" (buys) maybe one in ten. Trusts a note with real before/after photos far more than any ad. Posts occasionally but mostly browses.

**王琳 (Wang Lin), 23, Chengdu.** Part-time lifestyle creator. Posts skincare and outfit notes, obsesses over cover-image composition because the waterfall feed rewards a great thumbnail. Lives and dies by the like-heart count — it's her social proof and, increasingly, her income. Uses the native lexicon fluently (好物 / 干货 / 避雷) and writes in the warm peer register the community expects.

**Sarah Kim, 29, Los Angeles.** Joined as a "RedNote" user in the early-2025 Western wave. Came curious, stayed for the genuinely useful travel and beauty notes. Navigates around the Chinese-language chrome and relies on the visual waterfall — proof that the content-is-the-interface principle works even across a language barrier. Finds the trusted-friend tone refreshing versus the ad-saturated Western feeds.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no notes / new profile)** | White canvas, soft gray illustration, one warm line (`还没有笔记，去发现更多吧`), one brand-red CTA to post or explore. Inviting, never blaming. |
| **Empty (search no results)** | One gentle gray line + suggested related topics/hashtags. `没有找到相关笔记，试试其他关键词`. |
| **Loading (feed)** | Masonry skeleton — gray rounded blocks at varied heights matching the waterfall, gentle shimmer. |
| **Loading (note detail)** | Cover-image skeleton + text-line skeletons; image fades in when ready. |
| **Error (form/comment)** | Inline ≈`#FF4D4F` message below the field, one warm blameless sentence + fix. |
| **Error (network)** | Top inline banner, soft, with a retry — disappears quietly on reconnect. Never a blocking modal. |
| **Success (note published)** | Friendly toast (`发布成功`), brief, with a link to view; the note appearing in the profile grid is the real reward. |
| **Success (saved/收藏)** | Save icon fills + brief toast; the item lands in the user's collection. |
| **Like** | Outline heart → filled `#FF2442` with a scale-pop; count increments. The signature success micro-interaction. |
| **Skeleton** | Gray rounded blocks at exact varied dimensions matching the masonry; gentle shimmer. |
| **Disabled** | Reduced opacity + gray fill together; disabled control keeps its rounded shape. |

## 15. Motion & Easing

Xiaohongshu's motion is **soft, friendly, and content-forward** — playful enough to feel warm, restrained enough to never upstage the photography. The one true flourish is the like-heart pop; everything else glides.

**Durations:**

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Tab/toggle commits |
| `motion-fast` | 200ms | Hover, chip select, button feedback |
| `motion-standard` | 300ms | Like-heart pop, bottom-sheet slide, carousel swipe |
| `motion-slow` | 400ms | Note-detail open, image lightbox |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | Default two-way transitions |
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Bottom sheets, sheets arriving |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-pop` | `cubic-bezier(0.34, 1.4, 0.64, 1)` | **Reserved.** The like-heart scale-pop only — soft overshoot, nowhere else. |

**Spring stance.** Overshoot/spring is **reserved exclusively for the like-heart**. The like is the emotional center of the product — the moment a user expresses "I love this" — and the small `1 → 1.3 → 1` scale-pop with `ease-pop` is the only place the UI is allowed to feel kinetic and joyful. Everywhere else, motion is calm gliding, so the heart-pop stays special.

**Signature motions.**
1. **Like-heart pop.** Outline → filled `#FF2442` with `1 → 1.3 → 1` scale over `motion-standard / ease-pop`, count increments. The defining micro-interaction.
2. **Bottom-sheet slide-up.** Action sheets and comment trays rise from the bottom over `motion-standard / ease-enter`; backdrop dims to ~40% black. The core mobile primitive.
3. **Waterfall reveal.** New cards fade in over `motion-fast / ease-standard` as they enter on scroll — fade, not slide, so the masonry settles calmly.
4. **Note-detail open.** Tapping a card opens the detail view with a smooth cover-image cross-fade/expand over `motion-slow / ease-enter`; image carousel ready underneath.
5. **Reduce motion.** Under `prefers-reduced-motion: reduce`, the heart-pop flattens to an instant fill, sheets appear without slide, and card reveals are immediate. Fully functional, no kinetics.

<!--
OmD v0.1 Sources — Xiaohongshu / RED / RedNote

Tier 1 (live): xiaohongshu.com homepage via WebFetch 2026-05-19 — confirmed the
signature red brand identity, the two-column waterfall/masonry feed of note
cards (cover image + title + creator + engagement), white/neutral content-first
surfaces, clean sans-serif type, and the 种草 (grass-planting) lifestyle-commerce
positioning. No public CSS token layer is exposed.

Tier 2 (brand color / facts): WebSearch 2026-05-19 — Torch Red #FF2442 (RGB
255,36,66) verified as the brand color across brand-asset sources (Brandfetch,
cdnlogo, brandlogos) and Mobbin's "Chinese Red" color reference. Wikipedia entry
confirms founding 2013 / Shanghai / founders Charlwin Mao (毛文超) & Miranda Qu
(瞿芳) / shopping-guide origin / RED & RedNote rebrand (rednote on app stores
from Jan 2025 / early-2025 Western user wave).

⚠️ SOURCING CAVEAT: Only #FF2442 is verified. All other hexes in §2/§4 (neutral
grays, red-pressed, red-tint, error/success) are BEST-FIT APPROXIMATIONS of
observed live-site usage and common mobile-app neutral palettes, flagged
"approximate" inline. Do not present them to the brand owner as verbatim XHS
tokens.

Community lexicon (种草/拔草/避雷/笔记/好物/干货) in §10 is widely documented public
XHS vocabulary. Voice samples marked illustrative are not quoted live strings.
Personas (§13) are fictional archetypes.
-->

---

**Verified:** 2026-05-19 (omd:add-reference — CN batch)
**Tier 1 sources:** xiaohongshu.com (live — red brand identity, two-column waterfall/masonry note-card feed, content-first white/neutral surfaces, 种草 social-commerce positioning; no public token layer).
**Tier 2 sources:** Brandfetch / cdnlogo / brandlogos + Mobbin "Chinese Red" (Torch Red `#FF2442` RGB 255,36,66 verified); Wikipedia (founding 2013 Shanghai, Charlwin Mao 毛文超 & Miranda Qu 瞿芳, shopping-guide origin, RED/RedNote rebrand Jan 2025).
**Style ref:** `pinkoi` (Asian lifestyle-commerce tone) + content-first social patterns.
**Conflicts unresolved:** Only `#FF2442` is verified; all other §2/§4 hexes are flagged approximate (observed usage, no public token layer).
