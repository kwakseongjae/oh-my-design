---
id: returnzero
name: Return Zero
display_name_kr: 리턴제로
country: KR
category: ai
homepage: "https://www.rtzr.ai"
primary_color: "#222222"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=rtzr.ai&sz=128"
verified: "2026-06-26"
added: "2026-06-26"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-26"
  note: "Intentionally near-monochrome system: charcoal ink (#222222) is the single action color across every surface (CTAs, nav, headings). Selective accents are per-product — mint (#98ffac) for dark-band metrics, brand blue (#2e67fe) for corporate product titles, STT blue (#3a89ff) on developers.rtzr.ai, highlight yellow (#ffde30) on pricing. Sole typeface Pretendard. Shadowless."
  colors:
    ink: "#222222"
    black: "#000000"
    canvas: "#ffffff"
    mint: "#98ffac"
    brand-blue: "#2e67fe"
    stt-blue: "#3a89ff"
    highlight: "#ffde30"
    slate: "#444444"
    muted: "#999999"
    faint: "#bbbbbb"
    hairline: "#eeeeee"
    surface: "#fafafa"
  typography:
    family: { sans: "Pretendard" }
    display-stat: { size: 124, weight: 300, use: "Hero metric numbers (35, 48, 2.5배) on dark bands" }
    display-mint: { size: 60, weight: 600, use: "Mint highlight figures on dark sections" }
    section:      { size: 40, weight: 600, lineHeight: 1.3, use: "Section headings" }
    hero-dev:     { size: 36, weight: 600, use: "Developer-site hero H1" }
    body-lg:      { size: 18, weight: 600, use: "Large button labels, lead text" }
    body:         { size: 16, weight: 400, lineHeight: 1.5, use: "Standard body, nav links" }
    button:       { size: 14, weight: 600, use: "Compact button label" }
    caption:      { size: 12, weight: 500, use: "Pill / fine label" }
  spacing: { xs: 4, sm: 8, md: 10, base: 16, lg: 24, xl: 40, section: 64 }
  rounded: { sm: 4, pill-sm: 30, pill: 60, full: 9999 }
  shadow:
    none: "none"
  components:
    button-primary: { type: button, bg: "#222222", fg: "#ffffff", radius: "4px", padding: "24px 40px", height: "69px", font: "18px / 600", use: "Primary CTA — 리턴제로 STT 알아보기, 맞춤 요금제 문의" }
    button-primary-sm: { type: button, bg: "#222222", fg: "#ffffff", radius: "4px", padding: "10px", height: "42px", font: "14px / 600", use: "Compact header CTA — 문의하기, 더 알아보기" }
    button-secondary: { type: button, bg: "#ffffff", fg: "#222222", radius: "4px", padding: "24px 40px", font: "18px / 600", use: "Secondary CTA — 바로 체험하기, 상담신청" }
    button-ghost-dark: { type: button, fg: "#ffffff", border: "1px solid #ffffff", radius: "4px", padding: "24px 40px", font: "18px / 600", use: "Outline CTA on dark hero — 정확도 비교, 사용문의" }
    button-pill: { type: button, fg: "#ffffff", border: "1px solid #eeeeee", radius: "30px", padding: "9px 24px", font: "12px / 500", use: "Developer-site account pill — 회원가입, 로그인" }
    button-record: { type: button, bg: "#3a89ff", fg: "#ffffff", radius: "60px", padding: "20px 40px", font: "18px / 400", use: "STT demo record action — 녹음시작" }
    input-field: { type: input, bg: "#ffffff", fg: "#222222", border: "1px solid #bbbbbb", radius: "4px", height: "74px", use: "Large demo input/select; focus border darkens to #666666" }
    tab-demo: { type: tab, fg: "#999999", active: "text #3a89ff weight 700", use: "STT demo mode tabs — 실시간 녹음 / 파일 업로드 / 샘플파일" }
    card-feature: { type: card, bg: "#ffffff", border: "1px solid #eeeeee", radius: "4px", use: "White service/feature card, hairline outline, shadowless" }
    card-stat: { type: card, bg: "#222222", fg: "#ffffff", radius: "4px", use: "Dark metric band — 124px weight-300 figure in white, mint #98ffac highlight accent" }
    badge-highlight: { type: badge, bg: "#ffde30", fg: "#222222", radius: "4px", font: "13px / 600", use: "Recommended-plan / emphasis pill on pricing" }
    nav-link: { type: tab, fg: "#222222", active: "text #222222 weight 600", use: "Top nav — COMPANY, RTZR STT, CALLABO, VITO" }
  components_harvested: true
