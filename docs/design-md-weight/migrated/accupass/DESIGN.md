# Accupass Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Accupass (活動通) is Taiwan’s event-discovery and ticketing platform. The source names it as Taiwan’s largest such platform. It is operated by Accuvally Inc. (盈科泛利股份有限公司). This contract covers two current first-party product surfaces from the 2026-06-10 live inspect: the homepage `https://www.accupass.com` and the event-detail route `https://www.accupass.com/event/2605092145291488451008`.

Treating the official blog `https://blog.accupass.com` (ACCUPASS 生活誌) as a first-party editorial surface for quoted voice samples, and not as a token sheet for homepage or event-detail chrome, is a derived editorial implementation inference from the verified surfaces; it is not Accupass-authored or a separately published UI specification.

Treating the following public-history facts as narrative rather than interface tokens is a derived editorial implementation inference from the verified surfaces; it is not Accupass-authored or a separately published UI specification. Public founder interviews and press recorded in the source: founded by 謝耀輝 (Yao-Hui Hsieh) and 羅子文 (Tzu-Wen Lo). The pair left engineering careers (Hsieh had been a Foxconn software engineer in Shenzhen) to start AccuSeats, a restaurant-reservation service, in 2009, then pivoted into events, launching Accupass in Taiwan in 2012 and a sister platform, 活動行, in China in 2013. The company’s stated mission is 「壯大亞洲活動生態圈」 (grow the Asian event ecosystem) — positioning events as a “third space” of life beyond home and work, and Accupass as the infrastructure that connects regional organizers to audiences. After raising roughly NT$200M and expanding across Chinese cities, Accuvally nearly went bankrupt; founder interviews recount Hsieh contemplating declaring bankruptcy on his own birthday before cutting back to the Taiwan core. Hsieh’s framing — long-term thinking rather than quick-money instincts — is recorded as explaining a dense catalog that serves hundreds of thousands of events rather than a flashy brand reinvention. Those URLs stay in provenance; they do not supply color, type, or component tokens.

The following visual-character, marketplace-density, and conversion-proximity readings are a derived editorial implementation inference from the verified surfaces; they are not Accupass-authored or a separately published UI specification. The source reads the captured chrome as a bright, busy, optimistic marketplace rather than a polished brand statement, and as a dense catalog for scanning event cards. Observed values on the two product surfaces: white canvas `#ffffff`, faint blue-tinted band `#f8fbff`, a multi-step sky-blue family (`#0088d2`, `#2ab3fc`, `#009ce6`, `#00aaf5`), event-page registration gradient `#3e97d3` → `#1074cc`, bubblegum pink `#ff93c2` on offline-event tags and notices, Noto Sans at a 14px base with Microsoft JhengHei in the fallback stack, white event cards at 16px radius on `rgba(0,0,0,0.1) 0px 2px 8px`, and a near-black footer `#1a1f23` with icy `#f5faff` link text. Catalog `primary_color` is `#00aaf5`.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

- Scan homepage event cards and channel tabs (Featured Events / Learning / Art / Experience; Weekly recommend, Popular Events).
- Open an event detail page and register (`Register Now`).
- Start creating an event from the header `Create Event` CTA.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. Source §13 names fictional archetypes informed by publicly observable Accupass user segments (Taiwanese event-goers and event organizers), not individual people. Restricting Audience so those fictional archetypes are not Audience and are not primary tasks, and tying observable work only to the three primary tasks, is a derived editorial implementation inference from the verified surfaces; it is not Accupass-authored or a separately published UI specification. Use stakeholder groups only: attendees discovering and registering for events, and organizers creating events. Independently verified user outcomes are the three primary tasks above.

### Distinctive traits

The following distinctive-character readings (multi-step rather than one primary, saturation that rises toward conversion, pink as a playful counterweight, soft 16px-radius cards, mixed radius vocabulary, near-black footer with icy link text) are a derived editorial implementation inference from the verified surfaces; they are not Accupass-authored or a separately published UI specification.

- Multi-step sky-blue family `#0088d2`, `#2ab3fc`, `#009ce6`, `#00aaf5` rather than one primary. Catalog `primary_color` is `#00aaf5`.
- Registration CTA as linear-gradient 131deg `#3e97d3` → `#1074cc`
- Bubblegum pink `#ff93c2` as the secondary accent for offline-event tags and notices, with pink surface `#ffeef3`
- Noto Sans / Microsoft JhengHei at a 14px base; section H2 23px / 600; event H1 32px / 600
- Soft 16px-radius white event cards on `rgba(0,0,0,0.1) 0px 2px 8px`; cover image top corners `16px 16px 0px 0px`
- Color-tinted micro-shadows under category tags (`rgba(0,170,245,0.3)` / `rgba(255,147,194,0.3)`)
- Mixed radius vocabulary: 3px–4px utility, 8px service/notice, 16px cards, 22px / 36px / 100px pills
- Near-black footer `#1a1f23` with `#6d7278` subtitles and `#f5faff` links

