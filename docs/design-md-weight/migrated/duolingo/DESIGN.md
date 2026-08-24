# Duolingo Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Duolingo is a language-learning product. This contract covers two named first-party evidence domains: the live product on `https://www.duolingo.com` (lesson screens, path/skill tiles, streak and XP chrome, sign-up fields, settings toggles, bottom nav) and the official brand identity/color portal at `design.duolingo.com/identity/color`. Marketing/landing is named in layout as a wider centered container (max ~1080px) with large illustration blocks. The following evidence-domain sentence is a derived editorial implementation inference from the verified surfaces; it is not Duolingo-authored or a separately published UI specification. A value from the lesson surface is not a proxy for every marketing, Super-upsell, or settings screen. Catalog homepage identity is `https://www.duolingo.com`.

Token extraction is `reconciled`. Source token note: a deterministic pick (`#1a73e8`) was a Google sign-in embed false-positive; canonical primary is Feather Green. `components_harvested` is true. Exact internal token values may vary slightly by platform and release. This is not an official Duolingo-authored UI specification.

The next paragraph is a derived editorial implementation inference from the verified surfaces; it is not Duolingo-authored or a separately published UI specification. The source reads the interface as engineered to feel less like studying and more like a game. It treats the brand thesis as *fun first*, and Feather Green (`#58CC02`) as an almost impossibly bright, optimistic lime that reads as energy, growth, and “go” — the color of the owl, the streak, and every primary action, deliberately the opposite of dusty classroom-chalkboard greens. What the source treats as visually defining is chunky, tactile playfulness: buttons with a solid 3D “lip,” cards with bold 2px outlines rather than soft elevation, generous radii (12–16px), oversized high-contrast type and targets. The aesthetic is read as borrowing from children’s books and arcade games while executing with the rigor of a mature product system — “a children’s book that grew up.”

Public history recorded in the source (widely documented; not interface tokens): founded in 2011 by Luis von Ahn and Severin Hacker out of Carnegie Mellon University on the premise of free language education for everyone. Von Ahn had earlier invented reCAPTCHA. The company went public on Nasdaq in 2021. The mascot is the owl **Duo**. Streaks, XP, leagues, hearts, and crowns are named product mechanics.

The following causal and refusal reading is a derived editorial implementation inference from the verified surfaces; it is not Duolingo-authored or a separately published UI specification. The source treats the design language as inseparable from a free, habit-driven model, so the interface is engineered like a game: the 3D lip, confetti, and full-screen celebration are read as retention mechanics rendered in pixels rather than decoration. What this reconstruction treats Duolingo as refusing: the aesthetic of *school* (chalkboard greens, textbook density, intimidating grammar tables front-and-center) and the cold minimalism of typical SaaS (flat gray dashboards). The owl can be earnest or unhinged in marketing; the core learning surface is described as staying warm, clear, and motivating.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

- Complete a language lesson with one prompt, one answer area, and one CTA (`CONTINUE`, `START`, or `CHECK ANSWER`).
- Check an answer and receive the correct or incorrect bottom feedback bar.
- Continue a streak and see XP and lesson progress.
<!-- design-md:claim-end -->

### Audience

No invented demographic personas are promoted. Observable work follows the three primary tasks: people completing a free language lesson; people checking an answer; people continuing a streak and reading XP/progress. Super Duolingo is named independently of §13 in Super/Plus accents, Beetle branding, and the out-of-hearts upsell. Hearts are a named product mechanic. Source §13’s named fictional archetypes are not Audience and are not primary tasks.

### Distinctive traits

The hex, lip, outline, radius, type-pairing, and Eel facts below are source-stated. The “vivid gamification palette” grouping and the reading that white-dominant surfaces reserve bold color for interaction and feedback are a derived editorial implementation inference from the verified surfaces; they are not Duolingo-authored or a separately published UI specification.

- Feather Green `#58CC02` as the catalog `primary_color` and the single primary action / correctness color (owl, streak, CTAs)
- Chunky 3D buttons with a hard offset bottom-shadow “lip” that depresses on press (`0 4px 0` in a darker shade of the button’s own color)
- Bold 2px card/button outlines instead of soft drop shadows
- Generous corner radii (12px buttons, 16px cards) and oversized touch targets (buttons ≥50px)
- Feather Bold (display/buttons) + DIN Next Rounded / `din-round` (UI/body) type pairing
- A vivid gamification palette — Macaw blue, Cardinal red, Bee yellow, Fox orange, Beetle purple
- White-dominant surfaces with bold color reserved for interaction and feedback
- Eel `#4B4B4B` as default ink, never `#000000`

### Principles

These eight items are a derived editorial implementation inference from the verified surfaces; they are not Duolingo-authored or a separately published UI specification.

