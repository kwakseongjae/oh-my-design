# Millie Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Millie (밀리의서재) is a Korean reading-subscription platform. Catalog homepage identity is `https://www.millie.co.kr`. Catalog `primary_color` is `#242424`. This contract covers two first-party public surfaces the source inspected: the public home at `https://www.millie.co.kr/` and the B2B marketing page at `https://www.millie.co.kr/v4/brand/b2b`. Official company material at `https://company.millie.co.kr/business/`, the tenth-anniversary site at `https://10th.millie.co.kr/`, and the careers page at `https://company.millie.co.kr/careers/` are named narrative sources; they do not supply the computed interface tokens below. Pretendard upstream README and LICENSE describe the font asset and SIL Open Font License 1.1; Millie use is established separately by the supplied computed, loaded, and source evidence. Every value stays attached to the surface that established it. Treating those two inspected public URLs as this contract's token surfaces, keeping the company, tenth-anniversary, and careers URLs as named narrative sources that do not supply computed interface tokens, keeping Pretendard upstream material as font-asset and licence evidence rather than as Millie runtime proof by itself, and keeping every value attached to the surface that established it, are derived editorial implementation inferences from the verified surfaces; they are not Millie-authored or a separately published UI specification.

The supplied public capture is much narrower than that product story: it covers Millie’s public home and a B2B marketing page, not a signed-in library, checkout, reader, or native app. On those surfaces the source records near-black `#242424` text, white page planes, a subtle `#F7F7F7` skeleton surface, and a loaded Pretendard Variable webfont. The home’s large editorial imagery and translucent carousel controls make content imagery the strongest visible accent; the capture does not establish a universal brand-CTA color. Millie’s tenth-anniversary site frames the service’s current ambition as making reading an ordinary part of daily life. That narrative helps explain the public surfaces’ calm, content-led presentation, but does not turn the anniversary site’s event colours into home-product tokens. The B2B route is a public sales surface for employer reading benefits, and its yellow call to action remains route-local rather than a consumer product rule. The hex values, the loaded family, the two named routes, the tenth-anniversary ambition line, the B2B employer-reading-benefits positioning, and the capture-boundary sentence are the source’s own. Readings of that layer as quiet and typographic, of content imagery as the strongest visible accent, of the anniversary narrative as helping explain a calm content-led presentation, and of the yellow B2B call to action as route-local rather than a consumer product rule, are derived editorial implementation inferences from the verified surfaces; they are not Millie-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. Millie’s official tenth-anniversary page says the company was founded in 2016 and began an e-book subscription service, asking how reading could become more enjoyable. Its official company material says it began an e-book subscription service in 2016 and has expanded into a catalogue spanning e-books, audio formats, chat books, web novels, and webtoons. Its company business page describes the present platform as offering 240,000 reading-content titles across e-books, audio formats, chat books, web novels, and webtoons (figures stated there as of May 2026). Together, these sources describe an expansion from subscription e-books to a wider digital-reading catalogue. The supplied public capture shows only a home surface and B2B marketing page within that story. It does not establish the design of the signed-in library or reader. The public visual record here is therefore deliberately limited to content-led home chrome, a B2B marketing treatment, and the loaded webfont evidence. The careers page describes people working across customer experience, service planning, content, design, development, marketing, and operations. This is organisational context, not evidence of internal tool UI. The years, the founding and catalogue-expansion sentences, the 240,000 figure as of May 2026, the asking-how-reading-could-become-more-enjoyable line, each paragraph’s last sentence, and the careers-page boundary are the source’s own narrative facts; they do not by themselves supply interface tokens. Classifying that founding-and-catalogue narrative as context that does not by itself supply interface tokens, and keeping each source paragraph’s last sentence as one unit with the paragraph it closes, are derived editorial implementation inferences from the verified surfaces; they are not Millie-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product's primary tasks, each naming a captured public-home or B2B-marketing surface or control, and recording that they do not come from the source's stakeholder-group section, is a derived editorial implementation inference from the verified surfaces; it is not Millie-authored or a separately published UI specification.

