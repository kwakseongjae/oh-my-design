# Asana Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

This contract covers Asana as named on `https://asana.com`. The 2026-06-22 live inspect names four first-party surfaces: the homepage `https://asana.com/`, pricing `https://asana.com/pricing`, brand CSS `https://asana.com/brand`, and login `https://app.asana.com/-/login`. Treating those four URLs as separate evidence domains — marketing chrome, pricing cards, brand CSS hex, and login input — is a derived editorial implementation inference from the verified surfaces; it is not Asana-authored or a separately published UI specification.

Source token note: primary = brand coral (`#f06a6a`) from CSS on asana.com/brand; live homepage hero CTA uses `#fd3ffd` magenta-pink accent; nav CTA uses high-contrast `#0d0d0d`; signature TWK Lausanne confirmed live; multi-color dots palette: coral, violet, sky, sage. Catalog `primary_color` is `#f06a6a`, the same hex as YAML `primary`. Treating coral as brand-page CSS primary, magenta-pink as a 2026-era homepage hero fill rather than that primary, and `#0d0d0d` as the nav/dark-CTA interactive fill rather than coral or magenta, is a derived editorial implementation inference from the verified surfaces; it is not Asana-authored or a separately published UI specification.

Source footer: Conflicts unresolved: none — Tier 1 live confirms TWK Lausanne, 100px pill geometry, high-contrast monochrome; Refero adds Ghost display font and coral palette detail consistent with brand CSS. Hero CTA magenta-pink (`#fd3ffd`) is 2026-era marketing; coral (`#f06a6a`) is the permanent brand primary per brand page CSS. Treating that source-stated era split as a reason not to merge the two hexes is a derived editorial implementation inference from the verified surfaces; it is not Asana-authored or a separately published UI specification.

The following visual-character readings — inversion, detonation, founding-marque, Swiss-restraint, whisper-authority, luxurious-and-utilitarian, pill-as-era-constant, flat-fast-confident, and the compressed high-contrast / near-monochromatic / editorial-system / bold-black-pills / single-magenta-hero / signature-coral-still-in-brand-CSS characterizations — are a derived editorial implementation inference from the verified surfaces; they are not Asana-authored or a separately published UI specification. The source presents the 2026 homepage as a high-contrast, near-monochromatic editorial system on a pure white (`#ffffff`) canvas with near-black ink (`#0d0d0d`) and bold black pills, with a single magenta-pink hero CTA (`#fd3ffd`) and signature coral (`#f06a6a`) still in brand CSS and product UI. Live-inspect type (Tier 1, asana.com 2026-06-22): **TWK Lausanne** (Weltkern), display weight 300 at 102px. Refero (Tier 2) names **Ghost** at 72px+ with tracking `-0.007em`. Observed geometry: 100px radius on harvested buttons, nav CTA, and badges as 9999px. Observed elevation: `#e7e7e7` hairlines and card borders.

Treating the following public-history facts as narrative rather than interface tokens is a derived editorial implementation inference from the verified surfaces; it is not Asana-authored or a separately published UI specification. Source §11 records as publicly documented facts: founded in **2008** by **Dustin Moskovitz** and **Justin Rosenstein**, originally as an internal Facebook work tool — a coordination problem so acute at Facebook’s scale that two senior engineers left to solve it full-time; public launch in **2011**; NYSE direct listing in **September 2020**. The source records the founding premise that human coordination is the most underinvested leverage point in organizations, and the company mission as “to help humanity thrive by enabling the world's teams to work together effortlessly.” The live homepage H1 (2026-06-22): “The OS for human-agent teams.” Treating the founding-cause (Facebook-scale coordination → two senior engineers leaving full-time), the premise-to-clarity-and-public-writing relation (underinvested-leverage premise and mission idealism → product insistence on clarity over complexity and Moskovitz’s public writing on effective altruism and workplace wellbeing), and the logo-evolution (three-dot mark from three interconnected circles to a stylized triangular arrangement, remaining teammates connected in a shared goal) as narrative rather than interface tokens, together with the source’s readings of a category-expansion from work-management tool to coordination layer for humans and AI, and of coral and the multi-color dots as connective tissue between eras, is a derived editorial implementation inference from the verified surfaces; it is not Asana-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

- Start from the public homepage (“Get started”).
- Compare Personal, Starter, Advanced, and Enterprise plans on `https://asana.com/pricing`.
- Sign in on `https://app.asana.com/-/login`.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. Source §13 names fictional archetypes informed by publicly observable Asana user segments, not individual people. Promoting no individual personas, restricting Audience so those fictional archetypes are not Audience and are not primary tasks, and tying observable work only to the three primary tasks, is a derived editorial implementation inference from the verified surfaces; it is not Asana-authored or a separately published UI specification. Independently verified user outcomes are the three primary tasks above. The source’s persona-derived segment labels are not reused as Audience values.

### Distinctive traits

