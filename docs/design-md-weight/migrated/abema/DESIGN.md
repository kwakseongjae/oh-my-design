# ABEMA Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

ABEMA is a Japanese free, ad-supported linear-streaming hybrid from CyberAgent. This contract covers the first-party web product at `https://abema.tv`. Catalog identity is that homepage. Token extraction is `live-extract` (2026-06-10). The live inspect on that date measured the dark maintenance / SorryPage shell during a large-scale outage; the shipped `:root` token system and component classes were recovered from ABEMA’s own web-app CSS bundle `https://abema.tv/assets/registry.1bbd6d267a32e228541e6.css` via a web.archive.org snapshot dated 2025-12-31, because origin assets rotated during the outage. `https://times.abema.tv` is a brand-owned media surface inspected the same day (dark canvas).

The following evidence-domain sentence is a derived editorial implementation inference from the verified surfaces; it is not ABEMA-authored or a separately published UI specification. Exact values below stay attached to those named observations.

The next paragraph is a derived editorial implementation inference from the verified surfaces; it is not ABEMA-authored or a separately published UI specification. The captured interface is a committed dark-surface system: canvas `#000000`, a named dark-gray ladder (`--dark-stronger` `#0b0b0b` → `--dark-strong` `#171717` → `--dark-basic` `#212121` → hover `#373737`), near-white reading text `#e6e6e6`, ABEMA yellow `#ddaa00` (`--abema-yellow` / `--color-primary`) on links, primary buttons, and checked marks, and LIVE crimson `#f0163a` (`--color-accent`) on currently-broadcasting thumbnails. Geometry is tight: `--radius: 4px` is the universal corner (278 stylesheet occurrences). Weight 700 dominates the shipped stylesheet (361 declarations versus 24 at weight 400).

Public facts recorded in the source (widely documented; source HTML: “not independently re-verified this turn”; not interface tokens): launched April 2016 as “AbemaTV”, a CyberAgent-led joint venture with TV Asahi under 藤田晋 (Susumu Fujita); 2020 rebrand to **ABEMA**; product renewal in August 2021. CyberAgent Developer Conference 2022 session “ABEMAにおけるサービスブランディング” (fetched 2026-06-10) is first-party for the brand concept **「テレビの再発明」**, internal ABEMA BRAND GUIDELINES, the 「意思」 framing, and speakers 佐藤洋介 (Chief Creative Director) and 遠藤直人 (Art Director). The source also records a free full stream of the FIFA World Cup 2022 as public brand context, not as a token domain.

The following envelope reading is a derived editorial implementation inference from the verified surfaces, connecting observed tokens to that first-party concept; it is not ABEMA-authored or a separately published UI specification. The source’s narrative reads the black canvas as a switched-on television in a dark living room, yellow `#ddaa00` as a tuning lamp, and the crimson LIVE tag as inheriting a broadcast-studio on-air light. Those metaphors do not derive tokens.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

- Watch free linear channels and currently-broadcasting programs on `https://abema.tv`.
- Browse the home stack of horizontal program rails and open a live or on-demand title.
- Play on-demand video on VOD watch pages.
<!-- design-md:claim-end -->

### Audience

No invented demographic personas are promoted. The following audience-application reading is a derived editorial implementation inference from the verified surfaces; it is not ABEMA-authored or a separately published UI specification. Observable work follows the three primary tasks: people watching free linear / live programs; people browsing home rails; people playing VOD. Source §13’s named fictional archetypes are not Audience and are not primary tasks.

### Distinctive traits

The "role-locked" support-color constraint and the "deliberately light" timetable reading below are a derived editorial implementation inference from the verified surfaces; they are not ABEMA-authored or a separately published UI specification.

- Pure black canvas `#000000` with named dark-surface ladder `#0b0b0b` → `#171717` → `#212121` → hover `#373737`
- ABEMA yellow `#ddaa00` as `--color-primary` — links, primary CTAs, checked states; hover `#dfb015`
- LIVE crimson `#f0163a` on broadcasting-now badges and on destructive buttons (both uses are in the CSS / harvest; ranking of those uses is under Principles)
- Near-white foreground `#e6e6e6` for reading text; `#ffffff` for badge text and icons
- Weight 700 counts (361 declarations versus 24 at 400); body 14px / 1.5
- `--radius: 4px`; 2px on checkboxes; 50% circles for avatars, radio buttons, and player controls
- Role-locked support colors: mint `#16deb5`, purple `#a873ff`, PPV cyan `#02d1d6`, coin gold `#ffc400`
- Custom corporate webfont stack (“CopyRight”) with Roboto Condensed for timetable digits and timecodes
- EPG timetable as the one deliberately light surface (`lt-*` tokens)

### Principles

These five items and the capture-bound application list are a derived editorial implementation inference from the verified surfaces; they are not ABEMA-authored or a separately published UI specification. Item 5 cites the first-party CADC 2022 concept 「テレビの再発明」; that concept name is first-party, the UI implication is not.

