# FriendliAI Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

FriendliAI — written `프렌들리에이아이` in Korean — is a Korean AI-infrastructure company selling a generative-AI inference cloud. Its product structure, read from the site's own Product and Solutions navigation, is dedicated endpoints, serverless endpoints, and self-hosted containers, offered so that a team can run open and custom models without building serving infrastructure itself. This contract covers two first-party web surfaces inspected together: the marketing homepage and the blog. It does not treat either surface as a proxy for the product dashboard or for the developer-documentation guide, neither of which contributed a value here.

The captured interface layer is cool-toned and sparing. The canvas is not pure white but `#f7f8fa`, with `#ffffff` reserved for the cards and panels that carry content. Body text and headings sit in near-black navy `#0a101a` rather than true black. `#d9e2ec` hairlines do most of the separating, and a single royal blue `#2a62db` fills the primary call to action while a marginally deeper `#2453ba` runs inline links. One family, Saans, covers every text role as a variable font at interpolated weights: 650 for the hero, 530 for subheads and button labels, 600 for blog titles.

The homepage publishes its own positioning as `The Frontier AI Inference Cloud` and frames the pitch as `Inference performance drives profitability`. Announcement copy names a model and a metric together: `GLM-5.2 is live. #1 throughput on OpenRouter`. Those throughput, latency, and cost statements are FriendliAI's published claims about its own service, not measurements taken here; no color, type, geometry, or component value in this contract rests on them or verifies them. The company's research-led origin in systems work on efficient large-model serving is general public background about the company rather than a FriendliAI statement quoted in this record.

The characterizations in this section — that the interface layer reads as cool-toned and sparing, and that its restraint expresses the engineering positioning above — are a derived editorial implementation inference from the verified surfaces; they are not FriendliAI-authored or a separately published UI specification. The values named alongside them are live-computed.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=4 lang=en -->
### Primary tasks

These four outcomes are read out of the controls and labels recorded on the two captured surfaces, since the source declares no task list of its own.

- Enter the self-serve path from the homepage primary call to action, `Get started`.
- Reach a technical conversation through the secondary call to action, `Talk to an engineer`, instead of a demo request.
- Move between the top-level areas named in the top navigation: `Product`, `Solutions`, `Models`, `Developers`, `Customers`, `Company`, `Pricing`.
- Search blog articles and scan them by topic tag on the blog surface.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. Fictional individual biographies are not design authority and none is carried here. Use group-level segments only: ML platform engineers, AI product teams, and infrastructure leads evaluating an inference provider.

### Distinctive traits

- Saans at micro-tuned variable weights — 650 hero, 530 subhead and buttons, 600 blog titles
- Royal blue `#2a62db` for the primary action, deeper `#2453ba` for inline links
- Cool-grey `#f7f8fa` canvas with `#ffffff` cards, never a stark white page
- Near-black navy `#0a101a` body text instead of pure black
- Bright `#0095ff` held for the top announcement banner and accent graphics
- A cool-grey text ladder: `#243b53` → `#486581` → `#537696` → `#6e7a84` → `#a7adb2`
- Split geometry — 4px button corners, 32px feature-card corners, 360px pills for tags and search
- Mostly flat: `#d9e2ec` hairlines carry separation, with one soft ambient glow for a spotlight card

The characterizations above ("micro-tuned", "split geometry", "mostly flat") are a derived editorial implementation inference from the verified surfaces; they are not FriendliAI-authored or a separately published UI specification. The values inside them are live-computed.

### Principles

These five principles are a derived editorial implementation inference from the verified surfaces; they are not FriendliAI-authored or a separately published UI specification.

1. **Numbers over adjectives.** Performance is stated as measurements, not superlatives. *UI implication:* surface concrete metrics as first-class content set in Saans; never replace a number with a boast.
2. **Engineer as first-class user.** The buyer is technical. *UI implication:* the primary path is `Get started` and `Talk to an engineer` — self-serve and peer-to-peer, not demo-gated.
3. **One action, one blue.** `#2a62db` means "do this"; `#2453ba` means "go here". *UI implication:* keep blue reserved for calls to action and links so the next step is never ambiguous on a dense technical page.
4. **Flat and fast.** Depth is a tool, not a texture. *UI implication:* separate with the `#f7f8fa` canvas and `#d9e2ec` hairlines; reserve the single ambient glow for one spotlight moment.
5. **Precision as personality.** The micro-tuned Saans weights 530 and 650 are the brand's fingerprint. *UI implication:* honor the exact weight scale; generic 400/600/700 reads as a different, less rigorous product.

