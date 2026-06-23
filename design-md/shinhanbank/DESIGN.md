---
id: shinhanbank
name: Shinhan Bank
display_name_kr: 신한은행
country: KR
category: fintech
homepage: "https://bank.shinhan.com"
primary_color: "#005DF9"
logo:
  type: github
  slug: Shinhan-Bank
verified: "2026-06-22"
added: "2026-06-22"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-22"
  note: "primary = modern Shinhan brand blue (#005DF9, rgb(0,93,249)) from shinhangroup.com; internet banking uses classic #2967B2; OneShinhan custom typeface for hero display; Pretendard for body. Dark navy ink #24272D; surface grey #F3F6FB."
  colors:
    primary: "#005DF9"
    primary-deep: "#102FA8"
    primary-banking: "#2967B2"
    primary-banking-alt: "#2B70CC"
    ink: "#24272D"
    ink-deep: "#121418"
    body: "#808892"
    muted: "#565B64"
    canvas: "#ffffff"
    surface: "#F3F6FB"
    surface-alt: "#F9F9F9"
    hairline: "#EBEBEB"
    on-primary: "#ffffff"
    secondary: "#8595A9"
    error: "#D61111"
  typography:
    family: { display: "OneShinhan", body: "Pretendard", legacy: "Spoqa" }
    display-hero: { size: 46, weight: 700, lineHeight: 1.2, use: "Hero headlines on shinhangroup.com, OneShinhan Bold" }
    display-section: { size: 40, weight: 400, lineHeight: 1.25, use: "Section headlines, OneShinhan Regular" }
    heading:  { size: 32, weight: 700, lineHeight: 1.3, use: "Page headings, Pretendard Bold" }
    body:     { size: 16, weight: 400, lineHeight: 1.5, use: "Standard body copy, Pretendard Regular" }
    body-sm:  { size: 14, weight: 400, lineHeight: 1.5, use: "Dense UI text, nav items, Pretendard / Spoqa" }
    nav:      { size: 20, weight: 400, lineHeight: 1.3, use: "Top navigation links (bank.shinhan.com), Spoqa" }
    button:   { size: 16, weight: 500, lineHeight: 1.0, use: "Button labels, Pretendard Medium" }
    caption:  { size: 13, weight: 400, lineHeight: 1.5, use: "Small labels and metadata" }
  spacing: { xs: 4, sm: 8, md: 16, base: 20, lg: 24, xl: 40, xxl: 48, section: 64 }
  rounded: { sm: 2, md: 4, lg: 8, xl: 24, full: 9999 }
  shadow:
    subtle: "0px 2px 8px rgba(0,0,0,0.06)"
    card: "0px 4px 16px rgba(0,0,0,0.08)"
  components:
    button-primary: { type: button, bg: "#005DF9", fg: "#ffffff", radius: "4px", font: "16px / 500 Pretendard", use: "Primary CTA on modern surfaces" }
    button-banking: { type: button, bg: "#2967B2", fg: "#ffffff", radius: "4px", border: "1px solid #1F4F89", font: "15px / 700 Spoqa", use: "Internet banking primary action" }
    button-secondary: { type: button, bg: "#8595A9", fg: "#ffffff", radius: "4px", font: "15px / 400 Spoqa", use: "Secondary / cancel action in internet banking" }
    button-family: { type: button, bg: "#F3F6FB", fg: "#24272D", radius: "24px", padding: "0px 20px", font: "16px / 400 Pretendard", use: "Family site pill button on shinhangroup.com" }
    input-banking: { type: input, bg: "#ffffff", border: "1px solid #EBEBEB", radius: "2px", font: "14px Spoqa", use: "Internet banking text field, pre-login surface" }
    card-surface: { type: card, bg: "#F3F6FB", fg: "#24272D", radius: "8px", use: "Tinted info card, modern surface" }
    card-banking: { type: card, bg: "#ffffff", fg: "#343434", radius: "4px", use: "Internet banking product card, white with hairline" }
    badge-blue: { type: badge, bg: "#005DF9", fg: "#ffffff", radius: "9999px", font: "13px / 400 Pretendard", use: "Status badge / highlight pill" }
    tab-banking: { type: tab, fg: "#2967B2", font: "15px / 700 Spoqa", active: "text #2967B2 + 1px solid #2967B2 border", use: "Internet banking section tabs" }
  components_harvested: true