1. **Fun is functional.** Every playful detail — the lip, the confetti, the owl — serves retention. Delight is not ornament; it is the product working.
2. **One action per screen.** A lesson screen has exactly one obvious next move. Choice paralysis kills momentum; the bright green CTA removes it.
3. **Celebrate everything.** Correct answers, streaks, level-ups, and milestones all get visible, joyful feedback. Progress made visible is progress repeated.
4. **Green means go.** Feather Green is reserved for the primary action and for correctness. It never decorates idly — it always means “do this” or “you got it.”
5. **Tactile over flat.** Controls should feel physically pressable. The solid 3D lip and key-travel on press make the interface feel like a toy you want to touch.
6. **Kind to mistakes.** Errors are normal steps, shown plainly and without blame. The tone never shames; failure is just data on the way to fluency.
7. **Bold and legible.** Big rounded type, high contrast, large touch targets. The interface is readable at a glance and usable one-handed on the subway.
8. **Consistency builds habit.** The same green button, the same progress bar, the same celebration — repetition of the visual language is what makes the habit stick.

Capture-bound application (source §7 Do’s and §3 type rules, not the numbered editorial list): these application rules are a derived editorial implementation inference from the verified surfaces; they are not Duolingo-authored or a separately published UI specification.

- Use Feather Green (`#58CC02`) for the single primary action on every screen.
- Give buttons the solid 3D lip (`0 4px 0` in a darker shade of the same color).
- Use 2px outlines on cards instead of soft drop shadows.
- Set body/heading text in Eel (`#4B4B4B`), never pure black.
- Make CTAs Feather Bold, often UPPERCASE with slight letter-spacing.
- Reserve the gamification palette (Bee, Fox, Macaw) for rewards/feedback.
- Use generous radii — 12px buttons, 16px cards, pill progress bars.
- Keep one clear action per screen.
- Headings, buttons, and stats use Feather Bold; multi-sentence content uses DIN Next Rounded.
- The system lives at weight 400 (body) and 700 (emphasis). There is no thin-weight body text.
- XP, streaks, and percentages render in large Feather Bold.

### Avoid

The following Avoid items copy source Don’ts plus Nunito / `#1a73e8` catalog boundaries. Source Don’ts (lip versus blur, Eel not black, one primary action, 400/700 only, no muted greens, touch-target height, 8/12/16/pill radii) are a derived editorial implementation inference from the verified surfaces; they are not Duolingo-authored or a separately published UI specification. Nunito-as-Feather-Bold and `#1a73e8`-as-primary remain catalog evidence-class boundaries.

- Don’t use blurred/soft drop shadows where the 3D lip belongs.
- Don’t use pure black (`#000000`) for text — Eel `#4B4B4B` is the brand ink.
- Don’t crowd a lesson screen with multiple primary actions.
- Don’t use thin font weights — the system lives at 400 and 700 only.
- Don’t make the lip a blurred or neutral shadow — it must be a darker shade of the button’s own hue.
- Don’t use muted/desaturated greens.
- Don’t shrink touch targets; buttons are tall (≥50px).
- Don’t mix radii randomly — follow the 8/12/16/pill scale.
- Don’t present Nunito, `din-round`, DIN Next Rounded, or a system stack as Feather Bold.
- Don’t use Google sign-in embed blue `#1a73e8` as Duolingo primary.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Duolingo names its colors after animals and birds. The values below are the source’s widely-documented brand tokens, corroborated against `design.duolingo.com/identity/color` and live `www.duolingo.com`. YAML hex is lowercase; body hex is uppercase. They are the same roles, not two palettes.

Primary:

- **Feather Green** (`#58CC02` / YAML `#58cc02`): catalog `primary_color`. Primary CTAs, correct answers, the owl, streak flames, progress. Canonical after rejecting `#1a73e8`.
- **Feather Green Dark / Tree** (`#58A700` / YAML `primary-lip` `#58a700`): 3D button lip and pressed states of green buttons.
- **Mask Green** (`#89E219` / YAML `mask` `#89e219`): lighter green accent, success highlights, lesson-complete glows.

Accent (gamification):

- **Macaw** (`#1CB0F6` / YAML `accent` `#1cb0f6`): secondary actions, links, info states, Super/Plus accents, streak-freeze.
- **Whale** (`#1899D6` / YAML `accent-lip` `#1899d6`): 3D lip for Macaw buttons and pressed blue states.
- **Cardinal** (`#FF4B4B` / YAML `error` `#ff4b4b`): incorrect answers, errors, destructive actions, hearts/lives.
- **Cardinal Dark** (`#EA2B2B`): 3D lip for red buttons and pressed destructive states. Not in YAML; body-only.
- **Bee** (`#FFC800` / YAML `warning` `#ffc800`): XP, achievements, crowns, streak rewards, premium glints.
- **Fox** (`#FF9600` / YAML `fox` `#ff9600`): highlights, secondary rewards, warnings, leaderboard accents.
- **Beetle** (`#CE82FF` / YAML `beetle` `#ce82ff`): special events, Super Duolingo branding, decorative accents.

Neutral:

- **Snow / White / Canvas** (`#FFFFFF` / YAML `#ffffff`): page and card backgrounds. YAML `on-primary` is the same hex for text on filled primaries.
- **Polar** (`#F7F7F7`): lightest gray. Secondary surface, disabled/empty fills, alt rows, skeleton blocks.
- **Swan** (`#E5E5E5`): default border, dividers, disabled button fill, progress-bar track.
- **Hare** (`#AFAFAF`): placeholder text, disabled text, inactive icons.
- **Wolf** (`#777777`): secondary/body text, captions, metadata.
- **Eel / Foreground** (`#4B4B4B` / YAML `#4b4b4b`): primary text — strong near-black-gray for headings and body. Not pure black.

