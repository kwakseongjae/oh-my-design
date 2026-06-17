---
id: cybozu
name: Cybozu
country: JP
category: saas
homepage: "https://cybozu.co.jp/"
primary_color: "#139cb7"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=cybozu.co.jp&sz=128"
verified: "2026-06-17"
added: "2026-06-17"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-17"
  note: "Two brand-owned surfaces. Corporate identity (cybozu.co.jp) = teal accent #139cb7 on #333333 ink — the canonical company color (primary). Design-led flagship product kintone (kintone.cybozu.co.jp) = yellow #ffbf00 on warm-brown ink #231200 — documented as a distinct product system (Stripe-style split), not a conflict."
  colors:
    primary: "#139cb7"
    primary-light: "#64bdd4"
    ink: "#333333"
    ink-pure: "#000000"
    muted: "#aaaaaa"
    muted-slate: "#838d94"
    slate-dark: "#31424e"
    slate-darker: "#465560"
    canvas: "#ffffff"
    surface: "#f6f6f6"
    hairline: "#e6e6e6"
    on-primary: "#ffffff"
    kintone-yellow: "#ffbf00"
    kintone-amber: "#ffdb4f"
    kintone-amber-deep: "#ff8f00"
    kintone-ink: "#231200"
    kintone-surface: "#f3f3f3"
    kintone-tint: "#fff5e1"
    kintone-card-border: "#d6d5d5"
    kintone-dark: "#333333"
  typography:
    family: { corporate: "Hiragino Kaku Gothic Pro", product: "Roboto / Noto Sans JP", fallback: "Meiryo" }
    corp-body:    { size: 16, weight: 400, lineHeight: 2.0, use: "Corporate body text, Hiragino, 32px line-height" }
    corp-nav:     { size: 14, weight: 700, use: "Corporate nav links, bold Hiragino" }
    corp-en-label: { size: 16, weight: 400, use: "English section labels in muted grey #aaaaaa" }
    kintone-h2:   { size: 52, weight: 700, lineHeight: 1.45, tracking: 2.6, use: "kintone section heads, Roboto + Noto Sans JP, positive tracking" }
    kintone-h2-alt: { size: 48, weight: 700, lineHeight: 1.40, tracking: 0.96, use: "kintone secondary heads" }
    kintone-body: { size: 16, weight: 400, lineHeight: 1.69, use: "kintone body text, 27px line-height" }
    chip:         { size: 12, weight: 700, use: "kintone yellow badge chips" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 20, xl: 24, xxl: 32, section: 62 }
  rounded: { sm: 4, md: 8, lg: 10, full: 9999 }
  shadow:
    soft: "rgba(0,0,0,0.1) 0px 0px 6px 0px"
    pickup: "rgba(0,0,0,0.17) 0px 1px 10px 0px"
    none: "none"
  components:
    corp-nav-link: { type: tab, fg: "#333333", font: "14px / 700 Hiragino", active: "teal #139cb7 text on hover/active", use: "Corporate top-nav item" }
    corp-text-link: { type: button, fg: "#139cb7", font: "16px / 400 Hiragino", use: "Corporate inline / list text link — the single teal action color" }
    corp-icon-button: { type: button, bg: "#ffffff", fg: "#139cb7", radius: "9999px", shadow: "rgba(0,0,0,0.1) 0 0 6px", use: "Circular icon button, soft shadow, 40px" }
    corp-card: { type: card, bg: "#ffffff", border: "1px solid #e6e6e6", use: "Corporate content card, hairline-separated on #f6f6f6 surface" }
    kintone-cta-dark: { type: button, bg: "#333333", fg: "#ffffff", radius: "8px", padding: "5px 5px 5px 20px", height: "64px", font: "16px / 400 Roboto", use: "kintone primary CTA (30日間無料お試し) — dark fill with yellow accent" }
    kintone-outline-button: { type: button, bg: "#ffffff", fg: "#231200", border: "1px solid #d6d5d5", radius: "8px", padding: "5px 5px 5px 20px", height: "66px", use: "kintone secondary outlined button" }
    kintone-card: { type: card, bg: "#ffffff", fg: "#231200", border: "1px solid #d6d5d5", radius: "10px", padding: "24px", use: "kintone feature card, flat (no shadow)" }
    kintone-badge: { type: badge, bg: "#ffbf00", fg: "#231200", radius: "8px", padding: "5px 8px 10px", font: "12px / 700", use: "kintone yellow tab/banner chip (さわってみよう！, 30日間無料！)" }
  components_harvested: true
