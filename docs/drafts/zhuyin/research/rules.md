# /zhuyin research — rule candidates (Chinese, Traditional, Taiwan)

Research draft, opened 2026-11-21. **No native reader from Taiwan has reviewed this file.** Region for every candidate: Taiwan (zh-TW), unless a line says otherwise. Lines marked *contrast* record Mainland (zh-CN) or Hong Kong (zh-Hant-HK) usage from a source that covers that region; they are there so the skill does not carry a rule across, never as rules for Taiwan.

## Read this first

- **No composed Chinese.** Every Chinese string below is a verbatim quote with a source key. Where a source gives no wrong/right pair, the candidate says "no pair in source". There are no illustrations of our own.
- **How quotes were taken.**
  - **MS** (Microsoft zh-TW localization style guide) was read in full from the local `pdftotext -layout` extract (`~/.omd-workers/lang-sources/ms-chinese-traditional-2026-11-21.txt`). MS quotes were checked by script as substrings of that file **after removing all whitespace**, so that check does not test spaces. Where a space carries the rule and the example sits on one line, it was also checked exactly, spaces included: 「4.2 版」, 「3 家 OEM」, 「無效的引數: %1」, 「按一下 [確定]。」, 「2021 年 3 月 14 日」, 「選取一或多個 Cookie」, 「%d 位使用者在線上」, 「是否要儲存對 %1 所做的變更?」, 「搜尋:」, 「重播 (&P)」, 「500–1000」. Strings marked *reassembled* span wrapped table cells: each piece was checked, not the joined whole. Pages 29, 36 and 37 were also checked against the rendered PDF page images (punctuation tables; spacing examples). Limits of the extract: bold and italic are lost, so the guide's 4.1.7 Wrong/Correct pairs are identical strings in the text and are **not** used as pairs here; table cells that wrap are interleaved with neighbouring columns, so long Chinese example cells are quoted only where they sit on one line or were checked on the page image; spaces inside Chinese examples are pdftotext's reading except on pp. 36-37, where the page image confirms them.
  - **Web sources** were read through WebFetch, which passes the page to an extraction model and caps each quote at about 125 characters. Prompts asked for exact text only. Glyph width (，vs ,  ：vs :  ？vs ?) in web quotes is **not verified at code-point level** unless the page itself names the code point (Mozilla names U+2026). A native reader should re-read each web quote on the page before the skill ships.
- **Kinds.** TYPO = checkable in CSS or rendered text; WRITE = wording, register, punctuation, notation.

## Strength labels

| Label | Meaning |
|---|---|
| STD | Required by a standard. **None in this file.** No Taiwan national standard (CNS) or ministry requirement was read; the MOE handbook and the 行政院 rules are unread (gaps.md). |
| CLREQ | W3C Requirements for Chinese Text Layout. The current text is a W3C Group Note Draft: descriptive, not normative. Marked **superseded draft** when the quote comes from the 2017 or 2020 Working Draft or the Traditional-Chinese editor's draft in the repository, because the current §6 could not be read. |
| LOCALE | Unicode CLDR locale data: what formatters output by default. Not a style rule. |
| reference | A W3C clreq repository file for implementers (font mappings), not part of the Note. |
| AUTH | Stated by a Taiwan government body or national language authority: 教育部 (Ministry of Education) dictionaries, 行政院 (Executive Yuan). |
| L10N(n/3) | Stated in n of the 3 localization guides for zh-TW read this round: **MS** Microsoft Chinese (Traditional) Localization Style Guide; **MZ** Mozilla zh-TW style guide; **WP** WordPress 台灣正體中文資訊本地化譯文樣式指南. Scope: software translated into Taiwan Chinese, not native product copy. A guide that is silent is not counted against; each candidate says which are silent. |
| PRAC(n/M) | Company or product design-system writing guides from Taiwan. **M = 0**: no public one was found (gaps.md lists the 14 companies searched). So no candidate carries a PRAC count. This absence is a finding. |
| pointer | Read, not counted: the l10n-tw community guide 自由軟體正體中文化翻譯風格指引 (HackMD), which neither MZ nor WP names as its reference and which calls itself 「指引並非「規範」」. |

**Counts (55 candidates, by the first label on each Strength line):** STD 0 · AUTH 2 (TW-21 MOE dictionary; TW-54 one agency) · L10N 39 (3/3: 4 — TW-24, TW-25 colon, TW-26, TW-34; 2/3: 6; 1/3 or split: 29) · CLREQ Note draft 5 · CLREQ superseded draft 5 · LOCALE 3 · reference 1 · PRAC 0 (M = 0). Recorded disagreements: TW-03, TW-25, TW-27, TW-28, TW-29, TW-33, TW-35, TW-36.

## Source keys

| Key | Source | Region it covers | URL |
|---|---|---|---|
| MS | Microsoft, *Chinese (Traditional) Localization Style Guide* (62 pp.; file name zho-twn-StyleGuide.pdf). Taiwan: the file is zho-twn and its normative references are the R.O.C. Ministry of Education dictionaries (1.1). | Taiwan | https://download.microsoft.com/download/2/9/3/293e6d41-ba40-451b-a41e-94bdb6242ae3/zho-twn-StyleGuide.pdf (from https://aka.ms/chinese-traditional-styleguide) |
| MS-S | Microsoft, *Chinese (Simplified) Localization Style Guide* (58 pp.), local extract `ms-chinese-simplified-2026-11-21.txt`. **Contrast only.** | Mainland | (local extract supplied by the orchestrator) |
| MZ | Mozilla, *Chinese, Traditional (zh-TW)* style guide (maintained by MozTW; no date on page) | Taiwan | https://mozilla-l10n.github.io/styleguides/zh-TW/ |
| MZ-mkt | Mozilla, Firefox 文案本地化指南 (zh-TW) | Taiwan | https://mozilla-l10n.github.io/styleguides/zh-TW/firefox_marketing.html |
| WP | WordPress 台灣正體中文 team, 台灣正體中文資訊本地化譯文樣式指南 (last modified 2025 年 10 月 13 日 per extraction) | Taiwan | https://tw.wordpress.org/team/handbook/localization/zh-tw-localization-style-guide/ |
| MOE-2A | 教育部《國語辭典簡編本》2021, 附錄「兩岸常用詞語對照表」, pages 1-7 (data from 中華語文知識庫／兩岸差異用詞, 中華文化總會) | Taiwan term vs Mainland term | https://dict.concised.moe.edu.tw/appendix.jsp?ID=54 |
| CLDR-G | Unicode CLDR, zh-Hant Gregorian calendar data (cldr-json, main branch, opened 2026-11-21). zh_Hant_TW.xml holds only an identity block, so Taiwan inherits zh-Hant unchanged. | Taiwan (by inheritance) | https://raw.githubusercontent.com/unicode-org/cldr-json/main/cldr-json/cldr-dates-full/main/zh-Hant/ca-gregorian.json |
| CLDR-ROC | CLDR zh-Hant ROC (民國) calendar data | Taiwan | https://raw.githubusercontent.com/unicode-org/cldr-json/main/cldr-json/cldr-cal-roc-full/main/zh-Hant/ca-roc.json |
| CLDR-N / CLDR-C | CLDR zh-Hant numbers / currencies | Taiwan (by inheritance) | …/cldr-numbers-full/main/zh-Hant/numbers.json, …/currencies.json |
| CLDR-HK | CLDR zh-Hant-HK Gregorian data. **Contrast only.** | Hong Kong | https://raw.githubusercontent.com/unicode-org/cldr-json/main/cldr-json/cldr-dates-full/main/zh-Hant-HK/ca-gregorian.json |
| L10NTW | 自由軟體正體中文化翻譯風格指引 (Cheng-Chia Tseng, 2024-2026). **pointer** | Taiwan | https://hackmd.io/@l10n-tw/translation_style_guide |

**Stated priority inside MS (record, do not resolve).** MS 1.1 lists the MOE Revised Handbook of Punctuation as an *informative* reference and says: "(For reference only; the rules described in the style guide have higher priority if there is discrepancy.)" MZ instead opens its punctuation section with 「使用中華民國教育部出版之《重訂標點符號手冊》修訂版當中的標點符號。」 (MZ 標點符號). The MOE handbook itself could not be read this round (gaps.md), so every punctuation candidate below is from localization guides only; what the MOE handbook says on each mark is unread.


# Half A — UX writing

## A1. Register and address (您 / 你; how the product names the user and itself)

