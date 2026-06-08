---
id: ubie
name: Ubie
country: JP
category: healthcare
homepage: "https://ubie.life"
primary_color: "#3959cc"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=ubie.life&sz=128"
verified: "2026-06-06"
added: "2026-06-06"
omd: "0.1"
ds:
  name: Ubie Vitals
  url: "https://vitals.ubie.life"
  type: system
  description: Ubie's open-source design system — tokens, 25+ components, icons, and UX writing for healthcare products.
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#3959cc"
    primary-hover: "#304cad"
    accent: "#27cc91"
    accent-hover: "#21ad7b"
    canvas: "#ffffff"
    text-main: "#32353a"
    text-sub: "#686a6d"
    placeholder: "#96989a"
    disabled: "#dcdddd"
    border: "#c5c6c7"
    border-light: "#dcdddd"
    surface-subtle: "#fafafa"
    error: "#e32e55"
    error-text: "#a1213c"
    error-bg: "#fceff2"
    success-text: "#1c9167"
    success-bg: "#e9faf4"
    info-bg: "#f0f2fc"
    info-border: "#8296df"
    on-primary: "#ffffff"
  typography:
    family: { sans: "A P-OTF UD Shin Go Pr6N", mono: "Open Sans" }
    heading-xl: { size: 32, weight: 700, lineHeight: 1.40, use: "Page hero, landing titles" }
    heading-lg: { size: 28, weight: 700, lineHeight: 1.40, use: "Major section titles" }
    heading-md: { size: 24, weight: 700, lineHeight: 1.40, use: "Section headers" }
    heading-sm: { size: 20, weight: 700, lineHeight: 1.50, use: "Card titles, modal headers" }
    heading-xs: { size: 16, weight: 700, lineHeight: 1.50, use: "List headers, sub-sections" }
    body-lg:    { size: 16, weight: 400, lineHeight: 1.70, use: "Primary reading text" }
    body-md:    { size: 14, weight: 400, lineHeight: 1.70, use: "Standard body, descriptions" }
    note:       { size: 12, weight: 400, lineHeight: 1.50, use: "Captions, helper text" }
    button:     { size: 16, weight: 700, lineHeight: 1.00, use: "Action labels" }
    tag:        { size: 12, weight: 700, lineHeight: 1.00, use: "Category chips, status keywords" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 4, md: 8, lg: 12, full: 9999 }
  shadow:
    card: "0px 1px 4px rgba(22,25,31,0.08)"
    interactive: "0px 2px 8px rgba(22,25,31,0.10)"
  components:
    button-primary: { type: button, bg: "#3959cc", fg: "#ffffff", radius: 8, padding: "12px 24px", font: "16px/700", use: "Single most important action; hover #304cad" }
    button-accent: { type: button, bg: "#27cc91", fg: "#ffffff", radius: 8, padding: "12px 24px", use: "Health-forward emphasis; hover #21ad7b" }
    button-secondary: { type: button, bg: "#ffffff", fg: "#3959cc", radius: 8, padding: "12px 24px", use: "Subordinate action; 1px #3959cc border; hover #f0f2fc" }
    button-alert: { type: button, bg: "#e32e55", fg: "#ffffff", radius: 8, padding: "12px 24px", use: "Irreversible/risky actions" }
    button-text: { type: button, bg: "transparent", fg: "#3959cc", radius: 8, padding: "8px 12px", font: "14px/700", use: "Low-emphasis inline action" }
    textfield: { type: input, bg: "#ffffff", fg: "#32353a", radius: 8, padding: "12px 16px", font: "16px", use: "Standard input; 1px #c5c6c7 border, focus #3959cc" }
    textfield-error: { type: input, bg: "#ffffff", fg: "#32353a", radius: 8, padding: "12px 16px", use: "Validation failure; 1px #e32e55 border, help #a1213c" }
    card: { type: card, bg: "#ffffff", radius: 12, padding: "24px", use: "Symptom result / content panel; 1px #dcdddd border" }
    card-interactive: { type: card, bg: "#ffffff", radius: 12, padding: "16px", use: "Tappable card; 1px #dcdddd border, hover #8296df" }
    card-tinted: { type: card, bg: "#f0f2fc", radius: 8, padding: "16px", use: "Inline informational callout" }
  components_harvested: true
---

# Design System Inspiration of Ubie (ユビー)

## 1. Visual Theme & Atmosphere

Ubie is a Japanese healthcare-AI company whose products — a consumer symptom-checker (ユビー) and clinical software for hospitals — must do something most health software fails at: feel reassuring to an anxious person and credible to a busy doctor, on the same screen. The interface answers this with a warm, optimistic clinical aesthetic. The canvas is pure white (`#ffffff`), text is a soft near-black (`#32353a`) that reads warmer than true black, and the system is anchored by two colors working in concert: a calm, trustworthy **Ubie Blue** (`#3959cc`) for interaction and a fresh, healing **Ubie Green** (`#27cc91`) that signals health, vitality, and positive progress.