---

# Design System Inspiration of Return Zero

## 1. Visual Theme & Atmosphere

Return Zero (리턴제로) is a Korean speech-AI company, and its design system reads like the product it sells: precise, engineered, and stripped of decoration. The homepage opens on a pure white canvas (`#ffffff`) with a deliberately near-monochrome palette — text and interactive chrome live almost entirely in a charcoal ink (`#222222`) over white, with pure black (`#000000`) carrying default body copy. There is no "brand purple," no gradient hero, no soft-shadow card stack. The restraint is the brand: a voice-AI lab that wants to look like research-grade infrastructure rather than a consumer app, where the only thing that draws the eye is the one charcoal button that says "do this."

The single typeface across every surface is **Pretendard**, the de-facto Korean product font, used at weight 400 for body (16px / line-height 24px) and weight 600 for section headings (40px) and button labels. The most distinctive typographic move is the **giant lightweight metric**: stat figures render at a colossal 124px in weight 300, white on charcoal dark bands ("35", "48", "2.5배", "3배"), pairing the heft of the number with an airy, almost whispered weight — the same anti-bold confidence the data itself is meant to project. Headings stay at a controlled 40px / 600 with normal tracking; the developer site (`developers.rtzr.ai`) drops its hero H1 to 36px / 600 white-on-dark.

Where color appears, it is surgical and **per-product**, never spread. A bright mint (`#98ffac`) lights up 60px highlight figures on dark sections; a corporate brand blue (`#2e67fe`) tints the product feature titles on the main site (Callabo, Vito); a brighter STT blue (`#3a89ff`) is the accent of the developer console — its active demo tab and the pill-shaped "녹음시작" record button; and a highlight yellow (`#ffde30`) flags the recommended plan on the pricing page. The neutral ladder runs charcoal `#222222` → slate `#444444` → muted `#999999` → faint `#bbbbbb`, separated by a single hairline (`#eeeeee`) and the faint surface tint (`#fafafa`). Depth is communicated by zero shadows — `box-shadow: none` holds across hero, nav, headings, cards, and chips on every surface inspected. Geometry is tight and sharp: 4px radius on buttons, inputs, and cards; pills (30px / 60px) reserved for the developer console's account and record controls.

**Key Characteristics:**
- Near-monochrome by intent — charcoal ink (`#222222`) is the single "action" color on white (`#ffffff`)
- Pure black (`#000000`) for default body text; charcoal `#222222` for CTAs, nav, and headings
- Pretendard as the sole typeface, weights 300 / 400 / 500 / 600
- Signature giant metric: 124px weight-300 figures, white on dark bands
- Surgical per-product accents — mint `#98ffac`, brand blue `#2e67fe`, STT blue `#3a89ff`, highlight yellow `#ffde30`
- Shadowless system — separation by hairline `#eeeeee` and surface tint `#fafafa`, never elevation
- Sharp 4px radius for marketing chrome; 30px / 60px pills only on the developer console
- Cool neutral ladder: `#444444` → `#999999` → `#bbbbbb`

## 2. Color Palette & Roles

### Primary / Action
- **Charcoal Ink** (`#222222`): The system's single action color — primary button background, heading text, nav labels. Used on every surface (home, pricing, developers) as the "do this" signal.
- **Pure Black** (`#000000`): Default body-text color, maximum-contrast reading copy.
- **Pure White** (`#ffffff`): Page canvas, text on charcoal/dark, secondary-button background.

### Accents (per-product, surgical)
- **Mint** (`#98ffac`): Bright neon-mint for 60px highlight figures on dark sections — the headline metric accent.
- **Brand Blue** (`#2e67fe`): Corporate product feature titles on the main site (Callabo, Vito section heads).
- **STT Blue** (`#3a89ff`): Developer-console accent — active demo tab text and the pill-shaped "녹음시작" record button.
- **Highlight Yellow** (`#ffde30`): Recommended-plan / emphasis flag on the pricing page.