### Principles

These five items, including each *UI implication*, are a derived editorial implementation inference from the verified surfaces; they are not Accupass-authored or a separately published UI specification.

1. **Discovery is the product.** The catalog, not any single event, is what Accupass sells. *UI implication:* optimize for cards-per-screen and scanning rhythm; every section ends with a “More” pill because there is always more.
2. **Saturation tracks commitment.** The blue family steps up as the user approaches registration. *UI implication:* wayfinding gets `#0088d2`, mid-funnel CTAs get `#2ab3fc` / `#009ce6`, and only the register action gets the `#3e97d3` → `#1074cc` gradient.
3. **Serve both sides of the stage.** Attendees and organizers are co-equal users. *UI implication:* “Create Event” lives permanently in the global header at the same visual weight as discovery; organizer tooling copy stays as polished as attendee copy.
4. **Cheerful, not premium.** Events are everyday joy, not luxury goods. *UI implication:* tinted glowing tag shadows, bubblegum pink accents, and emoji-friendly editorial — warmth beats restraint.
5. **Long-term steadiness over trend-chasing.** The company survived by becoming infrastructure. *UI implication:* conservative type scale, predictable card recipes, and no redesign-of-the-week — reliability is the brand.

Capture-bound application: this list is a derived editorial implementation inference from the verified surfaces; it is not Accupass-authored or a separately published UI specification.

- Use the blue family directionally — `#0088d2` for wayfinding/active states, `#2ab3fc` / `#009ce6` for mid-level CTAs, and reserve the `#3e97d3` → `#1074cc` gradient for the registration moment.
- Keep event cards white, 16px radius, on `rgba(0,0,0,0.1) 0px 2px 8px` shadows.
- Tint tag shadows with the tag’s own fill color (`rgba(0,170,245,0.3)` under a `#00aaf5` chip).
- Use pink `#ff93c2` for offline/ticketing notices.
- Keep body text at 14px Noto Sans / `#757575` and headings at 600 weight.
- Cap card cover images with `16px 16px 0px 0px`.
- Close pages with the `#1a1f23` footer and icy `#f5faff` links.
- Use outlined 100px-radius chips (`#d8dde4` hairline, `#959ba1` text) for keywords and filters.

### Avoid

The following items are a derived editorial implementation inference from the verified surfaces; they are not Accupass-authored or a separately published UI specification.

- Do not collapse the blue family into one blue.
- Do not use the register gradient on secondary actions.
- Do not add heavy display typography or weights above 700.
- Do not use pure black text for body copy — ink stops at `#212121` for titles and `#757575` for body.
- Do not put neutral grey shadows under category tags — tags glow their own color or nothing.
- Do not square off event cards — 16px is the identity radius of the catalog.
- Do not introduce a second warm accent beyond pink `#ff93c2`.
- Do not make the footer white — the dark block is the page’s structural full stop.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Blue family (YAML `tokens.colors` plus live-inspect roles):

- **Accu Blue** (`#00aaf5`): category tags, “Ask ACCUPASS” service button, “Add To Calendar” links. Catalog `primary_color` is this same hex.
- **Brand Blue** (`#0088d2`): active navigation tabs and selected channel state.
- **Header CTA Blue** (`#2ab3fc`): the “Create Event” button in the global header.
- **Pill Blue** (`#009ce6`): section-level “More” pill buttons on the homepage.
- **Gradient Start** (`#3e97d3`) and **Gradient End** (`#1074cc`): the two stops of the event-page “Register Now” CTA gradient. YAML `button-register.bg` is `#1074cc`; the rendered control is linear-gradient 131deg `#3e97d3` → `#1074cc`. Treating those as unmerged fields is a derived editorial implementation inference from the verified surfaces; it is not Accupass-authored or a separately published UI specification.
- **Organizer Link** (`#2ea3f2`): organizer name links on event detail pages. Treating this as that link’s renderable field, not Accu Blue `#00aaf5`, is a derived editorial implementation inference from the verified surfaces; it is not Accupass-authored or a separately published UI specification.

Accent:

- **Bubblegum Pink** (`#ff93c2`): “Offline Event” category tags, “How to Collect Tickets?” notice pills.
- **Pink Surface** (`#ffeef3`): tinted background for pink notice banners (8px radius).

