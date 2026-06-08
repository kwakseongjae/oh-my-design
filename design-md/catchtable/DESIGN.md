---
id: catchtable
name: CatchTable
country: KR
category: consumer-tech
homepage: "https://www.catchtable.co.kr"
primary_color: "#ff3d00"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=catchtable.co.kr&sz=256"
verified: "2026-05-15"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-08"
  note: "Single-CTA discipline — brand orange #FF3D00 is the only primary fill, deployed sparingly; depth from borders + hairline alpha, not shadows"
  colors:
    primary: "#ff3d00"
    primary-hover: "#fa8d6b"
    brand: "#ff3d00"
    canvas: "#ffffff"
    foreground: "#000000"
    title: "#222222"
    body-strong: "#424242"
    muted: "#666666"
    tertiary: "#5f5f5f"
    placeholder: "#9e9e9e"
    disabled: "#b5b5b5"
    icon-default: "#8f8f8f"
    icon-subtle: "#aaaaaa"
    on-primary: "#ffffff"
    surface-subdued: "#f9f9f9"
    surface-muted: "#f5f5f5"
    surface-cool: "#f2f5f7"
    surface-cool-alt: "#f0f4fa"
    border-default: "#e4e4e4"
    border-cool: "#dce3e8"
    info: "#186ade"
    success: "#43c478"
    success-strong: "#077d55"
    error: "#d91f11"
    warning: "#f5c518"
    premium: "#8f49de"
  typography:
    family: { sans: "Pretendard", mono: "" }
    section-title:      { size: 20, weight: 700, lineHeight: 1.5, use: "음식종류별 BEST, 캐치 매거진, search hero label" }
    big-section:        { size: 18, weight: 700, lineHeight: 1.5, use: "Larger card titles" }
    card-title:         { size: 16, weight: 600, lineHeight: 1.5, use: "Restaurant card titles in list / detail" }
    body-default:       { size: 14, weight: 400, lineHeight: 1.5, use: "Dominant — nav labels, list items, body" }
    tab-label:          { size: 14, weight: 400, lineHeight: 1.5, use: "Bottom-tab labels" }
    chip-label:         { size: 14, weight: 500, lineHeight: 1.5, use: "Geo chips, filter chips" }
    search-input:       { size: 13, weight: 500, lineHeight: 1.5, use: "Search placeholder #9e9e9e" }
    neighbourhood-chip: { size: 13, weight: 500, lineHeight: 1.5, use: "청담, 압구정·로데오 style" }
    caption:            { size: 12, weight: 400, lineHeight: 1.5, use: "Timestamps, secondary meta" }
    footer-body:        { size: 11, weight: 400, lineHeight: 1.5, use: "Regulatory disclosure text" }
    policy-link:        { size: 11, weight: 500, lineHeight: 1.5, use: "Footer 서비스 이용약관 row" }
    micro-meta:         { size: 10, weight: 500, lineHeight: 1.5, use: "Slide counter 2 / 25, compact tab" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 20, xl: 24, xxl: 32, section: 45 }
  rounded: { sm: 4, md: 8, lg: 12, full: 999 }
  shadow:
    xs: "rgba(0,0,0,.12) 0 1px 2px, rgba(0,0,0,.08) 0 0 1px, rgba(0,0,0,.08) 0 0 1px"
    sm: "rgba(0,0,0,.12) 0 2px 8px, rgba(0,0,0,.08) 0 1px 4px, rgba(0,0,0,.08) 0 0 1px"
    drop: "rgba(0,0,0,.12) 0 2px 12px"
    md: "rgba(0,0,0,.12) 0 6px 12px, rgba(0,0,0,.08) 0 4px 8px, rgba(0,0,0,.08) 0 0 4px"
    lg: "rgba(0,0,0,.12) 0 16px 20px, rgba(0,0,0,.08) 0 8px 16px, rgba(0,0,0,.08) 0 0 8px"
  components_harvested: true
  components:
    button-primary: { type: button, bg: "#ff3d00", fg: "#ffffff", radius: "12px", height: "44px", font: "14px / 500", hover: "press #fc9086", use: "Single primary CTA pill — single-CTA discipline, only variant" }
    search-input: { type: input, bg: "#f5f5f5", fg: "#000000", radius: "0px", font: "13px / 500", use: "Search field, placeholder #9e9e9e, inline search icon left" }
    chip-row: { type: badge, bg: "transparent", fg: "#5f5f5f", font: "14px / 500", use: "Geo/filter chips, no fill or border at rest — separation by spacing" }
    best-of-pill: { type: card, bg: "#ffffff", radius: "4px", font: "14px / 400", use: "Image-led tile + ink label below, no card chrome (호텔 뷔페, 스시 오마카세)" }
    bottom-tab-bar: { type: tab, fg: "#424242", font: "14px / 400", active: "ink darkens to #000000", use: "5 tabs (홈/저장/내 주변/마이다이닝/MY), icon-over-label" }
    footer-disclosure: { type: card, bg: "#f9f9f9", fg: "#8f8f8f", font: "11px / 400", use: "Footer block, 11px/500 policy links separated by | pipe" }
