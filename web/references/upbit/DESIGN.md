---
id: upbit
name: Upbit
country: KR
category: fintech
homepage: "https://upbit.com"
primary_color: "#093687"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=upbit.com&sz=256"
verified: "2026-05-15"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#1375ec"
    primary-deep: "#0062df"
    primary-darker: "#003597"
    rise: "#dd3c44"
    fall: "#1375ec"
    heading: "#1a2434"
    body: "#333333"
    muted: "#666666"
    subtle: "#565d6a"
    disabled: "#8e929b"
    surface-body: "#e9ecf1"
    surface-card: "#ffffff"
    table-header: "#f9fafc"
    table-alt: "#f4f5f7"
    neutral: "#edeef1"
    border: "#bec1c6"
    on-primary: "#ffffff"
  typography:
    family: { sans: "Roboto", mono: "Roboto" }
    nav:         { size: 15, weight: 400, use: "Top-nav primary items" }
    body:        { size: 14, weight: 400, use: "Default body, button labels" }
    table-cell:  { size: 12, weight: 400, use: "Price/change table cells" }
    header:      { size: 11, weight: 400, use: "Table column headers" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 20, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 4, md: 4, lg: 4, full: 9999 }
  shadow:
    none: "none"
  components:
    button-primary: { type: button, bg: "#0062df", fg: "#ffffff", radius: 4, padding: "0 10px", font: "14px/400", use: "로그인/회원가입 in compact nav, h36" }
    button-hero: { type: button, bg: "#003597", fg: "#ffffff", radius: 4, padding: "0 12px", font: "15px/400", use: "Hero CTA, h44" }
    button-secondary: { type: button, bg: "#edeef1", fg: "#1a2434", radius: 4, padding: "0 10px", font: "14px/400", use: "Paired secondary action, h36" }
    tag-percent: { type: badge, bg: "#ffffff", fg: "#1a2434", radius: 4, padding: "0 8px 1px", font: "12px/400", use: "Quick-fill 10/25/50/100%; 1px #bec1c6 border" }
    cell-rise: { type: card, bg: "#ffffff", fg: "#dd3c44", radius: 0, padding: "4.5px 4px", font: "12px/400", use: "상승 가격 셀 / 매수호가 tint" }
    cell-fall: { type: card, bg: "#ffffff", fg: "#1375ec", radius: 0, padding: "4.5px 4px", font: "12px/400", use: "하락 가격 셀 / 매도호가 tint" }
    header-row: { type: card, bg: "#f9fafc", fg: "#666666", radius: 0, padding: "0 14px", font: "11px/400", use: "Column heads, h30, bottom 1px #edeef1" }
    segment: { type: tab, bg: "#ffffff", fg: "#333333", radius: 0, padding: "0", font: "12px/400", use: "KO/EN locale switch; 1px #bec1c6 border", active: "selected bg #f4f5f7" }
    nav: { type: tab, bg: "#ffffff", fg: "#1a2434", radius: 0, padding: "0 20px", font: "15px/400", use: "Persistent top-bar, h80, bottom 1px #edeef1" }
  components_harvested: true
---

# Upbit — DESIGN.md

> Note: brand assets and tokens captured here are documented **reference-only** for design pedagogy under the OmD project. No taglines are reproduced verbatim. Voice characterization in §10–11 is a fresh synthesis of observable surface behavior and public corporate sources; it is not lifted from Upbit/Dunamu copy.

## 1. Visual Theme & Atmosphere

Upbit is the production crypto-asset exchange operated by **Dunamu** in Korea, launched 2017. Its product identity rests on three observable promises: regulated-grade trust, dense real-time information, and zero theatrics — the page presents the market, not the brand.

The interface is unmistakably a **Korean finance UI**: tables first, hero second; red signals 상승 (up), blue signals 하락 (down) — inversion of the US convention and a hard tell for locale-correct design. There is no animated mascot, no gradient hero illustration, no "lifestyle" photography. Trust is communicated through restraint.

## 2. Layout