1. **Liveness is the product.** Simultaneous experience is treated as identity. *UI implication:* the LIVE crimson badge (`#f0163a`) is treated as sacred vocabulary; surface “now broadcasting” and do not use that red as mere decoration.
2. **The canvas is a switched-off screen.** Content supplies the light. *UI implication:* pure `#000000` background, `#212121` component surfaces, no paper shadows — separation through darkness, color through thumbnails.
3. **One yellow, one meaning.** `#ddaa00` is treated as the entire action vocabulary. *UI implication:* links, primary CTAs, and checked states share the yellow; nothing else may borrow it.
4. **Broadcast-bold, announcer-brief.** Television is read as speaking in headlines. *UI implication:* weight 700 by default, microcopy in short imperatives, badges as one-word sentences.
5. **Reinvent television, don't imitate apps.** From the brand concept 「テレビの再発明」. *UI implication:* keep televisual structures — channel rails, the EPG timetable (the one light surface), condensed timecode digits — instead of defaulting to generic streaming-app patterns.

Capture-bound application (source Do’s; values are the observed tokens):

- Keep the canvas pure black (`#000000`) and step surfaces up the named ladder (`#0b0b0b`, `#171717`, `#212121`, `#373737`).
- Reserve ABEMA yellow (`#ddaa00`) for actions: primary buttons, links, checked states — hover to `#dfb015`.
- Use crimson (`#f0163a`) on “live right now” badges and on destructive actions (both uses captured).
- Set near-white text in `#e6e6e6`, with `#999999` for secondary and `#767676` for tertiary.
- Default to weight 700 for headings, buttons, badges, and tab labels.
- Use 4px radius everywhere; 50% only for avatars and circular player controls.
- Use translucent dark surfaces (`rgba(23,23,23,.8)`) for chrome floating over video.
- Use Roboto Condensed for timetable digits and timecodes.

### Avoid

The following avoid items copy source Don’ts. Causal and judgement wording in those Don’ts (`it is the single attention signal on a dark field`; `carries the specific meaning "broadcasting live"`; `separation comes from surface-color steps`; `ABEMA's voice is broadcast-bold 700`) is a derived editorial implementation inference from the verified surfaces; it is not ABEMA-authored or a separately published UI specification.

- Do not use pure white `#ffffff` for body text — `#e6e6e6` is the reading color; white is for badge text and icons.
- Do not spread yellow beyond actionable elements — it is the single attention signal on a dark field.
- Do not use red for generic emphasis — `#f0163a` carries the specific meaning "broadcasting live" (and danger).
- Do not add paper-style drop shadows to cards — separation comes from surface-color steps, not elevation.
- Do not use pill-shaped buttons — the system is 4px-rectangular; only genre chips reach 16px.
- Do not set headings in light weights — ABEMA's voice is broadcast-bold 700.
- Do not put white-on-yellow labels on primary buttons — the label is always dark `#212121`.
- Do not break the 4px spacing unit with arbitrary gaps.

The Hiragino / BIZ UDPGothic / Meiryo / Helvetica / Arial / system-fallback boundary is a migration/runtime evidence class: those names are the declared fallback stack, not a first-party Don’t that CopyRight may not be substituted. It is not an ABEMA-authored Avoid rule.

The catalog Google favicon identity-only boundary is a catalog/identity evidence class, not a source Don’t: the Google s2 URL is not a first-party mark file. It is not an ABEMA-authored Avoid rule.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Primary / action:

- **ABEMA Yellow** (`#ddaa00`): `--abema-yellow`, aliased to `--color-primary`. YAML `primary`. Primary buttons, links (`--font-color-link`), checked radio/checkbox fills, selection highlights. Catalog `primary_color` is this hex.
- **Yellow Hover** (`#dfb015`): `--color-primary-hover`. YAML `primary-hover`. Hover for primary buttons and links. This is not `--font-color-link-hover` `#c5c5c5`; do not merge them.
- **On Primary** (`#212121`): YAML `on-primary`. Label color on yellow buttons — dark-on-yellow, never white-on-yellow. The prohibition `never white-on-yellow` is a derived editorial implementation inference from the verified surfaces; it is not ABEMA-authored or a separately published UI specification.

Accent (live and danger — both captured uses):

- **LIVE Crimson** (`#f0163a`): `--color-accent`. YAML `accent`. Broadcasting-now tag, NEW labels, danger buttons, warning text (`--font-color-danger`).
- **Crimson Hover** (`#f34461`): `--color-accent-hover`. YAML `accent-hover`. Hover for accent/danger elements. Legacy hover `#bb122e` survives in older surfaces. Both values are kept. Neither is chosen.

Role-bound support (named uses only):

The role-bound support-color reading — reserved for the named uses below, not generic decoration — is a derived editorial implementation inference from the verified surfaces; it is not ABEMA-authored or a separately published UI specification.