The brand was rebuilt around the phrase **"あたたかさと賢さで寄り添う"** — "accompanying people with warmth and wisdom." The heart motif in the logo carries this duality: the front face expresses warmth (the human), the back expresses the supporting technology (the AI). The logo hides a detail — the human body temperature **36 degrees** is encoded in its form — a quiet promise that the product is on the patient's side. Nothing in the visual language shouts; everything is engineered to lower the cortisol of someone Googling their symptoms at 2am.

The type system uses **A P-OTF UD Shin Go Pr6N**, a Japanese Universal Design typeface chosen for legibility under stress and across vision abilities, paired with a clean Latin sans (Open Sans as the documented fallback). Accessibility is not a bolt-on: Ubie Vitals is built "so that Ubie's products reach all users," and the entire token system is published open-source.

**Key Characteristics:**
- Ubie Blue (`#3959cc`) for interaction; Ubie Green (`#27cc91`) for health/positive signals — a two-anchor system
- A P-OTF UD Shin Go (Universal Design font) for Japanese; Latin sans fallback for English
- Warm near-black text (`#32353a`) instead of pure black — softer, less clinical
- 10-step primitive scales (100→1000) across blue, green, pink, orange, purple, red, black
- Generous default line-height (170%) for calm, readable body text
- Conservative radius scale (2/4/8/12px) sized to the component, plus pill (9999px)
- 4px-based spacing grid; accessibility and UX writing are first-class token categories
- Open-source design system (Ubie Vitals) — tokens managed in JSON via Style Dictionary

## 2. Color Palette & Roles

### Primary
- **Ubie Blue** (`#3959cc`): `blue600`. The primary interactive color — links, primary buttons, focus, selected states, `bg.blue.inverse`. Calm institutional blue that reads trustworthy, not cold.
- **Ubie Green** (`#27cc91`): `green600`. The signature health accent — success, positive progress, `bg.green.inverse`, brand-moment highlights. Fresh, vital, reassuring.
- **Pure White** (`#ffffff`): `bg.white`. Page background and card surface.
- **Text Main** (`#32353a`): `black900`. Primary text and headings. Warm near-black with a soft undertone.

### Brand
- **Heart Blue/Green pairing**: The logo and brand expressions pair `#3959cc` (warmth-and-trust) with `#27cc91` (health-and-care). These two are the brand's identity colors; everything else is supporting.

### Text Scale
- **Text Main** (`#32353a`): Primary reading text, headings.
- **Text Sub** (`#686a6d`): `black600`. Secondary text, descriptions, metadata, de-emphasized links.
- **Text Placeholder** (`#96989a`): `black500`. Input placeholders.
- **Text Disabled** (`#dcdddd`): `black300`. Inactive labels.
- **Text Link** (`#3959cc`): Hyperlinks (= Ubie Blue 600).

### Semantic
- **Success / Green** — text `#1c9167` (green800), bg `#e9faf4` (green100), inverse `#27cc91` (green600), border `#77dfba` (green400).
- **Error / Red** — text `#a1213c` (red800), bg `#fceff2` (red100), inverse `#e32e55` (red600), border `#ed7b94` (red400).
- **Warning / Orange** — text `#b57212` (orange800), bg `#fff9f0` (orange100), inverse `#ffa11a` (orange600), border `#ffc46f` (orange400).
- **Info / Blue** — text `#283f91` (blue800), bg `#f0f2fc` (blue100), inverse `#3959cc` (blue600), border `#8296df` (blue400).
- **Accent / Purple** — text `#7322a2` (purple800), bg `#f8effc` (purple100), inverse `#a230e4` (purple600), border `#c47dee` (purple400).
- **Accent / Pink** — text `#9b2350` (pink800), bg `#fcf0f5` (pink100), inverse `#da3170` (pink600), border `#e87da5` (pink400).

### Neutral Scale (Ubie Black)
- **Black 100** (`#fafafa`): Lightest gray, `bg.black` surface fill.
- **Black 200** (`#f6f6f6`): Secondary background, subtle fills.
- **Black 300** (`#dcdddd`): Disabled text, hairline dividers.
- **Black 400** (`#c5c6c7`): `border.black` — default border color.
- **Black 500** (`#96989a`): Placeholder text, muted icons.
- **Black 600** (`#686a6d`): Sub text, secondary labels, `bg.black.inverse`.
- **Black 700** (`#55575b`): Emphasized secondary text.
- **Black 800** (`#393c41`): `text.black` strong labels.
- **Black 900** (`#32353a`): Primary text — Text Main.
- **Black 1000** (`#16191f`): Maximum-contrast text, rare emphasis.

### Surface & Borders
- **Border Default** (`#c5c6c7`): black400. Card borders, input borders, dividers.
- **Border Light** (`#dcdddd`): black300. Subtle hairline separators.
- **Background Subtle** (`#fafafa` / `#f6f6f6`): Section fills, grouped surfaces.
- **Modal Scrim** (`rgba(0,0,0,0.5)`): `bg.modal`. Overlay behind dialogs and sheets.

## 3. Typography Rules

