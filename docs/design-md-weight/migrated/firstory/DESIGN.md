# Firstory Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Firstory is a Taiwanese podcast-hosting and creator-monetization SaaS, headquartered in Taipei. This contract covers the first-party marketing surfaces that were inspected live: the English homepage, the pricing page, and the Traditional Chinese (zh-TW) homepage at `https://firstory.me`. It does not treat those marketing pages as a proxy for the rest of the product the source describes: the advertiser surface (「廣告主專區」 / "For Advertisers") and the blog, which this inspection reached only as top-nav names, or the authenticated creator side — hosting, analytics, subscriptions, the advertiser marketplace — which the source describes in prose without recording any of its interface values.

Firstory was founded in Taipei in **2018** by three co-founders who started the company straight out of university — **于子軒 (Stanley Yu, CEO)**, **翁子皓 (CTO)**, and **劉德政 (COO)**. The product began as "Firstory Studio", a voice-based social app, and the team pivoted in 2019 into podcast hosting as the Taiwanese podcast wave took off. In October 2020 Firstory closed a seed round led by **KKBOX**, Taiwan's audio-streaming incumbent. Taiwanese technology press (INSIDE, Meet / Business Next) documents that founding, pivot, and seed round; Firstory's own surfaces are what supply every interface value below.

Across the pivot the product line grew from one-click distribution to every major podcast directory into a business stack: analytics, cross-promotion, the Flink smart-link, listener donations, member subscriptions, an advertiser marketplace, and most recently AI tooling (「AI 工作室」, AI content extraction) that turns episodes into shareable assets. The homepage states the mission plainly — podcasting is a media business, and Firstory's job is to hand creators the whole toolkit, from hosting to monetization.

The following atmosphere reading is a derived editorial implementation inference from the verified surfaces; it is not Firstory-authored or a separately published UI specification. The marketing surface reads like a warm, creator-friendly studio rather than an enterprise audio tool: a paper-toned canvas rather than clinical white, one saturated raspberry-pink carrying every call to action, and a geometric display face whose roundness echoes the pill-and-rounded geometry of the components, so display type and UI chrome read as cut from the same cloth. What the design refuses, on the same reading: enterprise-audio coldness, dashboard-grey utilitarianism, and gatekeeping complexity.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

- Start a podcast from the homepage hero — read the headline and act on the single pink call to action (「立即開始」 / "Get started today").
- Compare plans on the pricing page, switching the Monthly / Yearly billing toggle and acting on the featured plan's trial call to action (「免費試用 14 天」 / "14-Day Free Trial").
- Answer getting-started and cost questions in the FAQ accordion (「Firstory 要多少錢？」 / "How do I get started with Firstory?").
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source names fictional archetypes with invented biographies; those are dropped. Use the publicly observable segments only, at group level: independent Taiwanese podcasters starting a first show, growing shows monetizing through member subscriptions and listener donations, and advertisers buying podcast ads across Chinese-language shows through 「廣告主專區」.

### Distinctive traits

- Poppins Bold (700) for all display type — geometric, rounded, friendly authority
- Open Sans 400/500 for body and UI — neutral, highly legible workhorse
- One action color: raspberry-pink `#fb355e` for CTAs, active states, and the featured plan
- Warm off-white canvas (`#fbfaf9`) with pure-white cards (`#ffffff`) — paper-like, not sterile
- Flat depth: hairline rings and surface tints instead of drop shadows
- Pill geometry for toggles and badges; 10–16px rounding for buttons, cards, and nav
- Tight negative tracking on headlines (-1.8px at 72px, -0.9px at 36px)
- Pink tint family (`#ffe6e7` surface, `#962339` deep text) for announcement and savings accents
- Green `#00c950` reserved for checkmark/success semantics in pricing tables
- Traditional-Chinese headlines render at the same bold weight and tight rhythm as the English ones, keeping the bilingual zh-TW/EN site visually unified

