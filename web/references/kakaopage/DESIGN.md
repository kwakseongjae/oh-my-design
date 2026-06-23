---
id: kakaopage
name: KakaoPage
display_name_kr: 카카오페이지
country: KR
category: consumer-tech
homepage: "https://page.kakao.com"
primary_color: "#ffd618"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=page.kakao.com&sz=128"
verified: "2026-06-22"
added: "2026-06-22"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-22"
  note: "primary = live content CTA yellow (#ffd618); canvas = white; ink = pure black (#000000) for all text; surface = #eeeeee for content cards; error/best-badge = #ff3042."
  colors:
    primary: "#ffd618"
    ink: "#000000"
    ink-dark: "#222222"
    canvas: "#ffffff"
    surface: "#eeeeee"
    muted: "#666666"
    tertiary: "#999999"
    on-primary: "#222222"
    error: "#ff3042"
    on-error: "#ffffff"
  typography:
    family: { display: "Pretendard Variable", body: "Pretendard" }
    content-title: { size: 21, weight: 700, lineHeight: 1.24, use: "Content item title (e.g. webtoon/novel title)" }
    body:          { size: 16, weight: 400, lineHeight: 1.40, use: "Default body text, tab labels" }
    tab-active:    { size: 16, weight: 700, lineHeight: 1.38, use: "Active category tab text" }
    list-item:     { size: 14, weight: 400, lineHeight: 1.43, use: "Episode list rows, secondary info" }
    sub-label:     { size: 13, weight: 400, lineHeight: 1.38, use: "Tab sub-labels, inactive section tabs" }
    caption:       { size: 12, weight: 400, lineHeight: 1.33, use: "Genre tags, author names, metadata" }
    cta-label:     { size: 12, weight: 700, lineHeight: 1.33, use: "Primary CTA button label" }
    date:          { size: 11, weight: 400, lineHeight: 1.45, use: "Episode date metadata" }
    badge:         { size: 11, weight: 700, lineHeight: 1.45, use: "BEST badge, rank overlay" }
  spacing: { xs: 3, sm: 7, md: 14, base: 16, lg: 20, xl: 32, section: 48 }
  rounded: { xs: 2, sm: 5, md: 8, lg: 12, pill: 16, full: 100 }
  shadow:
    none: "none"
  components:
    button-primary: { type: button, bg: "#ffd618", fg: "#222222", radius: "8px", height: "56px", font: "12px / 700 Pretendard", use: "Primary CTA — '첫 화 보기' / '이어보기'" }
    button-back: { type: button, bg: "#000000", fg: "#ffffff", radius: "100px", height: "54px", padding: "0px 20px", font: "16px / 700 Pretendard", use: "Error/empty-state 'Go Home' full pill" }
    tab-active-pill: { type: tab, bg: "#000000", fg: "#ffffff", radius: "16px", height: "32px", padding: "7px 14px", font: "13px / 700 Pretendard", active: "black pill #000000 / white text #ffffff", use: "Active content-category tab (홈/정보/소식)" }
    tab-nav-pill: { type: tab, bg: "#000000", fg: "#ffffff", radius: "100px", height: "36px", padding: "0px 14px", font: "16px / 400 Pretendard", active: "black pill #000000 / white text #ffffff", use: "Active main section tab (지금핫한/실시간 랭킹)" }
    card-content: { type: card, bg: "#eeeeee", radius: "12px", use: "Content discovery card (thumbnail + metadata overlay)" }
    card-skeleton: { type: card, bg: "#eeeeee", radius: "8px", use: "Lazy-load skeleton placeholder for content thumbnails (live: translucent rgba(153,153,153,0.15) over white ≈ #eeeeee)" }
    badge-best: { type: badge, bg: "#ff3042", fg: "#ffffff", radius: "5px", padding: "0px 3px", font: "11px / 700 Pretendard", use: "Top-ranking badge on episode rows" }
    badge-coin: { type: badge, bg: "#ffd618", fg: "#000000", radius: "2px", padding: "3px 8px", font: "16px / 400 Pretendard", use: "'충전' (coin recharge) label badge" }
    badge-free: { type: badge, bg: "#000000", fg: "#ffffff", radius: "2px", padding: "0px 4px", font: "10px / 700 Pretendard", use: "'무료' (free episode) overlay on rank counter" }
    comment-chip: { type: badge, bg: "rgba(0,0,0,0.05)", fg: "#000000", radius: "8px", height: "28px", font: "16px / 400 Pretendard", use: "Comment count / interaction chip on episode rows" }
    search-input: { type: input, fg: "#000000", font: "13px Pretendard", use: "Search bar — placeholder '제목, 작가를 입력하세요.'" }
  components_harvested: true
