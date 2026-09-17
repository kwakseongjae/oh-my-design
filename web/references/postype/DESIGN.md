---
id: postype
name: POSTYPE
display_name_kr: 포스타입
country: KR
category: consumer-tech
homepage: "https://www.postype.com"
primary_color: "#f33d4d"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=postype.com&sz=128"
verified: "2026-06-11"
added: "2026-06-11"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-11"
  note: "Action color is ink charcoal (#2c2c2f) on the filled sign-up CTA; brand accent is POSTYPE red (#f33d4d, ×21 bg occurrences); interactive links use blue (#3478ff); purple (#8956f8) is a minor decorative accent. Near-black body ink #141415. Flat, shadowless chrome on a white/light-grey canvas."
  colors:
    primary: "#f33d4d"
    action: "#2c2c2f"
    ink: "#141415"
    link: "#3478ff"
    accent-purple: "#8956f8"
    immersive: "#1e1b3a"
    body: "#62626a"
    muted: "#76767f"
    canvas: "#ffffff"
    surface: "#f2f2f3"
    surface-alt: "#f9f9fa"
    hairline: "#eaeaeb"
    on-dark: "#ffffff"
  typography:
    family: { sans: "Postype Sans-serif KR", fallback: "Apple SD Gothic Neo" }
    heading:    { size: 32, weight: 700, lineHeight: 1.25, use: "Page / brand headline, Postype Sans-serif KR Bold" }
    nav:        { size: 16, weight: 400, lineHeight: 1.5, use: "Top nav pill labels" }
    body:       { size: 16, weight: 400, lineHeight: 1.5, use: "Standard reading text" }
    button:     { size: 15, weight: 600, lineHeight: 1.5, use: "Login / sign-up CTA label" }
    button-sm:  { size: 13, weight: 600, lineHeight: 1.5, use: "Subscribe / inline action label" }
    caption:    { size: 14, weight: 400, lineHeight: 1.5, use: "Legal footer links, metadata" }
    chip:       { size: 11, weight: 400, lineHeight: 1.5, use: "Tag chips" }
  spacing: { xs: 4, sm: 6, md: 8, base: 12, lg: 16, xl: 24, xxl: 40 }
  rounded: { sm: 6, md: 8, chip: 24, full: 9999 }
  shadow:
    none: "none"
  components:
    button-signup: { type: button, bg: "#2c2c2f", fg: "#ffffff", radius: "8px", padding: "6px 16px", height: "40px", font: "15px / 600 Postype Sans-serif KR", use: "Primary filled CTA — 회원 가입 / sign up" }
    button-login: { type: button, bg: "#ffffff", fg: "#2c2c2f", border: "1px solid #eaeaeb", radius: "8px", padding: "6px 16px", height: "40px", font: "15px / 600 Postype Sans-serif KR", use: "Secondary outlined action — 로그인 / log in" }
    button-subscribe: { type: button, bg: "#f2f2f3", fg: "#2c2c2f", radius: "8px", padding: "4px 12px", height: "32px", font: "13px / 600 Postype Sans-serif KR", use: "Tinted-grey compact action — 구독 / subscribe" }
    nav-pill: { type: tab, fg: "#2c2c2f", radius: "8px", padding: "4px 12px", font: "16px / 400 Postype Sans-serif KR", active: "bg #f2f2f3", use: "Top nav item, active = tinted-grey fill" }
    tag-chip: { type: badge, bg: "#f2f2f3", fg: "#2c2c2f", radius: "24px", font: "11px / 400 Postype Sans-serif KR", use: "Content tag / category chip" }
    card-surface: { type: card, bg: "#f9f9fa", fg: "#141415", radius: "8px", use: "Tinted content card on light-grey surface, flat (no shadow)" }
    avatar: { type: avatar, bg: "#ffffff", radius: "9999px", height: "48px", use: "Circular channel/creator avatar" }
    footer-link: { type: listItem, fg: "#2c2c2f", font: "14px / 400 Postype Sans-serif KR", use: "Footer / legal navigation link" }
  components_harvested: true
---

# Design System Inspiration of POSTYPE

## 1. Visual Theme & Atmosphere

