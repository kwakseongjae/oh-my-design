---
id: datarize
name: Datarize
display_name_kr: 데이터라이즈
country: KR
category: marketing
homepage: "https://www.datarize.ai"
primary_color: "#191919"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=datarize.ai&sz=128"
verified: "2026-07-13"
added: "2026-06-26"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: marketing, url: "https://www.datarize.ai/", inspected: "2026-07-13" }
    - { id: blog, kind: editorial, url: "https://www.datarize.ai/blog/hidden_product", inspected: "2026-07-13" }
    - { id: pricing, kind: pricing, url: "https://www.datarize.ai/pricing", inspected: "2026-07-13" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.datarize.ai/", captured: "2026-07-13" }
    - { id: blog-live, kind: product-surface, url: "https://www.datarize.ai/blog/hidden_product", captured: "2026-07-13" }
    - { id: pricing-live, kind: product-surface, url: "https://www.datarize.ai/pricing", captured: "2026-07-13" }
    - { id: about, kind: official-doc, url: "https://www.datarize.ai/en/about", captured: "2026-07-13" }
    - { id: terms, kind: official-doc, url: "https://policy.datarize.ai/en/terms", captured: "2026-07-13" }
    - { id: product-guide, kind: official-doc, url: "https://datarize.gitbook.io/docs/guide-en", captured: "2026-07-13" }
    - { id: pretendard-project, kind: official-doc, url: "https://github.com/orioncactus/pretendard/blob/main/packages/pretendard/docs/en/README.md", captured: "2026-07-13" }
    - { id: pretendard-license, kind: license, url: "https://github.com/orioncactus/pretendard/blob/main/LICENSE", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.action": &home { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.colors.body": &blog { surface_id: blog, source_id: blog-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.colors.canvas": *home
    "tokens.colors.hairline": *home
    "tokens.colors.ink": *home
    "tokens.colors.link": *home
    "tokens.colors.surface": &pricing { surface_id: pricing, source_id: pricing-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.components.pricing-tab.bg": *pricing
    "tokens.components.pricing-tab.fg": *pricing
    "tokens.components.pricing-tab.font": *pricing
    "tokens.components.pricing-tab.padding": *pricing
    "tokens.components.pricing-tab.radius": *pricing
    "tokens.components.pricing-tab.states": *pricing
    "tokens.components.pricing-tab.type": *pricing
    "tokens.components.pricing-tab.use": *pricing
    "tokens.rounded.full": *home
    "tokens.rounded.md": *home
    "tokens.rounded.pill": *home
    "tokens.rounded.sm": *home
    "tokens.shadow.none": *home
    "tokens.spacing.lg": *home
    "tokens.spacing.md": *home
    "tokens.spacing.section": *home
    "tokens.spacing.sm": *home
    "tokens.spacing.xl": *home
    "tokens.spacing.xs": *home
    "tokens.spacing.xxl": *home
    "tokens.spacing.xxxl": *home
    "tokens.typography.body.lineHeight": *blog
    "tokens.typography.body.size": *blog
    "tokens.typography.body.use": *blog
    "tokens.typography.body.weight": *blog
    "tokens.typography.cta.size": *home
    "tokens.typography.cta.use": *home
    "tokens.typography.cta.weight": *home
    "tokens.typography.display-hero.lineHeight": *home
    "tokens.typography.display-hero.size": *home
    "tokens.typography.display-hero.tracking": *home
    "tokens.typography.display-hero.use": *home
    "tokens.typography.display-hero.weight": *home
    "tokens.typography.family.marketing": *home
    "tokens.typography.nav.lineHeight": *home
    "tokens.typography.nav.size": *home
    "tokens.typography.nav.use": *home
    "tokens.typography.nav.weight": *home
    "tokens.typography.section.lineHeight": *home
    "tokens.typography.section.size": *home
    "tokens.typography.section.tracking": *home
    "tokens.typography.section.use": *home
    "tokens.typography.section.weight": *home
tokens:
  source: live-extract
  extracted: "2026-07-13"
  note: "July evidence covers Datarize-owned Korean marketing home, blog, and pricing surfaces at desktop. It does not cover the authenticated console, GitBook documentation chrome, or an official design system."
  colors:
    canvas: "#ffffff"
    ink: "#191919"
    action: "#111111"
    body: "#5d6875"
    link: "#007aff"
    surface: "#f2f5fa"
    hairline: "#e5e7eb"
  typography:
    family: { marketing: "Pretendard" }
    display-hero: { size: 64, weight: 700, lineHeight: 83.2, tracking: -3.2, use: "Marketing homepage H1; loaded Pretendard Bold" }
    section: { size: 44, weight: 600, lineHeight: 57.2, tracking: -0.05, use: "Marketing H2; loaded Pretendard SemiBold" }
    body: { size: 16, weight: 400, lineHeight: 24, use: "Blog and pricing body copy; loaded Pretendard Regular" }
    nav: { size: 15, weight: 500, lineHeight: 21, use: "Marketing navigation; loaded Pretendard Medium" }
    cta: { size: 16, weight: 600, use: "Marketing CTA links; loaded Pretendard Variable" }
  spacing: { xs: 6, sm: 8, md: 10, lg: 14, xl: 16, xxl: 20, xxxl: 24, section: 32 }
  rounded: { sm: 8, md: 10, pill: 50, full: 999 }
  shadow:
    none: "none"
  components_harvested: true
  components:
    pricing-tab: { type: tab, bg: "#ffffff", fg: "#191919", radius: "999px", padding: "8px 16px", font: "12px / 400 Pretendard", states: "selected and alternate selection captured after tab interaction", use: "Observed selected pricing tab on the public pricing surface" }
---

# Design System Inspiration of Datarize

## 1. Visual Theme & Atmosphere

Datarize is an e-commerce growth and CRM platform: its official site presents AI that turns customer behavior into analysis, campaign action, and revenue growth. The current public story is broader than a single campaign tool—Audience, on-site banners, email, analytics, and metrics sit in its product navigation—while its guide describes the operational sequence from store data collection to campaign execution. The company frames that as “Autonomous Marketing Intelligence,” a current international-facing expression alongside its Korean marketing surfaces.

On the supplied July desktop capture, the Korean marketing home, blog route, and pricing page are restrained rather than dashboard-like: white is the canvas (`#ffffff`), with near-black `#191919` carrying most visible text and a smaller `#111111` action treatment. The most repeatable contrast is structural, not decorative—white and near-black CTA pills, an outlined alternate action, and a pale `#f2f5fa` pricing tab group. A medium blue `#007aff` appears as a home-page text-link accent, while `#5d6875` is the most frequently observed supporting copy color. This document intentionally does not carry forward prior lime, yellow, royal-blue, or large-card claims: they were not observed in the July evidence bundle.

The recognizable typography is a Korean marketing stack built from loaded Pretendard faces: Bold sets a 64px hero, SemiBold sets 44px section headings, and Regular/Medium handle body and navigation. The evidence supports this for the captured marketing surfaces only. The authenticated console, linked GitBook documentation chrome, and any separate product UI system were not captured, so this is not a statement that one visual system governs every Datarize surface.

**Key Characteristics:**

- White canvas (`#ffffff`) with near-black `#191919` marketing text
- `#111111` and `#191919` pill CTAs; `#111111` also appears as the outlined CTA ink
- Loaded Pretendard variants on the captured marketing surfaces
- `#007aff` home-page text-link accent and `#5d6875` supporting copy
- 8px / 10px small corners and 50px / 100px / 999px pill geometry
- Flat observed controls (`box-shadow: none`); no general elevation scale is claimed

## 2. Color Palette & Roles

### Observed Marketing Colors

- **Canvas** (`#ffffff`): Captured page and selected-tab background.
- **Marketing Ink** (`#191919`): Dominant text/border value across the three captured surfaces; also the fill of a shared 50px CTA link.
- **Action Ink** (`#111111`): Captured 50px home CTA fill and the text/border of outline CTA links.
- **Supporting Slate** (`#5d6875`): Frequently captured supporting text, including pricing content.
- **Text-link Blue** (`#007aff`): Home-only text-link accent in the supplied bundle.
- **Pale Surface** (`#f2f5fa`): Observed as the pricing tab-group background; it is not promoted to a general card token.
- **Hairline** (`#e5e7eb`): Observed on home testimonial-navigation buttons.

### Boundary

`#f9ff91`, `#f7ff91`, `#ffef42`, and `#466cf3` appeared in the previous reference but were not present in the July raw color observations. They are therefore absent from the canonical palette and tokens rather than treated as a current brand fact.

## 3. Typography Rules

### Evidence classes

- **Live marketing-surface use:** the July bundle records loaded `Pretendard Regular` (177 visible uses), `Pretendard Medium` (85), `Pretendard SemiBold` (58), `Pretendard Variable` (13, with 92 jsDelivr source URLs), and `Pretendard Bold` (3). These faces support the named typography entries below.
- **Live but not promoted:** the literal computed family `Pretendard` occurs without a matching loaded face (21 uses), and `Inter` has one loaded visible use without a source URL. Neither becomes a general Datarize family token.
- **Declared-only:** `Fragment Mono`, `Inter Placeholder`, and several Pretendard placeholder/weight declarations have zero visible use. They are not design tokens.
- **Official distributed font asset and license:** Pretendard’s own repository documents web distribution and SIL Open Font License 1.1. This corroborates the captured webfont source and licensing boundary; it is not an official Datarize typography guideline.
- **Product/console boundary:** Datarize’s terms identify `console.datarize.ai` as the service page, but it was not captured. No font claim here is generalized to that product surface.

### Captured hierarchy

| Role | Family evidence | Size | Weight | Line height | Tracking | Captured context |
|---|---|---:|---:|---:|---:|---|
| Marketing hero | Pretendard Bold, loaded | 64px | 700 | 83.2px | -3.2px | Homepage H1 |
| Section heading | Pretendard SemiBold, loaded | 44px | 600 | 57.2px | -0.05px | Homepage H2 |
| Supporting heading | Pretendard SemiBold, loaded | 24px | 600 | 33.6px | -1.2px | Captured marketing heading |
| Body | Pretendard Regular, loaded | 16px | 400 | 24px | normal | Blog/pricing body copy |
| Navigation | Pretendard Medium, loaded | 15px | 500 | 21px | normal | Shared marketing navigation |
| CTA | Pretendard Variable, loaded | 16px | 600 | normal | normal | Home/pricing CTA links |

## 4. Component Stylings

### Marketing CTA links

**Action ink pill**

- Background: `#111111`
- Text: `#ffffff`
- Border: 0px solid `#ffffff`
- Radius: 50px
- Padding: 14px 24px
- Font: 16px / 600 / Pretendard Variable
- Height: 47px
- Use: Homepage anchor; evidence `home::[data-omd-capture="11"]` on the marketing home.

**Shared ink pill**

- Background: `#191919`
- Text: `#ffffff`
- Border: 0px solid `#ffffff`
- Radius: 50px
- Padding: 14px 24px
- Font: 15px / 600 / Pretendard Variable
- Height: 46px
- Use: Shared marketing anchor; evidence `home::[data-omd-capture="10"]`, `surface-2::[data-omd-capture="10"]`, and `surface-3::[data-omd-capture="10"]`.

**Outline pill**

- Background: transparent
- Text: `#111111`
- Border: 1px solid `#111111`
- Radius: 100px
- Padding: 14px 24px
- Font: 16px / 600 / Pretendard Variable
- Height: 49px
- Use: Marketing anchor; evidence `home::[data-omd-capture="12"]` and `surface-3::[data-omd-capture="16"]`.

### Header and navigation controls

**Locale control**

- Background: transparent
- Text: `#191919`
- Border: 1px solid transparent
- Radius: 8px
- Padding: 10px 12px
- Font: 15px / 500 / Pretendard Variable
- Height: 40px
- Use: Shared header button; evidence `home::[data-omd-capture="8"]`, also captured on blog and pricing.

**Testimonial navigation button**

- Background: transparent
- Text: `#000000`
- Border: 1px solid `#e5e7eb`
- Radius: 8px
- Padding: 1px 6px
- Height: 48px
- Use: Unlabeled home navigation button; evidence `home::[data-omd-capture="18"]` and `home::[data-omd-capture="19"]`.

### Pricing selection

**Pricing tab**

- Background: `#ffffff`
- Text: `#191919`
- Radius: 999px
- Padding: 8px 16px
- Font: 12px / 400 / Pretendard
- Height: 34px
- Use: Selected pricing tab; evidence `surface-3::[data-omd-capture="11"]`, `aria-selected="true"`.
- Selected: The two other captured tabs were transparent before interaction and became `#ffffff` after the recorded tab interactions; evidence `surface-3::[data-omd-capture="12"]` / `tab-0-0` and `surface-3::[data-omd-capture="13"]` / `tab-1-0`.

**Tab group**

- Background: `#f2f5fa`
- Border: 1px solid rgba(25, 25, 25, 0.1)
- Radius: 999px
- Padding: 5px
- Height: 46px
- Use: Pricing tablist; evidence `surface-3::div[role="tablist"]`.

### Form boundary

The supplied blog capture records an email input and a `form-error` interaction, but captures no distinct error style or message. Its visible field is transparent, borderless, `#000000`, 15px / 400 Pretendard Regular (`surface-2::[data-omd-capture="15"]`). No error variant is specified.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://www.datarize.ai/ (captured Korean marketing home), https://www.datarize.ai/blog/hidden_product (captured brand blog route), https://www.datarize.ai/pricing (captured pricing surface); https://www.datarize.ai/en/, https://www.datarize.ai/en/about, https://policy.datarize.ai/en/terms, https://datarize.gitbook.io/docs/guide-en (official context only)
**Tier 2 sources:** https://getdesign.md/datarize (attempted; no accessible entry evidence), https://styles.refero.design/?q=datarize (attempted; no accessible result evidence)
**Conflicts unresolved:** none

## 5. Layout Principles

The current evidence is desktop-only (1440×900) and does not justify a responsive grid specification. The repeatable layout signals are a shared 40px header control, 50px/100px CTA pills, and a compact pricing tablist (46px outer height, 5px padding) that houses 34px tabs. The extracted spacing clusters include 6, 8, 10, 14, 16, 20, 24, and 32px; they are recorded as observed values, not a published spacing scale.

## 6. Depth & Elevation

Captured component styles use `box-shadow: none`. Controls separate through ink/white contrast, an outline border, or a pale tablist surface. The bundle does not establish a site-wide card or elevation system.

## 7. Do's and Don'ts

### Do

- Use the captured Pretendard hierarchy when recreating the observed marketing surface.
- Keep a single dark pill or outline pill as the dominant CTA treatment.
- Use white, `#191919`, and `#111111` as the primary structural contrast.
- Treat `#007aff` as a home-page text-link accent, not a universal action color.
- Preserve the selected/unselected pricing-tab contrast only where that tab interaction is present.

### Don't

- Reintroduce the previous lime/yellow/royal-blue palette as a current Datarize token without new live evidence.
- Present the captured marketing components as the authenticated console or GitBook documentation system.
- Add a pricing tab state beyond the transparent default and white selected state that were observed.
- Invent an email-error visual treatment from the captured form-error event.

## 8. Responsive Behavior

No responsive behavior is specified from this evidence. The capture viewport is 1440×900 only; mobile breakpoints, stacking rules, and touch-target adaptations require a separate observed source.

## 9. Agent Prompt Guide

For the captured marketing surface, start with a white canvas and `#191919` type. Use loaded Pretendard hierarchy—64px / 700 marketing hero, 44px / 600 section heading, 16px / 400 body—and choose one 50px dark CTA pill or one 100px outline CTA. A pricing selector may use a `#f2f5fa` 999px tablist with a white selected 34px tab. Do not add lime blobs, generic dashboard cards, product-console components, or undocumented interaction states.

## 10. Voice & Tone

The official English home leads with “Behavior Captured. Growth Automated.” and describes a flow from data to insight to action. The About page states a mission of empowering e-commerce growth with autonomous marketing intelligence. The resulting public voice is direct, operational, and outcome-oriented: behavior and data are the inputs; campaign action and growth are the intended outcomes.

| Context | Observed voice |
|---|---|
| Brand proposition | “Behavior Captured. Growth Automated.” |
| Product explanation | Data to insight to action in one flow |
| Mission | E-commerce growth through autonomous marketing intelligence |

### Do

- Lead with a concrete behavior, campaign, or growth outcome.
- Explain the connection from data to action in plain operator language.

### Don't

- Attribute unverified product promises, metrics, or customer stories to Datarize.
- Treat external marketing copy as console UI microcopy.

## 11. Brand Narrative

Datarize describes itself as an e-commerce growth platform built around behavior data. Its About page says the company began from the question of how many e-commerce brands make full use of their data, and explains its approach as following signals such as clicks, scrolls, and pauses across a customer journey. The official guide grounds that story operationally: stores collect data, profile behavior, run on-site or message campaigns, and monitor analytics.

The current public evolution is visible in Datarize’s English-facing language, “Autonomous Marketing Intelligence,” and in its product navigation for Audience, on-site banners, emails, metrics, and analytics. This reference records the Korean public marketing styling separately from that narrative and does not infer the styling of the authenticated console from either the English marketing pages or the GitBook guide.

## 12. Principles

1. **Turn behavior into action.** The official home and guide connect customer signals to campaigns and analytics. *UI implication:* make the transition from an observed signal to the next action legible.
2. **Keep the growth loop operational.** Audience, on-site campaign, message campaign, and analytics are explicitly documented product areas. *UI implication:* distinguish these jobs rather than collapsing them into a generic “AI dashboard.”
3. **Make the marketing surface decisive.** Captured marketing CTAs use a small set of dark-pill and outline treatments. *UI implication:* avoid competing action colors on a page modeled from this evidence.

## 13. Personas

The official sources identify stakeholder groups but do not publish named user personas. The following non-fictional roles are scope labels, not invented people or research findings:

- **E-commerce store operator:** registers a store, completes installation, and receives data/campaign capabilities through Datarize’s documented onboarding.
- **CRM or growth marketer:** creates audiences and operates on-site or message campaigns using customer-behavior data.
- **Platform administrator:** manages store, user, payment, and integration settings documented in the guide.

## 14. States

Only two public interaction facts were captured: the blog route emitted a `form-error` event for its email form, and pricing tabs expose default versus selected states. No visible error copy, loading treatment, success confirmation, disabled control, toast, or product-console state was captured. Those unobserved states are intentionally unspecified.

## 15. Motion & Easing

No motion durations, easing curves, or reduced-motion behavior were measured in the supplied evidence or found in an official public design-system source. Motion is intentionally unspecified.
