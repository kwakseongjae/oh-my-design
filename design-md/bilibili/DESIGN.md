---
id: bilibili
name: Bilibili
country: CN
category: video-community
homepage: "https://www.bilibili.com"
primary_color: "#FB7299"
logo:
  type: simpleicons
  slug: bilibili
verified: "2026-05-19"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-08"
  note: "Only bili pink #FB7299 verified; bili blue, gold coin, and all neutrals are best-fit approximations flagged in prose — no public token layer."
  colors:
    primary: "#FB7299"
    primary-hover: "#F25D8E"
    primary-tint: "#FFF0F4"
    brand: "#FB7299"
    brand-blue: "#00AEEC"
    brand-blue-dark: "#0089C7"
    canvas: "#FFFFFF"
    surface: "#F4F4F4"
    foreground: "#18191C"
    muted: "#61666D"
    hint: "#C9CCD0"
    hairline: "#E3E5E7"
    divider: "#F1F2F3"
    on-primary: "#FFFFFF"
    coin: "#FFB027"
    error: "#FF4D4F"
    success: "#52C41A"
  typography:
    family: { sans: "PingFang SC, Source Han Sans SC, 思源黑体, Microsoft YaHei, sans-serif", mono: "monospace" }
    page-header:   { size: 18, weight: 600, lineHeight: 1.3, use: "Channel titles, section heads" }
    video-title:   { size: 14, weight: 500, lineHeight: 1.4, use: "Video title in card, 2-line clamp" }
    body:          { size: 14, weight: 400, lineHeight: 1.5, use: "Video detail, comments" }
    metadata:      { size: 12, weight: 400, lineHeight: 1.4, use: "UP主 name, view/danmaku counts" }
    caption:       { size: 11, weight: 400, lineHeight: 1.4, use: "Tags, fine labels, durations" }
  spacing: { xs: 4, sm: 8, md: 16, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 4, md: 6, lg: 8, full: 9999 }
  shadow:
    hover: "rgba(0,0,0,0.08) 0px 2px 12px 0px"
    floating: "rgba(0,0,0,0.1) 0px 4px 16px 0px"
    modal: "rgba(0,0,0,0.12) 0px 6px 24px 0px"
  components_harvested: true
  components:
    button-primary: { type: button, bg: "#FB7299", fg: "#FFFFFF", radius: "6px", padding: "6px 16px", font: "14px / 500", hover: "bg #F25D8E", use: "Follow / Sign up — pink is the action color" }
    button-secondary: { type: button, bg: "#FFFFFF", fg: "#61666D", border: "1px solid #E3E5E7", radius: "6px", padding: "6px 16px", font: "14px / 500", use: "Following / ghost toggle" }
    input-search: { type: input, bg: "#FFFFFF", fg: "#18191C", border: "1px solid #E3E5E7", radius: "8px", padding: "8px 14px", font: "14px / 400", focus: "border transitions to bili pink/blue", use: "Top search bar, comment input, form fields" }
    coin-action: { type: toggle, bg: "transparent", fg: "#FFB027", use: "Signature 投币 give-a-coin reward gesture, gold when active" }
    video-card: { type: card, bg: "#FFFFFF", radius: "6px", padding: "0 cover / 8px footer", shadow: "rgba(0,0,0,0.08) 0px 2px 12px 0px", hover: "subtle lift + cover preview", use: "16:9 cover + duration/count overlays, 2-line title 14px/500, UP主 name 12px/400 — atomic feed unit" }
    tag-chip: { type: badge, bg: "#F4F4F4", fg: "#61666D", radius: "4px", padding: "4px 10px", font: "12px / 400", active: "bg #FFF0F4 + fg #FB7299", use: "分区 partition filters above feed" }
    overlay-pill: { type: badge, bg: "rgba(0,0,0,0.6)", fg: "#FFFFFF", radius: "4px", padding: "2px 6px", font: "12px / 400", use: "Duration + view/danmaku counts over cover" }
    nav-tab: { type: tab, fg: "#61666D", active: "fg #FB7299 + pink bottom border", use: "Partition (分区) horizontal category nav" }
---

# Design System Inspiration of Bilibili

## 1. Visual Theme & Atmosphere

