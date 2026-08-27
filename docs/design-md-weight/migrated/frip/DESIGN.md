# Frip Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

The reviewed material describes Frip (프립) as a Korean marketplace where people book experiences, classes, and social outings that individuals and small businesses host; that description is the material's own and is recorded here as such. The positioning line the product carries on its own homepage title tag is 대한민국 1등 취미여가 탐색 플랫폼, which the material glosses as Korea's No.1 hobby-and-leisure discovery platform — a category-leader claim the product makes about itself, not a finding of this record.

This contract covers one reading, dated 2026-07-02: a live computed-style inspection of Frip's own web surfaces — the homepage at `https://www.frip.co.kr/` and four product-detail surfaces (`/165667`, `/121737`, `/191730`, `/188510`). Every color, type, geometry, elevation, and component value below stays attached to that web reading. Frip's official Medium publication at `medium.com/frientrip` is a second first-party surface read the same day, and it supplies brand language only; no interface value here comes from it.

Two further Frip surfaces are named by the read surfaces themselves and carry no measured value in this contract: the app that the 앱 다운로드 bar cross-sells, and the top-navigation destinations 피드, 메시지, 찜, and 마이. Nothing measured on the homepage or a product-detail page describes them.

The following characterization of the interface is a derived editorial implementation inference from the verified surfaces; it is not Frip-authored or a separately published UI specification. The captured layer reads as a bright, content-dense commerce feed rather than a minimalist brand site: a pure white (`#ffffff`) canvas packed with square-cornered thumbnail cards, corner tags, and price callouts, organized into scannable horizontal shelves; the mood is energetic and consumer-friendly, closer to a lifestyle shopping app than a calm fintech dashboard, and the page wants you to browse dozens of experiences at a glance; the electric violet is the one thing the eye is trained to treat as "the next step"; and the type system reads as unmistakably Korean-modern.

The brand account below is likewise a derived editorial interpretation of first-party material; it is not Frip-authored or a separately published brand statement. The parts of it that are quotations are marked as such, and the reviewed material states that broader founding specifics beyond these first-party surfaces are general public knowledge rather than a directly quoted verified Frip statement. In that account Frip began as 프렌트립 (Frientrip) — a contraction of "friends" and "trip" — a Korean startup built to solve a distinctly modern loneliness problem: it was hard to find good hobbies, classes, and outings, and harder still to do them with like-minded people. Frip reframed leisure as a discoverable, bookable marketplace of "experiences" (프립) hosted by individuals and small businesses, positioning itself with the line above. The mission phrasing quoted from Frip's own Medium publication is to **"inspire people to experience the world."** The account then reads that ethos into the product — members are 크루 (crew), trusted sellers earn a 슈퍼호스트 badge, and the feed is curated into warm, human shelves rather than a cold catalog — and closes on what it says Frip refuses, the intimidating chrome of legacy booking sites (no heavy shadow stacks, no institutional blue) and predatory sale-pressure aesthetics, against what it says Frip embraces, a flat, fast, image-forward commerce feed, a single trustworthy violet action color, promo reds kept in their lane, and copy that treats browsing as the start of an adventure. Those readings are the editorial layer; the violet, the reds, the flatness, and the copy are recorded values and published strings, and they stand on their own below.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=4 lang=en -->
### Primary tasks

- Browse experiences on the homepage feed, which stacks horizontal shelves of thumbnail cards — 주간 인기 BEST, 신규 프립, 기획전.
- Book an experience from a product-detail page through the full-width 참여하기 button pinned at the bottom of the booking panel.
- Set a quantity or option on that booking panel through the selector pill.
- Move between the top-navigation destinations 카테고리, 피드, 메시지, 찜, and 마이.
<!-- design-md:claim-end -->

### Audience

The reviewed material presents three archetypes and states in its own words that they are fictional archetypes rather than individual people. No name, age, city, commute, trip type, browsing habit, or expectation from them is carried forward, and no demographic or behavioral finding is asserted here or in the sidecar.

What remains is what the read surfaces establish: the product is Korean-language, its feed is organized into shelves of thumbnail cards, its product-detail pages end in a single booking action, and it carries the 슈퍼호스트 host-trust badge and the 프립단독 corner tag.

### Distinctive traits

