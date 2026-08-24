# 104人力銀行 Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

104人力銀行 is Taiwan’s job-and-talent platform. Its corporate materials describe a service that helps jobseekers find direction as well as work, and helps employers manage talent rather than merely fill a vacancy. It was founded as an online matching service in 1996. This contract covers two current first-party public product surfaces: the public job-bank home (`https://www.104.com.tw/`) and a public company-information route (`https://www.104.com.tw/company/main/`).

The following product-story reading is a derived editorial implementation inference from the verified surfaces; it is not 104人力銀行-authored or a separately published UI specification. It grew from the founder’s concern with inefficient job advertising into a broader employment, career, and human-resources ecosystem.

The following capture-bound coverage reading is a derived editorial implementation inference from the verified surfaces; it is not 104人力銀行-authored or a separately published UI specification. It does not treat those routes as a proxy for every corporate, campaign, social-program, authenticated, mobile, menu, or form-validation surface.

104’s own brand story places its beginning in 1996, when founder 楊基寬 used a single computer in a small apartment to build an online service for a labor market then dominated by newspaper ads and paper notices. The company describes that origin as a response to inefficient matching and a belief in more human-centered connections between people and work. The company now describes its career mission in fuller terms: for jobseekers, not merely finding a job but finding direction; for employers, not merely finding people but managing talent. Official materials also name children, working-age adults, and healthy older adults. “Be A Giver” asks people to offer honest feedback with humility and kindness and use knowledge, skill, and time to help others succeed. Its current product evolution also includes AI-powered recommendations for jobs and candidates, as well as HR-management services.

The following capture-bound visual-character reading is a derived editorial implementation inference from the verified surfaces; it is not 104人力銀行-authored or a separately published UI specification. The supplied public product surfaces make the captured chrome practical and information-forward: strong orange marks a search or commitment action, while dark text, gray navigation, bordered cards, and a secondary teal topic treatment organize a dense amount of career and company information.

The following operational-clarity / people-centered-context reading is a derived editorial implementation inference from the verified surfaces; it is not 104人力銀行-authored or a separately published UI specification. That operational clarity sits beside an explicitly people-centered corporate idea. 104 calls its culture “Be A Giver,” frames its missions around children, career matchmaking, and healthy older adults, and now describes AI-powered personalized job and candidate recommendations as part of its service evolution. This is useful context for a direct, supportive posture. It does not convert corporate campaign colors or AI-service imagery into UI tokens. The documented visual system remains limited to the supplied public product capture.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

- Search the public job-bank home from the observed navigation-search action.
- Scan topic navigation and content cards on the public home.
- Read public company information on the company-information route.
<!-- design-md:claim-end -->

### Audience

104’s official mission names four stakeholder groups. This packet contains no verified behavioral research or product-persona document. The groups are jobseekers, employers, children, and healthy older adults.

Preserving those groups without invented behaviors, not asserting named personas, usage frequencies, motivations, or task behaviors, restricting Audience so invented demographic personas are not promoted, and tying observable work only to the three primary tasks, is a derived editorial implementation inference from the verified surfaces; it is not 104人力銀行-authored or a separately published UI specification. Observable work follows the three primary tasks: people searching the public job-bank home, people scanning topic navigation and content cards, and people reading public company information.

### Distinctive traits

- Orange `#ff9100` as the repeated filled and outlined action color; `#ff7800` on static active tabs
- Dark `#292929`, muted `#7e7e7e`, white `#ffffff`, and pale divider `#dddddd`. Reading those four observed colors as the information hierarchy is a derived editorial implementation inference from the verified surfaces; it is not 104人力銀行-authored or a separately published UI specification.
- Teal `#00afb8` and soft teal `#dbf7f7` in a separate topic/pill treatment. Reading that treatment as not a substitute for the orange action is a derived editorial implementation inference from the verified surfaces; it is not 104人力銀行-authored or a separately published UI specification.
- Compact bold labels with 4px action geometry; 8px dialog and 12px card shells
- Not promoting uncaptured hover, pressed, focus, disabled, error, menu, or authenticated-product behavior is a derived editorial implementation inference from the verified surfaces; it is not 104人力銀行-authored or a separately published UI specification. No captured hover, pressed, focus, disabled, error, menu, or authenticated-product behavior is promoted.

