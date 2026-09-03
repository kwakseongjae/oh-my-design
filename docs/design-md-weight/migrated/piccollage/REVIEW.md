# piccollage — T2-1 wave-27-form independent review (A/C/D only)

Rulebook v12. F3 (B2a·E2) not judged except item 6 (F2 list freshness after F3). Files confirmed with `find` before grep: migrated `{DESIGN.md,provenance.md,migration-log.md,audit-log.md}`, source `web/references/piccollage/DESIGN.md`, sibling `web/references/piccollage/.verification.md` (direct path; dotfile). Counts: `grep -oF -- <pat> <file> | wc -l` in bash `set +e`. Empty pipeline = dest 0 (not zsh `no matches found`). `grep -c` not used. Absence claims in this file are about those six paths, not about this review (E2d).

Portable DESIGN SHA-256 `ed06d93b2f13c607ec3b3bd2e0cf3baf5cb65fb7e79a0baa5634e7078ac1f508` (matches F3 destination SHA); source `022e758cc9cf08c38f8814eb8e5d075787f95296ac8f0586035901a8d3e7e051`; sibling `8fba2eb3d4d844a3bb6e0ce876570763b8d1c727e4f8c39de3bb3a20b0b74a83`. Lines/words: DESIGN 517 / 7,316; provenance 204 / 2,774; source 320 / 2,990; sibling 34 / 342.

`node scripts/check-yaml-use-landing.mjs piccollage` → use 11/11 OK. `node scripts/check-limiter-ledger.mjs piccollage` → 본문 32 / 원장 32 (163–194) 1:1 OK (ledger check only; B2a quality is F3).

## Verdict

**PASS**

No A/C/D value-series defect on the current three artifacts. YAML `tokens.*` keys sit on their own paths (spacing 16 is not rounded.lg 16). YAML `use` 11/11. Destination-class and no-commit controls close loading and error together. Persona identifiers and §13 motivations are dest 0 on DESIGN/provenance/log. Sibling-only samples stay out of the portable body.

## 1 A1 key paths (YAML `tokens.*` → portable DESIGN)

Source YAML is nested (dotted path SRC 0 by construction). Portable DESIGN names each color/spacing/shape/shadow/component path; values sit on that path, not on another scale's shared numeral (easywallet trap). Type-role dotted paths `tokens.typography.display` / `section-title` / `body` / `label` are DESIGN dest 0 as strings (only `tokens.typography.sub-headline` dest 1, used to unmerge the mobile 25px row); the Display/Section/Sub/Body/Label table at `:234–240` still holds YAML size/weight/lineHeight/tracking/`use` on those roles, not on a spacing step.

| path | DES | PRO | value on that path |
|---|---:|---:|---|
| tokens.colors.primary / teal-nav / teal-footer / teal-border | 2/1/1/1 | — | `#4fc3c4` / `#b7e1da` / `#7ad2c3` / `#2db59e` |
| tokens.colors.hero-bg / nav-bg / surface / surface-hover / divider | 2/1/6*/3/1 | — | `#fbf2eb` / `#f5f4ef` / `#ece9df` / `#e8e4d9` / `#d9d2bf` |
| tokens.colors.body / body-secondary / accent-pink / accent-yellow | 6*/3/1/1 | — | `#292929` / `#4d4d4d` / `#f85482` / `#ffcf3d` |
| tokens.colors.gradient-1 … gradient-4 / on-primary | 1/1/1/1/3 | — | `#8235b8` / `#974dcb` / `#ef4967` / `#ee604d` / `#ffffff` |
| tokens.typography.family.sans / family.display | 2/2 | 1/1 | Poppins / Zilla Slab |
| tokens.spacing.xs … section | 2/3/2/4/5/6/1/2 | — | unitless 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 |
| tokens.rounded.sm / md / lg / full | 2/2/4/1 | — | unitless 4 / 8 / 16 / 9999 |
| tokens.shadow.ambient / card / thumbnail | 1/4/2 | — | three YAML writings dest ≥1 |
| tokens.components.button-primary / button-nav / icon-button / nav-item / card / thumbnail | 2/6/3/5/3/2 | — | each record is its own block |

\* `tokens.colors.surface` / `tokens.colors.body` counts include `surface-hover` / `body-secondary` as substring; the unprefixed keys are still named as rows at `:96` / `:102`.

Hexes on those paths (DESIGN): `#4fc3c4` 5, `#4FC3C4` 7, `#b7e1da` 5, `#7ad2c3` 3, `#2db59e` 5, `#fbf2eb` 3, `#FBF2EB` 5, `#f5f4ef` 3, `#ece9df` 6, `#e8e4d9` 8, `#d9d2bf` 5, `#292929` 5, `#4d4d4d` 5, `#f85482` 2, `#ffcf3d` 2, `#8235b8` 1, `#8235B8` 6, `#ffffff` 10, `#E8E8E8` 4, `#e2ddcf` 2, `#f19daf` 2, `#298e7d` 2, `#AB7624` 2. OUT hex not in SRC: none. `[FILL IN]` DESIGN dest 0.

