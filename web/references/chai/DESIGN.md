---
id: chai
name: Chai
display_name_kr: Chai (차이)
country: KR
category: fintech
homepage: "https://chai.finance"
primary_color: "#ff0062"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=chai.finance&sz=256"
verified: "2026-05-15"
omd: "0.1"
---

# Chai (차이) — Reference DESIGN.md

## 1. Visual Theme & Atmosphere

Chai is loud Korean fintech magenta on near-black, with a purple flinch on every hover. The brand's whole visual idea sits in one motion: the primary call-to-action ships pink (`#ff0062`) and snaps to electric purple (`#6411ff`) the instant you point at it — a single shipped declaration (`.button.color-red:hover`) that does more brand-defining work than any logo lockup. The display face is a custom typeface literally named **ChaiGothic** that carries both Korean and Latin glyphs, set at weight 700 about half the time (31 of 60 weight declarations). Headings are bold, body is 16/18px, line-heights stay in the 1.2–1.5 corridor, and the whole system runs without a single CSS custom property — depth is borders and insets, not blurred drop-shadows. The wordmark itself puns on the Korean noun *차이* (= "difference"), and the headline corpus from the 2021 marketing build ("할인 금액이 남달라서 차이다", "단순하니까 차이다") shows the company anchoring every visual decision to that one syllable. The result is a brand that feels closer to a 2019 Korean simple-payment startup billboard than to the Tossy minimal-grey consensus the rest of KR fintech later converged on — bold, slogan-driven, faintly retro, and unmistakably its own.

The atmosphere is dense at the top of the stack and weightless at the bottom. Hero panels go `#1b1b1b` with white display headlines; service tiles drop to `#272727` / `#302f2f` panels; muted footer ink lands at `#a5a5a5`; the brand-magenta is reserved as a scarcity asset (16 declarations across the entire 182KB bundle — fewer than the ink-grey scale). When colour does appear, it never blends — pink is pink, purple is purple, yellow `#ffc600` is a third standalone accent for sparing eyebrow treatments, and the four hues never mix into a gradient. Border-radius defaults to 0 with a four-step ladder (4 / 5 / 8 / 12 / 100 px) layered on for specific component classes; pills are explicit, square is everywhere else. Motion is restrained to a single observed declaration — `transition: color 200ms ease` — meaning the brand reads as a *colour brand first, motion brand last*.

## 2. Color System

| Role | Token | Value | Notes |
|---|---|---|---|
| Brand primary | `brand.pink` | `#ff0062` | Primary CTA default, inline emphasis. 16× in CSS bundle — scarcity asset. |
| Brand hover | `brand.purple_hover` | `#6411ff` | Pink→purple on `:hover` is the brand's signature motion. Also bg for selected tabs. |
| Brand press | `brand.purple_dark` | `#4700e0` | Darker rung for pressed/active. |
| Brand emphasis | `brand.purple_press` | `#4400c3` | Deepest purple — borders on selected panels. |
| Accent | `brand.yellow_accent` | `#ffc600` | Eyebrow / badge accent. Never used as CTA fill. |
| Ink primary | `ink.primary` | `#1b1b1b` | Dark panel bg + body text on light. 16× declarations. |
| Ink secondary | `ink.secondary` | `#464646` | Sub-heading / inset highlight pair. |
| Ink tertiary | `ink.tertiary` | `#747474` | Meta. |
| Ink quaternary | `ink.quaternary` | `#a5a5a5` | Footer / disabled. **17×** in bundle (the muted ink does as much chrome work as the brand pink). |
| Surface white | `surface.white` | `#ffffff` | Light-mode canvas. |
| Surface soft | `surface.near_white` | `#f8f8f8` / `#f5f5f5` | Section dividers. |
| Border | `surface.border_grey` | `#e6e6e6` | 1px hairlines. |
| Panel dark | `surface.panel_dark` | `#272727` | Card surface on dark. |
| Panel darker | `surface.panel_darker` | `#302f2f` | Nested dark panel. |
| Alert | `semantic.alert_red` | `#ff2121` | Distinct from brand pink — never reused for CTAs. |
| Warning | `semantic.warning_pink` | `#f76969` | Soft pink — used as warning only, not brand. |
| Info bg | `semantic.info_blue_grey` | `#ebf0f7` | Cool tint, marketing-only. |