---

# Design System Inspiration of CatchTable (캐치테이블)

## 1. Visual Theme & Atmosphere

CatchTable is Korea's premier restaurant-reservation platform — a service that lets diners book hotel buffets, sushi omakase, and hanwoo tasting menus with the same calm as flipping through a magazine. The atmosphere on the home surface is **editorial restraint**: a white canvas (`#FFFFFF`), deep black ink (`#000000` for body, `#222222` for titles), zero ambient shadow, and a hard-square chrome that lets food photography do the speaking. Where a delivery app would flood the screen with red CTAs and stamp-shaped discount stickers, CatchTable shows you photographs and titles — the brand orange `#FF3D00` appears exactly where you place your finger, and almost nowhere else.

This isn't accidental minimalism — it's a vanilla-extract token system with **145 `:root` design tokens** discovered live (the namespace is `_11bicz7*`, a hashed identifier, so the system has no semantic names exposed publicly — only values). The token sheet defines a five-tier shadow ladder, a 33-color palette across brand / ink / surface / support-cool / semantic / overlay, a 10-step type scale that all share a **150% line-height contract**, and a radius family that defaults to `0px` on 92% of elements and softens only for rasterised thumbnails (`4px`), interactive controls (`8px`), and the primary CTA pill (`12px`). The discipline is the design.

Typographically the system is Pretendard-only — no display font, no brand-display moment, no signage-typography flex. Pretendard 400 carries roughly 91% of all rendered text, with 700 reserved for section titles (`음식종류별 BEST`, `캐치 매거진`) and price emphasis. The home flow opens with a search field on `#F5F5F5` fill, a location chip row, a 25-slide Swiper hero, a "어디로 가시나요?" neighbourhood-discovery row, a horizontally scrolling "음식종류별 BEST" pillar, and an editorial "캐치 매거진" magazine module before reaching a five-tab bottom nav (홈 / 저장 / 내 주변 / 마이다이닝 / MY). The overall impression is **taste-maker, not utility** — the brand wants to feel closer to a Michelin guide than to OpenTable.

**Key Characteristics:**
- Single accent `#FF3D00` (CatchTable Orange) deployed sparingly — single-CTA discipline, not flooded brand color
- Hard-square chrome (`0px` radius on 92% of elements) — sharpness amplifies food photography
- Pretendard-only stack, no display font; 150% line-height applied uniformly to all ~35 typography slots
- White-canvas + black-ink editorial restraint — depth lives in borders and surface tints, not shadows
- Five-tier shadow ladder defined in tokens but rarely fired on the home surface
- Mobile-first WebView shell with `status-bar-top` reservation — desktop is a porthole
- 5-tab bottom nav as the global IA spine; 마이다이닝 is the reservation-history / loyalty hub
- Editorial 캐치 매거진 module signals taste-maker positioning, not transactional booking

