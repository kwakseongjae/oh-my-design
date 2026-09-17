---
id: mikan
name: mikan
country: JP
category: education
homepage: "https://mikan.link/"
primary_color: "#ff4c0a"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=mikan.com&sz=128"
verified: "2026-06-17"
added: "2026-06-17"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-17"
  note: "primary = corporate-site brand orange (#ff4c0a) on every CTA + section heading; mikan for School (school.mikan.com) runs a warmer marigold (#fd9b12) + accent orange (#ff7f09) with a 3D hard-shadow (#e26f00) button. Deep navy (#001c46) bands + near-black text (#000e22 / #333333). CJK display via Hiragino Kaku Gothic ProN."
  colors:
    primary: "#ff4c0a"
    marigold: "#fd9b12"
    accent-orange: "#ff7f09"
    orange-shadow: "#e26f00"
    navy: "#001c46"
    ink: "#000e22"
    text: "#333333"
    canvas: "#ffffff"
    surface: "#f7f4f3"
    surface-grey: "#fafafa"
    surface-alt: "#f9f9f9"
    hairline: "#eeeeee"
    muted: "#666666"
    on-primary: "#ffffff"
  typography:
    family: { display: "Hiragino Kaku Gothic ProN", body: "Noto Sans JP", numeral: "Oswald" }
    hero:        { size: 36, weight: 900, lineHeight: 1.4, use: "Corporate hero copy, Hiragino weight 900" }
    section:     { size: 60, weight: 900, use: "Large English section labels (Service), brand orange" }
    section-jp:  { size: 36, weight: 900, use: "Japanese section headings, brand orange" }
    school-h2:   { size: 32, weight: 700, lineHeight: 1.5, use: "mikan for School section titles, Noto Sans 700" }
    school-h3:   { size: 24, weight: 700, use: "School feature sub-heads, Noto Sans JP 700" }
    step-num:    { size: 46, weight: 600, use: "Step numerals 01/02/03, Oswald, marigold" }
    body:        { size: 16, weight: 400, lineHeight: 1.7, use: "Standard reading text" }
    nav:         { size: 16, weight: 700, use: "Top nav links, weight 700" }
    button:      { size: 15, weight: 700, use: "Corporate CTA label" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 20, xl: 30, xxl: 48, section: 64 }
  rounded: { sm: 4, md: 8, lg: 12, xl: 20, full: 320 }
  shadow:
    none: "none"
    hard-3d: "#e26f00 0px 4px 0px 0px"
  components:
    button-primary: { type: button, bg: "#ff4c0a", fg: "#ffffff", radius: "6px", padding: "15px 30px", height: "48px", font: "15px / 700", use: "Corporate CTA — 採用情報 / View More" }
    button-school-fill: { type: button, bg: "#ff7f09", fg: "#ffffff", radius: "8px", padding: "17px 30px", height: "61px", shadow: "#e26f00 0px 4px 0px 0px", font: "16px / 400", use: "mikan for School primary — 無料トライアルのお申し込み, 3D hard-shadow" }
    button-school-outline: { type: button, bg: "#ffffff", fg: "#333333", border: "2px solid #ff7f09", radius: "8px", padding: "17px 30px", height: "65px", shadow: "#e26f00 0px 4px 0px 0px", font: "16px / 400", use: "School secondary — 資料請求する" }
    button-download: { type: button, bg: "#fd9b12", fg: "#ffffff", radius: "4px", height: "44px", font: "15px / 400", use: "School 資料ダウンロード marigold pill" }
    news-card: { type: card, bg: "#ffffff", fg: "#333333", radius: "10px", padding: "20px", use: "News / お知らせ list card, flat" }
    job-card: { type: card, bg: "#ffffff", fg: "#333333", radius: "12px", padding: "20px", use: "Careers posting card 🍊" }
    review-card: { type: card, bg: "#ffffff", fg: "#333333", radius: "8px", use: "Note interview / review card" }
    nav-link: { type: tab, fg: "#333333", font: "16px / 700", use: "Top nav item (Top / About / Members)", active: "brand orange #ff4c0a text on active" }
    step-badge: { type: badge, fg: "#fd9b12", font: "46px / 600 Oswald", use: "Step numeral 01/02/03 on School" }
  components_harvested: true
