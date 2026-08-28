# KKBOX Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

KKBOX is Taiwan's pioneering music-streaming service, the audio flagship of the KKCompany group. This contract covers the first-party public surface the source inspected for tokens: `https://www.kkbox.com`. Named first-party sources that frame the group and the brand-owned engineering org — and that the source does not treat as that live token surface — are `https://www.kkcompany.com` and `https://github.com/KKBOX`. The YAML token set is `prose-derived`. Every value stays attached to the surface that established it. Live canvas, accent, pill, display type, and download-button geometry attach to `https://www.kkbox.com`. Reading `https://www.kkbox.com` as this contract's live token surface, keeping `https://www.kkcompany.com` and `https://github.com/KKBOX` as named group and engineering-org sources rather than as that live token surface, and keeping every value attached to the surface that established it, are derived editorial implementation inferences from the verified surfaces; they are not KKBOX-authored or a separately published UI specification.

KKBOX wraps its interface in a near-black, cinematic canvas where the music itself feels like the source of light. The ground is a deep `#111111` that recedes into the background, letting album art, hero photography, and oversized white display type carry the visual weight. A single signature accent — the KKBOX cyan-blue `#00B6E1` / `#00b6e1` — punches through the darkness, reserved for the moments that matter most, like the download call to action. The mood is premium and audio-forward. Typography does the heavy lifting: Work Sans at hero scale (up to 120px) gives the page an editorial, almost poster-like confidence. Softly rounded pill buttons and generous spacing keep the experience calm rather than busy. The hex values, Work Sans at 120px / 600, Helvetica Neue at 14px, the 30px pill, and the 16px 48px / 57px download CTA are recorded. Calling the canvas cinematic, calling music the source of light, calling the room premium and audio-forward, calling the hero editorial and poster-like, and reading the brand as less like a utility and more like a stage, are derived editorial implementation inferences from the verified surfaces; they are not KKBOX-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. KKBOX is Taiwan's pioneering music-streaming service, the audio flagship of the KKCompany group. Its story is one of being first and staying premium — a service that helped define what streaming felt like in its region and has carried a refined, design-led sensibility ever since. The near-black canvas, the singular cyan accent, and the editorial display type all tell the same story: this is a brand that treats music as the main event and the interface as a quiet, cinematic frame around it. Taiwan's pioneering music-streaming service, the KKCompany group, being first and staying premium, the regional streaming definition, the refined design-led sensibility, and that closing music-as-the-main-event sentence are the source's own narrative facts; they do not by themselves supply interface tokens. Classifying that pioneering-and-KKCompany narrative as context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not KKBOX-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=2 lang=en -->
### Primary tasks

Selecting these two as the product's primary tasks, classifying them as surface-or-control outcomes rather than fictional biographies, and recording that they do not come from the source's persona section, is a derived editorial implementation inference from the verified surfaces; it is not KKBOX-authored or a separately published UI specification. Each names a surface or control the source records. They do not come from the source's persona section.

- Read the editorial hero on `https://www.kkbox.com`.
- Use the primary download CTA on `https://www.kkbox.com`.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source's three persona entries are role archetypes with served-by design notes; those biographies are dropped rather than promoted, and no name, motivation, or affiliation classification is carried into this document or its sidecar. The source independently records the product as Taiwan's pioneering music-streaming service. Reading that independently recorded identity as product scope rather than as an invented audience list, dropping the source's archetype biographies rather than promoting them, and refusing to carry a name, motivation, or affiliation classification, is a derived editorial implementation inference from the verified surfaces; it is not KKBOX-authored or a separately published UI specification.

### Distinctive traits

The list restates the source's recorded characteristics. The values are recorded; classifying the list as that restatement, and the groupings and the readings inside them, are a derived editorial implementation inference from the verified surfaces — they are not KKBOX-authored or a separately published UI specification.

- Near-black canvas `#111111` with white display type `#FFFFFF` / `#ffffff`
- Single KKBOX cyan-blue accent `#00B6E1` / `#00b6e1` reserved for the download CTA
- Light pill surface `#F2F2F2` / `#f2f2f2` floating on the dark ground
- Work Sans hero at 120px / 600 against Helvetica Neue body at 14px / 400
- Soft 30px pill, 16px 48px padding, 57px height on the download CTA
- Depth via tonal contrast, not drop shadow