## 2. Color Palette & Roles

### Primary

- **CatchTable Orange** (`#FF3D00`): Brand primary. Used **exclusively** on the primary CTA pill (`12px` radius, `#FFF` text, 14px/500). In a 3000-element scan of the home surface, this color appears just 4 times in text/icon contexts and once as a background fill — scarcity is the discipline.
- **Pure White** (`#FFFFFF`): Page canvas, card surfaces. Clean, photograph-amplifying.
- **Title Black** (`#222222`): Section sub-titles, restaurant names, neighbourhood chip labels.
- **Pure Black** (`#000000`): Body text default, link text, nav labels. Maximum contrast.

### Brand support

- **Orange Soft** (`#FA8D6B`): Soft variant for pressed states and warm accents.
- **Orange Pressed** (`#FC9086`): Active-press / hover-state surface.
- **Orange Tint Warm** (`#FDF0EC`): Banner/notice surface fill.
- **Orange Tint Pale** (`#FCF3F2`): Subtle alert surface fill.

### Ink ladder (text & icon)

- **Body Default** (`#000000`): Default body text — used everywhere by default.
- **Title** (`#222222`): Section sub-titles, list-item titles.
- **Body Strong** (`#424242`): Tab-bar labels at rest.
- **Body Muted** (`#666666`): Footer policy links, secondary descriptions.
- **Tertiary** (`#5F5F5F`): Chip-button text (e.g. 현재 위치로).
- **Placeholder** (`#9E9E9E`): Search-input placeholder.
- **Disabled** (`#B5B5B5`): Disabled controls.
- **Icon Default** (`#8F8F8F`): Footer regulatory text, icon default.
- **Icon Subtle** (`#AAAAAA`): Decorative icons.

### Surface

- **Canvas** (`#FFFFFF`): Page background.
- **Subdued** (`#F9F9F9`): Footer block fill.
- **Muted** (`#F5F5F5`): Search-input fill, chip rest state.
- **Cool** (`#F2F5F7`): Optional cool-tinted surface.
- **Cool Alt** (`#F0F4FA`): Info-tint surface paired with `#186ADE`.

### Borders

- **Hairline Alpha** (`#00000014`): Default hairline divider (8% black).
- **Border Default** (`#E4E4E4`): Standard card and input border.
- **Border Cool** (`#DCE3E8`): Cool-themed surface border.

### Support cool-ink (rare; used in editorial / magazine module)

- **Cool Ink Deep** (`#1C2B36`), **Mid** (`#3E5463`), **Soft** (`#7A909E`), **Light** (`#9FB1BD`).

### Semantic

- **Info** (`#186ADE`) / **Info Soft** (`#75B1FF`) / **Info Tint** (`#F0F4FA`)
- **Success** (`#43C478`) / **Success Strong** (`#077D55`) / **Success Tint** (`#EBF7ED`)
- **Danger** (`#D91F11`): Distinct from brand orange — semantic red is darker, redder. Don't confuse.
- **Warning** (`#F5C518`)
- **Premium Purple** (`#8F49DE`): Reserved for premium-tier badges (e.g. members-only restaurants).

### Overlay

- **Counter Dim** (`rgba(20,24,29,0.74)`): Swiper slide-counter pill.
- **Scrim 70/60** (`rgba(0,0,0,0.7)`, `rgba(0,0,0,0.6)`): Modal/sheet backdrops.

## 3. Typography Rules

### Font Family

- **Primary**: `Pretendard, -apple-system, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", sans-serif`
- **No brand display font.** No headline accent. Pretendard alone carries the entire system. This is a deliberate restraint — the photography is the brand.

### Hierarchy

