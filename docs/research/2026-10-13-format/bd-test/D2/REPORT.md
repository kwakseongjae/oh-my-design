# Report: Toss DESIGN.md applied to app-D2

- **App path:** `.../scratchpad/v3/apps/app-D2` (Next.js, base-maia preset, already scaffolded).
- **Dev URL:** none. No dev server was started (Step 6/7 not done).
- **Components on disk:** 61 files in `components/ui` (counted with `ls`). `npx tsc --noEmit` passes. `next build` compiled the CSS; I did not re-run the full build after the spinner fix.
- **Style:** preset `maia` was given by the user, so no style was picked. Note: DESIGN.md geometry (32–56px controls, 8–16px radii) is closer to nova/luma; Maia's pill defaults were overridden via radius pins.

## What maps where

- **Colors** (`app/globals.css`, hex kept): background `#ffffff`, foreground `#191f28`, primary `#3182f6`, new `--primary-hover` `#2272eb`, primary-foreground `#fff`, secondary = weak pair `#e8f3ff`/`#1b64da`, muted/accent = surface `#f2f4f6`, muted-foreground `#8b95a1`, border/input `#e5e8eb`, ring `#3182f6`, destructive `#e42939`. New `--body` `#4e5968` registered as `text-body`. Chart colors derived from the blue/grey/danger palette. Sidebar uses canvas with surface accent.
- **Fonts:** Toss Product Sans listed first in `--font-sans` (not loadable, unlicensed). Fallbacks installed via Fontsource: `@fontsource-variable/noto-sans` and `@fontsource-variable/noto-sans-kr`, per DESIGN.md safe defaults, as fallbacks only. Figtree removed from `app/layout.tsx`. `--font-heading` = sans. Geist Mono kept from the scaffold (DESIGN.md claims no mono).
- **Type scale:** `type-h1..h4`, `type-body`, `type-body-small`, `type-button-xl` utilities. h1–h3 sizes are clamped for mobile; no tracking (none documented).
- **Radius:** sm 4, md 6, lg 8, xl 14, 2xl 16, 3xl 16, 4xl 10; new `rounded-button-{sm,md,lg,xl}` = 8/10/14/16. `rounded-4xl` (used by every field control) is now 10px.
- **Shadows:** all Tailwind shadow tiers set to `0 0 #0000` (flat layering; no verified elevation).
- **Focus:** shadcn ring kept, ring color = primary (`ring-ring/50`). DESIGN.md gives no focus values.

## Contrast pairs under 4.5:1

- White on `#3182f6` (primary button): **3.71** — specified by DESIGN.md (Known Gaps), kept.
- `#8b95a1` on white (muted text): **3.04**; on `#f2f4f6`: **2.76** — specified by DESIGN.md.
- White on `#2272eb` (primary hover): 4.49 (just under).
- `#e42939` on white / white on `#e42939`: 4.49 (just under).
- `#1b64da` on `#e8f3ff`: 4.82 (passes). `#4e5968` on white 7.11, `#191f28` on white 16.56 (pass).
- Derived dark pairs I checked are all ≥ 4.85 (the only exception is white on a lighter hover blue, which I did not use).

## Component files edited

- `components/ui/button.tsx`: sizes per TDS: sm 32px/8px, default 38px/10px, lg 48px/14px, new `xl` 56px/16px with 17px/600 and `icon` sizes to match; label weight medium→semibold; default hover/active = `primary-hover`; removed base `rounded-4xl`. `xs` (24px, radius 6) is unchanged geometry (not in DESIGN.md).
- `h-9`/`size-9` → 38px (match default button) in: `input`, `input-group`, `select`, `native-select`, `combobox`, `toggle`, `input-otp`, `tabs`, `menubar`, `command`, `pagination`, `navigation-menu`.
- `components/ui/badge.tsx`: `rounded-4xl` → `rounded-full` so badges stay pills while 4xl became a control radius.
- `components/ui/spinner.tsx`: typecheck fix (omit `strokeWidth` from svg props) for a pre-existing generated-file error.
- `app/layout.tsx`: removed Figtree.

## Deliberate deviations / decisions

- **Dark mode is derived** (DESIGN.md is light-only): bg `#0f1722`, card `#17212e`, secondary `#1b2c44`/`#8dbcff`, border `#2a3442`, danger `#f04452`; primary unchanged.
- **Radius for cards/dialogs (14px) and menus (8px)** are borrowed from button radii; DESIGN.md says not to invent cards/dialogs, and gives no radius for them.
- **Badge pill** is unspecified in DESIGN.md; kept pill as extension.
- **Field/control height 38px** is derived from the default (medium) button; DESIGN.md gives no input height. Sidebar rows (`h-9`) and questionnaire were left alone.
- **Shadows removed everywhere**, including popovers; separation relies on ring/border and overlays.
- **Hover** kept on ghost/outline/secondary buttons and menu items although the spec only documents primary hover.
- **Marketing variants** (7px radius, 40/46px, `#e8f3ff` CTA) were not added as separate variants; only the weak pair is mapped to `secondary`. TDS Mobile geometry is the default.
- **Loading state** for buttons is not implemented (no variant added); disabled uses shadcn's 50% opacity.
- Steps 6 and 7 (showcase page, browser verification) not performed as instructed. `globals.before.css` and `EXTRACTION.md` left in place.
