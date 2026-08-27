# Fubon Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Fubon Financial Holding (富邦金控) and its retail arm Taipei Fubon Bank (台北富邦銀行) are the two brands behind this contract. It covers exactly two live-inspected first-party web surfaces: the Taipei Fubon Bank personal-banking homepage at `https://www.fubon.com/banking/` and the Fubon Financial Holding group homepage at `https://www.fubon.com/`. Every value below stays attached to the surface that established it. Treating a bank-homepage value as not a proxy for the group homepage, for the Fubon+ mobile app, for the 富邦人壽 / 富邦證券 / 富邦銀行 subsidiary sites, or for branch and offline material is a derived editorial implementation inference from the verified surfaces; it is not Fubon-authored or a separately published UI specification.

The captured interface is a white (`#ffffff`) canvas with one saturated action color — `#0093c1` on the bank surface, `#008fc7` on the group surface — deep navy ink (`#0c0e1f`) for primary text, secondary text at `#494a57`, and flat tinted bands (`#f5f5f5`, `#f3fbfe`) doing the section separation instead of heavy borders. Fubon blue is the anchor across bank and holding group. Reading that restraint as clear, accessible, and dependably institutional without the heaviness of legacy banking navy, and reading the page motto `正向力量 成就可能` (Positive Power — All Possible) as optimism embedded in the brand rather than compliance language, is a derived editorial implementation inference from the verified surfaces; it is not Fubon-authored or a separately published UI specification.

Public history places 富邦金控's origin in 台北市產物保險, established in 1961 by the Tsai (蔡) family, and 台北富邦銀行 in the 2005 merger of Fubon Bank and Taipei Bank. Chairman 蔡明忠 (Tsai Ming-Chung) and his brother Tsai Ming-Hsing lead a group spanning Taiwan, Hong Kong, mainland China, and Vietnam, and a 2024–2026 digital push adds the Fubon+ mobile app, digital account opening, and new branch formats. The source marks these as widely documented public facts. They are narrative context; they do not by themselves supply interface tokens. Reading that heritage as a civic-professional balance that distinguishes Fubon from peers chasing a startup aesthetic, and reading the digital push as modernisation over a core palette and typographic register that stay steady, is a derived editorial implementation inference from the verified surfaces; it is not Fubon-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=4 lang=en -->
### Primary tasks

These four come from CTA labels and modules named on the two captured surfaces. They do not come from the source's persona section, which the source itself marks as illustrative archetypes. Reading those labels and modules as the primary tasks users come to these surfaces to perform is a derived editorial implementation inference from the verified surfaces; it is not Fubon-authored or a separately published UI specification.

- Look up foreign-currency rates in the `外幣匯率` module on the bank homepage.
- Open the full announcement list from the `更多最新公告` link.
- Follow a `了解更多` link from a product or service section into its detail page.
- Start an online application (`線上申辦`) and reach its confirmation (`線上申辦成功`).
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source's four persona entries are self-declared illustrative archetypes rather than real individuals, so they are dropped here instead of being restated or moved to a sidecar. The source narrative names individual depositors, SMEs, and institutional investors as the served groups, and names the service shortcuts `線上申辦`, `預約諮詢`, and `查詢據點` as co-existing with 150+ branch locations. Reading that range as a design constraint spanning young digital-first customers and older branch visitors is a derived editorial implementation inference from the verified surfaces; it is not Fubon-authored or a separately published UI specification.

### Distinctive traits

The list restates the source's key characteristics. Where a bullet characterizes a value rather than stating it — "no display ultra-bold", "soft elevation not harsh depth", "readability with comfort" — that reading is a derived editorial implementation inference from the verified surfaces; it is not Fubon-authored or a separately published UI specification.

- Fubon Blue (`#0093c1`) as the single action and brand anchor color
- Roboto + Noto Sans TC — accessible, multilingual-ready pairing
- Section titles at 24px weight 700; body at 16px / 400 — no display ultra-bold
- White canvas with `#f5f5f5` and `#f3fbfe` tinted surface sections
- Ink text in deep near-black navy (`#0c0e1f`) instead of pure black
- Secondary text at warm dark-grey (`#494a57`) for readability with comfort
- Gentle card shadow (`rgba(0,0,0,0.11) 5px 5px 30px`) — soft elevation not harsh depth
- Rounded corners at 12px for buttons; service icons on circular 50% containers