### Font Family
- **Japanese**: `"A P-OTF UD Shin Go Pr6N"` (Universal Design Shin Go), Regular = `/M`, Bold = `/DB`. Fallback: `"Noto Sans CJK JP", "Noto Sans JP"`.
- **Latin / English**: brand Latin sans; documented fallback `"Open Sans"`.
- **Full stack**: `"A P-OTF UD Shin Go Pr6N", "Open Sans", "Noto Sans JP", -apple-system, BlinkMacSystemFont, "Hiragino Sans", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif`

UD Shin Go is a Universal Design face: glyphs are tuned for legibility at small sizes, for low-vision readers, and for distinguishing easily-confused characters — the correct choice for medical content read under stress.

### Hierarchy

Ubie Vitals defines type semantically (Body / Heading / Note / Button / Tag) crossed with three line-height modes: default `170%`, `-narrow` `150%`, `-tight` `140%`. The px scale below is the standard Ubie web rendering.

| Role | Token | Size | Weight | Line Height | Notes |
|------|-------|------|--------|-------------|-------|
| Heading XL | heading-xl | 32px | DB (Bold) | 140% (tight) | Page hero, landing titles |
| Heading L | heading-lg | 28px | DB (Bold) | 140% (tight) | Major section titles |
| Heading M | heading-md | 24px | DB (Bold) | 140% (tight) | Section headers |
| Heading S | heading-sm | 20px | DB (Bold) | 150% (narrow) | Card titles, modal headers |
| Heading XS | heading-xs | 16px | DB (Bold) | 150% (narrow) | List headers, sub-sections |
| Body L | body-lg | 16px | M (Regular) | 170% | Primary reading text |
| Body M | body-md | 14px | M (Regular) | 170% | Standard body, descriptions |
| Body S | body-sm | 13px | M (Regular) | 170% | Dense body, secondary info |
| Note | note | 12px | M (Regular) | 150% (narrow) | Captions, helper text, timestamps |
| Button | button | 14–16px | DB (Bold) | 100% | Action labels — never wraps awkwardly |
| Tag | tag | 12px | DB (Bold) | 100% | Category chips, status keywords |

### Principles
- **Two weights, used deliberately**: Regular (M) for reading, DemiBold (DB) for headings and buttons. No light, no black-weight display drama — medical content is not a fashion magazine.
- **Generous line-height by default**: Body text runs at 170%. Calm, airy paragraphs reduce cognitive load for an anxious reader. Tighten only for headings (`140%`) and chips/buttons (`100%`).
- **Universal Design legibility**: UD Shin Go is mandated for Japanese — its disambiguated glyphs are an accessibility commitment, not an aesthetic preference.
- **Buttons in DB, ~15 chars**: Action labels are bold and short. Vitals guidance: describe the action ("この内容で更新する") in roughly 15 characters or fewer; avoid bare "OK".

## 4. Component Stylings

### Buttons

Ubie `<Button>` is a **variant × size** component. Variants: `primary`, `accent`, `secondary`, `alert`, `text`, `textAlert`, plus `Auth*` social buttons. Sizes: `large` (default), `medium`, `small`. `block` makes it full-width. Vitals discourages the `disabled` state in favor of a `loading` prop (disabled buttons have poor contrast and unclear affordance). Verified against `vitals.ubie.life/components/button`.

**Primary**
- Background: `#3959cc` (Ubie Blue 600)
- Text: `#ffffff`
- Border: none
- Radius: 8px (md)
- Padding: 12px 24px (large)
- Font: 16px / DB (Bold) / UD Shin Go
- Hover: darken to `#304cad` (blue700)
- Use: The single most important action on a screen — one per view ("症状を確認する", "次へ")

**Accent**
- Background: `#27cc91` (Ubie Green 600)
- Text: `#ffffff`
- Border: none
- Radius: 8px
- Padding: 12px 24px
- Font: 16px / DB / UD Shin Go
- Hover: darken to `#21ad7b` (green700)
- Use: Positive, health-forward emphasis between primary and secondary — "start", "begin a check"

**Secondary**
- Background: `#ffffff`
- Text: `#3959cc`
- Border: 1px solid `#3959cc`
- Radius: 8px
- Padding: 12px 24px
- Font: 16px / DB / UD Shin Go
- Hover: bg `#f0f2fc` (blue100)
- Use: Subordinate action paired with a primary button

**Alert**
- Background: `#e32e55` (red600)
- Text: `#ffffff`
- Border: none
- Radius: 8px
- Padding: 12px 24px
- Font: 16px / DB / UD Shin Go
- Hover: darken to `#c12748` (red700)
- Use: Irreversible / risky actions (delete, cancel account)

**Text**
- Background: transparent
- Text: `#3959cc`
- Border: none
- Radius: 8px
- Padding: 8px 12px
- Font: 14px / DB / UD Shin Go
- Hover: bg `#f0f2fc` (blue100)
- Use: Low-emphasis inline action

