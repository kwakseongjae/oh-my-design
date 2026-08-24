# Slack Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Slack is the work-messaging product behind slack.com. This contract covers two named first-party surfaces documented as parallel peers: in-app product UI (Lato, aubergine sidebar) and marketing web (Larsseit headlines, green CTA). The source records those peers as parallel surfaces. Catalog homepage identity is `https://slack.com`.

Treating a value from one of those peers as not a proxy for the other, and reading that parallel-surface record as not a marketing-versus-in-app clash, is a derived editorial implementation inference from the verified surfaces; it is not Slack-authored or a separately published UI specification.

Token extraction is `prose-derived`. Direct WebFetch (2026-06-06) confirmed only slack.com marketing: aubergine chrome, conversational/AI-forward voice, and green CTA. In-app radii, paddings, and heights are representative of observed UI conventions; exact internal design-token names may differ.

The next paragraph is a derived editorial implementation inference from the verified surfaces; it is not Slack-authored or a separately published UI specification. Slack leads with **Aubergine** (`#4A154B`) — a warm eggplant purple (Pantone 7672 C) that anchors the left sidebar and marketing chrome — while the content canvas stays `#FFFFFF` with near-black text `#1D1C1D`. Instant recognition sits in the tension between that sober aubergine and the four-color hashtag logo: cerulean `#36C5F0`, green `#2EB67D`, magenta-red `#E01E5A`, and yellow `#ECB22E`. The logo’s multicolor optimism signals teams coming together; the aubergine UI signals that real work can happen here.

Product UI runs on **Lato**. Marketing headlines use **Larsseit**, with **Circular** as a companion and Helvetica Neue / system fonts only as fallbacks.

The following history values are widely documented public facts from source §11 and the HTML comment; they are not interface tokens. Slack ("Searchable Log of All Conversation and Knowledge") began as the internal chat tool inside Tiny Speck while building the game *Glitch*. When the game failed in **2012**, that internal tool became the product. Founded by **Stewart Butterfield** (ex-Flickr), Slack launched publicly in **2014** and became one of the fastest-growing SaaS products in history, reaching a **$1B** valuation in just over a year. The four-color hashtag logo is a **2019** redesign of an earlier mark. Slack was acquired by **Salesforce in 2021 for ~$27.7 billion**. It now positions itself as the conversational layer of work, including AI agents alongside human teams.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

- Send and read work messages in channels and threads.
- Confirm an in-app action (Send, Create channel) or start from a marketing CTA (Get started, Try for free).
- Search the conversation log.
<!-- design-md:claim-end -->

### Audience

Restricting Audience so source §13’s named fictional archetypes are not Audience and are not primary tasks, and tying observable work only to the three primary tasks, is a derived editorial implementation inference from the verified surfaces; it is not Slack-authored or a separately published UI specification. No invented demographic personas are promoted. Observable work follows the three primary tasks: people sending and reading work messages; people starting from marketing or confirming in-app actions; people searching the conversation log.

### Distinctive traits

The following list is a derived editorial implementation inference from the verified surfaces; it is not Slack-authored or a separately published UI specification.

- Aubergine `#4A154B` as brand chrome (sidebar, marketing nav, identity), with sidebar variant `#3F0E40`
- Four-color hashtag logo (blue/green/red/yellow) as decorative counterweight, never as functional UI state color
- Lato for product UI; Larsseit + Circular for marketing headlines and marketing body/alt
- Clean white canvas `#FFFFFF` with near-black text `#1D1C1D`, never pure `#000000` for text
- Green CTA `#007A5A` for primary marketing actions — high contrast on aubergine
- Soft corners: 4px UI controls, 8–12px marketing cards, pill 9999px for badges and toggles

### Principles

These eight items are a derived editorial implementation inference from the verified surfaces; they are not Slack-authored or a separately published UI specification.

1. **Warm, not cold.** The brand purple is aubergine, not violet; text is near-black, not pure black. Every default leans a degree warmer than the enterprise norm — that warmth is the brand.
2. **Conversation is the interface.** Layout, spacing, and hierarchy all serve scanning and reading threads. Messages get vertical air; the content canvas stays clean.
3. **One action color.** Green (`#007A5A`) means “do the thing.” Aubergine is identity, not action. Never blur the two.
4. **The logo stays playful; the UI stays disciplined.** Four colors belong to the mark and decoration. Functional UI uses the restrained aubergine/neutral/green system.
5. **Plain language wins.** Copy reads like a smart colleague talking — short, active, jargon-free. Wit is welcome until stakes are high.
6. **Fast and legible over dense.** Lato at 15px/1.46 for messages is tuned for reading volume without fatigue. Speed of comprehension is a feature.
7. **Soft corners, gentle depth.** 4–8px radii and low neutral shadows keep the product approachable. Drama is reserved for marketing.
8. **Human celebration.** Small moments of delight — an emoji on a sent message, a friendly empty state — reward the user without slowing them down.

Capture-bound application: this list is a derived editorial implementation inference from the verified surfaces; it is not Slack-authored or a separately published UI specification.