- Browse the public home’s large editorial imagery and home hero carousel on `https://www.millie.co.kr/`.
- Use the compact home utility button on the public home.
- Review employer reading benefits on the B2B marketing page at `https://www.millie.co.kr/v4/brand/b2b`.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source’s §13 header states, verbatim: “These are first-party stakeholder groups, not fictional personas.” Those three entries — including their motivations and affiliation classifications — are dropped rather than promoted, and are not re-hosted in the sidecar. No name, age, or city was present to drop. Captured surfaces name a public home and a B2B marketing page for employer reading benefits. Those surface names, not the dropped entries, bound this contract. Dropping those three entries rather than promoting their group labels, carrying no motivation or affiliation classification, and reading the captured public home and B2B marketing page as the audience bound rather than as a restatement of the dropped entries, are derived editorial implementation inferences from the verified surfaces; they are not Millie-authored or a separately published UI specification.

### Distinctive traits

The list restates the source’s own Key Characteristics. The values in them are recorded; the groupings and the readings inside them are a derived editorial implementation inference from the verified surfaces; they are not Millie-authored or a separately published UI specification.

- Near-black `#242424` is the most frequent observed text and border colour across both supplied routes.
- White canvas and `#F7F7F7` skeleton/card treatment keep the chrome restrained around editorial content.
- Pretendard Variable is visibly used and backed by loaded, Millie-hosted subset files.
- Home carousel controls use translucent black overlays and strongly rounded geometry over imagery.
- No consumer reader, account, checkout, error, modal, hover, pressed, disabled, or responsive state is established by this capture.

### Principles

These 4 items are a derived editorial implementation inference from the verified surfaces; they are not Millie-authored or a separately published UI specification. The numbered stems rest on official anniversary and company material recorded by the source. Every *UI implication* below is the source’s own editorial reading, not taken from a separately published Millie UI specification.

1. **Make reading approachable.** Millie’s anniversary material emphasizes making reading part of ordinary life. *UI implication:* public discovery copy can be welcoming and direct, but unobserved reader interactions remain unspecified.
2. **Let content explain breadth.** The company describes multiple reading and listening formats. *UI implication:* do not collapse that editorial breadth into an invented generic book-card system.
3. **Separate service audiences.** B2B benefits and public consumer discovery share a brand but are different source domains. *UI implication:* the yellow B2B CTA must not become a universal consumer control.
4. **Preserve evidence boundaries.** Font, colour, and component claims require their own surface provenance. *UI implication:* do not use company narrative or upstream licence text to fill missing UI states or tokens.

### Application rules

The source states these four as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not Millie-authored or a separately published UI specification.

- Keep `#242424`, white, `#F7F7F7`, and `#6F6F6F` tied to their recorded public-surface roles.
- Use Pretendard Variable only where its computed, loaded, and source evidence supports it.
- Preserve translucent, fully rounded carousel controls as home-hero specimens.
- Keep B2B benefit cards and the yellow HubSpot CTA explicitly separate from consumer product claims.

### Avoid

The source states these four as its Don't list. The fifth restates a brand constraint unique to the source’s Agent Prompt Guide. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not Millie-authored or a separately published UI specification.

- Restore the prior blue CTA or promotional palette without current selector-level evidence.
- Promote declared Noto Serif, icon, fallback, or unresolved font observations into a UI family.
- Generate reader, checkout, search, library, subscription, or mobile-app components from this public marketing capture.
- Invent hover, focus, pressed, disabled, error, loading, toast, modal, or responsive states.
- Do not use this evidence to generate a signed-in reading or payment flow. Do not add interaction states.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Each role below pairs a name with the value and the use the source records. Token-set keys follow the YAML paths. Pairing each hex to the token-set path named beside it, keeping `tokens.colors.canvas` `#FFFFFF` unmerged from compact-home-utility text `#FFFFFF` and from pagination-control text `#FFFFFF`, keeping `tokens.colors.ink` `#242424` unmerged from the home-hero overlay `rgba(0,0,0,0.3)` and from compact-home-utility background `#333333`, keeping that compact-home-utility fill as that control’s fill rather than as a YAML color key, keeping `#FEF08C` on the B2B campaign action rather than as a YAML color key, keeping the YAML token note as the facts it names, and refusing to promote the prior `#1B6DDA` “reading blue,” coral, yellow, inferred semantic palette, or a single low-frequency `#A451F7` home observation into reusable public product roles, are derived editorial implementation inferences from the verified surfaces; they are not Millie-authored or a separately published UI specification. The hex values and recorded uses are the source’s own.