Bilibili (哔哩哔哩, affectionately "B站" — "B-site") is China's home of ACG culture — anime, comics, and games — and the video community where a generation grew up, and its design wears that identity on its sleeve. The signature is the unmistakable **bili pink** (`#FB7299`) — a soft, warm, distinctly youthful pink that fans simply call "粉" — paired with a friendly **bili blue** accent and a clean white content surface. Bilibili's color is its personality: where most video platforms reach for red (YouTube), black (premium streamers), or corporate blue, Bilibili chose a gentle pink and made it iconic. The chrome is bright, light, and approachable; the feed is a card-based grid of video thumbnails, each showing a cover, duration, view/danmaku counts, title, and uploader (亲切地称为 "UP主"). The brand's emotional register is *community and fun* — this is a place of fandom, of bullet-comments (弹幕 / danmaku) flying across the screen, of in-jokes and shared culture, not a sterile content-delivery utility.

The platform's defining UX primitive is **danmaku (弹幕)** — real-time bullet comments that scroll across the video itself, turning passive watching into a shared, almost-live communal experience. This is Bilibili's soul, and it shapes the design: the video player is the heart of the product, the comment culture is celebrated rather than hidden, and the whole interface signals "you're among friends who love the same things". Bilibili's mascots — the **22娘 and 33娘 (2233 girls)**, two anime-style characters — appear in empty states, errors, and brand moments, reinforcing the ACG warmth. The signature greeting `(゜-゜)つロ 干杯~` (a kaomoji raising a glass, "cheers~") is the brand's voice in a single string.

Typography is system-font-first with full Simplified-Chinese coverage (`PingFang SC`, `Source Han Sans` / `思源黑体`, `Microsoft YaHei`), no custom brand typeface — the warmth comes from the pink and the mascots, not from type. Type sizes are modest, the layout is content-dense (a video community is a discovery machine), but the pink chrome and friendly copy keep it from ever feeling cold.

**Key Characteristics:**
- **bili pink `#FB7299`** — the iconic, soft, youthful brand pink fans call "粉"; the brand's whole personality
- **bili blue** accent (≈`#00AEEC`) — secondary brand color, links, the logo's TV/bubble
- Card-based video-thumbnail grid feed (cover + duration + view/danmaku counts + title + UP主)
- **Danmaku (弹幕)** bullet-comments as the soul of the product — communal, near-live watching
- ACG / anime / youth-culture identity worn proudly — fandom, in-jokes, shared culture
- The **2233 girls (22娘/33娘)** mascots in empty/error/brand surfaces; the `(゜-゜)つロ 干杯~` kaomoji greeting
- Bright, light, white-and-pink chrome — friendly and approachable, never sterile or premium-dark
- System-font-first + Simplified-Chinese fallbacks (`PingFang SC`, `思源黑体`); warmth from color, not type
- The video player is the heart — comment culture celebrated, not hidden
- Content-dense discovery feed kept warm by pink chrome + community copy

## 2. Color Palette & Roles

Bilibili does not expose a public CSS token layer; the values below combine the verified bili pink with observable live-site usage. Non-pink neutral hexes are best-fit approximations and flagged accordingly.

### Brand
- **bili pink** (`#FB7299`): The brand. Primary CTA fill, active/selected states, logo, like accents, the platform's identity. Fans call it "粉". RGB `rgb(251, 114, 153)`. Verified as Bilibili's official pink ("bili pink" / "girl pink").
- **Pink Pressed** (≈`#F25D8E`, approximate): Darker pink for primary-button hover/press.
- **Pink Tint** (≈`#FFF0F4`, approximate): Light pink wash for selected backgrounds, subtle highlights.
- **bili blue** (≈`#00AEEC`, approximate): The secondary brand color — links, the logo's TV/speech-bubble mark, some interactive accents. The cool counterpoint to the warm pink.
- **bili blue dark** (≈`#0089C7`, approximate): blue hover/press.

### Surface
- **Page White** (`#FFFFFF`): Default content background. Bright and light.
- **Soft Gray Surface** (≈`#F4F4F4` / `#F6F7F8`, approximate): Page ground behind cards, skeleton blocks.
- **Card White** (`#FFFFFF`): Video-card surface.

### Text (near-black + opacity)
- **Primary Text** (≈`#18191C` / `#212121`, approximate): Video titles, primary body.
- **Secondary Text** (≈`#61666D` / `#9499A0`, approximate): UP主 names, view/danmaku counts, metadata.
- **Tertiary / Hint** (≈`#C9CCD0`, approximate): Placeholders, disabled labels.

