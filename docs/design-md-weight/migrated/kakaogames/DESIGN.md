# 카카오게임즈 Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

카카오게임즈 is a Korean publisher and developer that operates mobile, PC online, and console games across casual, subculture, and hardcore MMORPG genres. This contract covers the three first-party public surfaces the source inspected for tokens on 2026-07-13: the public homepage at `https://kakaogames.com/`, the public utility route at `https://kakaogames.com/error/`, and the official company profile at `https://kakaogames.com/en-us/about/`. The SUIT license page at `https://github.com/sun-typeface/SUIT/blob/main/LICENSE` is a named font-license source; it does not supply interface tokens. Every value stays attached to the surface that established it. This contract covers the observed Kakao Games public web shell. Reading those three inspected routes as this contract’s token surfaces, keeping values attached to the surface that established them, treating the SUIT license page as a named license source that does not supply interface tokens, and refusing to treat the public web shell as a proxy for an unobserved in-game interface, are derived editorial implementation inferences from the verified surfaces; they are not Kakao Games-authored or a separately published UI specification.

The public homepage expresses that broad catalogue through a high-contrast editorial shell: oversized black type, image-led game promotion, stark white hero copy, and restrained utility text instead of a persistent product-dashboard language. The captured interface layer is black-led public typography with white hero copy and quiet gray footer information, image-led homepage promotion paired with large category labels, and measured public marketing and error-surface values kept distinct from unobserved in-game interfaces. The hex values, the loaded SUIT Variable face, the 50px / 34px / 14px type roles, the 40px card-bottom spacing, the 0px square corners and news-item radius 4, and the default card and arrow geometry in this paragraph are recorded. Reading that layer as a high-contrast editorial shell rather than a product-dashboard language, and keeping the measured public-marketing and error-surface values distinct from unobserved in-game interfaces, are derived editorial implementation inferences from the verified surfaces; they are not Kakao Games-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. Kakao Games says it was founded in Korea in 2016 and has grown into a global comprehensive gaming company with offices in Europe, Japan, and other regions. Its stated operating scope combines publishing, development studios, and partnerships across mobile, PC online, and console games. Founded in Korea in 2016, the company’s current official account describes a global studio-and-partnership model rather than a single-platform game label. The current evolution documented by the company is expansion of its global development and publishing reach through studios and multiple platforms; the sources reviewed do not document a separate visual-identity rebrand. Its published mission, “Uniting the World Through Games,” positions games as cultural content that connects people across regions and environments. The company’s public account of its current direction emphasizes high-quality content for global users, varied genres, and expansion beyond a single platform. This narrative is company context, not proof of any unobserved visual token. The year 2016, the Korea founding, the offices in Europe, Japan, and other regions, the publisher-and-developer operating scope, the global studio-and-partnership model, the absence of a documented separate visual-identity rebrand, the mission sentence, the current-direction account, and that closing sentence are the source’s own narrative facts; they do not by themselves supply interface tokens. Classifying that founding-and-portfolio narrative as context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not Kakao Games-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=2 lang=en -->
### Primary tasks

Selecting these two as the product’s primary tasks is a derived editorial implementation inference from the verified surfaces; it is not Kakao Games-authored or a separately published UI specification. Each names a surface the source records. They do not come from the source’s persona section.

- Scan image-led title promotion on the public homepage at `https://kakaogames.com/`.
- Read the official company profile at `https://kakaogames.com/en-us/about/`.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its three entries as stakeholder archetypes derived from the company’s published audience and operating scope, not synthetic research personas, so those biographies are dropped rather than promoted, and no name, motivation, or affiliation classification is carried into this document or its sidecar. What the source independently records, in its own wording, is the audience at a group level: global users, and publishing, development studios, and partnerships. Reading those source-named groups as this product’s audience, and dropping the source’s archetype biographies rather than promoting them, is a derived editorial implementation inference from the verified surfaces; it is not Kakao Games-authored or a separately published UI specification.

### Distinctive traits

The list restates values the source records. The groupings and the readings inside them are a derived editorial implementation inference from the verified surfaces; they are not Kakao Games-authored or a separately published UI specification.

- A global games portfolio, not a single authenticated gameplay interface
- Black-led public typography (`#000000`) with white hero copy (`#ffffff`) and quiet gray footer information (`#898989`)
- Image-led homepage promotion paired with large category labels
- SUIT Variable as the only loaded, high-confidence family (224 observed uses)
- Square game-card geometry (radius 0px, padding `0px 0px 40px`, observed at 248px × 437px) and a 60px × 60px default-only hero arrow
- Measured public marketing and error-surface values kept distinct from unobserved in-game interfaces

### Principles

