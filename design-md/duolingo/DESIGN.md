---
id: duolingo
name: Duolingo
country: US
category: education
homepage: "https://www.duolingo.com"
primary_color: "#58CC02"
logo:
  type: simpleicons
  slug: "duolingo"
verified: "2026-06-06"
added: "2026-06-06"
omd: "0.1"
tokens:
  source: reconciled
  extracted: "2026-06-08"
  components_harvested: true
  note: "deterministic pick (#1a73e8) was a Google sign-in embed false-positive; canonical = Feather Green"
  colors:
    primary: "#58cc02"
    primary-lip: "#58a700"
    mask: "#89e219"
    accent: "#1cb0f6"
    accent-lip: "#1899d6"
    canvas: "#ffffff"
    foreground: "#4b4b4b"
    on-primary: "#ffffff"
    error: "#ff4b4b"
    warning: "#ffc800"
    fox: "#ff9600"
    beetle: "#ce82ff"
  typography:
    family: { sans: "din-round", display: "Feather Bold" }
    display-hero: { size: 40, weight: 700, lineHeight: 1.2, tracking: -0.5, use: "Landing hero, big celebrations" }
    title:        { size: 24, weight: 700, lineHeight: 1.25, use: "Section titles, modal headers" }
    body:         { size: 17, weight: 400, lineHeight: 1.5, use: "Standard reading text" }
    button:       { size: 15, weight: 700, lineHeight: 1.2, use: "CTA button labels (uppercase)" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48 }
  rounded: { sm: 8, md: 12, lg: 16, full: 9999 }
  shadow:
    button-3d: "0 4px 0 0 #58a700"
    card: "0 2px 0 0 rgba(0,0,0,0.1)"
  components:
    button-primary: { type: button, bg: "#58cc02", fg: "#ffffff", radius: "12px", padding: "14px 20px", height: "50px", font: "15px / 700", shadow: "0 4px 0 #58a700", active: "translateY(4px), lip collapses", disabled: "bg #e5e5e5, fg #afafaf, no lip", use: "Single primary action — CONTINUE, START, CHECK ANSWER (uppercase)" }
    button-accent: { type: button, bg: "#1cb0f6", fg: "#ffffff", radius: "12px", padding: "14px 20px", font: "15px / 700", shadow: "0 4px 0 #1899d6", use: "Alternative positive action, Super upsell, info CTA (uppercase)" }
    card: { type: card, bg: "#ffffff", border: "2px solid #e5e5e5", radius: "16px", padding: "16px", shadow: "none", use: "Course units, skill tiles, list rows" }
---

# Design System Inspiration of Duolingo

## 1. Visual Theme & Atmosphere

Duolingo is the world's most-downloaded education app, and its interface is engineered to feel less like studying and more like a game you can't put down. The brand's whole thesis is that learning should be *fun first* — and the visual language enforces that on every pixel. The signature **Feather Green** (`#58CC02`) is an almost impossibly bright, optimistic lime that reads as energy, growth, and "go." It is the color of the owl, the color of the streak, the color of every primary action. Nothing about it is muted or institutional; it is deliberately the opposite of the dusty greens of a classroom chalkboard.

What defines Duolingo visually is **chunky, tactile playfulness**. Buttons are not flat rectangles — they have a solid 3D "lip," a hard offset shadow of the button's own darker shade, so pressing them feels like pressing a physical key. Cards carry **bold 2px outlines** rather than soft elevation. Corners are generously rounded (12–16px). Everything is oversized and high-contrast: big rounded type, big touch targets, big celebratory states. The aesthetic borrows from children's books and arcade games but executes with the rigor of a mature product system — "a children's book that grew up."

The type system pairs two custom voices. **Feather Bold** — a bespoke display typeface whose curves echo the shape of Duo the owl — carries headings, buttons, and any moment that needs personality. **DIN Next Rounded** handles longer-form and UI body text where Feather would be too loud. Together they keep the brand friendly without ever feeling childish.

**Key Characteristics:**
- Feather Green (`#58CC02`) as the universal primary — CTAs, owl, streaks, correctness
- Chunky 3D buttons with a hard offset bottom-shadow "lip" that depresses on press
- Bold 2px card/button outlines instead of soft drop shadows
- Generous corner radii (12px buttons, 16px cards) and oversized touch targets
- Feather Bold (display/buttons) + DIN Next Rounded (UI/body) type pairing
- A vivid gamification palette — Macaw blue, Cardinal red, Bee yellow, Fox orange
- White-dominant surfaces with bold color reserved for interaction and feedback
- Generous whitespace, single-focus screens, one clear action at a time