---

# Design System Inspiration of mikan

## 1. Visual Theme & Atmosphere

mikan (英語アプリmikan) is Japan's most-downloaded English-vocabulary learning app — over 10 million downloads — and its surfaces read exactly as the product promises: bright, friendly, and relentlessly encouraging. The corporate site (`mikan.link`) opens on a warm off-white canvas (`#f7f4f3`) and white cards (`#ffffff`), with a single high-energy citrus orange (`#ff4c0a`) doing all the heavy lifting. That orange is the brand's namesake — *mikan* is the Japanese mandarin orange — and it appears on every call-to-action, every English section label ("Service", "News"), and every Japanese section heading. The eye is trained to read orange as "go here, do this," while text sits in a calm near-black charcoal (`#333333`) and a deep navy (`#000e22`) so the page never feels shouty despite the saturated accent.

The typographic personality is clean Japanese-web standard: display headlines run in **Hiragino Kaku Gothic ProN** at weight 900 (36px hero copy, 60px English section labels) — heavy, rounded, approachable gothic letterforms that handle CJK and Latin with equal warmth. The full stack falls back gracefully through `"Helvetica Neue", Arial, "Hiragino Sans", Meiryo, sans-serif`, the standard macOS/Windows Japanese ladder. Body copy drops to a comfortable 16px at weight 400 with a generous 1.7 line-height, optimized for the dense kanji-kana mix of Japanese reading. The result is a tone that is confident but never corporate-cold — the visual equivalent of the app's "小さな『できた』の積み重ね" ("a stack of small *I-did-it!* moments") mission.

What distinguishes mikan from its ed-tech peers is its flat, almost shadowless restraint on the corporate site paired with a deliberately playful **3D "hard-shadow" button** on the toB product surface. The corporate CTAs are flat orange rectangles at a tidy 6px radius; but on `mikan for School` (`school.mikan.com`) the primary button shifts to a warmer accent orange (`#ff7f09`) sitting on a solid offset shadow (`#e26f00 0px 4px 0px 0px`) — a tactile, pressable, game-like affordance that signals the friendlier, more energetic toB tone. Deep navy (`#001c46`) full-width bands break up the white, and step numerals are set in **Oswald** (46px, weight 600) in marigold (`#fd9b12`) for a crisp, numbered-tutorial rhythm. It is an education brand that looks like learning should feel: bright, low-friction, and quietly rigorous.

**Key Characteristics:**
- Citrus brand orange (`#ff4c0a`) reserved for every CTA + section heading — the single "action/identity" color
- Hiragino Kaku Gothic ProN weight 900 for display headlines — heavy, rounded, friendly CJK gothic
- Noto Sans / Noto Sans JP weight 700 on the toB `mikan for School` surface
- 3D hard-shadow buttons (`#e26f00 0px 4px 0px 0px`) on School — playful, tactile, pressable
- Warm off-white canvas (`#f7f4f3`) + deep navy (`#001c46`) bands instead of stark white-on-black
- Near-black charcoal (`#333333`) and navy ink (`#000e22`) for text — never harsh pure black for body
- Conservative radius ladder: 4px → 6px → 8px → 10px → 12px → 20px cards
- Oswald numerals (`#fd9b12` marigold) for step counters — numbered-tutorial cadence

## 2. Color Palette & Roles

### Primary
- **mikan Orange** (`#ff4c0a`): The namesake citrus brand color. CTA backgrounds, English section labels ("Service", "News"), and Japanese section headings on the corporate site. The system's single saturated "action + identity" hue.
- **Marigold** (`#fd9b12`): Warmer secondary orange used for the School download pill and the Oswald step numerals (01/02/03). A softer, more golden companion to the primary.
- **Accent Orange** (`#ff7f09`): The `mikan for School` primary-CTA fill and outline-border color. Mid-bright orange that reads slightly warmer than the corporate primary.

