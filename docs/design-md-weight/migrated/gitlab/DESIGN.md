# GitLab Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

GitLab is a DevSecOps platform — a single application spanning the whole software lifecycle: plan, build, secure, and deploy. That description is the source's own, and its closing note classes the history it belongs to as widely documented public fact rather than a quotation from a single verified GitLab statement. This contract covers two first-party web surfaces that were inspected live: the marketing chrome at `about.gitlab.com`, and the open Pajamas design system at `design.gitlab.com` together with its canonical button, badge, and text-input component pages. It does not treat these two captures as a proxy for the GitLab product application itself, for the handbook, or for the docs site beyond the Pajamas pages listed here.

The two surfaces share one typeface and split their color logic. The marketing layer is ink-forward and editorial: pure white (`#ffffff`) under a near-black plum ink (`#171321`) set in the custom **GitLab Sans**, with the hero headline "Ship faster. With trust." running at 96px / weight 660 / -2.88px tracking. The Pajamas layer at `design.gitlab.com` is GitLab's open, "radically transparent" design system, and its canonical action color is the Pajamas blue `#1f75cb`. The Tanuki orange `#fc6d26` is the brand mark and accent — it appears in the logo, icon flourishes, and emphasis labels — and the source records that it is deliberately *not* the primary button color; that role belongs to the blue. A GitLab Duo purple `#7759c2` marks AI-assisted surfaces. Geometry is restrained across both layers: marketing CTAs use a sharp 4px corner, the Pajamas component library standardizes on 8px for buttons and inputs and 16px for cards, and badges run as full pills at 160px radius. Marketing carries essentially no decorative shadow; depth is built from flat ink panels and a single soft inset border on form fields. The measurements in this paragraph are recorded values; the characterizations built on them — ink-forward, editorial, restrained geometry — are a derived editorial implementation inference from the verified surfaces; they are not GitLab-authored or taken from a separately published UI specification, including the published Pajamas documentation.

GitLab began in **2011** when **Dmitriy Zaporozhets**, a Ukrainian developer, started building an open-source Git repository manager because the collaboration tools available to him were inadequate; **Sytse "Sid" Sijbrandij** founded the company around the project in **2014** and became CEO. The product grew from a self-hosted Git tool into a single-application DevSecOps platform spanning plan, build, secure, and deploy, and the company went public on the Nasdaq in **2021**. Its defining cultural trait is **radical transparency**: the handbook, the processes, and the **Pajamas** design system are all public by default, and the company has operated as an all-remote organization at scale. Pajamas is a genuinely open, documented component library — tokens, usage, Vue implementation — that anyone can read and build against. The source also reads GitLab's refusals and embraces off the same design: what it refuses is "the closed, screenshot-only “trust us” posture of legacy enterprise software, and hype-driven marketing that substitutes adjectives for outcomes"; what it embraces is "a single open platform, a published design system, plain outcome-framed copy backed by numbers, and a restrained multi-accent palette (action blue, Tanuki orange, Duo purple) that stays disciplined about which color means what." That refuses/embraces pairing is one of the editorial readings named in the final paragraph of this section, not a GitLab-published statement. The source's own closing note records this history as widely documented public facts rather than as a statement quoted from a single verified GitLab source in that turn.

Two boundaries follow from the capture and must be kept while reading the rest of this document. First, the marketing chrome and the Pajamas system are separate evidence domains: a marketing measurement (4px CTA corner, 96px headline, ink fill) is not a Pajamas product token, and a Pajamas token (8px control radius, 32px control height, 14px UI text) is not a marketing value. Every value below carries the domain it was observed in. That separation is the source's own: its token note attributes the ink chrome to `about.gitlab.com` and the canonical component tokens to `design.gitlab.com`, and its conflict matrix resolves the one place the two disagree — button radius — by retaining both as separate variant subgroups rather than merging them. Second, the sibling verification file classes Pajamas as "the open Pajamas design system, an official first-party DS", so its component values are documented product tokens rather than incidental observations — but only the button, badge, and text-input pages were read, and the rest of Pajamas is outside this capture.

Reading the two-layer split as "one identity across two surfaces", the multi-accent palette as a role-per-color discipline, and the near-flat treatment as a consequence of the transparency posture are derived editorial implementation inferences from the verified surfaces; they are not GitLab-authored or taken from a separately published UI specification, including the published Pajamas documentation. The source's own closing note names "one color, one job" and "flat and structural" as editorial readings of exactly that kind, and describes the whole impression as an "engineering tool that learned typography."
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

- Evaluate the DevSecOps platform from the marketing homepage and act on its trial or demo CTA ("Get free trial", "Try for free", "Request a demo").
- Read the open Pajamas design system and its canonical component pages for button, badge, and text-input tokens.
- Build an interface against the published Pajamas component library — tokens, usage, Vue implementation — so that the result matches GitLab's own product UI.
<!-- design-md:claim-end -->

### Audience