YAML token note, kept as the facts it names: only values with supplied computed-style provenance are machine tokens. The capture did not establish a universal accent color, application state system, or native reader UI.

- **Primary ink** (`#242424`): `tokens.colors.ink`; high-confidence computed text and border colour on the public home and B2B route. Catalog identity `primary_color` is `#242424`.
- **Canvas** (`#FFFFFF`): `tokens.colors.canvas`. High-confidence public page and B2B list-card surface.
- **Subtle surface** (`#F7F7F7`): `tokens.colors.surface-subtle`. Observed on the home `skeleton__SkeletonCard` specimen.
- **Muted text** (`#6F6F6F`): `tokens.colors.muted`. Observed home secondary copy.
- **Divider / pale surface** (`#ECECEC`): `tokens.colors.divider`. Observed home background occurrence; its precise component role was not captured.

Home-hero overlay `rgba(0,0,0,0.3)` is observed only on the carousel play and pagination controls. B2B campaign action `#FEF08C` is observed only on `surface-2::[data-omd-capture="1"]`; it is marketing-route evidence, not a universal product CTA token. Compact home utility background `#333333` is that control’s fill, not a YAML color key.

The prior `#1B6DDA` “reading blue,” coral, yellow, and inferred semantic palette are not retained as current machine tokens: the supplied 2026 capture does not corroborate them as reusable public product roles. A single low-frequency `#A451F7` home observation is likewise insufficient to promote a brand-accent token.

### Spacing

The source YAML records no `tokens.spacing` keys, and none are supplied here. Isolated measurements stay on the surfaces and controls that established them: 12px gaps on some article rows; compact-home-utility padding `0px 12px`; play-control padding `8px`; pagination-control padding `4px 10px`; skeleton-card padding `45px 24px 30px`; benefit-card padding `16px 24px`. Keeping those isolated measurements on the surfaces and controls that established them, and supplying no `tokens.spacing` keys rather than synthesizing a scale, are derived editorial implementation inferences from the verified surfaces; they are not Millie-authored or a separately published UI specification.

### Shape

Token-set path `tokens.rounded`, unitless steps as the YAML recorded them.

| Step | Value | Token-set path |
|---|---:|---|
| utility-button | 4 | `tokens.rounded.utility-button` |
| carousel-pagination | 100 | `tokens.rounded.carousel-pagination` |

Source §4 writes the same two steps as `4px` on the compact home utility button and `100px` on the play and pagination controls. YAML unitless `4` / `100` stay beside those `4px` / `100px` writings; neither was chosen as a replacement. Hero-slide radius `20px`, skeleton-card radius `16px`, benefit-card radius `10px`, and B2B campaign-action radius `4px` are those controls’ radii; they are not YAML rounded keys. `tokens.rounded.utility-button: 4` is not the B2B campaign-action `4px`. `tokens.rounded.carousel-pagination: 100` is not a spacing step. Keeping the two YAML steps as two keys, keeping the longer §4 px writings beside them, and keeping hero / skeleton / benefit / B2B-campaign radii on those controls rather than inventing rounded keys for them, are derived editorial implementation inferences from the verified surfaces; they are not Millie-authored or a separately published UI specification.

### Elevation

The public home controls and captured cards report no box shadow. The B2B campaign CTA alone carries `0px 4px 16px rgba(0,0,0,0.22)`. No modal, drawer, popover, menu, or cross-surface elevation scale was captured, so the B2B shadow is not generalized. Reading that B2B shadow as route-local campaign evidence rather than as a depth scale for every surface is a derived editorial implementation inference from the verified surfaces; it is not Millie-authored or a separately published UI specification.

### Motion

No duration, easing, autoplay timing, reduced-motion behaviour, or transition was supplied. The hero’s control markup does not establish carousel motion rules. No Millie motion token is specified.

