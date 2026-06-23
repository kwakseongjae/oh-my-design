---
id: govuk
name: GOV.UK
country: UK
category: government
homepage: "https://www.gov.uk"
primary_color: "#1d70b8"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=gov.uk&sz=128"
verified: "2026-06-22"
omd: "0.1"
ds:
  name: GOV.UK Design System
  url: "https://design-system.service.gov.uk"
  type: system
  description: "UK Government Digital Service design system. Accessibility-first, GDS Transport font, govuk-blue #1d70b8 brand, #ffdd00 focus highlight, zero border-radius policy."
tokens:
  source: live-extract
  extracted: "2026-06-22"
  note: "primary = govuk-blue #1d70b8 (brand functional colour); focus = #ffdd00 (WCAG-mandated yellow highlight); text = #0b0c0c (near-black); buttons use green #0f7a52 as primary action colour on DS site, while govuk.com header uses blue #1d70b8."
  colors:
    primary: "#1d70b8"
    primary-hover: "#0f385c"
    brand: "#1d70b8"
    action: "#0f7a52"
    action-shadow: "#083d29"
    action-secondary: "#f3f3f3"
    action-secondary-shadow: "#858686"
    action-warning: "#ca3535"
    action-warning-shadow: "#651b1b"
    canvas: "#ffffff"
    foreground: "#0b0c0c"
    secondary-text: "#484949"
    surface: "#f4f8fb"
    surface-alt: "#f3f3f3"
    hairline: "#cecece"
    input-border: "#0b0c0c"
    focus: "#ffdd00"
    focus-text: "#0b0c0c"
    error: "#ca3535"
    success: "#0f7a52"
    visited: "#54319f"
    on-primary: "#ffffff"
    tag-default-bg: "#d2e2f1"
    tag-default-fg: "#0f385c"
    notification-banner: "#1d70b8"
  typography:
    family: { sans: "GDS Transport", fallback: "arial, sans-serif" }
    display-hero: { size: 64, weight: 700, lineHeight: 1.1, use: "GOV.UK homepage H1 — 'The best place to find government services'" }
    heading-xl:   { size: 48, weight: 700, lineHeight: 1.15, use: "DS H1 major headings" }
    heading-l:    { size: 36, weight: 700, lineHeight: 1.11, use: "H2 section headings" }
    heading-m:    { size: 24, weight: 700, lineHeight: 1.25, use: "H3 sub-section headings" }
    heading-s:    { size: 19, weight: 700, lineHeight: 1.31, use: "H4 small headings" }
    body-l:       { size: 19, weight: 400, lineHeight: 1.31, use: "Lead paragraph and button labels" }
    body-m:       { size: 16, weight: 400, lineHeight: 1.25, use: "Standard body text" }
    caption:      { size: 14, weight: 400, lineHeight: 1.43, use: "Captions, metadata" }
  spacing: { xs: 5, sm: 10, md: 15, base: 20, lg: 30, xl: 40, xxl: 60, section: 80 }
  rounded: { sm: 0, md: 0, lg: 0, full: 1 }
  shadow:
    button: "0 2px 0 #083d29"
    button-secondary: "0 2px 0 #858686"
    button-warning: "0 2px 0 #651b1b"
    focus: "0 -2px #ffdd00, 0 4px #0b0c0c"
  components_harvested: true
  components:
    button-primary: { type: button, bg: "#0f7a52", fg: "#ffffff", radius: "0px", padding: "8px 10px 7px", height: "38px", font: "19px / 400 GDS Transport", shadow: "0 2px 0 #083d29", use: "Primary CTA — Save and continue, Start now" }
    button-secondary: { type: button, bg: "#f3f3f3", fg: "#0b0c0c", radius: "0px", padding: "8px 10px 7px", height: "38px", font: "19px / 400 GDS Transport", shadow: "0 2px 0 #858686", use: "Secondary action — Find address" }
    button-warning: { type: button, bg: "#ca3535", fg: "#ffffff", radius: "0px", padding: "8px 10px 7px", height: "38px", font: "19px / 400 GDS Transport", shadow: "0 2px 0 #651b1b", use: "Destructive — Delete account" }
    text-input: { type: input, bg: "#ffffff", fg: "#0b0c0c", border: "2px solid #0b0c0c", radius: "0px", padding: "5px", height: "40px", font: "19px / 400 GDS Transport", focus: "#ffdd00 3px outline", use: "Standard text input field" }
    select: { type: input, bg: "#ffffff", fg: "#0b0c0c", border: "2px solid #0b0c0c", radius: "0px", padding: "5px", height: "40px", font: "19px / 400 GDS Transport", use: "Native select control" }
    tag: { type: badge, bg: "#d2e2f1", fg: "#0f385c", radius: "1px", padding: "2px 8px 3px", font: "19px / 400 GDS Transport", use: "Status tag — Completed, In progress, Not started" }
    notification-banner: { type: toast, bg: "#1d70b8", fg: "#ffffff", border: "5px solid #1d70b8", radius: "0px", use: "Top-of-page notification banner (informational / success)" }
    inset-text: { type: card, bg: "transparent", fg: "#0b0c0c", border: "10px solid #cecece", radius: "0px", padding: "15px", use: "Inset text panel for important supplementary information" }
    cookie-banner: { type: dialog, bg: "#0f7a52", fg: "#ffffff", radius: "0px", padding: "8px 10px 7px", use: "Cookie consent action buttons (green)" }
