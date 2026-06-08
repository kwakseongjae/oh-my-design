---
id: qanda
name: QANDA
country: KR
category: consumer-tech
homepage: "https://qanda.ai"
primary_color: "#ff5500"
logo:
  type: favicon
  slug: "https://qanda.ai/favicon.ico"
verified: "2026-05-15"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#ff5500"
    heading: "#222222"
    cta: "#3d3d3d"
    canvas: "#ffffff"
    surface: "#f9f9f9"
    border: "#f0f0f0"
    disabled: "#b5b5b5"
    placeholder: "#999999"
    body: "#5d5d5d"
    stone-bg: "#f6f4f2"
    stone-border: "#efefef"
    stone-soft: "#d4cecb"
    stone-body: "#9a9492"
    stone-meta: "#78716e"
    stone-text: "#665c57"
    stone-heading: "#111111"
    success: "#0d9974"
    success-tint: "#ecf7f4"
    on-primary: "#ffffff"
  typography:
    family: { sans: "Pretendard", mono: "Pretendard" }
    hero:    { size: 30, weight: 700, lineHeight: 1.3, use: "Hero KR statement headline" }
    section: { size: 22, weight: 600, lineHeight: 1.4, use: "Feature card titles" }
    body:    { size: 16, weight: 400, lineHeight: 1.5, use: "Buttons, nav, body copy — universal floor" }
    small:   { size: 14, weight: 400, use: "Footer links, helper copy" }
    caption: { size: 13, weight: 400, use: "Footer legal text" }
    meta:    { size: 12, weight: 400, use: "Timestamps, badges" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 40, section: 80 }
  rounded: { sm: 8, md: 16, lg: 24, full: 9999 }
  shadow:
    subtle: "0 1px 4px rgba(0,0,0,0.04)"
    standard: "0 4px 16px rgba(0,0,0,0.08)"
    prominent: "0 8px 24px rgba(0,0,0,0.12)"
  components:
    button-primary: { type: button, bg: "#3d3d3d", fg: "#f9f9f9", radius: "8px", font: "16px / 400", use: "Primary CTA — 시작하기 / Get started; charcoal not orange" }
    button-pill: { type: button, bg: "#f9f9f9", fg: "#222222", radius: "35px", padding: "0 16px", font: "16px / 400", use: "New question / chip re-entry in left rail" }
    button-camera: { type: button, bg: "#f9f9f9", fg: "#222222", radius: "9999px", use: "Signature image-upload / camera CTA, 44px hit target" }
    badge-accent: { type: badge, bg: "#ff5500", fg: "#ffffff", radius: "9999px", use: "Promotional badges, NEW markers, premium flags" }
    button-text: { type: button, bg: "transparent", fg: "#222222", use: "Nav links, active by color contrast; inactive #999999" }
    card: { type: card, bg: "#ffffff", radius: "24px", use: "Feature cards, 1px #f0f0f0 border, minimal shadow" }
    chip: { type: badge, bg: "#f9f9f9", fg: "#222222", radius: "35px", padding: "0 16px", use: "Chips/tags; orange variant #ff5500 fg #ffffff" }
    input: { type: input, bg: "#ffffff", radius: "24px", padding: "12px 16px", use: "Conversation bar, 1px #f0f0f0 border, placeholder #999999" }
    badge-success: { type: badge, bg: "#ecf7f4", fg: "#0d9974", use: "Correct-answer 정답이에요 in 풀이 첨삭" }
  components_harvested: true
---

# Design System Inspiration of QANDA (콴다)

## 1. Visual Theme & Atmosphere

QANDA's interface is the digital equivalent of a clean study desk lit by a single warm lamp -- focused, friendly, and built for the moment a student stares at a problem they cannot solve. The page opens on a near-white canvas (`#FFFFFF` / `#F9F9F9`) with charcoal headings (`#222222`) and a single saturated **QANDA Orange** (`#FF5500`) that the brand treats as its core energy color. This is not the trustworthy orange of a marketplace; it is the high-energy, attention-pulling orange of a highlighter pen on a math worksheet -- the color a student reaches for when something *matters*.

The aesthetic across both consumer (`qanda.ai`) and corporate (`mathpresso.com`) surfaces is **mobile-first edutech minimalism**: a light surface with generous whitespace, a single bold accent, and the iconic camera/upload affordance presented at the center of the conversation. Typography rides on the **Pretendard family** (Pretendard Std on KR, Pretendard JP on JP, Pretendard Variable on web) because the product is multilingual by design -- Korean, Japanese, Vietnamese, Indonesian, Thai, English, and Spanish all need to look native, not translated. Components are pill-shaped (`35px` chip radius, `8px` button radius, `24px` card radius) and lean youthful without becoming cartoonish.

**Key Characteristics:**
- QANDA Orange (`#FF5500`) as the dominant brand accent -- saturated, energetic, never muted
- Pretendard family across all locales (Pretendard Std / Pretendard JP / Pretendard Variable) for multilingual parity
- Light-first surfaces (`#FFFFFF` page, `#F9F9F9` chip fill, `#F0F0F0` divider)
- Charcoal text hierarchy (`#222222` heading → `#5D5D5D` body → `#999999` caption)
- Camera/image-upload CTA elevated to hero position -- the photo-to-solution loop is the product
- Pill-and-rounded geometry: `8px` buttons, `24px` cards, `35px` chips, `9999px` avatars
- 16px base type for all primary actions -- equal-weight friendliness, no aggressive type hierarchy
- Two canonical surfaces: consumer (cool-gray, conversational) and corporate (warm taupe, narrative)

