# OpenAI Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

OpenAI is the organization behind ChatGPT, the API platform, and openai.com marketing. This contract covers those three named first-party surfaces. ChatGPT, the API platform, and marketing remain separately named; a value from one is not a proxy for the others.

The next paragraph is a derived editorial implementation inference from the verified surfaces; it is not OpenAI-authored or a separately published UI specification. The interface argues that powerful technology should feel quiet. Light canvases use `#0d0d0d` text on `#ffffff`. ChatGPT’s default-dark product surfaces (`#212121`, `#171717`, `#2f2f2f`) are first-class peers, not afterthoughts. Signature teal `#10a37f` is reserved for the mark, active moments, and brand-forward conversion. There is no gradient theater, glassmorphism, or drop-shadow drama. The page reads like a well-set book that happens to be interactive: generous margins, a single column of attention, type doing nearly all the expressive work.

Third-party WebSearch corroboration records that the 2025 rebrand introduced **OpenAI Sans**, a bespoke humanist grotesque from **ABC Dinamo**, replacing the earlier Klim Type Foundry pairing of **Söhne** (UI/blog) and **Signifier** (research papers). OpenAI Sans ships in five weights (Light, Regular, Medium, Semibold, Bold), each with a true italic. Product surfaces lean on Regular and Medium, escalating to Semibold/Bold only for headings. Signifier remains the research/editorial cue; product UI does not use serif. Exact values below are limited to the source’s stated public-product observations. openai.com/brand was not readable in the source fetch (HTTP 403); that route is not treated as a token sheet. The rebrand history’s evidence class is third-party corroboration; see Typography & Assets.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

- Compose a ChatGPT message and read streamed assistant output as document text.
- Start or continue from a named primary action (Get started, Try ChatGPT, Continue) or a brand-forward conversion (signup, upgrade to Plus).
- Read documentation or manage API keys and account settings on the API platform.
<!-- design-md:claim-end -->

### Audience

No invented demographic personas are promoted. Observable work follows the three primary tasks: people composing and reading ChatGPT output; people evaluating or starting ChatGPT from marketing; developers reading docs and managing API keys or account settings. Source §13’s named fictional archetypes are not Audience and are not primary tasks.

### Distinctive traits

- OpenAI Teal `#10a37f` as the singular brand/interactive accent, used sparingly
- Near-black `#0d0d0d` on `#ffffff` (light) and off-white on `#212121` (dark), both first-class
- OpenAI Sans (ABC Dinamo, 2025), five weights; UI leans on 400 / 500 / 600
- Editorial whitespace, long line measures, single-column reading and a centered ~768px ChatGPT conversation column
- Hairline borders (`#e5e5e5`) before shadow; soft-rounded 8–12px controls, pill inputs at 9999px / 26px composer

### Principles

These eight items are a derived editorial implementation inference from the verified surfaces; they are not OpenAI-authored or a separately published UI specification.

1. **Restraint is trust.** The more powerful the technology, the calmer its presentation should be.
2. **Whitespace is the primary material.** Generous margins and long vertical rhythm are the brand stating it has nothing to hide and nothing to oversell.
3. **Teal is a scalpel, not a brush.** `#10a37f` marks the brand and the moments of action. It never becomes a background, a wash, or decoration.
4. **Content over chrome.** Assistant text flows as a document, not a chat bubble; UI recedes so the words are the experience.
5. **Honesty in the type.** Monospace means exact (code, keys, IDs). Serif means research. Sans means product.
6. **Dark and light are equals.** Both modes are designed, not derived.
7. **Edges by hairline, not shadow.** A 1px border is the default boundary. Depth is earned only by things that genuinely float.
8. **Plain words win.** Microcopy is functional and humble. No hype, no Title Case, no exclamation.

Capture-bound application:

- Use teal `#10a37f` for the mark, active states, and key CTAs only. Default primary action is near-black `#0d0d0d`; teal is the brand-forward alternative.
- Default to `#0d0d0d` on `#ffffff`; design `#212121` / `#2f2f2f` / `#ececec` dark mode as a peer.
- Use OpenAI Sans at 400/500/600; apply slight negative tracking on large headings.
- Define edges with 1px `#e5e5e5` hairlines before reaching for shadow.
- Cap reading text at ~720px measure with 1.6 line-height; center the conversation column even on wide viewports.
- Use monospace for code, API keys, model IDs, and token counts.
- Keep assistant output unboxed, left-aligned, full-width.

