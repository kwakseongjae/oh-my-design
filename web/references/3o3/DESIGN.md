---
id: 3o3
name: 3o3
display_name_kr: 삼쩜삼
country: KR
category: fintech
homepage: "https://3o3.co.kr"
primary_color: "#0c64e6"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=app.3o3.co.kr&sz=256"
verified: "2026-06-10"
added: "2026-06-10"
omd: "0.1"
tokens:
  source: reconciled
  extracted: "2026-06-10"
  note: "primary = SZS Blue (#0c64e6) sampled from official brand-center swatch images; funnel landing runs its own lighter CTA pair (#fbbd41 yellow / #3e79ff blue); app/corporate ink = #141618 on Pretendard."
  colors:
    primary: "#0c64e6"
    navy: "#023266"
    amber: "#fea800"
    sky-tint: "#f3f9ff"
    link: "#006efa"
    cta-yellow: "#fbbd41"
    cta-blue: "#3e79ff"
    cta-dark: "#2f3943"
    dark-section: "#283240"
    kakao: "#fae100"
    ink: "#141618"
    ink-pure: "#000000"
    body-sub: "#606a76"
    muted: "#a4acb4"
    muted-alt: "#788391"
    surface: "#f5f6f8"
    surface-soft: "#fafbfc"
    chip: "#f0f1f2"
    tint-blue: "#f3f6ff"
    canvas: "#ffffff"
  typography:
    family: { en-display: "Poppins", kr: "Pretendard", funnel: "Noto Sans KR" }
    display:      { size: 36, weight: 700, lineHeight: 1.50, use: "Corporate hero / section headlines, Pretendard" }
    heading-en:   { size: 32, weight: 700, lineHeight: 1.00, use: "Brand-center page titles, Poppins" }
    lead:         { size: 28, weight: 500, lineHeight: 1.40, use: "Mission-statement lead line" }
    subsection:   { size: 24, weight: 700, lineHeight: 1.50, use: "Service card titles, EN subsection heads" }
    body-lg:      { size: 20, weight: 500, lineHeight: 1.40, use: "Sub-lead, supporting descriptions" }
    button:       { size: 18, weight: 500, lineHeight: 1.22, use: "Funnel CTA label, Noto Sans KR" }
    body:         { size: 16, weight: 500, lineHeight: 1.60, use: "Standard reading text, Pretendard" }
    button-app:   { size: 16, weight: 700, lineHeight: 1.50, use: "App CTA label (Kakao login)" }
    caption:      { size: 12, weight: 500, lineHeight: 1.50, use: "Compliance footnotes, disclosures" }
    chip:         { size: 12, weight: 700, lineHeight: 1.50, use: "Info chip label" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 80 }
  rounded: { sm: 7, md: 10, lg: 16, xl: 18, full: 9999 }
  shadow:
    none: "none"
  components:
    cta-yellow: { type: button, bg: "#fbbd41", fg: "#000000", radius: "7px", height: "61px", font: "18px / 500", use: "Funnel primary CTA — 내 환급금 조회하기" }
    cta-blue: { type: button, bg: "#3e79ff", fg: "#ffffff", radius: "7px", height: "61px", font: "18px / 500", use: "Funnel trust-framed CTA — 안전하게 환급 신청하기" }
    cta-dark: { type: button, bg: "#2f3943", fg: "#ffffff", radius: "7px", height: "61px", font: "18px / 500", use: "Funnel eligibility CTA — 대상자 여부 확인하기" }
    button-kakao: { type: button, bg: "#fae100", fg: "#141618", radius: "18px", height: "56px", padding: "0 16px", font: "16px / 700", use: "App login — 카카오 계정으로 계속하기" }
    chip-basis: { type: badge, bg: "#f0f1f2", fg: "#788391", radius: "10px", height: "33px", padding: "0 12px", font: "12px / 700", use: "Info chip — 예상 환급액을 계산하는 기준" }
    card-tint: { type: card, bg: "#f3f6ff", fg: "#141618", use: "Tinted info band on funnel landing" }
    card-soft: { type: card, bg: "#fafbfc", fg: "#141618", use: "Soft grey canvas section (brand center, landing)" }
    footer-disclosure: { type: listItem, fg: "#a4acb4", font: "12px / 500", use: "Compliance footnote list under the fold" }
  components_harvested: true
---

