# /kana — rule sources

Every rule that `SKILL.md` cites, with its source, the quote, its scope, its test and its strength. **Development draft (2026-11-13).** No native Japanese reader has reviewed this file yet.

## How this file was made

- Each rule block below is copied line for line from the two rule files revised after the independent check of 2026-11-12: `research-typography/rules.v2.md` (JT-01 … JT-32) and `research-writing/rules.v2.md` (JW-01 … JW-70). Headlines, Source, Quote, Scope, Test, Strength and `Unsourced for web:` lines are unchanged, including the markers `[raw]` (read from source markup or the rendered PDF page) and `[exact]` (re-requested with the original punctuation).
- One line is added to every block: **Standing**, the document status of each source the rule rests on. A source the block names only for contrast, or says does not count, is listed after "Named in the block but not relied on" (the same split as the Rests on / Mentioned columns of `sources.md`). Three writing rules (JW-32, JW-33, JW-70) also get a **Reviewer note** carrying a glyph-level doubt recorded in `research-writing/changes.md`.
- Quotes from web pages came through a text extraction step unless marked `[raw]` or `[exact]`. PDF quotes were transcribed from page images. Both kinds should be re-read against the source by a native reader before the skill ships.
- No rule was added, and no wording was strengthened. A rule's `Unsourced for web:` line records something the first draft claimed and the check took out. The skill never applies it.

## Strength labels (as the rule files use them)

| Label | Meaning |
|---|---|
| STD | Typography: normative text of a CSS spec at Candidate Recommendation Draft (CSS Text 3, CSS Text Decoration 3). Writing: set by a 内閣告示 within the scope the 告示 gives itself (only 外来語の表記 was read directly). No rule here has STD as its only support, and neither STD entry in the writing file should drive a blocking check. |
| WD | Defined in CSS Text 4, a W3C Working Draft. Values and initial values may still change. No rule rests on WD alone. |
| AUTH | Recommended or described by an authority: W3C Working Group Note (JLREQ, about book composition), W3C i18n, the Japanese government (デジタル庁 DADS; 文化審議会 建議 and 答申; 出入国在留管理庁・文化庁). |
| PRAC(n) | Practice in n company or industry guides read. Only SmartHR and JTF were opened, so n is at most 2, and SmartHR is one company's product rules. |
| VENDOR | Browser, OS or font vendor documentation (MDN, browser-compat-data, Chrome, Microsoft Typography, Google). |
| DERIVED | Follows from quoted text; no source states the advice itself. |

Labels inside the rules: "book composition (JLREQ); no web source" marks a description of book practice that no web source carries to the web. "Scope:" says what the source itself covers; using the rule outside it is an extension, and the block says so where the rule file does.

## Scope keys (writing)

- **GK** 外来語の表記 (内閣告示): a よりどころ for 「一般の社会生活」; excludes specialist fields, individuals' spelling and proper nouns. Whether software UI is general social life or a specialist field is not said.
- **KB** 公用文作成の考え方（建議）+ 解説: government documents (法令, 告示・通知等, 記録・公開資料等, 解説・広報等). Product UI is not in its scope.
- **KG** 敬語の指針 (答申): keigo in general social life, spoken and written.
- **YN** やさしい日本語ガイドライン: writing for foreign residents whose first language is not Japanese.
- **JTF** JTF日本語標準スタイルガイド（翻訳用）: Japanese produced in commercial translation; counted as covering product manuals and websites (JTF 2.2.1).
- **SH** SmartHR Design System: SmartHR's own products, help pages and releases.

## Layout

1. Applied by the skill: typography for web UI (22 rules).
2. Applied by the skill: writing (70 rules).
3. Background (print) — not applied by the skill (10 entries): the four that `rules.v2.md` moved to "Background, not rules" (JT-16, 18, 23, 24) and the six whose claim is book composition with no web leg of its own (JT-03, 04, 06, 10, 11, 31).

Source URLs and document status, by source: [sources.md](./sources.md). The live-site measurement the skill quotes beside these rules: [measured-jp.md](./measured-jp.md).

## Applied by the skill: typography for web UI

### Typography A. Line height (行間)