### Border & Divider
- **Hairline Border** (≈`#E3E5E7`, approximate): Card edges, input borders, dividers.
- **Divider** (≈`#F1F2F3`, approximate): List/section separators.

### State
- **Like / Active** (`#FB7299`): The like and active states fill brand pink.
- **Coin (投币) / Highlight** (≈`#FFB027`, approximate): The gold "coin" reward action accent (a signature Bilibili interaction).
- **Error** (≈`#FF4D4F`, approximate): Form errors, destructive confirmations.
- **Success** (≈`#52C41A`, approximate): Confirmations.

> Role note: bili pink is the personality — it appears on the brand, the primary action, and the active state, and its warmth is the whole point. bili blue is the cool secondary accent (links, logo). The gold coin color is reserved for the distinctive "投币" (give-a-coin) reward gesture.

## 3. Typography Rules

### Font Stack
```
-apple-system, BlinkMacSystemFont, "PingFang SC", "Source Han Sans SC", "思源黑体", "Microsoft YaHei", "微软雅黑", "Helvetica Neue", Arial, sans-serif
```

System UI fonts lead with comprehensive Simplified-Chinese fallbacks (`PingFang SC` on Apple, `Source Han Sans SC` / `思源黑体` and `Microsoft YaHei` cross-platform). No custom brand typeface — Bilibili's warmth comes from the pink palette and the mascots, so the type stays native and readable.

### Weights
- **Medium (500)**: Video titles, active tabs, button labels, section heads. The "this matters" weight.
- **Regular (400)**: Body, UP主 names, metadata, counts.
- **Semibold (600)**: Reserved for page titles, key numbers, emphasis.

Bilibili rarely uses weight 700 — the friendly community register tops out at 500/600. Hierarchy comes from the 500/400 split + the near-black/gray opacity ladder.

### Size Scale (observed)
| Role | Size | Weight | Notes |
|---|---|---|---|
| Page/section header | `18–20px` | 600 | Channel titles, section heads |
| Video title (in card) | `14–15px` | 500 | Two-line clamp on cards |
| Body / description | `14–15px` | 400 | Video detail, comments |
| UP主 / metadata | `12–13px` | 400 | Uploader name, view/danmaku counts |
| Caption / tag | `11–12px` | 400 | Tags, fine labels, durations |

### Conventions
- **Video titles clamp to two lines** in the feed; overflow ellipsizes.
- **Counts are everywhere and first-class** — views (播放), danmaku (弹幕), likes, coins — set in gray metadata weight; they're the social signals of a video community.
- **Type stays modest** so the thumbnail cover does the visual work; the cover is the headline.
- **CJK-first** — fallback stack chosen so Simplified Chinese renders crisply at small sizes.

## 4. Component Stylings

### Buttons

**Primary CTA (Follow UP主 / 关注, Sign up)**
- Background: `#FB7299`
- Text: `#FFFFFF`
- Border: none
- Radius: 6px (or pill 16px for follow chips)
- Padding: 6px 16px
- Font: 14px / 500
- Hover/press: background ≈`#F25D8E`
- Use: Primary action — Follow, Sign up. bili pink is the action color.

**Secondary (Following / 已关注, ghost)**
- Background: `#FFFFFF`
- Text: ≈`#61666D`
- Border: 1px solid ≈`#E3E5E7`
- Radius: 6px
- Padding: 6px 16px
- Font: 14px / 500
- Use: Already-following / secondary toggle.

**Coin (投币) Action**
- Background: transparent (icon button)
- Icon: gold ≈`#FFB027` when active
- Use: The signature "give a coin" reward gesture under videos — gold accent.

### Inputs

**Search / Default**
- Background: `#FFFFFF` (or filled ≈`#F4F4F4`)
- Text: ≈`#18191C`
- Border: 1px solid ≈`#E3E5E7`
- Radius: 8px (search) / 6px (form field)
- Padding: 8px 14px
- Font: 14px / 400
- Focus: border transitions to bili pink/blue
- Use: Top search bar, comment input, form fields.

### Cards