### Neutral Ladder & Surface
- **Slate** (`#444444`): Secondary text and darker borders.
- **Muted Grey** (`#999999`): Tertiary text, inactive tab labels, captions.
- **Faint Grey** (`#bbbbbb`): Default input borders, lowest-emphasis lines.
- **Hairline** (`#eeeeee`): Card outlines, dividers — the primary separation device in a shadowless system.
- **Surface** (`#fafafa`): Faint off-white tint for alternating section bands.

## 3. Typography Rules

### Font Family
- **Sans (sole)**: `Pretendard` — used for every headline, body, nav, and button label. Weight range 300 (giant metrics) through 600 (headings / button labels).

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Display Stat | Pretendard | 124px | 300 | normal | Hero metric numbers (35, 48, 2.5배), white on dark |
| Display Mint | Pretendard | 60px | 600 | normal | Mint `#98ffac` highlight figures on dark sections |
| Section Heading | Pretendard | 40px | 600 | 1.3 | Section titles (한 눈에 보는…, 무엇이 다른가요?) |
| Hero (Dev) | Pretendard | 36px | 600 | normal | developers.rtzr.ai hero H1, white-on-dark |
| Body Large / Button | Pretendard | 18px | 600 | normal | Large CTA labels, lead text |
| Body | Pretendard | 16px | 400 | 1.5 (24px) | Standard reading text, nav links |
| Button Small | Pretendard | 14px | 600 | normal | Compact header button label |
| Caption / Pill | Pretendard | 12px | 500 | normal | Account pill, fine labels |

### Principles
- **One font, many weights**: Pretendard does every job; hierarchy comes from size and weight (300 ↔ 600), never from swapping families.
- **Lightweight giant metrics**: The defining choice — 124px stat figures at weight 300. The number is huge but the stroke is thin, signalling confident data without shouting.
- **600 is the heading ceiling**: Headings and primary button labels top out at weight 600; the system never goes to 700/800 except on a single developer-console active tab (700).
- **Normal tracking**: Unlike pill-heavy fintech peers, Return Zero keeps letter-spacing at normal across display and body — the precision reads as restraint, not compression.

## 4. Component Stylings

### Buttons

**Primary (Filled Charcoal)**
- Background: `#222222`
- Text: `#ffffff`
- Radius: 4px
- Padding: 24px 40px
- Height: 69px
- Font: 18px Pretendard weight 600
- Use: Primary CTA — "리턴제로 STT 알아보기", "맞춤 요금제 문의", "서비스 도입문의"

**Primary Compact**
- Background: `#222222`
- Text: `#ffffff`
- Radius: 4px
- Padding: 10px
- Height: 42px
- Font: 14px Pretendard weight 600
- Use: Header / inline CTA — "문의하기", "더 알아보기", "읽어보기"

**Secondary (White)**
- Background: `#ffffff`
- Text: `#222222`
- Radius: 4px
- Padding: 24px 40px
- Font: 18px Pretendard weight 600
- Use: Paired secondary CTA — "바로 체험하기", "상담신청", "무료로 체험하기"

**Ghost (Outline on Dark)**
- Background: transparent
- Text: `#ffffff`
- Border: 1px solid `#ffffff`
- Radius: 4px
- Padding: 24px 40px
- Font: 18px Pretendard weight 600
- Use: Outline CTA on dark hero — "정확도 비교", "사용문의" (developer hero uses `rgba(255,255,255,0.5)` border)

**Account Pill (Developer Console)**
- Background: transparent
- Text: `#ffffff`
- Border: 1px solid `#eeeeee`
- Radius: 30px
- Padding: 9px 24px
- Height: 34px
- Font: 12px Pretendard weight 500
- Use: developers.rtzr.ai account actions — "회원가입", "로그인"

**Record (STT Accent Pill)**
- Background: `#3a89ff`
- Text: `#ffffff`
- Radius: 60px
- Padding: 20px 40px
- Height: 58px
- Font: 18px Pretendard weight 400
- Use: STT live-demo record action — "녹음시작"

### Inputs

**Large Field / Select**
- Background: `#ffffff`
- Text: `#222222`
- Border: 1px solid `#bbbbbb`
- Radius: 4px
- Height: 74px
- Focus: border darkens to `#666666`
- Use: Large demo input / dropdown on the homepage STT demo

### Cards & Containers