POSTYPE (포스타입) is Korea's creator-publishing and paid-serialization community, and its interface reads like a calm reading room built for taste rather than a noisy content feed. The canvas is pure white (`#ffffff`) layered with a soft cool-grey surface (`#f2f2f3`) and a second near-white tint (`#f9f9fa`) that quietly segment the page into airy reading zones. Text sits in a deep near-black charcoal (`#141415` for prose, `#2c2c2f` for UI labels) — never harsh pure black for the chrome — which gives the platform an editorial, content-first weight. The brand mark introduces a single saturated POSTYPE red (`#f33d4d`) used sparingly as the identity accent, while interactive links lean on a clear blue (`#3478ff`), so the eye learns to treat red as "the brand" and blue as "the link."

The typographic personality is unmistakably Korean-product: the system runs on the custom `Postype Sans-serif KR` face (falling back to `Apple SD Gothic Neo`), with headlines at weight 700 and a quiet 16px / weight 400 for nav and reading text. There is no flashy display weight or oversized hero type fighting for attention — POSTYPE puts the creator's content first and keeps its own chrome deliberately reserved. The result is a system that feels like infrastructure for reading and earning, not a marketing landing page.

What distinguishes POSTYPE from feed-driven peers is its restraint with depth and its commitment to soft, rounded chrome. Live inspection found `box-shadow: none` across the nav, buttons, and cards — separation comes from flat tinted surfaces (`#f2f2f3` / `#f9f9fa`) and thin `#eaeaeb` hairlines rather than elevation. Interactive chrome is consistently rounded: 8px on buttons and nav pills, a softer 24px on tag chips, full circles on avatars. The filled action button is charcoal (`#2c2c2f`), not the brand red — a quiet, premium choice that keeps red for identity and reserves a neutral, decisive ink for the primary tap target. An occasional deep indigo (`#1e1b3a`) and a minor purple (`#8956f8`) appear on immersive banners and decorative accents.

**Key Characteristics:**
- Custom `Postype Sans-serif KR` typeface for the entire UI — headlines at weight 700, body/nav at 400
- Near-black charcoal text (`#141415` prose, `#2c2c2f` UI) instead of pure black — editorial, content-first
- Single saturated brand red (`#f33d4d`) reserved for identity accents, not buttons
- Charcoal (`#2c2c2f`) as the primary filled-action color — quiet, decisive, premium
- Interactive blue (`#3478ff`) for links and counts — clearly separated from the brand red
- Flat depth: no shadows; tinted `#f2f2f3` / `#f9f9fa` surfaces + `#eaeaeb` hairlines do the separating
- Soft rounded geometry — 8px buttons/nav, 24px tag chips, full-round avatars
- Cool-grey text ladder (`#62626a` → `#76767f`) for secondary and muted hierarchy

## 2. Color Palette & Roles

### Brand & Accent
- **POSTYPE Red** (`#f33d4d`): The brand identity accent — logo, brand highlights, occasional emphasis. The single saturated hue, used sparingly so it stays distinctive (×21 background occurrences in the live scan, mostly small marks).
- **Accent Purple** (`#8956f8`): A minor decorative accent for badges and select promotional surfaces.
- **Immersive Indigo** (`#1e1b3a`): Deep indigo background for immersive banner blocks and dark promotional cards.

### Action & Interactive
- **Action Charcoal** (`#2c2c2f`): Primary filled-button background (sign-up CTA) and the default UI label color. The decisive, neutral "do this" color.
- **Link Blue** (`#3478ff`): Interactive links, counts, and inline actions. Reserved for navigation-style interactivity, distinct from the brand red.

### Text Hierarchy
- **Ink** (`#141415`): Primary reading text and headlines. A near-black with the faintest warmth.
- **UI Ink** (`#2c2c2f`): Nav labels, button text, footer links — the chrome's default text.
- **Body Slate** (`#62626a`): Secondary body copy, supporting labels.
- **Muted Slate** (`#76767f`): Tertiary text, captions, metadata, disabled-leaning labels.