The measured half of that list — families, weights, hexes, radii, tracking — is observation. The character words attached to them ("friendly authority", "neutral, highly legible workhorse", "paper-like, not sterile"), and the reading that the matching weight and tracking keep the bilingual zh-TW/EN site "visually unified", are a derived editorial implementation inference from the verified surfaces; they are not Firstory-authored or a separately published UI specification.

### Principles

These five items are a derived editorial implementation inference from the verified surfaces; they are not Firstory-authored or a separately published UI specification.

1. **Creator outcomes over platform features.** Every surface frames capability as creator benefit (「透過訂閱打造穩定收入」 — "build steady income through subscriptions"). *UI implication:* lead cards and sections with the benefit line; feature names stay short and human.
2. **Lower the barrier, always.** From 「3 步輕鬆開始」 ("3 easy steps to start") to free-tier CTAs, the system removes friction. *UI implication:* primary actions are always visible, always one per viewport, and always phrased as free starts.
3. **One pink, one meaning.** `#fb355e` means "act" — CTA, active toggle, recommended plan. *UI implication:* never use the action pink decoratively; emphasis elsewhere uses tints and borders.
4. **Warm and flat.** The paper-toned canvas and shadowless cards keep the tool approachable. *UI implication:* separate with surface value shifts and hairlines; reach for color, not elevation.
5. **Bilingual by default.** zh-TW and EN are peer locales sharing one visual system. *UI implication:* type scale and components must hold up identically for CJK and Latin text.

The following application rules are part of the same derived editorial implementation inference; they are not Firstory-authored or a separately published UI specification.

- Use Poppins Bold (700) for every headline and plan price — it is the brand's display voice.
- Use Open Sans 400/500 for body, nav, and button labels.
- Reserve raspberry-pink (`#fb355e`) for actions, active states, and the featured plan only.
- Set the page on warm off-white (`#fbfaf9`) with pure-white (`#ffffff`) cards.
- Separate zones with surface tints (`#edf0f6`, `#ffe6e7`) and hairline rings, not shadows.
- Use full-pill geometry for toggles and badges, 12–16px rounding for buttons and cards.
- Track headlines tight (-1.8px at 72px) with 1.0 line-height.
- Pair pink-tinted surfaces (`#ffe6e7`) with the deep berry text (`#962339`) for badges.

### Avoid

The following items copy the source's stated prohibitions. They are a derived editorial implementation inference from the verified surfaces; they are not Firstory-authored or a separately published UI specification.

- Do not use drop shadows for elevation — the system is flat by design.
- Do not introduce a second saturated accent — pink is the only action color.
- Do not set headlines in Open Sans or body copy in Poppins — the two faces never swap roles.
- Do not use pure black for text — ink is `#0d131c`.
- Do not put pink text on pink tint — tinted surfaces take `#962339` deep berry text.
- Do not use sharp corners on interactive elements — nothing renders below 10px radius.
- Do not shout with multiple CTAs per viewport — one pink action at a time.
- Do not use green (`#00c950`) for anything other than checkmark/success semantics.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

The site authors color in oklch on a modern shadcn/Tailwind stack; the values below are the hex round-trip of those computed colors.