- Use Aubergine `#4A154B` for brand chrome — sidebar, nav, identity surfaces.
- Use Green CTA `#007A5A` for the primary action; it pops against aubergine.
- Use Lato in the product UI; Larsseit for marketing headlines.
- Keep border-radius at 4px for buttons/inputs, 8px for cards/modals.
- Use the four-color logo only as logo or decorative accent — never as UI state colors.
- Use near-black `#1D1C1D` for text, never pure `#000000`.
- Use the green presence dot `#2EB67D` for active status.

### Avoid

The following items are a derived editorial implementation inference from the verified surfaces; they are not Slack-authored or a separately published UI specification.

- Do not use aubergine as a CTA fill where green is expected — green is the action color.
- Do not recolor the four-color logo or use its colors for functional UI states.
- Do not use cold blue-purple — Slack’s purple is warm aubergine, not violet.
- Do not pack messages tightly; conversation needs vertical breathing room.
- Do not use heavy shadows in-product — depth is reserved for floating elements.
- Do not mix Lato and Larsseit within the same surface.
- Do not set body text in bold (700); reserve it for names, headers, and `*bold*`.
- Do not present Helvetica Neue, system fonts, or a fallback stack as Lato or Larsseit.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

The following character, logo-accent, contrast-reason, unmerged-role, and conflict-application readings are a derived editorial implementation inference from the verified surfaces; they are not Slack-authored or a separately published UI specification.

Primary / identity:

- **Aubergine** (`#4A154B`): brand color. Left sidebar, marketing nav, logo wordmark, primary identity surfaces. Pantone 7672 C. Warm, deep eggplant — never cold purple. Catalog `primary_color` is this value.
- **Aubergine Null** (`#611F69`): resting/zero state of aubergine interactive elements on web. Also the aubergine CTA hover.
- **Aubergine Active** (`#7C3085`): hover/active state derived from aubergine.
- **Sidebar Aubergine** (`#3F0E40`): darker aubergine sidebar variant in product. Not the same hex as Aubergine.
- **Pure White** (`#FFFFFF`): primary content canvas, card surfaces, message background; also on-primary text.
- **Near Black** (`#1D1C1D`): primary text color. A warm off-black, not pure `#000000`.

Brand multicolor (logo / accent only — not functional UI state colors):

- **Slack Blue** (`#36C5F0`): logo lozenge. Decorative accent, illustration.
- **Slack Green** (`#2EB67D`): logo lozenge. Also the online/active presence fill.
- **Slack Red** (`#E01E5A`): logo lozenge. Decorative accent; same hex as Error Red, different role.
- **Slack Yellow** (`#ECB22E`): logo lozenge. Decorative accent; same hex as Warning Yellow, different role.

Action / CTA:

- **CTA Green** (`#007A5A`): primary call-to-action button on marketing surfaces. Chosen for AA contrast against aubergine backgrounds. Observed marketing action color. Not Aubergine, and not Success Green `#2BAC76`.
- **CTA Green Hover** (`#148567`): hover state for the green CTA.
- **Link Blue** (`#1264A3`): inline hyperlinks, interactive text in product and marketing. Not the sidebar selected row `#1164A3`.
- **Link Blue Hover** (`#0B4C8C`): hover state for links.

Semantic:

- **Error Red** (`#E01E5A`): destructive actions, error messages, validation failure.
- **Warning Yellow** (`#ECB22E`): caution states, pending, attention-needed.
- **Success Green** (`#2BAC76`): YAML and §2 Semantic — confirmations, sent, positive status. Not CTA Green.
- **Online Green** (`#2EB67D`): §2 presence dot — user is active. Same hex as Slack Green logo lozenge.
- Source §9 Quick reference names **Success / Presence** as Green (`#2EB67D`). The regular Success token remains `#2BAC76`. Both hexes are kept. Not silently resolving that source conflict as two fully distinct settled roles is a derived editorial implementation inference from the verified surfaces; it is not Slack-authored or a separately published UI specification.

Neutral scale:

- **Black 1000** (`#1D1C1D`): primary text, headings.
- **Gray 900** (`#454245`): secondary text, strong labels.
- **Gray 700** (`#616061`): body text, descriptions, metadata.
- **Gray 500** (`#868686`): placeholder, disabled text, timestamps.
- **Gray 300 / Border Default** (`#E8E8E8`): borders, dividers, input outlines, YAML hairline.
- **Gray 200 / Surface** (`#F8F8F8`): subtle surface fills, hover backgrounds.
- **Gray 100** (`#FBFAFB`): lightest background tint.
- **Border Strong** (`#DDDDDD`): emphasized separators. Not Border Default.
- **Overlay Scrim** (`rgba(29, 28, 29, 0.6)`): modal backdrop. Dialog body also records `rgba(29,28,29,0.6)` without spaces; both source figures are kept.

### Spacing

Base unit: 4px. YAML working cluster: 4px, 8px, 12px, 16px, 24px, 32px, 48px. Body also records 20px and 64px on the spacing scale, and 64–96px vertical rhythm between marketing blocks. Product message rows: 8px vertical between messages, 16px horizontal gutters. Treating those figures as source-stated values rather than a claim that every unlisted surface shares them is a derived editorial implementation inference from the verified surfaces; it is not Slack-authored or a separately published UI specification.

