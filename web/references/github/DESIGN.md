---
id: github
name: GitHub
country: US
category: developer-tools
homepage: "https://github.com"
primary_color: "#0969da"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=github.com&sz=128"
verified: "2026-06-06"
added: "2026-06-06"
omd: "0.1"
---

# Design System Inspiration of GitHub

## 1. Visual Theme & Atmosphere

GitHub is the home of the world's software, and its interface reflects a deliberate engineering aesthetic: precise, legible, and quietly confident. The product surface is built on **Primer**, GitHub's open-source design system — a token-driven framework that has powered github.com for over a decade. The atmosphere is utilitarian without being cold; it is the visual language of a tool used eight hours a day by people who care about whitespace, monospace alignment, and the diff between two characters.

The defining tension in GitHub's design is **dual-theme parity**. Light mode opens on a pure white canvas (`#ffffff`) with near-black ink (`#1f2328`); dark mode (the default for a large share of developers) lives on a deep, slightly blue-cooled near-black (`#0d1117`) with soft off-white text (`#e6edf3`). Neither theme is an afterthought — every component is specified in both, and the same accent blue (`#0969da` light / `#4493f8` dark) anchors interactivity across both. This is not a brand that picks a single hero color and decorates with it; it is a brand that treats *information legibility* as the highest aesthetic value.

The interactive accent is **GitHub Blue** (`#0969da`), used for links, focus rings, and selected states. Crucially — and unlike most consumer products — the **primary action color is green** (`#1f883d`), the "Commit / Create / Merge" green that signals constructive, forward action. This green-for-primary, blue-for-link split is a signature of the GitHub system and a direct inheritance from version-control semantics (green = addition, red = deletion).

Monospace is not a decoration here — it is structural. Code, SHAs, file paths, branch names, and inline `code` spans render in a mono stack, and the comfortable reading of diffs depends on tabular, fixed-advance glyphs. The UI chrome itself uses a system-font stack for speed and native feel.

**Key Characteristics:**
- Primer-driven token architecture (functional + base scales) with full light/dark/high-contrast theming
- GitHub Blue (`#0969da`) for links and focus; **green (`#1f883d`) for primary actions** — a version-control inheritance
- Dark mode canvas `#0d1117` treated as a first-class, equally-specified theme
- System-font UI stack for chrome; monospace stack for all code, SHAs, and paths
- 6px default border-radius — soft but never rounded-friendly; engineering-precise
- Subtle 1px borders (`#d1d9e0`) do the structural work that shadows do elsewhere
- Diff semantics (green add / red delete) bleed into the entire color system

## 2. Color Palette & Roles

GitHub's color system is built in two layers: **base scales** (raw hue ramps, e.g. `blue-0` … `blue-9`) and **functional tokens** (semantic roles like `fgColor-accent`, `bgColor-default`). Values below are the canonical Primer light-theme values unless marked `(dark)`.

### Primary / Accent
- **GitHub Blue** (`#0969da`): `accent.fg` / `fgColor-accent`. Links, focus rings, selected states, active nav indicator. The universal "this is interactive text" color.
- **Blue (dark theme)** (`#4493f8`): `accent.fg` in dark mode — brightened for contrast on `#0d1117`.
- **Accent subtle bg** (`#ddf4ff`): `accent.subtle`. Hover/selected backgrounds, info callouts.
- **Accent emphasis** (`#0969da`): `accent.emphasis`. Solid accent fills, focus outlines.

### Primary Action (Success/Commit Green)
- **GitHub Green** (`#1f883d`): `success.emphasis` / primary button background. The "Create", "Commit changes", "Merge pull request" action color.
- **Green hover** (`#1a7f37`): pressed/hover state for the primary green button.
- **Success fg** (`#1a7f37`): `success.fg`. Checks-passed text, additions count, positive status.
- **Success subtle bg** (`#dafbe1`): `success.subtle`. Added-line diff background, passing-check rows.

