# Bilibili Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Bilibili describes itself as a leading video community for young generations in China, organised around users, high-quality content, creators, and the emotional bonds between them. This contract covers two current first-party product routes only: the product home at `https://www.bilibili.com/` (two 1440×900 snapshots) and the popular route at `https://www.bilibili.com/v/popular/all/` (one snapshot). These are current 1440×900 product observations, not reconstructions of the player, mobile app, marketing campaign, or corporate-site chrome.

The supplied 2026-07-13 desktop snapshots express that proposition as a dense, content-first feed: a `#f1f2f3` page ground holds repeated video-card covers, white statistics text crosses the lower cover edge, titles sit in `#18191c`, and owner/date metadata recedes to `#9499a0`.

The corporate record says the website launched in June 2009, took the name “bilibili” in January 2010, and has expanded across varied video interests. It also names “All the Videos You Like” as the brand proposition and identifies bullet chatting as a signature engagement feature. Those first-party facts explain why a repeatable video-card/feed pattern and visible creator metadata belong in this reference. They do not establish colour tokens, player controls, motion, or state variants beyond what this capture recorded.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

- Browse the product-home video-card feed.
- Search from the home navigation field.
- Read a video title, owner, and date on a card.
<!-- design-md:claim-end -->

### Audience

These are evidence-bounded stakeholder groups, not fictional people or behavioural research findings. No individual demographic, task flow, or device preference is asserted.

- **Young-generation video community member.** Bilibili identifies young generations in China as its core audience and describes interest-based sub-communities.
- **Content creator.** The corporate narrative identifies talented creators as one of the community’s pillars. This packet does not establish a creator-tool UI.
- **Interest-led viewer.** Official material names varied video interests, including games, entertainment, anime, and technology/knowledge. The current product-home evidence only supports the feed-card context, not a persona-specific experience.

### Distinctive traits

- Neutral product-home palette: `#f1f2f3` page/skeleton ground, `#ffffff` surface and overlay text, `#18191c` foreground, `#9499a0` metadata
- Repeated 248px × 140px video-card covers with 6px corners and a 13px statistics strip
- A system-resolved `-apple-system` effective family in this capture; no custom family is promoted
- The capture did not record a CSS brand swatch, interaction expansion, player controls, mobile layout, or a public design-system surface

### Principles

The three *UI implication* notes below are not official Bilibili design principles and are not a separately published product-system specification. They are editorial implementation interpretations derived from official corporate narrative and the observed product surfaces.

1. **Community is a stated business priority.** Corporate information says the company cultivates belonging through interest-based sub-communities and interactive features. *UI implication:* When product evidence exists, preserve the relationship between content, creators, and community context rather than collapsing it into anonymous media tiles.
2. **Diverse interests share one video community.** The official proposition covers entertainment, games, lifestyle, anime, technology, knowledge, and more. *UI implication:* Use product-specific evidence before generalising one content category’s visual treatment to another surface.
3. **Bullet chatting is a signature interaction, not a token source.** The company identifies it as an engagement feature, but this packet does not contain player-state evidence. *UI implication:* Do not fabricate controls, motion, density settings, or colours for it.

Capture-bound application:

- Use the observed `#f1f2f3` / `#ffffff` / `#18191c` / `#9499a0` product-home relationship only where its feed/card context is relevant.
- Preserve the 6px cover and 4px skeleton-line corner observations as component-local values.
- Treat the components here as default-state observations; this packet records no interaction or state expansion.
- Use the current product-home token set as a narrow reference. Do not turn corporate narrative, a CDN declaration, or historic catalog metadata into a product component or token.

### Avoid

- Do not present the catalog `primary_color` as a current product CSS token from this capture.
- Do not infer player actions, coin/follow controls, dialogs, tabs, mobile navigation, hover motion, or form-error states from the captured home page.
- Do not use `HarmonyOS_Regular` or `HarmonyOS_Medium` as a Bilibili UI font without visible usage plus first-party product or licence corroboration.
- Do not add an unobserved CTA, player control, hover behaviour, or brand-colour fill.
- Do not add an unobserved focus, pressed, or validation state as a component treatment.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

The values below are limited to computed product-home values in the supplied evidence. They are not an official public Bilibili colour specification.

