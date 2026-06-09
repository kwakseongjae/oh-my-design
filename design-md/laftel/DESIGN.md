---
id: laftel
name: "Laftel"
country: KR
category: consumer-tech
homepage: "https://laftel.net"
primary_color: "#816BFF"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=laftel.net&sz=256"
verified: "2026-06-03"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#816bff"
    primary-hover: "#6e58ff"
    brand: "#816bff"
    canvas: "#ffffff"
    foreground: "#121212"
    muted: "#8a8a8a"
    surface: "#242537"
    hairline: "#eeeeee"
    accent-wash: "#f0edff"
    error: "#f16361"
    on-primary: "#ffffff"
  typography:
    family: { sans: "Pretendard", mono: "Pretendard" }
    title-xxl: { size: 40, weight: 700, lineHeight: 1.5, use: "Largest display title" }
    title-xl:  { size: 32, weight: 700, lineHeight: 1.5, use: "Section title" }
    title-l:   { size: 28, weight: 700, lineHeight: 1.5, use: "Sub-section title" }
    title-m:   { size: 24, weight: 700, lineHeight: 1.5, use: "Card / block title" }
    title-s:   { size: 20, weight: 700, lineHeight: 1.5, use: "Small title" }
    text-l:    { size: 18, weight: 700, lineHeight: 1.5, use: "Large body / button label" }
    text-m:    { size: 16, weight: 400, lineHeight: 1.5, use: "Default body" }
    text-s:    { size: 14, weight: 700, lineHeight: 1.5, use: "Nav link, toast, small label" }
    text-xs:   { size: 13, weight: 400, lineHeight: 1.5, use: "Metadata" }
    text-xxs:  { size: 12, weight: 400, lineHeight: 1.5, use: "Fine print" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48 }
  rounded: { sm: 4, md: 4, lg: 8, full: 9999 }
  shadow:
    none: "none"
  components_harvested: true
  components:
    button-primary: { type: button, bg: "#816bff", fg: "#ffffff", radius: "4px", height: "56px", padding: "0 18px", font: "18px / 700", states: "hover #6e58ff", use: "Primary CTA (md)" }
    button-primary-sm: { type: button, bg: "#816bff", fg: "#ffffff", radius: "4px", height: "48px", padding: "0 20px", font: "16px / 700", use: "Primary CTA (sm)" }
    button-slight: { type: button, bg: "#f0edff", fg: "#816bff", radius: "4px", height: "56px", font: "18px / 700", states: "hover #d9d3ff", use: "Secondary action" }
    button-disabled: { type: button, bg: "#eeeeee", fg: "#8a8a8a", radius: "4px", height: "56px", use: "Disabled action" }
    nav-bar: { type: tab, bg: "#ffffff", fg: "#121212", height: "64px", padding: "0 50px", border: "1px solid #eeeeee", font: "14px / 700", active: "link color #816bff", use: "Desktop nav — active/hover link purple" }
    badge-notification: { type: badge, bg: "#816bff", fg: "#ffffff", radius: "9999px", height: "17px", font: "10px / 700", use: "Notification count badge" }
    toast: { type: toast, bg: "#242537", fg: "#ffffff", radius: "4px", padding: "16px 12px", height: "48px", font: "14px / 400", use: "Default toast (#000000 light / #242537 dark)" }
---

# Laftel

Korea's largest anime streaming platform — a dual-mode (light/dark) product built around a vivid purple identity, fan-curated discovery, and legal access to Japan's animation catalog.

## 1. Visual Theme & Atmosphere

Laftel's interface reads as a dark-first entertainment shell with a saturated violet accent, much like a premium streaming dashboard tuned for anime fans. The default experience leans toward deep charcoal backgrounds (#121212 / #000000) layered with a luminous purple (#816BFF) that signals interactivity, brand moments, and delight. In light mode the same purple pops against near-white surfaces (#FFFFFF / #F7F7F7), giving the product a punchy, youthful energy without the visual fatigue of a fully dark app. Thumbnail-heavy grids dominate layouts, so colour takes a supporting role — framing content rather than competing with it. The result is a streaming UI that feels simultaneously otaku-authentic and modern enough for a mainstream Korean OTT audience.

