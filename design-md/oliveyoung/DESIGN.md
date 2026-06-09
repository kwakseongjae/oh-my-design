---
id: oliveyoung
name: Olive Young
display_name_kr: Olive Young (올리브영)
country: KR
category: ecommerce
homepage: "https://www.oliveyoung.co.kr"
primary_color: "#9bce26"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=oliveyoung.co.kr&sz=256"
verified: "2026-05-15"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    black: "#000000"
    ink: "#131518"
    muted: "#888888"
    neutral-dark: "#2f3030"
    neutral-alt: "#454c53"
    neutral-alt-2: "#50585f"
    chip-text: "#757d86"
    canvas: "#ffffff"
    paper: "#f6f7f9"
    line: "#e5e7ea"
    line-thin: "#ebebeb"
    sale: "#f65c60"
    best: "#f05a5e"
    same-day: "#f374b7"
    coupon: "#9bce26"
    gift: "#6fcff7"
    promo-salmon: "#f27370"
  typography:
    family: { sans: "Montserrat", mono: "Montserrat" }
    h1: { size: 28, weight: 700, use: "Legacy main page title" }
    title: { size: 16, weight: 700, use: "Card titles, emphasis" }
    body: { size: 14, weight: 400, lineHeight: 1.4, use: "Standard reading text" }
    caption: { size: 13, weight: 400, use: "Brand, meta" }
    small: { size: 12, weight: 400, use: "Flags, fine print" }
  spacing: { sm: 8, base: 16, lg: 18 }
  rounded: { sm: 4, md: 9, lg: 20, full: 9999 }
  shadow:
    none: "none"
  components:
    button-primary: { type: button, bg: "#000000", fg: "#ffffff", radius: 4, padding: "12px 18px", font: "13.33px/700", use: "Filled black CTA (장바구니 담기)" }
    button-outline: { type: button, bg: "#ffffff", fg: "#454c53", radius: 4, padding: "10px 16px", font: "14px/500", use: "Secondary action (신상 더보기)" }
    pagination-active: { type: button, bg: "#2f3030", fg: "#ffffff", radius: 9999, font: "14px/700", use: "Current page indicator" }
    category-pill: { type: tab, bg: "#ffffff", fg: "#757d86", radius: 20, padding: "8px 14px", font: "14px/400", use: "Category shortcut", active: "#000000 bg, #ffffff text" }
    filter-chip: { type: tab, bg: "#ffffff", fg: "#757d86", radius: 18, padding: "8px 14px", font: "14px/400", use: "Search facet filter" }
    flag-sale: { type: badge, bg: "#f65c60", fg: "#ffffff", radius: 9, padding: "3px 6px", font: "12px/400", use: "세일 in-thumbnail pill" }
    flag-same-day: { type: badge, bg: "#f374b7", fg: "#ffffff", radius: 9, font: "12px/400", use: "오늘드림 pill" }
    flag-coupon: { type: badge, bg: "#9bce26", fg: "#ffffff", radius: 9, font: "12px/400", use: "쿠폰 pill" }
    flag-gift: { type: badge, bg: "#6fcff7", fg: "#ffffff", radius: 9, font: "12px/400", use: "증정 pill" }
    best-badge: { type: badge, bg: "#ffffff", fg: "#f05a5e", radius: 24, padding: "8px 18px", font: "14px/700", use: "베스트 sash on hero rails" }
    search-input: { type: input, bg: "#ffffff", fg: "#131518", radius: 0, font: "13.33px/400", use: "Global GNB product search" }
    product-card: { type: card, bg: "#ffffff", fg: "#131518", radius: 0, use: "Search/list product tile" }
  components_harvested: true
---

## 1. Visual Theme & Atmosphere

