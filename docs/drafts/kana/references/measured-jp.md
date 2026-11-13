# OmD measurement: typography of 77 Japanese sites

What 77 live Japanese sites shipped on their home pages, measured on 2026-11-12. The skill quotes this beside a rule; it is never the source of a rule. **The values reflect the capture date.** Sites change, so re-measure before quoting a single site.

## Method

- **Population:** 88 Japanese sites, one line each in the measurement's site list (`id`, home-page URL). 77 were readable, 11 were not (below).
- **Capture:** one headless page load per site in Chrome 157 (headless), viewport 1440 × 1000, desktop user agent, page requested in `ja-JP`. After the load settled, every visible element that directly holds Japanese text (hiragana, katakana, CJK ideographs, half-width katakana) was read for its computed font stack, size, weight, style, line-height, letter-spacing, `word-break`, `line-break`, `overflow-wrap`, `text-wrap`, `font-feature-settings`, `text-spacing-trim`, `text-autospace` and `text-align`. Each element is weighted by how many Japanese characters it holds.
- **Not done:** no consent click, no scrolling, no sign-in, no second page. A page that answered 4xx/5xx, or showed fewer than 50 Japanese characters, was recorded as unreadable and not retried another way.
- **Roles** (weights are Japanese characters):
  - *body*: the size, line-height, letter-spacing and stack that hold the most characters among 12–20px text outside h1–h3. On most home pages this is navigation and list text as much as paragraphs, and sizes outside 12–20px cannot appear.
  - *paragraph*: the same, restricted to text inside `<p>` that wraps to two or more lines, and only when the page has at least 100 such characters. This is the reading for paragraph leading.
  - *heading*: the same among h1–h3.
  - A property share is the share of the page's Japanese characters whose element computes that value.
- Tools: `scripts/lang/measure-typography.mjs` (capture) and `scripts/lang/summarize-typography.mjs` (this table). The method lines above are taken from their headers and from the capture records (date, viewport, browser); every number below is copied from the summary the second script wrote.

## Capture limits

- **Home pages only, desktop width only.** One page per site at 1440px. No 390px reading, no logged-in screens, no product surfaces, no native apps. Home pages are public marketing surfaces, a different evidence domain from a product's own screens: don't read these numbers as a brand's product typography, and don't copy one site's values into another brand.
- **11 of 88 sites unreadable:** 3 answered HTTP 403 (folio, uniqlo, zozotown); 1 failed with an HTTP/2 protocol error (jal); 1 timed out after 45 s (toyokeizai); 6 returned a page with 0 Japanese characters and `html lang` en or en-US (mercari, nintendo, panasonic, sansan, studio, toyota). Those six say nothing about the sites' Japanese pages.
- **`text-autospace: no-autospace` is the browser's default, not an author's choice.** Shipped browsers use `no-autospace` as the initial value (JT-21), so 76 of 77 computing it says nothing about what those authors chose. One site computes `normal`.
- **"No recognised face of the script" (7/77) is a limit of the face matcher,** not proof that the site has no Japanese font: brand and custom faces the matcher does not know (for example `MFW-PIshiiGothicStdN-M`, `ryo-gothic-plusn`, `Shorai Sans StdN Medium`) are counted as not recognised.
- **Computed values only.** The capture sees what the browser computed, not the author's CSS: a `palt` set on a parent shows on every child, and a value the author never wrote (a browser default) looks the same as one they did.
- `word-break`, `line-break` and `overflow-wrap` are reported as the value on most of the text, plus how many sites have a value on 10% of the text or more.
- One run, one date. Sites vary by A/B test, region and time.

## How the skill reads this beside its rules

- DADS recommends body line-height of at least 1.5 for reading content (JT-01). The 57 sites with wrapped paragraph text have a paragraph line-height median of 1.7 (p25 1.5, min 1.333). The *body* role median is 1.6, but on most home pages that role is navigation and list text as much as paragraphs.
- No source recommends `palt` for body text, and the OpenType registry suggests applications leave it off by default (JT-07). It appears on some text on 23 of 77 sites and on half the text or more on 9.
- DADS letter-spacing tokens are 0, 0.01em and 0.02em (JT-05). Body letter-spacing is 0 on 63 of 77 sites, positive on 12, negative on 2. No source sets a general letter-spacing value for Japanese web text.
- DADS's example stack names Noto Sans JP before `sans-serif` (JT-22). The first named face is a Japanese face on 40 of 77; on 30 a Latin face comes first and a Japanese face later; Noto Sans JP is the first Japanese face on 25.
- `lang` is `ja` or a `ja-JP` spelling on 76 of 77; one site declares `jp` (JT-25 asks for `ja` or ja-JP).
- `word-break: break-all` covers a tenth of the text or more on 12 of 77. No rule in the skill addresses `break-all` for Japanese; this is reported, not judged.