## 2. Color Palette & Roles

- **Purple 500 (Brand Primary):** `#816BFF` — primary CTA buttons, active nav links, badges, icons, brand foreground
- **Purple 50 (Highlight):** `#F0EDFF` — slight button background (light), hover highlight wash
- **Purple 100 (Slight 2):** `#D9D3FF` — hover state for slight buttons
- **Purple Gray 800 (Dark Surface):** `#242537` — dark toast background, dark button-purple-gray surface
- **Purple Gray 900 (Deep Nav):** `#191B2A` — light-mode button-purple-gray accent, deep overlay
- **Background 1 (Light):** `#FFFFFF` — primary surface in light mode
- **Background 1 (Dark):** `#121212` — primary surface in dark mode
- **Background 2 (Dark base):** `#000000` — deepest dark background
- **Background 3:** `#EEEEEE` / `#323232` — skeleton, subtle dividers (light/dark)
- **Foreground 1 (Light):** `#121212` — primary text on light
- **Foreground 1 (Dark):** `#F7F7F7` — primary text on dark
- **Foreground 2:** `#505050` / `#E2E2E2` — secondary text (light/dark)
- **Foreground 3:** `#8A8A8A` / `#ABABAB` — tertiary / metadata text
- **Border 1:** `#EEEEEE` / `#323232` — default hairline separator
- **Red 300:** `#F16361` — error / destructive state
- **Red 500:** `#FF1010` — critical alert

## 3. Typography Rules

- **Font family:** Pretendard (loaded via cdn.jsdelivr.net/gh/orioncactus/pretendard), falling back to -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Noto Sans KR"
- **Base size:** 16px on `html, body`
- **Scale (web):** title-xxl 40px · title-xl 32px · title-l 28px · title-m 24px · title-s 20px · text-l 18px · text-m 16px · text-s 14px · text-xs 13px · text-xxs 12px
- **Weight:** 700 is the only declared weight in component CSS (nav links, badges, buttons, labels); body inherits from Pretendard's default
- **Line height:** 1.5 globally via `:root`; badge label `line-height: 150%`
- **Letter spacing:** `normal` reset on all elements
- **Smoothing:** `-webkit-font-smoothing: antialiased`

## 4. Component Stylings

### Buttons

**Primary (md)**
- Background: `#816BFF`
- Text: `#FFFFFF`
- Border: none
- Radius: 4px
- Height: 56px
- Padding: 0 18px
- Font: 18px / 700
- Hover background: `#6E58FF`

**Primary (sm)**
- Background: `#816BFF`
- Text: `#FFFFFF`
- Border: none
- Radius: 4px
- Height: 48px
- Padding: 0 20px
- Font: 16px / 700

**Slight (secondary)**
- Background: `#F0EDFF`
- Text: `#816BFF`
- Border: none
- Radius: 4px
- Height: 56px
- Hover background: `#D9D3FF`

**Disabled**
- Background: `#EEEEEE`
- Text: `#D0D0D0`
- Radius: 4px
- Height: 56px

### Navigation Bar

**Desktop Nav**
- Background: `#FFFFFF` / `#121212` (themed via CSS var)
- Height: 4rem (64px)
- Padding: 0 3.125rem (50px)
- Active link color: `#816BFF`
- Default link color: `var(--foreground-1)`
- Hover link color: `#816BFF`
- Font: 0.875rem (14px) / 700
- Bottom border: 1px solid `var(--border-1)`

### Badge / Pill

**Notification Badge**
- Background: `#816BFF`
- Text: `#FFFFFF`
- Radius: 50%
- Height: 1.0625rem (17px)
- Font: 0.625rem (10px) / 700

### Toast

**Default Toast**
- Background: `#000000` (light) / `#242537` (dark)
- Text: `#FFFFFF`
- Radius: 0.25rem (4px)
- Padding: 1rem 0.75rem
- Min-height: 3rem (48px)
- Font: 0.875rem (14px)
- Transition: opacity 0.2s ease, transform 0.2s ease