### Principles

These five items are a derived editorial implementation inference from the verified surfaces; they are not 104人力銀行-authored or a separately published UI specification.

1. **Make direction actionable.** A job search or hiring task should clarify the first decision before expanding choices. *UI implication:* lead forms and search controls with the information that changes the next recommendation.
2. **Treat people as more than a transaction.** The company explicitly distinguishes finding direction from simply finding work. *UI implication:* pair a task result with relevant career-support routes when product evidence supports them; do not fabricate counseling flows.
3. **Give help with humility and clarity.** “Be A Giver” describes honest feedback delivered with humility and kindness. *UI implication:* feedback copy should be specific, respectful, and explain what the user can do next.
4. **Build capability, not dependency.** 104’s mission frames knowledge and skill as ways to create opportunity and value. *UI implication:* make criteria, progress, and available learning/help understandable rather than obscuring them behind a score.
5. **Use technology to improve matching.** The company presents AI and data-supported recommendations as tools for more relevant matches. *UI implication:* explain the role of inputs and recommendations plainly; never imply a certainty the system cannot substantiate.

Capture-bound application: this list is a derived editorial implementation inference from the verified surfaces; it is not 104人力銀行-authored or a separately published UI specification.

- Keep a single high-priority public action in the observed orange `#ff9100`, with white text and 4px geometry.
- Use `#7e7e7e` for compact secondary labels and reserve `#292929` for stronger information hierarchy.
- Use the teal family for the observed topic/tag context, not as a replacement for the primary action.
- Keep card shells white with the observed 12px radius and `#dddddd` hairline when using the captured content-card treatment.
- Preserve the compact 14px/16px product hierarchy instead of inventing an oversized display system.
- For the captured public chrome, the sequence is orange action → dark/gray information hierarchy → optional scoped teal topic treatment.
- Implement only the supplied geometric levels: 4px actions/tabs, 8px dialog, 12px card, and 800px full pill.

### Avoid

The following items are a derived editorial implementation inference from the verified surfaces; they are not 104人力銀行-authored or a separately published UI specification.

- Do not treat corporate campaign or social-program visuals as product tokens without selector-backed product evidence.
- Do not use the one low-frequency `#1654b9` link sample as a general primary CTA.
- Do not present Arial or `MsJhengHeiBold` as a proprietary, web-loadable 104 UI family.
- Do not add hover, pressed, focus, disabled, validation, or authenticated states to the documented public components.
- Do not turn the observed dialog shadow into a blanket shadow on every card or control.
- Do not substitute another sans serif and name it `MsJhengHeiBold`.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Selector-backed public product colors:

- **Action Orange** (`#ff9100`): observed filled search action and compact outlined public action on the home surface. Catalog `primary_color` is this same hex.
- **Active Orange** (`#ff7800`): observed text/border color of static active company-page and home navigation tabs.
- **Topic Teal** (`#00afb8`): observed active pill fill and outlined inactive-pill text treatment on the home surface.
- **Soft Teal** (`#dbf7f7`): observed public home background sample associated with the topic treatment.
- **Teal Outline** (`#39c8d0`): observed on company-page tag samples.
- **Foreground** (`#292929`): repeated high-emphasis text and dialog/card content.
- **Muted Text** (`#7e7e7e`): repeated navigation, compact button, and secondary text treatment.
- **Canvas** (`#ffffff`): white public canvas and card/dialog fills.
- **On Action** (`#ffffff`): text over the orange action.
- **Surface** (`#eeeeee`): observed pale company-page and home surface sample.
- **Hairline** (`#dddddd`): observed home content-card border.
- **Link Blue** (`#1654b9`): one low-frequency company-page link sample.