| Role | Size | Weight | Line Height | Notes |
|------|------|--------|-------------|-------|
| Section Title | 20px | 700 | 150% | `음식종류별 BEST`, `캐치 매거진`, search hero label `어디로 가시나요?` |
| Big Section | 18px | 700 | 150% | Larger card titles |
| Card Title | 16px | 600 | 150% | Restaurant card titles in list / detail surfaces |
| Body Default | 14px | 400 | 150% | **Dominant** — 900 of 1149 sampled elements; nav labels, list items, body |
| Tab Label | 14px | 400 | 150% | Bottom-tab labels |
| Chip Label | 14px | 500 | 150% | Geo chips, filter chips |
| Search Input | 13px | 500 | 150% | Placeholder color `#9E9E9E` |
| Neighbourhood Chip | 13px | 500 | 150% | `청담`, `압구정·로데오` style |
| Caption | 12px | 400 | 150% | Timestamps, secondary meta |
| Footer Body | 11px | 400 | 150% | Regulatory disclosure text |
| Policy Link | 11px | 500 | 150% | Footer `서비스 이용약관` row |
| Micro Meta | 10px | 500 | 150% | Slide counter `2 / 25`, bottom-tab compact mode |

### Principles

- **150% line-height is a system-wide contract.** Every typography token across ~35 distinct slots ships `line-height: 150%`. Don't break this — vertical rhythm depends on it.
- **400 dominates, 700 punctuates.** Weight distribution observed: 400 = 91%, 500 = 5%, 700 = 2%, 450 = 2%, 600 = <1%. The "weight rhythm" is binary — body or title, almost nothing in between.
- **No tracking adjustments observed** — `letter-spacing: normal` is universal.
- **Micro text below WCAG body floor**: 10–11px appears on slide counters and legal disclosures. For ports to Latin-script translations, elevate these to ≥12px.

## 4. Radius & Shape

The geometry is **hard-square by default**:

| Use | Radius | Frequency |
|---|---|---|
| Default chrome (canvas, sections, list rows, dividers, search input) | `0px` | 1063 of 1149 sampled elements (92%) |
| Photo thumbnail (rasterised, inside Swiper) | `4px` (also `4.05px` legacy) | 40 |
| Interactive control (button, card pill, filter pill) | `8px` | 29 |
| Avatar / circular icon | `50%` | 13 |
| **Primary CTA pill** | `12px` | 3 |
| Pill-full (rare, special-case) | `999px` | 1 |

The visual signature is the **absence** of softening on the chrome. Sharp corners frame food photography the way a magazine frames a photograph. When porting: do **not** apply a global `border-radius: 8px` reset — you will lose the brand entirely.

## 5. Elevation

Five-tier shadow ladder defined in `:root`, but used sparingly on the home surface (only 2 distinct shadows fired across 3000+ elements observed). Depth is mostly carried by **borders + surface tints**.

| Tier | Token | Recipe |
|---|---|---|
| xs | `--shadow-xs` | `0 1px 2px rgba(0,0,0,.12), 0 0 1px rgba(0,0,0,.08), 0 0 1px rgba(0,0,0,.08)` |
| sm | `--shadow-sm` | `0 2px 8px rgba(0,0,0,.12), 0 1px 4px rgba(0,0,0,.08), 0 0 1px rgba(0,0,0,.08)` |
| drop | `--shadow-drop` | `0 2px 12px rgba(0,0,0,.12)` |
| md | `--shadow-md` | `0 6px 12px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.08), 0 0 4px rgba(0,0,0,.08)` |
| lg / modal | `--shadow-lg` | `0 16px 20px rgba(0,0,0,.12), 0 8px 16px rgba(0,0,0,.08), 0 0 8px rgba(0,0,0,.08)` |

Reserve elevation for: floating action buttons over photography, bottom sheets, sticky search bars on scroll, modal surfaces. Don't fire on cards-at-rest — borders or hairline alpha (`#00000014`) handle separation.

## 6. Spacing & Layout

Observed spacing scale (px): **4 / 8 / 12 / 16 / 20 / 24 / 32 / 45 / 60**.

