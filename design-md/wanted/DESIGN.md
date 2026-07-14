---
id: wanted
name: Wanted
country: KR
category: productivity
homepage: "https://www.wanted.co.kr"
primary_color: "#0066ff"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=wanted.co.kr&sz=256"
verified: "2026-07-12"
omd: "0.1"
ds:
  name: Wanted Montage
  url: "https://montage.wanted.co.kr/"
  type: system
  description: Wanted's official product-experience design system with foundations, cross-platform components, UI kits, utilities, and usage guidance.
verification_v2:
  schema: 2
  checked: "2026-07-12"
  surfaces:
    - { id: home, kind: product-home, url: "https://www.wanted.co.kr/", inspected: "2026-07-12" }
    - { id: jobs, kind: product-directory, url: "https://www.wanted.co.kr/wdlist/518", inspected: "2026-07-12" }
    - { id: company, kind: product-service, url: "https://www.wanted.co.kr/company", inspected: "2026-07-12" }
    - { id: montage, kind: official-design-system, url: "https://montage.wanted.co.kr/", inspected: "2026-07-12" }
    - { id: foundations, kind: official-design-system, url: "https://montage.wanted.co.kr/docs/foundations", inspected: "2026-07-12" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.wanted.co.kr/", captured: "2026-07-12" }
    - { id: jobs-live, kind: product-surface, url: "https://www.wanted.co.kr/wdlist/518", captured: "2026-07-12" }
    - { id: company-live, kind: product-surface, url: "https://www.wanted.co.kr/company", captured: "2026-07-12" }
    - { id: montage-live, kind: official-doc, url: "https://montage.wanted.co.kr/", captured: "2026-07-12" }
    - { id: foundations-live, kind: official-doc, url: "https://montage.wanted.co.kr/docs/foundations", captured: "2026-07-12" }
    - { id: typography-doc, kind: official-doc, url: "https://montage.wanted.co.kr/docs/utilities/web-utilities/typography-style", captured: "2026-07-12" }
    - { id: text-button-doc, kind: official-doc, url: "https://montage.wanted.co.kr/docs/components/actions/text-button/design", captured: "2026-07-12" }
  conflicts: []
  claims:
    "tokens.colors.primary": &home_evidence { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-07-12" }
    "tokens.colors.canvas": *home_evidence
    "tokens.colors.heading": *home_evidence
    "tokens.colors.body": *home_evidence
    "tokens.colors.secondary": &jobs_evidence { surface_id: jobs, source_id: jobs-live, method: live-inspect, captured: "2026-07-12" }
    "tokens.colors.subtle-surface": *home_evidence
    "tokens.colors.hairline": *jobs_evidence
    "tokens.colors.on-primary": *home_evidence
    "tokens.typography.family.ui": *home_evidence
    "tokens.typography.heading.size": *jobs_evidence
    "tokens.typography.heading.weight": *jobs_evidence
    "tokens.typography.heading.lineHeight": *jobs_evidence
    "tokens.typography.heading.tracking": *jobs_evidence
    "tokens.typography.heading.use": *jobs_evidence
    "tokens.typography.subtitle.size": *jobs_evidence
    "tokens.typography.subtitle.weight": *jobs_evidence
    "tokens.typography.subtitle.lineHeight": *jobs_evidence
    "tokens.typography.subtitle.tracking": *jobs_evidence
    "tokens.typography.subtitle.use": *jobs_evidence
    "tokens.typography.body.size": *home_evidence
    "tokens.typography.body.weight": *home_evidence
    "tokens.typography.body.lineHeight": *home_evidence
    "tokens.typography.body.use": *home_evidence
    "tokens.typography.caption.size": *jobs_evidence
    "tokens.typography.caption.weight": *jobs_evidence
    "tokens.typography.caption.lineHeight": *jobs_evidence
    "tokens.typography.caption.tracking": *jobs_evidence
    "tokens.typography.caption.use": *jobs_evidence
    "tokens.spacing.xs": *jobs_evidence
    "tokens.spacing.sm": *home_evidence
    "tokens.spacing.md": *jobs_evidence
    "tokens.spacing.lg": *home_evidence
    "tokens.spacing.xl": *home_evidence
    "tokens.rounded.control": *home_evidence
    "tokens.rounded.card": *jobs_evidence
    "tokens.rounded.menu": &montage_evidence { surface_id: montage, source_id: montage-live, method: live-inspect, captured: "2026-07-12" }
    "tokens.rounded.full": *home_evidence
    "tokens.shadow.menu": *montage_evidence
    "tokens.components.header-action.type": *home_evidence
    "tokens.components.header-action.bg": *home_evidence
    "tokens.components.header-action.fg": *home_evidence
    "tokens.components.header-action.border": *home_evidence
    "tokens.components.header-action.radius": *home_evidence
    "tokens.components.header-action.padding": *home_evidence
    "tokens.components.header-action.height": *home_evidence
    "tokens.components.header-action.font": *home_evidence
    "tokens.components.header-action.states": *home_evidence
    "tokens.components.header-action.use": *home_evidence
    "tokens.components.filter-button.type": *jobs_evidence
    "tokens.components.filter-button.bg": *jobs_evidence
    "tokens.components.filter-button.fg": *jobs_evidence
    "tokens.components.filter-button.border": *jobs_evidence
    "tokens.components.filter-button.radius": *jobs_evidence
    "tokens.components.filter-button.padding": *jobs_evidence
    "tokens.components.filter-button.height": *jobs_evidence
    "tokens.components.filter-button.font": *jobs_evidence
    "tokens.components.filter-button.states": *jobs_evidence
    "tokens.components.filter-button.use": *jobs_evidence
    "tokens.components.mini-job-card.type": *home_evidence
    "tokens.components.mini-job-card.bg": *home_evidence
    "tokens.components.mini-job-card.radius": *home_evidence
    "tokens.components.mini-job-card.gap": *home_evidence
    "tokens.components.mini-job-card.font": *home_evidence
    "tokens.components.mini-job-card.use": *home_evidence
    "tokens.components.job-card.type": *jobs_evidence
    "tokens.components.job-card.bg": *jobs_evidence
    "tokens.components.job-card.radius": *jobs_evidence
    "tokens.components.job-card.bodyPadding": *jobs_evidence
    "tokens.components.job-card.gap": *jobs_evidence
    "tokens.components.job-card.font": *jobs_evidence
    "tokens.components.job-card.use": *jobs_evidence
    "tokens.components.search-dialog.type": *home_evidence
    "tokens.components.search-dialog.bg": *home_evidence
    "tokens.components.search-dialog.fg": *home_evidence
    "tokens.components.search-dialog.inputFont": *home_evidence
    "tokens.components.search-dialog.states": *home_evidence
    "tokens.components.search-dialog.use": *home_evidence
    "tokens.components.montage-menu.type": *montage_evidence
    "tokens.components.montage-menu.bg": *montage_evidence
    "tokens.components.montage-menu.radius": *montage_evidence
    "tokens.components.montage-menu.gap": *montage_evidence
    "tokens.components.montage-menu.shadow": *montage_evidence
    "tokens.components.montage-menu.states": *montage_evidence
    "tokens.components.montage-menu.use": *montage_evidence
tokens:
  source: reconciled
  extracted: "2026-07-12"
  note: "Six-surface current capture plus official Montage docs. Pretendard Variable is the visible UI family. Wanted Sans Variable and Pretendard JP Variable were declared but had zero visible use in the capture and are not promoted as UI tokens."
  colors:
    primary: "#0066ff"
    canvas: "#ffffff"
    heading: "#171719"
    body: "#333333"
    secondary: "#858688"
    subtle-surface: "#f8f8f8"
    hairline: "#e8e9ea"
    on-primary: "#ffffff"
  typography:
    family: { ui: "Pretendard Variable" }
    heading: { size: 22, weight: 600, lineHeight: 1.36, tracking: -0.4268, use: "Current product section headings and Montage headings" }
    subtitle: { size: 16, weight: 600, lineHeight: 1.5, tracking: 0.0912, use: "Job-card position title" }
    body: { size: 14, weight: 400, lineHeight: 1.43, use: "Product lists, cards, actions, and supporting copy" }
    caption: { size: 12, weight: 500, lineHeight: 1.33, tracking: 0.3024, use: "Job-card industry and metadata" }
  spacing: { xs: 4, sm: 8, md: 14, lg: 20, xl: 40 }
  rounded: { control: 8, card: 12, menu: 16, full: 9999 }
  shadow:
    menu: "0 2px 4px -2px rgba(23,23,23,0.06), 0 4px 6px -1px rgba(23,23,23,0.06)"
  components_harvested: true
  components:
    header-action: { type: button, bg: "transparent", fg: "#0066ff", border: "1px inset rgba(112,115,124,0.16)", radius: "8px", padding: "7px 14px", height: "32px", font: "14px / 400", states: "default captured; no hover/focus token promoted", use: "Current product header account action" }
    filter-button: { type: button, bg: "transparent", fg: "#171719", border: "1px inset rgba(112,115,124,0.16)", radius: "8px", padding: "7px 11px", height: "36px", font: "14px / 400", states: "default captured; no selected value inferred", use: "All-tags and filter trigger on the job directory" }
    mini-job-card: { type: card, bg: "transparent", radius: "12px image", gap: "14px", font: "16px / 600 title", use: "Horizontal recommended-job card on the current home surface" }
    job-card: { type: card, bg: "transparent", radius: "12px thumbnail", bodyPadding: "0px 6px", gap: "2px", font: "16px / 600 position title", use: "Vertical job result card on the current directory" }
    search-dialog: { type: input, bg: "#ffffff", fg: "#171719", inputFont: "16px / 400 / 24px", states: "dialog-open captured on four product surfaces", use: "Full-screen product search input revealed from the header" }
    montage-menu: { type: dialog, bg: "transparent", radius: "16px", gap: "4px", shadow: "0 2px 4px -2px rgba(23,23,23,0.06), 0 4px 6px -1px rgba(23,23,23,0.06)", states: "dialog-open captured on Montage pages", use: "Compact current Montage navigation/menu overlay" }
---

# Design System Inspiration of Wanted (원티드)

## 1. Visual Theme & Atmosphere

Wanted is a Korean career platform that connects job discovery, company information, career content, and employer services around the idea that every working person should be able to work more like themselves. Its current product is quieter and denser than a campaign page: white surfaces, `#171719` headings, `#333333` body copy, restrained translucent metadata, and `#0066ff` reserved for recognizable actions. The signature visual unit is not a generic elevated card but a job result composed from a 12px media thumbnail, a compact 16px/600 position title, company and location metadata, and generous grid rhythm.

Montage is Wanted's current official product-experience design system. Its 2026 site frames reusable foundations and components as a way to combine individual parts into a consistent, intuitive service, and publishes cross-platform component guidance rather than only a static brand kit. The live product and Montage capture both visibly used Pretendard Variable. Wanted Sans Variable and Pretendard JP Variable were present as declared downloadable faces but had zero visible computed use in the inspected nodes, so this reference keeps their existence as font evidence without rendering either as the current UI family.

**Key Characteristics:**
- `#0066ff` interactive accent on a white product canvas
- Loaded Pretendard Variable with 1,575 visible uses across product and Montage
- 12px image/card geometry, 8px controls, and 16px overlay menus
- Product search dialog captured through safe interaction on four product routes
- Current job-card composition documented separately from Montage primitives

## 2. Color Palette & Roles

- **Primary action** (`#0066ff`): current account/action text across four product surfaces.
- **Heading** (`#171719`): product headings, position titles, and controls.
- **Body** (`#333333`): dominant product list and card copy.
- **Secondary** (`#858688`): the observed 61% metadata color resolved on white.
- **Canvas** (`#ffffff`): page, dialog, and content surface.
- **Subtle surface** (`#f8f8f8`): current secondary product background.
- **Hairline** (`#e8e9ea`): the observed 16% control boundary resolved on white.

The old marketing orange, pink, sky, violet, semantic error/success/warning, and `#f7f7f8` claims were not promoted because the current capture did not establish those roles at the same surface boundary.

## 3. Typography Rules

### Font evidence boundary

| Evidence class | Resolution |
|---|---|
| Official product-use | Montage publishes Wanted's current product typography utilities and scale. |
| Live surface-use | Pretendard Variable loaded/high with 1,575 visible uses across six captured surfaces. |
| Official distributed asset | Montage links font resources; asset licensing must be checked per resource before redistribution. |
| Declared-only | Pretendard JP Variable and Wanted Sans Variable were declared with source files but zero visible use. |
| Unresolved | Campaign-only use of Wanted Sans and native-app overrides remain unresolved. |

### Current observed hierarchy

| Role | Size | Weight | Line height | Tracking |
|---|---:|---:|---:|---:|
| Section heading | 22px | 600 | 30px | -0.4268px |
| Job position | 16px | 600 | 24px | 0.0912px |
| Supporting title | 15px | 600 | 22px | 0.144px |
| Product body | 14px | 400 | 20px | normal |
| Metadata | 12px | 500 | 16px | 0.3024px |

Montage's official typography utility documents a broader scale from Display 1 through Caption 2. That published scale is useful system context; the smaller machine token set above contains only roles grounded in this capture.

## 4. Component Stylings

### Current verified components

#### Header account action
- Transparent background, `#0066ff` label, 8px radius
- 1px translucent inset boundary; 7px × 14px padding; 32px height

#### Job filter trigger
- Transparent, `#171719`, 8px radius, 1px translucent inset boundary
- 7px × 11px padding; 36px height; 14px/400

#### Mini job card
- Horizontal 120×90 media with 12px radius and 14px content gap
- Position title 16px/600/24px

#### Directory job card
- 308×205 media thumbnail with 12px radius and 8px bottom margin
- Body uses 0 6px padding and 2px internal gap; position title 16px/600

#### Search dialog
- White full-screen search surface revealed through the current header
- Input `#171719`, 16px/400/24px; `dialog-open` observed on four product routes

#### Montage menu
- 16px radius, 4px gap, subtle two-layer shadow
- Open overlay captured on both Montage surfaces

No filled apply CTA, segmented control, form validation, toast, or native navigation token is promoted without a current matching sample.

## 5. Layout Principles

- Job discovery uses repeatable grid rhythm while the card body itself stays flat.
- Keep 12px media rounding distinct from 8px product controls and 16px overlays.
- Dense metadata belongs below a clear 16px/600 position title.
- Product composition and Montage documentation examples may share foundations but are not interchangeable evidence.

## 6. Depth & Elevation

Most current product cards are flat. Controls use an inset 1px translucent boundary, while the captured Montage menu uses a low-opacity two-layer shadow. No generic modal shadow is promoted.

## 7. Do's and Don'ts

### Do
- Reserve `#0066ff` for clear actions and selection meaning.
- Use the verified flat job-card composition for career listings.
- Keep declared fonts separate from visibly used fonts.

### Don't
- Do not render Wanted Sans as current product UI merely because its files are declared.
- Do not invent colored semantic states or filled CTAs from an old snapshot.
- Do not turn every content block into a shadowed 12px card.

## 8. Responsive Behavior

The inspected product adapts repeated job units and search overlays while retaining the same type and radius hierarchy. Exact breakpoints and native-app navigation behavior were not promoted from these desktop captures.

## 9. Agent Prompt Guide

> Build a calm Korean career-discovery surface with a white canvas, `#171719` headings, `#333333` body text, `#0066ff` actions, Pretendard Variable, flat job cards, 12px media, and compact 8px filter controls. Include only observed search-dialog state; omit speculative status colors and native patterns.

## 10. Voice & Tone

Wanted's official system language is practical, encouraging, and centered on helping working people become more themselves. Product copy should make the next career action legible without overpromising a match or outcome. Search, filter, and job-detail language should prioritize concrete role, company, location, and process information. Employer-facing or system documentation may be more technical, but should preserve the same directness and respect for the reader's decision. Use direct labels, specific role/company information, and respectful guidance rather than motivational clichés.

## 11. Brand Narrative

Wanted's service story connects career possibility with a concrete browsing and matching workflow. Montage extends that promise internally: separate foundations and components combine into one coherent product experience, emphasizing extensibility, consistency, and efficiency. The current product therefore feels systematic without looking like a component showcase—blue actions and job information carry the experience while decoration stays secondary. The relationship matters because career decisions require both emotional confidence and reliable comparison. Wanted's public product supplies the browsable opportunities, while Montage documents how repeatable interaction patterns keep that information coherent as teams add new features. Typography stays neutral and highly legible so role and company evidence can lead. Brand color marks actions and ownership without turning every listing into campaign content.

## 12. Principles

1. **Help people work more like themselves.** Career choices should remain understandable and user-directed.
2. **Compose consistency from reusable parts.** Follow Montage's published extensibility, consistency, and efficiency framing.
3. **Information leads decoration.** Job role, company, and metadata establish hierarchy before campaign color.
4. **Font truth follows visible use.** A declared asset is not automatically the current UI face.

## 13. Personas

Public surfaces establish task contexts, not verified biographical personas:
- A job seeker comparing role, company, location, and reward information.
- A working professional using search to narrow a new career direction.
- An employer or product maker consulting Wanted's company service or Montage guidance.

Project-specific names, ages, goals, company sizes, and conversion assumptions are intentionally unspecified and must come from the product brief.

## 14. States

The current full-screen search dialog and Montage menu open states were captured. Default product buttons and filters were captured without a safe hover/focus expansion. Error, success, loading, empty, disabled, and application-completion states remain absent.

## 15. Motion & Easing

No reusable duration or easing token was established. Dialog/menu expansion proves state change only; it does not authorize a universal motion curve.

---

**Verified:** 2026-07-12 (omd:migrate)
**Tier 1 sources:** https://www.wanted.co.kr/ ; https://www.wanted.co.kr/wdlist/518 ; https://www.wanted.co.kr/company ; https://montage.wanted.co.kr/ ; https://montage.wanted.co.kr/docs/foundations ; https://montage.wanted.co.kr/docs/utilities/web-utilities/typography-style ; https://montage.wanted.co.kr/docs/components/actions/text-button/design
**Tier 2 attempts:** getdesign.md/wanted and styles.refero.design search; unavailable as positive evidence
**Conflicts unresolved:** none