Semantic pairings from the source:

- **Correct / Success**: Feather Green fill, Mask Green glow.
- **Incorrect / Error**: Cardinal.
- **Reward / XP**: Bee and Fox.
- **Info / Neutral action**: Macaw.

YAML component fields such as Primary Button `fg` `#ffffff` and disabled `#e5e5e5` / `#afafaf` stay on those controls. They are not extra general inks.

### Spacing

YAML scale: xs 4, sm 8, md 12, base 16, lg 24, xl 32, xxl 48. Base unit 8px.

Body common values also name 20px and 40px. Those two are kept beside the YAML scale; they are not averaged into it.

Screen horizontal padding: 16px (mobile), generous 24px+ on web. The following lesson-screen composition reading is a derived editorial implementation inference from the verified surfaces; it is not Duolingo-authored or a separately published UI specification. Lesson screens: one prompt, the answer area, one CTA.

### Shape

YAML `rounded`: sm 8, md 12, lg 16, full `9999px`.

- Small (8px): inline chips, small tags
- Standard (12px): buttons, inputs, answer tiles
- Comfortable (16px): cards, modals, larger surfaces
- Pill (`9999px`): progress bars, streak pills, toggles, badges

The following local-geometry reading is a derived editorial implementation inference from the verified surfaces; it is not Duolingo-authored or a separately published UI specification. 12px button/input corners and 16px card/modal corners are local geometry, not a universal radius for every surface.

### Elevation

Duolingo’s named levels:

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No border, no shadow | Inline text, page background |
| Outlined (Level 1) | 2px solid `#E5E5E5` border | Cards, tiles, list rows |
| Lip (Level 2) | `0 4px 0 <darker-shade>` solid offset | Buttons, answer tiles |
| Raised (Level 3) | 2px outline + subtle `0 4px 0 rgba(0,0,0,0.05)` | Floating cards, selected plans |
| Modal (Level 4) | `0 8px 0 rgba(0,0,0,0.05)` + scrim `rgba(0,0,0,0.4)` | Dialogs, celebration sheets |

YAML `tokens.shadow.button-3d` is `0 4px 0 0 #58a700` (four-value). Body lip on the green button is `0 4px 0 #58A700` (three-value). Both are kept; they are not collapsed. YAML `tokens.shadow.card` is `0 2px 0 0 rgba(0,0,0,0.1)`. YAML `tokens.components.card.shadow` and the Lesson / Path Card body are `none` (the 2px outline is the elevation). Both the YAML card shadow token and the `none` component binding are kept.

The following elevation reading is a derived editorial implementation inference from the verified surfaces; it is not Duolingo-authored or a separately published UI specification. The source calls the depth model physical, not atmospheric: hard, solid offsets — a darker shade of the element’s own color sitting directly beneath it — rather than soft blurred shadows. Green buttons get `#58A700`, blue `#1899D6`, red `#EA2B2B`. On press the element shifts down by the lip height and the lip disappears. Atmospheric blurred shadows are rare and kept very subtle when used. Modal scrims dim with `rgba(0,0,0,0.4)` — flat dim, minimal/no blur. Sticky headers/footers sit on solid surfaces, no glass.

### Motion

Source-stated duration roles:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Disabled-state flips, reduced-motion fallback |
| `motion-fast` | 150ms | Button press / lip collapse, hover, small reveals |
| `motion-standard` | 250ms | Screen transitions, feedback bar slide-up, tile select |
| `motion-celebrate` | 400–600ms | XP count-up, progress fill, success reveals |
| `motion-confetti` | 800ms+ | Lesson-complete confetti and Duo reactions |

Signature motions (source-stated):

1. **Button key-press.** On tap, the button translates down by the lip height (`4px`) over `motion-fast` and the solid lip collapses to zero. On release it springs back.
2. **Progress fill.** The top progress bar animates its green fill width over `motion-standard` with `ease-standard` after each correct answer.
3. **Celebration pop.** On lesson complete, XP counts up, the streak flame and badges scale in with `ease-bounce`, and confetti bursts. The judgement that overshoot/bounce is *licensed* here and only in celebratory contexts — that it would feel unserious elsewhere, but here joy is the point — is a derived editorial implementation inference from the verified surfaces; it is not Duolingo-authored or a separately published UI specification.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, confetti and bounce overshoots are removed and durations collapse toward `motion-instant`; transitions become simple fades. The judgement that the product stays fully usable and still celebratory in copy, just less kinetic, is a derived editorial implementation inference from the verified surfaces; it is not Duolingo-authored or a separately published UI specification.

Source-stated easing token names and uses (uncomputed; cubic-bezier curves omitted):

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | omitted (unattributed cubic-bezier; source-stated name and use only) | Feedback bars, modals, screen pushes appearing |
| `ease-exit` | omitted (unattributed cubic-bezier; matches the legacy spec template; name and use only) | Dismissals, bar slide-down |
| `ease-standard` | omitted (unattributed cubic-bezier; source-stated name and use only) | Two-way transitions, tab/content switches |
| `ease-bounce` | omitted (unattributed cubic-bezier; source-stated name and use only) | Celebrations — XP pop, streak flame, owl bounce, badge reveal |

