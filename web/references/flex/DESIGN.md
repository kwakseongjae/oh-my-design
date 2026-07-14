---
id: flex
name: flex
country: KR
category: saas
homepage: "https://flex.team"
primary_color: "#000000"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=flex.team&sz=256"
verified: "2026-07-13"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: marketing, url: "https://flex.team/", inspected: "2026-07-13" }
    - { id: about, kind: corporate-marketing, url: "https://flex.team/about", inspected: "2026-07-13" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://flex.team/", captured: "2026-07-13" }
    - { id: about-live, kind: product-surface, url: "https://flex.team/about", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.canvas": &home { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.colors.ink": *home
    "tokens.colors.on-dark": *home
    "tokens.colors.action-lime": *home
    "tokens.colors.announcement-orange": *home
    "tokens.typography.family.ui": *home
    "tokens.typography.about-display.size": &about { surface_id: about, source_id: about-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.typography.about-display.weight": *about
    "tokens.typography.about-display.lineHeight": *about
    "tokens.typography.about-display.use": *about
    "tokens.typography.about-display-inverse.size": *about
    "tokens.typography.about-display-inverse.weight": *about
    "tokens.typography.about-display-inverse.lineHeight": *about
    "tokens.typography.about-display-inverse.use": *about
    "tokens.typography.body-emphasis.size": *about
    "tokens.typography.body-emphasis.weight": *about
    "tokens.typography.body-emphasis.lineHeight": *about
    "tokens.typography.body-emphasis.use": *about
    "tokens.typography.navigation.size": *about
    "tokens.typography.navigation.weight": *about
    "tokens.typography.navigation.lineHeight": *about
    "tokens.typography.navigation.use": *about
    "tokens.spacing.compact": *about
    "tokens.spacing.nav-action-x": *about
    "tokens.spacing.cta-y": *home
    "tokens.spacing.cta-x": *home
    "tokens.rounded.nav": *about
    "tokens.rounded.badge": *home
    "tokens.rounded.cta": *home
    "tokens.components.relationship-story-card.type": *home
    "tokens.components.relationship-story-card.bg": *home
    "tokens.components.relationship-story-card.border": *home
    "tokens.components.relationship-story-card.radius": *home
    "tokens.components.relationship-story-card.padding": *home
    "tokens.components.relationship-story-card.use": *home
tokens:
  source: reconciled
  extracted: "2026-07-13"
  components_harvested: true
  colors:
    canvas: "#ffffff"
    ink: "#111111"
    on-dark: "#ffffff"
    action-lime: "#00ff44"
    announcement-orange: "#ff4d00"
  typography:
    family: { ui: "Pretendard Variable" }
    about-display: { size: 96, weight: 600, lineHeight: 1.00, use: "About-page relationship statement" }
    about-display-inverse: { size: 80, weight: 600, lineHeight: 1.20, use: "Dark About-page statement" }
    body-emphasis: { size: 17, weight: 600, lineHeight: 1.55, use: "About-page explanatory copy" }
    navigation: { size: 14, weight: 700, lineHeight: 1.00, use: "Global navigation controls" }
  spacing: { compact: 8, nav-action-x: 14, cta-y: 30, cta-x: 44 }
  rounded: { nav: 8, badge: 18, cta: 24 }
  components:
    relationship-story-card: { type: card, bg: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", radius: "16px", padding: "24px", use: "Non-interactive relationship-data story item observed on the public home surface" }
---

# flex — Design Reference

> **Relations Driven AX.** (Observed on `flex.team`, 2026-07-13)
>
> Korean HR-data and AI platform reference: a black-and-white information field punctuated by an acid-lime conversion action. The public marketing surface frames AI as an understanding of organizational relationships and context, while the corporate About surface makes that same thesis concrete through very large editorial type and stark light/dark transitions.

---

## 1. Visual Theme & Atmosphere

flex is a Korean company building an HR-data-based AI platform for organizations: its public product language spans people and organization management, performance, payroll and benefits, and operational workflows. Its current expression is not the earlier “one ink / graphite card” system. The 2026 public site leads with **Relations Driven AX**—the claim that AI becomes useful when it understands the relationships and context inside an organization—and turns that idea into a high-contrast, editorial marketing system. Black or white fields establish the serious enterprise register; `#00FF44` appears as a deliberately loud action color rather than a general-purpose semantic palette. The About page gives the brand’s “Human Relations” reinterpretation of HR room to breathe in 80–96px type, then alternates dark and light narrative sections. This reference describes those current public marketing and corporate surfaces only; it does not treat the separate help center as product UI evidence.

What is distinctive in the observed surfaces:

- **Relationship data as the visual argument.** Large, plain-spoken statements carry the thesis before any UI treatment; application screenshots serve the story rather than becoming generic SaaS decoration.
- **Hard contrast, selective lime.** `#111111`/white carry most chrome and text, while `#00FF44` is reserved for primary conversion links.
- **Editorial scale plus dense enterprise copy.** About-page statements reach 96px, then resolve into 17px/600 explanatory copy and 15px supporting copy.
- **Rounded actions rather than rounded everything.** Global nav actions use 8px corners; campaign CTAs use 24px pills. No universal card-radius rule is asserted.

## 2. Layout & Grid

- **Global announcement strip:** the two captured public surfaces begin with a 48px-high announcement link; it uses 60px horizontal padding at the 1440px collector viewport.
- **Global navigation:** on `/about`, the captured menu controls use 8px radius and 8px internal padding; the two conversion actions use 8px 14px padding.
- **About-page editorial hierarchy:** measured headline styles include 96px/600/96px on a light field and 80px/600/96px on a dark field. These are surface-local display treatments, not a claimed product-app type scale.
- **Conversion action:** the observed lime action is a 24px-radius link with 30px 44px padding and 17px/700 text on both captured public surfaces.
- **Boundary:** no container maximum, page section height, or responsive breakpoint is promoted because the supplied 1440×900 capture does not establish those values across viewports.

## 3. Color & Typography

### Color tokens

- `#000000` — public-surface black field and the catalog primary color
- `#111111` — light-surface navigation text and solid navigation action background
- `#FFFFFF` — light canvas, on-dark text, and outline navigation action background
- `#00FF44` — primary marketing conversion action on home and About
- `#FF4D00` — compact “new” badge in the announcement strip
- `rgba(17,17,17,0.84)` — measured dark-on-light long-form emphasis
- `rgba(255,255,255,0.84)` and `rgba(255,255,255,0.48)` — measured on-dark supporting copy and label tones

The lime and orange are observed marketing accents with separate purposes; neither is promoted as a product-app status color.

### Typography evidence classes

- **Live loaded Flex webfont:** both supplied public surfaces resolve visible text to `"Pretendard Variable", Pretendard, -apple-system, "system-ui", "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif`. The collector classifies `Pretendard Variable` as loaded/high-confidence, records 351 visible uses across headings, body, navigation, badges, and actions, and resolves 92 Flex-hosted subset URLs under `static.flex.team`. The machine family token therefore names only `Pretendard Variable`.
- **Declared but unused fallback:** static `Pretendard` is present in declarations but has zero observed visible uses. `system-ui` appears once as an operating-system stack. Neither is promoted as another Flex UI-family token or rendered as a substitute specimen.
- **Measured public hierarchy:** `/about` includes 96px/600/96px and 80px/600/96px display samples, 17px/600/24.65–26.35px body-emphasis samples, and 14px/700 global-navigation controls. These sizes are retained as measured styles without assigning a family token.
- **Documentation chrome:** `guide.flex.team` is a separate Help Center surface. It was inspected only to classify the source domain and contributes no color, typography, or component token here.

## 4. Components

### Global navigation action — outline

**Light-surface secondary action**
- Background: `#FFFFFF`
- Text: `#111111`
- Border: `1px solid #111111`
- Radius: `8px`
- Padding: `8px 14px`
- Font: `13px / 700`
- Use: `/about` light global navigation secondary conversion action; evidence `surface-2::[data-omd-capture="8"]`

### Global navigation action — solid

**Light-surface primary action**
- Background: `#111111`
- Text: `#FFFFFF`
- Radius: `8px`
- Padding: `8px 14px`
- Font: `13px / 700`
- Use: `/about` light global navigation primary conversion action; evidence `surface-2::[data-omd-capture="9"]`

### Marketing CTA — lime

**Primary conversion**
- Background: `#00FF44`
- Text: `#111111`
- Radius: `24px`
- Padding: `30px 44px`
- Font: `17px / 700`
- Use: high-emphasis marketing conversion link on home and `/about`; evidence `home::[data-omd-capture="13"]`, `surface-2::[data-omd-capture="25"]`

### Announcement badge — new

**Default**
- Background: `#FF4D00`
- Text: `#000000`
- Radius: `18px`
- Padding: `0px 8px`
- Font: `12px / 700`
- Use: compact “new” label in the public announcement strip; evidence `home::span`, `surface-2::span`

Only the defaults above are documented. The evidence bundle reports no interaction coverage, so hover, pressed, focus, disabled, menu, dialog, and form states are intentionally omitted.

---

**Verified:** 2026-07-13
**Tier 1 sources:** `https://flex.team/` (marketing surface), `https://flex.team/about` (corporate/marketing surface), `https://guide.flex.team/en/` (documentation-domain classification only), `https://github.com/orioncactus/pretendard/blob/main/packages/pretendard/docs/en/README.md` and `https://github.com/orioncactus/pretendard/blob/main/LICENSE` (font availability and licence boundary only)
**Tier 2 sources:** `https://getdesign.md/flex` (attempted; safe-open failure/no usable record), `https://styles.refero.design/?q=flex` (attempted; safe-open failure/no usable record), web search for both names (no Flex Team design record returned)
**Conflicts unresolved:** none

The legacy `#1D1D1F`/graphite/pill-service-card claims conflict with the supplied 2026 live public capture and were removed; no usable Tier 2 token record was available for a second comparison.

---

## 5. Iconography

The captured public surfaces expose inline brand/product imagery and ordinary navigation affordances, but no named icon library or reusable icon-size/weight rule. No icon token is promoted.

## 6. Imagery & Illustration

- The home page uses application screenshots to demonstrate contextual AI answers, organizational signals, and connected-work-system data; these are marketing illustrations of the platform, not a component library.
- The About page is primarily typographic and narrative. Its light/dark editorial fields frame the company story rather than adding a stock-photo visual language.
- No imagery crop ratio, overlay treatment, or product-screen frame is promoted because the supplied evidence does not identify a repeatable image component.

## 7. Motion

No duration, easing, transition, or scroll-trigger state was recorded in the supplied evidence. Motion is intentionally undocumented rather than extrapolated from the static surfaces.

## 8. Accessibility

- `#111111` on `#FFFFFF` and `#FFFFFF` on `#111111` are high-contrast text pairs in the captured light/dark chrome.
- The lime primary CTA uses `#111111` text over `#00FF44`; retain this pairing when reproducing the observed action treatment.
- The collector did not record focus-visible or keyboard interaction states. Do not infer focus treatment from the 8px or 24px radii; provide an accessible focus indicator in an implementation.
- `Pretendard Variable` is backed by loaded-face evidence and Flex-hosted subset URLs. Static `Pretendard` and `system-ui` remain declared/system fallbacks and must not be presented as additional Flex font roles.

## 9. Content & Voice

The public narrative starts from organizational context rather than generic AI capability. The home page asks whether blanket AI subscriptions actually change how a company works, then answers through three forms of knowledge: knowing the user, anticipating work, and connecting enterprise context. The About page reframes HR as **Human Relations** and positions the company’s mission around solving organizational and employee problems. CTA language is direct and operational—trial or inquiry—while the surrounding prose remains declarative and explanatory.

## 10. Voice & Tone

**Voice adjectives:** contextual · declarative · enterprise-serious

| Do | Don't |
|---|---|
| Start with a concrete organizational condition or question. | Lead with abstract “AI transformation” claims without context. |
| Explain how context, access, and relationships change an outcome. | Treat every user or team as interchangeable. |
| Use a clear conversion label for a trial or inquiry. | Turn every paragraph into a sales CTA. |
| Pair confident headlines with explanatory follow-through. | Use playful hype that conflicts with the governance and safety message. |

The examples are a source-derived style description, not a license to reproduce Flex copy verbatim.

## 11. Brand Narrative

Flex says it was established in 2019 and launched its flex service in 2020. Its current About page describes a progression from establishing an HR-platform standard (2019–2021), through enterprise expansion (2022–2024), toward an AX platform grounded in HR data (2025–2027). The current brand thesis is **Relations Driven AX**: HR is redefined from “Human Resources” to “Human Relations,” and relationship data is presented as the context that lets AI diagnose, suggest, and execute work safely. The company frames its mission as solving organizations’ and employees’ problems so that it becomes an essential service for everyone who works.

## 12. Principles

1. **Context before capability.** Explain what the organization knows and how access is bounded before claiming AI benefit.
2. **Contrast carries authority.** Build the public hierarchy with black, white, and measured opacity; reserve lime for the decisive conversion point.
3. **Use lime as an action, not a status system.** `#00FF44` is evidenced on marketing CTA links, not as a universal product semantic token.
4. **Let scale establish the thesis.** Keep editorial statements distinct from supporting explanation; the recorded 80–96px About styles are a surface-specific example.
5. **Keep source domains separate.** Marketing/corporate pages, Help Center chrome, and unverified app surfaces must not be mixed into one inferred product design system.

## 13. Personas

Flex’s official copy names organizations, members, leaders, and teams as the stakeholders of its platform. It also describes HR teams dealing with attendance, evaluation, compensation, compliance, and data-informed decisions. This reference therefore recognizes those official stakeholder groups without inventing named fictional personas or unverified audience demographics:

- **Organization and HR operators:** need connected organizational and employee data to handle HR operations and compliance.
- **Leaders:** use organizational context and goal/health signals to make decisions.
- **Employees:** receive access and AI assistance bounded by their role and organizational relationship.

## 14. States

No loading, error, empty, disabled, or success state was captured for a Flex product workflow. The supplied evidence also reports zero interaction coverage. The only state-like observations are surface-theme variants (dark versus light navigation) and static component defaults in §4; they are not promoted as behavioral state specifications.

## 15. Motion & Easing

No motion values were captured. Preserve the absence of a claimed motion system rather than assigning easing curves, delays, or stagger behavior from visual inference.

## 16. Do's and Don'ts

### Do

- Use `#111111` and `#FFFFFF` as the dominant public-surface contrast pair.
- Reserve `#00FF44` for the large, high-emphasis conversion action observed on the current public pages.
- Use the 8px navigation action and 24px campaign CTA radii only in their observed contexts.
- Treat 80–96px editorial type as a current About-page treatment, not proof of a product-app display scale.
- Keep help-center chrome and any unobserved logged-in application UI out of this public-surface reference.

### Don't

- Reintroduce the legacy graphite manifesto cards, service-filter pills, or inset-ring variants as current Flex components.
- Treat the orange announcement badge as a general error or warning semantic color.
- Render static `Pretendard` or a system fallback as though it were the verified `Pretendard Variable` family.
- Invent hover, disabled, form, dialog, or loading variants from the static collector output.
- Turn relationship-data positioning into generic AI copy that omits access, role, and organizational context.

---

**Verified:** 2026-07-13
**Pipeline:** omd:add-reference UPDATE (3-tier reconcile)
**Catalog position:** KR · saas · HR-data/AI platform
