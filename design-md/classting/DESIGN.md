---
id: classting
name: "Classting"
country: KR
category: education
homepage: "https://www.classting.com"
primary_color: "#00C896"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=classting.com&sz=256"
verified: "2026-06-03"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-08"
  colors:
    primary: "#00C896"
    primary-hover: "#17A27E"
    brand: "#00C896"
    canvas: "#FAFAFB"
    foreground: "#424242"
    muted: "#757575"
    on-primary: "#FFFFFF"
    surface: "#FFFFFF"
    surface-mint: "#EDF9F6"
    surface-lavender: "#FAF5FF"
    green-050: "#EFFFFA"
    accent-purple: "#9F7AEA"
    accent-orange: "#ED8936"
    accent-blue: "#4299E1"
    outline: "#ED872D"
    footer: "#000000"
  typography:
    family: { sans: "Noto Sans KR", mono: "Noto Sans KR" }
    body:        { size: 16, weight: 400, lineHeight: 1.5, use: "Body copy" }
    label:       { size: 14, weight: 500, lineHeight: 1.0, use: "Sub-button / label" }
    display-md:  { size: 28, weight: 700, use: "Section headings (.display-md)" }
    display-lg:  { size: 42, weight: 700, lineHeight: 1.29, use: "Major feature headings (.display-lg)" }
    display-x-lg: { size: 56, weight: 700, lineHeight: 1.21, use: "Hero headings (.display-x-lg)" }
  spacing: { xs: 4, sm: 8, md: 16, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 6, md: 8, lg: 16, pill: 24, full: 9999 }
  shadow:
    subtle: "rgba(0,0,0,0.05) 0px 0px 12px"
    raised: "rgba(0,0,0,0.08) 0px 2px 12px"
    accent: "rgba(0,200,150,0.08) 0px 5px 25px"
  components_harvested: true
  components:
    button-primary: { type: button, bg: "#00C896", fg: "#FFFFFF", radius: 8, padding: "15px 16px", font: "14px/500", use: "primary CTA" }
    button-black: { type: button, bg: "#424242", fg: "#FFFFFF", radius: 8, use: "alt CTA" }
    button-outline: { type: button, fg: "#ED872D", radius: 8, use: "transparent, 1px #ED872D border" }
    card: { type: card, bg: "#FFFFFF", radius: 16, padding: "24px 20px", use: "subtle 12px shadow" }
    section-banner: { type: card, bg: "#00C896", radius: 24, padding: "64px 106px", use: "Consult banner" }
    tag-mint: { type: badge, bg: "#EDF9F6", radius: 6, padding: "8px", font: "14px/500", use: "mint tag" }
---

# Classting

AI-powered K–12 education platform from Korea that connects teachers, students, and parents through personalized learning powered by adaptive diagnostics.

## 1. Visual Theme & Atmosphere

Classting's visual language is built on the clarity of purpose you'd expect from a product used in 99 % of Korean K–12 schools. The dominant feeling is optimistic and clinical at once: a vivid mint-green primary cuts through generous white space, signalling growth and trust, while soft gradient washes (mint → lavender) on section backgrounds give the interface a gentle warmth that never feels cold or corporate. Rounded cards at 16 px radius and pillowed CTA banners at 24 px keep the tone approachable for both teachers and students. The typographic scale is disciplined — Noto Sans KR anchors the Korean-first experience, with a bold 700-weight display stack that speaks with confidence and an unhurried 400-weight body that keeps comprehension low-effort. Depth is handled with light diffuse shadows (0 2px 12px rgba(0,0,0,0.08)) rather than heavy elevation, projecting an honest, de-cluttered utility that places data visibility above decoration.

## 2. Color Palette & Roles

