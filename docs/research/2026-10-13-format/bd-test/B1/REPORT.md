# REPORT — Toss DESIGN.md applied to app-B1

Scope: Steps 3, 4, 5 and this report only. No dev server, no browser, no Step 6 (design-system page) or Step 7 (verify). Working table: `EXTRACTION.md`.

- **App path:** `/private/tmp/claude-501/-Users-kwakseongjae-Desktop-projects-oh-my-design/7924e40f-6ce3-49da-b96e-10a398a1144e/scratchpad/v3/apps/app-B1`
- **Dev URL:** none (server not started, by instruction)
- **Components on disk:** 61 `.tsx` files in `components/ui` (`ls components/ui/*.tsx | wc -l`)
- **Style:** `base-maia` as scaffolded (not chosen by me). Its pill radii and 36px controls conflict with Toss (38/48/56px controls, 8–16px radii, no pills); fixed through tokens and component edits below.

## What maps where

**Colors** (`app/globals.css`, hex kept)
- `--background`/`--card`/`--popover` `#ffffff`; `--foreground` and the card/popover foregrounds `#191f28`.
- `--primary` `#3182f6`, `--primary-foreground` `#fff`. New `--primary-hover` `#2272eb`. Hover only: DESIGN.md gives no pressed/active colour.
- `--muted` and `--accent` `#f2f4f6` (surface); `--muted-foreground` `#8b95a1`; `--accent-foreground` `#191f28`.
- `--border`/`--input` `#e5e8eb`; `--destructive` `#e42939`.
- New `--weak` `#e8f3ff` / `--weak-foreground` `#1b64da` (marketing CTA pair), registered in `@theme inline`.
- `--secondary` `#f2f4f6` / `--secondary-foreground` `#4e5968`. **Derived**: DESIGN.md has no secondary button; I used its "neutral action text" body colour on the surface.
- `--ring` `#3182f6`. **Derived**: DESIGN.md names "keyboard focus" as a state but gives no values.
- `--chart-*` and `--sidebar-*` derived from the blue and grey roles; DESIGN.md has no recipes for them.

**Fonts**
- Toss Product Sans cannot be installed (licence unresolved) and DESIGN.md names no substitute. I installed the safe defaults it names: `@fontsource-variable/noto-sans` and `@fontsource-variable/noto-sans-kr`.
- Stack: `"Toss Product Sans", "Noto Sans Variable", "Noto Sans KR Variable", -apple-system, system-ui, sans-serif`. Noto is a **fallback**, not Toss Product Sans. The brand face is listed first only so it applies if the user has it locally.
- `--font-heading` points at the sans. No serif. Mono is untouched (Geist Mono from `layout.tsx`); DESIGN.md makes no mono claim.
- `app/layout.tsx`: removed Figtree. It set `--font-sans` on `<html>` and would have beaten the CSS value.

**Type scale:** `type-h1` (36/700, clamped down to 28px), `type-h2` (30/600, clamped to 24px), `type-h3`, `type-h4`, `type-body`, `type-body-small`, `type-button-xlarge` (17/600). Line height is 1.5, the documented px/size ratio. No tracking is added since none is documented.

**Radius** (pinned in `@theme inline`): sm 4 · md 6 · lg 8 · xl 10 · 2xl 14 · 3xl 16 · 4xl 16. Every value is from DESIGN.md. The old pill (`4xl`) now caps at 16px, so badges (20px tall) still read as pills.

**Shadows:** `--shadow-2xs` through `--shadow-2xl` are all `0 0 #0000` in `@theme`, because DESIGN.md says "flat colour layering" and promotes no shadow token.

**Focus:** DESIGN.md documents no ring or outline, so the shadcn default ring is kept, recoloured to `--ring`. No outline rule and no alpha change.

**Dark mode:** DESIGN.md is light-only. `.dark` is **derived**, using Toss's usual dark greys (`#17171c`, `#202027`, `#2c2c35`), which are not in DESIGN.md. Primary stays `#3182f6`.

## Contrast pairs under 4.5:1

