---
id: tellingme
name: TellingMe
display_name_kr: 텔링미
country: KR
category: healthcare
homepage: "https://tellingme.co.kr/"
primary_color: "#07beb8"
logo:
  type: favicon
  slug: "https://tellingme.co.kr/apple-icon-180x180.png"
verified: "2026-07-02"
added: "2026-07-02"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-07-02"
  note: "primary = signature teal (#07beb8) used on every hero/section headline — the single saturated hue on an otherwise warm-neutral canvas. CTAs are soft mint (#f2fdf6) / cream (#f9f7f2) pills with black text. Flat, shadowless system on a warm off-white canvas (#fffdfa)."
  colors:
    primary: "#07beb8"
    canvas: "#fffdfa"
    ink: "#000000"
    muted: "#807f7d"
    heading: "#404642"
    heading-soft: "#666f6a"
    mint: "#f2fdf6"
    cream: "#f9f7f2"
    surface: "#e6e4e2"
  typography:
    family: { display: "NanumSquareRound" }
    hero:      { size: 48, weight: 700, use: "Hero / section headline in brand teal, NanumSquareRound Bold" }
    headline:  { size: 48, weight: 400, use: "Multi-line section headlines, NanumSquareRound Regular" }
    subhead:   { size: 32, weight: 400, use: "Supporting sub-headlines in sage grey" }
    body:      { size: 16, weight: 400, lineHeight: 1.0, use: "Default reading / paragraph text" }
    button:    { size: 13, weight: 400, use: "Pill CTA button label" }
  spacing: { xs: 4, sm: 8, base: 16, btn-y: 18, lg: 24, xl: 32, btn-x: 36, xxl: 48 }
  rounded: { md: 20, full: 9999 }
  shadow:
    none: "none"
  components:
    button-start:    { type: button, bg: "#f2fdf6", fg: "#000000", radius: "20px", padding: "18px 36px", height: "53px", font: "13px / 400 NanumSquareRound", use: "Hero primary CTA (시작하기)" }
    button-download: { type: button, bg: "#f2fdf6", fg: "#000000", radius: "20px", padding: "18px 32px", height: "53px", font: "13px / 400 NanumSquareRound", use: "App-download CTA (앱 다운로드)" }
    button-subscribe: { type: button, bg: "#f9f7f2", fg: "#000000", radius: "20px", padding: "18px 32px", height: "53px", font: "13px / 400 NanumSquareRound", use: "Newsletter subscribe pill (텔링미 소식 구독)" }
    card-cream:      { type: card, bg: "#f9f7f2", fg: "#000000", radius: "20px", use: "Cream feature / content section block" }
    surface-panel:   { type: card, bg: "#e6e4e2", fg: "#404642", radius: "20px", use: "Warm-grey surface panel / divider block" }
  components_harvested: true
---

# Design System Inspiration of TellingMe

## 1. Visual Theme & Atmosphere

TellingMe (텔링미) is a Korean journaling-diary product — "진정한 나에 가까워지는 저널링 다이어리" (a journaling diary that brings you closer to your true self) — and its homepage feels less like a software landing page and more like the paper cover of a warm, gentle notebook. The canvas is not pure white but a soft, warm off-white (`#fffdfa`) that reads like uncoated stationery, immediately lowering the emotional temperature of the page. Against that calm ground the system deploys exactly one saturated hue: a fresh, hopeful teal (`#07beb8`) that colors every hero and section headline. Everything else — text, buttons, surfaces — stays in a warm neutral register, so the teal does all the emotional work, signaling growth, calm, and self-discovery.

The typographic personality is unmistakably soft and approachable. The entire site is set in **NanumSquareRound**, a rounded-terminal Korean sans that trades the crisp geometry of Pretendard or SUIT for friendly, pillowy letterforms. Headlines run large at 48px in the teal, alternating between NanumSquareRound Regular (weight 400) and Bold (weight 700) within a single stanza to emphasize the key phrase — for example "나를 깨닫는 시간" set in bold while the surrounding line stays regular. Supporting sub-headlines drop to 32px in a muted sage grey (`#404642`), and body copy sits quietly at 16px in near-black ink (`#000000`) with softer grey (`#807f7d`) for secondary text. There is no aggressive weight contrast and no tight tracking; the mood is unhurried.