- `#7a29fa` is recorded against the 참여하기 booking CTA on every product page and against the 슈퍼호스트 badge, and against the active item in the top navigation.
- A promo-red family is recorded against savings and urgency only: `#f4373d` on the 프립단독 corner tag, `#ff3f33` on discount percentages, `#e21d47` on point and reward labels.
- Text steps down `#000000` → `#333333` → `#777777` → `#999999` → `#aaaaaa`.
- One family carries display, body, UI, and button labels alike: SUIT.
- Depth is recorded as `box-shadow: none` across the nav, hero carousel, and section headings; separation is recorded as `#e6e6e6` hairlines and `#fafafa` / `#f4f4f4` / `#fff4f7` tints, with an `rgba(0,0,0,0.4)` scrim on the carousel index chip.
- 5px is the recorded workhorse radius (78 occurrences in the recorded scan), with 10px on the booking CTA and 20px on the selector pill.
- `#333333` carries both product-detail titles and the app-download bar background.

### Principles

These 5 items are a derived editorial implementation inference from the verified surfaces; they are not Frip-authored or a separately published UI specification. The reviewed material names three of them by their own phrasing — "one action, one color", "savings stays in its lane", and flat-and-fast as a rejection of legacy booking chrome — as editorial readings connecting Frip's observed design to its positioning rather than directly sourced Frip statements. The same qualification covers all five.

1. **Experiences, not transactions.** Frip sells the feeling of trying something new with others. *UI implication:* lead with imagery and warm curation (고감도 경험), keep the transactional CTA to a single clear violet button.
2. **One action, one color.** Violet (`#7a29fa`) means "join this." *UI implication:* reserve the saturated violet for the booking CTA and Superhost trust tag so the next step is never ambiguous.
3. **Savings stays in its lane.** The red family signals discount/exclusive/points, never navigation. *UI implication:* `#f4373d`/`#ff3f33`/`#e21d47` only appear on tags, percentages, and reward labels.
4. **Flat and fast.** A browse-many marketplace must feel quick. *UI implication:* no shadows; separate with `#e6e6e6` hairlines and tints; pack cards densely into scannable shelves.
5. **Belonging over customer-hood.** Members are 크루, hosts are 슈퍼호스트. *UI implication:* trust and community signals (Superhost badge, crew language) get first-class visual treatment.

### Capture-bound application

These 8 items are a derived editorial implementation inference from the verified surfaces; they are not Frip-authored or a separately published UI specification.

- Reserve violet (`#7a29fa`) for the primary booking action and the Superhost trust tag — keep it the single "action" color.
- Use the promo-red family only for savings/urgency: `#f4373d` exclusive tag, `#ff3f33` discount %, `#e21d47` points.
- Set everything in SUIT — weight 700 for headings/numbers, 400 for body and CTA labels.
- Use near-black `#000000` for headings and warm charcoal `#333333` for product titles.
- Separate sections with `#e6e6e6` hairlines and `#fafafa`/`#f4f4f4` tints, not shadows.
- Keep cards and badges at a 5px radius; the primary CTA at 10px.
- Pack cards densely into horizontal shelves — this is a browse-many marketplace.
- Keep the full-width 56px booking CTA anchored on product pages.

### Avoid

These 8 boundary rules are read off the captured surfaces and are a derived editorial implementation inference from them; they are not Frip-authored or a separately published UI specification.

- Spread violet across decorative elements — it dilutes the single booking-action signal.
- Use the promo reds for navigation, links, or non-sale UI — they mean savings/urgency.
- Introduce drop shadows for elevation — this is a flat, hairline-and-tint system.
- Set a light weight on numeric/discount emphasis — money is always weight 700.
- Use large pill radii on cards — cards stay at the 5px workhorse corner.
- Mix in a second display typeface — SUIT owns the whole surface.
- Grey the active nav item — the active state is violet `#7a29fa` text.
- Use pure `#000000` for every text tier — step down through `#333333` → `#777777` → `#999999`.

Two further boundaries hold outside that editorial layer, on evidence grounds: do not substitute a different family for SUIT on the strength of this reading, and do not read a value measured on the homepage or a product-detail page as a value for the Frip app or for a navigation destination this reading did not visit.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

The hex values and their role names are recorded. The use description beside each one is the reviewed material's own role statement rather than a separate observation.

**Primary and accent**