## Distributions (copied from the summary)

Sites: 88 loaded, 77 readable, 11 not readable.

## Size, leading, tracking
- body font-size (px): n 77, min 12, p25 14, median 14, p75 16, max 20
- body line-height (ratio; pages whose body computes `normal` are left out): n 75, min 1, p25 1.5, median 1.6, p75 1.714, max 2.286
- body line-height computes `normal`: 2 / 77
- paragraph line-height (ratio; <p> text wrapping to 2+ lines): n 57, min 1.333, p25 1.5, median 1.7, p75 1.75, max 2
- paragraph font-size (px): n 58, min 12, p25 14, median 16, p75 16, max 20
- heading line-height (ratio): n 67, min 1, p25 1.4, median 1.45, p75 1.5, max 2
- body letter-spacing (em): n 77, min -0.02, p25 0, median 0, p75 0, max 0.114
- body letter-spacing is 0: 63 / 77
- body letter-spacing is positive: 12 / 77
- body letter-spacing is negative: 2 / 77
- heading letter-spacing (em): n 70, min -0.025, p25 0, median 0, p75 0, max 0.2
- heading letter-spacing is negative: 2 / 77

## Line breaking
- word-break on most of the text: normal 63 · break-all 8 · break-word 6
- word-break: break-all on 10% of the text or more: 12 / 77
- word-break: keep-all on 10% of the text or more: 2 / 77
- line-break on most of the text: auto 68 · strict 7 · normal 2
- line-break: strict on 10% of the text or more: 8 / 77
- line-break: anywhere on 10% of the text or more: 0 / 77
- overflow-wrap on most of the text: normal 54 · break-word 14 · anywhere 9
- text-wrap other than wrap on 10% of the text or more: 20 / 77

## Proportional and half-width features, spacing
- `palt` / `pkna` / `pwid` on any text: 23 / 77
- `palt` / `pkna` / `pwid` on half of the text or more: 9 / 77
- `palt` on headings (half or more of heading text): 10 / 77
- `halt` / `chws` on any text: 3 / 77
- text-spacing-trim set to something other than normal / space-all on any text: 2 / 77
- text-autospace on most of the text (the computed value; `no-autospace` is this browser's own default, so it does not show an author's choice): no-autospace 76 · normal 1
- italic or oblique on any text of the script: 1 / 77
- text-align: justify on 10% of the text or more: 0 / 77

## Font stack (the stack on most body text)
- first named face is a face of the script: 40 / 77
- a Latin face comes first, a face of the script later: 30 / 77
- no recognised face of the script in the stack: 7 / 77
- generic keywords only (no named face): 0 / 77
- a stack face is a loaded web font: 44 / 77
- first face of the script in the stack: Noto Sans JP 25 · Hiragino Kaku Gothic 17 · Hiragino Sans 10 · (none) 7 · Yu Gothic 7 · Meiryo 7 · Tazugane Gothic 2 · LINE Seed JP 1 · Shin Go 1
- html lang: ja 70 · ja-JP 5 · ja-jp 1 · jp 1

## Per-site table (copied from the summary)

`—` means not captured (no heading among h1–h3, or no paragraph text that wraps) or, in the first-face-of-the-script column, no recognised Japanese face. Percentages are shares of the page's Japanese characters.