## 2. Color Palette & Roles

### Primary
- **QANDA Orange** (`#FF5500`): Brand solid, hero highlights, badge fills, primary energy mark. Top-occurrence color across both surfaces (269 uses on qanda.ai/ko, 21 on mathpresso.com/ko). The single non-negotiable brand pigment.
- **Charcoal 900** (`#222222`): Primary heading and body text on light surfaces. Avoids the harshness of pure black while staying authoritative.
- **Charcoal 700** (`#3D3D3D`): Dark CTA fill ("시작하기" / Get started button) -- the brand uses charcoal, not orange, for its primary action button on consumer surfaces.
- **Pure White** (`#FFFFFF`): Page background, primary surface.

### Neutral Scale (consumer / qanda.ai)
- **Gray 050** (`#F9F9F9`): Chip fill, secondary card surface.
- **Gray 100** (`#F0F0F0`): Subtle divider, muted background.
- **Gray 400** (`#B5B5B5`): Disabled stroke, weakest neutral.
- **Gray 500** (`#999999`): Inactive nav label, placeholder text.
- **Gray 700** (`#5D5D5D`): Footer body text, secondary information.

### Warm Stone Scale (corporate / mathpresso.com)
- **Stone Background** (`#F6F4F2`): Corporate page background, warmer than consumer #F9F9F9.
- **Stone 100** (`#EFEFEF`): Section dividers on corporate surfaces.
- **Stone 200** (`#D4CECB`): Soft borders in narrative sections.
- **Stone 600** (`#9A9492`): Secondary corporate body (most-used corporate text color, 113 occurrences).
- **Stone 700** (`#78716E`): Tertiary metadata.
- **Stone 800** (`#665C57`): Body text on stone background.
- **Stone 900** (`#111111`): Corporate near-black headings.

### Semantic
- **Positive Green** (`#0D9974`): Success states, correct-answer indicators on solution review screens.
- **Positive Tint** (`#ECF7F4`): Success background fill, light affirmation.

### Surface & Borders
- Border default: `#F0F0F0` (consumer) / `#EFEFEF` (corporate)
- Disabled fill: `#F9F9F9`

## 3. Typography Rules

### Font Family
- **Consumer (qanda.ai)**: `"Pretendard Std", "Pretendard JP", Pretendard, system-ui, sans-serif`
- **Corporate (mathpresso.com)**: `"Pretendard Std Variable", "Pretendard JP Variable", "Pretendard Variable", system-ui, sans-serif`
- **Design Principle**: Pretendard's regional variants (KR Std, JP) are loaded explicitly so Korean and Japanese surfaces render with locale-correct metrics. The product ships in 7 languages -- typography must look native in each, not transliterated.

### Hierarchy

| Role | Font | Size | Weight | Notes |
|------|------|------|--------|-------|
| Hero Heading | Pretendard | 28-32px | 700 | "전 과목 문제 풀이, 더 쉽고 정확하게" — single-line bold KR statement |
| Section Heading | Pretendard | 20-24px | 600 | Feature card titles ("풀이 첨삭", "선생님 Q&A") |
| Body / Primary Action | Pretendard | 16px | 400 | All buttons, nav items, body copy -- equal-weight friendliness |
| Body Small | Pretendard | 14px | 400 | Footer links, helper copy |
| Caption | Pretendard | 13px | 400 | Footer regulatory/legal text |
| Metadata | Pretendard | 12px | 400 | Timestamps, badges |

### Principles
- **16px is the universal floor for interactive text.** Buttons, nav, and primary copy all use 16px regular weight. The brand intentionally avoids tight micro-hierarchy on actions -- everything actionable looks equally tappable.
- **Three weights only**: Regular (400), Semibold (600), Bold (700). No light or extra-bold.
- **Korean-first line-height generosity**: Body text uses ~1.5 line-height to accommodate Hangul descenders without crowding.
- **No display tracking experiments**: Letter-spacing stays at 0em across the system. Korean and CJK glyphs require generous default tracking that custom values would break.

## 4. Component Stylings

### Buttons

**Primary Solid (Charcoal CTA)**
- Background: `#3D3D3D` (charcoal-700)
- Text: `#F9F9F9` (off-white)
- Radius: `8px`
- Min-height: `36px` (compact) / `40-48px` (standard)
- Font: 16px weight 400
- Use: Primary navigation actions ("시작하기", "Get started"). The brand uses charcoal -- not orange -- for its main CTA, reserving orange for highlight/energy moments.

**Pill (New question / chip-style action)**
- Background: `#F9F9F9` (gray-050)
- Text: `#222222` (charcoal-900)
- Radius: `35px` (pill)
- Min-height: `42px`
- Padding: 16px horizontal
- Use: Conversation re-entry ("새 질문" / "New question") in the persistent left rail.

**Image-Upload / Camera CTA (signature)**
- Circular icon button anchored to the input row
- Background: transparent or `#F9F9F9`
- Icon: camera glyph in `#222222` charcoal
- Size: 44px hit-target minimum
- Use: The defining QANDA gesture -- tap to photograph a math problem. This affordance must be visible without scrolling on every surface where students ask questions.

**Brand Accent Pill (orange highlight)**
- Background: `#FF5500` or transparent with `#FF5500` text
- Radius: `9999px` (pill)
- Use: Promotional badges, "NEW" markers, premium upsell flags. Sparingly on conversation surfaces.