---
**Verified:** 2026-06-03
**Tier 1 sources:** https://laftel.net (homepage HTML — full CSS custom properties block in inline `<style>`); https://laftel.net/_next/static/chunks/b3ccd441-eef37a2225571c0d.js (styled-components button/badge/nav definitions, full PURPLE scale, font scale); https://laftel.net/_next/static/css/4e57b743a29280e8.css (Pretendard font import); https://apps.apple.com/kr/app/라프텔/id1169440095 (App Store listing, brand copy)
**Tier 2 sources:** getdesign.md/laftel — NOT LISTED ("No designs found for 'laftel'"). refero ?q=Laftel — no result (page returned empty listing, 4201 bytes).
**Conflicts unresolved:** none

## 5. Layout Principles

- **Grid:** Thumbnail-first horizontal carousels and vertical grid layouts; desktop max-width ~1920px reference in font-size calc
- **Breakpoints:** desktop ≤1280px · tablet ≤1024px · tabletVertical ≤768px · mobile ≤480px · mobileLandscape (orientation: landscape, max-height 576px)
- **Nav hidden below:** 1024px (`.ksUJkh` display:none at tablet)
- **Content padding:** 3.125rem (50px) horizontal on desktop nav; responsive fluid via vw-based font-size calc
- **Spacing rhythm:** base unit 0.5rem (8px); typical component margin 1rem (16px), 1.5rem (24px), 2.5rem (40px)

## 6. Depth & Elevation

- **Hairline separator:** `box-shadow: 0 1px 0 0 var(--border-1)` on sticky nav
- **Basic shadow:** `rgba(0,0,0,0.25)` light / `rgba(0,0,0,0.5)` dark
- **Dropdown shadow:** `rgba(0,0,0,0.16)` light / `rgba(0,0,0,0.6)` dark
- **Scroll thumb:** 4px transparent border, `background-clip: content-box`, `border-radius: 8px`
- **Dim overlays:** `rgba(0,0,0,0.5)` (dim-1 light) · `rgba(0,0,0,0.7)` (dim-1/2 dark)
- **Skeleton:** gradient shimmer `linear-gradient(to right, --background-3 0%, --background-1 25%, --background-3 50%)`, animated at 1.5s infinite linear

## 7. Do's and Don'ts

### Do
- Use `#816BFF` (PURPLE500) for all primary CTAs and interactive accent moments
- Apply the purple-50 wash (`#F0EDFF`) for non-primary ("slight") button backgrounds
- Use Pretendard at 700 weight for all button labels and nav text
- Respect the dual-mode token system — always reference CSS custom properties (`--foreground-1`, `--background-1`) rather than hardcoded colours in themed contexts
- Use 4px border-radius on buttons and toast components for brand consistency
- Ensure scrollbars use the 8px border-radius thumb treatment

### Don't
- Mix hardcoded hex literals in themed components — breaks dark mode
- Use border-radius values other than 4px (buttons), 8px (scrollbar/card accent), or 50% (circular badges) without design intent
- Replace Pretendard with a generic sans-serif — the Korean glyph quality matters for this audience
- Use purple accent on disabled states — disabled buttons must use `#EEEEEE` / `#D0D0D0`
- Increase font-weight above 700 — the scale tops out here in the design system

## 8. Responsive Behavior

- Desktop (>1280px): Full horizontal nav with 50px side padding; wide carousels; large hero at 51.375em height; font-size calculated from 1920px reference width
- Tablet (768px–1024px): Nav collapses to mobile; layout adapts fluid grids; hero resizes
- Mobile (≤480px): Font-size recalculated from 360px reference width via `calc(16vw / 360 * 100)`; mobile-specific image proportions; thumbnail grids shift to 2-column
- Touch devices: `-webkit-tap-highlight-color: transparent`; `touch-action: pan-y` on sliders; `maximum-scale=1` in viewport to prevent iOS zoom

