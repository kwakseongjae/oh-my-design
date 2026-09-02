# oh-my-design Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

### Visual Theme & Atmosphere

The header comment in `globals.css` states the design intent directly: *"Radius: 0.625rem (10px) — friendly but professional / Philosophy: We build design tools, so our own site must be impeccable."* That 10px base radius is the tactile signature — softer than a utilitarian 4px, tighter than a playful 16px.

There is a second, louder identity used only on the `/v2` landing variant (`web/src/components/landing-v2/tokens.ts`): an **electric-indigo** (`#5546ff`) system on a near-black canvas (`#0a0a0f`), with an indigo glow (`#8b7dff`) and a light-indigo accent (`#a89cff`). These are scoped inline tokens — intentionally kept separate from the global `--primary` so the marketing hero can go high-contrast dark without touching the app-wide theme.

**Key Characteristics:**
- Violet-blue primary (`oklch(0.55 0.22 275)` ≈ `#7c5cfc`) as the single interactive accent
- Full OKLCH palette with light and dark parity, every neutral tinted toward hue 275
- Geist + Geist Mono (via `next/font/google`), with `cv01` / `cv11` OpenType features on for cleaner glyphs
- 10px base radius (`--radius: 0.625rem`) driving a multiplied scale (6 → 26px)
- Restrained elevation: `ring-1 ring-foreground/10` on cards/dialogs instead of drop shadows
- Calm, short motion — 0.6–0.7s `easeOut` entrances, `fade-up` / `fade-blur-up`, all gated by `prefers-reduced-motion`
- A distinct electric-indigo-on-black system scoped to the `/v2` landing hero

### Product Truth Principle

- Render only canonical, high-confidence values for the exact target surface.
- Never use system fonts,…
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=2 lang=en -->
### Primary tasks

- Install or update oh-my-design for a supported coding agent, establish a reviewed project design system, and apply it without inventing facts that evidence has not established.

- Move from Home to Builder, select a reference, inspect the exact projection, and hand DESIGN.md and the first prompt to the intended project terminal and coding-agent chat.
<!-- design-md:claim-end -->

### Design direction

- Use violet-blue as the single interactive accent over violet-tinted neutral surfaces.

- Use a 10px control radius, restrained ring-based elevation, and short motion with a reduced-motion equivalent.

- Keep the high-contrast electric-indigo dark treatment scoped to the v2 landing surface.

### Principles

- Treat Builder as the user-facing preview; use reference detail routes for catalog and evidence diagnostics.

- Omit a value not established by evidence only at its smallest field or item boundary while preserving every verified sibling and the canonical source.

- Keep references deep enough to explain the product, distinctive brand expression, current evolution, font evidence domains, and application limits.

- Treat AI slop as a cluster of context-free defaults and evaluate the whole product judgment system rather than isolated visual motifs.

- Make documentation and handoff actions compact, destination-specific, localized, and visibly tied to the user outcome.

### Avoid

- Do not substitute system fonts, generic components, inferred motion, or adjacent marketing and corporate observations for product facts not established by evidence.

- Do not collapse useful reference content into Partial or warning chrome when evidence is missing for only one field.

- Do not treat the reference detail route as the primary acceptance surface for a Builder task.

- Do not auto-promote ambient or inferred preference-log observations into the project design system.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic tokens

- **color.dark-marquee-fade**: `#0f0e15`
- **color.marquee-fade**: `#faf9ff`
- **color.v2-accent**: `#a89cff`
- **color.v2-bg-dark**: `#0a0a0f`
- **color.v2-bg-light**: `#fafafa`
- **color.v2-primary**: `#5546ff`
- **color.v2-primary-deep**: `#3a2dd6`
- **color.v2-primary-glow**: `#8b7dff`
- **color.v2-text-on-dark**: `#fafafa`
- **color.v2-text-on-light**: `#0a0a0f`

### Contrast pairs

- color.v2-text-on-light on color.v2-bg-light: minimum 4.5:1

### Reduced motion

Required.

### Color Palette & Roles

All values below are verbatim from `web/src/app/globals.css`. Hex in parentheses is either code-stated or an approximate conversion (marked *approx*) — OKLCH is authoritative.

#### Primary
- **Violet-Blue** `oklch(0.55 0.22 275)` (code-stated `#7c5cfc`): `--primary` / `--ring`. All interactive elements — buttons, links, focus rings, active states, charts (`--chart-1`), selection highlight.
- **Primary Foreground** `oklch(0.99 0 0)`: text/icon on primary fills (near-white).
- Dark mode: `--primary` lifts to `oklch(0.7 0.2 275)` (~*approx* `#a48bff`) so it stays vibrant on a dark canvas; its foreground flips to `oklch(0.1 0.02 275)`.