The source records four official-profile values. The company-authored names and the sentences that attribute them to the company are official-profile material. Every *UI implication* below, and the reading of those values as implementation principles for the captured public surfaces, is a derived editorial implementation inference from the verified surfaces; it is not Kakao Games-authored or a separately published UI specification.

1. **Challenge through new experiences.** The company describes innovation, technology, and new opportunities as ways to deliver distinctive gaming experiences. *UI implication:* do not translate this into an unverified novelty visual treatment.
2. **Connection across players and regions.** The official values describe global player community and listening to players. *UI implication:* keep locale, community, and accessibility decisions evidence-led per product surface.
3. **Expansion across genres and platforms.** The company presents a portfolio that reaches beyond one platform or genre. *UI implication:* do not force every title into one generic game UI pattern.
4. **Joyful creation.** The corporate-culture statement links team creativity and joy to player enjoyment. *UI implication:* use this as narrative context, not an invented component or motion rule.

### Application rules

The source states these four as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not Kakao Games-authored or a separately published UI specification.

- Keep public catalogue surfaces typographically direct and image-led.
- Use SUIT Variable only where the public-surface provenance is appropriate.
- Preserve the documented 40px card-bottom spacing and square corners for the captured game-card wrapper.
- Treat the 60px arrow as a default-only public control.

### Avoid

The source states these four as its Don’t list, plus two brand constraints that appear only in its Agent Prompt Guide. They are kept as its rules. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not Kakao Games-authored or a separately published UI specification.

- Do not recast browser-default blue links as a brand token.
- Do not substitute a system fallback and call it SUIT Variable.
- Do not use public homepage components as evidence for a game client, account system, store, or gameplay HUD.
- Do not invent hover, focus, pressed, disabled, error, or success styles from this capture.
- Do not generate in-game navigation, combat HUDs, account flows, store states, or interaction variants as though they were captured facts.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Each role below pairs a name with the value and the use the source records. Token-set keys keep the YAML lowercase hex. Calling `#000000` the dominant public ink, calling `#ffffff` hero-on-dark copy, calling `#898989` footer information, and refusing to promote the browser-default link blue as a Kakao Games brand color, are derived editorial implementation inferences from the verified surfaces; they are not Kakao Games-authored or a separately published UI specification.

- **Ink** (`#000000`): dominant observed public text and border color on all three supplied captures. Token-set key `tokens.colors.ink`.
- **Hero on dark** (`#ffffff`): observed homepage hero title and subtitle text. Token-set key `tokens.colors.hero-on-dark`. Token-set use: homepage desktop hero title only, on an existing dark or image field.
- **Footer muted** (`#898989`): observed footer information text. Token-set key `tokens.colors.footer-muted`. Token-set use: homepage footer information only.

The capture also exposes browser-default blue links (`#0000ee`) and transparent surfaces. Neither is promoted as a Kakao Games brand color: the first is not selector-backed brand treatment, and the second is not an opaque color token.

### Spacing

Token-set path `tokens.spacing`. The source records one step, not a scale:

| Step | Value | Token-set path |
|---|---:|---|
| card-bottom | 40 | `tokens.spacing.card-bottom` |

That 40 is the documented card-bottom spacing on the captured game-card wrapper (`0px 0px 40px`). It is not `tokens.rounded.news-item: 4`, and it is not a universal gutter. Treating this single step as the only spacing token the capture establishes, rather than a full spacing scale, is a derived editorial implementation inference from the verified surfaces; it is not Kakao Games-authored or a separately published UI specification.

### Shape

Token-set path `tokens.rounded`. Two keys, kept separate:

| Step | Value | Token-set path |
|---|---:|---|
| none | 0 | `tokens.rounded.none` |
| news-item | 4 | `tokens.rounded.news-item` |

`tokens.rounded.none: 0` is the square-corner record. It is also the captured game-card radius (`tokens.components.home-game-card.radius: 0`) and the hero-arrow radius (`tokens.components.home-hero-arrow.radius: 0`). `tokens.rounded.news-item: 4` is a separate key; it is not a second writing of the card, and it is not promoted into a news-item component. Treating 0px square corners and the news-item radius 4 as local recorded values rather than a universal radius scale, and refusing to promote the news-item radius into a news-item component, is a derived editorial implementation inference from the verified surfaces; it is not Kakao Games-authored or a separately published UI specification.

### Elevation

The representative homepage cards and controls have `box-shadow: none` in the supplied artifact. Token-set key `tokens.shadow.none` (`none`). No elevation scale, modal treatment, floating panel, or in-game overlay shadow is established. Reading that `none` as a flat treatment for the observed homepage cards and controls only is a derived editorial implementation inference from the verified surfaces; it is not Kakao Games-authored or a separately published UI specification.

### Motion

