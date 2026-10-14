# REPORT — Toss DESIGN.md applied to the shadcn app

Steps 3, 4, 5 and Report Back only. No dev server was started, no browser was opened, and Steps 6 and 7 were not done.

## App
- Path: `/private/tmp/claude-501/-Users-kwakseongjae-Desktop-projects-oh-my-design/7924e40f-6ce3-49da-b96e-10a398a1144e/scratchpad/shadcn-run/app` (Next.js 16, base `base`, style `maia`, icons `hugeicons`).
- Dev URL: none, since no server was run.
- Components on disk: **61** `.tsx` files in `components/ui` (counted with `ls`).
- Style: fixed by the user (`--preset maia`), not re-picked.

## What maps where (`app/globals.css`)
- **Colors**, kept as hex:
  - `background`/`card`/`popover` `#ffffff`.
  - `foreground`, `card-foreground` and `popover-foreground` `#191f28`.
  - `primary` `#3182f6` with `primary-foreground` `#ffffff`.
  - `secondary` is the TDS weak pair, `#e8f3ff` / `#1b64da`.
  - `muted` and `accent` `#f2f4f6`.
  - `muted-foreground` `#8b95a1`.
  - `border` and `input` `#e5e8eb`.
  - `destructive` `#e42939`.
  - `ring` `#8ac0ff`.
  - `chart-1..5` come from the palette: blue500, green500, orange500, purple500, teal500.
  - Sidebar tokens are grey50, grey100 and blue500.
- **Extra tokens** registered in `:root` and `@theme inline`:
  - `--primary-hover` `#2272eb`.
  - `--body` `#4e5968`.
  - `--surface` `#f2f4f6`.
  - `--weak` and `--weak-foreground`.
  - `--focus-ring-soft` `#b8d9ff`.
  - All eight 50–900 scales as `--color-grey-50` … `--color-purple-900`. Blue, red, orange, yellow, green, teal and purple override Tailwind's same-named defaults 50–900. Tailwind's 950 steps are unchanged.
- **Fonts:**
  - Stack is `"Toss Product Sans", "Noto Sans Variable", "Noto Sans KR Variable", system`.
  - Substitute: none. The DESIGN.md chose none and says Toss Product Sans can't be redistributed.
  - Noto Sans and Noto Sans KR are the documented safe default. They are a fallback, not the brand face.
  - Installed `@fontsource-variable/noto-sans` and `@fontsource-variable/noto-sans-kr`.
  - `--font-heading` stays on the sans stack.
  - The mono font is untouched (Geist Mono, from `layout.tsx`).
- **Radius**, pinned in `@theme inline`:

  | Token | Value | DESIGN.md step |
  | --- | --- | --- |
  | `sm` | 4px | sm |
  | `md` | 6px | md |
  | `lg` | 8px | button-small |
  | `xl` | 10px | button-medium |
  | `2xl` | 14px | button-large |
  | `3xl` | 16px | button-xlarge |
  | `4xl` | 16px | largest step; pills are capped here |

  The 7px marketing radius exists only inside the two marketing button variants.
- **Shadows:** every tier from `2xs` to `2xl` is set to `0 0 #0000`, because the DESIGN.md says "use flat color layering".
- **Focus:** an unlayered rule on buttons, links and `role` tab/checkbox/radio/switch/slider gives `0 0 0 1px #8ac0ff, 0 0 0 3px #b8d9ff`. Fields keep the stock `ring-ring/50` ring, which is `#8ac0ff` at 50% (about `#c4e0ff` on white). The DESIGN.md documents focus for buttons only.
- **Type scale:** `type-t1…t7`, `type-st1…st13` and `type-doc-h1…h4`, `type-doc-body`, `type-doc-body-small`, as `@utility` rules in px. The t*/st* utilities carry no weight, because the DESIGN.md gives none. The TDS note says product code shouldn't hard-code sizes, since text follows the phone's larger-text setting. These are web px, so that behavior isn't reproduced.
- **Dark mode:** derived (see deviations).

## Component files edited (Step 5)
- `button.tsx`:
  - Sizes: sm 32px/8px, default 38px/10px, lg 48px/14px, and new `xl` 56px/16px (17px text) with `icon-xl`.
  - `xs` and `icon-xs` kept at 24px with the 6px `md` radius. This is an extension, not in the DESIGN.md.
  - Weight is 600 on all sizes.
  - Press is `scale-[0.96]`, replacing the `translate-y-px` nudge.
  - Hover on `default` is removed, as the DESIGN.md states.
  - New variants `marketing` (weak fill, 40px, 7px, 15px/600) and `marketing-dark` (`rgba(0,12,30,.8)`, 46px, 7px, 17px/600), implemented with `compoundVariants` so their geometry beats the size classes.
  - `secondary` now renders the weak pair via the tokens.
