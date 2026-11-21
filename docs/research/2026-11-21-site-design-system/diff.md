# oh-my-design's own DESIGN.md: the public file today vs the draft

Draft: `web/public/design.md` on branch `feat/site-design-md` (from `feat/site-design-system` 9c8aae83), 2026-11-21.
"Public file today" is the same path at 9c8aae83, which is what https://oh-my-design.kr/design.md serves.
Line numbers are in this branch. Production measurements come from `node scripts/site-audit/controls.mjs` (inventory 2026-11-21, 14 pages × 1440 and 390).

## Value by value

| # | What | Public file today | Draft | Draft value comes from |
|---:|---|---|---|---|
| 1 | UI font (sans) | Geist via next/font/google (`--font-geist-sans`), fallback system-ui | Wanted Sans Variable v1.0.3, self-hosted; Hangul slices only under /ko | web/src/styles/brand-a.css:87, web/src/app/globals.css:19, web/src/styles/wanted-sans-latin.css:1, web/src/styles/wanted-sans-cjk.css:4 |
| 2 | Mono font | Geist Mono (`--font-mono`) | Geist Mono is Tailwind `font-mono`; brand components use the platform mono stack `--sq-f-mono` | web/src/app/globals.css:20, web/src/app/fonts.ts:28, web/src/styles/brand-a.css:92 |
| 3 | Korean text outside /ko | not stated | falls to the platform Korean face (not the brand face) | web/src/styles/brand-a.css:89, web/src/styles/wanted-sans-cjk.css:4 |
| 4 | JA / TC faces | not stated | Noto Sans JP / Noto Sans TC on their roots | web/src/styles/brand-a.css:85 (comment), web/src/app/fonts.ts:15 |
| 5 | OpenType features | `cv01`, `cv11` | unchanged: `cv01`, `cv11` | web/src/app/globals.css:202 |
| 6 | Primary (accent) | violet-blue `oklch(0.55 0.22 275)` ≈ `#7c5cfc` | Iris `#6749e2` (`--sq-p600`) | web/src/styles/brand-a.css:34 |
| 7 | Where the accent goes | every interactive element; it is `--primary` and `--ring` | main action, user chat bubble, active step, selected states only | web/src/styles/brand-a.css:8 |
| 8 | shadcn `--primary` | = violet-blue | = ink (`#13131a`); `text-primary` is ink | web/src/app/globals.css:78, web/src/styles/brand-a.css:47 |
| 9 | Primary hover / press | `bg-primary/80` | `#5437c1` / `#402697` | web/src/styles/brand-a.css:35, web/src/styles/brand-a.css:36, web/src/components/brand-a/item.css:37, web/src/components/brand-a/item.css:38 |
| 10 | Focus ring | `ring-3 ring-ring/50` in violet-blue | 2px outline in `#6749e2`; Iris 400 rejected (2.57:1) | web/src/styles/brand-a.css:63, web/src/styles/brand-a.css:16, web/src/components/brand-a/item.css:53 |
| 11 | Background | `oklch(0.99 0.002 275)` ≈ `#fdfcff` | paper `#ffffff` | web/src/styles/brand-a.css:50 |
| 12 | Foreground | `oklch(0.13 0.02 275)` ≈ `#16161d` | ink `#13131a`; ink-2 `#5a5a63` | web/src/styles/brand-a.css:47, web/src/styles/brand-a.css:44 |
| 13 | Border / input | `oklch(0.91 0.008 275)` ≈ `#e5e3ea` | guide `#d3d3db` | web/src/styles/brand-a.css:41, web/src/app/globals.css:97 |
| 14 | Neutral fill (secondary / muted / accent) | three OKLCH values 0.955–0.965 | one cell `#f3f3f8` | web/src/styles/brand-a.css:39, web/src/app/globals.css:88 |
| 15 | Destructive | `oklch(0.58 0.22 25)`, rendered tinted | unchanged `oklch(0.58 0.22 25)`; the one shadcn value outside `--sq-*` | web/src/app/globals.css:95 |
| 16 | Status colours | not stated | ok `#14733f`, warn `#8f5200`, err `#b3261e`; text and icons only | web/src/styles/brand-a.css:73 |
| 17 | Terminal field | not stated | `#1d1a2e` / `#ecebf5` / `#a9a6bd` | web/src/styles/brand-a.css:65 |
| 18 | Selection | not stated | `#d8d8ff` (Iris 200) | web/src/app/globals.css:263 |
| 19 | Colour modes | light and dark with parity; dark primary `oklch(0.7 0.2 275)` | light only, `color-scheme: light`; nothing sets `.dark` | web/src/styles/brand-a.css:22, web/src/app/globals.css:199, web/src/app/globals.css:119 |
| 20 | v2 landing system | electric indigo `#5546ff` on `#0a0a0f`, glow `#8b7dff`, accent `#a89cff` (landing-v2/tokens.ts) | dropped: the file and route are gone | no counterpart (see list below) |
| 21 | Contrast pairs | one pair: v2 text on v2 bg ≥ 4.5:1 | 10 pairs computed from hex (e.g. white on Iris 5.79, ink on paper 18.49) | web/src/styles/brand-a.css:7 (comment lists the pairs; ratios recomputed for this draft) |
| 22 | Elevation | `ring-1 ring-foreground/10`, no shadows | panels: one shadow `0 1px 2px rgba(20,20,60,.04), 0 16px 40px -16px rgba(40,30,120,.16)`, no outline | web/src/styles/brand-a.css:71 |
| 23 | Motion | 0.6–0.7s easeOut, fade-up / fade-blur-up | fade-up / fade-blur-up 0.6s ease-out; hover fills 0.15s | web/src/app/globals.css:232, web/src/app/globals.css:248, web/src/components/brand-a/item.css:18 |
| 24 | Reduced motion | required; global CSS + MotionConfig | unchanged: required, global CSS rule | web/src/app/globals.css:217 |
| 25 | Base / control radius | 10px (`--radius: 0.625rem`) | 14px (`--sq-r-ctl`); `--radius` points at it, so `rounded-lg` = 14px | web/src/styles/brand-a.css:108, web/src/app/globals.css:107, web/src/app/globals.css:53 |
| 26 | Radius scale | 6 / 8 / 10 / 14 / 18 / 22 / 26 (× multiples of 10) | inner 6 · control 14 · pill 999 · card 20 · bubble 22 · panel 28 | web/src/styles/brand-a.css:107–112 |
| 27 | Action radius | `rounded-lg` 10px on buttons | pill | web/src/styles/brand-a.css:109, web/src/components/brand-a/item.css:34 |
| 28 | Card radius | 14px (`rounded-xl`) | 20px | web/src/styles/brand-a.css:110 |
| 29 | Control heights | default 32 · xs 24 · sm 28 · lg 36 · icon 32 (ui/button.tsx) | 32 / 40 / 48; 40 default, 44 on a phone (approved 2026-11-21; 40/44 applied on the item page) | web/src/components/brand-a/item.css:34, web/src/components/brand-a/item.css:197 |
| 30 | Control label type | `text-sm` 14 / 500 | 14/600 · 15/650 · 16/650 (15/650 applied on the item page actions) | web/src/components/brand-a/item.css:34 (15px, `--sq-fw-strong` 650 at web/src/styles/brand-a.css:104) |
| 31 | Page title | no ramp; Tailwind scale per component | 40/760; 32 at 900–1279, 28 below 900 (item page) | web/src/components/brand-a/item.css:28, web/src/components/brand-a/item.css:44, web/src/components/brand-a/item.css:51, web/src/styles/brand-a.css:103 |
| 32 | Landing title | not stated | 60/760, home and skill landing only (approved, not applied in code) | owner approval 2026-11-21 (brief); no code line |
| 33 | Section heading | not stated | 26/760; 22 on a phone approved, item page uses 23 | web/src/components/brand-a/item.css:61, web/src/components/brand-a/item.css:200 |
| 34 | Body / reading | 14px `text-sm` body, 16px card title, 12px small label | 17px reading body on the item page (16 on a phone) | web/src/components/brand-a/item.css:68, web/src/components/brand-a/item.css:208 |
| 35 | Older type tokens still in code | not stated | h1 clamp(44px,5.4vw,82px), h2 clamp(28px,3.2vw,44px), small 13.5px, weights 780/760/650 | web/src/styles/brand-a.css:95–104 |
| 36 | Layout | not stated | max 1360, gutter 40 (16 ≤900), header 68 (58 ≤900) | web/src/styles/brand-a.css:116, web/src/styles/brand-a.css:117, web/src/styles/brand-a.css:118, web/src/styles/brand-a.css:124, web/src/styles/brand-a.css:125 |
| 37 | Item page breakpoints | not stated | title + actions in one row from 900; two panes from 1024 | web/src/components/brand-a/item.css:45, web/src/components/brand-a/item.css:183 |
| 38 | Spacing | Tailwind 4px base, no tokens | no spacing scale (declared `verified-absent` in the omitted claim) | brand-a.css has no spacing token (whole file) |
| 39 | Safe areas, scrollbar, iOS 16px inputs | stated (incl. dark scrollbar) | kept, without dark | web/src/app/globals.css:322, web/src/app/globals.css:332, web/src/app/globals.css:327 |
| 40 | Primary tasks | install oh-my-design; hand DESIGN.md and the first prompt to terminal and chat | find a company → item page → Copy DESIGN.md / Download | AGENTS.md "Product surface ownership" (first prompt left the item page 2026-10-20) |