---

# Design System Inspiration of GOV.UK

## 1. Visual Theme & Atmosphere

GOV.UK is the UK government's central digital platform — and its design system is one of the world's most influential public-sector design systems. The aesthetic is unmistakably utilitarian and accessibility-first: pure white (`#ffffff`) canvas with near-black text (`#0b0c0c`), a single authoritative govuk-blue (`#1d70b8`) for brand anchoring, and a signature yellow focus highlight (`#ffdd00`) that announces keyboard navigation with confident visibility. There is no border-radius anywhere in the system — every element is crisply rectangular, a deliberate choice that communicates institutional authority and functional directness rather than consumer friendliness. This is a system designed to be used by every person in the United Kingdom, regardless of digital literacy, disability status, or device.

The typographic foundation is `GDS Transport` — a custom-commissioned typeface developed exclusively for the UK government. It carries unmistakable institutional weight while remaining legible at all sizes. Headlines run bold and large (up to 64px on the homepage), but the system's real personality comes from the anti-decoration philosophy: no decorative gradients, no illustrative backgrounds, no personality-driven brand moments. Every pixel earns its place through function.

The primary action colour is GDS green (`#0f7a52`) for buttons, with the govuk-blue (`#1d70b8`) serving as the brand identity colour on the header and logo. A two-pixel bottom shadow in a darker shade gives buttons a pressed dimension — the only hint of depth in an otherwise flat system. The focus ring (`#ffdd00` bright yellow with a `#0b0c0c` black underline) is perhaps the system's most recognizable signature: it cannot be missed, ensuring keyboard and assistive-technology users always know where focus sits.

**Key Characteristics:**
- GDS Transport font family — government-commissioned, no substitute
- Zero border-radius policy — rectangular geometry for all interactive elements
- `#ffdd00` (bright yellow) focus ring — WCAG-mandated, immediately visible
- Govuk-blue `#1d70b8` as brand/identity colour; GDS green `#0f7a52` as primary action
- 2px bottom shadow on buttons (green `#083d29` / grey `#858686` / red `#651b1b`) — the only depth in the system
- Near-black `#0b0c0c` for all primary text — not pure black, slightly warm
- Links coloured `#1a65a6` (live inspect) / `#1d70b8` (DS specification); visited links `#54319f` purple
- Status tags use `#d2e2f1` blue-tint background with `#0f385c` deep blue text

## 2. Color Palette & Roles

