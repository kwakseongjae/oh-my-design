---
omd: 0.1
brand: Karrot
---

# Design System Inspiration of Karrot (당근)

## 1. Visual Theme & Atmosphere

Karrot's interface is the digital equivalent of a friendly neighborhood bulletin board -- warm, approachable, and built for trust between strangers. The page opens on a clean white canvas (`#ffffff`) with warm near-black headings (`#1a1c20`) and the unmistakable Karrot Orange (`#ff6600`) that serves as the singular brand accent. This isn't the corporate orange of enterprise dashboards; it's the vivid, saturated orange of a fresh carrot -- energetic, trustworthy, and unmistakably local.

The design system, called **Seed Design**, is one of the most mature open-source systems in Korean tech. It operates on a strict 4px grid with a three-tier token architecture (palette → semantic → component) that ensures every measurement is intentional. Typography relies entirely on the platform's native font stack rather than a custom typeface -- Pretendard on web, system fonts on native -- putting community content first. The overall aesthetic is warm neutral: soft grays, generous whitespace, and that singular orange accent. Where Stripe uses shadows as brand expression, Karrot uses shadows as pure function -- minimal, neutral, and warm.

**Key Characteristics:**
- Karrot Orange (`#ff6600`) as the singular brand accent -- warm, energetic, unmistakable
- System font stack (Pretendard / Apple SD Gothic Neo) -- content takes center stage, no custom typeface
- 4px base grid with precise spacing from 2px (x0.5) to 64px (x16)
- Three-tier token system: palette → semantic → component for systematic theming
- Full dark mode via semantic token remapping (not simple inversion)
- 11-step gray scale (gray-00 through gray-1000) for nuanced depth
- Three-level shadow system with separate light/dark mode intensities
- Mobile-first at 375px baseline with `clamp()`-based accessibility font scaling

## 2. Color Palette & Roles

### Primary
- **Karrot Orange** (`#ff6600`): `$color.palette.carrot-600`. Primary CTA, active states, brand solid backgrounds. The iconic orange that defines every Karrot touchpoint.
- **Deep Orange** (`#e14d00`): `$color.palette.carrot-700`. Pressed/hover state for brand elements, dark mode brand solid.
- **Near Black** (`#1a1c20`): `$color.palette.gray-1000`, `fg-neutral`. Primary heading and text color. Warm near-black that avoids harshness.
- **Pure White** (`#ffffff`): `$color.palette.gray-00`, `bg-layer-default`. Page background, card surfaces.

### Brand Tints
- **Orange Tint** (`#fff2ec`): `$color.palette.carrot-100`. Brand weak background, subtle orange-tinted surfaces.
- **Orange Light** (`#ffb999`): `$color.palette.carrot-400`. Medium brand tint, progress indicators.
- **Orange Deep** (`#b93901`): `$color.palette.carrot-800`. Deep orange for emphasis in dark contexts.

### Semantic
- **Critical Red** (`#fa342c`): `fg-critical`. Error foreground, destructive action labels.
- **Informative Blue** (`#217cf9`): `fg-informative`. Links, informational highlights.
- **Positive Green** (`#079171`): `fg-positive`. Success states, confirmation indicators.
- **Warning Yellow** (`#9b7821`): `fg-warning`. Caution labels, attention-needed states.
- **Focus Blue** (`#5e98fe`): `stroke-focus-ring`. Keyboard focus ring on interactive elements.

### Neutral Scale
- **Gray 100** (`#f7f8f9`): `bg-layer-fill`. Subtle background fill.
- **Gray 200** (`#f3f4f5`): `bg-layer-basement`, `bg-disabled`. Secondary surfaces.
- **Gray 400** (`#dcdee3`): `stroke-neutral-weak`. Standard borders, dividers.
- **Gray 600** (`#b0b3ba`): `fg-placeholder`. Placeholder text, muted icons.
- **Gray 700** (`#868b94`): `fg-neutral-subtle`. Captions, tertiary text.
- **Gray 800** (`#555d6d`): `fg-neutral-muted`. Secondary body text.

