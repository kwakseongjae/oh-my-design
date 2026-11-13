# /kana — sources

Every source the rule files cite, with its URL, what kind of document it is, what it says it covers, and which rules rest on it. All were opened on 2026-11-11 and re-read against local copies on 2026-11-12. **Development draft (2026-11-13).**

How to read the status column:

- **Not one source here is a ratified standard for web typography.** JLREQ is a W3C Working Group Note about book composition. CSS Text 3 and CSS Text Decoration 3 are Candidate Recommendation Drafts. CSS Text 4 is a Working Draft. None is a W3C Recommendation.
- **The government documents set their own scope.** 外来語の表記 is a 内閣告示 that calls itself a よりどころ for general social life and leaves out specialist fields. 公用文作成の考え方 covers government documents. The やさしい日本語 guideline covers writing for foreign residents. Using any of them outside that scope is an extension, and the skill labels it as one.
- **Company and industry guides are single voices.** SmartHR is one company's rules for its own products. JTF is a translation industry body's guide.

"Rests on" lists the rules whose claim uses the source. "Mentioned" lists rules that name it only for contrast or to say it does not count.

## Japanese government

| Source | URL | Status | Scope it states | Rests on | Mentioned |
|---|---|---|---|---|---|
| デジタル庁デザインシステム (DADS) — タイポグラフィ | https://design.digital.go.jp/dads/foundations/typography/ | government design system (recommendations and tokens) | web; the 1.5 line-height recommendation is for 読み物コンテンツ (reading content) | JT-01, 02, 05, 22, 26 | JT-06 (disagreement), JT-31 (gives no line length) |
| DADS — ボタン | https://design.digital.go.jp/dads/components/button/ | government design system | — | none | negative finding only: no label wording guidance (writing gaps) |
| DADS — top page | https://design.digital.go.jp/dads/ | government design system | — | none | negative finding only: no writing page listed |
| 文化審議会「公用文作成の考え方（建議）」令和4年1月7日 (typography file's URL) | https://www.bunka.go.jp/seisaku/bunkashingikai/kokugo/hokoku/pdf/93731901_01.pdf | 文化審議会建議 | 公用文 (government documents) | JT-19, 29, 30 | — |
| 文化審議会「公用文作成の考え方（建議）」+ 解説, 令和4年1月7日 (writing file's URL, key KB) | https://www.bunka.go.jp/seisaku/bunkashingikai/kokugo/hokoku/pdf/93651301_01.pdf | 文化審議会建議 | 公用文: 法令, 告示・通知等, 記録・公開資料等, 解説・広報等. Product UI is not in its scope. | JW-01, 02, 03, 04, 05, 07, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 37, 38, 40, 41, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 55, 56, 59, 63, 65, 67, 68, 69, 70 | JW-06 (consistent with), JW-08 (same direction), JW-36, 42, 53, 54 (named, not counted) |
| 内閣告示第2号「外来語の表記」平成3年 (key GK) | https://www.bunka.go.jp/kokugo_nihongo/sisaku/joho/joho/kijun/naikaku/gairai/pdf/94380801_03.pdf | 内閣告示 | a よりどころ for 「一般の社会生活」 (法令, 公用文書, 新聞, 雑誌, 放送); not specialist fields, individuals' spelling or proper nouns; not a ban on past spellings. Whether software UI is in scope is not said. | JW-32, 33, 34 | JW-35 (JTF reports GK has no rule on compound separation) |
| 文化審議会答申「敬語の指針」平成19年2月2日 (key KG) | https://www.bunka.go.jp/seisaku/bunkashingikai/sokai/sokai_6/pdf/keigo_tousin.pdf | 文化審議会答申 | keigo in general social life, spoken and written | JW-09, 10, 11 | — |
| 出入国在留管理庁・文化庁「在留支援のためのやさしい日本語ガイドライン」2020年8月 (key YN) | https://www.moj.go.jp/isa/content/930006072.pdf | government guideline | writing for foreign residents whose first language is not Japanese | JW-12, 14, 15, 19, 20, 21, 23, 37, 45, 53, 54, 65, 66, 67, 68 | — |

The two rule files cite the 建議 at two different URLs. They are listed as given; this draft does not check whether the two PDFs are the same document.

The writing file reached two other 内閣告示, 常用漢字表 and 送り仮名の付け方, only through the 建議's restatement; their texts were not opened (JW-27, JW-29, JW-30). No JIS text was opened.

## W3C

| Source | URL | Status | Rests on | Mentioned |
|---|---|---|---|---|
| Requirements for Japanese Text Layout 日本語組版処理の要件 (JLREQ), 2020-08-11 | https://www.w3.org/TR/jlreq/ | W3C Working Group Note; its main target is books (§1.3 item 8). Read in five chunks; the last ~139k characters (§4.1.7 onward and the appendices) were not read. | JT-09, 17, 20, 26, 27, 28 (with a web source beside each); background: JT-03, 04, 06, 10, 11, 18, 31 | JT-32 (no truncation rule there) |
| CSS Text Module Level 3 | https://www.w3.org/TR/css-text-3/ | Candidate Recommendation Draft | JT-09, 12, 13; background: JT-11 | — |
| CSS Text 3 spec source (Bikeshed), csswg-drafts main | https://raw.githubusercontent.com/w3c/csswg-drafts/main/css-text-3/Overview.bs | editor's source of the same spec, used to check one sentence verbatim | JT-09 | — |
| CSS Text Module Level 4 | https://www.w3.org/TR/css-text-4/ | Working Draft | JT-14, 17, 20, 21 (always beside another source); background: JT-16, 18 | — |
| CSS Text Decoration Module Level 3 | https://www.w3.org/TR/css-text-decor-3/ | Candidate Recommendation Draft (the Japanese emphasis position is in a note and an informative appendix) | JT-27 | JT-25 (cross-reference) |
| W3C Internationalization, "Why use the language attribute?" | https://www.w3.org/International/questions/qa-lang-why | W3C i18n article (guidance, not a specification) | JT-25 | — |
| csswg-drafts #12386, initial value of `text-autospace` | https://github.com/w3c/csswg-drafts/issues/12386 | working-group issue thread; records the 2025-12-10 resolution "have normal as the initial value" | JT-21 | — |
| csswg-drafts #11074, `text-spacing-trim` and `palt` with Yu Gothic UI | https://github.com/w3c/csswg-drafts/issues/11074 | issue thread: participant comments, one of them from Microsoft; 6 comments hidden in the local copy | JT-08 | — |
| public-css-archive, 2025-09, message on #11074 | https://lists.w3.org/Archives/Public/public-css-archive/2025Sep/1022.html | mailing-list copy of an issue comment | JT-08 | — |
| jlreq-d, Requirements for Japanese Digital Text Layout | https://github.com/w3c/jlreq-d | repository only; no rendered draft | none (scope note: no W3C digital-text companion to JLREQ exists yet) | — |

## Browser, OS and font vendors

| Source | URL | Status | Rests on |
|---|---|---|---|
| MDN `text-spacing-trim` | https://developer.mozilla.org/en-US/docs/Web/CSS/text-spacing-trim | vendor documentation | JT-17; background: JT-18 |
| MDN `text-autospace` | https://developer.mozilla.org/en-US/docs/Web/CSS/text-autospace | vendor documentation | JT-21 |
| MDN `font-synthesis` | https://developer.mozilla.org/en-US/docs/Web/CSS/font-synthesis | vendor documentation ("may be desirable" for CJK fonts) | JT-26 |
| MDN `<ruby>` | https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ruby | vendor documentation (describes the element; does not require it) | JT-28 |
| MDN `text-overflow` | https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow | vendor documentation | JT-32 |
| browser-compat-data: `text-spacing-trim` | https://raw.githubusercontent.com/mdn/browser-compat-data/main/css/properties/text-spacing-trim.json | vendor data (opened 2026-11-11) | JT-17 |
| browser-compat-data: `text-autospace` | https://raw.githubusercontent.com/mdn/browser-compat-data/main/css/properties/text-autospace.json | vendor data (opened 2026-11-11) | JT-21 |
| browser-compat-data: `word-break` (`auto-phrase`) | https://raw.githubusercontent.com/mdn/browser-compat-data/main/css/properties/word-break.json | vendor data (opened 2026-11-11) | JT-14 |
| browser-compat-data: `text-emphasis` | https://raw.githubusercontent.com/mdn/browser-compat-data/main/css/properties/text-emphasis.json | vendor data (opened 2026-11-11) | JT-27 |
| Chrome for Developers, "CSS i18n features" | https://developer.chrome.com/blog/css-i18n-features | vendor documentation, last updated 2023-12-04 (older than the compat data) | JT-14, 21 |
| Microsoft Typography, OpenType registered features p–t (`palt`) | https://learn.microsoft.com/en-us/typography/opentype/spec/features_pt | vendor documentation (feature registry) | JT-07 |
| Microsoft Typography, Yu Gothic font family | https://learn.microsoft.com/en-us/typography/font-list/yu-gothic | vendor documentation | background: JT-23 |
| google/budoux README | https://github.com/google/budoux | vendor documentation (library README) | JT-13, 15 |
| Google Developers Blog, "Google Fonts launches Japanese support" (2018-09-28) | https://developers.googleblog.com/en/google-fonts-launches-japanese-support/ | vendor description of its own service | background: JT-24 |

## Company and industry guides

| Source | URL | Status | Scope it states | Rests on |
|---|---|---|---|---|
| JTF日本語標準スタイルガイド（翻訳用）第4.0版, 2026-07-25, 日本翻訳連盟 (key JTF) | https://www.jtf.jp/pdf/jtf_style_guide.pdf | industry association guideline | Japanese produced in commercial translation, horizontal text; names manuals and websites supplied with products (2.2.1). Pages 1–12, 17–24, 28–34 and 36–38 read. | JW-01, 02, 06, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 38, 39, 40, 41, 42, 43, 45, 46, 47, 49, 50, 51, 52, 55, 57, 58, 59 |
| JTF style guide index page | https://www.jtf.jp/tips/styleguide | index page | — | none (used to find the PDF) |
| SmartHR Design System — タイポグラフィ (design tokens) | https://smarthr.design/products/design-tokens/typography/ | company guide | SmartHR's products | supporting only: JT-01, 02, 05 (no letter-spacing stated), 22 |
| SmartHR — ライティング 基本的な考え方 (SH-ws) | https://smarthr.design/products/contents/writing-style/ | company guide | SmartHR's products | JW-08, 13, 14, 15, 17, 24, 37 |
| SmartHR — 記号（括弧、句点、スペースなど）の表記 (SH-sym) | https://smarthr.design/products/contents/idiomatic-usage/symbol/ | company guide | SmartHR's products | JW-39, 41, 42, 43, 44, 46, 47, 57, 58 |
| SmartHR — カタカナ語の表記 (SH-kata) | https://smarthr.design/products/contents/idiomatic-usage/katakana/ | company guide | SmartHR's products | JW-33, 34, 35 |
| SmartHR — 数字・数えの表記 (SH-cnt) | https://smarthr.design/products/contents/idiomatic-usage/count/ | company guide | SmartHR's products | JW-45, 49, 50, 51, 52, 53, 54, 55 |
| SmartHR — 漢字とひらがなの使い分け (SH-hira) | https://smarthr.design/products/contents/idiomatic-usage/hiragana/ | company guide | SmartHR's products | JW-29, 30 |
| SmartHR — エラーメッセージの基本的な考え方 (SH-err) | https://smarthr.design/products/contents/error-messages/overview/ | company guide | SmartHR's products | JW-64 |
| SmartHR — その他のUIテキスト (SH-app) | https://smarthr.design/products/contents/ui-text/app-writing/ | company guide | SmartHR's products | JW-39, 60, 61, 62 |
| SmartHR — Button (SH-btn) | https://smarthr.design/products/components/button/ | company guide | SmartHR's products | JW-60 |
| SmartHR — ライティング index | https://smarthr.design/products/contents/ | index page | — | none (used to list sub-pages) |

## Looked for and not found

Both rule files keep a gaps list (`research-typography/gaps.md`, `research-writing/gaps.md`). The ones an agent is most likely to reach for, so the skill does not state them:

- Typography: per-OS Japanese font stacks; the Yu Gothic Medium weight advice; where to apply `palt`; `font-kerning`; Japanese web-font loading; `line-clamp`; a web line length; a web equivalent of JLREQ line gap; hanging punctuation on the web; opening brackets at line end in CSS; JIS X 4051 text.
- Writing: 「〜になります」 and 「〜のほう」; あなた in UI text; English-style noun stacking (nearest: JW-17, JW-18); apology wording in errors; 句点 on buttons, labels and menus; menu labels; a guide that adopts ユーザ; a source for a typed space between Japanese and Latin text; the 〜 code point (U+301C vs U+FF5E); a yen-notation rule. Company guides other than SmartHR and JTF were not opened, so every PRAC count is out of two at most.
- Measurement: see [measured-jp.md](./measured-jp.md); it is OmD's own capture, not a source for any rule.