- Brand coral `#f06a6a` as catalog `primary_color` and YAML `primary` from asana.com/brand CSS; not the harvested homepage hero CTA fill
- Homepage hero accent `#fd3ffd` (2026-era marketing); nav and dark pricing CTAs `#0d0d0d`
- Heading `#0d0e10` unmerged from ink `#0d0d0d`; login input text `#000000` unmerged from both
- Canvas `#ffffff`; surfaces `#f3f3f3` / `#fafafa`; hairline `#e7e7e7`; body `#646f79`; muted `#9ca6af`
- TWK Lausanne live on asana.com; Ghost named for 72px+ display; fallback `Helvetica Neue, Helvetica, sans-serif` is declared-only
- Pill buttons at 100px radius; badges at 9999px; feature cards at 16px; YAML `rounded.card` 20; login input 6px (unmerged from layout Micro 4px)
- Multi-color dots: coral, violet `#222875`, sky `#cbefff`, sage `#466451`; toggle-on fill `#36a651` unmerged from sage/success
- Flat marketing elevation via hairlines; YAML card shadow `0px 1px 3px rgba(0,0,0,0.08)` and elevated `0px 4px 16px rgba(0,0,0,0.10)` remain named levels

Treating coral as identity-and-brand-CSS rather than the live hero fill, treating `#fd3ffd` as a rare homepage accent rather than primary, treating `#0d0d0d` / `#0d0e10` / `#000000` as unmerged inks, treating 100px / 9999px / 16px / 20 / 6px / 4px as unmerged radii, treating `#36a651` as unmerged from `#466451`, treating marketing elevation as flat via hairlines with YAML card/elevated shadows remaining named levels, and treating the Helvetica Neue fallback as declared-only rather than a live product face, is a derived editorial implementation inference from the verified surfaces; it is not Asana-authored or a separately published UI specification.

### Principles

These five items, including each *UI implication*, are a derived editorial implementation inference from the verified surfaces; they are not Asana-authored or a separately published UI specification.

1. **Clarity over complexity.** Asana's founding insight was that organizational complexity isn't inevitable — it's a coordination failure. *UI implication:* every surface should reduce cognitive load, never add it. Progressive disclosure over feature dumps.
2. **Humans and AI as teammates.** The 2026 positioning frames AI agents as active collaborators, not automation plugins. *UI implication:* AI features are labeled as "AI Teammates," not "AI Tools" — design for handoff, not hand-off.
3. **One source of truth.** Asana's core value proposition is that work should live in one place, not scattered across emails and messages. *UI implication:* UI communicates completeness — every task, project, and goal is visible and connected.
4. **Work should be energizing, not exhausting.** The founders' philosophy holds that good process design liberates human capacity. *UI implication:* the visual system is calm, uncluttered — the app should feel like clarity, not burden.
5. **Teams, not individuals.** Asana is built for groups, not heroes. *UI implication:* collaboration surfaces (comments, assignees, followers, team views) are first-class UI, not afterthoughts.

Capture-bound application: treating this list as a capture-bound application of source §7 Do’s and harvested geometry, including the YAML `display-hero` string kept uncollapsed, is a derived editorial implementation inference from the verified surfaces; it is not Asana-authored or a separately published UI specification.

- Use TWK Lausanne at weight 300 for display headlines.
- Apply 100px border-radius to the harvested interactive pills (hero, nav, pricing, toggle). Badge radius stays 9999px; feature-card radius stays 16px; YAML `rounded.card` 20 stays a separate named value.
- Use `#0d0d0d` as the harvested primary CTA fill in nav and dark pricing contexts.
- Reserve `#f06a6a` coral for brand-accent, illustration, and product-category moments named in source; do not substitute it for the `#fd3ffd` hero fill or the `#0d0d0d` CTA fill.
- Keep the Hero Accent (`#fd3ffd`) confined to one moment per page in this reconstruction.
- Separate sections with background tint shifts (`#ffffff` / `#f3f3f3` / `#0d0d0d`) and `#e7e7e7` hairlines.
- Use weight 500 for UI/navigation text; 300–400 for editorial and body in the captured type table.
- Keep Ghost for the named 72px+ display role; keep TWK Lausanne for the named body/UI roles. YAML `display-hero` use still says “Ghost or TWK Lausanne”; that string is not collapsed into the body-table family.

### Avoid

The following items, including lightness-as-authority, pill-non-negotiable, magenta-singularity, flat-first, one-accent-per-zone, geometric-grotesque-non-negotiable, cool-warm-cool-cool palette, tight-display-tracking, login-6px-unmerged-from-Micro-4px, and YAML-card-and-elevated-shadows-remain-named-levels readings, are a derived editorial implementation inference from the verified surfaces; they are not Asana-authored or a separately published UI specification.

- Do not use weight 600–700 in TWK Lausanne for headlines — weight 300 is the recorded display signature.
- Do not apply sharp corners (0px–4px radius) to the harvested buttons — those buttons are 100px pills. Login input stays 6px; layout Micro 4px is not that input’s radius.
- Do not spread `#fd3ffd` magenta across multiple elements.
- Do not use heavy multi-layer shadows as the marketing default — YAML card and elevated shadows remain named levels, not a reason to flood the page.
- Do not mix multiple saturated accent colors on the same surface — one accent per zone in this reconstruction.
- Do not substitute the Helvetica Neue fallback for TWK Lausanne in the named brand contexts.
- Do not use warm yellows or oranges as accent colors — the recorded dots palette is coral / violet / sky / sage.
- Do not apply positive letter-spacing at display sizes — recorded display tracking is `-0.007em` / YAML `-0.007`.
- Do not use forbidden voice like “unlock your potential”, “synergize cross-functional workflows”, aggressive countdown urgency, emoji in marketing copy, or sentences that start with “We believe...”.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