Olive Young presents as a **dense, scan-first H&B catalog**: a near-monochrome grayscale chrome (white surface, body ink `#666`, primary ink `#131518`) carries 90%+ of the surface, then snaps awake at the product card with a **five-color flag taxonomy** — `#F65C60` sale, `#F374B7` 오늘드림 same-day, `#9BCE26` coupon, `#6FCFF7` gift, plus the `#F05A5E` best-badge ring. Korean retail visual culture (Coupang, Wadiz, 11번가) leans on weight and tag-color over heroes; Olive Young sits at the disciplined end of that lineage — grid-tight, photo-led, with `#fff` ground for product respect and chromatic noise reserved for status payload. Architecturally the site is **dual-stack** — legacy JSP `Montserrat → NotoSansCJKkr → AppleSDGothicNeo → 돋움` chrome on `/store/main/*`, `/best`, `/search`, while the new Next.js subtree (visible on `/store/goods/getGoodsDetail.do` even in its ProductNotFound shell — `ProductNotFound_btn__`, `GnbForDesktop_category-toggle-button__`, `OYCompanyInfo_*` CSS Modules, runtime `--background:#0a0a0a / --foreground:#ededed / --font-noto-sans-kr / --font-roboto`) signals a multi-year token refresh in flight on product-detail first. Mood word: *brisk pharmacy aisle* — bright, taxonomic, no rhetorical lift, the work happens at the thumbnail.

## 2. Color

| Token | Value | Role |
|---|---|---|
| `ink/primary` | `rgb(19, 21, 24)` ≈ `#131518` | GNB items, nav, headings on white |
| `ink/default` | `rgb(51, 51, 51)` ≈ `#333` | Card titles, mid-weight copy |
| `ink/body` | `rgb(102, 102, 102)` ≈ `#666` | Body default (also `body` element color) |
| `ink/muted` | `rgb(136, 136, 136)` ≈ `#888` | Meta lines, inactive pagination |
| `ink/disabled` | `rgb(170, 170, 170)` ≈ `#AAA` | Disabled |
| `ink/neutral-dark` | `rgb(47, 48, 48)` ≈ `#2F3030` | Active pagination fill |
| `ink/neutral-alt` | `rgb(69, 76, 83)` ≈ `#454C53` | "신상 더보기" outline button text |
| `ink/neutral-alt-2` | `rgb(80, 88, 95)` ≈ `#50585F` | Footer links / company-info button |
| `ink/neutral-alt-3` | `rgb(117, 125, 134)` ≈ `#757D86` | Chip text |
| `surface/white` | `#FFFFFF` | Ground (≈ all chrome) |
| `surface/paper` | `rgb(246, 247, 249)` ≈ `#F6F7F9` | Filter strip / quiet panels |
| `line/default` | `rgb(229, 231, 234)` ≈ `#E5E7EA` | Chip + card border |
| `line/thin` | `rgb(235, 235, 235)` ≈ `#EBEBEB` | 1px tile separator (heart-button border) |
| `flag/sale` | `rgb(246, 92, 96)` ≈ `#F65C60` | "세일" pill |
| `flag/best` | `rgb(240, 90, 94)` ≈ `#F05A5E` | "베스트" badge ring + text |
| `flag/same-day` | `rgb(243, 116, 183)` ≈ `#F374B7` | "오늘드림" |
| `flag/coupon` | `rgb(155, 206, 38)` ≈ `#9BCE26` | "쿠폰" (closest live token to brand olive) |
| `flag/gift` | `rgb(111, 207, 247)` ≈ `#6FCFF7` | "증정" |
| `accent/promo-salmon` | `rgb(242, 115, 112)` ≈ `#F27370` | Promotional shelf accent on /best |
| `nextjs/dark-bg` | `#0a0a0a` | Next.js subtree fallback background var |
| `nextjs/dark-fg` | `#ededed` | Next.js subtree fallback foreground var |

**Discipline rule** (observed): Olive Young **does not put hue on its chrome**. Buttons, nav, footer, search input, headings all sit on `#000–#888` neutrals; the five flag hues exist **only inside the thumbnail rectangle** as status payload. Olive Green (the corporate logotype color) is **absent from the storefront chrome** — the closest live token is the lime-leaning coupon flag `#9BCE26`.

## 3. Typography