What most distinguishes TellingMe from its fintech and SaaS peers is its complete rejection of depth. Live inspection found `box-shadow: none` across headlines, buttons, and surface blocks — the interface is entirely flat. Separation comes from warm tinted blocks rather than elevation: cream (`#f9f7f2`) and warm-grey (`#e6e4e2`) panels segment the page, and the CTAs are soft-cornered pills at a 20px radius filled with the palest mint (`#f2fdf6`) or cream (`#f9f7f2`), carrying black text and no border. The muted sage `#666f6a` appears on the closing, quieter headlines. The result is a tender, papery, mobile-native aesthetic — a wellness product that feels like a safe, private space rather than a dashboard.

**Key Characteristics:**
- NanumSquareRound throughout — rounded, friendly Korean letterforms for a gentle, diary-like voice
- A single saturated teal (`#07beb8`) reserved for headlines — the one emotional accent on a neutral page
- Warm off-white canvas (`#fffdfa`) instead of pure white — a papery, low-temperature ground
- Near-black ink (`#000000`) body with warm-grey (`#807f7d`) secondary text
- Sage-grey headings (`#404642`) and softer sage (`#666f6a`) for supporting copy
- Flat, shadowless depth — cream (`#f9f7f2`) and warm-grey (`#e6e4e2`) tinted blocks do the separating
- Soft 20px-radius pill CTAs in pale mint (`#f2fdf6`) / cream (`#f9f7f2`) with black text, no border
- Weight play within a headline (400 vs 700) to emphasize the key phrase rather than color or size shifts

## 2. Color Palette & Roles

### Primary
- **Telling Teal** (`#07beb8`): The signature brand color and the only saturated hue on the page. Applied to every hero and section headline. It carries the entire emotional tone — fresh, hopeful, calm — and is the color the eye learns to associate with the product's voice.

### Canvas & Surface
- **Warm Off-White** (`#fffdfa`): The page background. A warm, papery near-white that lowers the visual temperature and evokes stationery rather than screens.
- **Mint** (`#f2fdf6`): The palest green tint, used as the fill for primary and app-download CTA pills.
- **Cream** (`#f9f7f2`): A warm cream tint, used both as the secondary CTA fill and as a section/content block background — the most common non-canvas surface.
- **Warm Grey** (`#e6e4e2`): A soft warm-grey surface for panels and dividers, providing quiet flat separation without borders or shadow.

### Text Hierarchy
- **Ink** (`#000000`): Primary body and CTA-label text. Pure black used sparingly-but-directly on the warm ground.
- **Muted Grey** (`#807f7d`): Secondary text, captions, and supporting labels — the workhorse muted tone.
- **Sage Heading** (`#404642`): Sub-headline color (32px H3s) — a dark warm-grey with a green undertone that harmonizes with the teal.
- **Soft Sage** (`#666f6a`): A lighter sage grey for closing, quieter headlines where emphasis relaxes.

## 3. Typography Rules

### Font Family
- **Display & Body**: `NanumSquareRound` (with `sans-serif` fallback) — a single rounded Korean sans used for everything, from 48px headlines down to 13px button labels. Its rounded terminals are the core of the brand's soft, approachable personality.

### Hierarchy

| Role | Font | Size | Weight | Color | Notes |
|------|------|------|--------|-------|-------|
| Hero / Section Headline (emphasis) | NanumSquareRound | 48px | 700 | `#07beb8` | Bold key phrase within a headline stanza |
| Headline (regular) | NanumSquareRound | 48px | 400 | `#07beb8` | Surrounding headline lines |
| Sub-headline | NanumSquareRound | 32px | 400 | `#404642` | Supporting explanatory lines |
| Body | NanumSquareRound | 16px | 400 | `#000000` | Default reading text, line-height ~1.0 |
| Secondary text | NanumSquareRound | 16px | 400 | `#807f7d` | Captions, muted supporting copy |
| Button label | NanumSquareRound | 13px | 400 | `#000000` | Pill CTA labels |