- **Frip Violet** (`#7a29fa`): primary action color. Fills the 참여하기 booking CTA on every product page and the 슈퍼호스트 Superhost badge, which the reviewed material calls the system's single "do this / trust this" color.
- **Exclusive Red** (`#f4373d`): the 프립단독 corner-tag background. The reviewed material reads it as flagging first-party inventory that cannot be had elsewhere; the recorded part is the value and the tag it fills.
- **Sale Red** (`#ff3f33`): discount-percentage text (for example "48%", "89%") at 24px/700 on the hero and 14px/700 on cards. Savings emphasis only.
- **Point Red** (`#e21d47`): reward/point labels such as 신규프립 에너지x2 at 10px/500 — a deeper magenta-red for loyalty callouts.

**Ink and text hierarchy**

- **Ink Black** (`#000000`): primary heading and dominant body text — the most frequent foreground color on the page.
- **Charcoal** (`#333333`): product-detail titles, secondary copy, and the app-download bar background.
- **Near-Black** (`#111111`): occasional maximum-contrast dark surface / overlay panel.
- **Body Grey** (`#777777`): secondary descriptions and supporting copy.
- **Muted Grey** (`#999999`): tertiary text, metadata, timestamps.
- **Faint Grey** (`#aaaaaa`): lowest-emphasis labels, placeholders, disabled captions.

**Surfaces and borders**

- **Pure White** (`#ffffff`): page background, card surfaces, text on violet/red/dark.
- **Surface Grey** (`#fafafa`): tinted section/card background for gentle segmentation.
- **Surface Alt** (`#f4f4f4`): a second neutral grey for alternating blocks and inset panels.
- **Pink Tint** (`#fff4f7`): soft pink promo band behind sale/curation shelves.
- **Disabled Grey** (`#eeeeee`): background of sold-out / disabled buttons (신청마감).
- **Hairline** (`#e6e6e6`): thin card outlines and dividers — the primary separation device in this near-flat system.
- **Border Grey** (`#dddddd`): 1px outline on selector/quantity pills and input chrome.

### Evidence-domain boundary

Three evidence domains meet in this contract and are kept apart.

The 2026-07-02 live computed-style inspection of `https://www.frip.co.kr/` and its four product-detail surfaces is where every color, type, geometry, elevation, and component value here comes from. Those values stay attached to that web reading.

Frip's official Medium publication is a separate first-party domain. It supplies the brand ethos line and the mission phrasing and carries no color, type, geometry, or component value here.

The brand account, the design principles, the typography readings, the whitespace philosophy, the responsive account, the state contract, and the motion step names are the reviewed material's own prose. Where a passage carries no source marker, that is stated at the point of use rather than repaired.

Frip-published product language — the positioning line, the CTA and badge labels, the shelf headings, the member and host terms, and the product name itself — is published copy, recorded as copy. No value in this contract describes a booking policy, a host vetting rule, a refund term, or a price, and none may be read as evidence about one.

### Spacing

Base unit as recorded: approximately 4px. Scale as recorded: 4px, 6px, 10px, 16px, 20px, 32px.

Recorded placements: badge padding lands at 4px 6px; the selector pill at 7px 15px; the primary CTA uses a symmetric 16px pad. The reviewed material reads that combination as dense, tap-friendly commerce spacing; the recorded parts are the three padding values.

### Shape

Recorded radius scale:

- Micro: 3px — fine inner elements
- Small: 5px — cards, badges, corner tags; the workhorse, 78 occurrences in the recorded scan
- Medium: 10px — primary booking CTA
- Large: 12px — larger containers / feature cards
- Pill: 20px — quantity/option selector pills
- Full: 9999px / 50% — avatars, dots, circular controls

The app-download bar is recorded at `0px`.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | Page background, nav, hero carousel, section headings, most surfaces |
| Hairline (Level 1) | `1px solid #e6e6e6` border | Card outlines, dividers |
| Tint (Level 2) | `#fafafa` / `#f4f4f4` / `#fff4f7` background shift | Section / shelf separation without elevation |
| Overlay (Level 3) | `rgba(0,0,0,0.4)` scrim | Carousel index chips, image overlays |

The recorded observation behind Level 0 is `box-shadow: none` across the nav, hero carousel, and section headers. The token record states the same value under a single `shadow.none` key.

The reading built on those values — that Frip is a near-shadowless system, that depth and grouping are communicated through hairlines, tints, and the imagery inside cards rather than elevation, that Frip reaches for the translucent black scrim when it needs to lift something above content and for color when it needs emphasis rather than a drop shadow, and that this keeps the commerce feed feeling fast, flat, and mobile-native — is a derived editorial implementation inference from the verified surfaces; it is not Frip-authored or a separately published UI specification. The recorded parts are `box-shadow: none` on those three elements, the `1px solid #e6e6e6` border, the three tint values, and the `rgba(0,0,0,0.4)` scrim.

