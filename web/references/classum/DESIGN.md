---
id: classum
name: Classum
display_name_kr: Classum (클라썸)
country: KR
category: education
homepage: "https://www.classum.com"
primary_color: "#ff4438"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=classum.com&sz=256"
verified: "2026-07-13"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: public-marketing, url: "https://business.classum.com/", inspected: "2026-07-13" }
    - { id: learning, kind: public-marketing, url: "https://business.classum.com/learning", inspected: "2026-07-13" }
    - { id: university-lms, kind: public-marketing, url: "https://business.classum.com/university/lms", inspected: "2026-07-13" }
  sources:
    - { id: home-capture, kind: product-surface, url: "https://business.classum.com/", captured: "2026-07-13" }
    - { id: learning-capture, kind: product-surface, url: "https://business.classum.com/learning", captured: "2026-07-13" }
    - { id: university-lms-capture, kind: product-surface, url: "https://business.classum.com/university/lms", captured: "2026-07-13" }
    - { id: company-context, kind: official-doc, url: "https://business.classum.com/", captured: "2026-07-13" }
    - { id: lms-context, kind: official-doc, url: "https://business.classum.com/university/lms", captured: "2026-07-13" }
    - { id: culture-context, kind: official-doc, url: "https://careers.classum.com/culture", captured: "2026-07-13" }
    - { id: font-design, kind: official-doc, url: "https://github.com/orioncactus/pretendard/blob/main/packages/pretendard/docs/en/README.md", captured: "2026-07-13" }
    - { id: font-license, kind: license, url: "https://github.com/orioncactus/pretendard/blob/main/LICENSE", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.primary": &home { surface_id: home, source_id: home-capture, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.canvas": *home
    "tokens.colors.surface": *home
    "tokens.colors.ink": *home
    "tokens.colors.body": *home
    "tokens.colors.muted": &lms { surface_id: university-lms, source_id: university-lms-capture, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.on-primary": *home
    "tokens.typography.family.ui": *home
    "tokens.typography.marketing-body.size": *home
    "tokens.typography.marketing-body.weight": *home
    "tokens.typography.marketing-body.lineHeight": *home
    "tokens.typography.marketing-body.use": *home
    "tokens.typography.marketing-heading.size": *home
    "tokens.typography.marketing-heading.weight": *home
    "tokens.typography.marketing-heading.lineHeight": *home
    "tokens.typography.marketing-heading.use": *home
    "tokens.typography.action.size": *home
    "tokens.typography.action.weight": *home
    "tokens.typography.action.lineHeight": *home
    "tokens.typography.action.use": *home
    "tokens.spacing.xs": *home
    "tokens.spacing.sm": *home
    "tokens.spacing.md": *home
    "tokens.spacing.card": *lms
    "tokens.rounded.control": *home
    "tokens.rounded.card-item": *lms
    "tokens.rounded.card": *lms
    "tokens.shadow.flat": *home
    "tokens.components.nav-primary-action.type": *home
    "tokens.components.nav-primary-action.bg": *home
    "tokens.components.nav-primary-action.fg": *home
    "tokens.components.nav-primary-action.radius": *home
    "tokens.components.nav-primary-action.padding": *home
    "tokens.components.nav-primary-action.font": *home
    "tokens.components.nav-primary-action.states": *home
    "tokens.components.nav-primary-action.use": *home
    "tokens.components.nav-outline-light.type": *home
    "tokens.components.nav-outline-light.fg": *home
    "tokens.components.nav-outline-light.border": *home
    "tokens.components.nav-outline-light.radius": *home
    "tokens.components.nav-outline-light.padding": *home
    "tokens.components.nav-outline-light.font": *home
    "tokens.components.nav-outline-light.states": *home
    "tokens.components.nav-outline-light.use": *home
    "tokens.components.nav-outline-dark.type": *home
    "tokens.components.nav-outline-dark.fg": *home
    "tokens.components.nav-outline-dark.border": *home
    "tokens.components.nav-outline-dark.radius": *home
    "tokens.components.nav-outline-dark.padding": *home
    "tokens.components.nav-outline-dark.font": *home
    "tokens.components.nav-outline-dark.states": *home
    "tokens.components.nav-outline-dark.use": *home
    "tokens.components.large-primary-action.type": *home
    "tokens.components.large-primary-action.bg": *home
    "tokens.components.large-primary-action.fg": *home
    "tokens.components.large-primary-action.radius": *home
    "tokens.components.large-primary-action.padding": *home
    "tokens.components.large-primary-action.font": *home
    "tokens.components.large-primary-action.states": *home
    "tokens.components.large-primary-action.use": *home
    "tokens.components.university-grid-card.type": *lms
    "tokens.components.university-grid-card.bg": *lms
    "tokens.components.university-grid-card.fg": *lms
    "tokens.components.university-grid-card.radius": *lms
    "tokens.components.university-grid-card.padding": *lms
    "tokens.components.university-grid-card.font": *lms
    "tokens.components.university-grid-card.states": *lms
    "tokens.components.university-grid-card.use": *lms
tokens:
  source: reconciled
  extracted: "2026-07-13"
  note: "Values are selector-backed public marketing claims from three supplied captures. No authenticated Classum product UI, documentation chrome, interaction transition, or declared-only font is promoted."
  colors:
    primary: "#ff4438"
    canvas: "#f6f6f9"
    surface: "#ffffff"
    ink: "#232334"
    body: "#333333"
    muted: "#666b80"
    on-primary: "#ffffff"
  typography:
    family: { ui: "Pretendard Variable" }
    marketing-body: { size: 14, weight: 400, lineHeight: 1.43, use: "Repeated public-marketing text/card sample" }
    marketing-heading: { size: 52, weight: 700, lineHeight: 1.40, use: "Public-marketing H1/H2 sample" }
    action: { size: 15, weight: 600, lineHeight: 1.50, use: "Repeated public-marketing navigation action" }
  spacing: { xs: 6, sm: 8, md: 16, card: 30 }
  rounded: { control: 8, card-item: 12, card: 30 }
  shadow: { flat: "none" }
  components:
    nav-primary-action: { type: button, bg: "#ff4438", fg: "#ffffff", radius: "8px", padding: "6px 16px", font: "15px / 600 Pretendard Variable", states: "default only; no interaction state captured", use: "Public marketing navigation CTA; home::[data-omd-capture=4]" }
    nav-outline-light: { type: button, fg: "#ff4438", border: "1px solid #ff4438", radius: "8px", padding: "6px 16px", font: "15px / 600 Pretendard Variable", states: "default only; no interaction state captured", use: "Public marketing light-background navigation outline; home::[data-omd-capture=3]" }
    nav-outline-dark: { type: button, fg: "#ffffff", border: "1px solid #ffffff", radius: "8px", padding: "6px 16px", font: "15px / 600 Pretendard Variable", states: "default only; no interaction state captured", use: "Public marketing dark-background navigation outline; home::[data-omd-capture=8]" }
    large-primary-action: { type: button, bg: "#ff4438", fg: "#ffffff", radius: "8px", padding: "12px 34px", font: "18px / 600 Pretendard Variable", states: "default only; no interaction state captured", use: "Public marketing large CTA on home and learning routes; home::[data-omd-capture=17]" }
    university-grid-card: { type: card, bg: "#f6f6f9", fg: "#333333", radius: "30px", padding: "30px", font: "14px / 400 Pretendard Variable", states: "default only; no interaction state captured", use: "University-LMS public-marketing grid card; university-lms::div.grid-card" }
  components_harvested: true
---

# Design System Inspiration of Classum (클라썸)

## 1. Visual Theme & Atmosphere

Classum’s current public business site presents an AI-focused education offer for universities and corporate HR: the official home frames it as LMS, consultation, and skill solutions, while the university route focuses on an AI LMS for instructors and students. The three supplied routes are public marketing surfaces, not a captured signed-in learning application. Their visual system is therefore recorded as marketing expression only.

The captured pages pair a lavender-white field (`#F6F6F9` and `#FFFFFF`) with a signal-red action color (`#FF4438`). Large rounded content blocks and compact 8px actions keep the information-heavy pages calm without making their public CTAs look generic. The system is flat in the retained samples: `box-shadow: none` on the documented actions and ordinary grid cards.

## 2. Color Palette & Roles

- **Signal red** (`#FF4438`) — observed public-marketing action background and outline/action text. It is not asserted as an in-app destructive or status color.
- **Lavender canvas** (`#F6F6F9`) — observed public-marketing page/card background.
- **White surface** (`#FFFFFF`) — observed action and surface background.
- **Dark ink** (`#232334`) — observed dark action/background and text role on public marketing.
- **Body charcoal** (`#333333`) — repeated public-marketing text and card foreground.
- **Muted gray-violet** (`#666B80`) — university-LMS public-marketing supporting text sample.

No semantic success, warning, error, product-app, or documentation palette is claimed from these captures.

## 3. Typography Rules

### Verified public-marketing family

`Pretendard Variable` is the sole promoted UI family. It appears as the visible computed family across button, card, heading, and text roles (279 observed uses), is backed by a loaded `FontFace`, and has both jsDelivr and Classum-hosted WOFF2 sources in the supplied evidence. The upstream project documents the exact `"Pretendard Variable"` webfont family and distributes it under SIL Open Font License 1.1.

- **Marketing heading** — `52px / 700 / 72.8px`; observed public H1/H2 sample.
- **Marketing body** — `14px / 400 / 20px`; repeated public text/card sample.
- **Navigation action** — `15px / 600 / 22.5px`; repeated public navigation action.

`webflow-icons` is declared in the capture but has zero visible uses. It remains a declared-only icon asset, not a text family. No authenticated product or documentation font family was captured, so none is substituted or inferred.

## 4. Component Stylings

### Public marketing navigation primary action

**Default**
- Background: `#FF4438`
- Text: `#FFFFFF`
- Border: `0px solid #FFFFFF`
- Radius: `8px`
- Padding: `6px 16px`
- Font: `15px / 600 Pretendard Variable`
- Use: Home public-marketing navigation CTA; selector `home::[data-omd-capture="4"]`, six occurrences across the three captured routes.

### Public marketing navigation outline on light

**Default**
- Background: transparent
- Text: `#FF4438`
- Border: `1px solid #FF4438`
- Radius: `8px`
- Padding: `6px 16px`
- Font: `15px / 600 Pretendard Variable`
- Use: Home public-marketing light-background navigation action; selector `home::[data-omd-capture="3"]`, three occurrences across the captured routes.

### Public marketing navigation outline on dark

**Default**
- Background: transparent
- Text: `#FFFFFF`
- Border: `1px solid #FFFFFF`
- Radius: `8px`
- Padding: `6px 16px`
- Font: `15px / 600 Pretendard Variable`
- Use: Home public-marketing dark-background navigation action; selector `home::[data-omd-capture="8"]`, three occurrences across the captured routes.

### Public marketing large primary action

**Default**
- Background: `#FF4438`
- Text: `#FFFFFF`
- Border: `0px solid #FFFFFF`
- Radius: `8px`
- Padding: `12px 34px`
- Font: `18px / 600 Pretendard Variable`
- Use: Home and learning public-marketing large CTA; selector `home::[data-omd-capture="17"]`, two occurrences across those routes.

### University-LMS public-marketing grid card

**Default**
- Background: `#F6F6F9`
- Text: `#333333`
- Border: `0px solid #333333`
- Radius: `30px`
- Padding: `30px`
- Font: `14px / 400 Pretendard Variable`
- Use: University-LMS public-marketing grid card; selector `university-lms::div.grid-card`, two occurrences on that route.

The supplied bundle records zero interaction transitions. Hover, focus, pressed, selected, disabled, dialog, menu, tab, toast, and form-error variants are deliberately absent rather than invented.

## 5. Layout Principles

- The retained public routes use recurring 6px, 8px, 16px, and 30px spacing measurements; 30px is attached to the documented university-LMS cards, not promoted as a global application gutter.
- The public marketing page moves between compact navigation controls and large rounded content blocks. No responsive breakpoint, signed-in application layout, or documentation layout was captured.
- Use surface-local component geometry above; do not reuse a marketing CTA as an LMS workflow control without separate product evidence.

## 6. Depth & Elevation

The retained navigation actions and standard university-LMS grid card report `box-shadow: none`. One decorative university grid-card variant has a multicolor shadow in the raw evidence, but it is a separate `gradient-11` marketing decoration and is not generalized into the canonical elevation token. Treat the verified public marketing system as flat.

## 7. Do's and Don'ts

### Do
- Use `#FF4438` only where the captured public-marketing surface shows an action or outline action.
- Keep verified public marketing type in `Pretendard Variable` and preserve the observed 14px body and 15px compact-action scales.
- Use 8px for documented actions and 30px only for the documented university-LMS public grid-card treatment.
- Keep marketing cards flat unless a separately evidenced decorative variant is intentionally being reproduced.

### Don't
- Do not turn the public marketing red into an unverified product-state or destructive-action palette.
- Do not substitute system fonts for the loaded `Pretendard Variable` family.
- Do not fabricate app controls, documentation chrome, form states, or interaction states from the public landing pages.
- Do not treat the decorative multicolor-shadow card as a default card elevation.

## 8. Responsive Behavior

The supplied evidence is desktop `1440×900` only. It establishes no mobile breakpoint, mobile navigation state, or responsive component transformation. Preserve this uncertainty rather than extrapolating desktop marketing geometry into mobile or authenticated LMS behavior.

## 9. Agent Prompt Guide

For a Classum public-marketing surface, use the verified lavender canvas, white surfaces, `Pretendard Variable`, and red action treatment only in the source domain where each was observed. Prefer a flat composition with compact 8px navigation actions and route-local 30px university feature cards. If a task concerns an authenticated learner, instructor, administrator, documentation, form validation, or interactive state, request or collect that source-domain evidence before choosing components or tokens.

## 10. Voice & Tone

The current public copy is direct, formal Korean B2B/education copy: it names the audience (university, instructor, student, or HR) and pairs AI capability with an operational or learning outcome. Preserve that observed posture rather than inventing a casual consumer voice.

| Context | Observed guidance |
|---|---|
| Public headline | Lead with the educational or operational result, then name the audience. |
| CTA | Use short functional actions such as requesting material or making an inquiry. |
| Product explanation | Describe the specific learning or administrative task before the AI capability. |

## 11. Brand Narrative

Classum’s official historical material says the company was founded in 2018 by Chaerin Lee and Youjin Choi to address challenges they experienced as learners. Its current public home describes an AI-centered set of LMS, consultation, and skill solutions for university and corporate-HR audiences; the university LMS page concentrates on reducing preparation and evaluation work so instructors can focus on students. The narrative here is confined to those first-party statements and does not claim unobserved product-design intent.

## 12. Principles

1. **Name the education context.** Current public pages separate university and corporate-HR offers. *UI implication:* keep public navigation and feature groups audience-specific.
2. **Connect AI to a concrete task.** The university LMS page describes preparation, quizzes, grading, feedback, and learner support. *UI implication:* pair an AI claim with the supported learning task.
3. **Keep public calls to action legible.** The repeated public navigation action is red on white with an 8px radius. *UI implication:* retain the verified action hierarchy on comparable public marketing routes only.

## 13. Personas

The following are source-bound audience roles, not synthetic user research.

- **University instructor:** explicitly addressed on the public LMS page in the context of lesson preparation, assessment, feedback, and student-focused teaching.
- **University student:** explicitly addressed on the same page as a participant in AI-supported, self-directed learning.
- **Corporate HR audience:** explicitly named on the official home as the audience for Classum’s corporate/skill-solution offer.

No behavioral, demographic, or satisfaction claims are inferred beyond those public audience descriptions.

## 14. States

| State | Evidence boundary |
|---|---|
| Empty | Not captured on the three public marketing routes. |
| Loading | Not captured. |
| Inline error | Not captured. |
| Form error | Not captured. |
| Success | Not captured. |
| Disabled | Not captured. |
| Skeleton | Not captured. |
| Hover | Not captured; interaction count is zero. |
| Focus | Not captured; interaction count is zero. |
| Pressed | Not captured; interaction count is zero. |

## 15. Motion & Easing

No motion timing, easing token, or interaction transition is promoted. The supplied capture reports zero interaction kinds and zero interaction events. A future source-specific inspection is required before defining public marketing, authenticated product, or documentation motion behavior.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://business.classum.com/ · https://business.classum.com/learning · https://business.classum.com/university/lms · https://careers.classum.com/culture · https://github.com/orioncactus/pretendard/blob/main/packages/pretendard/docs/en/README.md · https://github.com/orioncactus/pretendard/blob/main/LICENSE
**Tier 2 sources:** https://getdesign.md/classum (retrieval attempted; no importable record returned) · https://styles.refero.design/?q=classum (retrieval attempted; no importable record returned)
**Conflicts unresolved:** none