Neutrals and surfaces:

- **Pure White** (`#ffffff`): page canvas, event cards, several button label texts.
- **Ice Surface** (`#f8fbff`): faint blue-tinted band behind content sections.
- **Ink** (`#212121`): event detail H1 titles.
- **Heading Charcoal** (`#333333`): homepage section headings.
- **Body Grey** (`#757575`): default body text.
- **Muted Grey** (`#959ba1`): keyword chips, location labels, tertiary metadata.
- **Faint Grey** (`#b5bac1`): inactive nav tabs, hashtags, lowest-emphasis labels.
- **Hairline** (`#d8dde4`): 1px outlines on keyword chips and dividers.

Footer and dark:

- **Footer Dark** (`#1a1f23`): the near-black footer block.
- **Footer Subtitle** (`#6d7278`): footer column headings (18px / 300).
- **On-Dark Ice** (`#f5faff`): footer link text. YAML `on-primary` is `#ffffff`; Ask ACCUPASS uses `#f5faff` as its label. Treating those on-color fields as unmerged is a derived editorial implementation inference from the verified surfaces; it is not Accupass-authored or a separately published UI specification.

The following unmerged-role and stepped-blue readings are a derived editorial implementation inference from the verified surfaces; they are not Accupass-authored or a separately published UI specification. Accu Blue, Brand Blue, Header CTA Blue, Pill Blue, the two gradient stops, and Organizer Link stay separate roles. Canvas `#ffffff` and on-primary `#ffffff` share a hex and stay separate fields. Source token note: the blue family is intentionally multi-step.

### Spacing

YAML `spacing` is unitless: xs 4, sm 8, md 12, base 16, xl 24, xxl 48. Treating those YAML numbers as unitless token numbers rather than a claimed px scale, while keeping the §5 observed px scale as a separate observation, is a derived editorial implementation inference from the verified surfaces; it is not Accupass-authored or a separately published UI specification.

Observed scale in the body: 4px, 8px, 12px, 16px, 24px, 48px. Base unit stated in the source: 4px. Tag padding is `4px 16px`; chips `8px 16px`; the register CTA uses an even 16px; the “More” pill stretches to `12px 48px`.

### Shape

- Tight (3px–4px): header CTA 3px, category tags 4px, register CTA 4px
- Medium (8px): service buttons, notice banners
- Large (16px): event cards, notice pills
- Pill (22px / 36px / 100px): “More” buttons 22px, carousel arrows 36px, keyword chips 100px

YAML `rounded` is unitless xs 3, sm 4, md 8, lg 16, pill 22, full 100. The following local-geometry reading is a derived editorial implementation inference from the verified surfaces; it is not Accupass-authored or a separately published UI specification. 3px–4px utility, 8px service, 16px cards, and 22px / 36px / 100px pills are local geometry, not a universal radius scale.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | Page canvas, text, tabs, outlined chips |
| Tint (Level 1) | `#f8fbff` / `#ffeef3` background shift | Section bands, notice banners |
| Card (Level 2) | YAML `rgba(0,0,0,0.1) 0px 2px 8px 0px`; body `rgba(0,0,0,0.1) 0px 2px 8px` | Event cards. Both strings are kept; they are not averaged. |
| Glow (accent) | YAML `rgba(0,170,245,0.3) 0px 2px 4px 0px`; body `rgba(0,170,245,0.3) 0px 2px 4px` (blue). Pink tags: `rgba(255,147,194,0.3) 0px 2px 4px` | Category tags glow their own fill |

The following shadow-philosophy reading, and treating YAML versus body shadow strings as unmerged observations rather than averaging them, is a derived editorial implementation inference from the verified surfaces; it is not Accupass-authored or a separately published UI specification. The source reads elevation as light and literal — one soft neutral shadow level for cards, plus the tinted micro-shadow under category tags. Navigation and headers stay shadowless; the dark footer provides closure through contrast rather than depth.

### Motion

Source-stated duration roles:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Tab switches, chip hover, button press feedback |
| `motion-standard` | 240ms | Card hover lift, carousel slide steps, dropdown reveal |
| `motion-slow` | 400ms | Banner carousel auto-advance transitions |

Source-stated easing token names and uses (uncomputed; cubic-bezier curves omitted):

| Token | Curve | Use |
|---|---|---|
| `ease-standard` | omitted (unattributed cubic-bezier; source-stated name and use only) | Default for hovers, tabs, reveals |
| `ease-enter` | omitted (unattributed cubic-bezier; source-stated name and use only) | Cards and sheets arriving |
| `ease-exit` | omitted (unattributed cubic-bezier; one matches the legacy spec template) | Dismissals |

