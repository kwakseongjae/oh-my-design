---
id: teamblind
name: Blind
display_name_kr: 블라인드
country: KR
category: consumer-tech
homepage: "https://www.teamblind.com/kr"
primary_color: "#da3238"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=teamblind.com&sz=128"
verified: "2026-06-10"
added: "2026-06-10"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-10"
  note: "Two live reds across surfaces: EN sign-up CTA #da3238 (canonical brand red) vs KR login CTA #fb5957 (lighter coral). KR surface is white-canvas list UI; EN surface is a #f9f9fb-canvas card feed. Both run Pretendard."
  colors:
    primary: "#da3238"
    primary-coral: "#fb5957"
    accent-up: "#ff4848"
    ink: "#222222"
    ink-deep: "#18202a"
    body-en: "#42424b"
    muted-nav: "#5f6b7c"
    muted-meta: "#94969b"
    muted-en: "#989a9e"
    secondary-en: "#65696c"
    rank-bg: "#e6e8ef"
    rank-fg: "#939dac"
    canvas: "#ffffff"
    canvas-en: "#f9f9fb"
    surface: "#eff0f4"
    surface-soft: "#f6f7fa"
    surface-chip: "#f2f2f3"
    hairline: "#d7d7d7"
    hairline-en: "#e9ebee"
    hairline-input: "#d4d4d4"
    on-primary: "#ffffff"
  typography:
    family: { sans: "Pretendard" }
    nav-kr:     { size: 16, weight: 600, use: "KR global nav (홈/채널/기업 리뷰)" }
    section:    { size: 18, weight: 600, lineHeight: 2.39, use: "KR section headings (토픽 베스트)" }
    hero-input: { size: 18, weight: 400, use: "KR hero search input text" }
    body:       { size: 14, weight: 400, lineHeight: 1.5, use: "Standard UI text, both surfaces" }
    post-title: { size: 14, weight: 600, use: "Feed post titles" }
    body-en:    { size: 16, weight: 400, lineHeight: 1.5, use: "EN base body text" }
    meta:       { size: 12, weight: 400, use: "Category labels, timestamps" }
    label-en:   { size: 12, weight: 600, use: "EN sidebar group labels (Location, Industry)" }
    badge:      { size: 10, weight: 600, use: "Numeric rank chips" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, section: 48 }
  rounded: { sm: 4, md: 8, lg: 12, pill: 20, hero: 30, full: 9999 }
  shadow:
    none: "none"
  components:
    button-signup: { type: button, bg: "#da3238", fg: "#ffffff", radius: "8px", padding: "0 16px", height: "40px", font: "14px / 600", use: "EN 'Sign up' — the canonical brand-red CTA" }
    button-login-kr: { type: button, bg: "#fb5957", fg: "#ffffff", radius: "4px", height: "40px", border: "1px solid #fb5957", font: "14px / 600", use: "KR '로그인' CTA — lighter coral red on the KR surface" }
    button-signin-ghost: { type: button, fg: "#222222", radius: "8px", padding: "0 16px", height: "40px", border: "1px solid #e9ebee", font: "14px / 600", use: "EN 'Sign in' secondary ghost button" }
    input-search-en: { type: input, bg: "#eff0f4", fg: "#222222", radius: "8px", font: "14px / 400", use: "EN header search — borderless grey field" }
    input-hero-kr: { type: input, bg: "#ffffff", fg: "#222222", radius: "30px", height: "60px", border: "2px solid #222222", font: "18px / 400", use: "KR hero search — bold ink-outlined pill" }
    card-feed: { type: card, bg: "#ffffff", border: "1px solid #e9ebee", radius: "12px", padding: "16px", use: "EN feed/content card on the #f9f9fb canvas" }
    badge-rank: { type: badge, bg: "#e6e8ef", fg: "#939dac", radius: "4px", padding: "3px", font: "10px / 600", use: "KR '토픽 베스트' numeric rank chip (1–10)" }
    tab-gnb-kr: { type: tab, active: "text #18202a", fg: "#5f6b7c", font: "16px / 600", use: "KR global nav — 홈 active vs 채널/기업 리뷰 inactive" }
    pill-side-nav: { type: tab, bg: "#f6f7fa", fg: "#222222", radius: "8px", padding: "8px 12px", font: "14px / 600", use: "EN sidebar selected item; inactive items #65696c on transparent" }
    list-post: { type: listItem, fg: "#222222", font: "14px / 600", use: "Post-row title; 12px #94969b category label above" }
  components_harvested: true
