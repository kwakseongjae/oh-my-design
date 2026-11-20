# /kana — writing rules from company guides, translation guides and DADS components (KW)

**Development draft, 2026-11-21. No native Japanese reader has reviewed this file.** It turns the 57 research candidates in [`../writing/rules.md`](../writing/rules.md) (UW-01 … UW-57) into rules for the skill, at the strength the second reader's verdicts in [`../writing/verdicts.md`](../writing/verdicts.md) allow. Region: Japan for every rule.

## How this file was made

- **What gets in.** A candidate becomes a rule only if its verdict is "supported", or "weaker than stated" and rewritten to what the verdict says the source supports. UW-45 (not supported) and UW-10 (states no rule) are left out. The twelve candidates recorded as a disagreement are not rules: they are listed under [The project's DESIGN.md decides](#the-projects-designmd-decides), each side with its source, and the checker tests none of them.
- **Ids.** KW-nn carries the number of the candidate it came from (KW-09 is UW-09), so the numbering has gaps. Every candidate's fate is in [`../writing/coverage.md`](../writing/coverage.md).
- **Relation to JW.** [`rules.md`](./rules.md) holds JW-01 … JW-70 (keys KB: the Agency for Cultural Affairs' guide for government writing; KG: its keigo guideline; GK: the cabinet notice on loanword spelling; YN: the plain-Japanese guideline for foreign residents; JTF; SmartHR). A KW rule that agrees with a JW rule says so and adds its sources; it does not restate the JW rule.
- **Japanese text.** Every Japanese string below is copied from a quote in `writing/rules.md` or `verdicts.md`, with its source key. Where the two files differ, the verdict's text is used (UW-19). No example was composed. A rule whose sources give no OK/NG pair says "no sourced example". A test (`test/unit/scripts/kana-copy-check.test.mjs`) fails if a fixture string or a corner-bracketed string in this file is not inside one quote. Japanese outside brackets (single words in the rule text) is held only to being a substring of some quote, which a short word can pass by coincidence; those words were read by hand.
- **Quotes came through an extraction tool**, not from page source; widths and code points are as `verdicts.md` reports them. A native reader should check them on the pages before the skill ships.

## Strength, in words

| Wording | Meaning |
|---|---|
| government design system | The Digital Agency design system (DADS) component pages. Each states its own scope. |
| N of 4 company guides | Stated in N of the four company design-system writing guides read: SmartHR, Ubie Vitals, Ameba Spindle, GMO Pepabo Inhouse (Pepabo: one component page). A guide that is silent is not counted against a rule. |
| one company's guide | One of those four, named. |
| translation guides only | Mozilla Japan (L10n Guideline, Editorial Guideline) and the WordPress Japanese translation style guide: Japanese translated from English, for open-source software. |
| OPTiM heading only, not counted | OPTiM's blog post lists its rules as headings with no body. A pointer, never counted. |

No rule here is required by any source. Words such as 原則, なるべく and できる限り in a quote stay in the rule.

## Source keys

| Key | Source | URL |
|---|---|---|
| SH-app | SmartHR, other UI text | https://smarthr.design/products/contents/ui-text/app-writing/ |
| SH-ws | SmartHR, basic writing style | https://smarthr.design/products/contents/writing-style/ |
| SH-act | SmartHR, words for operations | https://smarthr.design/products/contents/idiomatic-usage/action/ |
| SH-nb | SmartHR, NotificationBar patterns | https://smarthr.design/products/contents/error-messages/notificationbar/ |
| SH-bg | SmartHR, background-process patterns | https://smarthr.design/products/contents/error-messages/background-process/ |
| SH-st | SmartHR, status labels | https://smarthr.design/products/contents/ui-text/statuslabel/ |
| SH-oth | SmartHR, other similar terms | https://smarthr.design/products/contents/idiomatic-usage/other/ |
| SH-cnt | SmartHR, numbers and counters | https://smarthr.design/products/contents/idiomatic-usage/count/ |
| UB | Ubie Vitals, UX writing guideline | https://vitals.ubie.life/ux-writing/ |
| UB-btn | Ubie Vitals, Button | https://vitals.ubie.life/components/button |
| SP-lab | Ameba Spindle, UI labeling | https://spindle.ameba.design/principles/contents/ui-labeling/ |
| SP-btn | Ameba Spindle, Button | https://spindle.ameba.design/components/button/ |
| PB | GMO Pepabo Inhouse, Validation Message | https://design.pepabo.com/inhouse/components/validation-message/ |
| DADS-btn | DADS, Button (usage) | https://design.digital.go.jp/dads/components/button/usage/ |
| DADS-in | DADS, Input text (usage) | https://design.digital.go.jp/dads/components/input-text/usage/ |
| DADS-md | DADS, Modal dialog (overview) | https://design.digital.go.jp/dads/components/modal-dialog/ |
| DADS-nb | DADS, Notification banner (usage) | https://design.digital.go.jp/dads/components/notification-banner/usage/ |
| MZ | Mozilla Japan, L10n Guideline | https://mozilla-l10n.github.io/styleguides/ja/l10nguideline.html |
| MZ-ed | Mozilla Japan, Editorial Guideline (wiki) | https://github.com/mozilla-japan/translation/wiki/Editorial-Guideline |
| MZ-ed21 | Mozilla, Editorial Guideline (2021 copy) | https://mozilla-l10n.github.io/styleguides/ja/editorialguideline.html |
| WP | WordPress Japanese team, translation style guide | https://ja.wordpress.org/team/handbook/translation/translation-style-guide/ |
| OPT | OPTiM TECH BLOG, UX writing rules (headings only) | https://tech-blog.optim.co.jp/entry/2025/01/16/100000 |

## The checker

`scripts/lang/kana-copy-check.mjs` (OmD repository; it moves into the skill with `kana-check.mjs`) tests the rules below whose "Checker" line names a check. It reads text, Markdown, HTML, JSX/TSX, Vue, Svelte, Astro and JS/TS string literals; no network, no model, no dependencies.

- **WARN**: a government design system or two of the four company guides state the rule, and the string is the form the source itself gives as wrong (KW-09, and KW-26's first check).
- **FYI**: everything else. A hit is a prompt to read the string in its place.
- There is no BLOCK.
- Role rules (button, heading, dialog) read the element only. A string whose role can't be traced gets no role rule; nor does a label passed as an expression (`label={t('…')}`), and a dialog split across components is not grouped.
- Chinese text shares the kanji range. Only KW-35 skips strings without kana; the other rules read any string with kanji or CJK punctuation, so a Chinese string can trip a code-point or word rule.
- `--json` prints `{files, ja, findings, notes, summary, exit}`. Each finding has `rule`, `severity`, `file`, `line`, `match` (the matched text), `message` and `source` (keys and standing). `--self-test` runs `scripts/lang/fixtures/kana-copy/`.

## Rules

### Register

#### KW-01 (UW-01) · Running text and descriptions are written in the polite style (敬体).
- Kind: WRITE.
- Strength: translation guides only (Mozilla; the wiki says 原則). OPTiM heading only, not counted. No company guide read states it; SmartHR, Pepabo and DADS write their examples this way without a rule. JW-02 carries the government and JTF sources.
- Quote: MZ 「文体は敬体 (ですます調) で統一する。」; MZ-ed 「語尾は原則として「ですます調」を採用する。」
- Example: no sourced example.
- Checker: judgment only (one style per text is JW-01's, and the checker can't tell a quotation or a list item).

#### KW-02 (UW-02) · Screen titles, window titles and headings are nouns.
- Kind: WRITE.
- Strength: one company's guide (SmartHR) and both translation guides (Mozilla, as a principle; WordPress also allows the plain 「する」 form). OPTiM heading only, not counted.
- Quote: SH-app 「画面タイトルや項目名は、名詞で表記します。」; MZ 「タイトル名は体言止めを原則とする。全体のバランスに注意する。」; WP 3-8 「見出しは体言止め、または「する」(常体) とする」
- Example: no sourced example.
- Checker: **KW-02, FYI**: a heading (h1–h6, `<title>`, a Markdown heading) that ends in です or ます, with or without 。.

#### KW-03 (UW-03) · Menu items are short nouns, except where the OS has its own idiom.
- Kind: WRITE.
- Strength: translation guides only (Mozilla). No company guide read covers menu items.
- Quote: MZ 「OS の慣用表現に従う他は簡潔な体言を基本とする」; 「体言止めを原則とし、コロンをつけたり設定項目の説明と続けて文にしたりはしない。」
- Example: no sourced example.
- Checker: judgment only (the checker can't tell a menu item).

#### KW-04 (UW-04) · Checkbox labels end in a verb as a principle; radio labels may end in anything; neither takes 。 unless the label has to be several sentences.
- Kind: WRITE.
- Strength: translation guides only (Mozilla).
- Quote: MZ 「末尾では体言ではなく動詞を原則とする。コロンと入力欄が続くはこの限りではない。」; 「やむを得ずラベルが複数の文になる場合を除き、句点は使用しない。」; radio: 「…末尾の品詞は問わない。 止む終えずラベルが複数の文になる場合を除き、句点は使用しない。」 (the spelling 止む終えず is the page's own).
- Example: no sourced example.
- Checker: judgment only (the checker can't tell a checkbox label).

#### KW-05 (UW-05) · In translated software, list items take the plain 「する」 form.
- Kind: WRITE.
- Strength: translation guides only (WordPress). Compare JW-06 (lists may use 常体; one style per list).
- Quote: WP 3-8 「箇条書きの項目では「する」(常体) とする」
- Example: no sourced example.
- Checker: judgment only.

#### KW-06 (UW-06) · Neither stiff nor over-friendly: in ordinary content, ordinary polite forms rather than extra-formal ones.
- Kind: WRITE.
- Strength: one company's guide (Ubie) and one translation guide (Mozilla, for content that is not formal). DADS's own sample notice body uses 「…期限までにご対応をお願いいたします。」: an authority's notice, given as an example, not a rule.
- Quote: UB 「堅苦しい表現は避けるが、フレンドリーすぎないように。」; MZ-ed 「あまり丁寧すぎると浮いてしまうので、内容が改まったものでなければ、一般的な丁寧語で記述する。特にブログは多少カジュアルでも良い。」
- Example: UB Don't 「お加減はいかがですか？ ※ちょっと堅い」 → Do 「体調はいかがですか？」. MZ-ed NG 「皆様」「公開いたしました」「よろしくお願いいたします」 → OK 「皆さん」「公開します」「よろしくお願いします」.
- Checker: **KW-06, FYI**: 皆様, いたしました, よろしくお願いいたします (Mozilla's NG list; いたしました also matches other verbs in that form).

### Keigo

#### KW-07 (UW-07, rewritten to the verdict) · Ubie uses no keigo on buttons, headings and other UI components, in principle.
- Kind: WRITE.
- Strength: one company's guide (Ubie). The source hedges twice (基本的に, 原則として), under a heading about cases where keigo is deliberately not used. SmartHR's button rule (JW-60) uses plain verbs without stating a keigo rule.
- Quote: UB 「基本的にボタン、見出しなどのUIコンポーネントでは原則として敬語を使いません。ユーザーの操作対象のラベルの発言者をユーザーに寄せると、読解がスムーズになります。」
- Example: no sourced example.
- Checker: **KW-07, FYI**: いただ, いたし or 申し上げ in a button or heading (forms taken from the quoted NG strings under KW-06 and KW-09).

#### KW-08 (UW-08) · Ubie uses keigo where the user is made to do something they would rather not.
- Kind: WRITE.
- Strength: one company's guide (Ubie). No other source read draws this line.
- Quote: UB 「ユーザーが本来やりたくないのに、やらざるをえない操作が発生するときは敬語を使います。」 Its cases: 「新規ユーザー登録」「ヘルプセンター、問い合わせ」「アンケートなど」.
- Example: no sourced example.
- Checker: judgment only.

#### KW-09 (UW-09) · Don't stack keigo; one polite request form is enough.
- Kind: WRITE.
- Strength: 2 of 4 company guides (SmartHR, Ubie). OPTiM heading only, not counted. Same direction as JW-07 and JW-08.
- Quote: SH-ws 「敬語表現を多用して、情報が伝わりづらくならないように配慮しましょう。」
- Example: UB Don't 「お手数をおかけしますが、こちらからお問い合わせいただけますよう、お願い申し上げます。 ※過剰」 → Do 「お手数ですが、こちらからお問い合わせください。」. SH-ws NG 「◯◯をご確認いただけますようお願いいたします。」 → OK 「◯◯を確認してください。」; NG 「◯◯させていただきました。」 → OK 「◯◯しました。」.
- Checker: **KW-09, WARN**: いただけますよう, お願い申し上げます, させていただきました. Only SmartHR's past form is matched: the KG keigo guideline says the humble-permission form can fit where the writer acts with the reader's permission and benefits from it (JW-09).

#### KW-11 (UW-11) · When translating an English error that opens with "Sorry", drop the apology rather than write すみません.
- Kind: WRITE.
- Strength: translation guides only (WordPress). No company guide and no government page read says when, or whether, to apologise in an error (writing/gaps.md).
- Quote: WP 3-4 「”Sorry, …” で始まるエラーメッセージは「すみません」とは訳さず、その部分を削除する」
- Example: no sourced example.
- Checker: **KW-11, FYI**: a string that opens with すみません.

#### KW-12 (UW-12) · Don't add あなた or あなたの where English has "you" or "your" and it reads unnaturally.
- Kind: WRITE.
- Strength: translation guides only (WordPress).
- Quote: WP 3-5 「英語で “You” や “Your” とあっても、日本語にしたときに不自然な場合は「あなた」「あなたの」を入れない」; 「できる限り「自分の」「お使いの」「独自の」などの、より自然な言い回しを使うか、省略する。」
- Example: no sourced pair; WordPress names 「自分の」「お使いの」「独自の」 as alternatives.
- Checker: **KW-12, FYI**: あなた.

#### KW-13 (UW-13) · Prefer the active past to the passive where possible.
- Kind: WRITE.
- Strength: translation guides only (WordPress, なるべく). Same direction as JW-19.
- Quote: WP 3-1 「自然な日本語になるよう、受動態はなるべく避ける」
- Example: WP 3-1 「～されました。」 → 「～しました。」 (the tilde is U+FF5E as extracted).
- Checker: **KW-13, FYI**: されました. It also matches the honorific use; read it in place.

#### KW-14 (UW-14) · Write the short potential form rather than 「することができる」.
- Kind: WRITE.
- Strength: one company's guide (SmartHR, 極力) and one translation guide (Mozilla, なるべく). Adds to JW-14, whose disagreement stands: the plain-Japanese guideline for foreign residents gives the long form for its readers.
- Quote: MZ 「「〜することができます」はなるべく「〜できます」と簡潔にする。」
- Example: SH-ws NG 「◯◯することができます。」 → OK 「◯◯できます。」.
- Checker: **KW-14, FYI**: することができ. Don't report it on text written for readers of plain Japanese (JW-14, JW-65).

### Buttons, labels and links

#### KW-15 (UW-15, rewritten to the verdict) · A button label lets the user predict what will happen; Ubie adds that 「OK」 alone does not.
- Kind: WRITE.
- Strength: predicting the action: 2 of 4 company guides (Ubie, Spindle). The 「OK」 half: one company's guide (Ubie). DADS-btn names 「OK」 as an ordinary primary label and gives no wording rule. SmartHR's dialog rule (JW-61) is about matching a dialog's title and its button.
- Quote: UB-btn 「ボタンを押下した場合に、何が起こるのかをユーザーが推測できるべきです。」; SP-btn 「ボタン、リンクボタンのラベルは、操作やリンク先の内容が予測できるように明確にしましょう。…」
- Example: UB-btn Bad 「OK」 → Good 「この内容で更新する」.
- Checker: **KW-15, FYI**: a button whose whole text is OK.

#### KW-17 (UW-17) · When a button label names its object, join it with を, not の.
- Kind: WRITE.
- Strength: one company's guide (SmartHR) and one translation guide (WordPress, for "View XX"). OPTiM heading only, not counted; it gives の for titles, as JW-61 does.
- Quote: SH-app 「動詞の終止形の前に、オブジェクトを明記する場合には、助詞は「を」が適切です。」; WP 3-2 「“View XX” という表現は基本的に「～を表示 (する)」に統一する」
- Example: SH-app NG 「権限の追加、申請の取り消し」 → OK 「権限を追加、申請を取り消す」.
- Checker: **KW-17, FYI**: on a button, の before 追加, 取り消し or 表示 (the quoted nouns). Headings are not checked.

#### KW-18 (UW-18) · Keep button labels short: Ubie aims at no wrap on mobile, about 15 characters; Mozilla matches word counts across a set where it can.
- Kind: TYPO (length is countable).
- Strength: the number: one company's guide (Ubie, できる限り). Matching length: translation guides only (Mozilla).
- Quote: UB-btn 「できる限りモバイルで改行しない文字数におさめましょう（15文字程度）」; MZ 「可能であれば語数を揃える。」
- Example: no sourced example.
- Checker: **KW-18, FYI**: Japanese button text longer than 15 characters.

#### KW-19 (UW-19, rewritten to the verdict) · DADS, for desktop and as a principle: forward actions on the right, cancel-type actions on the left; at most one tertiary (cancel-type) button per screen, as a principle.
- Kind: TYPO (layout).
- Strength: government design system (DADS).
- Quote: DADS-btn 「…デスクトップデバイスにおけるボタン配置を、「OK」または「完了」「次へ」などのボタンを右寄せ、「キャンセル」または「中止」「戻る」などのボタンを左寄せで配置することを原則としています。」; 「ターシャリー（重要度：低）のボタンは、フローやアクションの実行を中断・中止するような、キャンセル行為のために使用します。」 「ひとつの画面につき、原則1つまで使用できます。」
- Mobile, in DADS's words: with three kinds, 「モバイルデバイスでは、セカンダリーからプライマリーにかけて縦積みで配置します。」 「ただし、いずれにおいてもターシャリーのみ、デスクトップデバイスとは順序が変わって一番下となります。」; with two, 「この場合では上にプライマリーのボタン、下にセカンダリーのボタンを配置します。」
- No source read says which labels pair with which (writing/gaps.md).
- Example: no sourced example.
- Checker: judgment only (screen order depends on CSS the checker can't apply).

#### KW-20 (UW-20) · Don't put a close button on a modal dialog that has action buttons.
- Kind: TYPO (structure).
- Strength: government design system (DADS-md). The DADS-nb line is about notification banners, not dialogs.
- Quote: DADS-md 「「OK」「はい」「いいえ」「キャンセル」などのアクションボタンを伴うモーダルダイアログに閉じるボタンがあると、…判断できなくなります。」 「閉じるボタンはアクションボタンがないときだけ使用できます。」
- Example: no sourced example.
- Checker: **KW-20, FYI**: inside one `<dialog>`, `role="dialog"` or Dialog/Modal component, a button labelled 閉じる (text or `aria-label`) beside one labelled OK, はい, いいえ or キャンセル.

#### KW-21 (UW-21) · Instead of silently disabling a submit button, say what is still to do; if it must be disabled, say why right next to it.
- Kind: WRITE + TYPO.
- Strength: government design system (DADS-btn).
- Quote: DADS-btn 「ユーザーの作業が終わるまでボタンを無効にするのではなく、何をすべきかを提示することで操作や入力を促してください。」 「どうしてもボタンを無効化しなければならない場合は、無効ボタンのすぐ近くに、なぜ無効なのかあるいはどうすれば有効化できるのかを具体的に表示しましょう。」
- Example: no sourced example (DADS's examples are screenshots).
- Checker: judgment only (nearness on screen can't be read from source).

#### KW-22 (UW-22) · A destructive action gets a confirmation dialog, but the dialog is not a safeguard by itself.
- Kind: WRITE.
- Strength: government design system (DADS-md). No source read gives wording for the destructive button itself.
- Quote: DADS-md 「削除などの破壊的な操作では、確認ダイアログを表示しても、利用者が内容を確認せずに操作を進めると安全対策として機能しません。」 「そもそも間違って削除しないようにする設計や、削除の取り消しや復元ができる設計を検討してください。」
- Example: no sourced example. Spindle's Danger Button examples (SP-btn 「例: 投稿削除、退会、等。」) name the act; they carry no wording rule.
- Checker: judgment only.

#### KW-23 (UW-23) · One word per operation across the product.
- Kind: WRITE.
- Strength: consistency: one company's guide (SmartHR) and one translation guide (WordPress). The particular words are each house's own: SmartHR's tied to its product, Mozilla's to its translations.
- Quote: WP 3-7 「メニュー項目やボタンラベルの訳語に一貫性を持たせる」. SmartHR's vocabulary (SH-act): 「キャンセルとは、まだ実行していない操作を止めること」 「取り消しとは、すでに実行した操作を止めること」 「中断とは、実行中の操作を止めること」; 「「つくる」操作を表す文言は、基本的に「追加」とします。」; 「PCでもスマートフォンでも違和感のない言葉として、「押す」が適切だと判断しました。」; 「画面を最新の状態にする操作は、「再読み込み」と表記します。」. Mozilla (MZ-ed): 「「サインイン」「サインアウト」ではなく「ログイン」「ログアウト」と表記する。」
- Example: no sourced pair beyond Mozilla's choice above.
- Checker: **KW-23, FYI**: サインイン and ログイン, or サインアウト and ログアウト, both in one scan. It reports both places and does not say which to keep.

#### KW-24 (UW-24, rewritten to the verdict) · Instruction text names a control by its label or by order, not by where it sits on screen.
- Kind: WRITE.
- Strength: one company's guide (Ubie, written with screen readers in mind). The 「こちら」 half of the candidate has no counted source (an OPTiM heading only, and Ubie's own keigo example reads 「お手数ですが、こちらからお問い合わせください。」), so it is not part of this rule and is not checked.
- Quote: UB 「…場所ではなく、時系列や順序を意識した記述になるように気をつけます。」
- Example: UB Don't 「続けるには下のボタンを選んでください。」 → Do 「続けるには「次へ」を選んでください。」; Don't 「上に戻る」 → Do 「はじめに戻る」.
- Checker: **KW-24, FYI**: 下のボタン, 上に戻る (the quoted Don't forms only).

#### KW-25 (UW-25) · DADS: required and optional labels read 「※必須」 and 「※任意」, starting with ※ (U+203B); placeholder text never stands in for support text. SmartHR writes 入力必須.
- Kind: TYPO + WRITE.
- Strength: the marker: government design system (one system's convention). The term: one company's guide (SmartHR).
- Quote: DADS-in 「「※必須」「※任意」の要否ラベルは「※（全角米印）」から書き始め、地の文章とは異なるテキストであることを明示します。」 「サポートテキストを企図して、プレースホルダーテキストを使用してはなりません。」; SH-oth 「入力が必要な場合は「入力必須」と表記します。「必須入力」は使用しません。」
- Example: SH-oth NG 「必須入力」 → OK 「入力必須」.
- Checker: **KW-25, FYI**: 必須入力. The ※ marker is not checked: no quoted label breaks it.

### Errors, results and status

#### KW-26 (UW-26) · An error says what is wrong and how to fix it.
- Kind: WRITE.
- Strength: government design system (DADS-in) and 2 of 4 company guides (Pepabo; SmartHR through JW-64). OPTiM heading only, not counted.
- Quote: DADS-in 「入力内容にエラーがある場合に、具体的なエラー内容および訂正方法を記述します。」; PB 「エラーメッセージには、何が受け入れられなかったかに加えて、それを修正する方法の指示を書く」
- Example: DADS-in gives good and bad examples, not pairs. Bad: 「＊入力に誤りがあります。」, 「＊正しい氏名（カタカナ）を入力してください。」. Good: 「＊氏名をカタカナで入力してください。」, 「＊氏（カタカナ）と名（カタカナ）を空白で区切ってください。」.
- Checker: **KW-26, WARN** when the whole string is 入力に誤りがあります (with or without the leading asterisk and 。); **FYI** on 正しい followed by を入力してください, the frame of the second bad example.

#### KW-27 (UW-27) · DADS: field error text starts with ＊ (U+FF0A).
- Kind: TYPO.
- Strength: government design system (one system's convention; no company guide read uses it).
- Quote: DADS-in 「エラーテキストの冒頭に「＊（全角アスタリスク）」を付与し、地の文章とは異なるテキストであることを明示します。」
- Example: no sourced example of the wrong form.
- Checker: judgment only. No quoted string breaks it, so no fixture could be built, and the checker can't tell field error text.

#### KW-28 (UW-28, rewritten to the verdict) · SmartHR: a one-line notification bar carries the cause, or the cause and the remedy, and gives the cause briefly, in one sentence where it can.
- Kind: WRITE.
- Strength: one company's guide (SmartHR). "One sentence" is a preference (なるべく), and two of its own templates are two sentences with a remedy.
- Quote: SH-nb 「NotificationBarで伝える要素は、原因または原因・対処です。」 「…原因を端的に、なるべく一文で伝えます。」
- Example: SH-nb NG 「対象のカスタムマスター項目の削除に失敗しました。対象のカスタムマスター項目は、存在しません。対象のカスタムマスター項目を確認してください。」 → OK 「対象のカスタムマスター項目は、すでに削除済みです。」. One of its templates: 「予期しないエラーが発生しました。時間をおいて、やり直してください。」.
- Checker: judgment only.

#### KW-29 (UW-29) · SmartHR confirms a background job with 「{処理名}を受け付けました」.
- Kind: WRITE.
- Strength: one company's guide (SmartHR).
- Quote: SH-act 「バックグラウンド処理をリクエストしたときに表示する文言は、「{処理名}を受け付けました」とします。」
- Example: SH-act NG 「従業員情報のダウンロードを予約しました。」 → OK 「従業員情報のダウンロードを受け付けました。」.
- Checker: judgment only (a booking product uses the NG verb for real reservations).

#### KW-31 (UW-31) · SmartHR's status labels use a fixed set of suffixes.
- Kind: WRITE.
- Strength: one company's guide (SmartHR). Status labels are nouns, as KW-02.
- Quote: SH-st 「`○○中`：アクションが進行している途中の状態（例：依頼準備中、入力中、回答中）」; 「`完了`、`○○完了`：すべてのタスクが終わっている状態。なお、`○○済み`と併用する場合は「完了」を使うこと」. The set also has `○○前`, `未○○`, `○○待ち`, `○○済み` and `失敗`.
- Example: no sourced pair.
- Checker: judgment only.

#### KW-32 (UW-32) · Ubie writes positively and uses no exclamation marks.
- Kind: WRITE.
- Strength: one company's guide (Ubie). OPTiM heading only, not counted (double negatives are JW-20). Which width an exclamation mark takes, where one is used, is a house choice ([UW-42](#uw-42-exclamation-and-question-marks-width)).
- Quote: UB 「否定的な表現を使わず、肯定文で書きましょう。」; 「煽り表現はNG。「!」「!?」などの感嘆符は使わない。（textlint対応）」
- Example: UB Don't 「この中に該当なし」 → Do 「この中にはない」; Don't 「ありがとうございます！」 → Do 「ありがとうございます。」.
- Checker: **KW-32, FYI**: ! or ！ (U+0021, U+FF01) right after Japanese text, with or without one space. Question marks are not checked: Ubie's own Do example is 「体調はいかがですか？」.

### Notation

#### KW-33 (UW-33) · ください, すべて, すでに and いる in kana.
- Kind: WRITE.
- Strength: translation guides only (both); with JW-25 (KB, JTF). Mozilla keeps kanji for a main verb in context.
- Quote: WP 3-6 「「下さい」 は「ください」、「全て」は「すべて」、「既に」は「すでに」に統一する」; MZ 「本動詞では文脈に応じて漢字、補助動詞についてはひらがなとする。」; MZ-ed 「「居る」ではなく「いる」。」
- Example: the pairs in the WordPress quote.
- Checker: **KW-33, FYI**: 下さい, 全て, 既に, 居る.

#### KW-34 (UW-34) · Mozilla writes the conditional 「とき」 in kana and 「場合」 in kanji; SmartHR treats the two as close in meaning.
- Kind: WRITE.
- Strength: the spelling: translation guides only (Mozilla). The meaning: one company's guide (SmartHR, which uses 場合 for the larger condition and とき for the smaller).
- Quote: MZ 「条件節で用いる「〜するとき」はひらがな、「〜する場合」は漢字とする。」; SH-oth 「「場合」と「とき」に大きな違いはありません。」
- Example: no sourced example.
- Checker: judgment only (the kanji has other readings).

#### KW-35 (UW-35) · Ubie aims at about 3:7 kanji to hiragana; Mozilla uses no more kanji than needed.
- Kind: WRITE (the ratio is countable).
- Strength: the number: one company's guide (Ubie, a health-information service, as its own aim). The direction: translation guides only (Mozilla).
- Quote: UB 「漢字とひらがなのバランスを、3:7くらいになるようにしましょう。」; MZ 「日本語が堅くならないよう必要以上の漢字は使用しない。」
- Example: no sourced example.
- Checker: **KW-35, FYI**, once per file: kanji above 30% of kanji plus hiragana, when the file's strings hold at least 100 of them.

#### KW-37 (UW-37) · No 中黒 and no space inside a katakana compound, except in proper nouns (Mozilla) or where the break would be unclear (WordPress).
- Kind: WRITE.
- Strength: translation guides only (both). Narrower than JW-35 (JTF: 中黒, space or nothing, chosen once per document), not contrary to it.
- Quote: MZ 「カタカナで構成された語句について、一般的な固有名詞を除き、間に中黒やスペースを挿入しない。」; WP 5 「カタカナの複合語には、用語集などで特に指定しないかぎり、原則として中点「・」は使用しない。」 「例外として、カタカナが続いて区切りがわかりにくくなる場合は、中点を使ってもかまわない。」
- Example: WordPress's exception, 正 「ライブラリ・リファレンスマニュアル」.
- Checker: judgment only (a pattern can't tell a compound from a list of parallel words, JW-46).

#### KW-38 (UW-38, rewritten to the verdict) · Replace English and katakana words with ordinary Japanese where one exists.
- Kind: WRITE.
- Strength: one company's guide (SmartHR) and one translation guide (Mozilla). Ubie's everyday-words rule replaces hard Sino-Japanese words, not loanwords: it is KW-56. ヴ is JW-32's; Ubie shows it only as a Don't example.
- Quote: MZ 「固有名詞や専門用語あるいは慣例的なものを除き英語表記は使用しない。」 「カタカナ語についても同様に、自然な日本語に可能な限り置き換える。」; SH-oth 「「カタカナ語を用いるときには、まず漢字語での言い換えを検討する」に則って、フリーテキストは「自由記述」と表記します。」
- Example: MZ Bad 「Plug-in が Install されているかチェックして下さい。」 → Good 「プラグインがインストールされているか確認してください。」.
- Checker: judgment only.

#### KW-39 (UW-39) · Latin letters and digits half-width; no full-width space (U+3000); no half-width katakana.
- Kind: TYPO (code points).
- Strength: translation guides only (both); with JW-36, JW-50 and JW-59 (JTF, SmartHR).
- Quote: MZ 「英数字や記号を使用する場合は特別な理由のない限り半角を使用する。」 「全角空白および半角カナは使用しない。」; WP 1-2 「すべての英数字、符号、疑問符、感嘆符は半角文字を使う」
- Example: no sourced example in the writing research.
- Checker: judgment only for now. No string quoted in the writing research breaks it, so no fixture could be built. The SKILL.md §7 search patterns for JW-36, JW-50 and JW-59 cover the same code points.

#### KW-46 (UW-46) · Ranges take 〜 U+301C WAVE DASH, not ～ U+FF5E; Mozilla also allows U+2013 and never uses U+2015.
- Kind: TYPO (code points).
- Strength: the code points: translation guides only (Mozilla, the one source that names them). The wave dash for ranges: 2 of 4 company guides (SmartHR, Ubie); SmartHR names no code point, and its OK example came back as U+301C. With JW-45 (the guideline for foreign residents writes a range in words instead).
- Quote: MZ-ed21 「「–」(U+2013 二分ダッシュ) または「〜」(U+301C 波ダッシュ) は数字の範囲等を表すのに用いる。」 「「―」(U+2015 水平線) と「～」 (U+FF5E 全角チルダ) は用いない。」 「Windows のキーボードから「～」を入力すると、通常は U+FF5E 全角チルダが入力されてしまうので注意すること。」; SH-cnt 「期間を表す場合には、`〜`（波線）を使います。」
- Example: SH-cnt NG 「2022/01/01 - 2022/03/01、2022/01/01−2022/03/01」 → OK 「2022/01/01〜2022/03/01」.
- Checker: **KW-46, FYI**: any U+FF5E or U+2015; a YYYY/MM/DD range joined by U+002D or U+2212 (not U+2013, which Mozilla allows).

#### KW-48 (UW-48) · Ubie: a half-width slash for fractions, a full-width slash between listed words.
- Kind: TYPO.
- Strength: one company's guide (Ubie).
- Quote: UB 「半角スラッシュは分数を示す。並記した言葉の区切りには全角スラッシュを使う。」
- Example: no sourced example.
- Checker: judgment only. No quoted string breaks it.

#### KW-49 (UW-49) · Use emphasis brackets consistently.
- Kind: WRITE.
- Strength: one company's guide (Ubie). OPTiM heading only, not counted. With JW-41.
- Quote: UB 「【】「」『』など、強調表現の使い方に一貫性を持たせましょう。（textlint対応）」
- Example: no sourced example.
- Checker: judgment only.

### Numbers and counters

#### KW-52 (UW-52) · Group digits by three with a half-width comma.
- Kind: TYPO.
- Strength: one company's guide (SmartHR) and one translation guide (Mozilla). OPTiM heading only, not counted. With JW-51.
- Quote: SH-cnt 「読みやすさの観点から、数値を表記するときには3桁ごとに「,」を入れます。」 「また、カンマは数字に合わせて半角を用います。」; MZ-ed 「半角英数字。3 ケタごとに区切り文字を挿入する。(例: 1,024)」
- Example: SH-cnt 「1,000,000円、10,000人」 (the right form only).
- Checker: judgment only. No quoted string breaks it.

#### KW-54 (UW-54) · No space between a digit placeholder and its counter (WordPress); SmartHR counts records with 「件」.
- Kind: TYPO + WRITE.
- Strength: the placeholder: translation guides only (WordPress). 件: one company's guide (SmartHR). Mozilla writes か in kana in counters, with a space before (MZ-ed 「「2 か月」「5 か所」「10 か国語」。」), adding to JW-52.
- Quote: SH-cnt 「従業員に紐づくアカウントや、書類・依頼・申請などを数えるときの表記は「件」とします。」
- Example: WP 1-9 誤 「%d 件の投稿、%d 個の文字列」 → 正 「%d件の投稿、%d個の文字列」. SH-cnt NG 「22名の社員番号アカウントを表示中」 → OK 「22件の社員番号アカウントを表示中」.
- Checker: **KW-54, FYI**: `%d` (or `%1$d`) followed by a space and Japanese text. Which counter fits is judgment only.

#### KW-55 (UW-55) · Ubie writes Arabic numerals in horizontal text, 1つ included.
- Kind: WRITE.
- Strength: one company's guide (Ubie); WordPress writes Arabic numerals except where custom keeps kanji (正 「二次元コード」). The government writing guide (JW-49) writes the kanji form, so for this form it is a house choice.
- Quote: UB 「横書きでは算用数字を使う。漢数字を使いません。（textlint対応）」
- Example: UB Don't 「当てはまるものを一つ選んでください。」 → Do 「当てはまるものを1つ選んでください。」.
- Checker: **KW-55, FYI**: 一つ (the quoted form only).

### Plain and fair wording

#### KW-56 (UW-56) · Ubie: everyday words over institutional ones, and readings for hard kanji.
- Kind: WRITE.
- Strength: one company's guide (Ubie, a health-information service). With JW-23, JW-24 and JW-68.
- Quote: UB 「同じ意味でも日常で使う単語を使いましょう。（textlint対応）」; 「読みづらい漢字の病名や専門用語には、できるだけ読み仮名をつけましょう。」
- Example: UB Don't 「医療機関」「疾患」「近隣」 → Do 「病院」「病気」「近く, 近所」.
- Checker: **KW-56, FYI**: 医療機関, 疾患, 近隣. Readings: judgment only.

#### KW-57 (UW-57) · SmartHR avoids words with negative or exclusionary overtones.
- Kind: WRITE.
- Strength: one company's guide (SmartHR). The 得意な言語 rule is scoped to text about multilingual support. With JW-69 (no mechanical bans).
- Quote: SH-oth 「英単語の「dummy」はネガティブな意味を持つため、「ダミー」は使用しません。代わりに「サンプル」を使用します。」; 「多言語対応に関する記載において、「その人が十分に理解できる言語」は「得意な言語」と表記します。」 (heading: 「「得意な言語」と表記し、「母国語」「母語」の使用は控える」).
- Example: SH-oth 「ダミー」 → 「サンプル」; 「母国語」「母語」 → 「得意な言語」.
- Checker: **KW-57, FYI**: ダミー, 母国語, 母語.

## The project's DESIGN.md decides

The sources below disagree, or the candidate recorded a disagreement. None is a rule and the checker tests none. Take the project's choice from DESIGN.md; else what the existing text does; else pick one, keep it across the product, and say which in the reply (SKILL.md §3, house choice).

#### UW-16 Action labels: with or without 「する」
- SmartHR drops it (SH-app): 「ただし、名詞に「する」をつけたサ行変格活用動詞の場合の「する」は省略します。」 OK 「追加」「削除」, NG 「追加する」「削除する」.
- Ubie allows either (UB-btn): 「そのボタンが担うアクションを「〜する」または体言止めのかたちで書きます」.
- Spindle decides by the stem (SP-lab): 「漢語の名詞を語幹とした動作性名詞は活用する」 「外来語を語幹とした動詞は活用しない」, with two exceptions, and widely known function names 「活用しなくても問題ありません。」.
- Mozilla (MZ): 「動作や目的などを簡潔な体言で表す。可能であれば語数を揃える。」. WordPress (WP 3-8): 「ボタンラベルでは語尾の「します (する)」を省略した形にする」.

#### UW-30 Success wording (the verdict: not a real disagreement)
- Mozilla gives one translation example for "Update Succeeded." with no general statement: 「不適切な訳: 更新に成功しました。」, 「適切な訳: 更新を正常に完了しました。」 (MZ).
- SmartHR prescribes its form only for the count summary of a bulk job (SH-bg): 「エラーが発生しない場合は、結果概要に「◯件の{{操作目的を表す名詞}}に成功しました。」と表示します。」
- Neither is a general rule on success messages.

#### UW-36 The long vowel at the end of English -er, -or, -ar words
- Ubie keeps it (UB): 「カタカナの長音符号は省略しません。」 Do 「ユーザー, スキャナー, プリンター」, Don't 「ユーザ, スキャナ, プリンタ」.
- Mozilla by ending (MZ): 「-er、-or、-ar、-cy、-ry、-gy、-xy で終わる単語はすべて長音とする。Microsoft のような例外はなし。」 「-ear、-eer、-re、-ty、-dy で終わる単語は長音としない。」
- WordPress by length (WP 4-1): 「長音記号「−」は、長音を含めて4文字以下になる単語には付ける」 「5文字以上になる単語には付けない。」 (the mark came back as U+2212 on two fetches; the page likely prints it that way).
- The sources agree on ユーザー (Ubie, Mozilla, WordPress) and サーバー (Mozilla, WordPress), and no guide read writes ユーザ. That agreement is not checked here; JW-33 (the GK notice allows dropping the mark by custom) and JW-34 still apply.

#### UW-40 A typed space between Japanese and Latin text
- Space by letters and digits (MZ): 「英数字と日本語との間には半角空白を入れることを原則とする。」
- Space by letters, none by digits (WP): 「数字を除く半角文字と全角文字の間には、半角文字1字分のスペースを入れる」; 「半角数字の前後には半角スペースを入れない」.
- No space: JW-57 (JTF, SmartHR); OPTiM heading 「数字と英単語の前後に半角スペースを挿入しない」 (not counted).
- A typed space and CSS `text-autospace` together double the gap (JT-20, JT-21).

#### UW-41 。 on a single sentence of UI text
- None (UB): 「1文で終わっているテキストは区切りが明確なため、基本的に句点はつけません。」
- None unless the sentence has 、 (SP-lab): 「読点、句点は基本的に必要ありませんが、文中に読点が入る場合は句点を入れましょう。」
- 。 (SH-app, tooltips): 「1文のみの場合でも、文章には句点をつけます。」; (MZ) 「…文になるところでは句点を使用する。」
- Follow the source string (WP 3-8): 「句読点の有無は原文に合わせる。…」
- Headings: Spindle 「読点、句点は必要ありません。」, with JW-39 (KB, JTF). Buttons: no source states it.

#### UW-42 Exclamation and question marks: width
- Full-width (MZ): 「日本語文中での句読点および疑問符や感嘆符については全角記号を使用する。」; (MZ-ed) 「感嘆符と疑問は全角「！」「？」。ただし、連続する場合は半角「!?」にする。」 (U+FF01, U+FF1F; then U+0021 U+003F). With JW-42 and JW-43.
- Half-width with a space before (WP 1-2): 正 「準備をしましょう !」 (U+0020 U+0021); 誤 「準備をしましょう!」 and 「準備をしましょう！ (記号が全角)」.
- Ubie (UB) says 「感嘆符や疑問符、伸ばし棒は使いません。」, but its own Do examples end in ？ (U+FF1F) and ? (U+003F): for the question mark the page contradicts itself (verdict). For the exclamation mark, see KW-32.

#### UW-43 Parentheses: width
- Half-width with spaces outside (WP 1-5, 1-6): 「丸括弧 ( ) は半角にし、前後には、半角文字1文字分のスペースを入れる」; 「丸括弧「(」の次、「)」の前にスペースを入れない」. Mozilla (MZ) spaces them the same way: 「例えば “(” の前は半角空白だが後は詰める、“)” や “:” の前は詰めるが後は半角空白」.
- Full-width: JW-42 (KB, JTF, SmartHR); DADS sample text 「＊氏（カタカナ）と名（カタカナ）を空白で区切ってください。」 (an example, not a rule); Ubie's symbol table (U+FF08, U+FF09).
- Ubie's weekdays (UB): 「曜日の表記をする場合は、日付の後にスペースを空けずに半角()で表示しましょう。」

#### UW-44 Names of UI elements inside running text
- 「」 (WP 2-2): 「メニュー項目やボタンラベルは「」で囲む」.
- Half-width [ ] with spaces (MZ-ed): 「Microsoft の表記に準拠。半角大括弧を用いて前後に半角スペースを挿入する。」 例 「さらに、[検索バーの管理] をクリックすれば、…」.
- Double quotation marks (MZ): 「メニュー項目やボタンラベルなどを表すときは二重引用符を使用する。」
- Full-width ［］ (SH-act example): 「…育児休業等給付金申請の［育児休業給付］タブで［終了した申請を表示］を有効にします。」; with JW-41.

#### UW-47 Colon: width
- Half-width, no space before (WP 1-4): 「コロン記号 (:)の前には入れず、後には半角・全角を問わず入れる。」; (MZ-ed) 「コロン「:」やセミコロン「;」は半角にする (必要なら直後にスペースを挿入する)。」
- Full-width in Ubie's table examples (U+FF1A) and in SmartHR (JW-47).

#### UW-50 Dates
- Slashes in SmartHR's UI (SH-cnt), with 年月日 allowed where slashes don't suit: 「*：ヘルプページなど、…「2025/01/01」がそぐわない場合には「2025年1月1日」のような表記も可能です。」 (NG: 2022/1/1).
- 年月日 (UB): 「年月日は漢字表記を使いましょう。」; WordPress 「2014年1月1日 (水)」; Mozilla (MZ-ed) 「西暦表記。文書内では YYYY 年 MM 月 DD 日」. They differ on spaces. With JW-53.

#### UW-51 Times
- 24-hour (SH-cnt): 「表示言語の選択にかかわらず、時刻は`hh:mm:ss`で表記します*。状況に応じて、`ss`は省略しても構いません。」 「hh：24時間制の2桁の時」.
- HH:MM, 24-hour not stated (UB): 「時間の表記は半角スペースをあけてHH:MM表記しましょう。」
- AM/PM (WP 7): 「2014年1月1日2:00 AM」. The 12-hour form for foreign readers: JW-54.

#### UW-53 A space between a number and its unit
- Space (MZ-ed): 「「バイト」はカタカナ。それ以外の接頭辞付き単位は大文字英語表記。数字と単位の間に半角スペースを挿入する。(例: 5 MB、100 KB)」
- No space (SH-cnt): 「数字と単位の間にはスペースを入れず、「5GB」のように表記します。」; (WP 1-9) 「半角数字の前後には半角スペースを入れない」. With JW-55.

## Left out

- **UW-10**: it states no rule. Every UI example read ends a request in the same form (DADS-in 「＊氏名を入力してください。」, PB 「10 文字以内で入力してください」), and one DADS sample notice uses 「…期限までにご対応をお願いいたします。」. No source rules on one form over the other.
- **UW-45** (ellipsis as one character): not supported. The one counted source, Mozilla, prescribes three half-width dots (「三点リーダーは半角ドット 3 つ「...」を採用する。」 on the wiki); "one" rests on an OPTiM heading. JW-44 stands.
- The areas in [`../writing/gaps.md`](../writing/gaps.md) (apology wording, the choice between two polite request forms, button pairs, destructive-button wording, empty states, currency, Korean-to-Japanese faults) have no source and no rule.