### Neutral & Surface
- **Pure White** (`#ffffff`): Page background, white cards, text on dark/charcoal.
- **Surface Grey** (`#f2f2f3`): Cool-grey tinted surface for active nav pills, tag chips, and segmented blocks.
- **Surface Alt** (`#f9f9fa`): A softer near-white tint for alternating content cards and sections.
- **Hairline** (`#eaeaeb`): Thin borders, dividers, and outlined-button borders — the primary separation device in this shadow-free system.

## 3. Typography Rules

### Font Family
- **Primary**: `Postype Sans-serif KR` (with fallbacks `Apple SD Gothic Neo`, `Malgun Gothic`, `sans-serif`) — the custom POSTYPE face used across the entire UI, headlines through captions.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Heading | Postype Sans-serif KR | 32px (2.00rem) | 700 | 1.25 | Page / brand headline |
| Nav Link | Postype Sans-serif KR | 16px (1.00rem) | 400 | 1.5 (24px) | Top nav pill labels |
| Body | Postype Sans-serif KR | 16px (1.00rem) | 400 | 1.5 (24px) | Standard reading text |
| Button | Postype Sans-serif KR | 15px (0.94rem) | 600 | 1.5 | Login / sign-up CTA label |
| Button Small | Postype Sans-serif KR | 13px (0.81rem) | 600 | 1.5 | Subscribe / inline action |
| Caption | Postype Sans-serif KR | 14px (0.88rem) | 400 | 1.5 | Legal footer links, metadata |
| Chip | Postype Sans-serif KR | 11px (0.69rem) | 400 | 1.5 | Tag chips |

### Principles
- **One typeface, full hierarchy**: The custom `Postype Sans-serif KR` carries everything — there is no display/body font split. Hierarchy comes from weight (700 → 600 → 400) and size, not from swapping families.
- **Weight as emphasis**: Headlines at 700, interactive labels at 600, reading and nav text at 400. The CTA gains presence from weight 600, not from color or size.
- **Hangul-first sizing**: Body and nav sit at a comfortable 16px / 1.5 line-height — generous for hangul legibility in long-form creator content.
- **Reserved chrome**: The UI never out-sizes the creator's content; 32px is the largest chrome size, keeping POSTYPE's own type quiet.

## 4. Component Stylings

### Buttons

**Sign-up CTA (Primary)**
- Background: `#2c2c2f`
- Text: `#ffffff`
- Radius: 8px
- Padding: 6px 16px
- Height: 40px
- Font: 15px / 600 / Postype Sans-serif KR
- Use: Primary filled call-to-action — "회원 가입" (sign up)

**Login (Outlined)**
- Background: `#ffffff`
- Text: `#2c2c2f`
- Border: 1px solid `#eaeaeb`
- Radius: 8px
- Padding: 6px 16px
- Height: 40px
- Font: 15px / 600 / Postype Sans-serif KR
- Use: Secondary outlined action — "로그인" (log in)

**Subscribe (Tinted Compact)**
- Background: `#f2f2f3`
- Text: `#2c2c2f`
- Radius: 8px
- Padding: 4px 12px
- Height: 32px
- Font: 13px / 600 / Postype Sans-serif KR
- Use: Tinted-grey compact action — "구독" (subscribe)

### Tabs (Nav Pills)

**Top Nav Item**
- Text: `#2c2c2f`
- Radius: 8px
- Padding: 4px 12px
- Font: 16px / 400 / Postype Sans-serif KR
- Active: `#f2f2f3` tinted-grey fill
- Use: Top navigation items ("홈", "오픈 채널", "리퀘스트", "캐릭터톡", "보관함")

### Badges (Tag Chips)

**Tag Chip**
- Background: `#f2f2f3`
- Text: `#2c2c2f`
- Radius: 24px
- Font: 11px / 400 / Postype Sans-serif KR
- Height: 20px
- Use: Content tag / category chip

### Cards & Containers

**Tinted Surface Card**
- Background: `#f9f9fa`
- Text: `#141415`
- Radius: 8px
- Use: Tinted content card on light-grey surface, flat (no shadow)

### Avatars

**Channel Avatar**
- Background: `#ffffff`
- Radius: 9999px (full circle)
- Height: 48px
- Use: Circular creator / channel avatar

### List Items (Footer Links)