No individual persona is promoted. The source's persona section states in its own header, and again in its closing note, that its three archetypes are fictional and that the names are illustrative; those biographies are not carried here and are not re-hosted in the sidecar. Use only what the two captured surfaces establish at a group level: practitioners who evaluate the platform from the marketing homepage, and builders who read Pajamas and implement against its tokens. That grouping is a derived editorial implementation inference from the verified surfaces; it is not GitLab-authored or taken from a separately published UI specification, including the published Pajamas documentation; the second group is the one the source's voice table names directly. The source's voice table addresses the second group directly — "Docs / Pajamas: Precise, peer-to-peer, example-led; respects the reader as a practitioner."

### Distinctive traits

The eight traits below are the source's own summary of the two surfaces. The values in them are measured; the groupings and the readings inside them ("two-tier color logic", "restrained radius", "cool neutral text ladder") are a derived editorial implementation inference from the verified surfaces — they are not GitLab-authored or taken from a separately published UI specification, including the published Pajamas documentation.

- Custom **GitLab Sans** across both marketing and product — semibold (660) display, 400 body/UI
- Two-tier color logic: **ink `#171321`** for marketing chrome, **action blue `#1f75cb`** for product/Pajamas confirm
- **Tanuki orange `#fc6d26`** as brand accent/logo color — never the primary button fill
- **GitLab Duo purple `#7759c2`** reserved for AI-assisted surfaces
- Dark ink panels (`#1f1c2e`, `#060a0f`) for proof-stat cards and immersive bands — no shadow needed
- Restrained radius: 4px marketing CTA / 8px Pajamas button + input / 16px card / 160px pill badge
- Near-shadowless; form depth via a single 1px inset hairline (`#89888d`)
- Cool neutral text ladder: `#171321` → `#3a383f` → `#74717a` → `#626168`

### Principles

These five principles and their UI implications are the source's own. Each pairs an observation with a reason, and the reasons — the causal link from GitLab's published posture to a specific interface treatment — are a derived editorial implementation inference from the verified surfaces; they are not GitLab-authored or taken from a separately published UI specification, including the published Pajamas documentation. The source's closing note names "one color, one job" and "flat and structural" as editorial readings.

1. **Transparency by default.** GitLab publishes its handbook and design system in the open. *UI implication:* document tokens and usage so any builder can reproduce the system; never rely on hidden/undocumented values.
2. **One color, one job.** Blue acts, orange brands, purple means AI. *UI implication:* reserve `#1f75cb` for the primary action, `#fc6d26` for brand/logo, `#7759c2` for Duo/AI — never blur the roles.
3. **Outcomes over adjectives.** Claims are numbers ("82% decrease in cycle time"), not superlatives. *UI implication:* lead with a measured stat and a unit; let proof-stat cards carry the persuasion.
4. **Dense where it works, generous where it persuades.** *UI implication:* Pajamas controls stay tight (32px, 14px); marketing headlines and cards open up (96px, 32px padding).
5. **Flat and structural.** Depth comes from ink panels and a single hairline, not stacked shadows. *UI implication:* separate with color and 1px borders; reserve soft shadow for true overlays only.

### Application rules

The source's eight application rules, kept as brand rules rather than as universal governance. The justifications inside them — why a color belongs to one role, why a control geometry is standardized — are a derived editorial implementation inference from the verified surfaces; they are not GitLab-authored or taken from a separately published UI specification, including the published Pajamas documentation.

- Use GitLab Sans for everything — let weight (660 vs 400) carry the hierarchy
- Use action blue (`#1f75cb`) for primary confirm buttons and interactive state in product UI
- Keep Tanuki orange (`#fc6d26`) as a brand accent — logo, icon flourish, emphasis label only
- Reserve Duo purple (`#7759c2`) for AI-assisted (GitLab Duo) surfaces
- Use ink plum (`#171321`) for marketing text and ink CTAs instead of pure black
- Standardize Pajamas controls at 8px radius, 32px height, 14px text
- Use full-pill (160px) badges with the matched tint+text semantic pairs
- Build depth from ink/dark panels and a single inset hairline, not stacked shadows

### Avoid

The first eight avoidances are the source's own, and the reasons attached to them share the evidence class named under Application rules. The last item is a scope boundary added by this migration rather than a source statement.

- Use the Tanuki orange as a primary button fill — the primary action color is blue `#1f75cb`
- Mix marketing 4px CTA radius with Pajamas 8px control radius on the same surface
- Use pure black for body text — use ink `#171321` or text `#3a383f`
- Spread Duo purple onto non-AI surfaces — it signals "AI" specifically
- Use a light weight for display headlines — GitLab Sans display is semibold 660
- Add drop shadows to marketing cards — the marketing layer is shadow-free
- Pair a badge tint with a mismatched text color — each semantic has a fixed tint+text pair
- Set positive letter-spacing at display sizes — GitLab tracks tight (-2.88px at 96px)
- Present these two captures as authority for the GitLab product application, the handbook, or Pajamas pages other than button, badge, and text-input

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
Every value in this section is a recorded measurement carrying the domain it was observed in. The explanatory clauses attached to those values — why a padding is tight, what a shadow is *for*, what a color rule protects — are a derived editorial implementation inference from the verified surfaces; they are not GitLab-authored or taken from a separately published UI specification, including the published Pajamas documentation. Motion is qualified separately below, because unlike the rest of this section it rests on no measurement at all.