## 9. Agent Prompt Guide

When generating Laftel-style UI:
- **Palette:** primary = `#816BFF`; slight surface = `#F0EDFF`; deep dark = `#121212`; toast dark = `#242537`
- **Buttons:** 4px radius, 48px (sm) or 56px (md) height, font-weight 700, Pretendard
- **Mode:** always implement both light and dark variants via CSS custom properties
- **Typography:** Pretendard, 16px base, scale: 12/13/14/16/18/20/24/28/32/40px
- **Transitions:** colour changes at 0.4s, opacity/transform at 0.2s ease
- **Skeleton:** shimmer gradient from `--background-3` to `--background-1` at 1.5s linear infinite
- **Layout:** breakpoints at 480/768/1024/1280px; horizontal padding 50px desktop, fluid below

## 10. Voice & Tone

**Three adjectives:** Fan-fluent, warm-direct, quietly authoritative

| Dimension | Do | Don't |
|---|---|---|
| Register | Speak as a knowledgeable fellow fan ("덕후") | Sound like a corporate broadcast | 
| Sentence length | Short, punchy; one idea per sentence | Long nested clauses |
| Vocabulary | K-anime vernacular where natural; plain Korean elsewhere | Jargon-heavy or overly formal keigo-style |
| Punctuation | Light use of `:D` emoticons in taglines only | Exclamation marks on every line |

**Voice samples (illustrative):**
- *Illustrative:* "세상 모든 애니를 라프텔에서 :D" — the brand's own App Store tagline; warm, inclusive, fan-to-fan energy.
- *Illustrative:* "추억의 애니부터 분기별 신작까지, 무제한 스트리밍 가능한 곳은 오직 라프텔." — confident authority without boasting; the "only Laftel" claim lands as fact, not hype.
- *Illustrative:* "뭘 볼지 모를 땐, 덕후가 직접 엄선한 애니 명작들을 시청!" — peer credibility; the recommendation comes from fans, not algorithms.

## 11. Brand Narrative

Laftel was founded in October 2014 by Kim Beom-jun, a Yonsei University student who saw that Korea's vast appetite for Japanese animation was being served almost entirely by illegal download sites. The name "라프텔(Laftel)" is a play on "마지막 화까지 봤다" — "I watched all the way to the last episode" — enshrining the complete, satisfying anime experience in the brand itself. The service launched streaming in May 2017, building on a personalization-first model: new users rate a set of anime to calibrate their taste, and the platform surfaces recommendations through both AI-driven signals and hand-curated selections by in-house "덕후" (hardcore fans).

In 2019 Ridi, Korea's leading digital content platform, acquired Laftel, bringing engineering scale and content licensing resources. In November 2022 an Aniplus-led consortium (Aniplus — Korea’s largest anime broadcaster — with Keistone Partners) acquired a controlling 87.75 % stake, giving Laftel deeper ties to broadcast rights and a clearer path to simulcast programming. Through each ownership transition the product's core mission remained stable: make legal anime viewing so convenient and affordable that piracy becomes the inferior choice.

Today Laftel offers SVOD (unlimited streaming), TVOD (pay-per-episode rental/purchase), and AVOD (ad-supported free tier), available across web, iOS, Android, smart TV, and Chromecast. The Laftel Store extends the brand into anime merchandise, while original productions — including webtoon adaptations like "Super Secret" — signal ambitions beyond licensing.

## 12. Principles

1. **Legal first, fan always.** Every content deal is a legitimate contract; the product's legitimacy is a brand promise, not just a legal formality. *UI implication:* never use dark-pattern flows to upsell; membership upgrade prompts must be clear and skippable.

2. **Personalization over browsing.** The preference-test onboarding and tag-based discovery are not features — they are the product. *UI implication:* recommendation surfaces should occupy prime real estate and update dynamically; generic "Popular" lists are a fallback, not the default.

3. **Complete the series.** The name encodes the ideal outcome: watch every episode. *UI implication:* auto-play next episode is on by default; progress tracking, episode skips (OP/ED), and continue-watching rails are first-class features.

