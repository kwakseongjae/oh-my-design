---
id: riiid
name: "Riiid"
country: KR
category: education
homepage: "https://www.riiid.com"
primary_color: "#14161A"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=riiid.com&sz=256"
verified: "2026-06-03"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    ink: "#14161a"
    canvas: "#fcfcfc"
    card: "#fafafa"
    secondary: "#f1f2f4"
    muted: "#e8eaed"
    muted-fg: "#6c727f"
    border: "#e5e7eb"
    destructive: "#ef4343"
    interactive-blue: "#3b82f6"
  typography:
    family: { sans: "Pretendard", display: "Playfair Display" }
    title:    { size: 48, weight: 400, use: "Page titles (Playfair Display), tracking-wide" }
    section:  { size: 24, weight: 600, use: "Section headers (Playfair Display)" }
    body-lg:  { size: 18, weight: 400, lineHeight: 1.625, use: "Long-form prose (Pretendard)" }
    body:     { size: 16, weight: 400, lineHeight: 1.625, use: "Body text (Pretendard)" }
    nav:      { size: 14, weight: 500, use: "Nav links, labels (Pretendard)" }
    caption:  { size: 12, weight: 400, use: "Captions (Pretendard)" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 4, md: 6, lg: 8, full: 9999 }
  shadow:
    none: "none"
  components:
    button-primary: { type: button, bg: "#14161a", fg: "#fafafa", radius: 6, padding: "8px 16px", font: "14/500", use: "Default primary action, 40px height" }
    button-outline: { type: button, bg: "#fcfcfc", fg: "#14161a", radius: 6, padding: "8px 16px", font: "14/500", use: "Secondary action, 1px #e5e7eb border" }
    button-cta: { type: button, bg: "#14161a", fg: "#fafafa", radius: 6, padding: "12px 32px", font: "16/500", use: "Large CTA, 44px height" }
    card: { type: card, bg: "#fafafa", fg: "#14161a", radius: 8, padding: "32px", use: "Surface card, 1px #e5e7eb border" }
    nav-link: { type: tab, fg: "#6c727f", font: "14/500", use: "Navigation link", active: "#14161a text on hover" }
  components_harvested: true
---

# Riiid

AI-native education company from Seoul — formerly known as Riiid, reborn as Socra AI on September 1, 2025 — building personalized learning through products like Santa (AI TOEIC/TOEFL) guided by the philosophy "AI that grows humans."

## 1. Visual Theme & Atmosphere

Riiid's digital product language is scholarly and calm: a near-white canvas (`#FCFCFC`) anchored by a deep ink foreground (`#14161A`) creates a paper-like reading surface that frames learning rather than shouting it. The dual-typeface pairing — Playfair Display for headings, Pretendard for body — signals both academic credibility and modern Korean product sensibility. Accents stay cool-grey (`#F1F2F4`, `#E8EAED`) rather than saturated; colour is earned, never decorative. The overall effect is focused and unhurried: a tutor's quiet study room where content — not chrome — holds attention.

## 2. Color Palette & Roles

- **Ink / Primary:** `#14161A` — default button background, heading text, primary foreground; hsl(220 13% 9%)
- **Canvas / Background:** `#FCFCFC` — page background; hsl(0 0% 99%)
- **Card Surface:** `#FAFAFA` — card and popover fill; hsl(0 0% 98%)
- **Secondary Surface:** `#F1F2F4` — secondary button background, section dividers; hsl(220 10% 95%)
- **Muted / Subtle:** `#E8EAED` — muted backgrounds, chips; hsl(220 14% 92%)
- **Muted Foreground:** `#6C727F` — secondary labels, captions, placeholder text; hsl(220 8% 46%)
- **Border / Input:** `#E5E7EB` — all stroke borders and input outlines; hsl(220 13% 91%)
- **Destructive / Error:** `#EF4343` — error states, destructive actions; hsl(0 84% 60%)
- **Interactive Blue:** `#3B82F6` — focus rings, sidebar ring; hsl(217.2 91.2% 59.8%)

## 3. Typography Rules

