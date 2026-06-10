---
id: timee
name: Timee
country: JP
category: consumer-tech
homepage: "https://timee.co.jp"
primary_color: "#ffd700"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=timee.co.jp&sz=128"
verified: "2026-06-10"
added: "2026-06-10"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-10"
  note: "primary = brand yellow (#ffd700) on the worker-facing surface; business (B2B) surface swaps the action color to iOS-system blue (#007aff). Ink is near-black #212121; signature hard offset shadows (0 8px 0) in ink or deep blue #0054af."
  colors:
    primary: "#ffd700"
    ink: "#212121"
    canvas: "#ffffff"
    action-blue: "#007aff"
    blue-shadow: "#0054af"
    alert: "#ff3b30"
    surface-inactive: "#eaeaea"
    neutral: "#b7b8bc"
    surface-business: "#f5f5f4"
    muted: "#666666"
    faint: "#999999"
    on-primary: "#212121"
  typography:
    family: { sans: "Noto Sans JP" }
    section:       { size: 32, weight: 700, lineHeight: 1.50, use: "Homepage section headlines (H2)" }
    section-biz:   { size: 30, weight: 700, lineHeight: 1.20, use: "Business LP section headlines (H2)" }
    subsection:    { size: 24, weight: 700, lineHeight: 1.40, use: "Feature heads, app-download head (H3)" }
    button-lg:     { size: 20, weight: 700, lineHeight: 1.50, use: "Large CTA labels, filter pills" }
    category:      { size: 18, weight: 700, lineHeight: 1.50, use: "Job-category titles, anchor links" }
    card-title:    { size: 16, weight: 700, lineHeight: 1.50, use: "Job-card titles" }
    body:          { size: 16, weight: 400, lineHeight: 1.50, use: "Standard reading text" }
    button-sm:     { size: 14, weight: 700, lineHeight: 1.50, use: "Header pill button label" }
    badge:         { size: 12, weight: 700, lineHeight: 1.50, use: "NEW!! sticker badge" }
  spacing: { xs: 4, sm: 8, md: 16, lg: 20, xl: 24, section: 64 }
  rounded: { md: 16, lg: 25, xl: 48, full: 9999 }
  shadow:
    hard-ink: "0px 8px 0px 0px #212121"
    hard-blue: "0px 8px 0px 0px #0054af"
    modal: "0px 8px 32px 0px rgba(0, 0, 0, 0.24)"
  components:
    button-primary: { type: button, bg: "#ffd700", fg: "#212121", border: "2px solid #212121", radius: "9999px", padding: "24px 20px", height: "82px", font: "20px / 700", shadow: "0px 8px 0px 0px #212121", use: "Brand-yellow hero CTA (企業様向けページはこちら) — outlined pill with hard offset shadow" }
    button-app-cta: { type: button, bg: "#007aff", fg: "#ffffff", radius: "9999px", height: "89px", font: "16px / 400", shadow: "0px 8px 0px 0px #0054af", use: "App-install CTA on worker homepage, hard blue offset shadow" }
    button-business: { type: button, bg: "#007aff", fg: "#ffffff", border: "2px solid #007aff", radius: "9999px", padding: "4px 16px 6px", height: "38px", font: "16px / 700", use: "B2B primary CTA (アカウント開設) on business LP" }
    button-business-ghost: { type: button, bg: "#ffffff", fg: "#007aff", border: "2px solid #007aff", radius: "9999px", padding: "4px 16px 6px", height: "38px", font: "16px / 700", use: "B2B secondary CTA (資料ダウンロード)" }
    tab-age-filter: { type: tab, bg: "#eaeaea", fg: "#212121", border: "1px solid #212121", radius: "999px", height: "42px", font: "20px / 700", active: "bg #212121 + text #ffffff", use: "Worker-data age filter pills (18歳〜/20代/30代…)" }
    badge-new: { type: badge, bg: "#212121", fg: "#ffd700", radius: "99px", font: "12px / 700", use: "Circular NEW!! sticker, yellow-on-ink" }
    card-feature: { type: card, bg: "#ffffff", fg: "#212121", radius: "25px", use: "Feature explainer card (単発で働ける/即日振り込み) on tinted section" }
    dialog-qr: { type: dialog, bg: "#ffffff", radius: "16px", shadow: "0px 8px 32px 0px rgba(0,0,0,0.24)", use: "QR app-download modal" }
  components_harvested: true