YAML roles unless marked as body-only. Treating same hex values in different roles as unmerged, treating body-only fields as not YAML color tokens, treating coral as the signature brand hue in this reconstruction, treating coral-blush / deep-coral as the §14 error-banner pairing, treating `#27455c` as a dark-feature-band that may use `#0d0d0d` or `#27455c`, and treating “near-black with warmth” as the source characterization that keeps `#0d0d0d` unmerged from `#000000`, is a derived editorial implementation inference from the verified surfaces; it is not Asana-authored or a separately published UI specification.

- **Asana Coral / Primary** (`#f06a6a`): YAML `primary`; catalog `primary_color`; brand CSS on asana.com/brand. Signature brand hue in this reconstruction.
- **Magenta-Pink / Brand-pink** (`#fd3ffd`): YAML `brand-pink`. 2026 homepage hero CTA fill. Not coral.
- **Ink Black** (`#0d0d0d`): YAML `ink`. Nav CTA and dark pricing buttons. Source says near-black with warmth, not pure `#000000`.
- **Dark Heading / Brand-dark** (`#0d0e10`): YAML `heading` and `brand-dark`. H1 and display text. Not ink `#0d0d0d`.
- **Body Text** (`#646f79`): YAML `body`. Secondary body copy, captions, metadata.
- **Muted** (`#9ca6af`): YAML `muted`. Tertiary text, placeholders, and disabled labels.
- **Canvas / Pure White** (`#ffffff`): YAML `canvas`. Page canvas and card backgrounds. YAML `on-primary` and `on-dark` share this hex; those roles are not merged into one ink for every string.
- **Surface Grey** (`#f3f3f3`): YAML `surface`. Tinted secondary cards and contained sections.
- **Surface Alt** (`#fafafa`): YAML `surface-alt`. Secondary CTA fill and subtle distinctions.
- **Hairline** (`#e7e7e7`): YAML `hairline`. Card borders and dividers.
- **Border Muted** (`#6e6e6e`): YAML `border-muted`. Outline for secondary ghost buttons. Not hairline. Not login input border `#757677`.
- **Violet** (`#222875`): YAML `violet`. Dots palette; illustrations and product UI callouts.
- **Sky Blue** (`#cbefff`): YAML `sky`. Dots palette; product feature sections and sky badge fill.
- **Coral Blush** (`#ffeaec`): YAML `coral-blush`. Badge/tag background and §14 error-banner background.
- **Deep Coral** (`#690031`): YAML `deep-coral`. Text on coral-blush badges and §14 error-banner text.
- **Sage / Success** (`#466451`): YAML `sage` and `success`. Green-derived success color in the dots palette. Not toggle-on `#36a651`.
- **Toggle-on green** (`#36a651`): harvested `toggle-on` fill and §14 task-completion check. Body-only as a component/state field; not Sage / Success.
- **Login input text** (`#000000`): harvested `input-default` foreground. Not ink. Not heading.
- **Hero-accent text** (`#0b0505`): harvested `button-hero-accent` foreground. Not ink.
- **Login input border** (`#757677`): harvested `input-default` border. Not Border Muted.
- **Dark feature band** (`#27455c`): body layout only. Full-width dark feature sections may use `#0d0d0d` or `#27455c`. Not ink. Not heading.

### Spacing

YAML scale: xs 4, sm 8, md 12, base 16, lg 24, xl 48, xxl 80, section 120. Body layout also names base unit 4px and scale 4, 8, 12, 16, 24, 28, 32, 40, 48, 56, 64, 76, 80, 100, 104, 120px. Treating both records as kept, treating body extras 28, 32, 40, 56, 64, 76, 100, 104 as not YAML keys, and treating card padding 24px and section gaps 80–120px as recorded packet spacing rather than a universal spacing token, is a derived editorial implementation inference from the verified surfaces; it is not Asana-authored or a separately published UI specification. Card padding: 24px. Section gaps: 80–120px between major horizontal bands.

### Shape

YAML `rounded`: sm 4, md 8, lg 16, card 20, full 9999.

The following Micro / Standard / Comfortable / Modal / Pill / Full role labels, the reading that harvested geometry is not collapsed into that named scale, and the local-geometry reading that 100px pill corners, 16px feature-card corners, 6px login-input corners, YAML `rounded.card` 20, and layout Micro 4px are local named values rather than one universal radius, are a derived editorial implementation inference from the verified surfaces; they are not Asana-authored or a separately published UI specification.

Body radius names: Micro (4px) inputs and small interactive elements; Standard (8px) tinted card containers; Comfortable (16px) feature and pricing cards; Modal (20px) dialog and modal surfaces; Pill (100px) all buttons, nav items, and form pills; Full (9999px) badge and tag elements.

Harvested geometry is not collapsed into that named scale:

- Hero / nav / pricing / toggle pills: 100px
- Badges: 9999px
- Feature / pricing card (`card-surface`): 16px
- Tinted card (`card-tinted`): 8px
- Login input: 6px — not layout Micro 4px, not YAML `sm` 4
- YAML `rounded.card` 20 is not the harvested 16px feature card

