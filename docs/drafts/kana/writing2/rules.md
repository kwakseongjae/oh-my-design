# /kana writing, second pass: UX writing rule candidates (Japanese, Japan)

Research draft, 2026-11-21. **No native Japanese reader has reviewed this file.** Region for every candidate: Japan (ja-JP). Nothing below speaks for any other region.

## Read this first

- **This file is a delta on [`../writing/rules.md`](../writing/rules.md)** (UW-01 … UW-57). It covers only the gaps that file left without a source: (1) apology wording, (2) request forms, (3) button pairs and the destructive button, (4) confirmation-dialog text, (5) empty states, (6) 。 on buttons and short UI strings, (7) currency, (8) Microsoft's position on katakana long vowels and compounds (UW-36, UW-37), (9) Microsoft on tone and voice against UW-06 … UW-09. New candidates are numbered UW-58 onward. Where a source only adds to an existing candidate, the entry is headed **Adds to UW-nn** and gets no new number.
- **The Microsoft guide (key MS)** was read in full from a text extraction: `/Users/kwakseongjae/.omd-workers/kana/sources/ms-ja-style-2026-11-21.txt` (`pdftotext -layout` of https://download.microsoft.com/download/bb82f407-78f4-4df4-accd-d63ceaadd24a/jpn-jpn-StyleGuide.pdf, reached from https://aka.ms/japanese-styleguide; 71 pages). This pass did not fetch the PDF itself. Citations give the section number and heading, and the line number in the extraction as `L1234` (1-based).
- **How MS quotes were taken.** The layout extraction wraps sentences across lines and lays table columns side by side. Every MS quote was rebuilt **by script** from the text file: wrapped lines were joined by removing only the line break and the indentation (no space is added between two Japanese characters; one space between Latin words), and table cells were read by column. Nothing else was changed. A space inside a line, such as 「データ ファイル」, is kept as the extraction has it.
- **△ in MS quotes** is the guide's own notation, not a character: MS §4 Conventions, L646: "A triangle (△) in an example means a half-width space. This symbol is used only when explaining the spacing rule."
- **Widths in MS quotes** are as the PDF's text layer gives them. Where a rule turns on width, code points are given. In this extraction the question mark in MS's rules and examples is U+003F. The whole extraction contains one U+FF1F and no U+FF01 (counted by script): §4.1.8 Pronouns, L1019, 「プリンターが見つかりません。追加しますか？」 ends in U+FF1F.
- **Other quotes** (SmartHR, Ubie, 国税庁, Science Tokyo) came through WebFetch, which hands the page to an extraction model. Each quoted section had at least one narrow pass asking only for exact Japanese; the passes are counted in sources.json. Widths in these quotes were reported by the extraction model and **not verified at code-point level**.
- **Quotes carried over from the first file** (WP, MZ, MZ-ed, SH-ws, SH-app, SH-cnt, UB, UB-btn, SP-btn, DADS, KB) were not re-opened in this pass; they are copied from `../writing/rules.md` and its references.
- **Japanese strings.** Every Japanese string is a verbatim quote (in 「」 with its source key). Words from the Japanese in prose and in test lines are substrings of a quote. There are no composed examples in this file.
- **Kinds.** TYPO = checkable in CSS or rendered text; WRITE = wording, register, punctuation, notation.

## Strength labels (changed from the first file)

| Label | Meaning |
|---|---|
| LAW | A statutory duty as explained by the authority that administers it (here only 国税庁 on the Consumption Tax Act, art. 63 (the page's legal-basis line reads 「消法63」)). |
| AUTH | Stated by a government body's design system (DADS), as in the first file. |
| PRAC(n/4) | Stated in n of the same 4 company product-design guides as the first file (SmartHR, Ubie Vitals, Ameba Spindle, GMO Pepabo Inhouse). This pass opened more pages of SmartHR and Ubie; it found no new company product guide, so M stays 4. |
| L10N(n/3) | Stated in n of **3** localization guides. **The denominator is 3 from this pass on** (Mozilla Japan, WordPress 日本語チーム, Microsoft); the first file used n/2. MS is a translation guide for Microsoft products and is counted here, not with company guides. |
| WEB(1) | Science Tokyo (東京科学大学) design system writing guideline. Its scope is stated: 「ライティングガイドラインは、Science TokyoのWebサイト全体に適用されます。」 (ISCT-scope). It is a university website guide, not a product-UI guide, so it is counted apart. |

## Source keys (new in this pass)

| Key | Source | Where |
|---|---|---|
| MS | Microsoft, Japanese Localization Style Guide (71 pp.) | local text extraction, see above |
| SH-dd | SmartHR: 削除ダイアログ | https://smarthr.design/products/design-patterns/delete-dialog/ |
| SH-cs | SmartHR: ワンクッション必要な操作 | https://smarthr.design/products/design-patterns/confirmation-step/ |
| SH-mu | SmartHR: モーダルなUI | https://smarthr.design/products/design-patterns/modal-ui/ |
| SH-tb | SmartHR: よくあるテーブル | https://smarthr.design/products/design-patterns/smarthr-table/ |
| SH-ed | SmartHR: 値がない項目の表示 | https://smarthr.design/products/design-patterns/empty-data/ |
| UB-am | Ubie Vitals: ActionModal | https://vitals.ubie.life/components/action-modal/ |
| NTA | 国税庁 No.6902 「総額表示」の義務付け (page line: 「[令和8年4月1日現在法令等]」) | https://www.nta.go.jp/taxes/shiraberu/taxanswer/shohi/6902.htm |
| ISCT | Science Tokyo デザインシステム: 日本語ページの表記 | https://design-system.isct.ac.jp/ja/documents/writing-guidelines/basic-policy/japanese |
| ISCT-scope | Science Tokyo: 位置付けと適用範囲 | https://design-system.isct.ac.jp/ja/documents/writing-guidelines/introduction/scope/ |

Keys from the first file (SH-ws, SH-act, UB, UB-btn, SP-btn, DADS-btn, DADS-md, MZ, MZ-ed, WP, …) keep their meaning.

SmartHR pages show code-styled text with backticks in the extraction (for example `削除`); the backticks are kept in quotes and are not characters of the label.


## 1. Apology in errors

#### UW-58 Apologise only for a serious failure, with 「申し訳ございません」 as a sentence of its own; never 「すみません」 (MS) — DISAGREEMENT with UW-11
- Kind: WRITE.
- MS §5.4.2 Error messages, "Sorry", L2327–2330: "This is used in error messages that result in serious problems for the customer, or when a product or service fails. Translate to formal "申し訳ございません" to express sincere apology. If "Sorry" is followed by some description in single English sentence, translate "Sorry" as one sentence and the description as another."
- MS same table, L2337–2341: + 「申し訳ございません。何らかの理由で Skype が動作しなくなり、終了しました。」 / − 「すみません、原因ははっきりしませんが、Skype が動作しなくなり、終了しました。」
- Other side, WordPress (UW-11, WP 3-4): 「”Sorry, …” で始まるエラーメッセージは「すみません」とは訳さず、その部分を削除する」.
- Where they agree: both translation guides reject 「すみません」. Where they differ: MS keeps an apology in serious-failure errors; WordPress drops it.
- What MS's ordinary errors look like (examples, not a rule): §5.4.2, L2306–2308 「パスワードが正しくありません。もう一度入力してください。パスワードでは大文字と小文字が区別されます。」; L2311 「メモリ不足のためこのコマンドを処理できません。」. Neither has an apology.
- Tension, not adjudicated: JW-07 (KB, scope 公用文) 「文末は「です・ます」を基調とし、「ございます」は用いない。」 MS's 申し訳ございません ends a sentence with ございます. KB is about government writing, MS about product UI; the skill should not treat either as overriding the other.
- Test: script — error strings containing すみません: flag under both guides; strings containing 申し訳: list for review (MS allows them for serious failures only, WP not at all); judgment for "serious".
- Strength: L10N(1/3) MS vs L10N(1/3) WP. No company guide and no government page read states when to apologise. Do not pick.


## 2. Request forms (ください, お願いします)

#### Adds to UW-10 — a stated rule now exists: an instruction sentence ends 「...してください。」 (MS)
- Kind: WRITE.
- MS §4.2 Style and tone consideration › Style › When to Use Desu-masu, L1900–1901: "In general, sentences should be translated in Desu-masu unless otherwise instructed. When the sentence prompts users to take an action, use "...してください。."" Scope, L1903–1904: "Example: Explanatory texts in windows, dialog boxes, message boxes and status bar (in software); Explanatory text except for headings (in document)."
- MS §5.4.2 Error messages › Japanese style in error messages, L2321–2323: "In Japanese, use Desu-masu (ですます調, polite style) when translating message body. When the message prompts users to take an action, use "...してください。." Use noun phrase (体言止め) when translating a title of the box and command buttons."
- Example (MS §5.4.2, L2306–2308): 「パスワードが正しくありません。もう一度入力してください。パスワードでは大文字と小文字が区別されます。」
- Effect on UW-10: UW-10 recorded only examples (DADS, Pepabo, SmartHR, Ubie all write 〜してください). MS states it, so UW-10 now has one stated source, L10N(1/3), plus the examples. It is a translation guide's rule for message and dialog text.
- お願いします: MS does not mention it. No source read in either pass rules on ください versus お願いします (gaps.md).
- Test: script — instruction sentences in message bodies ending in a form other than してください／ください: FYI.

#### UW-59 For a short list of instructive verbs, the お／ご form 「ご確認ください」 rather than 「確認してください」 (MS) — DISAGREEMENT with SmartHR
- Kind: WRITE.
- MS §4.2 › Tone › Polite Expression（丁寧語）, L2029–2031: "Pay attention to be polite and avoid sounding abrupt and unfriendly. For following instructive "...してください" phrases, try to use more polite expression than normal to be more empathetic and avoid sounding mechanical."
- The pairs, + / − (L2037–2057): 「ご確認ください」 / 「確認してください」; 「ご覧ください」 / 「参照してください」; 「お問い合わせください」 / 「問い合わせてください」; 「ご連絡ください」 / 「連絡してください」; 「お試しください」 or 「...してみてください」 / 「試行してください」; 「もう一度お試しください」 or 「もう一度...してみてください」 / 「再試行してください」; 「ご注意ください」 / 「注意してください」; 「お知らせください」 / 「通知してください」.
- Limits stated by MS, L2060–2063: "Note: Above are provided to show how you use these Japanese instructive expressions, and not intended to show how you should translate these English phrases to these specific Japanese phrases (You may need to translate the English phrases differently according to context)." and L2065–2066: "Note: This is not applicable to other instructive "...してください" phrases (such as "作成してください," "削除してください," etc.) in general."
- Other side: SmartHR (SH-ws, first file UW-09 / JW-08) gives OK 「◯◯を確認してください。」 against NG 「◯◯をご確認いただけますようお願いいたします。」. SmartHR's OK form is MS's minus form for the verb 確認. SmartHR's point is against stacked keigo, which MS also makes (Adds to UW-09 below); the two differ only on whether plain 確認してください is the target.
- Agreement on one verb (example, not a rule): Ubie (UB, first file) 「お手数ですが、こちらからお問い合わせください。」 uses the お form MS asks for.
- Test: script per house style — for the listed verbs only, flag the してください form under MS style, or the お／ご form under SmartHR style. Never apply to other verbs (MS's own note).
- Strength: L10N(1/3) vs PRAC(1/4). Do not pick.


## 3. Buttons: pairs, the abort button, the destructive button

#### UW-60 The button that completes a dialog names its action with a verb; the button that aborts is 「キャンセル」; in a delete dialog the pair is 「削除」 (right) and 「キャンセル」 (left)
- Kind: WRITE + TYPO (label text and DOM order are checkable).
- SH-mu: 「ボタンのラベルは、モードの目的であるタスクを完了するアクションであることがわかる動詞を用います。」 「タスクを中断するアクションのボタンラベルは`キャンセル`とします。」
- SH-dd 6. アクションボタン: 「操作を確定するボタンは右に配置し、ラベルは`削除`とします。」 「ダイアログを閉じて操作を中断するボタンは左に配置し、ラベルは`キャンセル`とします。」
- UB-am Button Label: 「「キャンセル」と「閉じる」は使い分けてください。前者はアクションを中断するニュアンスがあり、後者は単にダイアログを閉じる場合に使います。」 (the narrow pass returned the same sentence opening with 「また、」).
- Placement agrees with DADS-btn (UW-19: forward action right, cancel-type left). 閉じる versus action buttons: DADS-md (UW-20).
- Ubie's pair ❌「キャンセル」 / ⭕️「停止」 (UB-am Button Label) is given with no context on the page. Whether it is about the abort button (which would contradict SmartHR's 「キャンセル」) or about an action that happens to mean "cancel" is **undetermined**. Both are recorded; do not reconcile.
- Not found: はい／いいえ versus OK／キャンセル, and which pair answers which question. MS has no pair rule (it names buttons only as UI references, e.g. 「[OK] をクリックしてダイアログ ボックスを閉じます。」, §4.1.9 Brackets).
- Test: script — in a dialog, abort button text other than キャンセル: FYI under SmartHR style; abort button right of the confirm button: flag (SmartHR, DADS).
- Strength: PRAC(1/4: SmartHR states the abort label; Ubie agrees on what キャンセル means) + AUTH (DADS, placement only).

#### UW-61 The destructive button is labelled with the act itself (SmartHR: 「削除」) and styled as a Danger button
- Kind: WRITE + TYPO.
- SH-dd 6.: 「操作を確定するボタンは右に配置し、ラベルは`削除`とします。」 「Dangerボタンを使い、破壊的な操作であることを示します。」
- Spindle's Danger examples (first file, SP-btn): 「投稿削除、退会、等。」 — labels name the act; no wording rule.
- 削除 versus 削除する: SmartHR's form matches its general rule (JW-60, drop する); Ubie and Spindle allow する (UW-16). No source read states a strengthened wording for the destructive button (gaps.md).
- Test: script — Danger-styled button whose text is OK／はい／確認: flag.
- Strength: PRAC(1/4: SmartHR) for the label; Spindle shows the same practice without a rule.

#### Adds to UW-15 — 「OK」 alone is not a button label (Ubie, second page)
- UB-am Button Label: 「簡潔で、具体的なテキストをラベルとして用いてください。」 ❌「OK」 / ⭕️「保存」.
- Count unchanged: PRAC(3/4) (Ubie was already counted from UB-btn). SH-mu (above) is a second SmartHR page saying the same.

#### Adds to UW-16 — MS: command buttons are noun phrases (体言止め)
- MS §4.2 › When to Use Noun Phrase, L1920–1922: "When sentences should be briefly and simply translated, use noun phrase. Dearu and appropriate postpositional particles can be used depending on the situation. Make sure to keep consistency on levels." L1924–1926: "Example: Titles of menus and boxes, menu commands, labels in dialog boxes, command buttons, tabs, list items in list boxes or combo boxes (in software); Titles of web pages, headings, call-outs, captions (in documents)."
- MS §5.4.2, L2321–2323: "...Use noun phrase (体言止め) when translating a title of the box and command buttons."
- MS §2.1.3 Word choice, on 選ぶ／選択, L246–254: 「文章中では、「～を選択し、」とするよりも「～を選び、」とするほうが日常会話で使う言葉に近く、望ましい表現です。 一方、ボタン名やメニュー名などで、従来から汎用的に使われている場合や直感的な表現にしたい場合は、原則として従来の”<漢語> する” 形式をとります。(例：「選択」 ボタン) また、開発者向けのメッセージ関連の文章なども、”<漢語> する” 形式のほうが適切です。」
- MS same table, L1943: + 「次へ」 / − 「次」 — "Add an appropriate postpositional particle for clarity."
- But the same MS passage allows the plain form for clarity: + 「アイテムを開く」 / − 「アイテムの開き」 "Use Dearu instead for clarity." (L1940), and "Dearu and appropriate postpositional particles can be used depending on the situation." So MS is: noun phrase by default, plain verb allowed.
- Effect: all three translation guides lean away from a する ending on buttons (Mozilla: 「簡潔な体言」; WordPress: drop 「します (する)」; MS: noun phrase by default, plain verb allowed). That is L10N(3/3) against する, not L10N(3/3) for one form. Company guides stay split (SmartHR drop する; Ubie either; Spindle by word origin). Still a DISAGREEMENT for the skill; do not pick.

#### Adds to UW-17 — MS takes 「～の～」 as the basic noun phrase — DISAGREEMENT with SmartHR and WordPress
- MS §4.2 › When to Use Noun Phrase, table (L1934–1944):
  - + 「変更箇所の表示」 / − 「変更箇所を表示」 — "Basic expression "～の～""
  - + 「オブジェクトの種類を選択」 / − 「オブジェクトの種類の選択」 — "Avoid "～の～の～.""
  - + 「アイテムを開く」 / − 「アイテムの開き」 — "Use Dearu instead for clarity."
- Scope: MS applies noun phrases to menu titles, menu commands, dialog labels, command buttons, tabs and list items (L1924–1926), so this table covers buttons too.
- Other side: SH-app OK 「権限を追加、申請を取り消す」 / NG 「権限の追加、申請の取り消し」; WP 3-2 「“View XX” という表現は基本的に「～を表示 (する)」に統一する」. MS's minus 「変更箇所を表示」 is the form WordPress prescribes.
- Titles: Ubie's dialog headers join the action noun and its object with の (UW-65), as SmartHR's dialog titles do (JW-61) and OPT's heading says; the の-for-titles split is not contested.
- Strength: L10N 1/3 (MS: の) vs 1/3 (WP: を); PRAC(1/4: SmartHR を). Do not pick.


## 4. Confirmation dialogs

#### UW-62 Ask 「...しますか?」, not 「....してもよろしいですか?」 (MS)
- Kind: WRITE.
- MS §4.2 › Asking for Action to Take, L2070–2071: "For the sentences asking the customer which action to take, such as "Do you want to ...?" or "Would you like to ...?", translate to "...しますか?"" L2073–2074: "Avoid translating to "....してもよろしいですか?" because the agent of action is not the customer in this way."
- Example, L2083: + 「このまま続けますか?」 / − 「このまま続けてもよろしいですか?」
- Company examples use the same form (examples, not rules): SH-dd 「以下の{オブジェクト名}を削除しますか？　この操作は元に戻せません。」; UB-am 「この回答履歴を削除しますか？」.
- Width: MS's question mark is U+003F (L2071, L2083; MS §4.1.9 Question mark, L1300–1301: "In Japanese, use half-width question mark (?) as a part of English quotation, (numerical) expression, interactive messages, etc., as used in the source text."). SmartHR and Ubie quotes carry a full-width ？ per extraction, and SmartHR adds a full-width space after it: SH-dd 「「？」の後には、全角スペースを挿入してください。」 (both unverified at code-point level). Width is UW-42's disagreement; not re-decided here.
- Test: script — dialog text containing 「してもよろしいですか」: flag under MS style.
- Strength: L10N(1/3). PRAC: no company guide states it; two use the form.

#### UW-63 A delete confirmation names the object and says the act cannot be undone; skip the confirmation when the act can be undone — and where the question goes is a DISAGREEMENT
- Kind: WRITE.
- SH-dd 基本的な考え方: 「削除などの破壊的で不可逆な操作をする際は、アクションダイアログを用いて、ユーザーの確認を経てシステムが処理を実行するようにします。」 「破壊的な操作であっても、操作後に元に戻せる場合は、処理前の確認は必要ありません。」
- SH-dd 3. 削除対象: 「DefinitionListを使い、削除対象のオブジェクト名およびインスタンス名を提示します。」 It may be left out where a mix-up is unlikely: 「オブジェクト詳細画面で削除ボタンを押すなど、他のオブジェクトと取り違える可能性が明らかに低い場合、削除対象のインスタンス名を省略しても構いません。」
- SH-dd templates: title 「{オブジェクト名}の削除」; body 「疑問文を使い確認を促します。また、操作が不可逆である旨を明示します。」 例 「以下の{オブジェクト名}を削除しますか？　この操作は元に戻せません。」; when the target is obvious, 「選択した{オブジェクト名}を削除しますか？（後略）」 or 「この{オブジェクト名}を削除しますか？（後略）」.
- SH-dd 4. 注意事項（任意）: 「削除に伴って発生する影響がある場合、その影響の内容を提示します。」 例 「{関連するオブジェクト名など}に登録されているデータも削除されます。」 「{選択したオブジェクトのインスタンス名}に含まれる{オブジェクト名}も削除されます。」
- SH-dd 5. 確認のチェックボックス（任意）: 「削除に伴う影響が大きく、削除の操作に特に慎重になる必要がある場合は、4. 注意事項に加えて確認のチェックボックスを設けることができます。」
- UB-am Header Text: 「データの削除、内容の破棄など破壊的なアクションの場合は疑問形を使用します。例:「この回答履歴を削除しますか？」」
- Disagreement: SmartHR puts the question in the **body** and keeps the title a noun phrase (「{オブジェクト名}の削除」); Ubie puts the question in the **header**.
- With UW-22 (DADS: a confirmation dialog is not a sufficient safeguard on its own).
- Test: judgment; SmartHR's templates can serve as fixtures.
- Strength: PRAC(2/4: SmartHR, Ubie) for asking a question before a destructive act; the title/header form is split 1/1.

#### UW-64 A confirmation dialog says how many items are affected and what will happen (SmartHR)
- Kind: WRITE.
- SH-cs 確認ダイアログ: 「ワンクッション必要な操作をユーザーが実行した際は、その操作によって何が起こるのかを事前に伝えることを検討します。」 「確認ダイアログでは、対象となる件数や操作の実行で何が起こるかを表示します。」
- Definition (SH-cs): 「システムが説明や確認、注意をユーザーに促すプロセスを経て実行される必要がある操作を「ワンクッション必要な操作」としています。」
- Test: judgment only.
- Strength: PRAC(1/4: SmartHR).

#### UW-65 Dialog header: the user's action as a noun phrase or a question; action noun and object joined by の; specific words, not generic ones (Ubie)
- Kind: WRITE.
- UB-am Header Text: 「ユーザーが求める操作を、体現止めまたは疑問系で表現します。」 (「体現止め」「疑問系」 are as on the page; 体言止め and 疑問形 are meant). 「アクションを表す動名詞とその対象は連体助詞「の」を使って接続します。」 ❌「ユーザー情報を編集しましょう」 / ⭕️「ユーザー情報の編集」. 「汎用的な言葉ではなく、ユースケースに特化した具体的な言葉を使いましょう。」 ❌「変更をキャンセルする」 / ⭕️「変更を破棄する」. Length: 「モバイル環境では2行、それより大きなデバイスでは1行に収まるようにします。」
- With JW-61 (SmartHR: dialog title 「{対象}の{アクション}」) — the same の form.
- Test: script — dialog header longer than one line at desktop width: FYI; header ending in ましょう: FYI.
- Strength: PRAC(1/4: Ubie) + JW-61 (SmartHR) for the の form → 2/4 on the form.


## 5. Empty states

#### UW-66 An empty list: no table, a message naming the object, and a button to add one; a different message when a search finds nothing (SmartHR)
- Kind: WRITE + TYPO.
- SH-tb 初期表示: 「オブジェクトの数が0件である初期状態の表示パターンは以下のとおりです。」 「テーブルは表示しません。」 Message: 「`{オブジェクト名}はありません。`」 with a button to add the object (「オブジェクト追加を促すボタンは、基本的に Secondaryボタンのサイズ小 を使います。」). When the object is a person noun: 「`表示するデータはありません。`」. Actions that need an object, the bulk-action area and pagination are hidden (paraphrase of SH-tb).
- SH-tb 検索結果なし: 「`該当する{オブジェクト名}はありません。<br />別の条件を試してください。`」
- MS: nothing on empty states.
- Test: script — a table rendered with zero rows and no message: flag; message text can be checked against the templates.
- Strength: PRAC(1/4: SmartHR). One company's templates.

#### UW-67 A missing value in a data table is left blank; show 「-」 in the disabled text colour only where the user cannot enter it (SmartHR)
- Kind: TYPO.
- SH-ed (bold markup ** and a link target returned by the extraction are removed here; backticks kept as elsewhere): 「データテーブルや定義リストにおいて、値がない項目は空白表示とします。」 Exception: 「以下の場合において、値がない項目は（空白表示ではなく）`-`を表示し、文字色は`TEXT_DISABLED`とします。」 — case: 「データテーブルや定義リスト上に、ユーザーが入力できない項目を表示する場合」.
- Test: script — table cells holding a dash or a placeholder word: FYI against this rule (blank by default; dash only for fields the user cannot enter).
- Strength: PRAC(1/4: SmartHR). Single pass on this page.


## 6. 。 at the end of a button label or short UI string

No source found in this pass either. MS states no rule on 。 for buttons; it says only that command buttons are noun phrases (Adds to UW-16) and that message sentences take 「...してください。」 (Adds to UW-10). Examples only: SmartHR's button labels 「削除」「キャンセル」 have no 。; SmartHR's one-line empty-state message 「{オブジェクト名}はありません。」 has one. UW-41's disagreement on single sentences stands.


## 7. Currency and prices

#### UW-68 A price shown to consumers in advance must show the tax-inclusive total (総額表示)
- Kind: WRITE (judgment; a script can list price strings for review).
- Region and scope: Japan; prices that a business shows to consumers in advance (NTA: 「総額表示の義務付けは、事業者が消費者に対してあらかじめ表示する価格が対象となります。」). Legal basis line on the page: 「消法63」.
- NTA: 「総額表示義務とは、事業者が消費者に対してあらかじめ価格を表示する場合に、消費税額（地方消費税額を含む。）を含めた価格（税込価格）を表示することを義務付けるものです。」
- NTA examples, introduced by 「例えば、次に掲げるような表示が総額表示として認められます（標準税率10パーセントが適用されるものとして記載しています。）。」: 「11,000円」 「11,000円（税込）」 「11,000円（税抜価格10,000円）」 「11,000円（うち消費税額等1,000円）」 「11,000円（税抜価格10,000円、消費税額等1,000円）」 「11,000円（税抜価格10,000円、消費税率10パーセント）」 「10,000円（税込価格11,000円）」 (the last item returned identically in two fetches; check on the page).
- This is price-display law, not a UI style rule; it decides what a price must contain, not how it is typeset.
- Test: judgment only. A script can list strings with 円 or ¥ followed by 税抜 and no 税込 amount for review.
- Strength: LAW.

#### UW-69 円 after the number or ¥ before it — one rule source (Science Tokyo, website scope); every other source shows 円 in examples
- Kind: TYPO.
- ISCT 数字の表記 › 金額: 「半角円記号（¥）のあと、半角数字を3桁ごとに半角カンマ（,）でグルーピングする。」 「大きな金額で丸められるものは読みやすさを考慮して千、万、億のような単位を漢数字で表すことも検討可能。その場合は円も漢数字で表示する。」 Recommended 「¥12,800,000」 「1,280万円」; not recommended 「¥12800000」 「1280万円」 「¥1280万」.
- ISCT › 通貨: 「数字を記号（または略語）と一緒に使う。」 Recommended 「€2,000」 「EUR 2,000」; not recommended 「2,000ユーロ」.
- Examples elsewhere (not rules): NTA's examples all write the amount with 円 after it (UW-68); SmartHR (first file, SH-cnt) 「1,000,000円、10,000人」. MS has no currency passage (the only ￥ in the extraction is in an escape-character note, L2103, not currency).
- Code point of ¥ on the ISCT page: not verified (U+00A5 YEN SIGN and U+FFE5 FULLWIDTH YEN SIGN look alike; the page text says 半角).
- Test: script per house style — mixed 円 and ¥ in one product: flag; ¥ with 円 on the same amount: flag (ISCT's 「¥1280万」 is its not-recommended example).
- Strength: WEB(1). No company product guide and no government page read states 円 versus ¥. Do not promote ISCT's ¥ to a Japan-wide rule.


## 8. Katakana long vowels and compounds: Microsoft's position

#### Adds to UW-36 — MS: ー after -er/-or/-ar; otherwise by length; a long exceptions list
- MS §4.1.11 Symbols & spaces › Katakana prolonged sound mark. Reference, L1553: "Primary reference: 平成 3 年 6 月 28 日 内閣告示第 2 号「外来語の表記」"
- L1555: "In principle, use a long vowel when a source English term has following suffixes: -er, -or, -ar." Examples (L1561–1565): + 「コンピューター」 / − 「コンピュータ」; + 「オペレーター」 / − 「オペレータ」; + 「スカラー」 / − 「スカラ」.
- L1568–1571: "In other cases, use a long vowel when a corresponding Katakana word has less than 4 characters. Note that the long vowel should be counted while geminative consonant (Sokuon, small "tu," ッ), contracted sound (Yoon, small "ya," "yu," "yo," ャ, ュ, ョ) and small a, i, u (ァ, ィ, ゥ) should not." Examples (L1577–1584): 「キュー」 (count 「2 (キ, ー)」), 「メニュー」 (count 「3 (メ, ニ, ー)」), 「メモリ」 not 「メモリー」 (count 「4 (メ, モ, リ, ―)」), 「プロシージャ」 not 「プロシージャー」 (count 「6 (プ, ロ, シ, ー, ジ, ―)」).
  - Code points: in the + / − columns the mark is U+30FC KATAKANA-HIRAGANA PROLONGED SOUND MARK. In the character-count column the counted mark is U+30FC on L1577 and L1579, but **U+2015 HORIZONTAL BAR** on L1582 and L1584. Read U+2015 there as a text-layer artefact of the count column, not as a recommended character; check on the PDF.
  - The threshold is quoted, not restated: the words say "less than 4 characters"; the examples give ー at a count of 2 and 3 and none at 4 and 6.
- L1587–1588: "When the English term consists of a prefix and a stem word, the words should be considered one by one." Examples: 「プレビュー」 (not 「プレビュ」), 「サブツリー」 (not 「サブツリ」), 「インターフェイス」 (not 「インタフェイス」).
- Exceptions (L1601–1736), "In accordance with customary practice". Among them, -er/-or words **without** ー: compiler 「コンパイラ」, connector 「コネクタ」, processor 「プロセッサ」, programmer 「プログラマ」, scheduler 「スケジューラ」, formatter 「フォーマッタ」, register 「レジスタ」, accelerator 「アクセラレータ」; and longer words **with** ー: policy 「ポリシー」, summary 「サマリー」, gallery 「ギャラリー」, competency 「コンピテンシー」.
- Effect on UW-36:
  - This is the list Mozilla means by 「Microsoft のような例外はなし」 (MZ, first file); it is now read.
  - ユーザー: MS writes it with ー (e.g. §4.1.1 Abbreviations, L688 「ユーザー△インターフェイス」); with Ubie, Mozilla and WordPress, ユーザー has ー in every guide read: PRAC(1/4) + L10N(3/3). Still no guide adopts ユーザ.
  - Three methods now: Mozilla (every -er/-or/-ar/-cy/-ry/-gy/-xy word takes ー, no exceptions), WordPress (by length: ー up to 4 characters, none from 5, with listed exceptions), MS (-er/-or/-ar take ー, others by a "less than 4" count, with a long list of exceptions). On specific words they differ: MS 「コンパイラ」 agrees with WordPress (「コンパイラ」), against Mozilla's rule; MS 「メモリ」 (-ry, no ー) against Mozilla's -ry rule (「ディレクトリー」); MS 「ポリシー」 and Mozilla 「プライバシー」 both have ー.
- Still a DISAGREEMENT on method; do not pick.

#### Adds to UW-37 — MS puts a half-width space inside katakana compounds that are two English words — DISAGREEMENT with Mozilla (WordPress speaks only of 中点)
- MS §4.1.4 Compounds, L779: "When there is a space between English words, insert a half-width space accordingly." Examples: 「ダイアログ△ボックス」, 「メニュー△コマンド」.
- L790: "When there is a hyphen between English words, do not insert a space or other symbols." (「マルチバイト」, 「ダブルクリック」). L801–802: "When English term is ***bar, insert a space preceding "バー" even if the English term is not a compound." (「メニュー△バー」, 「タスク△バー」). L813–814: "When English term include an adverb such as "in" and "on," do not insert a space or other symbols." (「ログオン」).
- Repeated in §4.1.11 Spaces › 2. Between full-width characters: "Exceptionally, insert a space in the following cases:" — "Katakana words that represent English compounds"; + 「ページ△レイアウト」 / − 「ページレイアウト」.
- The space may be dropped for room, §4.1.1 Abbreviations › Spaces, L671–672: "A space between characters can be omitted. In this case, make sure that the characters are clearly displayed and the style is consistent on the screen." (「ユーザー△インターフェイス」 → 「ユーザーインターフェイス」).
- 中黒: §4.1.9 Punctuation › Katakana middle dot, L1346–1347: "In Japanese, use Katakana middle dot (・) as a part of foreign person name, trademark, company name, country/region name, language name, etc." Examples 「トリニダード・トバゴ」, 「エイブラハム・リンカーン」. MS lists no use of ・ in ordinary compounds.
- Other side: Mozilla 「カタカナで構成された語句について、一般的な固有名詞を除き、間に中黒やスペースを挿入しない。」 (and allows 「Windows の UI 名などスペースを含むもの」); WordPress 5 「カタカナの複合語には、用語集などで特に指定しないかぎり、原則として中点「・」は使用しない。」. On 中黒 all three agree (not in ordinary compounds). On the space MS and Mozilla disagree; WordPress speaks only of 中点.
- **Extraction caution.** The rule depends on typed spaces, the weakest part of a layout extraction, and the guide's own Japanese is not consistent: §4.1.4 (L785) 「ダイアログ△ボックス」; §4.1.9 Brackets (L1228) 「[OK] をクリックしてダイアログ ボックスを閉じます。」 and §5.4.7 (L3119) 「[Add/Delete] (追加/削除) ダイアログ ボックスが表示されます。」 with a space; but §4.2 Active/Passive Voice (L1974) 「ダイアログボックスが表示されます。」 and §5.4.7's table note (L2836) "add "ダイアログボックス" following the brackets" without one. Check on the PDF before the skill relies on it.
- With JW-35 (JTF: 中黒, space or nothing, chosen once per document): MS is one fixed choice within JTF's three.
- Strength: L10N 1/3 (MS: space) vs 1/3 (Mozilla: no space). Do not pick.


## 9. Tone and voice: Microsoft against UW-06 … UW-09

#### Adds to UW-06 — MS supports both halves: not stiff, and not spoken-casual
- Not stiff. MS §2.1 Choices that reflect Microsoft voice, L137–139: "The general style should be clear, friendly and concise. Use language that resembles conversation observed in everyday settings as opposed to the formal, technical language that is often used for technical and commercial content." §2.1.2 Words and phrases to avoid, L160–163: "Microsoft voice avoids an unnecessarily formal tone. Similarly, Japanese Microsoft voice should also avoid written words/very formal tone. Instead, switch to equivalent words appropriate for the context. (日本語の場合も、以下の表に示すとおり、書き言葉やフォーマルな場面で使う言葉を避け、それに相当する場面に合った適切な言葉に置き換えます。)" Table (avoid → use): 「xxx が可能です」 → 「xxx できます」; 「推奨します」 → 「お勧めします」; 「無効です」 → 「使用できません」.
- Everyday words, §2.1.3 Word choice: 「"もう一度” のほうが “再度” よりも、日常会話で使う言葉に近くなる傾向にあります。」; for the 「未」 prefix: 「ｘｘされていません」, 「“xx されていません” のほうが “未 xx” よりも、日常会話で使う言葉に近くなる傾向にあります。」 (tension with UW-31, where SmartHR's status labels use 未○○. MS states no scope for this row; SmartHR's rule is for status labels).
- Not too casual. MS §4.1.6 Modifiers › Appropriate in style: + 「値は変更できます。」 / − 「値は変更しても大丈夫です。」 "Avoid using spoken language."; + 「設定はいつでも更新できます。」 / − 「設定はいかなる時でも更新できます。」 "Avoid using literary style."; + 「この機能を初めて使用する場合は...」 / − 「この機能の知識がない場合は...」 "Avoid using impolite style."
- Effect: UW-06 goes from PRAC(1/4) + L10N(1/2) to PRAC(1/4) + L10N(2/3). Ubie's line 「堅苦しい表現は避けるが、フレンドリーすぎないように。」 and MS's two lists point the same way.

#### UW-70 No 尊敬語 or 謙譲語 in ordinary text; use them in material where a supplier–customer relationship has to be considered (MS)
- Kind: WRITE.
- MS §4.2 › Tone › Honorific Expression (尊敬語) and Humble Expression (謙譲語), L1986: "In general, do not use honorific expression and humble expression." + 「データ ファイルをアプリケーションに関連付けると、～」 / − 「データ ファイルをアプリケーションに関連付けていただきますと、～」.
- L1993–1994: "In materials in which "supplier-customer" relationship should be considered, use those expressions." + / −: 「弊社」 / 「当社, 我社」; 「～をお買い求めください。」 / 「～を購入してください。」; 「～をお使いいただくときには、」 / 「～を使うときには、」; 「～にお問い合わせください。」 / 「～に問い合わせてください。」.
- Against UW-07 (Ubie: no keigo on buttons, headings and other components): the same direction for ordinary UI; MS is wider (all running text), Ubie narrower (components).
- Against UW-08 (Ubie: keigo where the user must do something they would rather not, e.g. 「新規ユーザー登録」「ヘルプセンター、問い合わせ」): **a different line, not support.** MS's trigger is the kind of material (supplier–customer, e.g. buying), Ubie's is the kind of operation. Both happen to put お問い合わせ in the keigo zone.
- With JW-07 (KB: no high keigo in public text) and JW-09 (KG).
- Test: script — いただきます／なさらない／ご使用にならない in UI strings: FYI; judgment for whether the screen is supplier–customer material.
- Strength: L10N(1/3).

#### Adds to UW-09 — MS: do not stack politeness
- MS §4.2 › Tone, L2012: "Do not use excessively polite expression." + 「～を使用するときには、～をお買い求めください。」 / − 「～をお使いいただくときには、～をお買い求めください。」; + 「～を使用しないようご注意ください。」 / − 「～を使用なさらないようご注意ください。」 and 「～をご使用にならないようご注意ください。」.
- Effect: PRAC(2/4: SmartHR, Ubie) + L10N(1/3) (+OPT). Note the split recorded at UW-59: MS wants 「ご確認ください」 where SmartHR writes 「確認してください」; both reject stacked forms.

**UW-08: no addition.** MS's supplier–customer criterion is recorded at UW-70 as a different line.


## 10. Korean → Japanese translation faults

No published source met in this pass. MS is written for English sources. Not searched at length, as briefed.


## Microsoft sections that bear on other UW candidates (not written up; outside this brief)

For the orchestrator to commission if wanted. Section numbers only; nothing below has been checked against the UW wording.

| UW | MS section |
|---|---|
| UW-12 (あなた) | §2.1.3 (row "you"), §4.1.8 Pronouns |
| UW-13 (passive) | §4.2 › Inanimate Subject; Active/Passive Voice (passive where the computer acts) |
| UW-14 (できます) | §2.1.2 table (「xxx が可能です」 → 「xxx できます」) |
| UW-40 (space between Japanese and Latin/digits) | §4.1.11 Spaces 1–3 (half-width space, with exceptions; 「第△3△章」) |
| UW-42 (！？ width) | §4.1.9 Question mark, Exclamation mark (half-width); §4.1.11 |
| UW-43 (parentheses) | §4.1.9 Parentheses (half-width) |
| UW-44 (UI names in text) | §4.1.9 Brackets; §5.4.7 User interface (half-width [ ]) |
| UW-45 (ellipsis) | §4.1.9 Ellipses, Period (three half-width periods) |
| UW-46 (〜) | §4.1.9 Wave dash (U+FF5E; replace with から or a half-width hyphen in ranges) |
| UW-47 (colon) | §4.1.9 Colon (half-width) |
| UW-48 (slash) | §4.1.9 Slash (half-width, incl. pairs of opposite terms) |
| UW-50 (dates) | §4.1.9 Slash (date separator example) |
| UW-52 (digit grouping) | §4.1.9 Comma |
| UW-53 (number–unit space) | §4.1.11 Spaces 3 (space except % and mm) |
| UW-54 / JW-52 (か月) | §4.1.3 Characters › Katakana |
| UW-55 (1つ) | §4.1.7 Numbers |
| UW-31 (未○○) | §2.1.3 (「未」 row; see Adds to UW-06) |
| JW-20 (double negatives) | §4.1.12 Verbs › Double negative |


## Tally (this file)

New candidates: 13 (UW-58 … UW-70). Additions to existing candidates: 8 (UW-06, 09, 10, 15, 16, 17, 36, 37). Each new candidate is counted once, by its strongest tier; a recorded disagreement counts as a disagreement.

| Tier | Count | IDs |
|---|---:|---|
| LAW | 1 | UW-68 |
| AUTH | 0 | — (DADS agrees on placement in UW-60, which is counted under PRAC) |
| PRAC, 2 or more of 4 | 2 | UW-63 (2/4 for asking before a destructive act; counted here, not as a disagreement, because the two guides differ only on whether the question sits in the title or the body), UW-65 (2/4 on the の form with JW-61) |
| PRAC, 1 of 4 | 5 | UW-60, 61, 64, 66, 67 |
| L10N only | 2 | UW-62, UW-70 |
| WEB(1) only | 1 | UW-69 |
| Recorded DISAGREEMENT | 2 | UW-58 (MS vs WP), UW-59 (MS vs SmartHR) |

Additions that turn an existing candidate into, or confirm it as, a disagreement: UW-17 (MS の vs SmartHR/WP を), UW-36 (third method), UW-37 (MS space vs Mozilla none).