- Control heights moved from 36px to 38px (`h-9` → `h-9.5`, `size-9`, `min-w-9`, `min-h-9`) together in `input`, `input-group`, `select`, `native-select`, `combobox`, `command`, `toggle`, `input-otp`, `tabs`, `menubar`, `pagination`, `navigation-menu`, `questionnaire` and `sidebar` (menu button).
  - Toggle `lg` and button `lg` went from 40px to 48px.
  - The 32px `sm` heights were already right.
- Radius `rounded-4xl` → `rounded-xl` (10px, matching the 38px button) in `input`, `select`, `native-select`, `menubar`, `questionnaire` (input), `tabs` (list), `toggle`, `input-group` (root), `input-otp` (container and end slots) and `combobox` (chips).
  - Left on `rounded-4xl`, which is now 16px: badge, dialog, alert-dialog, drawer, command, slider, tooltip kbd, button-group, and combobox's small chip-remove control.

## Contrast pairs under 4.5:1
Ratios were computed with the WCAG formula.

| Pair | Ratio | Source |
| --- | --- | --- |
| White on `#3182f6` (primary button, light and dark) | **3.71:1** | The DESIGN.md itself records this in Known Gaps; left as specified. |
| `#8b95a1` muted text on white | **3.04:1** | DESIGN.md "Muted". Applies to descriptions and placeholders. |
| `#8b95a1` muted text on `#f2f4f6` | **2.76:1** | Same. |
| `#e42939` danger on white | **4.49:1** | DESIGN.md danger; just under AA. |
| `#8ac0ff` focus ring on white | 1.90:1 | Below the 3:1 non-text target. The DESIGN.md spec is kept. |

Passing: weak pair `#1b64da` on `#e8f3ff` 4.82; body `#4e5968` on white 7.11; white on the marketing dark fill about 15.6. In the derived dark theme: `muted-foreground` on background 8.26, on card 5.48; weak pair 6.15; destructive 5.53.

## Deliberate deviations and judgment calls
1. **Default button size is 38px, not 56px.** The DESIGN.md calls xlarge the documented default for TDS Mobile. A 56px default would make every field, toolbar and table row very tall in a web app. So the four TDS sizes map to sm/default/lg/xl, with default = medium, and `xl` is the TDS primary-action size. Say if the default should be `xl`.
2. **No hover on the default button.** The DESIGN.md says hover gives no change, so that's what is built. `--primary-hover` exists as a token, but nothing uses it.
3. **Ghost, outline, secondary and menu hovers were kept**, as the skill instructs, even though the DESIGN.md omits them.
4. **Dark mode is derived** from the grey and blue scales: background grey900, card, popover and muted grey800, secondary blue900 with blue100 text, ring blue400. The DESIGN.md is light-only, so none of this is verified Toss.
5. **Card, dialog, tab, toast and badge radii and fills are inherited from the shadcn components**, with the radius remapped onto the scale. The DESIGN.md says not to invent these, and defines none.
6. **Flat shadows:** menus, popovers and dialogs now rely only on their existing `ring-1` outline and the dialog backdrop. Floating layers may look weaker.
7. **Font weight 600 is applied to all button sizes**, though the DESIGN.md documents it only for xlarge and marketing.
8. **Tailwind palette override** (see Colors above).
9. `app/layout.tsx` still loads Figtree and Geist Mono through `next/font`. Step 4 says to edit only the CSS file. Figtree is now unused, because `--font-sans` is inlined from the theme. Removing it from the layout is a safe follow-up.

## Checks run
- `npx tsc --noEmit` reports one error, in generated `components/ui/spinner.tsx` (7,41): `Type 'string | number' is not assignable to type 'number | undefined'`, on the `HugeiconsIcon` props. It comes from `add --all`, not from these edits, and I did not investigate or fix it. No other errors.
- Not run: dev server, browser checks (Step 6, Step 7), showcase page, `showcase-coverage.mjs`.
- Generated files import `cn` from the npm package `"cn"` rather than `@/lib/utils`. This is how the CLI wrote them and it typechecks, so I left it alone.