# Design System Inspiration of 3o3 (삼쩜삼)

## 1. Visual Theme & Atmosphere

삼쩜삼 (3o3) is Korea's mass-market tax-refund platform — the app that turned the dreaded 종합소득세 filing into a two-tap "find my hidden money" ritual for over seven million filers — and its visual system is engineered for exactly that job: maximum trust, minimum friction, zero intimidation. The official brand identity, published on the company's own brand resource center, anchors everything to **SZS Blue** (`#0c64e6`), a saturated institutional blue that signals fiscal credibility, paired with a deep navy (`#023266`) and a warm amber (`#fea800`) that injects the "money coming back to you" optimism. The product chrome itself is a calm white canvas (`#ffffff`) with cool light-grey surfaces (`#f5f6f8`) and a near-black ink (`#141618`) carried on Pretendard, the de-facto Korean product typeface.

The system visibly splits into three coordinated registers. The **acquisition funnel** (www.3o3.co.kr) is a conversion machine: tall 61px CTAs in a punchy yellow (`#fbbd41`) and a friendly bright blue (`#3e79ff`) at a tight 7px radius, set on alternating white and dark slate (`#283240`) bands. The **app surface** (app.3o3.co.kr) is quieter and rounder — an 18px-radius Kakao login button in Kakao yellow (`#fae100`), 10px info chips, and dense 12px compliance footnotes in muted blue-grey (`#a4acb4`). The **corporate/brand layer** (jobisnvillains.com, brand.3o3.co.kr) speaks in Poppins for English headings and Pretendard for Korean, with generous 36px/700 headlines. The registers differ in temperature but share one DNA: flat, shadowless surfaces, honest typography, and blue as the spine.

What makes 삼쩜삼 distinctive among Korean fintechs is its unapologetic direct-response energy. Where Toss whispers premium minimalism, 삼쩜삼 shouts a clear promise — "숨은 환급금 간편하게 찾아보세요" — and backs it with compliance fine print rendered honestly on the page rather than hidden. The design is persuasion-forward but legally scrupulous: every bold claim sits above a 12px disclosure list. It is the visual language of a service that must feel simultaneously like a friendly money-finding game and a licensed tax intermediary.

**Key Characteristics:**
- SZS Blue (`#0c64e6`) as the official brand anchor, with deep navy (`#023266`) and amber (`#fea800`) as the supporting official palette
- Three coordinated registers: yellow/blue conversion funnel, calm Pretendard app chrome, Poppins+Pretendard corporate layer
- Tall 61px funnel CTAs at a tight 7px radius — direct-response geometry
- Rounder app geometry: 18px-radius login button, 10px chips
- Flat and shadowless throughout — separation by surface tint (`#f5f6f8`, `#fafbfc`) not elevation
- Near-black ink (`#141618`) on Pretendard for all product text
- Honest compliance typography: 12px muted (`#a4acb4`) disclosure lists as a first-class design element
- Kakao yellow (`#fae100`) social login as the app's single entry action

## 2. Color Palette & Roles

### Official Brand Palette (brand.3o3.co.kr)
- **SZS Blue** (`#0c64e6`): The official primary brand color — "SZS Blue는 삼쩜삼을 대표하는 색상입니다" per the brand resource center. Logo, brand moments, key graphics.
- **Deep Navy** (`#023266`): Official secondary dark — used in brand graphics and dark logo lockups.
- **Amber** (`#fea800`): Official warm accent — the "refund money" optimism color in brand graphics.
- **Sky Tint** (`#f3f9ff`): Official light blue-tinted background from the brand palette.
- **Link Blue** (`#006efa`): Hyperlink/action blue used on the brand resource center chrome.

### Funnel CTAs (www.3o3.co.kr landing)
- **CTA Yellow** (`#fbbd41`): The landing page's highest-frequency conversion button — "내 환급금 조회하기", "지금 환급 신청하기".
- **CTA Blue** (`#3e79ff`): Trust-framed CTA variant — "안전하게 환급 신청하기"; a deeper sibling `#355aff` appears on one band.
- **CTA Dark** (`#2f3943`): Dark slate eligibility CTA — "대상자 여부 확인하기".
- **Dark Section** (`#283240`): Full-width dark slate band backgrounds on the funnel.
- **Tint Blue** (`#f3f6ff`): Light blue-tinted info band on the funnel.