### Avoid

- Do not use teal as a decorative fill or background wash.
- Do not add gradients, glows, or neon “AI” visual clichés.
- Do not box assistant output in a bubble.
- Do not use serif for product UI — Signifier signals research/editorial only.
- Do not crowd layouts; if a section feels dense, it needs more whitespace.
- Do not use heavy multi-layer or colored shadows — single-layer black, low opacity.
- Do not let reading text span the full viewport width.
- Do not present Söhne, Helvetica, or a system fallback as OpenAI Sans.
- Do not treat catalog identity teal as a silent replacement for the default near-black primary action.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Light / shared roles:

- **OpenAI Teal** (`#10a37f`): brand and interactive accent — logo mark, brand-forward CTAs, active links, success affirmations. The brand color is the success color. Used with discipline; it is the only saturated hue in most layouts.
- **Teal Hover** (`#1a7f64`): darker teal for hover/pressed on teal-filled elements.
- **Teal Light** (`#d9f2ea`): inline success banners, selected rows, teal badge fill.
- **Canvas** (`#ffffff`): page background and card surface in light mode; also brand-white inverse lockup.
- **Near Black / Ink** (`#0d0d0d`): primary text, default primary-action fill, Gray 900. A true-feeling near-black, not pure `#000000`.
- **Brand Black** (`#000000`): official monochrome logo lockup on light backgrounds; also primary-button pressed fill.
- **Error** (`#ef4146`): destructive actions, validation failures.
- **Warning** (`#f5a623`): caution, rate-limit warnings, pending review. Do not merge this with badge amber fill/text.
- **Info** (`#4d6bfe`): informational callouts and documentation-context links.
- **Amber badge fill** (`#fdf0d5`) and **Amber badge text** (`#b8770f`): Preview / Rate limited caution chips and the rate-limit banner.

Neutral scale (light):

- **Gray 50** (`#f7f7f8`): ChatGPT sidebar/light fills, code-block backgrounds, user-message bubble.
- **Gray 100** (`#ececec`): secondary surface, hover fills, disabled backgrounds, skeleton blocks, selected sidebar item (light).
- **Gray 200 / Border Default** (`#e5e5e5`): default border, divider, hairline.
- **Gray 300 / Border Strong** (`#d1d1d1`): stronger border, input outline, toggle off.
- **Gray 400** (`#b4b4b4`): placeholder-adjacent, disabled icon, composer focus border, dark secondary text.
- **Gray 500** (`#9b9b9b`): caption / tertiary, placeholder, disabled text.
- **Gray 600** (`#6e6e80`): secondary body, metadata, inactive tab text (the muted slate).
- **Gray 700** (`#40414f`): emphasized secondary text, neutral badge text.
- **Gray 800** (`#2d2d2d`): strong labels; primary-black button hover.

Dark mode surfaces:

- **Surface Base** (`#212121`): ChatGPT main canvas in dark mode.
- **Surface Sunken** (`#171717`): sidebar, deeper panels.
- **Surface Raised** (`#2f2f2f`): cards, message bubbles, input bar on dark; selected sidebar item (dark).
- **Dark Border** (`#3e3e42` / `rgba(255,255,255,0.1)`): hairline dividers on dark. Strong dark border: `rgba(255,255,255,0.2)`.
- **Dark Text Primary** (`#ececec`); **Dark Text Secondary** (`#b4b4b4`).
- **Overlay Scrim** (`rgba(0,0,0,0.5)`): modal backdrop, identical across modes.

Brand lockup: monochrome `#000000` on light, `#ffffff` on dark; teal is a permitted accent for the blossom/spiral mark in select brand contexts. Catalog `primary_color` `#10a37f` is the teal accent, not the default primary-action fill.

### Spacing

Base unit: 4px. Common values: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px. YAML working cluster: 8px, 12px, 16px, 24px. Marketing section vertical rhythm: 96–128px between major bands. Product UI horizontal padding: 16–24px; marketing: centered max-width with auto margins.

### Shape

- Tight (6px): badges, tags, small chips
- Standard (8px): form inputs, ghost buttons, segmented controls
- Comfortable (12px): buttons, cards
- Large (16px): modals, large panels
- XL (18–26px): message bubbles (18px), chat composer (26px)
- Pill (9999px): suggestion chips, toggles, avatar rings

8px form-input corners and 12px button/card corners are local geometry, not a universal radius for every surface.

### Elevation