- **CT Green 500:** `#00C896` — primary brand, CTA buttons, active nav, key data highlights
- **CT Green 050:** `rgb(239, 255, 251)` (`#EFFFFA`) — card surface, tag background, mint wash sections
- **CT Green 700:** `rgb(23, 162, 126)` (`#17A27E`) — hover state on green elements, body accent
- **Purple 500:** `#9F7AEA` — secondary accent; AI / learning-path segments, gradient-self
- **Orange 500:** `#ED8936` — tertiary accent; business / content segments
- **Blue 500:** `#4299E1` — university segment, data gradient endpoint
- **Dark Text:** `#424242` — primary body text, headings
- **Gray 600:** `#757575` — secondary / supporting body text
- **Surface White:** `#FAFAFB` — neutral page background, card base
- **Surface Mint:** `#EDF9F6` — tag background, feature section washes
- **Surface Lavender:** `#FAF5FF` — AI segment section wash
- **Black:** `#000000` — footer, dark-mode CTA panels

## 3. Typography Rules

- **Primary typeface:** Noto Sans KR (Korean-first), with Noto Sans HK for Traditional Chinese locales
- **Body copy:** 16px / 400 / 24px line-height
- **Sub-button / label:** 14px / 500 / 14px line-height
- **Display SM:** 28px / 700 — section headings (`.display-md`)
- **Display LG:** 42px / 700 / 54px line-height — major feature headings (`.display-lg`)
- **Display XL:** 56px / 700 / 68px line-height — hero headings (`.display-x-lg`)
- **Font-size scale tokens:** 12px (size-60) → 14px (size-80) → 16px (size-100) → 18px (size-120) → 20px (size-140) → 24px (size-150)
- **Weight scale:** Regular 400, Medium 500, Bold 700
- **No italic usage** in marketing UI; emphasis achieved via color (#00C896) or weight change
- **Gradient text** used decoratively on hero headings: `linear-gradient(to right, #00C896, #9F7AEA)` (green-self), `linear-gradient(to right, #9F7AEA, #F56565)` (AI)

## 4. Component Stylings

### Primary Button (Fill)

**Green CTA — Default**
- Background: `#00C896`
- Text: `#FFFFFF`
- Border: none
- Radius: 8px
- Padding: 15px 16px
- Font: 14px / 500

**Black CTA — Alt**
- Background: `#424242`
- Text: `#FFFFFF`
- Border: none
- Radius: 8px
- Padding: 15px 16px
- Font: 14px / 500

**Orange CTA — Business Segment**
- Background: `#ED8936`
- Text: `#FFFFFF`
- Border: none
- Radius: 8px
- Padding: 15px 16px
- Font: 14px / 500

**Outline CTA — Secondary**
- Background: transparent
- Text: `#ED872D`
- Border: 1px solid `#ED872C`
- Radius: 8px
- Padding: 20px 24px
- Font: 14px / 500

### Card

**Blog / Feature Card**
- Background: `#FFFFFF`
- Border: none
- Radius: 16px
- Padding: 24px 20px
- Shadow: 0 0 12px `rgba(0,0,0,0.05)`

**Section Banner (Consult)**
- Background: `#00C896`
- Radius: 24px
- Padding: 64px 106px

### Tag / Badge

**Service Tag — Mint**
- Background: `#EDF9F6`
- Radius: 6px
- Padding: 8px

**Service Tag — Orange**
- Background: `#FFFAF0`
- Radius: 6px
- Padding: 8px

---
**Verified:** 2026-06-03
**Tier 1 sources:** https://www.classting.com (homepage HTML + Webflow CSS bundle); https://cdn.prod.website-files.com/642a57a169d01c4b3830b2b5/css/classting-aac463.webflow.shared.c0fddf191.css (Classting Webflow CSS, 126 KB); https://ctcorp.ai/ko/brand-guidelines (official CT Corp. brand guidelines page, 2025-02-26 CI)
**Tier 2 sources:** getdesign.md/classting — NOT LISTED (no designs found). refero — no result found for Classting KR.
**Conflicts unresolved:** none

## 5. Layout Principles

- Max content width: 1,248px on marketing pages; 1,280px on pricing
- Horizontal padding: 16px mobile → 48px desktop
- Primary grid: flexbox rows, `justify-content: space-between`, gap-based spacing
- Section vertical rhythm: `margin-top: 120px` between major sections; `padding: 64px 106px` on CTA banners
- Spacing token scale: 0.25rem → 0.5rem → 0.75rem → 1rem → 1.25rem → 1.5rem → 2rem (--space-01 through --space-07)
- Layout tokens: 1.5rem → 2.25rem → 3rem → 3.5rem → 4rem → 4.5rem → 5.5rem → 6rem → 7.5rem (--space-layout-01 through -09)
- Responsive breakpoint: 720px (flex-direction switches from column to row on most feature sections); 540px (page background shifts from gray-200 to white)
- Feature grid: hero image + content side-by-side at ≥ 720px; stacked on mobile

## 6. Depth & Elevation

- **Level 0 — Flat:** tag backgrounds, section washes — no shadow
- **Level 1 — Subtle:** `box-shadow: 0 0 12px rgba(0,0,0,0.05)` — blog / feature cards
- **Level 2 — Raised:** `box-shadow: 0 2px 12px rgba(0,0,0,0.08)` — interactive panels
- **Level 3 — Focus ring / Accent:** `box-shadow: 0 5px 25px rgba(0,200,150,0.08)` — highlighted CTA feature cards
- **Backdrop / overlay:** `rgba(0,0,0,0.45)` mobile backdrop; `rgba(0,0,0,0.60)` popup overlay
- No heavy 4px/8px blur shadows; depth is expressed through mild diffusion, not dramatic elevation

## 7. Do's and Don'ts

### Do
- Use `#00C896` for the single primary CTA per page — one dominant action, clearly coloured
- Apply `border-radius: 8px` on fill buttons and `16px` on cards for consistent roundedness
- Use Noto Sans KR for all Korean-language UI copy; never substitute with system fonts
- Apply gradient text (`#00C896` → `#9F7AEA`) on hero display headings only, not on body copy
- Keep section backgrounds as soft gradient washes (`#EDF9F6` → `#FAF5FF`) to delineate feature segments without hard borders
- Maintain `#424242` as the default text colour — not pure black — to reduce contrast harshness

### Don't
- Don't use more than two accent colours (e.g., green + purple) in the same section; pick the colour that matches the product segment
- Don't apply the 24px pill radius to small inline buttons; reserve pill radius for large section banners
- Don't use `font-weight: 400` for CTA labels — labels must be 500 or 700 to carry authority
- Don't place white text on `#EDF9F6` or `#FAFAFB` — contrast insufficient; use `#424242` or `#17A27E`
- Don't add heavy drop shadows to cards; diffuse shadows (opacity ≤ 0.08) maintain the clean, data-first aesthetic
- Don't use the AI gradient (`#9F7AEA` → `#F56565`) outside AI/learning-path feature contexts

## 8. Responsive Behavior

- Hero headlines scale: 56px (desktop, `.display-x-lg`) → 36px (mobile, `--fontSizes-700: 2.25rem`)
- Section display-lg: 42px desktop → 28px (`.display-md` equivalent) on mobile
- Flex layout: `flex-direction: column` on mobile, switches to `flex-direction: row` at 720px breakpoint
- Section banner (`consult`): `padding: 64px 106px` → padded tightly on mobile with reduced side padding
- Max-width containers (1248px) fill full viewport on small screens with `padding-left/right: 16px`
- Feature image widths: 50% desktop (`@media ≥ 720px`) → 100% mobile
- CTA buttons: full-width (`width: 100%`) on mobile; auto/fixed-width on desktop
- Navigation: collapses at `data-collapse="all"` (Webflow nav menu)

## 9. Agent Prompt Guide

When building Classting-style UI components:
- Set `--primary: #00C896` and `--text-dark: #424242` as the first two variables
- Primary CTA: `background: #00C896; border-radius: 8px; padding: 15px 16px; color: #fff; font: 500 14px/14px "Noto Sans KR", sans-serif`
- Cards: `background: #fff; border-radius: 16px; box-shadow: 0 0 12px rgba(0,0,0,0.05); padding: 24px 20px`
- Hero heading: `font-size: 56px; font-weight: 700; line-height: 68px; color: #424242; font-family: "Noto Sans KR", sans-serif`
- Section wash: `background: linear-gradient(120deg, #EDF9F6, #FAF5FF)` — school segment default
- Tag pill: `background: #EDF9F6; border-radius: 6px; padding: 8px; font-size: 14px; font-weight: 500`
- Avoid hardcoded pixel values for layout widths; use `max-width: 1248px; margin: 0 auto; padding: 0 16px`
- For KR locale always load Noto Sans KR 400+500+700; for TW locale use Noto Sans HK instead
- The purple accent (`#9F7AEA`) should appear only in AI-feature or self-directed-learning contexts

## 10. Voice & Tone

**Three adjectives:** Precise, Encouraging, Grounded

| Do | Don't |
|----|-------|
| Use data as proof: "91.5% accuracy" | Vague promises: "better learning" |
| Empathise with teacher workload | Lecture teachers on pedagogy |
| Speak to students as capable learners | Infantilise or over-simplify |
| Short, declarative sentences | Long qualifier chains |
| Active voice: "We accelerate…" | Passive hedging: "Learning may be…" |

**Voice samples (illustrative):**
- *Illustrative:* "진단부터 추천까지. 데이터가 길을 만듭니다." (From diagnosis to recommendation. Data makes the path.) — punchy, confident, under 12 words.
- *Illustrative:* "선생님이 매 학생을 개별적으로 파악하기 어려운 게 현실입니다. 클래스팅 AI가 그 공백을 채웁니다." (It's reality that teachers can't track every student individually. Classting AI fills that gap.) — empathetic acknowledgment followed by direct solution statement.
- *Illustrative:* "맞춤 교육, 지금 시작하세요." (Start personalized education now.) — imperative CTA, no decoration.

## 11. Brand Narrative

Classting was founded in 2012 by Cho Hyun-gu, who taught in elementary school for four years beginning in 2009. Confronted daily with the impossibility of personalizing instruction for 30+ students in a single classroom, he built a class communication tool that would evolve into Korea's most widely adopted educational platform — present in 99 % of Korean K–12 schools and 47 countries, with over 8.1 million users and 980,000 active classes.

The company's strategic center of gravity shifted from communication to intelligence. Under its corporate entity CT (Cognitive Technologies), Classting now operates an AI diagnostic engine that tracks individual knowledge states using the proprietary CLST model combined with ELO rating systems, achieving a 91.5 % correct-answer prediction rate. The mission statement — "We Accelerate Human Learning with Technology" — reflects this shift from tool to infrastructure: Classting is not a classroom app but an accelerant layered beneath every instructional decision.

The brand's visual and verbal identity encodes this duality. The product's primary green (`#00C896`) is optimistic and natural — growth, not algorithm — while the precision of the typography system and the measured use of data language in copy signal a platform that earns trust through evidence. Classting's voice does not celebrate technology for its own sake; it celebrates the moment when a student masters a concept they once struggled with.

## 12. Principles

1. **Diagnosis before prescription.** No recommendation is made without an accurate picture of the student's current knowledge state. *UI implication:* Show diagnostic results explicitly before any learning path is presented; never skip or collapse the diagnostic step in the onboarding flow.

2. **Evidence over enthusiasm.** Every product claim is anchored by a measurable outcome. *UI implication:* Key statistics (accuracy percentages, school counts, improvement rates) must appear at typographic hierarchy level — 700 weight, green accent — not buried in body copy.

3. **The teacher is the user, the student is the beneficiary.** Features are designed from the teacher's operational reality outward. *UI implication:* Primary navigation surfaces teacher actions (assign, monitor, report) above student actions; student-facing views are sub-paths, not primary routes.

4. **Upward equalization.** Technology must reduce — not amplify — the gap between well-resourced and under-resourced learners. *UI implication:* The free tier remains feature-rich; premium upsell is positioned as scale, never as access to basic diagnostic fairness.

5. **Continuous improvement as default.** The system learns with every interaction and surfaces new insights automatically. *UI implication:* Dashboards must display trend data (not just snapshots); empty states for trend charts should prompt continued use, never declare "no data."

## 13. Personas

*Illustrative Elementary School Teacher — "Min-jeong"*
Min-jeong, 34, manages a class of 28 third-graders in Busan. She has 6 years of experience but limited time: lesson planning, parent communication, and admin consume her evenings. She adopted Classting for the class communication features and stayed for the AI diagnostic reports that tell her — before Monday's class — which three students are likely to fall behind this week. She reads dashboards on her phone between pickup duty and needs information density that fits a 5-inch screen.

*Illustrative Middle School Student — "Junho"*
Junho, 14, is preparing for high school entrance examinations and is intensely aware of his ranking in class. He uses the FastTrack recommendation engine because it shows him exactly which problem types to drill — not the whole textbook. He responds to progress visualizations (journey maps, streak counts) and checks his rank on the leaderboard every morning. Gamification is not a gimmick for him; it is motivation made tangible.

*Illustrative School Administrator — "Principal Park"*
Principal Park, 52, oversees a middle school of 800 students in Seoul. She approved the Classting AI school licence based on a single concern: whether the platform's diagnostic data could be aggregated into school-level reporting for the district office. She does not use the platform daily; she receives a monthly PDF report and attends a quarterly review. Her design touchpoint is that report — its clarity and credibility determine whether she renews.

*Illustrative EdTech Procurement Officer — "Director Kim"*
Director Kim, 45, evaluates EdTech solutions for a regional office of education overseeing 120 schools. He benchmarks platforms on three axes: accuracy of AI claims, data privacy compliance (PIPA/K-GDPR), and integration with the national digital textbook infrastructure. His interaction with Classting begins at the pricing and case study pages, not the product UI. He needs social proof (school counts, accuracy rates) within the first screen.

## 14. States

- **Empty state (class feed):** Illustration of an empty classroom with a single call-to-action "첫 게시물을 작성해보세요" (Write your first post); green primary button; no placeholder data
- **Loading (diagnostic):** Skeleton shimmer — gray-300 (`hsl(0,0%,88%)`) animated `pulse` at 1.5s ease-in-out infinite; radius matches the actual card at 6px or 16px
- **Error — network (data fetch):** Inline error message in red-600 (`hsl(0,76%,57%)`), retry CTA in green; never red buttons for destructive-only actions
- **Error — input validation:** Border switches to red-600 on the input field; helper text appears below at 12px / 400 in red-600; border-color token: `--colors-border-color-input-active: hsl(165,100%,39%)` on focus (green), red on error
- **Success (assignment submitted):** Toast notification with `#00C896` left-border accent; white background; auto-dismiss after 3 s
- **Skeleton (dashboard cards):** Full card width at 16px radius, pulse shimmer in gray-300 (`hsl(0,0%,88%)`); paragraph lines shimmer at reduced height (12px bars with 8px gap)
- **Disabled (button):** `background-color: hsl(0,0%,74%)` (gray-400); `color: #fff`; `cursor: not-allowed`; no hover effect
- **Disabled (input):** `background-color: hsl(0,0%,96%)` (gray-100); `border-color: hsl(0,0%,74%)`; `cursor: not-allowed`

## 15. Motion & Easing

- **Micro-interactions (hover, toggle):** `transition: background-color 0.1s, color 0.1s` — very fast, immediate feedback
- **Panel / overlay transitions:** `transition: all 0.3s` — moderate, deliberate
- **Skeleton pulse animation:** `animation: pulse 1.5s ease-in-out infinite` — slow, non-distracting
- **Easing default:** `ease` (Webflow `data-easing="ease"`) for nav and panel animations
- **Nav animation duration:** 500ms (`data-duration="500"`) — slightly slow for educational context; ensures teacher users are not disoriented by fast transitions
- **Motion principles:** Motion is never decorative. Every animation either confirms state change (0.1s micro), reveals structure (0.3s panel), or signals system work (1.5s skeleton). Avoid transform-heavy keyframe animations on data-heavy views (dashboards) — cognitive load is already high.
- **Reduced-motion:** Skeleton pulse should respect `prefers-reduced-motion: reduce`; replace with static gray-300 fill