### Product & Corporate Neutrals
- **Ink** (`#141618`): Primary text color on app, corporate site, and brand center — near-black with a cool undertone.
- **Pure Black** (`#000000`): Label color on the yellow funnel CTAs and default landing body text.
- **Body Sub** (`#606a76`): Secondary descriptive text on corporate/brand surfaces; a slate lead variant `#3a4047` appears on the mission statement.
- **Muted** (`#a4acb4`): Compliance footnotes, disclosure lists, sidebar inactive labels (`#b9c0c6` nav idle is adjacent).
- **Muted Alt** (`#788391`): Info-chip label text on the app login screen.
- **Canvas** (`#ffffff`): Page background everywhere.
- **Surface** (`#f5f6f8`): App background grey.
- **Surface Soft** (`#fafbfc`): Soft grey section background on brand center and landing root.
- **Chip Grey** (`#f0f1f2`): Info chip background on the app.

### Third-Party Action
- **Kakao Yellow** (`#fae100`): The Kakao-mandated social login button — the app's single sign-in path, kept verbatim per Kakao brand rules.

## 3. Typography Rules

### Font Family
- **Korean (product & corporate)**: `Pretendard` (Pretendard JP Variable on the corporate site) — the official Korean typeface per the brand center: "영문 사용 시 Poppins, 국문 사용 시 Pretendard를 사용합니다."
- **English (brand/display)**: `Poppins` — official English typeface, used for brand-center headings and English lockups.
- **Funnel exception**: `Noto Sans KR` — the Unbounce-built acquisition landing runs Noto Sans KR; a funnel-only legacy, not the brand typeface.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Color | Notes |
|------|------|------|--------|-------------|-------|-------|
| Display | Pretendard | 36px | 700 | 1.50 (54px) | `#141618` | Corporate hero / section heads ("쩜 쉬운 세금 관리의 시작") |
| Heading EN | Poppins | 32px | 700 | 1.00 | `#141618` | Brand-center page titles ("Brand Logo") |
| Lead | Pretendard | 28px | 500 | 1.40 (39px) | `#3a4047` | Mission lead ("모든 사람이…") |
| Subsection | Poppins/Pretendard | 24px | 700 | 1.00–1.50 | `#141618` | Service titles ("삼쩜삼 세금 신고"), EN subheads |
| Body Large | Pretendard | 20px | 500 | 1.40 (28px) | `#606a76` | Sub-leads ("삼쩜삼에서 알려드릴게요") |
| Funnel CTA | Noto Sans KR | 18px | 500 | 1.22 (22px) | `#000000` / `#ffffff` | 61px-tall landing buttons |
| Body | Pretendard | 16px | 500 | 1.60 (25.6px) | `#606a76` | Standard descriptions |
| App CTA | Pretendard | 16px | 700 | 1.50 (24px) | `#141618` | Kakao login label |
| Chip | Pretendard | 12px | 700 | 1.50 (18px) | `#788391` | Info chip label |
| Caption | Pretendard | 12px | 500 | 1.50 (18px) | `#a4acb4` | Compliance footnotes |

### Principles
- **Two official typefaces, strict split**: Poppins owns English, Pretendard owns Korean — stated verbatim in the brand guide. They never swap.
- **Bold at 700, never heavier**: Display and headings sit at weight 700; emphasis inside body uses 700 spans, not size jumps.
- **Normal letter-spacing**: Unlike Toss/Finda-style tight tracking, measured letter-spacing is `normal` across all surfaces — the system relies on weight, not compression.
- **Compliance type is a real tier**: The 12px/500 muted footnote is a deliberate, consistent system role, not an afterthought — it appears identically structured on funnel and app.

## 4. Component Stylings

### Buttons

**Funnel CTA — Yellow (Primary)**
- Background: `#fbbd41`
- Text: `#000000`
- Radius: 7px
- Height: 61px
- Font: 18px / 500 / Noto Sans KR
- Use: Landing primary conversion — "내 환급금 조회하기", "지금 환급 신청하기", "지금 찾으러 가기"

**Funnel CTA — Blue**
- Background: `#3e79ff`
- Text: `#ffffff`
- Radius: 7px
- Height: 61px
- Font: 18px / 500 / Noto Sans KR
- Use: Trust-framed conversion — "안전하게 환급 신청하기", repeated as the page's alternating CTA color

