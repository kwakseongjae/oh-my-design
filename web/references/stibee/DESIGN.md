---
id: stibee
name: Stibee
display_name_kr: 스티비
country: KR
category: marketing
homepage: "https://stibee.com"
primary_color: "#ff6464"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=stibee.com&sz=128"
verified: "2026-06-17"
added: "2026-06-17"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-17"
  note: "primary = live coral CTA (#ff6464) used on every primary action + as the only accent text color; ink near-black (#202124); shadowless system, separation by tinted grey surfaces (#f6f6f6) + thin hairlines (#ebebeb / #d9d9d9). Pretendard Variable throughout — no display/body font split."
  colors:
    primary: "#ff6464"
    primary-tint: "#fff8f8"
    ink: "#202124"
    body: "#414245"
    muted: "#606165"
    muted-alt: "#747579"
    canvas: "#ffffff"
    surface: "#f6f6f6"
    surface-alt: "#ebebeb"
    hairline: "#d9d9d9"
    on-primary: "#ffffff"
  typography:
    family: { sans: "Pretendard Variable" }
    display-hero:  { size: 44, weight: 600, lineHeight: 1.40, tracking: -0.4, use: "Hero headline, Pretendard SemiBold" }
    section:       { size: 42, weight: 600, lineHeight: 1.40, use: "Pricing / page H1" }
    feature-title: { size: 36, weight: 600, lineHeight: 1.40, use: "Feature section headings" }
    subhead:       { size: 16, weight: 400, lineHeight: 1.40, use: "Hero sub-copy, feature descriptions" }
    body:          { size: 14, weight: 400, lineHeight: 1.50, use: "Standard reading / UI text" }
    nav:           { size: 16, weight: 400, lineHeight: 1.40, use: "Top nav items" }
    button:        { size: 14, weight: 400, lineHeight: 1.40, use: "Header CTA / compact button label" }
  spacing: { xs: 4, sm: 9, md: 14, base: 20, lg: 21, xl: 26, xxl: 48 }
  rounded: { sm: 4, md: 10, full: 9999 }
  shadow:
    none: "none"
  components:
    button-primary: { type: button, bg: "#ff6464", fg: "#ffffff", radius: "4px", height: "52px", padding: "0 26px", font: "16px / 400 Pretendard Variable", use: "Primary CTA (무료로 시작하기)" }
    button-primary-compact: { type: button, bg: "#ff6464", fg: "#ffffff", radius: "4px", height: "42px", padding: "0 20px", font: "14px / 400 Pretendard Variable", use: "Header app-start CTA" }
    button-outline: { type: button, bg: "#ffffff", fg: "#ff6464", border: "1px solid #ff6464", radius: "4px", height: "52px", padding: "12px 20px", font: "16px / 400 Pretendard Variable", use: "Secondary CTA (영업팀에 문의하기)" }
    button-text: { type: button, fg: "#ff6464", radius: "4px", font: "16px / 400 Pretendard Variable", use: "Inline learn-more link (자세히 알아보기)" }
    nav-item: { type: tab, fg: "#202124", font: "16px / 400 Pretendard Variable", radius: "4px", padding: "0 20px", use: "Top nav item, active coral #ff6464", active: "text #ff6464" }
    input-text: { type: input, bg: "#f6f6f6", fg: "#202124", border: "1px solid #f6f6f6", radius: "4px", height: "50px", padding: "9px 14px 10px", font: "14px Pretendard Variable", use: "Subscribe/form input, focus hairline #d9d9d9" }
    plan-card: { type: card, bg: "#ffffff", border: "1px solid #ebebeb", radius: "10px", shadow: "none", use: "Pricing plan card (white, hairline, footer band #f6f6f6)" }
    plan-card-footer: { type: card, bg: "#f6f6f6", radius: "10px", padding: "21px 20px", use: "Plan-card footer band, bottom-rounded 10px" }
  components_harvested: true
---

# Design System Inspiration of Stibee

## 1. Visual Theme & Atmosphere