**Footer Link**
- Text: `#2c2c2f`
- Font: 14px / 400 / Postype Sans-serif KR
- Padding: 3px 8px
- Use: Footer and legal navigation ("이용 약관", "개인정보 처리방침", "청소년 보호 정책")

---
**Verified:** 2026-06-11
**Tier 1 sources:** https://www.postype.com, https://www.postype.com/@team, https://about.postype.com
**Tier 2 sources:** getdesign.md/postype (no designs found) | styles.refero.design/?q=postype (not listed) — none available
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Scale: 4px, 6px, 8px, 12px, 16px, 24px, 40px
- Notable: Nav pills and tinted actions land on a tight 4px 12px padding; primary buttons relax to 6px 16px — a compact, reading-room rhythm rather than oversized marketing chrome

### Grid & Container
- Persistent left sidebar / top nav with pill-style navigation items, content-feed body to the right
- Creator channels present a single-column reading column with metadata, subscribe, and tag chips
- Feature/intro sections alternate white (`#ffffff`) and tinted (`#f9f9fa` / `#f2f2f3`) full-width bands
- Cards group posts/series at 8px radius without elevation

### Whitespace Philosophy
- **Reading-room calm**: generous vertical rhythm around content blocks; the chrome recedes so creator work is the focus.
- **Flat segmentation**: sections separate by background tint (`#f2f2f3` / `#f9f9fa` vs `#ffffff`) and `#eaeaeb` hairlines, not by shadow.
- **Pill cadence**: repeated 8px nav pills and 24px tag chips create a soft, consistent horizontal rhythm.

### Border Radius Scale
- Small (6px): inner inline elements, count links
- Medium (8px): buttons, nav pills, cards — the workhorse
- Chip (24px): tag chips
- Full (9999px / 50%): avatars, round action buttons

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text, most surfaces |
| Tint (Level 1) | `#f2f2f3` / `#f9f9fa` background shift | Card/nav/section separation without elevation |
| Hairline (Level 2) | `1px solid #eaeaeb` border | Outlined buttons, card outlines, dividers |
| Immersive (Level 3) | `#1e1b3a` dark indigo block | Promotional / banner blocks |

**Shadow Philosophy**: POSTYPE is a near-shadowless system. Live inspection found `box-shadow: none` across the nav, buttons, tag chips, and cards. Depth and grouping are communicated entirely through flat tinted surfaces (`#f2f2f3` / `#f9f9fa`) and thin `#eaeaeb` hairlines. This is a deliberate content-first, editorial choice — it keeps the platform feeling like a calm reading and publishing surface rather than a card-stacked app. When emphasis is needed the system reaches for color (charcoal `#2c2c2f` fill, brand red `#f33d4d`, or the immersive indigo `#1e1b3a`), never elevation.

## 7. Do's and Don'ts

### Do
- Use the custom `Postype Sans-serif KR` typeface for the entire UI — one face, weight-driven hierarchy
- Use charcoal (`#2c2c2f`) for the primary filled action button — quiet and decisive
- Reserve the brand red (`#f33d4d`) for identity accents, keeping it rare and distinctive
- Use link blue (`#3478ff`) for links and counts, separate from the brand red
- Use near-black charcoal (`#141415` / `#2c2c2f`) for text instead of pure black
- Separate sections with flat tinted surfaces (`#f2f2f3` / `#f9f9fa`) and `#eaeaeb` hairlines, not shadows
- Use soft rounded geometry — 8px buttons and nav pills, 24px tag chips, full-round avatars
- Keep chrome reserved so the creator's content stays the focus

### Don't
- Use drop shadows for elevation — POSTYPE is a flat, shadow-free system
- Make the primary button red — red is the identity accent, charcoal is the action color
- Spread the brand red across many elements — it dilutes the identity signal
- Use pure black (`#000000`) for body text — reserve near-black charcoal `#141415`
- Use sharp/square corners on interactive chrome — buttons and pills are rounded
- Mix a second display font — `Postype Sans-serif KR` owns the whole hierarchy
- Oversize the chrome — the UI should never compete with the creator's content
- Use link blue for non-interactive emphasis — blue means "this is a link"

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, top nav collapses, sidebar becomes a drawer |
| Tablet | 640-1024px | Moderate padding, 2-up content cards |
| Desktop | 1024-1440px | Full layout with persistent nav and content feed |