**Video Card (feed grid)**
- Background: `#FFFFFF`
- Border: none
- Radius: 6–8px (cover top corners + card)
- Padding: 0 on cover; 8px on text footer
- Shadow: none default; subtle lift on hover (web)
- Layout: 16:9 cover image (the star, with a duration pill bottom-right + view/danmaku overlay bottom-left) → 2-line title (14px/500) → UP主 name (12px/400 gray)
- Use: The atomic unit of the discovery feed.

### Tags / Badges

**Partition / Tag Chip**
- Background: ≈`#F4F4F4` (or pink-tint `#FFF0F4` for active)
- Text: ≈`#61666D` (or `#FB7299` active)
- Radius: 4px (or pill)
- Padding: 4px 10px
- Font: 12px / 400
- Use: 分区 (partition) filters — 番剧/游戏/音乐/科技 etc., tags above the feed.

**Duration / Count Overlay (on cover)**
- Background: black ~60% pill
- Text: `#FFFFFF`
- Radius: 4px
- Padding: 2px 6px
- Font: 12px / 400
- Use: Duration bottom-right; view/danmaku counts bottom-left, over the thumbnail.

### Navigation

- Top bar: bili pink/blue logo (TV-bubble + 22/33 mascot energy) left, partition nav, search center, login/upload right
- Partition (分区) row: horizontal category nav — 首页/番剧/直播/游戏中心/会员购…
- Active nav item: bili pink text + pink underline indicator
- Mobile: bottom tab bar, the center upload "+" in brand pink

### Video Player (the heart)

- Large 16:9 player, dark player chrome
- **Danmaku layer**: bullet comments scroll right-to-left across the video; toggle + density controls
- Below: title, UP主, action row (点赞 like / 投币 coin / 收藏 favorite / 转发 share) — the signature "一键三连" (one-click triple: like+coin+favorite)
- Comment section + danmaku list

## 5. Layout Principles

### Spacing
| Use | Value |
|---|---|
| Card gap | `12–16px` |
| Card text footer padding | `8px` |
| Chip padding | `4px 10px` |
| Page horizontal margin | `12–24px` |
| Section vertical | `16–24px` |

### Grid
- Feed: responsive card grid — 4–6 columns wide web, 2 columns mobile
- Video detail: player + info (left/main) + recommended-videos rail (right)
- Channel/partition pages: grid + horizontal scroll rows per sub-category

### Density
Bilibili is **high-density discovery**. A video community lives on showing many videos at once — the feed packs cards, the partition nav is broad, the recommended rail is long. The pink chrome and friendly copy keep the density warm rather than overwhelming.

## 6. Depth & Elevation

Bilibili web chrome is **mostly flat**. Cards separate via gray ground + radius + gap; depth appears on floating UI and on hover.

| Level | Value (approx) | Use |
|---|---|---|
| Flat | none | Default — feed cards, chips, inputs |
| Hover lift (web) | `0 2px 12px rgba(0,0,0,0.08)` | Video card on hover |
| Floating | `0 4px 16px rgba(0,0,0,0.1)` | Dropdowns, popovers, mini-player |
| Modal | `0 6px 24px rgba(0,0,0,0.12)` | Login dialog, share sheet |

### Z-Index
- Sticky top bar above content
- Floating mini-player / dropdowns above page
- Modal + mask above dropdowns
- Toast at highest level

### Animation
- Card hover lift + cover preview (gif/video preview on hover, web)
- Danmaku scroll (the signature kinetic layer)
- "一键三连" long-press triple-action burst animation (like+coin+favorite)
- Friendly, soft easing

## 7. Do's and Don'ts

- **DO** make bili pink `#FB7299` the brand and the primary action — it's the personality, lean into it.
- **DON'T** swap the pink for a red or a corporate blue; the pink IS Bilibili. Use bili blue only as the cool secondary accent.
- **DO** build the feed as a card grid of 16:9 thumbnails with duration + view/danmaku overlays + 2-line title + UP主.
- **DON'T** hide the engagement counts — views, danmaku, coins are the social proof of a video community.
- **DO** celebrate danmaku and the "一键三连" (like+coin+favorite) culture in the player UI; the comment culture is the soul.
- **DON'T** treat Bilibili like a sterile content-delivery player — the community warmth is the differentiator.
- **DO** use the 2233 mascots and friendly kaomoji copy (`(゜-゜)つロ 干杯~`) in empty/error/brand moments.
- **DON'T** write cold corporate system copy — the ACG-community warmth is the brand voice.
- **DO** keep chrome bright, light, white-and-pink; generous radii (4–8px); friendly shapes.
- **DON'T** go dark-premium or sharp-corporate — that's the opposite of the youth-community register.
- **DO** lead the font stack with `PingFang SC` / `思源黑体`; cap weight at 500/600.
- **DON'T** go weight 700 — heavy bold reads aggressive against the friendly register.