### Semantic
- **Danger Red** (`#cf222e`): `danger.fg` / `danger.emphasis`. Destructive actions, failed checks, deletions, error text.
- **Danger subtle bg** (`#ffebe9`): `danger.subtle`. Removed-line diff background, error callouts.
- **Attention Yellow** (`#9a6700`): `attention.fg`. Warnings, "needs review", stale states.
- **Attention emphasis** (`#bf8700`): solid warning fills, dirty-state dots.
- **Attention subtle bg** (`#fff8c5`): `attention.subtle`. Warning callout backgrounds, highlighted lines.
- **Done Purple** (`#8250df`): `done.fg`. Merged-PR state, completed-but-distinct status.
- **Done subtle bg** (`#fbefff`): `done.subtle`. Merged badge background.
- **Sponsors Pink** (`#bf3989`): `sponsors.fg`. GitHub Sponsors heart, sponsor-related UI.

### Foreground (Text) — Light
- **Fg Default** (`#1f2328`): `fgColor-default`. Primary body and heading text. A warm near-black.
- **Fg Muted** (`#59636e`): `fgColor-muted`. Secondary text, metadata, timestamps, descriptions.
- **Fg Subtle** (`#818b98`): captions, placeholder-adjacent labels, disabled hints.
- **Fg on Emphasis** (`#ffffff`): text on solid colored buttons/badges.

### Foreground (Text) — Dark
- **Fg Default (dark)** (`#e6edf3`): primary text on `#0d1117`. Soft off-white, never pure white.
- **Fg Muted (dark)** (`#9198a1`): secondary text in dark mode.

### Background & Surfaces
- **Bg Default (light)** (`#ffffff`): `bgColor-default`. Page canvas, card surface.
- **Bg Subtle / Inset (light)** (`#f6f8fa`): `bgColor-muted`. Code blocks, secondary panels, table headers, hover rows.
- **Bg Default (dark)** (`#0d1117`): the canonical GitHub dark canvas.
- **Bg Inset (dark)** (`#010409`): deepest dark surface — page background behind raised `#0d1117` panels.
- **Bg Subtle (dark)** (`#161b22`): raised cards, code blocks, hovered rows in dark mode.

### Borders
- **Border Default (light)** (`#d1d9e0`): `borderColor-default`. Card edges, table dividers, input borders, the structural workhorse.
- **Border Muted (light)** (`#d8dee4`): subtle internal dividers.
- **Border Default (dark)** (`#30363d`): dark-mode borders.
- **Neutral Muted** (`rgba(175,184,193,0.2)`): inline `code` background, subtle fills.

## 3. Typography Rules

### Font Family
- **UI / System**: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"` — GitHub uses the native system stack for all interface chrome (fast, familiar, zero web-font cost).
- **Monospace**: `ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace` — all code, SHAs, file paths, branch names, inline `code`.
- **Marketing display**: GitHub's marketing pages (homepage, Enterprise) use **Mona Sans** and **Hubot Sans**, GitHub's open-source variable typefaces, for hero headlines. Product UI does *not* use these — it stays on the system stack.

### Hierarchy (Product UI — system stack, px)

| Role | Size | Weight | Line Height | Notes |
|------|------|--------|-------------|-------|
| Display / Page Title | 32px | 600 | 1.25 | Repo name, profile name, marketing-lite headers |
| Heading 1 | 24px | 600 | 1.25 | Section titles, settings page headers |
| Heading 2 | 20px | 600 | 1.25 | Card headers, sub-sections (1px bottom border common) |
| Heading 3 | 16px | 600 | 1.25 | List group headers, dialog titles |
| Body / Default | 14px | 400 | 1.5 | The GitHub baseline — most UI text is 14px |
| Body Strong | 14px | 600 | 1.5 | Emphasized labels, file names, author names |
| Small | 12px | 400 | 1.4 | Metadata, timestamps, counts, badge text |
| Code Inline | 13px (0.85em) | 400 | 1.45 | Mono stack, `neutral.muted` bg, 6px radius pad |
| Code Block | 12px–13px | 400 | 1.45 | Mono stack, `#f6f8fa` bg, tabular |

### Marketing Display (Mona Sans)

| Role | Size | Weight | Notes |
|------|------|--------|-------|
| Hero | 48–80px | 700–900 | Mona Sans, tight tracking, homepage hero |
| Sub-hero | 24–36px | 500–600 | Mona Sans, supporting headline |