- **Mobile-first**: WebView shell with `status-bar-top` and `status-bar-padding-top` classes — the design target is the in-app surface, not desktop.
- **Section paddings**: `pb-45` and `mb-16` legacy utility classes — 45px bottom-of-section, 16px between modules.
- **Horizontal scrolling lists** dominate discovery — `음식종류별 BEST` is a swipe-row of best-of pills, not a vertical grid.
- **Bottom tab bar** owns the lowest 56–60px of the viewport.

## 7. Iconography & Photography

- **Photography-first**. The home flow is dominated by 4:3 and landscape food photography. Tile thumbnails carry a subtle `4px` radius — the only soft-corner surface in the system.
- **Icons are line-style**, rendered as inline SVG; default stroke color `#8F8F8F` (icon-default), darkening to `#000` on active states.
- **No illustration system observed** on the home surface. Magazine articles inside 캐치 매거진 carry editorial photography rather than custom illustration.

## 8. Component Patterns

- **Primary CTA pill**: `#FF3D00` fill, `#FFF` text, 14px/500 Pretendard, `12px` radius, ~44px tall — only one variant observed. Single-color, single-shape, single-CTA discipline.
- **Search input**: `#F5F5F5` fill, sharp `0px` corners, 13px/500 placeholder `#9E9E9E`, inline search icon left.
- **Chip / pill row**: 13–14px/500 ink, no fill at rest, no border at rest — separation by spacing alone (chips at `청담`, `압구정·로데오`, etc.).
- **Geo-toggle button** (현재 위치로): 14px/500, ink `#5F5F5F`, leading geo icon — text-style action button.
- **Best-of horizontal pill** (호텔 뷔페, 스시 오마카세): Image-led tile + 14px/400 ink label below — no card chrome, just photo + name.
- **Bottom tab bar**: 5 tabs (홈 / 저장 / 내 주변 / 마이다이닝 / MY), icon-over-label, 14px/400 ink default; active state inferred (not captured live this pass — flagged).
- **Swiper hero**: 25-slide carousel with counter pill (`2 / 25 / 전체`) on `rgba(20,24,29,0.74)` overlay.
- **Footer disclosure block**: `#F9F9F9` surface, 14px/400 corporate info, 11px/500 policy links separated by `|` pipe glyphs, 11px/400 regulatory disclaimer.

## 9. Accessibility & Locale

- **WCAG contrast** — `#000` on `#FFF` body is 21:1 (max); `#222`/`#FFF` titles are 16.1:1; `#FF3D00`/`#FFF` CTA pill is **3.7:1** — **fails AA for normal text but passes AA for large text (18pt+/14pt bold equivalent)**. Since the CTA pill ships 14px/500 (below the bold threshold), this sits at the **borderline AA fail** for body. The system as shipped accepts the trade-off; ports must either bold the CTA label or darken the orange to `#E63600` (≈4.6:1) for strict AA.
- **Micro text below body floor**: 10–11px slide counters and footer disclaimers are below WCAG body recommendations. Ports to Latin scripts (where stroke widths increase) should elevate to ≥12px.
- **No landmark elements observed in initial capture** — `<main>` is present but no `<aside>` / explicit `role` annotations on the bottom tab bar. A11y debt; flag for ports.
- **Locale convention**: Korean restaurant-reservation flows assume KR mobile carriers, KakaoTalk-style identity, and 24h reservation windows. The 마이다이닝 (My Dining) IA spine is loyalty-flavoured, not transaction-flavoured — ports should consider whether the destination market expects a "Reservations" history rather than a "Dining" hub.

## 10. Voice & Microcopy

**Voice shape** (analyst characterisation — not verbatim CatchTable copy): **curatorial-warm, gerund-light, second-person-implied**. The on-surface copy treats the user as a diner choosing a story, not a customer completing a transaction.

Don'ts:
- Don't write "Book now." The brand's invitation is softer.
- Don't write "X% off" stickers across photography. The system is photograph-respectful.
- Don't write urgency timers. Magazine, not flash sale.