The following elevation reading is a derived editorial implementation inference from the verified surfaces; it is not OpenAI-authored or a separately published UI specification. OpenAI prefers borders over shadows. A 1px `#e5e5e5` hairline defines most edges; shadow appears only on genuinely floating elements. Shadows are pure black at low opacity — no colored or layered glows. In dark mode, elevation is lighter surface tints (`#212121` → `#2f2f2f`) rather than shadow.

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow; hairline `#e5e5e5` | Cards, page sections, default surfaces |
| Subtle (Level 1) | `0 1px 3px rgba(0,0,0,0.08)` | Active segmented control |
| Standard (Level 2) | `0 2px 8px rgba(0,0,0,0.08)` | Composer focus, hover cards, dropdowns |
| Elevated (Level 3) | `0 4px 16px rgba(0,0,0,0.12)` | Popovers, menus, toasts (body table) |
| Modal (Level 4) | `0 8px 32px rgba(0,0,0,0.16)` | Dialogs, command palette |

YAML/component toast shadow is `0 4px 16px rgba(0,0,0,0.16)`. That is not the same opacity as Level 3 `0.12`. Both values are kept; they are not averaged. YAML card-hover shadow is `0 4px 12px rgba(0,0,0,0.06)`. Toggle thumb: `0 1px 2px rgba(0,0,0,0.1)`.

Sticky marketing headers use `backdrop-filter: blur(12px)` with a translucent white/dark background on scroll. Modal backdrops are flat scrims, not blurred.

### Motion

Source-stated duration roles:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Theme toggle, immediate state flips |
| `motion-fast` | 120ms | Hover, focus, button press, small fades |
| `motion-standard` | 200ms | Default — menu open, card hover lift, tab switch |
| `motion-moderate` | 300ms | Modal/sheet entrance, sidebar drawer slide |
| `motion-stream` | per-token | Text streaming cadence |

Signature motions (source-stated; not decoration):

1. **Token streaming.** Assistant text appears progressively with a soft blinking caret. The cadence conveys thinking — deliberate, not instant. It never loops or stalls artificially. A “Stop generating” ghost button appears below while streaming.
2. **Composer focus.** On focus, the composer border darkens gently and lifts with `0 2px 8px rgba(0,0,0,0.08)` over `motion-fast`. Subtle, inviting, never bouncy.
3. **Menu / popover.** Dropdowns and the model picker fade-and-scale in from 0.96 to 1.0 over `motion-standard` with `ease-out`, anchored to their trigger. Dismissal is faster (`motion-fast`). `ease-out` here is the source-stated token name and use, not a computed curve.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all transitions collapse toward `motion-instant`, streaming text appears in larger chunks rather than per-token animation, and scale/slide effects become simple fades. The product stays fully usable.

Source-stated easing token names and uses (uncomputed; cubic-bezier curves omitted):

| Token | Curve | Use |
|---|---|---|
| `ease-out` | omitted (unattributed cubic-bezier; source-stated name and use only) | Things appearing — menus, modals, toasts |
| `ease-in` | omitted (unattributed cubic-bezier; one matches the legacy spec template) | Things leaving — dismissals |
| `ease-standard` | omitted (unattributed cubic-bezier; source-stated name and use only) | Two-way transitions — hovers, tab content, drawer |

Exact cubic-bezier curves are unattributed — one matches the legacy spec template — and remain omitted rather than promoted. Do not promote an easing curve, animation name, transition property, or a duration beyond the tables above until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. Any exact animation curve remains a local extension until that per-component computed observation exists.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Third-party-corroborated brand history | 2025 rebrand introduced OpenAI Sans (ABC Dinamo), five weights plus italics, replacing Söhne (UI/blog) and Signifier (research papers). Earlier system used Colfax/Charter. Source: third-party WebSearch corroboration (Loftlyy, Mobbin, Fonts In Use, DesignYourWay, brandpalettes.com). This is not official product-use. |
| Live surface-use | Source names openai.com live DOM `getComputedStyle` as the Tier-1 path for UI values. Token extraction is `prose-derived`. Values are widely documented public product observations, not a sourced internal OpenAI specification. |
| Official distributed asset | No OpenAI-exclusive public redistribution right for OpenAI Sans is established here. |
| Declared-only | Söhne remains in the CSS fallback stack; Signifier is declared for research/editorial; SF Mono / Söhne Mono for code. |
| Outside this capture | Native-app type metrics beyond the named mobile composer height; a loadable OpenAI Sans webfont for third-party reproduction; openai.com/brand returned HTTP 403 in the source fetch, so no downloaded official type specimen sheet. |