---

# Design System Inspiration of Blind

## 1. Visual Theme & Atmosphere

Blind (블라인드) is the anonymous workplace community where over twelve million verified professionals talk about salary, career moves, and company life — and its design reads exactly like what it is: a high-velocity text forum wearing the lightest possible chrome. The Korean surface (`teamblind.com/kr`) is a dense, white-canvas (`#ffffff`) list UI in the lineage of Korean portal communities: near-black ink text (`#222222`), thin `#d7d7d7` hairline dividers between post rows, tiny grey metadata, and almost no decoration. Nothing competes with the posts themselves, because the posts — raw, unfiltered, anonymous — are the product.

The single point of heat in this deliberately cool system is red. Blind's brand red appears in two live variants: the deeper `#da3238` on the global English surface's "Sign up" button, and a lighter coral `#fb5957` on the Korean 로그인 button. Red carries an unusually heavy semantic load for a community product — it is simultaneously the brand mark, the only CTA color, and an echo of the "blind item" tabloid red that suits a platform built on anonymous disclosure. Everything else stays in a long grey ladder (`#5f6b7c` nav, `#94969b` metadata, `#939dac` rank chips), so the one red element on any screen is unambiguous.

Typographically the system is pure Pretendard at functional sizes — 16px/600 for the Korean global nav, 14px/600 for post titles, 12px for metadata — with no display typography at all on the community surfaces. The most expressive single element on the Korean homepage is the hero search field: a 60px-tall pill with a blunt 2px solid `#222222` outline and 30px radius, an ink-drawn loud-speaker of an input that says "ask anything." The newer English surface shifts the same DNA into a contemporary card feed: an off-white `#f9f9fb` canvas, white cards with 1px `#e9ebee` borders and 12px radius, 8px-radius controls, and a completely flat, shadow-free elevation model on both surfaces. Blind is what a trusted rumor mill looks like when it grows up: plain, fast, text-first, and punctuated by exactly one red button.

**Key Characteristics:**
- Text-first density — post titles at 14px/600 ink (`#222222`) with hairline (`#d7d7d7`) row dividers, no card chrome on the KR list
- One red, one job — `#da3238` / `#fb5957` reserved for the primary auth CTA; nothing else on screen is red
- Pretendard everywhere, at UI sizes only — no display typography on community surfaces
- Flat, shadow-free elevation on both KR and EN surfaces; separation by hairline and canvas tint
- Two-generation surface split: KR legacy white list UI vs EN `#f9f9fb` card feed with 12px-radius cards
- The ink-outlined hero search pill (2px `#222222`, radius 30px, 60px tall) as the KR signature element
- Long grey ladder for hierarchy: `#18202a` → `#5f6b7c` → `#94969b` → `#939dac`
- Anonymity cues in the UI: posts attributed to scrambled handles and "비공개" rather than names or faces

## 2. Color Palette & Roles

### Primary
- **Blind Red** (`#da3238`): The canonical brand red — EN "Sign up" CTA background, and the contact-link red on Blind's own fallback pages. The single action color of the system.
- **Coral Red** (`#fb5957`): The KR surface's 로그인 button red — a lighter, warmer variant of the brand red used as the Korean primary CTA.
- **Upvote Red** (`#ff4848`): Accent red for like/upvote counts and live signals on the EN feed.

### Ink & Text
- **Ink** (`#222222`): Primary text everywhere — post titles, headings, nav, body on the KR surface.
- **Ink Deep** (`#18202a`): Active state of the KR global nav (홈) — a barely-darker blue-black that reads as "selected" against `#5f6b7c`.
- **Body EN** (`#42424b`): The EN surface's default body/copy grey-ink.
- **Nav Muted** (`#5f6b7c`): Inactive KR global-nav items (채널, 기업 리뷰) — a desaturated steel blue.
- **Meta Grey** (`#94969b`): KR post metadata — category labels, counts, timestamps.
- **Muted EN** (`#989a9e`): EN inactive top-nav items and sidebar group labels.
- **Secondary EN** (`#65696c`): EN sidebar links and secondary actions.
- **Rank Grey** (`#939dac`): Text inside the numeric rank chips.