Exact cubic-bezier curves are unattributed — `ease-exit` matches the legacy spec template — and remain omitted rather than promoted. Do not promote an easing curve, animation name, transition property, or a duration beyond the tables above until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. Any exact animation curve remains a local extension until that per-component computed observation exists.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | Not established as a separately published official product-family token. The source does not split official product-use from live computed-family evidence. |
| Live computed surface-use | Live `www.duolingo.com` is named as a Tier-1 product surface. This packet does not add a new computed-family count. |
| Official distributed asset | No Duolingo-exclusive public redistribution right for Feather Bold is established here. |
| Declared-only / fallback | `Nunito` (700/800) is the source-stated closest open-source stand-in when Feather Bold is unavailable. It is not the brand face. |
| Unresolved claim | A loadable Feather Bold webfont for third-party reproduction. An officially known but unavailable face keeps its metadata and loses only a live specimen. |

Source body (§1) names **Feather Bold** as a bespoke display typeface whose curves echo the shape of Duo the owl — headings, buttons, and personality moments — and **DIN Next Rounded** as the UI/body face. Tier-2 corroboration names the same pairing as Feather Bold (bespoke display, owl-curve inspired) + DIN Next Rounded (UI/body). Those statements are source-stated body and Tier-2 narrative, not official product-use or live computed-family evidence.

### Family

- **Display / Buttons / Headings (body stack):** `"Feather Bold", "din-round", "DIN Next Rounded", "Nunito", -apple-system, BlinkMacSystemFont, sans-serif`
- **UI / Body (body stack):** `"din-round", "DIN Next Rounded", "Nunito", -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif`
- **YAML `family.display`:** `Feather Bold`
- **YAML `family.sans`:** `din-round`

Do not present Nunito, DIN Next Rounded, `din-round`, Helvetica Neue, or a system stack as Feather Bold.

The following type-character reading is a derived editorial implementation inference from the verified surfaces; it is not Duolingo-authored or a separately published UI specification. Feather Bold is read as the personality face (headings, buttons, stats); DIN Next Rounded is read as the reading face. Buttons are read as shouting: frequently UPPERCASE Feather Bold with slight letter-spacing. Restraint is read as coming from size, not weight variety (400 and 700 only). Numbers (XP, streaks, percentages) are read as display typography, not fine print. Default text is Eel, never `#000000`.

### Type roles

Verified YAML line-height values are the unitless ratios `1.2`, `1.25`, and `1.5`. They scale with font size and are not fixed px. Px figures in the legacy body table are size-local observations at those captured sizes, not replacements for the ratios. YAML `title` 24px / `1.25` and body Heading Large 24px / `32px (1.33)` are both kept. YAML `button` `1.2` and body Button Label `20px` are both kept.

| Role | Font | Size | Weight | Line height | Tracking | Use |
|---|---|---:|---:|---:|---:|---|
| Display Hero (YAML `display-hero`) | Feather Bold | 40px | 700 | 1.2 | YAML `-0.5`; body `-0.5px` | Landing hero, big celebrations; size-local 48px |
| Display | Feather Bold | 32px | 700 | 1.25 | `-0.25px` | Section headers, lesson-complete; size-local 40px |
| Heading Large / YAML `title` | Feather Bold | 24px | 700 | YAML 1.25; body 32px (1.33) | normal | YAML: section titles, modal headers. Body: screen titles, modal headers |
| Heading | Feather Bold | 20px | 700 | 28px (1.4) | normal | Card titles, sub-sections |
| Subtitle | Feather Bold | 17px | 700 | 24px (1.4) | normal | List headers, prompts |
| Button Label (YAML `button`) | Feather Bold | 15px | 700 | YAML 1.2; body 20px | body `0.8px` (uppercase) | CTA button labels (uppercase) |
| Body Large / YAML `body` | DIN Next Rounded | 17px | 400 | 1.5 | normal | YAML: standard reading text. Body: lesson sentences, explanations; size-local 26px |
| Body | DIN Next Rounded | 15px | 400 | 23px (1.5) | normal | Standard reading text |
| Caption | DIN Next Rounded | 13px | 400 | 18px (1.4) | normal | Metadata, hints, fine print |
| Stat / Number | Feather Bold | 24px+ | 700 | tight | normal | XP, streak count, % |

### Assets

Catalog logo metadata is Simple Icons identity (`duolingo`); it is not a captured first-party mark. Duo the owl and character illustrations are described as vector/Lottie in the source; no redistributable file is attached. Do not replace verified Duo illustration with invented brand-color decoration.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source state contract, preserved here while the catalog graph is not adopted. Characterizations in that table such as “Never cold,” “No shaming language,” “the peak emotional moment,” and “Tone stays light, not punitive” are a derived editorial implementation inference from the verified surfaces; they are not Duolingo-authored or a separately published UI specification. Hex values, control geometry, and named copy strings in the same rows remain source-stated.