### Family

- **Current UI family:** `"OpenAI Sans", "Söhne", "Helvetica Neue", Helvetica, Arial, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`
- **Serif (research/editorial):** `"Signifier", "Charter", Georgia, "Times New Roman", serif` — long-form research papers and select editorial moments. Product UI never uses serif.
- **Monospace:** `"SF Mono", "Söhne Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace` — code, API keys, token counts, model IDs.
- Do not present Söhne, Helvetica, or a system fallback as OpenAI Sans. An officially known but unavailable face keeps its metadata and loses only a live specimen.

The following type-character reading is a derived editorial implementation inference from the verified surfaces; it is not OpenAI-authored or a separately published UI specification. OpenAI Sans is humanist-leaning — open apertures, a warm single-story `a`, slightly squared terminals. Five weights ship; UI leans on 400 (body), 500 (medium emphasis), 600 (headings). Bold and Light are accents. Negative tracking on display: large headings tighten to -0.01em / -0.02em. Body stays at default tracking. Body line-height runs 1.6–1.63.

### Type roles

Verified line-height values are the unitless YAML ratios. Px figures in the legacy body table are size-local observations at those captured sizes, not replacements for the ratios.

| Role | Font | Size | Weight | Line height | Tracking | Use |
|---|---|---:|---:|---:|---:|---|
| Display Hero | OpenAI Sans | 56px | 600 | 1.07 | -0.02em | Marketing hero, launch pages; size-local 60px |
| Display Large | OpenAI Sans | 40px | 600 | 1.15 | -0.02em | Section headers; size-local 46px |
| Heading 1 | OpenAI Sans | 32px | 600 | 1.25 | -0.01em | Page titles; size-local 40px |
| Heading 2 | OpenAI Sans | 24px | 600 | 1.33 | -0.01em | Sub-sections, card titles; size-local 32px |
| Heading 3 | OpenAI Sans | 20px | 600 | 1.4 | normal | Group labels, modal headers; size-local 28px (1.40) |
| Subtitle | OpenAI Sans | 18px | 500 | 1.56 | normal | Lead paragraphs, list headers; size-local 28px |
| Body Large | OpenAI Sans | 16px | 400 | 1.63 | normal | Marketing body, descriptions; size-local 26px |
| Body | OpenAI Sans | 15px | 400 | 1.6 | normal | Standard reading text, chat; size-local 24px (1.60) |
| Body Small | OpenAI Sans | 14px | 400 | 1.57 | normal | Secondary info, dense UI; size-local 22px |
| Caption | OpenAI Sans | 13px | 400 | 1.38 | normal | Timestamps, metadata, helper; size-local 18px |
| Code | SF Mono / Söhne Mono | 14px | 400 | 1.57 | normal | Code blocks, tokens, IDs; size-local 22px |

### Assets

The blossom/spiral mark and monochrome wordmark are described in the source; no redistributable file is attached here.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source state contract, preserved here while the catalog graph is not adopted:

| State | Treatment |
|---|---|
| Empty (new chat) | Centered, calm — the wordmark or a short greeting, the composer ready, and 3–4 suggestion chips (white bg, 1px `#e5e5e5` border, pill). No illustration, no empty-state cartoon. |
| Empty (no results) | Single line of `#6e6e80` secondary text ("No results found"). Optional ghost button to clear filters. |
| Loading (generating) | Blinking cursor / animated dots in the assistant column as text streams in token-by-token. Content appears progressively, never as a blocking spinner over the page. |
| Loading (page/data) | Skeleton blocks at `#ececec` matching final layout, subtle shimmer. Used in dashboards and the platform, not in the chat stream. |
| Streaming | Text renders incrementally with a soft caret; a "Stop generating" ghost button appears below. The user retains control mid-stream. |
| Error (inline field) | `#ef4146` 1px border, helper text below in `#ef4146` 13px. One specific, blameless sentence with a next step. |
| Error (generation failed) | Inline message in the assistant slot — "Something went wrong" with a "Retry" ghost button. Calm, never a full-screen takeover for a transient failure. |
| Error (rate limit) | Amber-toned banner (`#fdf0d5` bg, `#b8770f` text) stating the limit and when it resets. Honest and specific, not apologetic boilerplate. |
| Success (copy/save) | Black toast ("Copied"), 3s auto-dismiss. No exclamation, no color celebration. |
| Disabled | Reduced contrast — `#e5e5e5` fill, `#9b9b9b` text. Geometry unchanged so re-enabled state is stable. |
| Focus | 3px teal-tinted ring `rgba(16,163,127,0.2)` on inputs; subtle border darken on the composer. Always visible for keyboard users. This is a generic `Focus` observation, not `focus-visible` treatment evidence. |
| Selected (chat item) | Sidebar item gets `#ececec` (light) / `#2f2f2f` (dark) fill, no border — a quiet highlight, not a colored bar. |

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. A generic `Focus` capture is not `focus-visible` treatment evidence; named focus colors stay as additional observed states, and the `focus-visible` visual treatment remains omitted. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control's product role, not its primitive kind. This is not a complete state-coverage claim.

