# Measured font substitutes — round 11 (2026-10-20)

Policy F2/G3 (`spec/design-md-v3.md` §6, AGENTS.md "Unlabelled font substitution is forbidden")
allows a substitute only when it is chosen by measurement and labelled "substitute — not the brand
face". Until this round nothing had been measured, so every sample screen said "no measured
substitute". This directory is the measurement record for the companies on the landing: the journey
chips (`GEN_UI_IDS` in `web/src/lib/landing-a/picks.ts`: toss, karrot, kakaobank, banksalad, freee,
line, 104) and the hero companies (pixiv, stripe, linear.app, eslite).

## Outcome per reference

| Reference | Brand face (scripts) | Substitute | Why / key numbers |
|---|---|---|---|
| toss | Toss Product Sans (hangul, latin); proprietary, `none-asserted` | latin **IBM Plex Sans** (Google); hangul **Pretendard Variable** (other) | Latin x-height ratio 0.7393 vs 0.7308, advance 0.4611 vs 0.4590 em (score 0.0074). Hangul body height 0.8459 vs 0.8515 em, syllable advance 0.8643 vs 0.8652 em (score 0.0068; best Google, IBM Plex Sans KR, 0.0240). [toss.md](toss.md) |
| linear.app | Inter (latin), OFL-1.1, public; Berkeley Mono (latin), proprietary | Inter: none needed. Berkeley Mono → **Fira Code** (Google) | Every monospaced candidate advances 0.600 em; x-height ratio 0.7647 vs 0.7618 decides (score 0.0013). [linear.app.md](linear.app.md) |
| kakaobank | Pretendard Variable (hangul, latin), OFL-1.1, public | none needed | KakaoBank's `PretendardVariable.woff2` is byte-identical to the v1.3.9 release |
| banksalad | Pretendard (hangul, latin), OFL-1.1, public | none needed | Banksalad serves its own subsets of the static weights |
| freee | Noto Sans JP, OFL-1.1, public | none needed | freee self-hosts the OTFs; the Regular file names itself Noto Sans CJK JP |
| pixiv | Noto Sans CJK JP (Charcoal token, `declared-only`), OFL-1.1, public | none needed | No proprietary face; product body resolves to the OS UI font |
| line | LINE Seed (display, marketing/docs), OFL-1.1, public | none needed | Messenger UI uses system fonts: no brand face there |
| karrot | none (web UI resolves to `-apple-system`) | none chosen | Nothing to stand in for |
| 104 | none (public stack starts with Arial; MsJhengHeiBold declared only) | none chosen | Nothing to stand in for |
| stripe | none on the captured Docs routes (OS stack); Söhne is foundry context only | none chosen | Nothing recorded to stand in for (see open items) |
| eslite | none (stack starts with unresolved Noto Sans TC, then system faces) | none chosen | Nothing to stand in for |

Each reference's Typography section now carries the "Brand face, substitute, safe default" H3 (§6.5).
Faces gained `fonts.faces` entries with licence, distribution and source from the face's own first-party
or foundry page; the evidence classes are lifted from each reference's evidence table, never upgraded.

## Method (`scripts/fonts/`)

| File | Role |
|---|---|
| `targets.mjs` | brand faces that need a substitute, with the page they are measured on |
| `candidates.mjs` | open-licence candidates; weights/axes/licence from `google/fonts` METADATA.pb or the foundry release; class from Google Fonts' own tags (`google/fonts tags/all/families.csv`) |
| `fetch-candidates.mjs` | downloads candidate files to a cache outside the repo (`$OMD_FONT_CACHE`); records SHA-256 |
| `measure.mjs` | the measurement (below) → `<id>.measurements.json` |
| `score.mjs` | weighting and choice → `<id>.choice.json`, `<id>.md` |
| `faces.mjs`, `apply.mjs` | write `fonts.faces`, substitutes, §6.4 stacks and sidecar records; refresh lint; check §10; mirror to `design-md/` |

1. **Brand face in its own page.** Headless Chromium (playwright-core 1.61.1, Chromium 149.0.7827.55)
   opens the first-party page the reference cites for the face — Toss: the TDS documentation page
   `tossmini-docs.toss.im/tds-mobile/foundation/typography/` (cross-checked on `…/components/button/`,
   identical metrics); Linear: `linear.app`. The face measured is the one that page loaded. No brand font
   file is downloaded, copied or parsed.