### Principles
- **14px is the body baseline.** GitHub's product UI is denser than consumer apps — 14px default, 12px metadata. This is a tool, not a brochure.
- **Monospace is structural, not stylistic.** Anything that must align column-wise — diffs, SHAs, paths, blame — is mono. Never style prose as mono for "techy" flavor.
- **Weight, not size, carries emphasis.** Most hierarchy uses 600 vs 400 at the same size rather than dramatic size jumps. Restraint keeps dense pages calm.
- **System fonts in product, Mona Sans in marketing.** Never mix: a Mona Sans headline inside the product app would feel off-brand.

## 4. Component Stylings

All values below are Primer light-theme defaults. Dark-theme equivalents swap to the `#0d1117` / `#30363d` token set noted in §2.

### Buttons

GitHub's `Button` has variants `default | primary | danger | invisible`, plus sizes `small | medium | large`. Default height is `medium` (32px). Radius is **6px** across all variants.

**Primary (Green)**
- Background: `#1f883d`
- Text: `#ffffff`
- Border: 1px solid `rgba(31,35,40,0.15)`
- Radius: 6px
- Padding: 0 16px (height 32px)
- Font: 14px / 600 / system
- Hover: bg `#1a7f37`
- Active/pressed: bg `#187733`
- Disabled: bg `#94d3a2`, text `#ffffff` 0.8 opacity
- Use: The one constructive primary action — "Create repository", "Commit changes", "Merge pull request"

**Default (Neutral)**
- Background: `#f6f8fa`
- Text: `#1f2328`
- Border: 1px solid `#d1d9e0` (`rgba(31,35,40,0.15)`)
- Radius: 6px
- Padding: 0 16px (height 32px)
- Font: 14px / 600 / system
- Hover: bg `#eef1f4`, border `#d1d9e0`
- Active: bg `#e6eaef`
- Use: The most common button — "Cancel", "Edit", "Settings", secondary actions

**Danger**
- Background: `#ffffff` (default state)
- Text: `#cf222e`
- Border: 1px solid `#d1d9e0`
- Radius: 6px
- Hover: bg `#cf222e`, text `#ffffff`, border `#cf222e`
- Use: Destructive — "Delete repository", "Remove member". Stays quiet until hovered, then commits to red.

**Invisible (Borderless)**
- Background: transparent
- Text: `#0969da` (or `#1f2328` for neutral)
- Border: none
- Radius: 6px
- Hover: bg `#f6f8fa`
- Use: Tertiary actions, icon buttons, "..." overflow triggers, in-row controls

Size scale (height · font · padding): `small` 28px · 12px · 0 12px; `medium` (default) 32px · 14px · 0 16px; `large` 40px · 14px · 0 20px. Counter buttons (button + count pill, e.g. Star · 1.2k) split the radius and share a 1px divider.

### Inputs

**Text Input (default)**
- Background: `#ffffff`
- Text: `#1f2328`
- Border: 1px solid `#d1d9e0`
- Radius: 6px
- Padding: 5px 12px (height ~32px)
- Font: 14px / 400 / system
- Placeholder: `#818b98`
- Focus: border `#0969da` + box-shadow `0 0 0 3px rgba(9,105,218,0.3)` (the GitHub focus ring)
- Use: Standard form field

**Text Input (error)**
- Border: 1px solid `#cf222e`
- Focus ring: `0 0 0 3px rgba(207,34,46,0.3)`
- Help text below in `#cf222e` 12px
- Use: Validation failure

**Search Input**
- Background: `#f6f8fa` (subtle, inset feel)
- Border: 1px solid `#d1d9e0`
- Radius: 6px
- Leading magnifier icon `#59636e`
- Use: The top-bar global search, repo file finder

### Cards (Box)

Primer calls these **Box**. They are border-first, shadow-rarely.

**Standard Box**
- Background: `#ffffff`
- Border: 1px solid `#d1d9e0`
- Radius: 6px
- Header: optional, `#f6f8fa` bg, 1px bottom border, 16px padding
- Body padding: 16px
- Shadow: none (border does the structural work)
- Use: Repo list rows, settings panels, the canonical content container

**Box (rounded large)**
- Radius: 12px
- Use: Profile cards, marketing-adjacent surfaces

### Labels & Badges