### Brand
- **Govuk Blue** (`#1d70b8`): The brand anchor colour. Used in the GOV.UK crown/header, notification banners, and as the foundational brand token (`govuk-functional-colour("brand")`). Primary link colour and interactive highlights on the main gov.uk site.
- **Govuk Blue Dark** (`#0f385c`): Hover state for blue links and shade-50 of the blue palette. Used as tag foreground text.
- **Blue Tint** (`#d2e2f1`): tint-80 of govuk blue; used as tag background and surface backgrounds.
- **Surface Background** (`#f4f8fb`): tint-95 of govuk blue; the `template-background` — used behind cards and panels.

### Action (Green)
- **GDS Green** (`#0f7a52`): Primary button background. Cookie consent buttons, the main action colour across all GOV.UK services.
- **Green Shadow** (`#083d29`): Button shadow colour — the bottom 2px shadow that defines button depth.

### Text
- **Primary Text** (`#0b0c0c`): Near-black. All body text, headings, labels. The `govuk-functional-colour("text")` token.
- **Secondary Text** (`#484949`): Subdued text, captions, secondary information. tint-25 of black.
- **Pure Black** (`#000000`): Input text (raw DOM inspection).

### Semantic
- **Focus Yellow** (`#ffdd00`): The GOV.UK signature focus indicator. Applied as an outline on every focused element — the most recognizable accessibility signal in British digital government.
- **Error Red** (`#ca3535`): Error messages, warning buttons. `govuk-functional-colour("error")`.
- **Visited Purple** (`#54319f`): Visited link state — explicitly tracked in the design system to help users navigate without revisiting pages.
- **Success Green** (`#0f7a52`): Mirrors action green; used for success notification banners.

### Surface & Borders
- **White** (`#ffffff`): Page background, card surfaces, form inputs.
- **Surface Alt** (`#f3f3f3`): Secondary button background; tint-95 of black.
- **Hairline** (`#cecece`): Border default, tint-80 of black. Inset text panels, dividers.
- **Input Border** (`#0b0c0c`): Form inputs use a 2px solid near-black border — stronger than typical to ensure visibility at all contrast levels.

## 3. Typography Rules

### Font Family
- **Primary**: `"GDS Transport"`, `arial`, `sans-serif`
- GDS Transport is a custom-commissioned typeface used exclusively by the UK government. It is not publicly available for third-party use. In prototypes, `Arial` serves as the approved fallback.

### Hierarchy

| Role | Size | Weight | Use |
|------|------|--------|-----|
| Display Hero | 64px | 700 | GOV.UK homepage H1 (large service introductions) |
| Heading XL | 48px | 700 | Service H1 — main page heading |
| Heading L | 36px | 700 | H2 section headings (36px on DS site, 40px on gov.uk) |
| Heading M | 24px | 700 | H3 sub-section headings |
| Heading S | 19px | 700 | H4 small headings, component subsections |
| Body L | 19px | 400 | Lead paragraphs, button labels — the workhorse size |
| Body M | 16px | 400 | Standard body (smaller breakpoints) |
| Caption | 14px | 400 | Helper text, captions, metadata |

### Principles
- **Two weights only**: Regular (400) and Bold (700). No intermediate weights — the system uses weight to signal structure, not nuance.
- **19px as the UI default**: Button labels, navigation, form labels, and lead paragraphs all use 19px / 400, giving the system a confident readability at the cost of density.
- **Line-height by function**: Headings use tighter line-heights (1.1–1.25), body text is set at 1.25–1.31 for legibility.
- **No tracking manipulation**: GDS Transport is designed to be set at default tracking. Compressed letter-spacing is not used.
- **Uppercase rare**: The system avoids uppercase for readability — exceptions include navigation labels at smaller breakpoints.

## 4. Component Stylings

GOV.UK Design System components share three principles: 0px border-radius (no rounding), a 2px bottom shadow on interactive controls to communicate pressability, and the `#ffdd00` focus ring on all interactive elements. Default size values are shown; the system provides size modifiers where applicable.

### Buttons