Voice samples (fresh OmD-original characterisations, **not** lifted from CatchTable copy — three options to triangulate the shape):

1. *"오늘의 자리, 천천히 골라보세요."* — invitation framing, soft imperative.
2. *"이번 주말, 어디서 드실래요?"* — question framing, peer-to-peer warmth.
3. *"미식의 시작, 한 자리에서."* — slogan-shape, factual + warm.

**IP guardrail**: The title-tag phrase "즐거운 미식 생활의 시작" is quoted **once** in §11 as a factual brand-narrative reference and is **not** adopted as headline copy in any sample above. The gerund-lite, curatorial register is documented as a *shape*, not reproduced.

## 11. Brand Narrative (factual provenance)

CatchTable is operated by **주식회사 와드** (WAD Inc.), founded by **용태순** (Yong Tae-soon, current 대표/CEO). Headquartered in **Bundang, Gyeonggi-do** (corporate disclosure observed on the home footer, 2026-05-15). The service positions itself as a premium-leaning restaurant-reservation platform with editorial inflection — the 캐치 매거진 module on the home surface signals that the brand treats discovery as guidebook-style curation, not a transactional booking listing. Title-tag positioning observed on the home surface: "캐치테이블 | 즐거운 미식 생활의 시작" (factual evidence of curatorial-warm positioning, **not** adopted as design copy).

**FILL IN** (verification deferred — Crunchbase / DART access needed): founding year, total funding raised, employee headcount, investor list, monthly active users, reservation volume. These are reported in Korean trade press but were not verified at OmD attribution fidelity in this pass.

## 12. Personas (illustrative — for portable design briefs only)

> Personas are illustrative sketches derived from observable IA decisions (e.g. 마이다이닝 hub, 호텔 뷔페 / 스시 오마카세 / 한우 오마카세 best-of pillars). They are **not** based on internal CatchTable research and should be treated as analyst-inferred FILL-IN placeholders.

- **The Anniversary Planner** — 30s couple in Seoul; books quarterly for birthdays / anniversaries; values curation over price; uses 저장 (Save) before deciding.
- **The Omakase Regular** — 40s professional; books monthly; uses 마이다이닝 as a memory aid (where did I go, what did I eat); cares about repeat-discount tiers.
- **The Out-of-Town Visitor** — late 20s traveller in town for 2 days; uses 내 주변 + 캐치 매거진 to discover; books 24–48h ahead; one-shot user (low return).

## 13. Anti-Patterns

Things CatchTable's design **avoids** — and which a port must avoid to keep the inspiration:

- ❌ Flooding the surface with brand orange. Orange is a single-CTA color, not a section-fill color.
- ❌ Softening every corner. 92% of chrome is `0px` radius — sharpness is the brand.
- ❌ Adding a display / brand-typography font. Pretendard alone is the entire system.
- ❌ Firing shadows on cards at rest. Depth = borders + hairline alpha.
- ❌ "Book now" urgency rhetoric or countdown timers. Voice is curatorial, not transactional.
- ❌ Discount stickers stamped on food photography. Photography is sovereign.
- ❌ Breaking the 150% line-height contract. Every text slot ships 150% — don't compress.
- ❌ Treating desktop as the primary canvas. Design ships to mobile WebView; desktop is a porthole.

## 14. Motion (partially captured — flagged)

Motion tokens were **not** captured in this CDP pass — only entry-fade on Swiper transitions was visibly inferred. The home Swiper uses a default Swiper.js horizontal slide (cubic-ease, ~300ms). Detailed motion tokens (durations, easings, FAB rise, sheet present, tab-switch) require a follow-up UPDATE pass with interaction-triggered capture. **Flagged**.

## 15. Footer / Verification