## 2. Color Palette & Roles

Duolingo names its colors after animals and birds — a playful taxonomy that mirrors the owl mascot world. The values below are the widely-documented brand tokens.

### Primary
- **Feather Green** (`#58CC02`): The brand workhorse. Primary CTAs, correct answers, the owl, streak flames, progress. The single most important color.
- **Feather Green Dark / Tree** (`#58A700`): The darker shade used for the 3D button "lip" shadow and pressed states of green buttons.
- **Mask Green** (`#89E219`): Lighter green accent, success highlights, lesson-complete glows.

### Accent (Gamification)
- **Macaw** (`#1CB0F6`): Bright blue. Secondary actions, links, info states, "Super/Plus" accents, streak-freeze.
- **Whale** (`#1899D6`): Darker blue, the 3D lip for Macaw buttons and pressed blue states.
- **Cardinal** (`#FF4B4B`): Red. Incorrect answers, errors, destructive actions, hearts/lives.
- **Bee** (`#FFC800`): Yellow/gold. XP, achievements, crowns, streak rewards, premium glints.
- **Fox** (`#FF9600`): Orange. Highlights, secondary rewards, warnings, leaderboard accents.
- **Beetle** (`#CE82FF`): Purple. Special events, Super Duolingo branding, decorative accents.
- **Cardinal Dark** (`#EA2B2B`): The 3D lip for red buttons and pressed destructive states.

### Neutral Scale
- **Snow / White** (`#FFFFFF`): Primary surface. Page and card backgrounds.
- **Polar** (`#F7F7F7`): Lightest gray. Secondary surface, disabled/empty fills, alt rows.
- **Swan** (`#E5E5E5`): Default border, dividers, disabled button fill, progress-bar track.
- **Hare** (`#AFAFAF`): Placeholder text, disabled text, inactive icons.
- **Wolf** (`#777777`): Secondary/body text, captions, metadata.
- **Eel** (`#4B4B4B`): Primary text color — strong near-black-gray for headings and body. Duolingo's default ink, *not* pure black.

### Semantic
- **Correct / Success**: Feather Green (`#58CC02`) fill, Mask Green glow.
- **Incorrect / Error**: Cardinal (`#FF4B4B`).
- **Reward / XP**: Bee (`#FFC800`) and Fox (`#FF9600`).
- **Info / Neutral action**: Macaw (`#1CB0F6`).

### Surface & Text Summary
- **Page background**: `#FFFFFF`
- **Subtle surface**: `#F7F7F7` (Polar)
- **Border default**: `#E5E5E5` (Swan)
- **Heading/body ink**: `#4B4B4B` (Eel)
- **Secondary text**: `#777777` (Wolf)
- **Placeholder/disabled**: `#AFAFAF` (Hare)

## 3. Typography Rules

### Font Family
- **Display / Buttons / Headings**: `"Feather Bold", "din-round", "DIN Next Rounded", "Nunito", -apple-system, BlinkMacSystemFont, sans-serif` — bespoke Duolingo typeface, rounded and friendly, used everywhere personality matters.
- **UI / Body**: `"din-round", "DIN Next Rounded", "Nunito", -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif` — cleaner, lighter, for longer text and dense UI.
- **Fallback web pairing**: `Nunito` (700/800) is the closest open-source stand-in for Feather Bold when the custom font is unavailable.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Feather Bold | 40px | 700 | 48px (1.2) | -0.5px | Landing hero, big celebrations |
| Display | Feather Bold | 32px | 700 | 40px (1.25) | -0.25px | Section headers, lesson-complete |
| Heading Large | Feather Bold | 24px | 700 | 32px (1.33) | normal | Screen titles, modal headers |
| Heading | Feather Bold | 20px | 700 | 28px (1.4) | normal | Card titles, sub-sections |
| Subtitle | Feather Bold | 17px | 700 | 24px (1.4) | normal | List headers, prompts |
| Button Label | Feather Bold | 15px | 700 | 20px | 0.8px (uppercase) | CTAs — often UPPERCASE |
| Body Large | DIN Next Rounded | 17px | 400 | 26px (1.5) | normal | Lesson sentences, explanations |
| Body | DIN Next Rounded | 15px | 400 | 23px (1.5) | normal | Standard reading text |
| Caption | DIN Next Rounded | 13px | 400 | 18px (1.4) | normal | Metadata, hints, fine print |
| Stat / Number | Feather Bold | 24px+ | 700 | tight | normal | XP, streak count, % — bold and big |

