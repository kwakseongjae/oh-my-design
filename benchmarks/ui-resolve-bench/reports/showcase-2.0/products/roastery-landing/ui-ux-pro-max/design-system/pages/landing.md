# Landing — Atelier Roast

Overrides `design-system/MASTER.md` for the single marketing page.

## Intent

Convert visitors to a **cupping-seat request**. The primary control is always labeled **Reserve a cupping seat** and must open the reservation dialog.

## Section order

1. Skip link + sticky header (wordmark, in-page nav, header CTA)
2. Hero — display headline, lead, CTA, `assets/hero.jpg` (1280×720)
3. Value strip — three short claims, no invented metrics
4. Story grid — `story-beans.jpg`, `story-brew.jpg`, `story-space.jpg` (each 1248×832)
5. Cupping — what a seat is; no prices
6. Unpublished — honest list of missing public data
7. Closing CTA band
8. Footer
9. Reservation `<dialog>`

## Motion on this page

- `[data-reveal]` on major sections only (hero copy, value, story, cupping, unpublished, close)
- Cards: hover elevation (`--motion-distance-hover` + `--shadow-lg`)
- `.btn-primary:active`: `--motion-scale-press`
- All gated by `prefers-reduced-motion`

## Form fields (required unless noted)

- Full name
- Email
- Phone (optional)
- Preferred date
- Session window
- Number of seats (1–6)
- Tasting notes / access needs (optional)

Submit persists locally. Copy must say the request is not transmitted and that no booking desk is published.

## Forbidden on this page

Testimonials, star ratings, award locks, partner marks, price chips, countdown, extra photographs.