- **Firstory Pink / Primary** (`#fb355e`): the single action color — hero CTA, featured plan border, active billing toggle, Recommend badge, link accents on pricing. A raspberry-pink that reads creative and energetic rather than corporate.
- **On-Primary**, also published as Near-White (`#fafafa`): near-white text on pink buttons and badges.
- **Ink** (`#0d131c`): headlines, primary copy, nav items — a deep blue-black that stays soft against the warm canvas.
- **Ink Soft** (`#242a34`): inactive toggle label text.
- **Muted Slate** (`#4f5661`): secondary body copy, footer links, captions.
- **Canvas**, also published as Warm Canvas (`#fbfaf9`): the warm off-white page background — the system's defining surface.
- **Card White**, also published as Pure White (`#ffffff`): solution cards, pricing plan cards, and content containers.
- **Cool Surface** (`#edf0f6`): cool grey-blue tint for feature illustration zones and comparison-table stripes.
- **Beige** (`#f6efe5`): warm beige for the inactive half of the billing toggle — a tactile, paper-like neutral.
- **Hairline** (`#e0e3e8`): default border color for dividers and rings.
- **Pink Tint** (`#ffe6e7`): announcement pill background, Save-percentage badge background, and decorative tinted zones (often at 80% alpha).
- **Pink Deep**, also published as Deep Berry (`#962339`): dark berry text on pink-tinted badges — the accessible companion to `#ffe6e7`.
- **Success Green** (`#00c950`): feature checkmarks and positive indicators in pricing / compare tables.

Each hex and each role placement above is observation. The character readings attached to them — that the pink "reads creative and energetic rather than corporate", that the ink "stays soft against the warm canvas", that the beige is "tactile, paper-like", that the canvas is "the system's defining surface", and that `#962339` is "the accessible companion to `#ffe6e7`" — are a derived editorial implementation inference from the verified surfaces; they are not Firstory-authored or a separately published UI specification, and the contrast pairing in particular carries no measured ratio.

### Spacing

- Base unit: 4px
- Named scale: xs 4px, sm 8px, md 12px, base 16px, lg 24px, xl 32px, section 64px
- Also repeated in the inspected layout: 20px
- Solution cards use a generous 32px internal padding; nav items use a compact 8px 16px; section rhythm runs at 64px and above.

### Shape

- Small (10px): nav ghost items
- Medium (12px): plan CTAs, compact buttons
- Large (16px): cards, hero CTA, announcement pill — the workhorse
- Full (9999px): billing toggle, badges

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | Page background, nav, text, buttons |
| Tint (Level 1) | `#edf0f6` / `#ffe6e7` background shift | Illustration zones, table stripes, announcement |
| Ring (Level 2) | 10%-ink hairline ring / `1px solid #e0e3e8` | Card outlines, dividers |
| Accent (Level 3) | `2px solid #fb355e` border | Featured plan card emphasis |

The shadow token is literally `none`. Live inspection found box-shadow declared only as fully transparent ring placeholders — nothing visibly elevated on nav, hero, cards, or buttons. What is observed beyond that is the set of treatments themselves: the warm-canvas-versus-white-card value shift, the tinted zones, the hairline rings, and the 2px pink border on the featured pricing plan. Attributing the hierarchy to those treatments, ranking that plan as the single most important object on the pricing page, and reading the whole as "when the system wants attention it reaches for the pink, never for depth, which keeps the creator-facing product feeling light, fast, and contemporary" are a derived editorial implementation inference from the verified surfaces; they are not Firstory-authored or a separately published UI specification.

### Motion

The source's motion tokens are its own stated derivation from the observed Tailwind/shadcn stack and the system's flat character, not measured animation. They are carried here at that authority and no higher; they are a derived editorial implementation inference from the verified surfaces and are not Firstory-authored or a separately published UI specification.

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, toggle press, nav item highlight |
| `motion-standard` | 200ms | Accordion expand, card reveal, dropdown |
| `motion-slow` | 300ms | Section transitions, hero entrance |

Motion rules, at the same derived authority: motion stays quiet and functional, matching the flat aesthetic — the billing toggle slides its pink pill between segments at `motion-standard`; FAQ accordions expand without bounce; cards fade up subtly on scroll; no spring or overshoot. Under `prefers-reduced-motion: reduce`, transitions collapse to instant and scroll reveals render immediately.

