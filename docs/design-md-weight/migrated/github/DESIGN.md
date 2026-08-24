# GitHub Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

GitHub is the home of the world's software. This contract covers Primer product UI on github.com (`https://github.com`), grounded in the public Primer Design System (`primer.style`) functional and base tokens and cross-checked against live github.com computed styles. Marketing pages (homepage, Enterprise) use a parallel system with Mona Sans and Hubot Sans display type and larger hero scales; they are noted in typography and remain a separate evidence domain from github.com Primer UI.

Source token note: values are grounded in Primer functional + base tokens, cross-checked against live github.com computed styles (dark-default canvas `#0d1117`, green primary `#1f883d`, 6px radius, 32px control height). Catalog `primary_color` is `fgColor-accent` `#0969da`.

Light mode opens on a white canvas (`#ffffff`) with near-black ink (`#1f2328`). Dark mode lives on `#0d1117` with `#e6edf3` text. The interactive accent is GitHub Blue (`#0969da` light / `#4493f8` dark). The primary constructive action fill is green (`#1f883d`); links and focus use blue. Interface chrome uses a system-font stack; code, SHAs, file paths, branch names, and inline `code` use a monospace stack.

The next paragraph is a derived editorial implementation inference from the verified surfaces; it is not GitHub-authored or a separately published UI specification. The captured product surface is read as a Primer-driven engineering tool: precise, legible, and quietly confident — utilitarian without being cold. Dual-theme parity is treated as a defining tension: neither theme is an afterthought. Information legibility is read as the highest aesthetic value. Monospace is read as structural rather than decorative. The green-for-primary, blue-for-link split is read as a version-control inheritance (green = addition, red = deletion). Primer documents the token roles; it does not publish that inheritance as a UI specification.

GitHub was founded in 2008 by Tom Preston-Werner, Chris Wanstrath, P. J. Hyett, and Scott Chacon, built around Git (Linus Torvalds, 2005). It was acquired by Microsoft in 2018 for $7.5B and hosts over 100 million developers and hundreds of millions of repositories. The Octocat mascot was designed by Simon Oxley. Primer is open-source. These are widely documented public facts in the source; they are not interface tokens.

The following causal reading is a derived editorial implementation inference from the verified surfaces; it is not GitHub-authored or a separately published UI specification. The source reads GitHub’s visual language as descending from Git’s add/remove/merge data model, rations Octocat whimsy to 404 pages, swag, and margins, and describes the 2022–2024 shift to the current Primer functional palette as a system-wide token migration rather than a reskin.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

- Create a repository, commit changes, or merge a pull request on github.com.
- Review a pull-request diff or an issue thread.
- Navigate a repository with Code / Issues / Pull requests / Actions.
<!-- design-md:claim-end -->

### Audience

No invented demographic personas are promoted. Observable work follows the three primary tasks: people creating, committing, and merging on github.com; people reviewing diffs and issue threads; people navigating a repository. Source §13’s named fictional archetypes are not Audience and are not primary tasks.

### Distinctive traits

- GitHub Blue `#0969da` (dark `#4493f8`) for links, focus rings, and selected states; green `#1f883d` for the one constructive primary action
- Dual-theme canvases: light `#ffffff` / `#1f2328` and dark `#0d1117` / `#e6edf3`, both fully specified
- System-font UI stack for chrome; `ui-monospace` stack for code, SHAs, paths, and branch names
- 6px default radius on buttons, inputs, and boxes; 1px `#d1d9e0` borders on resting surfaces
- Signature keyboard focus ring `0 0 0 3px rgba(9,105,218,0.3)`; orange `#fd8c73` underline-nav indicator
- Mona Sans / Hubot Sans on marketing pages only — not product UI

### Principles

These eight items are a derived editorial implementation inference from the verified surfaces; they are not GitHub-authored or a separately published UI specification.

1. **Green creates, red destroys, purple completes.** Color is read as inheriting Git’s diff semantics. A primary action is green because committing is constructive. A delete is red. A merged PR is purple.
2. **Blue is the link, green is the action.** Interactive text is blue; the primary button is green. Keep them distinct.
3. **Dark mode is not a setting, it's a theme.** Every component is fully specified on `#0d1117`. Shipping light-only is shipping half the product.
4. **Structure with borders, float with shadows.** A 1px `#d1d9e0` border defines a resting surface. A shadow means the layer is overlaid and temporary.
5. **Density is a feature.** Developers want information per pixel. 14px baseline, consistent 8px rhythm. Dense, never cramped.
6. **Monospace is for alignment, not flavor.** Use mono only where column-alignment matters (code, SHAs, paths). Never to make prose look technical.
7. **Restraint is the brand.** No gradients in data views, no shadows on cards, the mascot rationed to the margins.
8. **Design in the open.** Primer is public; tokens are documented; themes are auditable.

Capture-bound application (Primer / github.com product rules, not the numbered editorial list):

- Use green `#1f883d` for the primary constructive action (Create / Commit / Merge). Never blue.
- Use blue `#0969da` for links and focus, not for primary buttons.
- Specify every component in both light and dark. Dark canvas `#0d1117` is first-class.
- Use 1px borders `#d1d9e0` to structure content; reserve shadows for floating layers only.
- Use the monospace stack for all code, SHAs, file paths, and branch names.
- Keep 6px radius on buttons, inputs, and boxes; pills (2em / `9999px`) for labels and badges; circular avatars.
- Use 14px as the body baseline.
- Apply the 3px blue focus ring `rgba(9,105,218,0.3)` on keyboard-focusable elements. Danger contexts use `rgba(207,34,46,0.3)`.
- Use captured success / danger / done colors: green `#1f883d` / `#1a7f37` / `#dafbe1` for additions and success; red `#cf222e` / `#ffebe9` for deletions and danger; purple `#8250df` for merged/done.

### Avoid

- Do not make the primary button blue — blue is for links; green is the primary action.
- Do not use shadows on resting cards — a 1px border is the GitHub surface treatment.
- Do not use Mona Sans / Hubot Sans in product UI — those are marketing display fonts only.
- Do not style prose as monospace for a technical flavor — mono is structural (alignment), not decorative.
- Do not use pure white text on dark mode — use `#e6edf3`.
- Do not use pure black text on light mode — use `#1f2328`.
- Do not exceed 6px radius on buttons/inputs — dialogs may use 12px; buttons/inputs stay 6px.
- Do not ship light-only — dark theme is required by this contract.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Primer light-theme values unless marked `(dark)`. Base scales (`blue-0` … `blue-9`) are named in the source and are not expanded here.

