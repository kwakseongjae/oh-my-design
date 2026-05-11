# DESIGN.md §4 Component Stylings — Canonical Schema

This is the canonical structure for `## 4. Component Stylings`. It is the source of truth that `extractComponentSpecs()` parses and `ReferencePreview > Components` renders. Existing refs may not yet conform; the migration plan rewrites §4 in batches of 5.

## Rules

1. `## 4. Component Stylings` opens the section. Subsections use `### {ComponentName}` headers.
2. Each variant inside a subsection is introduced by a bolded line `**{VariantName}**` and is followed by a bulleted spec list (lines starting with `-`).
3. Bullet lines use `Field: value` shape. Values may be backtick-wrapped (`` `#3182f6` ``) or plain.
4. **One field per bullet — strict.** The parser matches `^- Field: value$` per line. **Never** join multiple fields with " / " or ", " on a single bullet — only `font` may use the established sub-syntax `<size> / <weight> / <family>`. Joining `Background: X / Text: Y / Border: Z` will silently drop all but one field and lead to the variant being invisible in the renderer (KRDS 2026-05 regression).
5. A free-text `- Use: ...` line is the conventional place for the 1-line use case.
6. Below the variant blocks, a paragraph of notes is permitted (e.g., padding patterns, accessibility notes). Anything that isn't a `**Variant**` heading or `- Field: value` bullet is treated as descriptive prose.
7. **State variants** (Hover/Pressed/Focus/Disabled/Required/Error) go as separate bullets on the SAME variant block — do not create separate `**Variant**` blocks per state.
8. **Size scales** (xsmall/small/medium/large/xlarge) collapse into ONE `**Variant**` block using the default size for the bullets; render the size scale as a markdown table or prose immediately after.

## Subsection vocabulary

| Header (case-insensitive)                       | Component type | Required? |
| ----------------------------------------------- | -------------- | --------- |
| `Buttons`                                       | button         | required  |
| `Inputs` / `Inputs & Forms` / `Forms`           | input          | required  |
| `Cards` / `Cards & Containers` / `Containers`   | card           | required  |
| `Badges` / `Badges & Tags` / `Chips` / `Tags`   | badge          | required  |
| `Tabs`                                          | tab            | optional  |
| `Toggles` / `Switches`                          | toggle         | optional  |
| `Toasts` / `Snackbar` / `Snackbars`             | toast          | optional  |
| `Dialogs` / `Modals` / `Sheets` / `Bottom Sheet`| dialog         | optional  |
| `List Items` / `List Item` / `Friend List Item` | listItem       | optional  |
| `Avatars`                                       | avatar         | optional  |

Other `### ...` headers under §4 (Navigation, Image Treatment, etc.) are preserved in source but not parsed into structured component specs.

## Field vocabulary

For variants under any subsection. All fields are optional; the parser will populate what it sees.

| Field key (case-insensitive, alias-tolerant) | Aliases recognised                          |
| -------------------------------------------- | ------------------------------------------- |
| `bg`                                         | Background, Bg, Fill                        |
| `fg`                                         | Text, Color, Foreground                     |
| `border`                                     | Border, Outline, Stroke                     |
| `radius`                                     | Radius, Border-radius, Border Radius        |
| `padding`                                    | Padding                                     |
| `font`                                       | Font, Typography, Type                      |
| `hover`                                      | Hover                                       |
| `focus`                                      | Focus                                       |
| `active`                                     | Active, Pressed                             |
| `disabled`                                   | Disabled                                    |
| `shadow`                                     | Shadow                                      |
| `use`                                        | Use, Usage, When                            |

Any unrecognised `- Foo: bar` line is captured as `extras["Foo"] = "bar"`.

## Variant naming

`**Variant Name**` may be any short title. The parser preserves the exact name. It does NOT require the name to map to a fixed enum (Primary/Secondary/Outline/...). Brand-specific names are encouraged when they reflect real product usage (e.g., `**Send Money**`, `**Kakao Login (Compliance-Mandated)**`).

## Required fields per component class

The renderer can produce a meaningful "live instance" preview when the variant has at least:

| Component | Minimum required fields                 |
| --------- | --------------------------------------- |
| button    | bg + fg + radius                        |
| input     | bg + border + radius                    |
| card      | bg + radius (padding strongly preferred)|
| badge     | bg + fg + radius                        |
| tab       | active fg + inactive fg                 |
| toggle    | bg + thumb-color (via `extras.thumb`)   |
| toast     | bg + fg + radius                        |
| dialog    | bg + radius + shadow                    |
| listItem  | text + meta-text colors + height        |
| avatar    | radius / shape (circle vs rounded)      |

Variants missing the minimum are still listed; they render with a "spec only" card (no live instance) so the data isn't lost.

## Example (Toss)

```markdown
## 4. Component Stylings

### Buttons

**Primary**
- Background: `#3182f6`
- Text: `#ffffff`
- Radius: 12px
- Padding: 16px 20px
- Font: 16px / 600 / Toss Product Sans
- Pressed: dimmed overlay (opacity reduction)
- Disabled: opacity 0.4
- Use: Primary CTAs (송금하기, 확인)

**Secondary (Weak)**
- Background: `#e8f3ff`
- Text: `#3182f6`
- Radius: 12px
- Padding: 14px 18px
- Font: 16px / 600 / Toss Product Sans
- Use: Less prominent CTAs

### Inputs

**Default**
- Background: `#f2f4f6`
- Border: 1px solid `#e5e8eb`
- Radius: 8px
- Padding: 14px 16px
- Text: 16px / 400 / `#191f28`
- Placeholder: `#b0b8c1`
- Focus: 2px solid `#3182f6`
- Use: Default text input

### Cards

**Standard**
- Background: `#ffffff`
- Radius: 12px
- Padding: 20px
- Shadow: `0px 2px 8px rgba(0,0,0,0.08)`
- Use: Most surfaces (account, transaction, balance)

### Badges

**Default**
- Background: `#e8f3ff`
- Text: `#3182f6`
- Radius: 8px
- Padding: 4px 8px
- Font: 12px / 500
- Use: Small status pills, category tags
```

## Migration policy (existing 67 refs)

Most refs (Toss/Apple/Spotify/Cursor/Stripe + many others) already use the variant-block shape. Migration consists of:

1. Confirming every variant has the minimum required fields (most do).
2. Adding missing required subsections (Buttons / Inputs / Cards / Badges) — usually pulled from real DS/research, not invented.
3. Reformatting legacy free-prose subsections into the variant-block shape without rewording prose-only notes.

Migration order is brand-distinctive products first (5 batches of 5 by influence) then dashboard-style refs (where the gap is small).