**Funnel CTA — Dark**
- Background: `#2f3943`
- Text: `#ffffff`
- Radius: 7px
- Height: 61px
- Font: 18px / 500 / Noto Sans KR
- Use: Eligibility check — "대상자 여부 확인하기"

**Kakao Login (App, Compliance-Mandated)**
- Background: `#fae100`
- Text: `#141618`
- Radius: 18px
- Height: 56px
- Padding: 0 16px
- Font: 16px / 700 / Pretendard
- Use: The app's single sign-in action — "카카오 계정으로 계속하기"

**Corporate Ghost (On-Image)**
- Background: `rgba(255, 255, 255, 0.25)`
- Text: `#ffffff`
- Radius: 16px
- Padding: 16px 48px
- Font: 16px / 700 / Pretendard
- Use: Recruiting CTA over hero photography on jobisnvillains.com — "채용 중인 직무 보러 가기"

### Badges

**Info Chip**
- Background: `#f0f1f2`
- Text: `#788391`
- Radius: 10px
- Height: 33px
- Padding: 0 12px
- Font: 12px / 700 / Pretendard
- Use: Expandable basis-of-calculation chip on the app login — "예상 환급액을 계산하는 기준"

### Cards & Containers

**Tinted Info Band**
- Background: `#f3f6ff`
- Text: `#141618`
- Use: Light blue info band segmenting the funnel landing

**Soft Section**
- Background: `#fafbfc`
- Text: `#141618`
- Use: Soft grey full-width section on brand center and landing root

**Dark Band**
- Background: `#283240`
- Text: `#ffffff`
- Use: Full-width dark slate band on the funnel (white 20px/400 copy — "숨은 환급금 간편하게 찾아보세요")

### List Items

**Compliance Footnote**
- Text: `#a4acb4`
- Font: 12px / 500 / Pretendard
- Use: Statutory disclosure list — average-refund basis, 세무대리 scope, 사업자 정보 ("(주) 자비스앤빌런즈 | 대표자 : 김범섭")

Notes: the login surface offers no traditional text input — sign-in is Kakao-only — so input specs are intentionally absent. All measured surfaces returned `box-shadow: none`; the system is flat.

---
**Verified:** 2026-06-10
**Tier 1 sources:** https://www.3o3.co.kr (funnel landing, live computed style); https://app.3o3.co.kr (app login surface, live computed style); https://brand.3o3.co.kr/brand-logo + https://brand.3o3.co.kr/color-typeface (official brand resource center — SZS Blue, Poppins/Pretendard); https://jobisnvillains.com (operator corporate site, live computed style); https://blog.3o3.co.kr (official blog)
**Tier 2 sources:** none available — getdesign.md/3o3 and getdesign.md/samjjeomsam both 404; styles.refero.design searched "3o3" / "삼쩜삼" / "samjjeomsam", no listing
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 80px section rhythm
- Funnel CTAs use full-width-of-column blocks with tall 61px hit areas; corporate buttons pad generously at 16px 48px

### Grid & Container
- Funnel: single-column, centered, long-scroll direct-response page assembled from full-width image/text bands; CTA repeated after every persuasion block
- Corporate: max-width ~1440px centered container with sticky 71px header
- Brand center: sticky left sidebar (section nav) + single content column with full-bleed swatch/graphic images
- App: mobile-frame single column centered on desktop, content capped at app width

### Whitespace Philosophy
- **Conversion rhythm over gallery calm**: the funnel alternates dense persuasion bands and CTAs — whitespace is a pacing device between pitch beats, not an aesthetic statement.
- **Flat segmentation**: sections separate by background shifts (`#ffffff` → `#fafbfc` → `#f3f6ff` → `#283240`), never by shadow.
- **Disclosure gets room**: compliance footnotes are given their own uncramped block at the page bottom rather than being squeezed.

### Border Radius Scale
- Tight (7px): funnel CTAs — direct-response sharpness
- Medium (10px): app chips
- Relaxed (16px): corporate buttons
- Round (18px): app login button
- The radius grows as the surface moves from "sell" (funnel) to "use" (app) — geometry tracks register

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Every measured surface — funnel, app, corporate |
| Tint (Level 1) | `#f5f6f8` / `#fafbfc` / `#f3f6ff` background shift | Section and card separation |
| Dark band (Level 2) | `#283240` full-width slab | High-contrast segment breaks on the funnel |