## Statements in the public file with no counterpart in the code

1. `web/src/components/landing-v2/tokens.ts` and the `/v2` landing: the folder does not exist. Its electric-indigo values (`#5546ff`, `#3a2dd6`, `#8b7dff`) appear nowhere in `web/src`; `#0a0a0f` and `#a89cff` survive only in the blog social image (`web/src/app/og/blog/route.tsx:65,71`).
2. The ten `color.v2-*` semantic tokens and the contrast pair "v2-text-on-light on v2-bg-light".
3. `color.dark-marquee-fade` `#0f0e15`: not in `web/src`. (`--marquee-fade: #faf9ff` still exists, `globals.css:253`.)
4. The header comment quoted as `globals.css`'s design intent ("Radius: 0.625rem (10px) — friendly but professional / Philosophy: …"): not in the file.
5. `--primary` / `--ring` = `oklch(0.55 0.22 275)`: `--primary` is now ink and `--ring` Iris (`globals.css:78,99`). `#7c5cfc` remains only in a comment (`globals.css:65`) and in the reference social image (`web/src/app/og/reference/route.tsx:60,82,84`).
6. The whole OKLCH surface and neutral palette (background, foreground, card, secondary, muted, accent, border and input values tinted to hue 275), and every dark-mode value (dark primary `oklch(0.7 0.2 275)`, dark background, card, border, input, muted foreground, dark scrollbar `oklch(0.4 0 0 / 0.3)`). Nothing sets `.dark` (`globals.css:119`).
7. "Geist … is the UI and heading face": `--font-sans` is `--sq-f-en` (Wanted Sans) (`globals.css:19`). Geist sans is still loaded by the (en) and (ko) root layouts with `preload: false` and used inline once (`what-is-design-md/page.tsx:128`).
8. `--radius: 0.625rem` and the 6–26px scale: `--radius` is `var(--sq-radius)` = 14px (`globals.css:107`), so the same multipliers now give 8.4 / 11.2 / 14 / 19.6 / 25.2 / 30.8 / 36.4px.
9. Primary task "hand DESIGN.md and the first prompt to the intended project terminal and coding-agent chat": the first prompt left the item page on 2026-10-20 (AGENTS.md, product surface ownership).
10. "0.6–0.7s easeOut entrances": the entrance animations are 0.6s (`globals.css:232,248`); 0.7s appears only as an animation *delay* (`globals.css:240`).