The following motion-rule readings (carousel-first signature, no bounce or spring, playful energy delegated to color) are a derived editorial implementation inference from the verified surfaces; they are not Accupass-authored or a separately published UI specification. Motion at Accupass is described as carousel-first — the hero banner and card rows slide horizontally. Card hover adds a subtle shadow deepen/lift at `motion-standard`; tags and chips respond at `motion-fast` with opacity shifts. No bounce or spring. Under `prefers-reduced-motion: reduce`, carousels stop auto-advancing and become manually navigable, and hover lifts collapse to instant state changes.

Exact cubic-bezier curves are unattributed — `ease-exit` matches the legacy spec template — and remain omitted rather than promoted. Do not promote an easing curve, animation name, transition property, or a duration beyond the tables above until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. Any exact animation curve remains a local extension until that per-component computed observation exists.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The following evidence-class application readings are a derived editorial implementation inference from the verified surfaces; they are not Accupass-authored or a separately published UI specification.

| Evidence class | Resolution |
|---|---|
| Live computed surface-use | Primary family is `Noto Sans`, served as a Next.js optimized webfont on the captured homepage and event-detail surfaces. |
| Fallback stack | `Apple Casual`, `Corbel`, `Microsoft JhengHei` — the JhengHei fallback carries Traditional Chinese rendering. YAML `tokens.typography.family` records sans `Noto Sans` and fallback `Microsoft JhengHei`. |

### Family

- **Current visible UI family:** `Noto Sans`
- **Recorded fallbacks:** `Apple Casual`, `Corbel`, `Microsoft JhengHei`

The following font-use boundary is a derived editorial implementation inference from the verified surfaces; it is not Accupass-authored or a separately published UI specification. Do not replace unavailable or unobserved brand type with Noto Sans, and do not present Noto Sans as an Accupass-owned face. It is canonical here only as the computed visible family on the two captured product surfaces.

### Type roles

Verified line-height values from YAML are the unitless ratios `1.50` and `1.33`. The legacy body table also recorded computed line-height at some captured sizes.

The following ratio-versus-size-local reading is a derived editorial implementation inference from the verified surfaces; it is not Accupass-authored or a separately published UI specification. The unitless ratios scale with font size and are not fixed px. Those px figures are size-local observations, not replacements for the ratios. Body Large, Nav Tab, and Pill Button record YAML/body ratio `1.50` without a size-local px line-height; none is invented.

| Role | Font | Size | Weight | Line height | Size-local observation | Color | Provenance |
|---|---|---:|---:|---:|---|---|---|
| Event Title (H1) | Noto Sans | 32px | 600 | 1.50 | 48px | `#212121` | Event detail page headline |
| Section Heading (H2) | Noto Sans | 23px | 600 | 1.50 | 34.5px | `#333333` | “Weekly recommend”, “Popular Events”, “Event News” |
| Footer Subtitle | Noto Sans | 18px | 300 | 1.33 | 24px | `#6d7278` | Footer column headers — light weight |
| Footer Link | Noto Sans | 14px | 400 | omitted (no YAML ratio) | (none in source) | `#f5faff` | Footer links. Source §9-only: `#f5faff` / 14px |
| Body Large | Noto Sans | 16px | 400 | 1.50 | (none in source) | `#757575` | Event meta rows, calendar/location links |
| Body / UI | Noto Sans | 14px | 400 | 1.50 | 21px | `#757575` | Default body, buttons, tags, nav |
| Nav Tab | Noto Sans | 14px | 600 | 1.50 | (none in source) | `#0088d2` active / `#b5bac1` inactive | Channel tabs |
| Pill Button | Noto Sans | 14px | 700 | 1.50 | (none in source) | `#ffffff` | “More” pill |

The following type-scale readings (density over drama, 600 as the usual ceiling, light footer counterpoint, CJK-safe stack) are a derived editorial implementation inference from the verified surfaces; they are not Accupass-authored or a separately published UI specification. The 14px base and 1.50 line-height are described as tuned for scanning card grids; there is no display type. Headings stop at semibold 600; only pill-button labels push to 700. Footer subtitles run at weight 300. Footer Link `#f5faff` / 14px is the §9-only footer-link tuple; it is not Body / UI 14px / `#757575` and not Footer Subtitle 18px / `#6d7278`. Weight choices are described as rendering predictably in Microsoft JhengHei so Chinese and English can mix in the same card.

### Assets