- **Stack (legacy JSP chrome):** `Montserrat, -apple-system, NotoSansCJKkr, AppleSDGothicNeo, Roboto, dotum, 돋움, sans-serif`
- **Stack (Next.js subtree):** `-apple-system, system-ui, AppleSDGothicNeo, "Noto Sans", Roboto, Montserrat, sans-serif`
- **Body:** 14px / 400 / `#666` / lh ~1.4
- **Size scale observed:** 12, 13, 13.33, 14, 15, 16, 20, 26, 28 px (no formal modular scale; the `13.333px` shows up in buttons converted from `0.833em`)
- **Weight scale:** 200 (rare ornamental), 400, 500 (Next.js subtree), 700 (default emphasis)
- **H1:** 28px / 700 (legacy main) — used sparingly; most surfaces are H-less
- **Korean rendering:** intentional 4-stop fallback chain ending at `dotum / 돋움` preserves rendering for legacy WinXP/MacOS Korean readers (uncommon discipline in 2026 KR e-commerce — legacy retention not pruned)

## 4. Components

### Button — Primary (filled black CTA, legacy chrome)

**Default**
- Background: `#000000`
- Text: `#FFFFFF`
- Border: 0
- Radius: `4px`
- Padding: ~`12px 18px` (h≈40)
- Font: 13.33px / 700 / Montserrat→NotoSansCJKkr
- Use: "장바구니 담기" / primary commit on legacy surfaces

### Button — Outline neutral

**Default**
- Background: `#FFFFFF`
- Text: `#454C53`
- Border: `1px solid #E5E7EA`
- Radius: `4px`
- Padding: ~`10px 16px` (h≈40)
- Font: 14px / 500
- Use: "신상 더보기" / secondary actions

### Button — Pagination

**Active**
- Background: `#2F3030`
- Text: `#FFFFFF`
- Border: 0
- Radius: `50%` (circular)
- Size: 24×24
- Font: 14px / 700
- Use: Current page indicator

**Default**
- Background: transparent
- Text: `#888888`
- Border: 0
- Radius: 0
- Font: 14px / 700
- Use: Other-page link

### Pill — Category (top-of-main shortcut)

**Active**
- Background: `#000000`
- Text: `#FFFFFF`
- Border: 0
- Radius: `20px`
- Padding: ~`8px 14px` (h≈34)
- Font: 14px / 400
- Use: Selected category shortcut

**Default**
- Background: `#FFFFFF`
- Text: `#757D86`
- Border: `1px solid #E5E7EA` (inferred — same chip family)
- Radius: `20px`
- Font: 14px / 400
- Use: Unselected category shortcut

### Chip — Filter (search results)

**Default**
- Background: `#FFFFFF`
- Text: `#757D86`
- Border: `1px solid #E5E7EA`
- Radius: `18px`
- Padding: ~`8px 14px` (h=36)
- Font: 14px / 400
- Use: 제품특징 / 가격대 / 색상 facet filters

### Flag — Status pill (in-thumbnail status payload)

**Sale**
- Background: `#F65C60`
- Text: `#FFFFFF`
- Border: 0
- Radius: `9px`
- Padding: ~`3px 6px` (h=18)
- Font: 12px / 400
- Use: Active price discount

**Same-day (오늘드림)**
- Background: `#F374B7`
- Text: `#FFFFFF`
- Border: 0
- Radius: `9px`
- Font: 12px / 400
- Use: Same-day quick-commerce eligibility

**Coupon**
- Background: `#9BCE26`
- Text: `#FFFFFF`
- Border: 0
- Radius: `9px`
- Font: 12px / 400
- Use: Coupon-eligible SKU

**Gift**
- Background: `#6FCFF7`
- Text: `#FFFFFF`
- Border: 0
- Radius: `9px`
- Font: 12px / 400
- Use: Gift-with-purchase

### Badge — Best (large pill, sash-style)

**Default**
- Background: `#FFFFFF`
- Text: `#F05A5E`
- Border: `2px solid #F05A5E`
- Radius: `24px` (pill)
- Padding: ~`8px 18px` (h=48)
- Font: 14px / 700
- Use: Best-seller call-out on hero rails

### Heart — Wishlist button