**textAlert**
- Background: transparent
- Text: `#a1213c` (red800)
- Border: none
- Radius: 8px
- Padding: 8px 12px
- Font: 14px / DB / UD Shin Go
- Use: Low-emphasis destructive action

Size scale (height · font · padding): `large` ~48px · 16px · 12px 24px; `medium` ~40px · 14px · 10px 20px; `small` ~32px · 13px · 8px 16px. Radius follows the component-size rule (§5): 8px (md) at large, down to 4px (sm) at small. `loading` shows a spinner and blocks double-submit while preserving width.

### Inputs

**TextField (default)**
- Background: `#ffffff`
- Text: `#32353a`
- Border: 1px solid `#c5c6c7` (black400)
- Radius: 8px
- Padding: 12px 16px
- Font: 16px / M / UD Shin Go
- Placeholder: `#96989a` (black500)
- Focus: border `#3959cc`, 2px focus ring `rgba(57,89,204,0.3)`
- Use: Standard form input

**TextField (error)**
- Background: `#ffffff`
- Text: `#32353a`
- Border: 1px solid `#e32e55` (red600)
- Radius: 8px
- Padding: 12px 16px
- Help text below in `#a1213c` (red800), 12px
- Use: Validation failure — paired with one specific corrective message

**TextField (disabled)**
- Background: `#f6f6f6` (black200)
- Text: `#96989a` (black500)
- Border: 1px solid `#dcdddd` (black300)
- Radius: 8px
- Use: Inactive input — geometry preserved if re-enabled

### Cards

**Standard**
- Background: `#ffffff`
- Border: 1px solid `#dcdddd` (black300)
- Radius: 12px (lg)
- Padding: 24px (lg)
- Shadow: `0px 1px 4px rgba(22,25,31,0.08)`
- Use: Symptom result, content panel — the workhorse surface

**Interactive (tappable)**
- Background: `#ffffff`
- Border: 1px solid `#dcdddd`
- Radius: 12px
- Padding: 16px–24px
- Shadow: `0px 2px 8px rgba(22,25,31,0.10)`
- Hover: border `#8296df` (blue400), shadow lifts
- Use: A card that navigates — answer choices, related-condition cards

**Tinted Info**
- Background: `#f0f2fc` (blue100) / `#e9faf4` (green100)
- Border: none
- Radius: 8px (md)
- Padding: 16px
- Use: Inline informational / reassurance callout

### Tags / Chips

Ubie `<Tag>` — short keyword for attributes or classification. Bold (DB), 12px, 100% line-height.

**Default**
- Background: `#f6f6f6` (black200)
- Text: `#55575b` (black700)
- Radius: 4px (sm) or full (9999px) for pill chips
- Padding: 2px 8px
- Font: 12px / DB / UD Shin Go

**Green (positive)**
- Background: `#e9faf4` (green100)
- Text: `#1c9167` (green800)
- Radius: 4px / full
- Padding: 2px 8px

**Red (caution)**
- Background: `#fceff2` (red100)
- Text: `#a1213c` (red800)
- Radius: 4px / full
- Padding: 2px 8px

### Notices / Banners

**Info**
- Background: `#f0f2fc` (blue100)
- Text: `#32353a`, icon `#3959cc`
- Border-left: 4px solid `#3959cc`
- Radius: 8px
- Padding: 16px

**Success**
- Background: `#e9faf4` (green100)
- Border-left: 4px solid `#27cc91`
- Radius: 8px, Padding: 16px

**Error**
- Background: `#fceff2` (red100)
- Border-left: 4px solid `#e32e55`
- Radius: 8px, Padding: 16px

### Modal / Dialog

- Background: `#ffffff`
- Text: `#32353a`
- Border: none
- Radius: 12px (lg)
- Padding: 24px
- Shadow: `0px 8px 24px rgba(22,25,31,0.16)`
- Scrim: `rgba(0,0,0,0.5)` (`bg.modal`)
- Use: Confirmation, secondary flow

### Toggle / Switch

- Track: `#27cc91` (on) / `#c5c6c7` (off, black400)
- Radius: 9999px (full)
- Thumb: `#ffffff` circle with `0px 1px 2px rgba(22,25,31,0.2)`
- Use: Boolean settings, consent toggles

---

**Verified:** 2026-06-06 (full-depth)
**Tier 1 sources:** vitals.ubie.life (Ubie Vitals — public design-system docs: primitive + semantic color tokens, typography tokens, radius, spacing, Button component); github.com/ubie-oss/design-tokens (token JSON, Style Dictionary — hex values cross-confirmed). ubiehealth.com (live brand surface — Shiba mascot, tagline "Just 3 minutes. Developed by doctors"). · https://ubie.life (live production site)
**Tier 2 sources:** speakerdeck.com/ubie/ubie-brand-guideline (brand concept "あたたかさと賢さで寄り添う", heart motif, UD Shin Go + Open Sans fallback); note.com/ubie rebranding article; X/@rhatake_jp (logo encodes 36°C body temperature).
**Notes:** Primitive hex values are authoritative (cross-checked Vitals docs ↔ token JSON, identical). Component padding/height/shadow values are reconstructed from the documented radius/spacing/typography tokens + size-rule (§5) where Vitals docs describe behavior but omit exact px; flagged as derived, not invented.