### Principles
- **One font, one family**: NanumSquareRound carries every role. There is no display/body split — the rounded sans is the single typographic voice.
- **Weight, not size, for emphasis**: Within a 48px headline the system bolds the key phrase (weight 700) against regular (weight 400) siblings, rather than scaling or recoloring.
- **Teal owns the headline**: Headlines are teal (`#07beb8`); explanatory copy is sage (`#404642`) or ink (`#000000`). The color assignment itself is the hierarchy signal.
- **Quiet body**: Body text stays at a calm 16px weight 400 — no tight tracking, no heavy weights. The reading experience is unhurried, matching the reflective product.

## 4. Component Stylings

### Buttons

**Primary CTA (Start)**
- Background: `#f2fdf6`
- Text: `#000000`
- Radius: 20px
- Padding: 18px 36px
- Height: 53px
- Font: 13px NanumSquareRound weight 400
- Shadow: none
- Use: Hero primary call-to-action ("시작하기")

**App Download**
- Background: `#f2fdf6`
- Text: `#000000`
- Radius: 20px
- Padding: 18px 32px
- Height: 53px
- Font: 13px NanumSquareRound weight 400
- Shadow: none
- Use: App-download call-to-action ("앱 다운로드")

**Subscribe (Secondary)**
- Background: `#f9f7f2`
- Text: `#000000`
- Radius: 20px
- Padding: 18px 32px
- Height: 53px
- Font: 13px NanumSquareRound weight 400
- Shadow: none
- Use: Newsletter subscribe pill ("텔링미 소식 구독")

### Cards & Containers

**Cream Section Block**
- Background: `#f9f7f2`
- Text: `#000000`
- Radius: 20px
- Shadow: none
- Use: Feature / content section block on the warm canvas

**Warm-Grey Panel**
- Background: `#e6e4e2`
- Text: `#404642`
- Radius: 20px
- Shadow: none
- Use: Surface panel / quiet divider block

---

**Verified:** 2026-07-02
**Tier 1 sources:** https://tellingme.co.kr/ (homepage, live computed style — full inspect), https://medium.com/@tellingme (official TellingMe / 텔링어스 team Medium publication, live)
**Tier 2 sources:** getdesign.md/tellingme (0 DESIGN.md files — not listed); styles.refero.design/?q=tellingme (no matching brand entry — only generic gallery results)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: ~4px
- Scale: 4px, 8px, 16px, 18px, 24px, 32px, 36px, 48px
- Notable: CTA pills use an asymmetric 18px vertical padding with a generous 32-36px horizontal padding, giving the soft pills a comfortable, tappable hit area

### Grid & Container
- Centered single-column narrative flow — the page reads top-to-bottom like a story, one headline stanza per section
- Large 48px teal headlines anchor each section, with 32px sage sub-headlines beneath
- Cream (`#f9f7f2`) and warm-grey (`#e6e4e2`) blocks group related content without borders
- CTA pills sit centered beneath their headline stanza

### Whitespace Philosophy
- **Breathing room and calm**: The layout is airy and unhurried — generous vertical rhythm between headline stanzas suits a reflective, journaling product.
- **Flat segmentation**: Sections separate by warm tint (`#f9f7f2` / `#e6e4e2` vs the `#fffdfa` canvas), never by shadow or heavy borders.
- **Emotional pacing**: The single-column story cadence guides the reader gently, one idea at a time, mirroring the "하루 한 번" (once a day) daily-question ritual.

