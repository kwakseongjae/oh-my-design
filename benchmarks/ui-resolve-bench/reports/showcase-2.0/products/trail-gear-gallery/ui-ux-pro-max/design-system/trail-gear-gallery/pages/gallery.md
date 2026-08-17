# Gallery — page overrides

Inherits `design-system/trail-gear-gallery/MASTER.md`.

## Intent

Single-page trail-gear rental catalog. Visuals first. Filter by category. Open one card into a named detail dialog. All listings are sample data. Stock counts are not published.

## Layout

- Pattern: Portfolio Grid (editorial split on large screens: intro + filters/grid)
- Imagery: only the six files in `./assets/item-*.jpg` (1024×1024, width/height required)
- No decorative photographs, remote fonts, or icon fonts

## Interaction

- Category filter is the primary nav for the catalog
- Cards are a single-select listbox (`aria-selected`)
- Detail is a named `dialog` (`aria-labelledby` + availability region)
- Keyboard: Tab, arrows inside the listbox, Enter/Space open, Escape closes
- Hover tilt/elevation and staggered entrance use motion tokens
- All motion disabled behind `prefers-reduced-motion`

## Honesty

Where a visitor would look for remaining units (card meta + detail availability region), state that rental stock counts are not published. Do not invent quantities.