## 5. Layout Principles

### Spacing System
- Base unit: 4px. Tokens: `xxs` 4px, `xs` 8px, `sm` 12px, `md` 16px, `lg` 24px, `xl` 40px, `xxl` 64px.
- Scale logic: multiples of 4 up to `lg`, then 8px+ steps for clear hierarchy.
- Default content padding: 16px (md) mobile, 24px (lg) larger.
- Group related items with `xs`/`sm` (8–12px); separate functional groups with `lg`/`xl` (24–40px).

### Grid & Container
- Mobile-first; consumer symptom-checker is primarily a phone flow.
- Single-column question flow: one decision per screen, full-width stacked cards.
- Max content width ~720px for reading surfaces; ~1080px for marketing/landing.
- Generous vertical rhythm — questions and results breathe to reduce anxiety.

### Whitespace Philosophy
- **Calm by spacing**: For an anxious user, density reads as alarm. Ubie spaces content out and uses 170% line-height so nothing feels urgent or cramped.
- **One question per screen**: The symptom flow never stacks multiple decisions. Progressive disclosure keeps cognitive load minimal.
- **Reassurance has room**: Positive/safe results get green tinting and breathing space; the design never crowds good news.

### Border Radius Scale
Radius is chosen by component short-side length, not by taste:
- **xs (2px)**: short side ≤ 24px — tiny chips, checkboxes.
- **sm (4px)**: short side 24–40px — small buttons, tags.
- **md (8px)**: short side > 40px — inputs, standard buttons, notices.
- **lg (12px)**: decorative / landing surfaces — cards, modals.
- **full (9999px)**: pills, toggles, avatars.

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow, optional 1px `#dcdddd` border | Page background, inline elements |
| Subtle (Level 1) | `0px 1px 4px rgba(22,25,31,0.08)` | Standard cards, list separation |
| Standard (Level 2) | `0px 2px 8px rgba(22,25,31,0.10)` | Interactive cards, hover lift |
| Elevated (Level 3) | `0px 4px 12px rgba(22,25,31,0.12)` | Dropdowns, popovers, sticky CTA |
| Modal (Level 4) | `0px 8px 24px rgba(22,25,31,0.16)` | Dialogs, bottom sheets |

**Shadow Philosophy**: Ubie's shadows are soft, low-opacity, and tinted with the warm near-black `#16191f` (black1000) rather than pure black — consistent with the warm text palette. Depth is gentle; in a healthcare context, dramatic elevation reads as alarm. Most separation is achieved with a 1px `#dcdddd` border and white space, with shadow reserved for genuinely floating or interactive surfaces. Borders before shadows; shadows before drama.

### Surfaces
- Cards prefer a hairline border (`#dcdddd`) on white; shadow is added only when the card lifts on hover or floats above content.
- Tinted surfaces (blue100, green100) provide grouping without any shadow at all.

## 7. Do's and Don'ts

### Do
- Use Ubie Blue (`#3959cc`) for interaction — links, primary buttons, focus, selection.
- Use Ubie Green (`#27cc91`) for health, success, and positive progress.
- Use warm near-black (`#32353a`) for text, never pure `#000000`.
- Keep body text at 170% line-height for a calm, readable rhythm.
- Use DB (Bold) weight for headings and button labels; M (Regular) for reading.
- Choose radius by component size: 8px standard, 4px small, 12px cards/modals, pill for toggles.
- Keep one primary action per screen; pair with a secondary, never two primaries.
- Use UD Shin Go (or Universal Design fallback) for Japanese — it is an accessibility requirement.

### Don't
- Don't use pure black for text or shadows — warm near-black keeps the brand soft.
- Don't crowd content — density reads as urgency/alarm to an anxious patient.
- Don't use red (`#e32e55`) decoratively — it is reserved for errors and irreversible actions.
- Don't rely on the `disabled` button state — prefer `loading` (Vitals guidance: disabled has poor contrast/affordance).
- Don't stack multiple decisions on one symptom-flow screen — one question per screen.
- Don't use heavy, high-opacity shadows — elevation is gentle.
- Don't write 1-word vague labels ("OK") — describe the action in ~15 chars.

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile (Primary) | <640px | Single-column flow, full-width cards, 16px padding |
| Tablet | 640–1024px | Centered reading column ~720px, 24px padding |
| Desktop | >1024px | Centered content, marketing grids up to ~1080px |

### Touch Targets
- Buttons: large ~48px, medium ~40px, small ~32px height.
- Answer-choice cards: minimum 48px tappable height with comfortable padding.
- Toggles/checkboxes: ≥44px effective hit area even when visually smaller.

### Collapsing Strategy
- Desktop mirrors the mobile flow in a centered column — parity over reflow.
- Marketing feature grids: 3-col → 2-col → single column stacked.
- Sticky bottom CTA on mobile flows with safe-area insets.
- Multi-column forms collapse to single column under 640px.