### Principles
- **Feather Bold for personality, DIN for reading**: Headings, buttons, and stats use the chunky display face; multi-sentence content uses the lighter rounded sans for comfort.
- **Buttons shout**: Primary button labels are frequently UPPERCASE Feather Bold with slight letter-spacing (`CONTINUE`, `START`, `CHECK`).
- **Bold over light**: There is no thin-weight body text. The system lives at 400 (body) and 700 (everything with emphasis). Restraint comes from size, not weight variety.
- **Numbers are celebrated**: XP, streaks, and percentages render in large Feather Bold — gamification stats are display typography, not fine print.
- **Eel, not black**: Default text is `#4B4B4B`, never `#000000` — pure black feels harsh against the playful palette.

## 4. Component Stylings

### Buttons

The Duolingo button is the brand's signature component: a chunky, tactile control with a hard **offset bottom border** (the "lip") in a darker shade of its own color, so it looks and feels like a physical key. On press, the button translates down and the lip collapses.

**Primary (Green)**
- Background: `#58CC02`
- Text: `#FFFFFF`
- Border: none
- Lip / bottom shadow: `0 4px 0 #58A700` (solid, no blur)
- Radius: 12px
- Padding: 14px 20px (min-height 50px)
- Font: 15px / 700 / Feather Bold, UPPERCASE, 0.8px tracking
- Pressed: `translateY(4px)`, lip collapses to `0 0`
- Disabled: bg `#E5E5E5`, text `#AFAFAF`, no lip
- Use: The single primary action — `CONTINUE`, `START`, `CHECK ANSWER`

**Secondary (Blue / Macaw)**
- Background: `#1CB0F6`
- Text: `#FFFFFF`
- Lip: `0 4px 0 #1899D6`
- Radius: 12px
- Padding: 14px 20px
- Font: 15px / 700 / Feather Bold, UPPERCASE
- Use: Alternative positive action, "Super" upsell, info CTA

**Destructive (Red / Cardinal)**
- Background: `#FF4B4B`
- Text: `#FFFFFF`
- Lip: `0 4px 0 #EA2B2B`
- Radius: 12px
- Padding: 14px 20px
- Font: 15px / 700 / Feather Bold, UPPERCASE
- Use: "Incorrect" continue bar, give-up / end-session, delete

**Outline / Ghost (Neutral)**
- Background: `#FFFFFF`
- Text: `#1CB0F6` (or `#4B4B4B` for neutral)
- Border: 2px solid `#E5E5E5`
- Lip: `0 2px 0 #E5E5E5`
- Radius: 12px
- Padding: 14px 20px
- Font: 15px / 700 / Feather Bold, UPPERCASE
- Use: Secondary choice paired with a filled primary (`SKIP`, `MAYBE LATER`)

**Disabled**
- Background: `#E5E5E5`
- Text: `#AFAFAF`
- Border: none, no lip
- Radius: 12px
- Use: Inactive `CHECK` before an answer is selected

Display modes — buttons are typically full-width (`block`) on mobile lesson screens, auto-width inline on dense settings rows. The lip is the brand-defining detail: it is *always* a solid darker shade of the button's own color, never a blurred drop shadow.

### Inputs

Duolingo uses inputs sparingly (it is a tap-first product), but text fields follow the same rounded, bold-border language.

**Default**
- Background: `#FFFFFF`
- Text: `#4B4B4B`
- Border: 2px solid `#E5E5E5`
- Radius: 12px
- Padding: 12px 16px
- Font: 15px / 400 / DIN Next Rounded
- Placeholder: `#AFAFAF`
- Focus: border `#1CB0F6` (2px)
- Use: Email/username/password on sign-up

**Error**
- Background: `#FFF0F0`
- Text: `#4B4B4B`
- Border: 2px solid `#FF4B4B`
- Radius: 12px
- Padding: 12px 16px
- Helper text below: `#FF4B4B` 13px
- Use: Invalid email, wrong password