- **GitHub Blue / Accent fg** (`#0969da`): `accent.fg` / `fgColor-accent`. Links, focus rings, selected states, active nav. Catalog `primary_color`.
- **Blue (dark)** (`#4493f8`): `accent.fg` in dark mode on `#0d1117`.
- **Accent subtle** (`#ddf4ff`): `accent.subtle`. Hover/selected backgrounds, info callouts.
- **Accent emphasis** (`#0969da`): `accent.emphasis`. Solid accent fills, focus outlines. Same hex as accent fg; the roles are not merged into one ink for every string.
- **GitHub Green** (`#1f883d`): `success.emphasis` / primary button background. Create / Commit / Merge.
- **Green hover** (`#1a7f37`): pressed/hover for the primary green button; also `success.fg` for checks-passed text, additions count, positive status.
- **Success subtle** (`#dafbe1`): `success.subtle`. Added-line diff background, passing-check rows.
- **Danger Red** (`#cf222e`): `danger.fg` / `danger.emphasis`. Destructive actions, failed checks, deletions, error text.
- **Danger subtle** (`#ffebe9`): `danger.subtle`. Removed-line diff background, error callouts.
- **Attention Yellow** (`#9a6700`): `attention.fg`. Warnings, needs review, stale states.
- **Attention emphasis** (`#bf8700`): solid warning fills, dirty-state dots.
- **Attention subtle** (`#fff8c5`): `attention.subtle`. Warning callout backgrounds, highlighted lines.
- **Done Purple** (`#8250df`): `done.fg`. Merged-PR state, completed-but-distinct status.
- **Done subtle** (`#fbefff`): `done.subtle`. Merged badge background.
- **Sponsors Pink** (`#bf3989`): `sponsors.fg`. GitHub Sponsors heart, sponsor-related UI.
- **Fg Default** (`#1f2328`): `fgColor-default`. Primary body and heading text. A warm near-black, not pure black.
- **Fg Muted** (`#59636e`): `fgColor-muted`. Secondary text, metadata, timestamps, descriptions.
- **Fg Subtle** (`#818b98`): captions, placeholder-adjacent labels, disabled hints.
- **Fg on Emphasis** (`#ffffff`): text on solid colored buttons/badges.
- **Fg Default (dark)** (`#e6edf3`): primary text on `#0d1117`. Soft off-white, never pure white.
- **Fg Muted (dark)** (`#9198a1`): secondary text in dark mode.
- **Canvas** (`#ffffff`): `bgColor-default`. Page canvas, card surface.
- **Canvas inset** (`#f6f8fa`): `bgColor-muted`. Code blocks, secondary panels, table headers, hover rows.
- **Canvas dark** (`#0d1117`): canonical GitHub dark canvas.
- **Canvas dark inset** (`#010409`): deepest dark surface — page background behind raised `#0d1117` panels.
- **Canvas dark subtle** (`#161b22`): raised cards, code blocks, hovered rows in dark mode.
- **Border** (`#d1d9e0`): `borderColor-default`. Card edges, table dividers, input borders.
- **Border muted** (`#d8dee4`): subtle internal dividers.
- **Border dark** (`#30363d`): dark-mode borders.
- **Neutral muted fill** (`rgba(175,184,193,0.2)`): inline `code` background, counter-label fill.
- **Tab active** (`#fd8c73`): underline-nav active indicator.

Primary-button active `#187733`, default-button hover `#eef1f4`, default-button active `#e6eaef`, and primary disabled fill `#94d3a2` stay on those controls. They are not general semantic inks.

### Spacing

YAML scale: xs 4, sm 8, base 16, lg 24, xl 32, xxl 40, xxxl 48. Primer `--base-size-4` through `--base-size-48`. Base unit 8px. Common UI gaps 8px and 16px. Content padding 16px inside Box, 24px page gutters on desktop. Dense data rows (file lists, commit lists): 8px vertical, 16px horizontal.

### Shape

YAML `rounded`: small 3px, medium 6px, large 12px, full `9999px`.

The layout scale also names Small **2px** for inline label edges and tight badges. That 2px value is not the YAML `small` 3px token; both are kept.

- Default (6px): buttons, inputs, boxes — the workhorse
- Medium (12px): dialogs, profile cards, rounded boxes
- Pill (2em / `9999px`): labels, counters, state badges, toggles
- Circle (50%): avatars (people), icon-only round buttons
- Checkbox: 3px (YAML small)
- Border widths: thin/default 1px, thick 2px, thicker 4px

6px button/input corners and 12px dialog corners are local geometry, not a universal radius for every surface.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (0) | 1px border `#d1d9e0`, no shadow | Boxes, cards, the default surface |
| Small (1) | `0 1px 0 rgba(31,35,40,0.04)` | Buttons resting state, subtle row lift |
| Medium (2) | `0 3px 6px rgba(140,149,159,0.15)` | Dropdowns, popovers, hovercards |
| Large (3) | `0 8px 24px rgba(31,35,40,0.2)` | Dialogs, modals, command palette |
| XLarge (4) | `0 12px 28px rgba(31,35,40,0.3)` | Full-screen overlays, large floating panels |

YAML `shadow.focus` is `0 0 0 3px rgba(9,105,218,0.3)` — the keyboard focus ring, not an elevation level.

The following elevation reading is a derived editorial implementation inference from the verified surfaces; it is not GitHub-authored or a separately published UI specification. GitHub’s elevation is border-first: the flat surface carries no shadow; a 1px `#d1d9e0` border defines its edge. Shadows are reserved for genuinely floating, transient layers. Depth implies temporary/overlaid; flatness implies the page. In dark mode, borders shift to `#30363d` and shadows deepen but stay neutral-cool, never colored.

### Motion

Source-stated duration roles:

| Token | Value | Use |
|---|---|---|
| `instant` | 0ms | State toggles where animation would lag input |
| `fast` | 80–120ms | Hover background, focus ring appearance, button press |
| `standard` | 160–200ms | Dropdown/popover open, details expand, tab content swap |
| `slow` | 300ms | Dialog/modal entrance, larger panel reveals |

Signature motions (source-stated; not decoration):