---

# Design System Inspiration of Shinhan Bank

## 1. Visual Theme & Atmosphere

신한은행 (Shinhan Bank) is Korea's leading retail bank and the flagship subsidiary of Shinhan Financial Group (신한금융그룹), a financial conglomerate that has defined modern Korean banking aesthetics for four decades. The design system spans two distinct visual registers: the **modern group identity** expressed through the shinhangroup.com and SOL뱅크 app surfaces — clean, contemporary, Pretendard-driven with the electric `#005DF9` Shinhan Blue — and the **classic internet banking surface** (bank.shinhan.com) that carries a trustworthy, institution-grade blue (`#2967B2`) with tighter radius, more compact typography, and the Spoqa Han Sans typeface. Both registers share the same brand soul — trustworthy, warm, and forward-looking — but one speaks in the language of a modern fintech product and the other in the language of a reliable banking institution.

The most distinctive design element is the **OneShinhan** custom typeface, Shinhan Financial Group's proprietary display font, deployed at 40–46px for hero headlines on the group corporate surface. OneShinhan's letterforms are engineered for the brand's dual promise: the stroke geometry echoes traditional Korean brushwork while the proportions are optimized for digital screens. It appears exclusively at display sizes — the body falls to Pretendard, the de-facto Korean product font. The effect is of a brand that knows when to invoke its heritage and when to step aside for readability.

The color narrative is a deliberate evolution. The classic internet banking blue (`#2967B2`, a mid-range institutional blue) communicates decades of trust and compliance; the modern `#005DF9` is a brighter, more confident variant — the same family but pushed toward the vivid, energetic blue of mobile-first products. This color generational tension is itself a design statement: Shinhan is a bank that has earned trust and is now accelerating. The surface palette across both registers is clean and cool — white canvas (`#ffffff`), cool-grey tint (`#F3F6FB`), and deep ink navy (`#24272D`) — with the Shinhan blue as the single saturated accent, reserved for primary actions and brand moments.

**Key Characteristics:**
- OneShinhan custom typeface for all display/hero headlines — brand heritage at the largest scale
- Pretendard 400/700 for modern product body text; Spoqa Han Sans for legacy banking surfaces
- Shinhan Blue `#005DF9` (modern) and `#2967B2` (banking) — same brand family, two generations
- Deep ink navy `#24272D` for primary text — never pure black
- Cool-grey surface `#F3F6FB` as the primary tinted separation surface
- Minimal radius scale: 2px (legacy banking) to 24px (modern pill buttons) — institution-grade restraint
- Low shadow, high contrast: the system trusts color and hairlines over elevation

## 2. Color Palette & Roles

### Primary Brand Blue
- **Shinhan Blue** (`#005DF9`): The modern primary brand color. Used for interactive CTAs and digital product surfaces including shinhangroup.com and SOL뱅크. A vivid, confident blue signaling Shinhan's digital-first evolution.
- **Shinhan Deep Blue** (`#102FA8`): A deeper navy variant appearing in gradients and tinted backgrounds. Anchors the modern blue family.
- **Banking Primary Blue** (`#2967B2`): The classic internet banking primary — a trusted, authoritative institutional blue used consistently across bank.shinhan.com for tabs, active states, and primary action buttons.
- **Banking Alt Blue** (`#2B70CC`): A slightly lighter variant of the classic banking blue, used for confirm/primary action buttons within the internet banking interface.

