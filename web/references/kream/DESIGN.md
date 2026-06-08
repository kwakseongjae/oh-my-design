---
id: kream
name: KREAM
country: KR
category: ecommerce
homepage: "https://kream.co.kr"
primary_color: "#000000"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=kream.co.kr&sz=256"
verified: "2026-05-15"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#222222"
    foreground: "#000000"
    canvas: "#ffffff"
    surface: "#f5f5f5"
    muted: "#787878"
    hairline: "#ebebeb"
    on-primary: "#ffffff"
  typography:
    family: { sans: "Pretendard Variable", mono: "Pretendard Variable" }
    display:    { size: 32, weight: 700, lineHeight: 1.2, use: "Page title / H1" }
    search:     { size: 24, weight: 700, lineHeight: 1.2, use: "Search query input — typed keyword as headline" }
    tab-active: { size: 16, weight: 700, lineHeight: 1.4, use: "Active tab label" }
    body:       { size: 16, weight: 400, lineHeight: 1.4, use: "Default copy, inactive tab, card title" }
    chip:       { size: 13, weight: 400, lineHeight: 1.4, use: "Filter chip, category pill" }
    ghost:      { size: 13, weight: 300, lineHeight: 1.4, use: "Ghost button label" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48 }
  rounded: { sm: 6, md: 8, lg: 16, full: 9999 }
  shadow:
    none: "none"
  components_harvested: true
  components:
    chip-filter: { type: badge, bg: "#f4f4f4", fg: "#222222", radius: "30px", height: "30px", padding: "0 12px", font: "13px / 400", use: "Search filter row chip (배송/카테고리/색상/사이즈/가격대)" }
    pill-category: { type: badge, bg: "#ffffff", fg: "#222222", border: "1px solid #ebebeb", radius: "6px", height: "30px", font: "13px / 400", use: "Secondary category quick-row" }
    shortcut-keyword: { type: listItem, bg: "#fafafa", fg: "#222222", radius: "6px", height: "48px", font: "16px / 400", use: "Popular keyword shortcut anchor" }
    card-banner: { type: card, bg: "#f5f5f5", fg: "#222222", radius: "16px", padding: "0", font: "16px / 700", use: "Hero / merchandising banner tile (1188x475)" }
    input-search: { type: input, bg: "transparent", fg: "#222222", radius: "0", font: "24px / 700", use: "Homepage hero search — typed keyword as headline" }
    button-ghost: { type: button, bg: "transparent", fg: "#000000", border: "1px solid rgba(0,0,0,0.6)", radius: "8px", height: "36px", font: "13px / 300", use: "Fallback / secondary recovery action (홈으로 가기)" }
    tab-strip: { type: tab, bg: "transparent", fg: "#222222", font: "16px / 700", active: "2px bottom border #222222", use: "Tab strip 상품/스타일/프로필 — weight + underline signals selection" }
---

# Design System Inspiration of KREAM

## 1. Visual Theme & Atmosphere

KREAM is Korea's limited-edition resale marketplace — a Naver-backed exchange where sneaker drops, luxury rotation, and hype-watch trading happen on a chrome that is, deliberately, almost without color. The home surface reads like a luxury catalog rendered in software: a stack of 1188×475 banner cards on `#f5f5f5`, each with a 16px corner radius, no shadows, no gradients, no chrome decoration. The page lets the product photography and the offer copy do all the persuasion; the system itself stays mute. Where Musinsa is street-utility and 29CM is editorial, KREAM is the trading floor — quiet, fast-scrolling, and ranked.

The defining typographic move is **Pretendard Variable** running the whole stack — body at 16px/400 on `#222`, display H1 at 32px/700, the homepage search query input itself at 24px/700 as if the user's keyword is the headline. Chrome controls drop down to 13px (chips, ghost buttons), and outside that single jump from 32px → 24px → 16px → 13px there is no other scale. The hierarchy is intentionally flat: hero banner → tabs (상품/스타일/프로필) → filter chips (배송·카테고리·성별·색상·브랜드·사이즈·가격대) → product grid.