### Principles

These five items are a derived editorial implementation inference from the verified surfaces; they are not Fubon-authored or a separately published UI specification.

1. **Positive progress over risk avoidance.** `正向力量` read as brand posture rather than marketing language. UI implication: primary actions stay inviting; warning states explain and redirect, not just block.
2. **Accessibility for all generations.** UI implication: 16px body minimum, WCAG-compliant colour ratios on blue/white, bilingual layouts with equal TC/Latin legibility.
3. **Clarity over decoration.** UI implication: section titles are bold and direct; marketing language is kept off product data cards.
4. **Trust through consistency.** `#0093c1` (bank) and `#008fc7` (group) are intentionally close. UI implication: do not introduce a third blue variant.
5. **Digital-forward, branch-aware.** UI implication: the `線上申辦`, `預約諮詢`, and `查詢據點` shortcuts always co-exist; digital and physical are not siloed.

Capture-bound application. Grouping the source's Do list as application rules for the two captured surfaces is a derived editorial implementation inference from the verified surfaces; it is not Fubon-authored or a separately published UI specification.

- Use Fubon Blue (`#0093c1`) for primary CTAs, active link states, and icon accents.
- Pair Roboto with Noto Sans TC for all bilingual UI — never separate the two.
- Use 24px / weight 700 for section titles; keep body at 16px / 400.
- Separate content zones with flat tinted backgrounds (`#f5f5f5`, `#f3fbfe`).
- Set ink text to deep navy (`#0c0e1f`) rather than pure black for warmth.
- Apply 12px radius to popup/confirm buttons; keep large CTA banners at 0px for authority.
- Use the teal accent (`#00a59b`) for success and sustainability-themed elements.
- Keep the shadow soft and diffused — `rgba(0,0,0,0.11) 5px 5px 30px`, not harsh drop shadows.

### Avoid

The eight prohibitions below restate the source's Don't list. The reason each one gives — approachability, warmth, elevation that is gentle rather than dramatic, the tint's cool warmth, and mixing the two blues "without intent" — is a derived editorial implementation inference from the verified surfaces; it is not Fubon-authored or a separately published UI specification. The ninth line restates this contract's scope boundary as a prohibition; like that boundary, it is a derived editorial implementation inference from the verified surfaces and is not Fubon-authored or a separately published UI specification.

- Do not use more than one saturated hue on the same surface — Fubon Blue is the single action color.
- Do not apply ultra-bold display weights (800+) — 700 is the maximum.
- Do not use pure black (`#000000`) for body text — the system uses `#0c0e1f` near-black.
- Do not mix the group's deeper blue (`#008fc7`) and the bank blue (`#0093c1`) on the same page without intent.
- Do not apply heavy box shadows — Fubon elevation is gentle, not dramatic.
- Do not use sharp 0px radius on popup buttons — they are 12px rounded for approachability.
- Do not set negative letter-spacing on headlines — Fubon uses default tracking.
- Do not use pure grey backgrounds — the tint (`#f5f5f5`) has subtle cool warmth.
- Do not present a bank-homepage value as a group-homepage value, or either as evidence for the Fubon+ app or a subsidiary site.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Primary and action

- **Fubon Blue** (`#0093c1`): primary brand CTA color on the bank surface — button backgrounds (`確認`, `同意`), `了解更多` link text, icon accents, category chips.
- **Fubon Blue Deep** (`#008fc7`): group holding-site variant, used on the 60px group-level CTA and the member sub-buttons.
- **Primary Hover** (`#005c7a`): darker blue for hover and active states on primary interactive elements.

Accent

- **Teal Accent** (`#00a59b`): eco / sustainability labels, success states, and the 富邦人壽 subsidiary badge.
- **Error Red** (`#d32f2f`): validation messages and critical alerts.
- **Sky Light** (`#3cbee7`): secondary subsidiary buttons (`富邦銀行`, `富邦證券`) and certain promotional callouts.

Neutral and surface

- **Canvas White** (`#ffffff`): page background, cards, and button text on blue.
- **Surface Grey** (`#f5f5f5`): cool-grey tinted section backgrounds.
- **Surface Sky** (`#f3fbfe`): info cards and service sections.
- **Hairline** (`#d7d6db`): dividers, input borders, separators.
- **Muted Grey** (`#aeafb4`): disabled states and lower-emphasis metadata.