### Principles

These four items are a derived editorial implementation inference from the verified surfaces; they are not KKBOX-authored or a separately published UI specification. The source states them in its own Principles section.

- **One accent, used with intent** — the cyan `#00B6E1` / `#00b6e1` appears where decisions happen, never as decoration.
- **Darkness as a stage** — the `#111111` ground exists to make music, art, and white type glow.
- **Editorial scale** — oversized Work Sans display type gives every page a poster's confidence.
- **Calm over clutter** — generous spacing and soft pills keep the experience premium and unhurried.

### Application rules

The source states these four as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not KKBOX-authored or a separately published UI specification.

- Keep the canvas near-black (`#111111`) so album art and white type carry the light.
- Reserve the cyan `#00B6E1` for the single most important action.
- Go big with Work Sans display type for an editorial, poster-like hero.
- Use the pale `#F2F2F2` pill to lift the CTA off the dark ground.

### Avoid

The source states these four as its Don't list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not KKBOX-authored or a separately published UI specification.

- Scatter the cyan accent across many elements — it loses its punch.
- Crowd the hero; the dark negative space is part of the brand.
- Set headings in a color other than white on the dark canvas.
- Square off the buttons — the soft 30px pill is part of the character.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Role names below are the source's own labels. Pairing each hex to the token-set path named beside it, taking those role names from the source's own labels, keeping `#00b6e1` on `primary`, `brand`, and `on-primary` as three keys, keeping `#111111` on `canvas` and `#f2f2f2` on `surface`, keeping `#ffffff` on `foreground`, and attaching every role to `https://www.kkbox.com`, are derived editorial implementation inferences from the verified surfaces; they are not KKBOX-authored or a separately published UI specification. The hex values and recorded uses are the source's own.

- **Ground / Canvas** (`#111111`): the dominant surface behind nearly everything. Token-set path `tokens.colors.canvas`. Claim surface: `https://www.kkbox.com`.
- **Brand Accent** (`#00b6e1` / `#00B6E1`): the single signature color; used sparingly for the download CTA text and brand moments. Token-set path `tokens.colors.primary`. `tokens.colors.brand` is the same hex on a second key. `tokens.colors.on-primary` is the same hex on a third key — the recorded download-button text, not a white-on-cyan pairing. Catalog identity `primary_color` is `#00B6E1`. Claim surface: `https://www.kkbox.com`.
- **Light Button Surface** (`#f2f2f2` / `#F2F2F2`): a pale neutral pill surface that floats on the dark ground and carries the cyan accent. Token-set path `tokens.colors.surface`. Claim surface: `https://www.kkbox.com`.
- **Display Text** (`#ffffff` / `#FFFFFF`): headings and hero copy set in white for maximum legibility against the near-black canvas. Token-set path `tokens.colors.foreground`. Claim surface: `https://www.kkbox.com`.

The source's role-discipline sentence is kept as written: the cyan is an event, not a texture. Let the near-black ground and white type establish the room, and bring `#00B6E1` in only at the decision point. Reading that sentence as this contract's color rule rather than as a separately published KKBOX color specification is a derived editorial implementation inference from the verified surfaces; it is not KKBOX-authored or a separately published UI specification.

### Spacing

Token-set path `tokens.spacing`, unitless steps as the YAML recorded them.

| Step | Value | Token-set path |
|---|---:|---|
| sm | 16 | `tokens.spacing.sm` |
| base | 48 | `tokens.spacing.base` |

`tokens.spacing.sm: 16` is not the download-button padding `16px` and not the 16px half of `16px 48px`. `tokens.spacing.base: 48` is not the download-button padding `48px` and not the 48px half of `16px 48px`. Keeping each number on its own key path, rather than treating a shared numeral as the same token, is a derived editorial implementation inference from the verified surfaces; it is not KKBOX-authored or a separately published UI specification.

### Shape

Token-set path `tokens.rounded`, unitless steps as the YAML recorded them.

| Step | Value | Token-set path |
|---|---:|---|
| sm | 30 | `tokens.rounded.sm` |
| md | 30 | `tokens.rounded.md` |
| lg | 30 | `tokens.rounded.lg` |
| full | 9999 | `tokens.rounded.full` |