**Answer Tile (Word Bank)**
- Background: `#FFFFFF`
- Text: `#4B4B4B`
- Border: 2px solid `#E5E5E5`
- Lip: `0 2px 0 #E5E5E5`
- Radius: 12px
- Padding: 10px 16px
- Font: 17px / 400 / DIN Next Rounded
- Selected: border `#1CB0F6`, bg `#DDF4FF`
- Use: Tappable word chips in translation exercises

### Cards

**Lesson / Path Card**
- Background: `#FFFFFF`
- Border: 2px solid `#E5E5E5`
- Radius: 16px
- Padding: 16px
- Shadow: none (the 2px outline is the elevation)
- Use: Course units, skill tiles, list rows

**Highlight Card**
- Background: `#DDF4FF` (light Macaw tint) or `#F7F7F7`
- Border: 2px solid `#1CB0F6` (when active/selected)
- Radius: 16px
- Padding: 16px
- Use: Selected plan, active streak card, tip callouts

**Stat Card**
- Background: `#FFFFFF`
- Border: 2px solid `#E5E5E5`
- Radius: 16px
- Padding: 20px
- Icon: large colored emoji/illustration (streak flame, XP bolt)
- Number: Feather Bold 24px `#4B4B4B`; label Wolf `#777777` 13px
- Use: Profile stats — streak, total XP, league

### Badges & Pills

**Streak / XP Pill**
- Background: `#FFFFFF` with 2px `#E5E5E5` border, or solid color
- Text: `#FF9600` (streak) / `#FFC800` (XP) with matching icon
- Radius: 9999px (pill)
- Padding: 4px 10px
- Font: 13px / 700 / Feather Bold
- Use: Top-bar counters

**New / Status Badge**
- Background: `#FF4B4B` (notification) / `#58CC02` (complete)
- Text: `#FFFFFF`
- Radius: 9999px
- Padding: 2px 8px
- Font: 12px / 700 / Feather Bold, UPPERCASE
- Use: "NEW", unread dots, completion ticks

### Progress Bar

- Track: `#E5E5E5` (Swan), radius 9999px, height 16px
- Fill: `#58CC02` (Feather Green), radius 9999px
- Inner highlight: thin lighter-green top stripe for a glossy, gamey sheen
- Use: Lesson progress at the top of every exercise screen

### Tabs / Bottom Nav

**Bottom Tab (Active)**
- Background: `#FFFFFF`, top border 2px `#E5E5E5`
- Active icon/label: `#58CC02`
- Inactive icon/label: `#AFAFAF`
- Font: 11px / 700 / Feather Bold
- Use: Learn / Leagues / Quests / Shop / Profile nav

### Toasts / Feedback Bars

**Correct**
- Background: `#D7FFB8` (light green) / footer area
- Text: `#58A700`
- Border-top: 2px `#A5ED6E`
- CTA button: green primary `CONTINUE`
- Use: Bottom feedback bar after a right answer

**Incorrect**
- Background: `#FFDFE0` (light red)
- Text: `#EA2B2B`
- Border-top: 2px `#FFB3B3`
- CTA button: red `CONTINUE`
- Use: Bottom feedback bar after a wrong answer

### Dialogs / Modals

**Centered Modal**
- Background: `#FFFFFF`
- Border: none (or 2px `#E5E5E5`)
- Radius: 16px
- Padding: 24px
- Shadow: `0 8px 0 rgba(0,0,0,0.05)` soft, plus occasional confetti/owl illustration
- Title: Feather Bold 20px `#4B4B4B`
- Use: Streak celebration, plan upsell, exit confirmation

### Toggles

**Default**
- Track: `#58CC02` (on) / `#E5E5E5` (off)
- Thumb: `#FFFFFF` circle, soft inner shadow
- Radius: 9999px
- Use: Settings (sound effects, notifications)

---

**Verified:** 2026-06-06
**Tier 1 sources:** design.duolingo.com (official brand identity/color portal), www.duolingo.com (live product) · https://www.duolingo.com (live production site)
**Tier 2 sources:** widely-documented Duolingo brand tokens (Feather Green `#58CC02`, Macaw `#1CB0F6`, Cardinal `#FF4B4B`, Bee `#FFC800`, Fox `#FF9600`, Eel `#4B4B4B`, Wolf `#777777`, Swan `#E5E5E5`, Polar `#F7F7F7`) corroborated across multiple brand-color references.
**Note:** The animal color names and the 3D "lip" button mechanic are signature, well-documented Duolingo system traits. Exact internal token values may vary slightly by platform/release.

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Common values: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px
- Screen horizontal padding: 16px (mobile), generous 24px+ on web
- Lesson screens are deliberately uncluttered — one prompt, the answer area, one CTA