### Motion

Durations as recorded:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Card hover, tag press, focus |
| `motion-standard` | 200ms | Shelf scroll snap, sheet, dropdown, card reveal |
| `motion-slow` | 320ms | Hero carousel crossfade, page-level transitions |

Easing roles as recorded:

| Token | Use |
|---|---|
| `ease-enter` | Arriving — cards, sheets, panels |
| `ease-exit` | Dismissals |
| `ease-standard` | Two-way transitions |

Motion rules as recorded: motion is bright but functional, consistent with a fast commerce feed; the hero carousel crossfades at `motion-slow`; card shelves snap-scroll at `motion-standard` / `ease-enter`; the booking CTA and tags respond to press with a subtle scale/opacity shift at `motion-fast`; no heavy bounce or spring, the feed favoring quick, legible transitions over playful physics. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the carousel stops auto-advancing, and the product remains fully functional.

The three token names, the assignment of each duration and each easing role to a use, the five motion rules, and the reduced-motion contract carry no source marker in the reviewed material: the recorded inspection is a computed-style read that supplies no transition, animation, duration, or easing value. Reading them as Frip motion tokens is a derived editorial implementation inference from the verified surfaces; they are not Frip-authored or a separately published motion specification. The reviewed material also stated an exact curve for each of the three easing roles with no evidence attached to any of them; those three curve values are removed rather than carried, and the absence is named in Governance.

Promoting an exact easing curve, a reduced-motion behavior, a transition-property list, or an animation name to a Frip motion token requires a per-component computed observation of the transition properties, the animation name, the duration, the easing, and the reduced-motion behavior. A single named curve or duration is not that gate.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | The reviewed material records no Frip-published typography document. The family and the stack below come from the live computed style of the read surfaces. |
| Live computed surface-use | `font-family: SUIT, "UI Frip", "Noto Sans KR", Helvetica, Arial, sans-serif` is the computed body stack on the read surfaces; SUIT carries headings, body, UI, and button labels alike across them. |
| Official distributed asset | No Frip-exclusive or Frip-distributed type family is established in this pass. The name `UI Frip` appears inside the computed stack as a fallback entry and carries no distribution or ownership record. |
| Ownership and license | The reviewed material records no statement that Frip owns, licenses, or distributes SUIT, and it records no license text for the family. None is supplied here. |
| Outside this reading | Type on the Frip app and on the navigation destinations this reading did not visit stays outside it. |

### Family

- **Primary:** `SUIT`
- **Full computed stack:** SUIT → `UI Frip` → `Noto Sans KR` → Helvetica → Arial → sans-serif.
- SUIT is a geometric hangul-first sans, and Frip runs it across the whole read surface rather than splitting display and body across two families. That single-family reading is a derived editorial implementation inference from the verified surfaces; it is not Frip-authored or a separately published UI specification. The recorded part is the computed stack and the roles it was measured on.
- The chain after SUIT is a fallback chain, not the brand face. Do not present Helvetica, Arial, or a generic sans as Frip type, and do not substitute SUIT for an unobserved family on another surface.

### Type roles

| Role | Font | Size | Weight | Line height | Tracking | Use |
|---|---|---|---:|---|---|---|
| Detail / Section Heading | SUIT | 18px (1.13rem) | 700 | 1.33 (24px) | normal | 프립 정보, 주간 인기 BEST — SUIT Bold |
| Product Title | SUIT | 20px (1.25rem) | 400 | 1.40 (28px) | -0.6px | Product-detail H1 |
| Discount % | SUIT | 24px (1.50rem) | 700 | — | normal | Hero sale percentage, in sale red |
| Booking CTA | SUIT | 16px (1.00rem) | 400 | 1.50 | normal | 참여하기 primary button label |
| Body / UI | SUIT | 14px (0.88rem) | 400 | 1.50 (21px) | normal | Standard reading + nav text |
| App-download CTA | SUIT | 12px (0.75rem) | 700 | — | normal | 앱 다운로드 bar label — SUIT Bold |
| Corner Badge | SUIT | 10px (0.63rem) | 500 | — | normal | 프립단독 / 슈퍼호스트 tags — SUIT Medium |

Line heights are kept as the ratios the record states — 1.33, 1.40, 1.50 — with the pixel equivalents the record gives beside them, rather than converted to fixed pixel values.