Stibee (스티비) is Korea's most design-literate email-marketing platform — a newsletter-and-campaign SaaS that spun out of the social-impact design studio Slowalk, and the editorial sensibility shows. The marketing site is built on a pure white canvas (`#ffffff`) with deep near-black text (`#202124` — never pure black) and exactly one saturated brand color: a warm, friendly coral (`#ff6464`). That coral is rationed with discipline — it appears only on primary actions, the outlined secondary CTA's stroke, and inline learn-more links — so the entire page trains the eye to read coral as "this is the next step." The result is calm, warm, and approachable: software for marketers and makers, not an enterprise console.

The typographic personality is quietly Korean-modern. Unlike fintech peers that split a heavy display face from a light body face, Stibee runs a single typeface — **Pretendard Variable** — across the whole system, leaning on weight rather than family for hierarchy. Headlines sit at SemiBold (weight 600): 44px on the hero with slightly tight `-0.4px` tracking, 42px on the pricing H1, 36px on feature section titles. Body and UI text drop to weight 400 at a dense 14px, with 16px reserved for nav items and hero sub-copy. The hangul-first sizing keeps long Korean feature descriptions legible without shouting.

What distinguishes Stibee is its restraint with depth. Live inspection found `box-shadow: none` across the nav, hero, feature headings, plan cards, and inputs — this is a deliberately shadowless system. Separation comes from flat tinted surfaces (`#f6f6f6` grey fills and a soft coral-tinted `#fff8f8` subscribe band) and thin hairlines (`#ebebeb` on cards, `#d9d9d9` on form fields), never elevation. Geometry is gentle and consistent: a 4px radius is the workhorse for buttons, inputs, and nav (×46 in the radius scan), stepping up to 10px for content cards. Nothing is pill-shaped, nothing is sharp — the corners read soft and editorial, matching the warm coral and the maker-friendly voice.

**Key Characteristics:**
- Single saturated coral (`#ff6464`) reserved for primary CTAs, the secondary-button stroke, and inline links — the system's only "action" color
- Pretendard Variable everywhere — one typeface, hierarchy by weight (600 display / 400 body), no display/body font split
- Near-black ink (`#202124`) for text instead of pure black — warm, trustworthy
- Shadowless system — `box-shadow: none` confirmed across nav/hero/cards/inputs; depth via tint + hairline
- Flat tinted surfaces (`#f6f6f6`) and a coral-tinted subscribe band (`#fff8f8`) for section separation
- Soft 4px radius as the workhorse (buttons/inputs/nav), 10px for cards — gentle, never pill, never sharp
- Cool-grey neutral ladder (`#414245` → `#606165` → `#747579`) for text hierarchy
- Thin hairlines (`#ebebeb` cards, `#d9d9d9` form fields) as the primary separation device

## 2. Color Palette & Roles

### Primary
- **Stibee Coral** (`#ff6464`): Primary brand color and CTA background. The warm coral on every "무료로 시작하기" button — the system's single "action" color, also used as the outlined-button stroke and inline link text.
- **Coral Tint** (`#fff8f8`): A barely-there warm pink wash used as the background of the newsletter-subscribe band — the one place the coral softens into a surface rather than an action.

### Ink & Text Hierarchy
- **Ink** (`#202124`): Primary text, headings, nav labels, strong UI text. A very dark warm-grey-black used instead of pure `#000000` for a softer, premium read. By far the dominant text color (×832 in the scan).
- **Body Slate** (`#414245`): Secondary body copy and quieter labels.
- **Muted Slate** (`#606165`): Hero sub-copy, feature descriptions, tertiary text.
- **Muted Alt** (`#747579`): Fine print, captions, metadata, lowest-emphasis labels.

### Neutral & Surface
- **Pure White** (`#ffffff`): Page background, card surfaces, text on coral.
- **Surface Grey** (`#f6f6f6`): Cool-grey tinted fill for input backgrounds, plan-card footer bands, and segmented sections — the workhorse non-white surface.
- **Surface Alt** (`#ebebeb`): A slightly deeper grey used as the card hairline border and for subtle dividers.
- **Hairline** (`#d9d9d9`): Thin form-field / divider border for higher-contrast separation.
- **On-Primary** (`#ffffff`): White text and icons on the coral CTA.