---

# Design System Inspiration of Cybozu

## 1. Visual Theme & Atmosphere

Cybozu (サイボウズ) is Japan's leading teamwork-software maker — the company behind kintone, Garoon, and Cybozu Office — and its design language splits cleanly into two brand-owned worlds that share one philosophy: clarity in service of teamwork. The corporate face at cybozu.co.jp is calm, editorial, and almost civic in tone: a pure white (`#ffffff`) canvas, dark grey body ink (`#333333`) set in the classic Japanese Hiragino Kaku Gothic Pro stack at a generous 16px / 32px line-height, and a single confident teal accent (`#139cb7`) that does almost all of the interactive work. On the homepage that teal appears 446 times as the link and call-to-action color, training the eye to read teal as "the next step." Light teal (`#64bdd4`) appears as a softer fill and border companion, and a muted grey (`#aaaaaa`) carries the bilingual English section labels ("News", "Products", "Seminar・Event") that sit quietly above each Japanese block.

The flagship product, kintone (kintone.cybozu.co.jp), runs a deliberately different, design-led identity — Cybozu's open product-design org (the kintone Design System, the `kintone-ui-component` library, and the long-running Cybozu Product Design Magazine) lives here. kintone's signature is a warm, friendly amber-yellow (`#ffbf00`) paired with a soft brown-black ink (`#231200`) instead of pure black, set in a Roboto + Noto Sans JP stack. Its section headlines run large and bold (52px / weight 700) with an unusual *positive* letter-spacing (`+2.6px`) — a deliberate airy, approachable cadence that says "anyone can build this," very different from the tight tracking of Western SaaS. Yellow badge chips (`#ffbf00`) and amber decorative circles (`#ffdb4f`) punctuate the page with optimism.

What unites both worlds is restraint with depth and a hairline-first separation strategy. The corporate site uses only the softest circular-button shadows (`rgba(0,0,0,0.1) 0px 0px 6px 0px`); kintone is essentially flat — feature cards are white with a thin `#d6d5d5` border at 8–10px radius and `box-shadow: none`. Sections separate by tint (`#f6f6f6` corporate, `#f3f3f3` / `#fff5e1` kintone) and `#e6e6e6` hairlines rather than elevation. The result is a system that reads as trustworthy and unintimidating — Japanese B2B software that takes accessibility and teamwork seriously enough to feel human.

**Key Characteristics:**
- Corporate teal (`#139cb7`) as the single canonical accent — links, CTAs, the "action" color
- Hiragino Kaku Gothic Pro stack on the corporate site; Roboto + Noto Sans JP on kintone — real Japanese CJK font stacks captured live
- Dark grey body ink (`#333333`) corporate / warm brown-black ink (`#231200`) on kintone — never harsh pure black for reading
- kintone's friendly amber-yellow (`#ffbf00`) brand with amber-light (`#ffdb4f`) and deep amber (`#ff8f00`) accents
- Positive letter-spacing on kintone headlines (`+2.6px` at 52px) — an approachable, airy cadence
- Flat, hairline-separated cards (`1px solid #d6d5d5`, 8–10px radius, no shadow) on the product surface
- Bilingual JP/EN section labels with muted-grey (`#aaaaaa`) English headers over Japanese content
- Soft circular icon buttons with a faint `rgba(0,0,0,0.1)` shadow as the corporate site's only elevation

## 2. Color Palette & Roles

### Primary (Corporate Cybozu)
- **Cybozu Teal** (`#139cb7`): The canonical company accent and `primary_color`. Link color, text-link CTAs, circular-icon-button glyphs — the single saturated "action" color across cybozu.co.jp (446 occurrences live).
- **Teal Light** (`#64bdd4`): Softer companion teal used for fills, accent borders, and decorative blocks.
- **Ink Grey** (`#333333`): Primary body and heading text on the corporate site. A dark neutral grey, never pure black for reading.
- **Pure White** (`#ffffff`): Page background, card surfaces, text on teal/dark.