### Semantic color

**Primary & brand** — the source's token note leads with this action/brand split.

| Role | Value | Domain | Recorded use |
|---|---|---|---|
| Action Blue | `#1f75cb` | Pajamas product | Primary interactive color. Pajamas confirm-button background, links, focus rings, selected state. The product system's "do this" color. |
| Action Blue Border | `#2f68b4` | Pajamas product | 1px border on the confirm button and active blue elements. |
| Tanuki Orange | `#fc6d26` | Brand mark / marketing | The GitLab brand/logo color. Used for the Tanuki mark, icon flourishes, and emphasis labels on the homepage hero. Accent only — never a primary button fill. |
| Duo Purple | `#7759c2` | Marketing / AI surfaces | GitLab Duo (AI) accent. Marks AI-assisted surfaces and Duo branding on the marketing site. |

**Ink & dark surfaces**

| Role | Value | Domain | Recorded use |
|---|---|---|---|
| Ink Plum | `#171321` | Marketing | Primary marketing text/heading color and the ink CTA background. A near-black warm plum, used instead of pure black. |
| Ink Strong | `#18171d` | Pajamas docs | Strong/headline text token in the Pajamas docs surface. |
| Dark Surface | `#1f1c2e` | Marketing | Lifted dark panel for proof-stat cards ("4 hours saved", "82% decrease"). |
| Dark Deep | `#060a0f` | Marketing | The deepest near-black panel for immersive sections. |

**Text hierarchy**

| Role | Value | Domain | Recorded use |
|---|---|---|---|
| Text Default | `#28272d` | Pajamas | Default body/UI text in the Pajamas system. |
| Text Primary | `#3a383f` | Pajamas docs | Primary docs body and default-button label color. |
| Muted | `#74717a` | Marketing / Pajamas | Secondary/marketing muted text and inactive nav labels. |
| Muted Alt | `#626168` | Pajamas | Pajamas muted/secondary text token. |
| Faint | `#4c4b51` | Pajamas | Low-emphasis labels, neutral badge text. |

**Neutral & surface**

| Role | Value | Domain | Recorded use |
|---|---|---|---|
| Pure White | `#ffffff` | Both | Page background, cards, button-on-dark text. |
| Surface | `#f4f4f4` | Marketing | Light grey section background. |
| Surface Tint | `#f2f1f5` | Marketing | Cool-grey chip/secondary surface (language switcher, soft buttons). |
| Purple Tint | `#f6f3fe` | Marketing | Soft lavender surface for Duo/AI-themed cards. |
| Hairline | `#bfbfc3` | Pajamas | Default-button border and standard dividers. |
| Hairline Soft | `#dcdcde` | Pajamas | Disabled-button border, faint dividers. |

**Semantic (Pajamas)** — each semantic is a fixed tint + text pair; the pairs are not interchangeable.

| Role | Value | Recorded use |
|---|---|---|
| Danger | `#dd2b0e` | Destructive button background |
| Danger Border | `#c02f12` | Destructive button border |
| Danger Text | `#a32c12` | Tertiary danger and danger-badge text |
| Danger Tint | `#fdd4cd` | Danger badge background |
| Success Tint / Success Text | `#c3e6cd` / `#306440` | Success badge |
| Warning Tint / Warning Text | `#f5d9a8` / `#894b16` | Warning badge |
| Info Tint / Info Text | `#cbe2f9` / `#2f5ca0` | Info badge |
| Tier Tint / Tier Text | `#e1d8f9` / `#5c47a6` | Tier/plan pill — the purple semantic |

Two further values belong to component states rather than to the palette: the selected default button uses `#ececef` with an inset `#a4a3a8`, and the disabled/loading default button uses `#fbfafd` with `#74717a` text and a `#dcdcde` border. They are recorded with their components in section 4.

### Spacing

- Base unit: 4px / 8px
- Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px
- Pajamas component padding is tight — `0px 12px` on buttons, `8px 12px` on inputs — for tool density, while marketing cards open up to 24px–32px padding.

### Shape

| Step | Value | Domain |
|---|---|---|
| Sharp | 4px | Marketing CTA buttons, nav hit-areas |
| Standard | 8px | Pajamas buttons and inputs — the product workhorse; also Pajamas docs nav items |
| Card | 14px | Product-nav card grid inside the marketing dropdown panels |
| Card | 16px | Marketing nav/feature cards and dark proof-stat cards |
| Pill | 160px (full) | Badges and status chips |