The following unmerged-role readings are a derived editorial implementation inference from the verified surfaces; they are not 104人力銀行-authored or a separately published UI specification. Catalog `primary_color` is treated as the high-confidence product action orange, not a second identity color. Soft Teal is not a general canvas claim. Teal Outline’s surface scope is narrower than the home topic teal. Link Blue is not generalized into the main action color.

The following Canvas / On Action field-identity reading is a derived editorial implementation inference from the verified surfaces; it is not 104人力銀行-authored or a separately published UI specification. Canvas and On Action share `#ffffff`; On Action is the on-action field, not a second canvas token.

The following evidence-domain application is a derived editorial implementation inference from the verified surfaces; it is not 104人力銀行-authored or a separately published UI specification. 104’s corporate pages, social programs, brand stories, and campaign imagery establish company context only. They were not part of the computed-style packet and are not used to extend this color palette. Only values backed by the supplied public product-surface evidence are tokens. Corporate, marketing, and declared-only font evidence stay outside this token set.

### Spacing

Repeated captured values: 4px, 6px, 8px, 12px, 16px, and 20px. YAML `spacing` is xs 4, sm 6, md 8, lg 12, xl 16, xxl 20. Navigation tabs use 8px by 16px padding, content cards use 16px padding, and compact actions use horizontal 12px padding.

### Shape

- Action / tab: 4px
- Dialog: 8px
- Card: 12px
- Full pill: 800px

The following local-geometry application is a derived editorial implementation inference from the verified surfaces; it is not 104人力銀行-authored or a separately published UI specification. 4px action/tab corners, 8px dialog, 12px card, and 800px full-pill geometry are local defaults, not a universal radius scale.

### Elevation

Most captured public controls are flat. The topic tab carries `rgb(221, 221, 221) 0px 2px 8px 0px`; the public login prompt uses `rgba(135, 135, 135, 0.4) 0px 2px 24px 0px`.

The following elevation application is a derived editorial implementation inference from the verified surfaces; it is not 104人力銀行-authored or a separately published UI specification. White cards are primarily defined by a `#dddddd` hairline and 12px radius rather than a shadow. These are distinct selector-backed treatments, not proof of a general elevation ladder.

### Motion

No first-party motion duration, easing, reduced-motion policy, or event transition was present in the supplied packet. No motion token is published for 104人力銀行 in this reference. Do not promote a motion duration, easing, animation name, transition, or reduced-motion behavior until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. Any exact animation value remains a local extension until that per-component computed observation exists.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The following evidence-class application readings are a derived editorial implementation inference from the verified surfaces; they are not 104人力銀行-authored or a separately published UI specification.

| Evidence class | Family and boundary |
|---|---|
| Official product-use | No first-party font announcement or design guideline located in this pass establishes a named product UI family. |
| Live computed surface-use | `Arial, MsJhengHeiBold, 微軟正黑體, "Microsoft JhengHei", Roboto, PingFangTC, sans-serif` is repeatedly computed on the supplied public product surfaces. The first family is an operating-system stack member, so it is not promoted as a 104-owned typeface. |
| Official distributed brand asset | No official public type asset or license source was located. |
| Declared-only | `MsJhengHeiBold` has an observed 104-hosted `@font-face` source but zero visible uses in the packet. It remains declared-only; it is not a loadable specimen or token family. `swiper-icons` is likewise declared-only. |
| Loaded non-text asset | `104_icon` is loaded from 104’s CDN and appears in icon contexts. It is an icon font, not body or heading typography. |
| System / unresolved | `Arial` is a high-confidence system computed family (543 uses). Its observed usage supports a public-stack boundary only; it must not be rendered as a proprietary 104 font. |

### Family

- **Current visible UI family:** operating-system stack `Arial, MsJhengHeiBold, 微軟正黑體, "Microsoft JhengHei", Roboto, PingFangTC, sans-serif`
- **Declared-only:** `MsJhengHeiBold` (104-hosted `@font-face`, zero visible uses) and `swiper-icons`
- **Loaded non-text:** `104_icon` (icon font)

