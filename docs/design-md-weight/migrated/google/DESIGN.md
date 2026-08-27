# Google Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Google began as a search engine and now describes a product family used by billions; its stated mission is to organize the world's information and make it universally accessible and useful. Official company history traces that origin to Larry Page and Sergey Brin's Stanford work and the 1998 founding, and names Search, YouTube, Android, Gmail, and other products as a broad global product ecosystem. Those statements are Google-authored narrative. The source and its verification notes treat that history as narrative context, not as individual current CSS values.

This contract covers three first-party surfaces inspected on 2026-07-13: the dark public Search homepage at `https://www.google.com/`, the light Advanced Search form at `https://www.google.com/advanced_search?hl=ko`, and the light Business Profile product-marketing page at `https://business.google.com/kr/business-profile/`. Search, Advanced Search, and Business Profile are separate observed product domains, not one interchangeable template. Treating those three captures as separate product domains rather than one interchangeable template is a derived editorial implementation inference from the verified surfaces; it is not Google-authored or taken from a separately published UI specification, including the published Material Design 3 documentation. Material Design 3 at `https://m3.material.io` is Google's public design system; its documentation and baseline guidance are context, not a substitute for observed Google product tokens. Google logo and brand-resource guidance are identity context, not evidence for application component values.

The July capture shows a dark public Search homepage that uses Arial and tight utility controls, alongside light Advanced Search and Business Profile surfaces that use Google Sans families, generous 24px cards, and rounded blue actions. Calling that split "unusually disciplined," and reading the identity as staying recognizable through a restrained blue action color, soft charcoal text, rounded controls, and the familiar multicolor mark rather than through one universal page theme, is a derived editorial implementation inference from the verified surfaces; it is not Google-authored or taken from a separately published UI specification, including the published Material Design 3 documentation. The values named alongside that reading — `#22242a` Search canvas, Arial on Search and Advanced Search, loaded Google Sans families on Business Profile, `#1a73e8` actions, 24px cards — are live observations.

Google Design describes the same evolution in type: Product Sans addressed product lockups after the 2015 identity update, Google Sans became the broader display/UI face, and Google Sans Text was developed for smaller, more legible reading sizes. The supplied live evidence confirms that these roles remain separated rather than collapsed into a generic system-font fallback on the Business Profile surface; that confirmation is a derived editorial implementation inference from the verified surfaces; it is not Google-authored or taken from a separately published UI specification, including the published Material Design 3 documentation.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

The source declares no task list of its own. Reading the three captured surfaces as the jobs below is a derived editorial implementation inference from the verified surfaces; it is not Google-authored or taken from a separately published UI specification, including the published Material Design 3 documentation.

- Search from the captured dark public Search homepage.
- Complete the captured light Advanced Search form.
- Act on Business Profile high-emphasis and medium-emphasis actions, and scan the captured scrolling image cards.
<!-- design-md:claim-end -->

### Audience

No first-party user-research or stakeholder-segment source was supplied for this packet. Do not infer named personas from Search, Advanced Search, or Business Profile traffic. No individual persona is promoted, and none is re-hosted in the sidecar.

### Distinctive traits

The values in this list are recorded observations. The grouping of them as the distinctive layer of the three surfaces, including the first bullet's claim that the three domains are not one interchangeable template, is a derived editorial implementation inference from the verified surfaces; it is not Google-authored or taken from a separately published UI specification, including the published Material Design 3 documentation.

- Search, Advanced Search, and Business Profile are separate observed product domains, not one interchangeable template
- Captured Search homepage is dark (`#22242a`); Advanced Search and Business Profile are light (`#ffffff`)
- Google Sans, Google Sans Text, and Google Sans Display are live loaded faces on Business Profile; Arial is live system typography on Search and Advanced Search
- Business Profile actions use Google Blue (`#1a73e8`), full pills, and 42px or 50px heights
- Captured inactive Business Profile card is white, 24px-rounded, and shadowless

### Principles

The first three headlines rest on Google's published philosophy ("Ten things we know to be true"). The fourth headline restates a type-role split that Google Design documents. The *UI implication* attached to each, and the decision to treat these four as this contract's design principles, are a derived editorial implementation inference from the verified surfaces; they are not Google-authored or taken from a separately published UI specification, including the published Material Design 3 documentation.