#### JT-01 Body text line-height at least 1.5
- Kind: typography. Region: Japan (government). Medium: web.
- Source: デジタル庁デザインシステム (DADS) Typography, 行高 — https://design.digital.go.jp/dads/foundations/typography/
- Quote: 「読み物コンテンツにおける本文テキストの行ボックスの高さ（行高）はフォントサイズに対して少なくとも1.5倍を維持することを推奨します。」
- Values: Std-16 170% / 175%, Std-17 170%, Std-18 160%; 150% is the floor for body.
- Supporting: SmartHR Design System (https://smarthr.design/products/design-tokens/typography/): 「行送りは、基本的にフォントサイズの1.5倍（NORMAL）です。」 (paragraphs).
- Test: line-height / font-size >= 1.5 on paragraph text.
- Strength: AUTH.
- Standing: デジタル庁デザインシステム (DADS): government design system, recommendation; SmartHR Design System: one company's guide, supporting only.

#### JT-02 Headings and large text take a tighter line-height than body; 100% mainly (主に) for one-line text inside components
- Kind: typography. Region: Japan. Medium: web.
- Source: DADS Typography. Quote: 「見出しなど文字サイズが大きくなるものは、本文よりも行間を狭めたほうが可読性が維持されます。」
- DADS values: Std 20–32px 150%; 36–45px 140%; Display 48–64px 140%; Dense (admin/business screens) 120–130%; Oneline 100% (DADS: 「主に」 one-line text in components such as buttons).
- Supporting: SmartHR headings 「行送りは、フォントサイズの1.25倍（TIGHT）です。」; labels 「行送りは、フォントサイズの1倍（NONE）です。」
- **Disagreement on the heading value:** DADS keeps headings at 140–150%; SmartHR sets 1.25. Both recorded.
- Test: heading ratio <= body ratio; flag 1.0 on text that can wrap (wrap check is judgment).
- Strength: AUTH.
- Standing: デジタル庁デザインシステム (DADS): government design system, recommendation; SmartHR Design System: one company's guide, supporting only.

### Typography B. Letter spacing (字間) and proportional metrics

#### JT-05 DADS letter-spacing tokens: 0, 0.01em or 0.02em by size; no negative token
- Kind: typography. Region: Japan. Medium: web.
- Source: DADS Typography, 文字間隔. Quote: 「文字間隔（letter-spacing）はフォントサイズの大小に応じて、0、1%（0.01em）、2%（0.02em）に指定されています。」
- Values: Std 16–26px 0.02em; 28–36px 0.01em; 45px 0; Display, Dense, Mono 0; Oneline 0.02em. No negative value on the page (absence, not a stated prohibition). SmartHR's page states no letter-spacing.
- Test (DADS projects only): letter-spacing on each text style matches the DADS token for that style (0, 0.01em or 0.02em). DADS states the tokens, not a general limit; [0, 0.02em] as a range is not stated by DADS.
- Strength: AUTH.
- Standing: デジタル庁デザインシステム (DADS): government design system, recommendation.

#### JT-07 `palt` is a discretionary OpenType feature; the registry suggests applications leave it off by default and turn other width features off when it is applied
- Kind: typography. Region: CJKV fonts (not Japan-specific). Medium: font technology (reaches the web via `font-feature-settings`).
- Source: Microsoft Typography, OpenType registered features p–t, Tag 'palt' — https://learn.microsoft.com/en-us/typography/opentype/spec/features_pt **[raw]** (page text saved by the fetch): "Re-spaces glyphs designed to be set on full-em widths, fitting them onto individual (more or less proportional) horizontal widths." "Example: The user invokes this feature in a Japanese font to get Latin, Kanji, Kana or Symbol glyphs with the full-width design but individual metrics." "Application interface: Discretionary feature: can be applied to glyph runs based on document markup, user control or other application criteria." "UI suggestion: This feature should be off by default." "Feature interaction: This feature is mutually exclusive to other horizontal glyph-width features ('chws', 'fwid', 'halt', 'hwid', 'pwid', 'qwid' and 'twid'), which should be turned off when it’s applied."
- Rule candidate: the off-by-default suggestion is addressed to application UI, not a statement that web authors must not set `palt` page-wide. No design system opened says where to apply it (headings-only advice is from blogs; gaps.md).
- Test: flag `palt` combined with any of `chws`, `fwid`, `halt`, `hwid`, `pwid`, `qwid`, `twid` on the same element.
- Unsourced for web: flagging `font-feature-settings: "palt"` on `html`/`body`.
- Strength: VENDOR (OpenType feature registry).
- Standing: OpenType feature registry (Microsoft Typography): vendor documentation.

#### JT-08 Reported hazard (csswg-drafts #11074): `halt` in Yu Gothic UI (system-ui on Japanese Windows) broke brackets; Microsoft removed `halt` and `palt` from Yu Gothic UI; one reporter says a late-2025 font update fixed it
- Kind: typography. Region: Japanese Windows. Medium: web.
- Source: csswg-drafts #11074 — https://github.com/w3c/csswg-drafts/issues/11074 — title "[css-text-4] `text-spacing-trim` (and `font-feature-settings: "palt"`) is harmful for Yu Gothic UI (system-ui in Japanese Windows)". Reporter (2024-10-22): "halt in Yu Gothic UI is broken. It causes broken disastrous rendering of brackets:" Microsoft participant (2024-10-24): "We removed the 'halt' and 'palt' OpenType features from the UI components of the fonts. No changes for the Yu Gothic, only Yu Gothic UI components were updated." A Chromium patch is reported on 2025-09-28; the issue was closed 2025-12-07. Reporter (2025-12-15): "By KB5070311 (Preview) and KB5072033, Yu Gothic UI was updated to version 1.95, and the above problems look like fixed". Mailing-list copy: https://lists.w3.org/Archives/Public/public-css-archive/2025Sep/1022.html — "Also some Japanese sites prefer `font-feature-settings: "palt"` to kern only hiragana, katakana, and some punctuations. However, if it is combined with `system-ui`, rendering failure … occurs."
- The bracket breakage is attributed to `halt`. The fix report ("look like fixed") and the `system-ui` + `palt` warning are one reporter's comments; no vendor states the advice. The local copy hides 6 comments behind "Load more".
- Rule candidate (DERIVED from participant reports): treat `system-ui` + `palt` on Japanese text as a review item; Windows machines without the late-2025 font update may still render it badly.
- Test: surface `system-ui` in the stack plus `palt` on the same element for review (rests on one reporter's comment).
- Strength: DERIVED (advice from participant reports). Secondary: VENDOR (Microsoft's comment on removing the features from Yu Gothic UI).
- Standing: csswg-drafts issue thread and its mailing-list copy: participant comments, not a resolution.

### Typography C. Line breaking (禁則処理)

#### JT-09 Characters that must not start a line (行頭禁則), and the looser book practice
- Kind: typography. Region: Japan. Medium: book composition (JLREQ); web behaviour per CSS Text 3 (Candidate Recommendation Draft), within the limits below.
- Source: JLREQ §3.1.7 **[exact]**: 「終わり括弧類（cl-02），ハイフン類（cl-03），区切り約物（cl-04），中点類（cl-05），句点類（cl-06），読点類（cl-07），繰返し記号（cl-09），長音記号（cl-10），小書きの仮名（cl-11）及び」「割注終わり括弧類（cl-29）を行頭に配置してはならない（行頭禁則）．」 Note **[exact]**: 「文字クラスとしての繰返し記号（cl-09）の中の繰返し記号[々] (IDEOGRAPHIC ITERATION MARK)，長音記号（cl-10）及び小書きの仮名（cl-11）を行頭禁則としない方法もあり，この方法を採用している書籍も多い．」 Newspapers allow ？ and ！ at line start (paraphrase).
- Web: CSS Text 3 §5.2 line-break — https://www.w3.org/TR/css-text-3/#line-break-property. The initial value is `auto`: "auto: The UA determines the set of line-breaking restrictions to use, and it may vary the restrictions based on the length of the line". For the other keywords: "The precise set of rules in effect for each of loose, normal, and strict is up to the UA and should follow language conventions." The spec then requires a minimum. **[raw]** from the spec source (csswg-drafts main, css-text-3/Overview.bs), checked twice: the third of four groups reads "The following breaks are forbidden for ''line-break/normal'' and ''strict'' line breaking and allowed in ''loose'':" and its bullets are "breaks before Japanese small kana or the Katakana-Hiragana prolonged sound mark, i.e. characters from the Unicode line breaking class CJ.", "breaks before iteration marks: 々 U+3005, 〻 U+303B, ゝ U+309D, ゞ U+309E, ヽ U+30FD, ヾ U+30FE", "breaks between inseparable characters (such as ‥ U+2025, … U+2026)". The fourth group: "The following breaks are allowed for ''loose'' if the writing system is Chinese or Japanese and are otherwise forbidden:" covers centered punctuation (・ ： ； ！ ？ …), suffixes and prefixes. The first group allows breaks before 〜 U+301C and ゠ U+30A0 for normal and loose in Chinese/Japanese.
- Reading (DERIVED; no source states the mapping): where `normal` or `strict` applies, CSS Text 3 requires small kana, ー and the listed iteration marks to stay off the line start, as JLREQ's main rule does; `loose` allows them, as JLREQ's looser book practice does. Under the initial value `auto` the rules are the UA's choice. No quoted CSS sentence covers 。、」 at line start.
- Test: flag `line-break: loose` or `anywhere` on Japanese body text for review (judgment: JLREQ notes that many books also allow small kana, ー and 々 at line start).
- Unsourced for web: a render test that no line starts with 。、」 (no quoted CSS sentence requires it for any value), and any render test under the initial value `auto`.
- Strength: AUTH (JLREQ, book composition). Secondary: STD (CSS behaviour per value, for `normal` / `strict` / `loose` only).
- Standing: JLREQ: W3C Working Group Note, about book composition; CSS Text 3: W3C Candidate Recommendation Draft.

#### JT-12 `line-break: anywhere` allows a break around every character including punctuation
- Kind: typography. Region: CSS. Medium: web.
- Source: CSS Text 3 §5.2: "anywhere: There is a soft wrap opportunity around every typographic character unit," including around punctuation and in the middle of words.
- Rule candidate: no `line-break: anywhere` on Japanese body text; it removes JT-09/JT-10 protection.
- Test: grep.
- Strength: DERIVED (from STD: CSS Text 3, Candidate Recommendation Draft). The definition is normative; the advice not to use it on Japanese body text is the researcher's.
- Standing: CSS Text 3: W3C Candidate Recommendation Draft.

#### JT-13 `word-break: keep-all` alone stops Japanese from breaking between kana/kanji
- Kind: typography. Region: CSS (CJK). Medium: web.
- Source: CSS Text 3 §5.1: "keep-all: Breaking is forbidden within “words”" … "In this style, sequences of CJK characters do not break."
- Rule candidate: Japanese has no inter-word spaces, so `keep-all` without inserted break points leaves only spaces and punctuation as breaks, and long text overflows. Korean keep-all practice does not carry over. CSS Text 3 itself gives the method for Japanese: "Japanese is usually typeset allowing line breaks between syllables within words." … "This can be achieved by marking the allowed wrapping points with wbr or U+200B ZERO WIDTH SPACE, and suppressing the other ones using word-break: keep-all." BudouX (JT-15) outputs that form with overflow-wrap: anywhere.
- Test: `keep-all` on Japanese text with no U+200B / `<wbr>` and no `overflow-wrap: anywhere`.
- Strength: DERIVED (from STD: CSS Text 3, Candidate Recommendation Draft). The definition is normative; the overflow consequence is the researcher's.
- Standing: CSS Text 3: W3C Candidate Recommendation Draft; BudouX README (Google): vendor documentation.

#### JT-14 `word-break: auto-phrase` (CSS Text 4, Working Draft) keeps Japanese phrases (文節) together; Chrome requires `lang="ja"`; shipped in Chromium only
- Kind: typography. Region: Japanese (Chrome). Medium: web.
- Sources: CSS Text 4 §5.1 (https://www.w3.org/TR/css-text-4/, Working Draft): "Behaves the same as normal, except that this value directs the user agent to perform language-specific content analysis"; Japanese example note: "the same results can be achieved automatically by using word-break: auto-phrase (assuming the content language is specified)." The Japanese passage is an example. Chrome for Developers, "CSS i18n features" (https://developer.chrome.com/blog/css-i18n-features; "Last updated 2023-12-04 UTC", so its "only for Japanese" is older than the BCD note below): "This feature improves the readability of Japanese text, and is available from Chrome 119"; "lang="ja" is required to declare that the text is in Japanese."; "Currently, Chrome supports this feature only for Japanese, using the BudouX C++ port that uses AdaBoost ML technology."
- Support (browser-compat-data css/properties/word-break.json, opened 2026-11-11): Chrome 119, Edge mirror, Firefox not supported, Safari "preview". BCD note (paraphrased by extraction): Japanese and Korean only; other languages behave as `normal`.
- Rule candidate: progressive enhancement for headings and short UI copy; falls back to `normal`. Which elements get it is not stated by any source.
- Test: if `auto-phrase` is used, the element or an ancestor has `lang="ja"`.
- Strength: VENDOR (lang requirement and support). Secondary: WD (CSS Text 4 definition).
- Standing: CSS Text 4: W3C Working Draft; Chrome for Developers blog: vendor documentation (last updated 2023-12-04); browser-compat-data: vendor data.

#### JT-15 BudouX: Google's phrase-break library (outputs U+200B break points, or HTML with keep-all + overflow-wrap: anywhere)
- Kind: typography. Region: Japanese (also zh-Hans, zh-Hant, Thai). Medium: web.
- Source: https://github.com/google/budoux — "BudouX is the successor to Budou, the machine learning powered line break organizer tool." "The default parser uses zero-width space (U+200B) to separate phrases." HTML mode wraps output in a span styled `word-break: keep-all; overflow-wrap: anywhere;`. "It takes only around 15 KB including its machine learning model."
- Using it where `auto-phrase` is unsupported is the researcher's framing; the README does not say so.
- Test: if BudouX output is present, the wrapper carries `overflow-wrap: anywhere`.
- Strength: VENDOR.
- Standing: BudouX README (Google): vendor documentation.

### Typography D. Punctuation and brackets (約物)

#### JT-17 、。「」（）・ are half-width glyphs that take spacing next to kana/kanji, so each ends up a full em (book composition, JLREQ); on the web, CSS `text-spacing-trim` (Working Draft) controls collapsing of that spacing
- Kind: typography. Region: Japan. Medium: book composition (JLREQ); web via `text-spacing-trim` (CSS Text 4, Working Draft).
- Source: JLREQ §3.1.2 **[exact]**: 「読点類（cl-07），句点類（cl-06），始め括弧類（cl-01），終わり括弧類（cl-02）及び中点類（cl-05）の字幅は，半角であるが，これらの約物が漢字等（cl-19），平仮名（cl-15）又は片仮名（cl-16）と連続する場合は，」「原則として，それぞれの約物の前又は後ろ（中点類（cl-05）は，その前及び後ろ）に一定の空き量をとることで，結果として全角というサイズになる（Figure 64）．」
- Web: CSS Text 4 §8.5 `text-spacing-trim`, initial value `normal`: "Set fullwidth opening punctuation with full-width glyphs (spaced) at the start of each line;". MDN (https://developer.mozilla.org/en-US/docs/Web/CSS/text-spacing-trim): "The text-spacing-trim property applies spacing/kerning to CJK punctuation characters to produce visually pleasing typography as defined by the Requirements for Japanese text layout (JLREQ) and the Requirements for Chinese text layout (CLREQ)." normal: "Collapses spacing between punctuation characters." MDN condition: "To avoid the risk of excessive kerning, fonts must have the OpenType Alternate Half Widths (halt) feature, the Contextual Half-width Spacing (chws) feature, or both. If the font doesn't have either feature, text-spacing-trim is disabled."
- Support (browser-compat-data css/properties/text-spacing-trim.json, opened 2026-11-11): Chrome 123 (normal, space-all, space-first, trim-start), Edge mirror; Firefox not supported (bugzil.la/1951795); Safari not supported (webkit.org/b/252068). MDN: `trim-both`, `trim-all`, `auto` "are not currently implemented in any browser"; Baseline "Limited availability"; experimental.
- Rule candidate (DERIVED): in Chrome 123+, pairs such as 」「 and 。」 collapse without a declaration only if Chrome ships the spec's initial value `normal` and the font has `halt` or `chws`; `space-all` turns collapsing off; Firefox and Safari do not support the property. The initial-value part is unverified: BCD carries no note that Chrome differs from the spec here (contrast JT-21), and that absence is not a statement that it matches.
- Test: flag `text-spacing-trim: space-all` (judgment); appearance is judgment only.
- Strength: AUTH (JLREQ, book composition). Secondary: WD (CSS Text 4) + VENDOR (MDN, BCD). See JT-08 for the Yu Gothic UI hazard.
- Standing: JLREQ: W3C Working Group Note, about book composition; CSS Text 4: W3C Working Draft; MDN: vendor documentation; browser-compat-data: vendor data.

#### JT-19 句読点: 「。」「、」 by default; 「，」 allowed in horizontal writing, one or the other per document
- Kind: writing. Region: Japan (government documents). Medium: documents (公用文); not stated for web UI specifically.
- Scope: 公用文 only.
- Source: 文化審議会「公用文作成の考え方（建議）」令和4年1月7日, I-5(1)ア — https://www.bunka.go.jp/seisaku/bunkashingikai/kokugo/hokoku/pdf/93731901_01.pdf (printed p.4) **[raw]**: 「句点には「。」（マル）読点には「、」（テン）を用いることを原則とする。横書きでは、読点に「，」（コンマ）を用いてもよい。ただし、一つの文書内でどちらかに統一する。」
- Test (公用文, or a house rule that adopts the 建議): flag a document that uses both 、 and ， as the comma. Applying it to web UI in general is an extension the 建議 does not make.
- Strength: AUTH (for 公用文).
- Standing: 文化審議会「公用文作成の考え方（建議）」: 文化審議会建議, scope 公用文.

### Typography E. Spacing between Japanese and Latin letters or digits (和欧間)

#### JT-20 和欧間 amount: JLREQ quarter em vs CSS 1/8 ic
- Kind: typography. Region: Japan (JLREQ); CJK generally (CSS). Medium: JLREQ book composition; CSS web.
- JLREQ §3.2.6 item 4: 「欧字・アラビア数字の前後に配置される平仮名（cl-15），片仮名（cl-16）又は漢字等（cl-19）との字間は，四分アキとする」; no quarter em at line start/end, solid next to punctuation (paraphrase of the exceptions).
- CSS Text 4 §8.4.1 (Working Draft): "The amount of space introduced by these keywords is 1/8 of the CJK advance measure, i.e 0.125ic". Note: "CSS uses 1/8ic in order to be conservative in its interference." and "with 1/4ic being more common in historical contexts due to metal type limitations."
- **Disagreement:** JLREQ 0.25em vs CSS 0.125ic. Not resolved.
- Test: judgment for amount.
- Strength: AUTH (JLREQ, book composition); the CSS side is WD (CSS Text 4, Working Draft; the 1/4ic sentence is in an informative note).
- Standing: JLREQ: W3C Working Group Note, about book composition; CSS Text 4: W3C Working Draft.

#### JT-21 `text-autospace`: shipped browsers use `no-autospace` as the initial value (BCD), so 和欧間 spacing appears only if declared; the spec's initial value is `normal` and shipped defaults may change
- Kind: typography. Region: CJK (MDN gives Katakana and Han as examples). Medium: web.
- Sources: CSS Text 4 §8.4 (Working Draft): initial value "normal"; normal "Same behavior as ideograph-alpha ideograph-numeric." browser-compat-data css/properties/text-autospace.json (opened 2026-11-11): Chrome 140, Firefox 145, Safari 18.4, each with the note "The initial value is `no-autospace` instead of `normal` (see csswg-drafts issue #12386)." Chrome supports only the `normal` and `no-autospace` values; Safari 18.4 also ideograph-alpha, ideograph-numeric, auto (insert from Safari 27); Firefox 145 all listed values. MDN: "Baseline 2025 — Newly available … Since November 2025". MDN on insert: "Adds the specified spacing only if there are no existing spaces between the ideographic and non-ideographic scripts." csswg-drafts #12386 (https://github.com/w3c/csswg-drafts/issues/12386): 2025-06-24 "Chrome hasn't shipped this yet, only under a runtime flag."; 2025-12-03 (Firefox developer) "We’re currently shipping with no-autospace for maximum compatibility with other browsers"; 2025-12-10 "RESOLVED: have normal as the initial value". The Chrome blog's "currently behind a flag" is from a post last updated 2023-12-04.
- The thread's "behind a flag" statements predate BCD's record; the difference is one of dates, not a conflict.
- **Disagreement:** the spec's initial value is `normal` (re-resolved 2025-12-10); the three shipped browsers use `no-autospace` (BCD). Both recorded.
- Rule candidate: as BCD records it, 和欧間 spacing appears only if the author declares `text-autospace: normal` (e.g. on `:lang(ja)`). This advice rests on BCD vendor data, not on the spec, and shipped defaults may change to follow the spec. With the default `insert` behaviour a typed space is not doubled. Re-check initial values before shipping.
- Test: grep for `text-autospace` on Japanese content.
- Strength: VENDOR (BCD notes). Secondary: WD (CSS Text 4, initial value `normal`).
- Standing: browser-compat-data: vendor data; CSS Text 4: W3C Working Draft; MDN: vendor documentation; csswg-drafts #12386: working-group issue thread (includes a recorded resolution); Chrome for Developers blog: vendor documentation (last updated 2023-12-04).

### Typography F. Font stacks, web fonts and `lang`

#### JT-22 DADS: Noto Sans JP for body, Noto Sans Mono for code; system fonts not prohibited; weights 400 and 700
- Kind: typography. Region: Japan. Medium: web.
- Source: DADS Typography. Quotes: 「フォントはオープンソース（SIL Open Font License 1.1）で、かつWebフォントとしても利用可能な「Noto Sans JP」」 (extraction cut the sentence); 「なおこれは、OSやデバイスネイティブのシステムフォントの使用を制限するものではありません。」; CSS example `font-family: 'Noto Sans JP', sans-serif;` and `font-family: 'Noto Sans Mono', monospace;` for `pre, code`; 「デザインシステムでは数値の400のNormalを「N」、700のBoldを「B」という太さレベルで表しています。」
- Supporting: SmartHR defers to OS fonts: 「ユーザーが慣れ親しんでいる環境を尊重し、またOSの設定に委ねることでさまざまな言語で正しくレンダリングされることを期待し、以下の書体を指定します。」 (the font list did not survive extraction).
- **Two approaches, recorded both:** DADS names a web font; SmartHR defers to OS fonts.
- Test: stack contains a Japanese face (Noto Sans JP or a named OS Japanese face) before the generic; generic last.
- Strength: AUTH.
- Standing: デジタル庁デザインシステム (DADS): government design system, recommendation; SmartHR Design System: one company's guide, supporting only.

#### JT-25 Declare `lang="ja"`; some browsers use it to choose Japanese fonts (and so Japanese glyph forms) when the author has set no font
- Kind: typography. Region: Japan (CJK generally). Medium: web.
- Source: W3C Internationalization, "Why use the language attribute?" — https://www.w3.org/International/questions/qa-lang-why : "It is best to add language information to your content now in order to be able to reap the benefits when new developments arise." "speakers of these languages expect the glyphs used to vary in small details from language to language." "In the absence of explicit styling applied by the content author, some browsers automatically assign appropriate fonts according to the language of the content." "An attribute on the html tag sets the language for all the text on the page." The page shows 雪 rendered differently under English, Korean, Traditional Chinese, Simplified Chinese and Japanese.
- `lang` alone does not guarantee Japanese glyph forms: the article says "some browsers" and "in the absence of explicit styling applied by the content author".
- Also needed by JT-14 (auto-phrase requires `lang="ja"`) and by CSS Text Decoration's default `[lang|=ja]` emphasis position (JT-27).
- Test: `<html lang="ja">` (or ja-JP) on Japanese pages; nested `lang` on other-language passages.
- Strength: AUTH (W3C i18n: recommends declaring language; font choice is described as some browsers' behaviour).
- Standing: W3C Internationalization article: W3C i18n guidance, not a specification.

### Typography G. Emphasis and ruby

#### JT-26 Avoid italic on Japanese fonts unless there is a reason (DADS); turning off font synthesis for CJK fonts "may be desirable" (MDN)
- Kind: typography. Region: Japan (DADS); CJK generally (MDN). Medium: web.
- Source: DADS Typography, イタリック — https://design.digital.go.jp/dads/foundations/typography/ : 「日本語フォントは通常、イタリック体の書体をもたないため、CSSでイタリック（font-style:italic）を適用しても標準のフェイスを傾けただけの斜体（font-style:oblique）と同等の表示となり可読性に劣ります。そのため、日本語フォントに対するイタリックの使用は、そうしなければならない理由がある場合を除いて避けてください。（なお、実際にイタリックの字体を斜体として合成するかどうかはfont-synthesisによって決まります。初期値では合成されます）」
- Source: MDN font-synthesis — https://developer.mozilla.org/en-US/docs/Web/CSS/font-synthesis : "Fonts used for Chinese, Japanese, Korean and other logographic scripts tend not to include these variants and synthesizing them might impede the legibility or change the meaning of the text. In these cases, it may be desirable to switch off the browser's default font-synthesis." (MDN's code example uses `:lang(ar)`, not Japanese.) Baseline widely available since January 2022.
- JLREQ §3.3.9 note (book composition; English as extracted): "selecting a different typeface and enclosing text within brackets are generally used and popular emphasis methods.", with ゴシック体 as the example typeface. No italic convention appears in the JLREQ chunks read.
- Rule candidate: avoid `font-style: italic` on Japanese text unless there is a reason (DADS). `font-synthesis: none` on `:lang(ja)` is an option MDN calls "may be desirable" for CJK fonts generally; no source states it as a rule for Japanese. Loading the bold weight you use (DADS: 400/700, JT-22) is DERIVED.
- Test: `font-style: italic` on Japanese text (DADS; whether there is a reason is judgment).
- Unsourced for web: flagging unreset `em`/`i` (no source opened says browsers italicise them), and font-weight values not declared in `@font-face` (derived from MDN's synthesis text).
- Strength: AUTH (DADS, italic). Secondary: VENDOR (MDN, "may be desirable"); AUTH (JLREQ, book composition, common emphasis methods).
- Standing: デジタル庁デザインシステム (DADS): government design system, recommendation; MDN: vendor documentation; JLREQ: W3C Working Group Note, about book composition.

#### JT-27 Emphasis dots (圏点): half size, above the text in horizontal writing, not on punctuation
- Kind: typography. Region: Japan. Medium: JLREQ book composition; CSS Text Decoration 3 web.
- JLREQ §3.3.9 (English as extracted): "The character size of emphasis dots is the half size of the base characters to be emphasized." "Emphasis dots are attached to the right of the base characters in vertical writing mode, or above them in horizontal writing mode." "SESAME DOT "﹅" in vertical writing mode and BULLET "•" in horizontal writing mode are those used for emphasis dots in general." "In practice, emphasis dots are not used for commas (cl-07), full stops (cl-06), opening brackets (cl-01) or closing brackets (cl-02)." (The punctuation exclusion is by custom: 「慣行として」.)
- CSS Text Decoration 3 (https://www.w3.org/TR/css-text-decor-3/, Candidate Recommendation Draft) §3.1: a lone `filled`/`open` "computes to circle in horizontal typographic modes and sesame in vertical typographic modes"; dot: "The filled dot is U+2022 '•'"; circle: "The filled circle is U+25CF '●'"; most punctuation (Unicode P*) gets no marks (paraphrase). §3.4 note: "In Japanese for example, the preferred position is over right." Appendix B (informative) default style: `[lang|=ja]` gets `text-emphasis-position: over right`; `rt { text-emphasis: none; }`.
- **Disagreement:** JLREQ names BULLET • for horizontal; the CSS default for horizontal `filled` is circle ●. Matching JLREQ would need `text-emphasis-style: filled dot` (DERIVED mapping). Both recorded.
- Support (browser-compat-data css/properties/text-emphasis.json, opened 2026-11-11): Chrome 99 unprefixed (-webkit- from 25), Firefox 46, Safari 7 (also a -webkit- entry at 7), Edge/Android/iOS mirror.
- Test: `text-emphasis` used on Japanese text → check the style keyword (judgment which shape the project wants).
- Strength: AUTH (JLREQ, book composition). Secondary: STD (CSS Text Decoration 3, Candidate Recommendation Draft; the Japanese position is in a note and an informative appendix) + VENDOR support.
- Standing: JLREQ: W3C Working Group Note, about book composition; CSS Text Decoration 3: W3C Candidate Recommendation Draft; browser-compat-data: vendor data.

#### JT-28 Ruby: half the base size as a principle, above the base in horizontal writing (book composition, JLREQ); MDN describes `<ruby>`/`<rt>` for this
- Kind: typography. Region: Japan. Medium: JLREQ book composition; HTML web.
- JLREQ §3.3.3: 「ルビの文字サイズは，原則として親文字の文字サイズの1/2とする（Figure 114）．」 §3.3.4 (English as extracted): "ruby is attached to the right of base characters in vertical writing mode, and above in horizontal writing mode." §3.3.5: "For horizontal writing mode, 'katatsuki' should not be adopted." §3.3.1 defines mono-ruby, jukugo-ruby and group-ruby.
- MDN `<ruby>` (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ruby): "represents small annotations that are rendered above, below, or next to base text, usually used for showing the pronunciation of East Asian characters." Baseline widely available since July 2015. MDN does not describe `<rp>` as a fallback. MDN describes the element; it does not require it.
- Test: where ruby is shown, `rt` font-size near 50% of base (JLREQ book principle, 原則として; judgment on the web).
- Unsourced for web: flagging readings in parentheses, or ruby built from positioned spans instead of `<ruby>`; no source opened requires `<ruby>`.
- Strength: AUTH (JLREQ, book composition). Secondary: VENDOR (MDN).
- Standing: JLREQ: W3C Working Group Note, about book composition; MDN: vendor documentation.

### Typography H. Numerals and full-width / half-width characters

#### JT-29 Arabic numerals in horizontal writing; comma every three digits; 兆・億・万 in kanji; full-width/half-width consistent within a document
- Kind: writing (with a typography check). Region: Japan (government documents). Medium: documents; not stated for web UI specifically.
- Scope: 公用文 only.
- Source: 文化審議会「公用文作成の考え方（建議）」I-4 (printed p.3) **[raw]**: 「ア　横書きでは、算用数字を使う。」「イ　大きな数は、三桁ごとにコンマで区切る。」「ウ　兆・億・万の単位は、漢字を使う。」「エ　全角・半角は、文書内で使い分けを統一する。」 I-6 エ (printed p.5): 「ローマ字（ラテン文字。いわゆるアルファベットを指す。）を用いるときには、全角・半角を適切に使い分ける。」
- The 建議 本文 requires consistency. Its commentary says there is no fixed rule on digit width but to use half-width digits for data and amounts (PDF p.27): 「算用数字に全角を用いるか半角を用いるかについて、特に定めはないが、使い分けの考え方を文書内で統一する。…また、データや金額等の数値を示す場合には、半角数字を用いる。全角の数字は、情報処理において数値として認識されない場合がある。」 and half-width for Western text (PDF p.31): 「また、欧文を書き表す場合には、半角を用いる。」 No source opened says "always half-width digits" for all text (gaps.md).
- Test (公用文, or a house rule that adopts the 建議): flag a document mixing full-width digits (U+FF10–FF19) and ASCII digits, or full-width Latin (U+FF21–FF5A) and ASCII Latin; flag full-width digits in data or amounts (commentary). Applying it to UI copy in general is an extension the 建議 does not make.
- Strength: AUTH (for 公用文).
- Standing: 文化審議会「公用文作成の考え方（建議）」: 文化審議会建議, scope 公用文.

#### JT-30 Iteration mark: only 々
- Kind: writing. Region: Japan (government documents). Medium: documents.
- Scope: 公用文 only.
- Source: same 建議, I-6 イ **[raw]**: 「繰り返し符号は、「々」のみを用いる。２字以上の繰り返しはそのまま書く。」
- Test (公用文, or a house rule that adopts the 建議): flag ゝ ゞ ヽ ヾ 〻. Applying it to UI copy in general is an extension the 建議 does not make.
- Strength: AUTH (for 公用文).
- Standing: 文化審議会「公用文作成の考え方（建議）」: 文化審議会建議, scope 公用文.

### Typography I. Line length (1行の文字数) and truncation

#### JT-32 Single-line truncation needs `overflow` and `white-space`; ellipsis is U+2026
- Kind: typography. Region: CSS (not Japan-specific). Medium: web.
- Source: MDN text-overflow — https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow : "The text-overflow property doesn't force an overflow to occur. To make text overflow its container, you have to set other CSS properties: overflow and white-space." ellipsis displays "an ellipsis ('…', U+2026 HORIZONTAL ELLIPSIS) to represent clipped text"; it "only affects content that is overflowing a block container element in its inline progression direction".
- No Japanese-specific truncation source found. JLREQ treats a typed …… as a two-character unit (JT-11); that is not about CSS truncation.
- Test: `text-overflow: ellipsis` without `overflow: hidden` and `white-space: nowrap`.
- Strength: VENDOR.
- Standing: MDN: vendor documentation.

## Applied by the skill: writing

### Writing A. Speech level and register (文体)

#### JW-01 One text uses one sentence-final style, です・ます (敬体) or だ・である (常体), not both
- Kind: WRITE. Scope: KB (one 文書); JTF (本文 of a translated document).
- Sources: KB 本文 III-1 イ (p.(7)), 解説 III-1 イ (p.-30-); JTF 1.1.1.
- Quotes: KB 「一つの文書内では、文末表現に敬体と常体とを混合して用いない。どちらか一方のみで統一する。ただし、引用や従属節、箇条書にする部分に異なる文末表現が現れるのは問題ない。」 JTF 「敬体と常体を混在させないようにします。」
- Example (composed): wrong 「設定を保存しました。次に通知を確認する。」 → right 「設定を保存しました。次に通知を確認します。」
- Test: script. Classify predicates before 。 (ます/です/ました/でした/ません/ください vs る/た/だ/である/ない); flag a body text with both. Skip list items, quotations and subordinate clauses (KB exempts them).
- Strength: AUTH (KB) + PRAC(1) (JTF).
- Standing: 公用文作成の考え方（建議）+ 解説: 文化審議会建議, scope 公用文; JTF日本語標準スタイルガイド（翻訳用）: industry association guideline for translated text (read here as covering product manuals and websites).

#### JW-02 Reader-facing text uses です・ます as the base (基本として, 目安, 基本的に), not as a fixed rule
- Kind: WRITE.
- Positions:
  - KB 本文 基本的な考え方 2(3)ウ (p.(2)): 「対外的な文書においては、「です・ます」体を基本として簡潔に敬意を表す。」 KB 解説 III-1 ア (p.-30-): 法令・告示・訓令 use 常体; 通知・依頼・照会・回答 use 敬体: 「通知、依頼、照会、回答など、特定の相手を対象とした文書では敬体（です・ます体）を用いることを目安とする。ただし、部内においては常体で書いてもよい。」
  - JTF 1.1.1: 「一般読者向けの紹介文、パンフレット、マニュアル、ウェブサイトの本文では、基本的に「敬体」を使います。」
  - KB 解説 III-1 ウ allows だ forms in 解説・広報 for warmth: 「解説・広報等の広く一般に示す文書等においては、親しみやすさを示すために活用する場合もある。」
- All three sources word it as a default: KB 「基本として」「目安とする」, JTF 「基本的に」. KB uses 常体 for 法令・告示・訓令 and allows だ forms in 解説・広報.
- Example (composed): wrong 「パスワードを変更した。」 (message to a user) → right 「パスワードを変更しました。」
- Test: judgment only (depends on audience and surface).
- Strength: AUTH (KB, 公用文) + PRAC(1) (JTF: manuals and web body text). Applying it to app UI is an extension of both.
- Standing: 公用文作成の考え方（建議）+ 解説: 文化審議会建議, scope 公用文; JTF日本語標準スタイルガイド（翻訳用）: industry association guideline for translated text (read here as covering product manuals and websites).

#### JW-03 In a formal 常体 text, use である・であろう・であった, not だ・だろう・だった
- Kind: WRITE. Scope: KB (公用文); KB itself allows だ in 解説・広報 (JW-02).
- Source: KB 本文 III-1 ウ (p.(7)): 「常体では、「である・であろう・であった」の形を用いる。」
- Example (composed): wrong 「本機能は試験運用中だ。」 → right 「本機能は試験運用中である。」
- Test: script for sentence-final だ。/だった。/だろう。 in a 常体 document marked formal; formality is judgment.
- Strength: AUTH (KB).
- Standing: 公用文作成の考え方（建議）+ 解説: 文化審議会建議, scope 公用文.

#### JW-04 Replace classical (文語) leftovers with spoken forms
- Kind: WRITE. Scope: KB.
- Source: KB 本文 III-1 エ (p.(7)): 「文語の名残に当たる言い方は、分かりやすい口語体に言い換える。」 Pairs: ～のごとく→～のように, 進まんとする→進もうとする, 大いなる進歩→大きな進歩; 解説 adds ～しつつも→～しながらも, ～とみなし→～とみて.
- Example (composed, using the source's pair): wrong 「以下のごとく設定します。」 → right 「以下のように設定します。」
- Test: script (word list above).
- Strength: AUTH (KB).
- Standing: 公用文作成の考え方（建議）+ 解説: 文化審議会建議, scope 公用文.

#### JW-05 Write 「〜すべき」, not 「〜するべき」; do not end on bare べき; no べく/べし
- Kind: WRITE. Scope: KB.
- Source: KB 本文 III-1 オ (p.(7)): 「「べき」がサ行変格活用の動詞（「する」「～する」）に続くときは、「～するべき…」としないで「～すべき…」とする。また、「～すべき」で文末を終えずに「～すべきである」「～すべきもの」などとする。」
- Example (composed): wrong 「定期的に更新するべき」 → right 「定期的に更新すべきです」
- Test: script (するべき; べく; べし; べき。).
- Strength: AUTH (KB).
- Standing: 公用文作成の考え方（建議）+ 解説: 文化審議会建議, scope 公用文.

#### JW-06 Headings, lists and table text may use 常体 or 体言止め when the body is です・ます; keep one style inside a set of headings or one list
- Kind: WRITE. Scope: JTF (translated documents); KB exempts lists from JW-01.
- Sources: JTF 1.1.2, 1.1.3, 1.1.4.
- Quotes: JTF 1.1.2 「本文が敬体であっても、見出しには常体や体言止めを使います。」 「すべての見出しを通して複数の文体をできるだけ混在させないことが重要です。」 JTF 1.1.3 「ひとまとまりの箇条書きでは、敬体と常体を混在させません。文末に句点（。）を付けるかどうかも統一します。」
- Example (src, JTF 1.1.3): body 「次をお知らせください。」 + list 「・商品名と型名」「・購入年月日」 is correct.
- Test: script (within one list or heading level, flag mixed 敬体/常体 endings and mixed 。).
- Strength: PRAC(1) (JTF), consistent with KB III-1 イ.
- Standing: JTF日本語標準スタイルガイド（翻訳用）: industry association guideline for translated text (read here as covering product manuals and websites). Named in the block but not relied on: KB.

### Writing B. Honorifics (敬語) and their overuse

#### JW-07 Do not climb to high keigo in public text: the (ら)れる level is the standard; no 「ございます」 at sentence end; 申します/参ります only in special cases; おります/いたします not often
- Kind: WRITE. Scope: KB 解説・広報等. It is about sentence endings; it says nothing about fixed greetings such as 「ありがとうございます」.
- Source: KB 本文 II-6 ウ (p.(6)); 解説 II-6 ウ (p.-27-).
- Quotes: 「程度の高い敬語を使えばよいというものではない。」 「「御利用たまわる際には」などとはせず「利用される際には」とするなど、助動詞「(ら)れる」を用いる程度の言い方を標準としたい。」 「文末は「です・ます」を基調とし、「ございます」は用いない。」
- Example (src): wrong 「御利用たまわる際には」 → right 「利用される際には」
- Test: script for でございます / たまわ / 賜 at predicate position (exclude ありがとうございます, おはようございます); FYI count of おります/いたします.
- Strength: AUTH (KB).
- Standing: 公用文作成の考え方（建議）+ 解説: 文化審議会建議, scope 公用文.

#### JW-08 In product text, do not stack keigo: 「◯◯しました」 not 「◯◯させていただきました」; 「確認してください」 not 「ご確認いただけますようお願いいたします」
- Kind: WRITE. Scope: SH (SmartHR products).
- Source: SH-ws 「敬語を使いすぎない」: 「敬語表現を多用して、情報が伝わりづらくならないように配慮しましょう。」 NG「◯◯させていただきました。」 OK「◯◯しました。」 NG「◯◯をご確認いただけますようお願いいたします。」 OK「◯◯を確認してください。」
- Example (src): as quoted.
- Test: script (させていただ; いただけますようお願い).
- Strength: PRAC(1). Same direction as KB (JW-07). See JW-09: 敬語の指針 does not ban させていただく.
- Standing: SmartHR Design System: one company's guide for its own products. Named in the block but not relied on: KB.

#### JW-09 「（さ）せていただく」 fits only when the writer acts (a) with the other side's permission and (b) receives a benefit from it; otherwise a plain humble form (いたします) reads better
- Kind: WRITE. Scope: KG (keigo in general).
- Source: KG 第3章 第2 6 【18】 解説1・2 (pp.40–41).
- Quotes: 「「（お・ご）……（さ）せていただく」といった敬語の形式は，基本的には，自分側が行うことを，ア）相手側又は第三者の許可を受けて行い，イ）そのことで恩恵を受けるという事実や気持ちのある場合に使われる。」 On 「本日，休業させていただきます。」: 「ア）の条件がない場合には「休業いたします。」の方が良いと言えるだろう。」
- Example (src): 「本日，休業させていただきます。」 → 「本日，休業いたします。」 (when no permission is involved)
- Test: judgment only (permission and benefit are not visible in the string). A script can surface every させていただ for review.
- Strength: AUTH (KG).
- Disagreement: KG makes it conditional and says acceptability differs by person (「許容度」); SH (JW-08) rejects it in product messages outright. Both recorded.
- Standing: 敬語の指針: 文化審議会答申, keigo in general social life. Named in the block but not relied on: SH.

#### JW-10 No 二重敬語 (the same kind of keigo twice on one word): 「お読みになる」, not 「お読みになられる」; a few doubled forms are established and allowed
- Kind: WRITE. Scope: KG.
- Source: KG 第2章 第2 6 (2) (p.30).
- Quotes: 「一つの語について，同じ種類の敬語を二重に使ったものを「二重敬語」という。」 「「二重敬語」は，一般に適切ではないとされている。ただし，語によっては，習慣として定着しているものもある。」 Established examples given: お召し上がりになる, お見えになる, お伺いする, お伺いいたす, お伺い申し上げる.
- KG 6 (3): 敬語連結 (two keigo verbs joined by て, e.g. お読みになっていらっしゃる) is not 二重敬語 and is 「基本的に許容されるものである」.
- Example (src): wrong 「お読みになられる」 → right 「お読みになる」
- Test: script (regex お\S+になられ; ご\S+になられ), whitelist the established forms above.
- Strength: AUTH (KG).
- Standing: 敬語の指針: 文化審議会答申, keigo in general social life.

#### JW-11 Do not use 尊敬語 on things: 「御注文の品は，そろいましたでしょうか」, not 「おそろいになりましたでしょうか」
- Kind: WRITE. Scope: KG (the case is a restaurant phrase; the grammar point is about the subject being an object).
- Source: KG 第3章 第3 6 【34】 解説1 (p.50).
- Quote: 「「お……になる」というのは尊敬語の形であるため，「おそろいになる」では「御注文の品」を立てていることになってしまうからである。」
- Example (src): wrong 「御注文の品はおそろいになりましたでしょうか。」 → right 「御注文の品は，以上でよろしいでしょうか。」
- Test: judgment only (needs to know the subject is an object); a script can list お〜になる/お〜になりました for review.
- Strength: AUTH (KG).
- Standing: 敬語の指針: 文化審議会答申, keigo in general social life.

#### JW-12 For readers whose first language is not Japanese: no 尊敬語 or 謙譲語; polite です・ます only
- Kind: WRITE. Scope: YN (foreign residents).
- Source: YN ステップ2 「文末は「です」「ます」で統一する」 (p.10): 「尊敬語、謙譲語は使わず、敬語は丁寧語だけにします。」
- Example (src): wrong 「お越しいただく必要はありません。」 → right 「来なくてもいいです。」
- Test: script (list of 尊敬/謙譲 verbs: いらっしゃる, おっしゃる, 召し上がる, 伺う, 申し上げる, お越し, ご覧, いただく; お〜になる; お〜する).
- Strength: AUTH (YN).
- Standing: 在留支援のためのやさしい日本語ガイドライン: government guideline (出入国在留管理庁・文化庁), for foreign residents.

#### JW-13 Use 「ご〇〇ください」 only when 〇〇する is a verb: 「ご利用ください」 yes, 「ご参考ください」 no (write 「ご参考にしてください」)
- Kind: WRITE. Scope: SH.
- Source: SH-ws 「正しい文法表現を使用する」: 「「ご◯◯ください」は「ご利用ください」など、「◯◯する」と言い換えられるときに使用します。」
- Example (src): wrong 「ご参考ください」 → right 「ご参考にしてください」
- Test: script (ご参考ください; the general case needs a list of non-サ変 nouns).
- Strength: PRAC(1).
- Standing: SmartHR Design System: one company's guide for its own products.

### Writing C. Translationese, redundancy and sentence build

#### JW-14 Write 「〜できる」 rather than 「〜することができる」 (DISAGREEMENT: YN gives the long form for foreign readers)
- Kind: WRITE.
- Positions:
  - KB 本文 II-5 ウ(イ) (p.(6)), 解説 p.-26-: 「回りくどい言い方や不要な繰り返しはしない。」 例「利用することができる → 利用できる」. Scope: 公用文.
  - SH-ws 「冗長な日本語を避ける」: 「ユーザーに簡潔明瞭に伝えるため、「することができる」などの冗長な表現は極力避けましょう。」 OK「◯◯できます。」 NG「◯◯することができます。」 Scope: SmartHR.
  - YN p.10 POINT box: 「可能 → することができます」「不可能 → することができません」. Scope: writing for foreign residents. The box gives no reason.
- Example (src, KB): 「利用することができる」 → 「利用できる」
- Test: script (することができ), FYI; suppress on surfaces marked やさしい日本語.
- Strength: AUTH (KB) + PRAC(1) vs AUTH (YN) for its own audience.
- Standing: 公用文作成の考え方（建議）+ 解説: 文化審議会建議, scope 公用文; 在留支援のためのやさしい日本語ガイドライン: government guideline (出入国在留管理庁・文化庁), for foreign residents; SmartHR Design System: one company's guide for its own products.

#### JW-15 Write 「〜する」, not 「〜を行う／実行する／実施する」, after a サ変 noun
- Kind: WRITE. Scope: KB (公用文); SH (UI); YN.
- Sources: KB 解説 II-5 ウ(イ) (p.-26-) 例「調査を実施した → 調査した」; SH-ws OK「削除する」 NG「削除を行う、削除を実行する」; YN p.8 例文「調査を実施した」→書き換え例「調査した」.
- Quote (KB): 「必要のない言葉は削り、すっきりとした表現にする。」
- Example (src): 「削除を行う」 → 「削除する」
- Test: script (regex [一-龯]{2,}を(行う|行い|実行|実施)), FYI.
- Strength: AUTH (KB, YN) + PRAC(1).
- Standing: 公用文作成の考え方（建議）+ 解説: 文化審議会建議, scope 公用文; 在留支援のためのやさしい日本語ガイドライン: government guideline (出入国在留管理庁・文化庁), for foreign residents; SmartHR Design System: one company's guide for its own products.

#### JW-16 Avoid doubled meaning (重言)
- Kind: WRITE. Scope: KB.
- Source: KB 解説 II-5 ウ(ア) (p.-26-): 「意味が重複する表現（「重言」「重ね言葉」などとも。）は、むやみに用いないようにする。」 Pairs: 第1日目→第1日・1日目; 約20名くらい→約20名・20名くらい; 違和感を感じる→違和感を覚える. KB adds that some (従来から, まず最初に) are accepted by usage.
- Example (src): 「約20名くらい」 → 「約20名」
- Test: script (source list), FYI only.
- Strength: AUTH (KB).
- Standing: 公用文作成の考え方（建議）+ 解説: 文化審議会建議, scope 公用文.

#### JW-17 Keep case particles: 「項目名を変更します」, not 「項目名変更します」
- Kind: WRITE. Scope: SH (sentences; SH titles use nouns, see JW-61).
- Source: SH-ws 「格助詞をむやみに省略しない」: 「言葉同士の関係がわかりやすいように、「が」「の」「を」「に」「へ」「と」「より」「から」「で」などの格助詞は省略せずに記載しましょう。」
- Example (src): 「項目名変更します。」 → 「項目名を変更します。」
- Test: script heuristic (kanji noun + kanji サ変 noun + します with no particle between), FYI.
- Strength: PRAC(1).
- Standing: SmartHR Design System: one company's guide for its own products.

#### JW-18 Do not chain the same particle (の…の…の)
- Kind: WRITE. Scope: KB.
- Source: KB 本文 III-3 キ (p.(8)), 解説 p.-33-: 「「の」「に」「も」「て」などの助詞を連続して使うと、文が長くなるだけでなく稚拙な印象を与えてしまうおそれがある。」
- Example (src): 「本年の当課の取組の中心は…」 → 「本年、当課が中心的に取り組んでいるのは…」
- Test: script (three or more の in one clause), FYI. This is the closest sourced rule to "noun stacking" (gaps.md).
- Strength: AUTH (KB).
- Standing: 公用文作成の考え方（建議）+ 解説: 文化審議会建議, scope 公用文.

#### JW-19 Do not use the passive (and, for foreign readers, the causative) without need
- Kind: WRITE. Scope: KB (公用文); YN (writing for foreign residents). Neither source covers product UI; using this rule there is an extension the rule's sources do not state.
- Sources: KB 本文 III-3 ケ (p.(8)): 「受身形をむやみに使わない。」; 解説 p.-33-: 「動詞に「れる」「られる」を付けた受身形の表現は、文の構造を難しくしたり責任の所在を曖昧にしたりする場合がある。」 KB also lists when the passive helps (agent not needed, foregrounding the object). YN p.9: 「受身形や使役表現をできる限り使わない」 「行動の主体(視点)がわかりにくくなるので、できる限り使わないようにします。」
- Example (src, YN): 「住民税は、市町村で課税されます。」 → 「住民税は、市町村へお金を払います。」
- Test: judgment only (れる/られる also mark potential and honorific, as KB notes).
- Strength: AUTH (KB, YN).
- Standing: 公用文作成の考え方（建議）+ 解説: 文化審議会建議, scope 公用文; 在留支援のためのやさしい日本語ガイドライン: government guideline (出入国在留管理庁・文化庁), for foreign residents.

#### JW-20 No double negatives
- Kind: WRITE. Scope: KB; YN.
- Sources: KB 本文 III-3 コ (p.(8)): 「二重否定はどうしても必要なとき以外には使わない。」 KB 解説 III-3 コ: 「強調したいことを効果的に伝えようとするような場合を除き、なるべく避ける。」 YN p.9: 「「～ないことはない」「～ないわけではない」「～以上／以外は必要ない」などの二重に否定する表現はわかりにくくなります。」
- Example (src, YN): 「在留カード以外は必要ありません。」 → 「在留カードを持ってきてください。」
- Test: script (ないわけではない; ないことはない; なくはない; 以外は(必要|不要)), FYI.
- Strength: AUTH (KB, YN).
- Standing: 公用文作成の考え方（建議）+ 解説: 文化審議会建議, scope 公用文; 在留支援のためのやさしい日本語ガイドライン: government guideline (出入国在留管理庁・文化庁), for foreign residents.

#### JW-21 Short sentences, one point each; three or more parallel items go in a list
- Kind: WRITE (length is mechanically checkable). Scope: KB (公用文); YN (writing for foreign residents). Neither source covers product UI; using this rule there is an extension the rule's sources do not state.
- Sources: KB 本文 III-3 ア・イ・ウ (p.(8)), 解説 p.-32-: 「適当な長さは一概に決められないが、50～60字ほどになってきたら読みにくくなっていないか意識するとよい。」 「一文の中で、並立する情報を三つ以上列挙するときには、箇条書を利用するなどして分かりやすく示す。」 YN p.8: 「一文は短くする(一文に言いたいことは１つだけ)」 「３つ以上のことを言うときは、箇条書きにする」.
- KB's 50–60 characters is a prompt to check readability (「意識するとよい」), not a limit.
- Example (src, YN): 「入会をご希望の方は、窓口にお越しいただくか、ホームページでの申込み、または電話・FAXでお申し込みください。」 → 「入会をご希望の方は、３つの申込み方法があります。」 + bulleted list.
- Test: script, FYI only (sentence of 50–60+ characters: a prompt to re-read, never an error; three or more 、-joined items: FYI).
- Strength: AUTH (KB, YN).
- Standing: 公用文作成の考え方（建議）+ 解説: 文化審議会建議, scope 公用文; 在留支援のためのやさしい日本語ガイドライン: government guideline (出入国在留管理庁・文化庁), for foreign residents.

#### JW-22 Do not string clauses with が or 連用中止
- Kind: WRITE. Scope: KB.
- Source: KB 本文 III-3 カ (p.(8)): 「接続助詞や中止法（述語の用言を連用形にして、文を切らずに続ける方法）を多用しない。」
- Example (src): KB 解説 p.-32- splits a three-clause 委員会 sentence into three.
- Test: script (two or more clause-medial 「が、」 in one sentence), FYI.
- Strength: AUTH (KB).
- Standing: 公用文作成の考え方（建議）+ 解説: 文化審議会建議, scope 公用文.

#### JW-23 In public-facing text prefer 和語 verbs to 漢字1字+する verbs and hard 漢語
- Kind: WRITE. Scope: KB 解説・広報等; YN.
- Sources: KB 本文 II-8 イ・エ (p.(7)), 解説 p.-29-: 「「漢字１字＋する」型の動詞を多用しない。」 例「模する→似せる」「作業が進捗する→作業がはかどる」. KB II-8 ウ adds the reverse: 漢語 for weight or precision, and in short headings. YN p.9: 「和語を使う(漢語はできる限り使わない)」 例「こちらに記入願います」→「この紙に書いてください」.
- Example (src, KB): 「作業が進捗する」 → 「作業がはかどる」
- Test: script (short word list), FYI.
- Strength: AUTH (KB, YN).
- Standing: 公用文作成の考え方（建議）+ 解説: 文化審議会建議, scope 公用文; 在留支援のためのやさしい日本語ガイドライン: government guideline (出入国在留管理庁・文化庁), for foreign residents.

#### JW-24 Use words the reader knows, not in-house jargon
- Kind: WRITE.
- Sources: KB 解説 II-6 ア (p.-27-): 「府省庁内でよく用いられる「喫緊の課題」「可及的速やかに」などといった用語は、広く一般の人々に向けた解説・広報等では「すぐに対応すべき重要な課題」「できる限り早く」などと言い換える。」 SH-ws: 「どのようなユーザーにも伝わりやすいように、辞書に載っている一般的な言葉を使いましょう。」
- Example (src): 「可及的速やかに」 → 「できる限り早く」
- Test: script for a word list; otherwise judgment.
- Strength: AUTH (KB) + PRAC(1).
- Standing: 公用文作成の考え方（建議）+ 解説: 文化審議会建議, scope 公用文; SmartHR Design System: one company's guide for its own products.

### Writing D. Kanji or kana

#### JW-25 Write formal nouns and auxiliary verbs in kana: こと, とき, ところ, もの, ため, 〜ていく, 〜てくる, 〜てみる, 〜てください, 〜ていただく, できる, ある, ない
- Kind: WRITE (mechanically checkable).
- Sources: KB 解説 I-1 (3) ア・ウ (pp.-11-–-12-); JTF 2.2.1 table 「ひらがなで書く」.
- Quotes: KB lists 「事→こと 時→とき 所・処→ところ 物・者→もの」, 「～（し）て下さる→てくださる」「～（し）て頂く→ていただく」 and 「出来る→できる（「利用ができる」。ただし、「出来が良い」などは漢字で書く。）」. KB keeps kanji for concrete referents: 「「事は重大である」「法律の定める年齢に達した時」…のように、具体的に特定できる対象がある場合には漢字で書く。」 JTF: ～ください (×～下さい), ～（する）こと (×～（する）事), できる (×出来る).
- Example (src, JTF): 「提出して下さい。」 → 「提出してください。」
- Test: script (下さい after て/で; て頂; 出来る as auxiliary; する事/した事), with the concrete-noun exceptions as FYI.
- Strength: AUTH (KB) + PRAC(1) (JTF).
- Standing: 公用文作成の考え方（建議）+ 解説: 文化審議会建議, scope 公用文; JTF日本語標準スタイルガイド（翻訳用）: industry association guideline for translated text (read here as covering product manuals and websites).

#### JW-26 Conjunctions 及び・又は・並びに・若しくは: kanji in 公用文, kana allowed in 解説・広報; JTF writes および・または・もしくは (DISAGREEMENT by scope)
- Kind: WRITE.
- Positions: KB 解説 I-1 (3) イ (p.-12-): 「〔漢字を使って書く接続詞〕 及び 又は 並びに 若しくは」; KB (3) オ: 「解説・広報等においては、分かりやすさや親しみやすい表現を優先する観点から、必要に応じて仮名で書くことがある。」 (及び→および, 又は→または). JTF 2.2.1: または (×又は), もしくは (×若しくは), および (×及び, 「接続詞の場合」).
- Example (src): 「又は」 → 「または」 (JTF; KB 解説・広報)
- Test: script once the house choice is set.
- Strength: AUTH (KB) vs PRAC(1) (JTF).
- Standing: 公用文作成の考え方（建議）+ 解説: 文化審議会建議, scope 公用文; JTF日本語標準スタイルガイド（翻訳用）: industry association guideline for translated text (read here as covering product manuals and websites).

#### JW-27 Use kanji and readings in the 常用漢字表; otherwise rewrite, write in kana, or add a reading
- Kind: WRITE (a table check is scriptable).
- Sources: KB 本文 I-1 (p.(3)): 「漢字の使用は、「常用漢字表」（平成22年内閣告示第２号）に基づくものとする。」 and for 解説・広報: 「漢字を用いることになっている語についても、仮名で書いたり振り仮名を使ったりすることができる。」 KB 解説 I-1 (2) カ (p.-10-): where ruby is impossible, put the reading in brackets: 「忸怩（じくじ）たる思い」. JTF 12 基本ルール 3: 「常用漢字表にある漢字と音訓を優先的に使用する。」 ○おいしい ×美味しい.
- Example (src, JTF): 「美味しい」 → 「おいしい」
- Test: script (characters outside the 常用漢字表; readings outside the table need a dictionary). The 告示 itself was not opened; take the character list from it, not from this file.
- Strength: AUTH (KB, resting on the 常用漢字表 告示, which was not opened) + PRAC(1).
- Standing: 公用文作成の考え方（建議）+ 解説: 文化審議会建議, scope 公用文; JTF日本語標準スタイルガイド（翻訳用）: industry association guideline for translated text (read here as covering product manuals and websites).

#### JW-28 Honorific prefix: 「御」 in kanji in 公用文 (御中, 御礼); 「ご」 in kana allowed in 解説・広報; JTF writes ご (DISAGREEMENT by scope)
- Kind: WRITE.
- Positions: KB 解説 I-1 (3) イ (p.-12-): 「「おん（御）」「ご（御）」は漢字で書く（「御中」「御礼」「御挨拶」「御意見」等）。」; KB (3) オ allows 「御指導→ご指導 御参加→ご参加」 in 解説・広報. JTF 2.2.1: ご～ (×御～) 「（例）ご覧ください。ご意見。」
- Example (src): 「御意見」 (公用文) / 「ご意見」 (広報, JTF)
- Test: script once the house choice is set.
- Strength: AUTH (KB) vs PRAC(1) (JTF).
- Standing: 公用文作成の考え方（建議）+ 解説: 文化審議会建議, scope 公用文; JTF日本語標準スタイルガイド（翻訳用）: industry association guideline for translated text (read here as covering product manuals and websites).

### Writing E. Okurigana (送り仮名)

#### JW-29 Verbs take the full 本則 okurigana: 取り消す, 書き込む, 申し込む (not 取消す, 書込む)
- Kind: WRITE.
- Sources: KB 解説 I-2 ア (p.-13-): 「原則として「送り仮名の付け方」（昭和48年内閣告示第２号）の「本則」と「例外」に従って送る。」; KB I-2 イ: 「同様の漢字を使う複合の語でも、動詞については、送り仮名の付け方の「本則」に従って書く。」 例「入れ替える 売り上げる 仕分ける 問い合わせる 申し合わせる 呼び出す」. JTF 12 基本ルール 4: 「動詞の送りがなは本則に従う。」 ○取り消す ×取消す. SH-hira: 「内閣告示の「送り仮名の付け方」に従い、送りがなをつけて表記します。」 OK 書き込み/取り消し, NG 書込/取消. SH's examples are nouns (書き込み, 取り消し); SH counts here through its general statement that it follows the 告示.
- Example (src, JTF): 「取消す」 → 「取り消す」
- Test: script (list of compound verbs with omitted okurigana).
- Strength: AUTH (KB) + PRAC(2) (JTF, SH).
- Standing: 公用文作成の考え方（建議）+ 解説: 文化審議会建議, scope 公用文; JTF日本語標準スタイルガイド（翻訳用）: industry association guideline for translated text (read here as covering product manuals and websites); SmartHR Design System: one company's guide for its own products.

#### JW-30 Compound nouns: 公用文 告示・通知 omit okurigana for 186 listed nouns (申込み, 取消し, 手続); 解説・広報 may write the school forms (売り場, 手続き); guides differ (DISAGREEMENT by scope)
- Kind: WRITE.
- Positions: KB 解説 I-2 イ (p.-13-): 「告示・通知等の文書では…活用がない複合の語について「送り仮名の付け方」通則６の「許容」…を適用する。」 KB I-2 ウ: 「広く一般の人に向けた解説・広報等においては、読み手に配慮して、多くの人が理解している学校教育で学ぶ表記を用いた方が良い場合がある。」 例 公用文「食品売場 期限付の職 解約の手続」 vs 学校教育「食品売り場 期限付きの職 解約の手続き」. JTF 2.1.4: nouns derived from compound verbs 「送りがなを省略できます」 (取り扱い・取扱い・取扱 all listed as usable) but fix one standard. SH-hira: OK 書き込み/取り消し, NG 書込/取消.
- Example (src, KB): 「解約の手続」 (告示・通知) / 「解約の手続き」 (広報)
- Test: script once the house choice is set.
- Strength: AUTH (KB) + PRAC(2), positions differ.
- Standing: 公用文作成の考え方（建議）+ 解説: 文化審議会建議, scope 公用文; JTF日本語標準スタイルガイド（翻訳用）: industry association guideline for translated text (read here as covering product manuals and websites); SmartHR Design System: one company's guide for its own products.

#### JW-31 Nouns whose short form is fixed by usage keep it: 取締役, 書留, 日付, 献立
- Kind: WRITE. Scope: KB; JTF.
- Sources: KB 解説 I-2 ウ (p.-13-) (通則7: 「取締役」「書留」「子守」「献立」「日付」). JTF 2.1.4: 「送りがなの省略が慣用として定着している名詞は、送りがなを省略します。」 ○取締役 ×取り締まり役; ○申込書 ×申し込み書.
- Example (src, JTF): 「申し込み書」 → 「申込書」
- Test: script (short list).
- Strength: AUTH (KB) + PRAC(1). Note: JTF ○申込書 sits beside SH's full-okurigana preference (JW-30); a product must pick.
- Standing: 公用文作成の考え方（建議）+ 解説: 文化審議会建議, scope 公用文; JTF日本語標準スタイルガイド（翻訳用）: industry association guideline for translated text (read here as covering product manuals and websites). Named in the block but not relied on: SH.

### Writing F. Katakana loanwords (外来語)

#### JW-32 Use the established katakana spelling: 第1表 kana for words in general use; バ行 rather than ヴ in general use. On spellings outside both tables, the 告示 leaves them free while KB says not to use them (DISAGREEMENT)
- Kind: WRITE.
- Positions:
  - GK 本文 1: 「第１表に示す仮名は，外来語や外国の地名・人名を書き表すのに一般的に用いる仮名とする。」 GK 留意事項その1-4: 「国語化の程度の高い語は，おおむね第１表に示す仮名で書き表すことができる。」 GK 留意事項その2 II-7 注: 「一般的には「バ」「ビ」「ブ」「ベ」「ボ」と書くことができる。」 例「バイオリン ビーナス ベール」.
  - GK on sounds outside both tables: 本文 3 「第１表・第２表に示す仮名では書き表せないような，特別な音の書き表し方については，ここでは取決めを行わず，自由とする。」 留意事項その1-6 names 「スィ」「ズィ」「グィ」「グェ」「グォ」「キェ」「ニェ」「ヒェ」「フョ」「ヴョ」 among them.
  - KB 本文 I-3 (p.(3)) (公用文): 「「外来語の表記」の第１表によって日本語として広く使われている表記を用いることを基本とし、必要に応じて第２表を用いる。第１表及び第２表にない表記は、原則として使用しない。」 KB 解説 I-3 ウ (p.-14-): 「原則として「バビブベボ」を用い、「ヴ」をむやみに使用することは慎む。」
  - JTF 2.1.5: 「カタカナ表記は、平成3年6月28日内閣告示第2号「外来語の表記」に従います。」
- Example (src, GK): 「ヴァイオリン」 → 「バイオリン」 (GK lists both; バ form for general use)
- Test: script (ヴ: FYI; variants of one word within a document, e.g. ウィルス/ウイルス). Do not flag spellings outside both tables as a 告示 violation; flag them only under a 公用文 (KB) house rule.
- Strength: STD (GK, for the 第1表 basis and the バ行 allowance only; a よりどころ for general social life, excluding specialist fields) + AUTH (KB, for the no-outside-tables rule, 公用文 only) + PRAC(1).
- Standing: 外来語の表記: 内閣告示, a よりどころ for general social life; not specialist fields or proper nouns; 公用文作成の考え方（建議）+ 解説: 文化審議会建議, scope 公用文; JTF日本語標準スタイルガイド（翻訳用）: industry association guideline for translated text (read here as covering product manuals and websites).
- Reviewer note (research-writing/changes.md): the PDF text layer has hiragana 「べ」 inside 「バ」「ビ」「ブ」「ベ」「ボ」; the quote keeps katakana 「ベ」. Check the 告示 PDF page itself.

#### JW-33 Words from English -er / -or / -ar: ー at the end is the principle (ユーザー, コンピューター); the 告示 itself allows dropping it by custom (コンピュータ); guides choose differently (DISAGREEMENT)
- Kind: WRITE (scriptable).
- Positions:
  - GK 留意事項その2 III-3 注3: 「英語の語末の -er, -or, -ar などに当たるものは，原則としてア列の長音とし長音符号「ー」を用いて書き表す。ただし，慣用に応じて「ー」を省くことができる。」 例 「エレベーター ギター コンピューター マフラー」 / 「エレベータ コンピュータ スリッパ」. GK 留意事項その2 preamble: 語例 are examples, 「その語をいつもそう書かなければならないことを意味するものではない」.
  - KB 解説 I-3 エ (p.-14-): 「英語の語末の－er、－or、－arなどに当たるものは、ア列の長音とし、長音符号を用いて書くのが原則である。」 例「コンピューター（computer）エレベーター（elevator）カレンダー（calendar）」. KB does not repeat GK's allowance (公用文).
  - JTF 2.1.6: 「カタカナ語の末尾の長音は、原則として省略しません。」 ○ユーザー ×ユーザ; ○プリンター ×プリンタ. JTF on the field split: 「業界や分野によって長音を付ける／付けないの運用にゆれがあります。」 「どちらにする場合でも、同一文書内で統一することが重要です。」 JTF 5.4 (特許・知財) records that in patent translation the final ー is often dropped: 「語尾の長音は省略することが多い」.
  - SH-kata: 「‐er、‐or、‐arで終わる単語は長音をつける」 例「ユーザー、マスター、フィルター」, with exceptions 「browserは、ブラウザ」「folderは、フォルダ」.
- Example (src): 「ユーザ」 → 「ユーザー」 (the word appears in JTF's table and SH's list; KB covers it by rule but does not list the word); 「コンピュータ」 is allowed by GK where custom has it.
- Test: script for inconsistency within one product; flag ユーザ etc. only under a house rule that chose ー.
- Strength: STD (GK: ー as principle, omission allowed by custom) + AUTH (KB) + PRAC(2). The ユーザ side is sourced only by GK's allowance, SH's ブラウザ/フォルダ exceptions and JTF's note on patent translation; no guide opened adopts ユーザ itself (gaps.md).
- Standing: 外来語の表記: 内閣告示, a よりどころ for general social life; not specialist fields or proper nouns; 公用文作成の考え方（建議）+ 解説: 文化審議会建議, scope 公用文; JTF日本語標準スタイルガイド（翻訳用）: industry association guideline for translated text (read here as covering product manuals and websites); SmartHR Design System: one company's guide for its own products.
- Reviewer note (research-writing/changes.md): the PDF text layer reads 「英語の語末の ─er，─or，─ar などに当たるものは，…」 (U+2500 and full-width commas); the quote was left as is. Check the 告示 PDF page itself.

#### JW-34 Words ending in -y: with ー (KB rule; JTF rule and table: メモリー, パーティー; GK example パーティー) or without (SH: セキュリティ, アクセシビリティ); JTF notes that variation continues (DISAGREEMENT)
- Kind: WRITE.
- Positions: GK 留意事項その2 III-3 例 includes 「パーティー」; GK 留意事項その1-2 declines to settle variant word forms: 「語形にゆれのあるものについて，その語形をどちらかに決めようとはしていない。」 KB 解説 I-3 エ (p.-14-): 「そのほか、－ty、－ryなど、yで終わる語も長音符号を用いて書く。」 例「コミュニティー（community）カテゴリー（category）」. SH-kata: 「-yで終わる単語は基本的に長音をつけない」 例「セキュリティ、アクセシビリティ」. JTF 2.1.6: 「カタカナ語の末尾の長音は、原則として省略しません。」; its table marks ○メモリー ○パーティー ○アクセサリー and lists メモリ, パーティ, アクセサリ as not used. JTF then remarks on variation: 「「セキュリティー／セキュリティ」「アイデンティティー／アイデンティティ」などもゆれが続いています。」 「どちらにする場合でも、同一文書内で統一することが重要です。」
- Example: 「セキュリティー」 (KB rule, JTF rule) / 「セキュリティ」 (SH)
- Test: script for consistency inside one product only.
- Strength: AUTH (KB) + PRAC(1) (JTF) vs PRAC(1) (SH). GK gives an example, not a -y rule.
- Standing: 外来語の表記: 内閣告示, a よりどころ for general social life; not specialist fields or proper nouns; 公用文作成の考え方（建議）+ 解説: 文化審議会建議, scope 公用文; JTF日本語標準スタイルガイド（翻訳用）: industry association guideline for translated text (read here as covering product manuals and websites); SmartHR Design System: one company's guide for its own products.

#### JW-35 Separating katakana compounds: 中黒, half-width space, or nothing, chosen once per document (JTF); JTF does not recommend (お勧めしません) using 中黒 for both compounds and parallel items in one document
- Kind: WRITE (consistency scriptable).
- Sources: JTF 2.1.7 and 12 基本ルール 6: 「カタカナ複合語の区切りは、全角中黒、半角スペース、または区切りなしのいずれかに統一する。区切りなしのルールでも、誤読しそうな場合には中黒を併用する。」 JTF reports that GK has no rule on this (citing GK 留意事項その1-3: 「分野によって異なる慣用が定まっている場合には、それぞれの慣用によって差し支えない」); JTF itself chose not to use "nothing" as its default. JTF 3.2.4: 「同一の文書で、カタカナ複合語の区切りに中黒を使い、同格の語句の並列にも中黒を使用するのは、お勧めしません。」 Unseparated examples JTF accepts: ログイン, チェックアウト, リアルタイム, ダブルクリック. KB 本文 I-5 (1) イ: 「「・」（ナカテン）は、並列する語、外来語や人名などの区切り、箇条書の冒頭等に用いる。」 SH: no rule (SH-kata).
- KB lists both uses for ・ and gives no caution against combining them; it supports 中黒 for loanword division, not the caution.
- Example (src, JTF): 「カー・ナビゲーション・システム」 / 「カー ナビゲーション システム」 / 「カーナビゲーションシステム」
- Test: script (mixed styles within a document).
- Strength: PRAC(1) (JTF) + AUTH (KB, which allows 中黒 for loanword division).
- Standing: 公用文作成の考え方（建議）+ 解説: 文化審議会建議, scope 公用文; JTF日本語標準スタイルガイド（翻訳用）: industry association guideline for translated text (read here as covering product manuals and websites); SmartHR Design System: one company's guide for its own products. Named in the block but not relied on: GK.

#### JW-36 No half-width katakana except for special uses (JTF)
- Kind: TYPO (scriptable: U+FF61–U+FF9F). Scope: JTF (translated documents, incl. product manuals and websites).
- Sources: JTF 2.1.5: 「カタカナは「全角」で表記します。半角カタカナは、特殊な用途を除き、原則として使いません。」 ○メールアドレス ×ﾒｰﾙｱﾄﾞﾚｽ. KB 解説 I-6 カ (p.-20-) lists 半角カナ among characters with which 「電子的な情報交換の難しいもの」 exist.
- KB only cautions that some half-width kana may be hard to exchange electronically; it does not say to avoid them, so it is not counted.
- Example (src, JTF): 「ﾒｰﾙｱﾄﾞﾚｽ」 → 「メールアドレス」
- Test: script (regex [｡-ﾟ]).
- Strength: PRAC(1) (JTF).
- Standing: JTF日本語標準スタイルガイド（翻訳用）: industry association guideline for translated text (read here as covering product manuals and websites). Named in the block but not relied on: KB.

#### JW-37 Prefer a Japanese word to an unfamiliar katakana word; keep settled ones; explain the rest
- Kind: WRITE.
- Sources: KB 本文 II-3 (p.(5)): 「日本語に十分定着しているものは、そのまま使う。」(ストレス, ボランティア) 「日常使う漢語や和語に言い換える。」(アジェンダ→議題, インタラクティブ→双方向的) 「分かりやすく言い換えることが困難なものは、説明を付ける。」 SH-ws: 「カタカナ語を一切使用しないことは現実的ではありませんが、安易に使用しないようにしましょう。」 YN p.8: 「外来語は、「バス」、「ガス」、「テレビ」など、外来語以外に適切な日本語がない場合のみ使用します。」 例 スキーム→計画, コンセンサス→合意.
- Example (src, KB): 「アジェンダ」 → 「議題」
- Test: script for a list (YN cites 国立国語研究所「外来語」言い換え提案, not opened); otherwise judgment.
- Strength: AUTH (KB, YN) + PRAC(1).
- Standing: 公用文作成の考え方（建議）+ 解説: 文化審議会建議, scope 公用文; 在留支援のためのやさしい日本語ガイドライン: government guideline (出入国在留管理庁・文化庁), for foreign residents; SmartHR Design System: one company's guide for its own products.

### Writing G. Punctuation and symbols

#### JW-38 Use 、 and 。; 公用文 allows ， in horizontal text if used throughout; JTF forbids ， and ． as Japanese punctuation (DISAGREEMENT)
- Kind: TYPO.
- Positions: KB 本文 I-5 (1) ア (p.(4)): 「句点には「。」（マル）読点には「、」（テン）を用いることを原則とする。横書きでは、読点に「，」（コンマ）を用いてもよい。ただし、一つの文書内でどちらかに統一する。」 KB 解説 p.-17-: 句点に「．」は 「学術的・専門的に必要な場合等を除いて」 not used. JTF 1.2.1: 「句読点には全角の「、」と「。」を使います。和文の句読点としてピリオド（.）とカンマ（,）を使用しません。」
- Example (src, JTF): 「これは，見本となる例です．」 → 「これは、見本となる例です。」
- Test: script (，or ． between Japanese characters; mixed 、 and ， in one document).
- Strength: AUTH (KB) + PRAC(1).
- Standing: 公用文作成の考え方（建議）+ 解説: 文化審議会建議, scope 公用文; JTF日本語標準スタイルガイド（翻訳用）: industry association guideline for translated text (read here as covering product manuals and websites).

#### JW-39 No 。 on headings, on list items that are single words, or on short figure/table text; 。 on sentences, including a single sentence in a tooltip. Buttons, labels and menus: no source opened
- Kind: TYPO (scriptable given the element type).
- Sources: SH-sym: 「見出し（Heading）では、「。」は省略します。」 「単語を箇条書きにする場合は、「。」を省略します。」 「文章を箇条書きにする場合は、「。」をつけます。」 SH-sym on UI components: 「UIテキストでは、それぞれのコンポーネントごとのルールを参照してください。」 SH-app, under 「Tooltipのライティング」 only: 「1文のみの場合でも、文章には句点をつけます。」 「単語／ラベルのみの場合は句点を省略します。」 JTF 1.1.2: 「見出しの文末には、句点（。）を付けません。」 JTF 1.1.4: figure text 「通常、文末に句点（。）を付けませんが、複数の文章になる場合は句点を使用します。」
- Example (composed): wrong heading 「通知の設定。」 → right 「通知の設定」; wrong tooltip 「保存すると全員に通知されます」 → right 「保存すると全員に通知されます。」
- Test: script (h1–h6 ending in 。: flag; tooltip text that is a sentence and lacks 。: flag). Do not extend to buttons, labels or menus without a source (gaps.md).
- Strength: PRAC(2) (SH, JTF). No government source on UI text was opened.
- Standing: JTF日本語標準スタイルガイド（翻訳用）: industry association guideline for translated text (read here as covering product manuals and websites); SmartHR Design System: one company's guide for its own products.

#### JW-40 句点 before a closing bracket: 公用文 puts 。 inside when a sentence ends inside (「決める。」と発言した), and allows dropping it in 解説・広報; JTF puts no 。 before 」 or ） inside a sentence (DISAGREEMENT)
- Kind: TYPO.
- Positions: KB 本文 I-5 (1) エ (p.(4)): 「括弧の中で文が終わる場合には、句点（。）を打つ。ただし、引用部分や文以外（名詞、単語としての使用、強調表現、日付等）に用いる場合には打たない。」 例「（以下「基本計画」という。）」「「決める。」と発言した。」 KB 解説 I-5 (1) オ (p.-17-): 「一般の社会生活においては、括弧内の句点を省略することが多い。解説・広報等では、そこで文が終わっていることがはっきりしている場合に限って、括弧内の句点を省略することがある。」 例「年内にも再開を予定しています（日程は未定です）。」 JTF 3.1.1: 「文中にかぎかっこが入る場合は、閉じかっこの前に句点を打ちません。文中に丸かっこが入る場合も閉じかっこの前に句点を打ちません。」 例「A氏は「5月に新製品を発売します」と述べました。」「従業員は約30,000人です（関連企業を含みます）。」
- Example: 「「決める。」と発言した。」 (KB 公用文, src) / 「A氏は「5月に新製品を発売します」と述べました。」 (JTF, src)
- Test: script for consistency (。」 and 。） inside sentences) once the house choice is set.
- Strength: AUTH (KB) vs PRAC(1) (JTF).
- Standing: 公用文作成の考え方（建議）+ 解説: 文化審議会建議, scope 公用文; JTF日本語標準スタイルガイド（翻訳用）: industry association guideline for translated text (read here as covering product manuals and websites).

#### JW-41 Brackets: （） and 「」 are the base; 『』 for titles or nesting; ［］ for UI element names; 【】 for labels or emphasis; avoid others (sources differ on 『』 and “ ”)
- Kind: WRITE.
- Positions:
  - KB 本文 I-5 (1) ウ・カ・キ (p.(4)); 解説 p.-17-: 「括弧は、（）（丸括弧）と「」（かぎ括弧）を用いることを基本とする。」 Nested brackets repeat as is; 「解説・広報等では、「」の中で『』（二重かぎ括弧）を使うこともある。」 【】 for items and emphasis; 「そのほかの括弧等はむやみに用いず、必要な場合は用法を統一して使用する。」
  - JTF 3.3.2: ［］ 「コンピューターの画面用語（UI）などの特殊な表記で使用します。」 例「［ファイル］メニュー」. 3.3.3: 「」 for quotation, reference, input text, emphasis. 3.3.4: 『』 for titles and nesting. 3.3.7: “ ” or " " allowed.
  - SH-sym: 「」 for file names and on-screen messages; ［］ for 「設定項目名、タブ名、操作ボタン名、選択肢など」; 【】 for 「ユーザーが独自に命名するオブジェクト名」; 「引用符“ ” や二重かぎ括弧 『 』は使用しません。」
- Example (src, JTF): 「［ファイル］メニュー」
- Test: script for consistency once the house set is chosen (e.g., button names in help text all in ［］ or all in 「」).
- Strength: AUTH (KB) + PRAC(2), positions differ.
- Standing: 公用文作成の考え方（建議）+ 解説: 文化審議会建議, scope 公用文; JTF日本語標準スタイルガイド（翻訳用）: industry association guideline for translated text (read here as covering product manuals and websites); SmartHR Design System: one company's guide for its own products.

#### JW-42 Full-width brackets, ？, ！ and ： in Japanese text as a principle; both guides also list half-width cases for other symbols
- Kind: TYPO (scriptable).
- Sources: JTF 12 基本ルール 9: 「原則として記号類は全角で表記する。」 ○「？！：（）［］」 ×「?!:()[]」. JTF 3.3.1: （） full-width; 「数式などでは原文のまま半角を使用します。」 SH-sym: 「記述記号は全角を使用します。」 and 「全文英語のプレスリリースやWovnでの翻訳結果では半角の( )を使用します。」; variables use half-width { }.
- Half-width cases the guides list: JTF 基本ルール 11 「ピリオド（.）、カンマ（,）、スペースは半角で表記する。」; JTF 3.2.3 slash: 半角または全角; JTF 3.2.6 hyphen: 半角. SH-sym 「例外として、半角記号を使用するケース」: currency ¥ and unit ％ written with digits, the digit-grouping comma, path separators / and >, variable braces { }.
- Example (composed): wrong 「設定(任意)」 → right 「設定（任意）」
- Test: script (half-width ()!?:[] adjacent to Japanese characters).
- Strength: PRAC(2). KB writes full-width brackets throughout but states no width rule for brackets. No source opened argues for half-width brackets in Japanese text (gaps.md). Exception (SH): paired !? and !! are half-width (JW-43).
- Standing: JTF日本語標準スタイルガイド（翻訳用）: industry association guideline for translated text (read here as covering product manuals and websites); SmartHR Design System: one company's guide for its own products. Named in the block but not relied on: KB.

#### JW-43 ！ and ？: use only where needed; full-width; after one that ends a sentence, a space before the next sentence (DISAGREEMENT on that space's width)
- Kind: TYPO (spacing) + WRITE (use).
- Positions:
  - KB 解説 I-5 (2) ア (p.-18-): 「公用文においても解説・広報等の文書、また、発言をそのまま記載する記録などにおいては、必要に応じて使用して差し支えない。なお、「？」「！」の後に文が続く場合には、全角又は半角１文字分空ける。」
  - JTF 3.2.1/3.2.2: 「本文では感嘆符を多用しません。」 full-width; 「後に別の文が続く場合は、直後に全角または半角スペースを挿入します。引用の形で文中に…使用する場合はスペースを挿入しません。」
  - SH-sym: 「「！」と「？」は単独で使う場合は全角、ペアで使う場合は半角で表記する」 「「！」「？」の後に文章が続く場合は、「！」「？」の直後に全角スペースを挿入してください。」 Exception: FAQ question headings take no space after ？.
- Example (src, JTF): 「A社の成功の秘密とは？　この本ではそれをご紹介します。」
- Test: script (？ or ！ followed directly by the start of a new sentence: flag; space width per house rule).
- Strength: AUTH (KB) + PRAC(2).
- Standing: 公用文作成の考え方（建議）+ 解説: 文化審議会建議, scope 公用文; JTF日本語標準スタイルガイド（翻訳用）: industry association guideline for translated text (read here as covering product manuals and websites); SmartHR Design System: one company's guide for its own products.

#### JW-44 Ellipsis: … or …… (KB); one … (SH)
- Kind: TYPO.
- Positions: KB 解説 I-5 (2) イ (p.-18-): 「「…」(３点リーダー) 続くものの存在を示す。」 例「牛、馬、豚、鶏…（又は二つ重ねる「……」）」. SH-sym: 「三点リーダー（…）は1つでOK」 「ウェブなのであまり気にせず1つに統一とします。」 JTF: not checked (gaps.md).
- KB I-5 (2) イ lists these as 「呼称・使用法の例」 under 「これらの用い方について特に定めはない」: described use, not a recommendation. What KB recommends there is one usage per document and no overuse.
- Example (composed): 「読み込み中…」 (SH style) / 「読み込み中……」 (KB allows)
- Test: script (count of consecutive … per house rule).
- Strength: AUTH (KB, consistency only; the … / …… uses are described, not recommended) vs PRAC(1).
- Standing: 公用文作成の考え方（建議）+ 解説: 文化審議会建議, scope 公用文; JTF日本語標準スタイルガイド（翻訳用）: industry association guideline for translated text (read here as covering product manuals and websites); SmartHR Design System: one company's guide for its own products.

#### JW-45 Ranges: 〜 for ranges (KB, JTF, SH), but YN says write から/まで and do not use 〜 for foreign readers (DISAGREEMENT)
- Kind: TYPO + WRITE.
- Positions: KB 解説 I-5 (2) イ (p.-18-): 「「～」(波形) 時間や距離などの起点と終点を表す。「から」「まで」を表す」 例「10時～12時」「価格：3,000円～」. JTF 3.2.5: 全角 〜, 「数値の範囲を示す場合に使用します。半角の~（チルダ）は使いません。」 例「18〜22歳」. SH-cnt: 「期間を表す場合には、〜（波線）を使います。」 OK「2022/01/01〜2022/03/01」 NG「2022/01/01 - 2022/03/01」. YN p.10: 「「○○から△△まで」と表記する(「～」は誤解を生むため使用しない)」.
- KB's 〜 entry is one of its 「呼称・使用法の例」 under 「これらの用い方について特に定めはない」: described use, not a recommendation.
- Example (half src): wrong 「午前9時～午後6時」 (composed) → right 「午前９時から午後６時まで」 (YN's own example)
- Test: script (ASCII ~ in a Japanese range: flag per JTF; 〜 on a やさしい日本語 surface: flag per YN).
- Strength: AUTH (KB, consistency only; the 〜 use is described, not recommended) + PRAC(2) vs AUTH (YN) for its audience. Code point (U+301C vs U+FF5E): no source opened settles it (gaps.md).
- Standing: 公用文作成の考え方（建議）+ 解説: 文化審議会建議, scope 公用文; 在留支援のためのやさしい日本語ガイドライン: government guideline (出入国在留管理庁・文化庁), for foreign residents; JTF日本語標準スタイルガイド（翻訳用）: industry association guideline for translated text (read here as covering product manuals and websites); SmartHR Design System: one company's guide for its own products.

#### JW-46 Inline lists: 、 when order matters, ・ when it does not (SH); ・ for parallel words (KB, JTF)
- Kind: WRITE.
- Sources: SH-sym: 「列挙の順序に意味があるときは、「、」を使用します。」 「順序を入れ替えても構わないときは、「・」を使用します。」 KB 本文 I-5 (1) イ (p.(4)) (・ for 並列する語). JTF 3.2.4 (中黒 for 同格の語句).
- Example (src, KB 解説 p.-17-): 「光の三原色は、赤・緑・青である。」
- Test: judgment only.
- Strength: AUTH (KB) + PRAC(2).
- Standing: 公用文作成の考え方（建議）+ 解説: 文化審議会建議, scope 公用文; JTF日本語標準スタイルガイド（翻訳用）: industry association guideline for translated text (read here as covering product manuals and websites); SmartHR Design System: one company's guide for its own products.

#### JW-47 Colon: JTF avoids ： in Japanese sentences except between a heading word and its explanation (full-width); SH uses 「例：」; KB lists ： for item and content
- Kind: TYPO.
- Sources: JTF 3.2.7: 「原則として和文ではコロン（：）を使用しません。」 「見出し語とその説明の間にコロンを使う場合があります。使用する場合は全角で表記します。」 SH-sym: 「例を示すときには、コロン（：）を使用する」 OK「例：hogehoge」 NG「（例）hogehoge、例）hogehoge、例: hogehoge」. KB 解説 I-5 (2) イ: 「「：」(コロン) 項目とその内容・説明等を区切る。」 例「住所：東京都千代田区…」.
- KB's ： entry is one of its 「呼称・使用法の例」 under 「これらの用い方について特に定めはない」: described use, not a recommendation.
- Example (src, SH): 「例: hogehoge」 → 「例：hogehoge」
- Test: script (half-width : after Japanese text: flag).
- Strength: AUTH (KB, consistency only; the ： use is described, not recommended) + PRAC(2).
- Standing: 公用文作成の考え方（建議）+ 解説: 文化審議会建議, scope 公用文; JTF日本語標準スタイルガイド（翻訳用）: industry association guideline for translated text (read here as covering product manuals and websites); SmartHR Design System: one company's guide for its own products.

#### JW-48 The repeat mark is only 々, for one kanji; repeat two or more characters in full (ますます, 一人一人)
- Kind: TYPO (scriptable: ゝ ゞ ヽ ヾ 〻 〱). Scope: KB (公用文). Using it for product text is an extension KB does not state.
- Source: KB 本文 I-6 イ (p.(4)), 解説 p.-19-: 「繰り返し符号は、「々」のみを用いる。２字以上の繰り返しはそのまま書く。」 At compound boundaries 々 is not used: 民主主義, 表外漢字字体表.
- Example (half src): wrong 「民主々義」 (composed) → right 「民主主義」 (KB)
- Test: script, under a 公用文 house rule or one that adopts KB.
- Strength: AUTH (KB).
- Standing: 公用文作成の考え方（建議）+ 解説: 文化審議会建議, scope 公用文.

### Writing H. Numbers, dates, time, currency and units

#### JW-49 Horizontal text uses Arabic numerals; kanji numerals for idioms, approximate numbers and fixed terms (数十人, 一部, 世界一)
- Kind: WRITE (scriptable with an exception list).
- Sources: KB 本文 I-4 ア・オ・カ (p.(3)), 解説 pp.-15-–-16-: 「横書きでは、算用数字を使う。」 「概数は、漢数字を使う。」 例「二十余人 数十人 四、五十人」; 一つ, 一人, 一日 in kanji, but 「広報等で明確に数を数えているような場合などに限って、算用数字を用いて表記することがある。」 JTF 2.2.2 「漢数字を使う」: 世界一, 一時的, 一部分, 第三者, 一種の. SH-cnt: countable items in Arabic (1つ, 2回), idioms in kanji; OK「本人確認書類1点」 NG「本人確認書類一点」.
- Example (src, SH): 「本人確認書類一点」 → 「本人確認書類1点」
- Test: script (kanji numeral + counter in horizontal UI text: FYI, with idiom whitelist).
- Strength: AUTH (KB) + PRAC(2). KB writes 一つ, SH writes 1つ: a small disagreement inside this rule.
- Standing: 公用文作成の考え方（建議）+ 解説: 文化審議会建議, scope 公用文; JTF日本語標準スタイルガイド（翻訳用）: industry association guideline for translated text (read here as covering product manuals and websites); SmartHR Design System: one company's guide for its own products.

#### JW-50 Digits are half-width (JTF, SH); KB only requires one choice per document, and half-width for data and amounts
- Kind: TYPO (scriptable: U+FF10–U+FF19).
- Positions: KB 解説 I-4 エ (p.-15-): 「算用数字に全角を用いるか半角を用いるかについて、特に定めはないが、使い分けの考え方を文書内で統一する。」 「データや金額等の数値を示す場合には、半角数字を用いる。全角の数字は、情報処理において数値として認識されない場合がある。」 JTF 2.1.8: 「算用数字は「半角」で表記します。」 SH-cnt: 「数字は半角の算用数字で表記する」.
- Example (src, JTF): 「１２３４５」 → 「12345」
- Test: script.
- Strength: AUTH (KB) + PRAC(2).
- Standing: 公用文作成の考え方（建議）+ 解説: 文化審議会建議, scope 公用文; JTF日本語標準スタイルガイド（翻訳用）: industry association guideline for translated text (read here as covering product manuals and websites); SmartHR Design System: one company's guide for its own products.

#### JW-51 Group digits by three with a half-width comma; 万・億・兆 may be written in kanji; sources differ on combining the two
- Kind: TYPO.
- Positions: KB 本文 I-4 イ・ウ (p.(3)), 解説 p.-15-: 「大きな数は、三桁ごとにコンマで区切る。」 例「5,000 62,250円」; 「兆・億・万の単位は、漢字を使う。」 例「5兆 100億 30万円」; 千・百 are not written in kanji: 「「５千」「３百」としないで、「5,000」「300」と書く。」; with both, the comma may be dropped: 「1億2,644万3,000人／1億2644万3000人」. JTF 2.1.10: 「漢字（単位語）を使った位取りと3桁区切りのカンマを両方使うのは冗長です。通常は、どちらかを採用していれば問題ありません。」 例「2,310人の社員 3万8000人以上」. JTF 3.1.3 sets the comma half-width; SH-cnt: 「カンマは数字に合わせて半角を用います。」 (the quoted sentence is SmartHR's).
- Example (src, KB): 「5千」 → 「5,000」
- Test: script (4+ digit number without comma: FYI; full-width comma inside digits: flag).
- Strength: AUTH (KB) + PRAC(2).
- Standing: 公用文作成の考え方（建議）+ 解説: 文化審議会建議, scope 公用文; JTF日本語標準スタイルガイド（翻訳用）: industry association guideline for translated text (read here as covering product manuals and websites); SmartHR Design System: one company's guide for its own products.

#### JW-52 Counters: 「か月」「か所」 with Arabic numerals (not ヶ月, カ月 in 公用文); 「箇」 with kanji numerals (KB); JTF allows か or カ
- Kind: TYPO (scriptable).
- Positions: KB 本文 I-4 ケ (p.(3)), 解説 p.-16-: 「算用数字を使う横書きでは、「○か所」「○か月」と書く」 and 「一般の社会生活でよく使われる「３ヶ所」「７カ月」といった表記はしない。」 JTF 2.2.3: 「助数詞に伴う「ヵ」、「か」、「カ」、「ヶ」、「ケ」、「箇」、「個」の表記は、原則として、「か」または「カ」を使います。」 SH-cnt: 「「か所」「か月」と表記します。」 (citing 日本語スタイルガイド 第3版).
- Example (half src): wrong 「３ヶ所」 (named by KB) → right 「3か所」
- Test: script (\d+[ヶケヵ](月|所|国); カ only under a KB-style house rule).
- Strength: AUTH (KB) + PRAC(2). KB and JTF differ on カ.
- Standing: 公用文作成の考え方（建議）+ 解説: 文化審議会建議, scope 公用文; JTF日本語標準スタイルガイド（翻訳用）: industry association guideline for translated text (read here as covering product manuals and websites); SmartHR Design System: one company's guide for its own products.

#### JW-53 Dates: sources differ on format (DISAGREEMENT)
- Kind: TYPO.
- Positions:
  - KB shows 「令和２年11月26日」 only as an example under the Arabic-numeral rule (本文 I-4 ア, p.(3)); KB states no date-format position and nowhere mentions 元号, 西暦 or 和暦. Not counted.
  - SH-cnt: UI dates as 「2025/01/01」; explanatory pages may use 「2025年1月1日」; system data 「YYYY/MM/DD」. NG「2022/1/1」 (zero-padding required).
  - YN p.10: 「元号は使わずに西暦を使う」 「年月日の表記に「／」は使わない」 例「2020年６月４日」.
- Example: 「2025/01/01」 (SH UI) / 「2025年1月1日」 (SH help, YN) / 「令和7年1月1日」 (era-name form, composed; no source opened recommends it)
- Test: script for consistency within a product once the format is set; flag ／ dates on a やさしい日本語 surface.
- Strength: AUTH (YN, for foreign residents) + PRAC(1) (SH), positions differ by audience.
- Standing: 在留支援のためのやさしい日本語ガイドライン: government guideline (出入国在留管理庁・文化庁), for foreign residents; SmartHR Design System: one company's guide for its own products. Named in the block but not relied on: KB.

#### JW-54 Times: 24-hour hh:mm(:ss) in SmartHR UI; やさしい日本語 prefers 12-hour with 午前/午後 and allows 24-hour (a narrow DISAGREEMENT)
- Kind: TYPO.
- Positions: SH-cnt: 「表示言語の選択にかかわらず、時刻は hh:mm:ss で表記します」 OK「23:00:05」 NG「PM11:00:05」. YN p.10: 「12時間表示を原則とし、午前・午後を明記する(24時間表記でもよい)」.
- KB's 「午後２時37分」 (本文 I-4 ア) is only an example under the Arabic-numeral rule, not a time-format position. Not counted.
- Example (src, SH): 「PM11:00:05」 → 「23:00:05」
- Test: script (AM/PM in Japanese UI: flag under SH; only SH names this).
- Strength: AUTH (YN, for foreign residents; 24-hour allowed) vs PRAC(1) (SH).
- Standing: 在留支援のためのやさしい日本語ガイドライン: government guideline (出入国在留管理庁・文化庁), for foreign residents; SmartHR Design System: one company's guide for its own products. Named in the block but not relied on: KB.

#### JW-55 Number and unit: SmartHR writes file sizes with no space (5GB); JTF generally writes no space in 実務翻訳 but accepts the spaced form; keep one unit notation per document
- Kind: TYPO.
- Sources: SH-cnt, under 「ファイルサイズは英字2文字で表記する」: 「数字と単位の間にはスペースを入れず、「5GB」のように表記します。」 NG「5 GB、10テラバイト、2byte」. JTF 2.3.2: 「一般的に、実務翻訳ではスペースを入れません。ただし、学術論文等では国際単位系（SI）に従ってスペースを入れることがある」. JTF 12 基本ルール 12: 「単位の表記を統一する。」 ○2kg、354g (or 2 kg、354 g) ×3フィート、2.5m、600グラム. JTF 4.1 follows JIS Z 8000 for units (not opened). KB 解説 I-5 (2) エ: 「℃、％、￥、＄など、単位を表す符号の用い方についても特に定めはないが…文書内での用法を統一する。」
- Only SmartHR is firm on "no space", and only for file sizes; JTF lists the spaced form (2 kg, 354 g) as acceptable and notes SI spacing in academic papers.
- Example (src, SH): 「5 GB」 → 「5GB」
- Test: script for consistency of number–unit spacing within one document; flag spaced file sizes (5 GB) only under SmartHR style. Do not flag a spaced form such as 2 kg as an error.
- Strength: AUTH (KB, consistency only) + PRAC(2).
- Standing: 公用文作成の考え方（建議）+ 解説: 文化審議会建議, scope 公用文; JTF日本語標準スタイルガイド（翻訳用）: industry association guideline for translated text (read here as covering product manuals and websites); SmartHR Design System: one company's guide for its own products.

#### JW-56 以上・以下・以前・以後 include the base value; 超える・未満・前・後 exclude it
- Kind: WRITE. Scope: KB (公用文). Applying it to UI validation text is an extension KB does not state.
- Source: KB 解説 I-4 (付) ①② (p.-16-): 「起算点となる数量や日時などを含む場合に用いる。」 例「100人以上／以下＝100人を含んで…」; 「起算点となる数量や日時などを含まない場合に用いる。」 例「100人未満…＝100人を含まずに」. KB adds for periods: 「ただし、「昭和期以前」「第一次世界大戦以前」のように、時間に幅があるものについては、「昭和期」「第一次世界大戦」を含めず、その始まりの時点よりも前をいうことが多い。」
- Example (composed; an extension of KB's scope to UI text): validation text 「8文字以上で入力してください」 allows 8; for "more than 8" write 「8文字を超える」.
- Test: judgment only. Under a house rule that adopts KB, a script can check the copy against the validator's >= or >.
- Strength: AUTH (KB).
- Standing: 公用文作成の考え方（建議）+ 解説: 文化審議会建議, scope 公用文.

### Writing I. Spacing between Japanese and Latin text

#### JW-57 No space between Japanese and half-width Latin letters or digits (PDFファイル, JTF標準)
- Kind: TYPO (scriptable).
- Sources: JTF 2.3.1.1 and 12 基本ルール 10: 「原則として、全角文字と半角文字の間にスペースを入れません。」 ○JTF標準 ×JTF 標準. SH-sym: 「和欧混植の文章内の英単語と、数字の前後には半角スペースは入れずに詰めましょう。」 OK「PDFファイルをアップロード」 NG「PDF ファイルをアップロード」. JTF 2.3.1.3 keeps spaces inside quoted English text.
- Example (src, SH): 「PDF ファイルをアップロード」 → 「PDFファイルをアップロード」
- Test: script (a space between [ぁ-んァ-ヶ一-龯] and [A-Za-z0-9]).
- Strength: PRAC(2). No source opened recommends a typed space (gaps.md); optical spacing is for the typography research area.
- Standing: JTF日本語標準スタイルガイド（翻訳用）: industry association guideline for translated text (read here as covering product manuals and websites); SmartHR Design System: one company's guide for its own products.

#### JW-58 No space inside or outside brackets
- Kind: TYPO.
- Sources: JTF 2.3.3: 「かっこの外側、内側ともにスペースを入れません。」 SH-sym lists （ ）「 」［ ］【 】 among marks with no space before or after.
- Example (composed): 「設定 （任意）」 → 「設定（任意）」
- Test: script.
- Strength: PRAC(2).
- Standing: JTF日本語標準スタイルガイド（翻訳用）: industry association guideline for translated text (read here as covering product manuals and websites); SmartHR Design System: one company's guide for its own products.

#### JW-59 Latin letters are half-width (JTF); KB asks only for consistency, using full-width for initial-letter abbreviations in its own text
- Kind: TYPO.
- Positions: JTF 2.1.9: 「アルファベットは「半角」で表記します。」 KB 解説 I-6 エ (p.-19-): 「全角を用いるか半角を用いるかについて特に定めはないが、使い分けを文書内で統一する。例えばこの解説では、原則として半角を用いているが、頭文字だけで示すような略語には全角を使用している。」 「全角のローマ字を用いると、情報処理において欧文・単語として認識されない場合がある。」
- Example (src, JTF): 「ａｂｃ ＤＥＦ」 → 「abc DEF」
- Test: script (U+FF21–U+FF5A).
- Strength: AUTH (KB, consistency) + PRAC(1).
- Standing: 公用文作成の考え方（建議）+ 解説: 文化審議会建議, scope 公用文; JTF日本語標準スタイルガイド（翻訳用）: industry association guideline for translated text (read here as covering product manuals and websites).

### Writing J. Buttons, menus, titles and headings

#### JW-60 A button label states the action it runs; SmartHR writes the plain verb and drops する from サ変 verbs: 「追加」 not 「追加する」; with an object, use を: 「権限を追加」
- Kind: WRITE (form scriptable).
- Sources: SH-app 「ボタンラベルには動詞の終止形を使用する」 (re-fetched verbatim): 「ボタンのラベルは、ユーザーの操作を表す動詞の終止形で表記します。」 例「取り込む」「取り消す」「戻る」. 「ただし、名詞に「する」をつけたサ行変格活用動詞の場合の「する」は省略します。 よりテキストが短くシンプルになることで、業務アプリケーションであるSmartHRに適していると考えるためです。」 OK「追加」「削除」 NG「追加する」「削除する」. 「動詞の終止形の前に、オブジェクトを明記する場合には、助詞は「を」が適切です。」 OK「権限を追加、申請を取り消す」 NG「権限の追加、申請の取り消し」. SH-btn: 「実行されるアクションをボタンラベルで示す」 (Must).
- Example (src): 「削除する」 → 「削除」
- Test: script (button text ending in する after a kanji noun: flag under SH style; button text with の + サ変 noun: flag).
- Strength: PRAC(1). SmartHR ties the する-drop to being a business app. No second source on 「保存」 vs 「保存する」 was found; DADS's button page has no wording guidance (gaps.md).
- Standing: SmartHR Design System: one company's guide for its own products.

#### JW-61 SmartHR: dialog titles 「{対象}の{アクション}」; the confirm button: 「{アクション}」; screen titles and field names are nouns
- Kind: WRITE. Scope: SH (SmartHR's own products). One company's rule; no second source opened.
- Source: SH-app: 「ダイアログのタイトルは「{対象}の{アクション}」、実行ボタンのラベルは「{アクション}」とします。」 例 title 「〇〇の追加」, button 「追加」. 「画面タイトルや項目名は、名詞で表記します。」 OK「権限の追加、申請の取り消し」 NG「権限を追加、申請を取り消す」.
- Example (src): title 「権限を追加」 → 「権限の追加」
- Test: script (title containing を + verb: flag under SH style).
- Strength: PRAC(1).
- Standing: SmartHR Design System: one company's guide for its own products.

#### JW-62 Descriptions are full sentences, not 体言止め; audit-log entries are 体言止め (「ユーザーを作成」)
- Kind: WRITE. Scope: SH.
- Source: SH-app: 「アプリケーションにおけるディスクリプション（説明文）は、動詞まで記載します。体言止めは避けましょう。」 Audit log: 「監査ログの操作内容は「〜しました」のような完結した文ではなく、体言止め（動詞形）（例：「ユーザーを作成」）で文体を統一します。」
- Example (src): log 「ユーザーを作成しました」 → 「ユーザーを作成」
- Test: script per element type.
- Strength: PRAC(1).
- Standing: SmartHR Design System: one company's guide for its own products.

#### JW-63 Titles name the subject and the document's nature; in public-facing text avoid a bare 「…について」; one line
- Kind: WRITE. Scope: KB.
- Source: KB 本文 III-2 ア (p.(7)), 解説 p.-31-: 「標題（タイトル）では、主題と文書の性格を示す。」 「特に解説・広報等では「…について」とせずに、より具体的な表現を用いるとよい。」 「標題の文字数は、読み手の負担にならないよう、１行に収めるのが適当である。」
- Example (src): 「文化審議会について」 → 「第93回文化審議会（令和２年11月22日）を開催します」
- Test: script (title ending in について: FYI).
- Strength: AUTH (KB), worded as advice (「適当である」「とよい」).
- Standing: 公用文作成の考え方（建議）+ 解説: 文化審議会建議, scope 公用文.

### Writing K. Error messages

#### JW-64 SmartHR: an error message carries what happened, why, and what to do (事象・原因・対処); if space is short, show 原因, then 対処, then 事象
- Kind: WRITE. Scope: SH (SmartHR's own products). One company's rule; no second source opened.
- Source: SH-err (priority re-fetched verbatim): 「どのエラーメッセージであっても、含める情報の要素は事象・原因・対処です。」 「スペースが足りないときなど、エラーメッセージのすべての要素を表示できない場合は、原因>対処>事象の優先順で表示しましょう。」 Reason given: 「ユーザーが知りたいことは「どうしたらエラーを解消できるか」です。そのため、エラーを解消するための原因とその対処の表示を優先します。」
- Example (composed): wrong 「エラーが発生しました。」 → right 「ファイルをアップロードできませんでした。ファイルサイズが10MBを超えています。10MB以下のファイルを選択してください。」
- Test: judgment only (a script can flag a message with no 対処 such as 〜してください).
- Strength: PRAC(1). Apology norms: no source opened (gaps.md).
- Standing: SmartHR Design System: one company's guide for its own products.

### Writing L. Plain and inclusive language

#### JW-65 For readers whose first language is not Japanese, write やさしい日本語
- Kind: WRITE.
- Sources: KB 本文 II-6 イ (p.(6)), 解説 p.-27-: 「日本語を母語としない人々に対しては、平易で親しみやすい日本語（やさしい日本語）を用いる。」 YN (whole document), steps 1–3 (pp.7–10).
- Example (src, YN): 「こちらに記入願います」 → 「この紙に書いてください」
- Test: judgment only (audience). The scriptable YN points are JW-12, JW-14 (YN position), JW-20, JW-45 (YN position), JW-53, JW-66, JW-67.
- Strength: AUTH (KB, YN).
- Standing: 公用文作成の考え方（建議）+ 解説: 文化審議会建議, scope 公用文; 在留支援のためのやさしい日本語ガイドライン: government guideline (出入国在留管理庁・文化庁), for foreign residents.

#### JW-66 For foreign readers (YN): use vague time or quantity words (ごろ, くらい) as little as possible; do not use words with two meanings (結構です); avoid speculative endings, but where a firm statement would be a problem use 〜かもしれません or たぶん〜です
- Kind: WRITE. Scope: YN.
- Source: YN p.9: 「曖昧な表現はできる限り使わない」 「曖昧な時間や数字を表す表現は多用しないようにします。複数の意味を持つ表現は使わないようにします。」 「曖昧な表現を多用しない(例:くらい、ごろ、など)」 「「おそらく」「ようです」「ではないでしょうか」「可能性があります」「おそれがあります」などの推測表現は使用を避け、断定的な表現にします。」 「断定的な表現が問題となる場合には「～かもしれません」、「たぶん～です」を使います。」
- Example (src): 「ごみ収集車は、月曜日の９時ごろに来ます。」 → 「ごみを集める車は、月曜日の午前８時30分から午前９時30分までに来ます。」
- Test: script (word list) on surfaces marked やさしい日本語, FYI only; かもしれません / たぶん are allowed by YN and are not flagged.
- Strength: AUTH (YN).
- Standing: 在留支援のためのやさしい日本語ガイドライン: government guideline (出入国在留管理庁・文化庁), for foreign residents.

#### JW-67 Abbreviations: spell out at first use (KB); for foreign readers do not abbreviate and do not use romaji (YN)
- Kind: WRITE.
- Sources: KB 本文 I-6 ク (p.(5)), 解説 p.-20-: 「略語は、元になった用語を示してから用い、必要に応じて説明を添える。」 例「知的財産（以下「知財」という。）」. YN p.9: 「略語は使わない」 例「健診は年１回となります。」→「健康診断は１年に１回です。」; 「ローマ字は使わない」.
- Example (src, YN): 「健診」 → 「健康診断」
- Test: script (known-abbreviation list without an earlier full form), FYI.
- Strength: AUTH (KB, YN).
- Standing: 公用文作成の考え方（建議）+ 解説: 文化審議会建議, scope 公用文; 在留支援のためのやさしい日本語ガイドライン: government guideline (出入国在留管理庁・文化庁), for foreign residents.

#### JW-68 Furigana: in public text, readings for kanji outside the 常用漢字表 (KB); for foreign readers, on all kanji (YN); where ruby cannot be used, the reading in brackets after the word
- Kind: TYPO (ruby markup is checkable).
- Sources: KB 解説 I-1 (2) オ・カ (p.-10-): 「常用漢字表にない漢字や音訓を用いるときには、必ず振り仮名を付けるなどする。」 「振り仮名を用いることが難しい場合には、その漢字の後に括弧に入れて示すこともできる。」 例「忸怩（じくじ）たる思い」. YN p.10: 「漢字の量が多すぎないようにして、すべての漢字にふりがなをつけます。」 and for machine translation: 「ふりがなをつけない文書をできる限り同時に用意します。」
- Example (src, KB): 「忸怩たる思い」 → 「忸怩（じくじ）たる思い」
- Test: script (non-常用 kanji without <ruby> or a following （かな）).
- Strength: AUTH (KB, YN).
- Standing: 公用文作成の考え方（建議）+ 解説: 文化審議会建議, scope 公用文; 在留支援のためのやさしい日本語ガイドライン: government guideline (出入国在留管理庁・文化庁), for foreign residents.

#### JW-69 Avoid wording that implies bias by sex, job, origin, body or similar; consider how the reader feels, but do not ban words mechanically
- Kind: WRITE. Scope: KB.
- Source: KB 本文 II-7 (p.(6)), 解説 p.-28-: 「性別、職業、地位、信条、宗教、地域、人種、民族、心身の状態、身体的な特徴などに関して、誤解を与えるような表現を慎むのは当然のことである。」 Named examples: 「女医」「女流」「女史」 (to be judged case by case); 「交通事故のメッカ」 (not appropriate). KB II-7 ウ: 「過度に規制を加えたり禁止したりすることは慎む。」
- Example (half src): wrong 「交通事故のメッカ」 (KB) → right 「交通事故の多発地点」 (composed)
- Test: judgment only (a word list may surface candidates; KB warns against mechanical bans).
- Strength: AUTH (KB).
- Standing: 公用文作成の考え方（建議）+ 解説: 文化審議会建議, scope 公用文.

#### JW-70 Japanese names in romaji: family name first; capitalise the family name when the order must be clear (YAMADA Haruo)
- Kind: WRITE. Scope: KB.
- Source: KB 本文 I-6 オ (p.(5)), 解説 p.-19-: 「日本人の姓名をローマ字で表記するときには、差し支えのない限り「姓－名」の順を用いる。」
- Example (half src): wrong 「Haruo Yamada」 (composed) → right 「YAMADA Haruo」 (KB)
- Test: judgment only (needs to know which part is the family name).
- Strength: AUTH (KB, 公用文).
- Standing: 公用文作成の考え方（建議）+ 解説: 文化審議会建議, scope 公用文.
- Reviewer note (research-writing/changes.md): the quote has 「姓－名」 (U+FF0D); the 解説 body text has 「姓―名」 (U+2015) and the section heading 「姓－名」. Check the PDF page itself.

## Background (print) — not applied by the skill

These entries keep their ids so the skill and a reviewer can cite them as context. The skill gives no instruction from them, and the checker does not test them. Each says why it is here.

#### JT-03 Line gap (行間) of half em to one em; nearer one em when lines exceed 35 characters
- Why not applied: book composition (JLREQ); no web source; "Test: judgment only."
- Kind: typography. Region: Japan. Medium: book composition (JLREQ); no web source. A description of common book practice (「ことが多い」), not a requirement.
- Source: JLREQ §2.4.2 (Considerations in Designing the Kihon-hanmen), note **[exact]**: 「基本版面の行間は，基本版面の文字サイズの二分アキ以上，全角アキ以下の範囲とすることが多い．」「行長が短い場合は，二分アキでもよい．」「35字を超えるような行長では，全角アキか，それよりやや詰めた行間にするのがよい．」
- Test: judgment only.
- Unsourced for web: the 0.5–1em → CSS line-height 1.5–2.0 conversion is the researcher's arithmetic; no source applies it to the web.
- Strength: AUTH (describes common book practice: 「ことが多い」).
- Standing: JLREQ: W3C Working Group Note, about book composition.

#### JT-04 A wrapped heading's line gap is narrowed so the heading reads as one unit; JLREQ's example is 1/3 em or 1/2 em of the heading size
- Why not applied: book composition (JLREQ); no web source; example values only.
- Kind: typography. Region: Japan. Medium: book composition (JLREQ); no web source.
- Source: JLREQ §4.1.6 note: 「その行間は，見出しが一体として見えるように狭くする．例えば見出し文字列の文字サイズの三分アキ又は二分アキとする．」 English as extracted: "line gap between headings that are broken across lines is one third em or a half em of the heading character size."
- 1/3 em or 1/2 em is an example (「例えば」), not a range; JLREQ does not compare it with the body line gap.
- Test: judgment only.
- Strength: AUTH (book composition; example values).
- Standing: JLREQ: W3C Working Group Note, about book composition.

#### JT-06 Default Japanese composition is solid setting (ベタ組): character frames touch
- Why not applied: book composition (JLREQ); no web source; "Test: none for the web."
- Kind: typography. Region: Japan. Medium: book composition (JLREQ); no web source.
- Source: JLREQ §2.1.3. Quote: 「原則として，文字の外枠を密着させて配置する」. Note (English as extracted): "it might be necessary to adjust the inter-character spacing when composing lines at large character sizes."
- Test: none for the web.
- Unsourced for web: letter-spacing 0 and no `palt` on body text. This rests on JLREQ alone, which describes book composition and itself notes large sizes may need spacing adjustment; no web source states it.
- Strength: AUTH (book composition).
- **Disagreement:** JLREQ default is solid setting; DADS adds +0.02em on 16–26px styles (JT-05). Not resolved.
- Standing: JLREQ: W3C Working Group Note, about book composition.

#### JT-10 Opening brackets must not end a line (行末禁則)
- Why not applied: book composition (JLREQ); no web source; "Test: none for the web."
- Kind: typography. Region: Japan. Medium: book composition (JLREQ); no web source.
- Source: JLREQ §3.1.8: 「始め括弧類（cl-01）及び割注始め括弧類（cl-28）を行末に配置してはならない（行末禁則）．」
- Test: none for the web.
- Unsourced for web: a render test that no line ends with 「『（〔［｛〈《【; no CSS or vendor sentence opened states this case.
- Strength: AUTH (book composition).
- Standing: JLREQ: W3C Working Group Note, about book composition.

#### JT-11 Do not split ——, ……, ‥‥ or a run of Arabic numerals across lines (分割禁止) (book composition, JLREQ)
- Why not applied: book composition (JLREQ). Its only web leg (‥ and … under a declared `normal` or `strict`) is the CSS Text 3 sentence already quoted in JT-09, so the skill applies it there and not here.
- Kind: typography. Region: Japan. Medium: book composition (JLREQ); on the web only ‥ and … are covered, by CSS Text 3 for `normal` and `strict` (JT-09).
- Source: JLREQ §3.1.10: 「次のような文字・記号が連続する場合は，その字間で2行に分割しない（分割禁止）．」 Quotes: 「2倍ダッシュは，それを一体にして扱うということから分割禁止としていた．」「アラビア数字は，位置で桁を示すことによる．」 Kanji numerals may break: 「連続する漢数字の字間では分割可である」.
- The 2倍ダッシュ quote is a note on letterpress history, in the past tense (「としていた」).
- Test: for ‥ and … only, where `normal` or `strict` is declared (JT-09).
- Unsourced for web: ——, digit runs, and flagging `word-break: break-all` / `line-break: anywhere` on text containing digits.
- Strength: AUTH (book composition).
- Standing: JLREQ: W3C Working Group Note, about book composition.

#### JT-31 Line length at most about 40 characters in horizontal writing; longer lines → columns
- Why not applied: book composition (JLREQ); no web source; "Test: none for the web."
- Kind: typography. Region: Japan. Medium: book composition (JLREQ); no web source. DADS gives none. A recommendation (「くらい」, 「望ましい」).
- Source: JLREQ §2.4.2 (Considerations in Designing the Kihon-hanmen), note **[exact]**: 「1行の行長（字詰め数）は，縦組の場合，最大で52字くらい，横組では最大で40字くらいにする．仕上りサイズの関係で，1行の行長がこれ以上になる場合は，段組にして，1行の行長を短くすることが望ましい．」 Also: 「1行の行長は，文字サイズの整数倍に設定する」.
- Test: none for the web.
- Unsourced for web: `max-width` on Japanese body text above 40em / 40ic; no source carries the print figure to the web.
- Strength: AUTH (book composition).
- Standing: JLREQ: W3C Working Group Note, about book composition.

#### JT-16 `text-wrap: balance` / `pretty`: definitions only
- Why not applied: moved to "Background, not rules" by rules.v2.md (definition only).
- Why here: a definition in a Working Draft; no Japanese-specific source on how these interact with 禁則 or auto-phrase.
- Source: CSS Text 4 (Working Draft): balance "Line breaks are chosen to balance the remaining (empty) space in each line box, if better balance than auto is possible."; pretty "Specifies the UA should bias for better layout over speed, …"
- No rule.
- Strength: DEFINITION.
- Standing: CSS Text 4: W3C Working Draft.

#### JT-18 Opening bracket at line start: three Japanese schemes
- Why not applied: moved to "Background, not rules" by rules.v2.md (background; the mapped CSS value is implemented nowhere).
- Why here: background; the schemes are described and mapped but not ranked, and the mapped CSS value `trim-both` is implemented nowhere.
- Kind: typography. Region: Japan. Medium: book composition (JLREQ), with a CSS mapping.
- Source: JLREQ §3.1.5, pattern ①: 「改行行頭の字下げは全角アキ，折返し行頭は行頭に空き量をとらない配置法である天付きとする（Figure 71の①）．」; per the extraction JIS X 4051 adopts pattern ① and pattern ② is an option.
- CSS Text 4 §8.5.3 (Working Draft): "Japanese has three common start-edge typesetting schemes, which are distinguished by their handling of opening brackets." Per the extraction (paraphrase), the spec maps them to `trim-both`, `space-all`, and `trim-both` with `hanging-punctuation: first`, and does not say which is most common. `trim-both` is not implemented anywhere (MDN). `trim-start` (Chrome 123): "Set fullwidth opening punctuation with half-width glyphs (flush) at the start of each line."
- Nothing actionable across browsers.
- Test: judgment only.
- Strength: BACKGROUND.
- Standing: JLREQ: W3C Working Group Note, about book composition; CSS Text 4: W3C Working Draft; MDN: vendor documentation.

#### JT-23 Yu Gothic on Windows ships as separate Light / Regular / Medium / Bold faces, plus a separate Yu Gothic UI family
- Why not applied: moved to "Background, not rules" by rules.v2.md (a fact about an OS font family).
- Why here: a fact about an OS font family; no advice is drawn from it.
- Kind: typography (fact, not a rule). Region: Windows. Medium: OS fonts.
- Source: Microsoft Typography, Yu Gothic font family — https://learn.microsoft.com/en-us/typography/font-list/yu-gothic **[raw]**: Styles & Weights "Yu Gothic Light, Yu Gothic Regular, Yu Gothic Medium, Yu Gothic Bold, Yu Gothic UI Light, Yu Gothic UI Semilight, Yu Gothic UI Regular, Yu Gothic UI Semibold, Yu Gothic UI Bold". Change list: Windows 10 version 1507 (2015-07-29) added "Yu Gothic Medium" and the Yu Gothic UI component; Windows 8.1 introduced Yu Gothic in three styles.
- The common advice that `Yu Gothic` at weight 400 renders thin and that `Yu Gothic Medium` should be named is not stated by any source opened (gaps.md). Do not write it as a sourced rule.
- Strength: FACT.
- Standing: Microsoft Typography font list: vendor documentation.

#### JT-24 Google Fonts serves Japanese web fonts as `unicode-range` slices in WOFF2 (Google's description of its own service)
- Why not applied: moved to "Background, not rules" by rules.v2.md (one vendor describing its own service).
- Why here: one vendor describing its own service; it gives no advice to people serving their own fonts, so nothing checkable is left.
- Kind: typography (performance). Region: Japanese. Medium: web.
- Source: Google Developers Blog, "Google Fonts launches Japanese support" (2018-09-28) — https://developers.googleblog.com/en/google-fonts-launches-japanese-support/ : "The core features we rely on to efficiently deliver sliced fonts are" unicode-range and WOFF2; "For Japanese, we found that segmenting the first 3,000 characters into 20 slices was best, …"; "Users download only the slices they need for a page, typically avoiding the majority of the font."
- Unsourced for web: flagging `@font-face` for a Japanese family without `unicode-range`; Google gives no advice to people serving their own fonts.
- Strength: VENDOR (description only).
- Standing: Google Developers Blog (2018): vendor description of its own service.

## Tally

| | Count | IDs |
|---|---:|---|
| Typography, applied | 22 | JT-01, 02, 05, 07, 08, 09, 12, 13, 14, 15, 17, 19, 20, 21, 22, 25, 26, 27, 28, 29, 30, 32 |
| Writing, applied | 70 | JW-01 … JW-70 |
| Background, not applied | 10 | JT-03, 04, 06, 10, 11, 16, 18, 23, 24, 31 |

Of the applied typography rules, three hold for 公用文 only (JT-19, 29, 30), one is a review item resting on participant comments (JT-08), and two are derived from a CSS definition by the researcher (JT-12, 13). In the writing file, by strongest tier: STD 2 (JW-32 part, JW-33), AUTH 55, PRAC only 13 (JW-06, 08, 13, 17, 36, 39, 42, 57, 58, 60, 61, 62, 64).

## Recorded disagreements

The skill does not pick a winner in any of these. A project's DESIGN.md or house style decides; without one, the agent keeps whatever the existing text uses, or picks one and keeps it.

- Typography: JT-02 (DADS vs SmartHR heading line-height), JT-06 (JLREQ solid setting vs DADS +0.02em; background), JT-20 (JLREQ ¼ em vs CSS ⅛ ic), JT-21 (spec initial value `normal` vs shipped `no-autospace`), JT-22 (web font vs OS fonts), JT-27 (• vs ●).
- Writing: JW-09 (KG conditional vs SH no), JW-14 (KB/SH short form vs YN long form for its readers), JW-26, JW-28, JW-30 (公用文 vs 解説・広報 and JTF), JW-32 (告示 leaves outside-table spellings free; KB does not use them), JW-33 and JW-34 (final ー), JW-38 (，in 公用文 vs JTF), JW-40 (。 before a closing bracket), JW-41 (『』 and “ ”), JW-44 (… vs ……), JW-45 (〜 vs から/まで for foreign readers), JW-49 (一つ vs 1つ), JW-52 (カ), JW-53 (date format), JW-54 (12- vs 24-hour), JW-55 (space between number and unit).