---

# Design System Inspiration of Timee

## 1. Visual Theme & Atmosphere

Timee (タイミー) is Japan's largest spot-work platform — 13.4 million registered workers pick up single-shift jobs with no resume and no interview — and its design language radiates that same instant, friction-free energy. The worker-facing homepage is a sunny, almost comic-book composition: a saturated brand yellow (`#ffd700`) plays against near-black ink (`#212121`) on a white canvas (`#ffffff`), with every interactive element rolled into a full pill. The signature move is the hard offset shadow — buttons cast a solid, unblurred `0px 8px 0px` block of ink or deep blue beneath them, like stickers lifted off a manga page. Pressed together with 2px ink outlines, the chrome feels tactile, cheerful, and unmistakably Japanese-pop: a job app that looks more like a game UI than an HR product.

Typography is a single-family system: Noto Sans JP carries everything, with bold weight 700 doing all of the hierarchy work. Section headlines run 32px bold, category tiles 18px bold, job-card titles 16px bold — there are no light weights and no tightened tracking; the voice is loud, round, and friendly rather than refined. Body copy settles at a workmanlike 16px / 1.5, optimized for dense Japanese text. Color does the rest of the talking: wage figures and urgency markers flash in iOS-system red (`#ff3b30`), and the system borrows Apple's native blue (`#007aff`) for app-install actions — a deliberate echo of the smartphone OS where Timee actually lives.

What makes Timee structurally interesting is its two-audience color split. The worker surface is yellow-led: playful pills, yellow CTAs outlined in ink, a circular ink badge with yellow `NEW!!` lettering. The business surface (timee.co.jp/business) swaps the action color wholesale to blue `#007aff` on calm white and warm-grey (`#f5f5f4`) sections — same pills, same Noto Sans JP, same 2px borders, but a cooler, more corporate temperature for store managers and HR buyers. One brand, two registers: the yellow says "working here is light and fun," the blue says "hiring here is fast and reliable."

**Key Characteristics:**
- Brand yellow (`#ffd700`) + near-black ink (`#212121`) on white — high-energy, manga-flavored contrast
- Hard offset shadows (`0px 8px 0px` solid, no blur) in ink or deep blue (`#0054af`) — sticker-like tactility
- Pill-everything geometry: full-round buttons, 999px filter chips, 99px circular badges
- 2px ink outlines on primary CTAs — drawn, cartoon-like edges
- Single family, single trick: Noto Sans JP with weight 700 for all hierarchy
- iOS system colors as functional accents: blue `#007aff` for app actions, red `#ff3b30` for wages/urgency
- Audience-split palette: yellow-led worker surface, blue-led business surface
- Flat tinted sections and big rounded cards (25px) instead of soft elevation

## 2. Color Palette & Roles

### Primary
- **Timee Yellow** (`#ffd700`): The brand color. Hero CTA backgrounds, highlight surfaces, accent lettering on ink badges. Always paired with ink — never with white text.
- **Ink** (`#212121`): Primary text color, CTA outlines, hard shadows, dark badge/chip fills. A near-black that keeps the comic-book edges soft enough to feel friendly.
- **Pure White** (`#ffffff`): Page canvas, card surfaces, text on blue.

### Action & Accent
- **Action Blue** (`#007aff`): App-install CTAs on the worker surface and the entire action layer of the business LP (account signup, document download). Deliberately matches the iOS system blue.
- **Blue Shadow** (`#0054af`): The darker blue used as the hard offset shadow beneath blue CTAs — the same sticker-shadow trick as ink, tinted to match.
- **Alert Red** (`#ff3b30`): Wage figures, urgency markers, NEW labels in text. Matches the iOS system red.