### Neutral & Surface (Corporate)
- **Surface Grey** (`#f6f6f6`): Tinted section background for alternating content bands.
- **Hairline** (`#e6e6e6`): Thin borders, dividers, and card outlines — the primary separation device.
- **Muted Grey** (`#aaaaaa`): Bilingual English section labels ("News", "Products"), low-emphasis captions.
- **Muted Slate** (`#838d94`): Tertiary text and fine print.
- **Slate Dark** (`#31424e`): Dark accent blocks and footer-adjacent panels.
- **Slate Darker** (`#465560`): Darkest neutral for accent borders and dark surfaces.
- **Pure Black** (`#000000`): Occasional maximum-contrast text.

### Product Identity (kintone)
- **kintone Yellow** (`#ffbf00`): kintone's flagship brand color — yellow badge chips, banners, decorative circles, the optimistic product signature.
- **kintone Amber** (`#ffdb4f`): Lighter amber for decorative circles and soft highlights.
- **kintone Amber Deep** (`#ff8f00`): Deeper amber accent for emphasis moments.
- **kintone Ink** (`#231200`): Warm brown-black — kintone's body and heading text instead of pure black, giving the product a friendly warmth.
- **kintone Surface** (`#f3f3f3`): Neutral grey product section background.
- **kintone Tint** (`#fff5e1`): Pale warm-cream tint band — the amber brand softened to a surface.
- **kintone Card Border** (`#d6d5d5`): Hairline border for kintone's flat outlined cards and buttons.
- **kintone Dark** (`#333333`): Dark fill for kintone's primary CTA buttons (yellow/white label sits on this dark surface).

## 3. Typography Rules

### Font Family
- **Corporate**: `Hiragino Kaku Gothic Pro` (`"ヒラギノ角ゴ Pro W3"`, `"Hiragino Kaku Gothic Pro"`) with `Meiryo` / `メイリオ` / `"ＭＳ Ｐゴシック"` fallbacks — the classic Japanese corporate gothic stack, used across cybozu.co.jp.
- **Product (kintone)**: `Roboto`, `"Noto Sans JP"`, `"Helvetica Neue"`, `Arial`, `"Hiragino Kaku Gothic ProN"`, `"Hiragino Sans"`, `Meiryo` — a Latin-first/CJK-paired stack used across kintone.cybozu.co.jp.

### Hierarchy

| Surface | Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|---------|------|------|------|--------|-------------|----------------|-------|
| Corporate | Body | Hiragino | 16px | 400 | 32px (2.0) | normal | Generous reading rhythm |
| Corporate | Nav link | Hiragino | 14px | 700 | — | normal | Bold top-nav items |
| Corporate | EN section label | Hiragino | 16px | 400 | 32px | normal | Muted grey `#aaaaaa` |
| kintone | Section heading | Roboto + Noto Sans JP | 52px | 700 | 75.4px (1.45) | +2.6px | Positive tracking, airy |
| kintone | Secondary heading | Roboto + Noto Sans JP | 48px | 700 | 67.2px (1.40) | +0.96px | Approachable cadence |
| kintone | Body | Roboto + Noto Sans JP | 16px | 400 | 27px (1.69) | normal | Standard reading text |
| kintone | Badge chip | Roboto + Noto Sans JP | 12px | 700 | — | normal | Yellow chip label |

### Principles
- **Two stacks, two jobs**: Hiragino Kaku Gothic Pro is the corporate/institutional voice; Roboto + Noto Sans JP is the product/approachable voice. They never swap surfaces.
- **Positive tracking as friendliness**: kintone's headlines use *positive* letter-spacing (`+2.6px` at 52px) — the opposite of tight Western SaaS tracking — to feel open and unintimidating.
- **Bold where it labels, regular where it reads**: corporate nav is weight 700, body is weight 400; kintone heads are 700, body is 400. Weight, not color, carries most hierarchy.
- **Warm ink over black**: corporate uses `#333333`, kintone uses `#231200` — never pure black for sustained reading.

## 4. Component Stylings

### Buttons