1. **Dropdown / popover.** Open with a quick `fast`–`standard` fade + 4px upward slide on `ease-out`; close instantly. Hovercards fade in on a short hover delay (~300ms intent delay).
2. **Details expand.** Issue/PR comment collapse, file tree, and `<details>` blocks expand with a `standard` height transition on `ease-in-out`. No bounce.
3. **Copy feedback.** Copy-to-clipboard buttons flash a checkmark for ~1.5s then revert.
4. **Merge celebration.** Merging a PR has historically marked a brief confetti/emoji animation. The reading of this as the single licensed moment of whimsy in the core workflow is a derived editorial implementation inference from the verified surfaces; it is not GitHub-authored or a separately published UI specification.
5. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all transitions collapse to opacity-only or instant. The product stays fully usable; just static. The source states this query is fully honored.

Source-stated easing token names and uses (uncomputed; cubic-bezier curves omitted):

| Token | Curve | Use |
|---|---|---|
| `ease-out` | omitted (unattributed cubic-bezier; source-stated name and use only) | Things appearing — dropdowns, popovers, dialogs |
| `ease-in-out` | omitted (unattributed cubic-bezier; source-stated name and use only) | Two-way transitions — expand/collapse, accordions |
| `ease-in` | omitted (unattributed cubic-bezier; source-stated name and use only) | Things leaving — dismissals |

Exact cubic-bezier curves are unattributed — they match common public easing approximations, not a Primer motion sheet named in the source — and remain omitted rather than promoted. Do not promote an easing curve, animation name, transition property, or a duration beyond the tables above until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. Any exact animation curve remains a local extension until that per-component computed observation exists.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | Primer / github.com product UI uses the native system stack for interface chrome. Product UI does not use Mona Sans or Hubot Sans. |
| Live computed surface-use | Cross-checked against live github.com computed styles. |
| Official distributed asset | **Mona Sans** and **Hubot Sans** are GitHub’s open-source variable typefaces for marketing (homepage, Enterprise) hero headlines. Distribution does not make them the product UI family. |
| Declared-only | No additional declared-only family is named beyond the system and mono stacks. |
| Unresolved claim | None. Do not present a system fallback as Mona Sans or Hubot Sans. |

### Family

- **UI / System (YAML):** `-apple-system, BlinkMacSystemFont, Segoe UI, Noto Sans, Helvetica, Arial, sans-serif`
- **UI / System (§3 body, includes emoji):** `-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"`
- **Monospace:** `ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace`
- **Marketing display:** `Mona Sans, Hubot Sans`

The two UI stacks are both kept. Do not collapse the emoji faces out of the §3 stack, and do not present the system stack as Mona Sans.

The following type-character reading is a derived editorial implementation inference from the verified surfaces; it is not GitHub-authored or a separately published UI specification. 14px is the product body baseline — denser than consumer apps. Weight, not size, carries emphasis (600 vs 400 at the same size). Monospace is for column alignment. System fonts in product, Mona Sans in marketing — a Mona Sans headline inside the product app would feel off-brand.

### Type roles

Verified line-height values are the unitless YAML ratios `1.25`, `1.5`, `1.4`, and `1.45`. They scale with font size and are not fixed px.

| Role | Font | Size | Weight | Line height | Use |
|---|---|---:|---:|---:|---|
| Display / Page Title | system stack | 32px | 600 | 1.25 | Repo name, profile name, marketing-lite headers |
| Heading 1 | system stack | 24px | 600 | 1.25 | Section titles, settings page headers |
| Heading 2 | system stack | 20px | 600 | 1.25 | Card headers, sub-sections (1px bottom border common) |
| Heading 3 | system stack | 16px | 600 | 1.25 | List group headers, dialog titles |
| Body / Default | system stack | 14px | 400 | 1.5 | The GitHub baseline — most UI text |
| Body Strong | system stack | 14px | 600 | 1.5 | File names, author names, emphasized labels |
| Small | system stack | 12px | 400 | 1.4 | Metadata, timestamps, counts, badges |
| Code Inline | mono stack | 13px (0.85em) | 400 | 1.45 | Inline `code`; `neutral.muted` bg, 6px radius pad |
| Code Block | mono stack | 12px–13px | 400 | 1.45 | Mono, `#f6f8fa` bg, tabular |

Marketing display (Mona Sans; not product UI):

| Role | Size | Weight | Notes |
|---|---|---|---|
| Hero | 48–80px | 700–900 | Mona Sans, tight tracking, homepage hero |
| Sub-hero | 24–36px | 500–600 | Mona Sans, supporting headline |

### Assets

No first-party mark file is attached here. Catalog logo metadata is Simple Icons identity (`github`); it is not a captured first-party mark.

The following mascot-use reading is a derived editorial implementation inference from the verified surfaces; it is not GitHub-authored or a separately published UI specification. Octocat is the mascot; the source rations it to error/easter-egg surfaces, never core workflows.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source state contract, preserved here while the catalog graph is not adopted:

| State | Treatment |
|---|---|
| **Empty (no content yet)** | Centered short message in `#59636e` explaining what belongs here, plus one primary action: "There aren't any issues yet." + green "New issue" button. Often a subtle Octocat/blankslate illustration. |
| **Empty repo** | The signature quick-setup card: monospace terminal commands (`git init`, `git remote add origin...`) in a `#f6f8fa` block with copy buttons. Pure utility. |
| **Loading (first paint)** | Skeleton rows at `#f6f8fa` (light) / `#161b22` (dark), matching final row geometry. Subtle shimmer. SHAs and counts render as skeleton, not placeholder values. |
| **Loading (action in button)** | Spinner replaces the label, button width preserved, button disabled. "Merging..." with inline spinner for long operations. |
| **Error (inline field)** | `#cf222e` 1px border + `0 0 0 3px rgba(207,34,46,0.3)` ring, error text below in `#cf222e` 12px, specific and actionable. |
| **Error (flash banner)** | Page-top flash: `#ffebe9` bg, `rgba(207,34,46,0.4)` border, leading alert icon, one specific sentence. |
| **Success (flash)** | `#dafbe1` bg, `rgba(31,136,61,0.4)` border, leading check icon. "Repository created." Auto-persists until navigation, not auto-dismissed. |
| **Status — checks passing** | `#1a7f37` check icon + "All checks have passed" in success green; merge button enabled green. |
| **Status — checks failing** | `#cf222e` X icon + "Some checks were not successful"; merge button stays available but warns. |
| **Status — merged** | `#8250df` merge icon + purple "Merged" state badge at the PR header. |
| **Disabled** | Button bg lightened (`#94d3a2` for green primary), text 0.8 opacity, cursor not-allowed, no focus ring. Geometry unchanged. |
| **Focus (keyboard)** | `0 0 0 3px rgba(9,105,218,0.3)` blue ring on every interactive element. Never suppressed. Danger contexts use `rgba(207,34,46,0.3)`. |
| **Hover (row)** | List rows lift to `#f6f8fa` (light) / `#161b22` (dark) background. Links underline. |