## 8. Responsive Behavior

| Width | Behavior |
|---|---|
| Desktop `>1280px` | 5–6 column card grid, full partition nav, player + recommended rail |
| Laptop `1024–1280px` | 4-column grid, recommended rail narrows |
| Tablet `768–1024px` | 3-column grid, partition nav scrolls, recommended rail below player |
| Mobile `<768px` | 2-column grid, bottom tab bar, full-width player, danmaku toggle prominent |

### Touch & Mobile
- Bottom tab bar with brand-pink center upload "+"
- Full-width player; danmaku send + toggle thumb-accessible
- Min 44px tap targets; generous like/coin/favorite hit areas
- Cover hover-preview (web) → tap-to-play (mobile)

### Media
- Video covers: 16:9, `object-fit: cover`, lazy-loaded, hover-preview on web
- Player: adaptive bitrate, danmaku layer overlaid
- Partition pages mix grid + horizontal-scroll rows

## 9. Agent Prompt Guide

### Quick Color Reference
- Brand / like / primary CTA: `#FB7299` (pressed ≈`#F25D8E`, tint ≈`#FFF0F4`)
- Secondary accent / links: bili blue ≈`#00AEEC`
- Coin/reward: gold ≈`#FFB027`
- Page bg: `#FFFFFF`; card ground: ≈`#F4F4F4`
- Primary text: ≈`#18191C`; secondary: ≈`#61666D`; hint: ≈`#C9CCD0`; border: ≈`#E3E5E7`

### Example Component Prompts
- "Create a Bilibili video card: white bg, 6px radius, no border. 16:9 cover (top corners 6px) with a duration pill (black-60% bg, white 12px) bottom-right and view/danmaku counts overlay bottom-left, then 2-line title clamp 14px weight 500 `#18191C`, then UP主 name 12px `#61666D`. Subtle hover lift `0 2px 12px rgba(0,0,0,0.08)` with cover preview."
- "Build a Bilibili follow button: bg `#FB7299`, white text 14px weight 500, 6px radius, padding `6px 16px`. Hover ≈`#F25D8E`. Following state: white bg, `#61666D` text, 1px `#E3E5E7` border."
- "Design the Bilibili player action row: like (heart, fills `#FB7299`), coin/投币 (fills gold `#FFB027`), favorite (star), share — with a 'one-click triple' (一键三连) long-press that bursts all three. Counts beside each icon in `#61666D`."
- "Create a Bilibili empty state: bright white, a 2233-girls mascot illustration, a friendly kaomoji line like `(゜-゜)つロ 干杯~`, one pink CTA. Warm and community-toned, never cold."

### Iteration Guide
1. **bili pink `#FB7299` is the personality** — brand + primary action + active state. Lean in; never swap for red.
2. **bili blue is the cool secondary**; gold is the coin/reward gesture. Don't expand the palette beyond these.
3. **16:9 thumbnail cards** with duration + count overlays + 2-line title + UP主. Counts are social proof — show them.
4. **Danmaku and 一键三连 are the soul** — celebrate the comment/reward culture in the player.
5. **2233 mascots + kaomoji copy** in empty/error/brand moments; warm community voice everywhere.
6. **Bright white-and-pink, generous radii, friendly shapes** — never dark-premium or sharp-corporate.
7. **`PingFang SC` / `思源黑体` fallbacks**, weights cap at 500/600, hierarchy via near-black/gray opacity.
8. **Mostly flat**; lift cards on hover, reserve shadow for floating UI.

---

## 10. Voice & Tone

Bilibili's voice is **young, warm, and fluent in ACG community culture** — it talks like a friend who's deep in the fandom, uses internet/anime vernacular naturally, and treats users as fellow members of a community rather than as an audience. The register in Simplified Chinese is casual `你`, playful, full of community-native expressions, and famously fond of **kaomoji** (颜文字) — the signature `(゜-゜)つロ 干杯~` ("cheers~", a little figure raising a glass) is the brand's voice distilled to one string. Users are addressed and refer to themselves with insider vocabulary: uploaders are **UP主**, the site is **B站**, watching together via **弹幕** (danmaku), supporting a creator via **一键三连** (one-click like+coin+favorite). The brand leans into this lexicon rather than translating it into corporate speak, because the in-group language *is* the belonging.

