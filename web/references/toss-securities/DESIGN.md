---
id: toss-securities
name: Toss Securities
display_name_kr: Toss Securities (토스증권)
country: KR
category: fintech
homepage: "https://tossinvest.com"
primary_color: "#3182f6"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=tossinvest.com&sz=256"
verified: "2026-05-15"
omd: "0.1"
---

# Design System Inspiration of Toss Securities (토스증권)

## 1. Visual Theme & Atmosphere

Toss Securities is the brokerage arm inside Korea's fintech super-app, and it inherits its parent's typographic and chromatic DNA while pulling the entire surface into a deep, calm dark mode by default. The page opens not on white but on a near-black canvas — page background `rgb(23, 23, 28)` over a deeper surface token `#101013` — where money information feels less like banking-product chrome and more like an instrument panel: legible, quiet, technically dense, and resolutely free of decoration. Where retail-banking Toss optimises for "anyone can use this," Toss Securities optimises for "someone watching a chart wants this exact answer right now," and the visual system reflects that pivot without changing brand vocabulary.

The custom **Toss Product Sans** typeface carries over wholesale from `toss.im` — same Korean-Latin optical balancing, same tabular-numeral support that makes price ticks, volume figures, and percent changes line up cleanly across rows. Body sits at 16px / 400, section headings at 24px / 700, sub-section headings at 18.72px / 700, and global navigation uses an intermediate 15px / 500 weight that quietly separates wayfinding from reading. There is no display-only accent typeface; restraint is the rule.

What makes Toss Securities visually unique inside the Toss family is the **semantic colour inversion**: the parent product treats blue as "go / primary action," but a securities surface must carry the Korean-finance locale convention where **red means a price went up (positive)** and **blue means a price went down (negative)**. The live token tree honours this — `--tw-semantic-color-fill-positive-default: #dc2e47` (red), `--tw-semantic-color-fill-negative-default: #3182f6` (blue) — and the same Toss Blue `#3182f6` is reused as the brand CTA fill `--tw-semantic-color-fill-brand-default`. Context resolves the ambiguity: a blue rectangle next to a price tick means "this stock fell"; a blue rectangle as a button means "execute." Designers porting this language outside KR/JP/TW **must invert** the positive/negative hue assignments.

**Key Characteristics:**
- Dark-mode-first surface (`#101013` deepest, `rgb(23,23,28)` body, `#202025` overlay)
- Toss Product Sans inherited from parent brand — tabular numerals for price data
- KR-finance locale: `positive` = red `#dc2e47`, `negative` = blue `#3182f6` (semantic tokens, not just colour values)
- Toss Blue `#3182f6` carries dual duty as brand CTA AND down-tick — context-disambiguated
- Three-namespace token system on `:root`: `--tw-semantic-*` (role) / `--tw-adaptive-*` (theme-aware primitive) / `--wts-adaptive-*` (Web-Toss-Securities scale)
- Zero box-shadow on production chrome — depth via layered surface alpha + translucent 1px borders (`rgba(214,224,239,0.09)`)
- Two-tier radius family: `8px` for cards/inputs/buttons, `32px` for contextual chips/pills
- 416 CSS custom properties live on `:root` — a real internal DS, simply not published

## 2. Color Palette & Roles

### Brand (CTA, links, active)
- **Toss Blue** (`#3182f6`): `--tw-semantic-color-fill-brand-default`. Primary CTA fill, brand icon, brand link.
- **Toss Blue Hover** (`#2562b9`): `--tw-semantic-color-fill-brand-defaultHover`.
- **Toss Blue Pressed** (`#29518e`): `--tw-semantic-color-fill-brand-defaultPressed`.
- **Brand Text** (`#4391ff`): `--tw-semantic-color-txt-brand`. Brand-coloured inline text.
- **Brand Text Hover** (`#74b1f8`): `--tw-semantic-color-txt-brandHover`.

### Semantic — KR finance convention (CRITICAL)
- **Positive / Up / 매수** (`#dc2e47`): `--tw-semantic-color-fill-positive-default`. RED. Used for rising prices, gain indicators, buy confirms.
- **Positive Hover** (`#ad2136`): `--tw-semantic-color-fill-positive-defaultHover`.
- **Positive Pressed** (`#8d222f`): `--tw-semantic-color-fill-positive-defaultPressed`.
- **Positive Text** (`#f5445a`): `--tw-semantic-color-txt-positive`.
- **Positive Text Hover** (`#ff7187`): `--tw-semantic-color-txt-positiveHover`.
- **Positive Weak** (`rgba(219,81,87,0.2)`): `--tw-semantic-color-fill-positive-weak`. Tinted background for up-tick rows.
- **Negative / Down / 매도** (`#3182f6`): `--tw-semantic-color-fill-negative-default`. BLUE. Same hex as Brand — context disambiguates.
- **Negative Text** (`#4391ff`): `--tw-semantic-color-txt-negative`.
- **Negative Weak** (`rgba(67,122,223,0.2)`): `--tw-semantic-color-fill-negative-weak`.