**Corporate Text Link (Primary action)**
- Text: `#139cb7`
- Font: 16px Hiragino weight 400
- Use: Corporate inline / list text link ("ニュース 一覧", news items) — the single teal action color

**Corporate Circular Icon Button**
- Background: `#ffffff`
- Text: `#139cb7`
- Radius: 9999px (50%)
- Height: 40px
- Shadow: `rgba(0,0,0,0.1) 0px 0px 6px 0px`
- Use: Circular icon/navigation buttons on the corporate hero

**kintone Primary CTA (Dark)**
- Background: `#333333`
- Text: `#ffffff`
- Radius: 8px
- Padding: 5px 5px 5px 20px
- Height: 64px
- Font: 16px Roboto weight 400
- Use: kintone primary call-to-action ("30日間無料お試し", "アプリ作成体験") — dark fill carrying a yellow/white accent

**kintone Secondary (Outlined)**
- Background: `#ffffff`
- Text: `#231200`
- Border: 1px solid `#d6d5d5`
- Radius: 8px
- Padding: 5px 5px 5px 20px
- Height: 66px
- Font: 16px Roboto weight 400
- Use: kintone secondary buttons ("セミナー", "kintoneを知る")

**kintone Compact Outlined**
- Background: `#ffffff`
- Text: `#231200`
- Border: 1px solid `#d6d5d5`
- Radius: 4px
- Padding: 2px 2px 2px 12px
- Height: 42px
- Use: kintone compact link buttons ("動画をみる", "資料をみる")

### Cards & Containers

**Corporate Content Card**
- Background: `#ffffff`
- Border: 1px solid `#e6e6e6`
- Use: Corporate content card, hairline-separated on the `#f6f6f6` surface

**kintone Feature Card**
- Background: `#ffffff`
- Text: `#231200`
- Border: 1px solid `#d6d5d5`
- Radius: 10px
- Padding: 24px
- Use: kintone feature/use-case card — flat, no shadow ("顧客・案件管理", "脱エクセル")

### Badges

**kintone Yellow Chip**
- Background: `#ffbf00`
- Text: `#231200`
- Radius: 8px
- Padding: 5px 8px 10px
- Font: 12px weight 700
- Use: kintone tab/banner badge chips ("さわってみよう！", "30日間無料！", "個人情報不要！")

### Navigation
- Background: `#ffffff`
- Text: `#333333`
- Font: 14px Hiragino weight 700
- Height: 56px header
- Padding: 18px 0px per item
- Active/Hover: teal `#139cb7` text
- Use: Corporate top horizontal nav ("製品情報", "ニュース", "セミナー・イベント", "企業・IR")

### Inputs
- Background: `#ffffff`
- Border: 1px solid `#d6d5d5`
- Radius: 8px
- Text: `#231200`
- Use: kintone form fields (search, trial signup) — flat outlined input

---

**Verified:** 2026-06-17 (omd:add-reference CREATE — Tier 1 live inspect, two brand-owned surfaces)
**Tier 1 sources:** https://cybozu.co.jp/ (corporate, teal identity, live DOM) ; https://kintone.cybozu.co.jp/ (kintone product, yellow identity, second surface, live DOM) ; https://ui-component.kintone.dev/ (kintone UI Component docs) ; https://github.com/kintone-labs/kintone-ui-component (open component library)
**Tier 2 sources:** getdesign.md/cybozu — not listed (JP B2B under-covered) ; styles.refero.design/?q=cybozu — no canonical style page surfaced
**Conflicts unresolved:** none — corporate teal `#139cb7` vs kintone yellow `#ffbf00` documented as an intentional two-system split (corporate identity vs design-led product), not a conflict

## 5. Layout Principles

### Spacing System
- Base unit: 4px / 8px
- Scale: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 62px
- Notable: kintone feature cards use a generous 24px internal padding; corporate sections breathe with ~62px top padding on each block

### Grid & Container
- Corporate: centered single-column news/products portal with bilingual section labels; content bands alternate white and `#f6f6f6`
- kintone: large bold section headings anchor each band; feature/use-case cards arranged in multi-column grids (顧客・案件管理, 脱エクセル, ワークフロー, etc.)
- Cards use 8–10px radius and group related services/use-cases