- **Page canvas** (`#f1f2f3`): Computed `body` background and video-card skeleton/cover fallback background.
- **Surface / overlay text** (`#ffffff`): Observed card-surface background and video-card statistics text. Those are two roles of one value; neither replaces the other.
- **Foreground** (`#18191c`): Computed body, video-card title, and focused/pressed search-field text.
- **Muted metadata** (`#9499a0`): Video-card owner/date row.
- **Secondary text** (`#61666d`): Default `nav-search-input` text. This is not foreground.
- **Hairline / focused field fill** (`#e3e5e7`): Observed search-field focus and pressed background; also appears in the colour aggregate as a border/background candidate. The feed roll button uses it as a 1px border. Do not collapse this value into a single “hairline only” role.

The existing catalog `primary_color` is retained as catalog metadata but is not emitted by this capture and is deliberately absent from these colour roles. No current token claim is made for a pink action colour, blue accent, coin colour, error/success colour, or selected-state tint.

### Spacing

Repeated captured values: 4px, 8px, and 16px. The capture’s spacing aggregate contains those values frequently enough to support the small token set, but it does not establish a general grid, responsive breakpoint, or full page-margin scale.

### Shape

- Cover wrapper: 6px
- Skeleton line: 4px
- Search field: 0px
- Statistics strip: 0px 0px 6px 6px
- Feed roll button: 8px

6px cover corners, 4px skeleton-line corners, 0px search corners, and 8px roll-button corners are component-local values, not a universal radius scale.

### Elevation

All selector-backed component samples used here reported `box-shadow: none`. The card cover, title area, statistics strip, search field, and skeleton are therefore represented as flat. Dropdowns, dialogs, mini-players, hover lift, and modal elevation were not observed and are omitted.

### Motion

The supplied capture reports no interaction expansion and no motion or easing measurements. Do not infer hover, player, or celebratory motion from static component evidence. No motion token is promoted. Promote a motion duration, easing, animation name, transition, or reduced-motion behavior only after a later pass has recorded computed transition properties, animation names, durations, easing, and reduced-motion behavior per component.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | The allowed first-party sources do not state that a named typeface is used in the product. No brand family claim. |
| Live computed surface-use | The three product snapshots resolve visible text to `-apple-system, system-ui, Helvetica Neue, Helvetica, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif`; the aggregate classifies `-apple-system` as system with 951 usages. System family only; no substitute or specimen. |
| Official distributed brand asset | No first-party Bilibili font catalogue or licence was found. Huawei documents HarmonyOS Sans as its own design resource, not as a Bilibili asset. None claimed for Bilibili. |
| Declared-only | `HarmonyOS_Regular` and `HarmonyOS_Medium` each have 54 Bilibili-CDN `@font-face` source URLs, but zero visible usages in the capture. Declaration evidence only; not a UI family and no specimen. |
| HarmonyOS declarations | The purpose, licence, and runtime use of the HarmonyOS declarations were not established by a first-party font source. Omitted from tokens. |

### Family

- **Current visible UI family:** none as a brand face. The effective computed stack is the system stack above.
- Do not present `-apple-system`, `system-ui`, or any fallback member as a Bilibili brand face.
- Do not replace an unavailable or unobserved brand type with this system stack.

### Type roles

| Role | Size | Weight | Line height | Use |
|---|---:|---:|---:|---|
| Header entry link | 14px | 400 | 64px | Product-home header entry links |
| Video-card title | 15px | 400 | 22px | Home video-card title |
| Owner/date metadata | 13px | 400 | 17px | Home video-card owner and date |

### Assets

No first-party Bilibili mark was captured as a product asset. Catalog identity uses a Simple Icons slug; that is not a captured mark and is not a Typography & Assets claim. Video-card covers are first-party feed imagery; do not replace them with an invented brand-colour fill.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

Scope: the entries below are selector-backed observations from the three supplied product snapshots. The collector recorded zero interaction expansions and zero observed states; unobserved player, follow, coin, upload, modal, tab, and mobile variants are not component specifications.

Only the following states are evidenced in this packet.

| State | Evidence-bound treatment |
|---|---|
| Empty | No first-party empty-state observation in this packet. Treatment omitted. |
| Loading | Video-card skeleton text lines use `#f1f2f3` with 4px corners on the product home. |
| Error | No error-state observation in this packet. Treatment omitted. |
| Success | No success-state observation in this packet. Treatment omitted. |
| Skeleton | Cover fallback is `#f1f2f3` with 6px corners; text lines use 4px corners. |
| Disabled | No disabled-state observation in this packet. Treatment omitted. |

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. A generic focused/pressed colour on the search field is not `focus-visible` treatment evidence; those observations stay as additional colour roles, and the `focus-visible` visual treatment remains unresolved. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control's product role, not its primitive kind. This is not a complete state-coverage claim.