---

# Design System Inspiration of KakaoPage

## 1. Visual Theme & Atmosphere

카카오페이지 (KakaoPage) is Kakao Entertainment's flagship webtoon and web-novel platform, and its interface is built around one governing tension: immersive visual content deserves a near-invisible UI frame. The canvas is pure white (`#ffffff`) with pure black (`#000000`) text — no off-whites, no warm navies, no grey tints on the base layer. Color is used surgically: a single vivid brand yellow (`#ffd618`) for the primary call-to-action, a confident red (`#ff3042`) for best-rank badges, and nothing else.

This constraint-first palette makes the content thumbnails — illustrated cover art, dramatic character spreads — the undisputed heroes of every screen. The platform hosts hundreds of webtoon and web-novel IPs, each with its own rich visual identity, and the system never competes with them. The navigation chrome is monochrome; the active selection state uses a black pill rather than a colored accent; the cards are light grey (`#eeeeee`) placeholders that vanish once the cover image loads.

The result is a look that reads as **dark-adjacent without being dark**: all surfaces are white, but the dominant typographic color is black-on-white, and the interactive vocabulary (black pills, black/yellow CTAs) anchors the experience in a high-contrast editorial register. The yellow `#ffd618` — close to Kakao's brand golden-yellow across its ecosystem — appears exactly once per content detail page, on the primary "Start Reading" button, making it unmistakable.

**Key Characteristics:**
- Pure-black/pure-white palette — content cover art is the only color
- Brand yellow (`#ffd618`) reserved exclusively for the primary "Start Reading" CTA
- Active selection state uses a black pill with white text, not a colored accent
- Pretendard Variable for all text — the Korean web standard, optimized for hangul at small sizes
- Light grey (`#eeeeee`) card surface and `rgba(153,153,153,0.15)` skeleton placeholders
- High-contrast editorial density: small type (11–14px), generous imagery
- `#ff3042` hot-red for BEST rank badges — the only accent besides yellow

## 2. Color Palette & Roles

### Primary Action
- **KakaoPage Yellow** (`#ffd618`): The single primary action color. Used for the "첫 화 보기" (Start Reading) and "이어보기" (Continue) CTA buttons and for the coin-recharge label badge. Unmistakably derived from Kakao's brand golden-yellow, adapted for content-platform assertiveness.

### Ink & Canvas
- **Ink Black** (`#000000`): Primary text color for all headings, body copy, nav labels, and interactive elements. Also used as the active pill background (reversing to white text). A true zero — no near-black offset.
- **Dark Label** (`#222222`): Button label text on yellow CTA. Near-black with just enough warmth to avoid pure-black on yellow harshness.
- **Canvas White** (`#ffffff`): Page background and navigation header. The absolute base layer.

### Surface & Skeleton
- **Surface Grey** (`#eeeeee`): Content card background; the resting state of a thumbnail card before the image loads. Also used as section-tab bar background, episode list row backgrounds.
- **Skeleton Ghost** (`rgba(153,153,153,0.15)`): Lazy-load skeleton placeholder at exactly the cover thumbnail's aspect ratio. Flat, no shimmer — consistent with the no-decoration ethos.

### Text Hierarchy
- **Muted Grey** (`#666666`): Secondary text — author names, date metadata at 11px, secondary captions.
- **Tertiary Grey** (`#999999`): Lowest-emphasis labels, placeholder behavior.