The source records the marketing card family at 14–16px and keeps the two measurements distinct by element rather than reconciling them into one card radius; both are kept here with their elements.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | Marketing page background, most surfaces |
| Tint / Ink (Level 1) | `#f4f4f4` light or `#171321`/`#1f1c2e` dark panel | Section + card separation without elevation |
| Inset border (Level 2) | `0 0 0 1px inset #89888d` | Pajamas form-input boundary |
| Selected (Level 2) | `0 0 0 1px inset #a4a3a8` | Selected default button |
| Elevated (Level 3) | `rgba(5,5,6,0.08) 0px 2px 8px` | Pajamas dropdowns / popovers |

The two token-level shadow values the source declares are `rgb(137,136,141) 0px 0px 0px 1px inset` for the inset border and `rgba(5,5,6,0.08) 0px 2px 8px` for the elevated level.

GitLab is a near-flat system. The marketing site runs `box-shadow: none` across hero, nav, CTAs, and cards — depth is communicated entirely through ink/dark color panels (`#171321`, `#1f1c2e`, `#060a0f`) and light surface tints (`#f4f4f4`). The Pajamas product system reaches for shadow only where structure demands it: a single 1px inset hairline (`#89888d`) defines form-field boundaries, an inset `#a4a3a8` marks the selected button, and a soft `rgba(5,5,6,0.08)` lift floats dropdowns. Emphasis comes from color (action blue, Tanuki orange, Duo purple) and dark panels, not from stacked elevation. The last two sentences read a purpose into the measurements; that reading is a derived editorial implementation inference from the verified surfaces, not GitLab-authored and not taken from a separately published UI specification, including the published Pajamas documentation.

### Motion

The source attributes its token-level claims to a live inspection of computed color, type, geometry, border, and shadow on the two surfaces. The motion contract below sits outside that attribution: the sibling verification file records no transition, animation, duration, or easing observation on either surface. The durations, easing roles, and motion rules below are therefore a derived editorial implementation inference from the verified surfaces; they are not GitLab-authored or taken from a separately published UI specification, including the published Pajamas documentation.

Durations:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 100ms | Hover, focus, button press |
| `motion-standard` | 200ms | Dropdown, popover, card/section reveal |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

Easing roles — three roles with declared uses. The specific curve values the source lists are not traceable to GitLab evidence, so the curves are omitted here and only the roles and their uses are kept:

| Token | Use |
|---|---|
| `ease-enter` | Arriving — dropdowns, popovers, cards |
| `ease-exit` | Dismissals |
| `ease-standard` | Two-way transitions |

An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or specification document — does not satisfy that condition.

Motion rules, as the source states them:

- Motion is functional and restrained — fitting a developer platform that signals reliability, not delight.
- Dropdown nav panels and popovers fade/translate in at `motion-standard / ease-enter`; buttons respond to press with a quick state change at `motion-fast`.
- No bounce, spring, or overshoot — infrastructure tooling stays steady.
- Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the product remains fully functional.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | GitLab Sans is GitLab's custom typeface and is used across both captured surfaces — marketing display, product UI, and Pajamas docs. |
| Live computed surface-use | The source's Tier 1 live inspection reads GitLab Sans on both surfaces, and the source records it as the face used for everything — marketing display, product UI, docs. The computed records themselves are in the provenance sidecar. |
| Declared fallback stack | `-apple-system, system-ui, Segoe UI, Roboto, Noto Sans` is the declared fallback behind GitLab Sans. It is a fallback stack, not the brand face, and must not be presented as one. |
| Official distributed asset | This capture reached no GitLab-distributed font file and no license statement for GitLab Sans; neither is asserted here. |
| Outside these captures | Typography inside the GitLab product application, the handbook, and Pajamas pages other than button, badge, and text-input is outside these two captures. |

### Family

- **Current visible UI family:** `GitLab Sans` with the declared fallbacks `-apple-system, system-ui, Segoe UI, Roboto, Noto Sans`
- One typeface covers everything the capture reached: marketing display, product UI, and docs.
- Do not substitute a system face for GitLab Sans and present it as the brand type; the fallback stack is a fallback.

### Type roles

| Role | Font | Size | Weight | Line height | Letter spacing | Notes |
|---|---|---:|---:|---:|---:|---|
| Display Hero | GitLab Sans | 96px (6.00rem) | 660 | 1.04 (100px) | -2.88px | Homepage hero, very tight tracking |
| Section Heading | GitLab Sans | 32px (2.00rem) | 660 | 1.12 | -0.64px | Marketing section titles |
| Sub-section / Card | GitLab Sans | 18px (1.13rem) | 660 | 1.33 | normal | Nav-card heads, marketing CTA labels |
| Body | GitLab Sans | 16px (1.00rem) | 400 | 1.50 (24px) | normal | Marketing body text |
| UI / Docs | GitLab Sans | 14px (0.88rem) | 400-425 | 1.43 | normal | Pajamas component + docs UI text |
| Badge / Caption | GitLab Sans | 12px (0.75rem) | 400 | 1.33 | normal | Pill badge labels, fine print |