The three easing curves the source carried are unattributed and are therefore not reproduced. Do not promote an easing curve, animation name, or transition property, and do not raise the durations or the reduced-motion rule above the derived authority stated here, until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Live computed surface-use | Poppins computes on h1/h2/h3, plan prices, and FAQ triggers; Open Sans is the document default for body copy, nav, buttons, and footer. Both were computed live on the English homepage and the pricing page. |
| Declared-only | `Poppins Fallback` and `Open Sans Fallback` are declared beside the two families. They are fallback names, not the brand face. |
| Official distributed asset | No Firstory-distributed font asset is established here. Poppins and Open Sans are third-party families computed on the inspected pages, and no license statement is recorded for either. |
| Outside these surfaces | The advertiser surface and the blog were reached only as top-nav names, and the authenticated creator side is described in prose only; typography for all of them is unresolved. |

### Family

- **Display:** `Poppins` — Bold (700) at display sizes, SemiBold (600) at card-title sizes, Medium (500) on FAQ triggers.
- **Body:** `Open Sans` — document default for body copy, nav, buttons, and footer.
- Do not substitute another geometric or neutral sans and call it Firstory. Only these two families are established here.

### Type roles

| Role | Font | Size | Weight | Line height | Tracking | Notes |
|---|---|---:|---:|---:|---:|---|
| Display Hero | Poppins | 72px (4.50rem) | 700 | 1.00 (72px) | -1.8px | Homepage hero headline, Poppins Bold |
| Page Title | Poppins | 48px (3.00rem) | 700 | 1.00 (48px) | -1.2px | Pricing hero ("Simple, Transparent Pricing") |
| Section Heading | Poppins | 36px (2.25rem) | 700 | 1.11 (40px) | -0.9px | Section titles; also the plan price size |
| Sub-section | Poppins | 30px (1.88rem) | 700 | 1.20 (36px) | -0.75px | Feature heads, CTA banner |
| Step Title | Poppins | 20px (1.25rem) | 600 | 1.40 (28px) | normal | Numbered step headings |
| Card Title | Poppins | 18px (1.13rem) | 600 | 1.56 (28px) | normal | Solution card titles, stat labels, Poppins SemiBold |
| FAQ Item | Poppins | 16px (1.00rem) | 500 | 1.50 | normal | Accordion triggers |
| Body | Open Sans | 16px (1.00rem) | 400 | 1.50 (24px) | normal | Standard reading text |
| Nav / Button | Open Sans | 14px (0.88rem) | 500 | 1.43 (20px) | normal | Nav items, button labels, Open Sans Medium |
| Eyebrow Label | Open Sans | 14px (0.88rem) | 600 | 1.43 (20px) | normal | Small feature labels ("Distribution") |
| Badge | Open Sans | 12px (0.75rem) | 600 | 1.40 | normal | Save / Recommend pill labels |

Type rules: tracking tightens with size (-1.8px at 72px, -1.2px at 48px, -0.9px at 36px, -0.75px at 30px; normal at 20px and below), and hero and page titles set line-height equal to font size. zh-TW and EN copy share identical sizes, weights, and tracking. Prices ($0 / $84 / $180) render in Poppins 36px / 700 at the Section Heading size.

Reading those measurements as character — "solid 1.0 line-height on display makes dense, poster-like blocks", "prices are display type, treated as headlines rather than data", and "Poppins persuades, Open Sans informs: the geometric display face carries every emotional beat, the neutral body face carries every explanation, and they never swap roles" — is a derived editorial implementation inference from the verified surfaces; it is not Firstory-authored or a separately published UI specification.

### Assets

- Product screenshots sit inside tinted illustration zones with 16px rounding and no shadow.
- Player and waveform illustrations reuse the pink family at reduced alpha.
- Cards maintain 16px radius across breakpoints.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

Every component below was observed in its default appearance on the inspected marketing pages, and the billing toggle additionally in its active segment. Hover, focus-visible, and disabled treatments have no recorded value, so those visual values are omitted rather than darkened or lightened from the base colors.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover applies. Absence of an observation is never a `not-applicable` reason — where a state is meaningful for the control and its treatment is unresolved, the state stays `applicable` and only the value is omitted. `loading`, `error`, and `success` follow the control's product role instead: every control declared here sits on a marketing page and either hands off, switches which prices render, or discloses copy already present, so none of them commits an operation whose progress, failure, or completion it could report. Those three are therefore closed by role meaning, with the reason given per component. This is not a complete state-coverage claim.