**Hover rule (brand-defining):**
```css
.button.color-red             { background-color: #ff0062; }
.button.color-red:hover       { background-color: #6411ff; }
.button-tab.w--current        { background-color: #6411ff;
                                box-shadow: inset 0 -4px 0 0 #6411ff; }
```

**A11y note**: `#ff0062` on `#ffffff` = ~3.9:1 (fails AA for body text, passes AA for 18pt+ / bold ≥14pt). Chai correctly restricts pink to large bold CTA labels and headlines; do **not** port it to body text. `#a5a5a5` on `#ffffff` = ~2.9:1 (footer-only, never primary text).

## 3. Typography

**Stack canonical**: `ChaiGothic, 'Noto Sans KR', Hauora, Inter, sans-serif`

| Family | Role | Notes |
|---|---|---|
| **ChaiGothic** | Display + UI primary (Korean + Latin) | Custom typeface bearing the brand name. Brand-owned — do not redistribute. Substitute Pretendard for ports. |
| **Gotham** / Gotham book / Gotham ultra | Latin display secondary | Hoefler & Co. commercial license. Ultra reserved for hero numbers. |
| **Hauora** | Modern sans (marketing supporting copy) | Free for personal use; commercial license available. |
| **Inter** | UI sans fallback | OFL free. Used in footer Latin. |
| **Noto Sans KR** | Google-Fonts-loaded webfont (100/300/400/500/700/900) | Belt-and-suspenders Korean fallback. |

**Size scale** (frequency-ranked from 182KB bundle): 12 / 13 / 14 / 16 / 18 / 20 / 22 / 24 / 28 / 32 / 40 px plus em scale `1.4em / 1.8em / 2em / 4em` for hero. **16px** is the canonical body (29 declarations).

**Weight distribution**: 700 = 31× (51%), 400 = 23×, 600 = 8×, 500 = 7×, 900 = 2×, 300 = 1×. The system is **bold-heavy** — 700 leads almost everything that isn't long-form body.

**Line-height ladder**: 1.1 / 1.15 / 1.2 / 1.25 / 1.35 / 1.4 / 1.5 / 1.6. 1.4 is canonical body (8×). Display heads sit at 1.2 or tighter.

**Letter-spacing**: `-0.03em` / `-0.02em` for display heads (tight), `0` for body, `+0.07em` for uppercase Latin eyebrows only.

## 4. Components

### Button

**Primary (`.button.color-red`)**
- Background: `#ff0062`
- Text: `#ffffff`
- Hover background: `#6411ff` (brand-defining flip)
- Border: none
- Radius: `4px` (canonical small) — pill variant uses `100px`
- Padding: `18px 40px`
- Font: 16px / 700 / ChaiGothic
- Transition: `color 200ms ease`
- Use: primary marketing CTA, store-link blocks, hero conversion.

**Top-nav primary (`.button.topnav.color-red`)**
- Background: `#ff0062`
- Text: `#ffffff`
- Hover background: `#6411ff`
- Padding: `18px 35px` (1px less on horizontal for tighter nav fit)
- Font: 14–16px / 700 / ChaiGothic
- Use: header right-aligned CTA.

**Pill compact**
- Background: brand or ink
- Radius: `100px`
- Padding: `10px 20px`
- Font: 14px / 700
- Use: secondary nav, filter tags.

**Inline emphasis (`.text-red`)**
- Color: `#ff0062`
- No background, no border
- Use: keyword highlight within body copy.

### Tab (pricing / plan selector)

**Active tab (`.button-tab.w--current` / `.tab-list.w--current`)**
- Background: `#6411ff`
- Text: `#ffffff`
- Box-shadow: `inset 0 -4px 0 0 #6411ff` (underline lives inside the box, no layout shift on state change)
- Radius: 0
- Use: pricing-plan tab strip; switches plans without reflow.

**Default tab**
- Background: transparent
- Text: `#1b1b1b`
- Use: inactive sibling tabs.

### Card

**Dark service tile**
- Background: `#1b1b1b` (or `#272727` for stacked depth)
- Text: `#ffffff` for heads / `rgba(255,255,255,0.54)` for sub
- Radius: `12px` (canonical card)
- Padding: `35px` (or `90px 35px 45px` for hero-stretched)
- Border: none
- Box-shadow: none
- Use: feature panels on home, announcement cards on /about.html.