### Whitespace Philosophy
- **Editorial calm**: the corporate site reads like a civic publication — generous vertical rhythm, quiet bilingual labels, never a hard sell
- **Flat segmentation**: sections separate by tint (`#f6f6f6`, `#f3f3f3`, `#fff5e1`) and `#e6e6e6` / `#d6d5d5` hairlines, not by elevation
- **Approachable density**: kintone's airy headlines + positive tracking keep an information-rich B2B product feeling welcoming

### Border Radius Scale
- Small (4px): compact kintone link buttons
- Medium (8px): kintone cards, primary/secondary buttons, yellow chips
- Large (10px): kintone feature cards — the workhorse
- Full (9999px / 50%): corporate circular icon buttons

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | kintone cards/buttons, corporate body, most surfaces |
| Tint (Level 1) | `#f6f6f6` / `#f3f3f3` / `#fff5e1` background shift | Section separation without elevation |
| Hairline (Level 2) | `1px solid #e6e6e6` (corp) / `1px solid #d6d5d5` (kintone) | Card outlines, dividers |
| Soft (Level 3) | `rgba(0,0,0,0.1) 0px 0px 6px 0px` | Corporate circular icon buttons only |
| Pickup (Level 3b) | `rgba(0,0,0,0.17) 0px 1px 10px 0px` | Featured circular "PickUp" button |

**Shadow Philosophy**: Cybozu is a near-flat system. Live inspection found `box-shadow: none` across kintone's hero, feature cards, and outlined buttons; the corporate site uses elevation only on small circular icon buttons (`rgba(0,0,0,0.1) 0px 0px 6px 0px`) and one featured "PickUp" button (`rgba(0,0,0,0.17) 0px 1px 10px 0px`). Depth and grouping come from flat tinted surfaces and thin hairlines (`#e6e6e6`, `#d6d5d5`). When emphasis is needed, the system reaches for color — corporate teal (`#139cb7`) or kintone yellow (`#ffbf00`) — never a heavy card stack. This keeps Japanese B2B software feeling clean, fast, and approachable rather than institutionally heavy.

## 7. Do's and Don'ts

### Do
- Use corporate teal (`#139cb7`) as the single action color on Cybozu-corporate surfaces — keep it the link/CTA signal
- Use the Hiragino Kaku Gothic Pro stack for corporate surfaces and Roboto + Noto Sans JP for kintone
- Use kintone yellow (`#ffbf00`) for the product's brand chips, banners, and decorative accents
- Use warm ink (`#333333` corporate, `#231200` kintone) instead of pure black for reading text
- Separate sections with flat tints (`#f6f6f6`, `#f3f3f3`, `#fff5e1`) and `#e6e6e6` / `#d6d5d5` hairlines, not shadows
- Keep kintone cards flat with a 10px radius and a thin `#d6d5d5` border
- Use positive letter-spacing on kintone headlines (`+2.6px` at 52px) for an approachable cadence
- Pair English section labels in muted grey (`#aaaaaa`) above Japanese content on corporate pages

### Don't
- Mix the corporate teal and the kintone yellow on the same surface — they are two distinct brand identities
- Use heavy drop shadows for elevation — Cybozu is near-flat; reserve the soft `rgba(0,0,0,0.1)` shadow for circular icon buttons
- Use pure black (`#000000`) for body text — use `#333333` (corporate) or `#231200` (kintone)
- Use tight negative tracking on kintone headlines — kintone tracks *positive* for friendliness
- Set corporate nav links in a light weight — corporate nav is weight 700
- Spread teal across many corporate elements — it dilutes the single-action signal
- Use Hiragino on kintone or Roboto/Noto on the corporate site — the two stacks stay on their own surfaces

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, headings compress, feature cards stack |
| Tablet | 640-1024px | 2-column feature grids, moderate padding |
| Desktop | 1024-1440px | Full layout, multi-column kintone use-case grids, centered corporate portal |

### Touch Targets
- kintone primary CTA at 64px height — an unmistakable target
- kintone secondary outlined buttons at 66px height with generous left padding
- Corporate nav items within the 56px header; circular icon buttons at 40px