### Deep & Ink
- **Brand Navy** (`#001c46`): Deep navy full-width section bands on the corporate site, providing dark contrast against the orange and white.
- **Ink Navy** (`#000e22`): Near-black blue-tinted text color for primary copy on dark/light surfaces.
- **Charcoal** (`#333333`): The workhorse text color across nav, cards, and body — a warm near-black, never pure `#000000`.
- **Muted Grey** (`#666666`): Secondary/metadata text, captions, fine print.

### Neutral & Surface
- **Pure White** (`#ffffff`): Card surfaces, button text on orange/navy, primary content background.
- **Warm Canvas** (`#f7f4f3`): The page's warm off-white background — a barely-there peach-grey that softens the orange.
- **Surface Grey** (`#fafafa`): Light grey card-inner / alternating-block surface.
- **Surface Alt** (`#f9f9f9`): A near-white alternating section background.
- **Hairline** (`#eeeeee`): Thin borders and dividers — the primary separation device in the shadow-light corporate system.

### Functional / Depth
- **Orange Shadow** (`#e26f00`): The solid offset color of the School 3D hard-shadow button (`#e26f00 0px 4px 0px 0px`) — a darker burnt-orange that grounds the pressable affordance.
- **On-Primary White** (`#ffffff`): Text/icon color on all orange and navy fills.

## 3. Typography Rules

### Font Family
- **Display (corporate)**: `Hiragino Kaku Gothic ProN` — the full stack is `-apple-system, "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif`. Weight 900 at display sizes; weight 700 for nav.
- **Body / toB (School)**: `Noto Sans JP` (and `Noto Sans`) at weight 700 for headings, weight 400 for body — the Google CJK web standard.
- **Numerals**: `Oswald` — condensed Latin for step counters (01/02/03) at weight 500–600, in marigold.
- **Misc Latin**: `Lato` appears on a School download button label.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Corporate Hero | Hiragino Kaku Gothic ProN | 36px (2.25rem) | 900 | 1.4 | "小さな『できた』の積み重ねをずっと支える" |
| English Section Label | Hiragino Kaku Gothic ProN | 60px (3.75rem) | 900 | normal | "Service" — brand orange `#ff4c0a` |
| Japanese Section Heading | Hiragino Kaku Gothic ProN | 36px (2.25rem) | 900 | normal | "英語アプリmikan" — brand orange |
| School Section Title | Noto Sans | 32px (2.00rem) | 700 | 1.5 | "生徒の学習が続く仕組み" |
| School Feature Sub-head | Noto Sans JP | 24px (1.50rem) | 700 | normal | "自分に合った出題方法で学習できる！" |
| Step Numeral | Oswald | 46px (2.88rem) | 600 | normal | "01/02/03" — marigold `#fd9b12` |
| Nav Link | Hiragino Kaku Gothic ProN | 16px (1.00rem) | 700 | normal | Top / About / Members / News |
| Body | Hiragino / Noto Sans | 16px (1.00rem) | 400 | 1.7 | Standard reading text |
| Button Label | Hiragino Kaku Gothic ProN | 15px (0.94rem) | 700 | normal | Corporate CTA label |

### Principles
- **Heavy display, calm body**: Hiragino weight 900 carries every corporate headline; weight 400 carries every paragraph at a roomy 1.7 line-height. The weight jump is the primary hierarchy signal.
- **Orange is a typographic role, not just a fill**: English/Japanese section labels are set *in* brand orange (`#ff4c0a`), making color part of the type system rather than decoration.
- **CJK-first stack with graceful Latin fallback**: the `-apple-system → Hiragino Kaku Gothic ProN → Meiryo → sans-serif` ladder guarantees consistent gothic rendering across macOS, iOS, and Windows.
- **Oswald owns numerals**: condensed Latin numerals (01/02/03) give the toB step tutorials a crisp, counted cadence distinct from the rounded gothic body.
- **Two surfaces, two body fonts**: the corporate site leans on the system Hiragino stack; `mikan for School` standardizes on Noto Sans JP — both gothic, both friendly, never serif for UI.