| Context | Tone |
|---|---|
| CTAs | Short, friendly verb. `关注` (Follow), `投稿` (Upload), `点赞`/`投币`/`收藏`. Casual `你`. |
| Greetings / brand | Kaomoji-led warmth. `(゜-゜)つロ 干杯~`. Community in-jokes welcome. |
| Empty / error states | 2233-mascot + a light, friendly, blameless line. Often self-deprecating-cute, never cold. |
| Engagement | Counts beside icons (播放/弹幕/点赞/投币). The numbers are the community signal. |
| Creator-facing | Encouraging, fan-aware ("UP主加油"). The platform sides with its creators. |
| Error messages | Light, blameless, often with a mascot. State the issue + the fix, keep it warm. |
| Community guidelines | Slightly more formal but still member-to-member, protecting the community vibe. |

**Forbidden phrases.** Cold corporate system tone (`系统错误，请稍后重试` bare and humorless — pair it with a mascot and a warmer line). The formal `您` in casual community contexts (reserve for legal/payment). Aggressive marketing hype that breaks the fan-community trust. Treating users as a passive "audience" (受众) rather than members (用户/小伙伴) — Bilibili's whole identity is participatory.

**Voice samples.**
- `(゜-゜)つロ 干杯~` — the signature kaomoji greeting, the brand voice in one string. <!-- cited: appears in bilibili.com homepage content via WebFetch 2026-05-19 -->
- `UP主` / `B站` / `一键三连` / `弹幕` — the community lexicon the brand voice leans on. <!-- cited: widely documented Bilibili community vocabulary; UP主 + danmaku confirmed in live homepage content 2026-05-19 -->
- `关注` / `投稿` — follow / upload CTAs, short friendly verbs. <!-- illustrative: standard Bilibili CTA register; not quoted as a specific live string -->
- `UP主加油` — creator-encouragement pattern. <!-- illustrative: reflects Bilibili creator-facing register -->

## 11. Brand Narrative

Bilibili was founded in **2009** by **Xu Yi (徐逸)**, originally launched as **Mikufans** — a video site built by and for ACG (anime/comics/games) fans, explicitly inspired by Japan's Niconico and its danmaku (bullet-comment) culture. It was renamed **bilibili** in 2010 (the name a reference to a character, 御坂美琴 "Biribiri", from the anime *A Certain Scientific Railgun*). From the start, Bilibili was not a general video utility but a **community for a specific subculture** — and that community-first, fandom-rooted identity is the brand's foundation. Danmaku — comments scrolling across the video so viewers feel they're watching *together*, even asynchronously — was the founding innovation and remains the soul of the product. <!-- source: widely documented public history (Xu Yi / Mikufans 2009 / bilibili rename 2010 / Niconico-inspired danmaku); not re-verified against a primary Bilibili source this pass -->

Over the following decade Bilibili grew far beyond anime into a full video community — games, technology, lifestyle, music, knowledge/study content, and live streaming — while keeping its ACG-rooted warmth and its distinctive participation rituals (一键三连, 投币, danmaku). Famously, for years new users had to pass a community-knowledge quiz to earn full membership — a deliberate gate to preserve community culture as the platform scaled. The brand's mascots, the **22娘 and 33娘 (2233 girls)**, and the iconic bili pink keep the identity unmistakably youthful and fandom-native even as the audience broadened into one of China's largest video communities.

What Bilibili refuses: the sterile content-delivery feel of a generic video utility, a corporate-red or premium-dark palette, cold humorless system copy, and treating users as a passive audience. What it embraces: a singular iconic pink, danmaku and the participation rituals as the soul, the 2233 mascots and kaomoji warmth, the community in-group lexicon (B站/UP主/一键三连), and a design that always signals "you're among friends who love the same things".

## 12. Principles

1. **The community is the product.** Bilibili is a place to belong, not a feed to consume. *UI implication:* Surface participation everywhere — danmaku, 一键三连, coins, comments. Use member language (UP主, 小伙伴), never passive-audience framing. Design celebrates contribution.