### Application rules

These application rules are a derived editorial implementation inference from the verified surfaces; they are not FriendliAI-authored or a separately published UI specification.

- Use Saans at its micro-tuned variable weights — 650 hero, 530 subhead and buttons, 600 blog titles
- Reserve `#2a62db` for the primary call to action and `#2453ba` for inline links; keep blue as the single action and interaction color
- Set body and headings in near-black navy `#0a101a`, not pure black
- Sit content on `#ffffff` cards over the cool-grey `#f7f8fa` canvas
- Separate cards and sections with `#d9e2ec` hairlines rather than shadows
- Use 32px radii on feature cards and 360px pills on tags and the search field
- Hold `#0095ff` for the announcement banner and accents only
- Keep buttons compact — 32px height, 4px radius, 0px 12px padding

### Avoid

These avoidances are a derived editorial implementation inference from the verified surfaces; they are not FriendliAI-authored or a separately published UI specification.

- Do not reach for the default 400/600/700 weight rungs; Saans is tuned to 530 and 650, and generic weights break the signature
- Do not spread blue across many elements; it dilutes the single-action signal
- Do not use pure black `#000000` for body text — near-black navy `#0a101a` carries it, and black is only the secondary-button label
- Do not stack heavy drop shadows on cards; the system is flat, with one intentional ambient glow
- Do not put the whole page on stark white; the cool-grey `#f7f8fa` canvas is the base
- Do not use sharp square corners on tags or the search field; those are full pills
- Do not mix in a second saturated hue; the blues are the only accents on the neutral ladder

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

The hex values below are live-computed from the two captured surfaces, and the uses that name a captured element — the `Get started` fill, the search-input outline, the topic-tag-pill text, the HIGHLIGHTS badge fill — are observations. The role names and the wider use descriptions around them are a derived editorial implementation inference from those surfaces; they are not FriendliAI-authored or a separately published UI specification.

- **Friendli Blue** (`#2a62db`): primary brand and action color; fills the `Get started` call to action, the system's single primary action.
- **Link Blue** (`#2453ba`): inline link and active-navigation color, a slightly deeper and more legible blue than the action color; the most frequent non-neutral color in body copy.
- **Electric Blue** (`#0095ff`): brighter accent held for the top announcement banner and highlight graphics.
- **Ink Navy** (`#0a101a`): primary text and heading color, a near-black navy used instead of pure black; also the fill of the dark HIGHLIGHTS badge.
- **Dark Slate** (`#243b53`): dark-section background and the text color of white topic-tag pills.
- **Deep Navy** (`#102a43`): the darkest section background, for immersive brand blocks.
- **Pure Black** (`#000000`): occasional maximum-contrast label — the secondary `Talk to an engineer` button text.
- **Muted Slate** (`#486581`): hero subheadline and secondary headings.
- **Mid Slate** (`#537696`): lower-emphasis links such as `Log in`.
- **Grey** (`#6e7a84`): tertiary body text and metadata.
- **Faint Grey** (`#a7adb2`): lowest-emphasis labels, disabled text, and placeholders.
- **Canvas Grey** (`#f7f8fa`): the default page background, a cool near-white.
- **Pure White** (`#ffffff`): cards, panels, buttons, and text on blue or dark fills.
- **Hairline** (`#d9e2ec`): the primary separation device — card borders, the search-input outline, dividers.
- **Hairline Soft** (`#e5ebf2`): a lighter hairline used on inline links and subtle borders.
- **On-Primary** (`#ffffff`): text and icon color on the blue call to action and on dark badges.

### Spacing

Base unit 4px. Named steps: `xs` 4px, `sm` 8px, `md` 12px, `base` 16px, `lg` 24px, `xl` 32px, `section` 48px. The layout scale additionally records 30px, the elevated spotlight card's padding. Feature-card padding is 32px; button horizontal padding is 0px 12px.

### Shape

- `sm` 4px — buttons and quiet links
- `md` 8px — inline chrome and small containers
- `lg` 12px — mid-size panels
- `xl` 32px — feature cards
- `full` 360px — tag pills, the search input, round chips