The token block records the same six roles with the uses "Hero headline, GitLab Sans semibold", "Section titles", "Card / nav-card heads, CTA labels", "Standard reading text", "Component / docs UI text, Pajamas default", and "Pill badge label"; the UI role is recorded there at weight 400 and in the hierarchy table as 400-425.

### Typography rules

The four rules below are the source's own. Their reasoning — what a weight or a tracking value is *for* — is a derived editorial implementation inference from the verified surfaces; it is not GitLab-authored or taken from a separately published UI specification, including the published Pajamas documentation.

- **One typeface, two registers**: GitLab Sans does both the 96px marketing display and the 14px product UI. The weight (660 semibold vs 400 regular) carries the hierarchy, not a font swap.
- **Semibold 660 as the display weight**: Headlines run at a specific 660 weight — heavier than regular, lighter than full bold — giving GitLab Sans a confident-but-not-shouty display voice.
- **Aggressive negative tracking at display sizes**: -2.88px at 96px, easing to -0.64px at 32px, normal at body. Large headlines compress into tight, engineered blocks.
- **14px is the product baseline**: The Pajamas component library standardizes UI text at 14px / weight 400 (with 425 for some nav items) — dense, scannable, tool-grade.

### Assets

- **Brand mark.** The Tanuki is the GitLab brand mark and carries the Tanuki orange `#fc6d26`; the marketing capture measures that same orange on hero emphasis labels and icons. Brand iconography keeps `#fc6d26` at all sizes.
- **Logo file.** The catalog entry points at a third-party icon-set rendering of the mark rather than at a GitLab-distributed logo file; that entry, its byte size, and its fill attribute are recorded in the provenance sidecar, and no GitLab-hosted logo asset is asserted here. Classing that entry as a third-party rendering is this migration's evidence judgment about the catalog's logo field, not a GitLab statement.
- **Product screenshots** sit inside 16px-radius cards with no shadow.
- Dark stat cards keep the `#1f1c2e` background and 16px radius across breakpoints.

<!-- design-md:section components-states -->
## 4. Components & States

### How to read this section

The source declares each component with a primitive type (`button`, `input`, `card`, `badge`) and a value set; those types are preserved per component. Applicability below is judged by each control's role in this product, never by whether a visual treatment for that state happens to be recorded: where the source supplies no treatment for an applicable state, the value is omitted and the state stays applicable. `not-applicable` is used only where the control's role makes the state meaningless — a destination CTA that commits no operation in place, or a display element with no action at all — and the reason given is always that semantic one.

One evidence boundary matters here. The source records a `Focus: blue #1f75cb ring` on the Pajamas text input. That is a generic focus observation, which is a different evidence type from a `focus-visible` treatment; the observation is kept on the input's own record and no `focus-visible` row in this section carries a treatment value.

Every interactive-kind verdict, every applicability verdict, and the reason given for either is a derived editorial implementation inference from the verified surfaces; none of them is GitLab-authored or taken from a separately published UI specification, including the published Pajamas documentation. This is not a complete state-coverage claim.

### Confirm (Primary) Button

- Role: primary confirm action in the Pajamas product system ("Create", "Save")
- Primitive type: `button` · Kind: interactive
- Domain: Pajamas product
- Background: `#1f75cb`
- Text: `#ffffff`
- Border: 1px solid `#2f68b4`
- Radius: 8px
- Padding: 0px 12px
- Height: 32px
- Font: 14px / 400 / GitLab Sans
- Recorded use: "Primary confirm action (Pajamas), hover darkens"

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; the source states that the confirm button darkens on hover but gives no resulting value, so the value is omitted |
| focus-visible | applicable | Keyboard-reachable action control; no treatment carried, see the evidence boundary above |
| disabled | applicable | The control commits an action, so it can be gated; the source declares a disabled treatment for the default button only |
| loading | applicable | The control commits an action, and the state contract declares an in-progress button treatment |
| error | applicable | The control commits an action, and the state contract declares an inline danger banner with a retry after a failed action |
| success | applicable | The control commits an action, and the state contract declares an inline success confirmation |

### Danger Button

- Role: destructive action (delete, remove)
- Primitive type: `button` · Kind: interactive
- Domain: Pajamas product
- Background: `#dd2b0e`
- Text: `#ffffff`
- Border: 1px solid `#c02f12`
- Radius: 8px
- Padding: 0px 12px
- Height: 32px
- Font: 14px / 400 / GitLab Sans
- Recorded use: "Destructive action"

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable action control; no treatment carried |
| disabled | applicable | The control commits a destructive action, so it can be gated; treatment omitted |
| loading | applicable | The control commits an action, and the state contract declares an in-progress button treatment |
| error | applicable | The control commits an action, and the state contract declares an inline danger banner after a failed action |
| success | applicable | The control commits an action, and the state contract declares an inline success confirmation |

### Default (Secondary) Button