## 4. Component Stylings

### Buttons

**Corporate CTA (Primary)**
- Background: `#ff4c0a`
- Text: `#ffffff`
- Radius: 6px
- Padding: 15px 30px
- Font: 15px Hiragino weight 700
- Height: 48px
- Use: Corporate site call-to-action — "採用情報", "View More →"

**School Primary (3D Fill)**
- Background: `#ff7f09`
- Text: `#ffffff`
- Radius: 8px
- Padding: 17px 30px
- Shadow: `#e26f00 0px 4px 0px 0px`
- Font: 16px weight 400
- Height: 61px
- Use: mikan for School primary CTA — "無料トライアルのお申し込み" (pressable 3D hard-shadow)

**School Secondary (3D Outline)**
- Background: `#ffffff`
- Text: `#333333`
- Border: 2px solid `#ff7f09`
- Radius: 8px
- Padding: 17px 30px
- Shadow: `#e26f00 0px 4px 0px 0px`
- Font: 16px weight 400
- Height: 65px
- Use: School secondary action — "資料請求する"

**Download Pill (Marigold)**
- Background: `#fd9b12`
- Text: `#ffffff`
- Radius: 4px
- Font: 15px weight 400
- Height: 44px
- Use: School "資料ダウンロード" download button

### Cards & Containers

**News / Notice Card**
- Background: `#ffffff`
- Text: `#333333`
- Radius: 10px
- Padding: 20px
- Use: News / お知らせ list card on corporate home (flat, no shadow)

**Careers Card**
- Background: `#ffffff`
- Text: `#333333`
- Radius: 12px
- Padding: 20px
- Use: Job-posting card prefixed with 🍊 ("英語アプリmikanフロントエンドエンジニア")

**Review / Interview Card**
- Background: `#ffffff`
- Text: `#333333`
- Radius: 8px
- Use: Note interview / student-review card linking to note.com

### Badges

**Step Numeral**
- Text: `#fd9b12`
- Font: 46px Oswald weight 600
- Use: Numbered step counter (01 / 02 / 03) on mikan for School feature sections

### Navigation
- Background: `#ffffff`
- Text: `#333333`
- Font: 16px Hiragino weight 700
- Active: brand orange `#ff4c0a` text on the active item
- Use: Top horizontal nav ("Top", "About", "Members", "News", "Contact")

---

**Verified:** 2026-06-17 (omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces)
**Tier 1 sources:** https://mikan.link/ (corporate site, live computed style); https://school.mikan.com/ (mikan for School toB product surface, live computed style)
**Tier 2 sources:** getdesign.md/mikan — no entry (empty); styles.refero.design/?q=mikan — no brand-specific result (only default trending cards returned)
**Conflicts unresolved:** none. Two-surface palette split documented intentionally: corporate brand orange `#ff4c0a` (flat 6px CTA) vs mikan for School accent orange `#ff7f09` (3D hard-shadow 8px CTA) + marigold `#fd9b12`. Both retained as distinct variant subgroups in §4.

## 5. Layout Principles

### Spacing System
- Base unit: 8px (with 4px sub-step)
- Scale: 4px, 8px, 12px, 16px, 20px, 30px, 48px, 64px
- Notable: CTA horizontal padding lands at 30px (measured) giving the orange buttons a generous, tappable hit area; cards use 20px / 24px inner padding

### Grid & Container
- Centered single-column hero with the 36px Hiragino weight-900 headline as the anchor
- News / careers cards arranged in responsive multi-column grids that wrap to single column on mobile
- Feature sections alternate white (`#ffffff`) and warm canvas (`#f7f4f3`), broken by deep navy (`#001c46`) full-width bands
- mikan for School uses numbered (01/02/03) feature blocks with Oswald counters anchoring each step