**Tertiary / Text**
- Background: transparent
- Text: `#222222` (active) / `#999999` (inactive)
- Use: Nav links ("홈", "대화 기록", "학습 콘텐츠"). Active state is implied by color contrast, not background fill.

### Cards & Containers
- Background: `#FFFFFF` or `#F9F9F9`
- Border: `1px solid #F0F0F0` or no border
- Radius: `24px` for feature cards, `16px` for content blocks, `12px` for compact tiles
- Shadow: minimal -- `0 1px 4px rgba(0,0,0,0.04)` for floating cards; flat for inline

### Chips & Tags
- Background: `#F9F9F9` (default) or `#FF5500` (brand accent)
- Text: `#222222` on neutral, `#FFFFFF` on orange
- Radius: `35px` (full pill)
- Height: 32-42px
- Padding: 12-16px horizontal

### Inputs & Conversation Bar
- Background: `#FFFFFF` with `#F0F0F0` border
- Radius: `24px` (large pill input on the central conversation surface)
- Padding: 12px 16px
- Placeholder: `#999999`
- Right-side affordances: camera (image upload) icon + send button stacked horizontally

### Navigation
- Left rail (web): white background, vertical stack of icon+label rows at 16px regular
- Active item: `#222222` text, no background fill
- Inactive item: `#999999` text
- Top utility row: "Get started" charcoal pill + "Download" pill + Settings icon

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Scale: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 56px, 80px
- Conversation panel gutter: 16-24px
- Section vertical rhythm (corporate): 80-120px between hero blocks

### Grid & Container
- Mobile: full-width with 16px gutter
- Web conversation: centered column with ~720px max-width on the message stack
- Corporate landing: 1280px content max-width, 24px outer gutter

### Whitespace Philosophy
- **Calm, not cramped.** A student opening QANDA should feel a tutor's quiet attention, not a feature-stuffed dashboard. Every screen leads with one question, one input, one action.
- **The camera affordance breathes.** The image-upload button is never visually crowded; it sits in its own gesture zone with at least 16px of clear space on all sides.
- **Conversation density.** Past chat threads use tighter 12px row gaps; the active question surface uses 24px+ to feel inviting.

### Border Radius Scale
- Compact (`8px`): Buttons, small inputs
- Standard (`12px`): Inline tiles
- Comfortable (`16px`): Content cards
- Card (`24px`): Feature cards, conversation input bar
- Pill (`35px` or `9999px`): Chips, "새 질문" button, brand badges
- Circle (`9999px`): Avatars, camera/icon buttons

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline content, nav items |
| Subtle (s1) | `0 1px 4px rgba(0,0,0,0.04)` | Floating cards, hovered tiles |
| Standard (s2) | `0 4px 16px rgba(0,0,0,0.08)` | Conversation input bar, dropdowns |
| Prominent (s3) | `0 8px 24px rgba(0,0,0,0.12)` | Modals, app-download tooltip |

**Shadow Philosophy**: QANDA uses shadows sparingly -- the system is light-first and mostly flat. Where Karrot uses shadows for layering, QANDA uses **soft fills** (`#F9F9F9`, `#F0F0F0`) to suggest depth without elevation. The conversation input bar is the rare exception: it floats with `s2` to signal it as the active gesture surface.

## 7. Do's and Don'ts

### Do
- Use QANDA Orange (`#FF5500`) as the energy mark -- highlight badges, brand glyphs, accent strokes
- Use charcoal `#3D3D3D` for primary CTAs on consumer surfaces -- orange is for energy, charcoal is for action
- Load Pretendard with the locale-correct sub-family (Std for KR, JP for JP)
- Default to 16px regular weight for all interactive text -- equal-weight friendliness is the voice
- Center the camera/image-upload affordance on every question surface
- Use pill geometry (`35px`, `9999px`) for chips, brand badges, and re-entry buttons
- Switch to the warm-stone palette (`#F6F4F2`, `#9A9492`, `#78716E`) on corporate / About surfaces

### Don't
- Don't put orange on every CTA -- the brand uses charcoal for its primary action and reserves orange for moments of energy
- Don't drop below 16px for primary interactive text -- mobile students need tappable scale
- Don't introduce a secondary brand hue -- one accent (`#FF5500`) is the entire brand color story
- Don't use heavy shadows -- the system is intentionally light and mostly flat
- Don't mix the consumer cool-gray and corporate warm-stone palettes on the same surface -- they are two distinct canonical tracks
- Don't substitute Inter or Roboto for Pretendard -- multilingual rendering requires the Pretendard family
- Don't bury the camera affordance behind a menu -- the photo-to-solution gesture is the product

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <480px | Single column, full-width input, bottom nav |
| Tablet | 480-1024px | Conversation column with collapsed left rail |
| Desktop | >1024px | Persistent left rail (220px) + centered conversation |

### Touch Targets
- Primary CTA: 36-48px height
- Camera/upload icon: 44px minimum hit area
- Nav row: 48px height
- Pill chip: 42px height

### Collapsing Strategy
- Left rail collapses to bottom tab bar below 1024px
- App-download QR card hides on mobile (mobile users are already on the app target)
- Conversation input remains sticky at the bottom on mobile, anchored center on web

### Image Behavior
- User-uploaded math problem photos: edge-to-edge in conversation thread, 16px radius
- Step-by-step solution illustrations: full-width with 12px radius
- Persona avatar (QANDA mascot): circular, 40-48px diameter

## 9. Agent Prompt Guide