#### Surfaces
- **Background** `oklch(0.99 0.002 275)` (*approx* `#fdfcff`): page canvas, warm white with a trace of violet. Dark: `oklch(0.1 0.015 275)`.
- **Foreground** `oklch(0.13 0.02 275)` (*approx* `#16161d`): primary text, violet-tinted near-black. Dark: `oklch(0.95 0.005 275)`.
- **Card / Popover** `oklch(1 0 0)` (pure white): raised surfaces. Dark card: `oklch(0.14 0.015 275)`.

#### Neutrals (violet-tinted)
- **Secondary** `oklch(0.965 0.005 275)` — low-emphasis fills. Foreground `oklch(0.2 0.02 275)`.
- **Muted** `oklch(0.96 0.005 275)` — hover fills, footer bg (`bg-muted/50`). Muted foreground `oklch(0.5 0.015 275)` (dark: `oklch(0.6 0.015 275)`).
- **Accent** `oklch(0.955 0.01 275)` — subtle emphasis surface.
- **Border / Input** `oklch(0.91 0.008 275)` (*approx* `#e5e3ea`): default borders and input outlines (dark: `oklch(0.22 0.015 275)` border, `oklch(0.25 0.015 275)` input).
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Type roles

| Role | Usage | Family | Weight |
|---|---|---|---|
| ui-sans | Primary interface, navigation, controls, and headings | Geist | 500 |
| ui-mono | Code, version strings, and tabular technical values | Geist Mono | 400 |

### Font Family
- **Sans**: **Geist** — loaded via `next/font/google` as `--font-geist-sans`, applied with fallback `system-ui, sans-serif`. This is the UI and heading face (`--font-heading` maps to the sans in the `@theme`).
- **Mono**: **Geist Mono** — `next/font/google` as `--font-geist-mono`, bound to `--font-mono`. Code, version strings, tabular contexts.
- **OpenType features**: `html` sets `font-feature-settings: "cv01", "cv11"` (Geist stylistic alternates) and `-webkit-font-smoothing: antialiased`.

### Hierarchy
The site does not define a bespoke type ramp; it uses the Tailwind scale directly at the component level. Observed roles:

| Role | Class | Size | Weight | Notes |
|------|-------|------|--------|-------|
| Card title | `font-heading text-base leading-snug font-medium` | 16px | 500 | `CardTitle` |
| Body / labels | `text-sm` | 14px | 400 | Card body, button & tab labels |
| Input text | `text-base md:text-sm` | 16px → 14px | 400 | 16px on mobile prevents iOS zoom (`@supports` rule forces ≥16px on inputs) |
| Small label | `text-xs font-medium` | 12px | 500 | Badge, button `xs` |

<!-- design-md:section components-states -->
## 4. Components & States

### Component: button

**Semantics:** Triggers a named action or navigation outcome with visible focus and disabled behavior.

- Anatomy: label, optional-leading-icon, optional-trailing-icon
- Variants: default, outline, secondary, ghost, destructive, link
- States: default, hover, focus-visible, disabled

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | applicable |  |
| loading | not-applicable | Loading ownership belongs to the action workflow rather than the base button primitive. |
| error | not-applicable | Error feedback belongs to the action result or field context rather than the base button primitive. |
| success | not-applicable | Success feedback belongs to the action result rather than the base button primitive. |

### Component Stylings

Components live in `web/src/components/ui/`, built on **`@base-ui/react`** primitives with **`class-variance-authority` (CVA)** variant maps and a `cn()` class merger. They are not raw shadcn — the primitive layer is Base UI.

#### Buttons (`ui/button.tsx`)
`@base-ui/react/button` + CVA. Base: `inline-flex … rounded-lg border border-transparent text-sm font-medium transition-all`, `focus-visible:ring-3 focus-visible:ring-ring/50`, `active:not-aria-[haspopup]:translate-y-px` (a 1px press nudge), `disabled:opacity-50`.

**Variants:** `default` (bg-primary / text-primary-foreground, hover `bg-primary/80`) · `outline` (border-border, bg-background, hover bg-muted) · `secondary` (bg-secondary, hover `/80`) · `ghost` (transparent, hover bg-muted) · `destructive` (`bg-destructive/10 text-destructive`, hover `/20` — tinted, never solid) · `link` (text-primary, underline on hover).

**Sizes (height · radius):** `default` 32px (`h-8`, `px-2.5`) · `xs` 24px (`h-6`, radius `min(--radius-md,10px)`) · `sm` 28px (`h-7`, radius `min(--radius-md,12px)`) · `lg` 36px (`h-9`) · `icon` 32px square (`size-8`) · `icon-xs`/`icon-sm`/`icon-lg` 24/28/36px. Default variant/size: `default`/`default`.

