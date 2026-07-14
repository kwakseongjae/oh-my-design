---
id: notion
name: Notion
country: US
category: productivity
homepage: "https://www.notion.so"
primary_color: "#0075de"
logo:
  type: simpleicons
  slug: notion
verified: "2026-07-13"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: marketing, url: "https://www.notion.com/ko", inspected: "2026-07-13" }
    - { id: product, kind: public-product-marketing, url: "https://www.notion.com/ko/product", inspected: "2026-07-13" }
    - { id: help, kind: documentation-chrome, url: "https://www.notion.com/ko/help", inspected: "2026-07-13" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.notion.com/ko", captured: "2026-07-13" }
    - { id: product-live, kind: product-surface, url: "https://www.notion.com/ko/product", captured: "2026-07-13" }
    - { id: help-live, kind: product-surface, url: "https://www.notion.com/ko/help", captured: "2026-07-13" }
    - { id: about, kind: official-doc, url: "https://www.notion.com/about", captured: "2026-07-13" }
    - { id: careers, kind: official-doc, url: "https://www.notion.com/careers", captured: "2026-07-13" }
    - { id: ai-story, kind: official-doc, url: "https://www.notion.com/blog/behind-the-scenes-notion-ai", captured: "2026-07-13" }
    - { id: notioninter-assets, kind: brand-asset, url: "https://www.notion.com/front-static/fonts/NotionInter-Regular.woff2", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.primary": &marketing { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.colors.canvas": *marketing
    "tokens.colors.ink": *marketing
    "tokens.colors.muted": *marketing
    "tokens.colors.docs-layer": &docs { surface_id: help, source_id: help-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.colors.primary-hover": *marketing
    "tokens.typography.family.sans": *marketing
    "tokens.typography.hero.size": *marketing
    "tokens.typography.hero.weight": *marketing
    "tokens.typography.hero.lineHeight": *marketing
    "tokens.typography.hero.tracking": *marketing
    "tokens.typography.hero.use": *marketing
    "tokens.typography.heading.size": *marketing
    "tokens.typography.heading.weight": *marketing
    "tokens.typography.heading.lineHeight": *marketing
    "tokens.typography.heading.tracking": *marketing
    "tokens.typography.heading.use": *marketing
    "tokens.typography.body.size": *marketing
    "tokens.typography.body.weight": *marketing
    "tokens.typography.body.lineHeight": *marketing
    "tokens.typography.body.use": *marketing
    "tokens.typography.action.size": *marketing
    "tokens.typography.action.weight": *marketing
    "tokens.typography.action.lineHeight": *marketing
    "tokens.typography.action.use": *marketing
    "tokens.typography.label.size": *marketing
    "tokens.typography.label.weight": *marketing
    "tokens.typography.label.lineHeight": *marketing
    "tokens.typography.label.use": *marketing
    "tokens.spacing.xs": *marketing
    "tokens.spacing.sm": *marketing
    "tokens.spacing.md": *marketing
    "tokens.spacing.lg": *marketing
    "tokens.spacing.xl": *marketing
    "tokens.rounded.control": *marketing
    "tokens.rounded.card": *marketing
    "tokens.rounded.docs-input": *docs
    "tokens.rounded.pill": *marketing
    "tokens.shadow.floating-action": *marketing
    "tokens.components.marketing-primary-action.type": *marketing
    "tokens.components.marketing-primary-action.bg": *marketing
    "tokens.components.marketing-primary-action.fg": *marketing
    "tokens.components.marketing-primary-action.radius": *marketing
    "tokens.components.marketing-primary-action.padding": *marketing
    "tokens.components.marketing-primary-action.height": *marketing
    "tokens.components.marketing-primary-action.font": *marketing
    "tokens.components.marketing-primary-action.states": *marketing
    "tokens.components.marketing-primary-action.use": *marketing
    "tokens.components.help-search.type": *docs
    "tokens.components.help-search.fg": *docs
    "tokens.components.help-search.border": *docs
    "tokens.components.help-search.radius": *docs
    "tokens.components.help-search.padding": *docs
    "tokens.components.help-search.height": *docs
    "tokens.components.help-search.font": *docs
    "tokens.components.help-search.states": *docs
    "tokens.components.help-search.use": *docs
tokens:
  source: live-extract
  extracted: "2026-07-13"
  colors:
    primary: "#0075de"
    primary-hover: "#005bab"
    canvas: "#ffffff"
    ink: "#000000"
    muted: "#615d59"
    docs-layer: "#f9f9f8"
  typography:
    family: { sans: "NotionInter" }
    hero: { size: 96, weight: 600, lineHeight: 100, tracking: -4.6, use: "Observed marketing h1 at the captured viewport" }
    heading: { size: 54, weight: 700, lineHeight: 56, tracking: -1.875, use: "Observed public marketing/product h2" }
    body: { size: 16, weight: 400, lineHeight: 24, use: "Observed navigation, cards, and Help chrome" }
    action: { size: 16, weight: 500, lineHeight: 24, use: "Observed public marketing CTA" }
    label: { size: 14, weight: 500, lineHeight: 20, use: "Observed menu trigger and Help dialog control" }
  spacing: { xs: 4, sm: 8, md: 12, lg: 16, xl: 24 }
  rounded: { docs-input: 5, control: 8, card: 12, pill: 9999 }
  shadow:
    floating-action: "rgba(0,0,0,0.01) 0px 0.175px 1.041px, rgba(0,0,0,0.02) 0px 0.8px 2.925px, rgba(0,0,0,0.027) 0px 2.025px 7.847px, rgba(0,0,0,0.04) 0px 4px 18px"
  components:
    marketing-primary-action: { type: button, bg: "#0075de", fg: "#ffffff", radius: 8, padding: "4px 14px", height: 36, font: "16px/500 NotionInter", states: "hover/pressed/focus captured on marketing; values remain selector-specific", use: "Global marketing CTA" }
    help-search: { type: input, fg: "#000000", border: "1px solid rgba(0,0,0,0.08)", radius: 5, padding: "7px 10px 7px 30px", height: 36, font: "16px/400 NotionInter", states: "dialog-open focus style captured", use: "Help language-picker search field" }
  components_harvested: true
---

# Design System Inspiration of Notion

## 1. Visual Theme & Atmosphere

Notion is an all-in-one workspace for notes, docs, project work, knowledge, and AI-assisted workflows. Its public web expression makes a flexible “toolbox of software building blocks” feel legible rather than enterprise-heavy: white canvas, near-black type, modest 4–12px corners, and a restrained blue action color. The supplied July 2026 capture shows this language across Korean marketing, a public product-marketing route, and the Help-center shell. Notion’s own history frames the product as a response to fragmented work tools; its current careers page extends that idea to teams of people and AI agents. The most recognizable visual move is therefore reduction: sturdy typography and quiet borders let the page’s content, screenshots, and user-defined workspace structure carry the personality. [About Notion](https://www.notion.com/about) · [Careers](https://www.notion.com/careers)

The capture is deliberately narrower than an authenticated workspace or a complete internal system. Marketing and public-product promotion share the blue CTA and NotionInter family. The Help route adds its own documentation controls and muted `#f9f9f8` hover layer; it is documented as Help chrome rather than promoted as a universal workspace pattern.

**Key characteristics:**
- White canvas with `rgba(0,0,0,0.95)` / `#000000` reading color
- `#0075de` public CTA, with darker selector-specific interaction states
- NotionInter loaded on all three captured public routes
- 4–8px controls, 12px marketing cards, and a pill-shaped language menu trigger
- Public components are flat or whisper-bordered; the observed circular action is the only captured soft-shadow control

## 2. Color Palette & Roles

### Observed public marketing and product palette
- **Primary action** (`#0075de`): observed on the global navigation CTA and hero CTA across the marketing and public product-marketing routes.
- **Primary interaction states** (`#005bab`, `#0073d9`, `#0071d6`): hover, pressed, and focus backgrounds on the captured CTA selectors; these are state evidence, not a general color ramp.
- **Canvas** (`#ffffff`): repeated white page, card, and menu-button surface.
- **Ink** (`#000000` / `rgba(0,0,0,0.95)`): observed primary text treatment.
- **Muted text** (`#615d59` and route-local `rgba(0,0,0,0.54)`): secondary copy/control treatment; neither is a substitute for primary ink.
- **Whisper border** (`rgba(0,0,0,0.1)`): observed on the white language-picker trigger and compact card.

### Documentation-chrome boundary
- **Help hover layer** (`#f9f9f8`): observed only on the Help toggle’s hover state.
- **Help focus treatment** (`rgba(35,131,226,0.57)` inset plus `rgba(35,131,226,0.35)` outer ring): observed only on the language-picker search input after its dialog opened.

## 3. Typography Rules

### Evidence classes

**Official product-use.** Notion describes its core product as an all-in-one workspace made from configurable building blocks and says its mission is to make software toolmaking ubiquitous. Those are product and brand facts; they do not by themselves specify a webfont. [About](https://www.notion.com/about) · [Notion AI story](https://www.notion.com/blog/behind-the-scenes-notion-ai)

**Live computed surface-use.** `NotionInter` is computed on visible marketing, public product-marketing, and Help-chrome elements. The supplied artifact reports it loaded/high for 906 elements with matching FontFaceSet/source evidence. Measured examples include a 96px/600/100px/-4.6px marketing h1, 54px/700/56px/-1.875px h2, 16px/400/24px reading text, and 16px/500/24px CTA text.

**Official distributed brand asset.** The capture finds Notion-controlled `NotionInter` `.woff` and `.woff2` files at `www.notion.com` URLs. They support browser delivery on these routes, but the research found no first-party public font-license or redistribution grant. Treat the files as service assets, not a font package to redistribute.

**Declared-only.** `iA Writer Mono`, `Lyon Text`, `Noto Sans Arabic`, `Noto Sans Hebrew`, and `Permanent Marker` have `@font-face` sources in the capture but no visible computed use. They remain declared assets, not UI-family tokens.

**System/unresolved.** `Inter`, `-apple-system`, `system-ui`, `Segoe UI`, Helvetica, Arial, and emoji faces appear as fallback members in the computed stack. No fallback is rendered or labeled as NotionInter. Authenticated workspace typography, local app typography, and a public NotionInter license remain unresolved.

## 4. Component Stylings

### Public marketing actions

**Global CTA — default**
- Background: `#0075de`
- Text: `#ffffff`
- Border: 1px solid transparent
- Radius: 8px
- Padding: 4px 14px
- Height: 36px
- Font: 16px / 500 / NotionInter
- Use: `home::[data-omd-capture="9"]`, class `button_buttonVariantPrimary__mUFQZ globalNavigation_tryFreeCta__mNYk6`; also observed on the other two captured routes.
- Hover: `#005bab` at `home::[data-omd-capture="9"]::state-hover`.
- Pressed: state captured for this selector; only the raw state observation is retained in `.verification.md`.
- Focus: state captured for this selector; only the raw state observation is retained in `.verification.md`.

**Hero CTA — default**
- Background: `#0075de`
- Text: `#ffffff`
- Border: 1px solid transparent
- Radius: 8px
- Padding: 6px 15px
- Height: 38px
- Font: 16px / 500 / NotionInter
- Use: `home::[data-omd-capture="11"]`, class `HeroCTA_cta__hOE_c button_primary__k0`; public marketing and product-marketing only.
- Pressed: `#0073d9` at `home::[data-omd-capture="11"]::state-pressed`.
- Focus: `#0071d6` at `home::[data-omd-capture="11"]::state-focus`.

**Hero secondary action — observed focus state**
- Background: `#e6f3fe`
- Text: `#005bab`
- Border: 1px solid transparent
- Radius: 8px
- Padding: 6px 15px
- Height: 38px
- Font: 16px / 500 / NotionInter
- Use: `home::[data-omd-capture="12"]`, class `HeroCTA_cta__hOE_c button_secondary__`; a focus observation, not a universal secondary-button default.
- Focus: `#e7f3fe` background at the same selector’s focus capture.

### Marketing content structures

**Compact card — default**
- Background: `#ffffff`
- Text: `rgba(0,0,0,0.898)`
- Border: 1px solid `rgba(0,0,0,0.1)`
- Radius: 12px
- Padding: 24px
- Font: 16px / 400 / NotionInter
- Use: `home::div`, class `cardCompact_cardCompact__W2i4I`; observed on marketing and public product-marketing routes.

**Bento feature tab — selected and unselected**
- Background: transparent
- Radius: 8px
- Padding: 12px 16px
- Font: 16px / 400 / NotionInter
- Use: `home::[data-omd-capture="27"]` / `home::[data-omd-capture="28"]`, role `tab`; three tab interactions recorded on marketing and public product-marketing routes.
- Selected: `rgba(0,0,0,0.95)` text at `home::[data-omd-interaction-capture="tab-1-0"]`.
- Unselected: `rgba(0,0,0,0.54)` text at `home::[data-omd-capture="28"]`.

**Circular carousel action — default**
- Background: `#ffffff`
- Text: `rgba(0,0,0,0.95)`
- Radius: 9999px
- Height: 40px
- Font: 20px / 400 / NotionInter
- Shadow: `rgba(0,0,0,0.01) 0px 0.175px 1.041px, rgba(0,0,0,0.02) 0px 0.8px 2.925px, rgba(0,0,0,0.027) 0px 2.025px 7.847px, rgba(0,0,0,0.04) 0px 4px 18px`
- Use: `home::[data-omd-capture="31"]`, a marketing carousel arrow; do not generalize this elevation to cards or dialogs.

### Help documentation chrome

**Language picker trigger — dialog opener**
- Background: `#ffffff`
- Text: `rgba(0,0,0,0.95)`
- Border: 1px solid `rgba(0,0,0,0.1)`
- Radius: 9999px
- Padding: 8px 16px
- Height: 38px
- Font: 14px / 500 / NotionInter
- Use: `home::[data-omd-capture="60"]` and equivalent product/Help selectors; the collector opened a dialog on all three routes.
- Dialog-open: language-list targets were captured; no dialog container elevation is asserted because its representative style was transparent.

**Language-picker search — focused dialog field**
- Text: `rgba(0,0,0,0.95)`
- Border: 1px solid `rgba(0,0,0,0.08)`
- Radius: 5px
- Padding: 7px 10px 7px 30px
- Height: 36px
- Font: 16px / 400 / NotionInter
- Use: `home::[data-omd-interaction-capture="dialog-0-1"]`, class `input_input__PoidJ languagePicker_searchInput__Jrbry`.
- Focus: inset `rgba(35,131,226,0.57) 0px 0px 0px 1px` plus outer `rgba(35,131,226,0.35) 0px 0px 0px 2px` shadow.

**Help toggle — default and hover**
- Text: `rgba(0,0,0,0.54)`
- Padding: 6px 8px
- Height: 32px
- Font: 16px / 400 / NotionInter
- Use: `surface-3::[data-omd-capture="11"]`, class `toggleList_toggleButtonWrapper__79NEe`; Help documentation chrome only.
- Hover: `#f9f9f8` background and 4px radius at `surface-3::[data-omd-capture="11"]::state-hover`.
- Pressed: captured for the selector; no raw pressed value is promoted as a system token.

---
**Verified:** 2026-07-13
**Tier 1 sources:** [Korean marketing](https://www.notion.com/ko), [public product marketing](https://www.notion.com/ko/product), [Korean Help](https://www.notion.com/ko/help); supplied deterministic evidence artifact only.
**Tier 2 sources:** [getdesign Notion directory](https://getdesign.md/notion); Refero query attempted at `https://styles.refero.design/?q=Notion`, but the built-in web fetch returned an internal error and is not treated as an absence claim.
**Resolution note:** The prior `#455dd3` primary-CTA claim and unobserved generic controls were removed. Fresh three-route evidence measures `#0075de` on public CTAs and records selector-specific states separately.
**Conflicts unresolved:** none

## 5. Layout Principles

The supplied desktop capture exposes an 4, 8, 12, 16, and 24px rhythm across public marketing and Help controls. Marketing content combines wide bento cards with 12px corners and generous page-level whitespace; Help uses narrower, denser controls. No second viewport or authenticated workspace was inspected, so responsive grid columns, exact page gutters, and native-app layout are intentionally absent.

## 6. Depth & Elevation

The observed public surfaces are chiefly flat. The compact card uses a `1px rgba(0,0,0,0.1)` boundary with no shadow. One circular carousel control carries a four-layer low-opacity shadow; its measured stack is retained in §4. The Help dialog’s representative container is transparent and its elevation is therefore not asserted. No generic modal, popover, or toast elevation system is inferred from this packet.

## 7. Do's and Don'ts

### Do
- Use `#0075de` only where the captured public CTA pattern is appropriate, and preserve the observed 8px action corners.
- Keep NotionInter evidence-bound: use it only when it can be loaded from an authorized source in an implementation.
- Separate white marketing cards from Help-specific controls and focus treatment.
- Preserve tab, dialog, hover, pressed, and focus provenance rather than converting observed states into a generic component library.

### Don't
- Do not restore the earlier `#455dd3` primary CTA or treat `#005bab` as its universal default.
- Do not use declared-only iA Writer Mono, Lyon Text, Noto, or Permanent Marker as visible web typography.
- Do not claim an authenticated Notion workspace, native-app controls, dashboard states, or a complete design-system API from these public routes.
- Do not invent error, disabled, toast, menu, modal, or responsive variants beyond the raw observations described here.

## 8. Responsive Behavior

No viewport comparison was captured. The public controls in §4 were measured in the supplied capture only, so Notion-specific breakpoint values, mobile navigation transformation, and touch-target rules remain unverified. Implement responsive accessibility normally, but do not present it as a Notion measurement without a dedicated capture.

## 9. Agent Prompt Guide

### Quick reference
- Public CTA: `#0075de` / white, 8px radius, 16px / 500 / 24px NotionInter; use 36px global-nav or 38px hero geometry only in the captured marketing contexts.
- Public card: white, 1px `rgba(0,0,0,0.1)` border, 12px radius, 24px padding, no shadow.
- Help search: transparent field, 5px radius, 7px 10px 7px 30px padding; its blue double-ring is a focused language-picker observation only.

### Implementation boundary
Use the public marketing, public product-marketing, and Help patterns as three related but separate surfaces. Do not make a NotionInter fallback appear to be the real font and do not fill missing authenticated-workspace components with generic substitutes.

## 10. Voice & Tone

Notion’s official voice pairs direct utility with an expansive “tools for thought” frame. Public CTA copy is concise and action-led (“Get Notion free”); the About page explains the product through the history of work tools and early computing; the current careers page speaks about teams of humans and AI agents with craft, judgment, and customer focus. [About](https://www.notion.com/about) · [Careers](https://www.notion.com/careers)

| Do | Don't |
|---|---|
| Name the job or next action plainly. | Promise undefined transformation or use hype as a substitute for an outcome. |
| Explain a complex capability through a concrete workflow. | Treat AI as a separate, magical product layer. |
| Be direct and kind when giving guidance. | Use synthetic congratulations, blame, or invented brand aphorisms. |

Official voice examples: “Get Notion free” (public CTA); “Solve your problems your way” (About); “Customer in every room” and “Why not today” (Careers values). These examples are source-bound, not a license to reproduce product copy wholesale.

## 11. Brand Narrative

Notion’s own About page locates the company in a critique of fragmented office tools: people stitch together email, chat, documents, and storage rather than shaping software around the work at hand. Its stated response is an all-in-one workspace composed from building blocks that can be adapted to a task list, roadmap, or design repository. The page explicitly connects this goal to computing pioneers who imagined computers amplifying imagination and augmenting intellect. [About](https://www.notion.com/about)

That founding frame now includes AI. In Ivan Zhao’s official account of Notion AI, the company describes its mission as making software toolmaking ubiquitous and positions AI as a way for people to mold computers to their needs. Current careers copy describes Notion as helping teams of people and AI agents think and work together. These are current first-party framing statements, not evidence for a particular authenticated product UI. [Notion AI story](https://www.notion.com/blog/behind-the-scenes-notion-ai) · [Careers](https://www.notion.com/careers)

## 12. Principles

1. **Software should be moldable.** Notion’s official mission is to make software toolmaking ubiquitous. *UI implication:* prefer composable structures and clear primitives over forced linear workflows.
2. **Customer outcomes are the point.** “Customer in every room” is a current careers value. *UI implication:* explain benefits in the user’s task language and make the next action concrete.
3. **Own the outcome.** Notion names agency and initiative as a current value. *UI implication:* give people understandable controls, consequences, and recovery paths rather than opaque automation.
4. **Move with judgment and urgency.** “Why not today” describes the company’s speed value. *UI implication:* keep routine actions short without removing necessary context or accessibility.
5. **Humans remain central to AI.** The official AI narrative describes AI as a companion that users can mold. *UI implication:* surface user intent, sources, and control rather than presenting autonomous output as unquestionable.

## 13. Personas

The following are product-role archetypes inferred from the first-party product categories and stated mission; they are not claims about research participants or user counts.

- **Individual organizer.** Uses configurable pages and blocks to make personal work legible. Needs an approachable starting point and room to adapt it.
- **Project or knowledge-team member.** Coordinates docs, projects, and shared information with others. Needs clear structure, findability, and trustworthy handoff.
- **Toolmaking operator.** Shapes a workspace around a team’s process rather than accepting a fixed workflow. Needs composability and understandable control.
- **AI-assisted collaborator.** Works alongside AI features or agents while retaining ownership of work. Needs explicit intent, review, and source-aware guidance.

## 14. States

Only the following states are evidenced in this packet. Empty, loading, error, success, skeleton, and disabled patterns were not captured and are deliberately not specified.

| State | Observed surface | Evidence boundary |
|---|---|---|
| CTA hover | Marketing | `#005bab` on global CTA selector only. |
| CTA pressed | Marketing | `#0073d9` on hero CTA selector only. |
| CTA focus | Marketing | `#0071d6` on hero CTA selector only. |
| Secondary CTA focus | Marketing | `#e7f3fe` / `#005bab` pair only. |
| Tab selected | Marketing/product marketing | Selected and unselected tab targets recorded by three interactions. |
| Language dialog open | Marketing/product marketing/Help | Trigger opens dialog; no container elevation asserted. |
| Help input focus | Help chrome | Blue double-ring on language-picker search only. |
| Help toggle hover | Help chrome | `#f9f9f8`, 4px radius. |

## 15. Motion & Easing

The supplied evidence records state snapshots but no duration, easing, transition-property, or animation timing values. Motion tokens are therefore unresolved. Do not manufacture a Notion motion scale from the visual state changes above.