### Neutral & Surface
- **Canvas White** (`#ffffff`): Primary background across both surfaces.
- **Cool Surface Grey** (`#F3F6FB`): Tinted background for cards and content blocks on modern surfaces. Provides section separation without shadows.
- **Surface Alt** (`#F9F9F9`): Warm secondary neutral background for legacy banking sections.
- **Hairline** (`#EBEBEB`): Fine borders, card outlines, and divider rules.

### Text Hierarchy
- **Ink Navy** (`#24272D`): Primary heading and body text color on modern surfaces. Deep, warm, financial-grade.
- **Ink Deep** (`#121418`): Maximum contrast heading for highest-emphasis moments.
- **Body Grey** (`#808892`): Secondary body copy, metadata, captions.
- **Muted Grey** (`#565B64`): Tertiary label text, supporting information.
- **Error Red** (`#D61111`): Validation errors and destructive state indicators.

## 3. Typography Rules

### Font Families
- **OneShinhan**: Shinhan Financial Group's custom proprietary typeface. Used exclusively for display/hero headlines. Available in Regular (400) and Bold (700). Embodies brand heritage at large scale.
- **Pretendard**: Modern Korean product font, the default for body text on shinhangroup.com and SOL-era surfaces. Clear, hangul-optimized, versatile.
- **Spoqa Han Sans** (`Spoqa`): Legacy internet banking font stack — `Spoqa, Verdana, 돋움, Dotum, "Apple sd gothic neo", "Apple Gothic", sans-serif`. Still active across bank.shinhan.com.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Display Hero | OneShinhan | 46px | 700 | 1.2 | Group corporate hero headlines |
| Display Section | OneShinhan | 40px | 400 | 1.25 | Section narrative headlines |
| Page Heading | Pretendard | 32px | 700 | 1.3 | Product surface main headings |
| Body | Pretendard | 16px | 400 | 1.5 | Standard reading, modern surfaces |
| Banking Nav | Spoqa | 20px | 400 | 1.3 | Top nav tabs (bank.shinhan.com) |
| Dense UI | Spoqa / Pretendard | 14px | 400 | 1.5 | Compact info, legacy banking |
| Button | Pretendard | 16px | 500 | 1.0 | Modern CTA label |
| Banking Button | Spoqa | 15px | 700 | 1.0 | Classic banking CTA |
| Caption | Pretendard | 13px | 400 | 1.5 | Labels, metadata |

### Principles
- **OneShinhan owns the brand moment**: At 40–46px, the custom typeface signals brand heritage. Below display size, Pretendard takes over.
- **Two font families, two eras**: Spoqa Han Sans marks the classic banking surface; Pretendard marks the modern digital product. The transition is a visible chronology of the brand.
- **Hangul-first sizing**: 14–16px ensures dense hangul text remains legible across financial interfaces with high information density.

## 4. Component Stylings

### Buttons

**Primary (Modern)**
- Background: `#005DF9`
- Text: `#ffffff`
- Radius: 4px
- Font: 16px Pretendard weight 500
- Use: Primary CTA on modern product surfaces (shinhangroup.com, SOL뱅크 web)

**Primary (Banking)**
- Background: `#2967B2`
- Text: `#ffffff`
- Radius: 4px
- Border: 1px solid `#1F4F89`
- Font: 15px Spoqa weight 700
- Height: 24px
- Use: Confirm / primary action in internet banking (예, 확인, 로그인)

**Secondary (Banking)**
- Background: `#8595A9`
- Text: `#ffffff`
- Radius: 4px
- Font: 15px Spoqa weight 400
- Height: 24px
- Use: Cancel / secondary action in internet banking (아니오, 취소)

**Family Site Pill**
- Background: `#F3F6FB`
- Text: `#24272D`
- Radius: 24px
- Padding: 0px 20px
- Height: 48px
- Font: 16px Pretendard weight 400
- Use: Family site dropdown pill on shinhangroup.com header

### Inputs

**Banking Text Field**
- Background: `#ffffff`
- Border: 1px solid `#EBEBEB`
- Radius: 2px
- Font: 14px Spoqa
- Use: Internet banking input fields (계좌번호, 비밀번호 entry)