**Primary (Save and continue)**
- Background: `#0f7a52`
- Text: `#ffffff`
- Radius: 0px
- Padding: 8px 10px 7px
- Font: 19px / 400 / GDS Transport
- Shadow: `0 2px 0 #083d29`
- Hover: background `#003a2e` (darker green)
- Focus: `#ffdd00` 3px outline + `#0b0c0c` underline
- Use: Primary CTA — "Save and continue", "Continue", "Confirm and send"

**Secondary (Find address)**
- Background: `#f3f3f3`
- Text: `#0b0c0c`
- Radius: 0px
- Padding: 8px 10px 7px
- Font: 19px / 400 / GDS Transport
- Shadow: `0 2px 0 #858686`
- Use: Secondary actions — "Find address", "Add another"

**Warning (Delete account)**
- Background: `#ca3535`
- Text: `#ffffff`
- Radius: 0px
- Padding: 8px 10px 7px
- Font: 19px / 400 / GDS Transport
- Shadow: `0 2px 0 #651b1b`
- Use: Destructive actions — "Delete account" (use sparingly, must include confirmation step)

**Start Now (Link button)**
- Background: `#0f7a52`
- Text: `#ffffff`
- Radius: 0px
- Font: 24px / 700 / GDS Transport
- Use: Service start page only — "Start now" (implemented as a styled link, not a button)

### Inputs

**Text Input**
- Background: `#ffffff`
- Text: `#0b0c0c`
- Border: 2px solid `#0b0c0c`
- Radius: 0px
- Padding: 5px
- Font: 19px / 400 / GDS Transport
- Focus: 3px `#ffdd00` outline ring
- Use: Single-line text entry

**Select**
- Background: `#ffffff`
- Text: `#0b0c0c`
- Border: 2px solid `#0b0c0c`
- Radius: 0px
- Padding: 5px
- Font: 19px / 400 / GDS Transport
- Use: Option list selection (native `<select>` element)

### Cards

**Inset Text**
- Text: `#0b0c0c`
- Border: 10px solid `#cecece` (left border only)
- Radius: 0px
- Padding: 15px
- Use: Supplementary important content — callouts, warnings, supplementary guidance

### Badges

**Tag (Completed)**
- Background: `#d2e2f1`
- Text: `#0f385c`
- Radius: 1px
- Padding: 2px 8px 3px
- Font: 19px / 400 / GDS Transport
- Use: Task list status labels — "Completed", "In progress", "Cannot start yet"

The system includes 12 semantic tag colour variants including grey, blue, green, turquoise, purple, pink, red, orange, yellow, brown, red-strong. All share the same geometry (1px radius, 2px 8px 3px padding, 19px/400).

### Toasts

**Notification Banner (Informational)**
- Background: `#1d70b8`
- Text: `#ffffff`
- Border: 5px solid `#1d70b8` (all sides)
- Radius: 0px
- Use: Announcements, important notifications at top of page

**Notification Banner (Success)**
- Background: `#0f7a52`
- Text: `#ffffff`
- Border: 5px solid `#0f7a52`
- Radius: 0px
- Use: Confirmation messages — "Your details have been saved"

---

**Verified:** 2026-06-22
**Tier 1 sources:** https://www.gov.uk/ (live DOM inspect — font, colour, button geometry); https://design-system.service.gov.uk/ (authoritative DS spec — colour tokens, component specs, button/input/tag/banner live measurements); https://design-system.service.gov.uk/styles/colour/ (full colour palette spec); https://design-system.service.gov.uk/components/button/ (button variants live); https://design-system.service.gov.uk/components/text-input/ (input spec live); https://design-system.service.gov.uk/components/tag/ (tag/badge spec live); https://design-system.service.gov.uk/components/notification-banner/ (banner spec live)
**Tier 2 sources:** getdesign.md/govuk — not listed (0 results); styles.refero.design/?q=GOV.UK — not listed
**Conflicts unresolved:** none — Tier 1 DS documentation is the gold standard and fully consistent with live DOM inspect.

## 5. Layout Principles