- **Desktop grid**: fixed 1400px content width; single top nav (h≈80 with primary row 36px + utility row); no sidebar on the marketing surface.
- **Exchange surface**: information-dense grid — left market list, center chart + orderbook, right order panel — all driven by tables, not cards.
- **Marketing surface (`/home`)**: hero band → market-summary table → product modules (스테이킹, 코인모으기) → CTA band. Light surface (`#E9ECF1` page bg, white panels).
- **Density rule**: row height 45px on tradable lists, 30px on column headers. Vertical rhythm in 4–8px increments.
- **Color is structural, not decorative**: tinted row backgrounds (rgba 8% alpha of rise/fall hue) communicate direction without competing with the numerals.

## 3. Color tokens

Captured 2026-05-14 from production via CDP `getComputedStyle`. See `assets/_reference/tokens.json`.

| Token | Hex | Use |
|---|---|---|
| `brand.primary` | `#1375EC` | Primary brand blue — nav highlight, KRW pair tint |
| `brand.primaryDeep` | `#0062DF` | Primary CTA bg (Login / 회원가입) |
| `brand.primaryDarker` | `#003597` | Hero CTA bg (large) |
| `semantic.rise` | `#DD3C44` | ▲ 상승 / 매수호가 (KR: red = up) |
| `semantic.riseSoft` | `rgba(221,60,68,0.08)` | rise row tint |
| `semantic.fall` | `#1375EC` | ▼ 하락 / 매도호가 (KR: blue = down) |
| `semantic.fallSoft` | `rgba(19,117,236,0.08)` | fall row tint |
| `text.primary` | `#1A2434` | headings, nav |
| `text.body` | `#333333` | default body |
| `text.muted` | `#666666` | table header / labels |
| `text.subtle` | `#565D6A` | footer / utility |
| `text.disabled` | `#8E929B` | placeholder |
| `surface.body` | `#E9ECF1` | page background |
| `surface.card` | `#FFFFFF` | card / panel |
| `surface.tableHeader` | `#F9FAFC` | table header / alt row |
| `surface.tableAlt` | `#F4F5F7` | alt row / segment unselected |
| `surface.neutral` | `#EDEEF1` | secondary button |

**Locale rule (critical):** if you port Upbit-tone UI to a US/EU market, swap rise/fall hues — green = up, red = down. The blue-down semantic only reads correctly to Korean / JP / TW users.

## 4. Components

### Button

**Primary**
- Background: `#0062DF`
- Text: `#FFFFFF`
- Border: none
- Radius: 4px
- Padding: 0 10px
- Height: 36px
- Font: 14px / 400 / Roboto+Noto Sans KR
- Use: 로그인 / 회원가입 in compact nav

**Primary — Hero**
- Background: `#003597`
- Text: `#FFFFFF`
- Border: none
- Radius: 4px
- Padding: 0 12px
- Height: 44px
- Font: 15px / 400 / Roboto+Noto Sans KR
- Use: 거래소 둘러보기 / 회원가입 (hero CTA)

**Secondary**
- Background: `#EDEEF1`
- Text: `#1A2434`
- Border: none
- Radius: 4px
- Padding: 0 10px
- Height: 36px
- Font: 14px / 400 / Roboto+Noto Sans KR
- Use: paired secondary action (회원가입 small variant)

**Tag — percent / direct-input**
- Background: `#FFFFFF`
- Text: `#1A2434`
- Border: 1px solid `#BEC1C6`
- Radius: 4px
- Padding: 0 8px 1px
- Height: 28px
- Font: 12px / 400
- Use: 10% / 25% / 50% / 100% / 직접입력 quick-fill on order form

### Table cell — price / change

**Rise (▲ up)**
- Background: `rgba(221, 60, 68, 0.08)`
- Text: `#DD3C44`
- Border: none
- Radius: 0
- Padding: 4.5px 4px
- Height: 45px
- Font: 12px / 400
- Use: 상승 가격 셀 / 매수호가 cell tint

**Fall (▼ down)**
- Background: `rgba(19, 117, 236, 0.08)`
- Text: `#1375EC`
- Border: none
- Radius: 0
- Padding: 4.5px 4px
- Height: 45px
- Font: 12px / 400
- Use: 하락 가격 셀 / 매도호가 cell tint