### Surface & Borders
- **Border Subtle** (`rgba(0,0,0,0.08)`): `stroke-neutral-subtle`. Soft card borders, barely-there separation.
- **Border Muted** (`rgba(0,0,0,0.12)`): `stroke-neutral-muted`. Moderate borders for definition.
- **Overlay** (`rgba(0,0,0,0.7)`): `bg-overlay`. Modal/sheet backdrop.
- **Overlay Muted** (`rgba(0,0,0,0.5)`): `bg-overlay-muted`. Bottom sheet scrims.

## 3. Typography Rules

### Font Family
- **Primary**: `"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", Roboto, "Noto Sans KR", sans-serif`
- **Monospace**: `"SF Mono", SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace`
- **Design Principle**: No custom brand typeface. Karrot intentionally uses the user's system font so community content feels native and personal, not branded.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display XL | System | 26px (t10) | 700 | 35px | 0em | Hero headlines, splash screens |
| Display Large | System | 24px (t9) | 700 | 32px | 0em | Section headers |
| Heading Large | System | 20px (t7) | 700 | 27px | 0em | Card headings, sub-sections |
| Heading | System | 18px (t6) | 700 | 24px | 0em | List section headers |
| Title | System | 16px (t5) | 500 | 22px | 0em | Navigation, standard titles |
| Body | System | 14px (t4) | 400 | 19px | 0em | Standard reading text, listings |
| Body Small | System | 13px (t3) | 400 | 18px | 0em | Secondary text, metadata |
| Caption | System | 12px (t2) | 400 | 16px | 0em | Timestamps, small labels |
| Caption Small | System | 11px (t1) | 400 | 15px | 0em | Fine print, badges |

### Principles
- **Three weights only**: Regular (400), Medium (500), Bold (700). No light or extra-bold -- the system is intentionally constrained.
- **Platform-aware tracking**: iOS uses 0em throughout; Android uses tighter tracking (-0.02em to -0.04em) for system font metrics.
- **Compact type scale**: 11px to 26px in 10 steps with no display sizes above 26px -- mobile-first, content-density over typographic drama.
- **Accessibility scaling**: All sizes use `clamp()` with `--seed-font-size-multiplier`, supporting 80% to 150% of base size.

## 4. Component Stylings

### Buttons

**Brand Solid (Primary CTA)**
- Background: `#ff6600` (carrot-600)
- Text: `#ffffff`
- Radius: 12px (large), 8px (medium/small), 9999px (xsmall pill)
- Min-height: 52px (large), 40px (medium), 36px (small), 32px (xsmall)
- Font: 16px weight 700 (large), 14px weight 700 (medium/small)
- Pressed: `#e14d00` (carrot-700)
- Disabled: `#f3f4f5` background, `#d1d3d8` text
- Use: Primary actions ("판매하기", "채팅하기")

**Neutral Weak**
- Background: `#f3f4f5` (gray-200)
- Text: `#1a1c20` (gray-1000)
- Pressed: `#eeeff1` (gray-300)
- Use: Tertiary actions, filters

**Neutral Outline**
- Background: transparent
- Text: `#1a1c20` (gray-1000)
- Border: 1px solid `#dcdee3` (gray-400)
- Pressed: `#f7f8f9` background
- Use: Cancel, dismiss, low-emphasis

**Critical Solid**
- Background: `#fa342c` (red-700)
- Text: `#ffffff`
- Use: Destructive actions ("삭제", "신고")

### Cards & Containers
- Background: `#ffffff` (bg-layer-default)
- Border: 1px solid `rgba(0,0,0,0.08)` (stroke-neutral-subtle) or no border with shadow
- Radius: 8px (standard), 12px (featured), 16px (large cards)
- Shadow: `0px 2px 10px rgba(0,0,0,0.1)` (s2) for standard cards

### Chips & Tags
- Background: `#f3f4f5` (gray-200), Selected: `#1a1c20` (gray-1000) with white text
- Radius: 9999px (pill)
- Height: 32px, Padding: 0 12px, Font: 13px weight 500