### Canvas & Surface
- **White** (`#ffffff`): The KR page canvas, cards, and input fields; text on red.
- **Canvas EN** (`#f9f9fb`): The EN feed's off-white page background that makes white cards legible without shadows.
- **Search Surface** (`#eff0f4`): EN borderless search-field fill.
- **Surface Soft** (`#f6f7fa`): EN sidebar selected-item pill background.
- **Chip Surface** (`#f2f2f3`): KR app-download circular button fill.
- **Rank Chip** (`#e6e8ef`): Background of the 토픽 베스트 numeric rank chips.

### Hairlines & Borders
- **Hairline** (`#d7d7d7`): The KR list-row divider — the system's primary separation device.
- **Hairline EN** (`#e9ebee`): EN card and ghost-button border.
- **Input Border** (`#d4d4d4`): KR header search-pill border.
- **On Primary** (`#ffffff`): Text/icon color on red CTAs.

## 3. Typography Rules

### Font Family
- **Primary**: `Pretendard` — on KR with the legacy stack `AppleSDGothicNeo-Regular, "Malgun Gothic", dotum`; on EN as `pretendard, ui-sans-serif, system-ui`. One family carries both surfaces.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| KR Global Nav | Pretendard | 16px | 600 | 2.0 (32px box) | 홈 / 채널 / 기업 리뷰 |
| Section Heading | Pretendard | 18px | 600 | 43px box | 토픽 베스트, channel names |
| Hero Search Input | Pretendard | 18px | 400 | — | Inside the 60px ink-outlined pill |
| EN Body | Pretendard | 16px | 400 | 24px | EN base text |
| Post Title | Pretendard | 14px | 600 | 37px row | The workhorse — feed post titles |
| UI / Buttons | Pretendard | 14px | 600 | — | CTAs, nav links, sidebar items |
| Body / Footer | Pretendard | 14px | 400 | 1.5 | Footer links, descriptions |
| Meta | Pretendard | 12px | 400 | — | Category labels, timestamps |
| EN Group Label | Pretendard | 12px | 600 | — | "Location", "Industry", "Job Function" |
| Rank Badge | Pretendard | 10px | 600 | — | Numeric chips 1–10 |

### Principles
- **UI sizes only**: the community surfaces have no display typography — the largest live text is an 18px section heading. Scale is expressed through weight (600 vs 400) and greys, not size jumps.
- **600 is the emphasis weight**: post titles, nav, buttons, and section heads all sit at semibold; regular 400 carries metadata and body. Bold (700) is nearly absent.
- **Density over air**: 14px titles in 37px rows, 12px metadata — the KR feed is tuned to show many posts per viewport, like a stock ticker for workplace talk.
- **One family, two generations**: identical Pretendard on the legacy KR markup and the modern EN Tailwind feed keeps the brand coherent across the split.

## 4. Component Stylings

### Buttons

**Sign Up (EN Primary)**
- Background: `#da3238`
- Text: `#ffffff`
- Radius: 8px
- Padding: 0px 16px
- Height: 40px
- Font: 14px / 600 / Pretendard
- Use: EN header primary CTA — the one red element on the page

**로그인 (KR Primary)**
- Background: `#fb5957`
- Text: `#ffffff`
- Border: 1px solid `#fb5957`
- Radius: 4px
- Height: 40px
- Font: 14px / 600 / Pretendard
- Use: KR header login CTA — coral variant of the brand red

**Sign In (EN Ghost)**
- Background: transparent
- Text: `#222222`
- Border: 1px solid `#e9ebee`
- Radius: 8px
- Padding: 0px 16px
- Height: 40px
- Font: 14px / 600 / Pretendard
- Use: EN secondary auth action next to Sign up

**App Download Circle (KR)**
- Background: `#f2f2f3`
- Text: `#222222`
- Radius: 50%
- Height: 40px
- Use: Circular App Store / Google Play buttons in the KR header

### Inputs & Forms

**Hero Search (KR)**
- Background: `#ffffff`
- Text: `#222222`
- Border: 2px solid `#222222`
- Radius: 30px
- Height: 60px
- Padding: 0px 10px 0px 62px
- Font: 18px / 400 / Pretendard
- Use: KR homepage hero search — placeholder "관심있는 내용을 검색해보세요!"

**Header Search (KR)**
- Background: `#ffffff`
- Text: `#222222`
- Border: 1px solid `#d4d4d4`
- Radius: 20px
- Height: 40px
- Padding: 2px 12px 0px 36px
- Font: 14px / 400 / Pretendard
- Use: Compact pill search in the KR global header