The following font-use boundary is a derived editorial implementation inference from the verified surfaces; it is not 104人力銀行-authored or a separately published UI specification. Use a locale-aware operating-system stack that preserves Traditional Chinese support, but label it honestly as a stack rather than a custom brand font. Do not replace the observed stack with another sans serif and name it `MsJhengHeiBold`. Do not present Arial or `MsJhengHeiBold` as a proprietary, web-loadable 104 UI family.

### Type roles

Verified line-height values from YAML are the unitless ratios `1.43`, `2.14`, and `1.4`. The legacy body table also recorded computed line-height at those captured sizes.

The following ratio-versus-size-local reading, and treating public-body evidence as an operating-system stack rather than a named 104 UI family, is a derived editorial implementation inference from the verified surfaces; it is not 104人力銀行-authored or a separately published UI specification. The unitless ratios scale with font size and are not fixed px. Those px figures are size-local observations, not replacements for the ratios. The Search Action `18px / 700 / 42px` and Company Card `14px / 400 / 16px` values are component fields, not replacements for the public-body ratio.

| Role | Font | Size | Weight | Line height | Size-local observation | Evidence boundary |
|---|---|---:|---:|---:|---|---|
| Public body | operating-system stack | 14px | 400 | 1.43 | 20px or 16px | repeated home and company-page text; operating-system stack, not a named 104 UI family |
| Compact label/action | operating-system stack | 14px | 700 | 2.14 | 30px | observed compact action and navigation labels |
| Topic tab | operating-system stack | 16px | 700 | 24px (no YAML ratio) | 24px | home topic-navigation samples |
| Home section heading | operating-system stack | 20px | 700 | 1.4 | 28px | observed public home section headings / public home h2 samples only |

### Assets

Treating catalog logo metadata as a Google favicon lookup, not a captured first-party mark, and not promoting it as a portable asset, is a derived editorial implementation inference from the verified surfaces; it is not 104人力銀行-authored or a separately published UI specification. No first-party mark file is attached here.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source state contract, preserved here while the catalog graph is not adopted:

No state tokens or state-component facts are published. The sole supplied product-style artifact reports `observedStates: 0`, `interactionKinds: 0`, and `interactionCount: 0`; the artifact therefore does not establish empty, loading, error, success, skeleton, disabled, validation, or transition behavior.

The supplied artifact records `interactionCount: 0` and no observed states. The variants below are static selector-backed samples only. YAML component `states` notes record default static selector observation and interaction capture 0, so no changed state values are published.

Recording those unobserved states as omitted rather than synthesized, and not filling them with a generic job-board pattern, is a derived editorial implementation inference from the verified surfaces; it is not 104人力銀行-authored or a separately published UI specification. Those fields are omitted rather than filled with a generic job-board pattern. No interaction-state transition, toast, form-error, disabled, menu, authenticated account, or input-state rule is inferred. The capture has no interaction events, so no hover, pressed, focus, disabled, error, menu, or authenticated-product behavior is represented as a product fact.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. A generic `focus` capture is not `focus-visible` treatment evidence; the source records no interaction events, so those visual treatments remain omitted and the `focus-visible` row does not carry a color. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control's product role, not its primitive kind. Where exact label/destination/request/outcome is unresolved, those three applicability fields are omitted at this boundary rather than closed. Capture selectors recorded in the source remain known. This is not a complete state-coverage claim.

The company card has default geometry and no state or interactive-kind evidence, so kind and a state-applicability map are omitted. The login dialog keeps `Type: dialog` and verified geometry, shadow, and login-prompt-shell use; `Kind` and a state-applicability map are omitted because dialog internals being interactive is not evidence that the dialog surface itself has hover, disabled, or loading.

### Search Action