The elevated spotlight card's 5px radius sits outside this scale and stays a local value for that card.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | Page background, body text, most sections |
| Tint (Level 1) | `#f7f8fa` canvas against `#ffffff` card | Card and section separation without elevation |
| Hairline (Level 2) | `1px solid #d9e2ec` border | Feature-card outlines, the search input, dividers |
| Ambient (Level 3) | `rgba(0,0,0,0.25) 0px 0px 35px 0px` | The single spotlight card, a soft symmetric glow |

Shadow tokens: `elevated` is `rgba(0,0,0,0.25) 0px 0px 35px 0px`; every other recorded surface is `none`. The navigation, hero, feature cards, and tags carry no shadow.

The following elevation reading is a derived editorial implementation inference from the verified surfaces; it is not FriendliAI-authored or a separately published UI specification. FriendliAI is a near-flat system: grouping is done with the cool-grey canvas and the hairline border, and the one symmetric ambient glow is reserved for a single spotlight card so that elevation reads as a deliberate signal rather than default decoration.

### Motion

Duration roles as this record states them, with no computed transition observation behind them:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button press, focus rings |
| `motion-standard` | 200ms | Card reveal, dropdown, sheet, tab change |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

Easing token names and uses as this record states them, with the curves omitted:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | Omitted — the token name and use are recorded and no curve evidence is attributed | Arriving: cards, dropdowns, panels |
| `ease-exit` | Omitted — the token name and use are recorded and no curve evidence is attributed | Dismissals |
| `ease-standard` | Omitted — the token name and use are recorded and no curve evidence is attributed | Two-way transitions |

The motion behavior in this paragraph — the reduced-motion rule and the motion character alike — is a derived editorial implementation inference from the verified surfaces; it is not FriendliAI-authored or a separately published UI specification. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the product remains fully functional. Motion is otherwise functional and quiet: buttons answer a press with a subtle opacity or scale shift, feature and benchmark panels fade in from below at `motion-standard`, the ambient-glow spotlight card may intensify its glow slightly on hover, and nothing bounces or springs.

The three exact cubic-bezier curves carry no attribution in this record and stay omitted rather than promoted. Do not promote an easing curve, an animation name, a CSS transition property, or a duration beyond the table above until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. Any exact animation curve remains a local extension until that per-component computed observation exists.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The rows below sort this record's font evidence into classes. The sorting is a derived editorial implementation inference from the verified surfaces; it is not FriendliAI-authored or a separately published UI specification. The observation inside each row stands on its own.

| Evidence class | Resolution |
|---|---|
| Official product-use | This record's evidence is live inspection of two web surfaces; it carries no FriendliAI-published type specification. |
| Live computed surface-use | The homepage computes visible text through the stack this record names `Saans`, served as `SaansLocalFont` with a local fallback. The record states one family across every text role rather than recording a separate computed family for the blog surface. |
| Official distributed asset | The record establishes the family in use and carries no FriendliAI-distributed font file. |
| Declared-only | The record lists no declared-but-unused family for these surfaces. |
| License | No license or distribution statement accompanies the family in this record. |
| Outside these captures | The product dashboard and the developer-documentation guide contributed no type value here. |

### Family

- **Current visible UI family:** `Saans`, served as `SaansLocalFont` with a local fallback
- On both captured surfaces a single family covers hero, navigation, body, and UI text alike; no second family is computed for display type.
- Do not substitute a system font or another grotesk for Saans and present it as the brand face. Saans is the family this record names for visible use, and the served face behind that name is `SaansLocalFont` with a local fallback; what the two names leave unresolved is stated under Named gaps.

### Type roles

| Role | Font | Size | Weight | Line height | Notes |
|---|---|---:|---:|---:|---|
| Display Hero | Saans | 56px (3.50rem) | 650 | 1.10 | Hero H1 `The Frontier AI Inference Cloud` |
| Blog Title | Saans | 36px (2.25rem) | 600 | 1.20 | Blog article headline |
| Hero Subhead | Saans | 22px (1.38rem) | 530 | 1.30 | Muted-slate `#486581` supporting line |
| Nav Item | Saans | 15px (0.94rem) | 500 | 1.40 | Top navigation links |
| Body | Saans | 16px (1.00rem) | 400 | 1.55 (24.8px) | Standard reading text |
| Button | Saans | 14px (0.88rem) | 530 | — | Call-to-action and button labels |
| Tag | Saans | 13px (0.81rem) | 500 | — | Blog topic-tag pills |