**Header Search (EN)**
- Background: `#eff0f4`
- Text: `#222222`
- Radius: 8px
- Font: 14px / 400 / Pretendard
- Use: EN borderless grey search field (radius on the wrapping container)

### Cards & Containers

**Feed Card (EN)**
- Background: `#ffffff`
- Border: 1px solid `#e9ebee`
- Radius: 12px
- Padding: 16px
- Use: Content/feed card sitting on the `#f9f9fb` canvas — no shadow

**List Section (KR)**
- Background: `#ffffff`
- Border: 1px solid `#d7d7d7` row dividers
- Use: KR post lists separate rows by hairline only; no card chrome

### Badges

**Rank Chip**
- Background: `#e6e8ef`
- Text: `#939dac`
- Radius: 4px
- Padding: 3px
- Font: 10px / 600 / Pretendard
- Use: Numeric 1–10 chips in 토픽 베스트 rankings

### Tabs & Navigation

**KR Global Nav**
- Text: `#5f6b7c`
- Active: `#18202a` text
- Font: 16px / 600 / Pretendard
- Use: 홈 / 채널 / 기업 리뷰 top navigation

**EN Top Nav**
- Text: `#989a9e`
- Active: `#222222` text
- Font: 14px / 600 / Pretendard
- Use: Community / Salaries / Reviews / Layoffs / Jobs

**EN Sidebar Pill**
- Background: `#f6f7fa`
- Text: `#222222`
- Radius: 8px
- Padding: 8px 12px
- Font: 14px / 600 / Pretendard
- Use: Selected sidebar item (Feed); inactive items `#65696c` on transparent

### List Items

**Post Row**
- Text: `#222222`
- Font: 14px / 600 / Pretendard
- Padding: 8px 0px
- Use: Feed post title; 12px `#94969b` category label above; like/comment counts in meta grey

---
**Verified:** 2026-06-10
**Tier 1 sources:** https://www.teamblind.com/kr, https://www.teamblind.com, https://recruit.teamblind.com
**Tier 2 sources:** none available (getdesign.md/teamblind and getdesign.md/blind both 404; styles.refero.design ?q=blind returns no Blind entry)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px
- Notable: row padding on post lists is a tight 8px vertical — density is a feature

### Grid & Container
- KR homepage: centered content column with a multi-column "topic board" grid of post lists, each section headed by an 18px/600 title
- EN feed: classic three-zone community layout — left sidebar (filters/channels as 8px-radius pills), center feed of 12px-radius cards, right rail
- Header is a persistent white bar: logo left, search center/right, single red CTA at the far right on both surfaces

### Whitespace Philosophy
- **Density first**: Blind optimizes posts-per-viewport. Whitespace exists to keep rows scannable, never to dramatize.
- **Hairline segmentation**: `#d7d7d7` (KR) and `#e9ebee` (EN) lines do the structural work that other systems give to shadows and cards.
- **Tinted canvas on EN**: the `#f9f9fb` page color lets borderless white cards read as surfaces without any elevation.

### Border Radius Scale
- Small (4px): KR buttons, rank chips
- Medium (8px): EN buttons, search fields, sidebar pills
- Large (12px): EN feed cards
- Pill (20px): KR header search
- Hero (30px): KR hero search pill
- Full (50% / 9999px): avatars, circular app buttons

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Everything — both surfaces are shadow-free |
| Tint (Level 1) | `#f9f9fb` canvas vs `#ffffff` card | EN card separation |
| Hairline (Level 2) | 1px `#d7d7d7` / `#e9ebee` | Row dividers, card borders |
| Scrim | `rgba(0,0,0,0.8)` overlay | Modal/photo viewer backdrop |

**Shadow Philosophy**: Live inspection found no box-shadows in use on either the KR homepage or the EN feed. Blind's elevation model is entirely flat: tinted canvas, white surfaces, and hairlines. For a platform whose content is emotionally loud — salary reveals, layoff rumors, anonymous grievances — the chrome stays visually silent. Depth would imply editorial curation; flatness implies the feed is just the feed.

## 7. Do's and Don'ts

