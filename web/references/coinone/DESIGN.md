---
id: coinone
name: "Coinone"
country: KR
category: fintech
homepage: "https://coinone.co.kr"
primary_color: "#006BD6"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=coinone.co.kr&sz=256"
verified: "2026-06-03"
omd: "0.1"
ds:
  name: "Coinone Brand Guideline"
  url: "https://coinonecorp.com/company/brand"
  type: brand
  description: "Official BI/brand guideline (v4.0) — Coinone Blue color system, signature logo lockups, clear-space rules."
tokens:
  source: prose-derived
  extracted: "2026-06-08"
  note: "primary = live filled-CTA blue (#0B59D5); brand = BI 'Coinone Blue' identity (#006BD6) — applied shades of the same blue, not a conflict"
  colors:
    primary: "#0B59D5"
    primary-hover: "#194386"
    brand: "#006BD6"
    point: "#0090FF"
    canvas: "#FFFFFF"
    foreground: "#040505"
    muted: "#6B7684"
    on-primary: "#FFFFFF"
    accent-outline: "#1772F8"
    body: "#17181B"
    hairline: "#DDE4EB"
    surface-tint: "#EBF0F5"
    skeleton: "#EEEFF0"
    disabled: "#CFD0D3"
    navy: "#062554"
  typography:
    family: { sans: "Pretendard", mono: "SFMono-Regular" }
    hero:        { size: 32, weight: 700, lineHeight: 1.2, use: "Hero / section titles, near-black #040505" }
    control:     { size: 15, weight: 700, lineHeight: 1.0, use: "Primary control / button label" }
    body:        { size: 14, weight: 400, lineHeight: 1.5, use: "Body & list rows (13-15px / 400-500)" }
    figure:      { size: 14, weight: 600, lineHeight: 1.3, use: "Trading numerals — dense, right-aligned, weighted when changing" }
    micro:       { size: 12, weight: 400, lineHeight: 1.4, use: "Micro-labels & helper, muted #6B7684" }
  spacing: { xs: 4, sm: 8, md: 12, base: 8, lg: 18, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 3, chip: 6, md: 8, lg: 10, full: 9999 }
  shadow:
    soft: "rgba(0,0,0,0.05) 0px 1px 2px 0px"
  components_harvested: true
  components:
    button-primary: { type: button, bg: "#0B59D5", fg: "#FFFFFF", radius: 8, font: "15/700", use: "Primary CTA, 46px height — one per view" }
    button-secondary: { type: button, bg: "#FFFFFF", fg: "#040505", radius: 8, font: "15/500", use: "White fill, 1px #DDE4EB border" }
    accent-outline: { type: button, fg: "#1772F8", radius: 3, use: "Transparent fill, 1px #1772F8 border — signup/inline emphasis" }
    filter-chip: { type: badge, bg: "#FFFFFF", radius: 6, use: "1px #DDE4EB border, 32px height; active = 1px #040505 border + 700" }
    store-button: { type: button, bg: "#EBF0F5", radius: 10, font: "13/700", use: "Light or dark (#040505) fill, 48px height" }
    icon-button: { type: button, fg: "#040505", radius: 9999, padding: "5px", use: "Circular semi-transparent fill" }
---

# Coinone

Coinone is one of Korea's longest-running cryptocurrency exchanges (est. 2014). Its product face pairs a trustworthy, institutional blue with a clean, high-density trading surface — a fintech tone that has to read as both safe and fast.

## 1. Visual Theme & Atmosphere

Coinone presents as a calm, blue-anchored fintech exchange that wants to feel safe before it feels exciting. The chrome is mostly white with near-black text, letting a single confident blue carry every primary action and the brand itself. Surfaces are flat and lightly bordered rather than shadow-heavy; density rises sharply once you enter trading views, but the marketing and onboarding surfaces stay airy and reassuring. The result is a "boring-on-purpose" trust aesthetic typical of regulated Korean crypto, lifted by a brighter point-blue used sparingly for emphasis and AI/automation features.

## 2. Color Palette & Roles

Coinone's official BI defines "Coinone Blue" as the identity color, applied through a small set of roles. The live product applies a slightly deeper, more saturated blue to primary CTAs than the BI swatch.