The video-card cover wrapper, statistics strip, and skeleton line have default geometry and no state or interactive-kind evidence, so kind and a state-applicability map are omitted.

### Video-card cover wrapper

- Role: product-home video-card cover wrapper
- Type: card
- Kind: omitted. The source records default geometry and no state or interactive-kind evidence, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: `#f1f2f3`
- Radius: 6px
- Size: 248px × 140px in the captured desktop viewport
- Observed: default only
- Surface: product home; the same feed pattern is in the popular-route snapshot

### Video-card statistics strip

- Role: product-home video-card statistics strip
- Type: badge
- Kind: omitted. Default geometry only; no interactive-kind evidence.
- Text: `#ffffff`
- Radius: 0px 0px 6px 6px
- Padding: 16px 8px 6px
- Font: 13px / 400
- Use: lower cover-edge statistics strip
- Observed: default only

### Video-card skeleton line

- Role: product-home video-card loading text line
- Type: card
- Kind: omitted. Loading-placeholder geometry only; no interactive-kind evidence.
- Background: `#f1f2f3`
- Radius: 4px
- Use: video-card loading placeholders
- Observed: loading placeholder geometry on product home

### Home search field

- Role: product-home navigation search field
- Kind: interactive
- Anatomy: value field
- Text: `#61666d`
- Radius: 0px
- Padding: 0px 8px 0px 0px
- Font: 14px / 400
- Surface: the same default component appears on product home, the second home snapshot, and popular
- Observed: default only. The collector recorded zero interaction expansions and zero observed component states.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on product home, the second home snapshot, and popular |
| hover | applicable | Pointer-web search field; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A home search field can be unavailable; visual treatment omitted |
| loading | not-applicable | Home search submits a query from this field; the field itself does not enter a loading state |
| error | not-applicable | Home search is a query field, not a validated form control |
| success | not-applicable | Submitting a search is not an action-outcome confirmation on the field |

Additional observed colour roles on this field are not interaction-expansion states.

Generic focused and pressed fill `#e3e5e7`; focused and pressed text `#18191c`.

Those colour-aggregate observations are a different evidence type from a keyboard focus-visible treatment. Do not add an unobserved focus, pressed, or validation state as a component treatment.

### Feed roll button

- Role: product-home feed roll button
- Kind: interactive
- Anatomy: label
- Background: `#ffffff`
- Text: `#18191c`
- Border: 1px solid `#e3e5e7`
- Radius: 8px
- Padding: 9px
- Font: 12px / 400
- Observed: default appearance; no button state was observed

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on product home |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A feed roll button can be unavailable; visual treatment omitted |
| loading | applicable | Rolling the feed waits on a new card set; visual treatment omitted |
| error | not-applicable | Rolling replaces the card set; the button does not report a request or validation failure of its own |
| success | not-applicable | Rolling replaces the card set; the button does not confirm a completed outcome |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The supplied capture is one 1440×900 product-home viewport. Within it, repeated video-card covers measure 248px × 140px. The observed card title begins below the cover; the information block has a 10px top margin, and the metadata row has a 4px top margin. Repeated spacing values are 4px, 8px, and 16px. The capture does not establish a general grid, responsive breakpoint, or full page-margin scale.

This packet contains one 1440×900 desktop capture only. No breakpoint, mobile, touch-target, or responsive-layout claim is established. The 248px × 140px cover, 64px header-entry line height, and 9px roll-button padding are desktop-capture measurements, not cross-viewport specifications.

<!-- design-md:section content-locales -->
## 6. Content & Locales

No first-party voice-and-tone guideline was found in the allowed sources. The corporate sources describe a welcoming, engaging community built around users and creators, and name “All the Videos You Like” as the value proposition; those statements support community-oriented content strategy, not an invented UI-copy system. Product-specific microcopy, error copy, and mascot language remain unverified.

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

- pink action, blue accent, coin, error/success, and selected-state tint colours
- empty, error, success, and disabled visual treatments
- hover, pressed, focus-visible, and interaction-expansion treatments as component states
- player, follow, coin, upload, modal, tab, and mobile variants
- HarmonyOS_Regular / HarmonyOS_Medium as a UI family, and any Bilibili brand face
- motion duration, easing, animation name, transition, and reduced-motion behavior
- responsive grid, breakpoints, mobile navigation, touch-target rules, and a full page-margin scale
- product-specific microcopy, error copy, and mascot language
- creator-tool UI