### Shape

- Tight (3px): inline mention highlights, small chips
- Standard (4px): buttons, inputs, small cards
- Comfortable (8px): cards, modals, message composer, toasts
- Large (12px): marketing feature cards
- Pill (9999px): badges, toggles, presence dots

Treating 3px tight, 4px button/input, 8px card/modal, 12px marketing-card, and 9999px pill corners as local geometry, not a universal radius for every surface, is a derived editorial implementation inference from the verified surfaces; it is not Slack-authored or a separately published UI specification.

### Elevation

The following elevation reading is a derived editorial implementation inference from the verified surfaces; it is not Slack-authored or a separately published UI specification. Slack uses neutral black shadows at low-to-moderate opacity. Elevation communicates interactivity (a hovered message reveals a floating action bar), but the product stays mostly flat — depth is reserved for things that genuinely float above the conversation. Marketing allows softer, larger shadows to lift feature cards off the page.

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | Sidebar, message rows, page background |
| Subtle (Level 1) | `0 1px 3px rgba(0,0,0,0.08)` | Standard cards, list separation |
| Raised (Level 2) | `0 4px 12px rgba(0,0,0,0.12)` | Hover toolbars, popovers, dropdowns |
| Floating (Level 3) | `0 4px 16px rgba(0,0,0,0.10)` | Marketing feature cards |
| Modal (Level 4) | `0 18px 48px rgba(0,0,0,0.35)` | Dialogs, full modals |

YAML/component toast shadow is `0 4px 12px rgba(0,0,0,0.2)`. That is not the same opacity as Level 2 `0.12`. Both values are kept; they are not averaged. Toggle thumb: `0 1px 2px rgba(0,0,0,0.2)`.

Reading modal backdrops as a solid scrim rather than blur to keep focus sharp, and not promoting a numeric blur value for sticky-nav overlays, is a derived editorial implementation inference from the verified surfaces; it is not Slack-authored or a separately published UI specification. Modal backdrops use a solid scrim, not blur, to keep focus sharp. Some marketing overlays apply subtle backdrop blur on sticky nav. No numeric blur value is promoted.

### Motion

Source-stated duration roles:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle flips, checkbox state |
| `motion-fast` | 100ms | Hover, focus, button press, emoji reaction pop |
| `motion-standard` | 200ms | The default — menu opens, tooltip, hover toolbar reveal |
| `motion-slow` | 300ms | Modal in/out, sidebar drawer, thread pane slide |
| `motion-emphasis` | 450ms | Celebratory moments — emoji confetti, onboarding advance |

Signature motions (source-stated names, durations, and uses):

The following motion character and purpose readings are a derived editorial implementation inference from the verified surfaces; it is not Slack-authored or a separately published UI specification.

1. **Emoji reaction pop.** Adding a reaction scales the emoji from 0.6→1.1→1.0 over `motion-fast` with `ease-bounce`. A small, joyful overshoot — the one place bounce is licensed in-product. `ease-bounce` here is the source-stated token name and use, not a computed curve.
2. **Thread pane slide.** The right pane slides in from `x+340px` with `motion-slow / ease-enter`; content stays visible behind it. Dismissal uses `ease-exit` and feels quicker. `ease-enter` / `ease-exit` are source-stated token names and uses, not computed curves.
3. **Hover action toolbar.** Hovering a message fades in the floating action bar over `motion-fast / ease-standard` — instant enough to feel responsive, soft enough to not flicker.
4. **Message send.** A sent message fades from `opacity 0.6` to `1.0` over `motion-standard` once confirmed by the server — a subtle settle that signals “delivered”.
5. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all tokens collapse to `motion-instant`, slides become fades, and the reaction pop drops its overshoot. Fully usable, just calm.

Source-stated easing token names and uses (uncomputed; cubic-bezier curves omitted):

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | omitted (unattributed cubic-bezier; source-stated name and use only) | Things appearing — menus, toasts, panes sliding in |
| `ease-exit` | omitted (unattributed cubic-bezier; matches the legacy spec template) | Things leaving — dismissals, closing menus |
| `ease-standard` | omitted (unattributed cubic-bezier; source-stated name and use only) | Two-way transitions — hover states, expand/collapse |
| `ease-bounce` | omitted (unattributed cubic-bezier; source-stated name and use only) | Reserved for delight — emoji reaction pop, celebration. Never on routine UI. |

Exact cubic-bezier curves are unattributed — `ease-exit` matches the legacy spec template — and remain omitted rather than promoted. Do not promote an easing curve, animation name, transition property, or a duration beyond the tables above until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. Any exact animation curve remains a local extension until that per-component computed observation exists.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The following evidence-class application readings are a derived editorial implementation inference from the verified surfaces; they are not Slack-authored or a separately published UI specification.