#### Badges (`ui/badge.tsx`)
`@base-ui` `useRender` + CVA. Base: `h-5` (20px), `rounded-4xl` (26px → pill), `px-2 py-0.5 text-xs font-medium`. Variants mirror buttons: `default` (bg-primary) · `secondary` · `destructive` (tinted) · `outline` (border-border) · `ghost` · `link`.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

### Responsive constraints

- Minimum supported width: 320px
- Reflow target: 200% zoom

### Radius Scale (from `--radius: 0.625rem` = 10px)
Defined in `globals.css` `@theme inline` as multiples of a single base:

| Token | Multiplier | Value |
|-------|-----------|-------|
| `--radius-sm` | × 0.6 | 6px |
| `--radius-md` | × 0.8 | 8px |
| `--radius-lg` | × 1.0 | 10px (base) |
| `--radius-xl` | × 1.4 | 14px |
| `--radius-2xl` | × 1.8 | 18px |
| `--radius-3xl` | × 2.2 | 22px |
| `--radius-4xl` | × 2.6 | 26px |

In practice: inputs/buttons/tab-lists use `rounded-lg` (10px); cards/dialogs use `rounded-xl` (14px); badges use `rounded-4xl` (26px, effectively a pill at `h-5`); tab triggers use `rounded-md` (8px).

### Spacing
No bespoke spacing tokens — the standard Tailwind 4px base (`var(--spacing)`) is used directly. Recurring rhythm: card `gap-4` / `py-4`, dialog/card padding `p-4`, button `px-2.5`, input `px-2.5 py-1`.

### Safe areas
Utility classes for notched devices: `.safe-top` / `.safe-bottom` (`max(1rem, env(safe-area-inset-bottom))`) / `.safe-x`.

### Scrollbars
Thin custom scrollbar: 6px wide, transparent track, thumb `oklch(0.7 0 0 / 0.2)` (dark: `oklch(0.4 0 0 / 0.3)`), fully rounded.

### Platform: web

- Preserve task order and all primary actions at 320px without horizontal page scrolling.
- Reflow text and controls at 200% zoom without clipping or overlapping interactive content.

<!-- design-md:section content-locales -->
## 6. Content & Locales

### Voice

- State what the user can do and where each output goes; prefer direct, concrete labels over abstract product praise.

- Preserve native labels for every supported locale and show the selected language as a fully localized label rather than a locale code.

- Explain evidence and unknown boundaries plainly without turning the product into an audit disclaimer.

### Locale: en (supported)

- Use concise product language and preserve exact command, file, and destination names.

<!-- design-md:section governance -->
## 7. Governance

<!-- design-md:claim authority kind=project-system lang=en -->
### Authority

This document is the project design contract for the declared scope.
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

### Project priority details

1. Explicit current user instructions and pending explicit user corrections

2. Verified repository and target-surface facts

3. Reviewed project-owner decisions recorded through the Core v2 checkpoints

4. Verified reference inspiration that has not been promoted to a project fact

### Do
- Use the violet-blue primary (`oklch(0.55 0.22 275)` / `#7c5cfc`) for every interactive element — it is `--primary` and `--ring` both.
- Keep neutrals tinted toward hue 275; don't drop in pure grays.
- Use `rounded-lg` (10px) for controls and `rounded-xl` (14px) for cards/dialogs.
- Elevate with `ring-1 ring-foreground/10`, not drop shadows.
- Use `font-medium` (500) for interactive labels and card titles; 400 for body.
- Give every interactive element the standard `ring-3 ring-ring/50` focus treatment.
- Load Geist / Geist Mono; keep `cv01` / `cv11` features on.
- Respect `prefers-reduced-motion` — it is already enforced globally and via `MotionConfig`.

### Quick token reference
- Primary / focus ring: `oklch(0.55 0.22 275)` (`#7c5cfc`)
- Background: `oklch(0.99 0.002 275)` · Foreground: `oklch(0.13 0.02 275)`
- Card: `oklch(1 0 0)` with `ring-1 ring-foreground/10`
- Border/input: `oklch(0.91 0.008 275)`
- Destructive: `oklch(0.58 0.22 25)` (render tinted)
- Radius: control = 10px (`rounded-lg`), card/dialog = 14px (`rounded-xl`), badge = pill (`rounded-4xl`)
- Type: Geist (sans) / Geist Mono; emphasis weight `font-medium` (500)
- Motion: 0.6–0.7s `easeOut` entrances;…