1. **Focus on the user.** Google states this directly. *UI implication:* lead with the task and use compact, comprehensible actions.
2. **Do one thing well.** Google states this directly. *UI implication:* do not add decorative controls where a Search or form task needs only input and a submit action.
3. **Fast is better than slow.** Google states this directly. *UI implication:* preserve the observed system-font treatment on Search-domain surfaces instead of forcing a visual substitution.
4. **Keep type role-specific.** Google Design documents distinct display and small-text design problems behind Google Sans and Google Sans Text. *UI implication:* use the captured family only in its observed role and surface.

### Application rules

These application rules are the source's own Do list. The justifications inside them — why a color or a family stays in one domain — are a derived editorial implementation inference from the verified surfaces; they are not Google-authored or taken from a separately published UI specification, including the published Material Design 3 documentation.

- Keep the product surface boundary explicit: dark Search, light Advanced Search, and Business Profile use different observed treatments.
- Use Google Blue `#1a73e8` only where the captured Business Profile action context supports it.
- Preserve Google Sans family roles where loaded usage and a matching FontFaceSet entry were captured.
- Keep Advanced Search in its observed Arial system typography.
- Reuse the measured full-pill, 4px navigation, 8px search-key, and 24px card geometry only in their observed contexts.

### Avoid

These avoidances are the source's own Don't list.

- Replace Arial on Search or Advanced Search with a brand face.
- Treat Product Sans, Google Symbols, Material Icons, or Google Sans Code as a live UI family for the captured surfaces.
- Promote Material documentation chrome or baseline palette values to Search or Business Profile tokens.
- Reuse the captured disabled Business Profile card as an enabled-card specification.
- Generalize the dark Search submit-key shadow to all Google actions.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Role names below are the source's own labels for recorded observations. Treating them as observation labels rather than Material Design 3 baseline roles is a derived editorial implementation inference from the verified surfaces; it is not Google-authored or taken from a separately published UI specification, including the published Material Design 3 documentation. The source's own source-domain boundary remains: Material documentation chrome and baseline palette are not promoted as Search or Business Profile product tokens.

- **Primary action blue** (`#1a73e8`): Business Profile high-emphasis actions and focus-ring source color.
- **Light canvas** (`#ffffff`): Advanced Search and Business Profile white surfaces.
- **Dark Search canvas** (`#22242a`): Captured Google Search homepage body background.
- **Business foreground** (`#3c4043`): Repeated Business Profile body and card text.
- **Search inverse foreground** (`#e8e8e8`): Repeated dark Search text and menu foreground.
- **Muted** (`#5f6368`): Search utility treatment and Business Profile secondary text.
- **Outline** (`#dadce0`): Observed Business Profile medium-emphasis action border.

Material Design 3 publishes its own typography guidance, but no Material documentation chrome or baseline palette is promoted here as a Google Search or Business Profile product token.

### Spacing

Observed values: 4, 8, 12, 16, 24, 32, and 48px. YAML records `xs: 4`, `sm: 8`, `md: 16`, `lg: 24`, `xl: 32`. These are observations, not a universal Google grid declaration; reading the scale that way is a derived editorial implementation inference from the verified surfaces; it is not Google-authored or taken from a separately published UI specification, including the published Material Design 3 documentation.

### Shape

| Step | Value | Observed use |
|---|---|---|
| Navigation | 4px | Business Profile navigation menu item |
| Search key | 8px | Dark Search submit key |
| Card | 24px | Business Profile inactive image card |
| Full pill | full: 1000 (1000px) | Business Profile high-emphasis and medium-emphasis actions |

Reuse each geometry only in its observed context.

### Elevation

| Treatment | Observed use |
|---|---|
| Flat (`none`) | Business Profile high-emphasis and medium-emphasis actions, navigation, and inactive card default styles are shadowless. |
| State shadow | Dark Search submit-key hover uses `rgba(23,23,23,0.24) 0px 1px 3px 0px`. |
| Focus ring | Business Profile medium-emphasis and low-emphasis focus examples use a 2px blue outer ring. |

The capture does not support a claim that all Google product surfaces are shadowless or that Material documentation elevation is a Google product token.

### Motion

The supplied capture records interaction states but no duration or easing measurement. Material Design 3 typography guidance is official design-system context, not evidence for a motion token on the captured Search or Business Profile pages.