Still true but left out of the draft because they describe the shadcn layer rather than the brand system: `ui/button.tsx` sizes (`h-8`, `h-6`, `h-7`, `h-9`; used by `component-modal.tsx`, `ui/dialog.tsx`, `ui/sheet.tsx`), the `ring-1 ring-foreground/10` card and dialog edge (`ui/card.tsx:15`, `ui/dialog.tsx:56`), the `h-5` pill badge (`ui/badge.tsx:8`), CardTitle 16/500 (`ui/card.tsx:41`), Base UI + CVA (`web/package.json:44,48`), and `MotionConfig reducedMotion="user"` (`components/theme-provider.tsx:15`). The draft names `ui/button.tsx`'s 24–36px sizes as not yet on the approved scale.

## Where the code's own comments and the measurement differ

- `brand-a.css:14` says ink on paper is 18.6:1; computed from the hex values it is 18.49:1. The draft states 18.49.
- `brand-a.css:73` says the status colours are "≥5.4:1 on paper and cell"; ok `#14733f` on cell `#f3f3f8` is 5.34:1. The draft states 5.34.
- The approved phone section heading is 22px; the item page uses 23px (`item.css:200`). The draft states both.
- The approved control label at 40px is 15/650; the item page's crumb, external link and Share are 15/600 (`item.css:12,16,18`). The draft names only the two actions as applied.

## Production vs this branch

The audit reads production. On production the item page still shows a 66/780 title, 56px actions and 17/700 action labels; the 40/760 title and 40px actions are in `item.css` on `feat/site-design-system` and not yet deployed. The draft describes the item page as it is on that branch, so it must merge with or after it.