`tokens.rounded.sm: 30`, `tokens.rounded.md: 30`, and `tokens.rounded.lg: 30` are three YAML steps that share the numeral 30. None of them is the download-button radius `30px` written as a spacing step. `tokens.rounded.full: 9999` is a YAML step; no component record writes `9999`. Keeping the three 30-steps as three keys, keeping `full: 9999` on its own key path, and keeping component `30px` on the download CTA, is a derived editorial implementation inference from the verified surfaces; it is not KKBOX-authored or a separately published UI specification.

### Elevation

Depth here is achieved through contrast, not heavy shadow. Token-set path `tokens.shadow.none`, with the YAML writing `Depth via tonal contrast — bright pill on near-black ground, not drop shadow`. The light `#F2F2F2` / `#f2f2f2` pill reads as elevated simply because it's a bright surface lifting off the `#111111` ground — the tonal jump does the work a drop shadow normally would. The fully rounded 30px radius on the button softens its edge and reinforces the sense of a discrete, tappable object resting on the dark plane. Keep elevation cues subtle and tonal: let brightness and rounding signal interactivity rather than stacking visible shadow layers. Reading that stack as tonal contrast rather than a Z-axis shadow scale, and reading the keep-elevation-cues sentence as this contract's elevation rule rather than as a separately published KKBOX shadow specification, is a derived editorial implementation inference from the verified surfaces; it is not KKBOX-authored or a separately published UI specification.

### Motion

The source does not capture explicit animation durations, easing curves, or transition timing for KKBOX, so no specific motion values are asserted. No motion timings, durations, or easing curves were captured in the source inspection, so none are asserted here. Unsourced easing curves from the catalog template are omitted at the curve-value boundary. Treating that absence as an unnamed motion set rather than a default curve, leaving reduced-motion behavior unnamed, keeping the source's qualitative motion line as that qualitative claim rather than as a restored duration or curve, holding the five-kind per-component promotion gate rather than treating a single official curve as sufficient, and stating that gate in full — including that a partial confirmation does not satisfy it — are derived editorial implementation inferences from the verified surfaces; they are not KKBOX-authored or a separately published UI specification.

The source's own qualitative line — that any motion should feel unhurried and smooth, gentle transitions that match the premium, music-forward atmosphere rather than snappy or playful animation, and that motion should be treated as the brand treats color: sparingly and with intent — is kept as that qualitative claim. It does not restore a duration or a curve.

An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition. Stating that five-kind per-component promotion gate in full, including that a partial confirmation does not satisfy it, is a derived editorial implementation inference from the verified surfaces; it is not KKBOX-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The following evidence-class application readings — that the reviewed sources do not publish a universal current typography specification; that live `https://www.kkbox.com` records Work Sans at 120px / 600 for hero headings in `#FFFFFF` and Helvetica Neue at 14px for body; that YAML `tokens.typography.family.sans` is `Work Sans` and `tokens.typography.family.mono` is `SF Mono`; that `SF Mono` is declared-only with no live use or role recorded; that no KKBOX-exclusive distributed type family was verified; and that no font-license sentence is recorded in the source — are a derived editorial implementation inference from the verified surfaces; they are not KKBOX-authored or a separately published UI specification.

| Evidence class | Resolution |
|---|---|
| Official product-use | The reviewed sources do not publish a universal current typography specification. |
| Live computed surface-use | Live `https://www.kkbox.com` records Work Sans 120px / weight 600, color `#FFFFFF`, for the hero heading; Helvetica Neue 14px for body type. |
| Official distributed asset | No KKBOX-exclusive distributed type family was verified. |
| Declared-only | YAML `tokens.typography.family.mono` is `SF Mono`. No live use or role is recorded. |
| License | No font-license sentence is recorded in the source. |

### Family

- **sans:** `Work Sans` — Token-set path `tokens.typography.family.sans`. Claim surface: `https://www.kkbox.com`.
- **mono:** `SF Mono` — Token-set path `tokens.typography.family.mono`. Declared-only; no use is recorded.