**White Feature Card**
- Background: `#ffffff`
- Border: 1px solid `#eeeeee`
- Radius: 4px
- Shadow: none
- Use: Service / feature card with hairline outline (shadowless)

**Dark Stat Band**
- Background: `#222222`
- Text: `#ffffff`
- Radius: 4px
- Use: Metric band — 124px weight-300 figure in white, with mint `#98ffac` highlight accent

### Badges

**Plan Highlight**
- Background: `#ffde30`
- Text: `#222222`
- Radius: 4px
- Font: 13px Pretendard weight 600
- Use: Recommended-plan / emphasis flag on the pricing page

### Tabs

**Demo Mode Tabs**
- Active: text `#3a89ff` weight 700
- Inactive: text `#999999` weight 500
- Use: STT live-demo mode switch — "실시간 녹음" / "파일 업로드" / "샘플파일"

### Navigation
- Background: `#ffffff`
- Text: `#222222`
- Font: 16px Pretendard weight 500
- Active: `#222222` weight 600
- Use: Top nav — "COMPANY", "RTZR STT", "CALLABO", "VITO", "Pricing", "Developers"

---

**Verified:** 2026-06-26 (omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces)
**Tier 1 sources:** https://www.rtzr.ai, https://developers.rtzr.ai/, https://blog.rtzr.ai
**Tier 2 sources:** getdesign.md/returnzero — not listed (404); styles.refero.design — no confirmed Return Zero match (generic search fallback only)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: ~8px, with a tight 4px / 10px rhythm for compact chrome
- Scale: 4px, 8px, 10px, 16px, 24px, 40px, 64px
- Notable: large CTAs use a generous 24px 40px padding (69px height), while header buttons compress to a flat 10px

### Grid & Container
- Centered single-column hero with the charcoal CTA as the anchor
- Service overview as a row of white feature cards with hairline `#eeeeee` outlines
- Dark stat bands (`#222222`) break the white flow with 124px white metrics
- Pricing as side-by-side plan columns with one yellow-highlighted recommended plan

### Whitespace Philosophy
- **Restraint over density**: airy vertical rhythm; the page never crowds, letting the single charcoal action breathe.
- **Flat segmentation**: sections separate by surface tint (`#fafafa`) and hairlines (`#eeeeee`), or by full charcoal/dark bands — never by shadow.
- **Color as punctuation**: accent color appears only at decision points (record button, recommended plan, headline metric), so the eye always knows where to go.

### Border Radius Scale
- Sharp (4px): buttons, inputs, cards — the workhorse on marketing surfaces
- Pill Small (30px): developer-console account pills
- Pill (60px): developer-console record button
- Full (9999px): occasional round controls

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text, most surfaces |
| Hairline (Level 1) | `1px solid #eeeeee` border | White card outlines, dividers |
| Tint (Level 2) | `#fafafa` surface shift | Alternating section bands |
| Inversion (Level 3) | `#222222` / `#000000` dark band | Stat bands and immersive product sections |

**Shadow Philosophy**: Return Zero is a fully shadowless system. Live inspection found `box-shadow: none` across the hero, nav, headings, feature cards, and demo controls on the homepage, the developer console, and the pricing page. Separation is achieved through flat devices: a single hairline (`#eeeeee`), a faint surface tint (`#fafafa`), and full-contrast inversion to charcoal (`#222222`) or black (`#000000`) dark bands. When the system needs to elevate attention it reaches for color (mint `#98ffac`, STT blue `#3a89ff`) or contrast inversion, never a drop shadow — keeping the UI feeling fast, engineered, and screen-native.

## 7. Do's and Don'ts

### Do
- Keep charcoal ink (`#222222`) as the single action color — every primary CTA, nav, and heading
- Use pure black (`#000000`) for body text, charcoal `#222222` for interactive chrome
- Use Pretendard for everything; build hierarchy with weight (300 ↔ 600), not family swaps
- Render headline metrics huge and light — 124px weight 300, white on a dark band
- Separate sections with the `#eeeeee` hairline and `#fafafa` tint, or full charcoal inversion — never shadows
- Reserve accent color for the single decision point (record button `#3a89ff`, recommended plan `#ffde30`, metric highlight `#98ffac`)
- Keep 4px radius on marketing buttons, inputs, and cards
- Pair a charcoal primary with a white secondary CTA side by side