An exact curve may be promoted for a component only after that component’s own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or specification document — does not satisfy that condition. Naming those five evidence kinds as the promotion gate, refusing a partial confirmation, and refusing a match against an official framework or specification document as that gate, are derived editorial implementation inferences from the verified surfaces; they are not Millie-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The rows below sort this record’s font evidence into the source’s own classes. The sorting, the official-distributed-font row as asset-and-licence evidence rather than as Millie runtime proof by itself, the unresolved `Pretendard` row as not merged with Pretendard Variable, and the declared-only row as not UI-family tokens or specimens, are derived editorial implementation inferences from the verified surfaces; they are not Millie-authored or a separately published UI specification. The observation inside each row stands on its own.

| Evidence class | Resolution |
|---|---|
| Live computed surface-use | `Pretendard Variable` appears in 176 visible public-surface observations across body, list, button, card, and heading roles. The supplied FontFaceSet reports it loaded with high confidence and 29 Millie CloudFront subset source URLs. It is the sole UI-family token in this reference. |
| Official distributed font and licence | The upstream Pretendard documentation describes its variable webfont distribution, and its upstream LICENSE is SIL Open Font License 1.1. Those sources describe the font asset and licence; Millie use is established separately by the supplied computed, loaded, and source evidence. |
| Declared-only | `__notoSerif_ef2586`, `__notoSerif_Fallback_ef2586`, `icon`, `Pretendard Fallback`, `Pretendard Fallback Android`, and `swiper-icons` were declared with zero visible use. They are not UI-family tokens or specimens. |
| Unresolved computed observation | One visible `Pretendard` computed observation has no matching loaded FontFace/source corroboration. It remains unresolved rather than being merged with Pretendard Variable. |

Do not render a declared Noto Serif, icon font, fallback family, or the uncorroborated `Pretendard` observation as an observed Millie product font.

### Family

- **Current visible UI family:** `Pretendard Variable`. Token-set path `tokens.typography.family.sans`.
- Do not replace unavailable or unobserved brand type with Pretendard Variable. It is canonical here only because computed visible use and loaded FontFace/source evidence agree. Do not merge the unresolved `Pretendard` observation into this family. Reading Pretendard Variable as the sole UI-family token because computed, loaded, and source evidence agree, refusing to merge the unresolved `Pretendard` observation into that token, and refusing to replace unavailable or unobserved brand type with that family, are derived editorial implementation inferences from the verified surfaces; they are not Millie-authored or a separately published UI specification.

### Type roles

Token-set `use` strings are kept verbatim. The longer §3 spellings sit beside them; neither was chosen as a replacement. YAML `lineHeight` stays the unitless ratio the YAML recorded; parenthetical px figures are the source §3 spelling. YAML sizes are unitless `14` / `44` / `28` / `12`; source §3 writes `14px` / `44px` / `28px` / `12px`. Both writings stay. Compact-home-utility, play-control, pagination-control, and B2B campaign-action `16px` / `12px` fonts stay on those controls; they are not extra YAML type-role keys. Keeping the YAML `use` strings verbatim, keeping the YAML singles and the §3 longer spellings on separate readings, refusing to flatten a unitless ratio into a replacement px, keeping B2B heading metrics on the B2B route, keeping control `16px` fonts on those controls rather than inventing a YAML 16px type role, keeping `tokens.typography.utility.size` `12` unmerged from the 12px article-row gap and from the `0px 12px` utility padding, and keeping `tokens.typography.body.size` `14` unmerged from the benefit-card `14px` font, are derived editorial implementation inferences from the verified surfaces; they are not Millie-authored or a separately published UI specification.