- **DS surfaces probed and result**:
  - `design.catchtable.co.kr` → DNS no-resolve (000)
  - `tech.catchtable.co.kr` → DNS no-resolve (000)
  - `www.catchtable.co.kr/brand` → 302 redirect (no brand portal)
  - `github.com/catchtable` → 200 but only 3 public repos (`prerender-java`, `claude-hud`, `brand-review-tool`); **no design-system / Storybook / tokens repo**
  - `getdesign.md/catchtable` → "No designs found for 'catchtable'"
  - `styles.refero.design/?q=catchtable` → no result cards
  - **Result**: **Tier 1 official DS = authoritative NEGATIVE.** The system lives in production code as a vanilla-extract token sheet — captured here directly via CDP (145 `:root` vars on `app.catchtable.co.kr/`).

- **Live capture method**: Chrome DevTools Protocol over `localhost:9222`, `websocket-client` with `suppress_origin=True`, `Runtime.evaluate` against `document.documentElement` for full `:root` custom-property enumeration plus a 3000-element `getComputedStyle` frequency analysis. Browser: Chrome/148.0.7778.97. Captured `2026-05-15T07:10Z`.

- **Surfaces inspected**: `https://app.catchtable.co.kr/` (35 element samples, 145 `:root` vars, 3000-element frequency table) + `https://app.catchtable.co.kr/ct/shop/list?categoryName=서울` (4 element samples — degraded desktop shell, used to confirm primary CTA spec).

- **Proof artefacts**:
  - `assets/_reference/.live-inspect-proof.json` — 10 raw_samples (≥5 floor), full frequency proof, 33-color token map, 5-tier shadow ladder.
  - `assets/_reference/.live-inspect-raw.json` — provenance manifest.
  - `assets/_reference/tokens.json` — normalised colour / typography / radius / elevation / spacing.
  - `assets/_reference/fonts.json` — Pretendard stack + weight-role map.
  - `assets/_reference/structure.json` — IA + heading outline + tone-observed.
  - `_research.md` — 5-tier source map + IP guardrails + flags.

- **IP guardrails**: Brand assets (logo, name, primary `#FF3D00`) referenced for inspiration only. Title-tag positioning phrase quoted **once** as §11 narrative evidence; **not** reproduced as design copy. §10 voice samples are fresh OmD analyst paraphrases. Token values reproduced as factual CSS-custom-property values under analytical fair-use.

- **Confidence**: **High** for tokens, type, radius, elevation, colour, IA spine, footer disclosure. **Medium** for personas (analyst-inferred from IA, not from internal research). **Low / Flagged** for motion (not captured), restaurant-detail page, list page, sell/reservation flow, MY tab — all require an UPDATE pass via mobile-emulated CDP.

- **Verification date**: 2026-05-15.

## 16. Do's and Don'ts

### Do
- Reserve CatchTable Orange (#FF3D00) for the single primary CTA pill only, where it appears in just 4 text/icon contexts across a 3000-element scan
- Keep chrome hard-square at 0px radius (92% of elements), softening only to 4px for photo thumbnails, 8px for interactive controls, and 12px for the primary CTA pill
- Set Pretendard as the sole typeface across the entire system with no display or headline font, letting food photography be the brand moment
- Apply line-height: 150% to every typography slot, from the 20px/700 Section Title down to the 10px/500 Micro Meta, as a system-wide contract
- Carry separation with borders and hairline alpha (#00000014) on cards at rest, reserving the five-tier shadow ladder for FABs, bottom sheets, sticky search bars, and modals
- Keep body weight at Pretendard 400 (91% of text) and punctuate only with 700 for section titles and price emphasis

### Don't
- Flood sections or large backgrounds with brand orange #FF3D00 — it is a single-CTA color, not a section-fill color
- Apply a global border-radius reset like 8px to the chrome — it erases the hard-square 0px signature that frames the photography
- Add a display or brand-typography font alongside Pretendard, which alone carries 91% of all rendered text
- Fire shadows on cards at rest — depth is meant to come from borders and hairline alpha, not the shadow ladder
- Stamp discount stickers, X% off badges, or countdown timers over food photography, which the system treats as sovereign
- Confuse semantic Danger red #D91F11 with brand orange #FF3D00, or compress the 150% line-height contract