### Border Radius Scale
- Soft (20px): buttons and content blocks — the workhorse rounding
- Full (9999px / 50%): circular avatars, emotion-icon badges, and dots

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, headlines, body — nearly everything |
| Tint (Level 1) | `#f9f7f2` / `#e6e4e2` background shift | Card / section separation without elevation |

**Shadow Philosophy**: TellingMe is a fully shadowless, flat system. Live inspection found `box-shadow: none` across headlines, CTA pills, and surface blocks. Depth and grouping are communicated entirely through warm tinted surfaces — cream (`#f9f7f2`) and warm-grey (`#e6e4e2`) — set against the off-white canvas (`#fffdfa`). This is a deliberate wellness-product choice: the flat, papery treatment keeps the interface calm and non-clinical, avoiding the "floating card" heaviness of dashboards and banking apps. When emphasis is needed, the system reaches for the teal (`#07beb8`) or a bolder NanumSquareRound weight, never elevation.

## 7. Do's and Don'ts

### Do
- Set all type in NanumSquareRound — the rounded letterforms are the brand's voice
- Reserve teal (`#07beb8`) for headlines as the single saturated accent
- Use the warm off-white canvas (`#fffdfa`) instead of pure white — the warmth matters
- Emphasize key phrases by bolding within a headline (weight 700 vs 400), not by recoloring
- Keep CTAs as soft 20px-radius pills in mint (`#f2fdf6`) or cream (`#f9f7f2`) with black text
- Separate sections with warm tinted blocks (`#f9f7f2`, `#e6e4e2`), never shadows
- Use sage greys (`#404642`, `#666f6a`) for supporting copy to harmonize with the teal
- Keep the mood calm and unhurried — generous whitespace, one idea per stanza

### Don't
- Use shadows or elevation for depth — TellingMe is a flat, shadowless system
- Introduce a second saturated color — teal (`#07beb8`) is the only accent
- Use pure white (`#ffffff`) as the canvas — the warm off-white `#fffdfa` sets the tone
- Set headlines in a sharp geometric sans — NanumSquareRound's roundness is essential
- Use sharp or square corners on CTAs — buttons are soft 20px pills
- Add heavy borders on cards — separation is by tint alone
- Shout with tight tracking or extreme weight contrast — the voice is gentle
- Fill buttons with the teal — the teal lives in the headline, buttons stay pale

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, headline sizes compress, CTA pills stack full-width |
| Tablet | 640-1024px | Moderate padding, centered stanzas |
| Desktop | 1024-1440px | Full-width centered narrative, 48px headlines at full size |

### Touch Targets
- CTA pills at 53px height with 18px vertical / 32-36px horizontal padding — comfortably tappable
- Soft 20px radius gives the pills an unmistakable, friendly target shape

### Collapsing Strategy
- Hero: 48px teal headline scales down on mobile, weight play (400/700) maintained
- Section stanzas: single column throughout — the story flow is inherently mobile-first
- Cream / warm-grey blocks: maintain full-width treatment, reduce internal padding on narrow viewports
- CTA pills: expand toward full-width on mobile for easy thumb reach

### Image Behavior
- App screenshots and illustrations carry no shadow at any size, consistent with the flat system
- Emotion icons ("뱁새 감정티콘") render as rounded/circular marks
- Content blocks maintain the 20px radius across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Headline accent: Telling Teal (`#07beb8`)
- Canvas: Warm Off-White (`#fffdfa`)
- Body text: Ink (`#000000`)
- Secondary text: Muted Grey (`#807f7d`)
- Sub-headline: Sage Heading (`#404642`)
- Soft headline: Soft Sage (`#666f6a`)
- Primary CTA fill: Mint (`#f2fdf6`)
- Secondary CTA / section fill: Cream (`#f9f7f2`)
- Surface panel: Warm Grey (`#e6e4e2`)