**Selected plan card (`.gray-wrapper.selected-plan`)**
- Background: `#6411ff`
- Border: 2px solid `#6411ff`
- Text: `#ffffff`
- Radius: `12px`
- Use: chosen pricing plan in tab-driven selector.

### Badge

**Cart quantity (`.cart-quantity`)**
- Background: `#ff0062`
- Text: `#ffffff`
- Shape: circular (`border-radius: 100%`)
- Font: 12–13px / 700
- Use: count indicator overlay.

### Input

**Default**
- Background: `#ffffff`
- Text: `#1b1b1b`
- Border: 1px solid `#e6e6e6`
- Radius: `5px` (small input) or `8px` (form input)
- Padding: `10px 20px` or larger per row size
- Focus: border colour to `#1b1b1b` (no glow ring observed)

### Footer link (`.link-footer`)

- Color: `#a5a5a5` default
- Hover: `#ffffff`
- Font: 14px / 400 / Inter (Latin) or ChaiGothic (Korean)
- Use: footer policy / contact links.

### Elevation tokens (full set)

- `none` — default (6 declarations)
- `inset 1px 1px 0 0 #464646, 1px 1px 0 0 #464646` — offset-border combo (2 declarations)
- `inset 1px 1px 0 0 #fff` — inset highlight on white card
- `inset 0 -4px 0 0 #6411ff` — active-tab underline (signature)
- `inset 0 -1px 0 0 #1b1b1b` — 1px ink baseline underline
- `0 1px 1px 0 rgba(0,0,0,0.15)` — only blurred drop-shadow in the system

## 5. Layout & Spacing

- **Section padding**: `5em 2.5em` (em-based, scales with body font for hero feel)
- **Card padding canonical**: `35px`
- **Card padding xl** (hero card): `90px 35px 45px` (taller top)
- **Button padding**: `18px 40px` canonical, `18px 35px` nav, `10px 20px` pill
- **Section transitions**: 2.5em side gutters, no grid system (Webflow flexbox + classes)
- **Engine**: Webflow `61de89512bb7331baad32382` — class-driven, no `:root` custom properties

## 6. Radius

| Token | Value | Use |
|---|---|---|
| `radius.none` | `0px` | Default — most surfaces |
| `radius.xs` | `4px` | Buttons canonical (9 declarations) |
| `radius.sm` | `5px` | Inputs (6 declarations) |
| `radius.md` | `8px` | Form fields, panels (3) |
| `radius.lg` | `12px` | Cards (5 declarations) |
| `radius.xl` | `20px` | Image masks, hero shapes (4) |
| `radius.pill` | `100px` | Pill button, pill chip (2) |
| `radius.circle` | `100%` | Cart quantity badge |

**Rule**: zero is the silent baseline. Radius is added per component class, never globally.

## 7. Motion

- **Transition canonical**: `color 200ms ease` (only observed shipped transition)
- **Easing**: `ease` (native CSS) — no `cubic-bezier` custom curves
- **Hover flip**: pink → purple (`#ff0062` → `#6411ff`) is the system's load-bearing motion event
- **No transform / scale / blur tokens** observed in the production CSS

## 8. States

- **Default**: as shipped per component
- **Hover (primary CTA)**: background `#ff0062` → `#6411ff` with 200ms colour transition
- **Active (tab)**: background `#6411ff` + inset `0 -4px 0 0 #6411ff` underline (no layout shift)
- **Selected (plan card)**: background flips to `#6411ff`, border 2px solid `#6411ff`
- **Disabled**: not formally tokenized — observed faded variants use `#a5a5a5` or 0.54 alpha text
- **Focus ring**: not present in shipped CSS — porting Chai-style components MUST add WCAG 2.4.7 focus-visible rings (use `outline: 2px solid #6411ff; outline-offset: 2px`)
- **Error**: marketing-only `#ff2121` text colour exists; no formal field-error variant in bundle
- **Empty / Loading / Skeleton**: not present (marketing site — no async surfaces)

> Porting note: Chai's shipped a11y model is incomplete (no focus-visible, no skeleton, no field-error). A production port MUST add these — do not adopt the gap.

## 9. A11y Notes (called out, not fixed)