### Collapsing Strategy
- Corporate: bilingual section bands maintain full-width treatment; news/products lists stack
- kintone: 52px headlines scale down on mobile, weight 700 and positive tracking maintained
- kintone feature-card grids collapse multi-column → 2-up → single stacked
- Tinted/white alternating sections keep full-width treatment

### Image Behavior
- kintone product screenshots and illustrations carry no shadow at any size, consistent with the flat system
- Cards maintain 8–10px radius across breakpoints
- Corporate circular buttons keep their soft `rgba(0,0,0,0.1)` shadow

## 9. Agent Prompt Guide

### Quick Color Reference
- Corporate primary action: Cybozu Teal (`#139cb7`)
- Corporate teal light: (`#64bdd4`)
- Corporate body text: Ink Grey (`#333333`)
- Corporate surface: (`#f6f6f6`); hairline (`#e6e6e6`)
- Corporate muted label: (`#aaaaaa`)
- Background: Pure White (`#ffffff`)
- kintone brand: Yellow (`#ffbf00`), amber (`#ffdb4f`), deep amber (`#ff8f00`)
- kintone ink: warm brown-black (`#231200`)
- kintone surface/tint: (`#f3f3f3`) / (`#fff5e1`); card border (`#d6d5d5`)

### Example Component Prompts
- "Create a Cybozu corporate section on white. Body 16px Hiragino Kaku Gothic Pro, color #333333, line-height 32px. English label 'News' in muted grey #aaaaaa above the Japanese block. Inline text links and CTAs in teal #139cb7. A circular icon button: white bg, #139cb7 glyph, 50% radius, 40px, box-shadow rgba(0,0,0,0.1) 0px 0px 6px 0px."
- "Design a kintone hero. Section heading 52px Roboto + Noto Sans JP weight 700, line-height 75.4px, letter-spacing +2.6px, color #231200. Primary CTA: #333333 background, white text, 8px radius, 5px 5px 5px 20px padding, 64px height — '30日間無料お試し'. A yellow badge chip above it: #ffbf00 background, #231200 text, 8px radius, 12px weight 700."
- "Build a kintone feature card: white background, 1px solid #d6d5d5 border, 10px radius, 24px padding, no shadow. Title in #231200. Arrange in a multi-column use-case grid."
- "Create a tinted band: #fff5e1 (kintone) or #f6f6f6 (corporate) full-width. Cards inside use white #ffffff with hairline borders (#d6d5d5 kintone / #e6e6e6 corporate)."