2. **Candidates in the same page.** Each candidate is injected as a `FontFace`, its bytes served from the
   local cache through `page.route`, so brand and candidates run through one canvas routine in one renderer.
3. **Proof the face drew the sample.** `document.fonts.load`/`check` for every sample string, identical
   results with `serif` and `monospace` fallbacks that differ from the bare fallback, and Chrome's own record
   of the fonts used for a span of the samples (`CSS.getPlatformFontsForNode`) naming only web fonts. The CDP
   check is decisive: the canvas checks alone passed Inter on Hangul, which AppleMyungjo actually drew (22
   glyphs). Brand: `TossProductSans-Regular/-Semibold/-Bold` drew all 92 Latin and 36 Hangul sample glyphs;
   `BerkeleyMonoVariable-Regular` drew all 92 Latin glyphs.
4. **Size.** Canvas applies automatic optical sizing (Inter at 200px measured 7.8% narrower than at text
   size), so every face is measured at the reference's own UI size: Toss 16px (`typography.body`), Linear 14px
   (`typography.mono`). Metrics at integer px sizes are identical at 13/16/100/200/1000px for non-`opsz` faces.
5. **Metrics** (normalised to em; samples fixed and recorded verbatim):
   - Latin `xHeightRatio` = mean ink top of `x v w z` ÷ mean ink top of `H I E F T`;
     `avgAdvance` = advance of "The quick brown fox jumps over the lazy dog" ÷ 43 code points.
   - Hangul `xHeightRatio` = mean ink height (ascent + descent) of the syllables
     다 람 쥐 헌 쳇 바 퀴 에 타 고 파 ÷ 1em — the body-height ratio (자면률); Hangul has no x-height.
     `avgAdvance` = advance of "다람쥐 헌 쳇바퀴에 타고파" ÷ 14 code points.
   - `weightRange`: brand from the page's declared `FontFace`s plus a probe (does 450/550/650 render on its own
     or snap to a declared weight); candidates from METADATA.pb / the stylesheet, confirmed by each file's `fvar`.
   - Informative, not scored: cap height, x-height, ascender, descender, digit advance, Hangul ink top/bottom.
6. **Weights scored.** The weights the reference's roles use: Toss 400, 600, 700; Linear mono 400.

### Validation of the canvas method

For every candidate without an optical-size axis, the canvas x-height ratio at 400 reproduces the file's
own OS/2 `sxHeight / sCapHeight` (read by `sfnt.mjs`): Roboto 0.7431 = 0.7431, IBM Plex Sans 0.7393 = 0.7393,
Pretendard 0.7500 = 0.7500, Noto Sans KR 0.7409 / 0.7408, Geist, Figtree, Public Sans, Work Sans, Gothic A1,
SUIT, LINE Seed, IBM Plex Mono, Roboto Mono, Geist Mono and DM Mono equal to 4 decimals. The exceptions are
explained: Inter and DM Sans have an `opsz` axis (OS/2 describes the default optical size, the canvas the
16px instance); Source Code Pro's default instance is ExtraLight; Nanum Gothic's OS/2 x-height sits 1% below
its drawn x.

## Weighting and rules (`score.mjs`, fixed before scoring)

- `score = Σ wᵢ·termᵢ / Σ wᵢ`: average advance 0.45, x-height ratio 0.35, weight coverage 0.10, class 0.10.
  Advance and x-height terms are mean relative differences over the scored weights. The class term counts
  only when both classes come from a first-party source; otherwise it is dropped and the rest rescaled. Toss
  Product Sans has no stated class (its introduction, toss.im/tossfeed/article/beginning-of-tps, 2021-10-08,
  names none); Berkeley Mono is "Fixed Pitch: Yes" per the TX-02 datasheet, and every mono candidate is
  tagged Monospace by Google Fonts.
- Eligible: drew every sample glyph at every scored weight; same kind (monospaced or proportional).
- Google Fonts first: another face wins only at ≤ 0.8 × the best Google score. Tolerance: nothing above 0.10.
- Exact ties: the face covering only this script, then Google, then name.
- **Stack rule.** In a §6.4 stack a character is drawn by the first face that has it, and every Hangul
  candidate also carries Latin glyphs, so the Latin substitute must come first; a Latin pick that also carries
  Hangul would then draw the Hangul text and the Hangul substitute would never render. So when Hangul chose a
  different face, Hangul-covering Latin candidates are excluded. For Toss this moved Latin from IBM Plex Sans
  KR (0.0073, unconstrained pick, recorded) to IBM Plex Sans (0.0074) — the same Latin glyphs. The stack is
  `Toss Product Sans, IBM Plex Sans, Pretendard Variable, sans-serif`.