### Inputs & Forms
- Background: `#f7f8f9` (gray-100)
- Border: 1px solid `#dcdee3` (gray-400)
- Radius: 8px
- Focus: 2px solid `#5e98fe` (blue-600) focus ring
- Text: `#1a1c20`, Placeholder: `#b0b3ba` (gray-600)
- Error border: `#fa342c` (red-700)

### Navigation
- Bottom tab bar: white background, subtle top border
- Active tab: Karrot Orange icon + label, Inactive: `#868b94` (gray-700)
- App bar: white, centered title (16px weight 700), optional back arrow

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Scale: 2px (x0.5), 4px (x1), 6px (x1.5), 8px (x2), 12px (x3), 16px (x4), 20px (x5), 24px (x6), 32px (x8), 40px (x10), 56px (x14), 64px (x16)
- Global gutter: 16px (x4) on each side
- Component default vertical: 12px (x3)

### Grid & Container
- Mobile: full-width with 16px horizontal gutter
- Content max-width: 640px for web
- Listing cards: full-width with 16px horizontal padding
- Card grid: 2-column on tablet, single column on mobile

### Whitespace Philosophy
- **Content-dense, chrome-light**: Users scan many listings quickly. Spacing breathes but keeps 3-4 items per viewport.
- **Consistent gutter**: The 16px global gutter is sacred -- every screen edge, every card inset returns to this rhythm.
- **Grouped by proximity**: Related items use 4-8px gaps; distinct sections use 16-24px gaps.

### Border Radius Scale
- Micro (2px): Progress bars, inline indicators
- Standard (8px): Buttons, inputs, standard cards
- Comfortable (12px): Large buttons, featured cards
- Large (16px): Image frames, prominent cards
- Sheet (20px): Bottom sheet top corners
- Dialog (24px): Modal dialogs
- Pill (9999px): Chips, avatars, xsmall buttons

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline elements |
| Subtle (s1) | `0px 1px 4px rgba(0,0,0,0.08)` | Slight lift, list item hover |
| Standard (s2) | `0px 2px 10px rgba(0,0,0,0.10)` | Cards, dropdowns, popovers |
| Prominent (s3) | `0px 4px 16px rgba(0,0,0,0.12)` | Floating action button, bottom sheets, modals |

**Shadow Philosophy**: Only three levels -- enough for clear layering without visual clutter. Shadows use pure black with varying opacity (no brand-tinted shadows), keeping the system neutral so the orange accent remains the sole source of warmth. In dark mode, opacities increase dramatically (s1: 0.50, s2: 0.68, s3: 0.80) to remain perceptible on dark surfaces.

## 7. Do's and Don'ts

### Do
- Use Karrot Orange (`#ff6600`) as the singular brand accent -- it should feel special, not overwhelming
- Stick to the 4px spacing grid -- every measurement should be a multiple of 4px
- Use semantic tokens (`fg-neutral`, `bg-layer-default`) over raw palette values in component code
- Keep border-radius between 8px-12px for standard elements, pills (9999px) only for chips/avatars
- Use the system font stack -- Pretendard on web, system fonts on native
- Apply dark mode via semantic token remapping, not opacity tricks
- Maintain the 16px global gutter on all screen edges

### Don't
- Don't overuse orange -- it's for primary CTAs and brand moments only, not backgrounds or borders
- Don't use shadows heavier than s3 -- the system intentionally avoids dramatic elevation
- Don't introduce additional brand colors -- Karrot is a one-accent-color system
- Don't exceed 26px for text sizes -- this is a mobile-first system with a compact type scale
- Don't use pure black (`#000000`) for text -- use gray-1000 (`#1a1c20`) for warmth
- Don't mix palette tokens and semantic tokens in the same component
- Don't skip the `clamp()` wrapper on font sizes -- accessibility scaling is non-negotiable

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <480px | Full-width cards, single column, 16px gutter |
| Tablet | 480-768px | 2-column listing grid, expanded cards |
| Desktop (Web) | >768px | Max-width 640px content, centered layout |