> **Locale rule**: This is non-negotiable for KR/JP/TW finance UI. Porting to US/EU markets requires swapping all `positive-*` tokens to green and all `negative-*` tokens to red. Toss Securities does not ship that variant publicly; it must be authored downstream.

### Surface (dark default)
- **Surface 100** (`#101013`): `--tw-semantic-color-bg-surface100`. Deepest surface — page floor.
- **Body composite** (`rgb(23, 23, 28)`): rendered body background as observed via getComputedStyle.
- **Overlay 300** (`#202025`): `--tw-semantic-color-bg-overlay300`. Modal/sheet overlay base.
- **Panel border outer** (`rgba(214,224,239,0.09)`): `--tw-semantic-color-component-panel-borderOuter`. Translucent dividers — depth without shadow.

### Text (dark surface)
- **Primary** (`rgba(242,246,255,0.9)`): `--tw-semantic-color-txt-neutral-primary`. Default reading text.
- **Primary Hover** (`rgba(255,255,255,0.96)`).
- **Primary Pressed** (`#FFFFFF`).
- **Secondary observed** (`rgba(253,253,254,0.89)`): inline secondary text — slightly warmer alpha.
- **Tertiary observed** (`rgba(242,242,255,0.47)`): disabled / muted captions.
- **Body default rendered** (`rgb(195, 195, 198)`): composited body text — neutral cool grey.
- **Static white** (`#FFFFFF`): `--tw-semantic-color-txt-staticWhite`. On-CTA text.

### Icon
- **Icon brand** (`#3182f6`).
- **Icon neutral primary** (`rgba(217,223,235,0.8)`).
- **Icon positive** (`#f5445a`) — up-tick chevron.
- **Icon negative** (`#4391ff`) — down-tick chevron.

## 3. Typography Rules

### Font Family

**Primary**: `"Toss Product Sans", Tossface, -apple-system, system-ui, "Bazier Square", "Noto Sans KR", "Segoe UI", "Apple SD Gothic Neo", sans-serif`

Tossface is Toss's open-source emoji font (3500+ glyphs, parent-brand asset). Toss Product Sans is loaded via parent-domain CDN — Toss Securities does not appear to serve its own webfont copy on this surface.

### Hierarchy (observed live)

| Role | Size | Weight | Notes |
|------|------|--------|-------|
| Section H2 | 24px | 700 | "지수 목록" / "실시간 차트" |
| Sub-section H3 | 18.72px | 700 | "필터" / "종목 정보" |
| Nav link | 15px | 500 | Global nav |
| Body / button text | 16px | 400 | Body default |
| Input text | 15px | 400 | Form fields |
| Memo chip | 12px | 600 | Contextual pill action |
| On-CTA text | 16px | 400 | White on tinted-fill button |

### Numeric & data treatment
Tabular numerals inherit from Toss Product Sans variable-width / tabular-mode toggle. Price ticks, order-book columns, and percent changes use the tabular mode so digits align by column without `font-variant-numeric` patching at each surface.

## 4. Iconography & Imagery

- Icon weight: medium-stroke, single-tone (`--tw-semantic-color-icon-*`).
- Brand icon set inherits from parent Toss icon system.
- No decorative illustration on data surfaces — the price chart IS the imagery.
- Marketing surfaces (homepage feed) use product screenshots of the order panel itself, recursively.

## 5. Layout & Spacing

- **Two-pane stock detail**: chart + price panel (left) / order panel (right rail).
- **Card radius**: `8px` (cards, inputs, default buttons).
- **Chip radius**: `32px` (pill controls — memo, filter chips).
- **Icon button radius**: `6–8px` with compact padding (`3px 6px` to `6px 8px`).
- **No box-shadow** on any production chrome element sampled.
- Surface depth = base `#101013` → body `rgb(23,23,28)` composite → overlay `#202025` for sheets.
- Translucent `rgba(214,224,239,0.09)` 1px borders for panel separation.

## 6. Components

### Buttons
- **Ghost (default observed)**: bg `rgba(217,217,255,0.11)` / text `#fff` or `rgba(253,253,254,0.89)` / radius `8px` / 16px text / 400 weight.
- **Brand CTA (inferred from token tree, not sampled directly on this surface)**: bg `#3182f6` / text `#fff` / radius `8px`.
- **Memo chip**: bg `rgba(217,217,255,0.11)` / radius `32px` / 12px / 600 / padding `0 8px`.
- **Icon button**: radius `6–8px` / padding `3×6` to `6×8`.

### Order panel (stock detail)
- Panels: 차트 · 호가 · 시세 · 일반주문 · 개인·외국인·기관 · 체결가.
- Order types: 일반주문 / 정규장 주문 예약.