### Whitespace Philosophy
- **Friendly breathing room**: despite being information-rich ed-tech, the surfaces stay airy with generous vertical rhythm between sections.
- **Flat segmentation**: corporate sections separate by background tint (warm canvas vs white) and `#eeeeee` hairlines rather than heavy elevation.
- **Color as anchor**: deep navy bands and orange section labels create rhythm without arbitrary decoration.

### Border Radius Scale
- XSmall (4px): School download pill, small inner elements
- Small (6px): corporate CTA buttons
- Medium (8px): School CTAs, review cards
- Large (10–12px): news cards, careers cards — the card workhorse
- XLarge (20px): larger feature containers
- Pill (320px / full): rounded avatar/icon chips

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Corporate page background, cards, headings |
| Tint (Level 1) | `#f7f4f3` / `#fafafa` background shift | Section separation without elevation |
| Hairline (Level 2) | `1px solid #eeeeee` border | Card outlines, dividers |
| Hard-3D (Level 3) | `#e26f00 0px 4px 0px 0px` solid offset | mikan for School pressable buttons only |

**Shadow Philosophy**: mikan's corporate site is near-shadowless — live inspection found `box-shadow: none` across the hero, nav, headings, and most cards. Depth and grouping are communicated through flat tinted surfaces (`#f7f4f3`, `#fafafa`), thin `#eeeeee` hairlines, and deep navy (`#001c46`) contrast bands. The one deliberate exception lives on `mikan for School`: a solid-offset **3D hard-shadow** (`#e26f00 0px 4px 0px 0px`) on the primary buttons — not a soft blur but a flat, game-like, pressable affordance that matches the more energetic toB tone. This split is intentional: calm flat marketing chrome on corporate, playful tactile buttons where the product wants kids and teachers to tap.

## 7. Do's and Don'ts

### Do
- Use the citrus brand orange (`#ff4c0a`) for every corporate CTA and section heading — it's the namesake "action + identity" color
- Set display headlines in Hiragino Kaku Gothic ProN weight 900 — heavy, rounded, friendly CJK gothic
- Use Noto Sans JP weight 700 for headings on the mikan for School surface
- Apply the 3D hard-shadow (`#e26f00 0px 4px 0px 0px`) on School primary buttons for a pressable, playful feel
- Use near-black charcoal (`#333333`) or navy ink (`#000e22`) for text instead of pure black
- Separate corporate sections with warm tint (`#f7f4f3`) and `#eeeeee` hairlines, and break rhythm with deep navy (`#001c46`) bands
- Set step numerals (01/02/03) in Oswald, marigold (`#fd9b12`)
- Keep radius conservative — 4px–12px on buttons and cards

### Don't
- Spread orange across many decorative elements — keep it the single action/identity signal
- Use pure black (`#000000`) for body text — reserve charcoal `#333333` and navy ink `#000e22`
- Put the 3D hard-shadow on corporate buttons — corporate CTAs stay flat 6px
- Set body copy in a light weight or a serif — gothic at weight 400 owns reading text
- Use soft blurred drop shadows for elevation — the system is flat plus one hard-offset exception
- Mix in a second saturated accent hue beyond the orange family (orange / marigold / accent-orange)
- Set Japanese headlines in a thin weight — display is always weight 700–900
- Use positive, decorative letter-spacing on dense CJK body — keep it tight and legible

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline compresses, cards stack |
| Tablet | 640-1024px | 2-up feature/news cards, moderate padding |
| Desktop | 1024-1366px | Full layout, multi-column news/careers grids, navy bands full-width |

### Touch Targets
- Corporate CTA at 48px height with 15px 30px padding — comfortably tappable
- School primary CTA at 61px height — large, unmistakable, with 3D affordance
- Nav links at 16px weight 700 within a generous header

### Collapsing Strategy
- Hero: 36px Hiragino headline scales down on mobile, weight 900 maintained
- News / careers card grids: multi-column → single column stack
- Navy contrast bands and warm-canvas sections maintain full-width treatment
- School numbered steps (01/02/03) stack vertically on narrow viewports