### Example Component Prompts
- "Create a hero on a warm off-white (#fffdfa) canvas. Headline at 48px NanumSquareRound, teal #07beb8, with the key phrase in weight 700 and the rest in weight 400. Sub-headline at 32px NanumSquareRound weight 400 in sage #404642. One soft pill CTA below: #f2fdf6 background, #000000 text, 20px radius, 18px 36px padding, 13px NanumSquareRound — '시작하기'. No shadow."
- "Design a feature block: cream #f9f7f2 background, 20px radius, no shadow, no border. Title 48px NanumSquareRound weight 700 teal #07beb8. Body 16px NanumSquareRound weight 400 in #000000, secondary lines in #807f7d."
- "Build a secondary subscribe pill: #f9f7f2 background, #000000 text, 20px radius, 18px 32px padding, 13px NanumSquareRound — '텔링미 소식 구독'. Flat, no shadow."
- "Create a warm-grey surface panel: #e6e4e2 background, 20px radius, sage #404642 text, no shadow — used to quietly divide sections."

### Iteration Guide
1. NanumSquareRound for every role — the rounded sans is non-negotiable
2. Teal (`#07beb8`) is the single accent, and it lives in headlines
3. Canvas is warm off-white (`#fffdfa`), never pure white
4. No shadows — separate with cream (`#f9f7f2`) and warm-grey (`#e6e4e2`) tints
5. Emphasis is weight (700 vs 400) inside a headline, not recoloring
6. CTAs are pale (mint/cream) 20px pills with black text — never teal-filled
7. Supporting copy uses sage greys (`#404642`, `#666f6a`); body uses ink (`#000000`) / muted grey (`#807f7d`)
8. Keep the pacing calm — one idea per stanza, generous whitespace

---

## 10. Voice & Tone

TellingMe's voice is **gentle, encouraging, and inward-turning** — a soft companion for daily self-reflection rather than a productivity coach. Copy speaks in warm, plain Korean and frames journaling as a small, low-pressure daily ritual ("하루 한 번" / once a day) rather than a task. The register is intimate and reassuring: it invites rather than instructs, and it centers the reader's inner life ("오직 나를 위한 질문" / a question just for you). Nothing is urgent; nothing is gamified into pressure.

| Context | Tone |
|---|---|
| Hero headlines | Warm, invitational, first-person-inward. "하루 한 번, 질문에 답변하며 나를 깨닫는 시간." |
| Feature descriptions | Gentle explanation of the ritual. Frames features as care, not utility. |
| Emotion / tracking copy | Playful but soft. The "뱁새 감정티콘" (bird emotion stickers) make feelings approachable. |
| CTAs | Low-pressure invitations. "시작하기", "앱 다운로드", "텔링미 소식 구독". |
| Encouragement copy | Affirming, patient. "꾸준한 기록은 나에 대해 더 많은 걸 알게 해줘요!" |

**Voice samples (verbatim from live homepage):**
- "하루 한 번, 질문에 답변하며 나를 깨닫는 시간" — hero (daily reflective ritual). *(verified live 2026-07-02)*
- "오직 나를 위한 질문이 매일 오전 6시에 배달돼요!" — feature line (a question delivered just for you at 6am). *(verified live 2026-07-02)*
- "총 6가지 뱁새 감정티콘으로 글의 감정을 정리해보세요" — feature line (six bird emotion stickers to organize feelings). *(verified live 2026-07-02)*
- "꾸준한 기록은 나에 대해 더 많은 걸 알게 해줘요!" — encouragement (steady journaling reveals more about you). *(verified live 2026-07-02)*

**Forbidden register**: productivity pressure ("streak을 놓치지 마세요" guilt), clinical or diagnostic language about emotions, hype/urgency, exclamation-heavy sales tone, cold or corporate phrasing that breaks the intimate, safe-space feeling.

## 11. Brand Narrative

TellingMe (텔링미) is a journaling-diary app built by the team **텔링어스 (Tellus)** — as stated on the team's own Medium publication, "텔링미를 만드는 텔링어스 팀의 이야기" (the story of the Tellus team that makes TellingMe). The product's premise, declared directly on the homepage, is "진정한 나에 가까워지는 저널링 다이어리" — a journaling diary that brings you closer to your true self. Where most diary apps hand the user a blank page, TellingMe removes the intimidation of the empty page by *delivering a question* each day: "오직 나를 위한 질문이 매일 오전 6시에 배달돼요" (a question just for you, delivered every morning at 6am).