All values below are Primer light-theme defaults unless noted. Dark-theme equivalents swap to the `#0d1117` / `#161b22` / `#30363d` token set. Control heights: `small` 28px, `medium` 32px (default), `large` 40px.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. A generic or named `Focus (keyboard)` capture is not `focus-visible` treatment evidence; the documented ring stays as an additional observed named state, and the `focus-visible` visual treatment remains omitted from the applicability row. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control’s product role, not its primitive kind. This is not a complete state-coverage claim.

Box, Label, Counter Label, State Label, Branch Name, Avatar, Avatar Stack, Action Menu, Dialog, Overlay, Tooltip, Banner, Flash, Inline Message, Spinner, Progress Bar, Skeleton, Blankslate, Timeline, Data Table, Popover, Nav List, Autocomplete, and Button Group have no interactive-kind confirmation for a §4.4 map, or are descriptive status/surface primitives, so kind is omitted or non-interactive as noted. No map is declared for those.

### Primary Button

- Role: the one constructive primary action — Create repository / Commit changes / Merge pull request
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#1f883d`
- Text: `#ffffff`
- Border: 1px solid `rgba(31,35,40,0.15)`
- Radius: 6px
- Padding: 0 16px
- Height: 32px (medium)
- Font: 14px / 600 / system
- Hover: bg `#1a7f37`
- Active/pressed: bg `#187733`
- Disabled: bg `#94d3a2`, text `#ffffff` 0.8 opacity
- Use: Never blue. Only one per group.

Button size scale (height · font · padding): `small` 28px · 12px · 0 12px; `medium` 32px · 14px · 0 16px; `large` 40px · 14px · 0 20px. YAML `button-sizes` is this scale, not a separate control.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named constructive primary action |
| hover | applicable | Pointer-web button; `#1a7f37` captured |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Captured `#94d3a2` / 0.8 opacity; no focus ring |
| loading | applicable | Spinner replaces the label during long ops ("Merging..."), width preserved, button disabled |
| error | not-applicable | Failure is a flash, inline field, or checks-failing status, not an error paint on this button |
| success | not-applicable | Confirmation is the success flash or merged state-label, not a success paint on this button |

Additional observed named states: active `#187733`; generic `Focus (keyboard)` ring. Generic `Focus (keyboard)` is not `focus-visible` evidence.

### Default Button

- Role: the most common neutral button — Cancel / Edit / Settings, secondary actions
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#f6f8fa`
- Text: `#1f2328`
- Border: 1px solid `#d1d9e0` (`rgba(31,35,40,0.15)`)
- Radius: 6px
- Padding: 0 16px (YAML); live github.com also recorded 5px 16px padding
- Height: 32px
- Font: 14px / 600 / system (YAML); live github.com also recorded 14px / 500
- Hover: bg `#eef1f4`, border `#d1d9e0`
- Active: bg `#e6eaef`
- Use: Cancel, Edit, secondary actions

YAML padding/weight and the live 5px 16px / 500 figures are both kept; they are not averaged.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named neutral / secondary action |
| hover | applicable | Pointer-web button; `#eef1f4` captured |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A Cancel/Edit control can be unavailable; visual treatment omitted |
| loading | not-applicable | Cancel / Edit / Settings does not enter a loading state on this button; long ops use the primary |
| error | not-applicable | Neutral meaning is the paired action, not a request or validation failure on the button |
| success | not-applicable | Completing a secondary action is not a success confirmation painted on this button |

Additional observed named state: active `#e6eaef`. Generic `Focus (keyboard)` is not `focus-visible` evidence.

### Danger Button

- Role: destructive — Delete repository / Remove member. Quiet until hovered, then commits to red. Usually behind a confirmation dialog.
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#ffffff` (default state)
- Text: `#cf222e`
- Border: 1px solid `#d1d9e0`
- Radius: 6px
- Height: 32px
- Hover: bg `#cf222e`, text `#ffffff`, border `#cf222e`
- Use: Destructive. Stays quiet until hovered.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named quiet destructive action |
| hover | applicable | Pointer-web button; hover flips to `#cf222e` fill |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A destructive confirm can be unavailable; visual treatment omitted |
| loading | not-applicable | Long-running ops use spinner on the constructive primary, not this quiet-until-hover danger control |
| error | not-applicable | Failure is a flash or dialog, not an error state of this button |
| success | not-applicable | Deletion confirmation is the dialog/flash, not a success paint on this button |

### Invisible Button

- Role: borderless tertiary — overflow triggers, icon buttons, in-row controls
- Kind: interactive
- Type: button
- Anatomy: label
- Background: transparent
- Text: `#0969da` (or `#1f2328` for neutral)
- Border: none
- Radius: 6px
- Height: 32px
- Hover: bg `#f6f8fa`
- Use: Tertiary actions, "…" overflow triggers, in-row controls

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named borderless tertiary action |
| hover | applicable | Pointer-web button; `#f6f8fa` captured |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A tertiary control can be unavailable; visual treatment omitted |
| loading | not-applicable | Overflow / in-row chrome does not enter a loading state on this button |
| error | not-applicable | Tertiary meaning is the overflow or in-row action, not a request or validation failure |
| success | not-applicable | Copy confirmation is the checkmark flash on copy icon-buttons, not a success paint of this tertiary chrome |

### Icon Button

- Role: square icon-only control — kebab menu, copy, bell
- Kind: interactive
- Type: button
- Anatomy: icon
- Background: transparent
- Text / icon: `#59636e`
- Radius: 6px
- Height: 28 / 32 / 40px to match button sizes; padding 0
- Minimum hit area: 32×32px
- Hover: bg `#f6f8fa`
- Use: "…" menu trigger, copy buttons, the bell
- Copy-use confirmation: checkmark flash for ~1.5s then revert (source Motion; the glyph is this control’s anatomy)

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named icon-only control |
| hover | applicable | Pointer-web button; `#f6f8fa` captured |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | An icon control can be unavailable; visual treatment omitted |
| loading | not-applicable | Kebab / copy / bell chrome does not enter a loading state on the icon-button itself |
| error | not-applicable | Icon-button meaning is the overflow, copy, or notification trigger, not a request or validation failure |
| success | applicable | Copy-to-clipboard use: captured checkmark flash (~1.5s then revert) is this role’s functional confirmation. Kebab and bell uses have no success confirmation. |