**Label (Issue/PR tag)**
- Background: tinted from the label's own color at low alpha (e.g. `#ddf4ff` for blue)
- Text: the saturated hue (`#0969da`)
- Border: 1px solid same hue at low alpha
- Radius: **2em** (pill)
- Padding: 0 7px (height ~20px)
- Font: 12px / 500 / system
- Use: Issue labels ("bug", "enhancement"), arbitrary colored tags

**Counter / Badge**
- Background: `rgba(175,184,193,0.2)` (neutral muted)
- Text: `#1f2328`
- Radius: 2em (pill)
- Padding: 0 6px
- Font: 12px / 500 / system, tabular
- Use: Notification counts, star counts, tab counters

**State Badge (Open / Merged / Closed)**
- Open (issue): bg `#1f883d`, text `#ffffff`
- Merged (PR): bg `#8250df`, text `#ffffff`
- Closed (not merged): bg `#cf222e`, text `#ffffff`
- Draft: bg `#59636e`, text `#ffffff`
- Radius: 2em (pill), padding 4px 12px, leading state icon
- Use: The large status pill at the top of an issue/PR

### Tabs (Underline Nav)

**Underline Tab**
- Container: 1px bottom border `#d1d9e0`
- Text (inactive): `#1f2328`, hover bg `#f6f8fa`
- Active: text `#1f2328` 600 weight + 2px bottom border `#fd8c73` (the GitHub orange tab indicator)
- Counter: neutral muted pill beside label
- Font: 14px / 400→600 / system
- Use: Repo tabs (Code · Issues · Pull requests · Actions), profile tabs

### Toasts / Flash

**Flash (banner)**
- Default (info): bg `#ddf4ff`, border 1px `rgba(9,105,218,0.4)`, text `#1f2328`
- Success: bg `#dafbe1`, border `rgba(31,136,61,0.4)`
- Warning: bg `#fff8c5`, border `rgba(154,103,0,0.4)`
- Danger: bg `#ffebe9`, border `rgba(207,34,46,0.4)`
- Radius: 6px, padding 16px, leading status icon
- Use: Page-level confirmations ("Repository created"), inline warnings

### Dialogs / Modals

**Dialog**
- Background: `#ffffff`
- Border: 1px solid `#d1d9e0`
- Radius: 12px
- Header: 16px padding, 1px bottom border, title 16px / 600
- Shadow: `0 8px 24px rgba(31,35,40,0.2)`
- Overlay: `rgba(31,35,40,0.5)` scrim
- Use: Confirmation prompts, create-from-template, delete confirmation

### Toggles

**Toggle Switch**
- On: bg `#1f883d` (success green — consistent with primary action semantics) or `#0969da` in some contexts
- Off: bg `#818b98`
- Thumb: `#ffffff` circle with subtle shadow
- Radius: 2em (pill)
- Use: Settings booleans (feature on/off)

---

**Verified:** 2026-06-06
**Tier 1 sources:** primer.style (Primer Design System — base scales, functional tokens, Button/TextInput/Label specs), github.com (live product UI — light/dark theming, green-primary buttons, blue links). · https://github.com (live production site)
**Surface split:** §4 documents the **Primer product UI** (github.com app). Marketing pages (homepage, Enterprise) use a parallel system with **Mona Sans / Hubot Sans** display type and larger hero scales — noted in §3 but not the primary spec target.

## 5. Layout Principles

### Spacing System
- Base unit: 8px (Primer spacing scale: 4, 8, 16, 24, 32, 40, 48...)
- Primer tokens: `--base-size-4` (4px) through `--base-size-48`; common UI gaps are 8px and 16px
- Content padding: 16px inside Box components, 24px page gutters on desktop
- Dense data rows (file lists, commit lists): 8px vertical, 16px horizontal

### Grid & Container
- Max content width: `1280px` for app pages (`container-xl`), with `1012px` (`container-lg`) for reading-optimized pages like settings and docs
- Three container sizes: `container-md` (768px), `container-lg` (1012px), `container-xl` (1280px)
- Repo pages: 12-column grid with a primary content column and a metadata sidebar (About, topics, releases)
- Centered, gutter-padded; never full-bleed except marketing heroes