### Status
- **Hot Red** (`#ff3042`): "BEST" rank badge on top-performing episodes. High-contrast, attention-forcing — the only warm saturated accent alongside yellow.
- **On-error White** (`#ffffff`): Text on the red badge.

## 3. Typography Rules

### Font Family
- **Primary**: `Pretendard Variable` with fallback to `Pretendard` — the Korean web standard. Chosen for its multi-weight variable axis and exceptional hangul legibility at display and small sizes alike.
- **Fallbacks**: `-apple-system`, `system-ui`, `Segoe UI`, `Noto Sans KR`, `Malgun Gothic`

### Hierarchy

| Role | Size | Weight | Line Height | Color | Use |
|------|------|--------|-------------|-------|-----|
| Content Title | 21px | 700 | 26px (1.24) | `#000000` | Webtoon / novel item title |
| Body / Tab | 16px | 400 | 22.4px (1.40) | `#000000` | Default body, nav tab labels |
| Tab Active | 16px | 700 | 22px (1.38) | `#000000` | Active main tab emphasis |
| List Row | 14px | 400 | 20px (1.43) | `#000000` | Episode list rows, secondary info |
| Section Tab | 13px | 400 | 18px (1.38) | `#000000` | Inactive section tab (홈/정보/소식) |
| Caption | 12px | 400 | 16px (1.33) | `#000000` | Genre tags, author, metadata |
| CTA Label | 12px | 700 | 16px | `#222222` | "첫 화 보기" button label |
| Date / Meta | 11px | 400 | 16px (1.45) | `#666666` | Episode publish date |
| BEST Badge | 11px | 700 | 16px | `#ffffff` | BEST rank badge |

### Principles
- **Content-first sizing**: all chrome text runs at 11–16px; large type belongs to the content artwork, not the interface.
- **Weight as the only signal**: active states use bold (700) on the same text — no color change, no underline. The system trusts weight contrast over hue.
- **Pretendard for everything**: a single typeface across all weights and roles. No display/body split.
- **Line-height discipline**: tight at display (1.24 for titles), standard at body (1.40–1.43), compact for badge/caption (1.33).

## 4. Component Stylings

### Buttons

**Primary CTA (첫 화 보기 / 이어보기)**
- Background: `#ffd618`
- Text: `#222222`
- Radius: 8px
- Height: 56px
- Font: 12px / 700 / Pretendard
- Use: "Start Reading" / "Continue Reading" — the platform's singular primary action per content detail page

**Back/Error CTA**
- Background: `#000000`
- Text: `#ffffff`
- Radius: 100px
- Height: 54px
- Padding: 0px 20px
- Font: 16px / 700 / Pretendard
- Use: Error state "홈으로 가기" (Go Home) full-pill button

### Tabs

**Active Section Tab (Pill)**
- Background: `#000000`
- Text: `#ffffff`
- Radius: 16px
- Height: 32px
- Padding: 7px 14px
- Font: 13px / 700 / Pretendard
- Use: Active content sub-category tab (홈/정보/소식 on detail page)

**Active Main Nav Tab (Pill)**
- Background: `#000000`
- Text: `#ffffff`
- Radius: 100px
- Height: 36px
- Padding: 0px 14px
- Font: 16px / 400 / Pretendard
- Use: Active main recommendation tab (지금핫한/실시간 랭킹 etc.)

### Cards & Containers

**Content Card**
- Background: `#eeeeee`
- Radius: 12px
- Use: Base layer for content cover art; grey shows before the image loads; cover fills the card once loaded

**Skeleton Card**
- Background: `rgba(153,153,153,0.15)`
- Radius: 8px
- Use: Lazy-load placeholder rendered at thumbnail dimensions during content fetch; flat, no pulse shimmer

### Badges

**BEST Rank Badge**
- Background: `#ff3042`
- Text: `#ffffff`
- Radius: 5px
- Padding: 0px 3px
- Font: 11px / 700 / Pretendard
- Use: "BEST" overlay on top-ranked episode rows in comment/reply sections