### Text Input

- Role: standard form field
- Kind: interactive
- Type: input
- Anatomy: value field
- Background: `#ffffff`
- Text: `#1f2328`
- Border: 1px solid `#d1d9e0`
- Radius: 6px
- Padding: 5px 12px
- Height: 32px (YAML exact). Body records the same control as padding 5px 12px at height ~32px; keep both, do not collapse the exact height into the approximation.
- Font: 14px / 400 / system
- Placeholder: `#818b98`
- Focus (named): border `#0969da` + box-shadow `0 0 0 3px rgba(9,105,218,0.3)`
- Error: border 1px solid `#cf222e`; focus ring `0 0 0 3px rgba(207,34,46,0.3)`; help text `#cf222e` 12px
- Use: Standard form field

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named standard form field |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive field; visual treatment omitted |
| disabled | applicable | A form field can be unavailable; visual treatment omitted |
| loading | not-applicable | The field’s role is text entry; the field itself does not enter a loading state |
| error | applicable | Captured validation-failure treatment |
| success | not-applicable | Save/create confirmation is the success flash, not a success state of the field |

Additional observed named state: generic `Focus` — border `#0969da` + `0 0 0 3px rgba(9,105,218,0.3)`. This is not `focus-visible` evidence.

### Search Input

- Role: top-bar global search, repo file finder
- Kind: interactive
- Type: input
- Anatomy: value field with leading magnifier
- Background: `#f6f8fa` (subtle, inset feel)
- Border: 1px solid `#d1d9e0`
- Radius: 6px
- Leading magnifier: `#59636e`
- Use: Global search and repo file finder

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named search field |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive field; visual treatment omitted |
| disabled | applicable | Search can be unavailable; visual treatment omitted |
| loading | not-applicable | Result loading is the list/skeleton, not a loading state of this field |
| error | not-applicable | Search failure is not a validation state of this finder field |
| success | not-applicable | Finding a file is navigation, not a success confirmation on the field |

### Select

- Role: native-backed dropdown styled as a default input
- Kind: interactive
- Type: input
- Anatomy: value field with trailing chevron
- Background: `#ffffff`
- Text: `#1f2328`
- Border: 1px solid `#d1d9e0`
- Radius: 6px
- Trailing chevron: `#59636e`
- Focus (named): shadow `0 0 0 3px rgba(9,105,218,0.3)`
- Use: Native-backed dropdown

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named native-backed dropdown |
| hover | applicable | Pointer-web control; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A select can be unavailable; visual treatment omitted |
| loading | not-applicable | Choosing an option does not put this select into a loading state |
| error | applicable | Native-backed form field; a validation failure of the chosen value is meaningful. Visual treatment omitted. |
| success | not-applicable | Selecting an option is choice, not an action-outcome confirmation |

Additional observed named state: generic `Focus` ring. This is not `focus-visible` evidence.

### Checkbox

- Role: 16px box; indeterminate shows a dash
- Kind: interactive
- Type: toggle
- Anatomy: box + check glyph
- Border: 1px solid `#d1d9e0` on white when unchecked
- Radius: 3px
- Height: 16px
- Checked: `#0969da` fill + white check glyph
- Focus (named): shadow `0 0 0 3px rgba(9,105,218,0.3)`
- Use: 16px box; indeterminate shows a dash

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named unchecked box |
| hover | applicable | Pointer-web toggle; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A checkbox can be unavailable; visual treatment omitted |
| loading | not-applicable | Checking a box is an immediate boolean; the control itself does not enter a loading state |
| error | not-applicable | Checkbox meaning is checked/unchecked/indeterminate, not a request or validation failure |
| success | not-applicable | Checking is selection, not an action-outcome confirmation |

Additional observed named states: checked; indeterminate (dash); generic `Focus` ring. Generic `Focus` is not `focus-visible` evidence.

### Radio

- Role: 16px circle, mutually-exclusive option groups
- Kind: interactive
- Type: toggle
- Anatomy: circle + filled dot
- Border: 1px solid `#d1d9e0` when unchecked
- Radius: `9999px`
- Height: 16px
- Checked: `#0969da` ring + filled `#0969da` dot
- Focus (named): shadow `0 0 0 3px rgba(9,105,218,0.3)`
- Use: Mutually-exclusive option groups

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named unchecked circle |
| hover | applicable | Pointer-web toggle; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A radio can be unavailable; visual treatment omitted |
| loading | not-applicable | Choosing an option is immediate; the radio itself does not enter a loading state |
| error | not-applicable | Radio meaning is exclusive selection, not a request or validation failure |
| success | not-applicable | Selection is not an action-outcome confirmation on the radio |

Additional observed named states: checked; generic `Focus` ring. Generic `Focus` is not `focus-visible` evidence.

### Toggle Switch

- Role: settings boolean, ~32px pill track, white thumb with subtle shadow
- Kind: interactive
- Type: toggle
- Anatomy: track + thumb
- Off: bg `#818b98`
- On: bg `#1f883d` (success green, matching action semantics) or `#0969da` in some contexts — both source figures are kept
- Radius: `9999px` (2em pill)
- Thumb: `#ffffff` circle with subtle shadow
- Use: Settings booleans (feature on/off)

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named off track |
| hover | applicable | Pointer-web toggle; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A settings boolean can be unavailable; visual treatment omitted |
| loading | not-applicable | A settings boolean is an immediate on/off; the switch itself does not enter a loading state |
| error | not-applicable | Toggle meaning is on/off, not a request or validation failure |
| success | not-applicable | Turning a setting on is not an action-outcome confirmation painted on the switch |

Additional observed named state: on (`#1f883d` or `#0969da` in some contexts).

### Underline Nav

- Role: primary tab pattern (Code / Issues / Pull requests / Actions; profile tabs)
- Kind: interactive
- Type: tab
- Anatomy: label + optional counter-label
- Container: 1px bottom border `#d1d9e0`
- Text (inactive): `#1f2328` 400, hover bg `#f6f8fa`
- Active: text `#1f2328` 600 + 2px bottom border `#fd8c73`
- Font: 14px / 400→600 / system
- Counter: neutral muted pill beside label
- Use: Repo tabs and profile tabs. Becomes horizontally scrollable on narrow screens.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named resting tab label |
| hover | applicable | Pointer-web tab; `#f6f8fa` captured |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A repo/profile tab can be unavailable; visual treatment omitted |
| loading | not-applicable | A content tab selects a section; the tab itself does not enter a loading state |
| error | not-applicable | Tab meaning is selected versus resting, not a request or validation failure on the tab |
| success | not-applicable | Tab meaning is selection, not action-outcome confirmation |