### Whitespace Philosophy
- **Density with air.** GitHub is information-dense — file trees, diffs, long issue threads — but each row gets consistent 8px breathing room. Dense ≠ cramped.
- **Borders over gaps.** Where other systems separate with whitespace, GitHub separates with 1px `#d1d9e0` rules. This keeps tables and lists scannable at high density.
- **The sidebar pattern.** Detail pages (issue, PR, repo) use a wide main column + narrow right rail. The rail holds metadata; the main column holds the conversation/content.

### Border Radius Scale
- Small (2px): inline label edges, tight badges
- Default (6px): buttons, inputs, boxes, the GitHub workhorse radius
- Medium (12px): dialogs, profile cards, rounded boxes
- Pill (2em): labels, counters, state badges, toggles
- Circle (50%): avatars (always circular), icon-only round buttons

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (0) | 1px border `#d1d9e0`, no shadow | Boxes, cards, the default surface — **structure via border, not shadow** |
| Small (1) | `0 1px 0 rgba(31,35,40,0.04)` | Buttons resting state, subtle row lift |
| Medium (2) | `0 3px 6px rgba(140,149,159,0.15)` | Dropdowns, popovers, hovercards |
| Large (3) | `0 8px 24px rgba(31,35,40,0.2)` | Dialogs, modals, command palette |
| XLarge (4) | `0 12px 28px rgba(31,35,40,0.3)` | Full-screen overlays, large floating panels |

**Shadow Philosophy**: GitHub's elevation is **border-first**. The flat surface — boxes, tables, panels — carries no shadow at all; a single 1px `#d1d9e0` border defines its edge. Shadows are reserved exclusively for genuinely floating, transient layers (dropdowns, popovers, dialogs). This restraint matches the engineering tone: depth implies "this is temporary / overlaid", flatness implies "this is the page". In dark mode, borders shift to `#30363d` and shadows deepen but stay neutral-cool, never colored.

### Focus Ring
- The signature GitHub focus indicator: `0 0 0 3px rgba(9,105,218,0.3)` — a 3px blue glow, never an OS outline. Danger contexts use `rgba(207,34,46,0.3)`. Accessibility-critical: visible on every interactive element via keyboard.

## 7. Do's and Don'ts

### Do
- Use **green (`#1f883d`) for the primary constructive action** — this is GitHub's signature; commit/create/merge are green, never blue
- Use **blue (`#0969da`) for links and focus**, not for primary buttons
- Specify every component in **both light and dark** — dark mode is first-class, not optional
- Use **1px borders (`#d1d9e0`)** to structure content; reserve shadows for floating layers only
- Use the **monospace stack** for all code, SHAs, file paths, and branch names
- Keep **6px radius** on buttons, inputs, and boxes; pills (2em) for labels and badges
- Use **14px as the body baseline** — GitHub UI is denser than consumer products
- Apply the **3px blue focus ring** (`rgba(9,105,218,0.3)`) on all keyboard-focusable elements
- Use **diff semantics**: green for additions/success, red for deletions/danger, purple for merged/done

### Don't
- Don't make the primary button blue — blue is for links; **green is the primary action**
- Don't use shadows on resting cards — a 1px border is the GitHub surface treatment
- Don't use Mona Sans / Hubot Sans in product UI — those are marketing display fonts only
- Don't style prose as monospace for "techy" flavor — mono is structural (alignment), not decorative
- Don't use pure white text on dark mode — use `#e6edf3`, the softened off-white
- Don't use pure black text on light mode — use `#1f2328`, the warm near-black
- Don't exceed 6px radius on buttons/inputs — GitHub is engineering-precise, not friendly-rounded
- Don't forget the dark theme — shipping light-only is incomplete by GitHub's standard

## 8. Responsive Behavior

### Breakpoints (Primer)
| Name | Width | Key Changes |
|------|-------|-------------|
| Small (`sm`) | ≥544px | Single-column, stacked metadata |
| Medium (`md`) | ≥768px | Two-column begins, sidebar appears |
| Large (`lg`) | ≥1012px | Full repo layout, right rail visible |
| XLarge (`xl`) | ≥1280px | Max content width, wide gutters |

### Touch & Targets
- Minimum interactive target: 28px (small button); default 32px; comfortable 40px
- List rows: ~40px+ tappable height on touch
- Icon buttons: 32×32px hit area minimum

