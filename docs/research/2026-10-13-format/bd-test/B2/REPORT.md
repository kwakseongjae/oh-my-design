# REPORT — DESIGN.md (Toss) applied to app-B2

- **App path:** `.../scratchpad/v3/apps/app-B2` (Next.js 16.4, Tailwind v4, `base-maia`).
- **Dev URL:** none. No dev server was started, as instructed.
- **Component files on disk:** 61 (`ls components/ui/*.tsx | wc -l`).
- **Checks run:** `npx tsc --noEmit` passes. `next build` compiled the CSS and JS, but I did not re-run it after the `spinner.tsx` fix. Steps 6 and 7 were not done.
- **Not done:** no design-system page, no browser check, no dark-mode toggle test.

## Style
`maia` was pre-scaffolded and init could not be re-run. Its pill geometry (`rounded-4xl` on controls) conflicts with DESIGN.md, so I overrode radii and heights per component. `nova` would have been closer, since the controls are 32–38px with 6–10px radii. The extraction table is in `EXTRACTION.md`.

## What maps where (`app/globals.css`, hex kept)
- **Colors**
  - Surfaces and text: background, card and popover `#ffffff`; foreground `#191f28`; muted `#f2f4f6`; muted-foreground `#8b95a1`; accent `#f2f4f6`; border and input `#e5e8eb`.
  - Primary `#3182f6`, with a new `--primary-hover` `#2272eb`.
  - Secondary is the "weak" pair: `#e8f3ff` fill, `#1b64da` text.
  - Destructive `#e42939`; ring `#3182f6`.
  - New tokens: `--body` `#4e5968` and `--marketing-dark` `rgba(0,12,30,.8)`. Both are registered in `@theme inline` as `color-body` and `color-marketing-dark`.
  - Chart and sidebar tokens are built from the same palette.
- **Fonts**
  - Brand face Toss Product Sans is listed first in `--font-sans` but is not installable. No substitute is named in DESIGN.md.
  - Fallbacks are `@fontsource-variable/noto-sans` and `noto-sans-kr` (new dependencies), as the labelled safe default.
  - Mono is unchanged (Geist Mono); DESIGN.md claims no mono.
  - `layout.tsx`: I removed Figtree. It was the shadcn default and also made `--font-sans` circular.
- **Type scale:** `type-h1`..`type-h4`, `type-body`, `type-body-small`, `type-button-xl` and `type-button-marketing`, as `@utility` rules. h1–h3 are clamped for mobile. Line height is 1.5, which equals 54/36, 45/30, 36/24, 33/22, 24/16 and 21/14. No tracking, since none is documented.
- **Radius (pinned in `@theme inline`):** sm 4, md 6, lg 8, xl 10, 2xl 14, 3xl 16, 4xl 9999px. The pill is kept only for badge, progress, slider and kbd, and is an extension.
- **Shadows:** the whole shadow scale (2xs to 2xl) is zeroed in `@theme`. DESIGN.md says "flat color layering" and promotes no shadow. Menus and dialogs rely on their existing `ring-1` hairline.
- **Focus:** DESIGN.md requires keyboard focus but gives no values, so I did not invent any. Shadcn's `ring-[3px] ring-ring/50` stays, now blue via `--ring`.

## Contrast pairs under 4.5:1
| Pair | Ratio | Source |
|---|---|---|
| white on `#3182f6` (primary button) | 3.71 | DESIGN.md Known Gaps; kept as specified |
| `#8b95a1` muted text on white | 3.04 | DESIGN.md's own muted color |
| `#8b95a1` on `#f2f4f6` | 2.76 | same |
| white on `#2272eb` (primary hover) | 4.49 | my usage of the hover color |
| `#e42939` on white, and white on `#e42939` | 4.49 | DESIGN.md danger color |

The weak pair (4.82) and body on white (7.11) pass.

## Component files edited
- `button.tsx`
  - Base: removed the pill radius and set weight to `font-semibold` (DESIGN.md: 600).
  - Default size: 38px, 10px radius.
  - sm: 32px, 8px. lg: 48px, 14px.
  - New `xl`: 56px, 16px, 17px text, `px-5`.
  - New `marketing` (40px, 7px, 15px text) and `marketing-lg` (46px, 7px, 17px text).
  - Icon sizes follow the matching radii.
  - `xs` keeps 24px with a 6px radius (an extension).
  - `default` hover uses `primary-hover`. The existing `active:translate-y-px` stays as the pressed state.
  - New `dark` variant for the marketing dark CTA. Marketing primary is `secondary` + `size="marketing"`.
- Control heights moved 36 to 38px (`h-9.5`) and radius `rounded-4xl` to `rounded-xl` (10px) in `input`, `input-group`, `select`, `native-select`, `combobox`, `command`, `menubar`, `tabs`, `toggle`, `toggle-group`, `button-group`, `input-otp`, `questionnaire`, `navigation-menu` (height only) and `pagination` (ellipsis size only).
- `toggle.tsx`: `lg` is also 48px to match the buttons.
- `dialog`, `alert-dialog`, `drawer`: `rounded-4xl` to `rounded-2xl` (14px). They are not DESIGN.md recipes; the change only avoids a 9999px radius on a large surface.
- `spinner.tsx`: the generated file failed the strict typecheck. I omitted `size` and `strokeWidth` from its props type.
- `app/layout.tsx`: font change only (see Fonts).

## Deliberate deviations and open items
- **Dark mode is derived** (`.dark`: `#17171c` canvas, `#202027` cards, blue kept, `--marketing-dark` becomes a white wash). DESIGN.md defines none.
- **Secondary choice:** DESIGN.md has no `button-secondary` token. I used the weak pair, which is documented for TDS buttons and the toss.im CTA. Marketing-derived colors in the product secondary slot go against "don't copy doc-site colors into native product tokens".
- **Ghost, menu and outline hover:** DESIGN.md names no hover, so shadcn's muted hover washes are kept.
- **Not built:** the Button loading state (width-preserving) from DESIGN.md. Secondary and ghost pressed fills have no documented value, so they are unchanged.
- **Unspecified components:** card, input, tabs, toast, dialog and the rest keep shadcn structure with only the token swap and the radius and height remaps above. DESIGN.md says not to invent these from fintech conventions, and measures only Button, Badge, TextField and Agreement. Field geometry (38px) is borrowed from the TDS medium button, and the field radius (10px) from the medium button radius.
- **Badge pill:** its radius is unspecified in DESIGN.md. I kept the shadcn pill, as an extension.
- **Spacing:** no tokens were declared (DESIGN.md has no scale).
- **Hard-rule checks:**
  - 16px and 7px radii are separate (`rounded-2xl` vs `rounded-[7px]`).
  - Logo blue is not used.
  - No extra shadows.
  - Fallback fonts are labelled as fallbacks.
- **Prettier:** formatting was not run on the generated files.