Additional observed named state: selected / active (600 weight + 2px `#fd8c73` underline).

### Segmented Control

- Role: pick one of a small linear set, applied immediately
- Kind: interactive
- Type: tab
- Anatomy: grouped segments on a track
- Background: `#f6f8fa` track
- Border: 1px solid `#d1d9e0`
- Height: 32px medium; also 28px small
- Selected: raised white panel + 1px `#d1d9e0` + small shadow
- Use: Text, leading icon, or icon-only. Collapses to `dropdown` or `hideLabels` in tight space.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named unselected segment |
| hover | applicable | Pointer-web segment; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A segment can be unavailable; visual treatment omitted |
| loading | not-applicable | Picking a segment applies immediately; the segment itself does not enter a loading state |
| error | not-applicable | Segment meaning is selected versus resting, not a request or validation failure |
| success | not-applicable | Selection is not an action-outcome confirmation on the segment |

Additional observed named state: selected (raised white panel).

### Breadcrumbs

- Role: inline path trail; repo file-path navigation
- Kind: interactive
- Type: tab
- Anatomy: linked crumbs + slash separators
- Text: `#0969da` links
- Separators: `#59636e` "/" glyphs
- Last crumb: `#1f2328`, not a link
- Use: Repo file-path navigation

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named path trail |
| hover | applicable | Pointer-web links; visual treatment omitted |
| focus-visible | applicable | Interactive crumbs; visual treatment omitted |
| disabled | applicable | A trail segment can be unavailable; visual treatment omitted |
| loading | not-applicable | A breadcrumb navigates a path; the crumb itself does not enter a loading state |
| error | not-applicable | Trail meaning is location, not a request or validation failure on the crumb |
| success | not-applicable | Arriving at a path is navigation, not a success confirmation on the crumb |

### Pagination

- Role: numbered links with prev/next chevrons under long issue/commit lists
- Kind: interactive
- Type: tab
- Anatomy: page links + chevrons
- Text: `#0969da`
- Radius: 6px
- Current page: solid `#0969da` fill + `#ffffff` text
- Use: Long issue/commit lists

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named page link |
| hover | applicable | Pointer-web link; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Prev/next can be unavailable at the ends of a list; visual treatment omitted |
| loading | not-applicable | A page link navigates the list; the control itself does not enter a loading state |
| error | not-applicable | Pagination meaning is current versus other pages, not a request or validation failure |
| success | not-applicable | Changing page is navigation, not an action-outcome confirmation |

Additional observed named state: current page (`#0969da` fill + `#ffffff` text).

### Action List

- Role: vertical list of actions/options inside menus and panels
- Kind: interactive
- Type: listItem
- Anatomy: rows with optional leading/trailing visuals, group headings, dividers, danger items, loading rows
- Padding: 16px (YAML exact). Body records ~16px row padding; keep both, do not collapse the exact value into the approximation.
- Hover: bg `#f6f8fa`
- Selected: bg `#ddf4ff` + text `#0969da`
- Use: Menus and panels; sizes medium/large

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named resting row |
| hover | applicable | Pointer-web row; `#f6f8fa` captured |
| focus-visible | applicable | Interactive list; visual treatment omitted |
| disabled | applicable | A menu/panel action can be unavailable; visual treatment omitted |
| loading | applicable | Source names loading rows as a supported list feature; visual treatment omitted beyond that mention |
| error | not-applicable | Danger items are a variant, not a request-failure state of the row |
| success | not-applicable | Choosing a row is the action, not a success confirmation painted on the row |

Additional observed named state: selected (`#ddf4ff` + `#0969da`).

### Tree View

- Role: indented file/symbol tree; repo file explorer and code-navigation sidebar
- Kind: interactive
- Type: listItem
- Anatomy: indented rows, chevron disclosure on folders
- Hover: bg `#f6f8fa`
- Selected: bg `#ddf4ff`
- Indentation: 8px-step
- Use: Keyboard-navigable. Collapses to a toggle-drawer on mobile.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named resting tree row |
| hover | applicable | Pointer-web row; `#f6f8fa` captured |
| focus-visible | applicable | Keyboard-navigable tree; visual treatment omitted |
| disabled | applicable | A file/folder row can be unavailable; visual treatment omitted |
| loading | not-applicable | Expanding a folder is disclosure of the tree; the row itself does not enter a loading state |
| error | not-applicable | Tree meaning is selection and disclosure, not a request or validation failure on the row |
| success | not-applicable | Opening a file is navigation, not a success confirmation on the row |

Additional observed named state: selected (`#ddf4ff`).

### Token

- Role: removable chip with trailing x — assignees, topics, applied labels
- Kind: interactive
- Type: badge
- Anatomy: label + trailing x
- Background: `#f6f8fa`
- Text: `#1f2328`
- Border: 1px solid `#d1d9e0`
- Radius: `9999px`
- Use: Removable chip inside inputs (assignees, topics, applied labels)

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named removable chip |
| hover | applicable | Pointer-web chip; visual treatment omitted |
| focus-visible | applicable | Interactive chip; visual treatment omitted |
| disabled | applicable | A token can be unremovable; visual treatment omitted |
| loading | not-applicable | A chip represents a chosen value; the chip itself does not enter a loading state |
| error | not-applicable | Token meaning is an applied value, not a request or validation failure |
| success | not-applicable | Applying a token is selection, not an action-outcome confirmation on the chip |

### Box

- Role: Primer’s canonical container (border-first, shadow-rarely). Repo rows, settings panels.
- Type: card
- Kind: omitted. The source records container geometry and no interactive-kind evidence for the Box surface, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: `#ffffff`
- Text: `#1f2328`
- Border: 1px solid `#d1d9e0`
- Radius: 6px (12px variant for profile/marketing-adjacent cards)
- Padding: 16px body; optional header `#f6f8fa` bg + 1px bottom border + 16px padding
- Shadow: none

### Label

- Role: Issue/PR tag tinted from its own hue at low alpha; ten color schemes (default, primary, accent, success, attention, severe, danger, done, sponsors)
- Type: badge
- Kind: non-interactive. The source treats labels as tags rather than actions, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: e.g. `#ddf4ff` for blue
- Text: saturated hue (`#0969da`)
- Border (YAML exact): 1px solid `#ddf4ff`
- Border (body): 1px solid same hue at low alpha
- Radius: `9999px` (YAML) / 2em (body)
- Padding: 0 7px
- Height (YAML exact): 20px
- Height (body): ~20px
- Font: 12px / 500 / system