### Iteration Guide
1. Pick the surface first: corporate (teal #139cb7 + Hiragino + #333333) vs kintone product (yellow #ffbf00 + Roboto/Noto + #231200) — never mix them
2. Teal is the single corporate action color; don't spread it
3. kintone headlines track *positive* (+2.6px), weight 700 — approachable, not tight
4. Near-flat: separate with #f6f6f6/#f3f3f3/#fff5e1 tints and #e6e6e6/#d6d5d5 hairlines
5. Reserve soft shadow (rgba(0,0,0,0.1) 0 0 6px) for corporate circular icon buttons only
6. Warm ink everywhere — #333333 (corporate) / #231200 (kintone), never #000000 for reading
7. kintone cards: 10px radius, 1px #d6d5d5 border, no shadow

---

## 10. Voice & Tone

Cybozu's voice is **calm, civic, and teamwork-first** — a Japanese B2B software maker that frames technology as a way to build "チームワークあふれる社会" (a society overflowing with teamwork) rather than as a competitive weapon. The corporate site reads like a thoughtful public-facing publication: bilingual section labels, measured news entries, no hype. kintone shifts register toward warm and democratizing — its tagline "みんな、つくれる。" ("Everyone can build.") and chips like "さわってみよう！" ("Give it a try!") invite the non-engineer to participate, decoding "no-code / low-code" into something friendly.

| Context | Tone |
|---|---|
| Corporate headlines | Civic, mission-framed. Teamwork and social contribution over product features. |
| Corporate news / IR | Measured, factual, dated. Reads like a public record. |
| kintone product copy | Warm, democratizing. "みんな、つくれる。" — anyone can build. |
| kintone CTAs | Low-pressure, concrete. "30日間無料お試し", "さくっと体験", "個人情報不要！". |
| Badge chips | Encouraging, exclamation-friendly (kintone only). "さわってみよう！", "30日間無料！". |
| Product Design Magazine | Reflective, transparent — designers narrating their process in the open. |

**Voice samples (verbatim from live surfaces):**
- "サイボウズ株式会社" — corporate page title (institutional register). *(verified live 2026-06-17)*
- "kintone（キントーン） | みんな、つくれる。業務アプリがつくれるサイボウズのノーコード・ローコードツール" — kintone page title (democratizing promise). *(verified live 2026-06-17)*
- "30日間無料お試し" / "個人情報不要！" — kintone trial CTAs (low-pressure, concrete). *(verified live 2026-06-17)*

**Forbidden register**: aggressive sales urgency, fear-based B2B FUD, undefined enterprise jargon, anything that makes "no-code" sound exclusive or intimidating.

## 11. Brand Narrative

Cybozu (サイボウズ) was founded in **1997 in Matsuyama, Ehime** by Yoshihisa Aono and co-founders, and grew into one of Japan's most influential groupware companies — the maker of Cybozu Office, Garoon, and, since 2011, kintone. Its corporate mission, stated plainly across cybozu.co.jp, is to build "チームワークあふれる社会を創る" (to create a society overflowing with teamwork). That mission is unusually load-bearing: Cybozu is also well known in Japan for pioneering flexible work styles ("働き方改革"), and it frames its software not as productivity tooling but as social infrastructure for collaboration.

kintone is where Cybozu's design-led culture is most visible. The product reframes business-application building — historically the domain of engineers and consultants — as something "みんな、つくれる" (everyone can build). Around it sits an open product-design organization: the kintone Design System (Figma + the `kintone-ui-component` npm library + Storybook docs at ui-component.kintone.dev), and the long-running Cybozu Product Design Magazine on note.com/cybozu_design, where designers publish their process, organization changes, and research in the open.

What Cybozu's design refuses, visible on the surface: the heavy, intimidating chrome of legacy enterprise software (no shadow-stacked dashboards, no corporate navy-and-grey severity) and the hard-sell urgency of Western SaaS marketing. What it embraces: a calm civic corporate voice in teal (`#139cb7`), a warm and democratizing product voice in yellow (`#ffbf00`), bilingual accessibility, flat hairline-separated layouts, and a transparent, published design practice.

## 12. Principles

1. **Teamwork is the product.** Cybozu's stated mission is a society overflowing with teamwork; software is the means. *UI implication:* favor clarity and collaboration cues over feature density; the interface should never feel like a competition.
2. **Everyone can build.** kintone's "みんな、つくれる" democratizes app-building beyond engineers. *UI implication:* decode jargon into friendly tools; positive headline tracking and warm yellow make the product feel inviting, not technical.
3. **Two voices, one philosophy.** A civic corporate teal and a warm product yellow are kept distinct. *UI implication:* never mix the teal and yellow systems on one surface — each carries its own register.
4. **Flat and human.** Near-shadowless, hairline-separated layouts keep B2B software approachable. *UI implication:* separate with tint and hairlines; reserve shadow for the smallest interactive accents.
5. **Design in the open.** The kintone Design System and Product Design Magazine make the practice transparent. *UI implication:* components are documented, reusable, and consistent — the system is a shared, published artifact, not tribal knowledge.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Cybozu / kintone user segments (Japanese SMB operations staff, non-engineer "citizen developers", enterprise IT, and Cybozu's own product designers), not individual people.*

**田中美咲, 38, 松山.** Operations lead at a regional manufacturer. Not an engineer, but builds her own 案件管理 (case-management) apps in kintone because "みんな、つくれる" turned out to be literally true. Values that the cards and forms feel friendly rather than technical.

**佐藤健, 45, 東京.** Corporate IT manager evaluating Garoon and kintone for a 300-person company. Reads cybozu.co.jp's calm, factual IR and news pages and trusts the civic, non-hype tone. Cares that the design feels stable and accessible, not flashy.

**鈴木あみ, 29, 大阪.** A product designer at Cybozu contributing to the kintone Design System and writing for the Product Design Magazine. Believes design should be published and shared; cares about the `kintone-ui-component` library staying consistent across the product.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no apps / no records yet)** | White canvas. Single warm-ink line (`#231200` kintone / `#333333` corporate) explaining nothing exists yet, with one friendly CTA to create or try. No intimidating illustration clutter. |
| **Empty (search no results)** | Muted grey (`#aaaaaa`) single line: nothing matched, plus a path to adjust criteria. Calm and honest. |
| **Loading (records/cards fetch)** | Skeleton cards on the tinted surface (`#f3f3f3` / `#f6f6f6`) at final 10px-radius dimensions. Flat pulse — no shadow shimmer, consistent with the near-flat system. |
| **Loading (in-place refresh)** | Subtle progress within the affected area; previous content stays visible. Never block the page. |
| **Error (action failed)** | Inline message in warm ink with a plain-language explanation and a retry. No generic "エラーが発生しました" alone — states what to do next. |
| **Error (form validation)** | Field-level message below the input (1px `#d6d5d5` outlined field); describes what's valid, not just "必須". |
| **Success (saved / submitted)** | Brief inline confirmation in a calm tone; next-step detail linked immediately below. kintone may use a yellow (`#ffbf00`) accent chip; no celebratory excess. |
| **Skeleton** | Tinted blocks (`#f3f3f3`) at final dimensions, 10px radius, flat pulse. |
| **Disabled** | Reduced-opacity surface with muted grey (`#aaaaaa`) text; teal/yellow actions fade rather than turn grey to preserve brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, link/button press, focus |
| `motion-standard` | 200ms | Card/section reveal, dropdown, sheet |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, dropdowns, sheets |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and quiet — consistent with the calm, flat aesthetic. Corporate teal links and kintone buttons respond to press with a subtle color/opacity shift; cards fade-in from below at `motion-standard / ease-enter`. No bounce or spring — Japanese B2B teamwork software signals steadiness and trust, not playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-17) via playwright getComputedStyle on two brand-owned surfaces:
- https://cybozu.co.jp/ — corporate: teal #139cb7 accent (446× link color), #333333 ink,
  Hiragino Kaku Gothic Pro stack, bilingual EN labels in #aaaaaa, circular icon buttons
  with rgba(0,0,0,0.1) 0 0 6px shadow, #e6e6e6 hairlines, #f6f6f6 surface.
