# /kana — writing rules from company guides, translation guides and DADS components (KW)

**Development draft, 2026-11-21. No native Japanese reader has reviewed this file.** It turns the 57 research candidates in [`../writing/rules.md`](../writing/rules.md) (UW-01 … UW-57), and the 13 candidates and 8 additions of the second pass in [`../writing2/rules.md`](../writing2/rules.md) (UW-58 … UW-70), into rules for the skill, at the strength the second readers' verdicts in [`../writing/verdicts.md`](../writing/verdicts.md) and [`../writing2/verdicts.md`](../writing2/verdicts.md) allow, row by row and with their notes. Region: Japan for every rule.

## How this file was made

- **Quotes from `rules.md`.** KW-39's examples and fixtures quote JTF and KB strings from [`rules.md`](./rules.md) (JW ids given), because the writing research quotes no string that breaks it. No other rule does.
- **What gets in.** A candidate becomes a rule only if its verdict is "supported", or "weaker than stated" and rewritten to what the verdict says the source supports. UW-45 (not supported) and UW-69 (one university website guide that says it is not binding) are left out. The sixteen candidates recorded as a disagreement are not rules: they are listed under [The project's DESIGN.md decides](#the-projects-designmd-decides), each side with its source, and the checker tests none of them. Four of them were rules or candidates of the first pass that the second pass split: UW-11 (with UW-58), UW-17 and UW-37, where Microsoft takes the other side, and UW-59.
- **Ids.** KW-nn carries the number of the candidate it came from (KW-09 is UW-09), so the numbering has gaps. Every candidate's fate is in [`../writing/coverage.md`](../writing/coverage.md) (first pass) and [`../writing2/coverage.md`](../writing2/coverage.md) (second pass).
- **Relation to JW.** [`rules.md`](./rules.md) holds JW-01 … JW-70 (keys KB: the Agency for Cultural Affairs' guide for government writing; KG: its keigo guideline; GK: the cabinet notice on loanword spelling; YN: the plain-Japanese guideline for foreign residents; JTF; SmartHR). A KW rule that agrees with a JW rule says so and adds its sources; it does not restate the JW rule.
- **Japanese text.** Every Japanese string below is copied from a quote in `writing/rules.md`, `writing/verdicts.md`, `writing2/rules.md` or `writing2/verdicts.md`, with its source key. Where the two files differ, the verdict's text is used (UW-19). No example was composed. A rule whose sources give no OK/NG pair says "no sourced example". A test (`test/unit/scripts/kana-copy-check.test.mjs`) fails if a fixture string or a corner-bracketed string in this file is not inside one quote. Japanese outside brackets (single words in the rule text) is held only to being a substring of some quote, which a short word can pass by coincidence; those words were read by hand.
- **English quotes.** Microsoft states its rules in English. They are quoted in “…” as its PDF's text layer gives them, with line breaks and indentation removed; the source's own straight quotes stay inside. Its + and − marks for recommended and avoided forms are written before the strings they mark.
- **Quotes against the pages.** On 2026-11-21 the quotes of both research files were compared by script with the pages' served bytes, and Microsoft's with the text layer of its PDF ([`../writing/raw-check-2026-11-21.md`](../writing/raw-check-2026-11-21.md), [`../writing2/raw-check-2026-11-21.md`](../writing2/raw-check-2026-11-21.md); [`../review-2026-11-21.md`](../review-2026-11-21.md) says what was not found and why). The second-pass quotes this file takes from `writing2/verdicts.md` (SmartHR, Ubie, the NTA page, including its ※ on 飲食料品) were compared with the pages' bytes again in this fold, the same day. A Microsoft quote confirms characters, not spaces.
- **Widths and spaces.** A rule or a side that turns on a width or a space rests only on quotes whose tier is "web" in the raw-check reports. One exception, stated where it is used (UW-37): Microsoft writes its half-width space as △ in examples, which is a statement in characters, not layout.
- **No native reader.** No native Japanese reader has read these rules; the review was a model's ([`../review-2026-11-21.md`](../review-2026-11-21.md)).

## Strength, in words

| Wording | Meaning |
|---|---|
| government design system | The Digital Agency design system (DADS) component pages. Each states its own scope. |
| N of 4 company guides | Stated in N of the four company design-system writing guides read: SmartHR, Ubie Vitals, Ameba Spindle, GMO Pepabo Inhouse (Pepabo: one component page). A guide that is silent is not counted against a rule. |
| one company's guide | One of those four, named. |
| translation guides only | Three guides for Japanese translated from English: Mozilla Japan (L10n Guideline, Editorial Guideline) and the WordPress Japanese translation style guide, for open-source software, and Microsoft's Japanese localization style guide, for its own products. A rule names the ones that state it. Microsoft's guide was read for the second pass's topics only; where a rule names Mozilla or WordPress alone, Microsoft is not counted for or against. |
| statutory duty | A duty under Japanese law, as the authority that administers it explains it. One rule: KW-68 (the National Tax Agency on the Consumption Tax Act). |
| OPTiM heading only, not counted | OPTiM's blog post lists its rules as headings with no body. A pointer, never counted. |

No rule here is required by any source, except KW-68, which states a legal duty. Words such as 原則, なるべく and できる限り in a quote, and "In general" or "try to use" in Microsoft's, stay in the rule.

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
| MS | Microsoft, Japanese Localization Style Guide (PDF; read from its text layer) | https://download.microsoft.com/download/bb82f407-78f4-4df4-accd-d63ceaadd24a/jpn-jpn-StyleGuide.pdf |
| SH-dd | SmartHR, delete dialog | https://smarthr.design/products/design-patterns/delete-dialog/ |
| SH-cs | SmartHR, operations that need a confirmation step | https://smarthr.design/products/design-patterns/confirmation-step/ |
| SH-mu | SmartHR, modal UI | https://smarthr.design/products/design-patterns/modal-ui/ |
| SH-tb | SmartHR, the common table | https://smarthr.design/products/design-patterns/smarthr-table/ |
| SH-ed | SmartHR, items with no value | https://smarthr.design/products/design-patterns/empty-data/ |
| UB-am | Ubie Vitals, ActionModal | https://vitals.ubie.life/components/action-modal/ |
| NTA | National Tax Agency, Tax Answer No.6902 (total price display) | https://www.nta.go.jp/taxes/shiraberu/taxanswer/shohi/6902.htm |

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
- Strength: one company's guide (SmartHR) and two translation guides (Mozilla, as a principle; WordPress also allows the plain 「する」 form); Microsoft's guide was not checked for this rule. OPTiM heading only, not counted.
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
- Strength: one company's guide (Ubie) and two translation guides (Mozilla, for content that is not formal; Microsoft, which says of its word table that the words are examples to be chosen by context, not adopted uniformly). DADS's own sample notice body uses 「…期限までにご対応をお願いいたします。」: an authority's notice, given as an example, not a rule.
- Quote: UB 「堅苦しい表現は避けるが、フレンドリーすぎないように。」; MZ-ed 「あまり丁寧すぎると浮いてしまうので、内容が改まったものでなければ、一般的な丁寧語で記述する。特にブログは多少カジュアルでも良い。」; MS “Microsoft voice avoids an unnecessarily formal tone. Similarly, Japanese Microsoft voice should also avoid written words/very formal tone.”
- Example: UB Don't 「お加減はいかがですか？ ※ちょっと堅い」 → Do 「体調はいかがですか？」. MZ-ed NG 「皆様」「公開いたしました」「よろしくお願いいたします」 → OK 「皆さん」「公開します」「よろしくお願いします」. MS − 「xxx が可能です」 → + 「xxx できます」.
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
- Strength: 2 of 4 company guides (SmartHR, Ubie) and one translation guide (Microsoft; its word is "excessively polite", and "stack" is ours). OPTiM heading only, not counted. Same direction as JW-07 and JW-08. Microsoft asks for the polite お- and ご- forms of a few listed verbs where SmartHR's example writes the plain one; that is a house choice (UW-59), and both reject stacked forms.
- Quote: SH-ws 「敬語表現を多用して、情報が伝わりづらくならないように配慮しましょう。」; MS “Do not use excessively polite expression.”
- Example: UB Don't 「お手数をおかけしますが、こちらからお問い合わせいただけますよう、お願い申し上げます。 ※過剰」 → Do 「お手数ですが、こちらからお問い合わせください。」. SH-ws NG 「◯◯をご確認いただけますようお願いいたします。」 → OK 「◯◯を確認してください。」; NG 「◯◯させていただきました。」 → OK 「◯◯しました。」.
- Checker: **KW-09, WARN**: いただけますよう, お願い申し上げます, させていただきました. Only SmartHR's past form is matched: the KG keigo guideline says the humble-permission form can fit where the writer acts with the reader's permission and benefits from it (JW-09).

#### KW-10 (UW-10) · Microsoft: in general, text is in the polite style, and a sentence that asks the user to act ends "...してください。".
- Kind: WRITE.
- Strength: translation guides only (Microsoft, "In general", for explanatory text in windows, dialog boxes, message boxes and the status bar, and for the body of an error message). Every UI example of the first pass ends a request the same way (DADS, Pepabo, SmartHR, Ubie) without stating it. No source in either pass rules on ください against お願いします; Microsoft's guide does not mention お願い.
- Quote: MS “In general, sentences should be translated in Desu-masu unless otherwise instructed. When the sentence prompts users to take an action, use "...してください。."”; MS “In Japanese, use Desu-masu (ですます調, polite style) when translating message body. When the message prompts users to take an action, use "...してください。."”
- Example: no sourced example in this file (Microsoft's example is a table cell its text layer wraps; see writing2/rules.md).
- Checker: judgment only (the checker can't tell a sentence that asks the user to act).

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

#### KW-70 (UW-70) · Microsoft: in general, no honorific or humble forms; use them in material where a supplier–customer relationship has to be considered.
- Kind: WRITE.
- Strength: translation guides only (Microsoft, "In general"). For ordinary UI it points the same way as KW-07 (Ubie, components only). Ubie's own line for using keigo (KW-08) is a different one: Microsoft's trigger is the kind of material, Ubie's the kind of operation.
- Quote: MS “In general, do not use honorific expression and humble expression.”; MS “In materials in which "supplier-customer" relationship should be considered, use those expressions.”
- Example: MS − 「データ ファイルをアプリケーションに関連付けていただきますと、～」 → + 「データ ファイルをアプリケーションに関連付けると、～」. In supplier–customer material, MS − 「～を購入してください。」 → + 「～をお買い求めください。」.
- Checker: judgment only (whether a screen is supplier–customer material is not in the text).

### Buttons, labels and links

#### KW-15 (UW-15, rewritten to the verdict) · A button label lets the user predict what will happen; Ubie adds that 「OK」 alone does not.
- Kind: WRITE.
- Strength: predicting the action: 2 of 4 company guides (Ubie, Spindle). The 「OK」 half: one company's guide (Ubie, on its Button and ActionModal pages). DADS-btn names 「OK」 as an ordinary primary label and gives no wording rule. SmartHR's dialog rule (JW-61) is about matching a dialog's title and its button.
- Quote: UB-btn 「ボタンを押下した場合に、何が起こるのかをユーザーが推測できるべきです。」; SP-btn 「ボタン、リンクボタンのラベルは、操作やリンク先の内容が予測できるように明確にしましょう。…」; UB-am 「簡潔で、具体的なテキストをラベルとして用いてください。」
- Example: UB-btn Bad 「OK」 → Good 「この内容で更新する」. UB-am 「OK」 → 「保存」 (the page marks them ❌ and ⭕️).
- Checker: **KW-15, FYI**: a button whose whole text is OK.

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
- Strength: government design system (DADS-md). The label SmartHR gives the destructive button is KW-61; how to word the confirmation is KW-63.
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

#### KW-60 (UW-60, rewritten to the verdict) · SmartHR: the button that completes a modal task names the action with a verb, and the button that abandons it reads 「キャンセル」; Ubie keeps 「キャンセル」 for abandoning an action and 「閉じる」 for only closing.
- Kind: WRITE.
- Strength: one company's guide (SmartHR) for the labels; Ubie's line on the two words is one company's guide too. Placement is KW-19 (DADS: desktop, as a principle). Ubie's page also shows, with no caption, ❌「キャンセル」 / ⭕️「停止」 right after its pair for 「OK」 (KW-15). Whether that pair is about the abandon button, which would go against SmartHR, or about an action that happens to mean "cancel" is undetermined; this rule does not decide it.
- Quote: SH-mu 「ボタンのラベルは、モードの目的であるタスクを完了するアクションであることがわかる動詞を用います。」 「タスクを中断するアクションのボタンラベルは`キャンセル`とします。」; SH-dd 「ダイアログを閉じて操作を中断するボタンは左に配置し、ラベルは`キャンセル`とします。」; UB-am 「「キャンセル」と「閉じる」は使い分けてください。前者はアクションを中断するニュアンスがあり、後者は単にダイアログを閉じる場合に使います。」
- Example: no sourced example.
- Checker: judgment only (the checker can't tell which button abandons the task).

#### KW-61 (UW-61) · SmartHR labels the button that confirms a deletion with the act, 「削除」, and styles it as a Danger button.
- Kind: WRITE + TYPO.
- Strength: one company's guide (SmartHR). Spindle's Danger Button examples name the act without a wording rule (KW-22). 削除 against 削除する is a house choice (UW-16).
- Quote: SH-dd 「操作を確定するボタンは右に配置し、ラベルは`削除`とします。」 「Dangerボタンを使い、破壊的な操作であることを示します。」
- Example: no sourced example.
- Checker: judgment only (the checker can't read a button's style).

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

### Dialogs and empty states

#### KW-62 (UW-62) · Microsoft: a question that asks which action to take is "...しますか?", not "....してもよろしいですか?".
- Kind: WRITE.
- Strength: translation guides only (Microsoft, for translating "Do you want to …?" and "Would you like to …?"). No company guide states it; SmartHR's and Ubie's dialog examples use the same form (KW-63). The width of the question mark is not part of this rule (UW-42): Microsoft's quotes are characters from its PDF's text layer, which do not settle a width.
- Quote: MS “For the sentences asking the customer which action to take, such as "Do you want to ...?" or "Would you like to ...?", translate to "...しますか?"”; MS “Avoid translating to "....してもよろしいですか?" because the agent of action is not the customer in this way.”
- Example: MS − 「このまま続けてもよろしいですか?」 → + 「このまま続けますか?」.
- Checker: **KW-62, FYI**: てもよろしいですか, the frame of the form Microsoft says to avoid and of its minus example.

#### KW-63 (UW-63, rewritten to the verdict) · Before a destructive act, ask with a question; SmartHR also names the target, says that the act cannot be undone, and needs no confirmation when the act can be undone.
- Kind: WRITE.
- Strength: the question: 2 of 4 company guides (SmartHR, Ubie). The rest: one company's guide (SmartHR); for an act that can be undone its words are "not needed" (必要ありません), not "skip". Where the question sits differs: SmartHR puts it in the body under a noun-phrase title 「{オブジェクト名}の削除」, Ubie in the header. With KW-22 (DADS: the dialog is not a safeguard on its own).
- Quote: SH-dd 「削除などの破壊的で不可逆な操作をする際は、アクションダイアログを用いて、ユーザーの確認を経てシステムが処理を実行するようにします。」 「破壊的な操作であっても、操作後に元に戻せる場合は、処理前の確認は必要ありません。」 「疑問文を使い確認を促します。」 「また、操作が不可逆である旨を明示します。」 「DefinitionListを使い、削除対象のオブジェクト名およびインスタンス名を提示します。」; UB-am 「データの削除、内容の破棄など破壊的なアクションの場合は疑問形を使用します。」
- Example: SH-dd 例 「以下の{オブジェクト名}を削除しますか？　この操作は元に戻せません。」; UB-am 例 「この回答履歴を削除しますか？」.
- Checker: judgment only.

#### KW-64 (UW-64) · SmartHR: a confirmation dialog shows how many items the action touches and what it will do.
- Kind: WRITE.
- Strength: one company's guide (SmartHR). Its first sentence asks only to consider (検討します) telling the user beforehand what will happen; the second states what the dialog shows.
- Quote: SH-cs 「ワンクッション必要な操作をユーザーが実行した際は、その操作によって何が起こるのかを事前に伝えることを検討します。」 「確認ダイアログでは、対象となる件数や操作の実行で何が起こるかを表示します。」
- Example: no sourced example.
- Checker: judgment only.

#### KW-65 (UW-65) · Ubie: a dialog header states the user's action as a noun phrase or a question, joins the action noun and its object with 「の」, uses words specific to the case, and fits two lines on mobile and one on larger screens.
- Kind: WRITE.
- Strength: one company's guide (Ubie). The の form: 2 of 4 company guides (Ubie; SmartHR's dialog titles, JW-61, and its delete-dialog title in KW-63). Ubie's page writes 「体現止め」 and 「疑問系」; 体言止め and 疑問形 are meant.
- Quote: UB-am 「ユーザーが求める操作を、体現止めまたは疑問系で表現します。」 「アクションを表す動名詞とその対象は連体助詞「の」を使って接続します。」 「汎用的な言葉ではなく、ユースケースに特化した具体的な言葉を使いましょう。」 「モバイル環境では2行、それより大きなデバイスでは1行に収まるようにします。」
- Example: UB-am 「ユーザー情報を編集しましょう」 → 「ユーザー情報の編集」; 「変更をキャンセルする」 → 「変更を破棄する」 (the page marks them ❌ and ⭕️).
- Checker: **KW-65, FYI**: a heading inside a dialog that ends in ましょう (Ubie's ❌ form). The line count is judgment only (it depends on the width).

#### KW-66 (UW-66) · SmartHR: a table with no objects yet is not drawn; a message names the object, with a button to add one. A search that finds nothing keeps the table header and shows another message.
- Kind: WRITE + TYPO.
- Strength: one company's guide (SmartHR; one page's templates). In the zero-object state the page also hides the action buttons that need an object, the area for temporary operations and the pagination; "not drawn" is for that state only.
- Quote: SH-tb 「テーブルは表示しません。」 「代わりに`Panel`内部に、`{オブジェクト名}はありません。`というメッセージと、オブジェクト追加を促すボタンを上下左右中央に表示します。」 「テーブルヘッダー（`thead`）は表示したままとします。」 「オブジェクトのエリアには、`該当する{オブジェクト名}はありません。<br />別の条件を試してください。`というメッセージを上下左右中央に表示します。」
- Example: no sourced example (the message templates are in the quotes).
- Checker: judgment only (an empty table is a state at run time).

#### KW-67 (UW-67) · SmartHR: a missing value in a data table or definition list is left blank; a dash (`-`) in the disabled text colour only for an item the user cannot enter.
- Kind: TYPO.
- Strength: one company's guide (SmartHR).
- Quote: SH-ed 「データテーブルや定義リストにおいて、値がない項目は空白表示とします。」 「以下の場合において、値がない項目は（空白表示ではなく）`-`を表示し、文字色は`TEXT_DISABLED`とします。」 「データテーブルや定義リスト上に、ユーザーが入力できない項目を表示する場合」
- Example: no sourced example.
- Checker: judgment only (whether an item can be entered is not in the text).

### Notation

#### KW-33 (UW-33) · ください, すべて, すでに and いる in kana.
- Kind: WRITE.
- Strength: translation guides only (Mozilla and WordPress; Microsoft's guide was not checked for this rule); with JW-25 (KB, JTF). Mozilla keeps kanji for a main verb in context.
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

#### KW-38 (UW-38, rewritten to the verdict) · Replace English and katakana words with ordinary Japanese where one exists.
- Kind: WRITE.
- Strength: one company's guide (SmartHR) and one translation guide (Mozilla). Ubie's everyday-words rule replaces hard Sino-Japanese words, not loanwords: it is KW-56. ヴ is JW-32's; Ubie shows it only as a Don't example.
- Quote: MZ 「固有名詞や専門用語あるいは慣例的なものを除き英語表記は使用しない。」 「カタカナ語についても同様に、自然な日本語に可能な限り置き換える。」; SH-oth 「「カタカナ語を用いるときには、まず漢字語での言い換えを検討する」に則って、フリーテキストは「自由記述」と表記します。」
- Example: MZ Bad 「Plug-in が Install されているかチェックして下さい。」 → Good 「プラグインがインストールされているか確認してください。」.
- Checker: judgment only.

#### KW-39 (UW-39) · Latin letters and digits half-width; no full-width space (U+3000); no half-width katakana.
- Kind: TYPO (code points).
- Strength: translation guides only (Mozilla and WordPress; Microsoft's guide was not checked for this rule); with JW-36, JW-50 and JW-59 (JTF, a translation-industry guide; SmartHR for digits). The government writing guide asks only for one choice per document (JW-50, JW-59), and it and JTF allow a full-width space after a sentence-ending exclamation or question mark (JW-43).
- Quote: MZ 「英数字や記号を使用する場合は特別な理由のない限り半角を使用する。」 「全角空白および半角カナは使用しない。」; WP 1-2 「すべての英数字、符号、疑問符、感嘆符は半角文字を使う」
- Example (from [`rules.md`](./rules.md), JTF): JW-36 「ﾒｰﾙｱﾄﾞﾚｽ」 → 「メールアドレス」; JW-50 「１２３４５」 → 「12345」; JW-59 「ａｂｃ ＤＥＦ」 → 「abc DEF」.
- Checker: **KW-39, FYI**: full-width digits (U+FF10–U+FF19), full-width Latin letters (U+FF21–U+FF3A, U+FF41–U+FF5A), U+3000, half-width katakana (U+FF65–U+FF9F). The fixtures quote JTF's examples above and two strings in `rules.md` that hold U+3000 (JW-43's JTF example, JT-29's KB list label); this is the one rule whose quotes may come from `rules.md` as well as the writing research.

#### KW-46 (UW-46) · Ranges take 〜 U+301C WAVE DASH, not ～ U+FF5E; Mozilla also allows U+2013 and never uses U+2015.
- Kind: TYPO (code points).
- Strength: the code points: translation guides only (Mozilla, the one source read that names them; Microsoft's section on the wave dash was not checked for this rule). The wave dash for ranges: 2 of 4 company guides (SmartHR, Ubie); SmartHR names no code point, and its OK example came back as U+301C. With JW-45 (the guideline for foreign residents writes a range in words instead).
- Quote: MZ-ed21 「「–」(U+2013 二分ダッシュ) または「〜」(U+301C 波ダッシュ) は数字の範囲等を表すのに用いる。」 「「―」(U+2015 水平線) と「～」 (U+FF5E 全角チルダ) は用いない。」 「Windows のキーボードから「～」を入力すると、通常は U+FF5E 全角チルダが入力されてしまうので注意すること。」; SH-cnt 「期間を表す場合には、`〜`（波線）を使います。」
- Example: SH-cnt NG 「2022/01/01 - 2022/03/01、2022/01/01−2022/03/01」 → OK 「2022/01/01〜2022/03/01」.
- Checker: **KW-46, FYI**: any U+FF5E or U+2015; a YYYY/MM/DD range joined by U+002D or U+2212 (not U+2013, which Mozilla allows).

#### KW-48 (UW-48) · Ubie: a half-width slash for fractions, a full-width slash between listed words.
- Kind: TYPO.
- Strength: one company's guide (Ubie).
- Quote: UB 「半角スラッシュは分数を示す。並記した言葉の区切りには全角スラッシュを使う。」
- Example: no sourced example.
- Checker: judgment only. No quoted string breaks it, in the writing research or in `rules.md`.

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
- Checker: judgment only. No string quoted in the writing research breaks it. In `rules.md` the only digit runs without a comma sit beside a kanji unit (JW-51: KB allows dropping the comma there, and JTF calls using both redundant), so a check that fired on them would flag accepted forms.

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

#### KW-68 (UW-68) · A price a business shows consumers in advance must include the consumption tax (総額表示), as the National Tax Agency explains the duty.
- Kind: WRITE (what a price must contain, not how it is set).
- Strength: statutory duty (the Consumption Tax Act; the page's legal-basis line reads 「消法63」, and the page is dated 「[令和8年4月1日現在法令等]」). It covers prices shown to consumers in advance. The page also carries a ※ note: from 1 April 2027 to 31 March 2029 (令和9年4月1日 to 令和11年3月31日) the tax rate on the sale of 飲食料品 is reduced, with a special rule for showing their total price. This rule does not cover that special rule, and the page's examples assume the standard 10% rate.
- Quote: NTA 「総額表示義務とは、事業者が消費者に対してあらかじめ価格を表示する場合に、消費税額（地方消費税額を含む。）を含めた価格（税込価格）を表示することを義務付けるものです。」 「総額表示の義務付けは、事業者が消費者に対してあらかじめ表示する価格が対象となります。」 「※ 令和9年4月1日から令和11年3月31日までの2年間、飲食料品の譲渡について、消費税率が引き下げられます。」 「この引下げに当たり、飲食料品の総額表示の特例が設けられます。」
- Example: NTA 例 「11,000円」 「11,000円（税込）」 「11,000円（税抜価格10,000円）」 「11,000円（うち消費税額等1,000円）」 「11,000円（税抜価格10,000円、消費税額等1,000円）」 「11,000円（税抜価格10,000円、消費税率10パーセント）」 「10,000円（税込価格11,000円）」 (the forms the page accepts, at the standard 10% rate).
- Checker: judgment only (no source quotes a wrong form).

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
- Microsoft takes command buttons as noun phrases by default, with a plain verb allowed for clarity, and says nothing about a する ending on buttons (MS): “Use noun phrase (体言止め) when translating a title of the box and command buttons.” Its word-choice section keeps the old する form for button names, in words that can be read either way. So the three translation guides lean away from a する ending without one of them stating it.

#### UW-17 Joining a button label's object: を or の
- SmartHR prescribes を on buttons (SH-app): 「動詞の終止形の前に、オブジェクトを明記する場合には、助詞は「を」が適切です。」 NG 「権限の追加、申請の取り消し」, OK 「権限を追加、申請を取り消す」.
- WordPress, for "View XX" (WP 3-2): 「“View XX” という表現は基本的に「～を表示 (する)」に統一する」
- Microsoft takes the の form as the basic noun phrase, and its noun-phrase scope lists command buttons (MS): + 「変更箇所の表示」 − 「変更箇所を表示」; “Basic expression "～の～"”. Its minus form is the form WordPress prescribes.
- Titles are not contested: SmartHR's same page gives the の particle for screen titles and item names (SH-app): 「名詞の前に、オブジェクトを明記する場合には、助詞は「の」が適切です。」 Ubie's dialog headers (KW-65) and SmartHR's dialog titles (JW-61) use it too.

#### UW-30 Success wording (the verdict: not a real disagreement)
- Mozilla gives one translation example for "Update Succeeded." with no general statement: 「不適切な訳: 更新に成功しました。」, 「適切な訳: 更新を正常に完了しました。」 (MZ).
- SmartHR prescribes its form only for the count summary of a bulk job (SH-bg): 「エラーが発生しない場合は、結果概要に「◯件の{{操作目的を表す名詞}}に成功しました。」と表示します。」
- Neither is a general rule on success messages.

#### UW-36 The long vowel at the end of English -er, -or, -ar words
- Ubie keeps it (UB): 「カタカナの長音符号は省略しません。」 Do 「ユーザー, スキャナー, プリンター」, Don't 「ユーザ, スキャナ, プリンタ」.
- Mozilla by ending (MZ): 「-er、-or、-ar、-cy、-ry、-gy、-xy で終わる単語はすべて長音とする。Microsoft のような例外はなし。」 「-ear、-eer、-re、-ty、-dy で終わる単語は長音としない。」
- WordPress by length (WP 4-1): 「長音記号「−」は、長音を含めて4文字以下になる単語には付ける」 「5文字以上になる単語には付けない。」 (the mark came back as U+2212 on two fetches; the page likely prints it that way).
- Microsoft by ending, then by length, with a long list of exceptions "in accordance with customary practice" (MS): “In principle, use a long vowel when a source English term has following suffixes: -er, -or, -ar.” + 「コンピューター」 − 「コンピュータ」; “In other cases, use a long vowel when a corresponding Katakana word has less than 4 characters.”; its exceptions include 「コンパイラ」, 「プロセッサ」 and 「レジスタ」 without the mark and 「ポリシー」 and 「サマリー」 with it, and it writes 「メモリ」. This is the list Mozilla's "no exceptions like Microsoft's" refers to.
- The sources agree on ユーザー (Ubie, Mozilla, WordPress, Microsoft) and サーバー (Mozilla, WordPress), and no guide read writes ユーザ. That agreement is not checked here; JW-33 (the GK notice allows dropping the mark by custom) and JW-34 still apply.

#### UW-37 Inside a katakana compound: a space, a 中黒, or nothing
- Nothing (MZ): 「カタカナで構成された語句について、一般的な固有名詞を除き、間に中黒やスペースを挿入しない。」
- No 中点 as a principle, and one allowed where the break would be unclear; WordPress speaks only of 中点 (WP 5): 「カタカナの複合語には、用語集などで特に指定しないかぎり、原則として中点「・」は使用しない。」 「例外として、カタカナが続いて区切りがわかりにくくなる場合は、中点を使ってもかまわない。」 正 「ライブラリ・リファレンスマニュアル」
- A half-width space where the English words have a space, none where they have a hyphen (MS): “When there is a space between English words, insert a half-width space accordingly.” 「ダイアログ△ボックス」 「メニュー△コマンド」; + 「ページ△レイアウト」 − 「ページレイアウト」. The space may be dropped where room is short, if the screen stays consistent; 中黒 only in names such as 「トリニダード・トバゴ」. △ is the guide's own mark (MS): “A triangle (△) in an example means a half-width space.” These are statements in characters, not layout, and this side is the one place in the file where a spacing rule rests on quotes that are not of tier "web". The guide's own running text is not consistent: it also writes 「ダイアログボックスが表示されます。」.
- The three agree on no 中黒 in an ordinary compound (WordPress allows one where the break is unclear). With JW-35 (JTF: 中黒, space or nothing, chosen once per document).

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

#### UW-58 Apology in an error translated from English (with UW-11)
- WordPress drops it (WP 3-4): 「”Sorry, …” で始まるエラーメッセージは「すみません」とは訳さず、その部分を削除する」
- Microsoft translates "Sorry", which it says is used in errors that cause serious problems for the customer or when a product or service fails, as a formal apology in a sentence of its own (MS): “This is used in error messages that result in serious problems for the customer, or when a product or service fails. Translate to formal "申し訳ございません" to express sincere apology.”
- Both reject すみません; Microsoft only through its minus example, not in words. Neither says when to apologise, and no company guide or government page read does (writing/gaps.md).

#### UW-59 The polite お- and ご- forms of a few instructive verbs
- Microsoft recommends them for eight listed verbs, and says the note does not apply to other instructive verbs (MS): “For following instructive "...してください" phrases, try to use more polite expression than normal to be more empathetic and avoid sounding mechanical.” + 「ご確認ください」 − 「確認してください」; + 「お問い合わせください」 − 「問い合わせてください」. One listed pair is a different verb, not the polite form of the same one: + 「ご覧ください」 − 「参照してください」.
- SmartHR (SH-ws), under its rule against overusing keigo (KW-09), gives OK 「◯◯を確認してください。」 against NG 「◯◯をご確認いただけますようお願いいたします。」. That is an example, not a statement against Microsoft's plus form, and its OK form is Microsoft's minus form for this verb.
- Ubie's example uses the お- form for one of the listed verbs (UB): 「お手数ですが、こちらからお問い合わせください。」

## Left out

- **UW-45** (ellipsis as one character): not supported. The one counted source, Mozilla, prescribes three half-width dots (「三点リーダーは半角ドット 3 つ「...」を採用する。」 on the wiki); "one" rests on an OPTiM heading. JW-44 stands.
- **UW-69** (円 after the number or ¥ before it): one rule source, the Science Tokyo design system's writing guideline, for its own website, which says it is a reference for drafting and not a rule that must be followed (ISCT-scope 「ただし、本ガイドラインは絶対に守らなければならない規則ではありません。」). No company product guide and no government page read states 円 against ¥; the NTA's and SmartHR's examples write 円 after the amount (KW-68, KW-52). Not a rule, and not a house choice: nothing disagrees with it.
- Still without a source after both passes ([`../writing/gaps.md`](../writing/gaps.md), [`../writing2/gaps.md`](../writing2/gaps.md)): the choice between ください and お願いします, which pair of button labels answers which question, 。 on a button label, and Korean-to-Japanese faults.