### Spacing System
- Base unit: 5px (fine) / 10px (medium) / 15px / 20px / 30px / 40px / 60px / 80px (section)
- The system defines spacing in multiples of 5 rather than the more common 4 or 8.
- GOV.UK Frontend provides a spacing scale via `govuk-spacing($spacing)` Sass function (0–9, mapping 0px to 80px).

### Grid & Container
- Max content width: 960px (govuk-width-container)
- Two-thirds/one-third split for content with side navigation
- Mobile-first with breakpoints at 40em (640px) mobile-medium, 48em (768px) tablet, 64em (1024px) desktop
- Gutters: 15px on mobile, 30px on desktop

### Whitespace Philosophy
- **Function over decoration**: White space is sized to aid reading comprehension, not to suggest premium positioning.
- **Consistent vertical rhythm**: headings follow a predictable 25px / 20px / 15px bottom-margin hierarchy.
- **No hero padding games**: The GOV.UK homepage header uses the blue header band with generous vertical padding as the only visual weight. Below that, content is flush and document-like.
- **Document density**: Unlike consumer products, GOV.UK services aim for moderate text density — users are reading to complete tasks, not browsing aesthetically.

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, body text, labels |
| Button (Level 1) | `0 2px 0 <shade-colour>` | All buttons — the only elevation in the system |
| Focus (Accessibility) | `#ffdd00` 3px outline + `#0b0c0c` box shadow | Keyboard focus ring on every interactive element |

**Shadow Philosophy**: GOV.UK uses exactly one shadow token: a 2px bottom drop shadow on interactive controls (buttons) that conveys pressability. The shadow colour is always a shade of the button background — green `#083d29` for primary, grey `#858686` for secondary, dark red `#651b1b` for warning. There is no ambient shadow, no floating elevation, no backdrop filter. The system is definitively flat except for this single functional shadow pattern.

## 7. Do's and Don'ts

### Do
- Use `#ffdd00` focus ring on every interactive element without exception
- Maintain 0px border-radius on all buttons, inputs, and components
- Use GDS green (`#0f7a52`) for primary action buttons
- Apply the 2px bottom shadow on all buttons in the correct shade
- Use `#1d70b8` govuk-blue for brand anchoring and links
- Set body text in GDS Transport (or Arial fallback) at 19px/400
- Use `#0b0c0c` (not pure black) for all primary text
- Give visited links the `#54319f` purple colour

### Don't
- Don't add border-radius to any component — the rectangular geometry is a system constraint, not a style preference
- Don't use the focus yellow (`#ffdd00`) as a decorative colour — it is reserved exclusively for focus states
- Don't omit the button bottom shadow — it is how users perceive pressability with zero border-radius
- Don't use custom fonts — GDS Transport is the only approved typeface; fall back to Arial only
- Don't make buttons pill-shaped or add gradient backgrounds
- Don't use the govuk-blue (`#1d70b8`) as a button background on services — GDS green (`#0f7a52`) is the action colour
- Don't break the colour contract — never use semantic error red for non-error contexts or visited purple for non-visited links
- Don't add decorative illustrations, gradients, or photography to service pages

## 8. Responsive Behavior

### Breakpoints
| Name | Min-width | Key Changes |
|------|-----------|-------------|
| Mobile | < 40em / 640px | Base layout, stacked columns, full-width components |
| Tablet | 48em / 768px | Two-column layouts, sidebar navigation appears |
| Desktop | 64em / 1024px | Full max-width container (960px), horizontal navigation |

### Touch Targets
- Buttons: minimum 44px height (38px rendered + generous padding)
- Form inputs: 40px height minimum
- Clickable area for links: generous padding added to ensure WCAG 2.5.5 Target Size
- Touch targets for checkboxes and radio buttons: full label is clickable

### Collapsing Strategy
- Navigation: horizontal desktop nav collapses to hamburger/accordion on mobile
- Two-thirds/one-third layouts collapse to single column
- Typography scale reduces at mobile (e.g. heading-xl: 48px → 32px on mobile)
- The GOV.UK header band maintains consistent presence at all widths

## 9. Agent Prompt Guide