**Shadow Philosophy**: 삼쩜삼 is a shadowless system. Live inspection across the funnel landing, the app login, and the corporate site returned `box-shadow: none` on every button, chip, band, and card measured. Depth is communicated by flat tint shifts and by the dark slate band (`#283240`) acting as a hard segment divider. This keeps the conversion page fast-reading and the app chrome honest and lightweight — appropriate for a product whose core promise is "no hidden anything."

## 7. Do's and Don'ts

### Do
- Anchor brand moments to SZS Blue (`#0c64e6`) — it is the officially mandated representative color
- Use Poppins for English and Pretendard for Korean, exactly as the brand guide splits them
- Keep funnel CTAs tall (61px), tight-cornered (7px), and repeated — direct-response geometry is intentional
- Render the Kakao login button in Kakao yellow (`#fae100`) verbatim per Kakao brand rules
- Keep every surface flat — separate sections with tint shifts (`#fafbfc`, `#f3f6ff`) and the dark band (`#283240`)
- Give compliance footnotes their own honest 12px/500 muted (`#a4acb4`) block
- Pair each bold money claim with its calculation-basis chip or footnote
- Use amber (`#fea800`) for refund-optimism accents within official brand graphics

### Don't
- Recolor or restyle the logo — the brand center's Logo Do Nots forbid size, shape, color, and effect changes
- Add drop shadows or elevation stacks — every measured surface is shadowless
- Use tight negative letter-spacing — the system tracks normal everywhere
- Swap the typeface split (Poppins for Korean or Pretendard-only English lockups)
- Hide or shrink statutory disclosures to make the pitch cleaner — fine print is a first-class tier
- Use the funnel's Noto Sans KR on product or brand surfaces — it is a funnel-only legacy
- Spread Kakao yellow (`#fae100`) beyond the Kakao login action
- Make refund claims without the basis line ("누적 신고 고객 평균" framing)

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | Single column; funnel serves a parallel mobile variant of each band; app is mobile-native |
| Tablet | 768-1440px | Corporate grid widens, brand-center sidebar appears |
| Desktop | ≥1440px | 1440px max container; app login renders as a centered mobile frame |

### Touch Targets
- Funnel CTAs at 61px height — oversized, thumb-proof conversion targets
- App Kakao login at 56px height, full width
- Info chip at 33px with 12px side padding — compact but tappable

### Collapsing Strategy
- Funnel bands are pre-built per breakpoint (desktop/mobile image pairs) rather than reflowed
- Corporate hero: 36px/700 headlines hold weight on mobile, scale size down
- Brand center: sidebar nav collapses into top sticky bar with disclosure arrow

### Image Behavior
- The funnel is image-led: persuasion blocks ship as optimized webp bands swapped per breakpoint
- Brand swatches and graphics are full-bleed webp images; no shadow at any size
- App icon/symbol downloads provided as official zips from cdn.3o3.co.kr

## 9. Agent Prompt Guide

### Quick Color Reference
- Official brand: SZS Blue (`#0c64e6`), Deep Navy (`#023266`), Amber (`#fea800`), Sky Tint (`#f3f9ff`)
- Funnel primary CTA: Yellow (`#fbbd41`) with black text
- Funnel secondary CTA: Blue (`#3e79ff`) with white text
- Funnel dark CTA / band: `#2f3943` / `#283240`
- App ink: `#141618`; app surface: `#f5f6f8`; chip: `#f0f1f2`
- Muted text: `#a4acb4` (footnotes), `#788391` (chip labels), `#606a76` (descriptions)
- Kakao login: `#fae100`
- Link: `#006efa`

### Example Component Prompts
- "Create a direct-response hero band: white background, persuasion headline in Pretendard 36px/700 #141618, then a full-width CTA: #fbbd41 background, #000000 text, 7px radius, 61px tall, 18px/500 — label '내 환급금 조회하기'."
- "Design an app login screen: #ffffff canvas, centered content, one Kakao button: #fae100 background, #141618 text, 18px radius, 56px tall, 16px/700 Pretendard — '카카오 계정으로 계속하기'. Below it an info chip: #f0f1f2 background, #788391 text, 10px radius, 33px tall, 12px/700."
- "Build a dark segment band: #283240 background, white 20px/400 line '숨은 환급금 간편하게 찾아보세요', followed by a #3e79ff CTA with white text, 7px radius, 61px tall."
- "Add a compliance footer: list items at 12px/500 Pretendard, color #a4acb4, line-height 18px, each row a statutory disclosure; no shadow, white background."
- "Create a brand-center section: #fafbfc background, Poppins 32px/700 #141618 English heading, Pretendard 16px/500 #606a76 Korean description, full-bleed SZS Blue #0c64e6 swatch block."