### Image Behavior
- Shiba mascot illustrations scale inline; used at welcoming/reassurance moments, never on error screens.
- Medical illustrations maintain aspect ratio, full-width on mobile.
- Icons from the Vitals icon set render at 16/20/24px consistent with text scale.

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA / link: Ubie Blue (`#3959cc`)
- CTA Hover: Blue 700 (`#304cad`)
- Health / Success / Accent CTA: Ubie Green (`#27cc91`)
- Background: White (`#ffffff`)
- Background Subtle: Black 100 (`#fafafa`)
- Heading / body text: Text Main (`#32353a`)
- Sub text: Text Sub (`#686a6d`)
- Placeholder: Black 500 (`#96989a`)
- Border: Black 400 (`#c5c6c7`) / Light `#dcdddd`
- Success: Green 800 text (`#1c9167`) on Green 100 (`#e9faf4`)
- Error: Red 600 (`#e32e55`)
- Warning: Orange 600 (`#ffa11a`)

### Example Component Prompts
- "Create a symptom-result card: white bg, 1px solid #dcdddd border, 12px radius, 24px padding, shadow 0px 1px 4px rgba(22,25,31,0.08). Title 20px UD Shin Go Bold #32353a, 150% line-height. Body 14px Regular #686a6d, 170% line-height. Positive result uses a green tag: #e9faf4 bg, #1c9167 text, 4px radius."
- "Build a primary button: #3959cc bg, white text, 16px UD Shin Go Bold, 48px height, 12px 24px padding, 8px radius. Hover #304cad. Use loading spinner instead of disabled."
- "Build an accent button for 'start a symptom check': #27cc91 bg, white text, 16px Bold, 8px radius, 12px 24px padding. Hover #21ad7b."
- "Design a single-question screen: white bg, centered ~720px column, one heading (24px Bold #32353a) and a vertical stack of tappable answer cards (white, 1px #dcdddd border, 12px radius, 16px padding, hover border #8296df). 16px gap between cards."
- "Create an info notice: #f0f2fc bg, 4px left border #3959cc, 8px radius, 16px padding, 14px text #32353a with a #3959cc info icon."

### Iteration Guide
1. Two anchors: `#3959cc` blue is interaction, `#27cc91` green is health/positive. Don't swap their roles.
2. Text is warm near-black `#32353a`; sub text `#686a6d`. Never pure black.
3. Body line-height 170% — calm and airy is the brand.
4. Weights: M (Regular) for reading, DB (Bold) for headings/buttons. No other weights.
5. Radius by size: 2px tiny, 4px small, 8px standard, 12px cards/modals, pill for toggles.
6. Shadows are soft and warm-toned (rgba 22,25,31); prefer borders + white space first.
7. One question / one primary action per screen. Use `loading`, not `disabled`.

---

## 10. Voice & Tone

Ubie speaks like a calm, well-informed clinic receptionist who genuinely likes you: warm, plain, never alarmist, and never condescending. It is bilingual by design — Japanese is the native voice (polite ですます form, softened sentence endings like 〜ですよ on the consumer app), and English carries the same reassuring register. The job of every sentence is to lower anxiety while staying honest about medical uncertainty.

| Context | Tone |
|---|---|
| Symptom questions | Plain, one idea per screen, no jargon. "どんな症状がありますか？" Neutral, never leading. |
| Results / guidance | Honest + reassuring. States possibilities without diagnosing; always offers a clear next step. Never alarmist. |
| CTAs | Action-describing, ~15 chars, Bold. "症状を確認する", "病院をさがす". Never bare "OK". |
| Reassurance moments | Warm, brief, sometimes the Shiba mascot. "ここまでありがとうございます。" |
| Error messages | Specific + blameless + recoverable. Never "エラーが発生しました" alone. |
| Medical disclaimers | Clear, calm, non-frightening — "this is not a diagnosis," framed as empowerment not liability. |
| English (ubiehealth.com) | "Just 3 minutes. Developed by doctors." — accessible, credentialed, unhurried. |

**Forbidden register.** Alarmist phrasing about symptoms ("危険です", scare language), absolute diagnostic claims ("あなたは〜です"), shaming the user for their question, hype ("revolutionary", "AIが完全に診断"), and bare vague labels. Medical credibility comes from calm precision, never from urgency.

## 11. Brand Narrative

Ubie (Ubie株式会社 / Ubie, inc.) was founded in **2017** by **Dr. Kota Abe (阿部吉倫)**, a practicing physician, and **Yoshinori Kuno (久野遼平)**, an engineer — the doctor-plus-engineer pairing that the entire brand encodes. The founding problem was the gap between a worried person with symptoms and the right medical care: patients don't know which department to visit, and doctors drown in repetitive intake. Ubie builds AI to bridge that gap from both sides — a consumer **symptom-checker** ("ユビー", at ubie.life / ubiehealth.com) that helps people understand symptoms and find appropriate care in about three minutes, and **clinical software** that reduces documentation load for medical staff.