- **Mint Green** (`#16deb5`): `--abema-green`. YAML `green`. Student-plan markers, positive accents; hover `#44e5c5` (YAML `green-hover`).
- **Purple** (`#a873ff`): `--abema-purple`. YAML `purple`. Premium-adjacent UI; hover `#af7eff` (YAML `purple-hover`).
- **PPV Cyan** (`#02d1d6`): `--payperview-blue`. YAML `ppv-blue`. Pay-per-view labeling.
- **Coin Gold** (`#ffc400`): `--color-coin`. YAML `coin`. In-app coin/currency iconography.

Dark surface ladder:

- **Canvas Black** (`#000000`): YAML `canvas`. Page background, player letterboxing, edge gradients.
- **Surface Deep** (`#0b0b0b`): `--dark-stronger`. YAML `surface-deep`. Deepest panels, onload placeholder (`--onload-bg-placeholder`).
- **Surface** (`#171717`): `--dark-strong` / `--bg-regular`. YAML `surface`. Regular app background; floating variant at 80% opacity (`rgba(23,23,23,.8)`) for overlay chrome such as the player mute button.
- **Surface Sub** (`#212121`): `--dark-basic` / `--bg-sub`. YAML `surface-sub`. Cards, title cards, dropdowns, inputs, modals.
- **Surface Hover** (`#373737`): `--dark-basic-hover`. YAML `surface-hover`. Hover for sub-surfaces and dropdown items.
- **Skeleton** (`#1c1c1c`): `--bg-card-placeholder`. YAML `skeleton`. Card skeleton/placeholder fill.

Text and lines:

- **Foreground** (`#e6e6e6`): `--light-basic` / `--font-color-regular`. YAML `foreground`. Primary text — near-white, not pure white. The "near-white, not pure white" reading is a derived editorial implementation inference from the verified surfaces; it is not ABEMA-authored or a separately published UI specification.
- **Smoke** (`#999999`): `--smoke-basic`. YAML `smoke`. Secondary text, placeholder text, info color.
- **Smoke Strong** (`#767676`): `--smoke-strong`. YAML `smoke-strong`. Tertiary text, progress-bar track.
- **Link Hover** (`#c5c5c5`): `--font-color-link-hover`. YAML `link-hover`. Yellow links cool to this gray on hover. Not `#dfb015`. The "cool to" character reading is a derived editorial implementation inference from the verified surfaces; it is not ABEMA-authored or a separately published UI specification.
- **Hairline** (`#333333`): `--border-color`. YAML `hairline`. Default border on dark (sub-border `#555555`).
- **Pure White** (`#ffffff`): YAML `white`. Badge text and icons. Reading the same hex as reserved for maximum-contrast moments only is a derived editorial implementation inference from the verified surfaces; it is not ABEMA-authored or a separately published UI specification.

Light-theme exception (timetable only):

- **Pale** (`#f5f5f5`): `--pale-weak` / light text-box background. YAML `pale`. The EPG timetable runs a parallel `lt-*` light token set (white background, `#eeeeee` program cells, warm `#fcf6e5` for now-playing). This is the one deliberately light surface in the product. The "deliberately light" reading is a derived editorial implementation inference from the verified surfaces; it is not ABEMA-authored or a separately published UI specification.

### Spacing

Base unit: 4px (`--space: 4px`). YAML: unit 4, sm 8, md 12, base 16, lg 32, content-min 724, content-max 1024, content-max-vod 1280. Paddings compose as multiples (4, 8, 12, 16, 32). Tooltip/badge paddings derive from `calc(var(--space)*n)` in the shipped CSS. Content min-width 724px, max-width 1024px (`--content-min-width` / `--content-max-width`); VOD watch pages extend to 1280px (`--content-max-width-for-vod`). Mobile content width 640px. EPG timetable lane spacing 8px.

### Shape

- Micro (2px): checkboxes. YAML `rounded.sm`
- Standard (4px): buttons, inputs, cards, tags, modals — `--radius: 4px`. YAML `rounded.md`
- Relaxed (8px): featured containers. YAML `rounded.lg`
- Large (12px YAML `rounded.xl`; 12–16px in the layout scale): round tabs, promotional cards. Round Tab radius is 16px
- YAML `rounded.full`: 9999 (unitless in YAML; not written here as a `px` token). Body circle use is 50%, not that YAML field
- Circle (50%): avatars, radio buttons, player control buttons

The following local-geometry reading is a derived editorial implementation inference from the verified surfaces; it is not ABEMA-authored or a separately published UI specification. 4px is local geometry, not a claim that every unlisted surface uses it. YAML `rounded.full` 9999 is kept beside the 50% circle use; they are not merged.

### Elevation