## 3. Typography Rules

### Font Family
- **Sans (all roles)**: `Pretendard Variable` (with `Pretendard`, `Lato`, `Noto Sans KR` fallbacks) — the single document typeface used for headlines, body, nav, and buttons alike. Hierarchy is carried by weight, not by switching families.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Pretendard Variable | 44px (2.75rem) | 600 | 1.40 (61.6px) | -0.4px | Hero headline, SemiBold |
| Page / Section H1 | Pretendard Variable | 42px (2.63rem) | 600 | 1.40 | normal | Pricing / page titles |
| Feature Title | Pretendard Variable | 36px (2.25rem) | 600 | 1.40 | normal | Feature section headings |
| Sub-head / Lead | Pretendard Variable | 16px (1.00rem) | 400 | 1.40 | normal | Hero sub-copy, feature descriptions |
| Nav | Pretendard Variable | 16px (1.00rem) | 400 | 1.40 | normal | Top navigation items |
| Body | Pretendard Variable | 14px (0.88rem) | 400 | 1.50 (21px) | normal | Standard reading / UI text |
| Button | Pretendard Variable | 14px (0.88rem) | 400 | 1.40 | normal | Header / compact CTA labels |

### Principles
- **One typeface, hierarchy by weight**: Pretendard Variable carries everything. SemiBold (600) signals "headline," Regular (400) signals "content." There is no second display face to learn.
- **SemiBold headlines, not heavy**: Display sits at weight 600 — confident but not aggressive, matching the warm, approachable brand voice. No 800/900 "shout" weights.
- **Hangul-first sizing**: Body sits at a deliberate 14px / 1.50 line-height — dense enough for information-rich Korean feature copy, generous enough to stay legible.
- **Restrained tracking**: Only the hero tightens slightly (`-0.4px` at 44px); everything else runs at normal tracking. The system avoids dramatic typographic gestures.

## 4. Component Stylings

### Buttons

**Primary CTA**
- Background: `#ff6464`
- Text: `#ffffff`
- Radius: 4px
- Padding: 0px 26px
- Font: 16px Pretendard Variable weight 400
- Height: 52px
- Use: Primary call-to-action throughout ("무료로 시작하기") — the system's single primary action

**Primary CTA (Compact / Header)**
- Background: `#ff6464`
- Text: `#ffffff`
- Radius: 4px
- Padding: 0px 20px
- Font: 14px Pretendard Variable weight 400
- Height: 42px
- Use: Persistent app-start CTA in the sticky header

**Outlined Secondary**
- Background: `#ffffff`
- Text: `#ff6464`
- Border: 1px solid `#ff6464`
- Radius: 4px
- Padding: 12px 20px
- Font: 16px Pretendard Variable weight 400
- Height: 52px
- Use: Lower-priority action on the pricing page ("영업팀에 문의하기")

**Inline Text Link**
- Text: `#ff6464`
- Radius: 4px
- Font: 16px Pretendard Variable weight 400
- Height: 38px
- Use: Learn-more links under each feature block ("자세히 알아보기")

### Inputs & Forms

**Default Text Input**
- Background: `#f6f6f6`
- Text: `#202124`
- Border: 1px solid `#f6f6f6`
- Radius: 4px
- Padding: 9px 14px 10px
- Font: 14px Pretendard Variable
- Height: 50px
- Use: Subscribe / form fields ("이메일 주소", "이름") — filled grey field, borderless until focus
- Focus: 1px solid `#d9d9d9` hairline

### Cards & Containers

**Plan Card**
- Background: `#ffffff`
- Border: 1px solid `#ebebeb`
- Radius: 10px
- Shadow: none
- Use: Pricing plan card — white surface, thin hairline, no elevation

**Plan Card Footer Band**
- Background: `#f6f6f6`
- Radius: 10px
- Padding: 21px 20px
- Use: Bottom-rounded grey band inside the plan card (price / CTA zone)

### Navigation
- Background: `#ffffff`
- Text: `#202124`
- Font: 16px Pretendard Variable weight 400
- Radius: 4px
- Padding: 0px 20px
- Height: 42px nav items
- Active: coral `#ff6464` text on the active item
- Use: Top horizontal nav ("기능", "가격", "자료", "도움말", "로그인") + coral header CTA right-aligned