A1a: YAML unitless line heights stay ratios — `1.12` DES 2 / SRC 1; `1.4` DES 3 / SRC 1 — not rewritten as a replacement px. §3 `line-height 67px` DES 1; `line-height 35px` DES 1. Tracking YAML `-0.28` DES 3 / SRC 2 beside §3 `-0.28px` DES 1 / SRC 1.

A1b: `Primitive type: \`button\`` DES 3, `tab` 1, `card` 2 (= YAML `type` 3/1/2). Top Nav `Primitive type: not in the token set` DES 1.

A1c: `prose-derived` DES 2 / PRO 5; `tokens.extracted` DES 1; `2026-06-09` DES 1 / PRO 4; `components_harvested` DES 0 / PRO 2 (sidecar); `ds.type` SRC 0 (absence recorded, not filled). `logo.type: favicon` DES 1 / PRO 1; `s2/favicons` DES 1 / PRO 1.

Same-number unmerge in body (`DESIGN.md` `:136` / `:149` / `:298` / `:404`): `tokens.spacing.xs: 4` ≠ `tokens.rounded.sm: 4`; `tokens.spacing.sm: 8` ≠ `tokens.rounded.md: 8`; `tokens.spacing.base: 16` ≠ `tokens.rounded.lg: 16` ≠ body type 16; `tokens.spacing.lg: 24` ≠ sticky `bottom: 24px`; `tokens.spacing.xl: 32` ≠ nav-download height 32px ≠ mobile hero 32px. `#ffffff` on-primary unmerged from Feature Card fill. `#e8e4d9` unmerged across surface-hover / card border / icon hover.

YAML `use` 5 type + 6 component = 11/11 DES ≥1 (script + hand). Font shorthands: `14px / 700` DES 2 / SRC 2; `14px / 500` DES 4 / SRC 4. Component YAML fields land as rows on their own blocks (button-primary YAML sub-block 289–296; button-nav token-set 321–327; icon-button 350–353 with no invented fg/padding/font; nav-item 374–379; card 400–403; thumbnail 412–414 with no invented bg).

## 2 Unique facts

`270 million` SRC 2 / DES 4. `Founded in 2011` 1/1. `Cardinal Blue Software, Inc.` 2/3. `Taipei` 1/2. `tens of millions` 1/2. `Asia and North America` 1/3. `OnBeat` 1/2. `BEAM` 1/2. `Noodle` 1/2. `MemeMe` 1/2. `Create, Celebrate, Connect.` 1/3. `Creative AI` 1/2. `Make the World Fun & Creative.` 1/3. `Create & Celebrate.` 1/1. `Try PicCollage now!` 1/1. `Tap to add your first photo` 1/2. `Couldn't load — tap to retry` 1/2. `Download the App` 1/2. `Give it a try. Have some fun.` 1/1. `We love a holiday!` 1/1. `The easiest photo and video editing app to add magic to your treasured memories.` 1/2. `Our promise to you — our AI tools will always act as an assistant to super-charge your creative ideas. They blend in seamlessly and never take the creative process out of your hands.` 1/1. `drag-and-drop` 1/2. `for iOS` 1/1. `virally` 1/1. `staple creative tool` 1/2. `never a creative replacement` 1/1. `Every template update, sticker pack, and holiday campaign is an act of celebration: an invitation to document life's small moments with the same ceremony reserved for big milestones.` 1/1. `a creative friend's studio, tidied up just enough to feel welcoming.` 1/1. `Joyful · Approachable · Empowering` 1/1. `87.36deg` 1/1. `-9.23%` / `16.56%` / `73.21%` / `91.93%` dest 1 each. `linear-gradient(87.36deg, #8235B8 -9.23%, #974DCB 16.56%, #EF4967 73.21%, #EE604D 91.93%)` 1/1. `max-width:1221px` 1/1. `690px` 2/4. `622px` 2/4. `550px` 2/3. `900px` 2/3. `650px` 1/2. `sm:px-[44px]` 1/1. `md:px-[71px]` 1/3. `xs 480px` 1/1. `32px 0 96px` 1/2. `80px block` 1/2. `hamburger` 1/1. `70px` 2/2. `294px` 2/4. `slide-out drawer` 1/1. `never clinical` 1/1. `dark overlays` 1/2. `serif body text` 1/2. `leverage your assets` 1/1. `your camera roll` 1/1. `Enter your photos.` 1/1. `CAPS LOCK` 1/1.