### Neutral & Surface
- **Surface Inactive** (`#eaeaea`): Inactive filter pills and muted UI fills.
- **Neutral Grey** (`#b7b8bc`): Secondary neutral for dividers, placeholders, and inactive iconography.
- **Business Surface** (`#f5f5f4`): Warm-grey section tint on the business LP.
- **Muted** (`#666666`): Secondary text, captions.
- **Faint** (`#999999`): Tertiary text, fine print, disabled labels.

## 3. Typography Rules

### Font Family
- **Primary**: `Noto Sans JP`, sans-serif — the only family in the system, on both worker and business surfaces.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Section Headline | Noto Sans JP | 32px (2.00rem) | 700 | 1.50 (48px) | Homepage H2 (例えばこんなお仕事が) |
| Section Headline (Biz) | Noto Sans JP | 30px (1.88rem) | 700 | 1.20 (36px) | Business LP H2 (タイミーが選ばれる理由) |
| Sub-section | Noto Sans JP | 24px (1.50rem) | 700 | 1.33–1.50 | Feature heads, アプリをダウンロード |
| Large Button / Pill | Noto Sans JP | 20px (1.25rem) | 700 | 1.50 | Yellow CTA label, age-filter pills |
| Category Title | Noto Sans JP | 18px (1.13rem) | 700 | 1.50 (27px) | Job-category tiles, anchor links |
| Card Title | Noto Sans JP | 16px (1.00rem) | 700 | 1.50 (24px) | Job-card titles |
| Body | Noto Sans JP | 16px (1.00rem) | 400 | 1.50 (24px) | Standard reading text |
| Small Button | Noto Sans JP | 14px (0.88rem) | 700 | 1.50 | Header pill (求人担当者さまはこちら) |
| Badge | Noto Sans JP | 12px (0.75rem) | 700 | 1.50 | NEW!! sticker |

### Principles
- **One family, one weight jump**: hierarchy is carried entirely by the 400 → 700 weight switch and size steps. No light weights, no letter-spacing manipulation — the system stays loud and legible.
- **Bold is the default for anything tappable**: every button, pill, tab, category tile, and card title is weight 700. Regular 400 is reserved for paragraph copy.
- **Comfortable Japanese line-height**: 1.5 line-height across body and headings (homepage), tightening only on the business LP headlines (1.2).
- **Numbers shout in red**: wage amounts and counts ("1,340万人") lean on `#ff3b30` or bold ink rather than size changes.

## 4. Component Stylings

### Buttons

**Primary Yellow (Worker)**
- Background: `#ffd700`
- Text: `#212121`
- Border: 2px solid `#212121`
- Radius: 9999px (full pill)
- Padding: 24px 20px
- Font: 20px / 700 / Noto Sans JP
- Shadow: `0px 8px 0px 0px #212121` (hard offset, no blur)
- Use: Hero CTA on worker homepage (企業様向けページはこちら)

**App Install (Blue)**
- Background: `#007aff`
- Text: `#ffffff`
- Radius: 9999px (full pill)
- Font: 16px / 400 / Noto Sans JP (with 700 emphasis spans)
- Shadow: `0px 8px 0px 0px #0054af` (hard offset, darker blue)
- Use: お近くのお仕事を探す / アプリをインストール CTAs (89px tall)

**Business Primary**
- Background: `#007aff`
- Text: `#ffffff`
- Border: 2px solid `#007aff`
- Radius: 9999px (full pill)
- Padding: 4px 16px 6px
- Font: 16px / 700 / Noto Sans JP
- Use: B2B primary CTA (アカウント開設) on business LP, 38px header size; 72px hero size

**Business Ghost**
- Background: `#ffffff`
- Text: `#007aff`
- Border: 2px solid `#007aff`
- Radius: 9999px (full pill)
- Padding: 4px 16px 6px
- Font: 16px / 700 / Noto Sans JP
- Use: B2B secondary CTA (資料ダウンロード)

**Header Pill**
- Background: `#007aff`
- Radius: 9999px (full pill)
- Font: 14px / 700 / Noto Sans JP
- Use: Sticky-header B2B shortcut (求人担当者さまはこちら), 41px tall