### Don't
- Add drop shadows for elevation — the system is flat and shadowless
- Introduce a second always-on brand color — accents are surgical and per-product
- Use pill geometry on marketing chrome — pills belong to the developer console only
- Set headings heavier than weight 600 (700 only on a single active demo tab)
- Compress letter-spacing — Return Zero tracks at normal across display and body
- Spread the mint, blues, or yellow across many elements — color marks decisions, not decoration
- Use a font other than Pretendard
- Replace the dark stat band with a light card — the contrast inversion is the emphasis

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, stat figures scale down, CTAs stack full-width |
| Tablet | 640-1024px | 2-up feature cards, moderate padding |
| Desktop | 1024-1440px | Full layout, multi-column feature rows, side-by-side plans |

### Touch Targets
- Primary CTAs at 69px height with 24px 40px padding — large, unmistakable targets
- Compact header CTA at 42px height
- Developer record pill at 58px height, 60px radius
- Account pills at 34px height

### Collapsing Strategy
- Hero: large CTA pair stacks vertically on mobile
- Feature cards: multi-column → stacked single column
- Stat bands: 124px figures reduce but keep weight 300 and white-on-dark treatment
- Pricing: side-by-side plan columns stack, highlighted plan stays flagged with `#ffde30`

### Image Behavior
- Product screenshots and illustrations carry no shadow at any size, consistent with the flat system
- Cards maintain 4px radius across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary action / CTA: Charcoal Ink (`#222222`)
- Body text: Pure Black (`#000000`)
- Background: Pure White (`#ffffff`)
- Metric highlight: Mint (`#98ffac`)
- Corporate product title: Brand Blue (`#2e67fe`)
- Developer accent / record: STT Blue (`#3a89ff`)
- Plan highlight: Highlight Yellow (`#ffde30`)
- Secondary text: Slate (`#444444`)
- Muted / inactive: Muted Grey (`#999999`)
- Input border: Faint Grey (`#bbbbbb`)
- Hairline: `#eeeeee`
- Surface tint: `#fafafa`

### Example Component Prompts
- "Create a hero on white background. Pretendard. A charcoal primary CTA (`#222222` bg, white text, 4px radius, 24px 40px padding, 18px weight 600 — 'STT 알아보기') beside a white secondary CTA (`#ffffff` bg, `#222222` text, 4px radius — '바로 체험하기'). No shadows."
- "Design a dark stat band: `#222222` background, a 124px weight-300 white figure ('35'), with a 60px mint `#98ffac` highlight figure beside it. Shadowless."
- "Build a white feature card: `#ffffff` background, 1px solid `#eeeeee` border, 4px radius, no shadow. Title 40px Pretendard weight 600 `#222222`. Body 16px weight 400 line-height 1.5 `#000000`."
- "Create a developer demo: tab row with active '실시간 녹음' in `#3a89ff` weight 700, inactive '파일 업로드' in `#999999` weight 500, and a `#3a89ff` pill record button (60px radius, 20px 40px padding, white text — '녹음시작')."

### Iteration Guide
1. Charcoal `#222222` is the only action color — don't add a second always-on hue
2. Pretendard everywhere; hierarchy via weight 300 ↔ 600
3. No shadows — separate with `#eeeeee` hairline, `#fafafa` tint, or charcoal inversion
4. Headline metrics: 124px weight 300, white on dark
5. 4px radius on marketing chrome; pills only on the developer console
6. Accent (`#98ffac` / `#3a89ff` / `#ffde30`) marks one decision point at a time
7. Body text is `#000000`; secondary text `#444444`; muted `#999999`

---

## 10. Voice & Tone

Return Zero's voice is **plain, technical, and quietly confident** — the register of an engineering team that lets accuracy numbers do the persuading. Korean copy is direct and functional ("AI 음성인식의 새로운 기준" / "A new standard for AI speech recognition"; "무엇이 다른가요?" / "What's different?"), framing the product as infrastructure rather than novelty. CTAs are low-pressure imperatives ("문의하기", "바로 체험하기", "더 알아보기") and the developer surface speaks peer-to-peer to builders ("RTZR STT로 애플리케이션을 제작해 보세요" / "Build applications with RTZR STT").