| Role | Font | Size | Weight | Line height | Token-set use | Surface provenance |
|---|---|---:|---:|---:|---|---|
| Body / list text | Pretendard Variable | YAML `14` / §3 `14px` | 400 | `1.7143` (`24px`) | Observed public home body and list text. | Public home text/body specimens |
| Large B2B heading | Pretendard Variable | YAML `44` / §3 `44px` | 700 | `1.2273` (`54px`) | Observed public B2B heading specimen. | Public B2B body specimen |
| B2B section heading | Pretendard Variable | YAML `28` / §3 `28px` | 700 | `1.3571` (`38px`) | Observed public B2B section heading specimen. | Public B2B `h2` specimen |
| Compact home utility | Pretendard Variable | YAML `12` / §3 `12px` | 400 | `1.5` (`18px`) | Observed compact home utility button. | `home::[data-omd-capture="10"]` |

Token-set paths: `tokens.typography.body` · `tokens.typography.heading-xl` · `tokens.typography.heading` · `tokens.typography.utility`. YAML field paths: `tokens.typography.body.size` `14` · `tokens.typography.body.weight` `400` · `tokens.typography.body.lineHeight` `1.7143` · `tokens.typography.heading-xl.size` `44` · `tokens.typography.heading-xl.weight` `700` · `tokens.typography.heading-xl.lineHeight` `1.2273` · `tokens.typography.heading.size` `28` · `tokens.typography.heading.weight` `700` · `tokens.typography.heading.lineHeight` `1.3571` · `tokens.typography.utility.size` `12` · `tokens.typography.utility.weight` `400` · `tokens.typography.utility.lineHeight` `1.5`. `tokens.typography.heading-xl` and `tokens.typography.heading` stay on the public B2B route. `tokens.typography.body` and `tokens.typography.utility` stay on the public home.

### Assets

- Catalog identity records `logo.type: favicon` and `logo.slug: https://www.google.com/s2/favicons?domain=millie.co.kr&sz=128`. That is a third-party favicon proxy URL held as catalog identity metadata; it is not a first-party distributed Millie brand asset, and it is not promoted to one here.
- Home editorial imagery is first-party content on the captured public home; do not replace it with invented brand-color decoration.
- Pretendard’s upstream project publishes it under SIL Open Font License 1.1; this describes the font asset, not a Millie brand asset.

Classifying the Google s2 slug as an identity pointer rather than a hosted brand file, treating home editorial imagery as first-party content rather than as a mark library, and reading the Pretendard licence as an upstream font-asset boundary rather than as a Millie brand asset, are derived editorial implementation inferences from the verified surfaces; they are not Millie-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source state contract, preserved here while the catalog graph is not adopted: no state system is established. The raw capture records zero interaction expansions and zero observed states. It includes elements whose class names contain `skeleton`, but does not record a loading event, timing, animation, or transition; they are documented below as captured shells only. Hover, focus, pressed, disabled, error, success, empty, toast, dialog, and reader-progress states remain unresolved.

The capture has `interactionCount: 0`, `interactionKinds: 0`, and no recorded state variants. No hover, focus, pressed, disabled, error, dialog, menu, toast, input, search, subscription, reader, or card interaction state is specified.

The prior reference’s blue CTA system, content-tag palette, inferred inputs, book cards, shadows, states, motion, and reader flows were not corroborated by the supplied current capture and have been removed rather than carried forward as plausible defaults.

YAML `tokens.components` is empty and `components_harvested` is `false`. A `Primitive type` line is attached only when the source YAML records that type on that component; none of the seven records below is in the token set. Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow each control’s product role rather than its primitive kind. Where the source supplies no interaction evidence for a shell or list card, kind and a state-applicability map are both withheld. This is not a complete state-coverage claim. Preserving the source state contract here rather than delegating it to an unadopted catalog graph, the role-based decision procedure above, every interactive-kind verdict, every applicability verdict, the reason given for either, attaching no YAML primitive type, omitting kind and a map where interactive-kind is unconfirmed, treating skeleton class names as captured shells rather than as a loading-state event, and the refusal to treat this as a complete state-coverage claim, are derived editorial implementation inferences from the verified surfaces; they are not Millie-authored or a separately published UI specification.

### Home utility button