**Header row**
- Background: `#F9FAFC`
- Text: `#666666`
- Border: bottom 1px `#EDEEF1`
- Radius: 0
- Padding: 0 14px
- Height: 30px
- Font: 11px / 400
- Use: 체결가 / 현재가 / 전일대비 / 거래대금 column heads

### Segment switch

**Locale segment (KO / EN)**
- Background (selected): `#F4F5F7`
- Background (unselected): `#FFFFFF`
- Text: `#333333`
- Border: 1px solid `#BEC1C6`
- Radius: 0
- Padding: 0
- Height: 28px
- Font: 12px / 400
- Use: top-right utility row

### Navigation

**Top nav**
- Background: `#FFFFFF`
- Text: `#1A2434`
- Border: bottom 1px `#EDEEF1`
- Radius: 0
- Padding: 0 20px
- Height: 80px (60px primary + 20px utility)
- Font: 15px / 400 (primary items)
- Use: persistent top-bar, fixed 1400px inner width

---
**Verified:** 2026-05-14
**Tier 1 sources:** live CDP inspect of `https://upbit.com/home` (samples 41) + `https://upbit.com/exchange?code=CRIX.UPBIT.KRW-BTC` (samples 80). Combined 121 raw samples → `assets/_reference/raw-capture.json` + `raw-capture-exchange.json` + `.live-inspect-proof.json`.
**Tier 2 sources:** `getdesign.md/upbit` — returned `not_found` (verified 2026-05-14, page text: "No designs found for 'upbit'"). `styles.refero.design/?q=upbit` — search interface returned no result cards for the query (verified 2026-05-14). Both 3rd-party indexes have weak Korean coverage (consistent with the 2026-05-13 KR-10 batch finding).
**Tier 1 official DS:** **NEGATIVE result.** Attempted: `design.upbit.com` (DNS no-resolve), `upbit.com/brand` (301 → marketing), `design.dunamu.com` (DNS no-resolve), `dunamu.com` corporate site (200, no public DS surface; Naver blog `blog.naver.com/dunamupr` is PR, not design). Dunamu/Upbit do not publish an external design system as of 2026-05-14. Reconcile is therefore Tier-1-live-only.
**Conflicts unresolved:** none.

## 5. Iconography

Upbit uses two icon registers:
- **Coin marks** — third-party brand glyphs (BTC, ETH, XRP, …) shown at 16–20px monochrome or color, ID-only role; never decorative.
- **UI glyphs** — flat 1.5px stroke, 16px frame, sparse: chevron, sort, favorite (★ outline → solid), info (i), close (×). No bespoke icon family; the visual contract is "stay invisible until needed."

Direction is communicated by **▲ / ▼ glyphs colocated with hue and number**, not by separate icons.

## 6. Imagery

Marketing surface uses flat, isometric-leaning illustration for product modules (스테이킹, 코인모으기) — small, contained inside white card frames, not edge-to-edge hero photography. No people, no aspirational lifestyle. The hero band is type-led with a single product screenshot, not a photographic backdrop. Total imagery footprint is small; the table is the hero.

## 7. Motion

Restrained. Observable motion:
- Row blink (≈150ms ease-out) when a new trade prints — opacity 0 → 1 on the rise/fall tint.
- Hover affordance on rows: tint shift to `#F4F5F7` ≈100ms linear.
- Nav highlight underline: 200ms ease-out.

No page transitions, no parallax, no scroll-jacking. The exchange surface itself is in constant micro-motion (numbers updating) — applying additional UI motion would compete with data motion.

## 8. Voice (microcopy register)

Korean primary, English secondary (KO/EN segment). Sentence-final form is `~합니다 / ~해요` mixed: `~합니다` on legal/notice surfaces (지원 종료 안내), `~해요` on product features (코인모으기로 꾸준히 모아요). Numerals are unitised in Korean reading order (1,234,567원, 1,234.56 BTC).

CTA labels are nouns or noun-phrases, not imperatives: 로그인 · 회원가입 · 거래소 둘러보기 · 직접입력. No exclamation marks. No emoji.