### Image Behavior
- App screenshots and illustrations sit flat (no shadow) on corporate, consistent with the flat system
- Cards maintain their 8–12px radius across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA / brand: mikan Orange (`#ff4c0a`)
- School primary CTA: Accent Orange (`#ff7f09`) + 3D shadow (`#e26f00`)
- Marigold accent / numerals: (`#fd9b12`)
- Deep band background: Brand Navy (`#001c46`)
- Heading / body text: Charcoal (`#333333`), Ink Navy (`#000e22`)
- Muted text: Muted Grey (`#666666`)
- Background: Pure White (`#ffffff`), Warm Canvas (`#f7f4f3`)
- Hairline: (`#eeeeee`)

### Example Component Prompts
- "Create a corporate hero on warm canvas (#f7f4f3). Headline at 36px Hiragino Kaku Gothic ProN weight 900, color #333333. One orange CTA: #ff4c0a background, white text, 6px radius, 15px 30px padding, 15px weight 700 — '採用情報'. Section label 'Service' at 60px weight 900 in brand orange #ff4c0a."
- "Design a mikan for School primary button: #ff7f09 background, white text, 8px radius, 17px 30px padding, with a 3D hard-shadow #e26f00 0px 4px 0px 0px. Beside it an outline variant: white background, 2px solid #ff7f09 border, #333333 text, same shadow."
- "Build a news card: white background, 10px radius, 20px padding, no shadow, #333333 text. A careers card uses 12px radius with a 🍊 prefix on the title."
- "Create a numbered feature step: Oswald numeral '01' at 46px weight 600 in marigold #fd9b12, followed by a Noto Sans JP 24px weight 700 heading in #333333."
- "Create top nav: white header, Hiragino 16px weight 700 links (#333333), brand orange #ff4c0a on the active item."

### Iteration Guide
1. Brand orange (`#ff4c0a`) is the single corporate action/identity color — don't dilute it
2. Hiragino Kaku Gothic ProN weight 900 for every corporate headline; Noto Sans JP 700 for School
3. Flat by default — separate with `#f7f4f3` tint, `#eeeeee` hairlines, and `#001c46` navy bands
4. The 3D hard-shadow (`#e26f00 0px 4px 0px 0px`) belongs to School buttons only
5. Text is charcoal `#333333` / navy ink `#000e22`, never pure black for body
6. Oswald + marigold (`#fd9b12`) for step numerals (01/02/03)
7. Radius stays conservative: 4–12px buttons and cards

---

## 10. Voice & Tone

mikan's voice is **warm, encouraging, and achievement-celebrating** — an English-learning companion that turns a daunting task (memorizing tens of thousands of words) into a stream of small wins. The brand mission "小さな『できた』の積み重ねをずっと支える" ("supporting the steady accumulation of small *I-did-it!* moments") sets the register: motivational, kind, never scolding. Copy treats the learner as someone capable who just needs momentum, not a struggling student to be lectured. The toB `mikan for School` voice stays equally friendly while adding concrete teacher-facing benefit framing ("先生の学習管理を効率化" / "streamline teachers' study management").

| Context | Tone |
|---|---|
| Mission / hero | Warm, motivational. "小さな『できた』の積み重ねをずっと支える." Celebrates progress. |
| Service labels | Plain English/Japanese. "Service", "英語アプリmikan", "mikan for School". |
| CTAs | Direct, low-pressure. "資料ダウンロード", "無料トライアルのお申し込み", "View More →". |
| School benefit copy | Concrete and outcome-framed. "生徒の学習が続く仕組み", "先生の学習管理を効率化". |
| Careers cards | Friendly, 🍊-prefixed, role-clear. "英語アプリmikanフロントエンドエンジニア". |

**Voice samples (verbatim from live surfaces):**
- "小さな『できた』の積み重ねをずっと支える" — corporate hero (mission, achievement-framed). *(verified live 2026-06-17)*
- "生徒の学習が続く仕組み" — mikan for School section heading ("the system that keeps students learning"). *(verified live 2026-06-17)*
- "できた！を実感できるmikanの学習ステップ" — School feature sub-head ("mikan's study steps where you feel *I did it!*"). *(verified live 2026-06-17)*