The following elevation reading is a derived editorial implementation inference from the verified surfaces; it is not ABEMA-authored or a separately published UI specification. On a black canvas, shadows barely read — the depth system leans on background-color steps (`#0b0b0b` → `#171717` → `#212121` → `#373737`) rather than elevation. The few shadows that exist are soft black glows used as separation hints for elements that float over imagery. Translucent surface tokens (`rgba(33,33,33,.8)`, `rgba(23,23,23,.8)`) handle chrome that must sit over video without fully hiding it.

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow, canvas `#000000` | Page background, rails |
| Surface (Level 1) | Background shift to `#212121`, no shadow | Cards, inputs, tabs |
| Floating (Level 2) | `0 2px 16px rgba(0,0,0,.2)` | Dropdowns, suggest panels, floating cards. YAML `shadow.floating` |
| Strong (Level 3) | `0 2px 4px rgba(0,0,0,.5)` | Player chrome, compact overlays. YAML `shadow.strong` |
| Overlay (Level 4) | `rgba(0,0,0,0.7)` full-screen scrim | Modals |

### Motion

Source-stated duration roles (from the shipped CSS bundle and §15):

| Token | Value | Use |
|---|---|---|
| `--fading-duration` | 0.1s | Hover veils, button color/border transitions, suggest-list reveal |
| transition (buttons) | 0.1s ease-out | Border and label color shifts on `com-a-Button` |
| `--duration` | 0.5s | Page-level / carousel slide movements |
| `--tooltip-controller-hover-delay` | 0.3s | Tooltip appearance delay |

Source-stated easings (from the same CSS bundle):

| Curve | Use |
|---|---|
| `linear` | Default (`--easing: linear`) — opacity fades, veil hovers |
| `ease-out` | Button color/border transitions |
| `cubic-bezier(.33, 1, .68, 1)` | Search-suggest panel reveal (source label: easeOutCubic — fast in, soft settle) |

The character reading `fast in, soft settle` on that search-suggest cubic-bezier is a derived editorial implementation inference from the verified surfaces; it is not ABEMA-authored or a separately published UI specification.

The following motion-purpose reading is a derived editorial implementation inference from the verified surfaces; it is not ABEMA-authored or a separately published UI specification. Motion is utilitarian and nearly invisible — 0.1s fades dominate because a television interface must never feel like it's animating between channels. Hover states are opacity/veil changes (`hsla(0,0%,100%,.08)` white veil at 0.1s linear) rather than transforms; pressed states drop to opacity 0.7 instantly. The 0.5s budget is reserved for spatial moves like carousel paging. No spring, no bounce, no scale pops — liveness comes from the content, not the chrome.

Under `prefers-reduced-motion: reduce`, fades collapse to instant. The following reduced-motion application reading is a derived editorial implementation inference from the verified surfaces; it is not ABEMA-authored or a separately published UI specification. Nothing in the interface depends on animation to communicate state.

Do not promote an easing curve, animation name, transition property, or a duration beyond the tables above until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. Any exact animation value beyond those tables remains a local extension until that per-component computed observation exists.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | CADC 2022 confirms brand concept and internal guidelines. It does not publish a type specimen sheet in this packet. |
| Live computed surface-use | Outage-day inspect (2026-06-10) and the shipped CSS `--font-family-sans-serif` name the custom webfont “CopyRight” with Hiragino Sans / BIZ UDPGothic fallbacks. |
| Official distributed asset | No ABEMA-exclusive public redistribution right for CopyRight is established here. |
| Declared-only / dedicated roles | Helvetica / Arial (`--font-family-for-alphanumeric`). Roboto Condensed for timetable digits and player timecodes. |
| Unresolved claim | CopyRight license terms and a loadable third-party webfont file. Keep the family name; omit a live specimen we cannot load. |

TIMES (`https://times.abema.tv`) dark-canvas inspect is recorded as a brand-owned media surface. Typography facts below remain the CopyRight / CSS stack from the web-app bundle and the outage-day shell.

The following fallback-display boundary is a migration/runtime evidence class, not an ABEMA-authored Don’t: do not present Hiragino Sans, BIZ UDPGothic, Meiryo, Helvetica, Arial, or a system fallback as CopyRight.

### Family

- **Primary UI stack:** “CopyRight” (custom-named corporate webfont), falling through Emoji, Hiragino Sans, BIZ UDPGothic Alphabet, BIZ UDGothic, Meiryo, sans-serif (`--font-family-sans-serif`). YAML compact form: `CopyRight (custom webfont) + Hiragino Sans + BIZ UDPGothic`. Both writings are kept. They are not merged into a shorter stack.
- **Alphanumeric:** Helvetica, Arial (`--font-family-for-alphanumeric`)
- **Condensed numerals:** Roboto Condensed — timetable digits, player timecodes

The following type-character reading is a derived editorial implementation inference from the verified surfaces; it is not ABEMA-authored or a separately published UI specification. Bold is the default voice. Weight 700 outnumbers weight 400 by 15:1 in the shipped stylesheet. Headings, buttons, badges, tab labels, notification text — all bold. Weight 400 is reserved for plain reading copy. Every size token has a `mb-` twin one step smaller (title-l 32→27, xxl 22→18), so density survives on phones without reflowing the hierarchy. Roboto Condensed keeps dense numeric grids narrow — a television-schedule inheritance. Reading text at 1.5, headings at 1.3, controls at 1 — the three values cover 90% of declarations.

### Type roles