100px pill corners, 16px feature-card corners, 6px login-input corners, YAML `rounded.card` 20, and layout Micro 4px are local named values, not one universal radius.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | Page background, nav, inline text |
| Card (Level 1) | `1px solid #e7e7e7` hairline | Standard white feature cards |
| Subtle (Level 2) | `0px 1px 3px rgba(0,0,0,0.08)` | Hover lift on cards. YAML `shadow.card` |
| Elevated (Level 3) | `0px 4px 16px rgba(0,0,0,0.10)` | Modals, popovers, dropdown panels. YAML `shadow.elevated` |

YAML `shadow.none`: `none`. Harvested `card-surface` use: no shadow, hairline border. Treating Level 1 hairline as not YAML `shadow.card`, and treating the table Use assignments (page background, nav, inline text; standard white feature cards; hover lift on cards; modals, popovers, dropdown panels) as source-stated uses in this reconstruction, is a derived editorial implementation inference from the verified surfaces; it is not Asana-authored or a separately published UI specification.

The following shadow-light / tint-band / no-atmospheric-depth readings are a derived editorial implementation inference from the verified surfaces; they are not Asana-authored or a separately published UI specification. The source reads the marketing surface as shadow-light, with depth from `#ffffff` / `#f3f3f3` / `#0d0d0d` bands rather than layered shadows.

### Motion

Source-stated duration roles:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | State commits, checkbox toggles, selection ticks |
| `motion-fast` | 100ms | Hover overlays, focus rings, button press |
| `motion-standard` | 200ms | Dropdown open, modal enter, card hover lift |
| `motion-slow` | 320ms | Page-level transitions, hero section reveals |

Signature motions (source-stated names, durations, and uses):

The following motion character and purpose readings — no-scale / no-lift / no-bounce, never-a-full-page-flash / always-progressive, reduce-motion collapsing non-essential transitions while keeping the task-completion check as essential feedback, and `ease-enter` as a source-stated token name rather than a computed curve — are a derived editorial implementation inference from the verified surfaces; they are not Asana-authored or a separately published UI specification.

1. **Task completion.** The circular check on a task completion registers at `motion-fast / ease-enter`. The row color shifts to a subtly muted state to signal "done" without disappearing. `ease-enter` here is the source-stated token name, not a computed curve.
2. **Pill button hover.** A subtle darkening of the background at `motion-fast` — no scale, no lift, no bounce.
3. **Project view load.** Skeleton content fades in at `motion-standard / ease-enter` as real content populates. Never a full-page flash — always progressive.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all non-essential transitions collapse to instant. Task completion still shows the check (essential feedback); the animation is removed. Dashboard populates without skeleton shimmer.

Source-stated easing token names and uses (uncomputed; cubic-bezier curves omitted):

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | omitted (unattributed cubic-bezier; source-stated name and use only) | Arriving — dropdowns, modals, cards |
| `ease-exit` | omitted (unattributed cubic-bezier; source-stated name and use only; matches the legacy spec-template `ease-exit` example) | Dismissals |
| `ease-standard` | omitted (unattributed cubic-bezier; source-stated name and use only) | Two-way transitions |

Treating unattributed cubic-bezier curves as omitted rather than promoted, while keeping source-stated names and uses, is a derived editorial implementation inference from the verified surfaces; it is not Asana-authored or a separately published UI specification. Exact cubic-bezier curves are unattributed — `ease-exit` matches the legacy spec template — and remain omitted rather than promoted. Do not promote an easing curve, animation name, transition property, or a duration beyond the tables above until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. Any exact animation curve remains a local extension until that per-component computed observation exists.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | asana.com/brand is named for CSS hex extraction confirming `#f06a6a` as primary brand color. |
| Live surface-use | TWK Lausanne confirmed live on asana.com (2026-06-22). |
| Refero (Tier 2) | Ghost display font, coral palette, and button specs named from `styles.refero.design/style/6b2a0513-df80-4140-87a8-38b1fef34313`. |
| Declared-only | Fallback `Helvetica Neue, Helvetica, sans-serif`. Do not present that stack as TWK Lausanne or Ghost. Treating that fallback as declared-only rather than as either product face is a derived editorial implementation inference from the verified surfaces; it is not Asana-authored or a separately published UI specification. |
| Unresolved claim | YAML `display-hero` use names “Ghost or TWK Lausanne”; the body table names Display Hero as TWK Lausanne. Treating both strings as kept, not collapsed, is a derived editorial implementation inference from the verified surfaces; it is not Asana-authored or a separately published UI specification. |

### Family

- **Primary (YAML `sans`):** `TWK Lausanne`
- **Display (YAML `display`):** `Ghost`
- **Fallback:** `Helvetica Neue, Helvetica, sans-serif`
- Body family note: Ghost at 60–72px+ for brand display moments, weight 500, tracking `-0.007em`; TWK Lausanne for body, UI, and marketing text.
- Do not replace TWK Lausanne or Ghost with the fallback stack. Do not present the fallback stack as either face.

Treating Ghost as the 60–72px+ brand-display role and TWK Lausanne as body/UI/marketing, and treating the fallback stack as neither face, is a derived editorial implementation inference from the verified surfaces; it is not Asana-authored or a separately published UI specification.

### Type roles

Verified line-height values are the unitless YAML ratios `1.0`, `1.15`, `1.2`, `1.5`, and `1.75`. Treating those ratios as scaling with font size and not converting them to fixed px, treating YAML `tracking` values `-0.007`, `-0.01`, and `0.04` as kept beside the body-table em values rather than averaged, treating Nav as body-table only (line height `auto`), and treating YAML `use` strings as restored on each YAML row rather than dropped, is a derived editorial implementation inference from the verified surfaces; it is not Asana-authored or a separately published UI specification. Nav is body-table only (line height `auto`). YAML `use` strings are restored on each YAML row.