- https://kintone.cybozu.co.jp/ — kintone product: yellow #ffbf00 / amber #ffdb4f / deep
  amber #ff8f00, warm ink #231200, Roboto + Noto Sans JP, H2 52px/700 letter-spacing +2.6px,
  dark #333333 CTA at 8px radius, flat #d6d5d5 outlined cards at 10px radius, box-shadow none.
- https://ui-component.kintone.dev/ + https://github.com/kintone-labs/kintone-ui-component —
  confirm the open kintone UI Component library (`kintone-ui-component`, MIT, v1.25.0). The
  docs-site chrome is generic Docusaurus and is NOT cited for tokens.

Token-level claims (§1-9) are sourced from this live inspection. Full raw computed-style
samples are recorded in web/references/cybozu/.verification.md (Proof block).

Voice samples (§10) are verbatim page titles / CTA labels from the live surfaces.

Brand narrative (§11): Cybozu founded 1997 in Matsuyama, Ehime (Yoshihisa Aono); mission
"チームワークあふれる社会を創る"; kintone since 2011; open product-design org (kintone Design
System, kintone-ui-component, Cybozu Product Design Magazine on note.com/cybozu_design).
Founding-year/location and mission phrasing are widely documented public facts about the
company; the mission and product taglines ("みんな、つくれる") are confirmed on the live surfaces.

Personas (§13) are fictional archetypes informed by publicly observable Cybozu/kintone user
segments (Japanese SMB operations staff, non-engineer citizen developers, enterprise IT,
Cybozu's own product designers). Names are illustrative; they do not refer to real people.

Interpretive claims (e.g., "two voices, one philosophy", "flat and human as a rejection of
legacy enterprise chrome", "positive tracking as friendliness") are editorial readings
connecting Cybozu's observed design to its stated mission, not directly sourced statements.
-->
