---
id: bmw
name: BMW
country: DE
category: automotive
homepage: "https://www.bmw.com"
primary_color: "#1c69d4"
logo:
  type: simpleicons
  slug: bmw
verified: "2026-07-13"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: product-marketing, url: "https://www.bmwusa.com/", inspected: "2026-07-13" }
    - { id: models, kind: vehicle-catalog, url: "https://www.bmwusa.com/vehicles/all-bmw-models.html", inspected: "2026-07-13" }
    - { id: configurator, kind: configurator-marketing, url: "https://www.bmwusa.com/build-your-own.html#/", inspected: "2026-07-13" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.bmwusa.com/", captured: "2026-07-13" }
    - { id: models-live, kind: product-surface, url: "https://www.bmwusa.com/vehicles/all-bmw-models.html", captured: "2026-07-13" }
    - { id: configurator-live, kind: product-surface, url: "https://www.bmwusa.com/build-your-own.html#/", captured: "2026-07-13" }
    - { id: bmwtype-web-assets, kind: brand-asset, url: "https://www.bmwusa.com/etc.clientlibs/bmw-web/clientlibs/clientlib-site/resources/fonts/BMWTypeNext-Regular.woff2", captured: "2026-07-13" }
    - { id: bmw-club-ci, kind: official-doc, url: "https://www.bmwgroup-werke.com/content/dam/grpw/websites/bmwgroup-classic_com/bmw_clubs/downloads/leitlinien/en/BCIC_Guideline_no5_version2.1.1.pdf", captured: "2026-07-13" }
    - { id: bmw-brand-design, kind: official-doc, url: "https://www.press.bmwgroup.com/global/article/detail/T0306305EN/introducing-bmw%E2%80%99s-new-brand-design-for-online-and-offline-communication?language=en", captured: "2026-07-13" }
    - { id: bmw-history, kind: official-doc, url: "https://www.bmwgroup.com/en/company/history.html", captured: "2026-07-13" }
    - { id: bmw-neue-klasse, kind: official-doc, url: "https://www.bmwgroup.com/en/company/neue-klasse.html", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.primary": &home { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.foreground": *home
    "tokens.colors.on-dark": *home
    "tokens.colors.outline": *home
    "tokens.colors.foreground-configurator": &configurator { surface_id: configurator, source_id: configurator-live, method: computed-style, captured: "2026-07-13" }
    "tokens.typography.family.ui": { surface_id: home, source_id: bmwtype-web-assets, method: computed-font-face, captured: "2026-07-13" }
    "tokens.typography.display.size": *home
    "tokens.typography.display.weight": *home
    "tokens.typography.display.lineHeight": *home
    "tokens.typography.display.use": *home
    "tokens.typography.body.size": *home
    "tokens.typography.body.weight": *home
    "tokens.typography.body.lineHeight": *home
    "tokens.typography.body.use": *home
    "tokens.typography.control.size": *home
    "tokens.typography.control.weight": *home
    "tokens.typography.control.lineHeight": *home
    "tokens.typography.control.use": *home
    "tokens.typography.utility.size": *home
    "tokens.typography.utility.weight": *home
    "tokens.typography.utility.lineHeight": *home
    "tokens.typography.utility.use": *home
    "tokens.spacing.space-4": *home
    "tokens.spacing.space-12": *home
    "tokens.spacing.space-24": *home
    "tokens.spacing.space-32": *home
    "tokens.rounded.none": *home
    "tokens.rounded.control": *home
tokens:
  source: live-extract
  extracted: "2026-07-13"
  components_harvested: false
  colors:
    primary: "#1c69d4"
    foreground: "#414141"
    foreground-configurator: "#262626"
    on-dark: "#ffffff"
    outline: "#f2f2f2"
  typography:
    family: { ui: "bmwTypeNextWeb" }
    display: { size: 35, weight: 300, lineHeight: 1.43, use: "Observed home heading only." }
    body: { size: 18, weight: 300, lineHeight: 1.56, use: "Observed home body copy only." }
    control: { size: 15, weight: 500, lineHeight: 1.6, use: "Observed home button and navigation control text only." }
    utility: { size: 20, weight: 300, lineHeight: 1.5, use: "Observed home navigation icon-flyout text only." }
  spacing: { space-4: 4, space-12: 12, space-24: 24, space-32: 32 }
  rounded: { none: 0, control: 3 }
  components: {}
---

# Design System Inspiration of BMW

## 1. Visual Theme & Atmosphere

BMW makes premium automobiles, motorcycles, and mobility services. Its public BMW USA home, model-catalog, and build-your-own routes were captured as separate product-marketing surfaces; this reference intentionally does not turn them into a claim about an authenticated vehicle, account, dealer, or in-car interface. The recorded home treatment pairs a small number of blue primary actions with white or transparent navigation controls and light, high-line-height BMW Type text. The catalogue and configurator share the same family but do not resolve every color identically, so the values remain surface-scoped rather than being blended into a fictional global palette. BMW’s official 2020 identity update describes a digitally oriented brand presence built around openness, clarity, visual restraint, and graphic flexibility; its current Neue Klasse programme carries that direction into a new, reduced vehicle-design language. [BMW brand design announcement](https://www.press.bmwgroup.com/global/article/detail/T0306305EN/introducing-bmw%E2%80%99s-new-brand-design-for-online-and-offline-communication?language=en) and [Neue Klasse context](https://www.bmwgroup.com/en/company/neue-klasse.html) inform this narrative, not the live web tokens.

**Key characteristics:**

- A single observed blue home CTA fill, `#1c69d4`
- `bmwTypeNextWeb` as the loaded, computed public-web family
- Mostly square navigation chrome, with 3px CTA corners where measured
- Separate home and configurator foreground values rather than one assumed neutral scale
- No promoted hover, focus, pressed, modal, or responsive system from this capture

## 2. Color Palette & Roles

### Observed BMW USA product-marketing values

- **Primary action** (`#1c69d4`): home `.cmp-button` background at `home::[data-omd-capture="10"]`.
- **Home foreground** (`#414141`): home list and dialog chrome; it is not substituted for the configurator value.
- **Configurator foreground** (`#262626`): build-your-own navigation and local chrome at `surface-3`.
- **On-dark navigation** (`#ffffff`): home global-navigation control text.
- **Outline action** (`#f2f2f2`): inset-outline and text color of the paired home CTA at `home::[data-omd-capture="11"]`.

No semantic success, warning, error, disabled, hover, or focus color is claimed. The collector did not observe a reusable white canvas fill, a general dark-surface token, or a system-wide BMW roundel color role, so those values are omitted instead of inferred from marketing imagery or logos.

## 3. Typography Rules

### Evidence classes

- **Live computed surface-use, FontFaceSet, and source corroboration:** `bmwTypeNextWeb` is loaded with high confidence, appears on 288 captured elements across body, headings, navigation, buttons, dialogs, and list items, and is backed by 52 BMWUSA-hosted WOFF/WOFF2 source URLs. It is the sole UI family token.
- **Live computed but limited use:** `BMWTypeNext` is also loaded with high confidence (five captured uses) from six BMWUSA-hosted BMWTypeNextLatin files. Its limited observed role is recorded here but it is not made a second generic UI-family token.
- **Official distributed brand asset:** BMW’s official Club CI guideline specifies BMW TypeNext Bold and Regular for club identifiers. That establishes an official brand-asset context, not an assertion that the club guideline defines the captured BMWUSA product UI. [BMW Club CI guideline](https://www.bmwgroup-werke.com/content/dam/grpw/websites/bmwgroup-classic_com/bmw_clubs/downloads/leitlinien/en/BCIC_Guideline_no5_version2.1.1.pdf)
- **Declared-only:** Arial MT, `bmw_next_icons`, and SangBleuKingdom have captured `@font-face` declarations but zero visible uses. They are not UI-family tokens.
- **Licence boundary:** the collected BMWUSA WOFF/WOFF2 files corroborate browser use only. The public BMW Club guideline governs official-club brand materials and does not grant a downstream webfont licence; no public first-party reuse licence was located in this pass.

### Observed hierarchy

| Role | Size | Weight | Line height | Surface boundary |
|------|------|--------|-------------|------------------|
| Display heading | 35px | 300 | 50px | Home only |
| Body copy | 18px | 300 | 28px | Home only |
| Control text | 15px | 500 | 24px | Home button and navigation controls |
| Icon-flyout text | 20px | 300 | 30px | Home global navigation only |

## 4. Component Stylings

### Buttons

**Home primary CTA — observed default**
- Background: #1c69d4
- Text: #ffffff
- Radius: 3px
- Padding: 4px
- Font: 15px / 500 / bmwTypeNextWeb
- Use: `home::[data-omd-capture="10"]` `.cmp-button`; 52px rendered height. No state snapshot was supplied.

**Home outline CTA — observed default**
- Text: #f2f2f2
- Radius: 3px
- Padding: 4px
- Font: 15px / 500 / bmwTypeNextWeb
- Use: `home::[data-omd-capture="11"]` `.cmp-button`; transparent fill with `#f2f2f2` 1px inset outline and 52px rendered height. No state snapshot was supplied.

### Global navigation controls

**Home flyout trigger — observed default**
- Text: #ffffff
- Radius: 0px
- Padding: 0px 12px
- Font: 15px / 500 / bmwTypeNextWeb
- Use: `home::[data-omd-capture="1"]` `.cmp-globalnavigation__interaction--flyout`; 84px rendered height. No menu-open state was observed.

**Build-your-own flyout trigger — observed default**
- Text: #666666
- Radius: 0px
- Padding: 0px 12px
- Font: 15px / 500 / bmwTypeNextWeb
- Use: `surface-3::[data-omd-capture="1"]` `.cmp-globalnavigation__interaction--flyout`; 84px rendered height. This surface-specific value is not a home-navigation variant.

Inputs, cards, badges, dialogs, chatbot chrome, menu panels, and state variants are omitted: the supplied artifact has no representative BMW selector/state evidence for them. OneTrust dialog and close-button records are third-party consent chrome, not BMW product components.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://www.bmwusa.com/ · https://www.bmwusa.com/vehicles/all-bmw-models.html · https://www.bmwusa.com/build-your-own.html#/
**Tier 2 sources:** https://getdesign.md/bmw (record present; broad editorial cross-check only) · https://styles.refero.design/?q=bmw (required search attempted; built-in open was blocked and no usable BMW style record was collected)
**Conflicts unresolved:** none

## 5. Layout Principles

### Observed spacing

The supplied desktop capture repeatedly records 4px, 12px, 24px, and 32px values. They are exposed as observed values rather than a declared BMW spacing scale: 4px is the CTA inset padding, 12px is global-navigation horizontal padding, 24px is recurrent control/list line-height or spacing, and 32px occurs in home list margins. No grid, container width, or breakpoint is established by these repetitions.

### Shape boundary

The sampled global-navigation controls are 0px radius; the sampled paired home CTAs are 3px radius. The evidence therefore supports two measured geometries, not a claim that every BMW surface is square or that 3px is a universal corporate rule.

## 6. Depth & Elevation

The observed BMW CTA and global-navigation controls have `box-shadow: none`. A low-confidence chatbot record contains a shadow, but it is not used to define an elevation token or a general BMW component rule. No reusable panel, card, or modal elevation system was collected.

## 7. Do's and Don'ts

### Do

- Keep the home primary action tied to the observed `#1c69d4` CTA rather than treating it as a generic semantic blue.
- Preserve the measured distinction between 0px navigation controls and 3px paired CTAs when recreating the captured home pattern.
- Keep `bmwTypeNextWeb` metadata attached to BMWUSA web evidence; use a lawful fallback only when the proprietary face cannot be loaded.
- Scope home and configurator navigation values to their recorded surfaces.

### Don't

- Don't claim unobserved hover, focus, pressed, disabled, error, or menu-open behavior.
- Don't promote declared-only Arial MT, `bmw_next_icons`, or SangBleuKingdom into BMW UI typography.
- Don't reuse BMW-hosted font files as though the capture supplied a public downstream licence.
- Don't turn consent-banner or chatbot records into BMW component tokens without source-specific evidence.

## 8. Responsive Behavior

Only a 1440×900 desktop collector run was supplied. It does not substantiate mobile breakpoints, navigation collapse, touch targets, or responsive spacing rules; no responsive token or rule is asserted.

## 9. Agent Prompt Guide

Use this reference as a constrained public-web inspiration, not as a specification for a vehicle interface or an authenticated service.

- "Create a BMW USA home CTA: `#1c69d4` fill, white 15px/500 `bmwTypeNextWeb` text where licensed and loadable, 3px radius, 4px inset padding, 52px observed height."
- "Create a paired outline action: transparent fill, `#f2f2f2` text and inset outline, 3px radius; do not invent interaction states."
- "Create the observed home navigation trigger: white 15px/500 text, 0px radius, 0px 12px padding. Keep it separate from the build-your-own trigger's `#666666` text."

## 10. Voice & Tone

BMW’s official 2020 communication-design announcement describes the brand update as open, clear, customer-centred, and suited to a digital future. For source-backed BMW-inspired communication, use concise, confident language that makes the next action legible and lets a product image or technical detail carry the rest. This is brand-communication context, not evidence for unobserved product error copy.

| Context | Source-backed direction |
|---------|-------------------------|
| Brand communication | Openness, clarity, and strength of character from the 2020 brand-design announcement |
| Future mobility | Electric, digital, circular, and driving-pleasure framing from Neue Klasse materials |
| Controls | Use direct labels whose visual treatment stays within the observed surface-specific component evidence |

## 11. Brand Narrative

BMW’s roots reach to 1916, when the Flugmaschinenfabrik Gustav Otto merged into Bayerische Flugzeug-Werke AG; BMW Group’s own history identifies 7 March 1916 as the foundation date of today’s BMW AG and traces the company’s roots to Karl Rapp and Gustav Otto. [BMW Group history](https://www.bmwgroup.com/en/company/history.html) describes a company that now spans BMW, MINI, Rolls-Royce, and BMW Motorrad across automobiles, motorcycles, and mobility services.

Its current evolution is not only a web re-skin. BMW’s 2020 communication identity moved toward a pared-down, two-dimensional, digitally focused presence centred on openness and clarity. The Neue Klasse programme now positions electrification, digitalisation, circularity, and a reduced new design language as an update to the brand’s driving-pleasure proposition. [BMW Group’s Neue Klasse overview](https://www.bmwgroup.com/en/company/neue-klasse.html) records the first series-production iX3 as the beginning of that new model generation.

## 12. Principles

1. **Communicate with openness and clarity.** *UI implication:* make hierarchy and calls to action legible before adding decorative treatment. Source: BMW’s 2020 brand-design announcement.
2. **Use restraint with flexibility across touchpoints.** *UI implication:* reuse verified primitives only where their surface provenance matches; do not flatten different routes into one speculative kit. Source: BMW’s 2020 brand-design announcement.
3. **Carry driving pleasure into a digital future.** *UI implication:* a BMW-inspired public page can foreground product imagery and digital action, but it must not claim in-car UI behavior without product evidence. Source: BMW Group Neue Klasse materials.

## 13. Personas

The following are source-backed stakeholder groups, not fictional customers or demographic personas.

- **Prospective BMW customer:** the 2020 brand announcement says BMW puts the customer at the centre of the revised identity and invites customers into the world of BMW.
- **Official BMW Club representative:** the Club CI guideline addresses official clubs as brand ambassadors and sets mandatory rules for their communications; it is not a public-product UI persona.
- **BMW Group design collaborator:** BMW Group Design describes a global design organisation working across its automotive brands; this informs brand context, not a user-flow requirement.

## 14. States

No BMW product state treatment is asserted. The supplied collector reports zero observed states, zero interaction kinds, and zero interaction snapshots. Empty, loading, error, success, skeleton, and disabled treatments require a future selector-level public-surface capture.

## 15. Motion & Easing

No BMW public-web duration, easing, or reduced-motion rule was captured or located in the official sources reviewed for this update. Motion tokens are intentionally omitted.
