---
id: jandi
name: JANDI
country: KR
category: productivity
homepage: "https://www.jandi.com"
primary_color: "#00c473"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=www.jandi.com&sz=128"
verified: "2026-07-13"
added: "2026-06-09"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: marketing, url: "https://www.jandi.com/landing/kr", inspected: "2026-07-13" }
    - { id: surface-2, kind: marketing, url: "https://www.jandi.com/landing/kr", inspected: "2026-07-13" }
    - { id: surface-3, kind: marketing-feature, url: "https://www.jandi.com/landing/kr/features/collaboration", inspected: "2026-07-13" }
    - { id: surface-4, kind: marketing-feature, url: "https://www.jandi.com/landing/kr/features/member", inspected: "2026-07-13" }
    - { id: surface-5, kind: marketing-security, url: "https://www.jandi.com/landing/kr/security", inspected: "2026-07-13" }
    - { id: surface-6, kind: marketing-ai, url: "https://www.jandi.com/landing/kr/jandi-ai", inspected: "2026-07-13" }
  sources:
    - { id: surface-home, kind: product-surface, url: "https://www.jandi.com/landing/kr", captured: "2026-07-13" }
    - { id: surface-surface-2, kind: product-surface, url: "https://www.jandi.com/landing/kr", captured: "2026-07-13" }
    - { id: surface-surface-3, kind: product-surface, url: "https://www.jandi.com/landing/kr/features/collaboration", captured: "2026-07-13" }
    - { id: surface-surface-4, kind: product-surface, url: "https://www.jandi.com/landing/kr/features/member", captured: "2026-07-13" }
    - { id: surface-surface-5, kind: product-surface, url: "https://www.jandi.com/landing/kr/security", captured: "2026-07-13" }
    - { id: surface-surface-6, kind: product-surface, url: "https://www.jandi.com/landing/kr/jandi-ai", captured: "2026-07-13" }
    - { id: company-context, kind: official-doc, url: "https://finalpick.jandi.com/landing/en/company", captured: "2026-07-13" }
    - { id: project-context, kind: official-doc, url: "https://blog.jandi.com/ko/2026/06/08/pr-project-2-0/", captured: "2026-07-13" }
    - { id: docs-chrome, kind: official-doc, url: "https://support.jandi.com/en/articles/Changing-themes-bf4edc58", captured: "2026-07-13" }
    - { id: noto-license, kind: license, url: "https://notofonts.github.io/noto-docs/website/use/", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.primary": &home { surface_id: home, source_id: surface-home, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.canvas": *home
    "tokens.colors.on-dark": *home
    "tokens.colors.ink": *home
    "tokens.colors.ink-muted": *home
    "tokens.colors.muted": *home
    "tokens.colors.action-ink": *home
    "tokens.typography.family.ui": *home
    "tokens.typography.hero.size": *home
    "tokens.typography.hero.weight": *home
    "tokens.typography.hero.lineHeight": *home
    "tokens.typography.hero.use": *home
    "tokens.typography.section.size": *home
    "tokens.typography.section.weight": *home
    "tokens.typography.section.lineHeight": *home
    "tokens.typography.section.use": *home
    "tokens.typography.nav-action.size": *home
    "tokens.typography.nav-action.weight": *home
    "tokens.typography.nav-action.lineHeight": *home
    "tokens.typography.nav-action.use": *home
    "tokens.spacing.nav-action-y": *home
    "tokens.spacing.nav-action-x": *home
    "tokens.spacing.landing-action-y": *home
    "tokens.spacing.landing-action-x": *home
    "tokens.rounded.action": *home
    "tokens.rounded.floating-nav": &collaboration { surface_id: surface-3, source_id: surface-surface-3, method: computed-style, captured: "2026-07-13" }
    "tokens.rounded.security-card": &security { surface_id: surface-5, source_id: surface-surface-5, method: computed-style, captured: "2026-07-13" }
    "tokens.components.security-environment-card.type": *security
    "tokens.components.security-environment-card.bg": *security
    "tokens.components.security-environment-card.radius": *security
    "tokens.components.security-environment-card.padding": *security
    "tokens.components.security-environment-card.use": *security
    "tokens.components.ai-environment-card.type": &ai { surface_id: surface-6, source_id: surface-surface-6, method: computed-style, captured: "2026-07-13" }
    "tokens.components.ai-environment-card.bg": *ai
    "tokens.components.ai-environment-card.radius": *ai
    "tokens.components.ai-environment-card.padding": *ai
    "tokens.components.ai-environment-card.use": *ai
tokens:
  source: reconciled
  extracted: "2026-07-13"
  colors:
    primary: "#00c473"
    canvas: "#ffffff"
    on-dark: "#ffffff"
    ink: "#000000"
    ink-muted: "#333333"
    muted: "#a2a2a2"
    action-ink: "#041911"
  typography:
    family: { ui: "Noto Sans" }
    hero: { size: 56, weight: 700, lineHeight: 1.43, use: "Public landing headline" }
    section: { size: 42, weight: 700, lineHeight: 1.43, use: "Public landing feature heading" }
    nav-action: { size: 14, weight: 500, lineHeight: 1.43, use: "Public global navigation action" }
  spacing: { nav-action-y: 7, nav-action-x: 14, landing-action-y: 12, landing-action-x: 30 }
  rounded: { action: 6, floating-nav: 10, security-card: 16 }
  components:
    security-environment-card: { type: card, bg: "#ffffff", radius: "16px", padding: "40px 32px 54px", use: "Static security environment card; surface-5::li.Security_securityEnvironmentList__3CRP0" }
    ai-environment-card: { type: card, bg: "#ffffff", radius: "16px", padding: "40px 32px 54px", use: "Static AI environment card; surface-6::li.JandiAi_aiEnvironmentList__2ng2t" }
  components_harvested: true
---

# JANDI — Design Reference

> **A Korean collaboration platform whose public expression is direct, green-led, and operational.**

## 1. Visual Theme & Atmosphere

JANDI (잔디) is Toss Lab’s Korean business-collaboration service, introduced in 2015 and now presented by the company as an enterprise platform that connects work communication, AI-assisted collaboration, and project management. Its public marketing does not imitate an internal dashboard: it uses a white field, black Korean type hierarchy, and a consistent green conversion action to make a broad B2B offer immediately legible. The captured landing, collaboration, member-management, security, and AI pages keep that visual language coherent while giving each subject its own explanatory cards and calls to action.

The product is evolving beyond messaging. Toss Lab’s June 2026 Project 2.0 announcement describes project management integrated with the messenger, including a contributor-centred work view and a manager dashboard. That is first-party product context, not authorization to treat the public-marketing measurements below as an authenticated-product design system. The values in this reference remain scoped to the six supplied marketing capture records, which represent five distinct URLs.

## 2. Layout & Grid

- **Landing hierarchy:** `home` records a 56px/700/80px hero and 42px/700/60px feature headings. These are desktop public-marketing samples, not a responsive type contract.
- **Feature-page hierarchy:** the collaboration, member, security, and AI routes record 56px/700/66px page headings; their observed secondary headings vary by page (40px or 32px).
- **Action spacing:** the repeated global green action uses 7px 14px internal padding. The white landing action uses 12px 30px. These are individual component measurements, not a general spacing scale.
- **Boundary:** the supplied evidence establishes neither a page container maximum nor a breakpoint, logged-in application shell, or universal grid.

## 3. Color & Typography

### Color tokens

- `#00c473` — observed fill and border of the global public navigation action on all six capture records.
- `#ffffff` — observed public canvas, on-green text, white landing action, and the scoped security/AI environment-card surface.
- `#000000` — observed body and heading ink on the public pages.
- `#333333` — observed supporting text on public feature, security, and AI content.
- `#a2a2a2` — observed muted public text and static accordion-button presentation.
- `#041911` — observed text on the white landing and pill-link actions.

These are public-surface roles only. Neither the documentation centre nor the announced authenticated project experience contributes a semantic application palette.

### Typography evidence classes

- **Live computed public-web use:** visible text across all six supplied records resolves to `"Noto Sans", sans-serif`. The supplied FontFaceSet record classifies `Noto Sans` as loaded/high confidence, with 676 observed uses across headings, body, buttons, cards, list items, and text. Seven JANDI-CDN OTF URLs corroborate that computed family. The machine UI-family token therefore names only `Noto Sans`.
- **Official font and licence context:** Noto’s official documentation describes Noto fonts as licensed under the SIL Open Font License. This explains the font’s licence boundary; it does not independently establish a JANDI product-font claim.
- **Declared-only assets:** `icomoon` and `swiper-icons` have `@font-face` declarations but zero observed visible uses. They remain declared icon-font assets, not JANDI text families or available specimens.
- **Measured public hierarchy:** `home` supplies the 56px/700/80px hero and 42px/700/60px feature samples; the feature routes supply 56px/700/66px page-heading samples. These are observed public treatments, not a full product type scale.
- **Documentation chrome:** the support centre is a separate first-party documentation domain. Its theme article is recorded for domain classification only and supplies no visual token or component claim.

## 4. Components

All entries below retain the supplied surface and selector provenance. They are static computed-style observations, not a reusable authenticated-product library. The bundle records zero interaction events, interaction kinds, and observed states; no hover, pressed, focus, disabled, error, dialog, menu, or responsive variant is documented.

### Global navigation action

**Primary default**
- Background: `#00c473`
- Text: `#ffffff`
- Border: `1px solid #00c473`
- Radius: `6px`
- Padding: `7px 14px`
- Font: `14px / 500 / Noto Sans`
- Use: repeated public global navigation action; evidence `home::[data-omd-capture="10"]` and the corresponding selector on `surface-2` through `surface-6`.

### Landing action

**White default**
- Background: `#ffffff`
- Text: `#041911`
- Radius: `6px`
- Padding: `12px 30px`
- Font: `15px / 500 / Noto Sans`
- Use: static white landing action on the duplicated landing records; evidence `home::[data-omd-capture="19"]` and `surface-2::[data-omd-capture="19"]`.

### Feature floating navigation

**Static default**
- Text: `#000000`
- Radius: `10px`
- Padding: `12px`
- Font: `16px / 400 / Noto Sans`
- Use: static `role="button"` floating feature-navigation item; evidence `surface-3::[data-omd-capture="11"]` (`Collaboration_icon1__cFiWm`) and `surface-4::[data-omd-capture="11"]` (`Member_icon1__MIU61`).

### Security environment card

**Static default**
- Background: `#ffffff`
- Text: `#000000`
- Radius: `16px`
- Padding: `40px 32px 54px`
- Font: `16px / 400 / Noto Sans`
- Use: static security-environment card; evidence `surface-5::li.Security_securityEnvironmentList__3CRP0`.

### AI environment card

**Static default**
- Background: `#ffffff`
- Text: `#000000`
- Radius: `16px`
- Padding: `40px 32px 54px`
- Font: `16px / 400 / Noto Sans`
- Use: static AI-environment card; evidence `surface-6::li.JandiAi_aiEnvironmentList__2ng2t`.

---

**Verified:** 2026-07-13
**Tier 1 sources:** `https://www.jandi.com/landing/kr`, `https://www.jandi.com/landing/kr/features/collaboration`, `https://www.jandi.com/landing/kr/features/member`, `https://www.jandi.com/landing/kr/security`, and `https://www.jandi.com/landing/kr/jandi-ai` (public marketing); `https://finalpick.jandi.com/landing/en/company` and `https://blog.jandi.com/ko/2026/06/08/pr-project-2-0/` (first-party context); `https://support.jandi.com/en/articles/Changing-themes-bf4edc58` (documentation-domain classification only); `https://notofonts.github.io/noto-docs/website/use/` (Noto licence boundary only)
**Tier 2 sources:** `https://getdesign.md/jandi` (attempted; built-in-web open returned an internal error/no usable JANDI record), `https://styles.refero.design/?q=jandi` (attempted; built-in-web open returned an internal error/no usable JANDI record), built-in web search for both catalogs (no usable JANDI design record returned)
**Conflicts unresolved:** none

The previous legacy material asserted a `/ko/pricing` surface, pricing-card variants, interaction states, generic inputs, and a universal card-shadow system. None occurs in the supplied 2026-07-13 evidence, so those claims are removed rather than substituted.

## 5. Iconography

The capture has declared-only `icomoon` and `swiper-icons` font assets but no visible-use match, named icon catalogue, sizing rule, or product-icon evidence. No icon token is promoted.

## 6. Imagery & Illustration

The public marketing pages use product imagery and explanatory cards, but the supplied DOM/style evidence does not establish an image ratio, crop rule, overlay system, or reusable screenshot frame. Do not derive an illustration system from those visuals.

## 7. Motion

No duration, easing, transition, hover result, or other motion behavior was recorded. Motion is intentionally undocumented.

## 8. Accessibility

- The repeated primary public action pairs `#ffffff` text with `#00c473`; the white landing action pairs `#041911` with `#ffffff`.
- The collector did not record focus-visible, keyboard, disabled, form-error, or screen-reader behavior. An implementation should add an accessible focus indicator rather than infer one from static borders or radii.
- `Noto Sans` is backed by computed family, FontFaceSet, and JANDI-CDN source evidence. Declared-only icon fonts must not be substituted for it.

## 9. Content & Voice

JANDI’s first-party company and product material frames the service as practical collaboration infrastructure: messages, projects, work visibility, and AI-assisted work support. The public voice is correspondingly concise, explanatory, and operational. That observation does not authorize invented authenticated-product microcopy.

## 10. Voice & Tone

**Voice adjectives:** practical · clear · collaboration-oriented

| Do | Don't |
|---|---|
| State the work problem before describing a capability. | Promise transformation without explaining the collaboration task. |
| Connect messaging, project work, and visibility in plain language. | Treat public marketing tone as a specification for every authenticated UI state. |
| Keep feature and inquiry language direct. | Infer urgency, error, or success copy that was not observed. |

## 11. Brand Narrative

Toss Lab’s official company history dates the JANDI launch to 2015. The service is presented as a collaboration platform for business communication and, in its current direction, AI-assisted and project-based work.

In June 2026, Toss Lab announced JANDI Project 2.0, a project-management experience integrated with messaging and redesigned around visibility for both individual contributors and team managers. This reference keeps that product evolution separate from the measured public-marketing styles.

## 12. Principles

1. **Use green as the public action signal.** The capture supports `#00c473` on the repeated global public navigation action, not a universal product semantic system.
2. **Let large Korean headlines carry marketing hierarchy.** The measured 56px, 42px, 40px, and 32px treatments belong to the captured public pages only.
3. **Keep explanatory cards scoped to their feature surface.** The observed security and AI environment cards are static marketing cards, not generic product-card variants.
4. **Keep evidence domains separate.** Marketing, documentation chrome, font licensing, corporate context, and the unobserved authenticated application have different evidentiary roles.

## 13. Personas

First-party material describes the service in terms of teams and collaboration work, and the Project 2.0 release specifically distinguishes individual contributors from team managers. Those are the only stakeholder groups retained here:

- **Individual contributors:** view their assigned work and weekly workload in the announced project experience.
- **Team managers:** use the announced dashboard to see project progress and member work status.
- **Teams:** use messaging and project work as connected collaboration contexts.

No named or demographic personas are invented.

## 14. States

No empty, loading, error, success, disabled, focus, or validation states were captured. The component appearances in §4 are static public-page observations, not behavioral state specifications.

## 15. Motion & Easing

No motion token, easing curve, duration, or reduced-motion behavior was captured. Preserve this boundary rather than inventing a motion system.

## 16. Do's and Don'ts

### Do

- Use the loaded `Noto Sans` family only for the captured public-surface type reference.
- Scope `#00c473` to the observed repeated public action.
- Keep each documented card tied to its security or AI marketing surface and selector.
- Preserve selector and surface provenance when using the components in §4.

### Don't

- Present declared-only `icomoon` or `swiper-icons` as a JANDI UI text family.
- Generalize public-marketing measurements into an authenticated product-app system.
- Invent hover, pressed, focus, disabled, error, menu, dialog, or responsive variants.
- Reintroduce the legacy inferred pricing cards, input rules, or universal shadow system.

---

**Verified:** 2026-07-13
**Pipeline:** omd:add-reference UPDATE (supplied-evidence 3-tier reconcile)
**Catalog position:** KR · productivity · collaboration platform