Treating catalog logo metadata as a Google favicon lookup, and not promoting it as a portable asset, is a derived editorial implementation inference from the verified surfaces; it is not Accupass-authored or a separately published UI specification.

The following imagery-boundary reading is a derived editorial implementation inference from the verified surfaces; it is not Accupass-authored or a separately published UI specification. Event cover images and banner carousel images are first-party catalog content on the captured surfaces. Source Image Behavior: images never carry their own shadows; the card shadow does the work. Banner carousel images run full-bleed with translucent `rgba(0, 0, 0, 0.1)` arrow circles overlaid.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source state contract, preserved here while the catalog graph is not adopted:

| State | Treatment |
|---|---|
| **Empty (no search results)** | White canvas, single `#757575` line stating no events match, with suggested keyword chips (`#d8dde4` outline pills) to broaden the search. No illustration clutter. |
| **Empty (no saved events)** | Muted `#959ba1` one-liner plus a `#009ce6` More-style pill routing back to Popular Events. |
| **Loading (card grids)** | Skeleton cards at final dimensions — 16px radius blocks with the image area and two text bars, soft pulse on `#f8fbff`. |
| **Loading (event page)** | Title and meta-row skeletons; the register module renders last so the gradient CTA never flashes unstyled. |
| **Error (registration failed)** | Inline message above the CTA in plain language stating the cause (sold out, session expired) and the next step. The gradient button stays visible; the error never replaces it. |
| **Error (page load)** | Friendly full-page message with a retry action and a link back to the homepage catalog. |
| **Success (registration complete)** | Confirmation view with ticket/QR access front and center and “Add To Calendar” (`#00aaf5`) as the immediate next action. |
| **Success (event created)** | Organizer redirected to the event dashboard with a quiet inline confirmation — the published page itself is the reward. |
| **Skeleton** | `#f8fbff`-tinted blocks at final card dimensions, 16px radius, gentle pulse — never spinner-only screens in the catalog. |
| **Disabled (sold out)** | Register CTA desaturates to a flat grey with explicit “已售完 / Sold Out” label; category tags keep their color so the event remains identifiable. No grey hex is given; none is invented. |

Recording page-level empty/loading/error/success/skeleton/disabled treatments as this source table, and not filling missing per-control visuals with a generic ticketing pattern, is a derived editorial implementation inference from the verified surfaces; it is not Accupass-authored or a separately published UI specification.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. A generic `Focus` capture is not `focus-visible` treatment evidence; the source does not name `focus-visible`, so those visual treatments remain omitted and the `focus-visible` row does not carry a color. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control’s product role, not its primitive kind. Where exact label, action, request, or outcome is unresolved, those three applicability fields are omitted at this boundary rather than closed. This is not a complete state-coverage claim.

Event Card, Keyword Chip, Inline Action Link, and Organizer Link keep Kind: interactive from source §8 / §4 role evidence; loading, error, and success maps are omitted where exact mapping is unresolved. Category Tag (Blue) and Category Tag (Pink) are Kind: non-interactive (source §8 display-only metadata; tap targets route through the parent card). Notice Pill and Notice Banner still omit kind and a state-applicability map. Carousel Arrow has no YAML `type`; it is still named as previous/next controls.

### Create Event (Header CTA)

- Role: global header organizer CTA — present on every page
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#2ab3fc`
- Text: `#ffffff`
- Radius: 3px
- Padding: 6px 11px
- Height: 31px
- Font: 14px / 400 Noto Sans
- Observed: default only
- Use: Header “Create Event” — organizer entry point

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as the header organizer CTA |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | An organizer entry control can be unavailable; visual treatment omitted |
| loading | not-applicable | This header control is the organizer entry CTA; waiting lives on the create-event flow, not as a loading state of this button |
| error | not-applicable | Failure is not reported as an error state of this header control |
| success | not-applicable | Event-created confirmation is a dashboard view, not a success state of this button |

### Register Now (Event CTA)

- Role: conversion CTA on event detail pages
- Kind: interactive
- Type: button
- Anatomy: label
- Background: YAML `bg` `#1074cc`; rendered linear-gradient 131deg `#3e97d3` → `#1074cc`
- Text: `#ffffff`
- Radius: 4px
- Padding: 16px
- Height: 50px
- Font: 14px / 600 Noto Sans
- Observed: default; sold-out disabled described in the capture record; registration error is inline above this control
- Use: Event-page “Register Now” — 50px tall, full-width of its column

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as the event-page conversion CTA |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Sold-out treatment: desaturates to a flat grey with “已售完 / Sold Out”; no grey hex is given |
| loading | applicable | Registration can be in-flight on this control; visual treatment omitted. Page-load skeleton for the module is in the capture record, not a spinner on this button |
| error | applicable | Registration failure is an inline message above this CTA; the gradient button stays visible |
| success | not-applicable | Registration-complete confirmation is a separate view with ticket/QR, not a success paint on this button |

