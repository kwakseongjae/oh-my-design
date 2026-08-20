# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Atelier Roast
**Generated:** 2026-08-17
**Category:** Restaurant / Food Service — specialty coffee roastery
**Source:** ui-ux-pro-max `--design-system` plus domain searches (`landing`, `style`, `color`, `typography`, `ux`, `gsap`, `icons`)
**Design Dials:** Variance 4/10 (Balanced / Modern) | Motion 3/10 (Subtle) | Density 3/10 (Spacious)

---

## Product decisions

- **Product type:** Specialty coffee roastery landing (hospitality / culinary)
- **Primary action:** Reserve a cupping seat — opens a small in-page reservation form
- **Stack:** Static HTML / CSS / JS. No build step. No network requests. No third-party fonts or scripts.
- **Imagery:** Only the four files in `./assets/`. Do not generate, hot-link, or invent additional photos, logos, or icons-as-images. Inline SVG only for UI glyphs.
- **Honesty:** Do not invent prices, awards, review scores, partner logos, hours, or a street address. State plainly what is not published.

---

## Global Rules

### Color Palette

Adapted from ui-ux-pro-max **Bakery/Cafe** (`#92400E` warm brown + cream) and **Editorial Grid / Magazine** high-contrast ink, tuned to the provided roast-floor photographs (brick, sage machine, linen, wood). Pink SaaS accents and navy hotel palettes from earlier generic matches are **not** used.

| Role | Hex | CSS Variable |
|------|-----|--------------|
| Primary | `#3F2418` | `--color-primary` |
| On Primary | `#FFF8F1` | `--color-on-primary` |
| Secondary | `#5F6B56` | `--color-secondary` |
| Accent / CTA | `#92400E` | `--color-accent` |
| On Accent | `#FFF8F1` | `--color-on-accent` |
| Background | `#F4EFE6` | `--color-background` |
| Foreground | `#1A1410` | `--color-foreground` |
| Surface | `#FFF9F2` | `--color-surface` |
| Muted | `#E6DCCE` | `--color-muted` |
| Muted foreground | `#4E463E` | `--color-muted-foreground` |
| Border | `#D4C8B8` | `--color-border` |
| Destructive | `#B42318` | `--color-destructive` |
| On Destructive | `#FFF8F1` | `--color-on-destructive` |
| Success | `#3F5A3A` | `--color-success` |
| Ring | `#3F2418` | `--color-ring` |
| Overlay | `rgba(26, 20, 16, 0.52)` | `--color-overlay` |

**Contrast:** Body and UI text ≥ 4.5:1 on paper/surface. CTA `#92400E` on `#FFF8F1` ≥ 7:1. Focus ring 3:1 against adjacent background.

**Do not** put raw hex in components. Use semantic tokens.

### Typography

Skill pairing for culinary/hospitality: **Playfair Display SC + Karla**. Network font loading is forbidden on this project, so those faces are expressed as **system stacks** that keep the same roles (display serif + humanist sans + mono labels).

| Role | Token | Stack |
|------|-------|-------|
| Display / headings | `--font-display` | `"Iowan Old Style", "Palatino Linotype", Palatino, "Times New Roman", Georgia, serif` |
| Body / UI | `--font-body` | `"Avenir Next", "Segoe UI", system-ui, -apple-system, sans-serif` |
| Labels / meta | `--font-label` | `ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace` |

- Base size: `16px` (`1rem`). Body on large screens: `1.125rem`.
- Body line-height: `1.65`. Display line-height: `1.05–1.15`.
- Measure: ~60–70 characters for long copy.
- Weights: display 400–600; body 400–500; labels 500.
- Labels: small caps via `letter-spacing: 0.14em; text-transform: uppercase`.

### Type scale

| Token | Value |
|-------|-------|
| `--type-display` | `clamp(2.75rem, 6.4vw, 5.25rem)` |
| `--type-h2` | `clamp(1.75rem, 2.6vw, 2.75rem)` |
| `--type-h3` | `clamp(1.25rem, 1.6vw, 1.5rem)` |
| `--type-body` | `1.125rem` |
| `--type-small` | `0.9375rem` |
| `--type-label` | `0.6875rem` |