### Tabs

**Age Filter Pill**
- Background: `#eaeaea` (inactive)
- Text: `#212121` (inactive)
- Border: 1px solid `#212121`
- Radius: 999px
- Font: 20px / 700 / Noto Sans JP
- Active: background `#212121`, text `#ffffff`
- Use: Worker-data age segment filter (18歳〜 / 20代 / 30代 / 40代 / 50代〜), 42px tall

### Badges

**NEW!! Sticker**
- Background: `#212121`
- Text: `#ffd700`
- Radius: 99px (circular, 48×48px)
- Font: 12px / 700 / Noto Sans JP
- Use: New-content marker, yellow-on-ink circular sticker

### Cards

**Feature Card**
- Background: `#ffffff`
- Text: `#212121`
- Radius: 25px
- Use: Feature explainer cards (単発で働ける！ / 勤務終了後、即日振り込み) on tinted sections, ~740px wide

**Job Card**
- Background: `#ffffff`
- Text: `#212121`
- Font: 16px / 700 / Noto Sans JP (title)
- Use: Job listing examples with photo, title, and red wage figure (`#ff3b30`)

### Dialogs

**QR App-Download Modal**
- Background: `#ffffff`
- Radius: 16px
- Shadow: `0px 8px 32px 0px rgba(0, 0, 0, 0.24)`
- Use: Desktop QR-code modal for app download — the one soft shadow in the system

---
**Verified:** 2026-06-10
**Tier 1 sources:** https://timee.co.jp/ (worker homepage, live computed styles); https://timee.co.jp/business/ (business LP, live computed styles); https://corp.timee.co.jp/ (corporate site — mission/vision/brand tagline); https://note.com/_yyyyy/n/n5963cb9f10fe (Timee product design manager's official note on design org)
**Tier 2 sources:** none available (getdesign.md/timee — 404 "No designs found"; styles.refero.design/?q=timee — not listed, fuzzy matches only)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Observed steps: 4px, 8px, 16px, 20px, 24px, with ~64px+ between sections
- Buttons are generously padded (24px vertical on hero CTAs) — touch-first sizing carried onto desktop

### Grid & Container
- Single-column, scroll-told story on the worker homepage: hero → example jobs carousel → category grid → worker-data → features → steps → FAQ
- Job examples render as horizontally scrolling card rows (mobile-app pattern reproduced on web)
- Category tiles arrange in a multi-column illustrated grid (倉庫作業, 飲食店, スーパー・コンビニ…)
- Business LP follows a classic B2B rhythm: hero with dual CTA → social proof → reasons → features → job types → repeated CTA bands
- A slide-out global menu uses an asymmetric 48px left-side radius — even navigation chrome is rounded

### Whitespace Philosophy
- **Density with air**: job cards and category tiles are packed (this is a marketplace), but each section breathes with large tinted or white bands between content blocks.
- **The pill needs room**: full-round buttons with hard 8px shadows demand clearance below; the layout consistently reserves that space so shadows never collide with following content.
- **Sections alternate tint**: white and pale grey/yellow bands segment the page instead of divider lines.

### Border Radius Scale
- 16px: modals, medium containers
- 25px: feature cards — the workhorse large-content radius
- 48px: slide-out menu corner
- 99–999px: circular badges, filter chips
- 9999px (full pill): every button

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, tiles, most cards |
| Sticker (Level 1) | `0px 8px 0px 0px #212121` — solid, unblurred | Yellow primary CTAs (with 2px ink border) |
| Sticker Blue (Level 1) | `0px 8px 0px 0px #0054af` — solid, unblurred | Blue app-install CTAs |
| Floating (Level 2) | `0px 8px 32px 0px rgba(0, 0, 0, 0.24)` | QR modal, overlays — the only soft shadow |