The role readings that close `loading`, `error`, and `success` below are this document's judgment about what each control does — a derived editorial implementation inference from the verified surfaces; they are not Firstory-authored or a separately published UI specification. What the source records is each control's appearance and its stated use.

Cards, badges, and the announcement pill are recorded with visual values but with no interactive-kind evidence, so their kind and state-applicability map are omitted rather than decided.

### Primary CTA

- Role: hero and banner call to action
- Kind: interactive
- Type: button
- Background: `#fb355e`
- Text: `#fafafa`
- Radius: 16px
- Padding: 0px 32px
- Height: 40px
- Font: 16px / 500 / Open Sans
- Labels: "Get started today", "Get Started for Free", 「立即開始」
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Observed on the homepage hero and the pre-footer banner |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A call to action can be unavailable; visual treatment omitted |
| loading | not-applicable | Marketing-page call to action: it hands off rather than performing an operation in place, so it has no request whose progress it could report |
| error | not-applicable | Same role: it commits nothing in place that could fail |
| success | not-applicable | Same role: it confirms nothing in place; the outcome belongs to whatever it opens |

### Plan CTA (Featured)

- Role: call to action on the recommended pricing plan
- Kind: interactive
- Type: button
- Background: `#fb355e`
- Text: `#fafafa`
- Radius: 12px
- Padding: 0px 10px
- Height: 36px
- Font: 14px / 500 / Open Sans
- Labels: "14-Day Free Trial", 「免費試用 14 天」
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Observed on the featured pricing plan |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A plan's call to action can be unavailable; visual treatment omitted |
| loading | not-applicable | Plan call to action on a marketing page: it hands off rather than performing an operation in place |
| error | not-applicable | Same role: it commits nothing in place that could fail |
| success | not-applicable | Same role: it confirms nothing in place |

### Plan CTA (Quiet)

- Role: call to action on non-featured pricing plans
- Kind: interactive
- Type: button
- Background: `#fbfaf9`
- Text: `#0d131c`
- Radius: 12px
- Padding: 0px 10px
- Height: 36px
- Font: 14px / 500 / Open Sans
- Labels: "Start Free", 「免費開始」
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Observed on the non-featured pricing plans |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A plan's call to action can be unavailable; visual treatment omitted |
| loading | not-applicable | Plan call to action on a marketing page: it hands off rather than performing an operation in place |
| error | not-applicable | Same role: it commits nothing in place that could fail |
| success | not-applicable | Same role: it confirms nothing in place |

### Nav Item (Ghost)

- Role: top-nav menu item and link
- Kind: interactive
- Type: button
- Background: transparent over the `#fbfaf9` canvas
- Text: `#0d131c`
- Radius: 10px
- Padding: 8px 16px
- Height: 36px
- Font: 14px / 500 / Open Sans
- Labels observed: "Features", "Pricing", "Blog"
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Observed across the top nav on every inspected page |
| hover | applicable | Pointer-web control; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A destination can be withheld; visual treatment omitted |
| loading | not-applicable | Destination link; it commits no operation whose progress it could report |
| error | not-applicable | Destination link; nothing to fail in place |
| success | not-applicable | Destination link; nothing to confirm in place |

### Billing Toggle (Segmented)