**Forbidden register**: shame-based study pressure, exam-anxiety fear appeals, cold institutional tone, undefined jargon. mikan keeps the tone of an encouraging coach, not a stern teacher.

## 11. Brand Narrative

mikan (株式会社mikan) builds Japan's most-used English-vocabulary learning app, 英語アプリmikan, which has surpassed 10 million downloads ("1000万ダウンロード突破" stated on the homepage). The product's premise is behavioral, not just instructional: language acquisition is hard mostly because momentum is hard to sustain, so mikan engineers the experience around "小さな『できた』" — small, frequent, felt moments of success — to keep learners coming back day after day. The name itself, *mikan* (みかん, the mandarin orange), gives the brand its cheerful citrus identity and its signature orange.

The company has grown from a single consumer app into a two-sided education business: the toC `英語アプリmikan` for individual learners, and `mikan for School` (`school.mikan.com`), a toB service for schools and cram schools that wraps the same learning engine in teacher-facing management tools ("先生の学習管理を効率化"). Partnerships with established Japanese education publishers (KADOKAWA's 『真・英文法大全』, Z会's 速読速聴・英単語 series) extend the content library, positioning mikan as infrastructure for English study rather than a single app.

What mikan refuses, visible in its design: the cold, exam-pressure aesthetic of legacy Japanese cram-school materials, and the gamified-but-hollow look of attention-farming apps. What it embraces: a bright, friendly citrus identity; heavy, approachable gothic type; flat, fast, low-friction layouts; and playful tactile buttons that make tapping "next" feel like a small reward. The design is the mission rendered visually — learning that feels like a stack of small wins.

## 12. Principles

1. **Celebrate small wins.** The product is built on "小さな『できた』." *UI implication:* surface progress visibly and frequently; reward the next tap with a tactile, satisfying affordance (the School 3D hard-shadow button).
2. **One bright signal.** Orange (`#ff4c0a`) means "this is mikan, do this." *UI implication:* reserve the saturated citrus for CTAs and section identity so the action is never ambiguous; don't dilute it with decorative color.
3. **Friendly, never intimidating.** English study should feel approachable. *UI implication:* heavy but rounded gothic type, generous whitespace, warm off-white canvas — no cram-school severity.
4. **Flat and fast, with a tactile reward.** *UI implication:* keep marketing chrome flat (tint + hairline + navy bands); reserve the playful 3D shadow for the moments where a tap should feel good.
5. **Two audiences, one warmth.** Learners and teachers both get an encouraging tone. *UI implication:* the toB School surface stays as friendly as the consumer app while adding concrete benefit framing.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable mikan user segments (Japanese students preparing for English exams, working adults relearning vocabulary, teachers adopting toB tools), not individual people.*

**佐藤ひなた, 17, 名古屋.** A high-schooler studying for university entrance English. Uses mikan in short bursts between classes because the "できた！" feedback keeps her going when flashcards would bore her. Chose mikan because it felt like a game that happened to teach, not a test.

**田中健, 34, 東京.** A working professional rebuilding his English vocabulary for work. Values that mikan turns a dreaded chore into a daily streak of small wins he can finish on the train. Trusts the brand's calm, non-pushy tone.