- **Heading serif:** Playfair Display — weights 400 (light headings), 600 (section headings), 700 (bold callouts). Used for page titles (36–48px), section headers (24px), and editorial pull-quotes. Tracks wide at tracking-wide.
- **Body / UI:** Pretendard — weights 400 (body), 500 (nav, labels), 600 (card headers), 700 (strong emphasis). Used for all UI text, nav links (14px), body prose (16–18px), captions (12px).
- **Scale:** text-xs 12px / text-sm 14px / text-base 16px / text-lg 18px / text-xl 20px / text-2xl 24px / text-4xl 36px / text-5xl 48px
- **Leading:** leading-relaxed 1.625 (`--text-leading-relaxed`) for body; 1.8 (`--text-leading-loose`) for long-form prose
- **Korean locale note:** Pretendard is designed for Korean/Latin bilingual rendering; weights 300–800 are loaded.

## 4. Component Stylings

### Button

**Primary (Default)**
- Background: `#14161A`
- Text: `#FAFAFA`
- Radius: 6px
- Height: 40px
- Padding: 8px 16px
- Font: 14px / 500

**Outline**
- Background: `#FCFCFC`
- Text: `#14161A`
- Border: 1px solid `#E5E7EB`
- Radius: 6px
- Height: 40px
- Padding: 8px 16px
- Font: 14px / 500

**Large (CTA)**
- Background: `#14161A`
- Text: `#FAFAFA`
- Radius: 6px
- Height: 44px
- Padding: 12px 32px
- Font: 16px / 500

### Card / Content Block

**Surface Card**
- Background: `#FAFAFA`
- Border: 1px solid `#E5E7EB`
- Radius: 8px
- Padding: 32px

**Accent Panel**
- Background: `#F0F2F4`
- Radius: 8px
- Padding: 32px

**Primary-Tinted Panel**
- Background: `rgba(19, 21, 25, 0.05)`
- Radius: 8px
- Padding: 48px

### Navigation Link

**Default**
- Text: `#6C727F`
- Font: 14px / 500

**Hover**
- Text: `#14161A`
- Font: 14px / 500

---
**Verified:** 2026-06-03
**Tier 1 sources:** https://www.riiid.com (→ redirects to https://corp.socra.ai); https://corp.socra.ai/assets/index-DB1490PF.css (CSS bundle, :root custom properties); https://corp.socra.ai/assets/index-DpZvyCLE.js (JS bundle, component definitions); https://corp.socra.ai/our-story (brand narrative)
**Tier 2 sources:** getdesign.md/riiid — NOT LISTED ("No designs found for 'riiid'"). refero ?q=Riiid — no result found.
**Conflicts unresolved:** none

## 5. Layout Principles

- Single-column centered reading lane (max-w-prose-wide ≈ 65ch) for long-form pages; constrains text to comfortable reading width
- Grid breaks to 4-column for nav links on desktop, collapses to 1-column on mobile
- Generous top padding on page entry (pt-32 / 128px) creates breathing room before content
- Sections divided by subtle `--section-divide` lines and 64px vertical gaps; no heavy decorative dividers
- Content blocks use 32px internal padding; large callout panels use 48px padding for emphasis
- Max content width: max-w-4xl (896px) for wide layouts, max-w-2xl (672px) for focused reading

## 6. Depth & Elevation