| State | Treatment |
|---|---|
| **Empty (no lessons yet)** | Friendly Feather Bold headline + encouraging line in Wolf `#777777`, plus a green `#58CC02` CTA (`START LEARNING`). Often paired with a Duo illustration. Never cold. |
| **Loading (first paint)** | Light skeleton blocks in `#F7F7F7` (Polar) at final dimensions, or a centered animated Duo. Path tiles fade in. |
| **Loading (checking answer)** | CHECK button shows an inline spinner / brief disabled state; never blocks the whole screen. |
| **Correct answer** | Bottom feedback bar bg `#D7FFB8`, text `#58A700`, top border `#A5ED6E`, cheerful copy (`Nice!`), green CONTINUE button. Optional ding + small confetti. |
| **Incorrect answer** | Bottom feedback bar bg `#FFDFE0`, text `#EA2B2B`, shows `Correct solution:` plainly, red CONTINUE button. No shaming language. Heart/life decrements if applicable. |
| **Error (form field)** | 2px `#FF4B4B` border, bg `#FFF0F0`, helper text below in `#FF4B4B` 13px, one actionable sentence. |
| **Disabled (CHECK before answer)** | bg `#E5E5E5`, text `#AFAFAF`, no lip, not pressable. Re-enables the moment a choice is made. |
| **Success (lesson complete)** | Full-screen celebration: confetti, Duo reaction, XP count animating up in Bee `#FFC800`/Feather Bold, streak increment, single green CONTINUE. The peak emotional moment. |
| **Streak milestone** | Modal with flame illustration, big Feather Bold count, Fox `#FF9600` accents, share + continue actions. |
| **Out of hearts** | Modal explaining hearts depleted, options to wait, practice to refill, or upsell to Super. Tone stays light, not punitive. |
| **Skeleton** | `#F7F7F7` blocks at exact final dimensions, gentle shimmer, rounded at component radius. |

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. A generic named `Focus` capture is not `focus-visible` treatment evidence; named focus colors stay as additional observed states, and the `focus-visible` visual treatment remains omitted from the applicability row. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow an identified product role, not its primitive kind. Where one harvested control mixes exact action identities that cannot share one map (Accent Button’s alternative-positive / Super-upsell / info CTA; Destructive Button’s incorrect-CONTINUE / give-up / delete), those three applicability fields are omitted at this boundary rather than closed. This is not a complete state-coverage claim.

Lesson / Path Card, Highlight Card, Stat Card, Progress Bar, Correct feedback bar, Incorrect feedback bar, Streak / XP Pill, New / Status Badge, and Centered Modal have no interactive-kind confirmation for a §4.4 map, or are descriptive status/surface primitives, so kind is omitted or non-interactive as noted. No map is declared for those.

Display modes: buttons are typically full-width (`block`) on mobile lesson screens, auto-width inline on dense settings rows. The following lip-always-solid reading is a derived editorial implementation inference from the verified surfaces; it is not Duolingo-authored or a separately published UI specification. The lip is always a solid darker shade of the button’s own color, never a blurred drop shadow.

### Primary Button

- Role: the single primary action — `CONTINUE`, `START`, `CHECK ANSWER` (uppercase)
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#58CC02` (YAML `#58cc02`)
- Text: `#FFFFFF` (YAML `#ffffff`)
- Border: none
- Lip / bottom shadow (body): `0 4px 0 #58A700`
- YAML `shadow`: `0 4px 0 #58a700`; YAML `tokens.shadow.button-3d`: `0 4px 0 0 #58a700`
- Radius: 12px
- Padding: 14px 20px
- Height: 50px (YAML; body min-height 50px)
- Font: YAML `15px / 700`; body 15px / 700 / Feather Bold, UPPERCASE, 0.8px tracking
- Pressed: `translateY(4px)`, lip collapses to `0 0`
- Disabled: bg `#E5E5E5`, text `#AFAFAF`, no lip
- Use: The single primary action — `CONTINUE`, `START`, `CHECK ANSWER`

YAML four-value button-3d shadow and body three-value lip are both kept.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named single primary action |
| hover | applicable | Pointer-web button on www.duolingo.com; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Captured inactive `CHECK` before an answer is selected |
| loading | applicable | CHECK use: inline spinner / brief disabled state while checking an answer. CONTINUE / START uses have no loading paint on this button |
| error | not-applicable | Incorrect is the red feedback bar, not an error paint on this button |
| success | not-applicable | Correct is the green feedback bar or lesson-complete celebration, not a success paint on this button |

Additional observed named state: pressed (`translateY(4px)`, lip collapses). Generic `Focus` on the sign-up field is not `focus-visible` evidence for this button.

### Accent Button

- Role: alternative positive action, Super upsell, info CTA (uppercase)
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#1CB0F6` (YAML `#1cb0f6`)
- Text: `#FFFFFF`
- Lip: `0 4px 0 #1899D6` (YAML `0 4px 0 #1899d6`)
- Radius: 12px
- Padding: 14px 20px
- Font: 15px / 700 / Feather Bold, UPPERCASE
- Use: Alternative positive action, Super upsell, info CTA
- YAML does not record height, pressed, or disabled on this variant; those body values from Primary are not copied here

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named Macaw alternative/info CTA |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | An upsell/info CTA can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source Use names this control as alternative positive action, Super upsell, and info CTA together, without a selector, label, or request/outcome behavior for each. Those mixed identities cannot share one map, so the three fields stay omitted at this boundary rather than closed.