---

**Verified:** 2026-06-17 (omd:add-reference CREATE — Tier 1 live inspect, 2 brand-owned surfaces)
**Tier 1 sources:** https://stibee.com, https://stibee.com/pricing, https://blog.stibee.com
**Tier 2 sources:** getdesign.md/stibee — NOT FOUND; styles.refero.design/?q=stibee — no Stibee entry (searched + scrolled)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: ~4px, loosely doubling
- Scale (measured): 4px, 9px, 14px, 20px, 21px, 26px, 48px
- Notable: input padding lands at an asymmetric `9px 14px 10px`; the primary CTA carries generous 26px horizontal padding for a comfortable tap target

### Grid & Container
- Centered single-column hero with the 44px SemiBold headline as the anchor, sub-copy and coral CTA stacked below
- Feature sections alternate: a 36px feature title, a short description, and an inline coral "자세히 알아보기" link, often paired with a product screenshot
- Pricing uses a multi-column row of white plan cards (10px radius, `#ebebeb` hairline) each closing in a grey footer band
- A coral-tinted (`#fff8f8`) full-width subscribe band anchors the page foot

### Whitespace Philosophy
- **Breathing room over density**: despite being a feature-rich SaaS, the marketing surface is airy, with generous vertical rhythm between feature blocks.
- **Flat segmentation**: sections separate by background tint (`#f6f6f6` / `#fff8f8` vs `#ffffff`) and hairlines, not by shadow or heavy borders.
- **Single-accent rhythm**: the repeated coral CTA and coral inline links create a consistent "next step" cadence down the page.

### Border Radius Scale
- Small (4px): buttons, inputs, nav items — the workhorse
- Medium (10px): plan cards, content containers
- Full (9999px / 50%): avatars and round icon chips only

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text, most surfaces |
| Tint (Level 1) | `#f6f6f6` (or `#fff8f8` coral) background shift | Card/section separation without elevation |
| Hairline (Level 2) | `1px solid #ebebeb` (cards) / `#d9d9d9` (fields) | White card outlines, form fields, dividers |

**Shadow Philosophy**: Stibee is a near-shadowless system. Live inspection found `box-shadow: none` across the nav, hero, feature headings, plan cards, and inputs. Depth and grouping are communicated entirely through flat tinted surfaces (`#f6f6f6`, coral `#fff8f8`) and thin hairlines (`#ebebeb`, `#d9d9d9`). This is a deliberate modern-flat choice that keeps the marketing UI feeling clean, warm, and editorial — closer to a well-set magazine page than a layered SaaS dashboard. When emphasis is needed, the system reaches for the coral (`#ff6464`), never elevation.

## 7. Do's and Don'ts

### Do
- Reserve coral (`#ff6464`) for primary CTAs, the outlined-button stroke, and inline links — keep it the single "action" color
- Use Pretendard Variable for everything; signal hierarchy with weight (600 headlines, 400 body)
- Use near-black ink (`#202124`) for text instead of pure black
- Separate sections with flat tinted surfaces (`#f6f6f6`, coral `#fff8f8`) and `#ebebeb` / `#d9d9d9` hairlines, not shadows
- Keep a soft 4px radius on buttons, inputs, and nav; 10px on cards
- Apply only slight negative tracking on the hero (-0.4px) and normal tracking elsewhere
- Use the grey `#f6f6f6` fill for input backgrounds (borderless until focus)

### Don't
- Use drop shadows for elevation — Stibee is a flat, shadow-free system
- Spread coral across many elements — it dilutes the single-action signal
- Use pure black (`#000000`) for text — reserve near-black ink `#202124`
- Introduce a second display typeface — Pretendard Variable owns every role
- Use pill or sharp-square geometry — corners are soft (4px / 10px), never fully rounded on actions
- Mix in a second saturated accent color — coral is the only brand hue
- Set headlines in heavy 800/900 weights — display is SemiBold (600), warm not aggressive

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline compresses, plan cards stack |
| Tablet | 640-1024px | Moderate padding, 2-up feature/plan cards |
| Desktop | 1024-1440px | Full layout, centered hero, multi-column plan + feature rows |