**Idle (off)**
- Background: `#FFFFFF`
- Icon color: (icon-asset, color via SVG fill)
- Border: `1px solid #EBEBEB`
- Radius: 0 (square hit-box)
- Size: 40×40
- Use: 찜하기 toggle

### Input — Search (GNB)

**Default**
- Background: `#FFFFFF`
- Text: `#131518`
- Border: bottom-only / inherited
- Radius: 0
- Height: 38
- Font: 13.33px (legacy) / 16px (Next.js)
- Use: Global product search

### Card — Product tile (search/list)

**Default**
- Background: `#FFFFFF`
- Thumbnail aspect: 1:1 square (standard for KR H&B grid)
- Title: 14px / 400 / `#333`
- Brand: 12px / 400 / `#888`
- Price (active): 14–16px / 700 / `#131518`
- Strike price: 12px / 400 / `#AAA` line-through
- Flag area: 9px-radius pills inside thumb corner
- Border: 0 (separated by `#EBEBEB` grid gap)
- Use: Search result / category list / best list


## 16. Do's and Don'ts

### Do
- Keep all chrome — nav, header, footer, buttons, search input, headings — on the `#131518`–`#888` grayscale neutrals and reserve every hue for status payload
- Confine the five flag hues (`#F65C60` sale, `#F374B7` 오늘드림, `#9BCE26` coupon, `#6FCFF7` gift, `#F05A5E` best) to inside the thumbnail rectangle as 9px-radius status pills
- Map each flag color 1:1 to a single service fact (sale / same-day / coupon / gift / best) rather than to a marketing mood
- Encode interactive state with ink-darkening plus shape change — e.g. flip active pagination from transparent/`#888` radius-0 to `#2F3030`/`#FFF` 50% circle — not with hue
- Keep the Korean fallback chain ending at `dotum / 돋움` to preserve rendering for older Windows/macOS Korean readers
- Write CTAs as factual `하기`-verb labels like "장바구니 담기" and "찜하기" in casual-polite declarative tone, not imperative urgency copy

### Don't
- Put any flag color or hue on a primary CTA or chrome surface — the filled CTA stays `#000000` background with `#FFFFFF` text
- Introduce a sixth status color for a "new" or extra badge — reuse one of the existing five flag roles or skip the chrome
- Add hover lift, shadow gain, or drop shadows to tiles, chips, or pills — depth in this system stays line-only and state is static-encoded
- Spread Olive Green or the coupon lime `#9BCE26` across chrome or large backgrounds — corporate olive is absent from the storefront and the lime lives only in the coupon flag
- Prune the Korean fallback chain down to system-ui only, dropping the deliberate `돋움` legacy-OS support floor
- Reproduce verbatim Olive Young marketing taglines or write hard-sell copy like "지금 안 사면 손해예요" — copy works as neutral labels and offers

---

**Verified:** 2026-05-15
**Tier 1 sources:** CDP `:9222` getComputedStyle on (a) `https://www.oliveyoung.co.kr/store/main/main.do` 65 distinct samples · (b) `/store/main/getBestList.do` 33 samples · (c) `/store/search/getSearchMain.do?query=선크림` 55 samples · (d) `/store/goods/getGoodsDetail.do?goodsNo=A000000167660` 26 samples on Next.js shell. Total **179 distinct DOM samples** across 4 surfaces. Artifacts: `assets/_reference/tokens.json`, `structure.json`, `fonts.json`, `.live-inspect-proof.json` (11 raw_samples — over the ≥5 floor).
**Tier 1 official DS:** ✗ negative — `design.oliveyoung.co.kr` no DNS, `oliveyoung.design` no DNS, `corp.oliveyoung.com/*` 404, `cjoliveyoung.co.kr` ECONNREFUSED, no public Figma library, no `github.com/oliveyoung*` design-system repo. Documented authoritative negative. **Discovery**: production code reveals a **dual-stack migration in flight** (legacy JSP chrome + Next.js product-detail subtree with `--background/--foreground/--font-noto-sans-kr/--font-roboto` runtime vars + `*_btn__hash` CSS-Modules) — the canonical token system lives inside the Next.js bundle, not on a public docs surface.
**Tier 2 sources:** ✗ getdesign.md/oliveyoung — fetch blocked by Claude auto-mode classifier (domain not user-allowlisted), unable to verify presence/absence this pass; ✗ styles.refero.design `?q=oliveyoung` — no result cards.
**Conflicts unresolved:** none material — `accent/promo-salmon #F27370` vs `flag/best #F05A5E` differ by 2 RGB steps; treated as **two distinct tokens** since they appear on different surface roles (promo shelf vs taxonomic badge). Flagged for UPDATE pass: product-detail (real SKU), cart, my-page, mobile (`m.oliveyoung.co.kr`) — not captured this session.

