# /pinyin — writing rules for Simplified Chinese, Mainland China (PW)

**Development draft, 2026-11-21. No native reader of Mainland Chinese has reviewed this file.** It turns the 79 research candidates in [`../research/rules.md`](../research/rules.md) (CN-01 … CN-79) into rules for the skill, at the strength the second reader's verdicts in [`../research/verdicts.md`](../research/verdicts.md) allow. Region: Mainland China (zh-CN) for every rule. Every candidate's fate is in [`coverage.md`](./coverage.md).

## How this file was made

- **What gets in.** A candidate becomes a rule only if its verdict is "supported", or "weaker than stated" and rewritten to what the verdict says the source supports. CN-74 (quote not found), CN-79 (not supported) and the candidates that state no rule (CN-36, CN-75) are left out, and so is CN-61, whose two Microsoft sentences contradict each other. A candidate whose main point is a disagreement between sources is not a rule: it is listed under [The project's DESIGN.md decides](#the-projects-designmd-decides) with each side and its source, and the checker tests none of it. Where the main point is agreed and only a side point is disputed, the main point is a rule and the side point goes to that section. An agreement inside a disputed candidate is noted there and not checked.
- **Ids.** PW-nn carries the number of the candidate it came from (PW-09 is CN-09), so the numbering has gaps.
- **Chinese text.** Every Chinese string in this file is copied from a quote in `research/rules.md` or `verdicts.md`, with its source key, by code rather than by hand. No example was composed. A rule whose sources give no wrong/right pair says "no sourced example". The test (`test/unit/scripts/pinyin-copy-check.test.mjs`) fails if a bracketed string here or a fixture string is not inside one quote, or if a Chinese word outside brackets is not part of some quote. Quotes the byte check found in no source ("none" in `raw-check-2026-11-21.md`), and verdict quotes elided with … or assembled with |, are not used. Microsoft's Chinese words are taken from its own lines in `rules.md` (inside English quotes or its tables), which were read from the PDF extract; the words used here were found in that extract again.
- **Which quotes prove what.** `raw-check-2026-11-21.md` gives each quote a tier. Only "web" (a substring of the bytes a current page served) confirms characters and spaces. A Microsoft quote is "extract": characters confirmed, spaces not. "cells" marks a table row the researcher assembled; every cell of four or more characters is on the page. Quotes under four characters and English-language quotes were never tested. Quotes from `verdicts.md` were put through the same check for this file (2026-11-21, not committed). A non-web quote below says which tier it is.
- **Width and spacing.** A rule about full- or half-width marks or about spaces rests only on "web" quotes, and says which. Where the only support is a Microsoft extract or an English text (CLREQ, the GB/T 15834 Part 5 translation), the rule says "not confirmed against page bytes" and the checker leaves it alone.
- **One voice, counted once.** WordPress China and Teambition's mixed-text page (TB-mix) share headings and example sentences; where both speak they count as one source.
- **Standards.** The Chinese text of GB/T 15834-2011 (punctuation) and GB/T 15835-2011 (numbers) was never read. A rule that rests on the W3C's unofficial English translation of GB/T 15834 Part 5 says so, and none here is called required by a standard.
- **Translation guides** (Microsoft, WordPress, MDN, Mozilla SUMO) describe text translated from English: Microsoft's software and documentation, open-source UI, developer docs, support articles. They are named as such and never offered as native product-writing practice.
- **Semi's English rules.** Semi Design writes its guide in Chinese, but its sections on sentence case, articles, contractions, semicolons and colons are about English copy, and many of its examples are English (CN-36). They are not read as Chinese rules.
- **Region.** A passage that names only Taiwan or Hong Kong, or no region, is not used for a Mainland rule unless another source or the verdict ties it to the Mainland.

## Strength, in words

| Wording | Meaning |
|---|---|
| a State Council notice / a ministerial order | Read on the government page. Each states its own scope, and whether ordinary app or web copy falls inside it is said where the page leaves it open. |
| MIIT's age-friendly specification | A ministry document, not a standard; its scope is the age-friendly version of a website or app. |
| N of 4 company guides | Stated in N of the four Mainland company design systems read that have a writing section: Ant Design (Ant Group), Teambition Clarity Design (Alibaba), Zan Design (Youzan), Semi Design (ByteDance/Douyin). A silent guide is not counted against a rule. |
| WeChat Mini Program guide, Element Plus | Read; cited only where they speak. |
| translation guide(s) only | Microsoft, WordPress China, MDN, Mozilla SUMO, as above. |
| W3C CLREQ | A Group Note Draft that describes practice; not a standard. Its region is copied from the sentence quoted. |
| the Part 5 translation | GB/T 15834-2011 Part 5 in the W3C's unofficial English translation (2013). The words are the translator's; the U+ code points are the translator's annotations. |
| library defaults | A font stack or size published in a library's code or docs: a fact about the library, not a written recommendation. |

No rule here is required by any source that was read in full. Hedges in a quote (尽量, 一般情况下, 默认) stay in the rule.

## Source keys

| Key | Source | URL |
|---|---|---|
| MS | Microsoft, Chinese (Simplified) Localization Style Guide (PDF; read from a local pdftotext extract) | https://download.microsoft.com/download/1/5/9/159cb91c-b61b-4385-97ca-80ccc7ff1fa0/zho-chn-StyleGuide.pdf |
| AD-cw | Ant Design (Ant Group), copywriting spec (raw markdown) | https://raw.githubusercontent.com/ant-design/ant-design/master/docs/spec/copywriting.zh-CN.md |
| AD-df | Ant Design, data format spec (raw markdown) | https://raw.githubusercontent.com/ant-design/ant-design/master/docs/spec/data-format.zh-CN.md |
| AD-font | Ant Design, font spec (raw markdown) | https://raw.githubusercontent.com/ant-design/ant-design/master/docs/spec/font.zh-CN.md |
| TB-cw | Teambition Clarity Design (Alibaba), general copywriting | https://design.teambition.com/doc/copywriting |
| TB-pu | Teambition, punctuation | https://design.teambition.com/doc/punctuation |
| TB-unit | Teambition, numbers, time and currency units | https://design.teambition.com/doc/unit |
| TB-exp | Teambition, time expressions in mail and messages | https://design.teambition.com/doc/expression |
| TB-mix | Teambition, mixed Chinese and Western text (one voice with WP) | https://design.teambition.com/doc/mixed |
| TB-corp | Teambition, corpus (term glossary) | https://design.teambition.com/doc/corpus |
| ZD-pr | Zan Design (Youzan), basic principles | https://design.youzan.com/strategy/principle.html |
| ZD-se | Zan Design, sentence expression | https://design.youzan.com/strategy/sentence-expression.html |
| ZD-lib | Zan Design, standard word list | https://design.youzan.com/strategy/standard-library.html |
| ZD-pu | Zan Design, punctuation | https://design.youzan.com/strategy/punctuation.html |
| ZD-df | Zan Design, data formats | https://design.youzan.com/strategy/data-formats.html |
| ZD-sc | Zan Design, scenario strategy | https://design.youzan.com/strategy/scenario-strategy.html |
| ZD-font | Zan Design, fonts | https://design.youzan.com/visual/font.html |
| SM-cg | Semi Design (ByteDance/Douyin), content guidelines (raw markdown) | https://raw.githubusercontent.com/DouyinFE/semi-design/main/content/experience/content-guidelines/index.md |
| SM-btn / SM-toast / SM-notif / SM-banner / SM-modal / SM-empty | Semi Design component pages, copy section (raw markdown; the URL is the button page, the others sit beside it) | https://raw.githubusercontent.com/DouyinFE/semi-design/main/content/basic/button/index.md |
| SM-ty | Semi Design, Typography doc | https://raw.githubusercontent.com/DouyinFE/semi-design/main/content/basic/typography/index.md |
| SM-css | Semi Design, default theme global.scss (code) | https://raw.githubusercontent.com/DouyinFE/semi-design/main/packages/semi-theme-default/scss/global.scss |
| ARCO-css | Arco Design, default.less (code) | https://raw.githubusercontent.com/arco-design/arco-design/main/components/style/theme/default.less |
| TD-css | TDesign (Tencent), _font.less (code) | https://raw.githubusercontent.com/Tencent/tdesign-common/develop/style/web/theme/_font.less |
| EP | Element Plus, design principles | https://element-plus.org/zh-CN/guide/design.html |
| EP-ty | Element Plus, Typography | https://element-plus.org/zh-CN/component/typography.html |
| WX | WeChat Mini Program design guide | https://developers.weixin.qq.com/miniprogram/design/ |
| WP | WordPress China team, translation style guide (translated open-source UI) | https://cn.wordpress.org/team/handbook/translation-style-guide/ |
| MDN | MDN zh-CN localization guide (developer docs, not UI) | https://raw.githubusercontent.com/mdn/translated-content/main/docs/zh-cn/translation-guide.md |
| MZ-sumo | Mozilla SUMO zh-CN style guide (support articles, not UI) | https://mozilla-l10n.github.io/styleguides/zh-CN/sumo.html |
| CLREQ | W3C, Requirements for Chinese Text Layout, Group Note Draft (04 November 2026); read from a text dump of the current page | https://www.w3.org/TR/clreq/ |
| GBT15834-W3C | W3C Chinese news, English translation of GB/T 15834-2011 Part 5 (2013, unofficial, Part 5 only) | https://www.w3.org/zh-hans/news/2013/translation-of-gb-t-15834-2011-part-5/ |
| GOV-TY | State Council notice publishing the general standard character table (2013) | https://www.gov.cn/zhengce/zhengceku/2013-08/19/content_1289.htm |
| MOE54 | Ministry of Education Order No. 54 on language use in IT products, in force 2023-03-01 | https://hudong.moe.gov.cn/srcsite/A02/s5911/moe_621/202301/t20230113_1039278.html |
| MIIT | MIIT 2021 notice with the age-friendly design specifications for websites (annex 1) and apps (annex 2) | https://www.miit.gov.cn/jgsj/xgj/wjfb/art/2021/art_81e8b738d6b24ad6a04f7ecb3f4e0702.html |
| MDN-tep | MDN, text-emphasis-position | https://developer.mozilla.org/en-US/docs/Web/CSS/text-emphasis-position |
| W3C-lang | W3C i18n, Why use the language attribute? | https://www.w3.org/International/questions/qa-lang-why |

## The checker

`scripts/lang/pinyin-copy-check.mjs` (OmD repository; self-contained, so it can move into the skill unchanged) tests the rules below whose "Checker" line names a check. It reads plain text, Markdown, HTML, JSX/TSX, Vue, Svelte, Astro and JS/TS string literals; no network, no model, no dependencies. Node 18 or later.

- **WARN**: at least two independent company guides (or an authority) state the rule, and the string is the form a source itself gives as wrong: PW-16, PW-18, PW-28, PW-45, and the first check of PW-53.
- **FYI**: everything else. A hit is a prompt to read the string in its place.
- There is no BLOCK.
- Roles (button, heading, paragraph) come from the element only: `<button>`, a component whose name ends in Button, `role="button"`, a submit input; `<h1>`–`<h6>`, `<title>`, a Markdown heading; `<p>` and Markdown or text paragraph lines. A string whose role cannot be traced gets no role rule; a label passed as an expression is not read.
- Japanese text shares the Han range. The checker runs when a file holds Han characters and does not tell Chinese from Japanese.
- `--json` prints `{files, zh, findings, notes, summary, exit}`; each finding has `rule`, `severity`, `file`, `line`, `match`, `message` and `source` (keys and standing). `--strict` exits 1 when any WARN exists. `--self-test` runs `scripts/lang/fixtures/pinyin-copy/`.

## Rules

### Register and address

#### PW-01 (CN-01) · Address the user as 你, not 您, by default.
- Kind: WRITE.
- Strength: 4 of 4 company guides (Ant, Zan, Semi, Teambition) and two translation guides (Microsoft, MDN). Teambition keeps 您 for very formal settings ([decides](#cn-01-您-in-very-formal-settings)); the other three give no exception. No government source on 你 and 您 was found (research/gaps.md).
- Quote: AD-cw 「直接使用「你」、「我」来和用户对话，与用户建立亲密感。避免使用「您」，让用户感觉太过疏远。」; ZD-se 「使用第二人称“你”，不使用“您”、“亲”，与用户平等自然地交流。」; TB-cw 「非正式场合或没有明确指向性的时候，直接使用「你」「我」进行对话」; MDN 「请统一使用“你”。」; MS 4.1.12 "In general, you do not have to translate every pronoun into Simplified Chinese. As long as the meaning is not affected, omit the pronouns for fluent flow of the text. If it’s needed, use "你" instead of "您.""
- Example: ZD-se 推荐 「恭喜你，审核认证通过！」 / 不推荐 「恭喜您，审核认证通过！」.
- Checker: **PW-01, FYI**: 您 anywhere in a string. Not WARN, because one of the four guides allows it in formal settings.

#### PW-02 (CN-02) · Don't mix 你 and 我 in one sentence.
- Kind: WRITE.
- Strength: 3 of 4 company guides (Ant, Teambition, Zan; Semi silent). Zan hedges (尽量).
- Quote: AD-cw 「不要在同一个句式中混用「你」和「我」，交互中指代混乱会让用户相当纠结。」; TB-cw 「不可在同一个句式中混用「你」和「我」」; ZD-pr 「尽量不应在同一个句式中同时使用“你”和“我”两个人称代词。」
- Example: ZD-pr 正确 「请在“我的设置”中修改“个人信息”」 / 错误 「请在“我的设置”修改“你的信息”」.
- Checker: **PW-02, FYI**: one sentence (cut at 。！？) holding both 你 and 我, where 我 is not part of 我们. Ant's own sentence 「我们将会审核你的申诉」 is therefore not reported.

#### PW-04 (CN-04) · No 亲, no chat-style tilde; keep a formal, plain register.
- Kind: WRITE.
- Strength: 2 of 4 company guides (Zan, Teambition: avoid colloquial words) and one translation guide (Microsoft's list). 亲 and the tilde are Zan's alone (ZD-se, ZD-pu). Microsoft separately asks for a friendly, conversational tone (MS 2.1); that is tone, not slang, and does not contradict the list.
- Quote: ZD-se 「避免口语化表达，保持产品内容表达的专业性与严谨性。」; ZD-pu 「文案表达需保持正式与严谨，不应使用无实质意义的聊天式标点，如“~”。」 (the mark in the page bytes is U+007E); TB-cw 「避免使用口语和俗语」; MS 4.1.8 "Unacceptable zh-CN colloquialisms, idioms, and network terms: 给力、山寨、亲、神马、偶、童鞋、酱紫."
- Example: ZD-se 推荐 「报表数据已更新，请下载查看。」 / 不推荐 「亲，数据已经更新完成了，可以下载查看哦～」 (its tilde is U+FF5E in the page bytes).
- Checker: **PW-04, FYI**: a string that opens with 亲 and ，(ZD-se's 不推荐 form); a tilde (U+007E or U+FF5E) right after a Han character at the end of a string (the same example); Microsoft's words 给力, 山寨, 神马, 童鞋, 酱紫. 亲 and 偶 alone are not matched: both are parts of everyday words.

#### PW-05 (CN-05) · Avoid internet slang and new internet words.
- Kind: WRITE.
- Strength: one company guide (Teambition, "avoid or use with care"), MIIT's age-friendly specification (its sentence opens with 「提供适老化服务的网站栏目或服务，」, so its scope is age-friendly sites), and Microsoft's list under PW-04.
- Quote: TB-cw 「网络语言通用性和辨识度不够强，不是每个用户都能理解的；而且网络语言带有一定的戏谑成分，与产品的品牌，和调性可能会有冲突，应避免或谨慎使用。」; MIIT annex 1 3.1.1 「避免采用专业词语或网络新词语作为访问目标和结果表达。如确有必要，应在用户操作前给予必要的提示。」
- Example: no sourced example.
- Checker: judgment only (Microsoft's words are checked under PW-04).

#### PW-06 (CN-06) · Avoid absolute and superlative words.
- Kind: WRITE.
- Strength: 4 of 4 company guides and one translation guide (Microsoft). Semi hedges (尽量). Whether advertising law bears on this was not checked.
- Quote: AD-cw 「不要使用过于绝对的表述，这样会让用户觉得不适。」 and its caption 「「绝不」过于绝对，让用户感到不适。」; TB-cw 「避免极端语气，例如“绝对”，“一定”等」; TB-pu 「描述产品时，不使用“最佳” “最好” “最著名”等具有强烈评价色彩的词语」; ZD-se 「避免使用生硬的指令句式要求用户完成操作，表达不应过于极端，避免使用如“绝对”、“一定”等词汇。」; SM-cg 「尽量避免使用绝对词，例如 “最好”, “绝对”, “总是” 等等。」; MS 4.1.3 "Generally, don't use "最好", "最强", "唯一", etc."
- Example: no sourced pair.
- Checker: **PW-06, FYI**: 绝对, 绝不, 最佳, 最好, 最著名, 最强, 唯一. 一定 and 总是 are named by the guides but not matched: both are everyday words (Teambition's own sentence in CN-01 has 一定的距离感).

#### PW-07 (CN-07) · Don't command or blame the user.
- Kind: WRITE.
- Strength: 4 of 4 company guides and one translation guide (Microsoft).
- Quote: AD-cw 「「不能」、「不要」、「请勿」都给人命令或强迫的感觉。」 and 「如果你想留住你的用户，当出错的时候就不要责怪用户。」; TB-cw 「也尽量避免使用生硬的祈使句式要求用户完成某项操作。」; ZD-se 「使用友善、尊重的语气，不责备用户，平等积极地与用户沟通。」; SM-cg 「同时，也避免用教育、指责和埋怨的语气去和用户沟通」; MS 5.6.2 "never talk down to the users; instead, use a friendly tone."
- Example: ZD-se 推荐 「上传失败，请检查上传格式。」 / 不推荐 「操作错误，无法上传！」.
- Checker: **PW-07, FYI**: 不要 and 请勿, two of the three words in Ant's caption. 不能 is not matched: it is too common in ordinary copy to be a useful prompt.

#### PW-08 (CN-08, rewritten to the verdict) · 抱歉 rather than 对不起; Ant uses 抱歉 only for faults of the system.
- Kind: WRITE.
- Strength: three company glossaries list 抱歉 over 对不起 (Ant, Teambition, Semi). "Only when the system is at fault" is Ant's table note alone. Semi also says to avoid an apologetic tone in general, and keeps 对不起 for very serious cases, such as data deleted for good.
- Quote: AD-cw 「抱歉 | 对不起 | 如果是我们系统造成的结果，可以使用「抱歉」，如果是用户自己造成的结果，不能使用。」 (a table row assembled from cells, each on the page); SM-cg 「抱歉 | Sorry | 对不起」, 「尽量避免使用请求和道歉的语气去和用户进行沟通」 and 「有且只有在非常严重的情况下使用 “对不起”或者类型的抱歉语言，例如用户的信息永久性地不可逆转地被系统删除了。」
- Example: ZD-sc 正确 「试用已结束，该功能无法使用。」 / 错误 「对不起，该功能无法使用。」 (what Zan corrects there is the missing reason, not only the word).
- Checker: **PW-08, FYI**: 对不起.

#### PW-09 (CN-09) · Plain, everyday words; no code language or jargon.
- Kind: WRITE.
- Strength: 4 of 4 company guides, Element Plus's design principles, one translation guide (Microsoft), and MIIT's age-friendly specification (PW-62).
- Quote: AD-cw 「间接、暧昧模糊的说法，生僻和过于「文雅」的用词，会增加用户的认知负荷，所以应当尽量避免使用这类用户无法识别的词汇。」; TB-cw 「若必须使用专业词汇，可在旁边增加注释说明」; ZD-sc 「使用简单通俗的用语，避免技术用语的解释与透出。」; SM-cg 「避免使用代码语言」; MS 3 "Use plain language. Use straightforward, concrete, and familiar words. Plain and accessible language will help people of all learning levels and abilities. Some examples include using several clear words instead of one complicated term or concept."
- Example: no sourced pair (Zan's pair on error codes is PW-28).
- Checker: judgment only.

#### PW-10 (CN-10) · Microsoft's list of formal words to replace with everyday ones.
- Kind: WRITE.
- Strength: translation guide only (Microsoft, for its translated software and documentation). No company guide addresses these words.
- Quote: MS 2.1.2 "Microsoft voice avoids an unnecessarily formal tone." Its table, old to new: 倘若/假使/假若 to 假如/如果; 若要 to 要/如果要; 仅是 to 只是; 日志 to 博客/微博 (for "blog"). MS 4.1.6: 总而言之 to 总之. MS 4.1.5: 「添加至网络」 (Microsoft extract: characters confirmed, spaces not) to 「添加到网络」 (Microsoft extract: characters confirmed, spaces not).
- Example: the pairs above.
- Checker: **PW-10, FYI**: 倘若, 假使, 假若, 若要, 仅是, 总而言之. 至, 日志 and 但是 are not matched: each has ordinary uses (Zan writes date ranges with 至).

#### PW-11 (CN-11) · Inclusive wording.
- Kind: WRITE.
- Strength: one company guide (Semi) and one translation guide (Microsoft). The country-name row is Microsoft's alone; no other source read addresses country names. Semi's gender example is English.
- Quote: SM-cg 「不要使用描述年龄的词，如“年轻”、“老”等。」 and 「不要使用黑名单或白名单」, with its recommended form 「将 Key 添加为禁用名单」. MS 3 (Use this / Not this): 南方人 / 蛮子; 残疾、残障人士 / 残废; 外国人 / 老外; 农村人 / 乡下人; 社会阶层 / 社会阶级; 村委会主任、村主任 / 村长; 回族 / 回回; 朝鲜 / 北朝鲜. MS 3.1 "Don't use gendered pronouns (她, 他, etc.) in generic references. Instead: • Rewrite to use the substitutive form (其). • Omit the pronoun (for example, the 文档 instead of 他的文档). • Refer to a person's role (读者, 员工, 顾客, or 客户, for example). • Use 人员 or 个人." MS 3.2 "Focus on people, not disabilities. Don't use words that imply pity, such as 患病 or 遭受痛苦."
- Example: the pairs above.
- Checker: **PW-11, FYI**: the "Not this" column above, and 黑名单, 白名单. Age words and pronouns are judgment only.

### Buttons, labels and terms

#### PW-12 (CN-12, rewritten to the verdict) · Semi: a button starts with a strong verb and names verb + noun; in a dialog it may reuse the title's verb.
- Kind: WRITE.
- Strength: one company guide (Semi), written in Chinese with English examples only ("Create project", “Done”、“Close”). No source read shows the formula for a Chinese label. Ant's related line is about naming consistency (PW-15), not verb + noun.
- Quote: SM-btn 「按钮应该总是以鼓励行动的强动词开头」 and 「为了给用户提供足够的上下文，在按钮上使用 {动词}+{名词} 内容公式；除了常见的动作，如“Done”、“Close”、“Cancel”或“OK”」; SM-modal 「两种模态对话框的操作按钮在保证标题描述清楚的前提下，只需要使用标题内的动词即可」; SM-empty 「使用 动词 + 名词 的格式」
- Example: no sourced Chinese example.
- Checker: judgment only.

#### PW-13 (CN-13) · No final 。 on buttons, titles, labels, tags, toasts and table sentences.
- Kind: WRITE.
- Strength: 4 of 4 company guides, each for its own list: buttons and titles (Ant); titles, subtitles, tags and toasts (Zan); toasts and notification or banner titles (Semi, which allows ？ at the end of a banner title that is a question); Teambition lists the elements that may drop marks when they stand alone (its list items were paraphrased by the researcher, not quoted). Whether the hint under a form field takes 。 is disputed ([decides](#cn-13-the-hint-under-a-form-field)).
- Quote: AD-cw 「以下情况中不使用句号：输入框下的提示；表格中的句子；句末为文字链（链接前使用句号）；按钮和标题。」; TB-pu 「以下元素单独出现时可以省略标点：」; ZD-pu 「标题、副标题、标签、轻提示（toast）。」; SM-toast 「句尾不使用句号」; SM-notif 「避免使用逗号，句号等标点符号」; SM-banner 「标题上尽量避免使用逗号，句号等标点符号，有且只有是疑问句的时候，支持使用问号结尾」
- Example: no sourced wrong/right pair.
- Checker: **PW-13, FYI**: a button or heading whose text ends in 。. FYI rather than WARN: the guides state the rule but give no wrong string. Toasts, tags and table cells are not checked.

#### PW-14 (CN-14) · Several sentences, body copy, and the sentence before a text link take normal punctuation; a bubble with an internal mark ends with one.
- Kind: WRITE.
- Strength: 4 of 4 company guides. The bubble rule is Teambition's and Zan's.
- Quote: AD-cw 「句末为文字链（链接前使用句号）」; TB-pu 「以下元素单独出现时需要加上标点」, its items 「多句或多段的文案和列表内容」 and 「任何文字链前的句子」, and 「气泡中的内容，如果是两段话，中间用了「，」，那么结尾就需要有「。」；一段话的情况下，可以不用「。」和其他标点符号」; ZD-pu 「在气泡提示中，如果提示文本为非单一句式（文本中包含其他标点符号），结尾需添加标点符号。」 and 「疑问句、感叹句句尾，结尾需添加标点符号。」; SM-notif and SM-banner 「使用正确的标点符号，句子内使用逗号，句子间使用句号」
- Example: no sourced pair.
- Checker: judgment only. Recommended strings in the guides hold a ， and end without a mark (TB-corp 「数据加载中，请稍候」, ZD-pu 「你有 30 条未读消息，请及时查看」), so a pattern cannot tell a bubble from a label.

#### PW-15 (CN-15) · One term per concept; the action's name matches the title of the page it opens.
- Kind: WRITE.
- Strength: 4 of 4 company guides; Element Plus states consistency in general.
- Quote: AD-cw 「操作的名称和目标页面标题的名称保持一致。」 and 「描述同一个事物的词汇要保持统一；」; TB-cw 「如果出现全新的术语，应在上线同时通过气泡提示、帮助文档等方式告知用户新名词的含义」; ZD-pr 「表达描述同一功能名称、术语、概念名称时，需保持统一，避免混用。」; SM-cg 「团队可梳理表意相同的名词或动词，选择其一即可。」
- Example: no sourced pair.
- Checker: judgment only.

#### PW-16 (CN-16) · 登录 not 登陆, 账号 not 帐号, 其他 not 其它.
- Kind: WRITE.
- Strength: 登录: 4 of 4 company glossaries; 账号: 3 (Teambition, Zan, Semi); 其他: 3 (Ant, Teambition, Semi). Zan cites the 7th edition of the Modern Chinese Dictionary for 账号; the dictionary itself was not opened, nor any list from the national language commission. Zan also lists 模板 over 模版 and 阈值 over 阀值 (one guide; those cells sit only in pairs the byte check could not test).
- Quote: SM-cg 「登录 | Log in | 登陆、Login（仅用作名词）」, 「账号 | Account | 帐号」 and 「其他 | Other | 其它」; ZD-lib 「在有赞产品体系中，应使用“账号”。《现代汉语词典》第7版中只收录“账号”而无“帐号”。」; AD-cw 「登录 | 登陆 | 登记记录用户输入的注册账号和密码。」 (a table row assembled from cells, each on the page) and 「其他 | 其它 | 「其他」的应用范围更广」 (a table row assembled from cells, each on the page); TB-corp 「| 用户经过身份验证进入系统 | Login | 登录 | 登陆 |」 (a table row assembled from cells, each on the page)
- Example: ZD-pr 正确 「登录」 / 错误 「登陆」.
- Checker: **PW-16, WARN**: 登陆, 帐号, 其它, the forms the glossaries list as not to be used (登陆 also means "to land"; read the hit in place). 模版 and 阀值 are not matched: no tested quote holds them.

#### PW-17 (CN-17, rewritten to the verdict) · Action verbs where the glossaries agree.
- Kind: WRITE.
- Strength: 3 of 4 company guides keep a verb glossary (Teambition, Zan, Semi). 新建 for Create: all three. 删除 when the object is destroyed, 移除 when it only leaves the current place: Teambition and Zan, with Semi listing both. 启用 and 停用: 2 of 4 (Teambition, Semi); Zan has 启用 only, and Teambition's English keys for these rows are Initiate and Deactivate. Microsoft's term choices are a translation guide's, for its own software (MS 2.1.3: app and application, PC and computer, select and pick, USB flash drive, maximum and minimum limits). Which word the OK button takes is disputed ([decides](#cn-17-the-ok-button)).
- Quote: TB-corp 「| 从无到有新建一个对象，且该过程需要一系列的输入或配置 | Create | 新建 | 创建、添加、新增 |」 (a table row assembled from cells, each on the page) and 「将对象从当前场景中移除，但对象本身并没有被破坏或销毁」; SM-cg 「新建 | Create | 创建」, 「添加 | Add | 新增」, 「删除 | Delete | 清除」, 「移除 | Remove | |」, 「启用 | Enable | 开启、开始使用」, 「停用 | Disable | 暂停、停止使用」; ZD-lib 「把已有对象添加到一个集合之中，如：添加联系人。」, 「“永久性”地去除操作对象，操作对象一般在系统中不再存在。」 and 「在不关闭当前操作流程的前提下，使配置即时生效。」; MS 「Use 应用for "app." Use 应用程序 for "application."」 (Microsoft extract: characters confirmed, spaces not)
- Example: no sourced pair beyond the glossary rows.
- Checker: judgment only (each house keeps its own glossary).

#### PW-18 (CN-18) · Status sentences: noun, then verb and result; active voice, no 被.
- Kind: WRITE.
- Strength: 3 of 4 company guides (Teambition, Zan, Semi; Semi's examples are English). Teambition's two pages agree only on avoiding 被: its copywriting page recommends a verb-first sentence (labels as extracted by the researcher), its glossary the noun-first one.
- Quote: TB-corp 「语序保持一致，推荐句式：名词 + 动词 + 状语」, 「备注：需统一句式保证认知解读体验一致。」 and its row 「| 文件上传成功 | 上传文件成功成功上传文件 |」 (a table row assembled from cells, each on the page); ZD-se 「语序表达推荐使用“名词 + 动词 + 状语”，简化表达。」; ZD-pr 「统一句式，不使用被动语态，简化表达，便于用户理解语义。」; SM-toast 「使用 名词 + 动词 的格式进行说明」; TB-cw 「产品体验以用户为中心，UI 文案要始终以用户为主体」
- Example: ZD-pr 正确 「商品发布成功」 / 错误 「商品已被成功发布」; TB-cw 「成功创建「设计系统」项目」 over 「「设计系统」项目已被成功创建」. (ZD-se's own pair is not cited: two fetches returned its labels in opposite order.)
- Checker: **PW-18, WARN**: 已被成功, the form Zan and Teambition give as wrong. Other uses of 被 are not matched.

#### PW-19 (CN-19) · Don't repeat what the user already knows.
- Kind: WRITE.
- Strength: 4 of 4 company guides.
- Quote: ZD-pr 「在信息准确完整表达的前提下，不重复表达用户已知信息。」; TB-cw 「省略多余无用的词汇，不重复用户已知信息」; AD-cw 「省略无用词汇，不重复用户已知事实；在绝大多数交互场景下，都无需界面描述出全部的细节。」; SM-cg 「只需要提供给用户必要的信息，省略多余的不必要的废话。」
- Example: ZD-pr 正确 「修改成功」 / 错误 「修改门店信息成功」.
- Checker: judgment only.

#### PW-21 (CN-21) · Version numbers: digits only, no V.
- Kind: WRITE.
- Strength: one company guide (Zan). Microsoft writes 「版本 4.2」 (Microsoft extract: characters confirmed, spaces not) (translation guide).
- Quote: ZD-df 「仅使用数字表示版本号即可，无需添加其他信息。」
- Example: ZD-df 正确 「当前版本为 4.43.0」 / 错误 「当前版本为 V4.43.0」.
- Checker: **PW-21, FYI**: V directly before a dotted version number, in a string that holds Han.

#### PW-23 (CN-23) · 请稍候 when nothing follows; 请稍后 before an action.
- Kind: WRITE.
- Strength: one company guide (Zan).
- Quote: ZD-lib 「表示“请稍微等候”，后不接动作，如：数据加载中，请稍候。」 and 「表示“请稍微延后”，后接动作，如：请稍后重试。」
- Example: the two sentences in the quote, both correct forms.
- Checker: judgment only. No quoted string breaks it, so no fixture could be built.

#### PW-24 (CN-24) · Microsoft: a specific measure word rather than 个 by default.
- Kind: WRITE.
- Strength: translation guide only (Microsoft).
- Quote: MS 4.1.10 "Don’t always use the general 个 and try to use specific ones to improve readability."
- Example: preferred 「两位研究人员」 (Microsoft extract: characters confirmed, spaces not) / avoid 「2 个研究人员」 (Microsoft extract: characters confirmed, spaces not).
- Checker: judgment only.

#### PW-25 (CN-25) · Microsoft: short lead-ins rather than full sentences.
- Kind: WRITE.
- Strength: translation guide only (Microsoft).
- Quote: MS 4.1.14 "For the Microsoft voice, use of sentence fragments helps convey a conversational tone. They are used whenever possible as they are short and to the point."
- Example: 「请执行以下步骤：」 (Microsoft extract: characters confirmed, spaces not) to 「步骤如下：」 (Microsoft extract: characters confirmed, spaces not); 「请参阅下面的图像：」 (Microsoft extract: characters confirmed, spaces not) to 「如图所示：」 (Microsoft extract: characters confirmed, spaces not).
- Checker: judgment only.

### Errors, confirmations, toasts and empty states

#### PW-26 (CN-26) · An error says what happened and what to do next.
- Kind: WRITE.
- Strength: 4 of 4 company guides, the WeChat Mini Program guide (form errors) and one translation guide (Microsoft, which asks for natural, empathetic, not robot-like messages).
- Quote: ZD-sc 「告诉用户错误原因，而不是仅告知错误事实。」 and 「明确简洁地告诉用户如何解决问题，不要做过多解释说明。」; ZD-se 「优先陈述事实，告诉用户发生了什么。」 and 「后半部分引导操作，给出用户解决问题的方法。」; AD-cw 「用户需要知道在出现问题的情况下如何进行下一步操作。」; SM-cg 「我们希望可以直接了当的展示问题，并告知解决方案（不建议用道歉 sorry 语气）。」; WX 「表单报错，在表单顶部告知错误原因，并标识出错误字段提示用户修改。」
- Example: ZD-sc 正确 「上传失败，请上传 2M 以内的图片。」 / 错误 「上传失败，请检查上传图片，将图片大小控制在 2M 以内，重新上传。」; ZD-se 推荐 「上传失败，请先清理图片空间。」 / 不推荐 「上传失败」; TB-corp 推荐 「网络出错，查看诊断详情」 / 不推荐 「查看网络出错的诊断详情」; SM-cg 「URL 不可用。可联系站点管理员帮助解决。」.
- Checker: **PW-26, FYI**: a whole string that is a short action followed by 失败 and nothing else (ZD-se's 不推荐 form). Whether to write 失败 at all is disputed ([decides](#cn-27-失败-or-无法)).

#### PW-28 (CN-28) · No technical codes or system words in user-facing errors.
- Kind: WRITE.
- Strength: 2 of 4 company guides (Zan, Semi).
- Quote: SM-cg 「避免使用代码语言」
- Example: ZD-sc 正确 「网络连接断开，请检查网络设置。」 / 错误 「请求失败，通用网络错误，错误编号 500。」; SM-cg 推荐 「网页出错了，请稍后重试」 / 不推荐 「404 ERROR」.
- Checker: **PW-28, WARN**: 错误编号 followed by a number (Zan's 错误 form). Semi's 不推荐 string holds no Chinese and is not matched.

#### PW-29 (CN-29, rewritten to the verdict) · Confirmation dialogs: each point rests on one guide.
- Kind: WRITE.
- Strength: say what changed, then ask: one example pair (Teambition). Title as verb + noun and a body that explains rather than repeats: one guide (Semi), with English examples. 确认 is followed by its action: one guide (Zan, PW-17).
- Quote: SM-modal 「命令式 Modal 与 默认 Modal 两种模态对话框的标题使用 动词 + 名词 的格式，无论是陈述句还是问句」, 「对标题进行具体的解释说明，不要重复标题的信息」 and 「确保用户知道在必要时如何采取行动」; ZD-lib 「使用时需跟动作，如：确认删除。」
- Example: TB-corp 推荐 「你已修改了任务内容，确定放弃并返回吗？」 / 不推荐 「确定放弃未保存的修改内容并返回吗？」.
- Checker: judgment only.

#### PW-30 (CN-30) · Toasts: short, no final 。; WeChat keeps icon toasts for light success, never for errors.
- Kind: WRITE.
- Strength: 2 of 4 company guides for the 。 (Semi, Zan under PW-13) and the WeChat Mini Program guide (its rule is scoped to Mini Programs). Semi's examples are English.
- Quote: WX 「图标型弹出提示适用于轻量级的成功提示，1.5秒后自动消失，并不打断流程」 and 「特别注意该形式不适用于错误提示，因为错误提示需明确告知用户，因而不适合使用一闪而过的弹出式提示。」; SM-toast 「保持简洁」, 「句尾不使用句号」, 「只提供一个动作」 and 「不使用类似于「已读」类的动作，例如 OK, Got it, Dismiss, Cancel」
- Example: no sourced Chinese pair.
- Checker: judgment only (a toast cannot be told from the element).

#### PW-31 (CN-31, rewritten to the verdict) · Semi: an empty state gives the reason or the next step, doesn't repeat its title, and keeps to one or two sentences.
- Kind: WRITE.
- Strength: one company guide (Semi). Teambition gives one example. How missing data is shown in a cell is disputed ([decides](#cn-31-the-placeholder-for-missing-data)).
- Quote: SM-empty 「可以展示展示空状态的具体原因，也可以展示后续的操作行为去帮助用户消除空状态」, 「不要重复标题上的内容」 and 「尽量保持正文在 1-2 句话内」
- Example: TB-corp 推荐 「搜索无结果」 (its 不推荐 cell runs three items together and is not cited).
- Checker: judgment only.

#### PW-32 (CN-32) · Avoid exclamation marks; Ant allows one in greetings and congratulations.
- Kind: WRITE.
- Strength: 3 of 4 company guides (Ant, Teambition, Zan). Semi's line sits in a punctuation section whose examples are English, so it is not counted.
- Quote: AD-cw 「感叹号会让文案显得过于激动，容易让气氛变得过于紧张。」 and 「当向用户表达问候或祝贺时，使用「！」是合理的语境，例如「欢迎回到社区！」。」; TB-pu 「感叹号用于表达强烈的情感，让文案显得过于感情化，容易让气氛变得过于激动和紧张，不推荐使用。」; ZD-pu 「文案表达需保持平和与冷静，需克制或尽量不使用叹号“！”。」; SM-cg 「尽量避免使用感叹号，除非真的是非常令人兴奋的事情。」
- Example: ZD-se 不推荐 「操作错误，无法上传！」. Zan's own recommended 「恭喜你，审核认证通过！」 ends in ！ (a congratulation, as Ant allows).
- Checker: **PW-32, FYI**: ！ (U+FF01) right after a Han character.

#### PW-33 (CN-33) · Semi: avoid emoji; if one is needed, put it at the end.
- Kind: WRITE.
- Strength: one company guide (Semi).
- Quote: SM-cg 「避免使用 emoji，选择用 icon 代替；如必须使用，可放在句段结尾。」
- Example: no sourced example.
- Checker: judgment only. No quoted Chinese string holds an emoji, so no fixture could be built.

### Characters

#### PW-34 (CN-34) · Use the standard Simplified characters of 《通用规范汉字表》; traditional and variant characters only where the law allows.
- Kind: WRITE.
- Strength: a State Council notice (2013) sets the table for 社会一般应用领域; Ministry of Education Order No. 54, a ministerial order, asks 数字和网络出版物 to use 规范汉字 and points to the national language law for traditional and variant characters. The law itself was not opened. Whether an ordinary app or website is a 数字和网络出版物 is not settled by the pages read.
- Quote: GOV-TY 「《通用规范汉字表》公布后，社会一般应用领域的汉字使用应以《通用规范汉字表》为准，原有相关字表停止使用。」; MOE54 「第六条 数字和网络出版物使用国家通用语言文字，应当符合汉语拼音、普通话语音、规范汉字、现代汉语词形、标点符号和数字用法等语言文字规范标准。」, 「需要使用汉语方言、繁体字、异体字的，应当符合《中华人民共和国国家通用语言文字法》相关规定。」; scope 「第二条 在中华人民共和国境内生产、销售、出版、发布、推广对国家通用语言文字进行信息化处理和使用国家通用语言文字进行内容编辑的信息技术产品，适用本规定。」, with 「（三）数字和网络出版物。」 among the products listed.
- Example: no sourced example.
- Checker: judgment only (no sourced list of characters to test against).

#### PW-35 (CN-35) · WordPress: zh_TW and zh_HK translations are for reference; don't convert them mechanically.
- Kind: WRITE.
- Strength: translation guide only (WordPress). No Mainland authority's list of Taiwan and Mainland software terms could be opened (research/gaps.md), so the skill ships no such table.
- Quote: WP 「繁体中文（zh_TW、zh_HK）的译文仅供参考，禁止直接复制转换。」
- Example: no sourced example.
- Checker: judgment only.

### Punctuation

#### PW-38 (CN-38) · 、 between parallel words; a comma, not 、, after 首先 or 第一; nothing between consecutive 《》 or “”.
- Kind: WRITE.
- Strength: 、 between parallel words: two translation guides (Microsoft, MDN). The other two points: one company guide (Teambition). All three read as restatements of GB/T 15834, which was not opened.
- Quote: MDN 「另外，请注意并列的词语间应使用顿号而非逗号：」; MS 4.1.13 "Chinese comma (，) is used in both software and document localization. Note comma is used when enumerating several items in English while pause symbol (、) is used in Simplified Chinese." TB-pu 「“首先”“其次”“第一”等序次语后面，用逗号，不用顿号」 and 「如果书名号、引号连续使用，则中间不用其他标点符号。」
- Example: TB-pu 「第一，我们要...第二，我们要...第三，我们还要...」; 推荐 「《安全法》《交通法》《交通法》我们都要遵守」 / 不推荐 「《安全法》、《交通法》、《交通法》我们都要遵守」.
- Checker: **PW-38, FYI**: 、 between a closing 》 or ” and an opening 《 or “ (Teambition's 不推荐 form).

#### PW-40 (CN-40) · Teambition: the end mark goes inside the closing quotation mark for a quoted whole sentence, outside for a quoted part.
- Kind: WRITE.
- Strength: one company guide (Teambition); reads as a restatement of GB/T 15834, not opened.
- Quote: TB-pu 「凡是把引语作为完整独立的话来用，标点放在引号之内」; 「凡是把引语作为作者的话的一个组成部分，标点放在引号之外」
- Example: TB-pu 推荐 「爱因斯坦说：“想象力比知识更重要，因为知识是有限的。”」 / 不推荐 「爱因斯坦说：“想象力比知识更重要，因为知识是有限的”。」.
- Checker: judgment only (whether a quotation is a whole sentence is not decidable by pattern).

#### PW-44 (CN-44) · 《》 around Chinese titles of books, chapters, guides and manuals.
- Kind: WRITE.
- Strength: W3C CLREQ (names the Mainland and GB/T 15834) and one translation guide (Microsoft). How an English title inside Chinese text is marked is disputed ([decides](#cn-44-english-titles-inside-chinese-text)).
- Quote: CLREQ 5.2 "According to the General Rules for Punctuation (GB/T 15834—2011) in Mainland China, the names of books as well as chapters should be quoted using double angle brackets 《》."; MS "Use book title marks 《》 for a Chinese Book title. This is also applicable for other titles, such as online guide, manual, magazine, etc."
- Example: no sourced Chinese example (Microsoft's was not found in the extract in one piece).
- Checker: judgment only.

#### PW-45 (CN-45) · Numbered items: the number takes a full stop "."; a bracketed numeral such as （一） takes nothing after it.
- Kind: WRITE.
- Strength: 2 of 4 company guides (Teambition, Zan). GB/T 15834 may govern this; not opened.
- Quote: TB-pu 「序号如果加括号如（一），后面则不再加其他标点符号。」 and 「序列号后的标点要使用实心句号 "."，不要使用逗号“，”」; ZD-df 「序号使用“阿拉伯数字”加“.”表示，陈述点以分号结尾，最后一个陈述点以句号结尾。」
- Example: ZD-df 正确 「1.文本信息；」 「2.文本信息；」 「3.文本信息。」 / 错误 「1：文本信息；」.
- Checker: **PW-45, WARN**: a string that opens with a number followed by ：(Zan's 错误 form) or ，(the mark Teambition names). Both marks are full-width in the page bytes. 、 after a number is not matched: neither guide gives it as wrong.

#### PW-46 (CN-46) · WordPress: don't repeat a punctuation mark.
- Kind: WRITE.
- Strength: translation guide only (WordPress), and a style preference: the source itself says Mainland usage allows repetition. Its own correct example keeps ？！.
- Quote: WP 「虽然中国大陆的标点符号用法允许重复使用标点符号，但是这么做会破坏句子的美观性。」
- Example: no sourced wrong string.
- Checker: judgment only.

#### PW-47 (CN-47) · No space between a full-width punctuation mark and the text beside it.
- Kind: TYPO (string).
- Strength: three translation guides (Mozilla SUMO, MDN, WordPress) and Teambition's mixed-text page, which shares WordPress's heading and examples and counts with it as one voice. MDN's sentence is cited by the verdict only in an elided form, so it is not quoted here.
- Bytes: every quote below is "web": characters and spaces confirmed in the page bytes.
- Quote: MZ-sumo 「文字与标点符号之间不要留空格。」; WP and TB-mix heading 「全角标点与其他字符之间不加空格」
- Example: WP 「刚刚买了一部 iPhone，好开心！」; TB-mix 推荐 「刚刚注册了 Teambition，好开心！」 / 不推荐 「刚刚注册了 Teambition ，好开心！」 and 「刚刚注册了 Teambition， 好开心！」.
- Checker: **PW-47, FYI**: a space before ，。、；：？！）》」』, or a space after ，。、；：？！（《「『 when text follows.

### Numbers, dates and time

#### PW-48 (CN-48) · Arabic numerals for counts, measures, statistics, amounts and Gregorian dates.
- Kind: WRITE.
- Strength: 3 of 4 company guides (Zan, Ant, Teambition) and two translation guides (Microsoft for numbers with units, Mozilla SUMO for dates and versions). Teambition's lists read as a restatement of GB/T 15835, not opened.
- Quote: ZD-pr 「使用数字进行计量、编号时，为达到醒目的效果，需使用阿拉伯数字。」; AD-cw 「这也是常见问题，用户对于数字的感知速度更快，使用数字而非文字表述会更加有效。」; TB-unit 「物理量值必须要用阿拉伯数字，例如高度、质量、重量、温度、电量 等。」, 「计数、计量及统计表中的数值、正负数及小数、百分比、分数、比例等也必须采用阿拉伯数字」, 「采用公元表示的世纪、年月日时刻」; MZ-sumo 「日期、版本号请使用阿拉伯数字。」; MS 4.1.10 "When numeral is used with measurement units, it should be written in number."
- Example: ZD-pr 正确 「你有 3 条系统通知」 / 错误 「你有三条系统通知」.
- Checker: judgment only: 一 is part of countless everyday words, and Teambition keeps two adjacent numerals in Han (PW-49).

#### PW-49 (CN-49) · Teambition: where Han numerals are used instead.
- Kind: WRITE.
- Strength: one company guide (Teambition); very likely drawn from GB/T 15835, not opened.
- Quote: TB-unit 「相邻两个数字并列使用，必须使用汉字。」; also 「涉及到数字的专有名词」, 「成语、惯用语、缩略语」, 「特定的事件、节日和特殊意义的词组」, 「中国的干支纪年方式和夏历月日」
- Example: no sourced example.
- Checker: judgment only.

#### PW-51 (CN-51) · 万 and 亿 as units for large numbers.
- Kind: WRITE.
- Strength: 3 of 4 company guides (Ant, Teambition, Zan). Whether 千, K or W may be used is disputed ([decides](#cn-51-千-k-and-w)).
- Quote: AD-df 「如果一个数值很大，那么数值中的“万”“亿”单位可采用汉字。」; TB-unit 「当数字的尾数出现多个 “0” 的时候（5 位数或以上），要以“万”、“亿”为单位」; ZD-df 「消费者端看到的商品销量为“411111”，可转换为“41 万”。」
- Example: TB-unit, labelled right 「12.6 万个」 / wrong 「12 万 6 千个」.
- Checker: **PW-51, FYI**: a number in 万 followed by a number in 千 (Teambition's wrong form).

#### PW-53 (CN-53) · Dates in compact UI: hyphens with zero-padded month and day; 年月日 dates without padding; not slashes.
- Kind: WRITE.
- Strength: 4 of 4 company guides write hyphenated dates (Ant as the default, Zan, Semi, Teambition); Zan states the padding rules and gives the wrong forms; Semi says not to use the slash. Microsoft lists dates among uses of the slash ("4. Indicates dates. For example, 1994/1/1"); the verdict reads that as one item in a list, not a date-format recommendation. Whether 年月日 dates take spaces is disputed ([decides](#cn-53-spaces-inside-年月日-dates)). GB/T 7408 and GB/T 15835 were not read.
- Quote: AD-df 「中国默认使用 `yyyy-mm-dd` 格式。」; ZD-df 「日期使用分隔符时，需使用“-”作为分隔符；日和月计数在“10”以下时，需使用“0”补齐时间信息；」, 「日期不使用分隔符时，日和月计数在“10”以下时，不需使用“0”补齐日期时间信息；」 and 「年、月、日单独使用时，后面需带上中文单位。」; SM-cg 「使用短线–（Option和-）连接年月日，不使用 / ，如：en：03/01/2022；   zh：2022-03-01」; TB-exp 「在孤立的信息位置，需采用 03-18」 and 「例如 YYYY-MM-DD」; TB-pu 「表达年月日时，中间间隔用“-”」
- Example: ZD-df 正确 「2018-02-02」 / 错误 「2018/12/12」, 「2018-2-2」; 正确 「2018年2月2日」 / 错误 「2018年02月02日」; 正确 「2018年」 / 错误 「2018Y」. TB-pu 推荐 「2019-01-02」.
- Checker: **PW-53, WARN**: a date written year/month/day with slashes (Zan's 错误 form; Semi's rule). **FYI**: a hyphenated date whose month or day lacks its zero, and a 年月日 date with a zero-padded month or day (Zan's 错误 forms).

#### PW-54 (CN-54) · Time: 24-hour clock; date before time, with a space between; Microsoft's mapping where a source string has AM/PM.
- Kind: WRITE.
- Strength: the 24-hour clock: 2 of 4 company guides (Ant as the default, which also lists a 12-hour format; Semi), and Zan's examples. The order: one guide (Zan). The space between date and time: one guide (Ant); its quote is "web", so the space is confirmed in the page bytes. The AM/PM mapping: translation guide only (Microsoft), for translating source strings.
- Quote: AD-df 「**时间格式**：默认使用二十四小时制：」 and 「日期与时间连在一起时，两者之间用「空格」隔开，如“2019-12-08 06:00:00”。」; SM-cg 「使用 24 小时制表示时刻，如 07:00，21:00，不使用 am、pm」; ZD-df 「日期、星期与时刻一起使用时，格式为“日期 时刻”或“日期 星期 时刻”。」; MS 4.1.2 "Translations of AM/PM acronyms should be varied along various time periods, that is: Use “凌晨” for 12:00 AM – 5:59 AM Use “上午” for 6:00 AM – 11:59 AM Use “中午” for 12:00 PM – 12:59 PM Use “下午” for 1:00 PM – 05:59 PM Use “晚上” for 6:00 PM – 11:59 PM"
- Example: ZD-df 正确 「2018-12-12 周三 12:00:00」 / 错误 「12:00:00 2018-12-12 周三」.
- Checker: **PW-54, FYI**: a time followed by a date (Zan's 错误 form). am and pm are not matched: no quoted Chinese string holds them as copy.

#### PW-55 (CN-55) · Weekdays as 周一 … 周日, not 星期一.
- Kind: WRITE.
- Strength: one company guide states it (Zan); Teambition writes 周 in its example; Microsoft uses the same forms for abbreviations (translation guide).
- Quote: ZD-df 「描述“周”的概念时，统一使用“周*”的描述方式，如：周一、周六、周日。」; MS 4.1.1 「周一、周二、周三、周四、周五、周六、周日」 (Microsoft extract: characters confirmed, spaces not)
- Example: ZD-df 正确 「周一」 / 错误 「星期一」; TB-exp 「7 月 3 日（周二） 15：30」.
- Checker: **PW-55, FYI**: 星期 followed by a weekday character (the characters are read from Microsoft's list).

#### PW-56 (CN-56) · Relative time up to 24 hours: 刚刚, N 分钟前, N 小时前.
- Kind: WRITE.
- Strength: 2 of 4 company guides give Chinese relative words (Ant, Teambition) and agree up to 24 hours. What follows differs ([decides](#cn-56-after-24-hours)). Semi's timestamp table has no Chinese relative words.
- Quote: AD-df 「1 分钟以内的时间」, 「1 小时以内的时间」, 「N 分钟前」, 「24 小时以内的时间」, 「N 小时前」; TB-exp 「1 分钟内 | 刚刚 | 刚刚」 (a table row assembled from cells, each on the page), 「大于 1 分钟 | n 分钟前 | 12 分钟前」 (a table row assembled from cells, each on the page), 「20 小时之内（或24小时） | n 小时前 | 19 小时前」 (a table row assembled from cells, each on the page)
- Example: the table rows above.
- Checker: judgment only (formatter output).

#### PW-58 (CN-58) · Phone numbers: masking keeps the first 3 and the last 4 digits; Zan displays them 3-4-4.
- Kind: WRITE.
- Strength: 2 of 4 company guides agree on masking (Ant, Zan); the 3-4-4 display is Zan's.
- Quote: AD-df 「保留手机号码前 3 位与后 4 位。」; ZD-df 「一般情况，隐藏手机号的第 4 位至第 7 位，共 4 位数字」 and 「对于手机号码，可使用“3 4 4” 的格式显示，便于查看，如：135 2456 5865。」; AD-cw 「多用于替换显示隐私信息。」
- Example: the number in Zan's quote.
- Checker: judgment only. No quoted string breaks it.

### Spacing between Han and Latin letters or digits

#### PW-59 (CN-59) · A space between Han and Latin letters, and between Han and digits, in running text.
- Kind: TYPO (string) / WRITE.
- Strength: 3 of 4 company guides (Teambition, Ant, Zan for paragraph text) and three translation guides (WordPress, MDN, Mozilla SUMO); Teambition's mixed-text page and WordPress count as one voice. Zan says short functional text takes no space ([decides](#cn-59-spaces-in-short-functional-text)). Microsoft states no rule, and its examples go both ways. WordPress keeps product names in their official form. CSS `text-autospace` is the typographic route (left out with CN-74).
- Bytes: every quote below is "web": characters and spaces confirmed in the page bytes.
- Quote: WP 「例外：「豆瓣FM」等产品名词，按照官方所定义的格式书写。」; MDN 「请在中文和拉丁语系文字之间保留**一个空格**」 and 「请注意，数字与中文之间也请保留空格：」; MZ-sumo 「中英文混合时应在中英文之间留空格。」; TB-pu and TB-unit 「阿拉伯数字距离汉字前后需要空一格使用，便于辨识和阅读」; AD-cw 「全角字符和半角字符搭配时，需要添加空格，如：两个、2 个、50%。」; ZD-pu 「中文与阿拉伯数字，英文，“+”、“-”、“＆”等符号混排时，使用空格作为间隔。」
- Example: WP 「在 LeanCloud 上，数据存储是围绕 AVObject 进行的。」, 「今天出去买菜花了 5000 元。」; TB-mix 推荐 「简单 7 课，帮助你快速学会 Teambition 的基本操作。」 / 不推荐 「简单7课，帮助你快速学会 Teambition的基本操作。」; TB-pu 推荐 「待处理任务 35 条」 / 不推荐 「待处理任务35条」; ZD-pu 正确 「你有 30 条未读消息，请及时查看」, 「请升级至 iOS 12 以上版本」.
- Checker: **PW-59, FYI**, on running text only (a Markdown or text paragraph line, an HTML `<p>`): a Han character directly beside a Latin letter or a digit. Buttons, headings, labels and other strings are not read, because Zan's functional text takes no space. A digit joined to 年, 月 or 日 is not reported (spacing inside dates is a house choice).

### Plain language and government text

#### PW-62 (CN-62) · MIIT, age-friendly versions: no jargon or new internet words as targets or results; don't rename well-known functions.
- Kind: WRITE.
- Strength: MIIT's age-friendly specification. Each sentence is scoped to sites that provide age-friendly services; not stated for general UI.
- Quote: MIIT annex 1 3.1.1 「避免采用专业词语或网络新词语作为访问目标和结果表达。如确有必要，应在用户操作前给予必要的提示。」; 3.1.3 「避免修改公认的通用名称或功能标识，如确有必要，则应提供必要的说明机制。」
- Example: no sourced example.
- Checker: judgment only.

#### PW-63 (CN-63) · Order No. 54: digital and online publications follow the national language standards; office and proofreading software offers prompts as needed.
- Kind: WRITE.
- Strength: a ministerial order, read; its scope caution is PW-34's. The standards it points to (GB/T 15834, 15835) were not read. Article 8 says 「应当视需要」 (as needed).
- Quote: MOE54 「第六条 数字和网络出版物使用国家通用语言文字，应当符合汉语拼音、普通话语音、规范汉字、现代汉语词形、标点符号和数字用法等语言文字规范标准。」; 「办公套件、智能校对软件等应当视需要为用户提供以下提示功能：」 「（一）规范汉字文本中夹用的繁体字、异体字；」 「（二）错别字、错符；」 「（三）现代汉语异形词非推荐词形；」
- Example: no sourced example.
- Checker: judgment only.

### Typography for the web (not read by the copy checker)

These rules are about rendering and CSS. The copy checker reads strings, so it tests none of them; they are here so that every candidate has a place.

#### PW-64 (CN-64) · In Mainland horizontal text, pause and stop marks sit at the lower left of their square; Taiwan and Hong Kong centre them.
- Kind: TYPO (render).
- Strength: W3C CLREQ (names the Mainland, and the Taiwan and Hong Kong practice for contrast) and the Part 5 translation. Not called required: the Chinese text of GB/T 15834 was not read.
- Bytes: CLREQ's Chinese sentence below is "web" (checked against the current page for this file). Its English sentences and the Part 5 translation were not tested against page bytes. The verdict asks that the CLREQ section label (2.1.2) be checked again.
- Quote: CLREQ 「港台的排版位于字面正中；中国大陆的排版则位于文字末端、字面始端偏顶端或底端一侧（横排时位于字面左下角，直排时位于字面右上角）。」; "In Mainland China, the punctuation marks are usually positioned following the characters they are supposed to mark;" GBT15834-W3C 5.1.1 "They should be placed in the lower left corner, and could not be the start of a line."
- Do not apply the Mainland position to zh-TW or zh-HK pages.

#### PW-65 (CN-65) · Mark Simplified Chinese pages with `lang="zh-CN"` or `zh-Hans` so that the browser can pick Simplified glyphs.
- Kind: TYPO (markup).
- Strength: a W3C i18n article; its wording is "some browsers". It names zh-Hans among the languages whose glyphs differ and names no region. That `lang` also switches the punctuation position of PW-64 is the researcher's inference, not the article's.
- Quote: W3C-lang "In the absence of explicit styling applied by the content author, some browsers automatically assign appropriate fonts according to the language of the content."

#### PW-66 (CN-66) · The interpunct takes half the width of a Han character in Mainland China.
- Kind: TYPO (render).
- Strength: W3C CLREQ (names the Mainland) and the Part 5 translation. **Not confirmed against page bytes**: both quotes are English and were not tested.
- Quote: CLREQ "In Mainland China, interpuncts take up half the space of a Hanzi."; GBT15834-W3C 5.1.7 "Interpuncts(U+00B7) are between the two corresponding words and carry half an em space."

#### PW-67 (CN-67) · Emphasis dots go under horizontal Chinese text: `text-emphasis-position: under right`.
- Kind: TYPO (CSS).
- Strength: the Part 5 translation (5.1.8) and MDN. CLREQ says the same for Chinese without naming a region.
- Quote: GBT15834-W3C 5.1.8 "Emphasis dots and proper marks(underline) should be underneath the characters."; MDN-tep "In Chinese, on the other hand, the preferred position is `under right`."

#### PW-68 (CN-68) · Emphasise Chinese with weight, not italics.
- Kind: TYPO (CSS).
- Strength: one company guide says no italics (Teambition's mixed-text page); Zan recommends Medium for emphasis; Microsoft drops source italics when localizing; CLREQ describes Hei for emphasis in body text (practice, no region). No source read recommends italics for Chinese. Whether to use bold is disputed ([decides](#cn-68-bold-for-emphasis)).
- Quote: TB-mix 「强调中文内容时，可增加字重差异，请勿使用斜体样式」; ZD-font 「当需要强调时，建议使用 Medium」; MS 4.1.7 "a. Please do NOT use italic or bold font style for words or sentences that are italic or bold in the source files."

#### PW-69 (CN-69) · Zan: Medium rather than Semibold for Chinese emphasis; Semibold for digits and Latin text.
- Kind: TYPO (CSS).
- Strength: one company guide (Zan). "Windows-heavy audiences" in the candidate's title is the researcher's gloss.
- Quote: ZD-font 「相对 Semibold，Medium 兼容性更强，在用微软雅黑等字体时也能较好地显示。」; 「建议使用 Semibold，使得中西文混排时更适当。」

#### PW-70 (CN-70) · Font stacks name a Simplified Chinese UI face: PingFang SC for Apple systems and Microsoft YaHei for Windows.
- Kind: TYPO (CSS).
- Strength: library defaults, not written recommendations. Of the six Mainland libraries whose stack could be read, 5 name PingFang SC (Zan by its Chinese name), 5 name Microsoft YaHei, 4 name Hiragino Sans GB; Ant names no Chinese face and asks for the system UI font. Element (docs), Zan (names only), Semi, Arco and TDesign (code).
- Quote: EP-ty 「Inter, 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif;」; ZD-font 「字体家族优先使用系统默认的字体。」; AD-font 「优先使用系统默认的界面字体」; TD-css `--td-font-family: PingFang SC, Microsoft YaHei, Arial Regular;`; MIIT annex 2 1.1, for age-friendly apps, 「在移动应用中，建议使用无衬线字体」
- Observations, not rules: no stack read names a Simplified Chinese face for Linux or Android; Element, Semi and Arco put Inter first.

#### PW-71 (CN-71, rewritten to the verdict) · Desktop main text at 14 (Ant, Zan).
- Kind: TYPO (CSS).
- Strength: 2 of 4 company guides (Ant, Zan; neither gives a unit). Semi's figure is the default of a component size prop, not a body-size recommendation. WeChat lists pt sizes for Mini Programs. These are desktop B2B libraries; no consumer or mobile-web body size was found.
- Quote: AD-font 「从原先的 12 上升至 14」 and 「我们建议的主要字体为 14，与之对应的行高为 22。」; ZD-font 「为了提升用户的阅读体验，我们将 PC 端主字体由原先的 12 升级为 14。」 and 「由于用户年龄层偏大，12 的字号在显示器上的物理大小对于用户阅读体验并不友好」; SM-ty 「段落组件和文本组件支持两种尺寸，`small`（12px） 和 `normal`（14px） 和 `inherit`，默认为`normal`。」; WX 「微信内字体的使用与所运行的系统字体保持一致，常用字号为22, 17, 15, 14, 12(pt)，使用场景具体如下：」

#### PW-73 (CN-73) · MIIT, age-friendly versions: a large-text option, minimum sizes, contrast.
- Kind: TYPO.
- Strength: MIIT's age-friendly specification; scope is its 2021 age-friendly programme.
- Quote: MIIT annex 1 1.2.3 「在不依赖操作系统和浏览器的前提下，计算机适老化网页应提供网页的放大设置与大字屏幕服务，移动网页至少提供一种18dp/pt及以上的大字体。」; annex 2 1.1 「在移动应用中，建议使用无衬线字体，应可对字型大小进行调整（随系统设置调整，或移动应用内部具备字体大小设置选项），」 「主要功能及主要界面的文字信息（不包含字幕、文本图像以及与移动应用功能效果相关的文本）最大字体不小于30 dp/pt，」 「适老版界面及单独的适老版APP中的主要文字信息不小于18 dp/pt，同时兼顾移动应用适用场景和显示效果。」; 1.3 「文本/文本图像呈现方式、图标等元素间的对比度至少为4.5：1（字号大于18 dp/pt时文本及文本图像对比度至少为3：1）。」; 1.4 「文本颜色不是作为传达信息、表明动作、提示响应等区分视觉元素的唯一手段。」

#### PW-76 (CN-76) · Line-start and line-end prohibitions, from GB/T 15834 Part 5 in the W3C's unofficial English translation.
- Kind: TYPO (render).
- Strength: the Part 5 translation (a Mainland standard, read only in that translation). The verdict adds that CLREQ 6.1.1 agrees and names the Mainland standard, lists four strictness levels and calls "basic" the most recommended, and bars a dash or ellipsis at line start only under "strict". Not called required.
- Quote: GBT15834-W3C 5.1.1 "could not be the start of a line."; 5.1.3 "Left quotation marks(U+2018, U+201C), left brackets(U+FF08, U+3014, U+3010)," / "left double angle brackets(U+300A), and left angle brackets(U+3008) should be placed on the left side" / "of the relative characters and could not be the end of a line," / "while right quotation marks(U+2019, U+201D), right brackets(U+FF09, U+3015, U+3011)," / "right double angle brackets(U+300B), and left angle brackets(U+3009) should be placed on the right side" / "of the relative characters and could not be the start of a line." (the second "left angle brackets(U+3009)" is the translation's slip for the right angle bracket)

#### PW-77 (CN-77) · A full-width mark at the end of a line may be set at half width; punctuation spacing may be reduced to avoid a short last line.
- Kind: TYPO (render).
- Strength: the Part 5 translation; 5.1.10 says "should", 5.1.11 "could". **Not confirmed against page bytes** (English quotes). CLREQ 6.3.2 restates 5.1.10 (verdict).
- Quote: GBT15834-W3C 5.1.10 "When a punctuation mark is at the end of the line, to beautify the whole composition," / "even if it's a full-width character, it should carry the same em space of a half-width character."; 5.1.11 "In the practice of composition, for a better composition or reading experience," / "or to avoid the line-breaking of the last character of a bottom paragraph or a new page cause by the last character" / "(which will result in a wasteful and ugly layout), we could reasonably reduce the space of the punctuation mark."

#### PW-78 (CN-78) · Keep an Arabic number on one line.
- Kind: TYPO (render).
- Strength: secondary: a note on the W3C translation page, under the heading 「此外，还有相关的GB/T 15835—2011」; the text of GB/T 15835 was not opened.
- Quote: GBT15834-W3C "An Arabic number in Chinese should stay in one line and never be broken."

## The project's DESIGN.md decides

The sources below disagree, or a candidate recorded a disagreement. None is a rule and the checker tests none. Take the project's choice from its DESIGN.md; else follow what the existing text does; else pick one, keep it across the product, and say which in the reply. An agreement noted inside an entry is not checked either.

#### CN-01 您 in very formal settings
- Teambition (TB-cw): 「如果是非常正式的场合，为了凸显用户的尊贵地位，产品需和用户有一定的距离感，表示对用户的异常尊敬等，可使用「您」。例如银行/尊贵 VIP /信息安全类场景等」
- Ant, Zan and Semi give no exception (PW-01). No source covers banking or government-service products beyond this line.

#### CN-03 when the product says 我们
- Ant (AD-cw) limits it to feedback and appeals: 「当用户向后台反馈问题、提出建议或申诉时，使用「我们」是合理的语境，例如「我们将会审核你的申诉」。」
- Microsoft (MS 2.2.2, a translation guide) uses it in a status message for warmth: "Use of "we" provides a more personal feel." (its sample sentence was not found in the extract in one piece).
- The verdict: the sources support a disagreement, not a rule that 我们 be used sparingly.

#### CN-13 the hint under a form field
- No final 。: Ant (「以下情况中不使用句号：输入框下的提示；表格中的句子；句末为文字链（链接前使用句号）；按钮和标题。」) and Teambition (its list, as paraphrased by the researcher).
- A final 。: Zan, listing 「表单输入框下的提示文本。」 among texts that need one.

#### CN-17 the OK button
- Teambition (TB-corp) maps OK to 确认, not 确定: 「| 确认当前操作并关闭当前窗口 | OK | 确认 | 确定 |」 (a table row assembled from cells, each on the page)
- Zan (ZD-lib) keeps both and splits them by what follows: 「使用时需跟动作，如：确认删除。」 for 确认, with 确定 used without a following action.

#### CN-20 UI names inside running text
- Double quotation marks (Microsoft, a translation guide): "b. When localizing UI terms within software messages/descriptions, please enclose UI terms with double byte double quotation marks (“”)." Example: 「单击“文件”选项卡。」 (Microsoft extract: characters confirmed, spaces not)
- Bold (Semi): 「当文案指代产品中其他的 UI 元素时，需要加粗该文案。」; 「不建议在表达UI元素时使用（“”）的方式，除非没有办法使用加粗效果。」
- Zan joins the levels of a path with a hyphen inside quotation marks: 「使用时用“-”间隔不同层级功能，如：请在“订单 - 交易查询 - 订单查询”中进行查看。」

#### CN-22 ongoing actions
- The 正在 form (Microsoft, a translation guide): "Continuous operations are usually expressed in English with a gerund, which should be translated into Simplified Chinese with the pattern 正在..." and "Uploading… 正在上载… — Though "中" could be used, it is less fluent and might cause confusion in some cases."
- The 中 form (Zan states it as a rule; Teambition writes it in a recommended example): ZD-df 「描述结构为“状态或动作 + 中…”。」 正确 「浏览量：加载中…」 / 错误 「浏览量：正在加载」; TB-corp 「数据加载中，请稍候」; ZD-lib 「表示“请稍微等候”，后不接动作，如：数据加载中，请稍候。」
- Microsoft's 上载 is its own term; no other source uses it.

#### CN-27 失败 or 无法
- 无法 (Ant): 「相对于「失败」，「无法完成」是更加客观的结果，更容易让用户在心理上接受。」 Microsoft's standard phrases (translation guide): 「无法...」 (Microsoft extract: characters confirmed, spaces not), 「无法删除文件。」 (Microsoft extract: characters confirmed, spaces not); 「内存不足」 (Microsoft extract: characters confirmed, spaces not), 「内存不足，无法处理这个命令。」 (Microsoft extract: characters confirmed, spaces not)
- 失败 in recommended copy (Zan, Teambition): 「上传失败」; 「数据加载失败，重新加载。」

#### CN-31 the placeholder for missing data
- Two hyphens (Ant, AD-df): 「无数据用 `--` 表述。」
- One hyphen (Zan, ZD-df): 「当数据字段缺省、无法获取或为非法字段时，使用“-”替换原字段信息。」 正确 「浏览量：-」 / 错误 「浏览量：--」

#### CN-37 punctuation width
- Full-width throughout (three translation guides; quotes "web"): WP example 「嗨！你知道嘛？今天前台的小妹跟我说「喵」了哎！核磁共振成像（NMRI）是什么原理都不知道？JFGI！」; MDN 「请将英文（半角）符号替换成中文（大部分为全角）符号。」; MZ-sumo 「使用中文标准全角标点符号，详见 GB/T15834—2011《标点符号用法》。」. The company guides write full-width marks in their examples, but none of the four states the rule on the pages read.
- Microsoft's two sets (translation guide; Microsoft extract, so spaces are not confirmed): for software strings, half-width : ! ? ( ) followed by one space; for documentation, full-width. "In Simplified Chinese, there are two sets of conventions for localization of Software and Documentation. Refer to the following tables and use the correct set of punctuations: Half-width punctuations or Full-width punctuations." Example: 「错误: %1」 (Microsoft extract: characters confirmed, spaces not)
- Agreement, not checked: ，。、；《》 are full-width in both of Microsoft's sets and in the web-tier guides.

#### CN-39 quotation marks
- “ ” outside, ‘ ’ inside: CLREQ, for the Mainland (quote "web"): 「在中国大陆，采用先双、后单的引号体例，弯引号用于横排、直角引号用于直排。」; Microsoft for documents (extract): 「请查阅第一章的“运行 Setup 出问题时查阅‘诊断和解决问题’一章”的内容。」 (Microsoft extract: characters confirmed, spaces not); Zan, Teambition's punctuation page and others write “ ” in their examples, e.g. ZD-pr 「请在“我的设置”中修改“个人信息”」. The Part 5 translation lists curly marks (its code points are the translator's).
- Corner brackets 「 」: WordPress 「简体中文使用直角引号」, usage 「「老师，『有条不紊』的『紊』是什么意思？」」; Teambition's mixed-text page 「中文使用直角引号」, recommending 「我们询问了多位管理者，远程协同想要保持高效，什么最重要？几乎所有人都提到了「任务管理」。」 over 「我们询问了多位管理者，远程协同想要保持高效，什么最重要？几乎所有人都提到了“任务管理”。」 (one voice with WordPress; Teambition's punctuation page writes “ ”).

#### CN-41 the ellipsis
- Two U+2026, two Han widths (CLREQ, no region named; the Part 5 translation 5.1.5): "consists of six dots, takes up the space of two Hanzi characters"; "This is normally achieved using two U+2026 HORIZONTAL ELLIPSIS characters, side-by-side."
- One half-width … (Ant): 「使用半角的「…」为省略号。」 (code point not confirmed).
- Three ASCII dots in Microsoft's prose, one U+2026 in its example 「正在上载…」 (Microsoft extract: characters confirmed, spaces not) (translation guide).

#### CN-42 the dash
- A two-em dash (CLREQ, no region named; the Part 5 translation 5.1.4): "the two-em dash should be centered in the character frame, and have a width of 2 em"
- No dash (Microsoft, translation guide): "The em dash (—) is used to emphasize an isolated element or introduce an element that is not essential to the meaning conveyed by the sentence. In Chinese, it should not be used as it looks the same as the Chinese character for "one" (一). Oftentimes, there is no need for such punctuation through rephrasing. If punctuation is needed, you may want to use ( ), ：or en dash to emphasize the element."
- Agreement, not checked: a single U+2014 is not the Chinese dash in either.

#### CN-43 ranges and connectors
- A tilde with spaces (Ant, Semi): AD-df 「在日期或时间范围之间显示一个波浪号 （前后需要空格）。」; SM-cg 「由于时间中已有“-” 为表区分，统一使用“~”。」, 「2020-02-06 ~ 2020-02-08」. Microsoft (extract): 「10 ~ 20%」 (Microsoft extract: characters confirmed, spaces not), 「1 ~ 10MB」 (Microsoft extract: characters confirmed, spaces not), 「1KB ~ 10MB」 (Microsoft extract: characters confirmed, spaces not).
- 至 between hyphenated dates, a hyphen between 年月日 dates and numbers (Zan): 「日期或时间中带有分隔符“-”时，用“至”作为连接符表达范围与区间。」 正确 「2018-12-12 至 2018-12-14」 / 错误 「2018-12-12 - 2018-12-14」; 「日期或时间中不带分隔符“-”时，用“-”作为连接符表达范围与区间。」 正确 「2018年12月12日 - 2018年12月14日」 / 错误 「2018年12月12日 至 2018年12月14日」; 「表达数值范围时，使用“-”进行连接，单位跟在第二个数值之后，如：400-500 件。」
- A hyphen, or two (Teambition): TB-pu 「表达一个百分比的区间时，前后数字都要加百分号，中间用“-”链接」 推荐 「30%-50%」; TB-exp 「起始时间：2019-07-23--2019-08-23」. Ant also says 「不使用中文全角的连接号。如：2012-11-12。」
- The verdict: the Part 5 translation's U+301C for the wave connector is the translator's annotation; CLREQ says GB/T 15834 gives no code point for connectors and deduces U+FF5E.
- Also open: whether % repeats on both ends of a range (Teambition) or not (Microsoft).

#### CN-44 English titles inside Chinese text
- Italics, no 《》 (WordPress): 「例外：中文句子内夹有英文书籍名、报刊名时，不应借用中文书名号，应以英文斜体表示。」
- 《》 (Teambition's mixed-text page): 「推荐你阅读《Hackers & Painters: Big Ideas from the Computer Age》，非常的有趣。」

#### CN-50 digit grouping
- By default (Ant; stripped tier, spaces not confirmed): 「千分位 | 默认使用千分位帮助用户阅读。 | 123,220」 (spaces not confirmed). Semi's rule 「如果数字为四位数及更多时，使用逗号隔开」 sits among English examples.
- Only in data, asset and finance modules (Zan): 「一般数据不需使用千分符。」 「在数据、资产、财务等以数据为主的业务模块中应使用千分符。」 「在数据统计模块，单独的数值显示应使用千分符。」
- Teambition's example writes 「今日参会人员 8374 人」 without a separator (on TB-pu).

#### CN-51 千, K and W
- No 千 as a unit (Ant, image caption): 「“千”不能以单位的形式展示。」
- 1K, 1 千, 1W allowed (Zan): 「如 1000 可写成 1K 或 1 千，10000 可写成 1W 或 1 万。」

#### CN-52 currency
- ¥ in compact text, 元 in sentences (Zan; ¥ is U+00A5 in the page bytes): 「点式文本使用“¥”，句子中使用“元”。」 「基于有赞当前业务，关于货币的说明对象为人民币。」; Teambition 「用户输入金额：¥500.00」.
- CNY (Ant): 「以人民币为例，推荐使用 `CNY`，`CNY` 为国际上通用的货币代码。」 Example 「CNY1,123.00」. Semi: 「运用在正式场合（例如交易明细，订单详情）时，展示完整的货币格式，建议默认使用该展示形式」 (its examples are dollars).
- Agreement, not checked: two decimal places for amounts (Zan 「一般情况下保留两位小数。」, Teambition 「在表述资产额度场景中，数字需保留至小数点后两位」). Ant on amounts in words: 「金额数字到「元」为止的，在「元」之后，应写「整」字，在「角」之后可以不写「整」字。」

#### CN-53 spaces inside 年月日 dates
- Spaces (Teambition, in a sentence): 「如果是在一个完整的句子当中，可采用 3 月 18 日。」
- No spaces (Zan): 「2018年2月2日」

#### CN-56 after 24 hours
- A date (Ant): 「24 小时以外的时间」 「用 `mm-dd HH:mm` 的形式表示，即 12-08 08:00」; 「超过一年的时间」 「用 `yyyy-mm-dd HH:mm` 的形式表示，即 2019-12-08 08:00」
- n 天前 (Teambition): 「超过 24 h | n 天前 | 1 天前」 (a table row assembled from cells, each on the page)

#### CN-57 a space between a number and its unit
- A space (WordPress, Semi): WP 正确 「我家的光纤入屋宽带有 10 Gbps，SSD 一共有 20 TB」 / 错误 「我家的光纤入屋宽带有 10Gbps，SSD 一共有 20TB」; SM-cg 「数字和单位之间需要有空格」 (its examples are English).
- No space (Ant, Zan): AD-df 「计量单位默认用小写字母。」 「123,220kg」; ZD-pr 正确 「208.32kg」 / 错误 「208.32 千克」, with 「计量单位存在对应的“国际单位制”英文缩写表达时，需使用英文缩写。」; ZD-pu 「一个完整概念的表述中，数字与英文、符号间不使用空格，如：10%、4K。」. Microsoft's examples go both ways and are not counted.
- Agreement, not checked: no space before % (WordPress, Zan, and Ant's example in PW-59). ° rests on WordPress alone: 「例外：度数／百分比与数字之间不需要增加空格：」 正确 「角度为 90° 的角，就是直角。新 MacBook Pro 有 15% 的 CPU 性能提升。」 / 错误 「角度为 90 ° 的角，就是直角。新 MacBook Pro 有 15 % 的 CPU 性能提升。」. Those WordPress pairs are confirmed in the page bytes, spaces included.

#### CN-59 spaces in short functional text
- No space in functional and descriptive text (Zan, ZD-pu): 「为确保文本阅读的完整性与连续性，一般情况下不使用空格，可在字重、字号、颜色等方面，对需突出文本作出视觉样式的区分。」 「为保证文本阅读的完整性与连续性，一般情况下不使用空格。」
- The other guides state no such limit (PW-59).

#### CN-60 spaces around links
- Spaces around the link text (WordPress): 「请 提交一个 issue 并分配给相关同事。访问我们网站的最新动态，请 点击这里 进行订阅！」
- The Han-Latin rule applies to link text too, and a space before a Chinese link is wrong (MDN): 「对于链接文字和非链接文字部分，同样适用此规则：」 正确 `它指向一个[示例](#示例)` / 错误 `它指向一个 [示例](#示例)`
- In place inside a sentence, a space after a link outside it (Zan): 「超链接文本在句中时，即属于句子的一部分，在句中原有位置显示即可。」 「超链接文本在句外时，在句尾加空格显示。」

#### CN-68 bold for emphasis
- Weight for emphasis: Teambition (PW-68), Zan (Medium), Ant (Medium, 600 for English bold): 「多数情况下，只出现 regular 以及 medium 的两种字体重量，分别对应代码中的 400 和 500。」 「在英文字体加粗的情况下会采用 semibold 的字体重量，对应代码中的 600。」
- Microsoft drops the source's bold when localizing (PW-68 quote).

#### CN-72 line height
- 14 on 22 (Ant): 「我们建议的主要字体为 14，与之对应的行高为 22。」
- 14 on 20 (Zan): 「在设计体系中，主字号 14 建议的行高为 20。」
- Element's line-height options: 1.3, 1.5, 1.7 (labels came back in English).
- At least 1.3 in age-friendly apps (MIIT, scoped): 「段落内文字的行距至少为1.3倍，且段落间距至少比行距大1.3倍，同时兼顾移动应用适用场景和显示效果。」

## Left out

- **CN-36**: states no rule. It is the process note in "How this file was made": Semi's English-copy rules (「始终按句子大小写（Sentence case）原则书写」) are not Chinese rules.
- **CN-61**: Microsoft's two sentences on abbreviations contradict each other and concern English abbreviations; the reading "if a space is unavoidable, make it non-breaking" is the researcher's.
- **CN-74**: quote not found. The verdict gives MDN's actual wording for `insert`: "Adds the specified spacing only if there are no existing spaces between the ideographic and non-ideographic scripts." A later pass can cite it. That a typed space and `text-autospace` together double the gap is not stated by any source read.
- **CN-75**: states no rule (`text-spacing-trim` is not Baseline; MDN).
- **CN-79**: not supported: no opened source gives a line length. The verdict notes that the CLREQ dump (7.1.1) has "should not exceed 48 characters" for horizontal body copy in books; not used.
- The areas in [`../research/gaps.md`](../research/gaps.md) (the GB/T 15834 and 15835 texts, Taiwan-Mainland terms, government plain-language guidance, line breaking in CSS) have no source and no rule.