### Touch Targets
- Primary CTA at 52px height with 26px horizontal padding — comfortably tappable
- Header compact CTA at 42px height for the persistent sticky nav
- Inputs at 50px height — generous for form entry
- Nav items at 42px height with 20px horizontal padding

### Collapsing Strategy
- Hero: 44px headline scales down on mobile, weight 600 maintained
- Plan cards: multi-column → stacked single column, 10px radius preserved
- Feature blocks: title + description + inline link reflow to single column
- Tinted/white alternating bands maintain full-width treatment

### Image Behavior
- Product screenshots and illustrations carry no shadow at any size, consistent with the flat system
- Cards maintain 10px radius across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Stibee Coral (`#ff6464`)
- Coral tint surface: (`#fff8f8`)
- Heading / strong text: Ink (`#202124`)
- Body text: Body Slate (`#414245`)
- Secondary text: Muted Slate (`#606165`)
- Fine print: Muted Alt (`#747579`)
- Background: Pure White (`#ffffff`)
- Tinted surface / input fill: Surface Grey (`#f6f6f6`)
- Card hairline: Surface Alt (`#ebebeb`)
- Field hairline: (`#d9d9d9`)

### Example Component Prompts
- "Create a hero on white background. Headline at 44px Pretendard Variable weight 600, line-height 1.40, letter-spacing -0.4px, color #202124. Sub-copy at 16px weight 400, color #606165. One coral CTA: #ff6464 background, white text, 4px radius, 0 26px padding, 52px height — '무료로 시작하기'."
- "Design a pricing plan card: white #ffffff background, 1px solid #ebebeb border, 10px radius, no shadow. Inside footer a grey #f6f6f6 band, 10px bottom radius, 21px 20px padding. Title 36px Pretendard Variable weight 600, #202124."
- "Build a subscribe form: grey #f6f6f6 input fill, 1px solid #f6f6f6 border (borderless look), 4px radius, 50px height, 14px Pretendard Variable, #202124 text. On focus show a #d9d9d9 hairline. Coral '구독하기' button (#ff6464, white text, 4px radius)."
- "Create top nav: white header. Pretendard Variable 16px weight 400 items, #202124 text, coral #ff6464 on active. Coral compact CTA right-aligned (#ff6464 bg, white text, 4px radius, 42px height)."

### Iteration Guide
1. Coral (`#ff6464`) is the single action color — primary CTAs, secondary stroke, inline links; don't spread it elsewhere
2. Pretendard Variable for every role; weight 600 for headlines, 400 for content
3. No shadows — separate with `#f6f6f6` / `#fff8f8` tint and `#ebebeb` / `#d9d9d9` hairlines
4. Soft geometry — 4px on buttons/inputs/nav, 10px on cards, never pill or sharp
5. Text color is `#202124` ink, never pure black
6. Inputs are grey-filled (`#f6f6f6`) and borderless until focus
7. Keep tracking near-normal; only the hero tightens slightly (-0.4px)

---

## 10. Voice & Tone

Stibee's voice is **warm, plain-spoken, and maker-friendly** — it treats email marketing not as a growth-hack arms race but as a craft of building a genuine relationship with readers. The hero line "고객이 좋아하는 이메일, 스티비로 보내세요" ("Send emails your customers actually love, with Stibee") sets the register: the goal isn't more sends, it's emails people *like*. Copy is encouraging and jargon-light — it explains what a feature does for you ("복잡한 코드는 잊고 콘텐츠에만 집중하세요" / "Forget the complex code and focus on the content") rather than boasting specs. The tone is confident but never pushy, reflecting the studio (Slowalk) heritage of design in service of the user.