Standard Card, Dark Card, User Message, Assistant Message, and Dialog have no interactive-kind evidence, so kind and a state-applicability map are omitted. Badges and Toast are descriptive rather than interactive.

### Primary (Black)

- Role: default primary action across product and marketing ("Get started", "Continue")
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#0d0d0d`
- Text: `#ffffff`
- Border: none
- Radius: 12px
- Padding: 0 20px
- Height: 48px
- Font: 15px / 500 / OpenAI Sans
- Hover: `#2d2d2d`
- Pressed: `#000000`
- Disabled: `#e5e5e5` bg / `#9b9b9b` text
- Dark-surface variant: `#ffffff` bg, `#0d0d0d` text, same 12px / 48px / 15px / 500

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named default primary action |
| hover | applicable | Pointer-web button; `#2d2d2d` captured |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Captured `#e5e5e5` / `#9b9b9b` |
| loading | not-applicable | Get started / Continue is the destination or next-step action; waiting lives on the page or stream, not as a loading state of this button |
| error | not-applicable | Failure is an inline field, generation slot, or rate-limit banner, not an error state of this action |
| success | not-applicable | Confirmation is the black toast, not a success state of this button |

Additional observed named state: pressed `#000000`.

### Primary (Teal / Brand CTA)

- Role: brand-forward conversion (signup, upgrade to Plus)
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#10a37f`
- Text: `#ffffff`
- Border: none
- Radius: 12px
- Padding: 0 20px
- Height: 48px
- Font: 15px / 500 / OpenAI Sans
- Hover: `#1a7f64`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named brand-forward conversion CTA |
| hover | applicable | Pointer-web button; `#1a7f64` captured |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A conversion action can be unavailable; visual treatment omitted |
| loading | not-applicable | Signup/upgrade is the destination action; the control itself does not enter a loading state |
| error | not-applicable | Conversion meaning is the destination, not a request or validation failure on the button |
| success | not-applicable | Completing signup/upgrade is not a success confirmation painted on this button |

### Secondary (Outline)

- Role: secondary action paired with a primary ("Learn more", "Cancel")
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#ffffff`
- Text: `#0d0d0d`
- Border: 1px solid `#d1d1d1`
- Radius: 12px
- Padding: 0 20px
- Height: 48px
- Font: 15px / 500 / OpenAI Sans
- Hover: `#f7f7f8` bg, border `#0d0d0d`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named secondary action |
| hover | applicable | Pointer-web button; hover captured |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A paired secondary action can be unavailable; visual treatment omitted |
| loading | not-applicable | Learn more / Cancel navigates or dismisses; the control itself does not enter a loading state |
| error | not-applicable | Secondary meaning is the paired action, not a request or validation failure on the button |
| success | not-applicable | Following or dismissing is not an action-outcome confirmation on the button |

### Ghost / Tertiary

- Role: low-emphasis inline action, toolbar button, menu item
- Kind: interactive
- Type: button
- Anatomy: label
- Background: transparent
- Text: `#0d0d0d`
- Border: none
- Radius: 8px
- Padding: 0 12px
- Height: 40px
- Font: 14px / 500 / OpenAI Sans
- Hover: `#ececec` bg

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named low-emphasis inline action |
| hover | applicable | Pointer-web button; `#ececec` captured |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A toolbar or menu action can be unavailable; visual treatment omitted |
| loading | not-applicable | A toolbar or menu item fires an inline action; the ghost control itself does not enter a loading state |
| error | not-applicable | Inline chrome does not report a request or validation failure of its own |
| success | not-applicable | Stop generating / Retry / Copy live as labeled actions, not a success state of the ghost |

### Pill (Compact / Suggestion chip)