- Role: Monthly / Yearly billing-period switch on the pricing page
- Kind: interactive
- Type: tab
- Background: `#f6efe5` (inactive segment)
- Text: `#242a34` (inactive segment)
- Active segment: background `#fb355e`, text `#fafafa`
- Radius: 9999px (full pill)
- Padding: 8px 20px
- Height: 36px
- Font: 14px / 500 / Open Sans
- Labels observed: "Monthly" (inactive), "Yearly" (active)
- Observed: default and active

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Inactive segment observed on the pricing page |
| hover | applicable | Pointer-web control; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A billing period can be unavailable; visual treatment omitted |
| loading | not-applicable | View switch: it changes which prices render and commits nothing |
| error | not-applicable | Same role: no operation that could fail |
| success | not-applicable | Same role: the switched view is its own feedback |

The active segment is a recorded variant of this control, not one of the seven canonical states; its treatment is the `#fb355e` fill with `#fafafa` label above.

### FAQ Accordion Trigger

- Role: FAQ section trigger — it discloses the answer beneath it
- Kind: interactive
- Background: transparent
- Text: `#0d131c`
- Padding: 20px 24px
- Height: 64px (collapsed trigger)
- Font: 16px / 500 / Poppins
- Label observed: "How do I get started with Firstory?"
- Observed: collapsed trigger only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Collapsed trigger observed on the homepage FAQ |
| hover | applicable | Pointer-web control; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A question can be withheld; visual treatment omitted |
| loading | not-applicable | Discloses copy already on the page; no request is issued |
| error | not-applicable | Same role: nothing to fail |
| success | not-applicable | Same role: the expanded answer is its own feedback |

### Solution Card

- Type: card
- Background: `#ffffff`
- Title text: `#0d131c`
- Body text: `#4f5661`
- Radius: 16px
- Padding: 32px
- Ring: 10%-ink hairline, no shadow
- Height observed: 193px
- Title: 18px / 600 / Poppins
- Body: 16px / 400 / Open Sans
- Use: solution / feature cards on the warm canvas ("AI Studio", "Data Analytics")

No interactive-kind evidence is given for this card, so kind and a state-applicability map are omitted.

### Pricing Plan Card

- Type: card
- Background: `#ffffff`
- Radius: 16px
- Padding: 24px 0px
- Use: standard pricing plan column

No interactive-kind evidence is given, so kind and a state-applicability map are omitted.

### Pricing Plan Card (Featured)

- Type: card
- Background: `#ffffff`
- Border: `2px solid #fb355e`
- Radius: 16px
- Padding: 24px 0px
- Use: recommended plan, paired with the pink Recommend badge

No interactive-kind evidence is given, so kind and a state-applicability map are omitted.

### Save Badge

- Type: badge
- Background: `#ffe6e7`
- Text: `#962339`
- Radius: 9999px (full)
- Padding: 2px 8px
- Font: 12px / 600 / Open Sans
- Label observed: "Save 22%", attached to the Yearly toggle

Presentational; kind and a state-applicability map are omitted.

### Recommend Badge

- Type: badge
- Background: `#fb355e`
- Text: `#fafafa`
- Radius: 9999px (full)
- Padding: 4px 16px
- Font: 12px / 600 / Open Sans
- Label observed: "Recommend", on the featured plan card

Presentational; kind and a state-applicability map are omitted.

### Announcement Pill

- Type: badge
- Background: `#ffe6e7` at 80% alpha
- Text: `#0d131c`
- Border: `1px solid #ffe6e7`
- Radius: 16px
- Height: 38px
- Font: 16px / 400 / Open Sans
- Label observed: "First Wave in Asia-Pacific! …"

Presentational; kind and a state-applicability map are omitted.

### Navigation bar

- Background: transparent over the `#fbfaf9` canvas
- Items: ghost buttons, 14px Open Sans weight 500, `#0d131c` text, 10px radius, 36px high in a slim top bar
- Composition observed: Features / Monetize / Compare / Pricing / Blog / For Advertisers, with a language switcher; the pink `#fb355e` CTA sits right-aligned at the end of the bar

A region rather than a declared control; kind and a state-applicability map are omitted.

### Footer