Color is reduced to a grayscale ramp formalized as ~50 CSS custom properties (`--greyscale-dark-*` and `--greyscale-white-alpha-*`, observed at runtime on `:root`): a few inks (`#000`, `#222`, `#404040`, `#4e4e4e`, `#616161`, `#787878`, `#909090`, `#a7a7a7`, `#bbb`, `#d3d3d3`, `#e6e6e6`, `#ebebeb`, `#f0f0f0`, `#f4f4f4`, `#fafafa`), their alpha-overlay siblings on white and on black, and white. There is **no brand red, no brand blue, no accent yellow** in the chrome. A single teal — `rgb(17, 161, 151)` — surfaces twice on the home page, used as a price-watch / promo accent. The Swiper carousel library leaves `#007aff` as a CSS theme variable but it is not used in product chrome. The brand color is the grayscale system itself, indexed against pure white.

Radius is a four-step scale and each step has a job: 16px = banner card (hero / merchandising tile), 30px = pill chip (filter toggle), 8px = pill input or ghost button (auth & fallback chrome), 6px = list-row card and category quickrow button. State chrome inherits the base radius and changes only ink and fill — never radius — so the system reads as one shape language at every density.

**Key Characteristics:**
- Pretendard Variable across all surfaces — one font, four weights observed (300 / 400 / 700, with system-ui fallback chain)
- Pure `#ffffff` page background, `#222` as primary ink (not `#000` — `#000` is reserved for display heads and the H1 token)
- Four-step radius scale: 16px banner / 30px chip / 8px ghost button / 6px row card — never blended
- ~50 CSS custom properties exposed at `:root` under `--greyscale-dark-*` and `--greyscale-white-alpha-*` — a formal grayscale token system
- Single observed accent: `rgb(17, 161, 151)` teal, used sparingly for price-watch signaling
- 30px-tall filter chips on `#f4f4f4` — the workhorse navigation primitive
- Search query rendered at 24px/700 in the input itself — the user's keyword becomes the page headline
- No shadows. No gradients. No decorative iconography in the chrome
- Card height is variable on home (475px banner) and fixed on listings (238px product card) — the system encodes "merchandising" vs "trading" as distinct card heights
- Tab strip uses 700 weight for active, 400 for inactive — color stays `#222` either way (weight, not hue, signals selection)

## 2. Color Palette & Roles

### Primary
- **Ink** `#222222` — body text, card titles, default control color (observed 4,763 times on home — by far the dominant chroma)
- **Ink Strong / Display** `#000000` — H1 display only, never on body
- **Page Background** `#ffffff` — global canvas

### Surface neutrals
- **Banner card** `#f5f5f5` — hero / merchandising tile (`rgb(245, 245, 245)`)
- **Fill light grey** `#f4f4f4` — filter chip default, "chip-fill" CSS var token `--greyscale-dark-4`
- **Surface extra light** `#fafafa` — sub-card / quickrow row (`--greyscale-dark-2`)
- **Border extra light** `#f0f0f0` — divider (`--greyscale-dark-6`)
- **Border light** `#ebebeb` — card outline (`--greyscale-dark-8`)
- **Border medium** `#d3d3d3` — input border, separator (`--greyscale-dark-20`)

### Greyscale ramp (CSS var names — captured live from `:root`)
| Token name | Hex |
| --- | --- |
| `--Greyscale-Dark-100` | `#000` |
| `--greyscale-dark-90-dark` | `#222` |
| `--Greyscale-Dark-75` | `#404040` |
| `--greyscale-dark-80-grey-dark` | `#333` |
| `--greyscale-dark-70-dark-80` | `#4e4e4e` |
| `--Greyscale-Dark-60` | `#616161` |
| `--Greyscale-Dark-50` | `#787878` |
| `--greyscale-dark-40-dark-50` | `#909090` |
| `--greyscale-dark-35-dark-40` | `#a7a7a7` |
| `--greyscale-dark-30-dark-30-grey-medium` | `#bbb` |
| `--greyscale-dark-20-border-medium-grey` | `#d3d3d3` |
| `--Greyscale-Dark-10` | `#e6e6e6` |
| `--greyscale-dark-8-border-light-grey` | `#ebebeb` |
| `--greyscale-dark-6-border-extra-light-grey` | `#f0f0f0` |
| `--greyscale-dark-4-dark-5-fill-light-grey-grey-light-brand-ect` | `#f4f4f4` |
| `--greyscale-dark-2-grey-extra-light` | `#fafafa` |
| `--greyscale-dark-0-white` | `#fff` |