### Quick Color Reference
- Brand / Links: Govuk Blue (`#1d70b8`)
- Primary CTA Background: GDS Green (`#0f7a52`)
- CTA Shadow: Green Dark (`#083d29`)
- Focus Ring: Yellow (`#ffdd00`)
- Page Background: White (`#ffffff`)
- Primary Text: Near-Black (`#0b0c0c`)
- Secondary Text: Dark Grey (`#484949`)
- Border / Hairline: Light Grey (`#cecece`)
- Error: Red (`#ca3535`)
- Visited: Purple (`#54319f`)
- Tag Background: Blue Tint (`#d2e2f1`)
- Tag Text: Dark Blue (`#0f385c`)

### Example Component Prompts
- "Build a GOV.UK primary button: `#0f7a52` background, white text, 0px radius, 8px 10px 7px padding, 19px/400 GDS Transport, `0 2px 0 #083d29` box-shadow. On focus: `#ffdd00` 3px outline."
- "Create a GOV.UK text input: white background, `#0b0c0c` text, 2px solid `#0b0c0c` border, 0px radius, 5px padding, 19px/400 GDS Transport. On focus: 3px `#ffdd00` outline."
- "Design a GOV.UK tag: `#d2e2f1` background, `#0f385c` text, 1px radius, 2px 8px 3px padding, 19px/400 GDS Transport. Label: 'Completed'."
- "Build a service page layout: white `#ffffff` background, `#1d70b8` header band with white 'GOV.UK' wordmark. Max content 960px. Heading 'Check your State Pension' at 36px/700 GDS Transport, `#0b0c0c`. Lead paragraph at 19px/400. Primary button 'Start now' in GDS green `#0f7a52`."
- "Create a notification banner: `#1d70b8` background, white text, 5px solid `#1d70b8` border, 0px radius. Header 'Important'. Body text in 19px/400 GDS Transport."

### Iteration Guide
1. The focus ring (`#ffdd00` yellow outline) is non-negotiable — include it on every interactive element
2. Border-radius stays at 0px — never add rounding to GOV.UK components
3. Button depth comes from the 2px bottom shadow only, not border-radius or background gradients
4. The govuk-blue `#1d70b8` is a brand/link colour; GDS green `#0f7a52` is the action/button colour — they serve different roles
5. GDS Transport is required; if unavailable use Arial (not Helvetica, not system-ui)
6. Visited links must turn `#54319f` — this is a user-experience requirement, not optional
7. Typography is bold (700) for all headings, 400 for body — no 500/600 weights exist in the system

## 10. Voice & Tone

GOV.UK's voice is the definition of institutional clarity: plain English, active voice, short sentences, and directness without warmth. The GDS content design principle is "writing for the web as people actually read it" — users scan, not read, and government services carry high-stakes consequences (tax filings, benefits claims, immigration status). Every word must justify its presence. The system bans jargon, Latin phrases, and anything that might obscure meaning for a person with low literacy, limited English, or a cognitive disability.

| Context | Tone |
|---|---|
| Service headings | Declarative, task-focused: "Check your State Pension", "Apply for Universal Credit" |
| Button labels | Active verb + optional object: "Start now", "Continue", "Save and continue", "Confirm and send" |
| Error messages | Specific and actionable: "Enter your date of birth" not "Invalid date" |
| Helper text | Prescriptive format guidance: "For example, 27 3 2007" |
| Notification banners | Factual, present tense: "Your appeal has been submitted" |
| Status tags | Past participle or noun: "Completed", "In progress", "Cannot start yet" |
| Guidance pages | Plain English, active voice, no Latin, no jargon, short sentences |

**Forbidden patterns:** "Please" (condescending in a service context), "Click here" (non-descriptive), "Submit" (command form; "Send" or "Confirm" preferred), jargon and acronyms without expansion, passive voice ("is required" → "you must"), stacked nouns ("government digital transformation programme dashboard").

## 11. Brand Narrative

