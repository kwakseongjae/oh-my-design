# Plan picker — page override

Overrides `MASTER.md` for the Harbor Membership comparison page.

## Color adaptation

Header artwork is cool indigo–teal, not sage gray. Semantic roles stay the same; hex values follow the art and WCAG AA on light surfaces.

| Role | Page value | Why |
|------|------------|-----|
| Primary | `#115E59` | Teal from mid planes; 7:1+ on white |
| Accent | `#0E7490` | Cyan CTA aligned with `--color-accent` in MASTER |
| Background | `#E4EEF2` | Sky field from `header-art.jpg` |
| Foreground | `#122033` | Deep indigo ink |
| Ring | `#115E59` | Matches primary, not gray |

## Pattern

Pricing Page + CTA, scoped to a single-page picker:

1. Hero with provided header artwork
2. Three comparison cards (radiogroup)
3. Live summary of the selected plan
4. Inclusion matrix

Mid-tier **Channel** is pre-selected (recommended). Every name and amount is labeled sample data.

## Motion

Use design-system motion tokens only (`--motion-duration-*`, `--motion-easing-*`, `--motion-scale-press`, `--motion-lift-hover`). Under `prefers-reduced-motion: reduce`, those tokens collapse to near-zero duration and a press scale of `1`.

## Interaction

- Cards are keyboard-reachable (`role="radiogroup"` / `role="radio"`, roving tabindex).
- `aria-pressed` and `aria-checked` read the same `selectedId` that drives selected visuals.
- Summary is an `aria-live="polite"` region.