### Touch Targets
- Buttons: 52px (large), 40px (medium), 36px (small), 32px (xsmall)
- Tab bar items: 48px height with centered icon + label
- List items: minimum 56px row height
- Chips: 32px height minimum

### Collapsing Strategy
- Listing grid: 2-column → single column below 480px
- Bottom tab bar persists across all sizes
- Bottom CTA: sticky full-width button + safe area padding
- Image carousels: horizontal scroll with page indicators

### Image Behavior
- Listing thumbnails: 1:1 aspect ratio, 8px radius
- Profile avatars: circular (9999px), 36-48px diameter
- Full-width hero images: edge-to-edge, no radius

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Karrot Orange (`#ff6600`)
- CTA Pressed: Deep Orange (`#e14d00`)
- Background: Pure White (`#ffffff`)
- Heading text: Near Black (`#1a1c20`)
- Body text: Dark Gray (`#555d6d`)
- Caption text: Medium Gray (`#868b94`)
- Placeholder: Light Gray (`#b0b3ba`)
- Border: Soft Gray (`#dcdee3`)
- Disabled bg: Light Fill (`#f3f4f5`)
- Error: Red (`#fa342c`)
- Success: Green (`#079171`)
- Info: Blue (`#217cf9`)
- Focus ring: Blue (`#5e98fe`)

### Example Component Prompts
- "Create a listing card: white background, 1px solid rgba(0,0,0,0.08) border, 8px radius. Horizontal layout with 1:1 thumbnail (8px radius) left. Title 16px weight 400, #1a1c20. Price 16px weight 700, #1a1c20. Location + time 13px weight 400, #868b94."
- "Build a primary CTA button: #ff6600 background, white text, 16px weight 700, min-height 52px, 12px radius, full-width. Pressed: #e14d00. Disabled: #f3f4f5 bg, #d1d3d8 text."
- "Design a filter chip bar: horizontal scroll, 8px gap. Each chip: #f3f4f5 bg, #1a1c20 text, 13px weight 500, 32px height, 9999px radius, 12px h-padding. Selected: #1a1c20 bg, #ffffff text."
- "Create a bottom sheet: white bg, 20px top-left/right radius, shadow 0px 4px 16px rgba(0,0,0,0.12). Handle: 36px wide, 4px height, #dcdee3, centered. Content: 16px h-padding."
- "Design a navigation bar: white bg, sticky top, 1px bottom border rgba(0,0,0,0.08). Centered title 16px weight 700, #1a1c20. Left: back arrow icon #1a1c20. Right: optional action icon. Height 56px."

### Iteration Guide
1. Primary color is `#ff6600` only -- no secondary brand hue exists
2. All spacing snaps to 4px grid: 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64
3. Border-radius defaults: 8px buttons/inputs, 12px cards, 9999px chips/avatars
4. Gray-1000 (`#1a1c20`) for headings, gray-800 (`#555d6d`) for body, gray-700 (`#868b94`) for captions
5. Shadows are minimal: s1 for hover, s2 for cards, s3 for floating elements only
6. Mobile-first: design at 375px width, 16px gutter, then scale up
7. System font stack -- never embed a custom font for Karrot

---

## 10. Voice & Tone

Karrot speaks like a trustworthy neighbor who just moved in next door: warm, plain-spoken, low-friction, and allergic to anything that sounds like corporate marketing. The voice assumes two strangers are about to hand each other a used crib across a parking lot — it protects that trust with earnestness, removes barriers with `부담 없이` (without burden) framing, and stays in everyday Korean sentence endings (`-어요`, `-예요`) rather than the formal `-ㅂ니다`. English surfaces (Karrot in US/Canada/UK/JP) mirror this in plain, contraction-friendly English — *"Buy and sell for free with locals"*, not *"Discover premium local marketplace experiences"*.