### Iteration Guide
1. Decide the register first: funnel (yellow/blue, 7px, Noto-legacy energy), app (Pretendard, 18px radius, calm), or brand/corporate (Poppins+Pretendard, editorial)
2. SZS Blue `#0c64e6` for brand identity moments; `#3e79ff` only as the funnel conversion blue — don't conflate them
3. Everything flat: zero box-shadows, tint-shift separation only
4. CTAs are tall: 61px funnel / 56px app — never compress below 48px
5. Every money claim gets a basis: chip ("예상 환급액을 계산하는 기준") or 12px footnote
6. Korean text on Pretendard 500/700; English display on Poppins 700
7. Kakao yellow is untouchable third-party chrome — keep it verbatim

---

## 10. Voice & Tone

삼쩜삼's voice is **friendly, money-smart, and reassuring** — a service that talks about the most bureaucratic subject in Korean life (세금) in the register of a helpful friend who found money in your coat pocket. The core verbal move is reframing: tax filing becomes "숨은 환급금 찾기" (finding hidden refund money), a treasure hunt rather than a chore. Claims are bold but always anchored — every average-refund figure carries its statistical basis in fine print, and risk-sensitive steps are framed with safety words ("안전하게").

| Context | Tone |
|---|---|
| Funnel headlines | Promise-led, possessive framing: it's *your* hidden money. "숨은 환급금 간편하게 찾아보세요." |
| CTAs | Imperative + immediate: "지금 찾으러 가기", "내 환급금 조회하기". The word 지금 (now) recurs. |
| Trust-sensitive CTAs | Safety-prefixed: "안전하게 환급 신청하기" — reassurance built into the button itself. |
| App chrome | Calm and procedural: "카카오 계정으로 계속하기", "예상 환급액을 계산하는 기준". |
| Compliance copy | Precise statutory Korean, never minimized: scope of 세무대리, average-refund basis with exact cohort counts. |
| Corporate / brand | Mission-cast wordplay: "쩜 쉬운 세금 관리의 시작" — the brand's own '쩜' (point three-three pun) folded into "참 쉬운". |

**Voice samples (verbatim from live surfaces, 2026-06-10):**
- "삼쩜삼 - 생활 밀착 환급·혜택 플랫폼" — homepage title (positioning line)
- "세금 환급은 물론, 모든 숨은돈 삼쩜삼에서 찾기" — homepage meta description (scope-expansion promise)
- "내 숨은 환급액을 찾아보세요" — app title (possessive treasure-hunt frame)
- "쩜 쉬운 세금 관리의 시작" — jobisnvillains.com headline (brand pun on 쩜/참)
- "SZS Blue는 삼쩜삼을 대표하는 색상입니다. 일관된 표현을 위해 브랜드 색상은 반드시 준수하여 사용합니다." — brand resource center (governance voice)

**Forbidden register**: fear-based tax-penalty scaremongering; unanchored refund-amount hype (every figure needs its basis line); bureaucratic 국세청-style officialese in user-facing flows; minimizing or hiding statutory disclosures.

## 11. Brand Narrative