**Shadow Philosophy**: Timee's elevation system is essentially binary. Interactive elements don't float — they sit, like die-cut stickers, on a solid offset shadow that matches either the ink outline or a darker shade of the button's own blue. This is comic-panel depth, not material-design depth: no blur, no ambient layers, no shadow ramps. The single soft shadow in the system belongs to the modal layer, where real "above the page" elevation is semantically needed. Everything else stays flat and graphic, separated by tint changes and 2px drawn borders.

## 7. Do's and Don'ts

### Do
- Pair Timee Yellow (`#ffd700`) exclusively with ink (`#212121`) — yellow CTAs always get ink text and a 2px ink border
- Use hard offset shadows (`0px 8px 0px`, zero blur) in ink or `#0054af` under primary pills
- Make every button a full pill (9999px radius)
- Carry all hierarchy with Noto Sans JP weight 700 and size steps
- Use `#007aff` for app-store/app-install actions and for the entire business-surface action layer
- Flash wages and urgency in `#ff3b30`
- Keep big content cards generously rounded (25px) and flat
- Switch the action palette by audience: yellow for workers, blue for business

### Don't
- Don't put white text on yellow — contrast collapses and the brand pairing is yellow+ink
- Don't use blurred or layered soft shadows on buttons — the sticker shadow is solid or absent
- Don't introduce light font weights or tightened letter-spacing — the voice is bold and round
- Don't square off buttons — sharp corners break the toy-like friendliness
- Don't use yellow as a text color on white — it's a surface/accent color, not a type color
- Don't mix the worker yellow into the business LP's action layer — the B2B surface stays blue-led
- Don't replace the iOS-system accent colors (`#007aff` / `#ff3b30`) with custom hues — they anchor the app-native feel

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | Single column; carousels swipe natively; CTAs go full-width |
| Desktop | ≥768px | Wider section containers; QR modal replaces direct app-store deep links; slide-out menu on the right |

### Touch Targets
- Hero CTAs at 82–89px tall — far beyond minimum touch sizing; the desktop site keeps app-scale tap areas
- Filter pills at 42px, header pills at 38–41px
- Job cards are fully tappable with large imagery

### Collapsing Strategy
- The site is mobile-first in spirit at every width: horizontally scrolling job-card rows, app-style pills, and sticky install CTAs persist on desktop
- Desktop adds a QR-code modal (16px radius, soft shadow) so phone users can jump straight to the store
- Section headlines hold weight 700 at all sizes; sizes step down (32px → smaller) without changing voice

### Image Behavior
- Job photos crop into rounded cards; category tiles use flat illustration
- Worker testimonials pair circular avatar photos with bold 17px names
- Hero artwork is illustration/photo collage on yellow-accented bands

## 9. Agent Prompt Guide

### Quick Color Reference
- Brand / hero CTA: Timee Yellow (`#ffd700`) with ink text + 2px ink border
- Text / outlines / shadows: Ink (`#212121`)
- Background: White (`#ffffff`)
- App & business actions: Action Blue (`#007aff`), shadow `#0054af`
- Wage / urgency: Alert Red (`#ff3b30`)
- Inactive chip: `#eaeaea`; neutral grey `#b7b8bc`; business section tint `#f5f5f4`
- Secondary text: `#666666`; tertiary `#999999`

### Example Component Prompts
- "Create a hero CTA: background #ffd700, text #212121 at 20px Noto Sans JP weight 700, 2px solid #212121 border, fully rounded pill (9999px), padding 24px 20px, and a hard offset shadow 0px 8px 0px 0px #212121 with no blur."
- "Build an app-install button: #007aff background, white text, full pill, ~89px tall, hard shadow 0px 8px 0px 0px #0054af. Label in Noto Sans JP with a bold emphasis span."
- "Design an age-filter chip row: pills with 999px radius, 1px solid #212121 border, 20px/700 Noto Sans JP; inactive = #eaeaea background with #212121 text, active = #212121 background with #ffffff text."
- "Make a circular NEW!! badge: 48×48px, #212121 background, #ffd700 text at 12px weight 700, 99px radius."
- "Create a feature card: white background, 25px radius, no shadow, bold 24px Noto Sans JP title in #212121, 16px/400 body, sitting on a pale tinted section."
- "Design a B2B header CTA pair: primary pill #007aff bg / white text / 2px #007aff border, secondary pill white bg / #007aff text / 2px #007aff border, both 38px tall, 16px/700 Noto Sans JP, padding 4px 16px 6px."