YAML exact `Border: 1px solid #ddf4ff` and `Height: 20px` are kept separate from the body low-alpha / ~20px observations. YAML `9999px` and body `2em` are both kept. Do not merge those field bindings.

### Counter Label

- Role: numeric pill — tab/notification/star counts
- Type: badge
- Kind: non-interactive. The source treats counters as status labels rather than actions, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: `rgba(175,184,193,0.2)`
- Text: `#1f2328`
- Radius: `9999px` / 2em
- Padding: 0 6px
- Font: 12px / 400 (YAML) and 12px / 500 tabular (§4 body) — both kept

### State Label

- Role: large status pill atop an issue/PR, leading state icon
- Type: badge
- Kind: non-interactive. The source treats state pills as status labels rather than actions, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Open: bg `#1f883d`, text `#ffffff`
- Merged: bg `#8250df`, text `#ffffff`
- Closed (unmerged): bg `#cf222e`, text `#ffffff`
- Draft: bg `#59636e`, text `#ffffff`
- Radius: `9999px` / 2em, padding 4px 12px, font 12px / 500

### Branch Name

- Role: inline branch/ref reference in monospace
- Type: badge
- Kind: non-interactive. The source treats branch-name as an inline reference, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: `#ddf4ff`
- Text: `#0969da`
- Radius: 6px
- Padding: 0 6px
- Font: mono

### Avatar

- Role: circular for people; 6px-radius square for orgs/teams/bots/AI agents
- Type: avatar
- Kind: non-interactive. The source treats avatars as identity, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Radius: `9999px` (people) / 6px (non-human)
- Default height: 20px
- Sizes: 16/20/24/32/48/64px (step 16→32 by base-4, then 32→48 by base-8; 64px largest)

### Avatar Stack

- Role: overlapping circular avatars collapsing a contributor list
- Type: avatar
- Kind: non-interactive. The source treats the stack as a cluster display, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Radius: `9999px`
- Overlap: ~-8px with a thin white ring between

### Action Menu

- Role: an action-list in an overlay popover — kebab overflow and dropdown menus
- Type: dialog
- Kind: omitted. The source records overlay geometry and no interactive-kind evidence for the menu surface itself (interaction lives on the trigger and the list rows), so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: `#ffffff`
- Border: 1px solid `#d1d9e0`
- Radius: 6px
- Shadow: medium `0 3px 6px rgba(140,149,159,0.15)` to large `0 8px 24px rgba(31,35,40,0.2)`

### Dialog

- Role: modal; confirmation prompts, create-from-template, delete confirmation
- Type: dialog
- Kind: omitted. The source records default geometry and no interactive-kind evidence for the dialog surface, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: `#ffffff`
- Border: 1px solid `#d1d9e0`
- Radius: 12px
- Padding: 16px; header 16px + 1px bottom border; title 16px / 600
- Shadow: `0 8px 24px rgba(31,35,40,0.2)`
- Scrim: `rgba(31,35,40,0.5)`

### Overlay

- Role: floating-surface primitive — base for menus, popovers, dialogs
- Type: dialog
- Kind: omitted. The source records the primitive’s geometry and no interactive-kind evidence for the overlay surface, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: `#ffffff`
- Border: 1px solid `#d1d9e0`
- Radius: 6px (YAML exact) / 6–12px (body)
- Shadow (YAML exact): `0 3px 6px rgba(140,149,159,0.15)`
- Shadow (body): medium/large
- Sizes: xsmall 192px → xlarge 960px by content

### Tooltip

- Role: dark bubble with small directional arrow, on hover/focus, for icon-button labels and truncated text
- Type: card
- Kind: omitted. The source records hover/focus geometry and no interactive-kind evidence for the bubble, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: `#1f2328`
- Text: `#ffffff`
- Radius: 6px
- Padding: 6px 12px
- Font: 12px / 400

### Banner

- Role: in-context message block; compact and flush layouts
- Type: card
- Kind: omitted. The source records notice geometry and an optional dismiss control without interactive-kind evidence for the block, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Anatomy: leading status icon; optional title/description/actions; optional dismiss x
- Background: `#ddf4ff` (YAML default / info)
- Text: `#1f2328`
- Border: 1px solid `rgba(9,105,218,0.4)` (YAML exact)
- Radius: 6px
- Padding: 16px
- Variants: info `#ddf4ff` / success `#dafbe1` / warning `#fff8c5` / critical `#ffebe9` (+ upsell), each with a 1px hue border at ~0.4 alpha (`rgba(9,105,218,0.4)` info)
- Actions reflow from inline to stacked under `sm`

### Flash

- Role: page-level banner spanning content width at page top; persists until navigation rather than auto-dismissing
- Type: card
- Kind: non-interactive. The source describes a page-level status message that persists until navigation, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Default (info): bg `#ddf4ff`, border 1px `rgba(9,105,218,0.4)`, text `#1f2328`
- Success: bg `#dafbe1`, border `rgba(31,136,61,0.4)`
- Warning: bg `#fff8c5`, border `rgba(154,103,0,0.4)`
- Danger: bg `#ffebe9`, border `rgba(207,34,46,0.4)`
- Radius: 6px, padding 16px, leading status icon

### Inline Message

- Role: compact single-line status beside a control — validation hints, save confirmations
- Type: card
- Kind: non-interactive. The source treats this as status text, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Anatomy: leading icon + tone-colored text
- Success: `#1a7f37`
- Attention: `#9a6700`
- Danger: `#cf222e`

### Spinner

- Role: indeterminate circular loader; replaces a button label during long ops
- Type: card
- Kind: non-interactive. The source treats this as a loading indicator, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Stroke: ~1.5px `#59636e`
- Sizes: 16 / 24 / 32 / 48px

### Progress Bar

- Role: rounded full track with green fill — language-breakdown bars, upload/operation progress
- Type: card
- Kind: non-interactive. The source treats this as a progress display, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Track: `#d1d9e0`
- Fill: `#1f883d`
- Radius: `9999px`
- Height: 8px

### Skeleton

- Role: loading placeholders at final element geometry (SkeletonBox / SkeletonText / SkeletonAvatar)
- Type: card
- Kind: non-interactive. The source treats this as a loading placeholder, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: `#f6f8fa` (light) / `#161b22` (dark)
- Radius: 6px
- SHAs/counts render as skeleton bars, never placeholder values

