# Report: Toss DESIGN.md applied to app-D1

Scope: Steps 3, 4, 5 and Report Back only. No dev server, no browser, no Step 6 (design system page) or Step 7 (verify). Nothing has been rendered, so none of the visual results below are checked in a browser.

## App

- Path: `/private/tmp/claude-501/-Users-kwakseongjae-Desktop-projects-oh-my-design/7924e40f-6ce3-49da-b96e-10a398a1144e/scratchpad/v3/apps/app-D1`
- Dev URL: none (not started, as instructed)
- Components on disk: 61 files in `components/ui/*.tsx`
- Working table: `EXTRACTION.md`

## Style

The preset was already `maia`, so no style was picked. It was kept. Toss's 48-56px controls and 14-16px radii fit maia's soft, generous geometry, and the exact geometry is pinned in the edits below.

## What maps where

All edits to the theme are in `app/globals.css`. Hex values are kept as hex.

| Area | Mapping |
| --- | --- |
| Canvas / ink | `--background` `#ffffff`; `--foreground`, `--card-foreground`, `--popover-foreground` `#191f28`; `--card`, `--popover` `#ffffff` |
| Primary | `--primary` `#3182f6` with `--primary-foreground` `#ffffff`. New `--primary-hover` and `--primary-active` are both `#2272eb`, registered in `@theme inline` |
| Secondary | `--secondary` `#e8f3ff` with `--secondary-foreground` `#1b64da` (the weak pair, which is a marketing CTA pair in the DESIGN.md; used for the TDS "weak" variant, see deviations) |
| Surfaces / text | `--muted` and `--accent` `#f2f4f6`; `--muted-foreground` `#8b95a1`; `--accent-foreground` `#191f28` |
| Lines | `--border` and `--input` `#e5e8eb` |
| Focus | `--ring` `#3182f6`. The ring pattern is kept (see deviations) |
| Danger | `--destructive` `#e42939` |
| Charts | Only DESIGN.md colors: `#3182f6`, `#1b64da`, `#8b95a1`, `#4e5968`, `#191f28` |
| Sidebar | `#f2f4f6` surface, `#e5e8eb` accent and border, `#3182f6` primary and ring |
| Fonts | `--font-sans`: `"Toss Product Sans"`, then `"Noto Sans Variable"`, `"Noto Sans KR Variable"`, then system. `--font-heading` follows sans. Installed `@fontsource-variable/noto-sans` and `@fontsource-variable/noto-sans-kr`. No substitute is named in the DESIGN.md; the Noto faces are its labeled "safe defaults", not Toss Product Sans |
| Type scale | `type-h1` through `type-h4`, `type-body`, `type-body-small`, `type-button-xlarge` as `@utility` rules. h1 and h2 sizes are clamped for mobile. Line heights are 1.5, which equals 54/36, 45/30, 36/24, 33/22, 24/16 and 21/14 |
| Radius | Pinned in `@theme inline`: sm 4, md 6, lg 8, xl 10, 2xl 14, 3xl 16, 4xl 16 (px). 8/10/14/16 are the Toss button-small/medium/large/xlarge radii |
| Shadows | All `--shadow-*` set to `0 0 #0000` in `@theme` (flat layering) |
| Dark mode | Derived (see deviations) |

## Components edited, and why

- `components/ui/button.tsx`: Toss size ladder. xs 32px/8px radius, sm 38/10, default 48/14, lg 56/16 (xlarge, 17px text). Icon sizes follow. Base is `font-semibold` (600) and `rounded-2xl`. The default variant gets `hover:bg-primary-hover active:bg-primary-active` instead of `/80` opacity.
- `components/ui/input.tsx`, `input-group.tsx`, `select.tsx`, `native-select.tsx`, `combobox.tsx`, `input-otp.tsx`, `menubar.tsx`, `command.tsx`, `tabs.tsx`, `toggle.tsx`, `questionnaire.tsx`: heights moved from 36px to 48px (sm variants to 38px, toggle lg to 56px) so forms align with the default button.
- `components/ui/input.tsx`, `input-group.tsx`, `select.tsx`, `native-select.tsx`, `combobox.tsx`, `input-otp.tsx`, `menubar.tsx`, `tabs.tsx`, `toggle.tsx`, `toggle-group.tsx`, `button-group.tsx`, `questionnaire.tsx`: pill `rounded-4xl` changed to `rounded-2xl` (14px).
- `components/ui/textarea.tsx`: `rounded-xl` changed to `rounded-2xl` to match the other fields.
- `components/ui/badge.tsx`: pill changed to `rounded-md` (6px). The DESIGN.md documents no pill radius.
- `components/ui/tooltip.tsx`: `rounded-2xl` changed to `rounded-lg` (8px), so a tiny label doesn't get a 14px corner.
- `app/layout.tsx`: removed the `Figtree` next/font import and class. It set `--font-sans` on `<html>` and would have overridden the theme font stack. `Geist_Mono` is kept, because the DESIGN.md has no mono claim.