- Headings: `#0d131c`, 14px Open Sans weight 600 ("Product", "Resources", "Legal")
- Links: `#4f5661`, 14px Open Sans weight 400 (for example "Privacy Policy")
- Composition: four-column sitemap with social links

A region rather than a declared control; kind and a state-applicability map are omitted.

### Derived state stances

The source records the following stances for application states. They are its own derivation from the system's character rather than observed app screens, so they are a derived editorial implementation inference from the verified surfaces; they are not Firstory-authored or a separately published UI specification, and they are not attached to any component's applicability above.

| State | Stance |
|---|---|
| Empty (no episodes yet) | Warm canvas (`#fbfaf9`), a single Ink (`#0d131c`) line framing the start (「上傳你的 Podcast」 — "upload your podcast"), one pink CTA. Encouraging, not apologetic. |
| Empty (no analytics data) | Muted Slate (`#4f5661`) explanation that data appears after the first published episode, with a link back to publishing. |
| Loading (dashboard/list) | Flat skeleton blocks in cool tint (`#edf0f6`) at final card dimensions, 16px radius — no shimmer shadows, consistent with the flat system. |
| Loading (audio processing) | Inline progress on the episode row; previous content stays visible. |
| Error (upload failed) | Inline message in Ink with plain-language cause and a retry action; never a bare error code. |
| Error (form validation) | Field-level message below the input; states what a valid value looks like. |
| Success (episode published) | Calm inline confirmation with the distribution status and a share link immediately below; check iconography in `#00c950`. |
| Skeleton | `#edf0f6` blocks, 16px radius, flat pulse. |
| Disabled | Reduced-opacity pink for primary actions (faded, not greyed) so the brand read survives; muted `#4f5661` labels elsewhere. |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

- Centered single-column hero: the announcement pill sits above the 72px Poppins headline, with one pink CTA beneath as the anchor.
- Solution cards in a 3-up grid of equal white cards (193px tall) on the warm canvas.
- Pricing plans in a 4-up column grid; the recommended plan is slightly larger (2px pink border plus badge).
- Feature sections alternate text and product-screenshot illustration zones on tinted surfaces.
- Full-width sitemap footer in four columns.
- Touch targets: buttons at 36–40px height with generous horizontal padding; FAQ accordion triggers at 64px; billing toggle segments at 36px with 20px horizontal padding.

| Breakpoint | Width | Key changes |
|---|---|---|
| Mobile | <640px | Single column, hero compresses, nav collapses to menu |
| Tablet | 640-1024px | 2-up solution cards, stacked pricing plans |
| Desktop | 1024-1440px | Full layout, 3-up cards, 4-up pricing columns |

Collapsing behavior at those widths: the 72px Poppins headline scales down on mobile while weight 700 and the tight tracking are maintained; the solution card grid runs 3-up → 2-up → single column; the four plan columns stack vertically and the featured plan keeps its 2px pink border and badge; the four footer columns stack into accordion-like groups.

The breakpoint table and the collapsing behavior are the source's own reading of the responsive system rather than measurements taken at each width; together with the whitespace stances quoted here ("warm air, not empty space" — the off-white canvas makes generous spacing feel cozy rather than stark; flat segmentation by surface tint and hairline ring, never by elevation; one pink action per viewport with everything else ink-on-paper) they are a derived editorial implementation inference from the verified surfaces and are not Firstory-authored or a separately published UI specification. The inspection itself was a desktop one, so the pixel figures above are desktop measurements, not a cross-viewport specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

zh-TW and EN are peer locales on the same site; the language switcher sits in the top nav. Across the zh-TW strings recorded below, the creator is addressed in the informal second person 「你」 and none of them uses 「您」 — an observation of this sample set, not a published register rule.

**Verbatim samples (as published):**