| Role | Font | Size | Weight | Line height (YAML) | Tracking | Use / notes |
|---|---|---:|---:|---:|---|---|
| Display Hero | Body table: TWK Lausanne. YAML use: Ghost or TWK Lausanne | 102px | 300 | 1.0 | YAML `-0.007`; body `-0.007em` | YAML use: Hero headline — light authority, Ghost or TWK Lausanne. Body note: Whisper-weight authority |
| Display Large | Ghost | 72px | 500 | 1.0 | YAML `-0.007`; body `-0.007em` | YAML use: Display headings, Ghost display font. Body: Brand display moments. Family note also says 60–72px+ |
| Section Head | TWK Lausanne | 54px | 300 | 1.15 | body `normal` | YAML use: Section headings |
| Heading | TWK Lausanne | 36px | 400 | 1.2 | YAML `-0.01`; body `-0.01em` | YAML use: Card / sub-section heads |
| Heading SM | TWK Lausanne | 24px | 500 | 1.2 | body `normal` | YAML use: Small headings |
| Body Lead | TWK Lausanne | 20px | 400 | 1.5 | body `normal` | YAML use: Lead body / subheadings |
| Body | TWK Lausanne | 16px | 400 | 1.5 | body `normal` | YAML use: Standard body text |
| Caption | TWK Lausanne | 11px | 400 | 1.75 | YAML `0.04`; body `+0.04em` | YAML use: Labels, captions |
| Nav | TWK Lausanne | 14px | 500 | auto | body `normal` | Body-table only: Navigation items, compact CTAs |

The following type-personality readings, including the Display Hero body note “Whisper-weight authority” and the YAML use “light authority”, are a derived editorial implementation inference from the verified surfaces; they are not Asana-authored or a separately published UI specification. Source typography principles: lightness signals confidence (weight 300 at 54–102px); Ghost for pure brand moments, TWK Lausanne for functional text; tight tracking at display, relaxing to normal at body; weight 500 for UI.

§9 construction prompts used a nav dropdown at 100px radius with `8px 24px` padding, a sticky white header, and right-aligned Get started. Harvested `button-nav` padding is `0px 16px`. Treating those prompt figures as not a harvested component, and not promoting the prompt padding, is a derived editorial implementation inference from the verified surfaces; it is not Asana-authored or a separately published UI specification.

### Assets

Catalog logo metadata is Simple Icons identity (`asana`), not a captured first-party mark. Treating that catalog slug as identity metadata rather than a captured first-party mark file is a derived editorial implementation inference from the verified surfaces; it is not Asana-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