No motion duration, easing curve, animation name, transition property, or reduced-motion behavior is promoted. An exact motion value may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against Material Design 3 or another official specification document — does not satisfy that condition.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use context | Google Design says Google Sans was built for product and marketing display use and Google Sans Text was developed for smaller, longer reading contexts. |
| Live computed surface-use | The supplied capture records Google Sans (107 uses), Google Sans Text (145 uses), and Google Sans Display (4 uses) with matching loaded FontFaceSet entries and fonts.gstatic.com sources. Google Sans and Google Sans Text are therefore usable live UI families for the captured Business Profile surface — that promotion is a derived editorial implementation inference from the verified surfaces; it is not Google-authored or taken from a separately published UI specification, including the published Material Design 3 documentation. Google Sans Display is retained only for the captured 48px heading role. |
| Live system use | Arial is the observed system family for the captured dark Search homepage and Advanced Search. It is not replaced with a branded fallback. |
| Declared-only or non-text assets | Product Sans, Google Symbols, and Material Icons have declared faces but zero visible usage in this capture. Material Symbols Outlined was loaded once as an icon font, not promoted to a text family. |
| Official distributed asset and license boundary | Google Sans Code is an official Google Fonts repository asset under the SIL Open Font License 1.1 and is described there as a code face for contexts including Gemini and Android Studio. It was not observed on the three supplied surfaces, so it is not a UI token. The supplied evidence does not establish a license URL for the loaded Google Sans, Google Sans Text, or Google Sans Display webfont files. |

### Family

- **Business Profile UI:** `Google Sans`
- **Business Profile text:** `Google Sans Text`
- **Business Profile display:** `Google Sans Display`
- **Search / Advanced Search system:** `Arial`
- Do not replace Arial on Search or Advanced Search with a brand face. Do not present a system or fallback stack as the Google Sans family; that second prohibition is a derived editorial implementation inference from the verified surfaces; it is not Google-authored or taken from a separately published UI specification, including the published Material Design 3 documentation.

### Type roles

| Role | Family | Size | Weight | Line height | Tracking | Surface / use |
|---|---|---:|---:|---:|---|---|
| Business heading | Google Sans Display | 48px | 400 | 56px | -0.5px | Business Profile section heading only. |
| Business action | Google Sans | 16px | 500 | 24px | 0.5px | Business Profile CTA and action labels. |
| Business body | Google Sans Text | 16px | 400 | 24px | | Business Profile cards, lists, and body copy. |
| Business navigation | Google Sans | 14px | 500 | 20px | | Business Profile |
| Search field | Arial | 16px | 400 | 22px | | Advanced Search text input; Arial system face. |
| Search compact control | Arial | 14px | 500 | normal | | dark Search homepage |

### Assets

- Catalog logo mapping is Simple Icons (`type: simpleicons`, `slug: google`). The supplied evidence packet did not include a first-party raster logo asset that would justify replacing that mapping. Classing the catalog entry as a third-party icon-set rendering rather than a Google-distributed file is a derived editorial implementation inference from the verified surfaces; it is not Google-authored or taken from a separately published UI specification, including the published Material Design 3 documentation.
- Google brand-resource guidance restricts use of brand elements and visual identity. That is a brand-use boundary, not a component-token source.
- Google Sans Code distribution and OFL 1.1 license sit in provenance; the face is not a UI token for these surfaces.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

| State | Evidence boundary |
|---|---|
| Default action | Business Profile high- and medium-emphasis actions were captured. |
| Hover | Captured for Business Profile actions and dark Search submit keys; component-specific values are on the records below. |
| Pressed | Captured for Business Profile actions and dark Search submit keys; do not extrapolate to unobserved components. |
| Focus | Captured for Business Profile actions and dark Search submit keys; blue focus rings are recorded only where observed. A generic Focus capture is a different evidence class from a `focus-visible` treatment: observed Focus values stay on the component record and no `focus-visible` row carries a treatment. |
| Disabled | Captured only for the Business Profile inactive image card. |
| Expanded menu | Captured on the dark Search homepage language/menu interaction. No component record is declared for that menu; the observation is not promoted into a new control. |
| Empty | No empty-state surface was observed. |
| Loading | No loading-state surface was observed. |
| Error | No error-state surface was observed. |
| Success | No success-state surface was observed. |

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Absence of a capture is not a `not-applicable` reason. Every interactive-kind verdict, every applicability verdict, the reason given for either, and the distinction that a generic Focus capture is a different evidence class from a `focus-visible` treatment, is a derived editorial implementation inference from the verified surfaces; none of them is Google-authored or taken from a separately published UI specification, including the published Material Design 3 documentation. This is not a complete state-coverage claim.

