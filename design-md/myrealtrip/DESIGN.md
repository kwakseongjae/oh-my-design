---
id: myrealtrip
name: MyRealTrip
country: KR
category: consumer-tech
homepage: "https://www.myrealtrip.com"
primary_color: "#2b96ed"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=myrealtrip.com&sz=128"
verified: "2026-07-13"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: consumer-home, kind: product, url: "https://www.myrealtrip.com/", inspected: "2026-07-13" }
    - { id: hotel-listing, kind: product, url: "https://www.myrealtrip.com/hotels", inspected: "2026-07-13" }
    - { id: corporate-about, kind: corporate, url: "https://about.myrealtrip.com/", inspected: "2026-07-13" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.myrealtrip.com/", captured: "2026-07-13" }
    - { id: hotel-live, kind: product-surface, url: "https://www.myrealtrip.com/hotels", captured: "2026-07-13" }
    - { id: about-live, kind: product-surface, url: "https://about.myrealtrip.com/", captured: "2026-07-13" }
    - { id: help-center, kind: product-surface, url: "https://help.myrealtrip.com/hc/ko", captured: "2026-07-13" }
    - { id: pretendard-license, kind: license, url: "https://github.com/orioncactus/pretendard/blob/main/LICENSE", captured: "2026-07-13" }
  claims:
    "tokens.colors.primary": &home { surface_id: consumer-home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.canvas": *home
    "tokens.colors.ink": *home
    "tokens.colors.muted": *home
    "tokens.colors.search-fill": *home
    "tokens.colors.control-border": *home
    "tokens.colors.selected-fill": *home
    "tokens.colors.on-primary": *home
    "tokens.typography.family.sans": &hotel_font { surface_id: hotel-listing, source_id: hotel-live, method: computed-style-fontfaceset-source, captured: "2026-07-13" }
    "tokens.typography.body.size": *hotel_font
    "tokens.typography.body.weight": *hotel_font
    "tokens.typography.body.lineHeight": *hotel_font
    "tokens.typography.body.use": *hotel_font
    "tokens.typography.control.size": *hotel_font
    "tokens.typography.control.weight": *hotel_font
    "tokens.typography.control.lineHeight": *hotel_font
    "tokens.typography.control.use": *hotel_font
    "tokens.spacing.action-inline": *home
    "tokens.rounded.square": *home
    "tokens.rounded.action": *home
    "tokens.rounded.selected-tab": *home
    "tokens.components.primary-header-action.type": *home
    "tokens.components.primary-header-action.bg": *home
    "tokens.components.primary-header-action.fg": *home
    "tokens.components.primary-header-action.radius": *home
    "tokens.components.primary-header-action.padding": *home
    "tokens.components.primary-header-action.height": *home
    "tokens.components.primary-header-action.font": *home
    "tokens.components.primary-header-action.states": *home
    "tokens.components.primary-header-action.use": *home
    "tokens.components.selected-locale-tab.type": *home
    "tokens.components.selected-locale-tab.bg": *home
    "tokens.components.selected-locale-tab.fg": *home
    "tokens.components.selected-locale-tab.radius": *home
    "tokens.components.selected-locale-tab.padding": *home
    "tokens.components.selected-locale-tab.height": *home
    "tokens.components.selected-locale-tab.font": *home
    "tokens.components.selected-locale-tab.active": *home
    "tokens.components.selected-locale-tab.use": *home
  conflicts: []
tokens:
  source: live-extract
  extracted: "2026-07-13"
  note: "Only values with current raw computed-style provenance are tokens. Home/hotel product surfaces and corporate/about chrome remain separate."
  colors:
    primary: "#2b96ed"
    canvas: "#ffffff"
    ink: "#495056"
    muted: "#666d75"
    search-fill: "#f5f6f7"
    control-border: "#ced4da"
    selected-fill: "#101418"
    on-primary: "#ffffff"
  typography:
    family: { sans: "Pretendard" }
    body: { size: 14, weight: 400, lineHeight: "21px", use: "Public hotel-listing body/list text" }
    control: { size: 15, weight: 500, lineHeight: "22.5px", use: "Public hotel-search input" }
  spacing: { action-inline: 24 }
  rounded: { square: 0, action: 12, selected-tab: 16 }
  components_harvested: true
  components:
    primary-header-action: { type: button, bg: "#2b96ed", fg: "#ffffff", radius: "12px", padding: "0px 24px", height: "40px", font: "14px / 600 / Pretendard", states: "Default only; interactionCount is 0, so hover, focus, pressed, and disabled variants are not claimed.", use: "Public home and hotel-header action; home::[data-omd-capture=\"5\"] and surface-3::[data-omd-capture=\"3\"]" }
    selected-locale-tab: { type: tab, bg: "#101418", fg: "#ffffff", radius: "16px", padding: "6px 10px", height: "32px", font: "15px / 700 / Pretendard", active: "aria-selected=true observed on home::[data-omd-capture=\"1\"]", use: "Selected locale tab on the public home header" }
---

# Design System Inspiration of MyRealTrip (마이리얼트립)

## 1. Visual Theme & Atmosphere

MyRealTrip is a Korean travel marketplace whose own public materials describe a 2012 start brokering locally made tours and a current scope across travel experiences. The current public home and hotel-listing surfaces pair a white working canvas with low-chrome navigation: a blue header action, a pale-gray search field, compact gray text, and a selected dark locale pill. The visual system recorded here is deliberately narrower than a brand story. It covers only current rendered public web evidence, while the separate corporate/about site is kept as corporate chrome rather than silently blended into consumer-product tokens. MyRealTrip’s public partner program foregrounds reliable booking, sustained traveler ratings, and prompt communication; its current company blog describes the organisation as an AI-native travel platform. Those are product and organisational context, not evidence for an unobserved app component or visual token.

**Observed character:** restrained utility chrome around travel discovery, with `#2B96ED` used for the repeated public header action rather than a generalised brand palette.

## 2. Color Palette & Roles

The following are current computed observations from the supplied 2026-07-13 product bundle. They are not a published MyRealTrip token library.

| Observed role | Value | Provenance and boundary |
|---|---:|---|
| Repeated header action | `#2B96ED` | 40px button background on home and hotel listing; do not infer hover or booking-flow use. |
| White canvas / action text | `#FFFFFF` | Repeated public surface background and text on the blue action. |
| Search fill | `#F5F6F7` | 48px public search input on home and hotel listing. |
| Search/control ink | `#495056` | Repeated input and public list/control text. |
| Muted navigation text | `#666D75` | Repeated public home and hotel-header text/border observation. |
| Control border | `#CED4DA` | Static white outlined control in both product surfaces. |
| Selected locale-tab fill | `#101418` | `aria-selected=true` tab on the home header. |

The prior deep-blue, violet, semantic, sale, and success palette claims are not retained: the fresh bundle does not establish them as current reusable product tokens.

## 3. Typography Rules

### Current public-web font evidence

| Evidence class | Finding | Boundary |
|---|---|---|
| **Official product-use** | No first-party MyRealTrip font specification or announcement was found in this update. | No brand-font claim is inferred from a marketing or corporate page. |
| **Live computed surface-use** | `Pretendard` is a loaded, high-confidence first family with 60 visible uses and 36 captured source URLs; the hotel search input resolves to it directly. | This supports the public-web UI-family token only. |
| **Loaded internal alias** | `__pretandard_7bdbf6` is loaded with high confidence, 64 visible uses, and four MyRealTrip CDN sources. | The bundle does not prove that the internal alias is a separately named, reusable brand typeface. |
| **Official distributed font asset / licence** | Pretendard’s upstream project publishes the font under SIL Open Font License 1.1. | This is third-party font licensing, not a licence to MyRealTrip marks, UI assets, or an assertion that every MyRealTrip surface ships the same build. |
| **Declared-only** | `Pretendard Variable`, `Noto Sans KR`, `PP Neue Montreal`, and icon faces appear as declarations in the bundle but are not promoted by the collector. | Do not render a specimen or token as though any of them were verified visible current UI use. |

### Measured public roles

| Role | Family | Size | Weight | Line height | Surface |
|---|---|---:|---:|---:|---|
| Hotel-listing body/list text | Pretendard | 14px | 400 | 21px | `https://www.myrealtrip.com/hotels` |
| Hotel search control | Pretendard | 15px | 500 | 22.5px | `https://www.myrealtrip.com/hotels` |
| Selected home locale tab | Pretendard | 15px | 700 | 18.6px | `https://www.myrealtrip.com/` |

These are captured public-web roles, not a claim about authenticated booking screens, mobile native UI, help-center chrome, or a company-wide typographic scale.

## 4. Component Stylings

### Public header action

**Observed default**
- Background: `#2B96ED`
- Text: `#FFFFFF`
- Radius: 12px
- Padding: 0px 24px
- Height: 40px
- Font: 14px / 600 / loaded internal Pretendard alias on home; Pretendard stack on hotel listing
- States: default only; the supplied bundle reports `interactionCount: 0`, so no hover, focus, pressed, disabled, menu, dialog, validation, or loading variant is claimed
- Use: repeated header action on `home::[data-omd-capture="5"]` and `surface-3::[data-omd-capture="3"]`

### Public search field

**Observed default**
- Background: `#F5F6F7`
- Text: `#495056`
- Border: 0px
- Radius: 0px
- Padding: 0px 54px 0px 20px
- Height: 48px
- Font: 15px / 500 / loaded internal Pretendard alias on home; Pretendard stack on hotel listing
- Use: public keyword search at `home::[data-omd-capture="3"]` and `surface-3::[data-omd-capture="1"]`

### Selected locale tab

**Selected state observed**
- Background: `#101418`
- Text: `#FFFFFF`
- Radius: 16px
- Padding: 6px 10px
- Height: 32px
- Font: 15px / 700 / Pretendard
- Active: `aria-selected="true"` on `home::[data-omd-capture="1"]`
- Use: selected locale tab within the home-header tablist

The unselected sibling’s transparent computed text is not promoted as a reusable inactive variant. Its static capture does not establish an interaction transition.

---
**Verified:** 2026-07-13
**Tier 1 sources:** `https://www.myrealtrip.com/` (public consumer home), `https://www.myrealtrip.com/hotels` (public hotel listing), `https://about.myrealtrip.com/` (separate corporate/about surface), `https://help.myrealtrip.com/hc/ko` (official support chrome and service context)
**Tier 2 sources:** `https://getdesign.md/myrealtrip` (attempted; built-in web open returned a safe-open failure and search returned no MyRealTrip detail), `https://styles.refero.design/?q=myrealtrip` (attempted; built-in web open returned a safe-open failure and search returned no MyRealTrip detail). No Tier 2 value was promoted.
**Conflicts unresolved:** none

The prior prose-derived palette, broad card/badge/dialog/toast inventory, hover/focus/error/disabled catalogue, mobile breakpoints, and motion rules were not supported by the supplied current raw evidence. They are removed rather than refreshed by assumption.

## 5. Layout Principles

The supplied bundle records public desktop-width documents only. The repeated consumer header is compact: the search field is 48px high, the primary action is 40px high, and the selected locale tab is 32px high. No public max-width, carousel, card-grid, booking-detail, or authenticated-flow layout rule is retained because the bundle does not supply a stable element-level measurement for one.

## 6. Depth & Elevation

The retained primary action, search field, and selected locale tab have no shadow. The selected tab’s own sample carries `0px 1px 2px rgba(0, 0, 0, 0.15)` while the action and search field are `none`; this isolated header treatment does not establish a reusable elevation scale.

## 7. Do's and Don'ts

### Do

- Keep the documented `#2B96ED` / `#FFFFFF` pair for the observed 40px public header action when reproducing that exact public-web pattern.
- Preserve the selected locale tab’s observed `#101418` fill, 16px radius, and explicit selected-state provenance.
- Treat the pale `#F5F6F7` search field as its own square-cornered public header control.

### Don't

- Don't turn the captured default action into hover, focus, pressed, disabled, booking, or payment variants without new state evidence.
- Don't substitute a declared-only font face for the visibly loaded Pretendard/public aliases.
- Don't blend the corporate/about or help-center chrome into consumer product tokens.

## 8. Responsive Behavior

No responsive breakpoint or mobile layout was captured in the supplied evidence. The record therefore makes no claim about mobile navigation, carousel behavior, touch targets, safe-area controls, or image aspect-ratio rules.

## 9. Agent Prompt Guide

Use only the captured public pattern: “Create a 40px MyRealTrip public header action with `#2B96ED` background, `#FFFFFF` text, 12px radius, 0px 24px padding, and 14px/600 Pretendard-context typography. This is a static default; do not invent interaction states.”

For the selected locale control: “Use the observed selected tab only: `#101418` fill, white 15px/700 text, 16px radius, 6px 10px padding, 32px height; preserve that it was an `aria-selected=true` observation.”

## 10. Voice & Tone

The public sources demonstrate Korean-first service labels such as `무엇을 도와드릴까요?`, `문의하기`, and partner guidance written in polite `~요` language. Those samples support a practical, explanatory service register on the public help and partner surfaces; they do not establish a comprehensive product voice system.

| Evidence | Safe use |
|---|---|
| `무엇을 도와드릴까요?` | Help-centre framing for a support entry point. |
| `문의하기` | Direct action label for a support route. |
| `여행자와의 약속을 성실히 이행해요` | Partner-program guidance, not a generic consumer CTA. |

## 11. Brand Narrative

MyRealTrip’s own public offer page identifies founder Lee Dong-geon and says the company was founded in February 2012, beginning by brokering tours made by local people. Its current partner programme frames quality around responsible reservation fulfilment, traveller ratings, and timely communication. The company blog currently describes MyRealTrip as an AI-native travel platform and publishes product, technology, and organisational stories. Together, these sources establish a travel-marketplace origin and a current organisational direction; they do not supply an official rebrand history or a visual-design manifesto.

## 12. Principles

1. **Reliable reservation fulfilment.** The partner programme asks partners to manage schedules so confirmed reservations can be fulfilled. *UI implication:* do not represent this as a verified button, badge, or checkout-state treatment without product-screen evidence.
2. **Traveller feedback matters.** The public Real Partner criteria include a rolling one-year 4.8-or-higher review requirement. *UI implication:* the criterion is partner-program context, not permission to invent rating-card components.
3. **Timely communication.** The same programme asks for message responses and reservation confirmation within 24 hours. *UI implication:* do not turn this service standard into a notification, SLA, or error-state token without direct evidence.

## 13. Personas

The first-party materials identify public stakeholder groups rather than research-backed personas: travellers seeking travel products, partners who operate listings and reservations, and support visitors looking for help. No named or synthetic persona is supplied here; demographic needs, booking journeys, and conversion motivations remain `[FILL IN]` pending first-party research or user-provided evidence.

## 14. States

The collector reports one selected tab observation and `interactionCount: 0`. No verified empty, loading, error, success, disabled, validation, toast, dialog, or skeleton treatment is available from this packet.

| State | Evidence boundary |
|---|---|
| Selected locale tab | `aria-selected="true"` static home-header observation; values recorded in §4. |
| Empty | `[FILL IN]` |
| Loading | `[FILL IN]` |
| Error | `[FILL IN]` |
| Success | `[FILL IN]` |
| Disabled | `[FILL IN]` |

## 15. Motion & Easing

`[FILL IN]` No duration, easing, transition, reduced-motion, or animated-state measurement was captured. Do not infer motion from class names or from the presence of interactive-looking controls.