- 「用 Podcast 開啟你的媒體事業」 — zh-TW hero headline ("Start Your Media Business with Podcasting" is the English hero headline on the same surface).
- 「準備好開始你的 Podcast 之旅了嗎？」 — pre-footer CTA banner ("ready to start your podcast journey?").
- 「從核心功能到強大的進階特色」 — feature section heading; the English homepage sets the same beat as "From Core Essentials to Powerful Advanced Features".
- 「受到全球創作者的信賴」 — social-proof heading ("trusted by creators worldwide").
- 「在任何地方嵌入播放器」 — feature description ("embed the player anywhere").
- 「3 步輕鬆開始 — 註冊帳號, 上傳你的 Podcast, 發佈與成長」 — onboarding steps ("3 easy steps to start — sign up, upload your podcast, publish and grow").
- 「透過訂閱打造穩定收入」 — monetization benefit line ("build steady income through subscriptions").
- 「Firstory 要多少錢？」 — FAQ question ("how much does Firstory cost?").
- CTAs: 「立即開始」 ("start now"), 「免費開始」 ("start free"), 「免費試用 14 天」 ("14-day free trial"), and the English "Get started today".
- Feature names: 「AI 工作室」 ("AI Studio"), 「會員訂閱」 ("member subscriptions"), 「節目推廣」 ("show promotion"), and the advertiser surface 「廣告主專區」.
- Page titles: "Firstory: Podcast Subscriptions & Monetization" (en) and 「Firstory：Podcast 訂閱與創作者變現的 AI 工具」 (zh).

Two kinds of English appear above. "Start Your Media Business with Podcasting", "From Core Essentials to Powerful Advanced Features", "Get started today" and "Firstory: Podcast Subscriptions & Monetization" are Firstory-published strings from the English surface. Every lower-case parenthetical gloss is a reading aid supplied here, not a Firstory-published translation. The two locales carry their own labels — the zh-TW string is the label on the zh surface and the English string is the label on the en surface — so a label is never rendered bilingually and a gloss is never substituted for the published string.

| Context | Tone |
|---|---|
| Hero headlines | Ambitious for the creator, business-framed. 「用 Podcast 開啟你的媒體事業」 |
| Feature descriptions | Capability plus benefit in one line. 「在任何地方嵌入播放器」 |
| CTAs | Low-barrier, friendly imperatives. 「立即開始」, 「免費開始」, "Get started today" |
| Onboarding steps | Reassuringly simple. 「3 步輕鬆開始 — 註冊帳號, 上傳你的 Podcast, 發佈與成長」 |
| Social proof | Concrete numbers, global framing. 「受到全球創作者的信賴」 |
| FAQ | Direct first-person questions answered plainly. 「Firstory 要多少錢？」 |

The Tone column above is a reading of the verbatim strings beside it, not a published tone rule: "Ambitious for the creator, business-framed", "Capability plus benefit in one line", "Low-barrier, friendly imperatives", "Reassuringly simple", "Concrete numbers, global framing", and "Direct first-person questions answered plainly" are this document's characterizations, while the published strings quoted beside them in the same rows are Firstory's. That column, reading the register as a whole as "encouraging, practical, and creator-first — a knowledgeable studio partner who treats podcasting as a real media business, not a hobby", and reading the forbidden register as hype superlatives, unexplained audio-engineering jargon, pressure tactics ("limited time!"), and talking down to beginners, are a derived editorial implementation inference from the verified surfaces; they are not Firstory-authored or a separately published UI specification.

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

- hover, focus-visible, and disabled visual treatments for every declared component
- the pressed treatment of the billing toggle, whose press the source names only as a motion trigger
- easing curves, animation names, and transition properties; and computed evidence for the durations and the reduced-motion rule, which are carried above only at the source's derived authority
- the expanded height and open-state treatment of the FAQ accordion (only the 64px collapsed trigger is recorded)
- the language switcher's own component values (the top nav names it without recording its treatment)
- typography, color, and component values for the advertiser surface and the blog, which this inspection reached only as top-nav names, and for the authenticated creator side, which the source describes in prose only