#### TW-01 Address the user as 您 in product UI
- Kind: WRITE. Region: Taiwan.
- MS 2.1 Choices that reflect Microsoft voice: "Always use the polite form 您 for "You" in all of the software products." Example: "You are now connected to the Internet." → 「您現在已連線到網際網路。」
- MS 2.1.4 Words and phrases to avoid: "Use 您 instead of 你 for "you" (singular), use 你們 instead of 您們 for "you" (plural)."
- MZ 共同項目: 「遇到 “you” 時，一般情形下使用敬語「您」。若原文沒有那麼嚴肅可視情況使用「你」，但產品內仍應使用「您」。」
- WP: silent on 您/你 (checked twice; NOT PRESENT).
- *Contrast, Mainland:* MS-S 4.1.12 Pronouns: "If it’s needed, use "你" instead of "您."" Microsoft's two Chinese guides give opposite rules, so a 您/你 choice must not be carried from a Mainland source.
- Wrong/right pair: no pair in source (MS gives only the right form).
- Test: script — in UI strings, flag singular 你 (not followed by 們); FYI where 您 and 你 both occur in one product. Mozilla allows 你 outside the product (e.g. less serious marketing text), so scope the check to product UI.
- Strength: L10N(2/3) (MS, MZ; WP silent). No native Taiwan company guide found (PRAC M = 0).

#### TW-02 Plural "you" is 你們, not 您們
- Kind: WRITE.
- MS 2.1.4: "use 你們 instead of 您們 for "you" (plural)."
- Test: script — flag 您們.
- Strength: L10N(1/3) (MZ, WP silent).

#### TW-03 Tone: MS says conversational and friendly; WP says make casual English more rigorous (DISAGREE)
- Kind: WRITE (judgment).
- MS 2.1: "The general style should be clear, friendly and concise. Use language that resembles conversation observed in everyday settings as opposed to the formal, technical language that is often used for technical and commercial content."
- MS 5.7.2 Tone: "The tone to be used when localizing in Traditional Chinese should be semi-formal and friendly."
- WP 句型語氣修正: 「實務上，原文內容無論是介面字串或文件內容，都應保持較為嚴謹的口氣及態度，」 … 「請在翻譯成台灣中文內容時加以轉換，改為較為嚴謹的方式展示譯文。」 (the section is about English source strings written too casually by newer tech companies).
- MZ-mkt (marketing copy): 「我們希望使用者感覺沒有距離，我們會使用所有人都能理解的詞語和概念。」 and 「我們喜歡兩個短句，而不是一個長句。」
- Record both; do not pick. The two can coexist (semi-formal, friendly, not slangy), but a native reviewer should decide where the skill sits.
- Test: judgment only.
- Strength: L10N — MS and WP state opposite directions; MZ-mkt (marketing) sides with plain, close wording.

#### TW-04 Put 請 before an instruction to the user
- Kind: WRITE.
- MS 2.2.1 Address the user to take action: "In most cases, adding 請 before imperative verbs will make the voice more polite and the meaning clearer. For example, translate "Input password" into "請輸入密碼" is much better than "輸入密碼"。"
- Pair from source: wrong 「輸入密碼」 → right 「請輸入密碼」 (MS 2.2.1).
- MS 2.1.4: "Use 請 as necessary to make sentence more understandable."
- Test: script — FYI on input placeholders / helper text that start with a bare verb; judgment for buttons (no source read gives a rule for buttons; see the A2 finding).
- Strength: L10N(1/3) (MZ, WP silent).

#### TW-05 Prefer everyday forms over formal ones (如果 over 倘若, 無需 over 毋需, short forms)
- Kind: WRITE.
- MS 4.1.5 Conjunctions: "For example, 「如果」sounds more conversational than「倘若」."
- MS 2.1.4 table: old 「毋需」 → new 「無需」.
- MS 4.1.6 Contractions table (long → contracted): 「以防萬一」→「以免」, 「總而言之」→「總之」, 「但是 / 不過」→「但」, 「已經」→「已」.
- MS 2.1.2: 「客服」 — "Use 客服 instead of 客戶服務"; and "For example, use "您的電腦" instead of "您的 PC.""
- Test: script — word list (倘若, 毋需) FYI.
- Strength: L10N(1/3).

#### TW-06 The product may speak as 我們 ("we")
- Kind: WRITE.
- MS 2.2.1 example: "activate Windows for you." → 「…我們將會為您啟用 Windows。」 (target cell wraps across lines in the extract; reassembled from 3 lines); MS 2.2.2 explanation column: "Use of "we" provides a more personal feel." (comment column, reassembled across 3 lines; each piece checked)
- MZ, WP: silent on how the product refers to itself.
- Test: judgment only.
- Strength: L10N(1/3). No other source read addresses the product's self-reference.

#### TW-07 Do not use gendered pronouns for a generic person; avoid 它
- Kind: WRITE.
- MS 3.1: "Don't use gendered pronouns (她/他, 她們/他們, 她的/他的 etc.) in generic references." Instead: "Rewrite to use the second or third person (您 or 其)." and "Use articles instead of a pronoun (for example, 其文件 instead of 他的文件)."
- MS 4.2.6 Pronouns (comment column): "Avoid using non-human pronoun 它. If necessary, use 其" (comment column, reassembled across 3 lines; each piece checked).
- Pair from source: 「當作者開啟她的文件時…」 → 「當作者開啟其文件時…」 (MS 3.1 table; the target cells wrap, reassembled).
- Test: script — flag 他/她 in UI strings referring to "the user"; flag 它.
- Strength: L10N(1/3).

#### TW-08 Inclusive and non-stigmatising terms (Microsoft's list)
- Kind: WRITE.
- MS 3 Inclusive language table (use → not): 「主要/次要」 not 「主/從」; 「封鎖清單/允許清單」 not 「黑名單/白名單」 (cell wraps; reassembled); 「周邊網路」 not 「非軍事區 (DMZ)」; 「停止回應」 not 「死當」; 「移工」 not 「外勞」; 「家長」 not 「母親或父親」.
- MS 3.2 Accessibility: 「身心障礙人士」 not 「殘障人士; 殘廢」 (cells wrap, reassembled); 「聽障」 not 「聾子」; "Don't use words that imply pity, such as 患有 or 受... 之苦."
- MS 3.2: generic verbs — 「選取」 not 「按一下」 for Select vs Click.
- Test: script — word list.
- Strength: L10N(1/3).

#### TW-09 Avoid the passive 被; name who does the action
- Kind: WRITE.
- MS 4.2.11 Syntax: "In Traditional Chinese, passive voice is avoided."
- Pair from source: "The file is saved automatically." (-) 「會自動儲存檔案。」 → (+) 「系統會自動儲存檔案。」, with the note "Avoid using 會...。pattern with 會 beginning a sentence." And (-) 「檔案會自動被儲存。」 → (+) 「檔案會自動儲存。」 (MS 4.2.11; table cells wrap, reassembled).
- Test: script — flag 被 in UI strings (FYI); flag a sentence that begins with 會.
- Strength: L10N(1/3).

#### TW-10 Ongoing operations: 正在… rather than …中
- Kind: WRITE.
- MS 4.2.12 Verbs: "Continuous operations are usually expressed in English with a gerund, which should be translated into Traditional Chinese with the pattern 正在..."
- Pair from source: "Saving text file…" (+) 「正在儲存文字檔案...」 / (-) 「儲存文字檔案中...」; "Completing installation…" (+) 「正在完成安裝...」 / (-) 「完成安裝中...」 (cells wrap; reassembled). Not for titles: "Using Paint" (+) 「使用小畫家」 (-) 「正在使用小畫家」.
- Test: script — progress strings ending in 中 followed by an ellipsis: FYI.
- Strength: L10N(1/3).

#### TW-11 Do not translate every "your"; cut surplus 的
- Kind: WRITE.
- MS 4.1.3: "However in Traditional Chinese, avoid translating every possessive adjective, even if it is present in English." and "Also, avoid using too many 的 in a sentence. If the meaning is not affected, omit 的 for readability."
- MS 4.2.6: "In general, you do not have to translate every pronoun into Traditional Chinese."
- Test: script — count of 您的 per string, count of 的 per sentence: FYI.
- Strength: L10N(1/3).

## A2. Buttons, labels, menus and UI references

**Finding first:** none of the three localization guides gives a rule for the *form* of a button label (verb vs noun, length, whether 請 belongs on a button). No Taiwan company guide was found. Button wording for Taiwan is a gap (gaps.md). The only Taiwan-native data point is one agency's 2019 site guideline (TIPO), which shows example labels without a rule: primary 「下一步、確認、儲存」, secondary 「取消、清除重填、返回」 (TW-54). What the localization sources do give:

#### TW-12 Standard command names (Microsoft's Taiwan forms)
- Kind: WRITE (terminology).
- MS 5.6.6 Standard shortcut keys, Traditional Chinese command column: 「檔案 > 開新檔案」, 「檔案 > 開啟舊檔」, 「檔案 > 關閉檔案」, 「檔案 > 儲存檔案」, 「檔案 > 另存新檔」, 「檔案 > 預覽列印」, 「檔案 > 列印」, 「檔案 > 結束」, 「編輯 > 復原」, 「編輯 > 重複」, 「編輯 > 剪下」, 「編輯 > 複製」, 「編輯 > 貼上」, 「編輯 > 刪除」, 「編輯 > 全選」, 「編輯 > 尋找」, 「編輯 > 取代」, 「說明」, 「取消」.
- MS 5.6.8 examples: 「按一下 [確定]。」 (Click OK.)
- MS 4.1.2 Localized acronyms: AM → 「上午」, PM → 「下午」, ID → 「識別碼」.
- *Contrast, Mainland:* MS-S keyboard-shortcut section (p. 48 of 58) examples 「退出(&E)」 and 「打印(&I)」 where MS (Taiwan) has 「結束(&E)」 and 「列印(&I)」.
- Test: script — word list of Mainland forms where the Taiwan form is sourced (see TW-21 for MOE pairs).
- Strength: L10N(1/3) for the Microsoft command set (Windows conventions).