### Touch Targets
- Nav pills and primary buttons at 40px height — comfortably tappable
- Subscribe action at 32px height for compact inline placement
- Tag chips small (20px) but spaced; round avatars at 48px

### Collapsing Strategy
- Persistent nav: pill row collapses into a drawer/hamburger on narrow viewports
- Content feed: multi-column → stacked single column
- Tinted/white alternating sections maintain full-width treatment
- Tag chip rows wrap on narrow widths

### Image Behavior
- Post thumbnails and channel banners carry no shadow at any size, consistent with the flat system
- Cards maintain 8px radius across breakpoints; avatars stay fully circular

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary action (filled button): Action Charcoal (`#2c2c2f`)
- Brand accent: POSTYPE Red (`#f33d4d`)
- Link / count: Link Blue (`#3478ff`)
- Decorative accent: Purple (`#8956f8`)
- Immersive banner: Indigo (`#1e1b3a`)
- Background: Pure White (`#ffffff`)
- Tinted surface: Surface Grey (`#f2f2f3`), Surface Alt (`#f9f9fa`)
- Heading / body text: Ink (`#141415`), UI Ink (`#2c2c2f`)
- Secondary text: Body Slate (`#62626a`)
- Muted text: Muted Slate (`#76767f`)
- Hairline: `#eaeaeb`

### Example Component Prompts
- "Create a top nav: white background, pill-style nav items (8px radius, 4px 12px padding, 16px Postype Sans-serif KR weight 400, #2c2c2f text). Active item gets a #f2f2f3 tinted fill. Right side: outlined login (#ffffff, 1px solid #eaeaeb, #2c2c2f, 8px radius) and a filled charcoal sign-up CTA (#2c2c2f bg, white text, 8px radius, 6px 16px, weight 600). No shadow."
- "Design a creator post card: #f9f9fa background, 8px radius, no shadow. Title 16px Postype Sans-serif KR, #141415. A subscribe button: #f2f2f3 bg, #2c2c2f text, 8px radius, 13px weight 600, 32px height. Tag chips: #f2f2f3 bg, #2c2c2f text, 24px radius, 11px."
- "Build a tinted section: #f2f2f3 background, full-width. Separate cards with #eaeaeb hairlines, not shadows. Round creator avatars (48px, full circle, white bg). Use the brand red #f33d4d only on the logo mark."
- "Create an immersive promo banner: #1e1b3a indigo background, white text, 8px radius. Keep it rare — most surfaces stay white/grey."

### Iteration Guide
1. One typeface — `Postype Sans-serif KR` — with weight-driven hierarchy (700/600/400)
2. Charcoal (`#2c2c2f`) is the filled-action color; red (`#f33d4d`) is identity-only
3. Blue (`#3478ff`) means "link/count"; never use it for non-interactive emphasis
4. No shadows — separate with `#f2f2f3` / `#f9f9fa` tint and `#eaeaeb` hairlines
5. Soft rounded geometry — 8px buttons/pills, 24px chips, full-round avatars
6. Text is near-black charcoal (`#141415` / `#2c2c2f`), never pure black
7. Keep the chrome reserved; the creator's content leads

---

## 10. Voice & Tone

POSTYPE's voice is **warm, encouraging, and taste-affirming** — a platform that treats every personal taste (취향) as legitimate and worth monetizing, speaking to creators as makers who deserve a sustainable living from their work. The mission line "취향의 가치를 만드는 창작 커뮤니티" ("a creative community that creates value from taste") sets the register: inclusive, dignifying, never gatekeeping. Copy is plain and low-friction, foregrounding ease ("30초면 끝" / "done in 30 seconds") and creator agency over hype.

| Context | Tone |
|---|---|
| Brand / mission lines | Affirming, taste-first. "취향의 가치를 만드는 창작 커뮤니티." Inclusive, dignifying. |
| Nav / feature labels | Plain and functional. "오픈 채널", "리퀘스트", "캐릭터톡", "보관함". |
| CTAs | Direct, low-pressure. "회원 가입", "구독", "로그인". |
| Creator-facing copy | Empowering, sustainability-framed. Earnings → more creation as a virtuous cycle. |
| Trust / policy copy | Calm, concrete. "청소년 보호 정책", "권리 침해 신고 센터" stated plainly. |