2. **The pink is the personality.** `#FB7299` is iconic precisely because it's an unusual choice for video. *UI implication:* Lean into the pink for brand + primary action + active state; pair with bili blue as the cool accent. Never dilute it into a generic red or corporate blue.

3. **Danmaku is sacred.** Bullet-comments across the video are the founding innovation and the emotional core. *UI implication:* The player is the heart of the product; danmaku is a first-class layer (toggle, density, send), not an afterthought. The shared-watching feeling is the differentiator.

4. **Warmth over polish.** The 2233 mascots, the kaomoji, the friendly copy make even errors feel like a friend shrugging. *UI implication:* Empty/error states get a mascot and a warm line; system copy is light and blameless. A cold humorless string is off-brand.

5. **Discovery is dense, but never cold.** A video community shows a lot at once. *UI implication:* Pack the feed with cards and counts, but keep the chrome bright white-and-pink with friendly copy so density reads as abundance, not clutter.

6. **Counts are belonging.** Views, danmaku, likes, coins signal what the community loves. *UI implication:* Show engagement metrics prominently in gray metadata weight — they're trust and social proof, not noise.

## 13. Personas

*Personas are fictional archetypes informed by publicly described Bilibili user segments (young ACG/gaming fans, creators/UP主, knowledge-content viewers), not individual people.*

**小林 (Xiao Lin), 19, Wuhan.** University freshman, lifelong anime fan. Lives on B站 — watches 番剧 (anime), turns danmaku on so it feels like watching with everyone, sends a 一键三连 to UP主s he loves, and bought membership years ago after passing the community quiz. Fluent in the lexicon; the kaomoji greeting feels like home. Would never call himself an "audience" — he's a member.

**阿哲 (A Zhe), 27, Hangzhou.** Tech UP主 (uploader) — posts coding tutorials and gadget reviews. Obsesses over his thumbnail covers because the card grid rewards a great 16:9 cover, and lives by his 投币/三连 counts. Engages with danmaku and comments because the community relationship is his channel's lifeblood. Reads the platform as on his side ("UP主加油").