## 5. Layout & Grid

- **Page width:** 1280px fixed container (legacy chrome); Next.js subtree fluid
- **GNB:** 90px header inner + 119px design-area (banner row), fixed top
- **Search input:** 38px height
- **Card grid (search/best):** 4-up desktop, square thumbnails, ~16px gutter
- **Filter strip (search):** 36px chips, paper bg `#F6F7F9`, top of result column
- **Pagination:** 24×24 circular active dot, centered below grid

## 6. Iconography

- **Style:** Outlined line icons at 16–24px, monochrome ink (no two-tone). Stroke ~1.5px. Korean retail convention (cart/heart/coupon/gift glyphs) inherited rather than custom.
- **Filled use:** Only in flag pills (no in-pill icon; pill itself is the icon).
- **Heart:** Outline default → filled `#F05A5E` on active (inferred from `btn_zzim jeem` class semantics).

## 7. Motion & Easing

- **Carousel transitions:** `slick` carousel (legacy) on hero rails — default 300ms slide
- **Hover states:** Catalog tiles use static hover (no lift / no shadow gain — depth is line-only in the system; corroborates the 0-shadow observation)
- **Next.js subtree:** `--swiper-theme-color: #007aff` exposed (default Swiper iOS blue; visual non-load because chrome overrides)
- **Floor:** No site-wide CSS custom-property motion tokens — durations live inside vendor carousels (slick, Swiper). Flagged as a follow-up: motion token harvest from product-detail page after a real SKU loads.

## 8. Accessibility & Density

- **Body 14px / #666 on white** = ~5.7:1 contrast — passes WCAG AA for body text, fails AAA for small text
- **Chip text `#757D86` on white** = ~4.5:1 — at the AA floor; chips with mixed-case Korean (대 vs ㅏ) are legible but borderline
- **Flag contrasts (white text on flag color):**
  - Sale `#F65C60` ≈ 3.2:1 → **fails AA for normal text**; passes for 14px bold or larger via Korean Bold-text exception; documented trade-off
  - Coupon `#9BCE26` + white ≈ 1.8:1 → **fails AA**; legibility relies on the 12px size + bold-by-CJK rendering
  - Gift `#6FCFF7` + white ≈ 1.6:1 → **fails AA**
- **Touch targets:** Pagination 24×24 below WCAG 2.5.5 (44×44) — speed-over-floor decision typical of KR catalog UIs
- **Korean fallback chain ends at 돋움** — explicit legacy-OS support, rare in 2026

## 9. Voice & Tone

- **Voice adjectives (3):** *Direct · Functional · Promotional* — no rhetorical lift; copy works as labels and offers.
- **Korean style:** Casual-polite ("~해요/세요"), declarative, comma-light, status-first ("세일", "오늘드림", "쿠폰", "증정"). Imperative-light — even CTAs read as factual ("장바구니 담기" not "지금 사세요").
- **Pattern:** Verb + 하기 noun ("찜하기", "담기", "더보기", "1:1문의하기") is the dominant CTA shape — observed on 6+ buttons across captures.
- **Do / Don't (fresh OmD illustrative — not Olive Young verbatim):**

| Do | Don't |
|---|---|
| "쿠폰가 보기" | "지금 안 사면 손해예요" |
| "내 피부톤에 맞는 쿠션 골라보기" | "당신을 위해 골랐어요" |
| "오늘 받는 상품만 보기" | "오늘 안 받으면 후회해요" |