Verified YAML `lineHeight` is the unitless ratio **1.5** on heading / body-lg / body / caption. That ratio is preserved as a ratio, not converted to a fixed px. Body-table 1.3 on titles, body-table 1.5 (21px) on Body, and the controls-at-1 triad are additional source-stated values. YAML Title L / Title M / Title S / Micro record size and weight only (no YAML `lineHeight`); do not back-fill YAML with the body-table 1.3 / 1.5.

| Role | Font | Size | Weight | Line height | Use |
|---|---|---:|---:|---|---|
| Title L | CopyRight stack | 32px | 700 | 1.3 (body table; YAML has size/weight only) | `--font-size-title-l`, page titles (mobile 27px) |
| Title M | CopyRight stack | 27px | 700 | 1.3 (body table; YAML has size/weight only) | `--font-size-title-m`, section titles (mobile 20px) |
| Heading XXXL | CopyRight stack | 28px | 700 | 1.5 | `--font-size-xxxxl`. Not a YAML typography key |
| Heading | CopyRight stack | 24px | 700 | 1.5 | `--font-size-xxxl`; YAML `heading`; SorryPage h1 measured 24px/700 `#e6e6e6` |
| Title S | CopyRight stack | 22px | 700 | 1.3 (body table; YAML has size/weight only) | `--font-size-title-s` |
| Emphasis Body | CopyRight stack | 16px | 700 | 1.5 | `--font-size-l`; YAML `body-lg`; notification text, button L labels |
| Body | CopyRight stack | 14px | 400 | 1.5 (21px) | `--font-size-m`; YAML `body`; standard reading text, button labels |
| Caption | CopyRight stack | 12px | 700 | 1.5 | `--font-size-xs`; YAML `caption`; tags and badges |
| Micro | CopyRight stack | 10px | 700 | 1.5 (body table; YAML has size/weight only) | `--font-size-xxs`; YAML `micro`; thumbnail labels (mobile badges) |

### Assets

No first-party mark file is attached. Catalog logo type `favicon` / slug `https://www.google.com/s2/favicons?domain=abema.tv&sz=128` is identity-only; it is not a portable ABEMA mark. Program thumbnails appear in the captured 16:9 rails. Treating them as first-party catalog content, and refusing invented brand-color decoration as a substitute, is a derived editorial implementation inference from the verified surfaces; it is not ABEMA-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source state contract, preserved here while the catalog graph is not adopted. Causal and judgement wording in that table (`No illustration noise on the black field`; `calm, no guilt`; `error is typographic, not a glowing red box`; `Brief, no celebration`; `preserving the action vocabulary`) is a derived editorial implementation inference from the verified surfaces; it is not ABEMA-authored or a separately published UI specification.

| State | Treatment |
|---|---|
| Empty (no results) | Dark canvas stays; single `#e6e6e6` line stating no matches, with a `#ddaa00` link back to genres. No illustration noise on the black field. |
| Empty (my-list, none yet) | `#999999` one-liner explaining the list is empty plus a yellow path to discover — calm, no guilt. |
| Loading (page/onload) | Placeholder canvas at `#0b0b0b` (`--onload-bg-placeholder`); rails appear as they resolve. |
| Loading (cards) | Skeleton cards: `#1c1c1c` thumbnail fill on `#212121` card body (`--bg-card-placeholder`), title bars in `#212121` — flat pulse, no shimmer gloss. |
| Error (display failed) | Dedicated SorryPage on black: bold 24px/700 `#e6e6e6` heading "ABEMAの表示に失敗しました", apology line, and `#ddaa00` links to official status channels (measured live 2026-06-10). |
| Error (form/field) | Danger color `#f0163a` for the message text (`--font-color-danger`), field keeps its `#212121` surface — error is typographic, not a glowing red box. |
| Maintenance / outage | Full-bleed dark maintenance shell retaining brand tokens: black canvas, `rgba(23,23,23,.8)` chrome, `#ddaa00` links to x.com/ABEMA and help center. |
| Success (action saved) | Notification block: `#212121` toast, 4px radius, leading `#ddaa00` label, `#e6e6e6` 16px/700 message. Brief, no celebration. |
| Skeleton | `#1c1c1c` blocks at final dimensions inside `#212121` cards; text rows as `#212121` bars (`--bg-card-texts-placeholder`). |
| Disabled | Opacity 0.4 on the whole control (`--button-opacity-disabled`) — yellow stays yellow, just dimmed, preserving the action vocabulary. |

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. A generic `Focus` capture is not `focus-visible` treatment evidence; named focus observations stay as additional observed states, and the `focus-visible` visual treatment remains omitted. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control’s product role, not its primitive kind. Global page/card loading, SorryPage/field error, and toast success do not close those three fields on mixed or generic controls. Where exact selector/label/request/outcome mapping is unresolved, those three applicability fields are omitted at this boundary rather than closed. This is not a complete state-coverage claim.

LIVE / Pre-Broadcast / NEW tags are status stamps (`Kind: non-interactive`, no map). Floating Panel, Title Card, Notification Block, and Modal have no interactive-kind evidence as actions, so kind and a state-applicability map are omitted where noted.