### Do
- Reserve red (`#da3238` EN / `#fb5957` KR) for exactly one CTA per screen
- Set post titles at 14px Pretendard weight 600 in ink `#222222`
- Separate list rows with 1px `#d7d7d7` hairlines instead of cards on dense KR-style lists
- Use the `#f9f9fb` canvas + white card + 1px `#e9ebee` border pattern for EN-style feeds
- Keep the system shadow-free — tint and hairline carry all depth
- Use the grey ladder (`#18202a` active → `#5f6b7c` nav → `#94969b` meta) for hierarchy
- Make search prominent — up to a 60px pill with a 2px `#222222` outline on the home surface
- Express anonymity in the UI: scrambled handles, "비공개" attribution, no profile photos

### Don't
- Use red for anything other than the primary action — no red headings, links, or decorations
- Add drop shadows or elevated card stacks — the system is flat
- Use display-size typography on community surfaces — 18px is the ceiling
- Replace hairline-separated lists with heavy card chrome on the KR surface
- Show real names, faces, or employer-identifying avatars in feed patterns
- Introduce a second accent color — greys plus one red is the whole palette
- Use weight 700 for emphasis — 600 is the system's strong weight
- Let metadata compete with titles — counts and categories stay at 12px grey `#94969b`

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single-column feed; app-download banner prominent; search collapses to icon |
| Tablet | 640–1024px | Two-column topic boards on KR; EN sidebar collapses |
| Desktop | 1024px+ | Full three-zone EN layout; multi-column KR topic grid |

### Touch Targets
- All header controls sit at 40px height (buttons, search pills, app circles)
- KR hero search at 60px is an oversized, unmissable target
- Post rows at ~37px with 8px vertical padding remain tappable despite density

### Collapsing Strategy
- KR topic-board columns stack into a single scrolling feed on mobile
- EN left sidebar (Location/Industry/Job Function filters) folds behind "Show More" and off-canvas patterns
- The single red CTA stays in the header at every breakpoint
- Blind is mobile-app-first: web surfaces consistently promote App Store / Google Play installs

### Image Behavior
- Post thumbnails are small and right-aligned; text always dominates the row
- Avatars are fully round (9999px) and anonymized — no real faces
- No hero imagery on community surfaces; the search pill is the hero

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Blind Red (`#da3238`); KR variant Coral (`#fb5957`)
- Canvas: White (`#ffffff`) on KR; Off-white (`#f9f9fb`) on EN
- Primary text: Ink (`#222222`); EN body (`#42424b`)
- Nav active: Ink Deep (`#18202a`); nav muted (`#5f6b7c`)
- Metadata: Meta Grey (`#94969b`)
- Card border: `#e9ebee`; list hairline: `#d7d7d7`
- Search fill: `#eff0f4`; selected pill: `#f6f7fa`
- Rank chip: `#e6e8ef` bg / `#939dac` text
- Upvote accent: `#ff4848`

### Example Component Prompts
- "Create a community header: white bar, logo left, pill search input (1px solid #d4d4d4, radius 20px, 40px tall, 14px Pretendard), and one red login button (#fb5957 background, white text, radius 4px, 40px tall, 14px weight 600)."
- "Design a dense post list: each row 8px vertical padding, title 14px Pretendard weight 600 #222222, category label 12px #94969b above, like/comment counts 12px #94969b right, rows separated by 1px solid #d7d7d7. No cards, no shadows."
- "Build an EN-style feed card: #ffffff background, 1px solid #e9ebee border, radius 12px, padding 16px, on a #f9f9fb page canvas. Body text 16px Pretendard #42424b. No shadow."
- "Create a hero search: 60px-tall pill input, white background, 2px solid #222222 border, radius 30px, 18px Pretendard text, placeholder '관심있는 내용을 검색해보세요!'."
- "Design a ranking widget '토픽 베스트': heading 18px Pretendard 600 #222222; rows numbered with 20px chips (#e6e8ef background, #939dac text, radius 4px, 10px weight 600) followed by 14px weight-600 titles."

### Iteration Guide
1. One red per screen — `#da3238` (or `#fb5957` on KR surfaces) on the primary action only
2. Pretendard at UI sizes; 600 for emphasis, 400 for everything else; 18px is the largest community text
3. Flat always: tinted canvas + hairlines, never shadows
4. KR mode = white canvas + `#d7d7d7` hairline lists; EN mode = `#f9f9fb` canvas + bordered 12px cards
5. Hierarchy through the grey ladder, not through size
6. Search is the hero element; auth is the only red element
7. Anonymize everything: scrambled handles, round generic avatars, "비공개"

---

## 10. Voice & Tone