- Role: secondary/default action
- Primitive type: `button` · Kind: interactive
- Domain: Pajamas product
- Background: `#ffffff`
- Text: `#3a383f`
- Border: 1px solid `#bfbfc3`
- Radius: 8px
- Padding: 0px 12px
- Height: 32px
- Font: 14px / 400 / GitLab Sans
- Selected (an additional recorded variant, outside the seven canonical states): background `#ececef`, inset 1px `#a4a3a8`
- Disabled: background `#fbfafd`, text `#74717a`, border `#dcdcde`
- Recorded use: "Secondary/default action", with the token block noting "selected #ececef · disabled bg #fbfafd fg #74717a"

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable action control; no treatment carried |
| disabled | applicable | Declared treatment: `#fbfafd` background, `#74717a` text, `#dcdcde` border |
| loading | applicable | The state contract declares this button's in-progress treatment — the same `#fbfafd` / `#74717a` / `#dcdcde` values with an inline spinner and the label still readable |
| error | applicable | The control commits an action, and the state contract declares an inline danger banner after a failed action |
| success | applicable | The control commits an action, and the state contract declares an inline success confirmation |

### Tertiary Confirm Button

- Role: low-emphasis blue action
- Primitive type: the token block declares no type for this variant; the source lists it among the buttons · Kind: interactive
- Domain: Pajamas product
- Background: transparent
- Text: `#1f75cb`
- Border: 1px solid transparent
- Radius: 8px
- Padding: 0px 12px
- Height: 32px

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable action control; no treatment carried |
| disabled | applicable | The control commits an action, so it can be gated; treatment omitted |
| loading | applicable | The control commits an action, and the state contract declares an in-progress button treatment |
| error | applicable | The control commits an action, and the state contract declares an inline danger banner after a failed action |
| success | applicable | The control commits an action, and the state contract declares an inline success confirmation |

### Marketing Ink CTA

- Role: homepage primary CTA — "Get free trial", "Try for free", "Why GitLab?"
- Primitive type: `button` · Kind: interactive
- Domain: Marketing
- Background: `#171321`
- Text: `#ffffff`
- Radius: 4px
- Padding: 11px 16px
- Height: 47px
- Font: 18px / 660 / GitLab Sans
- Recorded use: "Marketing ink CTA on about.gitlab.com — Get free trial / Try for free"

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web control; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; no treatment carried |
| disabled | not-applicable | A marketing CTA that leads to a public trial or demo destination has no precondition to gate — the meaning of a disabled state is absent from the role, not merely unrecorded |
| loading | not-applicable | The CTA sends the reader to a destination; it commits no operation in place, so there is no in-progress state on the control itself |
| error | not-applicable | The CTA commits no operation in place, so a failure of that operation cannot be reported on it; failures belong to the destination's own form |
| success | not-applicable | The CTA commits no operation in place, so completion cannot be confirmed on it |

### Marketing White CTA

- Role: homepage secondary CTA — "Request a demo"
- Primitive type: the token block declares no type for this variant; the source lists it among the buttons · Kind: interactive
- Domain: Marketing
- Background: `#ffffff`
- Text: `#171321`
- Radius: 4px
- Padding: 11px 16px
- Height: 45px
- Font: 18px / 660 / GitLab Sans

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web control; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; no treatment carried |
| disabled | not-applicable | Same role as the ink CTA — a public destination with no precondition to gate |
| loading | not-applicable | Leads to a destination and commits no operation in place |
| error | not-applicable | Commits no operation in place, so a failure cannot be reported on it |
| success | not-applicable | Commits no operation in place, so completion cannot be confirmed on it |

### Text Input (Pajamas)

- Role: Pajamas form field
- Primitive type: `input` · Kind: interactive
- Domain: Pajamas product
- Background: `#ffffff`
- Text: `#3a383f`
- Radius: 8px
- Padding: 8px 12px
- Height: 32px
- Font: 14px / GitLab Sans
- Shadow: `0 0 0 1px inset #89888d` (border rendered as inset shadow)
- Observed focus treatment: the source records a blue `#1f75cb` focus ring on this field. It is recorded here as the generic focus observation it is, and is not carried into the `focus-visible` row.
- Recorded use: "Pajamas form input, focus blue #1f75cb ring"

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web field; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; treatment omitted because the recorded ring is a generic focus observation, a different evidence type |
| disabled | applicable | A form field can be gated while its value may not be edited; treatment omitted |
| loading | not-applicable | The field accepts a value; the operation is committed by the form's action button, and the state contract puts the in-progress treatment on that button |
| error | applicable | Declared: field-level validation message below the field, with the border shifting to danger `#dd2b0e` |
| success | applicable | A validated field can confirm a valid value; the state contract declares the danger direction only, so no treatment is carried |

### Nav / Feature Card