### Spacing (density 3 / spacious)

| Token | Value | Usage |
|-------|-------|-------|
| `--space-2xs` | `4px` | Hairline gaps |
| `--space-xs` | `8px` | Icon gaps |
| `--space-sm` | `16px` | Compact padding |
| `--space-md` | `24px` | Standard padding |
| `--space-lg` | `32px` | Card padding |
| `--space-xl` | `48px` | Large gaps |
| `--space-2xl` | `64px` | Section margins |
| `--space-3xl` | `96px` | Section / hero padding |
| `--space-4xl` | `128px` | Editorial air |

### Radii

Editorial, not pill-soft. Slight softening only.

| Token | Value |
|-------|-------|
| `--radius-sm` | `2px` |
| `--radius-md` | `4px` |
| `--radius-lg` | `8px` |
| `--radius-xl` | `12px` |

### Elevation

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(26, 20, 16, 0.06)` | Resting controls |
| `--shadow-md` | `0 6px 16px rgba(26, 20, 16, 0.08)` | Cards at rest |
| `--shadow-lg` | `0 16px 32px rgba(26, 20, 16, 0.14)` | Card hover elevation |
| `--shadow-xl` | `0 24px 48px rgba(26, 20, 16, 0.2)` | Modal |
| `--shadow-pressed` | `0 1px 2px rgba(26, 20, 16, 0.16)` | CTA :active |

### Z-index

| Token | Value | Usage |
|-------|-------|-------|
| `--z-base` | `0` | Content |
| `--z-nav` | `40` | Sticky header |
| `--z-overlay` | `80` | Modal overlay |
| `--z-modal` | `90` | Dialog |
| `--z-toast` | `100` | Live region toasts |

### Motion tokens (Subtle / dial 3)

Mapped from ui-ux-pro-max GSAP **Scroll Reveal (Subtle)** and **Hover Micro-interaction**, plus the page brief (fade-up, card elevation, CTA press). Durations stay in the 150–350ms band.

| Token | Value | Meaning |
|-------|-------|---------|
| `--motion-duration-press` | `120ms` | CTA / button :active |
| `--motion-duration-micro` | `180ms` | Hover, focus, color |
| `--motion-duration-enter` | `350ms` | Section fade-up |
| `--motion-duration-exit` | `200ms` | Dialog / toast leave (~60% of enter) |
| `--motion-ease-enter` | `cubic-bezier(0.16, 1, 0.3, 1)` | Ease-out enter (power1.out analogue) |
| `--motion-ease-exit` | `cubic-bezier(0.4, 0, 1, 1)` | Ease-in exit |
| `--motion-ease-press` | `cubic-bezier(0.2, 0, 0, 1)` | Press snap |
| `--motion-distance-enter` | `12px` | Fade-up offset (8–16px) |
| `--motion-distance-hover` | `-4px` | Card hover lift |
| `--motion-scale-press` | `0.97` | CTA pressed scale |

**Rules**

- Animate `opacity` and `transform` only.
- One reveal per major section (not every child).
- Cards elevate on hover via `translateY` + `--shadow-lg`.
- Primary CTA uses a pressed scale + `--shadow-pressed`.
- Content must remain visible without JavaScript (no invisible-by-default SEO trap).
- **`prefers-reduced-motion: reduce` disables all of the above** — no fade-up, no hover translation, no press scale. Instant state changes are acceptable only in that query.

### Breakpoints

`375 / 768 / 1024 / 1440`. Mobile-first. Container `--container: 72rem`. Gutters `--gutter: clamp(1.25rem, 4vw, 5rem)`.

---

## Component Specs

### Buttons

- One primary CTA language on the page: **Reserve a cupping seat**.
- Min height `44px`. `cursor: pointer`. Visible `:focus-visible` ring (`2px` + `2px` offset).
- Primary: `--color-accent` fill, `--color-on-accent` text.
- Ghost / secondary: transparent, ink text, 1px `--color-border`.
- `:hover` — slight darken, no layout shift.
- `:active` — `scale(var(--motion-scale-press))`, `--shadow-pressed`, duration `--motion-duration-press`.
- Disabled: opacity `0.45`, `cursor: not-allowed`, no press.

### Cards

- Surface background, 1px border, `--shadow-md` at rest.
- Hover: `translateY(var(--motion-distance-hover))` + `--shadow-lg`.
- Do not scale cards (layout-shifting hovers are forbidden).
- Images inside cards have explicit `width` / `height` and `aspect-ratio`.

### Inputs

- Visible `<label for>` on every field. Never placeholder-only.
- Height ≥ `44px`. Font size ≥ `16px`.
- Required fields marked in the label (`*` + `aria-required`).
- Errors sit under the field, `role="alert"`, and include how to fix.
- Validate on blur / submit, not on every keystroke.
- Autocomplete attributes on name, email, tel.

### Dialog / reservation form

- Native `<dialog>` with `showModal()`.
- Overlay `--color-overlay` (~52% espresso), light blur only as dismissal cue.
- Close control labeled “Close reservation form”. Esc and backdrop dismiss.
- Confirm before dismiss if the form is dirty.
- Focus trap is native; restore focus to the opener on close.
- Submit shows a loading label, then a success state. No network: persist the request in `localStorage` and say so.

### Icons

- Inline SVG, 1.5px stroke, 24px optical size, 44px hit area when alone.
- Phosphor-equivalent outline set: calendar, x, check, list (menu).
- No emoji as icons.

---

## Style Guidelines

**Style:** Editorial Grid / Magazine, restrained toward Exaggerated Minimalism (oversized display type, one accent, generous negative space). Not Soft UI / not neon SaaS.

**Landing pattern:** Hero-Centric + Features + CTA

1. Full-bleed / high-impact hero (headline + provided roast-floor photograph + primary CTA)
2. Value-prop strip (what the roastery is)
3. Editorial story grid using the three provided story photographs
4. Cupping explanation (process only — no prices)
5. Honest “not published” notes
6. Closing CTA band
7. Footer

**CTA placement:** Hero + sticky header + closing band. One label.

**Do not include:** testimonial carousels, star ratings, award badges, partner logo rows, price tables, countdown timers.

---

## Content policy

| Topic | Rule |
|-------|------|
| Prices | Not published. Say so. |
| Awards | None listed. Do not invent. |
| Review scores | None published. Do not invent quotes or ratings. |
| Partner logos | None. Do not invent or hot-link marks. |
| Hours / address | Not published. Say visiting details are unpublished. |
| Imagery | `hero.jpg`, `story-beans.jpg`, `story-brew.jpg`, `story-space.jpg` only. Explicit pixel dimensions on every `<img>`. |

---

## Anti-Patterns (Do NOT Use)

- Low-quality or extra imagery
- Invented hours, prices, awards, reviews, or logos
- Complex multi-step booking
- Google Fonts / CDN scripts (no network)
- Emojis as icons
- Missing `cursor: pointer` on clickable elements
- Layout-shifting hovers (`width` / `height` / `margin` animation)
- Low-contrast muted gray text
- Instant state changes (except under reduced motion)
- Invisible focus states
- Placeholder-only form labels
- Animations that ignore `prefers-reduced-motion`
- Revealing below-the-fold copy as `opacity: 0` without a no-JS fallback

---

## Pre-Delivery Checklist

- [ ] No emojis as icons (inline SVG)
- [ ] All icons from one outline family
- [ ] `cursor: pointer` on clickable elements
- [ ] Hover / press use motion tokens (150–350ms)
- [ ] Text contrast ≥ 4.5:1
- [ ] Focus states visible
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375 / 768 / 1024 / 1440
- [ ] No content hidden behind the sticky header
- [ ] No horizontal scroll
- [ ] Images have width, height, and descriptive alt
- [ ] Form: real fields, labels, errors, submit feedback
- [ ] Honesty block present