## 9. Accessibility & locale

- Color contrast: primary CTA `#0062DF` on white = 5.13:1 (AA pass). Rise text `#DD3C44` on `rgba(221,60,68,0.08)` background ≈ 4.9:1 (AA pass for normal text). Fall text `#1375EC` on its tint ≈ 4.6:1 (AA pass).
- Hit targets: 28px tags are below WCAG 2.5.5 (44px target). Trading speed > accessibility floor is an explicit trade-off here.
- Locale-critical: rise/fall hue convention. Any port outside KR/JP/TW must invert.
- Korean font stack falls back through legacy IE-era families (Dotum / 돋움) — chain not pruned.

---

## 10. Voice & Tone

**Voice adjectives**: 1) **Composed** — never breathless even during volatility. 2) **Procedural** — every action is named, listed, traceable. 3) **Locale-fluent** — Korean financial register, no startup slang.

| Do | Don't |
|---|---|
| Use nouns for CTAs (`로그인`, `회원가입`) | Use imperatives or exclamation (`지금 시작하세요!`) |
| State the rule before the action ("최소 5,000원부터 매수") | Inflate ("쉽고 빠르게!") |
| Show the number first, label second | Lead with brand voice on a trading screen |
| Mix `~합니다` (notice) and `~해요` (product) by surface | Use casual emoji-laden tone on price surfaces |

**Voice samples** (illustrative — characterizing the observed register, not lifting copy):
1. (notice) "5월 15일 00:00부터 해당 마켓 거래 지원이 종료됩니다." — straight declarative, time-first.
2. (product) "코인모으기로 매주 정해진 금액만큼 자동 매수해요." — `~해요` form, mechanism named.
3. (CTA) "거래소 둘러보기" — noun phrase, no urgency word.

## 11. Brand Narrative

Upbit launched in October 2017 as Dunamu's bet that crypto in Korea would need a counterpart that looked, regulated, and felt like Korean equities — not a Silicon Valley product photographed onto a black background. The product identity has held remarkably steady through three boom-bust cycles: the same blue, the same tables, the same restraint.

Dunamu's broader portfolio (StockPlus for KOSPI/KOSDAQ retail, Quotation Corp for B2B market data) signals the company's center of gravity — they are a **market-data company first**, an exchange operator second. That shows in the UI: the table is canon, the brand is wallpaper.

The "why now" thesis encoded in the surface: in a market famous for speculative theatrics, the **most trusted-looking** exchange wins disproportionate flow during downturns. Restraint is the strategy.

## 12. Principles

1. **Data is the hero; chrome is the frame.**
   *UI implication:* table primitives outrank card primitives. Never wrap a price in a decorative container.

2. **Direction must be readable at a glance — and in the local convention.**
   *UI implication:* red = up, blue = down (KR/JP/TW). Tint at 8% alpha so hue communicates without overpowering the numeral.

3. **Restraint scales with stakes.**
   *UI implication:* the higher the order-size context, the fewer the design accents. Hero modules can carry illustration; the order panel cannot.

4. **Procedural before persuasive.**
   *UI implication:* CTAs name what happens (`로그인`, `직접입력`), they don't sell it. Reserve persuasive copy for marketing surfaces only.

5. **Locale-correct or wrong.**
   *UI implication:* Korean stack ships first, English is a sibling segment — not a translation layer. Sentence-final forms by surface (`~합니다` notice / `~해요` product) are non-negotiable.

## 13. Personas

> Disclaimer: archetypes synthesised from public market behavior, app-store reviews, and 2024–2025 Korean crypto-retail surveys. No internal Upbit research is referenced.

- **혜진, 34, 직장인 (서울)** — KOSPI 5년 차, 2024 비트코인 ETF 뉴스 후 입문. KRW 마켓 위주, 매수는 코인모으기 자동, 매도는 수동. UI 신뢰가 입문 결정의 80%였다고 말함.
- **준호, 28, 개발자 (판교)** — 알트 트레이더, 호가창 + 차트 +체결창 3 패널 항상 띄움. 화면 정보 밀도가 만족도의 1순위. 모바일은 보조.
- **선영, 41, 자영업 (대구)** — 보유 종목 5개 이하, 주 1회 진입. 푸시 알림 + 알기 쉬운 표가 핵심. 신용카드 결제 없이 은행 연동만 사용.