- Role: ChatGPT prompt-suggestion chip, filter pill, model selector
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#ffffff`
- Text: `#0d0d0d`
- Border: 1px solid `#e5e5e5`
- Radius: 9999px
- Padding: 8px 16px
- Font: 14px / 400 / OpenAI Sans
- Hover: `#f7f7f8`
- Touch: minimum 36px height

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named suggestion/filter/model chip |
| hover | applicable | Pointer-web chip; `#f7f7f8` captured |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A filter or model option can be unavailable; visual treatment omitted |
| loading | not-applicable | A suggestion chip proposes a prompt or selects a filter; the chip itself does not enter a loading state |
| error | not-applicable | Chip meaning is suggestion or selection, not a request or validation failure |
| success | not-applicable | Selecting a chip is selection, not an action-outcome confirmation on the chip |

### Chat Composer

- Role: signature ChatGPT message input
- Kind: interactive
- Type: input
- Anatomy: value field with inline send/attach icons
- Background: `#ffffff` (light) / `#2f2f2f` (dark)
- Text: `#0d0d0d` / `#ececec`
- Border: 1px solid `#e5e5e5` / `rgba(255,255,255,0.1)`
- Radius: 26px
- Padding: 14px 18px
- Font: 16px / 400 / OpenAI Sans
- Placeholder: `#9b9b9b`
- Mobile: ~52px+ tall, pinned to the bottom with safe-area insets

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named central message input |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive field; visual treatment omitted |
| disabled | applicable | Message entry can be unavailable; visual treatment omitted |
| loading | not-applicable | Generation loading is the assistant stream, not a loading state of the composer |
| error | not-applicable | Send/generation failure is shown in the assistant slot, not as a composer-field error |
| success | not-applicable | Sending a message is the default action, not a success confirmation on the composer |

Additional observed named state: generic `Focus` — border darken to `#b4b4b4` plus `0 2px 8px rgba(0,0,0,0.08)` lift. This is not `focus-visible` evidence.

### Standard Form Field

- Role: settings, API keys, account forms
- Kind: interactive
- Type: input
- Anatomy: value field with helper text
- Background: `#ffffff`
- Text: `#0d0d0d`
- Border: 1px solid `#d1d1d1`
- Radius: 8px
- Padding: 10px 12px
- Font: 15px / 400 / OpenAI Sans
- Placeholder: `#9b9b9b`
- Error: border 1px solid `#ef4146`; helper `#ef4146` 13px; ring `0 0 0 3px rgba(239,65,70,0.2)`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named settings / API-key / account field |
| hover | applicable | Pointer-web field; visual treatment omitted |
| focus-visible | applicable | Interactive field; visual treatment omitted |
| disabled | applicable | A settings field can be unavailable; visual treatment omitted |
| loading | not-applicable | The field’s role is text entry with helper text; the field itself does not enter a loading state |
| error | applicable | Captured validation-failure treatment |
| success | not-applicable | Copied/Saved confirmation is the toast, not a success state of the field |

Additional observed named state: generic `Focus` — border `#10a37f` plus `0 0 0 3px rgba(16,163,127,0.2)` ring. This is not `focus-visible` evidence.

### Standard Card

- Role: documentation cards, pricing tiers, model cards
- Type: card
- Kind: omitted. The source records default geometry and no state or interactive-kind evidence, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: `#ffffff`
- Border: 1px solid `#e5e5e5`
- Radius: 12px
- Padding: 24px
- Shadow: none (border carries the edge)
- Model-card type from the source prompt guide: title 20px / 600 / `#0d0d0d`; description 15px / 400 / `#6e6e80`

### Interactive Card

- Role: clickable model picker, example gallery, app links
- Kind: interactive
- Type: card
- Anatomy: title and description
- Background: `#ffffff`
- Border: 1px solid `#e5e5e5`
- Radius: 12px
- Padding: 20px
- Hover: border `#0d0d0d` or `0 4px 12px rgba(0,0,0,0.06)` lift

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named clickable card |
| hover | applicable | Pointer-web card; hover captured |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A picker or gallery card can be unavailable; visual treatment omitted |
| loading | not-applicable | A model-picker or gallery card selects or navigates; the card itself does not enter a loading state |
| error | not-applicable | Card meaning is selection or destination, not a request or validation failure on the card |
| success | not-applicable | Choosing a model or example is selection, not an action-outcome confirmation on the card |

### Dark Card