### Business Profile high-emphasis action

- Role: Business Profile high-emphasis action only.
- Primitive type: `button` · Kind: interactive
- Domain: Business Profile
- Background: `#1a73e8`
- Text: `#ffffff`
- Border: 1px solid transparent
- Radius: 1000px
- Padding: 8px 16px
- Height: 42px
- Font: 16px / 500 / Google Sans
- Hover (observed): `#1a72e7` background
- Pressed (observed): `#185abc` background
- Focus (observed, not a `focus-visible` treatment): `#185abc` background with 2px same-color outer ring
- Selector provenance: surface-3 `[data-omd-capture="11"]` — recorded in the sidecar

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured treatment above |
| hover | applicable | Pointer-web button; `#1a72e7` background observed |
| focus-visible | applicable | Keyboard-reachable action control; no `focus-visible` treatment is carried — the observed Focus value stays on the record above |
| disabled | applicable | The control is a high-emphasis action and can be gated; visual treatment omitted |
| loading | applicable | The control is named an action; the capture does not establish whether it commits in place or only leads to a destination, so loading is not closed |
| error | applicable | Same unresolved commit/destination boundary; visual treatment omitted |
| success | applicable | Same unresolved commit/destination boundary; visual treatment omitted |

### Business Profile medium-emphasis action

- Role: Business Profile medium-emphasis action only.
- Primitive type: `button` · Kind: interactive
- Domain: Business Profile
- Background: `#ffffff`
- Text: `#1a73e8`
- Border: 1px solid `#dadce0`
- Radius: 1000px
- Padding: 8px 16px
- Height: 42px
- Font: 16px / 500 / Google Sans
- Hover (observed): `#ffffff` background and `#1a73e8` border
- Pressed (observed): `#e8f1fd` background
- Focus (observed, not a `focus-visible` treatment): `#e4eefc` background with 2px `#1a73e8` outer ring
- Selector provenance: surface-3 `[data-omd-capture="10"]` — recorded in the sidecar

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured treatment above |
| hover | applicable | Pointer-web button; `#ffffff` background and `#1a73e8` border observed |
| focus-visible | applicable | Keyboard-reachable action control; no `focus-visible` treatment is carried |
| disabled | applicable | The control is a medium-emphasis action and can be gated; visual treatment omitted |
| loading | applicable | Named an action; commit-versus-destination is unresolved, so loading is not closed |
| error | applicable | Same unresolved commit/destination boundary; visual treatment omitted |
| success | applicable | Same unresolved commit/destination boundary; visual treatment omitted |

### Business Profile navigation menu item

- Role: Business Profile global navigation menu item.
- Primitive type: `button` · Kind: interactive
- Domain: Business Profile
- Text: `#202124`
- Radius: 4px
- Padding: 0px 10px
- Height: 48px
- Font: 14px / 500 / Google Sans
- Hover, pressed, and focus were captured without a retained changed token value
- Selector provenance: surface-3 `[data-omd-capture="2"]` — recorded in the sidecar

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured treatment above |
| hover | applicable | Pointer-web menu item; no retained changed token |
| focus-visible | applicable | Keyboard-reachable navigation control; no `focus-visible` treatment is carried |
| disabled | applicable | A menu item can be gated; visual treatment omitted |
| loading | not-applicable | A global navigation menu item leads to a destination; it commits no operation in place |
| error | not-applicable | The same destination role has no in-place operation whose failure can be reported on the item |
| success | not-applicable | The same destination role has no in-place operation whose completion can be confirmed on the item |

### Business Profile inactive image card

- Role: Business Profile scrolling image card only.
- Primitive type: `card`
- Domain: Business Profile
- Background: `#ffffff`
- Text: `#3c4043`
- Radius: 24px
- Padding: 18px 18px 32px
- Font: 16px / 400 / Google Sans Text
- Observed: disabled on the captured inactive image card. No enabled-card substitution is asserted.
- The source assigns `type: card` and a disabled observation. Omitting `kind` and a state-applicability map — because that pair is not interactive-kind evidence for an enabled control — is a derived editorial implementation inference from the verified surfaces; it is not Google-authored or taken from a separately published UI specification, including the published Material Design 3 documentation.

### Dark Search submit key