4. **Fan credibility at every touch-point.** Editorial selections are attributed to "덕후" curators, not anonymous algorithms. *UI implication:* show curator handles or "staff pick" labels on themed collections; avoid anonymous "Recommended for you" copy.

5. **Dual-mode comfort.** Fans watch at night; the dark theme must be as polished as the light theme. *UI implication:* all design tokens must resolve correctly in both modes; never hard-code colours in theme-sensitive components.

## 13. Personas

*Illustrative — Classic Fan (클래식 덕후):* Tomoyuki, 32, IT engineer in Seoul. Has watched anime since high school; wants a reliable legal home for classics (2000s titles) that free-tier competitors don't carry. Values breadth of catalog and tag-based search. Pays for the annual plan without hesitation.

*Illustrative — Seasonal Watcher (분기 팔로워):* Ji-yeon, 24, university student. Follows 3–5 simulcast series each season. She checks Laftel every Monday for the latest episode. Skips OP/ED religiously. Sensitive to price; on the base plan, occasionally upgrades for a single season.

*Illustrative — New Discoverer (입문자):* Soo-min, 19, high school senior whose friends are into anime. Took the preference quiz and got hooked on a romance series. Mostly watches on mobile; uses the free AVOD tier but nudgeable toward membership via free-trial CTA.

*Illustrative — Goods Fan (굿즈 덕후):* Mi-rae, 28, designer. Subscribes mainly to access Laftel Store drops and exclusive merch. Browses the store tab weekly. For her, the streaming subscription is a loyalty perk on top of merchandise access.

## 14. States

- **Empty (no history):** Show the preference quiz CTA prominently — "어떤 애니를 좋아하세요? 취향 테스트로 시작해요" with a primary purple button; no blank grid.
- **Loading / Streaming buffer:** Purple spinner (32×32px, `#816BFF`, stroke-dasharray animated at 1.4s ease-in-out infinite) centered in the player.
- **Skeleton:** Shimmer gradient tiles (`linear-gradient(to right, --background-3 0%, --background-1 25%, --background-3 50%)`) at 1.5s linear infinite in place of thumbnails and text rows.
- **Error — Network:** Inline message "잠시 후 다시 시도해 주세요" with a secondary retry button (slight variant); red 300 (`#F16361`) icon accent.
- **Error — Unlicensed Content:** Overlay with dim-1 backdrop (`rgba(0,0,0,0.5)`) and a locked-icon illustration; "이 작품은 현재 지역 서비스 불가" copy; no CTA escalation.
- **Success — Subscription:** Toast notification slides up from bottom center: dark background (`#000000` light / `#242537` dark), white text, 4px radius, 0.2s ease slide + fade; auto-dismisses after ~3s.
- **Disabled:** Buttons use `#EEEEEE` background, `#D0D0D0` text; cursor: default; no hover effect.
- **Offline / Download available:** Download badge in purple; offline indicator swaps to muted foreground-3 (`#8A8A8A`).

## 15. Motion & Easing

**Duration scale:**
- Micro (state toggle, colour): 200ms
- Short (slide-in, fade): 400ms  
- Medium (skeleton shimmer): 1400ms–1500ms (loop)

**Easing:**
- Default transitions: `ease` (cubic-bezier(0.25, 0.1, 0.25, 1))
- Spinner stroke animation: `ease-in-out` at 1.4s infinite
- Skeleton shimmer: `linear` at 1.5s infinite
- Toast slide: `ease` on both `opacity` and `transform`

**Rules:**
- Colour and background-colour transitions run at 0.4s (`transition:color 0.4s`, `transition:background-color 0.4s,box-shadow 0.4s`) for interactive elements
- Opacity and positional transforms run at 0.2s ease for overlays and toasts
- Never animate layout-affecting properties (width, height) on the main content grid — use opacity/transform only
- Skeleton shimmer uses `background-size: 200% 100%` sweep; clip-path masks define thumbnail shapes
