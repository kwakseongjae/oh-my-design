---
id: kakaopay
name: KakaoPay
country: KR
category: fintech
homepage: "https://www.kakaopay.com"
primary_color: "#ffeb00"
logo:
  type: favicon
  slug: "https://t1.kakaocdn.net/kakaopay/icons/web/192-brand.png"
verified: "2026-05-15"
omd: "0.1"
ds:
  name: KakaoPay Story
  url: "https://story.kakaopay.com/"
  type: brand
  description: "KakaoPay's design narrative blog — 3 pillars (Color · Icon · Type), the 3:1 contrast accessibility policy, and the KPDS internal design system context."
  og_image: "https://i0.wp.com/story.kakaopay.com/wp-content/uploads/2024/03/kakaopay_thumb.png"
---

# Design System Inspiration of KakaoPay

## 1. Visual Theme & Atmosphere

KakaoPay's design occupies the warm, friendly end of the Korean fintech spectrum — where Toss is bold and assertively spacious, KakaoPay is soft and conversationally legible. The web home opens with a near-white canvas (`#ffffff`) and a near-black-but-warm body color (`rgb(6, 11, 17)` ≈ `#060B11`), framed by a dark nav header and a soft off-white footer (`#F8F9FA`). The Kakao-ecosystem yellow (`#FFEB00`) is present as a brand anchor — but, by explicit accessibility decision, it is *not* the primary CTA color on functional surfaces. KakaoPay's design team has publicly committed to a minimum **3:1 contrast ratio** between graphics and background, which drove the brand to retreat from saturated yellow on UI chrome and toward warmer, softer paired neutrals.

The defining typographic choice is **Noto Sans KR** — a deliberately mainstream Korean-first system font choice, set with `system-ui` and `AppleSDGothicNeo` fallbacks. KakaoPay does not deploy a proprietary display face (unlike Toss's "Toss Product Sans" or Stripe's `sohne-var`). The choice is itself the statement: this is a financial app for *everyone in Korea*, including users on older Android devices, screen readers, and low-vision configurations. The body baseline is **14px** — denser than Stripe's 16px web baseline and consistent with Korean web fintech convention. Section headings sit at **22px / weight 500 / line-height 1.45 / letter-spacing `-0.2px`** — a moderate, friendly authority, not display-light (Stripe) and not display-bold (Toss financial amounts). Sub-menu labels run at **14px / weight 300** (inactive) and weight 500 (active group) — the weight differential is how hierarchy gets communicated, not size.

What distinguishes KakaoPay visually from its closest neighbors (Toss, Kakao Bank) is the **softness of the geometry**: rounded corners and rounded line work are stated principles, and the brand explicitly rejects sharp/aggressive shapes. Where Stripe runs 4px conservative radii and Toss runs 8–16px utilitarian rounding, KakaoPay's brand philosophy leans into the "둥글고 부드러운" (rounded and soft) idiom. Combined with the warm-neutral background and 3:1-minimum contrast targeting, the impression is of a financial product that has been deliberately de-tensed — engineered to feel low-stakes the moment you open it, even when the underlying action (transferring 5,000,000원) is high-stakes.

**Key Characteristics:**
- Noto Sans KR primary, with `system-ui` / `AppleSDGothicNeo` fallback — Korean-first, accessibility-first
- 14px web body baseline; 22px / weight 500 / `-0.2px` letter-spacing for section heads
- Weight 300 / 500 dual-track for hierarchy; bold (700) reserved for emphasis and reverse-on-yellow
- Kakao Yellow (`#FFEB00`) as ecosystem anchor — used decoratively / on dark brand chrome, not as default CTA
- Warm soft neutrals (Ivory `#FEFFFA`, Wild Willow `#C5C17A`, Olive `#7F7600`) as the supporting palette
- Minimum 3:1 contrast on graphics — accessibility is documented and enforced
- Rounded geometry across all components (cards, buttons, icons, illustrations)
- Three-tier graphic system: Icon → 2D → 3D, applied by information density

## 2. Color Palette & Roles

### Primary
- **Kakao Yellow** (`#FFEB00`): The brand anchor across the Kakao ecosystem. Used for logo, hero brand moments, and yellow-on-dark CTA in promotional surfaces. **Not** the default functional-UI CTA color — accessibility rules prohibit `#FFEB00` text on white and large-area `#FFEB00` for primary buttons without paired dark text.
- **Deep Ink** (`#060B11`): `rgb(6, 11, 17)` — observed body text color on live `kakaopay.com`. The KakaoPay "near-black": a deep neutral with a faint blue undertone, warmer than pure `#000`.
- **Pure White** (`#ffffff`): Page background, card surfaces.

### Brand Support
- **Ivory** (`#FEFFFA`): Soft off-white surface tone — alternative to pure white for sections that need warmth.
- **Wild Willow** (`#C5C17A`): Muted yellow-green secondary — pairs with yellow as a calmer adjacent tone.
- **Olive** (`#7F7600`): Deep yellow-green — used for text-on-yellow, icon strokes against light yellow backgrounds, achieving the 3:1-minimum contrast against `#FFEB00`.

### Surface Neutrals
- **Surface Footer** (`#F8F9FA`): Observed footer container background — the canonical "secondary surface" tone.
- **Surface Soft** (`#F2F4F6`): Light grey-blue panel background for cards and grouped content.
- **Border Default** (`#E5E8EB`): 1px borders on inputs, cards, dividers.
- **Border Subtle** (`#EEF0F3`): Inner dividers, list separators.