- Role: cards on the dark product canvas
- Type: card
- Kind: omitted. The source records default dark geometry and no state or interactive-kind evidence, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: `#2f2f2f`
- Border: 1px solid `rgba(255,255,255,0.1)`
- Radius: 12px
- Padding: 24px

### User Message

- Role: ChatGPT user turn bubble
- Type: listItem
- Kind: omitted. The source records bubble geometry and no interactive-kind evidence, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: `#f7f7f8` (light) / `#2f2f2f` (dark)
- Text: `#0d0d0d` / `#ececec`
- Radius: 18px
- Padding: 10px 16px
- Align: right, max-width ~70%

### Assistant Message

- Role: model output as flowing document text
- Kind: omitted. The source records unboxed document text and no interactive-kind evidence, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: transparent (no bubble)
- Text: `#0d0d0d` / `#ececec`
- Padding: 4px 0
- Align: full-width, left
- Font: 15px / 400 / line-height 1.6

### Badge (Neutral)

- Role: model labels, version tags ("GPT-4o", "Beta")
- Type: badge
- Kind: non-interactive. The source treats badges as status labels rather than actions, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: `#ececec`
- Text: `#40414f`
- Border: none
- Radius: 6px
- Padding: 2px 8px
- Font: 12px / 500 / OpenAI Sans

### Badge (Teal)

- Role: "New", "Plus", positive emphasis
- Type: badge
- Kind: non-interactive. The source treats badges as status labels rather than actions, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: `#d9f2ea`
- Text: `#1a7f64`
- Radius: 6px
- Padding: 2px 8px
- Font: 12px / 500 / OpenAI Sans

### Badge (Amber)

- Role: "Preview", "Rate limited", caution
- Type: badge
- Kind: non-interactive. The source treats badges as status labels rather than actions, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: `#fdf0d5`
- Text: `#b8770f`
- Radius: 6px
- Padding: 2px 8px
- Font: 12px / 500 / OpenAI Sans

### Underline Tabs

- Role: documentation, settings sections, API reference
- Kind: interactive
- Type: tab
- Anatomy: label plus 2px bottom indicator
- Background: transparent
- Inactive text: `#6e6e80`
- Active text: `#0d0d0d`
- Active indicator: 2px bottom border `#0d0d0d` (or `#10a37f` in brand contexts)
- Font: 15px / 500 / OpenAI Sans

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Inactive tab is the resting section label |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A docs or settings tab can be unavailable; visual treatment omitted |
| loading | not-applicable | A tab selects a section; the tab itself does not enter a loading state |
| error | not-applicable | Tab meaning is selected vs inactive, not a request or validation failure on the tab |
| success | not-applicable | Tab meaning is selection, not action-outcome confirmation |

Additional observed named states: active and inactive.

### Segmented

- Role: light/dark or mode toggle, plan switching
- Kind: interactive
- Type: tab
- Anatomy: track plus active segment
- Track: `#ececec`
- Radius: 8px
- Active: `#ffffff` bg + `#0d0d0d` text + `0 1px 3px rgba(0,0,0,0.08)`
- Inactive: `#6e6e80` text
- Font: 14px / 500

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Inactive segment is the resting mode/plan option |
| hover | applicable | Pointer-web segment; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A mode or plan option can be unavailable; visual treatment omitted |
| loading | not-applicable | A segmented control selects a mode or plan; the segment itself does not enter a loading state |
| error | not-applicable | Segment meaning is selected vs inactive, not a request or validation failure |
| success | not-applicable | Switching mode or plan is selection, not an action-outcome confirmation on the segment |

Additional observed named states: active and inactive.

### Toast

- Role: transient confirmation ("Copied", "Saved")
- Type: toast
- Kind: non-interactive. The source describes an auto-dismiss status message, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: `#0d0d0d`
- Text: `#ffffff`
- Border: none
- Radius: 10px
- Padding: 12px 16px
- Shadow: `0 4px 16px rgba(0,0,0,0.16)`
- Font: 14px / 400 / OpenAI Sans
- Auto-dismiss ~3s

### Dialog

- Role: confirmations, settings panels, upgrade prompts
- Type: dialog
- Kind: omitted. The source records default geometry and no interactive-kind evidence for the dialog surface, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: `#ffffff` (light) / `#2f2f2f` (dark)
- Border: 1px solid `#e5e5e5` / `rgba(255,255,255,0.1)`
- Radius: 16px
- Padding: 24px
- Shadow: `0 8px 32px rgba(0,0,0,0.16)`
- Backdrop: `rgba(0,0,0,0.5)`