### Collapsing Strategy
- Right metadata rail (About, topics, contributors) drops **below** the main column under `md`
- Repo tab bar becomes horizontally scrollable on narrow screens
- File tree collapses to a toggle-drawer on mobile
- Two-pane diff (side-by-side) collapses to **unified diff** on narrow viewports
- Top nav collapses to a hamburger; global search becomes an icon-triggered overlay

### Image & Avatar Behavior
- Avatars: always circular, sized 16/20/24/32/48/64px by context
- Repo social-preview images: 16:9, full-width within their container
- Markdown-rendered images: max-width 100%, never overflow the prose column

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary action (Create/Commit/Merge): **Green `#1f883d`**
- Link / focus / selected: **Blue `#0969da`**
- Background (light): White `#ffffff`
- Background inset (light): `#f6f8fa`
- Background (dark): `#0d1117`
- Heading/body text (light): `#1f2328`
- Muted text (light): `#59636e`
- Text (dark): `#e6edf3`
- Border (light): `#d1d9e0`
- Border (dark): `#30363d`
- Success/additions: `#1a7f37` / bg `#dafbe1`
- Danger/deletions: `#cf222e` / bg `#ffebe9`
- Warning: `#9a6700` / bg `#fff8c5`
- Merged/done: `#8250df` / bg `#fbefff`

### Example Component Prompts
- "Create a primary button: green `#1f883d` bg, white text 14px weight 600, 6px radius, 32px height, 0 16px padding. Hover `#1a7f37`. This is the commit/create action — never blue."
- "Build a repo card (Box): white bg, 1px solid `#d1d9e0` border, 6px radius, NO shadow. 16px padding. Repo name as `#0969da` link 16px weight 600. Description `#59636e` 14px. Star counter as neutral pill `rgba(175,184,193,0.2)` bg."
- "Design a text input: white bg, 1px `#d1d9e0` border, 6px radius, 5px 12px padding, 14px text. Focus: border `#0969da` + box-shadow `0 0 0 3px rgba(9,105,218,0.3)`."
- "Create a PR state badge: pill (2em radius), `#8250df` bg, white text 12px weight 500, leading merge icon, 4px 12px padding. Label 'Merged'."
- "Build an underline tab bar: 1px bottom border `#d1d9e0`. Active tab: `#1f2328` 600 weight + 2px `#fd8c73` bottom border. Inactive: `#1f2328` 400, hover bg `#f6f8fa`. Each tab has a neutral-pill counter."
- "Render a diff line: added line bg `#dafbe1`, removed line bg `#ffebe9`, monospace 12px, leading +/− gutter. Line numbers `#59636e`."

### Iteration Guide
1. **Green is primary, blue is link** — the single most important GitHub rule
2. Specify both themes: light (`#ffffff`/`#1f2328`) and dark (`#0d1117`/`#e6edf3`)
3. Structure with 1px `#d1d9e0` borders; shadows only for floating layers
4. 6px radius on buttons/inputs/boxes; 2em pill on labels/badges; circular avatars
5. 14px body baseline; monospace for all code/SHA/path text
6. Always include the 3px blue focus ring on interactive elements
7. Lean on diff semantics: green=add/success, red=delete/danger, purple=merged

## 10. Voice & Tone

GitHub speaks like a senior engineer writing good documentation: precise, direct, warm but never cute. It respects the reader's time and competence. Sentences are declarative. Errors are specific and actionable. Marketing voice (homepage) is more aspirational ("The future of building happens together"), but product UI voice is plain, instructional, and free of hype.

| Context | Tone |
|---|---|
| Buttons | Imperative verb + object: "Create repository", "Commit changes", "Merge pull request". Never "Submit" or "OK". |
| Success flash | Plain past-tense confirmation: "Repository created." No exclamation marks in product UI. |
| Error messages | Specific + actionable: "Repository name already exists. Choose a different name." Never "An error occurred." |
| Empty states | Explain what goes here + offer the action: "There aren't any issues yet. Create the first one." |
| Onboarding / docs | Second person, step-numbered, code-sample-heavy. Show, don't just tell. |
| Marketing (homepage) | Aspirational, collective: "Change is constant. GitHub keeps you ahead." Mona Sans, big and confident. |
| Empty repo | The famous quick-setup code block — terminal commands ready to copy, zero fluff. |