- Role: Captured dark Search homepage submit key only.
- Primitive type: `button` · Kind: interactive
- Domain: dark Search homepage
- Background: `#303134`
- Text: `#e8eaed`
- Border: 1px solid `#303134`
- Radius: 8px
- Padding: 0px 16px
- Height: 36px
- Font: 14px / 500 / Arial
- Hover (observed): 1px `#5f6368` border and `rgba(23,23,23,0.24) 0px 1px 3px 0px` shadow
- Focus, hover, and pressed were captured
- Selector provenance: home `[data-omd-capture="12"]` — recorded in the sidecar

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured treatment above |
| hover | applicable | Pointer-web submit control; border and shadow observed |
| focus-visible | applicable | Keyboard-reachable submit control; no `focus-visible` treatment is carried |
| disabled | applicable | A submit key can be gated; visual treatment omitted |
| loading | applicable | The control submits Search; that commit can pend |
| error | applicable | A search submit can fail; visual treatment omitted |
| success | applicable | A search submit can complete; visual treatment omitted |

### Advanced Search text field

- Role: Advanced Search text input; Arial system face.
- Primitive type: the token block declares no type for this field; the source lists it as a text field · Kind: interactive
- Domain: Advanced Search
- Text: `#474747`
- Padding: 12px 16px
- Height: 48px
- Font: 16px / 400 / Arial
- The visible input itself was transparent; no container background or radius is asserted
- Selector provenance: surface-2 `[data-omd-capture="2"]` — recorded in the sidecar

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured treatment above |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable form field; no `focus-visible` treatment is carried |
| disabled | applicable | A form field can be gated; visual treatment omitted |
| loading | not-applicable | The field accepts a value; the operation is committed by the form's submit action, not by the field |
| error | applicable | Form field; visual treatment omitted |
| success | not-applicable | Completion is not confirmed on the field; the field accepts a value |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

- **Search homepage:** Captured as a dark, centered utility surface with compact 36px submit keys and a 50px text area.
- **Advanced Search:** Captured as a light form surface with 48px text inputs and 12px vertical / 16px horizontal field padding.
- **Business Profile:** Captured as a light public business-product page with 42px and 50px pill actions, 48px navigation rows, and 24px image cards.
- **Observed spacing values:** 4, 8, 12, 16, 24, 32, and 48px recur in the capture. These are observations, not a universal Google grid declaration; reading the scale that way is a derived editorial implementation inference from the verified surfaces; it is not Google-authored or taken from a separately published UI specification, including the published Material Design 3 documentation.

The supplied collector evidence is desktop-only (1440x900). It confirms 48px Business Profile navigation rows, 42px and 50px Business Profile actions, 36px dark Search keys, and 48px Advanced Search inputs at that viewport. No mobile breakpoint, layout-collapse rule, or touch-target baseline is asserted from this packet.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Google's official philosophy leads with usefulness, focus, and speed. The current source language is concise and user-directed: Google says to focus on the user, to do one thing well, and that fast is better than slow. Reading a "short, plain register that names the task and next action without inventing urgency or decorative brand voice" as the product implication of those sentences is a derived editorial implementation inference from the verified surfaces; it is not Google-authored or taken from a separately published UI specification, including the published Material Design 3 documentation.

| Context | Tone |
|---|---|
| Search and forms | Brief, functional, task-first |
| Product marketing | Helpful and direct |
| Help or error content | Plain-language cause and next step |

The tone table is the source's own. The three characterizations in the Tone column are editorial labels on official philosophy, and they share the qualification in the paragraph above.

**Source-grounded voice samples:**

- "Focus on the user and all else will follow." — Google, Ten things we know to be true.
- "It is best to do one thing really, really well." — Google, Ten things we know to be true.
- "Fast is better than slow." — Google, Ten things we know to be true.

The source supplies those three official sentences and the tone table. It does not supply product CTA, error, or empty-state strings from the three captured surfaces, so no synthetic microcopy samples are promoted.

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

- empty, loading, error, and success visual treatments
- motion duration, easing curve, animation name, transition property, and reduced-motion behavior
- a first-party audience segment
- mobile breakpoint, layout-collapse rule, and touch-target baseline
- a license URL for the loaded Google Sans, Google Sans Text, or Google Sans Display webfont files
- an enabled-card specification for the Business Profile image card
- Material documentation chrome or baseline palette as Search or Business Profile product tokens