Text

- **Ink Navy** (`#0c0e1f`): primary text, headings, nav items.
- **Body Grey** (`#494a57`): secondary body text, sub-nav links, captions.
- **Muted** (`#7d7f87`): tertiary text and placeholder text.

`#aeafb4` and `#7d7f87` are separate roles in the source and stay separate here; `#0093c1` and `#008fc7` likewise stay apart by surface. `#eef0f0` belongs to the cancel control and is held there rather than given a palette role. The group capture also records `#53bb9f` on a subsidiary button; the source palette assigns it no named role, so none is assigned here either.

### Spacing

Base unit 4px, on the scale 4px, 8px, 12px, 16px, 24px, 32px, 48px (recorded as the unitless steps `xs 4 · sm 8 · md 12 · base 16 · lg 24 · xl 32 · xxl 48`). Section padding is 48px vertical between major content bands.

### Shape

Radius steps recorded in the source token set: `sm 4 · md 12 · lg 16 · full 9999`. The visible sections assign four of them. Reading 12px as the workhorse interactive radius and 0px on the large CTA banners as an authoritative, institutional feel is a derived editorial implementation inference from the verified surfaces; it is not Fubon-authored or a separately published UI specification.

- 4px — badges, chip labels, form inputs
- 12px — primary and secondary popup buttons
- 0px — large full-width group CTA buttons
- 50% — the circular floating digital-service button

The `lg` step (16) is carried in the token set; the visible sections name 4, 12, 0, and 50% only, so no surface is assigned to it here.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (0) | No shadow, no border | Page background, nav items, most inline elements |
| Tint (1) | `#f5f5f5` or `#f3fbfe` background | Section separation |
| Soft Card (2) | `rgba(0,0,0,0.11) 5px 5px 30px` | Floating white cards, digital service FAB |
| Overlay (3) | `rgba(0,0,0,0.25)` scrim | Modal / popup overlay background |

The token set records the card shadow as `rgba(0, 0, 0, 0.11) 5px 5px 30px 0px` and the soft/overlay value as `rgba(0, 0, 0, 0.25)`. Reading elevation as used sparingly — flat tinted bands as the dominant grouping device, the 30px spread as diffused depth that does not compete with the brand blue as focal point — is a derived editorial implementation inference from the verified surfaces; it is not Fubon-authored or a separately published UI specification.

### Motion

Durations, as the source records them rather than as anything the capture measured: `motion-fast` 150ms (button press, tab switch, focus ring) · `motion-standard` 250ms (dropdown open/close, card reveal, accordion) · `motion-slow` 400ms (page-level section fade, banner transition).

Easing token names and their roles: `ease-enter` for arriving panels, sheets, and expanding menus; `ease-exit` for dismissals and collapsing accordions; `ease-standard` for toggles and two-directional transitions. No curve value is promoted here. Nothing in this Motion subsection rests on an observation: the capture recorded no transition, animation, or easing sample, so the durations above, these token names and roles, and the rules below are all carried as the source's record and not as measurements. The three curve values the source carried are withheld rather than carried on a further ground — one of them is byte-identical to the example table in the legacy specification template. A curve may be promoted only after a per-component computed observation records all five evidence kinds for that component: transition properties, animation name, duration, easing, and reduced-motion behavior.

Motion rules, on the same footing — the source's record, not an observation: navigation dropdowns ease in smoothly; page banner transitions use a clean fade rather than parallax or spring; mobile touch targets respond immediately on press, with sub-100ms feedback; and under `prefers-reduced-motion: reduce`, all animated transitions collapse to an instant cut and the site remains fully usable. Reading this as motion that is functional and conservative, matching the institution's temperament, is a derived editorial implementation inference from the verified surfaces; it is not Fubon-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | The source names no published Fubon typography specification. |
| Live computed surface-use | A computed `font-family` is recorded for exactly two elements: the bank homepage `body` computes `Roboto, "Noto Sans TC"`, and the H1 `個人金融` computes `Roboto / Noto Sans TC`. |
| Official distributed asset | The source names no Fubon-distributed or Fubon-hosted type family. |
| License | The source records no license statement for either family. |
| Outside these captures | Fubon+ app, subsidiary-site, and offline typography stay outside the two captured surfaces. |