### Primary

- Role: Primary CTA (`com-a-Button--primary`) — plan signup, confirm actions
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#ddaa00`
- Text: `#212121`
- Radius: 4px
- Height: 44px
- Font: 14px / 700
- Hover: `#dfb015` background
- Active: opacity 0.7
- Disabled: opacity 0.4
- Size scale: small 12px label / 32px height · default 14px / 44px · large 16px / 52px · extra-large 20px / 56px (`--button-label-size-*`)

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named primary CTA |
| hover | applicable | Pointer-web button; `#dfb015` captured |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Captured opacity 0.4; yellow stays yellow |

Loading, error, and success applicability are omitted. Source names this control as a mixed Primary CTA (`com-a-Button--primary` — plan signup, confirm actions); exact selector/label/request/outcome mapping is unresolved, so those three fields stay omitted at this boundary rather than closed from the global page/error/toast contract.

Additional observed named state: active / pressed, opacity 0.7.

### Secondary

- Role: Secondary action paired with a primary
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#e6e6e6`
- Text: `#212121`
- Radius: 4px
- Height: 44px
- Font: 14px / 700
- Hover: `#ffffff` background

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named secondary action |
| hover | applicable | Pointer-web button; `#ffffff` captured |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A paired action can be unavailable; opacity 0.4 is the source Disabled treatment |

Loading, error, and success applicability are omitted. Source names this control only as a secondary action paired with a primary; exact selector/label/request/outcome mapping is unresolved, so those three fields stay omitted at this boundary rather than closed from the global page/error/toast contract.

### Dark (Tertiary)

- Role: Low-emphasis action sitting directly on the black canvas
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#212121`
- Text: `#e6e6e6`
- Radius: 4px
- Height: 44px
- Font: 14px / 700
- Hover: `#373737` background

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named tertiary action on black canvas |
| hover | applicable | Pointer-web button; `#373737` captured |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A tertiary action can be unavailable; opacity 0.4 is the source Disabled treatment |

Loading, error, and success applicability are omitted. Source names this control only as a low-emphasis action on the black canvas; exact selector/label/request/outcome mapping is unresolved, so those three fields stay omitted at this boundary rather than closed from the global page/error/toast contract.

### Primary Dark (Inverse)

- Role: Brand-colored label on dark surface (`com-a-Button--primary-dark`)
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#212121`
- Text: `#ddaa00`
- Radius: 4px
- Height: 44px
- Font: 14px / 700
- Hover: omitted (source records no hover hex for this variant)

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named `com-a-Button--primary-dark` |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | An inverse action can be unavailable; opacity 0.4 is the source Disabled treatment |

Loading, error, and success applicability are omitted. Source names this control only as `com-a-Button--primary-dark`; exact selector/label/request/outcome mapping is unresolved, so those three fields stay omitted at this boundary rather than closed from the global page/error/toast contract.

### Danger

- Role: Destructive confirmation (unsubscribe, delete)
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#f0163a`
- Text: `#ffffff`
- Radius: 4px
- Height: 44px
- Font: 14px / 700
- Hover: `#f34461` background

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named destructive confirmation |
| hover | applicable | Pointer-web button; `#f34461` captured |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A destructive confirm can be unavailable; opacity 0.4 is the source Disabled treatment |

Loading, error, and success applicability are omitted. Source names this control as destructive confirmation (unsubscribe, delete); exact request/failure/outcome mapping is unresolved, so those three fields stay omitted at this boundary rather than closed from the global page/error/toast contract.

### Text Field

- Role: Dark-theme text input (`com-InputText`)
- Kind: interactive
- Type: input
- Anatomy: value field
- Background: `#212121`
- Text: `#e6e6e6`
- Radius: 4px
- Height: 44px
- Font: 14px / 400
- Placeholder: `#999999`
- Small variant: 36px height, 12px font, 8px padding
- Search variant: 46px height

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named dark text field |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive field; visual treatment omitted |
| disabled | applicable | A field can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source records default and search variants of `com-InputText` without an exact selector/label/request/outcome mapping that would close form error or toast success on this field, so those three fields stay omitted at this boundary. The §14 form/field row (`#f0163a` message, field surface stays `#212121`) remains a global state-contract observation, not this control’s closed error applicability.

### Floating Panel

- Role: Search-suggest list, dropdown menus, floating cards (`com-search-SearchSuggestList`)
- Type: card
- Kind: omitted. The source records a container surface, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: `#212121`
- Radius: 4px
- Shadow: `0 2px 16px rgba(0,0,0,.2)`
- Additional observed: dropdown / suggest rows hover `#373737`

### Title Card

- Role: Program/episode cards on black canvas (`--bg-title-card`)
- Kind: omitted. The source records default geometry and skeleton fill, with no interactive-kind evidence for the card as an action, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared. No YAML `type` was recorded; none is invented.
- Background: `#212121`
- Radius: 4px
- Skeleton: fills `#1c1c1c`