Treating the following table as the source state contract preserved here while the catalog graph is not adopted, and treating the extra characterizations in those rows (clean / invitational / starting-point-not-failure, calm / non-apologetic, no-illustration, exactly-what's-needed, no-emoji, subtle-shimmer, fades-subtly) as source prose rather than additional observed treatments of harvested controls, is a derived editorial implementation inference from the verified surfaces; it is not Asana-authored or a separately published UI specification.

| State | Treatment |
|---|---|
| **Empty (new project, no tasks)** | White canvas. Single `#0d0d0d` heading at body size: "Add your first task." One black pill CTA: "New task". No illustration. Clean, invitational — reflects that empty is a starting point, not a failure. |
| **Empty (search, no results)** | `#646f79` body text: "No results for '[query]'." Suggestions for broader search terms. Calm, non-apologetic. |
| **Loading (project view)** | Skeleton rows at final task-row dimensions on `#f3f3f3` surface. Subtle shimmer. Sidebar skeleton mirrors final sidebar width. |
| **Loading (dashboard, first paint)** | Skeleton cards at portfolio/project card dimensions. `#e7e7e7` hairline borders maintained. |
| **Error (save failed)** | Inline banner at top of pane. `#ffeaec` coral-blush background, `#690031` deep-coral text: "Couldn't save. [Specific reason.] Try again." One "Retry" pill button. |
| **Error (form validation)** | Field-level. `#f06a6a` coral border on input + error text below. Describes exactly what's needed. |
| **Error (network offline)** | Persistent banner at top. States offline status, lists what's available offline, and auto-retries on reconnect. |
| **Success (task completed)** | Brief check animation on the task completion circle. `#36a651` green on the toggle/checkbox. Task row fades subtly to distinguish completed state. |
| **Success (action saved)** | Transient toast — 3 seconds — bottom of view. Sentence case: "Changes saved." No emoji. |
| **Skeleton** | `#f3f3f3` blocks at final content dimensions. Hairline `#e7e7e7` borders maintained on card skeletons. |
| **Disabled** | Reduced opacity on button and label together. Pill shape maintained, `#0d0d0d` fades to `rgba(13,13,13,0.3)`. |

Treating those rows as named product-pattern states rather than visual treatments of the harvested marketing buttons, pricing cards, or login input, treating `#f06a6a` as a form-validation border that stays on that §14 row rather than a captured login-input error treatment, treating `#36a651` as the task-completion circle / harvested toggle-on fill rather than Sage / Success `#466451`, and treating empty-state strings as staying in this table rather than as extra Content voice samples, is a derived editorial implementation inference from the verified surfaces; it is not Asana-authored or a separately published UI specification. `#f06a6a` as a form-validation border stays on that §14 row; it is not a captured login-input error treatment. `#36a651` stays on the task-completion circle / harvested toggle-on fill; it is not Sage / Success `#466451`. Empty-state strings stay in this table; they are not extra Content voice samples.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. The source records no `focus-visible` treatment; `focus-visible` visual treatment remains omitted. A later generic Focus observation would not be `focus-visible` evidence. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control’s product role, not its primitive kind. Where exact selector/label/request/outcome mapping is unresolved, those three applicability fields are omitted at this boundary rather than closed. This is not a complete state-coverage claim.

### Hero Primary (Black Pill)

- Role: primary hero CTA — “Get started”
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#0d0d0d`
- Text: `#ffffff`
- Radius: 100px
- Padding: 16px 32px
- Height: 64px
- Font: 20px / 400 / TWK Lausanne
- Use: Hero primary CTA — Get started, black pill
- Observed: default only
- Field note: Source §9-only hero composition, kept as this control’s field-role binding rather than Type-role rows: subhead `20px / 400 / #646f79` with this black pill and the ghost Secondary Outline as the CTA pair. Treating that subhead/pair as local to this hero composition, not Body Lead as a page-wide type role and not a merge of this fill with Secondary Outline, is a derived editorial implementation inference from the verified surfaces; it is not Asana-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Harvested as the hero primary Get started pill |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A Get started CTA can be unavailable; visual treatment omitted. §14 Disabled (`rgba(13,13,13,0.3)`) is the product-pattern row, not this control’s captured treatment |

Loading, error, and success applicability are omitted. Source names this control as a hero primary Get started pill; exact selector/label/request/outcome mapping is unresolved, so those three fields stay omitted at this boundary rather than closed as destination navigation.

### Hero Accent (Magenta-Pink)

- Role: homepage hero brand-energy CTA
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#fd3ffd`
- Text: `#0b0505`
- Radius: 100px
- Padding: 16px 32px
- Height: 64px
- Font: 20px / 400 / TWK Lausanne
- Use: Hero accent CTA — magenta-pink brand moment
- Observed: default only
- Field note: `#0b0505` is this control’s renderable foreground, not ink `#0d0d0d`. Treating that unmerged pairing as local to this control is a derived editorial implementation inference from the verified surfaces; it is not Asana-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Harvested as the homepage hero accent CTA |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A hero accent CTA can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source names this control as a homepage hero brand-energy CTA; exact selector/label/request/outcome mapping is unresolved, so those three fields stay omitted at this boundary rather than closed as destination navigation.

### Secondary Outline (Ghost Pill)

- Role: secondary action — “View demo”, “Learn more”
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#fafafa`
- Text: `#0d0d0d`
- Border: 1px solid `#6e6e6e`
- Radius: 100px
- Padding: 16px 32px
- Font: 20px / 400 / TWK Lausanne
- Use: Secondary outline pill — View demo, Learn more
- Observed: default only
- Field note: the `1px solid #6e6e6e` border is this control’s renderable field, not Hairline `#e7e7e7` and not login border `#757677`. No height is recorded in YAML. Treating those unmerged pairings, and the omitted height, as local to this control is a derived editorial implementation inference from the verified surfaces; it is not Asana-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Harvested as the secondary View demo / Learn more pill |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A secondary outline CTA can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source names this control as View demo / Learn more; exact selector/label/request/outcome mapping is unresolved, so those three fields stay omitted at this boundary rather than closed as destination navigation.

### Nav CTA (Compact Black)

- Role: navigation bar “Get started”
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#0d0d0d`
- Text: `#ffffff`
- Radius: 100px
- Padding: 0px 16px
- Height: 44px
- Font: 14px / 500 / TWK Lausanne
- Use: Nav bar CTA — Get started (compact)
- Observed: default only
- Field note: padding `0px 16px` is this control’s field. §9 prompt `8px 24px` on a nav dropdown is not this padding. Treating the prompt figure as not this harvested padding is a derived editorial implementation inference from the verified surfaces; it is not Asana-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Harvested as the compact nav Get started CTA |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A nav Get started CTA can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source names this control as a compact nav Get started CTA; exact selector/label/request/outcome mapping is unresolved, so those three fields stay omitted at this boundary rather than closed as destination navigation.

### Pricing Card Secondary

- Role: pricing card secondary CTA — free / starter tiers
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#f3f3f3`
- Text: `#0d0d0d`
- Radius: 100px
- Padding: 16px 32px
- Height: 50px
- Font: 16px / 500 / TWK Lausanne
- Use: Pricing card secondary — Get started (light)
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Harvested as the pricing-card secondary Get started pill |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A pricing secondary CTA can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source names this control as a pricing-card secondary Get started; exact selector/label/request/outcome mapping is unresolved, so those three fields stay omitted at this boundary rather than closed as plan-start navigation.

### Pricing Card Primary

- Role: pricing card primary CTA — paid / recommended tiers
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#0d0d0d`
- Text: `#ffffff`
- Radius: 100px
- Padding: 16px 32px
- Height: 50px
- Font: 16px / 500 / TWK Lausanne
- Use: Pricing card primary — Get started (dark)
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Harvested as the pricing-card primary Get started pill |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A pricing primary CTA can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source names this control as a pricing-card primary Get started; exact selector/label/request/outcome mapping is unresolved, so those three fields stay omitted at this boundary rather than closed as plan-start navigation.

### Default Text Field

- Role: login / form text input — email / password
- Kind: interactive
- Type: input
- Anatomy: value field
- Background: `#ffffff`
- Border: 1px solid `#757677`
- Radius: 6px
- Padding: 6px 12px
- Height: 36px
- Text: `#000000`
- Font: 14px / 400
- Use: Login / form text input
- Observed: default only
- Field note: `#000000` is this control’s renderable foreground, not ink `#0d0d0d`. `#757677` is this control’s border, not Border Muted `#6e6e6e`. Radius 6px is not layout Micro 4px. Font string does not name a family. Treating those unmerged pairings, and not inventing a family for the font string, as local to this control is a derived editorial implementation inference from the verified surfaces; it is not Asana-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Harvested as the login / form text input |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A login field can be unavailable; visual treatment omitted |
| error | applicable | A login / form value field can fail validation; visual treatment omitted from this login capture. §14 form-validation (`#f06a6a` coral border) stays on that product-pattern row |

Loading and success applicability are omitted. Source records this input as a login / form text field; exact selector/label/request/outcome mapping to submit wait or a success confirmation painted on the field is unresolved, so those two fields stay omitted at this boundary rather than closed.

### Feature Card (White)

- Role: feature / pricing card
- Type: card
- Anatomy: surface
- Background: `#ffffff`
- Border: 1px solid `#e7e7e7`
- Radius: 16px
- Plan name: 24px / 500 / `#0d0d0d`
- Price: 36px / 400
- Use: Feature / pricing card — no shadow, hairline border
- Field note: 16px is this surface’s radius, not YAML `rounded.card` 20. No shadow is this surface’s elevation, not YAML `shadow.card`. Source §9-only pricing-card composition, kept as this card’s field-role binding rather than Type-role rows: plan name `24px / 500 / #0d0d0d` and price `36px / 400`. Treating those two unmerged pairings, and that plan-name/price tuple as local to this card rather than Heading SM / Heading, is a derived editorial implementation inference from the verified surfaces; it is not Asana-authored or a separately published UI specification.

No interactive-kind evidence is given for this surface. Kind and a state-applicability map are omitted.

### Tinted Surface Card

- Role: tinted content card on grey surface sections
- Type: card
- Anatomy: surface
- Background: `#f3f3f3`
- Radius: 8px
- Headline: 24px / 500 / `#0d0e10`
- Body: 16px / 400 / `#646f79`
- Badge: coral blush (`#ffeaec` background, `#690031` text, 9999px radius, 12px TWK Lausanne)
- Use: Tinted content card on grey surface
- Field note: 8px is this surface’s radius. Source §9-only grey feature-card composition, kept as this card’s field-role binding rather than Type-role rows: headline `24px / 500 / #0d0e10`, body `16px / 400 / #646f79`, coral badge. Treating the feature-card hairline and 16px radius as not copied here, and treating that headline/body/badge tuple as local to this card rather than Heading SM / Body / Coral Blush Badge as page-wide roles, is a derived editorial implementation inference from the verified surfaces; it is not Asana-authored or a separately published UI specification.

No interactive-kind evidence is given for this surface. Kind and a state-applicability map are omitted.

### Coral Blush Badge

- Role: coral-branded label or highlight tag
- Type: badge
- Anatomy: label
- Background: `#ffeaec`
- Text: `#690031`
- Radius: 9999px
- Font: 12px / 400 / TWK Lausanne
- Use: Coral blush tag / label pill

No interactive-kind evidence is given. Kind and a state-applicability map are omitted.

### Sky Blue Badge

- Role: sky-tinted status or feature tag
- Type: badge
- Anatomy: label
- Background: `#cbefff`
- Text: `#0d0e10`
- Radius: 9999px
- Font: 12px / 400 / TWK Lausanne
- Use: Sky blue tag / status pill
- Field note: `#0d0e10` is this badge’s text and Dark Heading; it is not ink `#0d0d0d`. Treating that unmerged pairing as local to this badge is a derived editorial implementation inference from the verified surfaces; it is not Asana-authored or a separately published UI specification.

No interactive-kind evidence is given. Kind and a state-applicability map are omitted.

### Toggle On

- Role: toggle/switch — on state
- Kind: interactive
- Type: toggle
- Anatomy: switch
- Background: `#36a651`
- Text: `#ffffff`
- Radius: 100px
- Use: Toggle switch — on state (success green)
- Observed: on state only
- Field note: `#36a651` is this control’s fill and the §14 task-completion green; it is not Sage / Success `#466451`. Treating that unmerged pairing as local to this control is a derived editorial implementation inference from the verified surfaces; it is not Asana-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Harvested as the toggle on-state |
| hover | applicable | Pointer-web toggle; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A toggle can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source records this control as an on-state switch appearance; exact persist/request mapping is unresolved, so those three fields stay omitted at this boundary rather than closed against the §14 task-completion row.

Additional observed named state: on.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

YAML spacing is xs 4, sm 8, md 12, base 16, lg 24, xl 48, xxl 80, section 120. Body layout states base 4px and scale 4, 8, 12, 16, 24, 28, 32, 40, 48, 56, 64, 76, 80, 100, 104, 120px, card padding 24px, and section gaps 80–120px. Treating those figures as kept as recorded is a derived editorial implementation inference from the verified surfaces; it is not Asana-authored or a separately published UI specification.

The “not a page gutter”, “not a universal content grid”, “generous-at-every-level / marketing-not-dashboard”, “pill-as-rhythm”, “flat separation”, and “feature immersion” readings in this section are derived editorial implementation inferences from the verified surfaces; they are not Asana-authored or a separately published UI specification.

### Grid and container

- Max content width: ~1200px (centered)
- Hero: single-column, centered, full-width headline at 102px weight 300
- Feature sections: 2–3 column grids for AI features and product highlights
- Pricing: 4-column pricing card grid on desktop
- Full-width dark sections with `#0d0d0d` or `#27455c` backgrounds for feature immersion

12px / 16px / 24px / 32px paddings on harvested controls are component measurements, not a page gutter.

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <640px | Single column, hero headline scales down, pill buttons stack |
| Tablet | 640–1024px | 2-column grid, moderate padding |
| Desktop | 1024–1280px | Full layout, 3–4 column grids |
| Large | >1280px | Centered max-width content with generous margins |

### Touch targets

- Hero pills at 64px height
- Nav compact CTA at 44px
- Pricing card buttons at 50px

Treating those heights as recorded tap sizes on this reconstruction rather than a cross-viewport specification of every control, is a derived editorial implementation inference from the verified surfaces; it is not Asana-authored or a separately published UI specification.

### Collapsing strategy

- Hero: 102px headline → ~52px on mobile, weight 300 maintained
- Navigation: horizontal + dropdowns → hamburger toggle
- Pricing: 4-column → 2-column → single column stacked
- Dark feature sections maintain full-width background treatment
- Section gaps compress: 120px → 60px on mobile

### Image behavior

- Product screenshots and AI illustrations maintain flat, borderless treatment at all sizes
- Cards maintain 16px radius across breakpoints
- Pill buttons scale with container but maintain 100px radius

Treating the 64px / 44px / 50px / 36px / 16px / 100px figures above as source-stated sizes in this reconstruction, not newly measured mobile-pass values, and treating the collapsing-strategy and image-behavior readings (hero 102px → ~52px, hamburger navigation, pricing 4→2→1, full-width dark bands, 120px → 60px, flat-borderless imagery, cards 16px across breakpoints, pills maintain 100px) as source-stated in this reconstruction, is a derived editorial implementation inference from the verified surfaces; it is not Asana-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

### Observed (asana.com homepage 2026-06-22)

- Hero H1: “The OS for human-agent teams”
- Section H2: “AI that works the way your team works”
- Page title: “Work & Project Management for Human-Agent Teams”

Harvested CTA labels (“Get started”, “View demo”, “Learn more”) stay on the harvested CTA components. They are not homepage voice-observation.

Pricing tier names in source (Personal, Starter, Advanced, Enterprise) stay with the pricing surface and the derived pricing row. They are not homepage voice-observation.

Treating the §14 empty-state strings as part of the state contract, not extra voice samples, is a derived editorial implementation inference from the verified surfaces; it is not Asana-authored or a separately published UI specification. Recorded strings: “Add your first task”; “New task”; “No results for '[query]'.”; “Couldn't save. [Specific reason.] Try again.”; “Changes saved.”

The following forbidden-register list is a derived editorial implementation inference from the verified surfaces; it is not Asana-authored or a separately published UI specification. It is not one of the Observed homepage strings above.

**Forbidden register** (source): Vague empowerment language (“unlock your potential”), enterprise buzzword stacking (“synergize cross-functional workflows”), aggressive countdown urgency, emoji in marketing copy, sentences that start with “We believe...”.

### Derived editorial copy direction

The following voice reading and context table are a derived editorial implementation inference from the verified surfaces; they are not Asana-authored or a separately published UI specification. They are not the Observed homepage strings above.

The source describes Asana’s 2026 voice as **direct, ambitious, and human** — a productivity platform that speaks to teams managing real complexity. Copy is read as confident without being arrogant, action-oriented without being pushy, with warmth under precision. “human flourishing” is named in source as idealism that surfaces in copy.

| Context | Tone |
|---|---|
| Hero headlines | Declarative, bold. Defines a new category. "The OS for human-agent teams." Never hedging. |
| Product descriptions | Capability-first, verb-led. "Manage work across every team and tool." |
| CTAs | Action-clear imperatives. "Get started", "View demo", "Learn more". |
| AI feature copy | Confident but grounded. AI as teammate, not replacement. Specific capability claims. |
| Pricing | Transparent and clear. Tier names (Personal, Starter, Advanced, Enterprise) are functional. |
| Enterprise / sales | More formal, outcome-focused. ROI and scale language. |
| Error messages | Calm, specific, actionable — consistent with the productivity-tool ethos. |

“Manage work across every team and tool.” sits in that derived table. It is not labeled Observed.

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

- `ease-enter` / `ease-exit` / `ease-standard` cubic-bezier curves
- hover, pressed, and `focus-visible` visual treatments
- loading, error, and success visual treatments on the harvested marketing and pricing buttons, and the omitted loading/error/success applicability fields on those buttons, on Default Text Field (loading and success), and on Toggle On
- motion animation names, transition properties, and any duration beyond the four source tokens — promote only after per-component computed capture of all five kinds; a single named duration is not that gate