## 14. States

| Category | Behavior |
|---|---|
| Empty | 보유 자산 없을 때: 좌측 정렬 안내문 + 입금 안내 link. 일러스트 없음. |
| Loading | 표 셀 단위 skeleton bar (h≈14, bg `#EDEEF1`); 페이지 단위 spinner 없음. |
| Error — recoverable | inline 빨간 helper text `#DD3C44` 12px under input; CTA disabled. |
| Error — network | top sticky bar `#FFE7E8` bg, `#DD3C44` text, 재시도 link. |
| Success | toast 하단 우측, h≈40, bg `#FFFFFF`, border 1px `#BEC1C6`, 3s auto-dismiss. |
| Skeleton | row-level only on tables (price/volume cells), 1.2s shimmer linear-gradient. |
| Disabled | `#8E929B` text on `#F4F5F7` bg; button opacity unchanged (color-only signal). |

## 15. Motion & Easing

- **Duration scale**: 100ms (hover) / 150ms (row blink, segment) / 200ms (nav, modal in) / 250ms (modal out).
- **Easing**: `ease-out` for entrances and value changes; `linear` for shimmer; no spring.
- **Motion rules**:
  1. Never animate a price field's own typography — only its background tint.
  2. No page transitions on the exchange surface; navigation is instantaneous (state-driven).
  3. Modal enter from `translateY(8px) opacity:0` → identity over 200ms ease-out. Exit reverses, 250ms.
  4. Row-print blink: tint fades in 150ms then holds for 800ms before easing out 400ms. The 800ms hold is what makes a moving market legible.


## 16. Do's and Don'ts

### Do
- Lead with tables, not cards — make the data the hero and the chrome the frame, with row heights of 45px on tradable lists and 30px on column headers
- Encode direction in the Korean convention: red `#DD3C44` for 상승 (up) and blue `#1375EC` for 하락 (down), and invert to green-up/red-down only when porting to US/EU markets
- Communicate row direction with an 8% alpha tint (`rgba(221,60,68,0.08)` rise / `rgba(19,117,236,0.08)` fall) so the hue supports rather than overpowers the numeral
- Keep buttons flat and tight — 4px radius, no border, white text, scaling the blue by stakes: `#0062DF` for nav CTAs, `#003597` for the 44px hero CTA
- Label CTAs as nouns or noun-phrases (로그인, 회원가입, 거래소 둘러보기, 직접입력) and split sentence-final forms by surface — `~합니다` on notices, `~해요` on product modules
- Hold motion to the duration scale (100ms hover / 150ms row blink / 200ms nav / 250ms modal out) and animate only a price cell's background tint, never its typography

### Don't
- Wrap a price or numeral in a decorative card container — table primitives outrank card primitives on trading surfaces
- Spread the accent blues (`#1375EC` / `#003597`) across large background areas; the page stays light on `#E9ECF1` with white panels and color used structurally
- Add page transitions, parallax, scroll-jacking, or spring easing — the exchange surface is already in constant micro-motion from updating numbers
- Sell with imperatives or exclamation (지금 시작하세요!, 쉽고 빠르게!) or lead with brand voice on a trading screen; keep persuasive copy to marketing surfaces only
- Use emoji, exclamation marks, or a startup-slang tone on price surfaces — the register stays composed and procedural
- Treat English as a translation layer — ship the Korean stack first with EN as a sibling KO/EN segment, and don't prune the Korean fallback chain to legacy families like Dotum / 돋움

---

**OmD provenance:** Created 2026-05-14 via `omd:add-reference` CREATE pipeline. Tier 1 = live CDP inspect (2 surfaces, 121 raw samples). Tier 2 = both indexes attempted, both empty (documented). Tier 1 official DS = negative (documented). IP guardrails: brand assets reference-only; voice fresh characterization; no verbatim taglines. See `_research.md` for full source map.