- Role: compact home utility specimen on the public home
- Primitive type: not in the token set · Kind: interactive
- Background: `#333333`
- Text: `#FFFFFF`
- Radius: `4px` (YAML `tokens.rounded.utility-button` `4`)
- Padding: `0px 12px`
- Font: `12px / 400 / Pretendard Variable`
- Size: `80px × 32px` in the supplied home capture
- Use: `home::[data-omd-capture="10"]`, class `button__Button-sc-746c0757-0 HMzlI button`
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured default on the public home |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A utility button can be gated; visual treatment omitted |
| loading | not-applicable | The source records a compact home utility specimen and does not record a commit operation on this control |
| error | not-applicable | Same role: this specimen is not an in-place operation that reports failure on itself |
| success | not-applicable | Same role: this specimen is not an in-place operation that reports success on itself |

### Home hero play control

- Role: play control over the home hero
- Primitive type: not in the token set · Kind: interactive
- Background: `rgba(0,0,0,0.3)`
- Radius: `100px` (YAML `tokens.rounded.carousel-pagination` `100`)
- Padding: `8px`
- Font: `16px / 400 / Pretendard Variable`
- Size: `32px × 32px` over the home hero
- Use: `home::[data-omd-capture="21"]`, class `styled__PlayButtonContainer-sc-aeee1130-0 hNymXJ`
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured default over the home hero |
| hover | applicable | Pointer-web control; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A play control can be gated; visual treatment omitted |
| loading | not-applicable | A carousel play control toggles overlay playback; it does not commit an operation whose pending result this control would report |
| error | not-applicable | Same role: toggling playback is not an operation this control reports as failure |
| success | not-applicable | Same role: toggling playback is not an operation this control reports as success |

### Home hero pagination control

- Role: pagination control over the home hero
- Primitive type: not in the token set · Kind: interactive
- Background: `rgba(0,0,0,0.3)`
- Text: `#FFFFFF`
- Radius: `100px` (YAML `tokens.rounded.carousel-pagination` `100`)
- Padding: `4px 10px`
- Font: `16px / 400 / Pretendard Variable`
- Size: `76px × 32px` over the home hero
- Use: `home::[data-omd-capture="22"]`, class `styled__PaginationButtonContainer-sc-b710220-0 bcMcRo`
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured default over the home hero |
| hover | applicable | Pointer-web control; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A pagination control can be gated; visual treatment omitted |
| loading | not-applicable | A carousel pagination control selects a slide; it does not commit an operation whose pending result this control would report |
| error | not-applicable | Same role: selecting a slide is not an operation this control reports as failure |
| success | not-applicable | Same role: selecting a slide is not an operation this control reports as success |

### Home hero slide

- Role: hero slide on the public home
- Primitive type: not in the token set
- Radius: `20px`
- Size: `1392px × 400px` in the supplied desktop capture
- Use: `home::li`, class `styled__HeroBannerSwiperSlide-sc-e42f00ea-4 gvJwhy`
- Observed: default only

The source supplies no interaction evidence for this slide, so kind and a state-applicability map are both withheld. Withholding kind and a map because the source supplies no interaction evidence for this slide is a derived editorial implementation inference from the verified surfaces; it is not Millie-authored or a separately published UI specification.

### Home skeleton card

- Role: captured skeleton shell on the public home
- Primitive type: not in the token set
- Background: `#F7F7F7`
- Radius: `16px`
- Padding: `45px 24px 30px`
- Use: `home::div`, class `skeleton__SkeletonCard-sc-3613fd6a-1 gSdwRh`; five occurrences
- Observed: captured shell only

The raw class name is preserved as provenance, but the collector records no loading-state event, animation, or skeleton timing. The source supplies no interaction evidence for this shell, so kind and a state-applicability map are both withheld. Withholding kind and a map because the source supplies no interaction evidence for this shell is a derived editorial implementation inference from the verified surfaces; it is not Millie-authored or a separately published UI specification.

### B2B benefit card

- Role: benefit card on the B2B marketing page
- Primitive type: not in the token set
- Background: `#FFFFFF`
- Radius: `10px`
- Padding: `16px 24px`
- Font: `14px / 400 / Pretendard Variable`
- Use: `surface-2::li`; three B2B marketing-list occurrences
- Observed: default only