- Role: home navigation-search action
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#ff9100`
- Text: `#ffffff`
- Border: 2px transparent
- Radius: 4px
- Padding: 0px 12px
- Font: 18px / 700 / 42px / operating-system stack
- Height: 42px
- Use: Observed home navigation-search action; selector `home::[data-omd-capture="11"]`
- Observed: default static selector observed; interaction capture recorded 0, so no changed state values are published

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as the home navigation-search action |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A search action can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source names this control as Observed home navigation-search action and records selector `home::[data-omd-capture="11"]`; exact label/destination/request/outcome is unresolved, so those three fields stay omitted at this boundary rather than closed as a query-or-navigate destination.

### Outline Action

- Role: compact public home action
- Kind: interactive
- Type: button
- Anatomy: label
- Text: `#ff9100`
- Border: 1px solid `#ff9100`
- Radius: 4px
- Padding: 0px 12px
- Font: 14px / 700 / 30px / operating-system stack
- Use: Observed compact public home action; selector `home::[data-omd-capture="56"]`
- Observed: default static selector observed; interaction capture recorded 0, so no changed state values are published

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as the compact public home action |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A compact public action can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source names this control as Observed compact public home action and records selector `home::[data-omd-capture="56"]`; exact label/destination/request/outcome is unresolved, so those three fields stay omitted at this boundary rather than closed.

### Topic Tab

- Role: home topic-navigation item
- Kind: interactive
- Type: tab
- Anatomy: label
- Text: `#7e7e7e`
- Radius: 4px
- Padding: 8px 16px
- Font: 16px / 700 / 24px / operating-system stack
- Height: 40px
- Shadow: `rgb(221, 221, 221) 0px 2px 8px 0px`
- Use: Observed home topic-navigation item
- Observed: static non-active appearance observed; interaction capture recorded 0, so no transition values are published

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Static non-active appearance captured on home topic navigation |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A topic-navigation item can be unavailable; visual treatment omitted |
| loading | not-applicable | A topic tab selects a grouping; the tab itself does not enter a loading state |
| error | not-applicable | Tab meaning is selected versus resting, not a request or validation failure on the tab |
| success | not-applicable | Tab meaning is selection, not action-outcome confirmation |

### Active Topic Tab

- Role: static active home topic-navigation item
- Kind: interactive
- Type: tab
- Anatomy: label
- Text: `#ff7800`
- Radius: 4px
- Padding: 8px 16px
- Font: 16px / 700 / 24px / operating-system stack
- Height: 40px
- Use: Observed static active home topic-navigation item
- Observed: static active appearance observed; interaction capture recorded 0, so no transition values are published. The active topic/tab appearance is a static captured variant, not an observed click transition.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Static active appearance captured on home topic navigation |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A topic-navigation item can be unavailable; visual treatment omitted |
| loading | not-applicable | A topic tab selects a grouping; the tab itself does not enter a loading state |
| error | not-applicable | Tab meaning is selected versus resting, not a request or validation failure on the tab |
| success | not-applicable | Tab meaning is selection, not action-outcome confirmation |

Additional observed named state: static active appearance. That appearance is a captured variant, not an observed click transition.

### Company Card

- Role: home content-card container
- Type: card
- Kind: omitted. The source records default geometry and no state or interactive-kind evidence, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: `#ffffff`
- Text: `#7e7e7e`
- Border: 1px solid `#dddddd`
- Radius: 12px
- Padding: 16px
- Font: 14px / 400 / 16px / operating-system stack
- Use: Observed home content-card container

### Login Dialog

- Role: public login-prompt dialog shell
- Type: dialog
- Kind: omitted. The source records type, geometry, shadow, and login-prompt-shell use; dialog internals being interactive is not evidence that the dialog surface itself has hover, disabled, or loading, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Anatomy: dialog shell
- Background: `#ffffff`
- Text: `#292929`
- Radius: 8px
- Shadow: `rgba(135, 135, 135, 0.4) 0px 2px 24px 0px`
- Use: Observed public login-prompt dialog shell

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The following layout application is a derived editorial implementation inference from the verified surfaces; it is not 104人力銀行-authored or a separately published UI specification. The supplied public surfaces support a compact information layout rather than a universal marketing-grid specification. Repeated spacing clusters at 4px, 6px, 8px, 12px, 16px, and 20px. Navigation tabs use 8px by 16px padding, content cards use 16px padding, and compact actions use horizontal 12px padding.