- No drop shadows on primary surfaces — elevation is implied by background color steps (#FCFCFC → #FAFAFA → #F1F2F4)
- Border (`#E5E7EB`) used for separation rather than shadow
- Focus ring: 2px ring at `#3B82F6` with 2px offset — the only vibrant colour pop in the system
- Disabled elements reduce opacity to 50%
- Hover states use bg-accent (#F0F2F4) shift — subtle 0-shadow elevation language

## 7. Do's and Don'ts

### Do
- Use Playfair Display for headings to maintain the scholarly, thoughtful tone
- Pair Ink (`#14161A`) buttons with generous whitespace — the colour earns its authority through contrast, not saturation
- Keep body text at 16–18px with line-height 1.625 for extended reading sessions
- Use left-border accent lines (4px `#14161A`) for pull-quotes and editorial emphasis
- Maintain the cool-grey palette — every surface should feel like fine paper
- Use the 4-column responsive nav grid and collapse gracefully to single column on mobile

### Don't
- Introduce warm or saturated brand colours — the palette is intentionally cool and neutral
- Use heavy drop shadows; the system relies on tonal layering for depth
- Mix Pretendard and Playfair in the same weight role — Playfair is strictly for headings
- Set body text below 14px or line-height below 1.5 — legibility is a core product value
- Place primary buttons side by side — one clear CTA per viewport section
- Use border-radius above 8px (the base token) for primary UI components

## 8. Responsive Behavior

- Mobile (< 640px): single-column layout, px-4 gutters, hero font scales from text-4xl to text-xl, navigation collapses to 1×4 vertical stack
- Tablet (640px–1024px): px-6 gutters, hero at text-2xl, navigation in 2-column grid
- Desktop (> 1024px): max-w-4xl centered, px-8 gutters, hero at text-3xl+, full 4-column nav
- Font sizes use responsive prefixes (sm:, md:) — no JavaScript breakpoint logic in critical path
- Body max-width locked at max-w-prose-wide for reading pages regardless of viewport

## 9. Agent Prompt Guide

When generating Riiid / Socra AI UI:

- Background `#FCFCFC`, all body text `#14161A`, secondary text `#6C727F`
- Heading font: Playfair Display (light 400 for page titles, semibold 600 for sections)
- Body/UI font: Pretendard (regular 400, medium 500 for interactive)
- Primary button: `#14161A` fill, `#FAFAFA` text, 6px radius, 40px height
- Border: 1px `#E5E7EB` on inputs and cards; no drop shadows
- Spacing: 8px base unit, sections at 64px vertical gap
- Do NOT add warm tones, orange, or brand gradients — the system is intentionally monochromatic
- Focus ring: 2px `#3B82F6` — only blue accent in the palette

## 10. Voice & Tone

**Adjectives:** Scholarly, clear, humanist

| Do | Don't |
|---|---|
| Use measured, complete sentences that respect the reader's intelligence | Use hype language ("revolutionary", "game-changing") |
| Ask questions that invite reflection | Make declarative promises about outcomes |
| Acknowledge complexity in learning | Oversimplify ("just 5 minutes a day!") |
| Speak about growth as a journey, not a destination | Use urgency tactics or countdown timers |
| Reference evidence and method | Use superlatives without substance |

**Voice samples (illustrative):**
- *Illustrative:* "AI should be a tool for realizing human potential, not replacing it."
- *Illustrative:* "Know Thyself. Grow Thyself." — core tagline, Socratic in rhythm, personal in address
- *Illustrative:* "The future belongs to those who learn more skills and develop faster than their challenges."
- *Illustrative:* "We are not just imagining the future of education — we are building it."
- *Illustrative:* "Every learner receives personalized, real-time feedback and an environment designed for immersion, curiosity, and growth."

## 11. Brand Narrative

Founded in Seoul in 2014, Riiid built its name on a single conviction: that artificial intelligence could democratize access to world-class tutoring. Its first product, Santa, applied deep-learning algorithms to TOEIC exam preparation and rose to number one in education app sales across Korea and Japan, reaching over four million users. The company grew through partnerships with ETS, SoftBank Vision Fund, and global media companies including NBC Universal, Warner Media, and BBC, while expanding into the US, Japan, and Brazil.

On September 1, 2025, Riiid rebranded as Socra AI — a name drawn from Socrates and his method of guided questioning. The rebrand signalled a philosophical maturation: from AI as answer-delivery machine to AI as learning companion. The mission crystallised around a phrase: "AI that grows humans." Products were unified under this philosophy — Santa for standardised test prep, Real Class for ESL with licensed media, Real Academy for K–12 writing and speaking, and Vest Way for financial literacy.

The design language shifted accordingly: away from the bold product colours common in EdTech and toward a quiet, academic aesthetic. Pretendard and Playfair Display were chosen to serve both Korean and global audiences; a near-white canvas and ink-dark primary signal intellectual seriousness. The company now describes its mission as "opening the Age of Personal Tutors" — a world where every learner has access to a tutor as knowledgeable and patient as the best teacher they never had.

## 12. Principles

1. **AI as amplifier, not replacement.** Every product decision asks: does this strengthen or outsource human thinking? *UI implication:* Features surface reasoning scaffolds and reflection prompts rather than bare answers; feedback explains, not just scores.

2. **Developmentally appropriate.** Learning interfaces adapt to the user's current level. *UI implication:* Complexity is revealed progressively; beginners see fewer options; advanced users see richer controls.

3. **Socratic dialogue over rote delivery.** Questions drive understanding more than explanations. *UI implication:* Copy favours interrogative framing; empty states and onboarding use questions to orient users.

4. **Honest simplicity.** The brand rejects visual noise because learning requires sustained attention. *UI implication:* One primary CTA per screen; neutral palette; no distracting animation; generous whitespace.

5. **Global reach, Korean craft.** Riiid originates in Seoul and serves learners across Asia and beyond. *UI implication:* Pretendard supports flawless Korean/Latin bilingual rendering; layouts accommodate CJK character widths.

## 13. Personas

*Illustrative persona:* **Jiyeon, 24, TOEIC candidate** — A Korean university student preparing for her first job application. She studies in 20-minute subway sessions, prioritises score prediction accuracy, and trusts the app's AI score estimate more than she trusts her own self-assessment. She is motivated but time-poor; she needs reassurance that practice time is not wasted.

*Illustrative persona:* **Marcus, 31, ESL learner in Japan** — An American expatriate working in Tokyo who wants to learn Korean and maintain English fluency. He subscribes to Real Class to watch licensed media with AI conversation practice. He values authentic content over textbook exercises and skips lessons that feel condescending.

*Illustrative persona:* **Principal Kim, 48, K–12 administrator** — A middle-school principal evaluating Real Academy for classroom adoption. He needs evidence of measurable writing improvement and an admin dashboard. Trust is built through case studies and rubric-aligned scoring, not feature lists.

*Illustrative persona:* **Hana, 17, high-achieving student** — A Korean high-school student using Santa for TOEFL while simultaneously studying for university entrance exams. She compares her AI-predicted score weekly against peers. She expects a minimal, distraction-free UI and finds gamification condescending.

## 14. States

- **Empty (no study history):** Soft card with Playfair headline "Where would you like to begin?" and a single primary CTA; background `#F8F9FA`; no placeholder illustrations
- **Loading (score calculation):** Skeleton bars at 60% and 40% width on card surface `#FAFAFA`; animated opacity pulse from 0.4 to 0.7; no spinner
- **Error — network:** Inline alert with `#EF4343` left border (4px), muted-foreground message, and a single "Try again" outline button
- **Error — input validation:** Input border changes to `#EF4343`; 12px red caption appears below field; label remains in `#14161A`
- **Success:** Brief inline confirmation in `#14161A` text; no toast unless action was irreversible; icon ✓ in foreground colour
- **Skeleton:** Full-width bars at varying widths (80%, 60%, 40%); card background `#FAFAFA`; 1.5s ease-in-out pulse; no border shimmer
- **Disabled:** Pointer-events none; opacity 50%; both background and text muted together; no tooltip required unless action is permanently unavailable

## 15. Motion & Easing

- **Duration scale:** instant 0ms / fast 150ms / default 200ms / medium 300ms / slow 500ms
- **Easing:** `transition-colors` with CSS default ease; `fade-in-0` + `zoom-in-95` for enter (200ms); `fade-out-0` + `zoom-out-95` for exit (150ms)
- **Slide:** `slide-in-from-top-2` / `slide-in-from-bottom-2` for tooltips and popovers — 8px travel
- **Page transitions:** None (SPA with React Router; instant client-side navigation)
- **Hover:** Color-only transitions at 200ms `duration-200`; no transform on hover
- **Rules:** Do not animate layout shifts; respect `prefers-reduced-motion`; skeleton pulses are the only looping animations