| Evidence class | Resolution |
|---|---|
| Live surface-use | slack.com live marketing (WebFetch 2026-06-06): aubergine chrome, green CTA, Larsseit headlines. Token extraction is `prose-derived`. |
| Official guidance named | Slack Brand Guidelines PDF (`a.slack-edge.com/.../Slack-Brand-Guidelines.pdf`) is named for aubergine (Pantone 7672 C) and typography pairing. Values below remain widely documented public observations, not a sourced internal Slack specification. |
| Third-party-corroborated | designyourway.net (Lato/Larsseit confirmation); brandpalettes.com and onlinepalette.com for color codes. This is not official product-use. |
| Declared-only | Circular as marketing body/alt; Helvetica Neue / Helvetica / Segoe UI / Tahoma / Arial as fallbacks; Monaco / Menlo / Consolas / Courier New for code. |

### Family

- **Product UI:** `Lato, "Helvetica Neue", Helvetica, "Segoe UI", Tahoma, Arial, sans-serif`
- **Marketing Headlines:** `Larsseit, "Helvetica Neue", Helvetica, Arial, sans-serif`
- **Marketing Body / Alt:** `Circular, "Helvetica Neue", Helvetica, Arial, sans-serif`
- **Monospace:** `Monaco, Menlo, Consolas, "Courier New", monospace`
- **Emoji:** native platform emoji set, rendered inline at text size

The following font-use boundary is a derived editorial implementation inference from the verified surfaces; it is not Slack-authored or a separately published UI specification. Do not present Helvetica Neue, system fonts, or a fallback stack as Lato or Larsseit. An officially known but unavailable face keeps its metadata and loses only a live specimen.

The following type-character reading is a derived editorial implementation inference from the verified surfaces; it is not Slack-authored or a separately published UI specification. Two type worlds, one personality: Lato carries the product; Larsseit carries marketing. Both are humanist/geometric sans with warmth — never a cold grotesque. Weight does the work: Lato in 400 (body), 700 (bold/headings), 900 (display). Italic for quoted/system messages. Message density first: product body sits at 15px/1.46. Bold means emphasis, not decoration: 700 signals names, headers, and `*bold*` markdown — never entire paragraphs.

### Type roles

Verified line-height values are the unitless YAML ratios. Px figures in the legacy body table are size-local observations at those captured sizes, not replacements for the ratios.

| Role | Font | Size | Weight | Line height | Tracking | Use |
|---|---|---:|---:|---:|---:|---|
| Display Hero | Larsseit | 56px | 900 | 1.14 | -0.02em | Marketing hero headlines; size-local 64px |
| Display Large | Larsseit | 44px | 700 | 1.18 | -0.01em | Section headers (web); size-local 52px |
| Heading 1 | Larsseit / Lato | 32px | 700 | 1.25 | normal | Page titles; size-local 40px |
| Heading 2 | Lato | 24px | 700 | 1.33 | normal | Sub-sections, modal titles; size-local 32px |
| Heading 3 | Lato | 18px | 700 | 1.44 | normal | Card titles, channel headers; size-local 26px |
| Subtitle | Lato | 16px | 700 | 1.50 | normal | List headers, emphasized labels; size-local 24px |
| Body Large | Lato | 16px | 400 | 1.50 | normal | Marketing body, descriptions; size-local 24px |
| Body | Lato | 15px | 400 | 1.46 | normal | Message text — the workhorse; size-local 22px |
| Body Small | Lato | 13px | 400 | 1.38 | normal | Secondary info, metadata; size-local 18px |
| Caption | Lato | 12px | 400 | 1.33 | normal | Timestamps, fine print; size-local 16px |
| Code | Monaco | 12px | 400 | 1.50 | normal | Inline code, code blocks; size-local 18px |

### Assets

- Site favicon: `https://slack.com/favicon.ico`
- Four-color hashtag logo (cerulean / green / magenta-red / yellow) and aubergine wordmark are described in the source; no redistributable file is attached here. Treating the four-color mark as logo or decorative accent only is a derived editorial implementation inference from the verified surfaces; it is not Slack-authored or a separately published UI specification. Use the four-color mark only as logo or decorative accent.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source state contract, preserved here while the catalog graph is not adopted:

| State | Treatment |
|---|---|
| Empty (new channel) | Friendly one-liner ("This is the very beginning of the #channel channel") in `#616061` 15px, plus a suggested action (invite people, set a topic). Personality, never sterile. |
| Empty (search no results) | Single line in `#868686` ("No results for '...'") with a tip to refine the query. No illustration required. |
| Loading (first paint) | Skeleton rows matching message structure in `#F8F8F8` with a 1.2s shimmer. Sidebar shows skeleton channel rows. |
| Loading (sending) | Message appears immediately in a dimmed state (`opacity 0.6`) with a small spinner; resolves to full opacity on confirm. |
| Error (inline field) | 1px `#E01E5A` border + `0 0 0 1px #E01E5A` focus ring, helper text below in `#E01E5A` 13px. One actionable sentence. |
| Error (message failed) | Red `#E01E5A` "Failed to send" label under the message with a "Retry" link. Message stays visible, never silently dropped. |
| Error (toast) | `#1D1C1D` bg, white 15px text, 8px radius, auto-dismiss ~4s. One blameless sentence. |
| Success (sent) | Message snaps to full opacity; optional small green check or emoji reaction. No blocking confirmation. |
| Success (action) | Brief `#1D1C1D` toast ("Channel created") bottom-center, 4s dismiss. |
| Disabled | Opacity `0.5`, `cursor: not-allowed`, no hover transition. Geometry preserved. |
| Presence | Filled green dot `#2EB67D` (active) / hollow ring `rgba(29,28,29,0.4)` (away) on avatars. |
| Unread | Bold channel name `#1D1C1D` 700 in sidebar + red `#CD2553` count badge for mentions/DMs. |