The source supplies no interaction evidence for this card, so kind and a state-applicability map are both withheld. This is route-local B2B marketing evidence, not a consumer or app card contract. Withholding kind and a map because the source supplies no interaction evidence for this card, and reading the card as route-local B2B marketing evidence rather than as a consumer or app card contract, are derived editorial implementation inferences from the verified surfaces; they are not Millie-authored or a separately published UI specification.

### B2B campaign action

- Role: B2B campaign action on the B2B marketing page
- Primitive type: not in the token set · Kind: interactive
- Background: `#FEF08C`
- Radius: `4px`
- Shadow: `0px 4px 16px rgba(0,0,0,0.22)`
- Font: `16px / 400 / Pretendard Variable`
- Size: `318px × 56px`
- Use: `surface-2::[data-omd-capture="1"]`, HubSpot CTA placeholder
- Observed: default only

This is route-local B2B marketing evidence, not a consumer or app button contract. Reading this action as route-local B2B marketing evidence rather than as a consumer or app button contract is a derived editorial implementation inference from the verified surfaces; it is not Millie-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured default on the B2B marketing page |
| hover | applicable | Pointer-web campaign action; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A campaign action can be gated; visual treatment omitted |
| loading | not-applicable | A HubSpot CTA placeholder opens a destination; it commits no operation in place |
| error | not-applicable | Destination role; the destination, not this control, reports failure |
| success | not-applicable | Same role: reaching that destination is not an operation this control reports as success |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The supplied capture is desktop evidence only. On the home route it records a `1392px × 400px` hero slide and 32px-high overlay controls; it also records 12px gaps on some article rows. The B2B page records 297px-wide benefit-list items and a `318px × 56px` CTA. These isolated measurements do not establish a universal grid, shelf layout, product-reader page, mobile breakpoint, or signed-in library composition.

No responsive viewport comparison was supplied. The desktop dimensions above must not be scaled into mobile, tablet, native-app, or e-ink-reader layout rules.

The `1392px × 400px` hero slide, 32px-high overlay controls, 12px article-row gaps, 297px-wide benefit-list items, and `318px × 56px` CTA stay on the surfaces that established them. Reading those figures as desktop-capture measurements rather than as a cross-viewport specification is a derived editorial implementation inference from the verified surfaces; it is not Millie-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Millie’s official tenth-anniversary material describes a decade spent making reading more enjoyable and ordinary; its B2B page frames the service as access to reading content and recommendations for employee benefits. That supports warm, direct, reading-oriented public copy, but does not establish a complete product microcopy system. The anniversary sentence, the B2B access-and-recommendations framing, and the source’s own “does not establish a complete product microcopy system” limit are the source’s own. Calling the supported public copy warm, direct, and reading-oriented is the source’s own “supports” reading; classifying that reading as source-grounded service framing rather than as a complete product-microcopy guide is a derived editorial implementation inference from the verified surfaces; it is not Millie-authored or a separately published UI specification.

| Context | Supported direction |
|---|---|
| Public reading discovery | Invite exploration in plain, encouraging language. |
| B2B benefit page | Explain access, content breadth, and workplace use directly. |
| Reader, account, payment, or error copy | Unresolved in this capture; do not manufacture a house voice. |

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

### Recorded unresolved decisions

These are named values the source already opened, not permissions to invent, and not a list of domains the source never established. That framing is a derived editorial implementation inference from the verified surfaces; it is not Millie-authored or a separately published UI specification.

- a universal brand-CTA color; the prior `#1B6DDA` “reading blue,” coral, yellow, and inferred semantic palette; a brand-accent token from `#A451F7`
- hover, focus, pressed, disabled, error, success, empty, toast, dialog, menu, input, search, subscription, reader, card-interaction, and reader-progress visual treatments
- a loading event, timing, animation, or transition on elements whose class names contain `skeleton`
- a universal grid, shelf layout, product-reader page, mobile breakpoint, or signed-in library composition
- modal, drawer, popover, menu, or cross-surface elevation scale
- duration, easing, autoplay timing, reduced-motion behaviour, transition, and carousel motion rules
- Reader, account, payment, or error copy; a complete product microcopy system
- a signed-in library, checkout, reader, or native app; consumer reader, account, or checkout components