### Grid & Container
- Mobile-first; primary design baseline ~375–414px
- Single-column, full-width content with one focal action per screen
- Web learning view centers a constrained column (~600px) with side rails for streak/league widgets
- Marketing/landing uses a wider centered container (max ~1080px) with big illustration blocks

### Whitespace Philosophy
- **One thing at a time**: Each lesson screen presents a single exercise. No competing actions, no scrolling clutter — the next CTA is always the obvious move.
- **Room to breathe, room to celebrate**: Generous padding around the prompt and answer keeps focus; celebration moments (lesson complete, streak) get full-screen treatment.
- **Bold over busy**: Few elements, each large and high-contrast, rather than many small ones.

### Border Radius Scale
- Small (8px): Inline chips, small tags
- Standard (12px): Buttons, inputs, answer tiles
- Comfortable (16px): Cards, modals, larger surfaces
- Pill (9999px): Progress bars, streak pills, toggles, badges

## 6. Depth & Elevation

Duolingo's depth model is **physical, not atmospheric**. Instead of soft blurred shadows, the system uses hard, solid offsets — a darker shade of the element's own color sitting directly beneath it. This is what makes buttons feel like real, pressable keys.

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No border, no shadow | Inline text, page background |
| Outlined (Level 1) | 2px solid `#E5E5E5` border | Cards, tiles, list rows |
| Lip (Level 2) | `0 4px 0 <darker-shade>` solid offset | Buttons, answer tiles — the signature 3D effect |
| Raised (Level 3) | 2px outline + subtle `0 4px 0 rgba(0,0,0,0.05)` | Floating cards, selected plans |
| Modal (Level 4) | `0 8px 0 rgba(0,0,0,0.05)` + scrim `rgba(0,0,0,0.4)` | Dialogs, celebration sheets |

**Shadow Philosophy**: The 3D "lip" is the heart of the brand's tactility. It is *always* a solid color (no blur, no spread) and *always* a darker tint of the component it sits under — green buttons get `#58A700`, blue get `#1899D6`, red get `#EA2B2B`. On press the element shifts down by the lip height and the lip disappears, mimicking a physical key travel. Atmospheric blurred shadows are rare and kept very subtle when used.

### Blur Effects
- Modal scrims dim the background with `rgba(0,0,0,0.4)` — flat dim, minimal/no blur
- Sticky headers/footers (progress bar, feedback bar) sit on solid surfaces, no glass

## 7. Do's and Don'ts

### Do
- Use Feather Green (`#58CC02`) for the single primary action on every screen
- Give buttons the solid 3D lip (`0 4px 0` in a darker shade of the same color)
- Use 2px outlines on cards instead of soft drop shadows
- Set body/heading text in Eel (`#4B4B4B`), never pure black
- Make CTAs Feather Bold, often UPPERCASE with slight letter-spacing
- Reserve the gamification palette (Bee, Fox, Bee yellow, Macaw) for rewards/feedback
- Use generous radii — 12px buttons, 16px cards, pill progress bars
- Keep one clear action per screen; let it breathe

### Don't
- Don't use blurred/soft drop shadows where the 3D lip belongs — kills the tactile feel
- Don't use pure black (`#000000`) for text — Eel `#4B4B4B` is the brand ink
- Don't crowd a lesson screen with multiple primary actions
- Don't use thin font weights — the system lives at 400 and 700 only
- Don't make the lip a blurred or neutral shadow — it must be a darker shade of the button's own hue
- Don't use muted/desaturated greens — Feather Green is intentionally vivid
- Don't shrink touch targets; buttons are tall (≥50px) and finger-friendly
- Don't mix radii randomly — follow the 8/12/16/pill scale

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile (Primary) | <768px | Full-screen single-column lessons, full-width CTAs, bottom nav |
| Tablet | 768–1024px | Centered learning column, side widgets appear |
| Desktop | >1024px | Constrained center column (~600px) + left nav rail + right streak/league rail |