### Iteration Guide
1. Yellow is a surface, never a text color: `#ffd700` + `#212121` is the only sanctioned pairing
2. Buttons = pills with hard offset shadows; if it has blur, it's a modal, not a button
3. All hierarchy comes from 700-weight Noto Sans JP and size steps — never add letterspacing or light weights
4. Choose the action color by audience: worker surfaces act in yellow (brand) and blue (app install); business surfaces act only in blue
5. Red `#ff3b30` is informational (wages, urgency), not decorative
6. Big radii everywhere: 16px modal, 25px card, full pill buttons — nothing sharp
7. Keep elevation binary: flat or sticker; reserve the one soft shadow for overlays

## 10. Voice & Tone

Timee's voice is energetic, plain-spoken, and benefit-first — the register of a friendly poster in a station corridor rather than an HR document. Headlines promise outcomes in one breath (work today, get paid today), numbers are concrete ("1,340万人が利用"), and exclamation marks are used without embarrassment. The worker surface speaks to "スキマ時間" (pockets of spare time) like a friend suggesting an easy win; the business surface tightens into crisp, confident B2B claims (today's workforce, found instantly) while keeping the same short, declarative sentences. Both sides avoid jargon: no 人材ソリューション-speak, no abstract empowerment language — just time, work, and money stated plainly.

| Context | Tone |
|---|---|
| Worker homepage hero | Upbeat, immediate. "スキマ時間にすぐ働ける！" — benefit + speed in one line. |
| Job listings | Concrete and welcoming: ☆未経験者歓迎☆, task descriptions in plain verbs. |
| Feature explainers | Reassuring, step-by-step. "勤務終了後、即日振り込み" — mechanism stated flat. |
| Business LP hero | Confident, outcome-led: "タイミーなら、今日の働き手がすぐ見つかる". |
| Business feature copy | Efficient B2B clarity: 長期採用無料, 最短即日でマッチング — claim plus qualifier. |
| Corporate / brand | Warm and aspirational: "はたらくに"彩り"を。" — poetic register reserved for brand statements. |

**Voice samples:**
- "スキマ時間にすぐ働ける！1,340万人が利用している単発バイトアプリ" — worker homepage title (live, 2026-06-10)
- "タイミーなら、今日の働き手がすぐ見つかる" — business LP H1 (live, 2026-06-10)
- "タイミーは、「働きたい時間」と「働いて欲しい時間」をマッチングするスキマバイト" — business LP H2 (live, 2026-06-10)
- "はたらくに"彩り"を。" — brand tagline, corp.timee.co.jp (2026-06-10)

**Forbidden phrases.** Stiff HR/staffing jargon (人材ソリューション, 戦略的人材活用). Apologetic hedging. Long conditional sentences burying the benefit. Hype without numbers — every big claim carries a concrete figure or mechanism (worker count, same-day pay, free posting).

## 11. Brand Narrative

Timee was founded in 2017 by **Ryo Ogawa (小川嶺)**, born 1997, while he was still a student at Rikkyo University's College of Business. The company began as an apparel-related venture, but Ogawa pivoted within a year and launched the Timee app in **August 2018** around one sharp observation: hourly work in Japan was gated by resumes, interviews, and month-later paychecks, while shops and warehouses were chronically short-staffed *today*. Timee removed all three barriers at once — no resume, no interview, and wages paid the same day the shift ends ("働きたい時間と働いてほしい時間をマッチングする"). The model scaled into Japan's defining スキマバイト (gap-time work) platform, with over 13.4 million registered workers, and in **July 2024** Timee listed on the Tokyo Stock Exchange Growth Market, making the then-27-year-old Ogawa one of Japan's youngest founders of a listed unicorn-scale company.