### More (Section Pill)

- Role: “More” link at the end of homepage sections
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#009ce6`
- Text: `#ffffff`
- Radius: 22px
- Padding: 12px 48px
- Height: 38px
- Font: 14px / 700 Noto Sans
- Observed: default only
- Use: Section “More” pill on homepage

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as the homepage section pill |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A section continuation control can be unavailable; visual treatment omitted |
| loading | not-applicable | This pill continues a catalog section; it does not wait on a request of its own |
| error | not-applicable | Section continuation is not a request or validation failure on this pill |
| success | not-applicable | Opening more events is not an action-outcome confirmation on this pill |

### Ask ACCUPASS (Service)

- Role: footer customer-service button
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#00aaf5`
- Text: `#f5faff`
- Radius: 8px
- Padding: 8px
- Height: 36px
- Font: 14px / 400 Noto Sans
- Observed: default only
- Use: Footer “Ask ACCUPASS” support button
- Field note: The following unmerged-field reading is a derived editorial implementation inference from the verified surfaces; it is not Accupass-authored or a separately published UI specification. `#f5faff` is this control’s renderable foreground, not on-primary `#ffffff`.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as the footer service button |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A support control can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source names this control as the footer “Ask ACCUPASS” support button with default styling only; exact destination, request, and outcome are unresolved, so those three fields stay omitted at this boundary rather than closed.

### Carousel Arrow

- Role: hero/banner carousel previous/next controls — translucent circles over imagery
- Kind: interactive
- Anatomy: control
- Background: `rgba(0, 0, 0, 0.1)`
- Text: `#ffffff`
- Radius: 36px
- Padding: 8px
- Touch: 40px circles
- Observed: default only
- No YAML `type` is recorded; none is invented.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as banner previous/next controls |
| hover | applicable | Pointer-web control; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A carousel control can be unavailable at the end of a row; visual treatment omitted |
| loading | not-applicable | This control pages a carousel; it does not enter a loading state of its own |
| error | not-applicable | Paging is not a request or validation failure on the arrow |
| success | not-applicable | Advancing a slide is not an action-outcome confirmation on the arrow |

### Channel Tab

- Role: homepage channel switcher and area tabs
- Kind: interactive
- Type: tab
- Anatomy: label
- Active: text `#0088d2`
- Inactive: text `#b5bac1`
- Font: 14px / 600 Noto Sans
- YAML `nav-tab` also records `disabled: "#b5bac1 label"`. The body names `#b5bac1` as Inactive. Treating those as unmerged labels, and not using `#b5bac1` as a disabled visual treatment, is a derived editorial implementation inference from the verified surfaces; it is not Accupass-authored or a separately published UI specification.
- Use: “Featured Events” / “Learning” / “Art” / “Experience”; area tabs North / Central / South / Singapore
- Observed: active and inactive default appearances

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Active and inactive appearances captured on homepage tabs |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A channel or area tab can be unavailable; visual treatment omitted |
| loading | not-applicable | A channel tab selects a grouping; the tab itself does not enter a loading state |
| error | not-applicable | Tab meaning is selected versus resting, not a request or validation failure on the tab |
| success | not-applicable | Tab meaning is selection, not action-outcome confirmation |

Additional observed named states: active text `#0088d2`; inactive text `#b5bac1`. Those appearances are captured variants, not an observed click transition.

### Category Tag (Blue)

- Role: event category chips (“Learning”, “Design”)
- Type: badge
- Anatomy: label
- Background: `#00aaf5`
- Text: `#ffffff`
- Radius: 4px
- Padding: 4px 16px
- Font: 14px / 400 Noto Sans
- Shadow: YAML `rgba(0,170,245,0.3) 0px 2px 4px`; body also `rgba(0,170,245,0.3) 0px 2px 4px`. YAML token includes trailing `0px` on `tokens.shadow.tag-tinted`.
- Kind: non-interactive
- Display-only metadata at 29px; tap targets route through the parent card (source §8)
- State-applicability map omitted (display-only metadata; not a control)

### Category Tag (Pink)

- Role: event type chips (“Offline Event”)
- Type: badge
- Anatomy: label
- Background: `#ff93c2`
- Text: `#ffffff`
- Radius: 4px
- Padding: 4px 16px
- Font: 14px / 400 Noto Sans
- Shadow: `rgba(255,147,194,0.3) 0px 2px 4px`
- Kind: non-interactive
- Display-only metadata at 29px; tap targets route through the parent card (source §8)
- State-applicability map omitted (display-only metadata; not a control)