### Touch Targets
- Buttons: ≥50px tall, often full-width on mobile
- Answer tiles: ≥44px tall with comfortable spacing for rapid tapping
- Bottom nav items: ≥48px tap area

### Collapsing Strategy
- Desktop side rails (streak, leaderboard, "Super" promo) collapse off-screen on mobile, surfacing in the top bar and dedicated tabs instead
- Sticky top progress bar and sticky bottom feedback/CTA bar persist across all sizes
- Marketing hero stacks illustration above copy on mobile, side-by-side on desktop

### Image Behavior
- Duo the owl and character illustrations are vector/Lottie — scale crisply at any size
- Flag/course icons render at consistent sizes (24–40px) within lists
- Celebration animations (confetti, owl reactions) play full-bleed on completion screens

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Feather Green (`#58CC02`), lip `#58A700`
- Secondary CTA: Macaw blue (`#1CB0F6`), lip `#1899D6`
- Destructive: Cardinal red (`#FF4B4B`), lip `#EA2B2B`
- Reward/XP: Bee yellow (`#FFC800`), Fox orange (`#FF9600`)
- Special/premium: Beetle purple (`#CE82FF`)
- Background: White (`#FFFFFF`), subtle surface Polar (`#F7F7F7`)
- Heading/body text: Eel (`#4B4B4B`)
- Secondary text: Wolf (`#777777`)
- Placeholder/disabled text: Hare (`#AFAFAF`)
- Border: Swan (`#E5E5E5`)

### Example Component Prompts
- "Create a Duolingo primary button: `#58CC02` bg, white UPPERCASE Feather Bold 15px text with 0.8px tracking, 12px radius, 14px/20px padding, min-height 50px, solid 3D lip `0 4px 0 #58A700`. On press translateY(4px) and collapse the lip."
- "Build a lesson progress bar: 16px tall, 9999px radius, track `#E5E5E5`, fill `#58CC02` with a thin lighter-green top sheen, animating width."
- "Design an answer tile: white bg, 2px `#E5E5E5` border, 12px radius, `0 2px 0 #E5E5E5` lip, 17px DIN Next Rounded text `#4B4B4B`. Selected: border `#1CB0F6`, bg `#DDF4FF`."
- "Create a correct-answer feedback bar: bottom-fixed, bg `#D7FFB8`, text `#58A700`, top border 2px `#A5ED6E`, with a green CONTINUE button on the right."
- "Build a streak stat card: white bg, 2px `#E5E5E5` border, 16px radius, 20px padding. Flame emoji, Feather Bold 24px `#4B4B4B` count, Wolf `#777777` 13px label."
- "Design a Duolingo bottom nav: white bg, top border 2px `#E5E5E5`, 5 tabs. Active `#58CC02`, inactive `#AFAFAF`, 11px Feather Bold labels."

### Iteration Guide
1. Every primary action is Feather Green (`#58CC02`) with the 3D lip — this is non-negotiable brand DNA
2. Buttons and headings use Feather Bold (fallback Nunito 700/800); body uses DIN Next Rounded
3. Text is Eel `#4B4B4B`, never pure black; secondary text is Wolf `#777777`
4. Cards use 2px `#E5E5E5` outlines, not blurred shadows
5. Radii: 12px buttons/inputs, 16px cards/modals, pill for bars/badges
6. The lip shadow is always a solid darker shade of the element's own color
7. One clear primary action per screen; keep it spacious and celebratory

---

## 10. Voice & Tone

Duolingo speaks like an enthusiastic, slightly mischievous friend who genuinely wants you to win. The voice is warm, encouraging, playful, and occasionally cheeky — never stern, never academic. English is the primary voice, written at a friendly, casual register. Praise is generous and specific; failure is reframed as a normal step, never a scolding. The brand famously leans into humor (and the "passive-aggressive owl" meme) in notifications, but inside the learning flow the tone stays kind and motivating.