Two families split the labor on the live surface. Work Sans is the display voice. Helvetica Neue handles body copy. Do not replace Work Sans or Helvetica Neue with a system substitute, and do not present a fallback as either face. Do not invent a use for `SF Mono`. That fallback prohibition, the display-versus-body split, and leaving `SF Mono` as a declared family with no invented role, are derived editorial implementation inferences from the verified surfaces; they are not KKBOX-authored or a separately published UI specification.

### Type roles

Token-set `use` strings are kept verbatim. The longer §3 spellings sit beside them; neither was chosen as a replacement. YAML sizes stay the numbers the YAML recorded; the parenthetical px figures are the source §3 spelling. Keeping the YAML `use` strings verbatim, keeping the YAML singles and the §3 longer spellings on separate readings, and refusing to invent a line-height ratio the YAML does not record, are derived editorial implementation inferences from the verified surfaces; they are not KKBOX-authored or a separately published UI specification.

| Role | Font | Size | Weight | Token-set use | §3 longer spelling |
|---|---|---:|---:|---|---|
| Display hero | Work Sans | 120 (`120px`) | 600 | Hero headings, white on dark ground | Work Sans is the display voice — confident, oversized, and editorial — running all the way up to 120px at weight 600 for hero headings, always in white on the dark ground |
| Body | Helvetica Neue | 14 (`14px`) | 400 | Body copy, Helvetica Neue, quiet | Helvetica Neue handles body copy at a quiet 14px, stepping back so the display type and album art can lead |
| Download CTA label | (YAML names no family) | 18 (`18px`) | 500 | Download CTA label | Font: 18px / 500 on the download CTA |

Token-set paths: `tokens.typography.display-hero.size` / `weight` / `use`; `tokens.typography.body.size` / `weight` / `use`; `tokens.typography.button.size` / `weight` / `use`.

The contrast between a 120px hero and 14px body is dramatic by design: it creates a poster-like hierarchy where there's never any doubt about where to look first. Keep headings white; keep body restrained; let scale, not color, signal importance. Those sentences are the source's own; calling them implementation rules for every unobserved surface is a derived editorial implementation inference from the verified surfaces; it is not KKBOX-authored or a separately published UI specification.

The YAML button role does not name a family. The live download CTA font is recorded as `18px / 500`. Reading that 18 / 500 as the download-CTA type-role rather than as a spacing step is a derived editorial implementation inference from the verified surfaces; it is not KKBOX-authored or a separately published UI specification.

### Assets

- Catalog identity pointer: `logo.type: favicon`, `logo.slug: https://www.google.com/s2/favicons?domain=kkbox.com&sz=128`.
- Live token surface: `https://www.kkbox.com`.
- Named group and engineering-org sources: `https://www.kkcompany.com`, `https://github.com/KKBOX`.

Reading the Google s2 favicon slug as a third-party identity pointer rather than as a first-party distributed KKBOX brand asset, and reading the group and engineering-org URLs as named sources rather than as hosted brand-file downloads, are derived editorial implementation inferences from the verified surfaces; they are not KKBOX-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source state contract, preserved here while the catalog graph is not adopted:

The captured inspection documents the download button's default (resting) state: an `#F2F2F2` pill with `#00B6E1` label text, 30px radius, 57px height, and 18px/500 type on the `#111111` ground. Hover, pressed, focus, and disabled states were not captured in this live inspection, so they are intentionally left undocumented rather than invented. For consistency, any future interactive states should stay within the same palette — adjusting the pill's brightness or the cyan's intensity rather than introducing new hues — to preserve the one-accent discipline.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control's product role, not its primitive kind. `not-applicable` is used only where the control's role makes the state meaningless — a destination download CTA on the live `https://www.kkbox.com` surface — and the reason given is always that semantic one. Preserving the source state contract here rather than delegating it to an unadopted catalog graph, the role-based decision procedure above, every interactive-kind verdict, every applicability verdict, the reason given for either, and the refusal to treat this as a complete state-coverage claim, are derived editorial implementation inferences from the verified surfaces; they are not KKBOX-authored or a separately published UI specification. This is not a complete state-coverage claim.

### Download Button