| Context | Tone |
|---|---|
| CTAs | Short verb-first Korean (`판매하기`, `채팅하기`, `거래 완료`) / plain imperative English (`Sell`, `Chat`, `Apply`) |
| Empty states | One warm line explaining *why it's empty* + one low-pressure suggestion. Never `데이터가 없습니다`. |
| Error messages | Specific, blameless, actionable. Prefer `다시 시도해 주세요` over `오류가 발생했습니다`. |
| Success toasts | Past-tense single sentence (`거래가 완료되었어요`). Quiet, not celebratory. |
| Community guidelines | Second-person, direct, grounded in neighborhood norms. Reads like a house rule, not a ToS. |
| Trust & safety | Calm, factual, never fearmongering. The goal is to keep people transacting, not to scare them off. |
| Local / hyperlocal copy | Always name the neighborhood (`강남구 역삼동`, `Manhattan`). Proximity is the brand — surface it. |
| Onboarding | One screen, one idea, one action. No bullet lists. No feature tours. |

**Forbidden phrases.** `불편을 드려 죄송합니다`, `죄송하지만`, `데이터가 없습니다`, `오류가 발생했습니다`, `혁신적인`, English boilerplate like `Oops, something went wrong` or `We apologize for the inconvenience`. Marketing-speak bans: `amazing deals`, `best-in-class`, `revolutionary`, `world-class`. Emoji are permitted sparingly in community chat and stickers, but never in error messages, never in trust/safety copy, and never in financial/payment confirmations.

**Voice samples.**

- `Buy and sell for free with locals` — homepage hero, English. <!-- verified: https://www.karrotmarket.com, 2026-04 -->
- `Welcome to your new neighborhood buy & sell` — homepage sub-hero. <!-- verified: https://www.karrotmarket.com, 2026-04 -->
- `It's easier in the apps` / `Download the Karrot app` — app-install nudge. <!-- verified: https://www.karrotmarket.com, 2026-04 -->
- `동네를 여는 문, 당근` — brand narrative tagline (corporate site). <!-- verified: https://about.daangn.com, 2026-04 -->
- `로컬의 모든 것을 연결해, 동네의 숨은 가치를 깨워요` — mission statement. <!-- cited: about.daangn.com mission page, 2026-04 -->
- `<neighborhood>에서 <product>을(를) 찾고 있어요` — illustrative search/wanted-listing pattern (variable placeholders). <!-- illustrative: not verified as live Karrot copy -->
- `이 거래, 직접 만나서 할까요?` — illustrative in-chat nudge for face-to-face meeting (hyperlocal behavior). <!-- illustrative: not verified as live Karrot copy -->

## 11. Brand Narrative