**Coin Recharge Badge**
- Background: `#ffd618`
- Text: `#000000`
- Radius: 2px
- Padding: 3px 8px
- Font: 16px / 400 / Pretendard
- Use: "충전" (coin recharge) shortcut label in the nav header

**Free Episode Badge**
- Background: `#000000`
- Text: `#ffffff`
- Radius: 2px
- Padding: 0px 4px
- Font: 10px / 700 / Pretendard
- Use: "무료" (free) count overlay on rank indicators

### Inputs

**Search Bar**
- Background: transparent
- Text: `#000000`
- Border: none (borderless, integrated into nav header)
- Font: 13px / Pretendard
- Placeholder: "제목, 작가를 입력하세요." (`#999999`)
- Height: 18px (inline; nav-embedded)
- Use: Title / author search

---

**Verified:** 2026-06-22 (omd:add-reference CREATE — Tier 1 live inspect)
**Tier 1 sources:** https://page.kakao.com/, https://page.kakao.com/content/57668776
**Tier 2 sources:** getdesign.md/kakaopage — not found; styles.refero.design/?q=kakaopage — not found
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: ~4px
- Scale: 3px, 7px, 14px, 16px, 20px, 32px, 48px
- Navigation header: 96px total height (top-nav 40px + sub-category tabs 56px)
- Content card thumbnail: 152×274px aspect ratio (confirmed from skeleton dimensions, portrait orientation)

### Grid & Container
- Max content width: 1200px centered
- Content catalog: fluid card grid — multiple columns, portrait-orientation thumbnails
- Category sub-tabs: horizontal scroll strip at 56px height, full-width
- Episode list: full-width stacked rows at 84px height with title/date/badge

### Whitespace Philosophy
- **Content fills, chrome recedes**: minimal padding around content cards; cover art occupies as much visual real estate as possible.
- **List density over breathing room**: episode rows run at 84px with compressed typography; this is a catalog-browsing surface that values information density.
- **Zero decoration**: no gradients, no textures, no shadows between elements — only solid fills and transparent backgrounds.

### Border Radius Scale
- Tiny (2px): coin/free badges — near-square for a label feel
- Small (5px): BEST rank badges
- Medium (8px): primary CTA button, skeleton placeholders
- Large (12px): content cards, recommendation carousels
- Pill (16px): section sub-tab pills
- Full (100px): main navigation active tab pills, error CTA

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (0) | No shadow | Page background, all card surfaces |
| Ghost (1) | `rgba(0,0,0,0.05)` background | Comment count chips, interaction counters |
| Dimmed (2) | `rgba(0,0,0,0.4)` overlay | Content carousel pager indicator |

**Shadow Philosophy**: KakaoPage uses no box shadows anywhere in the inspected surfaces. The system is rigorously flat — separation is achieved by the content artwork itself (which carries its own visual weight), by the `#eeeeee` surface color on cards, and by structural containment (tabs, headers). This reflects both a performance-conscious (mobile-heavy audience) and content-first design philosophy: shadows compete with the content's own visual complexity.

## 7. Do's and Don'ts

### Do
- Use `#ffd618` yellow exclusively for the primary "Start Reading" CTA — it should appear once per content detail page
- Use the black pill with white text for all active selection states — tabs, active categories
- Keep all UI text in Pretendard; lean on weight (400/700) to create hierarchy
- Use pure black `#000000` for all primary text — no navy, no near-black variants
- Use `#eeeeee` as the neutral card surface — it harmonizes with any cover art color
- Reserve `#ff3042` for rank/status signals only (BEST, etc.)
- Design for portrait-oriented thumbnail grids — content is always taller than wide