## Open-licence faces: sources and byte checks (2026-10-20)

| Face | Licence source (OFL-1.1) | Byte check |
|---|---|---|
| Inter (Linear) | github.com/rsms/inter `LICENSE.txt`, rsms.me/inter | `static.linear.app/fonts/InterVariable.woff2?v=4.1` = `rsms.me/inter/font-files/InterVariable.woff2?v=4.1`, SHA-256 `693b77d4…29a8e3` |
| Pretendard Variable (KakaoBank) | github.com/orioncactus/pretendard `LICENSE` | `www.kakaobank.com/view/font/woff2/PretendardVariable.woff2` = v1.3.9 `PretendardVariable.woff2`, SHA-256 `9599f12f…d900b4` |
| Pretendard (Banksalad) | same | subset files, no comparison made |
| Noto Sans JP (freee) | github.com/notofonts/noto-cjk `Sans/LICENSE`; Google Fonts METADATA.pb | `NotoSansJP-Regular.otf` names itself `Noto Sans CJK JP` / `NotoSansCJKjp-Regular`; not byte-identical to the current `SubsetOTF` |
| Noto Sans CJK JP (pixiv) | github.com/notofonts/noto-cjk `Sans/LICENSE` | — (a token, not a served file) |
| LINE Seed (LINE) | seed.line.me "LINE Seed Licensing": "All fonts are released under the SIL Open Font License, Version1.1" | — |

The brand-served files were downloaded only to hash them and deleted afterwards.

## Blocked or not measured

- `usgraphics.com/products/berkeley-mono` returns a Cloudflare challenge (HTTP 403) to headless and plain
  requests; it was not bypassed. Berkeley Mono's licence, axes and fixed pitch come from U.S. Graphics' own
  TX-02 datasheet PDF (DX-102-11, December 2024), which downloads directly.
- toss.im (the marketing surface) loads a differently named family, `Toss Product Sans OTF`. The reference keys
  the face on the TDS documentation surface, so only that was measured.
- Kana and Traditional-Han pools (Noto Sans JP, M PLUS 1p, M PLUS 2, Zen Kaku Gothic New, BIZ UDPGothic; Noto
  Sans TC) were not measured: no proprietary brand face on the landing renders those scripts.

## Open items for the owner and the UI streams

1. **Toss Hangul is a non-Google face.** Pretendard Variable won under the 0.8 rule (0.0068 against 0.0240 for
   IBM Plex Sans KR). shadcn-style consumers that install only Google faces cannot install it; keeping fidelity
   versus switching Hangul to IBM Plex Sans KR is an owner decision.
2. **Stripe.** stripe.com's marketing surface loads Söhne, but the reference covers the Docs routes, which
   compute an OS stack. A Söhne substitute needs that marketing surface added to the reference first (a
   separate evidence domain).
3. **Stale UI text.** `web/src/lib/fonts/runtime-family.ts` and the `subF` copy say "no measured substitute is
   chosen". That is now wrong for toss and linear.app; callers should read `getSubstitutes()`.
4. **Pre-existing resolver defect** (`web/src/lib/font-registry.ts`, unchanged here): a reference with no
   `fonts.roles` falls back to the first capitalised backticked name in its Typography prose, so 104 resolves
   to `MsJhengHeiBold` (declared only), stripe to `Source Code Pro` (unresolved) and eslite to `Noto Sans TC`
   (unresolved). The new H3s were written without backticked names and leave every resolution unchanged.

## Reproduce

```bash
node scripts/fonts/fetch-candidates.mjs --cache "$OMD_FONT_CACHE"
node scripts/fonts/measure.mjs toss linear.app --cache "$OMD_FONT_CACHE"
node scripts/fonts/score.mjs toss linear.app
node scripts/fonts/apply.mjs            # then: cd web && npm run build-registry
node scripts/fonts/apply.mjs --check    # no-op when records and references agree
```