The following type-hierarchy readings are a derived editorial implementation inference from the verified surfaces; they are not FriendliAI-authored or a separately published UI specification. Hierarchy is built from size and variable weight rather than from swapping typefaces; the interpolated weights rather than the default rungs are the system's typographic signature; the cool near-black body color matches the rest of the palette's temperature; and the 16px body at a 1.55 line height keeps long technical paragraphs readable.

### Assets

- Product and architecture diagrams sit inside `#ffffff` cards with `1px solid #d9e2ec` borders.
- Observed blog topic-tag labels: `GLM-5.2`, `Inference`, `NVIDIA`.
- This record establishes no FriendliAI-published logo or illustration file. The diagrams above are first-party page content.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The live inspection recorded default computed styles, plus one additional observed state: the active top-navigation item at `#2453ba`. Hover, button press, and focus rings are named in this record's motion rules, but no computed value accompanies them, so those visual treatments are omitted here.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control's product role, not its primitive kind. This is not a complete state-coverage claim.

The Feature Card, Elevated Spotlight Card, Topic Tag Pill, and HIGHLIGHTS Badge have recorded geometry and no interactive-kind evidence, so kind and a state-applicability map are omitted for them rather than assumed.

### State treatments

The nine state treatments below are a derived editorial implementation inference from the verified surfaces; they are not FriendliAI-authored or a separately published UI specification. They compose values established elsewhere in this contract, and no computed per-component observation accompanies them.

| State | Treatment |
|---|---|
| Empty (no endpoints yet) | `#ffffff` card on the `#f7f8fa` canvas. A single Ink Navy `#0a101a` line explaining that no endpoints exist, with one `#2a62db` `Get started` call to action. No decorative illustration. |
| Empty (no results, blog search) | Muted Slate `#486581` single line stating nothing matched, with the 360px search field kept visible so the query can be adjusted. |
| Loading (dashboard first paint) | Skeleton blocks at final dimensions in Hairline `#d9e2ec` on the white card, 32px radius preserved. Flat pulse, no shadow shimmer. |
| Loading (inference request in flight) | Inline progress within the panel; previous values stay visible. A thin `#2a62db` indicator, never a full-screen block. |
| Error (request failed) | Inline message in Ink Navy with a plain-language explanation plus the concrete error or status and a retry. Not a generic `Something went wrong` alone. |
| Error (form validation) | Field-level message below the input, describing what is valid rather than only `Required`. |
| Success (endpoint deployed) | Brief inline confirmation in a calm tone, with the endpoint detail and metrics linked immediately below. No celebratory emoji. |
| Skeleton | `#d9e2ec` blocks at final dimensions, matching card radius, flat pulse consistent with the near-flat system. |
| Disabled | Faint Grey `#a7adb2` text on a reduced-opacity surface; the blue call to action fades rather than turning grey, preserving the brand read. |

### Get Started (Primary)

- Role: header and hero primary call to action
- Type: button
- Kind: interactive
- Anatomy: label
- Label: `Get started`
- Background: `#2a62db`
- Text: `#ffffff`
- Radius: 4px
- Padding: 0px 12px
- Height: 32px
- Font: 14px / 530 / Saans
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Computed on the homepage |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Button control; visual treatment omitted |
| loading | applicable | The control commits the sign-up step; visual treatment omitted |
| error | applicable | The committed step can fail and report on this control; visual treatment omitted |
| success | applicable | The committed step can confirm on this control; visual treatment omitted |

### Talk to an Engineer (Secondary)

- Role: secondary header call to action, sitting beside the primary blue button
- Type: button
- Kind: interactive
- Anatomy: label
- Label: `Talk to an engineer`
- Background: `#ffffff`
- Text: `#000000`
- Radius: 4px
- Padding: 0px 12px
- Height: 32px
- Font: 14px / 530 / Saans
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Computed on the homepage |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Button control; visual treatment omitted |
| loading | applicable | The control commits a contact request; visual treatment omitted |
| error | applicable | The committed request can fail and report on this control; visual treatment omitted |
| success | applicable | The committed request can confirm on this control; visual treatment omitted |