### Family

- **Latin:** `Roboto` — the Latin primary
- **Traditional Chinese:** `Noto Sans TC` — Traditional Chinese glyph coverage
- **Fallback (visible section):** `Arial, Helvetica, 微軟正黑體, Microsoft JhengHei, Apple LiGothic, 蘋果儷中黑`
- **Fallback (token set):** `Microsoft JhengHei`

Both fallback records are kept; the token set carries the single face and the visible section carries the fuller stack. Do not substitute a system face for either named family.

### Type roles

| Role | Family | Size | Weight | Line height | Use |
|---|---|---:|---:|---:|---|
| Page H1 | Roboto / Noto Sans TC | 25px | 400 | 1.4 | Page-level heading (個人金融, 信用卡) |
| Section Title | Roboto / Noto Sans TC | 24px | 700 | 1.33 | .title-primary — major section breaks |
| Compact Section | Roboto / Noto Sans TC | 20px | 700 | 1.4 | Sidebar / widget headers (熱門服務) |
| Nav Link | Roboto / Noto Sans TC | 18px | 400 | 1.4 | Top nav items |
| CTA Link | Roboto / Noto Sans TC | 18px | 500 | 1.4 | Learn-more links (了解更多, 更多最新公告) |
| Body | Roboto / Noto Sans TC | 16px | 400 | 1.5 | Standard reading, card content |
| Button | Roboto / Noto Sans TC | 16px | 700 | 1.25 | Popup confirm / primary buttons |
| Caption / Label | Roboto / Noto Sans TC | 14px | 400 | 1.5 | Footer links, sub-nav, member list |

The token set records its own `use` string for each of the same eight roles, kept verbatim: Page-level heading (personal / section) · Section title (.title-primary) · Compact section title · Top nav links · More-link CTAs (了解更多 / 更多最新公告) · Standard body text · Popup confirm / cancel button · Sub-nav, footer links, captions.

Line heights are unitless ratios in the source and stay ratios here. The source records default tracking throughout and no negative letter-spacing anywhere, and 700 is the heaviest weight in its type scale.

### Type rules

Reading Roboto + Noto Sans TC as holding equal visual weight across Latin and TC glyphs with no size compensation needed, 16px body and 14px caption as comfort and accessibility choices for mixed-age Taiwanese banking users, default tracking as trust in the typefaces' own spacing, and the 700 ceiling as a system rule that admits no 800 or 900 display weight, is a derived editorial implementation inference from the verified surfaces; it is not Fubon-authored or a separately published UI specification. The instruction to pair the two families for bilingual UI rather than use either alone falls inside that same qualification.

### Assets

- Bank surface favicon: `https://www.fubon.com/banking/common_content/images/favicon.ico`
- Quick-access service icons sit on circular (50%) containers.

<!-- design-md:section components-states -->
## 4. Components & States

### Surface state contract

The ten rows below are the source's state contract for the captured surfaces. They describe surface- and module-level treatments, not per-control treatments. One row is anchored to observation — the `台北富邦銀行系統暫停服務` pattern matches observed site announcements. The rest are a derived editorial implementation inference from the verified surfaces; they are not Fubon-authored or a separately published UI specification.

| State | Treatment |
|---|---|
| **Empty (no announcements)** | White canvas with `#494a57` supporting text — a calm explanation of no current notices, with a service shortcut link. |
| **Empty (search — no results)** | Plain body-grey `#494a57` message with a suggestion to adjust the search term. No illustration clutter. |
| **Loading (page / data fetch)** | Skeleton blocks on `#f5f5f5` tinted surface at card dimensions; grey pulse. Consistent with the flat system. |
| **Loading (rate query)** | Inline spinner within the exchange-rate module; previous values remain visible. |
| **Error (form validation)** | Field-level error message below input in a warm error tone; states what to correct, not just "必填". |
| **Error (system / service unavailable)** | Inline plain-language explanation with a retry or contact-link — "台北富邦銀行系統暫停服務" pattern matches observed site announcements. |
| **Success (online application submitted)** | Brief inline confirmation with next-step detail ("線上申辦成功"). Calm, no celebration emoji. |
| **Skeleton** | `#f5f5f5` blocks at final card dimensions, flat grey pulse consistent with the tinted-surface system. |
| **Disabled** | Muted grey (`#aeafb4`) text on reduced-opacity surface; primary blue actions de-saturate rather than turn red. |
| **Security Warning** | Distinct "詐騙手法" alert block — calm but prominent with a clear action to take, not a generic red warning banner. |