| Context | Tone |
|---|---|
| CTAs | Short, imperative, energetic — `CONTINUE`, `START`, `GET STARTED`, `CHECK` |
| Correct feedback | Celebratory, brief — `Nice!`, `You're on fire!`, `Correct!` |
| Incorrect feedback | Gentle, no blame — `Correct solution:` shown plainly; never `Wrong!` |
| Streak / reward | Excited, exclamatory — `7 day streak!`, `+10 XP` |
| Onboarding | Friendly second-person, one question per screen, low pressure |
| Empty states | Encouraging nudge with one clear action — never cold or empty-feeling |
| Notifications | Playful, personality-driven (the owl's signature charm) |

**Forbidden tones.** No academic jargon, no shaming for mistakes (`Wrong!`, `You failed`), no corporate stiffness, no guilt-tripping inside the learning flow. Keep sentences short. Exclamation points are welcome where genuine excitement is warranted; em-dashes and clever asides are on-brand in marketing copy.

## 11. Brand Narrative

Duolingo was founded in 2011 by **Luis von Ahn** and **Severin Hacker** out of Carnegie Mellon University, on a simple, radical premise: free language education for everyone. Von Ahn — who had earlier invented reCAPTCHA — built Duolingo to remove cost as a barrier to learning. The company went public on Nasdaq in 2021 and has grown into the world's most popular way to learn languages, with hundreds of millions of learners.

The design language is inseparable from the business model. Because the product is free and habit-driven, **engagement is the whole game** — and so the interface is engineered like a game: streaks, XP, leagues, hearts, crowns, and the relentlessly cheerful owl, **Duo**. Feather Green and the chunky tactile buttons exist to make a single lesson feel rewarding enough to come back tomorrow. The 3D button lip, the confetti, the celebratory full-screen states — these are not decoration; they are the retention mechanics rendered in pixels.

What Duolingo refuses is the aesthetic of *school*. No chalkboard greens, no textbook density, no intimidating grammar tables front-and-center. It also refuses the cold minimalism of typical SaaS — flat gray dashboards would never produce the dopamine the streak demands. Duolingo occupies a deliberate middle: rigorous, accessible product design wearing the costume of a friendly mobile game. The owl can be earnest or unhinged in marketing, but the core learning surface stays warm, clear, and relentlessly motivating.

## 12. Principles

1. **Fun is functional.** Every playful detail — the lip, the confetti, the owl — serves retention. Delight is not ornament; it is the product working.
2. **One action per screen.** A lesson screen has exactly one obvious next move. Choice paralysis kills momentum; the bright green CTA removes it.
3. **Celebrate everything.** Correct answers, streaks, level-ups, and milestones all get visible, joyful feedback. Progress made visible is progress repeated.
4. **Green means go.** Feather Green is reserved for the primary action and for correctness. It never decorates idly — it always means "do this" or "you got it."
5. **Tactile over flat.** Controls should feel physically pressable. The solid 3D lip and key-travel on press make the interface feel like a toy you want to touch.
6. **Kind to mistakes.** Errors are normal steps, shown plainly and without blame. The tone never shames; failure is just data on the way to fluency.
7. **Bold and legible.** Big rounded type, high contrast, large touch targets. The interface is readable at a glance and usable one-handed on the subway.
8. **Consistency builds habit.** The same green button, the same progress bar, the same celebration — repetition of the visual language is what makes the habit stick.

## 13. Personas

*Personas below are fictional archetypes informed by publicly described language-learner segments, not individual people.*

**Maya, 24, Chicago.** Marketing coordinator learning Spanish before a trip. Opens Duolingo on her evening commute, 1–2 lessons a night. Lives and dies by her streak — a 200-day streak is a point of pride she will not break. Motivated by the green progress bar filling and the confetti at the end. If a lesson feels like homework rather than a game, she drifts. Taps fast through the word bank; wants the CHECK button big and obvious.

**Daniel, 41, Austin.** Software engineer brushing up on Japanese he studied in college. Pays for Super Duolingo to remove hearts and ads. Values the structured path and the sense of measurable progress (XP, crowns). Appreciates the playful tone but mostly cares that the product respects his time — fast, frictionless, one clear next step. Annoyed by anything that slows the loop between lessons.

**Sofia, 16, Madrid.** High-school student using Duolingo for English alongside class. Competes hard in the weekly Diamond League leaderboard — the gamification *is* the motivation. Shares streak milestones with friends. Reacts to the owl's personality and the meme culture around it. For her, the social-game layer (leagues, friends, XP races) matters as much as the learning itself.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no lessons yet)** | Friendly Feather Bold headline + encouraging line in Wolf `#777777`, plus a green `#58CC02` CTA (`START LEARNING`). Often paired with a Duo illustration. Never cold. |
| **Loading (first paint)** | Light skeleton blocks in `#F7F7F7` (Polar) at final dimensions, or a centered animated Duo. Path tiles fade in. |
| **Loading (checking answer)** | CHECK button shows an inline spinner / brief disabled state; never blocks the whole screen. |
| **Correct answer** | Bottom feedback bar bg `#D7FFB8`, text `#58A700`, top border `#A5ED6E`, cheerful copy (`Nice!`), green CONTINUE button. Optional ding + small confetti. |
| **Incorrect answer** | Bottom feedback bar bg `#FFDFE0`, text `#EA2B2B`, shows `Correct solution:` plainly, red CONTINUE button. No shaming language. Heart/life decrements if applicable. |
| **Error (form field)** | 2px `#FF4B4B` border, bg `#FFF0F0`, helper text below in `#FF4B4B` 13px, one actionable sentence. |
| **Disabled (CHECK before answer)** | bg `#E5E5E5`, text `#AFAFAF`, no lip, not pressable. Re-enables the moment a choice is made. |
| **Success (lesson complete)** | Full-screen celebration: confetti, Duo reaction, XP count animating up in Bee `#FFC800`/Feather Bold, streak increment, single green CONTINUE. The peak emotional moment. |
| **Streak milestone** | Modal with flame illustration, big Feather Bold count, Fox `#FF9600` accents, share + continue actions. |
| **Out of hearts** | Modal explaining hearts depleted, options to wait, practice to refill, or upsell to Super. Tone stays light, not punitive. |
| **Skeleton** | `#F7F7F7` blocks at exact final dimensions, gentle shimmer, rounded at component radius. |

## 15. Motion & Easing

**Durations** (named):

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Disabled-state flips, reduced-motion fallback |
| `motion-fast` | 150ms | Button press / lip collapse, hover, small reveals |
| `motion-standard` | 250ms | Screen transitions, feedback bar slide-up, tile select |
| `motion-celebrate` | 400–600ms | XP count-up, progress fill, success reveals |
| `motion-confetti` | 800ms+ | Lesson-complete confetti and Duo reactions |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Feedback bars, modals, screen pushes appearing |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals, bar slide-down |
| `ease-standard` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Two-way transitions, tab/content switches |
| `ease-bounce` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Celebrations — XP pop, streak flame, owl bounce, badge reveal. The playful overshoot is on-brand here. |

**Signature motions.**

1. **Button key-press.** On tap, the button translates down by the lip height (`4px`) over `motion-fast` and the solid lip collapses to zero — exactly like pressing a physical key. On release it springs back. This is the single most recognizable Duolingo interaction.
2. **Progress fill.** The top progress bar animates its green fill width over `motion-standard` with `ease-standard` after each correct answer — visible, satisfying forward motion.
3. **Celebration pop.** On lesson complete, XP counts up, the streak flame and badges scale in with `ease-bounce`, and confetti bursts. Overshoot/bounce easing is *licensed* here (and only in celebratory contexts) — it would feel unserious elsewhere, but here joy is the point.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, confetti and bounce overshoots are removed and durations collapse toward `motion-instant`; transitions become simple fades. The product stays fully usable and still celebratory in copy, just less kinetic.

<!--
OmD v0.1 Sources — Duolingo

Tier 1 (official):
- design.duolingo.com/identity/color — Duolingo's official brand identity & color portal
- www.duolingo.com — live product surface

Tier 2 (corroborating brand references, accessed 2026-06-06):
- Feather Green #58CC02 confirmed across multiple brand-color references and Duolingo design docs
- Animal-named palette (Macaw #1CB0F6, Cardinal #FF4B4B, Bee #FFC800, Fox #FF9600,
  Beetle #CE82FF, Eel #4B4B4B, Wolf #777777, Hare #AFAFAF, Swan #E5E5E5, Polar #F7F7F7)
  are widely-documented Duolingo system tokens.
- Typography: Feather Bold (bespoke display, owl-curve inspired) + DIN Next Rounded (UI/body);
  Nunito 700/800 as the common open-source web stand-in for Feather Bold.

Signature traits (3D button "lip", 2px card outlines, gamified celebration states) are
well-documented, brand-defining characteristics of the Duolingo product UI.

Personas (§13) are fictional archetypes informed by publicly described language-learner
segments. Interpretive claims (e.g. "refuses the aesthetic of school") are editorial
readings of the design, not documented Duolingo statements. Exact token values may vary
slightly by platform and release.
-->
