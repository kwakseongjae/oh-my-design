# /zhuyin — writing rules for Traditional Chinese (Taiwan) (ZW)

**Development draft, 2026-11-21. No native reader from Taiwan has reviewed this file.** It turns the 55 research candidates in [`../research/rules.md`](../research/rules.md) (TW-01 … TW-55) into rules for the skill, at the strength the second reader's verdicts in [`../research/verdicts.md`](../research/verdicts.md) allow, corrected by the source texts in [`../research/addendum-2026-11-21.md`](../research/addendum-2026-11-21.md). Region: Taiwan for every rule. Lines marked *Mainland* or *Hong Kong* are contrasts, never rules.

## How this file was made

- **What gets in.** A candidate becomes a rule only if its verdict is "supported", or "weaker than stated" and the rule is rewritten to what the verdict says the source supports. Four candidates state no rule (TW-06, TW-12, TW-17, TW-38) and two name no region (TW-49, TW-55); they are left out. The seven candidates that record a disagreement are not rules: they are listed under [The project's DESIGN.md decides](#the-projects-designmd-decides), each side with its source, and the checker tests none of them. Every candidate's fate is in [`coverage.md`](./coverage.md).
- **Ids.** ZW-nn carries the number of the candidate it came from (ZW-09 is TW-09), so the numbering has gaps.
- **The current CLREQ, not the old drafts.** Where a candidate quoted a superseded CLREQ draft (TW-45 to TW-49, TW-55), the rule uses the current text the addendum quotes (section A), or is left out when the current text names no region.
- **The Ministry of Education handbook.** The candidates were written without the MOE punctuation handbook (addendum B). Where it bears on a rule, the rule says what it prints, and where it differs from the translation guides both positions are shown. No check flags a form the handbook itself prints.
- **Chinese text.** Every Chinese string below is copied from a quote in `rules.md`, `verdicts.md` or the addendum, with its source key. No example was composed. A rule whose sources give no wrong/right pair says "no sourced example". A test (`test/unit/scripts/zhuyin-copy-check.test.mjs`) fails if a corner-bracketed string in this file, or a string in a checker fixture, is not inside one quote of those three files.
- **Width and spacing.** A rule about character width or a typed space rests only on quotes whose tier is "web" in [`../research/raw-check-2026-11-21.md`](../research/raw-check-2026-11-21.md): in the bytes a current web source served. Microsoft quotes come from a PDF text extract, which confirms characters but not spaces. A width or spacing point with no web-tier quote is marked **not confirmed against page bytes** and has no check.
- **Translation guides describe translated software.** Microsoft, Mozilla and WordPress write for text translated from English into Taiwan Chinese. Their rules are not evidence of how Taiwan companies write native product copy. No Taiwan company or product writing guide was found (research/gaps.md lists fourteen searched), so no rule here carries a company count.

## Strength, in words

| Wording | Meaning |
|---|---|
| an authority's handbook | 教育部《重訂標點符號手冊》修訂版 (MOE-hb), Taiwan's national punctuation handbook. It describes general writing and does not speak of user interfaces. |
| government rules for official documents | 行政院 公文書橫式書寫數字使用原則 (EY-num): government documents written horizontally, not product interfaces. |
| a government web guideline | 數位發展部 政府網站服務管理規範 (MODA-web), for government websites; read by keyword only. |
| one agency's site guideline | TIPO's design guide for its own site. |
| N of 3 translation guides | Stated in N of Microsoft (MS), Mozilla (MZ) and WordPress (WP), for software translated into Taiwan Chinese. A guide that is silent is not counted against. |
| a W3C Note draft | The current W3C Requirements for Chinese Text Layout (CLREQ): descriptive, not normative, and mostly about print. |
| locale data | Unicode CLDR: what formatters output by default. Not a style rule. |
| an implementer mapping | A W3C clreq repository file mapping generic font families to system fonts. |
| a descriptive dictionary table | The MOE dictionary appendix comparing Taiwan and Mainland words. |
| pointer, not counted | The l10n-tw community guide (L10NTW). |

No rule here is required by any source read: no law or standard that applies to product text was read. Hedges in a quote (in most cases, 通常, 原則上, 多用於) stay in the rule.

## Source keys

| Key | Source | URL or file |
|---|---|---|
| MS | Microsoft, Chinese (Traditional) Localization Style Guide (zho-twn) | https://download.microsoft.com/download/2/9/3/293e6d41-ba40-451b-a41e-94bdb6242ae3/zho-twn-StyleGuide.pdf |
| MZ | Mozilla, zh-TW style guide (MozTW) | https://mozilla-l10n.github.io/styleguides/zh-TW/ |
| MZ-mkt | Mozilla, Firefox marketing copy guide (zh-TW) | https://mozilla-l10n.github.io/styleguides/zh-TW/firefox_marketing.html |
| WP | WordPress 台灣正體中文 localization style guide | https://tw.wordpress.org/team/handbook/localization/zh-tw-localization-style-guide/ |
| MOE-hb | 教育部《重訂標點符號手冊》修訂版 | https://language.moe.gov.tw/001/upload/files/site_content/m0001/hau/Revised_Handbook_of_Punctuation.pdf |
| MOE-2A | 教育部《國語辭典簡編本》appendix 兩岸常用詞語對照表 | https://dict.concised.moe.edu.tw/appendix.jsp?ID=54 |
| EY-num | 行政院 公文書橫式書寫數字使用原則 | https://www.ey.gov.tw/File/E64C5F6D27B78A72?A=C |
| MODA-web | 數位發展部 政府網站服務管理規範 | https://www.webguide.nat.gov.tw/announcement/281/file/330/H394w7tWdOzpQfL2lo2trPUvSQDZQSGY6oAqL6Vw.pdf |
| CLREQ | W3C Requirements for Chinese Text Layout, the copy served on 2026-11-21 | https://www.w3.org/TR/clreq/ |
| CLREQ-fonts | W3C clreq repository, system font mappings | https://raw.githubusercontent.com/w3c/clreq/gh-pages/others/system-font-mappings.md |
| CLDR-G, CLDR-HK, CLDR-C | Unicode CLDR zh-Hant (Taiwan inherits it) Gregorian dates, zh-Hant-HK dates, currencies | cldr-json, main branch, opened 2026-11-21 |
| TIPO-font, TIPO-btn | 智慧財產局 智慧財產權e網通 design guide, font and button pages | https://tiponet.tipo.gov.tw/TIPO_UIUX/ |
| L10NTW | 自由軟體正體中文化翻譯風格指引 (pointer) | https://hackmd.io/@l10n-tw/translation_style_guide |

## The checker

`scripts/lang/zhuyin-copy-check.mjs` tests the rules below whose "Checker" line names a check. It reads plain text, Markdown, HTML, and JS/TS/JSX string literals and JSX text; no network, no model, no dependencies.

- **FYI** only. A hit is a prompt to read the string in its place. No rule reaches **WARN**, which needs an authority or two non-translation sources that state the rule and give the matched form as wrong; none of the checked rules has that. There is no BLOCK.
- A string counts when it holds a Han character and no kana (a string with kana is Japanese). Simplified Chinese strings share the range, so a Mainland file will trip the word rules.
- Role is read from the element only (ZW-32: `<i>`, `<em>`, inline italics). No other rule depends on a role.
- `--json` prints `{files, zh, findings, notes, summary, exit}`; each finding has `rule`, `severity`, `file`, `line`, `match`, `message` and `source`. `--strict` exits 1 when a WARN exists, so today it exits 0. `--self-test` runs `scripts/lang/fixtures/zhuyin-copy/`.

## Rules

### Address and register

#### ZW-01 (TW-01) · In product UI, address the user as 您.
- Kind: WRITE.
- Strength: 2 of 3 translation guides (Microsoft, "always"; Mozilla, for text inside the product). WordPress is silent. *Mainland:* Microsoft's Simplified Chinese guide says the opposite, so a Mainland source's choice must not be carried here.
- Quote: MS 2.1 "Always use the polite form 您 for "You" in all of the software products."; MZ 「遇到 “you” 時，一般情形下使用敬語「您」。若原文沒有那麼嚴肅可視情況使用「你」，但產品內仍應使用「您」。」
- Example: MS 2.1 「您現在已連線到網際網路。」 (the right form only).
- Checker: **ZW-01, FYI**: singular 你 (not followed by 們). Mozilla allows 你 outside the product in less serious text.

#### ZW-02 (TW-02) · Plural "you" is 你們, not 您們.
- Kind: WRITE.
- Strength: one translation guide (Microsoft).
- Quote: MS 2.1.4 "use 你們 instead of 您們 for "you" (plural)."
- Example: the two forms in the quote.
- Checker: **ZW-02, FYI**: 您們.

#### ZW-04 (TW-04, rewritten to the verdict) · Microsoft: in most cases, put 請 before an instruction verb.
- Kind: WRITE.
- Strength: one translation guide (Microsoft: "in most cases", "as necessary"). It calls the form with 請 "much better"; it does not call the bare verb wrong. No source read gives a rule for buttons (research/gaps.md).
- Quote: MS 2.2.1 "In most cases, adding 請 before imperative verbs will make the voice more polite and the meaning clearer. For example, translate "Input password" into "請輸入密碼" is much better than "輸入密碼"。"; MS 2.1.4 "Use 請 as necessary to make sentence more understandable."
- Example: MS 「輸入密碼」 (less good) → 「請輸入密碼」.
- Checker: **ZW-04, FYI**: a string that begins with 輸入, the quoted verb, with no 請 before it.

#### ZW-05 (TW-05) · Everyday forms over formal ones.
- Kind: WRITE.
- Strength: one translation guide (Microsoft, which frames them as a conversational tone).
- Quote: MS 4.1.5 "For example, 「如果」sounds more conversational than「倘若」."; MS 2.1.4 table: 「毋需」 → 「無需」; MS 4.1.6 contractions (long → short): 「以防萬一」→「以免」, 「總而言之」→「總之」, 「但是 / 不過」→「但」, 「已經」→「已」.
- Example: the pairs in the quote.
- Checker: **ZW-05, FYI**: 倘若, 毋需. The long forms of the contractions table are ordinary words outside it and are not checked.

#### ZW-07 (TW-07) · No gendered pronoun for a generic person; avoid 它.
- Kind: WRITE.
- Strength: one translation guide (Microsoft). It allows gendered pronouns for real people who use them (verdict).
- Quote: MS 3.1 "Don't use gendered pronouns (她/他, 她們/他們, 她的/他的 etc.) in generic references." "Rewrite to use the second or third person (您 or 其)."; MS 4.2.6 comment column: "Avoid using non-human pronoun 它. If necessary, use 其".
- Example: MS 3.1 「當作者開啟她的文件時…」 → 「當作者開啟其文件時…」 (wrapped table cells: tier "none" in the raw check; the second reader read them across lines).
- Checker: **ZW-07, FYI**: 她的, 他的, 它.

#### ZW-08 (TW-08) · Microsoft's inclusive and non-stigmatising terms.
- Kind: WRITE.
- Strength: one translation guide (Microsoft).
- Quote: MS 3 table (use → not): 「主要/次要」 not 「主/從」; 「封鎖清單/允許清單」 not 「黑名單/白名單」; 「周邊網路」 not 「非軍事區 (DMZ)」; 「停止回應」 not 「死當」; 「移工」 not 「外勞」; 「家長」 not 「母親或父親」. MS 3.2: 「身心障礙人士」 not 「殘障人士; 殘廢」; 「聽障」 not 「聾子」; "Don't use words that imply pity, such as 患有 or 受... 之苦."
- Microsoft also lists 選取 over 按一下, but uses 按一下 in its own examples (verdict); that pair is not checked.
- Example: the pairs in the quote.
- Checker: **ZW-08, FYI**: 主/從, 黑名單, 白名單, 非軍事區, 死當, 外勞, 母親或父親, 殘障人士, 殘廢, 聾子, 患有.

#### ZW-09 (TW-09) · Avoid the passive 被; don't open a sentence with 會.
- Kind: WRITE.
- Strength: one translation guide (Microsoft).
- Quote: MS 4.2.11 "In Traditional Chinese, passive voice is avoided." … "Avoid using 會...。pattern with 會 beginning a sentence."
- Example: MS 4.2.11 「會自動儲存檔案。」 → 「系統會自動儲存檔案。」; 「檔案會自動被儲存。」 → 「檔案會自動儲存。」 (wrapped cells: tier "none"; read across lines by the second reader).
- Checker: **ZW-09, FYI**: 被; a string or sentence that begins with 會.

#### ZW-10 (TW-10) · Ongoing operations: 正在… rather than …中.
- Kind: WRITE.
- Strength: one translation guide (Microsoft; 中 "could be used" but is less fluent).
- Quote: MS 4.2.12 "Continuous operations are usually expressed in English with a gerund, which should be translated into Traditional Chinese with the pattern 正在..."; comment: "Though 中 could be used, it is less fluent and might cause confusion in some cases."
- Example: MS 「儲存文字檔案中...」 → 「正在儲存文字檔案...」; 「完成安裝中...」 → 「正在完成安裝...」. Not for titles: 「使用小畫家」, not 「正在使用小畫家」. The ellipsis form in these examples is a house choice (TW-29).
- Checker: **ZW-10, FYI**: 中 followed by ... or … at the end of a string.

#### ZW-11 (TW-11) · Don't translate every "your"; cut surplus 的.
- Kind: WRITE.
- Strength: one translation guide (Microsoft).
- Quote: MS 4.1.3 "However in Traditional Chinese, avoid translating every possessive adjective, even if it is present in English." "Also, avoid using too many 的 in a sentence. If the meaning is not affected, omit 的 for readability."; MS 4.2.6 "In general, you do not have to translate every pronoun into Traditional Chinese."
- Example: no sourced example.
- Checker: judgment only (the source gives no count).

### UI references

#### ZW-13 (TW-13) · In running text, put a UI element's name in square brackets.
- Kind: WRITE.
- Strength: 2 of 3 translation guides (Microsoft, WordPress); Mozilla asks only that a feature be named as the software names it. **Half-width: not confirmed against page bytes.** Both guides say half-width in words, but WordPress's rule sentence matched the served page only after spaces were removed (the page has a no-break space after the opening bracket), and its examples differ from the page; Microsoft is an extract.
- Quote: MS 5.6.8 "When localizing UI terms in software strings, enclose UI terms with square brackets ([ ])."; WP 「請使用半形方括號 [ 及 ] 包覆可點擊的介面字串，且每次內容有提及，均仍以同樣標示法標示。」; MZ 「文件中若提及某軟體或產品內的功能，應依照該軟體內的文字翻譯。」
- Example: MS 「按一下 [確定]。」; WP, as the page prints it (addendum E, with the arrow the research tool dropped): 「範例：請前往 [控制台]，然後點擊 [設定]→[永久連結]。」. Not bracketed (MS): icons, views and windows, programs, files, locations, URLs.
- Checker: judgment only.

#### ZW-14 (TW-14) · Desktop menus only: an access key goes in parentheses after the text, as an ampersand and an uppercase letter.
- Kind: WRITE.
- Strength: one translation guide (Microsoft), desktop software only; Microsoft is not consistent with itself on one key (verdict). **The no-space part is not confirmed against page bytes** (Microsoft extract only).
- Quote: MS 5.6.3 "No space is needed between the translated text and ( )"
- Example: MS 「結束(&E)」 not 「結束(E)」; 「列印(&I)」 not 「列印(&i)」; 「重播(&P)」 not 「重播 (&P)」. Before a colon or an ellipsis: 「搜尋(&S):」, 「關於(&B)...」; after an exclamation mark: 「開始!(&S)」.
- Checker: judgment only (desktop resource strings are outside the checker, and the spacing part has no web-tier quote).

#### ZW-15 (TW-15) · A link to a page not in Chinese ends with (英文); to a machine-translated page, with (機器翻譯).
- Kind: WRITE.
- Strength: one translation guide (Microsoft).
- Quote: MS 5.4 "please translate the link text and add (英文) at the end of the text so the users know they are going to be directed to a unlocalized website." … "add (機器翻譯) at the end of the text"
- Example: no sourced example.
- Checker: judgment only (the target page's language cannot be read from the string).

#### ZW-16 (TW-16) · Version strings put the number before 版.
- Kind: WRITE.
- Strength: one translation guide (Microsoft: one example under "punctuation examples of "Version x.x"").
- Quote: MS 5.2 "Version 4.2" → 「4.2 版」. The space in the example is the extract's reading; the rule here is the order only.
- Example: the one in the quote.
- Checker: judgment only (no quoted wrong form).

### Errors and messages

#### ZW-18 (TW-18) · Microsoft's standard phrases for errors; avoid 您可能想要.
- Kind: WRITE.
- Strength: one translation guide (Microsoft). A default it allows leaving: "feel free to use other ways to express the source meaning if they work better in the context" (verdict).
- Quote: MS 5.6.2 "When translating standard phrases, standardize." Table: "Cannot … / Could not …" → 「無法...」 (「無法刪除檔案。」); "Failed to …" → 「無法...」; "Cannot find … / Unable to locate …" → 「找不到...」 (「找不到資料來源。」); "Not enough memory" → 「記憶體不足」; "... is not available" → 「無法使用...」; "You might want to…" → 「建議您...」, "Please avoid 您可能想要...".
- Example: the pairs in the quote.
- Checker: **ZW-18, FYI**: 您可能想要.

#### ZW-19 (TW-19, rewritten to the verdict) · Microsoft asks for error text that reads natural and empathetic; its samples are short and give the action to try again.
- Kind: WRITE.
- Strength: one translation guide (Microsoft): an encouragement and sample translations, with no rule on order or structure (verdict).
- Quote: MS 5.6.2 "translators are encouraged to apply them to ensure target translation is more natural, empathetic and not robot-like."; MS 2.2.1 explanation: "provide the user with a short and friendly message with the action to try again".
- Example: MS 2.2.1 「密碼不正確，請再試一次。」 「密碼需區分大小寫。」
- Checker: judgment only.

#### ZW-20 (TW-20) · A placeholder that stands for a number takes a measure word.
- Kind: WRITE.
- Strength: one translation guide (Microsoft).
- Quote: MS 5.6.2 ""Measure word", such as 位, 部, 本, 個, is needed if the placeholder means `<number>`." "No space is needed if the placeholder is to be replaced with a localized string."
- Example: MS 「%d 位使用者在線上」 (the right form only; the space is the extract's reading).
- Checker: judgment only (no quoted string lacks the measure word).

### Words

#### ZW-21 (TW-21, rewritten to the verdict) · Use the words Taiwan uses, not another Chinese variant's.
- Kind: WRITE.
- Strength: the principle, 2 of 3 translation guides (Mozilla, with one example; WordPress, with no pairs). The MOE appendix is a descriptive dictionary table, data credited to 中華文化總會, not an instruction; some Mainland cells repeat the Taiwan word, so a word in the Mainland column is not by that fact wrong in Taiwan (verdict). L10NTW (pointer) records 「程序」 as Taiwan's Windows 95–Vista word for "process".
- Quote: MZ 「不要使用機器翻譯。亦請注意需符合台灣人常用的語法。（例：o網路 x互聯網）」; WP 「非台灣繁體中文的其他中文變體字彙」
- The table: MOE-2A 「兩岸常用詞語對照表」, columns 「臺灣語詞」 and 「大陸語詞」. Rows confirmed in the bytes the page served (page 1): 部落格 / 博客; 埠 / 端口; 筆記型電腦 / 筆記本電腦. The other rows in research/rules.md (pages 2 to 7) came through the extraction tool and are not confirmed at character level; re-read them on the page before they join a word list.
- Example: MZ 互聯網 → 網路.
- Checker: **ZW-21, FYI**: 互聯網 (Mozilla's wrong example), 博客, 端口, 筆記本電腦 (the confirmed rows). The message names the Taiwan column's word and says the table is descriptive.

#### ZW-22 (TW-22) · No internet slang in product text.
- Kind: WRITE.
- Strength: one translation guide (Microsoft) for the list; Mozilla adds an idiom principle.
- Quote: MS 4.2.2 "Samples of unacceptable Traditional Chinese colloquialisms": 「冏」, 「就醬」, 「LKK」, 「童鞋」, 「監介」, 「釀」, 「矮油」; acceptable: 「粉絲」, 「達人」, 「菜鳥」, 「宅」, 「一舉兩得」, 「量身打造」. MZ 「可適度使用成語，但請力求淺顯易懂。」
- Example: the lists in the quote.
- Checker: **ZW-22, FYI**: 冏, 就醬, 監介, 矮油. Not checked: 釀 and 童鞋, which are also ordinary words (to brew; children's shoes), and LKK, Latin letters the checker does not read on their own.

#### ZW-23 (TW-23) · Acronyms: alone as they are; after a full name in parentheses; no plural s.
- Kind: WRITE.
- Strength: one translation guide (Microsoft). WordPress states the singular and capital too (verdict); not counted in the candidate.
- Quote: MS 4.1.2 "If an acronym is used alone, please leave it as it is." … "If an acronym goes after a full name, please follow the format: Traditional Chinese (English acronym)"
- Example: MS 「數個 IFSs」 → 「數個 IFS」; 「3 家 OEMs」 → 「3 家 OEM」. MS 4.2.9: 「選取一或多個 Cookie」.
- Checker: **ZW-23, FYI**: two or more capitals followed by a lowercase s, in a string with Han.

### Punctuation

#### ZW-24 (TW-24) · Chinese sentences take full-width ，。、 and 「」『』.
- Kind: WRITE.
- Strength: 3 of 3 translation guides (Mozilla explicitly for 。 and 「」 and for the comma through its general sentences, per the verdict). The width rests on the WordPress and Mozilla quotes, which are in the bytes the pages served. The MOE handbook (an authority's handbook) prints 句號, 逗號 and 頓號 each with 「占一個字的位置，居正中。」
- Quote: WP 「標點符號：，、。？！「」『』。請注意，標點符號一律使用橫向符號。」; WP 「請不要直接沿用英文內容中的「半形」標點符號，除非是為示範原文怎麼寫。」; MZ 「“.” 作為句點應譯為「。」、“ 作為引號，應翻譯為「」。」 and 「依照文字語言使用相對應的標點符號。」; MS 4.2.7 "Traditional Chinese comma (，) is used in both software and document localization."
- Exception: English commas stay where most elements of a string are not localizable (MS); WP 「而這種分隔字串間的逗號，本就是使用半形逗號，而不能使用全形逗號。」
- Example: no sourced example of the wrong form.
- Checker: judgment only (no quoted string has a half-width comma or period inside Chinese text, so no fixture could be built).

#### ZW-26 (TW-26, rewritten to the verdict) · Quotation marks are 「」, with 『』 inside them.
- Kind: WRITE.
- Strength: corner brackets in place of English quotation marks, 2 of 3 translation guides (Microsoft for quoted passages, new terms and emphasis; Mozilla for “). The nesting, which the verdict found in no guide: an authority's handbook (MOE), with 通常. The handbook's revision note says its horizontal quotation marks became 「」『』 (addendum B).
- Quote: MS 4.2.7 "Quoted passage, new terms and emphasis: Use「」for these scenarios."; MZ 「“ 作為引號，應翻譯為「」。」; MOE-hb 「二、引號分單引號及雙引號，通常先用單引號，如果有需要，單引號內再用雙引號，依此類推。」
- Exceptions (MS): properties, reserved words and parameters keep English quotation marks; UI names take square brackets (ZW-13).
- Example: no sourced example of the wrong form.
- Checker: judgment only (no quoted string puts English quotation marks around Chinese text).

#### ZW-30 (TW-30) · Microsoft, for translated software: no em dash. The MOE handbook lists the dash as a mark.
- Kind: WRITE.
- Strength: one translation guide (Microsoft), against the authority: the MOE handbook lists 破折號 as a mark of its own, 「占行中二格。」, and CLREQ treats the dash as a Chinese mark two Han characters wide (ZW-45). So this is Microsoft's house rule for translated software, not a rule of Chinese writing.
- Quote: MS 4.2.7 "In Traditional Chinese, it should not be used as it looks the same as the Traditional Chinese character for "one" (一)." … "If punctuation is needed, you may want to use ( ), ：or en dash to emphasize the element."; MOE-hb 「說 明 用於語意的轉變、聲音的延續，或在行文中為補充說明某詞語之處，而此說明後文氣需要停頓。」
- Example: MS keeps the en dash in ranges, 「500–1000」, or writes 至: 「持續性效能已提升 2.5 至 3.0 倍。」 (wrapped cell: tier "none").
- Checker: judgment only (the authority prints the dash).

#### ZW-31 (TW-31) · Translated software: half-width parentheses. The MOE handbook prints full-width ones.
- Kind: WRITE.
- Strength: 2 of 3 translation guides (Microsoft; WordPress in a section of its own, as the verdict counts), for translated UI and documents. The half-width side rests on the WordPress quote, which is in the bytes the page served. The authority prints the other width: MOE-hb 夾注號 甲式 （ ） (U+FF08, U+FF09), 「甲式：前後符號各占一個字的位置，居正中。前半不出現在一行之末，後半不出現在一行之首。」 Microsoft's "no space inside" sentence is not confirmed against page bytes.
- Quote: WP 「英文原文裡使用的半形括號，在台灣中文的譯文中，無論是介面或文件，均同樣使用半形括號。」; MS 4.2.7 "English parentheses ( ) is used in both software and document localization. There is no space between the parentheses and the text inside them."
- Example: MS 「精靈模式 (未指定其他參數時為預設值)。」 (wrapped cell: tier "none").
- Checker: judgment only (the authority prints the full-width form).

#### ZW-32 (TW-32) · No italics on Chinese text; bold for emphasis, 《》 for titles.
- Kind: TYPO.
- Strength: 2 of 3 translation guides (Microsoft, WordPress); Mozilla silent.
- Quote: WP 「台灣中文譯文不可以使用「斜體」樣式，如果在原文中遇到以 i 或 em 標籤強調的內容或單字，請改用 strong 標籤以粗體強調。」; MS 4.1.7 "Bold and Italic style should be avoided for Traditional Chinese characters. For example, Italic style should be removed for localized book name and 《》must be used to quote the book name". Microsoft keeps bold for headings, emphasis and user input, and turns italic placeholders bold (verdict).
- Example: no sourced example (Microsoft's pair differs only in formatting, which the extract loses).
- Checker: **ZW-32, FYI**: Han text inside `<i>` or `<em>`, or under an inline `font-style: italic`, in HTML and JSX; in Markdown, Han text inside single-asterisk or single-underscore emphasis.

### Spacing between Han and Latin text

#### ZW-34 (TW-34) · Translated software: a half-width space between Han and Latin letters or digits; none next to full-width punctuation.
- Kind: WRITE.
- Strength: 3 of 3 translation guides. The spacing rests on the Mozilla and WordPress quotes, which are in the bytes the pages served; Microsoft's examples were checked on the page image (rules.md) but are extract-tier here. Taiwan-native text read for this research does not always do it: TIPO's page writes 「所以畫面中標題與內文的字級建議大於16px，並不得小於14px。」. So this is translated-software practice.
- Quote: MZ 「中文字、標點符號與半形英數、符號字元間需用半形空格隔開，但與全形符號間則免。」, with its example 「例如：「這是 Firefox」的「是」與「F」間有使用空格隔開，而「對於使用者，Mozilla」當中的「，」與「M」間則沒有空格。」; WP 「這種情況一律空一個半形空格，但是由半形方括號包覆的介面譯文、半形括號包覆的文字內容是例外狀況。」, and next to full-width marks 「這種狀況不須加上半形空格。」, with 「Permalink 就是「永久連結」(Google 台灣的官方譯文)。」; MS 4.2.10 "Half-width space needed between Chinese characters and English letters or numbers".
- Example: MS 4.2.10 Incorrect 「序列化程式無法處理不明的xsi:type 資訊。」 → Correct 「序列化程式無法處理不明的 xsi:type 資訊。」 (extract-tier; rules.md checked it on the page image, p. 36).
- Dates with 年, 月 and 日 are a house choice (TW-36).
- Checker: **ZW-34, FYI**: a Han character next to a Latin letter or digit with no space. Skipped: a digit next to 年, 月 or 日 (TW-36), and placeholders such as %1, %d and {name}. The full-width-punctuation half is not checked: no quoted string breaks it.

#### ZW-35 (TW-35, rewritten to the verdict) · Microsoft: a half-width space between Han and half-width parentheses or square brackets; none before : ; ! ?
- Kind: WRITE.
- Strength: one translation guide (Microsoft). **Not confirmed against page bytes**: Microsoft extract only (rules.md checked the examples on the page image, p. 37). WordPress names bracketed and parenthesised text as an exception to its spacing rule without saying what the exception is; the verdict finds no disagreement established. The MOE handbook's parentheses are full-width (ZW-31).
- Quote: MS 4.2.10 "Half-width space needed between Chinese characters and half-width punctuations: ( ), [ ]" … "However, the above rule does not apply to : ; ! ?"
- Example: MS Incorrect 「若使用協力廠商(非Windows) 防火牆或」 → Correct 「若使用協力廠商 (非Windows) 防火牆或」; Incorrect 「以滑鼠右鍵按一下[RFID 處理程序]。」 → Correct 「以滑鼠右鍵按一下 [RFID 處理程序]。」. Microsoft's own Correct line has no space between 「非」 and Windows.
- Checker: judgment only (spacing with no web-tier quote).

### Numbers, dates, time and currency

#### ZW-37 (TW-37) · Gregorian dates in locale data: y年M月d日 long, y/M/d short; Hong Kong's short date is day first.
- Kind: TYPO / WRITE (locale data).
- Strength: locale data (CLDR zh-Hant; Taiwan inherits it unchanged). What a formatter outputs, not a style rule.
- Quote: CLDR-G long "y年M月d日", short "y/M/d", yMEd "y/M/d（E）"; *Hong Kong:* CLDR-HK short "d/M/y". MS 4.1.1 weekday abbreviations: 「一、二、三、四、五、六、日」.
- Example: no sourced example.
- Checker: judgment only (no quoted string uses the day-first form).

#### ZW-39 (TW-39) · Time in locale data: a 12-hour form with a day-period word by default, HH:mm available; AM and PM become 上午 and 下午.
- Kind: TYPO / WRITE (locale data).
- Strength: locale data (CLDR) and one translation guide (Microsoft, for AM/PM). No source read says whether a Taiwan UI should prefer the 24-hour clock (research/gaps.md).
- Quote: CLDR-G timeFormats short "Bh:mm"; availableFormats Hm "HH:mm"; day periods include 「上午」, 「下午」, 「中午」, 「晚上」, 「凌晨」. MS 4.1.2: AM → 「上午」, PM → 「下午」. *Hong Kong:* CLDR-HK short time "ah:mm".
- Example: no sourced example.
- Checker: judgment only (no quoted string leaves AM or PM in Chinese text).

#### ZW-40 (TW-40) · Currency in locale data: 新台幣, symbol "$", formal "NT$".
- Kind: WRITE (locale data).
- Strength: locale data (CLDR). The Executive Yuan's rules for government documents write 臺 in their one example: 「新臺幣 1 千元以上 3 萬元以下罰鍰」 (addendum C; its spaces may be layout). No source read covers 元 after the number or decimals for TWD in a UI.
- Quote: CLDR-C TWD displayName 「新台幣」, symbol "$", symbol-alt-formal "NT$"; currency pattern "¤#,##0.00".
- Example: no sourced example.
- Checker: judgment only.

#### ZW-41 (TW-41) · Arabic numerals for most numbers; a measure word when counting.
- Kind: WRITE.
- Strength: one translation guide (WordPress, 大部分); for government documents only, government rules (EY-num), which keep Chinese numerals for descriptive wording, proper names and idioms; locale data (CLDR: Latin digits by default).
- Quote: WP 「無論在英文原文中是以阿拉伯數字還是英文單字表示，為了因應變數帶入的數字必然是阿拉伯數字，」 「在台灣譯文中大部分的數字都應以阿拉伯數字表示。」; EY-num 第二點 「數字用語具一般數字意義（如代碼、國民身分證統一編號、編號、發文字號、日期、時間、序數、電話、傳真、郵遞區號、門牌號碼等）、統計意義（如計量單位、統計數據等）者，或以阿拉伯數字表示較清楚者，使用阿拉伯數字。」
- Measure words: ZW-20.
- Example: no sourced example.
- Checker: judgment only.

### Plain language

#### ZW-42 (TW-42, rewritten to the verdict) · Microsoft: plain words and short sentences; spell out symbols for screen readers.
- Kind: WRITE.
- Strength: one translation guide (Microsoft). Mozilla's sentence is about idioms, and its marketing guide is for marketing copy (verdict). For government websites, a government web guideline (MODA-web, read by keyword): 「使用簡單易懂的文字用語，以章節標題將文章清楚分段」.
- Quote: MS 3 "Use plain language. Use straightforward, concrete, and familiar words."; MS 3.2 "Keep paragraphs short and sentence structure simple—aim for one verb per sentence."
- Example: MS 3.2 「請按一下+」 → 「請按一下加號」.
- Checker: **ZW-42, FYI**: a plus sign right after Han text. Other symbols are not checked: no quoted string uses them.

### Typography (rendering)

These describe how text is set. The copy checker reads strings, so none of them is in it.

#### ZW-43 (TW-43) · In Taiwan, 。，、 and the other pause and stop marks sit in the centre of the character frame.
- Kind: TYPO.
- Strength: an authority's handbook (MOE: 句號, 逗號, 頓號, 分號, 冒號, 問號 and 驚嘆號 each 「占一個字的位置，居正中。」) and a W3C Note draft (CLREQ, descriptive, with "usually"). *Mainland:* lower left in horizontal text.
- Quote: CLREQ 2.1.2 「港台的排版位於字面正中；中國大陸的排版則位受注文字末端、字面始端偏頂端或底端一側（橫排時位字面左下角，直排時位字面右上角）。」; CLREQ 5.1 「台灣、香港多使用符號居中的字形樣式」; exception (old books, science and technology literature, textbooks that cite Western text), CLREQ 5.1.1.2 「亦可見使用位受注文字末端、字面始端的點號（頓號、逗號、句號）」.
- The position comes from the font's glyphs, not from CSS. Declaring a Taiwan language tag and putting a Traditional Chinese face first (ZW-52) is the researcher's test, not a source's.
- Checker: not in the copy checker.

#### ZW-44 (TW-44) · The interpunct (間隔號) takes a full character in Taiwan; half in the Mainland.
- Kind: TYPO.
- Strength: a W3C Note draft (CLREQ, 原則上, names 港台) and an authority's handbook (MOE: 間隔號 ． 「占一個字的位置，居正中。」; ． is U+FF0E in its text layer).
- Quote: CLREQ 5.1 item 9 「間隔號在各個地區排版時寬度有所不同，原則上港台地區無論直排或橫排，都占用一個漢字的大小，在中國大陸則占用半個漢字的大小。」
- Checker: not in the copy checker.

#### ZW-45 (TW-45) · The dash and the ellipsis each take two character cells.
- Kind: TYPO.
- Strength: an authority's handbook (MOE: 破折號 and 刪節號 each 「占行中二格。」) and a W3C Note draft (CLREQ, no region named: 「刪節號呈現上佔兩個漢字空間」).
- Not a Taiwan rule here: CLREQ's "not split across two lines" (「破折號不得以適配分行之由斷開或拆至兩行。」, 「刪節號不得以適配分行之由斷開或拆至兩行。」) names no region, and the current text allows a break where several such marks run together: 「以下標點符號佔用二個漢字的空間，應視為一體，不能拆成兩行。但若這些標點符號連續出現多個，允許將其拆成兩行。如果強制將其排列於一行，前行的字距可能會過大，從而影響整體排版的美觀。」
- The handbook's text layer has two U+2500 box-drawing characters for the dash, so which dash character it means is not known; its ellipsis is two U+2026 (addendum B). Microsoft avoids the dash in translated software (ZW-30).
- Checker: not in the copy checker.

#### ZW-46 (TW-46, rewritten to the current CLREQ) · Line edges: in 港台 most publications keep pause and closing marks off the start of a line and opening marks off its end; CLREQ recommends that level, and Taiwan and Hong Kong newspapers often apply none.
- Kind: TYPO.
- Strength: a W3C Note draft (current CLREQ 6.1.1, names 港台, where no standard exists) and, for paired marks only, an authority's handbook (MOE).
- Quote: CLREQ 「為了保持閱讀順暢、體例一致，多數標點符號的位置有其限制，通常一個標點符號依其性質，禁止出現在一行之首或之末。這項規則自活字排版時代開始通行。在中國大陸，《標點符號用法》（GB/T 15834—2011）規定了簡體中文標點在行間的位置；在港台，雖未有相應的規範，但多數出版品皆以此處所述規則對標點符號進行配置。」 Level "none": 「完全不處理行首行尾禁則。常見於台灣香港等地報刊。」 Level "basic": 「點號（頓號、逗號、句號、冒號、分號、嘆號、問號）、結束引號、結束括號、結束書名號乙式（單雙書名號）、連接號、間隔號、分隔號不能出現在一行的開頭。開始引號、開始括號、開始書名號乙式（單雙書名號）等符號，不能出現在一行的結尾。這是最推薦的方法。」 And: 「行首行尾禁則規定屬於排版風格，用戶代理實現時可以根據自身實際情況，選擇或者自定義適合自己的、更寬松或者嚴格的禁則。」 MOE-hb, for 夾注號 and 書名號 乙式: 「前半不出現在一行之末，後半不出現在一行之首。」
- The superseded draft's notes that Traditional practice is loose are not in the current text (addendum A).
- Checker: not in the copy checker (rendered lines).

#### ZW-47 (TW-47, rewritten to the current CLREQ) · Compressing punctuation is a style choice; many Taiwan print works leave its width unadjusted.
- Kind: TYPO.
- Strength: a W3C Note draft (current CLREQ 6.3.2, names Taiwan; about print).
- Quote: CLREQ 「是否調整取決於對排版風格的判斷，臺灣的很多印刷品都採用不調整的風格；而在中國大陸和香港的出版物中，多數採取調整的風格。」
- The superseded draft's Simplified-only exceptions are not in the current text. Its rule for brackets that meet other marks names no region and is not stated here. *Mainland:* line-end compression of 。，、 is attributed to the national standard: 「依照中國大陸國標GB/T 15834—2011《標點符號用法》第5.1.10條的規定，原本佔一個字寬的標點出現在行尾時，應縮減該符號末側二分之一個漢字大小的空白。」
- Checker: not in the copy checker.

#### ZW-48 (TW-48, rewritten to the current CLREQ) · In 港台, no hanging punctuation at line end in horizontal text; allowed in vertical text.
- Kind: TYPO.
- Strength: a W3C Note draft (current CLREQ 6.1.3, names 港台).
- Quote: CLREQ 「絕多數的中文出版品沒有懸掛行尾點號的慣例。」 「然而，由於港台地區的點號位於字面正中，若在橫排時使用行尾懸掛，體例可能顯得突兀、不良，故橫排時不做行尾懸掛配置；但可用於直排。」
- The CSS mapping (`hanging-punctuation`) is the researcher's.
- Checker: not in the copy checker.

#### ZW-50 (TW-50) · Emphasis dots are not in Taiwan's punctuation handbook; some Taiwan publications still use them.
- Kind: TYPO.
- Strength: a W3C Note draft (CLREQ 5.3.1) and an authority's handbook, by absence (its fifteen marks do not include the emphasis mark; addendum B).
- Quote: CLREQ 「台灣教育部的《重訂標點符號手冊》（2008年修訂版）中未收錄此符號，但仍可見於部分台灣的出版物。」; MOE-hb 「本修訂版之標點符號計有：句號、逗號、頓號、分號、冒號、引號、夾注號、問號、驚嘆號、破折號、刪節號、書名號、專名號、間隔號、連接號等十五種。」
- Context, no region named: horizontal emphasis dots go under the characters (CLREQ 5.3.1, U+25CF or U+2022). Emphasis without dots: ZW-32.
- Checker: not in the copy checker.

#### ZW-51 (TW-51, rewritten to the verdict) · Taiwan's official documents are mostly set in Kai.
- Kind: TYPO.
- Strength: a W3C Note draft (CLREQ 3.1.1.2, descriptive; Taiwan named). The Song and Hei sentences name no region: Song is common for body text, and a few books have begun to use Hei for body text under the influence of the web and digital publishing (verdict).
- Quote: CLREQ 「楷體普遍用於公文書、教科書。臺灣的公文書多全文使用楷體。」 *Mainland:* 「而中國大陸則規定政府公文原則上應使用仿宋體。」
- Checker: judgment only.

#### ZW-52 (TW-52) · Traditional Chinese system font names, by platform.
- Kind: TYPO.
- Strength: an implementer mapping (W3C clreq repository, last verified 2026-09-03), not a style rule. Taiwan is named for PingFang TC (macOS), BiauKai (macOS, Kai) and AR PL UKai TW (Linux, Kai); the Windows rows (Microsoft JhengHei 「微軟正黑體」, PMingLiU 「新細明體」) and the Android row (Noto Sans CJK TC) say Traditional Chinese or zh-Hant.
- Checker: not in the copy checker (it reads strings, not font stacks).

#### ZW-53 (TW-53) · Windows software resources: Microsoft's font-string replacement.
- Kind: TYPO.
- Strength: one translation guide (Microsoft), for Windows resource strings, not web stacks.
- Quote: MS 4.2 "add Microsoft JhengHei UI, Microsoft JhengHei, 新細明體 in front of the English fonts and leave English fonts unchanged."; "Replace console fonts (Consolas, Lucida Console) with "細明體"."; font size "Equal or less than 8 (pt.)" → "9pt".
- Checker: not in the copy checker.

#### ZW-54 (TW-54, rewritten to the verdict) · TIPO, for its own site: type sizes above 16px recommended, never below 14px; the MODA web guideline asks for relative sizes and system or web fonts.
- Kind: TYPO.
- Strength: one agency's site guideline (TIPO), a recommendation (建議), with a 13px row in its own table; not a language authority or a national rule (verdict). A government web guideline (MODA-web), for government websites, with no pixel figure (addendum D).
- Quote: TIPO-font 「所以畫面中標題與內文的字級建議大於16px，並不得小於14px。」; MODA-web 「3. 中文字建議使用系統預設字型或網頁字型（Web Font）」, 「5. 文字大小使用相對尺寸而非固定尺寸」. TIPO-btn names buttons as examples without a rule: 「主要按鈕之樣式，例如下一步、確認、儲存...等。」
- Checker: not in the copy checker.

## The project's DESIGN.md decides

The sources below disagree. None is a rule and the checker tests none. Take the project's choice from DESIGN.md; else what the existing text does; else pick one, keep it across the product, and say which in the reply. One of them (TW-27) is settled at the authority level: when DESIGN.md is silent, the MOE handbook's form is the default.

#### TW-03 Tone
- Conversational, semi-formal and friendly (MS 2.1): "The general style should be clear, friendly and concise. Use language that resembles conversation observed in everyday settings as opposed to the formal, technical language that is often used for technical and commercial content."; (MS 5.7.2) "The tone to be used when localizing in Traditional Chinese should be semi-formal and friendly."
- Make casual English source text more rigorous (WP): 「實務上，原文內容無論是介面字串或文件內容，都應保持較為嚴謹的口氣及態度，」 「請在翻譯成台灣中文內容時加以轉換，改為較為嚴謹的方式展示譯文。」
- Marketing copy (MZ-mkt): 「我們希望使用者感覺沒有距離，我們會使用所有人都能理解的詞語和概念。」 「我們喜歡兩個短句，而不是一個長句。」

#### TW-25 Colon, question and exclamation marks: width
- Colon, half-width in software UI, in all three guides: MS "Use English colon (:) when translating UI. Traditional Chinese colon (：) is used in documentation, Help and web pages." (example 「無效的引數: %1」, extract-tier); MZ 「無論句子語言為何，句尾冒號使用半形冒號「:」，而非全形冒號「：」。」; WP 「如果英文原文使用了半形冒號，在台灣中文譯文中，介面譯文與文件譯文的冒號使用，前者沿用半形冒號，後者使用全形冒號。」. Microsoft puts web pages on the full-width side.
- Question and exclamation marks: half-width in software (MS table; examples 「請問您是否繼續?」 and 「發生一些問題!」, extract-tier) against full-width (WP 「在台灣中文譯文中請使用全形問號。」 「在台灣中文譯文中請使用全形驚嘆號。」). Mozilla is silent.
- The MOE handbook prints ；：？！ full-width, each 「占一個字的位置，居正中。」, and does not speak of user interfaces. Not settled: the guides speak of UI and the handbook does not.

#### TW-27 Book titles and chapter titles (settled at the authority level)
- 《》 for books: Microsoft and WordPress agree.
- Chapter, article and page titles: Microsoft ＜＞ (U+FF1C, U+FF1E): "Use《》for books, manuals, etc. Use ＜＞ for chapters and sections", example 「…請參閱第四章＜程式寫作基礎＞裡的＜特殊字元＞一節。」 (wrapped cell); WordPress 〈〉: 「網站視為書籍，網站名稱使用《》包覆。」 「單篇頁面視為章節，頁面標題使用〈〉包覆。」
- The authority, MOE-hb 書名號 乙式 (U+300A, U+300B, U+3008, U+3009): 「乙式： １、《 》多用於書名，〈 〉多用於篇名。」 When DESIGN.md is silent, use the handbook's 〈〉 for article and chapter titles; Microsoft's ＜＞ is its house form for translated documentation. Not checked.

#### TW-28 Enumeration comma: items written in English
- Both Microsoft and WordPress put 、 between items of a Chinese list: MS "Note comma is used when enumerating several items in English while pause symbol (、) is used in Traditional Chinese."; WP 「英文沒有頓號，但在台灣中文可以使用能區隔同級字彙的全形頓號。」
- Items in English: Microsoft keeps English commas, 「Microsoft, Windows, Outlook, PowerPoint, Azure 及 Xbox Game Pass …」 ("Keep the English commas as is in this context."); WordPress puts 、 between them, 「輸入如 USD、INR、AUD、EUR、GBP 之類的貨幣代碼。」

#### TW-29 Ellipsis
- Three periods (MS): "English (...) is used in both software and document localization." Its own examples mix 「正在儲存文字檔案...」 and 「如需快速瀏覽網頁 …」 (U+2026).
- One U+2026 (MZ): 「刪節號應譯為「…」(U+2026)，可使用一組就好。」; three periods in a source string can be reported as a bug (verdict).
- The authority, MOE-hb 刪節號 …… (two U+2026 in the text layer), 「占行中二格。」. Not settled: it matches neither guide's rule for UI strings. WordPress is silent.

#### TW-33 An English exclamation mark in informational text
- Usually a full-width period (WP): 「請注意，由於語言文化不同，多數英文資訊類原文中的驚嘆號，大多只需要譯為全形句號。」
- Kept (MS, one example): "Something bad happened!" → 「發生一些問題!」.

#### TW-36 Dates: spaces around the digits
- Spaces (MS): "March 14, 2021" → 「2021 年 3 月 14 日」 (extract-tier; rules.md checked it on the page image).
- No spaces (CLDR-G long date "y年M月d日"); a zh-TW date formatter outputs this.
- The Executive Yuan's examples for government documents read 「民國 93 年 7 月 8 日、93 年度、21 世紀、公元 2000 年」, but the spaces may be the layout of a justified table (addendum C).
- ZW-34's check skips a digit next to 年, 月 or 日 for this reason.

## Left out

- **TW-06**, **TW-12**, **TW-17**, **TW-38**: they state no rule. TW-06 is one sample translation that uses 我們; TW-12 and TW-17 are Microsoft term tables with no rule sentence (Windows command names, key names); TW-38 is CLDR's 民國 calendar data, and no source says when a consumer UI should use it (the Executive Yuan's examples use it for government documents only).
- **TW-49** (spacing between Han and Latin text set by the renderer) and **TW-55** (line spacing of a printed book's type area): the current CLREQ names no region for either. The typed space is ZW-34.
- The areas in [`../research/gaps.md`](../research/gaps.md) have no source and no rule: button label form, apologies in errors, empty states, success messages, the 24-hour clock, prices and units, and any Taiwan company's writing guide.