삼쩜삼 is operated by **자비스앤빌런즈 (Jobis & Villains)**, founded in **August 2015** with CEO **김범섭** (named on the service's own statutory footer). The company's first act was 자비스 (Jarvis), an AI bookkeeping service for small businesses; its second act — launched **May 2020** — was 삼쩜삼, named after the **3.3%** withholding tax rate that every Korean freelancer recognizes from their pay stubs. The insight was painfully simple: millions of gig workers, freelancers, and platform laborers had overpaid taxes sitting unclaimed at the National Tax Service because the refund process assumed you had an accountant. 삼쩜삼 turned that recovery into a consumer app.

The numbers became the brand story. The service's own disclosure line counts **7,208,747 cumulative filing customers between 2020.05.01 and 2026.04.01**, and the corporate site reports the platform passing **24 million cumulative users with over 2조원 (two trillion won) in refunds processed** as of mid-2025 — figures the company publishes with their statistical basis attached, in keeping with its compliance-forward voice. The company earned Korean 예비유니콘 (pre-unicorn) designation in 2023, and its corporate mission frames the product line as giving people "더 많은 부" (more wealth), "더 많은 시간" (more time), and "더 많은 권리" (more rights).

What 삼쩜삼 refuses, visible in the design: the intimidating institutional chrome of tax authorities and legacy 세무 software, and the dark-pattern vagueness of "free check" services that hide their fee. What it embraces: a treasure-hunt verbal frame on a rigorously disclosed legal base, one mandated brand blue governed by a public brand resource center ("브랜드센터"), and an expansion arc from tax refunds toward a broader "생활 밀착 환급·혜택 플랫폼" — the everyday hidden-money platform its homepage title now claims.

## 12. Principles

1. **Reframe the chore as a find.** Tax filing is repositioned as discovering money that is already yours. *UI implication:* lead with the outcome ("내 숨은 환급액") and put process steps behind a single tall CTA; never open with forms.
2. **Every claim carries its basis.** Average-refund figures cite exact cohorts (7,208,747 filers, dated range). *UI implication:* bold number + adjacent basis chip or 12px footnote is an inseparable pair — never render one without the other.
3. **Safety is copywriting, not just engineering.** "안전하게" lives inside the button label. *UI implication:* trust-sensitive actions get the blue CTA and reassurance microcopy at the point of click, not on a separate security page.
4. **One governed blue.** SZS Blue is mandated by the brand center with explicit Do-Nots. *UI implication:* brand surfaces use `#0c64e6` untouched; funnel experiments may vary CTA colors but never the logo or identity blue.
5. **Flat means honest.** No shadows, no layered chrome, no hidden depth. *UI implication:* separate with tint and dark bands; if a section needs emphasis, change its background, not its elevation.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable 삼쩜삼 user segments (freelancers and gig workers reclaiming withheld tax, small-business owners filing 종합소득세), not individual people.*

**박지훈, 27, 서울.** A delivery-platform rider and part-time content editor with three income sources, all withheld at 3.3%. Has never met an accountant and never will. Found 삼쩜삼 through a friend's refund screenshot; the Kakao-only login meant he was filing within a minute. Trusts the service because the expected-refund chip explained exactly how the number was computed.

**이서연, 34, 성남.** A freelance designer who files 종합소득세 every May. Used to dread the 홈택스 maze; now treats the 삼쩜삼 push notification as the start of "refund season." Reads the fine print — and stays because the platform prints its limitations (세무 상담 미포함) plainly instead of pretending to be her accountant.

**최민수, 45, 대구.** A small private-academy owner who joined when 삼쩜삼 expanded into 개인사업자 services. Skeptical of fintech hype, he was converted by the statutory footer: registered business number, named CEO, exact cohort statistics. For him the flat, no-frills interface reads as "this company spends money on tax engines, not gradients."

## 14. States

| State | Treatment |
|---|---|
| **Empty (no refund found)** | White canvas, Ink (`#141618`) headline stating the result plainly, Body Sub (`#606a76`) explanation of why (already filed, no withheld tax), one CTA to check another year. No fake-positive framing. |
| **Empty (no linked income data)** | Muted (`#a4acb4`) single line explaining what's missing plus the chip-style basis explainer; CTA to connect 홈택스 auth. |
| **Loading (refund calculation)** | Flat skeleton blocks on `#f5f6f8` at final dimensions; progress copy in the treasure-hunt voice ("숨은 환급액을 찾는 중") — calculation steps shown, never a bare spinner. |
| **Loading (document submission)** | Inline progress with the previous screen's summary still visible; blue accent progress, no modal lock. |
| **Error (홈택스/NTS connection failed)** | Inline banner: plain-Korean cause + retry; names the external dependency honestly ("국세청 연결이 지연되고 있어요" framing). Never a bare error code. |
| **Error (identity verification failed)** | Field-level message stating what mismatched and what to fix; offers the alternate verification path. Calm, never accusatory. |
| **Error (filing rejected)** | Dedicated state with the rejection reason verbatim plus plain-language next steps; support entry point attached. |
| **Success (refund filed)** | Confirmation screen with the filed amount, expected deposit window, and basis line; calm congratulation, no confetti excess — the money is the reward. |
| **Success (deposit completed)** | Push + in-app record with exact amount and date; archived in history. |
| **Skeleton** | `#f0f1f2` blocks at final dimensions, flat pulse, no shimmer gradient — consistent with the shadowless system. |
| **Disabled** | Surface drops to `#f0f1f2` with Muted (`#a4acb4`) label; CTAs never disappear, they explain ("대상이 아니에요") via chip or footnote. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Button press, chip expand/collapse, focus |
| `motion-standard` | 200ms | Screen-to-screen step transitions, accordion, sheet |
| `motion-slow` | 300ms | Sidebar/menu slide (brand center uses 0.3s ease-in-out transform), result reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-standard` | `ease-in-out` | Two-way transitions — measured live on brand-center menu (`transform 0.3s ease-in-out`) |
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving sheets, step advances |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |

**Motion rules**: Motion is functional and quiet. The one signature moment is the refund-amount reveal — the number appears with a short `motion-slow / ease-enter` count-up, because the amount *is* the product's payoff; everything else (step transitions, chip expansion, sheet presentation) stays at `motion-standard` or faster. No spring, no bounce — a tax intermediary signals steadiness. Funnel pages are effectively static (image bands + anchor scrolling). Under `prefers-reduced-motion: reduce`, the count-up renders instantly and all transitions collapse; filing remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-10) via playwright getComputedStyle:
- https://www.3o3.co.kr — funnel landing (Noto Sans KR; CTA trio #fbbd41/#3e79ff/#2f3943 at 7px/61px; dark band #283240; tint #f3f6ff; title "삼쩜삼 - 생활 밀착 환급·혜택 플랫폼"; meta "세금 환급은 물론, 모든 숨은돈 삼쩜삼에서 찾기")
- https://app.3o3.co.kr — app login (Pretendard; ink #141618; Kakao CTA #fae100 18px/56px; chip #f0f1f2 10px/33px; footnotes #a4acb4 12px; statutory footer "(주) 자비스앤빌런즈 | 대표자 : 김범섭 | 사업자등록번호 : 158-86-00171"; cohort line "2020.05.01~2026.04.01 기간의 누적 신고 고객 7,208,747명")
- https://brand.3o3.co.kr/brand-logo + /color-typeface — official brand resource center ("SZS Blue는 삼쩜삼을 대표하는 색상입니다…", "Poppins와 Pretendard는 삼쩜삼을 대표하는 타입페이스입니다. 영문 사용 시 Poppins, 국문 사용 시 Pretendard를 사용합니다.", Logo/Color/Effect Do Nots). Brand palette hexes (#0c64e6, #023266, #fea800, #f3f9ff) sampled from the official swatch images (color_1–4 webp) via canvas pixel sampling — minor webp quantization possible.
- https://jobisnvillains.com — corporate site ("쩜 쉬운 세금 관리의 시작" 36px/700; mission framing "더 많은 부/시간/권리"; founded Aug 2015; Jarvis 2015→삼쩜삼 May 2020; 24M cumulative users / 2조원 refunds as of 2025.07; products incl. 파트너 세무사 플랫폼)
- https://blog.3o3.co.kr — official blog (CIO interview "[CIO Interview] 삼쩜삼, 생활 밀착형 플랫폼으로 확장하고 있습니다")

Voice samples (§10) are verbatim from the live surfaces listed above.

Brand narrative (§11): founding date, Jarvis-first product history, May 2020 launch, 예비유니콘 (2023)
and the 24M/2조원 milestones are from the operator's own corporate site (jobisnvillains.com) as
fetched this turn; the 3.3% name origin is widely documented public knowledge. CEO 김범섭 is named
on the app's statutory footer (live-inspected).

Personas (§13) are fictional archetypes informed by publicly observable user segments
(freelancers/gig workers, 개인사업자). Names are illustrative; they do not refer to real people.

§14 States and §15 Motion: empty/loading/error/success treatments and motion tokens are
illustrative extrapolations consistent with the measured flat/shadowless system and the brand's
compliance-forward voice; the 0.3s ease-in-out value is measured live (brand-center menu CSS).
Interpretive claims ("flat means honest", "geometry tracks register") are editorial readings,
not sourced 삼쩜삼 statements.
-->