The company rebranded around the mission **"愛あるテクノロジーで医療と人をつなぐ"** — "connecting medicine and people with loving technology" — and the design phrase **"あたたかさと賢さで寄り添う"** (accompanying people with warmth and wisdom). Those two words, warmth (あたたかさ) and wisdom (賢さ), are the literal axes of the visual system: green and blue, human and machine, the front and back of the heart logo. The logo encodes **36°C** — human body temperature — as a quiet signal that the product is on the patient's side, not above them.

What Ubie refuses: the cold institutional blue-gray of legacy hospital IT, the alarmism of symptom-Googling, and the false confidence of an app that pretends to diagnose. It is not a doctor-replacement; it is a guide that lowers anxiety and routes people to real care. The design must therefore be simultaneously *credible* (doctors built it, 50,000+ clinical sources, dozens of medical experts) and *gentle* (a Shiba mascot, soft warm near-black text, 170% line-height, never red unless something is truly wrong).

Ubie open-sourced its design system, **Ubie Vitals**, publishing tokens, components, accessibility guidance, and UX writing — an unusually transparent move for a healthcare company, consistent with the brand's belief that good, accessible medical UX is a public good.

## 12. Principles

1. **Warmth and wisdom, together.** Every surface balances the green (human, care) and blue (trust, intelligence) axes. Neither alone is the brand; the pairing is.
2. **Calm is a feature.** For an anxious user, density and urgency are harm. Space, 170% line-height, soft shadows, and one-decision-per-screen are clinical-grade calm, not decoration.
3. **Honest, never alarmist.** The product states possibilities and next steps; it never diagnoses, never frightens, never shames a question. Red is reserved for genuine errors.
4. **Accessibility is the baseline.** UD Shin Go, published WCAG-minded tokens, and a discouraged `disabled` state are commitments to "reach all users," not nice-to-haves.
5. **Blue is interaction, green is health.** `#3959cc` appears where you can tap; `#27cc91` appears where something is well, succeeded, or progressing. Roles never swap.
6. **One decision per screen.** The symptom flow never stacks choices. Progressive disclosure keeps load minimal and the path clear.
7. **Borders before shadows.** Separation comes from a 1px `#dcdddd` line and white space first; soft shadow is reserved for floating or interactive surfaces.
8. **Words do the caring.** Labels describe actions, errors are blameless and recoverable, disclaimers empower rather than scare. UX writing is a first-class token category.

## 13. Personas

*Personas below are fictional archetypes informed by publicly described Ubie user segments (worried consumers seeking care, and clinicians using Ubie's hospital software), not individual people.*

**さくら (Sakura), 34, Yokohama.** Office worker and mother of a toddler. Opens Ubie at night when her child has a fever and she can't tell whether the ER is warranted. Wants two things: to not feel stupid for asking, and to know whether to go now or wait until morning. The Shiba mascot and the unhurried, plain-Japanese questions are what keep her from panic-Googling. If the app ever sounded alarmist or used scary red text, she would close it and lie awake instead. Reads Japanese; the 170% line-height and large UD Shin Go text matter at 2am on a small screen.

**田中先生 (Dr. Tanaka), 48, regional hospital, Nagano.** Internal medicine physician seeing 40+ patients a day. Uses Ubie's clinical intake software because it pre-collects structured symptom data before the patient sits down, cutting his documentation time. He has zero patience for cute — for him the design must be fast, legible, and dense enough to scan, but he appreciates that it never overclaims AI certainty. Trusts the product partly because he knows a physician co-founded it. Would abandon any tool that produced a confident wrong "diagnosis."

**Marcus Bell, 29, London.** Uses ubiehealth.com (English) after weeks of an unexplained symptom and an over-full GP schedule. Skeptical of "AI doctor" apps. Convinced by "Developed by doctors," the cited clinical sources, and the calm refusal to diagnose — it tells him *possibilities* and *which specialist to see*, which is exactly the help he needed. Bounces instantly off any health app that feels like an ad or a hype pitch.

**みなみ (Minami), 23, Osaka.** University student, high accessibility needs (low vision). Ubie is one of the few health tools she can actually read without zooming — UD Shin Go, the contrast of `#32353a` on white, and generous spacing were built with her in mind. She is the user the open-source Vitals accessibility work exists to serve, and the reason the `disabled`-button discouragement matters: she relies on clear, perceivable affordances.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no history)** | Single calm line in Text Sub (`#686a6d`) 14px explaining the screen, plus one accent/primary CTA to begin. Often the Shiba mascot. Never "データがありません" alone. |
| **Loading (first paint)** | Skeleton blocks at `#f6f6f6` (black200) matching final layout, gentle 1.2s shimmer. Reassuring micro-copy for AI processing ("結果をまとめています…"). |
| **Loading (in button)** | `loading` prop shows a spinner replacing the label; width preserved; blocks double-submit. Preferred over `disabled`. |
| **Error (inline field)** | 1px `#e32e55` (red600) border on the input, one specific corrective sentence below in `#a1213c` (red800) 12px. Blameless and actionable. |
| **Error (banner)** | `#fceff2` (red100) bg, 4px left border `#e32e55`, `#32353a` text, one sentence + recovery action. No scare language. |
| **Success (positive result)** | Green tint: `#e9faf4` (green100) surface, `#1c9167` (green800) text/icon, `#27cc91` accent. Reassurance gets room and warmth — never crowded. |
| **Success (action saved)** | Brief toast or inline confirmation, `#27cc91` check, past-tense sentence. No exclamation, no emoji on medical surfaces. |
| **Warning (attention needed)** | `#fff9f0` (orange100) bg, 4px `#ffa11a` left border, `#b57212` (orange800) text. Calm "consider seeing a doctor" framing — not alarm. |
| **Skeleton** | `#f6f6f6` blocks at final dimensions, radius per component (4/8/12px), 8% white shimmer over ~1.2s. |
| **Disabled (discouraged)** | Avoided. When unavoidable: surface `#f6f6f6`, text `#96989a`, border `#dcdddd`. Prefer `loading` or hiding the action entirely. |
| **Focus** | 2px ring `rgba(57,89,204,0.3)` + border `#3959cc`. Always visible for keyboard users — accessibility is non-negotiable. |