- Role: Primary download call to action on `https://www.kkbox.com`
- Primitive type: `button` · Kind: interactive
- Background: `#f2f2f2` / `#F2F2F2`
- Text: `#00b6e1` / `#00B6E1`
- Border: none
- Radius: `30px`
- Padding: `16px 48px`
- Height: `57px`
- Font: `18px / 500`
- Token-set use: `Primary download CTA, light pill floating on #111111 ground`
- §4 longer use: Primary download call to action; a light pill that floats on the `#111111` ground and carries the brand cyan as its label.
- Token-set path: `tokens.components.button-primary` (`type`, `bg`, `fg`, `radius`, `padding`, `height`, `font`, `use`)
- Observed: default only
- The 57px height is this control's geometry. The `30px` radius is this control's radius; it is not `tokens.rounded.sm: 30`, not `tokens.rounded.md: 30`, not `tokens.rounded.lg: 30`, and not `tokens.rounded.full: 9999`. The `16px 48px` padding is this control's padding; it is not `tokens.spacing.sm: 16` and not `tokens.spacing.base: 48`. The `18px / 500` font is this control's font; it is the download-CTA type-role, not a spacing step. Reading those figures as this control's geometry rather than those YAML steps, reading hover and disabled as applicable with omitted treatment, and reading loading, error, and success as not-applicable because the control is a destination download CTA that commits no operation in place, is a derived editorial implementation inference from the verified surfaces; it is not KKBOX-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web download CTA; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable CTA; visual treatment omitted |
| disabled | applicable | A download CTA can be gated; visual treatment omitted |
| loading | not-applicable | Destination download CTA on the live `https://www.kkbox.com` surface; it commits no operation in place |
| error | not-applicable | Destination download CTA; it commits no operation in place |
| success | not-applicable | Destination download CTA on the live `https://www.kkbox.com` surface; it commits no operation in place |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

KKBOX leans on the dark canvas as negative space rather than filling it. Hero sections give oversized Work Sans display type room to breathe, with generous padding around the pill CTA (`16px 48px`) so the interactive target never feels crowded. The composition is vertical and editorial — large headline, supporting imagery, a single clear action — reading more like a music poster than a dense product page. Because the ground is near-black, content blocks are defined by spacing and contrast instead of heavy dividers or boxed containers, keeping the page cinematic and uncluttered.

The blob captures KKBOX at desktop scale, where the hero headline reaches up to 120px in Work Sans. The system's logic — a near-black ground, a single light pill CTA, and a dramatic gap between display and body type — adapts naturally to smaller viewports by scaling the oversized headline down while preserving the same hierarchy and the same generous `16px 48px` tap padding on the pill. The download button's 57px height already sits comfortably above a thumb-friendly minimum, so the primary action stays easy to hit on a phone. Exact mobile breakpoints and resized values were not captured in this inspection; describe responsive intent qualitatively rather than asserting specific small-screen numbers.

The 120px, `16px 48px`, and 57px figures are the source's recorded control and type measurements. Reading them as those live `https://www.kkbox.com` observations rather than as a responsive grid specification, reading the source's dark-canvas-as-negative-space paragraph as this contract's layout rather than as a separately published KKBOX layout specification, keeping the source's own qualitative smaller-viewport and phone sentences as that qualitative claim, and leaving exact mobile breakpoints and resized values unnamed rather than filling them, are derived editorial implementation inferences from the verified surfaces; they are not KKBOX-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

KKBOX speaks like a confident host of a premium listening room — calm, music-forward, and unhurried. The tone is more cinematic than promotional: it trusts the work (the music, the art) to do the persuading, so copy stays clean and direct rather than shouty. Calls to action are simple and singular, matching the interface's one-accent discipline. The voice carries the assurance of a pioneer who's been doing this longer than most, without needing to say so loudly. Those sentences are the source's own voice paragraph. Reading them as this contract's public voice rather than as a separately published KKBOX microcopy guide, and reproducing issued names byte-exact, are derived editorial implementation inferences from the verified surfaces; they are not KKBOX-authored or a separately published UI specification.

Issued names, kept byte-exact: KKBOX, KKCompany, Work Sans, Helvetica Neue, SF Mono.

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

These decisions are unnamed values, not permissions to invent. Calling the list a set of named gaps rather than a domain inventory is a derived editorial implementation inference from the verified surfaces; it is not KKBOX-authored or a separately published UI specification.

- hover, pressed, focus, and disabled visual treatments on the download CTA
- exact mobile breakpoints and resized values
- animation durations, easing curves, and transition timing
