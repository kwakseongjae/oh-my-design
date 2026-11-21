# /kana writing — gaps (2026-11-21)

What was looked for and not found, and pages that blocked or could not be read. A gap is a finding: the skill should not state a rule here.

## Sources that could not be read

| Source | What happened | Consequence |
|---|---|---|
| Microsoft Localization Style Guide, Japanese — https://download.microsoft.com/download/bb82f407-78f4-4df4-accd-d63ceaadd24a/jpn-jpn-StyleGuide.pdf (from https://aka.ms/japanese-styleguide, listed on https://learn.microsoft.com/ja-jp/globalization/reference/microsoft-style-guides) | Fetched (HTTP 200, 1.36 MB) but the fetch tool saw only compressed PDF streams; no text. No shell was available to extract it. Mirrors (ftp.ntu.edu.tw, locatran.com) and the redpen-ms-style-jp-validator repo were **not** used as substitutes. | No Microsoft count anywhere. This is the largest hole: Microsoft's guide is the vendor reference that Mozilla's guide defers to (「Microsoft の表記に準拠」) and that Mozilla contrasts on long vowels (「Microsoft のような例外はなし」). **Needs a human or a shell to extract the PDF text.** |
| Apple HIG (ja) — https://developer.apple.com/jp/design/human-interface-guidelines/writing | Page title 「表現」 returned, body empty (client-rendered). | Apple not counted. A search also reports the Apple Style Guide has no Japanese edition (search snippet only, not verified). |
| freee vibes — https://vibes.freee.co.jp/ | Storybook shell, no text. Search found no public freee writing guide (freee publishes an accessibility guideline; not opened). | freee not counted. |
| kaonavi sugao — https://brand.kaonavi.jp/sugao | Title only. | Not counted. |
| MNTSQ UI design policy (note) — https://note.mntsq.co.jp/n/n7eb6c0abc3b2 | 302 to a note.com session URL; not followed. | Not counted (it is a company blog post; search snippet says it uses 体言止め for buttons). |
| DADS モーダルダイアログ（使い方） — https://design.digital.go.jp/dads/components/modal-dialog/usage/ | HTTP 404. The 概要 page was used instead. | — |

## Searched, nothing public found (not "does not exist")

Query given in brackets.

- LINE / LINEヤフー design system writing guide [LINE Design System ライティング UX writing 日本語]: only background articles.
- Yahoo! JAPAN [Yahoo! JAPAN デザインガイドライン 表記 ライティング]: login-button guideline and a 2010 article about a "Yahoo! Style Guide" book; no product-writing guide.
- 楽天 ReX [楽天 ReX デザインシステム ライティング]: no writing section found.
- Sansan [Sansan デザインシステム ライティング]: a Bill One post says a writing guideline and textlint rules were planned; not published as far as found.
- Money Forward MFUI [Money Forward デザインシステム ライティング 表記ルール]: nothing public.
- note [note デザインシステム 表記ルール], SmartNews [SmartNews design system writing Japanese]: nothing.
- Cybozu / kintone [サイボウズ kintone UIテキスト ライティングガイドライン]: internal guideline mentioned in recruiting material; not public.
- mercari [メルカリ デザインシステム UXライティング ガイドライン]: articles say a UX Writing Guideline was made in 2023-12; not public.
- pixiv charcoal [pixiv charcoal デザインシステム ライティング]: component library only.
- Wantedly, STORES, KARTE [Kaonavi OR STORES OR Wantedly OR KARTE デザインシステム ライティング ガイドライン]: nothing on writing.
- Google developer documentation style guide in Japanese [Google 開発者ドキュメント スタイルガイド 日本語]: English only, as far as found. Material Design writing in Japanese: no current official Japanese page found.
- DADS writing / notation guidance [デジタル庁デザインシステム ライティング 文章 ガイダンス]: DADS has no writing section; wording guidance sits inside component pages (used).

## fonts.md: pages that failed

- Pretendard Japanese README — https://github.com/orioncactus/pretendard/blob/main/packages/pretendard/docs/ja/README.md: HTTP 503.
- Pepabo Inhouse typography — https://design.pepabo.com/inhouse/foundation/typography/ (guessed URL): HTTP 404; the real page was not found.
- Google Fonts specimen — https://fonts.google.com/specimen/Noto+Sans+JP/about: title only (client-rendered); Google Fonts METADATA.pb files on GitHub used instead.
- SmartHR typography tokens: the font list after 「以下の書体を指定します。」 was not captured (two attempts this round; the prior round, JT-22, reports the same).
- Hiragino licence page (SCREEN): not opened. Apple's macOS font list (support.apple.com/en-us/120414) opened but not checked for Hiragino.
- No Japanese company or design system was found stating use of Pretendard JP [Pretendard JP 採用 日本 サービス]; the one first-party use found is a Korean company's Japanese app.

## Rule areas with no source

- **Apology wording in errors** (申し訳ございません／申し訳ありません: when, or whether). No company or government page read states it; SmartHR's error overview was re-read for this and has none. Only WordPress (drop English "Sorry", do not write すみません, UW-11).
- **ください vs お願いします** as a rule: none; only examples (UW-10).
- **Button pairs** (はい／いいえ vs OK／キャンセル; which goes with which question): none. DADS names labels and their placement only (UW-19).
- **Destructive-button wording** (削除 vs 削除する vs 完全に削除): none.
- **Confirmation-dialog body text** and **empty states**: none.
- **句点 on buttons**: still no source that states it (all examples have none).
- **Currency** (円 vs ¥, 税込 notation): none.
- **A guide that adopts ユーザ** (no ー): none found; Ubie names it wrong.
- **「〜になります」, 「〜のほう」** (listed as gaps in references/sources.md): not found this round either.
- **JIS Z 8301** (long vowel in standards documents): not opened. The standard is sold by JSA; JISC offers read-only viewing behind registration. Not attempted. Public summaries are pointers only, not sources.
- **2022 文化庁 guidance and the 告示 texts** (常用漢字表, 送り仮名の付け方, 外来語の表記): not reopened this round; references/rules.md already carries what was read from them.
- **Area 8 (plain language / inclusive wording)**: only two company-guide candidates (UW-56, UW-57); the authority sources are already in JW-65–69. No further search done — time box.
- **Area 9 (Korean → Japanese translation faults)**: no published source found [韓国語 日本語 ローカライズ UI 翻訳 誤り 注意点 スタイルガイド]. Results were translation-vendor articles giving general advice (layout length, lack of context, literal translation), none naming a Korean-specific fault with evidence. Not searched further — time box. Do not write Korean-specific rules from intuition.

## Quote-fidelity gaps (to check on the page)

- Mozilla ellipsis glyph: wiki extraction 「...」, 2021 mirror extraction 「…」, both under the words 「半角ドット 3 つ」 (UW-45).
- WordPress 4-1 long-vowel mark extracted as 「−」 (UW-36).
- Mozilla ラジオボタン text 「止む終えず」 (UW-04) — may be the page's own typo.
- Ubie's 「感嘆符や疑問符…は使いません」 vs its own Do example 「体調はいかがですか？」 (UW-42).
- Widths of ！？（）： in every quote: requested exact, not verified by code point.