### Keyword Chip (Outlined)

- Role: event keyword pills on detail pages (設計系統, UIUX, FIGMA)
- Type: badge
- Anatomy: label
- Background: transparent
- Text: `#959ba1`
- Border: 1px solid `#d8dde4`
- Radius: 100px
- Padding: 8px 16px
- Font: 14px / 400 Noto Sans
- Height: 39px with `8px 16px` padding
- Kind: interactive
- Source §8 records keyword chips as comfortably tappable at 39px with `8px 16px` padding.
- Loading, error, and success applicability are omitted. Exact request/outcome mapping for the event-page chip is unresolved.
- Suggested chips in the empty-search treatment reuse this outlined visual in the capture record.

### Notice Pill (Pink)

- Role: “How to Collect Tickets?” helper pill inside pink notice banners
- Anatomy: label
- Background: `#ff93c2`
- Text: `#ffffff`
- Radius: 16px
- Padding: 4px 16px
- Font: 14px / 300 Noto Sans
- No YAML `type` is recorded; none is invented.
- Kind and a state-applicability map are omitted (no interactive-kind confirmation).

### Event Card

- Role: homepage grids and carousels — the platform’s core unit
- Type: card
- Anatomy: surface
- Background: `#ffffff`
- Radius: 16px
- Shadow: YAML `rgba(0,0,0,0.1) 0px 2px 8px 0px`; body `rgba(0,0,0,0.1) 0px 2px 8px`
- Cover image top corners: `16px 16px 0px 0px`
- Recipe (source §5 plus §9 unique fields): cover image, date line at 14px Noto Sans in `#00aaf5`, title in `#333333` 600, location/price metadata in `#959ba1`
- Kind: interactive
- Source §8 records the parent card as the tap target for category-tag metadata.
- Loading, error, and success applicability are omitted. Exact destination/request/outcome mapping for opening an event from the card is unresolved.

### Notice Banner

- Role: pink-tinted ticket-collection notice on event pages
- Anatomy: surface
- Background: `#ffeef3`
- Radius: 8px
- Kind and a state-applicability map are omitted (no interactive-kind confirmation).

### Inline Action Link

- Role: “Add To Calendar” and other inline actions on event pages
- Text: `#00aaf5`
- Font: 16px / 400 Noto Sans
- No YAML `type` is recorded; none is invented.
- Kind: interactive
- Source §4 records this control’s role/use as “Add To Calendar” and other inline actions on event pages.
- Loading, error, and success applicability are omitted. Exact request/outcome mapping is unresolved.

### Organizer Link

- Role: organizer profile names
- Text: `#2ea3f2`
- Font: 14px / 400 Noto Sans
- No YAML `type` is recorded; none is invented.
- Kind: interactive
- Source §4 records this control’s role/use as organizer profile names.
- Loading, error, and success applicability are omitted. Exact destination/request/outcome mapping is unresolved.
- Field note: The following unmerged-field reading is a derived editorial implementation inference from the verified surfaces; it is not Accupass-authored or a separately published UI specification. `#2ea3f2` is this field, not Accu Blue.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The following layout-application readings (marketplace density, cards carrying structure, footer as a hard stop) are a derived editorial implementation inference from the verified surfaces; they are not Accupass-authored or a separately published UI specification. Accupass is described as optimizing for how many events fit on screen before scrolling. Sections are separated by modest vertical gaps and the faint `#f8fbff` wash. Because every unit is a shadowed 16px-radius card, the layout is described as staying legible at high density. The page always terminates in the near-black `#1a1f23` footer block.

Homepage is a vertical stack of horizontally scrolling card carousels and card grids, each introduced by a 23px H2 and closed by a centered “More” pill. Event cards hold a fixed recipe: cover image (top corners 16px), date line, title, location/price metadata. Event detail pages run a two-column desktop layout: content left, sticky registration/organizer module right. Area and channel tabs sit directly under the global header.

Source-stated breakpoints:

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <640px | Single-column card lists, sticky bottom register bar, tabs scroll horizontally |
| Tablet | 640-1024px | 2-3 column card grids, condensed header |
| Desktop | 1024px+ | Full card carousels, two-column event detail with sticky right rail |

Treating those breakpoint rows as source-stated layout notes from the capture, not a separately published Accupass responsive specification, is a derived editorial implementation inference from the verified surfaces; it is not Accupass-authored or a separately published UI specification.