**山本先生, 45, 新潟.** A high-school English teacher who adopted mikan for School to manage student study at scale. Appreciates that the toB dashboard streamlines assignment tracking ("先生の学習管理を効率化") while students still get the friendly app they already like.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no study history)** | Warm canvas (`#f7f4f3`). Single charcoal (`#333333`) line encouraging a first session, with one orange (`#ff4c0a`) CTA to start. Friendly, never blank or scolding. |
| **Empty (no saved word lists)** | Muted Grey (`#666666`) single line noting nothing saved yet, plus a path back to study. Calm and inviting. |
| **Loading (content fetch)** | Skeleton blocks at final card dimensions on `#fafafa`, 10px radius, flat pulse consistent with the shadow-light system. |
| **Loading (button press)** | School 3D buttons depress (offset shadow collapses) on tap; previous content stays visible. |
| **Error (network)** | Inline message in charcoal with a plain, encouraging explanation and a retry — no bare "エラーが発生しました." States the next step. |
| **Error (form validation)** | Field-level message below the input describing what's valid, in a warm tone — not just "必須". |
| **Success (lesson complete)** | Bright "できた！" celebration moment; orange/marigold accent confirms the win. The reward IS the success state. |
| **Skeleton** | `#fafafa` blocks at final dimensions, 8–10px radius, flat pulse. |
| **Disabled** | Muted Grey (`#666666`) text on reduced-opacity surface; orange actions fade rather than turn grey to preserve brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button press, focus |
| `motion-standard` | 200ms | Card/section reveal, sheet, dropdown |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, sheets, panels |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is friendly but restrained. The signature interaction is the School **3D hard-shadow button press** — on tap, the `#e26f00 0px 4px 0px 0px` offset collapses so the button visibly "presses down," a tactile reward consistent with the "できた！" philosophy. Section content fades in from below at `motion-standard / ease-enter`. Celebration moments (lesson complete) may use a brief bouncy accent, but routine UI avoids gratuitous spring. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the button-press offset becomes a static state change; the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-17) via global playwright getComputedStyle:
- https://mikan.link/ (corporate site): brand orange rgb(255,76,10) #ff4c0a on every CTA + section
  heading; deep navy rgb(0,28,70) #001c46 bands; text rgb(51,51,51) #333333 / rgb(0,14,34) #000e22;
  warm canvas rgb(247,244,243) #f7f4f3; Hiragino Kaku Gothic ProN weight 900 display; nav weight 700.
- https://school.mikan.com/ (mikan for School, toB): accent orange rgb(255,127,9) #ff7f09 primary CTA
  with 3D hard-shadow rgb(226,111,0) #e26f00 0px 4px 0px; marigold rgb(253,155,18) #fd9b12 download +
  step numerals; Noto Sans / Noto Sans JP weight 700 headings; Oswald 46px numerals.

Token-level claims (§1-9) are sourced from this live inspection.

Voice samples (§10) are verbatim from the live surfaces:
- "小さな『できた』の積み重ねをずっと支える" — mikan.link corporate hero
- "生徒の学習が続く仕組み", "できた！を実感できるmikanの学習ステップ" — school.mikan.com

Brand narrative (§11): 株式会社mikan builds 英語アプリmikan ("1000万ダウンロード突破" stated on
mikan.link homepage); two-sided business with mikan for School (school.mikan.com); content
partnerships with KADOKAWA (『真・英文法大全』) and Z会 (速読速聴・英単語) are stated as partnership
cards on the homepage. The name mikan = みかん (mandarin orange) is the source of the citrus brand
identity. These are drawn from the live homepage; broader corporate facts are general public
knowledge, not quoted from a single verified mikan statement in this turn.

A public mikan DesignSystem (Figma) is documented by mikan designers (note.com/jirosh1998
"Figmaのリファクタリングからはじめるデザインシステムの構築") describing a semantic color model
(Background/Surface/Text/UI/Border/Social) with "mikan Orange" as the primary brand color, Component/
Type/Size/status naming, and cross-platform iOS/Android JP+EN typography — corroborating the orange-
primary, friendly-gothic system observed live. Exact in-app hex codes are not disclosed there, so all
hex values in this doc come from the live website inspection above, not from the Figma article.

Personas (§13) are fictional archetypes informed by publicly observable mikan user segments
(Japanese exam-prep students, adult relearners, teachers adopting toB tools). Names are illustrative;
they do not refer to real people.

Interpretive claims (e.g., "the design is the mission rendered visually", "one bright signal",
"flat and fast with a tactile reward") are editorial readings connecting mikan's observed design to
its stated mission, not directly sourced mikan statements.
-->