- `#ff0062` on `#ffffff` body text: ~3.9:1 — **fails WCAG AA for body**, passes for ≥18pt or ≥14pt bold (where it's actually used). Do not down-port to small inline text.
- `#a5a5a5` footer ink on `#ffffff`: ~2.9:1 — explicitly muted-footer-only, never primary.
- No focus-visible rings in shipped CSS — every interactive surface needs one added on port.
- No landmark `<main> / <nav> / <footer>` audit performed on the live `/about.html` (DOM is light).
- Custom typeface `ChaiGothic` requires fallback chain — porting without Pretendard fallback will mojibake Korean.

## 10. Voice & Tone

**Voice adjectives (3)**: Punning, bold, declarative.

The 2021 hero corpus shows Chai's verbal pattern: noun-as-punch-line based on the syllable 차이 (= "difference"). Sentences are short, end-stopped, and rhyme on the wordmark. Verbs lead, hedges absent.

| Do | Don't |
|---|---|
| Compress to ≤ 8 syllables per line | Run multi-clause marketing prose |
| Drive each line to the wordmark | Bury the brand mid-sentence |
| Use 다 / 차이다 sentence-final pattern | Use deferential 합니다 / 됩니다 endings |
| Numbers as nouns ("1년 365일") | Numbers as adjectives ("매일매일의") |

**Voice samples** (OmD-original — not verbatim Chai copy):
1. "*매일 받아서 차이다*" (frame: simple verbal noun + 차이다 close)
2. "*기다림 없이, 결제 끝*" (frame: comma-cut bicolon, ends on stop)
3. "*할인은 한 번이 아니다*" (frame: declarative negation, no hedge)

> Verification: the verbal pattern is reconstructed from headlines visible at `web.archive.org/web/20210707/chai.finance` ("할인 금액이 남달라서 차이다", "단순하니까 차이다") — quoted here as factual reference, not adopted as design copy.

## 11. Brand Narrative

Chai was the consumer payments product of **Chai Corporation** (originally **Geokoo E-Payment**, founded **2018-09-13** in Seoul). The product promised "차이나는 간편결제" — "a simple payment that's different" — with the differentiator being a daily, transaction-by-transaction discount layered onto a charge-then-pay (prepaid-balance) flow. The PG (Payment Gateway) lineage came from the company's acquisition of **Iamport**, an electronic-payment infrastructure service built by developer **Jang Ji-yoon** over a 12-year career.

The consumer Chai app and check card were terminated in subsequent years; the corporate entity was rebranded **PortOne Solutions** in 2024 and pivoted toward B2B payment infrastructure (the Iamport lineage). The Webflow marketing site at `chai.finance` was preserved as a service-termination notice: ten H3 announcement cards walking users through app-shutdown, Firmbanking account closure, personal-information deletion, and prepaid-balance refund. This DESIGN.md is therefore a **archaeological reference** — the tokens are the company's 2022 final design vocabulary, captured before the product wound down.

> Sources: `thevc.kr/Chai` (corporate registry — founding date, name history, CEO Jung Young-joo); production `chai.finance/about.html` (current termination notice copy); Webflow `data-wf-site=61de89512bb7331baad32382` (last published 2022-05-13).

## 12. Design Principles

1. **One ink, one pink.** The brand is `#1b1b1b` and `#ff0062`. Everything else is a supporting role. *UI implication:* never introduce a third primary hue at component-author time — request a token addition instead.
2. **Hover is the brand.** The pink→purple flip is the load-bearing motion. *UI implication:* preserve `:hover` state on every primary CTA port — do not flatten it to "stay pink."
3. **Bold leads.** 700-weight ChaiGothic is the default for anything user-actionable. *UI implication:* 400 is for read-only body, 500+ for any interactive label.
4. **Border, not shadow.** Depth is offset-border + inset combos, not Gaussian blur. *UI implication:* avoid Material-style elevation; prefer 1px hairlines and inset shadows.
5. **Word-puns load-bearing.** Every headline pivots on 차이. *UI implication:* microcopy authors should not translate this to English literally — find an equivalent wordplay or drop the device.

## 13. Personas (illustrative — public surveys only)

> Inferred from the 2019–2022 Chai product surface and PG-출신 simple-payment market. Not from verified user research.

- **The 20s consumer who chases small wins** — uses Chai for the per-transaction discount; checks the app after every purchase to see the discount tally. Lives in Naver / KakaoTalk; treats Chai as the "savings layer" on top of normal checkout.
- **The merchant ops manager** — runs a Cafe24 / Shopify / NHN Godo store, plugs Chai in for low-PG-fee processing. Doesn't care about the discount UX, cares about the settlement cycle.
- **The Iamport developer (post-rebrand)** — integrates 8+ Korean PGs through one SDK; arrives via the PortOne Solutions docs but pattern-matches the visual identity to the old Chai brand.

## 14. States (full enumeration)

| Category | Token / Pattern | Notes |
|---|---|---|
| Empty | not tokenized | Add `#a5a5a5` Inter 14/400 hint text for ports |
| Loading | not tokenized | Add — Chai's shipped CSS has no skeleton/spinner |
| Error (field) | not tokenized | Use `#ff2121` border + helper text — distinct from brand `#ff0062` |
| Error (page) | inferred — would use `semantic.alert_red` `#ff2121` | |
| Success | inferred — purple `#6411ff` (no green observed in 182KB bundle) | |
| Skeleton | not tokenized | Add for ports |
| Disabled | observed faded — `#a5a5a5` or 0.54 alpha text | |
| Hover | `#ff0062` → `#6411ff` 200ms colour | Brand-defining |
| Active (tab) | `#6411ff` + inset `0 -4px 0 0 #6411ff` underline | |
| Selected (card) | `#6411ff` bg + 2px solid `#6411ff` border | |
| Focus-visible | **not present** — MUST add for ports | `outline: 2px solid #6411ff; outline-offset: 2px` recommended |

## 15. Motion & Easing

| Token | Value | Use |
|---|---|---|
| `motion.duration.base` | `200ms` | Sole observed timing |
| `motion.easing.standard` | `ease` (native CSS) | No custom cubic-bezier in shipped CSS |
| `motion.hover.cta` | `color 200ms ease` | The brand's load-bearing transition |

**Motion rules**:
- Only colour transitions are tokenized — no transform / scale / blur in shipped CSS.
- No staggered enter / exit animations observed.
- For ports adding motion, stay within 200ms and `ease` to remain on-brand.

---

**Verified:** 2026-05-15
**Tier 1 sources:**
- Live DOM (CDP :9222): `https://chai.finance/` → `https://chai.finance/about.html` (current shipped state)
- Production CSS bundle (curl frequency analysis): `https://chai.finance/css/chai-finance.webflow.css` (182,207 bytes, last published 2022-05-13)
- Historical marketing surface (factual reference only): `web.archive.org/web/20210707171036/https://chai.finance/`
- Corporate registry: `thevc.kr/Chai` (founding, name history, CEO)
- Negative-result probes: `design.chai.finance` (404), GitHub org `chai-finance` / `chaicorporation` (no DS / Storybook / tokens repo)

**Tier 2 sources:**
- `getdesign.md/chai` — "No designs found" (verified 2026-05-15)
- `styles.refero.design/?q=chai` — no result cards (verified 2026-05-15)

**Conflicts unresolved:** none — Tier 1 is the only signal; Tier 2 indexes both empty (consistent with KR systemic coverage gap logged in `2026-05-13-kr10.md` / `2026-05-14-kr10.md`).

**IP guardrails:**
- Brand assets (logo, ChaiGothic, name) reference-only — not redistributed.
- Headline corpus from 2021 wayback snapshot quoted as factual linguistic pattern, not adopted as design copy.
- §10 voice samples are OmD-original reconstructions in the 차이다 verbal pattern — no verbatim Chai marketing copy reproduced.
- Token values reproduced as factual CSS-property values under analytical fair-use.

**Flags:**
1. **Service-terminated brand.** Chai consumer app no longer operates; corporate rebrand to PortOne Solutions (2024). Reference is archaeological — for studying KR fintech 2019–2022 visual maximalism, not for live-product benchmarking.
2. **No public DS** — Tier 1 official documented negative. Production CSS bundle is the closest authoritative token source.
3. **A11y debt** in shipped CSS: no focus-visible, no skeleton/loading, no field-error variant, no formal disabled. Ports MUST add these.
4. **Custom typeface dependency.** ChaiGothic is proprietary — ports require fallback to Pretendard or substitution.
5. **Hover-locked brand**: the pink→purple flip is brand-defining motion. Flattening it on port (e.g., "stay pink" for accessibility) loses the brand.