| Pair | Ratio | Note |
| --- | --- | --- |
| `#ffffff` on `#3182f6` (primary button, light and dark) | 3.71 | In DESIGN.md Known Gaps; kept as measured. |
| `#3182f6` as text on white (`link` variant) | 3.71 | Follows from the same primary. |
| `#8b95a1` on `#ffffff` (muted text) | 3.04 | DESIGN.md colour. |
| `#8b95a1` on `#f2f4f6` | 2.76 | DESIGN.md colour on DESIGN.md surface. |
| `#e42939` on white | 4.49 | Just under. |
| `#e42939` on its 10% wash (`destructive` variant) | 3.87 | The shadcn wash recipe; DESIGN.md has no danger button. |
| `#ffffff` on `#2272eb` (hover) | 4.49 | Just under; better than the resting state. |

Passing: foreground on canvas 16.56, secondary pair 6.45, weak pair 4.82. Dark: foreground 16.2, muted 5.88, weak 4.7, destructive 4.81.

## Component files edited

- `button.tsx`
  - `rounded-4xl` and 500 weight replaced by per-size radii and `font-semibold`.
  - Sizes follow TDS: sm 32/8px, default 38/10px, lg 48/14px, new `xl` 56/16px with 20px x-padding. New `icon-xl`.
  - `default` hover now uses `primary-hover`.
  - New variants `weak` and `dark`, the two marketing recipes. Only their colours are applied; the 7px/40/46 marketing geometry is deliberately not blended in.
- `input.tsx`, `input-group.tsx`, `native-select.tsx`, `select.tsx`, `combobox.tsx` (chips and content search input), `command.tsx`, `questionnaire.tsx`, `toggle.tsx`, `tabs.tsx`, `menubar.tsx`, `navigation-menu.tsx`: control height 36 to 38px (`h-9` → `h-9.5`) to match the default button. Fields moved from pill to `rounded-xl` (10px). `toggle` lg is now 48px.
- `toggle-group.tsx`: outline group radius `4xl` → `xl`.
- `sidebar.tsx`: default menu button height to 38px.
- `app/globals.css`, `app/layout.tsx`: described above.
- `package.json` and `package-lock.json`: added the two Fontsource packages.

## Deliberate deviations and judgement calls

- Default `Button` is TDS **medium** (38px), not xlarge. DESIGN.md calls xlarge the mobile default but says to keep web controls smaller; this is a web app. `xl` is available.
- Button font sizes: default 15px, lg 16px, sm and xs unchanged. Only 17px (xlarge) and the marketing 15px are documented, so these are local extensions.
- Field and Toggle/Tabs/Menubar radius of 10px follows the medium button. DESIGN.md gives no text-field radius or height.
- `xs` buttons (24px) are not in DESIGN.md. They are kept at 6px radius, the documented small-surface value.
- Dialogs, popovers, cards and toasts keep their structure with radii from the scale (10–16px) and no shadows. Because of that they rely on `ring-1` and overlays for separation. This follows "don't invent cards/shadows" but may look flat.
- Ghost/menu hover kept, since the spec is silent.
- `rounded-full` (avatars, switches, radios) and `rounded-[2px]` (chart legend swatches) are untouched. The latter is outside the scale. `checkbox` keeps `rounded-[6px]`, which is in the scale.
- Shadcn's `outline-ring/50` base rule, `bg-input/30` field fills and `ring-[3px]` focus ring were left as shipped.

## Not done / open

- `npx tsc --noEmit` and `next build` fail on one generated file I did not touch: `components/ui/spinner.tsx(7,41)`, `strokeWidth={2}` rejected by `HugeiconsIcon` ("Type 'string | number' is not assignable to type 'number | undefined'"). The CSS and everything else compile. This predates my edits and is Step 2 territory.
- Step 2's provider wiring (`TooltipProvider`, `Toaster`) is not in `app/layout.tsx`; I did not add it.
- Step 6, Step 7 and the hard-rule checks in a browser were not run. I checked by grep that `rounded-4xl` is gone from fields and buttons and that all remaining radii come from the scale.
- `globals.before.css` (untracked backup) was left alone.