### Blankslate

- Role: centered empty state — icon visual, heading, description, green primary action + optional secondary link
- Type: card
- Kind: omitted. The source records empty-state geometry; the nested primary action is the Primary Button, so no `Kind: interactive` confirmation and no §4.4 map are declared for the blankslate surface.
- Heading: `#1f2328`
- Description: `#59636e`
- Variants: narrow, spacious, bordered
- Visual: centered icon/illustration. The judgement that this is often a rationed Octocat illustration is a derived editorial implementation inference from the verified surfaces; it is not GitHub-authored or a separately published UI specification.

### Timeline

- Role: issue/PR activity thread
- Type: listItem
- Kind: omitted. The source records thread geometry and no interactive-kind evidence for the rail, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Rail: vertical `#d1d9e0`
- Merge event: `#8250df` done purple
- Nodes: commit, comment, label, merge; avatar-led rows

### Additional patterns (values only; no invented kind)

- **Button group / counter-button:** adjacent buttons sharing a 1px divider with split outer radius (6px outer corners, 0 inner). Star · count: a default button welded to a `counter-label`, dividing line `#d1d9e0`.
- **Nav list:** vertical settings/section navigation (left rail in Settings). ActionList-derived; selected item `#ddf4ff` bg + `#0969da` text; nested sub-items.
- **Autocomplete / text-input-with-tokens:** a text input holding removable `token` pills; typing filters an attached ActionList overlay.
- **Data table:** `#f6f8fa` header row, 1px `#d1d9e0` row dividers, 14px body, hover row bg `#f6f8fa`.
- **Popover:** non-modal pointed overlay with a caret; `#ffffff` bg, 1px `#d1d9e0` border, 6px radius, medium shadow.
- **Diff line** (unique in source §9 example): added line bg `#dafbe1`, removed line bg `#ffebe9`, monospace 12px, leading +/− gutter, line numbers `#59636e`.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

Max content width: `1280px` for app pages (`container-xl`), with `1012px` (`container-lg`) for reading-optimized pages like settings and docs. Three container sizes: `container-md` (768px), `container-lg` (1012px), `container-xl` (1280px). Repo pages: 12-column grid with a primary content column and a metadata sidebar (About, topics, releases). Centered, gutter-padded; never full-bleed except marketing heroes.

The following whitespace reading is a derived editorial implementation inference from the verified surfaces; it is not GitHub-authored or a separately published UI specification. Density with air: each dense row gets consistent 8px breathing room. Borders over gaps: where other systems separate with whitespace, GitHub separates with 1px `#d1d9e0` rules. The sidebar pattern: detail pages use a wide main column + narrow right rail.

Primer breakpoints (documented in the public DS; they drive github.com’s layout):

| Name | Width | Key changes |
|---|---|---|
| XSmall (`xs`) | ≥320px | Base mobile, fully stacked, hamburger nav |
| Small (`sm`) | ≥544px | Single-column, stacked metadata |
| Medium (`md`) | ≥768px | Two-column begins, sidebar appears |
| Large (`lg`) | ≥1012px | Full repo layout, right rail visible, `container-lg` reading width |
| XLarge (`xl`) | ≥1280px | Max content width `container-xl`, wide gutters |
| XXLarge (`xxl`) | ≥1400px | Widest gutters for ultra-wide displays |

Collapsing: right metadata rail drops **below** the main column under `md`; `underline-nav` becomes horizontally scrollable on narrow screens; `tree-view` collapses to a toggle-drawer on mobile; `segmented-control` collapses to `dropdown` / `hideLabels`; two-pane diff collapses to unified diff; top nav collapses to a hamburger; global search becomes an icon-triggered overlay; `banner` / `flash` actions reflow from inline to stacked under `sm`.

Touch: minimum interactive target 28px (small button); default 32px; comfortable 40px. List rows ~40px+ tappable height on touch. Icon buttons: 32×32px hit area minimum.

Images: avatars circular (people) or 6px square (orgs/bots), sized 16/20/24/32/48/64px. Repo social-preview images 16:9, full-width within their container. Markdown-rendered images: max-width 100%, never overflow the prose column.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Observed homepage strings (live github.com via WebFetch 2026-06-06; dual-destination with provenance):

- "Change is constant. GitHub keeps you ahead."
- "The future of building happens together."

The following copy-pattern table, onboarding/docs/empty-repo/marketing gloss, forbidden-copy list, and voice reading are a derived editorial implementation inference from the verified surfaces; they are not GitHub-authored or a separately published UI specification.

| Context | Tone |
|---|---|
| Buttons | Imperative verb + object: "Create repository", "Commit changes", "Merge pull request". Never "Submit" or "OK". |
| Success flash | Plain past-tense confirmation: "Repository created." No exclamation marks in product UI. |
| Error messages | Specific + actionable: "Repository name already exists. Choose a different name." Never "An error occurred." |
| Empty states | Explain what goes here + offer the action: "There aren't any issues yet. Create the first one." |
| Onboarding / docs | Second person, step-numbered, code-sample-heavy. Show, don't just tell. |
| Marketing (homepage) | Aspirational, collective. Mona Sans, big and confident. |
| Empty repo | The famous quick-setup code block — terminal commands ready to copy, zero fluff. |

GitHub is read as speaking like a senior engineer writing good documentation: precise, direct, warm but never cute. Marketing voice is more aspirational and collective; product UI voice is plain, instructional, and free of hype. Octocat personality is read as licensed only in error/easter-egg surfaces, never in core workflows.

Forbidden patterns: vague errors ("Something went wrong" without a next step), exclamation-heavy hype in product UI, anthropomorphizing the system ("I couldn't find..."), "Oops".

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

- exact cubic-bezier curves for `ease-out` / `ease-in-out` / `ease-in` (unattributed; names and uses kept)
- motion duration, easing, animation name, transition properties, and reduced-motion behavior beyond the source-stated tables — promote further values only after per-component computed capture of all five; a single named duration is not that gate
- `focus-visible` visual treatments (named `Focus (keyboard)` is a different observation)
- Primer high-contrast theme values (named in the source; no hex captured)
- Primer base hue ramps (`blue-0` … `blue-9`) as expanded token sheets
- marketing homepage/Enterprise component anatomy beyond Mona Sans / Hubot Sans display roles
- a first-party redistributable mark file (catalog Simple Icons slug is identity-only)
- complete state-coverage for every Primer control