### Quick Color Reference
- Brand accent: QANDA Orange (`#FF5500`)
- Primary CTA fill: Charcoal (`#3D3D3D`)
- Heading text: Charcoal 900 (`#222222`)
- Body text: Gray 700 (`#5D5D5D`)
- Caption / inactive: Gray 500 (`#999999`)
- Surface fill: Gray 050 (`#F9F9F9`)
- Border: Gray 100 (`#F0F0F0`)
- Success: Green (`#0D9974`)
- Corporate background: Stone (`#F6F4F2`)
- Corporate body: Stone 600 (`#9A9492`)

### Example Component Prompts
- "Build a QANDA conversation input: white bg, 1px #F0F0F0 border, 24px radius, 56px height. Left: camera icon button (44px, charcoal #222222). Center: placeholder 'Ask anything to study' in #999999 16px. Right: send button (disabled #F9F9F9, active #3D3D3D fill)."
- "Create a QANDA primary CTA: #3D3D3D background, #F9F9F9 text, 16px weight 400, 36-40px height, 8px radius. Use for 'Get started' / '시작하기'."
- "Design a 'New question' pill: #F9F9F9 background, #222222 text, 16px weight 400, 42px height, 35px radius, 16px h-padding. Left icon 20px charcoal."
- "Build a feature card: white bg, 24px radius, 1px #F0F0F0 border. Icon top-left in #FF5500 orange. Heading 20px weight 600 #222222. Body 14px weight 400 #5D5D5D. 24px inner padding."
- "Create a step-by-step solution layout: vertical stack of numbered steps. Each step: small circular badge with #FF5500 number + step body text in #222222 16px. 16px gap between steps. Latex/math content rendered inline."

### Iteration Guide
1. The brand color is `#FF5500` -- exactly that value. Do not substitute purple, pink, or a softened tint.
2. Primary CTAs are charcoal (`#3D3D3D`), not orange. Orange is the highlight mark, not the action mark.
3. Pretendard family (Std for KR, JP for JP, Variable for web) -- never substitute another sans-serif.
4. 16px regular is the universal interactive type size. Resist hierarchy temptation on action labels.
5. The camera/image-upload affordance must be visible on every question surface.
6. Two canonical palettes exist: consumer cool-gray and corporate warm-stone. Keep them separate.
7. Pill geometry (`35px`, `9999px`) signals friendly re-entry; `8px` signals action. Don't flip them.

---

## 10. Voice & Tone

QANDA speaks like a slightly older sibling who happens to be very good at math: warm, encouraging, low-pressure, and allergic to anything that sounds like a textbook. The voice assumes the student in front of the screen has been stuck on the same problem for ten minutes and is one frustrated tap away from closing the app -- so it leads with calm reassurance (`Hi there! What would you like to study together?`) rather than a feature pitch. Korean surfaces stay in everyday endings (`-어요`, `-해요`) and second-person familiar (`알려주면`), never the formal `-ㅂ니다`. English mirrors that with conversational openings (*"Ask anything to study"*) instead of marketing copy (*"Unlock your study potential"*).

| Context | Tone |
|---|---|
| CTAs | Verb-first Korean (`시작하기`, `새 질문`, `App 다운로드`) / plain English (`Get started`, `Download`, `New question`) |
| Hero / first impression | One welcoming question, not a value prop. (`What would you like to study together?` / `모르는 문제를 알려주면 맞춤형 풀이를 제공해요`) |
| Empty states | Reassuring + actionable. Never `데이터가 없습니다` or `No results`. |
| Error messages | Specific, blameless. Prefer `사진을 다시 찍어주세요` over `오류가 발생했습니다`. |
| Success / solution shown | Quiet competence, not celebration. The answer arriving *is* the reward. |
| Premium upsell | Soft, value-first. Surface what unlocks, not what's locked. |
| Multilingual surfaces | Locale-native phrasing, not translation. Indonesian, Vietnamese, Thai, Spanish each get a copywriter, not a translator. |
| Tutor / teacher Q&A | Respectful of both student and teacher. Never positions AI as superior to human tutors. |

**Forbidden phrases.** `오류가 발생했습니다`, `데이터가 없습니다`, `잠시만 기다려주세요` (overused -- use specific waits), `혁신적인`, `세계 최초`. English boilerplate: `Oops, something went wrong`, `We're sorry for the inconvenience`, `Unlock premium features`. Marketing-speak bans: `revolutionary`, `world-class`, `next-generation AI`, `cutting-edge`. Never frame AI as replacing teachers -- the brand explicitly partners with `선생님 Q&A` (Teacher Q&A) and `콴다과외` (QANDA Tutoring).

**Voice samples.**

- `Hi there! What would you like to study together?` — homepage hero, English. <!-- verified: https://qanda.ai/en, 2026-05 -->
- `Ask anything to study` — input placeholder, English. <!-- verified: https://qanda.ai/en, 2026-05 -->
- `Study smarter, wherever you are` — app-download CTA. <!-- verified: https://qanda.ai/en, 2026-05 -->
- `전 과목 문제 풀이, 더 쉽고 정확하게` — homepage hero, KR. <!-- verified: https://qanda.ai/ko, 2026-05 -->
- `모르는 문제를 알려주면 맞춤형 풀이를 제공해요` — homepage sub-hero, KR. <!-- verified: https://qanda.ai/ko, 2026-05 -->
- `학습용 AI로 쉬운 풀이, 정확한 답` — value-prop line, KR. <!-- verified: https://qanda.ai/ko, 2026-05 -->
- `교육 기회의 평등을 기술로 이룩하는 것` — corporate mission, KR. <!-- verified: https://mathpresso.com/ko, 2026-05 -->
- `가장 효과적인 교육을 전 세계 모두에게` — corporate vision, KR. <!-- verified: https://mathpresso.com/ko, 2026-05 -->
- `We Rebuild Education` — corporate brand line, EN. <!-- verified: https://mathpresso.com, 2026-05 -->