Alpha siblings on black (`--greyscale-dark-alpha-*`) at 6/8/10/20/30/35/40/50/60/70/75/80/90 and on white (`--greyscale-white-alpha-*`) at 2/4/6/8/10/20/30/35/40/50/60/70/75/80/90 are also exposed — used for overlays and disabled states.

### Accent (rare)
- **Watch teal** `rgb(17, 161, 151)` — observed twice on home, used for price-movement / watchlist signal
- **Swiper system** `#007aff` — exposed as `--swiper-theme-color` but not used in product chrome (carousel library default; informational only)

### Muted ink overlays (observed)
- `rgba(0, 0, 0, 0.533)` — caption ink (#1)
- `rgba(0, 0, 0, 0.44)` — secondary caption
- `rgba(0, 0, 0, 0.345)` — disabled-leaning ink
- `rgba(34, 34, 34, 0.5)` — subtitle ink on grayscale fill
- `rgba(255, 255, 255, 0.804)` — overlay-on-image label

## 3. Typography

### Family
**Pretendard Variable** (primary) with system fallback stack:
```
"Pretendard Variable", Pretendard, -apple-system, system-ui,
Roboto, "Helvetica Neue", "Segoe UI",
"Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic",
"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif
```

### Scale (observed live)
| Role | Size | Weight | Color | Use |
| --- | --- | --- | --- | --- |
| Display / H1 | 32px | 700 | `#000` | Page title |
| Search query (input) | 24px | 700 | `#222` | The keyword the user typed |
| Tab label (active) | 16px | 700 | `#222` | 상품 / 스타일 / 프로필 |
| Tab label (default) | 16px | 400 | `#222` | Inactive tab |
| Body | 16px | 400 | `#222` | Default copy |
| Card title | 16px | 700 | `#222` | Banner card heading |
| Shortcut row | 16px | 400 | `#222` | Popular keyword shortcut on `#fafafa` |
| Chip | 13px | 400 | `#222` | Filter chip on `#f4f4f4` |
| Ghost button | 13px | 300 | `#000` | 404 fallback "홈으로 가기" |

### Hierarchy rule
KREAM uses **weight, not size**, to signal active state across tabs and toggle controls. Body and active-tab share 16px; only weight changes (400 → 700). This is the same pattern Apple uses on iOS tab bars and is consistent across KREAM's search, exhibition, and home tab strips.

## 4. Components

### Filter chip

**Default**
- Background: `#f4f4f4`
- Text: `#222`
- Border: none
- Radius: `30px`
- Padding: ~`0 12px` (text-only chip, 30px height)
- Font: `13px / 400 / Pretendard Variable`
- Height: `30px`
- Use: search filter row (배송 / 카테고리 / 성별 / 색상 / 브랜드 / 사이즈 / 가격대) — quantitative counter (e.g. "배송0") shown trailing

**Active (selected count > 0)**
- Same chrome; counter number renders inline (`사이즈3`)
- No background change observed (relies on count text to signal)

### Category pill (quick-row)

**Default**
- Background: `#ffffff`
- Text: `#222`
- Border: `1px solid` (observed light grey, ~`#ebebeb`)
- Radius: `6px`
- Height: `30px`
- Font: `13px / 400`
- Use: secondary category strip below filter chips (스니커즈 / 반소매 티셔츠 / 샌들·슬리퍼 / 바람막이 / 트레이닝 자켓 …)

### Popular keyword shortcut

**Default**
- Background: `#fafafa`
- Text: `#222`
- Border: none
- Radius: `6px`
- Height: `48px`
- Font: `16px / 400`
- Use: "관련 인기 검색어" list anchors (air force / adidas / jordan / nike air max / nike dunk / puma)

### Hero / merchandising banner card

**Default**
- Background: `#f5f5f5`
- Text: `#222` (overlay caption)
- Border: none
- Radius: `16px`
- Padding: `0` (image-led, copy positioned absolutely)
- Width × Height: `1188 × 475` (desktop)
- Use: home carousel tiles, exhibition / drop merchandising

### Search input (homepage hero)

**Default**
- Background: `transparent`
- Text: `#222`
- Border: none (parent container has 1px bottom border, observed)
- Radius: `0`
- Font: `24px / 700` — the typed keyword is rendered as if it were the page headline
- Placeholder: "브랜드, 상품, 프로필, 태그 등"
- Use: global search at the top of `/search`

### Ghost button (fallback / secondary)

**Default**
- Background: `transparent`
- Text: `#000`
- Border: `1px solid rgba(0, 0, 0, 0.6)`
- Radius: `8px`
- Padding: text-padded, no fixed inset observed
- Font: `13px / 300`
- Height: `36px`
- Use: "홈으로 가기" on 404 and other recovery surfaces — lightweight, non-promoted action

### Tab strip

**Active tab**
- Background: `transparent`
- Text: `#222`
- Border: bottom `2px solid #222` (observed pattern on `상품 / 스타일 / 프로필`)
- Radius: `0`
- Font: `16px / 700`
- Height: `44px`

**Default tab**
- Background: `transparent`
- Text: `#222`
- Border: bottom `2px solid transparent`
- Font: `16px / 400`

Weight, not color, signals selection.

### Global header

**Default**
- Background: `#ffffff`
- Height: `130px` (CSS var `--global-header-height`)
- Primary nav: `HOME / STYLE / SHOP` rendered as 16px text links in `#222`
- Search affordance: a separate `/search` route (no inline search input in the page header on the home view)

---
**Verified:** 2026-05-14
**Tier 1 sources:**
- `https://kream.co.kr/` — live CDP `Runtime.evaluate` + `getComputedStyle` at 2026-05-14T10:55:53Z; 40 raw component samples, 50+ `--greyscale-*` CSS custom properties extracted from `:root`
- `https://kream.co.kr/search?keyword=nike` — live CDP capture; 43 raw component samples covering filter chips, category pills, shortcut rows, search input, tab strip
- `https://kream.co.kr/shop` (404 fallback) — captured ghost-button chrome
- See `references/kream/assets/_reference/tokens.json`, `structure.json`, `fonts.json`, `.live-inspect-proof.json`

**Tier 2 sources:**
- `getdesign.md/kream` — **no record** (verified 2026-05-14)
- `styles.refero.design/?q=kream` — **no record** (verified 2026-05-14)

**Conflicts unresolved:** none — Tier 1 live inspection is sole source; Tier 2 directories have no KREAM coverage (consistent with the KR-10 batch finding that 3rd-party EN-tooling indexes systematically miss Korean brands).

## 5. Spacing & Layout

- **Global header**: 130px (CSS var)
- **Home grid**: full-width banner stack centered on a content column ~1188px wide
- **Banner card**: 1188×475 with 16px radius — single column on desktop
- **Filter chip row**: 30px-tall chips, spaced in a horizontal row, single-line on desktop
- **Category pill row**: 30px-tall pills, horizontal-scroll-overflow capable
- **Product card**: 238px height (observed in search), grid layout
- **Shortcut row**: 48px row height, stacked vertically as a `/fafafa` list

The system reserves **height** as the signal of card-class importance: 475 = merchandising hero, 238 = product trade card, 48 = navigational shortcut, 30 = filter primitive.

## 6. Iconography & Imagery

- **Icon style**: minimal monoline icons in `#222` (search, profile, wishlist, cart) — not observed at depth in this pass
- **Imagery**: full-bleed product photography on `#f5f5f5` banner card background — product cut-out, neutral lighting, no editorial overlay
- **Brand mark**: wordmark "KREAM" in display weight (assets in production CDN — not captured here)

## 7. Motion

- **Swiper carousel** library loaded on home — default `swiperjs` ease curves
- **Tab swap**: instant (no observed cross-fade in raw sample)
- **No long parallax, no scroll-driven hero animation** observed in viewport (1280×713)

## 8. Tone & Voice (brand-observed, not verbatim)

KREAM's chrome speaks like a trading terminal that wishes it were a luxury concierge: **specific, ranked, time-boxed**. Copy in banner cards leads with a fact (price-move %, drop window, coupon size), then frames the offer as a window the reader is currently inside ("5월 브랜드 위크 ~33% 할인", "오늘 구매 내일 도착"). Headlines are short and definite — they don't ask, they announce. Numbers are protagonists: percent-off, days remaining, point caps, brand-week names.

The brand uses **Korean colloquial + English brand names without quote marks**. "Top 100 Trending Items 지금 그의 위시리스트!" lives next to "주차별 드롭 리스트 이번 주, 지난 주, 그 전 주까지". Code-switching is treated as native to the audience (sneakerheads who already think bilingually about brand names).

What KREAM **does not** do: it does not soften with emoji, does not editorialize the product, does not narrate a backstory, does not apologize for prices. The voice is the marketplace's posture — "we list, you decide, the clock is ticking."

(Voice characterization above is OmD-original framing — no verbatim KREAM marketing copy is reproduced.)

## 9. Implementation Notes

- **Font loading**: Pretendard Variable served self-hosted (observed in computed style) with full Korean + Latin range — fallback chain prioritizes Apple SD Gothic Neo on iOS and Noto Sans KR on Android.
- **Token system**: ~50 CSS custom properties on `:root`, namespaced `--greyscale-dark-*` (solid greys) and `--greyscale-dark-alpha-*` / `--greyscale-white-alpha-*` (alpha overlays). The naming convention encodes both numeric scale (`-0` / `-2` / `-4` / `-6` / `-8` / `-10` / `-20` / `-30` / `-40` …) and semantic role (`-fill-light-grey-grey-light-brand-ect`, `-border-extra-light-grey`) — the system was clearly designed for both designer and developer consumption.
- **No design system docs site published** at `design.kream.co.kr`, `kream.design`, or `kream.co.kr/design`. KREAM has no public DS hub (consistent with its parent Naver's mixed-public pattern; Naver Connect/Snow have docs, KREAM does not).
- **Bundle**: Swiper.js carousel library detected (`--swiper-theme-color: #007aff`).
- **Brand assets (logo, photography) are reference-only.** Do not redistribute. Use this DESIGN.md to inform token / radius / weight choices in derivative work; source brand-comparable photography independently.

## 10. Voice & Tone

Three voice adjectives (OmD-original characterization, drawn from observed surface behavior):

- **Specific.** KREAM names the number — discount percent, days, point cap — before it names the product. The chrome refuses vague offers.
- **Ranked.** "Top 100", "이번 주 급상승", "주차별 드롭 리스트". Every list is ordered, time-stamped, or relativized to a window. Nothing floats untimed.
- **Bilingual-native.** Korean colloquial sits unforced next to English brand names. The audience is assumed to think in both registers; the chrome does not translate.

### Do / Don't

| Do | Don't |
| --- | --- |
| Lead with the number (`~50% 쿠폰`, `~33% 할인`, `3% 적립`) | Lead with an adjective (`특별한 할인`) |
| Time-box the offer (`이번 주`, `5월 브랜드 위크`, `오늘 구매 내일 도착`) | Leave the window open-ended |
| Treat English brand names as native vocabulary, no quote marks | Italicize or quote `"Nike"` |
| Rank the list (`Top 100`, `주차별`, `급상승`) | Float ungrouped items |
| Use sentence-case Korean with English brand caps where natural | Force ALL-CAPS Korean or fully title-cased English |

### Voice samples (OmD-original, not verbatim KREAM copy)

> "이번 주 ~57% 드롭, 3일 남았어요." — *category landing headline; leads with number, time-boxes the offer*

> "Air Max 95 — 시세 +12.3% 이번 주" — *price-watch tile; English brand name unquoted, % movement signed*

> "Drop List · 5월 2주차 — 12 brands" — *list header; ranked window + count*

## 11. Brand Narrative

KREAM ("**K**orea **REA**ction to **M**arket") launched in 2020 as a Naver Financial / Snow Corp. subsidiary and has grown into Korea's dominant limited-edition resale platform — sneakers first, then luxury watches, bags, streetwear, collectibles, and trading cards. It sits in the same market layer as StockX (US) and POIZON (CN) and was, by 2023, the largest such platform in Korea by GMV. (Publicly reported figures and corporate filings; see references-cited below.)

The brand thesis is operational, not emotional: KREAM positions itself as **the authentication-and-clearing infrastructure for hype goods**. Every transaction passes through KREAM's appraisal center; the platform's chrome reflects that infrastructure posture — fast, ranked, time-stamped, intentionally undecorated. Where competitor StockX leans on a stock-ticker metaphor, KREAM leans on a Naver-style portal density: a lot of merchandising tiles, a lot of categories, a lot of windows-into-windows. The design language is the platform's promise: *we move volume cleanly and we authenticate everything before it ships.*

Strategically, KREAM matters because it is one of the cleanest examples of a Korean platform that competes by **operational trust** rather than brand emotion. The chrome's refusal of color, of shadow, of editorial flourish is the trust signal made visual.

(No founder/executive quote available in public English-language sources at the level of fidelity OmD requires for §11 attribution; this section is illustrative based on publicly-reported corporate facts.)

## 12. Principles

1. **Number-first headlines.**
   *UI implication:* Banner card titles lead with a quantity (percent, days, points, brand-week name). Reserve the largest weight for the number, not the noun.

2. **Time-boxing is the persuasion.**
   *UI implication:* Every promotional surface declares a window. Build a reusable "window tag" pattern (`이번 주`, `~5/19`, `7일 한정`) — it's the recurring chrome element across home banners.

3. **Weight signals state; hue stays grayscale.**
   *UI implication:* Active tab = `700`, default = `400`, both on `#222`. Selected chip = counter trailing the label, no fill change. Don't introduce a "selected color" — the system is designed to never need one.

4. **Radius encodes card class.**
   *UI implication:* 16px = merchandising, 6px = trading row, 30px = filter primitive, 8px = recovery / fallback. Never blend; never use a radius unmapped to a class.

5. **Photography carries color.**
   *UI implication:* Chrome stays grayscale; product photography against `#f5f5f5` provides all chromatic information. Don't introduce branded accent fills — they will fight the product image.

## 13. Personas

*(Illustrative archetypes — sketched from observable site behavior, public KREAM marketing categories, and reported user demographics. Not from KREAM-published research.)*

- **The Sneakerhead (M, 22-30, 서울/수도권).** Checks drop calendar weekly, follows 5-12 brand pages, transacts 1-3x/month. Wants the time-box clearly stated and the price-move sign visible. Uses KREAM as a watch list more than a store.
- **The Hype Reseller (M/F, 24-35).** Treats KREAM as inventory data. Wants ranked lists (Top 100, 급상승 브랜드), price movement %, and historical price charts. Optimizes for speed of search and breadth of filter chips.
- **The Luxury Verifier (F/M, 28-45).** Buys 2-4x/year, primarily watches and bags. Wants the authentication promise visible at every checkpoint. Trusts the grayscale chrome because it does not feel like a discount store.
- **The Gift Searcher (F/M, 25-40).** Comes through marketing campaigns (5월 브랜드 위크, 뷰티템 추천). Wants the offer window explicit and the recovery paths (홈으로 가기, recently-viewed) lightweight.

## 14. States

| State | Treatment |
| --- | --- |
| **Empty (no results)** | `#222` ink message centered; ghost button `8px` radius `13px/300` for recovery action |
| **Loading (initial)** | No skeleton observed in this pass — assume `#fafafa` block placeholders matching final card height (475 / 238 / 48) |
| **Loading (subsequent / scroll)** | Swiper carousel handles inline; product grid likely paginates via intersection observer |
| **Error (404)** | Ghost button "홈으로 가기" — `36px` height, `8px` radius, `1px solid rgba(0,0,0,0.6)`, `13px/300` — the apology is small and the action is plain |
| **Error (network / auth)** | Not captured in this pass — likely the same ghost button pattern with route-specific copy |
| **Success (transaction)** | Not captured (auth-gated) — typical pattern would be a centered tile with the ranked number ("거래 체결가 ₩483,000") and a window tag |
| **Skeleton** | `#fafafa` fill on the card-class-shaped rectangle, no shimmer observed |
| **Disabled** | Inferred from alpha tokens — text on `--greyscale-dark-alpha-30` (`#00000045`), control fill keeps `#f4f4f4`, no opacity change on the chip itself |

States lean on the grayscale ramp, not on color. There is no "error red" or "success green" in the home chrome — those signals come from copy and counters, not fills.

## 15. Motion & Easing

**Duration scale (inferred from Swiper defaults + observed carousel behavior)**
- `fast`: 150-200ms — chip selection counter update
- `base`: 300ms — Swiper slide (default)
- `slow`: 500-600ms — banner card cross-fade on auto-rotate

**Easing**
- `ease-out` for entering elements (banner card swap)
- `ease-in-out` for Swiper slide (library default)
- No spring physics observed

**Motion rules**
- **Carousel auto-rotates** but pauses on hover (Swiper default behavior).
- **Tab switch is instant** — no slide-in for content beneath; only the bottom border on the active label changes.
- **No reveal-on-scroll animation** on the home page in the captured viewport.
- **Counter changes (chip badge)** update without animation — the count just appears.
- **No motion is used to soften error states.** The 404 ghost button appears without entrance animation; the chrome treats errors as factual, not embarrassed.

The brand's motion logic mirrors its voice: minimal, factual, time-boxed. Movement happens because the carousel needs to rotate, not because the chrome wants to perform.

---

**References cited (Tier 1 + supporting):**
- KREAM home — `https://kream.co.kr/` (live CDP capture, 2026-05-14)
- KREAM search — `https://kream.co.kr/search?keyword=nike` (live CDP capture, 2026-05-14)
- KREAM 404 — `https://kream.co.kr/shop` (ghost-button chrome)
- `references/kream/assets/_reference/tokens.json` — distilled token map
- `references/kream/assets/_reference/structure.json` — surface IA observation
- `references/kream/assets/_reference/fonts.json` — type stack & scale
- `references/kream/assets/_reference/.live-inspect-proof.json` — 13 raw_samples + method log

**Tier 2 (verified empty 2026-05-14):**
- `getdesign.md/kream` — no record
- `styles.refero.design/?q=kream` — no match

## 16. Do's and Don'ts

### Do
- Keep the chrome on the grayscale ramp, using `#222` as primary ink and reserving `#000` for the H1 display token only
- Signal active state by weight, not hue — active tab and selected control go to `700` while inactive stays `400`, both on `#222`
- Map every corner radius to its card class: 16px banner/merchandising tile, 30px filter chip, 8px ghost button, 6px row/category card
- Let full-bleed product photography on the `#f5f5f5` banner card carry all the color, keeping all surrounding chrome neutral
- Lead promotional copy with the number (`~33% 할인`, `3% 적립`) and time-box every offer with a window tag (`이번 주`, `5월 브랜드 위크`)
- Run Pretendard Variable across the whole stack on the documented scale — 32px/700 display, 24px/700 search query, 16px body, 13px chips

### Don't
- Introduce a branded accent fill or selected-state color — the system is designed to never need one, and color would fight the product image
- Spread the lone `rgb(17, 161, 151)` watch teal beyond rare price-watch signaling, or treat the Swiper `#007aff` library default as a usable brand color
- Blend radii or use a corner radius unmapped to a card class (e.g. a banner that is not 16px or a filter chip that is not 30px)
- Add shadows, gradients, or decorative chrome iconography — the home surface deliberately has none
- Use size to signal active state where weight should — body and active tab both sit at 16px, so only the 400→700 weight jump should change
- Lead with adjectives (`특별한 할인`), leave offer windows open-ended, or quote/italicize English brand names like `"Nike"`