Blind's voice is **direct, peer-level, and unvarnished** — the platform talks like a trusted colleague, not like HR. Korean copy is functional and unceremonious ("관심있는 내용을 검색해보세요!", "기업 리뷰", "토픽 베스트"); English copy is blunt about the core promise: anonymity and honest conversation ("Stay Anonymous", "Level up your career in real-time"). The corporate voice, visible on the careers surface, frames bluntness as a value: "표현은 솔직하게, 공유는 투명하게" — honesty is the product and the register.

| Context | Tone |
|---|---|
| Service UI labels | Plain, functional Korean. "홈", "채널", "기업 리뷰", "더보기" — zero marketing inflection. |
| Search prompts | Friendly imperative. "관심있는 내용을 검색해보세요!" — the one exclamation the system allows. |
| EN marketing | Benefit-direct, anonymity-forward. "Level up your career in real-time." "Stay Anonymous." |
| Careers / corporate | Mission-framed, declarative. "블라인드, 모든 변화의 시작." |
| Trust & safety copy | Sober and procedural — 신고가이드, 개인정보 처리방침 surfaced plainly in the footer. |

**Voice samples (verbatim from live surfaces):**
- "블라인드 | 직장인 기업 연봉 & 이직 커리어" — KR page title (the value proposition as a flat list). *(verified live 2026-06-10)*
- "관심있는 내용을 검색해보세요!" — KR hero search placeholder. *(verified live 2026-06-10)*
- "블라인드, 모든 변화의 시작" — recruit.teamblind.com hero heading. *(verified live 2026-06-10)*
- "Blind - Anonymous and Professional Community" — EN page title. *(verified live 2026-06-10)*

**Forbidden register**: corporate euphemism, HR-speak, hedged "we value your feedback" tones, hype superlatives, and anything that implies the company curates or sanitizes what members say.

## 11. Brand Narrative

Blind was launched in **2013** by Teamblind Inc., founded in Korea by former Naver employees — a team that had watched an internal anonymous board get shut down and concluded that employees having an honest channel was worth building a company around. The premise was contrarian: workplace conversation is most valuable precisely when it is *not* attributable. Blind verifies that you are a real employee of a real company (work-email verification, with patented anonymity protection between the verification and the identity), then deletes the link between who you are and what you say.