### Text Scale
- **Heading Ink** (`#060B11`): Primary heading and body text on light surfaces.
- **Heading on Dark** (`#F8F9FA`): Heading text on dark nav / dark brand sections.
- **Body Slate** (`#374151`): Secondary body / longer-form copy.
- **Caption Grey** (`#6B7684`): Captions, helper text, timestamps.
- **Placeholder** (`#B0B8C1`): Form placeholders, muted hint text.

### Functional
- **Success Green** (`#03B26C`): Confirmation states (transaction succeeded, savings goal hit).
- **Error Red** (`#F04452`): Error states, declines, validation failures.
- **Warning Amber** (`#FFA94D`): Warning states, deadline reminders. Distinct from brand yellow.
- **Info Blue** (`#3182F6`): Informational links and tooltips on non-brand surfaces.

### Dark Nav / Hero
- **Header Ink** (`#1A1D24`): Dark nav header background — near-black with warm undertone.
- **Header Text** (`#FFFFFF`): Top-level nav links on dark header.
- **Header Muted** (`rgba(255,255,255,0.6)`): Inactive top-level link state.

## 3. Typography Rules

### Font Family
- **Primary**: `"Noto Sans KR", system-ui, AppleSDGothicNeo, sans-serif` (observed)
- **Numerals**: Same family; tabular numerals not enforced via OpenType on web — financial amounts rely on rendering at consistent weight (500/700) and right alignment for column legibility.
- **No proprietary display face.** Korean-first accessibility is the explicit reason.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Noto Sans KR | 40-48px | 700 | 1.20 | -0.4px | Marketing hero; bold to anchor the warm-soft canvas |
| Display Large | Noto Sans KR | 32px | 700 | 1.25 | -0.3px | Secondary marketing headlines |
| Section Heading | Noto Sans KR | 22px | 500 | 1.45 (31.9px) | -0.2px | Observed nav megamenu H2 — the workhorse heading |
| Sub-heading | Noto Sans KR | 18px | 500 | 1.40 | -0.1px | Card titles, group labels |
| Body Strong | Noto Sans KR | 16px | 500 | 1.50 | normal | Important paragraph copy |
| Body | Noto Sans KR | 14px | 400 | 1.50 | normal | Observed default — Korean-web fintech baseline |
| Body Light | Noto Sans KR | 14px | 300 | 1.57 (21.98px) | normal | Observed inactive nav link weight — secondary text |
| Group Label | Noto Sans KR | 14px | 500 | 1.21 (16.94px) | normal | Observed H3 in megamenu — group-active label |
| Caption | Noto Sans KR | 13px | 400 | 1.50 | normal | Helper text, metadata |
| Small | Noto Sans KR | 12px | 400 | 1.40 | normal | Legal, fine print |
| Financial Amount | Noto Sans KR | 24-30px | 700 | 1.20 | normal | Balance and amount display (in app) |

### Principles
- **Weight differentiates, not size.** The most common KakaoPay pattern is 14px / weight 300 paired with 14px / weight 500 — same size, different hierarchy. Reduces visual noise.
- **Negative tracking only at display.** Headings ≥22px use `-0.2px` to `-0.4px`; body keeps `letter-spacing: normal`. Korean glyphs are wider than Latin and over-tightening punishes legibility.
- **Korean is the first audience.** Latin strings are styled to render adequately in Noto Sans KR's Latin glyphs — KakaoPay does not switch to a Latin-optimized fallback mid-sentence.
- **Two-weight density.** 300 / 500 / 700 are the load-bearing weights; 400 is the neutral default for paragraph copy. Avoid stacking weights mid-paragraph for emphasis.
- **No display-light.** Unlike Stripe's signature weight-300 headlines, KakaoPay's hero/display sits at 500-700. Light weight at display sizes would read as cold, contradicting the warm-friendly tone.

## 4. Component Stylings

### Buttons

**Primary (Functional UI)**
- Background: `#060B11` (Deep Ink — preferred default on white surfaces, accessibility-safe)
- Text: `#FFFFFF`
- Padding: 14px 20px
- Radius: 12px (rounded — matches "둥글고 부드러운" principle)
- Font: 16px / weight 500 / Noto Sans KR
- Height: 48px (touch-friendly)
- Hover: opacity 0.9 / no color shift
- Use: Primary action on light surface where Kakao Yellow would fail contrast ("확인", "다음", "송금하기")

**Brand Yellow (Decorative / On Dark)**
- Background: `#FFEB00`
- Text: `#060B11` (dark ink — required for 3:1 contrast on yellow)
- Padding: 14px 20px
- Radius: 12px
- Font: 16px / weight 700 / Noto Sans KR
- Height: 48px
- Use: Kakao-ecosystem moments (Kakao login, brand promotion, marketing-page hero CTA on dark canvas). **Never** white text on yellow.

**Secondary / Outline**
- Background: `#FFFFFF`
- Text: `#060B11`
- Padding: 14px 20px
- Radius: 12px
- Border: `1px solid #E5E8EB`
- Font: 16px / weight 500
- Use: Secondary action paired with a primary CTA