## 15. Motion & Easing

**Durations:**

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle flips, checkbox state, focus rings |
| `motion-fast` | 150ms | Hover, focus, small reveals, button press |
| `motion-standard` | 250ms | Default — card expand, sheet open, tab switch |
| `motion-slow` | 350ms | Step advance in the symptom flow, result reveal |
| `motion-page` | 300ms | Top-level route transitions |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Things appearing — sheets, results, toasts |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Things leaving — dismissals |
| `ease-standard` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Two-way transitions — collapsibles, tabs |
| `ease-gentle` | `cubic-bezier(0.33, 0.0, 0.2, 1)` | Reassurance moments — soft, slightly slower settle |

**Signature motions.**

1. **Question advance.** Moving between symptom-flow steps uses a gentle horizontal slide + fade (`motion-slow / ease-gentle`). The motion is unhurried on purpose — speed would feel like pressure on an anxious user.
2. **Result reveal.** A positive/safe result fades and rises 8px into a green-tinted card (`motion-slow / ease-enter`). Reassurance arrives calmly, never with a celebratory bounce — overshoot would feel flippant about health.
3. **Reassurance / Shiba.** Mascot moments use soft, small-amplitude motion (a slight breathing scale, ≤2%) — warmth without distraction. Never on error screens.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`; slides become instant cross-states. The flow stays fully usable — accessibility outranks delight, always.

<!--
OmD v0.1 Sources

Direct verification (WebFetch, 2026-06-06):
- vitals.ubie.life/tokens/color/primitive — full 10-step primitive scales
  (blue/green/pink/orange/purple/red/black + white). Hex values transcribed.
- vitals.ubie.life/tokens/color/semantic — text/background/border semantic tokens
  (Text Main #32353a, Text Link #3959cc, bg.green.inverse #27cc91, etc.).
- vitals.ubie.life/tokens/typography — UD Shin Go Pr6N (M/DB), semantic groups
  (Body/Heading/Note/Button/Tag), line-heights 170/150/140%.
- vitals.ubie.life/tokens/radius — xs2/sm4/md8/lg12/full, size-based selection rule.
- vitals.ubie.life/tokens/spacing — xxs4/xs8/sm12/md16/lg24/xl40/xxl64.
- vitals.ubie.life/components/button — variants (primary/accent/secondary/alert/
  text/textAlert/Auth*), sizes, loading-over-disabled guidance, ~15-char labels.
- github.com/ubie-oss/design-tokens (raw JSON) — primitive hex cross-confirmed
  identical to the Vitals docs.
- ubiehealth.com — English brand surface; tagline "Just 3 minutes. Developed by
  doctors"; Shiba mascot.

Tier 2 (brand/philosophy):
- speakerdeck.com/ubie/ubie-brand-guideline — concept "あたたかさと賢さで寄り添う",
  heart motif (front=warmth, back=technology), JP font + Open Sans fallback.
- note.com/ubie rebranding article — mission "愛あるテクノロジーで医療と人をつなぐ".
- X/@rhatake_jp — logo encodes 36°C body temperature.

Primary color decision: primary_color = #3959cc (Ubie Blue 600), the documented
interactive/link color (Text Link, bg.blue.inverse, primary button). Ubie Green
#27cc91 (green600) is the co-anchor health/accent color, documented as
bg.green.inverse and the accent-button fill.

Derived (not in docs, reconstructed from tokens + size rules, flagged in §4):
exact button/input/card padding, heights, and shadow rgba values. Built from the
radius (md8/lg12), spacing (sm12/md16/lg24), and typography tokens plus the
component-size radius rule; shadows use warm black1000 (#16191f) per the warm-text
palette. No hex was invented — all colors trace to verified Vitals/JSON tokens.

Personas (§13) are fictional archetypes informed by publicly described Ubie user
segments (worried consumers; clinicians using Ubie hospital software). Names are
illustrative.
-->