| site | body px / line-height / tracking em | paragraph | heading | first face | first face of the script | word-break | line-break | palt | lang |
|---|---|---|---|---|---|---|---|---|---|
| abema | 14 / 1.5 / 0 | 14 / 1.5 / 0 | — | CopyRight | Hiragino Sans | normal 100% | auto 100% | 0% | ja |
| ahamo | 14 / 1.714 / 0 | 14 / 1.714 / 0 | 21 / 1.429 / 0 | Work Sans | — | break-word 100% | auto 100% | 4% | ja |
| andpad | 13 / 2 / 0 | 13 / 2 / 0 | 24 / 1.4 / 0 | 中ゴシックBBB | 游ゴシック体 | normal 100% | auto 100% | 0% | ja |
| au | 14 / 1.4 / 0 | 12 / 1.5 / 0 | 18 / 1.5 / 0 | Noto Sans JP | Noto Sans JP | normal 98%, break-all 2% | auto 100% | 0% | ja |
| base | 12 / 1.75 / 0 | 14 / 1.7 / 0 | 18 / 1.5 / 0.03 | Gilroy | TazuganeGothicStdN | normal 100% | auto 100% | 100% | ja |
| booth | 12 / 1 / 0 | — | 14 / 1.571 / 0 | Avenir | ヒラギノ角ゴ ProN | normal 74%, break-all 26% | auto 100% | 0% | ja |
| caddi | 16 / 1.6 / 0 | 16 / 1.6 / 0 | 16 / 1.2 / 0 | MFW-PIshiiGothicStdN-M | — | normal 100% | auto 100% | 0% | ja |
| chatwork | 12 / 1.6 / 0 | 18 / 1.6 / 0 | 26 / 1.5 / 0 | Chatwork Sans R | Hiragino Sans | normal 100% | auto 100% | 0% | ja |
| coconala | 14 / 1.6 / 0 | 14 / 1.4 / 0 | 16 / 1.6 / 0 | Hiragino Kaku Gothic ProN | Hiragino Kaku Gothic ProN | break-all 99%, normal 1% | auto 100% | 0% | ja |
| cookpad | 16 / 1.375 / -0.0125 | — | 16 / 1.5 / -0.025 | noto-sans | — | normal 60%, break-word 40% | auto 100% | 0% | ja |
| crowdworks | 12 / 1.5 / 0.02 | 16 / 1.75 / 0.02 | 28 / 1.5 / 0.02 | Noto Sans JP | Noto Sans JP | normal 100% | auto 93%, strict 7% | 5% | ja |
| cybozu | 14 / 2 / 0 | — | 16 / 2 / 0 | ヒラギノ角ゴ Pro W3 | ヒラギノ角ゴ Pro W3 | break-all 83%, normal 17% | auto 100% | 0% | ja |
| cygames | 16 / 1 / 0 | — | 14.4 / 1.714 / 0 | YakuHanJPs | Noto Sans JP | normal 97%, break-word 3% | auto 100% | 11% | ja |
| daiwa | 16 / 1.5 / 0 | 16 / 1.5 / 0 | 17 / 1.5 / 0 | ヒラギノ角ゴ Pro W3 | ヒラギノ角ゴ Pro W3 | normal 100% | auto 100% | 0% | ja |
| demaecan | 16 / 1.5 / 0 | — | 40 / 1.5 / 0 | LINE Seed JP | LINE Seed JP | normal 100% | auto 100% | 0% | ja |
| digital-agency-jp | 17 / 1.7 / 0.02 | 17 / 1.7 / 0.02 | 20 / 1.5 / 0.02 | Noto Sans | Noto Sans JP | normal 100% | strict 95%, auto 5% | 0% | ja |
| dmm | 12 / 1.5 / 0 | 12 / normal / 0 | — | Hiragino Kaku Gothic Pro | Hiragino Kaku Gothic Pro | normal 95%, break-all 5% | auto 100% | 0% | ja |
| docomo-smtb-netbank | 14 / 1.6 / 0 | 16 / 1.75 / 0 | 16 / 1.4 / 0 | hiragino sans | hiragino sans | normal 100% | auto 100% | 0% | ja |
| doda | 12 / 1.5 / 0 | 12 / 1.333 / 0 | 16 / 1.4 / 0 | verdana | 游ゴシック体 | normal 100%, break-all 0% | auto 100% | 4% | ja |
| freee | 16 / 1.5 / 0 | 16 / 1.5 / 0 | 24 / 1.5 / 0 | Noto Sans JP | Noto Sans JP | normal 100% | auto 100% | 0% | ja |
| fujitsu | 18 / 1.7 / 0 | 16 / 1.7 / 0 | 26 / 1.5 / 0 | FujitsuInfinityPro | メイリオ | normal 98%, break-word 2% | auto 100% | 98% | ja-JP |
| gaudiy | 16 / 1.8 / -0.02 | 16 / 1.8 / -0.02 | 28 / 1.4 / 0.0571 | Noto Sans JP | Noto Sans JP | break-word 95%, normal 5% | auto 100% | 0% | ja |
| goodpatch | 14 / 1.8 / 0 | 14 / 1.8 / 0 | — | ryo-gothic-plusn | — | normal 100% | auto 100% | 47% | ja |
| hatena | 12 / normal / 0 | — | 14 / 1.4 / 0 | Hiragino Sans | Hiragino Sans | break-all 92%, normal 8% | auto 100% | 0% | ja |
| japanpostbank | 14 / 1.57 / 0 | 14 / 1.57 / 0 | 18.06 / 1.37 / 0 | メイリオ | メイリオ | normal 100% | auto 100% | 0% | ja |
| kakuyomu | 16 / 1.2 / 0 | — | 14 / 1.3 / 0 | dcsymbols | ヒラギノ角ゴ Pr6N | normal 100% | auto 89%, strict 11% | 0% | ja |
| kaonavi | 16 / 1.8 / 0 | 16 / 1.8 / 0 | 18 / 1.5 / 0.0556 | YakuHanJP | 游ゴシック体 | normal 97%, break-all 3% | auto 100% | 99% | ja |
| kintone | 16 / 1.75 / 0.05 | 16 / 1.75 / 0.05 | 52 / 1.45 / 0.05 | Roboto | Noto Sans JP | normal 66%, keep-all 34% | strict 100% | 2% | ja |
| kodansha | 14 / 1.375 / 0 | 14 / 1.375 / 0 | 16 / 1.5 / 0 | Hiragino Kaku Gothic ProN | Hiragino Kaku Gothic ProN | break-all 69%, normal 31% | auto 100% | 0% | ja |
| layerx | 12 / 1.4 / 0.02 | — | 60 / 1.4 / 0.04 | PPMori-SemiBold | TazuganeGothicStdN-Bold | normal 100% | normal 100% | 100% | ja |
| line | 14 / 1.429 / 0 | 20 / 1.6 / 0 | 22 / 1.182 / 0 | SFPro | Noto Sans JP | break-word 100% | auto 100% | 0% | ja |
| loglass | 16 / 1.7 / 0.0175 | 16 / 1.7 / 0.0175 | 18 / 1.4 / 0.0156 | Noto Sans JP | Noto Sans JP | normal 100% | auto 100% | 1% | ja |
| mikan | 20 / 2 / 0 | 20 / 2 / 0 | 18 / 1.2 / 0 | Helvetica Neue | Hiragino Kaku Gothic ProN | break-word 99%, normal 1% | auto 100% | 25% | ja |
| mixi | 13 / 1.7 / 0.02 | 13 / 1.7 / 0.02 | 15 / 1.15 / 0.02 | Noto Sans JP | Noto Sans JP | normal 100% | auto 100% | 0% | ja |
| mizuho | 16 / 1.6 / 0 | 16 / 1.6 / 0 | — | 游ゴシック体 | 游ゴシック体 | normal 100% | auto 100% | 0% | ja |
| money-forward | 16 / 1.5 / 0 | 16 / 1.75 / 0 | 12 / 1.5 / 0 | mfw-paotogothicstdn-regular | — | normal 100% | auto 100% | 100% | ja |
| muji | 15 / 1.7 / 0 | — | 15 / 1 / 0 | Hiragino Kaku Gothic ProN | Hiragino Kaku Gothic ProN | normal 100% | auto 100% | 0% | ja-jp |
| mynavi | 15 / 1.714 / 0 | 15 / 1.714 / 0 | 30 / 1.667 / 0 | 游ゴシック体 | 游ゴシック体 | normal 100%, break-word 0% | auto 100% | 0% | ja |
| newspicks | 14 / 1.7 / 0 | 14 / 1.7 / 0 | 24 / 1 / 0.03 | Helvetica Neue | Hiragino Kaku Gothic ProN | break-all 61%, normal 36% | strict 100% | 22% | ja |
| nissan | 14 / 1.5 / 0 | 14 / 1.5 / 0 | 18 / 1.111 / 0.0056 | ShinGoPro-Regular | ShinGoPro-Regular | normal 65%, break-word 23% | auto 100% | 0% | ja-JP |
| nomura | 16 / 1.8 / 0 | 20 / 1.8 / 0 | 40 / 1.32 / 0 | Noto Sans JP | Noto Sans JP | normal 100% | auto 100% | 0% | ja |
| note | 12 / 1.5 / 0 | 12 / 1.5 / 0 | 16 / 1.5 / 0.05 | Helvetica Neue | Hiragino Sans | normal 100% | auto 100% | 59% | ja-JP |
| nulab | 16 / 1.7 / 0.02 | 16 / 1.7 / 0.02 | 16 / 1.4 / 0 | Noto Sans JP | Noto Sans JP | normal 98%, break-word 1% | auto 100% | 0% | ja |
| pairs | 18 / 1.5 / 0 | 18 / 1.5 / 0 | 24 / 1.5 / 0 | Roboto | Noto Sans JP | normal 100%, break-word 0% | auto 100% | 0% | ja |
| paypay | 16 / 1.7 / 0 | 16 / 1.7 / 0 | 20 / 1.7 / 0 | Noto Sans JP | Noto Sans JP | normal 100% | auto 100% | 0% | ja |
| pepabo | 16 / normal / 0 | 16 / 1.75 / 0 | 14 / normal / 0 | Open Sans | Noto Sans JP | normal 100% | auto 100% | 0% | ja |
| pixiv | 12 / 1.667 / 0 | — | — | Segoe UI | Hiragino Kaku Gothic ProN | normal 90%, break-all 10% | auto 100% | 0% | ja |
| qiita | 14 / 1.5 / 0 | — | 20 / 1.4 / 0 | YakuHanJPs | Hiragino Kaku Gothic ProN | normal 66%, break-all 34% | auto 100% | 0% | ja |
| raksul | 12 / 1.5 / 0 | 14 / 1.5 / 0 | 20 / 1.333 / 0 | Roboto | Hiragino Sans | break-word 89%, normal 11% | strict 87%, auto 13% | 0% | ja |
| rakuten | 12 / 1.3 / 0 | — | — | Meiryo | Meiryo | normal 72%, break-all 26% | auto 100% | 0% | ja |
| rakutenbank | 14 / 1.75 / 0 | — | 30 / 1.5 / 0 | Noto Sans JP | Noto Sans JP | normal 100% | auto 100% | 0% | ja |
| rakutensec | 14 / 1.72 / 0 | 14 / 1.72 / 0 | 20 / 1.6 / 0 | Noto Sans JP | Noto Sans JP | normal 100% | auto 100% | 0% | ja |
| recruit | 20 / 1.5 / 0 | 20 / 1.5 / 0 | 30 / 1.5 / 0 | Noto Sans JP | Noto Sans JP | normal 100% | auto 100% | 0% | ja |
| sakura-internet | 16 / 1.7 / 0 | 16 / 1.7 / 0 | 14 / 1.7 / 0 | Noto Sans JP | Noto Sans JP | normal 93%, keep-all 7% | auto 100% | 0% | ja |
| sbisec | 14 / 1.5 / 0 | 14 / 1.5 / 0 | 20 / 1.2 / 0 | Roboto-font | ヒラギノ角ゴ | normal 86%, break-word 9% | auto 100% | 0% | ja |
| sega | 18 / 1.333 / 0 | 18 / 1.5 / 0 | 30 / 1.625 / 0 | メイリオ | メイリオ | normal 100% | strict 100% | 0% | ja |
| serendie | 18 / 1.8 / 0 | 18 / 1.8 / 0 | 21.06 / 1.4 / 0 | Noto Sans JP | Noto Sans JP | break-word 52%, normal 48% | auto 100% | 0% | ja |
| shueisha | 14 / 1.6 / 0 | 16 / 2 / 0 | 28 / 1.6 / 0 | Noto Sans JP | Noto Sans JP | break-all 86%, normal 14% | auto 100% | 0% | ja |
| smartbank | 16 / 1.75 / 0 | 16 / 1.75 / 0 | 16 / 1.75 / 0 | Noto Sans JP | Noto Sans JP | break-all 100% | auto 100% | 100% | ja |
| smarthr | 14 / 1.5 / 0 | 16 / 1.6 / 0 | 24 / 1.4 / 0 | AdjustedYuGothic | AdjustedYuGothic | normal 100% | strict 100% | 0% | ja |
| smartnews | 16 / 1.55 / 0 | 18 / 1.55 / 0 | 24 / 1.55 / 0 | Roboto | — | normal 100% | auto 100% | 0% | ja |
| softbank | 16 / 1.429 / 0 | — | 40 / 1.25 / 0 | Meiryo | Meiryo | normal 99%, break-all 1% | auto 100% | 0% | ja |
| sony | 14 / 2.286 / 0 | — | 20 / normal / 0 | SST W20 Roman | Yu Gothic Medium | normal 100% | auto 100% | 0% | ja |
| speeda | 12 / 1.5 / 0.06 | 14 / 1.8 / 0.03 | 24 / 1.4 / 0.03 | Shorai Sans StdN Medium | — | normal 100% | normal 100% | 100% | ja |
| spindle | 14 / 1.6 / 0.1143 | 14 / 1.6 / 0.1143 | 32 / 1.4 / 0.2 | meiryo | meiryo | break-all 100% | auto 100% | 6% | ja |
| stores | 17 / 1.75 / 0.02 | 17 / 1.75 / 0.02 | 48 / 1.15 / -0.02 | baBook | Hiragino Sans | normal 90%, auto-phrase 9% | auto 100% | 100% | ja |
| studysapuri | 12 / 1.5 / 0 | 12 / 1.5 / 0 | 13 / normal / 0 | Open Sans | Hiragino Sans | normal 100% | auto 100% | 0% | ja |
| subaru | 12 / 1.5 / 0 | 12 / 1.5 / 0 | 20 / 1.444 / 0 | ヒラギノ角ゴ Pro | ヒラギノ角ゴ Pro | normal 99%, break-word 1% | auto 100% | 0% | ja |
| syosetu | 14 / 1.7 / 0 | — | 18 / 1 / 0 | Helvetica Neue | Meiryo | normal 100% | auto 100% | 0% | ja |
| teamlab | 18 / 1.7 / 0 | 18 / 1.7 / 0 | — | Helvetica | ヒラギノ角ゴ Pro W3 | normal 100% | auto 100% | 0% | jp |
| timee | 14 / 1.428 / 0 | 14 / 1.428 / 0 | 16 / 1.5 / 0 | Noto Sans JP | Noto Sans JP | normal 100% | auto 100% | 0% | ja |
| tokyo-metropolitan | 16 / 1.75 / 0.04 | — | 28 / 1.5 / 0.04 | Noto Sans JP | Noto Sans JP | normal 100% | auto 100% | 1% | ja-JP |
| ubie | 16 / 1.75 / 0 | 16 / 1.75 / 0 | 14 / 1.75 / 0 | Noto Sans JP | Noto Sans JP | normal 100% | auto 100% | 0% | ja |
| unext | 12 / 1.4 / 0 | — | 16 / 1.4 / 0 | Hiragino Sans | Hiragino Sans | normal 100% | auto 100% | 0% | ja |
| wantedly | 15 / 2.133 / 0.0313 | — | 72 / 1.333 / 0 | Poppins | Hiragino Sans | normal 100% | auto 100% | 0% | ja-JP |
| yomiuri | 13 / 1.5 / 0 | 13 / 1.5 / 0 | 16 / 1.4 / 0 | Roboto | Hiragino Kaku Gothic ProN | normal 100% | auto 100% | 10% | ja |
| zenn | 14.4 / 1.6 / 0 | 14.4 / 1.6 / 0 | 16.8 / 1.5 / 0 | Hiragino Kaku Gothic ProN | Hiragino Kaku Gothic ProN | normal 100% | strict 100% | 0% | ja |

## Not readable (copied from the summary)

- folio: status 403
- jal: page.goto: net::ERR_HTTP2_PROTOCOL_ERROR at https://www.jal.co.jp/ja-jp/
- mercari: 0 characters of the script (html lang "en")
- nintendo: 0 characters of the script (html lang "en-US")
- panasonic: 0 characters of the script (html lang "en")
- sansan: 0 characters of the script (html lang "en")
- studio: 0 characters of the script (html lang "en")
- toyokeizai: page.goto: Timeout 45000ms exceeded.
- toyota: 0 characters of the script (html lang "en")
- uniqlo: status 403
- zozotown: status 403