The four typography readings the reviewed material draws from that table are a derived editorial implementation inference from the verified surfaces; they are not Frip-authored or a separately published UI specification: that the hierarchy is weight-driven because one typeface carries everything and contrast comes from weight and size rather than a second family; that the heading scale is restrained, topping out at 18–20px on the feed because the design leans on card density and imagery rather than oversized type; that tight tracking is reserved for titles while body and UI text stay at normal tracking for hangul legibility at 14px; and that weight 700 is reserved for headings and numeric emphasis to signal "read this first." The recorded parts are the seven rows above.

### Assets

- The catalog logo entry is a third-party favicon proxy — `https://www.google.com/s2/favicons?domain=frip.co.kr&sz=128` — rather than a captured first-party Frip mark, and it is recorded on those terms.
- Experience thumbnails and hero carousel imagery are catalog content carried by the read surfaces. The reviewed material records that card thumbnails carry no shadow at any size and that corner tags overlay the top of thumbnails at a fixed 5px radius. Do not replace that imagery with invented brand-color decoration.
- The reviewed material establishes no other first-party Frip image, icon, or illustration asset, and none is substituted here.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The 2026-07-02 reading was a live computed-style inspection of the homepage and four product-detail surfaces. Eight component records exist: the token block carries eight and the component section describes the same eight, adding the app-download bar height and the navigation header height that the token block leaves out. Seven components are declared below, each with the verified `type` the record assigns it, kept per component rather than flattened into a single interactive kind. The eighth record, `cta-disabled`, is the sold-out appearance of the same full-width booking control — the reviewed material describes it as the same geometry as active — so its own `type` and its six values are carried as a named appearance on the Booking CTA rather than as a second control.

A declared interactive component still closes Core §4.4 applicability by control meaning, not by evidence completeness. `default` and `focus-visible` apply. A missing appearance omits the visual treatment only; absence of an observation is never a `not-applicable` reason. Where a canonical state carries no meaning for a control's role, it is marked `not-applicable` with that semantic reason. State coverage is not complete here.

The reviewed material writes the word `focus` once, inside the motion duration table, as one of three things that happen at 120ms. It never writes `focus-visible` and never attaches a treatment to either. That single mention is kept where the record puts it, in the motion scale, and no `focus-visible` row in this section carries a treatment value.

The seven canonical states are the only ones any component declares here. The reviewed material records no additional booking-condition or listing-condition state for any control, and none is introduced.

### Source state contract

The state contract as recorded, preserved in full. Several of its values restate what the component records and the color roles already carry — `#eeeeee` and the 신청마감 label on the sold-out CTA, the `#fafafa` skeleton tint, the 5px card radius, the 56px CTA height, the `1px #dddddd` pill, `#aaaaaa`, and `#000000`. Beyond those restatements the rows carry no source marker, and reading them as the system's state behavior is a derived editorial implementation inference from the verified surfaces; it is not Frip-authored or a separately published state specification. The booking and browsing situations they name — a saved list with nothing in it, a feed still resolving, a failed booking, a confirmed booking — are editorial scenarios written into this contract, not statements about Frip's actual booking, availability, or messaging behavior.

| State | Treatment |
|---|---|
| **Empty (no results / saved list)** | White canvas, single Ink Black (`#000000`) line explaining nothing matches yet, with a violet CTA back to browsing. No clutter. |
| **Loading (feed / shelf)** | Skeleton cards at final 5px-radius dimensions on `#fafafa` tint. Flat pulse — no shadow shimmer, consistent with the shadowless system. |
| **Loading (booking submit)** | Inline progress on the 56px violet CTA; label swaps while the panel stays visible. |
| **Error (booking failed)** | Inline message in Ink Black with a plain-language explanation and a retry — states the next step, not just "오류". |
| **Error (form validation)** | Field-level message below the input (1px `#dddddd` pill), describing what's valid. |
| **Success (booking confirmed)** | Brief inline confirmation in warm tone; reservation detail linked immediately below. No aggressive celebration. |
| **Skeleton** | `#fafafa` blocks at final card dimensions, 5px radius, flat pulse. |
| **Disabled (sold out)** | Full-width CTA turns `#eeeeee` with white "신청마감" label — same 56px geometry, greyed rather than removed. |
| **Disabled (low-emphasis)** | Faint Grey (`#aaaaaa`) text on reduced-opacity surface. |