- Role: homepage product-nav card and feature card
- Primitive type: `card`
- Domain: Marketing
- Background: `#ffffff`
- Text: `#171321`
- Radius: 16px
- Padding: 24px
- Recorded use: "Homepage product nav / feature card on dark band"
- The dropdown-panel variant of this card is measured separately at 14px radius with 16px padding inside the multi-card grid.
- No interactive kind and no state-applicability map is declared for this card: the source declares it as a container and names no control, action, or state on the card itself.

### Dark Proof-Stat Card

- Role: dark stat card on the homepage — "4 hours saved per engineer per week", "82% decrease in cycle time"
- Primitive type: `card` · Kind: non-interactive
- Domain: Marketing
- Background: `#1f1c2e`
- Text: `#ffffff`
- Radius: 16px
- Padding: 32px
- Typography: the large stat is set in GitLab Sans 660 and the caption at 16px / 400; the source states no size for the stat itself
- Recorded use: "Dark proof-stat card (4 hours saved, 82% decrease)"
- Kind reason: the card displays a measured stat and its caption. The source names no action, control, or state on it, so it declares no state-applicability map.

### Status Badge (Pajamas)

- Role: status pill
- Primitive type: `badge` · Kind: non-interactive
- Domain: Pajamas product
- Radius: 160px (pill)
- Padding: 2px 6px
- Height: 20px (recorded on the info badge)
- Font: 12px / 400 / GitLab Sans
- Kind reason: a badge displays a status. The source names no action, control, or state on the badge itself, so it declares no state-applicability map.
- Each semantic is a fixed tint + text pair; pairing a tint with another semantic's text color is listed among the avoidances.
- Declaration shape: the token block declares four of these as separate components — `badge-info`, `badge-success`, `badge-danger`, `badge-tier`, each `type: badge` — and the source's component section adds warning and neutral. They are grouped into one component with six variants here because they differ only in the tint + text pair; every declared variant keeps its own values below, and the four token-block records are kept separately in the provenance sidecar.

| Variant | Background | Text | Recorded use |
|---|---|---|---|
| Info | `#cbe2f9` | `#2f5ca0` | Informational status pill — the token block calls it "Info pill (Pajamas badge)" |
| Success | `#c3e6cd` | `#306440` | Success / passed status — "Success pill" |
| Warning | `#f5d9a8` | `#894b16` | Warning status |
| Danger | `#fdd4cd` | `#a32c12` | Failed / error status — "Danger pill" |
| Neutral | `#dcdcde` | `#4c4b51` | Neutral / default status |
| Tier (Plan) | `#e1d8f9` | `#5c47a6` | Plan/tier pill (Premium/Ultimate) — the purple semantic, "Tier / plan pill (purple)" |

### Navigation record

The source describes the top navigation as an arrangement rather than as a declared component with a token entry:

- Background: `#ffffff`
- Inactive label: `#74717a`
- Active/link label: `#171321`
- Font: 16px / 400 / GitLab Sans (marketing top nav)
- Radius: 4px on the nav hit-area, 8px on Pajamas docs nav items
- Use: top horizontal marketing nav — "Platform", "Product", "Why GitLab"

### State record

The source's state contract, preserved with its values and copy:

| State | Treatment |
|---|---|
| **Empty (no projects / no results)** | White canvas, ink (`#171321`) headline at body size explaining the empty condition, one action-blue (`#1f75cb`) confirm CTA to create. No decorative illustration clutter. |
| **Empty (filtered list, zero rows)** | Muted (`#74717a`) single line stating nothing matches, with the active filter visible above to adjust scope. |
| **Loading (page first paint)** | Skeleton blocks at final dimensions in soft hairline (`#dcdcde`); flat pulse, consistent with the near-shadowless system. |
| **Loading (button in-progress)** | Default button enters loading: background `#fbfafd`, text `#74717a`, border `#dcdcde`, inline spinner — label stays readable. |
| **Error (action failed)** | Inline danger banner with `#a32c12` text on `#fdd4cd` tint, a plain-language explanation, and a retry. No bare "Something went wrong". |
| **Error (form validation)** | Field-level message below the input in danger tone; describes what is valid, not just "Required". Input border shifts to danger `#dd2b0e`. |
| **Success (saved / passed)** | Success badge: `#306440` text on `#c3e6cd` tint, 160px pill. Inline confirmation, no celebratory emoji. |
| **Skeleton** | `#dcdcde` blocks at final dimensions, flat pulse, matched radii (8px controls / 16px cards). |
| **Disabled** | Default button: `#fbfafd` background, `#74717a` text, `#dcdcde` border. Blue actions fade rather than turn grey to preserve the action read. |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

### Grid and container

- Marketing hero: centered single column anchored by the 96px GitLab Sans headline
- Product-nav cards arranged in a multi-card grid inside dropdown panels (14px radius)
- Proof-stat carousel: dark `#1f1c2e` cards at 16px radius in a horizontal row
- Feature bands alternate white (`#ffffff`) and dark ink (`#171321` / `#1f1c2e`) full-width sections
- Pajamas docs: persistent left nav rail + content column, all on white