The model travelled. After dominating Korean tech and conglomerate workplaces, Blind expanded to the US in 2015 and became the de-facto town square for Silicon Valley compensation talk, layoff rumors, and company reviews. The careers page states the scale plainly: over 12 million verified professionals across hundreds of thousands of companies, more than 90% sign-up rates among Korea's 10 largest conglomerate groups, and a spot on TIME's 100 Most Influential Companies. The corporate vision — "구성원 목소리로 만드는 건강한 조직 문화" (healthy organizational culture built from members' voices) — reframes the rumor mill as infrastructure: companies get better when employees can say true things safely.

The design follows the ethics. What Blind refuses: editorial gloss, influencer mechanics, real-name social graphs, and any visual hierarchy that would imply the platform endorses one post over another. What it embraces: text-first density, a single red CTA, flat chrome, scrambled handles, and an interface that disappears behind the conversation. The product's restraint is a trust signal — a platform holding this much sensitive speech cannot afford to look like it is performing.

## 12. Principles

1. **Anonymity is the architecture.** The product's entire value rests on the wall between identity and speech. *UI implication:* no real names, no face avatars, "비공개" attribution, scrambled handles — anonymity cues are rendered, not just promised.
2. **The feed is not edited.** Blind displays what members say without visual endorsement. *UI implication:* uniform post rows, identical typography for every post, ranking only by transparent counts (likes, comments, numeric rank chips).
3. **One red, one action.** Red is too loaded to spend on decoration. *UI implication:* `#da3238`/`#fb5957` appears once per screen, always on the primary action; everything else is ink and grey.
4. **Density equals respect.** Professionals come for information; making them scroll through air wastes their lunch break. *UI implication:* 14px titles, 8px row padding, hairline separation, many posts per viewport.
5. **Honest by default, even about itself.** The corporate value "표현은 솔직하게, 공유는 투명하게" applies to the interface. *UI implication:* plain labels, visible report/policy links, no euphemism in empty or error states.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Blind user segments (verified employees discussing salary, career moves, and company culture), not individual people.*

**박지훈, 32, 판교.** A backend engineer at a major Korean tech company. Opens Blind at lunch to check his company channel and the 주식·투자 board. Posted his offer-comparison question anonymously last year and got blunt, useful answers within an hour — the kind no one would give him face-to-face. Trusts the platform because his handle is scrambled and his employer can't see who he is.

**Sarah Lin, 29, Seattle.** A product manager at a big-tech firm negotiating a promotion. Uses Blind's salary threads and company reviews to calibrate her ask. Values that comp numbers come from verified employees, not recruiters. The flat, dense feed lets her scan fifty data points in five minutes.

**김민정, 38, 서울.** An HR-adjacent team lead who reads Blind to understand what employees actually think — the unfiltered counterpart to the company's engagement surveys. Doesn't post; lurks. Appreciates that the interface never sensationalizes: a post about layoffs looks typographically identical to a post about lunch menus.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no posts in channel)** | White canvas, single ink (`#222222`) line at 14px stating the channel has no posts yet, with a plain prompt to write the first one. No illustration. |
| **Empty (search, no results)** | Meta-grey (`#94969b`) line under the search pill: no results for the query, suggest different keywords. Search field stays focused. |
| **Loading (feed)** | Flat skeleton rows at final row height — grey bars on white, hairlines kept visible. No shimmer theatrics, consistent with the shadow-free system. |
| **Loading (more posts)** | Inline spinner under the last row; existing rows never shift. |
| **Error (network)** | Plain inline message in ink with a retry action; no mascot, no apology theater. |
| **Error (verification failed)** | Field-level message stating exactly what failed in work-email verification and what to do next — precision matters most at the trust boundary. |
| **Success (post published)** | The post simply appears in the feed under the user's scrambled handle — presence in the list is the confirmation. Minor toast only if navigation occurred. |
| **Skeleton** | `#eff0f4`-tone blocks at final dimensions; titles as one 14px-height bar, meta as a shorter 12px bar. |
| **Disabled** | Controls drop to the faint grey range (`#939dac` text); the red CTA never renders in a half-red disabled state — it disappears or greys out fully. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Tab switches, vote count updates |
| `motion-fast` | 120ms | Hover/press feedback, pill highlights |
| `motion-standard` | 200ms | Dropdowns, sheet/modal entry, feed item insert |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Default two-way transitions |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals, overlay close |

**Motion rules**: Blind's surfaces are functionally static — the live pages animate almost nothing, and that is the brand. New feed content appears in place without slide or bounce; the modal scrim (`rgba(0,0,0,0.8)`) fades at `motion-standard`. No spring, no overshoot, no celebratory motion: a platform carrying anonymous workplace speech signals stability and discretion, not delight. Under `prefers-reduced-motion: reduce`, the few transitions collapse to instant with no loss of function.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-10) via playwright getComputedStyle:
- https://www.teamblind.com/kr — KR homepage (login CTA #fb5957, nav, hero search pill, post rows, rank chips, hairlines)
- https://www.teamblind.com — EN logged-out feed (Sign up CTA #da3238, #f9f9fb canvas, 12px cards, sidebar pills)
- https://recruit.teamblind.com — official careers page ("블라인드, 모든 변화의 시작", "블라인드의 핵심 가치")

Corporate values quoted from recruit.teamblind.com (fetched 2026-06-10):
- vision "구성원 목소리로 만드는 건강한 조직 문화"
- value "표현은 솔직하게, 공유는 투명하게"
- value "세상에 없던 플랫폼을 만들고 있습니다"
- stats: 12M+ users, 450,000+ companies, launched 2013; press items on the page:
  "블라인드, 가입자 1200만 돌파…10대 그룹 가입률 90% 넘어",
  "블라인드, 美 타임지 '세계에서 가장 영향력 있는 100대 기업' 선정"

EN taglines "Stay Anonymous" / "Level up your career in real-time" and "12M professionals"
from https://www.teamblind.com/about (fetched 2026-06-10).

Not independently verified this turn — widely documented public facts used:
- Teamblind Inc. founded in Korea (2013) by former Naver employees; US launch 2015;
  work-email verification with patented anonymity protection.

Personas (§13) are fictional archetypes informed by publicly observable Blind user
segments. Names are illustrative; they do not refer to real people.

Interpretive claims (e.g., "flat chrome as a trust signal", "one red, one action",
"density equals respect") are editorial readings connecting Blind's observed design
to its stated values, not direct Teamblind statements.
-->