| Context | Tone |
|---|---|
| Hero headlines | Warm, benefit-framed. "고객이 좋아하는 이메일" — about the reader's affection, not your reach. |
| Feature titles | Plain verb phrases. "드래그 한 번으로 이메일 만들기", "데이터 기반으로 성과 개선하기". |
| CTAs | Direct, low-pressure. "무료로 시작하기", "자세히 알아보기", "영업팀에 문의하기". |
| Feature descriptions | Reassuring, jargon decoded. Tells you what you can do, gently. |
| Trust / security copy | Calm and concrete. "고객 데이터를 안전하게 보호합니다" — states the protection plainly. |

**Voice samples (verbatim from live surfaces):**
- "고객이 좋아하는 이메일 스티비로 보내세요" — hero headline (reader-affection framing). *(verified live 2026-06-17)*
- "복잡한 코드는 잊고 콘텐츠에만 집중하세요." — feature copy (removes friction, reassuring). *(verified live 2026-06-17)*
- "성장 단계에 따라 요금제를 선택하세요" — pricing H1 (growth-staged, non-pressuring). *(verified live 2026-06-17 on /pricing)*

**Forbidden register**: aggressive growth-hacking hype, spammy urgency, undefined marketing/tech jargon left unexplained, exclamation-heavy salesmanship, fear-of-missing-out pressure.

## 11. Brand Narrative

Stibee (스티비) was launched in **2016** by **Slowalk** (슬로워크) — a Seoul creative studio known for design work in service of social value — as an in-house answer to a problem its own team kept hitting: existing email tools were either clumsy, code-heavy, or built for Western markets and awkward for Korean senders. Stibee's premise was to make email marketing something *anyone* could do well, without writing HTML, so that the quality of the relationship — not technical skill — decided whether an email was good. The product later operated as its own company while keeping the studio's design-first DNA.

The product matured into Korea's design-forward email-marketing and newsletter platform, processing — by its own stated figure — **over ten million email sends a day** ("매일 천만 건이 넘는 이메일 발송을 처리하며"), serving everyone from online shops and media startups to non-profits. Its drag-and-drop editor, subscriber segmentation, and A/B testing are framed around a single idea repeated across the site: send emails your customers actually love. The brand positions itself as the maker's ally — handling the deliverability, security (ISO 27001 / 27017 / 27018 certified), and data plumbing so creators can focus on the message.

What Stibee refuses, visible in its design: the cold, dense chrome of enterprise marketing-automation suites (no shadow-stacked dashboards, no aggressive conversion-funnel styling) and the spammy urgency of bulk-mail tooling. What it embraces: a single warm coral, one humane typeface, a shadowless and airy layout, and copy that decodes the craft of email rather than gatekeeping it.

## 12. Principles

1. **Emails people love, not just emails sent.** The product's whole framing is reader affection, not send volume. *UI implication:* lead with outcome-and-relationship language; never foreground vanity-metric bravado in the chrome.
2. **Anyone can make it beautiful.** Drag-and-drop over code; design quality should not require technical skill. *UI implication:* keep editing affordances visual and forgiving; remove friction before adding power.
3. **One action, one color.** Coral (`#ff6464`) means "do this." *UI implication:* reserve the saturated coral exclusively for primary CTAs, the secondary stroke, and inline links so the next step is never ambiguous.
4. **Flat and warm.** Editorial calm beats decorative depth. *UI implication:* no shadows; separate with tint and hairlines; keep corners soft and the page airy.
5. **Trust is infrastructure.** Security and deliverability are stated plainly, not hidden. *UI implication:* surface trust copy (certifications, encryption) in the same calm voice as the rest — concrete, never alarmist.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Stibee user segments (Korean online-shop marketers, newsletter creators, media/startup teams, non-profits), not individual people.*

**박윤정, 32, 서울.** A brand marketer at a small online shop who sends a weekly newsletter to pre-announce products and share behind-the-scenes stories. Values that Stibee lets her build a beautiful email by dragging blocks, no developer needed, so she can talk to fans who genuinely care about the brand.

**김도현, 28, 경기.** An independent newsletter creator building a paid audience. Uses subscriber segmentation and A/B testing to learn what readers open. Chose Stibee because it feels made for makers — warm, clear, and Korean-first — rather than a bolted-on Western enterprise tool.