**Forbidden patterns.** Vague errors ("Something went wrong" without a next step), exclamation-heavy hype in product UI, anthropomorphizing the system ("I couldn't find..."), "Oops". Octocat personality (Mona the mascot, playful 404 pages) is licensed only in error/easter-egg surfaces, never in core workflows.

## 11. Brand Narrative

GitHub was founded in **2008** by Tom Preston-Werner, Chris Wanstrath, P. J. Hyett, and Scott Chacon, built around **Git**, Linus Torvalds' 2005 distributed version-control system. The product's entire visual language descends from Git's core data model: a commit either *adds* lines (green) or *removes* them (red), branches *diverge* and *merge*, and the merge is a constructive, celebrated act. GitHub turned those mechanics into a social platform — the pull request, the issue, the star — and the design encodes the same semantics everywhere: **green is creation, red is destruction, purple is the completed merge.**

GitHub was acquired by **Microsoft in 2018** for $7.5B and now hosts over **100 million developers** and **hundreds of millions of repositories**, making it the de facto home of open-source software. The **Octocat** — the cat-octopus mascot designed by Simon Oxley — is the brand's playful soul, but it is deliberately rationed: the product surface is sober and tool-like, and the mascot's whimsy is reserved for 404 pages, swag, and the margins. This split — serious tool, playful soul — is intentional.

The design system, **Primer**, is open-source and itself a public artifact: GitHub designs in the open, the way it builds in the open. The dual-theme architecture reflects a real user truth — a huge fraction of developers work in dark mode, often for long sessions, and GitHub treats their canvas (`#0d1117`) with the same rigor as the white one. The shift in 2022–2024 from older greens and blues to the current Primer functional palette (`#1f883d` green, `#0969da` blue, `#0d1117` dark) was a system-wide token migration, not a reskin — evidence of a brand that treats its color as infrastructure.

What GitHub refuses: consumer-app playfulness in core workflows, decorative gradients and illustration in dense data views, single-theme thinking, and color used as ornament. Every color carries version-control meaning. The aesthetic is the meaning.

## 12. Principles

1. **Green creates, red destroys, purple completes.** Color is not decoration — it inherits Git's diff semantics. A primary action is green because committing is constructive. A delete is red. A merged PR is purple. Never assign these colors arbitrarily.
2. **Blue is the link, green is the action.** The most-violated GitHub rule by outsiders. Interactive *text* is blue; the primary *button* is green. Keep them distinct.
3. **Dark mode is not a setting, it's a theme.** Every component is fully specified on `#0d1117`. Shipping light-only is shipping half the product.
4. **Structure with borders, float with shadows.** A 1px `#d1d9e0` border defines a resting surface. A shadow means "this is overlaid and temporary." Don't blur the two.
5. **Density is a feature.** Developers want information per pixel — file trees, diffs, long threads. 14px baseline, consistent 8px rhythm. Dense, never cramped.
6. **Monospace is for alignment, not flavor.** Use mono only where column-alignment matters (code, SHAs, paths). Never to make prose look "technical."
7. **Restraint is the brand.** No gradients in data views, no shadows on cards, the mascot rationed to the margins. The tool gets out of the way of the work.
8. **Design in the open.** Primer is public; tokens are documented; themes are auditable. The design system is itself an open-source artifact.

## 13. Personas

*Personas below are fictional archetypes informed by publicly described developer-platform user segments, not individual people.*

**Maya, 31, Berlin.** Senior backend engineer at a Series-B startup. Lives in GitHub eight hours a day, exclusively in dark mode. Reviews 10–15 pull requests daily and judges a diff's readability the way a chef judges knife balance. Cares deeply that the side-by-side diff aligns to the column and that the green/red of additions/deletions is exactly right. Uses keyboard shortcuts for everything; a missing focus ring is a bug to her. Has the Octocat sticker on her laptop but would be annoyed by mascot whimsy inside a code review.

**Daniel, 24, Lagos.** Self-taught developer, two years into open source. GitHub is both his portfolio and his classroom. Reads issues and discussions to learn how mature projects work. The green "Create" buttons and the empty-repo quick-setup block were how he learned Git — copy, paste, commit. Stars repos as bookmarks. Switches between light mode (daytime, bright office) and dark (late nights). Notices and trusts the polish; a janky open-source project's README signals risk to him.