#### TW-13 In running text, put a UI element's name in half-width square brackets [ ]
- Kind: WRITE.
- MS 5.6.8 User interface: "When localizing UI terms in software strings, enclose UI terms with square brackets ([ ])." Example: 「按一下 [確定]。」; check box: 「選取 [大小寫須相符] 核取方塊。」
- MS 4.2.7 Quotation marks: "UI: In US source strings, you may find software references surrounded by English quotation marks. In Traditional Chinese, UI should be enclosed with [ ]"
- WP: 「請使用半形方括號 [ 及 ] 包覆可點擊的介面字串，且每次內容有提及，均仍以同樣標示法標示。」 Example (WP 可點擊的介面字串標示法) 「請前往 [控制台]，然後點擊 [設定][永久連結]。」 (WP's spacing section has a shorter example line, 「範例：點擊 [設定][永久連結]。」; both appear on the page.)
- MZ: 「文件中若提及某軟體或產品內的功能，應依照該軟體內的文字翻譯。」 (consistency only; no bracket rule).
- Not bracketed (MS 5.6.8 table): icons, uncapitalised views and windows, programs, files, locations, URLs.
- Pair from source: none (MS shows only the right form).
- Test: script — in help/docs strings, a quoted UI label in “” or 「」 that matches a known button label: FYI.
- Strength: L10N(2/3) (MS, WP; MZ silent on brackets).

#### TW-14 Access keys on desktop menus: 文字(&X), no space, uppercase (desktop software only)
- Kind: WRITE.
- MS 5.6.3: "No space is needed between the translated text and ( )" Pairs from source: 「結束(&E)」 not 「結束(E)」; 「列印(&I)」 not 「列印(&i)」; 「重播(&P)」 not 「重播 (&P)」. Shortcut goes before ":" ">" "..." (「搜尋(&S):」, 「關於(&B)...」) and after "!" "?" (「開始!(&S)」).
- Test: script — regex on .rc/.resx style strings.
- Strength: L10N(1/3). Web UIs rarely have access keys; keep out of the web skill unless desktop is in scope.

#### TW-15 A link to a page that is not in Chinese ends with (英文); a machine-translated page with (機器翻譯)
- Kind: WRITE.
- MS 5.4: "please translate the link text and add (英文) at the end of the text so the users know they are going to be directed to a unlocalized website." and "please translate the link text on your own and add (機器翻譯) at the end of the text".
- Test: script — links whose href is an English-locale URL and whose text lacks (英文): FYI.
- Strength: L10N(1/3).

#### TW-16 Version strings: number before 版
- Kind: WRITE.
- MS 5.2: "Version 4.2" → 「4.2 版」.
- Strength: L10N(1/3).

#### TW-17 Key names
- Kind: WRITE.
- MS 5.6.4 Key names: 「退格鍵」 (Backspace), 「向下鍵」 「向左鍵」 「向右鍵」 「向上鍵」 (arrows), 「空格鍵」 (Spacebar), 「Windows 鍵」, 「功能表鍵」 (menu key); Alt, Enter, Esc, Shift, Tab, Delete, Home, End and others stay in English. Note the table maps Ctrl to "Control".
- Strength: L10N(1/3).

## A3. Error, confirmation, success and empty-state messages

**Finding first:** only MS gives message rules. MZ and WP have no error-message section (NOT PRESENT in both). No source read says whether to apologise in an error, and no source covers empty states or success toasts as such. Those are gaps.

#### TW-18 Standard phrases for error messages (Microsoft's set)
- Kind: WRITE.
- MS 5.6.2 Error messages: "When translating standard phrases, standardize." Table (English → target): "Cannot … / Could not …" → 「無法...」 (「無法刪除檔案。」); "Failed to …" → 「無法...」 ("Recommended translation."); "Cannot find … / Unable to locate …" → 「找不到...」 (「找不到資料來源。」); "Not enough memory / Insufficient memory" → 「記憶體不足」, with "If another phrase is attached to this type of strings, use "無法+Verb"" (「記憶體不足，無法執行此項作業。」, cell reassembled); "... is not available" → 「無法使用...」; "You might want to…" → 「建議您...」 — "Please avoid 您可能想要...".
- MS 5.6.2: "In the US product you can often find messages that are phrased differently even though they have the same meaning. Try to avoid this in the localized Traditional Chinese version." Examples: 「按 F1 取得更多說明」, 「記憶體不足」, 「是否要儲存對 %1 所做的變更?」.
- Test: script — word list: 您可能想要 flag.
- Strength: L10N(1/3).

#### TW-19 Say what happened, then what to do, in short friendly sentences
- Kind: WRITE (judgment).
- MS 2.2.1 pairs (English → target, with Microsoft's explanation): "The password isn’t correct, so try again. Passwords are case-sensitive." → 「密碼不正確，請再試一次。」 「密碼需區分大小寫。」 — explanation: "provide the user with a short and friendly message with the action to try again" (explanation column, reassembled). "This product key didn’t work. Check it and try again." → 「這個產品金鑰無效，請檢查一下然後再試一次。」 (target cell reassembled across 2 lines).
- MS 5.6.2: "translators are encouraged to apply them to ensure target translation is more natural, empathetic and not robot-like."
- Confirmation question pattern in MS examples: "Would you like to continue?" → 「請問您是否繼續?」 (MS 2.2.1); "Do you want to save changes to %1?" → 「是否要儲存對 %1 所做的變更?」 (MS 5.6.2). Note both end in half-width "?" (U+003F), consistent with MS's software punctuation table (TW-24).
- Success: "All ready to go" → 「已經可以開始執行」 (MS 2.2.1, "Casual and short message").
- Test: judgment only.
- Strength: L10N(1/3).

#### TW-20 Counted placeholders take a measure word
- Kind: WRITE.
- MS 5.6.2: ""Measure word", such as 位, 部, 本, 個, is needed if the placeholder means <number>." Example "%d users are online." → 「%d 位使用者在線上。」 (target cell wraps before 。).
- MS 5.6.2: "No space is needed if the placeholder is to be replaced with a localized string."
- MZ 共同項目 (per extraction, not quoted verbatim): Chinese has no plural, so the plural half of a plural string can be ignored, but check whether the number varies.
- Test: script — %d / {count} directly followed by a noun with no measure word: FYI (needs a measure-word list).
- Strength: L10N(1/3).

## A4. Terminology: Taiwan terms, not Mainland terms

#### TW-21 Use the Taiwan word where the Ministry of Education lists a Taiwan/Mainland pair
- Kind: WRITE.
- MOE-2A, 教育部《國語辭典簡編本》附錄「兩岸常用詞語對照表」, columns 「臺灣語詞」 | 「大陸語詞」; source note: 「(1)中華語文知識庫／兩岸差異用詞（中華文化總會授權提供）」. Rows on computing, phones and the internet found on pages 1-7 (Taiwan | Mainland, as extracted; the Mainland column is printed in Traditional characters):
  - 軟體 | 軟件; 硬體 | 硬件; 程式 | 程序; 程式員 | 程序員; 除錯 | 調試
  - 資料 | 數據; 資料庫 | 數據庫; 資訊 | 信息; 資訊化 | 信息化
  - 網路 | 網絡; 網際網路 | 互聯網; 部落格 | 博客; 微網誌 | 微博; 首頁 | 主頁; 寬頻 | 寬帶; 埠 | 端口
  - 伺服器 | 服務器; 作業系統 | 操作系統; 記憶體 | 存儲器; 快閃記憶體 | 閃存; 硬碟 | 硬盤／硬磁片; 隨身碟 | U盤／閃存盤; 解析度 | 分辨率
  - 螢幕 | 屏幕／螢屏／視屏／螢光屏; 游標 | 光標; 滑鼠 | 鼠標／鼠標器; 字元 | 字符; 位元 | 二進位數字／比特
  - 列印 | 打印; 印表機 | 打印機; 剪貼簿 | 剪貼板; 解除安裝 | 卸載; 當機 | 死機; 啟動 | 激活
  - 簡訊 | 短訊息／短信／短資訊／短消息; 智慧型手機 | 智能機; 筆記型電腦 | 筆記本電腦; 數位相機 | 數字相機／數碼相機; 人工智慧 | 人工智能
- MZ 共同項目: 「不要使用機器翻譯。亦請注意需符合台灣人常用的語法。（例：o網路 x互聯網）」 (agrees with the MOE pair 網際網路 | 互聯網 / 網路 | 網絡).
- WP 不得使用的字彙 (per extraction; heading as returned): 「非台灣繁體中文的其他中文變體字彙」 and 「其他非標準字彙。例如「插件」、「主題」、「版型」、「模版」、「語言包」等字彙。」 — WP does not pair these with replacements in that section.
- Caution: the pairs above came through the extraction model reading a two-column table; one extraction warned that the pairing on page 2 "may not be exact". Re-read each row on the page before it becomes a word list. One row on page 1 (「目錄」 | 「選單／功能表／菜單」) looked mis-paired and is left out.
- Test: script — flag the Mainland column terms in UI strings, written in Traditional characters (軟件, 數據, 信息, 互聯網, 打印, 鼠標 …), since a zh-TW file that went through simplified→traditional conversion keeps Mainland vocabulary in Traditional characters. Watch false positives: L10NTW (pointer) records 「程序」 as the Windows 95–Vista translation of "process" in Taiwan (「（Win 95-Vista) 或「處理程序」(Win 7-Win 11)」, per extraction), so a Mainland-column word is not always a Mainland usage in Taiwan text.
- Strength: AUTH (MOE dictionary appendix) + L10N(2/3) for the principle (MZ, WP).

#### TW-22 Do not use internet slang in product text
- Kind: WRITE.
- MS 4.2.2, "Samples of unacceptable Traditional Chinese colloquialisms": 「冏」, 「就醬」, 「LKK」, 「童鞋」, 「監介」, 「釀」, 「矮油」. Acceptable samples: 「粉絲」, 「達人」, 「菜鳥」, 「宅」, 「一舉兩得」, 「量身打造」.
- MZ: 「可適度使用成語，但請力求淺顯易懂。」
- Test: script — word list (unacceptable list) flag.
- Strength: L10N(1/3) for the list; MZ adds the idiom principle.

#### TW-23 Acronyms: keep alone; with a full name write 中文 (ACRONYM); drop a plural s
- Kind: WRITE.
- MS 4.1.2: "If an acronym is used alone, please leave it as it is." … "If an acronym goes after a full name, please follow the format: Traditional Chinese (English acronym)". Pair: 「人性化介面裝置 (HID)」 used alone where the source has only "HID" is the error; 「HID」 is correct. Plural: wrong 「數個 IFSs」 → right 「數個 IFS」; wrong 「3 家 OEMs」 → right 「3 家 OEM」.
- MS 4.2.9: untranslated generic words drop the plural s and take a capital: 「選取一或多個 Cookie」 (verified on page image, p. 36).
- Strength: L10N(1/3).

## A5. Punctuation in UI text

Code points below are computed from the MS extract and match the rendered page image (MS p. 29). Web-source glyphs are as extracted and not code-point verified.

#### TW-24 Chinese sentences take full-width ，。、 and 「」《》
- Kind: WRITE (checkable by script).
- MS 4.2.7 Punctuation, table "For Software": full-width column 「，」 U+FF0C, 「。」 U+3002, 「、」 U+3001, 「《》」 U+300A/U+300B, 「＜＞」 U+FF1C/U+FF1E, 「「」」 U+300C/U+300D; half-width column ":" U+003A, ";" U+003B, "!" U+0021, "?" U+003F, "()" U+0028/U+0029, "[]" U+005B/U+005D. Table "For Documentation": half-width only "()" and "[]"; full-width ，。、《》＜＞「」 plus 「：」 U+FF1A, 「；」 U+FF1B, 「！」 U+FF01, 「？」 U+FF1F.
- MS 4.2.7: "Traditional Chinese comma (，) is used in both software and document localization." and "Traditional Chinese period (。) is used in both software and document localization."
- WP 半形字元及全形字元: 「標點符號：，、。？！「」『』。請注意，標點符號一律使用橫向符號。」; WP 不要誤用、沿用英文內容的逗號及句號: 「請不要直接沿用英文內容中的「半形」標點符號，除非是為示範原文怎麼寫。」
- MZ: 「“.” 作為句點應譯為「。」、“ 作為引號，應翻譯為「」。」 and 「依照文字語言使用相對應的標點符號。」
- Exception (MS 4.2.7, comment column): "English commas are kept if most of the elements in a string are not localizable." Example: 「內容必須是 "empty", "eltOnly", "textOnly" 或 "mixed" 型別。」 (cell reassembled). WP: 「而這種分隔字串間的逗號，本就是使用半形逗號，而不能使用全形逗號。」
- Test: script — in a run of Han text, flag U+002C "," and U+002E "." between two Han characters or after a Han character at sentence end.
- Strength: L10N(3/3) for full-width ，。; the MOE handbook (AUTH) could not be opened.

#### TW-25 Colon, semicolon, ! and ? in UI: the three guides DISAGREE in part
- Kind: WRITE.
- Colon — all three say half-width in UI:
  - MS 4.2.7 Colon: "Use English colon (:) when translating UI. Traditional Chinese colon (：) is used in documentation, Help and web pages." Examples: 「無效的引數: %1」 (software) / 「若要啟用產品，請遵循下列步驟：」 (document; cell reassembled).
  - MZ: 「無論句子語言為何，句尾冒號使用半形冒號「:」，而非全形冒號「：」。」
  - WP: 「如果英文原文使用了半形冒號，在台灣中文譯文中，介面譯文與文件譯文的冒號使用，前者沿用半形冒號，後者使用全形冒號。」
- Exclamation and question marks — DISAGREE:
  - MS software table: "!" and "?" half-width in software; full-width ！？ in documentation (TW-24).
  - WP: 「在台灣中文譯文中請使用全形問號。」 and 「在台灣中文譯文中請使用全形驚嘆號。」 (no UI/doc split stated for these).
  - MZ: silent.
- Note: MS says "Traditional Chinese colon (：) is used in … web pages", so for a website MS itself points to ：, while MZ says half-width at the end of a sentence regardless.
- Record all sides; do not pick. MZ says it follows the MOE handbook; MS ranks its own rules above the handbook (see the header). The handbook itself is unread.
- Test: script — report (not flag) the colon/！？ width per string, and flag mixing of both widths inside one product.
- Strength: L10N(3/3) agree on half-width colon in UI; L10N split 1 vs 1 on ！？.

#### TW-26 Quotation marks: 「」 outside, 『』 inside; not “”
- Kind: WRITE.
- MS 4.2.7: "Quoted passage, new terms and emphasis: Use「」for these scenarios." Example 「...到「全球資訊網」上查看。全球資訊網是...」 (cell reassembled).
- MZ: 「“ 作為引號，應翻譯為「」。」; and 「注意 Gettext 的跳脫符號 \\，例如 "%s" 應翻譯為「%s」，但若能確定該參數會顯示的內容語言非中文時則保留使用跳脫符號與引號。」 (per extraction).
- WP lists 「「」『』」 among the full-width marks (TW-24).
- Exceptions (MS): properties, reserved words and parameters keep English quotation marks; UI names take [ ] (TW-13).
- Test: script — U+201C/U+201D or U+0022 around Han text: flag.
- Strength: L10N(3/3).

#### TW-27 Book and chapter titles: 《》 for books; chapter/page titles DISAGREE on the bracket
- Kind: WRITE.
- MS 4.2.7: "Titles of user guides, chapters and sections: Use《》for books, manuals, etc. Use ＜＞ for chapters and sections". Example 「…請參閱第四章＜程式寫作基礎＞裡的＜特殊字元＞一節。」 (cell reassembled). Code points: ＜ U+FF1C, ＞ U+FF1E.
- WP: 「網站視為書籍，網站名稱使用《》包覆。」 and 「單篇頁面視為章節，頁面標題使用〈〉包覆。」 (〈〉 as extracted; code point not verified — U+3008/U+3009 expected).
- MS uses full-width less-than/greater-than signs ＜＞ for chapters; WP uses 〈〉. Record both.
- Test: script — FYI.
- Strength: L10N(2/3) on 《》; split on chapter marks.

#### TW-28 Enumeration comma 、 between items in a Chinese list (DISAGREE on items in English)
- Kind: WRITE.
- MS 4.2.7 Comma: "Note comma is used when enumerating several items in English while pause symbol (、) is used in Traditional Chinese." Pattern: "Please note the pattern for this kind of sentence is 、...、...，以及" (comment column, reassembled).
- WP 台灣中文還有頓號: 「英文沒有頓號，但在台灣中文可以使用能區隔同級字彙的全形頓號。」 Example: 「輸入如 USD、INR、AUD、EUR、GBP 之類的貨幣代碼。」
- Disagreement on items that are English: MS keeps English commas between English names — 「Microsoft, Windows, Outlook, PowerPoint, Azure 及 Xbox Game Pass …」 ("Keep the English commas as is in this context.", reassembled); WP's own example puts 、 between English currency codes.
- Test: script — "," between two Han words: flag; between Latin tokens inside Chinese: FYI.
- Strength: L10N(2/3).

#### TW-29 Ellipsis: the guides DISAGREE (… once, ... , or the MOE form)
- Kind: WRITE.
- MS 4.2.7 Ellipses: "English (...) is used in both software and document localization." (three U+002E). MS examples in fact mix: 「正在儲存文字檔案...」 (MS 4.2.12; reassembled) and 「如需快速瀏覽網頁 …」 (MS 2.1.3, U+2026).
- MZ: 「刪節號應譯為「…」(U+2026)，可使用一組就好。」 (MZ names the code point.)
- WP: silent. L10NTW (pointer) uses 「⋯⋯」 (U+22EF twice) in its own prose, per extraction; no rule.
- The MOE handbook form could not be read (gaps.md). Record all; do not pick.
- Test: script — report the ellipsis form used; flag mixing of forms within one product.
- Strength: L10N split (MS "..." vs MZ "…").

#### TW-30 Do not use the em dash — in Chinese text
- Kind: WRITE.
- MS 4.2.7 Em Dash: "In Traditional Chinese, it should not be used as it looks the same as the Traditional Chinese character for "one" (一)." … "If punctuation is needed, you may want to use ( ), ：or en dash to emphasize the element." MS 2.2.3 comment: "Avoid use of the Chinese dash and replace it with colons, commas or parentheses instead." (reassembled).
- En dash in number ranges kept: 「500–1000」 (U+2013); or 「至」: 「持續性效能已提升 2.5 至 3.0 倍。」
- Test: script — U+2014 in Han text: flag.
- Strength: L10N(1/3).

#### TW-31 Parentheses: half-width ( ) with no inner space (MS); the MOE handbook was not read
- Kind: WRITE.
- MS 4.2.7 Parentheses: "English parentheses ( ) is used in both software and document localization." "There is no space between the parentheses and the text inside them."
- Period after a parenthetical: "Wizard mode. (Default if no other parameters are specified.)" → 「精靈模式 (未指定其他參數時為預設值)。」 (MS 4.2.7 Period; cell reassembled).
- WP's spacing section treats 「半形括號包覆的文字內容」 as a case of its own (TW-34), so WP also writes half-width parentheses.
- L10NTW (pointer) writes full-width （） in its prose. No rule seen.
- Strength: L10N(1/3) explicit (MS); WP implied.

#### TW-32 No italics in Chinese; use bold, or 《》 for titles
- Kind: TYPO / WRITE.
- MS 4.1.7: "Bold and Italic style should be avoided for Traditional Chinese characters." "Italic style should be removed for localized book name and 《》must be used to quote the book name". Exceptions: bold headings and bold emphasis kept; "Italic style for placeholders should be replaced with BOLD style." (The guide's Wrong/Correct example lines differ only in formatting, which the text extract loses; they are not used here.)
- MS 4.2.1: "Italic style in English sentences should be replaced by normal style."
- WP: 「台灣中文譯文不可以使用「斜體」樣式，如果在原文中遇到以 i 或 em 標籤強調的內容或單字，請改用 strong 標籤以粗體強調。」
- Test: script — CSS `font-style: italic` on elements with Han text; `<i>`/`<em>` around Han text: flag.
- Strength: L10N(2/3) (MS, WP; MZ silent).

#### TW-33 English "!" in informational text usually becomes 。
- Kind: WRITE.
- WP 半形驚嘆號的使用: 「請注意，由於語言文化不同，多數英文資訊類原文中的驚嘆號，大多只需要譯為全形句號。」
- MS 2.2.2 shows the opposite in one example: "Something bad happened!" → 「發生一些問題!」 (half-width !, kept).
- Test: script — FYI on ! / ！ in non-marketing UI strings.
- Strength: L10N(1/3) (WP); MS example goes the other way.

## A6. Spacing between Chinese and Latin letters or digits (in the text itself)

This is the *writing* convention (a literal U+0020 in the string). The *typesetting* view (spacing added by the renderer) is in half B (CLREQ).

#### TW-34 A half-width space between Han characters and Latin letters or digits; none next to full-width punctuation
- Kind: WRITE (checkable by script).
- MS 4.2.10 Spacing: "Half-width space needed between Chinese characters and English letters or numbers" Pairs from source (verified on page image, p. 36): Incorrect 「序列化程式無法處理不明的xsi:type 資訊。」 → Correct 「序列化程式無法處理不明的 xsi:type 資訊。」; "March 14, 2021" → 「2021 年 3 月 14 日」.
- MS 4.2.10: "No space needed around Chinese full-width punctuation marks" (p. 37).
- MZ: 「中文字、標點符號與半形英數、符號字元間需用半形空格隔開，但與全形符號間則免。」 Example: 「例如：「這是 Firefox」的「是」與「F」間有使用空格隔開，而「對於使用者，Mozilla」當中的「，」與「M」間則沒有空格。」 (The first sentence as extracted lists 標點符號 among the things spaced, but its own example shows no space after 「，」; re-read on the page.)
- WP 半形字元遇上全形中文: 「這種情況一律空一個半形空格，但是由半形方括號包覆的介面譯文、半形括號包覆的文字內容是例外狀況。」 Example: 「範例：點擊 [設定][永久連結]。」; 半形字元遇上全形符號: 「這種狀況不須加上半形空格。」 Example: 「Permalink 就是「永久連結」(Google 台灣的官方譯文)。」
- Test: script — regex `[\p{Script=Han}][A-Za-z0-9]|[A-Za-z0-9][\p{Script=Han}]` in UI strings: flag; `[，。、；：！？「」『』（）] ` or ` [，。、；：！？「」『』（）]`: flag.
- Strength: L10N(3/3).

#### TW-35 Half-width brackets and parentheses next to Han: MS is explicit; WP's exception is unclear (possible disagreement)
- Kind: WRITE.
- MS 4.2.10: "Half-width space needed between Chinese characters and half-width punctuations: ( ), [ ]" Pairs (verified on page image, p. 37): Incorrect 「若使用協力廠商(非Windows) 防火牆或」 → Correct 「若使用協力廠商 (非Windows) 防火牆或」; Incorrect 「以滑鼠右鍵按一下[RFID 處理程序]。」 → Correct 「以滑鼠右鍵按一下 [RFID 處理程序]。」 Note that MS's own Correct line has no space between 「非」 and "Windows" inside the parentheses.
- MS 4.2.10: "However, the above rule does not apply to : ; ! ?" Example 「搜尋:」 and 「遠端 ADO 錯誤: BOF 或 EOF 為 True，」 — "In this case, no space before : and ; the space after them are kept as is." (reassembled).
- WP names text inside half-width square brackets and half-width parentheses as the *exception* to its spacing rule (quote in TW-34). Its examples: 「點擊 [設定][永久連結]。」 (space before the first [, none between ][) and 「「永久連結」(Google 台灣的官方譯文)。」 (no space between 」 and ( because 」 is full-width).
- A second narrow fetch of the WP subsection returned no text explaining the exception (NOT PRESENT); its example has a space before the first [ and none between ][ or before 。. So whether WP disagrees with MS cannot be settled from the page text. Record both.
- Test: script — report only.
- Strength: L10N(1/3) each side.

#### TW-36 Dates written with spaces (MS) vs without (CLDR): DISAGREE
- Kind: WRITE.
- MS 4.2.10: "March 14, 2021" → 「2021 年 3 月 14 日」 (spaces between digits and 年月日; verified on page image).
- CLDR-G long date pattern: "y年M月d日" (no spaces). What an `Intl.DateTimeFormat('zh-TW', {dateStyle:'long'})` call outputs follows CLDR.
- Record both; do not pick. The difference matters for a checker: TW-34's regex would flag CLDR output.
- Strength: L10N(1/3) vs LOCALE.

## A7. Numbers, dates, time, currency and units

**Finding first:** the 行政院 rule on numerals in official documents (公文書橫式書寫數字使用原則, 院臺秘字第0930089122號函) was located on the Executive Yuan site, but the page holds only the title, the date 「94-12-22」 and a PDF the fetch tool cannot read (gaps.md). No source read states when a consumer UI should use 民國 years rather than 西元 years, or whether to prefer 24-hour time. The candidates below are what CLDR outputs by default and what the localization guides say.

#### TW-37 Gregorian dates: y年M月d日 (long), y/M/d (short); Hong Kong differs
- Kind: TYPO / WRITE (locale data).
- CLDR-G (zh-Hant; zh_Hant_TW inherits it unchanged): dateFormats full "y年M月d日 EEEE", long "y年M月d日", medium "y年M月d日", short "y/M/d"; availableFormats yMd "y/M/d", yMEd "y/M/d（E）".
- *Contrast, Hong Kong:* CLDR-HK short "d/M/y", yMd "d/M/y", full "y年M月d日EEEE". A Taiwan UI must not take the HK day-first short date.
- MS 4.1.1 weekday abbreviations: "Mon, Tue, Wed, Thu, Fri, Sat, Sun" → 「一、二、三、四、五、六、日」.
- Test: script — slash dates that are day-first (d/M/y) in a zh-TW build: flag; render `Intl.DateTimeFormat('zh-TW')` to compare.
- Strength: LOCALE (CLDR). See TW-36 for the spacing disagreement with MS.

#### TW-38 民國 (ROC) years: the locale data exists; no source says when to use it in a UI
- Kind: WRITE.
- CLDR-ROC (zh-Hant): eraNames / eraAbbr 「民國」 and 「民國前」; dateFormats long "Gy年M月d日", short "Gy/M/d".
- The Executive Yuan numeral rule for official documents was not readable; the search-result summary of it (not evidence) says dates are written in Arabic numerals. No source opened states 民國 vs 西元 for consumer products.
- Test: none; judgment only.
- Strength: LOCALE only. Gap for the usage rule.

#### TW-39 Time: CLDR's default 12-hour form uses a flexible day-period word; HH:mm is available
- Kind: TYPO / WRITE (locale data).
- CLDR-G timeFormats short "Bh:mm", medium "Bh:mm:ss" (B = flexible day period); availableFormats Hm "HH:mm", hm "Bh:mm"; dayPeriods format (abbreviated = wide): am 「上午」, pm 「下午」, midnight 「午夜」, morning1 「清晨」, morning2 「上午」, afternoon1 「中午」, afternoon2 「下午」, evening1 「晚上」, night1 「凌晨」 (the B pattern picks among these by time of day).
- MS 4.1.2 Localized acronyms: AM → 「上午」, PM → 「下午」.
- *Contrast, Hong Kong:* CLDR-HK short time "ah:mm" (am/pm marker, not flexible day period).
- No source read states whether a Taiwan UI should prefer 24-hour time. Gap.
- Test: script — "AM"/"PM" Latin markers in zh-TW strings: flag.
- Strength: LOCALE + L10N(1/3) for 上午/下午.

#### TW-40 Currency: 新台幣; symbol "$", formal "NT$"
- Kind: WRITE (locale data).
- CLDR-C zh-Hant TWD: displayName 「新台幣」; symbol "$"; symbol-alt-formal "NT$"; symbol-alt-narrow "$". Currency pattern (CLDR-N) "¤#,##0.00"; accounting "¤#,##0.00;(¤#,##0.00)".
- *Contrast:* CNY 「人民幣」 "CN¥"; HKD 「港幣」 "HK$" (CLDR-C, zh-Hant).
- No source opened covers writing amounts with 元 (e.g. after the number) or whether to show decimals for TWD. Gap.
- Strength: LOCALE.

#### TW-41 Use Arabic numerals for most numbers; add a measure word when counting
- Kind: WRITE.
- WP 數字在譯文中的使用: 「無論在英文原文中是以阿拉伯數字還是英文單字表示，為了因應變數帶入的數字必然是阿拉伯數字，」 「在台灣譯文中大部分的數字都應以阿拉伯數字表示。」
- MS measure words: TW-20. MS 4.1.2 example 「3 家 OEM」 uses a digit and a measure word.
- CLDR-N: decimal ".", group ",", default numbering "latn", percent "#,##0%".
- Test: script — FYI on Chinese numerals in UI counts.
- Strength: L10N(1/3) + LOCALE.

Units: no source opened gives a rule for units in UI text (the MOE 簡編本 has a 度量衡單位換算表 appendix, which is a conversion table, not a usage rule; not opened).

## A8. Plain language

#### TW-42 Plain, everyday words; short sentences
- Kind: WRITE (judgment).
- MS 3 General guidelines: "Use plain language. Use straightforward, concrete, and familiar words."
- MS 3.2: "Keep paragraphs short and sentence structure simple—aim for one verb per sentence."
- MS 3.2: spell out symbols for screen readers — 「請按一下加號」 not 「請按一下+」.
- MZ: 「可適度使用成語，但請力求淺顯易懂。」; MZ-mkt: 「我們喜歡兩個短句，而不是一個長句。」
- L10NTW (pointer): 「根據 Accessibility 的近用性原則，通常翻譯的識讀性目標，應以國中程度為主。」 (per extraction; not counted).
- Government plain-language guidance for Taiwan: none found. 數位發展部's 政府數位服務指引 page carries only a purpose statement (no principles, nothing on wording); the 政府網站服務管理規範 is a PDF that could not be read. Gap.
- Test: judgment only (a sentence-length FYI is possible).
- Strength: L10N(2/3).

# Half B — Typography for the web

**Coverage warning.** The current CLREQ (W3C Group Note Draft, 04 November 2026, https://www.w3.org/TR/clreq/) is about 770 KB; the fetch tool's copy stops inside §5.5, so **the current §6 (line breaking, justification, text spacing, line height) and Appendix A (punctuation tables) were not read**. For those topics this file uses an older, smaller, Traditional-Chinese-only editor's draft kept in the clreq repository (`zh/index.html`, specStatus "ED", undated, body hidden with `display:none`, several sections empty; it says it has been merged into the current bilingual document). Its line-breaking list agrees word for word with the 2017 Working Draft's zh-Hant text. Both are **superseded drafts**: every candidate that rests on them says so, and must be checked against the current Note's §6 before the skill states it.

**Region.** Several of these drafts' rules are stated for 繁體中文 (Traditional Chinese typesetting) or 港台 (Hong Kong and Taiwan), not for Taiwan alone. Each candidate says which.

CLREQ quotes are the spec's English and/or zh-Hant text as returned by the extraction model (not code-point verified). zh-Hans text was not used, except one Mainland-standard sentence marked as such.

| Key | Source | URL |
|---|---|---|
| CLREQ | W3C, Requirements for Chinese Text Layout 中文排版需求, Group Note Draft 04 November 2026 | https://www.w3.org/TR/clreq/ |
| CLREQ-zhED | W3C clreq repository, `zh/index.html`: 中文排版需求, Traditional-Chinese editor's draft (undated, superseded) | https://raw.githubusercontent.com/w3c/clreq/gh-pages/zh/index.html |
| CLREQ-2017 | W3C, Requirements for Chinese Text Layout, Working Draft 29 December 2017 (superseded) | https://www.w3.org/TR/2017/WD-clreq-20171229/ |
| CLREQ-2020 | W3C, same, Working Draft 01 November 2020 (superseded) | https://www.w3.org/TR/2020/WD-clreq-20201101/ |
| CLREQ-fonts | W3C clreq repository, `others/system-font-mappings.md`, "Recommended System Font Mappings for Generic Chinese Font Families" (last verified 2026-09-03; for implementers of browser engines and typesetting software) | https://raw.githubusercontent.com/w3c/clreq/gh-pages/others/system-font-mappings.md |
| TIPO-font / TIPO-btn | 智慧財產局 智慧財產權e網通 設計規範書 (2019.09.01) — 文字 Font; 按鈕 Button. One agency's site guideline. | https://tiponet.tipo.gov.tw/TIPO_UIUX/feng-ge-style/wen-zi-font.html ; https://tiponet.tipo.gov.tw/TIPO_UIUX/yuan-jian-component/an-niu.html |

## B1. Punctuation position and width

#### TW-43 In Taiwan, 。，、 and other pause/stop marks sit in the centre of the character frame; in the Mainland they sit at the lower left
- Kind: TYPO.
- Region: Taiwan and Hong Kong (centred) vs Mainland China (lower left in horizontal text). The source names all three.
- CLREQ §2.1.2: "Punctuation marks used in Taiwan and Hong Kong are usually positioned in the vertical and horizontal center" — 「港台的標點多位於字面正中」. "In Mainland China, the punctuation marks are usually positioned following the characters they are supposed to mark;" — 「中國大陸的標點多位於受注文字的末端、字面始端」.
- CLREQ §2.1.2 (pause or stop marks): "In Taiwan and Hong Kong, pause or stop punctuation marks are usually positioned in the vertical and horizontal center" — 「港台的排版位於字面正中」; Mainland: "In horizontal writing mode, the pause or stop punctuation marks are placed at the lower left corner in the square space" — 「（橫排時位字面左下角，直排時位字面右上角）」.
- CLREQ §5.1: "Punctuation marks are usually center-aligned in the character frame in Taiwan and Hong Kong," — 「台灣、香港多使用符號居中的字形樣式」.
- Exception, CLREQ §5.1.1.2 (Taiwan and Hong Kong): in ancient books, science and technology literature and textbooks that often cite Western text, "some pause or stop punctuation marks, including the slight-pause comma, colon and period," "are positioned following the marked characters." — 「亦可見使用位受注文字末端、字面始端的點號（頓號、逗號、句號）」.
- The MOE handbook (AUTH for Taiwan) could not be read, so there is no MOE citation for the centred position (gaps.md).
- Test (ours; the mechanism is not from a source): the position comes from the font's glyphs, not from CSS. A script can check that the page declares a Taiwan language tag (`lang="zh-Hant-TW"` or `zh-TW`) and that the first CJK family in each `font-family` stack is a Traditional Chinese face (see TW-52), not an SC or JP face; a render check can compare the ink box of 。，、 to the em box.
- Strength: CLREQ (W3C Note draft; describes practice, not normative).

#### TW-44 Interpunct (間隔號) is a full character wide in Taiwan, half in the Mainland
- Kind: TYPO.
- CLREQ §5.1 item 9: "In principle, in Hong Kong and Taiwan, interpuncts should have the same dimensions as a Hanzi in both vertical writing mode and horizontal writing mode." "In Mainland China, interpuncts take up half the space of a Hanzi." — 「間隔號在各個地區排版時寬度有所不同，原則上港台地區無論直排或橫排，都占用一個漢字的大小，在中國大陸則占用半個漢字的大小。」
- Code point: not given in the passage read (Appendix A unread).
- Test: render check of the interpunct's advance width in the chosen font: FYI.
- Strength: CLREQ (Note draft).

#### TW-45 Dash and ellipsis are one unit of two character widths and are not split across lines
- Kind: TYPO.
- Region: not named.
- CLREQ §5.1 item 6: "Two-em dashes are not supposed to be separated from one line to the next." — 「破折號不得以適配分行之由斷開或拆至兩行。」 CLREQ §5.4.1: "Ellipses are not supposed to be separated from one line to the next." — 「刪節號不得以適配分行之由斷開或拆至兩行。」
- CLREQ-zhED 符號分離禁則: 「以下標點符號佔用二個漢字的空間，在行間應為一體，視作一個字元存在，不得以適配分行之由拆至二行。」
- Interacts with TW-29/TW-30: MS writes "..." and forbids the em dash; MZ writes a single "…".
- Test: render check — a line break between the two halves of 「……」 or 「——」: flag. (No CSS property guarantees this; wrapping the pair in a `white-space: nowrap` span is one approach — ours.)
- Strength: CLREQ (Note draft).

## B2. Line breaking

#### TW-46 Pause/stop marks and closing marks may not start a line; opening marks may not end one — but Traditional Chinese practice is not strict (superseded draft)
- Kind: TYPO.
- Region: 繁體中文 regions, not named individually. CLREQ-zhED: 「在中國大陸，《標點符號用法》（GB/T 15834–2011）規定了簡體中文標點在行間的位置；繁體中文通行地區雖未有相應的規範，但多數出版品皆以此處所述規則對標點符號進行配置。」
- Cannot start a line (CLREQ-zhED, identical in CLREQ-2017 §3.1.4 zh-Hant): 「點號（頓號、逗號、句號、冒號、分號、驚嘆號、問號）、結束引號、結束括號、結束乙式書名號（篇名號）、刪節號、連接號、間隔號等符號，不得出現於一行之首。」
- Cannot end a line: 「開始引號等、開始括號、開始單雙書名號等符號，不得出現於一行之尾。」
- How it is enforced: 「排版時，若不希望標點符號出現於行頭時，僅能由前行取末字至下一行，前行多出來的空間採平均排列的方式處理。」
- Not strict in Traditional Chinese (CLREQ-zhED notes): 「在繁體中文裡，並未嚴格禁止標點符號出現於行首，於活字排版時代，完全不處理標點禁則的出版品也相當多見。」; 「繁體中文出版品中，報紙、雜誌多採分欄式排版，此時由於一行字數較少，也有完全不使用行首行尾禁則的作法。」; for runs such as 「。』」」, moving one character may over-stretch the previous line, 「這時則採寬鬆處理，允許標點出現於行頭，以避免字距過鬆造成體例不良。」
- **Superseded draft.** The current §6.1 was not read.
- Test: render check — rendered lines starting with a closing or pause mark, or ending with an opening mark: FYI (not flag, given the notes above). Browsers apply CJK line-breaking rules by default; `line-break: strict | normal | loose` changes the set (CSS behaviour from our knowledge, not from these sources; check CSS Text 3).
- Strength: CLREQ (superseded draft), with the draft itself saying Traditional practice is loose.

## B3. Punctuation compression and hanging

#### TW-47 Several compression rules are for Simplified Chinese only; centred Traditional 。，、 are not compressed at line end or before a closing bracket (superseded draft)
- Kind: TYPO.
- CLREQ-zhED 連續標點符號的擠壓: 「簡體中文排版中，當結束括注符號出現於頓號、逗號、句號之後，縮減二者間二分之一個漢字大小的空白。（繁體中文標點不適用此規則）」
- CLREQ-zhED 行首行尾標點擠壓: 「簡體中文排版中，當行尾出現頓號、逗號、句號時，可以縮減該符號末側二分之一個漢字大小的空白。（繁體中文標點不適用此規則）」
- Rules stated without a script restriction (so they cover Traditional too, per the draft): 「當頓號、逗號、句號出現在結束括注符號之後，縮減其間二分之一個漢字大小的空白。」; 「當開始括注符號出現於頓號、逗號、句號之後，縮減其間二分之一個漢字大小的空白。」; 「當二個（或以上）開始括注符號連續排列時，縮減其間二分之一個漢字大小的空白。」; 「當二個（或以上）結束括注符號連續排列時，縮減其間二分之一個漢字大小的空白。」; 「當行首出現開始括注符號，可以縮減該符號始側二分之一個漢字大小的空白。」; 「當行尾出現結束括注符號時，可以縮減其末側二分之一個漢字大小的空白。」
- **Superseded draft.** Current §6.3 not read.
- Test (ours): CSS `text-spacing-trim` applies trimming by its own rules; whether its default matches the Traditional exceptions above must be checked against CSS Text 4 and a render. Until then: FYI only.
- Strength: CLREQ (superseded draft).

#### TW-48 No hanging punctuation in horizontal Traditional Chinese
- Kind: TYPO.
- CLREQ-zhED 行尾點號懸掛: 「絕多數的中文出版品沒有懸掛行尾點號的慣例。」 「然而，由於繁體中文的點號位於字面正中，若在橫排時使用行尾懸掛，體例可能顯得突兀、不良。」 「故橫排時，繁體中文不做行尾懸掛配置；但可用於直排。」
- Test: CSS — `hanging-punctuation: allow-end` (or `force-end`) on horizontal zh-TW text: flag.
- Strength: CLREQ (superseded draft).

## B4. Mixed Han and Latin text (rendering)

#### TW-49 Between Han and Latin letters or digits: a quarter of a Han character, or a U+0020 space; none at line start/end
- Kind: TYPO.
- Region: not named.
- CLREQ-zhED 橫排的中、西文混排配置 (horizontal): 「原則上，漢字與西文字母、數字間使用四分之一個漢字寬的字距或空白。」 「但西文出現在行頭或行尾時，則毋須加入空白。」 Note: 「或可使用西文詞間空格（U+0020 SPACE [ ]，其寬度隨不同字體有所變化）。」 No added space next to Chinese pause marks or inside Chinese brackets: 「於中文點號前後、中文開始括注符號之後、結束括注符號之前的西文，不調整字距或加入空白。」
- CLREQ (current) §2.1.3, vertical text: "Use a spacing of no more than one-quarter of the width of a Han character" "between Han characters and Western letters or European numerals." — 「漢字與西文字母、阿拉伯數字間使用不多於四分之一個漢字寬的字距或空白。」
- Relation to TW-34: the localization guides require a typed U+0020; CLREQ allows 「字距或空白」 (spacing *or* a space), and the zhED note names U+0020 as an option. On the evidence read they do not conflict. A page that types U+0020 and also turns on renderer autospacing (`text-autospace`) could get both (ours, unsourced).
- **Horizontal rule from the superseded draft**; current §6.3 not read.
- Test: script — as TW-34.
- Strength: CLREQ (superseded draft for horizontal; Note draft for vertical).

## B5. Emphasis

#### TW-50 Emphasis dots go under the characters in horizontal text; Taiwan's MOE handbook does not list the mark
- Kind: TYPO.
- CLREQ §5.3.1: "For horizontal writing mode, emphasis marks are placed under the characters," "whereas in vertical writing mode, they are usually placed to the right side of the characters." zh-Hant: 「其形態為標注於文字底端或頂端（橫排多在下方〔底端〕、直排多在右側〔頂端〕）的圓形中黑點，可以為U+25CF BLACK CIRCLE [●]或U+2022 BULLET [•]。」
- Taiwan (named): "Punctuation Guidance (revised edition) issued by The Ministry of Education in Taiwan does not include this mark" "but it can still be seen in some publications."
- Not dotted: 「句號、逗號、頓號、冒號、分號、驚嘆號、問號、破折號、刪節號、連接號、間隔號、分隔號、引號、夾注號、書名號乙式、篇名號的底端或頂端通常不再添加著重號。」
- CLREQ §3.1.1.3 (no region named): "In body text, characters in Hei style with thicker strokes typically indicate emphasis."
- No italics: TW-32 (MS, WP).
- Test: CSS — if `text-emphasis` is used on horizontal Chinese, `text-emphasis-position` should put the marks under (CSS mapping ours); flag `font-style: italic` on Han text (TW-32).
- Strength: CLREQ (Note draft). For Taiwan, the dots are optional practice, not in the national handbook.

## B6. Typefaces, font stacks and sizes

#### TW-51 Typeface roles: Song/Ming for body; Kai for Taiwan official documents; Hei increasingly in digital text
- Kind: TYPO.
- CLREQ §3.1.1.1: "Song is commonly used in text, headings and annotations." — 「普遍使用於內文文字、標題與注釋。」
- CLREQ §3.1.1.2 (Taiwan named): "Kai is commonly used in official documents and textbooks. Most official documents in Taiwan use Kai in full text." — 「楷體普遍用於公文書、教科書。臺灣的公文書多全文使用楷體。」
- CLREQ §3.1.1.3: "Traditionally, publications rarely apply the Hei style for content," "but with the growing influence of the World Wide Web and the digital publishing industry," "some publications are starting to experiment Hei in this context."
- *Contrast, Mainland:* CLREQ §3.1.1.4: "Mainland China stipulates that the official documents of the government should use Fangsong in principle." — 「而中國大陸則規定政府公文原則上應使用仿宋體。」
- Test: judgment only.
- Strength: CLREQ (Note draft, descriptive).

#### TW-52 System font family names for Traditional Chinese, by platform
- Kind: TYPO.
- CLREQ-fonts (rows as extracted): macOS sans-serif — "| `sans-serif` (Hei) | Traditional Chinese (Taiwan) | 蘋方-繁 | `PingFang TC` | Downloadable |" ("Regional Taiwan family."); Windows — sans-serif 「微軟正黑體」 `Microsoft JhengHei` (Built-in), serif 「新細明體」 `PMingLiU` (OS optional), kai 「標楷體」 `DFKai-SB` (OS optional); macOS kai "`BiauKaiTC`, `BiauKaiHK`" for "Traditional Chinese (Taiwan/Hong Kong)"; Android (AOSP) `Noto Sans CJK TC` / `Noto Serif CJK TC` ("TTC index 3, selected for `zh-Hant`"); Linux kai `AR PL UKai TW` ("Debian's fontconfig rules select this face for `zh-tw`").
- Scope: a mapping for browser and typesetting implementers of generic families, not a style rule; it tells a checker which family names are TC faces.
- Test: script — a zh-TW `font-family` stack whose first CJK family is an SC or JP face (e.g. a name ending in SC or JP) ahead of a TC face: flag (ours, from TW-43).
- Strength: reference (W3C clreq repository file, not the Note).

#### TW-53 Windows UI font stack for Traditional Chinese (Microsoft)
- Kind: TYPO.
- MS 4.2 Font strings: "If the resource ID doesn’t contain “font-family” (or “fontfamily”) and there is only one font in the source string, replace it with the Microsoft JhengHei UI font." … "add Microsoft JhengHei UI, Microsoft JhengHei, 新細明體 in front of the English fonts and leave English fonts unchanged." Example: "Segoe UI, Verdana, Tahoma, Arial => Microsoft JhengHei UI, Microsoft JhengHei, 新細明體, Segoe UI, Verdana, Tahoma, Arial". Console fonts: "Replace console fonts (Consolas, Lucida Console) with "細明體"."
- MS 4.2 Font size strings: source "Equal or less than 8 (pt.)" → "9pt".
- MS 4.2.1: "Corresponding ClearType font is Microsoft Jhenghei."
- Scope: Windows software resources; not a web stack; Windows-only fonts.
- Test: script — CSS for zh-TW naming only Latin fonts: FYI.
- Strength: L10N(1/3).

#### TW-54 One agency's web guideline: Noto Sans TC; body text above 16px, never below 14px
- Kind: TYPO.
- Region: Taiwan, one government site (TIPO 智慧財產權e網通, 2019).
- TIPO-font 字型規範: 「採用[Google Font]中的「思原黑體」作為顯示字體」 (the page writes 思原; link markup dropped by the extractor) and 「"思源黑體" 在 Google Font 中為「Noto Sans TC」」 (as extracted).
- TIPO-font 字級規範: 「所以畫面中標題與內文的字級建議大於16px，並不得小於14px。」 Table: 50px 首頁快速選單標題; 45px 內頁大標題; 25px 內頁單元標題; 18px 單則訊息標題 / 區塊標題 / 步驟; 16px 內容 / 按鈕; 14px 附註; 13px 麵包屑 (13px is below the page's own 14px floor).
- TIPO-btn: primary 「主要按鈕之樣式，例如下一步、確認、儲存...等。」; secondary 「用途為非引導流程或非必要之按鈕，例如取消、清除重填、返回...等。」 Button CSS as extracted: height 42px, font-size 18px (differs from the 16px 按鈕 row in the font table).
- Line height, letter spacing: NOT PRESENT on the page.
- Test: script — computed font-size of body text < 14px: flag (under this one guideline).
- Strength: AUTH, but one agency's site guideline (the only government guideline with type values found); not a national rule.

## B7. Line height and line length

#### TW-55 Line spacing (行距) mostly 50–100% of the font size, i.e. line-height about 1.5–2 (superseded draft)
- Kind: TYPO.
- Region: not named.
- CLREQ-zhED 版心 notes: 「行高＝文字尺寸÷2＋行距＋文字尺寸÷2＝文字尺寸＋行距」; 「版心之行距多半介於文字尺寸之50%–100%之間，當行長較短、或文字尺寸較小時，行距設定也會相對較小。」 「反之，行距一般不會超過文字尺寸，就算超過文字尺寸，也不會因而增加易讀性。」
- The conversion to CSS `line-height` 1.5–2.0 follows from the draft's own formula (行高 = 文字尺寸 + 行距); the CSS framing is ours.
- Line length: only 「一行的行長應為文字尺寸的整數倍，各行的位置盡可能頭尾對齊。」 (CLREQ-zhED 版心 body; same sentence in CLREQ-2020 §2.3.5). No characters-per-line figure in any source read.
- Context: the draft describes book typesetting (版心), not screen UI.
- Test: script — computed line-height / font-size for zh-TW body text outside 1.5–2.0: FYI.
- Strength: CLREQ (superseded draft). Current §6.4 not read.