**이서연, 41, 부산.** A communications lead at a non-profit who needs to reach donors reliably and safely. Cares about deliverability and the ISO data-security certifications, and appreciates that the trust story is stated plainly without scaring her with jargon.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no campaigns yet)** | White canvas. Single Ink (`#202124`) line at headline size explaining nothing's been sent, with one coral CTA to create the first email. No illustration clutter. |
| **Empty (no subscribers)** | Muted Slate (`#606165`) single line: no subscribers yet, plus a calm path to import or add. Honest, encouraging. |
| **Loading (list/report fetch)** | Skeleton rows on `#f6f6f6` tinted surface at final dimensions, 4px–10px radius. Flat pulse — no shadow shimmer, consistent with the shadowless system. |
| **Loading (send/compute)** | Inline progress within the action area; previous values stay visible; coral progress accent. |
| **Error (send failed)** | Inline message in Ink with a plain-language explanation and a retry. No bare "오류가 발생했습니다" — states what to do next, calmly. |
| **Error (form validation)** | Field-level message below the grey input in a warm tone; describes what's valid, not just "필수". |
| **Success (campaign sent)** | Brief inline confirmation in calm tone; next-step detail (delivery report) linked immediately below. No celebratory emoji. |
| **Skeleton** | `#f6f6f6` blocks at final dimensions, 4px/10px radius, flat pulse. |
| **Disabled** | Muted Alt (`#747579`) text on reduced-opacity surface; coral actions fade rather than turn grey, preserving the brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button press, focus |
| `motion-standard` | 200ms | Card/section reveal, sheet, dropdown |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — sheets, cards, menus |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and quiet — consistent with the flat, warm, editorial aesthetic. Buttons respond to press with a subtle opacity/scale shift; feature blocks and cards fade in from below at `motion-standard / ease-enter`. No bounce or spring — an email-marketing tool signals steady reliability, not playful flourish. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-17) via playwright getComputedStyle on https://stibee.com
and https://stibee.com/pricing:
- Hero H1 "고객이 좋아하는 이메일 스티비로 보내세요" — Pretendard Variable 44px / weight 600 / -0.4px / color rgb(32,33,36) #202124
- Feature H2 "드래그 한 번으로 이메일 만들기" / "데이터 기반으로 성과 개선하기" — 36px / 600 / #202124
- Primary CTA "무료로 시작하기" — bg rgb(255,100,100) #ff6464 / white text / radius 4px / 52px
- Outlined secondary "영업팀에 문의하기" (/pricing) — transparent / #ff6464 text / 1px solid #ff6464 / radius 4px
- Inputs "이메일 주소"/"이름" — bg rgb(246,246,246) #f6f6f6 / radius 4px / 50px
- Plan card (/pricing) — white / 1px solid rgb(235,235,235) #ebebeb / radius 10px / box-shadow none
- box-shadow: none across nav/hero/headings/cards/inputs (shadowless system confirmed)
- Page titles: "스티비 | 고객이 좋아하는 이메일 스티비로 보내세요", "스티비 | 가격"

Token-level claims (§1-9) are sourced from this live inspection.

Voice samples (§10) are verbatim from the live homepage (hero H1, feature copy) and
the /pricing H1.

Brand narrative (§11): Stibee (스티비) launched 2016 by the Seoul design studio Slowalk
(슬로워크) as an email-marketing service. The "매일 천만 건이 넘는 이메일 발송" figure and the
ISO 27001 / 27017 / 27018 certifications are stated verbatim on the live stibee.com
homepage (security section). Slowalk origin and 2016 launch are widely documented public
facts (e.g. Korean startup press); not quoted from a single verified Stibee statement in
this turn beyond what the homepage states.

Personas (§13) are fictional archetypes informed by publicly observable Stibee user
segments (Korean online-shop marketers, newsletter creators, non-profits). The name
"박윤정" echoes a customer-testimonial marketer credited on the homepage (오롤리데이 마케터,
박윤정); the persona is an illustrative archetype, not a claim about that individual.

Interpretive claims (e.g., "one action, one color", "flat and warm as a rejection of
enterprise marketing-automation chrome") are editorial readings connecting Stibee's
observed design to its positioning, not directly sourced Stibee statements.
-->