| Context | Tone |
|---|---|
| Hero headlines | Declarative, standard-setting. "AI 음성인식의 새로운 기준." Confident, not hype. |
| Stat / metric labels | Numbers-first. Giant figures (정확도, 시간) carry the claim; copy stays minimal. |
| Product titles | Plain product naming — RTZR STT, CALLABO, VITO — each with a one-line "what it does." |
| CTAs | Direct, low-pressure. "문의하기", "바로 체험하기", "무료로 체험하기". |
| Developer docs | Peer-to-peer, builder-facing. "애플리케이션을 제작해 보세요." Practical, example-led. |

**Voice samples (verbatim from live surfaces):**
- "AI 음성인식의 새로운 기준" — homepage section heading (standard-setting). *(verified live 2026-06-26)*
- "한 눈에 보는 리턴제로의 AI 서비스" — homepage service-overview heading. *(verified live 2026-06-26)*
- "RTZR STT로 애플리케이션을 제작해 보세요." — developers.rtzr.ai hero H1. *(verified live 2026-06-26)*
- Page title: "리턴제로 - 차세대 음성 AI의 미래" *(verified live 2026-06-26)*

**Forbidden register**: hype superlatives, exclamation-heavy marketing, undefined buzzwords, fear-based urgency. The brand persuades with measured numbers and plain capability statements.

## 11. Brand Narrative

Return Zero (리턴제로) was founded in **2018** by three KAIST classmates and former early Kakao members — **이참솔 (Lee Chamsol, CEO)**, **정주영 (Jung Jooyoung, CTO)**, and development lead **이현종 (Lee Hyunjong)** — with a thesis that voice is the last great untapped data modality. The founding premise: every phone call, every meeting, every spoken interaction is information that simply evaporates because it is never turned into structured, searchable text. "Return Zero" frames the mission as returning that lost value from zero.

The company's flagship consumer product, **VITO (비토)**, turns phone calls into text so users can read and search conversations like messages — it grew past **1 million users**, generating a voice corpus the company describes as roughly **150,000 hours / 15 million hours of speech data**, among the largest Korean-language datasets in the country. That data feeds proprietary engines (the "Sommers" far-field whisper-capture engine and the "Moses" speaker-separation engine). The technology productized into **RTZR STT**, a speech-to-text API offered in both cloud and on-premise (설치형) form via `developers.rtzr.ai`, launched as VITO Speech with a developer beta in June 2022, and **CALLABO (콜라보)**, an enterprise AI meeting assistant that records and summarizes Google Meet / Zoom calls.

What the design refuses, and what it embraces, mirror the company's engineering posture: no decorative gradients, no shadow-stacked consumer-app chrome, no second vanity brand color — instead a near-monochrome charcoal-on-white system where the only flourish is a giant, lightweight accuracy number and a single surgical accent at each decision point. It is the visual language of a research lab that wants its data and its precision, not its packaging, to be the argument.

## 12. Principles

1. **Precision over decoration.** A speech-AI company is judged on accuracy; the UI mirrors that with a stripped, exact, shadowless system. *UI implication:* keep chrome minimal — charcoal on white, 4px radius, no ornament.
2. **One action, one color.** Charcoal `#222222` means "do this." *UI implication:* reserve the charcoal fill for the primary CTA; let secondary actions go white.
3. **Let the number speak.** Metrics are the persuasion. *UI implication:* render the key figure huge (124px) and light (weight 300) on a dark band so it dominates the section.
4. **Color marks decisions, not surfaces.** Accents (`#98ffac`, `#3a89ff`, `#ffde30`) are surgical. *UI implication:* introduce an accent only at a single decision point — the record button, the recommended plan, the headline stat.
5. **Flat and fast.** Screen-native clarity beats decorative depth. *UI implication:* no shadows; separate with hairline `#eeeeee`, `#fafafa` tint, or charcoal inversion.
6. **One voice, one font.** Pretendard at every size. *UI implication:* build hierarchy with weight and scale, never with a second family.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Return Zero user segments (developers integrating STT, enterprise teams adopting meeting AI, consumer VITO users), not individual people.*

**김도현, 30, 서울.** A backend engineer integrating speech-to-text into a call-center product. Lives in `developers.rtzr.ai`, cares about streaming-vs-file accuracy and on-premise options. Chose RTZR STT because the developer console let him test "실시간 녹음" in the browser before writing a line of code.

