# EXTRACTION — DESIGN.md (Toss) → working table

Source: `./DESIGN.md` (YAML frontmatter + prose; Do's/Don'ts and Known Gaps read in full).
Project facts (`shadcn info`): Next.js 16.4, Tailwind v4, base `base`, style `base-maia`, icons `hugeicons`, theme file `app/globals.css` (per `components.json`; `info` also lists a stale `globals.before.css` — an untracked backup, not edited).

| Extract | Value from DESIGN.md | Status |
| --- | --- | --- |
| Canvas and ink | canvas `#ffffff`; foreground `#191f28` (strongest text); body `#4e5968` (emphasized body / neutral action text); muted `#8b95a1` (secondary text) | documented |
| Action color + states | primary `#3182f6`; primary-hover ("strong blue") `#2272eb`; on-primary `#ffffff`. States listed: loading, disabled, pressed, keyboard focus. **No** pressed/active/disabled colour values. | hover documented; others unspecified |
| Secondary actions | No `button-secondary` recipe. Only: "fill or weak" variants, "neutral action text" = body `#4e5968`, marketing weak CTA `#e8f3ff` bg / `#1b64da` text, marketing dark `rgba(0,12,30,0.8)` / `#fff`. | secondary derived; weak + dark documented (marketing surface) |
| Surfaces | surface `#f2f4f6` ("quiet neutral layer"); weak-background `#e8f3ff`. No card recipe ("Don't invent cards"). | documented / card derived |
| Lines | border `#e5e8eb` ("light divider or outline reference"). Width not stated. | documented |
| Focus | Only "keyboard focus" listed as a state. No colour, width, offset or alpha. | **unspecified** |
| Type families | Brand: Toss Product Sans (not installable, licence unresolved). Substitute: **none chosen**. Safe default (label as fallback): Noto Sans KR (Hangul) + Noto Sans (Latin). Mono: no claim. Tossface: declared-only, not UI. | documented |
| Type scale | H1 36/700/54 · H2 30/600/45 · H3 24/600/36 · H4 22/600/33 · Body 16/400/24 · Body-small 14/400/21 · Button xlarge 17/600 · marketing button 15/600 (40px) and 17/600 (46px). Tracking: none stated. | documented |
| Radius scale | 4px, 6px (small surfaces / docs chrome); buttons: small 8, medium 10, large 14, xlarge 16; marketing CTAs 7px (separate surface — never merge/average). | documented |
| Elevation | "No canonical shadow token is promoted… Use flat color layering." | none → flat |
| Control heights | Button: small 32 / medium 38 / large 48 / xlarge 56 (xlarge = documented TDS default, 20px x-padding). Marketing: 40 / 46px. Text-field heights: not given. | documented for buttons |
| Hard rules | Don't: logo blue instead of `#3182f6`; Tossface as UI font; copy docs-site colours into product tokens; merge 16px TDS radius with 7px marketing radius; invent cards/shadows/tabs/toasts/dialogs from generic fintech conventions; present a fallback face as Toss Product Sans. Do: name surfaces explicitly; keep loading/disabled/pressed/focus states; badges are status metadata, not actions; system fallback for font. | — |

Other notes
- Danger `#e42939` (destructive/error text).
- Dark mode: **not defined** (light-only). `.dark` will be derived and flagged.
- Spacing: clusters 4/6/8/16/24/32 — "no official scale", so no spacing tokens declared.
- Motion: no numeric values promoted; nothing to map.
- Known Gaps: white on `#3182f6` = 3.71:1 (< 4.5:1), recorded as measured, not adjusted.
- Charts / sidebar / popover: no recipe → derived from the roles above.

Decisions that follow
1. Keep `base-maia` as scaffolded (instructed); override its pill radius/heights via tokens + component edits.
2. Hex kept as hex (no OKLCH conversion).
3. Web app → default `Button` = TDS **medium** (38px / 10px); add `xl` = TDS xlarge (56px / 16px); `lg` = 48/14; `sm` = 32/8. Marketing 7px/40/46 geometry is not applied to any size (kept separate, per Don't).
4. Radius ladder pinned to the DESIGN values only: sm 4 · md 6 · lg 8 · xl 10 · 2xl 14 · 3xl 16 · 4xl 16.
5. Shadows all flattened.
6. New tokens: `--primary-hover`, `--weak`, `--weak-foreground`; new Button variants `weak`, `dark`.