No duration, easing curve, transition property, or animation-state value is preserved in the supplied evidence. The homepage includes carousel-related controls, but the artifact contains zero interaction snapshots, so its motion behavior is omitted. No motion token is promoted. Omitting motion behavior and refusing to promote a motion token from carousel-related controls that have zero interaction snapshots, and holding the five-kind per-component promotion gate rather than treating a single official curve as sufficient, are derived editorial implementation inferences from the verified surfaces; they are not Kakao Games-authored or a separately published UI specification.

Promotion gate. Do not promote any duration, easing curve, transition property, animation name, or reduced-motion behavior until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or a single duration is not that gate. The homepage carousel-related controls remain default-only until that per-component computed observation.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The following evidence-class application readings are a derived editorial implementation inference from the verified surfaces; they are not Kakao Games-authored or a separately published UI specification.

| Evidence class | Resolution |
|---|---|
| Live computed surface-use | **SUIT Variable** is the only loaded, high-confidence family in the supplied artifact. It has 224 observed uses across body, button, card, heading, list-item, and text roles, with a matching jsDelivr source URL. It is a public homepage/error-surface fact, not evidence for game-client UI. |
| Official distributed asset and license | SUIT’s official repository licenses the font under SIL Open Font License 1.1. This establishes the font asset’s license boundary; it does not make SUIT a Kakao Games-owned typeface. |
| Declared-only | `swiper-icons` is declared in the artifact but has zero visible usage. It is not a token. |
| Fallback context | Apple system faces, AppleSDGothicNeo-Regular, Malgun Gothic, 맑은 고딕, dotum, and 돋움 occur after SUIT Variable in the captured declaration. They are fallbacks, never substitutes for SUIT. |
| Not found in reviewed sources | no official Kakao Games custom-font asset or in-game product-font declaration was found in the reviewed sources; none is inferred. The source names this evidence class Unresolved. |

### Family

- **Current visible UI family:** `SUIT Variable`. Token-set key `tokens.typography.family.ui`.
- Do not replace unavailable or unobserved brand type with a system fallback. Do not present Apple system faces, AppleSDGothicNeo-Regular, Malgun Gothic, 맑은 고딕, dotum, or 돋움 as SUIT Variable. That fallback-never-substitute reading is a derived editorial implementation inference from the verified surfaces; it is not Kakao Games-authored or a separately published UI specification.

### Type roles

YAML line heights stay unitless ratios (`1.2`, `1`, `1.4`) and are never rewritten as a replacement px (A1a). The observed hierarchy table records the matching computed spellings beside them: 60px on the hero, `normal` on the section title, 19.6px on the footer. Token-set `use` strings are restored verbatim. Keeping each role on the homepage selector and the YAML `use` string the source names rather than merging the three roles into one type ramp, and keeping the YAML line heights as unitless ratios rather than rewriting them as a replacement px, are derived editorial implementation inferences from the verified surfaces; they are not Kakao Games-authored or a separately published UI specification.

| Role | Family | Size | Weight | Line height | Tracking | Token-set use | Boundary |
|---|---|---:|---:|---|---:|---|---|
| Homepage hero | SUIT Variable | 50 | 700 | 1.2 (60px) | 0 | Homepage desktop hero title only. | `.title-main.only-pc` only |
| Homepage section title | SUIT Variable | 34 | 600 | 1 (`normal`) | 0 | Homepage section heading only. | `.section__title` only |
| Homepage footer info | SUIT Variable | 14 | 300 | 1.4 (19.6px) | 0 | Homepage footer information only. | `.footer-info__item` only |

Token-set paths: `tokens.typography.hero.size` / `weight` / `lineHeight` / `tracking` / `use`; `tokens.typography.section-title.*`; `tokens.typography.footer.*`.

### Assets

The catalog-boundary reading of the Google s2 favicon slug, and classifying the SUIT license URL as a font-asset license rather than a Kakao Games brand asset, are derived editorial implementation inferences from the verified surfaces; they are not Kakao Games-authored or a separately published UI specification. The slug itself and the SUIT license URL are source-stated.

- Catalog `logo` is recorded as a favicon slug: `https://www.google.com/s2/favicons?domain=kakaogames.com&sz=128`. That is a third-party favicon proxy URL held as catalog identity metadata; it is not a first-party distributed Kakao Games brand asset, and it is not promoted to one here.
- SUIT license: `https://github.com/sun-typeface/SUIT/blob/main/LICENSE` (SIL Open Font License 1.1). Font-asset license, not a Kakao Games brand asset.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source state contract, preserved here in full:

No visual empty, loading, error, success, skeleton, or disabled-state treatment is established by the supplied capture. The `/error/` route is a public utility surface, but it does not provide selector-backed error-component styling in this evidence bundle. Absence of a measured state is not a license to fill it with a generic pattern.

The supplied artifact records 19 variants but zero interaction kinds and zero interaction snapshots. It therefore retains measured default card and arrow geometry while omitting unobserved interactive states. Other captured rows and links remain list items unless actual button semantics were observed.