### Toggle

- Role: boolean settings (custom instructions, data controls)
- Kind: interactive
- Type: toggle
- Anatomy: track plus thumb
- Track: `#10a37f` (on) / `#d1d1d1` (off)
- Radius: 9999px
- Thumb: `#ffffff` 18px circle, `0 1px 2px rgba(0,0,0,0.1)`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Off/on boolean setting is the control |
| hover | applicable | Pointer-web toggle; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A settings boolean can be locked; visual treatment omitted |
| loading | not-applicable | A boolean setting records on versus off; the toggle itself does not enter a loading state |
| error | not-applicable | On/off is the toggle meaning; a save failure would be a toast, not an error state of the thumb |
| success | not-applicable | On is the on state, not a success confirmation on the toggle |

Additional observed named states: on and off.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The following whitespace reading is a derived editorial implementation inference from the verified surfaces; it is not OpenAI-authored or a separately published UI specification. Whitespace is treated as the brand: generous margins and long vertical rhythm. Marketing sections present a single idea per band. The reading measure is capped at ~720px. ChatGPT pins the conversation to a centered ~768px column even on ultrawide screens. Marketing max-width is ~1200px centered, with ~24px gutters. 12-column grid for marketing layouts; single-column for reading and chat.

| Name | Width | Key changes |
|---|---|---|
| Mobile | <640px | Single column, full-width composer, collapsed sidebar (drawer) |
| Tablet | 640–1024px | Sidebar toggleable, content column ~640px |
| Desktop | 1024–1440px | Persistent sidebar, centered ~768px conversation column |
| Wide | >1440px | Content stays centered at max-width; margins grow, not content |

Touch targets: buttons 48px primary height, 40px ghost; suggestion chips minimum 36px height; composer ~52px+ on mobile. ChatGPT sidebar collapses to an off-canvas drawer below tablet. Marketing nav collapses to a hamburger under 768px. Multi-column marketing grids stack to single column on mobile. Composer pins to the bottom of the viewport on mobile with safe-area insets.

Marketing imagery is full-bleed or contained within the 1200px grid, maintaining aspect ratio. Model-generated images render at the conversation column width with 12px rounded corners. Avatars and logos: crisp at 24–40px, consistent sizing within a context.

The 48px primary, 40px ghost, 36px chip minimum, 52px+ mobile composer, 56px display-hero size, and 768px conversation column are source measurements, not a claim that every unlisted surface shares them.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The following voice and tone notes are a derived editorial implementation inference from the verified surfaces; they are not OpenAI-authored or a separately published UI specification. OpenAI speaks like a thoughtful researcher who respects your intelligence: clear, plain, confident without hype. It avoids both corporate jargon and breathless “revolutionary” marketing. Sentences are short and declarative. Claims are measured — capabilities are described with their limits acknowledged. The voice is in American English, lowercase-comfortable in product microcopy, sentence case nearly everywhere (not Title Case).

| Context | Tone |
|---|---|
| CTAs | Plain imperative — "Get started", "Try ChatGPT", "Start building". Sentence case. |
| Product microcopy | Minimal, functional — "Send a message", "Regenerate", "Copy code". |
| Success states | Quiet and brief — "Copied", "Saved". No exclamation marks. |
| Error messages | Honest and specific — name what happened, offer a next step. Never blame the user. |
| Onboarding | Calm, one concept at a time. Acknowledges the tool's novelty without overhyping. |
| Capability claims | Measured — describe what the model does and its limitations. "may produce inaccurate information". |
| Documentation | Precise, example-first, second person ("you can…"). |

Forbidden tone. No hype superlatives ("game-changing", "revolutionary", "mind-blowing"), no fake urgency, no emoji in product chrome, no Title Case headings, no anthropomorphizing the model as a person with feelings. Safety and limitation language is never hidden — it is part of the honest voice.

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

- exact cubic-bezier easing curves (omitted as unattributed; one matches the legacy spec template)
- animation names and CSS transition properties until per-component computed capture of all five motion evidence kinds exists; a single named duration is not that gate
- a loadable OpenAI Sans webfont for third-party reproduction, and native-app type metrics beyond the named mobile composer
- `focus-visible` visual treatments (generic `Focus` is a different observation)
- hover visual values for the composer and form field
- loading visual values for buttons and chips
- catalog identity favicon as a first-party mark