In-app radii, paddings, and heights are representative of Slack’s observed UI conventions; exact internal design-token names may differ.

The following applicability general note and the subsequent state maps are a derived editorial implementation inference from the verified surfaces; it is not Slack-authored or a separately published UI specification. Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. A generic `Focus` capture is not `focus-visible` treatment evidence; named focus colors stay as additional observed states, and the `focus-visible` visual treatment remains omitted. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control's product role, not its primitive kind, and stay omitted at the field boundary unless this packet records exact behavior for that control. This is not a complete state-coverage claim.

Standard Card, Marketing Feature Card, Message Hover Card, Unread Count, Mention Highlight, Status Pill, Presence Dot, Toast, Info Banner, and Dialog have no interactive-kind evidence, so kind and a state-applicability map are omitted. Disabled on any button variant: opacity `0.5`, `cursor: not-allowed`, no hover.

### Primary / Green (Marketing CTA)

- Role: primary marketing CTA ("Get started", "Try for free")
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#007A5A`
- Text: `#FFFFFF`
- Border: none
- Radius: 4px
- Padding: 0 16px
- Font: 18px / 900 / Larsseit
- Height: 44px
- Hover: `#148567`
- Use: Primary CTA — "Get started", "Try for free"

The same subsection also records a product rendering of this green CTA at 15px / 700 / Lato and 36px tall. Product / Primary records 15px / 900 / Lato at 36px. Both source figures are kept; they are not averaged.

The following state-applicability map is a derived editorial implementation inference from the verified surfaces; it is not Slack-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named primary marketing CTA |
| hover | applicable | Pointer-web button; `#148567` captured |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Documented any-variant disabled: opacity `0.5`, `cursor: not-allowed` |

Loading, error, and success applicability are omitted. Source names this control as a marketing CTA ("Get started", "Try for free"); exact destination, request, and outcome behavior are unresolved, so those three fields stay omitted at this boundary rather than closed as a destination control.

### Primary / Aubergine

- Role: brand-forward CTA on white ("Talk to sales")
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#4A154B`
- Text: `#FFFFFF`
- Border: none
- Radius: 4px
- Padding: 0 16px
- Font: 18px / 900 / Larsseit
- Hover: `#611F69`
- Use: Brand-forward CTA on white surfaces ("Talk to sales")

The following state-applicability map is a derived editorial implementation inference from the verified surfaces; it is not Slack-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named brand-forward marketing CTA |
| hover | applicable | Pointer-web button; `#611F69` captured |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Documented any-variant disabled: opacity `0.5`, `cursor: not-allowed` |

Loading, error, and success applicability are omitted. Source names this control as a marketing CTA ("Talk to sales"); exact destination, request, and outcome behavior are unresolved, so those three fields stay omitted at this boundary rather than closed as a destination control.

### Secondary / Outline

- Role: secondary marketing action ("Watch demo")
- Kind: interactive
- Type: button
- Anatomy: label
- Background: transparent
- Text: `#4A154B` (on light) / `#FFFFFF` (on aubergine)
- Border: 1px solid `#4A154B` (or `#FFFFFF` on dark)
- Radius: 4px
- Padding: 0 16px
- Font: 18px / 700 / Larsseit
- Hover: fill with 8% aubergine tint
- Use: Secondary marketing action ("Watch demo")

The following state-applicability map is a derived editorial implementation inference from the verified surfaces; it is not Slack-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named secondary marketing action |
| hover | applicable | Pointer-web button; 8% aubergine tint captured |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Documented any-variant disabled: opacity `0.5`, `cursor: not-allowed` |

Loading, error, and success applicability are omitted. Source names this control as a secondary marketing action ("Watch demo"); exact destination, request, and outcome behavior are unresolved, so those three fields stay omitted at this boundary rather than closed as a destination control.

### Product / Primary

- Role: in-app confirm ("Send", "Create channel")
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#007A5A`
- Text: `#FFFFFF`
- Border: 1px solid transparent
- Radius: 4px
- Padding: 0 12px
- Font: 15px / 900 / Lato
- Height: 36px
- Hover: `#148567`
- Use: In-app confirm ("Send", "Create channel")

The following state-applicability map is a derived editorial implementation inference from the verified surfaces; it is not Slack-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named in-app confirm |
| hover | applicable | Pointer-web button; `#148567` captured |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Documented any-variant disabled: opacity `0.5`, `cursor: not-allowed` |