### Log in (Quiet)

- Role: lowest-emphasis text link in the header
- Kind: interactive
- Anatomy: label
- Label: `Log in`
- Text: `#537696`
- Radius: 4px
- Padding: 0px 4px
- Height: 32px
- Font: 14px / 530 / Saans
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Computed on the homepage header |
| hover | applicable | Pointer-web link; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A header entry point can be unavailable; visual treatment omitted |
| loading | not-applicable | A header destination link sends the reader to another surface; the link itself commits no operation that pends |
| error | not-applicable | A destination link reports no request or validation failure of its own |
| success | not-applicable | Arriving at the destination is navigation, not an action-outcome confirmation on the link |

### Search (Pill)

- Role: blog search field with a leading search icon
- Type: input
- Kind: interactive
- Anatomy: value field
- Label: `Search blogs`
- Background: `#ffffff`
- Border: 1px solid `#d9e2ec`
- Radius: 360px
- Padding: 9px 40px
- Font: 14px / Saans
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Computed on the blog surface |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Input control; visual treatment omitted |
| loading | applicable | The field submits a query that runs; visual treatment omitted |
| error | applicable | Form field; visual treatment omitted |
| success | applicable | Form field; visual treatment omitted |

### Top Navigation Item

- Role: item in the top horizontal navigation
- Type: tab
- Kind: interactive
- Anatomy: label
- Background: `#ffffff`
- Text: `#0a101a`
- Font: 15px / 500 / Saans
- Items: `Product`, `Solutions`, `Models`, `Developers`, `Customers`, `Company`, `Pricing`
- Observed: default; active item text `#2453ba`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Computed on both captured surfaces |
| hover | applicable | Pointer-web navigation item; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A navigation entry can be unavailable; visual treatment omitted |
| loading | not-applicable | The item moves the reader to another area; the item itself commits no operation that pends |
| error | not-applicable | Active versus inactive is the item's whole meaning; it reports no request or validation failure |
| success | not-applicable | Reaching a destination area is navigation, not an action-outcome confirmation on the item |

Additional observed state: active — text `#2453ba`.

### Feature Card

- Role: feature card in the homepage grid
- Type: card
- Kind: omitted. The record establishes geometry and no interactive-kind evidence, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: `#ffffff`
- Border: 1px solid `#d9e2ec`
- Radius: 32px
- Padding: 32px
- Shadow: none
- Title text: `#0a101a`; body text: `#6e7a84`

### Elevated Spotlight Card

- Role: a single elevated card spotlighting a headline result
- Type: card
- Kind: omitted. The record establishes geometry and no interactive-kind evidence, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: `#ffffff`
- Radius: 5px
- Padding: 30px
- Shadow: `rgba(0,0,0,0.25) 0px 0px 35px 0px`

### Topic Tag Pill

- Role: blog topic tag
- Type: badge
- Kind: omitted. The record establishes geometry and no interactive-kind evidence, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: `#ffffff`
- Text: `#243b53`
- Border: 1px solid `#d9e2ec`
- Radius: 360px
- Padding: 4px 12px
- Font: 13px / 500 / Saans

### HIGHLIGHTS Badge

- Role: dark section label on the blog
- Type: badge
- Kind: omitted. The record establishes geometry and no interactive-kind evidence, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Label: `HIGHLIGHTS`
- Background: `#0a101a`
- Text: `#ffffff`
- Radius: 360px
- Padding: 4px 12px
- Font: 14px / 500 / Saans

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

### Spacing and container

The recorded spacing scale runs 4px, 8px, 12px, 16px, 24px, 30px, 32px, 48px on a 4px base unit. The hero is a centered single column anchored by the 56px headline with the muted subhead beneath it. Feature sections use a multi-column grid of 32px-radius `#ffffff` cards on the `#f7f8fa` canvas. A sticky top announcement banner in `#0095ff` rides above the navigation for launch news. Dark immersive sections use `#102a43` and `#243b53` backgrounds with white text. The primary `Get started` button sits right-aligned in the top navigation.