**박지은, 38, 판교.** An operations lead at a mid-size SaaS company evaluating CALLABO to auto-summarize remote meetings. Values that the product looks like infrastructure, not a toy — the restrained, shadowless interface signals reliability to her stakeholders.

**이서윤, 27, 부산.** A heavy VITO user who reads and searches her calls like text messages. Trusts the brand's plain, number-driven tone; appreciates that nothing on the page is trying to upsell her.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no transcripts / results)** | White canvas. Single charcoal (`#222222`) line explaining no results, with one charcoal CTA to start. No illustration clutter. |
| **Loading (STT transcribe)** | Inline progress within the demo panel; record pill (`#3a89ff`) shows an active recording state. Flat pulse — no shadow shimmer. |
| **Recording (live demo)** | Active state on the record pill; a red recording indicator (`rgb(240,43,0)` observed on the developer demo) marks live capture. |
| **Loading (page sections)** | Skeleton blocks on `#fafafa` at final dimensions, 4px radius, flat pulse consistent with the shadowless system. |
| **Error (transcription failed)** | Inline message in charcoal `#222222` with a plain-language explanation and a retry. No bare "오류가 발생했습니다". |
| **Error (form validation)** | Field-level message below the input; border darkens to `#666666`; describes what's valid, not just "필수". |
| **Success (request submitted)** | Brief inline confirmation in a calm tone; next-step detail linked below. No celebratory emoji. |
| **Disabled** | Muted Grey (`#999999`) text on reduced-opacity surface; charcoal actions fade rather than switch hue. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button press, focus |
| `motion-standard` | 200ms | Card/section reveal, tab switch, sheet |
| `motion-slow` | 320ms | Page-level transitions, hero/stat reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — sections, cards, panels |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and quiet, consistent with the flat, engineered aesthetic. Demo tabs and buttons respond to press with a subtle opacity/scale shift; stat bands and feature cards fade-in from below at `motion-standard / ease-enter`. No bounce or spring — a speech-AI infrastructure product signals steadiness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the product (including the live STT demo) remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-26) via playwright getComputedStyle on:
- https://www.rtzr.ai (homepage) — title "리턴제로 - 차세대 음성 AI의 미래"; charcoal CTA rgb(34,34,34)=#222222, white text, 4px radius; section headings 40px/600; 124px weight-300 stat figures (white); mint rgb(152,255,172)=#98ffac 60px highlights; brand blue rgb(46,103,254)=#2e67fe product titles; Pretendard sole font; box-shadow none.
- https://developers.rtzr.ai/ (RTZR STT developer console) — hero H1 36px/600 white; STT blue rgb(58,137,255)=#3a89ff active tab (weight 700) + record pill (radius 60px, 20px 40px, white); account pills radius 30px, 1px solid #eeeeee, 12px/500; "무료로 체험하기" white bg #222222 text; red rgb(240,43,0) recording indicator.
- https://www.rtzr.ai/pricing — charcoal primary CTAs; white secondary CTAs; highlight yellow rgb(255,222,48)=#ffde30 on recommended plan; "자주 묻는 질문" 40px/600.

Token-level claims (§1-9) are sourced from these live inspections (see .verification.md raw samples).

Voice samples (§10) are verbatim from live surfaces (homepage headings, developer hero H1, page title meta).

Brand narrative (§11): Return Zero (리턴제로) founded 2018 by 이참솔 (CEO), 정주영 (CTO), 이현종;
products VITO / CALLABO / RTZR STT; 1M+ VITO users; ~15M hours voice data; VITO Speech /
developer beta June 2022. Sourced from public reporting (ETOday, ZDNet Korea, THE VC,
econovill) and the brand's own blog (blog.rtzr.ai) — widely documented public facts, not
quoted verbatim from a single Return Zero statement in this turn.

Personas (§13) are fictional archetypes informed by publicly observable Return Zero user
segments (STT developers, enterprise meeting-AI adopters, consumer VITO users). Names are
illustrative; they do not refer to real people.

Interpretive claims (e.g., "near-monochrome by intent", "color marks decisions, not
surfaces", "the visual language of a research lab") are editorial readings connecting Return
Zero's observed design to its positioning, not directly sourced Return Zero statements.
-->