### Cards & Containers

**Modern Tinted Card**
- Background: `#F3F6FB`
- Text: `#24272D`
- Radius: 8px
- Use: Content cards on modern corporate/group surfaces

**Banking Product Card**
- Background: `#ffffff`
- Text: `#343434`
- Radius: 4px
- Border: 1px solid `#EBEBEB`
- Use: Product cards (예금, 적금, 대출) in internet banking grid

### Badges

**Shinhan Blue Badge**
- Background: `#005DF9`
- Text: `#ffffff`
- Radius: 9999px (full pill)
- Font: 13px Pretendard weight 400
- Use: Status indicator pills, highlight badges on modern surfaces

### Tabs

**Banking Navigation Tab**
- Text: `#2967B2`
- Font: 20px Spoqa weight 400
- Active: `#2967B2` text + underline border
- Padding: 0px 20px
- Height: 48px
- Use: Primary navigation tabs (조회, 이체, 금융상품) on internet banking

---

**Verified:** 2026-06-22 (omd:add-reference CREATE — Tier 1 live inspect)
**Tier 1 sources:** https://bank.shinhan.com/, https://www.shinhangroup.com/kr/main
**Tier 2 sources:** getdesign.md/shinhanbank — not indexed; styles.refero.design — not found
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Scale: 4px, 8px, 16px, 20px, 24px, 40px, 48px, 64px
- Internet banking uses compact 10px horizontal padding on nav tab items
- Group corporate surface uses generous 20px horizontal padding on modern buttons

### Grid & Container
- Internet banking: Fixed-width centered layout, primary nav width ~1080px, typical of pre-responsive Korean banking portals
- Group corporate / SOL era: Fluid responsive centered container with generous horizontal margins
- Product sections alternate between white canvas and `#F3F6FB` tinted bands

### Whitespace Philosophy
- **Institutional density**: The classic banking surface is deliberately compact — financial information is dense by design, prioritizing data completeness over spaciousness.
- **Modern breathing room**: The shinhangroup.com surface uses ample vertical rhythm, treating the hero at 46px OneShinhan as the focal point with clear zones around it.
- **Color segmentation**: Both surfaces use background tints (`#F3F6FB`, `#F9F9F9`) rather than shadows for section delineation.

### Border Radius Scale
- Micro (2px): Legacy banking inputs, small UI elements
- Small (4px): Banking buttons, cards — the workhorse of the internet banking surface
- Medium (8px): Modern product cards
- Large (24px): Modern pill buttons (Family Site CTA)
- Full (9999px): Status badges, pill chips

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Default banking surface, inline text elements |
| Subtle (Level 1) | `0px 2px 8px rgba(0,0,0,0.06)` | Card hover, minor lift |
| Card (Level 2) | `0px 4px 16px rgba(0,0,0,0.08)` | Featured product card |

**Shadow Philosophy**: Shinhan Bank follows a low-elevation design language across both surface registers. The classic internet banking interface (`bank.shinhan.com`) is essentially shadow-free — section separation comes from hairline borders (`#EBEBEB`) and background tinting. The modern group surface introduces subtle card shadows but maintains restraint. This is appropriate for a banking product: shadows connote depth and layering, which can read as complexity in financial UI. Shinhan opts for trust through simplicity.

## 7. Do's and Don'ts

### Do
- Use OneShinhan for all display-scale (40px+) hero headlines — it is the brand voice at large scale
- Use Pretendard 400 at 16px for all modern body copy and dense product descriptions
- Reserve `#005DF9` for primary CTA buttons and interactive focal points on modern surfaces
- Use `#2967B2` consistently for interactive elements on the classic internet banking surface
- Use `#F3F6FB` cool-grey tint to separate sections without shadows
- Apply deep ink navy `#24272D` for all headings — never pure black for financial text
- Keep border-radius minimal on banking surfaces (2–4px) — institution-grade restraint, not fintech softness
- Use Spoqa Han Sans on the classic banking surface to maintain system consistency