The following whitespace reading is a derived editorial implementation inference from the verified surfaces; it is not FriendliAI-authored or a separately published UI specification. The cool-grey canvas keeps the page quiet while content is pulled into white cards, sections separate with hairlines rather than heavy shadow, and the single ambient glow appears only on a spotlight card so elevation reads as intentional emphasis.

### Responsive behavior

The breakpoint table and the collapsing rules below are a derived editorial implementation inference from the verified surfaces; they are not FriendliAI-authored or a separately published UI specification. The two inspections that produced the values in this contract were taken at one desktop viewport.

| Name | Width | Key changes |
|---|---|---|
| Mobile | <640px | Single column, hero compresses, feature cards stack, navigation collapses to a menu |
| Tablet | 640-1024px | 2-column feature grid, moderate padding |
| Desktop | 1024-1440px | Full multi-column layout, centered hero, sticky announcement banner |

- Hero: the 56px headline scales down on mobile with weight 650 maintained
- Feature cards: multi-column grid, then 2-up, then a single stacked column, 32px radius preserved
- Announcement banner: the full-width `#0095ff` bar persists and its text truncates
- Dark sections: keep the full-width `#102a43` and `#243b53` treatment with reduced internal padding
- Cards keep the 32px radius across breakpoints, and the spotlight card keeps its ambient glow at all sizes

### Touch targets

Primary and secondary buttons are 32px high with 12px horizontal padding. Tag pills and the search input use the full 360px radius. Navigation items are spaced within the header band.

<!-- design-md:section content-locales -->
## 6. Content & Locales

### Voice samples

These four strings are verbatim live copy from the homepage.

- `The Frontier AI Inference Cloud` — hero H1
- `Inference performance drives profitability` — hero subhead
- `GLM-5.2 is live. #1 throughput on OpenRouter` — announcement banner
- `Talk to an engineer` — secondary call to action

The throughput ranking in the banner is FriendliAI's own published claim about its service. It is reproduced here as brand copy, not as a verified benchmark, and nothing in this contract's color, type, geometry, or component values derives from it.

### Voice and tone

The voice reading below, including the tone table, is a derived editorial implementation inference from the verified surfaces; it is not FriendliAI-authored or a separately published UI specification. The register is precise, benchmark-driven, and developer-first: the hero line is declarative and category-claiming rather than hypey, the supporting line frames the pitch as a business outcome an engineer can defend to finance, and announcements name the exact model and the exact metric instead of reaching for adjectives.

| Context | Tone |
|---|---|
| Hero headline | Declarative, category-claiming. No superlatives. |
| Supporting line | Business-outcome framed. |
| Announcements | Concrete and comparative — names the model and the metric. |
| Calls to action | Direct, low-friction: `Get started`, `Talk to an engineer`. |
| Blog and technical | Engineer-to-engineer: benchmarks, model names, architecture, reproducible claims. |

### Forbidden register

The exclusions below are a derived editorial implementation inference from the verified surfaces; they are not FriendliAI-authored or a separately published UI specification. Vague hype such as `revolutionary` or `game-changing`; unquantified performance claims; consumer-app exclamation; sales-gated basic functionality, for example `Request a demo` standing in place of `Get started`; and stacked adjectives on capabilities.

### Locale

FriendliAI is a Korean company and its name is written `프렌들리에이아이` in Korean. All copy recorded from the two captured surfaces is English.

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

- the exact `ease-enter`, `ease-exit`, and `ease-standard` curves; the token names and uses are recorded, the curves carry no attribution
- hover, button-press, and focus-ring visual treatments, which the motion rules name without any accompanying value
- the interactive kind of the Feature Card, Elevated Spotlight Card, Topic Tag Pill, and HIGHLIGHTS Badge
- the license and distribution terms for `Saans`, the family this record establishes as the one in use
- computed per-component values behind the empty, loading, error, success, skeleton, and disabled treatments described above
- dark-section component values beyond the `#102a43` and `#243b53` fills with white text
- the family name to record for visible UI. This record names the typeface `Saans` and describes it as served as `SaansLocalFont` with a local fallback, while the computed stack behind that name reads `SaansLocalFont, "SaansLocalFont Fallback"` and never contains the token `Saans`. Neither name is selected over the other: they name one face at two levels, a typeface and a served stack. Nothing here establishes which system family, if any, sits behind the fallback face, and the blog surface carries no computed family value of its own.