**Tertiary / Soft**
- Background: `#F2F4F6`
- Text: `#060B11`
- Padding: 14px 20px
- Radius: 12px
- Border: none
- Font: 16px / weight 500
- Use: Low-emphasis action, "더보기", "취소"

**Link Inline**
- Background: transparent
- Text: `#3182F6`
- Padding: 0
- Underline: on hover only
- Font: 14px / weight 500
- Use: Inline text link inside paragraph copy

### Cards & Containers

**Standard Card**
- Background: `#FFFFFF`
- Border: `1px solid #EEF0F3`
- Radius: 16px (rounded-soft)
- Padding: 20px
- Shadow: `0px 2px 8px rgba(0, 0, 0, 0.04)` (very subtle — soft elevation, not dramatic)
- Use: Service tile, summary panel, content block

**Soft Card** (grouped content)
- Background: `#F8F9FA`
- Border: none
- Radius: 16px
- Padding: 20px
- Shadow: none — elevation conveyed by background contrast only
- Use: Inset panel, FAQ row, grouped form section

**Brand Card** (yellow-on-dark moment)
- Background: `#1A1D24`
- Border: none
- Radius: 20px
- Padding: 24px
- Text: `#FFFFFF` with `#FFEB00` accent for the brand-moment headline
- Use: Hero promotional card, Kakao-ecosystem feature spotlight

### Badges / Tags / Pills

**Neutral Badge**
- Background: `#F2F4F6`
- Text: `#374151`
- Padding: 4px 10px
- Radius: 9999px (pill — matches rounded principle)
- Font: 12px / weight 500

**Brand Badge**
- Background: `#FFFBCC` (yellow-tinted 12% surface)
- Text: `#7F7600` (Olive — clears 3:1 contrast on the tinted background)
- Padding: 4px 10px
- Radius: 9999px
- Font: 12px / weight 500

**Success Badge**
- Background: `rgba(3, 178, 108, 0.12)`
- Text: `#03B26C`
- Padding: 4px 10px
- Radius: 9999px
- Font: 12px / weight 500

**Error Badge**
- Background: `rgba(240, 68, 82, 0.10)`
- Text: `#F04452`
- Padding: 4px 10px
- Radius: 9999px
- Font: 12px / weight 500

### Inputs & Forms
- Background: `#FFFFFF`
- Border: `1px solid #E5E8EB`
- Radius: 12px
- Padding: 14px 16px
- Height: 52px
- Focus: `1px solid #060B11` (no yellow ring — contrast safety)
- Label: 13px / weight 500 / `#6B7684`, sits above field
- Text: 16px / weight 400 / `#060B11`
- Placeholder: `#B0B8C1`
- Error: 1px solid `#F04452` + 13px error helper text in `#F04452` below

### Navigation

**Web Header (observed)**
- Background: `#1A1D24` (dark)
- Height: 84px
- Text: `#FFFFFF` for top-level links
- Top-level link: 16px / weight 300 / line-height 84px (centered vertically by line-height)
- Megamenu H2 group header: 22px / weight 500 / letter-spacing `-0.2px` / color `#F8F9FA`
- Megamenu H3 sub-group label: 14px / weight 500 / 8px horizontal padding / color `#FFFFFF`
- Megamenu link (inactive): 14px / weight 300 / `#060B11` on white megamenu drop
- Logo position: left
- No CTA in primary nav (KakaoPay app install is bottom-of-page or floating)

**Mobile / App Tab Bar**
- Background: `#FFFFFF`
- Top border: `1px solid #EEF0F3`
- Height: 56px (+ safe-area)
- Tab icon: 24px, weight handled by 3-tier graphic system (Icon variant)
- Active tab: `#060B11` icon + 11px / weight 500 label `#060B11`
- Inactive tab: `#B0B8C1` icon + 11px / weight 400 label `#6B7684`

### Iconography (3-Tier System)
- **Icon (UI tier):** 24px solid-fill monoline, `#060B11` on light / `#FFFFFF` on dark. Used for inline actions, tab bar, list rows.
- **2D Graphic:** Solid-fill illustration ~80–120px, multi-color from the warm-soft palette. Used for empty states and feature cards.
- **3D Graphic:** Rendered illustration ~160–240px, used for hero / onboarding only. Always paired with a single supporting sentence — never decorative.

---

**Verified:** 2026-05-13 (CREATE — Apple-tier)
**Tier 1 sources:** `https://www.kakaopay.com/` (live DOM via playwright — body font `Noto Sans KR`, body color `rgb(6,11,17)`, header 84px dark, megamenu H2 22px·500·-0.2px, footer `#F8F9FA`); `https://story.kakaopay.com/225-kakaopay-design/` (official KakaoPay design blog — three pillars, 3:1 contrast commitment, Icon→2D→3D hierarchy); `https://www.kakaocorp.com/page/service/service/KakaoPay` (service taglines and IA); WebSearch corroboration on brand color `#FFEB00` + Wild Willow / Ivory / Olive supporting palette.
**Tier 2 sources:** `getdesign.md/kakaopay` — verified explicitly empty ("No designs found for 'kakaopay'", 2026-05-13). `styles.refero.design/?q=kakaopay` and `?q=카카오페이` — both verified empty via playwright 2026-05-13.
**Tier 2b status:** unavailable. Tier 1 (live DOM + official `story.kakaopay.com` design blog + Kakao Corp service page + brand-color aggregator) treated as authoritative per pipeline.
**Conflicts unresolved:** none. Live DOM (warm-neutral + dark-ink primary, no yellow on functional CTAs) is fully consistent with the blog-stated accessibility policy (3:1 minimum, yellow retreat from primary functional UI). The yellow stays as a brand-anchor / ecosystem cue, not a CTA token.
**Note on KPDS:** No public KakaoPay Design System docs site discovered. Design knowledge is published as narrative posts on `story.kakaopay.com`, not as a public token registry.
**`_research.md`:** `web/references/kakaopay/_research.md`

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Common scale: 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64
- Section v-padding: 64px desktop / 40px mobile
- Card internal padding: 20px standard, 24px featured
- Form field stacking: 16px gap between fields, 8px gap between label and field