Karrot (당근, *daangn*) launched in 2015 in Pangyo, South Korea, founded by Kim Yong-hyun and Kim Jae-hyun — both former Kakao engineers who had watched the open-marketplace model (Korean e-commerce giants, nationwide shipping, anonymous counterparties) fail the one job users actually cared about: trust. Their founding bet was that secondhand transactions are not a logistics problem; they are a **neighborhood problem**. The first version of the app hard-capped transactions to a **6 km radius** (later relaxed to 10 km in KR/JP, up to 50 km in North America), on the theory that if you can walk to the meeting, you can look the other person in the eye ([Crunchbase](https://www.crunchbase.com/organization/daangn-market), [KED Global](https://www.kedglobal.com/korean-startups/newsView/ked202407040005)).

The product is built around that proximity constraint. Every listing surfaces the neighborhood name. Every match is geo-scoped. Every CTA assumes the buyer and seller will eventually stand in the same parking lot. The design language follows suit: a warm orange (`#ff6600`) that reads as a fresh carrot — not the corporate orange of enterprise dashboards, not the alarm orange of warnings — and no custom typeface, because the brand doesn't want a distinctive voice *around* user content; it wants user content to feel like the voice of the neighborhood itself. By early 2025, the company reports 40M+ cumulative registered users and 20M+ monthly active users across 1,400+ regions worldwide, with 227B KRW in cumulative funding ([about.daangn.com](https://about.daangn.com)). <!-- source: about.daangn.com company page, retrieved 2026-04, not independently re-verified -->

What Karrot refuses: the anonymity of nationwide marketplaces (eBay, Coupang), the impersonal aesthetics of enterprise commerce (data-heavy dashboards, filter-rich search UIs), and the gamified engagement loops of consumer social (streaks, badges, algorithmic feeds). The brand's mission, stated on its own corporate page, is *"로컬의 모든 것을 연결해 동네의 숨은 가치를 기술로 깨우는"* — connecting everything local, awakening hidden neighborhood value through technology ([medium.com/daangn](https://medium.com/daangn)). Orange is the accent because the brand is supposed to feel like one warm thing in an otherwise neutral room.

## 12. Principles

1. **Orange is scarce, on purpose.** `#ff6600` appears only on the primary CTA, active states, and a small set of brand moments. It never decorates, never fills a hero background, never tints a shadow. *UI implication:* at most one orange element per viewport in the primary flow; if a design has two orange CTAs competing on one screen, one must demote to neutral-weak.
2. **System font, because content is the brand.** No custom typeface. Pretendard on web, Apple SD Gothic Neo / system sans on native. The community's listings *are* the product; the UI's job is to disappear behind them. *UI implication:* never embed a branded webfont on Karrot-styled surfaces. If a heading needs weight, use weight 700, not a display face.
3. **Proximity is surfaced, always.** Every listing, chat, and search result shows a neighborhood name. Distance is not a filter you have to remember to toggle — it's a default. *UI implication:* every card, row, or summary that represents user content must show the neighborhood (`동` / `neighborhood`) as visible metadata, not hidden in a detail screen.
4. **Trust comes from calm, not from badges.** No padlock icons in the main flow, no "Verified Seller" trophies, no red "FRAUD WARNING" banners on first paint. Trust is communicated through consistency, neutrality, and the user's ability to meet in person. *UI implication:* trust-and-safety copy lives in body-weight neutral text; reserve red and warning-iconography for actual errors, not ambient advisories.
5. **Everything on the 4px grid.** The Seed Design system snaps all measurements to multiples of 4px. Off-grid values accrete into visual noise. *UI implication:* any padding, gap, or component height not in `{4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64}` must be justified in a comment or corrected.
6. **One accent. One system. One rhythm.** No secondary brand hue exists. No "Karrot Blue" for utility, no "Karrot Green" for success-branded promo. Semantic colors (`fg-critical`, `fg-informative`, `fg-positive`) exist — but they are utility, not brand. *UI implication:* if a design introduces a second brand-scale color, it has drifted off-system; reject or re-scope to semantic.
7. **Dark mode is a remap, not an inversion.** Semantic tokens point to different palette entries in dark mode; brand solid, critical, and informative are intentionally re-tuned rather than auto-computed. *UI implication:* never rely on `filter: invert()` or runtime HSL math. Every component reads from semantic tokens that already account for theme.
8. **Content-dense, chrome-light.** Users scan many listings in one session — a listing card is closer to an SMS than to a Pinterest tile. *UI implication:* target 3–4 listings visible per mobile viewport; chrome (borders, shadows, decorative space) must not push that below 3.

## 13. Personas

*Personas are fictional archetypes informed by publicly described Karrot user segments, not individual people.*

**지우 (Jiwoo), 31, Seoul.** New mother in 망원동. Uses Karrot 3–4 times a week — mostly to sell outgrown baby gear and pick up a stroller from someone two blocks away. Expects the app to open on the local listings feed in <1s and remember her neighborhood without re-asking. Will walk 10 minutes for a good deal; won't drive 20.

**민호 (Minho), 26, Busan.** Graduate student. Treats Karrot as a free Craigslist replacement for textbooks, a desk lamp, and the occasional IKEA handoff. Reads every listing's neighborhood tag before the title — if it's outside 동구, he scrolls past. Prefers chat over calls; never gives out his phone number.

**Sarah, 34, Toronto.** Just moved to Leslieville from Manhattan. Installed Karrot after a neighbor mentioned it because Facebook Marketplace *"felt like strangers on the internet, and this feels like people on my street."* Expects English-first UI, imperial units, and the ability to set the pickup spot to a coffee shop without drama.

**이선생님 (Mr. Lee), 58, Daegu.** Retired, primary Karrot user is his spouse who shares the account. Uses it for *동네생활* community posts ("who has a working lawnmower I can borrow") more than buying and selling. Trust in face-to-face transactions is his whole reason for tolerating an app at all.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no listings nearby)** | Warm one-line explanation (`아직 우리 동네에 올라온 물건이 없어요`) + one secondary CTA in neutral-weak (`내 동네 바꾸기` / change neighborhood). Never an illustration. Never `데이터가 없습니다`. |
| **Empty (filter cleared)** | Single line of `gray-700` caption (`조건에 맞는 물건이 없어요`). No button — user resets the filter themselves. |
| **Empty (new user, first paint)** | Single welcome sentence naming the user's detected neighborhood, plus a primary CTA `둘러보기` (browse) in Karrot Orange. No onboarding carousel. |
| **Loading (first paint)** | Skeleton blocks at `gray-200` matching the final listing-card layout — 1:1 thumbnail box, two text lines, one metadata line. Shimmer at 1.2s with 8% white highlight. |
| **Loading (infinite scroll)** | Bottom-of-list spinner in Karrot Orange, 24px diameter. No overlay. Existing cards stay visible. |
| **Loading (refresh / pull-to-refresh)** | Pull-down reveals a carrot-glyph progress indicator in Karrot Orange; never a generic iOS spinner on branded surfaces. |
| **Error (inline field)** | Input border becomes `#fa342c` (red-700) 2px, helper text below in red-700 13px. One actionable sentence (`동네를 다시 선택해 주세요`). |
| **Error (toast)** | `#1a1c20` (gray-1000) background, white 14px weight 400 text, 3s auto-dismiss. Bottom of screen with 16px inset above the tab bar. One sentence. No icon. |
| **Error (network / server-blocking)** | Full-screen centered message in `gray-1000` 16px weight 600, `gray-800` 14px weight 400 subline, retry button in Karrot Orange. No illustration. |
| **Success (inline flash)** | Brief 300ms flash of `#fff2ec` (carrot-100) behind the updated element, fading back to default. For routine confirmations (favorited, saved search). |
| **Success (transaction complete)** | Dedicated confirmation screen — not a toast. `#079171` (positive green) check icon top-center, one-line past-tense sentence (`거래가 완료되었어요`), and a single primary button `매너 평가 남기기` (leave manner rating). |
| **Skeleton** | `gray-200` blocks at exact final dimensions matching the listing-card layout (1:1 thumbnail, two text lines, one metadata line). Shimmer 1.2s with 8% white highlight. Never over the neighborhood-name metadata — that slot stays blank until resolved, so the UI never implies a location that hasn't been confirmed. |
| **Disabled** | Button background drops to `gray-200`, text to `gray-500`. No color inversion. Geometry stays identical so re-enable is frame-stable. |

## 15. Motion & Easing

**Durations** (named, not raw milliseconds):

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle flips, checkbox state changes |
| `motion-fast` | 150ms | Hover, focus, button press overlays, inline flash success |
| `motion-standard` | 250ms | The default — card taps, tab switches, bottom-sheet reveals |
| `motion-slow` | 350ms | Emphasized transitions — full-sheet presentations, success screens |
| `motion-page` | 300ms | Native-style push/pop between routes |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Sheets, toasts, screen pushes appearing |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals, pops, toast auto-close |
| `ease-standard` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Two-way transitions — expandable cards, tab content |

**Spring stance.** **Spring and overshoot easings are forbidden across Karrot surfaces.** The brand is a neighborhood marketplace between strangers; playful bounce undermines the calm trust the rest of the system works to establish. Money and goods change hands on this app — a button that wobbles on press reads as toy-like, and a success card that springs in reads as celebratory in a way Karrot deliberately isn't. The one licensed exception is the native-platform pull-to-refresh indicator, which inherits the OS's default spring because overriding it would feel *more* jarring than accepting it. Every other motion uses `ease-enter`, `ease-exit`, or `ease-standard`.

**Signature motions.**

1. **Listing-card tap.** Card compresses to 98% scale on press (`motion-fast / ease-standard`), releases on tap-up before navigation begins. Feedback is immediate; the route transition follows on `motion-page / ease-enter`.
2. **Bottom-sheet presentation.** Sheets rise from `y+40px` with `motion-standard / ease-enter` and a synchronized backdrop fade from `rgba(0,0,0,0)` to `rgba(0,0,0,0.5)` (`bg-overlay-muted`). Dismissal uses `motion-fast / ease-exit` — leaving is lighter than entering.
3. **Neighborhood switch.** When the user changes their 동 (neighborhood), the listings feed cross-fades over `motion-slow` rather than sliding — sliding would imply geographic direction, which is misleading (Korean neighborhoods aren't ordered on an axis).
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`. No exceptions. Cross-fades replace slides. Pull-to-refresh indicator simplifies to a static spinner. The app stays fully usable; just less kinetic.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 — Direct verification (WebFetch, 2026-04):
- https://www.karrotmarket.com — live English microcopy: "Buy and sell for free with locals",
  "Welcome to your new neighborhood buy & sell", "It's easier in the apps",
  "Download the Karrot app", category labels, CTAs, footer taxonomy.
- https://about.daangn.com — corporate site confirms mission tagline
  "동네를 여는 문, 당근", full mission statement "로컬의 모든 것을 연결해,
  동네의 숨은 가치를 깨워요", Jan-2025 metrics (40M+ registered users,
  20M+ MAU, 1,400+ regions, 227B KRW funding).
- https://medium.com/daangn — engineering publication confirms
  "로컬의 모든 것을 연결해 동네의 숨은 가치를 기술로 깨우는" as the tech-focused
  mission variant; 4.3K followers; categories (Engineering, AI/ML, Data, Search).

Tier 2 — Press / secondary (WebSearch, 2026-04):
- https://www.crunchbase.com/organization/daangn-market — confirms 2015 founding,
  co-founders Kim Yong-hyun and Kim Jae-hyun, both ex-Kakao.
- https://www.kedglobal.com/korean-startups/newsView/ked202407040005 —
  confirms initial 6 km transaction radius, later 10 km (KR/JP) and up to
  50 km (US/CA), Canada expansion (2024).

Base DESIGN.md (sections 1–9) is the source for token-level claims including
Karrot Orange #ff6600, Seed Design system, 4px grid, semantic token architecture,
shadow levels, and the system-font-only typography decision.

Re-verification status:
- The 40M+ registered / 20M+ MAU / 1,400+ regions / 227B KRW figures in §11 are
  carried from about.daangn.com as of the retrieval date. Numbers may drift;
  re-verify before quoting publicly. <!-- source: about.daangn.com, 2026-04,
  not independently cross-checked against financial filings -->
- The 6 km / 10 km / 50 km radius progression is widely reported in press
  (KED Global, Crunchbase, TechCrunch 2020/2021). Current product-level radius
  may differ; verify before using as a design constraint.

Not independently verified — widely documented public facts:
- Karrot (Danggeun Market Inc.) founded 2015 in Pangyo by Kim Yong-hyun and
  Kim Jae-hyun, both formerly at Kakao Corp.
- Korean "동네" (neighborhood / dong) is a real administrative unit; the
  characterization of nationwide Korean e-commerce incumbents is general
  industry knowledge, not a sourced Karrot statement.

Personas (§13) are fictional archetypes informed by publicly described Karrot
user segments (KR urban young adult, KR secondary-city student, NA expat,
KR retiree 동네생활 user). Any resemblance to specific individuals is unintended.

Interpretive claims (editorial, not documented Karrot statements):
- "Orange is the accent because the brand is supposed to feel like one warm
  thing in an otherwise neutral room" (§11 closing) — editorial reading of the
  design, not a sourced brand statement.
- The characterization of the Karrot orange as "fresh carrot, not corporate
  orange, not alarm orange" (§11) — editorial framing based on observed usage.
- The spring-forbidden stance (§15) — derived from the overall brand posture
  (trust between strangers, calm neutrality) as expressed in base §6 Shadow
  Philosophy and §7 Do's/Don'ts; not a documented Seed Design rule.
-->