### How applicability is decided here

Each declared component keeps the primitive type the source verified for it. Applicability is judged by control role, never by how much the capture happened to cover: `default` and `focus-visible` apply to every interactive control; a state that is meaningful for the role stays `applicable` with its visual treatment omitted where the source supplies none; `not-applicable` is used only where the role has no such outcome to represent. Where the source supplies no interaction evidence for a container at all, its kind and applicability map are omitted rather than decided. These role judgments — including every Reason cell in the per-component tables below — are a derived editorial implementation inference from the verified surfaces; they are not Fubon-authored or a separately published UI specification. This is not a complete state-coverage claim.

### Primary Button (`確認` / `同意`)

- Type: button
- Kind: interactive
- Role: popup confirm, cookie consent, primary action
- Background: `#0093c1` · Text: `#ffffff` · Border: `1px solid #0093c1`
- Radius: 12px · Font: 16px / 700 Roboto
- Token-set use: Primary confirm / CTA (確認, 同意)
- Captured variance: the popup confirm (`確認`) computes `border-radius: 0px 0px 12px` at 16px / 700; the cookie consent (`同意`) computes `border-radius: 12px` at 16px / 500. The token set records the role as 12px / 16px / 700.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on the bank homepage |
| hover | applicable | Pointer-web button; the source names `#005c7a` as the hover and active color for primary interactive elements |
| focus-visible | applicable | Keyboard-reachable control; treatment unresolved |
| disabled | applicable | The action can be unavailable; control-level treatment unresolved |
| loading | applicable | Commits the confirm / consent operation, which can be pending; treatment unresolved |
| error | applicable | Commits an operation that can fail; treatment unresolved |
| success | applicable | Commits an operation that can complete; treatment unresolved |

### Secondary / Cancel Button (`取消`)

- Type: button
- Kind: interactive
- Role: cancel / dismiss in popup dialogs
- Background: `#eef0f0` · Text: `#0c0e1f` · Border: `1px solid #eef0f0`
- Radius: 12px · Font: 16px / 700 Roboto
- Token-set use: Cancel / secondary action (取消)
- Captured variance: the popup cancel (`取消`) computes `border-radius: 0px 0px 0px 12px`.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on the bank homepage |
| hover | applicable | Pointer-web button; treatment unresolved |
| focus-visible | applicable | Keyboard-reachable control; treatment unresolved |
| disabled | applicable | Dismissal can be blocked while the dialog is committing; treatment unresolved |
| loading | not-applicable | The control dismisses the dialog and commits no operation, so there is no pending outcome to represent |
| error | not-applicable | Same role: nothing is committed here that could fail |
| success | not-applicable | Same role: nothing is committed here that could complete |

### Large Group CTA (`了解更多`)

- Type: button
- Kind: interactive
- Role: group-level primary CTA, full-width section buttons
- Background: `#008fc7` · Text: `#ffffff` · Height: 60px · Radius: 0px · Font: 16px / 400 Roboto
- Token-set use: Group-level large CTA (了解更多, 60px height)

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on the group homepage |
| hover | applicable | Pointer-web control; treatment unresolved |
| focus-visible | applicable | Keyboard-reachable control; treatment unresolved |
| disabled | applicable | The destination can be unavailable; treatment unresolved |
| loading | not-applicable | The control moves the reader to a destination section and commits no operation there |
| error | not-applicable | Same role: nothing is committed here that could fail |
| success | not-applicable | Same role: nothing is committed here that could complete |

### Primary Nav Link

- Type: tab
- Kind: interactive
- Role: personal-banking top nav link
- Text: `#0c0e1f` · Font: 18px / 400 Roboto · Background: transparent on default
- Token-set use: Personal banking top nav link; token-set active record: text #0093c1 underline on hover
- Active: text `#0093c1` with an underline indicator. The source records `active` separately from the seven canonical states, and it is kept here as its own observation rather than folded into any of them.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on the bank homepage top nav |
| hover | applicable | The source records Fubon Blue (`#0093c1`) text on hover |
| focus-visible | applicable | Keyboard-reachable control; treatment unresolved |
| disabled | applicable | A nav destination can be unavailable; treatment unresolved |
| loading | not-applicable | Destination navigation; the control commits no operation |
| error | not-applicable | Same role: nothing is committed here that could fail |
| success | not-applicable | Same role: nothing is committed here that could complete |