### Destructive Button

- Role: “Incorrect” continue bar, give-up / end-session, delete
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#FF4B4B`
- Text: `#FFFFFF`
- Lip: `0 4px 0 #EA2B2B`
- Radius: 12px
- Padding: 14px 20px
- Font: 15px / 700 / Feather Bold, UPPERCASE
- Use: Incorrect continue, give-up / end-session, delete

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named Cardinal destructive / incorrect-continue action |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A give-up or delete control can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source Use names Incorrect continue, give-up / end-session, and delete together. Delete’s request, failure, and outcome meaning is unresolved, so the three fields stay omitted at this mixed-role boundary rather than closed from the incorrect/give-up uses alone.

### Outline / Ghost Button

- Role: secondary choice paired with a filled primary (`SKIP`, `MAYBE LATER`)
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#FFFFFF`
- Text: `#1CB0F6` (or `#4B4B4B` for neutral)
- Border: 2px solid `#E5E5E5`
- Lip: `0 2px 0 #E5E5E5`
- Radius: 12px
- Padding: 14px 20px
- Font: 15px / 700 / Feather Bold, UPPERCASE
- Use: `SKIP`, `MAYBE LATER`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named secondary choice beside a filled primary |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A skip / later control can be unavailable; visual treatment omitted |
| loading | not-applicable | SKIP / MAYBE LATER navigates or dismisses; the control itself does not enter a loading state |
| error | not-applicable | Neutral meaning is the paired action, not a request or validation failure on the button |
| success | not-applicable | Skipping is not an action-outcome confirmation on this button |

### Sign-up Input

- Role: email/username/password on sign-up. The following sparingly / tap-first reading is a derived editorial implementation inference from the verified surfaces; it is not Duolingo-authored or a separately published UI specification. The source says Duolingo uses inputs sparingly (tap-first).
- Kind: interactive
- Type: input
- Anatomy: value field
- Background: `#FFFFFF`
- Text: `#4B4B4B`
- Border: 2px solid `#E5E5E5`
- Radius: 12px
- Padding: 12px 16px
- Font: 15px / 400 / DIN Next Rounded
- Placeholder: `#AFAFAF`
- Focus (named): border `#1CB0F6` (2px)
- Error: bg `#FFF0F0`, border 2px solid `#FF4B4B`, helper text below `#FF4B4B` 13px
- Use: Invalid email, wrong password

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named sign-up text field |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive field; visual treatment omitted |
| disabled | applicable | A sign-up field can be unavailable; visual treatment omitted |
| loading | not-applicable | The field’s role is text entry; the field itself does not enter a loading state |
| error | applicable | Captured validation-failure treatment |
| success | not-applicable | Sign-in/up confirmation is not a success state of this field |

Additional observed named state: generic `Focus` — border `#1CB0F6` (2px). This is not `focus-visible` evidence.

### Answer Tile (Word Bank)

- Role: tappable word chips in translation exercises
- Kind: interactive
- Anatomy: label
- Background: `#FFFFFF`
- Text: `#4B4B4B`
- Border: 2px solid `#E5E5E5`
- Lip: `0 2px 0 #E5E5E5`
- Radius: 12px
- Padding: 10px 16px
- Font: 17px / 400 / DIN Next Rounded
- Selected: border `#1CB0F6`, bg `#DDF4FF`
- Use: Word-bank chips
- No YAML `type` is recorded; none is invented

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named tappable word chip |
| hover | applicable | Pointer-web chip; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A word chip can be unavailable after answering; visual treatment omitted |
| loading | not-applicable | Selecting a chip is immediate; CHECK loading lives on the primary button |
| error | not-applicable | Incorrect is the red feedback bar, not an error state of the chip |
| success | not-applicable | Correct is the green feedback bar, not a success paint on the chip |

Additional observed named state: selected (border `#1CB0F6`, bg `#DDF4FF`).

### Lesson / Path Card

- Role: course units, skill tiles, list rows
- Type: card
- Kind: omitted. The source records default geometry and no interactive-kind evidence for the card surface (a nested skill tile may navigate; that action is not confirmed as this card’s kind), so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: `#FFFFFF`
- Border: 2px solid `#E5E5E5`
- Radius: 16px
- Padding: 16px
- Shadow: none (YAML component `shadow: none`; the 2px outline is the elevation)
- YAML `tokens.shadow.card` `0 2px 0 0 rgba(0,0,0,0.1)` remains the named card-shadow token and is not merged into this component’s `none`

### Highlight Card

- Role: selected plan, active streak card, tip callouts
- Type: card
- Kind: omitted. The source records selected/active geometry and no interactive-kind confirmation for the surface, so no §4.4 map is declared.
- Background: `#DDF4FF` (light Macaw tint) or `#F7F7F7`
- Border: 2px solid `#1CB0F6` (when active/selected)
- Radius: 16px
- Padding: 16px