### Booking CTA — `cta-primary`, with the sold-out record `cta-disabled`

- Role: the primary product-page action, the system's single primary action
- Kind: interactive
- Type: button — recorded on both `cta-primary` and `cta-disabled`
- Background: `#7a29fa`
- Text: `#ffffff`
- Radius: 10px
- Padding: 16px
- Height: 56px
- Font: 16px / 400 SUIT
- Label: 참여하기
- Named appearance — sold-out / closed, recorded under its own key `cta-disabled`: background `#eeeeee`, text `#ffffff`, radius 10px, padding 16px, height 56px, font 16px / 400 SUIT, label 신청마감. The reviewed material describes it as greyed, full-width, and the same geometry as active.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded with its background, text, radius, padding, height, and font, identical across the read product pages |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-focusable control; the one focus mention in the record is a different evidence kind, so no treatment is promoted into this row |
| disabled | applicable | Recorded: the `#eeeeee` sold-out appearance named above |
| loading | applicable | The control commits a booking, an operation that runs to completion; the state contract records inline progress on this 56px CTA with the label swapping while the panel stays visible |
| error | applicable | The same committed booking can fail; the state contract records an inline explanation and a retry for that path, placed beside the control rather than on it, so no treatment is promoted here |
| success | applicable | A control that commits a booking can confirm its outcome; the state contract puts the confirmation in a following inline block rather than on the control, so no treatment is promoted here |

### App-Download Bar — `app-download`

- Role: recurring dark app-download cross-sell chrome
- Kind: interactive
- Type: button
- Background: `#333333`
- Text: `#ffffff`
- Radius: `0px`
- Height: 45px
- Font: 12px / 700 SUIT
- Label: 앱 다운로드

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded with its background, text, radius, height, and font |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-focusable control; the one focus mention in the record is a different evidence kind, so no treatment is promoted into this row |
| disabled | applicable | A cross-sell control can be unavailable; visual treatment omitted |
| loading | applicable | The control's own label names a download — an operation that runs rather than a selection that resolves at once; visual treatment omitted |
| error | applicable | The same operation can fail where it was started; visual treatment omitted |
| success | applicable | An operation control can carry the confirmation of its own outcome; visual treatment omitted |

### Quantity / Option Pill — `count-pill`

- Role: selectable quantity / option pill on the booking panel
- Kind: interactive
- Type: input
- Background: `#ffffff`
- Text: `#333333`
- Border: 1px solid `#dddddd`
- Radius: 20px
- Padding: 7px 15px
- Height: 36px
- Font: 14px / 400 SUIT

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded with its background, text, border, radius, padding, height, and font |
| hover | applicable | Pointer-web control; visual treatment omitted |
| focus-visible | applicable | Keyboard-focusable field; the one focus mention in the record is a different evidence kind, so no treatment is promoted into this row |
| disabled | applicable | A selector can be unavailable; the record's own sold-out treatment is written for the booking CTA rather than for this field, so no treatment is promoted here |
| loading | applicable | Validation resolves on this field, so the resolution it displays can also be pending on it; visual treatment omitted |
| error | applicable | Recorded: the state contract puts the field-level validation message below this `1px #dddddd` pill |
| success | applicable | A field that renders a validation failure can render its resolution; visual treatment omitted |

### Experience Card — `product-card`

- Role: experience/product card — thumbnail, title, price, hairline outline, no shadow
- Type: card
- Kind: omitted. The reviewed material records this as a surface and gives it no control role or interactive-kind evidence. The one interactive-adjacent mention, "Card hover" at 120ms, sits in the motion duration table rather than on this record, so it is kept there and this component declares no Core §4.4 state-applicability map.
- Background: `#ffffff`
- Border: 1px solid `#e6e6e6`
- Radius: 5px
- Font: 14px SUIT

### Exclusive Tag — `badge-exclusive`

- Role: the 프립단독 corner tag, which the reviewed material reads as flagging first-party inventory
- Type: badge
- Kind: omitted, for a reason given below the Superhost tag.
- Background: `#f4373d`
- Text: `#ffffff`
- Radius: 5px
- Padding: 4px 6px
- Font: 10px / 500 SUIT

### Superhost Tag — `badge-superhost`

- Role: the 슈퍼호스트 host-trust corner tag
- Type: badge
- Kind: omitted, for the reason below.
- Background: `#7a29fa`
- Text: `#ffffff`
- Radius: 5px
- Padding: 4px 6px
- Font: 10px / 500 SUIT