Loading, error, and success applicability are omitted. Source names this control as an in-app confirm for both "Send" and "Create channel"; exact per-action request and outcome behavior on this button is unresolved, so those three fields stay omitted rather than linked to message or toast global states.

### Product / Secondary

- Role: cancel / dismiss / neutral in-app action
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#FFFFFF`
- Text: `#1D1C1D`
- Border: 1px solid `rgba(29,28,29,0.3)`
- Radius: 4px
- Padding: 0 12px
- Font: 15px / 700 / Lato
- Hover: bg `#F8F8F8`
- Use: Cancel / dismiss / neutral action

The following state-applicability map is a derived editorial implementation inference from the verified surfaces; it is not Slack-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named cancel / dismiss action |
| hover | applicable | Pointer-web button; `#F8F8F8` captured |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Documented any-variant disabled: opacity `0.5`, `cursor: not-allowed` |

Loading, error, and success applicability are omitted. Source names this control as cancel / dismiss / neutral; exact destination, request, and outcome behavior are unresolved, so those three fields stay omitted at this boundary rather than closed as a destination control.

### Danger

- Role: destructive confirm ("Delete", "Leave channel")
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#E01E5A`
- Text: `#FFFFFF`
- Border: none
- Radius: 4px
- Padding: 0 12px
- Font: 15px / 900 / Lato
- Hover: darken 8%
- Use: Destructive confirm ("Delete", "Leave channel")

The following state-applicability map is a derived editorial implementation inference from the verified surfaces; it is not Slack-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named destructive confirm |
| hover | applicable | Pointer-web button; darken 8% captured |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Documented any-variant disabled: opacity `0.5`, `cursor: not-allowed` |

Loading, error, and success applicability are omitted. Exact navigation or toast behavior after Delete / Leave channel is not in the source, so those three fields stay omitted rather than closed as navigation or toast outcomes.

### Text Field

- Role: standard form input
- Kind: interactive
- Type: input
- Anatomy: value field with helper text
- Background: `#FFFFFF`
- Text: `#1D1C1D`
- Border: 1px solid `rgba(29,28,29,0.3)`
- Radius: 4px
- Padding: 11px 12px
- Font: 15px / 400 / Lato
- Placeholder: `#868686`
- Use: Standard form input
- Error: border 1px solid `#E01E5A`; helper `#E01E5A` 13px / 400 / Lato; ring `0 0 0 1px #E01E5A`

The following state-applicability map is a derived editorial implementation inference from the verified surfaces; it is not Slack-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named standard form input |
| hover | applicable | Pointer-web field; visual treatment omitted |
| focus-visible | applicable | Interactive field; visual treatment omitted |
| disabled | applicable | A form field can be unavailable; visual treatment omitted |
| error | applicable | Captured validation-failure treatment |

Loading and success applicability are omitted. Exact field-loading behavior is unresolved. Confirmation is not attached here as a toast or sent-message outcome.

Additional observed named state: generic `Focus` — border `#1264A3` plus `0 0 0 1px #1264A3` ring. This is not `focus-visible` evidence.

### Message Composer

- Role: the message box — taller, rounder, with toolbar row
- Kind: interactive
- Type: input
- Anatomy: value field plus toolbar row of icon buttons below
- Background: `#FFFFFF`
- Text: `#1D1C1D`
- Border: 1px solid `rgba(29,28,29,0.3)`
- Radius: 8px
- Padding: 8px 12px
- Font: 15px / 400 / Lato
- Use: The message box

The following state-applicability map is a derived editorial implementation inference from the verified surfaces; it is not Slack-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named message composer |
| hover | applicable | Pointer-web field; visual treatment omitted |
| focus-visible | applicable | Interactive field; visual treatment omitted |
| disabled | applicable | Message entry can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Sending, failed-to-send, and delivered are recorded as message states in the capture record; exact composer-control behavior for those three fields is unresolved, so they stay omitted rather than linked to those global states.

Additional observed named state: generic `Focus` — border darkens to `rgba(29,28,29,0.5)`, subtle inner shadow. This is not `focus-visible` evidence.

### Standard Card

- Role: content panels, feature cards on web
- Type: card
- Kind: omitted. The source records default geometry and no state or interactive-kind evidence, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: `#FFFFFF`
- Border: 1px solid `#E8E8E8`
- Radius: 8px
- Padding: 24px
- Shadow: `0 1px 3px rgba(0,0,0,0.08)`

### Marketing Feature Card

- Role: hero/promo cards, pricing tiles
- Type: card
- Kind: omitted. The source records default geometry and no state or interactive-kind evidence, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: `#FFFFFF`
- Border: none
- Radius: 12px
- Padding: 32px
- Shadow: `0 4px 16px rgba(0,0,0,0.10)`
- Title: Larsseit 24px 700; body: Lato 16px / 1.50 `#616061`

### Message Hover Card

- Role: hover actions toolbar, message context popover
- Type: card
- Kind: omitted. The source records popover geometry and no interactive-kind evidence for the surface, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: `#FFFFFF`
- Border: 1px solid `#E8E8E8`
- Radius: 8px
- Padding: 0
- Shadow: `0 4px 12px rgba(0,0,0,0.12)`