**Voice samples:**
- "취향의 가치를 만드는 창작 커뮤니티" — homepage title / mission line (taste-first framing). *(verified live 2026-06-11, document.title)*
- "포스트, 창작의 가치를 수익으로" — service slogan (creation → income). *(verified via about.postype.com 2026-06-11)*
- "모든 취향이 가치 있는 세상" — stated vision (every taste has value). *(verified via about.postype.com 2026-06-11)*

**Forbidden register**: gatekeeping or taste-shaming language, aggressive sales urgency, undefined jargon, exclamation-heavy hype, anything that frames niche creators as less legitimate.

## 11. Brand Narrative

POSTYPE (포스타입) launched its public service in **2015** (beta 2015-06-22, official launch 2015-07-17) under **주식회사 포스타입 (Postype, Inc.)**, a Seoul-based startup, with the founding vision of a "content-distribution blog platform." It addressed a gap unique to Korea's creator economy: writers, illustrators, webtoon artists, and niche-hobby creators had no flexible, taste-respecting place to publish long-form work *and* earn directly from the fans who valued it. POSTYPE's founding premise — "모든 취향이 가치 있는 세상" ("a world where every taste has value") — reframed publishing from ad-driven scale-chasing into a marketplace where personal taste itself is the product.

The platform matured into a self-described "creator super-app" (크리에이터를 위한 슈퍼 앱), letting creators monetize through individual paid posts, membership subscriptions, commission requests (리퀘스트), character chatbots (캐릭터톡), and community features. POSTYPE frames this as a virtuous cycle: revenue from creation funds more creation, so creators can sustain their practice. As publicly reported, the platform has grown to hundreds of thousands of creators and cumulative transactions in the hundreds of billions of won.

What POSTYPE refuses, visible in its design: the loud, ad-saturated, algorithm-feed aesthetic of mass content platforms, and any chrome that out-shouts the creator's work. What it embraces: a flat, calm, reading-room interface; one reserved brand red; a single custom typeface that keeps hierarchy quiet; and copy that affirms taste rather than ranking it.

## 12. Principles

1. **Every taste has value.** POSTYPE exists so niche creators can earn, not just the mainstream. *UI implication:* never visually rank or gate content by popularity in the core reading flow; present creator work neutrally and let tags surface taste.
2. **Content leads, chrome recedes.** The platform is a stage, not the show. *UI implication:* keep the UI quiet — one typeface, reserved sizes, charcoal actions, no decorative shadow — so the creator's work is the focus.
3. **Red is identity, charcoal is action.** *UI implication:* reserve the brand red (`#f33d4d`) for the mark and rare emphasis; use charcoal (`#2c2c2f`) for the decisive filled action so the next step reads as neutral, not salesy.
4. **Flat and calm.** Editorial clarity beats decorative depth. *UI implication:* no shadows; separate with tint and hairlines; keep the page light and easy to read for long stretches.
5. **Earnings sustain creation.** The product is a virtuous cycle, not a one-time transaction. *UI implication:* make subscribe and support paths low-friction and always visible on creator surfaces, framed as ongoing support rather than a hard sell.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable POSTYPE user segments (Korean creators publishing paid serialized content, and fans subscribing to niche channels), not individual people.*

**서연, 27, 서울.** A web-novel author serializing original fiction. Uses paid posts and memberships to earn directly from readers rather than relying on ad revenue. Chose POSTYPE because it respects niche genres and lets her set her own pricing without feeling judged.

**민준, 33, 경기.** An illustrator selling digital asset packs and taking commission requests (리퀘스트). Values that the platform turns fan demand into a structured, low-friction earning channel and that the reading-room UI keeps his portfolio front-and-center.

**하은, 24, 부산.** A fan and subscriber who follows several niche creators. Likes that the flat, calm interface makes long reading sessions comfortable and that subscribing to support a creator feels like patronage, not a transaction.