The following applicability note, the state map on the hero arrow, and the kind-omission on the static game card are a derived editorial implementation inference from the verified surfaces; they are not Kakao Games-authored or a separately published UI specification. Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted where this packet holds no value for that same canonical state. Absence of an observation is not a `not-applicable` reason. Loading, error, and success follow each control’s product role rather than its primitive kind. This is not a complete state-coverage claim.

The homepage game card is a static wrapper. The source supplies no interactive-kind evidence for that container, so its `Kind` and state-applicability map are omitted rather than decided.

### Homepage game card

- Role: static homepage game-card wrapper
- Primitive type: `card`
- Anatomy: wrapper
- Radius: 0px
- Padding: `0px 0px 40px`
- Observed: 248px × 437px
- Token-set use: `home::div.card`; static homepage game-card wrapper, observed at 248px × 437px.
- Token-set path: `tokens.components.home-game-card` (`type`, `radius`, `padding`, `use`)
- Observed: default only

### Homepage hero arrow

- Role: homepage hero previous-arrow control
- Primitive type: `button`
- Kind: interactive
- Anatomy: control
- Text: `#000000`
- Radius: 0px
- Padding: `0px`
- Height: 60
- Observed: Default only: 60px × 60px; the capture reports 0 interaction snapshots, so no hover, focus, pressed, disabled, or active value is recorded.
- Token-set use: `home::[data-omd-capture="1"]` (`.btn-arrow.btn-arrow--prev`) on the homepage hero.
- Token-set path: `tokens.components.home-hero-arrow` (`type`, `fg`, `radius`, `padding`, `height`, `states`, `use`)
- Token-set states: Default only: 60px × 60px; the capture reports 0 interaction snapshots, so no hover, focus, pressed, disabled, or active value is recorded.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured default on the homepage hero |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Button control; visual treatment omitted |
| loading | not-applicable | The hero previous-arrow advances a carousel; it commits no operation in place |
| error | not-applicable | The hero previous-arrow commits no operation in place |
| success | not-applicable | The hero previous-arrow commits no operation in place |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The public homepage uses a promotional hero followed by content modules rather than an application shell. The captured game-card wrapper measures 248px × 437px in one homepage variant and carries 40px bottom padding. No authenticated game-client grid, inventory layout, player profile arrangement, or responsive breakpoint is asserted.

The supplied evidence contains 1440px-wide captures only. It does not establish mobile typography, breakpoints, touch-target rules, carousel behavior, or game-client responsiveness. The 50px hero title, 34px section title, 14px footer, 60px arrow, and 248px × 437px card are measurements from that 1440px-wide homepage capture, not cross-viewport specifications. Reading the public homepage as a promotional hero followed by content modules rather than an application shell, reading the 1440px figure as capture width rather than a layout breakpoint, and keeping those measurements on the homepage capture that established them, are derived editorial implementation inferences from the verified surfaces; they are not Kakao Games-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The official company profile frames games as cultural content that can connect people across regions and describes its mission as “Uniting the World Through Games.” Its values center on challenge, connection, and expansion. That supports a global, energetic, and inviting corporate register; it is not a verified in-game localization or microcopy system. Calling that register global, energetic, and inviting, and refusing to treat the corporate mission as an in-game tone guide, are derived editorial implementation inferences from the verified surfaces; they are not Kakao Games-authored or a separately published UI specification.

| Do | Don't |
|----|-------|
| Lead with the game, platform, or community value. | Claim a player-facing phrase is official when it is not in a reviewed source. |
| Make global reach concrete through genres, platforms, or collaboration. | Reduce diverse titles to one genre or audience. |
| Keep corporate language clear and outward-looking. | Invent an in-game tone guide from the corporate mission. |

Illustrative, not official UI copy: “Discover a new world to play together.” · “Find your next adventure across platforms.” · “Share the game with players everywhere.” Classifying those three lines as illustrative samples rather than official UI copy is a derived editorial implementation inference from the verified surfaces; it is not Kakao Games-authored or a separately published UI specification. The source already marks them that way.

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

These decisions are unnamed values, not permissions to invent. Reading the list as a catalog of unnamed values rather than as coverage of domains the source never named is a derived editorial implementation inference from the verified surfaces; it is not Kakao Games-authored or a separately published UI specification.

- hover, focus, pressed, disabled, error, and success visual treatments
- mobile typography, breakpoints, touch-target rules, and carousel behavior
- game-client UI, account system, store, and gameplay HUD
- official Kakao Games custom-font asset and in-game product-font declaration
- duration, easing curve, transition property, and animation-state value
- elevation scale, modal treatment, floating panel, and in-game overlay shadow
- authenticated game-client grid, inventory layout, and player profile arrangement