### Unread Count

- Role: channel/DM unread badge
- Type: badge
- Kind: omitted. The source records default geometry and no interactive-kind evidence, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: `#CD2553`
- Text: `#FFFFFF`
- Border: none
- Radius: 9999px
- Padding: 1px 6px
- Font: 12px / 700 / Lato

### Mention Highlight

- Role: `@you` mention inline
- Kind: omitted. The source records default geometry and no interactive-kind evidence, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: `rgba(29,155,209,0.1)` to aubergine-tinted on mention
- Text: `#1264A3`
- Radius: 3px
- Padding: 0 2px

### Status Pill

- Role: "NEW", custom status, app labels
- Type: badge
- Kind: omitted. The source records default geometry and no interactive-kind evidence, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: `#F8F8F8`
- Text: `#616061`
- Border: 1px solid `#E8E8E8`
- Radius: 12px
- Padding: 2px 10px
- Font: 13px / 700 / Lato

### Presence Dot

- Role: user online/away indicator
- Kind: omitted. The source records default geometry and no interactive-kind evidence, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Active: `#2EB67D` (filled circle, 8px)
- Away: hollow ring `rgba(29,28,29,0.4)`

### Sidebar Channel

- Role: channel list in the product sidebar
- Kind: interactive
- Type: tab
- Anatomy: label, often with a `#` prefix
- Background: transparent (inactive) / `#1164A3` (active, on aubergine sidebar)
- Inactive text: `rgba(255,255,255,0.7)`
- Active text: `#FFFFFF`
- Hover (inactive): bg `rgba(255,255,255,0.1)`
- Font: 15px / 700 / Lato
- Height: 36px
- Use: Channel list in product sidebar

The following state-applicability map is a derived editorial implementation inference from the verified surfaces; it is not Slack-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Inactive channel row is the resting list item |
| hover | applicable | Pointer-web tab; `rgba(255,255,255,0.1)` captured |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A channel row can be unavailable; visual treatment omitted |
| loading | not-applicable | A channel tab selects a conversation; the row itself does not enter a loading state |
| error | not-applicable | Tab meaning is selected vs inactive, not a request or validation failure on the row |
| success | not-applicable | Opening a channel is selection, not an action-outcome confirmation on the row |

Additional observed named states: active and inactive. `#1164A3` is the selected-row fill, not Link Blue `#1264A3`.

### Top Tab / Segmented

- Role: Threads / Mentions / Saved tab switching
- Kind: interactive
- Type: tab
- Anatomy: label plus 2px bottom indicator
- Background: transparent
- Inactive text: `#616061`
- Active text: `#1D1C1D`
- Active indicator: 2px bottom border `#4A154B`
- Font: 15px / 700 / Lato

The following state-applicability map is a derived editorial implementation inference from the verified surfaces; it is not Slack-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Inactive tab is the resting section label |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A section tab can be unavailable; visual treatment omitted |
| loading | not-applicable | A tab selects Threads / Mentions / Saved; the tab itself does not enter a loading state |
| error | not-applicable | Tab meaning is selected vs inactive, not a request or validation failure on the tab |
| success | not-applicable | Tab meaning is selection, not action-outcome confirmation |

Additional observed named states: active and inactive.

### Toast

- Role: transient confirmation ("Message saved")
- Type: toast
- Kind: omitted. The source records default geometry and no interactive-kind evidence, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: `#1D1C1D`
- Text: `#FFFFFF`
- Border: none
- Radius: 8px
- Padding: 12px 16px
- Shadow: `0 4px 12px rgba(0,0,0,0.2)`
- Font: 15px / 400 / Lato
- Auto-dismiss ~4s
- Use: "Message saved", transient confirmation; also Success (action) "Channel created" bottom-center

### Info Banner

- Role: system notice, workspace announcement
- Type: card
- Kind: omitted. The source records default notice geometry and no interactive-kind evidence, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: `#FEF7E0`
- Text: `#1D1C1D`
- YAML records `border: 3px solid #ECB22E`. Body records `Border-left: 3px solid #ECB22E`. Both figures are kept.
- Radius: 4px
- Padding: 12px 16px

### Dialog

- Role: create-channel, preferences, confirmation dialogs
- Type: dialog
- Kind: omitted. The source records default geometry and no interactive-kind evidence for the dialog surface, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: `#FFFFFF`
- Text: `#1D1C1D`
- Border: none
- Radius: 8px
- Padding: 24px
- Shadow: `0 18px 48px rgba(0,0,0,0.35)`
- Backdrop: `rgba(29,28,29,0.6)`

### Toggle

- Role: boolean settings (notifications, do-not-disturb)
- Kind: interactive
- Type: toggle
- Anatomy: track plus white thumb
- Track: `#007A5A` (on) / `#868686` (off)
- Border: none
- Radius: 9999px
- Thumb: `#FFFFFF` circle with `0 1px 2px rgba(0,0,0,0.2)` shadow
- Use: Boolean settings (notifications, do-not-disturb)