GOV.UK launched in **2012** as the consolidation of 750+ government websites under a single domain, led by the **Government Digital Service (GDS)** — a unit established within the Cabinet Office to transform how digital services are delivered in the United Kingdom. The founding brief was radical in ambition: every UK government service should be "so simple, clear, and fast" that it does not need to be explained. Mike Bracken, the first Executive Director of GDS, described the goal as "the single online shop window for government" — one place where any person in the UK could access any service without knowing which department was responsible.

The GOV.UK Design System emerged from this mandate in **2018**, codifying the patterns that GDS had developed across hundreds of services since 2012. The system's central proposition is that the best service design is invisible — the user should complete their task without ever thinking about the interface. This led to the design system's most distinctive decisions: the custom GDS Transport typeface (legible under any condition), the bright yellow focus ring (absolutely unmissable), and the zero border-radius policy (clear, institutional, universally understood). Nothing in the system is decorative. Nothing is there to signal a brand aesthetic. Everything serves the task.

The UK government's commitment to the Web Content Accessibility Guidelines (WCAG) as a legal requirement for public sector bodies (under the Public Sector Bodies Accessibility Regulations 2018) means that accessibility is not an add-on to the GOV.UK Design System — it is the foundational constraint from which every token, component, and pattern is derived.

## 12. Principles

1. **Start with needs.** User needs, not government needs. Every component in the system exists because users need it to complete tasks — not because it looks good or signals innovation. GDS's founding design principle anchors every token decision.
2. **Accessibility is not optional.** WCAG 2.2 AA compliance is a UK legal requirement (Public Sector Bodies Accessibility Regulations 2018). The `#ffdd00` focus ring, the 2px thick input borders, the sufficient colour contrast of `#0b0c0c` on `#ffffff` — all derive from this legal mandate, not from stylistic preference.  *UI implication:* zero tolerance for decorative elements that reduce contrast or obscure focus states.
3. **Plain English everywhere.** The GDS Content Design Manual requires services to be written at reading age 9. *UI implication:* button labels are verbs ("Continue"), headings are tasks ("Check your eligibility"), error messages say exactly what to fix.
4. **Progressive enhancement.** GOV.UK services must work without JavaScript, without custom fonts, without modern CSS. The design system is built mobile-first, server-rendered, and degrades gracefully. *UI implication:* no component relies on JavaScript for its basic function.
5. **Consistency above originality.** Departments do not customise GOV.UK components to express their brand. The NHS, HMRC, and Home Office all use the same buttons, the same inputs, the same focus rings. *UI implication:* brand differentiation happens through service name and content, never through colour or geometry overrides.

## 13. Personas

*Personas below are illustrative archetypes informed by GOV.UK's publicly stated user research commitments and the breadth of UK residents who use government services.*

**Margaret Holt, 68, Sheffield.** First-generation digital government user, renewing her pension credit claim online for the first time. Uses a large-text browser setting and has moderate macular degeneration. She relies on the yellow focus ring to know where she is on the page — without it, she cannot complete the form. The 19px body text and 2px input borders are the minimum she can comfortably read. When the error message says "Enter your National Insurance number in the format QQ 12 34 56 C", she knows exactly what to type.

**Damilola Okonkwo, 29, Birmingham.** Recent UK immigrant filing a Universal Credit application for the first time. English is his third language. He uses GOV.UK's plain English guidance pages alongside a translation app. The numbered task list ("1. Check eligibility — Completed, 2. Create account — In progress") gives him a clear map of what has happened and what's next. He does not need to understand the GOV.UK brand — he needs to know he's in the right place and what to do next.

**Sara Johansson, 34, Edinburgh.** Front-end developer at a local council, building a planning permission service using GOV.UK Frontend. She uses the Design System documentation site daily. The component library's predictability is her productivity — if she needs a button, there are three variants: primary, secondary, warning. She does not need to make typographic decisions; the system has already made them. Her PR reviewers check that no custom colours have been introduced.