The packet does not establish breakpoint, authenticated search-results, application-flow, or mobile-layout rules.

The artifact covers three desktop-public surface records and preserves no interactions. It shows both compact 32–36px actions and a 42px navigation-search action, plus 40px topic tabs. The active topic/tab appearance is a static captured variant, not an observed click transition. Mobile, menus, dialogs beyond the sampled login shell, and form validation remain absent.

The following measurement-boundary reading is a derived editorial implementation inference from the verified surfaces; it is not 104人力銀行-authored or a separately published UI specification. The 42px navigation-search action, compact 32–36px actions, and 40px topic tabs are desktop-public capture measurements, not a responsive target-size rule. The packet does not establish a responsive target-size rule.

<!-- design-md:section content-locales -->
## 6. Content & Locales

104’s official language speaks about finding direction, managing talent, sharing knowledge, and helping people develop their capability. Official Traditional Chinese samples from corporate vision, brand-story, and Be A Giver pages are preserved below as first-party language.

The following Content application, including the citation-character reading of those samples and the product-voice / Do-Don't table, is a derived editorial implementation inference from the verified surfaces; it is not 104人力銀行-authored or a separately published UI specification. Those official samples are first-party language, not a complete product-microcopy guide. Official language can be read as practical, respectful, and enabling: warm without becoming sentimental, and specific without promising a particular employment outcome. The product voice should make the next career task understandable, then make the available support visible. Corporate mission and “Be A Giver” language can inform content tone; it does not authorize a new component, color, font, or interaction rule.

| Do | Don't |
|---|---|
| Name the concrete task first: a role, a resume, a career question, or a hiring need. | Use vague motivational claims in place of a next step. |
| Frame support as help toward direction and capability. | Guarantee a job, interview, salary, or employer response. |
| Use calm, respectful Traditional Chinese appropriate for a consequential decision. | Use pressure, shame, or artificial urgency around a person’s career. |
| Be direct about what information a search or form needs. | Hide requirements behind clever labels or opaque jargon. |

Official first-party samples:

- “不只找工作，幫你找方向。” — official career-mission language.
- “不只找人才，幫你管理人才。” — official employer-mission language.
- “我們在乎人的價值，讓人力變人才的有機環境。” — official brand-story language.
- “以謙遜溫和方式給予誠實回饋。” — official Be A Giver language.

Not promoting synthetic voice samples is a derived editorial implementation inference from the verified surfaces; it is not 104人力銀行-authored or a separately published UI specification. No synthetic voice samples are promoted.

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

- hover, pressed, focus, disabled, loading, error, success, empty, skeleton, validation, toast, menu, and authenticated-product visual treatments
- interaction-state transition values (artifact `observedStates: 0`, `interactionKinds: 0`, `interactionCount: 0`)
- Search Action and Outline Action loading, error, and success applicability (exact label/destination/request/outcome unresolved; capture selectors remain known)
- interactive kind and state-applicability map for the Company Card and Login Dialog
- `focus-visible` visual treatments; the missing interaction expansion is a different observation
- breakpoint, authenticated search-results, application-flow, mobile-layout, and responsive target-size rules
- a universal radius or elevation scale; a blanket card/control shadow from the login-prompt treatment
- a named 104 UI family; `MsJhengHeiBold` and `swiper-icons` as loadable visible UI; Arial as a proprietary 104 font
- first-party logo mark beyond catalog Google-favicon identity
- corporate, campaign, and social-program colors as product tokens
- `#1654b9` as a general primary CTA
- motion duration, easing, animation name, transition properties, and reduced-motion behavior — promote only after per-component computed capture of all five; official documentation of a single curve or duration is not that gate