Identity-only sidecar (not portable loss): `consumer-tech` DES 0 / PRO 1; `components_harvested` DES 0 / PRO 2; `Conflicts unresolved` DES 0 / PRO 2; `Tier 1` / `Tier 2` / `getdesign.md/piccollage` / `JS-only SPA` provenance. Named gaps still names `getdesign.md` DES 1.

## 3 Constraints / motion

§7 Do 7 and Don't 6 kept at `:55–72`; §9-only Avoid `dark overlays` / `serif body text` land at `:73–74` (A3). `radius < 8px` DES 2. `30px+` DES 2. `200ms ease-in-out` restated on Application rules and Motion. `visible undo` DES 1. `Tuesday photo dumps` DES 1. `Trending` DES 1. Hierarchy `always Poppins below the hero` DES 1. Base scale `10 / 12 / 14 / 16 / 18 / 20 / 24 / 28 / 32 / 36 / 40 / 44 / 48 / 72px` DES 1. §14 eight-row contract dest 1 each including Empty / `#e2ddcf` 1.5s / `#f19daf` / `rgba(0,0,0,0.80)` 4s / confetti 0.7s / staggered 50ms / `opacity: 0.5` / `data-disabled` / `outline: 1px solid #298e7d`. Durations `150ms` / `200ms` / `700ms` / `40s` / `3s` dest 2/7/4/2/2. `ease-in-out` 4/4; `ease-out` 2/2; `cubic-bezier(.22, 1, .36, 1)` 2/2 beside compact `cubic-bezier(.22,1,.36,1)` 1/2 (keep-both of §15 / §14 writings). `reveal-from-rect` 1/2. `translateX(-100%)` 1/2. `prefers-reduced-motion` 1/1. `animation: none` 1/1. `Never animate content that is the user's creation` 1/1. `scale(1.02)` 1/3 kept as the source's unmeasured follow-standard note. Overlay `rgba(0,0,0,0.40)` 1/1. Level 4 `0px 16px 22px` 1/1. B3 five-kind gate at `:204`: `transition properties` / `animation name` / `duration` / `easing` / `reduced-motion behavior` named in full text.

## 4 Ungrounded surface

Scope names the four source inspect URLs only: homepage `https://piccollage.com`, the named CSS bundle, `https://piccollage.com/company`, Play listing. Company page is qualified as brand-mission copy; Play as developer identity — not as extra computed-token sheets (`:9`). Hero 60/67/600 stays on the type-roles / live-computed homepage reading (`:217` / `:235`). Editor-panel `690px` stays on the editor-panel clause (`:433` / `:445`), not rewritten as a hero canvas size. Footer 900/650/550 stay on their breakpoint bands. `native-client` / `native app` / `iOS app` / `authenticated` / `product application` / `fin.ai` / `1440px` / `measures 1440px` all SRC 0 / DES 0 / PRO 0 (AUD mentions `1440px` only as the removed E2d sentence). Named gaps DES 1 lists getdesign/refero and the unmeasured thumbnail scale, not new domains. `Pointer-web` is hover-reason prose, not a new product surface. `for iOS` is source §11 launch wording.

Live-computed row `:217` copies sibling CSS form `font-family:Zilla Slab; font-size:60px; line-height:67px; font-weight:600` (SIB 1 as prefix of a longer inline-style sample; SRC 0 as that CSS string). Values 60/67/600/Zilla Slab are already source §3; the surface is the homepage the source footer inspected. Not a new measure and not a wrong-surface move.

## 5 Conflict policy

Same-hex / same-number roles unmerged throughout. YAML vs §4 radius on sticky CTA: keep-both (`9999` and `30px`). YAML lowercase `#4fc3c4` beside §2 `#4FC3C4`. YAML `tokens.shadow.card` `rgba(0,0,0,0.10) 0px 0px 12px` beside Level 1 `#E8E8E8`. YAML thumbnail shadow order beside §4 `0px 0px 8px rgba(0,0,0,0.15)`. YAML `1.12` / `1.4` beside §3 67px / 35px. §14 confetti `0.7s` beside §15 `700ms`. YAML type-role `use` vs §3 notes: keep-both (all five §3 notes DES 1). One policy vs sibling: YAML/source-body token set in DESIGN; sibling extras stay out.

## 6 F2 list after F3

F3 appended hedges in place and rewrote dest lines on the log (29 → 32; `wc -w` 7,099 → 7,316; colon-form `tokens.rounded.full: 9999` no longer claimed as a body string; `slide-out drawer` dest 1 at 169; §8 `measures 1440px` absence sentence removed). Current files match those dests:

- `derived editorial implementation inference` DES 32 at 9/11/13/19/28/32/43/53/65/82/119/136/149/153/176/204/212/216/228/232/252/270/298/328/354/380/404/415/430/460/480/514 (audit list same; each of those 32 lines still contains the phrase).
- `https://piccollage.com` dual as claimed.
- `#4FC3C4` DES 7 / PRO 7.
- `prose-derived` DES 2 / PRO 5.
- `logo.type: favicon` DES 1 / PRO 1.
- `s2/favicons` DES 1 / PRO 1.
- `slide-out drawer` DES 1 at 169.
- `tokens.rounded.full` DES 1 at 147; colon-form `tokens.rounded.full: 9999` DES 0 / PRO 0.
- F3 DESIGN SHA matches the file on disk.
- `29 complete` / `29 data` / `DESIGN = 29` / `7,099` LOG dest 0 (those strings remain only in audit-log as the before-state).

## 7 Deleted-persona derivatives (D2 / D2a)

Omission ledger names field kinds only (`§13 페르소나 4인 (이름·나이·동기·소속 분류 포함)`). Word-boundary given names `Mia` / `Jake` / `Lin` / `Sam` DESIGN dest 0 / provenance dest 0 / log dest 0 (`grep -oF -- Lin` / `Sam` also hit `Line height` / `Same`; word-boundary dest is 0). Archetype labels `Celebration Architect` / `Social Storyteller` / `Occasional Sender` / `Young Creator` DES 0 / PRO 0. Motivations `Photoshop` / `Instagram` / `Snapchat` / `TikTok` / `under five minutes` / `school projects` / `invitation cards` / `countdown collages` / `year-in-reviews` / `sticker drops` / `friend-group` / `family memory` / `frictionless` DES 0 / PRO 0 / LOG 0.

Primary tasks (`:21–23`) are homepage hero tagline / download CTA / feature cards — source surfaces, not §13 goals. Audience (`:28`) is group-level from §11 and Principle 1 (`270 million users worldwide`; `users who wanted to tell stories with multiple photos in a single frame`; `Asia and North America`; `first-time creators, not expert designers`). gitlab-class promotion not found.

## 8 C2 direction

Four interactive maps. `loading | applicable` DES 0; `error | applicable` DES 0; `success | applicable` DES 0. `loading | not-applicable` 4; `error | not-applicable` 4; `success | not-applicable` 4.

| control | loading | error | success |
|---|---|---|---|
| Primary CTA (app-download destination) | not-applicable | not-applicable | not-applicable |
| Nav Download (app-download destination) | not-applicable | not-applicable | not-applicable |
| Icon Button (toolbar / nav; no in-place commit) | not-applicable | not-applicable | not-applicable |
| Nav Menu Item (`tab`; destination) | not-applicable | not-applicable | not-applicable |

No control opens loading while closing error. Feature Card / Collage Thumbnail / Top Nav omit kind and map (C4).

## 9 Sibling-fragment fusion

`14px radius with 16px padding` SRC 0 / SIB 0 / DES 0 / PRO 0. `measures 1440px` SRC 0 / SIB 0 / DES 0 / PRO 0 / LOG 0. `both reveal-from-rect` SRC 0 / SIB 1 / DES 0 / PRO 2 (ledger only). Sibling-only `#604BB6` / `#7B2E8E` / `1.82M` / `100M+` / `4.8 stars` / `overflow:hidden` / `--color-pic-teal-200` / `bg-pic-beige-50` / `TW-based` / `715 KB` DESIGN dest 0 / provenance dest ≥1 (except `TW-based` PRO 0 / AUD 1 / SIB 1). Reveal 700ms stays on §15; confetti 0.7s stays on §14 — not fused into one duration. `44×44` SRC 0 / SIB 0 / DES 1 is width×height of the same icon-button the source already records as Width 44px and Height 44px on separate rows; not a two-property fusion of the gitlab kind.

## 10 Surface-to-surface transfer

Source §5 one sentence: `~1221px on hero` … `; 690px for editor panels`. Output bullet `:433` keeps that split. §8 restates editor 690px and hero 622px on their own bands (`:445–446`). Company-page gradient and Play rating stay off DESIGN. CSS custom-property names stay off DESIGN. Footer heights stay on mobile/sm/lg as source §8 wrote them. No intercom-class move of a homepage-only figure onto company/Play.

## 11 YAML use ↔ § table use

YAML `use` 11/11 byte-exact. Longer §3 notes all DES 1 beside the YAML column (`60px / line-height 67px…#AB7624`; `36px / weight bold — feature card titles`; `25px / line-height 35px, weight 500, white`; `18px / weight 400 — feature descriptions`; `14px / weight medium (500), tracking -0.28px`; mobile `Poppins, 25px / weight bold — responsive scale` kept as its own row, not merged into YAML `sub-headline`). Component YAML `use` strings sit as `Token-set use:` lines; §4 geometry (294px / 44px / 30px / 10px shadow / 1.5px borders / 2px `#e8e4d9`) stays on the same blocks. kakaot-class short-side cut not found.

REVIEW_DONE piccollage PASS