**Priya, 42, Seattle.** Engineering manager at an enterprise on GitHub Enterprise. Rarely writes code now; lives in pull-request dashboards, Actions runs, and org settings. Cares about status legibility at a glance — green checks passing, red checks failing, the merged-purple badge. Scans long lists fast and relies on the 1px-border density to parse them. Reviews access controls in Settings, where the calm, documentation-grade UI tone reassures her that nothing is hidden.

## 14. States

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
| **Focus (keyboard)** | `0 0 0 3px rgba(9,105,218,0.3)` blue ring on every interactive element. Never suppressed. |
| **Hover (row)** | List rows lift to `#f6f8fa` (light) / `#161b22` (dark) background. Links underline. |

## 15. Motion & Easing

GitHub motion is **minimal and functional** — this is a productivity tool, and animation that delays a developer is a tax. Transitions are short, easing is gentle, and large theatrical motions are absent from core workflows. The `prefers-reduced-motion` query is fully honored.

**Durations:**

| Token | Value | Use |
|---|---|---|
| `instant` | 0ms | State toggles where animation would lag input |
| `fast` | 80–120ms | Hover background, focus ring appearance, button press |
| `standard` | 160–200ms | Dropdown/popover open, details expand, tab content swap |
| `slow` | 300ms | Dialog/modal entrance, larger panel reveals |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-out` | `cubic-bezier(0.33, 1, 0.68, 1)` | Things appearing — dropdowns, popovers, dialogs |
| `ease-in-out` | `cubic-bezier(0.65, 0, 0.35, 1)` | Two-way transitions — expand/collapse, accordions |
| `ease-in` | `cubic-bezier(0.32, 0, 0.67, 0)` | Things leaving — dismissals |

**Signature motions.**

1. **Dropdown / popover.** Open with a quick `fast`–`standard` fade + 4px upward slide on `ease-out`; close instantly. Hovercards (the repo/user preview card) fade in on a short hover delay (~300ms intent delay) so they don't flicker during cursor travel.
2. **Details expand.** Issue/PR comment collapse, file tree, and `<details>` blocks expand with a `standard` height transition on `ease-in-out`. No bounce — engineering-precise.
3. **Copy feedback.** Copy-to-clipboard buttons (on code blocks, SHAs) flash a checkmark for ~1.5s then revert. The one tiny moment of delight, and it's functional confirmation.
4. **Merge celebration.** Merging a PR is the brand's emotional peak — a brief confetti/emoji animation has historically marked it. This is the single licensed moment of whimsy in the core workflow; everywhere else, motion stays utilitarian.
5. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all transitions collapse to opacity-only or instant. The product stays fully usable; just static.

<!--
OmD v0.1 Sources — GitHub (Primer)

Token-level claims (§1–9) are grounded in the public Primer Design System
(primer.style) functional + base color scales and component specs:
- GitHub Blue accent.fg #0969da (light) / #4493f8 (dark)
- success.emphasis / primary green #1f883d, danger #cf222e, attention #9a6700,
  done/merged purple #8250df, sponsors pink #bf3989
- bgColor-default #ffffff / #0d1117 (dark), inset #f6f8fa / #161b22 / #010409
- fgColor-default #1f2328 / #e6edf3 (dark), muted #59636e / #9198a1
- borderColor-default #d1d9e0 / #30363d
- 6px default radius, 3px rgba(9,105,218,0.3) focus ring
- system-font UI stack + ui-monospace code stack; Mona Sans / Hubot Sans marketing

Brand narrative (§11): GitHub founded 2008 around Git (2005, Torvalds),
acquired by Microsoft 2018 ($7.5B), 100M+ developers. Octocat mascot by
Simon Oxley. Primer is open-source. These are widely documented public facts.

Personas (§13) are fictional archetypes informed by publicly described
developer-platform user segments, not specific individuals.

Interpretive claims (e.g., "green is primary because committing is
constructive — a diff semantics inheritance") are editorial readings of the
design system, not official GitHub statements.

Live homepage voice strings ("Change is constant. GitHub keeps you ahead",
"The future of building happens together") observed via WebFetch 2026-06-06.
-->