### Stat Card

- Role: profile stats — streak, total XP, league
- Type: card
- Kind: omitted. The source treats this as a stats display, so no `Kind: interactive` confirmation and no §4.4 map are declared.
- Background: `#FFFFFF`
- Border: 2px solid `#E5E5E5`
- Radius: 16px
- Padding: 20px
- Icon: large colored emoji/illustration (streak flame, XP bolt)
- Number: Feather Bold 24px `#4B4B4B`; label Wolf `#777777` 13px

### Streak / XP Pill

- Role: top-bar counters
- Kind: non-interactive. The source treats streak/XP as status counters rather than actions, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: `#FFFFFF` with 2px `#E5E5E5` border, or solid color
- Text: `#FF9600` (streak) / `#FFC800` (XP) with matching icon
- Radius: `9999px` (pill)
- Padding: 4px 10px
- Font: 13px / 700 / Feather Bold

### New / Status Badge

- Role: `NEW`, unread dots, completion ticks
- Kind: non-interactive. The source treats these as status labels rather than actions, so no `Kind: interactive` confirmation and no §4.4 map are declared.
- Background: `#FF4B4B` (notification) / `#58CC02` (complete)
- Text: `#FFFFFF`
- Radius: `9999px`
- Padding: 2px 8px
- Font: 12px / 700 / Feather Bold, UPPERCASE

### Progress Bar

- Role: lesson progress at the top of every exercise screen
- Kind: non-interactive. The source treats this as a progress display, so no `Kind: interactive` confirmation and no §4.4 map are declared.
- Track: `#E5E5E5` (Swan), radius `9999px`, height 16px
- Fill: `#58CC02` (Feather Green), radius `9999px`
- Inner highlight: thin lighter-green top stripe for a glossy, gamey sheen. The “glossy, gamey sheen” reading is a derived editorial implementation inference from the verified surfaces; it is not Duolingo-authored or a separately published UI specification.

### Bottom Tab

- Role: Learn / Leagues / Quests / Shop / Profile nav
- Kind: interactive
- Type: tab
- Anatomy: icon + label
- Background: `#FFFFFF`, top border 2px `#E5E5E5`
- Active icon/label: `#58CC02`
- Inactive icon/label: `#AFAFAF`
- Font: 11px / 700 / Feather Bold
- Use: Bottom nav

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named resting tab |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A nav tab can be unavailable; visual treatment omitted |
| loading | not-applicable | A content tab selects Learn / Leagues / Quests / Shop / Profile; the tab itself does not enter a loading state |
| error | not-applicable | Tab meaning is selected versus resting, not a request or validation failure on the tab |
| success | not-applicable | Tab meaning is selection, not action-outcome confirmation |

Additional observed named state: selected / active (`#58CC02` icon/label).

### Correct Feedback Bar

- Role: bottom feedback after a right answer
- Kind: non-interactive. The source treats this as a status footer with a nested green CONTINUE (the Primary Button), so no `Kind: interactive` confirmation and no §4.4 map are declared for the bar surface.
- Background: `#D7FFB8` (light green) / footer area
- Text: `#58A700`
- Border-top: 2px `#A5ED6E`
- Nested CTA: green primary `CONTINUE` on the right

### Incorrect Feedback Bar

- Role: bottom feedback after a wrong answer
- Kind: non-interactive. The source treats this as a status footer with a nested red CONTINUE (the Destructive Button), so no `Kind: interactive` confirmation and no §4.4 map are declared for the bar surface.
- Background: `#FFDFE0` (light red)
- Text: `#EA2B2B`
- Border-top: 2px `#FFB3B3`
- Nested CTA: red `CONTINUE`

### Centered Modal

- Role: streak celebration, plan upsell, exit confirmation
- Kind: omitted. The source records dialog geometry and no interactive-kind evidence for the surface (interaction lives on nested share/continue actions), so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: `#FFFFFF`
- Border: none (or 2px `#E5E5E5`)
- Radius: 16px
- Padding: 24px
- Shadow: `0 8px 0 rgba(0,0,0,0.05)` soft, plus occasional confetti/owl illustration
- Title: Feather Bold 20px `#4B4B4B`

### Toggle

- Role: settings (sound effects, notifications)
- Kind: interactive
- Type: toggle
- Anatomy: track + thumb
- Track: `#58CC02` (on) / `#E5E5E5` (off)
- Thumb: `#FFFFFF` circle, soft inner shadow
- Radius: `9999px`
- Use: Settings booleans

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named off track |
| hover | applicable | Pointer-web toggle; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A settings boolean can be unavailable; visual treatment omitted |
| loading | not-applicable | A settings boolean is an immediate on/off; the toggle itself does not enter a loading state |
| error | not-applicable | Toggle meaning is on/off, not a request or validation failure |
| success | not-applicable | On is the on state, not a success confirmation painted on the switch |

Additional observed named state: on (`#58CC02` track).

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

Spacing system: base unit 8px. YAML values 4px, 8px, 12px, 16px, 24px, 32px, 48px. Body also names 20px and 40px. Screen horizontal padding: 16px (mobile), generous 24px+ on web.