### Don't
- Introduce additional accent colors — yellow and red are the complete palette of saturated hues
- Use shadows for elevation — this system is entirely flat
- Place colored overlays on cover art — the artwork owns its space
- Use any sans-serif typeface other than Pretendard; it's the brand's Korean system font
- Use large type sizes for UI labels — chrome text stays at 11–16px; display sizes belong to content titles
- Use the black pill shape for non-interactive decorative elements — it signals "currently selected/active"
- Deviate from `#ffd618` toward any other yellow — this specific value ties back to Kakao's brand identity

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | Single-column content grid, condensed nav |
| Tablet | 768-1024px | 2-3 column grid, sub-tabs scroll horizontally |
| Desktop | 1024-1200px | Full multi-column grid, all tabs visible |

### Touch Targets
- Primary CTA: 56px height — generous tap target
- Section tabs: 32px pill — adequate for touch
- Nav pills: 36px — comfortable
- Episode rows: 84px — easy to tap the correct row

### Collapsing Strategy
- Content grid compresses from multi-column to 2-column to single-column on mobile
- Category sub-tabs scroll horizontally (scrollable overflow) on narrow viewports
- Navigation header condenses but maintains the yellow coin badge and search icon

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: KakaoPage Yellow (`#ffd618`)
- Primary text / active pill: Ink Black (`#000000`)
- CTA label text: Dark Label (`#222222`)
- Page background: Canvas White (`#ffffff`)
- Card surface: Surface Grey (`#eeeeee`)
- Secondary text: Muted Grey (`#666666`)
- Rank badge: Hot Red (`#ff3042`)

### Example Component Prompts
- "Create a content detail page header. White background. Title in 21px Pretendard weight 700 #000000. Below: two CTAs side by side — primary 'Start Reading' at #ffd618 / #222222 / 8px radius / 56px height. Secondary 'Subscribe' as black outline pill."
- "Design an episode list row: #eeeeee background, 84px height. Title 14px Pretendard 400 #000000. Date 11px 400 #666666. BEST badge #ff3042 / white / 5px radius / 11px bold, top-right of thumbnail."
- "Build category nav tabs: horizontal scrolling strip. Inactive: transparent bg, #000000 text, 16px Pretendard 400. Active: black pill #000000 / white text / 100px radius / 36px height."
- "Create skeleton loading state: series of portrait cards at 152×274px, bg rgba(153,153,153,0.15), radius 8px. Flat — no pulse animation."

### Iteration Guide
1. Yellow `#ffd618` = one CTA per page — don't repeat
2. All hierarchy via weight 400/700 in Pretendard, not color or size variation
3. Active selection = black pill; do not use colored indicators
4. Cards = `#eeeeee` base; the art takes over once loaded
5. No shadows anywhere — separate by containment and flat fills
6. Red `#ff3042` only for rank/urgency signals
7. Content art owns the color; UI defers to black/white/yellow

---

## 10. Voice & Tone

KakaoPage's voice is **immersive, fan-fluent, and quietly epic** — a platform that takes its IP catalog as seriously as the readers who love it. The interface copy is sparse to the point of near-invisibility: navigation labels are single-word nouns (추천, 웹툰, 웹소설, 책), CTAs are concrete action verbs (첫 화 보기, 이어보기), and status labels are abbreviations (무료, BEST). The brand never editorializes about the content — it steps aside and lets "지금핫한" (Hot Right Now) speak for itself.

| Context | Tone |
|---|---|
| Main navigation tabs | Minimal noun labels — 추천, 웹툰, 웹소설, 책, 요일연재 |
| Sub-category tabs | Populist discovery framing — 지금핫한, 실시간 랭킹, 완결추천 |
| Primary CTA | Direct action — 첫 화 보기, 이어보기 |
| Rank signals | Prestige shorthand — BEST |
| Free access | Clear benefit statement — 무료, 기다리면 무료 |
| Error/empty states | Calm redirect — 홈으로 가기 |

**Voice samples (verified live 2026-06-22):**
- "기다리면 무료 웹툰" — section header (access model explained in four words). *(verified live 2026-06-22)*
- "지금핫한" — primary recommendation tab (portmanteau energy, platform-native shorthand). *(verified live 2026-06-22)*
- "오리지널 독점 웹툰, 웹소설 부터 책 까지 한 곳에서 즐기세요. 인기 콘텐츠가 기다리면 무료!" — meta description (complete brand promise in two sentences). *(verified live 2026-06-22)*