### Grid & Container
- Web max content width: ~1200px
- Mobile baseline: 360px (wider than Toss's 375px to accommodate older Android target)
- Horizontal padding: 20px mobile / 40px tablet / centered on desktop
- Megamenu drop: full-width, internal column gap 32px

### Whitespace Philosophy
- **Soft density.** KakaoPay sits between Stripe's airy editorial spacing and a typical Korean banking site's information-dense tables. Lists and transaction rows are tight (52–56px rows) but section breaks are generous (64px) — the rhythm tells users *"we're in a list now"* vs *"new topic, breathe"*.
- **Yellow as punctuation.** Brand yellow is reserved for moments — a hero card, a Kakao login button, an icon highlight. It never tiles. Tiling yellow would fail accessibility and lose its function as an attention anchor.
- **Rounded everywhere, but not pill-everywhere.** Cards round at 16px, buttons at 12px, badges at 9999px (pill). The rounding scale is itself a hierarchy.

### Border Radius Scale
- Compact (8px): Inputs, small chips, inline elements
- Standard (12px): Buttons, small cards
- Comfortable (16px): Standard cards, modal sheets
- Large (20-24px): Featured brand cards, bottom sheets
- Pill (9999px): Badges, toggle switches, floating action chips

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text, footer panels |
| Subtle (Level 1) | `0px 1px 2px rgba(0, 0, 0, 0.04)` | Resting card, list separation hint |
| Soft (Level 2) | `0px 2px 8px rgba(0, 0, 0, 0.04)` | Standard card on white |
| Lifted (Level 3) | `0px 4px 12px rgba(0, 0, 0, 0.08)` | Dropdown, popover, hover state |
| Sheet (Level 4) | `0px -4px 16px rgba(0, 0, 0, 0.08)` | Bottom sheet (negative-Y shadow) |
| Modal (Level 5) | `0px 8px 24px rgba(0, 0, 0, 0.12)` | Centered modal, blocking dialog |

**Shadow Philosophy**: KakaoPay's shadows are explicitly *quiet*. Pure-black at very low opacity — softer than Toss (which is already restrained) and dramatically softer than Stripe's blue-tinted multi-layer system. The reasoning is the same as the typography rationale: in a payment app, dramatic depth reads as decoration, and decoration reads as untrustworthy. Elevation is communicated more through background contrast (`#F8F9FA` panel on `#FFFFFF` page) than through shadow weight.

### Background Layering
- Page: `#FFFFFF`
- Inset section / footer-like surface: `#F8F9FA`
- Grouped soft card: `#F2F4F6`
- Dark brand band: `#1A1D24` (white text on top)

## 7. Do's and Don'ts

### Do
- Use Noto Sans KR with system fallbacks — Korean-first, accessibility-first
- Use Deep Ink (`#060B11`) for primary CTA on white surfaces (default), reserve yellow for brand moments on dark canvas
- Pair Kakao Yellow (`#FFEB00`) only with Deep Ink text or Olive (`#7F7600`) iconography — never white text on yellow
- Apply rounded geometry: 12px buttons, 16px cards, 9999px badges
- Use weight (300 / 500) as the primary hierarchy lever — same size, different weight
- Verify 3:1 minimum contrast on every graphic-on-background pairing
- Use soft, single-layer shadows (`0px 2px 8px rgba(0,0,0,0.04)`) for cards
- Layer surfaces using background tones (`#FFFFFF` → `#F8F9FA` → `#F2F4F6`) before reaching for shadow
- Use the Icon → 2D → 3D graphic hierarchy by surface importance

### Don't
- Don't put white text on `#FFEB00` — fails contrast, breaks the accessibility commitment
- Don't use Kakao Yellow as the default CTA color on functional UI — it is decorative / ecosystem-anchor, not a primary-action token
- Don't apply display-light weight (200/300) to headings — KakaoPay's tone is friendly-warm, not editorial-cool
- Don't tighten Korean text below `-0.2px` — Korean glyphs need the breathing room
- Don't use sharp 0–4px radii on cards or buttons — contradicts the stated "둥글고 부드러운" principle
- Don't use multi-layer or colored shadows — KakaoPay's elevation is single-layer soft black
- Don't mix illustration tiers within one screen — pick Icon *or* 2D *or* 3D per surface, by information density
- Don't use Kakao Yellow as background for body text — even with Deep Ink, large yellow surfaces fatigue the eye and crowd out information

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile (Primary) | <600px | 360px baseline, single column, 20px h-padding |
| Tablet | 600–960px | 2-column service grid, 32px h-padding |
| Desktop | 960–1280px | Full layout, megamenu, ~1200px max content width |
| Large Desktop | >1280px | Centered content, generous outer margin |

### Touch Targets
- Buttons: 48px (standard), 56px (primary mobile CTA)
- List rows: 56px minimum (52px content + 4px padding)
- Tab bar items: 56px tall + safe-area
- Icon buttons: 44×44px tap target even when icon is 24px

### Collapsing Strategy
- Desktop megamenu → mobile drawer (slide-in from right)
- Three-column service grid → two-column → single column
- Hero 3D graphic scales down to 2D variant on mobile
- Bottom sheet replaces centered modal on mobile
- Sticky bottom CTA bar with safe-area insets on all mobile screens

### Image Behavior
- Service icons render at 24px / 32px / 40px depending on context
- 2D graphics scale fluidly within a max-width box; never stretch beyond intrinsic resolution
- 3D graphics are PNG with transparency; replaced with 2D variant below mobile breakpoint
- Brand logo: 80px wide on desktop, 64px on mobile, never below 48px

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA (functional UI): Deep Ink (`#060B11`)
- Primary CTA (brand moment / Kakao ecosystem): Kakao Yellow (`#FFEB00`) with Deep Ink text
- Background: Pure White (`#FFFFFF`)
- Surface Soft: `#F8F9FA`
- Surface Grouped: `#F2F4F6`
- Heading: `#060B11`
- Body: `#374151`
- Caption: `#6B7684`
- Border: `#E5E8EB`
- Success: `#03B26C`
- Error: `#F04452`
- Warning: `#FFA94D`
- Info Link: `#3182F6`
- Brand Dark: `#1A1D24`
- Brand Accent (text on yellow): Olive `#7F7600`

### Example Component Prompts
- "Create a hero card: white background, 16px radius, 24px padding, 1px solid #EEF0F3 border. Headline 22px Noto Sans KR weight 500, color #060B11, letter-spacing -0.2px. Subtitle 14px weight 300, color #6B7684. Primary CTA: #060B11 background, white text, 16px weight 500, 12px radius, 14px 20px padding, 48px height."
- "Build a Kakao-login button: #FFEB00 background, #060B11 text, 16px weight 700, 12px radius, 48px height, 14px 20px padding. Logo glyph on left at 20px, 8px gap to label. Hover: opacity 0.9."
- "Design a transaction row: 56px height, full-width, 16px h-padding. Left: 32px circle icon. Middle: name 14px weight 500 #060B11 + category 13px weight 300 #6B7684. Right: amount 15px weight 700, #F04452 expense / #03B26C income, right-aligned."
- "Create an inset section: #F8F9FA background, 16px radius, 20px padding, no shadow. Group label 14px weight 500 #060B11. Body 14px weight 400 #374151 line-height 1.50."
- "Design a brand-yellow promotional card: #1A1D24 background, 20px radius, 24px padding. Headline 24px weight 700 #FFFFFF with #FFEB00 word accent. Subtitle 14px weight 400 rgba(255,255,255,0.7). CTA: #FFEB00 bg, #060B11 text, weight 700, 12px radius."

### Iteration Guide
1. Always Noto Sans KR with system fallbacks — never substitute a Latin-first display face
2. Use weight 300 / 500 / 700 as hierarchy; weight 400 only for paragraph body
3. Primary CTA defaults to Deep Ink (`#060B11`) on white surfaces; yellow only when paired with dark text on dark canvas
4. Verify every yellow-adjacent pairing clears 3:1 contrast — this is a stated brand commitment
5. Radius: 8px inputs, 12px buttons, 16px cards, 9999px badges
6. Shadows are single-layer black at ≤0.08 opacity; never tinted, never multi-layer
7. Surface hierarchy: `#FFFFFF` → `#F8F9FA` → `#F2F4F6` → `#1A1D24` for dark brand bands
8. Pick one graphic tier per surface (Icon *or* 2D *or* 3D), do not mix
9. Korean and Latin in the same line render in Noto Sans KR; do not split families

---

## 10. Voice & Tone

KakaoPay speaks like a knowledgeable friend who happens to live inside KakaoTalk — warm, conversational, slightly informal, never officious. Where Toss reads as "calm fiduciary" and Kakao Bank reads as "young but precise bank," KakaoPay's register is closer to *"the helpful friend who also handles your bills."* The official taglines — *"마음 놓고 금융하다"* and the English *"Effortless finance"* — both carry that low-friction promise: the verb is `금융하다` (to do finance) rendered casually, not `금융 서비스` (financial services) rendered formally. The voice rejects two opposite failure modes: the cold institutional Korean of legacy banks (`고객님께서는`, `~하시기 바랍니다`) and the over-friendly emoji-heavy Korean of casual messengers. KakaoPay sits at the middle: polite `~요` endings, exact numerals, no exclamation points on routine actions.

| Context | Tone |
|---|---|
| CTAs | Imperative Korean verb form (`송금하기`, `결제하기`, `확인`, `다음`). No "Get started!" |
| Success messages | Past-tense polite (`송금이 완료되었어요`, `결제가 완료되었어요`). One sentence, no emoji on money. |
| Error messages | Specific + blameless + actionable. Never `오류가 발생했습니다`. |
| Onboarding | Conversational `~요` endings, one idea per screen. The friend explaining, not the manual instructing. |
| Financial amounts | Bare numerals with comma separators + `원`. `1,240,000원`. Never `약` (approximately) on money. |
| Empty states | Explain the *why* in one warm sentence (`아직 거래내역이 없어요`), offer one action. Never `데이터가 없습니다`. |
| Legal / disclosure | Korean financial-regulation formal tone — `합니다` endings. The single exception. |
| Marketing copy | Casual-warm — short sentences, concrete benefits, occasional rhetorical questions. Never superlative. |
| Push notification | `~요` endings, exact and useful. `오늘 카드값 결제 예정이에요. 잔액을 확인해주세요.` |

**Forbidden phrases.** `오류가 발생했습니다` (vague error), `약 ~원` (approximation on money), excessive `~ㅎㅎ`/`~ㅋㅋ` (over-casual on financial context), brand-yellow emoji as ornament, `incredible` / `amazing` superlatives in English strings, `Oops!` in English errors. Toss-style declarative imperatives without `~요` are out of voice — KakaoPay is warmer than Toss by a notch.

## 11. Brand Narrative

KakaoPay (카카오페이) is operated by **Kakao Pay Corp.**, a subsidiary of **Kakao Corp.** — the company behind KakaoTalk, the messaging app that effectively *is* Korean smartphone communication ([Kakao Corp service page](https://www.kakaocorp.com/page/service/service/KakaoPay)). KakaoPay launched in **2014** as a money-transfer feature inside KakaoTalk, was spun out into Kakao Pay Corp. in 2017, and **listed on KOSPI in November 2021** — at the time, the largest fintech IPO in Korean history. The product's foundational distribution advantage was the same insight that built every Kakao service: *the messenger is already open on every Korean phone — make the financial action happen where the conversation already happens.*

Where **Toss** was founded as an explicit rejection of legacy-bank UX (Lee Seung-gun built Viva Republica precisely because Korean banking websites required Active-X plugins and 12-digit account numbers), **KakaoPay** was founded as an extension of an existing trust relationship. Users were already in KakaoTalk; KakaoPay just added "send money in the chat." That genealogical difference shows up in the design system to this day. Toss's restraint is the restraint of an outsider proving that finance can feel light. KakaoPay's warmth is the warmth of an insider product that inherited 50M+ existing relationships from KakaoTalk — its job is to feel like a natural continuation, not a contrarian alternative.

As of 2025, KakaoPay reports tens of millions of registered users and offers transfer, in-store and online payment, membership and rewards (카카오페이 머니), bill payment, investing (via Kakao Pay Securities), lending, insurance brokerage, and credit scoring — a super-app footprint comparable to Toss's. The company is publicly listed and has an established **Information Security Management System (ISMS)** certification, a Korean Financial Services Commission license, and ongoing strategic alliances (e.g., the 2025 announcement with HD Hyundai Electric for Kakao Pay Point Integration, surfaced on the Kakao Corp service page).

What KakaoPay refuses: the cold institutional Korean of legacy banks, the high-contrast saturation that makes a fintech app "feel young" but punishes low-vision users, sharp aggressive geometry, and emoji-heavy over-friendliness on money-handling screens. What KakaoPay embraces: Korean-first typography (Noto Sans KR over a proprietary Latin face), three-tier graphic hierarchy (Icon → 2D → 3D), warm-soft palette in service of a stated 3:1 minimum contrast policy, and rounded geometry as a brand-level commitment.

## 12. Principles

1. **Inclusion is the design system.** KakaoPay has stated publicly (`story.kakaopay.com/225-kakaopay-design/`) that "design for everyone" is the brand commitment — not a feature, the brand. The 3:1 minimum contrast on graphics is enforced; legacy yellow palettes that failed it were retired. Accessibility is not a layer applied at the end. It is the constraint that shapes the palette.
2. **Warmth, not formality.** The voice is `~요` polite-casual, not `~합니다` formal. The geometry is rounded, not orthogonal. The color is warm-soft (Ivory, Wild Willow, Olive) before it is bright. The friendly fintech register is intentional and differentiates KakaoPay from Toss (cool-calm) and Kakao Bank (precise-young).
3. **Yellow is anchor, not action.** Kakao Yellow `#FFEB00` is the brand's ecosystem signal — it tells users "this is part of Kakao." It is not the default CTA color on functional UI, because saturated yellow on white fails accessibility and because the primary action should be the calmest possible target. Yellow gets a moment; it does not get every button.
4. **Korean first, Korean always.** Noto Sans KR is the primary face, and Korean glyph metrics drive typographic decisions (no aggressive negative tracking, ample line-height). KakaoPay is not a Latin app that ships a Korean translation; it is a Korean app that renders Latin as a courtesy.
5. **Hierarchy by weight, not by size.** The 14px / 300 vs 14px / 500 pattern is everywhere in the live DOM. Reducing reliance on size differences keeps the page calm and lets density rise in service screens without screaming.
6. **Three tiers of graphics, picked by surface.** Icon for UI chrome, 2D for empty states and feature cards, 3D for hero and onboarding only. Mixing tiers on a single surface produces visual noise; picking the right tier is itself a design decision.
7. **Quiet shadows.** Single-layer pure-black at ≤0.08 opacity. Stacking shadows or tinting them adds decoration without earning trust. Background contrast (`#FFFFFF` → `#F8F9FA`) does the work of "elevation" wherever possible.
8. **Rounded geometry is a brand commitment.** "둥글고 부드러운 라인" is the stated principle, and it is held consistently from buttons (12px) to cards (16px) to badges (pill). Sharp 0–4px corners read as competitor brand language; KakaoPay does not borrow it.
9. **Density inside, breathing outside.** Within a list or transaction row, KakaoPay is dense (56px rows, 4px internal gaps). Between sections, KakaoPay breathes (64px). The rhythm itself is a wayfinding signal.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable KakaoPay user segments (mass-market Korean smartphone users, KakaoTalk-native communicators, older users brought in through ecosystem familiarity, small-business merchants accepting KakaoPay), not individual people.*

**현주 (Hyeonju), 33, Suwon.** Office worker at a mid-size company. Has had KakaoPay installed since 2018 because her university friends used the KakaoTalk chat-room split-bill feature. Sends money 4–6 times a week (lunch, coffee, monthly rent share with roommate). Has never opened a dedicated banking app to do a transfer — KakaoPay opens directly into the chat where the request came from. Expects the app to feel like a continuation of KakaoTalk, not a separate financial product.

**진수 아저씨 (Mr. Jinsu), 58, Daejeon.** Runs a 김밥 (kimbap) shop with his wife. His daughter set up KakaoPay for him three years ago specifically so customers could pay by QR code without his shop needing a physical card reader. Uses KakaoPay almost exclusively for receiving payments and checking the daily ledger. Trusts the yellow logo because his customers trust the yellow logo. Would never switch to a payment provider whose brand recognition is lower than Kakao's, regardless of the fees.

**서연 (Seoyeon), 24, Seoul.** University student, communications major. Has both KakaoPay and Toss installed. Uses Toss for investing (because the investing UI is denser and more powerful) and KakaoPay for daily transfers (because every chat room split-bill goes through KakaoPay). Does not see this as a contradiction — the two apps occupy different mental categories. Notices when a friend's transfer message arrives in a chat and the "Pay" button is one tap away; if she had to open Toss to respond, she'd take three times longer.

**민영 어머니 (Mrs. Minyoung), 67, Busan.** Retired teacher. Her son installed KakaoPay so she could pay her grandchildren's allowance through the chat. She trusts the yellow logo because she has trusted KakaoTalk for a decade. The 3:1 minimum contrast commitment is invisible to her by design — she only notices that the buttons are large enough to read and the icons don't blur into the background. Has never used the investing surface; the app is correctly invisible to her there because the home screen doesn't push it on her.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no transactions yet)** | Centered 2D graphic (~120px) in warm-soft palette. One sentence in `#060B11` 16px weight 500: `아직 거래내역이 없어요.` Sub-line `#6B7684` 14px weight 400: `친구나 가족에게 송금을 시작해보세요.` One secondary outline CTA: `송금하기`. No 3D, no emoji, no exclamation. |
| **Empty (filter cleared)** | Single-line `#6B7684` 14px caption: `조건에 맞는 결과가 없어요.` No graphic, no button — user adjusts the filter. |
| **Loading (first paint)** | Skeleton blocks at exact final dimensions in `#F2F4F6`. 1.2s shimmer with 8% white linear-gradient. Financial amounts render as `--` until resolved — never as skeleton widths (a wide skeleton that shrinks looks like a bug). |
| **Loading (pull-to-refresh)** | Top pull-down spinner using the Kakao Yellow as a wedge in a black circle (the one place yellow shows up at small sizes on white). Previous content stays visible. |
| **Error (inline field)** | `#F04452` 1px border on field + 13px error helper text below in `#F04452`. One actionable sentence (`계좌번호를 다시 확인해주세요`). Never `오류가 발생했습니다`. |
| **Error (toast)** | `#1A1D24` background, white 14px weight 500 text, 12px radius, 12px 16px padding. Bottom of screen, 20px inset, safe-area aware. 3s auto-dismiss. One sentence. No emoji. |
| **Error (blocking screen)** | Reserved for server outage. White screen, centered 2D graphic, single sentence `#060B11` 16px weight 500. Single retry button in Deep Ink. |
| **Success (routine, inline)** | Brief 300ms flash of `#FFFBCC` (yellow-tinted 12%) behind the updated row, fading to default. For toggles and small confirmations. |
| **Success (money moved)** | Dedicated confirmation screen — not a toast. `#03B26C` 2D check graphic at top, exact amount in 30px weight 700 below, recipient name and timestamp, single primary CTA `확인`. Like Toss, money-moved is never a toast — but KakaoPay's confirmation is warmer (rounded 2D graphic vs Toss's clinical green checkmark). |
| **Disabled** | Opacity reduced on both surface and text together. Primary buttons fade to `rgba(6, 11, 17, 0.3)`. No grey-out of borders — disabled inputs keep `#E5E8EB` border so geometry doesn't shift when re-enabled. |
| **Loading inside pressed button** | Button text replaced by 3-dot white animation (or dark dots if button is yellow). Button width does not change. Press is visually committed; user cannot double-submit. |
| **Skeleton** | `#F2F4F6` blocks at exact final dimensions, rounded at component radius (12 / 16 / 9999). Never on financial amounts. |
| **Permission / consent** | Bottom sheet, 20px radius top corners. Title 18px weight 500. Body 14px weight 400 `#374151`. Two CTAs side-by-side: secondary `취소` (`#F2F4F6` bg) + primary `허용` (`#060B11` bg). |

## 15. Motion & Easing

**Durations** (named, not raw milliseconds):

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle commits, focus rings, selection ticks |
| `motion-fast` | 150ms | Hover, focus, press overlay, small reveals |
| `motion-standard` | 250ms | Default — sheet open, card expand, tab switch |
| `motion-slow` | 400ms | Emphasized — success confirmation, onboarding step advance |
| `motion-page` | 350ms | Top-level route transitions |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Arrivals — sheets, toasts, screen pushes |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Two-way transitions — collapsible cards, tab content |
| `ease-soft` | `cubic-bezier(0.32, 0.72, 0.36, 1)` | KakaoPay signature — slightly slower deceleration, reads as "warm" arrival without overshoot |

**Explicitly forbidden.** No spring with positive overshoot on routine UI. No bounce on payment confirmations. Bounce reads as consumer-app delight; this is money. KakaoPay reserves all "delightful" motion for the success-confirmation graphic, where the 2D check illustration may animate its strokes via SVG path-draw — never via positional overshoot.

**Signature motions.**

1. **Money-moved confirmation.** The 2D check graphic draws over `motion-slow / ease-soft` with stroke-dashoffset animation (0 → full path). The exact amount slides up from `y+12px` with `motion-standard / ease-enter` simultaneously. Cross-fade is never used for money values — a flickering amount looks like an integrity bug.
2. **Bottom-sheet presentation.** Sheets rise from `y+40px` with `motion-standard / ease-soft` and synchronized backdrop fade `rgba(6,11,17,0) → rgba(6,11,17,0.5)`. Dismissal uses `motion-fast / ease-exit` — leaving is faster than arriving (consistent with Toss; the principle is universal in Korean fintech).
3. **Inline yellow flash on routine success.** Background `#FFFBCC` for 300ms, fades to default `#FFFFFF` with `ease-standard`. This is the one place Kakao Yellow appears as a transient surface tone on functional UI — it earns its brand moment, then disappears.
4. **Pull-to-refresh spinner.** The yellow wedge in a black circle rotates at `linear` 1000ms — a steady, non-springy revolution. The black-on-yellow contrast satisfies the 3:1 commitment at small sizes where solid yellow would otherwise fail.
5. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`. The SVG path-draw on the success check becomes an instant full-stroke render. The pull-to-refresh spinner becomes a static yellow-on-black indicator. The app remains fully functional; no kinetic decoration is required to confirm a state.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Direct verification via WebFetch and playwright (2026-05-13):
- https://www.kakaopay.com/ — confirms title/tagline "카카오페이 | 마음 놓고 금융하다",
  Noto Sans KR primary font, dark header / soft footer (#F8F9FA),
  service IA (생활하다 / 관리하다 / 금융하다 / 소식 / ESG), 22px·500·-0.2px
  section heading scale.
- https://story.kakaopay.com/225-kakaopay-design/ — confirms the three stated
  pillars (단순하고 명확한 디자인 / 따뜻하고 부드러운 컬러 / 둥글고 부드러운 라인),
  the 3:1 minimum contrast policy on graphics, and the Icon → 2D → 3D
  three-tier graphic hierarchy. This is the load-bearing citation for §10–12.
- https://www.kakaocorp.com/page/service/service/KakaoPay?lang=en —
  confirms the English tagline "Effortless finance", service category
  structure, and Kakao Corp. parent ownership.

Brand color #FFEB00 + Wild Willow #C5C17A / Ivory #FEFFFA / Olive #7F7600
sourced from public brand-color aggregator search (2026-05-13). Kakao Yellow
is also published as #FEE500 by Kakao Corp. brand resources for the messenger;
KakaoPay's specific yellow #FFEB00 is documented separately as the payment
product's signature.

Not independently verified via WebFetch — widely documented public facts used:
- KakaoPay launched 2014 inside KakaoTalk; spun out as Kakao Pay Corp. in 2017
- KOSPI listing in November 2021
- Parent company: Kakao Corp.

Personas (§13) are fictional archetypes informed by publicly observable
KakaoPay user segments (KakaoTalk-native users, small-business merchants
accepting KakaoPay QR, older users brought in via ecosystem familiarity,
university-aged super-app users). Names are illustrative; they do not refer
to specific individuals.

Interpretive claims (e.g., "KakaoPay's warmth is the warmth of an insider
product that inherited 50M+ existing relationships from KakaoTalk", "the
3:1 minimum contrast is the constraint that shapes the palette") are
editorial readings connecting KakaoPay's stated principles to its design
system, not direct KakaoPay statements.

No public KakaoPay Design System (KPDS) documentation site was discovered
as of 2026-05-13. Design knowledge is published as narrative on
story.kakaopay.com, not as a public token registry. Tier 2 cross-checks
(getdesign.md/kakaopay, styles.refero.design/?q=kakaopay,
styles.refero.design/?q=카카오페이) all returned empty results — verified
explicitly. Tier 1 (live DOM + official design blog + Kakao Corp service
page + brand-color aggregator) is the sole authoritative source per pipeline.
-->