**Tom Bashford, 45, Bristol.** HMRC tax caseworker, reviewing self-assessment returns in the internal GOV.UK backoffice. Processes 80–100 returns per shift. The data-dense table layouts and consistent typography hierarchy let him scan at pace. A status tag showing "Requires review" in the orange variant is visible without reading the label — the colour semantic has been trained into muscle memory over three years of use.

## 14. States

| State | Treatment |
|---|---|
| **Empty (task list, no items started)** | Each task row shows status tag "Cannot start yet" in grey. Row heading in `#0b0c0c` 19px/400. No illustration, no empty-state artwork. Instruction text above explains the sequence. |
| **Empty (search results, zero rows)** | Sentence: "There are no results matching your search" at 19px/400. Suggestion to broaden criteria in helper text. No illustration. |
| **Loading (form submission)** | Spinner indicator with "Loading…" text. Buttons enter a disabled state with reduced opacity (0.5). The page does not navigate until the server responds. |
| **Loading (page navigation)** | No custom loading state — GOV.UK relies on browser native page transitions. Services are server-rendered; loading is fast enough that a custom skeleton is not warranted. |
| **Error (form validation)** | Error summary panel at top of page with jump links to each error field. Each error: field label + specific message. Field itself: 4px solid red `#ca3535` left border. Error message below field in red `#ca3535` 19px/400. Pattern: "There is a problem — [N] errors." |
| **Error (specific field — required)** | Message: "Enter your [field name]" — never "This field is required". Red `#ca3535` left border on input + error message `19px/400 #ca3535` below label. |
| **Error (specific field — format)** | Message: "Enter [field name] in the correct format, for example [example]". Same red treatment. |
| **Error (service unavailable)** | Dedicated error page. H1 "Sorry, the service is unavailable". Explanation. Alternative contact. No design embellishment. |
| **Success (form submitted)** | Confirmation page pattern: green `#0f7a52` panel with white checkmark icon, "Application submitted", reference number. No toast — the page IS the success state. |
| **Success (action within a flow)** | Notification banner: `#0f7a52` background, "Success" heading, description of what happened. Dismissible. |
| **Skeleton** | Not widely used — server-rendered pages use inline content from first paint. Some modern services show lightweight skeleton bars for dynamically loaded content. |
| **Disabled** | Buttons: `opacity: 0.5`, `pointer-events: none`, `cursor: not-allowed`, `aria-disabled="true"`. Inputs: `background: #f3f3f3`, `color: #737373`, `cursor: not-allowed`. |

## 15. Motion & Easing

**Durations:**

| Token | Value | Use |
|---|---|---|
| `govuk-motion-instant` | 0ms | Focus ring transitions (must be instant for accessibility) |
| `govuk-motion-fast` | 100ms | Button press, checkbox tick, input focus border change |
| `govuk-motion-standard` | 200ms | Accordion open/close, tab panel change |
| `govuk-motion-slow` | 300ms | Summary list expand, cookie banner dismiss |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Standard transitions |
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Expanding elements (accordions) |
| `ease-exit` | `cubic-bezier(0.4, 0, 1, 1)` | Dismissing elements (cookie banners) |

**Motion philosophy:** GOV.UK motion is conservative by mandate. The `prefers-reduced-motion` media query collapses all transitions to `motion-instant`. The system's users include people with vestibular disorders, epilepsy, and cognitive disabilities for whom unexpected motion is a barrier. No animation exists for aesthetic pleasure — each motion serves a signposting function (accordion opening = more content is visible, cookie banner disappearing = preference saved).

**Signature motions:**
1. **Focus ring transition**: Instantaneous — 0ms. The focus indicator must appear without delay for keyboard users to track their position.
2. **Accordion expand**: 200ms `ease-enter`, height from 0 to auto. A chevron icon rotates 180° in sync.
3. **Cookie banner dismiss**: 300ms `ease-exit` fade-out, then `display: none`. The browser scrolls to the main content automatically to ensure no content is hidden behind a newly collapsed header.
4. **Error summary appearance**: Instant — error summaries appear server-side on form re-render, not via animation. No scroll animation; the page focus moves to the error summary heading via JavaScript.