- **Coinone Blue (Main):** `#006BD6` — brand identity color (BI v4.0)
- **Point Blue:** `#0090FF` — emphasis / highlight accent (BI)
- **Sub Blue 1:** `#194386` — deep supporting blue (BI)
- **Sub Blue 2:** `#062554` — darkest navy, headings on light (BI)
- **Primary CTA (live):** `#0B59D5` — actual filled-button blue used on coinone.co.kr
- **Accent outline blue (live):** `#1772F8` — signup / inline emphasis outline
- **Text primary:** `#040505` — near-black body & headings
- **Text secondary:** `#17181B` — strong neutral
- **Text muted:** `#6B7684` — captions, helper text
- **Neutral border:** `#DDE4EB` — input & outline-button borders
- **Gray scale (BI):** `#EEEFF0` / `#CFD0D3` / `#8D9299` / `#616670`
- **Surface tint:** `#EBF0F5` — light fill (store buttons, soft chips)
- **Trading direction:** Korean market convention — price-up = red, price-down = blue (not measured as fixed tokens; applied per ticker state).

## 3. Typography Rules

- System Korean/Latin sans (Pretendard-class) — no proprietary display face on web.
- Hero / section titles: bold, large, near-black `#040505`.
- Primary control label: 15px / 700.
- Body & list rows: 13–15px / 400–500.
- Micro-labels & helper: 12px / 400, muted `#6B7684`.
- Numerals run dense and right-aligned in trading tables; weight 500–700 for figures that change.

## 4. Component Stylings

### Buttons

**Primary (filled)**
- Background: `#0B59D5`
- Text: `#FFFFFF`
- Radius: 8px
- Padding: 14px 18px
- Height: 46px
- Font: 15px / 700

**Secondary (outline on white)**
- Background: `#FFFFFF`
- Text: `#040505`
- Border: 1px solid `#DDE4EB`
- Radius: 8px
- Padding: 14px 18px
- Height: 46px
- Font: 15px / 500

**Accent outline (signup / inline emphasis)**
- Background: transparent
- Text: `#1772F8`
- Border: 1px solid `#1772F8`
- Radius: 3px
- Padding: 0 8px
- Height: 24px
- Font: 12px / 700

**Text link**
- Background: transparent
- Text: `#0B59D5`
- Font: 16px / 400

**Store button (light)**
- Background: `#EBF0F5`
- Text: `#040505`
- Radius: 10px
- Padding: 13px
- Height: 48px
- Font: 13px / 700

**Store button (dark)**
- Background: `#040505`
- Text: `#FFFFFF`
- Radius: 10px
- Padding: 13px
- Height: 48px
- Font: 13px / 700

### Chip / Toggle

**Filter chip (default)**
- Background: `#FFFFFF`
- Text: `#040505`
- Border: 1px solid `#DDE4EB`
- Radius: 6px
- Padding: 6px 12px
- Height: 32px
- Font: 13px / 500
- Active: border 1px solid `#040505`, font-weight 700

### Icon button

**Circular**
- Background: `rgba(0,0,0,0.4)`
- Radius: 50%
- Padding: 5px

---
**Verified:** 2026-06-03
**Tier 1 sources:** https://coinonecorp.com/company/brand (official BI guideline, brand-owned), https://coinone.co.kr (live exchange site, brand-owned), https://image-public.coinone.co.kr/download/corphome/coinone_guide_4.0.pdf (official brand guideline PDF v4.0, brand-owned)
**Tier 2 sources:** getdesign.md/coinone — NOT LISTED. refero ?q=coinone — no Coinone-specific result. Tier 1 carries the evidence per KR regional-source rule.
**Conflicts unresolved:** BI "Coinone Blue" main is `#006BD6`; the live product applies `#0B59D5` to filled CTAs and `#1772F8` to outline emphasis — recorded as applied shades of the same identity blue, not a conflict.

## 5. Layout Principles

- Marketing/onboarding: centered, generous vertical rhythm, single-column hero with one primary blue CTA.
- App/exchange: dense multi-pane (market list · chart · order form), right-aligned numeric columns, thin neutral dividers `#DDE4EB`.
- 8px spacing base; controls cluster at 8/12/18px gaps.
- White surfaces dominate; sectioning by border and spacing rather than heavy cards.

## 6. Depth & Elevation

- Low elevation overall: flat white surfaces, 1px `#DDE4EB` borders do most of the separation.
- Radius scale: 3px (inline tags) · 6px (chips) · 8px (buttons/cards) · 10px (store/large) · 50% (icon).
- Shadows reserved for floating menus / modals, kept soft and short.

## 7. Do's and Don'ts