**Voice samples (3 fresh illustrative reconstructions — not Olive Young copy):**
1. "오늘 도착 가능한 상품만 모았어요." — same-day filter affordance
2. "회원이면 ₩2,000 더 저렴해요." — soft commercial nudge, declarative not imperative
3. "이 색상은 다음 주에 다시 들어올 것 같아요." — OOS state, soft restock signal

**IP guardrail:** No verbatim Olive Young marketing copy reproduced. Voice samples above are OmD-original constructions modelled on the observed *shape* (casual-polite + declarative + 하기-verb), not the substance.

## 10. Brand Narrative

CJ Olive Young is the H&B (Health & Beauty) retail arm of **CJ Group**, founded 1999 and operating as Korea's #1 omnichannel H&B chain — ~1,300 stores nationwide plus the `oliveyoung.co.kr` web/app and `global.oliveyoung.com` cross-border surface. Its visual posture matches its category position: not a beauty *aspirational brand* (no editorial hero shots, no rhetorical typography), but the **default aisle** — a high-velocity catalog where SKU density, in-stock status, same-day eligibility, and coupon math do the persuasive work. The recent migration of product-detail to Next.js (visible in production as of 2026-05-15) and the runtime CSS-vars (`--background / --foreground / --font-noto-sans-kr`) signal an in-flight design-system rebuild — likely consolidating the legacy JSP `Montserrat→돋움` stack and the new React subtree onto shared semantic tokens. *Narrative facts above are public-record; founder voice and design-team attribution `[FILL IN]` — no verbatim attribution available in EN-language sources.*

## 11. Principles

1. **Chrome stays gray; flags do the work.** Olive Young commits to neutral grayscale across nav/header/footer/buttons and reserves all five hues for in-thumbnail status. *UI implication: when porting, never put a flag color on a primary CTA or chrome surface — it breaks the system's status-vs-action separation.*
2. **One flag = one fact.** Sale / 오늘드림 / 쿠폰 / 증정 / 베스트 each map 1:1 to a service feature, not a marketing mood. *UI implication: don't introduce a sixth color for a "new" badge; pick one of the existing flag roles or skip the chrome.*
3. **Weight signals over hue.** Active pagination flips from transparent/`#888` to `#2F3030`/`#FFF` and goes from radius-0 to 50% circle — state encoded by 2 axes (fill + radius) not by hue. *UI implication: prefer ink-darkening + shape-change for state; reserve color for status payload.*
4. **Korean rendering down to 돋움.** The fallback chain explicitly retains a Windows-XP/older-macOS Korean glyph — a deliberate accessibility floor for older readers. *UI implication: never prune the Korean fallback chain to system-ui only.*
5. **Migrate in subtrees, not big-bang.** Product-detail Next.js + legacy JSP main coexist; the catalog shopper sees a consistent chrome despite two stacks underneath. *UI implication: design-system migrations should target one feature surface at a time and share visual tokens at the chrome level.*

## 12. Personas

*Illustrative archetypes — not Olive Young user research; OmD-original for design framing.*

- **Han-na (29, office worker, Seoul):** browses on phone during commute, scans flags before titles, expects 오늘드림 by 14:00 cutoff, abandons if cart total doesn't show coupon math inline. Comfort with Korean copy, low patience for English-loanword decoration.
- **Ji-won (38, parent, Suwon):** weekend desktop session, builds a 8–12 SKU cart of repeat-buy basics, sorts by coupon eligibility, treats `#9BCE26` coupon flag as primary signal-to-noise filter.
- **Min-jae (24, K-beauty enthusiast, Busan):** product-detail page is the destination — wants ingredient list, review filter by skin type, real-color swatch photos. The Next.js detail-page rebuild is for this persona.
- **Su-jin (52, gift-buyer, Daejeon):** lower digital comfort, relies on category pills and "베스트" badge — the radius-24px pill is a literal stamp of "popular enough to trust." Korean fallback to `돋움` is for this reader.

## 13. States