**Forbidden register**: genre-describing spoilers in UI chrome, overly promotional adjectives on titles, urgency dark patterns ("마지막 기회!" for paid content), English loanwords where Korean serves better.

## 11. Brand Narrative

카카오페이지 (KakaoPage) launched in 2013 as Kakao's digital content marketplace for Korea's mobile-first era, initially selling novels and comics in small paid installments. It pioneered the "기다리면 무료" (Wait for Free) model — readers who wait a set interval can access episodes without purchase — which became the structural engine that built one of Korea's largest paid-content audiences. The model proved that patience, not piracy, was the viable alternative to payment: it created massive top-of-funnel reader acquisition while monetizing through impatience.

Over the decade, KakaoPage evolved from a marketplace into Kakao Entertainment's IP pipeline. Platform-native webtoons and web novels — many originating on Kakao's own creator tools — became the source material for K-drama adaptations, animated series, and global distribution through Tapas (English-language) and Piccoma (Japan). The design system reflects this vertical integration: the platform positions itself not as a mere reader app but as the origin point of Korean popular culture.

The 2021 merger between Kakao M and Kakao Page to form Kakao Entertainment consolidated the media-tech stack. Today KakaoPage is the web/desktop face of a content empire that spans webtoon creation, talent management, drama production, and international licensing. The design — clean, content-first, IP-respectful — is engineered to serve hundreds of distinct visual identities without diluting any of them.

## 12. Principles

1. **Content is the design.** The platform's visual identity defers entirely to the IP it hosts. *UI implication:* monochrome chrome (black/white/grey) so that cover art at any color temperature feels at home. Never introduce competing accent colors.
2. **Wait or pay — the system is transparent.** The 기다리면 무료 model means readers always know when free access opens. *UI implication:* "무료" labels are permanent, prominent, and never buried; the time cost is disclosed at the episode row.
3. **One action per surface.** Each content detail page has a single yellow CTA — not a CTA hierarchy, not three equal buttons. *UI implication:* one `#ffd618` button per screen; secondary actions use neutral/ghost styling.
4. **Rank signals create urgency, not noise.** BEST badges appear only where they reflect genuine ranking data. *UI implication:* hot red `#ff3042` appears on the BEST badge alone; it's never reused for promotions or marketing.
5. **Mobile density is a feature.** The target audience reads on smartphones; compressed episode rows and small badge text are intentional. *UI implication:* 11–14px episode metadata; portrait-oriented thumbnails optimized for vertical scroll rather than widescreen browsing.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable KakaoPage user segments (Korean webtoon and web-novel readers), not individual people.*

**이하나, 22, 서울.** A university student who discovered KakaoPage through a webtoon-to-drama adaptation. She uses 기다리면 무료 to catch up on ongoing series and pays for impatient access on her three to five top titles. She values the BEST ranking to discover which episodes other readers found significant.

**박민준, 31, 부산.** A commuter who reads web novels on the subway. He has 12 series in his 보관함 (library), half of which are waiting for free episodes. He appreciates the episode row format — quick scan, tap, read — and finds the sparse UI lets him focus on the story.

**김서연, 38, 대전.** A working parent who started reading KakaoPage after her daughter recommended a romance webtoon. She buys coins for titles she loves, uses the recommend tab to find new content, and would not use the platform if it felt visually overwhelming. The clean white interface signals trustworthiness.

## 14. States