### Do
- Use one confident blue for the single primary action per view.
- Keep trading numerals dense, right-aligned, and weighted when they change.
- Respect Korean market color convention (red = up, blue = down) in price contexts.
- Lean on borders and spacing for structure; keep surfaces flat and white.

### Don't
- Stack multiple filled-blue CTAs competing in one viewport.
- Introduce shadow-heavy cards in trading views — it slows scanning.
- Recolor the identity blue toward teal/purple; stay within the Coinone Blue family.
- Use red/green for price direction (that's a Western convention; KR is red-up/blue-down).

## 8. Responsive Behavior

- Marketing pages collapse to single column; CTA goes full-width with the same 8px radius.
- Exchange UI is desktop-dense; mobile app reflows panes into stacked tabs (markets → chart → order).
- Touch targets ≥ 44px on app surfaces; 48–49px primary buttons translate cleanly to mobile.

## 9. Agent Prompt Guide

When generating Coinone-style UI: white background, near-black `#040505` text, exactly one filled blue (`#0B59D5`) primary action with 8px radius and 15px/700 label, outline secondaries with `#DDE4EB` borders. Keep it flat and bordered, dense in data views, calm in marketing. For price/market data use KR convention (red up, blue down). Use `#1772F8`/`#0090FF` only as sparing emphasis, never as a second competing CTA.

## 10. Voice & Tone

Coinone's voice is **steady, plain, and reassuring** — a regulated exchange explaining money clearly, not hyping coins.

| Do | Don't |
|---|---|
| "30초면 가입 완료" — concrete, low-friction | "지금 안 사면 후회!" — FOMO/hype |
| Explain risk and fees plainly | Bury terms or over-promise returns |
| Calm, confident, second-person | Slangy crypto-degen tone |

Voice samples (illustrative, derived from live copy):
- "딱 30초면 완료할 수 있어요!" (signup nudge — friendly, concrete)
- "스마트 트레이딩 바로가기" (feature CTA — direct, plain)
- "방문 상담 예약하기" (support — calm, service-oriented)

## 11. Brand Narrative

Founded in 2014, Coinone is one of Korea's first-generation crypto exchanges and has framed itself around "connecting the world and technology" (세상과 기술을 연결하다). Its logo guideline describes the mark as carrying "the infinite possibilities of connection." Over a decade it has leaned into trust and compliance as differentiators in a heavily regulated market, while pushing automation features (AI grid / smart trading) to stay competitive with larger rivals. The design language reflects that posture: institutional blue, plain language, safety-first surfaces.

## 12. Principles

1. **Trust before excitement.** — *UI implication:* calm white surfaces, one blue, no hype color.
2. **Clarity of money.** — *UI implication:* plain copy, explicit fees/states, legible dense numerals.
3. **One decisive action.** — *UI implication:* a single filled-blue CTA per view.
4. **Speed in data, calm in marketing.** — *UI implication:* dense trading panes, airy onboarding.
5. **Stay within the identity blue.** — *UI implication:* blue family only for brand/primary; grays carry the rest.

## 13. Personas

*Illustrative archetypes for design context, not official user research.*

- **Cautious first-timer** — wants a safe, regulated place to buy a little crypto; needs plain steps and visible trust signals.
- **Active retail trader** — lives in the order book; values dense data, fast toggles, reliable numerals.
- **Automation seeker** — drawn to AI grid / smart trading; wants set-and-forget tooling explained simply.

## 14. States

- **Empty:** "보유 자산이 없어요" — quiet muted `#6B7684` text + a single blue "입금하기" CTA.
- **Loading:** skeleton rows in trading tables; spinner inside buttons on submit.
- **Error (validation):** inline red helper under field; field border turns warning red.
- **Error (network):** non-blocking toast, retriable; data panes keep last values dimmed.
- **Success:** brief confirmation toast / checkmark; return to the relevant balance or order view.
- **Skeleton:** gray `#EEEFF0` placeholder blocks matching final row layout.
- **Disabled:** muted `#CFD0D3` fill, no border emphasis, non-interactive cursor.

## 15. Motion & Easing

- Duration scale: 120ms (micro hover/press) · 200ms (toggles, toasts) · 300ms (page/section transitions).
- Easing: standard ease-out for entrances, ease-in-out for toggles.
- Price/number changes flash briefly (red up / blue down) then settle — motion communicates direction, never decorates.
- Keep motion minimal in trading views to avoid distracting from live data.