Grid and container: mobile-first; primary design baseline ~375–414px. Web learning view centers a constrained column (~600px) with side rails for streak/league widgets. Marketing/landing uses a wider centered container (max ~1080px) with big illustration blocks. The following composition reading is a derived editorial implementation inference from the verified surfaces; it is not Duolingo-authored or a separately published UI specification. Content is single-column and full-width, with one focal action per screen.

The following whitespace reading is a derived editorial implementation inference from the verified surfaces; it is not Duolingo-authored or a separately published UI specification. The source labels the philosophy as one thing at a time, room to breathe and to celebrate, and bold over busy: each lesson screen presents a single exercise with no competing actions; celebration moments (lesson complete, streak) get full-screen treatment; few elements, each large and high-contrast.

| Name | Width | Key changes |
|---|---|---|
| Mobile (Primary) | <768px | Full-screen single-column lessons, full-width CTAs, bottom nav |
| Tablet | 768–1024px | Centered learning column, side widgets appear |
| Desktop | >1024px | Constrained center column (~600px) + left nav rail + right streak/league rail |

Touch targets: buttons ≥50px tall, often full-width on mobile; answer tiles ≥44px tall; bottom nav items ≥48px tap area. The following spacing-purpose reading is a derived editorial implementation inference from the verified surfaces; it is not Duolingo-authored or a separately published UI specification. Answer tiles are described as having comfortable spacing for rapid tapping.

Collapsing: desktop side rails (streak, leaderboard, Super promo) collapse off-screen on mobile, surfacing in the top bar and dedicated tabs instead. Sticky top progress bar and sticky bottom feedback/CTA bar persist across all sizes. Marketing hero stacks illustration above copy on mobile, side-by-side on desktop.

Images: Duo the owl and character illustrations are vector/Lottie — scale crisply at any size. Flag/course icons render at consistent sizes (24–40px) within lists. Celebration animations (confetti, owl reactions) play full-bleed on completion screens.

The following measurement-application reading is a derived editorial implementation inference from the verified surfaces; it is not Duolingo-authored or a separately published UI specification. The 50px button height, 16px progress track, ~600px learning column, ~1080px marketing container, and ~375–414px mobile baseline are source measurements, not a claim that every unlisted surface shares them.

<!-- design-md:section content-locales -->
## 6. Content & Locales

No live homepage WebFetch strings are recorded in this source.

Source-stated lesson/control strings (from component and §14 contracts, not a live WebFetch): `CONTINUE`, `START`, `CHECK ANSWER`, `CHECK`, `SKIP`, `MAYBE LATER`, `START LEARNING`, `Nice!`, `Correct solution:`.

The following voice characterization (including “English is the primary voice… friendly, casual register”), the context/tone table (including `GET STARTED`, `You're on fire!`, `Correct!`, `7 day streak!`, `+10 XP`), the forbidden-tone list, and the “passive-aggressive owl” / mischievous-friend reading are a derived editorial implementation inference from the verified surfaces; they are not Duolingo-authored or a separately published UI specification. The source describes Duolingo as speaking like an enthusiastic, slightly mischievous friend who genuinely wants you to win: warm, encouraging, playful, and occasionally cheeky — never stern, never academic. English is named as the primary voice, written at a friendly, casual register. Praise is generous and specific; failure is reframed as a normal step, never a scolding. The brand famously leans into humor (and the “passive-aggressive owl” meme) in notifications, but inside the learning flow the tone stays kind and motivating.

| Context | Tone |
|---|---|
| CTAs | Short, imperative, energetic — `CONTINUE`, `START`, `GET STARTED`, `CHECK` |
| Correct feedback | Celebratory, brief — `Nice!`, `You're on fire!`, `Correct!` |
| Incorrect feedback | Gentle, no blame — `Correct solution:` shown plainly; never `Wrong!` |
| Streak / reward | Excited, exclamatory — `7 day streak!`, `+10 XP` |
| Onboarding | Friendly second-person, one question per screen, low pressure |
| Empty states | Encouraging nudge with one clear action — never cold or empty-feeling |
| Notifications | Playful, personality-driven (the owl's signature charm) |

Forbidden tones. No academic jargon, no shaming for mistakes (`Wrong!`, `You failed`), no corporate stiffness, no guilt-tripping inside the learning flow. Keep sentences short. Exclamation points are welcome where genuine excitement is warranted; em-dashes and clever asides are on-brand in marketing copy.

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

- exact cubic-bezier curves for `ease-enter` / `ease-exit` / `ease-standard` / `ease-bounce` (unattributed; `ease-exit` matches the legacy spec template; names and uses kept)
- motion duration, easing, animation name, transition properties, and reduced-motion behavior beyond the source-stated tables — promote further values only after per-component computed capture of all five; a single named duration is not that gate
- `focus-visible` visual treatments (named `Focus` on the sign-up field is a different observation)
- a loadable Feather Bold webfont for third-party reproduction (Nunito is the source-stated stand-in, not the face)
- a first-party redistributable mark file (catalog Simple Icons slug is identity-only)
- complete state-coverage for every learning-surface control