The company's stated purpose stack is explicit: the mission **「一人ひとりの時間を豊かに」** (enrich each person's time), the brand tagline **「はたらくに"彩り"を。」** (bring color to working), and **VISION 2030: 「積み重ねた『信頼』が報われる社会をつくる」** (build a society where accumulated trust is rewarded). That last line is load-bearing — Timee's marketplace literally runs on accumulated trust: workers build review histories and badges instead of resumes, and good track records unlock better shifts. The design system's cheerfulness is therefore not decoration; the yellow, the stickers, and the game-like pills express the thesis that work picked up in spare time should feel light, colorful, and rewarding rather than bureaucratic.

Internally, Timee's product design organization has professionalized fast: a dedicated product design group was organized in 2024 under manager Yasuhiro Yokota, designers are embedded in cross-functional squads, every product designer writes SQL ("DesignDataOps"), and a mobile design system is under active implementation — the official designer notes state the team's aim as making design "事業に適切な影響を再現性をもって提供できる状態" (able to deliver appropriate business impact reproducibly). What Timee refuses: the gray institutional aesthetics of the staffing industry, and friction presented as diligence. What it embraces: instant mechanisms stated plainly, app-native conventions (iOS blue and red as functional colors), and a pop-graphic warmth that makes a labor marketplace feel like good news.

## 12. Principles

1. **Zero friction is the product.** No resume, no interview, same-day pay — every interface decision should remove a step, not add reassurance theater. *UI implication:* CTAs are huge (82–89px), one-action-per-screen, and every flow leads to the app store or signup in one tap.
2. **Trust is visible and accumulated.** VISION 2030 makes trust the currency of the marketplace. *UI implication:* review counts, badges, and concrete numbers (1,340万人) are surfaced prominently; claims always ship with figures.
3. **Work should look light, not bureaucratic.** The tagline はたらくに"彩り"を。 commits the brand to color and play. *UI implication:* yellow surfaces, sticker shadows, pill geometry, and illustrated category tiles — never gray-suit staffing aesthetics.
4. **Speak the device's language.** Timee lives on smartphones, so the web borrows iOS-system blue and red for actions and alerts. *UI implication:* `#007aff` for installs/actions, `#ff3b30` for wages — platform-native cues over invented hues.
5. **Two audiences, one geometry.** Workers get yellow energy; businesses get blue efficiency — but pills, borders, and type stay identical. *UI implication:* swap only the action palette between B2C and B2B surfaces; never fork the component shapes.

## 13. Personas

*Personas below are fictional archetypes informed by Timee's publicly stated user segments (side-job workers, homemakers, students, seniors re-entering work, and B2B store operators), not real individuals.*

**Sota, 25, Tokyo.** Junior office worker who picks up warehouse or event shifts on free weekends to pad savings. Chooses shifts by pay, distance, and whether the listing says 未経験歓迎. Loves that money lands the same evening; would drop any app that asked him to upload a resume.

**Mika, 43, Saitama.** Homemaker returning to work in spare daytime hours between school runs. Started with one supermarket stocking shift; her accumulated good reviews now get her preferred picks. The age-band data section (40代 active!) is what convinced her this app was "for people like me."

**Kenji, 38, Osaka.** Restaurant manager who loses staff to no-shows on Friday nights. Uses Timee's business dashboard to post a shift at noon and have a vetted worker by evening. Cares about review histories and the 長期採用無料 path for converting good spot workers into part-timers.