### LIVE Broadcasting Tag

- Role: Broadcasting-now stamp at top-right of thumbnails (`com-BroadcastingTag`)
- Type: badge
- Kind: non-interactive. The source treats this as a status stamp, so no state-applicability map is declared.
- Background: `#f0163a`
- Text: `#ffffff`
- Radius: 4px
- Height: 20px
- Padding: 0 4px
- Font: 12px / 700
- Mobile: 16px height, 10px font

### Pre-Broadcast Tag

- Role: Countdown-to-broadcast tag with clock icon
- Kind: non-interactive. The source treats this as a status stamp, so no state-applicability map is declared. No YAML `type` was recorded; none is invented.
- Background: `rgba(23,23,23,0.8)`
- Text: `#ffffff`
- Radius: 4px
- Height: 20px
- Padding: 0 4px
- Font: 12px / 700

### NEW Label

- Role: Newest-episode corner label
- Kind: non-interactive. The source treats this as a status stamp, so no state-applicability map is declared. No YAML `type` was recorded; none is invented.
- Background: `#f0163a`
- Text: `#ffffff`
- Height: 16px
- Padding: 0 4px
- Font: 10px / 700
- Geometry: bottom-left radius 4px only

### Panel Tab

- Role: Content panel tabs (`com-m-TabList`)
- Kind: interactive
- Type: tab
- Anatomy: label
- Radius: 4px 4px 0px 0px
- Height: 44px
- Active: background `#212121` with `#e6e6e6` weight-700 label
- Inactive: transparent on black, `#999999` label, 16px horizontal label padding

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named panel tab; inactive is transparent on black |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A panel destination can be unavailable; visual treatment omitted |
| loading | not-applicable | A tab selects a content panel; the tab itself does not enter a loading state |
| error | not-applicable | Tab meaning is selected versus resting, not a request or validation failure |
| success | not-applicable | Tab meaning is selection, not action-outcome confirmation |

Additional observed named state: active (`#212121` background, `#e6e6e6` 700 label). Inactive `#999999` label is a §9-only unique piece moved here.

### Round Tab

- Role: Genre chip tabs (`com-RoundTabItem`)
- Kind: interactive
- Type: tab
- Anatomy: label
- Radius: 16px
- Height: 44px
- Mobile: 48px row, 12px font
- Additional observed named state: generic `Focus` — background `#e6e6e6`, text `#212121`. This is not `focus-visible` evidence; the `focus-visible` visual treatment remains omitted.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named genre chip tab |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A genre destination can be unavailable; visual treatment omitted |
| loading | not-applicable | A genre chip selects a category; the chip itself does not enter a loading state |
| error | not-applicable | Chip meaning is selected versus resting, not a request or validation failure |
| success | not-applicable | Chip meaning is selection, not action-outcome confirmation |

### Checkbox

- Role: Settings/consent checkboxes; radio twin uses 50% radius and the same yellow fill
- Kind: interactive
- Type: toggle
- Anatomy: box (radio twin: circle)
- Border: 1px solid `#999999`
- Radius: 2px
- Height: 20px
- Checked: background `#ddaa00`
- Small variant: 14px

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named settings/consent checkbox |
| hover | applicable | Pointer-web control; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A consent or setting can be locked; visual treatment omitted |

Loading, error, and success applicability are omitted. Source records settings/consent checkboxes together with a radio twin; exact selector/label/request/outcome mapping is unresolved, so those three fields stay omitted at this boundary rather than closed from the global page/error/toast contract.

Additional observed named states: checked (`#ddaa00` fill) and the radio twin (50% radius, same yellow fill).

### Notification Block

- Role: In-app notification row (`com-m-NotificationBlock`)
- Type: toast
- Kind: omitted. The source records a status row, not an action control, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: `#212121`
- Text: `#e6e6e6`
- Radius: 4px
- Padding: 12px 16px
- Font: 16px / 700
- Leading label: `#ddaa00`
- Mobile variant: adds 1px solid `#333333` border

### Modal

- Role: Centered modal (`com-a-Modal`)
- Kind: omitted. The source records default geometry and no interactive-kind evidence for the dialog surface, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared. No YAML `type` was recorded; none is invented.
- Overlay: `rgba(0,0,0,0.7)`
- Padding: 32px 16px 16px
- Width scale: 300px (S) / 360px (M) / 640px (L)

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The following whitespace reading is a derived editorial implementation inference from the verified surfaces; it is not ABEMA-authored or a separately published UI specification. Density over air: ABEMA is a television guide, not an editorial site — rails, tags, and metadata pack tightly at 4px increments; generous whitespace is spent only around the player. Black is the separator: sections separate by the canvas showing through between `#212121` cards rather than by borders or shadows. Edge gradients instead of hard clips: carousel rails fade into `#000000` (or `#212121` inside cards) at their edges, keeping the dark surface continuous.

Spacing and grid from the source:

- Base unit 4px; paddings 4 / 8 / 12 / 16 / 32
- Content min-width 724px, max-width 1024px; VOD watch pages 1280px
- Mobile content width 640px
- Home is a vertical stack of horizontal carousels (broadcast rails) over the black canvas, edge-faded with `linear-gradient(90deg, #000, transparent)`
- The EPG timetable is the structural exception: a dense light-theme grid with 8px lane spacing. The "structural exception" reading is a derived editorial implementation inference from the verified surfaces; it is not ABEMA-authored or a separately published UI specification.

| Name | Width | Key changes |
|---|---|---|
| Mobile | <640px | `mb-` type scale (titles 32→27, 27→20), badges shrink to 16px height / 10px font, tab rows 48px |
| Tablet/Min | 724px | `--content-min-width` floor for the desktop app layout |
| Desktop | 724-1024px | Standard rail layout at `--content-max-width: 1024px` |
| VOD Watch | up to 1280px | Player pages extend to `--content-max-width-for-vod` |

Touch targets: buttons at 44px default height (52/56px for large CTAs); mobile tab rows at 48px with 8px vertical padding; timetable arrow controls at 60px circles (`rgba(0,0,0,.6)` over content).

The following collapsing-purpose and watch-page hierarchy readings (`hierarchy compresses one step rather than reflowing`; `the player remains the fixed anchor`) are a derived editorial implementation inference from the verified surfaces; they are not ABEMA-authored or a separately published UI specification. Collapsing: every font-size token swaps to its `mb-` twin — hierarchy compresses one step rather than reflowing. Carousel rails persist on mobile with edge gradients; arrows hide in favor of swipe. Badges and tags keep their geometry, shrinking 20px→16px height. The player remains the fixed anchor; metadata stacks beneath it.

Program thumbnails are 16:9, corner-tagged (LIVE top-right at 4px inset, NEW top-right corner-fitted). Thumbnails carry no shadow; on hover a `hsla(0,0%,100%,.08)` white veil is recorded. Reading that veil as lifting the image is a derived editorial implementation inference from the verified surfaces; it is not ABEMA-authored or a separately published UI specification. Skeleton thumbnails fill `#1c1c1c` on `#212121` cards.

The following measurement-application reading is a derived editorial implementation inference from the verified surfaces; it is not ABEMA-authored or a separately published UI specification. The 44px / 46px / 48px / 52px / 56px / 60px control heights, 724px / 1024px / 1280px content widths, and 640px mobile floor are source measurements, not a claim that every unlisted surface shares them.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The following voice and tone notes, except the verbatim samples, are a derived editorial implementation inference from the verified surfaces; they are not ABEMA-authored or a separately published UI specification. ABEMA's voice is immediate, broadcast-warm, and unpretentious — the register of a television announcer translated into product copy. The service introduces itself as "新しい未来のテレビ" (the new future of television), and the copy keeps television's directness: short declaratives, time-anchored language (今・LIVE・最新), and zero subscription-guilt pressure on the free tier. Japanese politeness forms are used straightforwardly (です/ます) without corporate stiffness.

| Context | Tone |
|---|---|
| Service tagline | Mission-framed, plain. "無料動画・話題の作品が楽しめる新しい未来のテレビ" — benefit first, vision second. |
| Player / controls | Imperative and instant: "クリックでミュートを解除", "音声をオンにする". No fluff between user and playback. |
| Live signals | Single loud words: LIVE, NEW. The badge is the sentence. |
| Error / outage | Apologetic but composed: "申し訳ありません" + factual status + a link to official channels. |
| Category navigation | Bare nouns: ニュース、スポーツ、アニメ、将棋、麻雀 — a channel dial, not a menu essay. |
| Premium upsell | Direct benefit statements; the free tier is never shamed. |

Voice samples (verbatim; first-party observations, not the derived characterization above):

- "無料動画・話題の作品が楽しめる新しい未来のテレビ" — service title tagline. *(verified: document title, abema.tv, archived 2026-01-01 snapshot of live page)*
- "クリックでミュートを解除" — player mute-unlock button. *(verified live 2026-06-10, abema.tv shell)*
- "ABEMAの表示に失敗しました" / "申し訳ありません" — outage SorryPage headings. *(verified 2026-06-10 / archived snapshot)*

The following forbidden-register list is a derived editorial implementation inference from the verified surfaces; it is not ABEMA-authored or a separately published UI specification. Forbidden register: hype superlatives ("革命的"), aggressive FOMO countdowns outside genuinely live content, dense legalistic blocks in player UI, and casual slang that breaks the broadcaster's composure.

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

- CopyRight webfont license, redistribution right, and a loadable specimen file
- `focus-visible` visual treatments (Round Tab generic `Focus` is a different observation)
- animation names and CSS transition properties until per-component computed capture of all five motion evidence kinds exists; a single named duration or the search-suggest cubic-bezier is not that gate
- hover visual values for Primary Dark and for the text field
- loading, error, and success applicability on mixed/generic Primary, Secondary, Dark, Primary Dark, Danger, Text Field, and Checkbox
- catalog Google favicon as a first-party mark