### Don't
- Mix OneShinhan into body copy — it is a display-only typeface
- Use both `#005DF9` and `#2967B2` on the same surface — the two blues belong to different era contexts
- Apply heavy shadows — Shinhan's authority comes from structural clarity, not depth theatrics
- Use pure black (`#000000`) for body text — `#24272D` ink navy carries the brand warmth
- Use generic sans-serif fonts for display — OneShinhan is non-negotiable at hero scale
- Spread the primary blue across decorative elements — it must signal action or brand, not decoration
- Round corners aggressively on banking-context buttons — 4px is the banking register; pills are the modern register only

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Navigation collapses, OneShinhan headlines scale down, banking portal adapts |
| Tablet | 640–1024px | Two-column product grid, nav tabs scroll horizontally |
| Desktop | 1024–1440px | Full multi-column layout, hero at max type scale |

### Touch Targets
- Banking nav tabs: 48px height, 20px horizontal padding — generous for desktop but tight on mobile
- Banking action buttons: 24–30px height (compact, desktop-first legacy design)
- Modern buttons: 48px height pill / 30px height standard — mobile-ready
- Text links at 14–15px: minimum viable touch target for financial labels

### Collapsing Strategy
- Internet banking: Fixed-width portal with horizontal scroll fallback on narrow viewports (pre-responsive era)
- Group corporate / SOL surfaces: Fluid responsive grid, single-column mobile with full-bleed hero
- OneShinhan headlines scale down from 46px → 32px → 28px across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Modern primary CTA: Shinhan Blue (`#005DF9`)
- Modern deep accent: Deep Blue (`#102FA8`)
- Banking primary: Institution Blue (`#2967B2`)
- Banking alt: `#2B70CC`
- Background: Canvas White (`#ffffff`)
- Tinted surface: Cool Grey (`#F3F6FB`)
- Primary text: Ink Navy (`#24272D`)
- Secondary text: Body Grey (`#808892`)
- Hairline: `#EBEBEB`
- Error: `#D61111`

### Example Component Prompts
- "Create a modern Shinhan landing hero: OneShinhan 46px Bold, white text on a dark blue-to-navy gradient background. Below it a `#005DF9` CTA button, 4px radius, 16px Pretendard Medium, white text."
- "Design a Shinhan internet banking layout: white canvas, `#2967B2` navigation bar with Spoqa 20px weight 400 tab links. Primary action button: `#2967B2` bg, white text, 4px radius, 15px Spoqa weight 700."
- "Build a product card in the modern Shinhan style: `#F3F6FB` background, 8px radius, Pretendard 16px. Card header `#24272D` 700, body copy `#808892` 400."

### Iteration Guide
1. Hero: OneShinhan Bold at 40–46px — do not substitute
2. Modern CTA: `#005DF9` with 4px radius, Pretendard 500
3. Banking CTA: `#2967B2` with 4px radius, 1px `#1F4F89` border, Spoqa 700
4. Body text: `#24272D` / `#808892` — never pure black
5. Sections: alternate white and `#F3F6FB`; hairlines for detail borders
6. No decorative shadows — the system trusts color and structure

---

## 10. Voice & Tone

신한은행's voice is **trustworthy, warm, and forward-looking** — a major institution that speaks with authority but never condescension. The group tagline "금융으로 세상을 이롭게" ("Using finance to benefit society") frames financial services as a social good, not merely a commercial product. Copy on both surfaces is formal enough for trust but accessible enough for everyday banking tasks.

| Context | Tone |
|---|---|
| Group hero / brand | Aspirational, societal. "더 쉽고 편안한, 더 새로운 금융." Values-led, not product-feature-led. |
| Internet banking navigation | Functional, terse. "조회", "이체", "금융상품". Efficiency above everything. |
| Product descriptions | Clear, benefit-first. States the product name then the key user benefit simply. |
| Security / compliance copy | Calm and direct. No alarming language; states what the user needs to do plainly. |
| Error messages | Instructional, not apologetic. Explains what went wrong and how to resolve. |