### Default Input

- Type: input
- Kind: interactive
- Role: search fields and form inputs
- Background: `#ffffff` · Text: `#0c0e1f` · Placeholder: `#7d7f87`
- Border: `1px solid #d7d6db` · Radius: 0px · Font: 14px / 400 Roboto
- Token-set use: Standard form input field

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded in the source token set for the standard form input |
| hover | applicable | Pointer-web field; treatment unresolved |
| focus-visible | applicable | Text-entry point reached by keyboard; treatment unresolved |
| disabled | applicable | Entry can be unavailable; control-level treatment unresolved |
| loading | applicable | Submitted entry resolves asynchronously here — the surface state contract records a data-fetch and a rate-query loading state; control-level treatment unresolved |
| error | applicable | The surface state contract places a field-level validation message directly below this input |
| success | applicable | Validated entry is a meaningful outcome for this field; treatment unresolved |

### Floating Digital-service Button

- Kind: interactive — the source names it a floating service button
- Role: digital-banking service shortcut on the bank homepage
- Background: `#ffffff` · Radius: 50% · Shadow: `rgba(0, 0, 0, 0.11) 5px 5px 30px 0px`
- The source token set records no primitive type for this control, so none is assigned.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on the bank homepage |
| hover | applicable | Pointer-web control; treatment unresolved |
| focus-visible | applicable | Keyboard-reachable control; treatment unresolved |
| disabled | applicable | The shortcut can be unavailable; treatment unresolved |
| loading | applicable | The source names the control but not what it commits, so the state stays open rather than closed; treatment unresolved |
| error | applicable | Same reason: the role's outcome is unresolved, so the state is left open |
| success | applicable | Same reason: the role's outcome is unresolved, so the state is left open |

### White Content Card

- Type: card
- Background: `#ffffff` · Text: `#0c0e1f` · Radius: 0px
- Shadow: `rgba(0, 0, 0, 0.11) 5px 5px 30px 0px`
- Use: product / feature cards with gentle floating elevation. Token-set use: White content card with drop shadow
- The source supplies no interaction evidence for this container, so its kind and applicability map are omitted rather than decided.

### Grey Surface Card

- Type: card
- Background: `#f5f5f5` · Text: `#0c0e1f`
- Use: alternating section background tint — separates content zones without borders. Token-set use: Light grey tinted surface card
- Kind and applicability map omitted on the same grounds.

### Sky-Blue Info Card

- Type: card
- Background: `#f3fbfe` · Text: `#0c0e1f`
- Use: light-blue tinted info sections and product highlights. Token-set use: Sky-blue tinted info card
- Kind and applicability map omitted on the same grounds.

### Primary Blue Badge

- Type: badge
- Background: `#0093c1` · Text: `#ffffff` · Radius: 4px
- Use: category tags, service indicators, subsidiary label chips. Token-set use: Category / service badge
- Kind and applicability map omitted on the same grounds.

### Teal Success Badge

- Type: badge
- Background: `#00a59b` · Text: `#ffffff` · Radius: 4px
- Use: success, sustainability, and eco-friendly service tags. Token-set use: Success / eco / sustainable action badge
- Kind and applicability map omitted on the same grounds.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

Spacing: base unit 4px on the 4 / 8 / 12 / 16 / 24 / 32 / 48px scale, with 48px vertical padding between major content bands.

Structure: a centered desktop container with side padding; hero banners extend full-width; a 2×4 grid of quick-access service icons with equal spacing; a multi-column footer link grid set in Roboto 14px / `#494a57`. The bank homepage header is 112px tall on `#ffffff`.

| Breakpoint | Width | Key changes |
|---|---|---|
| Mobile | <768px | Single column; quick-icon grid becomes 2-wide; nav collapses to hamburger |
| Tablet | 768–1024px | 2-column layout; reduced hero banner height |
| Desktop | 1024px+ | Full multi-column layout; 2×4 quick-access icon grid |