## 11. Brand Narrative

QANDA (콴다, short for *Q and A*) launched in **June 2015** as the first product of **Mathpresso, Inc.** (주식회사 매스프레소), founded in Seoul by **Lee Jong-heun (이종헌)** -- then a private math tutor -- and his high school friend **Lee Yong-jae (이용재, "Jake Lee")**, a Seoul National University computer engineering student who had been looking for a startup idea. Two more SNU classmates, **Jung Won-uk (정원욱)** and **Jeong Ho-jae (정호재)**, joined as co-founders. Their founding bet was that the bottleneck in education is not content -- there is more free math content online than any student could watch -- but **friction at the moment of confusion**. A student stuck on a problem at 11pm doesn't need a course; they need someone to look at *this specific problem* and explain it. QANDA's first product solved exactly that: photograph the problem, get a worked solution within seconds. The app was built around an OCR engine trained on math notation -- a much harder optical-recognition problem than reading printed text -- and the founding team treated that engine as the moat ([Wikipedia — QANDA](https://en.wikipedia.org/wiki/QANDA), [Inquirer Technology](https://technology.inquirer.net/100862/startup-mixes-koreas-strongest-areas-math-and-tech)).

Ten years later the product has held its shape and scaled across Asia. **Mathpresso reports 97 million cumulative registered users, 8 million monthly active users, and 7.2 billion cumulative searches** across 50+ countries, with 90% of usage now coming from outside Korea -- Japan, Vietnam, Indonesia, and Thailand are major markets, with Spanish and English added to support Latin America and global English-speaking students ([mathpresso.com](https://mathpresso.com/ko)). The company has raised approximately **$130-150M / 153B KRW cumulative**, including a **July 2021 Series C of $50M** led by Yellowdog with **GGV Capital, Goodwater Capital, KDB, SKS Private Equity, SoftBank Ventures Asia, Legend Capital, Mirae Asset Venture Investment, and Smilegate Investment** ([PR Newswire — Series C](https://www.prnewswire.com/news-releases/mathpresso-developer-of-ai-based-learning-app-qanda-secures-50-million-in-series-c-funding-301324099.html), [Crunchbase — Mathpresso](https://www.crunchbase.com/organization/mathpresso)). **Google** and **Samsung Ventures** later joined the cap table; **KT Corporation** (Korean telecom giant) made a strategic investment in 2023 specifically to co-develop a math LLM ([PR Newswire — KT investment](https://www.prnewswire.com/news-releases/google-backed-edtech-company-mathpresso-secures-strategic-investment-from-telecom-giant-kt-301922854.html)).

In **January 2024**, Mathpresso, **Upstage** (Korea's leading LLM startup), and **KT** announced **MathGPT**, a math-specialized small language model that **set a new world record on the MATH benchmark, surpassing Microsoft's ToRA-13B and outperforming GPT-4** on high-school math problems ([Korea Herald](https://www.koreaherald.com/article/3299066), [PR Newswire — MathGPT](https://www.prnewswire.com/news-releases/south-koreas-mathgpt-sets-a-new-world-record-in-mathematical-performance-302028223.html)). MathGPT is being integrated across QANDA's surfaces -- the consumer app, B2B/B2G SaaS, and the human-tutor product **콴다과외 (QANDA Tutor)** -- under the umbrella product **Cramify**, a hyper-personalized study tool. **QANDA was named to TIME's inaugural list of the World's Top EdTech Companies in 2024** ([Taiwan News](https://www.taiwannews.com.tw/news/5678819)). The brand refuses two adjacent positionings: it is not a replacement for teachers (the product surfaces `선생님 Q&A` / live human tutoring as a co-equal feature), and it is not a content library competing with Khan Academy or Coursera (the brand stays focused on the per-problem moment-of-stuck loop). The mission, stated on Mathpresso's corporate site, is *"교육 기회의 평등을 기술로 이룩하는 것"* — achieving educational opportunity equality through technology — paired with the vision *"가장 효과적인 교육을 전 세계 모두에게"* (the most effective education for everyone, globally) and the brand line *"We Rebuild Education"* ([mathpresso.com](https://mathpresso.com/ko)).

## 12. Principles

1. **The camera is the product.** The defining QANDA gesture is photographing a problem and getting a worked solution. Every question surface must surface the camera/image-upload affordance without scrolling, without a menu, and without a hidden state. *UI implication:* if a design hides the camera button behind a "+" menu or relegates it to a settings drawer, the design has drifted off-brand.
2. **Orange is energy; charcoal is action.** `#FF5500` is the brand's energy mark -- it lights up badges, highlights, and brand glyphs. The primary CTA fill is charcoal `#3D3D3D`. Designs that use orange on every action over-saturate the brand and lose the highlight semantics. *UI implication:* at most one orange-filled element per viewport in a primary flow; primary CTAs default to charcoal.
3. **16px is the universal floor for actionable text.** Buttons, nav, and primary copy all use 16px regular weight. The brand intentionally avoids tight type hierarchy on actions -- a student under cognitive load should not have to parse which thing is most tappable. *UI implication:* never drop a button label below 16px; never weight one button heavier than another to imply primacy -- use color (charcoal vs neutral pill) instead.
4. **Pretendard, locale-correct.** Pretendard Std for KR, Pretendard JP for JP, Pretendard Variable for web/EN. The product ships in seven languages; substituting Inter or system-ui breaks Hangul and CJK metrics. *UI implication:* the font stack must explicitly declare the locale variant first; never rely on Pretendard auto-detecting locale.
5. **Conversation, not catalog.** The home surface is a single greeting + a single input, not a feature grid. Other features (`풀이 첨삭`, `선생님 Q&A`, `퀴즈로 외우기`, `타이머`, `콴다과외`) live one tap away -- they do not crowd the entry moment. *UI implication:* the first-paint of any question surface should have one heading, one input, and the camera affordance -- nothing else competing for attention.
6. **AI augments, never replaces, teachers.** The product surfaces `선생님 Q&A` (Teacher Q&A) and `콴다과외` (QANDA Tutoring) as co-equal features alongside AI solutions. Brand voice never frames AI as superior to human tutors. *UI implication:* upsell to human tutoring must read as expansion, not escalation. Avoid copy like "Get a real human" that implies AI is lesser.
7. **Two canonical surfaces, two palettes.** Consumer (`qanda.ai`) uses cool-gray neutrals (`#F9F9F9`, `#F0F0F0`, `#999999`); corporate (`mathpresso.com`) uses warm-stone (`#F6F4F2`, `#9A9492`, `#78716E`). Both share `#FF5500` as the brand mark and Pretendard as the typeface. *UI implication:* never mix palettes within one surface. A pricing page on the consumer app stays cool-gray; a careers page on the corporate site stays warm-stone.
8. **Multilingual is first-class, not localized.** 90% of QANDA's MAU is outside Korea. Korean is the headquarters language, not the canonical language. *UI implication:* designs should be reviewed at minimum in KR, EN, and one CJK + one Latin SEA locale (e.g., JP and VI/ID) before sign-off. Right-aligned reading order, longer Vietnamese strings, and JP vertical-feeling line-heights are all in scope.

## 13. Personas

*Personas are fictional archetypes informed by publicly described QANDA user segments, not individual people.*

**민준 (Minjun), 16, Seoul.** Korean high school sophomore, 수능 prep track. Uses QANDA 4-5 times a week, almost always at his desk between 9pm and midnight. Photographs a math problem, scans the worked solution, sometimes uses `풀이 첨삭` (Solution Review) when his own attempt was wrong but he can't see why. Treats the AI as a fast tutor for routine problems and saves human-tutor (`콴다과외`) sessions for the hardest 모의고사 questions.

**Sari, 17, Jakarta.** Indonesian high school student, science track. Found QANDA through a TikTok study-with-me creator. Uses it primarily on her phone in Bahasa Indonesia for matematika and fisika. Camera-first user: she rarely types a question, almost always photographs a textbook problem. The fact that the app feels native in Indonesian -- not awkwardly translated -- is why she picked QANDA over alternatives.

**유키 (Yuki), 15, Osaka.** Japanese junior-high student preparing for 高校受験. Uses QANDA in Japanese, often during commute time on the train. Pretendard JP rendering matters -- she once tried a competitor app where Japanese rendered with Korean glyph metrics and uninstalled it within an hour.

**이선생님 (Ms. Lee), 41, Daegu.** Middle school math teacher. Uses QANDA's B2B teacher dashboard to assign practice problems and review which problems her class is collectively struggling with (anonymized). Has a complicated relationship with the consumer app -- some students use it to skip thinking -- but appreciates that QANDA explicitly surfaces human tutoring rather than positioning AI as a teacher replacement.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no chat history)** | Single warm line (`아직 대화가 없어요. 모르는 문제를 사진으로 올려보세요`) + camera/upload icon as the primary affordance. No illustration. Never `데이터가 없습니다`. |
| **Empty (search no result)** | One-line caption in `#5D5D5D` 14px (`이 문제와 일치하는 풀이를 찾지 못했어요. 사진을 다시 찍어볼까요?`) + retry CTA in charcoal `#3D3D3D`. |
| **Loading (image-recognizing)** | OCR progress: subtle scanning animation overlaying the uploaded image, `#FF5500` accent line sweeping top-to-bottom over 1.5s. Caption: `문제를 인식하고 있어요`. |
| **Loading (solution generating)** | Skeleton blocks at `#F0F0F0` matching the final step-by-step layout (3-5 numbered step rows). Shimmer at 1.2s. Camera affordance stays visible but disabled. |
| **Loading (first paint)** | Ghost of the conversation surface: greeting line at `#F0F0F0`, input bar outline at `#F0F0F0`. No spinner. |
| **Error (image too blurry)** | Inline below the upload: `#FF5500` 13px helper text (`사진이 흐려서 문제를 읽을 수 없어요. 더 선명하게 다시 찍어주세요`). Camera button highlighted in `#FF5500` to invite re-capture. |
| **Error (network)** | Toast at bottom of conversation: `#222222` background, white 14px text, 3s auto-dismiss. One actionable sentence (`연결이 끊어졌어요. 다시 시도해주세요`). |
| **Error (server / blocking)** | Full-screen centered: `#222222` 16px weight 600 heading, `#5D5D5D` 14px subline, retry CTA in charcoal `#3D3D3D`. No illustration. |
| **Success (solution arrived)** | Step-by-step solution renders top-down with subtle stagger (each step fades + 8px upward translate over 200ms). `#0D9974` checkmark badge appears on the final step. Quiet, not celebratory. |
| **Success (correct answer in 풀이 첨삭)** | `#0D9974` positive-green inline badge with `정답이에요` label. `#ECF7F4` tint flash behind the answer for 300ms. |
| **Skeleton** | `#F0F0F0` blocks at exact final dimensions. Shimmer 1.2s with white highlight. Used for solution-generating, search-results, and chat-history loading. |
| **Disabled (send button before input)** | Button drops to `#F9F9F9` fill with `#B5B5B5` icon. Geometry stays identical so the re-enable is frame-stable. |
| **Premium-locked feature** | Inline soft block: `#F9F9F9` background card, lock icon in `#999999`, headline `프리미엄으로 더 자세한 풀이를 보세요`, soft `#FF5500` accent on the unlock CTA only. Never a hard paywall over the user's own captured problem. |

## 15. Motion & Easing

**Durations** (named, not raw milliseconds):

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle flips, send-button enable/disable |
| `motion-fast` | 150ms | Hover, focus, button press, inline color flashes |
| `motion-standard` | 250ms | Default — card taps, tab switches, message arrival |
| `motion-slow` | 400ms | OCR scan sweep, step-by-step staggered reveal |
| `motion-page` | 300ms | Route transitions, full-screen modal in/out |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Solutions arriving, modals opening, toasts entering |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Modals dismissing, toasts auto-closing |
| `ease-standard` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Two-way transitions, step staggers |
| `ease-scan` | `cubic-bezier(0.65, 0.0, 0.35, 1)` | OCR scanning sweep — slightly stronger curve to feel deliberate |

**Spring stance.** Subtle springs are permitted on the **solution-arrival stagger** (each step settles with a tiny overshoot, ~3% scale rebound) because the moment a stuck student sees their answer is the brand's emotional core -- a touch of life there reinforces *"the answer landed"* without becoming celebratory. Outside of solution arrival and the camera shutter feedback, springs are forbidden. CTAs do not bounce; modals do not overshoot; toasts do not wobble. The brand is built around students under cognitive load -- excess motion reads as noise.

**Signature motions.**

1. **Camera shutter feedback.** On image upload, a brief `#FFFFFF` flash overlays the camera button + a 96% scale press, releasing on capture (`motion-fast / ease-standard`). Mimics a real camera shutter so the gesture feels confirmed.
2. **OCR scan sweep.** During problem recognition, a thin `#FF5500` line sweeps top-to-bottom over the uploaded image (`motion-slow / ease-scan`). Loops once per recognition cycle. The orange accent here is one of the few moments orange takes a primary visual role.
3. **Step-by-step solution reveal.** When the AI solution arrives, each step (1, 2, 3, 4, 5...) fades in with an 8px upward translate, staggered at 80ms intervals (`motion-standard / ease-enter`). The final step gets a soft `#0D9974` checkmark badge with a tiny scale-spring (1.0 → 1.05 → 1.0) over 250ms. This is the brand's signature reveal.
4. **Conversation message arrival.** New chat messages slide in from the bottom with a 12px translate (`motion-standard / ease-enter`). Older messages stay fixed -- no shifting context.
5. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`. The OCR scan-sweep simplifies to a static `#F9F9F9` overlay with a caption. The solution stagger becomes a single fade. The app stays fully functional; just less kinetic.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 — Direct verification (Playwright + WebFetch, 2026-05):
- https://qanda.ai/ko — live KR consumer surface. Verified primary brand color
  #FF5500 (269 occurrences, top color rank 1), Pretendard Std/JP/Variable font
  family, charcoal #3D3D3D primary CTA "시작하기" (8px radius, 36px height,
  16px weight 400 white text), pill "새 질문" #F9F9F9 (35px radius, 42px height),
  inactive nav #999999, footer text #5D5D5D, success green #0D9974.
  Hero copy verbatim: "전 과목 문제 풀이, 더 쉽고 정확하게",
  "모르는 문제를 알려주면 맞춤형 풀이를 제공해요",
  "학습용 AI로 쉬운 풀이, 정확한 답". Features: "풀이 첨삭", "선생님 Q&A",
  "퀴즈로 외우기", "타이머", "콴다과외".
- https://qanda.ai/en — live EN consumer surface. Hero copy verbatim:
  "Hi there! What would you like to study together?", "Ask anything to study",
  "Study smarter, wherever you are". Footer confirms CEOs Yong Jae Lee +
  Jong Heun Lee, Mathpresso, Inc., 218 Teheran-ro Gangnam-gu Seoul.
- https://mathpresso.com/ko — corporate surface. Confirmed warm-stone palette
  (#F6F4F2 page bg, #9A9492 most-used body 113 occurrences, #78716E secondary,
  #665C57, #111111), shared #FF5500 brand accent (21 occurrences, distinctly
  smaller share than consumer), Pretendard Variable font family. Mission
  "교육 기회의 평등을 기술로 이룩하는 것", vision "가장 효과적인 교육을
  전 세계 모두에게", brand line "We Rebuild Education". Metrics: 97M registered,
  8M MAU, 7.2B cumulative searches, 153B KRW funding, 7 languages.

Tier 2 — Design system records (WebFetch, 2026-05):
- https://getdesign.md/qanda — no record ("No designs found for 'qanda'").
- https://getdesign.md/mathpresso — no record.
- https://styles.refero.design — not checked, but consistent absence expected
  given QANDA has not published a public design system.

Tier 2 — Press / philosophy (WebSearch, 2026-05):
- https://en.wikipedia.org/wiki/QANDA — confirms June 2015 Mathpresso founding,
  January 2016 QANDA app launch, OCR-based math problem recognition,
  90M+ registered users across 50 countries.
- https://technology.inquirer.net/100862/startup-mixes-koreas-strongest-areas-math-and-tech —
  confirms founding story: Lee Jong-heun (private math tutor) + Lee Yong-jae
  (Seoul National University CS student looking for a startup idea), with
  SNU classmates Wonguk Jung and Hojae Jeong joining as co-founders.
- https://www.prnewswire.com/news-releases/mathpresso-developer-of-ai-based-learning-app-qanda-secures-50-million-in-series-c-funding-301324099.html —
  confirms July 2021 Series C, $50M (NOT the $75-80M cited in original spec),
  led by Yellowdog with GGV Capital, Goodwater Capital, KDB, SKS PE,
  SoftBank Ventures Asia, Legend Capital, Mirae Asset, Smilegate.
- https://www.prnewswire.com/news-releases/google-backed-edtech-company-mathpresso-secures-strategic-investment-from-telecom-giant-kt-301922854.html —
  confirms KT strategic investment, Google as backer.
- https://www.koreaherald.com/article/3299066 +
  https://www.prnewswire.com/news-releases/south-koreas-mathgpt-sets-a-new-world-record-in-mathematical-performance-302028223.html —
  confirm January 2024 MathGPT release, co-developed by Mathpresso + Upstage + KT,
  outperformed Microsoft ToRA-13B on MATH benchmark, surpassed GPT-4 on MATH.
- https://www.taiwannews.com.tw/news/5678819 — confirms TIME World's Top
  EdTech Companies 2024 inclusion.
- https://www.crunchbase.com/organization/mathpresso — confirms cumulative
  funding ~$130M+ (153B KRW reported on corporate site).

Re-verification status:
- The 97M registered / 8M MAU / 7.2B cumulative searches / 153B KRW figures
  in §11 are carried from mathpresso.com/ko as of 2026-05 retrieval. Numbers
  may drift; re-verify before quoting publicly.
- The "$75M Series C 2021 + later" claim in the original spec is corrected
  here to $50M Series C July 2021. Total cumulative funding ~$130-150M is
  consistent with both Crunchbase and the corporate site.
- The original spec suggested "Bright purple/pink primary — verify live
  (could be #7B61FF or #FF008C)". Live verification (Playwright + computed
  styles, 2026-05) shows the actual brand primary is #FF5500 ORANGE, not
  purple/pink. The spec's color hypothesis was incorrect; #FF5500 is
  documented here based on direct measurement (269 occurrences on qanda.ai/ko,
  ranked #1 by frequency among non-trivial colors).

Personas (§13) are fictional archetypes informed by publicly described QANDA
user segments (KR high schooler, ID secondary student, JP middle schooler,
KR teacher in B2B). Any resemblance to specific individuals is unintended.

Interpretive claims (editorial, not documented QANDA statements):
- "Orange is energy; charcoal is action" framing (§7, §12) — editorial reading
  of the observed pattern (#FF5500 used heavily on highlights/badges but not
  on the primary CTA fill, which is #3D3D3D charcoal). Not a sourced QANDA
  brand statement.
- "The camera is the product" (§12) — editorial framing of the observed UI
  emphasis on the image-upload affordance. The OCR-based photo-to-solution
  loop is documented as the core feature on Wikipedia and on QANDA's own
  product pages, but the principle phrasing is editorial.
- The spring-permitted-only-for-solution-arrival stance (§15) — derived from
  the brand posture (students under cognitive load, calm tutor voice).
  Not a documented QANDA motion rule.
-->

---

**Verified:** 2026-05-08 (omd:add-reference, Apple-tier intent)
**Tier 1 sources:** qanda.ai/ko (consumer KR — QANDA Orange `#FF5500` 269-occurrence top color, Pretendard Std/JP/Variable, charcoal `#3D3D3D` `8px` `36px·400` Primary + neutral pill `#F9F9F9` `35px` `42px·400` "새 질문" + footer `#5D5D5D` `400`); qanda.ai/en (consumer EN — verified hero microcopy "Hi there! What would you like to study together?" + "Ask anything to study"); mathpresso.com/ko (corporate — warm-stone palette `#F6F4F2`/`#9A9492`/`#78716E` 2nd canonical track, shared `#FF5500` accent at 21 occurrences, Pretendard Variable, mission/vision verbatim).
**Tier 2 sources:** getdesign.md/qanda + getdesign.md/mathpresso — no record.
**Tier 2 (Philosophy/founders):** Wikipedia (QANDA), Inquirer Technology (founding story Lee Jong-heun + Jake Lee + SNU co-founders), PR Newswire (Series C $50M July 2021 + KT strategic investment + MathGPT world record), Korea Herald (MathGPT outperforms GPT-4 on MATH benchmark), Taiwan News (TIME Top EdTech 2024), Crunchbase (Mathpresso cumulative funding).
**Style ref:** `karrot` (KR §4 canonical schema, retained).
**Conflicts unresolved:** Original spec hypothesized "purple/pink primary `#7B61FF` or `#FF008C`" — corrected to `#FF5500` ORANGE based on live measurement. Original spec cited "Series C ~$75M 2021" — corrected to $50M based on PR Newswire announcement. Both conflicts resolved in favor of measured/sourced values.