Not edited on purpose: `dialog`, `alert-dialog`, `drawer` and `command` keep `rounded-4xl`, which is now 16px and inside the scale. `sidebar.tsx` (h-9 menu buttons) and `pagination.tsx` (size-9) are left at 36px as dense navigation. This is the one place the "control heights move together" rule is not followed.

## Contrast pairs under 4.5:1

| Pair | Ratio | Note |
| --- | --- | --- |
| `#ffffff` on `#3182f6` (primary button text) | 3.71 | The DESIGN.md records this itself as a Known Gap. Kept as specified |
| `#8b95a1` on `#ffffff` (muted text, placeholders) | 3.04 | From the DESIGN.md palette |
| `#8b95a1` on `#f2f4f6` | 2.76 | From the DESIGN.md palette |
| `#3182f6` on `#e8f3ff` | 3.31 | Appears if primary text sits on the weak fill |
| `#e42939` on `#ffffff` (danger text) | 4.49 | Just under; from the DESIGN.md |
| `#ffffff` on `#2272eb` (pressed/hover primary) | 4.49 | Just under; from the DESIGN.md |
| `#e5e8eb` on `#ffffff` (border) | 1.23 | Decorative border |
| Dark (derived): `#3182f6` on `#191f28` | 4.46 | Blue links and ring |
| Dark (derived): `#f04452` on `#191f28` | 4.46 | Danger text |
| Dark (derived): `#8b95a1` on `#2a313c` | 4.31 | Muted on the muted surface |

Ratios were computed with the WCAG relative-luminance formula. `#191f28` on white (16.56), `#4e5968` on white (7.11) and `#1b64da` on `#e8f3ff` (4.82) pass.

## Deliberate deviations

1. **Default button is 48px (large), not 56px.** The DESIGN.md calls xlarge (56px) the documented default. Making every default control and field 56px seemed too heavy for web forms, so xlarge is the `lg` size. Change `button.tsx` and the field heights together if 56px is wanted.
2. **Secondary variant uses the marketing weak pair.** `#e8f3ff` / `#1b64da` is documented as a `toss.im` marketing CTA. TDS Button has a "weak" variant, but its colors are not given, so this is the closest sourced pair.
3. **Dark mode is derived.** The DESIGN.md is light-only. `.dark` uses `#191f28` ink as the floor, plus `#232a35`, `#2a313c`, `#333d4b`, `#1f3350` and a brighter danger `#f04452`, none of which are in the DESIGN.md. The chart-2 `#6ba5fb` and chart-4 `#b0b8c1` dark values are derived too. Brand blue is unchanged.
4. **Focus keeps the shadcn 3px ring** (blue ring at 50% on fields and actions). The DESIGN.md requires a keyboard-focus state but documents no color, width or offset.
5. **Hover kept.** Hover is not documented for TDS (touch UI), and the DESIGN.md names `#2272eb` as a hover/strong blue, so the default button gets it on both hover and press. Ghost, outline, menu and secondary hover states from the generated components are left as is.
6. **Fonts.** Toss Product Sans is first in the stack but not installed or bundled, so Noto Sans / Noto Sans KR render for everyone. They are fallbacks, not the brand face.
7. **Shadows removed.** The DESIGN.md says to use flat layering, so popovers, dialogs and toasts rely on the ring/border classes already in the components.
8. **Button text sizes** other than xlarge (17px) are not documented. xs/sm use 12px/14px and default uses 16px; these are extensions.
9. **Spacing.** Component padding follows the generated components. Only the xlarge `0 20px` (`px-5`) is from the DESIGN.md. No spacing tokens were declared.
10. **Marketing geometry** (7px radius, 40/46px heights) and the `rgba(0,12,30,.8)` dark CTA were not used.

## Other notes

- `npx tsc --noEmit` reports one error, in `components/ui/spinner.tsx` line 7 (`string | number` not assignable to `number | undefined`). That file was generated by `add --all` and not touched. It is left unfixed.
- Generated components import `cn` from `"cn"` rather than `@/lib/utils`. tsc does not flag it, so it resolves, and it was not investigated.
- `npm install` printed an `npm audit` notice. It was not acted on.
- Not done: the showcase page and its coverage check (Step 6) and all browser verification (Step 7), including focus rendering and the `-translate-y-px` press effect on buttons.