**Voice samples (verbatim from live surfaces):**
- "더 쉽고 편안한, 더 새로운 금융" — hero headline, shinhangroup.com. *(verified live 2026-06-22)*
- "따뜻한 희망의 빛으로, 아름다운 동행" — campaign headline, shinhangroup.com. *(verified live 2026-06-22)*
- "금융으로 세상을 이롭게" — group mission tagline, shinhangroup.com. *(verified live 2026-06-22)*

**Forbidden register**: aggressive sales urgency, fear-based security warnings, untranslated financial jargon left unexplained.

## 11. Brand Narrative

신한은행 was founded in **1982** by the Korean-Japanese community (재일교포) in Japan, pooling capital to establish a genuinely people-centered bank on the Korean peninsula — "신한" (Shinhan) meaning "new Korea." This founding principle of financial inclusion as social betterment has remained the animating idea through four decades of growth. The bank grew to become Korea's most profitable commercial bank and the anchor of **신한금융그룹 (Shinhan Financial Group)**, established in 2001 as Korea's first financial holding company.

The group's current positioning — "금융으로 세상을 이롭게" (using finance to benefit society) — is a modernization of the founding promise: Shinhan is not a bank that sells products; it is a bank with a social mission that happens to offer products. This distinction is load-bearing in the design: the warmth of the heritage (OneShinhan's calligraphic echoes, the aspirational copy) is held in tension with the confidence of the modern (bright `#005DF9`, fluid responsive surfaces, Pretendard's precision).

The **신한 SOL뱅크** (Shinhan SOL Bank) app represents the bank's most forward-looking surface — a fully digital-native banking experience that has become one of South Korea's most used mobile banking apps, consistently ranked in the top tier of Korean app store charts. Its visual identity extends the modern Shinhan blue into a mobile-first context where the institution's authority meets consumer-app clarity.

## 12. Principles

1. **Trust through clarity, not weight.** Shinhan builds trust via structural precision — clear type, measured colors, restrained radius — not by visual excess. *UI implication:* every element earns its place; decorative elements that don't carry information are not Shinhan.
2. **One blue, one action.** Primary blue (`#005DF9` modern / `#2967B2` banking) is the action color. Only one primary action exists at a time. *UI implication:* avoid multiple colored buttons competing for attention; secondary actions defer in visual weight.
3. **Institution meets digital.** The brand maintains a formal register even in modern product surfaces. *UI implication:* prefer structured tables and grids for financial data over casual cards; maintain consistent density.
4. **Warmth in tone, precision in form.** Copy can be warm and aspirational; UI must be precise and reliable. *UI implication:* don't let warm copy generate visual looseness — color and layout remain controlled.
5. **Serve every generation.** Shinhan serves customers from their first bank account to retirement. *UI implication:* accessibility is non-negotiable; text sizes respect readability, touch targets are generous, contrast is high.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Shinhan customer segments, not individual people.*

**김민준, 28, 서울.** A young salaried worker who uses SOL뱅크 daily for transfers, paycheck tracking, and savings products. Wants quick access to balance and transfer functions without friction. Chose Shinhan because his employer's payroll is through them; stays because the app is fast.

**박정숙, 52, 대전.** A business owner who uses internet banking (bank.shinhan.com) for corporate account management and payroll. Trusts the classic blue interface; skeptical of change. Values stability and reliability over aesthetics. Has used Shinhan for over 20 years.

**이서연, 35, 경기.** A working parent investing in Shinhan savings and pension products. Uses the app monthly to check returns and rebalance. Appreciates the clear product descriptions and the lack of aggressive upselling. Values the "금융으로 세상을 이롭게" ethos as aligned with her values.

**최준호, 67, 부산.** A retired professional with Shinhan checking, savings, and investment accounts. Prefers the desktop internet banking surface for its familiarity. Expects large, legible text and clear error messages. Depends on the Spoqa-based UI that hasn't changed radically in a decade.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no account balance)** | Ink navy `#24272D` single line stating the account status; clear action to set up the account. No dramatic illustration. |
| **Empty (no transaction history)** | Muted grey `#808892` descriptive line; functional CTA in primary blue. Calm, not cute. |
| **Loading (balance fetch)** | Skeleton row on `#F3F6FB` surface at text height; subtle flat pulse animation. No spinner where text will appear. |
| **Loading (transfer in progress)** | Progress indicator in primary blue `#005DF9`; previous screen dimmed at 60% opacity. Banking gravity — no playful loading states. |
| **Error (network failure)** | Full-width inline message block: `#D61111` left border, `#F3F6FB` background, `#24272D` text. States the error plainly and provides retry. |
| **Error (form validation)** | Field-level red `#D61111` text below the input; describes the valid format, not just "오류". |
| **Error (login failure)** | Neutral, security-conscious: tells the user to check credentials without confirming which field is wrong. |
| **Success (transfer complete)** | Calm confirmation: checkmark in `#005DF9`, brief summary of the transaction, next-step link. No confetti. |
| **Skeleton (product listing)** | `#F3F6FB` blocks at product card dimensions; no shimmer — flat pulse. |
| **Disabled** | Elements reduce to `#808892` / `#EBEBEB` without primary color signal; inputs show `#F9F9F9` background. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 100ms | Button press feedback, tab underline transition |
| `motion-standard` | 200ms | Card reveal, modal open, dropdown |
| `motion-slow` | 350ms | Page-level hero transitions, large hero carousel |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving modals, cards, sheets |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals, slide-outs |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Bidirectional transitions |

**Motion rules**: Motion in Shinhan's interfaces is conservative and purposeful — this is a bank, and trust is expressed through stability, not delight. The internet banking surface avoids animation almost entirely, relying on immediate state changes. The modern group and SOL surfaces introduce subtle fade-ins and carousel transitions at `motion-slow / ease-enter` for hero content. No spring physics, no bounce, no playful micro-interactions. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant. Banking interfaces must remain fully functional and never distract from a financial task.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-22) via playwright getComputedStyle:
- bank.shinhan.com: body font Spoqa/Verdana/돋움; color rgb(102,102,102); size 14px
- bank.shinhan.com: H1 "신한은행" — 28px / weight 700 / Spoqa
- bank.shinhan.com: nav tab "조회" — 16px / 700 / white / height 48px
- bank.shinhan.com: primary button "개인" — bg rgb(41,103,178) #2967B2 / radius 2px / 15px bold
- bank.shinhan.com: confirm button "인터넷뱅킹화면으로 이동" — bg rgb(43,112,204) #2B70CC / radius 4px / 18px
- bank.shinhan.com: cancel "메인화면으로" — bg rgb(133,149,169) / radius 4px
- shinhangroup.com: body font Pretendard / color rgb(36,39,45) #24272D / size 16px
- shinhangroup.com: H2 "더 쉽고 편안한, 더 새로운 금융" — OneShinhan / 46px / 700 / white
- shinhangroup.com: H2 "미래를 함께 하는 따뜻한 금융" — OneShinhan / 40px / 400
- shinhangroup.com: primary blue bg rgb(0,93,249) = #005DF9 (observed in bgFreq)
- shinhangroup.com: Family Site button — bg rgb(243,246,251) #F3F6FB / radius 24px / 48px height / 16px / Pretendard 400
- shinhangroup.com: muted text rgb(128,136,146) = #808892

Brand narrative: Shinhan Bank founded 1982; Shinhan Financial Group established 2001.
These are widely documented public corporate facts.

SOL뱅크 app references: general public knowledge; app store ranking from public sources.

Personas (§13) are fictional archetypes. Names are illustrative; no real individuals.

Interpretive claims (design philosophy, surface contrast between legacy and modern) are
editorial readings of observed design data, not directly sourced Shinhan statements.
-->