The daily-question ritual is the core mechanic and the core emotional promise. Answering one gentle, self-directed prompt per day lowers the barrier to reflection and turns journaling into a sustainable habit rather than a chore. The product layers a playful emotional-literacy tool on top: six "뱁새 감정티콘" (crow-tit / *babsae* bird emotion stickers) that let users tag the feeling embedded in each entry, making emotions approachable and legible ("글 속에 담긴 나의 감정을 듀이티콘으로 나타내요"). Over time, "매일 매일, 나의 진솔한 생각이 쌓여가요" (day by day, honest thoughts accumulate) — and the stated payoff is self-knowledge: "꾸준한 기록은 나에 대해 더 많은 걸 알게 해줘요."

What TellingMe refuses, visible in its design: the clinical coldness of mental-health tooling and the streak-guilt pressure of habit apps. What it embraces: a warm, papery off-white canvas, a single hopeful teal, rounded friendly letterforms, and copy that invites rather than instructs. The design is engineered to feel like a private, safe notebook — a place the user *wants* to return to once a day.

*(Narrative sourced from the live homepage and the official 텔링어스 Medium publication, verified 2026-07-02. Specific founding-team details beyond the publicly stated team name "텔링어스" are not asserted here.)*

## 12. Principles

1. **Remove the blank page.** The product's central insight is that the empty diary is the enemy of reflection. *UI implication:* always lead with a delivered prompt or a gentle starting point; never present a bare, intimidating input.
2. **One accent, all feeling.** A single teal (`#07beb8`) carries the entire emotional tone. *UI implication:* reserve the teal for headlines and moments that matter; keep everything else warm-neutral so the accent never dilutes.
3. **Calm over clinical.** This is emotional self-care, not a medical instrument. *UI implication:* warm off-white canvas, rounded type, no shadows, no diagnostic language — the interface should feel like a safe notebook.
4. **Invite, don't pressure.** Journaling is a low-pressure daily ritual, not a streak to defend. *UI implication:* affirming, patient copy; no guilt mechanics; celebrate returning, not perfect consistency.
5. **Make emotions approachable.** Feelings are surfaced through playful bird stickers, not sliders or scores. *UI implication:* use soft, friendly, rounded visual language for anything touching emotion.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable TellingMe user segments (Korean users seeking daily self-reflection and emotional journaling), not individual people.*

**김하늘, 26, 서울.** A young professional who wants to build a reflection habit but always abandons blank-page diaries. Loves that TellingMe delivers one question each morning so she never faces an empty page. Uses the bird emotion stickers to notice patterns in her mood over weeks.

**이준서, 31, 경기.** A quietly anxious office worker using journaling as a low-cost mental-wellness practice. Values that the app feels calm and non-clinical — warm colors, soft type — rather than like a therapy tool. Answers his 6am question on the commute.