The reviewed material disagrees with itself about whether the two corner tags are controls. Its responsive account calls corner tags non-interactive labels at 10px, kept out of the tap flow; its motion rules say the booking CTA and tags respond to press with a subtle scale/opacity shift at `motion-fast`. Both statements are preserved where they sit — in Layout & Platforms and in Foundations → Motion — and neither is selected. Because the record disagrees rather than falls silent, these two components declare no `Kind` and no Core §4.4 state-applicability map, and the disagreement is named in Governance.

### Top Navigation Tab — `nav-tab`

- Role: top navigation / category tab
- Kind: interactive
- Type: tab
- Background: `#ffffff`
- Text: `#000000`
- Font: 14px / 400 SUIT
- Header height: approximately 56px
- Items: 카테고리, 피드, 메시지, 찜, 마이
- Named appearance — active: text `#7a29fa` on the active nav / category item

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded: `#000000` text at 14px / 400 on the white header |
| hover | applicable | Pointer-web control; visual treatment omitted |
| focus-visible | applicable | Keyboard-focusable control; the one focus mention in the record is a different evidence kind, so no treatment is promoted into this row |
| disabled | applicable | A navigation destination can be unavailable; visual treatment omitted |
| loading | not-applicable | The item selects a destination; it runs no operation in place that could be pending |
| error | not-applicable | Its meaning is active versus resting, not the failure of a request or a validation |
| success | not-applicable | Its meaning is selection, not an action-outcome confirmation |

The active appearance is a named appearance rather than a focus observation, and it is not `focus-visible` evidence.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

### Recorded layout

- The homepage is a content-dense feed: horizontal shelves of thumbnail cards — 주간 인기 BEST, 신규 프립, 기획전 — stacked vertically.
- Product cards use a 5px radius and a fixed thumbnail-over-title-over-price layout.
- Product-detail pages pin a full-width 56px booking CTA at the bottom of the panel.
- Sections separate by tinted band (`#fafafa` / `#f4f4f4` / pink `#fff4f7`) rather than rules.
- Corner tags overlay the top of thumbnails at a fixed 5px radius, and card thumbnails carry no shadow at any size.

### Recorded touch measurements

- The primary booking CTA is 56px tall and full-width.
- The selector pill is 36px tall with 7px 15px padding.
- Nav items sit within an approximately 56px header.
- Corner tags are non-interactive labels at 10px, kept out of the tap flow. The reviewed material's motion rules say the opposite about tags; both statements are preserved and the disagreement is named in Governance.

### Recorded breakpoint bands

| Name | Width | Recorded behavior |
|---|---|---|
| Mobile | <640px | Single-column shelves, cards scroll horizontally, bottom-anchored CTA |
| Tablet | 640-1024px | 2–3 up card grids, moderate padding |
| Desktop | 1024-1440px | Full multi-column shelves, centered content, persistent nav |

Further recorded behavior: card shelves scroll horizontally on narrow viewports and become a multi-column grid on desktop; the product-detail booking panel collapses to a bottom-fixed CTA bar on mobile; tinted and white alternating sections keep their full-width treatment; headings hold their 18–20px size, with density adjusting through column count rather than type scale; and cards keep the 5px radius across breakpoints.

The reading behind those bands was a computed-style inspection of the homepage and four product-detail surfaces, and the record it produced holds no viewport measurement, no resize observation, and no breakpoint declaration. The three band names, the three width ranges, the per-band behavior, and the five collapsing statements are a derived editorial implementation inference from the verified surfaces; they are not Frip-authored or a separately published responsive specification. The recorded parts are the 56px CTA height, the 36px pill height with its 7px 15px padding, the approximately 56px header, the 5px card and tag radius, the 10px tag type size, and the 18–20px heading sizes that appear in the type roles above.

The reviewed material also reads the whitespace as density over emptiness — a browse-many-options marketplace where cards pack tightly into shelves and the eye scans laterally — as flat segmentation by background tint and `#e6e6e6` hairlines rather than shadow or heavy borders, and as a tag rhythm in which repeated 5px corner tags create a consistent visual cadence across the card grid. That is a derived editorial implementation inference from the verified surfaces; it is not Frip-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

### Voice

The reviewed material reads Frip's voice as energetic, invitational, and experience-first — selling the feeling of doing something new with other people rather than a transaction — and reads the register set by its positioning line and brand ethos as aspirational, warm, and community-minded. It maps five contexts to a tone:

| Context | Tone |
|---|---|
| Section headings | Bright, curatorial. "주간 인기 BEST 🏆", "크루님을 위한 고감도 경험" — emoji-friendly, warm. |
| CTAs | Direct, inviting. "참여하기" (join in), "앱 다운로드". Low-pressure, action-forward. |
| Tags | Terse trust/urgency signals. "프립단독" (exclusive), "슈퍼호스트" (trusted host). |
| Promo / points | Playful savings language. "신규프립 에너지x2", discount percentages in bold red. |
| Community copy | Members addressed as "크루" — belonging over customer-hood. |

It also states a forbidden register: cold transactional phrasing, fear-based urgency, corporate stiffness, or treating experiences as inventory rather than adventures, with savings language staying playful and never predatory.

The three voice adjectives, the register reading, all five table rows, and the forbidden-register rule are a derived editorial implementation inference from the verified surfaces; they are not Frip-authored or a separately published voice specification. The Korean and English strings quoted inside them are published copy and are carried byte-for-byte.

### Brand-published lines

Three lines are recorded as verbatim from live first-party surfaces on 2026-07-02:

- 대한민국 1등 취미여가 탐색 플랫폼 — the homepage title tag, category-leader positioning. The full recorded title tag is `프립(FRIP) : 대한민국 1등 취미여가 탐색 플랫폼`.
- 주간 인기 BEST 🏆 — a homepage section heading, carried with its trophy emoji.
- WE INSPIRE PEOPLE TO EXPERIENCE THE WORLD — the tagline of Frip's official Medium publication at `medium.com/frientrip`.

The mission phrasing "inspire people to experience the world" is quoted in the reviewed material from that same publication.

Further Frip strings appear in the reviewed material as quoted product copy without a separate verification marker, and each is carried byte-for-byte here: the shelf headings 신규 프립, 기획전, 크루님을 위한 고감도 경험, and 이런 모임은 어때요?; the button labels 참여하기, 신청마감, and 앱 다운로드; the corner tags 프립단독 and 슈퍼호스트; the point label 신규프립 에너지x2; the product-detail heading 프립 정보; the navigation items 카테고리, 피드, 메시지, 찜, and 마이; and the bare error word 오류, which the state contract names as the thing an error message should not be limited to.

Where an English gloss sits beside a Korean string above, the gloss is the reviewed material's own and never replaces the Korean.

### Terminology

- The product is 프립 in Korean and Frip in Latin script; the origin name is 프렌트립 (Frientrip).
- Members are addressed as 크루.
- Trusted hosts carry the 슈퍼호스트 badge; the 프립단독 tag is the one the reviewed material reads as flagging first-party inventory that cannot be had elsewhere. That inventory reading is a derived editorial implementation inference from the verified surfaces; it is not Frip-authored or a separately published UI specification. The recorded parts are the two published tag strings and the values recorded against them.
- 고감도 경험 is the phrase that sits inside the curated shelf heading 크루님을 위한 고감도 경험.

Keep each byte-exact. The reviewed material calls the badge and tag terms terse trust and urgency signals. Keep them in Korean rather than substituting an English rendering; the English glosses in this document are the reviewed material's own and sit beside the Korean rather than in place of it.

### Locale

The product is Korean-language and every published line above is Korean apart from the Medium publication tagline, which the source publishes in English. Keep both in the script the source publishes them in. SUIT is a hangul-first family, and the reviewed material states that body and UI text stay at normal tracking for hangul legibility at 14px while only product titles compress to -0.6px. The reviewed material establishes no locale behavior beyond that, and none is supplied here.

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

- the exact easing curve behind each of the three recorded easing roles `ease-enter`, `ease-exit`, and `ease-standard`, and the per-component computed observation that Foundations → Motion names as the gate for promoting any motion value here
- whether the corner tags are controls, where the responsive account calls them non-interactive labels kept out of the tap flow and the motion rules give them a press response
- the hover appearance of every control, which the record names once as a card hover at 120ms and never attaches to a component
- the `focus-visible` appearance of every control, where the record's single `focus` mention sits in the motion duration table with no treatment attached
- the viewport evidence behind the three recorded breakpoint bands and their collapsing behavior
- the record behind the `UI Frip` name that sits inside the computed font stack
- color, type, geometry, and component values for the Frip app that the 앱 다운로드 bar cross-sells, and for the 피드, 메시지, 찜, and 마이 destinations the top navigation names