**Yui, 20, Fukuoka.** University student stacking café and cinema shifts around classes. Treats the app half like a job board, half like an adventure catalog — the magazine's "潜入" articles convinced her to try a hotel shift. Screenshot-shares her badge milestones.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no jobs nearby)** | White canvas, friendly illustration, one bold ink line ("近くのお仕事が見つかりませんでした" — illustrative), and a yellow pill CTA to widen the search radius. Never a bare gray void. |
| **Empty (no shift history)** | Encouraging first-step framing: bold 700 headline + blue app CTA. The first shift is the onboarding goal. |
| **Loading (job feed)** | Skeleton cards at final card dimensions in `#eaeaea`, rounded to match (16–25px). Shimmer subtle; no spinners over content. |
| **Loading (action submit)** | Button label swaps to progress state; pill shape and shadow held so the layout doesn't jump. |
| **Error (network)** | Plain-language ink message + retry pill. No error codes at the user; tone stays calm, never alarming. |
| **Error (shift conflict / full)** | Specific cause stated ("この時間はすでに別のお仕事に申し込んでいます" — illustrative) with the nearest alternative action offered. |
| **Error (form validation)** | Field-level message in `#ff3b30`, 14px, below the field; the red is reserved for genuinely blocking issues. |
| **Success (payment received)** | The signature moment — same-day pay confirmation celebrated with yellow accent and bold figures; the wage amount in red/bold is the hero. |
| **Success (application sent)** | Instant confirmation with next steps (what to bring, when to check in) — reassurance over celebration. |
| **Skeleton** | `#eaeaea` blocks with the system's rounded geometry; pills skeleton as pills, never as rectangles. |
| **Disabled** | Fill drops to `#eaeaea` with `#999999` text; hard shadow removed — a disabled sticker lies flat. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | State commits, selection |
| `motion-fast` | 120ms | Button press, chip toggle |
| `motion-standard` | 200–250ms | Modal open, menu slide-in, carousel snap |
| `motion-slow` | 400ms | Section reveals on scroll (sparing) |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-pop` | `cubic-bezier(0.34, 1.2, 0.64, 1)` | Sticker press-and-release on pills — a small, toy-like overshoot |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Modals, menus, carousels |
| `ease-exit` | `cubic-bezier(0.4, 0, 1, 1)` | Dismissals |

**Signature motions.**

1. **Sticker press.** On press, pill buttons translate down toward their hard shadow (shadow shrinks from 8px toward 0), then release with `ease-pop` — the offset shadow is literally the travel distance. This is the system's defining micro-interaction (illustrative synthesis of the hard-shadow geometry).
2. **Card carousel glide.** Job-example rows scroll horizontally with native momentum; snap points per card, `motion-standard`.
3. **Slide-out menu.** The 48px-rounded global menu slides from the right at `motion-standard`, content dimmed behind `rgba(0,0,0,0.4)`.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, the sticker press collapses to an instant state change and scroll reveals are disabled; the offset shadows remain static cues.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Verified via live inspect + WebFetch/WebSearch (2026-06-10):
- https://timee.co.jp/ — live homepage: title "スキマ時間にすぐ働ける！1,340万人が利用している単発バイトアプリ";
  all §1–9 computed-style claims (see .verification.md).
- https://timee.co.jp/business/ — live business LP: H1 "タイミーなら、今日の働き手がすぐ見つかる",
  H2 "タイミーは、「働きたい時間」と「働いて欲しい時間」をマッチングするスキマバイト",
  features 長期採用無料 / 最短即日でマッチング.
- https://corp.timee.co.jp/ — mission "一人ひとりの時間を豊かに", VISION 2030
  "積み重ねた『信頼』が報われる社会をつくる", brand tagline "はたらくに"彩り"を。".
- https://note.com/_yyyyy/n/n5963cb9f10fe — Timee product design manager Yasuhiro Yokota
  (joined Feb 2024) on organizing the product design team; quoted aim about reproducible
  business impact through design.
- WebSearch (Nikkei Business, Toyo Keizai, Rikkyo University alumni page): founder Ryo Ogawa
  born 1997, founded 2017 at Rikkyo University (apparel pivot), Timee service launched
  August 2018, TSE Growth listing July 2024 (age 27); designers-write-SQL /
  DesignDataOps from note.com/_yyyyy articles.

Illustrative content (not directly sourced): §14 state copy examples marked
"(illustrative)"; §15 easing tokens and the "sticker press" interaction are editorial
synthesis from the measured hard-shadow geometry, marked as such.

Personas (§13) are fictional archetypes informed by Timee's publicly presented
user segments (homepage worker-data section: 18歳〜50代〜, 会社員/専業主婦/学生;
business LP operator audience). They do not refer to real people.
-->