| State | Pattern |
|---|---|
| Empty (search 0-result) | Centered "이전 페이지 / 홈으로 가기" pair — outline white-bg + filled-black; observed on `getGoodsDetail.do` ProductNotFound shell (Next.js) |
| Loading | No skeleton observed on legacy chrome; Next.js subtree presumed (not captured this pass — flagged) |
| Error — 404 | `ProductNotFound_btn-area__Q_xDU` two-button shell, neutral chrome, no error red |
| Error — form | Not captured this pass; flagged for UPDATE |
| Success — added to cart | Toast pattern presumed; not captured |
| Skeleton | Likely tile-shaped on Next.js detail; not captured |
| Disabled (button) | Inferred — opacity-driven on legacy (no dedicated token) |
| Hover (chip / pill) | Static — no shadow gain, no lift; depth stays line-only |
| Active (pagination) | Fill flip `transparent → #2F3030` + radius `0 → 50%` + text flip `#888 → #FFF` |
| Active (category pill) | Fill flip `#FFF → #000` + text flip `#757D86 → #FFF`, radius unchanged at 20px |

## 14. Motion & Easing

- **Carousel:** slick (legacy hero) — default 300ms slide, ease-in-out
- **Carousel:** Swiper (Next.js subtree) — `--swiper-theme-color: #007aff` exposed (visual override likely)
- **Hover:** **none observed** on tiles, chips, or pills — depth and state are static-encoded
- **Floor:** No site-wide motion tokens captured. **Flagged** as follow-up — capture from a real product-detail SKU + cart-add transition.

## 15. References & Footer

**Live capture (Tier 1):**
- `https://www.oliveyoung.co.kr/store/main/main.do` (65 samples, legacy JSP)
- `https://www.oliveyoung.co.kr/store/main/getBestList.do` (33 samples, legacy JSP, promo-salmon `#F27370`)
- `https://www.oliveyoung.co.kr/store/search/getSearchMain.do?query=선크림` (55 samples, full 5-color flag taxonomy captured here)
- `https://www.oliveyoung.co.kr/store/goods/getGoodsDetail.do?goodsNo=A000000167660` (26 samples, Next.js subtree shell + runtime CSS vars)
- Harness: Chrome DevTools Protocol `:9222` via `websocket-client` (`suppress_origin=True`)
- Artifacts: `assets/_reference/tokens.json` · `structure.json` · `fonts.json` · `.live-inspect-proof.json` (11 raw_samples)

**Tier 1 official DS:** ✗ negative (authoritative). No `design.oliveyoung.co.kr` / `oliveyoung.design` DNS; `corp.oliveyoung.com/*` 404; `cjoliveyoung.co.kr` ECONNREFUSED; no public Figma library or GitHub design-system repo at `github.com/oliveyoung*`. The canonical token system lives **inside the Next.js bundle on product-detail** (CSS Modules `*_btn__` + runtime `--font-noto-sans-kr / --background / --foreground` vars) — accessible only by live inspect.

**Tier 2 sources:** ✗ getdesign.md/oliveyoung blocked by Claude auto-mode (domain not allowlisted) — unable to verify this pass; ✗ styles.refero.design `?q=oliveyoung` no result cards.

**IP guardrails:**
- Brand mark and product photography referenced for token harvest only — no asset stored beyond JSON observation records
- No verbatim Olive Young marketing taglines reproduced (none observed in captures)
- §9 voice samples are OmD-original illustrative — modelled on observed shape (declarative + 하기-verb + casual-polite), not substance
- §12 personas are illustrative (no user research); flagged in section header

**Conflicts unresolved:** none material. Promo-salmon `#F27370` vs flag-best `#F05A5E` treated as distinct (role-separated). Token-name choices in §2 are OmD coinage — Olive Young does not publish a canonical name table.

**Follow-up UPDATE pass recommended:**
- Real product-detail SKU (Next.js token harvest — `--*` vars + Module class catalog)
- Cart / my-page / checkout (state matrix completion)
- Mobile site `m.oliveyoung.co.kr` (touch-target audit)
- Motion token harvest (durations, easings)
- Re-attempt Tier 2 (getdesign.md with user-allowlisted fetch)