The following state-applicability map is a derived editorial implementation inference from the verified surfaces; it is not Slack-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Off/on boolean setting is the control |
| hover | applicable | Pointer-web toggle; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A settings boolean can be locked; visual treatment omitted |

Loading, error, and success applicability are omitted. Exact save-failure toast behavior is not in the source, so those three fields stay omitted rather than closed against a toast.

Additional observed named states: on and off.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The following whitespace reading is a derived editorial implementation inference from the verified surfaces; it is not Slack-authored or a separately published UI specification. Conversation breathes: messages get vertical air so threads stay scannable; avatar + name + timestamp form a clear left rail. Marketing is bold and open: big headlines, generous section padding, one idea per scroll section. Density where it counts: sidebar channel lists are compact; the content canvas is spacious.

Spacing system: 4px base; common values 4px, 8px, 12px, 16px, 20px, 24px, 32px, 48px, 64px. Product message rows: 8px vertical between messages, 16px horizontal gutters. Marketing sections: 64–96px vertical rhythm between blocks.

Grid and container: marketing max-width 1200px centered container; 12-column grid on marketing pages with 24px gutters. Product layout: fixed left sidebar (260px) + flexible content + optional right pane (340px). Message column: comfortable measure, full width within the content area.

Keeping the source-prompt-guide message anatomy in Layout is a derived editorial implementation inference from the verified surfaces; it is not Slack-authored or a separately published UI specification. Message anatomy from the source prompt guide: 48px squircle avatar (4px radius) left; name 15px Lato 700 `#1D1C1D` + timestamp 12px `#868686`; body 15px / 1.46 Lato 400 `#1D1C1D`; 8px vertical gap between messages.

| Name | Width | Key changes |
|---|---|---|
| Mobile | <640px | Single column, collapsed sidebar (hamburger), stacked CTAs |
| Tablet | 640–1024px | Sidebar as overlay, 2-up feature grids |
| Desktop | 1024–1280px | Full 3-pane product layout, multi-column marketing |
| Wide | >1280px | Centered 1200px container, generous margins |

Touch targets: buttons minimum 44px tall on touch surfaces; channel/DM rows 36–44px tap height; icon buttons 36px minimum hit area with padding.

Collapsing: product sidebar collapses to an icon rail or hamburger drawer on mobile. Right thread pane slides over content as a full-screen sheet on mobile. Marketing hero stacks headline → subhead → CTA vertically. Multi-column feature grids collapse to single column.

Images: app/integration logos 20–40px, consistent within context. Marketing illustrations: full-bleed or contained, maintain aspect ratio. Avatars: 36px in lists, 48px in profiles, rounded 4px (squircle), never full circle. Treating avatars as 4px squircle, never full circle, is a derived editorial implementation inference from the verified surfaces; it is not Slack-authored or a separately published UI specification.

Treating the 44px marketing CTA, 36px product confirm, 260px sidebar, 340px thread pane, and 1200px marketing container as source measurements rather than a claim that every unlisted surface shares them is a derived editorial implementation inference from the verified surfaces; it is not Slack-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Observed (WebFetch 2026-06-06, slack.com marketing): `"AI in Slack doesn't make you think, it helps you do"`; `"work starts in conversation"`. Dual-destination with provenance.

The following voice and tone notes, copy-pattern table, and forbidden-phrase list are a derived editorial implementation inference from the verified surfaces; they are not Slack-authored or a separately published UI specification. Slack speaks like a sharp, friendly colleague: clear, warm, occasionally witty, never corporate. It puts work in human terms ("where work happens", "work starts in conversation") and favors plain verbs over jargon. Sentences are short and active. Humor shows up in microcopy and empty states, but it never gets in the way of getting something done. English is the primary voice; localized strings preserve the same warmth.

| Context | Tone |
|---|---|
| CTAs | Plain, inviting verbs: "Get started", "Try for free", "Create channel" |
| Success messages | Friendly, brief: "Message sent." "Channel created." Often a small celebratory emoji in-product. |
| Error messages | Blameless, specific, human: never "An error occurred." Say what happened and what to do. |
| Empty states | Light and encouraging: a touch of personality ("This is the very beginning of the #channel channel") plus one clear next step. |
| Onboarding | Second person, one idea at a time, conversational guidance. |
| Marketing | Confident and benefit-led: "AI in Slack doesn't make you think, it helps you do." |
| Notifications | Concise, scannable, action-first. Respect attention. |

Forbidden phrases. "An unexpected error occurred", "Oops! Something went wrong" without a fix, cold corporate filler ("Please be advised", "As per"), and over-cute copy on serious actions (deleting data, billing). Wit yields to clarity whenever stakes are high.

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

- exact cubic-bezier easing curves (omitted as unattributed; `ease-exit` matches the legacy spec template)
- animation names and CSS transition properties until per-component computed capture of all five motion evidence kinds exists; a single named duration is not that gate
- `focus-visible` visual treatments (generic `Focus` is a different observation)
- exact internal design-token names (source says they may differ from these representative pixels)