**周悦 (Zhou Yue), 23, Beijing.** Came for study-with-me and knowledge content (Bilibili's "study area" is huge), stayed for the warm community vibe. Browses the dense feed comfortably because the pink chrome and friendly copy never feel corporate. Sends danmaku to feel less alone while studying late. The mascots and kaomoji are part of why the site feels like a friendly place rather than a utility.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no content / new channel)** | Bright white, a 2233-girls mascot, a warm line (often kaomoji-led), one pink CTA. Cute, never blaming. |
| **Empty (search no results)** | Mascot + gentle line + suggested partitions/tags. Friendly redirect. |
| **Loading (feed)** | Card-grid skeleton — gray 16:9 blocks + title-line blocks matching the grid, gentle shimmer. |
| **Loading (player)** | Player skeleton + buffering spinner; cover shows until ready. |
| **Error (network)** | Mascot + light blameless line (`(°□°)` flavored) + retry. Warm, not a cold system dump. |
| **Error (form/comment)** | Inline ≈`#FF4D4F` message + fix, kept light. |
| **Error (video unavailable)** | Mascot + factual friendly line + back/explore links. |
| **Success (一键三连)** | Like + coin + favorite burst together with a brief celebratory animation — the signature joyful moment. |
| **Success (follow/post)** | Light toast (`关注成功` / `投稿成功`), brief, warm. |
| **Like / coin** | Heart fills `#FB7299` (pop); coin fills gold `#FFB027` (pop); counts increment. |
| **Skeleton** | Gray 16:9 + line blocks at exact dimensions, gentle shimmer. |
| **Disabled** | Reduced opacity + gray fill together; control keeps its rounded shape. |

## 15. Motion & Easing

Bilibili's motion is **friendly, playful, and community-celebratory** — restrained for chrome, but genuinely joyful at the participation moments (一键三连, coin, like) and ever-present in the danmaku layer.

**Durations:**

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Tab/toggle commits |
| `motion-fast` | 200ms | Hover, chip select, button feedback |
| `motion-standard` | 300ms | Like/coin pop, dropdowns, card hover lift |
| `motion-celebrate` | 500ms | 一键三连 triple-action burst, success moments |
| `danmaku-scroll` | ~6–10s | Bullet comment traversal across the video (continuous, density-dependent) |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | Default two-way transitions |
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Dropdowns, sheets arriving |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-pop` | `cubic-bezier(0.34, 1.4, 0.64, 1)` | **Reserved.** Like/coin pops + 一键三连 burst — joyful overshoot at participation moments. |

**Spring stance.** Overshoot/spring is **reserved for the participation rituals** — the like-pop, the coin-pop, and especially the **一键三连** burst (long-press triggers all three actions with a celebratory animation). These are the emotional peaks of being a community member, so they're the one place the UI is allowed to be exuberant. Chrome transitions stay calm; danmaku is its own continuous kinetic layer.

**Signature motions.**
1. **一键三连 burst.** Long-pressing the like button fires like + coin + favorite together with a celebratory `ease-pop` animation over `motion-celebrate`. The single most joyful moment in the product.
2. **Danmaku scroll.** Bullet comments traverse the video right-to-left over `danmaku-scroll`, density and speed adjustable. The continuous kinetic soul of the watching experience.
3. **Like / coin pop.** Heart fills pink, coin fills gold, each with a `1 → 1.25 → 1` `ease-pop` and count increment over `motion-standard`.
4. **Card hover (web).** Card lifts (`motion-standard / ease-standard`) and the cover begins a muted preview — discovery feels alive.
5. **Reduce motion.** Under `prefers-reduced-motion: reduce`, pops flatten to instant fills, the 一键三连 burst becomes a simple state change, and danmaku can be disabled/static per user preference. Fully functional, no forced kinetics.

<!--
OmD v0.1 Sources — Bilibili / B站

Tier 1 (live): bilibili.com homepage via WebFetch 2026-05-19 — confirmed the
pink-and-blue ACG brand aesthetic, card-based video-thumbnail grid feed
(cover + counts + title + uploader), horizontal partition (番剧/电影/游戏…) nav,
clean sans-serif type, mascot presence, and the signature kaomoji greeting
`(゜-゜)つロ 干杯~`. No public CSS token layer is exposed.

Tier 2 (brand color / facts): WebSearch 2026-05-19 — bili pink #FB7299
(RGB 251,114,153) verified as Bilibili's official pink ("bili pink" / "girl
pink" / 粉) across brand-color sources (Brandfetch, BrandColorCode) and confirmed
in a PipePipe GitHub issue treating #FB7299 as Bilibili's canonical top color.
Founding history (Xu Yi 徐逸 / Mikufans 2009 / bilibili rename 2010 /
Niconico-inspired danmaku / Railgun "Biribiri" name origin / 2233 mascots /
community quiz) is widely documented public history.

⚠️ SOURCING CAVEAT: Only #FB7299 is verified. bili blue (≈#00AEEC), the gold
coin color (≈#FFB027), and all neutral hexes in §2/§4 are BEST-FIT
APPROXIMATIONS of observed live-site usage and common Bilibili-palette references,
flagged "approximate" inline. Do not present them to the brand owner as verbatim
Bilibili tokens.

Community lexicon (UP主/B站/弹幕/一键三连/投币) is widely documented public Bilibili
vocabulary; UP主 + danmaku + the kaomoji greeting confirmed in live homepage
content. Voice samples marked illustrative are not quoted live strings. Personas
(§13) are fictional archetypes. The 2233 girls are Bilibili's official mascots.
-->

---

**Verified:** 2026-05-19 (omd:add-reference — CN batch)
**Tier 1 sources:** bilibili.com (live — pink/blue ACG brand aesthetic, video-thumbnail card grid feed, partition nav, mascot presence, signature kaomoji `(゜-゜)つロ 干杯~`, UP主/danmaku culture; no public token layer).
**Tier 2 sources:** Brandfetch / BrandColorCode + PipePipe GitHub issue (bili pink `#FB7299` RGB 251,114,153 verified as official pink); widely documented history (Xu Yi 徐逸, Mikufans 2009 → bilibili 2010, Niconico-inspired danmaku, 2233 mascots, community quiz).
**Style ref:** `line` (Asian super-app/community warmth) + ACG youth-culture patterns.
**Conflicts unresolved:** Only `#FB7299` is verified; bili blue, the gold coin color, and §2/§4 neutrals are flagged approximate (observed usage, no public token layer).