### Navigation
- Global: 홈 · 피드 · 주식 골라보기 · 내 계좌 · 내 투자.
- Secondary: 관심 · 최근 본 · 실시간.
- Auth: 로그인.

### Price tick (semantic)
- Up → text `#f5445a` (icon `#f5445a`), weak tint `rgba(219,81,87,0.2)`.
- Down → text `#4391ff` (icon `#4391ff`), weak tint `rgba(67,122,223,0.2)`.

## 7. Motion & Interaction

State tokens captured for all interactive roles:

- **Brand**: default `#3182f6` → hover `#2562b9` → pressed `#29518e`.
- **Positive**: default `#dc2e47` → hover `#ad2136` → pressed `#8d222f`.
- **Negative**: default `#3182f6` → hover `#2562b9` → pressed `#29518e`.
- **Ghost-fill family**: `*-ghostHover` / `*-ghostPressed` / `*-weakHover` / `*-weakPressed` exist for every role — fine-grained state language.

Motion timing tokens not captured this pass (no live transition introspection performed) — flagged for UPDATE.

## 8. Accessibility & Density

- Dark surface + `rgba(242,246,255,0.9)` primary text ≈ AA-passing contrast on `#101013` (~14:1).
- Body composited grey `rgb(195,195,198)` on `rgb(23,23,28)` ≈ 11:1 — comfortable AA.
- **Locale risk**: KR red/blue convention is opposite to most US/EU expectations. Cross-locale users may misread direction.
- High data density tolerates 16px body baseline because tabular numerals stabilise column scanning.

## 9. Voice (illustrative, fresh derivations — not verbatim Toss copy)

- "Watch the tick. Move when it matters."
- "차트는 정직해요. 결정은 빠르게."
- "Real prices. Real depth. No theatre."

§10 voice samples above are tone-shape paraphrases — derived from observing the calm/declarative product voice on the live surface, not lifted from Toss Securities marketing copy. Brand owns its own taglines; we do not reproduce them.

## 10. Personas (FILL IN — surface-inferred placeholders)

- **A. Active retail trader, KR 20s–30s**: opens app multiple times intraday, watches a small watchlist, executes via mobile. Wants speed and signal. `[FILL IN with sourced research]`
- **B. Long-horizon individual investor, KR 30s–50s**: monthly rebalance, ETF + blue-chip focus, uses 내 계좌 dashboard primarily. `[FILL IN]`
- **C. First-time investor onboarding from Toss core**: came in via Toss super-app, expects continuity of brand and trust. `[FILL IN]`

## 11. Anti-patterns (don't steal)

- **Do not** copy positive=red / negative=blue into non-KR/JP/TW locales without inversion.
- **Do not** assume Toss Blue means "brand CTA" everywhere — on Securities it also means "down-tick."
- **Do not** introduce box-shadow as elevation language; this system has chosen translucent borders + layered surface alphas.
- **Do not** introduce a third radius tier; the system is deliberately two-tier (`8px` / `32px`).
- **Do not** introduce a display-only typeface; restraint is the point.

## 12. Reference URLs

- Production app: https://tossinvest.com (homepage)
- Production stock surface: https://www.tossinvest.com/stocks/A005930/order (Samsung Electronics order panel)
- Parent brand DS context: https://toss.im (typography + base colour origin)
- Tossface (open-source emoji): https://github.com/toss/tossface

## 13. Verification footer

- **Tier 1 official DS**: ✗ NEGATIVE — no `design.tossinvest.com`, no `tossinvest.com/design`, no `tossinvest.com/brand` portal; GitHub org `@toss` (45+ repos, verified for `toss.im`) has zero Toss-Securities-specific design-system / Storybook / token repository; no `toss-im` or `toss-securities` GitHub org exists. Production code exposes 416 `:root` CSS custom properties across three namespaces (`--tw-semantic-*`, `--tw-adaptive-*`, `--wts-adaptive-*`) — the closest public artifact, captured directly.
- **Tier 2 indexes**: not consulted (consistent with KR fintech systemic gap logged in `2026-05-13-kr10.md` and `2026-05-14-kr10.md` audits).
- **Tier 3 live capture**: ✓ CDP `:9222` getComputedStyle on **two surfaces** — homepage (601 DOM samples, 416 `:root` vars) + stock order surface (`A005930/order`). 12 raw_samples retained in `.live-inspect-proof.json` (≥5 floor).
- **IP guardrails**: brand assets reference-only; no verbatim Toss Securities taglines/copy reproduced; voice samples in §9 are fresh derivations; logo not redistributed; persona block in §10 explicitly marked `[FILL IN]` (no fabricated quotes).
- **Flagged for UPDATE**: (a) motion timing tokens not captured this pass; (b) light-mode variant — `--tw-adaptive-*` namespace implies a theme switch but only dark default observed live; (c) personas pending public-research sourcing; (d) primary CTA visual not directly sampled (token tree confirms `#3182f6` fill but live surface served ghost-button variants on inspected paths).