Touch targets recorded in the source: keyword chips at 39px height with `8px 16px` padding; Register CTA at 50px height; carousel arrows at 40px circles; category tags are display-only metadata at 29px.

Collapsing strategy recorded in the source: card carousels become vertical lists or horizontal swipe rows on mobile; the event detail right rail (registration/organizer) collapses into a fixed bottom action bar; channel and area tabs remain at the top as horizontally scrollable rows; the dense footer columns stack vertically while keeping the `#1a1f23` block treatment.

The following layout-application readings (cover image as visual anchor, images never carrying their own shadows because the card shadow does the work, and the recorded control sizes as source measurements rather than a universal layout token scale) are a derived editorial implementation inference from the verified surfaces; they are not Accupass-authored or a separately published UI specification.

Event cover images are the card’s visual anchor — fixed aspect ratio, top corners rounded to match the 16px card. Banner carousel images run full-bleed with translucent `rgba(0, 0, 0, 0.1)` arrow circles overlaid. Images never carry their own shadows; the card shadow does the work.

The 31px Create Event, 50px Register, 38px More, 36px Ask ACCUPASS, 40px carousel arrow, 39px keyword chip, and 29px category tag measurements are the source’s recorded control sizes, including the mobile/tablet collapsing notes above.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Quoted first-party samples (labels and blog lines) stay as source language. The following voice-register, audience-split, and citation-character readings are a derived editorial implementation inference from the verified surfaces; they are not Accupass-authored or a separately published UI specification. The source reads Accupass as upbeat, practical, and exploratory, and treats the blog tagline as discovery-framed. Platform UI copy is described as terse and functional; editorial surfaces loosen with emoji, exclamation marks, and listicle energy. Attendee-facing copy is described as playful and seasonal; organizer-facing copy (Organizer Academy) as pragmatic and conversion-minded. Those samples remain quoted first-party language and catalog reconstruction; they are not extra Observed live-homepage strings.

| Context | Tone |
|---|---|
| Platform UI / buttons | Terse, functional imperatives. “Create Event”, “Register Now”, “Add To Calendar”. |
| Section headings | Plain catalog labels. “Weekly recommend”, “Popular Events”, “Event News”. |
| Blog (attendee) | Playful listicle energy — seasonal hooks, 攻略 (strategy-guide) framing, emoji allowed. |
| Blog (organizer) | Practical growth advice — “必學” (must-learn), conversion and tooling tips. |
| Notices / help | Friendly and direct: “How to Collect Tickets?” as a pink pill, not buried legalese. |

First-party samples:

- 「與你一同『探索』生活的更多可能」 — blog tagline.
- "GPT-5.5 攻略：活動主辦方必學！用 AI 快速打造高轉換活動頁" — organizer-facing blog title.
- "2026 兒童節省錢攻略｜全台 10 處免費親子景點大集合！" — attendee-facing blog title.
- "Weekly recommend" / "Popular Events" — homepage section headings.

The following forbidden-register reading is a derived editorial implementation inference from the verified surfaces; it is not Accupass-authored or a separately published UI specification. Forbidden register in the source: corporate solemnity, luxury-brand minimal-speak, FOMO-style countdown pressure on editorial surfaces, and untranslated jargon in attendee copy.

Not promoting synthetic voice samples beyond the quoted first-party lines is a derived editorial implementation inference from the verified surfaces; it is not Accupass-authored or a separately published UI specification. No synthetic voice samples are promoted.

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

These decisions are unnamed values, not permissions to invent:

- exact cubic-bezier easing curves (omitted as unattributed; `ease-exit` matches the legacy spec template)
- `focus-visible` visual treatments; pressed visual treatments; hover visual treatments beyond the source-stated card hover lift duration role (no exact hover shadow)
- Ask ACCUPASS loading, error, and success applicability (exact destination/request/outcome unresolved)
- Event Card, Keyword Chip, Inline Action Link, and Organizer Link loading, error, and success applicability (kind restored from source; exact L/E/S mapping unresolved)
- state-applicability map for Category Tag (Blue) and Category Tag (Pink) (Kind: non-interactive; source §8 display-only metadata)
- interactive kind and state-applicability map for Notice Pill and Notice Banner
- YAML `type` for Carousel Arrow, Notice Pill, Inline Action Link, and Organizer Link
- a grey hex for the sold-out Register treatment
- easing curve, animation name, and transition-property promotion beyond the duration table — promote only after per-component computed capture of all five kinds (transition properties, animation name, duration, easing, reduced-motion behavior); official documentation of a single curve or duration is not that gate