## 14. States

| State | Treatment |
|---|---|
| **Empty (channel, no posts yet)** | White canvas. Single Ink (`#141415`) line explaining no posts yet, with one charcoal (`#2c2c2f`) CTA to start. No illustration clutter. |
| **Empty (library, nothing saved)** | Muted Slate (`#76767f`) single line: nothing saved yet, plus a path back to browse. Calm, honest. |
| **Loading (feed fetch)** | Skeleton cards on `#f9f9fa` tinted surface at final 8px-radius dimensions. Flat pulse — no shadow shimmer, consistent with the shadowless system. |
| **Loading (subscribe action)** | Inline progress within the subscribe button; previous label stays visible until resolved. |
| **Error (load failed)** | Inline message in Ink (`#141415`) with a plain-language explanation and a retry. No generic "오류가 발생했습니다" alone — states the next step. |
| **Error (form validation)** | Field-level message below the input; describes what's valid, not just "필수". |
| **Success (post published / subscribed)** | Brief inline confirmation in calm tone; next-step link immediately below. No celebratory emoji. |
| **Skeleton** | `#f2f2f3` / `#f9f9fa` blocks at final dimensions, 8px radius, flat pulse. |
| **Disabled** | Muted Slate (`#76767f`) text on reduced-opacity surface; charcoal actions fade rather than switch hue, preserving the system read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, pill press, focus |
| `motion-standard` | 200ms | Card/section reveal, sheet, dropdown, drawer |
| `motion-slow` | 320ms | Page-level transitions, drawer open |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — sheets, cards, nav drawer |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and quiet — consistent with the flat, reading-room aesthetic. Nav pills and buttons respond to press with a subtle opacity/scale shift; feed cards fade-in from below at `motion-standard / ease-enter`. The nav drawer slides at `motion-slow / ease-enter` on mobile. No bounce or spring — a publishing platform signals steadiness and focus, not playful delight. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-11) via playwright getComputedStyle on https://www.postype.com
and https://www.postype.com/@team:
- body Postype Sans-serif KR / 16px / color rgb(20,20,21) #141415 / bg #ffffff
- Sign-up CTA bg rgb(44,44,47) #2c2c2f / white / 8px / 6px 16px / weight 600
- Login outlined 1px solid rgb(234,234,235) #eaeaeb / #2c2c2f
- Nav pills active bg rgb(242,242,243) #f2f2f3 / 8px
- Tag chips bg #f2f2f3 / radius 24px / 11px
- Link/count color rgb(52,120,255) #3478ff
- Brand red rgb(243,61,77) #f33d4d (×21 bg occurrences), purple rgb(137,86,248) #8956f8, immersive rgb(30,27,58) #1e1b3a
- box-shadow: none across nav/buttons/chips/cards (shadowless system confirmed)
- document.title: "포스타입 - 취향의 가치를 만드는 창작 커뮤니티"

Token-level claims (§1-9) are sourced from this live inspection.

Voice samples (§10) and brand narrative (§11): mission line "취향의 가치를 만드는 창작 커뮤니티"
is verbatim from the live homepage document.title. Slogan "포스트, 창작의 가치를 수익으로" and
vision "모든 취향이 가치 있는 세상" are from POSTYPE's official about/intro surface
(about.postype.com), fetched 2026-06-11. Founding facts (2015 launch under Postype, Inc.,
Seoul; "creator super-app" positioning; paid posts / memberships / 리퀘스트 / 캐릭터톡
monetization model) are POSTYPE's own publicly stated descriptions. Growth figures
(hundreds of thousands of creators, hundreds of billions of won cumulative transactions)
are publicly reported and stated approximately, not pinned to a single verified figure.

Personas (§13) are fictional archetypes informed by publicly observable POSTYPE user
segments (Korean paid-serialization creators, illustrators taking commissions, niche-channel
fans). Names are illustrative; they do not refer to real people.

Interpretive claims (e.g., "red is identity, charcoal is action", "content leads, chrome
recedes as a rejection of ad-feed aesthetics") are editorial readings connecting POSTYPE's
observed design to its stated mission, not directly sourced POSTYPE statements.
-->