Touch and reflow, as the source states them: the large group CTA is 60px tall; quick-service icons use padded icon containers; the floating digital-service button is circular. Section headings hold 24px / 700 across breakpoints, tinted surface bands stay full-width at every size, and the exchange-rate table scrolls horizontally on mobile.

Reading the spacing split — generous between sections, compact within financial modules such as exchange rates and announcements — as a deliberate whitespace philosophy, reading the 8-icon quick-access grid as visual affordance replacing prose, and reading the 60px CTA height and the padded icon containers as comfortable thumb targets clearly distinct from content, is a derived editorial implementation inference from the verified surfaces; it is not Fubon-authored or a separately published UI specification.

The two live inspects are desktop web surfaces. The breakpoint table and the collapsing behaviour above are the source's stated responsive contract, not measurements taken at those widths, and the source names no iOS, Android, or desktop-app profile.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Locale: Traditional Chinese (zh-TW) with Latin alongside. Both captured surfaces are Taiwanese first-party sites, and the type system pairs Roboto with Noto Sans TC for TC and Latin text.

Strings observed verbatim on the live surfaces (verified 2026-06-22):

- `正向力量 成就可能` — group brand tagline, homepage hero
- `全方位守護` — personal banking section heading (all-round protection)
- `北富銀理財學院` — wealth management education section
- Control labels: `確認`, `同意`, `取消`, `了解更多`, `更多最新公告`
- Headings and modules: `個人金融`, `信用卡`, `熱門服務`, `外幣匯率`

The labels above are the published strings. English in parentheses is a reader aid and never replaces the label.

Everything from here to the end of this section is a derived editorial implementation inference from the verified surfaces; it is not Fubon-authored or a separately published UI specification. Reading the voice as reassuring, empowering, and community-grounded — Taiwan's largest financial group presenting itself as a trusted partner for life rather than a faceless institution — and reading `正向力量 成就可能` as framing financial products as enablers of aspiration rather than gatekeepers of access, falls under that qualification, as do the register table and the forbidden-register list. Neither is a published Fubon copy guide.

Register by context:

| Context | Tone |
|---|---|
| Brand headline | Aspirational, warm, declarative. `正向力量 成就可能`. Not sales-first. |
| Product names | Functional, clear. `個人金融`, `信用卡`, `外幣匯率` — utility-forward. |
| Service CTAs | Low-pressure, inviting. `了解更多` ("Learn more"), `線上申辦` ("Apply online"). |
| Alert / security copy | Calm, concrete. `詐騙手法：請提高警覺` — states risk and action, no panic. |
| Announcement copy | Plain, informative. Dates and facts first; no promotional hype in disclosures. |

Forbidden register: alarming or fear-based financial urgency, excessive promotional superlatives, and jargon-first explanations without plain-language accompaniment.

<!-- design-md:section governance -->
## 7. Governance

<!-- design-md:claim authority kind=evidence-backed-reconstruction lang=en -->
### Authority

This document is an evidence-backed reconstruction, not authority for an unrelated target project.
<!-- design-md:claim-end -->

<!-- design-md:claim application-priority order=prompt-fact,repository-fact,system-contract,reference-inspiration lang=en -->
### Application priority

1. Direct user instructions for the requested scope.
2. Repository facts.
3. This system contract.
4. Reference inspiration.
<!-- design-md:claim-end -->

<!-- design-md:claim unknowns policy=absent-at-smallest-unresolved-boundary lang=en -->
### Unknowns

Omit only the smallest unresolved value or group. Do not replace it with a plausible default.
<!-- design-md:claim-end -->

<!-- design-md:claim changes policy=review-record-validate-before-adoption lang=en -->
### Changes

Record, review, and validate changes before adoption.
<!-- design-md:claim-end -->

### Named gaps

These are unnamed values, not permissions to invent:

- exact curve values for `ease-enter`, `ease-exit`, and `ease-standard`
- focus and focus-visible visual treatment on every declared control
- hover treatment for the cancel button, the large group CTA, the input, the badges, and the floating digital-service button
- control-level loading, error, and success treatment wherever those states are applicable above
- the surface that carries the `lg` radius step (16)
- the primitive type of the floating digital-service button
- the interaction behaviour, if any, of the three card containers and the two badges
- design values for the Fubon+ mobile app and for the 富邦人壽, 富邦證券, and 富邦銀行 subsidiary sites