| State | Treatment |
|---|---|
| **Empty (library, nothing saved)** | White canvas, black body text explaining the empty state, single yellow CTA to the recommendation feed. No illustration. |
| **Empty (no search results)** | Muted grey `#999999` message: no titles matched. Suggestion to try shorter keywords. |
| **Loading (catalog)** | Grid of `rgba(153,153,153,0.15)` skeleton cards at thumbnail dimensions, 8px radius. Flat — no pulse. Episode rows under headings hold their grey background while content loads. |
| **Loading (content detail)** | Header area: `#eeeeee` block at cover art dimensions. Episode list rows: same grey, no skeleton text. |
| **Error (content not found)** | White canvas, brief black message in 16px Pretendard 400, one black full-pill button "홈으로 가기" (bg `#000000`, text `#ffffff`, radius 100px, height 54px). |
| **Error (network failure)** | Inline message below the failed section; retry link in plain black text. No modal. |
| **Success (episode unlocked)** | The episode begins immediately. No celebration screen — immersion over acknowledgment. |
| **Skeleton (card)** | `rgba(153,153,153,0.15)` at exact cover art aspect ratio (portrait). Remains until image fully loaded. |
| **Disabled (locked episode, not free yet)** | Row remains visible, date and title shown normally. No greying-out — the wait time is the only signal that it's not yet accessible. |
| **Free-unlocked (episode)** | "무료" badge in black/white over the rank counter overlay. Quiet — not a celebratory state, just a status flag. |

## 15. Motion & Easing

**Durations:**

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Skeleton → content swap (abrupt is intentional — no fade-in on cover art) |
| `motion-fast` | 100ms | Tab active-pill slide, badge appear |
| `motion-standard` | 200ms | Navigation scroll offset adjust |
| `motion-page` | 250ms | Route transition (slide or fade) |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Content entering viewport (decelerate into place) |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Overlays / drawers leaving |
| `ease-standard` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Default UI state changes |

**Motion rules**: The platform's primary motion vocabulary is **minimal and structural** — transitions mark navigation changes, not content moments. Cover art never animates into view (the skeleton-to-image swap is instant, not faded); adding a fade would create visual noise across dozens of simultaneously loading thumbnails. The active tab pill snaps or slides, not bounces — a reading-focused audience expects the UI to get out of the way. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the reading flow is unaffected.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-22) via playwright getComputedStyle on:
- https://page.kakao.com/ (homepage)
- https://page.kakao.com/content/57668776 (content detail page — web novel "마법학교 마법사로 살아가는 법")

Key observations used:
- body: Pretendard Variable, 16px, rgb(0,0,0), bg rgb(255,255,255)
- nav header: bg rgb(255,255,255), h 96px, 16px Pretendard
- primary CTA "첫 화 보기": bg rgb(255,214,24) = #ffd618; color rgb(34,34,34); radius 8px; h 56px
- coin badge "충전": bg rgb(255,214,24); radius 2px; padding 3px 8px
- BEST badge: bg rgb(255,48,66) = #ff3042; white text; radius 5px; 11px/700
- active section tab pill: bg rgb(0,0,0); white text; radius 16px; h 32px; padding 7px 14px
- active main nav tab pill: bg rgb(0,0,0); white text; radius 100px; h 36px
- content card: bg rgb(238,238,238) = #eeeeee; radius 12px
- skeleton card: bg rgba(153,153,153,0.15); radius 8px
- comment chip: bg rgba(0,0,0,0.05); radius 8px; h 28px
- error/back CTA: bg rgb(0,0,0); white text; radius 100px; h 54px; 16px/700
- typography: 21px/700 (content title), 16px/400 (body), 16px/700 (tab active), 14px/400 (list), 13px/400 (sub-tabs), 12px/400 (caption), 12px/700 (CTA label), 11px/400/#666666 (date), 11px/700 (BEST badge)
- body bgFreq: rgba(153,153,153,0.15)×131, rgb(255,255,255)×19, rgb(0,0,0)×5, rgb(238,238,238)×2, rgb(255,214,24)×1

Brand narrative: KakaoPage (카카오페이지) launched 2013; 기다리면 무료 model; Kakao Entertainment merger 2021.
These are widely documented public facts. Specific founding details are general public knowledge.

Voice samples (§10) verified live on page.kakao.com homepage on 2026-06-22 (meta description, section headers, tab labels).

Personas (§13) are fictional archetypes. Names are illustrative and do not refer to real people.
-->