### Whitespace

- **Generous marketing, dense product**: the `about.gitlab.com` layer breathes with large headlines and big card padding; the Pajamas component layer is compact and information-dense (32px-tall controls).
- **Flat banding for rhythm**: sections separate by background color (white → ink → dark) rather than by shadow or heavy borders.
- **Pill cadence in status**: badges use a consistent 160px-radius pill, creating a uniform horizontal rhythm in status displays.

The three readings above name a purpose for each measurement. They are a derived editorial implementation inference from the verified surfaces; they are not GitLab-authored or taken from a separately published UI specification, including the published Pajamas documentation. The measurements themselves — 32px control height, 160px badge radius, the alternating band colors — are recorded values.

### Responsive behavior

| Name | Width | Key changes |
|---|---|---|
| Mobile | <640px | Single column, hero headline compresses from 96px, cards stack |
| Tablet | 640-1024px | 2-column feature grids, dropdown nav collapses to hamburger |
| Desktop | 1024-1280px | Full layout, multi-card nav panels, horizontal stat carousel |
| Large Desktop | >1280px | Centered content with generous margins |

Touch targets:

- Pajamas controls at 32px height with comfortable horizontal padding
- Marketing CTAs at 45–47px height for prominent tap targets
- Badge pills at 20px height with 6px horizontal padding minimum
- Nav items spaced for touch within the marketing header

Collapsing strategy:

- Hero: the 96px GitLab Sans headline scales down on mobile, weight 660 maintained
- Product-nav dropdown panels: multi-card grid → stacked list on mobile
- Proof-stat carousel: horizontal scroll → stacked dark cards
- Feature bands: alternating white/ink full-width treatment preserved, internal padding reduced

Image behavior:

- Product screenshots sit inside 16px-radius cards with no shadow
- Tanuki/brand iconography keeps the orange `#fc6d26` at all sizes
- Dark stat cards maintain the `#1f1c2e` background and 16px radius across breakpoints

The breakpoint table, the touch-target sizes, and the collapsing rules are the source's own responsive contract, stated as intended behavior at each width. The token values elsewhere in this document come from one live inspection whose viewport the provenance sidecar records, rather than from a separate capture at each breakpoint.

<!-- design-md:section content-locales -->
## 6. Content & Locales

GitLab's voice is **transparent, direct, and quietly confident** — the register of an engineering organization that publishes its entire handbook and design system in the open. Copy is plain and outcome-oriented ("Ship faster. With trust."), favoring concrete capability over hype. Button labels are austere imperatives ("Get free trial", "Request a demo", "Why GitLab?"), and proof points are stated as numbers ("4 hours saved per engineer per week", "82% decrease in cycle time") rather than adjectives. Naming that register and tying it to the transparency posture is a derived editorial implementation inference from the verified surfaces; it is not GitLab-authored or taken from a separately published UI specification, including the published Pajamas documentation. The tone table below is the source's own, and its characterizations share that class. The three samples after it are the verbatim strings the whole reading is built on.

| Context | Tone |
|---|---|
| Hero headlines | Declarative, short, outcome-framed. "Ship faster. With trust." Never superlative. |
| Product/feature descriptions | Capability + concrete outcome. "AI for the entire software lifecycle." |
| CTAs | Austere imperatives. "Get free trial", "Request a demo", "Try for free". |
| Proof / metrics | Numbers stated plainly with a unit, no embellishment. |
| Docs / Pajamas | Precise, peer-to-peer, example-led; respects the reader as a practitioner. |
| Handbook / about | Radically transparent, plain, self-documenting. |

**Voice samples (verbatim from live surfaces):**

- "Ship faster. With trust." — homepage hero H1.
- "Finally, AI for the entire software lifecycle." — homepage `<title>`.
- "4 hours saved per engineer per week" — proof-stat card.

**Forbidden register**: hype superlatives ("revolutionary", "game-changer"), vague benefit-speak without a number, exclamation-heavy marketing, and anything that contradicts the "radically transparent" posture (gated or evasive copy).

The two captured surfaces are English. The marketing chrome carries a language switcher — the source records the cool-grey surface tint `#f2f1f5` as that chip's background — but it states no per-locale behavior, so this contract establishes none.

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

These are named values without a resolved treatment, not permissions to invent:

- the exact easing curves behind `ease-enter`, `ease-exit`, and `ease-standard`, and the per-component motion evidence that the Foundations promotion condition requires before any curve is promoted
- the hover treatment of the Pajamas confirm button, which the source describes as "hover darkens" without a value, and the hover treatment of every other control
- the focus treatment of controls other than the Pajamas text input, and the `focus-visible` treatment of all of them
- the height of the success, warning, danger, neutral, and tier badges, which the source measures on the info badge only
- the primitive type of the tertiary confirm button and the marketing white CTA, which the source lists among the buttons without a token-block type
- the font size of the large stat inside the dark proof-stat card
- the language switcher's per-locale behavior beyond the chip surface color
