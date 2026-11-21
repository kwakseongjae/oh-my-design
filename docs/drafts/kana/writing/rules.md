# /kana writing — UX writing rule candidates (Japanese, Japan)

Research draft, 2026-11-21. **No native Japanese reader has reviewed this file.** Region for every candidate: Japan (ja-JP). No source below speaks for any other region.

## Read this first

- **This file is a delta.** `../references/rules.md` already holds JW-01 … JW-70 (sources: 公用文作成の考え方 (KB), 敬語の指針 (KG), 外来語の表記 (GK), やさしい日本語 (YN), JTF, SmartHR). Each area below opens with a pointer to those JW ids and then adds only evidence that is new in this round: more company guides, the government design system's component pages, and two localization guides. Where a new source agrees with a JW rule, the candidate says so and raises the count; it does not restate the JW rule.
- **How quotes were taken.** Every quote came through WebFetch, which hands the page to an extraction model. Every quoted section had at least one narrow pass asking for the exact Japanese only, with no paraphrase. Nine keys (DADS-btn, DADS-in, DADS-nb, PB, SP-lab, SP-btn, UB-btn, SH-act, SH-nb) also had an earlier broad pass that mixed quotes with summary; they were re-fetched narrowly and reconciled, and anything only the broad pass returned was dropped or is marked as paraphrase. Glyph width (！ vs !, （ vs (, 〜 vs ～, … vs ...) was requested but **not verified at code-point level**, except where the page itself names the code point (Mozilla's U+301C / U+FF5E lines). Where two fetches disagreed on a glyph, the candidate says so. A native reader should re-read each quote on the page before the skill ships.
- **Japanese strings.** Every Japanese string here is either a verbatim quote (in 「」 or "", with its source key) or marked *illustration (ours, unreviewed)*. There are no unmarked composed examples.
- **Kinds.** TYPO = checkable in CSS or rendered text; WRITE = wording, register, punctuation, notation.

## Strength labels

| Label | Meaning |
|---|---|
| STD | Required by a standard or 内閣告示 (none new in this round). |
| AUTH | Stated by a government body. Here only デジタル庁デザインシステム (DADS) component pages. DADS is a design system for government services; its scope is stated per component. |
| PRAC(n/M) | Stated in n of the M company design-system writing guides read this round. **M = 4**: SmartHR, Ubie Vitals, Ameba Spindle, GMO Pepabo Inhouse (Pepabo: one component page only). n counts only guides that state the rule; a guide that is silent on the topic is not counted against it, and each candidate says how many of the 4 address the topic at all. |
| L10N(n/2) | Stated in n of the 2 localization (translation into Japanese) guides read this round: Mozilla Japan (L10n Guideline + Editorial Guideline) and WordPress 日本語翻訳スタイルガイド. Scope: translated open-source software UI and docs. Counted apart from company guides because they describe translated UI, not native product copy. |
| +OPT | OPTiM's tech-blog post lists its in-house UX-writing rules **as headings only**, no examples or body. Recorded as a pointer and never counted in n. |

Microsoft's Japanese Localization Style Guide, Apple's Japanese HIG writing page and freee's vibes were opened but could not be read (gaps.md). So no Microsoft or Apple count appears anywhere below.

## Source keys

| Key | Source | URL |
|---|---|---|
| SH-app | SmartHR — その他のUIテキスト | https://smarthr.design/products/contents/ui-text/app-writing/ |
| SH-ws | SmartHR — 基本的な考え方 | https://smarthr.design/products/contents/writing-style/ |
| SH-act | SmartHR — 操作を表す用語 | https://smarthr.design/products/contents/idiomatic-usage/action/ |
| SH-nb | SmartHR — NotificationBarのライティングパターン | https://smarthr.design/products/contents/error-messages/notificationbar/ |
| SH-bg | SmartHR — バックグラウンド処理のライティングパターン | https://smarthr.design/products/contents/error-messages/background-process/ |
| SH-err | SmartHR — エラーメッセージの基本的な考え方 | https://smarthr.design/products/contents/error-messages/overview/ |
| SH-st | SmartHR — ステータス | https://smarthr.design/products/contents/ui-text/statuslabel/ |
| SH-oth | SmartHR — その他類似する用語の使い分け | https://smarthr.design/products/contents/idiomatic-usage/other/ |
| SH-cnt | SmartHR — 数字・数えの表記 | https://smarthr.design/products/contents/idiomatic-usage/count/ |
| UB | Ubie Vitals — UXライティング ガイドライン | https://vitals.ubie.life/ux-writing/ |
| UB-btn | Ubie Vitals — Button | https://vitals.ubie.life/components/button |
| SP-lab | Ameba Spindle — UIラベリング | https://spindle.ameba.design/principles/contents/ui-labeling/ |
| SP-btn | Ameba Spindle — ボタン | https://spindle.ameba.design/components/button/ |
| PB | GMO Pepabo Inhouse — Validation Message | https://design.pepabo.com/inhouse/components/validation-message/ |
| DADS-btn | デジタル庁デザインシステム — ボタン（使い方）, 2026年10月21日更新 | https://design.digital.go.jp/dads/components/button/usage/ |
| DADS-in | DADS — インプットテキスト（使い方）, 2025年8月20日更新 | https://design.digital.go.jp/dads/components/input-text/usage/ |
| DADS-md | DADS — モーダルダイアログ（概要）, 2026年9月9日更新 | https://design.digital.go.jp/dads/components/modal-dialog/ |
| DADS-nb | DADS — ノティフィケーションバナー（使い方）, 2026年10月21日更新 | https://design.digital.go.jp/dads/components/notification-banner/usage/ |
| MZ | Mozilla Japan — L10n Guideline | https://mozilla-l10n.github.io/styleguides/ja/l10nguideline.html |
| MZ-ed | Mozilla Japan — Editorial Guideline (wiki, current; page shows 更新日: 2026-10-27 per extraction) | https://github.com/mozilla-japan/translation/wiki/Editorial-Guideline |
| MZ-ed21 | Mozilla — Editorial Guideline, mozilla-l10n copy (last updated 2021-04-04) | https://mozilla-l10n.github.io/styleguides/ja/editorialguideline.html |
| WP | WordPress 日本語チーム — 翻訳スタイルガイド (last modified 2026年8月28日 per extraction) | https://ja.wordpress.org/team/handbook/translation/translation-style-guide/ |
| OPT | OPTiM TECH BLOG — 製品共通のUXライティングのルールを作ってみた (2025-01-16; rule headings only) | https://tech-blog.optim.co.jp/entry/2025/01/16/100000 |


## 1. Register in UI (文体)

Already in references/rules.md: JW-01 (one sentence-final style per text), JW-02 (です・ます as base for reader-facing text), JW-06 (headings and lists may use 常体 / 体言止め), JW-62 (SmartHR: descriptions are full sentences; audit-log entries 体言止め). New below: Mozilla and WordPress on titles, menus, checkboxes and list items; OPTiM's heading.

#### UW-01 Running text and descriptions in です・ます (敬体)
- Kind: WRITE. Region: Japan.
- MZ 文体と表現: 「文体は敬体 (ですます調) で統一する。」
- MZ-ed 日本語の文体: 「語尾は原則として「ですます調」を採用する。」
- OPT (heading only): 「ディスクリプションは敬体（です、ます調）を用いて、動詞まで書く」
- Test: script — sentence-final forms in body/description text (〜だ。〜である。〜する。 vs 〜です。〜ます。); flag mixing within one text (JW-01).
- Strength: L10N(1/2) (WordPress does not state a baseline register for running text) + AUTH/PRAC already in JW-02. Of the 4 company guides, none states a です・ます baseline in the pages read; SmartHR, Pepabo and DADS write their examples in です・ます without stating it as a rule (+OPT).

#### UW-02 Screen titles, window titles and headings are nouns (体言止め)
- Kind: WRITE.
- MZ ウィンドウ: 「タイトル名は体言止めを原則とする。全体のバランスに注意する。」
- WP 3-8: 「見出しは体言止め、または「する」(常体) とする」
- SH-app: 「画面タイトルや項目名は、名詞で表記します。」
- OPT (heading only): 「画面タイトル、項目名は名詞、動名詞で表記する」
- Illustration (ours, unreviewed): wrong 「プロフィールを編集します」 → right 「プロフィールの編集」 as a screen title.
- Test: script — heading/title elements ending in です／ます／。: flag.
- Strength: PRAC(1/4: SmartHR; the other three are silent) + L10N(2/2) (+OPT). WP also allows the plain 「する」 form; Mozilla does not mention it.

#### UW-03 Menu items: short nouns, except where the OS has its own idiom
- Kind: WRITE.
- MZ メニュー項目: 「OS の慣用表現に従う他は簡潔な体言を基本とする」
- MZ カテゴリー名: 「体言止めを原則とし、コロンをつけたり設定項目の説明と続けて文にしたりはしない。」
- MZ プルダウンメニュー: 「可能であれば共通部は前後の説明部に表記し、各項目は簡潔で分かり易いものとする。」
- Test: script — menu items containing です／ます／。: flag.
- Strength: L10N(1/2). No company guide read addresses menu items (closes the "menu labels" gap only for translated OSS).

#### UW-04 Checkbox labels end in a verb; radio labels are free; neither takes 。 unless it is several sentences
- Kind: WRITE.
- MZ チェックボックス: 「末尾では体言ではなく動詞を原則とする。コロンと入力欄が続くはこの限りではない。」 / 「やむを得ずラベルが複数の文になる場合を除き、句点は使用しない。」
- MZ ラジオボタン: 「前後の文脈に注意して簡潔で分かり易い表現とする。末尾の品詞は問わない。」 and 「止む終えずラベルが複数の文になる場合を除き、句点は使用しない。」 (the 「止む終えず」 spelling is as extracted; verify on page)
- Test: script — checkbox label ending in a noun: FYI; label with one 。 and one sentence: flag.
- Strength: L10N(1/2).

#### UW-05 List items in plain 「する」 form (translated OSS)
- Kind: WRITE.
- WP 3-8: 「箇条書きの項目では「する」(常体) とする」
- Strength: L10N(1/2). Compare JW-06 (KB/JTF: lists may use 常体; one style per list).

#### UW-06 Tone: not stiff, not over-friendly; avoid over-formal politeness in ordinary content
- Kind: WRITE (judgment).
- UB 文法: 「堅苦しい表現は避けるが、フレンドリーすぎないように。」 Do 「体調はいかがですか？」 / Don't 「お加減はいかがですか？ ※ちょっと堅い」
- MZ-ed 日本語の文体: 「あまり丁寧すぎると浮いてしまうので、内容が改まったものでなければ、一般的な丁寧語で記述する。特にブログは多少カジュアルでも良い。」 OK 「皆さん」「公開します」「よろしくお願いします」 / NG 「皆様」「公開いたしました」「よろしくお願いいたします」 (OK/NG pair quoted from MZ-ed21; the wiki fetch returned the NG list only)
- Test: judgment only (a word list can surface いたしました／皆様 for review).
- Strength: PRAC(1/4: Ubie) + L10N(1/2). Note: DADS-md's own sample dialog body (image description) reads 「マイページよりお知らせの内容を確認し、期限までにご対応をお願いいたします。」 — a government sample using いたします; it is an example, not a rule, and it is for a notice from an authority.


## 2. Keigo in interfaces

Already in references/rules.md: JW-07 (no high keigo in public text; no 「ございます」 at sentence end), JW-08 (SmartHR: 「◯◯しました」 not 「◯◯させていただきました」), JW-09 (KG: when させていただく fits), JW-10 (no 二重敬語), JW-11 (no 尊敬語 on things), JW-12 (YN), JW-13 (「ご〇〇ください」 only for 〇〇する verbs). New below: Ubie on where keigo goes, a second company guide on overuse, WordPress on apologies and あなた.

#### UW-07 No keigo on buttons, headings and other UI components
- Kind: WRITE.
- UB 敬語: 「基本的にボタン、見出しなどのUIコンポーネントでは原則として敬語を使いません。ユーザーの操作対象のラベルの発言者をユーザーに寄せると、読解がスムーズになります。」
- Illustration (ours, unreviewed): button 「お申し込みいただく」 → 「申し込む」.
- Test: script — button/heading text containing お／ご＋verb stem, いただく, させていただく, いたします: flag.
- Strength: PRAC(1/4: Ubie; SmartHR's button rule (JW-60) uses plain verbs without stating a keigo rule; Spindle and Pepabo silent).

#### UW-08 Use keigo where the user is made to do something they would rather not
- Kind: WRITE (judgment).
- UB 敬語: 「ユーザーが本来やりたくないのに、やらざるをえない操作が発生するときは敬語を使います。」 Listed cases: 「新規ユーザー登録」「ヘルプセンター、問い合わせ」「アンケートなど」.
- Test: judgment only.
- Strength: PRAC(1/4: Ubie). Single voice; no other source read draws this line.

#### UW-09 Do not stack keigo; one polite request form is enough
- Kind: WRITE.
- UB 敬語: Do 「お手数ですが、こちらからお問い合わせください。」 / Don't 「お手数をおかけしますが、こちらからお問い合わせいただけますよう、お願い申し上げます。 ※過剰」
- SH-ws 敬語を使いすぎない (re-read this round): 「敬語表現を多用して、情報が伝わりづらくならないように配慮しましょう。」 OK 「◯◯を確認してください。」 / NG 「◯◯をご確認いただけますようお願いいたします。」; OK 「◯◯しました。」 / NG 「◯◯させていただきました。」
- OPT (heading only): 「冗長な日本語を避け、敬語を使いすぎない」
- Test: script — いただけますよう／お願い申し上げます／させていただ in UI strings: flag; judgment for the rewrite.
- Strength: PRAC(2/4: SmartHR, Ubie) (+OPT); same direction as JW-07/08 (KB).

#### UW-10 「〜してください」 is the request form in every UI example read; no source rules on ください vs お願いします
- Kind: WRITE.
- Examples, not rules: DADS-in 「＊氏名を入力してください。」; PB 「10 文字以内で入力してください」; SH-ws OK 「◯◯を確認してください。」; UB 「お手数ですが、こちらからお問い合わせください。」 Counter-example: DADS-md sample body 「…期限までにご対応をお願いいたします。」 (image description).
- Test: none (no rule to test).
- Strength: none — recorded as what the examples show: DADS, Pepabo, SmartHR and Ubie all phrase instructions with 〜してください; one DADS sample notice uses 「ご対応をお願いいたします」. Do not state a ください-only rule from this.

#### UW-11 Translating an English "Sorry, …" error: drop the apology, do not write すみません
- Kind: WRITE.
- WP 3-4: 「”Sorry, …” で始まるエラーメッセージは「すみません」とは訳さず、その部分を削除する」
- Test: script — error strings beginning すみません／申し訳: flag under this style.
- Strength: L10N(1/2). No company guide read, and no government page read, states when (or whether) to apologise in an error (SH-err was re-read for this: it has no apology passage). 申し訳ございません in errors: no source (gaps.md).

#### UW-12 Do not insert あなた／あなたの where English has "you/your"
- Kind: WRITE.
- WP 3-5: 「英語で “You” や “Your” とあっても、日本語にしたときに不自然な場合は「あなた」「あなたの」を入れない」 / 「できる限り「自分の」「お使いの」「独自の」などの、より自然な言い回しを使うか、省略する。」
- Test: script — あなた in UI strings: FYI.
- Strength: L10N(1/2). This is the only source found on あなた in UI (it was a gap in references/sources.md).

#### UW-13 Prefer the active 「〜しました。」 over 「〜されました。」
- Kind: WRITE.
- WP 3-1: 「自然な日本語になるよう、受動態はなるべく避ける」 / 「原語が受動態の場合も、可能な場合は「～されました。」ではなく「～しました。」などとする。」
- Strength: L10N(1/2); same direction as JW-19 (KB, YN).

#### UW-14 「〜できます」 rather than 「〜することができます」 (further support for JW-14)
- MZ 類似表現とかな漢字: 「「〜することができます」はなるべく「〜できます」と簡潔にする。」
- SH-ws (re-read): OK 「◯◯できます。」 / NG 「◯◯することができます。」
- Strength: adds L10N(1/2) to JW-14. JW-14's recorded disagreement with YN stands.


## 3. Buttons, labels and link text

Already in references/rules.md: JW-60 (SmartHR: plain verb, drop する from サ変 verbs, を before the verb), JW-61 (SmartHR: dialog title 「{対象}の{アクション}」, button 「{アクション}」). New below: three more guides on the する question (they disagree), the button-must-predict-the-action rule from two more company guides, length, DADS on pairs, placement, disabled buttons and destructive actions, and SmartHR's action vocabulary.

#### UW-15 A button label says what will happen; 「OK」 alone does not
- Kind: WRITE.
- UB-btn: 「アクション内容をできるだけ短い言葉で表し、余計な装飾入れません」; Good 「この内容で更新する」 / Bad 「OK」; 「「OK」ボタンは実行するアクションの内容を表してはいません。」 「ボタンを押下した場合に、何が起こるのかをユーザーが推測できるべきです。」
- SP-btn ライティング: 「ボタン、リンクボタンのラベルは、操作やリンク先の内容が予測できるように明確にしましょう。押すと何が起きるのかが曖昧だと、ユーザーが怯えて押せなくなってしまうかもしれません。」
- SmartHR: SH-btn 「実行されるアクションをボタンラベルで示す」 (already in JW-60).
- Contrast: DADS-btn names 「OK」 as an ordinary primary label (see UW-19); it gives no wording rule.
- Test: script — button text exactly OK／はい／確認 on a dialog whose action is not a plain acknowledgement: FYI.
- Strength: PRAC(3/4: SmartHR, Ubie, Spindle; Pepabo silent).

#### UW-16 The form of an action label (する or not) — DISAGREEMENT, four positions
- Kind: WRITE (form scriptable once a house style is chosen).
- SmartHR (JW-60): drop する: OK 「追加」「削除」 / NG 「追加する」「削除する」 (SH-app, re-read this round).
- UB-btn: 「そのボタンが担うアクションを「〜する」または体言止めのかたちで書きます」 — both allowed; its good example is 「この内容で更新する」.
- SP-lab 「する」の活用: 「漢語の名詞を語幹とした動作性名詞は活用する」 / 「外来語を語幹とした動詞は活用しない」; exceptions: 「そのラベルを利用してる画面で、動詞が3つ以上反復していて、なおかつそれが動作を示唆するものであることが明らかであれば」 → 「動詞／動作性名詞は一律活用しない」; 「端末幅などの問題で、レイアウト上に最低限の文字量であることの制約があるなら」 → 「文脈に関わらず動詞／動作性名詞は一律活用しない」. SP-lab 機能名動詞: widely known function names (フォロー, いいね, コメント, ログイン, キャンセル, リトライ) may go either way.
- MZ ボタンラベル: 「動作や目的などを簡潔な体言で表す。可能であれば語数を揃える。」 WP 3-8: 「ボタンラベルでは語尾の「します (する)」を省略した形にする」
- Not counted: blog posts by MNTSQ and an ABEMA designer discuss the same split (search snippets only; the MNTSQ page redirected to a note.com session URL and was not read).
- Test: script, per house style — none of the sources makes either form wrong in general.
- Strength: of the 4 company guides, 3 address it and give 3 different answers (SmartHR: no する; Ubie: either; Spindle: する on Sino-Japanese verbal nouns, not on loanwords, with exceptions). L10N(2/2) drop する. Do not pick; a project's DESIGN.md decides.

#### UW-17 When the label names an object, join it with を, not の
- Kind: WRITE.
- SH-app: 「動詞の終止形の前に、オブジェクトを明記する場合には、助詞は「を」が適切です。」 OK 「権限を追加、申請を取り消す」 / NG 「権限の追加、申請の取り消し」
- WP 3-2: 「“View XX” という表現は基本的に「～を表示 (する)」に統一する」 / 「…動詞として使われているため「〜の表示」ではない。」
- OPT (heading only): 「ボタンやテキストリンクでは、助詞は「を」を使用する」; and for titles: 「アクションに関する画面やダイアログのタイトルでは、助詞は「の」を使用する」 (same split as JW-61).
- Spindle's examples contain both kinds: 「詳細を見る」「トップへ戻る」 and 「投稿削除」 (SP-btn) — no stated rule.
- Test: script — button text matching 〜の＋サ変 noun: flag under this style.
- Strength: PRAC(1/4: SmartHR) + L10N(1/2) (+OPT).

#### UW-18 Keep button labels short (Ubie: about 15 characters, no wrap on mobile); Mozilla: match word counts across a set
- Kind: TYPO (length is countable).
- UB-btn: 「できる限りモバイルで改行しない文字数におさめましょう（15文字程度）」
- MZ ボタンラベル: 「可能であれば語数を揃える。」
- Test: script — button text longer than 15 characters: FYI (Ubie's number; no second source gives one).
- Strength: PRAC(1/4) for the number; L10N(1/2) for matched length.

#### UW-19 Forward actions (「OK」「完了」「次へ」) right, cancel-type actions (「キャンセル」「中止」「戻る」) left; at most one cancel-type (tertiary) button per screen
- Kind: TYPO (layout, checkable in the DOM order).
- DADS-btn: 「デスクトップデバイスでは、ボタン配置を、「OK」または「完了」「次へ」などのボタンを右寄せ、「キャンセル」または「中止」「戻る」などのボタンを左寄せで配置することを原則としています。」; tertiary: 「ターシャリー（重要度：低）のボタンは、フローやアクションの実行を中断・中止するような、キャンセル行為のために使用します。ひとつの画面につき、原則1つまで使用できます。」
- Scope: DADS gives this as the desktop principle; on mobile stacks it puts the primary on top (paraphrase of the extraction).
- Pairs named by DADS: 進む side 「OK」「完了」「次へ」, 止める side 「キャンセル」「中止」「戻る」. DADS-md also names 「OK」「はい」「いいえ」「キャンセル」 as action buttons. No source read sets which pairs belong together (e.g. はい／いいえ vs OK／キャンセル).
- Strength: AUTH (DADS). No company guide read addresses placement.

#### UW-20 Do not add a 「閉じる」 button to a dialog that has action buttons
- Kind: TYPO (checkable).
- DADS-md: 「「OK」「はい」「いいえ」「キャンセル」などのアクションボタンを伴うモーダルダイアログに閉じるボタンがあると、アクションボタンと閉じるボタンの操作結果が同じなのか異なるのかを利用者が判断できなくなります。」 「閉じるボタンはアクションボタンがないときだけ使用できます。」 DADS-nb: 「アクションボタンで「閉じる」を作成しないでください。」
- Strength: AUTH (DADS).

#### UW-21 Instead of a silently disabled submit button, say what is missing
- Kind: WRITE + TYPO.
- DADS-btn: 「ユーザーの作業が終わるまでボタンを無効にするのではなく、何をすべきかを提示することで操作や入力を促してください。」 Good-example caption: 「この画面においてやるべき作業（名前と生年月日の入力）を明示しています。」 Bad-example caption: 「この画面でやるべき作業を明示しないまま、単に送信ボタンを無効にしているだけであり、ユーザーはなぜ送信ボタンが押せないのかが理解できないことがあります。」 (The examples are screenshots; their on-screen text was not captured.)
- Test: script — disabled submit button with no adjacent explanatory text: flag.
- Strength: AUTH (DADS).

#### UW-22 Destructive actions: a confirmation dialog, but not as the only safeguard
- Kind: WRITE (judgment).
- DADS-md: 「削除などの破壊的な操作を実行する際、押し間違いを防ぐために使用します。」 / 「削除などの破壊的な操作では、確認ダイアログを表示しても、利用者が内容を確認せずに操作を進めると安全対策として機能しません。」
- Spindle's Danger button examples: 「投稿削除、退会、等。」 (SP-btn) — labels name the destructive act; no stated wording rule.
- Test: judgment only.
- Strength: AUTH (DADS). Wording for the destructive button itself: no source read gives a rule.

#### UW-23 Use one word per operation across the product; SmartHR's vocabulary for stopping and undoing
- Kind: WRITE.
- WP 3-7: 「メニュー項目やボタンラベルの訳語に一貫性を持たせる」
- SH-act: キャンセル 「まだ実行していない操作を止めること」; 取り消し 「すでに実行した操作を止めること」; 中断 「実行中の操作を止めること」. Also: 「「つくる」操作を表す文言は、基本的に「追加」とします。」; buttons are 「押す」, not クリック／タップ (「PCでもスマートフォンでも違和感のない言葉として、「押す」が適切だと判断しました。」); 「画面を最新の状態にする操作は、「再読み込み」と表記します。」
- MZ-ed: 「「サインイン」「サインアウト」ではなく「ログイン」「ログアウト」と表記する。」
- Test: script — a glossary check per project (two terms for one action: flag).
- Strength: consistency itself: PRAC(1/4: SmartHR) + L10N(1/2). The specific word choices are each one organisation's house style (SmartHR's are tied to its product); treat them as examples of a decided vocabulary, not as Japanese-wide rules.

#### UW-24 Link and instruction text names the destination or control, not its position or 「こちら」
- Kind: WRITE.
- UB (accessibility table): Do 「続けるには「次へ」を選んでください。」 / Don't 「続けるには下のボタンを選んでください。」; Do 「はじめに戻る」 / Don't 「上に戻る」.
- SP-btn cites its accessibility guideline 2.4.4 (リンクの目的を理解できるようにする) for the label rule.
- OPT (heading only): 「テキストリンクは「こちら」ではなく、移動先を想起しやすい表現をする」
- Test: script — link text equal to こちら／ここ: flag; 上の／下の／右の in instructions: FYI.
- Strength: PRAC(1/4: Ubie) (+OPT). Same direction as WCAG 2.4.4 (not opened this round).

#### UW-25 Required/optional field labels: 「※必須」「※任意」 starting with the full-width ※ (DADS)
- Kind: TYPO.
- DADS-in: 「「※必須」「※任意」の要否ラベルは「※（全角米印）」から書き始め、地の文章とは異なるテキストであることを明示します。」 Placeholder: 「サポートテキストを企図して、プレースホルダーテキストを使用してはなりません。」
- SH-oth (term choice): 「入力が必要な場合は「入力必須」と表記します。」 (「必須入力」 not used).
- Test: script — required marker text.
- Strength: AUTH (DADS) for the marker; SmartHR's term is one house style.


## 4. Error, confirmation, success and empty-state messages

Already in references/rules.md: JW-20 (no double negatives), JW-64 (SmartHR: 事象・原因・対処; if short, 原因 > 対処 > 事象). New below: DADS and Pepabo on telling the user how to fix it, SmartHR's short-form templates, success wording (sources disagree), status labels, and positive wording.

#### UW-26 An error says what is wrong and how to fix it; 「入力に誤りがあります」 alone is not enough
- Kind: WRITE.
- DADS-in エラーテキスト: 「入力内容にエラーがある場合に、具体的なエラー内容および訂正方法を記述します。」 Good 「＊氏名をカタカナで入力してください。」「＊氏（カタカナ）と名（カタカナ）を空白で区切ってください。」 Bad 「＊入力に誤りがあります。」 — caption 「何が誤りなのかが示されておらず、具体的な修正方法が分かりにくい。」; Bad 「＊正しい氏名（カタカナ）を入力してください。」 — caption 「何が正しい入力なのかが示されておらず、具体的な修正方法が分かりにくい。」
- PB ライティング: 「エラーメッセージには、何が受け入れられなかったかに加えて、それを修正する方法の指示を書く」
- SmartHR: JW-64.
- OPT (heading only): 「ネガティブな現状を伝えるだけで終わらない」
- Test: script — error text with no instruction (〜してください／〜できます／〜まで etc.): FYI; exact match on 入力に誤りがあります／エラーが発生しました alone: flag.
- Strength: AUTH (DADS) + PRAC(2/4: SmartHR, Pepabo) (+OPT). Ubie and Spindle: no error-message guidance on the pages read.

#### UW-27 Field error text starts with the full-width asterisk 「＊」 (DADS)
- Kind: TYPO.
- DADS-in: 「エラーテキストの冒頭に「＊（全角アスタリスク）」を付与し、地の文章とは異なるテキストであることを明示します。」
- Strength: AUTH (DADS). One government system's convention; no company guide read uses it.

#### UW-28 Short error surfaces (one-line bars) carry the cause, in one sentence; SmartHR templates
- Kind: WRITE.
- SH-nb: 「NotificationBarで伝える要素は、原因または原因・対処です。」 OK 「対象のカスタムマスター項目は、すでに削除済みです。」 NG 「対象のカスタムマスター項目の削除に失敗しました。対象のカスタムマスター項目は、存在しません。対象のカスタムマスター項目を確認してください。」
- Templates (SH-nb, verbatim): 「{{オブジェクト名}}の{{操作を表す名詞}}に失敗しました。」; 「{{オブジェクト名}}の{{操作を表す名詞}}に失敗しました。時間をおいて、やり直してください。」; 「{{制限値}}を超える{{オブジェクト名}}は{{操作を表す名詞}}できません。」 (例 「5MBを超えるPDFファイルはアップロードできません。」); 「{{オブジェクト名}}が入力されていません。」; 「{{オブジェクト名}}が正しくありません。」; 「予期しないエラーが発生しました。時間をおいて、やり直してください。」
- Test: judgment; templates can be used as fixtures.
- Strength: PRAC(1/4: SmartHR). One company's templates.

#### UW-29 Background jobs: confirm receipt with 「{処理名}を受け付けました」 (SmartHR)
- Kind: WRITE.
- SH-act: 「バックグラウンド処理をリクエストしたときの文言は「{処理名}を受け付けました」とする」 OK 「従業員情報のダウンロードを受け付けました。」 / NG 「従業員情報のダウンロードを予約しました。」 Result summaries (SH-bg): 「◯件の{{操作目的を表す名詞}}に失敗しました。」「◯件の{{操作目的を表す名詞}}に成功しました。」
- Strength: PRAC(1/4: SmartHR).

#### UW-30 Success messages: 「〜に成功しました」 — DISAGREEMENT
- Kind: WRITE.
- MZ 翻訳の例: 「不適切な訳: 更新成功」「不適切な訳: 更新に成功しました。」「適切な訳: 更新を正常に完了しました。」
- SH-bg uses the form Mozilla rejects: 「◯件の{{操作目的を表す名詞}}に成功しました。」
- DADS-nb sample banner titles (image captions, not rules): success 「登録手続きはすべて完了しました」; error 「操作を完了できませんでした」.
- Test: none until a house style is chosen.
- Strength: L10N(1/2) vs PRAC(1/4). Do not pick. Caution: the Mozilla side is one translation example; the reason for rejecting 「更新に成功しました。」 was not found in the section retrieved.

#### UW-31 Status labels: SmartHR's suffix system (○○前／未○○／○○中／○○待ち／○○済み／完了／失敗)
- Kind: WRITE.
- SH-st: 「`○○中`：アクションが進行している途中の状態（例：依頼準備中、入力中、回答中）」; 「`○○待ち`：ユーザーがアクションをした後、システムや他の従業員による後続のアクションを待っている状態（例：提出待ち、承認待ち）」; 「`完了`、`○○完了`：すべてのタスクが終わっている状態。なお、`○○済み`と併用する場合は「完了」を使うこと」; 「`失敗`、`○○失敗`：ユーザーがアクションを取ったが、不備によりシステムエラーが発生し、処理が完了しなかった状態」
- Strength: PRAC(1/4: SmartHR). Status labels are 体言止め nouns, consistent with UW-02.

#### UW-32 Write positively; no hype or alarm (no 「!」「!?」)
- Kind: WRITE.
- UB 言葉の選び方: 「否定的な表現を使わず、肯定文で書きましょう。」 Do 「この中にはない」 / Don't 「この中に該当なし」.
- UB 文法: 「煽り表現はNG。「!」「!?」などの感嘆符は使わない。」 Do 「ありがとうございます。」 / Don't 「ありがとうございます！」
- OPT (heading only): 「二重否定を使わない」 (JW-20 already covers double negatives).
- Test: script — ！ or ! in UI strings: flag under Ubie style (see UW-46 for width).
- Strength: PRAC(1/4: Ubie) (+OPT).

#### Confirmation and empty-state messages
No source read gives wording rules for confirmation-dialog body text or for empty states (gaps.md). The only confirmation guidance found is DADS-md's (UW-22) and SmartHR's title/button match (JW-61).


## 5. Notation (表記)

Already in references/rules.md: JW-25 (formal nouns and auxiliaries in kana, incl. 〜てください, できる), JW-26, JW-28 (及び／御 by scope), JW-27 (常用漢字表), JW-29–31 (okurigana), JW-32–37 (katakana, ー, separators, half-width kana, katakana vs Japanese words), JW-50, JW-57, JW-59 (digits, Latin, spacing). New below: two localization guides and Ubie on kana spellings and long vowels, and the first sources found that **do** put a space between Japanese and Latin text.

#### UW-33 ください, すべて, すでに, いる in kana (further support for JW-25)
- Kind: WRITE.
- WP 3-6: 「「下さい」 は「ください」、「全て」は「すべて」、「既に」は「すでに」に統一する」
- MZ: 「「すべて」はすべてひらがなとする。」 / 「本動詞では文脈に応じて漢字、補助動詞についてはひらがなとする。」 MZ-ed: 「「下さい」ではなく「ください」。」 「「居る」ではなく「いる」。」 「形式名詞はひらがなで表記する。」
- Test: script — 下さい／全て／既に／居る in UI strings: flag.
- Strength: L10N(2/2), on top of JW-25 (KB, JTF). 出来る→できる: in JW-25; this round's Mozilla extraction mentioned it only in paraphrase, so it is not quoted here.

#### UW-34 「とき」 in kana, 「場合」 in kanji; SmartHR treats them as near-interchangeable
- Kind: WRITE.
- MZ: 「条件節で用いる「〜するとき」はひらがな、「〜する場合」は漢字とする。」 / 「「〜するとき」と「〜する場合」は時間的か条件的かである程度使い分ける。」
- SH-oth: 「「場合」と「とき」に大きな違いはありません。」
- Strength: L10N(1/2) for the spelling. Not a disagreement on spelling; SmartHR is on meaning.

#### UW-35 Kanji–kana balance: Ubie aims at about 3:7; Mozilla: no more kanji than needed
- Kind: WRITE (ratio is countable).
- UB: 「漢字とひらがなのバランスを、3:7くらいになるようにしましょう。」 「ひらがなの割合が多いと、幼稚な印象になります。」 「漢字の割合が多いと、難解な印象になります。」
- MZ: 「日本語が堅くならないよう必要以上の漢字は使用しない。」
- Test: script — kanji share of Japanese characters in a string set: FYI against 30%.
- Strength: PRAC(1/4: Ubie) for the number; L10N(1/2) for direction. Ubie is a health-information service; its ratio is its own target.

#### UW-36 Katakana long vowel at the end of English -er/-or/-ar words — DISAGREEMENT on method, agreement on ユーザー／サーバー
- Kind: WRITE.
- UB: 「カタカナの長音符号は省略しません。」 Do 「ユーザー, スキャナー, プリンター」 / Don't 「ユーザ, スキャナ, プリンタ」.
- MZ / MZ-ed: 「-er、-or、-ar、-cy、-ry、-gy、-xy で終わる単語はすべて長音とする。Microsoft のような例外はなし。」 例 「コンピューター、ブラウザー、ユーザー、サーバー、カレンダー、プライバシー、ディレクトリー、プロキシー」; 「-ear、-eer、-re、-ty、-dy で終わる単語は長音としない。」 例 「ボランティア、エンジニア、ソフトウェア、アクセシビリティ、セキュリティ、ボディ」. History: 「従来長音は伸ばしていなかったが、2016 年 8 月にルール変更し、長音を付加することとしました。」
- WP 4-1: 「長音記号「−」は、長音を含めて4文字以下になる単語には付ける」 「5文字以上になる単語には付けない。」 正 「ユーザー、サーバー、コンパイラ、インストーラ、コンテナ」; 4-2 exceptions 「コミュニティー、アーキテクチャー、アップローダー、コンピューター、エディター」. (Quoted as extracted: the mark inside the quote came back as 「−」 (minus-like); the page almost certainly shows ー. Verify on the page.)
- With JW-33/34 (GK principle ー, allows dropping by custom; KB, JTF, SH positions).
- Agreement: ユーザー is written with ー by Ubie, Mozilla and WordPress; サーバー by Mozilla and WordPress (Ubie shows no サーバー example). **No guide read adopts ユーザ** (gap in references/sources.md stays open); Ubie names it as wrong.
- Disagreement: words ending -ty/-dy (Mozilla: no ー, セキュリティ, アクセシビリティ; WordPress 4-2 exception: コミュニティー with ー; JW-34: JTF ー vs SmartHR no ー); words of 5+ characters (WordPress: コンパイラ, インストーラ, no ー; Mozilla: every -er/-or/-ar word takes ー). Mozilla adds ー for -cy/-ry/-gy/-xy (プライバシー, ディレクトリー, プロキシー).
- Test: script per chosen rule; ユーザ／サーバ: flag under every source read.
- Strength: PRAC(1/4: Ubie) + L10N(2/2) for ユーザー; the method is a DISAGREEMENT.

#### UW-37 No 中黒 or space inside a katakana compound (two guides); Microsoft's practice not read
- Kind: WRITE.
- MZ: 「カタカナで構成された語句について、一般的な固有名詞を除き、間に中黒やスペースを挿入しない。」 「ただし、中黒を含めないと表現できない固有名詞、Windows の UI 名などスペースを含むものには使用できる。」
- WP 5: 「カタカナの複合語には、用語集などで特に指定しないかぎり、原則として中点「・」は使用しない。」 Exception: 「カタカナが続いて区切りがわかりにくくなる場合は、中点を使ってもかまわない。」 正 「ライブラリ・リファレンスマニュアル」
- With JW-35 (JTF: 中黒, space or nothing, chosen once per document).
- Strength: L10N(2/2). Narrower than JW-35, not contrary to it.

#### UW-38 Replace katakana and English words with ordinary Japanese where one exists; no ヴ
- Kind: WRITE.
- MZ: 「固有名詞や専門用語あるいは慣例的なものを除き英語表記は使用しない。」 「カタカナ語についても同様に、自然な日本語に可能な限り置き換える。」 Bad 「Plug-in が Install されているかチェックして下さい。」 → Good 「プラグインがインストールされているか確認してください。」
- SH-oth: 「「カタカナ語を用いるときには、まず漢字語での言い換えを検討する」に則って、フリーテキストは「自由記述」と表記します。」
- UB: 「同じ意味でも日常で使う単語を使いましょう。」 Do 「病院」「病気」 / Don't 「医療機関」「疾患」 (plain words over hard kango too). ヴ: Do 「インタビュー, レビュー」 / Don't 「インタヴュー, レヴュー」.
- Strength: PRAC(2/4: SmartHR, Ubie) + L10N(1/2); with JW-37 (KB) and JW-32 (バ行 over ヴ, KB).

#### UW-39 Latin letters and digits half-width; no full-width space; no half-width katakana
- Kind: TYPO.
- MZ: 「英数字や記号を使用する場合は特別な理由のない限り半角を使用する。」 「全角空白および半角カナは使用しない。」 MZ-ed: 「特に理由がなければ、英数字は半角を用いる。」
- WP 1-2: 「すべての英数字、符号、疑問符、感嘆符は半角文字を使う」; 1-3 「数字は、慣習的に使われている場合を除いて、半角の算用数字 (1、2、3) を使う」 (正 「二次元コード」).
- Test: script — full-width A–Z, a–z, 0–9, U+3000 in UI strings: flag.
- Strength: L10N(2/2); with JW-36, JW-50, JW-59 (JTF, SH).

#### UW-40 A space between Japanese and Latin letters (and digits) — DISAGREEMENT
- Kind: TYPO (a typed character, checkable).
- Space: MZ 「英数字と日本語との間には半角空白を入れることを原則とする。」 Example 「Firefox は Mozilla プロジェクト (mozilla.org) による次世代ウェブブラウザです！」; MZ-ed example 「Firefox Quantum は旧バージョンの Firefox より 2 倍高速になりました。」 (space around the digit too).
- Space for letters, none for digits: WP 1-4 「数字を除く半角文字と全角文字の間には、半角文字1字分のスペースを入れる」 (正 「WordPress の使い方」 / 誤 「WordPressの使い方」); 1-9 「半角数字の前後には半角スペースを入れない」 (正 「33件のエラー。」 / 誤 「1 件のコメント。」).
- No space: JW-57 (JTF, SmartHR); OPT (heading only) 「数字と英単語の前後に半角スペースを挿入しない」.
- Note: this is a typed space. References JT-20/JT-21 cover rendering space (和欧間) by CSS; a typed space and `text-autospace` together would double the gap.
- Test: script per house style.
- Strength: L10N(2/2) for a typed space next to Latin letters, split on digits; company guides read: SmartHR no space (JW-57); Ubie and Spindle silent; Pepabo states nothing but its sample message is 「10 文字以内で入力してください」 (space between digit and 文字 — an example, not a rule). This closes the gap "a source for a typed space" — the sources that use one are both translated-OSS guides.


## 6. Punctuation in UI

Already in references/rules.md: JW-38 (、。), JW-39 (no 。 on headings, single-word list items, short figure text; 。 on sentences incl. a one-sentence tooltip; buttons/labels/menus: no source), JW-40, JW-41 (brackets; ［］ for UI element names), JW-42 (full-width brackets ？！：), JW-43 (！？ sparingly), JW-44 (… or ……; SmartHR one …), JW-45 (〜 for ranges), JW-46 (、 vs ・), JW-47 (colon). New below: sources on 。 for short UI text (they disagree), the 〜 code point, and the half-width camp for ！？ and parentheses.

#### UW-41 句点 on a single sentence in UI text — DISAGREEMENT; on headings — agreement (none)
- Kind: TYPO (checkable per element).
- No 。 on a lone sentence: UB 「1文で終わっているテキストは区切りが明確なため、基本的に句点はつけません。」 「※例外あり」 「2文以上になる場合は、区切りを分かりやすくするために各文に句点をつけます。」
- No 。 on one short sentence unless it has 、: SP-lab 「読点、句点は基本的に必要ありませんが、文中に読点が入る場合は句点を入れましょう。」 (scope: 1〜2行程度の一つの文); body text with several sentences: 「読点、句点は必要となります。」
- 。 on a lone sentence: SH-app Tooltip 「1文のみの場合でも、文章には句点をつけます。」 「単語／ラベルのみの場合は句点を省略します。」; MZ テキスト 「文になるところでは句点を使用する。」
- Follow the source string: WP 3-8 「句読点の有無は原文に合わせる。」
- Headings: SP-lab 見出し 「読点、句点は必要ありません。」 (with JW-39: KB, JTF).
- Checkbox/radio labels: MZ, no 。 unless several sentences (UW-04).
- Buttons: still no source that states it (gap stays open); every button example in SH, UB, SP, DADS has no 。.
- OPT (headings only): 「句点（。）を省略する場合」「箇条書きの場合の句点（。）の使い分け」 — rule bodies not published.
- Test: script per house style; headings ending 。: flag under every source.
- Strength: one sentence: PRAC split 2/4 (Ubie, Spindle: none) vs 1/4 (SmartHR: 。) + L10N(1/2: Mozilla 。). Headings: PRAC(1/4: Spindle) + JW-39.

#### UW-42 ！ and ？ — width DISAGREEMENT; Ubie avoids both
- Kind: TYPO (code point).
- Full-width: MZ 「日本語文中での句読点および疑問符や感嘆符については全角記号を使用する。」; MZ-ed 「感嘆符と疑問は全角「！」「？」。ただし、連続する場合は半角「!?」にする。」 With JW-42/43 (KB, JTF).
- Half-width with a space before: WP 1-2 正 「準備をしましょう !」 / 誤 「準備をしましょう! (記号が半角だが、その前に半角スペースがない)」 / 誤 「準備をしましょう！ (記号が全角)」.
- Avoid: UB 「感嘆符や疑問符、伸ばし棒は使いません。」 — yet Ubie's own Do example is 「体調はいかがですか？」. The page contradicts itself on ？ (or the rule means a different use); record as unclear.
- Test: script — U+FF01/U+FF1F vs U+0021/U+003F per house style.
- Strength: L10N split 1/1; company guides: Ubie avoid (1/4), others silent this round; JW-42 has KB/JTF full-width.

#### UW-43 Parentheses — width DISAGREEMENT
- Kind: TYPO.
- Half-width with spaces outside: WP 1-5 「丸括弧 ( ) は半角にし、前後には、半角文字1文字分のスペースを入れる」; 1-6 「丸括弧「(」の次、「)」の前にスペースを入れない」 (正 「(例: WordPress)」). MZ: 「例えば “(” の前は半角空白だが後は詰める、“)” や “:” の前は詰めるが後は半角空白」.
- Full-width: JW-42 (KB, JTF, SmartHR); DADS-in examples 「＊氏（カタカナ）と名（カタカナ）…」; UB table 「（） | 丸括弧 | 直前の内容の説明、補足説明などに使う。」
- Weekday brackets: UB 「曜日の表記をする場合は、日付の後にスペースを空けずに半角()で表示しましょう。」 (so Ubie uses half-width () for weekdays and lists full-width （） in its symbol table).
- Strength: L10N(2/2) half-width; government and SmartHR full-width. Do not pick.

#### UW-44 Names of UI elements inside running text — DISAGREEMENT on the bracket
- Kind: WRITE.
- 「」: WP 2-2 「メニュー項目やボタンラベルは「」で囲む」; UB example 「続けるには「次へ」を選んでください。」
- Half-width [ ] with spaces: MZ-ed 「Microsoft の表記に準拠。半角大括弧を用いて前後に半角スペースを挿入する。」 例 「さらに、[検索バーの管理] をクリックすれば、…」; 「メニューの三点リーダーは省略する。」
- Double quotes: MZ 「メニュー項目やボタンラベルなどを表すときは二重引用符を使用する。」 (Mozilla's two pages differ from each other.)
- Full-width ［］: SH-act example 「［終了した申請を表示］を有効にします。」; with JW-41 (KB/JTF ［］).
- Strength: no majority. A house style decides.

#### UW-45 Ellipsis: one character; glyph unverified for Mozilla
- Kind: TYPO.
- OPT (heading only): 「三点リーダー（…）は1つでOK」. UB lists … in its symbol table (「… | 点線（リーダー） | 文の途中の省略を示す。」) but does not say how many.
- MZ-ed (wiki) as extracted: 「三点リーダーは半角ドット 3 つ「...」を採用する。」; the 2021 mirror as extracted: 「三点リーダーは半角ドット 3 つ「…」を採用する。」 The words say three half-width dots (U+002E ×3); the two extractions differ on the glyph. Verify on the page.
- With JW-44 (KB … or ……; SmartHR one …).
- Strength: L10N(1/2: Mozilla, glyph unverified) (+OPT). No company guide read states a count; SmartHR's one … is in JW-44.

#### UW-46 Ranges: 〜 is U+301C WAVE DASH, not U+FF5E (Mozilla); Mozilla also allows the en dash
- Kind: TYPO (code point).
- MZ-ed21: 「「–」(U+2013 二分ダッシュ) または「〜」(U+301C 波ダッシュ) は数字の範囲等を表すのに用いる。」 「「―」(U+2015 水平線) と「～」 (U+FF5E 全角チルダ) は用いない。」 「Windows のキーボードから「～」を入力すると、通常は U+FF5E 全角チルダが入力されてしまうので注意すること。」 The current wiki fetch returned the first sentence identically.
- SH-cnt: 「期間を表す場合には、`〜`（波線）を使います。」 OK 「2022/01/01〜2022/03/01」 / NG 「2022/01/01 - 2022/03/01、2022/01/01−2022/03/01」 (SmartHR names no code point). UB: 「〜 | 波記号 | 範囲を示す。」
- With JW-45 (〜 for ranges; YN: から／まで for foreign readers).
- Test: script — U+FF5E in ranges: flag under Mozilla's rule; hyphen/minus between dates: flag under SmartHR's.
- Strength: code point: L10N(1/2) only — the one source found that names it (closes the 〜 code-point gap in references/sources.md, thinly). 〜 for ranges: PRAC(2/4: SmartHR, Ubie).

#### UW-47 Colon: half-width, no space before, space after (two localization guides); Ubie lists 「例：」
- Kind: TYPO.
- WP 1-4: 「コロン記号 (:) の前には入れず、後には半角・全角を問わず入れる。」 (正 「ユーザー ID: username」 / 誤 「ユーザー ID : username」)
- MZ-ed: 「コロン「:」やセミコロン「;」は半角にする (必要なら直後にスペースを挿入する)。」
- UB table: 「: | コロン | 「例：□□」、「機能：△△」のようにして、意味や具体的な内容を示すと気に使う。」 (as extracted; the table's own examples show full-width ：).
- With JW-47 (JTF, SH 「例：」, KB).
- Strength: L10N(2/2) half-width; Ubie and SmartHR examples full-width. DISAGREEMENT on width.

#### UW-48 Slash: half-width for fractions, full-width between listed words (Ubie)
- Kind: TYPO.
- UB: 「/ | スラッシュ | 半角スラッシュは分数を示す。並記した言葉の区切りには全角スラッシュを使う。」 MZ-ed21 (paraphrase in the extraction, not quoted): half-width slash.
- Strength: PRAC(1/4). Single voice.

#### UW-49 Use emphasis brackets 【】「」『』 consistently
- Kind: WRITE.
- UB: 「【】「」『』など、強調表現の使い方に一貫性を持たせましょう。」 OPT (heading only): 「括弧「 」、［ ］、【 】の使い分け」.
- Strength: PRAC(1/4) (+OPT); with JW-41.


## 7. Numbers, dates, time, currency, units, counters

Already in references/rules.md: JW-49 (Arabic numerals; kanji for idioms), JW-50, JW-51 (grouping by 3; 万・億), JW-52 (か月), JW-53 (date format: DISAGREEMENT), JW-54 (12h vs 24h), JW-55 (number–unit space), JW-56 (以上・未満). New below: more voices on each split.

#### UW-50 Date format — DISAGREEMENT (slashes vs 年月日; spaces)
- Kind: TYPO.
- Slashes in UI: SH-cnt 日本語 (ja) 「`2025/01/01`*」 with 「*：ヘルプページなど、説明上の読みやすさや識別しやすさから「2025/01/01」がそぐわない場合には「2025年1月1日」のような表記も可能です。」 System data: 「システムが処理するデータとしての日付（API連携、CSVファイルの出力など）は、日付の表記を`YYYY/MM/DD`にします。」 NG 「2022/1/1」.
- 年月日: UB 「年月日は漢字表記を使いましょう。」 「例）2024年10月1日(火) 10:00」. WP 7 「2014年1月1日 (水)」. MZ-ed 「西暦表記。文書内では YYYY 年 MM 月 DD 日」 (with spaces).
- Weekday: UB half-width () with no space before; WP 「2014年1月1日 (水)」 with a space before.
- Test: script per house style; mixed formats within one product: flag.
- Strength: PRAC 1/4 slashes (SmartHR UI) vs 1/4 年月日 (Ubie); L10N(2/2) 年月日, differing on spaces. Do not pick.

#### UW-51 Time — DISAGREEMENT (24-hour vs AM/PM)
- Kind: TYPO.
- 24-hour: SH-cnt 「表示言語の選択にかかわらず、時刻は`hh:mm:ss`で表記します*。状況に応じて、`ss`は省略しても構いません。」 「hh：24時間制の2桁の時」; NG 「PM11:00:05」. UB 「時間の表記は半角スペースをあけてHH:MM表記しましょう。」 (HH:MM; Ubie does not say 24-hour; its example is 「2024年10月1日(火) 10:00」).
- AM/PM: WP 7 「2014年1月1日2:00 AM」 (a format WordPress's PHP date string produces).
- With JW-54 (YN prefers 午前/午後).
- Strength: PRAC(1/4: SmartHR) 24-hour stated; Ubie HH:MM (24-hour not stated); L10N(1/2) AM/PM; YN 午前/午後.

#### UW-52 Group digits by three with a half-width comma
- Kind: TYPO.
- SH-cnt: 「読みやすさの観点から、数値を表記するときには3桁ごとに「,」を入れます。」 「また、カンマは数字に合わせて半角を用います。」 例 「1,000,000円、10,000人」.
- MZ-ed: 「半角英数字。3 ケタごとに区切り文字を挿入する。(例: 1,024)」
- OPT (heading only): 「数値は3桁ごとに桁区切り記号のカンマ（ , ）を使用する」
- Not counted: Pepabo's tech-blog post on its writing guideline quotes the rule 「3桁以上の数値にはカンマを入れる」 from its newsletter checklist (blog, not the guide itself).
- Strength: PRAC(1/4: SmartHR) + L10N(1/2) (+OPT); with JW-51.

#### UW-53 Space between a number and a unit — DISAGREEMENT
- Kind: TYPO.
- Space: MZ-ed 「「バイト」はカタカナ。それ以外の接頭辞付き単位は大文字英語表記。数字と単位の間に半角スペースを挿入する。(例: 5 MB、100 KB)」
- No space: SH-nb example 「5MBを超えるPDFファイルはアップロードできません。」; WP 1-9 「半角数字の前後には半角スペースを入れない」 (正 「33件のエラー。」, 「%d件の投稿、%d個の文字列」).
- With JW-55 (SmartHR no space; JTF generally none).
- Strength: L10N split 1/1; SmartHR no space.

#### UW-54 Counters and placeholders: no space between a placeholder digit and its counter (WP); 「件」 for records (SmartHR)
- Kind: TYPO / WRITE.
- WP 1-9: 誤 「%d 件の投稿、%d 個の文字列 (半角数字で置き換えられることになるプレースホルダー後のスペースは不要)」.
- SH-cnt: 「従業員に紐づくアカウントや、書類・依頼・申請などを数えるときの表記は「件」とします。」 OK 「22件の社員番号アカウントを表示中」 / NG 「22名の社員番号アカウントを表示中」.
- MZ-ed: 「「2 か月」「5 か所」「10 か国語」。」 (か in kana; adds L10N support to JW-52, with Mozilla's space before the counter).
- Strength: each L10N(1/2) or PRAC(1/4).

#### UW-55 Arabic numerals even for 「1つ」 (Ubie) — conflicts with the 公用文 form 「一つ」
- Kind: WRITE.
- UB: 「横書きでは算用数字を使う。漢数字を使いません。」 Do 「当てはまるものを1つ選んでください。」 / Don't 「当てはまるものを一つ選んでください。」
- WP 1-3: Arabic numerals 「慣習的に使われている場合を除いて」 (正 「二次元コード」).
- JW-49 records the 一つ vs 1つ split (KB vs others); Ubie adds a company voice for 1つ.
- Strength: PRAC(1/4) + L10N(1/2).

#### Currency (円 vs ¥)
No source read states a rule. The only currency string found is SmartHR's example 「1,000,000円」 (SH-cnt). See gaps.md.


## 8. Plain and inclusive wording (thin; references/rules.md JW-65–69 carry the authority sources)

#### UW-56 Everyday words over institutional ones (Ubie)
- UB: 「同じ意味でも日常で使う単語を使いましょう。」 Do 「病院」「病気」「近く, 近所」 / Don't 「医療機関」「疾患」「近隣」. 「読みづらい漢字の病名や専門用語には、できるだけ読み仮名をつけましょう。」
- Strength: PRAC(1/4). With JW-23, JW-24 (KB), JW-68 (readings).

#### UW-57 Avoid words with negative or exclusionary overtones (SmartHR term choices)
- SH-oth: 「英単語の「dummy」はネガティブな意味を持つため、「ダミー」は使用しません。」 (→ 「サンプル」); 「多言語対応に関する記載において、「その人が十分に理解できる言語」は「得意な言語」と表記します。」 (heading: 「母国語」「母語」の使用は控える).
- Strength: PRAC(1/4). With JW-69 (KB: avoid biased wording, but no mechanical bans).

## 9. Korean → Japanese translation faults

No source found. Searched for published guidance on faults specific to Korean-to-Japanese product text (query in gaps.md); results were general localization articles by translation vendors, none naming a Korean-specific fault with a source. The translation-into-Japanese guides that were read (Mozilla, WordPress) are written for English sources; their rules on あなた (UW-12), "Sorry" (UW-11), passives (UW-13) and English words left in the text (UW-38) are the nearest evidence, and they are about English. Nothing here should be presented as a Korean-specific rule.

## Tally (this file)

57 candidates, UW-01 … UW-57. Each is counted once, by its strongest tier; a recorded disagreement is counted as a disagreement whatever the tiers on each side.

| Tier | Count | IDs |
|---|---:|---|
| STD | 0 | — |
| AUTH (DADS) | 7 | UW-19, 20, 21, 22, 25, 26, 27 |
| PRAC, 2 or more of the 4 company guides | 4 | UW-09 (2/4), 15 (3/4), 38 (2/4), 46 (2/4 for 〜 in ranges; the code point is L10N 1/2) |
| PRAC, 1 of 4 (some also L10N) | 20 | UW-02, 06, 07, 08, 17, 18, 23, 24, 28, 29, 31, 32, 35, 48, 49, 52, 54, 55, 56, 57 |
| L10N only (translated OSS guides) | 13 | UW-01, 03, 04, 05, 11, 12, 13, 14, 33, 34, 37, 39, 45 |
| Recorded DISAGREEMENT | 12 | UW-16, 30, 36, 40, 41, 42, 43, 44, 47, 50, 51, 53 |
| No rule (what examples show) | 1 | UW-10 |

Company guides read for writing, M = 4: SmartHR (many pages), Ubie Vitals (2 pages), Ameba Spindle (4 pages, 2 with rules), GMO Pepabo Inhouse (1 component page). How often each addressed a topic is in each Strength line.