**박서연, 22, 부산.** A university student drawn to the playful "뱁새 감정티콘" and the gentle tone. Finds most habit apps guilt-inducing; TellingMe's invitational voice keeps her coming back without pressure.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no entries yet)** | Warm off-white (`#fffdfa`) canvas. A single gentle line in ink (`#000000`) inviting the first answer, with the day's delivered question shown as the starting point. One mint (`#f2fdf6`) pill CTA. No clutter, no guilt. |
| **Empty (no saved emotions)** | Muted grey (`#807f7d`) single line explaining nothing is tagged yet, with a soft path to add an emotion sticker. Calm and non-judgmental. |
| **Loading (feed / entries fetch)** | Flat skeleton blocks on cream (`#f9f7f2`) at final dimensions, 20px radius. No shadow shimmer — a flat warm pulse consistent with the shadowless system. |
| **Loading (daily question fetch)** | Inline soft placeholder in the question card; previous day's content stays calm and visible. |
| **Error (save failed)** | Gentle inline message in ink (`#000000`) with a plain-language explanation and a soft retry. No alarm-red, no clinical "오류" alone — states what to do next warmly. |
| **Error (form / entry validation)** | Field-level message below the input in a soft tone, describing what's needed rather than scolding. |
| **Success (entry saved)** | Brief, warm inline confirmation; the accumulating record ("쌓여가요") is reinforced quietly. No loud celebration, no emoji spam. |
| **Skeleton** | Cream (`#f9f7f2`) blocks at final dimensions, 20px radius, flat pulse. |
| **Disabled** | Muted grey (`#807f7d`) text on a reduced-opacity surface; the teal accent softens rather than turning cold grey, preserving the warm brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Pill press, hover, focus |
| `motion-standard` | 220ms | Card / stanza reveal, sheet, dropdown |
| `motion-slow` | 340ms | Page-level transitions, daily-question reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, stanzas, question reveal |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is soft and unhurried, matching the calm, reflective product. Pill CTAs respond to press with a gentle scale/opacity shift; section stanzas and the daily question fade in from below at `motion-standard / ease-enter`. There is no bounce, spring, or playful overshoot beyond the friendly emotion stickers themselves — a journaling product signals steadiness and safety, not stimulation. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-07-02) via playwright getComputedStyle on https://tellingme.co.kr/:
- body: NanumSquareRound / color rgb(0,0,0) #000000 / bg rgb(255,253,250) #fffdfa / 16px
- Hero/section H2 headlines: 48px / weight 400 & 700 / color rgb(7,190,184) #07beb8
- Sub-headline H3: 32px / weight 400 / color rgb(64,70,66) #404642
- Softer headline H2: 48px / color rgb(102,111,106) #666f6a
- CTA "시작하기": bg rgb(242,253,246) #f2fdf6 / text #000000 / radius 20px / padding 18px 36px / 13.33px / height 53px
- CTA "앱 다운로드": bg #f2fdf6 / radius 20px / padding 18px 32px / height 53px
- CTA "텔링미 소식 구독": bg rgb(249,247,242) #f9f7f2 / radius 20px / padding 18px 32px / height 53px
- surface warm-grey rgb(230,228,226) #e6e4e2; secondary text rgb(128,127,125) #807f7d
- box-shadow: none across headlines/buttons/surfaces (flat, shadowless system confirmed)
- document.title: "텔링미 | 진정한 나에 가까워지는 저널링 다이어리"
- meta description: "하루 한 번 나를 깨닫는 시간! 오직 나를 위한 질문이 배달되는 저널링 다이어리 '텔링미'..."

Second brand-owned surface — https://medium.com/@tellingme (verified live 2026-07-02):
- Official publication "tellingme(텔링미)" / bio "텔링미를 만드는 텔링어스 팀의 이야기"
- Story categories "기획 - Business" (11 stories), "개발 - Engineering" (14 stories)
- Note: Medium chrome (Times/green) is Medium's own design, NOT TellingMe tokens; cited only
  as a brand-owned source for the team name and product narrative, not for design tokens.

Token-level claims (§1-9) are sourced from the tellingme.co.kr live inspection only.

Voice samples (§10) are verbatim from the live homepage headlines/feature lines and meta.

Brand narrative (§11): TellingMe is a Korean journaling-diary app; team name "텔링어스"
is taken from the official Medium publication bio. Founding-team specifics beyond the
publicly stated team name are not asserted.

Personas (§13) are fictional archetypes informed by publicly observable TellingMe user
segments (Korean users seeking daily self-reflection). Names are illustrative; they do not
refer to real people.

Interpretive claims (e.g., "remove the blank page", "calm over clinical", "one accent, all
feeling") are editorial readings connecting TellingMe's observed design and copy to its
positioning, not directly sourced TellingMe statements.
-->
