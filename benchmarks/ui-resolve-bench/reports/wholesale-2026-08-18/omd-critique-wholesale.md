# Visual self-critique

## Scores (1–5)

| Axis | Score | Note |
| --- | --- | --- |
| Philosophy | 4 | Dock-book on warm paper with hairline rules. Not a generic dashboard. |
| Hierarchy | 4 | Eyebrow / display title / lede / primary, then status bands. |
| Execution | 4 | Tokens, restyled select, instant focus, reduced-motion path. |
| Specificity | 4 | Wholesale cases, stock states, sample-book voice. |
| System Fidelity | 4 | CSS custom properties match adopted hex tokens. One stylesheet. |

## Gate sweep

- P0-1 state switchers: no. States come from dataset bind, filters, missing ids.
- P0-2 native unstyled controls: no. Select, search, and buttons are token-styled with appearance:none.
- Color tokens from the adopted system; no inline hex in components.
- Hairline-rule bands, no-radius plates, one accent.
- Catalog uses 1/2/3 authored columns.
- `overflow-x: clip` on html.
- Primary unique per page; row action is “Open order”.

No axis below 3. No P0 hit. No second critique pass.

## SELF-WALK

| Verb | Keyboard path | Programmatic evidence |
| --- | --- | --- |
| Read overview aggregates | Open index.html, Skip to main content | `#view[data-state=success]`, metric values from `aggregates()` |
| Filter by status | Tab to Filter by status, change option | `#status-filter` value + `#filter-summary` role=status |
| Sort by date placed | Tab to Sort by date placed, Space/Enter | `#date-sort[aria-pressed]` and row order |
| Open any order | Tab to Open order, Enter | `a[data-cta=local]` → `order-detail.html?id=` |
| Inspect one order | Land on a real id | `region[data-order-id]`, joined product names, customer, status, note |
| Unknown order id | Open Order in nav or `?id=NOPE` | `.unknown-order[data-state=error][role=alert]` names the id |
| Browse catalog | Open products.html | `img[width][height]`, `.badge[data-stock]` |
| See withheld revenue/carriers | Read unavailable nodes | `[data-state=unavailable][data-unavailable=revenue\|carrier]` |
| See sample data label | Every page chrome | `.sample-banner` + `.sample-line` |

## Fix applied this round

Chevron on search fields suppressed with `:has(input)`. Status badge pending no longer shared the in-stock selector.
