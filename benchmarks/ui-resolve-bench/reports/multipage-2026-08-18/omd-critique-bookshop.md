# Visual critique — Quarto Cup

One-round self-critique after PRODUCT_BUILD. Browser screenshots were not taken; this is a source-level reading of the four pages against the visual-quality contract.

## Axis scores

| Axis | Score | Note |
|---|---:|---|
| Philosophy | 4 | Hairline-rule editorial shop, not a widget kit. The name and terracotta signal take a stance. |
| Hierarchy | 4 | Each page opens with eyebrow / display title / lede / one primary action. |
| Execution | 4 | Tokens, focus outlines, restyled controls, and reduced-motion paths are present. |
| Specificity | 4 | Bookstore-cafe copy, provided interiors, and honest absences for hours, prices, and address. |
| System Fidelity | 4 | One stylesheet, one nav, shared heading/body/CTA. No purple gradient or icon-card kit. |

No axis scored below 3. No second visual rebuild.

## Gate sweep

- P0-1 state switchers: no. States come from filters, lookup, and the interest form.
- P0-2 native unstyled controls: no. Filters, inputs, and buttons are restyled from tokens.
- Token floor: paper/ink/tints/one accent; 4pt space through section air; display/body pair; label role; motion tokens.
- Surface genre: hairline-rule bands, radius 0, accent as a 2–3px mark.
- Multi-page: shared `styles.css`, identical chrome, `aria-current` on the active link.
- Images: explicit width/height on every `img`.
- Motion: transform/opacity only, behind `prefers-reduced-motion`.

## Fixes applied in this round

- Submit actions no longer reuse the filled primary plate.
- Detail title is a single page `h1` so error and default views stay at one heading.
- Narrow nav disclosure is CSS+JS; without JS the list stays visible.

## SELF-WALK

| Verb | Keyboard path | Programmatic evidence |
|---|---|---|
| Browse the home | Open `index.html`; Tab to skip, then nav, then primary | `aria-current="page"` on Home; `data-cta="primary"` |
| Filter the sample event list | Tab to a filter button; Space/Enter | `aria-pressed`, `data-state="loading"` then `empty`/`default`; `role="status"` summary |
| Inspect one sample event | Tab to “Inspect this event” or submit “Open event by ID” | Detail `data-event-id`; unknown ID sets `data-state="error"` |
| Hold a sample seat | Tab to name field; Enter | Empty: `role="alert"` + focus on field. Valid: `data-state="loading"` then `success`; record flag updates |
| Review the space | Tab to “Review the space” or Visit | `visit.html` landmarks |
| Read unpublished hours, prices, address | Read the honesty nodes on Visit (and hours on Home) | `data-state="unavailable-information"` naming each category |
